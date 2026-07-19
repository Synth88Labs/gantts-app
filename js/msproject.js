/* ============================================================
   msproject.js — MS Project XML (MSPDI) import and export.

   WHY MSPDI AND NOT .MPP

   .mpp is an undocumented binary format. Every browser-side route to
   it ends at a third-party cloud service, which would mean uploading
   the user's project file to someone else's server — the one thing
   this app promises never to happen. MSPDI is Microsoft's own
   published XML schema, opens natively in MS Project via File > Open,
   and can be produced and parsed entirely in the browser. It is the
   honest interop path, not a compromise.

   WHAT MAPS CLEANLY

     our task            MSPDI
     ---------------------------------------------------------------
     name                <Name>
     start / end         <Start> / <Finish>   (local, no timezone)
     type: 'group'       <Summary>1</Summary>
     type: 'milestone'   <Milestone>1</Milestone>
     parentId nesting    <OutlineLevel> (1-based depth)
     progress            <PercentComplete>
     notes               <Notes>
     assignee            <Resource> + <Assignment>
     deps[]              <PredecessorLink> with Type and LinkLag

   WHAT DOES NOT, AND WHY

   MS Project's link Type is an integer with an order that is NOT the
   FS/SS/FF/SF order anyone would guess:

     0 = FF   1 = FS   2 = SF   3 = SS

   Getting this wrong silently reverses dependencies — the plan still
   opens, still looks plausible, and is wrong. LINK_TYPE below is the
   single place that mapping lives, and the test asserts both
   directions against these exact numbers.

   Durations use the ISO-8601-ish PT#H#M#S form counted in WORKING
   hours at 8h/day, which is what MS Project expects. A 3-day task is
   PT24H0M0S, not PT72H0M0S — it is 3 working days, not 3 elapsed days.

   LinkLag is expressed in TENTHS OF A MINUTE. A one-day lag at 8h/day
   is 4800, not 1. This is a documented MSPDI quirk and the most common
   source of wrong lags in third-party exporters.
   ============================================================ */
(function () {
  const HOURS_PER_DAY = 8;
  const MINUTES_PER_DAY = HOURS_PER_DAY * 60;

  /* MS Project link type codes. Deliberately not alphabetical and not
     the order these are usually listed in — see the header. */
  const LINK_TYPE = { FF: 0, FS: 1, SF: 2, SS: 3 };
  const LINK_TYPE_REV = { 0: 'FF', 1: 'FS', 2: 'SF', 3: 'SS' };

  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&apos;');

  /* MSPDI wants local date-times with no zone suffix. Appending Z (or
     an offset) makes MS Project shift every date by the user's offset,
     which shows up as a plan that is one day out for anyone west of
     UTC — silent and very confusing. */
  const dt = (isoDate, endOfDay) =>
    `${isoDate}T${endOfDay ? '17:00:00' : '08:00:00'}`;

  const dateOnly = (s) => String(s || '').slice(0, 10);

  /** Working days between two dates, inclusive, honouring the calendar. */
  function workingDays(cal, start, end) {
    if (!start || !end) return 1;
    if (typeof Cal !== 'undefined' && cal && cal.enabled && Cal.workdaysBetween) {
      const n = Cal.workdaysBetween(cal, start, end);
      return Math.max(1, n);
    }
    const a = new Date(start + 'T00:00:00');
    const b = new Date(end + 'T00:00:00');
    return Math.max(1, Math.round((b - a) / 86400000) + 1);
  }

  const duration = (days) => `PT${Math.max(0, Math.round(days * HOURS_PER_DAY))}H0M0S`;

  /** Parse PT#H#M#S back to whole working days. */
  function parseDuration(s) {
    const m = /^PT(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?$/.exec(String(s || '').trim());
    if (!m) return null;
    const hours = (parseFloat(m[1]) || 0) + (parseFloat(m[2]) || 0) / 60 + (parseFloat(m[3]) || 0) / 3600;
    return hours / HOURS_PER_DAY;
  }

  /* Lag is in tenths of a minute. One working day = 8h = 480min = 4800. */
  const lagToTenths = (days) => Math.round((days || 0) * MINUTES_PER_DAY * 10);
  const tenthsToLag = (t) => (Number(t) || 0) / 10 / MINUTES_PER_DAY;

  /** Depth of a task in the parent chain, 1-based, as OutlineLevel. */
  function outlineLevel(task, byId) {
    let level = 1, guard = 0, cur = task;
    while (cur && cur.parentId && guard++ < 50) {
      cur = byId[cur.parentId];
      if (cur) level++;
    }
    return level;
  }

  const MSProject = {
    LINK_TYPE, LINK_TYPE_REV,
    duration, parseDuration, lagToTenths, tenthsToLag, outlineLevel,

    /* ---------------------------------------------------------- */
    /*  EXPORT                                                     */
    /* ---------------------------------------------------------- */
    export(project) {
      const tasks = (project.tasks || []);
      const byId = {}; tasks.forEach(t => byId[t.id] = t);
      const cal = (project.settings && project.settings.calendar) || { enabled: false };

      /* MSPDI identifies tasks by integer UID. Ours are strings, so a
         stable index map is built once and used for both the task rows
         and every PredecessorLink. */
      const uid = {};
      tasks.forEach((t, i) => uid[t.id] = i + 1);

      // resources, one per distinct assignee
      const people = [...new Set(tasks.map(t => (t.assignee || '').trim()).filter(Boolean))];
      const resUid = {}; people.forEach((p, i) => resUid[p] = i + 1);

      const projStart = tasks.length
        ? tasks.map(t => dateOnly(t.start)).sort()[0] : dateOnly(new Date().toISOString());

      const taskXml = tasks.map((t) => {
        const isGroup = t.type === 'group';
        const isMile = t.type === 'milestone';
        const start = dateOnly(t.start);
        const end = dateOnly(isMile ? t.start : (t.end || t.start));
        const days = isMile ? 0 : workingDays(cal, start, end);

        const links = (t.deps || [])
          .filter(d => uid[d.from])
          .map(d => `        <PredecessorLink>
          <PredecessorUID>${uid[d.from]}</PredecessorUID>
          <Type>${LINK_TYPE[d.type || 'FS'] != null ? LINK_TYPE[d.type || 'FS'] : LINK_TYPE.FS}</Type>
          <LinkLag>${lagToTenths(d.lag)}</LinkLag>
          <LagFormat>7</LagFormat>
        </PredecessorLink>`).join('\n');

        return `      <Task>
        <UID>${uid[t.id]}</UID>
        <ID>${uid[t.id]}</ID>
        <Name>${esc(t.name)}</Name>
        <Active>1</Active>
        <Manual>0</Manual>
        <Type>0</Type>
        <OutlineLevel>${outlineLevel(t, byId)}</OutlineLevel>
        <Summary>${isGroup ? 1 : 0}</Summary>
        <Milestone>${isMile ? 1 : 0}</Milestone>
        <Start>${dt(start, false)}</Start>
        <Finish>${dt(end, true)}</Finish>
        <Duration>${duration(days)}</Duration>
        <DurationFormat>7</DurationFormat>
        <PercentComplete>${Math.max(0, Math.min(100, Math.round(t.progress || 0)))}</PercentComplete>
${t.notes ? `        <Notes>${esc(t.notes)}</Notes>\n` : ''}${links ? links + '\n' : ''}      </Task>`;
      }).join('\n');

      const resXml = people.map(p => `      <Resource>
        <UID>${resUid[p]}</UID>
        <ID>${resUid[p]}</ID>
        <Name>${esc(p)}</Name>
        <Type>1</Type>
      </Resource>`).join('\n');

      let aUid = 0;
      const asgXml = tasks.filter(t => (t.assignee || '').trim() && t.type !== 'group')
        .map(t => `      <Assignment>
        <UID>${++aUid}</UID>
        <TaskUID>${uid[t.id]}</TaskUID>
        <ResourceUID>${resUid[t.assignee.trim()]}</ResourceUID>
        <Units>1</Units>
      </Assignment>`).join('\n');

      /* Weekday exceptions come from the project calendar so a plan
         that skips weekends here also skips them in MS Project. Without
         this the durations we export would be reinterpreted against
         MS Project's own default calendar and the finish dates move. */
      const workdays = (cal && cal.workdays) || [1, 2, 3, 4, 5];
      const weekXml = [1, 2, 3, 4, 5, 6, 0].map((dow) => {
        // MSPDI DayType: 1=Sunday .. 7=Saturday
        const dayType = dow === 0 ? 1 : dow + 1;
        const working = workdays.indexOf(dow) >= 0;
        return `          <WeekDay>
            <DayType>${dayType}</DayType>
            <DayWorking>${working ? 1 : 0}</DayWorking>${working ? `
            <WorkingTimes>
              <WorkingTime><FromTime>08:00:00</FromTime><ToTime>12:00:00</ToTime></WorkingTime>
              <WorkingTime><FromTime>13:00:00</FromTime><ToTime>17:00:00</ToTime></WorkingTime>
            </WorkingTimes>` : ''}
          </WeekDay>`;
      }).join('\n');

      return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Project xmlns="http://schemas.microsoft.com/project">
  <Name>${esc(project.name || 'Project')}</Name>
  <Title>${esc(project.name || 'Project')}</Title>
  <StartDate>${dt(projStart, false)}</StartDate>
  <CalendarUID>1</CalendarUID>
  <ScheduleFromStart>1</ScheduleFromStart>
  <MinutesPerDay>${MINUTES_PER_DAY}</MinutesPerDay>
  <MinutesPerWeek>${MINUTES_PER_DAY * workdays.length}</MinutesPerWeek>
  <DaysPerMonth>20</DaysPerMonth>
  <Calendars>
    <Calendar>
      <UID>1</UID>
      <Name>Standard</Name>
      <IsBaseCalendar>1</IsBaseCalendar>
      <WeekDays>
${weekXml}
      </WeekDays>
    </Calendar>
  </Calendars>
  <Tasks>
${taskXml}
  </Tasks>
  <Resources>
${resXml}
  </Resources>
  <Assignments>
${asgXml}
  </Assignments>
</Project>
`;
    },

    /* ---------------------------------------------------------- */
    /*  IMPORT                                                     */
    /* ---------------------------------------------------------- */
    /**
     * @param {string} xml  MSPDI document
     * @returns {{name:string, tasks:Array, warnings:string[]}}
     */
    import(xml) {
      const warnings = [];
      const doc = new DOMParser().parseFromString(xml, 'application/xml');
      if (doc.querySelector('parsererror')) {
        throw new Error('That file is not valid XML.');
      }
      const root = doc.documentElement;
      if (!root || !/Project/i.test(root.nodeName)) {
        throw new Error('That XML is not an MS Project (MSPDI) file.');
      }

      const text = (el, tag) => {
        const n = el.getElementsByTagName(tag)[0];
        return n ? (n.textContent || '').trim() : '';
      };

      // resources first, so assignments can name them
      const resName = {};
      Array.from(doc.getElementsByTagName('Resource')).forEach(r => {
        const u = text(r, 'UID'); const n = text(r, 'Name');
        if (u) resName[u] = n;
      });
      const assignTo = {};
      Array.from(doc.getElementsByTagName('Assignment')).forEach(a => {
        const t = text(a, 'TaskUID'); const r = text(a, 'ResourceUID');
        if (t && resName[r] && !assignTo[t]) assignTo[t] = resName[r];
      });

      const rows = Array.from(doc.getElementsByTagName('Task'));
      if (!rows.length) throw new Error('No tasks found in that file.');

      const out = [];
      const idFor = {};
      const pending = [];

      rows.forEach((el) => {
        const uid = text(el, 'UID');
        const name = text(el, 'Name');
        const rawLevel = text(el, 'OutlineLevel');

        /* Skip the project-summary row. MS Project puts one at UID 0 /
           OutlineLevel 0 representing the whole plan.

           It must be matched on UID and OutlineLevel, NOT on having an
           empty name: real files name it after the project ("Office
           Fitout"), and only files written by tools that omit the name
           leave it blank. Matching on the blank name alone let the row
           through, which imported a phantom top-level task AND — because
           every real task sits at OutlineLevel 1, one deeper than 0 —
           reparented the entire plan underneath it. The plan still
           opened and still looked plausible, which is what made it worth
           a test of its own. */
        if (uid === '0' || rawLevel === '0') return;

        const isSummary = text(el, 'Summary') === '1';
        const isMile = text(el, 'Milestone') === '1';
        const start = dateOnly(text(el, 'Start'));
        let end = dateOnly(text(el, 'Finish'));
        if (!start) { warnings.push(`"${name || 'unnamed'}" has no start date and was skipped.`); return; }
        if (!end) end = start;

        const id = 'imp_' + uid;
        idFor[uid] = id;

        const deps = [];
        Array.from(el.getElementsByTagName('PredecessorLink')).forEach(p => {
          const pu = text(p, 'PredecessorUID');
          if (!pu) return;
          const typeRaw = text(p, 'Type');
          const type = LINK_TYPE_REV[typeRaw] || 'FS';
          if (typeRaw && !LINK_TYPE_REV[typeRaw]) {
            warnings.push(`Unknown link type "${typeRaw}" on "${name}" — treated as Finish-to-Start.`);
          }
          deps.push({ from: pu, type, lag: tenthsToLag(text(p, 'LinkLag')) });
        });

        const level = parseInt(text(el, 'OutlineLevel'), 10) || 1;
        const pct = parseInt(text(el, 'PercentComplete'), 10) || 0;

        const t = {
          id, name: name || 'Untitled task',
          start, end: isMile ? start : end,
          progress: Math.max(0, Math.min(100, pct)),
          assignee: assignTo[uid] || '',
          type: isSummary ? 'group' : (isMile ? 'milestone' : 'task'),
          parentId: null, collapsed: false,
          notes: text(el, 'Notes'), deps: [],
        };
        out.push(t);
        pending.push({ t, level, deps });
      });

      /* Rebuild the hierarchy from OutlineLevel. MSPDI has no parent
         pointer — nesting is implied by a task's level relative to the
         rows above it, exactly like an indented outline. */
      const stack = [];
      pending.forEach(({ t, level }) => {
        while (stack.length && stack[stack.length - 1].level >= level) stack.pop();
        t.parentId = stack.length ? stack[stack.length - 1].t.id : null;
        stack.push({ t, level });
      });

      // resolve dependency UIDs to our ids, dropping links to skipped rows
      pending.forEach(({ t, deps }) => {
        t.deps = deps
          .filter(d => {
            if (idFor[d.from]) return true;
            warnings.push(`A dependency on "${t.name}" pointed at a task that was not imported and was dropped.`);
            return false;
          })
          .map(d => ({ from: idFor[d.from], type: d.type, lag: d.lag }));
      });

      const name = text(root, 'Title') || text(root, 'Name') || 'Imported project';
      return { name, tasks: out, warnings };
    },
  };

  if (typeof window !== 'undefined') window.MSProject = MSProject;
  if (typeof module !== 'undefined' && module.exports) module.exports = MSProject;
})();
