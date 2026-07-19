/* ============================================================
   ics.js — export a plan as an iCalendar (.ics) file. RFC 5545.

   Pure string building, no DOM, so it can be tested.

   FOUR RULES THAT PRODUCE A FILE WHICH *ALMOST* WORKS

   Every one of these fails quietly: the file imports, the calendar
   shows events, and something is subtly wrong.

   1. DTEND IS EXCLUSIVE FOR ALL-DAY EVENTS.
      A task running Mon-Fri inclusive has DTEND of the *Saturday*.
      Use the Friday and the task shows as Mon-Thu — every event in the
      file one day short, and it still looks like a valid calendar.

   2. LINES FOLD AT 75 OCTETS, AND OCTETS ARE NOT CHARACTERS.
      A long task name must wrap onto a continuation line beginning
      with a space. Counting JS string length instead of UTF-8 bytes
      means a name with accents or CJK folds too late, and strict
      parsers reject the file. Worse, folding must never split a
      multi-byte character in half.

   3. LINE ENDINGS ARE CRLF, EVERYWHERE.
      Bare LF is accepted by Google Calendar and rejected by Outlook,
      which is the most annoying possible way for this to break.

   4. UIDS MUST BE STABLE ACROSS EXPORTS.
      A UID is how a calendar recognises "this is the same event I
      already have". Random UIDs mean every re-export duplicates the
      whole plan instead of updating it, and the user ends up deleting
      forty events by hand. Ours derive from the task id, which is
      stable for the life of the task.

   WHY VEVENT AND NOT VTODO

   VTODO is the semantically correct type for a task with a due date.
   It is also poorly supported — Google Calendar ignores VTODO
   entirely. An all-day VEVENT shows up everywhere, which is the whole
   point of exporting. Semantics lose to actually appearing.

   WHAT THIS CANNOT DO

   A one-shot download, not a subscribable feed. A live feed needs a
   URL the calendar can poll, which needs a server, which this project
   does not have and will not get. Callers should say so rather than
   let the user expect the file to keep updating.
   ============================================================ */
(function () {
  /* RFC 5545 §3.3.11: backslash, semicolon and comma are special
     inside a text value, and newlines become a literal \n. Order
     matters — escaping the backslash after the others would double
     the backslashes we just inserted. */
  function escapeText(s) {
    return String(s == null ? '' : s)
      .replace(/\\/g, '\\\\')
      .replace(/;/g, '\\;')
      .replace(/,/g, '\\,')
      .replace(/\r\n|\r|\n/g, '\\n');
  }

  /* Fold at 75 OCTETS, not characters, and never mid-character.
     Continuation lines start with a single space, which the parser
     strips on unfolding. */
  function fold(line) {
    const bytes = Buffer2(line);
    if (bytes.length <= 75) return line;

    const out = [];
    let start = 0;
    let limit = 75;
    while (start < bytes.length) {
      let end = Math.min(start + limit, bytes.length);
      // Back off until `end` sits on a character boundary (0b10xxxxxx is a continuation byte).
      while (end > start && end < bytes.length && (bytes[end] & 0xc0) === 0x80) end--;
      out.push(fromBytes(bytes.slice(start, end)));
      start = end;
      limit = 74;    // continuation lines lose one octet to the leading space
    }
    return out.join('\r\n ');
  }

  /* UTF-8 encode/decode without assuming Node's Buffer or the DOM. */
  function Buffer2(str) {
    if (typeof TextEncoder !== 'undefined') return new TextEncoder().encode(str);
    return Uint8Array.from(unescape(encodeURIComponent(str)), c => c.charCodeAt(0));
  }
  function fromBytes(bytes) {
    if (typeof TextDecoder !== 'undefined') return new TextDecoder().decode(bytes);
    return decodeURIComponent(escape(String.fromCharCode.apply(null, Array.from(bytes))));
  }

  const compact = (iso) => String(iso).replace(/-/g, '');

  const ICS = {
    escapeText,
    fold,

    /**
     * @param project  the project
     * @param opts     {stamp: 'YYYYMMDDTHHMMSSZ', includeTasks, includeMilestones, includeGroups}
     */
    build(project, opts) {
      const o = Object.assign(
        { includeTasks: true, includeMilestones: true, includeGroups: false }, opts || {});
      const tasks = (project && project.tasks) || [];
      const pname = (project && project.name) || 'Project';

      /* DTSTAMP is "when this file was produced". Injected rather than
         read from the clock so tests are deterministic. */
      const stamp = o.stamp || new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');

      const lines = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//gantts.app//Gantt//EN',
        'CALSCALE:GREGORIAN',
        /* Not part of RFC 5545 but universally honoured, and it is the
           difference between "Project" and "Untitled calendar" in the
           user's sidebar after import. */
        'X-WR-CALNAME:' + escapeText(pname),
        'METHOD:PUBLISH',
      ];

      let count = 0;
      for (const t of tasks) {
        if (!t.start || !t.end) continue;
        const isMs = t.type === 'milestone';
        const isGroup = t.type === 'group';
        if (isGroup && !o.includeGroups) continue;
        if (isMs && !o.includeMilestones) continue;
        if (!isMs && !isGroup && !o.includeTasks) continue;

        /* Rule 1: DTEND is the day AFTER the last day of the event.
           A milestone occupies its single day, so its DTEND is the
           following day too — not the same day, which would be a
           zero-length event that some clients drop silently. */
        const dtStart = compact(t.start);
        const dtEnd = compact(U.addDays(t.end, 1));

        const desc = [];
        if (t.assignee) desc.push('Assignee: ' + t.assignee);
        if (Number(t.progress) > 0) desc.push('Progress: ' + Math.round(t.progress) + '%');
        if (t.notes) desc.push(t.notes);
        desc.push('From the plan "' + pname + '" — gantts.app');

        lines.push('BEGIN:VEVENT');
        // Rule 4: derived from the task id, so a re-export updates in place.
        lines.push('UID:' + t.id + '@gantts.app');
        lines.push('DTSTAMP:' + stamp);
        lines.push('DTSTART;VALUE=DATE:' + dtStart);
        lines.push('DTEND;VALUE=DATE:' + dtEnd);
        lines.push(fold('SUMMARY:' + escapeText((isMs ? '◆ ' : '') + (t.name || 'Task'))));
        lines.push(fold('DESCRIPTION:' + escapeText(desc.join('\n'))));
        lines.push('TRANSP:TRANSPARENT');   // all-day plan items should not show you as busy
        if (isMs) lines.push('CATEGORIES:MILESTONE');
        lines.push('END:VEVENT');
        count++;
      }

      lines.push('END:VCALENDAR');

      // Rule 3: CRLF everywhere, including the final line.
      return { text: lines.join('\r\n') + '\r\n', count };
    },
  };

  if (typeof window !== 'undefined') window.ICS = ICS;
  if (typeof module !== 'undefined' && module.exports) module.exports = ICS;
})();
