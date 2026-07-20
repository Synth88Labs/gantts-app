/* ============================================================
   i18n/templates-de.js — German template detail pages.

   Same shape as templates-es.js: the schedule data is
   language-independent and shared, only the prose is translated.

   Written as German, not transposed English. German project vocabulary
   is specific and a literal rendering reads wrong to anyone in the
   trade: Gewerke, Abnahme, Meilenstein, Pufferzeit, Vorgangsdauer,
   Inbetriebnahme, kritischer Pfad.

   `card` is the hub blurb. It takes precedence over the shared
   one-liner in template-cards.js, so a fully translated template can
   carry its own.
   ============================================================ */

const T = {

  'project-management': {
    card: 'Generischer Fünf-Phasen-Plan, vom Start bis zum Abschluss, mit Freigabe-Meilensteinen.',
    h1: 'Gantt-Diagramm-Vorlage für Projektmanagement',
    metaTitle: 'Gantt-Vorlage für Projektmanagement',
    metaDesc: 'Kostenlose Projektmanagement-Vorlage mit den fünf klassischen Phasen: Initiierung, Planung, Durchführung, Steuerung und Abschluss.',
    lead: 'Eine <strong>Gantt-Diagramm-Vorlage für Projektmanagement</strong> mit den fünf Phasen des Projektlebenszyklus: Initiierung, Planung, Durchführung, Überwachung und Steuerung sowie Abschluss. Der generische Startpunkt, wenn Ihr Vorhaben in keine Branchenvorlage passt.',
    intro: 'Die Struktur folgt dem Standard-Lebenszyklus, mit Meilensteinen genau dort, wo üblicherweise eine Entscheidung fällt:',
    phases: [
      ['Initiierung', 'Projektauftrag, Stakeholder-Analyse, Business Case und Freigabe zum Start. <em>Meilenstein: Projekt genehmigt.</em>'],
      ['Planung', 'Leistungsumfang, Projektstrukturplan, Terminplan, Budget, Risiko- und Kommunikationsplan. <em>Meilenstein: Basisplan freigegeben.</em>'],
      ['Durchführung', 'Die eigentliche Arbeit, Teamsteuerung und die vereinbarten Zwischenlieferungen.'],
      ['Überwachung und Steuerung', 'Statusberichte, Änderungssteuerung, Risikomanagement und Messung gegen den Basisplan. Läuft parallel zur Durchführung, nicht danach.'],
      ['Abschluss', 'Formale Abnahme, Dokumentation, Lessons Learned und Auflösung des Teams. <em>Meilenstein: Projekt abgeschlossen.</em>'],
    ],
    callout: 'Die Steuerung ist keine Phase nach der Durchführung — sie läuft gleichzeitig. Sie als paralleles Band zu zeichnen statt als Block am Ende ist der Unterschied zwischen einem Plan, der die Realität abbildet, und einem, der nur ordentlich aussieht.',
    customize: [
      'Benennen Sie die Phasen nach Ihrer Hausmethodik um, falls Sie eine eigene verwenden.',
      'Verschieben Sie den Abschlusstermin; der Rest richtet sich über die Abhängigkeiten neu aus.',
      'Ergänzen Sie unter Durchführung eine Zeile je Liefergegenstand statt eines einzigen Sammelbalkens.',
      'Setzen Sie Freigaben und Entscheidungspunkte als Meilensteine — nicht die langen Vorgänge.',
      'Legen Sie den Basisplan fest, sobald der Plan genehmigt ist, um Abweichungen messen zu können.',
    ],
    tips: [
      '<strong>Beginnen Sie mit Phasen, nicht mit Vorgängen.</strong> Vierzig Zeilen auf einer Ebene liest niemand; fünf aufklappbare Phasen schon.',
      '<strong>Verknüpfen Sie Abhängigkeiten, bevor Sie Termine anfassen.</strong> Nur so rechnet sich der Plan bei Änderungen selbst neu.',
      '<strong>Jede Zeile braucht einen Namen.</strong> Ein Vorgang ohne Verantwortlichen wird nicht gepflegt.',
      '<strong>Puffer gehört dorthin, wo die Schätzung unsicher ist</strong> — nicht gleichmäßig verteilt.',
      '<strong>Pflegen Sie den Fertigstellungsgrad</strong>, statt Balken neu zu zeichnen; nur so bleibt der Vergleich zum Basisplan erhalten.',
    ],
    related: [['simple', 'Einfache Vorlage'], ['construction', 'Bauprojekt'], ['software-development', 'Softwareentwicklung']],
    faq: [
      ['Welche Phasen gehören in einen Projektplan?', 'Initiierung, Planung, Durchführung, Überwachung und Steuerung sowie Abschluss. Das ist der Standard-Lebenszyklus und funktioniert praktisch in jeder Branche; die Vorlage bringt ihn fertig mit.'],
      ['Eignet sich die Vorlage für kleine Projekte?', 'Ja. Behalten Sie die fünf Phasen und reduzieren Sie die Vorgänge darin — die Struktur trägt auch bei fünfzehn Zeilen.'],
      ['Funktioniert sie mit agilen Methoden?', 'Teilweise. Für Releases, externe Abhängigkeiten und zugesagte Termine ja; für die Arbeit innerhalb des Sprints sind die Agile- oder Sprint-Vorlagen besser geeignet.'],
      ['Ist die Vorlage kostenlos?', 'Ja: kostenloser Download als Excel, PowerPoint und CSV sowie Online-Bearbeitung ohne Anmeldung und ohne Wasserzeichen.'],
    ],
  },

  'construction': {
    card: 'Genehmigungen, Gründung, Rohbau, Gewerke und Ausbau — samt Abnahmen.',
    h1: 'Gantt-Diagramm-Vorlage für Bauprojekte',
    metaTitle: 'Bauzeitenplan-Vorlage (Gantt, kostenlos)',
    metaDesc: 'Kostenlose Bauzeitenplan-Vorlage: Genehmigungen, Erdarbeiten, Gründung, Rohbau, Gebäudehülle, Gewerke, Ausbau und Abnahme.',
    lead: 'Eine <strong>Gantt-Diagramm-Vorlage für Bauprojekte</strong> mit der realen Reihenfolge einer Baustelle: Genehmigungen, Erdarbeiten und Gründung, Rohbau, Gebäudehülle, technische Gewerke, Ausbau und Abnahme. Für die Baubesprechung herunterladen oder online bearbeiten.',
    intro: 'Der Bauablauf ist zwingend sequenziell, und die Vorlage bildet ihn Phase für Phase ab:',
    phases: [
      ['Genehmigungen und Vorbereitung', 'Baugenehmigung, SiGe-Plan, Versicherungen, Absteckung und Baustelleneinrichtung. <em>Meilenstein: Baugenehmigung erteilt.</em>'],
      ['Erdarbeiten und Gründung', 'Räumung, Aushub, Entwässerung, Bewehrung und Betonage der Fundamente — samt Aushärtezeit.'],
      ['Rohbau', 'Stützen, Decken und Dachtragwerk. Gibt den Takt für alles Folgende vor.'],
      ['Gebäudehülle', 'Fassade, Fenster und Dachabdichtung. <em>Meilenstein: Gebäude dicht.</em>'],
      ['Technische Gewerke', 'Sanitär, Elektro, Heizung, Lüftung und Brandschutz, weitgehend parallel geführt.'],
      ['Ausbau und Abnahme', 'Trockenbau, Fliesen, Malerarbeiten, Innentüren, Funktionsprüfungen und Schlussabnahme. <em>Meilenstein: Abnahme.</em>'],
    ],
    callout: 'Die Aushärtezeit des Betons lässt sich nicht mit mehr Personal verkürzen. Bilden Sie sie als Zeitabstand in der Abhängigkeit ab, nicht als eigenen Balken — sonst kürzt sie jemand bei der nächsten Terminstraffung einfach weg.',
    customize: [
      'Passen Sie die Dauern an Größe und Bauart an: Einfamilienhaus und zehngeschossiger Bau haben nichts gemein.',
      'Ergänzen Sie eine Zeile je Geschoss oder Bauabschnitt, wenn Sie so fein steuern müssen.',
      'Aushärte- und Trocknungszeiten gehören als Zeitabstand in die Verknüpfung, nicht als Vorgang.',
      'Jede Abnahme ist ein Meilenstein — eine Sperre, keine Formalie.',
      'Planen Sie Wetterpuffer bei Erdarbeiten und Rohbau ein.',
    ],
    tips: [
      '<strong>Die Genehmigung bestimmt den echten Start.</strong> Sie hängt an Dritten und lässt sich nicht beschleunigen, also gehört sie von Anfang an in den Plan.',
      '<strong>Gewerke überlappen nur zonenweise.</strong> Sanitär, Elektro und Lüftung teilen sich denselben Raum und behindern sich sonst gegenseitig.',
      '<strong>Achten Sie auf Lieferzeiten</strong> bei Fenstern, Türen und Technik — die kommen häufiger zu spät als der Bau selbst.',
      '<strong>Pflegen Sie den Fortschritt wöchentlich</strong> und exportieren Sie den Plan für die Baubesprechung.',
      '<strong>Basisplan bei Genehmigungserteilung setzen</strong>, nicht früher: alles davor ist Schätzung.',
    ],
    related: [['home-renovation', 'Renovierung'], ['project-management', 'Projektmanagement'], ['data-center-build-schedule', 'Rechenzentrum']],
    faq: [
      ['Welche Phasen gehören in einen Bauzeitenplan?', 'Genehmigungen, Erdarbeiten und Gründung, Rohbau, Gebäudehülle, technische Gewerke sowie Ausbau mit Abnahme. Die Vorlage bringt sie mit den zugehörigen Abnahme-Meilensteinen mit.'],
      ['Taugt sie für eine kleine Sanierung?', 'Ja, für eine Wohnung ist die Renovierungsvorlage allerdings direkter — kürzere Phasen und kein Rohbau.'],
      ['Wie bilde ich die Betonaushärtung ab?', 'Als Zeitabstand (Lag) in der Verknüpfung zwischen Betonage und Folgevorgang. So kann sie beim Straffen des Plans nicht versehentlich entfallen.'],
      ['Ist die Bauvorlage kostenlos?', 'Ja: Excel, PowerPoint und CSV kostenlos, dazu Online-Bearbeitung ohne Anmeldung.'],
    ],
  },

  'simple': {
    card: 'Wenige Zeilen, klare Termine, sonst nichts. Für kurze Pläne, die Sie wirklich pflegen.',
    h1: 'Einfache Gantt-Diagramm-Vorlage',
    metaTitle: 'Einfache Gantt-Diagramm-Vorlage',
    metaDesc: 'Schlichte Gantt-Vorlage ohne Ballast: wenige Zeilen, klare Termine, sofort einsetzbar. Als Excel herunterladen oder kostenlos online bearbeiten.',
    lead: 'Eine <strong>einfache Gantt-Diagramm-Vorlage</strong> für den Fall, dass Sie weder Phasen noch Ressourcen noch kritischen Pfad brauchen: nur eine Handvoll Vorgänge mit Terminen, auf einen Blick erfassbar.',
    intro: 'Bewusst minimal. Ein paar Vorgänge, ein Schlussmeilenstein, mehr nicht:',
    phases: [
      ['Vorbereitung', 'Die zwei, drei Dinge, die vor dem Start geklärt sein müssen.'],
      ['Hauptarbeit', 'Der zentrale Block, aufgeteilt in Vorgänge ähnlicher Länge.'],
      ['Prüfung', 'Kontrolle, Korrekturen und Freigabe vor dem Abschluss.'],
      ['Abschluss', 'Übergabe und Bestätigung. <em>Meilenstein: fertig.</em>'],
    ],
    callout: 'Einfachheit ist eine Entscheidung, kein Mangel. Wenn Ihr Plan in zehn Zeilen passt, sorgt genau das dafür, dass Sie ihn auch pflegen. Struktur hinzuzufügen, die Sie nicht brauchen, ist der schnellste Weg zu einem veralteten Diagramm.',
    customize: [
      'Ersetzen Sie die Vorgangsnamen — die Struktur passt auf fast jede kurze Arbeit.',
      'Termine per Ziehen anpassen; es sind keine Formeln zu ändern.',
      'Einen Meilenstein am Ende ergänzen, wenn ein sichtbarer Liefertermin gebraucht wird.',
      'Erst auf Phasen umstellen, wenn der Plan fünfzehn Zeilen überschreitet.',
      'Nicht genutzte Spalten ausblenden, damit das Diagramm mehr Platz bekommt.',
    ],
    tips: [
      '<strong>Verzichten Sie auf Abhängigkeiten, wenn Sie sie nicht brauchen.</strong> Bei zehn sequenziellen Vorgängen ist Verschieben von Hand schneller.',
      '<strong>Farbe nach Art der Arbeit</strong>, nicht je Vorgang — weniger visuelles Rauschen.',
      '<strong>Setzen Sie einen echten Endtermin</strong>, auch wenn er grob ist. Ein Plan ohne Ende verpflichtet zu nichts.',
      '<strong>Als PDF teilen</strong>: bei einem kurzen Plan ist ein Bild besser als ein Bearbeitungszugang.',
      '<strong>Wechseln Sie zur Projektmanagement-Vorlage</strong>, sobald es wächst — bevor es unübersichtlich wird.',
    ],
    related: [['weekly', 'Wochenplan'], ['project-management', 'Projektmanagement'], ['one-page-gantt-chart', 'Plan auf einer Seite']],
    faq: [
      ['Wann ist die einfache Vorlage die richtige?', 'Bei weniger als fünfzehn Vorgängen und klarer Reihenfolge. Phasen, Ressourcen und Abhängigkeiten kosten dort mehr, als sie bringen.'],
      ['Kann ich später Abhängigkeiten ergänzen?', 'Ja. Im <a href="/de/app.html">Editor</a> verknüpfen Sie die Vorgänge, wenn Sie sie brauchen — danach rechnet sich der Plan selbst neu.'],
      ['Ist sie kostenlos?', 'Ja, Download und Online-Bearbeitung kostenlos, ohne Konto.'],
    ],
  },

  'software-development': {
    card: 'Discovery, Design, Sprints, Integration, QA und Deployment.',
    h1: 'Gantt-Diagramm-Vorlage für Softwareentwicklung',
    metaTitle: 'Gantt-Vorlage für Softwareentwicklung',
    metaDesc: 'Kostenlose Vorlage für Softwareprojekte: Discovery, Design, Sprints, Integration, QA, Deployment und Stabilisierung.',
    lead: 'Eine <strong>Gantt-Diagramm-Vorlage für Softwareentwicklung</strong>, die zeigt, was ein Board nicht zeigt: wie Sprints mit externen Abhängigkeiten, zugesagten Terminen und dem Deployment-Fenster zusammenpassen.',
    intro: 'Als Ergänzung zu einem agilen Vorgehen gedacht, nicht als Ersatz:',
    phases: [
      ['Discovery', 'Anforderungen, User Stories, Akzeptanzkriterien und erste Schätzung. <em>Meilenstein: Umfang abgestimmt.</em>'],
      ['Design', 'Architektur, Datenmodell, Oberflächenentwurf und die technischen Festlegungen, die alles Weitere prägen.'],
      ['Entwicklung', 'Sprints fester Länge, je einer als Balken. Das Detail lebt im Board, nicht hier.'],
      ['Integration und QA', 'Continuous Integration, Systemtests, Fehlerbehebung und Abnahmetests. <em>Meilenstein: Abnahme erteilt.</em>'],
      ['Deployment', 'Umgebung vorbereiten, Datenmigration, Deployment-Fenster und Nachkontrolle. <em>Meilenstein: in Produktion.</em>'],
      ['Stabilisierung', 'Verstärkter Support, Störungsbehebung und Übergabe an den Betrieb.'],
    ],
    callout: 'Ein Gantt ersetzt das Board nicht, es ergänzt es. Innerhalb des Sprints entscheidet das Team; das Diagramm existiert für das, was das Board nicht sieht — externe Abhängigkeiten, vertragliche Termine und das Deployment-Fenster.',
    customize: [
      'Sprintlänge und Anzahl anpassen; zwei Wochen sind der Normalfall.',
      'Je externe Abhängigkeit eine Zeile ergänzen (Fremd-API, Rechtsfreigabe, Inhaltslieferung).',
      'Termine, die nicht bei Ihnen liegen, als Meilensteine markieren: Code Freeze, Wartungsfenster, Audits.',
      'QA über Anfang-Anfang mit Zeitabstand überlappen statt streng nachgelagert.',
      'Echte Stabilisierungszeit nach dem Go-live einplanen — das ist keine Leerzeit.',
    ],
    tips: [
      '<strong>Planen Sie nicht in den Sprint hinein.</strong> Ein Balken je Sprint genügt; Detail veraltet binnen Tagen.',
      '<strong>Externe Abhängigkeiten kippen Pläne.</strong> Machen Sie sie sichtbar und geben Sie ihnen einen Verantwortlichen.',
      '<strong>Schützen Sie die QA-Phase.</strong> Sie wird zuerst gekürzt und findet als Einzige die Fehler, die Anwender stören.',
      '<strong>Datenmigration ist ein eigenes kleines Projekt</strong>, wenn ein Altsystem existiert — meist der Grund für ein gerissenes Fenster.',
      '<strong>Basisplan bei Design-Freigabe setzen</strong>, wenn Schätzungen aufhören, Vermutungen zu sein.',
    ],
    related: [['agile', 'Agil'], ['sprint', 'Sprint'], ['product-launch', 'Produkteinführung']],
    faq: [
      ['Passt ein Gantt zu einem agilen Projekt?', 'Ja, für das, was das Board nicht abdeckt: externe Abhängigkeiten, Releases und zugesagte Termine. Innerhalb des Sprints bleibt das Team samt Board zuständig.'],
      ['Wie stelle ich Sprints dar?', 'Als Balken fester, wiederkehrender Länge — einer je Sprint, ohne die Stories darin aufzuführen. So bleibt das Diagramm gültig, auch wenn sich der Sprintinhalt ändert.'],
      ['Geht die Vorlage auch für ein Wasserfallprojekt?', 'Ja. Ersetzen Sie die Sprints durch sequenzielle Entwicklungsphasen; der Rest der Struktur trägt weiterhin.'],
      ['Ist sie kostenlos?', 'Ja, mit Download als Excel, PowerPoint und CSV sowie kostenloser Online-Bearbeitung.'],
    ],
  },

  'marketing': {
    card: 'Strategie, Kreation, Freigaben, Produktion, Launch und Auswertung.',
    h1: 'Gantt-Diagramm-Vorlage für Marketingkampagnen',
    metaTitle: 'Gantt-Vorlage für Marketingkampagnen',
    metaDesc: 'Kostenlose Kampagnenvorlage: Strategie, Kreation, Freigabeschleifen, Produktion, Launch und Erfolgsmessung.',
    lead: 'Eine <strong>Gantt-Diagramm-Vorlage für Marketing</strong>, die die Phase enthält, die alle Pläne vergessen: die Freigaben. Auf die Antwort eines Kunden oder der Geschäftsführung zu warten ist echte verstrichene Zeit und verdient einen eigenen Balken.',
    intro: 'Von der Strategie bis zur Auswertung, mit sichtbaren Freigabeschleifen:',
    phases: [
      ['Strategie', 'Ziele, Zielgruppe, Botschaft, Kanäle und Budget. <em>Meilenstein: Briefing freigegeben.</em>'],
      ['Kreation', 'Konzept, Skripte, Gestaltung und Entwürfe.'],
      ['Freigaben', 'Interne und Kundenabstimmung. Es sind fast immer zwei Runden, nicht eine.'],
      ['Produktion', 'Finale Assets, Anpassung je Kanal und Qualitätskontrolle.'],
      ['Launch', 'Einplanung, Veröffentlichung und Mediaschaltung. <em>Meilenstein: Kampagne live.</em>'],
      ['Auswertung', 'Kennzahlen verfolgen, optimieren und Abschlussbericht.'],
    ],
    callout: 'Zeichnen Sie Freigabeschleifen als Balken mit Dauer. Eine Kampagne, die sofortige Zustimmung unterstellt, verzögert sich exakt um die Zeit, die das erste „lass mich das kurz im Team besprechen" kostet — und diese Wartezeit steht in keinem optimistischen Plan.',
    customize: [
      'Je Kanal eine Zeile ergänzen (Social, E-Mail, Display, Paid) mit eigenen Terminen.',
      'Die Freigabephase verdoppeln, wenn neben interner Abstimmung ein externer Kunde beteiligt ist.',
      'Den Mediabuchungstermin als Meilenstein setzen — der ist meist unverrückbar.',
      'Die Auswertung als echte Phase mit Berichtstermin führen.',
    ],
    tips: [
      '<strong>Media vor den fertigen Assets buchen.</strong> Inventar ist endlich, Kreation lässt sich noch anpassen.',
      '<strong>Zwei Korrekturrunden sind normal.</strong> Wer eine plant, plant eine Verzögerung.',
      '<strong>Kanaladaption am Ende</strong>, nicht parallel — sonst werden zehn Formate wegen einer Textänderung neu gebaut.',
      '<strong>Den Berichtstermin fixieren</strong>, sonst findet die Auswertung nicht statt.',
    ],
    related: [['content-calendar', 'Redaktionsplan'], ['product-launch', 'Produkteinführung'], ['event-planning', 'Eventplanung']],
    faq: [
      ['Wie lange dauert die Vorbereitung einer Kampagne?', 'Vier bis acht Wochen für eine Standardkampagne, abhängig vor allem von der Zahl der Freigabeschleifen — sie sind der Faktor mit der größten Streuung.'],
      ['Wie stelle ich mehrere Kanäle dar?', 'Mit je einer Zeile pro Kanal in Produktion und Launch, jede mit eigenen Terminen. So sieht man sofort, welcher Kanal hinterherhängt.'],
      ['Ist die Vorlage kostenlos?', 'Ja, Download und Online-Bearbeitung kostenlos und ohne Anmeldung.'],
    ],
  },

  'event-planning': {
    card: 'Location, Dienstleister, Anmeldungen, Aufbau und Abbau um ein festes Datum.',
    h1: 'Gantt-Diagramm-Vorlage für Eventplanung',
    metaTitle: 'Gantt-Vorlage für Eventplanung',
    metaDesc: 'Kostenlose Eventplanungs-Vorlage: Location, Dienstleister, Programm, Anmeldungen, Aufbau, Durchführung und Abbau.',
    lead: 'Eine <strong>Vorlage für Eventplanung</strong> mit festem Termin: Der gesamte Plan rechnet vom Veranstaltungstag rückwärts, denn das ist das einzige Datum, über das nicht verhandelt wird.',
    intro: 'Sechs Phasen, von der Locationbuchung bis zum Abbau:',
    phases: [
      ['Konzept und Location', 'Ziele, Budget, Teilnehmerzahl, Termin und Buchung der Räumlichkeit. <em>Meilenstein: Location bestätigt.</em>'],
      ['Dienstleister', 'Catering, Technik, Mobiliar, Sicherheit und Transport — beauftragt nach Verfügbarkeitsknappheit.'],
      ['Programm und Referenten', 'Agenda, Zusagen, Materialien und Proben.'],
      ['Kommunikation und Anmeldung', 'Website, Kampagne, Anmeldestart und Erinnerungen.'],
      ['Aufbau und Generalprobe', 'Produktion, Aufbau, Technikcheck und Generalprobe. <em>Meilenstein: bereit.</em>'],
      ['Durchführung und Abbau', 'Veranstaltung, Abbau, Abrechnung und Teilnehmerbefragung.'],
    ],
    callout: 'Der Technikcheck verdient einen eigenen Balken, keine Randnotiz. Der häufigste und sichtbarste Fehler einer Veranstaltung betrifft Ton oder Projektion — und er zeigt sich immer dann, wenn keine Zeit mehr bleibt.',
    customize: [
      'Veranstaltungstermin ändern — der gesamte Plan rückt rückwärts nach.',
      'Je Saal eine Zeile ergänzen, wenn parallele Sessions stattfinden.',
      'Anmeldeschluss und Teilnehmerbestätigung als Meilensteine setzen: Sie bestimmen Catering und Aufbau.',
      'Abbau und Abrechnung mitführen — sie gehören zum Projekt, auch wenn niemand daran denkt.',
    ],
    tips: [
      '<strong>Location zuerst.</strong> Sie bestimmt Kapazität, Termin und einen Großteil des Budgets.',
      '<strong>Zusagen kommen spät.</strong> Setzen Sie den Anmeldeschluss mit Puffer vor dem, was das Catering braucht.',
      '<strong>Der Veranstaltungstag braucht einen eigenen Stundenplan</strong>, getrennt vom Gesamtplan.',
      '<strong>Lassen Sie am Vortag Luft.</strong> Dann treten die Aufbauprobleme auf.',
    ],
    related: [['wedding-planning', 'Hochzeitsplanung'], ['marketing', 'Marketing'], ['project-management', 'Projektmanagement']],
    faq: [
      ['Wie früh sollte man ein Event planen?', 'Drei bis sechs Monate für eine mittelgroße Firmenveranstaltung; ein Kongress kann ein Jahr brauchen. Die Location ist meist der begrenzende Faktor.'],
      ['Was wird zuerst gebucht?', 'Die Location, danach die Dienstleister nach Knappheit: Catering und Technik vor Mobiliar oder Beschilderung.'],
      ['Ist die Vorlage kostenlos?', 'Ja, Download und Online-Bearbeitung kostenlos, ohne Konto.'],
    ],
  },

  'excel': {
    card: 'Tabelle und Diagramm fertig eingerichtet: Daten ersetzen, fertig.',
    h1: 'Gantt-Diagramm-Vorlage für Excel',
    metaTitle: 'Gantt-Diagramm-Vorlage für Excel',
    metaDesc: 'Fertige Gantt-Vorlage für Excel: Vorgänge, Termine, Dauer und Fortschritt — ohne komplizierte Formeln.',
    lead: 'Eine <strong>Gantt-Diagramm-Vorlage für Excel</strong>, fertig aufgebaut: Spalten für Vorgang, Start, Ende, Dauer und Fortschritt, dazu das bereits konfigurierte Diagramm. Herunterladen, Daten ersetzen — ohne sich mit unsichtbaren Datenreihen herumzuschlagen.',
    intro: 'Die Struktur, die Excel erwartet, bereits mit Beispieldaten gefüllt:',
    phases: [
      ['Datenblatt', 'Vorgang, Start, Ende, Dauer und Fertigstellungsgrad im Format, das das Diagramm braucht.'],
      ['Fertiges Diagramm', 'Gestapelte Balken, Startreihe ohne Füllung, Kategorienachse umgekehrt.'],
      ['Beispielphasen', 'Vier Phasen mit Vorgängen zum Überschreiben.'],
      ['Meilensteine', 'Zeilen mit Dauer null für Lieferungen und Freigaben.'],
    ],
    callout: 'Excel zeichnet das Diagramm, versteht aber keine Abhängigkeiten: Verschieben Sie einen Vorgang, merkt kein anderer etwas davon. Für einen kurzen, stabilen Plan reicht das; sobald Vorgänge verknüpft sind, kostet die Pflege von Hand mehr Zeit als die Planung selbst.',
    customize: [
      'Beispielzeilen durch eigene Vorgänge ersetzen und dabei das Datumsformat beibehalten.',
      'Minimum der Horizontalachse auf Ihr Startdatum setzen, sonst beginnt Excel im Jahr 1900.',
      'Zeilen innerhalb einer Phase ergänzen und den Datenbereich des Diagramms erweitern.',
      'Farbe je Phase statt je Vorgang — deutlich besser lesbar.',
    ],
    tips: [
      '<strong>Termine müssen echte Datumswerte sein</strong>, kein Text, sonst platziert das Diagramm sie falsch.',
      '<strong>Löschen Sie die Startreihe nicht.</strong> Sie ist unsichtbar, positioniert aber jeden Balken.',
      '<strong>Brauchen Sie Abhängigkeiten, wechseln Sie das Werkzeug.</strong> In Excel nachzubauen ist verlorene Zeit.',
      '<strong>Zum Teilen als PDF exportieren</strong>; wer die .xlsx verschickt, lädt zum Zerlegen des Diagramms ein.',
    ],
    related: [['google-sheets', 'Google Sheets'], ['powerpoint', 'PowerPoint'], ['project-management', 'Projektmanagement']],
    faq: [
      ['Wie verwende ich die Vorlage in Excel?', 'Datei herunterladen, Datenblatt öffnen und die Beispielvorgänge samt Terminen ersetzen. Das Diagramm aktualisiert sich selbst, solange das Spaltenformat erhalten bleibt.'],
      ['Funktioniert sie in älteren Excel-Versionen?', 'Ja. Sie nutzt ein normales gestapeltes Balkendiagramm, das in jeder modernen Version verfügbar ist — ohne Makros und ohne Add-ins.'],
      ['Kann ich Abhängigkeiten ergänzen?', 'In Excel nicht. Wenn Sie sie brauchen, öffnen Sie die CSV im <a href="/de/app.html">kostenlosen Editor</a> und verknüpfen die Vorgänge dort.'],
      ['Ist sie kostenlos?', 'Ja, ohne Anmeldung und ohne Wasserzeichen.'],
    ],
  },

  'weekly': {
    card: 'Fünf Tage auf einen Blick. Ein Fokus-Werkzeug, kein Planungswerkzeug.',
    h1: 'Wochenplan als Gantt-Diagramm',
    metaTitle: 'Wochenplan-Vorlage (Gantt)',
    metaDesc: 'Kostenlose Wochenplan-Vorlage: fünf Tage, Aufgaben je Verantwortlichem, passt auf eine Seite. Excel oder online bearbeiten.',
    lead: 'Ein <strong>Wochenplan</strong> im Gantt-Format: fünf Tage, die Aufgaben der Woche und wer sie übernimmt. Ohne Abhängigkeiten und ohne kritischen Pfad — das hier ist ein Fokus-Werkzeug.',
    intro: 'Ein Raster von Montag bis Freitag mit verteilten Aufgaben:',
    phases: [
      ['Montag bis Dienstag', 'Wochenstart und Arbeit, die mehr Spielraum braucht.'],
      ['Mittwoch', 'Halbzeit: Fortschritt prüfen und nachsteuern.'],
      ['Donnerstag bis Freitag', 'Abschluss, Lieferungen und Vorbereitung der Folgewoche.'],
    ],
    callout: 'Eine Woche fasst nicht mehr, als hineinpasst. Wenn nach dem Ausfüllen keine Lücke bleibt, ist der Plan bereits gescheitert: Für das, was dazwischenkommt, ist kein Platz — und es kommt immer etwas dazwischen.',
    customize: [
      'Startdatum ändern, um die Woche zu wechseln.',
      'Je Person eine Zeile ergänzen, wenn Sie den Plan im kleinen Team nutzen.',
      'Jede Lieferung mit festem Termin als Meilenstein markieren.',
      'Auf zwei Wochen erweitern, wenn Ihr Arbeitsrhythmus vierzehntägig ist.',
    ],
    tips: [
      '<strong>Lassen Sie mindestens 20 % frei.</strong> Der Wochenplan, der aufgeht, war nicht voll.',
      '<strong>Drucken Sie ihn aus.</strong> Dieses Format funktioniert auf Papier besser als am Bildschirm.',
      '<strong>Freitags durchgehen</strong> und Offenes in die nächste Woche ziehen.',
      '<strong>Keine Abhängigkeiten.</strong> In dieser Größenordnung kosten sie mehr, als sie bringen.',
    ],
    related: [['monthly', 'Monatsplan'], ['simple', 'Einfache Vorlage'], ['printable-gantt-chart', 'Zum Ausdrucken']],
    faq: [
      ['Eignet sich der Wochenplan für ein Team?', 'Ja, für kleine Teams: eine Zeile je Person und die ganze Woche im Blick. Für größere Teams ist die Monatsansicht sinnvoller.'],
      ['Kann ich ihn ausdrucken?', 'Ja, er passt quer auf ein A4-Blatt — das Format, in dem er auf Papier am besten funktioniert.'],
      ['Ist die Vorlage kostenlos?', 'Ja, Download und Online-Bearbeitung kostenlos.'],
    ],
  },

  'product-launch': {
    card: 'Produkt, Material, Vertriebsbefähigung und Presse — alle auf denselben Tag.',
    h1: 'Gantt-Diagramm-Vorlage für Produkteinführungen',
    metaTitle: 'Gantt-Vorlage für Produkteinführungen',
    metaDesc: 'Kostenlose Launch-Vorlage: Vorbereitung, Beta, Materialien, Vertriebsbefähigung, Markteinführung und Nachbereitung.',
    lead: 'Eine <strong>Vorlage für Produkteinführungen</strong>, die die vier Stränge koordiniert, die am selben Tag fertig sein müssen: Produkt bereit, Materialien fertig, Vertrieb geschult, Markt informiert.',
    intro: 'Ein Launch scheitert an dem Strang, den niemand beobachtet hat. Die Vorlage führt alle vier parallel:',
    phases: [
      ['Vorbereitung', 'Positionierung, Preise, Zielgruppe und Zieltermin. <em>Meilenstein: Launch-Termin fixiert.</em>'],
      ['Produkt und Beta', 'Feature Freeze, Beta-Programm, Fehlerbehebung und Release Candidate.'],
      ['Materialien und Inhalte', 'Website, Demos, Dokumentation, Pressemitteilung und Kreation.'],
      ['Vertriebsbefähigung', 'Schulung, Argumentationsleitfaden, Preise und Einwandbehandlung — vor dem Launch, nicht währenddessen.'],
      ['Markteinführung', 'Sperrfrist, Veröffentlichung, Kampagne und Bestellfreigabe. <em>Meilenstein: Produkt eingeführt.</em>'],
      ['Nachbereitung', 'Kennzahlen, Rückmeldungen, schnelle Korrekturen und Retrospektive.'],
    ],
    callout: 'Die Vertriebsbefähigung wird zuerst gekürzt und fällt am stärksten auf. Ein Team, das das Produkt am Launch-Tag kennenlernt, verkauft das erste Quartal schlecht — und dieses Quartal kommt nicht wieder.',
    customize: [
      'Launch-Termin fixieren und alle vier Stränge davon rückwärts rechnen lassen.',
      'Je Markt oder Sprache eine Zeile ergänzen, wenn Sie mehrfach starten.',
      'Feature Freeze und Pressesperrfrist als Meilensteine setzen — das sind Punkte ohne Rückweg.',
      'Eine echte Stabilisierungsphase danach einplanen, statt das Projekt am Tag eins zu schließen.',
    ],
    tips: [
      '<strong>Der Feature Freeze schützt alles andere.</strong> Ohne ihn werden Materialien mehrfach neu erstellt.',
      '<strong>Materialien hängen am Produkt, nicht umgekehrt.</strong> Verknüpfen Sie sie, sonst filmen Sie Demos einer Version, die es nicht mehr gibt.',
      '<strong>Presse ist eine externe Abhängigkeit.</strong> Deren Zeitplan bestimmt Ihren.',
      '<strong>Planen Sie die erste Woche danach namentlich.</strong> Dann treten die Störungen auf.',
    ],
    related: [['marketing', 'Marketing'], ['software-development', 'Softwareentwicklung'], ['product-roadmap', 'Produkt-Roadmap']],
    faq: [
      ['Wie lange dauert die Vorbereitung eines Launches?', 'Sechs bis zwölf Wochen bei einem bekannten Produkt, mehrere Monate bei einer neuen Kategorie. Die Vorlage passt sich über den Launch-Termin an.'],
      ['Welche Stränge müssen koordiniert werden?', 'Produkt, Materialien, Vertriebsbefähigung und Kommunikation. Alle müssen am selben Tag zusammenlaufen, deshalb stehen sie im Diagramm parallel.'],
      ['Ist die Vorlage kostenlos?', 'Ja, mit Download als Excel, PowerPoint und CSV sowie Online-Bearbeitung ohne Anmeldung.'],
    ],
  },

  'home-renovation': {
    card: 'Die echte Reihenfolge der Gewerke, damit keine Wand zweimal aufgeht.',
    h1: 'Gantt-Diagramm-Vorlage für Renovierungen',
    metaTitle: 'Gantt-Vorlage für die Renovierung',
    metaDesc: 'Kostenlose Renovierungsvorlage: Angebote, Genehmigungen, Abbruch, Installationen, Fliesen, Tischler, Malerarbeiten und Endreinigung.',
    lead: 'Eine <strong>Gantt-Diagramm-Vorlage für Renovierungen</strong> in der realen Gewerkefolge: abbrechen, installieren, schließen, fliesen, streichen, montieren. Genau die Reihenfolge, die verhindert, dass dieselbe Wand zweimal geöffnet wird.',
    intro: 'Die Reihenfolge zählt mehr als die Dauern: Jedes Gewerk hängt am vorigen.',
    phases: [
      ['Vorbereitung', 'Angebote, Materialauswahl, Genehmigungen von Eigentümergemeinschaft oder Amt, Beauftragung. <em>Meilenstein: beauftragt.</em>'],
      ['Abbruch', 'Sanitärobjekte, Fliesen, Trennwände und Böden zurückbauen, Bauschutt entsorgen.'],
      ['Installationen', 'Sanitär, Elektro und Lüftung bei offenen Wänden. <em>Meilenstein: Installationen abgenommen.</em>'],
      ['Schließen und Fliesen', 'Trockenbau, Putz, Estrich und Fliesen. Ab hier werden Änderungen teuer.'],
      ['Tischler und Maler', 'Türen, Einbauschränke, Küchen- und Badmöbel, abschließend Malerarbeiten.'],
      ['Montage und Reinigung', 'Sanitärobjekte, Geräte, Schalter, Endreinigung und Nacharbeiten. <em>Meilenstein: fertig.</em>'],
    ],
    callout: 'Schließen Sie keine Wand, bevor die Installationen sichtbar abgenommen sind. Das ist der billigste Meilenstein im ganzen Plan — und der, der den teuersten Fehler der Renovierung verhindert.',
    customize: [
      'Dauern an die Größe anpassen: ein komplettes Bad meist zwei bis drei Wochen, eine ganze Wohnung zwei bis vier Monate.',
      'Je Raum eine Zeile ergänzen, wenn mehrere parallel renoviert werden.',
      'Trocknungs- und Aushärtezeiten als Zeitabstand führen, nicht als Vorgang.',
      'Lieferzeiten für Küche und Tischlerarbeiten notieren — sie verzögern meist das Ende.',
    ],
    tips: [
      '<strong>Küchenmöbel früh bestellen.</strong> Die Fertigungszeiten übersteigen häufig die Bauzeit.',
      '<strong>Puffer zwischen den Gewerken lassen.</strong> Ein Tag Reserve verhindert, dass ein Verzug drei Folgegewerke mitreißt.',
      '<strong>Rechnen Sie bei Altbauten mit Überraschungen</strong> — die zeigen sich beim Abbruch, nicht davor.',
      '<strong>Endreinigung als echten Vorgang führen.</strong> Baustaub kostet mehr Zeit, als irgendjemand einplant.',
    ],
    related: [['construction', 'Bauprojekt'], ['simple', 'Einfache Vorlage'], ['project-management', 'Projektmanagement']],
    faq: [
      ['Wie lange dauert eine Renovierung?', 'Ein Bad meist zwei bis drei Wochen, eine komplette Wohnung zwei bis vier Monate — abhängig von Fläche und davon, ob der Grundriss verändert wird.'],
      ['In welcher Reihenfolge arbeiten die Gewerke?', 'Abbruch, Installationen, Schließen und Fliesen, Tischler und Maler, zuletzt Montage. Eine andere Reihenfolge bedeutet Nacharbeit.'],
      ['Brauche ich eine Genehmigung?', 'Das hängt vom Umfang und der Gemeinde ab; Grundrissänderungen oder Eingriffe in Gemeinschaftseigentum meist ja. Die Vorlage hält dafür eine Phase frei, weil sie den Starttermin bestimmt.'],
      ['Ist die Vorlage kostenlos?', 'Ja, Download und Online-Bearbeitung kostenlos, ohne Anmeldung.'],
    ],
  },

  'employee-onboarding': {
    card: 'Preboarding, erster Tag, erste Woche und Reviews nach 30, 60 und 90 Tagen.',
    h1: 'Vorlage für den Onboarding-Plan neuer Mitarbeitender',
    metaTitle: 'Onboarding-Plan Vorlage (Gantt)',
    metaDesc: 'Kostenlose Onboarding-Vorlage: Preboarding, erster Tag, erste Woche, erster Monat und Reviews nach 30, 60 und 90 Tagen.',
    lead: 'Ein <strong>Onboarding-Plan</strong>, der vor dem ersten Arbeitstag beginnt. Der größte Teil einer schlechten Onboarding-Erfahrung entsteht in der Woche davor: Ausstattung nicht bereit, Zugänge fehlen, niemand ist für den Empfang zuständig.',
    intro: 'Von der Vertragsunterschrift bis zum 90-Tage-Gespräch:',
    phases: [
      ['Preboarding', 'Vertrag, IT-Ausstattung, Zugänge, Arbeitsplatz und Information ans Team. <em>Meilenstein: alles bereit vor Tag eins.</em>'],
      ['Erster Tag', 'Empfang, Teamvorstellung, Geräteübergabe und erstes Gespräch mit der Führungskraft.'],
      ['Erste Woche', 'Produkt- und Prozessschulung, Termine mit Schlüsselbereichen und die erste echte Aufgabe.'],
      ['Erster Monat', 'Wachsende Eigenständigkeit, wöchentliche Abstimmung und kurzfristige Ziele. <em>Meilenstein: 30-Tage-Gespräch.</em>'],
      ['30-60-90', 'Ziele je Abschnitt und formale Rückmeldungen. <em>Meilenstein: 90-Tage-Gespräch.</em>'],
    ],
    callout: 'Im Preboarding wird gewonnen oder verloren. Ein Laptop, der am dritten Tag eintrifft, und Zugänge, die eine Woche brauchen, kosten mehr Glaubwürdigkeit, als jede Willkommensveranstaltung zurückholt.',
    customize: [
      'Je Fachbereich eine Zeile ergänzen, wenn Kennenlerntermine anstehen.',
      'Dauer nach Rolle anpassen: technische Profile brauchen meist eine längere Einarbeitung.',
      'Die Gespräche nach 30, 60 und 90 Tagen als Meilensteine setzen.',
      'Jede Aufgabe einer Rolle zuordnen: Personalabteilung, Führungskraft oder Pate.',
    ],
    tips: [
      '<strong>Benennen Sie einen Paten als Aufgabe im Plan</strong>, nicht als informelle Geste.',
      '<strong>Geben Sie in der ersten Woche eine echte Aufgabe.</strong> Schulung ohne Anwendung bleibt nicht hängen.',
      '<strong>Terminieren Sie die Gespräche von Anfang an</strong> — was nicht im Kalender steht, findet nicht statt.',
      '<strong>Verwenden Sie den Plan je Rolle wieder</strong>, statt bei jeder Einstellung neu zu improvisieren.',
    ],
    related: [['30-60-90-day-plan', '30-60-90-Tage-Plan'], ['project-management', 'Projektmanagement'], ['simple', 'Einfache Vorlage']],
    faq: [
      ['Wie lange dauert ein gutes Onboarding?', 'Neunzig Tage sind der übliche Rahmen, mit der intensiven Phase im ersten Monat. Was nicht fehlen darf, ist das Preboarding.'],
      ['Wer ist für den Plan zuständig?', 'Meist geteilt zwischen Personalabteilung, direkter Führungskraft und einem Paten. Jede Zeile sollte einen Namen tragen.'],
      ['Ist die Vorlage kostenlos?', 'Ja, Download und Online-Bearbeitung kostenlos und ohne Anmeldung.'],
    ],
  },

  'agile': {
    card: 'Epics, Sprints und Releases auf einer Zeitachse — ohne das Board zu ersetzen.',
    h1: 'Gantt-Diagramm-Vorlage für agile Projekte',
    metaTitle: 'Gantt-Vorlage für agile Projekte',
    metaDesc: 'Kostenlose Vorlage für agile Teams: Epics, Sprints, Releases und externe Abhängigkeiten auf einer Zeitachse.',
    lead: 'Eine <strong>Gantt-Diagramm-Vorlage für agile Projekte</strong>, die nicht mit Ihrem Board konkurriert: Sie zeigt Epics, Sprints und Releases auf einer Zeitachse und beantwortet damit, was das Board nicht beantwortet — wann es fertig ist und wovon es abhängt.',
    intro: 'Epics oben, Sprints darunter, Releases als Meilensteine:',
    phases: [
      ['Vorbereitung', 'Vision, initiales Backlog, grobe Schätzung und Definition of Ready.'],
      ['Epics', 'Je Epic ein Balken über die Sprints, in denen daran gearbeitet wird.'],
      ['Sprints', 'Balken fester, wiederkehrender Länge, üblicherweise zwei Wochen.'],
      ['Releases', 'Gebündelte Veröffentlichungen. <em>Meilensteine: R1, R2, R3.</em>'],
      ['Externe Abhängigkeiten', 'Dritte, Freigaben und Integrationen außerhalb der Teamkontrolle.'],
    ],
    callout: 'Gantt und Board beantworten unterschiedliche Fragen. Innerhalb des Sprints entscheidet das Team; das Diagramm existiert für externe Abhängigkeiten und zugesagte Termine — also genau für das, was ein Board nicht zeigt.',
    customize: [
      'Sprintlänge und Anzahl der Iterationen anpassen.',
      'Je Epic einen Balken ergänzen und mit den zugehörigen Sprints verknüpfen.',
      'Releases als Meilensteine markieren und von internen Zielen unterscheiden.',
      'Jeder externen Abhängigkeit eine eigene Zeile mit Verantwortlichem geben.',
    ],
    tips: [
      '<strong>Führen Sie keine Stories im Diagramm.</strong> Sie veralten binnen Tagen.',
      '<strong>Externe Abhängigkeiten sind der Grund für dieses Diagramm.</strong> Machen Sie sie sichtbar.',
      '<strong>Prüfen Sie den Plan je Release</strong>, nicht je Sprint.',
      '<strong>Nutzen Sie ihn für Gespräche mit der Leitung</strong>, nicht zur Steuerung des Teams.',
    ],
    related: [['sprint', 'Sprint'], ['software-development', 'Softwareentwicklung'], ['product-roadmap', 'Produkt-Roadmap']],
    faq: [
      ['Widerspricht ein Gantt der agilen Arbeitsweise?', 'Nein, wenn er für das genutzt wird, was er kann: externe Abhängigkeiten, Releases und terminierte Zusagen. Die Arbeit im Sprint bleibt beim Team und seinem Board.'],
      ['Wie stelle ich Epics dar?', 'Als Balken über die Sprints, in denen daran gearbeitet wird — ohne die enthaltenen Stories aufzuführen.'],
      ['Ist die Vorlage kostenlos?', 'Ja, Download und Online-Bearbeitung kostenlos und ohne Anmeldung.'],
    ],
  },

  'monthly': {
    card: 'Vier Wochen nach Bereichen gruppiert, Lieferungen als Meilensteine.',
    h1: 'Monatsplan als Gantt-Diagramm',
    metaTitle: 'Monatsplan-Vorlage (Gantt)',
    metaDesc: 'Kostenlose Monatsplan-Vorlage: vier Wochen, nach Bereichen gruppierte Aufgaben und Liefertermine als Meilensteine.',
    lead: 'Ein <strong>Monatsplan</strong> im Gantt-Format: vier Wochen im Blick, Aufgaben nach Bereichen gruppiert und die Lieferungen als Meilensteine. Der Horizont, in dem Detail noch nützlich ist und Überschneidungen schon sichtbar werden.',
    intro: 'Vier Wochen, aufgeteilt in Arbeitsblöcke:',
    phases: [
      ['Woche 1', 'Start, Monatsplanung und die Arbeit mit der längsten Dauer.'],
      ['Woche 2', 'Durchführung und erste Teillieferungen.'],
      ['Woche 3', 'Fortschrittsprüfung und Nachsteuerung der Prioritäten.'],
      ['Woche 4', 'Abschluss, Lieferungen und Vorbereitung des Folgemonats. <em>Meilenstein: Monatsabschluss.</em>'],
    ],
    callout: 'Der Monat ist der Horizont, ab dem sich die Gruppierung nach Bereich statt nach Person lohnt. Zu sehen, dass zwei Bereiche in derselben Woche liefern, ist eine Information, die eine Aufgabenliste nicht hergibt.',
    customize: [
      'Startdatum ändern; das Raster passt sich an.',
      'Nach Bereich, Team oder Kunde gruppieren, je nach Arbeitsweise.',
      'Abschlüsse und Berichte als Meilensteine setzen.',
      'Auf ein Quartal erweitern, wenn mehr Kontext gebraucht wird.',
    ],
    tips: [
      '<strong>Vier oder fünf Blöcke genügen.</strong> Ein Monat mit dreißig flachen Zeilen ist unlesbar.',
      '<strong>Halten Sie die letzte Woche frei.</strong> Abschlüsse brauchen immer mehr Zeit als geplant.',
      '<strong>Prüfen Sie zur Monatsmitte</strong>, nicht erst am Ende — dann ist Korrektur noch möglich.',
      '<strong>Als PDF für den Monatsbericht exportieren</strong>; das spart die Zusammenfassung.',
    ],
    related: [['weekly', 'Wochenplan'], ['annual', 'Jahresplan'], ['project-management', 'Projektmanagement']],
    faq: [
      ['Wann ist ein Monatsplan das richtige Format?', 'Wenn die Woche zu kurz für den Überblick und das Quartal zu ungenau ist. Für operative Teams ist es der übliche Horizont.'],
      ['Geht das auch für mehrere Teams?', 'Ja, indem Sie nach Bereich oder Team gruppieren statt nach Person — so sieht man, welche Wochen überlastet sind.'],
      ['Ist die Vorlage kostenlos?', 'Ja, Download und Online-Bearbeitung kostenlos und ohne Anmeldung.'],
    ],
  },

  'powerpoint': {
    card: 'Balken als native, bearbeitbare Formen — zum Präsentieren gemacht.',
    h1: 'Gantt-Diagramm-Vorlage für PowerPoint',
    metaTitle: 'Gantt-Diagramm-Vorlage für PowerPoint',
    metaDesc: 'Kostenlose Gantt-Vorlage für PowerPoint mit bearbeitbaren Formen, Phasenfarben und Meilensteinen — präsentationsfertig.',
    lead: 'Eine <strong>Gantt-Diagramm-Vorlage für PowerPoint</strong>, deren Balken native, bearbeitbare Formen sind: Text, Farbe und Position ändern Sie direkt, ohne Diagramm oder Datenblatt anzufassen.',
    intro: 'Zum Präsentieren gemacht, nicht zum Planen:',
    phases: [
      ['Monatsraster', 'Zeitachse bereits gezeichnet und ausgerichtet.'],
      ['Balken je Phase', 'Nach Phase gruppierte Formen mit eigener Farbe.'],
      ['Meilensteine', 'Rauten mit Datumsbeschriftung.'],
      ['Legende', 'Bearbeitbarer Legendenblock.'],
    ],
    callout: 'Eine Gantt-Folie ist eine Zusammenfassung des Plans, nicht der Plan. Acht bis zehn Balken sind das Maximum, das aus der letzten Reihe noch lesbar ist: gruppieren Sie nach Phasen und lassen Sie das Detail in einem anderen Dokument.',
    customize: [
      'Texte ersetzen und Formen verschieben — alles ist native Form.',
      'Eine Akzentfarbe für Kritisches, Grautöne für den Rest.',
      'Monate ergänzen oder entfernen, indem Sie die Rasterlinien duplizieren.',
      'Jede Phase gruppieren, damit sie sich als Ganzes verschieben lässt.',
    ],
    tips: [
      '<strong>An den intelligenten Führungslinien ausrichten</strong> — ein schiefes Gantt fällt in der Projektion sofort auf.',
      '<strong>Datum neben jeden Meilenstein schreiben</strong>: das fotografiert das Publikum.',
      '<strong>Nicht mehr als zehn Balken.</strong> Passt es nicht, gruppieren Sie.',
      '<strong>Ändert sich der Plan häufig</strong>, pflegen Sie ihn im <a href="/de/app.html">Editor</a> und exportieren Sie zum Präsentieren nach .pptx.',
    ],
    related: [['excel', 'Excel'], ['one-page-gantt-chart', 'Plan auf einer Seite'], ['project-management', 'Projektmanagement']],
    faq: [
      ['Sind die Balken bearbeitbar?', 'Ja, es sind native PowerPoint-Formen: Text, Farbe, Größe und Position lassen sich ändern, ohne ein Datenblatt zu öffnen.'],
      ['Kann ich meinen Plan nach PowerPoint exportieren?', 'Ja. Aus dem <a href="/de/app.html">kostenlosen Editor</a> exportieren Sie nach .pptx; die Balken kommen als Formen an, nicht als Bild.'],
      ['Ist die Vorlage kostenlos?', 'Ja, ohne Anmeldung und ohne Wasserzeichen.'],
    ],
  },

  'one-page-gantt-chart': {
    card: 'Der ganze Plan auf Phasen und Meilensteine verdichtet, in DIN-A4-Größe.',
    h1: 'Gantt-Diagramm auf einer Seite',
    metaTitle: 'Gantt-Diagramm auf einer Seite (Vorlage)',
    metaDesc: 'Kostenlose Vorlage für einen Plan auf einer Seite: Phasen, Meilensteine und Status — passt auf eine Folie oder ein A4-Blatt.',
    lead: 'Ein <strong>Gantt-Diagramm auf einer Seite</strong>: der gesamte Plan verdichtet auf Phasen und Meilensteine, in der Größe einer Folie oder eines A4-Blatts. Das Format für die Geschäftsführung, den Kunden und die Wand.',
    intro: 'Weniger Zeilen, mehr Aussage:',
    phases: [
      ['Phasen', 'Vier bis sechs Balken, die das ganze Vorhaben abdecken.'],
      ['Schlüsselmeilensteine', 'Fünf bis sechs Rauten mit den Terminen, auf die es ankommt.'],
      ['Legende und Status', 'Kompakter Block mit Farbcode und Gesamtstatus.'],
    ],
    callout: 'Verdichten heißt nicht verstecken. Ein Plan auf einer Seite funktioniert, weil er zwingt, die fünf wesentlichen Dinge zu benennen. Wer vierzig Vorgänge über eine kleinere Schriftgröße hineinzwängt, hat keinen Überblick gebaut, sondern etwas Unlesbares.',
    customize: [
      'Phasen ersetzen — vier bis sechs ist der Bereich, der funktioniert.',
      'Meilensteine nach Relevanz für das Publikum wählen, nicht chronologisch.',
      'Den Zeitraum auf die gesamte Projektlaufzeit einstellen.',
      'Als PDF oder PowerPoint exportieren, je nach Präsentationsort.',
    ],
    tips: [
      '<strong>Aus dem Detailplan verdichten</strong>, nicht umgekehrt.',
      '<strong>Eine Farbe je Phase, Grau für Erledigtes.</strong>',
      '<strong>Datum neben jeden Meilenstein</strong> — das bleibt hängen.',
      '<strong>Monatlich aktualisieren</strong>; auf dieser Flughöhe braucht es nicht mehr.',
    ],
    related: [['printable-gantt-chart', 'Zum Ausdrucken'], ['powerpoint', 'PowerPoint'], ['annual', 'Jahresplan']],
    faq: [
      ['Wie viele Zeilen passen auf eine Seite?', 'Acht bis zwölf, wenn es in der Projektion lesbar bleiben soll. Darüber hinaus sollten Sie in Phasen zusammenfassen.'],
      ['Ersetzt das den Detailplan?', 'Nein, es fasst ihn zusammen. Das Detail lebt im vollständigen Plan; diese Fassung dient der Kommunikation.'],
      ['Ist die Vorlage kostenlos?', 'Ja, Download und Online-Bearbeitung kostenlos und ohne Konto.'],
    ],
  },

  'refinery-turnaround-schedule': {
    card: "Stillstand, Entleerung, Inspektion, Reparatur und Anfahren — stundengenau geplant.",
    h1: "Gantt-Vorlage für Raffinerie-Turnaround",
    metaTitle: "Turnaround-Terminplan Raffinerie — Vorlage",
    metaDesc: "Kostenlose Gantt-Vorlage für Raffinerie-Turnarounds: Vorbereitung, Abfahren, Entleeren, Inspektion, Reparatur, Wiederanfahren.",
    lead: "Ein <strong>Turnaround-Terminplan</strong> unterscheidet sich von jedem anderen Bauplan in einem Punkt: Die Anlage verdient währenddessen kein Geld. Jeder Tag Verzug kostet Produktionsausfall, deshalb wird hier in Schichten geplant, nicht in Wochen.",
    intro: "Sechs Phasen vom Vorlauf bis zur Übergabe an den Betrieb:",
    phases: [
      [
        "Vorbereitung (T-12 bis T-1 Monate)",
        "Arbeitsumfang einfrieren, Material und Ersatzteile beschaffen, Fremdfirmen binden, Gerüste und Kräne disponieren. <em>Meilenstein: Scope Freeze.</em>"
      ],
      [
        "Abfahren und Freigabe",
        "Lastabsenkung, Abfahren, Entleeren, Spülen, Inertisieren und Freimessen. Erst danach darf Handwerk auf die Anlage."
      ],
      [
        "Inspektion und Befundung",
        "Öffnen, Reinigen, Prüfen. Hier entsteht der Zusatzumfang, den niemand vorher kannte."
      ],
      [
        "Reparatur und Austausch",
        "Katalysatorwechsel, Wärmetauscher, Ventile, Rohrleitungsarbeiten — der kritische Pfad liegt fast immer in einer einzigen Kolonne."
      ],
      [
        "Dichtheitsprüfung und Wiederherstellung",
        "Schließen, Druckprüfung, Kalibrierung, Isolierung. <em>Meilenstein: mechanisch fertig.</em>"
      ],
      [
        "Anfahren",
        "Inertisieren, Aufheizen, Einfahren, Spezifikation erreichen und Übergabe an den Betrieb."
      ]
    ],
    callout: "Planen Sie den Zusatzumfang ein, bevor Sie ihn kennen. Zwischen 10 und 30 Prozent der Turnaround-Stunden entstehen aus Befunden, die erst beim Öffnen sichtbar werden. Ein Plan ohne diesen Puffer ist nicht optimistisch, sondern unvollständig.",
    customize: [
      "Auf Schichten umstellen, wenn rund um die Uhr gearbeitet wird — bei einem Turnaround ist die Tagesauflösung zu grob.",
      "Je Anlagenteil oder Kolonne eine eigene Zeile führen; sie laufen parallel und konkurrieren um dieselben Gewerke.",
      "Freimessung und Freigabe als eigene Vorgänge abbilden, nicht als Teil des Abfahrens — sie sind der häufigste Startverzug.",
      "Eine Puffer-Zeile für Zusatzumfang je Phase einplanen und offen ausweisen."
    ],
    tips: [
      "<strong>Der Scope Freeze ist der wichtigste Meilenstein.</strong> Was danach dazukommt, verschiebt das Anfahren.",
      "<strong>Der kritische Pfad ist meist kurz.</strong> Wenige Vorgänge bestimmen die Dauer — schützen Sie genau diese.",
      "<strong>Fremdfirmen sind eine Ressource, kein Vorgang.</strong> Prüfen Sie die Auslastung, nicht nur die Termine.",
      "<strong>Das Anfahren gehört in den Plan.</strong> Ein Turnaround endet mit Produkt in Spezifikation, nicht mit dem letzten Schraubenschlüssel."
    ],
    faq: [
      [
        "Wie lange dauert ein Raffinerie-Turnaround?",
        "Üblich sind 20 bis 60 Tage Stillstand, je nach Umfang und Anlagengröße. Die Vorbereitung beginnt 12 bis 18 Monate vorher."
      ],
      [
        "Warum wird in Schichten statt in Tagen geplant?",
        "Weil in der Regel rund um die Uhr gearbeitet wird. Eine Tagesauflösung versteckt genau die Übergaben, an denen Zeit verloren geht."
      ],
      [
        "Was ist der häufigste Grund für Verzug?",
        "Zusatzumfang aus der Inspektion und verspätete Freigaben nach dem Entleeren. Beides lässt sich einplanen, aber nicht wegplanen."
      ]
    ],
    related: [
      ["construction", "Bauzeitenplan"],
      ["project-management", "Projektmanagement"],
      ["data-center-build-schedule", "Rechenzentrum"]
    ]
  },

  'hotel-pre-opening-critical-path': {
    card: "Von der Bauabnahme bis zum ersten Gast: Personal, Systeme, Lizenzen, Probebetrieb.",
    h1: "Gantt-Vorlage für die Hotel-Eröffnung (Pre-Opening)",
    metaTitle: "Pre-Opening-Terminplan Hotel — Vorlage",
    metaDesc: "Kostenlose Gantt-Vorlage für die Hoteleröffnung: Lizenzen, Personal, Systeme, Warenwirtschaft, Probebetrieb und Soft Opening.",
    lead: "Ein <strong>Pre-Opening-Plan</strong> beginnt dort, wo der Bauzeitenplan aufhört. Zwischen fertigem Gebäude und erstem zahlenden Gast liegen sechs bis neun Monate Arbeit, die mit dem Bau parallel laufen muss — sonst steht ein fertiges Haus leer.",
    intro: "Sechs Stränge, die auf den Eröffnungstag zulaufen:",
    phases: [
      [
        "Genehmigungen und Lizenzen",
        "Betriebserlaubnis, Schankerlaubnis, Brandschutzabnahme, Hygienekonzept, Anmeldungen. <em>Der längste Vorlauf im gesamten Plan.</em>"
      ],
      [
        "Personal",
        "Führungsebene zuerst, dann Abteilungsleitung, dann Team. Rekrutierung, Verträge, Schulung, Einarbeitung."
      ],
      [
        "Systeme und Technik",
        "PMS, Kassensystem, Channel Manager, Schließanlage, WLAN, Telefonie — inklusive Schnittstellen und Testbuchungen."
      ],
      [
        "Vertrieb und Distribution",
        "Ratenstruktur, OTA-Anbindung, Website, Buchbarkeit, Fotoproduktion und erste Kampagnen. <em>Meilenstein: buchbar.</em>"
      ],
      [
        "Warenwirtschaft und Ausstattung",
        "Lieferanten, Erstbestückung Wäsche, Geschirr, F&B, Reinigung und Wareneingang."
      ],
      [
        "Probebetrieb und Soft Opening",
        "Testläufe je Abteilung, Freundeslauf, Mängelliste, Nacharbeit. <em>Meilenstein: erster Gast.</em>"
      ]
    ],
    callout: "Buchbarkeit ist ein früher Meilenstein, kein später. Zimmer müssen Monate vor der Eröffnung verkäuflich sein, sonst startet das Haus mit leerem Belegungskalender in die erste Saison — der teuerste vermeidbare Fehler einer Neueröffnung.",
    customize: [
      "Eröffnungstermin ändern — alle Stränge rücken mit, die Lizenzkette zeigt sofort, ob der Termin trägt.",
      "Je Abteilung eine Zeile für Schulung ergänzen: Rezeption, Housekeeping, Küche, Service, Technik.",
      "Bauabnahme als Vorgänger für Probebetrieb setzen — ohne Abnahme kein Testlauf.",
      "Ein Soft Opening mit reduzierter Kapazität als eigene Phase führen, nicht als Eröffnungstag."
    ],
    tips: [
      "<strong>Lizenzen zuerst rückwärts rechnen.</strong> Behördenlaufzeiten verhandeln nicht.",
      "<strong>Stellen Sie die Führungsebene früh ein.</strong> Sie baut das Team auf, das den Rest des Plans erledigt.",
      "<strong>Testbuchungen sind echte Vorgänge.</strong> Eine ungetestete Schnittstelle fällt am Eröffnungstag auf.",
      "<strong>Rechnen Sie mit Bauverzug.</strong> Halten Sie zwischen Abnahme und Eröffnung zwei bis vier Wochen Luft."
    ],
    faq: [
      [
        "Wann beginnt die Pre-Opening-Phase?",
        "Sechs bis zwölf Monate vor Eröffnung, abhängig von Größe und Kategorie. Vertrieb und Lizenzen starten am frühesten."
      ],
      [
        "Was liegt üblicherweise auf dem kritischen Pfad?",
        "Meist die Genehmigungskette oder die Systemintegration — selten der Bau selbst, obwohl er am sichtbarsten ist."
      ],
      [
        "Braucht es ein Soft Opening?",
        "Es ist die günstigste Art, Fehler zu finden. Zwei bis vier Wochen reduzierter Betrieb ersparen Bewertungen, die jahrelang stehen bleiben."
      ]
    ],
    related: [
      ["construction", "Bauzeitenplan"],
      ["restaurant-opening-timeline", "Restauranteröffnung"],
      ["event-planning", "Eventplanung"]
    ]
  },

  'solar-farm-construction-schedule': {
    card: "Standortsicherung, Netzanschluss, Module, Inbetriebnahme — mit Wetter- und Netzpuffer.",
    h1: "Gantt-Vorlage für den Bau einer Photovoltaik-Freiflächenanlage",
    metaTitle: "Bauzeitenplan Solarpark — Gantt-Vorlage",
    metaDesc: "Kostenlose Gantt-Vorlage für Solarparks: Standortentwicklung, Genehmigung, Netzanschluss, Montage, Inbetriebnahme.",
    lead: "Ein <strong>Bauzeitenplan für einen Solarpark</strong> wird selten von der Montage bestimmt. Module aufzustellen geht schnell; Genehmigung und Netzanschluss dauern Jahre — und genau dort liegt der kritische Pfad.",
    intro: "Sechs Phasen von der Fläche bis zur Einspeisung:",
    phases: [
      [
        "Standortentwicklung",
        "Flächensicherung, Pachtverträge, Netzverträglichkeitsprüfung, Ertragsgutachten. <em>Meilenstein: Netzanschlusszusage.</em>"
      ],
      [
        "Genehmigung",
        "Bauleitplanung, Umweltprüfung, Artenschutz, Baugenehmigung — der längste und unsicherste Abschnitt."
      ],
      [
        "Beschaffung und Finanzierung",
        "Module, Wechselrichter, Trafostation, Unterkonstruktion, EPC-Vergabe. <em>Meilenstein: Financial Close.</em>"
      ],
      [
        "Erschließung",
        "Zuwegung, Baustelleneinrichtung, Kampfmittelsondierung, Rammarbeiten und Kabeltrassen."
      ],
      [
        "Montage",
        "Unterkonstruktion, Module, DC-Verkabelung, Wechselrichter, Trafostation und Zaunanlage."
      ],
      [
        "Netzanschluss und Inbetriebnahme",
        "Anschluss, Prüfungen, Zertifikate, Probebetrieb. <em>Meilenstein: erste Einspeisung.</em>"
      ]
    ],
    callout: "Der Netzanschluss ist der Vorgang, der das Projekt terminiert. Die Zusage des Netzbetreibers und der Termin für den Anschluss liegen außerhalb Ihrer Kontrolle und häufig Jahre voraus — planen Sie alles andere rückwärts von diesem Datum.",
    customize: [
      "Je Bauabschnitt eine Zeile ergänzen, wenn der Park in Teilflächen errichtet wird.",
      "Rammarbeiten und Kabeltrassen als wetterabhängige Vorgänge kennzeichnen und im Winter mit Puffer versehen.",
      "Financial Close als harten Meilenstein setzen — ohne ihn beginnt keine Beschaffung.",
      "Artenschutzfenster als nicht-verfügbare Zeiträume im Kalender hinterlegen (Brutzeiten)."
    ],
    tips: [
      "<strong>Genehmigung und Netz laufen parallel</strong>, aber nur eines von beidem bestimmt am Ende den Termin.",
      "<strong>Lieferzeiten für Trafostationen sind lang.</strong> Bestellen Sie sie vor den Modulen.",
      "<strong>Rammen braucht tragfähigen Boden.</strong> Nasse Monate kosten Wochen, nicht Tage.",
      "<strong>Die Inbetriebnahme ist kein Tag.</strong> Prüfungen und Zertifikate ziehen sich über Wochen."
    ],
    faq: [
      [
        "Wie lange dauert der Bau eines Solarparks?",
        "Die reine Bauzeit liegt bei drei bis neun Monaten. Von der Fläche bis zur Einspeisung vergehen aber typischerweise zwei bis fünf Jahre."
      ],
      [
        "Was liegt auf dem kritischen Pfad?",
        "Fast immer Genehmigung oder Netzanschluss. Die Montage ist der kürzeste und am besten planbare Abschnitt."
      ],
      [
        "Wie geht man mit Artenschutzfristen um?",
        "Als nicht-verfügbare Zeiträume im Kalender. Dann verschiebt der Plan die Erdarbeiten automatisch statt sie unrealistisch einzuplanen."
      ]
    ],
    related: [
      ["wind-farm-construction-schedule", "Windpark"],
      ["construction", "Bauzeitenplan"],
      ["ev-charging-installation-schedule", "Ladeinfrastruktur"]
    ]
  },

  'dissertation-gantt-chart': {
    card: "Exposé, Literatur, Empirie, Kapitel, Korrektur und Abgabe über mehrere Semester.",
    h1: "Gantt-Diagramm-Vorlage für die Dissertation",
    metaTitle: "Zeitplan Dissertation — Gantt-Vorlage",
    metaDesc: "Kostenlose Gantt-Vorlage für die Dissertation: Exposé, Literaturarbeit, Datenerhebung, Auswertung, Kapitel, Korrektur, Abgabe.",
    lead: "Ein <strong>Zeitplan für die Dissertation</strong> hat ein Problem, das kein Bauprojekt kennt: Sie sind die einzige Ressource, und der Abgabetermin liegt Jahre entfernt. Ohne Zwischenmeilensteine merkt man den Verzug erst, wenn er nicht mehr aufzuholen ist.",
    intro: "Sechs Phasen über typischerweise drei bis vier Jahre:",
    phases: [
      [
        "Exposé und Betreuung",
        "Themenfindung, Forschungsfrage, Betreuungszusage, Exposé und Annahme. <em>Meilenstein: Annahme als Doktorand.</em>"
      ],
      [
        "Literatur und Theorie",
        "Systematische Recherche, Forschungsstand, theoretischer Rahmen — läuft im Hintergrund weiter."
      ],
      [
        "Methodik und Feldzugang",
        "Studiendesign, Ethikvotum, Instrumente, Pretest und Zugang zum Feld."
      ],
      [
        "Datenerhebung",
        "Erhebung, Aufbereitung, Bereinigung. <em>Der Abschnitt mit der geringsten Kontrolle über den Terminplan.</em>"
      ],
      [
        "Auswertung und Kapitel",
        "Analyse, Ergebniskapitel, Diskussion, Einleitung und Fazit zuletzt."
      ],
      [
        "Korrektur und Abgabe",
        "Lektorat, Formatierung, Plagiatsprüfung, Druck, Abgabe und Verteidigung. <em>Meilenstein: Disputation.</em>"
      ]
    ],
    callout: "Setzen Sie Kapitelmeilensteine alle sechs bis acht Wochen. Eine Dissertation scheitert selten an einem großen Problem, sondern an vielen kleinen Verzögerungen, die niemand misst, weil erst in drei Jahren jemand hinsieht.",
    customize: [
      "Auf Semester statt Wochen umstellen, wenn die Arbeit vierjährig angelegt ist.",
      "Lehrverpflichtungen und Konferenzen als eigene Zeilen führen — sie kosten reale Wochen.",
      "Ethikvotum als Vorgänger der Datenerhebung setzen; es ist der häufigste unterschätzte Vorlauf.",
      "Puffer vor der Abgabe einplanen: Korrektur und Formatierung dauern regelmäßig doppelt so lange wie geschätzt."
    ],
    tips: [
      "<strong>Schreiben Sie früh, nicht am Ende.</strong> Ein Kapitel pro Phase schlägt ein Schreibjahr.",
      "<strong>Die Datenerhebung ist der riskanteste Vorgang.</strong> Planen Sie einen zweiten Zugang zum Feld ein.",
      "<strong>Einleitung zuletzt.</strong> Sie lässt sich erst schreiben, wenn die Ergebnisse stehen.",
      "<strong>Rechnen Sie die Betreuung ein.</strong> Rückmeldungen brauchen Wochen, nicht Tage."
    ],
    faq: [
      [
        "Wie lange dauert eine Dissertation?",
        "Drei bis fünf Jahre in Vollzeit, je nach Fach und Finanzierung. Empirische Arbeiten liegen meist am oberen Ende."
      ],
      [
        "Wie detailliert sollte der Plan sein?",
        "Phasen über Jahre, Aufgaben über das laufende Semester. Alles darüber hinaus ist Fiktion und veraltet in Wochen."
      ],
      [
        "Was tun, wenn die Datenerhebung scheitert?",
        "Deshalb gehört sie früh in den Plan. Wer im zweiten Jahr merkt, dass der Feldzugang nicht trägt, hat noch Alternativen."
      ]
    ],
    related: [
      ["phd-research-gantt-chart", "Promotionsprojekt"],
      ["research", "Forschungsprojekt"],
      ["grant-proposal-gantt-chart", "Förderantrag"]
    ]
  },

  'wedding-planning': {
    card: "Location, Trauung, Dienstleister, Gästeliste und der Tagesablauf selbst.",
    h1: "Gantt-Diagramm-Vorlage für die Hochzeitsplanung",
    metaTitle: "Zeitplan Hochzeit — kostenlose Gantt-Vorlage",
    metaDesc: "Kostenlose Gantt-Vorlage für die Hochzeitsplanung: Location, Trauung, Dienstleister, Einladungen, Kleidung, Tagesablauf.",
    lead: "Eine <strong>Vorlage für die Hochzeitsplanung</strong> rechnet rückwärts von einem Datum, das feststeht. Zwölf bis achtzehn Monate klingen nach viel Zeit — bis man merkt, dass die guten Locations und Fotografen zwei Jahre im Voraus ausgebucht sind.",
    intro: "Sechs Phasen vom Termin bis zum Tag danach:",
    phases: [
      [
        "Rahmen setzen",
        "Termin, Budget, Gästezahl, Stil und Location. <em>Meilenstein: Location gebucht.</em>"
      ],
      [
        "Trauung",
        "Standesamt anmelden, Unterlagen beschaffen, kirchliche oder freie Trauung, Traurednerin oder Pfarrer."
      ],
      [
        "Dienstleister",
        "Fotograf, Catering, Musik, Floristik, Torte, Transport — in der Reihenfolge, in der sie ausgebucht sind."
      ],
      [
        "Gäste und Papeterie",
        "Save the Date, Einladungen, Rückmeldungen, Sitzplan, Menüwahl. <em>Meilenstein: Zusagen vollständig.</em>"
      ],
      [
        "Kleidung und Details",
        "Kleid, Anzug, Anproben, Ringe, Dekoration, Gastgeschenke und Probe-Styling."
      ],
      [
        "Endspurt und Tag",
        "Ablaufplan, Bestätigungen, Aufbau, Hochzeitstag, Abbau und Rückgaben."
      ]
    ],
    callout: "Der Hochzeitstag selbst braucht einen eigenen Stundenplan, getrennt vom Jahresplan. Ankunft der Floristik, Fototermin, Sektempfang und Essensausgabe hängen auf die Minute voneinander ab — ein Tagesplan in Wochenauflösung hilft niemandem.",
    customize: [
      "Termin ändern — alle Vorlaufzeiten rücken mit, ausgebuchte Dienstleister werden sofort sichtbar.",
      "Eine Zeile je Dienstleister, mit Anzahlung und Restzahlung als Meilensteine.",
      "RSVP-Frist als Vorgänger für Sitzplan und Catering-Endzahl setzen.",
      "Den Tag selbst auf Stundenauflösung umstellen und als eigenen Abschnitt führen."
    ],
    tips: [
      "<strong>Location und Fotograf zuerst.</strong> Sie sind am schnellsten ausgebucht und bestimmen alles Weitere.",
      "<strong>Zusagen kommen spät und unvollständig.</strong> Setzen Sie die Frist zwei Wochen vor dem, was das Catering braucht.",
      "<strong>Anproben brauchen Wiederholungen.</strong> Rechnen Sie mit drei Terminen, nicht mit einem.",
      "<strong>Planen Sie den Tag danach.</strong> Abbau, Rückgaben und Leihgut vergisst fast jeder Plan."
    ],
    faq: [
      [
        "Wie früh beginnt man mit der Hochzeitsplanung?",
        "Zwölf bis achtzehn Monate sind üblich. Wer eine bestimmte Location oder Saison möchte, sollte zwei Jahre rechnen."
      ],
      [
        "Was gehört auf den kritischen Pfad?",
        "Location, Trauungstermin und Fotograf. Fast alles andere lässt sich anpassen, diese drei nicht."
      ],
      [
        "Wie viel Puffer braucht der Hochzeitstag?",
        "Mindestens 30 Minuten zwischen den großen Blöcken. Der Tag verzögert sich immer, und der Puffer verhindert, dass sich das aufsummiert."
      ]
    ],
    related: [
      ["event-planning", "Eventplanung"],
      ["monthly", "Monatsplan"],
      ["project-management", "Projektmanagement"]
    ]
  },

  'research': {
    card: "Antrag, Ethik, Erhebung, Analyse und Publikation als ein zusammenhängender Plan.",
    h1: "Gantt-Diagramm-Vorlage für Forschungsprojekte",
    metaTitle: "Gantt-Vorlage für Forschungsprojekte",
    metaDesc: "Kostenlose Gantt-Vorlage für Forschungsprojekte: Antrag, Ethikvotum, Datenerhebung, Auswertung, Publikation und Berichtspflichten.",
    lead: "Eine <strong>Vorlage für Forschungsprojekte</strong> muss zwei Zeitpläne gleichzeitig abbilden: den wissenschaftlichen Ablauf und die Berichtspflichten des Mittelgebers. Der zweite ist unverhandelbar und wird regelmäßig vergessen.",
    intro: "Sechs Arbeitspakete, wie sie auch ein Antrag verlangt:",
    phases: [
      [
        "Konzeption und Antrag",
        "Fragestellung, Stand der Forschung, Arbeitsplan, Budget und Einreichung. <em>Meilenstein: Bewilligung.</em>"
      ],
      [
        "Projektaufbau",
        "Personalrekrutierung, Ethikvotum, Datenschutzkonzept, Kooperationsverträge und Infrastruktur."
      ],
      [
        "Erhebung",
        "Instrumente, Pretest, Feldzugang und Datenerhebung — meist der längste Abschnitt."
      ],
      [
        "Auswertung",
        "Aufbereitung, Analyse, Validierung und Interpretation der Ergebnisse."
      ],
      [
        "Publikation",
        "Manuskripte, Einreichung, Peer Review, Überarbeitung. <em>Rechnen Sie mit mehreren Runden.</em>"
      ],
      [
        "Berichtswesen und Abschluss",
        "Zwischenberichte, Mittelabruf, Verwendungsnachweis, Datenarchivierung und Abschlussbericht."
      ]
    ],
    callout: "Peer Review ist ein Vorgang mit Dauer, kein Ereignis. Zwischen Einreichung und Annahme liegen bei den meisten Zeitschriften sechs bis zwölf Monate mit ein bis drei Überarbeitungsrunden — ein Projektplan, der die Publikation als Endpunkt setzt, endet zu früh.",
    customize: [
      "Je Arbeitspaket eine Zeile, passend zur Gliederung des Antrags — dann dient derselbe Plan als Berichtsgrundlage.",
      "Berichtstermine des Mittelgebers als Meilensteine eintragen und rückwärts planen.",
      "Ethikvotum und Datenschutzfreigabe als Vorgänger der Erhebung setzen.",
      "Personalzeilen ergänzen, wenn Stellen befristet auslaufen — das begrenzt den Plan härter als jede Frist."
    ],
    tips: [
      "<strong>Der Antragszeitplan ist der spätere Projektplan.</strong> Bauen Sie ihn gleich so, dass er trägt.",
      "<strong>Rekrutierung dauert.</strong> Drei bis sechs Monate zwischen Bewilligung und besetzter Stelle sind normal.",
      "<strong>Publikationen laufen parallel zur Restlaufzeit</strong>, nicht danach.",
      "<strong>Archivierung ist eine Aufgabe.</strong> Förderer verlangen sie zunehmend als Nachweis."
    ],
    faq: [
      [
        "Wie detailliert sollte ein Forschungsplan sein?",
        "Arbeitspakete über die Gesamtlaufzeit, Aufgaben für die kommenden sechs Monate. Der Rest wird ohnehin überarbeitet."
      ],
      [
        "Wie plant man Peer Review?",
        "Als Vorgang mit sechs bis zwölf Monaten Dauer und mindestens einer Überarbeitungsrunde."
      ],
      [
        "Was ist der häufigste Planungsfehler?",
        "Die Erhebung wird zu spät begonnen und die Berichtspflichten gar nicht eingeplant."
      ]
    ],
    related: [
      ["dissertation-gantt-chart", "Dissertation"],
      ["grant-proposal-gantt-chart", "Förderantrag"],
      ["clinical-trial-gantt-chart", "Klinische Studie"]
    ]
  },

  'content-calendar': {
    card: "Themen, Produktion, Freigaben und Veröffentlichung über Kanäle hinweg.",
    h1: "Gantt-Diagramm-Vorlage für den Redaktionsplan",
    metaTitle: "Redaktionsplan Vorlage — Gantt-Diagramm",
    metaDesc: "Kostenlose Gantt-Vorlage für den Redaktionsplan: Themenplanung, Produktion, Freigabe, Veröffentlichung und Auswertung.",
    lead: "Ein <strong>Redaktionsplan</strong> als Gantt-Diagramm zeigt etwas, das eine Tabelle verbirgt: die Produktionszeit vor jedem Veröffentlichungstermin. Der Redaktionsschluss ist nicht der Tag der Veröffentlichung, sondern zwei Wochen davor.",
    intro: "Fünf wiederkehrende Phasen je Ausspielung:",
    phases: [
      [
        "Themenplanung",
        "Recherche, Keyword-Auswahl, Themenkonferenz und Redaktionsplan für das Quartal. <em>Meilenstein: Plan freigegeben.</em>"
      ],
      [
        "Produktion",
        "Briefing, Text, Bild, Video oder Grafik — je Format eine eigene Vorlaufzeit."
      ],
      [
        "Freigabe",
        "Fachliche Prüfung, Lektorat, rechtliche Freigabe. <em>Der Vorgang, der am häufigsten unterschätzt wird.</em>"
      ],
      [
        "Veröffentlichung",
        "Einpflegen, Metadaten, Terminierung, Verteilung über Newsletter und soziale Kanäle."
      ],
      [
        "Auswertung und Aktualisierung",
        "Reichweite, Rankings, Nachbearbeitung und Aktualisierung älterer Beiträge."
      ]
    ],
    callout: "Planen Sie die Freigabe als eigenen Balken. In den meisten Teams liegt der Text drei Tage fertig herum und wartet auf eine Unterschrift — das ist keine Produktionszeit, sondern Wartezeit, und sie gehört sichtbar in den Plan.",
    customize: [
      "Je Kanal eine Zeile: Blog, Newsletter, LinkedIn, Video. Sie haben unterschiedliche Vorlaufzeiten.",
      "Wiederkehrende Formate als Serie anlegen und den Rhythmus im Kalender abbilden.",
      "Redaktionsschluss als Meilenstein je Beitrag setzen, nicht das Veröffentlichungsdatum.",
      "Kampagnentermine und Saisonthemen als feste Termine eintragen und rückwärts planen."
    ],
    tips: [
      "<strong>Rückwärts vom Veröffentlichungstermin planen.</strong> Nur so wird die Vorlaufzeit sichtbar.",
      "<strong>Bild und Video brauchen mehr Vorlauf als Text.</strong> Starten Sie sie parallel, nicht danach.",
      "<strong>Aktualisierungen sind Produktion.</strong> Bestehende Beiträge zu überarbeiten bringt oft mehr als neue.",
      "<strong>Halten Sie 20 Prozent frei</strong> für Aktuelles, das nicht im Quartalsplan stand."
    ],
    faq: [
      [
        "Wie weit im Voraus plant man einen Redaktionsplan?",
        "Ein Quartal in Themen, vier bis sechs Wochen in konkreten Aufgaben. Weiter im Voraus veraltet der Plan schneller, als er nützt."
      ],
      [
        "Warum ein Gantt-Diagramm statt einer Tabelle?",
        "Weil es die Produktionszeit vor der Veröffentlichung zeigt und Engpässe sichtbar macht, wenn drei Beiträge dieselbe Woche brauchen."
      ],
      [
        "Wie geht man mit kurzfristigen Themen um?",
        "Puffer im Plan lassen. Ein zu 100 Prozent verplanter Redaktionsplan bricht bei der ersten aktuellen Meldung."
      ]
    ],
    related: [
      ["marketing", "Marketingplan"],
      ["monthly", "Monatsplan"],
      ["product-launch", "Produkteinführung"]
    ]
  },

  '30-60-90-day-plan': {
    card: "Einarbeitung in drei Etappen: verstehen, mitarbeiten, eigenständig liefern.",
    h1: "30-60-90-Tage-Plan als Gantt-Diagramm",
    metaTitle: "30-60-90-Tage-Plan — kostenlose Vorlage",
    metaDesc: "Kostenlose Gantt-Vorlage für den 30-60-90-Tage-Plan: Einarbeitung, erste Beiträge und eigenständige Verantwortung.",
    lead: "Ein <strong>30-60-90-Tage-Plan</strong> beantwortet eine Frage, die in jedem neuen Job gestellt wird: Was tun Sie zuerst? Als Gantt-Diagramm zeigt er nicht nur die Ziele, sondern auch, was parallel läuft und was aufeinander aufbaut.",
    intro: "Drei Etappen mit klar unterschiedlichem Charakter:",
    phases: [
      [
        "Tag 1–30: Verstehen",
        "Einarbeitung, Gespräche mit Team und Schnittstellen, Produkt, Kunden, Zahlen und Prozesse. <em>Meilenstein: Bestandsaufnahme vorgestellt.</em>"
      ],
      [
        "Tag 31–60: Mitarbeiten",
        "Erste eigene Aufgaben, Übernahme laufender Themen, Verbesserungsvorschläge und erste sichtbare Ergebnisse."
      ],
      [
        "Tag 61–90: Liefern",
        "Eigenverantwortliche Themen, ein abgeschlossenes Vorhaben und ein Plan für die folgenden sechs Monate. <em>Meilenstein: Probezeitgespräch.</em>"
      ]
    ],
    callout: "Widerstehen Sie dem Reflex, in den ersten 30 Tagen etwas zu verändern. Der häufigste Fehler neuer Führungskräfte ist eine Umstellung, die vor der Bestandsaufnahme beschlossen wurde — sie kostet mehr Vertrauen, als das schnelle Ergebnis wert ist.",
    customize: [
      "Je Etappe drei bis fünf Ziele statt einer langen Aufgabenliste — mehr wird in 30 Tagen nicht erreicht.",
      "Gesprächstermine mit Schlüsselpersonen als eigene Vorgänge in den ersten zwei Wochen setzen.",
      "Feedbackgespräche nach 30, 60 und 90 Tagen als Meilensteine eintragen.",
      "Auf 100 Tage erweitern, wenn die Probezeit sechs Monate beträgt."
    ],
    tips: [
      "<strong>Zuhören ist ein Vorgang.</strong> Planen Sie Gespräche ein, statt sie nebenbei zu führen.",
      "<strong>Ein sichtbares Ergebnis bis Tag 60</strong> wiegt schwerer als fünf angefangene Themen.",
      "<strong>Schreiben Sie auf, was Sie in Woche eins seltsam finden.</strong> Nach acht Wochen fällt es Ihnen nicht mehr auf.",
      "<strong>Stimmen Sie den Plan mit der Führungskraft ab.</strong> Ein Plan, den nur Sie kennen, misst nichts."
    ],
    faq: [
      [
        "Für wen eignet sich ein 30-60-90-Tage-Plan?",
        "Für neue Stellen, für Führungswechsel und als Vorbereitung auf das Vorstellungsgespräch, wenn danach gefragt wird."
      ],
      [
        "Wie konkret sollten die Ziele sein?",
        "Konkret genug, dass jemand anderes beurteilen kann, ob sie erreicht sind. „Team kennenlernen\" ist kein Ziel, „mit allen zwölf Teammitgliedern gesprochen\" schon."
      ],
      [
        "Was, wenn die Realität den Plan überholt?",
        "Dann passen Sie ihn an. Der Wert liegt in der Ausrichtung der ersten Wochen, nicht in der Einhaltung eines Balkens."
      ]
    ],
    related: [
      ["employee-onboarding", "Einarbeitung"],
      ["project-management", "Projektmanagement"],
      ["monthly", "Monatsplan"]
    ]
  },

  'product-roadmap': {
    card: "Themen, Releases und Abhängigkeiten über Quartale statt Wochen.",
    h1: "Gantt-Diagramm-Vorlage für die Produkt-Roadmap",
    metaTitle: "Produkt-Roadmap Vorlage — Gantt-Diagramm",
    metaDesc: "Kostenlose Gantt-Vorlage für die Produkt-Roadmap: Themen, Initiativen, Releases, Abhängigkeiten und Quartalsplanung.",
    lead: "Eine <strong>Produkt-Roadmap</strong> ist kein Sprintplan. Sie arbeitet in Quartalen und Themen, nicht in Tickets — und ihr eigentlicher Wert liegt darin, Abhängigkeiten zwischen Initiativen zu zeigen, bevor sie zum Problem werden.",
    intro: "Vier Ebenen, die eine Roadmap tragen:",
    phases: [
      [
        "Themen",
        "Die zwei bis vier strategischen Schwerpunkte des Jahres. Alles Weitere ordnet sich ihnen unter."
      ],
      [
        "Initiativen",
        "Größere Vorhaben je Thema, mit grober Dauer in Wochen und einem klaren Ergebnis. <em>Die eigentlichen Balken der Roadmap.</em>"
      ],
      [
        "Releases",
        "Termingebundene Auslieferungen, Betas und öffentliche Ankündigungen als Meilensteine."
      ],
      [
        "Abhängigkeiten und Voraussetzungen",
        "Plattformarbeit, Migrationen, externe Partner und alles, was andere Initiativen blockiert."
      ]
    ],
    callout: "Setzen Sie keine Tagesgenauigkeit für das dritte und vierte Quartal. Eine Roadmap, die zwölf Monate im Voraus konkrete Termine zusagt, wird entweder gebrochen oder eingehalten, indem man den Umfang heimlich reduziert. Grobe Balken sind ehrlicher und halten länger.",
    customize: [
      "Je Thema eine Gruppe mit den zugehörigen Initiativen darunter.",
      "Auf Quartalsauflösung umstellen — Wochen suggerieren eine Genauigkeit, die nicht besteht.",
      "Abhängigkeiten zwischen Initiativen verknüpfen; sie sind der Hauptgrund für Verschiebungen.",
      "Eine Zeile für Plattform- und Wartungsarbeit führen, sonst verschwindet sie und passiert trotzdem."
    ],
    tips: [
      "<strong>Nicht mehr als vier Themen.</strong> Eine Roadmap mit zwölf Schwerpunkten hat keine.",
      "<strong>Späte Quartale gröber halten.</strong> Genauigkeit ohne Grundlage ist ein Versprechen, kein Plan.",
      "<strong>Zeigen Sie Abhängigkeiten offen.</strong> Sie erklären Verschiebungen, bevor sie erklärt werden müssen.",
      "<strong>Reservieren Sie 20 Prozent Kapazität</strong> für Wartung, Fehler und Ungeplantes."
    ],
    faq: [
      [
        "Wie unterscheidet sich eine Roadmap vom Sprintplan?",
        "Die Roadmap arbeitet in Quartalen und Themen, der Sprintplan in Tagen und Tickets. Sie beantworten unterschiedliche Fragen."
      ],
      [
        "Sollte eine Roadmap Termine enthalten?",
        "Für das laufende Quartal ja, für spätere nur grobe Zeiträume. Alles andere sind Zusagen ohne Grundlage."
      ],
      [
        "Wie oft aktualisiert man sie?",
        "Einmal je Quartal grundlegend, monatlich in kleinen Anpassungen."
      ]
    ],
    related: [
      ["sprint", "Sprintplan"],
      ["software-development", "Softwareentwicklung"],
      ["product-launch", "Produkteinführung"]
    ]
  },

  'annual': {
    card: "Ein Jahr auf einer Seite: Quartale, Initiativen und feste Termine.",
    h1: "Jahresplan als Gantt-Diagramm",
    metaTitle: "Jahresplan Vorlage — Gantt-Diagramm",
    metaDesc: "Kostenlose Jahresplan-Vorlage: Quartale, Initiativen, feste Termine und Meilensteine auf einer Seite.",
    lead: "Ein <strong>Jahresplan</strong> zeigt zwölf Monate auf einer Seite. Er arbeitet in Quartalen und Initiativen, nicht in Aufgaben — sobald einzelne Arbeitspakete auftauchen, ist er kein Jahresplan mehr, sondern ein unleserlicher Projektplan.",
    intro: "Vier Quartale mit den Blöcken, die ein Jahr tragen:",
    phases: [
      [
        "Q1 — Start und Weichenstellung",
        "Jahresziele, Budgetfreigabe, laufende Vorhaben fortsetzen. <em>Meilenstein: Planung verabschiedet.</em>"
      ],
      [
        "Q2 — Umsetzung",
        "Die großen Initiativen laufen an; erste Zwischenergebnisse und Kurskorrektur."
      ],
      [
        "Q3 — Halbzeit und Nachsteuern",
        "Halbjahresbilanz, Budgetanpassung, Priorisierung für den Rest des Jahres."
      ],
      [
        "Q4 — Abschluss und Vorbereitung",
        "Jahresabschluss, Auswertung und Planung des Folgejahres. <em>Meilenstein: Plan für nächstes Jahr steht.</em>"
      ]
    ],
    callout: "Bleiben Sie auf Initiativenebene. Ein Jahresplan mit 200 Aufgaben wird im März nicht mehr gepflegt und im Juni nicht mehr geglaubt. Zwölf bis zwanzig Balken reichen, um ein Jahr zu erzählen.",
    customize: [
      "Auf Quartals- oder Monatsauflösung umstellen — Wochen sind für ein Jahr zu fein.",
      "Feste Termine zuerst eintragen: Messen, Abschlüsse, Saisonspitzen, Urlaubszeiten.",
      "Je Abteilung eine Zeile ergänzen, wenn der Plan bereichsübergreifend gilt.",
      "Quartalsübergänge als Meilensteine setzen — dort wird nachgesteuert."
    ],
    tips: [
      "<strong>Nicht mehr als fünf große Initiativen.</strong> Mehr schafft keine Organisation in einem Jahr.",
      "<strong>Feste Termine sind der Rahmen.</strong> Alles andere ordnet sich ihnen unter.",
      "<strong>Planen Sie Q4 grob.</strong> Was Sie im Januar für Oktober festlegen, stimmt selten.",
      "<strong>Quartalsweise überarbeiten</strong>, nicht einmal im Jahr."
    ],
    faq: [
      [
        "Wie detailliert sollte ein Jahresplan sein?",
        "Auf Initiativenebene: zwölf bis zwanzig Balken. Einzelne Aufgaben gehören in die Quartals- oder Monatsplanung."
      ],
      [
        "Wann erstellt man den Jahresplan?",
        "Im vierten Quartal des Vorjahres, sobald das Budget steht. Ein Plan ohne Budgetfreigabe ist eine Wunschliste."
      ],
      [
        "Wie oft wird er aktualisiert?",
        "Einmal je Quartal grundlegend. Häufiger lohnt sich bei dieser Auflösung nicht."
      ]
    ],
    related: [
      ["monthly", "Monatsplan"],
      ["product-roadmap", "Produkt-Roadmap"],
      ["project-management", "Projektmanagement"]
    ]
  },

  'sprint': {
    card: "Zwei Wochen von Planning über Daily bis Review und Retrospektive.",
    h1: "Sprintplan als Gantt-Diagramm",
    metaTitle: "Sprintplan Vorlage — Gantt-Diagramm",
    metaDesc: "Kostenlose Sprintplan-Vorlage: Sprint Planning, Umsetzung, Testing, Review und Retrospektive über zwei Wochen.",
    lead: "Ein <strong>Sprintplan</strong> im Gantt-Format ist kein Ersatz für das Board — er zeigt, was ein Board nicht zeigt: welche Aufgaben voneinander abhängen und wo die zwei Wochen tatsächlich eng werden.",
    intro: "Ein zweiwöchiger Sprint mit den festen Terminen:",
    phases: [
      [
        "Sprint Planning (Tag 1)",
        "Ziel festlegen, Backlog-Einträge schätzen und committen. <em>Meilenstein: Sprint Goal steht.</em>"
      ],
      [
        "Umsetzung (Tag 1–8)",
        "Entwicklung mit täglichem Abgleich; Abhängigkeiten zwischen Aufgaben sichtbar halten."
      ],
      [
        "Integration und Test (Tag 7–9)",
        "Zusammenführen, testen, Fehler beheben — überlappt bewusst mit der Umsetzung."
      ],
      [
        "Review und Retrospektive (Tag 10)",
        "Ergebnis zeigen, Feedback aufnehmen, Prozess verbessern. <em>Meilenstein: Increment abgenommen.</em>"
      ]
    ],
    callout: "Planen Sie die letzten zwei Tage nicht voll. Jeder Sprint bringt Unvorhergesehenes, und ein Sprint ohne Reserve endet regelmäßig mit unfertigen Aufgaben, die in den nächsten geschoben werden — was die Planbarkeit beider Sprints zerstört.",
    customize: [
      "Sprintlänge ändern — bei einwöchigen Sprints Phasen entsprechend kürzen.",
      "Je Entwicklerin eine Zeile führen, wenn Sie die Auslastung prüfen wollen.",
      "Abhängigkeiten zwischen Backlog-Einträgen verknüpfen; genau dafür lohnt sich das Gantt-Format hier.",
      "Wiederkehrende Termine (Daily, Refinement) als Serie eintragen."
    ],
    tips: [
      "<strong>Das Sprintziel ist wichtiger als die Aufgabenliste.</strong> Es entscheidet, was wegfallen darf.",
      "<strong>Testen läuft parallel</strong>, nicht am Ende. Sonst ist der letzte Tag immer zu kurz.",
      "<strong>Reserve einplanen.</strong> 15 bis 20 Prozent der Kapazität bleiben frei.",
      "<strong>Für den Sprint selbst bleibt das Board das Arbeitsmittel</strong> — dieser Plan ist für Abhängigkeiten und Absprachen."
    ],
    faq: [
      [
        "Passt ein Gantt-Diagramm zu Scrum?",
        "Für den Sprint selbst ist das Board besser. Das Gantt-Format hilft bei Abhängigkeiten, Releaseplanung und der Abstimmung mit Nicht-Scrum-Beteiligten."
      ],
      [
        "Wie lang sollte ein Sprint sein?",
        "Ein bis vier Wochen, üblich sind zwei. Kürzer erhöht den Zeremonienanteil, länger verzögert Feedback."
      ],
      [
        "Was tun mit unfertigen Aufgaben?",
        "Zurück ins Backlog und neu priorisieren, nicht automatisch in den nächsten Sprint schieben."
      ]
    ],
    related: [
      ["agile", "Agiles Projekt"],
      ["software-development", "Softwareentwicklung"],
      ["product-roadmap", "Produkt-Roadmap"]
    ]
  },

  'wind-farm-construction-schedule': {
    card: "Genehmigung, Fundamente, Türme, Netzanschluss und Inbetriebnahme.",
    h1: "Bauzeitenplan für einen Windpark",
    metaTitle: "Bauzeitenplan Windpark — Vorlage",
    metaDesc: "Kostenlose Gantt-Vorlage für Windparks: Standortentwicklung, Genehmigung, Fundamente, Errichtung, Netzanschluss.",
    lead: "Ein <strong>Bauzeitenplan für einen Windpark</strong> wird von drei Dingen bestimmt, die außerhalb der Baustelle liegen: der Genehmigung, dem Netzanschluss und der Verfügbarkeit von Schwerlastkränen.",
    intro: "Sechs Phasen von der Fläche bis zur ersten Kilowattstunde:",
    phases: [
      [
        "Standortentwicklung",
        "Flächensicherung, Windmessung, Ertragsgutachten, Netzanfrage. <em>Meilenstein: Netzanschlusszusage.</em>"
      ],
      [
        "Genehmigung",
        "BImSchG-Verfahren, Umweltverträglichkeit, Artenschutz, Schall- und Schattengutachten — der längste Abschnitt."
      ],
      [
        "Beschaffung und Finanzierung",
        "Anlagenbestellung, Kranlogistik, EPC-Vergabe. <em>Meilenstein: Financial Close.</em>"
      ],
      [
        "Infrastruktur",
        "Zuwegung, Kranstellflächen, Kabeltrassen, Umspannwerk — muss vor der Anlieferung stehen."
      ],
      [
        "Errichtung",
        "Fundamente, Aushärtung, Turmsegmente, Gondel, Rotorblätter. <em>Windabhängig und kranlimitiert.</em>"
      ],
      [
        "Inbetriebnahme",
        "Elektrische Anbindung, Prüfungen, Probebetrieb, Übergabe. <em>Meilenstein: erste Einspeisung.</em>"
      ]
    ],
    callout: "Die Montage ist windabhängig, nicht nur wetterabhängig. Ab etwa 8 bis 12 m/s in Nabenhöhe steht der Kran still — auf einem Standort, der ausgesucht wurde, weil dort viel Wind weht. Rechnen Sie Stillstandstage ein, statt sie als Verzug zu behandeln.",
    customize: [
      "Je Anlage eine Zeile ergänzen — die Errichtung läuft nacheinander, weil der Kran wandert.",
      "Fundamentaushärtung als eigenen Vorgang führen (28 Tage), nicht als Verzögerung verstecken.",
      "Artenschutzfenster als nicht-verfügbare Zeiträume im Kalender hinterlegen.",
      "Krantermine als feste Termine setzen — sie sind Monate im Voraus gebucht und schwer zu verschieben."
    ],
    tips: [
      "<strong>Der Kran bestimmt die Reihenfolge.</strong> Planen Sie die Anlagen in seiner Fahrtroute.",
      "<strong>Die Zuwegung wird unterschätzt.</strong> Schwertransporte brauchen Kurvenradien und Tragfähigkeit.",
      "<strong>Genehmigung und Netz laufen parallel</strong>, aber nur eines bestimmt am Ende den Termin.",
      "<strong>Winter ist nicht automatisch verloren</strong> — Fundamente ja, Montage bei Frost oft nein."
    ],
    faq: [
      [
        "Wie lange dauert der Bau eines Windparks?",
        "Die Bauzeit liegt bei sechs bis zwölf Monaten. Von der Standortsicherung bis zur Einspeisung vergehen meist drei bis sieben Jahre."
      ],
      [
        "Was liegt auf dem kritischen Pfad?",
        "Fast immer die Genehmigung, danach der Netzanschluss. Die Errichtung selbst ist der kürzeste Abschnitt."
      ],
      [
        "Warum steht die Montage bei Wind still?",
        "Rotorblätter und Gondeln können ab etwa 8 bis 12 m/s nicht sicher gehoben werden. Das ist ein normaler Planungsfaktor, kein Zwischenfall."
      ]
    ],
    related: [
      ["solar-farm-construction-schedule", "Solarpark"],
      ["construction", "Bauzeitenplan"],
      ["ev-charging-installation-schedule", "Ladeinfrastruktur"]
    ]
  },

  'ev-charging-installation-schedule': {
    card: "Standort, Netzanschluss, Tiefbau, Montage und Eichrechtskonformität.",
    h1: "Projektplan für Ladeinfrastruktur",
    metaTitle: "Ladeinfrastruktur — Projektplan Vorlage",
    metaDesc: "Kostenlose Gantt-Vorlage für Ladeinfrastruktur: Standortprüfung, Netzanschluss, Tiefbau, Montage, Eichrecht und Abnahme.",
    lead: "Ein <strong>Projektplan für Ladeinfrastruktur</strong> scheitert selten an der Technik. Er scheitert am Netzanschluss und am Eichrecht — zwei Vorgänge, die früh beginnen müssen und über die der Errichter nicht allein entscheidet.",
    intro: "Sechs Phasen von der Standortprüfung bis zur Freigabe:",
    phases: [
      [
        "Standort und Konzept",
        "Verkehrsfluss, Stellplätze, Leistungsbedarf, Ladepunktzahl und Betreibermodell."
      ],
      [
        "Netzanschluss",
        "Anfrage beim Netzbetreiber, Leistungszusage, gegebenenfalls Trafostation. <em>Der längste Vorlauf.</em>"
      ],
      [
        "Genehmigung und Förderung",
        "Baugenehmigung, Stellplatzsatzung, Förderantrag und Bewilligung."
      ],
      [
        "Tiefbau",
        "Kabelgräben, Fundamente, Leerrohre, Stellplatzmarkierung und Beschilderung."
      ],
      [
        "Montage und Anschluss",
        "Ladesäulen setzen, elektrisch anschließen, Lastmanagement und Backend anbinden."
      ],
      [
        "Abnahme und Inbetriebnahme",
        "Elektroprüfung, Eichrechtskonformität, Roaming-Anbindung, Testladung. <em>Meilenstein: freigegeben.</em>"
      ]
    ],
    callout: "Der Netzanschluss gehört an den Anfang, nicht in die Bauphase. Zwischen Anfrage und Leistungszusage liegen je nach Netzbetreiber und Leistung drei bis achtzehn Monate — länger als der gesamte Rest des Projekts.",
    customize: [
      "Je Standort eine Zeilengruppe, wenn Sie mehrere parallel errichten.",
      "Förderfristen als feste Termine eintragen — sie verfallen und verschieben sich nicht.",
      "Eichrechtskonforme Abnahme als eigenen Vorgang führen; ohne sie darf nicht abgerechnet werden.",
      "Tiefbau in Frostperioden mit Puffer versehen."
    ],
    tips: [
      "<strong>Netzanschluss zuerst anfragen</strong>, noch bevor der Standort final ist.",
      "<strong>Leistung realistisch dimensionieren.</strong> Überdimensionierung verteuert den Anschluss erheblich.",
      "<strong>Backend und Roaming brauchen Vorlauf</strong>, nicht erst am Tag der Inbetriebnahme.",
      "<strong>Fördermittel binden Termine.</strong> Lesen Sie die Fristen, bevor Sie den Plan bauen."
    ],
    faq: [
      [
        "Wie lange dauert die Errichtung von Ladeinfrastruktur?",
        "Der Bau selbst dauert Wochen. Mit Netzanschluss und Genehmigung liegen realistisch sechs bis achtzehn Monate dazwischen."
      ],
      [
        "Was ist der häufigste Grund für Verzug?",
        "Der Netzanschluss. Er wird zu spät angefragt und hat den längsten und am wenigsten beeinflussbaren Vorlauf."
      ],
      [
        "Was bedeutet eichrechtskonform?",
        "Die Ladepunkte müssen die geladene Energie rechtssicher messen, damit nach kWh abgerechnet werden darf. Ohne diese Abnahme ist kein Verkauf zulässig."
      ]
    ],
    related: [
      ["solar-farm-construction-schedule", "Solarpark"],
      ["construction", "Bauzeitenplan"],
      ["office-relocation-project-plan", "Büroumzug"]
    ]
  },

  'mining-project-schedule': {
    card: "Exploration, Machbarkeit, Genehmigung, Erschließung und Produktionsstart.",
    h1: "Projektplan für ein Bergbauvorhaben",
    metaTitle: "Bergbauprojekt — Gantt-Vorlage",
    metaDesc: "Kostenlose Gantt-Vorlage für Bergbauprojekte: Exploration, Machbarkeitsstudien, Genehmigung, Erschließung, Produktionsstart.",
    lead: "Ein <strong>Bergbauprojekt</strong> läuft über Jahrzehnte und wird in Studienstufen geplant. Jede Stufe schärft die Schätzung und entscheidet, ob überhaupt weitergegangen wird — der Plan ist deshalb eine Kette von Entscheidungspunkten, nicht eine durchgehende Bauabfolge.",
    intro: "Sechs Stufen von der ersten Bohrung bis zur Produktion:",
    phases: [
      [
        "Exploration",
        "Geophysik, Bohrprogramm, Ressourcenmodell. <em>Meilenstein: Ressource klassifiziert.</em>"
      ],
      [
        "Scoping- und Vorstudie",
        "Erste Wirtschaftlichkeitsbetrachtung, Abbauverfahren, grobe Investitionsschätzung."
      ],
      [
        "Machbarkeitsstudie",
        "Detaillierte Planung, Reserven, Kostenschätzung mit enger Bandbreite. <em>Meilenstein: Investitionsentscheidung.</em>"
      ],
      [
        "Genehmigung und Beteiligung",
        "Umweltprüfung, Wasserrecht, Abbaugenehmigung, Vereinbarungen mit Anrainern und Behörden."
      ],
      [
        "Erschließung",
        "Zuwegung, Energie- und Wasserversorgung, Aufbereitungsanlage, Absetzbecken, Unterkünfte."
      ],
      [
        "Anfahren und Produktion",
        "Vorabraum, Testbetrieb, Hochlauf zur Nennleistung. <em>Meilenstein: kommerzielle Produktion.</em>"
      ]
    ],
    callout: "Genehmigung und gesellschaftliche Akzeptanz sind kein Nebenstrang. Sie sind bei den meisten gescheiterten Bergbauprojekten die eigentliche Ursache — nicht Geologie und nicht Technik. Planen Sie sie mit derselben Ernsthaftigkeit wie die Aufbereitungsanlage.",
    customize: [
      "Auf Jahre statt Monate umstellen — ein Bergbauprojekt läuft über ein Jahrzehnt.",
      "Studienstufen als Meilensteine mit Abbruchentscheidung führen (Stage Gates).",
      "Lange Lieferzeiten für Mühlen und Brecher als eigene Vorgänge sichtbar machen.",
      "Genehmigungs- und Beteiligungsstränge parallel zur Technik führen, nicht danach."
    ],
    tips: [
      "<strong>Jede Studienstufe darf das Projekt beenden.</strong> Ein Plan ohne Abbruchpunkte ist keine Planung.",
      "<strong>Die Kostenbandbreite gehört zur Stufe.</strong> Scoping ±35 %, Machbarkeit ±15 %.",
      "<strong>Wasser ist oft der Engpass</strong>, nicht das Erz.",
      "<strong>Der Hochlauf dauert länger als geplant.</strong> Zwölf bis vierundzwanzig Monate zur Nennleistung sind üblich."
    ],
    faq: [
      [
        "Wie lange dauert ein Bergbauprojekt bis zur Produktion?",
        "Von der Entdeckung bis zur Produktion vergehen typischerweise zehn bis zwanzig Jahre, je nach Rohstoff und Rechtsraum."
      ],
      [
        "Was sind Stage Gates?",
        "Entscheidungspunkte zwischen den Studienstufen, an denen über Fortsetzung, Anpassung oder Abbruch entschieden wird."
      ],
      [
        "Was verzögert Bergbauprojekte am häufigsten?",
        "Genehmigungsverfahren und Widerstand vor Ort, gefolgt von Finanzierung. Technische Gründe stehen weiter hinten."
      ]
    ],
    related: [
      ["refinery-turnaround-schedule", "Raffinerie-Turnaround"],
      ["construction", "Bauzeitenplan"],
      ["shipbuilding-project-schedule", "Schiffbau"]
    ]
  },

  'shipbuilding-project-schedule': {
    card: "Entwurf, Sektionsbau, Ausrüstung, Probefahrt und Ablieferung.",
    h1: "Projektplan für den Schiffbau",
    metaTitle: "Schiffbau — Projektplan Vorlage",
    metaDesc: "Kostenlose Gantt-Vorlage für den Schiffbau: Entwurf, Stahlbau, Sektionen, Ausrüstung, Probefahrt und Ablieferung.",
    lead: "Ein <strong>Schiffbauprojekt</strong> plant nicht Räume, sondern Sektionen. Das Schiff entsteht in Blöcken, die parallel gebaut und dann zusammengefügt werden — die Reihenfolge dieser Blöcke ist der eigentliche Terminplan.",
    intro: "Sechs Phasen vom Vertrag bis zur Übergabe:",
    phases: [
      [
        "Vertrag und Basisentwurf",
        "Spezifikation, Klassifikation, Generalplan, Hauptabmessungen. <em>Meilenstein: Design Freeze.</em>"
      ],
      [
        "Detailkonstruktion und Beschaffung",
        "Fertigungsunterlagen, Materialbestellung, Hauptmaschine und Großkomponenten mit langem Vorlauf."
      ],
      [
        "Sektionsbau",
        "Zuschnitt, Paneele, Sektionen, Vorausrüstung — je früher ausgerüstet, desto günstiger."
      ],
      [
        "Zusammenbau",
        "Sektionen fügen, Kiellegung, Aufschwimmen oder Stapellauf. <em>Meilenstein: Schiff schwimmt.</em>"
      ],
      [
        "Ausrüstung und Inbetriebnahme",
        "Systeme anschließen, Innenausbau, Prüfungen im Dock."
      ],
      [
        "Probefahrt und Ablieferung",
        "Seeerprobung, Mängelabarbeitung, Klasseabnahme. <em>Meilenstein: Übergabe an den Reeder.</em>"
      ]
    ],
    callout: "Ausrüstung in der Sektion ist um ein Vielfaches günstiger als Ausrüstung im fertigen Schiff. Was erst nach dem Zusammenbau eingebaut wird, muss durch enge Zugänge, in beengter Lage und über Kopf montiert werden — die Vorausrüstungsquote ist die wichtigste Stellschraube im ganzen Plan.",
    customize: [
      "Je Sektion eine Zeile — sie sind die eigentlichen Planungseinheiten.",
      "Lieferzeiten für Hauptmaschine, Propeller und Getriebe als eigene Vorgänge führen; sie liegen bei ein bis zwei Jahren.",
      "Klassifikationsgesellschaft und Abnahmen als feste Termine setzen.",
      "Dock- und Kaibelegung als Ressource prüfen, wenn mehrere Neubauten laufen."
    ],
    tips: [
      "<strong>Design Freeze ist der wichtigste Meilenstein.</strong> Spätere Änderungen kosten ein Vielfaches.",
      "<strong>Der Dockplatz ist die knappste Ressource.</strong> Er bestimmt die Reihenfolge, nicht der Kundenwunsch.",
      "<strong>Planen Sie Mängelabarbeitung nach der Probefahrt ein.</strong> Sie fällt immer an.",
      "<strong>Langläufer zuerst bestellen</strong>, oft vor Abschluss der Detailkonstruktion."
    ],
    faq: [
      [
        "Wie lange dauert ein Schiffsneubau?",
        "Je nach Typ und Größe zwölf bis fünfunddreißig Monate ab Vertrag, bei Spezialschiffen auch länger."
      ],
      [
        "Was ist Vorausrüstung?",
        "Der Einbau von Rohrleitungen, Kabeln und Ausrüstung in die Sektion, bevor sie eingebaut wird — deutlich günstiger als später."
      ],
      [
        "Was liegt auf dem kritischen Pfad?",
        "Meist die Hauptmaschine und andere Großkomponenten mit langer Lieferzeit, gefolgt von der Dockbelegung."
      ]
    ],
    related: [
      ["mining-project-schedule", "Bergbauprojekt"],
      ["construction", "Bauzeitenplan"],
      ["refinery-turnaround-schedule", "Raffinerie-Turnaround"]
    ]
  },

  'apparel-production-calendar': {
    card: "Von der Kollektionsplanung über Muster und Order bis zur Auslieferung.",
    h1: "Produktionskalender für Mode und Bekleidung",
    metaTitle: "Produktionskalender Mode — Vorlage",
    metaDesc: "Kostenlose Gantt-Vorlage für die Bekleidungsproduktion: Kollektion, Muster, Order, Materialbeschaffung, Fertigung, Auslieferung.",
    lead: "Ein <strong>Produktionskalender für Bekleidung</strong> rechnet rückwärts vom Liefertermin an den Handel. Verpasst eine Kollektion ihr Zeitfenster, wird sie nicht später verkauft — sie wird reduziert.",
    intro: "Sechs Phasen je Saison:",
    phases: [
      [
        "Kollektionsplanung",
        "Trendrecherche, Sortimentsrahmen, Kalkulation und Farbkarte. <em>Meilenstein: Konzept freigegeben.</em>"
      ],
      [
        "Design und Erstmuster",
        "Entwürfe, Schnitte, Prototypen, Passformkorrekturen — mehrere Runden sind normal."
      ],
      [
        "Salesmuster und Order",
        "Musterkollektion, Showroom oder Messe, Ordererfassung. <em>Meilenstein: Orderschluss.</em>"
      ],
      [
        "Materialbeschaffung",
        "Stoffe, Zutaten, Labels — mit den längsten Lieferzeiten im ganzen Ablauf."
      ],
      [
        "Produktion",
        "Zuschnitt, Nähen, Finishing, Qualitätsprüfung in der Fertigung."
      ],
      [
        "Versand und Auslieferung",
        "Verschiffung, Zoll, Wareneingang, Verteilung an die Filialen. <em>Meilenstein: im Handel.</em>"
      ]
    ],
    callout: "Die Stoffbeschaffung startet vor dem Orderschluss, nicht danach. Wer erst nach der Order bestellt, verliert sechs bis zehn Wochen Lieferzeit und erreicht das Zeitfenster nicht mehr. Deshalb wird ein Teil der Stoffe auf Prognose gekauft — mit dem entsprechenden Risiko.",
    customize: [
      "Je Kollektion eine Zeilengruppe — Frühjahr/Sommer und Herbst/Winter laufen überlappend.",
      "Verschiffungsdauer als eigenen Vorgang führen: See vier bis sechs Wochen, Luft Tage.",
      "Chinesisches Neujahr und Werksferien als nicht-verfügbare Zeiträume hinterlegen.",
      "Passformrunden mit realistischer Anzahl planen — meist zwei bis drei."
    ],
    tips: [
      "<strong>Rückwärts vom Liefertermin rechnen.</strong> Das Zeitfenster im Handel ist nicht verhandelbar.",
      "<strong>Stoff ist der längste Vorlauf</strong>, nicht das Nähen.",
      "<strong>Werksferien einplanen.</strong> Chinesisches Neujahr legt die Produktion ein bis zwei Wochen still.",
      "<strong>Puffer vor die Verschiffung legen</strong>, nicht dahinter — der Seetermin ist fix."
    ],
    faq: [
      [
        "Wie lange dauert ein Produktionszyklus in der Mode?",
        "Von der Kollektionsplanung bis zur Auslieferung typischerweise neun bis achtzehn Monate, je nach Segment."
      ],
      [
        "Warum wird Stoff vor dem Orderschluss gekauft?",
        "Weil die Lieferzeit sonst das Zeitfenster sprengt. Ein Teil wird auf Prognose beschafft — ein bewusst eingegangenes Risiko."
      ],
      [
        "Wie viele Passformrunden sind normal?",
        "Zwei bis drei. Wer mit einer plant, plant unrealistisch."
      ]
    ],
    related: [
      ["content-calendar", "Redaktionsplan"],
      ["product-launch", "Produkteinführung"],
      ["annual", "Jahresplan"]
    ]
  },

  'phd-research-gantt-chart': {
    card: "Promotionsvorhaben über drei bis vier Jahre mit klaren Etappenzielen.",
    h1: "Gantt-Diagramm für das Promotionsprojekt",
    metaTitle: "Zeitplan Promotion — Gantt-Vorlage",
    metaDesc: "Kostenlose Gantt-Vorlage für die Promotion: Exposé, Literatur, Methodik, Erhebung, Publikationen, Disputation.",
    lead: "Ein <strong>Zeitplan für die Promotion</strong> unterscheidet sich vom Dissertationsplan darin, dass er mehr enthält als die Schrift: Lehre, Konferenzen, Publikationen und Drittmittel gehören dazu und kosten reale Monate.",
    intro: "Sechs Stränge über drei bis vier Jahre:",
    phases: [
      [
        "Jahr 1 — Fundament",
        "Exposé, Betreuungsvereinbarung, Literaturbasis, Methodenschulung. <em>Meilenstein: Annahme.</em>"
      ],
      [
        "Jahr 1–2 — Studiendesign",
        "Forschungsdesign, Ethikvotum, Instrumente, Pretest und Feldzugang."
      ],
      [
        "Jahr 2–3 — Erhebung und Auswertung",
        "Datenerhebung, Aufbereitung, Analyse. <em>Der Abschnitt mit dem größten Risiko.</em>"
      ],
      [
        "Laufend — Publikationen",
        "Konferenzbeiträge und Fachartikel; bei kumulativer Promotion der Kern der Arbeit."
      ],
      [
        "Laufend — Lehre und Selbstverwaltung",
        "Lehrdeputat, Gremien, Betreuung von Abschlussarbeiten — planbar und zeitfressend."
      ],
      [
        "Jahr 3–4 — Abschluss",
        "Zusammenführung, Einreichung, Begutachtung, Disputation. <em>Meilenstein: Verteidigung.</em>"
      ]
    ],
    callout: "Zwischen Einreichung und Disputation liegen Monate, nicht Wochen. Die Begutachtung dauert bei den meisten Fakultäten drei bis sechs Monate — ein Plan, der mit der Abgabe endet, endet ein halbes Jahr zu früh.",
    customize: [
      "Auf Semester umstellen; Wochen sind über vier Jahre unbrauchbar.",
      "Bei kumulativer Promotion je Artikel eine Zeilengruppe mit Einreichung und Revision.",
      "Lehrverpflichtung als wiederkehrenden Block eintragen, nicht als Randnotiz.",
      "Vertragslaufzeit und Finanzierung als harte Terminlinie führen."
    ],
    tips: [
      "<strong>Publizieren Sie früh.</strong> Peer Review dauert länger, als jeder Zeitplan vorsieht.",
      "<strong>Die Erhebung ist der riskanteste Abschnitt.</strong> Halten Sie einen Alternativzugang bereit.",
      "<strong>Lehre kostet ein Drittel Ihrer Zeit</strong>, wenn Sie sie nicht bewusst begrenzen.",
      "<strong>Planen Sie die Begutachtungszeit ein</strong> — sie liegt außerhalb Ihrer Kontrolle."
    ],
    faq: [
      [
        "Wie lange dauert eine Promotion?",
        "Drei bis fünf Jahre, abhängig von Fach, Finanzierung und Lehrbelastung. Empirische Arbeiten liegen am oberen Ende."
      ],
      [
        "Monographie oder kumulativ?",
        "Kumulativ verteilt das Risiko auf mehrere Artikel und produziert früher Sichtbares, hängt aber stärker von Review-Zeiten ab."
      ],
      [
        "Was passiert nach der Einreichung?",
        "Begutachtung durch die Gutachter, dann Disputation. Drei bis sechs Monate sind üblich."
      ]
    ],
    related: [
      ["dissertation-gantt-chart", "Dissertation"],
      ["research", "Forschungsprojekt"],
      ["grant-proposal-gantt-chart", "Förderantrag"]
    ]
  },

  'grant-proposal-gantt-chart': {
    card: "Arbeitsplan für den Antrag — Arbeitspakete, Meilensteine, Deliverables.",
    h1: "Gantt-Diagramm für den Förderantrag",
    metaTitle: "Förderantrag — Arbeitsplan Vorlage",
    metaDesc: "Kostenlose Gantt-Vorlage für Förderanträge: Arbeitspakete, Meilensteine, Deliverables und Berichtspflichten.",
    lead: "Fast jeder <strong>Förderantrag</strong> verlangt einen Arbeitsplan als Balkendiagramm. Er ist nicht nur Formsache: Gutachter lesen an ihm ab, ob Sie das Vorhaben durchdacht haben — und nach der Bewilligung wird genau danach berichtet.",
    intro: "Der Aufbau, den die meisten Förderlinien erwarten:",
    phases: [
      [
        "AP 1 — Projektmanagement",
        "Koordination, Berichte, Mittelabrufe. Läuft über die gesamte Laufzeit."
      ],
      [
        "AP 2 — Konzeption und Vorbereitung",
        "Literatur, Design, Ethik und Datenschutz, Rekrutierung."
      ],
      [
        "AP 3 — Durchführung",
        "Der inhaltliche Kern; meist in mehrere Teilpakete zerlegt."
      ],
      [
        "AP 4 — Auswertung",
        "Analyse, Validierung, Interpretation. <em>Meilenstein: Ergebnisse liegen vor.</em>"
      ],
      [
        "AP 5 — Verwertung und Transfer",
        "Publikationen, Öffentlichkeitsarbeit, Datenarchivierung."
      ],
      [
        "Berichtspflichten",
        "Zwischenbericht, Verwendungsnachweis, Abschlussbericht. <em>Feste Termine des Mittelgebers.</em>"
      ]
    ],
    callout: "Nummerieren Sie Arbeitspakete, Meilensteine und Deliverables durchgehend und verwenden Sie dieselben Nummern im Fließtext des Antrags. Gutachter springen zwischen Text und Balkendiagramm hin und her; wenn die Bezeichnungen auseinanderlaufen, wirkt der Antrag unfertig.",
    customize: [
      "Arbeitspaketstruktur exakt an die Vorgaben der Förderlinie anpassen — sie unterscheiden sich deutlich.",
      "Deliverables als Meilensteine mit Nummer und Monat (M1, M12) eintragen.",
      "Auf Projektmonate statt Kalenderdaten umstellen; der Startzeitpunkt steht bei Antragstellung nicht fest.",
      "Bei Verbundprojekten je Partner eine Zeile pro Arbeitspaket."
    ],
    tips: [
      "<strong>In Projektmonaten planen</strong>, nicht in Datumsangaben — M1 bis M36.",
      "<strong>Meilensteine müssen überprüfbar sein.</strong> „Fortschritt erzielt\" ist keiner.",
      "<strong>Projektmanagement ist ein eigenes Arbeitspaket</strong> mit eigenem Aufwand.",
      "<strong>Planen Sie die Anlaufzeit ein.</strong> Zwischen Bewilligung und besetzter Stelle vergehen Monate."
    ],
    faq: [
      [
        "Wie stellt man einen Arbeitsplan im Antrag dar?",
        "Als Balkendiagramm über Projektmonate, mit nummerierten Arbeitspaketen, Meilensteinen und Deliverables, passend zum Fließtext."
      ],
      [
        "Warum Projektmonate statt Datumsangaben?",
        "Weil der Bewilligungszeitpunkt unbekannt ist. M1 bis M36 bleibt gültig, egal wann das Projekt startet."
      ],
      [
        "Wie viele Arbeitspakete sind sinnvoll?",
        "Vier bis sieben. Mehr wird unübersichtlich, weniger wirkt wenig durchdacht."
      ]
    ],
    related: [
      ["research", "Forschungsprojekt"],
      ["phd-research-gantt-chart", "Promotionsprojekt"],
      ["clinical-trial-gantt-chart", "Klinische Studie"]
    ]
  },

  'erp-implementation-schedule': {
    card: "Von der Analyse über Customizing und Migration bis zum Go-Live.",
    h1: "Projektplan für die ERP-Einführung",
    metaTitle: "ERP-Einführung — Projektplan Vorlage",
    metaDesc: "Kostenlose Gantt-Vorlage für die ERP-Einführung: Analyse, Konzeption, Customizing, Datenmigration, Test, Schulung, Go-Live.",
    lead: "Eine <strong>ERP-Einführung</strong> ist kein IT-Projekt mit Fachbeteiligung, sondern ein Organisationsprojekt mit IT-Anteil. Der Terminplan scheitert fast immer an denselben zwei Stellen: der Datenmigration und der Verfügbarkeit der Fachbereiche.",
    intro: "Sieben Phasen bis zum stabilen Betrieb:",
    phases: [
      [
        "Analyse und Zieldefinition",
        "Ist-Prozesse, Anforderungen, Systemauswahl. <em>Meilenstein: Systementscheidung.</em>"
      ],
      [
        "Konzeption",
        "Soll-Prozesse, Fit-Gap-Analyse, Entscheidung über Anpassungen statt Standard."
      ],
      [
        "Customizing und Entwicklung",
        "Konfiguration, Erweiterungen, Schnittstellen zu Umsystemen."
      ],
      [
        "Datenmigration",
        "Bereinigung, Mapping, Testmigrationen. <em>Mehrere Durchläufe, nicht einer.</em>"
      ],
      [
        "Test",
        "Funktionstest, Integrationstest, Abnahmetest durch die Fachbereiche."
      ],
      [
        "Schulung",
        "Key User zuerst, dann Endanwender — zeitnah zum Go-Live, nicht Monate vorher."
      ],
      [
        "Go-Live und Hypercare",
        "Umstellung, intensive Betreuung, Stabilisierung. <em>Meilenstein: Betrieb übergeben.</em>"
      ]
    ],
    callout: "Rechnen Sie mit drei bis fünf Testmigrationen, nicht mit einer. Altdatenqualität ist in fast jedem Projekt schlechter als angenommen, und jeder Durchlauf deckt Fälle auf, die im Konzept nicht vorkamen. Eine einzige Migration am Go-Live-Wochenende ist der klassische Weg in einen gescheiterten Start.",
    customize: [
      "Je Modul oder Fachbereich eine Zeilengruppe (Finanzen, Einkauf, Produktion, Vertrieb).",
      "Testmigrationen als wiederkehrende Vorgänge eintragen, mit Bereinigungsschleifen dazwischen.",
      "Verfügbarkeit der Key User als Ressource prüfen — sie haben ihr Tagesgeschäft weiterhin.",
      "Hypercare als eigene Phase führen, typischerweise vier bis acht Wochen."
    ],
    tips: [
      "<strong>Standard vor Anpassung.</strong> Jede Individualentwicklung verlängert Projekt und Wartung.",
      "<strong>Schulung kurz vor Go-Live.</strong> Zu früh geschult heißt vergessen.",
      "<strong>Der Go-Live-Termin sollte nicht im Jahresabschluss liegen.</strong>",
      "<strong>Key User sind der Engpass</strong>, nicht die Beratung."
    ],
    faq: [
      [
        "Wie lange dauert eine ERP-Einführung?",
        "Im Mittelstand sechs bis achtzehn Monate, im Konzernumfeld deutlich länger. Umfang und Anpassungstiefe bestimmen die Dauer."
      ],
      [
        "Was ist der häufigste Grund für Verzug?",
        "Datenmigration und Altdatenqualität, dicht gefolgt von der fehlenden Verfügbarkeit der Fachbereiche."
      ],
      [
        "Big Bang oder schrittweise?",
        "Big Bang ist schneller und riskanter; schrittweise senkt das Risiko, erfordert aber temporäre Schnittstellen zwischen alt und neu."
      ]
    ],
    related: [
      ["software-development", "Softwareentwicklung"],
      ["post-merger-integration-plan", "Post-Merger-Integration"],
      ["data-center-build-schedule", "Rechenzentrum"]
    ]
  },

  'post-merger-integration-plan': {
    card: "Die ersten 100 Tage nach dem Closing, funktionsübergreifend geplant.",
    h1: "Integrationsplan nach einer Übernahme",
    metaTitle: "Post-Merger-Integration — Vorlage",
    metaDesc: "Kostenlose Gantt-Vorlage für die Post-Merger-Integration: Day 1, erste 100 Tage, Funktionen, Systeme und Synergien.",
    lead: "Ein <strong>Integrationsplan</strong> beginnt nicht am Tag des Closings, sondern deutlich davor. Was am Day 1 funktionieren muss — Gehälter, Zugänge, Kundenkommunikation — wird Wochen vorher vorbereitet, oft unter kartellrechtlichen Einschränkungen.",
    intro: "Sechs Stränge von der Vorbereitung bis zur Synergierealisierung:",
    phases: [
      [
        "Vorbereitung vor dem Closing",
        "Integrationsteam, Zielbild, Day-1-Checkliste, Clean-Team-Regeln. <em>Was vor dem Closing erlaubt ist, ist begrenzt.</em>"
      ],
      [
        "Day 1",
        "Kommunikation an Mitarbeitende und Kunden, Zugänge, Gehaltsabrechnung, rechtliche Grundlagen. <em>Meilenstein: Closing.</em>"
      ],
      [
        "Erste 100 Tage",
        "Führungsstruktur, Berichtswege, Quick Wins, Bindung von Schlüsselpersonen."
      ],
      [
        "Funktionale Integration",
        "Finanzen, HR, Vertrieb, Einkauf, Produktion — je Funktion eigene Geschwindigkeit."
      ],
      [
        "Systemintegration",
        "ERP, CRM, Netzwerke, Mailsysteme. <em>Der längste und teuerste Strang.</em>"
      ],
      [
        "Synergien und Abschluss",
        "Umsetzung der Maßnahmen, Messung gegen den Business Case, Übergang in den Regelbetrieb."
      ]
    ],
    callout: "Kulturelle Integration ist kein weiches Thema, das man nachschieben kann. Der häufigste Grund, warum Übernahmen ihren Business Case verfehlen, ist der Weggang von Schlüsselpersonen in den ersten sechs Monaten — planen Sie Bindung so konkret wie die Systemmigration.",
    customize: [
      "Je Funktion eine Zeilengruppe mit eigenem Verantwortlichen.",
      "Day-1-Aufgaben als eigenen, stundengenauen Abschnitt führen.",
      "Kartellrechtliche Freigaben als Vorgänger für alles einsetzen, was vor dem Closing nicht erlaubt ist.",
      "Synergiemaßnahmen mit Zieldatum und Betrag versehen, sonst bleiben sie Absicht."
    ],
    tips: [
      "<strong>Kommunizieren Sie am Day 1 zuerst intern.</strong> Mitarbeitende sollten es nicht aus der Presse erfahren.",
      "<strong>Systemintegration dauert Jahre</strong>, nicht Monate. Planen Sie eine Zwischenlösung.",
      "<strong>Halten Sie Schlüsselpersonen früh.</strong> Nach sechs Monaten ist es meist zu spät.",
      "<strong>Messen Sie Synergien gegen den Business Case</strong>, nicht gegen den Plan."
    ],
    faq: [
      [
        "Wann beginnt die Integrationsplanung?",
        "Vor dem Closing, sobald der Kauf absehbar ist — unter Beachtung der kartellrechtlichen Grenzen für den Informationsaustausch."
      ],
      [
        "Warum sind die ersten 100 Tage entscheidend?",
        "Weil Führungsstruktur, Kommunikation und Bindung in diesem Fenster festgelegt werden. Später wird es deutlich schwerer."
      ],
      [
        "Was dauert am längsten?",
        "Die Systemintegration, besonders bei ERP und CRM. Zwei bis drei Jahre sind keine Seltenheit."
      ]
    ],
    related: [
      ["erp-implementation-schedule", "ERP-Einführung"],
      ["office-relocation-project-plan", "Büroumzug"],
      ["project-management", "Projektmanagement"]
    ]
  },

  'office-relocation-project-plan': {
    card: "Flächensuche, Ausbau, IT-Infrastruktur und Umzug am Wochenende.",
    h1: "Projektplan für den Büroumzug",
    metaTitle: "Büroumzug — Projektplan Vorlage",
    metaDesc: "Kostenlose Gantt-Vorlage für den Büroumzug: Flächensuche, Mietvertrag, Ausbau, IT, Umzug und Nacharbeiten.",
    lead: "Bei einem <strong>Büroumzug</strong> bestimmt die IT den Termin, nicht das Mobiliar. Leitungen, Anschlüsse und Netzwerktechnik haben Vorlaufzeiten von Monaten, während Schreibtische in Tagen zu haben sind.",
    intro: "Sechs Phasen von der Suche bis zum ersten Arbeitstag:",
    phases: [
      [
        "Bedarf und Flächensuche",
        "Flächenbedarf, Standortkriterien, Besichtigungen, Verhandlung. <em>Meilenstein: Mietvertrag unterschrieben.</em>"
      ],
      [
        "Planung und Genehmigung",
        "Flächenkonzept, Arbeitsplatzplanung, Brandschutz, gegebenenfalls Baugenehmigung."
      ],
      ["Ausbau", "Trockenbau, Elektrik, Boden, Licht, Küche und Sanitär."],
      [
        "IT und Kommunikation",
        "Leitungsbestellung, Serverraum, Netzwerk, WLAN, Telefonie. <em>Der längste Vorlauf im Projekt.</em>"
      ],
      [
        "Umzugsvorbereitung",
        "Möbelbestellung, Umzugsunternehmen, Beschriftung, Mitarbeiterkommunikation."
      ],
      [
        "Umzug und Nacharbeiten",
        "Umzug am Wochenende, Aufbau, Mängelliste, Rückgabe der alten Fläche. <em>Meilenstein: erster Arbeitstag.</em>"
      ]
    ],
    callout: "Bestellen Sie die Datenleitung, sobald der Mietvertrag steht. Sie ist der einzige Vorgang, den Geld nicht beschleunigt: Zwischen Bestellung und Bereitstellung liegen je nach Anschluss und Standort acht bis zwanzig Wochen, und ohne sie ist die neue Fläche nicht arbeitsfähig.",
    customize: [
      "Je Etage oder Abteilung eine Zeile, wenn der Umzug in Wellen läuft.",
      "Kündigungsfrist der alten Fläche als festen Termin eintragen und rückwärts rechnen.",
      "Umzugswochenende stundengenau planen, getrennt vom Gesamtplan.",
      "Rückbau und Übergabe der alten Fläche mitführen — sie werden regelmäßig vergessen."
    ],
    tips: [
      "<strong>IT zuerst, Möbel zuletzt.</strong> Die Reihenfolge der Vorlaufzeiten, nicht der Sichtbarkeit.",
      "<strong>Zwei Wochen Puffer zwischen Ausbau und Umzug.</strong> Der Ausbau wird nie pünktlich fertig.",
      "<strong>Testen Sie das Netzwerk vor dem Umzug</strong>, nicht am Montagmorgen.",
      "<strong>Kommunizieren Sie früh und konkret.</strong> Der häufigste Ärger sind Kleinigkeiten wie Parkplätze und Anfahrt."
    ],
    faq: [
      [
        "Wie lange dauert die Planung eines Büroumzugs?",
        "Sechs bis zwölf Monate ab Mietvertrag, je nach Ausbautiefe. Die Flächensuche kommt davor."
      ],
      [
        "Was liegt auf dem kritischen Pfad?",
        "Fast immer die Datenanbindung, danach der Innenausbau."
      ],
      [
        "Wann zieht man um?",
        "An einem Wochenende oder über Feiertage, damit ein Arbeitstag Puffer für Nacharbeiten bleibt."
      ]
    ],
    related: [
      ["home-renovation", "Renovierung"],
      ["construction", "Bauzeitenplan"],
      ["employee-onboarding", "Einarbeitung"]
    ]
  },

  'data-center-build-schedule': {
    card: "Von der Standortwahl über Shell, Strom und Kühlung bis zur Übergabe.",
    h1: "Bauzeitenplan für ein Rechenzentrum",
    metaTitle: "Rechenzentrum — Bauzeitenplan Vorlage",
    metaDesc: "Kostenlose Gantt-Vorlage für den Rechenzentrumsbau: Standort, Genehmigung, Rohbau, Strom, Kühlung, Commissioning.",
    lead: "Ein <strong>Rechenzentrumsbau</strong> ist zu einem großen Teil ein Elektroprojekt in einem Gebäude. Der Termin hängt am Netzanschluss und an den Lieferzeiten für Trafos, Generatoren und USV — nicht am Beton.",
    intro: "Sechs Phasen bis zur Übergabe an den Betrieb:",
    phases: [
      [
        "Standort und Vorplanung",
        "Fläche, Stromverfügbarkeit, Anbindung, Redundanzkonzept und Tier-Klasse. <em>Meilenstein: Netzzusage.</em>"
      ],
      [
        "Genehmigung und Design",
        "Baurecht, Emissionsschutz für Generatoren, Detailplanung Elektro und Kälte."
      ],
      [
        "Beschaffung",
        "Trafos, USV, Generatoren, Kälteanlagen — Lieferzeiten von zwölf bis vierundzwanzig Monaten sind derzeit üblich."
      ],
      ["Rohbau und Hülle", "Gründung, Tragwerk, Dach, Fassade, Brandabschnitte."],
      [
        "Technische Gebäudeausrüstung",
        "Mittelspannung, USV, Generatoren, Kälte, Brandschutz, Sicherheitstechnik, Verkabelung."
      ],
      [
        "Commissioning und Übergabe",
        "Integrated System Testing bis Level 5, Lasttests, Notfallszenarien. <em>Meilenstein: Betriebsbereit.</em>"
      ]
    ],
    callout: "Commissioning ist eine Phase, kein Abnahmetermin. Ein vollständiges Integrated System Testing über alle fünf Level — bis hin zum simulierten Netzausfall unter Last — braucht Wochen bis Monate. Wer es als letzte Woche vor der Übergabe plant, übergibt ein ungetestetes Rechenzentrum.",
    customize: [
      "Je Datenhalle eine Zeilengruppe, wenn der Bau in Bauabschnitten erfolgt.",
      "Lieferzeiten der Großkomponenten als eigene Vorgänge mit Bestelldatum sichtbar machen.",
      "Commissioning-Level 1 bis 5 als getrennte Vorgänge führen.",
      "Netzanschluss und Ersatzstromkonzept als frühe Meilensteine setzen."
    ],
    tips: [
      "<strong>Trafos und Generatoren zuerst bestellen</strong>, oft vor Baubeginn.",
      "<strong>Kühlung bestimmt die Halle</strong>, nicht umgekehrt.",
      "<strong>Planen Sie Commissioning mit Wochen</strong>, nicht mit Tagen.",
      "<strong>Der Betrieb sollte früh mitplanen</strong> — er übernimmt, was gebaut wurde."
    ],
    faq: [
      [
        "Wie lange dauert der Bau eines Rechenzentrums?",
        "Achtzehn bis sechsunddreißig Monate ab Baurecht, stark abhängig von den Lieferzeiten der elektrischen Komponenten."
      ],
      [
        "Was liegt auf dem kritischen Pfad?",
        "Netzanschluss und die Beschaffung von Trafos, USV und Generatoren — derzeit die längsten Vorlaufzeiten im Markt."
      ],
      [
        "Was ist Integrated System Testing?",
        "Die stufenweise Prüfung aller Systeme im Zusammenspiel, bis hin zum simulierten Netzausfall unter Volllast."
      ]
    ],
    related: [
      ["construction", "Bauzeitenplan"],
      ["erp-implementation-schedule", "ERP-Einführung"],
      ["refinery-turnaround-schedule", "Raffinerie-Turnaround"]
    ]
  },

  'restaurant-opening-timeline': {
    card: "Konzept, Fläche, Ausbau, Konzession, Personal und Soft Opening.",
    h1: "Zeitplan für die Restauranteröffnung",
    metaTitle: "Restauranteröffnung — Zeitplan Vorlage",
    metaDesc: "Kostenlose Gantt-Vorlage für die Restauranteröffnung: Konzept, Fläche, Ausbau, Konzession, Personal, Soft Opening.",
    lead: "Bei einer <strong>Restauranteröffnung</strong> ist die Küche selten das Problem. Der Termin hängt an der Konzession, der Lüftungsanlage und dem Personal — drei Dinge, die früh beginnen müssen und nicht mit Geld zu beschleunigen sind.",
    intro: "Sechs Phasen vom Konzept zum ersten Gast:",
    phases: [
      [
        "Konzept und Finanzierung",
        "Gastronomiekonzept, Kalkulation, Businessplan, Finanzierungszusage."
      ],
      [
        "Fläche und Vertrag",
        "Standortsuche, Nutzungsänderung prüfen, Mietvertrag. <em>Meilenstein: Vertrag unterschrieben.</em>"
      ],
      [
        "Genehmigungen",
        "Gaststättenkonzession, Hygienekonzept, Brandschutz, Außenbestuhlung, Lüftungsauflagen. <em>Längster Vorlauf.</em>"
      ],
      [
        "Ausbau und Küche",
        "Rohbau, Lüftung, Fettabscheider, Küchentechnik, Gastraum, Tresen."
      ],
      [
        "Personal und Lieferanten",
        "Küchenleitung zuerst, dann Team; Lieferanten, Getränke, Warenwirtschaft, Kassensystem."
      ],
      [
        "Soft Opening und Eröffnung",
        "Testläufe, Freundesabend, Menüfeinschliff, Presse. <em>Meilenstein: Eröffnung.</em>"
      ]
    ],
    callout: "Die Lüftungsanlage ist der Vorgang, der den Termin verschiebt. Auflagen zu Abluftführung und Geruchsbelastung tauchen spät auf, betreffen die Nachbarschaft und lassen sich baulich nur mit erheblichem Aufwand ändern. Klären Sie sie, bevor der Mietvertrag unterschrieben ist.",
    customize: [
      "Konzessionsverfahren als Vorgänger für die Eröffnung setzen, nicht parallel dazu.",
      "Probekochen und Menütests als eigene Vorgänge führen — sie brauchen mehrere Runden.",
      "Personalgewinnung früh starten; Küchenpersonal ist der knappste Faktor.",
      "Zwei bis vier Wochen Soft Opening mit reduzierter Karte einplanen."
    ],
    tips: [
      "<strong>Konzession vor Ausbau klären.</strong> Eine fertige Küche ohne Erlaubnis nützt nichts.",
      "<strong>Küchenleitung zuerst einstellen.</strong> Sie prägt Karte, Einkauf und Team.",
      "<strong>Rechnen Sie mit Bauverzug.</strong> Setzen Sie den Eröffnungstermin nicht direkt nach der Abnahme.",
      "<strong>Soft Opening ist Qualitätssicherung</strong>, keine Marketingaktion."
    ],
    faq: [
      [
        "Wie lange dauert es, ein Restaurant zu eröffnen?",
        "Sechs bis achtzehn Monate ab Konzept, abhängig von Ausbauzustand der Fläche und Genehmigungslage."
      ],
      [
        "Was verzögert am häufigsten?",
        "Genehmigungen und die Lüftungstechnik, gefolgt von der Personalgewinnung."
      ],
      [
        "Braucht es ein Soft Opening?",
        "Ja. Zwei bis vier Wochen mit reduzierter Karte finden die Fehler, bevor Bewertungen sie festschreiben."
      ]
    ],
    related: [
      ["hotel-pre-opening-critical-path", "Hoteleröffnung"],
      ["event-planning", "Eventplanung"],
      ["home-renovation", "Renovierung"]
    ]
  },

  'clinical-trial-gantt-chart': {
    card: "Protokoll, Ethik, Zentren, Rekrutierung, Auswertung und Bericht.",
    h1: "Gantt-Diagramm für eine klinische Studie",
    metaTitle: "Klinische Studie — Zeitplan Vorlage",
    metaDesc: "Kostenlose Gantt-Vorlage für klinische Studien: Protokoll, Ethikvotum, Zentrumsinitiierung, Rekrutierung, Auswertung, Bericht.",
    lead: "Der Zeitplan einer <strong>klinischen Studie</strong> steht und fällt mit der Rekrutierung. Alle anderen Phasen sind planbar; die Frage, wie schnell Patientinnen und Patienten eingeschlossen werden, ist es nicht — und sie bestimmt die Gesamtdauer.",
    intro: "Sechs Phasen von der Konzeption bis zum Studienbericht:",
    phases: [
      [
        "Konzeption und Protokoll",
        "Fragestellung, Design, Fallzahlplanung, Prüfplan und Prüferinformation."
      ],
      [
        "Regulatorik und Ethik",
        "Ethikkommission, Behördenanzeige, Versicherung, Verträge. <em>Meilenstein: Genehmigung.</em>"
      ],
      [
        "Zentrumsinitiierung",
        "Auswahl, Verträge, Schulung, Initiierungsbesuche, Systemfreigabe. <em>Meilenstein: erstes Zentrum aktiv.</em>"
      ],
      [
        "Rekrutierung und Durchführung",
        "Einschluss, Behandlung, Nachbeobachtung, Monitoring. <em>Der längste und unsicherste Abschnitt.</em>"
      ],
      [
        "Datenmanagement und Auswertung",
        "Datenbankschluss, Bereinigung, Entblindung, statistische Analyse."
      ],
      [
        "Bericht und Publikation",
        "Studienbericht, Behördenmeldung, Registereintrag, Veröffentlichung."
      ]
    ],
    callout: "Planen Sie mit der halben erwarteten Rekrutierungsgeschwindigkeit. Die Erfahrung fast aller Studienzentren ist, dass der tatsächliche Einschluss deutlich hinter der Prognose zurückbleibt — eine Verzögerung hier verschiebt jede nachfolgende Phase eins zu eins.",
    customize: [
      "Je Zentrum eine Zeile für Initiierung und Rekrutierung; sie starten gestaffelt.",
      "Ethikvotum als harten Vorgänger für jede Aktivität am Patienten setzen.",
      "Zwischenanalysen und Sicherheitsgremien als feste Termine eintragen.",
      "Nachbeobachtungszeit je Teilnehmer korrekt abbilden — sie läuft nach dem letzten Einschluss weiter."
    ],
    tips: [
      "<strong>Rekrutierung ist der kritische Pfad.</strong> Alles andere ist berechenbar.",
      "<strong>Mehr Zentren früher</strong> schlägt Nachsteuern, wenn es schon klemmt.",
      "<strong>Datenbankschluss braucht Vorlauf.</strong> Query-Bereinigung dauert Wochen.",
      "<strong>Zwischen letztem Patienten und Bericht liegen Monate</strong>, nicht Tage."
    ],
    faq: [
      [
        "Wie lange dauert eine klinische Studie?",
        "Je nach Phase und Indikation ein bis fünf Jahre. Die Rekrutierungsdauer ist der größte Einzelfaktor."
      ],
      [
        "Was verzögert klinische Studien am häufigsten?",
        "Die Rekrutierung, mit Abstand. Danach regulatorische Verfahren und Vertragsverhandlungen mit den Zentren."
      ],
      [
        "Was bedeutet Last Patient Last Visit?",
        "Der Zeitpunkt, an dem die letzte planmäßige Untersuchung stattfindet. Erst danach beginnen Datenbankschluss und Auswertung."
      ]
    ],
    related: [
      ["research", "Forschungsprojekt"],
      ["grant-proposal-gantt-chart", "Förderantrag"],
      ["phd-research-gantt-chart", "Promotionsprojekt"]
    ]
  },

  'google-sheets': {
    card: "Gantt-Diagramm in Google Sheets — importieren und gemeinsam bearbeiten.",
    h1: "Gantt-Diagramm-Vorlage für Google Sheets",
    metaTitle: "Gantt-Vorlage für Google Sheets",
    metaDesc: "Kostenlose Gantt-Vorlage für Google Sheets: als XLSX oder CSV herunterladen, importieren und im Team bearbeiten.",
    lead: "Eine <strong>Gantt-Vorlage für Google Sheets</strong> ist die richtige Wahl, wenn mehrere Personen gleichzeitig am Plan arbeiten sollen. Laden Sie die Datei als XLSX oder CSV herunter und importieren Sie sie über <em>Datei → Importieren</em>.",
    intro: "Die Vorlage enthält vier Phasen mit Aufgaben und Meilensteinen:",
    phases: [
      [
        "Aufgabentabelle",
        "Vorgang, Start, Dauer und Verantwortlichkeit — die Spalten, aus denen sich alles Weitere ergibt."
      ],
      ["Zeitachse", "Balken je Vorgang über die Wochen des Projekts."],
      [
        "Phasen",
        "Vier Gruppen, die die Aufgaben zusammenfassen und den Plan lesbar halten."
      ],
      ["Meilensteine", "Feste Punkte für Freigaben und Übergaben."]
    ],
    callout: "Google Sheets rechnet keine Abhängigkeiten. Verschiebt sich ein Vorgang, müssen Sie jedes nachfolgende Startdatum von Hand nachziehen — bei zwanzig Zeilen machbar, darüber nicht mehr. Wenn der Plan selbst rechnen soll, öffnen Sie ihn stattdessen direkt im Editor.",
    customize: [
      "Nach dem Import <em>Datei → Importieren → Hochladen</em> wählen und „Tabelle ersetzen\" bestätigen.",
      "Spaltenbreite der Zeitachse anpassen, wenn Ihr Projekt länger als die Vorlage läuft.",
      "Bedingte Formatierung für den heutigen Tag ergänzen, um den Fortschritt sichtbar zu machen.",
      "Freigabe auf „Kommentieren\" setzen für Beteiligte, die nur mitlesen sollen."
    ],
    tips: [
      "<strong>Für gemeinsames Arbeiten ist Sheets stark</strong>, für Abhängigkeiten schwach.",
      "<strong>Die native Zeitachsen-Ansicht ist kein Gantt-Diagramm</strong> — sie kennt keine Verknüpfungen.",
      "<strong>Sperren Sie die Formelspalten</strong>, wenn viele Personen Zugriff haben.",
      "<strong>Ab etwa zwanzig Vorgängen</strong> lohnt der Wechsel zu einem Werkzeug, das rechnet."
    ],
    faq: [
      [
        "Wie importiere ich die Vorlage in Google Sheets?",
        "Datei herunterladen, dann in Sheets Datei → Importieren → Hochladen wählen und „Tabelle ersetzen\" bestätigen."
      ],
      [
        "Kann Google Sheets Abhängigkeiten abbilden?",
        "Nicht automatisch. Verschiebungen müssen für jeden Nachfolger von Hand nachgetragen werden."
      ],
      [
        "Ist die Vorlage kostenlos?",
        "Ja, ohne Anmeldung und ohne Wasserzeichen — als XLSX, CSV oder PowerPoint."
      ]
    ],
    related: [
      ["excel", "Excel-Vorlage"],
      ["powerpoint", "PowerPoint-Vorlage"],
      ["simple", "Einfache Vorlage"]
    ]
  },

  'printable-gantt-chart': {
    card: "Für den Ausdruck gebaut: eine Seite, lesbare Schrift, sauberer Rand.",
    h1: "Gantt-Diagramm zum Ausdrucken",
    metaTitle: "Gantt-Diagramm zum Ausdrucken — Vorlage",
    metaDesc: "Kostenlose druckbare Gantt-Vorlage: passt auf eine Seite, lesbar in Schwarzweiß, als PDF, Excel oder PowerPoint.",
    lead: "Ein <strong>Gantt-Diagramm zum Ausdrucken</strong> hat andere Anforderungen als eines für den Bildschirm: Es muss auf eine Seite passen, in Schwarzweiß lesbar bleiben und ohne Tooltips auskommen — alles Wichtige steht auf dem Papier.",
    intro: "Die Vorlage ist auf diese vier Punkte hin gebaut:",
    phases: [
      [
        "Eine Seite",
        "Rund zwanzig Zeilen und ein Quartal Zeitachse — die Grenze, an der A4 quer noch lesbar bleibt."
      ],
      [
        "Kontrast statt Farbe",
        "Phasen unterscheiden sich durch Helligkeit und Muster, nicht nur durch Farbton."
      ],
      [
        "Beschriftete Balken",
        "Vorgangsnamen und Termine stehen am Balken, nicht in einer Legende."
      ],
      [
        "Druckränder",
        "Seitenränder und Kopfzeile so gesetzt, dass nichts abgeschnitten wird."
      ]
    ],
    callout: "Prüfen Sie die Lesbarkeit in Graustufen, bevor Sie hundert Exemplare drucken. Auf dem Bildschirm gut unterscheidbare Farben werden im Schwarzweißdruck regelmäßig zu drei fast identischen Grautönen — der häufigste Fehler bei Plänen, die an die Wand sollen.",
    customize: [
      "Auf A3 wechseln, wenn Sie mehr als etwa 25 Zeilen brauchen.",
      "Als PDF exportieren statt aus der Tabelle zu drucken — der Seitenumbruch bleibt so kontrolliert.",
      "Nicht benötigte Spalten vor dem Druck ausblenden; jede gesparte Spalte gibt Zeitachse frei.",
      "Datum der Fassung in die Kopfzeile setzen, damit an der Wand kein veralteter Plan hängt."
    ],
    tips: [
      "<strong>Querformat</strong> — eine Zeitachse braucht Breite.",
      "<strong>Mindestens 9 pt Schrift.</strong> Was am Monitor klein wirkt, ist gedruckt unleserlich.",
      "<strong>Ein Quartal je Seite.</strong> Ein ganzes Jahr auf A4 liest niemand.",
      "<strong>Setzen Sie das Fassungsdatum sichtbar</strong>, sonst hängt der Plan von letztem Monat."
    ],
    faq: [
      [
        "Wie drucke ich ein Gantt-Diagramm auf eine Seite?",
        "Querformat wählen, auf etwa zwanzig Zeilen und ein Quartal begrenzen und als PDF exportieren statt direkt aus der Tabelle zu drucken."
      ],
      [
        "Welches Papierformat eignet sich?",
        "A4 quer für bis zu etwa zwanzig Zeilen, A3 für größere Pläne oder zum Aushang."
      ],
      [
        "Ist die Vorlage in Schwarzweiß lesbar?",
        "Ja, die Phasen unterscheiden sich durch Helligkeit und Muster, nicht allein durch Farbe."
      ]
    ],
    related: [
      ["one-page-gantt-chart", "Einseitiger Plan"],
      ["simple", "Einfache Vorlage"],
      ["powerpoint", "PowerPoint-Vorlage"]
    ]
  },

  '3-week-lookahead-template': {
    card: "Rollierende Drei-Wochen-Vorschau mit Gewerken, Abnahmen und Randbedingungen.",
    h1: "3-Wochen-Vorschau — Vorlage für die Bauablaufplanung",
    metaTitle: "3-Wochen-Vorschau — Terminplan-Vorlage",
    metaDesc: "Kostenlose Vorlage für die 3-Wochen-Vorschau: Gewerke, Abnahmen, Randbedingungen und Lieferfristen je Woche. Als Excel oder online.",
    lead: `Eine kostenlose <strong>Vorlage für die 3-Wochen-Vorschau</strong>, aufgebaut wie die Montagsbesprechung auf der Baustelle tatsächlich läuft: diese Woche, nächste Woche, übernächste Woche — mit Gewerken, Abnahmen, Randbedingungen und Langläufern auf jeder davon. Laden Sie sie für die Wand im Baucontainer herunter oder öffnen Sie sie im <a href="/de/app.html">kostenlosen Editor</a> und erzeugen Sie das Zeitfenster über <strong>Ansicht ▸ Vorschau</strong> direkt aus Ihrem Rahmenterminplan, statt es jede Woche neu in eine Tabelle zu tippen.`,
    intro: "Eine Vorschau ist kein zweiter Plan. Sie ist ein Drei-Wochen-Ausschnitt des Rahmenterminplans, versehen mit den Randbedingungen und wöchentlich fortgeschrieben. Genau so ist die Vorlage gegliedert:",
    phases: [
      [
        "Woche 1 — zugesagte Arbeiten",
        "Vorgänge ohne offene Randbedingung, die in dieser Woche ausgeführt werden. Kolonnen, Material und Zugang sind bestätigt. <em>Meilenstein: Bewehrungsabnahme vor dem Betonieren.</em>"
      ],
      [
        "Woche 2 — vorbereitete Arbeiten",
        "Vorgänge, deren Randbedingungen erledigt sind, die aber noch nicht begonnen haben. Dieser Vorrat hält die Kolonnen beschäftigt, wenn Woche 1 kippt."
      ],
      [
        "Woche 3 — geplante Arbeiten",
        "Vorgänge, die noch arbeitsreif gemacht werden. Alles, was hier eine offene Randbedingung hat, ist der eigentliche Grund für die Besprechung."
      ],
      [
        "Randbedingungen und Lieferfristen",
        "Freigaben, Planlieferungen, Materiallieferungen und Genehmigungen, die vor dem Vorgang liegen müssen, den sie sperren. Sie laufen quer über alle drei Wochen und nicht innerhalb einer einzelnen."
      ],
      [
        "Abnahmen und Haltepunkte",
        "Prüfungen Dritter, die den Bauablauf stoppen, wenn sie ausbleiben — Bewehrung, Leitungen im Erdreich, Tragwerk. Jede davon ist ein Meilenstein, kein Vorgang."
      ],
      [
        "Wöchentliche Fortschreibung",
        "Der Plan rollt jeden Montag eine Woche weiter. Fertigstellungsgrade werden eingetragen, das Fenster verschiebt sich, die Liste der Randbedingungen wird erneut durchgegangen."
      ]
    ],
    callout: `Sinn der Vorschau ist das Ausräumen von Randbedingungen, nicht das Berichten. Wenn ein Vorgang in Woche 3 auf eine ausstehende Freigabe oder eine nicht gelieferte Lieferung wartet, ist das am Montag das Einzige, worüber zu reden sich lohnt — alles Übrige ist bereits arbeitsreif. Unser <a href="/de/blog/3-week-lookahead-schedule.html">Leitfaden zur 3-Wochen-Vorschau</a> zeigt, wie Sie die Besprechung anhand des Plans führen.`,
    customize: [
      "Legen Sie den Startmontag selbst fest — die Ansicht Vorschau verankert am Montag und lässt Fenster von einer bis acht Wochen zu.",
      "Führen Sie bei gewerkeorientierten Baustellen eine Zeile je Kolonne oder Nachunternehmer statt je Vorgang; die Poliere müssen ihre eigene Zeile sehen.",
      "Bilden Sie Randbedingungen als echte Balken mit echter Dauer ab. Eine Freigabe als Notiz ohne Dauer wird schlicht übersehen.",
      "Setzen Sie jede Abnahme als Meilenstein, damit kein nachfolgender Vorgang über einen Haltepunkt hinweg geplant wird.",
      "Rollen Sie den Plan jeden Montag eine Woche weiter, statt ihn neu zu bauen — der Rahmenterminplan ist die Quelle, die Vorschau nur die Sicht darauf."
    ],
    tips: [
      "<strong>Erzeugen statt abtippen.</strong> Wird die Vorschau getrennt vom Rahmenterminplan gepflegt, laufen beide binnen eines Monats auseinander. Öffnen Sie den Rahmenterminplan im Editor und schneiden Sie das Fenster über <strong>Ansicht ▸ Vorschau</strong> heraus.",
      "<strong>Woche 1 enthält keine offenen Randbedingungen.</strong> Tut sie es doch, ist der Vorgang nicht zugesagt, sondern erhofft — und gehört in Woche 2.",
      "<strong>Messen Sie die Zusageerfüllung.</strong> Wie viele der Zusagen aus Woche 1 tatsächlich fertig wurden, ist die nützlichste Kennzahl, die eine Vorschau liefert.",
      "<strong>Langläufer gehören Monate früher auf den Plan.</strong> Stahlbau, Schaltanlagen und Aufzüge kümmert Ihr Drei-Wochen-Fenster nicht; sie müssen darin zum Liefertermin auftauchen und lange vorher bestellt sein.",
      "<strong>Drucken Sie den Plan in der Größe, die die Containerwand verlangt.</strong> Eine Vorschau, die man aus einem Meter Entfernung nicht lesen kann, ändert niemandes Montag."
    ],
    faq: [
      [
        "Was ist eine 3-Wochen-Vorschau?",
        `Ein rollierender Kurzfristplan, der die nächsten drei Wochen aus dem Rahmenterminplan herausschneidet und um Randbedingungen und Abnahmen ergänzt. Er wird wöchentlich fortgeschrieben, meist in der Montagsbesprechung. Unser <a href="/de/blog/3-week-lookahead-schedule.html">Leitfaden zur 3-Wochen-Vorschau</a> erklärt das Zusammenspiel mit der Taktplanung.`
      ],
      [
        "Kann gantts.app die Vorschau aus meinem Plan erzeugen?",
        `Ja. Öffnen Sie Ihren Terminplan im <a href="/de/app.html">kostenlosen Editor</a> und wählen Sie <strong>Ansicht ▸ Vorschau</strong>. Die Ansicht verankert am Montag und lässt Fenster von einer bis acht Wochen zu — die Vorschau bleibt damit eine Sicht auf den laufenden Plan und wird nicht zur zweiten Fassung davon.`
      ],
      [
        "Warum drei Wochen und nicht vier oder sechs?",
        "Drei Wochen reichen, um die meisten Randbedingungen auszuräumen, und sind kurz genug, dass die Termine noch belastbar sind. Baustellen mit langen Lieferfristen fahren oft sechs Wochen; die Ansicht Vorschau erlaubt bis zu acht — nehmen Sie, was Ihr Vorlauf braucht."
      ],
      [
        "Was steht in der Vorschau, das nicht im Rahmenterminplan steht?",
        "Die Randbedingungen: Freigaben, Planabfragen, Lieferungen, Genehmigungen, Abnahmen und die Verfügbarkeit der Kolonnen. Der Rahmenterminplan trägt die Arbeit, die Vorschau trägt die Gründe, warum sie ausfallen könnte."
      ],
      [
        "Ist die Vorlage für die 3-Wochen-Vorschau kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online — ohne Konto und ohne Wasserzeichen."
      ]
    ]
  },

  's-curve-template': {
    card: "Plan gegen Ist als S-Kurve: Basisplan setzen, PV, EV, SV und SPI ablesen.",
    h1: "S-Kurven-Vorlage (Plan gegen Ist)",
    metaTitle: "S-Kurve — Vorlage Plan gegen Ist",
    metaDesc: "Kostenlose S-Kurven-Vorlage für Plan- und Ist-Fortschritt: Basisplan setzen und PV, EV, SV sowie SPI im S-Kurven-Panel ablesen.",
    lead: `Eine kostenlose <strong>S-Kurven-Vorlage</strong> — ein Projekt, das so geschnitten ist, dass die Kurve aus Plan und Ist überhaupt etwas aussagt: langsamer Anlauf, schwere Mitte, langer Auslauf. Laden Sie sie für den Fortschrittsbericht herunter oder öffnen Sie sie im <a href="/de/app.html">kostenlosen Editor</a>, setzen Sie einen Basisplan und lesen Sie im Panel <strong>📈 S-Kurve</strong> Plankosten, Fertigstellungswert, Terminabweichung und SPI direkt aus Ihren eigenen Terminen und Fertigstellungsgraden ab.`,
    intro: "Eine S-Kurve ist nichts weiter als der kumulierte Fortschritt über die Zeit. S-förmig wird sie, weil Projekte langsam anlaufen, in der Mitte heiß laufen und über die Inbetriebnahme auslaufen. Die Vorlage liefert einen Terminplan mit genau dieser Form:",
    phases: [
      [
        "Start und Basisplan",
        "Projektauftrag, Leistungsumfang, Budget und der Basisplan selbst — der flache Fuß der Kurve, auf dem viel Kalender vergeht und wenig Wert entsteht. <em>Meilenstein: Basisplan gesetzt.</em>"
      ],
      [
        "Planung und Engineering",
        "Vorentwurf bis Ausführungsplanung. Der Fortschritt beginnt zu laufen, die Ausgaben eilen dem gelieferten Wert aber noch voraus."
      ],
      [
        "Beschaffung",
        "Bestellungen, Verfolgung der Langläufer, Wareneingänge. Die Mittelbindung steigt hier steil, der physische Fortschritt nicht."
      ],
      [
        "Ausführung",
        "Die steile Mitte der Kurve, in der der größte Teil des Fertigstellungswerts entsteht und in der sich ein wöchentlicher Blick auf den SPI lohnt."
      ],
      [
        "Test und Inbetriebnahme",
        "Der Auslauf. Die Restleistung ist wertmäßig klein, dauert aber hartnäckig lange — deshalb flachen Kurven ab, bevor sie enden. <em>Meilenstein: Inbetriebnahme abgeschlossen.</em>"
      ],
      [
        "Übergabe und Abschluss",
        "Dokumentation, Restpunkte, Schlussrechnung und Lessons Learned — die letzten Prozente, die immer länger dauern als vorgesehen."
      ]
    ],
    callout: `Eine einzelne Kurve sagt nichts. Der Wert liegt im Abstand zwischen Plan- und Ist-Kurve: Liegt die Ist-Kurve darunter, sind Sie im Verzug, und der senkrechte Abstand ist Ihre Terminabweichung in Wertgrößen, während der waagerechte Abstand grob Ihrem Zeitverzug entspricht. Unser <a href="/de/blog/s-curve-project-management.html">Leitfaden zur S-Kurve</a> arbeitet durch, wie Sie PV, EV, SV und SPI ablesen.`,
    customize: [
      "Setzen Sie den Basisplan, sobald der Plan abgestimmt ist — ohne ihn gibt es keine Plankurve, und das S-Kurven-Panel hat keinen Vergleichsmaßstab.",
      "Halten Sie die Fertigstellungsgrade ehrlich und aktuell; die Ist-Kurve ist nur so gut wie die letzte Rückmeldung.",
      "Gewichten Sie die mittleren Phasen deutlich. Bei gleichmäßig verteilten Dauern wird die Kurve zur Geraden, was meist heißt, dass der Plan zu grob ist.",
      "Hinterlegen Sie je Vorgang Kosten oder Personenstunden, wenn Sie eine kostenbewertete statt einer dauerbewerteten Kurve wollen.",
      "Setzen Sie einen neuen Basisplan nur bei einer formalen Änderung. Neu zu basieren, um Abweichungen verschwinden zu lassen, kostet das Projekt sein einziges Frühwarnsystem."
    ],
    tips: [
      "<strong>Lesen Sie den SPI, nicht die Form.</strong> Ein SPI unter 1,0 heißt, dass bis heute weniger Wert erbracht wurde als geplant. Der Trend über vier oder fünf Stichtage sagt weit mehr als ein einzelner Wert.",
      "<strong>Rechnen Sie mit langsamem Anlauf.</strong> Eine Kurve, die ab Tag eins steil steigt, misst fast immer Ausgaben oder Aufwand statt gelieferten Fortschritt.",
      "<strong>Achten Sie auf den Knick.</strong> Kurven, die schon bei 85 bis 90 Prozent abflachen, sind das klassische Bild eines Projekts voller fast fertiger Arbeit.",
      "<strong>Schreiben Sie in festem Takt fort.</strong> Wöchentlich oder vierzehntägig, immer am selben Tag — unregelmäßige Stichtage machen die Kurve unlesbar.",
      "<strong>Zeigen Sie Kurve und Balkenplan zusammen.</strong> Die Kurve sagt, dass Sie im Verzug sind; der Balkenplan sagt, welche Vorgänge ihn verursacht haben. Beides gehört in den Bericht."
    ],
    faq: [
      [
        "Was ist eine S-Kurve im Projektmanagement?",
        `Die Darstellung des kumulierten geplanten gegen den kumulierten tatsächlichen Fortschritt über die Zeit. S-förmig ist sie, weil die Arbeit langsam anläuft, in der Mitte ihren Höhepunkt hat und am Ende ausläuft. Unser <a href="/de/blog/s-curve-project-management.html">Leitfaden zur S-Kurve</a> erklärt, wie Sie eine aufbauen und lesen.`
      ],
      [
        "Zeichnet gantts.app die S-Kurve selbst?",
        `Ja. Setzen Sie einen Basisplan und öffnen Sie im <a href="/de/app.html">kostenlosen Editor</a> das Panel <strong>📈 S-Kurve</strong>. Es berechnet Plankosten, Fertigstellungswert, Terminabweichung und den Termin-Leistungsindex aus Ihren Vorgängen und rechnet bei jeder Änderung des Fertigstellungsgrads neu.`
      ],
      [
        "Wofür stehen PV, EV, SV und SPI?",
        "PV ist die Leistung, die bis heute geplant war, EV die tatsächlich erbrachte Leistung, SV die Differenz EV minus PV und SPI der Quotient EV geteilt durch PV. Über 1,0 heißt vor Plan, unter 1,0 heißt im Verzug."
      ],
      [
        "Warum sieht meine Kurve aus wie eine Gerade?",
        "Meist, weil alle Vorgänge ähnlich lang und ähnlich schwer sind und der Fortschritt deshalb gleichmäßig anfällt. Gliedern Sie die mittleren Phasen feiner oder hinterlegen Sie Kosten beziehungsweise Personenstunden — dann erscheint die S-Form."
      ],
      [
        "Brauche ich dafür einen Basisplan?",
        "Für Plan gegen Ist ja. Ohne Basisplan sehen Sie zwar den kumulierten Ist-Fortschritt, haben aber keinen Vergleichsmaßstab und keinen SPI."
      ],
      [
        "Ist die S-Kurven-Vorlage kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung."
      ]
    ]
  },

  'cloud-migration-project-plan': {
    card: "Analyse, Landing Zone, Migrationswellen, Cutover, Hypercare und Rückbau.",
    h1: "Projektplan für die Cloud-Migration",
    metaTitle: "Cloud-Migration — Projektplan-Vorlage",
    metaDesc: "Kostenloser Projektplan für die Cloud-Migration: Analyse, Landing Zone, Migrationswellen, Cutover, Hypercare und Rückbau. Excel oder online.",
    lead: "Eine kostenlose <strong>Vorlage für den Cloud-Migrationsplan</strong>, die den Umzug von Anwendungen und Workloads durchgehend abbildet — Bestandsaufnahme und Anwendungsbewertung, Aufbau der Landing Zone, Wellenplanung, Pilot- und Produktionswellen, Cutover, Hypercare und der Rückbau dessen, was zurückbleibt. Laden Sie sie für die Lenkungsausschussunterlage herunter oder verknüpfen Sie die Wellen online, damit ein Verzug in der einen nicht stillschweigend die nächste auffrisst.",
    intro: "Eine Cloud-Migration ist kein einzelnes Projekt, sondern ein Fundamentbau plus eine sich wiederholende Welle. Die Vorlage trennt beides, damit die Landing Zone fertig ist, bevor die Wellen darauf aufsetzen:",
    phases: [
      [
        "Bestandsaufnahme und Bewertung",
        "Anwendungsinventar, Abhängigkeitsanalyse, Geschäftskritikalität und je Workload eine Entscheidung nach den 7 R — Rehost, Replatform, Refactor, Repurchase, Relocate, Retire, Retain. <em>Meilenstein: Zuordnung der Anwendungen abgestimmt.</em>"
      ],
      [
        "Landing Zone und Fundament",
        "Konten und Subscriptions, Netz und Anbindung, Identitäten, Sicherheitsleitplanken, Protokollierung und das Kostenmodell. Alles Nachfolgende hängt daran. <em>Meilenstein: Landing Zone produktiv.</em>"
      ],
      [
        "Wellenplanung und Pilot",
        "Bündelung der Anwendungen zu Wellen nach Abhängigkeit statt nach Zuständigkeit, dann der Nachweis des Runbooks an einer risikoarmen Pilotwelle."
      ],
      [
        "Migrationswellen",
        "Wiederkehrende Zyklen aus Aufbau, Migration, Test und Cutover je Welle. Das Muster bleibt gleich, was sich ändert, ist das Risikoprofil."
      ],
      [
        "Cutover und Hypercare",
        "Produktive Umstellungen, Umschalten von DNS und Datenverkehr, Rückfallfenster und die verstärkte Betreuung nach jeder Welle. <em>Meilenstein: Produktiv-Cutover abgeschlossen.</em>"
      ],
      [
        "Rückbau und Optimierung",
        "Abschalten der Altumgebung, Ausstieg aus Rechenzentrum oder Hosting-Vertrag, danach Right-Sizing und reservierte Kapazitäten. Hier wird der Business Case tatsächlich eingelöst."
      ]
    ],
    callout: "Der Business Case ist erst eingelöst, wenn das Alte abgeschaltet ist. Migrationen enden regelmäßig nach dem letzten Cutover — beide Umgebungen laufen weiter und die Einsparung existiert nur auf dem Papier. Setzen Sie den Rückbau als datierten Vorgang mit Verantwortlichem auf den Plan und stellen Sie das Vertragsende des Hostings als festen Meilenstein daneben.",
    customize: [
      "Legen Sie zuerst das Ende des Rechenzentrums- oder Hosting-Vertrags fest und rechnen Sie rückwärts; dieser Termin ist meist vertraglich und nicht verhandelbar.",
      "Ergänzen Sie nach der Bestandsaufnahme eine Zeile je Anwendung, gruppiert unter der Welle, die sie trägt.",
      "Duplizieren Sie die Wellenphase für jede weitere Welle; der innere Aufbau bleibt identisch.",
      "Nehmen Sie Refactor-Kandidaten ganz aus der Wellenplanung heraus — das sind Entwicklungsprojekte, keine Migrationen, und sie zerstören den Takt der Wellen.",
      "Setzen Sie Landing Zone produktiv, Pilotwelle abgeschlossen, jeden Produktiv-Cutover und den Rückbau als Meilensteine."
    ],
    tips: [
      "<strong>Keine Welle vor fertiger Landing Zone.</strong> In ein Fundament zu migrieren, das sich noch ändert, heißt zweimal zu migrieren — die häufigste Quelle von Nacharbeit in solchen Programmen.",
      "<strong>Bündeln Sie nach Abhängigkeit, nicht nach Abteilung.</strong> Anwendungen, die miteinander sprechen, sollten gemeinsam ziehen, sonst bezahlen Sie die Latenz zwischen zwei Umgebungen, solange sie getrennt sind.",
      "<strong>Fahren Sie eine echte Pilotwelle.</strong> Sie soll das Runbook belegen und die Überraschungen zutage fördern; wählen Sie also risikoarme, aber wirklich repräsentative Anwendungen — nicht die drei einfachsten.",
      "<strong>Kalkulieren Sie den Parallelbetrieb.</strong> Beide Umgebungen laufen für die Dauer der Migration gleichzeitig; diese Doppelkosten sind real und gehören vom ersten Tag an in den Business Case.",
      "<strong>Halten Sie bei jedem Cutover ein Rückfallfenster offen.</strong> Ein Cutover ohne dokumentierten und geprobten Rückfall ist eine Einbahnstraße, die man betritt, ohne sich dafür entschieden zu haben."
    ],
    faq: [
      [
        "Wie lange dauert eine Cloud-Migration?",
        "Für eine mittelgroße Landschaft üblicherweise 9 bis 24 Monate, bestimmt vor allem durch die Zahl der Anwendungen, die Abhängigkeitsdichte und den Anteil an Refactoring. Die Vorlage nutzt einen Plan von rund fünfzehn Monaten, den Sie stauchen oder strecken können."
      ],
      [
        "Was sind die 7 R der Cloud-Migration?",
        "Rehost, Replatform, Refactor, Repurchase, Relocate, Retire und Retain — die Handlungsoptionen, die jeder Anwendung in der Bewertung zugeordnet werden. Erst wenn sie feststehen, ist eine Wellenplanung überhaupt möglich."
      ],
      [
        "Wie sollten die Migrationswellen geschnitten sein?",
        "Zuerst nach Abhängigkeitsgruppen, dann nach Risiko. Anwendungen, die Daten teilen oder einander aufrufen, gehören in dieselbe Welle, und die Pilotwelle sollte risikoarm, aber repräsentativ genug für den Nachweis des Runbooks sein."
      ],
      [
        "Deckt die Vorlage den Rückbau der Altumgebung ab?",
        "Ja — als vollwertige Phase, denn dort landen die Einsparungen des Business Case, und genau diese Phase wird nach dem letzten Cutover am häufigsten liegen gelassen."
      ],
      [
        "Ist die Vorlage für die Cloud-Migration kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Konto."
      ]
    ]
  },

  'new-product-development-plan': {
    card: "Stage-Gate von der Idee über Prototyp und Werkzeugbau bis zur Serienfreigabe.",
    h1: "Projektplan für die Produktentwicklung",
    metaTitle: "Produktentwicklung — Projektplan-Vorlage",
    metaDesc: "Kostenloser Produktentwicklungsplan: Konzept, Machbarkeit, Konstruktion, Prototypen, Validierung, Werkzeugbau, Nullserie und Serienfreigabe.",
    lead: `Eine kostenlose <strong>Vorlage für den Produktentwicklungsplan</strong>, aufgebaut als Stage-Gate-Programm: Konzept, Machbarkeit, Konstruktion, Prototypenbau, Validierung und Erprobung, Werkzeugbau, Nullserie und Übergabe an den Markteintritt. Das ist die technische Kette, an deren Ende etwas Verkäufliches steht; für die Marktseite desselben Vorhabens siehe den <a href="/de/templates/product-launch.html">Produkteinführungsplan</a>, für den längeren Horizont die <a href="/de/templates/product-roadmap.html">Produkt-Roadmap</a>.`,
    intro: "Entwicklungspläne scheitern an den Gates, nicht an den Vorgängen. Die Vorlage trennt die Stufen sauber, damit ein Gate eine Entscheidung mit Nachweisen dahinter ist und nicht bloß ein Termin, der still verstreicht:",
    phases: [
      [
        "Konzept",
        "Chancenbeschreibung, Kundenbedarf und Anforderungen, Konzeptskizzen, erster Business Case und das Konzept-Gate. <em>Gate 1: Konzept freigegeben.</em>"
      ],
      [
        "Machbarkeit",
        "Technische Machbarkeitsuntersuchungen, Make-or-Buy-Analyse, regulatorische Vorprüfung, Kostenmodell und Risikobewertung. <em>Gate 2: Machbarkeit bestätigt.</em>"
      ],
      [
        "Konstruktion",
        "System- und Detailkonstruktion, fertigungs- und montagegerechte Gestaltung, Stückliste, Lieferantenanbindung und die Konstruktionsprüfung. <em>Gate 3: Konstruktionsstand eingefroren.</em>"
      ],
      [
        "Prototypenbau",
        "Alpha-Aufbau, technische Bewertung, Konstruktionsschleifen und der Beta-Aufbau, der in die Validierung geht."
      ],
      [
        "Validierung und Erprobung",
        "Konstruktionsverifikation, Umwelt- und Dauererprobung, Zulassungs- und Konformitätsverfahren sowie Anwendertests. <em>Gate 4: Konstruktion validiert.</em>"
      ],
      [
        "Werkzeugbau und Industrialisierung",
        "Werkzeugkonstruktion und -herstellung, Erstmusterprüfung, Prozessentwicklung, Vorrichtungen und Lieferantenfreigabe."
      ],
      [
        "Nullserie und Übergabe",
        "Nullserienlauf, Serienteilfreigabe, Hochlaufplan, Dokumentationspaket und Übergabe an Produktion und Markteinführung. <em>Gate 5: Serienfreigabe.</em>"
      ]
    ],
    callout: "Das Einfrieren des Konstruktionsstands ist der teure Meilenstein. Jede Änderung danach kostet Werkzeuggeld, und jede Änderung nach der Erstmusterprüfung kostet es zweimal. Dieses Gate zu einem echten Gate zu machen — mit Erprobungsnachweisen statt einem optimistischen Termin —, ist die eine Entscheidung, die ein Entwicklungsbudget zusammenhält.",
    customize: [
      "Setzen Sie den geforderten Termin der Serienfreigabe und rechnen Sie rückwärts; die Lieferzeit der Werkzeuge entscheidet meist, ob der Plan überhaupt aufgeht.",
      "Bestellen Sie Langläufer-Werkzeuge gegen echte Angebotslieferzeiten und legen Sie den Bestellvorgang vor das Einfrieren, wenn Sie dieses Risiko bewusst eingehen.",
      "Ergänzen Sie eine Zeile je Zulassungsstelle, wenn Ihr Produkt mehrere Zulassungen braucht — sie laufen parallel und jede hat ihre eigene Warteschlange.",
      "Erweitern Sie den Prototypenbau auf so viele Aufbauten, wie Sie wirklich brauchen; zwei sind für alles mit beweglichen Teilen optimistisch.",
      "Halten Sie die Lieferantenfreigabe sichtbar — ein freigegebenes Teil von einem nicht freigegebenen Lieferanten ist kein serienfähiges Teil.",
      "Setzen Sie alle fünf Gates als Meilensteine, damit der Lenkungsausschuss Entscheidungen sieht und nicht Fortschrittsbalken."
    ],
    tips: [
      "<strong>Werkzeugbau und Konstruktionsänderungen nicht überlappen.</strong> Stahl zu schneiden, bevor der Konstruktionsstand eingefroren ist, verbrennt die Reserve eines Entwicklungsprogramms schneller als alles andere.",
      "<strong>Beginnen Sie früh mit der Zulassung.</strong> Prüfhauswarteschlangen und Behördenverfahren sind Fremddauern, die sich durch mehr Einsatz nicht verkürzen lassen — buchen Sie Termine, sobald ein prüffähiger Aufbau existiert.",
      "<strong>Geben Sie der Validierung einen eigenen Balken.</strong> Prüfzeit ist echte Kalenderzeit; Dauererprobungen laufen über Wochen, gleichgültig wie viele Ingenieure daran sitzen.",
      "<strong>Binden Sie Lieferanten während der Konstruktion ein, nicht danach.</strong> Fertigungshinweise, die nach dem Einfrieren eintreffen, werden zum Änderungsantrag statt zur Konstruktionsvorgabe.",
      "<strong>Trennen Sie diesen Plan vom Markteinführungsplan.</strong> Marketingtermine hängen an der Serienfreigabe, nicht an einer Schätzung aus der Konzeptphase.",
      "<strong>Setzen Sie den Basisplan beim Einfrieren.</strong> Messen Sie die Abweichung gegen den eingefrorenen Stand, damit späte Änderungen als Terminkosten sichtbar werden statt lautlos aufgesogen zu werden."
    ],
    faq: [
      [
        "Worin unterscheidet sich diese Vorlage vom Produkteinführungsplan?",
        `Diese hier ist die technische Kette bis zur Serienfreigabe — Konzept bis Werkzeugbau und Nullserie. Der <a href="/de/templates/product-launch.html">Produkteinführungsplan</a> setzt ungefähr dort an, wo diese endet, und behandelt Positionierung, Preis, Kanalvorbereitung und die Markteinführungskampagne.`
      ],
      [
        "Wie lange dauert eine Produktentwicklung?",
        "Das hängt an der Komplexität: Ein einfaches Consumer-Zubehör läuft in 6 bis 9 Monaten, ein reguliertes oder werkzeugintensives Produkt üblicherweise 18 bis 36. Die Vorlage nutzt ein Programm über achtzehn Monate, das Sie stauchen oder strecken können."
      ],
      [
        "Welche Gates enthält die Vorlage?",
        "Konzept freigegeben, Machbarkeit bestätigt, Konstruktionsstand eingefroren, Konstruktion validiert und Serienfreigabe. Jedes ist ein Meilenstein mit den nachweisliefernden Vorgängen als Vorgänger."
      ],
      [
        "Passt die Vorlage auch für ein Softwareprodukt?",
        `Teilweise — Konzept, Machbarkeit, Design und Validierung lassen sich gut übertragen, Werkzeugbau und Nullserie entfallen dagegen. Für Software passt der <a href="/de/templates/software-development.html">Projektplan für Softwareentwicklung</a> besser.`
      ],
      [
        "Ist die Vorlage für die Produktentwicklung kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Konto."
      ]
    ]
  },

  'retail-store-opening-timeline': {
    card: "Von Standortsuche und Mietvertrag über Ladenbau bis zur Eröffnung.",
    h1: "Zeitplan für die Ladeneröffnung",
    metaTitle: "Ladeneröffnung — Zeitplan-Vorlage",
    metaDesc: "Kostenlose Vorlage für die Ladeneröffnung: Mietvertrag, Ladenbau, Genehmigungen, Kasse, Ware, Personal, Soft Opening und Eröffnung.",
    lead: "Eine kostenlose <strong>Vorlage für den Zeitplan einer Ladeneröffnung</strong>, von der Standortsuche bis zur Eröffnungsfeier — Mietvertrag und Zustimmung des Vermieters, Ladenplanung und Ladenbau, Genehmigungen und Abnahmen, Kassensystem und IT, Erstorder und Warenpräsentation, Personalsuche und Schulung, dann Soft Opening und Eröffnungswochenende.",
    intro: "Eine Ladeneröffnung ist ein Bauprojekt, ein Einstellungsprojekt und ein Einkaufszyklus gleichzeitig — und alle drei zielen auf einen Termin, den der Vermieter längst beworben hat. Die Vorlage führt sie als parallele Stränge:",
    phases: [
      [
        "Standort und Mietvertrag",
        "Einzugsgebiets- und Passantenanalyse, Standortauswahl, Umsatzprognose, Mietvertragsverhandlung und die Ausbaubedingungen des Vermieters. <em>Meilenstein: Mietvertrag unterschrieben.</em>"
      ],
      [
        "Planung und Zustimmungen",
        "Grundriss nach Markenstandard, Gestaltung von Fassade und Beschilderung, Zustimmung von Vermieter und Centermanagement sowie die Baugenehmigung."
      ],
      [
        "Ladenbau",
        "Übergabe der Fläche durch den Vermieter, Ladenbau, Boden und Beleuchtung, Möblierung und Regale, Montage von Fassade und Beschilderung, dann die Restpunkte."
      ],
      [
        "Genehmigungen, IT und Sicherung",
        "Gewerbeanmeldung, Brandschutz- und Barrierefreiheitsabnahme, Kassensystem und Zahlungsterminals, Netzwerk, Videoüberwachung und Warensicherung. <em>Meilenstein: Verkaufsfreigabe erteilt.</em>"
      ],
      [
        "Ware und Warenpräsentation",
        "Erstorder gegen die Lieferzeiten der Lieferanten, Wareneingang und Einrichtung des Lagers, Aufbau der Platzierungspläne und die Umsetzung der Warenpräsentation."
      ],
      [
        "Personal, Schulung und Eröffnung",
        "Zuerst die Filialleitung, dann das Verkaufsteam, Produkt- und Kassenschulung, die Soft-Opening-Verkaufstage und die offizielle Eröffnung. <em>Meilenstein: Eröffnung.</em>"
      ]
    ],
    callout: "Die Erstorder ist der Vorgang, den man nicht beschleunigen kann. Ladenbauteile lassen sich per Express besorgen und Personal in einer Woche schulen, aber eine zu spät bestellte Erstlieferung kommt zu spät — und ein Laden, der mit Lücken an der Wand öffnet, verbringt sein Eröffnungswochenende mit Entschuldigungen. Bestellen Sie gegen echte Lieferzeiten und behandeln Sie den Liefertermin als harten Vorgänger der Warenpräsentation.",
    customize: [
      "Verankern Sie den Plan am Übergabetermin des Vermieters — dann beginnt Ihre Ausbaufrist und häufig auch die Miete.",
      "Ergänzen Sie eine Zeile je Möblierungspaket, wenn die Ladeneinrichtung zentral geliefert und nicht vor Ort gebaut wird.",
      "Verlängern Sie die Genehmigungsphase, wenn Sie Reglementiertes verkaufen — Alkohol, Apothekenware, Tabak und Waffen haben jeweils eigene Fristen.",
      "Trennen Sie Platzierungsplan und Flächenumsetzung; das sind unterschiedliche Arbeiten von unterschiedlichen Leuten.",
      "Halten Sie das Soft Opening als echte Verkaufstage mit echten Kundinnen und Kunden, nicht als Rundgang für die Belegschaft."
    ],
    tips: [
      "<strong>Lesen Sie die Ausbaubedingungen des Vermieters vor der Planung.</strong> Zustimmungen des Centermanagements, zulässige Arbeitszeiten und Anlieferregeln stellen den Terminplan um, und das erst bei der Montage zu merken kostet Wochen.",
      "<strong>Bestellen Sie Fassade und Beschilderung früh.</strong> Individuelle Beschilderung hat lange Lieferzeiten und wird zuletzt montiert — sie liegt damit direkt auf dem kritischen Pfad zur Eröffnung.",
      "<strong>Stellen Sie die Filialleitung deutlich vor dem Team ein.</strong> Sie verantwortet Personalsuche, Schulung und die Freigabe der Erstorder; die Besetzung ist damit eine Abhängigkeit und keine Kopfzahl.",
      "<strong>Testen Sie die Kasse mit echten Vorgängen.</strong> Zahlungsterminals, Preisdaten und Bestandsführung brauchen einen echten Verkaufstag als Nachweis — genau dafür gibt es das Soft Opening.",
      "<strong>Schützen Sie das Zeitfenster für die Warenpräsentation.</strong> Sie wird als Letztes zusammengedrückt und von den Kundinnen und Kunden als Erstes gesehen; unter ein paar Tagen sieht man das auf der Fläche."
    ],
    faq: [
      [
        "Wie lange dauert die Eröffnung eines Ladens?",
        "Von der Standortsuche bis zur Eröffnung üblicherweise 4 bis 9 Monate für eine Fläche im Center oder in der Innenstadt, wobei Mietvertragsverhandlung und Ladenbau den größten Anteil haben. Die Vorlage nutzt rund sieben Monate."
      ],
      [
        "Was verzögert eine Ladeneröffnung am häufigsten?",
        "Zustimmungen von Vermieter und Centermanagement, Genehmigungen und zu späte Beschilderung. Alle drei sind Fremddauern — deshalb führt die Vorlage Zustimmungen und Genehmigungen als eigene Stränge und nicht innerhalb des Ladenbaus."
      ],
      [
        "Wann sollte die Erstorder platziert werden?",
        "Früh genug, dass die Lieferung vor Beginn der Warenpräsentation eintrifft, gerechnet rückwärts ab den zugesagten Lieferzeiten. Die Vorlage verknüpft die Präsentation mit dem Wareneingang, damit die Abhängigkeit sichtbar bleibt."
      ],
      [
        "Passt die Vorlage auch für einen Pop-up-Store oder eine Shop-in-Shop-Fläche?",
        "Ja. Lassen Sie bei einer Fläche innerhalb eines fremden Hauses die Zeilen für Genehmigung und Fassade weg und stauchen Sie den Ladenbau — Genehmigungen, IT, Ware und Personal bleiben gleich."
      ],
      [
        "Ist die Vorlage für die Ladeneröffnung kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung."
      ]
    ]
  },

  'film-production-schedule': {
    card: "Stoffentwicklung, Vorbereitung, Dreh, Postproduktion und Auslieferung.",
    h1: "Produktionszeitplan für einen Film",
    metaTitle: "Filmproduktion — Zeitplan-Vorlage",
    metaDesc: "Kostenloser Produktionszeitplan für Filme: Stoffentwicklung, Vorbereitung, Dreharbeiten, Postproduktion, Ton, Farbe und Auslieferung.",
    lead: "Eine kostenlose <strong>Vorlage für den Produktionszeitplan eines Films</strong> über das ganze Vorhaben — Stoffentwicklung und Finanzierung, Vorbereitung und Besetzung, die Dreharbeiten selbst, die Postproduktion bis zum Schnittabschluss, Ton und Farbkorrektur sowie das Auslieferungspaket, das der Verleih tatsächlich verlangt. Laden Sie sie für die Finanzierungsunterlage herunter oder verknüpfen Sie die Abhängigkeiten online, die darüber entscheiden, ob Ihr Auslieferungstermin hält.",
    intro: "Jedes Department arbeitet auf die Drehtermine hin, und alles nach dem Dreh arbeitet auf den Auslieferungstermin hin. Die Vorlage setzt beide Fixpunkte auf den Plan und lässt sich den Rest darum herum ordnen:",
    phases: [
      [
        "Stoffentwicklung",
        "Drehbuchfassungen, Rechte und Optionen, Kalkulation und Drehplanauszug, Finanzierung und die Produktionsentscheidung. <em>Meilenstein: Produktionsfreigabe.</em>"
      ],
      [
        "Vorbereitung",
        "Besetzung, Departmentleitungen, Motive und Drehgenehmigungen, Szenenbild und Bauten, Kostüm, Kamera- und Technikproben sowie der Drehplan selbst."
      ],
      [
        "Dreharbeiten",
        "Der Dreh, gegliedert in Motiv- und Studioblöcke, mit dem Drehschluss als unverrückbarem Zentrum der gesamten Planung. <em>Meilenstein: Drehschluss.</em>"
      ],
      [
        "Postproduktion — Bild",
        "Musterbetrachtung und Rohschnitt während des Drehs, Editor-Fassung, Regiefassung, Anmerkungen und Schnittabschluss. <em>Meilenstein: Schnittabschluss.</em>"
      ],
      [
        "Postproduktion — Ton und Bildfinish",
        "Nachsynchronisation, Geräusche, Sounddesign, Musik, Mischung, Lieferung der VFX-Einstellungen, Farbkorrektur und Conforming."
      ],
      [
        "Auslieferung und Auswertung",
        "DCP und Masterfassungen, technische Prüfung, Untertitel und Fassungen, Werbematerial, Festivaleinreichungen und das Auslieferungspaket. <em>Meilenstein: Auslieferung abgenommen.</em>"
      ]
    ],
    callout: "Die Dreharbeiten sind die einzige Phase, die sich nicht verlängern lässt, ohne pro Tag echtes Geld zu kosten. Alles davor existiert, um den Dreh möglich zu machen, und alles danach erbt, was der Dreh hergegeben hat. Legen Sie also zuerst die Drehtermine fest und prüfen Sie dann, ob die Vorbereitung genug Vorlauf davor hat — nicht umgekehrt.",
    customize: [
      "Setzen Sie Drehbeginn und Drehschluss zuerst und lassen Sie die Vorbereitung rückwärts davon rechnen.",
      "Führen Sie eine Zeile je Drehblock oder Motiv, damit die Umzugstage sichtbar werden; ungeplante Motivwechsel fressen Drehtage.",
      "Verlängern Sie die VFX-Zeilen und beginnen Sie sie früher, wenn Sie nennenswert viele Einstellungen haben — VFX läuft oft vom Dreh bis zur Endmischung.",
      "Setzen Sie Einreichfristen für Festivals als Meilensteine; das sind feste Termine, die den ganzen Postproduktionsplan nach vorne ziehen.",
      "Halten Sie Reservetage innerhalb der Dreharbeiten statt am Ende, wo sie von einem Verzug nicht mehr zu unterscheiden sind."
    ],
    tips: [
      "<strong>Beginnen Sie mit Muster und Rohschnitt schon während des Drehs.</strong> Wenn parallel geschnitten wird, existiert am Drehschluss bereits eine Rohfassung, statt dass sie dort erst beginnt.",
      "<strong>Schließen Sie den Schnitt ab, bevor Sie Ton und Farbe binden.</strong> Nach begonnener Mischung noch umzuschneiden ist der teuerste vermeidbare Fehler der Postproduktion.",
      "<strong>Behandeln Sie Motive und Genehmigungen als Langläufer.</strong> Drehgenehmigungen, Straßensperrungen und Motivverträge haben Fremddauern, die sich durch mehr Einsatz nicht verkürzen.",
      "<strong>Besetzen Sie die Hauptrollen vor dem endgültigen Drehplan.</strong> Die Verfügbarkeit der Darstellerinnen und Darsteller schreibt den Drehplan um; sie ist damit eine Abhängigkeit und kein Parallelvorgang.",
      "<strong>Lesen Sie die Lieferbedingungen am Anfang, nicht am Ende.</strong> Auslieferungslisten sind lang, präzise und nicht verhandelbar — sie erst im letzten Monat zu entdecken kostet Wochen."
    ],
    faq: [
      [
        "Wie lange läuft ein Produktionszeitplan für einen Film?",
        "Bei einem unabhängigen Spielfilm üblicherweise 12 bis 18 Monate von der Produktionsfreigabe bis zur Auslieferung — grob zwei bis drei Monate Vorbereitung, vier bis acht Wochen Dreh und sechs bis neun Monate Postproduktion und Auslieferung. Die Vorlage liegt in diesem Bereich."
      ],
      [
        "Welche Phasen hat eine Filmproduktion?",
        "Stoffentwicklung, Vorbereitung, Dreharbeiten, Postproduktion und Auslieferung. Die Vorlage teilt die Postproduktion in Bild sowie Ton und Bildfinish, weil der Schnittabschluss die Grenze zwischen beiden ist."
      ],
      [
        "Wie viel Vorbereitungszeit brauche ich?",
        "Genug, um vor dem ersten Drehtag zu besetzen, Motive zu finden, Genehmigungen zu holen und zu bauen. Acht bis zwölf Wochen sind bei einem überschaubaren Spielfilm üblich; Kürzungen zeigen sich später als verlorene Drehtage und nicht als Ersparnis."
      ],
      [
        "Sind VFX enthalten?",
        "Ja — die Lieferung der VFX-Einstellungen liegt im Bildfinish und beginnt während der Postproduktion. Bei hoher Einstellungszahl ziehen Sie diese Zeilen nach vorne, damit die Dienstleisterarbeit den Schnitt überlappt."
      ],
      [
        "Ist die Vorlage für die Filmproduktion kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online — ohne Konto und ohne Wasserzeichen."
      ]
    ]
  },

  'bridge-construction-schedule': {
    card: "Baugrund, Genehmigungen, Gründung, Unterbau, Überbau und Verkehrsfreigabe.",
    h1: "Bauzeitenplan für den Brückenbau",
    metaTitle: "Brückenbau — Bauzeitenplan-Vorlage",
    metaDesc: "Kostenloser Bauzeitenplan für den Brückenbau: Baugrund, Genehmigungen, Gründung, Unterbau, Überbau, Belag, Probebelastung, Freigabe.",
    lead: "Eine kostenlose <strong>Vorlage für den Bauzeitenplan einer Brücke</strong> entlang eines echten Ingenieurbauvorhabens — Baugrunduntersuchung und Planung, öffentlich-rechtliche Genehmigungen, Gründung und Pfähle, Unterbau, Überbaumontage, Belag und Kappen, Probebelastung und Verkehrsfreigabe. Laden Sie sie für ein Angebot oder den Bericht an den Bauherrn herunter oder verknüpfen Sie online die Sperrpausen und witterungsabhängigen Arbeiten, die den Termin tatsächlich bestimmen.",
    intro: "Ein Brückenbauvorhaben wird von Dingen bestimmt, die Ihnen nicht gehören: dem Fluss, der Straße darunter, dem Wetter und der Genehmigungsbehörde. Die Vorlage gibt jedem davon einen sichtbaren Platz, statt es in einem Bauabschnittsbalken zu vergraben:",
    phases: [
      [
        "Vermessung und Baugrunduntersuchung",
        "Topografische und hydrografische Aufnahme, Bohrungen und geotechnische Auswertung, Leitungsauskünfte und die umweltfachliche Bestandsaufnahme. <em>Meilenstein: Baugrundgutachten vorgelegt.</em>"
      ],
      [
        "Planung und Genehmigungen",
        "Vorentwurf und Ausführungsplanung, Planung der Behelfsbauwerke und temporären Konstruktionen, Prüfung und Zustimmung durch Straßen- oder Bahnbaulastträger, wasserrechtliche und naturschutzrechtliche Erlaubnisse. <em>Meilenstein: Zustimmung im Einzelfall erteilt.</em>"
      ],
      [
        "Baustelleneinrichtung und Sperrpausen",
        "Einrichtung, Baustraßen und Zuwegung, Leitungsumlegungen, Baugrubenverbau oder Arbeitsinsel im Gewässer sowie die beantragten Gleissperrungen beziehungsweise Vollsperrungen der Straße."
      ],
      [
        "Gründung",
        "Bohrpfähle an Widerlagern und Pfeilern, Pfahlprüfungen, Pfahlkopfplatten und Fundamentbeton — der Abschnitt mit dem größten Baugrund- und Hochwasserrisiko."
      ],
      [
        "Unterbau",
        "Widerlager und Flügelwände, Pfeiler und Pfeilerkopf, Lagersockel und Einbau der Brückenlager. <em>Meilenstein: Unterbau fertiggestellt.</em>"
      ],
      [
        "Überbau",
        "Trägerfertigung und Anlieferung, Einhub per Kran oder Taktschiebeverfahren innerhalb der Sperrpause, Schalung und Bewehrung der Fahrbahnplatte sowie die Betonage."
      ],
      [
        "Belag, Prüfung und Freigabe",
        "Abdichtung, Fahrbahnbelag, Geländer und Schutzeinrichtungen, Entwässerung, Probebelastung, Restpunkte und Freigabe für den Verkehr. <em>Meilenstein: Verkehrsfreigabe.</em>"
      ]
    ],
    callout: "Die Sperrpause ist der Terminplan. Der Einhub über eine befahrene Straße, eine Bahnstrecke oder eine Wasserstraße findet in aller Regel innerhalb einer Monate vorher beantragten Sperrung statt, die sich nicht verschieben lässt. Setzen Sie Antrag, Zusage und das Zeitfenster selbst als drei getrennte Vorgänge auf den Plan — alles davor existiert nur, um dieses Wochenende möglich zu machen.",
    customize: [
      "Tragen Sie zuerst die bestätigten Sperrpausen ein und rechnen Sie rückwärts; fast jeder andere Termin eines Brückenbauvorhabens ordnet sich ihnen unter.",
      "Ergänzen Sie eine Zeile je Pfeiler und Widerlager, sobald die Bauabfolge des Unterbaus feststeht, damit Bohrpfähle und Betonagen einzeln verfolgt werden.",
      "Kennzeichnen Sie witterungsabhängige Arbeiten — Betonagen der Fahrbahnplatte, Abdichtung und Belagseinbau haben Temperatur- und Niederschlagsgrenzen, die auf den Plan gehören.",
      "Ziehen Sie den Balken für die behördliche Zustimmung auf die tatsächliche Prüfdauer Ihrer Behörde, einschließlich der Schleife für die Erwiderung auf die Prüfbemerkungen.",
      "Führen Sie die Planung der Behelfsbauwerke als eigenen Vorgang; Traggerüst, Verbau und Einhubkonzept müssen geprüft und freigegeben sein, bevor das Bauwerk selbst entsteht.",
      "Legen Sie Hochwasserzeiten oder Laichschonzeiten als gesperrte Balken ein, wenn Sie im Gewässer arbeiten."
    ],
    tips: [
      "<strong>Beantragen Sie Sperrpausen, bevor die Planung fertig ist.</strong> Vorlaufzeiten für Straßenvollsperrungen und Gleissperrungen liegen im Bereich von Monaten, und die Fenster gehen an den, der zuerst gebucht hat.",
      "<strong>Behandeln Sie Behelfsbauwerke wie das Bauwerk selbst.</strong> Traggerüst, Verbau und Einhubsysteme brauchen Planung, Prüfung und Freigabe — und sie liegen direkt auf dem kritischen Pfad zum Überbau.",
      "<strong>Planen Sie keine Betonage, die Sie weder heizen noch kühlen können.</strong> Große Betonagen der Fahrbahnplatte, die in den tiefen Winter rutschen, werden regelmäßig am Morgen abgesagt; legen Sie sie in eine machbare Jahreszeit.",
      "<strong>Rechnen Sie mit dem Fluss, nicht mit dem Mittelwert.</strong> Arbeiten im Gewässer gehören um die historischen Hochwasserzeiten herum geplant, mit Puffer für einen verlorenen Monat statt für eine verlorene Woche.",
      "<strong>Lassen Sie echte Zeit für die Probebelastung.</strong> Belastungsversuch, Messtechnik und die anschließende Bescheinigung sind ein Tor zur Freigabe und keine Sichtkontrolle am Ende.",
      "<strong>Setzen Sie den Basisplan mit der behördlichen Zustimmung.</strong> Alles davor ist Schätzung; danach verfolgen Sie die Abweichung, damit Änderungen der Behörde sichtbar bleiben."
    ],
    faq: [
      [
        "Wie lange dauert der Bau einer Brücke?",
        "Ein kleines einfeldriges Straßenbauwerk läuft üblicherweise 9 bis 18 Monate ab Baubeginn, eine große Flussquerung mehrere Jahre. Die Vorlage nutzt ein Programm von rund zwei Jahren, das Sie über den Freigabetermin stauchen oder strecken."
      ],
      [
        "Was verzögert Brückenbauvorhaben am häufigsten?",
        "Baugrundverhältnisse, die erst beim Bohren auftauchen, Prüfschleifen mit dem Baulastträger und verpasste Sperrpausen. Alle drei laufen hier als eigene Stränge, damit das Risiko sichtbar ist, bevor es zuschlägt."
      ],
      [
        "Wie stelle ich eine Sperrpause im Plan dar?",
        "Als drei Vorgänge: Antrag, Zusage und das Zeitfenster selbst — und der Einhub hängt vom Zeitfenster ab. So bedroht ein Verzug weiter vorne sichtbar einen Termin, den Sie nicht verschieben können."
      ],
      [
        "Passt die Vorlage auch für eine Fußgängerbrücke oder einen Durchlass?",
        "Ja. Behalten Sie Baugrund, Genehmigungen, Gründung und Überbau bei und kürzen Sie die Pfeilerzeilen — die Abfolge bleibt im kleineren Maßstab dieselbe."
      ],
      [
        "Ist die Vorlage für den Brückenbau kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online — ohne Konto und ohne Wasserzeichen."
      ]
    ]
  },

  'trade-show-planning-timeline': {
    card: "Countdown zur Messe: Standfläche, Standbau, Logistik, Messetage, Leads.",
    h1: "Zeitplan für die Messeplanung",
    metaTitle: "Messeplanung — Zeitplan-Vorlage",
    metaDesc: "Kostenlose Vorlage für die Messeplanung: Standfläche, Standbau, Logistik, Vorab-Marketing, Personal, Messetage und Leadnachverfolgung.",
    lead: `Eine kostenlose <strong>Vorlage für den Zeitplan der Messeplanung</strong> als Countdown zur Messe — Flächenauswahl und Vertrag, Standgestaltung und Standbau, Fristen für Spedition und Standmontage, Vorab-Marketing und Terminvereinbarung, Personalplanung und Briefing, die Messetage selbst und die Leadnachverfolgung, die darüber entscheidet, ob sich das Ganze gerechnet hat. Für Veranstaltungen ohne Ausstellung siehe die allgemeine <a href="/de/templates/event-planning.html">Vorlage zur Veranstaltungsplanung</a>.`,
    intro: "Ausstellen ist ein Countdown, kein Projekt. Drei oder vier Termine sind wirklich unverrückbar und alles andere ordnet sich darum herum — deshalb zeigt die Vorlage sie als Meilensteine und nicht als Vorgänge:",
    phases: [
      [
        "Flächenauswahl und Vertrag",
        "Messeauswahl, Budgetfreigabe, Sichtung des Hallenplans, Flächenauswahl zum Stichtag der Platzvergabe und Vertragsunterzeichnung. <em>Meilenstein: Fläche vertraglich gesichert.</em>"
      ],
      [
        "Standgestaltung und Standbau",
        "Briefing, Entwurf, Auswahl des Standbauers, Genehmigung des Entwurfs durch die Messegesellschaft, Fertigung, Grafik und Probeaufbau."
      ],
      [
        "Messeleistungen und Logistik",
        "Bestellung von Strom, Abhängungen, Internet und Mobiliar zum Frühbuchertarif, Speditionsauftrag, Anlieferfrist und das zugewiesene Aufbaufenster. <em>Meilenstein: Anlieferfrist.</em>"
      ],
      [
        "Vorab-Marketing",
        "Zielkundenliste, Einladungskampagne, Terminvereinbarung, Presse- und Vortragsslots sowie Social Media und Website in den letzten Wochen."
      ],
      [
        "Personal und Schulung",
        "Standbesetzungsplan, Reise und Übernachtung, Produkt- und Argumentationsbriefing, Schulung zur Leaderfassung und die Generalprobe der Vorführung."
      ],
      [
        "Messetage",
        "Aufbau, Standeröffnung, Gespräche und Vorführungen, tägliche Leadbesprechung, Abbau und Rückversand. <em>Meilenstein: Messebeginn.</em>"
      ],
      [
        "Leadnachverfolgung und Auswertung",
        "Leaderfassung in Tagen statt Wochen, gestufte Nachfassaktionen, Zuordnung zur Pipeline, Kostenauswertung und die Entscheidung über die nächste Messe."
      ]
    ],
    callout: "Drei Termine auf diesem Plan lassen sich nicht verschieben: der Stichtag der Flächenauswahl, der über Ihren Platz auf der nächsten Messe entscheidet, die Frist für den Frühbuchertarif, nach der jede Leistung mehr kostet, und die Anlieferfrist, nach der Ihr Stand zu spät oder gar nicht ankommt. Alles Übrige ist verhandelbar. Markieren Sie diese drei und lassen Sie den Rest der Planung sich darum herum ordnen.",
    customize: [
      "Setzen Sie den Messebeginn und lassen Sie den gesamten Plan rückwärts davon zählen — so funktioniert Messeplanung tatsächlich.",
      "Ersetzen Sie die allgemeinen Fristen durch die echten Termine aus dem Ausstellerhandbuch, sobald es veröffentlicht ist.",
      "Ergänzen Sie eine Zeile je Sendung, wenn Stand, Exponate und Drucksachen getrennt versandt werden; sie haben unterschiedliche Fristen.",
      "Verlängern Sie den Balken für das Vorab-Marketing, wenn Sie auf vereinbarte Termine setzen; die Kalender füllen sich sechs bis acht Wochen vorher, nicht in der Woche davor.",
      "Ergänzen Sie bei internationalen Messen einen Vorgang für Zoll und Carnet — er hat eine eigene Vorlaufzeit und kann einen Stand an der Grenze festsetzen.",
      "Halten Sie die Nachverfolgung mit datierten Vorgängen im Plan; Leads verlieren schnell an Wert, und ein undatierter Nachfassplan ist keiner."
    ],
    tips: [
      "<strong>Buchen Sie das nächste Jahr auf der laufenden Messe.</strong> Die Flächenvergabe findet meist vor Ort statt und richtet sich nach Teilnahmedauer und Umsatz — deshalb steht sie in dieser Vorlage vorn und nicht am Ende.",
      "<strong>Bestellen Sie zum Frühbuchertarif.</strong> Strom, Abhängungen und Internet nach der Frist bestellt kosten für exakt dieselbe Leistung regelmäßig deutlich mehr.",
      "<strong>Halten Sie die Anlieferfrist mit Reserve ein.</strong> Verspätete Sendungen landen hinten in der Warteschlange des Verkehrsleitsystems, und Ihr Aufbaufenster wartet nicht auf sie.",
      "<strong>Lassen Sie den Standentwurf früh von der Messegesellschaft genehmigen.</strong> Bauhöhe, Abhängungen und zweigeschossige Stände brauchen eine Genehmigung und werden vor Ort abgelehnt, wenn sie nie eingereicht wurden.",
      "<strong>Proben Sie die Vorführung vor der Abreise.</strong> Erst auf dem Messestand zu merken, dass die Demo eine Bandbreite braucht, die Sie nicht bestellt haben, ist ein Problem ohne Lösung vor Ort.",
      "<strong>Fassen Sie innerhalb von 48 Stunden nach.</strong> Die Geschwindigkeit der Nachverfolgung ist der größte Hebel für den Messeerfolg — planen Sie sie vor der Abreise ein, nicht nach der Rückkehr."
    ],
    faq: [
      [
        "Wie früh sollte die Messeplanung beginnen?",
        "Sechs bis neun Monate vor einer großen Messe, und früher, wenn Sie eine gute Lage in der Halle wollen — die Fläche für die nächste Ausgabe wird oft schon auf der laufenden vergeben. Diese Vorlage läuft rund acht Monate bis zum Messebeginn."
      ],
      [
        "Worin unterscheidet sich die Vorlage von der Veranstaltungsplanung?",
        `Diese hier ist auf das Ausstellen zugeschnitten: Flächenverträge, Standbau, Speditions- und Anlieferfristen, Frühbucherbestellungen und Leadnachverfolgung. Die <a href="/de/templates/event-planning.html">Vorlage zur Veranstaltungsplanung</a> deckt die eigene Veranstaltung ab — Location, Programm, Referenten und Gäste.`
      ],
      [
        "Welche Termine sind beim Ausstellen unverrückbar?",
        "Die Flächenauswahl, die Frist für den Frühbuchertarif aus dem Ausstellerhandbuch, die Speditions- und Anlieferfrist sowie Ihr zugewiesenes Aufbaufenster. Alle vier erscheinen hier als Meilensteine."
      ],
      [
        "Passt die Vorlage auch für einen kleinen Kongressstand?",
        "Ja. Behalten Sie den Aufbau bei und kürzen Sie die Zeilen zum Standbau, wenn Sie einen Systemstand oder nur einen Tisch nutzen."
      ],
      [
        "Ist die Vorlage für die Messeplanung kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung."
      ]
    ]
  },

  'recruitment-hiring-plan': {
    card: "Eine Stelle von der Freigabe über Interviews und Angebot bis zum Eintritt.",
    h1: "Vorlage für den Recruiting- und Einstellungsplan",
    metaTitle: "Recruiting — Vorlage Einstellungsplan",
    metaDesc: "Kostenloser Recruiting- und Einstellungsplan: Stellenfreigabe, Sourcing, Screening, Interviews, Auswahl, Angebot, Kündigungsfrist, Eintritt.",
    lead: `Eine kostenlose <strong>Vorlage für den Recruiting- und Einstellungsplan</strong> für eine einzelne Stelle von Anfang bis Ende — Stellenbeschreibung und Freigabe der Stelle, Sourcing, Screening, die Interviewrunden, Auswahl und Referenzen, Angebot und Verhandlung, die Kündigungsfrist der Kandidatin oder des Kandidaten und der Eintrittstermin. Sie endet genau dort, wo das <a href="/de/templates/employee-onboarding.html">Onboarding neuer Mitarbeitender</a> beginnt.`,
    intro: "Die meisten Einstellungspläne unterschätzen dieselben zwei Dinge: wie lange die Freigabe am Anfang dauert und wie lange die Kündigungsfrist am Ende. Die Vorlage gibt beiden einen echten Balken, damit der Eintrittstermin ehrlich ist:",
    phases: [
      [
        "Stellenprofil und Freigabe",
        "Begründung, Stellenbeschreibung, Einstufung und Gehaltsband, Freigabe der Stelle und Eröffnung der Vakanz. <em>Meilenstein: Stelle freigegeben.</em>"
      ],
      [
        "Sourcing",
        "Stellenanzeige, Aufruf zu Empfehlungen, Direktansprache, Briefing des Personaldienstleisters falls genutzt, und der Aufbau der Pipeline auf eine Zielzahl an Kandidaturen."
      ],
      [
        "Screening",
        "Sichtung der Bewerbungen, Gespräche mit dem Recruiting, Gespräche mit der Fachabteilung und die Entscheidung über die Shortlist. <em>Meilenstein: Shortlist abgestimmt.</em>"
      ],
      [
        "Interviewrunden",
        "Strukturierte Interviews im Panel, fachliche Fallaufgabe, Terminkoordination und die Auswertungsrunden."
      ],
      [
        "Auswahl und Entscheidung",
        "Arbeitsprobe oder Fallbesprechung, Abschlusspanel, Zusammenführung der Bewertungsbögen, Referenzen und Hintergrundprüfungen. <em>Meilenstein: Einstellungsentscheidung.</em>"
      ],
      [
        "Angebot und Verhandlung",
        "Freigabe der Vergütung, mündliches Angebot, Vertragsentwurf, Verhandlung und Unterschrift. <em>Meilenstein: Angebot angenommen.</em>"
      ],
      [
        "Kündigungsfrist und Vorbereitung",
        "Kündigung beim bisherigen Arbeitgeber, Kontakthalten bis zum Eintritt, Ausstattung und Zugänge, dann der erste Tag. <em>Meilenstein: Eintrittstermin.</em>"
      ]
    ],
    callout: "Die Kündigungsfrist ist keine Formalie — sie ist oft der längste einzelne Balken im Plan. Bei einer Führungsposition mit drei Monaten Frist bringt die heute freigegebene Stelle erst in fünf oder sechs Monaten einen arbeitenden Menschen. Pläne, die bei „Angebot angenommen“ enden, versprechen die Kapazität regelmäßig ein Quartal zu früh.",
    customize: [
      "Rechnen Sie rückwärts ab dem Zeitpunkt, an dem die Person produktiv sein soll, nicht ab dem Zeitpunkt der Unterschrift.",
      "Setzen Sie den Balken für die Kündigungsfrist auf das reale Maß für Rolle und Land — ein Monat, drei Monate und sechs Monate ergeben völlig unterschiedliche Pläne.",
      "Duplizieren Sie die Phasen von Sourcing bis Angebot je Stelle, wenn Sie ein Team aufbauen, und staffeln Sie sie gegen die Kapazität der Interviewenden.",
      "Ergänzen Sie einen eigenen Strang mit Meilensteinen, wenn Sie mit Personalberatung arbeiten; Briefing- und Shortlist-Termine sind vertraglich vereinbart.",
      "Nehmen Sie Visum und Arbeitserlaubnis als eigene Vorgänge auf, wo relevant — sie können die Kündigungsfrist übersteigen.",
      "Behalten Sie die Vorgänge zum Kontakthalten im Plan. Zwischen Unterschrift und Eintritt werden zugesagte Kandidaturen abgeworben."
    ],
    tips: [
      "<strong>Holen Sie die Freigabe vor der Ausschreibung.</strong> Eine Vakanz, die ohne Budgetfreigabe bis ins Abschlusspanel läuft, verbrennt die Zeit der Kandidatin und Ihre Glaubwürdigkeit.",
      "<strong>Blocken Sie die Zeit des Interviewpanels im Voraus.</strong> Die Terminfindung, nicht die Entscheidung, ist in den meisten Verfahren die größte Verzögerungsquelle.",
      "<strong>Straffen Sie die Interviewrunden, nicht das Screening.</strong> Gute Kandidaturen laufen meist in mehreren Verfahren; ein Prozess über drei Wochen verliert sie an den, der schneller war.",
      "<strong>Starten Sie Referenzen vor der endgültigen Entscheidung, wo möglich.</strong> Sie kosten regelmäßig eine Woche Hinterhertelefonieren und liegen genau zwischen Entscheidung und Angebot.",
      "<strong>Planen Sie das Angebot als Verhandlung mit Dauer ein.</strong> Ein paar Tage für Gegenangebot und Rückmeldung sind realistischer als die Annahme einer Zusage am selben Tag.",
      "<strong>Übergeben Sie bei Unterschrift ans Onboarding, nicht am ersten Tag.</strong> Ausstattung, Konten und der Plan für die erste Woche brauchen Vorlauf innerhalb der Kündigungsfrist."
    ],
    faq: [
      [
        "Wie lange dauert es, jemanden einzustellen?",
        "Von der freigegebenen Stelle bis zur Unterschrift üblicherweise 6 bis 12 Wochen, zuzüglich der Kündigungsfrist. Diese Vorlage läuft rund fünf Monate von der Begründung bis zum Eintritt, was für eine Stelle mit ein bis drei Monaten Frist realistisch ist."
      ],
      [
        "Wie passt die Vorlage zum Onboarding?",
        `Dieser Plan endet am Eintrittstermin; die <a href="/de/templates/employee-onboarding.html">Onboarding-Vorlage</a> setzt am ersten Tag an und läuft über die ersten neunzig Tage. Nacheinander ergeben beide das vollständige Bild.`
      ],
      [
        "Was macht ein Einstellungsverfahren am häufigsten langsam?",
        "Die Terminfindung für Interviews und langsame interne Entscheidungen, nicht das Sourcing. Deshalb stehen Interviewrunden und Auswertung hier als getrennte Vorgänge und nicht als ein Block."
      ],
      [
        "Kann ich damit mehrere Stellen gleichzeitig planen?",
        "Ja — duplizieren Sie die Phasen von Sourcing bis Angebot je Stelle und staffeln Sie die Interviewrunden, damit dasselbe Panel nicht zweimal in derselben Woche gebucht ist."
      ],
      [
        "Ist die Vorlage für den Einstellungsplan kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Konto."
      ]
    ]
  },

  'internal-audit-plan': {
    card: "Jahresplanung, Prüfungshandlungen, Feststellungen, Bericht und Nachverfolgung.",
    h1: "Prüfungsplan der Internen Revision",
    metaTitle: "Interne Revision — Prüfungsplan-Vorlage",
    metaDesc: "Kostenlose Vorlage für den Prüfungsplan der Internen Revision: Risikoanalyse, Prüfungshandlungen, Feststellungen, Bericht, Nachverfolgung.",
    lead: "Eine kostenlose <strong>Vorlage für den Prüfungsplan der Internen Revision</strong> über einen vollständigen Zyklus — jährliche Risikoanalyse und Prüfungsuniversum, Genehmigung des Plans durch den Prüfungsausschuss, Prüfungsplanung und Abgrenzung der Einzelprüfung, Prüfungshandlungen vor Ort, Feststellungen und Stellungnahme der Geschäftsführung, Berichtserteilung und Nachverfolgung der Maßnahmen. Laden Sie sie für die Ausschussunterlage herunter oder legen Sie online mehrere Prüfungen über ein Jahr nebeneinander.",
    intro: "Ein Prüfungsplan hat zwei Ebenen: das Jahresprogramm und die einzelne Prüfung darin. Die Vorlage zeigt beide, damit der Ausschuss die Abdeckung sieht und das Team die Arbeit:",
    phases: [
      [
        "Jahresplanung",
        "Risikoanalyse, Aktualisierung des Prüfungsuniversums, Gespräche mit den Verantwortlichen, Ressourcen- und Budgetplanung sowie der Entwurf des Jahresplans. <em>Meilenstein: Plan vom Ausschuss genehmigt.</em>"
      ],
      [
        "Prüfungsplanung der Einzelprüfung",
        "Ankündigung, Vorbereitung und Unterlagenanforderung, Prozessaufnahmen, Risiko-Kontroll-Matrix und die abgestimmte Auftragsbeschreibung."
      ],
      [
        "Prüfungshandlungen",
        "Beurteilung der Kontrollkonzeption, Stichprobenauswahl, Funktionsprüfungen und aussagebezogene Prüfungshandlungen, Nachweiserhebung und Arbeitspapiere."
      ],
      [
        "Feststellungen und Abstimmung",
        "Entwurf der Feststellungen, Abstimmung der Sachverhalte mit den Prozessverantwortlichen, Einstufung und Priorisierung sowie die Schlussbesprechung. <em>Meilenstein: Schlussbesprechung geführt.</em>"
      ],
      [
        "Stellungnahme der Geschäftsführung",
        "Vereinbarung der Maßnahmen, benannte Verantwortliche und Umsetzungstermine sowie die Eskalation dessen, was die Geschäftsführung als Restrisiko bewusst hinnimmt."
      ],
      [
        "Berichterstattung",
        "Berichtsentwurf, Qualitätsdurchsicht, Erteilung des endgültigen Berichts und Vortrag im Prüfungsausschuss. <em>Meilenstein: Bericht erteilt.</em>"
      ],
      [
        "Nachverfolgung",
        "Verfolgung der Umsetzung gegen die vereinbarten Termine, Nachprüfung der als erledigt gemeldeten Maßnahmen und Meldung überfälliger Punkte an den Ausschuss."
      ]
    ],
    callout: "In der Nachverfolgung entsteht der Nutzen der Revision — und genau dort hören Prüfungspläne meist auf. Ein erteilter Bericht ohne datierte Nachprüfung ist eine Meinung; ein verfolgter Umsetzungstermin mit einer Nachprüfung im Plan ist eine Kontrolle, die sich tatsächlich verändert hat. Lassen Sie die Balken für die Nachverfolgung im Plan und hinterlegen Sie Kapazität dafür.",
    customize: [
      "Legen Sie mehrere Prüfungen über das Jahr nebeneinander, um zu sehen, ob Ihr Team für alle tatsächlich verfügbar ist.",
      "Tragen Sie zuerst die Sitzungstermine des Prüfungsausschusses ein — sie liegen fest, und jeder Berichtstermin rechnet von einem davon rückwärts.",
      "Ergänzen Sie eine Zeile je Prüfungsobjekt, wenn Sie dem Ausschuss die Abdeckung des Prüfungsuniversums berichten.",
      "Verlängern Sie die Prüfungshandlungen bei Prüfungen mit Vor-Ort-Terminen oder Datenauszügen; beides dauert länger als Schreibtischprüfung.",
      "Sehen Sie eine Reserve für Sonderprüfungen vor; ungeplante Aufträge sind normal, und ungeplante Aufträge ohne Reserve zerlegen den Plan.",
      "Führen Sie den Umsetzungstermin jeder Feststellung nach Berichtserteilung als eigenen Vorgang statt in einer Tabelle daneben."
    ],
    tips: [
      "<strong>Bauen Sie den Plan auf Risiko und prüfen Sie danach die Abdeckung.</strong> Ein risikoorientierter Plan, der einen ganzen Bereich drei Jahre lang stillschweigend auslässt, ist die Feststellung, die die Abschlussprüfer über Sie treffen werden.",
      "<strong>Kündigen Sie früh an und vereinbaren Sie die Prozessaufnahmen.</strong> Die Verfügbarkeit der Geprüften ist der häufigste Grund für überzogene Prüfungshandlungen — und vollständig vorhersehbar.",
      "<strong>Stimmen Sie Sachverhalte ab, bevor Sie Feststellungen einstufen.</strong> Ein Sachverhaltsfehler, der nach der Einstufung auffällt, kostet den Bericht seine Autorität und eine ganze Durchsichtsschleife.",
      "<strong>Lassen Sie die Stellungnahme nicht ausufern.</strong> Geben Sie ihr einen begrenzten Balken mit Frist; offene Rückmeldefristen sind der Weg, wie Berichte Ausschusstermine verpassen.",
      "<strong>Nachprüfen statt nachfragen.</strong> Die Verifikation einer erledigten Maßnahme braucht Nachweise, und die brauchen Zeit im Plan — nicht nur eine Bestätigung per E-Mail.",
      "<strong>Setzen Sie den Basisplan mit der Plangenehmigung.</strong> Verfolgen Sie die Abweichung gegen den genehmigten Plan, damit ungeplante Arbeit als Verdrängung sichtbar wird und nicht lautlos aufgesogen."
    ],
    faq: [
      [
        "Was gehört in einen Prüfungsplan der Internen Revision?",
        "Eine Risikoanalyse und ein Prüfungsuniversum, eine nach Risiko geordnete Liste der Prüfungen mit Ressourcen und je Prüfung Planung, Prüfungshandlungen, Feststellungen, Stellungnahme, Bericht und Nachverfolgung. Alle sieben Phasen sind hinterlegt."
      ],
      [
        "Wie lange dauert eine einzelne Prüfung?",
        "Von der Ankündigung bis zum erteilten Bericht üblicherweise 6 bis 12 Wochen für eine mittelgroße Prüfung, mit einer Nachverfolgung, die danach über Monate läuft. Die Prüfung in dieser Vorlage läuft rund vier Monate."
      ],
      [
        "Wie oft sollte der Jahresplan aktualisiert werden?",
        "Die meisten Revisionsfunktionen lassen den Plan jährlich genehmigen und sehen ihn mindestens halbjährlich erneut durch, da sich Risikoprofile und ungeplante Aufträge beide bewegen. Eine Reserve im Plan macht diese Durchsicht überhaupt handhabbar."
      ],
      [
        "Passt die Vorlage auch für eine externe Prüfung oder ein Zertifizierungsaudit?",
        "Teilweise. Planung, Prüfungshandlungen, Feststellungen und Nachverfolgung lassen sich gut übertragen; die Jahresplanung würden Sie durch den Auditzyklus der Zertifizierungsstelle ersetzen."
      ],
      [
        "Ist die Vorlage für den Prüfungsplan kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung."
      ]
    ]
  },

  'hospital-department-opening': {
    card: "Businessplan, Ausbau, Medizintechnik, Hygienefreigabe, Inbetriebnahme.",
    h1: "Eröffnungsplan für eine Krankenhausabteilung",
    metaTitle: "Krankenhaus — Eröffnungsplan Abteilung",
    metaDesc: "Kostenloser Eröffnungsplan für eine Krankenhausabteilung: Planung, Ausbau, Medizintechnik, Hygienefreigabe, Personal, erste Patientin.",
    lead: "Eine kostenlose <strong>Vorlage für den Eröffnungsplan einer Krankenhausabteilung</strong> über die gesamte Inbetriebnahme einer neuen Fachabteilung oder Station — Wirtschaftlichkeitsberechnung und Investitionsfreigabe, Planung nach den einschlägigen Bau- und Technikanforderungen, Rohbau und Ausbau, Beschaffung der Medizintechnik, Freigabe durch die Krankenhaushygiene, Personalgewinnung und Kompetenznachweis, Datenschutz und Dokumentation sowie der Anlauf bis zur ersten Patientin.",
    intro: "Die Eröffnung eines klinischen Bereichs ist kein Bauvorhaben mit einem medizinischen Anhängsel am Ende. Sie ist eine Folge von Freigabetoren, von denen jedes einzelne die Tür am geplanten Tag verschlossen halten kann. Die Vorlage gibt jedem Tor eine eigene sichtbare Zeile:",
    phases: [
      [
        "Bedarf und Investitionsfreigabe",
        "Versorgungsbedarf und Leistungskonzept, Leistungs- und Personalmodellierung, Investitionsantrag sowie Beschluss von Geschäftsführung und Kostenträgern. <em>Meilenstein: Investition freigegeben.</em>"
      ],
      [
        "Planung und Abweichungen",
        "Raum- und Funktionsprogramm, Ausführungsplanung nach den geltenden Bau- und Technikanforderungen, dokumentierte Abweichungen dort, wo der Bestand die Norm nicht erfüllen kann, sowie die bauordnungsrechtlichen Genehmigungen. <em>Meilenstein: Planung eingefroren.</em>"
      ],
      [
        "Rohbau und Ausbau",
        "Vorabmaßnahmen und Auslagerung des Betriebs, Rohbau und Technische Gebäudeausrüstung, medizinische Gasversorgung, Raumlufttechnik und Isolierzimmer, Ausbau und Übergabe. <em>Meilenstein: Bau fertiggestellt.</em>"
      ],
      [
        "Medizintechnik",
        "Geräteliste und Budget, Vergabe, Bestellung von Großgeräten mit langer Lieferzeit, Anlieferung, Montage, Abnahmeprüfung und Eintrag ins Medizinproduktebuch."
      ],
      [
        "Krankenhaushygiene und Validierung",
        "Hygienische Begleitung von Planung und Bau nach den RKI-Anforderungen, Trinkwasserhygiene und Spülplan, Validierung der Raumlufttechnik sowie Umgebungs- und mikrobiologische Untersuchungen. <em>Meilenstein: Freigabe der Hygiene.</em>"
      ],
      [
        "Personal und Qualifikation",
        "Stellenplan, Rekrutierung, Nachweis von Fachkunde und Berechtigungen, Einarbeitung und dokumentierter Kompetenznachweis."
      ],
      [
        "Datenschutz und Dokumentation",
        "Konfiguration der klinischen Systeme, Datenschutz-Folgenabschätzung, Schnittstellen- und Dokumentationstests sowie die datenschutzrechtliche Freigabe."
      ],
      [
        "Inbetriebnahme und Eröffnung",
        "Verfahrensanweisungen, Simulations- und Probetage, Anzeige bei der Behörde und Begehung, Go-/No-go-Entscheidung und erste Patientin. <em>Meilenstein: erste Patientin.</em>"
      ]
    ],
    callout: "Validierung ist keine Restpunkteliste. Prüfung der Raumlufttechnik, Trinkwasserproben und die Abnahme der Medizintechnik finden alle nach dem Abzug der Handwerker statt und bevor jemand aufgenommen werden darf — und jede davon hat eine Laborlaufzeit, die Sie nicht steuern. Lassen Sie sechs bis acht Wochen zwischen der baulichen Fertigstellung und dem Eröffnungstermin und setzen Sie jede Prüfung als Vorgang mit Ergebnistermin auf den Plan.",
    customize: [
      "Setzen Sie den geforderten Eröffnungstermin und rechnen Sie über die Freigabe der Hygiene zurück — dieses Tor gibt den Bereich frei, nicht die bauliche Fertigstellung.",
      "Ergänzen Sie eine Zeile je Abweichung, sobald die Planprüfung beginnt; jede ist eine dokumentierte Risikoübernahme mit benannter freigebender Person.",
      "Weiten Sie die Phase Medizintechnik auf eine Zeile je Großgerät mit den tatsächlich angebotenen Lieferzeiten aus — Bildgebung und OP-Technik überholen den Bau regelmäßig.",
      "Verlängern Sie die Rekrutierung, wenn Sie Fachpflege oder eine Oberarztstelle besetzen müssen; genau diese Stellen verzögern sich.",
      "Legen Sie das Zeitfenster für Anzeige und Begehung als festen Balken ein und hängen Sie die erste Patientin daran.",
      "Halten Sie einen Simulations- oder Probetag vor der Eröffnung — es ist die günstigste Art, Prozesslücken zu finden."
    ],
    tips: [
      "<strong>Starten Sie den Spülplan an dem Tag, an dem die Leitungen befüllt werden.</strong> Spül- und Beprobungspläne laufen über Wochen, und eine auffällige Probe setzt die Uhr zurück, statt sie um einen Tag zu verschieben.",
      "<strong>Bestellen Sie Großgeräte gegen die Investitionsfreigabe, nicht gegen den Baubeginn.</strong> Wartet die Bestellung auf den Bau, kommt das Gerät nach der Fertigstellung der Station an.",
      "<strong>Behandeln Sie Berechtigungen als Abhängigkeit.</strong> Wer keine Berechtigung hat, darf keine Patientinnen behandeln — so fertig die Abteilung auch ist.",
      "<strong>Beginnen Sie die Datenschutz-Folgenabschätzung früh.</strong> Die Systemkonfiguration geht schnell, die Freigabe darum herum nicht.",
      "<strong>Führen Sie die Go-/No-go-Entscheidung mit den Verantwortlichen der Tore im Raum.</strong> Hygiene, Datenschutz, Technik und ärztliche Leitung haben je ein Vetorecht — diese Entscheidungen erst am Tag einzusammeln, ist der Weg zur verschobenen Eröffnung.",
      "<strong>Setzen Sie den Basisplan mit dem Einfrieren der Planung.</strong> Alles davor ist Schätzung; danach hat jede Änderung einen Preis und einen Genehmigungsweg."
    ],
    faq: [
      [
        "Wie lange dauert die Eröffnung einer neuen Krankenhausabteilung?",
        "Üblicherweise 18 bis 24 Monate von der Investitionsentscheidung bis zur ersten Patientin bei einem Umbau, bei einem Neubau länger. Die Vorlage nutzt einen Zeitraum von 18 Monaten, den Sie über den Eröffnungstermin stauchen oder strecken."
      ],
      [
        "Was verzögert die Eröffnung einer klinischen Abteilung am häufigsten?",
        "Validierung und Freigaben, nicht der Bau — Prüfung der Raumlufttechnik, Trinkwasserproben, Geräteabnahmen, Berechtigungen und Datenschutzfreigabe liegen alle nach der baulichen Fertigstellung und haben jeweils eine externe Laufzeit."
      ],
      [
        "Was ist in diesem Zusammenhang eine Abweichung?",
        "Eine dokumentierte und freigegebene Abweichung von einer Bau- oder Technikanforderung, wenn der Bestand sie nicht erfüllen kann. Sie muss in der Planung abgestimmt und von einer benannten Person freigegeben werden und steht deshalb als eigener Vorgang im Plan statt als Annahme."
      ],
      [
        "Passt die Vorlage auch für die Sanierung einer Station statt einer neuen Abteilung?",
        "Ja. Streichen Sie die Vorabmaßnahmen und die Auslagerung, wenn Sie keinen Betrieb verlegen, und behalten Sie Hygiene, Medizintechnik und die Freigabephasen — die sind in beiden Fällen identisch."
      ],
      [
        "Ist die Vorlage für die Abteilungseröffnung kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online — ohne Konto und ohne Wasserzeichen."
      ]
    ]
  },

  'school-year-planning-calendar': {
    card: "Stundenplanung, Personal, Anmeldungen, Prüfungen, Zeugnisse, Haushalt.",
    h1: "Jahresplanungskalender für die Schule",
    metaTitle: "Schuljahresplanung — Kalendervorlage",
    metaDesc: "Kostenlose Vorlage zur Schuljahresplanung: Stundenplanung, Unterrichtsverteilung, Anmeldungen, Prüfungszeiträume, Zeugnisse, Haushalt.",
    lead: "Eine kostenlose <strong>Vorlage für den Jahresplanungskalender einer Schule</strong> auf Ebene der Schulleitung statt des Klassenzimmers — Unterrichtsverteilung und Stundenplanbau, Personalplanung und Vertretung, Anmeldungen und Aufnahme, Ferien- und Termintafel, Leistungserhebungen und externe Prüfungszeiträume, Zeugnisse und Elternsprechtage, Evaluation und Gremienarbeit sowie der Haushaltszyklus, der unter allem mitläuft.",
    intro: "Ein Schuljahr wird zweimal geplant: einmal im Frühjahr davor und dann noch einmal Woche für Woche, während es läuft. Die Vorlage zeigt beides, wobei die Planungsphasen vor dem ersten Schultag liegen:",
    phases: [
      [
        "Unterrichtsverteilung und Stundenplan",
        "Kontingent- und Wahlpflichtmodell, Fächer- und Lehrerzuweisung, Stundenplanbau und Prüfung, Raum- und Ressourcenzuteilung. <em>Meilenstein: Stundenplan veröffentlicht.</em>"
      ],
      [
        "Personal und Verträge",
        "Überprüfung des Stellenplans, Abgänge und Einstellungsrunden, Vertragsabschlüsse, Vertretungs- und Springerregelungen sowie die Einführung neuer Lehrkräfte."
      ],
      [
        "Anmeldung und Aufnahme",
        "Tage der offenen Tür, Anmeldezeitraum, Zusagen und Widersprüche, Aufnahme und Nachrückverfahren, Schnuppertage für die neuen Jahrgänge. <em>Meilenstein: Schülerzahl bestätigt.</em>"
      ],
      [
        "Termine und Kalender",
        "Ferien- und Unterrichtstage, pädagogische Tage, die veröffentlichte Termintafel und die Kommunikation an die Eltern."
      ],
      [
        "Leistungserhebungen und Prüfungen",
        "Interne Erhebungszeitpunkte, Vorabklausuren, Meldungen und Fristen für die externen Prüfungen, die Prüfungszeiträume selbst, Aufsichten und Nachteilsausgleiche sowie die Ausgabe der Ergebnisse. <em>Meilenstein: Ergebnisausgabe.</em>"
      ],
      [
        "Zeugnisse und Eltern",
        "Notenerhebungsfenster, Zeugniskonferenzen und Zeugnisausgabe, Elternsprechtage sowie die Zielvereinbarungen für das Folgejahr."
      ],
      [
        "Evaluation und Gremien",
        "Selbstevaluation, Sitzungszyklus der Schulkonferenz, Vorbereitung auf die Schulaufsicht, Kinderschutzprüfung und die Termine der Konzeptfortschreibung."
      ],
      [
        "Haushaltszyklus",
        "Mittelzuweisung, Haushaltsaufstellung und Beschluss, unterjährige Überwachung sowie der Jahresabschluss."
      ]
    ],
    callout: "Stundenplanbau und Personalplanung sind ein Problem, nicht zwei. Sie können keinen Stundenplan fertigstellen, ohne zu wissen, wer unterrichtet, und Sie können den Stellenplan nicht bestätigen, ohne den Bedarf des Stundenplans zu kennen. Planen Sie beides als überlappende Balken mit gemeinsamem Termin und setzen Sie die Frist für Versetzungsanträge und Kündigungen auf den Plan — dieser eine Termin entscheidet, ob der Stundenplan einmal oder dreimal gebaut wird.",
    customize: [
      "Setzen Sie den Nullpunkt auf den Beginn Ihres Planungshalbjahres im Frühjahr, nicht auf den Schuljahresbeginn — die meisten Entscheidungen fallen vorher.",
      "Ersetzen Sie die Prüfungszeiträume durch die Termine Ihrer Schulbehörde; die liegen extern fest, alles andere ordnet sich darum.",
      "Ergänzen Sie eine Zeile je Jahrgangsstufe, wenn sich Leistungserhebungen und Zeugnisrhythmen unterscheiden.",
      "Tragen Sie die Sitzungstermine der Schulkonferenz als Meilensteine ein — sie sind die Beschlusstore für Haushalt und Konzepte.",
      "Verlängern Sie die Anmeldephase, wenn Sie ein Auswahlverfahren mit Widerspruchszeitraum führen.",
      "Kennzeichnen Sie pädagogische Tage ausdrücklich, damit Fortbildung eingeplant wird und nicht dazwischengequetscht."
    ],
    tips: [
      "<strong>Setzen Sie die Meldefrist für Versetzungen und Kündigungen auf den Plan.</strong> Sie ist der harte Termin, der einen baubaren Stundenplan von einem trennt, den Sie im August neu bauen.",
      "<strong>Schützen Sie die Notenerhebungsfenster.</strong> Zeugnisse hängen daran, dass die Daten rechtzeitig vorliegen; ein verrutschter Erhebungstermin verschiebt den Elternsprechtag, nicht nur die Tabelle.",
      "<strong>Organisieren Sie Prüfungsaufsichten früh.</strong> Aufsichtspersonal und die Feststellung von Nachteilsausgleichen haben beide Vorlaufzeiten und beide sind Tore zum Prüfungszeitraum.",
      "<strong>Legen Sie Tage der offenen Tür vor die Anmeldefrist.</strong> Ein Tag der offenen Tür nach der Frist ist Werbung, keine Gewinnung.",
      "<strong>Halten Sie den Haushaltszyklus sichtbar.</strong> Personalentscheidungen ohne den Blick auf die Haushaltslage sind die teuersten Fehler, die eine Schule macht.",
      "<strong>Planen Sie das Folgejahr im laufenden Sommerhalbjahr.</strong> Alles auf diesem Plan vor dem Schuljahresbeginn gehört noch in das Jahr, das gerade läuft."
    ],
    faq: [
      [
        "Was gehört in einen Jahresplanungskalender für die Schule?",
        "Unterrichtsverteilung und Stundenplanbau, Personal, Anmeldung und Aufnahme, Ferien- und Termintafel, Leistungserhebungen und externe Prüfungszeiträume, Zeugnisse und Elternarbeit, Evaluation und Gremien sowie der Haushaltszyklus. Alle acht sind als eigene Stränge hinterlegt."
      ],
      [
        "Wann sollte die Planung für das nächste Schuljahr beginnen?",
        "In der Regel im Frühjahr des Vorjahres, weil Meldefristen, Wahlpflichtblöcke und Mittelzuweisung Monate vor Schuljahresbeginn liegen. Die Vorlage setzt dort an und nicht im September."
      ],
      [
        "Lässt sich die Vorlage für eine Hochschule oder Berufsschule anpassen?",
        "Ja. Behalten Sie den Aufbau bei und ersetzen Sie die Prüfungszeiträume durch Ihre Prüfungsausschusstermine und die Anmeldezeilen durch Ihr Immatrikulationsverfahren — die Form des Jahres bleibt gleich."
      ],
      [
        "Wie bilde ich zwei oder drei Aufnahmetermine im Jahr ab?",
        "Verdoppeln Sie die Zeilen für Anmeldung und Aufnahme je Termin und behalten Sie einen einzigen Stundenplan- und Haushaltsstrang. Die Vorlage liefert das Muster für den Haupttermin."
      ],
      [
        "Ist die Vorlage zur Schuljahresplanung kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung."
      ]
    ]
  },

  'nonprofit-fundraising-campaign': {
    card: "Machbarkeit, Interessentenauswahl, stille Phase, Auftakt, Danksagung.",
    h1: "Kampagnenplan für Fundraising",
    metaTitle: "Spendenkampagne — Kampagnenplan",
    metaDesc: "Kostenloser Kampagnenplan für Fundraising: Machbarkeit, Interessenten, stille Phase, öffentlicher Auftakt, Matching, Dankmanagement.",
    lead: "Eine kostenlose <strong>Vorlage für den Kampagnenplan einer gemeinnützigen Spendenkampagne</strong>, aufgebaut so, wie Kapital- und Großspendenkampagnen tatsächlich laufen — Machbarkeitsprüfung und Argumentationspapier, Recherche und Aufbau der Interessentenliste, Pflege der Großspenderkontakte in einer stillen Phase, der öffentliche Auftakt, Veranstaltungen und Matching-Zeiträume sowie das Dank- und Berichtswesen, das darüber entscheidet, ob erneut gespendet wird.",
    intro: "Eine Kampagne ist kein Auftakt mit anschließenden Spenden. Der größte Teil der Summe ist zugesagt, bevor die Öffentlichkeit überhaupt davon hört — deshalb bekommt die stille Phase den größten Anteil am Plan:",
    phases: [
      [
        "Machbarkeit und Argumentationspapier",
        "Bedarfsermittlung, Zielfestlegung, Machbarkeitsgespräche mit möglichen Leitspendern, Argumentationspapier und Beschluss des Vorstands. <em>Meilenstein: Ziel beschlossen.</em>"
      ],
      [
        "Recherche und Interessentenliste",
        "Durchsicht der Datenbank, Einschätzung von Potenzial und Bindung, Bewertung der Interessenten, Zuordnung zu Betreuenden und die Spendenstufentabelle."
      ],
      [
        "Leitgremium und stille Phase",
        "Aufbau des Kampagnenkuratoriums, Eigenbeteiligung des Vorstands, Ansprache für Leit- und Großspenden sowie die Dokumentation der Zusagen — alles vor jeder öffentlichen Ankündigung. <em>Meilenstein: Ziel der stillen Phase erreicht.</em>"
      ],
      [
        "Öffentlicher Auftakt",
        "Auftaktmaterialien und Kurzfassung des Argumentationspapiers, Presse- und Social-Media-Plan, Auftaktveranstaltung und die breite Ansprache der Spenderbasis. <em>Meilenstein: öffentlicher Auftakt.</em>"
      ],
      [
        "Veranstaltungen und Aufrufe",
        "Benefizveranstaltungen, Brief- und E-Mail-Aufrufe, Aktionen aus dem Umfeld und von Unterstützenden sowie die Spendentage."
      ],
      [
        "Matching-Spenden",
        "Zusage des Matching-Gebers, Bewerbung des Zeitfensters, der Matching-Zeitraum selbst und die Abrechnung der verdoppelten Mittel."
      ],
      [
        "Dankmanagement und Berichte",
        "Dank und Zuwendungsbestätigung, Anerkennung der Spendenden, Wirkungsbericht, Einzug der Zusagen und der Abschlussbericht. <em>Meilenstein: Kampagne abgeschlossen.</em>"
      ]
    ],
    callout: "Gehen Sie nicht an die Öffentlichkeit, bevor die stille Phase den größten Teil des Ziels gesichert hat. Kampagnen, die bei vierzig Prozent ankündigen, verbringen die öffentliche Phase mit Erklärungen; Kampagnen, die bei siebzig Prozent ankündigen, verbringen sie mit Rückenwind. Der Auftakttermin soll aus der Zusagenlage folgen und nicht aus einem Marketingkalender.",
    customize: [
      "Legen Sie zuerst die Spendenstufentabelle fest und bemessen Sie die stille Phase an der Zahl der Leitspendengespräche, die daraus folgt — diese Zahl bestimmt die Dauer.",
      "Ergänzen Sie eine Zeile je Leitinteressent, sobald die Betreuung zugeordnet ist, damit die Kontaktpflege verfolgt und nicht unterstellt wird.",
      "Verschieben Sie den Meilenstein des öffentlichen Auftakts auf den Punkt, an dem die stille Phase Ihre Schwelle tatsächlich überschreitet.",
      "Ziehen Sie den Balken für den Einzug der Zusagen auf Ihre tatsächliche Zusagedauer; mehrjährige Zusagen überleben die Kampagne um Jahre.",
      "Ergänzen Sie Spendentage oder Jahresendaufrufe dort, wo sie in Ihrem Kalender liegen — diese Termine liegen fest, alles andere ordnet sich darum.",
      "Lassen Sie das Dankmanagement über den Abschlusstermin hinauslaufen; es ist die Vorbereitung der nächsten Kampagne."
    ],
    tips: [
      "<strong>Machbarkeitsgespräche sind Kontaktpflege.</strong> Wen Sie um eine ehrliche Einschätzung des Ziels bitten, den bitten Sie meist später um eine Leitspende — planen Sie die Gespräche entsprechend.",
      "<strong>Sprechen Sie von oben nach unten an.</strong> Leitspenden setzen den Maßstab für alle darunter; wer die mittlere Ebene zuerst fragt, deckelt die Kampagne auf deren Niveau.",
      "<strong>Sichern Sie das Matching, bevor Sie es bewerben.</strong> Ein angekündigtes Matching-Fenster ohne unterschriebene Zusage ist ein Versprechen, das Sie nicht halten können.",
      "<strong>Setzen Sie den Dank mit Frist auf den Plan.</strong> Innerhalb weniger Tage zu danken hat den höchsten Ertrag im Fundraising und ist das Erste, was in einer vollen Kampagne liegen bleibt.",
      "<strong>Führen Sie Zusagen getrennt von Zahlungseingängen.</strong> Gemeldete Summen sagen nichts über die Liquidität, solange der Zahlungsplan nicht daneben steht.",
      "<strong>Setzen Sie den Basisplan mit dem Zielbeschluss.</strong> Nachdem der Vorstand die Zahl gesetzt hat, verfolgen Sie die Zusagenlage wöchentlich, statt nur bei Veranstaltungen zu berichten."
    ],
    faq: [
      [
        "Wie lange dauert eine Spendenkampagne?",
        "Groß- und Kapitalkampagnen laufen üblicherweise zwei bis drei Jahre einschließlich stiller Phase und Einzug der Zusagen. Die Vorlage nutzt rund zwei Jahre, die Sie für einen Jahresaufruf stauchen können."
      ],
      [
        "Wie viel sollte vor dem öffentlichen Auftakt eingeworben sein?",
        "Üblich ist, einen deutlichen Großteil des Ziels in der stillen Phase zugesagt zu haben, häufig genannt werden rund 70 Prozent. Die Vorlage setzt den Auftakt hinter das Ziel der stillen Phase statt auf ein festes Datum."
      ],
      [
        "Was ist eine Spendenstufentabelle und wo gehört sie hin?",
        "Eine Aufstellung, wie viele Spenden je Größenordnung nötig sind, um das Ziel zu erreichen. Sie gehört in die Recherchephase, weil sie sagt, wie viele Interessenten je Stufe zu betreuen sind, bevor Sie sich auf die Zahl festlegen."
      ],
      [
        "Passt die Vorlage auch für einen Jahresaufruf statt einer Kapitalkampagne?",
        "Ja. Kürzen Sie die stille Phase, streichen Sie die Zeilen zum Kuratorium und behalten Sie Aufrufe, Matching und Dankmanagement — das ist die Form eines Jahresaufrufs."
      ],
      [
        "Ist die Vorlage für die Spendenkampagne kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Konto."
      ]
    ]
  },

  'warehouse-setup-project-plan': {
    card: "Standort, Mietvertrag, Regalanlage, LVS, Flurförderzeuge, Umzug, Hochlauf.",
    h1: "Projektplan für den Aufbau eines Lagers",
    metaTitle: "Lageraufbau — Projektplan-Vorlage",
    metaDesc: "Kostenloser Projektplan für den Lageraufbau: Standort, Mietvertrag, Regalanlage, LVS-Anbindung, Flurförderzeuge, Bestandsumzug, Hochlauf.",
    lead: "Eine kostenlose <strong>Vorlage für den Projektplan eines Lageraufbaus</strong> für einen neuen Distributions- oder Fulfillment-Standort von Anfang bis Ende — Netzwerkanalyse und Standortsuche, Mietvertrag und Ausbau durch den Vermieter, Planung und Montage der Regalanlage, Auswahl und Anbindung des Lagerverwaltungssystems (LVS), Beschaffung der Flurförderzeuge, Bestandsumzug vom alten Standort und ein Hochlauf, der Ihre Kunden nicht im Stich lässt.",
    intro: "Ein Lagerprojekt sind drei Projekte in einem Gebäude: der bauliche Ausbau, die Systemanbindung und der Bestandsumzug. Sie haben unterschiedliche Vorlaufzeiten und unterschiedliche Fehlerbilder, deshalb führt die Vorlage sie als getrennte Stränge:",
    phases: [
      [
        "Anforderungen und Netzwerkanalyse",
        "Mengen- und Artikelstrukturanalyse, Durchsatzmodell, Netz- und Standortanalyse sowie der Investitionsantrag. <em>Meilenstein: Investition freigegeben.</em>"
      ],
      [
        "Standortsuche und Mietvertrag",
        "Suche und engere Auswahl, Gebäudebegutachtung, Prüfung von Bodenbelastbarkeit und Netzanschlussleistung, Absichtserklärung, Mietvertragsverhandlung und Ausbau durch den Vermieter. <em>Meilenstein: Mietvertrag unterschrieben.</em>"
      ],
      [
        "Layout und Regalanlage",
        "Lagerstrategie und Lagerplatzvergabe, Regallayout und Genehmigungen, Brandschutz- und Sprinklerkonzept, Fertigung und Montage der Regalanlage sowie Bühnen und Kommissionierebenen."
      ],
      [
        "LVS-Auswahl und Anbindung",
        "Anforderungen und Anbieterauswahl, Konfiguration, Anbindung an ERP und Versanddienstleister, Datenübernahme und Abnahmetest. <em>Meilenstein: LVS-Abnahme erteilt.</em>"
      ],
      [
        "Flurförderzeuge und Technik",
        "Beschaffung von Staplern und Schubmaststaplern, Förder- und Sortiertechnik wo eingesetzt, Packplätze, Scanner, Etikettiertechnik und die Ladeinfrastruktur."
      ],
      [
        "Ausbau und Infrastruktur",
        "Strom und Beleuchtung, Netzwerk und Funkausleuchtung, Überladebrücken und Tore, Büro- und Sozialräume, Sicherheits- und Zutrittstechnik."
      ],
      [
        "Personal und Schulung",
        "Einstellung der Standortleitung, Gewinnung der gewerblichen Kräfte, Schulung auf LVS und Technik sowie die Fahrausweise für Flurförderzeuge."
      ],
      [
        "Bestandsumzug und Inbetriebnahme",
        "Bestandsbereinigung, Umzugswellen, Inventurübernahme und Zykluszählung, Parallelbetrieb, Umschaltung und Mengenhochlauf. <em>Meilenstein: volle Menge.</em>"
      ]
    ],
    callout: "Die Funkausleuchtung ist eine Abhängigkeit, kein Detail. Jeder scannergestützte Prozess im Gebäude setzt Abdeckung in jeder Gasse bis zur vollen Regalhöhe voraus, und die Regalanlage verändert die Funkumgebung vollständig. Messen Sie nach der Regalmontage und vor der Inbetriebnahme, mit Zeit für zusätzliche Zugangspunkte — wer die leere Halle ausleuchtet, entdeckt die toten Gassen im ersten Spitzengeschäft.",
    customize: [
      "Verankern Sie den Plan an dem Termin, zu dem Sie den bisherigen Standort verlassen oder eine Kundenzusage einhalten müssen; das setzt die Inbetriebnahme, alles andere rechnet rückwärts.",
      "Passen Sie die Fertigungszeit der Regalanlage an Ihr Angebot an — sie ist nach dem Mietvertrag häufig die längste Einzelposition.",
      "Ergänzen Sie eine Zeile je Schnittstelle (ERP, Versanddienstleister, Marktplätze, Retouren), sobald der LVS-Anbieter feststeht; jede hat ihren eigenen Testzyklus.",
      "Teilen Sie den Bestandsumzug nach Umschlaghäufigkeit in Wellen, damit die Schnelldreher zuerst ankommen und der Standort arbeiten kann, während der Rest folgt.",
      "Verlängern Sie den Parallelbetrieb, wenn Sie sich keine harte Umschaltung leisten können; zwei Standorte kosten Geld, schützen aber die Lieferfähigkeit.",
      "Setzen Sie Mietvertrag, Regalmontage, LVS-Abnahme, ersten Warenausgang und volle Menge als Meilensteine."
    ],
    tips: [
      "<strong>Prüfen Sie Bodenbelastbarkeit und Netzanschluss vor der Absichtserklärung.</strong> Ein Gebäude, das Ihre Regallasten oder Ihre Ladeleistung nicht trägt, ist nicht das günstigere, sondern das falsche.",
      "<strong>Wählen Sie das LVS, bevor das Regallayout eingefroren wird.</strong> Lagerplatzvergabe, Platznummernlogik und Wegeoptimierung folgen dem System, und nachträglich lässt sich das in einer montierten Anlage nur teuer ändern.",
      "<strong>Bestellen Sie Flurförderzeuge gegen echte Lieferzeiten.</strong> Lieferfristen für Stapler und Schubmaststapler haben sich in den letzten Jahren auf viele Monate gedehnt; der Bestelltermin gehört auf den Plan.",
      "<strong>Fahren Sie hoch, statt umzuschalten.</strong> Planen Sie die ersten Wochen bewusst mit reduzierter Menge, damit Prozessprobleme auftauchen, solange noch Kapazität da ist, sie aufzufangen.",
      "<strong>Bereinigen Sie den Bestand vor dem Umzug.</strong> Obsolete Ware kostet doppelt — einmal für den Transport und dann für die Lagerung.",
      "<strong>Setzen Sie den Basisplan mit der Vertragsunterschrift.</strong> Davor ist alles optional; danach läuft die Miete und jede Woche Verzug hat eine Zahl."
    ],
    faq: [
      [
        "Wie lange dauert der Aufbau eines neuen Lagers?",
        "Üblicherweise 9 bis 15 Monate von der Investitionsentscheidung bis zur Inbetriebnahme für ein mittelgroßes Distributionszentrum, bestimmt vor allem von Standortsicherung, Regallieferzeit und LVS-Anbindung. Die Vorlage nutzt zwölf Monate."
      ],
      [
        "Was hat üblicherweise die längste Vorlaufzeit?",
        "Die Fertigung der Regalanlage und die Flurförderzeuge, beide inzwischen in Monaten gerechnet. Der Mietvertrag selbst zieht sich oft noch länger, weshalb die Standortsuche den Plan eröffnet."
      ],
      [
        "Sollte das LVS gleichzeitig mit dem Gebäude live gehen?",
        "Nicht zwingend. Viele Standorte fahren das neue Gebäude zunächst auf dem bestehenden System und schalten das System später getrennt um, damit sich immer nur eine Variable ändert. Die Vorlage hält die Stränge getrennt, damit Sie wählen können."
      ],
      [
        "Wie plane ich den Bestandsumzug?",
        "In Wellen nach Umschlaghäufigkeit, mit Zykluszählung nach jeder Welle und einem Parallelbetrieb, bevor der alte Standort schließt. Diese Zeilen sind in der letzten Phase hinterlegt."
      ],
      [
        "Ist die Vorlage für den Lageraufbau kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Konto."
      ]
    ]
  },

  'road-construction-schedule': {
    card: "Planung, Genehmigungen, Leitungsumlegungen, Erdbau, Deckschicht, Freigabe.",
    h1: "Bauzeitenplan für den Straßenbau",
    metaTitle: "Straßenbau — Bauzeitenplan-Vorlage",
    metaDesc: "Kostenloser Bauzeitenplan für den Straßenbau: Vermessung, Genehmigungen, Leitungsumlegungen, Erdbau, Trag- und Deckschicht, Freigabe.",
    lead: "Eine kostenlose <strong>Vorlage für den Bauzeitenplan im Straßenbau</strong> entlang eines echten Straßenbauvorhabens — Vermessung und Planung, Grunderwerb und Genehmigungen, Leitungsumlegungen der Sparten, Erdbau und Entwässerung, Frostschutzschicht, Tragschichten und die gebundenen Deckschichten, Beschilderung und Markierung, die abschnittsweise Verkehrsführung sowie die Übergabe an den Baulastträger.",
    intro: "Bei einem Straßenbauvorhaben ist die Fahrbahn der einfache Teil. Den Termin bestimmt, was sich bewegen muss, bevor Sie graben dürfen: die Leitungen der Versorger, Grundstücke, die Ihnen noch nicht gehören, und der Verkehr, der weiterlaufen muss. Die Vorlage gibt jedem davon einen eigenen Strang:",
    phases: [
      [
        "Vermessung und Planung",
        "Topografische Aufnahme und Baugrunduntersuchung, Leitungsauskünfte und Suchschachtungen, Vor- und Ausführungsplanung, Entwässerungsplanung und Sicherheitsaudit. <em>Meilenstein: Planung genehmigt.</em>"
      ],
      [
        "Grunderwerb und Genehmigungen",
        "Grunderwerbsverzeichnis, Erwerb oder vorübergehende Inanspruchnahme, Planfeststellung oder Baugenehmigung, naturschutzrechtliche Zulassungen und die Regelung der Anschlussstraßen. <em>Meilenstein: Genehmigungen liegen vor.</em>"
      ],
      [
        "Leitungsumlegungen",
        "Kostenschätzungen der einzelnen Versorger, Umlegungsplanung, Abstimmung der Termine mit den Sparten und die Umlegungen selbst — Gas, Wasser, Strom und Telekommunikation, jede auf ihrer eigenen Zeitachse."
      ],
      [
        "Verkehrsführung",
        "Verkehrszeichenplan und verkehrsrechtliche Anordnung, Anmeldung des Straßenraums, Abstimmung der Umleitungsstrecken sowie die abschnittsweisen Sperrungen, Gegenverkehrsführungen und Fahrstreifeneinschränkungen, in denen gebaut wird."
      ],
      [
        "Erdbau und Entwässerung",
        "Räumung und Oberbodenabtrag, Auf- und Abtrag, Frostschutzschicht, Sammler, Straßenabläufe, Rückhaltung und Einleitstellen."
      ],
      [
        "Oberbau",
        "Tragschicht ohne Bindemittel, Asphalttrag-, Binder- und Deckschicht, Bordsteine, Gehwege und Höhenanpassung der Schachtabdeckungen. <em>Meilenstein: Deckschicht fertiggestellt.</em>"
      ],
      [
        "Beschilderung, Markierung und Übergabe",
        "Markierung, Beschilderung und Schilderbrücken, Straßenbeleuchtung, Schutzeinrichtungen, abschließendes Sicherheitsaudit, Restpunkte und Übergabe an den Baulastträger. <em>Meilenstein: Verkehrsfreigabe.</em>"
      ]
    ],
    callout: "Die Leitungsumlegungen sind der Terminplan. Die Versorgungsunternehmen arbeiten nach ihren eigenen Fristen, brauchen lange Vorlaufzeiten und stauchen nicht für Ihren Termin — und jede Sparte muss fertig sein, bevor Sie in diesem Abschnitt aufgraben dürfen. Fordern Sie die Kostenschätzungen bereits in der Planung an, nicht nach der Auftragsvergabe, und setzen Sie jeden Versorger als eigenen Balken mit eigener Dauer auf den Plan.",
    customize: [
      "Tragen Sie zuerst die bestätigten Zeitfenster für den Straßenraum ein; auf einer befahrenen Straße sind sie die Fixpunkte, um die sich der Rest ordnet.",
      "Ergänzen Sie eine Zeile je Versorger — Gas, Wasser, Strom und jeder Telekommunikationsbetreiber haben unterschiedliche Fristen und unterschiedliche Kolonnen.",
      "Teilen Sie die Maßnahme in Bauabschnitte oder Stationierungsbereiche, sobald die Verkehrsführung steht, damit Erdbau und Oberbau je Abschnitt verfolgt werden.",
      "Legen Sie den Deckschichteinbau möglichst außerhalb der Wintermonate; Binder- und Deckschicht haben Temperaturgrenzen, die den Einbau am Tag selbst stoppen.",
      "Tragen Sie umweltfachliche Sperrzeiten ein — Brutzeit, Fledermausaktivität, Fischschonzeiten — wenn Ihre Zulassungen sie vorschreiben.",
      "Behalten Sie beide Sicherheitsaudits im Plan; das Audit nach dem Bau ist ein Tor zur Freigabe und keine Nachbetrachtung."
    ],
    tips: [
      "<strong>Fordern Sie die Angaben der Versorger in der Planung an.</strong> Allein die Abstimmung der Kostenschätzungen kann Monate dauern, bevor die erste Umlegung gegraben ist, und sie liegt allem anderen auf dem kritischen Pfad voraus.",
      "<strong>Melden Sie den Straßenraum an, bevor Sie ihn brauchen.</strong> Die Zeitfenster der Straßenverkehrsbehörde werden nach Reihenfolge vergeben, und eine abgelehnte Anmeldung verschiebt den ganzen Bauabschnitt.",
      "<strong>Entwässerung immer vor dem Oberbau.</strong> Ein vergessener Ablauf oder Anschluss durch eine fertige Fahrbahn nachzurüsten kostet ein Vielfaches.",
      "<strong>Achten Sie auf die Witterungsfenster der gebundenen Schichten.</strong> Unterhalb der zulässigen Temperatur eingebaute Deckschicht versagt früh, und der Baulastträger übernimmt sie nicht.",
      "<strong>Planen Sie die Umbauten der Verkehrsführung als Vorgänge mit Dauer.</strong> Jeder Wechsel ist eine Nachtschicht mit eigenen Mitteln; wer die Verkehrsführung als kostenlos behandelt, verliert zwei Wochen.",
      "<strong>Setzen Sie den Basisplan, wenn die Genehmigungen vorliegen.</strong> Davor ist der Plan bedingt; danach verfolgen Sie die Abweichung, damit Verzug bei den Sparten früh sichtbar wird."
    ],
    faq: [
      [
        "Wie lange dauert ein Straßenbauvorhaben?",
        "Eine kurze innerörtliche Maßnahme läuft 6 bis 9 Monate, eine neue Verbindungsstraße oder ein größerer Ausbau zwei Jahre und mehr. Die Vorlage nutzt rund 18 Monate, die Sie über den Freigabetermin stauchen oder strecken."
      ],
      [
        "Was verzögert Straßenbauvorhaben am häufigsten?",
        "Leitungsumlegungen und Genehmigungen weit häufiger als der Bau selbst. Beide hängen an Dritten mit eigenen Fristen, weshalb jede einen eigenen Strang bekommt statt einer Zeile innerhalb der Bauarbeiten."
      ],
      [
        "Wie stelle ich die Verkehrsführung im Gantt-Diagramm dar?",
        "Als abschnittsweise Balken, denen Verkehrszeichenplan und Anmeldung des Straßenraums vorausgehen, wobei jeder Bauabschnitt von seiner eigenen Verkehrsführung abhängt. So bedroht eine abgelehnte oder verspätete Anmeldung sichtbar die Arbeiten, die sie schützt."
      ],
      [
        "Deckt die Vorlage auch ein Bauwerk innerhalb der Maßnahme ab?",
        "Nur auf Übersichtsebene. Enthält Ihre Maßnahme ein Ingenieurbauwerk, führen Sie unseren <a href=\"/de/templates/bridge-construction-schedule.html\">Bauzeitenplan für den Brückenbau</a> daneben und verknüpfen Sie die Sperrpausen."
      ],
      [
        "Kann ich sie für eine Fahrbahnsanierung statt eines Neubaus nutzen?",
        "Ja. Streichen Sie Grunderwerb, Genehmigungen und Erdbau und behalten Sie Verkehrsführung, Oberbau und Markierung — das ist die Form einer Sanierungsmaßnahme."
      ],
      [
        "Ist die Vorlage für den Straßenbau kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online — ohne Anmeldung und ohne Wasserzeichen."
      ]
    ]
  },

  'mobile-app-launch-plan': {
    card: "Release Candidate, Beta, Store-Eintrag, Prüfung, Rollout, Day-One-Patch.",
    h1: "Launchplan für eine Mobile App",
    metaTitle: "Mobile App — Launchplan-Vorlage",
    metaDesc: "Kostenloser Launchplan für Mobile Apps: Stabilisierung, Beta, Store-Eintrag, App-Store-Prüfung, stufenweiser Rollout, Day-One-Patch.",
    lead: "Eine kostenlose <strong>Vorlage für den Launchplan einer Mobile App</strong>, aufgebaut um die Store-Freigabe statt um allgemeines Marketing — Stabilisierung des Builds und Release Candidate, Beta über TestFlight und den internen Play-Track, Store-Eintrag und Screenshots, Einreichung bei App Store und Google Play, die Wartezeit der Prüfung selbst, stufenweiser Rollout und das Zeitfenster für den Day-One-Patch. Laden Sie sie für eine Release-Freigabe herunter oder öffnen Sie sie online, um zu sehen, was Ihren Termin tatsächlich bestimmt.",
    intro: "Eine Mobile App auszuliefern ist etwas anderes, als Software auf einen Server zu bringen. Jemand anderes entscheidet, wann Ihr Build live geht, und der Plan muss das zeigen. Die Vorlage trennt die Arbeit, die Sie steuern, von der Wartezeit, die Sie nicht steuern:",
    phases: [
      [
        "Stabilisierung des Builds",
        "Feature-Freeze, Auswertung von Abstürzen und ANR-Fehlern, Arbeit an Leistung und Speicher, Barrierefreiheit und Tests auf der Gerätematrix sowie der Release-Candidate-Build. <em>Meilenstein: Release Candidate steht.</em>"
      ],
      [
        "Beta-Test",
        "Upload nach TestFlight und in den internen Play-Track, interne Beta, Gewinnung externer Testerinnen und Tester, die externe Runde und die Auswertung der Rückmeldungen. <em>Meilenstein: Beta-Kriterien erfüllt.</em>"
      ],
      [
        "Store-Eintrag und Assets",
        "Recherche zu Suchbegriffen und Kategorie, Name und Beschreibung, Screenshots und Vorschauvideo, Symbol und Grafiken, die Angaben zum Datenschutz und der Fragebogen zur Altersfreigabe."
      ],
      [
        "Einreichung und Prüfung",
        "Prüfung der Richtlinienkonformität vor der Einreichung, Einreichung in beiden Stores, die Wartezeit der Prüfung und ein echter Puffer für Ablehnung und erneute Einreichung. <em>Meilenstein: freigegeben und veröffentlichungsbereit.</em>"
      ],
      [
        "Stufenweiser Rollout",
        "Gestaffelte Veröffentlichung an 1, 10 und 50 Prozent, wobei vor jeder Ausweitung die absturzfreie Rate geprüft wird. <em>Meilenstein: volle Verfügbarkeit.</em>"
      ],
      [
        "Day-One-Patch und Beobachtung",
        "Beobachtung von Abstürzen und ANR-Fehlern, das reservierte Patch-Fenster, Antworten auf Store-Bewertungen und die Auswertung der Bindung in Woche eins."
      ]
    ],
    callout: "Rechnen Sie mit einer Ablehnung. Erste Einreichungen werden oft genug abgelehnt, dass ein Plan ohne Puffer für die erneute Einreichung ein Münzwurf ist — und bei der erneuten Einreichung beginnt die Uhr wieder bei null. Setzen Sie Prüfwartezeit und Ablehnungspuffer als zwei getrennte Balken auf den Plan und legen Sie den Ankündigungstermin hinter den zweiten, nicht hinter den ersten.",
    customize: [
      "Setzen Sie den Einreichungstermin und rechnen Sie vorwärts, nicht rückwärts — die Prüfdauer können Sie nicht stauchen.",
      "Teilen Sie Einreichung und Prüfung je Store auf, wenn iOS und Android unterschiedlich takten; die Prüfdauern unterscheiden sich.",
      "Verlängern Sie den Ablehnungspuffer bei einer ersten Einreichung, bei Abo-Apps und bei allem, was Kontolöschung, Gesundheitsdaten oder nutzergenerierte Inhalte berührt.",
      "Passen Sie die Rolloutstufen an die Plattform an; der gestaffelte Rollout bei Google Play und die phasenweise Veröffentlichung im App Store laufen nicht identisch.",
      "Halten Sie das Patch-Fenster mit namentlich benannten Personen im Plan — ein unbesetztes Patch-Fenster ist nur eine leere Woche.",
      "Setzen Sie Release Candidate, Beta-Abschluss, Store-Freigabe und volle Verfügbarkeit als Meilensteine; nach diesen vier Terminen wird gefragt."
    ],
    tips: [
      "<strong>Reichen Sie die Store-Metadaten ein, bevor das Binary final ist.</strong> Screenshots, Beschreibungen und die Datenschutzangaben lassen sich unabhängig vorbereiten und prüfen und sollten nie der Grund sein, warum der Einreichungstag wartet.",
      "<strong>Kündigen Sie keinen Termin an, der von einer noch nicht erteilten Freigabe abhängt.</strong> Hängen Sie das Marketing an den Freigabemeilenstein, damit eine Ablehnung die Kampagne automatisch verschiebt.",
      "<strong>Prüfen Sie die absturzfreie Rate auf jeder Rolloutstufe.</strong> Der Sinn eines stufenweisen Rollouts ist der Halt zwischen den Stufen; wenn niemand eingeplant ist, der auf die Zahlen schaut, bringt die Staffelung nichts.",
      "<strong>Reservieren Sie das Patch-Fenster vor dem Launch, nicht danach.</strong> Wer den Day-One-Fix bauen soll, ist sonst am Launchtag schon dem nächsten Sprint zugeordnet.",
      "<strong>Gewinnen Sie externe Testende Wochen im Voraus.</strong> Eine brauchbare Zahl echter Geräte zusammenzubekommen dauert länger als geplant, und eine dünne Beta findet nichts.",
      "<strong>Setzen Sie den Basisplan mit dem Release Candidate.</strong> Alles davor ist Schätzung; danach besteht der Plan überwiegend aus fremden Warteschlangen und gehört als Abweichung verfolgt."
    ],
    faq: [
      [
        "Wie lange dauert die Prüfung im App Store?",
        "Die meisten App-Store-Prüfungen sind innerhalb von ein bis zwei Tagen abgeschlossen, Google Play ist oft schneller, doch beide können bei einer ersten Einreichung oder in sensiblen Kategorien deutlich länger dauern. Die Vorlage sieht zehn Tage plus Ablehnungspuffer vor."
      ],
      [
        "Was gehört in einen Launchplan für eine Mobile App?",
        "Stabilisierung des Builds, Beta-Test, Store-Eintrag und Assets, Einreichung und Prüfung, stufenweiser Rollout und ein Zeitfenster für den Day-One-Patch. Alle sechs sind hinterlegt, wobei die Prüfwartezeit als Abhängigkeit modelliert ist und nicht als Annahme."
      ],
      [
        "Worin unterscheidet sich das von einem Plan zur Produkteinführung?",
        "Dieser Plan ist auf den Store zugeschnitten — Einreichung, Prüfung und gestaffelter Rollout stehen im Mittelpunkt. Für Preisgestaltung, Positionierung und Kampagnen nutzen Sie daneben die <a href=\"/de/templates/product-launch.html\">Vorlage zur Produkteinführung</a>."
      ],
      [
        "Stufenweiser Rollout oder Veröffentlichung an alle?",
        "Staffeln Sie, sofern nichts dagegen spricht. Eine gestaffelte Veröffentlichung lässt Sie bei 1 Prozent anhalten, wenn die absturzfreie Rate fällt — das ist deutlich günstiger als ein Notfall-Rollback für alle."
      ],
      [
        "Ist die Vorlage für den App-Launch kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online — ohne Konto und ohne Wasserzeichen."
      ]
    ]
  },

  'iso-9001-certification-plan': {
    card: "Gap-Analyse, QM-Handbuch, internes Audit, Stufe 1 und 2, Zertifikat.",
    h1: "Projektplan zur ISO-9001-Zertifizierung",
    metaTitle: "ISO 9001 — Zertifizierungsplan-Vorlage",
    metaDesc: "Kostenloser Plan zur ISO-9001-Zertifizierung: Gap-Analyse, QM-Handbuch, internes Audit, Managementbewertung, Stufe 1 und 2, Überwachung.",
    lead: "Eine kostenlose <strong>Vorlage für den Projektplan einer ISO-9001-Zertifizierung</strong> entlang des tatsächlichen Wegs zum Zertifikat — Gap-Analyse, Prozesslandkarte, QM-Dokumentation, Umsetzung und Schulung, der Zyklus des internen Audits, Managementbewertung und Korrekturmaßnahmen, danach das zweistufige externe Zertifizierungsaudit und das erste Überwachungsaudit. Laden Sie sie für die Unterlage zur Managementbewertung herunter oder verknüpfen Sie online die Tore, die sich nicht überspringen lassen.",
    intro: "Eine ISO-9001-Zertifizierung ist kein Dokumentationsprojekt. Die Zertifizierungsstelle will Aufzeichnungen eines Systems sehen, das tatsächlich gelaufen ist — deshalb liegen internes Audit und Managementbewertung vor dem externen Audit und nicht daneben:",
    phases: [
      [
        "Gap-Analyse und Planung",
        "Anwendungsbereich und Kontext der Organisation, Auswahl der Zertifizierungsstelle, eine strukturierte Gap-Analyse gegen die Norm und der daraus abgeleitete Projektplan. <em>Meilenstein: Gap-Analyse abgeschlossen.</em>"
      ],
      [
        "Prozesse und Risiken",
        "Aufnahme der Kernprozesse, interessierte Parteien und ihre Anforderungen, das Register für Risiken und Chancen sowie messbare Qualitätsziele."
      ],
      [
        "QM-Dokumentation",
        "Qualitätspolitik und QM-Handbuch, dokumentierte Verfahren, Arbeitsanweisungen und Formblätter, Dokumentenlenkung und die Aufbewahrungsfristen. <em>Meilenstein: Dokumentation freigegeben.</em>"
      ],
      [
        "Umsetzung und Schulung",
        "Sensibilisierung aller Mitarbeitenden, Schulung der Prozessverantwortlichen und ein Zeitraum, in dem die Prozesse tatsächlich laufen, damit es Aufzeichnungen zu auditieren gibt."
      ],
      [
        "Internes Audit und Korrekturmaßnahmen",
        "Ausbildung interner Auditoren, das vollständige interne Auditprogramm, Abweichungsberichte und der mit Nachweisen belegte Abschluss der Korrekturmaßnahmen."
      ],
      [
        "Managementbewertung",
        "Zusammenstellung der Eingaben, die Sitzung zur Managementbewertung selbst und die daraus abgeleiteten Maßnahmen. <em>Meilenstein: Auditreife bestätigt.</em>"
      ],
      [
        "Zertifizierungsaudit",
        "Stufe-1-Audit als Dokumenten- und Reifeprüfung, Abarbeitung der Feststellungen aus Stufe 1, das Stufe-2-Audit der Umsetzung, Schließen der Abweichungen und die Zertifizierungsentscheidung. <em>Meilenstein: Zertifikat erteilt.</em>"
      ],
      [
        "Überwachung",
        "Der Verbesserungszyklus, eine zweite Runde interner Audits und das Überwachungsaudit im ersten Jahr, das die Gültigkeit des Zertifikats erhält."
      ]
    ],
    callout: "Der Abstand zwischen Stufe 1 und Stufe 2 ist der ganze Sinn des zweistufigen Audits, und die meisten Pläne setzen ihn falsch an. Stufe 1 sagt Ihnen, ob Ihr System reif ist; Stufe 2 prüft, ob es wirkt. Zertifizierungsstellen wollen regelmäßig mehrere Wochen dazwischen, damit Feststellungen geschlossen werden können — Stufe 2 zu dicht hinter Stufe 1 zu buchen, ist der Weg zu einem zusätzlichen kostenpflichtigen Besuch.",
    customize: [
      "Wählen Sie die Zertifizierungsstelle früh und tragen Sie deren tatsächliche Verfügbarkeit ein — Audittermine werden Monate im Voraus vergeben und setzen Ihren äußeren Termin.",
      "Verlängern Sie den Umsetzungszeitraum, wenn Ihre Prozesse lange Zyklen haben; Sie brauchen Aufzeichnungen über einen repräsentativen Zeitraum, nicht über zwei Wochen.",
      "Ergänzen Sie eine Zeile je Prozessbereich in Prozessaufnahme und internem Audit, damit die Abdeckung sichtbar und nicht unterstellt ist.",
      "Legen Sie je Hauptabweichung eine Korrekturmaßnahmenzeile an, sobald die Feststellungen aus Stufe 1 vorliegen; jede hat eigene Nachweise und einen eigenen Abschlusstermin.",
      "Setzen Sie Dokumentationsfreigabe, bestätigte Auditreife, Abschluss von Stufe 2 und Zertifikatserteilung als Meilensteine — das sind die Termine für die Geschäftsführung.",
      "Wenn Sie bereits ein anderes Managementsystem zertifiziert haben, kürzen Sie die Dokumentationsphase und nutzen Sie die gemeinsamen Kapitel weiter, statt sie neu zu schreiben."
    ],
    tips: [
      "<strong>Schreiben Sie keine Dokumente, die Sie nicht befolgen.</strong> Auditoren prüfen das System gegen Ihre eigenen Verfahren, deshalb erzeugt ein überspezifiziertes Handbuch Abweichungen, die ein schlankeres nicht hätte.",
      "<strong>Führen Sie das interne Audit wie das echte durch.</strong> Es ist die günstigste Generalprobe, und intern erhobene Feststellungen sind Verbesserungen statt Abweichungen.",
      "<strong>Lassen Sie echte Zeit zwischen Stufe 1 und Stufe 2.</strong> Vier bis acht Wochen sind üblich; Feststellungen sauber zu schließen kostet weniger als ein Wiederholungsaudit.",
      "<strong>Sammeln Sie die Eingaben zur Managementbewertung im Voraus.</strong> Die Sitzung ist eine geforderte Aufzeichnung mit festgelegter Eingabeliste, und am Tag zusammengetragen ergibt sie einen dünnen Nachweis, den ein Auditor bemerkt.",
      "<strong>Behalten Sie den Überwachungszyklus im Plan.</strong> Die Zertifizierung ist der Beginn eines jährlichen Rhythmus, und wer den Plan nach dem Zertifikat weglegt, hetzt zwölf Monate später.",
      "<strong>Setzen Sie den Basisplan mit der Dokumentationsfreigabe.</strong> Alles davor ist Aufbau; danach zählt die Abweichung gegen die Audittermine."
    ],
    faq: [
      [
        "Wie lange dauert eine ISO-9001-Zertifizierung?",
        "Üblicherweise 6 bis 12 Monate für eine Organisation, die bei null beginnt, und schneller, wenn bereits ein dokumentiertes System besteht. Diese Vorlage läuft rund 18 Monate, weil sie bis zum ersten Überwachungsaudit reicht; das Zertifikat selbst fällt etwa in Monat zwölf."
      ],
      [
        "Was ist der Unterschied zwischen Stufe-1- und Stufe-2-Audit?",
        "Stufe 1 ist weitgehend eine Dokumenten- und Reifeprüfung, ob Ihr QM-System überhaupt auditierbar ist. Stufe 2 prüft anhand von Aufzeichnungen und Gesprächen, ob es umgesetzt und wirksam ist. Beide sind hier eigene Phasen mit einem Zeitraum zum Schließen dazwischen."
      ],
      [
        "Brauche ich ein internes Audit vor der Zertifizierung?",
        "Ja. Die Norm fordert durchgeführte interne Audits und eine Managementbewertung, und die Zertifizierungsstelle sucht diese Aufzeichnungen bereits in Stufe 1. Deshalb liegen beide in diesem Plan vor dem externen Audit."
      ],
      [
        "Was passiert, wenn der Auditor eine Abweichung feststellt?",
        "Nebenabweichungen werden meist innerhalb einer gesetzten Frist mit Maßnahmenplan und Nachweis geschlossen; Hauptabweichungen können einen weiteren Besuch erfordern. Die Vorlage sieht nach jeder Stufe genau dafür einen Balken vor."
      ],
      [
        "Ist die Vorlage für die ISO-9001-Zertifizierung kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung."
      ]
    ]
  },

  'soc2-compliance-timeline': {
    card: "Scoping, Kontrollen, Behebung, Nachweise, Beobachtungszeitraum, Bericht.",
    h1: "Zeitplan für SOC-2-Compliance",
    metaTitle: "SOC 2 — Zeitplan-Vorlage für Compliance",
    metaDesc: "Kostenlose SOC-2-Zeitplan-Vorlage: Scoping, Kontrolldesign, Behebung, Nachweise, Readiness, Beobachtungszeitraum, Prüfung, Bericht.",
    lead: "Eine kostenlose <strong>Vorlage für den Zeitplan einer SOC-2-Compliance</strong> über das gesamte Vorhaben — Abgrenzung des Systems und Auswahl der Trust Services Criteria, Kontrolldesign, Behebung, Nachweiserhebung, die Readiness-Bewertung, der Beobachtungszeitraum für Type II, die Prüfungshandlungen des Wirtschaftsprüfers und die Berichtserteilung. Laden Sie sie für eine Sicherheitsprüfung durch Kunden herunter oder öffnen Sie sie online, um zu sehen, warum der Berichtstermin dort liegt, wo er liegt.",
    intro: "Fast jede Frage zum SOC-2-Zeitplan ist in Wahrheit eine Frage zum Beobachtungszeitraum. Type I ist ein Urteil zu einem Stichtag; Type II deckt einen Zeitraum ab, in dem Ihre Kontrollen tatsächlich wirken müssen. Die Vorlage macht diesen Zeitraum zu einem sichtbaren Balken, damit niemand einen Bericht zusagt, den die Rechnung verbietet:",
    phases: [
      [
        "Abgrenzung und Kriterien",
        "Festlegung der Systemgrenze, Auswahl der Trust Services Criteria, Beauftragung des Prüfers und die Entscheidung zwischen Type I und Type II. <em>Meilenstein: Umfang abgestimmt.</em>"
      ],
      [
        "Kontrolldesign",
        "Risikobeurteilung, Zuordnung der Kontrollen zu den gewählten Kriterien, Entwurf der Richtlinien und Benennung der Kontrollverantwortlichen. <em>Meilenstein: Kontrollmatrix freigegeben.</em>"
      ],
      [
        "Behebung",
        "Zugriffsverwaltung und Rezertifizierung, Freigabetore im Änderungsmanagement, Protokollierung und Überwachung, Lieferantenrisiko, Sicherheitsschulungen und ein Test der Notfallreaktion — die eigentliche technische Arbeit."
      ],
      [
        "Nachweise und Readiness",
        "Werkzeuge zur Nachweiserhebung, Befüllen der Nachweisablage, eine Readiness-Bewertung und das Schließen der dabei gefundenen Lücken. <em>Meilenstein: Readiness bestätigt.</em>"
      ],
      [
        "Type-I-Bericht (optional)",
        "Prüfungshandlungen zum Stichtag und ein Type-I-Bericht — hilfreich, wenn ein Kunde etwas in der Hand braucht, während der Beobachtungszeitraum läuft."
      ],
      [
        "Beobachtungszeitraum",
        "Der Zeitraum, den das Type-II-Urteil abdeckt — durchgehend wirkende Kontrollen, monatliche Nachweisprüfpunkte und vierteljährliche Rezertifizierungen. Drei bis zwölf Monate, und nicht stauchbar."
      ],
      [
        "Prüfung und Bericht",
        "Stichprobenanforderungen des Prüfers, Übergabe der Nachweise, Prüfungshandlungen, Abweichungen und Stellungnahme der Geschäftsführung, Durchsicht des Entwurfs und Berichtserteilung. <em>Meilenstein: Type-II-Bericht erteilt.</em>"
      ]
    ],
    callout: "Den Beobachtungszeitraum können Sie nicht verkürzen. Ein Type-II-Bericht sagt aus, dass Ihre Kontrollen über einen Zeitraum gewirkt haben — drei Monate Beobachtungszeitraum sind also drei Monate Kalenderzeit, die kein Budget zurückkauft. Der einzige Hebel ist der Startzeitpunkt, weshalb die bestätigte Readiness und nicht der Berichtstermin der Meilenstein ist, um den es sich zu kämpfen lohnt.",
    customize: [
      "Legen Sie zuerst die Länge des Beobachtungszeitraums fest — drei Monate für den ersten Bericht, sechs bis zwölf im Jahreszyklus — und setzen Sie den Balken entsprechend.",
      "Streichen Sie die Type-I-Phase ganz, wenn kein Kunde einen Zwischenbericht braucht; viele Organisationen gehen direkt auf Type II.",
      "Ergänzen Sie eine Zeile je Kategorie über Security hinaus; Availability, Confidentiality, Processing Integrity und Privacy bringen jeweils zusätzliche Kontrollen und Nachweise mit.",
      "Weiten Sie die Behebung nach der Readiness-Bewertung auf eine Zeile je Lücke aus, damit die technische Arbeit verfolgt und nicht zusammengefasst wird.",
      "Legen Sie die monatlichen Nachweisprüfpunkte als wiederkehrende Zeilen über den Zeitraum — fehlende Monate sind die häufigste Ursache für Abweichungen im Bericht.",
      "Setzen Sie Umfangsabstimmung, bestätigte Readiness, Beginn und Ende des Zeitraums sowie die Berichtserteilung als Meilensteine."
    ],
    tips: [
      "<strong>Starten Sie den Zeitraum erst, wenn die Behebung wirklich abgeschlossen ist.</strong> Eine im ersten Monat versagende Kontrolle ist eine Abweichung im Bericht; zwei Wochen später zu starten kostet zwei Wochen, zu früh zu starten kann den Bericht kosten.",
      "<strong>Automatisieren Sie die Nachweiserhebung vor Beginn des Zeitraums, nicht währenddessen.</strong> Drei Monate Rezertifizierungen nachträglich zu rekonstruieren, ist die schmerzhafteste Aufgabe eines SOC 2 — und Prüfer merken es meist.",
      "<strong>Fassen Sie den Umfang beim ersten Bericht eng.</strong> Security allein ist ein gültiger Umfang und wird von den meisten Kunden akzeptiert; jede weitere Kategorie vervielfacht Kontrollen und verlängert jede Phase.",
      "<strong>Beauftragen Sie den Prüfer früh.</strong> Seine Verfügbarkeit für die Prüfungshandlungen ist eine echte Nebenbedingung, und eine erst zum Ende gebuchte Kanzlei beginnt nicht in der Woche des Abschlusses.",
      "<strong>Rechnen Sie mit Abweichungen.</strong> Fast jeder Bericht enthält welche; entscheidend ist die Stellungnahme der Geschäftsführung, und die braucht Zeit im Plan, bevor der Entwurf finalisiert wird.",
      "<strong>Setzen Sie den Basisplan mit der bestätigten Readiness.</strong> Alles davor ist Behebung; danach ist der Zeitplan Rechnen plus die Terminlage des Prüfers."
    ],
    faq: [
      [
        "Wie lange dauert eine SOC-2-Compliance?",
        "Für einen ersten Type II üblicherweise 8 bis 12 Monate insgesamt: drei bis sechs Monate Vorbereitung und Behebung, dann ein Beobachtungszeitraum von drei bis zwölf Monaten, dann Prüfung und Bericht. Die Vorlage nutzt rund 16 Monate mit einem Zeitraum von sechs Monaten."
      ],
      [
        "Was ist der Unterschied zwischen SOC 2 Type I und Type II?",
        "Type I ist ein Urteil über das Kontrolldesign zu einem einzigen Stichtag; Type II ist ein Urteil über die Wirksamkeit über einen Zeitraum. Type II setzt den Beobachtungszeitraum voraus, dauert deshalb weit länger, und der Zeitraum hat hier eine eigene Phase."
      ],
      [
        "Wie lang sollte der Beobachtungszeitraum sein?",
        "Drei Monate sind das übliche Minimum für einen ersten Type II, sechs bis zwölf Monate sind im Jahreszyklus Standard. Kürzere Zeiträume gehen schneller, werden von manchen Kunden aber geringer bewertet."
      ],
      [
        "Geht ein SOC-2-Bericht auch schneller?",
        "Sie können die Vorbereitung verkürzen und einen Type I erteilen lassen, während der Zeitraum läuft. Den Zeitraum selbst können Sie nicht verkürzen — das ist der Teil des Plans, den niemand steuert."
      ],
      [
        "Ist die Vorlage für den SOC-2-Zeitplan kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Konto."
      ]
    ]
  },

  'manufacturing-production-schedule': {
    card: "Bedarf, Materialverfügbarkeit, Rüstwechsel, Fertigungslose, Prüfung, Versand.",
    h1: "Produktionsplan für die Fertigung",
    metaTitle: "Fertigung — Produktionsplan-Vorlage",
    metaDesc: "Kostenloser Produktionsplan für die Fertigung: Bedarfsplanung, Lieferzeiten, Losplanung, Rüstwechsel, Prüfung, Sperrbestand, Versand.",
    lead: "Eine kostenlose <strong>Vorlage für den Produktionsplan einer Fertigung</strong> für die Stückfertigung — Bedarfsplan und Produktionsprogramm, Materialbeschaffung gegen echte Lieferzeiten, Reihenfolgeplanung und Rüstwechsel, die Fertigungslose selbst, fertigungsbegleitende und abschließende Prüfung, danach Verpackung und Versand. Laden Sie sie für die Planungsrunde herunter oder öffnen Sie sie online, um zu sehen, ob Ihr Material vor der freien Linie da ist.",
    intro: "Ein Produktionsplan sind zwei Pläne, die zusammenkommen müssen: eintreffendes Material und verfügbare Kapazität. Die Vorlage führt beide als getrennte Stränge, damit der Zusammenstoß sichtbar wird, bevor er in der Fertigung passiert:",
    phases: [
      [
        "Bedarfs- und Kapazitätsplanung",
        "Durchsicht der Absatzprognose, feste Auftragseingänge, das Produktionsprogramm und eine grobe Kapazitäts- und Personalprüfung. <em>Meilenstein: Kapazität bestätigt.</em>"
      ],
      [
        "Materialbeschaffung",
        "Stücklistenauflösung und Bedarfsermittlung, Bestellungen, Lieferungen mit langer und normaler Vorlaufzeit, Wareneingang und Eingangsprüfung sowie die Bereitstellung an der Linie. <em>Meilenstein: Material verfügbar.</em>"
      ],
      [
        "Reihenfolgeplanung und Rüsten",
        "Feinplanung der Reihenfolge, Rüstplan, Vorbereitung von Werkzeugen und Vorrichtungen, der Rüstwechsel selbst und die Erstmusterprüfung. <em>Meilenstein: Erstmuster freigegeben.</em>"
      ],
      [
        "Fertigungslose",
        "Die Lose selbst, wobei die Rüstwechsel zwischen den Produkten als echte Vorgänge geplant und nicht wegdefiniert werden."
      ],
      [
        "Qualitätssicherung",
        "Fertigungsbegleitende Prüfung und statistische Prozessregelung, Sperrbestand und Entscheidung über die Verwendung, Endprüfung und die Dokumentation zur Chargenfreigabe. <em>Meilenstein: Charge freigegeben.</em>"
      ],
      [
        "Verpackung und Versand",
        "Verpacken und Etikettieren, Palettierung und Ladeplanung, Speditionsavis und Versandpapiere. <em>Meilenstein: Auftrag versandt.</em>"
      ]
    ],
    callout: "Rüstwechsel sind Produktionszeit. Ein Plan, der drei Lose direkt hintereinander und keine Rüstbalken zeigt, behauptet eine Kapazität, die es nicht gibt — und auf einer Linie mit häufigen Produktwechseln kann das Rüsten einen zweistelligen Anteil der verfügbaren Stunden ausmachen. Setzen Sie jeden Rüstwechsel mit seiner gemessenen Dauer auf den Plan, nicht mit der erhofften.",
    customize: [
      "Tragen Sie die echten Lieferzeiten je Komponente ein; die längste davon, nicht die Linienbelegung, bestimmt meist den frühesten möglichen Start.",
      "Ergänzen Sie eine Zeile je Arbeitsplatz oder Linie, wenn Sie mehrere planen, damit Belegungskonflikte sichtbar werden.",
      "Setzen Sie Rüstzeiten nach tatsächlich gemessenen Werten und halten Sie sie von den Losen davor und danach getrennt.",
      "Legen Sie einen Balken für den Sperrbestand ein, wo eine Charge auf die Entscheidung wartet — dieses Warten ist stillstehender Bestand.",
      "Ergänzen Sie Sicherheitsbestände oder Pufferbalken vor Losen, die eine feste Kundenzusage bedienen.",
      "Setzen Sie Materialverfügbarkeit, Erstmusterfreigabe, Chargenfreigabe und Versand als Meilensteine."
    ],
    tips: [
      "<strong>Planen Sie rückwärts vom Versandtermin.</strong> Die Kundenzusage ist der Fixpunkt; alles davor leitet sich daraus ab, statt von heute nach vorne geschoben zu werden.",
      "<strong>Planen Sie kein Los vor der freigegebenen Eingangsprüfung.</strong> Material auf dem Hof ist kein verfügbares Material, und der Start auf ungeprüfter Ware bringt am Ende die ganze Charge in den Sperrbestand.",
      "<strong>Erst auf minimale Rüstwechsel sortieren, dann die Termine prüfen.</strong> Die effizienteste Reihenfolge und die termingerechte Reihenfolge sind selten dieselbe; im Plan sehen Sie den Tausch.",
      "<strong>Geben Sie der Erstmusterprüfung einen eigenen Balken.</strong> Sie ist ein Tor, und ein vor der Freigabe gestartetes Los ist ein Los, das Sie unter Umständen verschrotten.",
      "<strong>Lassen Sie Puffer vor dem Versand.</strong> Speditionsavis und Ladefenster liegen außerhalb Ihrer Kontrolle, und eine erst am Abholmorgen freigegebene Charge hat keinen Raum für eine Nacharbeitsschleife.",
      "<strong>Setzen Sie den Basisplan mit dem eingefrorenen Programm.</strong> Sobald das Programm für die Periode eingefroren ist, verfolgen Sie die Abweichung, statt es still umzuschreiben."
    ],
    faq: [
      [
        "Was gehört in einen Produktionsplan?",
        "Bedarfs- und Kapazitätsplanung, Materialbeschaffung mit echten Lieferzeiten, Reihenfolgeplanung und Rüstwechsel, die Fertigungslose, Qualitätssicherung samt Sperrbestand sowie Verpackung und Versand. Alle sechs sind hier als eigene Phasen hinterlegt."
      ],
      [
        "Wie stelle ich Rüstwechsel im Gantt-Diagramm dar?",
        "Als eigene kurze Balken zwischen den Losen, wobei jedes Los vom Rüstwechsel davor abhängt. Das Rüsten im Losbalken zu verstecken überzeichnet Ihre verfügbare Kapazität — der häufigste Fehler in einem Produktionsplan."
      ],
      [
        "Passt die Vorlage auch für die Prozessfertigung?",
        "Am besten passt sie zur Stückfertigung — Chargen, Stück und Rüstwechsel. Für kontinuierliche Prozesse behalten Sie Beschaffung und Versand und ersetzen die Loszeilen durch Kampagnenbalken."
      ],
      [
        "Worin unterscheidet sie sich vom Produktionskalender für Bekleidung?",
        "Der <a href=\"/de/templates/apparel-production-calendar.html\">Bekleidungskalender</a> ist saisonal aufgebaut, mit Mustern und Stoffbuchungen gegen einen Liefertermin an den Handel. Diese Vorlage ist ein allgemeiner Plan der Stückfertigung rund um Lieferzeiten, Rüstwechsel und Versand."
      ],
      [
        "Ist die Vorlage für den Produktionsplan kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung."
      ]
    ]
  },

  'website-redesign-project-plan': {
    card: "Analyse, Inhalte, Design, Umsetzung, Migration, Weiterleitungen, Launch.",
    h1: "Projektplan für den Website-Relaunch",
    metaTitle: "Website-Relaunch — Projektplan",
    metaDesc: "Kostenloser Projektplan für den Website-Relaunch: Analyse, Inhaltsaudit, Design, Umsetzung, Migration, Weiterleitungen, QA, Launch.",
    lead: "Eine kostenlose <strong>Vorlage für den Projektplan eines Website-Relaunchs</strong> über das gesamte Projekt — Analyse, Informationsarchitektur und Inhaltsaudit, Design, Umsetzung, Inhaltsmigration, Weiterleitungskonzept für die Suchmaschinen, Qualitätssicherung und die Beobachtung nach dem Launch. Laden Sie sie für ein Agenturangebot oder den internen Auftakt herunter oder geben Sie online der Weiterleitungsliste und der Migration den Platz, den sie wirklich brauchen.",
    intro: "Relaunches scheitern selten am Design. Sie scheitern an den beiden unspektakulären Strängen, die niemand ausreichend besetzt — die Inhalte umziehen und die Adressen abbilden. Deshalb bekommen beide eine eigene Phase mit eigenen Abhängigkeiten:",
    phases: [
      [
        "Analyse",
        "Gespräche mit den Beteiligten, Auswertung von Webanalyse und Search Console, Wettbewerbs- und Nutzerrecherche sowie abgestimmte Anforderungen und Erfolgskennzahlen. <em>Meilenstein: Analyse freigegeben.</em>"
      ],
      [
        "Informationsarchitektur und Inhaltsaudit",
        "Vollständiges Verzeichnis aller Adressen durch einen Crawl, je Seite die Entscheidung behalten, zusammenführen oder abschalten, Seitenstruktur und Navigation sowie Wireframes der wichtigsten Seitentypen. <em>Meilenstein: Architektur freigegeben.</em>"
      ],
      [
        "Design",
        "Gestalterische Richtung, Designsystem und Komponenten, Entwürfe der Schlüsselseiten sowie die Durchsicht zu Responsivität und Barrierefreiheit. <em>Meilenstein: Design freigegeben.</em>"
      ],
      [
        "Umsetzung",
        "Umgebungen und CMS-Einrichtung, Entwicklung von Templates und Komponenten, Schnittstellen und Formulare sowie die Einrichtung der Webanalyse. <em>Meilenstein: Funktionsumfang vollständig.</em>"
      ],
      [
        "Inhaltsmigration",
        "Die Migrationsliste, Überarbeitung und Optimierung der Texte, Migration der Medien und das eigentliche Einspielen ins CMS. <em>Meilenstein: Redaktionsstopp auf der alten Website.</em>"
      ],
      [
        "Weiterleitungen und Suchmaschinen",
        "Zuordnung alter zu neuen Adressen für jede geänderte Seite, Aufbau und Test der Weiterleitungsregeln, Metadaten und strukturierte Daten, Canonicals und die XML-Sitemap. <em>Meilenstein: Weiterleitungsliste freigegeben.</em>"
      ],
      [
        "Qualitätssicherung",
        "Tests über Browser und Geräte, Prüfung der Barrierefreiheit, Core Web Vitals, ein vollständiger Weiterleitungs-Crawl auf der Staging-Umgebung und der Abnahmetest der Beteiligten. <em>Meilenstein: QA-Freigabe.</em>"
      ],
      [
        "Launch und Beobachtung",
        "Go-/No-go-Entscheidung, DNS-Umstellung, Kontrolle der Weiterleitungen nach dem Launch, Einreichen der Sitemap und dreißig Tage Beobachtung von Crawl-Fehlern und Rankings."
      ]
    ],
    callout: "Die Weiterleitungsliste ist das Projekt. Jede Adresse, die sich ohne 301-Weiterleitung ändert, ist Traffic, für den Sie bezahlt und den Sie dann weggeworfen haben — und der Schaden zeigt sich Wochen später, wenn die Rankings längst weg sind. Bauen Sie die Liste aus einem vollständigen Crawl der alten Website und nicht aus der neuen Sitemap, und testen Sie sie auf der Staging-Umgebung vor dem Launch, nicht danach.",
    customize: [
      "Beginnen Sie das Adressverzeichnis in der ersten Woche; der Crawl der bestehenden Website ist die Eingabe für Inhaltsaudit, Migrationsliste und Weiterleitungen.",
      "Ergänzen Sie eine Zeile je Inhaltstyp oder Bereich, wenn Sie tausende Seiten migrieren — ein einzelner Balken für die Migration versteckt immer einen Monat.",
      "Bemessen Sie die Textüberarbeitung ehrlich; sie ist meist der am stärksten unterschätzte Vorgang im ganzen Projekt und braucht Redaktion, nicht Entwicklung.",
      "Halten Sie einen Meilenstein für den Redaktionsstopp auf der alten Website, damit die Migration nicht einem beweglichen Ziel hinterherläuft.",
      "Machen Sie den Weiterleitungs-Crawl auf der Staging-Umgebung zum harten Vorgänger der Go-/No-go-Entscheidung statt zu einer Nettigkeit der Qualitätssicherung.",
      "Ziehen Sie die Beobachtung nach dem Launch auf mindestens dreißig Tage — Suchmaschinen brauchen Wochen, um eine geänderte Website neu zu erfassen."
    ],
    tips: [
      "<strong>Crawlen Sie die alte Website vor allem anderen.</strong> Sie können nichts auditieren, migrieren oder weiterleiten, was Sie nicht erfasst haben, und die meisten Organisationen haben deutlich mehr aktive Adressen als gedacht.",
      "<strong>Launchen Sie nicht am Freitag.</strong> Probleme mit Weiterleitungen und Indexierung zeigen sich innerhalb von Stunden und brauchen Leute, die sie beheben können.",
      "<strong>Testen Sie Weiterleitungen auf Staging mit der echten Liste.</strong> Eine Stichprobe von zehn Adressen beweist nichts; crawlen Sie die vollständige alte Adressliste gegen Staging und prüfen Sie jeden Statuscode.",
      "<strong>Lassen Sie die alte Webanalyse parallel weiterlaufen.</strong> Ohne vergleichbare Ausgangswerte können Sie nicht unterscheiden, ob ein Rückgang nach dem Launch saisonal oder selbst verursacht ist.",
      "<strong>Schreiben Sie die Texte, bevor die Templates fertig sind.</strong> Inhalte, die auf das Design warten, sind die häufigste Ursache dafür, dass ein Launchtermin zweimal verschoben wird.",
      "<strong>Setzen Sie den Basisplan mit der Designfreigabe.</strong> Davor bewegt sich der Umfang noch; danach ist die Abweichung das, worauf der Lenkungskreis schauen sollte."
    ],
    faq: [
      [
        "Wie lange dauert ein Website-Relaunch?",
        "Üblicherweise 4 bis 9 Monate für eine mittelgroße Website, bestimmt vor allem vom Umfang der Inhalte und nicht von Design oder Umsetzung. Die Vorlage nutzt rund neun Monate, die Sie über den Umfang stauchen können, nicht über die Migrationszeit."
      ],
      [
        "Was ist eine Weiterleitungsliste und warum ist sie wichtig?",
        "Eine Zuordnung jeder alten Adresse zu ihrer neuen, umgesetzt als 301-Weiterleitung. Ohne sie verliert jede geänderte Adresse ihre aufgebaute Sichtbarkeit in der Suche und jeden eingehenden Link. Genau deshalb hat sie hier eine eigene Phase."
      ],
      [
        "Wann sollte die Inhaltsmigration beginnen?",
        "Sobald das Inhaltsaudit steht und die Migrationsliste existiert — deutlich vor dem Ende der Umsetzung. Inhalte sind der lange Balken, und erst nach fertigen Templates zu beginnen kostet Monate."
      ],
      [
        "Was sollte ich nach dem Launch beobachten?",
        "Crawl-Fehler und 404-Seiten, die Indexabdeckung, die Rankings Ihrer wichtigsten Begriffe und den organischen Traffic gegen die Ausgangswerte vor dem Launch, mindestens dreißig Tage lang. Alle vier stehen als echte Vorgänge im Plan."
      ],
      [
        "Ist die Vorlage für den Website-Relaunch kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online — ohne Konto und ohne Wasserzeichen."
      ]
    ]
  },

  'hotel-refurbishment-schedule': {
    card: "Etagenweise Schließungen, Zimmerausfall, Lärmfenster, Aufzüge, öffentliche Bereiche.",
    h1: "Terminplan für die Hotelsanierung im laufenden Betrieb",
    metaTitle: "Hotelsanierung — Terminplan-Vorlage",
    metaDesc: "Kostenloser Terminplan für die Hotelsanierung im laufenden Betrieb: Etagenschließungen, Zimmerausfall, Lärmfenster, Aufzüge, Abnahme.",
    lead: "Eine kostenlose <strong>Terminplan-Vorlage für die Hotelsanierung</strong> für ein Haus, das während des Umbaus weiter verkauft — etagenweise Schließungen, der Zimmerausfall und der Erlös, den jede Schließung kostet, Lärmfenster rund um die Gästezeiten, die vertikale Abfolge von Steigeschächten und Aufzügen sowie die öffentlichen Bereiche in der Nebensaison. Laden Sie sie für Eigentümer oder Asset Management herunter oder öffnen Sie sie online, um zu sehen, wie viele Zimmer Sie Monat für Monat tatsächlich aus dem Verkauf nehmen.",
    intro: "Die Sanierung eines laufenden Hotels ist eine Baustelle mit einem mitlaufenden Erlöszähler daneben. Der Plan ordnet die Gewerke nach der Belegung, nicht nach der Verfügbarkeit der Firmen:",
    phases: [
      [
        "Machbarkeit und Ertragsplanung",
        "Bestandsaufnahme und Schadstoffkataster, Leistungsumfang und Markenstandard, das Modell des Zimmerausfalls und die daraus abgeleitete Schließungsstrategie samt Investitionsrechnung. <em>Meilenstein: Investition freigegeben.</em>"
      ],
      [
        "Planung und Vergabe",
        "Entwurfs- und Ausführungsplanung über die HOAI-Leistungsphasen, FF&amp;E-Spezifikation und Bemusterung, ein vollständiges Musterzimmer sowie die Vergabe nach VOB/A mit Lieferzeiten, die darüber entscheiden, wann die erste Etage schließen kann. <em>Meilenstein: Musterzimmer freigegeben.</em>"
      ],
      [
        "Back-of-House und Aufzüge",
        "Aufmaß der Steigeschächte und Trassen, Aufzugsmodernisierung Kabine für Kabine mit Prüfung durch die zugelassene Überwachungsstelle nach BetrSichV, Personalbereiche, Technikzentrale und Kälteerzeugung — die Arbeiten, die jede Etage betreffen und die man kein zweites Mal macht."
      ],
      [
        "Etagenschließungen",
        "Etagen nacheinander aus dem Verkauf genommen, entkernt, ausgebaut, Mängel abgearbeitet und wieder in die Vermarktung gegeben. <em>Meilenstein: letzte Gästeetage übergeben.</em>"
      ],
      [
        "Öffentliche Bereiche und Gastronomie",
        "Lobby, Restaurant, Bar, Tagungsräume und Spa in der Nebensaison, mit Interimslösungen für die Gäste in der Zwischenzeit sowie dem Brandschutznachweis und der Abnahme, die Tagungsflächen nach der Versammlungsstättenverordnung brauchen."
      ],
      [
        "Übergabe und Wiedervermarktung",
        "Inbetriebnahme der Technik, förmliche Abnahme nach VOB/B, Schulung der Mannschaft auf das neue Produkt, Fotoproduktion, Neupositionierung der Raten und die Rückkehr zur vollen Kapazität. <em>Meilenstein: volle Zimmerverfügbarkeit.</em>"
      ]
    ],
    callout: "Bewerten Sie jede Schließung in Zimmernächten, bevor Sie irgendetwas terminieren. Eine Etage mit 30 Zimmern, acht Wochen geschlossen, sind rund 1.700 Zimmernächte, die Sie nicht verkaufen — und diese Schließung von Juli in den Februar zu verlegen ist oft mehr wert als der gesamte Nachlass, den Sie gerade mit dem Bauunternehmen verhandeln. Das Ausfallmodell gehört an den Anfang des Terminplans, nicht in den Anhang.",
    customize: [
      "Ersetzen Sie die Etagenzeilen durch Ihre echten Zimmerzahlen und Schließungsdauern und summieren Sie die ausgefallenen Zimmernächte je Monat gegen Ihre Prognose.",
      "Legen Sie die öffentlichen Bereiche in Ihre tatsächliche Nebensaison — die ist bei den meisten Häusern deutlich kürzer, als die Jahresplanung glauben macht.",
      "Setzen Sie das Lärmfenster auf die Zeiten, die der Betrieb wirklich verteidigen kann, und halten Sie Bohren, Abbruch und Kernbohrungen konsequent darin.",
      "Führen Sie je Aufzug eine eigene Zeile; alle Kabinen gleichzeitig stillzulegen ist in einem laufenden Haus praktisch nie vertretbar.",
      "Ergänzen Sie einen Umzugsplan, wenn Gäste während des Aufenthalts verlegt werden müssen, und besetzen Sie ihn — das ist echte Arbeit an der Rezeption, kein Rundungsfehler.",
      "Markieren Sie Investitionsfreigabe, Musterzimmer, Übergabe der letzten Etage und volle Verfügbarkeit als Meilensteine."
    ],
    tips: [
      "<strong>Bauen Sie das Musterzimmer, bevor Sie bestellen.</strong> Es ist die einzige günstige Gelegenheit zu merken, dass das Tischlerwerk nicht passt, die Steckdosen falsch sitzen und das Baddetail undicht ist — und der Betrieb sollte darin übernachten.",
      "<strong>Schließen Sie keine zwei Etagen übereinander, solange das Modell das nicht hergibt.</strong> Verdichtung über den Preis funktioniert genau so lange, bis keine Zimmer mehr da sind, in die verdichtet werden kann.",
      "<strong>Planen Sie vertikal, nicht horizontal.</strong> Steigeschächte, Abwasserstränge und Aufzugsschächte laufen durch alle Geschosse; führen Sie die Technikarbeiten als eine durchgehende vertikale Kampagne statt sie je Etage zu wiederholen.",
      "<strong>Schützen Sie den Gästeweg.</strong> Baustellenzugang, Einhausung, Entsorgung und Materialtransport brauchen einen Weg, der die Lobby während der Anreisezeiten nie kreuzt; diese Randbedingung gehört in den Plan, weil sie die Schichten bestimmt.",
      "<strong>Halten Sie immer einen Aufzug für Gäste frei.</strong> Die Aufzugsmodernisierung erzeugt mehr Beschwerden und Minderungen als jedes andere Gewerk, und die Kabinen nacheinander zu machen kostet Wochen, rettet aber die Bewertungen.",
      "<strong>Setzen Sie den Basisplan mit der Freigabe des Musterzimmers.</strong> Davor bewegt sich der Umfang noch; danach hat jede Woche Verzug einen bezifferbaren Preis in Zimmernächten."
    ],
    faq: [
      [
        "Wie lange dauert eine Hotelsanierung im laufenden Betrieb?",
        "Bei einem mittelgroßen Haus üblicherweise 12 bis 24 Monate, weil die Etagen nacheinander und nicht gleichzeitig geschlossen werden. Die Vorlage nutzt achtzehn Monate, die Sie durch mehr gleichzeitig geschlossene Zimmer stauchen können — zu einem Preis in Erlös."
      ],
      [
        "Wäre eine Vollschließung nicht besser?",
        "Manchmal, und genau das beantwortet das Ausfallmodell. Eine Vollschließung baut schneller und günstiger, gibt aber den gesamten Umsatz auf und riskiert Firmenkunden und Personal. Rechnen Sie beide Varianten; diese Vorlage bildet die abschnittsweise Sanierung ab."
      ],
      [
        "Wie plane ich laute Arbeiten in einem belegten Haus?",
        "Vereinbaren Sie ein festes Tagesfenster — meist später Vormittag bis später Nachmittag — und behandeln Sie es als harte Randbedingung des Bauablaufs, nicht als Bitte an die Firma. Lärm außerhalb dieses Fensters ist der Grund, warum Gäste den Preis mindern, und diese Minderung ist teurer als die eingesparte Bauzeit."
      ],
      [
        "Worin unterscheidet sie sich von der Pre-Opening-Vorlage?",
        "Diese hier ist für ein Haus, das jetzt verkauft. Wenn Sie ein Neubauhotel ohne Gäste in Betrieb nehmen, nutzen Sie den <a href=\"/de/templates/hotel-pre-opening-critical-path.html\">Pre-Opening-Terminplan</a> — der ist um die Eröffnungsbereitschaft herum gebaut, nicht um Schließungen."
      ],
      [
        "Ist die Vorlage für die Hotelsanierung kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Konto und ohne Wasserzeichen."
      ]
    ]
  },

  'port-terminal-construction-schedule': {
    card: "Baggern, Aufspülung, Kaimauer, Kranbahn, Containerbrücken, Lagerfläche, TOS.",
    h1: "Bauzeitenplan für ein Hafenterminal",
    metaTitle: "Hafenterminal — Bauzeitenplan",
    metaDesc: "Kostenloser Bauzeitenplan Hafenterminal: Planfeststellung, Baggern, Kaimauer, Kranbahn, Containerbrücken, Lagerfläche und TOS. Excel oder online.",
    lead: "Eine kostenlose <strong>Bauzeitenplan-Vorlage für ein Hafenterminal</strong>, die die wasserseitigen und die landseitigen Arbeiten zusammen führt — Planfeststellung und wasserrechtliche Genehmigungen, Nassbaggerung und Verbringung des Baggerguts, Aufspülung, Kaimauer, Bodenverbesserung und Kranbahn, Anlieferung und Inbetriebnahme der Containerbrücken, Flächenbefestigung und das Terminal Operating System. Laden Sie sie für die Vorlage im Aufsichtsrat oder bei der Hafenbehörde herunter oder öffnen Sie sie online, um die Gewerke gegen Ihre Wetterfenster zu legen.",
    intro: "Ein Containerterminal sind drei Projekte auf einer Fläche: ein Wasserbauprojekt, ein Tiefbauprojekt und ein Systemprojekt. Der Plan hält sie als getrennte Stränge sichtbar, weil sie von völlig verschiedenen Dingen abhängen:",
    phases: [
      [
        "Untersuchungen und Genehmigungen",
        "Peilung und Baugrunderkundung, Umweltverträglichkeitsprüfung, Planfeststellungsverfahren, wasserrechtliche Erlaubnis und die Zulassung der Verbringung des Baggerguts. <em>Meilenstein: Planfeststellungsbeschluss.</em>"
      ],
      [
        "Baggerung und Aufspülung",
        "Kapitalbaggerung innerhalb des saisonalen Fensters, Verbringung auf die zugelassene Fläche, Aufspülung sowie die Auflast- und Setzungszeit, die niemand verkürzen kann."
      ],
      [
        "Kaimauer und Liegeplatz",
        "Spundwand oder Senkkästen, Holmbalken, Fender und Poller sowie die Baggerung der Hafensohle auf Solltiefe. <em>Meilenstein: Liegeplatz verfügbar.</em>"
      ],
      [
        "Kranbahn und Lagerfläche",
        "Bodenverbesserung, Kranbahnbalken und Schienen, Flächenbefestigung, Entwässerung, Lichtmasten sowie Reeferplätze und Torhaus."
      ],
      [
        "Containerbrücken und Geräte",
        "Fertigung, Reise des Schwergutschiffs und sein Liegeplatzfenster, Löschen, Montage, Lastprobe mit Abnahme durch die Prüfstelle und Anlieferung der Umschlaggeräte. <em>Meilenstein: Brücken abgenommen.</em>"
      ],
      [
        "TOS und Inbetriebnahme",
        "Konfiguration des Terminal Operating System, Anbindung von Torhaus und OCR, Zollschnittstelle zu ATLAS, Funk- und Netzabdeckung, Schulung, Probeanlauf und kommerzielle Eröffnung. <em>Meilenstein: erster kommerzieller Anlauf.</em>"
      ]
    ],
    callout: "Der Bagger und das Schwergutschiff gehören Ihnen nicht. Beide sind Monate im Voraus in eine weltweite Flottenplanung eingebucht, beide brauchen ein Wetterfenster und einen Liegeplatz, der am Tag X fertig ist. Wer den Slot verpasst, wartet keine Woche, sondern auf die nächste Mobilisierung — und das kann eine Saison sein. Zeichnen Sie die Ankunftsfenster als feste Balken und entwickeln Sie die umliegenden Arbeiten rückwärts daraus.",
    customize: [
      "Legen Sie die Baggerkampagne in das reale saisonale Fenster Ihres Reviers und prüfen Sie dann, ob die Menge bei der Förderleistung des Geräts überhaupt hineinpasst.",
      "Verlängern Sie den Balken für Auflast und Setzung auf das, was das Baugrundgutachten verlangt; das ist ein physikalischer Vorgang, den Termindruck nicht beschleunigt.",
      "Führen Sie je Containerbrücke eine Zeile, wenn sie auf getrennten Reisen kommen, und markieren Sie jede Schiffsankunft als Meilenstein.",
      "Teilen Sie die Lagerfläche in Blöcke, wenn Sie abschnittsweise in Betrieb gehen statt das ganze Terminal auf einmal zu öffnen.",
      "Ziehen Sie die TOS-Arbeiten nach vorn — die Software hängt an keinem Beton und wird regelmäßig viel zu spät begonnen.",
      "Markieren Sie Planfeststellungsbeschluss, Liegeplatz verfügbar, Brücken abgenommen und ersten kommerziellen Anlauf als Meilensteine; das sind die vier Termine, die eine Hafenbehörde verfolgt."
    ],
    tips: [
      "<strong>Die Genehmigung steuert die Baggerung, und die Baggerung steuert alles Wasserseitige.</strong> Vor allem die Zulassung der Verbringungsfläche ist ein langes Verfahren bei Dritten ohne Beschleuniger und sollte beginnen, bevor die Planung fertig ist.",
      "<strong>Überlappen Sie das Schwergutschiff nicht mit der Fertigstellung der Kaimauer.</strong> Die Kranbahn muss eingemessen, ausgerichtet und belastungsgeprüft sein, bevor eine Brücke an Land laufen kann; diese Vermessung ist ein harter Vorgänger.",
      "<strong>Planen Sie die Setzung ein, statt sie zu unterstellen.</strong> Aufgespülter Boden unter einer Containerfläche braucht eine überwachte Auflastphase; wer zu früh befestigt, hat in zwei Jahren eine Fläche zum Sanieren.",
      "<strong>Beginnen Sie die TOS-Konfiguration während des Tiefbaus.</strong> Ein Terminalsystem braucht Stammdaten, Flächenlayout, Torregeln sowie Schnittstellen zu Reedereien und Zoll — nichts davon hängt an der fertigen Fläche.",
      "<strong>Planen Sie einen Probeanlauf.</strong> Ein geübter Anlauf mit einer wohlgesonnenen Reederei findet die Probleme an Tor, Brücke, System und Personal, die ein kommerzieller Erstanlauf teuer finden würde.",
      "<strong>Setzen Sie den Basisplan mit dem verfügbaren Liegeplatz.</strong> Der Wasserbau trägt die größte Schätzunsicherheit im Projekt; sobald der Liegeplatz steht, ist der landseitige Ablauf deutlich belastbarer."
    ],
    faq: [
      [
        "Wie lange dauert der Bau eines Containerterminals?",
        "Ein Neubau läuft üblicherweise 3 bis 5 Jahre vom Planfeststellungsbeschluss bis zum ersten kommerziellen Anlauf; Baggerung, Setzungszeit und Kranlieferung bestimmen die Obergrenze. Die Vorlage nutzt rund drei Jahre, die Sie über die wasserseitigen Phasen strecken können."
      ],
      [
        "Was liegt bei einem Hafenprojekt üblicherweise auf dem kritischen Pfad?",
        "Zuerst die Genehmigungen und das Zeitfenster des Baggers, dann die Setzung der Aufspülung, dann Fertigung und Transport der Containerbrücken. Kaum etwas davon liegt beim Bauunternehmen, und genau deshalb steht jeder dieser Punkte als eigener Balken im Plan."
      ],
      [
        "Wie lange dauert die Lieferung von Containerbrücken?",
        "Die Fertigung läuft typischerweise 12 bis 18 Monate ab Bestellung, dazu die Schiffsreise sowie mehrere Wochen Montage, Lastprobe und Inbetriebnahme je Gerät. Die Bestellung ist eine Terminentscheidung, keine Beschaffungsentscheidung."
      ],
      [
        "Passt die Vorlage auch für eine Terminalerweiterung?",
        "Ja. Lassen Sie die Aufspülung weg und behalten Sie Hafensohle, Kranbahn, Kranlieferung und TOS — dort spielt sich eine Erweiterung überwiegend ab, mit der zusätzlichen Randbedingung des laufenden Betriebs nebenan."
      ],
      [
        "Ist die Vorlage für das Hafenterminal kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung."
      ]
    ]
  },

  'rail-signalling-upgrade-plan': {
    card: "Planung, Stellwerksdaten, Werksabnahme, Sperrpausen, Montage, Inbetriebnahme.",
    h1: "Projektplan für den Umbau der Leit- und Sicherungstechnik",
    metaTitle: "Signaltechnik-Umbau — Projektplan",
    metaDesc: "Kostenloser Projektplan für ESTW- und ETCS-Umbauten: Planung, Stellwerksdaten, Werksabnahme, Sperrpausen, Montage, Prüfung, Inbetriebnahme.",
    lead: "Eine kostenlose <strong>Projektplan-Vorlage für den Umbau der Leit- und Sicherungstechnik</strong>, gebaut um die Sperrpausen — Vorplanung und Ausführungsplanung, Aufbereitung und unabhängige Prüfung der Stellwerksdaten, Werksabnahme, Anmeldung der Sperrpausen zum Fahrplanverfahren, Montage innerhalb der gebuchten Sperrpause, Prüfung und Inbetriebnahme sowie die Genehmigung durch das Eisenbahn-Bundesamt. Laden Sie sie für eine Quality-Gate-Vorlage herunter oder öffnen Sie sie online, um zu prüfen, ob die geplante Arbeit wirklich in die bewilligten Stunden passt.",
    intro: "Ein Stellwerksprojekt ist ein Büroprojekt mit einer Handvoll Wochenenden in der Mitte, an denen alles Körperliche passiert. Der Plan behandelt diese Wochenenden als feste, unverrückbare Gefäße und ordnet alles andere darum herum:",
    phases: [
      [
        "Planung",
        "Machbarkeit, Signallageplan und Spurplan, Verschlusstabellen, Schnittstellen zu Oberbau, Bahnstrom und Telekommunikation sowie die Planprüfung durch den Prüfsachverständigen. <em>Meilenstein: Planung geprüft und freigegeben.</em>"
      ],
      [
        "Stellwerksdaten und Werksabnahme",
        "Aufbereitung der Projektierungsdaten, unabhängige Datenprüfung nach Regelwerk, Simulation und die Werksabnahme des Stellwerks, bevor irgendetwas das Werk verlässt. <em>Meilenstein: Werksabnahme bestanden.</em>"
      ],
      [
        "Baubetriebsplanung",
        "Anmeldung der Sperrpausen zu den Fristen des Bauplanungsverfahrens, Buchung der Betriebsanweisungen, Umleitungs- und Schienenersatzverkehrskonzept sowie die Freigabe der Sperrpausenstrategie. <em>Meilenstein: Sperrpausen bestätigt.</em>"
      ],
      [
        "Vorbereitung und Montage",
        "Kabeltrassen, Schalthäuser, Kabeltiefbau und Fundamente in den betriebsarmen Nächten, danach Gerätemontage und Umklemmung innerhalb der gebuchten Sperrpausen."
      ],
      [
        "Prüfung und Inbetriebnahme",
        "Kabel- und Montageprüfung, Prinzipprüfung, Funktions- und Gesamtprüfung, Streckenkenntnis für die Triebfahrzeugführer sowie das Inbetriebnahmewochenende selbst. <em>Meilenstein: Anlage in Betrieb genommen.</em>"
      ],
      [
        "Betriebsaufnahme",
        "Übergabe an die Betriebszentrale, Rückfallebene und Notfallkonzept, die störungsfreie Beobachtungszeit und der Abschluss des Sicherheitsnachweises gegenüber dem Eisenbahn-Bundesamt. <em>Meilenstein: Inbetriebnahmegenehmigung.</em>"
      ]
    ],
    callout: "Die Sperrpause ist der Terminplan. Betriebliche Sperrungen werden gegen die Fristen des Fahrplanverfahrens ein Jahr und mehr im Voraus angemeldet, und nach der Buchung lautet die Frage nicht mehr „wann bauen wir“, sondern „passt die Arbeit in die Stunden, die wir bekommen haben“. Planen Sie jede Sperrpause rückwärts vom Zeitpunkt der Streckenrückgabe, mit der Prüfung am Ende und einem festen Punkt, ab dem Sie abbrechen und die Strecke unabhängig vom Baufortschritt zurückgeben.",
    customize: [
      "Tragen Sie zuerst Ihre echten Sperrpausentermine ein und fixieren Sie sie; jeder andere Balken in diesem Plan verhandelt um sie herum.",
      "Führen Sie je Sperrpause eine Zeile mit der tatsächlichen Dauer in Stunden statt in Tagen — ein 52-Stunden-Wochenende und ein 29-Stunden-Wochenende sind zwei verschiedene Projekte.",
      "Verlagern Sie so viel wie möglich aus der Sperrpause heraus; alles, was vorverkabelt, vorgeprüft oder vormontiert werden kann, gehört nach draußen.",
      "Verlängern Sie die Balken für Datenaufbereitung und Datenprüfung bei großen Stellbereichen — die unabhängige Prüfung ist ein vorgeschriebener, langsamer Vorgang und lässt sich nicht mit sich selbst parallelisieren.",
      "Setzen Sie zwei Wochen vor jeder Inbetriebnahme ein formales Go-/No-go mit Werksabnahme, Prüfbereitschaft und Personalqualifikation als Vorgängern.",
      "Markieren Sie Planfreigabe, bestandene Werksabnahme, bestätigte Sperrpausen, Inbetriebnahme und Inbetriebnahmegenehmigung als Meilensteine."
    ],
    tips: [
      "<strong>Melden Sie die Sperrpausen an, bevor die Planung fertig ist.</strong> Die Anmeldefrist wartet nicht auf Ihren Projektfortschritt, und ein Vorhaben, das das Fahrplanfenster verpasst, verliert ein Jahr, nicht einen Monat.",
      "<strong>Prüfen Sie im Werk, nicht auf der Strecke.</strong> Jeder in der Werksabnahme gefundene Fehler ist ein Fehler, den Sie nicht um drei Uhr morgens mit näher rückender Rückgabezeit suchen müssen.",
      "<strong>Schreiben Sie zuerst das Rückgabekonzept.</strong> Jede Sperrpause braucht einen definierten Punkt ohne Wiederkehr, ab dem Sie die Montage einstellen und den Altzustand wiederherstellen — das entscheidet man im Büro, nicht in der Nacht.",
      "<strong>Schützen Sie die Prinzipprüfung.</strong> Sie ist der sicherheitsrelevante Schritt, der bei Montageverzug am stärksten unter Druck gerät, und genau der, der niemals gekürzt werden darf.",
      "<strong>Planen Sie die Streckenkenntnis früh.</strong> Qualifizierung und Einweisung brauchen Triebfahrzeugführer, die aus dem Dienstplan freigestellt werden — eine eigene Ressourcenverhandlung mit eigener Vorlaufzeit.",
      "<strong>Setzen Sie den Basisplan mit den bestätigten Sperrpausen.</strong> Davor sind die Termine Absichten; danach sind die Fixpunkte real und die Abweichung dagegen ist die Zahl, die zählt."
    ],
    faq: [
      [
        "Wie lange dauert ein Stellwerksumbau?",
        "Die Erneuerung eines einzelnen Stellbereichs läuft üblicherweise 18 bis 36 Monate von der Machbarkeit bis zur Betriebsaufnahme, wovon nur wenige Wochenenden tatsächlich auf der Strecke stattfinden. Die Vorlage nutzt rund zwei Jahre, die Sie durch weitere Sperrpausen strecken können."
      ],
      [
        "Was ist eine Sperrpause?",
        "Ein gebuchter Zeitraum, in dem ein Streckenabschnitt für den Verkehr gesperrt ist, damit daran gearbeitet werden kann. Sperrpausen werden gegen die Fristen der Fahrplan- und Baubetriebsplanung viele Monate im Voraus angemeldet — deshalb verhalten sie sich wie feste Randbedingungen und nicht wie planbare Vorgänge."
      ],
      [
        "Warum liegt die Aufbereitung der Stellwerksdaten auf dem kritischen Pfad?",
        "Weil die Projektierungsdaten aufbereitet, unabhängig geprüft und in Simulation sowie Werksabnahme nachgewiesen werden müssen, bevor sie eingespielt werden dürfen; jeder dieser Schritte ist vorgeschrieben und folgt dem vorherigen. Langsame Büroarbeit entscheidet also, ob das Inbetriebnahmewochenende stattfinden kann."
      ],
      [
        "Passt die Vorlage auch für einen Bahnübergang oder ein ETCS-Vorhaben?",
        "Ja. Die Struktur um die Sperrpausen herum bleibt gleich — kürzen Sie die Datenzeilen und behalten Sie Planung, Baubetriebsplanung, Montage, Prüfung und Betriebsaufnahme. Für ETCS-Ausrüstungen kommen Streckenzentrale und Fahrzeugseite als eigene Stränge hinzu."
      ],
      [
        "Ist die Vorlage für die Leit- und Sicherungstechnik kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung."
      ]
    ]
  },

  'pharma-product-launch-plan': {
    card: "Zulassung, Validierungschargen, Serialisierung, AMNOG-Verfahren, Marktsequenz.",
    h1: "Projektplan für den Launch eines Arzneimittels",
    metaTitle: "Pharma-Launch — Projektplan-Vorlage",
    metaDesc: "Kostenloser Launch-Plan Pharma: Zulassungsantrag, Validierungschargen, Serialisierung, AMNOG-Nutzenbewertung, Erstattungsbetrag, Marktsequenz.",
    lead: "Eine kostenlose <strong>Projektplan-Vorlage für den Pharma-Launch</strong> für die Strecke zwischen abgeschlossener Studie und Produkt in der Apotheke — Zulassungsdossier und Einreichung, die Verfahrensuhr bei der Behörde, Maßstabsvergrößerung und Validierungschargen, Serialisierung und marktspezifische Kennzeichnung, Nutzendossier und Erstattungsverhandlung, Medical Affairs sowie die Reihenfolge der Ländermärkte. Laden Sie sie für ein Launch-Readiness-Review herunter oder öffnen Sie sie online, um zu sehen, wovon Ihr Termin im ersten Markt wirklich abhängt.",
    intro: "Alles Kommerzielle an einem Pharma-Launch hängt an zwei Dingen, die Sie nicht steuern: einem Zulassungsbescheid und einer Erstattungsentscheidung. Der Plan stellt beide als Balken mit Nachfolgern dar statt als Annahmen auf einer Folie:",
    phases: [
      [
        "Zulassung",
        "Dossiererstellung, Beratungsgespräch mit der Behörde, Einreichung im zentralisierten Verfahren oder national bei BfArM beziehungsweise Paul-Ehrlich-Institut, die Verfahrensuhr sowie Fragen und Antworten. <em>Meilenstein: Zulassung erteilt.</em>"
      ],
      [
        "Herstellung und CMC",
        "Maßstabsvergrößerung, Bereitstellung des Standorts, drei Validierungschargen, Stabilitätsdaten, GMP-Inspektion vor der Zulassung und die Freigabe der Launch-Ware durch die Qualified Person. <em>Meilenstein: Launch-Ware freigegeben.</em>"
      ],
      [
        "Serialisierung und Kennzeichnung",
        "Packmittelgestaltung je Markt, Übersetzungen, Aufbau von Serialisierung und Aggregation, Anbindung an securPharm und das europäische Verifikationssystem sowie die Qualifizierung der Verpackungslinie."
      ],
      [
        "Preis und Erstattung",
        "Nutzendossier nach § 35a SGB V, Nutzenbewertung durch den Gemeinsamen Bundesausschuss, Verhandlung des Erstattungsbetrags mit dem GKV-Spitzenverband, gegebenenfalls Schiedsstelle sowie die Listung in der Lauer-Taxe. <em>Meilenstein: Erstattungsbetrag vereinbart.</em>"
      ],
      [
        "Medical Affairs und Evidenz",
        "Publikationsplan, Advisory Boards, Zusammenarbeit mit Experten, Fortbildungsangebote, Versorgungsforschung und die medizinische Auskunft."
      ],
      [
        "Kommerzieller Launch je Markt",
        "Aufbau und Schulung des Außendienstes, Launch-Meeting, Markteinführung im ersten Markt, danach die zweite und dritte Welle, sobald Zulassungen und Erstattungsentscheidungen vorliegen. <em>Meilenstein: erster Umsatz.</em>"
      ]
    ],
    callout: "Zulassung ist nicht Launch. In Deutschland darf ab dem Inverkehrbringen zwar sofort verkauft werden, aber die freie Preisbildung gilt nur noch für sechs Monate; danach greift der verhandelte Erstattungsbetrag, und die Nutzenbewertung dafür startet mit dem Dossier am Tag des Markteintritts. Planen Sie deshalb pro Markt zwei Termine — Zulassung und Erstattung — und lassen Sie eine Umsatzprognose nie stillschweigend annehmen, dass beide auf denselben Tag fallen.",
    customize: [
      "Setzen Sie Ihr Einreichungsdatum und lassen Sie die Verfahrensuhr davon vorwärts laufen; die Dauer der Behörde ist gesetzt, nur Ihre Antwortzeiten darin gehören Ihnen.",
      "Vervielfältigen Sie die Zeilen für Kennzeichnung, Erstattung und Launch je Markt — jeder hat eine eigene Behörde, eine eigene Sprache und einen eigenen Erstattungsweg.",
      "Beginnen Sie die Validierungschargen früher, wenn das Verfahren neu ist; drei erfolgreiche Chargen plus Stabilitätsdaten sind eine lange Kette ohne Abkürzung.",
      "Planen Sie ein echtes Zeitfenster für die Vorbereitung der GMP-Inspektion; eine Beanstandung am Standort ist der schnellste Weg, ein Launch-Quartal zu verlieren.",
      "Hängen Sie den Aufbau des Außendienstes an den Zulassungsmeilenstein, sofern Sie ein wartendes Team nicht tragen können oder wollen.",
      "Markieren Sie Einreichung, Zulassung, Freigabe der Launch-Ware, vereinbarten Erstattungsbetrag und ersten Umsatz als Meilensteine."
    ],
    tips: [
      "<strong>Produzieren Sie Launch-Ware vor der Zulassung und entscheiden Sie das Abschreibungsrisiko bewusst.</strong> Erst nach dem Bescheid zu produzieren kostet Monate leeres Regal; die frühe Festlegung sollte die Geschäftsführung ausdrücklich treffen und nicht der Terminplan nebenbei.",
      "<strong>Bereiten Sie das Nutzendossier parallel zur Zulassungsprüfung vor.</strong> Die Evidenz überschneidet sich, die Adressaten nicht — und mit der Marktzugangsarbeit erst nach der Zulassung zu beginnen macht aus einem Launch ein Warten.",
      "<strong>Behandeln Sie die Serialisierung als Systemprojekt.</strong> Marktspezifische Codierung, Aggregation und die Anbindung an das Verifikationssystem müssen mit echten Packungen getestet werden; sie versagt leise und fällt erst bei der ersten Auslieferung auf.",
      "<strong>Wählen Sie die Marktreihenfolge bewusst.</strong> Ein früher Launch in einem Referenzpreisland kann die Preise anderswo für Jahre verankern, und diese Reihenfolge ist eine kommerzielle Entscheidung, die auf den Plan gehört.",
      "<strong>Halten Sie Medical Affairs vor dem Vertrieb.</strong> Publikationen, Advisory Boards und Fortbildung brauchen Vorlauf und lassen sich nicht in die Wochen nach der Zulassung pressen, in denen die Bewerbung beginnt.",
      "<strong>Setzen Sie den Basisplan mit der Einreichung.</strong> Alles davor ist Entwicklungsschätzung; danach ist der Terminplan eine Warteschlange, die Sie präzise verfolgen können."
    ],
    faq: [
      [
        "Wie lange dauert der Launch eines Arzneimittels?",
        "Üblicherweise 18 bis 30 Monate von der Einreichung bis zum ersten Umsatz; die Prüfung dauert in den großen Verfahren rund ein Jahr, die Nutzenbewertung sechs Monate und die Erstattungsverhandlung noch einmal sechs. Die Vorlage nutzt rund zwei Jahre, die Sie je Markt anpassen können."
      ],
      [
        "Wo beginnt die Vorlage im Verhältnis zur klinischen Studie?",
        "Sie setzt an, wo die Studie endet. Datenbankschluss, Auswertung und Studienbericht gehören in das <a href=\"/de/templates/clinical-trial-gantt-chart.html\">Gantt-Diagramm für klinische Studien</a>; diese Vorlage beginnt mit der Dossiererstellung und läuft bis zum ersten Umsatz."
      ],
      [
        "Warum sind Preis und Erstattung eine eigene Phase?",
        "Weil die Zulassung nur das Recht zum Verkauf gibt, nicht die wirtschaftliche Grundlage dafür. Nutzenbewertung und Erstattungsverhandlung sind eigenständige Verfahren mit eigenen Fristen, und sie entscheiden darüber, zu welchem Preis das Produkt dauerhaft verfügbar ist."
      ],
      [
        "Wie plane ich einen Launch über mehrere Länder?",
        "Vervielfältigen Sie die Zeilen für Kennzeichnung, Erstattung und kommerziellen Launch je Markt und staffeln Sie sie in Wellen. Die Vorlage zeigt einen ersten Markt und zwei Wellen, was der üblichen Form entspricht."
      ],
      [
        "Welches Risiko hat die Produktion vor der Zulassung?",
        "Die Abschreibung, falls nicht zugelassen wird oder sich die Fachinformation ändert. Die meisten Launches tragen einen Teil dieses Risikos, weil die Herstellungsvorlaufzeit länger ist als der Abstand zwischen Bescheid und erwarteten ersten Bestellungen — aber es sollte eine ausgesprochene Entscheidung mit einer Zahl daran sein."
      ],
      [
        "Ist die Vorlage für den Pharma-Launch kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Konto."
      ]
    ]
  },

  'ma-due-diligence-timeline': {
    card: "NDA, Datenraum, parallele Prüfstränge, Red Flag Report, SPA, Signing, Closing.",
    h1: "Zeitplan für die Due Diligence bei einer Übernahme",
    metaTitle: "M&A Due Diligence — Zeitplan",
    metaDesc: "Kostenloser Zeitplan für die Due Diligence: NDA, Datenraum, Financial, Legal, Tax und IT, Red Flag Report, SPA, Signing und Closing.",
    lead: "Eine kostenlose <strong>Zeitplan-Vorlage für die Due Diligence</strong> vom ersten Kontakt bis zum Vollzug — Vertraulichkeitsvereinbarung, Teaser und Information Memorandum, Öffnung des Datenraums, die parallel laufenden Prüfstränge, Management-Präsentationen und Fragenprozess, Verhandlung des Unternehmenskaufvertrags, Signing sowie die Vollzugsbedingungen vor dem Closing. Laden Sie sie für die Vorlage im Investitionsausschuss herunter oder öffnen Sie sie online, um zu prüfen, ob jeder Strang innerhalb Ihrer Exklusivität fertig wird.",
    intro: "Due Diligence ist keine Abfolge. Sie ist ein halbes Dutzend Stränge, die gleichzeitig denselben Datenraum lesen, gegen eine Uhr, die im Exklusivitätsschreiben gestellt wurde. Der Plan legt sie als parallele Spuren nebeneinander, damit der Engpass sichtbar wird:",
    phases: [
      [
        "Ansprache und Vertraulichkeit",
        "Identifikation des Zielunternehmens, Ansprache, Vertraulichkeitsvereinbarung, Teaser und Information Memorandum. <em>Meilenstein: NDA unterzeichnet.</em>"
      ],
      [
        "Indikatives Angebot und Zugang",
        "Prüfung der ersten Runde, indikatives Angebot beziehungsweise Absichtserklärung, vereinbarte Exklusivität und Öffnung des Datenraums. <em>Meilenstein: Exklusivität beginnt.</em>"
      ],
      [
        "Prüfstränge",
        "Financial, Legal, Tax, Commercial, IT und HR Due Diligence laufen parallel auf demselben Datenraum, jeder mit eigenem Bericht und eigener Feststellungsliste."
      ],
      [
        "Management und Fragenprozess",
        "Management-Präsentationen, Standortbesichtigungen, die Fragenliste und Nachforderungen — der Vorgang, der bestimmt, wie schnell die Prüfstränge überhaupt fertig werden können."
      ],
      [
        "Feststellungen und Kaufpreislogik",
        "Red Flag Report, Kaufpreisanpassung, Garantien und Freistellungen, W&amp;I-Versicherung und die abschließende Freigabe im Investitionsausschuss. <em>Meilenstein: Gremienfreigabe.</em>"
      ],
      [
        "Kaufvertrag, Signing und Closing",
        "Verhandlung des Unternehmenskaufvertrags, Disclosure Letter, notarielle Beurkundung beim Signing, Vollzugsbedingungen einschließlich Fusionskontrolle und Investitionsprüfung sowie der Vollzug. <em>Meilenstein: Closing.</em>"
      ]
    ],
    callout: "Exklusivität ist ein Countdown, keine Zusicherung. Sie endet an einem festen Datum, unabhängig davon, ob der steuerliche Strang seine Antworten bekommen hat — und die Bitte um Verlängerung ist der Moment, in dem ein Verkäufer den Preis wieder aufmacht. Rechnen Sie rückwärts vom Ende der Exklusivität: Die Vertragsverhandlung braucht Wochen, der Red Flag Report Tage, und alles davor ist die Zeit, die die Prüfstränge tatsächlich haben.",
    customize: [
      "Setzen Sie zuerst das Ende der Exklusivität und legen Sie die Prüfstränge rückwärts davor — das ist die Randbedingung, in der der ganze Plan lebt.",
      "Ergänzen oder streichen Sie Stränge je nach Transaktion; ein anlagenintensives Ziel braucht Umwelt und Immobilien, ein Softwareunternehmen IP und eine Open-Source-Prüfung.",
      "Geben Sie der Fragenliste eine eigene Zeile mit einem Verantwortlichen. Sie ist der gemeinsame Engpass zwischen allen Strängen und dem Verkäufer.",
      "Verlängern Sie den Balken der Vollzugsbedingungen, wenn Fusionskontrolle beim Bundeskartellamt oder eine Investitionsprüfung durch das Bundeswirtschaftsministerium nötig ist; diese Fristen setzt die Behörde, nicht die Parteien.",
      "Setzen Sie nach dem Red Flag Report einen formalen Abbruch- oder Weiterpunkt, damit eine schlechte Feststellung eine terminierte Entscheidung auslöst und keine Flurdiskussion.",
      "Markieren Sie NDA, Beginn der Exklusivität, Gremienfreigabe, Signing und Closing als Meilensteine — das sind die Termine, die ein Transaktionsausschuss verfolgt."
    ],
    tips: [
      "<strong>Befüllen Sie den Datenraum ordentlich, bevor die Prüfung startet.</strong> Ein halb gefüllter Raum bedeutet, dass jeder Strang seine erste Woche mit Nachforderungen statt mit Lesen verbringt, und diese Woche kommt nicht zurück.",
      "<strong>Führen Sie eine Fragenliste, nicht sechs.</strong> Doppelte und widersprüchliche Fragen an den Verkäufer sind der schnellste Weg, das Wohlwollen des Managements aufzubrauchen und jede Antwortzeit zu verlängern.",
      "<strong>Beginnen Sie mit dem Kaufvertrag, bevor die Prüfung endet.</strong> Die Anwälte können die Struktur bauen, während noch Feststellungen eintreffen; auf einen sauberen Bericht zu warten schiebt das Signing über die Exklusivität hinaus.",
      "<strong>Buchen Sie Management-Termine früh.</strong> Die Geschäftsführung des Zielunternehmens hat weiterhin ein Unternehmen zu führen, und ihre Verfügbarkeit ist meist die knappste Ressource im ganzen Prozess.",
      "<strong>Rechnen Sie den Notartermin ein.</strong> Bei GmbH-Anteilen ist die Übertragung beurkundungsbedürftig, und ein Beurkundungstermin mit vollständigen Anlagen ist ein eigener Vorgang, kein Formalakt am Rand.",
      "<strong>Trennen Sie Signing und Closing im Plan.</strong> Zwischen beiden liegen die Vollzugsbedingungen — Freigaben, Zustimmungen, Finanzierung — und bei größeren Transaktionen sind das Monate."
    ],
    faq: [
      [
        "Wie lange dauert eine Due Diligence?",
        "Bei einer Mid-Market-Transaktion typischerweise 6 bis 12 Wochen Prüfung innerhalb einer ähnlich langen Exklusivität, danach die Vertragsverhandlung und anschließend die Vollzugsbedingungen bis zum Closing. Die Vorlage nutzt rund fünf Monate von der Ansprache bis zum Vollzug."
      ],
      [
        "Welche Prüfstränge gehören in den Plan?",
        "Financial, Legal, Tax, Commercial, IT und HR als Standard, dazu je nach Ziel Umwelt, Immobilien, Versicherungen oder gewerbliche Schutzrechte. Die sechs Kernstränge laufen hier parallel auf einem gemeinsamen Datenraum."
      ],
      [
        "Warum ist die Exklusivität für den Terminplan so wichtig?",
        "Weil sie der einzige Zeitraum ist, in dem ein Käufer echtes Geld für Berater ausgeben kann, ohne im Wettbewerb zu stehen. Läuft sie aus, kann der Verkäufer den Prozess wieder öffnen oder neu bepreisen — die Prüfung ist damit faktisch ein Projekt mit fester Dauer."
      ],
      [
        "Was ist der Unterschied zwischen Signing und Closing?",
        "Das Signing ist die Unterzeichnung beziehungsweise Beurkundung des Kaufvertrags; das Closing ist der tatsächliche Übergang, nachdem die Vollzugsbedingungen wie Fusionskontrolle, Investitionsprüfung und Zustimmungen Dritter erfüllt sind. Manchmal ist beides derselbe Tag, oft liegen Monate dazwischen."
      ],
      [
        "Was passiert nach dem Closing?",
        "Die Integration. Diese Vorlage endet mit dem Vollzug; der <a href=\"/de/templates/post-merger-integration-plan.html\">Integrationsplan nach einer Übernahme</a> deckt Tag-eins-Bereitschaft, Arbeitsstränge und die Verfolgung der Synergien im ersten Jahr ab."
      ],
      [
        "Ist die Vorlage für die Due Diligence kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung."
      ]
    ]
  },

  'data-migration-project-plan': {
    card: "Profiling, Mapping, Bereinigung, Testmigrationen, Abgleich, Cutover, Prüfung.",
    h1: "Projektplan für die Datenmigration",
    metaTitle: "Datenmigration — Projektplan",
    metaDesc: "Kostenloser Projektplan für die Datenmigration: Profiling, Mapping, Bereinigung, Testmigrationen, Abgleich, Cutover und Prüfung. Excel oder online.",
    lead: "Eine kostenlose <strong>Projektplan-Vorlage für die Datenmigration</strong> über den gesamten Arbeitsstrang — Analyse der Quellsysteme, Mapping und Transformationsregeln, Bereinigung, Bau der Ladestrecken, mehrere Testmigrationen, Abgleich, der eigentliche Cutover und die Prüfung danach. Das ist der Datenstrang, der innerhalb eines größeren Vorhabens läuft, sei es eine <a href=\"/de/templates/erp-implementation-schedule.html\">ERP-Einführung</a> oder eine <a href=\"/de/templates/cloud-migration-project-plan.html\">Cloud-Migration</a> — und meistens ist es der Strang, der über den Go-live-Termin entscheidet.",
    intro: "Migrationspläne gehen schief, wenn die Ladung als eine Aufgabe am Ende behandelt wird. Sie ist keine Aufgabe — sie ist dieselbe Aufgabe, mehrfach ausgeführt, bis der Abgleich stimmt, und jeder Durchlauf kostet ein Wartungsfenster:",
    phases: [
      [
        "Analyse und Profiling",
        "Bestandsaufnahme der Quellsysteme, Datenmengen, Verantwortlichkeiten, Profiling auf Lücken, Dubletten und Formatbrüche sowie die Entscheidung, was überhaupt migriert wird. <em>Meilenstein: Umfang und Quellen abgestimmt.</em>"
      ],
      [
        "Mapping und Regeln",
        "Feldgenaues Mapping je Objekt, Transformations- und Vorbelegungsregeln, Abgleich der Stammdaten sowie die Abstimmungsregeln, gegen die Sie später prüfen. <em>Meilenstein: Mapping freigegeben.</em>"
      ],
      [
        "Bereinigung",
        "Bereinigungsregeln, Nacharbeit durch die Fachbereiche für alles, was keine Regel heilen kann, und der Dublettenabgleich — Arbeit, die parallel läuft, weil sie nicht am Bau hängt."
      ],
      [
        "Bau und Modultest",
        "Aufbau der Ladestrecken je Objekt, Extraktions- und Ladeskripte, Fehlerbehandlung, Wiederaufsetzlogik und die Abstimmungsberichte selbst."
      ],
      [
        "Testmigrationen und Abgleich",
        "Drei vollständige Testmigrationen mit Abgleich und Fehlerbehebung dazwischen, dazu die gestoppte Generalprobe, die belegt, dass die Ladung in das Wartungsfenster passt. <em>Meilenstein: Generalprobe bestanden.</em>"
      ],
      [
        "Cutover und Abnahme",
        "Einfrieren der Quelle, Delta-Extrakt, die Produktivladung, Freigabe des Abgleichs, fachliche Prüfung und die Rückfallentscheidung. <em>Meilenstein: Daten abgenommen.</em>"
      ]
    ],
    callout: "Sie brauchen drei Testmigrationen, nicht eine, und jede kostet ein vollständiges Wartungsfenster. Die erste zeigt, dass das Mapping falsch ist. Die zweite zeigt, ob die Bereinigung gewirkt hat. Die dritte — mit Produktivmengen und von Anfang bis Ende gestoppt — zeigt, ob die Ladung in das Fenster passt, das Sie bekommen haben. Pläne mit einem einzigen Ladedurchlauf entdecken alle drei Probleme am Cutover-Wochenende, wenn für keines mehr Zeit ist.",
    customize: [
      "Setzen Sie den Cutover-Termin zuerst und zählen Sie rückwärts; die letzte Testmigration muss mindestens zwei Wochen davor abgeschlossen sein.",
      "Erweitern Sie die Objektzeilen auf eine Zeile je Datenobjekt — Kunden, Lieferanten, Artikel, offene Posten, Historie — sobald das Mapping beginnt.",
      "Buchen Sie jede Testmigration als echtes Wartungsfenster mit denselben Leuten, die auch den Cutover fahren, nicht mit einer Teilbesetzung.",
      "Ergänzen Sie eine Zeile für den Delta-Extrakt, wenn die Quelle zwischen der letzten Testmigration und dem Cutover weiterläuft.",
      "Halten Sie die Rückfallentscheidung als datierten Meilenstein mit benannten Kriterien fest, nicht als stillschweigende Option.",
      "Hängen Sie diesen Plan als Teilplan unter Ihren <a href=\"/de/templates/erp-implementation-schedule.html\">ERP-</a> oder <a href=\"/de/templates/cloud-migration-project-plan.html\">Cloud-Migrationsplan</a>."
    ],
    tips: [
      "<strong>Die Abstimmungsregeln kommen vor dem Bau.</strong> Wer nicht sagen kann, wie er die Richtigkeit der Ladung nachweist, kann auch nicht wissen, wann sie fertig ist.",
      "<strong>Stoppen Sie jede Testmigration von Anfang bis Ende.</strong> Die gesuchte Zahl ist nicht „hat funktioniert“, sondern „wie viele Stunden“ — denn danach wird das Cutover-Fenster bemessen.",
      "<strong>Beginnen Sie früh mit der Bereinigung.</strong> Sie hängt am Profiling, nicht am Bau, und kann monatelang parallel laufen — und sie dauert immer länger als geplant, weil sie Fachbereiche braucht und nicht das Datenteam.",
      "<strong>Migrieren Sie weniger.</strong> Die Historie ist der teuerste Teil jeder Migration; die Entscheidung, sie zu archivieren statt zu übernehmen, bringt mehr Termin als jede Optimierung — prüfen Sie dabei die Aufbewahrungsfristen und die Anforderungen an eine revisionssichere Ablage.",
      "<strong>Denken Sie das Löschkonzept mit.</strong> Eine Migration ist der natürliche Moment, personenbezogene Daten ohne Zweck nicht mitzunehmen, und die Datenschutzprüfung gehört als Vorgang in den Plan statt als Nachfrage kurz vor dem Cutover.",
      "<strong>Setzen Sie den Basisplan mit der Mapping-Freigabe.</strong> Alles davor ist Schätzung; alles danach sollte als Abweichung verfolgt werden."
    ],
    faq: [
      [
        "Wie lange dauert eine Datenmigration?",
        "Bei der Ablösung eines mittelgroßen Systems üblicherweise vier bis acht Monate vom Profiling bis zum geprüften Cutover. Die Vorlage nutzt rund sieben Monate; der Zyklus der Testmigrationen am Ende ist der Teil, der sich einer Stauchung widersetzt."
      ],
      [
        "Wie viele Testmigrationen braucht man?",
        "Drei sind das praktische Minimum. Die erste prüft das Mapping, die zweite die Bereinigung, die dritte ist eine gestoppte Generalprobe mit Produktivmengen, die nachweist, dass die Ladung in Ihr Wartungsfenster passt. Jede braucht ein eigenes Fenster und einen eigenen Abgleich."
      ],
      [
        "Unterscheidet sich das von den ERP- oder Cloud-Vorlagen?",
        "Ja — dies ist der Datenstrang, der innerhalb beider läuft. Nutzen Sie den <a href=\"/de/templates/erp-implementation-schedule.html\">Projektplan für die ERP-Einführung</a> oder den <a href=\"/de/templates/cloud-migration-project-plan.html\">Cloud-Migrationsplan</a> für das Gesamtvorhaben und diese Vorlage, wenn die Daten einen eigenen detaillierten Plan und einen eigenen Verantwortlichen brauchen."
      ],
      [
        "Woran scheitern Migrationstermine meistens?",
        "An Datenqualität, die erst in der ersten Testmigration auffällt, und an Abgleichsdifferenzen, die niemand erklären kann. Beides findet man durch frühes Laden, nicht durch längeres Planen."
      ],
      [
        "Ist die Vorlage für die Datenmigration kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Konto und ohne Wasserzeichen."
      ]
    ]
  },

  'conference-production-schedule': {
    card: "Location, Call for Papers, Referenten, Sponsoring, Ticketing, Technik, Ablauf.",
    h1: "Produktionsplan für eine Konferenz",
    metaTitle: "Konferenz — Produktionsplan",
    metaDesc: "Kostenloser Zeitplan für die Konferenzplanung: Location, Call for Papers, Referenten, Sponsoring, Ticketstufen, Technik, Regieplan, Nachbereitung.",
    lead: "Eine kostenlose <strong>Produktionsplan-Vorlage für eine Konferenz</strong> mit mehreren parallelen Strängen — Termin und Location, Call for Papers und Programmaufbau, Referentenbetreuung, Sponsoringvertrieb, Ticketstufen, Veranstaltungstechnik, der Regieplan und alles, was nach der letzten Session noch passieren muss. Laden Sie sie für die Sitzung des Programmkomitees herunter oder öffnen Sie sie online, um zu sehen, an welcher Frist Ihr Programm tatsächlich hängt.",
    intro: "Eine Konferenz sind vier Betriebe gleichzeitig: ein Programm, eine Sponsoringpipeline, ein Ticketverkauf und ein Produktionsaufbau. Sie teilen sich ein Datum und sonst fast nichts, deshalb bekommt jeder eine eigene Spur:",
    phases: [
      [
        "Termin und Location",
        "Terminwahl gegen den Branchenkalender, Suche und Besichtigung, Vertrag und Anzahlung, Zimmerkontingent sowie die Kapazitätsentscheidung, an der alles andere bemessen wird. <em>Meilenstein: Location gebucht.</em>"
      ],
      [
        "Call for Papers und Programm",
        "Themen und Tracks, Öffnung des Call for Papers, Einreichungsfrist, Begutachtung und Auswahl, Zu- und Absagen sowie das veröffentlichte Programm. <em>Meilenstein: Programm veröffentlicht.</em>"
      ],
      [
        "Referentinnen und Referenten",
        "Einladungen und Zusagen für die Hauptvorträge, Referentenvereinbarungen, Reise und Unterkunft, Briefings, Abgabefrist für Folien und Proben."
      ],
      [
        "Sponsoring und Ausstellung",
        "Sponsoringmappe, Preisstufen, Ansprache und Verlängerungen, Verträge, Einsammeln der Sponsorenleistungen und der Hallenplan der Ausstellung. <em>Meilenstein: Sponsoringziel erreicht.</em>"
      ],
      [
        "Anmeldung und Marketing",
        "Aufbau des Ticketshops, Frühbucher-, Normal- und Spättarif, Startkampagne, E-Mail-Wellen und die Kommunikationsstrecke an die Teilnehmenden."
      ],
      [
        "Produktion und Regieplan",
        "Briefing für Technik und Bühne, Raumspezifikation je Track, Beschilderung und Druck, Brandschutz- und Bestuhlungsnachweis nach der Versammlungsstättenverordnung, GEMA-Anmeldung, Personalplanung und Briefings, Aufbautage, die Veranstaltung selbst und die Nachbereitung. <em>Meilenstein: Türen offen.</em>"
      ]
    ],
    callout: "Die Frist des Call for Papers bestimmt alles Nachgelagerte. Gutachterinnen und Gutachter brauchen Wochen, Referierende müssen Bescheid wissen, bevor sie Flüge buchen, und das Programm muss öffentlich sein, bevor der Frühbuchertarif endet — sonst verkaufen Sie weniger Tickets zum höheren Preis. Wer die Einreichungsfrist um einen Monat verschiebt, verliert nicht einen Monat, sondern das Frühbucherfenster, die Marketingstrecke und das Reisebudget der Referierenden auf einmal.",
    customize: [
      "Setzen Sie zuerst den Veranstaltungstermin und zählen Sie rückwärts; jede Frist hier ist eine Vorlaufzeit ab diesem Datum, keine Schätzung von heute nach vorn.",
      "Führen Sie je Track eine Zeile, wenn Sie parallele Programme mit eigenen Vorsitzen und eigenen Gutachterpools fahren.",
      "Passen Sie die Termine der Ticketstufen an Ihre Preislogik an — die Vorlage arbeitet mit Frühbucher, Normal und Spättarif.",
      "Erweitern Sie das Sponsoring auf eine Zeile je Stufe oder je benanntem Zielkunden, sobald die Ansprache beginnt.",
      "Teilen Sie die Aufbautage nach Räumen, wenn die Location die Flächen zu unterschiedlichen Zeiten übergibt.",
      "Ergänzen Sie Fristen für Abstracts oder Tagungsbände, wenn Ihre Konferenz Proceedings produziert, und bei Fachkongressen die Beantragung von Fortbildungspunkten."
    ],
    tips: [
      "<strong>Veröffentlichen Sie das Programm, bevor der Frühbuchertarif endet.</strong> Menschen kaufen ein Programm, kein Datum; ein abgelaufener Frühbucher ohne veröffentlichte Vorträge ist liegen gelassenes Geld.",
      "<strong>Bestätigen Sie die Hauptvorträge, bevor der Call for Papers öffnet.</strong> Ein namentlich bekannter Keynote hebt Zahl und Qualität der Einreichungen und ist der Anker, den Ihr Marketing vom ersten Tag an braucht.",
      "<strong>Setzen Sie eine Folienfrist, die Sie auch durchsetzen.</strong> Die Technik kann nicht testen, was sie nicht hat, und in letzter Minute gelieferte Präsentationen sind die häufigste Ursache für überzogene Sessions.",
      "<strong>Fahren Sie das Sponsoring auf eigenem Kalender.</strong> Sponsorenbudgets werden jährlich beschlossen; eine Ansprache sechs Monate vor der Veranstaltung spricht mit einem Budget, das längst geschlossen ist.",
      "<strong>Klären Sie Bestuhlung und Brandschutz früh mit der Location.</strong> Die zulässige Personenzahl je Raum ist eine Genehmigungsfrage und keine Verhandlungssache, und sie bestimmt, wie viele Tickets Sie überhaupt verkaufen dürfen.",
      "<strong>Terminieren Sie die Nachbesprechung vor der Veranstaltung.</strong> In der Woche danach sind alle verschwunden, und es ist die einzige Zeit, in der die Details noch frisch sind."
    ],
    faq: [
      [
        "Wie lange im Voraus plant man eine Konferenz?",
        "Zwölf Monate sind für eine mehrspurige Konferenz mit Call for Papers üblich, neun sind knapp. Die Vorlage nutzt zwölf Monate, verankert am Veranstaltungstermin; Location und Hauptvorträge werden zuerst festgezurrt, weil alles andere daran bemessen wird."
      ],
      [
        "Worin unterscheidet sie sich von der Vorlage für Eventplanung?",
        "Die <a href=\"/de/templates/event-planning.html\">Vorlage für Eventplanung</a> ist allgemein und passt für jede einzelne Veranstaltung. Diese hier ist für eine mehrspurige Konferenz gebaut — Call for Papers, Begutachtung, Referentenbetreuung, Sponsoringstufen und Regieplan. Nehmen Sie jene für eine Feier oder einen Launch, diese, sobald Sie ein Programm haben."
      ],
      [
        "Und wenn ich ausstelle statt zu veranstalten?",
        "Dann nutzen Sie den <a href=\"/de/templates/trade-show-planning-timeline.html\">Zeitplan für die Messeplanung</a> — der deckt Standbuchung, Standbau, Leaderfassung und Nachfassen ab. Diese Vorlage ist die Seite des Veranstalters."
      ],
      [
        "Wann sollte der Call for Papers schließen?",
        "Früh genug, dass Begutachtung, Zusagen, Programmveröffentlichung und die Reisebuchungen der Referierenden alle hineinpassen. Die Vorlage lässt rund fünf Monate zwischen Einreichungsfrist und Türöffnung — realistisch, wenn die Begutachtung ehrenamtlich passiert."
      ],
      [
        "Ist die Vorlage für den Konferenzplan kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung und ohne Wasserzeichen."
      ]
    ]
  },

  'call-center-setup-plan': {
    card: "Betriebsmodell, Telefonie, Personalbedarf, Einstellungswellen, Schulung, Ramp-up.",
    h1: "Projektplan für den Aufbau eines Callcenters",
    metaTitle: "Callcenter-Aufbau — Projektplan",
    metaDesc: "Kostenloser Projektplan für den Callcenter-Aufbau: CCaaS-Auswahl, Personalbedarf, Einstellungswellen, Schulung, Pilotbetrieb, Go-live und Ramp-up.",
    lead: "Eine kostenlose <strong>Projektplan-Vorlage für den Aufbau eines Callcenters</strong> über den gesamten Aufbau — Betriebsmodell vor Ort oder remote, Auswahl von Telefonie und CCaaS-Plattform, Personalbedarfsrechnung und Einsatzplanung, Einstellungswellen, die Trainingsakademie, Aufbau der Wissensdatenbank, Pilotbetrieb, Go-live und der Ramp-up bis zum Regelbetrieb. Laden Sie sie für einen Lenkungskreis herunter oder öffnen Sie sie online, um Ihre Einstellungswellen gegen die Volumenkurve zu legen.",
    intro: "Ein Servicecenter steht und fällt damit, ob geschulte Leute in der Woche auf der Fläche sind, in der das Volumen kommt. Der Plan behandelt Einstellung und Schulung als treibende Kette und alles andere als Zuarbeit dafür:",
    phases: [
      [
        "Betriebsmodell und Standort",
        "Kanalmix, Servicezeiten, Entscheidung zwischen Standort, Remote oder Hybrid, Standortwahl beziehungsweise Regelung zur Heimarbeit sowie das Personal- und Kostenmodell. <em>Meilenstein: Betriebsmodell freigegeben.</em>"
      ],
      [
        "Technik und Telefonie",
        "Auswahl von CCaaS und Telefonie, Rufnummernbereitstellung und Portierung, Anbindung an CRM und Ticketsystem, Sprachdialog und Routing, Workforce-Management und Qualitätswerkzeuge sowie Anschlüsse und Headset-Logistik."
      ],
      [
        "Personalbedarfsplanung",
        "Volumenprognose je Intervall, Annahmen zur Bearbeitungszeit, Erlang-Rechnung, Schwundfaktor, Schichtmodelle im Rahmen des Arbeitszeitgesetzes und die Einstellungszahl, die jede Welle liefern muss."
      ],
      [
        "Einstellungswellen",
        "Stellenzuschnitt und Eingruppierung, Ansprache, Auswahltage und Angebote, gefahren als aufeinanderfolgende Wellen, sodass jede Kohorte die Schulung abschließt, bevor das Volumen ankommt, für das sie eingestellt wurde."
      ],
      [
        "Schulung und Wissen",
        "Aufbau des Curriculums, Wissensdatenbank und Textbausteine, System- und Kommunikationstraining je Kohorte, begleitete Einarbeitung am Telefon und die Zertifizierung. <em>Meilenstein: erste Kohorte zertifiziert.</em>"
      ],
      [
        "Pilot, Go-live und Ramp-up",
        "Pilotbetrieb auf einer begrenzten Warteschlange, Kalibrierung der Qualitätsbewertung, Go-live, stufenweise Volumensteigerung je Kohorte und der Übergang zu den Ziel-Servicelevels. <em>Meilenstein: Regelbetrieb.</em>"
      ]
    ],
    callout: "Rechnen Sie rückwärts von der Volumenkurve, nicht vorwärts von heute. Eine Kohorte braucht Wochen zur Gewinnung und noch einmal Wochen für Schulung und Einarbeitung; wer in der ersten Go-live-Woche produktiv sein soll, muss also rund zwei Monate vorher ein Angebot bekommen haben. Abgänge während der Schulung sind normal, jede Welle muss also überbucht werden. Und wenn die Einstellungswellen nicht auf demselben Diagramm stehen wie die Volumenkurve, wird die Lücke erst an dem Tag sichtbar, an dem auch die Warteschlange sichtbar wird.",
    customize: [
      "Setzen Sie Go-live und Volumenkurve zuerst und schieben Sie dann jede Einstellungswelle um die volle Dauer aus Gewinnung, Schulung und Einarbeitung nach hinten.",
      "Überbuchen Sie jede Welle um die Abgangsquote, die Ihr Haus tatsächlich sieht, statt anzunehmen, dass alle zertifiziert werden.",
      "Ergänzen Sie eine Zeile je Kohorte, wenn Sie mehr als die drei gezeigten Wellen fahren.",
      "Passen Sie die Länge der begleiteten Einarbeitung an die Komplexität an; regulierte oder technische Warteschlangen brauchen länger am Telefon mit Begleitung.",
      "Ziehen Sie die Rufnummernportierung nach vorn, wenn Sie bestehende Anschlüsse übernehmen — die Portierungsfristen liegen beim abgebenden Anbieter und lassen sich nicht kürzen.",
      "Planen Sie die Beteiligung des Betriebsrats als eigenen Vorgang ein: Gesprächsaufzeichnung, Qualitätsbewertung und Workforce-Management sind mitbestimmungspflichtig, und die Betriebsvereinbarung dazu ist ein Vorgänger des Pilotbetriebs, kein Nachtrag."
    ],
    tips: [
      "<strong>Portieren Sie Rufnummern früh.</strong> Die Portierung ist der einzige Punkt in diesem Plan mit einer Uhr bei Dritten, und sie blockiert jeden Routingtest, der die echte Nummer braucht.",
      "<strong>Bauen Sie die Wissensdatenbank vor der Schulung, nicht währenddessen.</strong> Trainerinnen, die Inhalte schreiben, während sie unterrichten, sind der Grund, warum Kohorte eins auf Material geschult wird, das Kohorte zwei nie sieht.",
      "<strong>Schützen Sie die begleitete Einarbeitung.</strong> In dieser Phase pendeln sich Bearbeitungszeit und Qualität tatsächlich ein; sie zu kürzen, um einen Termin zu halten, kommt als Servicelevel-Problem für ein Quartal zurück.",
      "<strong>Klären Sie Aufzeichnung und Datenschutz vor dem Pilotbetrieb.</strong> Mitschnitte brauchen eine Rechtsgrundlage, einen Hinweis an die Anrufenden und eine Vereinbarung mit der Arbeitnehmervertretung — das ist ein Vorgang mit Vorlaufzeit, kein Häkchen in der Plattform.",
      "<strong>Pilotieren Sie auf einer echten, aber begrenzten Warteschlange.</strong> Routing, Nachbearbeitungscodes und Eskalationswege scheitern erst richtig, wenn echte Anrufende in der Leitung sind.",
      "<strong>Steigern Sie das Volumen in Stufen.</strong> Gehen Sie erst zur nächsten Stufe, wenn Qualität und Bearbeitungszeit auf der aktuellen halten — der Ramp-up ist eine Folge von Toren, keine Rampe."
    ],
    faq: [
      [
        "Wie lange dauert der Aufbau eines Callcenters?",
        "Üblicherweise vier bis sechs Monate von der Freigabe des Betriebsmodells bis zum Go-live, dazu weitere zwei bis drei Monate Ramp-up bis zum Regelbetrieb. Die Vorlage nutzt rund sechs Monate Aufbau und einen gestuften Ramp-up danach."
      ],
      [
        "Was bestimmt den Terminplan?",
        "Einstellung und Schulung. Die Technik lässt sich parallel beschaffen und konfigurieren, aber eine Kohorte braucht Wochen zur Gewinnung und noch einmal Wochen für Schulung und Einarbeitung — deshalb liegt die Trainingsakademie auf dem kritischen Pfad zum Go-live."
      ],
      [
        "Wie groß sollte die erste Welle sein?",
        "Groß genug für das Startvolumen zuzüglich Schwund und Abgängen in der Schulung, was in der Regel deutlich mehr Einstellungen bedeutet als Arbeitsplätze. Die Vorlage zeigt drei Wellen, damit die späteren Kohorten anhand der Erfahrung aus der ersten bemessen werden können."
      ],
      [
        "Funktioniert die Vorlage auch für ein Remote- oder Hybridcenter?",
        "Ja. Lassen Sie die Zeilen zum Standortausbau weg und behalten Sie Gerätelogistik, Anschlussprüfung und das Remote-Onboarding — die Abfolge aus Einstellung und Schulung ist identisch."
      ],
      [
        "Ist die Vorlage für den Callcenter-Aufbau kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Konto."
      ]
    ]
  },

  'franchise-rollout-plan': {
    card: "Systemaufbau, Gebiete, Partnergewinnung, Standorte, Ausbau, Schulung, Wellen.",
    h1: "Rollout-Plan für ein Franchisesystem",
    metaTitle: "Franchise-Rollout — Projektplan",
    metaDesc: "Kostenloser Rollout-Plan für Franchise: Systemhandbuch, Gebiete, Partnergewinnung, Standort, Ausbau, Schulung, Eröffnungsmarketing, Wellen.",
    lead: "Eine kostenlose <strong>Rollout-Plan-Vorlage für ein Franchisesystem</strong>, gebaut um die Abfolge, die Sie für jeden Standort wiederholen — Gewinnung und Auswahl der Partnerinnen und Partner, Gebietszuschnitt, Standortsuche, Ausbau, Markenstandards und Systemhandbuch, Schulung, Eröffnungsmarketing, Eröffnung und die Betreuung danach. Die Vorlage zeigt die Systemarbeit einmal und danach drei überlappende Eröffnungswellen — so läuft ein Rollout tatsächlich.",
    intro: "Ein Franchise-Rollout ist kein Projekt, sondern eine Projektvorlage, die vielfach mit versetzten Startterminen ausgeführt wird. Das Diagramm trennt beides:",
    phases: [
      [
        "Systemreife",
        "Franchisevertrag und vorvertragliche Aufklärung, Rentabilitätsmodell des Einzelstandorts, Systemhandbuch, Markenstandards, Lieferantenvereinbarungen und das Betreuungsmodell im Feld. <em>Meilenstein: System vertriebsreif.</em>"
      ],
      [
        "Gebiete und Bewerberpipeline",
        "Gebietszuschnitt und Marktpotenzial, Zielzahl je Markt, Partnermarketing, Bewerbungen, Informationstage, Bonitätsprüfung und Auswahl. <em>Meilenstein: erste Verträge unterzeichnet.</em>"
      ],
      [
        "Standorte Welle 1",
        "Die vollständige Abfolge je Standort für die erste Kohorte: Standortsuche und Mietvertrag, Planung und Genehmigungen, Ausbau, Ausstattung, Schulung, Eröffnungsmarketing und Eröffnung."
      ],
      [
        "Standorte Welle 2",
        "Dieselbe Abfolge, gestartet, sobald Welle 1 im Ausbau ist, damit Betreuung und Bauleitung nicht an zwei Orten gleichzeitig gebraucht werden."
      ],
      [
        "Standorte Welle 3",
        "Die dritte Kohorte, bemessen an dem, was die Wellen 1 und 2 über die reale Dauer und die realen Kosten je Standort gezeigt haben."
      ],
      [
        "Betreuung und Systempflege",
        "Besuche nach der Eröffnung, Leistungsgespräche gegen das Rentabilitätsmodell sowie die Aktualisierung von Handbuch und Schulung aus dem, was die ersten Standorte gelernt haben."
      ]
    ],
    callout: "Der Engpass ist nicht die einzelne Eröffnung, sondern wie viele Eröffnungen Ihre Zentrale gleichzeitig tragen kann. Standortsuche, Baubegleitung, Schulung und Eröffnungswoche greifen alle auf dasselbe kleine Team zu, und jeder Standort braucht es wochenlang. Legen Sie die Wellen so, dass sich diese Fenster nicht stapeln. Ein Plan, der zehn Eröffnungen im Quartal mit einer Gebietsleitung verspricht, ist ein Plan, zehn Standorte schlecht zu eröffnen.",
    customize: [
      "Setzen Sie die Abfolge je Standort zuerst auf Ihre echten Dauern und kopieren Sie sie dann je Welle — das Muster ist der wiederverwendbare Teil.",
      "Ändern Sie die Überlappung der Wellen entsprechend Ihrer Betreuungskapazität; mehr Leute im Feld erlauben einen engeren Versatz.",
      "Führen Sie eine Zeile je Standort statt je Welle, sobald konkrete Objekte feststehen.",
      "Verlängern Sie die Dauern für Baugenehmigung, Nutzungsänderung und gegebenenfalls Gaststättenkonzession je Kommune — dieselbe Marke braucht in verschiedenen Städten sehr unterschiedlich lange.",
      "Halten Sie die Partnerschulung als harten Vorgänger der Eröffnung; sie ist die Zeile, die am häufigsten gestaucht wird, und die für Gäste am sichtbarsten ist.",
      "Führen Sie die Betreuungsbesuche nach der Eröffnung als echte terminierte Arbeit statt als unterstellte Fähigkeit."
    ],
    tips: [
      "<strong>Eröffnen Sie Welle 2 nicht, bevor Welle 1 einen Monat gelaufen ist.</strong> An den ersten Standorten lernen Sie, was am Systemhandbuch nicht stimmt, und dieses Lernen ist mehr wert als eine schnellere zweite Welle.",
      "<strong>Wählen Sie Partnerinnen und Partner langsam aus.</strong> Eine falsche Auswahl ist weit teurer als eine verschobene Eröffnung, und sie rückgängig zu machen dauert Jahre.",
      "<strong>Klären Sie die vorvertragliche Aufklärung sauber.</strong> Ein gesetzlich vorgeschriebenes Offenlegungsdokument nach US-Vorbild gibt es hier nicht, dafür eine von der Rechtsprechung entwickelte Aufklärungspflicht über Rentabilität und Risiken — dokumentiert, mit Vorlauf vor der Unterschrift.",
      "<strong>Vollenden Sie das Systemhandbuch vor dem ersten Vertrag.</strong> Sie verkaufen ein System; ist das System nicht aufgeschrieben, erfindet jeder Standort sein eigenes.",
      "<strong>Planen Sie Vermieter- und Genehmigungsarbeit je Standort, nicht je Programm.</strong> Jedes Objekt hat seine eigene Genehmigungsuhr, und die laufen nicht synchron.",
      "<strong>Buchen Sie Unterstützung in der Eröffnungswoche je Standort.</strong> Die erste Handelswoche prägt die Gewohnheiten des Betriebs, und Fernbetreuung ersetzt niemanden auf der Fläche."
    ],
    faq: [
      [
        "Wie lange dauert ein Franchise-Rollout?",
        "Die Systemreife braucht typischerweise vier bis sechs Monate, danach läuft jeder Standort etwa sechs bis neun Monate von der Partnerauswahl bis zur Eröffnung. Die Vorlage zeigt den Systemaufbau plus drei überlappende Wellen über rund zwei Jahre."
      ],
      [
        "Wie viele Standorte gehören in eine Welle?",
        "So viele, wie Ihr Team im Feld durch Standortsuche, Baubegleitung, Schulung und Eröffnungswoche gleichzeitig wirklich tragen kann — meist deutlich weniger, als die Vertriebsplanung möchte. Genau deshalb nutzt die Vorlage kleine Wellen."
      ],
      [
        "Was ist die Abfolge je Standort?",
        "Partnerauswahl, Gebiet und Standort, Mietvertrag, Planung und Genehmigungen, Ausbau, Ausstattung, Schulung, Eröffnungsmarketing, Eröffnung und Nachbetreuung. Sie wiederholt sich identisch je Standort, und genau das macht sie planbar."
      ],
      [
        "Passt die Vorlage auch für eigene Filialen?",
        "Ja. Lassen Sie Gewinnung und Auswahl der Partner weg und behalten Sie die Abfolge je Standort — für eine einzelne Filiale passt der <a href=\"/de/templates/retail-store-opening-timeline.html\">Zeitplan für die Ladeneröffnung</a> besser."
      ],
      [
        "Ist die Vorlage für den Franchise-Rollout kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung."
      ]
    ]
  },

  'okr-quarterly-planning': {
    card: "Entwurf, Abstimmung, Bewertung des Vorquartals, Commitment, Check-in, Retro.",
    h1: "Vorlage für die quartalsweise OKR-Planung",
    metaTitle: "OKR-Quartalsplanung — Vorlage",
    metaDesc: "Kostenlose Vorlage für die OKR-Quartalsplanung: Entwurf, Abstimmung, Bewertung des Vorquartals, Commitment, Check-in, Abschluss und Retro.",
    lead: "Eine kostenlose <strong>Vorlage für die quartalsweise OKR-Planung</strong>, gezeichnet als der wiederkehrende Zyklus, der sie tatsächlich ist — Entwurf der Objectives, teamübergreifende Abstimmung, Bewertung des auslaufenden Quartals, Commitment und Veröffentlichung, der Check-in zur Quartalsmitte sowie Abschluss und Retrospektive, die in die nächste Runde münden. Laden Sie sie für den Planungsauftakt herunter oder öffnen Sie sie online, um zu sehen, wo der Abschluss dieses Quartals den Entwurf des nächsten überlappt.",
    intro: "Der Grund, warum sich OKR-Planung immer gehetzt anfühlt: Sie beginnt nie auf einem leeren Blatt. Sie bewerten ein Quartal, während Sie das nächste entwerfen, und beides braucht dieselben Leute in denselben Wochen. Der Plan zeigt diese Überlappung, statt so zu tun, als wäre der Zyklus eine gerade Linie:",
    phases: [
      [
        "Unternehmensrichtung",
        "Durchsicht von Strategie und Jahreszielen durch die Führung, die zwei bis drei Unternehmens-Objectives für das Quartal und die Leitplanken, gegen die die Teams entwerfen. <em>Meilenstein: Unternehmens-OKR im Entwurf.</em>"
      ],
      [
        "Abschluss des Vorquartals",
        "Letzte Datenerhebung für die Key Results, Selbstbewertung der Teams, Kalibrierung über die Teams hinweg und die Vorstellung der Ergebnisse — parallel zum Entwurf des Folgequartals."
      ],
      [
        "Entwurf in den Teams",
        "Jedes Team entwirft Objectives und Key Results gegen die Unternehmensrichtung, mit einer Arbeitssitzung und einem schriftlichen ersten Entwurf je Team."
      ],
      [
        "Abstimmung",
        "Teamübergreifende Durchsicht der Abhängigkeiten, Verhandlung dort, wo zwei Teams dieselbe Kapazität brauchen, und Auflösung der Konflikte vor dem Commitment. <em>Meilenstein: Abstimmung abgeschlossen.</em>"
      ],
      [
        "Commitment und Auftakt",
        "Durchsicht durch die Führung, letzte Änderungen, Veröffentlichung im Werkzeug, Auftaktveranstaltung und der Start der wöchentlichen Check-in-Routine. <em>Meilenstein: OKR verbindlich.</em>"
      ],
      [
        "Umsetzung im Quartal",
        "Wöchentliche Einschätzungen zur Zielerreichung, der Check-in zur Quartalsmitte, in dem Objectives angepasst oder gestrichen werden dürfen, sowie Abschluss und Retrospektive am Ende. <em>Meilenstein: Quartal abgeschlossen.</em>"
      ]
    ],
    callout: "Der Zyklus überlappt sich selbst, und genau das ist das ganze Planungsproblem. Sie können das alte Quartal nicht nach dem Start des neuen bewerten, weil die Daten schal werden und sich niemand mehr an den Kontext erinnert — aber Sie können das neue auch nicht ohne die Bewertungen entwerfen. Also laufen beide rund drei Wochen nebeneinander, und dieselben Verantwortlichen werden für beides gebraucht. Buchen Sie diese Überlappung ausdrücklich. Wer Planung als zweitägigen Workshop in Woche eins behandelt, quetscht vier Wochen Arbeit in zwei Tage und nennt das Ergebnis dann ein Commitment.",
    customize: [
      "Setzen Sie Tag 0 auf etwa drei Wochen vor Quartalsende, dann liegt der ganze Zyklus richtig um die Quartalsgrenze.",
      "Ergänzen Sie eine Entwurfszeile je Team, damit Sie sehen, wer im Verzug ist, ohne hinterhertelefonieren zu müssen.",
      "Verlegen Sie den Check-in auf die Taktung, die Sie wirklich fahren — monatlich funktioniert bei schnellen Teams besser als quartalsweise.",
      "Kürzen Sie die Abstimmungsphase bei weniger als fünf Teams; verlängern Sie sie deutlich, wenn sich Teams dieselbe Entwicklungskapazität teilen.",
      "Lassen Sie Bewertung und Entwurf sichtbar überlappen, statt sie hintereinander zu legen — die Überlappung ist das ehrliche Bild.",
      "Kopieren Sie den ganzen Block nach vorn, um das nächste Quartal zu bauen; der Zyklus ist jedes Mal derselbe."
    ],
    tips: [
      "<strong>Bewerten Sie, bevor Sie sich festlegen.</strong> Neue Ziele zu setzen, ohne zu wissen, wie die letzten gelandet sind, ist der Weg, dasselbe zu ehrgeizige Objective drei Quartale hintereinander aufzuschreiben.",
      "<strong>Begrenzen Sie die Zahl der Objectives.</strong> Drei je Team sind ein Plan, sieben sind eine Liste. Die Abstimmungsphase wird dramatisch einfacher, wenn es weniger abzustimmen gibt.",
      "<strong>Machen Sie Abhängigkeiten in der Abstimmung explizit.</strong> Die meisten OKR-Fehlschläge sind ein Team, das sich still auf die Kapazität eines anderen Teams verlässt, die nie zugesagt wurde.",
      "<strong>Behandeln Sie den Check-in zur Quartalsmitte als Entscheidungspunkt.</strong> Er existiert, um Objectives zu streichen oder zu verkleinern, die nicht landen werden, nicht um Status zu berichten.",
      "<strong>Führen Sie die Retrospektive über den Prozess, nicht nur über die Ergebnisse.</strong> Wenn sich der Entwurf dieses Quartal gehetzt angefühlt hat, wird er sich nächstes Quartal wieder gehetzt anfühlen, solange sich der Kalender nicht ändert."
    ],
    faq: [
      [
        "Wann sollte die quartalsweise OKR-Planung beginnen?",
        "Etwa drei bis vier Wochen vor Quartalsbeginn. Die Vorlage startet den Entwurf, während das laufende Quartal noch läuft, weil Unternehmensrichtung und Teamentwürfe beide Zeit vor dem Commitment brauchen und die Bewertungsdaten nur an der Quartalsgrenze frisch sind."
      ],
      [
        "Worin unterscheidet sie sich von der Jahresplanung?",
        "Der <a href=\"/de/templates/annual.html\">Jahresplan</a> deckt ein ganzes Geschäftsjahr ab. Dies ist der wiederkehrende Quartalsrhythmus darin — der vierwöchige Zyklus aus Entwerfen, Abstimmen, Festlegen, Nachhalten und Abschließen, der sich jedes Quartal wiederholt."
      ],
      [
        "Wie verhält sie sich zur Produkt-Roadmap?",
        "Die <a href=\"/de/templates/product-roadmap.html\">Produkt-Roadmap</a> zeigt, was Sie wann bauen. OKR sind die Ergebnisse, auf die Sie sich für ein Quartal festlegen. Die Roadmap ist üblicherweise eine der Eingaben in den Teamentwurf und kein Ersatz dafür."
      ],
      [
        "Warum überlappen sich Bewertung und Entwurf?",
        "Weil beide dieselben Leute und dieselben Daten zur selben Zeit brauchen. Nach dem Entwurf zu bewerten heißt, sich blind festzulegen; nach der Bewertung zu entwerfen heißt, zwei Wochen zu spät ins Quartal zu starten. Die Vorlage überlappt beides bewusst und zeigt, um wie viel."
      ],
      [
        "Kann ich die Vorlage jedes Quartal wiederverwenden?",
        "Ja — genau dafür ist sie gedacht. Kopieren Sie den Block, verschieben Sie die Termine um ein Quartal, und die Abfolge trägt. Nur die Ziele ändern sich."
      ]
    ]
  },
  'water-treatment-plant-construction-schedule': {
    card: "Erlaubnis, Tiefbau, Maschinentechnik, Probebetrieb, Impfschlamm, Leistungsnachweis.",
    h1: "Bauzeitenplan für den Bau einer Kläranlage",
    metaTitle: "Kläranlage — Bauzeitenplan",
    metaDesc: "Kostenloser Bauzeitenplan für die Kläranlage: Tiefbau, Maschinen- und Elektrotechnik, Probebetrieb, Impfschlamm und der Leistungsnachweis unter Aufsicht.",
    lead: "Eine kostenlose <strong>Bauzeitenplan-Vorlage für den Bau einer Kläranlage</strong>, die den Probebetrieb als das eigentliche Projekt behandelt und nicht als zweiwöchigen Anhang — wasserrechtliche Erlaubnis und Verfahrensbemessung, Bauwerke und Dichtheitsprüfung, Maschinen- und Elektrotechnik, Funktionsprüfung mit Reinwasser, dann der nasse Probebetrieb mit Impfschlamm und schließlich der über Wochen laufende Leistungsnachweis unter behördlicher Begleitung, bevor jemand ein Abnahmeprotokoll unterschreibt. Laden Sie sie für eine Vorlage zur Stufenfreigabe herunter oder öffnen Sie sie online und ziehen Sie die Balken des Probebetriebs auf die Länge, die Ihr Verfahren wirklich braucht.",
    intro: "Jedes andere Bauwerk wird übergeben, wenn die Mängelliste leer ist. Eine Kläranlage wird übergeben, wenn die Wasserbehörde gesehen hat, dass sie über Wochen hinweg durchgehend einen Ablauf innerhalb der Erlaubniswerte produziert. Der Plan ist von diesem Punkt aus rückwärts gebaut:",
    phases: [
      [
        "Erlaubnis, Planung und Vergabe",
        "Charakterisierung des Rohabwassers und Pilotversuche, Verfahrensbemessung und Stoffbilanz nach DWA-A 131, Ausführungsplanung, wasserrechtliche Erlaubnis zur Einleitung nach WHG und Abwasserverordnung sowie die Vergabe der Bauteile mit langer Lieferzeit, die die Montagetermine festnageln. <em>Meilenstein: wasserrechtliche Erlaubnis erteilt.</em>"
      ],
      [
        "Tief- und Ingenieurbau",
        "Erdarbeiten und Gründung, Zulaufbauwerk, Vorklärung, Belebungsbecken, Nachklärung, Filtergalerie und Schlammbehandlung — anschließend die Dichtheitsprüfung jedes einzelnen Beckens. <em>Meilenstein: Bauwerke dicht.</em>"
      ],
      [
        "Maschinen- und Elektrotechnik",
        "Pumpen und Armaturen, Gebläse und Belüfterroste, Filtermaterial, Dosierstationen, UV-Anlage, Schaltanlagen und Netzersatzanlage sowie die Feldinstrumentierung. <em>Meilenstein: technische Fertigstellung.</em>"
      ],
      [
        "Leittechnik und Reinwasserprüfung",
        "Konfiguration des Prozessleitsystems, Schleifenprüfungen (SR-Prüfung), Motorläufe ohne Last und Funktionsprüfung mit Reinwasser — die Regelphilosophie wird bewiesen, bevor der erste Tropfen Rohabwasser in die Anlage läuft."
      ],
      [
        "Nasser Probebetrieb und Beimpfung",
        "Erste Beschickung mit Rohabwasser, Beimpfung mit Belebtschlamm aus einer benachbarten Anlage, Aufbau der Biomasse und des TS-Gehalts im Belebungsbecken, Etablierung der Nitrifikation und Einstellung des Schlammalters. <em>Meilenstein: biologische Reinigungsstufe stabil.</em>"
      ],
      [
        "Leistungsnachweis und Abnahme",
        "Hochfahren auf den Bemessungszufluss, der durchgehende Leistungsnachweis unter behördlicher Begleitung, amtliche Probenahme, ein Belastungslauf bei Spitzenzufluss, Schulung des Betriebspersonals und die förmliche Abnahme nach VOB/B. <em>Meilenstein: Abnahmeprotokoll unterzeichnet.</em>"
      ]
    ],
    callout: "Einen Probebetrieb kann man nicht simulieren. Belebtschlamm ist eine Kultur, die beimpft und dann gezüchtet werden muss, und gerade die nitrifizierenden Bakterien verdoppeln sich langsam — rechnen Sie in Wochen, nicht in Tagen, und bei niedrigen Abwassertemperaturen im Winter in deutlich mehr. Darauf sitzt ein Leistungsnachweis, den die Behörde über einen längeren Zeitraum beim Bemessungszufluss begleitet. Diese beiden Balken sind physikalisch und vertraglich gesetzt, nicht verhandelbar, und sie gehören zu den längsten Vorgängen am rechten Ende Ihres Diagramms.",
    customize: [
      "Setzen Sie die Balken für Beimpfung und Biomasseaufbau auf die Werte Ihres Verfahrensplaners und auf die Jahreszeit, in der Sie anfahren — ein Start im Winter kann allein die Nitrifikation um mehrere Wochen verlängern.",
      "Ändern Sie die Dauer des Leistungsnachweises auf das, was Vertrag und Erlaubnis fordern; vier Wochen sind üblich, viele Vorhaben verlangen länger oder eine Wiederholung, wenn eine Probe reißt.",
      "Ergänzen Sie hinter dem Leistungsnachweis einen Balken für Nachbeprobung und Wiederholung. Von einem Bestehen im ersten Anlauf auszugehen ist der häufigste Terminfehler auf diesen Baustellen.",
      "Zerlegen Sie die Dichtheitsprüfung in eine Zeile je Becken, wenn Sie nacheinander füllen — ein undichtes Becken muss leergefahren, getrocknet, saniert und erneut gefüllt werden.",
      "Ziehen Sie die Konfiguration des Prozessleitsystems nach vorn; sie hängt an den R&I-Fließbildern, nicht am Beton, und wird regelmäßig viel zu spät begonnen.",
      "Setzen Sie erteilte Erlaubnis, Dichtheit der Bauwerke, technische Fertigstellung, erste Beschickung und Abnahme als Meilensteine — das sind die Termine, die Aufsichtsrat und Wasserbehörde gleichermaßen verfolgen."
    ],
    tips: [
      "<strong>Melden Sie den Beginn des Leistungsnachweises früh und schriftlich bei der Wasserbehörde an.</strong> Die Begleitung hängt am Terminkalender der Behörde, nicht an Ihrem, und eine verspätete Anzeige kann die Abnahme um einen Monat schieben, obwohl die Anlage fertig dasteht.",
      "<strong>Sichern Sie den Impfschlamm früh und vertraglich.</strong> Er kommt aus einer laufenden Nachbaranlage, braucht Saugwagen und ein Lieferfenster — eine Anlage, die voll Rohabwasser auf Schlamm wartet, verbrennt Puffer für nichts.",
      "<strong>Beweisen Sie die Leittechnik zuerst mit Reinwasser.</strong> Einem falsch parametrierten Füllstandsgeber oder einer verkehrt herum wirkenden Armatur hinterherzujagen, während die Biologie sich stabilisieren soll, kostet weit mehr als die zwei Wochen, die die Reinwasserphase braucht.",
      "<strong>Legen Sie den Leistungsnachweis nicht über offene Restarbeiten.</strong> Eine Firma, die während des begleiteten Laufs noch Geländer montiert, liefert der Behörde einen bequemen Grund, den Lauf für ungültig zu erklären.",
      "<strong>Schauen Sie auf die Ablaufwerte, nicht auf den Durchflussmesser.</strong> Den Bemessungszufluss zu erreichen beweist die Hydraulik; nur eine durchgehende Beprobung innerhalb der Erlaubniswerte beweist das Verfahren, und nur Letzteres bringt Ihnen die Abnahme.",
      "<strong>Schulen Sie das Betriebspersonal während des Probebetriebs, nicht danach.</strong> Das Inbetriebnahmeteam ist die einzige Gruppe, die die Anlage je in allen Störfällen erlebt, und dieses Wissen verlässt mit ihm die Baustelle."
    ],
    faq: [
      [
        "Wie lange dauert der Bau einer Kläranlage?",
        "Eine mittlere kommunale Anlage läuft üblicherweise 24 bis 36 Monate von der Erlaubnis bis zur Abnahme, und die Vorlage bildet ungefähr das ab. Der Tiefbau ist gut vorhersagbar; die Streuung sitzt vorn im Genehmigungsverfahren und hinten im Probebetrieb."
      ],
      [
        "Warum dauert der Probebetrieb so lange?",
        "Weil eine biologische Reinigungsstufe gezüchtet und nicht eingeschaltet wird. Beimpfung, Aufbau der Biomasse und Etablierung der Nitrifikation brauchen Wochen, und erst wenn das Verfahren stabil läuft, kann der durchgehende Leistungsnachweis beginnen."
      ],
      [
        "Was ist ein behördlich begleiteter Leistungsnachweis?",
        "Ein durchgehender Lauf beim Bemessungszufluss, in dem die Anlage einen Ablauf innerhalb der Werte der wasserrechtlichen Erlaubnis erzeugen muss, beprobt und begleitet von Bauherrschaft und Wasserbehörde. Nicht das Ende der Bauarbeiten, sondern das Bestehen dieses Laufs löst die Übergabe aus."
      ],
      [
        "Lässt sich der Probebetrieb durch früheres Beimpfen verkürzen?",
        "Nur geringfügig. Sie können den Impfschlamm vorbestellen und die Saugwagen an dem Tag bereitstellen, an dem das Rohabwasser kommt — die Wachstumskurve selbst bleibt Biologie. Verkürzen lässt sich das Programm nur im Tiefbau und in der Montage."
      ],
      [
        "Wie plane ich eine gerissene Probe ein?",
        "Mit einem Reservebalken für die Nachbeprobung und, in vielen Verträgen, für die vollständige Wiederholung des Nachweiszeitraums. Einen Plan auf das Bestehen im ersten Anlauf zu bauen ist der Weg, am allerletzten Tor zu überziehen."
      ],
      [
        "Ist die Kläranlagen-Vorlage kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung und ohne Wasserzeichen."
      ]
    ]
  },
  'airport-terminal-expansion-plan': {
    card: "Sperrfenster, Bauzäune, Ausweise, Kontrollkapazität, Gepäckanlage, ORAT, Umschaltung.",
    h1: "Projektplan für die Erweiterung eines Flughafenterminals",
    metaTitle: "Terminalerweiterung — Projektplan",
    metaDesc: "Kostenloser Projektplan für die Terminalerweiterung: Sperrfenster, Bauzäune, Flughafenausweise, Kontrollkapazität, Gepäckanlage, ORAT und Umschaltung.",
    lead: "Eine kostenlose <strong>Projektplan-Vorlage für die Erweiterung eines Flughafenterminals</strong> — für einen Bau an einem Gebäude, das nie schließt. Abschnittsweise Sperrfenster hinter Bauzäunen, Flughafenausweise und begleiteter Zugang zum Sicherheitsbereich, provisorische Fluggastführung, eine Kontrollkapazität, die über jede Umstellung hinweg auf Spitzenstundenniveau bleibt, Einbindung der Gepäckförderanlage, ORAT (Operational Readiness and Airport Transfer, die betriebliche Inbetriebnahme) und eine Umschaltung über Nacht. Laden Sie sie für die Programmsteuerung herunter oder öffnen Sie sie online und legen Sie die Sperrfenster gegen Ihre eigene Verkehrssaison.",
    intro: "Eine Erweiterung ist kein Projekt mit sechs Phasen, sondern eine Folge ausgehandelter Sperrfenster mitten im laufenden Betrieb. Der Plan hält diese betriebliche Nebenbedingung in jeder Phase sichtbar:",
    phases: [
      [
        "Planrecht, Betriebsabstimmung und Genehmigungen",
        "Modellierung der Fluggastströme, Abstimmung mit Fluggesellschaften und Abfertigern, die Bauabschnitts- und Sperrfensterstrategie, Planfeststellung beziehungsweise Plangenehmigung nach LuftVG sowie Zuverlässigkeitsüberprüfungen und Flughafenausweise für die Baufirmen. <em>Meilenstein: Sperrzeitenkalender vereinbart.</em>"
      ],
      [
        "Planung und vorbereitende Maßnahmen",
        "Vorplanung und Ausführungsplanung, Brandschutzkonzept, Verlauf der Bauzäune und provisorische Wegeleitung, Leitungsumlegungen und die provisorischen Fluggastwege, die stehen müssen, bevor irgendetwas geschlossen wird. <em>Meilenstein: vorbereitende Maßnahmen abgeschlossen.</em>"
      ],
      [
        "Sperrfenster 1 — Pier-Verlängerung",
        "Bauzäune stellen, Umbau von Vorfeld und Abstellpositionen, Rohbau und Hülle des Piers, Fluggastbrücken und Gate-Bereiche, danach Rückgabe der Positionen an den Betrieb. <em>Meilenstein: Abstellpositionen wieder in Betrieb.</em>"
      ],
      [
        "Sperrfenster 2 — Sicherheitskontrolle und Check-in",
        "Zuerst der Nachweis der provisorischen Kontrollspuren in der Spitzenstunde, danach Rückbau des Check-in, neue Check-in-Inseln, Ausbau der zentralen Sicherheitskontrolle und Arbeiten in der Grenzkontrolle."
      ],
      [
        "Gepäckanlage und Systemintegration",
        "Montage der Gepäckförderanlage, Gepäckkontrolle (HBS), Sortier- und Volumentests, Fluginformationsanzeigen und Beschallung, Videoüberwachung und Zutrittskontrolle sowie die Common-Use-Abfertigungsplätze (CUTE/CUPPS). <em>Meilenstein: Systemintegration abgeschlossen.</em>"
      ],
      [
        "ORAT, Probebetrieb und Umschaltung",
        "Betriebliche Inbetriebnahme, Einweisung des Personals, Probeabfertigung mit Statistinnen und Statisten, Räumungsübungen, Abnahme durch Luftsicherheits- und Bauaufsichtsbehörde und die Umschaltung über Nacht. <em>Meilenstein: Vollbetrieb.</em>"
      ]
    ],
    callout: "Nehmen Sie niemals Kontrollkapazität weg, bevor der Ersatz in der Spitzenstunde nachgewiesen ist. Alles andere in einem laufenden Terminal lässt sich umgehen — ein längerer Weg, ein provisorisches Schild, ein verlegter Laden. Aber eine Warteschlange an der Sicherheitskontrolle, die ihre Zielzeit reißt, ist ein meldepflichtiges betriebliches Versagen, und sie beendet Ihr Sperrfenster binnen Tagen. Setzen Sie vor jede Umstellung, die die zentrale Kontrolle berührt, einen Meilenstein für den Kapazitätsnachweis.",
    customize: [
      "Ersetzen Sie die beiden Sperrfenster durch Ihre eigenen und stimmen Sie Anfang und Ende jeweils mit dem Flughafenbetrieb ab, nicht mit der Baufirma.",
      "Legen Sie die Sperrfenster in Ihre echte verkehrsschwache Zeit und rechnen Sie mit der Prognose, nicht mit dem Vorjahr — ein Fenster, das im Februar passt, passt im Juli nicht.",
      "Ergänzen Sie eine Zeile je Personalwelle für Zuverlässigkeitsüberprüfung und Ausweisausgabe; die Überprüfung nach LuftSiG hat einen Vorlauf von Wochen und hat schon mehr Baustarts aufgehalten als fehlendes Material.",
      "Setzen Sie überall dort einen Balken für Nachtarbeit, wo die Arbeit nicht im laufenden Betrieb stattfinden kann, und besetzen Sie die dafür nötigen Begleitpersonen mit.",
      "Zerlegen Sie den Test der Gepäckanlage in Montage, Integration und Volumen- beziehungsweise Sortiertest; der letzte findet die Fehler, und genau er wird zusammengedrückt.",
      "Setzen Sie Sperrzeitenkalender, Rückgabe der Abstellpositionen, Kapazitätsnachweis der Kontrolle, Systemintegration und Vollbetrieb als Meilensteine."
    ],
    tips: [
      "<strong>Der Sperrzeitenkalender ist das Programm.</strong> Sobald Flughafenbetrieb, Fluggesellschaften und Abfertiger ihn gezeichnet haben, leitet sich die Bauablauffolge aus ihm ab — und nicht umgekehrt.",
      "<strong>Bauen Sie den provisorischen Weg, bevor Sie ihn brauchen, und gehen Sie ihn unter echter Last ab.</strong> Eine Wegeleitung, die auf dem Plan einleuchtet, versagt um sechs Uhr früh bei vollem Abflugwellenbetrieb und einer Familie mit drei Wagen.",
      "<strong>Behandeln Sie den Zugang zum Sicherheitsbereich als Ressource mit Vorlaufzeit.</strong> Ausweise, Begleitungen, Fahrerlaubnisse für das Vorfeld und Fahrzeugprüfungen brauchen Wochen, und eine begleitete Kolonne arbeitet mit einem Bruchteil der Leistung einer Kolonne im öffentlichen Bereich — das gehört in die Dauern.",
      "<strong>Lassen Sie die Einbindung der Gepäckanlage nicht erst nach dem Rohbau beginnen.</strong> Eine Gepäckförderanlage ist eine Maschine mit langer Testkurve; Sortier- und Abgleichtests brauchen Monate und liegen auf dem kritischen Pfad zur Eröffnung.",
      "<strong>Fahren Sie eine echte Probeabfertigung mit Freiwilligen.</strong> Sie findet die Engstellen in der Schlange, die Lücken in der Anzeige und die Personallücken, die ein reiner Systemtest nie zeigt — und sie ist weit billiger, als sie am ersten Betriebstag zu finden.",
      "<strong>Planen Sie die Umschaltung als Nachtbetrieb mit Abbruchpunkt.</strong> Legen Sie vorher fest, in welchem Zustand das Terminal zu welcher Stunde sein muss, damit umgeschaltet wird, und worauf Sie zurückfallen, wenn es das nicht ist."
    ],
    faq: [
      [
        "Wie lange dauert die Erweiterung eines Flughafenterminals?",
        "Abschnittsweise Erweiterungen im laufenden Betrieb laufen üblicherweise zwei bis vier Jahre, weil in ausgehandelten Sperrfenstern gebaut wird und nicht durchgehend. Die Vorlage nutzt ein Programm von rund zwei Jahren, das Sie durch weitere Sperrfenster verlängern können."
      ],
      [
        "Was ist ORAT, und wann sollte es beginnen?",
        "ORAT — Operational Readiness and Airport Transfer — ist die betriebliche Inbetriebnahme: Verfahren, Personalplanung, Einweisung und Probebetrieb. Der Begriff wird in der Branche auch im Deutschen englisch verwendet. ORAT sollte starten, während noch gebaut wird, typischerweise sechs bis neun Monate vor der Eröffnung, nicht erst nach der Übergabe."
      ],
      [
        "Wie halten wir die Kontrollkapazität während der Bauzeit?",
        "Indem provisorische Kontrollspuren zuerst in Betrieb gehen und in der Spitzenstunde nachgewiesen werden, bevor die bestehende Kontrollstelle angefasst wird. In der Vorlage ist dieser Nachweis ein Meilenstein, der das zweite Sperrfenster freigibt."
      ],
      [
        "Warum dauern Arbeiten im Sicherheitsbereich länger als vergleichbare außerhalb?",
        "Ausweise, Begleitungen, Fahrzeugberechtigungen, eingeschränkte Arbeitszeiten und die Verfügbarkeit von Abstellpositionen senken alle die tatsächliche Leistung. Planen Sie für denselben Umfang im Sicherheitsbereich deutlich längere Dauern und ergänzen Sie einen Balken für die Zuverlässigkeitsüberprüfung."
      ],
      [
        "Worin unterscheidet sich das von einem Terminalneubau?",
        "Ein Neubau hat keine Fluggäste zu schützen und kann rein nach Bauablaufeffizienz sortiert werden. Diese Vorlage ist um Sperrfenster, provisorische Wege und erhaltene Kapazität herum gebaut — genau das macht eine Erweiterung langsamer."
      ],
      [
        "Ist die Vorlage für die Terminalerweiterung kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung und ohne Wasserzeichen."
      ]
    ]
  },
  'fiber-broadband-rollout-plan': {
    card: "Wegerechte, Genehmigungen, Bestandsaufnahme, Ausbauwellen, Messung, Hausanschlüsse.",
    h1: "Projektplan für den Glasfaserausbau",
    metaTitle: "Glasfaserausbau — Projektplan",
    metaDesc: "Kostenloser Projektplan für den Glasfaserausbau: Wegerechte, Aufgrabegenehmigungen, Ausbauwellen, OTDR-Messung, Betriebsbereitschaft, Hausanschlüsse.",
    lead: "Eine kostenlose <strong>Projektplan-Vorlage für den Glasfaserausbau</strong>, gebaut so, wie ein FTTH-Programm tatsächlich läuft — eine wiederholbare Abfolge je Ausbaugebiet, ausgeführt in überlappenden Wellen, getaktet von Wegerechten, Aufgrabegenehmigungen und der Verfügbarkeit mitnutzbarer Leerrohre. Jedes Gebiet endet an seinem eigenen Meilenstein „betriebsbereit“ (Ready for Service), und erst danach beginnen Hausanschlüsse und Umsatz. Laden Sie sie für eine Gremien- oder Investorenvorlage herunter oder öffnen Sie sie online und ergänzen Sie so viele Gebietswellen, wie Ihr Ausbauplan braucht.",
    intro: "Ein Glasfaserausbau ist kein langer Bau, sondern dieselben sechs Schritte über viele Gebiete hinweg, zeitlich versetzt. Der Plan zeigt dieses Muster ausdrücklich, damit Sie eine Welle kopieren, statt für jedes Gebiet einen neuen Plan zu erfinden:",
    phases: [
      [
        "Programmaufsetzung und Grobplanung",
        "Bedarfsermittlung und Priorisierung der Gebiete, gegebenenfalls Markterkundungsverfahren und Förderantrag, Netz- und Standortplanung für die Technikstandorte (PoP), Rahmenvertrag mit den Tiefbaupartnern, Beschaffung von Kernnetz und Anbindung sowie das Bestandsdatenmodell, an dem alles Nachgelagerte hängt. <em>Meilenstein: Ausbauplan als Basisplan gesetzt.</em>"
      ],
      [
        "Genehmigungen, Wegerechte und Bestandsaufnahme",
        "Wegenutzungsverträge mit den Kommunen, Aufgrabegenehmigungen und verkehrsrechtliche Anordnungen, Gestattungsverträge mit privaten Grundstückseigentümern, Eigentümerbeschlüsse in Mehrfamilienhäusern, Bestandsaufnahme mitnutzbarer Leerrohre und Masten sowie Mitnutzungsanträge nach TKG. <em>Meilenstein: Wegerechte für Welle 1 geklärt.</em>"
      ],
      [
        "Gebiet A — Ausbauwelle 1",
        "Ausführungsplanung und Spleißplan, Freispülen der Leerrohre und Tiefbau, Einblasen der Kabel, Spleißen und Aufbau der Netzverteiler, OTDR-Messung und Übergabe der Bestandsdokumentation. <em>Meilenstein: Gebiet A betriebsbereit.</em>"
      ],
      [
        "Gebiet B — Ausbauwelle 2",
        "Dieselbe Abfolge, gestartet, während Gebiet A noch im Tiefbau steckt, damit Kolonnen und Genehmigungen ohne Leerlauf durchlaufen. <em>Meilenstein: Gebiet B betriebsbereit.</em>"
      ],
      [
        "Gebiet C — Ausbauwelle 3",
        "Die dritte Welle, mit ihrem eigenen Vorlauf für die Wegerechte davor — genau der Schritt, den Teams beim Versetzen am häufigsten vergessen. <em>Meilenstein: Gebiet C betriebsbereit.</em>"
      ],
      [
        "Inbetriebnahme, Vermarktung und Hausanschlüsse",
        "Inbetriebnahme der Technikstandorte, Anbindung an die Auftrags- und Abrechnungssysteme, Vorvermarktung, Aufbau der Montagekapazität und die Anschlusskampagnen je Gebiet, die den Umsatz erzeugen. <em>Meilenstein: Anschlussquote geprüft, nächste Welle entschieden.</em>"
      ]
    ],
    callout: "Vor der Betriebsbereitschaft eines Gebiets ist nichts abrechenbar. Erschlossene Haushalte („homes passed“) sind eine Baukennzahl, angeschlossene Haushalte („homes connected“) sind die Umsatzkennzahl, und in der Lücke dazwischen sterben Glasfaser-Geschäftspläne. Setzen Sie je Gebiet einen Meilenstein für die Betriebsbereitschaft, lassen Sie den Anschlussbalken erst dort beginnen, und seien Sie ehrlich: Ein verweigertes Wegerecht oder ein verstopftes Leerrohr verzögert keinen Vorgang, sondern den Umsatz eines ganzen Gebiets um ein Quartal.",
    customize: [
      "Kopieren Sie den Block „Gebiet A“ einmal je Ausbaugebiet und verschieben Sie den Versatz; die Abfolge ist bewusst identisch, damit sie dupliziert und nicht neu geschrieben wird.",
      "Setzen Sie die Balken für Wegerechte und Genehmigungen auf die tatsächlichen Bearbeitungs- und Anhörungsfristen Ihrer Kommunen und Straßenbaulastträger; die schwanken stark und lassen sich nicht dadurch verkürzen, dass man die Baufirma drängt.",
      "Ergänzen Sie einen Balken für die Sanierung von Leerrohren mit realistischem Puffer — Verstopfungen und eingedrückte Rohre findet die Bestandsaufnahme, nicht die Planung, und sie führen zur Umtrassierung ganzer Straßenzüge.",
      "Trennen Sie Einblasen und Spleißen, wenn verschiedene Kolonnen das machen; sie haben unterschiedliche Tagessätze und unterschiedliche Wetterempfindlichkeit.",
      "Fügen Sie dort, wo es passt, einen Teilplan für Mehrfamilienhäuser ein — Gestattungsverträge, Eigentümerbeschlüsse und Inhausverkabelung laufen auf einer völlig anderen Uhr als der Tiefbau in der Straße.",
      "Setzen Sie die Betriebsbereitschaft je Gebiet als Meilenstein und starten Sie den Anschlussbalken dieses Gebiets dort, damit das Diagramm zeigt, dass der Umsatz dem Bau folgt und nicht neben ihm herläuft."
    ],
    tips: [
      "<strong>Starten Sie die Wegerechte, bevor die Planung fertig ist.</strong> Sie sind der Vorgang mit dem längsten Vorlauf im ganzen Programm und hängen an fremden Rechtsabteilungen, nicht an Ihren Planern.",
      "<strong>Nehmen Sie die Leerrohre auf, bevor Sie ein Gebiet in eine Welle einplanen.</strong> Bestandsunterlagen zu mitnutzbarer Infrastruktur sind häufig falsch, und ein verstopftes Rohr nach der Mobilisierung der Kolonnen kostet dem Gebiet seinen Platz im Programm.",
      "<strong>Überlappen Sie die Wellen absichtlich, nicht versehentlich.</strong> Der Sinn der Wellenplanung ist, eine Tiefbaukolonne, eine Spleißkolonne und eine Montagetruppe durchgehend ausgelastet zu halten; Lücken zwischen den Wellen sind reine Kosten.",
      "<strong>Bringen Sie Auftragsannahme, Bereitstellung und Abrechnung schon in Welle 1 zum Laufen, nicht erst vor Welle 3.</strong> Ein Gebiet kann physisch betriebsbereit und trotzdem unverkäuflich sein, weil die Systeme nicht integriert sind.",
      "<strong>Vermarkten Sie ein Gebiet vor, bevor es betriebsbereit ist.</strong> Vorverträge während der Tiefbauphase wandeln weit besser um als eine kalte Kampagne, nachdem die Bagger weg sind, und sie ziehen die Anschlusskurve nach vorn.",
      "<strong>Verfolgen Sie die Kosten je erschlossenem Haushalt gebietsweise, nicht programmweit.</strong> Ein schwieriges Gebiet mit viel Rohrsanierung verschwindet im Durchschnitt und frisst still den Puffer von drei einfachen Gebieten."
    ],
    faq: [
      [
        "Wie lange dauert der Glasfaserausbau je Gebiet?",
        "Ein typisches Ausbaugebiet mit einigen tausend Adressen läuft vier bis sechs Monate von der Ausführungsplanung bis zur Betriebsbereitschaft, und genau das nutzt die Vorlage. Die Programmlänge ergibt sich daraus, wie viele Gebiete parallel laufen, nicht aus der Dauer je Gebiet."
      ],
      [
        "Was heißt betriebsbereit beziehungsweise RFS?",
        "„Ready for Service“: der Punkt, an dem ein Gebiet gebaut, gemessen und in die Auftragssysteme eingepflegt ist, sodass Kundinnen und Kunden tatsächlich angeschlossen werden können. Das ist der Meilenstein, der den Umsatz startet, und er gehört je Gebiet verfolgt."
      ],
      [
        "Warum liegen Wegerechte auf dem kritischen Pfad?",
        "Weil dahinter Dritte stehen — Kommunen, Straßenbaulastträger, private Eigentümer, Wohnungseigentümergemeinschaften —, die keinen Anlass haben, sich nach Ihrem Takt zu richten. Sie dauern in der Regel Monate, lassen sich nicht durch mehr Personal verkürzen, und eine einzige Verweigerung kann die Trassenplanung eines Gebiets kippen."
      ],
      [
        "Wie viele Wellen sollten gleichzeitig laufen?",
        "So viele, dass Tiefbau- und Spleißkolonnen durchgehend ausgelastet sind, ohne dass Sie den Genehmigungsdurchsatz der Straßenverkehrsbehörde sprengen. Zwei bis drei überlappende Wellen sind üblich; die Vorlage zeigt drei."
      ],
      [
        "Warum liegen die angeschlossenen weit unter den erschlossenen Haushalten?",
        "Weil der Anschluss von Vermarktung, Montagekapazität und den Laufzeiten bestehender Verträge abhängt — nichts davon passiert an dem Tag, an dem ein Gebiet betriebsbereit wird. Modellieren Sie die Anschlusskurve getrennt von der Baukurve."
      ],
      [
        "Ist die Vorlage für den Glasfaserausbau kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung und ohne Wasserzeichen."
      ]
    ]
  },
  'stadium-construction-schedule': {
    card: "Rohbau, Tribünen, Dachhub, Ausbau, Rasenanwuchs, Gebrauchsabnahme, Eröffnungsspiel.",
    h1: "Bauzeitenplan für den Stadionbau",
    metaTitle: "Stadionbau — Bauzeitenplan",
    metaDesc: "Kostenloser Bauzeitenplan für den Stadionbau: Rohbau und Fertigteiltribünen, Dachhub, Ausbau, Rasenanwuchs, Gebrauchsabnahme und Eröffnungsspiel.",
    lead: "Eine kostenlose <strong>Bauzeitenplan-Vorlage für den Stadionbau</strong>, rückwärts geplant von einem Termin, den niemand im Projekt in der Hand hat — dem Eröffnungsspiel im Rahmenterminkalender der Liga. Sie umfasst Rohbau und Fertigteiltribünen, Dachtragwerk und Seilnetz mit ihrem Wetterfenster für den großen Hub, den Ausbau von Umläufen und Hospitality, den Rasenaufbau mit seiner Anwuchszeit sowie die Belastungsproben und die Gebrauchsabnahme, die zwischen der Fertigstellung und einem vollen Haus stehen. Laden Sie sie für die Aufsichtsratsvorlage herunter oder öffnen Sie sie online und ziehen Sie den Spieltermin, um zu sehen, was zerbricht.",
    intro: "Die meisten Bauzeitenpläne verhandeln ihr Ende. Dieser kann das nicht: Der Spielplan ist veröffentlicht, die Tickets sind verkauft, und zwei der längsten Vorgänge — Rasenanwuchs und Dachhub — hängen an Wetter und Biologie, nicht an der Zahl der Leute auf der Baustelle. Der Plan ist entsprechend sortiert:",
    phases: [
      [
        "Planung, Genehmigungen und Baufeldfreimachung",
        "Kapazitätsvorgabe, der feststehende Eröffnungstermin, Baugenehmigung und die Strategie für Sicherheitskonzept und Gebrauchsabnahme nach der Versammlungsstättenverordnung, Entwurf der Schüssel, Vergabe des Stahlbaupakets und Baufeldfreimachung. <em>Meilenstein: Termin des Eröffnungsspiels fixiert.</em>"
      ],
      [
        "Gründung und Schüssel",
        "Pfahlgründung und Fundamente, Untergeschoss und Versorgungstunnel, Ortbetonskelett, Fertigung und Montage der Tribünenfertigteile. <em>Meilenstein: Rohbau der Schüssel fertig.</em>"
      ],
      [
        "Dach und Hülle",
        "Fertigung des Dachstahls, Druckring, Vorspannen des Seilnetzes, der große Hub innerhalb seines Wetterfensters und die Fassade. <em>Meilenstein: Gebäudehülle dicht.</em>"
      ],
      [
        "Ausbau, Hospitality und Technik",
        "Umläufe, Logen und Businessbereiche, Gastronomie, Bestuhlung, Flutlicht und Videowände, Drehkreuze und Ticketing, Medienarbeitsplätze und die Stadionsicherheitszentrale."
      ],
      [
        "Rasen und Spielfeld",
        "Aushub und Dränage, Rasenheizung und Beregnung, Rasentragschicht, Verlegen des Hybridrasens und die Anwuchszeit. <em>Meilenstein: Spielfeld an die Platzwarte übergeben.</em>"
      ],
      [
        "Belastungsproben, Abnahme und Eröffnung",
        "Sicherheitskonzept mit Polizei, Feuerwehr und Ordnungsamt, Ordnerdienst, eine Belastungsprobe mit reduzierter Zuschauerzahl, eine zweite nahe der Vollauslastung, Gebrauchsabnahme durch die Bauaufsicht und Anpfiff. <em>Meilenstein: Eröffnungsspiel.</em>"
      ]
    ],
    callout: "Zwei Balken in diesem Diagramm lassen sich nicht stauchen. Der Dachhub braucht ein Fenster mit ruhigem Wetter und einen Kran, der Monate vorher gebucht ist; der Rasen braucht eine Anwuchszeit, gemessen in Wochen mit der richtigen Temperatur und genug Licht, bevor er einem Spiel standhält. Beide liegen spät im Programm, beide sind saisonabhängig, und beide münden in einen Spieltermin, der sich nicht verschiebt. Planen Sie diese beiden zuerst und legen Sie den Rest der Arbeiten um sie herum.",
    customize: [
      "Tragen Sie Ihren echten Termin für das Eröffnungsspiel ein und rechnen Sie rückwärts — die Vorlage ist bewusst so gebaut, dass der letzte Meilenstein fest steht und der Puffer weiter vorn sitzt.",
      "Setzen Sie den Anwuchsbalken auf Ihr Klima und Ihr Rasensystem; eine Verlegung im Frühjahr mit langen Tagen wächst weit schneller an als eine im Herbst, und dieser Unterschied kann ein ganzer Spieltag sein.",
      "Legen Sie den Dachhub in Ihre tatsächlich windarme Jahreszeit und hängen Sie einen Reservebalken dahinter; ein wetterbedingt abgesagter Hub rutscht nicht um einen Tag, sondern in das nächste Fenster.",
      "Ergänzen Sie eine Zeile je Belastungsprobe, die Ihre Genehmigungsbehörde verlangt — meist ist es eine gestufte Reihe und nicht ein einzelner Test bei voller Auslastung.",
      "Zerlegen Sie den Ausbau nach Rang oder Tribüne, wenn das Stadion teilweise öffnen kann; manche Häuser erhalten die Abnahme zunächst für eine reduzierte Zuschauerzahl und bauen den Rest danach fertig.",
      "Setzen Sie Spieltermin, Rohbau fertig, Hülle dicht, Rasenübergabe, Gebrauchsabnahme und Anpfiff als Meilensteine — nach genau diesen sechs Terminen fragt ein Vereinsgremium."
    ],
    tips: [
      "<strong>Behandeln Sie den Spieltermin als Randbedingung, nicht als Ziel.</strong> Wenn die Rückwärtsrechnung sagt, dass der Dachhub vor dem Winter stattfinden muss, ist das die Antwort — darüber in der Baubesprechung zu streiten ändert den Wind nicht.",
      "<strong>Bestellen Sie die Tribünenfertigteile peinlich früh.</strong> Die Fertigung ist eine Warteschlange im Werk, und die Tribünenelemente sind der Posten, der den Rohbau am ehesten aufhält, während alle auf das Dach schauen.",
      "<strong>Führen Sie den Rasenaufbau als eigenes Projekt im Plan, nicht als Zeile beim Garten- und Landschaftsbau.</strong> Dränage, Rasenheizung, Tragschicht und Anwuchs sind eine Abfolge von zwei bis drei Monaten mit einem Greenkeeper, nicht eine Woche Rollrasen.",
      "<strong>Belastungsproben sind Genehmigungsrecht, kein Marketing.</strong> Die Behörde will Ordnerdienst, Einlass, Auslass und Räumung bei steigender Belegung sehen, bevor sie freigibt, und sie kürzt diese Reihe nicht für einen Übertragungstermin.",
      "<strong>Nehmen Sie Sicherheitszentrale, Beschallung und Videoüberwachung vor der ersten Belastungsprobe in Betrieb.</strong> An diesen Systemen hängt die Abnahme tatsächlich, und sie werden üblicherweise zuletzt eingeschaltet.",
      "<strong>Halten Sie eine Eröffnung mit reduzierter Kapazität als echten Rückfallplan.</strong> Das in der letzten Woche zu entscheiden ist Chaos; es sechs Monate vorher mit einem definierten Auslöser zu entscheiden ist ein Plan."
    ],
    faq: [
      [
        "Wie lange dauert der Bau eines Stadions?",
        "Ein mittelgroßer Neubau läuft nach den Genehmigungen typischerweise 24 bis 36 Monate auf der Baustelle, und ungefähr das zeigt die Vorlage. Große Häuser mit aufwendigen Dächern brauchen regelmäßig länger, getrieben von der Abfolge aus Stahlbau und Seilnetz."
      ],
      [
        "Warum dauert der Rasen so lange?",
        "Weil die Fläche wächst und nicht eingebaut wird. Nach Dränage, Rasenheizung und Tragschicht braucht ein Hybridrasen mehrere Wochen Anwuchs bei passender Temperatur und genug Licht, bevor er Spielbelastung aushält."
      ],
      [
        "Was passiert, wenn wir das Eröffnungsspiel verpassen?",
        "Vereine verlegen das Spiel in der Regel oder eröffnen mit reduzierter Kapazität — beides ist teuer und öffentlich sichtbar. Genau deshalb enthält die Vorlage eine gestufte Reihe von Belastungsproben und eine vorab getroffene Entscheidung über die Rückfallkapazität, statt beides dem Zufall zu überlassen."
      ],
      [
        "Wann sollte der Dachhub liegen?",
        "In Ihrem ruhigsten saisonalen Fenster, mit Kran und Spezialkolonne lange vorher gebucht und einem benannten Ersatzfenster. Ein wetterbedingt verschobener Hub wartet üblicherweise auf das nächste Fenster, nicht auf den nächsten Tag."
      ],
      [
        "Was ist die Gebrauchsabnahme, und wann beantragen wir sie?",
        "Die Freigabe zur Nutzung als Versammlungsstätte für eine bestimmte Zuschauerzahl, erteilt von der Bauaufsicht nach Begehungen, geprüftem Sicherheitskonzept und den Belastungsproben. Sie gehört Monate vor der Eröffnung auf den Weg gebracht, nicht nach der Fertigstellung."
      ],
      [
        "Ist die Stadionbau-Vorlage kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung und ohne Wasserzeichen."
      ]
    ]
  },
  'museum-exhibition-planning-timeline': {
    card: "Leihanfragen, Rückgabezusage, Restaurierung, Kuriere, Klima, Aufbau, Abbau.",
    h1: "Zeitplan für die Ausstellungsplanung im Museum",
    metaTitle: "Ausstellungsplanung im Museum",
    metaDesc: "Kostenloser Zeitplan für die Ausstellungsplanung: Leihanfragen, Rückgabezusage, Restaurierung, Kuriertermine, Klimastabilisierung, Aufbau und Abbau.",
    lead: "Eine kostenlose <strong>Zeitplan-Vorlage für die Ausstellungsplanung im Museum</strong>, so geordnet, wie Ausstellungen tatsächlich laufen — um die Leihgaben herum. Leihanfragen und Antworten der Leihgeber, Facility Report und staatliche Ausfallgarantie, Versicherung und Kurierkalender, Restaurierung und Zustandsprotokolle, Klimastabilisierung des Saals, bevor auch nur ein Objekt eintrifft, dann der Aufbau unter Kurieraufsicht und ein feststehender Eröffnungstermin. Laden Sie sie für die Projektsteuerung herunter oder öffnen Sie sie online und setzen Sie Ihren eigenen Eröffnungsabend.",
    intro: "Ein geliehenes Objekt kommt zu den Bedingungen des Leihgebers, in seiner Kiste, mit seinem Kurier, an einem Termin, der ihm passt. Jeder andere Termin der Ausstellung leitet sich daraus ab, also stellt der Plan Leihverkehr und Kuriere in die Mitte, statt sie als Logistik abzuhandeln:",
    phases: [
      [
        "Konzept und kuratorische Entwicklung",
        "Ausstellungsthese, Wunschliste der Objekte, Budgetfreigabe, Antrag auf staatliche Ausfallgarantie sowie der Katalog, der von allem im Projekt den längsten Vorlauf hat. <em>Meilenstein: Eröffnungstermin fixiert.</em>"
      ],
      [
        "Leihverkehr und Leihverträge",
        "Formale Leihanfragen, Antworten und Ersatzobjekte, Facility Report — das international übliche Formular zu Klima, Sicherheit und Handhabung Ihres Hauses —, Versicherung und Wertermittlung, unterzeichnete Leihverträge, rechtsverbindliche Rückgabezusage nach dem Kulturgutschutzgesetz und die Kurierauflagen. <em>Meilenstein: Objektliste eingefroren.</em>"
      ],
      [
        "Gestaltung und Ausstellungsbau",
        "Ausstellungsgestaltung und Raumplanung, Grafik und Vermittlungstexte, Vitrinen- und Halterungsentwurf, Fertigung mit Prüfung auf Ausgasung sowie Medien- und Lichtplanung."
      ],
      [
        "Restaurierung, Kuriere und Transport",
        "Zustandserfassung, Restaurierung und Rahmung, Kistenspezifikationen, Ausfuhrgenehmigungen und Zollabwicklung sowie die kurierbegleitete Abholung selbst. <em>Meilenstein: Objekte im Haus.</em>"
      ],
      [
        "Saalvorbereitung und Aufbau",
        "Abbau der Vorgängerausstellung, Neuanstrich, Klimastabilisierung mit Datenaufzeichnung, Vitrinen und Licht, Eingangszustandsprotokolle gemeinsam mit den Kurieren, Montage der Objekte und Versiegeln der Vitrinen."
      ],
      [
        "Eröffnung, Laufzeit und Abbau",
        "Begehung, Pressevorbesichtigung, Eröffnung, Begleitprogramm, Überwachung der Lichtbelastung und Objektwechsel, danach Abbau und Rücktransport. <em>Meilenstein: Objekte an die Leihgeber zurückgegeben.</em>"
      ]
    ],
    callout: "Der Saal muss klimatisch stabil sein, bevor Objekte hineinkommen, und Stabilität braucht Zeit. Frische Farbe gast aus, neue Vitrinen gasen aus, und relative Feuchte und Temperatur müssen über einen längeren Zeitraum am vereinbarten Sollwert aufgezeichnet werden, bevor der Kurier eines Leihgebers sein Objekt aus der Kiste lässt. Setzen Sie vor den Aufbau einen Meilenstein „Klimawerte aufgezeichnet und akzeptiert“ — rutscht der, stehen die Kuriere trotzdem in Ihrem Saal, und der Eröffnungstermin ist keinen Tag später geworden.",
    customize: [
      "Setzen Sie den Balken für die Leihanfragen auf mindestens zwölf bis achtzehn Monate vor der Eröffnung, wenn große internationale Häuser dabei sind; manche Institutionen haben Gremien, die nur wenige Male im Jahr tagen.",
      "Ergänzen Sie hinter den Antworten der Leihgeber eine Schleife für Ersatzobjekte. Absagen sind normal, und der Plan sollte zeigen, wie lange es dauert, ein Alternativobjekt zu finden und anzufragen.",
      "Verlängern Sie die Klimastabilisierung, wenn Sie kurz vor dem Aufbau streichen oder neue Vitrinen stellen — die Ausgasung ist der Grund, warum Leihgeber die Klimaprotokolle sehen wollen.",
      "Führen Sie eine Zeile je Kurier, wenn die Objekte mit getrennten Flügen kommen; jeder braucht Begleitung, Unterkunft und ein eigenes Zeitfenster für das Zustandsprotokoll im Saal.",
      "Tragen Sie in die Laufzeit die Wechsel lichtempfindlicher Objekte ein, wo ein Werk nach den Lux- und Belastungsgrenzen seines Leihgebers nicht über die volle Dauer gezeigt werden darf.",
      "Setzen Sie Eröffnungstermin, eingefrorene Objektliste, Objekte im Haus und Objekte zurückgegeben als Meilensteine — auf diese vier Termine schauen Registrarin und Direktion gleichermaßen."
    ],
    tips: [
      "<strong>Frieren Sie die Objektliste ein und verteidigen Sie sie dann.</strong> Jede späte Ergänzung startet Leihvertrag, Versicherung, Verpackung, Halterungsbau und Grafik neu — es ist die teuerste Art von Änderung, die eine Ausstellung kennt.",
      "<strong>Schicken Sie den Facility Report früh und unaufgefordert.</strong> Leihgeber bewerten Ihr Haus, bevor sie Ihr Vorhaben bewerten, und ein veralteter Bericht ist eine häufige und vollständig vermeidbare Verzögerung.",
      "<strong>Buchen Sie Kuriere nach den Kalendern der Leihgeber, nicht nach Ihrem.</strong> Ein Kurier ist eine namentlich benannte Person aus dem leihgebenden Haus mit eigenem Terminplan; dass zwei Leihgeber dieselbe Woche wollen, ist eine reale und häufige Einschränkung.",
      "<strong>Bauen Sie Halterungen nach dem Einfrieren der Liste, nicht davor.</strong> Halterungen sind objektspezifische Einzelanfertigungen, und ein ausgetauschtes Werk bedeutet eine neue Halterung, für die im Plan keine Zeit steht.",
      "<strong>Planen Sie Zustandsprotokolle als Saalzeit, nicht als Papierkram.</strong> Eingangsprotokolle entstehen im Beisein des Kuriers, Objekt für Objekt, und sie belegen Tage des Aufbaufensters, die regelmäßig niemand eingeplant hat.",
      "<strong>Planen Sie Abbau und Rücktransport mit derselben Sorgfalt wie den Aufbau.</strong> Ausgangsprotokolle, Neuverpackung und Kurierbegleitung wiederholen sich alle, und Leihgeber beurteilen Sie an der Rückgabe genauso wie an der Ausstellung."
    ],
    faq: [
      [
        "Wie früh sollte die Ausstellungsplanung beginnen?",
        "Bei einer Ausstellung mit Leihgaben sind zwei bis drei Jahre normal, und die Vorlage deckt ungefähr die letzten achtzehn Monate ab. Leihanfragen an große internationale Häuser sollten mindestens zwölf bis achtzehn Monate vor der Eröffnung heraus sein."
      ],
      [
        "Was ist ein Facility Report?",
        "Ein standardisiertes Formular, das Klimaführung, Sicherheit, Brandschutz und Handhabungsverfahren Ihres Hauses beschreibt. Der Begriff wird auch im deutschen Leihverkehr englisch verwendet. Leihgeber entscheiden daran, ob sie überhaupt verleihen — er sollte aktuell sein, bevor die Anfragen rausgehen."
      ],
      [
        "Warum muss sich der Saal vor dem Aufbau einklimatisieren?",
        "Weil frische Farbe und neue Vitrinen ausgasen und Temperatur und relative Feuchte lange genug am vereinbarten Sollwert liegen müssen, um aufgezeichnet zu werden. Kuriere weigern sich regelmäßig, in ein unbelegtes Raumklima auszupacken."
      ],
      [
        "Was passiert, wenn ein Leihgeber absagt?",
        "Sie tauschen das Objekt aus, und damit startet für dieses Werk die Kette aus Vertrag, Versicherung, Verpackung und Halterungsbau von vorn. Planen Sie eine Ersatzschleife ein, statt anzunehmen, dass jede Anfrage bewilligt wird."
      ],
      [
        "Wie lang sollte das Aufbaufenster sein?",
        "Rechnen Sie mit mehreren Wochen zwischen Saalübergabe und Eröffnung: Vitrinen und Licht, Grafik, Eingangsprotokolle mit den Kurieren, Montage und Versiegeln laufen nacheinander und Objekt für Objekt."
      ],
      [
        "Ist die Vorlage für die Ausstellungsplanung kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung und ohne Wasserzeichen."
      ]
    ]
  },
  'iso-27001-certification-plan': {
    card: "Anwendungsbereich, Risiken, SoA, Maßnahmen, internes Audit, Stufe 1 und Stufe 2.",
    h1: "Projektplan für die ISO-27001-Zertifizierung",
    metaTitle: "ISO 27001 — Zertifizierungsplan",
    metaDesc: "Kostenloser Plan für die ISO-27001-Zertifizierung: Anwendungsbereich, Risikobewertung, SoA, Maßnahmen, internes Audit, Managementbewertung, Stufe 1 und 2.",
    lead: "Eine kostenlose <strong>Projektplan-Vorlage für die ISO-27001-Zertifizierung</strong>, aufgebaut so, wie eine Zertifizierungsstelle Sie tatsächlich bewertet — Anwendungsbereich des ISMS, Risikobewertung und Erklärung zur Anwendbarkeit, Umsetzung der Maßnahmen, eine Zeit echten Betriebs, die Nachweise erzeugt, dann internes Audit und Managementbewertung, die beide vor Stufe 2 abgeschlossen sein müssen, und schließlich das zweistufige Audit selbst. Wenn Sie parallel ein Qualitätsmanagementsystem aufbauen: Der <a href=\"/de/templates/iso-9001-certification-plan.html\">Projektplan für die ISO-9001-Zertifizierung</a> nutzt dieselbe Auditform.",
    intro: "Das Zertifizierungsaudit ist kein Termin, sondern eine Dokumentenprüfung, danach eine zwingende Lücke, in der Sie beheben, was sie gefunden hat, und erst dann ein vollständiges Nachweisaudit. Genau diese Lücke ist der Grund, warum sich ISO-27001-Pläne am Ende nicht zusammendrücken lassen:",
    phases: [
      [
        "Anwendungsbereich und Gap-Analyse",
        "Grenzen des ISMS, interessierte Parteien und rechtliche Anforderungen, eine Gap-Analyse gegen die Maßnahmen aus Anhang A und die Auswahl der bei der DAkkS akkreditierten Zertifizierungsstelle — bei der Gelegenheit werden auch die beiden Audittermine gebucht. <em>Meilenstein: Anwendungsbereich und Ausgangslage abgestimmt.</em>"
      ],
      [
        "Risikobewertung und Erklärung zur Anwendbarkeit",
        "Inventar der Informationswerte, die Risikomethodik, Identifikation und Bewertung der Risiken, der Risikobehandlungsplan und die Erklärung zur Anwendbarkeit (Statement of Applicability), die festhält, welche Maßnahmen gelten und warum. <em>Meilenstein: SoA und Risikobehandlung freigegeben.</em>"
      ],
      [
        "Umsetzung der Maßnahmen",
        "Das Regelwerk aus Richtlinien, Zugriffssteuerung und Identitäten, Lieferanten- und Cloud-Maßnahmen, sichere Entwicklung und Änderungssteuerung, physische und personelle Maßnahmen sowie Verfahren für Sicherheitsvorfälle und Notbetrieb. <em>Meilenstein: Maßnahmen umgesetzt.</em>"
      ],
      [
        "Betrieb und Sammeln von Nachweisen",
        "Die Phase, die sich nicht verkürzen lässt: die Maßnahmen lange genug betreiben, dass Berechtigungsprüfungen, Protokollauswertungen, Lieferantenbewertungen und eine Notfallübung tatsächlich stattgefunden und Nachweise hinterlassen haben. <em>Meilenstein: drei Monate Nachweise vorhanden.</em>"
      ],
      [
        "Internes Audit und Managementbewertung",
        "Ein vollständiges internes Audit des ISMS, die dabei festgestellten Abweichungen, deren Korrekturmaßnahmen und die Managementbewertung. Beides ist zwingend vorgeschrieben und beides muss vor Stufe 2 abgeschlossen sein. <em>Meilenstein: internes Audit und Managementbewertung abgeschlossen.</em>"
      ],
      [
        "Audit Stufe 1 und Stufe 2",
        "Die Dokumentenprüfung in Stufe 1, ihre Feststellungen, das Zeitfenster für Korrekturmaßnahmen, die Auffrischung der Nachweise, das Audit der Stufe 2, das Schließen der Abweichungen und die Zertifikatserteilung. <em>Meilenstein: Zertifikat erteilt.</em>"
      ]
    ],
    callout: "Stufe 1 und Stufe 2 sind mit Absicht getrennt, und der Abstand dazwischen ist kein Puffer. Stufe 1 prüft, ob Ihre ISMS-Dokumentation überhaupt zertifizierungsfähig ist; sie erzeugt fast immer Feststellungen, und Stufe 2 geht nicht durch, solange die offen sind. Planen Sie sechs bis acht Wochen zwischen die beiden Besuche und legen Sie echte Arbeit hinein. Die zweite unverrückbare Größe ist verstrichene Zeit: Im Audit der Stufe 2 zieht die Auditorin Stichproben aus Aufzeichnungen, und Aufzeichnungen entstehen nur, wenn die Maßnahmen gelaufen sind. Sie können keine Berechtigungsprüfung im März einführen und im April ein Jahr Nachweise vorlegen.",
    customize: [
      "Beauftragen Sie die Zertifizierungsstelle früh und setzen Sie zuerst den Termin für Stufe 2 — alles davor ist ein Countdown, keine Schätzung.",
      "Lassen Sie mindestens sechs Wochen zwischen Stufe 1 und Stufe 2 für Korrekturmaßnahmen; diese Spanne zu kürzen ist die häufigste Ursache für ein nicht bestandenes Audit der Stufe 2.",
      "Zerlegen Sie die Umsetzung in eine Zeile je Themenblock aus Anhang A oder je einzelner Maßnahme, sobald die Erklärung zur Anwendbarkeit freigegeben ist.",
      "Verlängern Sie die Betriebsphase, wenn Ihre Risikobehandlung an Maßnahmen mit quartalsweisem oder jährlichem Turnus hängt — Sie brauchen mindestens einen vollständigen Durchlauf als Nachweis.",
      "Ergänzen Sie Zeilen für jeden Ausschluss aus dem Anwendungsbereich, den Sie begründen müssen; genau daran wird Stufe 1 am härtesten bohren.",
      "Nehmen Sie das erste Überwachungsaudit im Folgejahr als datierte Zeile mit auf, damit das ISMS über die Zertifikatserteilung hinaus mit Personal hinterlegt ist."
    ],
    tips: [
      "<strong>Die Erklärung zur Anwendbarkeit treibt alles, was danach kommt.</strong> Bis sie freigegeben ist, wissen Sie nicht, welche Maßnahmen Sie bauen — Aufwandsschätzungen vor diesem Punkt sind geraten.",
      "<strong>Führen Sie das interne Audit ernsthaft.</strong> Ein weiches internes Audit, das nichts findet, verschiebt die Feststellungen nur nach Stufe 2, wo sie Sie den Zertifikatstermin kosten statt zwei Wochen.",
      "<strong>Halten Sie die Managementbewertung als protokollierte Sitzung ab.</strong> Sie ist eine ausdrückliche Anforderung mit festgelegten Eingaben, und Auditoren lesen das Protokoll, statt Ihnen zu glauben.",
      "<strong>Machen Sie die Übung zu Vorfall und Notbetrieb vor Stufe 2.</strong> Sie ist einer der wenigen Nachweise, die Sie terminieren können, statt auf sie zu warten.",
      "<strong>Erwägen Sie die Variante ISO 27001 auf Basis von IT-Grundschutz.</strong> Wenn Sie ohnehin nach den BSI-Bausteinen arbeiten oder öffentliche Auftraggeber bedienen, ändert das Auditform und Vorbereitungsaufwand spürbar — das gehört vor die Auswahl der Zertifizierungsstelle, nicht danach.",
      "<strong>Vermengen Sie das nicht mit SOC 2.</strong> Die Maßnahmen überschneiden sich, die Mechanik nicht: ISO 27001 ist eine Zertifizierung mit Dreijahreszyklus und Überwachungsaudits, SOC 2 ist ein Prüfungsbericht (Attestation) einer US-Wirtschaftsprüfungsgesellschaft gegen die Trust Services Criteria des AICPA. Diese Begriffe bleiben englisch, weil sie eine US-Prüfungsordnung bezeichnen, für die es keine deutsche Entsprechung gibt."
    ],
    faq: [
      [
        "Wie lange dauert eine ISO-27001-Zertifizierung?",
        "Aus dem Stand, ohne bestehendes ISMS, üblicherweise zwölf bis achtzehn Monate. Die Vorlage nutzt rund fünfzehn. Was sich nicht zusammendrücken lässt, ist die Betriebsphase, die die Nachweise erzeugt, und der zwingende Abstand zwischen Stufe 1 und Stufe 2."
      ],
      [
        "Worin unterscheiden sich Stufe 1 und Stufe 2?",
        "Stufe 1 ist eine Dokumenten- und Reifeprüfung — Anwendungsbereich, Richtlinien, Risikobewertung, Erklärung zur Anwendbarkeit sowie die Nachweise zu internem Audit und Managementbewertung. Stufe 2 ist das vollständige Audit der Frage, ob das ISMS tatsächlich gelebt wird. Feststellungen aus Stufe 1 müssen vor Stufe 2 geschlossen sein, und deshalb lässt die Vorlage ein Fenster für Korrekturmaßnahmen dazwischen."
      ],
      [
        "Brauche ich internes Audit und Managementbewertung vor Stufe 2?",
        "Ja. Beides sind verbindliche Anforderungen der Norm, und zu beidem wird die Auditorin Nachweise sehen wollen. Die Vorlage legt sie vor Stufe 1, damit die daraus entstehenden Korrekturmaßnahmen noch Zeit haben."
      ],
      [
        "Ist ISO 27001 dasselbe wie SOC 2?",
        "Nein. ISO 27001 ist eine internationale Norm, gegen die Sie von einer akkreditierten Stelle zertifiziert werden, im Dreijahreszyklus mit jährlichen Überwachungsaudits. SOC 2 ist eine Attestation einer US-Wirtschaftsprüfungsgesellschaft gegen die Trust Services Criteria, und ein Type-II-Bericht deckt einen definierten Beobachtungszeitraum ab, statt ein Zertifikat zu erteilen. Dafür nutzen Sie den <a href=\"/de/templates/soc2-compliance-timeline.html\">SOC-2-Zeitplan</a>; die beiden Pläne überschneiden sich bei den Maßnahmen, nicht bei den Terminen."
      ],
      [
        "Worin unterscheidet sich das vom ISO-9001-Plan?",
        "Die Auditmechanik ist dieselbe zweistufige Form, die Inhalte sind es nicht: ISO 9001 ist ein Qualitätsmanagementsystem, dies ist ein Informationssicherheits-Managementsystem auf Basis einer Risikobewertung und einer Erklärung zur Anwendbarkeit. Wenn Sie beides zertifizieren, schauen Sie in den <a href=\"/de/templates/iso-9001-certification-plan.html\">Projektplan für die ISO-9001-Zertifizierung</a>."
      ],
      [
        "Ist die ISO-27001-Vorlage kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung und ohne Wasserzeichen."
      ]
    ]
  },
  'crm-implementation-plan': {
    card: "Prozessdesign, Datenbereinigung, Konfiguration, Testmigrationen, Schulung, Umstellung.",
    h1: "Projektplan für die CRM-Einführung",
    metaTitle: "CRM-Einführung — Projektplan",
    metaDesc: "Kostenloser Projektplan für die CRM-Einführung: Prozessdesign, Datenbereinigung, Konfiguration, Testmigrationen, Schulung, Umstellung zum Quartalswechsel.",
    lead: "Eine kostenlose <strong>Projektplan-Vorlage für die CRM-Einführung</strong>, die die Arbeit dorthin legt, wo sie wirklich liegt — nicht in die Konfiguration von Objekten, sondern in das Prüfen, Entdoppeln und Abstimmen der Kundendaten, die Sie umziehen wollen, und in eine Umstellung an einem Punkt im Quartal, der die Prognose nicht zerlegt. Enthalten sind Prozessdesign, Datenbereinigung, Konfiguration und Schnittstellen, Testmigrationen, Schulungsgruppen, die Umstellung und der erste vollständige Prognosezyklus im neuen System.",
    intro: "Für die Konfiguration plant jeder Budget ein, für die Daten niemand. Aber wer als Vertriebsmitarbeiterin das neue CRM öffnet und ihren größten Kunden dreimal darin findet, hört noch am selben Vormittag auf, es zu benutzen, und keine Schulung holt das zurück:",
    phases: [
      [
        "Aufnahme und Prozessdesign",
        "Vertriebsprozess und Definition der Phasen, Definitionen für Pipeline und Prognose, Feld- und Objektdesign sowie die Auswertungsanforderungen, an denen die ganze Konfiguration bemessen wird. Parallel dazu die Datenschutzarbeit: Verzeichnis der Verarbeitungstätigkeiten, Auftragsverarbeitungsvertrag mit dem Anbieter und ein Löschkonzept mit Speicherfristen. <em>Meilenstein: Design freigegeben.</em>"
      ],
      [
        "Datenprüfung, Bereinigung und Entdoppelung",
        "Auszüge aus den Quellsystemen, Qualitätsanalyse, Abgleichschlüssel und Entdoppelungsregeln, der automatisierte Durchlauf, die Datensätze, die nur der Vertrieb korrigieren kann, und das Aufräumen der Konzernstrukturen. Das läuft über Monate parallel. <em>Meilenstein: Daten bereit für die Testmigration.</em>"
      ],
      [
        "Konfiguration und Schnittstellen",
        "Objekte, Automatisierungen und Prüfregeln, Berechtigungen und Gebietsmodell, E-Mail, Kalender und Telefonie, Abgleich mit der Marketingautomatisierung, Angebotserstellung und ERP-Anbindung sowie die Prognose-Auswertungen. <em>Meilenstein: Konfiguration abgeschlossen.</em>"
      ],
      [
        "Testmigrationen",
        "Zwei vollständige Probeläufe mit Abstimmung und fachlicher Prüfung durch den Vertrieb dazwischen, danach ein gestoppter Lauf mit vollem Datenvolumen, der beweist, dass die Ladezeit in Ihr Umstellungsfenster passt. <em>Meilenstein: Testmigration abgenommen.</em>"
      ],
      [
        "Schulung und Nutzung",
        "Rollenbezogene Inhalte, zuerst Prognose-Workshops für die Führungskräfte, dann die Gruppen im Vertrieb, terminiert nah an den Produktivstart, dazu das Netz aus Multiplikatoren und der Plan für die Vor-Ort-Betreuung. <em>Meilenstein: Schulungen abgeschlossen.</em>"
      ],
      [
        "Umstellung und erster Prognosezyklus",
        "Das Fenster am Quartalswechsel, Einfrieren des Altsystems, Produktivladung, Abgleich der Pipeline gegen das Altsystem, Produktivstart, intensive Betreuung und der erste vollständige Prognosezyklus im neuen CRM. <em>Meilenstein: Produktivstart.</em>"
      ]
    ],
    callout: "Wählen Sie den Umstellungstermin aus dem Vertriebskalender, nicht aus dem Projektplan. Eine Migration mitten im Quartal heißt, dass jemand laufende Geschäfte mitten im Lauf auf die Zielerreichung neu erfassen soll, und eine Prognose, die zur Hälfte in jedem der beiden Systeme steht, ist eine Prognose, die niemand vor einem Gremium verteidigen kann. Stellen Sie in den ersten beiden Wochen eines neuen Quartals um, wenn die Pipeline gerade zurückgesetzt und abgestimmt ist — dann startet der erste Prognosezyklus im neuen CRM von einer Zahl aus, auf die sich beide Systeme geeinigt haben.",
    customize: [
      "Legen Sie die Umstellung in die ersten beiden Wochen eines Quartals und rechnen Sie von dort rückwärts; der letzte Probelauf sollte mindestens drei Wochen davor fertig sein.",
      "Zerlegen Sie die Entdoppelung nach Objekt — Firmen, Kontakte, Interessenten, Verkaufschancen —, weil Abgleichschlüssel und Zuständige jeweils andere sind.",
      "Schieben Sie die Schulung des Vertriebs so spät wie möglich, ohne mit der Umstellung zu kollidieren; sechs Wochen zu früh geschult heißt zweimal geschult.",
      "Ergänzen Sie Zeilen je Schnittstelle, wenn Angebotserstellung, ERP oder Marketingautomatisierung eigene Abhängigkeiten zu Dienstleistern haben.",
      "Führen Sie die vom Vertrieb zu korrigierenden Datensätze als benannte Zeile mit benannter verantwortlicher Person — das ist Fachbereichsarbeit, keine Aufgabe des Datenteams.",
      "Nehmen Sie die Verhandlung der Betriebsvereinbarung als eigene Zeile auf, sobald das System Leistungsdaten auswertbar macht; ohne Zustimmung des Betriebsrats gibt es keinen Produktivstart, und diese Verhandlung dauert Monate.",
      "Ergänzen Sie eine Zeile für die Entscheidung über die Historie; fünf Jahre E-Mails und Anrufe mitzunehmen ist meist die teuerste einzelne Entscheidung im Plan — und mit Blick auf Speicherfristen selten die zulässigste."
    ],
    tips: [
      "<strong>Entdoppeln Sie vor der Konfiguration, nicht danach.</strong> Doppelte Firmensätze zerlegen Gebietszuordnung, Prognoseverdichtung und Auswertung gleichzeitig, und jede dieser Arbeiten muss wiederholt werden, wenn sich die Daten darunter ändern.",
      "<strong>Holen Sie den Betriebsrat früh an Bord.</strong> Ein CRM, mit dem sich Verhalten und Leistung auswerten lassen, ist nach dem Betriebsverfassungsgesetz mitbestimmungspflichtig. Wer die Betriebsvereinbarung erst vier Wochen vor dem Start anfasst, verschiebt den Start.",
      "<strong>Stimmen Sie am Umstellungstag den Pipelinewert gegen das Altsystem ab.</strong> Wenn die beiden Zahlen nicht übereinstimmen, bevor sich jemand anmeldet, streiten Sie das ganze Quartal darüber, welche stimmt.",
      "<strong>Schulen Sie Führungskräfte vor dem Vertrieb.</strong> Nutzung wird im Einzelgespräch durchgesetzt; wer seine eigene Pipeline-Durchsicht im neuen Werkzeug nicht führen kann, lässt das Team still weiter mit Tabellen arbeiten.",
      "<strong>Migrieren Sie weniger Historie.</strong> Offene Verkaufschancen und die letzten zwei Jahre Aktivität decken fast jeden realen Anwendungsfall; der Rest ist eine Archiv- und Löschfrage, keine Migrationsfrage.",
      "<strong>Messen Sie Nutzung, nicht den Produktivstart.</strong> Anmeldungen beweisen nichts. Verfolgen Sie, ob Geschäfte nächste Schritte, Abschlusstermine und Phasenwechsel haben — daran hängt, ob die Pipeline belastbar ist."
    ],
    faq: [
      [
        "Wie lange dauert eine CRM-Einführung?",
        "Für eine mittelgroße Vertriebsorganisation üblicherweise vier bis neun Monate, abhängig fast ausschließlich von der Datenqualität und der Zahl der Schnittstellen. Die Vorlage nutzt rund elf Monate von Anfang bis Ende, weil sie die Datenbereinigung von Beginn an und einen vollständigen Prognosezyklus nach dem Start enthält."
      ],
      [
        "Warum liegt die Datenmigration auf dem kritischen Pfad und nicht die Konfiguration?",
        "Weil die Konfiguration abgegrenzte Arbeit ist, die Sie steuern, und die Daten nicht. Die Analyse findet Probleme, die Entdoppelung braucht fachliche Entscheidungen, und die Korrekturen im Vertrieb laufen im Tempo von Leuten mit Umsatzziel. Genau deshalb startet die Vorlage die Datenarbeit im ersten Monat."
      ],
      [
        "Wann sollten wir umstellen?",
        "Am Quartalswechsel, in den ersten beiden Wochen eines neuen Quartals. Umstellungen mitten im Quartal spalten die Prognose auf zwei Systeme auf, und eine Prognose, der niemand traut, ist der schnellste Weg, die Akzeptanz im Vertrieb dauerhaft zu verlieren."
      ],
      [
        "Braucht die Einführung eine Betriebsvereinbarung?",
        "In der Regel ja, sobald das System Leistungs- oder Verhaltensdaten auswertbar macht — das löst die Mitbestimmung nach §87 Abs. 1 Nr. 6 Betriebsverfassungsgesetz aus. Planen Sie die Verhandlung als mehrmonatigen Vorgang parallel zur Konfiguration, nicht als Formalie vor dem Start."
      ],
      [
        "Wie viele Testmigrationen brauchen wir?",
        "Mindestens zwei plus einen gestoppten Lauf. Der erste prüft die Feldzuordnung, der zweite die entdoppelten Daten mit echter fachlicher Prüfung, und der gestoppte Lauf mit vollem Volumen beweist, dass die Ladung in das gebuchte Umstellungsfenster passt."
      ],
      [
        "Wie hängt das mit der Vorlage für das Änderungsmanagement zusammen?",
        "Dieser Plan deckt das System ab. Der <a href=\"/de/templates/change-management-plan.html\">Plan für das Veränderungsmanagement</a> deckt den Menschenstrang daneben ab — Betroffenheitsanalyse, Auftritte der Führung, Schulungsgruppen und die Verstetigung nach dem Start. Große CRM-Programme brauchen beides."
      ],
      [
        "Ist die CRM-Vorlage kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung und ohne Wasserzeichen."
      ]
    ]
  },
  'disaster-recovery-plan': {
    card: "Business Impact Analyse, RTO/RPO, Replikation, Handbücher, Notfallübungen.",
    h1: "Zeitplan für den IT-Notfallwiederherstellungsplan",
    metaTitle: "IT-Notfallplan (Disaster Recovery)",
    metaDesc: "Kostenloser Zeitplan für den IT-Notfallplan: Business Impact Analyse, RTO/RPO, Replikation, Notfallhandbücher, Planübung, Teil- und Vollumschaltung.",
    lead: "Eine kostenlose <strong>Vorlage für den IT-Notfallwiederherstellungsplan</strong>, die als Ergebnis einen <em>geprüften</em> Plan versteht und nicht ein Dokument. Business Impact Analyse und die Ziele für RTO und RPO setzen die Architektur, die Architektur setzt den Aufbau, und die hintere Hälfte des Zeitplans ist die Prüffolge — Planübung, dann Teilumschaltung, dann eine Vollumschaltung mit fachlicher Prüfung, jede mit eigenem Wartungsfenster und eigenem Rückweg.",
    intro: "Ein ungeprüfter Notfallplan ist eine Vermutung. Der Zeitplan unten ist von der aufsteigenden Prüffolge geformt, weil jede Prüfung ein Wartungsfenster kostet und jede Dinge findet, die die vorherige nicht finden konnte:",
    phases: [
      [
        "Business Impact Analyse",
        "Inventar der Anwendungen und Dienste, Abhängigkeitskarte, die Workshops zur Schadenswirkung und die RTO- und RPO-Ziele, an denen jeder Dienst gemessen wird. Alles Nachgelagerte wird über diese Zahlen bepreist. <em>Meilenstein: RTO/RPO-Basis freigegeben.</em>"
      ],
      [
        "Notfallstrategie und Architektur",
        "Zuordnung der Wiederanlaufklassen, Wahl des Ausweichrechenzentrums oder der Ausweichregion, Architektur für Replikation und Sicherung, Auslegung von Netz- und DNS-Umschaltung sowie der Kostenabgleich gegen die Ziele. <em>Meilenstein: Architektur freigegeben.</em>"
      ],
      [
        "Aufbau und Replikation",
        "Notfallinfrastruktur, Replikation von Speicher und Datenbanken, Anpassung der Sicherungsrichtlinien, Identitäts- und Sicherheitsmaßnahmen am Ausweichstandort und die Überwachung des Replikationsrückstands. <em>Meilenstein: Replikation im stabilen Zustand nachgewiesen.</em>"
      ],
      [
        "Notfallhandbücher und Dokumentation",
        "Ein Wiederanlaufhandbuch je Wiederanlaufklasse, Verfahren für Rückfall und Rückführung, die Alarmierungskette für den Krisenstab und die Auslösekriterien, die festlegen, wer den Notfall überhaupt ausrufen darf. <em>Meilenstein: Handbücher veröffentlicht.</em>"
      ],
      [
        "Prüffolge",
        "Zuerst die Planübung am Tisch, dann eine Teilumschaltung der Anwendungen der ersten Klasse mit Rückfall, dann eine Vollumschaltung mit fachlicher Prüfung und anschließender Rückführung — nach jeder Prüfung ist Zeit für die Behebung eingeplant. <em>Meilenstein: Vollumschaltung bestanden.</em>"
      ],
      [
        "Freigabe und Pflege",
        "Prüfbericht und Restrisiko, Freigabe durch die Geschäftsleitung, Schulung der Bereitschaft, der Jahreskalender für die Wiederholungsprüfungen und die Verankerung im Änderungsprozess, die verhindert, dass neue Anwendungen still außerhalb des Plans landen. <em>Meilenstein: Plan freigegeben.</em>"
      ]
    ],
    callout: "RTO und RPO sind keine Absichtserklärungen, sondern eine Rechnung. Ein RPO von fünfzehn Minuten bedeutet synchrone oder nahezu synchrone Replikation und die Speicherkosten, die dazugehören; ein RTO von vier Stunden bedeutet warm laufende Infrastruktur, die die meiste Zeit nichts tut. Einigen Sie sich mit dem Fachbereich auf die Zahlen, bevor Sie irgendetwas entwerfen, zeigen Sie dann, was jede Klasse kostet, und lassen Sie nachjustieren. Teams, die die Ziele nach der Architektur festlegen, landen bei einem Plan, der langsamer wiederherstellt als dem Geschäft versprochen wurde — und niemand merkt es bis zur Umschaltprüfung.",
    customize: [
      "Setzen Sie RTO und RPO je Dienst, nicht je Unternehmen — ein Zahlungsdienst und ein internes Wiki gehören nicht in dieselbe Klasse.",
      "Buchen Sie beide Wartungsfenster früh; das Fenster für die Vollumschaltung braucht meist die Freigabe der Geschäftsleitung und eine geschäftsarme Zeit — das sind Kalenderbedingungen, keine technischen.",
      "Halten Sie die Zeile für den Rückfall neben jeder Prüfung — eine Prüfung ohne geübten Rückweg ist eine Störung, die auf einen schlechten Tag wartet.",
      "Ergänzen Sie Zeilen je Anwendungsklasse, wenn Sie in Gruppen umschalten statt alles auf einmal.",
      "Verlängern Sie das Behebungsfenster nach der Teilprüfung; dort tauchen die meisten echten Feststellungen auf.",
      "Nehmen Sie die jährliche Wiederholungsprüfung als datierte Zeilen auf, damit der Plan nicht zwölf Monate nach der Freigabe still verfällt.",
      "Ergänzen Sie, wenn Sie kritische Infrastruktur betreiben, die Zeile für den Nachweis gegenüber dem BSI; dessen Turnus liegt fest und ist nicht Ihr Projekttermin."
    ],
    tips: [
      "<strong>Prüfen Sie die Rückführung, nicht nur die Umschaltung.</strong> Am Ausweichstandort zu laufen ist die halbe Übung; die teuren Probleme entdecken die meisten Häuser auf dem Rückweg.",
      "<strong>Machen Sie die Planübung vor allem Technischen.</strong> Sie ist billig, braucht kein Wartungsfenster und findet zuverlässig fehlende Erreichbarkeiten, unklare Ausrufungsbefugnis und Handbuchschritte, die Wissen voraussetzen, das nie jemand aufgeschrieben hat.",
      "<strong>Prüfen Sie fachlich, nicht mit einem Ping.</strong> Ein Dienst, der antwortet, ist kein Dienst, der funktioniert; lassen Sie echte Anwenderinnen während der Vollumschaltung echte Vorgänge abschließen.",
      "<strong>Überwachen Sie den Replikationsrückstand als laufende Kennzahl.</strong> Ein RPO, das Sie nicht dauernd messen, ist ein RPO, den Sie erst im Ernstfall überprüfen.",
      "<strong>Hängen Sie die Notfallvorsorge in den Änderungsprozess.</strong> Jede neue Anwendung ohne Wiederanlaufklasse vergrößert die Lücke zwischen Plan und Wirklichkeit, und diese Lücke wird nur bei der Prüfung sichtbar.",
      "<strong>Nutzen Sie eine anerkannte Struktur.</strong> Wer sich am BSI-Standard 200-4 für das Notfallmanagement ausrichtet, bekommt Begriffe, Rollen und Nachweisdokumente geschenkt — und erspart sich die Diskussion, ob der eigene Plan prüffähig ist, wenn Aufsicht oder Versicherer fragen."
    ],
    faq: [
      [
        "Wie lange dauert Aufbau und Prüfung eines Notfallplans?",
        "Üblicherweise neun bis fünfzehn Monate von der Business Impact Analyse bis zum freigegebenen, geprüften Plan. Die Vorlage nutzt rund fünfzehn Monate. Der Aufbau ist gut vorhersagbar; was sich streckt, ist die Prüffolge am Ende, weil jede Prüfung ein Wartungsfenster und danach einen Behebungszyklus braucht."
      ],
      [
        "Worin unterscheiden sich RTO und RPO?",
        "Das RTO ist, wie lange Sie ausfallen dürfen — die Zeit bis zur Wiederherstellung des Dienstes. Das RPO ist, wie viele Daten Sie verlieren dürfen — das Alter der letzten brauchbaren Kopie. Das RTO treibt die bereitgehaltene Infrastruktur, das RPO die Replikationshäufigkeit, und zusammen bestimmen sie den größten Teil der Kosten."
      ],
      [
        "Warum drei Prüfungen statt einer?",
        "Weil sie Unterschiedliches finden. Eine Planübung findet Lücken im Handbuch und in der Entscheidungskette zum Preis eines Besprechungsraums. Eine Teilumschaltung findet technische Fehler bei begrenztem Schaden. Nur eine Vollumschaltung mit fachlicher Prüfung beweist das RTO. Jede setzt voraus, dass die vorherige behoben wurde."
      ],
      [
        "Brauchen die Prüfungen ein Wartungsfenster?",
        "Für Teil- und Vollumschaltung ja — sie verschieben produktiven Verkehr und tragen echtes Risiko. Buchen Sie sie mit geübtem Rückfall und einem festgelegten Abbruchkriterium. Die Planübung braucht kein Fenster, und genau deshalb sollte sie zuerst ausgereizt werden."
      ],
      [
        "Wie verhält sich das zum Notfallmanagement insgesamt?",
        "Die IT-Notfallwiederherstellung ist der technische Ausschnitt: Systeme und Daten zurückbringen. Das betriebliche Kontinuitätsmanagement ist weiter und umfasst Menschen, Gebäude und Prozesse — im BSI-Standard 200-4 ist die IT-Wiederherstellung ausdrücklich ein Teil davon. Diese Vorlage deckt den IT-Teil ab, wobei Krisenkommunikation und Auslösekriterien mit jedem Kontinuitätsplan geteilt werden."
      ],
      [
        "Ist die Notfallplan-Vorlage kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung."
      ]
    ]
  },
  'rfp-procurement-timeline': {
    card: "Bedarf, Vergabeunterlagen, Bieterfragen, Angebotsfrist, Wertung, Wartefrist, Start.",
    h1: "Zeitplan für ein Vergabeverfahren",
    metaTitle: "Vergabeverfahren — Zeitplan",
    metaDesc: "Kostenloser Zeitplan für das Vergabeverfahren: Bedarf, Vergabeunterlagen, Bieterfragen, Angebotsfrist, Wertung, Wartefrist nach §134 GWB, Leistungsbeginn.",
    lead: "Eine kostenlose <strong>Zeitplan-Vorlage für ein Vergabeverfahren</strong> — von der Bedarfsfeststellung bis zum Leistungsbeginn. Bedarf und Wirtschaftlichkeitsbetrachtung, Zuschlagskriterien und Gewichtung, Vergabeunterlagen, die Angebotsphase mit Frist für Bieterfragen und fester Angebotsfrist, Wertung im Gremium und Vergabevermerk, Zuschlagsentscheidung mit der Informations- und Wartepflicht, dann Vertrag und Leistungsbeginn. Die meisten dieser Termine gehören anderen Leuten, und genau deshalb müssen sie in ein Diagramm.",
    intro: "Eine Ausschreibung ist ein Terminplan, der überwiegend aus der Zeit anderer Menschen besteht: Bieter, die Angebote schreiben, Wertungsgremien, die eine gemeinsame Woche finden, Juristinnen, die verhandeln, und ein Altdienstleister, der übergibt. Sie steuern den Starttermin und sonst herzlich wenig:",
    phases: [
      [
        "Bedarf und Wirtschaftlichkeitsbetrachtung",
        "Anforderungen der Bedarfsträger, Wirtschaftlichkeitsbetrachtung und Haushaltsfreigabe, Wahl der Verfahrensart und Prüfung des EU-Schwellenwerts sowie Eignungs- und Zuschlagskriterien samt Gewichtung — die vor der Veröffentlichung feststehen müssen. <em>Meilenstein: Freigabe zur Bekanntmachung.</em>"
      ],
      [
        "Markterkundung und Vergabeunterlagen",
        "Markterkundung, gegebenenfalls eine Vorinformation im Amtsblatt der EU, die Leistungsbeschreibung, Vertragsbedingungen und Anlagen, das Wertungsmodell sowie die Benennung des Wertungsgremiums und die Blockung seiner Kalender. <em>Meilenstein: Vergabeunterlagen freigegeben.</em>"
      ],
      [
        "Angebotsphase",
        "Bekanntmachung und Bereitstellung der Unterlagen auf der Vergabeplattform, Zeitfenster für Bieterfragen, eine Informationsveranstaltung, die Frist für Bieterfragen, Veröffentlichung aller Antworten an sämtliche Bieter und die anschließende Zeit zur Angebotserstellung. <em>Meilenstein: Ablauf der Angebotsfrist.</em>"
      ],
      [
        "Wertung",
        "Formale Prüfung und Eignungsprüfung, fachliche und preisliche Wertung parallel, Konsensbildung im Gremium, Bietergespräche und Präsentationen, Prüfung der Auskömmlichkeit beim vorgesehenen Bieter und der Vergabevermerk. <em>Meilenstein: Zuschlagsvorschlag freigegeben.</em>"
      ],
      [
        "Zuschlagsentscheidung, Wartefrist und Vertrag",
        "Information der nicht berücksichtigten Bieter nach §134 GWB, die Wartefrist, in der ein Nachprüfungsantrag bei der Vergabekammer möglich ist, Auskünfte an unterlegene Bieter, letzte Vertragsklärungen und Zuschlagserteilung. <em>Meilenstein: Zuschlag erteilt.</em>"
      ],
      [
        "Mobilisierung und Übergang",
        "Auftaktbesprechung, Übergang vom Altdienstleister, Zugänge und Einweisung, Steuerungsstruktur und Kennzahlenberichte sowie der Tag, an dem die Leistung tatsächlich beginnt. <em>Meilenstein: Leistungsbeginn.</em>"
      ]
    ],
    callout: "Die Zeit der Bieter gehört nicht Ihnen. Wenn Sie das Fenster zwischen der Veröffentlichung der Antworten auf Bieterfragen und der Angebotsfrist verkürzen, bekommen Sie kein schnelleres Verfahren, sondern weniger Angebote, schwächere Angebote und einen starken Anbieter, der absagt, weil er kein Team für eine ordentliche Antwort freistellen konnte. Am anderen Ende gilt dasselbe: Die Informations- und Wartepflicht nach §134 GWB besteht, damit unterlegene Bieter die Entscheidung überprüfen lassen können — sie läuft nach Kalendertagen, ganz gleich, wie dringend der Fachbereich mobilisieren will.",
    customize: [
      "Setzen Sie zuerst Angebotsfrist und Leistungsbeginn; beide werden meist von außen bestimmt, und alles andere passt sich dazwischen ein.",
      "Prüfen Sie die Mindestfristen Ihrer Verfahrensart, bevor Sie die gezeigten Dauern übernehmen — im offenen Verfahren oberhalb des Schwellenwerts sind es nach der Vergabeverordnung 35 Tage, unterhalb gilt die Unterschwellenvergabeordnung mit anderen Fristen.",
      "Blocken Sie die Kalender des Wertungsgremiums zeitgleich mit der Bekanntmachung — nicht der Wertungsaufwand, sondern die Verfügbarkeit der Gremienmitglieder lässt diese Phase kippen.",
      "Ergänzen Sie Zeilen für Referenzbesuche oder Teststellungen, wenn Ihre Wertung sie vorsieht; sie brauchen die Verfügbarkeit von Bietern und Referenzkunden und sind damit terminierte Arbeit.",
      "Verlängern Sie die Übergangsphase deutlich, wenn ein Altdienstleister Daten, Personal oder Anlagen übergibt — bei Personalübergang kommt ein Betriebsübergang nach §613a BGB mit eigener Informationsfrist hinzu.",
      "Führen Sie eine Zeile je Los, wenn die Vergabe in Lose geteilt ist, da Wertung und Zuschlag je Los zu unterschiedlichen Zeitpunkten fertig werden können."
    ],
    tips: [
      "<strong>Legen Sie die Zuschlagskriterien vor der Bekanntmachung fest.</strong> Gewichtungen, die sich nach Eingang der Angebote ändern, sind der häufigste Grund für ein erfolgreiches Nachprüfungsverfahren, und sie lassen sich nicht still korrigieren.",
      "<strong>Veröffentlichen Sie jede Antwort an alle Bieter.</strong> Einzelauskünfte erzeugen ein ungleiches Verfahren, und ungleiche Verfahren werden aufgehoben.",
      "<strong>Legen Sie die Angebotsfrist nicht neben die Ferienzeit.</strong> Sie erhalten dünne Angebote von genau den Anbietern, von denen Sie am liebsten gehört hätten.",
      "<strong>Bilden Sie einen Konsens und schreiben Sie die Begründung auf.</strong> Der Vergabevermerk ist das Dokument, auf das Sie sich bei der Bieterinformation und in einem Nachprüfungsverfahren stützen; Punktzahlen ohne Begründung sind nicht verteidigbar.",
      "<strong>Halten Sie die Kommunikation nach Absendung der Information nach §134 GWB diszipliniert.</strong> Ein Zuschlag vor Ablauf der Wartefrist ist von Anfang an unwirksam — das ist keine Formalie, sondern der Verlust des Vertrags.",
      "<strong>Planen Sie echte Zeit zwischen Zuschlag und Leistungsbeginn ein.</strong> Mobilisierung braucht unterschriebene Verträge, erteilte Zugänge und eingestellte Leute; ein Zuschlagstermin ist kein Starttermin."
    ],
    faq: [
      [
        "Wie lange dauert ein Vergabeverfahren?",
        "Bei einem größeren Auftrag üblicherweise sechs bis zwölf Monate von der Bedarfsfeststellung bis zum Leistungsbeginn. Die Vorlage nutzt rund zwölf Monate. Angebotsphase und Wertung sind die beiden Blöcke, die regelmäßig unterschätzt werden, weil beide von Menschen außerhalb des Projektteams abhängen."
      ],
      [
        "Wie viel Zeit sollten Bieter zum Antworten bekommen?",
        "Genug, um nach der Veröffentlichung der Antworten auf Bieterfragen ein ernsthaftes Angebot zu schreiben — bei umfangreichen Vergaben typischerweise vier bis sechs Wochen, länger bei komplexen Leistungen oder wenn eine Übernahme kalkuliert werden muss. Oberhalb der EU-Schwellenwerte gelten gesetzliche Mindestfristen; prüfen Sie sie, bevor Sie kürzen."
      ],
      [
        "Wozu dient die Wartefrist nach §134 GWB?",
        "Sie ist die Spanne zwischen der Information der unterlegenen Bieter und der Zuschlagserteilung. In ihr kann ein Bieter Auskunft verlangen oder ein Nachprüfungsverfahren bei der Vergabekammer einleiten. Sie beträgt fünfzehn Kalendertage, bei elektronischer Übermittlung zehn, und lässt sich nicht kürzen, um einen Mobilisierungstermin zu halten."
      ],
      [
        "Warum steht die Frist für Bieterfragen im Diagramm?",
        "Weil sie zwei Dinge steuert: den Tag, bis zu dem Ihr Team alle Antworten formuliert und veröffentlicht haben muss, und den Punkt, ab dem Bieter schreiben statt fragen. Wer sie nach hinten schiebt, hat still die Zeit zur Angebotserstellung verkürzt."
      ],
      [
        "Kann ich die Vorlage für eine private Ausschreibung nutzen?",
        "Ja. Lassen Sie die Zeilen zu Bekanntmachung und Wartefrist weg und behalten Sie die Abfolge — Fragefenster, feste Angebotsfrist, Wertung im Konsens, Verhandlung und Mobilisierung verhalten sich gleich. Die Disziplin, Antworten allen Bietern zu geben, lohnt sich in jedem Fall."
      ],
      [
        "Ist die Vorlage für das Vergabeverfahren kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung und ohne Wasserzeichen."
      ]
    ]
  },
  'change-management-plan': {
    card: "Betroffenheitsanalyse, Führung, Kommunikation, Schulung, Betreuung, Verstetigung.",
    h1: "Projektplan für das Veränderungsmanagement",
    metaTitle: "Veränderungsmanagement — Plan",
    metaDesc: "Kostenloser Plan für das Veränderungsmanagement: Betroffenheitsanalyse, Auftritte der Führung, Kommunikation, Schulungsgruppen, Betreuung, Verstetigung.",
    lead: "Eine kostenlose <strong>Projektplan-Vorlage für das Veränderungsmanagement</strong> — für den Menschenstrang, der neben einem technischen Projekt läuft. Stakeholder- und Betroffenheitsanalyse, Rückhalt in der Führung und ein Netz aus Multiplikatoren, Kommunikation je Zielgruppe, Schulungsgruppen, die am Produktivstart ausgerichtet sind statt an der Bequemlichkeit des Kalenders, Startbereitschaft und Betreuung auf der Fläche, dann die Verstetigung nach dem Start, an der hängt, ob überhaupt etwas davon bleibt. Kombinieren Sie sie mit dem Systemplan, sei es eine <a href=\"/de/templates/erp-implementation-schedule.html\">ERP-Einführung</a> oder eine <a href=\"/de/templates/crm-implementation-plan.html\">CRM-Einführung</a>.",
    intro: "Veränderungsmanagement wird meist als ein Kasten mit der Aufschrift „Schulung“ neben den Produktivstart gemalt. Es ist kein Kasten. Es ist ein eigener Strang mit eigenen Abhängigkeiten, und die Hälfte, die am meisten zählt, beginnt in der Woche nach dem Start:",
    phases: [
      [
        "Veränderungsstrategie und Betroffenheitsanalyse",
        "Stakeholder-Landkarte, eine Betroffenheitsanalyse je betroffener Gruppe, eine Ausgangsmessung der Bereitschaft, die frühzeitige Unterrichtung des Betriebsrats nach §90 Betriebsverfassungsgesetz und die Strategie, die festlegt, wie viel Unterstützung jede Gruppe braucht. <em>Meilenstein: Veränderungsstrategie freigegeben.</em>"
      ],
      [
        "Rückhalt und Steuerung",
        "Das Bündnis der Führungskräfte, Verpflichtungsgespräche, Gewinnung und Einweisung der Multiplikatoren, die erste Runde der Führung durch die Standorte, gegebenenfalls eine Betriebsversammlung sowie ein Widerstandsregister, das bearbeitet und nicht abgeheftet wird. <em>Meilenstein: Veränderungsnetz steht.</em>"
      ],
      [
        "Kommunikation",
        "Kommunikationsplan je Zielgruppe, die Begründung der Veränderung und ein Fragenkatalog, Aufmerksamkeitskampagne, Argumentationshilfen für Führungskräfte, Leitfäden auf Rollenebene nach dem Muster „was sich für mich ändert“ und die Abfolge rund um den Start."
      ],
      [
        "Schulung",
        "Bedarfsanalyse je Rolle, Aufbau des Lehrplans, Schulung der Schulenden, dann Gruppen in Wellen, wobei die letzte nah am Produktivstart landet, damit die Leute anwenden, was sie gelernt haben. <em>Meilenstein: Schulungen abgeschlossen.</em>"
      ],
      [
        "Startbereitschaft und Betreuung",
        "Bereitschaftsbewertung je Bereich, eine zweite Runde der Führung durch die Standorte, der Dienstplan für Ansprechpersonen auf der Fläche und Schlüsselanwender, Freigabe der Startbereitschaft und intensive Betreuung nach dem Start. <em>Meilenstein: Produktivstart.</em>"
      ],
      [
        "Verstetigung",
        "Nutzungskennzahlen, Kurzbefragungen in Woche zwei und Monat drei, gezielte Auffrischungsschulungen, Begleitung der Führungskräfte, Anerkennung und die Nutzenbetrachtung. <em>Meilenstein: Übergabe in den Regelbetrieb.</em>"
      ]
    ],
    callout: "Richten Sie die Schulung am Produktivstart aus, nicht am Kalender der Trainerin. Fertigkeiten verfallen schnell, und eine Gruppe, die sechs Wochen zu früh geschult wurde, hat das meiste vergessen und fragt still die Kollegin. Fahren Sie die Gruppen in Wellen, sodass die letzte wenige Tage vor dem Start endet, und geben Sie der Pilotgruppe genug Abstand, dass ihre Rückmeldung das Material noch verbessern kann. Schützen Sie danach die Verstetigung, denn sie wird als Erstes gestrichen und ist die einzige Phase, die langfristiges Verhalten ändert — die Auffrischung nach der ersten Kurzbefragung ist mehr wert als noch eine E-Mail vor dem Start.",
    customize: [
      "Setzen Sie zuerst den Produktivstart, legen Sie die letzte Schulungsgruppe wenige Tage davor und rechnen Sie alle weiteren Gruppen von dort rückwärts.",
      "Ergänzen Sie eine Zeile für die Betroffenheitsanalyse je betroffener Gruppe; ein Team in den zentralen Diensten und ein Servicetechniker erleben nicht dieselbe Veränderung.",
      "Bemessen Sie das Multiplikatorennetz mit ungefähr einer Person je Team und hinterlegen Sie deren Zeit als vereinbarte Freistellung, nicht als Gefälligkeit.",
      "Ergänzen Sie Zeilen für die Auftritte der Führung je Region oder Bereich, wenn eine Runde nicht alle erreicht.",
      "Verlängern Sie die intensive Betreuung bei Schicht- oder Saisonbetrieb, damit jedes Schichtmodell in seiner ersten Produktivwoche Unterstützung bekommt.",
      "Nehmen Sie die Beteiligung des Betriebsrats als eigene Zeile auf, wenn die Veränderung Arbeitsabläufe, Arbeitsplätze oder auswertbare Leistungsdaten berührt — die Beteiligung ist ein Vorgang mit Dauer, kein Haken.",
      "Halten Sie Kurzbefragungen und Auffrischungen als datierte Zeilen nach dem Start — sie werden am häufigsten gelöscht und entscheiden über die tatsächliche Nutzung."
    ],
    tips: [
      "<strong>Betroffenheitsanalyse vor der Kommunikation.</strong> Sie können niemandem sagen, was sich für ihn ändert, bevor Sie es herausgearbeitet haben, und allgemeine Botschaften sind genau der Grund, warum Menschen annehmen, die Veränderung meine sie nicht.",
      "<strong>Führung muss sichtbar sein, und zwar wiederholt.</strong> Eine Startmail ist ein Rundschreiben. Ein Auftritt vor und nach dem Start ist ein Signal, dass die Veränderung nicht freiwillig ist.",
      "<strong>Beteiligen Sie den Betriebsrat früh und ehrlich.</strong> Er ist bei Änderungen von Arbeitsverfahren zu unterrichten, und eine späte Beteiligung verwandelt eine lösbare Verhandlung in einen Startblocker.",
      "<strong>Briefen Sie Führungskräfte getrennt und früher.</strong> Ihr Team fragt zuerst sie, und wer die Antwort nicht kennt, wird versehentlich zur Quelle des Widerstands.",
      "<strong>Arbeiten Sie mit dem Widerstandsregister.</strong> Widerstand ist weit häufiger ein Hinweis auf ein echtes Problem als Blockade, und im Register sehen Sie, dass derselbe Einwand in fünf Teams auftaucht.",
      "<strong>Messen Sie Nutzung, nicht Teilnahme.</strong> Abgeschlossene Schulungen sagen nichts. Kurzbefragungen und tatsächliches Nutzungsverhalten zeigen, wohin die Auffrischungen gehören."
    ],
    faq: [
      [
        "Wann sollte das Veränderungsmanagement beginnen?",
        "Zeitgleich mit dem technischen Projekt, nicht kurz vor dem Start. Die Betroffenheitsanalyse braucht ein verstandenes Zielbild, muss aber früh genug fertig sein, um Kommunikation und Schulung zu formen. Die Vorlage startet an Tag eins und läuft rund fünf Monate über den Start hinaus."
      ],
      [
        "Worin unterscheidet sich das von einem Projektplan?",
        "Ein Projektplan liefert das System. Dieser Plan liefert die Fähigkeit und die Bereitschaft der Menschen, es zu nutzen. Beide teilen sich den Starttermin und sonst fast nichts, und genau deshalb funktioniert Veränderungsmanagement am besten als eigenes Diagramm mit eigener verantwortlicher Person, neben den Lieferplan gelegt."
      ],
      [
        "Wann sollte geschult werden?",
        "So spät wie möglich, ohne mit der Umstellung zu kollidieren. Fertigkeiten verfallen, also wird eine sechs Wochen zu früh geschulte Gruppe beim Start informell nachgeschult. Fahren Sie Wellen, legen Sie eine Pilotgruppe früh genug, dass ihre Rückmeldung das Material verbessert, und lassen Sie die letzte Gruppe wenige Tage vor dem Start enden."
      ],
      [
        "Muss der Betriebsrat beteiligt werden?",
        "Sobald sich Arbeitsverfahren, Arbeitsabläufe oder Arbeitsplätze ändern, ist er zu unterrichten, und bei Systemen, die Leistung oder Verhalten auswertbar machen, kommt echte Mitbestimmung hinzu. Behandeln Sie das als eigenen Vorgang mit Wochen an Dauer, parallel zur Kommunikationsplanung."
      ],
      [
        "Was passiert nach dem Produktivstart?",
        "Der Teil, den die meisten Pläne streichen: intensive Betreuung, eine Kurzbefragung um Woche zwei, gezielte Auffrischungen genau zu dem, was die Befragung ergeben hat, Begleitung der Führungskräfte und eine Nutzenbetrachtung. Verhaltensänderung passiert in den Wochen nach dem Start, nicht davor."
      ],
      [
        "Brauche ich für ein kleines Projekt einen eigenen Veränderungsplan?",
        "Nicht immer, aber die Abfolge brauchen Sie trotzdem. Behalten Sie bei kleineren Vorhaben Betroffenheitsanalyse, Briefing der Führungskräfte, eine Schulungswelle und eine Kurzbefragung nach dem Start und lassen Sie Multiplikatorennetz und Standortrunden weg."
      ],
      [
        "Ist die Vorlage für das Veränderungsmanagement kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung und ohne Wasserzeichen."
      ]
    ]
  },
  'tunnel-construction-schedule': {
    card: "Planfeststellung, TVM-Beschaffung, Startschacht, Vortrieb, Durchschlag, Ausbau.",
    h1: "Terminplan für den Tunnelbau",
    metaTitle: "Tunnelbau — Terminplan",
    metaDesc: "Kostenloser Terminplan für den Tunnelbau: Planfeststellung, TVM-Fertigung, Startschacht, Vortriebsleistung, Querschläge, Durchschlag und Ausbau.",
    lead: "Eine kostenlose <strong>Terminplan-Vorlage für den Tunnelbau</strong>, die um die Maschine herum aufgebaut ist und nicht um Phasen. Ausschreibung, Fertigung, Werksabnahme und Transport der Tunnelvortriebsmaschine als lange Vorlaufzeit, die beginnt, bevor der erste Spatenstich gesetzt ist; ein Startschacht, der fertig sein muss und nicht fast fertig, um sie aufzunehmen; eine Vortriebsleistung, die sich mit dem Baugrund ändert; Tübbingversorgung und Ausbruchtransport als Dauerleistungen, die den Vortrieb takten; danach Durchschlag, Innenschale und die Lüftungs- und Brandschutztechnik. Laden Sie sie für eine Lenkungskreisvorlage herunter oder öffnen Sie sie online und tragen Sie Ihre eigenen Meter pro Woche ein.",
    intro: "Ein Tunnelprojekt ist keine Abfolge von Gewerken. Es ist eine Maschine, die sich mit der Geschwindigkeit vorwärtsbewegt, die der Baugrund zulässt, und alles andere ist darauf ausgerichtet, sie in Bewegung zu halten. So ist die Vorlage gegliedert:",
    phases: [
      [
        "Genehmigung, Baugrunderkundung und Vergabe",
        "Bohrungen und das geotechnische Gutachten als vertragliche Baugrundbeschreibung, Trassierung und Bemessung der Schale, das Planfeststellungsverfahren mit Umweltverträglichkeitsprüfung und Erörterungstermin, wasserrechtliche Erlaubnis für Grundwasserhaltung und Unterquerungen sowie die Vergabe der Vortriebsmaschine, die jeden nachgelagerten Termin festlegt. <em>Meilensteine: Planfeststellungsbeschluss bestandskräftig, TVM beauftragt.</em>"
      ],
      [
        "Startschacht und Baustelleneinrichtung",
        "Baustelleneinrichtungsfläche, Schlitzwände, Schachtaushub, Sohlplatte sowie Widerlager und Anfahrblock — dazu die Tübbingproduktion, die der Maschine am ersten Tag bereits voraus sein muss, und die Bestellung des SiGeKo mit dem Sicherheits- und Gesundheitsschutzplan. <em>Meilenstein: Startschacht bereit zur Aufnahme der TVM.</em>"
      ],
      [
        "Fertigung, Lieferung und Montage der TVM",
        "Auslegung des Schneidrads auf den erwarteten Baugrund, Fertigung, Werksabnahme beim Hersteller, Transport in Teilen, Absenken in den Schacht und untertägige Montage. <em>Meilenstein: TVM anfahrbereit.</em>"
      ],
      [
        "Vortrieb",
        "Anfahren durch die Weichgelenkdichtung, die ersten Hundert Meter mit Einarbeitungskurve, Dauervortrieb durch wechselnden Baugrund, ein Druckluftbetrieb für den Werkzeugwechsel, die Flussunterquerung sowie durchgehend Setzungsmessung, Tübbinglieferung und Ausbruchtransport. <em>Meilenstein: Durchschlag.</em>"
      ],
      [
        "Querschläge und Restarbeiten",
        "Baugrundverbesserung und Ausbruch der Querschläge, während die Maschine noch vor Ihnen liegt, Demontage und Bergung der TVM, Ringspaltverpressung, Ringvermessung und Innenschale. <em>Meilenstein: Rohbau des Tunnels fertig.</em>"
      ],
      [
        "Ausbau, Technik und Inbetriebnahme",
        "Fluchtweg und Entwässerung, Kabeltrassen, Lüfter und Kanäle, Löschwasserleitung und Brandbekämpfungsanlage, Strom und Beleuchtung, Kommunikation und Leittechnik, dann ein Heißrauchversuch mit Feuerwehr und Rettungsdiensten, das Sicherheitskonzept und die förmliche Abnahme nach VOB/B. <em>Meilenstein: Übergabe an den Betrieb.</em>"
      ]
    ],
    callout: "Die TVM ist der Terminplan. Wer sie zu spät bestellt, holt die Zeit danach nicht mehr auf: Konstruktion, Fertigung, Werksabnahme und Transport laufen bei einer maßgefertigten Maschine zwölf bis achtzehn Monate, und sie lässt sich nicht in einen unfertigen Schacht absenken. Die beiden Balken, die Tunnelprojekte ruinieren, sind eine zu spät beginnende Fertigung und ein Startschacht, der nach Ankunft der Maschine fertig wird — eine in Teilen an der Oberfläche liegende TVM kostet jeden Tag Geld und bringt nichts. Beide gehören am ersten Tag ins Diagramm und dürfen nie verrutschen.",
    customize: [
      "Leiten Sie die Vortriebsleistung aus dem geotechnischen Gutachten ab, nicht aus der besten Woche Ihrer letzten Baustelle — und teilen Sie den Vortrieb in getrennte Balken je Baugrundabschnitt, damit ein schwieriger Abschnitt sichtbar wird statt im Mittelwert zu verschwinden.",
      "Geben Sie den ersten Hundert Metern einen eigenen kurzen, langsamen Balken. Jede TVM hat eine Einarbeitungskurve, in der sich Mannschaft, Verpressung und Ausbruchförderung einspielen, und wer sie mit voller Leistung plant, plant einen frühen Verzug.",
      "Ergänzen Sie einen Balken für Druckluftarbeiten überall dort, wo das Gutachten abrasiven Baugrund erwartet — Werkzeugwechsel sind planbare Vorgänge mit bekannter Dauer, und erst die Entdeckung mitten im Vortrieb macht daraus einen Monat.",
      "Bilden Sie die Tübbinglieferung als durchlaufenden Balken über die gesamte Vortriebslänge ab und prüfen Sie die Leistung des Fertigteilwerks gegen Ihre Spitzenwoche, nicht gegen den Durchschnitt.",
      "Zeigen Sie Ausbruchtransport und Entsorgungsweg ausdrücklich. Eine volle Bodenmiete oder eine entzogene Deponiegenehmigung stoppt die Maschine so wirksam wie ein Maschinenschaden.",
      "Setzen Sie Planfeststellungsbeschluss, TVM-Auftrag, Startschacht fertig, TVM anfahrbereit und Durchschlag als Meilensteine — diese fünf Termine sind das gesamte Projekt in Kurzform."
    ],
    tips: [
      "<strong>Bestellen Sie die Maschine, bevor die übrige Planung fertig ist.</strong> Die Schneidradkonfiguration hängt vom Baugrund ab, nicht von der Architektur der Stationen, und das Baugrundgutachten reicht in der Regel aus, um lange vor Abschluss der übrigen Planung zu vergeben.",
      "<strong>Behandeln Sie den Startschacht als das, was er ist: der kritische Pfad.</strong> Schlitzwände, Aushub, Sohlplatte und Widerlager sind vollständig sequenziell und liegen im weichen Baugrund; das Ende dieser Kette lässt sich nicht stauchen, um einen späten Beginn aufzufangen.",
      "<strong>Planen Sie Querschläge nie als Lückenfüller hinter der Maschine.</strong> Sie brauchen Baugrundverbesserung, sie sind auf den meisten Tunnelbaustellen die Tätigkeit mit dem höchsten Risiko, und sie hängen davon ab, dass die Ringe in diesem Abschnitt fertig und verpresst sind.",
      "<strong>Lassen Sie die Setzungsmessung von vor dem Anfahren bis weit nach der Vortriebspassage laufen.</strong> Nullmessungen nach Vortriebsbeginn sind wertlos, und eine Hebungsinjektion muss instrumentiert sein, bevor sie gebraucht wird.",
      "<strong>Der Durchschlag ist nicht das Ende.</strong> Bei den meisten Projekten dauern Ausbau, Lüftung und Brandschutztechnik nach dem Durchschlag länger als erwartet, und Heißrauchversuch und Sicherheitsnachweis liegen auf dem kritischen Pfad zur Inbetriebnahme.",
      "<strong>Stimmen Sie den Brandversuch Monate im Voraus mit Feuerwehr und Rettungsdiensten ab.</strong> Der Heißrauchversuch braucht ihre Anwesenheit, und deren Kalender gehört Ihnen nicht — ein verpasster Termin schiebt die Übergabe um Wochen, obwohl der Tunnel körperlich fertig ist."
    ],
    faq: [
      [
        "Wie lange dauert der Bau eines Tunnels?",
        "Eine einröhrige innerstädtische Tunnelstrecke von wenigen Kilometern läuft üblicherweise 30 bis 40 Monate vom Baurecht bis zur Übergabe; ungefähr diesen Zeitraum nutzt die Vorlage. Die Streuung steckt vorn in der Lieferzeit der TVM und in der Mitte im Baugrund."
      ],
      [
        "Wie früh muss die Vortriebsmaschine bestellt werden?",
        "Konstruktion, Fertigung, Werksabnahme und Transport dauern bei einer maßgefertigten Maschine typischerweise zwölf bis achtzehn Monate, und die untertägige Montage kommt hinzu. Der Auftrag muss erteilt werden, während der Schacht noch geplant wird, nicht wenn er fertig ist."
      ],
      [
        "Wie plane ich eine Vortriebsleistung, die ich nicht vorhersagen kann?",
        "Teilen Sie den Vortrieb anhand des geotechnischen Gutachtens in Balken je Baugrundabschnitt und geben Sie jedem seine eigene Leistung. So zeigt sich ein langsamer Abschnitt als langsamer Abschnitt, statt in einem gemittelten Balken zu verschwinden."
      ],
      [
        "Wie lange dauert das Planfeststellungsverfahren?",
        "Es ist bei Tunnelvorhaben regelmäßig der längste Vorgang vor Baubeginn: Antragsunterlagen, Umweltverträglichkeitsprüfung, Auslegung, Einwendungen und Erörterungstermin brauchen zusammen leicht ein bis mehrere Jahre, und der Beschluss kann beklagt werden. Planen Sie es als eigene Phase mit eigener verantwortlicher Person und legen Sie die wasserrechtliche Erlaubnis für Grundwasserhaltung und Gewässerunterquerungen als eigenen Balken daneben."
      ],
      [
        "Warum wird der Vortrieb zu Beginn langsamer geplant?",
        "Jeder Vortrieb hat eine Einarbeitungskurve. Mannschaft, Ringbauzyklus, Verpressung und Ausbruchförderung brauchen einige Hundert Meter, bis sie eingespielt sind, und die ersten Wochen mit voller Leistung zu planen ist ein häufiger früher Verzug."
      ],
      [
        "Ist die Vorlage für den Tunnelbau kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung und ohne Wasserzeichen."
      ]
    ]
  },
  'semiconductor-fab-construction-schedule': {
    card: "Rohbau, Reinraumprotokoll, Medienversorgung, Anlagenanschluss, Qualifizierung.",
    h1: "Terminplan für den Bau einer Halbleiterfabrik",
    metaTitle: "Halbleiterfabrik — Bauterminplan",
    metaDesc: "Kostenloser Terminplan für den Fab-Bau: Rohbau, Umstellung auf Reinraumprotokoll, Reinstwasser und Gase, Anlagenanschluss, Qualifizierung, erster Wafer.",
    lead: "Eine kostenlose <strong>Terminplan-Vorlage für den Bau einer Halbleiterfabrik</strong>, die das Reinraumprotokoll dorthin setzt, wo es hingehört: in das Scharnier des Projekts. Standort, Genehmigungen und eine schwingungsentkoppelte Bodenplatte; Rohbau, Hülle und Reinraumraster; Reinstwasser, Grund- und Spezialgase, Abluft und Abgasreinigung, gebaut auf die Anschlusspunkte hin; dann eine harte Umstellung, mit der die Baustelle aufhört, eine Baustelle zu sein, und eine kontrollierte Umgebung wird, gefolgt von Anlageneinbringung, Anschluss, Qualifizierung und erstem Silizium. Laden Sie sie für eine Vorstandsvorlage herunter oder ordnen Sie die Anlagenwellen online Ihrer eigenen Medienverfügbarkeit zu.",
    intro: "Eine Fab ist nicht fertig, wenn das Gebäude fertig ist. Sie ist fertig, wenn Anlagen qualifiziert sind und Wafer laufen, und alles zwischen diesen beiden Punkten steht unter einem Protokoll. Die Vorlage folgt diesem Übergang:",
    phases: [
      [
        "Standort, Genehmigungen und Grundbau",
        "Seismik- und Schwingungsuntersuchung, immissionsschutzrechtliche Genehmigung und Umgang mit Gefahrstoffen nach Störfallrecht, das Auslegungskonzept und das Einfrieren der Anlagenliste, aus der alles andere dimensioniert wird, Bestellung langlaufender Medientechnik sowie Gründung und Waffelplatte. <em>Meilensteine: Anlagenliste eingefroren, Genehmigungen erteilt.</em>"
      ],
      [
        "Rohbau und Reinraumhülle",
        "Stahlbau und Gebäudehülle, Untergeschoss und Durchbrüche, Regendichtheit, danach Wand- und Deckenraster des Reinraums, Doppelboden und Filterdecke. <em>Meilenstein: Gebäude regendicht.</em>"
      ],
      [
        "Medienversorgung und Abgasreinigung",
        "Reinstwasseranlage und Spülung des Kreislaufs, Gasehof für Grund- und Spezialgase, Ventilschränke und Dichtheitsprüfung, Abluft und Wäscher sowie Zuschaltung der Umspannstation — alles auf die Anschlusspunkte hin getrieben, nicht auf ein allgemeines „fertig“. <em>Meilenstein: Medien an den Anschlusspunkten verfügbar.</em>"
      ],
      [
        "Reinraumabnahme und Protokollumstellung",
        "Die Umstellung des Bauprotokolls, Schleusen und Umkleiden, Verfahren für die Materialeinschleusung, Luftmengenabgleich und Nachweis der Verdrängungsströmung, Partikelzählung und Klassifizierung nach ISO 14644, dazu Schwingungs- und EMV-Messung. <em>Meilenstein: Reinraum abgenommen.</em>"
      ],
      [
        "Anlageneinbringung, Anschluss und Qualifizierung",
        "Transportkonzept und Einbringreihenfolge, Wellen für Litho, Ätzen, Beschichtung und Messtechnik, Anschluss an Gase, Abluft und Reinstwasser, Installationsqualifizierung durch den Hersteller und anschließende Betriebsqualifizierung. <em>Meilenstein: Anlagenqualifizierung abgeschlossen.</em>"
      ],
      [
        "Prozessqualifizierung und erstes Silizium",
        "Anbindung von MES und Automatisierung, Einspielen der Rezepte, erster Wafer durch ein einzelnes Modul, das Pilotlos über die gesamte Prozesskette, Ausbeutelernkurve und Kundenqualifizierung. <em>Meilensteine: erstes Silizium, Freigabe für die Serienfertigung.</em>"
      ]
    ],
    callout: "Es gibt einen Termin in einem Fab-Projekt, der für alle die Regeln ändert: die Umstellung auf das Reinraumprotokoll. Davor ist es eine Baustelle mit Helm und Schweißgerät. Danach ist jede Person eingekleidet, jedes Material wird durch eine Schleuse gewischt, und die Leistung je Gewerk bricht deutlich ein. Planen Sie die Arbeit beiderseits dieser Linie bewusst — alles, was schmutzig fertig werden kann, muss davor fertig sein, und jeder Balken, der sie kreuzt, braucht eine längere Dauer als dieselbe Arbeit außerhalb. Projekte, die das als gewöhnliche Übergabe behandeln, lernen es auf der Baustelle neu und verlieren dabei Monate.",
    customize: [
      "Frieren Sie die Anlagenliste früh ein und setzen Sie das als Meilenstein. Jede Mediengröße, jeder Durchbruch und jede Anschlusszeichnung leitet sich daraus ab, und ein später Anlagentausch läuft durch die gesamte Gebäudeplanung.",
      "Ordnen Sie die Anlagenwellen Ihrer eigenen Medienverfügbarkeit zu und nicht den Lieferterminen der Hersteller. Eine Anlage, die vor ihren Gasen und ihrer Abluft ankommt, belegt Fläche und qualifiziert nichts.",
      "Geben Sie dem Reinstwasser nach der Montage einen eigenen Balken für Spülung und Leitfähigkeitsnachweis. Eine gebaute Anlage ist nicht dasselbe wie ein Kreislauf, der sauber genug ist, um eine Prozessanlage anzuschließen.",
      "Trennen Sie Installations- und Betriebsqualifizierung. Dass der Hersteller das Hochfahren nachweist, ist ein anderer Vorgang mit anderen Leuten als der Nachweis Ihres Prozessteams, dass die Anlage eine stabile Regelgrenze hält.",
      "Nehmen Sie Protokollumstellung, Einkleideverfahren und Materialeinschleusung als eigene Balken auf. Das sind Vorgänge mit Dauer, keine Rundmail.",
      "Legen Sie Schwingungs-, EMV- und Schallmessung vor die Einbringung der Lithografieanlagen. Ein Schwingungsproblem nach dem Aufstellen eines Steppers zu finden, ist die teuerste Entdeckung in diesem Plan."
    ],
    tips: [
      "<strong>Der echte Meilenstein ist der Anschluss, nicht die Lieferung.</strong> Verfolgen Sie Anlagen nach dem Tag, an dem sie an laufende Medien angeschlossen und bestromt sind — eine Halle voller gelieferter Anlagen ist für den Qualifizierungsplan wertlos.",
      "<strong>Bauen Sie die Medien auf einen Anschlusspunkttermin hin.</strong> „Reinstwasseranlage fertig“ und „Reinstwasser am Anschlusspunkt der Lithozelle mit spezifikationsgerechtem Widerstand verfügbar“ liegen Monate auseinander, und nur das Zweite gibt eine Anlage frei.",
      "<strong>Schützen Sie den Terminplan der Abgasreinigung.</strong> Abluft und Wäscher sind unscheinbar und werden regelmäßig zurückgestellt, und ohne sie lässt sich keine gasführende Anlage qualifizieren — sie liegen still auf dem kritischen Pfad zum ersten Silizium.",
      "<strong>Messen Sie Schwingungen unter realen Bedingungen.</strong> Eine Messung vor dem Anlauf von Ventilatoren und Pumpen bildet nicht die Umgebung ab, in der die Lithoanlagen später stehen.",
      "<strong>Planen Sie die Ausbeutelernkurve nicht als festen Balken.</strong> Die Defektdichte sinkt entlang einer teilweise experimentellen Kurve; geben Sie ihr ein realistisches Fenster und eine Reserve statt eines Termins, den der Businessplan gern hätte.",
      "<strong>Beginnen Sie mit MES und Automatisierung während der Anlagenmontage, nicht danach.</strong> Rezept- und Materialflussanbindung ist Software mit eigenem Fehlerzyklus und ein häufiger Blocker beim ersten Pilotlos."
    ],
    faq: [
      [
        "Wie lange dauert der Bau einer Halbleiterfabrik?",
        "Eine Fab auf der grünen Wiese läuft üblicherweise 28 bis 36 Monate von der Genehmigung bis zur Serienfertigung; ungefähr diesen Zeitraum nutzt die Vorlage. Rohbau und Medien sind gut planbar, die Streuung sitzt in Anlagenqualifizierung und Ausbeutelernkurve."
      ],
      [
        "Was ist die Umstellung auf das Reinraumprotokoll?",
        "Der Punkt, an dem das Gebäude aufhört, Baustelle zu sein, und zu einer kontrollierten Umgebung wird. Einkleiden, Schleusen, Wischeinschleusung von Material und eingeschränkte Werkzeuge beginnen, und die Leistung der Gewerke für alle Restarbeiten sinkt deutlich."
      ],
      [
        "Warum steht der Anlagenanschluss auf dem kritischen Pfad und nicht die Lieferung?",
        "Eine Anlage lässt sich erst qualifizieren, wenn sie spezifikationsgerecht an Reinstwasser, Prozessgase, Abluft und Strom angeschlossen ist. Die Lieferung ist ein Logistikvorgang; der Anschluss hängt daran, dass die Medien an genau diesem Punkt der Fab fertig sind."
      ],
      [
        "Welche Genehmigungen bestimmen den Vorlauf in Deutschland?",
        "Bei einer Fab ist es regelmäßig die immissionsschutzrechtliche Genehmigung nach dem Bundes-Immissionsschutzgesetz, weil Prozessgase, Abluft und Abwasser die Anlage genehmigungsbedürftig machen, häufig mit Umweltverträglichkeitsprüfung und Öffentlichkeitsbeteiligung. Sie läuft parallel zur Baugenehmigung und braucht einen eigenen Balken mit realistischer Dauer, nicht eine Zeile am Rand."
      ],
      [
        "Wann ist eine Fab tatsächlich „eröffnet“?",
        "Bei Anlagenqualifizierung und erstem Silizium, nicht bei Baufertigstellung. Die Vorlage behandelt Regendichtheit und Reinraumabnahme als Zwischentore und reserviert die Hauptmeilensteine für Qualifizierung und das erste vollständige Pilotlos."
      ],
      [
        "Wie viel Reserve brauche ich für die Ausbeutelernkurve?",
        "Genug, dass die Defektdichtekurve experimentell sein darf statt terminiert. Die meisten Projekte unterschätzen diese Phase, weil sie die einzige ist, in der die Antwort vorher nicht feststeht; ein eigener sichtbarer Balken ist besser, als die davorliegenden aufzupolstern."
      ],
      [
        "Ist die Vorlage für den Fab-Bau kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung und ohne Wasserzeichen."
      ]
    ]
  },
  'oil-gas-pipeline-construction-schedule': {
    card: "Trasse, Genehmigung, Grunddienstbarkeiten, Zeitfenster, Schweißkolonne, Druckprobe.",
    h1: "Terminplan für den Bau einer Öl- und Gaspipeline",
    metaTitle: "Pipelinebau — Terminplan",
    metaDesc: "Kostenloser Terminplan für den Pipelinebau: Planfeststellung, Grunddienstbarkeiten, Bauzeitenfenster, Schweißkolonne, Kreuzungen, Druckprobe, Einbindung.",
    lead: "Eine kostenlose <strong>Terminplan-Vorlage für den Bau einer Öl- und Gaspipeline</strong>, geordnet nach den beiden Dingen, die die Termine wirklich setzen: Grund und Jahreszeit. Trassenerkundung, Umweltverträglichkeitsprüfung, Planfeststellung und der Erwerb von Grunddienstbarkeiten am Anfang; Brut- und Schonzeiten sowie die wasserrechtlich zugelassenen Bauzeitenfenster für Gewässerquerungen als feste Randbedingungen; die Rohrleitungskolonne als wandernde Fertigungsstraße aus Auslegen, Graben, Schweißen, Durchstrahlungsprüfung, Umhüllen, Einlegen und Verfüllen; Kreuzungen und Stationen parallel; danach Druckprobe, Einbindenähte und Inbetriebnahme. Laden Sie sie für den Lenkungskreis herunter oder tragen Sie online Ihre eigenen Fenstertermine ein.",
    intro: "Eine Pipeline wird von einer Fertigungsstraße gebaut, die durch einen Korridor wandert, der Ihnen noch nicht gehört, und zwar innerhalb von Jahreszeiten, die Sie nicht steuern. Die Vorlage hält beide Zwänge sichtbar:",
    phases: [
      [
        "Trassenwahl, Genehmigungen und Wegerechte",
        "Trassenerkundung und Variantenvergleich, Umweltverträglichkeitsprüfung und artenschutzrechtliche Prüfung, das Planfeststellungsverfahren mit Erörterungstermin, wasserrechtliche Erlaubnis für die Gewässerquerungen, Verhandlung mit Grundstückseigentümern und Eintragung der Grunddienstbarkeiten sowie die archäologische Freigabe. <em>Meilensteine: Wegerechte gesichert, Baurecht erteilt.</em>"
      ],
      [
        "Rohrbeschaffung und Logistik",
        "Bestellung und Walzung der Leitungsrohre im Werk, Werksumhüllung und Vorbereitung der Schweißenden sowie der Transport per Bahn und Lkw auf die Lagerplätze entlang der Trasse. <em>Meilenstein: Rohre auf dem Arbeitsstreifen.</em>"
      ],
      [
        "Bauvorbereitung und Zeitfenster",
        "Eintragen der Brut- und Schonzeiten sowie der Bauzeitenfenster in den Plan, Ertüchtigung von Zufahrten und Brücken, Freimachen und Planieren des Arbeitsstreifens, Oberbodenabtrag und Erosionsschutz, Aufstellung des SiGe-Plans und Mobilisierung der Kolonne. <em>Meilenstein: Kolonne bereit zum Auslegen.</em>"
      ],
      [
        "Rohrleitungskolonne auf der Strecke",
        "Die Fertigungsstraße selbst — Auslegen, Graben, Feldbögen und Ausrichten, Schweißen, Durchstrahlungs- und Ultraschallprüfung, Nachumhüllung der Rundnähte mit Porenprüfung, Einlegen, Bettung, Verfüllen und kathodischer Korrosionsschutz. <em>Meilenstein: Streckenschweißung abgeschlossen.</em>"
      ],
      [
        "Kreuzungen und Sonderbauwerke",
        "Horizontalspülbohrung unter dem großen Fluss, Gewässerquerungen im zugelassenen Bauzeitenfenster, Kreuzungen von Straßen, Bahnstrecken und Fremdleitungen, Streckenschieberstationen und die Pump- oder Verdichterstationen. <em>Meilenstein: Bauzeitenfenster geschlossen.</em>"
      ],
      [
        "Druckprobe, Einbindung und Inbetriebnahme",
        "Abschnittstrennung, Füllen und Aufdrücken, Haltezeit und Reparaturen nach DVGW-Regelwerk, Entleeren und Trocknen, Einbindenähte, Leittechnik und Leckerkennung, Spülen und Produkteinführung sowie Rekultivierung. <em>Meilensteine: Druckprobe bestanden, Leitung in Betrieb.</em>"
      ]
    ],
    callout: "Bauzeitenfenster sind keine Risiken, sie sind Wände. Ein wasserrechtlich zugelassenes Fenster für Arbeiten im Gewässer kann sechs Wochen im Jahr betragen, eine artenschutzrechtliche Brutzeitregelung kann das Freimachen eine Saison lang vollständig stoppen, und keines von beidem verhandelt. Tragen Sie jedes Fenster in den Plan ein, bevor Sie irgendetwas anderes sequenzieren, und bauen Sie das Kolonnenprogramm so, dass die Querungen darin landen. Ein Fenster um eine Woche zu verfehlen kostet keine Woche, sondern ein Jahr, weil die nächste Öffnung zwölf Monate entfernt ist.",
    customize: [
      "Tragen Sie zuerst Ihre eigenen Bauzeitenfenster und Schonzeiten als feste Balken ein und ordnen Sie die Kolonne darum herum an, nicht umgekehrt.",
      "Teilen Sie die Strecke in je einen Satz Balken pro Kolonne, wenn Sie mit mehreren Mannschaften arbeiten, und geben Sie jeder Kolonne ihre eigene Leistung in Metern oder Nähten pro Tag.",
      "Bilden Sie Schweißen, Prüfung und Umhüllung als überlappende Balken ab, die einander die Trasse entlang nachlaufen — es ist eine wandernde Fertigungsstraße und nicht drei aufeinanderfolgende Phasen, und eine sequenzielle Darstellung verbirgt, wo der Engpass wirklich sitzt.",
      "Ergänzen Sie einen Balken für Nahtreparatur und Wiederholungsprüfung. Die Annahme, jede Naht bestehe die Durchstrahlungsprüfung beim ersten Mal, ist der häufigste Optimismusfehler im Pipelinebau.",
      "Geben Sie dem Erwerb der Grunddienstbarkeiten einen langen Auslauf und eine Reserve für Verweigerer. Ein einziger Eigentümer, der nicht unterschreibt, hält eine sonst startbereite Kolonne auf.",
      "Zerlegen Sie die Druckprobe in Abschnitte, die zu Ihren Prüfarmaturen passen, und ergänzen Sie nach der Haltezeit einen Balken für Reparatur und Wiederholungsprüfung; ein durchgefallener Abschnitt muss gefunden, herausgetrennt, neu geschweißt und erneut geprüft werden."
    ],
    tips: [
      "<strong>Beginnen Sie den Erwerb der Wegerechte, bevor die Planung fertig ist.</strong> Grund und Boden ist bei den meisten Pipelines der längste Vorlauf und liegt vollständig außerhalb der Kontrolle der Baufirma — behandeln Sie ihn wie eine Beschaffung, mit verantwortlicher Person und wöchentlichem Status.",
      "<strong>Lassen Sie die Kolonne nicht dem Rohr davonlaufen.</strong> Der Lagerbestand vor der Mannschaft ist die beste Frühwarnkennzahl auf der Baustelle; wenn er sinkt, steht die Kolonne, bevor jemand ein Problem meldet.",
      "<strong>Binden Sie die Spülbohrmannschaft an das Fenster, nicht an die Kolonne.</strong> Spülbohrfirmen sind spezialisiert und knapp, und ein Gerät, das nach Schließen des Bauzeitenfensters ankommt, kostet ein Jahr Puffer.",
      "<strong>Behandeln Sie die Einbindenähte als eigenen, sorgfältig sequenzierten Vorgang.</strong> Sie entstehen nach der Druckprobe und lassen sich nicht auf dieselbe Weise mitprüfen, tragen also überproportionales Prüf- und Termingewicht.",
      "<strong>Führen Sie Leittechnik und Leckerkennung parallel zu den Stationen, nicht danach.</strong> Die Anbindung an die Leitwarte ist ein Softwarevorhaben mit eigenem Testzyklus und überrascht Pipelinepläne regelmäßig ganz am Ende.",
      "<strong>Planen Sie Rekultivierung und Abnahme durch die Eigentümer als echte Arbeit.</strong> Die Leitung mag in Betrieb sein, aber solange der Arbeitsstreifen nicht wiederhergestellt und abgenommen ist, ist das Projekt nicht abgeschlossen und der Sicherheitseinbehalt nicht frei."
    ],
    faq: [
      [
        "Wie lange dauert der Bau einer Pipeline?",
        "Eine Fernleitung mittleren Durchmessers läuft üblicherweise 20 bis 28 Monate von der Trassenerkundung bis zur Inbetriebnahme; ungefähr diesen Zeitraum nutzt die Vorlage. Vorn dominieren Genehmigung und Wegerechte, in der Mitte die Bauzeitenfenster."
      ],
      [
        "Was sind Bauzeitenfenster und warum wiegen sie so schwer?",
        "Es sind rechtlich festgelegte Zeiträume, in denen Arbeiten im oder am Gewässer und in Brut- und Lebensstätten erlaubt oder untersagt sind — festgeschrieben in der wasserrechtlichen Erlaubnis und im Planfeststellungsbeschluss. Sie lassen sich weder verhandeln noch stauchen, und ein verpasstes Fenster schiebt den betroffenen Umfang meist um ein volles Jahr."
      ],
      [
        "Wie plane ich eine Rohrleitungskolonne?",
        "Als wandernde Fertigungsstraße, nicht als Phasen. Auslegen, Graben, Schweißen, Prüfen, Umhüllen, Einlegen und Verfüllen laufen die Trasse mit je eigener Leistung entlang und laufen einander nach, und genau so sollte der Plan sie überlappend zeigen."
      ],
      [
        "Wann sollte die Druckprobe liegen?",
        "Nach dem Verfüllen des jeweiligen Prüfabschnitts und vor der Einbindung. Planen Sie eine Haltezeit, eine Dichtheitsbewertung und einen ausdrücklichen Balken für Reparatur und Wiederholungsprüfung ein; die Annahme, jeder Abschnitt bestehe beim ersten Mal, ist die klassische Überschreitung am Projektende. Umfang und Ablauf richten sich nach dem einschlägigen DVGW- beziehungsweise DIN-Regelwerk für die jeweilige Leitungsart."
      ],
      [
        "Warum liegt der Erwerb der Wegerechte auf dem kritischen Pfad?",
        "Weil auf einem Grundstück ohne eingetragene Dienstbarkeit körperlich nicht gebaut werden kann und die Verhandlungsdauer von einzelnen Eigentümern abhängt, nicht von Ihrem Programm. Es verhält sich wie eine Beschaffung mit langem Vorlauf und sollte auch so verfolgt werden."
      ],
      [
        "Ist die Vorlage für den Pipelinebau kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung und ohne Wasserzeichen."
      ]
    ]
  },
  'theatre-production-schedule': {
    card: "Rückwärts von der Premiere: Besetzung, Proben, Bauprobe, Endproben, Voraufführungen.",
    h1: "Probenplan für eine Theaterproduktion",
    metaTitle: "Theaterproduktion — Probenplan",
    metaDesc: "Kostenloser Probenplan fürs Theater: rückwärts von der Premiere über Besetzung, Probenwochen, Einbau, Technikprobe, Hauptproben und Voraufführungen.",
    lead: "Eine kostenlose <strong>Probenplan-Vorlage für eine Theaterproduktion</strong>, die so funktioniert, wie Theaterpläne allein funktionieren können: rückwärts von der Premiere. Der Termin steht, die Karten sind verkauft und das Haus ist disponiert, also müssen Besetzung, Bauprobe und Freigabe des Bühnenbildes, Werkstattbau, Probenwochen im Probensaal, Einbau, Beleuchtungseinrichtung, Technische Probe, Hauptproben und Voraufführungen davor Platz finden. Laden Sie sie für die Produktionssitzung herunter oder schieben Sie online den Premierentermin und sehen Sie den ganzen Rückwärtsplan mitwandern.",
    intro: "Jedes andere Projekt fragt, wann es fertig sein wird. Eine Theaterproduktion weiß es auf die Stunde genau und arbeitet heraus, was vorher wahr sein muss. In dieser Richtung ist die Vorlage gebaut:",
    phases: [
      [
        "Entwicklung, Rechte und Freigabe",
        "Premierentermin und Disposition des Hauses, Aufführungsrechte über Bühnenverlag und die GEMA-Anmeldung für Musik, Finanzierung, das Leitungsteam sowie der aus dem festen Termin abgeleitete Rückwärtsplan. <em>Meilenstein: Produktion freigegeben.</em>"
      ],
      [
        "Besetzung und Ausstattung",
        "Rollenprofile und Agenturvorschläge, Vorsprechen und Zweitrunden, Angebote und Verträge nach dem Normalvertrag Bühne beziehungsweise Gastverträge, die Bauprobe mit dem Weißmodell und die abschließende Modellabnahme, die die Werkstätten freigibt. <em>Meilensteine: Ensemble verpflichtet, Ausstattung freigegeben.</em>"
      ],
      [
        "Werkstattbau und Probensaal",
        "Bau und Malerei in den Werkstätten, Kostümanfertigung und Anproben, die Probenwochen mit Durchlaufproben und die vom abgeklebten Probensaalboden aus geschriebenen Stellproben und Verwandlungspläne. <em>Meilenstein: Durchlaufprobe für die Leitung.</em>"
      ],
      [
        "Einbau und Einrichtung",
        "Übergabe von der Vorstellung davor, Hängen im leeren Haus, der Einbau selbst, Inbetriebnahme von Obermaschinerie und Untermaschinerie, Einleuchten und Klangeinrichtung im Raum. <em>Meilenstein: Bühne für das Ensemble verfügbar.</em>"
      ],
      [
        "Endprobenwoche",
        "Stellprobe auf der Bühne, technische Probe Akt für Akt, Notizen und Neuplanung der Verwandlungen sowie zwei Hauptproben — der Engpass, der sich nicht dehnen lässt, weil das Haus disponiert ist. <em>Meilenstein: erstes Publikum.</em>"
      ],
      [
        "Voraufführungen, Premiere und Serie",
        "Voraufführungen mit Nachproben am Tag dazwischen, der Stopp aller Änderungen, die Premiere am vertraglich vereinbarten Termin, Kritiken und Nachsteuerung des Marketings, dann die Serie unter der Abendspielleitung. <em>Meilenstein: Premiere.</em>"
      ]
    ],
    callout: "Die Premiere ist kein Ziel, sondern ein Vertrag. Kritikerinnen sind eingeladen, Karten sind verkauft, das Werbebudget ist ausgegeben und nach Ihnen kommt die nächste Produktion ins Haus. Alles rechnet deshalb rückwärts von ihr, und die Endprobenwoche — Stellprobe, technische Probe, Hauptproben — nimmt jede Verzögerung aus jeder Phase davor auf. Ein Kostüm, das zu spät kommt, eine Maschinerie, die nicht abgenommen wird, eine Verwandlung, die nie geschrieben wurde: alles landet in denselben sieben Tagen, und aus sieben Tagen werden keine acht.",
    customize: [
      "Setzen Sie zuerst den Premierentermin und ziehen Sie alles andere davor. Wenn der Rückwärtsplan nicht passt, liegt die Lösung stromaufwärts — ein kleinerer Bau, frühere Besetzung, mehr Probenwochen — niemals in einer kürzeren Endprobenwoche.",
      "Passen Sie die Probenwochen Ihrem Haus an; sechs bis acht Wochen sind an Stadt- und Staatstheatern üblich, in der freien Szene oft weniger, und Zweitbesetzungen müssen hineinpassen.",
      "Verlängern oder verkürzen Sie Einbau und Einrichtung nach Ihrem Haus. Ein Repertoirebetrieb, der sonntags übergibt, ist eine völlig andere Randbedingung als ein Gastspielhaus, das Ihnen zwei Wochen gehört.",
      "Teilen Sie die technische Probe nach Akten und ergänzen Sie einen eigenen Balken für Obermaschinerie oder Flugwerk, wenn die Produktion damit arbeitet — das sind die Sequenzen, die Technikzeit fressen.",
      "Ergänzen Sie einen Balken für Nachproben zwischen den Voraufführungen. Voraufführungen sind nicht nur Vorstellungen, sondern die letzte Gelegenheit, die Inszenierung zu ändern, und die Proben sind angesetzte Arbeit für das Ensemble.",
      "Setzen Sie die Freigabe der Ausstattung als harten Meilenstein. Die Werkstätten können ohne sie nicht anfangen, und jeder Tag Verzug geht am anderen Ende direkt von Malerei und Anprobenzeit ab.",
      "Nehmen Sie die Prüfung nach Versammlungsstättenverordnung als eigene Zeile auf, wenn das Bühnenbild Aufbauten, Praktikabel oder Pyrotechnik enthält — Brandschutzeinstufung der Dekoration und die Abnahme mit der Leiterin oder dem Leiter der Veranstaltungstechnik sind terminierte Vorgänge, kein Formblatt."
    ],
    tips: [
      "<strong>Geben Sie die Ausstattung früh genug frei, dass die Werkstätten ruhig bauen können.</strong> Eine späte Modellabnahme verschiebt die Premiere nicht — sie führt nur dazu, dass das Bühnenbild ungemalt ankommt und der Einbau in die technische Probe hineinläuft.",
      "<strong>Schützen Sie die Durchlaufprobe für die Leitung.</strong> Sie ist der letzte Moment, in dem die Inszenierung als Ganzes zu sehen ist, bevor das Haus alle Aufmerksamkeit schluckt, und sie für einen zusätzlichen Probentag zu streichen, ist fast immer ein schlechter Tausch.",
      "<strong>Schreiben Sie Licht und Ton vom Probensaal aus.</strong> Alles, was die Ausstattenden vor dem Einbau entscheiden können, ist Zeit, die Sie in der technischen Probe zurückgewinnen, und dort ist eine Stunde weit mehr wert.",
      "<strong>Stellen Sie das Ensemble nicht auf die Bühne, bevor der Einbau wirklich fertig ist.</strong> Eine Stellprobe, die sich die Bühne mit noch bauender Technik teilt, ist langsamer als warten, und dort passieren die Unfälle.",
      "<strong>Behandeln Sie Voraufführungen als Teil der Probenarbeit.</strong> Setzen Sie die Nachproben an, kalkulieren Sie die Mehrarbeit und legen Sie vorab fest, nach welcher Voraufführung Änderungen aufhören.",
      "<strong>Halten Sie Garderobe und schnelle Umzüge im Plan.</strong> Kostümwechsel sind der am häufigsten unterprobierte Teil einer Endprobenwoche und genau das, was vor dem ersten Publikum sichtbar schiefgeht."
    ],
    faq: [
      [
        "Wie plant man eine Theaterproduktion?",
        "Rückwärts von der Premiere. Termin festlegen, dann den spätestmöglichen Beginn für Voraufführungen, Endprobenwoche, Einbau, Proben, Werkstattbau, Ausstattung und Besetzung bestimmen. Die Vorlage ist in dieser Reihenfolge angelegt, damit die Randbedingung sichtbar bleibt."
      ],
      [
        "Was ist die Endprobenwoche?",
        "Die Woche zwischen dem Betreten der Bühne durch das Ensemble und dem ersten Publikum: Stellprobe, technische Proben, Notizen und Hauptproben. Hier landet jede frühere Verzögerung, und sie ist auf beiden Seiten von der Disposition des Hauses begrenzt."
      ],
      [
        "Wie lang ist eine übliche Probenzeit?",
        "Sechs bis acht Wochen im Probensaal sind an einem Stadt- oder Staatstheater üblich, bei Musiktheater häufig länger. Die Vorlage nutzt sechs Wochen einschließlich Durchlaufproben; passen Sie sie an Ihren Haustarif und die Größe der Produktion an."
      ],
      [
        "Welche Verträge bestimmen die Verfügbarkeit des Ensembles?",
        "Am festen Haus der Normalvertrag Bühne mit Spielzeitbindung, Probenzeitregelungen und Ruhezeiten; für zusätzlich Verpflichtete Gastverträge mit ausgehandelten Probentagen. Beides begrenzt, wie viele Personen wann im Saal stehen können, und gehört deshalb als Randbedingung in den Plan und nicht in eine Nebenrechnung."
      ],
      [
        "Lässt sich die Endprobenwoche verlängern, wenn wir hinterherliegen?",
        "So gut wie nie. Das Haus ist disponiert, die Voraufführungen sind im Verkauf und die Premiere ist vereinbart, die Bühnenzeit steht also fest. Aufholen muss man im Probensaal, in den Werkstätten oder bei der Freigabe der Ausstattung — alles liegt früher."
      ],
      [
        "Wann sollten Änderungen aufhören?",
        "Meist ein bis zwei Vorstellungen vor der Premiere, damit das Ensemble die besprochene Fassung mindestens einmal spielt. Setzen Sie diesen Stopp ausdrücklich in den Plan — ein unausgesprochener Termin bedeutet, dass bis zum Premierenabend Änderungen eintreffen."
      ],
      [
        "Ist die Vorlage für die Theaterproduktion kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung und ohne Wasserzeichen."
      ]
    ]
  },
  'medical-clinic-opening-timeline': {
    card: "Bedarfsplanung, Zulassung, Approbation, Praxisausbau nach MPBetreibV, Abnahmen.",
    h1: "Zeitplan für die Eröffnung einer Arztpraxis",
    metaTitle: "Praxiseröffnung — Zeitplan",
    metaDesc: "Kostenloser Zeitplan für die Praxiseröffnung: Bedarfsplanung und Zulassung, Approbation und Arztregister, Praxisausbau, Hygiene, Abnahmen, erster Patient.",
    lead: "Eine kostenlose <strong>Zeitplan-Vorlage für die Eröffnung einer Arztpraxis</strong>, gebaut um die drei Uhren, die entscheiden, wann Sie tatsächlich behandeln dürfen: Zulassung, Abnahmen und die persönlichen Voraussetzungen der Ärztinnen und Ärzte. Konzept, Standort und die Klärung des Zulassungswegs, Eintragung ins Arztregister und das Verfahren beim Zulassungsausschuss als lange Uhr, die andere stellen, ein Ausbau mit Anforderungen an Hygiene, Lüftung und Medizinprodukte, die ein gewöhnlicher Büroausbau nicht kennt, Inbetriebnahme und Einweisung der Geräte, dann die Abnahmen und die Zulassung, die die Türen öffnen. Laden Sie sie für die Bankvorlage herunter oder tragen Sie online Ihre eigenen Fristen ein.",
    intro: "Eine Praxis, die gebaut, besetzt und ausgestattet ist, darf trotzdem niemanden behandeln, bevor mehrere getrennte Genehmigungen vorliegen. Die Vorlage macht daraus das Rückgrat statt eines Anhängsels:",
    phases: [
      [
        "Konzept, Standort und Zulassungsweg",
        "Leistungsspektrum und Bedarfsanalyse, Standortsuche und Mietvertrag, Prüfung der Bedarfsplanung im gewünschten Planungsbereich, Klärung von Rechtsform und Zulassungsweg mit der Kassenärztlichen Vereinigung sowie Betriebsstättennummer und steuerliche Anmeldungen. <em>Meilensteine: Mietvertrag unterschrieben, Zulassungsweg geklärt.</em>"
      ],
      [
        "Zulassung, Arztregister und persönliche Voraussetzungen",
        "Gewinnung der Ärztinnen und Ärzte, Approbation und Facharztanerkennung, Eintragung ins Arztregister bei der Kassenärztlichen Vereinigung, Antrag beim Zulassungsausschuss samt Sitzungstermin, Meldung an die Ärztekammer sowie Betäubungsmittelnummer, wo sie gebraucht wird. <em>Meilensteine: Arztregistereintrag erfolgt, Zulassung erteilt.</em>"
      ],
      [
        "Planung und regulierter Praxisausbau",
        "Raumplanung Zimmer für Zimmer, Ausführungsplanung und Bauantrag beziehungsweise Nutzungsänderung, Barrierefreiheit, Trennung von rein und unrein, Lüftung und Wasserführung mit Blick auf die Trinkwasserverordnung, abwischbare Oberflächen sowie Strahlenschutz, wo geröntgt wird. <em>Meilenstein: Ausbau im Wesentlichen fertig.</em>"
      ],
      [
        "Geräte, IT und Inbetriebnahme",
        "Bestellung der Medizintechnik, Lieferung und Aufstellung, Inbetriebnahme mit Einweisung nach der Medizinprodukte-Betreiberverordnung, Anlage des Medizinproduktebuchs und des Bestandsverzeichnisses, sicherheits- und messtechnische Kontrollen, Abnahmeprüfung und Sachverständigenprüfung der Röntgeneinrichtung sowie Praxisverwaltungssystem und Anbindung an die Telematikinfrastruktur. <em>Meilenstein: Geräte abgenommen und eingewiesen.</em>"
      ],
      [
        "Abnahmen, Hygiene und Anzeigen",
        "Brandschutz und Nutzungsabnahme, Hygieneplan nach den Empfehlungen des Robert Koch-Instituts und Aufbereitung von Medizinprodukten, Anzeige beim Gesundheitsamt und dessen Begehung, Anzeige der Röntgeneinrichtung bei der zuständigen Behörde, Datenschutzkonzept und Verzeichnis der Verarbeitungstätigkeiten. <em>Meilenstein: Praxis betriebsbereit gemeldet.</em>"
      ],
      [
        "Personal, Probelauf und Start",
        "Einstellung von medizinischen Fachangestellten und Empfang, Einarbeitung und Nachweis der Fachkunde, Beschaffung und Sterilgutlager, ein Probetag mit Testpatienten, Testabrechnung über die Kassenärztliche Vereinigung und die Vorstellung bei zuweisenden Praxen. <em>Meilensteine: erster Patient behandelt, volle Sprechstunde.</em>"
      ]
    ],
    callout: "Die Uhr, die Sie am wenigsten steuern, ist die Zulassung — und in einem gesperrten Planungsbereich kann sie gar nicht laufen. Die Bedarfsplanung der Kassenärztlichen Vereinigung entscheidet, ob in Ihrer Arztgruppe und Ihrem Planungsbereich überhaupt ein Sitz frei ist; ist er gesperrt, gibt es keinen Termin, den Sie beschleunigen könnten, sondern nur den Weg über die Nachbesetzung eines abgegebenen Sitzes, eine Sonderbedarfszulassung oder eine Anstellung. Der Zulassungsausschuss tagt zudem in festen Sitzungsterminen mit vorgelagerter Antragsfrist, und ein unvollständiger Antrag rutscht in die nächste Sitzung. Klären Sie das, bevor Sie den Mietvertrag unterschreiben, nicht wenn der Ausbau fertig ist.",
    customize: [
      "Beginnen Sie den Zulassungsbalken am Tag der Entscheidung für den Standort und tragen Sie die tatsächlichen Sitzungstermine des Zulassungsausschusses als feste Punkte ein — dazwischen liegt die Antragsfrist, nicht der Sitzungstag.",
      "Ergänzen Sie eine Zeile je Ärztin und Arzt, wenn Sie zu mehreren eröffnen. Approbation, Facharztanerkennung und Arztregistereintrag laufen nicht gleichzeitig durch, und der Starttermin hängt an der langsamsten Person, nicht am Mittelwert.",
      "Trennen Sie Zulassung und Abrechnungsfähigkeit. Zugelassen zu sein und über die Kassenärztliche Vereinigung abrechnen zu können, sind zwei Vorgänge mit eigenen Uhren, und das Zweite entscheidet über Einnahmen, nicht über den Zugang.",
      "Führen Sie Anschluss an die Telematikinfrastruktur, Konnektor und elektronische Heilberufsausweise als eigene Balken; sie hängen an Lieferzeiten und Identifizierungsverfahren Dritter und blockieren sonst still die erste Abrechnung.",
      "Halten Sie Aufbereitung von Medizinprodukten, Validierung des Sterilisators und Hygieneplan als eigene Zeilen — das Gesundheitsamt fragt bei der Begehung danach, und eine Nachbesserung kostet einen zweiten Termin.",
      "Legen Sie den Probetag mit vollem Personal vor den Start. Es ist die einzige Übung, in der Anmeldung, Zimmerbelegung, Praxisverwaltungssystem, Geräte und Abrechnung einmal in einem Fluss zusammenkommen."
    ],
    tips: [
      "<strong>Prüfen Sie die Bedarfsplanung, bevor Sie den Mietvertrag unterschreiben.</strong> Ob in Ihrer Arztgruppe im gewünschten Planungsbereich ein Sitz frei ist, ändert Standort, Rechtsform und Zeitplan vollständig — und ein gesperrter Bereich lässt sich nicht durch mehr Aufwand öffnen.",
      "<strong>Reichen Sie Anträge vollständig ein oder gar nicht.</strong> Ein unvollständiger Antrag startet die Uhr nicht, sondern rutscht in die nächste Sitzung des Zulassungsausschusses — dieser eine Verwaltungsfehler ist die häufigste Ursache einer verschobenen Eröffnung.",
      "<strong>Planen Sie für die Begehung, nicht nur für den Handwerker.</strong> Trennung von rein und unrein, Handwaschplätze, Oberflächen und die Aufbereitungsräume werden vom Gesundheitsamt konkret geprüft, und eine Umplanung nach der Begehung kostet weit mehr, als es gleich richtig zu machen.",
      "<strong>Vereinbaren Sie Brandschutz- und Gesundheitsamtstermine früh und rechnen Sie mit einer Nachbegehung.</strong> Deren Kalender gehört Ihnen nicht, und ein Starttermin, der bei beiden auf Anhieb-Erfolg setzt, ist eine Wette, die Sie meist verlieren.",
      "<strong>Nehmen Sie Geräte mit Einweisung und Dokumentation in Betrieb, nicht nur mit dem Lieferschein.</strong> Die Medizinprodukte-Betreiberverordnung verlangt Einweisung der Anwenderinnen und Anwender, ein Bestandsverzeichnis und ein Medizinproduktebuch für bestimmte Geräte sowie sicherheitstechnische Kontrollen — genau danach wird gefragt.",
      "<strong>Rechnen Sie Testfälle ab, bevor der erste echte Patient kommt.</strong> Eine falsch angelegte Betriebsstätte oder ein fehlender Heilberufsausweis fällt sonst im Quartalsabschluss auf, wenn die Leistungen bereits erbracht sind."
    ],
    faq: [
      [
        "Wie lange dauert es, eine Praxis zu eröffnen?",
        "Zwölf bis sechzehn Monate sind für eine ausgebaute Praxis in Mieträumen üblich; ungefähr diesen Zeitraum nutzt die Vorlage. Der Ausbau ist selten der Engpass — Zulassung und Abnahmen sind es."
      ],
      [
        "Was bedeutet die Bedarfsplanung für meinen Zeitplan?",
        "Sie entscheidet, ob in Ihrer Arztgruppe und Ihrem Planungsbereich überhaupt ein Vertragsarztsitz zu haben ist. In einem gesperrten Bereich gibt es keinen freien Sitz, sondern nur die Nachbesetzung eines abgegebenen Sitzes, eine Sonderbedarfszulassung oder eine Anstellung bei einer bestehenden Praxis — jeweils mit eigenem Verfahren und eigener Dauer. Das ist keine Formalie am Rand, sondern die Randbedingung, die über den Standort entscheidet."
      ],
      [
        "Welche persönlichen Voraussetzungen brauchen die Ärztinnen und Ärzte?",
        "Approbation, in der Regel eine Facharztanerkennung der Ärztekammer und die Eintragung ins Arztregister der Kassenärztlichen Vereinigung, bevor überhaupt ein Zulassungsantrag gestellt werden kann. Bei ausländischen Abschlüssen kommt die Anerkennung hinzu, die eigene Monate braucht. Beginnen Sie damit am Tag der Zusage, nicht wenn der Ausbau steht."
      ],
      [
        "Worin unterscheidet sich ein Praxisausbau von einem Büroausbau?",
        "Trennung von reinen und unreinen Bereichen, Räume für die Aufbereitung von Medizinprodukten mit validiertem Verfahren, Anforderungen an Trinkwasserinstallation und Lüftung, abwischbare Oberflächen, Barrierefreiheit und Strahlenschutz für Röntgenräume — nichts davon kommt in einem gewöhnlichen Büroausbau vor."
      ],
      [
        "Welche Abnahmen und Anzeigen sind vor der Eröffnung nötig?",
        "Typischerweise Brandschutz- und Nutzungsabnahme, die Anzeige beim Gesundheitsamt mit anschließender infektionshygienischer Begehung, die Anzeige der Röntgeneinrichtung mit Abnahme- und Sachverständigenprüfung sowie die Inbetriebnahme der Medizinprodukte mit Einweisung und Dokumentation nach der Medizinprodukte-Betreiberverordnung. Welche davon greifen, hängt vom Leistungsspektrum ab."
      ],
      [
        "Ist die Vorlage für die Praxiseröffnung kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung und ohne Wasserzeichen."
      ]
    ]
  },
  'sap-s4hana-migration-plan': {
    card: "Brownfield-Konversion, Eigenentwicklungen, drei Testumstellungen, Freeze, Hypercare.",
    h1: "Projektplan für die SAP-S/4HANA-Migration",
    metaTitle: "SAP S/4HANA — Migrationsplan",
    metaDesc: "Kostenloser Plan für die SAP-S/4HANA-Migration: Brownfield-Konversion, Anpassung der Eigenentwicklungen, drei Testumstellungen, Generalprobe, Freeze.",
    lead: "Eine kostenlose <strong>Projektplan-Vorlage für die SAP-S/4HANA-Migration</strong>, gebaut um die Entscheidung, die alles andere bestimmt: ob Sie ein bestehendes ECC-System an Ort und Stelle konvertieren (Brownfield) oder eine Neuimplementierung aufsetzen und dorthin migrieren (Greenfield). Dieser Plan zeigt den Weg der <em>Systemkonversion</em>, weil dessen Terminplan von der Anpassung der Eigenentwicklungen und von wiederholten Testumstellungen beherrscht wird und nicht von der Prozessgestaltung. Wenn Sie stattdessen ein ERP auf der grünen Wiese aufbauen, beginnen Sie beim <a href=\"/de/templates/erp-implementation-schedule.html\">ERP-Einführungsplan</a>.",
    intro: "Eine Konversion endet nicht mit dem Produktivstart — sie endet, wenn das Freeze-Fenster schließt und die Bücher stimmen. Die Balken unten setzen Testumstellungen und Freeze dorthin, wo sie tatsächlich liegen:",
    phases: [
      [
        "Wegentscheidung und Bereitschaft",
        "SAP Readiness Check und Auswertung der Simplification Items, die Entscheidung zwischen Brownfield und Greenfield, Sizing und der Entwurf der Zielsystemlandschaft. <em>Meilenstein: Konversionsweg freigegeben.</em>"
      ],
      [
        "Vorbereitung und Anpassung der Eigenentwicklungen",
        "Der Teil, den niemand richtig schätzt: Analyse der kundeneigenen ABAP-Objekte gegen die Simplification-Datenbank, Anpassung in Wellen, Stilllegung nicht mehr genutzter Objekte und die Vorbereitung des Finanzdatenmodells, auf der die Konversion aufsetzt — Geschäftspartner-Umstellung und neue Anlagenbuchhaltung. <em>Meilenstein: Anpassung der Eigenentwicklungen abgeschlossen.</em>"
      ],
      [
        "Sandbox- und Entwicklungskonversion",
        "Die erste technische Konversion auf einer Sandbox-Kopie und die Laufzeiten, die sie offenlegt, danach Entwicklungs- und Qualitätssicherungssystem, jeweils mit fachlicher Nacharbeit und Modultests dahinter. <em>Meilenstein: Qualitätssicherungssystem konvertiert.</em>"
      ],
      [
        "Testzyklen",
        "Fachliche Tests, Integrations-, Schnittstellen-, Berechtigungs- und Lasttests sowie die Fehlerschleife, alles gegen ein konvertiertes Qualitätssicherungssystem statt gegen einen Neuaufbau. <em>Meilenstein: Integrationstest bestanden.</em>"
      ],
      [
        "Testumstellungen und Generalprobe",
        "Drei Testumstellungen auf vollem Produktivdatenvolumen, jede gemessen und jede verkürzt das Umstellungsdrehbuch, danach die Generalprobe, an der die Go-/No-go-Entscheidung hängt. <em>Meilenstein: Go-/No-go-Entscheidung nach Generalprobe.</em>"
      ],
      [
        "Freeze, Umstellung und Hypercare",
        "Das Freeze-Fenster für das Geschäft, die Produktivkonversion selbst, Validierung und Abstimmung, Freigabe an die Fachbereiche und die Hypercare-Phase bis zur Übergabe an den Regelsupport. <em>Meilenstein: Ende der Hypercare.</em>"
      ]
    ],
    callout: "Zwei Dinge versenken Konversionspläne. Das erste sind die Eigenentwicklungen: der Readiness Check listet Tausende Befunde, die meisten trivial und eine Handvoll strukturell, und bevor jemand sie bewertet hat, haben Sie keine Schätzung, sondern eine Objektzahl. Das zweite ist der Freeze im Geschäft. Teams planen ein Wochenende und stellen fest, dass der Freeze für Buchungen, Stammdatenänderungen und offene Vorgänge in Wahrheit mehrere Tage früher beginnt und erst endet, wenn die Abstimmung stimmt. Planen Sie den Freeze als Geschäftsereignis mit benannten Verantwortlichen, nicht als technisches Fenster, und lassen Sie die Testumstellungen sagen, wie lang er wirklich sein muss.",
    customize: [
      "Wenn Sie neu implementieren statt zu konvertieren, streichen Sie die Phasen für Anpassung und Testumstellungen und bauen Sie um die Prozessgestaltung herum neu — die Formen unterscheiden sich wirklich.",
      "Setzen Sie zuerst das Umstellungswochenende und rechnen Sie rückwärts; die Testumstellungen sind die einzige belastbare Schätzung der benötigten Dauer.",
      "Teilen Sie die Anpassung der Eigenentwicklungen in Wellen nach zuständigem Team, nicht nach Objektzahl, damit die Balken zu denen passen, die die Arbeit tatsächlich machen.",
      "Verlängern Sie das Freeze-Fenster bei hohen Buchungsvolumina zum Periodenende und vermeiden Sie eine Umstellung über eine Geschäftsjahres- oder Periodengrenze hinweg.",
      "Nehmen Sie je Schnittstelle und Umsystem eine eigene Zeile auf — Konversionen brechen in der Regel Integrationen, bevor sie SAP selbst brechen.",
      "Ergänzen Sie eine vierte Testumstellung, wenn die dritte noch nicht innerhalb des verfügbaren Fensters fertig geworden ist.",
      "Nehmen Sie den Betriebsrat als eigene Zeile auf, wenn sich Arbeitsabläufe oder auswertbare Leistungsdaten ändern; die Beteiligung ist ein Vorgang mit Wochen an Dauer und kein Haken vor dem Start."
    ],
    tips: [
      "<strong>Fahren Sie die erste Testumstellung früh und ruhig unsauber.</strong> Ihre Aufgabe ist herauszufinden, was im Drehbuch fehlt, nicht zu gelingen. Erst die späteren müssen sauber aussehen.",
      "<strong>Bewerten Sie den Readiness Check, zählen Sie ihn nicht.</strong> Tausend Befunde können zwei Wochen oder sechs Monate Arbeit sein, und nur die Bewertung sagt, welches von beidem.",
      "<strong>Nehmen Sie die Generalprobe als echtes Tor.</strong> Wenn die Probe nicht in das geplante Fenster passt, passt die Produktivumstellung es auch nicht — genau dafür fährt man sie.",
      "<strong>Frieren Sie das Geschäft ein, nicht nur das System.</strong> Veröffentlichen Sie für jeden Tag des Fensters, was erlaubt ist und was nicht, und zwar lange bevor es beginnt.",
      "<strong>Stimmen Sie ab, bevor Sie freigeben.</strong> Bestände, offene Posten und Salden gegen die Werte vor der Konversion validiert sind das tatsächliche Startkriterium, nicht ein grüner Bildschirm."
    ],
    faq: [
      [
        "Wie lange dauert eine SAP-S/4HANA-Migration?",
        "Eine Systemkonversion läuft üblicherweise zwölf bis zwanzig Monate, abhängig vom Umfang der Eigenentwicklungen und der Zahl der Schnittstellen. Die Vorlage nutzt rund sechzehn Monate. Neuimplementierungen streuen deutlich stärker, weil dort die Prozessgestaltung den Plan treibt und nicht die Anpassung."
      ],
      [
        "Was ist der Unterschied zwischen Brownfield und Greenfield?",
        "Brownfield ist die Systemkonversion: Sie behalten Customizing, Historie und Eigenentwicklungen und konvertieren das System an Ort und Stelle. Greenfield ist eine Neuimplementierung, in die Sie ausgewählte Daten migrieren. Brownfield-Pläne werden von der Anpassung der Eigenentwicklungen und von Testumstellungen beherrscht, Greenfield-Pläne von Prozessgestaltung und Veränderungsmanagement. Diese Vorlage zeigt den Brownfield-Weg."
      ],
      [
        "Worin unterscheidet sich das vom ERP-Einführungsplan?",
        "Der <a href=\"/de/templates/erp-implementation-schedule.html\">ERP-Einführungsplan</a> geht davon aus, dass Sie ein System auswählen und von Grund auf einführen — Auswahl, Prozessgestaltung, Customizing, Datenmigration und Schulung. Dieser Plan setzt voraus, dass SAP bereits läuft und Sie es konvertieren, weshalb die schweren Phasen die Anpassung der Eigenentwicklungen und die wiederholten Testumstellungen sind."
      ],
      [
        "Wie viele Testumstellungen brauche ich?",
        "Drei ist die übliche Planungszahl, und die Vorlage nutzt drei, gefolgt von einer Generalprobe. Jede fährt das vollständige Drehbuch auf Produktivdatenvolumen und wird gestoppt; wenn die dritte das verfügbare Fenster noch überschreitet, fügen Sie eine vierte hinzu, statt die echte zu stauchen."
      ],
      [
        "Wie lang sollte der Freeze für das Geschäft sein?",
        "Länger als die technische Umstellung. Buchungen, Stammdatenänderungen und der Abschluss offener Vorgänge frieren typischerweise mehrere Tage vor Beginn der Konversion ein und bleiben eingefroren, bis die Abstimmung stimmt. Bemessen Sie ihn anhand der Zeiten aus den Testumstellungen statt zu raten, und kommunizieren Sie ihn Wochen im Voraus."
      ],
      [
        "Ist die Vorlage für SAP S/4HANA kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung und ohne Wasserzeichen."
      ]
    ]
  },
  'iso-14001-certification-plan': {
    card: "Umweltaspekte, Rechtskataster, Ziele, Betriebsabläufe, Stufe 1 und Stufe 2.",
    h1: "Projektplan für die ISO-14001-Zertifizierung",
    metaTitle: "ISO 14001 — Zertifizierungsplan",
    metaDesc: "Kostenloser Plan zur ISO-14001-Zertifizierung: Umweltaspekte, Rechtskataster, Umweltziele, Ablauflenkung, internes Audit, Stufe-1- und Stufe-2-Audit.",
    lead: "Eine kostenlose <strong>Projektplan-Vorlage für die ISO-14001-Zertifizierung</strong>, geordnet um die beiden Verzeichnisse, die die eigentliche Arbeit eines Umweltmanagementsystems ausmachen: das Verzeichnis der Umweltaspekte und Umweltauswirkungen und das Rechtskataster mit den bindenden Verpflichtungen. Alles Nachgelagerte — Ziele, Ablauflenkung, Überwachung, Schulung — leitet sich aus diesen beiden ab, weshalb Pläne, die mit Zielen beginnen, hängen bleiben. Die Auditmechanik hat dieselbe zweistufige Form wie der <a href=\"/de/templates/iso-9001-certification-plan.html\">ISO-9001-Zertifizierungsplan</a> und der <a href=\"/de/templates/iso-27001-certification-plan.html\">ISO-27001-Zertifizierungsplan</a>.",
    intro: "Zertifizierungsstellen bewerten ein Umweltmanagementsystem in zwei Besuchen mit einem verpflichtenden Abstand dazwischen, und sie prüfen stichprobenartig Aufzeichnungen, die es nur gibt, wenn das System bereits läuft. Beides bilden die Balken ab:",
    phases: [
      [
        "Anwendungsbereich, Kontext und Gap-Analyse",
        "Grenzen des Umweltmanagementsystems, interessierte Parteien, eine Gap-Analyse gegen die Norm, die Umweltpolitik sowie die Auswahl einer bei der Deutschen Akkreditierungsstelle akkreditierten Zertifizierungsstelle — der Moment, in dem beide Audittermine gebucht werden. <em>Meilenstein: Anwendungsbereich und Politik freigegeben.</em>"
      ],
      [
        "Umweltaspekte, Auswirkungen und Rechtskataster",
        "Der Kern des Plans: Ermittlung der Umweltaspekte über alle Tätigkeiten hinweg, Bewertung ihrer Bedeutung mit einer dokumentierten Methode und der parallele Aufbau des Rechtskatasters mit gesetzlichen und sonstigen bindenden Verpflichtungen. <em>Meilenstein: beide Verzeichnisse freigegeben.</em>"
      ],
      [
        "Umweltziele, Zielwerte und Programme",
        "Ziele, die aus den bedeutenden Umweltaspekten und den bindenden Verpflichtungen abgeleitet sind, mit Zielwerten, Kennzahlen, Ressourcen und benannten Verantwortlichen — keine Absichtserklärungen, die vor den Verzeichnissen geschrieben wurden. <em>Meilenstein: Ziele und Programme freigegeben.</em>"
      ],
      [
        "Ablauflenkung und Notfallvorsorge",
        "Verfahrensanweisungen für die bedeutenden Aspekte, Lenkung von Abfall, Abwasser und Emissionen, Anforderungen an Lieferanten und Fremdfirmen, Kompetenz- und Bewusstseinsschulungen sowie die Notfallübung. <em>Meilenstein: Ablauflenkung eingeführt.</em>"
      ],
      [
        "Betreiben, überwachen und Nachweise sammeln",
        "Die Phase, die sich nicht stauchen lässt: das System lange genug betreiben, dass Messdaten, Bewertungen der Rechtskonformität, Abfallnachweise und ein Beispiel für gelenkte Änderungen tatsächlich vorliegen. <em>Meilenstein: Überwachungsnachweise vorhanden.</em>"
      ],
      [
        "Internes Audit, Managementbewertung und zweistufiges Audit",
        "Das interne Audit, seine Abweichungen und Korrekturmaßnahmen, die Managementbewertung, danach Stufe 1, das Zeitfenster für Korrekturmaßnahmen und Stufe 2. <em>Meilenstein: Zertifikat erteilt.</em>"
      ]
    ],
    callout: "Das Verzeichnis der Umweltaspekte ist das Dokument, das die auditierende Person zuerst öffnet, und ein dünnes Verzeichnis bringt den Rest des Systems zum Einsturz. Es muss den Normalbetrieb, abweichende Betriebszustände und Notfallsituationen abdecken, und die Bewertung der Bedeutung muss eine Methode sein, die Sie erklären können, und keine Farbe, die jemand gewählt hat. Das Rechtskataster ist das zweite tragende Dokument: Es führt Genehmigungen, Erlaubnisse, gesetzliche Pflichten und weitere Verpflichtungen auf, und die Norm verlangt eine regelmäßige Bewertung der Rechtskonformität dagegen — diese Bewertung muss also vor Stufe 2 stattgefunden haben und nicht danach geplant sein.",
    customize: [
      "Buchen Sie die Zertifizierungsstelle früh und legen Sie den Termin für Stufe 2 fest; alles davor ist danach ein Countdown und keine Schätzung.",
      "Erweitern Sie die Zeilen zur Aspektermittlung auf eine Zeile je Standort, Prozess oder Tätigkeit — eine einzelne Zeile verbirgt den tatsächlichen Aufwand.",
      "Lassen Sie mindestens sechs Wochen zwischen Stufe 1 und Stufe 2, damit die dort aufgenommenen Korrekturmaßnahmen wirklich geschlossen werden können.",
      "Verlängern Sie die Betriebsphase, wenn eine Ihrer Verpflichtungen jährlich bewertet wird — Sie brauchen mindestens einen vollständigen Nachweiszyklus.",
      "Ergänzen Sie Zeilen für Genehmigungsverlängerungen oder behördliche Überwachungen, die in das Fenster fallen, denn sie konkurrieren um dieselben Personen.",
      "Legen Sie für nach dem Bundes-Immissionsschutzgesetz genehmigungsbedürftige Anlagen eigene Zeilen an: Genehmigungsbescheid mit Nebenbestimmungen, Emissionserklärung und die Berichte der Betriebsbeauftragten sind Nachweise, die das Audit sehen will.",
      "Ergänzen Sie das Überwachungsaudit im ersten Jahr, damit das System auch nach Erhalt des Zertifikats mit Ressourcen hinterlegt bleibt."
    ],
    tips: [
      "<strong>Bauen Sie die Verzeichnisse vor den Zielen.</strong> Zuerst geschriebene Ziele treffen fast immer unbedeutende Aspekte, und die auditierende Person wird fragen, wie Sie entschieden haben.",
      "<strong>Decken Sie abweichende Betriebszustände und Notfälle ab.</strong> An- und Abfahren, Leckagen und Brandszenarien sind die Stellen, an denen die meisten Aspektverzeichnisse sichtbar unvollständig sind.",
      "<strong>Führen Sie eine echte Bewertung der Rechtskonformität durch.</strong> Die Norm erwartet eine regelmäßige Bewertung gegen Ihr Rechtskataster mit Aufzeichnungen — keine Erklärung, dass Sie konform seien.",
      "<strong>Machen Sie die Notfallübung vor Stufe 2.</strong> Sie gehört zu den wenigen Nachweisen, die Sie terminieren können, statt auf sie zu warten.",
      "<strong>Halten Sie ISO 14001, ISO 9001 und ISO 27001 auseinander.</strong> Sie teilen dieselbe Grundstruktur und lassen sich gemeinsam auditieren, sind aber drei getrennte akkreditierte Zertifizierungen mit unterschiedlichem Inhalt — Umwelt, Qualität und Informationssicherheit.",
      "<strong>Verwechseln Sie ISO 14001 nicht mit EMAS.</strong> EMAS ist das Umweltmanagementsystem der Europäischen Union mit eigener Verordnung; es setzt auf ISO 14001 auf, verlangt darüber hinaus aber eine geprüfte Umwelterklärung, den Nachweis der Rechtskonformität und die Registrierung bei einer Industrie- und Handelskammer. Wenn Sie beides wollen, planen Sie die zusätzlichen Schritte ein, statt anzunehmen, das Zertifikat genüge."
    ],
    faq: [
      [
        "Wie lange dauert eine ISO-14001-Zertifizierung?",
        "Üblicherweise neun bis fünfzehn Monate aus dem Stand. Die Vorlage nutzt rund dreizehn Monate. Was sich nicht stauchen lässt, ist vorn die Arbeit an Aspekt- und Rechtskataster und hinten die Betriebszeit, die die Überwachungsnachweise erzeugt."
      ],
      [
        "Was ist ein Verzeichnis der Umweltaspekte?",
        "Eine strukturierte Aufstellung der Wechselwirkungen Ihrer Tätigkeiten, Produkte und Dienstleistungen mit der Umwelt — Emissionen, Einleitungen, Abfall, Ressourcen- und Flächenverbrauch — samt der daraus folgenden Auswirkungen, bewertet nach Bedeutung für Normalbetrieb, abweichende Zustände und Notfälle. Es ist die Eingangsgröße für nahezu alles Weitere, weshalb die Vorlage es vor die Ziele setzt."
      ],
      [
        "Worin unterscheidet sich ISO 14001 von ISO 9001?",
        "Sie teilen die Grundstruktur für Managementsysteme und dieselbe zweistufige Auditmechanik, der Inhalt unterscheidet sich aber vollständig: ISO 9001 ist ein Qualitätsmanagementsystem, ausgerichtet auf Kundenanforderungen und Prozesskonformität, ISO 14001 ein Umweltmanagementsystem, aufgebaut auf Umweltaspekten und bindenden Verpflichtungen. Siehe den <a href=\"/de/templates/iso-9001-certification-plan.html\">ISO-9001-Zertifizierungsplan</a>, wenn Sie beides zertifizieren."
      ],
      [
        "Was ist der Unterschied zwischen ISO 14001 und EMAS?",
        "ISO 14001 ist eine internationale Norm, die von einer akkreditierten Zertifizierungsstelle zertifiziert wird. EMAS ist ein Verfahren der Europäischen Union auf eigener Rechtsgrundlage: Es enthält die Anforderungen der ISO 14001, verlangt zusätzlich eine von einem zugelassenen Umweltgutachter geprüfte und veröffentlichte Umwelterklärung, den ausdrücklichen Nachweis der Rechtskonformität und die Eintragung in das EMAS-Register. Beides ist kombinierbar, aber es ist nicht dasselbe, und die Zusatzschritte brauchen eigene Balken."
      ],
      [
        "Kann ich ISO 14001 und ISO 27001 gemeinsam zertifizieren?",
        "Sie lassen sich in einem integrierten Audit prüfen und teilen die Kapitelstruktur, sind aber getrennte akkreditierte Zertifizierungen mit eigenen Zertifikaten und eigenen Anwendungsbereichen. Der <a href=\"/de/templates/iso-27001-certification-plan.html\">ISO-27001-Zertifizierungsplan</a> deckt die Informationssicherheit ab; gehen Sie nicht davon aus, dass Nachweise aus dem einen System das andere erfüllen."
      ],
      [
        "Was passiert zwischen Stufe 1 und Stufe 2?",
        "Stufe 1 ist eine Dokumenten- und Bereitschaftsprüfung und bringt fast immer Feststellungen hervor — meist ein unvollständiges Aspektverzeichnis oder eine nicht durchgeführte Bewertung der Rechtskonformität. Stufe 2 prüft, ob das System tatsächlich wirkt. Die Vorlage lässt dazwischen ein Fenster für Korrekturmaßnahmen, weil Stufe 2 nicht besteht, solange die Feststellungen aus Stufe 1 offen sind."
      ],
      [
        "Ist die Vorlage für ISO 14001 kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung und ohne Wasserzeichen."
      ]
    ]
  },
  'product-recall-plan': {
    card: "Stunde null, Risikobewertung, Behördenmeldung, Rückholung, Wirksamkeit, Abschluss.",
    h1: "Ablaufplan für einen Produktrückruf",
    metaTitle: "Produktrückruf — Ablaufplan",
    metaDesc: "Kostenloser Ablaufplan für den Produktrückruf: Stunde null, Risikobewertung, Meldung an die Marktüberwachungsbehörde, Rückholung, Wirksamkeit, Abschluss.",
    lead: "Eine kostenlose <strong>Ablaufplan-Vorlage für einen Produktrückruf</strong>, angelegt auf der einzigen Uhr, die zählt: der, die in dem Moment beginnt, in dem Ihnen Anhaltspunkte vorliegen, dass ein Produkt unsicher oder nicht konform ist. Rückrufpläne sind ungewöhnlich, weil ein großer Teil der Abfolge nicht in Ihrem Ermessen steht, sondern rechtlich vorgegeben ist: Meldepflichten, Aufbewahrungspflichten und Wirksamkeitsnachweise sind von Behörden gesetzt, und zu spät zu sein ist keine Verzögerung, sondern eine Haftungsfrage. Die Balken sind in Tagen ab Stunde null angelegt, damit Sie sehen, was in der ersten Woche geschehen muss.",
    intro: "Die frühen Zeilen sind Stunden, keine Wochen. Alles nach der Meldeentscheidung hängt daran, wie schnell die ersten drei Zeilen abgearbeitet sind:",
    phases: [
      [
        "Stunde null — erkennen, sperren, einberufen",
        "Der Hinweis trifft ein, das Krisenteam wird einberufen, die Auslieferung wird gesperrt und die betroffenen Chargen und Losnummern werden zurückverfolgt. Diese Phase wird in Stunden gemessen. <em>Meilenstein: Krisenteam einberufen, Auslieferung gesperrt.</em>"
      ],
      [
        "Risikobewertung und Rückrufentscheidung",
        "Gefahrencharakterisierung, Bewertung von Exposition und Schwere, Einstufung des Risikos, die Entscheidung über die Rückrufstufe — Endverbraucher, Handel oder Großhandel — und der förmliche Rückrufbeschluss. <em>Meilenstein: Rückrufentscheidung dokumentiert.</em>"
      ],
      [
        "Behördenmeldung",
        "Feststellen, welche Behörden in welchen Ländern zu unterrichten sind, Zusammenstellen der Meldeunterlagen, Meldung innerhalb der einschlägigen Frist und Abstimmung der öffentlichen Kommunikation mit der Behörde. <em>Meilenstein: Behörden unterrichtet.</em>"
      ],
      [
        "Information von Kunden und Öffentlichkeit",
        "Kaskade an Großhandel und Handel, direkte Kundenansprache, soweit die Daten es zulassen, die öffentliche Rückrufanzeige, Website und Presseerklärung sowie die Hotline für Betroffene. <em>Meilenstein: öffentliche Rückrufanzeige veröffentlicht.</em>"
      ],
      [
        "Rückholung, Sperrlager und Verwendungsentscheidung",
        "Rücknahmelogistik, Wareneingang und Abgleich gegen die ausgelieferte Menge, gesicherte Sperrlagerung und die Entscheidung über Nacharbeit, Vernichtung oder Freigabe. <em>Meilenstein: Mengenabgleich abgeschlossen.</em>"
      ],
      [
        "Wirksamkeitsprüfung, Ursachenanalyse und Abschluss",
        "Wirksamkeitsprüfungen in festgelegten Abständen, Ursachenanalyse und Korrekturmaßnahmen, Sachstandsberichte an die Behörde, der Abschlussbericht und die förmliche Beendigung. <em>Meilenstein: Rückruf behördlich abgeschlossen.</em>"
      ]
    ],
    callout: "In Deutschland läuft ein Rückruf über die Marktüberwachungsbehörde des jeweiligen Bundeslandes. Bei Non-Food-Produkten ist das Produktsicherheitsgesetz die Grundlage, und die Behörde speist ernste Risiken über die europäische Meldekette in das Safety Gate der Europäischen Union ein; bei Lebensmitteln und Futtermitteln laufen die Meldungen über die Lebensmittelüberwachung der Länder und das Bundesamt für Verbraucherschutz und Lebensmittelsicherheit; bei Arzneimitteln und Medizinprodukten sind das Bundesinstitut für Arzneimittel und Medizinprodukte oder das Paul-Ehrlich-Institut zuständig. Die Meldefrist ist keine feste Zahl: Sie hängt von Produktklasse und Gefahrenschwere ab, und ein Produkt in mehreren Märkten kann mehreren Regimen gleichzeitig unterliegen. Daneben läuft die zivilrechtliche Seite mit — Produkthaftung nach dem Produkthaftungsgesetz und Verkehrssicherungspflichten des Herstellers —, und deren Umfang steht erst später fest.",
    customize: [
      "Ersetzen Sie die Balken für die Meldung durch die Fristen, die für Ihre Produktklasse in jedem Markt tatsächlich gelten — anwaltlich geprüft, nicht angenommen.",
      "Nehmen Sie je Land eine eigene Meldezeile auf, wenn Sie grenzüberschreitend verkaufen; sie laufen parallel und verlangen unterschiedliche Inhalte.",
      "Legen Sie die Rückrufstufe ausdrücklich als eigene Zeile fest — Endverbraucher, Handel oder Großhandel verändert die gesamte Rückholphase.",
      "Passen Sie die Zeilen für die Wirksamkeitsprüfung an die Abstände an, die Ihre Behörde erwartet, und lassen Sie sie laufen, bis die Rücklaufquote nicht mehr steigt.",
      "Ergänzen Sie Zeilen für die Meldung an den Versicherer und, wenn Personenschäden im Raum stehen, für die Sicherung von Unterlagen und Rückstellmustern.",
      "Hinterlegen Sie eine Zeile für die Abstimmung mit der Behörde über den Wortlaut der öffentlichen Anzeige; sie wird in der Regel vorab abgestimmt und ist selten in einer Stunde erledigt.",
      "Üben Sie diesen Plan mindestens jährlich als Rückrufübung an einer echten Chargennummer — eine Rückverfolgung, die Tage braucht, ist im Audit eine Abweichung."
    ],
    tips: [
      "<strong>Verfolgen Sie zurück, bevor Sie veröffentlichen.</strong> Eine öffentliche Anzeige mit falschen Chargennummern muss neu veröffentlicht werden, und das kostet die Glaubwürdigkeit bei Behörde und Kunden.",
      "<strong>Setzen Sie eine Person auf die Uhr.</strong> Jemanden, dessen einzige Aufgabe die Meldefristen über alle Zuständigkeiten hinweg sind, denn die operative Arbeit bindet alle anderen.",
      "<strong>Gleichen Sie gegen die ausgelieferte Menge ab.</strong> Die Rücklaufquote ist die Zahl, auf die Behörden schauen, und sie lässt sich nicht berechnen, ohne genau zu wissen, wie viel hinausgegangen ist.",
      "<strong>Sichern Sie das Sperrlager physisch.</strong> Zurückgeholte Ware, die versehentlich wieder in den Bestand läuft, ist ein zweiter Rückruf auf dem ersten.",
      "<strong>Verwechseln Sie Ursachenanalyse und Rückruf nicht.</strong> Die Rückholung hat ihre eigene Uhr; die Untersuchung läuft daneben und endet später, und die Behörde erwartet beides zu sehen.",
      "<strong>Dokumentieren Sie jede Entscheidung mit Zeitstempel.</strong> Wann Sie was wussten und was Sie daraufhin veranlasst haben, ist im Verwaltungsverfahren wie in einem späteren Haftungsstreit die entscheidende Frage, und sie lässt sich im Nachhinein nicht rekonstruieren."
    ],
    faq: [
      [
        "Wie schnell muss ein Produktrückruf den Behörden gemeldet werden?",
        "Das hängt von Zuständigkeit, Produktklasse und Gefahrenschwere ab — Lebensmittel, Medizinprodukte, Fahrzeuge, Kosmetika und allgemeine Verbrauchsgüter unterliegen unterschiedlichen Regeln, und auch die Auslöser der Meldepflicht unterscheiden sich. Es gibt keine einheitliche Frist, und ein in mehreren Märkten verkauftes Produkt kann mehreren gleichzeitig unterliegen. Klären Sie die für Sie geltenden Pflichten vorab anwaltlich und schreiben Sie sie in den Plan, statt sich auf eine irgendwo gelesene Zahl zu verlassen."
      ],
      [
        "Welche Behörde ist in Deutschland zuständig?",
        "Bei Non-Food-Produkten die Marktüberwachungsbehörde des Bundeslandes, in dem Sie ansässig sind, auf Grundlage des Produktsicherheitsgesetzes; ernste Risiken gehen von dort in das Safety Gate der Europäischen Union. Bei Lebensmitteln und Futtermitteln ist es die Lebensmittelüberwachung der Länder, gebündelt über das Bundesamt für Verbraucherschutz und Lebensmittelsicherheit. Bei Arzneimitteln und Medizinprodukten sind es das Bundesinstitut für Arzneimittel und Medizinprodukte beziehungsweise das Paul-Ehrlich-Institut. Hinterlegen Sie im Plan namentlich, wer für Ihr Produkt zuständig ist."
      ],
      [
        "Was ist eine Wirksamkeitsprüfung?",
        "Eine strukturierte Überprüfung, ob die Rückrufinformation die Empfänger tatsächlich erreicht hat und ob gehandelt wurde — Stichproben bei Großhandel und Handel, Bestätigung, dass Ware aus dem Verkauf genommen wurde, und die Messung des Anteils der zurückgeholten oder anderweitig geklärten Menge. Behörden erwarten sie üblicherweise in festgelegten Abständen, weshalb die Vorlage mehrere ansetzt und nicht eine."
      ],
      [
        "Was bedeutet die Rückrufstufe?",
        "Wie weit der Rückruf die Vertriebskette hinunterreicht: Auf Großhandelsstufe endet er bei Zwischenhändlern, auf Handelsstufe erreicht er die Geschäfte, auf Verbraucherstufe die Endkunden. Sie folgt aus der Risikobewertung und verändert Rückhollogistik, Kommunikationsweg und Kosten um eine Größenordnung, weshalb die Vorlage daraus eine ausdrückliche Entscheidungszeile macht."
      ],
      [
        "Wie hoch ist das Haftungsrisiko?",
        "Das lässt sich nicht in eine Zahl fassen. Neben der öffentlich-rechtlichen Seite steht die Produkthaftung nach dem Produkthaftungsgesetz sowie die deliktische Haftung für Verkehrssicherungspflichten, zu denen bei erkannten Gefahren auch die Pflicht zur Warnung und gegebenenfalls zum Rückruf zählt. Die Höhe hängt von Schadensbild, Stückzahl und Verschulden ab. Was der Plan leisten kann, ist die lückenlose Dokumentation von Kenntnisstand und Reaktionszeit — genau die beiden Punkte, an denen sich später entscheidet, ob rechtzeitig gehandelt wurde."
      ],
      [
        "Wie lange dauert ein Produktrückruf?",
        "Melde- und Rückholphase werden in Tagen und Wochen gemessen; die Vorlage läuft rund neunzig Tage bis zum Abschluss. Ursachenanalyse, Korrekturmaßnahmen und die behördliche Beendigung dauern oft länger, und Wirksamkeitsprüfungen laufen, bis die Rücklaufquote nicht mehr steigt."
      ],
      [
        "Sollten wir eine Rückrufübung durchführen?",
        "Ja, und die meisten Qualitätsstandards und Kundenaudits erwarten sie jährlich. Eine Übung an einer echten Chargennummer prüft die Rückverfolgbarkeit unter Zeitdruck und ist der günstigste Weg, herauszufinden, dass sich aus Ihren Aufzeichnungen keine Verteilerliste schnell genug rekonstruieren lässt."
      ],
      [
        "Ist die Vorlage für den Produktrückruf kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung und ohne Wasserzeichen."
      ]
    ]
  },
  'digital-transformation-roadmap': {
    card: "Wellen über Jahre: erst Daten und Identitäten, Nutzenmessung nach jeder Welle.",
    h1: "Fahrplan für die digitale Transformation",
    metaTitle: "Digitale Transformation — Fahrplan",
    metaDesc: "Kostenloser Fahrplan für die digitale Transformation: mehrjährige Wellen, zuerst Daten und Identitäten, Nutzenmessung je Welle, tragfähige Steuerung.",
    lead: "Eine kostenlose <strong>Fahrplan-Vorlage für die digitale Transformation</strong>, aufgebaut als Abfolge von Wellen statt als Programm mit Enddatum. Der leitende Gedanke ist abhängige Fähigkeit: Grundlagen für Daten, Identitäten und Integration müssen stehen, bevor das Sichtbare möglich wird, der Nutzen wird nach jeder Welle gemessen statt für eine Business-Case-Prüfung im dritten Jahr aufgespart, und die Steuerung ist so angelegt, dass sie den Weggang der auftraggebenden Person überlebt — was sie über drei Jahre hinweg vermutlich muss.",
    intro: "Jede Welle liefert etwas Nutzbares, und auf jede folgt eine Nutzenbetrachtung, die den Inhalt der nächsten Welle verändern darf. Genau diese Rückkopplung ist der Zweck:",
    phases: [
      [
        "Strategie, Ausgangslage und Steuerung",
        "Bestandsaufnahme, Reifegradbestimmung, Zielbild der Organisation, der Wertbeitrag mit Ausgangswerten sowie der Aufbau des Steuerungsrhythmus und eines Portfoliobüros, die einzelne Führungskräfte überdauern. <em>Meilenstein: Fahrplan und Steuerung freigegeben.</em>"
      ],
      [
        "Welle 1 — Grundlagen",
        "Die unspektakuläre Welle, von der alles andere abhängt: Identitäts- und Berechtigungsverwaltung, die Integrationsschicht, Datenplattform und Datenverantwortung, Cloud-Landezone und Sicherheitsgrundlinie. Hier wird nichts für Kundinnen und Kunden Sichtbares geliefert. <em>Meilenstein: Grundlagen produktiv.</em>"
      ],
      [
        "Welle 2 — Digitalisierung der Kernprozesse",
        "Automatisierung in Finanzen, Einkauf und Personal, Vorgangs- und Dokumentenverwaltung sowie die Abschaltung der manuellen und tabellengestützten Abläufe, die dadurch ersetzt werden. <em>Meilenstein: Kernprozesse umgestellt.</em>"
      ],
      [
        "Welle 3 — Angebote für Kundinnen und Kunden",
        "Kundenportal, Selbstbedienung, mobile Nutzung, eine einheitliche Kundensicht und die Neugestaltung der Kundenreise — nur möglich, weil Welle 1 Identitäten und Integration darunter gebaut hat. <em>Meilenstein: Kundenangebot gestartet.</em>"
      ],
      [
        "Welle 4 — Auswertung und intelligente Automatisierung",
        "Auswertungen zur Selbstbedienung, Prognosemodelle und die Automatisierung von Entscheidungen mit hohem Volumen, dazu die Modellsteuerung, um sie verantwortbar zu betreiben. <em>Meilenstein: Auswertungsfähigkeit genutzt.</em>"
      ],
      [
        "Nutzenmessung und Verstetigung",
        "Nutzenbetrachtungen nach jeder Welle, Messung von Nutzung und Veränderung, Übergabe der Fähigkeit in die Linie, Abschaltung von Altsystemen und die jährliche Fortschreibung des Fahrplans. <em>Meilenstein: Programm in den Regelbetrieb überführt.</em>"
      ]
    ],
    callout: "Der wiederkehrende Fehler ist, das Sichtbare zuerst zu bauen. Portale, Dashboards und Automatisierungsvorführungen sind das, wonach Auftraggeber fragen, aber jedes davon hängt still an Identitäten, Integration und verlässlichen Daten, und wer sie vor den Grundlagen baut, erzeugt eine Welle 3, die während Welle 4 leise neu gebaut wird. Der zweite Fehler ist, den Nutzen zu vertagen: Findet die erste Nutzenbetrachtung nach drei Jahren statt, ist niemand mehr da, der die ursprüngliche Zusage vertritt. Setzen Sie sie unmittelbar hinter jede Welle, veröffentlichen Sie die Zahl, ob sie schmeichelt oder nicht, und lassen Sie sie den Inhalt der nächsten Welle verändern.",
    customize: [
      "Benennen Sie die Wellen in Ihre eigene Sprache um, behalten Sie aber die Grundlagen vorn — diese Reihenfolge ist der eigentliche Inhalt des Plans.",
      "Wählen Sie die Wellenlänge nach dem, was Ihre Organisation verkraftet; sechs bis neun Monate je Welle sind üblich, und kürzere Wellen scheitern an der Veränderungsfähigkeit, nicht an der Lieferung.",
      "Setzen Sie nach jede Welle eine Zeile für die Nutzenbetrachtung, jeweils mit einer benannten Person, die schon dabei war, als der Nutzen zugesagt wurde.",
      "Nehmen Sie die Abschaltung von Altsystemen ausdrücklich auf — Transformationen, die nie etwas abschalten, finanzieren am Ende zwei Landschaften.",
      "Fügen Sie bei jedem erwarteten Führungswechsel, Haushaltszyklus oder Umbau eine Zeile für das Nachjustieren der Steuerung ein.",
      "Zerlegen Sie jede Welle in Zeilen je Arbeitsstrang, sobald ihr Umfang steht; der einzelne Balken taugt nur auf Fahrplanebene.",
      "Planen Sie die Beteiligung des Betriebsrats je Welle ein, nicht einmal zu Beginn — jede Welle, die Arbeitsabläufe oder auswertbare Leistungsdaten berührt, löst sie erneut aus, und Datenschutz-Folgenabschätzungen gehören daneben."
    ],
    tips: [
      "<strong>Sequenzieren Sie nach Abhängigkeit, nicht nach Begeisterung.</strong> Die richtige Frage für jeden Kandidaten in Welle 1 lautet, was in Welle 3 bricht, wenn es ihn nicht gibt.",
      "<strong>Messen Sie Nutzung, nicht Inbetriebnahme.</strong> Eine produktive Plattform mit fünfzehn Prozent Nutzung hat nichts geliefert, und nur eine Nutzungskennzahl sagt Ihnen das früh genug, um zu handeln.",
      "<strong>Rechnen Sie damit, dass die Auftraggeberin wechselt.</strong> Schreiben Sie Wertbeitrag, Entscheidungen und Ausgangswerte so auf, dass eine Nachfolge sie ohne Sie aufnehmen kann.",
      "<strong>Bleiben Sie bei einem Integrationsmuster.</strong> Wellen, die jeweils ihren eigenen Integrationsansatz erfinden, erzeugen genau die Zersplitterung, die das Programm beseitigen sollte.",
      "<strong>Schalten Sie zu einem Datum ab.</strong> Eine Altsystemabschaltung ohne Termin und ohne verantwortliche Person findet nicht statt, und die Einsparungen im Wertbeitrag hängen daran."
    ],
    faq: [
      [
        "Wie lang ist ein Fahrplan für die digitale Transformation?",
        "Typischerweise zwei bis vier Jahre über drei oder vier Wellen. Die Vorlage läuft rund drei Jahre. Kürzere Fahrpläne sind meist einzelne Programme; längere hören auf, Pläne zu sein, und werden Absichten — schreiben Sie deshalb jährlich fort, statt zu verlängern."
      ],
      [
        "Warum müssen die Grundlagen zuerst kommen?",
        "Weil Kundenportale, Auswertungen und Automatisierung alle davon abhängen zu wissen, wer eine Person ist, Daten zwischen Systemen zu bewegen und diesen Daten zu trauen. Auf zersplitterten Identitäten und Integrationen gebaut, funktionieren sie als Vorführung und scheitern als Fähigkeit, und der Neubau landet in der nächsten Welle."
      ],
      [
        "Was ist Nutzenmessung und warum nach jeder Welle?",
        "Es ist die Messung, ob der zugesagte Wert tatsächlich eingetreten ist — Kosten, Durchlaufzeit, Nutzung, Umsatz. Nach jeder Welle statt am Ende zu messen bedeutet, dass die Messung stattfindet, solange die Personen, die die Zusage gemacht haben, noch im Amt sind, und dass das Ergebnis den Inhalt der nächsten Welle verändern kann. Vertagte Nutzenbetrachtungen werden zuverlässig unwiderlegbar."
      ],
      [
        "Wie halten wir die Steuerung über einen Führungswechsel hinweg?",
        "Indem Rhythmus und Unterlagen institutionell werden statt persönlich: ein stehender Portfolioausschuss mit festem Takt, dokumentierte Entscheidungen und Ausgangswerte an einem Ort, den eine Nachfolge findet. Genau dafür enthält die Vorlage eine Zeile zum Nachjustieren der Steuerung."
      ],
      [
        "Wie verhält sich das zu einem einzelnen Systemprogramm wie ERP?",
        "Ein Fahrplan sequenziert mehrere Programme; ein Einführungsplan führt eines durch. Enthält eine Welle einen ERP-Wechsel, planen Sie ihn getrennt mit dem <a href=\"/de/templates/erp-implementation-schedule.html\">ERP-Einführungsplan</a> oder, bei einer SAP-Konversion, mit dem <a href=\"/de/templates/sap-s4hana-migration-plan.html\">SAP-S/4HANA-Migrationsplan</a>, und belassen Sie die Zeile im Fahrplan als zusammenfassenden Balken."
      ],
      [
        "Ist die Vorlage für die digitale Transformation kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung und ohne Wasserzeichen."
      ]
    ]
  },
  'qa-test-plan-schedule': {
    card: "Eintritts- und Austrittskriterien, Testumgebung, überlappende Phasen, Fehlerschleife.",
    h1: "Terminplan für den Testplan der Qualitätssicherung",
    metaTitle: "Testplan QS — Terminplan",
    metaDesc: "Kostenloser Terminplan für den QS-Testplan: Eintritts- und Austrittskriterien, Testumgebung, Testdaten, überlappende Testphasen, Fehlerschleife, Regression.",
    lead: "Eine kostenlose <strong>Terminplan-Vorlage für den Testplan der Qualitätssicherung</strong>, deren Rückgrat Eintritts- und Austrittskriterien sind und keine Warteschlange von Phasen. Zwei Dinge steuern alles: eine stabile Testumgebung und bereitgestellte Testdaten. Danach überlappen sich die Phasen — der Integrationstest beginnt, während der Komponententest noch läuft, der Abnahmetest startet auf den Modulen, die fertig sind —, und der Kalender wird weniger von der Testdurchführung verbraucht als von der darunter laufenden Schleife aus Fehlerbewertung, Korrektur und Nachtest.",
    intro: "Achten Sie darauf, dass sich die Durchführungsbalken überlappen und dass die Fehlerschleife über ihre gesamte Länge läuft. So sieht ein echter Testplan aus:",
    phases: [
      [
        "Testplanung und Kriterien",
        "Teststrategie, Umfang und risikobasierte Priorisierung, die vor Beginn der Durchführung schriftlich festgelegten Eintritts- und Austrittskriterien je Phase, Aufwandsschätzung und Ressourcenplan. <em>Meilenstein: Testplan und Kriterien freigegeben.</em>"
      ],
      [
        "Testumgebung und Testdaten",
        "Das eigentliche Tor. Aufbau und Konfiguration der Umgebung, Platzhalter für nicht verfügbare Schnittstellen, Bereitstellung und Anonymisierung der Testdaten, Zugänge und Konten sowie ein Rauchtest, der die Umgebung nachweist, bevor jemand darin testet. <em>Meilenstein: Eintrittskriterien der Umgebung erfüllt.</em>"
      ],
      [
        "Testentwurf und Automatisierung",
        "Entwurf von Testbedingungen und Testfällen, Nachverfolgbarkeit zu den Anforderungen, das Automatisierungsgerüst, Aufbau der Regressionssuite und die Skripte für den Lasttest. <em>Meilenstein: Testfälle durchführungsbereit.</em>"
      ],
      [
        "Durchführung — Komponente, Integration, System",
        "Überlappende Durchführungswellen statt einer Warteschlange: Komponenten- und Modultest, Integrations- und Schnittstellentest, danach System- und Sicherheitstest. <em>Meilenstein: Austrittskriterien des Systemtests erfüllt.</em>"
      ],
      [
        "Fehlerbewertung, Korrektur und Nachtest",
        "Die Schleife, die den Kalender tatsächlich verbraucht — tägliche Fehlerbewertung, Einstufung nach Schwere, Korrekturzyklen, Nachtest und Regressionswirkung sowie die Entscheidungen über zurückgestellte Fehler. <em>Meilenstein: Fehlerschwellen erreicht.</em>"
      ],
      [
        "Abnahmetest, Regression und Freigabereife",
        "Abnahmetest durch die Fachbereiche, vollständige Regression, Last- und Leistungsläufe, die Prüfung der Freigabereife und die Freigabe. <em>Meilenstein: Freigabe erteilt.</em>"
      ]
    ],
    callout: "Der häufigste Planungsfehler in der Qualitätssicherung ist, Testumgebung und Testdaten als Vorgang zu behandeln statt als Tor. Ist die Umgebung instabil oder tragen die Daten die Szenarien nicht, buchen Testerinnen und Tester trotzdem Zeit, erzeugen dabei aber Fehler über die Umgebung statt über das Produkt — und diese Stunden sind unwiederbringlich. Schreiben Sie die Eintrittskriterien der Umgebung auf, prüfen Sie sie mit einem Rauchtest und beginnen Sie die Durchführung erst, wenn sie bestanden sind. Der zweite Fehler ist, die Fehlerschleife als Puffer zu planen. Korrektur und Nachtest sind kein Beiwerk um das Testen herum; in den meisten Projekten sind sie der längste Balken im Diagramm und sollten auch so gezeichnet werden.",
    customize: [
      "Schreiben Sie echte Eintritts- und Austrittskriterien in die Notizen jeder Phasenzeile — Bestehensquote, offene Fehler nach Schwere, Abdeckung —, damit die Tore prüfbar sind und nicht rhetorisch.",
      "Überlappen Sie die Durchführungswellen entsprechend Ihrem Lieferrhythmus; sie hintereinanderzuhängen überschätzt fast immer die Gesamtdauer und unterschätzt das Risiko.",
      "Bemessen Sie die Fehlerschleife aus Ihren eigenen historischen Fund- und Korrekturraten, nicht als Prozentsatz des Testaufwands.",
      "Nehmen Sie je Schnittstelle oder angebundenem System eine eigene Zeile auf, wenn der Integrationstest von Partnern abhängt, die ihre eigenen Umgebungen steuern.",
      "Ziehen Sie den Abnahmetest je Modul vor, wenn Sie schrittweise ausliefern statt in einem Wurf.",
      "Ergänzen Sie vor der Regression eine Zeile für den Code-Freeze und halten Sie die Regression danach — Regression gegen einen sich bewegenden Stand ist keine Regression.",
      "Nehmen Sie Personendaten in Testdaten ausdrücklich als eigene Zeile auf: Anonymisierung oder synthetische Daten sind nach der Datenschutz-Grundverordnung die Regel, und die Freigabe durch die Datenschutzbeauftragte hat eine Dauer."
    ],
    tips: [
      "<strong>Machen Sie Austrittskriterien zu Zahlen.</strong> „Test abgeschlossen“ ist kein Tor; „null offene Fehler der Schwere 1, weniger als fünf der Schwere 2, 95 Prozent der geplanten Fälle durchgeführt“ ist eines.",
      "<strong>Stellen Sie Testdaten bereit, bevor der Testentwurf endet.</strong> Beim Entwurf fallen Datenlücken auf, und die Bereitstellung hat den längsten Vorlauf im ganzen Plan.",
      "<strong>Bewerten Sie Fehler in der Spitzenphase täglich.</strong> Eine wöchentliche Runde bedeutet, dass ein Fehler fünf Tage liegen kann, bevor jemand entscheidet, wer ihn behebt.",
      "<strong>Schützen Sie die Regression vor dem Korrekturstrom.</strong> Jede späte Korrektur entwertet einen Teil des Regressionslaufs, und genau dafür gibt es die Zeile für den Code-Freeze.",
      "<strong>Verfolgen Sie die Fundrate, nicht die Fehlerzahl.</strong> Eine sinkende Fundrate ist das ehrliche Signal, dass eine Phase konvergiert; eine reine Zahl sagt fast nichts."
    ],
    faq: [
      [
        "Was sind Eintritts- und Austrittskriterien in einem Testplan?",
        "Eintrittskriterien sind die Bedingungen, die vor Beginn einer Testphase erfüllt sein müssen — Umgebung stabil, Stand eingespielt, Testdaten geladen, Rauchtest bestanden. Austrittskriterien sind die Bedingungen, die vor der Erklärung des Abschlusses erfüllt sein müssen — Durchführungsabdeckung, Bestehensquote und offene Fehler nach Schwere. Beide sollten Zahlen sein, vor Beginn vereinbart und durchgesetzt werden."
      ],
      [
        "Warum überlappen sich Testphasen statt aufeinanderzufolgen?",
        "Weil Stände schrittweise ankommen. Der Integrationstest kann auf den bereits komponentengetesteten Modulen beginnen, und der Abnahmetest kann auf fertigen Abläufen starten, während anderswo noch der Systemtest läuft. Phasen hintereinanderzuhängen bläht den Plan auf und verbirgt den echten Engpass, nämlich die Schleife aus Korrektur und Nachtest."
      ],
      [
        "Wie viel Zeit sollte ich für die Fehlerbehebung einplanen?",
        "Bemessen Sie sie aus Ihrer eigenen Historie: gefundene Fehler je Testtag, der Anteil, der eine Korrektur braucht, und Ihre durchschnittliche Durchlaufzeit aus Korrektur und Nachtest. In den meisten Projekten ist diese Schleife der längste Balken im Diagramm. Ein pauschaler Prozentsatz des Testaufwands ist der übliche Weg in den Verzug."
      ],
      [
        "Dürfen echte Produktivdaten als Testdaten dienen?",
        "In aller Regel nicht ohne Weiteres. Enthalten sie Personendaten, braucht ihre Verwendung im Test eine Rechtsgrundlage nach der Datenschutz-Grundverordnung, und der übliche Weg sind Anonymisierung, Pseudonymisierung oder synthetische Daten. Planen Sie das als eigenen Vorgang mit Vorlauf und Freigabe ein, nicht als Nebenschritt der Bereitstellung — es ist einer der häufigsten stillen Blocker vor dem Eintrittstor."
      ],
      [
        "Was, wenn die Testumgebung nicht bereit ist?",
        "Nicht mit der Durchführung beginnen. Ein Test gegen eine instabile Umgebung erzeugt Umgebungsfehler statt Produktfehler, und die Zeit ist unwiederbringlich. Die Vorlage macht die Bereitschaft der Umgebung zu einem Meilenstein mit vorgelagertem Rauchtest, damit diese Entscheidung sichtbar getroffen wird und nicht still verschluckt."
      ],
      [
        "Wann sollte der Abnahmetest beginnen?",
        "Wenn die Austrittskriterien des Systemtests für den Umfang erfüllt sind, den der Abnahmetest abdeckt — nicht wenn überall jeder Systemtest fertig ist. Der Abnahmetest ist fachliche Bestätigung, er braucht also einen stabilen Stand und realistisch geformte Daten; ihn gegen einen Stand laufen zu lassen, der noch Korrekturen erhält, verschwendet die Fachbereiche, und die sind die knappste Ressource im Plan."
      ],
      [
        "Ist die Vorlage für den QS-Testplan kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung und ohne Wasserzeichen."
      ]
    ]
  },
  'battery-gigafactory-construction-schedule': {
    card: "Zellformat-Freeze, Trockenraum, Anlagenqualifizierung, Formierung, Ausbeutehochlauf.",
    h1: "Bauzeitplan für eine Batteriezellfabrik",
    metaTitle: "Bauzeitplan Batteriezellfabrik",
    metaDesc: "Kostenloser Bauzeitplan für eine Batteriezellfabrik: Trockenraum-Qualifizierung, Anlagenmontage, Formierung und Reifung sowie der Ausbeutehochlauf.",
    lead: "Eine kostenlose <strong>Vorlage für den Bauzeitplan einer Batteriezellfabrik</strong>, geordnet um den Trockenraum statt um das Gebäude. Vorn der Freeze von Zellformat und Zellchemie, weil jede Maschine und jede Medienversorgung daraus dimensioniert wird; danach eine Hülle, die lange vor der ersten Anlage zu einer dichten, sorptionsgetrockneten Umgebung werden muss; Taupunktabsenkung und Haltetest als Tor für den Anlageneinzug; Montage und Qualifizierung der Anlagen als Tor für verkaufsfähige Ausbringung — und nicht die bauliche Fertigstellung; danach Formierung und Reifung, die je Zelle echte Kalendertage verbrauchen, und ein Ausbeutehochlauf, der eine Kurve ist und kein Meilenstein.",
    intro: "Eine Zellfabrik ist nicht fertig, wenn das Dach dicht ist. Sie ist fertig, wenn Zellen mit einer Ausbeute vom Band laufen, für die jemand zahlt — und der Weg dorthin führt durch eine kontrollierte Atmosphäre. Die Balken folgen diesem Weg:",
    phases: [
      [
        "Standort, Genehmigungen und Zellprozessauslegung",
        "Standort und Netzanschluss, der Freeze von Zellformat und Zellchemie, aus dem jede nachgelagerte Maschine folgt, die immissionsschutzrechtliche Genehmigung nach dem Bundes-Immissionsschutzgesetz samt Umgang mit Gefahrstoffen und Lösemitteln, die Auslegungsbasis für Prozessfluss und Linienkapazität sowie die Bestellung der Langläufer-Anlagen. <em>Meilensteine: Zellformat eingefroren, Genehmigung erteilt.</em>"
      ],
      [
        "Rohbau und Errichtung des Trockenraums",
        "Gründung, Bodenplatte und Stahlbau, Hülle und Dichtigkeit, danach die Dampfsperre und die dichte Trockenraumhülle, Schleusen und Umkleidebereiche sowie die Ebenheit des Bodens, die Beschichtungs- und Kalanderlinie verlangen. <em>Meilenstein: Gebäude wetterdicht.</em>"
      ],
      [
        "Medien, Entfeuchtung und Trockenraumqualifizierung",
        "Umspannwerk und Verteilung, die Sorptionsentfeuchtungsanlage, Drucklufttrocknung, Stickstoff und Prozesskühlung, Lösemittelrückgewinnung und Abluftreinigung, danach die Absenkung auf den Zieltaupunkt und ein Haltetest, der die Dichtheit der Hülle beweist. <em>Meilenstein: Trockenraum auf Taupunkt qualifiziert.</em>"
      ],
      [
        "Anlageneinzug, Montage und Qualifizierung",
        "Beschichter und Kalander, Schneiden, Vakuumtrocknung und Wickeln, Stapeln, Ableiterschweißen und Versiegeln, Elektrolytbefüllung und Entgasung, Formier- und Reiferegale, danach die stationsweise Werksabnahme vor Ort. <em>Meilenstein: Anlagenqualifizierung abgeschlossen.</em>"
      ],
      [
        "Linieninbetriebnahme, erste Zelle und Formierung",
        "Anbindung von Fertigungsleitsystem und Rückverfolgbarkeit, Beschichtungsversuche und Bahnqualität, die Betriebsdisziplin im Trockenraum, die erste montierte Zelle, danach Formierzyklen, das Fenster für Reifung und Selbstentladungsprüfung sowie die Schleife aus Zerlegung und Fehleranalyse. <em>Meilenstein: erste Zelle vom Band.</em>"
      ],
      [
        "Ausbeutehochlauf und Kundenfreigabe",
        "Prozessfähigkeit und statistische Prozesslenkung je Station, Ausschussreduzierung von der Elektrode bis zur Montage, A-Muster an den Kunden, Missbrauchs- und Transportprüfungen, B-Muster-Freigabe und Produktionsteil-Abnahmeverfahren, danach der Hochlauf auf die Nennkapazität. <em>Meilensteine: Ausbeuteziel erreicht, Serienproduktion gestartet.</em>"
      ]
    ],
    callout: "Der Trockenraum ist der Terminplan. Elektrodenhandhabung und Zellmontage brauchen Taupunkte um minus vierzig Grad, also muss das Gebäude zu einer dichten, sorptionsgetrockneten Umgebung werden, bevor eine einzige Anlage gestellt wird — und Hülle, Dampfsperre, Schleusen und Entfeuchtungsanlage liegen alle auf diesem Pfad. Dahinter zwei Dinge, die niemand stauchen kann: Formierung und Reifung verbrauchen je Zelle echte Kalendertage, gleich wie viele Menschen Sie einstellen, und die Ausbeute nach der ersten Zelle steigt auf einer Kurve, statt auf eine Zahl zu springen. Die bauliche Fertigstellung ist kein Tor für verkaufsfähige Ausbringung; die Anlagenqualifizierung und diese Kurve sind es.",
    customize: [
      "Frieren Sie Zellformat und Zellchemie früh ein und setzen Sie das als Meilenstein. Beschichterbreite, Kalanderlast, Gehäusemaße, Regallayout und die gesamte Medienauslegung folgen daraus; eine späte Änderung ist eine Neuplanung und keine Anpassung.",
      "Geben Sie Taupunktabsenkung und Haltetest eigene Balken nach der Montage der Entfeuchtungsanlage. Eine laufende Anlage ist nicht dasselbe wie eine dichte Hülle, und bei der Leckagesuche kommen späte Hüllenmängel ans Licht.",
      "Takten Sie den Anlageneinzug gegen die Trockenraumbereitschaft, nicht gegen die Liefertermine der Lieferanten. Eine Anlage, die in der Kiste vor einem Raum ohne Zieltaupunkt steht, qualifiziert gar nichts.",
      "Bilden Sie Formierung und Reifung als Balken fester Dauer je Charge ab, nicht als Kapazität, der man Personal hinzufügen kann. Die Chemie setzt die Tage; der einzige Hebel ist die Zahl der Regale.",
      "Zeichnen Sie den Ausbeutehochlauf als langen Balken mit Zielmeilenstein am Ende, nicht als Sprung. Alles nach der ersten Zelle ist eine Lernkurve, und sie als Ereignis zu zeichnen verbirgt Monate echter Arbeit.",
      "Trennen Sie Anlagenqualifizierung und Linieninbetriebnahme. Ein Lieferant, der beweist, dass eine Station spezifikationsgemäß läuft, und Ihr Prozessteam, das beweist, dass die Linie eine gute Zelle macht, sind zwei Ereignisse mit zwei Verantwortlichen.",
      "Legen Sie für die Genehmigung nach dem Bundes-Immissionsschutzgesetz einen eigenen Balken mit Öffentlichkeitsbeteiligung an, wenn Ihr Verfahren sie erfordert — sie hat eine gesetzlich getaktete Dauer, die Sie nicht verhandeln."
    ],
    tips: [
      "<strong>Bauen Sie den Trockenraum, bevor Sie ihn brauchen.</strong> Abdichtung der Hülle, Schleusen und Absenkung laufen nacheinander und langsam, und jeder Tag dieser Kette liegt unmittelbar vor der ersten Zelle.",
      "<strong>Kaufen Sie Formier- und Reifekapazität, nicht Termine.</strong> Dauert die Reifung drei Wochen je Charge, verkürzen nur mehr Regale und mehr Fläche den Hochlauf — kein Umsortieren ändert die Chemie.",
      "<strong>Behandeln Sie Lösemittelrückgewinnung und Abluftreinigung als kritischen Pfad.</strong> Sie sind unscheinbar, werden regelmäßig zurückgestellt, und keine Beschichtungslinie darf ohne sie in Produktion gehen.",
      "<strong>Verfolgen Sie den Ausschuss je Station ab dem ersten Versuch.</strong> Eine schlecht laufende Station weit vorn wirft Material weg, dem bereits Wert zugefügt wurde — der häufigste Grund für einen stockenden Hochlauf.",
      "<strong>Beginnen Sie die Kundenfreigabe früher, als Sie sich bereit fühlen.</strong> Missbrauchsprüfung, Transportzulassung und Produktionsteil-Abnahmeverfahren dauern Monate und laufen gegen frühe Zellen, während die Ausbeute noch steigt.",
      "<strong>Setzen Sie die Trockenraumdisziplin als Schulung auf den Plan, nicht als Rundschreiben.</strong> Einschleusen, Materialtransfer und Feuchteschutz sind Gewohnheiten, die Wochen brauchen — eine Feuchteexkursion kostet mehr als die Schulung."
    ],
    faq: [
      [
        "Wie lange dauert der Bau einer Batteriezellfabrik?",
        "Ein Neubau auf der grünen Wiese läuft üblicherweise dreißig bis sechsunddreißig Monate von der Genehmigung bis zum Produktionsstart, und ungefähr diese Spanne nutzt die Vorlage. Der Rohbau ist gut planbar; Trockenraumqualifizierung, Anlagenqualifizierung und der Ausbeutehochlauf tragen die Streuung."
      ],
      [
        "Warum bestimmt der Trockenraum den Terminplan?",
        "Elektrodenhandhabung und Zellmontage verlangen extrem niedrige Feuchte, also muss das Gebäude dicht, dampfgesperrt und sorptionsgetrocknet sein, bevor Anlagen gestellt werden können. Damit wird aus einer Bauabfolge Monate vor der ersten Maschine eine Abfolge der kontrollierten Atmosphäre."
      ],
      [
        "Lassen sich Formierung und Reifung verkürzen?",
        "Nein. Jede Zelle braucht eine feste Zahl an Stunden oder Tagen kontrollierter Ladung und danach eine Ruhezeit für die Selbstentladungsprüfung. Der einzige Hebel ist mehr Formier- und Reifekapazität, und das ist Kapital und Fläche, keine Terminplanung."
      ],
      [
        "Was bestimmt tatsächlich die verkaufsfähige Ausbringung?",
        "Anlagenqualifizierung und Ausbeute, nicht die bauliche Fertigstellung. Eine fertige Fabrik mit nicht qualifizierten Stationen produziert nichts Verkäufliches — deshalb liegt der Qualifizierungsmeilenstein in der Vorlage deutlich hinter dem Ausbau."
      ],
      [
        "Wie stellt man den Ausbeutehochlauf im Gantt-Diagramm dar?",
        "Als langen Balken mit Zielmeilenstein am Ende. Fehlerreduzierung ist eine von Versuchen getriebene Kurve, und sie als einzelnes Ereignis zu zeichnen ist der häufigste Weg, mit dem Terminpläne von Zellfabriken ihre eigenen Gremien in die Irre führen."
      ],
      [
        "Braucht eine Zellfabrik eine Genehmigung nach dem Bundes-Immissionsschutzgesetz?",
        "In aller Regel ja. Beschichtung mit Lösemitteln, Abluftreinigung, Lösemittel- und Elektrolytlager und die Feuerungsanlagen führen typischerweise in ein Genehmigungsverfahren nach dem Bundes-Immissionsschutzgesetz, häufig mit Umweltverträglichkeitsprüfung und Öffentlichkeitsbeteiligung. Das Verfahren hat gesetzlich getaktete Schritte, die Sie nicht beschleunigen, deshalb gehört es als eigener Langläufer-Balken nach vorn und nicht als Fußnote in die Bauphase."
      ],
      [
        "Ist die Vorlage für die Batteriezellfabrik kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung und ohne Wasserzeichen."
      ]
    ]
  },
  'nuclear-decommissioning-schedule': {
    card: "Charakterisierung, Entsorgungsweg, dosisbudgetierter Abbau, Freigabe, Entlassung.",
    h1: "Terminplan für Stilllegung und Rückbau eines Kernkraftwerks",
    metaTitle: "Terminplan Rückbau Kernkraftwerk",
    metaDesc: "Kostenloser Rückbau-Terminplan: Charakterisierung, Stilllegungsgenehmigung, Entsorgungsweg, dosisbudgetierter Abbau, Freigabe und Entlassung des Standorts.",
    lead: "Eine kostenlose <strong>Vorlage für den Terminplan von Stilllegung und Rückbau</strong>, gebaut auf der Regel, die jedes solche Vorhaben beherrscht: Sie können nicht schneller abbauen, als Sie entsorgen können. Zuerst Brennelementfreiheit und radiologische Charakterisierung, weil sich gegen ein unbekanntes Inventar nichts planen lässt; danach die Stilllegungs- und Abbaugenehmigung nach § 7 Absatz 3 Atomgesetz und die mit dem Endlagerbetreiber abgestimmten Annahmebedingungen, bevor physisch gearbeitet wird; der Abbau getaktet durch ein Dosisbudget statt durch Mannschaftsstärke; Konditionierung, Pufferlagerung und Abtransport parallel; danach Freigabe nach der Strahlenschutzverordnung, konventioneller Abriss und die Entlassung des Geländes aus der atomrechtlichen Aufsicht.",
    intro: "Rückbauterminpläne scheitern, wenn sie als Abriss mit zusätzlichem Papier gezeichnet werden. Die Arbeit wird durch Entsorgungskapazität, Genehmigungen und Dosis getaktet, und die Balken sind entsprechend geordnet:",
    phases: [
      [
        "Nachbetrieb, Brennelementfreiheit und Charakterisierung",
        "Entladung des Reaktorkerns und Abtransport der Brennelemente in das Zwischenlager, radiologische Charakterisierung von Gebäuden und Komponenten, das Reststoff- und Abfallinventar mit Buchführung, Asbest- und Gefahrstofferkundung sowie die Definition des Zielzustands, an dem später alles gemessen wird. <em>Meilensteine: Brennelementfreiheit erklärt, Charakterisierungsbasis veröffentlicht.</em>"
      ],
      [
        "Atomrechtliche Genehmigung und Entsorgungsweg",
        "Der Antrag auf Stilllegung und Abbau nach § 7 Absatz 3 Atomgesetz mit Sicherheitsbericht und Störfallbetrachtung, Umweltverträglichkeitsprüfung und Öffentlichkeitsbeteiligung, die Abstimmung mit der atomrechtlichen Aufsichtsbehörde des Landes, die Annahmebedingungen des Endlagers und die zugesagten Einlagerungskontingente sowie das Dosisbudget nach dem Minimierungsgebot. <em>Meilensteine: Abbaugenehmigung erteilt, Entsorgungsweg bestätigt.</em>"
      ],
      [
        "Abbau der Nebenanlagen und Einhausung",
        "Asbestsanierung und konventionelle Gefahrstoffbeseitigung, Lüftung, Unterdruckhaltung und Einhausungszelte, Demontage stillgelegter Systeme und Rohrleitungen, Entleerung und Reinigung von Becken und aktiven Abläufen sowie Dekontamination zugänglicher Oberflächen. <em>Meilenstein: Nebengebäude radiologisch freigemessen.</em>"
      ],
      [
        "Abbau von Reaktor und Primärkreis",
        "Erprobung von Fernhantierung und Zerlegetechnik, Zuteilung des Dosisbudgets je Arbeitsbereich, Zerlegung und Volumenreduzierung des Primärkreises, Ausbau der Reaktoreinbauten unter Abschirmung — häufig nass —, Auswertung der Dosisleistung samt Schichtanpassung und der Abtrag des aktivierten Biologischen Schilds. <em>Meilenstein: Reaktorgebäude geräumt.</em>"
      ],
      [
        "Konditionierung, Verpackung und Abtransport",
        "Sortierung, Aktivitätsbestimmung und lückenlose Nachweisführung, Konditionierung in zugelassene Behälter nach den Annahmebedingungen, Abtransport in das Zwischenlager oder an die vorgesehene Endlagerstätte, Einlagerung und wiederkehrende Kontrollen sowie die Freigabe nach § 31 ff. der Strahlenschutzverordnung für Material, das die Anlage verlassen darf. <em>Meilenstein: alle radioaktiven Abfälle abgegeben oder zwischengelagert.</em>"
      ],
      [
        "Abriss, Sanierung und Entlassung aus der Aufsicht",
        "Abschließende Freimessung der Gebäudestrukturen, konventioneller Abriss der freigegebenen Bauwerke, Bewertung der Bodenqualität und Sanierung, das Abschlussgutachten mit Nachweispaket und die Entlassung des Standorts aus der atomrechtlichen Überwachung. <em>Meilenstein: Standort aus der Aufsicht entlassen.</em>"
      ]
    ],
    callout: "Nicht die Mannschaftsstärke setzt das Tempo, sondern die Entsorgungskapazität. Jeder Kubikmeter, den Sie herausschneiden, muss irgendwohin, wo er angenommen wird, und die Annahmebedingungen bestimmen, wie der Abfall charakterisiert, konditioniert, deklariert und dokumentiert wird, bevor er sich bewegen darf. In Deutschland ist genau das die offene Flanke: Schwach- und mittelradioaktive Abfälle mit vernachlässigbarer Wärmeentwicklung sind für Schacht Konrad vorgesehen, dessen Inbetriebnahme sich wiederholt verschoben hat, und für hochradioaktive Abfälle läuft die Standortsuche noch. Was das für Ihren Plan bedeutet: Der Balken heißt Zwischenlagerung, nicht Endlagerung, er ist länger, als das erste Konzept annimmt, und wenn er voll ist, steht der Abbau mit Leuten daneben. Darüber liegt das Dosisbudget — das Minimierungsgebot begrenzt, wie viel Zeit jemand in einem Bereich verbringen darf — und jede Phase braucht ihre eigene Teilgenehmigung, bevor sie beginnt. Zeichnen Sie den Entsorgungsweg als Balken, nicht als Annahme.",
    customize: [
      "Legen Sie die Balken für Annahmebedingungen und zugesagte Einlagerungskontingente an, bevor Sie irgendeinen Abbau takten. Enden sie später, als Ihr Zerlegen beginnt, ist der Terminplan falsch, wie gut der Abbauplan auch aussieht.",
      "Geben Sie der Charakterisierung einen großzügigen, frühen Balken. Jede nachgelagerte Schätzung — Massen, Konditionierung, Dosis, Kosten — leitet sich daraus ab, und eine dünne Charakterisierung ist der zuverlässigste Vorbote einer Terminüberschreitung.",
      "Bilden Sie das Dosisbudget als Dauerrestriktion ab, nicht als Sicherheitshinweis. Lässt ein Bereich nur eine bestimmte Kollektivdosis je Kampagne zu, dauert die Arbeit so lange, wie sie dauert, und mehr Personal hilft nicht.",
      "Setzen Sie vor jede physische Phase einen Genehmigungsmeilenstein. Der Rückbau wird in Stufen genehmigt, und die Zustimmung als einmaliges Ereignis am Anfang zu behandeln, verzeichnet die tatsächlichen Tore.",
      "Trennen Sie Zwischenlagerung und Endlagerung. Material, das in ein standortnahes Zwischenlager geht, hat den Standort nicht verlassen, und nur eines von beidem verringert die Verbindlichkeit wirklich.",
      "Behalten Sie einen eigenen Balken für Freigabe und Wiederverwertung. Ein erheblicher Massenanteil ist nicht aktiviert oder kontaminiert, und ihn sauber nach der Strahlenschutzverordnung freizumessen entlastet Kosten und Entsorgungsweg zugleich.",
      "Ergänzen Sie eine Zeile für die Öffentlichkeitsbeteiligung und mögliche Klagen gegen die Genehmigung; beide haben gesetzlich getaktete Fristen und liegen häufig auf dem kritischen Pfad."
    ],
    tips: [
      "<strong>Charakterisieren Sie, bevor Sie planen, nicht während Sie abbauen.</strong> Ein auf angenommenem Inventar gebauter Terminplan wird neu aufgesetzt, sobald die erste Messung höher ausfällt als erwartet.",
      "<strong>Behandeln Sie Entsorgungskapazität wie eine Langläufer-Beschaffung.</strong> Kapazitäten sind jährlich begrenzt und haben eigene Warteschlangen; ein zugesagtes Kontingent ist ein Vermögenswert, ein fehlendes ein Stillstandsrisiko.",
      "<strong>Zerlegen Sie für den Behälter.</strong> Die Volumenreduzierung richtet sich nach dem, was Behälter und Annahmebedingungen zulassen, nicht nach dem, was an der Schnittstelle bequem ist — aktiviertes Material nachzuschneiden ist teuer und dosisintensiv.",
      "<strong>Verfolgen Sie die Kollektivdosis wöchentlich gegen das Budget.</strong> Eine Dosisaufnahme über Plan ist ein Frühwarnzeichen für ein falsches Verfahren, und sie zeigt sich lange bevor der Termin rutscht.",
      "<strong>Nehmen Sie Asbest und konventionelle Gefahrstoffe ernst.</strong> In vielen älteren Anlagen treiben die nichtradiologischen Gefahren mehr vom frühen Programm als die radiologischen, und sie versperren den Zugang zu allem dahinter.",
      "<strong>Führen Sie das Nachweispaket laufend mit.</strong> Die Entlassung aus der Aufsicht hängt am Nachweis, dass der Zielzustand erreicht ist, und Mess- und Abgabeaufzeichnungen am Ende zu rekonstruieren ist langsamer, als sie aktuell zu halten."
    ],
    faq: [
      [
        "Wie lange dauert der Rückbau eines Kernkraftwerks?",
        "Die Vorlage umfasst rund 1.200 Tage für den direkten Rückbau einer Anlage, in der Praxis reichen deutsche Vorhaben aber von etwa fünfzehn Jahren bis zu mehreren Jahrzehnten — je nach Strategie, verfügbaren Entsorgungswegen und ob ein sicherer Einschluss zwischengeschaltet wird."
      ],
      [
        "Warum steuert die Entsorgung den Terminplan?",
        "Weil abgebautes Material charakterisiert, konditioniert und an eine Stelle abgegeben werden muss, die es annimmt. Ist der Weg nicht verfügbar oder sind die Annahmebedingungen nicht erfüllt, bleibt das Material am Standort, das Lager füllt sich, und das Zerlegen muss anhalten."
      ],
      [
        "Welche Genehmigung braucht der Rückbau in Deutschland?",
        "Eine Stilllegungs- und Abbaugenehmigung nach § 7 Absatz 3 Atomgesetz, erteilt von der atomrechtlichen Aufsichtsbehörde des jeweiligen Landes, mit Sicherheitsbericht, Störfallbetrachtung, Umweltverträglichkeitsprüfung und Öffentlichkeitsbeteiligung. Sie wird üblicherweise in Stufen erteilt, und die Aufsicht begleitet den Abbau danach fortlaufend mit Zustimmungsvorbehalten für einzelne Maßnahmen."
      ],
      [
        "Wohin gehen die radioaktiven Abfälle?",
        "Schwach- und mittelradioaktive Abfälle mit vernachlässigbarer Wärmeentwicklung sind für das Endlager Schacht Konrad vorgesehen, dessen Inbetriebnahme sich mehrfach verschoben hat; bis dahin gehen sie in standortnahe oder zentrale Zwischenlager. Für hochradioaktive Abfälle läuft die Standortsuche nach dem Standortauswahlgesetz noch. Planen Sie deshalb mit Zwischenlagerkapazität als echter Restriktion und nicht mit einem Abgabetermin, den niemand zusagen kann."
      ],
      [
        "Was bedeutet Freigabe nach der Strahlenschutzverordnung?",
        "Es ist das Verfahren, mit dem Material aus dem atomrechtlichen Regime entlassen wird, wenn seine Aktivität unter den festgelegten Freigabewerten liegt. Es setzt ein behördlich zugestimmtes Messkonzept, dokumentierte Freimessung und die Zustimmung der Aufsichtsbehörde voraus. Ein großer Teil der Gesamtmasse geht diesen Weg, weshalb er einen eigenen Balken verdient — er entlastet den Entsorgungspfad spürbar."
      ],
      [
        "Ist die atomrechtliche Zustimmung eine einzige Freigabe?",
        "Nein. Der Rückbau wird in Stufen genehmigt, mit eigenem Nachweis für jede größere Phase und laufender Aufsicht dazwischen. Die Vorlage setzt Genehmigungsmeilensteine vor die physischen Phasen, statt eine einzige Zustimmung am Anfang zu zeigen."
      ],
      [
        "Ist die Rückbau-Vorlage kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung und ohne Wasserzeichen."
      ]
    ]
  },
  'university-accreditation-timeline': {
    card: "Rückwärtsplanung ab Begehung und Sitzung des Akkreditierungsrats.",
    h1: "Zeitplan für die Akkreditierung an einer Hochschule",
    metaTitle: "Zeitplan Hochschulakkreditierung",
    metaDesc: "Kostenloser Zeitplan für die Akkreditierung: Rückwärtsplanung ab Begehung und Sitzung des Akkreditierungsrats, Selbstbericht, Nachweise, Beteiligung.",
    lead: "Eine kostenlose <strong>Vorlage für den Zeitplan einer Hochschulakkreditierung</strong>, die dort beginnt, wo der echte Terminplan beginnt: bei zwei Terminen, die jemand anderes besitzt. Die beauftragte Agentur setzt die Begehung, und die Entscheidung fällt in einer Sitzung des Akkreditierungsrats, die nur wenige Male im Jahr stattfindet — es gibt also ein Einreichfenster, und es zu verpassen kostet einen Turnus und nicht einen Monat. Alles Weitere wird davon zurückgerechnet: Lenkungsgruppe und Arbeitsgruppen, eine Lückenanalyse gegen die Kriterien des Studienakkreditierungsstaatsvertrags, Daten aus Qualitätssicherung und Lehrevaluation, Beteiligung von Lehrenden, Studierenden und Hochschulleitung, danach Entwurf, interne Prüfung, Probebegehung und Einreichung.",
    intro: "Die Akkreditierung ist das seltene Hochschulprojekt mit einer wirklich unverrückbaren Frist, die die Hochschule nicht selbst gewählt hat. Die Vorlage ist von hinten nach vorn gelegt:",
    phases: [
      [
        "Verfahrensklärung und Abstimmung mit der Agentur",
        "Klärung, ob Sie ein Programm- oder ein Systemakkreditierungsverfahren führen, Lektüre der formalen und fachlich-inhaltlichen Kriterien der Musterrechtsverordnung, Auswahl und Beauftragung einer beim Akkreditierungsrat registrierten Agentur, Bestätigung des Begehungstermins und der Sitzung des Akkreditierungsrats sowie die Rückwärtsplanung aus der Einreichfrist. <em>Meilensteine: Begehungstermin fixiert, Einreichfenster bestätigt.</em>"
      ],
      [
        "Aufbau des Selbstberichts und Verfahrenssteuerung",
        "Berufung und Beauftragung der Lenkungsgruppe, Arbeitsgruppen je Kriterium oder je Studiengang, Gliederung des Selbstberichts und Nachweisraster, eine Lückenanalyse gegen die Kriterien sowie ein Nachweisspeicher, der den gesamten Turnus übersteht. <em>Meilenstein: Lückenanalyse im Präsidium berichtet.</em>"
      ],
      [
        "Nachweise, Qualitätsdaten und Nachbesserung",
        "Ein vollständiger Zyklus der Lehrveranstaltungsevaluation und der Überprüfung der Qualifikationsziele, Kennzahlen zu Studienerfolg, Verbleib und Studierbarkeit, Prüfung der Qualifikation des Lehrpersonals, Ressourcennachweise, Änderungen von Prüfungs- und Studienordnungen zur Schließung der Lücken sowie die Aktualisierung von Modulhandbuch und Arbeitsaufwandserhebung. <em>Meilenstein: Nachweisbasis vollständig.</em>"
      ],
      [
        "Beteiligung von Lehrenden, Studierenden und Gremien",
        "Berichte in Fakultätsrat und Senat, Workshops zu einzelnen Kriterien, Nachweisklinik für Studiendekaninnen und Studiendekane, Befragungen von Studierenden und Absolventen sowie die Einbindung der studentischen Vertretung und der Berufspraxis, die im Gutachtergremium ohnehin vertreten sind."
      ],
      [
        "Selbstbericht: Entwurf, Prüfung und Einreichung",
        "Erster vollständiger Entwurf, hochschulinterne Kommentierungsfrist, eine Probebegehung mit externen Kolleginnen und Kollegen, Endredaktion mit Anlagen und verknüpften Nachweisen, Beschluss der Hochschulleitung und Einreichung innerhalb des Fensters. <em>Meilenstein: Selbstbericht eingereicht.</em>"
      ],
      [
        "Begehung, Stellungnahme und Beschluss",
        "Organisation und Gesprächsplan, Probelauf auf dem Campus, Vorgespräch mit der Agentur und Nachforderung von Unterlagen, die Begehung durch das Gutachtergremium, der Entwurf des Gutachtens, die Stellungnahme der Hochschule, der Beschlussvorschlag der Agentur und die Sitzung des Akkreditierungsrats. <em>Meilenstein: Akkreditierung ausgesprochen.</em>"
      ]
    ],
    callout: "Die beiden Termine, auf die es ankommt, gehören Ihnen nicht. Die Agentur setzt die Begehung, und die Entscheidung fällt in einer Sitzung des Akkreditierungsrats, die nur einige Male im Jahr zusammentritt — das Einreichfenster davor ist eng und hart. Wird es verpasst, rutscht das ganze Verfahren in den nächsten Turnus und nimmt Selbstbericht, Nachweise und guten Willen mit. Jeder andere Balken ist abgeleitet: der spätestmögliche Termin für den Beschluss der Hochschulleitung, für die Endfassung, für die Probebegehung, für den Evaluationszyklus, der mindestens einmal gelaufen sein muss. Fixieren Sie zuerst den Begehungstermin und lassen Sie den Rest zurückrechnen. Und klären Sie früh, welches Verfahren Sie führen: In der Programmakkreditierung wird jeder Studiengang einzeln begutachtet, in der Systemakkreditierung Ihr internes Qualitätsmanagementsystem, das anschließend selbst akkreditiert — zwei sehr verschiedene Terminpläne.",
    customize: [
      "Tragen Sie Begehungstermin und Sitzungstermin des Akkreditierungsrats zuerst als feste Marken ein und ziehen Sie jeden anderen Balken rückwärts, bis es passt. Passt es nicht, lautet die Antwort früher mehr Ressourcen — niemals eine kürzere Schreibphase.",
      "Legen Sie in der Programmakkreditierung eine Arbeitsgruppenzeile je Studiengang oder Bündel an. Sie kommen nicht gleich schnell voran, und ein gemittelter Balken verbirgt die zwei Gruppen, die feststecken.",
      "Geben Sie dem Evaluations- und Qualitätsdatenzyklus ein volles Semester oder Studienjahr. Qualifikationsziele lassen sich nicht rückwirkend belegen, und dieser Balken wird am häufigsten zu spät entdeckt.",
      "Setzen Sie die Probebegehung früh genug an, um auf die Befunde reagieren zu können. Eine Generalprobe zwei Wochen vor dem Termin ist Theater; eine vor der Endredaktion ist ihr Geld wert.",
      "Planen Sie die Änderung von Prüfungs- und Studienordnungen mit dem tatsächlichen Gremienweg: Fakultätsrat, Senat, Rechtsprüfung und Veröffentlichung haben feste Sitzungstermine, die Sie nicht verschieben.",
      "Führen Sie die Beteiligung der Lehrenden als echte terminierte Arbeit mit Verantwortlichen. Nachweise liegen in den Fachbereichen, und ein zentral geschriebener Selbstbericht ohne die Fachbereiche liest sich für ein Gutachtergremium auch so.",
      "Ergänzen Sie in der Systemakkreditierung Zeilen für die Merkmalsstichproben; die Agentur prüft Ihr Qualitätsmanagementsystem an ausgewählten Studiengängen, und diese Auswahl treffen nicht Sie."
    ],
    tips: [
      "<strong>Bestätigen Sie nicht nur die Begehung, sondern den Sitzungstermin.</strong> Die Begehung ist sichtbar; die Sitzung des Akkreditierungsrats ist der eigentliche Entscheidungspunkt und legt fest, wie viel Zeit für die Stellungnahme zum Gutachten bleibt.",
      "<strong>Bauen Sie den Nachweisspeicher einmal, am Anfang.</strong> Dokumente zweimal zu suchen — erst für die Arbeitsgruppen, dann für die Anlagen — ist der größte vermeidbare Aufwand des ganzen Turnus.",
      "<strong>Schließen Sie Lücken früh genug, um Praxis zu zeigen.</strong> Eine im Monat vor der Begehung beschlossene Ordnung zeigt Problembewusstsein; eine ein Jahr zuvor beschlossene zeigt gelebte Praxis, und Gutachtergremien kennen den Unterschied.",
      "<strong>Proben Sie die Gespräche mit denen, die wirklich im Raum sitzen.</strong> Das Gremium spricht mit Studiendekanen, Lehrbeauftragten, Studierenden und Verwaltung, nicht nur mit der Lenkungsgruppe — und unvorbereitete Ehrlichkeit ist die Quelle der meisten Auflagen.",
      "<strong>Halten Sie den Selbstbericht in einer Stimme.</strong> Zwölf Arbeitsgruppen erzeugen zwölf Stile; planen Sie echte Redaktionszeit ein, sonst liest sich das Dokument als Sammlung von Zulieferungen und nicht als Argument der Hochschule.",
      "<strong>Planen Sie das Fenster für die Stellungnahme.</strong> Sachliche Fehler vor der Sitzung zu korrigieren ist eine echte Gelegenheit, und es ist eine kurze Phase unter Druck, die einen eigenen Balken verdient."
    ],
    faq: [
      [
        "Wie lange dauert ein Akkreditierungsverfahren?",
        "Die Vorbereitung läuft für eine Reakkreditierung etwa zwei Jahre, und ungefähr diese Spanne nutzt die Vorlage. Der Selbstbericht selbst ist vielleicht ein halbes Jahr Schreibarbeit; die Qualitätsdaten und das Schließen der Lücken davor dauern deutlich länger."
      ],
      [
        "Was ist der Unterschied zwischen Programm- und Systemakkreditierung?",
        "In der Programmakkreditierung wird jeder Studiengang einzeln gegen die formalen und fachlich-inhaltlichen Kriterien begutachtet. In der Systemakkreditierung wird stattdessen Ihr internes Qualitätsmanagementsystem akkreditiert; die Hochschule akkreditiert ihre Studiengänge danach selbst, geprüft an Stichproben. Der Aufwand verschiebt sich damit von vielen kleinen Verfahren zu einem großen — und zu der Frage, ob Ihr internes System die Prüfung tatsächlich trägt."
      ],
      [
        "Wer entscheidet über die Akkreditierung?",
        "Die Agentur führt das Verfahren und organisiert das Gutachtergremium, aber die Entscheidung trifft der Akkreditierungsrat in seiner Akkreditierungskommission auf Grundlage des Studienakkreditierungsstaatsvertrags. Seine Sitzungen finden nur wenige Male im Jahr statt, und genau deshalb ist die Einreichfrist davor eine harte Marke."
      ],
      [
        "Was passiert, wenn wir das Einreichfenster verpassen?",
        "Das Verfahren rutscht in aller Regel in die nächste Sitzung, die Monate entfernt sein kann. Deshalb zeigt die Vorlage die Einreichung als harten Meilenstein mit bewusst davorgelegtem Beschluss der Hochschulleitung und Endredaktion."
      ],
      [
        "Wann sollte das Schreiben des Selbstberichts beginnen?",
        "Nach der Lückenanalyse und sobald die Qualitätsdaten vorliegen, nicht davor. Früh ohne Nachweise zu schreiben erzeugt ein Dokument, das neu geschrieben werden muss, und das ist langsamer, als auf die Daten zu warten."
      ],
      [
        "Was passiert bei Auflagen?",
        "Eine Akkreditierung mit Auflagen ist der Normalfall und kein Scheitern. Die Auflagen sind fristgebunden, und ihre Erfüllung muss der Agentur nachgewiesen werden — planen Sie diese Nachweisführung als eigene Balken hinter dem Beschluss ein, sonst fällt sie in die Zeit, in der alle Beteiligten das Verfahren für beendet halten."
      ],
      [
        "Ist die Vorlage für die Hochschulakkreditierung kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung und ohne Wasserzeichen."
      ]
    ]
  },
  'crop-planting-harvest-schedule': {
    card: "Sammelantrag, Sperrfristen, Aussaatfenster, Wachstumsstadien, Ernte und Trocknung.",
    h1: "Anbau- und Erntezeitplan für den Ackerbau",
    metaTitle: "Anbau- und Erntezeitplan",
    metaDesc: "Kostenloser Anbau- und Erntezeitplan: Sammelantrag, Sperrfristen der Düngeverordnung, Aussaatfenster, Wachstumsstadien, Erntefeuchte, Trocknung und Lager.",
    lead: "Eine kostenlose <strong>Vorlage für den Anbau- und Erntezeitplan</strong> für ein Jahr, das sich wirklich nicht verschieben lässt. Winterplanung, Bodenuntersuchung, Betriebsmittel und Maschinenwartung; ein Aussaatfenster, das von Bodentemperatur und Befahrbarkeit geöffnet wird und nicht von einem Projektplan; die Aussaat über frühe, mittlere und späte Schläge getaktet, weil eine Maschinenkette sie alle bedienen muss; eine agronomische Abfolge von Wachstumsstadien, an denen Pflanzenschutz- und Düngetermine hängen; danach die Ernte, getaktet von der Kornfeuchte, und Trocknungs- und Lagerkapazität, die bestimmen, wie schnell gedroschen werden kann. Dazwischen liegen zwei Termine, die der Gesetzgeber setzt: der Sammelantrag und die Sperrfristen der Düngeverordnung.",
    intro: "Fast jeder andere Terminplan verhandelt mit seinen Restriktionen. Ein Anbaujahr nicht: Die Biologie setzt die Reihenfolge, das Wetter das Fenster und das Fachrecht feste Kalendertage. Die Vorlage hält alle drei sichtbar:",
    phases: [
      [
        "Winterplanung, Betriebsmittel und Antragsfristen",
        "Anbauplan und Fruchtfolge je Schlag, Bodenuntersuchung mit Nährstoffergebnissen, Bestellung von Saatgut, Düngemitteln und Pflanzenschutzmitteln, Wartung und Kalibrierung der Maschinen, Buchung von Arbeitskräften und Lohnunternehmen sowie der Sammelantrag mit den Vorgaben der Gemeinsamen Agrarpolitik, dessen Frist unabhängig von Ihrem Feldkalender läuft. <em>Meilensteine: Sammelantrag gestellt, Betriebsmittel eingelagert.</em>"
      ],
      [
        "Saatbettbereitung und Aussaatfenster",
        "Beobachtung von Bodentemperatur und Befahrbarkeit, Grundbodenbearbeitung und Saatbettbereitung, Vorauflaufherbizid und Startdüngung im Rahmen der Düngebedarfsermittlung, danach die Aussaat über frühe Schläge, den Hauptblock und die späten oder nassen Flächen. <em>Meilensteine: Aussaatfenster offen, Aussaat abgeschlossen.</em>"
      ],
      [
        "Auflauf und Wachstumsstadien",
        "Bestandeszählung und Bewertung der Etablierung, Bestockung, Schossen und Bestandesschluss, Blüte und Kornfüllung, mit wöchentlichen Bestandeskontrollen und Bewässerungsplanung über die gesamte Saison. <em>An den Wachstumsstadien hängen die Behandlungstermine, nicht am Kalender.</em>"
      ],
      [
        "Pflanzenschutz- und Düngeprogramm",
        "Nachauflaufherbizid zur frühen Bestockung, die Stickstoffgaben innerhalb der ermittelten Obergrenze, Fungizid zum Schossen, zum Erscheinen des Fahnenblatts und zur Blüte — jeweils an ein Wachstumsstadium gebunden. Dazu die Pflichten, die mitlaufen: gültige Sachkunde im Pflanzenschutz, geprüfte Spritze, Abstandsauflagen zu Gewässern und Saumbiotopen sowie die einzuhaltenden Wartezeiten vor der Ernte. <em>Meilenstein: Behandlungsprogramm abgeschlossen.</em>"
      ],
      [
        "Ernte und Feldlogistik",
        "Messung der Kornfeuchte und Druschreife, Bereitschaft von Mähdrescher und Abfuhrkette, danach die Ernte über frühe, mittlere und späte Schläge mit Abfuhr und Waagenlogistik parallel. <em>Meilensteine: Erntefenster bei Zielfeuchte offen, Ernte abgeschlossen.</em>"
      ],
      [
        "Trocknung, Lagerung und Nachernte",
        "Durchsatz der Trocknung und Feuchtesteuerung, Befüllung des Lagers mit Belüftung und Temperaturüberwachung, Probenahme, Qualitätsbestimmung und Dokumentation für die Erzeugerrichtlinien, Vertragslieferungen, Stoppelbearbeitung und Zwischenfruchtaussaat innerhalb der Fristen sowie der Rückblick auf das Anbaujahr. <em>Meilenstein: Anbaujahr abgeschlossen.</em>"
      ]
    ],
    callout: "Der Kalender gehört Ihnen nicht. Bodentemperatur und Befahrbarkeit entscheiden, wann gesät werden kann; die Wachstumsstadien entscheiden, wann jede Behandlung sitzt, und ein Fungizid eine Woche neben dem Stadium ist verbranntes Geld; die Kornfeuchte entscheidet, wann der Mähdrescher fahren darf. Dahinter steht eine zweite, härtere Grenze: Trocknungsdurchsatz und Lagerkapazität. Wer zwanzig Tonnen je Stunde trocknen kann, kann auf Dauer nicht schneller dreschen, egal wie viele Mähdrescher im Feld stehen. Und dann gibt es Termine, die nicht das Wetter setzt, sondern das Recht: Der Sammelantrag hat eine Ausschlussfrist, deren Versäumnis bares Geld kostet, und die Düngeverordnung schreibt Sperrfristen fest, in denen stickstoffhaltige Düngemittel schlicht nicht ausgebracht werden dürfen — auf Ackerland nach der Ernte der letzten Hauptfrucht bis Ende Januar, auf Grünland etwas anders, und in nitratbelasteten roten Gebieten mit zusätzlichen Auflagen und verlängerten Sperrzeiten. Diese Daten stehen im Kalender fest, bevor die Saison beginnt. Zeichnen Sie sie als graue Sperrbalken ein, gegen die die Ausbringungsbalken stoßen dürfen — sie sind die verlässlichsten Restriktionen im ganzen Plan.",
    customize: [
      "Setzen Sie den Meilenstein für das Aussaatfenster aus Ihren eigenen Bodentemperaturaufzeichnungen, nicht aus dem Saattermin des Vorjahres, und lassen Sie die Aussaatbalken mitwandern.",
      "Legen Sie die Sperrfristen der Düngeverordnung als feste Sperrbalken über das ganze Jahr, getrennt nach Ackerland und Grünland. Jeder Ausbringungsbalken, der dagegen stößt, ist ein Planungsfehler, den Sie im Februar sehen und nicht im Oktober.",
      "Tragen Sie die Frist für den Sammelantrag als harten Meilenstein ein, mit einer eigenen Zeile für die Erfassung der Flächen und Nutzungen davor. Sie ist eine Ausschlussfrist, und Kürzungen der Zahlungen sind teurer als jede Ertragsdifferenz im selben Plan.",
      "Teilen Sie die Aussaat in frühe, mittlere und späte Schläge, dimensioniert nach Ihrer echten Tagesleistung. Daran zeigt sich, ob die Kette im Fenster fertig wird oder ob Sie ein Lohnunternehmen brauchen.",
      "Hängen Sie jeden Behandlungsbalken an einen Wachstumsstadienbalken statt an ein Datum. Läuft die Saison früh oder spät, sollen die Termine automatisch mit dem Bestand wandern.",
      "Ergänzen Sie eine Zeile je Kultur, wenn Sie mehrere anbauen. Ihre Fenster überlappen und konkurrieren um dieselbe Drillmaschine, dieselbe Spritze und denselben Mähdrescher, und genau diese Konkurrenz ist der Sinn des Diagramms.",
      "Geben Sie dem Trocknungsdurchsatz einen eigenen Balken durch die Ernte hindurch. Ist er kürzer als die Erntebalken darüber, ist die Lagerung Ihre Restriktion, und der Plan soll das aussprechen.",
      "Legen Sie eine Zeile für Wartezeiten zwischen der letzten Behandlung und dem Drusch an — sie ist mittelspezifisch, sie ist verbindlich, und sie kollidiert regelmäßig mit dem frühesten Termin, an dem die Feuchte passt."
    ],
    tips: [
      "<strong>Säen Sie nach Bodenzustand, nicht nach Plan.</strong> Ein nass gedrilltes Saatbett kostet Ertrag über die ganze Saison, und die scheinbar gesparten Tage kommen als schlechte Etablierung zurück, aus der kein Pflanzenschutz herausführt.",
      "<strong>Halten Sie die Spritze vor dem Bestand, nicht dahinter.</strong> Stadienbezogene Termine haben ein Fenster von wenigen Tagen; eine Spritze, die auf einem anderen Schlag festhängt, ist der häufigste Grund für ein zu spätes Fungizid.",
      "<strong>Planen Sie die Ernte um die Trocknung, nicht um den Mähdrescher.</strong> Feucht zu dreschen nützt nur, wenn Sie es auch trocknen können; sonst steht das Korn im Hänger und erwärmt sich, während der Mähdrescher produktiv aussieht.",
      "<strong>Prüfen Sie die Sachkunde und die Spritzenprüfung vor der Saison.</strong> Ein abgelaufener Sachkundenachweis oder eine überfällige Gerätekontrolle legt die Applikation still, und beides ist im Winter eine Formalie und im Mai ein Ernteschaden.",
      "<strong>Buchen Sie Transport und Lohnunternehmen vor der Ernte, nicht während.</strong> Alle brauchen die Fahrzeuge in denselben vierzehn Tagen, und ein volles Lager ohne Abfluss stoppt den Mähdrescher so zuverlässig wie Regen.",
      "<strong>Warten Sie die Maschinen im Winter und kalibrieren Sie vor dem Fenster.</strong> Ein Ausfall in einem vierzehntägigen Aussaatfenster ist keine Reparatur, sondern ein verlorener Schlag, und Werkstattzeit im Februar ist dagegen umsonst.",
      "<strong>Dokumentieren Sie laufend.</strong> Düngebedarfsermittlung, Aufzeichnungen zur Ausbringung, Pflanzenschutzdokumentation, Feuchtemessungen und Lagertemperaturen werden für Kontrollen und Abnahmeverträge gebraucht, und sie nach der Ernte zu rekonstruieren ist langsam und wenig überzeugend."
    ],
    faq: [
      [
        "Wie baut man einen Anbau- und Erntezeitplan auf?",
        "Beginnen Sie mit den Fenstern, die Sie nicht steuern — Bodentemperatur für die Aussaat, Kornfeuchte für die Ernte — und fügen Sie die Maschinenkette dazwischen ein. Legen Sie darüber die Termine, die das Fachrecht setzt: Sammelantragsfrist und Sperrfristen. Die agronomische Abfolge dazwischen bestimmt die Kultur, nicht die Vorliebe."
      ],
      [
        "Warum hängen Behandlungstermine an Wachstumsstadien statt an Daten?",
        "Weil ein Fungizid oder Herbizid nur in einem engen Fenster um ein bestimmtes Stadium wirkt, und weil die Zulassung die Anwendung häufig ausdrücklich an Stadien bindet. Läuft die Saison zwei Wochen früher, wandern die Termine zwei Wochen mit — deshalb hängt die Vorlage sie an die Stadienbalken."
      ],
      [
        "Was sind die Sperrfristen der Düngeverordnung und wie planen wir mit ihnen?",
        "Es sind gesetzlich festgelegte Zeiträume, in denen stickstoff- oder phosphathaltige Düngemittel nicht ausgebracht werden dürfen — auf Ackerland im Kern zwischen der Ernte der letzten Hauptfrucht und dem Ende des Januars, auf Grünland in einem abweichenden Zeitraum, mit weiteren Einschränkungen auf gefrorenem, überschwemmtem oder schneebedecktem Boden. Weil sie datumsfest sind, sind sie die planbarste Restriktion des Jahres: Zeichnen Sie sie als Sperrbalken und legen Sie Herbst- und Frühjahrsgaben dagegen an. Die genauen Daten und die Abweichungen für einzelne Kulturen prüfen Sie bitte in der geltenden Fassung und bei Ihrer Landwirtschaftskammer."
      ],
      [
        "Was gilt zusätzlich in roten Gebieten?",
        "In nitratbelasteten Gebieten kommen verschärfte Auflagen hinzu, typischerweise eine Absenkung des ermittelten Düngebedarfs, verlängerte Sperrfristen und Vorgaben zur Begrünung. Weil die Ausweisung dieser Gebiete durch die Länder erfolgt und sich ändern kann, gehört sie als eigene Prüfzeile in die Winterplanung und nicht in eine Fußnote — sie verändert sowohl die Mengen als auch die Termine."
      ],
      [
        "Was begrenzt die Erntegeschwindigkeit?",
        "Meist Trocknung und Lagerung, nicht die Drescherleistung. Ist der Durchsatz niedriger als die Rate, mit der Korn ankommt, muss langsamer gedroschen werden — deshalb gehört der Trocknungsbalken neben die Erntebalken."
      ],
      [
        "Wann sollten Betriebsmittel und Lohnunternehmen gebucht werden?",
        "Über den Winter, deutlich vor Öffnung des Fensters. Verfügbarkeit von Saatgut, Pflanzenschutzmitteln und Spezialtechnik ist regional und wird mit Saisonbeginn schnell knapp; eine späte Buchung verkürzt Ihr Fenster faktisch."
      ],
      [
        "Ist die Vorlage für Anbau und Ernte kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung und ohne Wasserzeichen."
      ]
    ]
  },
  'gym-opening-timeline': {
    card: "Mietvertrag, Ausbau, Gerätelieferzeiten, Gründungsmitglieder-Vorverkauf, Eröffnung.",
    h1: "Zeitplan für die Eröffnung eines Fitnessstudios",
    metaTitle: "Zeitplan Fitnessstudio-Eröffnung",
    metaDesc: "Kostenloser Zeitplan für die Studioeröffnung: Ausbau, Gerätelieferzeiten, Vorverkauf an Gründungsmitglieder, Trainer-Lizenzen, Probebetrieb, Eröffnung.",
    lead: "Eine kostenlose <strong>Vorlage für den Zeitplan einer Fitnessstudio-Eröffnung</strong>, geordnet um das, was tatsächlich entscheidet, ob ein Studio gut eröffnet: den Vorverkauf. Mitgliedschaften werden Monate vor der Öffnung verkauft, also laufen Marke, Website, Bauzaunwerbung und die Kampagne für Gründungsmitglieder vor dem Ausbau und nicht dahinter — und die Zielzahl an Gründungsmitgliedern ist ein Tor für die Eröffnungsentscheidung und keine Marketingzugabe. Dahinter: Mietvertrag, Gewerbeanmeldung und gegebenenfalls eine Nutzungsänderung, ein Ausbau mit echten Anforderungen an Deckenlast und Schallschutz, Geräte mit langen Fertigungsvorläufen, Trainerqualifikation, die vor der Montage nicht beginnen kann, und ein Kursplan, der geprobt werden muss.",
    intro: "Ein Studio, das mit leerer Mitgliederliste öffnet, ist ab Woche eins in Schwierigkeiten. Die Vorlage stellt das Marketing deshalb vor den Bau und nicht dahinter:",
    phases: [
      [
        "Konzept, Standort und Mietvertrag",
        "Format- und Einzugsgebietsanalyse, Finanzmodell und Beitragsstaffel, Standortsuche und Auswahl, Absichtserklärung und Unterzeichnung des Gewerbemietvertrags sowie Finanzierung, Rechtsform, Gewerbeanmeldung beim Gewerbeamt und die Betriebshaftpflichtversicherung. <em>Meilenstein: Mietvertrag unterzeichnet.</em>"
      ],
      [
        "Planung, Genehmigungen und Ausbau",
        "Flächenaufteilung und Zonierung, Bauantrag und Nutzungsänderung, wo die bisherige Nutzung eine andere war, Nachweis der Deckenlast im Freihantelbereich und Schallschutzkonzept, Rückbau und Rohinstallation der Technik, Umkleiden, Sanitär und Entwässerung, danach Fallschutzboden, Spiegel und Studioausbau. <em>Meilenstein: Ausbau im Wesentlichen fertig.</em>"
      ],
      [
        "Gerätebeschaffung und Montage",
        "Spezifikation und Angebote, frühe Bestellung von Ausdauer- und Kraftgeräten, Fertigung und Transport als Langläufer, Lieferung von Rig und Freihantelbereich, Aufbau und Verankerung, danach die sicherheitstechnische Abnahme und das Anlagenverzeichnis. <em>Meilenstein: Trainingsfläche ausgestattet und sicher nutzbar.</em>"
      ],
      [
        "Marke, Marketing und Vorverkauf an Gründungsmitglieder",
        "Markenauftritt und Beschilderung, Website, Buchungs-App und Zahlungsanbindung mit Lastschriftmandat, Bauzaunwerbung und lokale Pressearbeit für die Warteliste, danach der Start des Vorverkaufs, der monatelang läuft, während die Fläche noch Baustelle ist. <em>Meilensteine: Vorverkauf gestartet, Zielzahl Gründungsmitglieder erreicht.</em>"
      ],
      [
        "Personal, Qualifikation und Programm",
        "Gewinnung von Studioleitung und Trainerinnen und Trainern, Prüfung der Trainer-Lizenzen und der Berufshaftpflicht, Anmeldung bei der zuständigen Berufsgenossenschaft, Geräteeinweisung, Erste-Hilfe-Ausbildung und Notfallübung, der Kursplan mit zugeordneten Übungsleitern und dessen Probelauf. <em>Meilenstein: Team betriebsbereit.</em>"
      ],
      [
        "Abnahmen, Probebetrieb und Eröffnung",
        "Brandschutzabnahme und Nutzungsfreigabe, Reinigung, Shop und Automaten, Zutrittskontrolle und Mitgliedsausweise, eine Probewoche für Gründungsmitglieder, Mängelabarbeitung, danach der Eröffnungstag und die erste Auswertung der Kündigungsquote. <em>Meilensteine: öffentliche Eröffnung, eingeschwungener Betrieb.</em>"
      ]
    ],
    callout: "Der Vorverkauf ist der Kern. Die Wirtschaftlichkeit eines Studios hängt ab Monat eins an der Mitgliederzahl, und Mitgliedschaften werden verkauft, lange bevor jemand das Gebäude nutzen kann — Marke, Website, Zahlungsanbindung und die Kampagne für Gründungsmitglieder müssen also live sein, während die Fläche noch eingezäunt und staubig ist. Zeichnen Sie diese Balken vor die Fertigstellung des Ausbaus und behandeln Sie die Zielzahl der Gründungsmitglieder als Tor für die Eröffnungsentscheidung: Fehlt die Zahl, ist die richtige Antwort meist mehr Vorverkaufswochen und kein Eröffnungstag vor leerer Fläche. Dahinter liegen die Geräte mit Fertigungsvorläufen in Monaten, und Trainerqualifikation wie Kursprobe können erst beginnen, wenn die Technik verankert ist. Und prüfen Sie früh die baurechtliche Seite: Kommt aus Ihrer Fläche und der geplanten Belegung eine Versammlungsstätte im Sinne der Versammlungsstättenverordnung Ihres Landes, ändern sich Rettungswege, Brandschutz und Abnahme grundlegend — das ist eine Planungsfrage für den Monat des Mietvertrags, nicht für den Monat vor der Eröffnung.",
    customize: [
      "Starten Sie den Vorverkaufsbalken so früh, wie Zahlungsanbindung und Vertragsbedingungen es erlauben, und lassen Sie ihn parallel zum Ausbau laufen. Beginnt er nach der Übergabe, ist das Gründungsmitglieder-Fenster vollständig verloren.",
      "Setzen Sie die Zielzahl der Gründungsmitglieder als ausdrücklichen Meilenstein mit einer Zahl und entscheiden Sie vorab, was bei Verfehlung passiert — den Vorverkauf zu verlängern ist eine Entscheidung, kein Scheitern.",
      "Ziehen Sie die Gerätebestellung vor die Ausbaubalken. Fertigung und Transport laufen häufig drei bis vier Monate, und nichts an einem fertigen Gebäude verkürzt sie.",
      "Behalten Sie Deckenlast und Schallschutz als eigenen Planungsbalken. Freihantelbereiche und Kursräume über oder neben anderen Mietern sind die häufigste späte und teure Überraschung im Studioausbau.",
      "Legen Sie eine eigene Zeile für die Klärung an, ob Ihre Fläche als Versammlungsstätte einzustufen ist, und führen Sie sie vor die Ausbauplanung. Die Antwort verändert Rettungswege, Brandschutz und Abnahmeweg.",
      "Takten Sie Trainerqualifikation und Geräteeinweisung nach der Montage, nicht davor. Niemand wird auf Geräten eingewiesen, die noch in Kisten stehen.",
      "Ergänzen Sie einen Balken für die Kursprobe mit echtem Kursplan und echten Übungsleitern. Es ist der einzige Testlauf dessen, wofür Mitglieder tatsächlich kommen."
    ],
    tips: [
      "<strong>Verkaufen Sie, bevor Sie bauen.</strong> Ein Bauzaun mit QR-Code und Gründungsmitglieder-Angebot wandelt weit besser als eine Anzeige in der Eröffnungswoche, und er bringt Monate früher Geld und ein echtes Nachfragesignal.",
      "<strong>Machen Sie das Vorverkaufsangebot befristet und ehrlich.</strong> Gründungsmitglieder-Preise wirken, weil sie später wirklich geschlossen werden; ein zweiter Rabatt im zweiten Monat lehrt alle, auf das nächste Angebot zu warten.",
      "<strong>Tage der offenen Baustelle funktionieren.</strong> Menschen unterschreiben auf einer Baustellenführung bereitwilliger als auf einer Website, und es kostet nichts als ein paar Helme und einen Samstag.",
      "<strong>Legen Sie den Eröffnungstag nicht auf eine Abnahme im ersten Anlauf.</strong> Brandschutz- und Nutzungsfreigabe brauchen häufig eine Nachbegehung, und ein Eröffnungstermin ohne Puffer davor wird zu Rückerstattungen und Entschuldigungen.",
      "<strong>Testen Sie Zutrittskontrolle und Abrechnung im Probebetrieb mit echten Mitgliedern.</strong> Türsysteme, Schließfächer und Lastschriften scheitern auf Arten, die erst in der Menge auftreten, und Gründungsmitglieder sind ein nachsichtiges Publikum dafür.",
      "<strong>Terminieren Sie die erste Kündigungsauswertung vor der Eröffnung.</strong> Die Kündigungen des ersten Monats sagen mehr über das Geschäft als die Vorverkaufszahl, und niemand terminiert sie nach dem Start, wenn sie nicht schon im Plan steht."
    ],
    faq: [
      [
        "Wie lange dauert die Eröffnung eines Fitnessstudios?",
        "Etwa elf bis zwölf Monate vom Konzept bis zum Eröffnungstag in angemieteter Fläche, und das nutzt die Vorlage. Der Ausbau sind wenige Monate; Mietvertrag, Genehmigungen, Gerätelieferzeiten und die Vorverkaufskampagne machen den Rest."
      ],
      [
        "Wann sollte der Mitgliedervorverkauf beginnen?",
        "Sobald Marke, Website und Zahlungsanbindung stehen und der Eröffnungstermin glaubwürdig ist — typischerweise drei bis vier Monate vor der Eröffnung, während die Fläche noch Baustelle ist. Genau deshalb lässt die Vorlage den Vorverkaufsbalken parallel zum Ausbau laufen."
      ],
      [
        "Warum ist die Zahl der Gründungsmitglieder ein Tor für die Eröffnung?",
        "Weil ein Studio mit zu wenigen Mitgliedern bei Eröffnung sein erstes Jahr kaum finanziert. Die Zielzahl als Meilenstein zu führen erzwingt eine ausdrückliche Entscheidung — Vorverkauf verlängern oder trotzdem öffnen — statt das Datum stillschweigend entscheiden zu lassen."
      ],
      [
        "Welche Anmeldungen und Genehmigungen braucht ein Studio in Deutschland?",
        "Mindestens die Gewerbeanmeldung beim Gewerbeamt, die Anmeldung bei der zuständigen Berufsgenossenschaft und, sobald Sie Personal beschäftigen, die üblichen sozialversicherungsrechtlichen Meldungen. Baurechtlich hängt es an der Fläche: Weicht die geplante Nutzung von der genehmigten ab, brauchen Sie eine Nutzungsänderung, und je nach Größe und Belegung kann die Versammlungsstättenverordnung des Landes greifen, was Rettungswege, Brandschutz und Abnahme verändert. Klären Sie das mit Bauamt und Planer vor Unterzeichnung des Mietvertrags, nicht danach."
      ],
      [
        "Wie weit im Voraus müssen Geräte bestellt werden?",
        "Drei bis vier Monate sind für Fertigung und Transport von Ausdauer- und Kraftgeräten üblich, Rigs können länger dauern. Die Bestellung muss während der Planung erfolgen und nicht nach dem Ausbau, sonst wird die Montage zum kritischen Pfad."
      ],
      [
        "Welche Qualifikation brauchen die Trainerinnen und Trainer?",
        "Der Begriff Fitnesstrainer ist in Deutschland nicht geschützt, in der Praxis erwarten Mitglieder und Versicherer aber eine anerkannte Trainer-Lizenz, dazu eine gültige Erste-Hilfe-Ausbildung und eine Berufshaftpflicht. Werden Kurse mit Präventionscharakter angeboten, verlangen die Krankenkassen für eine Bezuschussung eigene Qualifikationsnachweise. Prüfen Sie die Nachweise vor der Einstellung und legen Sie die Geräteeinweisung hinter die Montage."
      ],
      [
        "Ist die Vorlage für die Studioeröffnung kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung und ohne Wasserzeichen."
      ]
    ]
  },
  'iso-45001-certification-plan': {
    card: "Gefährdungsbeurteilung, Beteiligung der Beschäftigten, Ereignisnachweise, Stufe 1 und 2.",
    h1: "Projektplan für die ISO-45001-Zertifizierung",
    metaTitle: "ISO 45001 — Zertifizierungsplan",
    metaDesc: "Kostenloser Plan zur ISO-45001-Zertifizierung: Gefährdungsbeurteilung, Beteiligung der Beschäftigten, Ereignisaufzeichnungen, Stufe-1- und Stufe-2-Audit.",
    lead: "Eine kostenlose <strong>Projektplan-Vorlage für die ISO-45001-Zertifizierung</strong>, die Konsultation und Beteiligung der Beschäftigten als terminierte Arbeit auf das Diagramm setzt, weil die Norm sie als Anforderung behandelt und nicht als Kommunikationsgeste. Das zweite Rückgrat ist die Gefährdungsbeurteilung: Ziele, Ablauflenkung und Schulung leiten sich daraus ab. Die Auditmechanik hat dieselbe zweistufige Form wie der <a href=\"/de/templates/iso-9001-certification-plan.html\">ISO-9001-Zertifizierungsplan</a>, der <a href=\"/de/templates/iso-14001-certification-plan.html\">ISO-14001-Zertifizierungsplan</a> und der <a href=\"/de/templates/iso-27001-certification-plan.html\">ISO-27001-Zertifizierungsplan</a>. Wichtig für deutsche Betriebe: Das Zertifikat tritt nicht an die Stelle der Pflichten aus Arbeitsschutzgesetz, Arbeitssicherheitsgesetz und den Vorschriften Ihrer Berufsgenossenschaft — es baut auf ihnen auf.",
    intro: "Beachten Sie, dass der Beteiligungsbalken fast über die volle Länge läuft und dass sich die Phase mit den Ereignisaufzeichnungen nicht stauchen lässt. Beides ist Absicht:",
    phases: [
      [
        "Anwendungsbereich, Kontext und Gap-Analyse",
        "Grenzen des Arbeitsschutzmanagementsystems, die Beschäftigten und weiteren interessierten Parteien, eine Gap-Analyse gegen die Norm, die Arbeitsschutzpolitik sowie die Auswahl einer bei der Deutschen Akkreditierungsstelle akkreditierten Zertifizierungsstelle — der Moment, in dem beide Audittermine gebucht werden. <em>Meilenstein: Anwendungsbereich und Politik freigegeben.</em>"
      ],
      [
        "Gefährdungsbeurteilung und Risikobewertung",
        "Der Motor des Systems und zugleich die Pflicht aus § 5 Arbeitsschutzgesetz: Tätigkeiten und Arbeitsplätze erfassen, Gefährdungen im Regel- wie im Sonderbetrieb ermitteln, das Maßnahmenrangfolgeprinzip anwenden, psychische Belastungen einbeziehen und parallel das Verzeichnis der rechtlichen und sonstigen Anforderungen aufbauen — Arbeitsschutzgesetz, Verordnungen und die Vorschriften der Deutschen Gesetzlichen Unfallversicherung. <em>Meilenstein: Gefährdungsbeurteilungen und Rechtsverzeichnis freigegeben.</em>"
      ],
      [
        "Beteiligung der Beschäftigten und betriebliche Gremien",
        "Terminiert, nicht unterstellt. Sicherheitsbeauftragte benannt, der Arbeitsschutzausschuss nach § 11 Arbeitssicherheitsgesetz mit Geschäftsordnung und vierteljährlichem Sitzungsrhythmus, die Bestellung von Fachkraft für Arbeitssicherheit und Betriebsarzt nach dem Arbeitssicherheitsgesetz, die Einbindung des Betriebsrats über seine Mitbestimmungsrechte im Arbeitsschutz, Konsultation zur Gefährdungsbeurteilung und zu den Zielentwürfen sowie ein ausdrücklicher Blick darauf, was Beschäftigte an der Beteiligung hindert. <em>Meilenstein: Beteiligungsstrukturen arbeiten.</em>"
      ],
      [
        "Ziele, Ablauflenkung und Notfallvorsorge",
        "Ziele, abgeleitet aus den beurteilten Risiken, mit Kennzahlen und benannten Verantwortlichen, Betriebsanweisungen für Tätigkeiten mit hohem Risiko, Erlaubnisscheinverfahren und Fremdfirmenkoordination, Unterweisungen nach § 12 Arbeitsschutzgesetz und Einweisung neuer Beschäftigter, arbeitsmedizinische Vorsorge sowie die Räumungs- und Notfallübung. <em>Meilenstein: Ablauflenkung und Übung abgeschlossen.</em>"
      ],
      [
        "Betreiben, Unfälle und Beinaheereignisse aufzeichnen",
        "Die Phase, die sich nicht verkürzen lässt: das System lange genug betreiben, dass Unfallanzeigen, das Verbandbuch, Meldungen über Beinaheereignisse, Untersuchungen, abgeschlossene Korrekturmaßnahmen und eine Bewertung der Rechtskonformität tatsächlich zum Stichprobenziehen vorliegen. <em>Meilenstein: Ereignisaufzeichnungen verfügbar.</em>"
      ],
      [
        "Internes Audit, Managementbewertung und zweistufiges Audit",
        "Das interne Audit und seine Korrekturmaßnahmen, die Managementbewertung, danach Stufe 1, das Zeitfenster für Korrekturmaßnahmen und Stufe 2. <em>Meilenstein: ISO-45001-Zertifikat erteilt.</em>"
      ]
    ],
    callout: "Die Beteiligung ist der Punkt, an dem sich ISO 45001 am stärksten von den anderen Managementsystemnormen unterscheidet, und sie ist das, was Pläne am häufigsten zu einem Aushang schrumpfen lassen. Die Norm erwartet, dass Beschäftigte — ausdrücklich auch nicht führende Beschäftigte — zu bestimmten Dingen konsultiert werden und sich beteiligen: Gefährdungsermittlung, Risikobewertung, Festlegung der Maßnahmen, Untersuchung von Ereignissen. Das sind Sitzungen, Protokolle, benannte Personen und Nachweise, und das gehört mit Terminen auf das Diagramm. In Deutschland haben Sie dafür bereits einen Rahmen, den Sie nutzen statt daneben zu bauen: den Arbeitsschutzausschuss, die Sicherheitsbeauftragten, die Fachkraft für Arbeitssicherheit und den Betriebsarzt — und den Betriebsrat, dessen Mitbestimmung im Arbeitsschutz kein Beiwerk ist. Die zweite Falle ist der Zeitraum, der Aufzeichnungen erzeugt. Stufe 2 zieht Stichproben aus Unfallmeldungen, Beinaheereignissen, Untersuchungen und geschlossenen Maßnahmen; beginnt Ihre Meldekultur drei Wochen vor dem Audit, gibt es nichts zu ziehen und keinen Verlauf zu zeigen. Beginnen Sie früh und werten Sie eine steigende Zahl gemeldeter Beinaheereignisse als Erfolg, nicht als Misserfolg.",
    customize: [
      "Buchen Sie die Zertifizierungsstelle früh und legen Sie den Termin für Stufe 2 fest; alles davor ist danach ein Countdown und keine Schätzung.",
      "Erweitern Sie die Zeilen zur Gefährdungsbeurteilung auf eine Zeile je Standort, Bereich oder Tätigkeit mit hohem Risiko — eine einzelne Zeile verbirgt den tatsächlichen Aufwand.",
      "Legen Sie den Sitzungsrhythmus des Arbeitsschutzausschusses auf Ihren eigenen Takt, mindestens aber vierteljährlich, und lassen Sie den Balken über Stufe 2 hinauslaufen; das Audit sucht Kontinuität, keinen Schub.",
      "Lassen Sie mindestens sechs Wochen zwischen Stufe 1 und Stufe 2, damit die dort aufgenommenen Korrekturmaßnahmen wirklich geschlossen werden können.",
      "Verlängern Sie die Betriebsphase, wenn Ihre Ereigniszahlen niedrig sind — Sie brauchen genug Aufzeichnungen, damit ein Verlauf sichtbar wird.",
      "Ergänzen Sie Zeilen für die Besichtigung durch die Aufsichtsperson der Berufsgenossenschaft, für wiederkehrende Prüfungen befähigter Personen und für arbeitsmedizinische Vorsorgetermine, die in das Fenster fallen — sie konkurrieren um dieselben Personen.",
      "Nehmen Sie die psychische Belastung als eigene Zeile auf. Sie ist Teil der Gefährdungsbeurteilung nach dem Arbeitsschutzgesetz, sie braucht eine Erhebungsmethode und die Beteiligung des Betriebsrats, und sie ist die am häufigsten fehlende Zeile in deutschen Gefährdungsbeurteilungen."
    ],
    tips: [
      "<strong>Terminieren Sie die Beteiligung, unterstellen Sie sie nicht.</strong> Benannte Vertretungen, ein Sitzungsrhythmus und Protokolle sind Nachweise; eine Intranetseite ist keiner.",
      "<strong>Decken Sie den Sonderbetrieb ab.</strong> Instandhaltung, Stillstände, Fremdfirmentätigkeiten und Notfälle sind die Stellen, an denen Gefährdungsbeurteilungen am sichtbarsten dünn sind.",
      "<strong>Wenden Sie die Maßnahmenrangfolge ausdrücklich an.</strong> Die auditierende Person wird fragen, warum Sie persönliche Schutzausrüstung gewählt haben statt Beseitigung oder Ersatz, und erwartet eine dokumentierte Antwort.",
      "<strong>Fördern Sie das Melden von Beinaheereignissen früh.</strong> Es sind genau die Aufzeichnungen, aus denen Stufe 2 Stichproben zieht, und sie sammeln sich ehrlich nur über Monate an.",
      "<strong>Nutzen Sie den Arbeitsschutzausschuss als Nachweisquelle.</strong> Er existiert ohnehin gesetzlich, tagt vierteljährlich und produziert Protokolle — ein paralleles Beteiligungsgremium für das Audit aufzubauen erzeugt doppelte Arbeit und widersprüchliche Aufzeichnungen.",
      "<strong>Halten Sie die vier ISO-Normen auseinander.</strong> ISO 45001, ISO 9001, ISO 14001 und ISO 27001 teilen eine gemeinsame Grundstruktur und lassen sich gemeinsam auditieren, sind aber vier getrennte akkreditierte Zertifizierungen mit unterschiedlichem Inhalt."
    ],
    faq: [
      [
        "Wie lange dauert eine ISO-45001-Zertifizierung?",
        "Üblicherweise zehn bis sechzehn Monate aus dem Stand, die Vorlage nutzt rund siebzehn Monate. Was sich nicht stauchen lässt, ist vorn die Arbeit an Gefährdungsbeurteilung und Rechtsverzeichnis und hinten der Betriebszeitraum, der Unfall- und Beinaheereignisaufzeichnungen für die Stichprobe erzeugt."
      ],
      [
        "Ersetzt ISO 45001 die Pflichten aus dem Arbeitsschutzgesetz?",
        "Nein, und das ist die wichtigste Klarstellung für deutsche Betriebe. Gefährdungsbeurteilung nach § 5, Unterweisung nach § 12, die Bestellung von Fachkraft für Arbeitssicherheit und Betriebsarzt nach dem Arbeitssicherheitsgesetz, der Arbeitsschutzausschuss, die Unfallmeldung an die Berufsgenossenschaft und die Vorschriften der Deutschen Gesetzlichen Unfallversicherung gelten unabhängig davon, ob Sie zertifiziert sind. ISO 45001 ist eine freiwillige Norm, die diese Pflichten in ein Managementsystem einordnet und überprüfbar macht — sie hebt keine davon auf und ersetzt keine Aufsicht."
      ],
      [
        "Warum wird die Beteiligung der Beschäftigten als echte Arbeit terminiert?",
        "Weil die Norm sie verlangt. ISO 45001 fordert, Beschäftigte einschließlich nicht führender Beschäftigter zu konsultieren und ihre Beteiligung zu ermöglichen — bei Gefährdungsermittlung, Risikobewertung, Festlegung von Maßnahmen und Untersuchung von Ereignissen — und Hindernisse für die Beteiligung abzubauen. Das bedeutet Vertretungen, ein Gremium, einen Sitzungsrhythmus und Aufzeichnungen, alles mit Terminen. Deshalb gibt die Vorlage dem Balken statt einer Kommunikationszeile."
      ],
      [
        "Welche Rolle hat der Betriebsrat?",
        "Eine starke. Im Arbeitsschutz hat der Betriebsrat Mitbestimmungsrechte nach dem Betriebsverfassungsgesetz, unter anderem bei Regelungen über den Gesundheitsschutz im Rahmen gesetzlicher Vorschriften und bei der Ausgestaltung der Gefährdungsbeurteilung. Praktisch heißt das: Methode und Instrumente der Beurteilung, Unterweisungskonzepte und Meldesysteme werden mit ihm vereinbart, häufig in einer Betriebsvereinbarung. Planen Sie diese Abstimmung als eigene Balken vor der Einführung ein — nachträglich eingeführte Systeme ohne Beteiligung sind der klassische Grund für Verzögerungen kurz vor Stufe 2."
      ],
      [
        "Worin unterscheidet sich ISO 45001 von ISO 9001, ISO 14001 und ISO 27001?",
        "Sie teilen dieselbe Grundstruktur für Managementsysteme und dieselbe zweistufige Auditmechanik, der Inhalt unterscheidet sich vollständig: ISO 45001 ist Arbeits- und Gesundheitsschutz, ISO 9001 Qualität, ISO 14001 Umwelt, ISO 27001 Informationssicherheit. Alle vier sind eigenständige akkreditierte Zertifizierungen mit eigenem Anwendungsbereich und eigenem Zertifikat; Nachweise für eine erfüllen nicht die andere. Beachten Sie außerdem, dass SOC 2 ein Prüfungsbericht nach dem Standard des amerikanischen Wirtschaftsprüferverbands AICPA ist und überhaupt keine ISO-Norm — siehe die <a href=\"/de/templates/soc2-compliance-timeline.html\">SOC-2-Zeitplanvorlage</a>, falls Sie das brauchen."
      ],
      [
        "Können wir ein integriertes Managementsystem über mehrere Normen führen?",
        "Ja. Ein integriertes Managementsystem führt die gemeinsamen Kapitel — Politik, Kontext, internes Audit, Managementbewertung, dokumentierte Information — einmal statt viermal, und Zertifizierungsstellen auditieren sie häufig in einem kombinierten Besuch. Es verschmilzt die Zertifizierungen aber nicht: Sie halten weiterhin getrennte Zertifikate gegen getrennte Normen mit getrennten Anwendungsbereichen, und die normspezifischen Inhalte bleiben ebenfalls getrennt."
      ],
      [
        "Wie viele Ereignisaufzeichnungen brauchen wir vor Stufe 2?",
        "Es gibt keine feste Zahl, aber die auditierende Person sucht Nachweise, dass der Prozess genutzt wird und Feststellungen zu geschlossenen Maßnahmen führen. Ein System ganz ohne gemeldete Beinaheereignisse liest sich als Meldeproblem und nicht als sicherer Betrieb. Lassen Sie das Meldewesen mehrere Monate vor Stufe 2 laufen, damit ein Verlauf, einige Untersuchungen und einige verifizierte Korrekturmaßnahmen vorliegen."
      ],
      [
        "Ist die Vorlage für ISO 45001 kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung und ohne Wasserzeichen."
      ]
    ]
  },
  'gdpr-compliance-timeline': {
    card: "Verarbeitungsverzeichnis zuerst, dann Rechtsgrundlagen, Löschfristen, Betroffenenrechte.",
    h1: "Zeitplan für die Umsetzung der Datenschutz-Grundverordnung",
    metaTitle: "DSGVO-Umsetzung — Zeitplan",
    metaDesc: "Kostenloser DSGVO-Zeitplan: Verarbeitungsverzeichnis zuerst, dann Rechtsgrundlage, Löschkonzept, Drittlandtransfers, geübter Auskunfts- und Meldeprozess.",
    lead: "Eine kostenlose <strong>Vorlage für den Zeitplan zur Umsetzung der Datenschutz-Grundverordnung</strong>, gebaut für ein Programm, das einen verteidigungsfähigen Zustand erreicht und dann weiterläuft, statt fertig zu werden. Der Ordnungsgedanke: Das Verzeichnis von Verarbeitungstätigkeiten kommt zuerst — Rechtsgrundlage, Löschfristen, Übermittlungsmechanismen und Datenschutz-Folgenabschätzungen leiten sich alle daraus ab, dass Sie wissen, was Sie mit personenbezogenen Daten tatsächlich tun. Die beiden extern getakteten Uhren — die Frist für Betroffenenanfragen und die Meldefrist bei Datenschutzverletzungen — stehen als Prozesse auf dem Diagramm, die geübt werden, bevor sie jemand braucht. Ergänzend zur Verordnung gilt in Deutschland das Bundesdatenschutzgesetz, und zuständig ist in der Regel die Datenschutzaufsichtsbehörde des Landes, in dem Ihre Hauptniederlassung liegt.",
    intro: "Der Balken für das Verarbeitungsverzeichnis ist das Tor für fast alles danach, und die beiden Übungszeilen gibt es, weil ein Prozess, den niemand durchlaufen hat, kein Prozess ist:",
    phases: [
      [
        "Programmaufsatz und Abgrenzung",
        "Verantwortliche Zuständigkeit, die Bestellung eines Datenschutzbeauftragten, wo Verordnung oder Bundesdatenschutzgesetz sie verlangen, die Einordnung je Tätigkeit als Verantwortlicher oder Auftragsverarbeiter, welche Gesellschaften und Länder im Anwendungsbereich liegen, die Feststellung der federführenden Aufsichtsbehörde, eine Reifegradbewertung und das Steuerungsgremium. <em>Meilenstein: Anwendungsbereich und Rollen geklärt.</em>"
      ],
      [
        "Verzeichnis von Verarbeitungstätigkeiten — das Fundament",
        "Erhebungsworkshops mit jedem Fachbereich, ein Systeminventar, die Abbildung von Verarbeitungstätigkeiten und Datenflüssen, Kennzeichnung besonderer Kategorien personenbezogener Daten und Beschäftigtendaten sowie die Abnahme des Verzeichnisses durch die Personen, denen die Verarbeitung tatsächlich gehört. <em>Meilenstein: Verarbeitungsverzeichnis als Basis festgeschrieben.</em>"
      ],
      [
        "Rechtsgrundlage, Löschkonzept und Übermittlungen",
        "Alles daraus abgeleitet: eine Rechtsgrundlage je Tätigkeit, Abwägungen, wo Sie sich auf berechtigte Interessen stützen, die Sonderregeln für den Beschäftigtenkontext nach § 26 Bundesdatenschutzgesetz, Erteilung und Widerruf von Einwilligungen, Aufbewahrungs- und Löschregeln gegen die handels- und steuerrechtlichen Aufbewahrungspflichten, Abbildung der Drittlandtransfers samt Standardvertragsklauseln und Transfer-Folgenabschätzung sowie Datenschutzhinweise, die neu aus dem geschrieben werden, was Sie wirklich tun. <em>Meilenstein: Rechtsgrundlagen und Löschkonzept freigegeben.</em>"
      ],
      [
        "Betroffenenrechte und Auskunftsfähigkeit",
        "Ein Verfahren für Anfragen, Identitätsprüfung, ein Eingangskanal, Suche und Extraktion über die Systeme hinweg, geschulte Bearbeitende und ein zeitgemessener Trockenlauf einer vollständigen Auskunft von Anfang bis Ende. <em>Meilenstein: Auskunftsprozess durchgängig getestet.</em>"
      ],
      [
        "Sicherheit und Meldebereitschaft",
        "Überprüfung der technischen und organisatorischen Maßnahmen, Erkennung und Eskalation von Verletzungen, das Verfahren zur Bewertung und zur Entscheidung über die Meldung, das Verzeichnis der Verletzungen und eine Planübung gegen die Uhr. <em>Meilenstein: Meldeprozess geübt.</em>"
      ],
      [
        "Folgenabschätzungen, Dienstleister und Dauerbetrieb",
        "Prüfkriterien und Datenschutz-Folgenabschätzungen für risikoreiche Verarbeitung, Nachverhandlung der Auftragsverarbeitungsverträge, Betriebsvereinbarungen für Systeme, die der Mitbestimmung unterliegen, Schulungen und der Änderungsprozess, der das Verzeichnis aktuell hält, wenn das Programm kein Programm mehr ist. <em>Meilenstein: verteidigungsfähiger Zustand erreicht.</em>"
      ]
    ],
    callout: "Zwei Zahlen stehen in der Verordnung selbst und sind es wert, genau wiedergegeben zu werden. Artikel 12 setzt die Frist für die Antwort auf einen Antrag einer betroffenen Person auf einen Monat ab Eingang, verlängerbar um weitere zwei Monate, wenn Anträge komplex oder zahlreich sind und die betroffene Person innerhalb des ersten Monats über die Verlängerung und deren Gründe unterrichtet wird. Artikel 33 verlangt, dass der Verantwortliche eine Verletzung des Schutzes personenbezogener Daten unverzüglich und möglichst binnen 72 Stunden, nachdem sie ihm bekannt wurde, der zuständigen Aufsichtsbehörde meldet — es sei denn, die Verletzung führt voraussichtlich nicht zu einem Risiko für die Rechte und Freiheiten natürlicher Personen; erfolgt die Meldung später, ist ihr eine Begründung der Verzögerung beizufügen. Beide Zahlen haben Bedingungen: wann die Frist beginnt, wann sie verlängert werden darf, wann keine Meldung nötig ist. Hinzu kommt eine deutsche Besonderheit, die den Zeitplan wirklich verändert: Führen Sie ein System ein, das zur Überwachung von Verhalten oder Leistung der Beschäftigten geeignet ist, hat der Betriebsrat ein Mitbestimmungsrecht nach § 87 Absatz 1 Nummer 6 Betriebsverfassungsgesetz. Praktisch heißt das, eine Betriebsvereinbarung kann die Einführung tatsächlich blockieren, bis sie geschlossen ist — sie gehört als eigener Balken vor den Rollout und nicht als Nacharbeit dahinter. Flachen Sie nichts davon zu einem Poster ab und klären Sie Ihre konkrete Lage anwaltlich statt anhand einer Zusammenfassung.",
    customize: [
      "Teilen Sie die Erhebungs- und Verzeichniszeilen auf eine Zeile je Fachbereich oder Gesellschaft auf; eine einzelne Zeile verbirgt das größte Arbeitspaket im ganzen Plan.",
      "Sind Sie Auftragsverarbeiter und nicht Verantwortlicher, bauen Sie die Phasen zu Betroffenenrechten und Meldung um Ihre Pflicht zur Unterstützung und zur Benachrichtigung Ihrer Auftraggeber herum neu auf.",
      "Legen Sie eine Zeile je Übermittlungsroute an, wenn Sie Daten in Drittländer geben — Mechanismus und Prüfung unterscheiden sich je Route und Zielland.",
      "Verlängern Sie die Phase zu den Betroffenenrechten, wenn Ihre Daten in vielen Systemen liegen; die Extraktionswerkzeuge sind fast immer der lange Balken, nicht die rechtliche Prüfung.",
      "Ergänzen Sie Zeilen für laufende Verfahren mit der Aufsichtsbehörde, vorherige Konsultationen nach Artikel 36 oder offene Beschwerden — sie überholen den Plan.",
      "Setzen Sie eine eigene Zeile für die Verhandlung von Betriebsvereinbarungen zu mitbestimmungspflichtigen Systemen und legen Sie sie vor den jeweiligen Rollout. Verhandlungen mit dem Betriebsrat haben eine echte Dauer, die nicht Ihrem Projektplan folgt.",
      "Lassen Sie die letzte Phase über den Meilenstein hinauslaufen — das Verarbeitungsverzeichnis veraltet in dem Moment, in dem ein neues System oder ein neuer Dienstleister ankommt."
    ],
    tips: [
      "<strong>Bauen Sie das Verzeichnis vor den Richtlinien.</strong> Richtlinien, die vor der Kenntnis der Verarbeitung geschrieben werden, beschreiben eine Organisation, die Sie nicht haben, und die erste Anfrage zeigt es.",
      "<strong>Messen Sie den Trockenlauf.</strong> Das nützliche Ergebnis einer Übungsanfrage ist, wie viele Tage sie gebraucht hat und wo sie hängen blieb, nicht ob Sie am Ende eine Datei erzeugt haben.",
      "<strong>Üben Sie die Meldeentscheidung, nicht nur die technische Reaktion.</strong> Das Schwierige ist die Risikobewertung und die Entscheidung, ob gemeldet werden muss, und diese Entscheidung sollten Menschen treffen, die sie schon einmal getroffen haben.",
      "<strong>Halten Sie fest, warum Sie nicht gemeldet haben.</strong> Bewerten Sie eine Verletzung als nicht meldepflichtig, sind die Begründung und ihre Dokumentation das, was die Entscheidung später trägt.",
      "<strong>Binden Sie den Betriebsrat früh ein, nicht am Ende.</strong> Ein fertig konfiguriertes System, das der Mitbestimmung unterliegt, ist eine schlechtere Verhandlungsposition als ein Konzept, und die Verzögerung trifft den Rollout, nicht die Rechtsabteilung.",
      "<strong>Klären Sie, welche Aufsichtsbehörde für Sie zuständig ist.</strong> In Deutschland sind die Aufsichtsbehörden je Land organisiert, und ihre Auslegungshinweise und Formulare unterscheiden sich — das ist eine Planungstatsache, kein Detail.",
      "<strong>Hängen Sie das Verzeichnis in den Änderungsprozess.</strong> Ein neuer Dienstleister, ein neues System oder eine neue Funktion soll das Verzeichnis routinemäßig aktualisieren, sonst bauen Sie es in zwei Jahren neu."
    ],
    faq: [
      [
        "Wie lange dauert ein DSGVO-Umsetzungsprogramm?",
        "Die Vorlage läuft rund fünfzehn Monate bis zu einem verteidigungsfähigen Zustand. Das meiste davon ist die Arbeit am Verarbeitungsverzeichnis und an der Technik hinter Betroffenenanfragen, nicht juristisches Formulieren. Und es endet dort nicht: Das Verzeichnis muss gepflegt werden, Folgenabschätzungen wiederholen sich, Dienstleister und Systeme ändern sich weiter."
      ],
      [
        "Welche Frist gilt für die Auskunft an eine betroffene Person?",
        "Artikel 12 der Verordnung setzt die Frist auf einen Monat ab Eingang des Antrags. Sie kann um weitere zwei Monate verlängert werden, wenn dies unter Berücksichtigung der Komplexität und der Anzahl der Anträge erforderlich ist, und der Verantwortliche muss die betroffene Person innerhalb eines Monats nach Eingang über die Verlängerung und die Gründe unterrichten. Die praktischen Schwierigkeiten liegen darin, wann die Frist beginnt, wie die Identität geprüft wird und wie mit offenkundig unbegründeten oder exzessiven Anträgen umzugehen ist — lassen Sie Ihre konkrete Lage anwaltlich klären."
      ],
      [
        "Was besagt die 72-Stunden-Meldefrist?",
        "Artikel 33 verlangt, dass der Verantwortliche eine Verletzung des Schutzes personenbezogener Daten unverzüglich und möglichst binnen 72 Stunden, nachdem sie ihm bekannt wurde, der zuständigen Aufsichtsbehörde meldet — es sei denn, die Verletzung führt voraussichtlich nicht zu einem Risiko für die Rechte und Freiheiten natürlicher Personen. Erfolgt die Meldung nicht binnen 72 Stunden, ist ihr eine Begründung für die Verzögerung beizufügen. Getrennt davon verlangt Artikel 34 die Benachrichtigung der betroffenen Personen, wenn die Verletzung voraussichtlich ein hohes Risiko für sie zur Folge hat. Ab wann etwas als bekannt gilt, ist eine Wertungsfrage — deshalb übt die Vorlage die Bewertung und nicht nur die technische Eindämmung."
      ],
      [
        "Welche Aufsichtsbehörde ist in Deutschland zuständig?",
        "Für nichtöffentliche Stellen ist grundsätzlich die Datenschutzaufsichtsbehörde des Landes zuständig, in dem die Niederlassung liegt; für Post- und Telekommunikationsunternehmen und für Bundesbehörden die Bundesbeauftragte oder der Bundesbeauftragte für den Datenschutz und die Informationsfreiheit. Dass die Aufsicht in Deutschland föderal organisiert ist, ist selbst eine Planungstatsache: Mehrere Standorte in mehreren Ländern können mehrere Ansprechpartner mit unterschiedlichen Formularen und Auslegungshinweisen bedeuten, und bei grenzüberschreitender Verarbeitung tritt zusätzlich die Frage der federführenden Aufsichtsbehörde hinzu."
      ],
      [
        "Wann braucht ein Unternehmen einen Datenschutzbeauftragten?",
        "Die Verordnung verlangt ihn in bestimmten Fällen, etwa bei umfangreicher regelmäßiger Überwachung oder umfangreicher Verarbeitung besonderer Kategorien. Das Bundesdatenschutzgesetz geht darüber hinaus und verlangt ihn zusätzlich, wenn in der Regel eine bestimmte Zahl von Personen ständig mit automatisierter Verarbeitung beschäftigt ist, sowie in weiteren Fällen. Weil diese Schwelle mehrfach angepasst wurde, prüfen Sie die geltende Fassung, statt sich auf eine erinnerte Zahl zu verlassen — die Bestellung selbst ist schnell, der Aufbau der Position nicht."
      ],
      [
        "Warum kommt das Verarbeitungsverzeichnis vor allem anderen?",
        "Weil Rechtsgrundlage, Aufbewahrungsfristen, Übermittlungsmechanismen, Datenschutzhinweise und Folgenabschätzungen alle Aussagen über konkrete Verarbeitungstätigkeiten sind. Ohne eine Aufstellung dieser Tätigkeiten ist jede dieser Aussagen gegen eine Annahme geschrieben. Programme, die mit einer Richtliniensammlung beginnen, bauen sie nach der Erhebung meist neu."
      ],
      [
        "Worin unterscheidet sich das von ISO 27001 oder SOC 2?",
        "Die Datenschutz-Grundverordnung ist Recht und gilt unabhängig davon, ob Sie jemand zertifiziert. ISO 27001 ist eine akkreditierte Zertifizierung gegen eine Norm für Informationssicherheitsmanagement, und SOC 2 ist ein Prüfungsbericht nach dem Standard des amerikanischen Wirtschaftsprüferverbands AICPA — keines von beidem ist eine Feststellung rechtlicher Konformität. Die Sicherheitsmaßnahmen überschneiden sich stark, die Nachweise sind also wiederverwendbar, aber ein Zertifikat ist keine Verteidigung. Siehe den <a href=\"/de/templates/iso-27001-certification-plan.html\">ISO-27001-Zertifizierungsplan</a> und die <a href=\"/de/templates/soc2-compliance-timeline.html\">SOC-2-Zeitplanvorlage</a>, wenn Sie das parallel betreiben."
      ],
      [
        "Ist die DSGVO-Vorlage kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung und ohne Wasserzeichen. Diese Vorlage ist eine Planungshilfe und keine Rechtsberatung."
      ]
    ]
  },
  'customer-onboarding-plan': {
    card: "Kickoff, Kundenabhängigkeiten, schneller erster Nutzen, Daten, Schulung, Go-live.",
    h1: "Projektplan für das Kunden-Onboarding",
    metaTitle: "Projektplan Kunden-Onboarding",
    metaDesc: "Kostenloser Onboarding-Plan: Kickoff, Kundenabhängigkeiten mit Terminen, schneller erster Nutzen, Datenmigration, Schnittstellen, Schulung, Go-live.",
    lead: "Eine kostenlose <strong>Projektplan-Vorlage für das Kunden-Onboarding</strong>, die ehrlich damit umgeht, wem der Terminplan gehört. Die meisten Balken unten hängen am Kunden: an seinen Daten, seinen Zugangsdaten für Schnittstellen, seiner Sicherheitsprüfung, seinen Freigaben und den Kalendern seiner Leute. Der Plan ist so geordnet, dass ein nutzbares Ergebnis früh landet — die Zeit bis zum ersten Nutzen ist die Kennzahl, die die Verlängerung vorhersagt — statt jede Konfigurationsentscheidung zu takten, bevor sich überhaupt jemand anmelden darf.",
    intro: "Die Zeilen, die dem Kunden gehören, sind als seine gekennzeichnet. Sehen Sie sich an, wie viele es sind und wo sie im Verhältnis zu Ihrer eigenen Arbeit liegen:",
    phases: [
      [
        "Übergabe aus dem Vertrieb und Kickoff",
        "Das Übergabepaket, die Erfolgskriterien und das konkrete erste Nutzenergebnis, die Projektverantwortung und die Entscheidungsbefugten auf Kundenseite, der Kickoff-Termin und die Zusagen des Kunden mit Terminen dahinter. <em>Meilenstein: Kickoff durchgeführt und Verantwortliche benannt.</em>"
      ],
      [
        "Analyse und Erfassung der Kundenabhängigkeiten",
        "Ein Durchgang durch den bisherigen Prozess, danach die ehrliche Liste: jede Zulieferung, die der Kunde schuldet, wem die Daten gehören, wer die Zugangsdaten für die Schnittstellen hält, und welche Sicherheitsprüfung, Betriebsratsbeteiligung oder Einkaufsfreigabe zwischen Ihnen und dem Produktivbetrieb steht. <em>Meilenstein: Kundenabhängigkeiten mit Terminen bestätigt.</em>"
      ],
      [
        "Schneller Weg zum ersten Nutzen",
        "Bewusst schmal. Mandanten bereitstellen, einen Ablauf konfigurieren, genug Daten von Hand laden, damit es echt wird, eine Handvoll Nutzer aufschalten und den Kunden ein echtes Ergebnis erzeugen lassen, bevor die große Arbeit beginnt. <em>Meilenstein: erster Nutzen geliefert.</em>"
      ],
      [
        "Datenmigration und Schnittstellen",
        "Die Phase, die am ehesten rutscht, weil das meiste davon dem Kunden gehört: Extraktion und Übergabe der Dateien, Feldzuordnung und Transformation, ein Probeimport mit Datenqualitätsbericht zurück an ihn, seine Bereinigungsrunde, der Schnittstellenbau und seine Sicherheitsfreigabe. <em>Meilenstein: Daten und Schnittstellen produktiv.</em>"
      ],
      [
        "Konfiguration, Schulung und Rollout",
        "Restliche Abläufe und Berechtigungen, die Konfigurationsfreigabe des Kunden, Administratorenschulung und Endanwenderschulungen, die der Kunde mit eigenen Leuten füllen muss. <em>Meilenstein: Anwender geschult und Konfiguration freigegeben.</em>"
      ],
      [
        "Go-live, Nutzung und Übergabe",
        "Bereitschaftsprüfung, Umstellung vom Altprozess, intensive Betreuung nach dem Start, Messung von Zeit bis zum ersten Nutzen und Nutzungsgrad, Abschaltung des Altsystems und Übergabe an die Kundenbetreuung. <em>Meilenstein: Onboarding geschlossen und Konto im Regelbetrieb.</em>"
      ]
    ],
    callout: "Wenn ein Onboarding zu spät läuft, liegt die Ursache fast immer vor dem Lieferteam: der Datenexport, den vorher nie jemand gemacht hat, das Zugangspasswort für die Schnittstelle bei einem externen Dienstleister, der Sicherheitsfragebogen, der in einer Warteschlange liegt, die Betriebsvereinbarung für ein System mit Leistungsbezug, die noch verhandelt wird, oder die Person, die genau in der Woche der Konfigurationsfreigabe im Urlaub ist. Das ist keine Entschuldigung für lockere Planung — es ist ein Argument dafür, diese Abhängigkeiten in den ersten zwei Wochen zu benennen, jeweils einen Namen des Kunden dahinterzuschreiben und sie in jedem Statustermin durchzugehen. Die zweite Lehre ist, mit dem Takten aufzuhören. Es gibt enormen Druck, alles zu konfigurieren, bevor der Kunde das Produkt anfasst, und das erzeugt zuverlässig eine lange stille Phase und danach einen Start, dem niemand traut. Bringen Sie im ersten Monat ein echtes Ergebnis zum Laufen, auch wenn es von Hand geladen und eng ist, und bauen Sie von etwas aus weiter, an das der Kunde schon glaubt.",
    customize: [
      "Kennzeichnen Sie jede kundenseitige Zeile deutlich und schreiben Sie eine namentlich benannte Person auf seiner Seite dahinter, keine Abteilung.",
      "Ziehen Sie den Meilenstein des ersten Nutzens vor, wenn Ihr Produkt es zulässt; vier Wochen sind ein üblicher Zielwert, und kürzer ist besser.",
      "Legen Sie eine Zeile je Schnittstelle und je Datenquelle an — ein Sammelbalken verbirgt genau die Abhängigkeiten, die rutschen werden.",
      "Nehmen Sie bei größeren Kunden Sicherheitsprüfung, Einkauf und Rechtsprüfung ausdrücklich auf; sie dauern regelmäßig länger als die technische Arbeit.",
      "Ergänzen Sie bei mitbestimmten Betrieben eine Zeile für die Beteiligung des Betriebsrats. Systeme, die Verhalten oder Leistung erfassen können, brauchen häufig eine Betriebsvereinbarung, und die ist ein echtes Tor vor dem Rollout und keine Formalie.",
      "Verlängern Sie die Bereinigungsschleife, wenn der Probeimport voraussichtlich Probleme findet; eine Runde ist für die meisten Migrationen optimistisch.",
      "Ergänzen Sie Zeilen für das Änderungsmanagement des Kunden, wenn Sie einen Prozess ersetzen, an dem Menschen hängen."
    ],
    tips: [
      "<strong>Veröffentlichen Sie einen gemeinsamen Plan, nicht Ihren Plan.</strong> Der Kunde muss seine eigenen Zeilen und Termine sehen, denn genau die bewegen sich.",
      "<strong>Definieren Sie den ersten Nutzen als ein konkretes Ergebnis.</strong> „Produktiv“ ist kein Meilenstein; „die Disposition hat den Wochenplan im Produkt erzeugt“ ist einer.",
      "<strong>Fragen Sie, wer den Export tatsächlich schon einmal gemacht hat.</strong> Die Antwort lautet oft niemand, und das ändert Ihre Schätzung mehr als jedes technische Detail.",
      "<strong>Geben Sie den Datenqualitätsbericht an den Kunden zurück.</strong> Die Bereinigung ist seine Aufgabe, und eine konkrete Liste fehlerhafter Datensätze bewegt sich schneller als die Bitte, die Daten aufzuräumen.",
      "<strong>Messen Sie die Zeit bis zum ersten Nutzen bei jedem Konto.</strong> Es ist die eine Onboarding-Kennzahl, die die spätere Nutzung vorhersagt, und sie begründet das Vorziehen statt des Taktens.",
      "<strong>Absorbieren Sie Verzug des Kunden nicht still.</strong> Zeigen Sie die Wirkung auf den Go-live-Termin, sonst lernt der Kunde, dass seine Termine folgenlos sind, und das Lieferteam bezahlt es später."
    ],
    faq: [
      [
        "Wie lange sollte ein Kunden-Onboarding dauern?",
        "Das schwankt stark mit der Menge an Daten und Schnittstellen. Die Vorlage läuft etwa fünf Monate für eine mittelständische Einführung mit Migration; ein Selbstbedienungsprodukt kann Tage brauchen. Die nützlichere Frage ist die Zeit bis zum ersten Nutzen, und die sollte unabhängig von der Gesamtdauer wenige Wochen betragen."
      ],
      [
        "Was ist die Zeit bis zum ersten Nutzen?",
        "Die verstrichene Zeit von Vertrag oder Kickoff bis zu dem Moment, in dem der Kunde ein echtes, nützliches Ergebnis aus dem Produkt zieht — keine Vorführung, keine Schulungsübung. Um diese Kennzahl ist die Vorlage gebaut, weil ein Kunde, der echten Nutzen gesehen hat, den Rest der Einführung erträgt, und einer, der ihn nicht gesehen hat, zu fragen beginnt, was er eigentlich gekauft hat."
      ],
      [
        "Warum stellt der Plan ein schmales Ergebnis nach vorn?",
        "Weil vollständige Konfiguration vor der ersten Anmeldung eine lange stille Strecke erzeugt, in der der Kunde nur die Arbeit erlebt, die er Ihnen schuldet. Ein schmaler erster Ablauf mit handgeladenen Daten schafft etwas Echtes zum Weiterbauen und bringt Missverständnisse ans Licht, solange sie billig zu beheben sind."
      ],
      [
        "Was tun wir, wenn der Kunde seine Termine reißt?",
        "Damit rechnen und dafür planen. Benennen Sie Abhängigkeit und Verantwortliche in den ersten zwei Wochen, gehen Sie die kundenseitigen Zeilen in jedem Statustermin durch und zeigen Sie die Folgewirkung auf den Go-live-Termin, statt sie still aufzufangen. Verzug still aufzufangen lehrt den Kunden, dass seine Termine nicht zählen."
      ],
      [
        "Worin unterscheidet sich das von einem Einarbeitungsplan für neue Mitarbeitende?",
        "Trotz des ähnlichen Worts ein völlig anderer Plan. Die <a href=\"/de/templates/employee-onboarding.html\">Vorlage für die Einarbeitung neuer Mitarbeitender</a> deckt die ersten Wochen einer neuen Person ab — Ausstattung, Zugänge, Vorstellungen, Einarbeitung. Diese hier deckt die Einführung eines Produkts bei einem zahlenden Kunden ab, wo der Terminplan mit einer anderen Organisation geteilt wird und das meiste Risiko auf deren Seite liegt."
      ],
      [
        "Ist die Onboarding-Vorlage kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung und ohne Wasserzeichen."
      ]
    ]
  },
  'brand-relaunch-plan': {
    card: "Namensfindung, Markenanmeldung, Identität, Produktion, Umstellungstag, langer Nachlauf.",
    h1: "Projektplan für einen Markenrelaunch",
    metaTitle: "Projektplan Markenrelaunch",
    metaDesc: "Kostenloser Plan für den Markenrelaunch: Namensfindung, Markenanmeldung beim DPMA, Identität, Produktion, gleichzeitige Umstellung und der lange Nachlauf.",
    lead: "Eine kostenlose <strong>Projektplan-Vorlage für einen Markenrelaunch</strong>, geordnet um eine harte Tatsache: Die Enthüllung ist ein Moment, und in diesem Moment muss alles, was Sie kontrollieren, gemeinsam umschalten. Website, Produktoberfläche, E-Mail-Vorlagen, Profile in sozialen Netzwerken, Beschilderung, Präsentationen, Rechnungen. Davor liegt ein Langläufer, der einen Namen spät noch töten kann — Recherche, Anmeldung und Eintragung der Marke beim Deutschen Patent- und Markenamt und gegebenenfalls beim Amt der Europäischen Union für geistiges Eigentum, mit der Widerspruchsfrist danach. Dahinter liegt ein Nachlauf aus physischen und fremden Oberflächen, die am Tag selbst nicht umschalten können und nachgehalten werden müssen.",
    intro: "Der Balken für die markenrechtliche Prüfung liegt aus gutem Grund unter der Gestaltungsarbeit, und der Nachlauf nach dem Umstellungstag ist länger, als die meisten Pläne zugeben:",
    phases: [
      [
        "Strategie, Positionierung und Namensfindung",
        "Markenaudit und Untersuchung des vorhandenen Markenwerts, Positionierung und Erzählplattform, Namensentwicklung und Auswahlliste sowie sprachliche und kulturelle Prüfung, bevor sich jemand verliebt. <em>Meilenstein: Auswahlliste für die Prüfung abgestimmt.</em>"
      ],
      [
        "Markenrecherche, Anmeldung und Eintragung",
        "Der Langläufer. Identitätsrecherche im Register des Deutschen Patent- und Markenamts, danach eine Ähnlichkeitsrecherche über die relevanten Klassen und Länder, eine anwaltliche Risikoeinschätzung, die stille Sicherung von Domains und Profilnamen, die Anmeldung nach Klassen der Nizza-Klassifikation beim Deutschen Patent- und Markenamt oder als Unionsmarke, danach die Beobachtung von Prüfung und Widerspruchsfrist. <em>Meilenstein: Name geprüft und Anmeldungen eingereicht.</em>"
      ],
      [
        "Gestaltung und Freigabe der Identität",
        "Gestaltungsrichtungen, Wort- und Bildmarke, Farbe, Typografie und Bewegung, Prüfung auf Barrierefreiheit und Lesbarkeit sowie die Freigabe, von der alles Nachgelagerte ausgeht. <em>Meilenstein: Identität freigegeben und festgeschrieben.</em>"
      ],
      [
        "Produktion der Gestaltungsmittel und Systemaufbau",
        "Zuerst Richtlinien und Medienbibliothek, danach parallele Produktion: Umbau der Website, Umfärbung der Produktoberfläche, E-Mail- und Systemnachrichten-Vorlagen, Verpackungsdruckvorlagen, Beschilderung und Fahrzeugbeschriftung. <em>Meilenstein: Kernmaterialien produziert.</em>"
      ],
      [
        "Umstellungsbereitschaft und Probelauf",
        "Die Prüfliste aller Oberflächen, die Überprüfung von Firmierung, Handelsregistereintrag, Impressum und Rechnungsangaben, Einträge bei Dritten und auf Marktplätzen, Weiterleitungen und Kontinuität der Auswertung sowie ein Probelauf in der Testumgebung vor der Freigabeentscheidung. <em>Meilenstein: Umstellung geprobt und Freigabe erteilt.</em>"
      ],
      [
        "Umstellungstag und der lange Nachlauf",
        "Die gleichzeitige Umstellung, die Ankündigung, die Übernahme der Profilnamen — danach der Teil, den Pläne vergessen: Montage der Beschilderung an allen Standorten, Verpackungswechsel nach Abverkauf der Altbestände, Oberflächen von Partnern und ein Abschlussdurchgang, der die alte Marke aufspürt. <em>Meilenstein: Nachlauf geschlossen und alte Marke abgelegt.</em>"
      ]
    ],
    callout: "Zwei Dinge bringen Markenrelaunches zu Fall. Das erste ist, ein markenrechtliches Problem zu entdecken, nachdem die Identität freigegeben ist und die Produktion läuft. Die Prüfung ist keine Formalie und sie ist nicht schnell: Eine Identitätsrecherche ist billig und rasch, eine Ähnlichkeitsrecherche über mehrere Klassen und Länder ist beides nicht. In Deutschland kommt eine Besonderheit hinzu, die Sie einplanen müssen: Das Deutsche Patent- und Markenamt prüft von Amts wegen nur absolute Schutzhindernisse, nicht ältere Rechte Dritter. Nach der Eintragung läuft eine dreimonatige Widerspruchsfrist, und ein Widerspruch kann also Monate nach der Anmeldung eintreffen, wenn Ihre Verpackung längst gedruckt ist. Legen Sie die Risikoeinschätzung vor die Gestaltungsausgaben und lassen Sie niemanden den neuen Namen extern zeigen, bevor die anwaltliche Entscheidung steht. Das zweite ist, die Enthüllung als Marketingstart zu behandeln statt als Umstellung. Eine Kampagne kann man staffeln; eine Umstellung ist ein Zustandswechsel, und eine halb umgestellte Marke — neue Website, alte Rechnungen, alte Beschilderung, alter Eintrag im App-Store — liest sich als Unternehmen, das sich nicht im Griff hat. Bauen Sie die Prüfliste nach Oberflächen, geben Sie jeder eine verantwortliche Person und akzeptieren Sie, dass die physischen und fremden nachlaufen — halten Sie sie deshalb als benannte Liste nach statt zu hoffen.",
    customize: [
      "Legen Sie eine Recherchezeile je Land und je Waren- und Dienstleistungsklasse an; Dauer und Risiko unterscheiden sich, und ein Sammelbalken verbirgt, welches Land das Problem ist.",
      "Ergänzen Sie einen eigenen Balken für die dreimonatige Widerspruchsfrist nach der Eintragung und lassen Sie ihn bewusst hinter den Umstellungstag laufen, wenn Sie nicht warten wollen — dann ist es eine bewusst getragene Restriktion und keine Überraschung.",
      "Wenn Sie auffrischen statt umbenennen, streichen Sie Namensfindung und Markenprüfung und beginnen Sie bei der Gestaltung — der Plan wird um Monate kürzer.",
      "Weiten Sie die Produktionsphase auf eine Zeile je Oberfläche aus, sobald die Inventur steht; die Zahl ist immer höher als die erste Schätzung.",
      "Ergänzen Sie Zeilen für regulierte oder vertraglich gebundene Oberflächen — Produktkennzeichnung, Zertifikate, Zulassungen, Registereintragungen —, die ihre eigenen Freigabewege haben.",
      "Prüfen Sie in einer eigenen Zeile, ob sich auch die Firmierung ändert. Handelsregisteränderung, Impressum, Pflichtangaben auf Geschäftsbriefen und Rechnungsangaben folgen dann ihrem eigenen, notariell und gerichtlich getakteten Weg und nicht Ihrem Kampagnenplan.",
      "Setzen Sie das Enthüllungsdatum erst nach der Zeile für den Probelauf und binden Sie die Ankündigungszeilen daran statt an einen Kalendermonat.",
      "Verlängern Sie den Balken für den Verpackungswechsel auf Ihre tatsächliche Lagerreichweite; er ist meist der längste Nachlaufposten und der sichtbarste."
    ],
    tips: [
      "<strong>Prüfen Sie den Namen, bevor Sie sich in ihn verlieben.</strong> Der billigste Moment, einen Namen zu verlieren, ist die Identitätsrecherche; der teuerste ist, nachdem die Verpackung gedruckt wurde.",
      "<strong>Inventarisieren Sie jede Oberfläche, die die Marke trägt.</strong> Rechnungen, Verträge, E-Mail-Signaturen, Stellenanzeigen, App-Store-Einträge und die Begrüßung am Empfang zählen alle, und keines davon steht im Kreativbriefing.",
      "<strong>Proben Sie die Umstellung.</strong> Ein Durchlauf in der Testumgebung findet das fest verdrahtete Logo, das zwischengespeicherte Symbol im Browsertab und die Vorlage eines Dritten, für die sich niemand zuständig fühlte.",
      "<strong>Schützen Sie die Sichtbarkeit in Suchmaschinen.</strong> Weiterleitungsplan und Kontinuität der Auswertung sind der Unterschied zwischen einem Relaunch und einem Neustart bei null im organischen Verkehr.",
      "<strong>Denken Sie an die Pflichtangaben.</strong> Impressum, Handelsregisternummer, Umsatzsteuer-Identifikationsnummer und die Angaben auf Geschäftsbriefen hängen an der Firmierung, nicht an der Marke — verwechseln Sie beides nicht, und ändern Sie nur, was sich wirklich ändert.",
      "<strong>Halten Sie den Nachlauf als Liste nach, nicht als Phase.</strong> Beschilderung, Verpackung und Partneroberflächen stellen über Wochen oder Monate um, und Nachlaufposten ohne Verantwortliche fallen noch ein Jahr später auf."
    ],
    faq: [
      [
        "Wie lange dauert ein Markenrelaunch?",
        "Die Vorlage läuft etwa sechzehn Monate für eine vollständige Umbenennung einschließlich Markenrecherche und Eintragung. Eine reine visuelle Auffrischung ohne Namenswechsel dauert üblicherweise vier bis acht Monate, weil die Prüfphase entfällt und die Gestaltung sofort beginnen kann."
      ],
      [
        "Warum ist die Markenprüfung der lange Balken?",
        "Weil sie den Namen freigibt und sich nicht durch mehr Personal verkürzen lässt. Identitätsrecherchen sind schnell, aber eine Ähnlichkeitsrecherche über mehrere Länder und Klassen dauert Wochen, die anwaltliche Risikoeinschätzung braucht Zeit, und nach der Anmeldung folgen Prüfung und Widerspruchsfrist, die Sie nicht steuern. Gestaltungsarbeit, die der Risikoeinschätzung vorauseilt, ist Arbeit, die Sie möglicherweise wegwerfen."
      ],
      [
        "Wie läuft die Markenanmeldung in Deutschland ab?",
        "Sie melden beim Deutschen Patent- und Markenamt in München an, mit Angabe der Waren- und Dienstleistungsklassen nach der Nizza-Klassifikation. Das Amt prüft absolute Schutzhindernisse — fehlende Unterscheidungskraft, beschreibende Angaben, Freihaltebedürfnis — aber es prüft nicht, ob ältere Rechte Dritter entgegenstehen. Nach der Eintragung und ihrer Veröffentlichung läuft eine dreimonatige Widerspruchsfrist, in der Inhaber älterer Marken Widerspruch einlegen können. Für den europaweiten Schutz melden Sie stattdessen oder zusätzlich eine Unionsmarke beim Amt der Europäischen Union für geistiges Eigentum in Alicante an. Welcher Weg passt, ist eine Frage Ihrer Märkte und gehört anwaltlich geklärt."
      ],
      [
        "Was bedeutet die Widerspruchsfrist für die Planung?",
        "Sie bedeutet, dass die Eintragung nicht das Ende des Risikos ist. Ein Widerspruch kann Monate nach der Anmeldung kommen, also potenziell zu einem Zeitpunkt, an dem Verpackung gedruckt, Beschilderung bestellt und die Website gebaut ist. Zeichnen Sie die Frist als eigenen Balken. Dann entscheiden Sie bewusst, ob Sie den Umstellungstag dahinter legen oder das Risiko tragen — beides ist vertretbar, unbewusst hineinzulaufen nicht."
      ],
      [
        "Müssen wir alles am selben Tag umstellen?",
        "Alles, was Sie kontrollieren, ja — Website, Produktoberfläche, Profilnamen, E-Mail-Vorlagen, Signaturen, Vertriebsunterlagen und die Ankündigung. Eine halbe Umstellung auf den eigenen Oberflächen wirkt wie ein Fehler und nicht wie eine Entscheidung. Physische und fremde Oberflächen sind die Ausnahme, weil sie wirklich nicht sofort umschalten können — deshalb gibt die Vorlage ihnen einen nachgehaltenen Nachlauf, statt so zu tun, als landeten sie am Tag selbst."
      ],
      [
        "Was wird bei einem Markenrelaunch meist vergessen?",
        "Die unscheinbaren Oberflächen: Rechnungs- und Vertragsvorlagen, die Firmierung dort, wo sie von der Marke abweicht, Pflichtangaben und Impressum, Einträge in App-Stores und auf Marktplätzen, Bewertungsprofile, Partnerverzeichnisse, Stellenbörsen, E-Mail-Signaturen, Fahrzeugbeschriftung und alles Gedruckte im Lager. Die Vorlage macht die Umstellungsprüfliste zu einer eigenen Zeile, weil das Erstellen dieser Inventur echte Arbeit ist."
      ],
      [
        "Wie vermeiden wir Verluste bei der Auffindbarkeit?",
        "Behandeln Sie Weiterleitungsplan, kanonische Verweise und die Kontinuität der Auswertung als startblockierende Aufgaben und nicht als Aufräumarbeit danach, und lassen Sie die alte Domain weiterleiten, statt sie aufzugeben. Ändert sich gleichzeitig die Seitenstruktur, planen Sie das mit dem <a href=\"/de/templates/website-redesign-project-plan.html\">Projektplan für den Website-Relaunch</a>, damit die Arbeit an den Adressen nicht in die Enthüllungswoche gequetscht wird."
      ],
      [
        "Ist die Vorlage für den Markenrelaunch kostenlos?",
        "Ja. Kostenlose Downloads als Excel, PowerPoint und CSV sowie kostenloses Bearbeiten online, ohne Anmeldung und ohne Wasserzeichen."
      ]
    ]
  },
};

/* Page furniture. Without this the German pages inherited the Spanish
   UI block — German content under Spanish headings, which is worse than
   no translation at all. */
const UI = {
  home: 'Start',
  templates: 'Vorlagen',
  xlsx: 'Excel (.xlsx)',
  pptx: 'PowerPoint',
  csv: 'CSV',
  edit: 'Kostenlos online bearbeiten',
  included: 'Was enthalten ist',
  customize: 'So passen Sie sie an',
  tips: 'Hinweise zur Terminplanung',
  related: 'Verwandte Vorlagen',
  browseAll: 'Alle Gantt-Diagramm-Vorlagen ansehen',
  faq: 'Häufige Fragen',
  ctaH2: 'Online planen — kostenlos',
  ctaP: 'Öffnen Sie die Vorlage im Editor, ziehen Sie die Balken auf Ihre Termine und exportieren Sie als PDF, Excel oder PowerPoint. Ohne Konto, ohne Wasserzeichen.',
  ctaBtn: 'Kostenlosen Editor öffnen',
  imgAlt: 'Vorschau der Vorlage mit den Phasen auf einer Zeitachse',
  howTo: (name) => `So verwenden Sie die Vorlage: ${name}`,
  enNote: 'Diese Vorlage ist auf Deutsch. Noch nicht übersetzte verwandte Seiten öffnen sich auf Englisch.',
};

module.exports = { T, UI };
