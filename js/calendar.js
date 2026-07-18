/* ============================================================
   calendar.js — working-day arithmetic.

   WHY THIS EXISTS

   `showWeekends` only ever shaded the weekend columns. Durations,
   auto-scheduling and the critical path all counted plain calendar
   days, so a 10-day task starting on a Thursday finished on a
   Saturday and a successor started on a Sunday. Every date the CPM
   produced was wrong by roughly the number of weekends it spanned —
   which quietly undermined the scheduling features already shipped.

   This module owns the question "is this a working day?" and the
   arithmetic that follows from it.

   DESIGN NOTES

   - A calendar is { enabled, workdays:[0-6], holidays:{iso:name} }.
     Sunday is 0, matching Date.getDay().
   - `enabled` defaults to TRUE for new projects and is migrated to
     FALSE for existing ones. Turning it on changes what a duration
     means, and silently rewriting somebody's saved plan the first time
     they load a new build would be worse than the bug being fixed.
     Opting in is one toggle, and "Reflow to working days" rewrites
     dates only when the user asks.
   - Every loop here is bounded. A calendar with no working days at all
     (user unticks all seven) would otherwise spin forever; the guards
     return the input instead of hanging the tab.

   HOLIDAY PRESETS

   Presets cover widely observed public holidays and are computed, not
   hardcoded per year — including Easter via the Meeus/Jones/Butcher
   algorithm for the Western church. They are a STARTING POINT: regional
   and substitute-day rules vary, so every date is editable and the UI
   says to check against a local calendar. Better an honest starting
   point than a confident wrong one.
   ============================================================ */
(function () {
  const MAX_SCAN = 4000;   // ~11 years of daily steps; a hard stop, never hit in practice

  function defaults() {
    return { enabled: true, workdays: [1, 2, 3, 4, 5], holidays: {} };
  }

  const Cal = {
    defaults,

    /** Normalise whatever is on the project into a usable calendar. */
    of(project) {
      const c = (project && project.settings && project.settings.calendar) || null;
      if (!c) return Object.assign(defaults(), { enabled: false });
      return {
        enabled: c.enabled !== false,
        workdays: Array.isArray(c.workdays) && c.workdays.length ? c.workdays : [1, 2, 3, 4, 5],
        holidays: c.holidays || {},
      };
    },

    /** Does this calendar actually constrain anything? */
    active(cal) {
      return !!(cal && cal.enabled && cal.workdays.length && cal.workdays.length < 7);
    },

    isHoliday(iso, cal) { return !!(cal && cal.holidays && cal.holidays[iso]); },

    isWorking(iso, cal) {
      if (!cal || !cal.enabled) return true;
      if (!cal.workdays.length) return true;      // nothing selected: treat all days as working
      if (cal.workdays.indexOf(U.dow(iso)) < 0) return false;
      return !Cal.isHoliday(iso, cal);
    },

    /** First working day at or after (dir=1) / at or before (dir=-1) iso. */
    nextWorking(iso, cal, dir) {
      if (!cal || !cal.enabled) return iso;
      const step = dir === -1 ? -1 : 1;
      let d = iso;
      for (let i = 0; i < MAX_SCAN; i++) {
        if (Cal.isWorking(d, cal)) return d;
        d = U.addDays(d, step);
      }
      return iso;   // no working day found — degrade rather than hang
    },

    /** Inclusive end date for `days` working days starting at `start`. */
    endFrom(start, days, cal) {
      const n = Math.max(1, days | 0);
      if (!Cal.active(cal)) return U.endFrom(start, n);
      let d = Cal.nextWorking(start, cal, 1);
      let counted = 1;
      let guard = 0;
      while (counted < n && guard++ < MAX_SCAN) {
        d = U.addDays(d, 1);
        if (Cal.isWorking(d, cal)) counted++;
      }
      return d;
    },

    /** Inclusive count of working days between start and end. */
    duration(start, end, cal) {
      if (!Cal.active(cal)) return U.duration(start, end);
      if (U.parse(end) < U.parse(start)) return 0;
      let d = start, n = 0, guard = 0;
      while (U.parse(d) <= U.parse(end) && guard++ < MAX_SCAN) {
        if (Cal.isWorking(d, cal)) n++;
        d = U.addDays(d, 1);
      }
      return n;
    },

    /** Move `n` working days from iso (n may be negative). Used for lag. */
    shift(iso, n, cal) {
      if (!n) return iso;
      if (!Cal.active(cal)) return U.addDays(iso, n);
      const step = n > 0 ? 1 : -1;
      let left = Math.abs(n), d = iso, guard = 0;
      while (left > 0 && guard++ < MAX_SCAN) {
        d = U.addDays(d, step);
        if (Cal.isWorking(d, cal)) left--;
      }
      return d;
    },

    /* Preserve a task's working-day length while moving its start —
       what a user expects when dragging a bar sideways. */
    moveKeepingDuration(task, newStart, cal) {
      const days = Cal.duration(task.start, task.end, cal) || 1;
      const start = Cal.nextWorking(newStart, cal, 1);
      return { start, end: Cal.endFrom(start, days, cal) };
    },

    // ---------------- holiday presets ----------------

    /** Western Easter Sunday (Meeus/Jones/Butcher). Returns 'YYYY-MM-DD'. */
    easter(year) {
      const a = year % 19, b = Math.floor(year / 100), c = year % 100;
      const d = Math.floor(b / 4), e = b % 4;
      const f = Math.floor((b + 8) / 25);
      const g = Math.floor((b - f + 1) / 3);
      const h = (19 * a + b - d - g + 15) % 30;
      const i = Math.floor(c / 4), k = c % 4;
      const l = (32 + 2 * e + 2 * i - h - k) % 7;
      const m = Math.floor((a + 11 * h + 22 * l) / 451);
      const month = Math.floor((h + l - 7 * m + 114) / 31);
      const day = ((h + l - 7 * m + 114) % 31) + 1;
      return U.toISO(new Date(year, month - 1, day));
    },

    /** nth weekday of a month; n = -1 means the last one. */
    nthDow(year, month, dow, n) {
      if (n === -1) {
        const last = new Date(year, month, 0);            // last day of month
        const back = (last.getDay() - dow + 7) % 7;
        last.setDate(last.getDate() - back);
        return U.toISO(last);
      }
      const first = new Date(year, month - 1, 1);
      const fwd = (dow - first.getDay() + 7) % 7;
      first.setDate(1 + fwd + (n - 1) * 7);
      return U.toISO(first);
    },

    COUNTRIES: [
      { code: 'US', name: 'United States' },
      { code: 'GB', name: 'United Kingdom' },
      { code: 'CA', name: 'Canada' },
      { code: 'AU', name: 'Australia' },
      { code: 'DE', name: 'Germany' },
      { code: 'FR', name: 'France' },
      { code: 'ES', name: 'Spain' },
      { code: 'IN', name: 'India (national)' },
      { code: 'BR', name: 'Brazil' },
    ],

    /** Holidays for one country and year, as { iso: name }. */
    preset(code, year) {
      const y = year;
      const out = {};
      const put = (iso, name) => { if (iso) out[iso] = name; };
      const easter = Cal.easter(y);
      const goodFriday = U.addDays(easter, -2);
      const easterMonday = U.addDays(easter, 1);

      switch (code) {
        case 'US':
          put(`${y}-01-01`, "New Year's Day");
          put(Cal.nthDow(y, 1, 1, 3), 'Martin Luther King Jr. Day');
          put(Cal.nthDow(y, 2, 1, 3), "Presidents' Day");
          put(Cal.nthDow(y, 5, 1, -1), 'Memorial Day');
          put(`${y}-06-19`, 'Juneteenth');
          put(`${y}-07-04`, 'Independence Day');
          put(Cal.nthDow(y, 9, 1, 1), 'Labor Day');
          put(Cal.nthDow(y, 10, 1, 2), 'Columbus Day');
          put(`${y}-11-11`, 'Veterans Day');
          put(Cal.nthDow(y, 11, 4, 4), 'Thanksgiving');
          put(`${y}-12-25`, 'Christmas Day');
          break;
        case 'GB':
          put(`${y}-01-01`, "New Year's Day");
          put(goodFriday, 'Good Friday');
          put(easterMonday, 'Easter Monday');
          put(Cal.nthDow(y, 5, 1, 1), 'Early May bank holiday');
          put(Cal.nthDow(y, 5, 1, -1), 'Spring bank holiday');
          put(Cal.nthDow(y, 8, 1, -1), 'Summer bank holiday');
          put(`${y}-12-25`, 'Christmas Day');
          put(`${y}-12-26`, 'Boxing Day');
          break;
        case 'CA':
          put(`${y}-01-01`, "New Year's Day");
          put(goodFriday, 'Good Friday');
          put(Cal.nthDow(y, 9, 1, 1), 'Labour Day');
          put(`${y}-07-01`, 'Canada Day');
          put(Cal.nthDow(y, 10, 1, 2), 'Thanksgiving');
          put(`${y}-12-25`, 'Christmas Day');
          put(`${y}-12-26`, 'Boxing Day');
          break;
        case 'AU':
          put(`${y}-01-01`, "New Year's Day");
          put(`${y}-01-26`, 'Australia Day');
          put(goodFriday, 'Good Friday');
          put(easterMonday, 'Easter Monday');
          put(`${y}-04-25`, 'Anzac Day');
          put(`${y}-12-25`, 'Christmas Day');
          put(`${y}-12-26`, 'Boxing Day');
          break;
        case 'DE':
          put(`${y}-01-01`, 'Neujahr');
          put(goodFriday, 'Karfreitag');
          put(easterMonday, 'Ostermontag');
          put(`${y}-05-01`, 'Tag der Arbeit');
          put(U.addDays(easter, 39), 'Christi Himmelfahrt');
          put(U.addDays(easter, 50), 'Pfingstmontag');
          put(`${y}-10-03`, 'Tag der Deutschen Einheit');
          put(`${y}-12-25`, '1. Weihnachtstag');
          put(`${y}-12-26`, '2. Weihnachtstag');
          break;
        case 'FR':
          put(`${y}-01-01`, "Jour de l'an");
          put(easterMonday, 'Lundi de Pâques');
          put(`${y}-05-01`, 'Fête du Travail');
          put(`${y}-05-08`, 'Victoire 1945');
          put(U.addDays(easter, 39), 'Ascension');
          put(U.addDays(easter, 50), 'Lundi de Pentecôte');
          put(`${y}-07-14`, 'Fête nationale');
          put(`${y}-08-15`, 'Assomption');
          put(`${y}-11-01`, 'Toussaint');
          put(`${y}-11-11`, 'Armistice 1918');
          put(`${y}-12-25`, 'Noël');
          break;
        case 'ES':
          put(`${y}-01-01`, 'Año Nuevo');
          put(`${y}-01-06`, 'Epifanía');
          put(goodFriday, 'Viernes Santo');
          put(`${y}-05-01`, 'Día del Trabajador');
          put(`${y}-08-15`, 'Asunción');
          put(`${y}-10-12`, 'Fiesta Nacional');
          put(`${y}-11-01`, 'Todos los Santos');
          put(`${y}-12-06`, 'Día de la Constitución');
          put(`${y}-12-08`, 'Inmaculada Concepción');
          put(`${y}-12-25`, 'Navidad');
          break;
        case 'IN':
          put(`${y}-01-26`, 'Republic Day');
          put(`${y}-08-15`, 'Independence Day');
          put(`${y}-10-02`, 'Gandhi Jayanti');
          break;
        case 'BR':
          put(`${y}-01-01`, 'Confraternização Universal');
          put(U.addDays(easter, -47), 'Carnaval');
          put(goodFriday, 'Sexta-feira Santa');
          put(`${y}-04-21`, 'Tiradentes');
          put(`${y}-05-01`, 'Dia do Trabalhador');
          put(`${y}-09-07`, 'Independência');
          put(`${y}-10-12`, 'Nossa Senhora Aparecida');
          put(`${y}-11-02`, 'Finados');
          put(`${y}-11-15`, 'Proclamação da República');
          put(`${y}-12-25`, 'Natal');
          break;
      }
      return out;
    },

    /** Presets across a span of years, so multi-year plans are covered. */
    presetRange(code, fromYear, toYear) {
      let all = {};
      for (let y = fromYear; y <= toYear; y++) Object.assign(all, Cal.preset(code, y));
      return all;
    },
  };

  window.Cal = Cal;
})();
