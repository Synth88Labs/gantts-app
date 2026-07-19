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
