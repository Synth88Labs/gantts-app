/* ============================================================
   guides-de.js — German guides.

   Written against German search behaviour, not translated from the
   Spanish. The head terms differ in kind: German searchers overwhelmingly
   use "Gantt-Diagramm erstellen" and "Projektplan Vorlage" rather than the
   English pattern of "how to make a gantt chart", and "kostenlos" carries
   far more weight in German queries than "free" does in English ones.

   Hyphenation matters for matching: "Gantt-Diagramm" is the correct German
   compound and the dominant query form. "Gantt Diagramm" without the hyphen
   is common in queries too, so both appear naturally in body copy.

   Structure mirrors guides-es.js exactly so the renderer needs no branch.
   ============================================================ */

const G = {

'what-is-a-gantt-chart': {
  h1: 'Was ist ein Gantt-Diagramm? Aufbau, Nutzen und Grenzen',
  metaTitle: 'Was ist ein Gantt-Diagramm?',
  metaDesc: 'Was ein Gantt-Diagramm ist, aus welchen vier Bausteinen es besteht, wofür es sich eignet und wo seine Grenzen liegen.',
  date: '2026-07-19',
  lead: 'Ein <strong>Gantt-Diagramm</strong> ist ein Balkendiagramm, das Vorgänge auf einer Zeitachse darstellt: jede Zeile eine Aufgabe, jeder Balken ihre Dauer. Es beantwortet zwei Fragen, die eine Aufgabenliste nicht beantworten kann — was läuft gleichzeitig, und was verschiebt sich, wenn etwas später fertig wird.',
  figIntro: 'Vier Bausteine, aus denen jedes Gantt-Diagramm besteht:',
  sections: [
    ['Wie ein Gantt-Diagramm aufgebaut ist', `<p>Stellen Sie sich ein Tabellenblatt vor, das in der Mitte die Form wechselt. Links stehen Spalten mit Vorgangsname, Start, Ende, Dauer und Verantwortlichem. Rechts davon werden aus den Spalten Kalendertage, -wochen oder -monate. Für jeden Vorgang zieht sich ein farbiger Balken über genau die Spalten, die seinem Zeitraum entsprechen: ein zweitägiger Vorgang ist ein kurzer Balken, ein dreiwöchiger ein dreimal so langer.</p>
        <p>Von oben nach unten lesen Sie die Arbeit, von links nach rechts die Zeit. Diese eine Drehung ist der ganze Unterschied zwischen einer Terminliste und einem Terminplan — und der Grund, warum das Format seit über hundert Jahren überlebt.</p>
        <p>Fast jedes Gantt-Diagramm enthält zusätzlich eine senkrechte <strong>Heute-Linie</strong>, einen hervorgehobenen <a href="/de/blog/critical-path-method.html">kritischen Pfad</a> und einen Fortschrittsbalken innerhalb jedes Vorgangsbalkens. Alles andere ist Ausstattung.</p>`],
    ['Die vier Bausteine', `<p><strong>Vorgänge</strong> sind das Arbeitspaket selbst und haben eine Dauer. Sie tragen einen Namen mit Verb — „Rohbau abnehmen“, nicht „Rohbau“ —, einen Verantwortlichen und einen Fertigstellungsgrad.</p>
        <p><strong>Meilensteine</strong> haben die Dauer null und markieren einen Zeitpunkt: eine Freigabe, eine Übergabe, eine Entscheidung. Sie erscheinen als Raute statt als Balken. Fünf bis zehn genügen für ein mehrmonatiges Projekt; wer jeden Vorgangsabschluss zum Meilenstein erklärt, entwertet sie alle.</p>
        <p><strong>Abhängigkeiten</strong> verbinden Vorgänge und legen fest, was worauf wartet. Die weit überwiegende Mehrheit ist vom Typ Ende-Anfang: B beginnt, wenn A fertig ist. Drei weitere Arten gibt es für Sonderfälle, sie sind in den <a href="/de/blog/gantt-chart-dependencies.html">vier Verknüpfungsarten</a> beschrieben.</p>
        <p><strong>Sammelbalken</strong> fassen Vorgänge zu Phasen zusammen und übernehmen deren Termine automatisch: Der Phasenbalken beginnt mit dem frühesten und endet mit dem spätesten Vorgang darunter. Man setzt seine Termine nie von Hand — sie sind ein Ergebnis, keine Eingabe. Wer diese vier Elemente sauber trennt, hat bereits den Großteil eines belastbaren Plans.</p>`],
    ['Warum die Zeitachse den Unterschied macht', `<p>Eine Aufgabenliste sagt, <em>was</em> zu tun ist. Ein Gantt-Diagramm sagt zusätzlich <em>wann</em> und <em>in welcher Reihenfolge</em>. Damit wird sichtbar, was in einer Liste unsichtbar bleibt: dass drei Vorgänge in derselben Woche liegen und alle dieselbe Person brauchen, oder dass eine Verzögerung am Anfang das Ende um zwei Wochen verschiebt.</p>
        <p>Ein konkretes Beispiel: In einer Liste stehen „Texte schreiben“, „Bilder erstellen“ und „Layout setzen“ untereinander und wirken gleichwertig. Im Diagramm sieht man, dass Texte und Bilder parallel in Kalenderwoche 12 laufen, beide bei derselben Person liegen und das Layout erst danach beginnen kann. Die Liste ist erfüllbar, der Plan nicht — und diesen Unterschied erkennt man nur auf einer Zeitachse.</p>
        <p>Die Wahl der Zeiteinheit entscheidet dabei mit über die Lesbarkeit. Tagesspalten eignen sich für Vorhaben bis etwa acht Wochen, Wochenspalten für ein halbes bis ganzes Jahr, Monatsspalten für alles darüber. Wer ein zweijähriges Bauvorhaben in Tagesspalten darstellt, erzeugt ein Blatt, das niemand ausdruckt.</p>`],
    ['Abhängigkeiten: der eigentliche Wert', `<p>Der Nutzen eines Gantt-Diagramms steht und fällt mit den Verknüpfungen. Ein Diagramm ohne Abhängigkeiten ist eine bunte Tabelle: Verschiebt sich ein Vorgang, muss alles Nachfolgende von Hand angepasst werden — und genau das passiert in der Praxis nie.</p>
        <p>Mit Verknüpfungen rechnet der Plan selbst. Sie verschieben einen Balken, und alles, was davon abhängt, rückt mit. Das ist der Unterschied zwischen einem Plan, der lebt, und einem, der nach drei Wochen veraltet in der Ablage liegt.</p>
        <p>Der Test für eine echte Abhängigkeit ist einfach: Wenn A früher fertig wird, kann B dann früher beginnen? Lautet die Antwort ja, verknüpfen Sie. Lautet sie nein, haben Sie nur die Reihenfolge nachgezeichnet, in der Sie die Vorgänge aufgeschrieben haben. Verknüpfen Sie nicht alles mit allem — ein Plan, in dem jeder Vorgang an seinem Vorgänger hängt, hat keine Parallelität mehr und reagiert auf jede kleine Verschiebung übertrieben.</p>`],
    ['Der kritische Pfad', `<p>Der kritische Pfad ist die längste Kette voneinander abhängiger Vorgänge. Ihre Gesamtdauer bestimmt die Projektdauer. Jeder Verzug auf diesem Pfad verschiebt das Projektende um genau denselben Betrag — Verzögerungen abseits davon oft gar nicht.</p>
        <p>Ein Zahlenbeispiel: Läuft ein Zweig über Konzept, Entwurf, Umsetzung und Test in 15 Arbeitstagen und ein zweiter über Beschaffung und Vorbereitung in 14, dann ist der erste kritisch. Zwei zusätzliche Personen in der Beschaffung ändern am Endtermin nichts. Ein gesparter Tag im Entwurf verschiebt ihn um einen Tag nach vorn.</p>
        <p>Das ist die praktisch wichtigste Kennzahl eines Plans: Sie zeigt, wo Aufmerksamkeit wirkt und wo sie verpufft. Sie ist außerdem beweglich — verspätet sich der zweite Zweig um zwei Tage, ist er mit 16 Tagen der neue kritische Pfad.</p>`],
    ['Wofür sich ein Gantt-Diagramm eignet', `<p>Für Vorhaben mit einem Ende, einer Reihenfolge und mehreren Beteiligten. Überall dort, wo die Frage „was hängt woran“ wichtiger ist als „was mache ich als Nächstes“. Die typischen Einsatzzwecke:</p>
        <ul>
          <li><strong>Terminplanung</strong> — Vorgänge, Dauern und Reihenfolge vom Start bis zur Abnahme festlegen.</li>
          <li><strong>Abstimmung im Team</strong> — sichtbar machen, wer wann was übernimmt und wie die Arbeitspakete ineinandergreifen.</li>
          <li><strong>Abhängigkeiten steuern</strong> — offensichtlich machen, dass der Test nicht vor dem Ende der Umsetzung beginnen kann.</li>
          <li><strong>Fortschritt verfolgen</strong> — Soll und Ist vergleichen und Verzug erkennen, solange er noch klein ist.</li>
          <li><strong>Berichten</strong> — Auftraggebern, Lenkungskreisen und Geschäftsführung den Stand auf einer Seite zeigen.</li>
          <li><strong>Auslastung prüfen</strong> — sehen, ob dieselbe Person in derselben Woche an drei Vorgängen gleichzeitig arbeiten soll.</li>
        </ul>
        <p>Verbreitet ist das Format im Bauwesen, in der Softwareentwicklung, im Marketing, in der Veranstaltungsplanung, in Fertigung, Beratung, Forschung und bei Produkteinführungen.</p>`],
    ['Beispiele nach Projektart', `<p>Die Darstellung bleibt gleich, die Gliederung ändert sich mit der Branche:</p>
        <ul>
          <li><strong>Softwareentwicklung</strong> — Anforderungen, Architektur, Iterationen, Integration, Test, Inbetriebnahme, mit einer Raute am Tag der Freischaltung. Die Testphase wird fast immer zu kurz geplant.</li>
          <li><strong>Bauprojekt</strong> — Genehmigung, Erdarbeiten, Rohbau, Gebäudehülle, Ausbau, Haustechnik, Abnahme. Stark verkettet, weil jede Phase auf dem Abschluss der vorherigen aufsetzt; auf dem kritischen Pfad liegt meist die Genehmigung, nicht das Bauen.</li>
          <li><strong>Marketingkampagne</strong> — Strategie, Konzept, Produktion, Freigaben, Ausspielung, Auswertung, häufig mit mehreren parallelen Spuren je Kanal. Engpass sind die Freigaben.</li>
          <li><strong>Veranstaltung</strong> — Location, Dienstleister, Programm, Anmeldung, Aufbau, Durchführung. Der Termin steht fest, also wird rückwärts geplant.</li>
          <li><strong>Produkteinführung</strong> — Entwicklung, Zulassung, Vertriebsvorbereitung, Kampagne, Markteintritt. Zertifizierungen werden regelmäßig unterschätzt.</li>
        </ul>
        <p>Ausführlicher stehen diese und drei weitere Fälle in den <a href="/de/blog/gantt-chart-examples.html">Beispielen aus acht Branchen</a>; fertige Startpunkte finden Sie in den <a href="/de/templates.html">Vorlagen</a>.</p>`],
    ['Vorteile und Grenzen im Überblick', `<p>Die Stärken sind schnell benannt: Der gesamte Terminplan passt auf ein Bild, Abhängigkeiten und ihre Folgewirkungen werden sichtbar, Überschneidungen und Überlastung fallen ins Auge, und selbst Beteiligte ohne Projekterfahrung verstehen die Darstellung ohne Erklärung. Dazu kommt die Verbindung mit der Berechnung des kritischen Pfads, die aus dem Bild ein Steuerungsinstrument macht.</p>
        <p>Die Schwächen ebenso: Ein Plan mit Hunderten Zeilen wird unlesbar. Ohne Pflege veraltet er und wird dadurch gefährlicher als gar kein Plan, weil ihm weiter vertraut wird. Die Balkenlänge zeigt Dauer, nicht Aufwand — ein vierwöchiger Balken kann zwei Personentage bedeuten, was regelmäßig falsch gelesen wird. Und für stark iterative Arbeit mit bewusst offenem Umfang ist die Darstellung schlicht das falsche Werkzeug.</p>`],
    ['Wo seine Grenzen liegen', `<p>Für laufenden, wiederkehrenden Betrieb ist ein Gantt-Diagramm das falsche Werkzeug — dafür gibt es Kanban. Für ein Team, das in zweiwöchigen Sprints arbeitet und den Umfang bewusst offen hält, ebenfalls.</p>
        <p>Und es wird unbrauchbar, wenn es zu fein wird: Ein Plan mit 400 Zeilen ist keine Planung mehr, sondern Buchhaltung. Als Faustregel gilt: kein Vorgang kürzer als ein Tag, keiner länger als ein Monat, insgesamt 20 bis 60 Zeilen. Was feiner ist, gehört in eine Aufgabenliste oder ein Ticketsystem — das Gantt-Diagramm ist ein Kommunikationsmittel, keine Aufgabendatenbank.</p>`],
    ['Gantt-Diagramm, Zeitstrahl und Kanban', `<p>Drei Darstellungen werden häufig verwechselt, obwohl jede eine andere Aufgabe hat:</p>
        <ul>
          <li><strong>Gantt-Diagramm</strong> — Vorgänge mit Dauern, Abhängigkeiten, Verantwortlichen und Fortschritt. Passend, wenn Reihenfolge und Termine zählen und ein Plan über Wochen gesteuert werden muss.</li>
          <li><strong>Zeitstrahl</strong> — eine Folge datierter Ereignisse auf einer Linie, ohne Dauern und ohne Verknüpfungen. Passend, um wenige Eckpunkte zu illustrieren. Jedes Gantt-Diagramm enthält einen Zeitstrahl, aber ein Zeitstrahl ist noch lange kein Gantt-Diagramm.</li>
          <li><strong>Kanban-Board</strong> — Spalten wie Offen, In Arbeit und Erledigt, durch die Karten wandern. Passend für kontinuierliche Arbeit, bei der wichtiger ist, <em>was als Nächstes</em> kommt, als <em>an welchem Datum</em>. Ein Board zeigt Zustand, keinen Kalender.</li>
        </ul>
        <p>Als Faustregel: Gantt bei festem Termin und definierter Reihenfolge, Kanban bei laufendem Fluss ohne feste Daten, Zeitstrahl, wenn nur eine Handvoll Eckdaten kommuniziert werden soll.</p>`],
    ['Woher der Name kommt', `<p>Benannt nach Henry L. Gantt (1861–1919), einem amerikanischen Maschinenbauingenieur und Berater, der die Darstellung zwischen etwa 1910 und 1915 populär machte — unter anderem für Produktionsplanung und den Schiffbau im Ersten Weltkrieg.</p>
        <p>Entwickelt hatte eine sehr ähnliche Form bereits in den 1890er-Jahren der polnische Ingenieur Karol Adamiecki, der sie <em>Harmonogramm</em> nannte. Weil seine Arbeiten überwiegend auf Polnisch und Russisch erschienen, blieben sie im Westen lange unbekannt, und der Name blieb bei Gantt hängen. Die Darstellung hat damit über hundert Jahre überdauert — was selten für eine Methode spricht, die nur Mode wäre.</p>`],
    ['So fangen Sie an', `<p>Schreiben Sie erst alle Vorgänge auf, ohne Termine. Schätzen Sie dann die Dauern in Arbeitstagen. Verknüpfen Sie danach, was wirklich aufeinander wartet — nicht, was zufällig nacheinander im Kalender steht. Setzen Sie zuletzt fünf bis zehn Meilensteine. Termine ergeben sich aus diesen drei Schritten von selbst.</p>
        <p>Sie brauchen dafür weder teure Software noch ein Tabellenblatt voller Formeln. <a href="/de/app.html">gantts.app</a> läuft direkt im Browser, ohne Konto und ohne Installation: Vorgänge eintippen, Balken ziehen, Abhängigkeiten verknüpfen, kritischen Pfad einblenden und das Ergebnis als PDF, PNG, XLSX oder PPTX exportieren. Der Plan bleibt dabei lokal auf Ihrem Gerät.</p>
        <p>Ausführlich Schritt für Schritt steht das in der <a href="/de/blog/how-to-make-a-gantt-chart.html">Anleitung in sieben Schritten</a>; wer lieber in Tabellen arbeitet, findet den Weg über <a href="/de/blog/gantt-chart-in-excel.html">Excel</a> beschrieben.</p>`],
  ],
  callout: 'Ein Gantt-Diagramm ohne Abhängigkeiten ist nur eine Tabelle mit Farbe. Der gesamte Nutzen entsteht dadurch, dass der Plan selbst rechnet, wenn sich etwas verschiebt — und in jedem echten Projekt verschiebt sich etwas.',
  faq: [
    ['Was ist ein Gantt-Diagramm einfach erklärt?', 'Ein Balkendiagramm auf einer Zeitachse: Links stehen die Vorgänge untereinander, oben läuft ein Kalender, und jeder Vorgang wird als waagerechter Balken gezeichnet. Die Position zeigt, wann er stattfindet, die Länge, wie lange er dauert. Verbindungen zwischen den Balken zeigen, was worauf wartet.'],
    ['Wofür wird ein Gantt-Diagramm verwendet?', 'Für Projekte mit festem Ende, mehreren Beteiligten und Abhängigkeiten zwischen den Arbeitsschritten — Bau, Produkteinführungen, Veranstaltungen, Studien, Softwareeinführungen. Es dient gleichzeitig der Planung, der Fortschrittsverfolgung und der Berichterstattung an Auftraggeber und Lenkungskreise.'],
    ['Aus welchen Teilen besteht ein Gantt-Diagramm?', 'Aus Vorgängen mit Dauer, Meilensteinen ohne Dauer, Abhängigkeiten zwischen den Vorgängen und Sammelbalken für Phasen. Dazu kommen üblicherweise eine Zeitachse mit Tages-, Wochen- oder Monatsspalten, ein Fortschrittsbalken je Vorgang, eine Heute-Linie und der hervorgehobene kritische Pfad.'],
    ['Was ist der Unterschied zwischen Gantt-Diagramm und Projektplan?', 'Der Projektplan umfasst Umfang, Budget, Risiken, Qualität und Ressourcen. Das Gantt-Diagramm ist seine zeitliche Darstellung — ein Teil des Plans, nicht der ganze. Wer beide gleichsetzt, plant Termine ohne Mittel und Risiken.'],
    ['Was ist der Unterschied zwischen Gantt-Diagramm und Zeitstrahl?', 'Ein Zeitstrahl ist eine einfache Folge datierter Ereignisse auf einer Linie. Ein Gantt-Diagramm ist deutlich reicher: viele parallele Vorgänge mit Dauern, Abhängigkeiten, Verantwortlichen und Fortschritt. Damit lässt sich Arbeit steuern, nicht nur illustrieren.'],
    ['Ist ein Gantt-Diagramm noch zeitgemäß?', 'Für Vorhaben mit Reihenfolge und Termin ja — Bau, Zulassungen, Veranstaltungen und Einführungen haben unverändert harte Abhängigkeiten. Für laufenden Betrieb oder bewusst offenen Umfang ist Kanban oder ein Sprintboard passender. Viele Teams nutzen beides: das Board für die Woche, das Gantt-Diagramm für den Termin.'],
    ['Wie viele Vorgänge gehören in ein Gantt-Diagramm?', '20 bis 60 Zeilen sind für die meisten Projekte gut lesbar, gegliedert in vier bis acht Phasen. Kein Vorgang sollte kürzer als ein Tag oder länger als ein Monat sein. Ab etwa 150 Zeilen pflegt den Plan niemand mehr, und ein ungepflegter Plan ist schlechter als gar keiner.'],
  ],
  related: [['how-to-make-a-gantt-chart', 'Gantt-Diagramm erstellen'], ['critical-path-method', 'Der kritische Pfad'], ['gantt-chart-dependencies', 'Die vier Abhängigkeitsarten']],
},

'how-to-make-a-gantt-chart': {
  h1: 'Gantt-Diagramm erstellen: Anleitung in sieben Schritten',
  metaTitle: 'Gantt-Diagramm erstellen — Anleitung',
  metaDesc: 'Gantt-Diagramm erstellen in sieben Schritten: Vorgänge, Dauern, Abhängigkeiten, Meilensteine, Ressourcen, Puffer und Freigabe.',
  date: '2026-07-19',
  lead: 'Ein <strong>Gantt-Diagramm zu erstellen</strong> dauert weniger lang, als die meisten erwarten — vorausgesetzt, man geht in der richtigen Reihenfolge vor. Der häufigste Fehler ist, mit Terminen anzufangen. Termine sind das Ergebnis, nicht der Anfang.',
  figIntro: 'Die Reihenfolge, in der ein Plan tatsächlich entsteht:',
  sections: [
    ['Was Sie vorher brauchen', `<p>Drei Dinge sollten geklärt sein, bevor Sie den ersten Balken zeichnen. Erstens das <strong>Ziel und der Endtermin</strong> — woran genau erkennen Sie, dass das Projekt fertig ist, und bis wann muss das der Fall sein. Zweitens eine <strong>Liste der Vorgänge</strong>, die dorthin führen. Drittens eine grobe Vorstellung davon, <strong>wie lange jeder Vorgang dauert und was worauf wartet</strong>.</p>
        <p>Perfekte Schätzungen brauchen Sie nicht. Sie brauchen einen Ausgangspunkt, den Sie verfeinern können — und den bekommen Sie in einer Stunde mit zwei Beteiligten an einem Whiteboard. Wenn Ihnen die Grundbegriffe fehlen, lesen Sie zuerst, <a href="/de/blog/what-is-a-gantt-chart.html">was ein Gantt-Diagramm ist</a>.</p>
        <p>Als durchgehendes Beispiel dient hier ein Website-Relaunch mit Projektstart am Montag, 6. Juli 2026 und gewünschtem Start der neuen Seite Anfang Oktober.</p>`],
    ['1. Vorgänge sammeln — ohne Termine', `<p>Schreiben Sie zuerst auf, was zu tun ist. Noch keine Daten, keine Reihenfolge, keine Zuständigkeiten. Nur die Arbeit. Formulieren Sie mit Verb und Objekt: „Startseitentext schreiben“, „Rechtstexte prüfen lassen“, „Auf Produktivsystem veröffentlichen“ — nicht „Texte“ und nicht „Rechtliches“.</p>
        <p>Die richtige Granularität liegt zwischen einem Tag und einem Monat je Vorgang. Alles Kürzere gehört auf eine Aufgabenliste, alles Längere ist noch keine Aufgabe, sondern eine Phase. Ein guter Prüfsatz: Sie sollten eine einzige verantwortliche Person nennen und in einem Satz beschreiben können, woran man die Fertigstellung erkennt. Geht das nicht, ist der Vorgang entweder zu groß (teilen) oder zu unklar (definieren).</p>
        <p>Es lohnt sich, dabei von einer Vorlage für Ihre Projektart auszugehen, damit die branchenüblichen Selbstverständlichkeiten nicht fehlen — Zulassungen, Abnahmen, Übergabefristen. Unsere <a href="/de/templates.html">Vorlagen</a> decken Bau, Marketing, Softwareentwicklung und Veranstaltungen ab.</p>`],
    ['2. In Phasen gruppieren', `<p>Fassen Sie die Vorgänge zu vier bis acht Phasen zusammen. Für den Relaunch etwa: Analyse, Konzept, Gestaltung, Umsetzung, Inhalte, Test, Umstellung. Eine Phase ist eine Sammelzeile, deren Balken automatisch beim frühesten Vorgang darunter beginnt und beim spätesten endet.</p>
        <p>Diese Gliederung ist es, die den Plan später lesbar macht — für Sie und für alle, denen Sie ihn zeigen. Sie erlaubt außerdem, im Gespräch mit der Geschäftsführung die Phasen zusammenzuklappen und nur sieben Balken zu zeigen, während das Team dieselbe Datei mit allen 45 Zeilen benutzt.</p>
        <p>Setzen Sie die Termine eines Sammelbalkens nie von Hand. Sie sind ein Ergebnis der darunterliegenden Vorgänge; ein manuell eingetragenes Phasenende ist eine Behauptung, die beim ersten Verzug still falsch wird. Viele Werkzeuge nummerieren die Gliederung automatisch als Projektstrukturplan (1, 1.1, 1.2), was in Protokollen eine eindeutige Referenz gibt.</p>`],
    ['3. Dauern schätzen', `<p>Schätzen Sie in Arbeitstagen, nicht in Kalendertagen, damit Wochenenden und Feiertage den Plan nicht verzerren. Schätzen Sie außerdem die reine Arbeitszeit — Wartezeiten gehören als eigener Vorgang in den Plan, nicht in die Dauer. „Rechtsprüfung: 2 Tage“ plus „Wartezeit auf Rückmeldung: 5 Tage“ ist ehrlicher und steuerbarer als „Rechtsprüfung: 7 Tage“.</p>
        <p>Ein bewährter Ansatz ist die Dreipunktschätzung: optimistisch, wahrscheinlich und pessimistisch schätzen, dann mit der Formel <code>(O + 4W + P) / 6</code> gewichten. Bei 3, 5 und 13 Tagen ergibt das 6 Tage — deutlich mehr als die 5, die man aus dem Bauch genannt hätte, und genau das ist der Punkt. Wer nur einen Wert nennt, nennt fast immer den optimistischen.</p>
        <p>Trennen Sie beim Schätzen Aufwand und Dauer. Zwei Personentage Arbeit einer Person, die nur halbtags verfügbar ist, sind vier Tage Dauer. Der Balken zeigt die Dauer, nicht den Aufwand — und diese Verwechslung ist die häufigste Ursache für Pläne, die auf dem Papier passen und in der Praxis reißen.</p>`],
    ['4. Abhängigkeiten verknüpfen', `<p>Verbinden Sie, was wirklich aufeinander wartet. Der Test: Kann Vorgang B früher beginnen, wenn A schneller fertig wird? Wenn ja, ist die Verknüpfung echt. Wenn nein, haben Sie nur die Reihenfolge im Kalender nachgezeichnet.</p>
        <p>Die mit Abstand häufigste Art ist <strong>Ende-Anfang</strong>: B beginnt, wenn A fertig ist — der Test beginnt, wenn die Umsetzung steht. Drei weitere Arten gibt es für Sonderfälle: Anfang-Anfang für gemeinsam anlaufende Arbeiten, Ende-Ende für begleitende Tätigkeiten wie die Dokumentation, und das seltene Anfang-Ende für Übergaben. Beginnen Sie mit Ende-Anfang und greifen Sie nur dann zu einer anderen, wenn der Vorgang sich tatsächlich so verhält; alle vier stehen in den <a href="/de/blog/gantt-chart-dependencies.html">Verknüpfungsarten</a>.</p>
        <p>Verknüpfen Sie nicht alles mit allem. Ein Plan, in dem jeder Vorgang von seinem Vorgänger abhängt, ist eine Kette ohne Parallelität — und meist unrealistisch. Und tragen Sie keine festen Termine dort ein, wo eine Verknüpfung die Berechnung übernehmen sollte: Ein hart gesetztes Datum übersteuert die Neuberechnung und macht aus dem Plan wieder ein Bild.</p>`],
    ['5. Meilensteine setzen', `<p>Fünf bis zehn für ein mehrmonatiges Projekt. Ein Meilenstein hat die Dauer null, erscheint als Raute und markiert eine Entscheidung, eine Freigabe oder eine erfüllte Bedingung — nicht das Ende einer beliebigen Aufgabe. Für den Relaunch also: Konzept freigegeben, Gestaltung abgenommen, Inhalte vollständig, Rechtsfreigabe erteilt, neue Seite live.</p>
        <p>Meilensteine leisten zweierlei. Sie geben Beteiligten außerhalb des Teams greifbare Kontrollpunkte, und sie sind Ankerpunkte, an die sich Abhängigkeiten sauber knüpfen lassen. Eine gute Gewohnheit ist ein Meilenstein am Ende jeder Phase und einer am Endtermin, damit die Ziellinie im Plan immer sichtbar ist.</p>`],
    ['6. Ressourcen zuordnen und Auslastung prüfen', `<p>Erst jetzt ordnen Sie Personen zu — und prüfen dann, ob jemand in derselben Woche an drei Vorgängen gleichzeitig arbeiten soll. Diese Überlastung ist der häufigste Grund, warum ein rechnerisch korrekter Plan in der Praxis nicht hält.</p>
        <p>Gehen Sie den Plan spaltenweise durch, Woche für Woche, und addieren Sie je Person die parallel laufenden Vorgänge. Wer in Kalenderwoche 33 gleichzeitig Texte schreiben, Bilder abnehmen und den Test begleiten soll, wird alle drei verspäten. Die Gegenmittel sind dieselben wie immer: Vorgänge zeitlich versetzen, wo Puffer vorhanden ist, umverteilen oder den Umfang kürzen.</p>
        <p>Halten Sie anschließend den Fortschritt in Prozent je Vorgang nach. Der Vergleich von Heute-Linie und Fortschrittsbalken ist die schnellste Statusaussage, die es gibt: Steht ein Balken links der Heute-Linie noch bei 0 Prozent, haben Sie Verzug — und zwar sichtbar, bevor jemand ihn meldet.</p>`],
    ['7. Puffer einplanen, kritischen Pfad prüfen und freigeben', `<p>Setzen Sie Puffer dorthin, wo Unsicherheit ist — vor Meilensteine und an das Ende des kritischen Pfads, nicht auf jeden einzelnen Vorgang. Verteilte Puffer verschwinden nach dem Parkinsonschen Prinzip; gebündelte bleiben sichtbar und lassen sich bewusst vergeben.</p>
        <p>Schalten Sie dann den <a href="/de/blog/critical-path-method.html">kritischen Pfad</a> ein, also die längste Kette abhängiger Vorgänge, die den Endtermin bestimmt. Prüfen Sie, ob er dort verläuft, wo Sie ihn erwarten. Läuft er durch einen Vorgang, den Sie für nebensächlich hielten, fehlt entweder eine Verknüpfung oder eine Dauer ist falsch geschätzt. Passt der Endtermin nicht, wirken nur zwei Hebel, und beide ausschließlich auf diesem Pfad: mehr Mittel auf kritische Vorgänge oder bisher aufeinanderfolgende Vorgänge überlappen lassen.</p>
        <p>Zum Schluss gehen Sie den Plan mit den Beteiligten durch. Ein Plan, den nur eine Person kennt, ist kein Plan, sondern eine Meinung. Frieren Sie danach den Stand als <strong>Basisplan</strong> ein — ohne diesen Vergleichsstand lässt sich später nicht mehr belegen, wo und wann die Abweichung entstanden ist.</p>`],
    ['Womit erstellen?', `<p>Für kleine Vorhaben reicht eine Tabellenkalkulation, wird aber ab etwa zwanzig Zeilen mühsam, weil Abhängigkeiten nicht automatisch rechnen: Jede Verschiebung müssen Sie durch alle Nachfolger von Hand tragen, und nach der zweiten Änderung unterbleibt das. Wie es trotzdem geht, steht in der Anleitung zu <a href="/de/blog/gantt-chart-in-excel.html">Gantt-Diagrammen in Excel</a>.</p>
        <p>Spezialisierte Werkzeuge nehmen Ihnen das ab. <a href="/de/app.html">gantts.app</a> läuft direkt im Browser, ohne Anmeldung und ohne Installation: Vorgänge eintippen, Dauern setzen, Balken ziehen, Verknüpfungen als Pfeile zeichnen. Der kritische Pfad hebt sich automatisch hervor und rechnet sich bei jeder Änderung neu. Exportiert wird nach PDF, PNG, XLSX oder PPTX, und der Plan bleibt lokal auf Ihrem Gerät.</p>`],
    ['Die fünf häufigsten Fehler', `<p><strong>Zu detailliert planen.</strong> Ein Plan mit 300 Zeilen wird nicht gepflegt, und ein ungepflegter Plan ist schlechter als gar keiner, weil ihm noch vertraut wird. Beginnen Sie auf Phasenebene und gehen Sie nur dort ins Detail, wo es hilft.</p>
        <p><strong>Feste Termine statt Verknüpfungen.</strong> Wenn Daten sich nicht bewegen, sobald ein Vorgänger sich verspätet, lügt der Plan ab der ersten Änderung.</p>
        <p><strong>Gar kein Puffer.</strong> Ein Plan ohne jede Reserve bricht bei der ersten Verzögerung. Realistisch schätzen und eine sichtbare Reserve vor den Endtermin legen.</p>
        <p><strong>Fortschritt nie nachtragen.</strong> Ein Bild, dem alle vertrauen und das nicht mehr stimmt, richtet mehr Schaden an als eine leere Wand.</p>
        <p><strong>Den kritischen Pfad ignorieren.</strong> Wer nicht weiß, welche Vorgänge den Termin bestimmen, kann den Termin nicht schützen.</p>`],
    ['Und dann?', `<p>Ein Plan ist kein Dokument, sondern ein Werkzeug. Aktualisieren Sie ihn wöchentlich mit dem Fortschritt, vergleichen Sie ihn mit dem Basisplan und passen Sie an, was sich geändert hat. Fünfzehn Minuten in einem festen Termin genügen dafür in den meisten Projekten.</p>
        <p>Zwei Fragen tragen diese Viertelstunde: Was hat sich seit der letzten Woche verschoben, und läuft der kritische Pfad noch dort, wo er letzte Woche lief? Wandert er, ändert sich damit auch, worauf Sie in der kommenden Woche achten müssen.</p>`],
  ],
  callout: 'Beginnen Sie nie mit Terminen. Vorgänge, Dauern und Abhängigkeiten ergeben die Termine von selbst — und ein so entstandener Plan lässt sich verteidigen. Ein Plan, der rückwärts von einem Wunschtermin gebaut wurde, hält der ersten Rückfrage nicht stand.',
  faq: [
    ['Wie erstellt man ein Gantt-Diagramm?', 'In sieben Schritten: Vorgänge sammeln, in vier bis acht Phasen gruppieren, Dauern in Arbeitstagen schätzen, echte Abhängigkeiten verknüpfen, fünf bis zehn Meilensteine setzen, Verantwortliche zuordnen und die Auslastung prüfen, Puffer bündeln und den kritischen Pfad kontrollieren. Die Termine ergeben sich aus diesen Schritten von selbst.'],
    ['Was brauche ich, bevor ich anfange?', 'Drei Dinge: ein klares Ziel mit Endtermin, eine Liste der Vorgänge, die dorthin führen, und eine grobe Vorstellung von Dauern und Abhängigkeiten. Perfekte Schätzungen sind nicht nötig — ein Ausgangspunkt, den Sie verfeinern können, reicht völlig aus.'],
    ['Wie erstelle ich ein Gantt-Diagramm kostenlos?', 'Im Browser, ohne Anmeldung und ohne Installation — etwa mit gantts.app, inklusive Abhängigkeiten, kritischem Pfad und Export nach PDF, PNG, XLSX und PPTX. Alternativ mit einer Tabellenkalkulation, was aber ab etwa zwanzig Vorgängen unhandlich wird, weil Verschiebungen nicht automatisch durchgerechnet werden.'],
    ['Wie füge ich Abhängigkeiten hinzu?', 'Sie verknüpfen zwei Balken miteinander, damit ihre Termine zusammenhängen. Die häufigste Art ist Ende-Anfang: Ein Vorgang beginnt erst, wenn der vorherige abgeschlossen ist. Verschiebt sich der Vorgänger, rücken alle Nachfolger automatisch nach — vorausgesetzt, Sie haben keinen festen Termin eingetragen, der die Berechnung übersteuert.'],
    ['Wie viele Vorgänge sollte ein Gantt-Diagramm haben?', 'So wenige wie möglich, so viele wie nötig. 20 bis 60 Zeilen sind für die meisten Projekte gut lesbar; ab etwa 150 pflegt den Plan niemand mehr. Größere Vorhaben zerlegt man besser in einen Rahmenplan auf Phasenebene und je einen Detailplan pro Phase.'],
    ['Wie lang sollte ein einzelner Vorgang sein?', 'Zwischen einem Tag und einem Monat. Kürzeres gehört auf eine Aufgabenliste, Längeres ist eine Phase und sollte unterteilt werden. Als Prüfsatz: Es muss genau eine verantwortliche Person geben, und in einem Satz sagbar sein, woran man die Fertigstellung erkennt.'],
    ['Wie viel Puffer sollte ich einplanen?', 'Nicht auf jeden Vorgang, sondern gebündelt vor Meilensteinen und am Ende des kritischen Pfads. Verteilte Puffer werden nach dem Parkinsonschen Prinzip stillschweigend aufgebraucht; ein sichtbarer Reservevorgang von zehn bis fünfzehn Prozent der Projektdauer lässt sich dagegen bewusst vergeben und nachverfolgen.'],
  ],
  related: [['what-is-a-gantt-chart', 'Was ist ein Gantt-Diagramm?'], ['gantt-chart-dependencies', 'Die vier Abhängigkeitsarten'], ['gantt-chart-mistakes', 'Häufige Planungsfehler']],
},

'critical-path-method': {
  h1: 'Kritischer Pfad: Methode, Berechnung und ein Beispiel',
  metaTitle: 'Kritischer Pfad berechnen (CPM)',
  metaDesc: 'Kritischer Pfad einfach erklärt: Vorwärtsrechnung, Rückwärtsrechnung, Pufferzeit und ein durchgerechnetes Beispiel mit vier Vorgängen.',
  date: '2026-07-19',
  lead: 'Der <strong>kritische Pfad</strong> ist die längste Kette voneinander abhängiger Vorgänge in einem Projekt. Seine Länge ist die kürzestmögliche Projektdauer — und jeder Tag Verzug auf diesem Pfad ist ein Tag Verzug am Projektende.',
  figIntro: 'Vorwärts rechnen, rückwärts rechnen, Puffer ablesen:',
  sections: [
    ['Die Grundidee', `<p>Nicht alle Vorgänge sind gleich wichtig für den Termin. Manche haben Luft: Sie können sich verschieben, ohne dass das Projektende wandert. Andere haben keine — und die bilden den kritischen Pfad.</p>
        <p>Die Methode heißt Critical Path Method, kurz CPM, und stammt aus den späten 1950er-Jahren. Morgan Walker und James Kelley entwickelten sie ursprünglich für die Planung von Instandhaltungsstillständen in Chemieanlagen, wo jeder Stillstandstag unmittelbar Geld kostete. Sie beantwortet zwei Fragen: Wie lange dauert das Projekt mindestens, und welche Vorgänge dürfen sich auf keinen Fall verzögern?</p>
        <p>Der praktische Nutzen liegt in der Fokussierung. Ein Plan mit sechzig Vorgängen wirkt so, als müsse man auf alle sechzig gleich genau achten. Die Berechnung zeigt, dass typischerweise nur zwölf bis zwanzig davon den Endtermin tatsächlich bestimmen. Diese Vorgänge bekommen die erfahrensten Leute, die engmaschigste Nachverfolgung und die Reserven. Für den Rest genügt eine wöchentliche Statusabfrage.</p>`],
    ['Die Begriffe: FAZ, FEZ, SAZ, SEZ', `<p>Die Rechnung arbeitet mit vier Terminen je Vorgang. Die deutschen Kürzel sind seit der Netzplantechnik nach DIN 69900 gebräuchlich und lohnen sich zu merken, weil jede Projektsoftware sie in irgendeiner Form anzeigt:</p>
        <ul>
          <li><strong>FAZ</strong> — frühester Anfangszeitpunkt: der früheste Moment, an dem der Vorgang beginnen kann, ohne dass ein Vorgänger noch läuft.</li>
          <li><strong>FEZ</strong> — frühester Endzeitpunkt: <code>FEZ = FAZ + Dauer</code>.</li>
          <li><strong>SEZ</strong> — spätester Endzeitpunkt: der späteste Moment, an dem der Vorgang enden darf, ohne den Projekttermin zu verschieben.</li>
          <li><strong>SAZ</strong> — spätester Anfangszeitpunkt: <code>SAZ = SEZ − Dauer</code>.</li>
        </ul>
        <p>Daraus folgt die einzige Formel, die man wirklich braucht: <strong>Gesamtpuffer = SAZ − FAZ = SEZ − FEZ</strong>. Ist dieser Wert null, liegt der Vorgang auf dem kritischen Pfad. Alle Rechnungen laufen in Arbeitstagen, und die Zeitachse beginnt bei null — der erste Vorgang hat also FAZ 0, nicht FAZ 1. Das erspart die klassische Verwirrung um einen Tag am Ende.</p>`],
    ['Vorwärtsrechnung: die frühesten Termine', `<p>Beginnen Sie am Projektstart und gehen Sie vorwärts durch das Netz. Für jeden Vorgang gilt: der FAZ ist der <em>größte</em> FEZ aller seiner Vorgänger; der FEZ ist FAZ plus Dauer.</p>
        <p>Das Wort <em>größte</em> ist der ganze Trick. Hat ein Vorgang zwei Vorgänger, von denen einer nach 11 Tagen und der andere nach 12 Tagen fertig ist, kann er nicht nach 11 Tagen beginnen — er wartet auf den langsameren. Wer hier versehentlich den kleineren Wert nimmt, erhält eine Projektdauer, die zu kurz ist, und einen kritischen Pfad, der durch den falschen Zweig läuft. Das ist der mit Abstand häufigste Rechenfehler bei der Handrechnung.</p>
        <p>Am Ende der Vorwärtsrechnung steht der größte FEZ überhaupt — und das ist die frühestmögliche Projektdauer.</p>`],
    ['Rückwärtsrechnung: die spätesten Termine', `<p>Jetzt gehen Sie vom Projektende zurück. Setzen Sie den SEZ des letzten Vorgangs gleich der eben ermittelten Projektdauer — nicht gleich einem Wunschtermin — und rechnen Sie <code>SAZ = SEZ − Dauer</code>. Für jeden weiter links liegenden Vorgang gilt: der SEZ ist der <em>kleinste</em> SAZ aller seiner Nachfolger.</p>
        <p>Hier ist es genau umgekehrt zur Vorwärtsrechnung: Es zählt der engste Nachfolger. Wenn ein Vorgang zwei Nachfolger hat, von denen einer am Tag 6 und der andere am Tag 7 beginnen muss, dann muss er am Tag 6 fertig sein. Der spätere Nachfolger ist keine Erlaubnis, sich Zeit zu lassen.</p>
        <p>Ein Hinweis, der viel Ärger spart: Wenn Sie den SEZ des letzten Vorgangs auf einen vertraglich zugesagten Termin setzen, der früher liegt als die berechnete Dauer, entstehen <strong>negative Puffer</strong>. Das ist kein Rechenfehler, sondern eine Aussage — der Plan ist in dieser Form nicht haltbar, und die Zahl sagt Ihnen um wie viele Tage.</p>`],
    ['Puffer und der kritische Pfad', `<p>Die Pufferzeit eines Vorgangs ist SAZ minus FAZ. Vorgänge mit Puffer null bilden den kritischen Pfad. Es gibt immer mindestens einen solchen Pfad, und in stark verketteten Plänen häufig mehrere parallele — was das Risiko erhöht, weil dann zwei unabhängige Ketten gleichzeitig gut gehen müssen.</p>
        <p>Zu unterscheiden sind zwei Arten von Puffer, und die Verwechslung führt regelmäßig zu falscher Sicherheit:</p>
        <ul>
          <li><strong>Gesamtpuffer</strong> — um wie viel sich ein Vorgang verschieben darf, ohne das <em>Projektende</em> zu verschieben. Er wird über alle Vorgänge eines Zweigs geteilt: Verbraucht der erste ihn ganz, hat der zweite keinen mehr.</li>
          <li><strong>Freier Puffer</strong> — um wie viel sich ein Vorgang verschieben darf, ohne den <em>FAZ seines Nachfolgers</em> zu verschieben. Dieser Puffer gehört dem Vorgang allein.</li>
        </ul>
        <p>Praktisch heißt das: Wenn drei Vorgänge in einem Zweig je acht Tage Gesamtpuffer ausgewiesen bekommen, gibt es nicht 24 Tage Luft, sondern acht — einmal, für den ganzen Zweig.</p>`],
    ['Ein durchgerechnetes Beispiel', `<p>Sechs Vorgänge, Dauern in Arbeitstagen, Projektstart Montag, 6. Juli 2026.</p>
        <table>
          <thead><tr><th>Vorgang</th><th>Dauer</th><th>Vorgänger</th></tr></thead>
          <tbody>
            <tr><td>A — Konzept</td><td>3</td><td>—</td></tr>
            <tr><td>B — Entwurf</td><td>4</td><td>A</td></tr>
            <tr><td>C — Beschaffung</td><td>2</td><td>A</td></tr>
            <tr><td>D — Umsetzung</td><td>5</td><td>B</td></tr>
            <tr><td>E — Baustelle vorbereiten</td><td>6</td><td>C</td></tr>
            <tr><td>F — Montage und Test</td><td>3</td><td>D, E</td></tr>
          </tbody>
        </table>
        <p>Es gibt zwei Wege durch das Netz: <strong>A → B → D → F</strong> = 3 + 4 + 5 + 3 = <strong>15 Tage</strong> und <strong>A → C → E → F</strong> = 3 + 2 + 6 + 3 = <strong>14 Tage</strong>. Der längere Weg ist der kritische. Rechnen wir es sauber durch.</p>
        <p><strong>Vorwärtsrechnung</strong> (FAZ, dann FEZ = FAZ + Dauer):</p>
        <ul>
          <li>A: FAZ 0, FEZ 3</li>
          <li>B: FAZ 3 (nach A), FEZ 7</li>
          <li>C: FAZ 3 (nach A), FEZ 5</li>
          <li>D: FAZ 7 (nach B), FEZ 12</li>
          <li>E: FAZ 5 (nach C), FEZ 11</li>
          <li>F: FAZ 12 — der größere Wert aus D mit 12 und E mit 11 —, FEZ 15</li>
        </ul>
        <p>Die Projektdauer beträgt also <strong>15 Arbeitstage</strong>. Ab Montag, 6. Juli gerechnet, endet das Projekt am Freitag, 24. Juli 2026.</p>
        <p><strong>Rückwärtsrechnung</strong> (SEZ, dann SAZ = SEZ − Dauer), beginnend mit F und SEZ 15:</p>
        <ul>
          <li>F: SEZ 15, SAZ 12</li>
          <li>D: SEZ 12 (SAZ von F), SAZ 7</li>
          <li>E: SEZ 12 (SAZ von F), SAZ 6</li>
          <li>B: SEZ 7 (SAZ von D), SAZ 3</li>
          <li>C: SEZ 6 (SAZ von E), SAZ 4</li>
          <li>A: SEZ 3 — der kleinere Wert aus B mit 3 und C mit 4 —, SAZ 0</li>
        </ul>
        <p><strong>Puffer = SAZ − FAZ</strong> für jeden Vorgang:</p>
        <table>
          <thead><tr><th>Vorgang</th><th>FAZ</th><th>FEZ</th><th>SAZ</th><th>SEZ</th><th>Puffer</th><th>Kritisch?</th></tr></thead>
          <tbody>
            <tr><td>A</td><td>0</td><td>3</td><td>0</td><td>3</td><td><strong>0</strong></td><td>ja</td></tr>
            <tr><td>B</td><td>3</td><td>7</td><td>3</td><td>7</td><td><strong>0</strong></td><td>ja</td></tr>
            <tr><td>C</td><td>3</td><td>5</td><td>4</td><td>6</td><td>1</td><td>nein</td></tr>
            <tr><td>D</td><td>7</td><td>12</td><td>7</td><td>12</td><td><strong>0</strong></td><td>ja</td></tr>
            <tr><td>E</td><td>5</td><td>11</td><td>6</td><td>12</td><td>1</td><td>nein</td></tr>
            <tr><td>F</td><td>12</td><td>15</td><td>12</td><td>15</td><td><strong>0</strong></td><td>ja</td></tr>
          </tbody>
        </table>
        <p>Die Vorgänge mit Puffer null — <strong>A, B, D, F</strong> — bilden den kritischen Pfad, genau der Weg, den wir vorher schon als den längeren erkannt hatten. In Kalenderterminen: A läuft von Montag, 6. bis Mittwoch, 8. Juli, B von Donnerstag, 9. bis Dienstag, 14. Juli, D von Mittwoch, 15. bis Dienstag, 21. Juli und F von Mittwoch, 22. bis Freitag, 24. Juli.</p>
        <p>C und E haben je <strong>einen Arbeitstag Puffer</strong> — aber es ist derselbe Tag, denn beide liegen auf demselben Zweig. Verschiebt sich die Beschaffung um einen Tag, hat die Baustellenvorbereitung anschließend null Puffer, und der zweite Zweig ist ebenfalls kritisch. Verschiebt sie sich um zwei Tage, ist der Endtermin weg.</p>`],
    ['Was das praktisch bedeutet', `<p>Die Rechnung sagt Ihnen, wo Aufmerksamkeit wirkt. Zusätzliche Leute auf die Baustellenvorbereitung zu setzen bringt für den Endtermin nichts — der Vorgang wird früher fertig und wartet dann länger auf F. Einen Tag beim Entwurf zu sparen bringt dagegen einen Tag am Projektende, eins zu eins.</p>
        <p>Dasselbe gilt für die Nachverfolgung im Betrieb. Bei der wöchentlichen Statusrunde ist die Frage nach den kritischen Vorgängen die einzige, die den Termin bewegt. Ein Vorgang mit zwölf Tagen Puffer, der drei Tage im Rückstand ist, ist eine Notiz. Ein kritischer Vorgang, der einen halben Tag im Rückstand ist, ist ein Thema.</p>
        <p>Und es warnt vor einer Falle: Der kritische Pfad ist keine feste Eigenschaft des Plans, sondern eine Momentaufnahme. Er wandert, sobald sich etwas verschiebt. Deshalb wird er nicht einmal zu Projektbeginn berechnet, sondern bei jeder Fortschreibung neu — sonst schützen Sie einen Pfad, der seit drei Wochen nicht mehr der kritische ist.</p>`],
    ['Wenn der Termin nicht reicht', `<p>Ergibt die Rechnung 15 Tage, der Kunde erwartet aber 12, gibt es genau zwei seriöse Hebel — und beide wirken ausschließlich auf dem kritischen Pfad:</p>
        <ul>
          <li><strong>Verkürzen</strong> (Crashing): mehr Mittel auf kritische Vorgänge. Kostet Geld, und der Ertrag sinkt schnell — zwei Personen halbieren die Dauer selten, vier vervierteln sie nie.</li>
          <li><strong>Parallelisieren</strong> (Fast Tracking): Vorgänge, die bisher nacheinander liefen, überlappen lassen, etwa indem die Umsetzung nach 70 Prozent des Entwurfs beginnt. Kostet kein Geld, erhöht aber das Risiko von Nacharbeit.</li>
        </ul>
        <p>Nach jedem Eingriff neu rechnen. Verkürzen Sie den Entwurf um zwei Tage, ist der Weg über A, B, D und F nur noch 13 Tage lang — und der andere Weg mit 14 Tagen wird zum kritischen Pfad. Weitere Tage beim Entwurf einzusparen bringt ab dann nichts mehr.</p>`],
    ['CPM, PERT und kritische Kette', `<p>Drei Verfahren werden regelmäßig verwechselt:</p>
        <ul>
          <li><strong>CPM</strong> arbeitet mit einer festen Dauer je Vorgang und liefert kritischen Pfad und Puffer. Geeignet, wenn die Dauern einigermaßen bekannt sind.</li>
          <li><strong>PERT</strong> nutzt drei Schätzwerte je Vorgang — optimistisch (O), wahrscheinlich (W) und pessimistisch (P) — und gewichtet sie mit <code>(O + 4W + P) / 6</code>. Bei 4, 6 und 14 Tagen ergibt das 7 Tage statt der 6, die man aus dem Bauch genannt hätte. Geeignet bei unsicheren Dauern; in der Praxis rechnet man CPM anschließend mit den PERT-Werten.</li>
          <li><strong>Kritische Kette</strong> ergänzt CPM um Ressourcenengpässe und bündelt die Einzelpuffer zu einem sichtbaren Projektpuffer am Kettenende. Geeignet, wenn nicht die Reihenfolge, sondern geteilte Personen der Engpass sind.</li>
        </ul>`],
    ['Die drei häufigsten Fehler', `<p><strong>Feste Termine statt Verknüpfungen.</strong> Ein hart eingetragenes Startdatum übersteuert die Berechnung. Der Vorgang wandert nicht mehr mit, der Puffer wird falsch ausgewiesen, und der kritische Pfad läuft an ihm vorbei. Feste Termine gehören nur dorthin, wo sie real sind — ein Messetermin, ein Gerichtstermin.</p>
        <p><strong>Fehlende Verknüpfungen.</strong> Ohne Vorgänger hat jeder Vorgang scheinbar Puffer bis zum Projektende, und die Software meldet einen unrealistisch kurzen kritischen Pfad. Wenn Ihr Plan verdächtig entspannt aussieht, fehlen meist Verknüpfungen.</p>
        <p><strong>Puffer in die Dauern gerechnet.</strong> Wer auf jede Dauer 20 Prozent aufschlägt, bekommt einen Plan, in dem der Puffer unsichtbar ist und nach dem Parkinsonschen Prinzip verbraucht wird. Schätzen Sie realistisch und setzen Sie den Puffer als eigenen Vorgang ans Ende des kritischen Pfads, wo man ihn sieht.</p>`],
    ['Automatisch statt von Hand', `<p>Die Rechnung einmal von Hand durchzuführen lohnt sich, weil man danach versteht, was die Software tut. Wiederholen möchte man sie nach jeder Schätzungsänderung nicht. <a href="/de/app.html">gantts.app</a> berechnet den kritischen Pfad, sobald Vorgänge und Abhängigkeiten stehen, hebt ihn farblich hervor und rechnet ihn bei jeder Änderung neu — kostenlos im Browser, ohne Konto und ohne Installation. Der fertige Plan lässt sich als PDF, PNG, XLSX oder PPTX exportieren.</p>
        <p>Wenn Ihnen die Grundlagen noch fehlen, beginnen Sie mit <a href="/de/blog/what-is-a-gantt-chart.html">was ein Gantt-Diagramm ist</a>, gehen dann zur <a href="/de/blog/how-to-make-a-gantt-chart.html">Anleitung in sieben Schritten</a> und vertiefen die <a href="/de/blog/gantt-chart-dependencies.html">vier Verknüpfungsarten</a>, ohne die es keinen kritischen Pfad gibt.</p>`],
  ],
  callout: 'Der kritische Pfad ändert sich während des Projekts. Ein Vorgang mit drei Tagen Puffer, der sich um vier verspätet, wird selbst kritisch. Deshalb rechnet man den Pfad nicht einmal zu Projektbeginn, sondern bei jeder Aktualisierung neu.',
  faq: [
    ['Was ist der kritische Pfad?', 'Die längste Kette abhängiger Vorgänge von Projektstart bis Projektende. Ihre Dauer entspricht der kürzestmöglichen Projektdauer, und ihre Vorgänge haben keinen Puffer. Verzögert sich einer davon um einen Tag, verschiebt sich der Endtermin um genau einen Tag.'],
    ['Wie berechnet man den kritischen Pfad?', 'In vier Schritten: alle Vorgänge mit Dauer und Vorgängern auflisten, Vorwärtsrechnung für die frühesten Termine (FAZ, FEZ), Rückwärtsrechnung für die spätesten (SAZ, SEZ) und schließlich Puffer = SAZ − FAZ. Alle Vorgänge mit Puffer null, durchgehend verkettet, bilden den kritischen Pfad.'],
    ['Was ist Pufferzeit?', 'Die Zeit, um die sich ein Vorgang verschieben darf, ohne das Projektende zu verschieben: spätester Anfang minus frühester Anfang. Der Gesamtpuffer gilt für einen ganzen Zweig und wird von allen Vorgängen darin geteilt; der freie Puffer betrifft nur den Abstand zum unmittelbaren Nachfolger.'],
    ['Kann es mehrere kritische Pfade geben?', 'Ja. In stark verketteten Plänen sind mehrere parallele Wege gleich lang und damit alle kritisch. Das erhöht das Risiko deutlich, weil dann zwei oder mehr unabhängige Ketten gleichzeitig störungsfrei laufen müssen, damit der Termin hält.'],
    ['Was ist der Unterschied zwischen CPM und PERT?', 'CPM rechnet mit einer festen Dauer je Vorgang und liefert Pfad und Puffer. PERT arbeitet mit drei Schätzwerten — optimistisch, wahrscheinlich, pessimistisch — und gewichtet sie als (O + 4W + P) / 6, um Unsicherheit abzubilden. In der Praxis werden beide kombiniert: PERT für die Dauern, CPM für den Pfad.'],
    ['Was bedeutet ein negativer Puffer?', 'Dass der geforderte Endtermin früher liegt als das rechnerisch mögliche Ende. Ein Puffer von minus drei Tagen heißt: Der Plan ist drei Tage zu lang. Das ist kein Rechenfehler, sondern die klare Aussage, dass Umfang, Termin oder Mittel angepasst werden müssen.'],
    ['Wie verkürze ich den kritischen Pfad?', 'Entweder durch Verkürzen — mehr Mittel auf kritische Vorgänge, was Geld kostet — oder durch Parallelisieren, also das Überlappen bisher aufeinanderfolgender Vorgänge, was das Risiko von Nacharbeit erhöht. Beides wirkt nur auf dem kritischen Pfad, und nach jedem Eingriff muss neu gerechnet werden, weil ein anderer Weg kritisch werden kann.'],
  ],
  related: [['gantt-chart-dependencies', 'Die vier Abhängigkeitsarten'], ['what-is-a-gantt-chart', 'Was ist ein Gantt-Diagramm?'], ['gantt-baseline-variance', 'Basisplan und Abweichung']],
},

'gantt-chart-dependencies': {
  h1: 'Abhängigkeiten im Gantt-Diagramm: die vier Verknüpfungsarten',
  metaTitle: 'Abhängigkeiten im Gantt-Diagramm',
  metaDesc: 'Ende-Anfang, Anfang-Anfang, Ende-Ende und Anfang-Ende erklärt — wann welche Verknüpfung passt und wie Zeitabstände wirken.',
  date: '2026-07-19',
  lead: 'Eine <strong>Abhängigkeit</strong> legt fest, was worauf wartet. Es gibt vier Arten, aber in der Praxis brauchen die meisten Pläne fast nur eine — und der Rest richtet häufiger Schaden an, als er nützt.',
  figIntro: 'Die vier Verknüpfungsarten im Vergleich:',
  sections: [
    ['Ende-Anfang (EA)', '<p>Der Standardfall: B beginnt, wenn A fertig ist. „Streichen“ beginnt, wenn „Spachteln“ abgeschlossen ist. Rund 90 Prozent aller Verknüpfungen in realen Plänen sind von diesem Typ, und das ist gut so — sie ist die einzige Art, die jeder auf Anhieb richtig liest.</p>'],
    ['Anfang-Anfang (AA)', '<p>B beginnt, wenn A beginnt. Nützlich für Arbeiten, die gemeinsam anlaufen: Bauleitung startet mit dem Rohbau, Qualitätssicherung mit der Entwicklung. Häufig kombiniert mit einem Zeitabstand — QS beginnt drei Tage nach Entwicklungsbeginn.</p>'],
    ['Ende-Ende (EE)', '<p>B endet, wenn A endet. Typisch für begleitende Tätigkeiten: Die Dokumentation ist fertig, wenn die Entwicklung fertig ist. Sie legt kein Startdatum fest, sondern nur einen gemeinsamen Schlusspunkt.</p>'],
    ['Anfang-Ende (AE)', '<p>B endet, wenn A beginnt. Der seltenste Fall, vor allem für Übergaben: Die alte Schicht endet, wenn die neue beginnt; das Altsystem wird abgeschaltet, wenn das neue in Betrieb geht. Wenn Sie diese Verknüpfung häufig einsetzen, ist der Plan meistens falsch herum gedacht.</p>'],
    ['Zeitabstände: Vorlauf und Verzögerung', '<p>Jede Verknüpfung lässt sich um einen Abstand ergänzen. Eine Verzögerung schiebt den Nachfolger nach hinten — Beton muss sieben Tage aushärten, bevor weitergebaut wird. Ein Vorlauf lässt ihn früher beginnen — der zweite Bauabschnitt startet, wenn der erste zu 70 Prozent fertig ist.</p>\n        <p>Ein Hinweis zur Wartezeit: Aushärten, Trocknen, Genehmigungsfristen sind besser als eigener Vorgang sichtbar als in einer Verzögerung versteckt. Was im Balken steht, sieht man; was im Verknüpfungsdialog steht, findet niemand wieder.</p>'],
  ],
  callout: 'Verknüpfen Sie nur, was wirklich wartet. Der Test: Wenn A früher fertig wird, kann B dann früher beginnen? Lautet die Antwort nein, ist es keine Abhängigkeit, sondern nur die Reihenfolge, in der Sie es aufgeschrieben haben.',
  faq: [
    ['Welche Abhängigkeitstypen gibt es im Gantt-Diagramm?', 'Vier: Ende-Anfang, Anfang-Anfang, Ende-Ende und Anfang-Ende. Ende-Anfang deckt die weit überwiegende Mehrheit der Fälle ab.'],
    ['Was ist der Unterschied zwischen Vorlauf und Verzögerung?', 'Eine Verzögerung schiebt den Nachfolger nach hinten (Aushärtezeit), ein Vorlauf lässt ihn früher beginnen, bevor der Vorgänger ganz fertig ist.'],
    ['Sollte man jeden Vorgang verknüpfen?', 'Nein. Nur echte Abhängigkeiten. Ein Plan, in dem alles aneinanderhängt, verliert jede Parallelität und reagiert auf jede kleine Verschiebung übertrieben.'],
    ['Warum wird mein Vorgang nicht verschoben?', 'Meist fehlt die Verknüpfung, oder es ist ein fester Termin gesetzt, der die Berechnung übersteuert.'],
  ],
  related: [['critical-path-method', 'Der kritische Pfad'], ['what-is-a-gantt-chart', 'Was ist ein Gantt-Diagramm?'], ['gantt-chart-mistakes', 'Häufige Planungsfehler']],
},

'gantt-chart-examples': {
  h1: "Gantt-Diagramm Beispiele aus acht Branchen",
  metaTitle: "Gantt-Diagramm: Beispiele aus der Praxis",
  metaDesc: "Acht Gantt-Diagramm-Beispiele: Bau, Softwareentwicklung, Marketing, Veranstaltung, Umzug, Dissertation, Produkteinführung und Einarbeitung.",
  date: "2026-07-19",
  lead: "Ein <strong>Gantt-Diagramm</strong> sieht in jeder Branche anders aus — nicht in der Darstellung, sondern in der Gliederung. Acht Beispiele, jeweils mit den Phasen, die dort tatsächlich verwendet werden, und dem Vorgang, der typischerweise auf dem kritischen Pfad liegt.",
  figIntro: "Dieselbe Darstellung, acht sehr unterschiedliche Gliederungen:",
  sections: [
    [
      "Bauprojekt",
      `<p>Phasen: Planung und Genehmigung, Erdarbeiten, Rohbau, Gebäudehülle, Ausbau, Haustechnik, Abnahme. Zeitachse in Wochen, Laufzeit typischerweise neun bis achtzehn Monate, 40 bis 70 Vorgänge.</p>
        <p>Kein anderes Beispiel ist so stark verkettet. Fundamente vor dem Aushub gibt es nicht, Trockenbau vor der bestandenen Rohinstallationsabnahme auch nicht — hier arbeiten Ende-Anfang-Verknüpfungen und der <a href="/de/blog/critical-path-method.html">kritische Pfad</a> wirklich. Meilensteine sind Baugenehmigung erteilt, Fundament abgenommen, Gebäude dicht, Schlussabnahme.</p>
        <p>Auf dem kritischen Pfad liegt fast immer die Genehmigung, nicht das Bauen: Sechs Wochen Behördenlauf verschieben den Bezugstermin um sechs Wochen, während drei zusätzliche Personen im Innenausbau daran nichts ändern. Wetterabhängige Vorgänge — Erdarbeiten, Beton, Dach — gehören mit eigenem Puffer versehen. Und Aushärtezeiten stehen besser als eigener Vorgang „Beton aushärten, 7 Tage“ im Plan als versteckt in einer Verzögerung im Verknüpfungsdialog, wo sie niemand wiederfindet. Ausgangspunkt: die <a href="/de/templates/construction.html">Bauvorlage</a>.</p>`
    ],
    [
      "Softwareentwicklung",
      `<p>Phasen: Anforderungen, Architektur, Entwicklung in Iterationen, Integration, Test, Migration, Inbetriebnahme. Zeitachse in Wochen, Laufzeit drei bis neun Monate.</p>
        <p>Der entscheidende Kunstgriff ist die Flughöhe: Halten Sie den Plan auf Ebene der Epics und Iterationen und lassen Sie die tägliche Arbeit im Ticketsystem. Eine zweiwöchige Iteration ist ein einziger Sammelbalken mit einem Meilenstein am Ende, nicht dreißig einzelne Storybalken. So bleibt der Plan für Auftraggeber lesbar, die nicht im Backlog leben.</p>
        <p>Hier ist die Falle die Testphase: Sie wird regelmäßig als letzter kurzer Balken geplant und dauert dann doppelt so lang. Test und Fehlerbehebung gehören als Schleife abgebildet — „Testdurchlauf 1“, „Fehler beheben“, „Testdurchlauf 2“ —, nicht als Einbahnstraße. Zweiter Klassiker: die Datenmigration, die als Nebensatz auftaucht und in Wahrheit vier Wochen Probeläufe braucht. Meilensteine: Anforderungen freigegeben, funktional vollständig, Code-Freeze, Produktivstart.</p>`
    ],
    [
      "Marketingkampagne",
      `<p>Phasen: Strategie, Konzept, Produktion, Freigaben, Ausspielung, Auswertung. Mehrere Spuren laufen parallel — Text, Gestaltung, E-Mail-Strecke, bezahlte Anzeigen, Social Media —, deshalb empfiehlt sich eine Gruppierung nach Arbeitsstrang statt nach Zeit.</p>
        <p>Der Engpass sind die Freigaben. Zwischen fertigem Entwurf und Veröffentlichung liegen in größeren Organisationen regelmäßig zwei Wochen für Fachbereich, Rechtsabteilung und Markenprüfung, die niemand einplant. Machen Sie daraus einen sichtbaren Vorgang mit realistischer Dauer statt einer stillen Annahme — das ist der einzige Weg, die Diskussion vor dem Kampagnenstart zu führen statt danach.</p>
        <p>Rechnen Sie außerdem rückwärts von den Kanalvorlaufzeiten: Druckerzeugnisse brauchen zehn Werktage, Anzeigenprüfungen der Plattformen ein bis drei Tage, eine E-Mail-Strecke einen vollständigen Testversand mindestens 48 Stunden vor dem Versandtermin. Diese Fristen sind fest und lassen sich nicht durch mehr Personal verkürzen — sie gehören deshalb als eigene Vorgänge in den Plan.</p>
        <p>Meilensteine: Konzept freigegeben, Motive abgenommen, Kampagnenstart, Abschlussauswertung. Ausgangspunkt: die <a href="/de/templates/marketing.html">Marketingvorlage</a>.</p>`
    ],
    [
      "Veranstaltung",
      `<p>Phasen: Konzept, Location, Dienstleister, Programm, Anmeldung, Aufbau, Durchführung, Abbau. Zeitachse in Wochen, für die letzten zehn Tage in Tagen.</p>
        <p>Der Termin steht fest, also wird rückwärts geplant: Man beginnt beim Veranstaltungstag und arbeitet sich zurück, bis jeder Vorgang seinen spätesten Anfangstermin hat. Genau das macht die Methode hier so wertvoll — wenn die Rückwärtsrechnung „Location buchen“ in die vergangene Woche schiebt, sind Sie bereits im Verzug und wissen es am ersten Planungstag statt zwei Monate später.</p>
        <p>Die Location ist der erste und einschränkendste Vorgang; Catering, Technik und Programm hängen alle an ihr. Rechnen Sie bei Einladungen mit Vorlauf: Save-the-date acht Wochen vorher, Anmeldeschluss zehn Tage vorher, endgültige Teilnehmerzahl an das Catering fünf Tage vorher. Meilensteine: Vertrag unterschrieben, Anmeldung offen, Regieablauf final, Veranstaltungstag.</p>`
    ],
    [
      "Büroumzug",
      `<p>Phasen: Flächensuche, Mietvertrag, Planung, Ausbau, IT-Infrastruktur, Umzug am Wochenende, Nacharbeiten. Laufzeit sechs bis zwölf Monate für den Vorlauf, 48 Stunden für den Umzug selbst.</p>
        <p>Die IT bestimmt den Termin, nicht die Möbel. Geschäftskundenanschlüsse haben Vorlaufzeiten von zwei bis vier Monaten, und ohne Leitung nützt der schönste Ausbau nichts. Der Anschlussauftrag gehört deshalb an den Anfang des Plans, nicht neben den Möbelkauf.</p>
        <p>Der Umzug selbst ist ein Vorgang von wenigen Tagen mit stundenweiser Zeitachse: Freitagabend abbauen, Samstag transportieren und aufbauen, Sonntag Systeme prüfen, Montagfrüh arbeitsfähig. Dieses Wochenende verträgt keinerlei Verzug, weshalb alle Vorbereitungen einen Puffer von mindestens einer Woche davor bekommen sollten.</p>
        <p>Der Mietvertrag ist der zweite harte Ankerpunkt: Er legt Übergabe- und Kündigungstermine der alten Fläche fest, und eine Überschneidung von vier bis sechs Wochen doppelter Miete ist keine Verschwendung, sondern der Puffer, der den Plan überhaupt erst tragfähig macht. Planen Sie außerdem explizit eine Nacharbeitsphase von zwei Wochen ein — Restarbeiten, fehlende Möbel, Mängelrügen fallen in jedem Umzug an und stehen in fast keinem Plan. Meilensteine: Vertrag unterschrieben, Ausbau abgenommen, Anschluss geschaltet, erster Arbeitstag am neuen Standort.</p>`
    ],
    [
      "Dissertation",
      `<p>Phasen: Exposé, Literatur, Methodik, Erhebung, Auswertung, Kapitel, Korrektur, Verteidigung. Zeitachse in Monaten, Laufzeit drei bis fünf Jahre.</p>
        <p>Läuft über Jahre statt Wochen, deshalb Meilensteine alle sechs bis acht Wochen. Ohne sie merkt niemand den Verzug — und bei einem Vorhaben ohne Vorgesetzten, der wöchentlich nachfragt, ist genau das die eigentliche Gefahr.</p>
        <p>Systematisch unterschätzt werden die Abhängigkeiten von Dritten: das Votum der Ethikkommission, die Rückmeldung der Betreuung zu einem Kapitel, die Verfügbarkeit von Probandinnen und Probanden. Diese Wartezeiten gehören als eigene Vorgänge mit realistischer Dauer in den Plan, denn sie liegen fast immer auf dem kritischen Pfad. Meilensteine: Exposé angenommen, Erhebung abgeschlossen, Rohfassung fertig, Einreichung, Verteidigung.</p>`
    ],
    [
      "Produkteinführung",
      `<p>Phasen: Marktanalyse, Entwicklung, Verpackung und Zulassung, Vertriebsvorbereitung, Kampagne, Markteintritt, Nachbereitung. Der Plan führt Produkt, Marketing, Vertrieb und Support auf einen gemeinsamen Termin zu.</p>
        <p>Zulassungen und Zertifizierungen liegen häufig auf dem kritischen Pfad und werden fast immer zu kurz geschätzt. Eine CE-Kennzeichnung, eine Lebensmittelzulassung oder eine Prüfung durch eine benannte Stelle dauert Wochen bis Monate und lässt sich weder beschleunigen noch parallelisieren — sie gehört als erster Vorgang in den Plan, nicht als vorletzter.</p>
        <p>Wegen der vielen bereichsübergreifenden Abhängigkeiten zeigt der kritische Pfad hier besonders deutlich, welche einzelne Verzögerung den Markteintritt verschiebt. Meilensteine: Funktionsumfang eingefroren, Zulassung erteilt, Vertrieb geschult, Markteintritt, Rückblick nach 30 Tagen.</p>`
    ],
    [
      "Einarbeitung neuer Mitarbeitender",
      `<p>Phasen: Vorbereitung vor dem ersten Tag, Woche eins, erster Monat, erste 90 Tage. Zeitachse in Tagen für den ersten Monat, danach in Wochen; insgesamt selten mehr als 25 Vorgänge.</p>
        <p>Ein kurzer Plan, aber einer mit hoher Wirkung — Arbeitsmittel, Zugänge und Konten müssen vor dem ersten Tag fertig sein, nicht an ihm. Der Vorgang „IT-Zugänge einrichten“ hat einen Vorlauf von fünf bis zehn Tagen und ist der einzige echte kritische Pfad dieses Plans.</p>
        <p>Weil sich dieselbe Struktur bei jeder Einstellung wiederholt, lohnt sich hier eine Vorlage besonders: einmal sauber gebaut, danach nur das Startdatum ändern. Meilensteine: Arbeitsplatz bereit, erster Tag, erste eigenständige Aufgabe abgeschlossen, Rückmeldegespräch nach 90 Tagen.</p>`
    ],
    [
      "Was allen gemeinsam ist",
      `<p>Vier bis acht Phasen, zwischen 20 und 60 Vorgänge, fünf bis zehn Meilensteine. Die Branche ändert die Inhalte, nicht die Struktur. Was ein gutes Gantt-Diagramm über alle acht Beispiele hinweg auszeichnet:</p>
        <ul>
          <li><strong>Klare Phasen.</strong> Zusammengehörige Vorgänge gruppieren, damit der Plan sich wie eine Erzählung liest und nicht wie eine Wand aus Balken.</li>
          <li><strong>Echte Abhängigkeiten.</strong> Nur verknüpfen, was tatsächlich wartet — dann rückt bei einer Verschiebung alles Übrige von selbst mit.</li>
          <li><strong>Sichtbare Meilensteine.</strong> Freigaben, Übergaben und Termine als eigene Punkte, an denen sich alle orientieren können.</li>
          <li><strong>Hervorgehobener kritischer Pfad.</strong> Damit klar ist, welche Vorgänge den Endtermin bestimmen und welche nur beschäftigt aussehen.</li>
          <li><strong>Lesbare Dichte.</strong> Etwa 20 bis 60 Balken je Ansicht; größere Vorhaben in einen Rahmenplan und Detailpläne je Phase zerlegen.</li>
          <li><strong>Status auf einen Blick.</strong> Heute-Linie und Fertigstellungsgrad machen aus der Planung einen laufenden Bericht.</li>
        </ul>
        <p>Ebenso wichtig ist, was weggelassen wird. Ein Gantt-Diagramm ist ein Kommunikationsmittel, keine Aufgabendatenbank — Kleinteiliges gehört in eine Checkliste oder ein Ticketsystem, damit der Plan in einem Blick erfassbar bleibt.</p>`
    ],
    [
      "Womit anfangen",
      `<p>Nehmen Sie das nächstliegende Beispiel als Ausgangspunkt und passen Sie es an, statt mit einem leeren Blatt zu beginnen. Unsere <a href="/de/templates.html">Vorlagen</a> decken alle acht Fälle ab und lassen sich direkt im Browser öffnen: Vorgänge austauschen, Dauern anpassen, Verknüpfungen setzen, kritischen Pfad einblenden und als PDF, PNG, XLSX oder PPTX exportieren — ohne Konto.</p>
        <p>Wenn Ihnen die Grundlagen fehlen, beginnen Sie mit <a href="/de/blog/what-is-a-gantt-chart.html">was ein Gantt-Diagramm ist</a>; für den Aufbau von Grund auf führt die <a href="/de/blog/how-to-make-a-gantt-chart.html">Anleitung in sieben Schritten</a> durch den gesamten Weg.</p>`
    ]
  ],
  callout: "Kopieren Sie die Phasengliederung, nicht die Termine. Die Phasen einer Branche sind über Projekte hinweg stabil — die Dauern sind es nie. Ein übernommener Zeitplan aus einem fremden Projekt ist die häufigste Ursache für einen Plan, der von Anfang an nicht stimmt.",
  faq: [
    [
      "Wie sieht ein gutes Gantt-Diagramm aus?",
      "Vier bis acht Phasen, 20 bis 60 Vorgänge, fünf bis zehn Meilensteine und echte Abhängigkeiten. Der kritische Pfad ist hervorgehoben, eine Heute-Linie zeigt den Stand, und der Fertigstellungsgrad ist aktuell. Es passt auf eine Seite und lässt sich in einer Minute erklären."
    ],
    [
      "Welche Gantt-Diagramm-Beispiele gibt es?",
      "Typisch sind Bauzeitenpläne, Release-Pläne in der Softwareentwicklung, Kampagnenpläne im Marketing, Veranstaltungsplanungen, Büroumzüge, Dissertationszeitpläne, Produkteinführungen und Einarbeitungspläne. Alle stellen Vorgänge auf einer Zeitachse dar und unterscheiden sich nur in Phasengliederung, Zeiteinheit und Dichte."
    ],
    [
      "Wie viele Vorgänge sind zu viele?",
      "Ab etwa 150 pflegt den Plan niemand mehr. Dann besser in Teilpläne zerlegen: einen Rahmenplan auf Phasenebene für die Berichterstattung und je einen Detailplan pro Phase für das Team, das daran arbeitet."
    ],
    [
      "Kann man ein fremdes Gantt-Diagramm übernehmen?",
      "Die Gliederung ja, die Dauern nein. Phasen sind über Projekte hinweg erstaunlich stabil, Zeitschätzungen dagegen hängen an Team, Umfang und Rahmenbedingungen. Ein übernommener Zeitplan ist die häufigste Ursache für einen Plan, der von Anfang an nicht stimmt."
    ],
    [
      "Welche Zeiteinheit sollte die Achse haben?",
      "Tagesspalten für Vorhaben bis etwa acht Wochen, Wochenspalten für ein halbes bis ganzes Jahr, Monatsspalten für alles darüber. Manche Pläne mischen beides — eine Veranstaltung läuft in Wochen und schaltet für die letzten zehn Tage auf Tage um."
    ]
  ],
  related: [
    ["what-is-a-gantt-chart", "Was ist ein Gantt-Diagramm?"],
    ["how-to-make-a-gantt-chart", "Gantt-Diagramm erstellen"],
    ["gantt-chart-mistakes", "Häufige Planungsfehler"]
  ]
},

'gantt-chart-in-excel': {
  h1: "Gantt-Diagramm in Excel erstellen: Anleitung und Grenzen",
  metaTitle: "Gantt-Diagramm in Excel erstellen",
  metaDesc: "Gantt-Diagramm in Excel mit gestapelten Balken: Schritt für Schritt, mit Achsenformatierung, Fortschrittsbalken und den Grenzen der Methode.",
  date: "2026-07-19",
  lead: "Excel hat keinen Gantt-Diagrammtyp. Man baut ihn mit einem Trick: einem <strong>gestapelten Balkendiagramm</strong>, dessen erste Reihe unsichtbar gemacht wird. Das funktioniert und ist in zehn Minuten erledigt — hat aber eine klare Grenze.",
  figIntro: "Der Trick in einem Bild: unsichtbarer Vorlauf plus sichtbare Dauer.",
  sections: [
    [
      "Hat Excel einen Gantt-Diagrammtyp?",
      `<p>Nein. Öffnen Sie <strong>Einfügen ▸ Diagramme</strong>, finden Sie Säulen, Balken, Linien, Kreise, Flächen und Punktwolken — aber nichts, was „Gantt“ heißt. Was stattdessen überall verwendet wird, ist ein <strong>gestapeltes Balkendiagramm</strong>, bei dem die erste gestapelte Datenreihe unsichtbar formatiert wird. Übrig bleibt pro Zeile ein schwebender Balken, der genau dort beginnt, wo der Vorgang beginnt — optisch ein Gantt-Diagramm, technisch ein Balkendiagramm mit einer versteckten Reihe.</p>
        <p>Microsoft liefert unter <strong>Datei ▸ Neu</strong> mehrere herunterladbare Vorlagen mit Namen wie „Gantt-Projektplaner“. Auch die sind kein eigener Diagrammtyp: Sie verwenden entweder denselben Stapeltrick oder eine bedingte Formatierung über einem Kalenderraster. Beide Verfahren erklären wir hier — das erste ausführlich, das zweite als Alternative für alle, die lieber ohne Diagrammobjekt arbeiten.</p>
        <p>Die folgenden sechs Schritte bauen das Diagramm von Grund auf. Das dauert beim ersten Mal etwa zehn Minuten und hat den Vorteil, dass Sie hinterher jedes Element verstehen — was wichtig ist, denn beim Ändern eines Excel-Gantt-Diagramms geht ohne dieses Verständnis regelmäßig etwas kaputt.</p>`
    ],
    [
      "Schritt 1: Die Daten vorbereiten",
      `<p>Legen Sie auf einem leeren Blatt vier Spalten an: <strong>Vorgang</strong> (A), <strong>Start</strong> (B), <strong>Ende</strong> (C) und <strong>Dauer</strong> (D). Tragen Sie in B und C echte Datumswerte ein, nicht Text — Excel muss sie als Datum erkennen, sonst rechnet nichts.</p>
        <ul>
          <li><strong>Dauer</strong> berechnen Sie in D2 mit <code>=C2-B2</code> und ziehen die Formel nach unten. Excel speichert Datumswerte intern als fortlaufende Zahlen, die Subtraktion ergibt deshalb schlicht eine Anzahl Tage.</li>
          <li><strong>Abstand zum Projektstart</strong> ist die zweite Hilfsspalte (E) und der eigentliche Kniff: <code>=B2-$B$2</code>, wenn in B2 der früheste Projekttermin steht. Sie gibt an, wie viele Tage nach Projektbeginn ein Vorgang startet.</li>
        </ul>
        <p>Der Fehler, der an dieser Stelle am häufigsten passiert: Excel übernimmt in die Hilfsspalten automatisch das Datumsformat der Ausgangszellen, und aus der Zahl 4 wird der 04.01.1900. Markieren Sie deshalb die Spalten <em>Dauer</em> und <em>Abstand</em> und stellen Sie unter <strong>Start ▸ Zahl</strong> das Format auf <strong>Standard</strong> oder <strong>Zahl</strong> um. Wenn Ihr Diagramm später unsinnige Balkenlängen zeigt, ist fast immer das die Ursache.</p>
        <p>Für ein kleines Beispiel genügen fünf Zeilen: Recherche (1.–5. Juli, 4 Tage), Konzept (5.–12. Juli, 7 Tage), Umsetzung (12.–26. Juli, 14 Tage), Test (26. Juli–2. August, 7 Tage) und Freigabe (2.–4. August, 2 Tage). Der Abstand zum Projektstart lautet dafür 0, 4, 11, 25 und 32.</p>`
    ],
    [
      "Schritt 2: Das gestapelte Balkendiagramm einfügen",
      `<p>Markieren Sie zuerst die Spalte <strong>Vorgang</strong>, halten Sie dann die Strg-Taste gedrückt und markieren Sie zusätzlich <strong>Abstand</strong> und <strong>Dauer</strong>. Die Spalte <em>Ende</em> bleibt außen vor — das Diagramm braucht nur Startversatz und Länge.</p>
        <p>Dann <strong>Einfügen ▸ Diagramme ▸ Balken ▸ Gestapelte Balken (2D)</strong>. Excel zeichnet pro Zeile zwei aneinandergesetzte Segmente: links den Abstand, rechts die Dauer. Das sieht noch nicht nach einem Terminplan aus, sondern nach einem gewöhnlichen Balkendiagramm — das ist an dieser Stelle richtig so.</p>
        <p>Falls Excel die Spalten falsch zuordnet, öffnen Sie mit einem Rechtsklick auf das Diagramm den Dialog <strong>Daten auswählen</strong> und prüfen Sie: <em>Abstand</em> muss die erste, <em>Dauer</em> die zweite Datenreihe sein, und die Vorgangsnamen gehören auf die Achsenbeschriftung der Rubrikenachse. Die Reihenfolge der Reihen lässt sich dort mit den Pfeiltasten korrigieren.</p>`
    ],
    [
      "Schritt 3: Die erste Reihe unsichtbar machen",
      `<p>Das ist der entscheidende Handgriff. Klicken Sie einmal auf ein beliebiges Segment der Abstandsreihe — damit ist die gesamte Reihe markiert, nicht nur ein einzelner Punkt. Rechtsklick, <strong>Datenreihen formatieren</strong>, dann im Bereich <strong>Füllung und Linie</strong>:</p>
        <ul>
          <li><strong>Füllung ▸ Keine Füllung</strong></li>
          <li><strong>Rahmen ▸ Keine Linie</strong></li>
        </ul>
        <p>Die vorderen Segmente verschwinden, und jeder Dauerbalken schwebt an der Stelle, die seinem Startdatum entspricht. Genau in diesem Moment wird aus dem Balkendiagramm ein Gantt-Diagramm. Vergessen Sie den Rahmen nicht: Bleibt er stehen, sieht man weiterhin die Umrisse der unsichtbaren Segmente, und das Ergebnis wirkt unsauber.</p>`
    ],
    [
      "Schritt 4: Die Reihenfolge umkehren",
      `<p>Excel zeichnet in Balkendiagrammen die erste Tabellenzeile ganz unten. Ihre Vorgangsliste steht also auf dem Kopf, und der letzte Vorgang steht oben.</p>
        <p>Klicken Sie auf die <strong>vertikale Achse</strong> mit den Vorgangsnamen, Rechtsklick, <strong>Achse formatieren</strong>, und setzen Sie unter <strong>Achsenoptionen</strong> das Häkchen bei <strong>Kategorien in umgekehrter Reihenfolge</strong>. Der erste Vorgang springt nach oben, und die Liste liest sich wieder wie Ihre Tabelle.</p>
        <p>Dadurch wandert allerdings die Datumsachse an den unteren Rand. Setzen Sie im selben Bereich zusätzlich <strong>Horizontale Achse schneidet: Beim Höchstwert der Kategorie</strong>, dann steht die Zeitachse wieder oben — dort, wo man sie in einem Terminplan erwartet.</p>`
    ],
    [
      "Schritt 5: Datumsachse korrigieren",
      `<p>Die horizontale Achse beginnt zunächst bei null, sodass links ein breiter leerer Streifen entsteht. Klicken Sie die Achse an, öffnen Sie <strong>Achse formatieren</strong> und setzen Sie unter <strong>Grenzen</strong> das <strong>Minimum</strong> auf den Projektstart und das <strong>Maximum</strong> auf das Projektende.</p>
        <p>Excel erwartet hier serielle Zahlen, keine Datumsangaben. Der schnellste Weg dorthin: Schreiben Sie das gewünschte Datum in eine leere Zelle, formatieren Sie diese als <em>Standard</em> und lesen Sie die Zahl ab — der 1. Juli 2026 ist beispielsweise 46204. Diesen Wert tragen Sie als Grenze ein.</p>
        <p>Setzen Sie anschließend die <strong>Haupteinheit</strong> auf 7, wenn Sie Wochenraster wollen, oder auf 14 für zweiwöchige Abstände. Unter <strong>Zahl</strong> stellen Sie das Format der Achse auf ein Datumsformat wie <code>TT.MM.</code>, damit statt der seriellen Zahlen lesbare Termine erscheinen.</p>`
    ],
    [
      "Schritt 6: Feinschliff",
      `<p>Vier kleine Eingriffe machen aus dem funktionierenden Diagramm ein vorzeigbares:</p>
        <ul>
          <li><strong>Abstandsbreite</strong> in <em>Datenreihen formatieren ▸ Reihenoptionen</em> auf etwa 30 bis 50 Prozent reduzieren. Die Balken werden dicker, das Diagramm wirkt kompakter.</li>
          <li><strong>Legende löschen</strong> — sie zeigt nur noch „Abstand“ und „Dauer“ und erklärt nichts.</li>
          <li><strong>Phasen farblich trennen</strong>: Einzelne Punkte der Dauerreihe lassen sich getrennt einfärben, indem Sie zweimal langsam auf einen Balken klicken und nur diesen formatieren.</li>
          <li><strong>Meilensteine</strong> ergänzen Sie als zusätzliche Datenreihe mit dem Wert null, die Sie über <em>Diagrammtyp der Datenreihe ändern</em> in einen Punkt (XY) umwandeln und mit einer Rautenmarkierung versehen.</li>
        </ul>`
    ],
    [
      "Fortschritt und Abhängigkeiten nachrüsten",
      `<p><strong>Fortschritt</strong> lässt sich mit einer weiteren Hilfsspalte darstellen. Legen Sie eine Spalte <em>Fertig in Prozent</em> an und daneben eine Spalte <em>Erledigt</em> mit <code>=Dauer*Prozent</code>. Diese neue Spalte fügen Sie über <em>Daten auswählen ▸ Hinzufügen</em> als dritte gestapelte Reihe ein und färben sie dunkler als die Dauerreihe. Damit die Summe stimmt, muss die Dauerreihe dann allerdings nur noch den Restanteil enthalten — andernfalls werden die Balken zu lang. Der praktikablere Weg ist deshalb, die Dauer in „Erledigt“ und „Rest“ aufzuteilen und beide zu stapeln.</p>
        <p><strong>Abhängigkeiten</strong> kennt Excel nicht. Es gibt keine Pfeile zwischen Balken, und das Verschieben eines Vorgangs verschiebt keinen anderen. Der übliche Behelf ist, das Startdatum eines Nachfolgers als Formel auf das Ende des Vorgängers zu setzen — etwa <code>=C2</code> oder <code>=C2+1</code>. Damit läuft eine Änderung immerhin die Spalte hinunter. Sichtbare Verknüpfungen entstehen dadurch nicht, verzweigte Ketten mit mehreren Vorgängern werden schnell unlesbar, und Puffer oder ein kritischer Pfad lassen sich so nicht ermitteln.</p>`
    ],
    [
      "Der Weg ohne Diagramm: bedingte Formatierung",
      `<p>Wer sich mit Diagrammobjekten nicht anfreunden mag, baut das Gantt-Diagramm direkt in die Zellen. Legen Sie in der Kopfzeile ab Spalte F fortlaufende Datumswerte an — eine Spalte je Tag oder je Woche — und lassen Sie Vorgang, Start und Ende links stehen.</p>
        <p>Markieren Sie anschließend das gesamte Kalenderraster und wählen Sie <strong>Start ▸ Bedingte Formatierung ▸ Neue Regel ▸ Formel zur Ermittlung der zu formatierenden Zellen verwenden</strong>. Als Formel dient <code>=UND(F$1&gt;=$B2; F$1&lt;=$C2)</code>, als Format eine Hintergrundfarbe. Jede Zelle, deren Datum in den Zeitraum des Vorgangs fällt, wird eingefärbt.</p>
        <p>Der Vorteil: Das Raster aktualisiert sich bei jeder Terminänderung von selbst, es druckt sauber und lässt sich beliebig um Spalten erweitern. Der Nachteil: Bei mehr als einem Quartal in Tagesspalten wird das Blatt sehr breit, und Meilensteine, Fortschritt und Farbcodes brauchen jeweils eine eigene zusätzliche Regel.</p>`
    ],
    [
      "Vorlage statt Selbstbau",
      `<p>Wenn Sie nur eine funktionierende Datei brauchen, sparen Sie sich die sechs Schritte: Unsere <a href="/de/templates/excel.html">kostenlose Excel-Vorlage</a> enthält die Vorgangstabelle, die Hilfsspalten, das gestapelte Diagramm mit unsichtbarer erster Reihe, die umgekehrte Achsenreihenfolge und ein formatiertes Datumsraster bereits fertig eingerichtet. Sie tragen Vorgänge und Termine ein, das Diagramm folgt. In der <a href="/de/templates.html">Vorlagenübersicht</a> finden Sie außerdem branchenspezifische Varianten für Bau, Marketing und Softwareentwicklung.</p>`
    ],
    [
      "Wo die Methode endet",
      `<p>Excel kennt keine Abhängigkeiten. Verschiebt sich ein Vorgang, müssen Sie jedes nachfolgende Startdatum von Hand anpassen — und genau das unterbleibt in der Praxis nach der zweiten Änderung. Ab da beschreibt die Datei einen Plan, den es nicht mehr gibt.</p>
        <p>Ebenfalls nicht vorhanden: der <strong>kritische Pfad</strong>, die Berechnung von <strong>Puffer</strong>, ein echter <strong>Basisplan</strong> zum Vergleich von Soll und Ist sowie jede Form von Ressourcenauslastung. Dazu kommt der Pflegeaufwand am Diagramm selbst: Jeder neue Vorgang bedeutet, den Datenbereich zu erweitern und gegebenenfalls Farben nachzuziehen.</p>
        <p>Bis etwa zwanzig Vorgänge und bei einem Plan, der sich kaum ändert, ist Excel eine vernünftige Wahl — besonders, wenn die Daten ohnehin schon in einer Tabelle liegen. Darüber hinaus kostet die Handpflege mehr Zeit, als das Werkzeug spart. <a href="/de/app.html">gantts.app</a> rechnet Verschiebungen selbst, zeichnet Verknüpfungen als Pfeile, hebt den kritischen Pfad hervor und exportiert das Ergebnis auf Wunsch wieder als XLSX — ohne Konto und ohne Installation.</p>`
    ]
  ],
  callout: "Der entscheidende Unterschied ist nicht das Aussehen, sondern das Rechnen. Ein Excel-Gantt sieht richtig aus, aktualisiert sich aber nicht. Sobald sich Termine ändern — und sie ändern sich immer — wird aus einem Plan eine Zeichnung.",
  faq: [
    [
      "Hat Excel einen Gantt-Diagrammtyp?",
      "Nein. Im Menü Einfügen ▸ Diagramme gibt es keinen Eintrag „Gantt“. Man erstellt ihn aus einem gestapelten Balkendiagramm, dessen erste Datenreihe mit „Keine Füllung“ und „Keine Linie“ unsichtbar formatiert wird. Auch die von Microsoft angebotenen Gantt-Vorlagen verwenden intern genau diesen Trick oder eine bedingte Formatierung."
    ],
    [
      "Warum sind meine Balken in der falschen Reihenfolge?",
      "Excel zeichnet in Balkendiagrammen die erste Tabellenzeile unten. Markieren Sie die vertikale Achse, öffnen Sie „Achse formatieren“ und setzen Sie das Häkchen bei „Kategorien in umgekehrter Reihenfolge“. Zusätzlich empfiehlt sich „Horizontale Achse schneidet: Beim Höchstwert der Kategorie“, damit die Datumsachse oben bleibt."
    ],
    [
      "Warum zeigt meine Hilfsspalte ein Datum statt einer Zahl?",
      "Weil Excel das Datumsformat der Ausgangszellen auf die Ergebniszelle überträgt. Markieren Sie die Spalten „Dauer“ und „Abstand“ und stellen Sie das Zahlenformat auf „Standard“ oder „Zahl“. Das ist der mit Abstand häufigste Grund für unsinnige Balkenlängen."
    ],
    [
      "Wie stelle ich den Fortschritt in Prozent dar?",
      "Über eine zusätzliche Hilfsspalte: Dauer mal Fertigstellungsgrad ergibt den erledigten Anteil, die Restdauer den Rest. Beide werden als getrennte gestapelte Reihen eingefügt, der erledigte Teil dunkler eingefärbt. Der Balken zeigt damit sichtbar, wie weit der Vorgang gediehen ist."
    ],
    [
      "Kann Excel Abhängigkeiten abbilden?",
      "Nicht automatisch. Es gibt keine Verknüpfungspfeile und keine Neuberechnung. Man kann das Startdatum eines Nachfolgers per Formel an das Ende des Vorgängers binden, sodass Änderungen die Spalte hinunterlaufen — verzweigte Ketten, Puffer und ein kritischer Pfad lassen sich so aber nicht abbilden."
    ],
    [
      "Bis zu welcher Größe eignet sich Excel?",
      "Bis etwa zwanzig Vorgänge und bei einem Plan, der sich selten ändert. Darüber übersteigt der Pflegeaufwand den Nutzen deutlich, weil jede Terminverschiebung von Hand durch alle Nachfolger getragen werden muss."
    ],
    [
      "Gibt es eine Gantt-Vorlage für Excel?",
      "Ja — unsere Vorlage lässt sich als XLSX herunterladen und enthält Hilfsspalten, unsichtbare erste Datenreihe, umgekehrte Achsenreihenfolge und formatierte Datumsachse bereits fertig eingerichtet."
    ]
  ],
  related: [
    ["gantt-chart-in-google-sheets", "Gantt in Google Sheets"],
    ["gantt-chart-in-powerpoint", "Gantt in PowerPoint"],
    ["how-to-make-a-gantt-chart", "Gantt-Diagramm erstellen"]
  ]
},

'gantt-chart-in-google-sheets': {
  h1: "Gantt-Diagramm in Google Sheets: drei Wege",
  metaTitle: "Gantt-Diagramm in Google Sheets",
  metaDesc: "Drei Wege zum Gantt-Diagramm in Google Sheets: gestapelte Balken, die native Zeitachsen-Ansicht und bedingte Formatierung — Schritt für Schritt.",
  date: "2026-07-19",
  lead: "Google Sheets bietet drei Wege zu einem <strong>Gantt-Diagramm</strong>, und sie unterscheiden sich stärker, als man erwartet: einen Diagramm-Trick, eine eingebaute Zeitachsen-Ansicht und eine Variante ganz ohne Diagramm.",
  figIntro: "Drei Wege, je nach dem, was Sie brauchen:",
  sections: [
    [
      "Kann Google Sheets Gantt-Diagramme?",
      `<p>Einen eigenen Diagrammtyp „Gantt“ gibt es nicht, so wie es Kreis- oder Liniendiagramme gibt. Es gibt aber drei belastbare Wege zu einem Terminplan, und die Wahl zwischen ihnen entscheidet mehr über das Ergebnis als jede spätere Formatierung:</p>
        <ul>
          <li><strong>Gestapeltes Balkendiagramm</strong> — der klassische Tabellentrick mit zwei Hilfsspalten. Sie erhalten ein echtes Diagrammobjekt, das sich kopieren, umgestalten und weitergeben lässt.</li>
          <li><strong>Zeitachsen-Ansicht</strong> — eine eingebaute Ansicht unter <strong>Einfügen ▸ Zeitachse</strong>, die aus einer Vorgangstabelle Karten auf einer Zeitleiste macht. Am schnellsten eingerichtet, aber kein Bild und kein Diagramm.</li>
          <li><strong>Bedingte Formatierung</strong> — ein eingefärbtes Kalenderraster direkt in den Zellen, das sich bei jeder Terminänderung selbst aktualisiert.</li>
        </ul>
        <p>Keiner der drei Wege berechnet den <a href="/de/blog/critical-path-method.html">kritischen Pfad</a>, zeichnet Verknüpfungspfeile oder verschiebt Nachfolger, wenn ein Vorgang sich verspätet. Genau an dieser Stelle wechseln die meisten Teams irgendwann das Werkzeug. Zuerst aber die Wege im Einzelnen.</p>`
    ],
    [
      "Weg 1: gestapeltes Balkendiagramm",
      `<p>Dasselbe Prinzip wie in Excel: Jeder Vorgang bekommt einen unsichtbaren Vorlaufbalken, der ihn an seine Startposition schiebt, gefolgt von einem sichtbaren Dauerbalken. Gestapelt ergibt das schwebende Balken, die sich wie ein Gantt-Diagramm lesen.</p>
        <p>Legen Sie zunächst die Tabelle an — Vorgänge in Spalte A, Startdatum in B, Enddatum in C — und ergänzen Sie zwei berechnete Spalten:</p>
        <ul>
          <li><strong>Abstand zum Projektstart</strong> (Spalte D): <code>=B2-$B$2</code>, wenn in B2 der früheste Termin des Projekts steht.</li>
          <li><strong>Dauer</strong> (Spalte E): <code>=C2-B2</code>.</li>
        </ul>
        <p>Beide Spalten müssen anschließend über <strong>Format ▸ Zahl ▸ Zahl</strong> als Zahl formatiert werden. Sheets übernimmt sonst das Datumsformat der Ausgangszellen, und aus einer Dauer von sieben Tagen wird der 7. Januar 1900. Das ist der Schritt, den fast alle beim ersten Versuch übersehen.</p>
        <p>Dann markieren Sie die Spalten <em>Vorgang</em>, <em>Abstand</em> und <em>Dauer</em> — Strg beziehungsweise Cmd gedrückt halten, um nicht benachbarte Spalten zu wählen — und gehen auf <strong>Einfügen ▸ Diagramm</strong>. Im Diagrammeditor rechts stellen Sie unter <em>Einrichtung</em> den <strong>Diagrammtyp</strong> auf <strong>Gestapeltes Balkendiagramm</strong>. Danach:</p>
        <ol>
          <li>Wechseln Sie auf den Reiter <strong>Anpassen</strong> und öffnen Sie <strong>Serie</strong>. Wählen Sie oben die Serie <em>Abstand</em> und setzen Sie die <strong>Farbe</strong> auf <strong>Keine</strong>. Der Vorlauf verschwindet, die Dauerbalken rücken an ihre Position.</li>
          <li>Öffnen Sie <strong>Vertikale Achse</strong> und aktivieren Sie die Option, welche die Achsenreihenfolge umkehrt. Damit steht der erste Vorgang oben statt unten.</li>
          <li>Färben Sie die Serie <em>Dauer</em> passend ein, vergeben Sie unter <strong>Diagramm- und Achsentitel</strong> einen Titel und blenden Sie die Legende aus — sie erklärt an dieser Stelle nichts mehr.</li>
        </ol>
        <p>Das Ergebnis ist ein echtes Diagrammobjekt: Sie können es in Docs oder Präsentationen kopieren, als Bild herunterladen und jederzeit neu formatieren. Der Preis sind die Hilfsspalten, die bei jeder Terminänderung mitgepflegt werden wollen.</p>`
    ],
    [
      "Weg 2: die native Zeitachsen-Ansicht",
      `<p>Unter <strong>Einfügen ▸ Zeitachse</strong> gibt es eine eingebaute Ansicht, die ganz ohne Formeln auskommt. Sie erwartet eine schlichte Tabelle mit mindestens drei Spalten: einer Bezeichnung, einem Startdatum und einem Enddatum. Optionale Spalten wie Verantwortliche, Phase oder Fortschritt lassen sich zusätzlich anzeigen.</p>
        <ol>
          <li>Markieren Sie den Datenbereich einschließlich der Kopfzeile.</li>
          <li><strong>Einfügen ▸ Zeitachse</strong>, den Bereich im Dialog bestätigen und auf <strong>Erstellen</strong> klicken.</li>
          <li>Es entsteht ein neuer Tabellenblatt-Reiter mit der Zeitachse. Ordnen Sie im Einstellungsbereich rechts die Spalten zu: <em>Kartentitel</em>, <em>Startdatum</em>, <em>Enddatum</em>, <em>Kartenfarbe</em> und <em>Gruppieren nach</em>.</li>
        </ol>
        <p>Die Zoomstufe lässt sich zwischen Tagen, Wochen, Monaten, Quartalen und Jahren umschalten, die Ansicht seitlich verschieben, und ein Klick auf eine Karte führt zurück in die Ursprungszeile der Tabelle. Für Roadmaps und grobe Terminübersichten ist das der bequemste Weg überhaupt.</p>
        <p>Zwei Einschränkungen sollten Sie vorher kennen. Erstens ist die Zeitachse eine <em>Ansicht</em>, kein Diagrammobjekt: Sie lässt sich nicht als Bild in eine Folie kopieren und nicht wie ein Diagramm umgestalten. Zweitens rechnet sie nichts — keine Verknüpfungen, kein kritischer Pfad, keine Verschiebung von Nachfolgern. Sie stellt Zeiträume dar, mehr nicht.</p>`
    ],
    [
      "Weg 3: bedingte Formatierung",
      `<p>Ohne Diagramm: Legen Sie in der Kopfzeile eine Spalte je Tag oder je Woche an und lassen Sie Vorgang, Start und Ende links stehen. Markieren Sie dann das gesamte Kalenderraster und wählen Sie <strong>Format ▸ Bedingte Formatierung</strong>. Unter <em>Formatierungsregeln</em> stellen Sie auf <strong>Benutzerdefinierte Formel ist</strong> um und tragen ein: <code>=UND(F$1&gt;=$B2; F$1&lt;=$C2)</code>. Als Formatierung genügt eine Hintergrundfarbe.</p>
        <p>Jede Zelle, deren Kopfdatum in den Zeitraum ihres Vorgangs fällt, färbt sich ein. Das Ergebnis ist ein Raster, das sich wie ein Gantt-Diagramm liest, in der Tabelle lebt und sich bei jeder Terminänderung sofort selbst aktualisiert.</p>
        <p>Praktisch für kurze Zeiträume und für Pläne, die ohnehin in der Tabelle bearbeitet werden. Unübersichtlich wird es ab etwa einem Quartal in Tagesspalten — dann lohnt der Wechsel auf Wochenspalten mit <code>=UND($C2&gt;=F$1; $B2&lt;=F$1+6)</code>, damit auch Vorgänge erfasst werden, die eine Woche nur teilweise berühren.</p>`
    ],
    [
      "Mit einer Vorlage starten",
      `<p>Der schnellste Weg zu einem fertigen Diagramm ist, die Mechanik gar nicht erst selbst zu bauen. Unsere <a href="/de/templates/google-sheets.html">kostenlose Google-Sheets-Vorlage</a> enthält Hilfsspalten, Diagramm und Formatierung bereits fertig — Sie legen über <em>Datei ▸ Kopie erstellen</em> eine eigene Kopie in Ihrem Drive an und überschreiben die Beispielzeilen. In der <a href="/de/templates.html">Vorlagenübersicht</a> finden Sie außerdem Varianten für Excel, PowerPoint und einzelne Branchen.</p>`
    ],
    [
      "Welcher Weg wofür",
      `<p>Zeitachsen-Ansicht für den schnellen Überblick und für Roadmaps, die niemand exportieren muss. Gestapelte Balken für ein Diagramm, das in eine Präsentation oder einen Bericht wandern soll. Bedingte Formatierung für einen Plan, der in der Tabelle bleibt und häufig angefasst wird.</p>
        <p>Als Faustregel: Wenn das Ergebnis das Dokument verlassen soll, brauchen Sie ein Diagrammobjekt — also Weg 1. Wenn es nur gelesen wird, ist Weg 2 in einem Bruchteil der Zeit fertig. Und wenn der Plan täglich angefasst wird, gewinnt Weg 3, weil er als einziger keinen zweiten Ort hat, an dem etwas veralten kann.</p>
        <p>Die Wege lassen sich auch kombinieren, ohne dass Sie die Daten doppelt pflegen: Alle drei greifen auf dieselben Spalten für Vorgang, Start und Ende zu. Ein Plan kann also gleichzeitig eine Zeitachsen-Ansicht für die wöchentliche Abstimmung und ein Balkendiagramm für den Monatsbericht besitzen. Was Sie in beiden Fällen von Hand nachziehen müssen, sind allein die Hilfsspalten für Abstand und Dauer — und die nur, wenn Sie Weg 1 nutzen.</p>`
    ],
    [
      "Die Ansicht verfeinern",
      `<p>Ein paar Ergänzungen machen jedes Sheets-Gantt lesbarer:</p>
        <ul>
          <li><strong>Nach Phase gruppieren</strong> — eine Spalte „Phase“ ergänzen und entweder danach sortieren oder sie in der Zeitachsen-Ansicht als <em>Gruppieren nach</em> verwenden.</li>
          <li><strong>Fortschritt zeigen</strong> — eine Spalte mit dem Fertigstellungsgrad anlegen und im Balkendiagramm die Dauer in „erledigt“ und „offen“ aufteilen. Zwei gestapelte Serien in zwei Tönen derselben Farbe genügen.</li>
          <li><strong>Meilensteine markieren</strong> — Vorgänge mit der Dauer null in einer Signalfarbe einfärben, damit sie als Punkt und nicht als Balken gelesen werden.</li>
          <li><strong>Heutiges Datum</strong> — in der bedingten Formatierung eine zweite Regel mit <code>=F$1=HEUTE()</code> anlegen, die die Tagesspalte farblich hervorhebt.</li>
        </ul>`
    ],
    [
      "Abhängigkeiten nachbilden — und die gemeinsame Grenze",
      `<p>Abhängigkeiten sind die harte Grenze. Google Sheets kennt den Gedanken „Vorgang B beginnt, wenn Vorgang A endet“ nicht. Nachbilden lässt er sich per Formel, indem das Startdatum eines Nachfolgers auf das Ende seines Vorgängers verweist — etwa <code>=C2+1</code>. Eine Änderung läuft dann immerhin die Spalte hinunter.</p>
        <p>Sichtbare Pfeile entstehen dadurch nicht, Vorgänge mit mehreren Vorgängern brauchen verschachtelte MAX-Formeln, und spätestens beim ersten Einfügen einer Zeile in der Mitte geraten die Bezüge durcheinander. Puffer, ein <a href="/de/blog/critical-path-method.html">kritischer Pfad</a> und ein <a href="/de/blog/gantt-baseline-variance.html">Basisplan</a> zum Soll-Ist-Vergleich sind auf diesem Weg nicht erreichbar.</p>
        <p>Der echte Vorteil von Sheets ist die gemeinsame Bearbeitung in Echtzeit samt Versionsverlauf und Kommentaren. Wenn Sie die brauchen und der Plan überschaubar bleibt, ist Sheets eine gute Wahl. Sobald der Plan selbst rechnen soll, brauchen Sie ein Planungswerkzeug: <a href="/de/app.html">gantts.app</a> verknüpft Vorgänge, verschiebt Nachfolger automatisch, hebt den kritischen Pfad hervor und exportiert nach Excel, PowerPoint, PDF oder PNG — ohne Konto und ohne Installation.</p>`
    ]
  ],
  callout: "Die native Zeitachsen-Ansicht ist kein Gantt-Diagramm, auch wenn sie so aussieht. Sie stellt Zeiträume dar, kennt aber weder Verknüpfungen noch einen kritischen Pfad. Für eine Übersicht reicht das; für einen Terminplan, der Verschiebungen selbst nachzieht, nicht.",
  faq: [
    [
      "Hat Google Sheets eine Gantt-Funktion?",
      "Einen Diagrammtyp „Gantt“ gibt es nicht. Es gibt aber eine eingebaute Zeitachsen-Ansicht unter Einfügen ▸ Zeitachse, die aus Start- und Enddaten eine Zeitleiste mit Karten erzeugt, und den Umweg über ein gestapeltes Balkendiagramm. Abhängigkeiten oder einen kritischen Pfad unterstützt keiner der beiden Wege."
    ],
    [
      "Wie erstelle ich ein Gantt-Diagramm in Google Sheets?",
      "Am flexibelsten mit einem gestapelten Balkendiagramm: zwei Hilfsspalten für Abstand zum Projektstart und Dauer anlegen, Einfügen ▸ Diagramm, Diagrammtyp auf „Gestapeltes Balkendiagramm“ stellen, die Abstandsserie auf die Farbe „Keine“ setzen und die Reihenfolge der vertikalen Achse umkehren."
    ],
    [
      "Warum sehen meine Hilfsspalten wie Datumsangaben aus?",
      "Weil Sheets das Datumsformat der Ausgangszellen übernimmt. Markieren Sie die Spalten für Abstand und Dauer und setzen Sie über Format ▸ Zahl ▸ Zahl ein reines Zahlenformat. Ohne diesen Schritt zeichnet das Diagramm unsinnige Balkenlängen."
    ],
    [
      "Was ist die Zeitachsen-Ansicht in Google Sheets?",
      "Eine eingebaute Ansicht, die eine Tabelle mit Start- und Enddaten in Karten auf einer Zeitleiste verwandelt. Sie ist schnell eingerichtet und lässt sich zwischen Tagen und Jahren zoomen, ist aber ein Bildschirmwerkzeug und kein Diagrammobjekt — und sie rechnet weder Abhängigkeiten noch einen kritischen Pfad."
    ],
    [
      "Wie füge ich Abhängigkeiten hinzu?",
      "Nur behelfsweise. Sie können das Startdatum eines Nachfolgers per Formel an das Enddatum seines Vorgängers binden, sodass Änderungen die Spalte hinunterlaufen. Pfeile, verzweigte Ketten, Puffer und ein kritischer Pfad lassen sich so nicht abbilden — dafür braucht es ein Planungswerkzeug."
    ],
    [
      "Kann man in Google Sheets gemeinsam am Plan arbeiten?",
      "Ja, das ist der größte Vorteil gegenüber Excel — mehrere Personen bearbeiten dieselbe Datei in Echtzeit, mit Kommentaren und vollständigem Versionsverlauf."
    ],
    [
      "Wie bekomme ich den Plan nach Excel oder PowerPoint?",
      "Über Datei ▸ Herunterladen ▸ Microsoft Excel (.xlsx) laden Sie die Tabelle samt Diagramm herunter; für eine Folie kopieren Sie das Diagramm als Bild. Schneller ist es, den Plan in einem Gantt-Werkzeug zu bauen und direkt nach Excel, PowerPoint, PDF oder PNG zu exportieren."
    ]
  ],
  related: [
    ["gantt-chart-in-excel", "Gantt in Excel"],
    ["gantt-chart-in-powerpoint", "Gantt in PowerPoint"],
    ["best-free-gantt-chart-software", "Kostenlose Werkzeuge im Vergleich"]
  ]
},

'gantt-chart-in-powerpoint': {
  h1: "Gantt-Diagramm in PowerPoint: Diagramm oder Formen",
  metaTitle: "Gantt-Diagramm in PowerPoint erstellen",
  metaDesc: "Gantt-Diagramm in PowerPoint auf zwei Wegen: als gestapeltes Balkendiagramm oder aus Formen — Schritt für Schritt, mit Vor- und Nachteilen.",
  date: "2026-07-19",
  lead: "In PowerPoint entsteht ein <strong>Gantt-Diagramm</strong> auf zwei Wegen: als Diagramm mit Datenblatt oder von Hand aus Rechtecken. Welcher richtig ist, hängt allein davon ab, ob sich die Daten noch ändern werden.",
  figIntro: "Zwei Wege, zwei sehr unterschiedliche Arbeitsweisen:",
  sections: [
    [
      "Zwei Wege — und wie man wählt",
      `<p>Einen Objekttyp „Gantt-Diagramm“ gibt es in PowerPoint nicht. Jede Methode ist ein Umweg, und zwei davon lohnen sich:</p>
        <ul>
          <li><strong>Gestapeltes Balkendiagramm</strong> — das eingebaute Balkendiagramm mit versteckter erster Reihe. Es bleibt datengebunden: Wer das Datenblatt ändert, ändert das Bild.</li>
          <li><strong>Formen oder SmartArt</strong> — jeder Balken ein Rechteck auf einem selbst gezogenen Raster. Volle Gestaltungsfreiheit, keinerlei Automatik.</li>
        </ul>
        <p>Die Entscheidung fällt an einer einzigen Frage: Werden sich die Termine noch ändern? Wenn ja, nehmen Sie das Diagramm — eine Zahl im Datenblatt zu korrigieren dauert Sekunden, ein Dutzend Rechtecke nachzuziehen zehn Minuten. Wenn der Plan feststeht und die Folie einem strengen Layout folgen muss, nehmen Sie Formen.</p>
        <p>Beide Wege kennen weder Abhängigkeiten noch einen <a href="/de/blog/critical-path-method.html">kritischen Pfad</a>, und beide werden mühsam, sobald mehr als eine Handvoll Vorgänge darauf soll. Wenn Sie echte Verknüpfungen brauchen, wird keine Formatierung in PowerPoint einen Terminplan neu berechnen.</p>`
    ],
    [
      "Weg 1: gestapeltes Balkendiagramm, Schritt für Schritt",
      `<p>Es ist derselbe Trick wie in der Tabellenkalkulation, nur innerhalb der Diagramm-Engine von PowerPoint.</p>
        <ol>
          <li><strong>Einfügen ▸ Diagramm ▸ Balken ▸ Gestapelte Balken</strong> und mit <strong>OK</strong> bestätigen. Es öffnet sich ein kleines, mit der Folie verknüpftes Excel-Blatt.</li>
          <li>Tragen Sie dort drei Spalten ein: <strong>Vorgang</strong>, <strong>Abstand</strong> (Tage seit Projektstart) und <strong>Dauer</strong> (Länge in Tagen). Löschen Sie die überzähligen Beispielspalten und ziehen Sie den blauen Datenbereich auf Ihre Zeilenzahl. Dann das Blatt schließen.</li>
          <li>Klicken Sie auf einen Balken der Reihe <strong>Abstand</strong> und setzen Sie in <strong>Datenreihen formatieren</strong> die <strong>Füllung ▸ Keine Füllung</strong> und den <strong>Rahmen ▸ Keine Linie</strong>. Die Vorlaufsegmente verschwinden, die Dauerbalken schweben an ihrer Position.</li>
          <li>Klicken Sie auf die vertikale Achse, öffnen Sie <strong>Achse formatieren</strong> und aktivieren Sie <strong>Kategorien in umgekehrter Reihenfolge</strong>, damit der erste Vorgang oben steht. Ergänzend <strong>Horizontale Achse schneidet: Beim Höchstwert der Kategorie</strong>, damit die Zeitachse oben bleibt.</li>
          <li>Markieren Sie die horizontale Achse und setzen Sie unter <strong>Grenzen</strong> Minimum und Maximum auf den Tagesbereich Ihres Projekts, damit links und rechts keine leeren Flächen bleiben.</li>
          <li>Dauerbalken einfärben, Titel setzen, Legende löschen. Fertig.</li>
        </ol>
        <p>Weil es ein echtes Diagramm ist, lassen sich die Werte später über Rechtsklick ▸ <strong>Daten bearbeiten</strong> anpassen. Die Abstände und Dauern bleiben allerdings Tageszahlen, die Sie selbst ausrechnen — PowerPoint kennt keine Datumsachse in diesem Diagrammtyp.</p>
        <p>Zwei gängige Verfeinerungen: Ein <strong>Fortschrittsbalken</strong> entsteht, indem Sie die Dauer in zwei Spalten „erledigt“ und „offen“ aufteilen und beide gestapelt darstellen, den erledigten Teil dunkler. Ein <strong>Meilenstein</strong> ist eine Zeile mit einer Dauer nahe null in einer Signalfarbe — oder, sauberer, eine kleine Raute, die Sie als Form darüberlegen.</p>`
    ],
    [
      "Weg 2: aus Formen bauen",
      `<p>Wenn die Folie einem Markenlayout folgen muss, bauen Sie das Diagramm aus Formen:</p>
        <ol>
          <li>Fügen Sie eine <strong>Tabelle</strong> ein oder ziehen Sie senkrechte Linien als Zeitachse — eine Spalte je Woche oder je Monat.</li>
          <li>Schreiben Sie die Vorgangsnamen untereinander in die linke Spalte.</li>
          <li>Zeichnen Sie je Vorgang über <strong>Einfügen ▸ Formen ▸ Rechteck: abgerundete Ecken</strong> einen Balken und ziehen Sie ihn über die Spalten, die seinem Zeitraum entsprechen.</li>
          <li>Ergänzen Sie <strong>Rauten</strong> für Meilensteine und dünne Verbindungslinien, wo Sie eine Abhängigkeit andeuten wollen.</li>
          <li>Richten Sie alles über <strong>Formformat ▸ Anordnen ▸ Ausrichten</strong> aus und verteilen Sie die Zeilen mit <em>Vertikal verteilen</em> gleichmäßig. Zum Schluss alles markieren und <strong>gruppieren</strong>, damit die Zeichnung als Einheit verschiebbar bleibt.</li>
        </ol>
        <p>Drei Gewohnheiten verhindern, dass daraus ein Flickenteppich wird. Erstens: eine einheitliche Balkenhöhe und ein gemeinsames Grundraster — schalten Sie unter <strong>Ansicht</strong> die Führungslinien ein und lassen Sie die Formen einrasten. Zweitens: der <strong>Auswahlbereich</strong> (Start ▸ Bearbeiten ▸ Markieren ▸ Auswahlbereich) — bei dreißig Formen ist er der einzige Weg, eine bestimmte wiederzufinden und sinnvoll zu benennen. Drittens: die fertige Gruppe duplizieren, bevor Sie eine Variante bauen, etwa „geplant“ gegen „aktuell“.</p>
        <p>SmartArt-Grafiken aus den Kategorien <em>Prozess</em> und <em>Zeitachse</em> liefern schnell eine roadmap-artige Darstellung, sind aber keine maßstabsgetreuen Terminpläne — die Abstände folgen der Grafik, nicht dem Kalender. Für eine Phasenübersicht ist das in Ordnung, für einen Termin, über den diskutiert wird, nicht.</p>`
    ],
    [
      "Wann welcher Weg",
      `<p>Formen, wenn der Plan feststeht und die Folie einer Präsentation dient. Diagramm, wenn die Zahlen sich noch bewegen. Für eine Vorstandsfolie mit fünf Phasen ist der Formen-Weg fast immer der schnellere; für einen Statusbericht, der monatlich wiederkehrt, das Diagramm.</p>
        <p>Ein praktischer Test hilft: Zählen Sie, wie oft die Folie voraussichtlich neu erstellt wird. Einmal für eine Entscheidungsvorlage — dann Formen. Zwölfmal für eine monatliche Runde — dann Diagramm, denn die Einrichtungszeit fällt einmal an, die Änderungszeit zwölfmal. Ab etwa zehn Vorgängen kippt die Rechnung ohnehin zugunsten des Diagramms, weil das Ausrichten der Rechtecke mit jeder Zeile länger dauert.</p>
        <p>Und keiner von beiden, wenn der Plan tatsächlich gesteuert werden soll. Eine Folie ist ein Kommunikationsmittel, kein Arbeitsdokument — was auf ihr steht, ist eine Momentaufnahme des Plans, nicht der Plan selbst. Sobald jemand auf Grundlage der Folie Termine zusagt, ist das ein Zeichen, dass der Plan an einer anderen Stelle fehlt.</p>`
    ],
    [
      "Gestaltung für die Leinwand",
      `<p>Eine Folie verträgt sechs bis zehn Balken, nicht vierzig. Reduzieren Sie auf Phasenebene und heben Sie höchstens drei Meilensteine hervor. Was aus zehn Metern Entfernung lesbar sein muss, verträgt keine Detailplanung. Darüber hinaus:</p>
        <ul>
          <li><strong>Nach Phase einfärben.</strong> Jede Phase ein Farbton, damit das Publikum die Struktur vor den Details erfasst.</li>
          <li><strong>Meilensteine kontrastieren.</strong> Eine einzige Signalfarbe und eine Rautenform genügen; mehr Auszeichnung hebt nichts mehr hervor.</li>
          <li><strong>Große Pläne aufteilen.</strong> Eine Übersichtsfolie mit den Phasen, dahinter je eine Detailfolie — statt einer unlesbaren Gesamtfolie.</li>
          <li><strong>Heute-Linie einzeichnen.</strong> Eine senkrechte Linie am aktuellen Datum beantwortet die Statusfrage, bevor sie gestellt wird.</li>
          <li><strong>Beschriftungen kürzen.</strong> Zwei bis drei Wörter je Balken; alles Weitere gehört in die Notizen.</li>
          <li><strong>Farben an das Deck angleichen</strong>, damit das Diagramm wie ein Teil der Präsentation wirkt und nicht wie ein Fremdkörper.</li>
        </ul>`
    ],
    [
      "Der praktische Weg",
      `<p>Am schnellsten geht es, den Plan dort zu pflegen, wo er lebt, und ihn für die Folie zu exportieren. In <a href="/de/app.html">gantts.app</a> legen Sie Vorgänge an, ziehen die Balken auf ihre Termine, gruppieren nach Phasen und verknüpfen Abhängigkeiten; der Plan rechnet Verschiebungen selbst nach und hebt den kritischen Pfad hervor. Ein Klick auf <strong>Export ▸ PowerPoint</strong> erzeugt daraus eine PPTX-Datei mit dem Diagramm auf einer Folie.</p>
        <p>Ändert sich der Plan, ändern Sie ihn einmal und exportieren neu — statt Rechtecke nachzuziehen. Wer lieber von einer fertigen Folie ausgeht, findet in unserer <a href="/de/templates/powerpoint.html">PowerPoint-Vorlage</a> ein formatiertes Layout mit Farbschema und Meilensteinmarkierungen, in das nur noch die eigenen Vorgänge eingetragen werden.</p>`
    ],
    [
      "Häufigster Fehler",
      `<p>Den vollständigen Projektplan auf eine Folie zwingen. Präsentation und Planung haben unterschiedliche Detailgrade — die Folie zeigt die Geschichte, der Plan zeigt die Arbeit. Wer beides zusammenzwingt, erhält ein Dokument, das für die Besprechung zu klein gedruckt und für die Steuerung zu grob ist.</p>
        <p>Der zweithäufigste Fehler ist verwandt: eine Folie zu bauen und sie danach als Plan zu behandeln. Sobald jemand fragt „und was passiert, wenn sich der Test um zwei Wochen verschiebt“, zeigt sich, dass die Rechtecke nichts wissen. Halten Sie den Plan an einer Stelle und die Folie als das, was sie ist — ein Auszug.</p>
        <p>Ein dritter Fehler betrifft die Achse: Balken werden nach Augenmaß gezogen, statt sich am Raster zu orientieren. Ein Vorgang über sechs Wochen sieht dann so lang aus wie einer über vier, und in der Besprechung wird über Termine diskutiert, die nie so geplant waren. Wenn Sie mit Formen arbeiten, legen Sie deshalb zuerst das Raster fest und zeichnen Sie erst danach — nicht umgekehrt.</p>
        <p>Und schließlich: Aktualisieren Sie die Folie nicht in der Datei des letzten Monats. Wer die alte Präsentation kopiert und einzelne Balken verschiebt, trägt jeden früheren Zeichenfehler weiter. Erzeugen Sie die Folie stattdessen jedes Mal neu aus dem Plan — beim Diagrammweg über <strong>Daten bearbeiten</strong>, beim Werkzeugweg über einen erneuten Export.</p>`
    ]
  ],
  callout: "Eine Präsentationsfolie ist kein Projektplan. Zeigen Sie Phasen und die drei Meilensteine, auf die es ankommt. Wer vierzig Zeilen auf eine Folie presst, erreicht nur, dass niemand hinsieht.",
  faq: [
    [
      "Wie erstelle ich ein Gantt-Diagramm in PowerPoint?",
      "Entweder über Einfügen ▸ Diagramm ▸ Balken ▸ Gestapelte Balken, wobei die erste Datenreihe mit „Keine Füllung“ unsichtbar gemacht und die Achsenreihenfolge umgekehrt wird — oder von Hand aus abgerundeten Rechtecken auf einer selbst gezeichneten Zeitachse."
    ],
    [
      "Welcher Weg ist besser?",
      "Das Diagramm, wenn sich die Termine noch ändern: Eine Zahl im Datenblatt zu korrigieren dauert Sekunden. Die Formen, wenn der Plan feststeht und die Folie einem strengen Layout folgen muss."
    ],
    [
      "Hat PowerPoint eine Gantt-Vorlage?",
      "Einen eigenen Diagrammtyp gibt es nicht, wohl aber herunterladbare Foliensätze. Unsere kostenlose PowerPoint-Vorlage liefert eine fertig formatierte Zeitachsenfolie mit Farbschema und Meilensteinmarkierungen."
    ],
    [
      "Wie zeige ich Meilensteine auf einer Folie?",
      "Als Raute in einer Signalfarbe am jeweiligen Datum — im Diagrammweg als Datenreihe mit einer Dauer nahe null, im Formenweg als zusätzliche Form über dem Raster. Beschränken Sie sich auf höchstens drei, sonst hebt sich nichts mehr ab."
    ],
    [
      "Wie viele Vorgänge passen auf eine Folie?",
      "Sechs bis zehn. Alles darüber ist aus dem Publikum nicht mehr lesbar. Große Pläne teilt man in eine Übersichtsfolie auf Phasenebene und dahinter je eine Detailfolie."
    ],
    [
      "Kann man ein Gantt-Diagramm automatisch nach PowerPoint exportieren?",
      "Ja. gantts.app erzeugt aus dem Plan mit einem Klick eine PPTX-Datei mit dem Diagramm auf einer Folie — daneben stehen Exporte nach PDF, PNG und Excel zur Verfügung. Ändert sich der Plan, wird einfach neu exportiert."
    ]
  ],
  related: [
    ["gantt-chart-in-excel", "Gantt in Excel"],
    ["gantt-chart-examples", "Beispiele aus acht Branchen"],
    ["how-to-make-a-gantt-chart", "Gantt-Diagramm erstellen"]
  ]
},

'best-free-gantt-chart-software': {
  h1: "Kostenlose Gantt-Software im Vergleich: was wirklich gratis ist",
  metaTitle: "Kostenlose Gantt-Software im Vergleich",
  metaDesc: "Kostenlose Gantt-Software im Vergleich: was dauerhaft gratis ist, was Freemium mit Grenzen — und worauf Sie vor der Auswahl achten sollten.",
  date: "2026-07-19",
  lead: "Der Begriff <strong>kostenlos</strong> bedeutet bei Projektsoftware dreierlei: dauerhaft gratis, gratis bis zu einer Grenze, oder gratis für eine Testphase. Der Unterschied fällt meistens erst auf, wenn das Projekt schon läuft.",
  figIntro: "Drei Bedeutungen von „kostenlos“, die man vorher kennen sollte:",
  sections: [
    [
      "Die drei Arten von „kostenlos“",
      `<p><strong>Dauerhaft kostenlos</strong> heißt: voller Funktionsumfang, keine Nutzerbegrenzung, kein Ablaufdatum. Selten, und meist bei Werkzeugen ohne Serverkosten — also solchen, die im Browser rechnen statt in der Cloud. Auch Open-Source-Programme, die man herunterlädt, gehören hierher.</p>
        <p><strong>Freemium</strong> heißt: kostenlos bis zu einer Grenze. Üblich sind drei bis fünf Nutzer, ein bis zwei Projekte oder eine Obergrenze von etwa sechzig Vorgängen. Häufig sind zusätzlich einzelne Funktionen ausgenommen — der Export und der kritische Pfad sind die beiden Klassiker. Beim Überschreiten wird der Plan kostenpflichtig, und dann liegen die Daten bereits dort.</p>
        <p><strong>Testphase</strong> heißt: alles frei für 14 oder 30 Tage. Das ist keine kostenlose Software, sondern eine Probe. Gegen alle drei Modelle ist nichts einzuwenden — problematisch wird es nur, wenn das zweite oder dritte als „kostenlos“ beworben wird.</p>`
    ],
    [
      "Die Werkzeuge im Überblick",
      `<p>Preismodelle und Grenzen ändern sich laufend; die Angaben sind deshalb Anhaltspunkte und keine Zusicherung. Prüfen Sie vor der Entscheidung die aktuelle Preisseite des jeweiligen Anbieters.</p>
        <table>
          <thead><tr><th>Werkzeug</th><th>Modell</th><th>Anmeldung</th><th>Export</th><th>Kritischer Pfad</th></tr></thead>
          <tbody>
            <tr><td><strong>gantts.app</strong></td><td>Dauerhaft kostenlos, unbegrenzt</td><td><strong>Nein</strong></td><td>PDF, PNG, Excel, PPTX</td><td><strong>Ja, kostenlos</strong></td></tr>
            <tr><td>GanttProject</td><td>Open Source, Desktop</td><td>Nein (Download)</td><td>PDF, PNG, CSV</td><td>Ja</td></tr>
            <tr><td>ProjectLibre</td><td>Open Source, Desktop</td><td>Nein (Download)</td><td>PDF, MS-Project-Formate</td><td>Ja</td></tr>
            <tr><td>TeamGantt</td><td>Freemium, eng begrenzt</td><td>Ja</td><td>Eingeschränkt</td><td>Nur in Bezahltarifen</td></tr>
            <tr><td>GanttPRO</td><td>Testphase, danach kostenpflichtig</td><td>Ja</td><td>Ja (kostenpflichtig)</td><td>Ja (kostenpflichtig)</td></tr>
            <tr><td>Instagantt</td><td>Freemium</td><td>Ja</td><td>In höheren Tarifen</td><td>Ja (kostenpflichtig)</td></tr>
            <tr><td>Canva</td><td>Kostenloser Design-Tarif</td><td>Ja</td><td>PNG, PDF</td><td>Nein (statisch)</td></tr>
            <tr><td>MS Project</td><td>Kostenpflichtig</td><td>Ja</td><td>Ja</td><td>Ja</td></tr>
            <tr><td>Excel / Sheets</td><td>Kostenlos, wenn vorhanden</td><td>Teils</td><td>Ja</td><td>Nein</td></tr>
          </tbody>
        </table>`
    ],
    [
      "Was hinter den Zeilen steht",
      `<p><strong>gantts.app</strong> — unser eigenes Werkzeug, das sei offengelegt. Es läuft im Browser, ohne Konto und ohne Übertragung, mit unbegrenzten Vorgängen, Abhängigkeiten, Meilensteinen, automatischem kritischem Pfad und Export nach PDF, PNG, Excel und PowerPoint. Der Verzicht liegt woanders: Es ist ein Planungs- und Exportwerkzeug, keine Arbeitsplattform mit Zeiterfassung, Chat und Abrechnung.</p>
        <p><strong>GanttProject und ProjectLibre</strong> sind ausgereifte Open-Source-Programme für Windows, macOS und Linux. Beide beherrschen Abhängigkeiten, kritischen Pfad und Ressourcenzuordnung, ProjectLibre liest zusätzlich MS-Project-Dateien. Sie arbeiten offline und ohne Konto — dafür wirken die Oberflächen altbacken, und eine Synchronisation zwischen Geräten gibt es nicht.</p>
        <p><strong>TeamGantt</strong> ist eine gepflegte Kollaborationslösung, deren kostenloser Tarif typischerweise auf ein Projekt und etwa sechzig Vorgänge für wenige Nutzer begrenzt ist; kritischer Pfad und der volle Export gehören zu den Bezahltarifen. <strong>GanttPRO</strong> bietet keine dauerhaft kostenlose Stufe, sondern eine Testphase. <strong>Instagantt</strong> ist Freemium und vor allem für Asana-Nutzer interessant, die eine Zeitachse zu ihren Aufgaben brauchen.</p>
        <p><strong>Canva</strong> erzeugt aus Vorlagen eine ansehnliche Gantt-<em>Grafik</em> und exportiert sie im kostenlosen Tarif als PNG oder PDF. Es ist aber ein Gestaltungs- und kein Planungswerkzeug: Die Balken sind Formen, die Sie selbst positionieren — keine Verknüpfungen, keine Neuberechnung, kein kritischer Pfad. <strong>Microsoft Project</strong> ist umgekehrt das Schwergewicht mit Ressourcenausgleich, Basisplänen und tiefer Terminlogik, hat jedoch keinen kostenlosen Tarif. Und <strong>Excel oder Google Sheets</strong> haben Sie ohnehin: kostenlos, aber ohne Abhängigkeiten und mit viel Handarbeit — siehe die Anleitungen zu <a href="/de/blog/gantt-chart-in-excel.html">Excel</a> und <a href="/de/blog/gantt-chart-in-google-sheets.html">Google Sheets</a>.</p>`
    ],
    [
      "Worauf es bei der Auswahl ankommt",
      `<p>Vier Fragen klären fast jede Entscheidung.</p>
        <p><em>Rechnet das Werkzeug Abhängigkeiten?</em> Ohne das ist es ein Zeichenprogramm — hübsch, aber es verschiebt keinen Nachfolger, wenn ein Vorgang sich verspätet. <em>Zeigt es den kritischen Pfad?</em> Das ist die Funktion, die bei Freemium-Tarifen am häufigsten hinter der Bezahlschranke liegt, und zugleich die einzige, die beantwortet, welche Verzögerungen den Endtermin wirklich bewegen.</p>
        <p><em>Kommen die Daten wieder heraus</em> — als CSV, XLSX oder Projektdatei? Ein Werkzeug ohne offenen Export ist unabhängig vom Preis teuer, weil der Wechsel bedeutet, den Plan noch einmal zu bauen. <em>Wo liegen die Daten?</em> Das ist bei personenbezogenen Projektdaten keine Nebenfrage, sondern eine, die in vielen Organisationen vor der ersten Nutzung geklärt sein muss.</p>
        <p>Prüfen Sie diese Punkte an einem echten kleinen Plan, nicht an der Beispielvorlage des Anbieters. Legen Sie zehn Vorgänge an, verknüpfen Sie fünf davon, verschieben Sie den ersten um eine Woche und sehen Sie nach, was passiert. Verschieben sich die Nachfolger nicht, ist die Frage nach dem kritischen Pfad bereits beantwortet. Exportieren Sie anschließend einmal und öffnen Sie die Datei — mancher „Export“ ist ein Screenshot mit anderem Dateiende.</p>
        <p>Eine fünfte Frage lohnt sich, wenn ein Basisplan vorgesehen ist: Kann das Werkzeug einen <a href="/de/blog/gantt-baseline-variance.html">Basisplan</a> einfrieren und Soll gegen Ist stellen? Viele kostenlose Werkzeuge zeigen nur den aktuellen Stand — und der enthält jede bisherige Verschiebung bereits, sodass die Abweichung dauerhaft bei null steht.</p>`
    ],
    [
      "Die Anmeldefrage",
      `<p>Die meisten kostenlosen Werkzeuge verlangen ein Konto, bevor man den ersten Balken sieht. Das ist selten technisch nötig — es ist der Preis. Werkzeuge, die vollständig im Browser laufen und lokal speichern, brauchen weder Konto noch Server, weil nichts hochgeladen wird.</p>
        <p>Ohne Anmeldung nutzbar sind im Wesentlichen drei Gruppen: rein clientseitige Web-Werkzeuge wie <a href="/de/app.html">gantts.app</a>, heruntergeladene Open-Source-Programme wie GanttProject und ProjectLibre sowie einzelne kleine Web-Werkzeuge mit entsprechend eingeschränktem Funktionsumfang. Die gepflegten Plattformen — TeamGantt, GanttPRO, Instagantt, Canva — setzen durchweg ein Konto voraus.</p>
        <p>Der Unterschied ist praktisch spürbar. Ohne Konto liegen zwischen dem Öffnen der Seite und dem ersten Balken keine Bestätigungsmail, keine Passwortregeln und keine Auswahl eines Tarifs. Das klingt nach einer Kleinigkeit, entscheidet aber häufig darüber, ob ein Plan überhaupt entsteht — besonders, wenn jemand nur schnell prüfen will, ob eine Idee terminlich aufgeht.</p>
        <p>Ein Nachteil gehört dazu: Was lokal gespeichert wird, liegt in <em>einem</em> Browser auf <em>einem</em> Gerät. Wer den Plan auch morgen am anderen Rechner braucht, exportiert ihn und legt die Datei dorthin, wo Projektdateien ohnehin liegen. Das ist derselbe Umgang wie mit einer Tabellenkalkulation und für die meisten Vorhaben völlig ausreichend.</p>
        <p>gantts.app arbeitet ohne Anmeldung, ohne Übertragung, der Plan bleibt auf Ihrem Gerät. Das ist zugleich die Antwort auf die Datenschutzfrage — was das Gerät nicht verlässt, muss auch nicht vertraglich geregelt werden.</p>`
    ],
    [
      "Entscheidungshilfe",
      `<ul>
          <li><strong>Schnell ein Diagramm mit Export und kritischem Pfad?</strong> Ein clientseitiges Web-Werkzeug ohne Konto, etwa <a href="/de/app.html">gantts.app</a>.</li>
          <li><strong>Lieber installiert, offline, Open Source?</strong> GanttProject oder ProjectLibre.</li>
          <li><strong>Auf eine bezahlte Teamplattform hinarbeiten und innerhalb der Grenzen bleiben?</strong> Die kostenlosen Tarife von TeamGantt oder Instagantt.</li>
          <li><strong>Programmsteuerung mit Ressourcenausgleich?</strong> Microsoft Project oder GanttPRO — beide kostenpflichtig.</li>
          <li><strong>Nur ein Bild für eine Folie?</strong> Canva, oder ein PNG-Export aus einem Planungswerkzeug.</li>
          <li><strong>Die Daten dürfen das Haus nicht verlassen?</strong> Ein clientseitiges Web-Werkzeug oder ein installiertes Open-Source-Programm — beides überträgt nichts an einen Server.</li>
          <li><strong>Der Plan liegt schon in einer Tabelle?</strong> Bleiben Sie zunächst dort und wechseln Sie erst, wenn Abhängigkeiten ins Spiel kommen.</li>
        </ul>
        <p>Ein häufiger Irrtum ist, das größte Werkzeug für das sicherste zu halten. Für die meisten Vorhaben ist die entscheidende Größe nicht der Funktionsumfang, sondern die Wahrscheinlichkeit, dass der Plan nach vier Wochen noch gepflegt wird. Werkzeuge, die eine Anmeldung, eine Einführung und eine Freigabe der IT verlangen, verlieren genau an dieser Stelle — nicht weil sie schlechter sind, sondern weil sie zwischen dem Gedanken und dem ersten Balken zu viele Schritte legen.</p>
        <p>Entscheiden Sie vorher, ob Sie <strong>Abhängigkeiten</strong>, einen <strong>kritischen Pfad</strong> und einen <strong>echten Export</strong> brauchen. Genau an diesen drei Punkten enttäuschen kostenlose Tarife am häufigsten.</p>`
    ],
    [
      "Und wann sich Bezahlsoftware lohnt",
      `<p>Wenn mehrere Personen gleichzeitig am selben Plan arbeiten, wenn Ressourcen über viele Projekte hinweg geplant und ausgeglichen werden oder wenn Berichtspflichten gegenüber Auftraggebern bestehen, die ein bestimmtes Format verlangen. Auch die revisionssichere Ablage von Basisplänen ist ein guter Grund.</p>
        <p>Für einen einzelnen Plan mit dreißig Vorgängen ist bezahlte Projektsoftware fast immer überdimensioniert — die Einrichtungszeit übersteigt den Nutzen, und die Mehrzahl der Funktionen wird nie angefasst. Beginnen Sie klein, prüfen Sie den Export, und wechseln Sie erst, wenn Sie an eine echte Grenze stoßen.</p>
        <p>Rechnen Sie dabei die Wechselkosten mit ein, nicht nur den Lizenzpreis. Ein Umzug von einem Werkzeug ins nächste kostet die Zeit, den Plan zu übertragen, die Verknüpfungen neu zu setzen und den Basisplan neu zu vereinbaren — bei einem mittelgroßen Vorhaben leicht ein bis zwei Arbeitstage. Genau deshalb ist die Exportfrage keine Nebensache: Wer von Anfang an ein Werkzeug wählt, aus dem sich CSV oder XLSX herausholen lässt, hält diese Kosten klein.</p>`
    ]
  ],
  callout: "Prüfen Sie den Export, bevor Sie anfangen. Ein Werkzeug, aus dem die Daten nicht in einem offenen Format herauskommen, ist unabhängig vom Preis teuer — der Wechsel kostet dann die Arbeit, den Plan noch einmal zu bauen.",
  faq: [
    [
      "Welche Gantt-Software ist wirklich kostenlos?",
      "Werkzeuge ohne Serverkosten — solche, die im Browser rechnen und lokal speichern — sowie Open-Source-Programme wie GanttProject und ProjectLibre können dauerhaft kostenlos sein. Cloud-Dienste sind fast immer Freemium, weil laufende Serverkosten irgendwie gedeckt werden müssen."
    ],
    [
      "Was unterscheidet kostenlos, Freemium und Testphase?",
      "Kostenlos heißt: voller Umfang, kein Ablaufdatum. Freemium heißt: dauerhaft gratis bis zu einer Grenze, etwa ein Projekt, sechzig Vorgänge oder fünf Nutzer, wobei oft Export und kritischer Pfad ausgenommen sind. Eine Testphase gibt vollen Zugriff für 14 oder 30 Tage und wird danach kostenpflichtig."
    ],
    [
      "Braucht kostenlose Gantt-Software eine Anmeldung?",
      "Die meisten ja, technisch nötig ist es aber nur bei serverbasierten Diensten. Rein clientseitige Werkzeuge speichern im Browser und kommen ohne Konto aus; heruntergeladene Desktop-Programme ebenfalls."
    ],
    [
      "Welche kostenlosen Werkzeuge zeigen den kritischen Pfad?",
      "gantts.app berechnet ihn kostenlos, GanttProject und ProjectLibre beherrschen ihn auf dem Desktop. In mehreren kommerziellen Werkzeugen ist er den Bezahltarifen vorbehalten — prüfen Sie das, bevor Sie sich darauf verlassen."
    ],
    [
      "Worauf sollte man bei der Auswahl achten?",
      "Abhängigkeiten, kritischer Pfad, Exportformate und der Speicherort der Daten. Wer mit einem Basisplan arbeitet, prüft zusätzlich, ob sich Soll und Ist gegenüberstellen lassen. Alles andere ist Komfort."
    ],
    [
      "Ist kostenlose Software für Unternehmen geeignet?",
      "Für einzelne Pläne ja. Für gemeinsame Bearbeitung in Echtzeit, projektübergreifende Ressourcenplanung und formale Berichtspflichten meist nicht — dort beginnt der Bereich, in dem sich Bezahlsoftware rechnet."
    ]
  ],
  related: [
    ["what-is-a-gantt-chart", "Was ist ein Gantt-Diagramm?"],
    ["gantt-chart-in-excel", "Gantt in Excel"],
    ["how-to-make-a-gantt-chart", "Gantt-Diagramm erstellen"]
  ]
},

'gantt-baseline-variance': {
  h1: "Basisplan und Abweichung: Plan gegen Wirklichkeit",
  metaTitle: "Basisplan und Abweichung im Gantt",
  metaDesc: "Was ein Basisplan ist, wie man Abweichungen liest, wann neu basiert wird und welche Kennzahlen dabei wirklich helfen.",
  date: "2026-07-19",
  lead: "Ein <strong>Basisplan</strong> ist der eingefrorene Stand Ihres Terminplans zum Zeitpunkt der Freigabe. Ohne ihn lässt sich später nicht sagen, ob ein Projekt im Verzug ist — nur, wann es voraussichtlich fertig wird.",
  figIntro: "Zwei Balken je Vorgang: der Plan von damals, der Stand von heute.",
  sections: [
    [
      "Was ein Basisplan ist",
      "<p>Eine Kopie der Termine zum Zeitpunkt der Freigabe. Der aktuelle Plan verändert sich weiter, der Basisplan bleibt stehen. Die Differenz zwischen beiden ist die Abweichung.</p>\n        <p>Ohne Basisplan gibt es keinen Verzug — es gibt nur immer wieder ein neues Enddatum, und niemand kann sagen, wie es dorthin gekommen ist.</p>"
    ],
    [
      "Wann eingefroren wird",
      "<p>Nach der Freigabe und bevor die Arbeit beginnt. Ein Basisplan, der erst gesetzt wird, wenn das Projekt schon zwei Wochen läuft, misst nichts mehr.</p>"
    ],
    [
      "Abweichung lesen",
      "<p>Terminabweichung ist Ist-Ende minus Plan-Ende, in Tagen. Positiv heißt später als geplant. Interessant ist dabei nicht die Abweichung eines einzelnen Vorgangs, sondern ob sie auf dem kritischen Pfad liegt — dort schlägt sie voll auf das Projektende durch, anderswo möglicherweise gar nicht.</p>"
    ],
    [
      "Fortschritt richtig erfassen",
      "<p>Prozentangaben zum Fortschritt sind notorisch unzuverlässig; „90 Prozent fertig“ ist die häufigste Angabe in jedem Projekt und bleibt es wochenlang. Belastbarer ist die Frage nach der Restdauer: Wie viele Tage brauchen Sie noch? Diese Zahl lässt sich prüfen.</p>"
    ],
    [
      "Wann neu basiert wird",
      "<p>Nur bei einer genehmigten Änderung von Umfang, Budget oder Termin — nicht, weil der alte Plan unangenehm aussieht. Wer bei jedem Verzug neu basiert, hat am Ende ein Projekt ohne Abweichungen und ohne jede Aussage.</p>\n        <p>Bewahren Sie alte Basispläne auf. Die Abfolge zeigt, wie oft und aus welchen Gründen umgeplant wurde — häufig die aufschlussreichste Information im ganzen Projekt.</p>"
    ],
    [
      "Was man daraus lernt",
      "<p>Nach Projektende ist der Vergleich von Basisplan und Ist die beste verfügbare Grundlage für die nächste Schätzung. Wenn Ihre Vorgänge systematisch 30 Prozent länger dauern als geplant, ist das keine Pannenserie, sondern ein Schätzfehler mit bekanntem Faktor.</p>"
    ]
  ],
  callout: "Basieren Sie nicht neu, weil der Plan schlecht aussieht. Ein Basisplan, der bei jedem Verzug nachgezogen wird, zeigt dauerhaft null Abweichung und erklärt am Ende nichts — er ist dann kein Messinstrument mehr, sondern eine Beschönigung.",
  faq: [
    [
      "Was ist ein Basisplan?",
      "Der eingefrorene Terminplan zum Zeitpunkt der Freigabe. Er dient als Vergleichsmaßstab für alle späteren Abweichungen."
    ],
    [
      "Wann setzt man den Basisplan?",
      "Nach der Freigabe und vor Arbeitsbeginn. Später gesetzt verliert er seine Aussagekraft."
    ],
    [
      "Wann sollte man neu basieren?",
      "Nur bei genehmigter Änderung von Umfang, Budget oder Termin — nicht bei jedem Verzug."
    ],
    [
      "Was ist Terminabweichung?",
      "Die Differenz zwischen tatsächlichem und geplantem Termin in Tagen. Auf dem kritischen Pfad wirkt sie voll auf das Projektende."
    ]
  ],
  related: [
    ["critical-path-method", "Der kritische Pfad"],
    ["gantt-chart-mistakes", "Häufige Planungsfehler"],
    ["milestones-vs-tasks", "Meilensteine und Vorgänge"]
  ]
},

'gantt-chart-mistakes': {
  h1: "Neun Fehler bei der Projektplanung — und wie man sie behebt",
  metaTitle: "Häufige Fehler im Gantt-Diagramm",
  metaDesc: "Neun typische Fehler in Gantt-Diagrammen: zu viel Detail, fehlende Abhängigkeiten, kein Puffer, überlastete Ressourcen — je mit Korrektur.",
  date: "2026-07-19",
  lead: "Die meisten Gantt-Diagramme scheitern nicht an der Software, sondern an neun immer gleichen Fehlern. Jeder davon lässt sich in wenigen Minuten beheben, wenn man ihn erkennt.",
  figIntro: "Neun Fehler, in der Reihenfolge, in der sie auffallen:",
  sections: [
    [
      "1. Zu viel Detail",
      "<p>Ein Plan mit 300 Zeilen wird nicht gepflegt, und ein ungepflegter Plan ist gefährlicher als gar keiner, weil ihm noch geglaubt wird. <strong>Korrektur:</strong> kein Vorgang unter einem Tag, keiner über einem Monat.</p>"
    ],
    [
      "2. Keine Abhängigkeiten",
      "<p>Ohne Verknüpfungen rechnet nichts nach, wenn sich etwas verschiebt. <strong>Korrektur:</strong> Verknüpfen Sie zumindest die Vorgänge auf dem kritischen Pfad, auch wenn Sie nicht jeden einzelnen erfassen.</p>"
    ],
    [
      "3. Alles miteinander verknüpft",
      "<p>Das Gegenteil ist genauso falsch: Eine durchgehende Kette hat keine Parallelität und reagiert auf jede Kleinigkeit übertrieben. <strong>Korrektur:</strong> Nur verknüpfen, was tatsächlich wartet.</p>"
    ],
    [
      "4. Kein Puffer",
      "<p>Ein Plan ohne Puffer geht davon aus, dass nichts schiefgeht. <strong>Korrektur:</strong> Puffer gebündelt vor Meilensteine und ans Ende des kritischen Pfads legen, nicht verteilt auf jeden Vorgang — verteilte Puffer werden aufgebraucht, ohne dass es jemand merkt.</p>"
    ],
    [
      "5. Ressourcen ignoriert",
      "<p>Der Plan ist rechnerisch korrekt, aber eine Person soll in derselben Woche an drei Vorgängen arbeiten. <strong>Korrektur:</strong> Auslastung prüfen, nachdem die Termine stehen.</p>"
    ],
    [
      "6. Meilensteine mit Dauer",
      "<p>Ein Meilenstein hat die Dauer null. „Testphase“ ist kein Meilenstein, „Tests abgenommen“ schon. <strong>Korrektur:</strong> Meilensteine als Ergebnis formulieren, nicht als Tätigkeit.</p>"
    ],
    [
      "7. Rückwärts vom Wunschtermin geplant",
      "<p>Wenn das Enddatum feststeht und die Dauern danach passend gemacht werden, entsteht ein Plan, der niemanden überzeugt. <strong>Korrektur:</strong> vorwärts rechnen, die Lücke sichtbar machen und dann über Umfang oder Ressourcen sprechen.</p>"
    ],
    [
      "8. Nie aktualisiert",
      "<p>Ein Plan ist ein Werkzeug, kein Dokument. <strong>Korrektur:</strong> wöchentlich fortschreiben, mit dem Basisplan vergleichen, Abweichungen benennen.</p>"
    ],
    [
      "9. Nur eine Person kennt ihn",
      "<p>Ein Plan, der nicht besprochen wurde, ist eine Meinung über die Zukunft. <strong>Korrektur:</strong> mit den Beteiligten durchgehen, bevor er gilt — meist finden sich dabei zwei bis drei vergessene Vorgänge.</p>"
    ]
  ],
  callout: "Die häufigsten zwei Fehler sind Gegenteile: zu viel Detail und zu wenig Struktur. Der eine macht den Plan unpflegbar, der andere unbrauchbar. Zwischen 20 und 60 Vorgängen in vier bis acht Phasen liegt für die meisten Projekte der Bereich, in dem beides funktioniert.",
  faq: [
    [
      "Was ist der häufigste Fehler in Gantt-Diagrammen?",
      "Zu viel Detail. Ein Plan mit dreihundert Zeilen wird nach zwei Wochen nicht mehr gepflegt."
    ],
    [
      "Wie viel Puffer sollte man einplanen?",
      "Zehn bis zwanzig Prozent, gebündelt vor Meilensteinen und am Ende des kritischen Pfads statt auf jeden Vorgang verteilt."
    ],
    [
      "Warum stimmt mein Plan nie?",
      "Meist wurde rückwärts von einem Wunschtermin geplant, oder die Ressourcenauslastung wurde nie geprüft."
    ],
    [
      "Wie oft sollte ein Plan aktualisiert werden?",
      "Wöchentlich. Seltener, und die Abweichung wird erst sichtbar, wenn sie nicht mehr aufzuholen ist."
    ]
  ],
  related: [
    ["how-to-make-a-gantt-chart", "Gantt-Diagramm erstellen"],
    ["gantt-baseline-variance", "Basisplan und Abweichung"],
    ["milestones-vs-tasks", "Meilensteine und Vorgänge"]
  ]
},

'milestones-vs-tasks': {
  h1: "Meilensteine und Vorgänge: worin sie sich unterscheiden",
  metaTitle: "Meilenstein oder Vorgang?",
  metaDesc: "Unterschied zwischen Meilenstein und Vorgang, wozu Meilensteine wirklich dienen, wie viele ein Projekt braucht und typische Fehler.",
  date: "2026-07-19",
  lead: "Ein <strong>Vorgang</strong> braucht Zeit, ein <strong>Meilenstein</strong> markiert einen Zeitpunkt. Das ist der ganze technische Unterschied — und trotzdem ist der falsche Umgang mit Meilensteinen einer der schnellsten Wege, einen Plan unlesbar zu machen.",
  figIntro: "Balken für die Arbeit, Rauten für die Momente, auf die es ankommt:",
  sections: [
    [
      "Der Unterschied in einem Satz",
      "<p>Ein Vorgang hat eine Dauer: Er beginnt an einem Tag und endet an einem anderen. Ein Meilenstein hat die Dauer null und wird als Raute dargestellt. „Vertrag aufsetzen“ ist ein Vorgang; „Vertrag unterzeichnet“ ist ein Meilenstein.</p>"
    ],
    [
      "Wozu Meilensteine wirklich dienen",
      "<p>Zu dreierlei. Sie sind <em>Kontrollpunkte</em>, an denen entschieden wird, ob es weitergeht. Sie sind <em>die Sprache der Leitungsebene</em> — was ein Gremium von Ihrem Plan behält, sind fünf Termine, nicht fünfzig Balken. Und sie sind <em>Sequenzsperren</em>: Wer nachfolgende Arbeit an einen Meilenstein hängt, verhindert, dass sie vor Erfüllung der Bedingung anläuft.</p>"
    ],
    [
      "Wie viele braucht ein Projekt?",
      "<p>Genug, um die Geschichte zu erzählen, und nicht so viele, dass sie verwässert. Fünf bis zehn für ein mehrmonatiges Vorhaben ist ein guter Bereich. Wer einen Meilenstein pro Woche setzt, hat aus dem Plan einen Kalender gemacht, und die Rauten zeigen nichts mehr an.</p>"
    ],
    [
      "Typische Fehler",
      "<p><strong>Meilensteine, die verkleidete Vorgänge sind.</strong> Was Dauer hat, ist kein Meilenstein.</p>\n        <p><strong>Meilensteine ohne Abhängigkeiten.</strong> Eine freistehende Raute im Kalender ist Dekoration. Ihr Wert entsteht erst dadurch, dass etwas von ihr abhängt.</p>\n        <p><strong>Meilensteine, über die niemand entscheidet.</strong> Wenn am Stichtag weder freigegeben noch geprüft noch unterschrieben wird, war es eine Erinnerung, kein Meilenstein.</p>"
    ],
    [
      "Der dritte Typ: Sammelbalken",
      "<p>Neben Vorgängen und Meilensteinen gibt es Sammelbalken oder Phasen. Sie fassen ihre untergeordneten Vorgänge zusammen und übernehmen automatisch den frühesten Start und das späteste Ende. Man bearbeitet sie nicht direkt — sie bewegen sich, wenn sich ihr Inhalt bewegt.</p>\n        <p>Diese Dreiteilung aus Phase, Vorgang und Meilenstein ist es, die einen großen Plan überhaupt lesbar hält.</p>"
    ]
  ],
  callout: "Ein Meilenstein ist kein kurzer Vorgang, sondern ein Vorgang der Dauer null, der für eine Entscheidung oder eine erfüllte Bedingung steht. Muss am Stichtag niemand etwas freigeben, unterschreiben oder prüfen, markieren Sie eine Erinnerung — keinen Meilenstein.",
  faq: [
    [
      "Was ist ein Meilenstein im Gantt-Diagramm?",
      "Ein Punkt ohne Dauer, der einen bedeutsamen Moment markiert: eine Freigabe, eine Übergabe oder den Beginn einer Phase. Dargestellt als Raute statt als Balken."
    ],
    [
      "Wie viele Meilensteine sollte ein Projekt haben?",
      "Fünf bis zehn bei mehrmonatiger Laufzeit. Zu viele nehmen ihnen die Funktion als Kontrollpunkt."
    ],
    [
      "Kann ein Meilenstein eine Dauer haben?",
      "Definitionsgemäß nicht. Wenn Sie einen Zeitraum darstellen müssen — etwa ein Prüffenster — ist das ein Vorgang, der mit einem Meilenstein endet."
    ],
    [
      "Was ist der Unterschied zwischen Meilenstein und Phase?",
      "Eine Phase ist ein Sammelbalken, der Vorgänge gruppiert und deren Termine übernimmt; ein Meilenstein ist ein Zeitpunkt ohne Dauer. Meist genutzt im Paar: Die Phase endet, der Meilenstein bestätigt den Abschluss."
    ]
  ],
  related: [
    ["what-is-a-gantt-chart", "Was ist ein Gantt-Diagramm?"],
    ["gantt-chart-mistakes", "Häufige Planungsfehler"],
    ["gantt-chart-dependencies", "Die vier Abhängigkeitsarten"]
  ]
},

's-curve-project-management': {
  h1: 'S-Kurve und Fertigstellungswert: Sind Sie wirklich im Verzug?',
  metaTitle: 'S-Kurve im Projektmanagement erstellen',
  metaDesc: 'Was eine S-Kurve zeigt, wie sich Plan und Ist vergleichen lassen und wie die Fertigstellungswert-Analyse aus einem Gefühl eine belastbare Zahl macht.',
  date: '2026-07-19',
  lead: 'Eine Prozentangabe allein sagt fast nichts. Sechzig Prozent fertig ist in Woche zwei hervorragend und in Woche neun eine Katastrophe. Eine <strong>S-Kurve</strong> behebt das, indem sie die kumulierte Planleistung über die Zeit aufträgt: Aus „wie weit sind wir“ wird „wie weit hätten wir <em>sein sollen</em>“ — und der Abstand zwischen den beiden Linien ist die Antwort.',
  figIntro: 'Plan gegen Ist — und was der Abstand zwischen beiden bedeutet:',
  sections: [
    ['Warum die Kurve S-förmig ist', `<p>Projekte leisten ihre Arbeit nicht gleichmäßig. Die ersten Wochen laufen langsam an — Mobilisierung, Abstimmung des Umfangs, Warten auf Freigaben —, dann beschleunigt die Mitte, weil vieles parallel läuft, und am Ende wird es wieder zäh, weil die letzten Punkte auf Abnahmen und Restarbeiten warten.</p>
        <p>Trägt man die kumulierte Leistung über die Zeit auf, ergibt das ein flach liegendes S: flach, steil, flach. Diese Form hat niemand vorgegeben. Sie folgt daraus, wie Arbeit tatsächlich anfällt.</p>
        <p>Genau deshalb taugt sie als Maßstab. Eine Gerade würde unterstellen, dass nach zwanzig Prozent der Zeit auch zwanzig Prozent der Arbeit erledigt sind — und jedes Projekt der Welt sähe im ersten Monat nach Verzug aus.</p>`],

    ['Plan und Ist nebeneinander lesen', `<p>Zwei Kurven. Die <strong>Plankurve</strong> stammt aus Ihrem Basisplan: Jeder Vorgang wird mit seinem Gewicht über seine geplanten Termine verteilt und aufsummiert. Die <strong>Ist-Kurve</strong> stammt aus dem gemeldeten Fortschritt.</p>
        <p>Lesen Sie beide senkrecht, zum heutigen Datum:</p>
        <ul>
          <li><strong>Ist unter Plan</strong> — im Verzug. Der senkrechte Abstand ist die fehlende Leistung.</li>
          <li><strong>Ist über Plan</strong> — vor dem Plan, oder Ihre Fortschrittsmeldungen sind zu optimistisch. Beides kommt vor.</li>
          <li><strong>Auseinanderlaufende Kurven</strong> — das Problem wächst, es ist nicht stabil. Diese Form ist die wichtigste und die einzige, die eine einzelne Prozentzahl nie zeigt.</li>
        </ul>
        <p>Lesen Sie sie stattdessen <em>waagerecht</em>, erhalten Sie etwas, das in einer Statusrunde besser ankommt: Gehen Sie vom heutigen Ist-Punkt nach links, bis Sie die Plankurve treffen. Dort steht das Datum, an dem der Plan diesen Fortschritt erwartet hatte. Der Abstand ist Ihr Verzug in Wochen — also in der Einheit, über die tatsächlich gestritten wird.</p>`],

    ['Fertigstellungswert ohne Fachjargon', `<p>Die Fertigstellungswert-Analyse (Earned Value Management) gibt dem Abstand eine Zahl. Drei Größen, und die Abkürzungen sind schlimmer als die Gedanken dahinter:</p>
        <ul>
          <li><strong>PV</strong> (Planwert, Sollkosten) — die Arbeit, die bis heute fertig sein sollte, zu Budgetpreisen bewertet.</li>
          <li><strong>EV</strong> (Fertigstellungswert) — die Arbeit, die <em>tatsächlich</em> fertig ist, mit demselben Budget bewertet. Ein Vorgang über 10.000 €, der zu 40 % erledigt ist, hat 4.000 € erwirtschaftet. Was er gekostet hat, spielt hier bewusst keine Rolle.</li>
          <li><strong>AC</strong> (Ist-Kosten) — was Sie wirklich ausgegeben haben.</li>
        </ul>
        <p>Daraus ergibt sich:</p>
        <ul>
          <li><strong>SV = EV − PV</strong> — Terminabweichung. Negativ heißt im Verzug.</li>
          <li><strong>CV = EV − AC</strong> — Kostenabweichung. Negativ heißt über Budget.</li>
          <li><strong>SPI = EV ÷ PV</strong> — unter 1,0 heißt im Verzug. Ein SPI von 0,85 heißt: Sie erhalten 85 Cent Fortschritt für jeden geplanten Euro.</li>
          <li><strong>CPI = EV ÷ AC</strong> — unter 1,0 heißt über Budget.</li>
        </ul>
        <p>Die Trennung ist der ganze Sinn der Übung. Ein Projekt kann exakt im Budget und schwer im Verzug sein oder pünktlich und finanziell aus dem Ruder gelaufen — eine einzige verrührte Prozentzahl verdeckt beides.</p>`],

    ['Warum unser Werkzeug manchmal keinen CPI anzeigt', `<p>Das sei deutlich gesagt, weil die meisten kostenlosen EVM-Rechner es genau umgekehrt handhaben.</p>
        <p>Die Ist-Kosten sind der einzige Wert, der sich nicht aus einem Terminplan ableiten lässt. Er muss aus Ihrer Buchhaltung kommen. Die verlockende Abkürzung lautet, einem zu 40 % erledigten Vorgang einfach 40 % seines Budgets als Kosten zuzuschreiben — und dann ist AC per Konstruktion gleich EV, sodass <strong>der CPI für jedes Projekt der Geschichte exakt 1,00 beträgt</strong>. Die Zahl sieht seriös aus, reagiert auf nichts und würde einem entgleisenden Budget bescheinigen, alles sei in Ordnung.</p>
        <p>Deshalb lässt gantts.app die Kostenkennzahlen leer, bis Sie einen echten Wert unter „Ausgegeben“ eintragen. Die Terminkennzahlen — SV und SPI — funktionieren weiterhin, denn dafür genügen Termine und Fortschritt. Eine fehlende Zahl ist ehrlich. Eine selbstbewusst falsche ist es nicht.</p>
        <p>Aus demselben Grund wird die Ist-Kurve für die Vergangenheit rekonstruiert statt aufgezeichnet: Das Werkzeug speichert Ihren Fortschritt so, wie er heute ist, nicht die Historie jeder früheren Meldung. Für den heutigen Tag, an dem die Zahlen abgelesen werden, ist sie exakt, dahinter näherungsweise — und sie sagt das in der Ansicht selbst, nicht in einer Fußnote.</p>`],

    ['Ein Budget ist keine Voraussetzung', `<p>Die meisten Pläne enthalten überhaupt keine Kosten, und eine S-Kurve, die welche verlangt, ist eine S-Kurve, die niemand zeichnet.</p>
        <p>Ist bei keinem Vorgang ein Betrag hinterlegt, gewichtet gantts.app jeden Vorgang stattdessen nach seiner Dauer in Arbeitstagen. Die Form bleibt dieselbe, die Achse liest sich in Prozent statt in Euro — eine reine Fortschrittskurve. Tragen Sie später Kosten nach, wird ohne weiteres Zutun eine Wertkurve daraus.</p>
        <p>Eines ist allerdings entscheidend: <strong>Setzen Sie einen Basisplan</strong>. Ohne ihn kann „geplant“ nur Ihre aktuellen Termine bedeuten, und die enthalten bereits jeden bisherigen Verzug. Die Terminabweichung stünde dauerhaft auf null — eine sehr beruhigende und vollkommen nutzlose Auskunft. Basisplan ▸ Basisplan setzen, einmal, sobald der Plan freigegeben ist.</p>`],

    ['So erstellen Sie eine S-Kurve hier', `<ol>
          <li>Bauen oder importieren Sie Ihren Terminplan und bringen Sie die Termine grob in Ordnung.</li>
          <li><strong>Basisplan ▸ Basisplan setzen</strong>, sobald der Plan freigegeben ist. Das friert die Bedeutung von „geplant“ ein.</li>
          <li>Geben Sie den Vorgängen optional ein <strong>Budget</strong>, damit die Kurve in Euro statt in Tagen rechnet.</li>
          <li>Pflegen Sie den <strong>Fortschritt in Prozent</strong> — daraus entsteht die Ist-Kurve.</li>
          <li>Tragen Sie optional je Vorgang <strong>Ausgegeben</strong> ein, um CPI, Kostenabweichung und die Kostenprognose freizuschalten.</li>
          <li>Klicken Sie auf <strong>📈 S-Kurve</strong>.</li>
        </ol>
        <p>Alles läuft vollständig in Ihrem Browser. Kein Konto, kein Hochladen und keine Tabellenvorlage, die von Hand gepflegt werden will.</p>`],
  ],
  faq: [
    ['Was ist eine S-Kurve im Projektmanagement?', 'Eine Kurve der kumulierten Planleistung über die Zeit. Sie ist S-förmig, weil Projekte langsam anlaufen, in der Mitte beschleunigen und zum Ende hin auslaufen. Gegen den tatsächlichen Fortschritt aufgetragen zeigt der senkrechte Abstand, wie weit Sie vor oder hinter dem Plan liegen.'],
    ['Was unterscheidet die S-Kurve von der Fertigstellungswert-Analyse?', 'Die S-Kurve ist das Bild, die Fertigstellungswert-Analyse die Rechnung dahinter. EVM beziffert den Abstand mit SV, SPI, CV und CPI; die Kurve zeigt seine Form und Richtung.'],
    ['Was bedeutet ein SPI von 0,9?', 'Sie haben 90 Prozent des Werts erwirtschaftet, den der Plan bis heute vorsah — Sie liegen also rund 10 Prozent hinter dem Termin. Unter 1,0 heißt Verzug, über 1,0 Vorsprung.'],
    ['Brauche ich Kostendaten für eine S-Kurve?', 'Nein. Ohne Kosten werden die Vorgänge nach ihrer Dauer in Arbeitstagen gewichtet, und Sie erhalten eine Fortschrittskurve — dieselbe Form, abgelesen in Prozent. Kosten machen daraus eine Wertkurve und schalten die Kostenkennzahlen frei.'],
    ['Warum wird kein CPI angezeigt?', 'Weil keine Ist-Kosten erfasst sind. Der CPI braucht echte Ausgaben; würde man ihn aus dem Fortschritt ableiten, ergäbe er für jedes Projekt exakt 1,00. Tragen Sie bei den Vorgängen „Ausgegeben“ ein, und er erscheint.'],
    ['Kann man eine S-Kurve in Excel erstellen?', 'Ja, und die meisten tun es — um den Preis einer von Hand gepflegten Summenspalte samt Diagramm, die bei jeder Terminverschiebung neu gemacht werden muss. Wird die Kurve aus dem Terminplan erzeugt, entfällt dieser Schritt.'],
  ],
  related: [['gantt-baseline-variance', 'Basisplan und Abweichung'], ['critical-path-method', 'Der kritische Pfad'], ['3-week-lookahead-schedule', 'Die 3-Wochen-Vorschau']],
},

'3-week-lookahead-schedule': {
  h1: 'Die 3-Wochen-Vorschau — ohne sie jeden Montag neu abzutippen',
  metaTitle: '3-Wochen-Vorschau erstellen — kostenlos',
  metaDesc: 'Was eine 3-Wochen-Vorschau ist, warum Bauteams sie nutzen und wie Sie sie direkt aus dem Terminplan erzeugen, statt sie in Excel abzutippen.',
  date: '2026-07-19',
  lead: 'Niemand baut nach einem Programm über achtzehn Monate. Gebaut wird nach den nächsten drei Wochen davon. Die <strong>Vorschau</strong> ist genau dieses Fenster — der Ausschnitt des Terminplans, der nah genug ist, um real zu sein — und auf den meisten Baustellen wird sie noch immer jeden Montag von Hand in eine Tabelle kopiert.',
  figIntro: 'Derselbe Terminplan, gefiltert auf die Arbeit, die das Fenster berührt:',
  sections: [
    ['Was eine Vorschau eigentlich ist', `<p>Eine Vorschau ist ein kurzer, rollierender Auszug aus dem Gesamtterminplan — meist drei Wochen, manchmal zwei, vier oder sechs — und zeigt nur die Arbeit, die dieses Fenster berührt. Sie rollt jede Woche weiter, sodass derselbe Vorgang in mehreren aufeinanderfolgenden Vorschauen auftaucht, während er näher rückt und besser verstanden wird.</p>
        <p>Es gibt sie, weil Gesamtterminplan und Arbeitsplanung zwei verschiedene Dokumente mit zwei verschiedenen Aufgaben sind. Der Terminplan beantwortet „werden wir rechtzeitig fertig“, die Vorschau beantwortet „was passiert am Dienstag, und hat jemand den Stahl bestellt“. Der Versuch, eine Baubesprechung mit einem zweihundertzeiligen Programm zu führen, ist der Grund, warum es in A0 gedruckt und danach ignoriert wird.</p>
        <p>In der Sprache des Last Planner Systems ist die Vorschau der Ort, an dem <em>Randbedingungen</em> auffallen: Die Arbeit ist nah genug, dass man fragen kann, ob Genehmigung, Material, Kolonne und Vorgewerk tatsächlich da sein werden.</p>`],

    ['Überlappung statt Enthaltensein — das Detail, das fast alle falsch machen', `<p>Hier ist die Regel, die eine Vorschau richtig macht, und genau die, an der von Hand gebaute Tabellen am häufigsten scheitern.</p>
        <p>Ein Vorgang gehört in das Fenster, wenn er es <strong>überlappt</strong> — nicht, wenn er vollständig hineinpasst. Das achtmonatige Gründungspaket, das im März begonnen hat und bis November läuft, findet gerade jetzt statt, und es ist genau die Arbeit, die das Baustellenteam vor Augen haben muss. Filtern Sie auf Vorgänge, die innerhalb der drei Wochen beginnen <em>und</em> enden, verlieren Sie jede langlaufende Tätigkeit auf der Baustelle — und behalten eine Vorschau, die aufgeräumt aussieht und ein Projekt beschreibt, an dem niemand arbeitet.</p>
        <p>Die Prüfung besteht aus zwei Vergleichen, nicht aus vieren:</p>
        <p><code>Vorgang.Start ≤ Fenster.Ende &nbsp;UND&nbsp; Vorgang.Ende ≥ Fenster.Start</code></p>
        <p>Das ist die ganze Regel, und gantts.app wendet exakt sie an.</p>`],

    ['Warum das Fenster auf Montag liegt', `<p>Die Vorschau ist ein wöchentliches Ritual an einer wöchentlichen Besprechung. Ein Fenster von Donnerstag bis Donnerstag würde die Arbeitswoche mitten durchschneiden und wäre für jeden Leser wertlos.</p>
        <p>Deshalb rastet das Fenster immer auf den Wochenanfang zurück. Öffnen Sie das Werkzeug an einem Mittwoch, erhalten Sie das Fenster, das am Montag begonnen hat, und keinen Dreiwochenblock ab Wochenmitte. Die Pfeile schieben es wochenweise weiter, wenn Sie länger vorausschauen wollen, und „Diese Woche“ bringt es zurück.</p>`],

    ['Erzeugen statt abtippen', `<p>An Vorlagen für die 3-Wochen-Vorschau herrscht kein Mangel — Smartsheet veröffentlicht eine, ein halbes Dutzend anderer ebenfalls, und für Bauvorhaben der US Navy gibt es sogar ein Standardformat. Jede einzelne davon ist ein leeres Raster, das Sie von Hand ausfüllen.</p>
        <p>Das ist das eigentliche Problem. Die Antwort steckt bereits im Terminplan; die wöchentliche Arbeit besteht im Abschreiben, und aus dem Abschreiben kommen die Fehler und die Veralterung. Ein Vorgang wird vergessen, oder der Gesamtplan wird geändert und die Vorschau nicht — und schon widersprechen sich beide Dokumente stillschweigend.</p>
        <p>In gantts.app ist die Vorschau eine <em>Ansicht</em> derselben Daten:</p>
        <ol>
          <li>Stellen Sie <strong>Ansicht</strong> auf <strong>Vorschau</strong>.</li>
          <li>Wählen Sie das Fenster — 1, 2, 3, 4, 6 oder 8 Wochen.</li>
          <li>Schieben Sie es mit den Pfeilen weiter oder springen Sie mit „Diese Woche“ zu heute zurück.</li>
          <li>Exportieren Sie als PDF oder PNG für die Wand, oder als Excel für die Besprechung.</li>
        </ol>
        <p>Das Diagramm zoomt auf das Fenster, sodass drei Wochen lesbar sind statt zu einem Streifen auf einer Achse über achtzehn Monate zusammengedrückt. Ein Band am oberen Rand nennt das gewählte Fenster und die Zahl der ausgeblendeten Vorgänge, denn ein gefiltertes Diagramm, das seine Filterung nicht ausweist, liest sich wie ein Plan mit fehlenden Vorgängen.</p>
        <p>Ändern Sie ein Datum im Gesamtplan, stimmt die Vorschau bereits. Es gibt nichts erneut abzuschreiben.</p>`],

    ['Ein brauchbares Dokument, nicht nur ein Filter', `<ul>
          <li><strong>Auf jede Zeile gehört ein Name.</strong> Eine Vorschau ohne Verantwortliche je Vorgang ist eine Liste von Hoffnungen. Schalten Sie die Spalte für die Zuständigkeit ein.</li>
          <li><strong>Gliedern Sie die nahe Arbeit feiner als die ferne.</strong> Ein Vorgang „Ausbau erstes Obergeschoss — 6 Wochen“ ist im Terminplan in Ordnung und in einer Vorschau nutzlos. Teilen Sie ihn auf, während er näher rückt.</li>
          <li><strong>Prüfen Sie Randbedingungen, nicht nur Termine.</strong> Der Wert des Blicks drei Wochen nach vorn liegt darin, dass noch Zeit bleibt, Fehlendes zu beschaffen.</li>
          <li><strong>Halten Sie sie kurz.</strong> Umfasst die Vorschau sechzig Zeilen, ist entweder das Fenster zu lang oder der Plan für diese Besprechung zu fein.</li>
        </ul>`],
  ],
  faq: [
    ['Was ist eine 3-Wochen-Vorschau?', 'Ein rollierender Auszug aus dem Gesamtterminplan, der nur die Arbeit zeigt, die die nächsten drei Wochen berührt. Sie wird wöchentlich fortgeschrieben und dient dazu, die tägliche Arbeit abzustimmen und Randbedingungen zu erkennen, solange noch Zeit bleibt.'],
    ['Warum drei Wochen?', 'Lang genug, dass sich Randbedingungen — Material, Genehmigungen, Kolonnen — noch klären lassen, und kurz genug, dass die Termine glaubwürdig sind. Zwei, vier und sechs Wochen sind ebenfalls üblich; die richtige Länge hängt von Ihren Vorlaufzeiten ab.'],
    ['Gehört ein lange laufender Vorgang in die Vorschau?', 'Ja. Alles, was das Fenster überlappt, gehört hinein. Ein Filter auf Vorgänge, die vollständig in die drei Wochen passen, entfernt genau die langlaufende Arbeit, die gerade stattfindet.'],
    ['Ist die Vorschau dasselbe wie der Gesamtterminplan?', 'Nein. Der Gesamtterminplan beantwortet, ob das Projekt rechtzeitig fertig wird. Die Vorschau beantwortet, was diese Woche passiert und wer es macht. Beide stammen aus denselben Daten, dienen aber verschiedenen Besprechungen.'],
    ['Kann man eine Vorschau in Excel erstellen?', 'Ja, und die meisten Teams tun es — indem sie jede Woche Zeilen aus dem Terminplan abtippen. Wird sie als Ansicht des Plans erzeugt, entfallen das Abtippen und das damit verbundene Auseinanderlaufen.'],
    ['Wie drucke ich die Vorschau?', 'Wechseln Sie in die Vorschau-Ansicht und exportieren Sie als PDF oder PNG. Der Export gibt wieder, was auf dem Bildschirm steht, Sie erhalten also das Fenster und nicht den gesamten Terminplan.'],
  ],
  related: [['critical-path-method', 'Der kritische Pfad'], ['s-curve-project-management', 'S-Kurve und Fertigstellungswert'], ['gantt-chart-dependencies', 'Die vier Abhängigkeitsarten']],
},

'mermaid-gantt-chart': {
  h1: 'Mermaid-Gantt-Diagramme: Syntax, Fallstricke und der Weg zurück in einen Editor',
  metaTitle: 'Mermaid-Gantt-Syntax mit Live-Editor',
  metaDesc: 'Die Mermaid-Gantt-Syntax erklärt: Abschnitte, Tags, Abhängigkeiten und excludes, dazu die typischen Fallstricke und das visuelle Bearbeiten.',
  date: '2026-07-19',
  lead: 'Mermaid-Gantt-Blöcke werden in GitHub, GitLab, Notion und Obsidian direkt gerendert — das macht sie zum einfachsten Weg, einen Terminplan dorthin zu bringen, wo die Arbeit ohnehin stattfindet. Sie zu <em>bearbeiten</em> ist dagegen mühsam: Ein Datum verschieben heißt, jede <code>after</code>-Kette dahinter von Hand neu abzuleiten. Hier stehen die Syntax, die Fallstricke und der fehlende Schritt — visuell bearbeiten und den Text zurückbekommen.',
  figIntro: 'Derselbe Terminplan als Text und als Balken:',
  sections: [
    ['Die Syntax in einem Durchgang', `<p>Ein Gantt-Block beginnt mit <code>gantt</code> und einigen Kopfzeilen, danach folgen <code>section</code>-Überschriften mit Vorgangszeilen darunter.</p>
        <p>Eine Vorgangszeile besteht aus einem Namen, einem Doppelpunkt und dann kommagetrennten Feldern:</p>
        <p><code>Name des Vorgangs :tag, id, start, dauer</code></p>
        <ul>
          <li><strong>Tags</strong> — eines von <code>done</code>, <code>active</code>, <code>crit</code>, <code>milestone</code>. Optional.</li>
          <li><strong>id</strong> — ein einzelnes Wort, nur nötig, wenn sich etwas anderes auf diesen Vorgang bezieht.</li>
          <li><strong>start</strong> — ein Datum, oder <code>after eineId</code>, oder weggelassen, um an den vorigen Vorgang anzuschließen.</li>
          <li><strong>dauer</strong> — <code>5d</code>, <code>2w</code>, oder ein zweites Datum.</li>
        </ul>
        <p>Wissenswerte Kopfzeilen: <code>dateFormat</code> (wie Ihre Daten geschrieben sind), <code>excludes weekends</code> (Samstag und Sonntag überspringen), <code>title</code> und <code>axisFormat</code> (Beschriftung der Achse).</p>`],

    ['Vier Dinge, über die Sie stolpern werden', `<p><strong>1. Dauern schließen den Starttag ein.</strong> <code>5d</code> ab Montag, dem 5., läuft bis Freitag, den 9., nicht bis zum 10. Ein Fehler um eins verschiebt hier jeden Vorgang der Datei — und wird trotzdem tadellos gerendert.</p>
        <p><strong>2. <code>after</code> zusammen mit <code>excludes weekends</code> ist die eigentliche Fehlerquelle.</strong> Endet ein Vorgänger an einem Freitag, beginnt sein Nachfolger am <em>Montag</em> — nicht am Samstag. Jedes Werkzeug, das <code>after</code> durch Addition eines Kalendertages auflöst, legt Vorgänge klammheimlich auf Wochenenden in einer Datei, die genau das verbietet. (Unseres tat es kurzzeitig. Der Test, der es gefunden hat, prüft heute, dass kein abgeleitetes Datum auf einen ausgeschlossenen Tag fällt.)</p>
        <p><strong>3. Es gibt keine Maskierung.</strong> Ein Doppelpunkt beginnt die Feldliste und ein Komma trennt die Felder — ein Vorgang namens <code>Phase 2: Entwurf, Prüfung</code> wird also zu etwas völlig anderem. Halten Sie Doppelpunkte und Kommas aus Vorgangsnamen heraus.</p>
        <p><strong>4. Eine unlesbare Dauer wird stillschweigend null.</strong> Schreiben Sie <code>3dd</code>, erhalten Sie einen Balken der Länge null statt einer Fehlermeldung.</p>`],

    ['Was Mermaid nicht ausdrücken kann', `<p>Es ist ein Diagrammformat, keine Terminplanungsmaschine, und die Lücken zählen, sobald man hin und zurück konvertiert:</p>
        <ul>
          <li><strong>Kein Fortschritt in Prozent.</strong> Nur <code>done</code> und <code>active</code>. Ein Vorgang mit 40 Prozent und einer mit 90 Prozent sind beide schlicht „active“.</li>
          <li><strong>Nur Ende-Anfang.</strong> <code>after</code> ist eine EA-Verknüpfung ohne Zeitabstand. Anfang-Anfang, Ende-Ende und Abstände haben keinen Platz.</li>
          <li><strong>Flache Abschnitte.</strong> Keine verschachtelten Gruppen.</li>
          <li><strong>Keine Ressourcen, Kosten oder Basispläne.</strong></li>
        </ul>
        <p>Der Hin- und Rückweg verliert also etwas, aber auf bekannte, langweilige Weise. gantts.app schreibt beim Export 100 Prozent als <code>done</code> und alles dazwischen als <code>active</code> und liest <code>active</code> beim Import als 50 Prozent zurück — eine Schätzung, auf die es hinweist, statt sie Sie in einem Statusbericht entdecken zu lassen. Verknüpfungen, die sich nicht als <code>after</code> schreiben lassen, werden zu festen Terminen, die korrekt bleiben, auch wenn sie nicht mehr pflegbar sind.</p>
        <p>Eine Asymmetrie ist Absicht: <code>crit</code> wird exportiert, beim Import aber ignoriert. Kritikalität wird aus dem Abhängigkeitsnetz <em>berechnet</em>, und einem Wert zu vertrauen, der in einem womöglich veralteten Diagramm behauptet wird, würde eine unkritische Kette rot einfärben.</p>`],

    ['Visuell bearbeiten, dann den Text zurückkopieren', `<p>Mermaid rendern können viele Werkzeuge. Gefehlt hat die Gegenrichtung — Balken ziehen und die Syntax wieder herausbekommen.</p>
        <ol>
          <li>Fügen Sie Ihr Diagramm in gantts.app ein oder öffnen Sie es dort — eine <code>.mmd</code>-Datei oder eine <code>.md</code>-Datei mit einem eingebetteten Block, beides funktioniert. Ein Gantt-Block wird an seinem Inhalt erkannt, nicht an der Dateiendung.</li>
          <li>Ziehen, verknüpfen und umdatieren Sie wie in jedem anderen Diagramm. <code>excludes weekends</code> schaltet den Arbeitskalender ein, sodass die erzeugten Termine zu der Datei passen, aus der sie stammen.</li>
          <li><strong>Export ▸ Mermaid gantt</strong>, kopieren, zurück in Ihre README einfügen.</li>
        </ol>
        <p>Für alle, die Terminpläne mit einem Sprachmodell entwerfen, gibt es einen angenehmen Nebeneffekt: Lassen Sie sich Mermaid-Gantt-Syntax ausgeben, fügen Sie die Antwort ein, und Sie haben ein echtes, bearbeitbares Diagramm mit kritischem Pfad — ohne API-Schlüssel und ohne Server.</p>`],
  ],
  faq: [
    ['Wie schreibt man ein Gantt-Diagramm in Mermaid?', 'Beginnen Sie den Block mit gantt, ergänzen Sie dateFormat YYYY-MM-DD und darunter section-Überschriften mit Vorgangszeilen der Form „Name :tag, id, start, dauer“ — zum Beispiel „Recherche :done, rec, 2026-01-05, 5d“.'],
    ['Schließt 5d in Mermaid den Starttag ein?', 'Ja. Ein Vorgang mit 5d ab Montag, dem 5., endet am Freitag, dem 9. Diese einschließende Zählweise ist die häufigste Ursache für Fehler um einen Tag.'],
    ['Wie funktionieren Abhängigkeiten in Mermaid gantt?', 'Über „after eineId“ im Startfeld. Es ist immer eine Ende-Anfang-Verknüpfung ohne Zeitabstand — Anfang-Anfang, Ende-Ende und Abstände lassen sich nicht ausdrücken.'],
    ['Kann Mermaid den Fortschritt in Prozent zeigen?', 'Nein. Es gibt nur die Tags done und active. Beim Import ist jeder Prozentwert eine Schätzung; gantts.app setzt 50 Prozent und weist darauf hin.'],
    ['Wo werden Mermaid-Gantt-Diagramme dargestellt?', 'GitHub, GitLab, Notion und Obsidian rendern sie direkt in Markdown, und mermaid.live zeigt sie im Browser.'],
    ['Kann ich ein Mermaid-Gantt-Diagramm bearbeitbar machen?', 'Ja. Öffnen Sie die .mmd- oder die Markdown-Datei in gantts.app, bearbeiten Sie sie visuell und kopieren Sie die aktualisierte Syntax über Export ▸ Mermaid gantt wieder heraus.'],
  ],
  related: [['gantt-chart-dependencies', 'Die vier Abhängigkeitsarten'], ['critical-path-method', 'Der kritische Pfad'], ['what-is-a-gantt-chart', 'Was ist ein Gantt-Diagramm?']],
},
};

const UI = {
  templatesH: 'Passende Vorlagen',
  home: 'Start',
  guides: 'Ratgeber',
  backToGuides: 'Zurück zu den Ratgebern',
  related: 'Passend dazu',
  faq: 'Häufige Fragen',
  updated: 'Aktualisiert',
  ctaH2: 'Erstellen Sie Ihr Gantt-Diagramm — kostenlos',
  ctaP: 'Im Browser, ohne Anmeldung. Ihre Daten bleiben auf Ihrem Gerät.',
  ctaBtn: 'Planer öffnen',
  enNote: 'Dieser Artikel ist auch auf Englisch verfügbar.',
  readingTime: 'Min. Lesezeit',
  byline: 'Redaktion gantts.app',
  onThisPage: 'Inhalt',
};

module.exports = { G, UI };
