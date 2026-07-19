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
