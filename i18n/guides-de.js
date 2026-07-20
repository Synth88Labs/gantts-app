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
        <p>Fast jedes Gantt-Diagramm enthält zusätzlich eine senkrechte <strong>Heute-Linie</strong>, einen hervorgehobenen <a href="/de/blog/critical-path-method.html">kritischen Pfad</a> und einen Fortschrittsbalken innerhalb jedes Vorgangsbalkens. Alles andere ist Ausstattung.</p>
        <!--FIG:bars|Zeilen links, Kalender oben, je Vorgang ein Balken an der Stelle, an die er zeitlich gehört.-->`],
    ['Die vier Bausteine', `<p><strong>Vorgänge</strong> sind das Arbeitspaket selbst und haben eine Dauer. Sie tragen einen Namen mit Verb — „Rohbau abnehmen“, nicht „Rohbau“ —, einen Verantwortlichen und einen Fertigstellungsgrad.</p>
        <p><strong>Meilensteine</strong> haben die Dauer null und markieren einen Zeitpunkt: eine Freigabe, eine Übergabe, eine Entscheidung. Sie erscheinen als Raute statt als Balken. Fünf bis zehn genügen für ein mehrmonatiges Projekt; wer jeden Vorgangsabschluss zum Meilenstein erklärt, entwertet sie alle.</p>
        <p><strong>Abhängigkeiten</strong> verbinden Vorgänge und legen fest, was worauf wartet. Die weit überwiegende Mehrheit ist vom Typ Ende-Anfang: B beginnt, wenn A fertig ist. Drei weitere Arten gibt es für Sonderfälle, sie sind in den <a href="/de/blog/gantt-chart-dependencies.html">vier Verknüpfungsarten</a> beschrieben.</p>
        <p><strong>Sammelbalken</strong> fassen Vorgänge zu Phasen zusammen und übernehmen deren Termine automatisch: Der Phasenbalken beginnt mit dem frühesten und endet mit dem spätesten Vorgang darunter. Man setzt seine Termine nie von Hand — sie sind ein Ergebnis, keine Eingabe. Wer diese vier Elemente sauber trennt, hat bereits den Großteil eines belastbaren Plans.</p>`],
    ['Ein durchgerechnetes Beispiel: der Umbau der Bäckerei Lindenhof', `<p>Definitionen kommen nur bis zu einem gewissen Punkt. Deshalb hier ein kleines Vorhaben von Anfang bis Ende gerechnet, auf das sich alles Weitere auf dieser Seite bezieht: Die Bäckerei Lindenhof schließt ihre Leipziger Filiale für einen Umbau und eröffnet wieder. Fünf Arbeitstage die Woche, Beginn Montag, der 2. März 2026, gesetzliche Feiertage in Sachsen berücksichtigt.</p>
      <div class="worked">
        <p><strong>Der Terminplan, wie er sich aus Dauern und Verknüpfungen ergibt</strong></p>
        <table>
          <thead>
            <tr><th>Nr.</th><th>Vorgang</th><th>Dauer</th><th>Nach</th><th>Start</th><th>Ende</th></tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Bauamt und Zustimmung der Vermieterin</td><td>8 AT</td><td>—</td><td>Mo 2. März</td><td>Mi 11. März</td></tr>
            <tr><td>2</td><td>Entwurf und Grundriss</td><td>6 AT</td><td>—</td><td>Mo 2. März</td><td>Mo 9. März</td></tr>
            <tr><td>3</td><td>Backofen und Kühltechnik bestellen (Lieferzeit)</td><td>20 AT</td><td>1</td><td>Do 12. März</td><td>Fr 10. April</td></tr>
            <tr><td>4</td><td>Entkernung</td><td>4 AT</td><td>1</td><td>Do 12. März</td><td>Di 17. März</td></tr>
            <tr><td>5</td><td>Sanitär und Elektro</td><td>9 AT</td><td>2, 4</td><td>Mi 18. März</td><td>Mo 30. März</td></tr>
            <tr><td>6</td><td>Boden und Ladenbau</td><td>7 AT</td><td>5</td><td>Di 31. März</td><td>Fr 10. April</td></tr>
            <tr><td>7</td><td>Geräteeinbau</td><td>3 AT</td><td>3, 6</td><td>Mo 13. April</td><td>Mi 15. April</td></tr>
            <tr><td>8</td><td>Lebensmittelüberwachung bestanden</td><td>0 T</td><td>7</td><td>Do 16. April</td><td>—</td></tr>
            <tr><td>9</td><td>Personalschulung</td><td>5 AT</td><td>8</td><td>Fr 17. April</td><td>Do 23. April</td></tr>
            <tr><td>10</td><td>Wiedereröffnung</td><td>0 T</td><td>9</td><td>Fr 24. April</td><td>—</td></tr>
          </tbody>
        </table>
        <p>Acht Vorgänge, zwei Meilensteine, und das Ganze landet auf Freitag, dem 24. April. Dieses Datum hat niemand gewählt — es fällt aus den Dauern und ihren Verknüpfungen heraus, und genau dafür zeichnet man ein Diagramm, statt Termine in ein Dokument zu tippen.</p>
        <p><strong>Was Ostern in diesem Plan anrichtet.</strong> Karfreitag fällt 2026 auf den 3. April, Ostermontag auf den 6. April. Beides sind Arbeitstage, die der Kalender aus der Rechnung nimmt — die Bestellung mit 20 Arbeitstagen Lieferzeit endet dadurch am 10. statt am 8. April, und der Ladenbau ebenfalls. Wer dieselbe Bestellung in einer Kalendertabelle ohne Feiertage plant, liest zwei Tage Luft, die es nicht gibt. Dieselbe Falle stellen die Tage zwischen Weihnachten und Neujahr, an denen zwar gearbeitet werden dürfte, aber weder Bauamt noch Lieferant erreichbar sind, und die Betriebsferien vieler Handwerksbetriebe im August.</p>
        <p><strong>Wo das Geld hängt.</strong> Backofen und Kühltechnik kosten 42.000 €, der Ladenbau 68.000 €. Die Anzahlung für die Technik wird mit der Bestellung fällig, also am 12. März — sechs Wochen bevor die Filiale wieder Umsatz macht. Ein Balken zeigt die Dauer eines Vorgangs, nicht seinen Zahlungszeitpunkt; das ist eine der Stellen, an denen ein Terminplan allein nicht reicht.</p>
        <p>Beachten Sie, was diese Tabelle sagt und eine Aufgabenliste nicht sagen könnte. Zeile 1 und 2 beginnen beide am ersten Tag, weil keine auf die andere wartet. Zeile 3 sind zwanzig Tage Warten auf einen Lieferanten, die still nebenher laufen, während die Handwerker arbeiten. Und Zeile 3 und 6 enden am selben Freitag — dem Moment, in dem zwei unabhängige Ketten zusammentreffen müssen, bevor die Geräte eingebaut werden können.</p>
      </div>`],

    ['Warum die Zeitachse den Unterschied macht', `<p>Eine Aufgabenliste sagt, <em>was</em> zu tun ist. Ein Gantt-Diagramm sagt zusätzlich <em>wann</em> und <em>in welcher Reihenfolge</em>. Damit wird sichtbar, was in einer Liste unsichtbar bleibt: dass drei Vorgänge in derselben Woche liegen und alle dieselbe Person brauchen, oder dass eine Verzögerung am Anfang das Ende um zwei Wochen verschiebt.</p>
        <p>Ein konkretes Beispiel: In einer Liste stehen „Texte schreiben“, „Bilder erstellen“ und „Layout setzen“ untereinander und wirken gleichwertig. Im Diagramm sieht man, dass Texte und Bilder parallel in Kalenderwoche 12 laufen, beide bei derselben Person liegen und das Layout erst danach beginnen kann. Die Liste ist erfüllbar, der Plan nicht — und diesen Unterschied erkennt man nur auf einer Zeitachse.</p>
        <p>Die Wahl der Zeiteinheit entscheidet dabei mit über die Lesbarkeit. Tagesspalten eignen sich für Vorhaben bis etwa acht Wochen, Wochenspalten für ein halbes bis ganzes Jahr, Monatsspalten für alles darüber. Wer ein zweijähriges Bauvorhaben in Tagesspalten darstellt, erzeugt ein Blatt, das niemand ausdruckt.</p>`],
    ['Abhängigkeiten: der eigentliche Wert', `<p>Der Nutzen eines Gantt-Diagramms steht und fällt mit den Verknüpfungen. Ein Diagramm ohne Abhängigkeiten ist eine bunte Tabelle: Verschiebt sich ein Vorgang, muss alles Nachfolgende von Hand angepasst werden — und genau das passiert in der Praxis nie.</p>
        <p>Mit Verknüpfungen rechnet der Plan selbst. Sie verschieben einen Balken, und alles, was davon abhängt, rückt mit. Das ist der Unterschied zwischen einem Plan, der lebt, und einem, der nach drei Wochen veraltet in der Ablage liegt.</p>
        <p>Der Test für eine echte Abhängigkeit ist einfach: Wenn A früher fertig wird, kann B dann früher beginnen? Lautet die Antwort ja, verknüpfen Sie. Lautet sie nein, haben Sie nur die Reihenfolge nachgezeichnet, in der Sie die Vorgänge aufgeschrieben haben. Verknüpfen Sie nicht alles mit allem — ein Plan, in dem jeder Vorgang an seinem Vorgänger hängt, hat keine Parallelität mehr und reagiert auf jede kleine Verschiebung übertrieben.</p>`],
    ['Der kritische Pfad', `<p>Der kritische Pfad ist die längste Kette voneinander abhängiger Vorgänge. Ihre Gesamtdauer bestimmt die Projektdauer. Jeder Verzug auf diesem Pfad verschiebt das Projektende um genau denselben Betrag — Verzögerungen abseits davon oft gar nicht.</p>
        <p>Ein Zahlenbeispiel: Läuft ein Zweig über Konzept, Entwurf, Umsetzung und Test in 15 Arbeitstagen und ein zweiter über Beschaffung und Vorbereitung in 14, dann ist der erste kritisch. Zwei zusätzliche Personen in der Beschaffung ändern am Endtermin nichts. Ein gesparter Tag im Entwurf verschiebt ihn um einen Tag nach vorn.</p>
        <p>Das ist die praktisch wichtigste Kennzahl eines Plans: Sie zeigt, wo Aufmerksamkeit wirkt und wo sie verpufft. Sie ist außerdem beweglich — verspätet sich der zweite Zweig um zwei Tage, ist er mit 16 Tagen der neue kritische Pfad.</p>
        <!--FIG:cpm|Der kritische Pfad ist die längste Kette durch den Plan; seine Vorgänge haben keinen Puffer.-->
        <p>Im Umbau der Bäckerei Lindenhof sieht das so aus. Die längste Kette läuft über Bauamt, Entkernung, Sanitär und Elektro, Ladenbau, Geräteeinbau, Lebensmittelüberwachung, Schulung und Wiedereröffnung. Jeder Vorgang darauf hat null Puffer, ein verlorener Tag irgendwo darauf schiebt die Wiedereröffnung auf Montag, den 27. April — Freitag plus ein Tag ist im Terminplan Montag, nicht Samstag.</p>
        <table>
          <thead>
            <tr><th>Vorgang</th><th>Endet</th><th>Nachfolger beginnt</th><th>Gesamtpuffer</th><th>Was das heißt</th></tr>
          </thead>
          <tbody>
            <tr><td>Entwurf und Grundriss</td><td>Mo 9. März</td><td>Mi 18. März</td><td>6 T</td><td>Darf sechs Arbeitstage rutschen, ohne dass sich etwas bewegt</td></tr>
            <tr><td>Backofen und Kühltechnik</td><td>Fr 10. April</td><td>Mo 13. April</td><td>0 T</td><td>Kritisch — eine späte Lieferung ist eine späte Eröffnung</td></tr>
            <tr><td>Boden und Ladenbau</td><td>Fr 10. April</td><td>Mo 13. April</td><td>0 T</td><td>Kritisch</td></tr>
            <tr><td>Personalschulung</td><td>Do 23. April</td><td>Fr 24. April</td><td>0 T</td><td>Kritisch</td></tr>
          </tbody>
        </table>
        <p>Nur eine Zeile hat überhaupt Spiel. Braucht die Architektin drei zusätzliche Tage für den Grundriss, sind die ersten beiden umsonst und der dritte kostet nichts — erst ab dem siebten Tag bewegt sich die Eröffnung. Der Fall der Bestellung ist der interessantere: zwanzig Tage reine Lieferzeit, die am selben Tag enden wie der Ladenbau und damit ebenfalls bei null Puffer stehen. Zwei Ketten können die Eröffnung im Alleingang schieben, eine aus Handwerk, eine aus einem Bestellformular. Besser vor dem Absenden der Bestellung gelernt als danach.</p>
        <p>Zwei Hinweise dazu, wie gantts.app das rechnet. Ausgewiesen wird der <strong>Gesamtpuffer</strong> — wie weit ein Vorgang rutschen darf, bevor sich der Endtermin bewegt — und nicht der freie Puffer, der den Abstand nur zum unmittelbaren Nachfolger misst; eine Spalte für den freien Puffer gibt es bewusst nicht. Und die Terminrechnung ist <em>wie gesetzt</em>: Eine Abhängigkeit kann einen Vorgang nur nach hinten schieben, niemals nach vorn ziehen. Legen Sie die Personalschulung in den Juni und verknüpfen sie mit der Lebensmittelüberwachung, holt der Plan sie nicht nach April zurück — er zeigt die Lücke, die Sie gelassen haben, statt sie stillschweigend zu schließen. Das weicht vom Lehrbuch-CPM ab und ist Absicht: Ein Terminplan, der Balken eigenmächtig nach vorn zieht, überschreibt Entscheidungen, die aus guten Gründen so getroffen wurden.</p>`],
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
        <p>So entsteht der Umbau der Bäckerei Lindenhof in gantts.app, mit den Schaltflächen so benannt, wie sie tatsächlich beschriftet sind:</p>
        <ol>
          <li>Klicken Sie auf <strong>✨ In Gantt einfügen</strong> und fügen Sie die Liste ein. Dauern in Klammern, <em>nach</em> für eine Verknüpfung und ein abschließendes <em>!</em> für einen Meilenstein werden erkannt — also <em>Sanitär und Elektro (9d) nach Entkernung</em> und danach <em>Lebensmittelüberwachung bestanden!</em></li>
          <li>Oder bauen Sie ihn von Hand: <strong>＋ Vorgang</strong> für eine Arbeitszeile, <strong>◆ Meilenstein</strong> für eine Raute, <strong>▣ Gruppe</strong> für eine Phase.</li>
          <li>Ein Doppelklick auf eine Zeile öffnet die Detailansicht. Dort setzen Sie <strong>Nach (Vorgänger)</strong>, <strong>Zuständig</strong> und <strong>Fortschritt</strong> — und ändern über <strong>Typ</strong> die Art einer Zeile, falls Sie einen Meilenstein versehentlich als Vorgang eingetippt haben. Ein Meilenstein hat die Dauer null und lässt sich verschieben, aber nicht in der Länge ziehen.</li>
          <li>Klicken Sie auf <strong>Neu planen</strong>, damit jeder Vorgang auf das früheste Datum rückt, das seine Abhängigkeiten zulassen. Das ist der Schritt, der aus Schätzungen den 24. April macht.</li>
          <li>Setzen Sie das Häkchen bei <strong>Kritischer Pfad</strong>, um beide pufferfreien Ketten hervorzuheben, und springen Sie mit <strong>◎ Heute</strong> zurück auf das aktuelle Datum.</li>
          <li>Prüfen Sie unter <strong>Kalender</strong>, ob Karfreitag und Ostermontag als arbeitsfrei hinterlegt sind. Tragen Sie hier auch die Betriebsferien der beteiligten Betriebe ein — der Plan rechnet danach von selbst um sie herum.</li>
          <li>Öffnen Sie <strong>◳ Basisplan</strong>, bevor der erste Handwerker auf der Baustelle steht, damit Verzug später gegen das gemessen wird, was Sie zugesagt haben.</li>
          <li>Über <strong>⬇ Export</strong> erhalten Sie <strong>📄 PDF-Dokument</strong>, <strong>📊 Excel (.xlsx)</strong>, <strong>📑 CSV (Tabelle)</strong> oder <strong>📽 PowerPoint (.pptx)</strong>; über <strong>📤 Teilen…</strong> einen <strong>🔗 Teilbarer Link</strong>.</li>
        </ol>
        <!--FIG:steps|Von der schlichten Vorgangsliste zu einem terminierten, verknüpften Plan in wenigen Schritten.-->
        <p>Für die Vermieterin stellen Sie <strong>Ansicht</strong> vor dem Export auf <strong>Nur Meilensteine</strong>: zwei Zeilen, die Lebensmittelüberwachung und die Wiedereröffnung — das gesamte Vorhaben, soweit es sie betrifft.</p>
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

    ['Der Plan, den wir bauen', `<p>Jeder Schritt unten wird auf ein einziges Vorhaben angewendet: den Website-Relaunch der Möbelwerkstatt Brandner GmbH, fünf Arbeitstage die Woche, Projektstart Montag, der 6. Juli 2026. Werfen Sie jetzt schon einen Blick darauf, wo er nach Schritt 7 landet — jeder Schritt erklärt eine seiner Spalten.</p>
      <div class="worked">
        <p><strong>Zehn Zeilen, zehn Wochen, ein errechneter Endtermin</strong></p>
        <table>
          <thead>
            <tr><th>Nr.</th><th>Vorgang</th><th>Dauer</th><th>Nach</th><th>Start</th><th>Ende</th></tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Bestandsaufnahme der Inhalte</td><td>5 AT</td><td>—</td><td>Mo 6. Juli</td><td>Fr 10. Juli</td></tr>
            <tr><td>2</td><td>Seitenstruktur und Wireframes</td><td>6 AT</td><td>1</td><td>Mo 13. Juli</td><td>Mo 20. Juli</td></tr>
            <tr><td>3</td><td>Texte schreiben</td><td>10 AT</td><td>1</td><td>Mo 13. Juli</td><td>Fr 24. Juli</td></tr>
            <tr><td>4</td><td>Gestaltung</td><td>8 AT</td><td>2</td><td>Di 21. Juli</td><td>Do 30. Juli</td></tr>
            <tr><td>5</td><td>Gestaltung abgenommen</td><td>0 T</td><td>4</td><td>Do 30. Juli</td><td>—</td></tr>
            <tr><td>6</td><td>Frontend-Umsetzung</td><td>12 AT</td><td>5</td><td>Fr 31. Juli</td><td>Mo 31. August</td></tr>
            <tr><td>7</td><td>Inhalte einpflegen</td><td>6 AT</td><td>3, 6</td><td>Di 1. September</td><td>Di 8. September</td></tr>
            <tr><td>8</td><td>Qualitätssicherung und Fehlerbehebung</td><td>7 AT</td><td>7</td><td>Mi 9. September</td><td>Do 17. September</td></tr>
            <tr><td>9</td><td>Abnahme durch die Kundin</td><td>4 AT</td><td>8</td><td>Fr 18. September</td><td>Mi 23. September</td></tr>
            <tr><td>10</td><td>Livegang</td><td>0 T</td><td>9</td><td>Do 24. September</td><td>—</td></tr>
          </tbody>
        </table>
        <p>Diesen Endtermin hat niemand eingetippt. Er ist die Summe der Dauern entlang der längsten Kette und bewegt sich von selbst, sobald sich eine dieser Dauern ändert.</p>
        <p><strong>Warum die Umsetzung fünf Wochen für zwölf Tage braucht.</strong> Die beauftragte Agentur hat vom 10. bis 21. August <strong>Betriebsferien</strong>. Zwölf Arbeitstage ab dem 31. Juli enden deshalb nicht am 17., sondern am 31. August. Das ist keine Trödelei, sondern eine Kalenderrealität, die in den Plan gehört — trägt man sie nicht ein, verspricht der Terminplan einen Livegang Mitte September, den niemand halten kann. Dasselbe gilt für die Sommerferien im jeweiligen Bundesland, wenn Freigaben bei Personen liegen, die im August drei Wochen weg sind, und für die Tage zwischen Weihnachten und Neujahr bei jedem Projekt, das über den Jahreswechsel läuft.</p>
        <p><strong>Was das kostet.</strong> Das Agenturangebot liegt bei 34.500 € netto, dazu 4.800 € für die Fotoproduktion in der Werkstatt. Beide Beträge hängen an Vorgang 4 und 6 — und weil die Betriebsferien die Umsetzung strecken, verschiebt sich auch der zugehörige Zahlungsplan um zwei Wochen. Ein Terminplan, der die Ferien kennt, ist damit auch eine bessere Liquiditätsplanung.</p>
        <p>Zwei Verknüpfungen lohnen den zweiten Blick. Zeile 7 hat zwei Vorgänger — die Texte und die Umsetzung — und beginnt daher, wenn der spätere der beiden fertig ist, also die Umsetzung am 31. August. Und Zeile 3 endet am 24. Juli, wird aber erst am 1. September gebraucht: sechzehn Arbeitstage Spiel. Diese Lücke ist echte Information — dorthin schieben Sie die Texterin, wenn an anderer Stelle etwas brennt.</p>
      </div>`],
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
        <p>Verknüpfen Sie nicht alles mit allem. Ein Plan, in dem jeder Vorgang von seinem Vorgänger abhängt, ist eine Kette ohne Parallelität — und meist unrealistisch. Und tragen Sie keine festen Termine dort ein, wo eine Verknüpfung die Berechnung übernehmen sollte: Ein hart gesetztes Datum übersteuert die Neuberechnung und macht aus dem Plan wieder ein Bild.</p>
        <!--FIG:deps|Eine Abhängigkeit sagt, dass ein Vorgang einen anderen einschränkt; der Pfeil zeigt vom Vorgänger zum Nachfolger.-->
        <p>Die vier Arten, jeweils am Relaunch der Möbelwerkstatt Brandner gemessen:</p>
        <table>
          <thead>
            <tr><th>Art</th><th>Regel</th><th>Wo sie hier passt</th><th>Wie oft man sie braucht</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Ende-Anfang (EA)</strong></td><td>B beginnt erst, wenn A fertig ist</td><td>Frontend-Umsetzung nach der abgenommenen Gestaltung — neun der neun Verknüpfungen in diesem Plan</td><td>Fast immer</td></tr>
            <tr><td><strong>Anfang-Anfang (AA)</strong></td><td>B beginnt erst, wenn A begonnen hat</td><td>Wenn die Texte am selben Tag wie die Wireframes anliefen statt nach der Bestandsaufnahme</td><td>Gelegentlich, bei überlappender Arbeit</td></tr>
            <tr><td><strong>Ende-Ende (EE)</strong></td><td>B endet nicht vor A</td><td>Die Qualitätssicherung endet frühestens, wenn der letzte Inhalt eingepflegt ist</td><td>Selten</td></tr>
            <tr><td><strong>Anfang-Ende (AE)</strong></td><td>B endet nicht, bevor A begonnen hat</td><td>Nirgends. Diese Art existiert im Wesentlichen für Schichtübergaben</td><td>Fast nie</td></tr>
          </tbody>
        </table>
        <p>Ein Verhalten sollten Sie kennen, bevor Sie Balken ziehen: gantts.app plant <em>wie gesetzt</em>. Eine Abhängigkeit kann einen Vorgang später schieben, als Sie ihn abgelegt haben, aber niemals früher ziehen. Legen Sie die Qualitätssicherung in den November und verknüpfen sie mit dem Einpflegen der Inhalte, holt der Plan sie nicht in den September zurück — die Verknüpfung setzt den frühestmöglichen Beginn, und das Diagramm zeigt die Lücke, die Sie gelassen haben. <strong>Neu planen</strong> schließt diese Lücken, wenn Sie es verlangen.</p>`],
    ['5. Meilensteine setzen', `<p>Fünf bis zehn für ein mehrmonatiges Projekt. Ein Meilenstein hat die Dauer null, erscheint als Raute und markiert eine Entscheidung, eine Freigabe oder eine erfüllte Bedingung — nicht das Ende einer beliebigen Aufgabe. Für den Relaunch also: Konzept freigegeben, Gestaltung abgenommen, Inhalte vollständig, Rechtsfreigabe erteilt, neue Seite live.</p>
        <p>Meilensteine leisten zweierlei. Sie geben Beteiligten außerhalb des Teams greifbare Kontrollpunkte, und sie sind Ankerpunkte, an die sich Abhängigkeiten sauber knüpfen lassen. Eine gute Gewohnheit ist ein Meilenstein am Ende jeder Phase und einer am Endtermin, damit die Ziellinie im Plan immer sichtbar ist.</p>`],
    ['6. Ressourcen zuordnen und Auslastung prüfen', `<p>Erst jetzt ordnen Sie Personen zu — und prüfen dann, ob jemand in derselben Woche an drei Vorgängen gleichzeitig arbeiten soll. Diese Überlastung ist der häufigste Grund, warum ein rechnerisch korrekter Plan in der Praxis nicht hält.</p>
        <p>Gehen Sie den Plan spaltenweise durch, Woche für Woche, und addieren Sie je Person die parallel laufenden Vorgänge. Wer in Kalenderwoche 33 gleichzeitig Texte schreiben, Bilder abnehmen und den Test begleiten soll, wird alle drei verspäten. Die Gegenmittel sind dieselben wie immer: Vorgänge zeitlich versetzen, wo Puffer vorhanden ist, umverteilen oder den Umfang kürzen.</p>
        <p>Halten Sie anschließend den Fortschritt in Prozent je Vorgang nach. Der Vergleich von Heute-Linie und Fortschrittsbalken ist die schnellste Statusaussage, die es gibt: Steht ein Balken links der Heute-Linie noch bei 0 Prozent, haben Sie Verzug — und zwar sichtbar, bevor jemand ihn meldet.</p>
        <p>Tun Sie vor dem ersten Tag noch eines: Speichern Sie einen <strong>Basisplan</strong>. Er friert den vereinbarten Stand ein, sodass Sie sechs Wochen später die Abweichung messen können, statt darüber zu streiten, was zugesagt war. So sieht der Relaunch am Ende der sechsten Woche aus, mit dem Basisplan vom 6. Juli:</p>
        <table>
          <thead>
            <tr><th>Vorgang</th><th>Ende laut Basisplan</th><th>Ist bzw. Prognose</th><th>Abweichung</th><th>Fortschritt</th></tr>
          </thead>
          <tbody>
            <tr><td>Bestandsaufnahme der Inhalte</td><td>Fr 10. Juli</td><td>Fr 10. Juli</td><td>0 T</td><td>100 %</td></tr>
            <tr><td>Seitenstruktur und Wireframes</td><td>Mo 20. Juli</td><td>Mi 22. Juli</td><td>+2 T</td><td>100 %</td></tr>
            <tr><td>Gestaltung</td><td>Do 30. Juli</td><td>Mo 3. August</td><td>+2 T</td><td>100 %</td></tr>
            <tr><td>Texte schreiben</td><td>Fr 24. Juli</td><td>Do 6. August</td><td>+9 T</td><td>100 %</td></tr>
            <tr><td>Frontend-Umsetzung</td><td>Mo 31. August</td><td>Mi 2. September</td><td>+2 T</td><td>40 %</td></tr>
            <tr><td>Livegang</td><td>Do 24. September</td><td>Mo 28. September</td><td>+2 T</td><td>—</td></tr>
          </tbody>
        </table>
        <p>Lesen Sie die Abweichungsspalte, und die Geschichte erzählt sich selbst. Die Texte sind neun Tage zu spät und kosten nichts, weil sie sechzehn Tage Puffer zu vergeben hatten. Die zwei Tage bei den Wireframes kosten am Livegang exakt zwei Tage, weil dieser Vorgang auf dem kritischen Pfad liegt. Derselbe Verzug, völlig unterschiedlicher Preis — und genau deshalb gibt es Schritt 7.</p>
        <!--FIG:baseline|Ein Basisplan friert den vereinbarten Stand ein, damit späterer Verzug messbar wird und keine Erinnerungsfrage bleibt.-->`],
    ['7. Puffer einplanen, kritischen Pfad prüfen und freigeben', `<p>Setzen Sie Puffer dorthin, wo Unsicherheit ist — vor Meilensteine und an das Ende des kritischen Pfads, nicht auf jeden einzelnen Vorgang. Verteilte Puffer verschwinden nach dem Parkinsonschen Prinzip; gebündelte bleiben sichtbar und lassen sich bewusst vergeben.</p>
        <p>Schalten Sie dann den <a href="/de/blog/critical-path-method.html">kritischen Pfad</a> ein, also die längste Kette abhängiger Vorgänge, die den Endtermin bestimmt. Prüfen Sie, ob er dort verläuft, wo Sie ihn erwarten. Läuft er durch einen Vorgang, den Sie für nebensächlich hielten, fehlt entweder eine Verknüpfung oder eine Dauer ist falsch geschätzt. Passt der Endtermin nicht, wirken nur zwei Hebel, und beide ausschließlich auf diesem Pfad: mehr Mittel auf kritische Vorgänge oder bisher aufeinanderfolgende Vorgänge überlappen lassen.</p>
        <p>Im Relaunch der Möbelwerkstatt Brandner läuft diese Kette über Bestandsaufnahme, Wireframes, Gestaltung, Abnahme der Gestaltung, Umsetzung, Einpflegen, Qualitätssicherung, Kundenabnahme und Livegang. Acht der zehn Zeilen liegen darauf, was etwas Unangenehmes, aber Nützliches verrät: Dieser Plan hat fast kein Spiel, und ein einziger Vorgang — die Texte — trägt den gesamten Puffer, den das Projekt besitzt.</p>
        <!--FIG:float|Puffer ist der Abstand, den ein Vorgang rutschen darf, bevor er andere bewegt.-->
        <p>Ausgewiesen wird dabei der <strong>Gesamtpuffer</strong>: wie lange ein Vorgang rutschen darf, bevor sich der Endtermin bewegt — und nicht der freie Puffer, der nur den Abstand zum unmittelbaren Nachfolger misst. Eine Spalte für den freien Puffer gibt es nicht. Die sechzehn Tage der Texte sind daher sechzehn Tage echter Schutz für den Livegang, und nicht bloß Luft gegenüber der nächsten Zeile.</p>
        <p>Zum Schluss gehen Sie den Plan mit den Beteiligten durch. Ein Plan, den nur eine Person kennt, ist kein Plan, sondern eine Meinung. Frieren Sie danach den Stand als <strong>Basisplan</strong> ein — ohne diesen Vergleichsstand lässt sich später nicht mehr belegen, wo und wann die Abweichung entstanden ist.</p>`],
    ['Womit erstellen?', `<p>Für kleine Vorhaben reicht eine Tabellenkalkulation, wird aber ab etwa zwanzig Zeilen mühsam, weil Abhängigkeiten nicht automatisch rechnen: Jede Verschiebung müssen Sie durch alle Nachfolger von Hand tragen, und nach der zweiten Änderung unterbleibt das. Wie es trotzdem geht, steht in der Anleitung zu <a href="/de/blog/gantt-chart-in-excel.html">Gantt-Diagrammen in Excel</a>.</p>
        <p>Spezialisierte Werkzeuge nehmen Ihnen das ab. <a href="/de/app.html">gantts.app</a> läuft direkt im Browser, ohne Anmeldung und ohne Installation: Vorgänge eintippen, Dauern setzen, Balken ziehen, Verknüpfungen als Pfeile zeichnen. Der kritische Pfad hebt sich automatisch hervor und rechnet sich bei jeder Änderung neu. Exportiert wird nach PDF, PNG, XLSX oder PPTX, und der Plan bleibt lokal auf Ihrem Gerät.</p>
        <p>Dieselben zehn Zeilen im Editor, mit den Schaltflächen so beschriftet, wie sie tatsächlich heißen:</p>
        <ol>
          <li>Öffnen Sie <strong>✨ In Gantt einfügen</strong> und fügen Sie die Gliederung ein. Dauern in Klammern, <em>nach</em> für eine Verknüpfung und ein abschließendes <em>!</em> für einen Meilenstein werden beim Einfügen erkannt — also <em>Frontend-Umsetzung (12d) nach Gestaltung abgenommen</em> und danach <em>Livegang!</em></li>
          <li>Von Hand stattdessen: <strong>＋ Vorgang</strong> für eine Arbeitszeile, <strong>◆ Meilenstein</strong> für eine Raute, <strong>▣ Gruppe</strong> für eine Phase, danach die Vorgänge darunter einrücken.</li>
          <li>Ein Doppelklick auf eine Zeile öffnet <strong>Nach (Vorgänger)</strong>, <strong>Zuständig</strong> und <strong>Fortschritt</strong>. Auch der <strong>Typ</strong> steht hier: Ändern Sie ihn auf Meilenstein, fällt das Ende der Zeile auf ihren Anfang. Breiter ziehen lässt sich eine Raute nicht — ein Meilenstein mit Dauer ist kein Meilenstein.</li>
          <li>Tragen Sie unter <strong>Kalender</strong> die Betriebsferien vom 10. bis 21. August ein. Ohne diesen Schritt endet die Umsetzung rechnerisch am 17. August, und der ganze restliche Plan ist zwei Wochen zu optimistisch.</li>
          <li>Klicken Sie auf <strong>Neu planen</strong>, damit jeder Vorgang auf den frühesten Termin rückt, den seine Verknüpfungen zulassen. Das ist der Schritt, der den 24. September erzeugt.</li>
          <li>Setzen Sie das Häkchen bei <strong>Kritischer Pfad</strong>, um die acht kritischen Balken zu schraffieren, und prüfen Sie, dass die Texte nicht darunter sind.</li>
          <li>Speichern Sie <strong>◳ Basisplan</strong> vor dem ersten Tag, damit die Abweichungstabelle oben etwas ist, das die App ausfüllt, und nicht etwas, das Sie von Hand zusammentragen.</li>
          <li>Stellen Sie <strong>Zoom</strong> für einen Zehn-Wochen-Plan auf Woche und springen Sie mit <strong>◎ Heute</strong> zurück, sobald die Arbeit läuft.</li>
          <li><strong>⬇ Export</strong> liefert <strong>📄 PDF-Dokument</strong>, <strong>📊 Excel (.xlsx)</strong>, <strong>📑 CSV (Tabelle)</strong> und <strong>📽 PowerPoint (.pptx)</strong>; <strong>📤 Teilen…</strong> liefert einen <strong>🔗 Teilbarer Link</strong>. Für die Kundin stellen Sie <strong>Ansicht</strong> vorher auf <strong>Nur Meilensteine</strong> — Abnahme der Gestaltung und Livegang, sonst nichts.</li>
        </ol>
        <!--FIG:steps|Von der Vorgangsliste zum terminierten, verknüpften Plan in wenigen Schritten.-->`],
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
    ['Ein durchgerechnetes Beispiel', `<p>Der Einbau einer Regalanlage im Logistikzentrum der Spedition Ostermann in Kassel: sechs Vorgänge, Dauern in Arbeitstagen, Projektstart Montag, 6. Juli 2026. Die Anlage kostet 96.000 €, die Montagekolonne 1.850 € je Tag. Jede Zahl unten braucht nichts als Addition und Subtraktion.</p>
      <div class="worked">
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
        <p>C und E haben je <strong>einen Arbeitstag Puffer</strong> — aber es ist derselbe Tag, denn beide liegen auf demselben Zweig. Verschiebt sich die Beschaffung um einen Tag, hat die Baustellenvorbereitung anschließend null Puffer, und der zweite Zweig ist ebenfalls kritisch. Verschiebt sie sich um zwei Tage, ist der Endtermin weg.</p>
        <p><strong>Warum diese sechs Tage teuer sind.</strong> Der Regalhersteller hat vom 3. bis 21. August <strong>Betriebsferien</strong>. Zwischen dem berechneten Ende am 24. Juli und dem Beginn der Werksschließung liegen sechs Arbeitstage. Rutscht die Montage weiter als das, kostet die Verzögerung nicht einen Tag, sondern drei Wochen — der kritische Pfad hat hier also nicht nur eine Länge, sondern auch eine Klippe kurz dahinter. Genau das ist der Grund, den Betriebsferienkalender der Lieferanten vor der Terminzusage abzufragen und nicht danach.</p>

        <p><strong>Jetzt verbrauchen wir Puffer.</strong> Die Beschaffung (C, Puffer 1) dauert 4 statt 2 Tage. Rechnen Sie vorwärts weiter: C hat FEZ 3 + 4 = 7, E damit FAZ 7 und FEZ 13, und F beginnt bei <code>max(D 12; E 13) = 13</code> und endet bei <strong>16</strong>.</p>
        <p>Zwei Tage Verzug, ein Tag am Projektende — der erste Tag kam aus dem Puffer, nur die Überschreitung erreichte den Termin. Puffer ist ein Budget, und man kann es genau einmal ausgeben. Und noch etwas ist passiert: <strong>Der kritische Pfad ist umgezogen.</strong> A → C → E → F misst jetzt 3 + 4 + 6 + 3 = 16 Tage, während der alte Weg über Entwurf und Umsetzung mit 15 Tagen einen Tag Puffer hat. Die Vorgänge, die Sie bewacht haben, sind nicht mehr die, auf die es ankommt — und nichts hätte Ihnen das gesagt, wenn nicht neu gerechnet würde. Das Projektende wandert vom 24. auf Montag, den 27. Juli.</p>

        <p><strong>Und jetzt auf dem kritischen Pfad.</strong> Setzen Sie die Beschaffung zurück auf 2 Tage und lassen Sie stattdessen den Entwurf (B) 6 statt 4 Tage dauern. B hat FEZ 9, D damit FAZ 9 und FEZ 14, F beginnt bei <code>max(14; 11) = 14</code> und endet bei <strong>17</strong>. Zwei Tage hinein, zwei Tage heraus, eins zu eins — es gab nichts, was sie hätte auffangen können. Ende: Dienstag, der 28. Juli.</p>
        <p>Alle anderen sind dabei reicher geworden: Rechnen Sie mit SEZ(F) = 17 rückwärts, haben C und E jetzt je drei Tage Puffer statt einem. Luft an anderer Stelle wird durch Verzug auf dem kritischen Pfad erzeugt — sie ist kein Zeichen dafür, dass es gut läuft.</p>
        <p><strong>Was ein Tag kostet.</strong> Wollen Sie die zwei Tage zurückkaufen, wirkt nur ein Eingriff auf dem kritischen Pfad. Zwei zusätzliche Monteure verkürzen die Umsetzung (D) um einen Tag und kosten 1.850 € — die Frage im Lenkungskreis lautet dann nicht „können wir schneller“, sondern „ist uns dieser eine Tag 1.850 € wert“. Dieselben zwei Monteure auf die Baustellenvorbereitung gesetzt kosten dasselbe und bringen null Tage.</p>
      </div>
      <!--FIG:float|Puffer ist ein Budget. Geben Sie weniger aus, als Sie haben, bewegt sich der Endtermin nicht; geben Sie mehr aus, erreicht nur die Überschreitung das Ende.-->`],
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
    ['Wie gantts.app rechnet — und wo es vom Lehrbuch abweicht', `<p>Das lohnt sich genau zu benennen, denn unsere Vorwärtsrechnung ist nicht die oben beschriebene, und der Unterschied landet in der Pufferspalte.</p>
        <p>Das Lehrbuch-CPM ignoriert, wohin Sie den Balken gezeichnet haben: Es setzt jeden Vorgang so früh, wie seine Vorgänger es erlauben. Die Baustellenvorbereitung beginnt also am Tag 3, ob Sie sie dort abgelegt haben oder nicht. gantts.app rechnet dagegen <strong>CPM „wie gesetzt“</strong>: Jeder Vorgang beginnt an <em>seinem eigenen gesetzten Starttermin</em>, und ein Vorgänger kann ihn danach nur <strong>später</strong> schieben, niemals früher ziehen. Im Kern ist das ein einziges Maximum — der früheste Anfang beginnt beim eigenen Starttermin, und eine Abhängigkeit hebt ihn nur an, wenn die Bedingung mehr verlangt.</p>
        <p>Legen Sie die Baustellenvorbereitung auf den Tag 7 statt auf den Tag 5, und der Unterschied ist eine Zahl. Das Lehrbuch meldet weiter FAZ 5 und einen Tag Puffer. Wir melden FAZ 7, und bei unveränderter Rückwärtsrechnung mit SAZ 6 ergibt das <strong>−1 Tag</strong>, also einen negativen Puffer. Beides ist richtig; die beiden beantworten verschiedene Fragen. Das Lehrbuch fragt, wie viel Luft die Logik erlaubt — wir fragen, wie viel dieser Plan, so wie er gezeichnet ist, noch hat.</p>
        <p>Der Grund ist, dass dies zuerst ein Diagramm ist: Eine Vorwärtsrechnung, die Vorgänge stillschweigend verschiebt, würde Puffer für einen Terminplan ausweisen, der nicht der auf dem Bildschirm ist. Einen Balken zu ziehen ist eine Anweisung, also behandeln wir sie als eine. Drei weitere Punkte, die Sie kennen sollten:</p>
        <ul>
          <li><strong>Nur der Gesamtpuffer.</strong> Es gibt eine Zahl je Vorgang, und das ist der Gesamtpuffer — eine Spalte für den freien Puffer existiert bewusst nicht. Den freien Puffer aus dem Abschnitt weiter oben müssen Sie also selbst im Kopf haben, wenn zwei Personen an demselben Zweig planen.</li>
          <li><strong>Sammelzeilen terminieren nicht.</strong> Die Rechnung läuft über Einzelvorgänge und Meilensteine; Phasenbalken sind Zusammenfassungen ihrer Kinder. Ein Meilenstein hat die Dauer null und lässt sich verschieben, aber nicht in der Länge ziehen.</li>
          <li><strong>Arbeitstage, wenn ein Kalender aktiv ist.</strong> Gerechnet wird in Arbeitstagsordnungszahlen, ein Abstand von 5 sind also fünf Arbeitstage, und Nachfolger landen auf einem Montag statt auf einem Sonntag.</li>
        </ul>
        <p>Kritisch ist ein Vorgang, wenn sein Puffer <strong>null oder kleiner</strong> ist — negative Puffer verschwinden dadurch nicht, sondern werden sichtbar.</p>
        <!--FIG:lag|Ein Zeitabstand verschiebt die Bedingung, ohne die Verknüpfung zu lösen. Der kritische Pfad läuft durch den Abstand hindurch.-->
        <p>Wollen Sie das Lehrbuchverhalten — alles auf den frühesten Termin gezogen, den die Logik zulässt —, klicken Sie auf <strong>Neu planen</strong>. Diese Funktion wiederholt die Vorwärtsrechnung mit einer geänderten Regel: Ein Vorgang mit Vorgängern folgt ausschließlich seinen Bedingungen, unabhängig davon, wo er liegt, während Vorgänge ohne Vorgänger als Anker stehen bleiben. Danach stimmen beide Verfahren überein.</p>
        <p>So sehen Sie den kritischen Pfad der Regalanlage in unter einer Minute:</p>
        <ol>
          <li>Öffnen Sie <a href="/de/app.html">gantts.app</a> und klicken Sie auf <strong>✨ In Gantt einfügen</strong>. Fügen Sie die sechs Vorgänge ein — <em>Umsetzung (5d) nach Entwurf</em>, <em>Montage und Test (3d) nach Umsetzung</em>.</li>
          <li>Ein Doppelklick auf „Montage und Test“ öffnet <strong>Nach (Vorgänger)</strong>. Tragen Sie dort <em>beide</em> Vorgänger ein, Umsetzung und Baustellenvorbereitung — das ist das <code>max()</code> aus der Vorwärtsrechnung, nur ohne Formel.</li>
          <li>Tragen Sie unter <strong>Kalender</strong> die Betriebsferien des Regalherstellers vom 3. bis 21. August ein, damit die Klippe hinter dem Endtermin im Plan sichtbar wird.</li>
          <li>Klicken Sie auf <strong>Neu planen</strong>. Jetzt entspricht die Rechnung dem Lehrbuch, und die 15 Arbeitstage stehen im Plan.</li>
          <li>Setzen Sie das Häkchen bei <strong>Kritischer Pfad</strong>. A, B, D und F werden schraffiert; die Legende darunter erklärt die Schraffur.</li>
          <li>Blenden Sie über <strong>Spalten</strong> die Pufferspalte ein und lesen Sie die 1 bei Beschaffung und Baustellenvorbereitung ab. Denken Sie daran: Das ist einmal ein Tag für den ganzen Zweig, nicht zweimal.</li>
          <li>Ändern Sie die Dauer der Beschaffung auf 4 Tage. Die Schraffur springt auf den anderen Zweig — genau der Umzug des kritischen Pfads, den wir oben von Hand gerechnet haben.</li>
          <li>Über <strong>⬇ Export</strong> geht der Plan als <strong>📄 PDF-Dokument</strong>, <strong>📊 Excel (.xlsx)</strong> oder <strong>📽 PowerPoint (.pptx)</strong> hinaus.</li>
        </ol>
        <p>Die Rechnung einmal von Hand durchzuführen lohnt sich, weil man danach versteht, was die Software tut. Wiederholen möchte man sie nach jeder Schätzungsänderung nicht.</p>
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
  metaDesc: 'Ende-Anfang, Anfang-Anfang, Ende-Ende und Anfang-Ende erklärt — mit durchgerechnetem Beispiel, Zeitabständen sowie freiem und gesamtem Puffer.',
  date: '2026-07-19',
  lead: 'Vier Beziehungstypen decken jede Abhängigkeit ab, die sich in einem Gantt-Diagramm zeichnen lässt. Einer erledigt rund neunzig Prozent der Arbeit; die anderen drei gibt es für die Fälle, die er schlecht abbildet. Hier steht, was jeder bedeutet, mit einem Beispiel, das den ganzen Text hindurch mitläuft — und mit den beiden Punkten, die fast alle Erklärungen auslassen: Verzögerung gegen Vorlauf, und Gesamtpuffer gegen freien Puffer.',
  figIntro: 'Die vier Verknüpfungsarten im Vergleich:',
  sections: [
    ['Das Vorhaben, das wir durchgehend verwenden', `<p>Über Abhängigkeitsdiagramme nickt man leicht und wendet sie schwer an. Deshalb steht hier ein konkretes Vorhaben, auf das jeder der folgenden Typen angewendet wird: die Ablösung des Abrechnungssystems bei einem kommunalen Versorger.</p>
      <div class="worked">
        <p><strong>Stadtwerke Lünen, Umstellung der Verbrauchsabrechnung. Sechs Vorgänge, Arbeitstage, März bis April 2026.</strong></p>
        <table>
          <thead><tr><th>Nr.</th><th>Vorgang</th><th>Beginn</th><th>Ende</th><th>Tage</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>Migrationsskripte entwickeln</td><td>Mo 2. März</td><td>Fr 13. März</td><td>10</td></tr>
            <tr><td>2</td><td>Testmigration fahren</td><td>Mo 16. März</td><td>Fr 20. März</td><td>5</td></tr>
            <tr><td>3</td><td>Befunde der Testmigration beheben</td><td>Mo 23. März</td><td>Fr 3. April</td><td>10</td></tr>
            <tr><td>4</td><td>Umstellungshandbuch schreiben</td><td>Mo 16. März</td><td>Fr 3. April</td><td>15</td></tr>
            <tr><td>5</td><td>Abrechnungsteam schulen</td><td>Mo 23. März</td><td>Fr 27. März</td><td>5</td></tr>
            <tr><td>6</td><td>Altsystem weiterbetreiben</td><td>Mo 2. März</td><td>Mo 6. April</td><td>26</td></tr>
          </tbody>
        </table>
        <p>Sechs Balken, keine Verknüpfungen: Bis hierhin sagt der Plan nichts darüber, was worauf wartet.</p>
      </div>`],

    ['Ende-Anfang (EA) — die Art, die Sie ständig brauchen', `<p>Vorgang B kann nicht beginnen, bevor Vorgang A fertig ist. Fundament gießen, dann aufmauern.</p>
      <p>Vorgang 2 hängt EA an Vorgang 1: Man kann kein Skript testen, das niemand geschrieben hat. Vorgang 3 hängt EA an Vorgang 2, denn die Fehlerliste existiert erst, wenn die Testmigration sie erzeugt hat. Diese Kette — 1 → 2 → 3, zehn plus fünf plus zehn Tage — ist das Rückgrat des Vorhabens und legt das Ende auf den 3. April.</p>
      <p>Ende-Anfang ist in jedem Planungswerkzeug der Standard, und im Zweifel ist es fast sicher die richtige Wahl. Der Griff zu einem exotischen Typ ist häufiger ein Hinweis darauf, dass die Vorgänge falsch geschnitten sind, als darauf, dass Sie wirklich AA oder EE brauchen.</p>`],

    ['Anfang-Anfang (AA) — Arbeit, die gemeinsam anläuft', `<p>Vorgang B kann nicht beginnen, bevor Vorgang A begonnen hat. Danach laufen beide parallel.</p>
      <p>Das Umstellungshandbuch (Vorgang 4) hängt AA an der Testmigration. Die Autorin braucht eine laufende Testmigration, um überhaupt etwas dokumentieren zu können; auf deren <em>Ende</em> zu warten, würde eine Woche verschenken. Also beginnen beide am Montag, dem 16. März.</p>
      <p>Nehmen Sie AA, wenn B nur auf den Beginn von A wartet: Sobald der Erdaushub anläuft, läuft die Bauüberwachung an. Das Erkennungsmerkmal ist ein gemeinsamer Auslöser, kein gemeinsamer Endtermin.</p>`],

    ['Ende-Ende (EE) — Arbeit, die gemeinsam landen muss', `<p>Vorgang B kann nicht enden, bevor Vorgang A geendet hat.</p>
      <p>Das Handbuch hat zusätzlich eine EE-Verknüpfung zu Vorgang 3: Es kann nicht freigegeben werden, solange noch Fehlerbehebungen eintreffen, denn jede Korrektur schreibt einen Arbeitsschritt darin um. Es bleibt also bis Freitag, den 3. April, offen — begonnen von der Testmigration, geschlossen von den Fehlerbehebungen. Das ist die typische Form einer begleitenden Tätigkeit.</p>
      <p>Tests, die nicht vor der Entwicklung fertig sein können, Dokumentation, die mit der Funktion abschließt, Qualitätssicherung, die sich um einen Bau legt: alles EE. B darf beginnen, wann es will; es darf nur nicht vorher über die Ziellinie.</p>`],

    ['Anfang-Ende (AE) — die seltene Art', `<p>Vorgang B kann nicht enden, bevor Vorgang A begonnen hat. Das liest sich rückwärts, und die meisten Planerinnen brauchen es in ihrem ganzen Berufsleben nicht.</p>
      <p>Vorgang 6 ist genau der Fall, für den es erfunden wurde. Das Altsystem muss laufen, bis das neue in Betrieb geht: Sein <em>Ende</em> ist an den <em>Beginn</em> der Inbetriebnahme gekoppelt. Verknüpfen Sie AE, und der Balken des Altsystems dehnt sich automatisch bis zu dem Termin, auf den die Inbetriebnahme fällt — ohne dass sich jemand daran erinnern muss, ihn zu ziehen.</p>
      <p>Das ist der ehrliche Test: eine Übergabe, bei der das Alte endet, weil das Neue beginnt. Überall sonst sollten Sie prüfen, ob eine Umsortierung dasselbe mit einer schlichten EA-Verknüpfung ausdrückt.</p>`],

    ['Die vier Typen nebeneinander', `<table>
        <thead><tr><th>Typ</th><th>Auslöser in der Wirklichkeit</th><th>Wie oft er passt</th><th>Der Fehler, zu dem er verleitet</th></tr></thead>
        <tbody>
          <tr><td><strong>EA</strong><br>Ende → Anfang</td><td>Das Ergebnis von A ist der Input von B — eine Fehlerliste, eine freigegebene Zeichnung, eine ausgehärtete Sohle</td><td>Rund 90 % der Verknüpfungen eines typischen Plans</td><td>Als Vorliebe statt als Zwang gesetzt, bis jeder Termin festgenagelt ist und nichts mehr umgeplant werden kann</td></tr>
          <tr><td><strong>AA</strong><br>Anfang → Anfang</td><td>Zwei Tätigkeiten teilen einen Auslöser und laufen dann gemeinsam</td><td>Häufig; die meisten Pläne haben einige</td><td>Sie reagiert nur auf den <em>Beginn</em> des Vorgängers. Rutscht dessen Ende, bewegt sich B überhaupt nicht</td></tr>
          <tr><td><strong>EE</strong><br>Ende → Ende</td><td>Eine Klammer, die nicht vor ihrem Inhalt schließen kann — Tests, Dokumentation, Freigabe</td><td>Gelegentlich, vor allem bei begleitenden Vorgängen</td><td>Der Beginn von B bleibt ungebunden, weshalb er absurd früh möglich aussieht</td></tr>
          <tr><td><strong>AE</strong><br>Anfang → Ende</td><td>Eine Übergabe — die alte Schicht, das Altsystem oder der alte Vertrag endet, weil das Neue beginnt</td><td>Selten. Viele korrekte Pläne haben keine einzige</td><td>Als umständliches rückwärts gedachtes EA benutzt, das beim Durchsehen niemand richtig liest</td></tr>
        </tbody>
      </table>`],

    ['Wenn der falsche Typ den Terminplan lügen lässt', `<p>Nun zu Vorgang 5, der Schulung. Ein Planer verknüpft sie <strong>AA nach Vorgang 3</strong>: Die Schulung beginnt, wenn die Fehlerbehebung beginnt. Das sieht stimmig aus — beide Balken starten am 23. März, alle sind am 27. März geschult, deutlich vor der Inbetriebnahme. Der Termin ist zudem mit dem Betriebsrat abgestimmt, weil die Schulung in der Arbeitszeit stattfindet, und damit doppelt zugesagt.</p>
      <div class="worked">
        <p><strong>Dann findet die Testmigration mehr als erwartet</strong>, und Vorgang 3 wächst von zehn auf fünfzehn Tage; sein Ende rückt von Freitag, dem 3. April, auf Freitag, den 10. April.</p>
        <ul>
          <li><strong>Vorgang 4 (Handbuch, EE)</strong> — bewegt sich. Sein Ende folgt auf Freitag, den 10. April. Richtig.</li>
          <li><strong>Vorgang 5 (Schulung, AA)</strong> — <em>bewegt sich überhaupt nicht.</em> AA schaut auf den Beginn des Vorgängers, und der hat sich nicht verändert. Der Plan zeigt weiterhin ein geschultes Team am Freitag, dem 27. März.</li>
        </ul>
        <p>Das Diagramm ist nicht kaputt; es beantwortet die Frage, die man ihm gestellt hat. Nur wird das Team an einer Software geschult, an der noch zwei Wochen lang Fehler behoben werden — und der Plan meldet das als grün. Die richtige Verknüpfung wäre <strong>EA nach Vorgang 3</strong> gewesen: schulen, sobald die Software sich nicht mehr ändert. Ein falscher Buchstabe hat aus einem Zwei-Wochen-Problem gar kein Problem gemacht.</p>
      </div>
      <p>Prüfen Sie deshalb aktiv darauf. Verlängern Sie in einem verknüpften Plan den Vorgang, der am ehesten überzieht, testweise um eine Woche und sehen Sie nach, was sich bewegt hat. Alles, was sich hätte verschieben müssen und stehen blieb, ist ein falscher Typ — gefunden, solange die Korrektur nichts kostet.</p>`],

    ['Verzögerung und Vorlauf — eine Verzögerung ist Wartezeit, kein Puffer', `<p>Eine <strong>Verzögerung</strong> ergänzt eine Verknüpfung um Wartezeit. „EA + 3 Tage“ heißt, dass B drei Tage nach dem Ende von A beginnt. Hier hängt die Inbetriebnahme mit EA+1 Tag an den Fehlerbehebungen: ein voller Tag für den letzten Datenabgleich.</p>
      <!--FIG:lag|Eine Verzögerung ist fest zugesagte Wartezeit innerhalb der Verknüpfung, kein freier Spielraum daneben.-->
      <p>Was dabei regelmäßig falsch verstanden wird: <strong>Eine Verzögerung ist kein Puffer.</strong> Puffer ist Spielraum, den Sie ausgeben können, wenn etwas rutscht. Eine Verzögerung ist bereits verplante Zeit — Beton härtet aus, Farbe trocknet, eine vertragliche Prüffrist läuft. Niemand kann eine Verzögerung „aufbrauchen“, wenn er in Verzug gerät; der Beton härtet dieselben Tage. Wer Verknüpfungen mit Verzögerungen polstert, weil ein Vorgang „vielleicht“ überzieht, schafft eine Reserve, die niemand findet und niemand kürzen kann.</p>
      <p>Ein <strong>Vorlauf</strong> ist eine negative Verzögerung: „EA − 2 Tage“ überlappt das Ende von A. Vorläufe verdichten einen Terminplan — genau das ist beschleunigtes Vorgehen —, aber sie erkaufen Zeit mit Risiko. Eine Überlappung, über die niemand nachgedacht hat, ist eine Warteschlange für Nacharbeit: B baut auf einem unfertigen A auf.</p>
      <p>Beides schreibt man in der Notation von MS Project als <code>3EA+2T</code> — Zeile 3, Ende-Anfang, zwei Tage Verzögerung. gantts.app nimmt das in der Spalte <strong>Nach</strong> entgegen; in der englischen Notation heißt derselbe Eintrag <code>3FS+2d</code>, und beide werden verstanden.</p>`],

    ['Gesamtpuffer und freier Puffer sind nicht dieselbe Zahl', `<p>Jeder Vorgang hat jetzt Puffer: die Zeit, um die er rutschen darf, bevor er etwas beschädigt. Es gibt zwei Arten davon, und sie zu verwechseln ist teuer.</p>
      <!--FIG:float|Der Gesamtpuffer gehört der Kette. Der freie Puffer gehört dem Vorgang.-->
      <p><strong>Gesamtpuffer</strong> ist die Zeit, um die ein Vorgang rutschen darf, bevor sich das Projektende verschiebt. <strong>Freier Puffer</strong> ist die Zeit, um die er rutschen darf, bevor sich sein eigener Nachfolger verschiebt. Der freie Puffer ist nie größer, und im Abstand zwischen beiden wohnen die Probleme.</p>
      <p>Die Schulung hat im korrigierten Plan Gesamtpuffer — das Enddatum wird von der Fehlerkette bestimmt. Aber Gesamtpuffer ist <em>geteilt</em>: Wenn drei aufeinanderfolgende Vorgänge jeweils acht Tage anzeigen, liegen zwischen ihnen acht Tage und nicht vierundzwanzig. Eine Teamleitung, die nur diese Zahl liest und eine Woche verschiebt, hat Puffer ausgegeben, der der ganzen Kette gehört.</p>
      <!--FIG:cpm|Gesamtpuffer null heißt kritisch: Jeder Tag Verzug verschiebt das Enddatum.-->
      <p>Gesamtpuffer null ist die Definition des kritischen Pfads. Setzen Sie in gantts.app den Haken bei <strong>Kritischer Pfad</strong>, dann wird diese Kette schraffiert gezeichnet. Dort müssen die Typen stimmen, denn dort entsteht das Enddatum.</p>`],

    ['Eine Abhängigkeit in gantts.app anlegen und ändern', `<ol>
        <li><strong>Von Balken zu Balken ziehen.</strong> Fassen Sie den kleinen Punkt am Rand eines Vorgangsbalkens, ziehen Sie ihn auf den Balken, den Sie verknüpfen wollen, und lassen Sie los. Die Verknüpfung entsteht als <strong>EA</strong> ohne Verzögerung.</li>
        <li><strong>Den Typ ändern.</strong> Klicken Sie auf den Pfeil zwischen den Balken. Der Verknüpfungsdialog öffnet sich mit einer Auswahl für den Typ: Ende → Anfang, Anfang → Anfang, Ende → Ende, Anfang → Ende. Das Diagramm zeichnet sich sofort neu.</li>
        <li><strong>Eine Verzögerung ergänzen.</strong> Im selben Dialog steht das Feld für die Verzögerung in Tagen. Tragen Sie <code>1</code> für das EA+1 vor der Inbetriebnahme ein oder eine negative Zahl für einen Vorlauf. Beides lässt sich mit Strg+Z rückgängig machen.</li>
        <li><strong>Oder tippen.</strong> Die Spalte <strong>Nach</strong> im Raster nimmt Vorgänger als Zeilennummern entgegen: <code>3</code>, <code>2AA</code>, <code>3EE</code>, <code>3EA+2T</code>, durch Komma getrennt. Das ist der schnellste Weg, einen gerade eingefügten Plan zu verknüpfen.</li>
        <li><strong>Oder über die Vorgangskarte.</strong> Klicken Sie einen Vorgang an und öffnen Sie <strong>Nach (Vorgänger)</strong>. Über die Auswahl fügen Sie eine Verknüpfung hinzu; jede bestehende hat ihre eigene Typauswahl.</li>
        <li><strong>Eine entfernen.</strong> Im Verknüpfungsdialog gibt es dafür eine eigene Schaltfläche, alternativ das ✕ neben dem Eintrag in der Vorgangskarte.</li>
      </ol>
      <p>Ein Verhalten sollten Sie kennen: <strong>Eine Abhängigkeit kann einen Vorgang hier nur nach hinten schieben, nie nach vorn ziehen.</strong> Die Terminrechnung arbeitet „wie gelegt“ — ein Vorgang beginnt zum späteren der beiden Zeitpunkte: dort, wohin Sie ihn gezogen haben, oder dort, wo seine Vorgänger es erlauben. Verknüpfen Sie einen Vorgang, dessen Balken ohnehin weit hinter seinem Vorgänger liegt, bewegt sich nichts; die Lücke bleibt. Das ist Absicht: Ein bewusst platzierter Balken soll nicht von einer Verknüpfung herumgerissen werden, die Sie für die Berichterstattung ergänzt haben. Wenn Sie alles verdichten wollen, klicken Sie auf <strong>Neu planen</strong>. Das ignoriert, wo abhängige Vorgänge liegen, und zieht jeden auf den frühesten Termin zurück, den seine Vorgänger zulassen; unverknüpfte Vorgänge bleiben als Anker stehen.</p>`],
  ],
  callout: 'Eine Abhängigkeit soll einen echten Zwang beschreiben, keine Vorliebe. „Wir machen B lieber nach A“ ist eine Reihenfolgeentscheidung und gehört in die Sortierung. „B kann physisch nicht beginnen, bevor A fertig ist“ ist eine Abhängigkeit. Pläne voller Vorlieben lassen sich nicht mehr umplanen: Jeder Termin ist von etwas festgenagelt, das nie zwingend war, und wenn verdichtet werden muss, kann niemand mehr sagen, welche Verknüpfung tragend ist.',
  faq: [
    ['Welche vier Abhängigkeitstypen gibt es im Gantt-Diagramm?', 'Ende-Anfang (EA), Anfang-Anfang (AA), Ende-Ende (EE) und Anfang-Ende (AE). EA deckt die große Mehrheit der echten Beziehungen ab; AE ist wirklich selten, und viele korrekte Pläne enthalten keine einzige.'],
    ['Was ist der Unterschied zwischen Vorlauf und Verzögerung?', 'Eine Verzögerung ist Wartezeit in der Verknüpfung — EA+3T heißt, der Nachfolger beginnt drei Tage nach dem Ende des Vorgängers. Ein Vorlauf ist eine negative Verzögerung und überlappt beide. Eine Verzögerung ist fest verplante Zeit, kein Spielraum: Sie können sie nicht ausgeben, wenn Sie in Verzug geraten.'],
    ['Was ist der Unterschied zwischen Gesamtpuffer und freiem Puffer?', 'Gesamtpuffer ist die Zeit, um die ein Vorgang rutschen darf, bevor sich das Projektende verschiebt; freier Puffer die Zeit, bevor sich sein eigener Nachfolger verschiebt. Gesamtpuffer wird entlang einer Kette geteilt — drei Vorgänge mit jeweils acht Tagen haben zusammen nicht vierundzwanzig.'],
    ['Welchen Typ sollte man standardmäßig verwenden?', 'Ende-Anfang. Wenn ein anderer Typ nötig erscheint, prüfen Sie zuerst, ob die Vorgänge richtig geschnitten sind — ein ungewöhnlicher Typ ist oft das Symptom eines Vorgangs, der geteilt gehört.'],
    ['Was passiert mit meinen Terminen, wenn ich in gantts.app eine Abhängigkeit ergänze?', 'Eine Abhängigkeit kann einen Vorgang nur nach hinten schieben, nie nach vorn ziehen: Er beginnt zum späteren der beiden Zeitpunkte — dort, wo Sie ihn abgelegt haben, oder dort, wo die Vorgänger es zulassen. Mit „Neu planen“ verdichten Sie abhängige Vorgänge auf ihre frühestmöglichen Termine.'],
    ['Wie lege ich in gantts.app Abhängigkeiten an?', 'Ziehen Sie vom Punkt am Rand eines Balkens auf einen anderen Balken, oder tippen Sie eine Notation wie 3EA+2T in die Spalte „Nach“. Ein Klick auf einen Verknüpfungspfeil öffnet den Dialog für Typ und Verzögerung — dort lässt sie sich auch entfernen.'],
  ],
  related: [
    ['critical-path-method', 'Der kritische Pfad'],
    ['what-is-a-gantt-chart', 'Was ist ein Gantt-Diagramm?'],
    ['gantt-baseline-variance', 'Basisplan und Abweichung'],
  ],
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
      "Ein Beispiel in voller Länge: die Jahrestagung der Handwerkskammer Münster",
      `<p>Acht Kurzbeschreibungen helfen, das eigene Projekt wiederzuerkennen; ein Plan mit echten Terminen zeigt die Form. Deshalb hier ein einziges Beispiel durchgerechnet — eine Jahrestagung mit 400 Gästen am <strong>Donnerstag, dem 15. Oktober 2026</strong>, geplant ab Montag, dem 1. Juni, fünf Arbeitstage die Woche, Feiertage in Nordrhein-Westfalen berücksichtigt.</p>
      <div class="worked">
        <p><strong>Zwölf Zeilen bis zum Tagungstag</strong></p>
        <table>
          <thead>
            <tr><th>Nr.</th><th>Zeile</th><th>Dauer</th><th>Nach</th><th>Start</th><th>Ende</th></tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Budget und Auswahl der Veranstaltungsorte</td><td>10 AT</td><td>—</td><td>Mo 1. Juni</td><td>Di 16. Juni</td></tr>
            <tr><td>2</td><td>Veranstaltungsort beauftragt</td><td>0 T</td><td>1</td><td>Di 16. Juni</td><td>—</td></tr>
            <tr><td>3</td><td>Referentinnen und Referenten anfragen und bestätigen</td><td>25 AT</td><td>2</td><td>Mi 17. Juni</td><td>Di 21. Juli</td></tr>
            <tr><td>4</td><td>Catering und Technik beauftragen</td><td>12 AT</td><td>2</td><td>Mi 17. Juni</td><td>Do 2. Juli</td></tr>
            <tr><td>5</td><td>Anmeldeseite bauen</td><td>8 AT</td><td>2</td><td>Mi 17. Juni</td><td>Fr 26. Juni</td></tr>
            <tr><td>6</td><td>Anmeldung geöffnet</td><td>0 T</td><td>3, 5</td><td>Mi 22. Juli</td><td>—</td></tr>
            <tr><td>7</td><td>Bewerbung der Tagung</td><td>45 AT</td><td>6</td><td>Mi 22. Juli</td><td>Di 22. September</td></tr>
            <tr><td>8</td><td>Programm und Regieablauf</td><td>10 AT</td><td>3</td><td>Mi 22. Juli</td><td>Di 4. August</td></tr>
            <tr><td>9</td><td>Druck und Beschilderung</td><td>6 AT</td><td>8</td><td>Mi 5. August</td><td>Mi 12. August</td></tr>
            <tr><td>10</td><td>Endgültige Teilnehmerzahl ans Catering</td><td>2 AT</td><td>7</td><td>Mi 23. September</td><td>Do 24. September</td></tr>
            <tr><td>11</td><td>Generalprobe</td><td>2 AT</td><td>9, 10</td><td>Di 13. Oktober</td><td>Mi 14. Oktober</td></tr>
            <tr><td>12</td><td>Tagungstag</td><td>0 T</td><td>11</td><td>Do 15. Oktober</td><td>—</td></tr>
          </tbody>
        </table>
        <p>Die kritische Kette läuft 1 → 2 → 3 → 6 → 7 → 10 und landet auf <strong>Donnerstag, dem 24. September</strong>. Die Tagung ist am 15. Oktober. Diese Lücke von vierzehn Arbeitstagen ist die gesamte Reserve des Plans und die nützlichste einzelne Zahl im ganzen Diagramm.</p>
        <p><strong>Fronleichnam kostet gleich zu Beginn zwei Tage.</strong> Der 4. Juni 2026 ist in Nordrhein-Westfalen gesetzlicher Feiertag, und die Kammer hat am Brückentag, Freitag dem 5. Juni, geschlossen. Zehn Arbeitstage ab dem 1. Juni enden deshalb am 16. statt am 12. Juni — und weil Zeile 1 auf der kritischen Kette liegt, wandern diese zwei Tage bis zur Meldung der Teilnehmerzahl durch. Wer ohne Feiertagskalender plant, verschenkt zwei der vierzehn Reservetage, bevor überhaupt jemand telefoniert hat.</p>
        <p><strong>Die Sommerferien stehen nicht im Plan und wirken trotzdem.</strong> Die Bewerbung läuft ab dem 22. Juli und damit mitten in die nordrhein-westfälischen Sommerferien. Es wird gearbeitet, aber es meldet sich niemand an. Die Konsequenz ist kein Kalendereintrag, sondern eine Planungsentscheidung: Das Anmeldebudget von 6.500 € gehört überwiegend in den September, nicht in den August.</p>
        <p>Ein Veranstaltungsplan verhält sich anders als jedes andere Beispiel auf dieser Seite, weil der Endtermin nicht verhandelbar ist. Sie fragen nicht „wann sind wir fertig?“, sondern „passt die Arbeit vor das Datum, und mit wie viel Luft?“. Wäre die Kette auf den 20. Oktober gefallen, hülfe kein Einsatz der Welt — dann kürzt man den Umfang, beginnt früher oder verkürzt das Bewerbungsfenster.</p>
      </div>
      <!--FIG:cpm|Die längste Kette verknüpfter Vorgänge setzt den Termin; alles Übrige hat Spielraum.-->
      <p>Zwei Hinweise dazu, wie gantts.app das rechnet. Ausgewiesen wird der <strong>Gesamtpuffer</strong> — wie weit ein Vorgang rutschen darf, bevor sich der Endtermin bewegt — und nicht der freie Puffer; eine eigene Spalte dafür gibt es nicht. Und geplant wird <em>wie gesetzt</em>: Eine Abhängigkeit kann einen Vorgang später schieben, als Sie ihn abgelegt haben, ihn aber nie früher ziehen. Das ist genau das, was man für eine Generalprobe will, die bewusst in der Tagungswoche liegt. Die Verknüpfung garantiert, dass sie nicht vor Druck und Teilnehmerzahl stattfinden kann; nach August zurück reißt sie sie nicht.</p>`
    ],
    [
      "Die Projektarten im Vergleich",
      `<p>Vor den Einzelbeschreibungen der Überblick: Wie sich die Hauptarten in den vier Punkten unterscheiden, die das Diagramm tatsächlich verändern.</p>
      <table>
        <thead>
          <tr><th>Projektart</th><th>Übliche Dauer und Zeitachse</th><th>Dichte der Abhängigkeiten</th><th>Wo das Risiko sitzt</th></tr>
        </thead>
        <tbody>
          <tr><td>Bauprojekt</td><td>6–24 Monate, Wochen</td><td>Sehr hoch — nahezu alles Ende-Anfang</td><td>Abnahmen und Genehmigungen: ein Fehlschlag verschiebt alles</td></tr>
          <tr><td>Softwareentwicklung</td><td>1–6 Monate, Wochen je Iteration</td><td>Zwischen Iterationen gering, zum Release hin hoch</td><td>Umfang, nicht Reihenfolge — Balken wachsen, statt zu wandern</td></tr>
          <tr><td>Marketingkampagne</td><td>6–12 Wochen, Wochen</td><td>Mittel, überwiegend innerhalb eines Strangs</td><td>Freigaben zwischen den parallelen Strängen</td></tr>
          <tr><td>Veranstaltung</td><td>3–6 Monate, Wochen</td><td>Mittel, spät zusammenlaufend</td><td>Der feste Termin. Die Reserve ist die Lücke davor</td></tr>
          <tr><td>Produkteinführung</td><td>8–16 Wochen, Wochen</td><td>Hoch und bereichsübergreifend</td><td>Übergaben zwischen Produkt, Marketing und Support</td></tr>
          <tr><td>Dissertation</td><td>9–24 Monate, Monate</td><td>Gering, aber lange Ketten</td><td>Freigaben Dritter mit unkalkulierbarer Dauer</td></tr>
          <tr><td>Wochenplan</td><td>5 Tage, Tage oder Stunden</td><td>Praktisch keine</td><td>Nichts Strukturelles — er ist ein Verständigungsmittel</td></tr>
        </tbody>
      </table>
      <p>Die letzte Spalte lohnt den zweiten Blick. Im Bau ist das Risiko die <em>Reihenfolge</em>, in der Softwareentwicklung der <em>Umfang</em>, bei Veranstaltungen ein <em>Datum</em>. Dasselbe Diagramm, drei verschiedene Fragen, die man ihm stellen muss.</p>
      <!--FIG:deps|Im Bau ist fast jede Verknüpfung Ende-Anfang, weshalb dort so viel des Plans kritisch wird.-->`
    ],
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
        <p>So öffnen Sie die Jahrestagung von oben im Editor und machen sie zu Ihrem eigenen Plan, mit den Schaltflächen so beschriftet, wie sie tatsächlich heißen:</p>
        <ol>
          <li>Öffnen Sie <strong>✨ Vorlagen</strong> und wählen Sie die nächstliegende Gliederung — oder klicken Sie auf <strong>✨ In Gantt einfügen</strong> und fügen Sie die zwölf Zeilen als Liste ein. Dauern in Klammern, <em>nach</em> für eine Verknüpfung und ein abschließendes <em>!</em> für einen Meilenstein werden dabei erkannt: <em>Bewerbung der Tagung (45d) nach Anmeldung geöffnet</em>, dann <em>Tagungstag!</em></li>
          <li>Tragen Sie unter <strong>Kalender</strong> die Feiertage Ihres Bundeslands ein — für Münster also Fronleichnam am 4. Juni — und ergänzen Sie Brückentage und Betriebsruhe. Ohne diesen Schritt fehlen dem Plan zwei seiner vierzehn Reservetage.</li>
          <li>Ein Doppelklick auf eine Zeile öffnet <strong>Nach (Vorgänger)</strong>, <strong>Zuständig</strong> und <strong>Fortschritt</strong>. Über <strong>Typ</strong> machen Sie aus einer Vorgangszeile eine Raute; der Tagungstag hat die Dauer null und lässt sich verschieben, aber nicht breiter ziehen.</li>
          <li>Klicken Sie auf <strong>Neu planen</strong>, damit jede Zeile auf ihren frühestmöglichen Termin rückt. Bei einer Veranstaltung ist das die eigentliche Rechnung: Sie sehen sofort, wie viel Luft zwischen dem Ende der kritischen Kette und dem festen Datum bleibt.</li>
          <li>Setzen Sie das Häkchen bei <strong>Kritischer Pfad</strong> und prüfen Sie, ob die Kette dort verläuft, wo Sie sie erwarten — hier über Ort, Referenten, Anmeldung, Bewerbung und Teilnehmerzahl.</li>
          <li>Stellen Sie <strong>Zoom</strong> auf Woche für den Gesamtplan und für die Tagungswoche auf Tag um.</li>
          <li>Speichern Sie <strong>◳ Basisplan</strong>, sobald der Plan steht, damit Sie im September belegen können, wo die Reserve geblieben ist.</li>
          <li>Über <strong>⬇ Export</strong> erzeugen Sie <strong>📄 PDF-Dokument</strong>, <strong>📊 Excel (.xlsx)</strong> oder <strong>📽 PowerPoint (.pptx)</strong>; über <strong>📤 Teilen…</strong> einen <strong>🔗 Teilbarer Link</strong> für die Dienstleister. Für den Vorstand stellen Sie <strong>Ansicht</strong> vorher auf <strong>Nur Meilensteine</strong>.</li>
        </ol>
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
        <p>Die vorderen Segmente verschwinden, und jeder Dauerbalken schwebt an der Stelle, die seinem Startdatum entspricht. Genau in diesem Moment wird aus dem Balkendiagramm ein Gantt-Diagramm. Vergessen Sie den Rahmen nicht: Bleibt er stehen, sieht man weiterhin die Umrisse der unsichtbaren Segmente, und das Ergebnis wirkt unsauber.</p>
        <!--FIG:bars|Das unsichtbare Abstandssegment ist es, das jeden Dauerbalken auf sein Datum schiebt.-->`
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
      "Ein durchgerechnetes Beispiel: sechs Vorgänge, dann ein Verzug",
      `<p>Die sechs Schritte oben sind Mechanik. Ob die Datei ein echtes Projekt überlebt, entscheidet sich an den Formeln — und daran, was mit ihnen passiert, wenn sich der Plan ändert.</p>
      <p><strong>Hinweis zur Sprachversion.</strong> Alle Formeln hier sind für ein <strong>deutschsprachiges Excel</strong> geschrieben: deutsche Funktionsnamen und <strong>Semikolon</strong> als Argumenttrennzeichen. In einem englischsprachigen Excel heißen dieselben Funktionen <code>WORKDAY</code>, <code>WEEKDAY</code>, <code>AND</code> und <code>TODAY</code>, und getrennt wird mit Komma. Das Trennzeichen hängt zusätzlich an den Regions- und Sprachoptionen von Windows: Steht das Listentrennzeichen dort auf Komma, erwartet auch ein deutsches Excel Kommas. Wenn eine Formel unten mit <em>„Es liegt ein Fehler in der Formel vor“</em> abgelehnt wird, ist fast immer das die Ursache — tauschen Sie die Semikolons gegen Kommas, bevor Sie irgendetwas anderes suchen.</p>
      <div class="worked">
        <p><strong>Das Tabellenblatt.</strong> Die Umstellung des Onlineshops der Kaffeerösterei Hansen, Beginn Montag, 2. März 2026. Überschriften in Zeile 1, Vorgänge in den Zeilen 2 bis 7. Spalten: A Vorgang, B Start, C Ende, D Arbeitstage, E Balkenlänge. In <strong>H2:H6</strong> stehen die Feiertage — Karfreitag 3.4., Ostermontag 6.4., Tag der Arbeit 1.5., Christi Himmelfahrt 14.5. und Pfingstmontag 25.5. Nur Spalte D wird von Hand getippt, alles Übrige ist abgeleitet:</p>
        <ul>
          <li><strong>C2, das Ende</strong> — <code>=ARBEITSTAG(B2;D2-1;$H$2:$H$6)</code>. Das <code>-1</code> ist entscheidend: <code>ARBEITSTAG</code> zählt <em>vorwärts</em>, ein Vorgang, der montags beginnt und fünf Arbeitstage dauert, endet also bei <code>ARBEITSTAG(Mo;4)</code> am Freitag. Ohne das Minus eins läuft jeder Vorgang einen Tag zu lang.</li>
          <li><strong>B3, der Start jedes folgenden Vorgangs</strong> — <code>=ARBEITSTAG(C2;1;$H$2:$H$6)</code>. Diese eine Formel ist der einzige Grund, warum das Blatt überhaupt neu rechnet.</li>
          <li><strong>E2, die Zahl, die das Diagramm zeichnet</strong> — <code>=C2-B2+1</code>. Nicht <code>D2</code>. D sind Arbeitstage, die Diagrammachse dagegen ist ein Kalender einschließlich Wochenenden: Ein Vorgang mit 20 Arbeitstagen muss als 30-Tage-Balken gezeichnet werden. Diese beiden zu verwechseln ist der häufigste Grund, warum ein Excel-Gantt seiner eigenen Tabelle widerspricht.</li>
        </ul>
        <p>C2 und E2 nach unten bis Zeile 7 ziehen, B3 bis Zeile 7:</p>
        <table>
          <thead>
            <tr><th>Zeile</th><th>A — Vorgang</th><th>B — Start</th><th>C — Ende</th><th>D — Arbeitstage</th><th>E — Balkenlänge</th></tr>
          </thead>
          <tbody>
            <tr><td>2</td><td>Analyse</td><td>Mo 2. März</td><td>Fr 13. März</td><td>10</td><td>12</td></tr>
            <tr><td>3</td><td>Konzept</td><td>Mo 16. März</td><td>Fr 27. März</td><td>10</td><td>12</td></tr>
            <tr><td>4</td><td>Umsetzung</td><td>Mo 30. März</td><td>Di 28. April</td><td>20</td><td>30</td></tr>
            <tr><td>5</td><td>Datenmigration</td><td>Mi 29. April</td><td>Do 21. Mai</td><td>15</td><td>23</td></tr>
            <tr><td>6</td><td>Qualitätssicherung</td><td>Fr 22. Mai</td><td>Fr 5. Juni</td><td>10</td><td>15</td></tr>
            <tr><td>7</td><td>Livegang</td><td>Mo 8. Juni</td><td>Mo 8. Juni</td><td>1</td><td>1</td></tr>
          </tbody>
        </table>
        <p>Lesen Sie Spalte D gegen Spalte E: Die Umsetzung hat 20 Arbeitstage und einen 30 Kalendertage langen Balken. Die Differenz sind acht Wochenendtage <em>und zwei Feiertage</em> — Karfreitag und Ostermontag liegen mitten in diesem Vorgang. Genau dafür steht der Bereich <code>$H$2:$H$6</code> in der Formel. Ein Blatt ohne Feiertagsliste rechnet das Osterwochenende durch und verspricht einen Livegang, den niemand halten kann.</p>
        <p><strong>Die Achse.</strong> Excel will für die Achsengrenzen serielle Zahlen, keine Datumswerte. Tippen Sie <code>=B2</code> in eine freie Zelle und formatieren Sie diese als <em>Standard</em>, um eine abzulesen: Der 2. März 2026 ist <strong>46083</strong>, der 8. Juni 2026 ist <strong>46181</strong>. Diese beiden Zahlen kommen in <em>Minimum</em> und <em>Maximum</em>, die Haupteinheit auf 7 für Wochenraster.</p>
        <p><strong>Jetzt ändern Sie etwas.</strong> Das Konzept läuft drei Tage über. Sie ändern eine einzige Zelle — D3 von 10 auf 13 — und die Kette rechnet sich neu: Das Konzept endet Mi 1. April, die Umsetzung läuft Do 2. April bis Mo 4. Mai, die Datenmigration Di 5. Mai bis Mi 27. Mai, die Qualitätssicherung Do 28. Mai bis Mi 10. Juni, der Livegang fällt auf <strong>Do 11. Juni</strong>. Drei Tage hinein, drei Tage heraus. Das ist das Blatt von seiner besten Seite, und es ist ehrlich nützlich.</p>
        <p><strong>Und das geht dabei kaputt:</strong></p>
        <ol>
          <li><strong>Der letzte Balken läuft aus dem Diagramm.</strong> Der Livegang ist auf den 11. Juni gewandert, seriell <strong>46184</strong> — hinter der 46181, die Sie als Achsenmaximum fest eingetragen haben. Der Balken wird abgeschnitten, und nichts warnt Sie. Jede Terminänderung bedeutet, eine serielle Zahl neu abzulesen und eine Achsengrenze neu zu tippen.</li>
          <li><strong>Eine eingefügte Zeile hängt nur halb im Plan.</strong> Ergänzen Sie zwischen Konzept und Umsetzung eine Zeile „Freigabe durch die Geschäftsführung“: Excel erweitert zwar den Datenbereich des Diagramms, aber die neue Zeile kommt ohne Formeln, und die alte Umsetzungszeile zeigt weiterhin auf das Konzept. Übersehen Sie das, liest sich der Plan richtig und terminiert falsch. Hängen Sie die Zeile stattdessen unter Zeile 7 an, fällt sie aus dem Bereich und erscheint überhaupt nicht.</li>
          <li><strong>Ein zweiter Vorgänger hat keinen Platz.</strong> Braucht die Qualitätssicherung sowohl die Umsetzung als auch die Datenmigration, lautet die ehrliche Formel <code>=ARBEITSTAG(MAX(C4;C5);1;$H$2:$H$6)</code>. Sie funktioniert — aber im Diagramm zeigt nichts diese Verknüpfung, und die nächste Person sieht nur ein Datum. Kommt eine fünftägige Freigabefrist als Zeitabstand hinzu, wird daraus <code>=ARBEITSTAG(C3;1+5;$H$2:$H$6)</code>: eine nackte 5 in einer Formel, nirgends beschriftet.</li>
        </ol>
        <p>Spalte B als Formel kauft Ihnen die Neuberechnung entlang <em>einer</em> Kette. Sie kauft Ihnen kein Netz. Nichts in dieser Datei kann Ihnen sagen, welches Vorgangspaar den Endtermin bestimmt — weil nichts darin weiß, dass die beiden zusammenhängen.</p>
      </div>
      <!--FIG:lag|Ein Zeitabstand ist echte Terminzeit. In einer Tabelle ist er eine Zahl, die in einer Formel vergraben liegt.-->`
    ],
    [
      "Was Excel Ihnen gibt und was nicht",
      `<p>Beide Verfahren zeichnen ein durchaus vorzeigbares Bild eines Terminplans. Terminiert wird von keinem der beiden etwas. Dieser Unterschied geht leicht verloren, sobald die Balken richtig aussehen — deshalb hier ausdrücklich:</p>
      <table>
        <thead>
          <tr><th>Fähigkeit</th><th>Gestapelte Balken</th><th>Bedingte Formatierung</th><th>Echte Terminplanung</th></tr>
        </thead>
        <tbody>
          <tr><td>Wochenenden und Feiertage ausgenommen</td><td>Ja, über ARBEITSTAG</td><td>Ja, über ARBEITSTAG</td><td>Ja, eingebaut</td></tr>
          <tr><td>Eine einzelne EA-Kette rechnet neu</td><td>Ja, wenn der Start eine Formel ist</td><td>Ja, wenn der Start eine Formel ist</td><td>Ja</td></tr>
          <tr><td>Sichtbare Verknüpfungspfeile</td><td>Nein</td><td>Nein</td><td>Ja</td></tr>
          <tr><td>Zwei Vorgänger an einem Vorgang</td><td>Nur als verstecktes MAX()</td><td>Nur als verstecktes MAX()</td><td>Ja</td></tr>
          <tr><td>Verknüpfungsarten AA, EE und AE</td><td>Nein</td><td>Nein</td><td>Ja</td></tr>
          <tr><td>Beschrifteter Zeitabstand an einer Verknüpfung</td><td>Nein — eine nackte +5 in der Formel</td><td>Nein — eine nackte +5 in der Formel</td><td>Ja</td></tr>
          <tr><td>Kritischer Pfad</td><td>Nein</td><td>Nein</td><td>Berechnet</td></tr>
          <tr><td>Gesamtpuffer je Vorgang</td><td>Nein</td><td>Nein</td><td>Berechnet</td></tr>
          <tr><td>Auslastung und Überlastungswarnung</td><td>Nein</td><td>Nein</td><td>Ja</td></tr>
          <tr><td>Basisplan und Abweichung</td><td>Spalten von Hand kopieren</td><td>Spalten von Hand kopieren</td><td>Gespeichert und verglichen</td></tr>
          <tr><td>Übersteht das Einfügen einer Zeile</td><td>Formeln müssen nachgetragen werden</td><td>Meistens</td><td>Ja</td></tr>
          <tr><td>Übersteht das Sortieren der Zeilen</td><td>Nein — Bezüge folgen der Position</td><td>Nein</td><td>Ja</td></tr>
          <tr><td>Meilensteine als Rauten</td><td>Eigene Markierungsreihe von Hand</td><td>Eigene Regel von Hand</td><td>Ja</td></tr>
        </tbody>
      </table>
      <p>Das ist eine konkrete Aussage, keine Abwertung: Ein gestapeltes Balkendiagramm ist die <em>Zeichnung</em> eines Terminplans, den Sie anderswo ausgerechnet haben. Für ein Dutzend Vorgänge, die ungefähr hintereinander liegen, reicht das, und die Tabellenkalkulation ist dann das richtige Werkzeug. Nur sind die mittleren Zeilen dieser Tabelle genau das, wonach im Statustermin gefragt wird — und darauf kann die Datei nichts antworten.</p>
      <!--FIG:cpm|Nur der längste Weg durch das Netz bestimmt den Endtermin — und finden kann ihn nur eine Terminrechnung.-->`
    ],
    [
      "Fortschritt und Abhängigkeiten nachrüsten",
      `<p><strong>Fortschritt</strong> lässt sich mit einer weiteren Hilfsspalte darstellen. Legen Sie eine Spalte <em>Fertig in Prozent</em> an und daneben eine Spalte <em>Erledigt</em> mit <code>=Dauer*Prozent</code>. Diese neue Spalte fügen Sie über <em>Daten auswählen ▸ Hinzufügen</em> als dritte gestapelte Reihe ein und färben sie dunkler als die Dauerreihe. Damit die Summe stimmt, muss die Dauerreihe dann allerdings nur noch den Restanteil enthalten — andernfalls werden die Balken zu lang. Der praktikablere Weg ist deshalb, die Dauer in „Erledigt“ und „Rest“ aufzuteilen und beide zu stapeln.</p>
        <p><strong>Abhängigkeiten</strong> kennt Excel nicht. Es gibt keine Pfeile zwischen Balken, und das Verschieben eines Vorgangs verschiebt keinen anderen. Der übliche Behelf ist, das Startdatum eines Nachfolgers als Formel auf das Ende des Vorgängers zu setzen — etwa <code>=C2</code> oder <code>=C2+1</code>. Damit läuft eine Änderung immerhin die Spalte hinunter. Sichtbare Verknüpfungen entstehen dadurch nicht, verzweigte Ketten mit mehreren Vorgängern werden schnell unlesbar, und Puffer oder ein kritischer Pfad lassen sich so nicht ermitteln.</p>`
    ],
    [
      "Der Weg ohne Diagramm: bedingte Formatierung",
      `<p>Wer sich mit Diagrammobjekten nicht anfreunden mag, baut das Gantt-Diagramm direkt in die Zellen. Legen Sie in der Kopfzeile ab Spalte F fortlaufende Datumswerte an — eine Spalte je Tag oder je Woche — und lassen Sie Vorgang, Start und Ende links stehen.</p>
        <p>Für den Shop der Kaffeerösterei Hansen heißt das konkret: <code>=B2</code> in G1, <code>=G1+1</code> in H1, nach rechts gezogen über die Projektdauer — der 2. März bis 8. Juni sind einschließlich 99 Tage, also bis Spalte DC. Formatieren Sie die Zeile als <code>TTT</code> und ziehen Sie die Spalten auf etwa 20 Pixel schmal.</p>
        <p>Markieren Sie anschließend <strong>G2:DC7</strong>, wobei <strong>G2</strong> die aktive Zelle sein muss — das ist wichtig, weil die Formel aus Sicht der aktiven Zelle geschrieben und für alle anderen versetzt angewendet wird. Unter <strong>Start ▸ Bedingte Formatierung ▸ Neue Regel ▸ Formel zur Ermittlung der zu formatierenden Zellen verwenden</strong> legen Sie drei Regeln in dieser Reihenfolge an (deutsche Funktionsnamen, Semikolon als Trennzeichen):</p>
        <ol>
          <li><code>=UND(G$1&gt;=$B2;G$1&lt;=$C2)</code> — Ihre Balkenfarbe. Die gemischten Bezüge sind der ganze Trick: <code>G$1</code> fixiert die Zeile, damit jede Spalte ihr eigenes Datum liest, <code>$B2</code> fixiert die Spalte, damit jede Zeile die Termine ihres eigenen Vorgangs liest.</li>
          <li><code>=WOCHENTAG(G$1;2)&gt;5</code> — hellgrau. Der Rückgabetyp 2 zählt Montag als 1 bis Sonntag als 7, <code>&gt;5</code> trifft also genau Samstag und Sonntag. Der Standardtyp 1 beginnt am Sonntag und würde die falschen zwei Tage einfärben — ein Fehler, der in einem Plan mit deutscher Wochenzählung sofort auffällt.</li>
          <li><code>=G$1=HEUTE()</code> — ein farbiger linker Rahmen, und Sie haben eine Heute-Linie.</li>
        </ol>
        <p>Die Regeln werden von oben nach unten ausgewertet, und die erste Füllung gewinnt. Die Balkenregel muss deshalb über der Wochenendregel stehen, sonst bekommt jeder Balken samstags graue Streifen. Feiertage lassen sich als vierte Regel über einen <code>ZÄHLENWENN</code>-Vergleich mit derselben Liste <code>$H$2:$H$6</code> ergänzen.</p>
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
        <p>Bis etwa zwanzig Vorgänge und bei einem Plan, der sich kaum ändert, ist Excel eine vernünftige Wahl — besonders, wenn die Daten ohnehin schon in einer Tabelle liegen. Darüber hinaus kostet die Handpflege mehr Zeit, als das Werkzeug spart. <a href="/de/app.html">gantts.app</a> rechnet Verschiebungen selbst, zeichnet Verknüpfungen als Pfeile, hebt den kritischen Pfad hervor und exportiert das Ergebnis auf Wunsch wieder als XLSX — ohne Konto und ohne Installation.</p>
        <p>Derselbe Shop-Umzug ohne eine einzige Formel, mit den Schaltflächen so beschriftet, wie sie tatsächlich heißen:</p>
        <ol>
          <li>Öffnen Sie <strong>✨ In Gantt einfügen</strong> und fügen Sie die sechs Zeilen ein — <em>Datenmigration (15d) nach Umsetzung</em>, am Ende <em>Livegang!</em> Es gibt keine Hilfsspalten, keine Balkenlänge und keine serielle Zahl.</li>
          <li>Tragen Sie unter <strong>Kalender</strong> Karfreitag, Ostermontag, den 1. Mai, Christi Himmelfahrt und Pfingstmontag ein. Das ersetzt den Bereich <code>$H$2:$H$6</code> — nur muss ihn hier keine Formel kennen.</li>
          <li>Ein Doppelklick auf eine Zeile öffnet <strong>Nach (Vorgänger)</strong>. Hier tragen Sie <em>zwei</em> Vorgänger an der Qualitätssicherung ein, statt ein <code>MAX()</code> in einer Formel zu verstecken.</li>
          <li>Klicken Sie auf <strong>Neu planen</strong>. Ändern Sie danach die Dauer des Konzepts von 10 auf 13 Tage: Der Livegang wandert auf den 11. Juni, und der Balken läuft nicht aus dem Diagramm, weil es keine fest eingetippte Achsengrenze gibt.</li>
          <li>Setzen Sie das Häkchen bei <strong>Kritischer Pfad</strong>. Das ist die Zeile aus der Vergleichstabelle, die Excel gar nicht anbieten kann.</li>
          <li>Speichern Sie <strong>◳ Basisplan</strong>, bevor die Umsetzung beginnt, statt die Spalten B und C in ein zweites Tabellenblatt zu kopieren.</li>
          <li>Zurück in die Tabellenwelt kommen Sie über <strong>⬇ Export ▸ 📊 Excel (.xlsx)</strong> — Sie erhalten die Datei, ohne den gestapelten Balken je von Hand gebaut zu haben. Ebenfalls dort: <strong>📄 PDF-Dokument</strong>, <strong>📑 CSV (Tabelle)</strong> und <strong>📽 PowerPoint (.pptx)</strong>.</li>
        </ol>`
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
        <p>Das Ergebnis ist ein echtes Diagrammobjekt: Sie können es in Docs oder Präsentationen kopieren, als Bild herunterladen und jederzeit neu formatieren. Der Preis sind die Hilfsspalten, die bei jeder Terminänderung mitgepflegt werden wollen.</p>
        <!--FIG:bars|Das unsichtbare Vorlaufsegment ist es, das jeden Dauerbalken auf sein Startdatum schiebt.-->`
    ],
    [
      "Ein durchgerechnetes Beispiel: sechs Vorgänge, dann ein Verzug",
      `<p>Hilfsspalten sind leicht zu beschreiben und leicht auf subtile Weise falsch zu bauen. Deshalb hier ein kleiner Plan mit echten Formeln — und danach geändert, denn wie sich ein Tabellenblatt verhält, wenn ein Termin wandert, ist die einzige Prüfung, die zählt.</p>
      <p><strong>Hinweis zur Spracheinstellung.</strong> Die Formeln unten sind für eine <strong>deutschsprachige Tabelle</strong> geschrieben: deutsche Funktionsnamen und <strong>Semikolon</strong> als Argumenttrennzeichen. Maßgeblich ist in Google Sheets nicht die Sprache Ihres Kontos, sondern das <em>Gebietsschema der Tabelle</em> unter <strong>Datei ▸ Einstellungen ▸ Gebietsschema</strong>. Steht dort „Vereinigte Staaten“, heißen dieselben Funktionen <code>WORKDAY</code>, <code>WEEKDAY</code> und <code>AND</code>, und getrennt wird mit Komma — eine Tabelle, die eine Kollegin aus einer amerikanischen Vorlage kopiert hat, verhält sich deshalb anders als Ihre eigene, obwohl beide auf Deutsch angezeigt werden.</p>
      <div class="worked">
        <p><strong>Das Tabellenblatt.</strong> Die Einführung eines Warenwirtschaftssystems bei der Spedition Küppers in Duisburg, Beginn Montag, 2. März 2026. Überschriften in Zeile 1, Vorgänge in den Zeilen 2 bis 7. A Vorgang, B Start, C Ende, D Arbeitstage, E Start am Tag, F Balkenlänge. In <strong>H2:H6</strong> die Feiertage in Nordrhein-Westfalen: Karfreitag 3.4., Ostermontag 6.4., 1. Mai, Christi Himmelfahrt 14.5. und Pfingstmontag 25.5. Nur Spalte D wird von Hand getippt:</p>
        <ul>
          <li><strong>C2</strong> — <code>=ARBEITSTAG(B2;D2-1;$H$2:$H$6)</code>. Sheets kennt dieselbe Funktion wie Excel und überspringt Wochenenden von selbst. Das <code>-1</code> ist unverzichtbar: <code>ARBEITSTAG</code> zählt vom Start vorwärts, fünf Arbeitstage ab Montag sind also <code>ARBEITSTAG(Mo;4)</code> = Freitag.</li>
          <li><strong>B3</strong> — <code>=ARBEITSTAG(C2;1;$H$2:$H$6)</code>. Der nächste Arbeitstag nach dem Ende des Vorgängers. Das ist das Einzige in der ganzen Datei, das überhaupt etwas neu terminiert.</li>
          <li><strong>E2</strong> — <code>=B2-$B$2</code>, als <em>Zahl</em> formatiert. Null für den ersten Vorgang.</li>
          <li><strong>F2</strong> — <code>=C2-B2+1</code>, ebenfalls als <em>Zahl</em>. Achtung: <em>nicht</em> <code>D2</code>. D sind Arbeitstage, die Diagrammachse dagegen zählt Kalendertage — ein Vorgang mit 20 Arbeitstagen muss 30 Einheiten lang gezeichnet werden. Wer versehentlich D plottet, bekommt Balken, die überall zu früh enden, während die Tabelle daneben völlig richtig aussieht.</li>
        </ul>
        <p>Nach unten gefüllt ergibt das:</p>
        <table>
          <thead>
            <tr><th>Zeile</th><th>Vorgang</th><th>B — Start</th><th>C — Ende</th><th>D — Arbeitstage</th><th>E — Start am Tag</th><th>F — Balkenlänge</th></tr>
          </thead>
          <tbody>
            <tr><td>2</td><td>Analyse der Prozesse</td><td>Mo 2. März</td><td>Fr 13. März</td><td>10</td><td>0</td><td>12</td></tr>
            <tr><td>3</td><td>Konzept und Auswahl</td><td>Mo 16. März</td><td>Fr 27. März</td><td>10</td><td>14</td><td>12</td></tr>
            <tr><td>4</td><td>Einrichtung und Anpassung</td><td>Mo 30. März</td><td>Di 28. April</td><td>20</td><td>28</td><td>30</td></tr>
            <tr><td>5</td><td>Datenübernahme</td><td>Mi 29. April</td><td>Do 21. Mai</td><td>15</td><td>58</td><td>23</td></tr>
            <tr><td>6</td><td>Test und Schulung</td><td>Fr 22. Mai</td><td>Fr 5. Juni</td><td>10</td><td>81</td><td>15</td></tr>
            <tr><td>7</td><td>Produktivstart</td><td>Mo 8. Juni</td><td>Mo 8. Juni</td><td>1</td><td>98</td><td>1</td></tr>
          </tbody>
        </table>
        <p>Die Plausibilitätsprüfung steckt in der letzten Zeile: 98 + 1 = 99 Tage, genau die Gesamtspanne des Projekts vom 2. März an. Ergibt E + F unten nicht die erwartete Spanne, ist weiter oben eine Konvention verrutscht.</p>
        <p>Vergleichen Sie außerdem D und F bei der Einrichtung: 20 Arbeitstage, 30 Kalendertage. Die Differenz sind acht Wochenendtage <em>und</em> Karfreitag sowie Ostermontag, die genau in diesen Vorgang fallen. Ohne den Bereich <code>$H$2:$H$6</code> in der Formel rechnet das Blatt über Ostern hinweg und schenkt Ihnen zwei Tage, die es nicht gibt.</p>
        <p><strong>Jetzt ändern Sie etwas.</strong> Konzept und Auswahl laufen drei Tage über: D3 von 10 auf 13. Die Kette rechnet sich neu — das Konzept endet Mi 1. April, die Einrichtung läuft Do 2. April bis Mo 4. Mai, die Datenübernahme Di 5. Mai bis Mi 27. Mai, Test und Schulung Do 28. Mai bis Mi 10. Juni, der Produktivstart fällt auf <strong>Do 11. Juni</strong>. Beide Hilfsspalten folgen von selbst. Das ist der Grund, Formeln statt getippter Daten zu verwenden.</p>
        <p><strong>Und das folgt nicht:</strong></p>
        <ol>
          <li><strong>Eingefügte Zeilen kommen ohne Formeln.</strong> Ergänzen Sie zwischen Konzept und Einrichtung eine Zeile „Freigabe durch die Geschäftsführung“: Die neue Zeile 4 ist leer, und die alte Einrichtungszeile — jetzt Zeile 5 — zeigt weiterhin auf das Ende des Konzepts. Sheets erweitert den Diagrammbereich trotzdem, die leere Zeile wird also als Balken der Länge null am Tag null gezeichnet — ein Stummel ganz links, der eher wie ein Anzeigefehler aussieht als wie ein echter Fehler.</li>
          <li><strong>Sortieren zerstört die Kette.</strong> Sortieren Sie nach Startdatum, folgt jeder relative Bezug seinem neuen Nachbarn und leitet Termine still aus den falschen Zeilen ab. Keine Warnung — und kein Rückgängig mehr, sobald gespeichert und geschlossen wurde. Bei einer Datei, an der mehrere Personen gleichzeitig arbeiten, ist das kein Randfall, sondern eine Frage der Zeit.</li>
          <li><strong>Ein zweiter Vorgänger hat keinen Platz.</strong> Braucht der Test sowohl die Einrichtung als auch die Datenübernahme, lautet die richtige Formel <code>=ARBEITSTAG(MAX(C4;C5);1;$H$2:$H$6)</code>. Sie funktioniert. Aber im Diagramm zeigt nichts diese Verknüpfung, und aus einer fünftägigen Freigabefrist wird <code>=ARBEITSTAG(C3;1+5;$H$2:$H$6)</code> — eine nackte 5 in einer Formel, nirgends beschriftet.</li>
        </ol>
        <p><strong>Die Abkürzung, die es nur in Sheets gibt.</strong> Wenn Sie einen Balken je Zeile ohne jedes Diagrammobjekt wollen, tragen Sie das in G2 ein und füllen nach unten:</p>
        <p><code>=SPARKLINE({E2\\F2};{"charttype"\\"bar";"color1"\\"white";"color2"\\"#6c4cf1";"max"\\99})</code></p>
        <p>Auch hier gilt das Gebietsschema: In einer deutschsprachigen Tabelle trennt der <strong>Backslash</strong> die Spalten eines Arrays und das <strong>Semikolon</strong> die Zeilen. In einer US-Tabelle lautet dieselbe Formel <code>=SPARKLINE({E2,F2},{"charttype","bar";…})</code> mit Kommas. Verwendet man die falsche Variante, meldet Sheets nur einen Formelfehler und sagt nicht, dass das Trennzeichen gemeint ist.</p>
        <p>Die Formel zeichnet denselben Trick mit unsichtbarem Vorlauf innerhalb einer einzigen Zelle, und weil <code>max</code> fest auf die Projektspanne von 99 gesetzt ist, teilen sich alle Zeilen eine Achse. Sie übersteht eingefügte Zeilen und Umsortieren besser als das Diagramm — bleibt aber ein Bild und kein Terminplan.</p>
      </div>`
    ],
    [
      "Welcher Weg was leistet",
      `<p>Alle drei Wege zeichnen einen Terminplan. Keiner rechnet einen aus. Die Unterschiede zwischen ihnen sind real, aber klein neben dieser gemeinsamen Grenze — deshalb hier beides auf einmal:</p>
      <table>
        <thead>
          <tr><th>Fähigkeit</th><th>Zeitachsen-Ansicht</th><th>Gestapelte Balken</th><th>SPARKLINE</th><th>Echte Terminplanung</th></tr>
        </thead>
        <tbody>
          <tr><td>Einrichtungsaufwand</td><td>Zwei Minuten</td><td>Zwei Hilfsspalten</td><td>Eine Formel</td><td>Tippen und ziehen</td></tr>
          <tr><td>Wochenenden und Feiertage übersprungen</td><td>Nein</td><td>Über ARBEITSTAG</td><td>Über ARBEITSTAG</td><td>Eingebaut</td></tr>
          <tr><td>Eine einzelne EA-Kette rechnet neu</td><td>Ja, wenn der Start eine Formel ist</td><td>Ja, wenn der Start eine Formel ist</td><td>Ja, wenn der Start eine Formel ist</td><td>Ja</td></tr>
          <tr><td>Verknüpfungspfeile</td><td>Nein</td><td>Nein</td><td>Nein</td><td>Ja</td></tr>
          <tr><td>Zwei Vorgänger an einem Vorgang</td><td>Verstecktes MAX()</td><td>Verstecktes MAX()</td><td>Verstecktes MAX()</td><td>Ja</td></tr>
          <tr><td>Verknüpfungsarten AA, EE und AE</td><td>Nein</td><td>Nein</td><td>Nein</td><td>Ja</td></tr>
          <tr><td>Kritischer Pfad</td><td>Nein</td><td>Nein</td><td>Nein</td><td>Berechnet</td></tr>
          <tr><td>Gesamtpuffer je Vorgang</td><td>Nein</td><td>Nein</td><td>Nein</td><td>Berechnet</td></tr>
          <tr><td>Auslastung und Überlastungswarnung</td><td>Nein</td><td>Nein</td><td>Nein</td><td>Ja</td></tr>
          <tr><td>Basisplan und Abweichung</td><td>Spalten von Hand kopieren</td><td>Spalten von Hand kopieren</td><td>Spalten von Hand kopieren</td><td>Gespeichert und verglichen</td></tr>
          <tr><td>Übersteht eine eingefügte Zeile</td><td>Ja</td><td>Formeln nachtragen</td><td>Formel nachziehen</td><td>Ja</td></tr>
          <tr><td>Übersteht Umsortieren</td><td>Ja</td><td>Nein</td><td>Nein</td><td>Ja</td></tr>
          <tr><td>Als Bild exportierbar</td><td>Nein — es ist eine Ansicht</td><td>Ja</td><td>Nein — es ist eine Zelle</td><td>PNG, PDF, PPTX</td></tr>
        </tbody>
      </table>
      <p>Die „Nein“-Zeilen in der Mitte sind kein Vorwurf an Sheets; sie liegen außerhalb dessen, was eine Tabellenkalkulation ist. Sheets hält Zahlen fest, die Sie anderswo entschieden haben. Sollen sie <em>abgeleitet</em> werden — welcher Vorgang den Termin bestimmt, wie viel Luft die übrigen haben —, hilft keine noch so clevere Formel.</p>
      <!--FIG:cpm|Nur der längste Weg durch das Netz bestimmt den Endtermin. Keine Tabelle findet ihn für Sie.-->`
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
        <p>SmartArt-Grafiken aus den Kategorien <em>Prozess</em> und <em>Zeitachse</em> liefern schnell eine roadmap-artige Darstellung, sind aber keine maßstabsgetreuen Terminpläne — die Abstände folgen der Grafik, nicht dem Kalender. Für eine Phasenübersicht ist das in Ordnung, für einen Termin, über den diskutiert wird, nicht.</p>
        <!--FIG:bars|Das unsichtbare Abstandssegment ist es, das jeden Dauerbalken an seine Position schiebt.-->`
    ],
    [
      "Ein durchgerechnetes Beispiel: sechs Vorgänge, dann ein Verzug",
      `<p>Beide Wege oben verlangen von Ihnen Zahlen, die PowerPoint sich nicht selbst ausrechnen kann. Hier steht, welche genau — an einem kleinen Plan — und was mit ihnen passiert, wenn ein Termin wandert.</p>
      <div class="worked">
        <p><strong>Der Plan.</strong> Der Relaunch des Kundenportals der Stadtwerke Aurich, Montag, 2. März bis Montag, 8. Juni 2026, vorzustellen im Aufsichtsrat. Sechs Vorgänge, jeder beginnt am nächsten Arbeitstag nach dem vorigen. Die beiden Zahlen, die PowerPoint braucht, sind der <strong>Startversatz</strong> (Kalendertage seit dem 2. März, der erste Vorgang also 0) und die <strong>Balkenlänge in Kalendertagen einschließlich Wochenenden und Feiertagen</strong> — denn die Achse ist ein Kalender, auch wenn Ihre Schätzungen in Arbeitstagen stehen.</p>
        <table>
          <thead>
            <tr><th>Vorgang</th><th>Zeitraum</th><th>Arbeitstage</th><th>Startversatz</th><th>Balkenlänge</th><th>Form links (cm)</th><th>Form breit (cm)</th></tr>
          </thead>
          <tbody>
            <tr><td>Analyse</td><td>2.–13. März</td><td>10</td><td>0</td><td>12</td><td>5,00</td><td>3,00</td></tr>
            <tr><td>Konzept</td><td>16.–27. März</td><td>10</td><td>14</td><td>12</td><td>8,50</td><td>3,00</td></tr>
            <tr><td>Einrichtung</td><td>30. März – 28. April</td><td>20</td><td>28</td><td>30</td><td>12,00</td><td>7,50</td></tr>
            <tr><td>Datenübernahme</td><td>29. April – 21. Mai</td><td>15</td><td>58</td><td>23</td><td>19,50</td><td>5,75</td></tr>
            <tr><td>Test und Schulung</td><td>22. Mai – 5. Juni</td><td>10</td><td>81</td><td>15</td><td>25,25</td><td>3,75</td></tr>
            <tr><td>Produktivstart</td><td>8. Juni</td><td>1</td><td>98</td><td>1</td><td>29,50</td><td>0,25</td></tr>
          </tbody>
        </table>
        <p><strong>Für Weg 1</strong> tippen Sie ausschließlich die Spalten 4 und 5. Rechtsklick auf das Diagramm, <strong>Daten bearbeiten</strong>, die Vorgangsnamen in Spalte A, die Startversätze in B, die Balkenlängen in C. Die Reihe B auf <em>Keine Füllung</em>, fertig. Beachten Sie, dass die Spalte mit den Arbeitstagen nirgends auftaucht: Ein Vorgang mit 10 Arbeitstagen ist ein Balken über 12 Tage, und wer die 10 einträgt, zeigt ein Bild, das zwei Tage vor der Tabelle endet, aus der er es abgeschrieben hat. Bei der Einrichtung sind es sogar 20 Arbeitstage gegen 30 Kalendertage, weil Karfreitag und Ostermontag mitten hineinfallen — PowerPoint weiß von deutschen Feiertagen nichts, Sie müssen sie in die Balkenlänge einrechnen.</p>
        <p><strong>Für Weg 2</strong> brauchen Sie die letzten beiden Spalten, und die Rechnung dahinter lohnt sich einmal richtig. Eine 16:9-Folie ist 33,87 cm breit. Der Folienmaster der Stadtwerke lässt für den Inhalt den Bereich von 5,0 cm bis 29,8 cm frei — also 24,8 cm für 99 Projekttage. Das ergibt einen glatten Maßstab von <strong>0,25 cm pro Tag</strong>, und einen glatten Maßstab wählt man bewusst. Danach gilt für jeden Balken:</p>
        <ul>
          <li>Waagerechte Position = 5 + 0,25 × Startversatz</li>
          <li>Breite = 0,25 × Balkenlänge</li>
        </ul>
        <p>Diese Werte tippen Sie unter <strong>Form formatieren ▸ Größe und Eigenschaften</strong> ein, statt zu ziehen. Sechs Balken, zwölf Zahlen — und das Diagramm stimmt auf einen Viertelmillimeter je Tag statt auf die Stelle, an der die Maus zufällig losgelassen wurde. Auf Deutsch tippt man dabei das <strong>Komma</strong> als Dezimaltrennzeichen; ein aus einer englischen Anleitung übernommenes <code>19.50</code> versteht PowerPoint in einer deutschen Installation als 1950.</p>
        <p><strong>Jetzt läuft das Konzept drei Tage über.</strong> In einer echten Terminplanung ist das eine Änderung. Auf einer Folie kostet es Folgendes: Jeder nachgelagerte Termin wandert, also ändern sich sämtliche Versätze und Längen. Das Konzept wird 14 / 17, die Einrichtung 31 / 33, die Datenübernahme 64 / 23, Test und Schulung 87 / 14, der Produktivstart 101 / 1. Das Vorhaben umfasst jetzt 102 statt 99 Tage — und damit passen 0,25 cm pro Tag nicht mehr in die 24,8 cm des Folienmasters. Der <em>Maßstab selbst</em> muss auf 0,243 cm pro Tag geändert werden, eine Zahl, die sich nicht mehr rund tippen lässt.</p>
        <ul>
          <li><strong>Weg 1:</strong> 10 der 12 Zahlen im Datenblatt neu tippen. Das Diagramm zeichnet sich selbst neu, was ein echter Vorteil ist — nur hat Ihnen niemand gesagt, dass die Zahlen veraltet waren, und niemand prüft die neuen.</li>
          <li><strong>Weg 2:</strong> erst den Maßstab neu rechnen, dann alle zwölf Positionen und Breiten neu tippen. Übersehen Sie eine, haben Sie eine Folie, die selbstbewusst und auf den Millimeter genau falsch ist — schlimmer als eine erkennbar grobe Skizze, weil im Raum niemand sie hinterfragen wird.</li>
        </ul>
        <p>Das ist der ehrliche Preis eines PowerPoint-Gantt-Diagramms: nicht die zwanzig Minuten für den Aufbau, sondern die zwanzig Minuten, die es jedes Mal wieder kostet, wenn sich ein Termin bewegt.</p>
      </div>`
    ],
    [
      "Was die Wege jeweils leisten",
      `<p>Eine Folie ist ein Mittel der Verständigung, und es lohnt sich, klar zu benennen, wie wenig von einem Terminplan diese Reise übersteht:</p>
      <table>
        <thead>
          <tr><th>Fähigkeit</th><th>Gestapelte Balken</th><th>Formen</th><th>SmartArt</th><th>Aus einer Terminplanung exportiert</th></tr>
        </thead>
        <tbody>
          <tr><td>Maßstabsgetreu zur Datumsachse</td><td>Ja</td><td>Nur wenn Sie die Zahlen tippen</td><td>Nein — nicht datumsskaliert</td><td>Ja</td></tr>
          <tr><td>Zeichnet sich bei Datenänderung neu</td><td>Ja</td><td>Nein</td><td>Nein</td><td>Neu exportieren</td></tr>
          <tr><td>Termine als Datum eingegeben</td><td>Nein — Tagesversätze</td><td>Nein — Zentimeter</td><td>Nein</td><td>Ja</td></tr>
          <tr><td>Wochenenden und Feiertage</td><td>Rechnen Sie selbst</td><td>Rechnen Sie selbst</td><td>Nein</td><td>Eingebaut</td></tr>
          <tr><td>Verknüpfungspfeile</td><td>Nein</td><td>Von Hand gezeichnet, ohne Bedeutung</td><td>Nein</td><td>Ja, echte Verknüpfungen</td></tr>
          <tr><td>Rechnet neu, wenn ein Vorgang rutscht</td><td>Nein</td><td>Nein</td><td>Nein</td><td>Ja</td></tr>
          <tr><td>Kritischer Pfad</td><td>Nein</td><td>Nein</td><td>Nein</td><td>Berechnet</td></tr>
          <tr><td>Gesamtpuffer je Vorgang</td><td>Nein</td><td>Nein</td><td>Nein</td><td>Berechnet</td></tr>
          <tr><td>Basisplan gegen Ist</td><td>Zusätzliche Reihe, von Hand</td><td>Zweite Reihe Formen</td><td>Nein</td><td>Gespeichert und verglichen</td></tr>
          <tr><td>Meilensteine als Rauten</td><td>Zeile mit Länge nahe null</td><td>Ja, gezeichnet</td><td>Ja, dekorativ</td><td>Ja</td></tr>
          <tr><td>Fortschrittsanteil</td><td>Dritte Datenreihe</td><td>Überlagerte Form</td><td>Nein</td><td>Ja</td></tr>
          <tr><td>Kontrolle über das Markenlayout</td><td>Mittel</td><td>Vollständig</td><td>Vollständig</td><td>Nach dem Export umfärben</td></tr>
        </tbody>
      </table>
      <p>Lesen Sie die Spalte „Formen“ von oben nach unten, und das Muster ist eindeutig: Was Sie an Gestaltungskontrolle gewinnen, bezahlen Sie in jeder einzelnen Zeile, in der der Plan etwas <em>wissen</em> müsste. Eine gezeichnete Verbindungslinie zwischen zwei Rechtecken sieht exakt aus wie eine Abhängigkeit und schränkt exakt nichts ein. Das ist unproblematisch, solange allen klar ist, dass die Folie eine Fotografie des Plans ist und nicht der Plan.</p>
      <!--FIG:deps|Echte Verknüpfungen schränken Termine ein. Eine zwischen zwei Rechtecke gezogene Linie tut das nicht.-->`
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
      `<p>Am schnellsten geht es, den Plan dort zu pflegen, wo er lebt, und ihn für die Folie zu exportieren. Derselbe Relaunch des Kundenportals, ohne einen einzigen Zentimeterwert:</p>
        <ol>
          <li>Öffnen Sie <a href="/de/app.html">gantts.app</a> — ohne Konto, ohne Installation — und klicken Sie auf <strong>✨ In Gantt einfügen</strong>, um die sechs Zeilen als Liste einzufügen: <em>Datenübernahme (15d) nach Einrichtung</em>, am Ende <em>Produktivstart!</em></li>
          <li>Tragen Sie unter <strong>Kalender</strong> Karfreitag, Ostermontag, den 1. Mai, Christi Himmelfahrt und Pfingstmontag ein. Damit entfällt die gesamte Umrechnung von Arbeitstagen in Balkenlängen, die Weg 1 und Weg 2 von Ihnen verlangen.</li>
          <li>Ziehen Sie die Balken auf ihre Termine oder setzen Sie sie per Doppelklick über <strong>Start</strong>, <strong>Ende</strong> und <strong>Nach (Vorgänger)</strong>. Für die Gliederung nach Phasen dient <strong>▣ Gruppe</strong>.</li>
          <li>Klicken Sie auf <strong>Neu planen</strong> und setzen Sie das Häkchen bei <strong>Kritischer Pfad</strong>. Beides gibt es in PowerPoint auf keinem der beiden Wege.</li>
          <li>Vor der Aufsichtsratssitzung stellen Sie <strong>Ansicht</strong> auf <strong>Nur Meilensteine</strong> oder <strong>Vorschau</strong>, damit die Folie sechs bis zehn Zeilen zeigt statt vierzig.</li>
          <li>Dann <strong>⬇ Export ▸ 📽 PowerPoint (.pptx)</strong>. Sie erhalten eine Folie mit dem fertigen Diagramm; im selben Menü liegen <strong>📄 PDF-Dokument</strong>, <strong>🖼 PNG-Bild</strong> und <strong>📊 Excel (.xlsx)</strong>.</li>
          <li>Verschiebt sich das Konzept um drei Tage, ändern Sie eine Dauer und exportieren erneut. Kein neuer Maßstab, keine zwölf Zahlen, kein Nachziehen von Rechtecken.</li>
        </ol>
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
      "Die Kriterien, die tatsächlich entscheiden",
      `<p>Funktionslisten taugen wenig als Orientierung, weil jeder Anbieter jede Funktion für sich beansprucht. Was die Werkzeuge trennt, ist ihr <em>Verhalten unter Last</em>: was passiert, wenn ein Termin wandert, wenn der Plan groß wird, wenn ein Außenstehender ihn lesen soll und wenn Sie aufhören zu zahlen. Jedes Kriterium unten lässt sich in Minuten prüfen, und jedes hat ein konkretes Versagensbild.</p>
      <table>
        <thead>
          <tr><th>Kriterium</th><th>Warum es den Ausgang bestimmt</th><th>Prüfung in fünf Minuten</th><th>So sieht das Versagen aus</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Rechnet es neu?</strong></td>
            <td>Trennt eine Terminrechnung von einem Zeichenprogramm. Echte Abhängigkeiten pflanzen sich fort, dekorative lassen Sie Balken von Hand nachziehen.</td>
            <td>Drei Vorgänge verknüpfen, den ersten um vier Tage nach hinten schieben.</td>
            <td>Vorgang zwei und drei bewegen sich nicht. Die Pflege bleibt auf Dauer bei Ihnen.</td>
          </tr>
          <tr>
            <td><strong>Kritischer Pfad und Puffer</strong></td>
            <td>Sagt, welche Vorgänge den Endtermin bestimmen. Häufig das Erste, was hinter eine Bezahlschranke wandert, weil Leute dafür zahlen.</td>
            <td>Nach einer Pufferspalte suchen, nicht nur nach farbigen Balken. Eine Dauer ändern und sehen, ob die Hervorhebung umzieht.</td>
            <td>Ein „kritischer Pfad“, der eine selbst vergebene Farbe ist — oder ein Verkaufsangebot genau in dem Moment, in dem Sie ihn brauchen.</td>
          </tr>
          <tr>
            <td><strong>Ein Export, den ein Fremder öffnen kann</strong></td>
            <td>Wer den Plan freigibt, legt dafür kein Konto an. PDF, Excel und PowerPoint reisen überall hin, ein Freigabelink nicht.</td>
            <td>Exportieren und die Datei auf einem Gerät ohne Anmeldung öffnen.</td>
            <td>Der Export ist kostenpflichtig, mit Wasserzeichen versehen oder nur ein Link, der zur Anmeldung auffordert.</td>
          </tr>
          <tr>
            <td><strong>Größe</strong></td>
            <td>Kostenlose Tarife sind für Vorführungen bemessen. Echte Pläne haben 150 bis 300 Zeilen; sowohl die Obergrenze als auch die Darstellungsgeschwindigkeit zählen.</td>
            <td>200 Zeilen einfügen und eine 26 Wochen breite Zeitachse scrollen.</td>
            <td>Eine harte Grenze bei etwa 60 Vorgängen, oder ruckelndes Scrollen, sobald das Diagramm breit wird.</td>
          </tr>
          <tr>
            <td><strong>Ausstiegskosten</strong></td>
            <td>Danach fragt niemand, bis es darauf ankommt. Der Plan gehört Ihnen nur, wenn Sie ihn in einem Format herausbekommen, das etwas anderes liest.</td>
            <td>Nach CSV exportieren und anderswo wieder importieren. Prüfen, ob Abhängigkeiten und Gliederung überleben, nicht nur die Namen.</td>
            <td>Der Export ist ein schreibgeschütztes PDF, Abhängigkeiten fallen weg, oder die Daten hängen hinter einem abgelaufenen Abonnement.</td>
          </tr>
          <tr>
            <td><strong>Wo die Daten liegen</strong></td>
            <td>Entscheidet, ob Sie das Werkzeug überhaupt einsetzen dürfen. Bei Projektdaten mit Personenbezug verlangt die DSGVO einen Auftragsverarbeitungsvertrag — und bei Servern außerhalb der EU zusätzlich eine Rechtsgrundlage für die Übermittlung.</td>
            <td>Prüfen, ob es mit ausgeschaltetem Netz funktioniert, und was die Datenschutzerklärung als gespeichert benennt.</td>
            <td>Im Freigabetermin zu erfahren, dass der Terminplan auf einem Server liegt, für den es keinen AV-Vertrag gibt.</td>
          </tr>
        </tbody>
      </table>
      <p>Nur zwei davon sind Funktionen im Sinne eines Verkaufsprospekts. Den Rest sehen Sie nur, indem Sie das Ding benutzen — weshalb eine Viertelstunde mit einem realistischen Plan mehr wert ist als ein Nachmittag mit Vergleichsartikeln, diesen eingeschlossen.</p>
      <!--FIG:tools|Tabellenkalkulationen, Gestaltungswerkzeuge und Terminrechnungen sehen auf dem Bildschirm gleich aus. Sie gehen in dem Moment auseinander, in dem ein Datum wandert.-->`
    ],
    [
      "Eine durchgeführte Bewertung: ein echter Plan, vier Prüfungen",
      `<p>Kriterien nickt man leicht ab, deshalb hier eine konkrete Aufgabe, durch sie hindurchgeführt. Es geht nicht darum, welches Werkzeug gewinnt — sondern darum, dass vier Prüfungen in zwanzig Minuten den größten Teil einer Auswahlliste ausscheiden, bevor Sie irgendetwas investiert haben.</p>
      <div class="worked">
        <p><strong>Die Aufgabe.</strong> Der Umzug der Verwaltung der Möbelwerke Sauerland GmbH von Arnsberg nach Dortmund: 186 Vorgänge in sechs Arbeitssträngen — Mietvertrag, Ausbau, IT, Möblierung, Kommunikation, Umzugswochenende —, 22 Wochen bis zu einem Übergabetermin, den der Mietvertrag festlegt, und ein monatlicher Lenkungskreis aus sechs Personen, die für einen Terminplan kein Konto anlegen werden. Werkzeugbudget: 0 €.</p>

        <p><strong>Prüfung 1 — rechnet es neu?</strong> Bauen Sie den kleinsten Ausschnitt mit echter Logik: Aufmaß → Planung → Zustimmung des Vermieters → Ausbau → IT-Einbau → Übergabe. Dann schieben Sie die Zustimmung um <strong>10 Tage</strong> nach hinten.</p>
        <ul>
          <li>Eine Terminrechnung schiebt Ausbau, IT-Einbau und Übergabe um je 10 Tage und macht sichtbar, dass die Übergabe den Mietvertragstermin reißt.</li>
          <li>Ein Zeichenprogramm bewegt nur den Balken, den Sie gezogen haben. Die anderen fünf beschreiben einen Terminplan, den es nicht geben kann.</li>
        </ul>
        <p>Bei 186 Vorgängen ist das die ganze Entscheidung. Die Zustimmung <em>wird</em> sich verspäten, und ohne Neuberechnung ist jede Verspätung eine Stunde Balkenziehen von jemandem, der einen davon übersieht. Diese Prüfung allein streicht die meisten gestaltungsorientierten und vorlagenbasierten Angebote — einschließlich eines Gantt-Diagramms in der Tabellenkalkulation.</p>
        <!--FIG:bars|Ein Termin wandert, und alles Nachgelagerte folgt. In einem Zeichenprogramm bewegt sich nur der gezogene Balken — und der Plan hört still auf, wahr zu sein.-->

        <p><strong>Prüfung 2 — kann der Lenkungskreis es öffnen?</strong> Exportieren, dann die Datei auf einem Gerät ohne Anmeldung öffnen. PDF oder PNG heißt: alle lesen es, niemand ändert es. Excel ist das, was die Person aus dem Rechnungswesen neu aufbereiten wird. Ein Freigabelink fällt durch, sobald er den Betrachter zur Anmeldung auffordert — sechs Konten, um ein Diagramm zu lesen, sind sechs Gründe, warum die Fortschreibung ungelesen bleibt. Prüfen Sie im kostenlosen Tarif außerdem auf Wasserzeichen und Seitenbegrenzungen: Ein PDF, das gratis, aber gestempelt ist, taugt nicht für eine Sitzungsvorlage, und das merken Sie am Abend davor.</p>

        <p><strong>Prüfung 3 — übersteht es 186 Zeilen?</strong> Testen Sie nicht mit acht Vorgängen. Fügen Sie ein paar hundert ein und scrollen Sie. Zuerst die Obergrenzen: Ein kostenloser Tarif mit rund 60 Vorgängen fällt bei 186 schlicht durch — und die Grenze greift, wenn der Plan halb gebaut und die Entscheidung längst gefallen ist. Dann die Darstellung: 22 Wochen in Tagesauflösung ergeben ein breites Diagramm; manche Werkzeuge ruckeln, manche klappen bei jeder Änderung die Gliederung zu, manche verlieren die Scrollposition. Zuletzt die Hierarchie: Sechs Arbeitsstränge heißen Gruppierung — prüfen Sie, ob Sammelbalken ihre Termine aus den Kindzeilen übernehmen, statt ein weiterer Balken zu sein, den Sie pflegen.</p>

        <p><strong>Prüfung 4 — was passiert, wenn Sie aufhören?</strong> Nehmen Sie an, Sie legen das Werkzeug in neun Monaten weg, oder ein kostenloser Tarif wird mitten im Projekt neu zugeschnitten. Beides ist gewöhnlich. Prüfen Sie, ob der Export selbst kostenpflichtig ist — ein kostenloser Tarif, aus dem Sie nicht exportieren können, ist einer, den Sie nicht verlassen können. Liegen die Daten lokal im Browser, kehrt sich das Risiko um: Nichts kann Ihnen entzogen werden, aber das Löschen der Websitedaten löscht den Plan. Exportieren Sie deshalb an jedem Meilenstein.</p>

        <p><strong>Was die Prüfungen ergeben.</strong> Keinen Sieger — eine Kategorie. Diese Aufgabe braucht eine echte Abhängigkeitsrechnung, keine Vorgangsgrenze, einen Export ohne Wasserzeichen und ein portables Format. Damit fallen Gestaltungswerkzeuge (Prüfung 1), die meisten begrenzten Gratistarife (Prüfung 3) und alles, was den Export hinter eine Bezahlschranke legt (Prüfungen 2 und 4). Übrig bleiben wirklich kostenlose Web-Werkzeuge und Open-Source-Programme für den Rechner; die Wahl dazwischen ist die Frage, ob Sie lieber Software installieren.</p>
        <p><strong>Und die deutsche Zusatzfrage.</strong> Für die Möbelwerke Sauerland kommt vor all dem eine weitere: Der Plan enthält Namen, Zuständigkeiten und Umzugstermine von Beschäftigten. Ein Werkzeug mit Konto und Serverspeicher braucht damit einen Auftragsverarbeitungsvertrag nach Artikel 28 DSGVO — und je nach Sitz des Anbieters eine Rechtsgrundlage für die Übermittlung in ein Drittland. Das ist kein Formalismus, sondern ein Vorgang mit Datenschutzbeauftragter und Betriebsrat, der leicht länger dauert als die Auswahl des Werkzeugs selbst. Ein Werkzeug, das nichts überträgt, hat diese Frage schlicht nicht — was in einer Organisation mit Betriebsrat der schnellste Weg zu einem freigegebenen Werkzeug sein kann.</p>
      </div>`
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
        <p>Entscheiden Sie vorher, ob Sie <strong>Abhängigkeiten</strong>, einen <strong>kritischen Pfad</strong> und einen <strong>echten Export</strong> brauchen. Genau an diesen drei Punkten enttäuschen kostenlose Tarife am häufigsten.</p>
        <p>Die vier Prüfungen aus der Bewertung oben können Sie in <a href="/de/app.html">gantts.app</a> in einer Viertelstunde selbst durchführen — und dasselbe Vorgehen anschließend auf jedes andere Werkzeug anwenden:</p>
        <ol>
          <li>Öffnen Sie die Seite. Es gibt keine Bestätigungsmail und keine Tarifauswahl — der erste Balken ist der erste Schritt.</li>
          <li>Klicken Sie auf <strong>✨ In Gantt einfügen</strong> und fügen Sie den Prüfausschnitt ein: <em>Ausbau (20d) nach Zustimmung der Vermieterin</em>, danach <em>IT-Einbau (10d) nach Ausbau</em> und <em>Übergabe!</em></li>
          <li><strong>Prüfung 1:</strong> Ziehen Sie die Zustimmung um zehn Tage nach hinten oder ändern Sie ihre Dauer. Ausbau, IT-Einbau und Übergabe rücken mit. Mit <strong>Neu planen</strong> zieht der Plan alles auf den frühesten zulässigen Termin.</li>
          <li>Setzen Sie das Häkchen bei <strong>Kritischer Pfad</strong> und blenden Sie über <strong>Spalten</strong> die Pufferspalte ein. Ausgewiesen wird der Gesamtpuffer — eine Spalte für den freien Puffer gibt es nicht, was Sie bei jedem Werkzeug gleichermaßen prüfen sollten.</li>
          <li><strong>Prüfung 3:</strong> Fügen Sie über <strong>✨ In Gantt einfügen</strong> zweihundert Zeilen auf einmal ein und scrollen Sie die Zeitachse. Es gibt keine Vorgangsgrenze, an die Sie stoßen könnten.</li>
          <li><strong>Prüfung 2:</strong> <strong>⬇ Export ▸ 📄 PDF-Dokument</strong>, dann die Datei auf einem anderen Gerät öffnen. Ohne Wasserzeichen, ohne Anmeldung, ohne Seitenbegrenzung.</li>
          <li><strong>Prüfung 4:</strong> <strong>⬇ Export ▸ 📑 CSV (Tabelle)</strong> und danach <strong>💾 Projekt speichern (.gantts)</strong>. Die CSV lesen andere Werkzeuge, die Projektdatei trägt Abhängigkeiten, Gliederung und Basisplan mit sich. Speichern Sie sie dorthin, wo Ihre Projektdateien ohnehin liegen — das ist zugleich die Absicherung dagegen, dass gelöschte Websitedaten den Plan mitnehmen.</li>
        </ol>`
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
  h1: 'Basisplan und Abweichung: Plan gegen Wirklichkeit',
  metaTitle: 'Basisplan und Abweichung im Gantt',
  metaDesc: 'Wie man einen Basisplan setzt und Terminabweichungen liest: Start-, End-, Dauer- und Kostenabweichung, wann neu basiert wird und was die S-Kurve dazu ehrlich sagen kann.',
  date: '2026-07-19',
  lead: 'Ein Gantt-Diagramm zeigt, wo Ihr Projekt steht. Ein <strong>Basisplan</strong> zeigt, wo es stehen sollte. Ohne ihn können Sie Fortschritt berichten, aber keinen Verzug — und der Verzug ist genau das, was jede Person wissen will, die die Arbeit bezahlt.',
  figIntro: 'Zwei Balken je Vorgang: der Plan von damals, der Stand von heute.',
  sections: [
    ['Was ein Basisplan tatsächlich ist', `<p>Ein Basisplan ist eine eingefrorene Kopie Ihres Terminplans zu einem Zeitpunkt, an dem Sie ihn für richtig erklärt haben — üblicherweise mit der Freigabe. Er speichert je Vorgang den geplanten Beginn, das geplante Ende und den Fortschritt und hört dann auf, sich zu verändern.</p>
      <p>Dieser letzte Teil ist der Punkt. Wenn Sie den Plan ohne Basisplan laufend überschreiben, schreibt der Terminplan stillschweigend seine eigene Geschichte um, und jede Woche sieht planmäßig aus. Termine wandern einen Tag nach dem anderen, und ein Plan, der dreißig Einzeltagsänderungen aufgenommen hat, sieht am Ende aus wie einer, der sich nie bewegt hat. Der Basisplan ist das, was diese Änderungen zu einer Zahl addiert.</p>
      <p>Im deutschen Bauvertragsrecht hat das zusätzlich eine handfeste Seite: Eine Behinderungsanzeige nach VOB/B braucht einen Bezugspunkt. „Wir sind später dran, als vereinbart“ ist ohne eingefrorenen Vertragsterminplan keine Aussage, sondern eine Meinung.</p>`],

    ['Wann er gesetzt wird — und wann nicht', `<p>Setzen Sie den Basisplan <strong>nach</strong> der Freigabe und <strong>bevor</strong> die Arbeit beginnt. Einer, der mitten in der Ausführung entsteht, backt jeden bereits eingetretenen Verzug ein und unterschätzt die tatsächliche Abweichung von da an dauerhaft.</p>
      <p>Setzen Sie aber keinen Basisplan auf einen Plan, von dem Sie wissen, dass er falsch ist, nur um einen zu haben — ein erfundener Terminplan liefert selbstbewusste, präzise und bedeutungslose Zahlen. Wenn Vorgänge noch Platzhaltertermine tragen, korrigieren Sie zuerst diese.</p>`],

    ['Ein durchgerechnetes Beispiel: ein Vorhaben, drei Statuszyklen', `<p>Die Sanierung eines Verwaltungsgebäudes, freigegeben am Freitag, dem 27. Februar 2026, und am Montag, dem 2. März, mit dem Basisplan eingefroren, bevor jemand anfängt. Fünf Zeilen, durchgehend Ende-Anfang, alle kritisch. Die Ausführungsplanung liegt in Leistungsphase 5 der HOAI, die Bauüberwachung in Leistungsphase 8.</p>
      <div class="worked">
        <p><strong>Basisplan, gesetzt am 2. März 2026</strong></p>
        <ul>
          <li>Bestandsaufnahme — 2. bis 13. März (10 Arbeitstage)</li>
          <li>Ausführungsplanung — 16. März bis 3. April (15 Tage)</li>
          <li>Ausbau — 6. April bis 15. Mai (30 Tage)</li>
          <li>Funktionsprüfung — 18. bis 29. Mai (10 Tage)</li>
          <li>Abnahme — 1. Juni (Meilenstein)</li>
        </ul>

        <p><strong>Statuszyklus 1 — Freitag, 20. März</strong></p>
        <p>Zwei Termine mit den Nutzerinnen sind verschoben worden, die Bestandsaufnahme endete daher am 18. statt am 13. März: <strong>Endabweichung +3 Tage</strong>. Die Ausführungsplanung begann am 19. März — <strong>Startabweichung +3 Tage</strong> — und weil ihre Schätzung unverändert bleibt, wandert ihr prognostiziertes Ende auf den 8. April, ebenfalls +3. Jeder nachgelagerte Vorgang trägt dieselben +3; die Abnahme liest sich als 4. Juni.</p>
        <p>Lesen Sie das richtig: ein <em>Start</em>problem, kein Schätzproblem. Nichts deutet bisher darauf hin, dass die späteren Schätzungen falsch sind.</p>

        <p><strong>Statuszyklus 2 — Freitag, 10. April</strong></p>
        <p>Die Ausführungsplanung endete wie prognostiziert am 8. April: Endabweichung +3, Dauerabweichung 0. Der Ausbau begann am 9. April, Startabweichung +3. Dann fällt jedoch eine Kolonne aus, und der Ausbau wird von 30 auf 36 Tage neu geschätzt; sein Ende rückt vom 15. auf den 28. Mai: <strong>Endabweichung +9 Tage</strong> — <strong>3 geerbt</strong>, <strong>6 aus Dauerabweichung</strong>, und das ist die eigentlich neue schlechte Nachricht.</p>
        <p>Genau deshalb werden Start und Ende getrennt verfolgt. „Der Ausbau ist 9 Tage zu spät“ löst das falsche Gespräch aus; „Der Ausbau hat 3 Tage geerbt und ist um 6 gewachsen“ zeigt auf eine Personalentscheidung, an der man noch etwas ändern kann.</p>

        <p><strong>Statuszyklus 3 — Freitag, 1. Mai</strong></p>
        <p>Der Ausbau steht bei 55 Prozent gegen geplante 65 Prozent, die 36-Tage-Schätzung ist also selbst optimistisch. Statt die Abnahme erneut wandern zu lassen, verdichtet das Team die Funktionsprüfung: zwei zusätzliche Prüfer kürzen sie von 10 auf 6 Tage. Die Funktionsprüfung zeigt jetzt <strong>Dauerabweichung −4 Tage</strong> und <strong>Endabweichung +5 Tage</strong>. Die Abnahme landet auf dem 8. Juni.</p>
        <p>Achten Sie darauf, was diese negative Dauerabweichung <em>nicht</em> bedeutet. Nichts ist schneller geworden — vier Tage wurden mit der Arbeitszeit zweier Personen gekauft, und eine Spalte, die nur Tage misst, kann das nicht zeigen.</p>
      </div>
      <p>Die ehrliche Zusammenfassung passt in einen Satz: fünf Tage Verzug bis zur Abnahme, drei davon aus einer überzogenen Bestandsaufnahme, sechs aus einem Personalausfall im April, vier davon durch zusätzliche Prüfer zurückgekauft.</p>`],

    ['Vier Abweichungen, und was jede verdeckt', `<p>„Abweichung“ ist nicht eine Zahl. Vier lohnen sich, und jede ist blind für etwas, das die anderen sehen.</p>
      <table>
        <thead>
          <tr><th>Abweichung</th><th>Was sie ist</th><th>Was nur sie Ihnen sagt</th><th>Wo sie in die Irre führt</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Startabweichung</strong></td>
            <td>Ist-Beginn minus Basisplan-Beginn, in Tagen.</td>
            <td>Ob der Verzug geerbt war — ein später Beginn heißt, dass etwas davor hing oder eine Ressource nicht frei war.</td>
            <td>Sagt nichts über das Ende. Ein Vorgang kann 5 Tage später beginnen und sein Basisplanende trotzdem halten, indem er Puffer oder Leute verbrennt.</td>
          </tr>
          <tr>
            <td><strong>Endabweichung</strong></td>
            <td>Ist- oder prognostiziertes Ende minus Basisplanende.</td>
            <td>Die Wirkung auf alles Nachgelagerte. Das ist die Zahl, die sich fortpflanzt.</td>
            <td>Bündelt geerbten und neuen Verzug. Die +9 Tage des Ausbaus waren 3 geerbt und 6 neu — zwei Probleme in einer Zahl.</td>
          </tr>
          <tr>
            <td><strong>Dauerabweichung</strong></td>
            <td>Ist-Dauer minus Basisplandauer.</td>
            <td>Ob die Schätzung falsch war — Endabweichung, aus der der geerbte Teil herausgerechnet ist.</td>
            <td>Wird negativ, wenn ein Vorgang verdichtet wird, was sich wie Vorsprung liest. Die −4 Tage der Funktionsprüfung kosteten zwei zusätzliche Personen.</td>
          </tr>
          <tr>
            <td><strong>Aufwands- oder Kostenabweichung</strong></td>
            <td>Verbrauchter Aufwand oder verbrauchtes Geld gegen den Ansatz im Basisplan.</td>
            <td>Was die Rettung gekostet hat. Die einzige, die Verdichtung überhaupt bemerkt.</td>
            <td>Braucht erfasste Ist-Werte. Ohne eingetragene Ausgaben ist sie keine kleine Zahl — es gibt sie schlicht nicht.</td>
          </tr>
        </tbody>
      </table>
      <p>Die Dauerabweichung lassen die meisten Teams weg, und ausgerechnet sie ändert Verhalten: Sie ist die einzige Terminkennzahl, die „wir waren spät“ von „wir haben uns geirrt“ trennt.</p>
      <!--FIG:baseline|Die Geisterbalken tragen den Basisplan; der Abstand zum aktuellen Balken ist die Abweichung.-->`],

    ['Abweichung auf dem kritischen Pfad ist die einzige, die wirklich zählt', `<p>Ein Verzug von fünf Tagen bei einem Vorgang mit fünfzehn Tagen Puffer kostet nichts. Ein Verzug von einem Tag auf dem kritischen Pfad verschiebt das Enddatum.</p>
      <p>Sortieren Sie nach Abweichung und prüfen Sie dann, welche dieser Vorgänge kritisch sind. Diese kurze Liste ist Ihr eigentlicher Statusbericht. Die Zahl verzögerter Vorgänge ohne Bezug auf den Puffer zu berichten, ist der Weg, wie Projekte gleichzeitig „zu 80 Prozent im Plan“ und drei Wochen zu spät sein können.</p>
      <p>Die umgekehrte Falle ist genauso real: Ein unkritischer Vorgang mit +12 Tagen Abweichung und 14 Tagen Puffer ist heute in Ordnung und morgen kritisch. Puffer wird verbraucht, nicht nachgefüllt.</p>`],

    ['Neu basieren: genehmigte Änderung oder Spurenbeseitigung', `<p>Das ist die folgenreichste Entscheidung, die Sie zu einem Basisplan treffen, und fast nie eine technische. Neu basieren setzt den Vergleich zurück: Jede Abweichung geht auf null, und was ursprünglich zugesagt war, ist nicht mehr sichtbar. Drei Situationen machen das richtig:</p>
      <ul>
        <li><strong>Eine genehmigte Änderung des Umfangs.</strong> Jemand mit Befugnis hat Arbeit hinzugefügt oder gestrichen, schriftlich — bei Bauvorhaben typischerweise als Nachtrag. Gegen einen Plan zu messen, der das Vorhaben nicht mehr beschreibt, ergibt eine Abweichung, die korrekt und ohne Aussage ist.</li>
        <li><strong>Eine förmliche Umplanung.</strong> Die Zahlen steuern keine Entscheidungen mehr — jeder Vorgang liest sich als +30 Tage, und niemand kann sagen, welche schlechter werden.</li>
        <li><strong>Ein Wiederanlauf nach einer Unterbrechung.</strong> Die alten Termine messen die Unterbrechung, nicht die Arbeit.</li>
      </ul>
      <p>Jeder andere Grund ist derselbe Grund in anderer Kleidung: Die Abweichung sieht schlecht aus und der Bericht ist fällig. Neu zu basieren in der Woche vor dem Lenkungskreis ist das Erkennungszeichen. In unserem Beispiel hätte ein Zurücksetzen am 1. Mai die Abnahme mit 0 Tagen Verzug ausgewiesen — und sie wäre trotzdem am 8. Juni gewesen.</p>
      <p>Der Test ist einfach. Wenn das Neubasieren berechtigt ist, können Sie die Entscheidung, das Datum und die Person benennen, die sie getroffen hat. Wenn nicht, basieren Sie nicht neu, sondern löschen den Beleg dafür, dass etwas schiefgegangen ist.</p>
      <p>Wenn Sie neu basieren, bewahren Sie den alten Stand auf — speichern Sie den Plan vorher in eine Datei, denn die Datei trägt den Basisplan mit sich. Der Abstand zwischen Basisplan 1 und Basisplan 3 ist oft die ehrlichste Beschreibung eines Projekts, die es gibt, und genau das geht verloren, wenn ein Basisplan an Ort und Stelle überschrieben wird.</p>`],

    ['Wo der Fertigstellungswert hineinpasst — und was unsere S-Kurve ehrlich berichtet', `<p>Abweichung in Tagen beantwortet „wie spät“. Der Fertigstellungswert beantwortet „wie viel Arbeit haben wir für die verbrauchte Zeit und das verbrauchte Geld verbucht“. Er hängt am Basisplan: Ohne ihn hat der Planwert nichts, dem er folgen könnte.</p>
      <p>Unsere S-Kurve ist bewusst offen mit ihren Grenzen — kennen Sie sie, bevor Sie ihre Zahlen zitieren:</p>
      <ul>
        <li><strong>Der Planwert folgt dem Basisplan, sofern einer existiert.</strong> Ohne ihn ist der Plan nur Ihre aktuellen Termine, und die Terminabweichung steht dauerhaft auf null, egal wie weit sich alles bewegt hat. Der Dialog sagt das, statt eine schmeichelhafte Null zu zeigen.</li>
        <li><strong>Die Ist-Kosten werden nie aus dem Fortschritt abgeleitet.</strong> Sie stammen ausschließlich aus Ausgaben, die Sie je Vorgang eintragen. Die verlockende Abkürzung — anzunehmen, ein zu 40 Prozent erledigter Vorgang habe 40 Prozent seines Budgets verbraucht — ergäbe einen CPI von exakt 1,00 für jedes Projekt, das je durchgeführt wurde. Ohne eingetragene Ist-Werte werden CPI, Kostenabweichung und Kostenprognose deshalb gar nicht ausgewiesen.</li>
        <li><strong>Ohne Kosten ist der Normalfall.</strong> Ist bei keinem Vorgang ein Betrag hinterlegt, werden die Vorgänge nach ihrer Dauer in Arbeitstagen gewichtet, und Sie erhalten eine reine Fortschrittskurve — dieselbe Form, abgelesen in Prozent statt in Euro.</li>
        <li><strong>Die Ist-Kurve für die Vergangenheit ist rekonstruiert.</strong> Wir speichern den Fortschritt so, wie er heute ist, und keine Historie davon; die frühere Kurve unterstellt daher, dass der Fortschritt gleichmäßig über die verstrichenen Arbeitstage jedes Vorgangs angefallen ist. Zum Stichtag exakt, davor näherungsweise — und in der Ansicht selbst so benannt.</li>
      </ul>
      <p>Im durchgerechneten Beispiel, ohne eingetragene Kosten, zeigt die S-Kurve am 1. Mai den erreichten Fortschritt unter dem geplanten — dieselbe Geschichte, die die Endabweichung von +5 Tagen erzählt, nur in Prozent statt in Tagen.</p>
      <!--FIG:evmquad|Termin- und Kostenabweichung sind unabhängige Achsen: spät und unter Budget ist ein realer Ort.-->`],

    ['So geht das in gantts.app', `<p>Die ganze Schleife dauert etwa eine Minute. Mit der Gebäudesanierung als Beispiel:</p>
      <ol>
        <li>Einigen Sie sich zuerst auf den Plan — Termine, Abhängigkeiten und Dauern sollten das sein, woran Sie gemessen werden wollen.</li>
        <li>Klicken Sie in der Werkzeugleiste auf <strong>◳ Basisplan</strong>. Ist noch keiner gespeichert, bietet das Menü genau eine Handlung an: den Basisplan aus dem aktuellen Plan setzen. Sie sehen danach die Meldung „Basisplan gesetzt — Verzug wird ab jetzt gegen diesen Plan gemessen“.</li>
        <li>Unter jedem Vorgangsbalken liegt nun ein Geisterbalken. Beim erneuten Öffnen des Menüs sehen Sie Datum und Uhrzeit der Aufnahme sowie einen Schalter, mit dem sich die Geisterbalken für eine Präsentation ausblenden lassen.</li>
        <li>Arbeiten Sie den Plan ab. Passen Sie in jedem Statuszyklus Balken oder Termine an die Wirklichkeit an — den 18. März für das Ende der Bestandsaufnahme, den 8. April für die Ausführungsplanung.</li>
        <li>Öffnen Sie <strong>◳ Basisplan</strong> erneut und lassen Sie sich die Abweichungsspalten anzeigen. Das ergänzt im Raster den Basisplan-Beginn, das Basisplan-Ende sowie Start- und Endabweichung. Verspätet erscheint rot, verfrüht grün.</li>
        <li>Überfliegen Sie die Endabweichung und gleichen Sie danach mit dem kritischen Pfad ab, welche Verzüge das Enddatum bewegen. Die Dauerabweichung ist der Abstand zwischen dem Basisplanwert und dem aktuellen Wert in der Spalte <strong>Tage</strong>.</li>
        <li>Für die Fortschrittsansicht öffnen Sie <strong>📈 S-Kurve</strong>. Der Dialog nennt selbst, ob der Planwert Ihrem Basisplan folgt oder nur Ihren aktuellen Terminen.</li>
        <li>Speichern Sie vor jedem Neubasieren eine Kopie der Datei. Danach basieren Sie über dasselbe Menü auf den aktuellen Plan neu; dort lässt sich der Basisplan auch wieder löschen. Beides ist rückgängig zu machen.</li>
      </ol>`],
  ],
  callout: 'Der häufigste Fehler beim Basisplan ist kein technischer. Teams setzen einen Basisplan, sehen die Abweichung unangenehm werden und hören still auf, hinzusehen. Ein Basisplan, den niemand liest, ist schlechter als gar keiner, weil er den Anschein von Kontrolle erzeugt, ohne sie zu leisten. Nehmen Sie die Abweichung in die wöchentliche Runde auf — oder setzen Sie gar keinen.',
  faq: [
    ['Was ist ein Basisplan im Gantt-Diagramm?', 'Eine eingefrorene Kopie des freigegebenen Terminplans — je Vorgang der geplante Beginn, das geplante Ende und der Fortschritt — die unverändert bleibt, damit sich messen lässt, wie weit der laufende Plan davon abgewichen ist.'],
    ['Was bedeutet Terminabweichung?', 'Die Differenz in Tagen zwischen dem Basisplantermin eines Vorgangs und seinem aktuellen Termin. Positiv heißt später als geplant, negativ früher, null im Plan.'],
    ['Wann sollte man den Basisplan setzen?', 'Nach der Freigabe und vor Arbeitsbeginn. Wird er mitten in der Ausführung gesetzt, verdeckt er den bereits eingetretenen Verzug.'],
    ['Was ist der Unterschied zwischen Start-, End- und Dauerabweichung?', 'Die Startabweichung zeigt, ob ein Verzug von vorgelagerter Arbeit geerbt wurde. Die Endabweichung zeigt die Wirkung auf alles Nachgelagerte. Die Dauerabweichung rechnet den geerbten Teil heraus und zeigt, ob die Schätzung selbst falsch war.'],
    ['Sollte man neu basieren, wenn ein Projekt in Verzug gerät?', 'Nur bei einer genehmigten Änderung des Umfangs, einer förmlichen Umplanung oder einem Wiederanlauf nach einer Unterbrechung. Wenn Sie Entscheidung, Datum und genehmigende Person nicht benennen können, löschen Sie den Beleg dessen, was ursprünglich zugesagt war. Speichern Sie in jedem Fall vorher eine Kopie des Plans.'],
    ['Wie setze ich in gantts.app einen Basisplan?', 'Über das Menü ◳ Basisplan den Basisplan aus dem aktuellen Plan setzen. Unter jedem Vorgang erscheinen Geisterbalken, und über dasselbe Menü lassen sich die Spalten für Basisplan-Beginn, Basisplan-Ende, Start- und Endabweichung einblenden.'],
  ],
  related: [
    ['critical-path-method', 'Der kritische Pfad'],
    ['gantt-chart-dependencies', 'Die vier Abhängigkeitsarten'],
    ['milestones-vs-tasks', 'Meilensteine und Vorgänge'],
  ],
},

'gantt-chart-mistakes': {
  h1: 'Neun Fehler bei der Projektplanung — und wie man sie behebt',
  metaTitle: 'Häufige Fehler im Gantt-Diagramm',
  metaDesc: 'Die häufigsten Fehler in Gantt-Diagrammen: zu viel Detail, fehlende Abhängigkeiten, kein Puffer, überlastete Ressourcen, Fortschritt aus Kalendertagen — je mit Korrektur und Beispiel.',
  date: '2026-07-19',
  lead: 'Schlechte Gantt-Diagramme scheitern fast immer auf dieselbe Handvoll Arten, und kaum eine davon hat mit der Software zu tun. Ein Diagramm kann sauber, farbig und jeden Freitag frisch exportiert sein und trotzdem über Ihr Enddatum lügen. Hier steht jeder Fehler, warum er falsch ist, was er in einem echten Plan kostet — und der Durchgang, der ihn findet.',
  figIntro: 'Das häufigste Problem, vorher und nachher. Dasselbe Vorhaben, zweimal geplant:',
  sections: [
    ['Ein Plan, der die meisten dieser Fehler auf einmal macht', `<p>Ein ganz gewöhnliches Vorhaben — der Relaunch des Webauftritts eines mittelständischen Herstellers, Start am Montag, 2. März 2026 — zuerst so gezeichnet, wie man ihn üblicherweise zeichnet, danach ehrlich.</p>
      <div class="worked">
        <p><strong>So geplant.</strong> Sechs Zeilen, durchgehend Ende-Anfang verkettet, keine Meilensteine, kein Puffer:</p>
        <ul>
          <li>Analyse — Mo 2. März bis Fr 13. März (10 Tage)</li>
          <li>Gestaltung — Mo 16. März bis Fr 27. März (10 Tage)</li>
          <li>Umsetzung — Mo 30. März bis Fr 24. April (20 Tage, Jana Ergün)</li>
          <li>Inhaltsmigration — Mo 30. März bis Fr 17. April (15 Tage, Jana Ergün)</li>
          <li>Qualitätssicherung — Mo 27. April bis Fr 8. Mai (10 Tage)</li>
          <li>Livegang — Mo 11. Mai</li>
        </ul>
        <p><strong>Was der Plan verschweigt.</strong> Die Fachabteilung hat fünf Arbeitstage, um die Gestaltung zu prüfen; diese Prüfung steht nirgends im Plan. Jana Ergün ist drei Wochen lang gleichzeitig zu 100 Prozent für die Umsetzung und zu 100 Prozent für die Inhaltsmigration eingeplant, das Diagramm unterstellt also stillschweigend 200 Prozent einer Person. In fünfzig Arbeitstagen steckt kein einziger Puffertag. Und weil alle Zeilen in einer einzigen EA-Kette hängen, ist jede Zeile kritisch.</p>
        <p><strong>Korrigiert.</strong> Ergänzen Sie einen Meilenstein <em>Gestaltung freigegeben</em>, der die Prüfzeit als Verzögerung trägt (EA+5T): Die Umsetzung läuft dann von Mo 6. April bis Fr 1. Mai. Die Inhaltsmigration kann sich nicht damit überlappen, solange Jana Ergün beides verantwortet, sie läuft also von Mo 4. Mai bis Fr 22. Mai. Die Qualitätssicherung folgt von Mo 25. Mai bis Fr 5. Juni. Fünf Puffertage legen den Livegang auf <strong>Fr 12. Juni</strong>.</p>
        <p><strong>Die Konsequenz.</strong> Das Diagramm sagte den 11. Mai. Der ehrliche Termin war der 12. Juni — 24 Arbeitstage später, gefunden im ersten Entwurf statt in der zweiten Maiwoche. Verändert hat sich nichts außer dass drei ohnehin wahre Dinge aufgeschrieben wurden.</p>
        <p><strong>Und die Berichterstattung.</strong> Am Montag, dem 20. April, stand die Umsetzung im Statusbericht auf 60 Prozent, weil 12 ihrer 20 Tage verstrichen waren. Fertig waren 4 von 11 Seitenvorlagen. Der tatsächliche Fortschritt: 36 Prozent.</p>
      </div>`],

    ['1. Zu viel Detail', `<p>Mit Abstand das häufigste Scheitern. Ein Diagramm, das jede Teilaufgabe trägt, ist unlesbar und unpflegbar — sechzig Zeilen aktualisiert niemand wöchentlich, also ist es binnen Tagen veraltet. Und ein ungepflegter Plan ist gefährlicher als gar keiner, weil ihm noch geglaubt wird.</p>
      <p><strong>Korrektur:</strong> Planen Sie auf der Ebene, auf der Sie berichten. Alles, was kürzer ist als Ihr Berichtszyklus, gehört in einen Vorgang hinein, nicht daneben. Rollen Sie das Detail in Phasen zusammen und lassen Sie die Arbeitsliste dort, wo das Team ohnehin arbeitet.</p>`],

    ['2. Keine Abhängigkeiten', `<p>Ein Diagramm aus parallelen Balken ohne Verknüpfungen ist ein Bild, kein Plan. Wenn etwas rutscht, bewegt sich nichts, weil nichts verbunden ist.</p>
      <p><strong>Korrektur:</strong> Verknüpfen Sie, was tatsächlich einschränkt, und ziehen Sie danach probeweise einen Balken. Wenn ihm nichts folgt, bildet der Plan Ihr Vorhaben nicht ab.</p>`],

    ['3. Alles durchgehend Ende-Anfang verkettet', `<p>Der umgekehrte Fehler, und der subtilere. Hängen Sie jeden Vorgang in eine lange Reihe, landet jeder Vorgang auf dem kritischen Pfad — sechzig Zeilen, die alle „dringend“ rufen, was dasselbe ist wie gar nichts zu sagen. Außerdem lässt sich so ein Plan nicht mehr umbauen: Jeder Termin wird von einer Vorliebe festgehalten.</p>
      <!--FIG:cpm|Nur der längste Weg durch das Netz bestimmt das Enddatum.-->
      <p><strong>Korrektur:</strong> Verknüpfen Sie nur, was physisch einschränkt. Wenn B mit den vorhandenen Leuten und dem vorhandenen Material heute beginnen könnte, hängt es nicht von A ab. Ein gesunder kritischer Pfad umfasst ein Viertel bis die Hälfte Ihrer Vorgänge; umfasst er alle, haben Sie eine Warteschlange gezeichnet und kein Netz.</p>`],

    ['4. Schätzungen als Zusagen behandeln', `<p>Jeder Balken sieht gleich sicher aus. Ein dreitägiger Vorgang, den Sie fünfzigmal gemacht haben, und einer, den noch nie jemand versucht hat, werden identisch gezeichnet.</p>
      <p><strong>Korrektur:</strong> Legen Sie den Puffer dorthin, wo die Unsicherheit sitzt, und sagen Sie das auch. Ein Plan, der zugibt, welche Teile Schätzungen sind, überlebt den Kontakt mit der Wirklichkeit, weil die Schätzungen Raum bekommen haben, falsch zu sein.</p>`],

    ['5. Nirgends Puffer', `<p>Ein Plan, in dem jeder Vorgang exakt in dem Moment beginnt, in dem sein Vorgänger endet, kann nichts abfedern. Die erste Verzögerung von zwei Tagen ist eine Projektverzögerung von zwei Tagen.</p>
      <!--FIG:float|Puffer ist der Spielraum, den ein Vorgang hat, bevor er das Enddatum zu schieben beginnt.-->
      <p><strong>Korrektur:</strong> Puffern Sie dort, wo sich Risiko sammelt — vor harten Terminen, hinter allem, was Dritte verantworten, rund um Freigaben. Ein sichtbarer Puffer von fünf Tagen vor dem Livegang ist mehr wert als fünf Tage, die unsichtbar über zehn Vorgänge verschmiert sind, denn verteilte Puffer werden aufgebraucht, ohne dass es jemand bemerkt.</p>`],

    ['6. Den kritischen Pfad ignorieren', `<p>Wer nicht weiß, welche Vorgänge das Enddatum treiben, kann nicht wissen, welche Verzögerungen zählen. Teams beschleunigen Arbeit mit drei Wochen Puffer, während eine Zeile darunter der eigentliche Engpass rutscht.</p>
      <p><strong>Korrektur:</strong> Schalten Sie den kritischen Pfad ein und prüfen Sie ihn nach jeder Änderung erneut. Ein Vorgang mit acht Tagen Puffer wird in dem Moment kritisch, in dem er neun rutscht.</p>`],

    ['7. Keine Zuständigen — und Zuständige mit 100 Prozent', `<p>Vorgänge ohne benannte Person sind die Aufgabe aller, was verlässlich heißt: die Aufgabe von niemandem. Eine Person je Vorgang, kein Team: Nur eine Person kann man fragen.</p>
      <p>Weniger offensichtlich ist der zweite Teil. Eine Person mit voller Last auf sich überlappende Vorgänge zu setzen, ist derselbe Fehler. Jana Ergün mit 100 und 100 Prozent ist nicht ehrgeizig, sondern rechnerisch unmöglich — und das Diagramm sagt es nicht, weil sich Balken bereitwillig überlappen.</p>
      <p><strong>Korrektur:</strong> Prüfen Sie die Auslastung jeder zuständigen Person über die gesamte Zeitachse, nicht Vorgang für Vorgang. Wer drei Wochen lang auf 140 Prozent steht, arbeitet in einem Terminplan, der bereits gescheitert ist.</p>`],

    ['8. Den Plan veralten lassen', `<p>Ein Gantt-Diagramm ist ein lebendes Dokument mit Verfallsdatum. Drei Wochen ohne Fortschreibung, und die Leute hören auf, ihm zu vertrauen; danach hören sie auf, es zu lesen.</p>
      <p><strong>Korrektur:</strong> Schreiben Sie in einem festen Takt fort — normalerweise wöchentlich, in einer heißen Phase täglich — und halten Sie das Diagramm klein genug, dass das Minuten dauert.</p>`],

    ['9. Keine Meilensteine', `<p>Eine Wand aus Balken gibt der Leserin nichts, woran sie sich festhalten kann. Meilensteine sind der Weg, auf dem jemand außerhalb des Projekts die Entscheidungspunkte findet.</p>
      <p><strong>Korrektur:</strong> Markieren Sie Freigaben, Lieferungen, Tore und die Inbetriebnahme als Meilensteine ohne Dauer und hängen Sie die nachgelagerte Arbeit daran. Vier bis acht sind meist richtig. Oben war der fehlende Meilenstein nicht kosmetisch: In <em>Gestaltung freigegeben</em> hatten sich fünf Tage Prüfzeit versteckt.</p>`],

    ['10. Fortschritt aus verstrichenen Kalendertagen', `<p>Das erzeugt die selbstbewussteste Fehlmeldung von allem, was hier steht. Leiten Sie den Fortschritt aus der verstrichenen Dauer ab, meldet ein Vorgang, den niemand angefasst hat, am zwölften von zwanzig Tagen 60 Prozent — genau das ist oben am 20. April passiert.</p>
      <p><strong>Korrektur:</strong> Melden Sie einen Anteil der <em>Arbeit</em> — gebaute Seitenvorlagen, ausgegebene Zeichnungen, bestandene Testfälle — und nicht einen Anteil des Kalenders. Ein Vorgang ohne zählbare Arbeitseinheit ist in der Regel zu grob geschnitten, um ihn zu verfolgen.</p>`],

    ['11. Bei jeder Abweichung neu basieren', `<p>Ein Basisplan hält fest, was Sie zugesagt haben. Ihn immer dann neu zu speichern, wenn die Abweichung unangenehm wird, macht daraus eine Aufzeichnung dessen, was Sie zuletzt getan haben — eine Zahl, die Sie ohnehin schon hatten.</p>
      <p>Monatlich betrieben, ergibt das ein Projekt, das gegen seinen neunten Basisplan im Plan liegt und gegen seinen ersten vier Monate zu spät ist.</p>
      <p><strong>Korrektur:</strong> Neu basieren nur bei einer genehmigten Änderung des Umfangs oder bei einer förmlichen Umplanung — und die alten Stände aufbewahren. Der Abstand zwischen Basisplan 1 und Basisplan 5 ist oft die ehrlichste Beschreibung eines Projekts, die existiert.</p>`],

    ['12. Das Gantt-Diagramm für die falsche Sache verwenden', `<p>Gantt-Diagramme sind für Arbeit mit Reihenfolge, Abhängigkeiten und Terminen gemacht. Zu kontinuierlichem Fluss und zu einem wöchentlich neu priorisierten Rückstand passen sie schlecht.</p>
      <p><strong>Korrektur:</strong> Gantt, wenn Reihenfolge und Termine zählen; ein Board, wenn nicht. Beides parallel zu führen ist völlig normal — das Board für die Woche, das Gantt-Diagramm für das Quartal.</p>`],

    ['Das Symptom zu jedem Fehler', `<p>Über das Symptom findet man diese Fehler leichter als über die Definition:</p>
      <table>
        <thead><tr><th>Was Ihnen auffällt</th><th>Der Fehler</th><th>Die Korrektur</th></tr></thead>
        <tbody>
          <tr><td>Seit drei Wochen nicht aktualisiert</td><td>Zu viel Detail</td><td>Auf der Berichtsebene planen</td></tr>
          <tr><td>Ein Vorgang rutscht, kein Termin bewegt sich</td><td>Keine Abhängigkeiten</td><td>Zwänge verknüpfen; mit einem Balken testen</td></tr>
          <tr><td>Jeder Vorgang ist kritisch</td><td>Alles EA verkettet</td><td>Verknüpfungen löschen, die nur Vorlieben sind</td></tr>
          <tr><td>Kleine Verzögerungen schieben das Ende</td><td>Kein Puffer</td><td>Sichtbare Puffer vor harten Terminen</td></tr>
          <tr><td>Sie haben den falschen Vorgang beschleunigt</td><td>Kritischer Pfad ignoriert</td><td>Einschalten und nach jeder Änderung prüfen</td></tr>
          <tr><td>Auf Nachfrage antwortet niemand</td><td>Keine Zuständigkeit</td><td>Eine benannte Person je Vorgang</td></tr>
          <tr><td>Die Vorgänge einer Person rutschen gemeinsam</td><td>Über 100 Prozent eingeplant</td><td>Auslastung über die ganze Zeitachse prüfen</td></tr>
          <tr><td>„Und was passiert wann?“</td><td>Keine Meilensteine</td><td>Vier bis acht Tore mit Arbeit dahinter</td></tr>
          <tr><td>Seit einem Monat 90 Prozent fertig</td><td>Fortschritt aus Kalendertagen</td><td>Anteil der Arbeit melden</td></tr>
          <tr><td>Wöchentlich grün, am Ende Monate zu spät</td><td>Basisplan bei jeder Abweichung neu gesetzt</td><td>Nur bei genehmigter Umplanung neu basieren</td></tr>
          <tr><td>Jeden Montag neu geschrieben</td><td>Falsches Werkzeug</td><td>Für Fluss ein Board nutzen</td></tr>
        </tbody>
      </table>`],

    ['Ein Durchgang in zwanzig Minuten', `<p>Gehen Sie das an einem Diagramm durch, das Sie bereits haben, in dieser Reihenfolge. Jeder Schritt ist etwas, das Sie sehen können, und nichts, worüber Sie urteilen müssen.</p>
      <ol>
        <li>Zählen Sie die Zeilen. Mehr, als Sie wöchentlich fortschreiben werden? Fassen Sie das Detail zuerst in Phasen zusammen.</li>
        <li>Ziehen Sie den letzten Vorgang Ihrer ersten Phase zwei Wochen nach rechts. Alles, was sich nicht mitbewegt, ist nicht verknüpft. Machen Sie das rückgängig und ergänzen Sie diese Verknüpfungen in der Spalte <strong>Nach</strong>.</li>
        <li>Setzen Sie den Haken bei <strong>Kritischer Pfad</strong>. Ist alles schraffiert, haben Sie überverknüpft; ist nichts schraffiert, haben Sie gar nicht verknüpft.</li>
        <li>Stellen Sie <strong>Ansicht</strong> auf <strong>Vorschau</strong> mit einem Fenster von drei Wochen. Sieht das nicht aus wie das, woran diese Woche gearbeitet wird, ist das Diagramm bereits veraltet.</li>
        <li>Öffnen Sie <strong>Auslastung</strong>. Wer an irgendeinem Tag über der Kapazität liegt, ist eine unmögliche Zusage in einem plausibel aussehenden Diagramm.</li>
        <li>Suchen Sie nach Rauten. Jeder Punkt, an dem jemand außerhalb des Teams freigibt, liefert oder prüft, sollte ein Meilenstein sein, mit der Prüfzeit als Verzögerung.</li>
        <li>Prüfen Sie die Zeile vor jedem harten Termin. Endet sie am Tag des Termins, fügen Sie einen Puffervorgang ein und beschriften Sie ihn auch so.</li>
        <li>Öffnen Sie <strong>◳ Basisplan</strong> und frieren Sie den Plan ein — einmal, jetzt, wo er ehrlich ist — und lassen Sie sich anschließend die Abweichungsspalten anzeigen.</li>
        <li>Fragen Sie jede zuständige Person nach Fortschritt in Arbeitseinheiten, nicht in Prozent. Wo Antwort und Balken auseinandergehen, hat der Balken unrecht.</li>
      </ol>`],
  ],
  callout: 'Beachten Sie, wie wenige dieser Punkte überhaupt Diagrammfehler sind. Ein Werkzeugwechsel behebt fast keinen davon: eine fehlende Abhängigkeit, eine überbuchte Person und ein stillschweigend neu gespeicherter Basisplan sind Entscheidungen — und die ziehen mit Ihnen in jede Software um, die als Nächstes kommt.',
  faq: [
    ['Was ist der häufigste Fehler in Gantt-Diagrammen?', 'Zu viel Detail. Diagramme, die jede Teilaufgabe auflisten, werden unlesbar und binnen Wochen aufgegeben, weil ihre Pflege mehr kostet, als sie einbringt.'],
    ['Wie viele Vorgänge sollte ein Gantt-Diagramm haben?', 'So wenige, dass Sie es tatsächlich pflegen — für die meisten Projekte 15 bis 40 Zeilen. Alles, was kürzer ist als Ihr Berichtszyklus, gehört in einen Vorgang hinein.'],
    ['Sollte man jeden Vorgang Ende-Anfang verknüpfen?', 'Nein. Alles in eine Reihe zu hängen, setzt jeden Vorgang auf den kritischen Pfad und macht eine Umplanung unmöglich. Verknüpfen Sie nur, was physisch einschränkt.'],
    ['Warum rutscht mein Projekt, obwohl das Diagramm gut aussah?', 'Meist fehlt Puffer, jemand ist über sich überlappende Vorgänge mit mehr als 100 Prozent eingeplant, oder der Fortschritt wird aus verstrichenen Kalendertagen statt aus geleisteter Arbeit abgeleitet.'],
    ['Ist es falsch, einen Basisplan neu zu setzen?', 'Bei einer genehmigten Änderung des Umfangs oder einer förmlichen Umplanung ist es richtig. Ihn bei jeder verfehlten Zusage neu zu speichern ist es nicht: Die Berichte bleiben grün, während der Liefertermin wandert.'],
    ['Wie oft sollte ein Gantt-Diagramm aktualisiert werden?', 'Wöchentlich für die meisten Projekte, täglich in einer heißen Phase. Wichtiger als der Abstand ist, dass der Takt fest und durchhaltbar ist.'],
  ],
  related: [
    ['gantt-chart-dependencies', 'Die vier Abhängigkeitsarten'],
    ['gantt-baseline-variance', 'Basisplan und Abweichung'],
    ['how-to-make-a-gantt-chart', 'Gantt-Diagramm erstellen'],
  ],
},

'milestones-vs-tasks': {
  h1: 'Meilensteine und Vorgänge: worin sie sich unterscheiden',
  metaTitle: 'Meilenstein oder Vorgang?',
  metaDesc: 'Unterschied zwischen Meilenstein und Vorgang, was Raute, Balken und Pfeil bedeuten, wie viele Meilensteine ein Projekt braucht und was ein falsch modellierter Meilenstein kostet.',
  date: '2026-07-19',
  lead: 'Ein <strong>Vorgang</strong> braucht Zeit. Ein <strong>Meilenstein</strong> markiert einen Zeitpunkt. Dieser eine Unterschied erklärt, warum das eine als Balken und das andere als Raute gezeichnet wird — und er hat Folgen, die sich beziffern lassen: Ein Meilenstein, den Sie als dreitägigen Vorgang erfassen, verlängert Ihr Enddatum stillschweigend um drei Tage und verdeckt ausgerechnet die Verzögerung, der Sie am stärksten ausgesetzt sind.',
  figIntro: 'Balken für die Arbeit, Rauten für die Momente, auf die es ankommt:',
  sections: [
    ['Der Unterschied in einem Satz', `<p>Ein Vorgang verbraucht Zeit und Kapazität; er hat einen Beginn, ein Ende und eine Dauer. Ein Meilenstein hat überhaupt keine Dauer — er ist ein Punkt, der festhält, dass etwas eingetreten ist. Genau deshalb erscheint er als Raute: Es gibt nichts, worüber sich ein Balken ziehen ließe.</p>
      <p>Die Prüfung dauert eine Sekunde. <em>Kann jemand daran arbeiten?</em> An einem Lastenheft kann man arbeiten. An „Lastenheft freigegeben“ kann niemand arbeiten: Das ist entweder geschehen oder nicht.</p>
      <p>Diese Frage ersetzt jede längere Definition. Sie erkennt auch die Grenzfälle zuverlässig, an denen Diskussionen sonst hängen bleiben — „Abnahme“ etwa ist in der Praxis meistens beides: ein Vorgang, weil ein Termin stattfindet und ein Protokoll entsteht, und ein Meilenstein, weil mit der Unterschrift eine Frist zu laufen beginnt. Man bildet dann beides ab, nicht eines von beiden.</p>
      <!--FIG:milestone|Ein Meilenstein liegt auf genau einem Zeitpunkt; die Balken links und rechts davon sind die Arbeit.-->`],

    ['Ein durchgerechnetes Beispiel: der Verpackungs-Relaunch bei Nordhaus Naturkost', `<p>Ein Vorhaben, konsequent bis zum Ende verfolgt. Die Nordhaus Naturkost GmbH stellt die Verpackungen einer Produktlinie mit 40 Artikeln um. Fünf Arbeitstage je Woche, Beginn Montag, 2. März 2026.</p>
      <div class="worked">
        <table>
          <thead><tr><th>Zeile</th><th>Typ</th><th>Dauer</th><th>Beginn</th><th>Ende</th></tr></thead>
          <tbody>
            <tr><td>Gestaltungsentwürfe</td><td>Vorgang</td><td>10 Tage</td><td>Mo 2. März</td><td>Fr 13. März</td></tr>
            <tr><td>Interne Prüfung und Korrekturen</td><td>Vorgang</td><td>4 Tage</td><td>Mo 16. März</td><td>Do 19. März</td></tr>
            <tr><td><strong>Gestaltung eingefroren</strong></td><td>Meilenstein</td><td>0 Tage</td><td colspan="2">Do 19. März</td></tr>
            <tr><td>LMIV-Kennzeichnungsprüfung (externes Labor)</td><td>Vorgang</td><td>8 Tage</td><td>Fr 20. März</td><td>Di 31. März</td></tr>
            <tr><td><strong>Kennzeichnung bestätigt</strong></td><td>Meilenstein</td><td>0 Tage</td><td colspan="2">Di 31. März</td></tr>
            <tr><td>Andruck der Druckerei</td><td>Vorgang</td><td>6 Tage</td><td>Mi 1. April</td><td>Mi 8. April</td></tr>
            <tr><td><strong>Druckfreigabe erteilt</strong></td><td>Meilenstein</td><td>0 Tage</td><td colspan="2">Mi 8. April</td></tr>
            <tr><td>Auflagendruck</td><td>Vorgang</td><td>15 Tage</td><td>Do 9. April</td><td>Mi 29. April</td></tr>
            <tr><td>Transport ins Zentrallager</td><td>Vorgang</td><td>7 Tage</td><td>Do 30. April</td><td>Fr 8. Mai</td></tr>
            <tr><td><strong>Umstellung im Handel</strong></td><td>Meilenstein</td><td>0 Tage</td><td colspan="2">Mo 11. Mai</td></tr>
          </tbody>
        </table>
        <p>Fünf Meilensteine, fünf Vorgänge. Drei davon — Gestaltung eingefroren, Kennzeichnung bestätigt, Druckfreigabe erteilt — sind Momente, in denen jemand <em>außerhalb</em> des Teams handeln muss: das Prüflabor, die Rechtsabteilung, die Druckerei. Genau das ist der Grund, sie zu setzen.</p>
        <p>Lesen Sie nur die Meilensteinzeilen, haben Sie das Vorhaben in einem Atemzug: Gestaltung eingefroren am 19. März, Kennzeichnung bestätigt am 31. März, Druckfreigabe am 8. April, im Regal am 11. Mai. Das ist die Fassung für die Geschäftsführung, und sie entsteht nebenbei.</p>
      </div>`],

    ['Was passiert, wenn ein Meilenstein rutscht', `<p>Das externe Labor sagt acht Tage zu und braucht dreizehn. Die Kennzeichnungsprüfung endet damit am Dienstag, dem 7. April, statt am Dienstag, dem 31. März.</p>
      <div class="worked">
        <table>
          <thead><tr><th>Meilenstein</th><th>Geplant</th><th>Prognose</th><th>Verzug</th></tr></thead>
          <tbody>
            <tr><td>Gestaltung eingefroren</td><td>Do 19. März</td><td>Do 19. März</td><td>0 Tage</td></tr>
            <tr><td>Kennzeichnung bestätigt</td><td>Di 31. März</td><td>Di 7. April</td><td>5 Tage</td></tr>
            <tr><td>Druckfreigabe erteilt</td><td>Mi 8. April</td><td>Mi 15. April</td><td>5 Tage</td></tr>
            <tr><td>Umstellung im Handel</td><td>Mo 11. Mai</td><td>Mo 18. Mai</td><td>5 Tage</td></tr>
          </tbody>
        </table>
        <p>In dieser Kette steckt kein Puffer, also schlagen alle fünf Arbeitstage voll auf den Markteintritt durch. Diese vier Zeilen sind der komplette Statusbericht — und es gibt sie nur, weil diese Punkte als Meilensteine modelliert wurden und nicht als Zwischenschritte in einem Balken.</p>
      </div>
      <p>Wenn ein Vorgang rutscht, dauert Arbeit länger, und vielleicht lässt sich das auffangen. Wenn ein Meilenstein rutscht, hat sich eine Zusage verschoben. Niemanden außerhalb des Projekts interessiert, dass der Andruck sieben statt sechs Tage gebraucht hat; alle interessiert, dass die Ware jetzt am 18. Mai im Regal steht.</p>`],

    ['Vorgang oder Meilenstein: die Dimensionen, die sich wirklich unterscheiden', `<p>Der Unterschied ist keine Zeichenkonvention. Er verändert das Verhalten des Plans an sechs Stellen.</p>
      <table>
        <thead><tr><th>Dimension</th><th>Vorgang</th><th>Meilenstein</th></tr></thead>
        <tbody>
          <tr><td>Dauer</td><td>Ein Tag oder mehr. Verbraucht Kalenderzeit und Aufwand.</td><td>Null. Beginn und Ende fallen auf dasselbe Datum.</td></tr>
          <tr><td>Abhängigkeiten</td><td>Vorgänger und Nachfolger, meist Ende-Anfang.</td><td>Braucht mindestens je einen — sonst ist er Dekoration.</td></tr>
          <tr><td>Ein Verzug bedeutet</td><td>Die Arbeit dauerte länger; Puffer oder Kapazität können das auffangen.</td><td>Eine Zusage hat sich verschoben. Das behebt keine Anstrengung, nur Umplanung.</td></tr>
          <tr><td>Besetzung</td><td>Eine ausführende Person, in der Regel mit Kosten.</td><td>Eine verantwortliche Person, die nachhält. Aufwand meist null.</td></tr>
          <tr><td>Verhalten beim Export</td><td>Balken in PDF, PNG und PowerPoint; echtes Ende und Tageszahl in Excel und CSV; mehrtägiger Kalendereintrag.</td><td>Raute in den Bildformaten; leeres Ende und Dauer 0 in Excel und CSV; eintägiger Kalendereintrag.</td></tr>
          <tr><td>Wer es liest</td><td>Die ausführende Person und ihre Führungskraft.</td><td>Auftraggeber, Kunden, Behörden, die Zusammenfassungsfolie.</td></tr>
        </tbody>
      </table>
      <p>Die Exportzeile überrascht die meisten. Stellen Sie die Ansicht auf <strong>Nur Meilensteine</strong>, exportieren Sie, und Sie haben einen einseitigen Terminplan für den Lenkungskreis, ohne ein zweites Diagramm zu pflegen — allerdings nur, wenn Ihre Meilensteine echte Meilensteine sind.</p>`],

    ['Was es kostet, wenn man es falsch modelliert', `<p>Modellieren Sie „Kennzeichnung bestätigt“ nun so, wie es die meisten zuerst aufschreiben: als Vorgang „Kennzeichnungsfreigabe einholen“, drei Tage, zwischen Laborprüfung und Andruck.</p>
      <div class="worked">
        <ol>
          <li><strong>Das Enddatum wandert.</strong> Drei erfundene Tage schieben die Umstellung im Handel von Montag, dem 11. Mai, auf Donnerstag, den 14. Mai. Die Arbeit hat sich nicht verändert, nur das Modell.</li>
          <li><strong>Das Tor verschwindet.</strong> „Kennzeichnungsfreigabe einholen“ liest sich wie etwas, das man selbst tut; „Kennzeichnung bestätigt“ liest sich wie etwas, das das Labor tut. Beim ersten fühlt sich niemand aufgefordert, dort anzurufen.</li>
          <li><strong>Die Zusammenfassung bricht.</strong> Filtern Sie auf Meilensteine, erscheinen vier Zeilen statt fünf — und ausgerechnet der Punkt mit der größten Fremdabhängigkeit fehlt.</li>
        </ol>
      </div>
      <p>Der umgekehrte Fehler ist billiger, aber real: „Auflagendruck“ zum Meilenstein zu erklären, weil er wichtig wirkt. Fünfzehn Tage Maschinenzeit verschwinden, und der kritische Pfad führt am längsten Element des Plans vorbei. Über die Bedeutung entscheidet, <em>ob</em> etwas ins Diagramm gehört; über die Form entscheidet allein die Dauer.</p>`],

    ['Wozu Meilensteine wirklich dienen', `<p>Meilensteine sind für die Leserin da, nicht für die Ausführende. Sie sind der Weg, auf dem jemand, der nicht in Ihrem Projekt lebt, die entscheidenden Momente findet: Freigaben, Lieferungen, Tore, Inbetriebnahme.</p>
      <p>Außerdem machen sie einen Terminplan durchsetzbar. „Gestaltung eingefroren“, mit der Kennzeichnungsprüfung als Nachfolger, sagt etwas, das „Gestaltung einfrieren“ nicht sagt: Nachgelagerte Arbeit beginnt erst, wenn dieser Punkt erreicht ist. Reicht eine Grafikerin am 24. März noch eine Änderung nach, zeigt das Diagramm einen Regelbruch und nicht bloß ein verschobenes Datum.</p>
      <!--FIG:deps|Ein Meilenstein verdient seinen Platz dadurch, dass er dazwischen liegt: Vorgänger, die fertig sein müssen, und Nachfolger, die nicht früher beginnen können.-->
      <p>Ein Meilenstein ohne Verknüpfung in beide Richtungen kann gelöscht werden. Wenn nichts auf ihn wartet, ist er eine Randnotiz — und Notizen gehören ins Notizfeld, nicht auf die Zeitachse.</p>`],

    ['Wie viele braucht ein Projekt?', `<p>Genug, um die Geschichte zu erzählen, und so wenige, dass jeder einzelne etwas bedeutet. Vier bis acht ist ein vernünftiger Bereich; hundert Meilensteine sind schlicht Vorgänge in anderer Form.</p>
      <p>Eine Prüfung: Könnten Sie den Fortschritt allein anhand der Meilensteine beschreiben? Nordhaus Naturkost hat fünf für ein Vorhaben über zehn Wochen — das obere Ende, gerechtfertigt dadurch, dass vier davon Übergaben an Dritte sind. Der übliche Weg, über das Ziel hinauszuschießen, ist eine Raute am Ende jeder Phase aus reiner Symmetrie; Phasen haben aber bereits einen Sammelbalken.</p>`],

    ['So geht das in gantts.app', `<p>Der Nordhaus-Plan im Editor, mit den Schaltflächen so, wie sie tatsächlich beschriftet sind.</p>
      <ol>
        <li>Klicken Sie auf <strong>✨ In Gantt einfügen</strong> und fügen Sie Ihre Gliederung ein. Eine Zeile, die auf <code>!</code> endet, wird zum Meilenstein, <code>(10d)</code> setzt eine Dauer, <code>after Name</code> verknüpft einen Vorgänger, ein führendes <code>#</code> erzeugt eine Phase — etwa <code>Gestaltung eingefroren ! after Interne Prüfung</code>.</li>
        <li>Von Hand geht es genauso: <strong>＋ Vorgang</strong> für Arbeitszeilen, <strong>◆ Meilenstein</strong> für Rauten, <strong>▣ Gruppe</strong> für eine Phase.</li>
        <li>Einen Meilenstein versehentlich als Vorgang angelegt? Doppelklicken Sie die Zeile und ändern Sie <strong>Typ</strong> von <em>Vorgang</em> auf <em>Meilenstein</em>. Das Ende fällt auf den Beginn zusammen; löschen und neu anlegen ist unnötig.</li>
        <li>Setzen Sie im selben Bereich <strong>Nach (Vorgänger)</strong>, sonst bewegt sich der Meilenstein nicht mit, wenn die Arbeit davor sich verschiebt.</li>
        <li>Klicken Sie auf <strong>Neu planen</strong>, um jede Zeile auf den frühesten Termin zu schieben, den ihre Abhängigkeiten zulassen. So erfahren Sie, ob Ihre Meilensteintermine Wünsche waren oder Konsequenzen.</li>
        <li>Öffnen Sie <strong>◳ Basisplan</strong> und frieren Sie den Plan ein, bevor die Arbeit beginnt. Die Abweichungsspalten melden den Meilensteinverzug danach in Tagen — daher stammen die fünf Tage oben.</li>
        <li>Setzen Sie den Haken bei <strong>Kritischer Pfad</strong>, um zu bestätigen, dass die Kette durch Ihre Tore das Enddatum bestimmt. Schraffierte Balken sind kritisch.</li>
        <li>Stellen Sie <strong>Ansicht</strong> auf <strong>Nur Meilensteine</strong> für die Fassung des Lenkungskreises und exportieren Sie über <strong>⬇ Export</strong> als <strong>📄 PDF-Dokument</strong> oder <strong>📽 PowerPoint (.pptx)</strong>. Danach zurück auf <strong>Alle Vorgänge</strong> für die Umsetzung.</li>
      </ol>
      <p>Eines lässt der Editor nicht zu: einen Meilenstein breiter zu ziehen. Meilensteine lassen sich verschieben, aber nie in der Länge ändern — denn ein Meilenstein mit Dauer ist keiner.</p>`],

    ['Typische Fehler', `<p><strong>Meilensteine mit Dauer.</strong> Was drei Tage braucht, ist ein Vorgang. Geben Sie ihm einen Balken und setzen Sie einen Meilenstein an sein Ende, wenn der Abschluss zählt.</p>
      <p><strong>Meilensteine, für die niemand zuständig ist.</strong> Zuständig ist, wer zum Telefon greift, wenn der Termin wackelt — nicht, wer die Freigabe erteilt.</p>
      <p><strong>Meilensteine, die aus Hoffnung datiert sind.</strong> Wenn „Kennzeichnung bestätigt“ auf dem 31. März liegt, weil das dem Handel zugesagt wurde, und nicht, weil dort acht Tage Laborarbeit enden, hält das Diagramm einen Wunsch fest. Erst neu planen, dann die Lücke bewusst verhandeln.</p>
      <p><strong>Meilensteine, die in Prozent berichtet werden.</strong> Ein Meilenstein steht auf 0 oder auf 100 Prozent. „Die Kennzeichnungsfreigabe ist zu 60 Prozent erledigt“ heißt, dass der darunterliegende Vorgang zu 60 Prozent erledigt ist und das Tor noch nicht passiert wurde.</p>`],

    ['Sammelbalken und die Hierarchie', `<p>Das dritte Symbol ist der Sammel- oder Phasenbalken, der sich über seine untergeordneten Vorgänge spannt. Er wird berechnet, nicht eingegeben: Seine Termine ergeben sich aus dem frühesten Beginn und dem spätesten Ende darunter — deshalb ist das direkte Bearbeiten meist gesperrt. Wer eine Phase verschieben will, verschiebt ihren Inhalt.</p>
      <p>Ein Sammelbalken zeigt, wann gearbeitet wird; ein Meilenstein zeigt, wann eine Zusage fällig ist. Eine Phase „Druckvorstufe“ vom 2. März bis zum 8. April nützt dem Team von Nordhaus und ist für die Einkäuferin des Handelspartners ohne Wert — sie fragt nur nach dem 11. Mai.</p>`],
  ],
  callout: 'Eine Gewohnheit lohnt sich besonders: Setzen Sie an jeder Stelle einen Meilenstein, an der jemand außerhalb des Teams freigeben, liefern, prüfen oder unterschreiben muss. Das sind die Abhängigkeiten, die Sie am wenigsten steuern, und die Verzögerungen, nach denen am häufigsten gefragt wird. Drei der fünf Nordhaus-Meilensteine sind genau das — und der eine, der gerutscht ist, war einer davon.',
  faq: [
    ['Was ist der Unterschied zwischen Vorgang und Meilenstein?', 'Ein Vorgang hat eine Dauer — Beginn, Ende und Arbeit dazwischen. Ein Meilenstein hat die Dauer null und markiert einen Moment, etwa eine Freigabe oder eine Lieferung. Schnelltest: Wenn jemand einen Nachmittag daran arbeiten kann, ist es ein Vorgang.'],
    ['Was bedeutet die Raute im Gantt-Diagramm?', 'Einen Meilenstein: eine Markierung ohne Dauer für ein bedeutsames Ereignis wie eine Unterschrift, eine Lieferung oder eine Inbetriebnahme. Da sie keine Länge hat, lässt sie sich verschieben, aber nicht in der Größe ändern.'],
    ['Wie viele Meilensteine sollte ein Projekt haben?', 'Meist vier bis acht — genug, um die Geschichte zu erzählen, wenige genug, dass jeder etwas bedeutet. Wenn die Liste von oben nach unten gelesen das Projekt nicht beschreibt, haben Sie eher die falschen als zu wenige.'],
    ['Kann ein Meilenstein eine Dauer haben?', 'Nein — definitionsgemäß ist sie null. Wenn die Sache wirklich Zeit braucht, etwa eine achttägige Kennzeichnungsprüfung, modellieren Sie sie als Vorgang und setzen einen Meilenstein an dessen Ende. Der Zusagetermin ist dann berechnet statt behauptet.'],
    ['Was passiert mit dem Terminplan, wenn ein Meilenstein rutscht?', 'Alles, was daran hängt, verschiebt sich um denselben Betrag, abzüglich vorhandener Puffer in der Kette. Im Verpackungsbeispiel schob ein Verzug von fünf Tagen bei „Kennzeichnung bestätigt“ die Umstellung im Handel vollständig vom 11. auf den 18. Mai, weil nachgelagert kein Puffer vorhanden war.'],
    ['Was ist ein Sammelbalken?', 'Ein Balken, der eine Phase oder Gruppe darstellt. Seine Termine werden aus dem frühesten Beginn und dem spätesten Ende darunter berechnet, er bewegt sich also mit seinem Inhalt. Er ersetzt keinen Meilenstein: Der Sammelbalken zeigt, wann gearbeitet wird, der Meilenstein, wann eine Zusage fällig ist.'],
  ],
  related: [
    ['what-is-a-gantt-chart', 'Was ist ein Gantt-Diagramm?'],
    ['gantt-chart-dependencies', 'Die vier Abhängigkeitsarten'],
    ['gantt-chart-mistakes', 'Häufige Planungsfehler'],
  ],
},

's-curve-project-management': {
  h1: 'S-Kurve und Fertigstellungswert: Sind Sie wirklich im Verzug?',
  metaTitle: 'S-Kurve im Projektmanagement erstellen',
  metaDesc: 'Was eine S-Kurve zeigt, wie sich Plan und Ist vergleichen lassen und wie die Fertigstellungswert-Analyse aus einem Gefühl eine belastbare Zahl macht — mit durchgerechnetem Beispiel.',
  date: '2026-07-19',
  lead: 'Eine Prozentangabe allein sagt fast nichts. Sechzig Prozent fertig ist in Woche zwei hervorragend und in Woche neun eine Katastrophe. Eine <strong>S-Kurve</strong> behebt das, indem sie die kumulierte Planleistung über die Zeit aufträgt: Aus „wie weit sind wir“ wird „wie weit hätten wir <em>sein sollen</em>“ — und der Abstand zwischen den beiden Linien ist die Antwort.',
  figIntro: 'Plan gegen Ist — und was der Abstand zwischen beiden bedeutet:',
  sections: [
    ['Warum die Kurve S-förmig ist', `<p>Projekte leisten ihre Arbeit nicht gleichmäßig. Die ersten Wochen laufen langsam an — Mobilisierung, Abstimmung des Umfangs, Warten auf Freigaben —, dann beschleunigt die Mitte, weil vieles parallel läuft, und am Ende wird es wieder zäh, weil die letzten Punkte auf Abnahmen und Restarbeiten warten.</p>
      <p>Trägt man die kumulierte Leistung über die Zeit auf, ergibt das ein flach liegendes S: flach, steil, flach. Diese Form hat niemand vorgegeben. Sie folgt daraus, wie Arbeit tatsächlich anfällt.</p>
      <p>Genau deshalb taugt sie als Maßstab. Eine Gerade würde unterstellen, dass nach zwanzig Prozent der Zeit auch zwanzig Prozent der Arbeit erledigt sind — und jedes Projekt der Welt sähe im ersten Monat nach Verzug aus.</p>
      <p>In deutschen Terminplänen hat die Kurve außerdem zuverlässig zwei waagerechte Stellen, die nichts mit Leistung zu tun haben: die <strong>Betriebsferien</strong> im Sommer und die Tage zwischen Weihnachten und Neujahr. Wer sie im Arbeitskalender als arbeitsfrei hinterlegt, bekommt an diesen Stellen eine flache Plankurve — und damit auch keine Abweichung, die es gar nicht gibt. Wer sie vergisst, sieht im August jedes Jahr denselben scheinbaren Einbruch und diskutiert ihn jedes Jahr aufs Neue.</p>`],

    ['Plan und Ist nebeneinander lesen', `<p>Zwei Kurven. Die <strong>Plankurve</strong> stammt aus Ihrem Basisplan: Jeder Vorgang wird mit seinem Gewicht über seine geplanten Termine verteilt und aufsummiert. Die <strong>Ist-Kurve</strong> stammt aus dem gemeldeten Fortschritt.</p>
      <p>Lesen Sie beide senkrecht, zum heutigen Datum:</p>
      <ul>
        <li><strong>Ist unter Plan</strong> — im Verzug. Der senkrechte Abstand ist die fehlende Leistung.</li>
        <li><strong>Ist über Plan</strong> — vor dem Plan, oder Ihre Fortschrittsmeldungen sind zu optimistisch. Beides kommt vor.</li>
        <li><strong>Auseinanderlaufende Kurven</strong> — das Problem wächst, es ist nicht stabil. Diese Form ist die wichtigste und die einzige, die eine einzelne Prozentzahl nie zeigt.</li>
      </ul>
      <p>Lesen Sie sie stattdessen <em>waagerecht</em>, erhalten Sie etwas, das in einer Statusrunde besser ankommt: Gehen Sie vom heutigen Ist-Punkt nach links, bis Sie die Plankurve treffen. Dort steht das Datum, an dem der Plan diesen Fortschritt erwartet hatte. Der Abstand ist Ihr Verzug in Wochen — also in der Einheit, über die tatsächlich gestritten wird.</p>
      <p>Beide Lesarten beschreiben dieselbe Lage, und sie klingen völlig unterschiedlich. Das ist kein Mangel, sondern der praktische Nutzen: Die senkrechte Lesart nennt den Umfang des Rückstands, die waagerechte seine Dauer. Wer nur eine von beiden vorträgt, erzeugt entweder Panik oder Gleichgültigkeit.</p>`],

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
      <p>Die Trennung ist der ganze Sinn der Übung. Ein Projekt kann exakt im Budget und schwer im Verzug sein oder pünktlich und finanziell aus dem Ruder gelaufen — eine einzige verrührte Prozentzahl verdeckt beides. Als zwei Achsen gedacht, gibt es vier Felder, in denen ein Projekt stehen kann:</p>
      <!--FIG:evmquad|Termin- und Kostenleistung sind voneinander unabhängig. Eine einzelne Prozentzahl legt beide Achsen aufeinander.-->`],

    ['Ein durchgerechnetes Beispiel: Innenausbau eines Bürogeschosses', `<p>Die Kannenberg Ausbau GmbH führt den Innenausbau einer Bürofläche als VOB-Bauvertrag aus. Auftragssumme und damit Gesamtbudget (<strong>BAC</strong>): <strong>200.000 €</strong>. Laufzeit zehn Wochen, verteilt wie bei einem Ausbau üblich — langsamer Anlauf, schwere Mitte durch die Gewerke, auslaufendes Ende mit Inbetriebnahme und Restarbeiten.</p>
      <div class="worked">
        <p><strong>Geplante Leistung je Woche, zum Planwert aufsummiert:</strong></p>
        <table>
          <thead><tr><th>Woche</th><th>Planleistung der Woche</th><th>Planwert kumuliert</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>8.000 €</td><td>8.000 €</td></tr>
            <tr><td>2</td><td>12.000 €</td><td>20.000 €</td></tr>
            <tr><td>3</td><td>20.000 €</td><td>40.000 €</td></tr>
            <tr><td>4</td><td>28.000 €</td><td>68.000 €</td></tr>
            <tr><td>5</td><td>32.000 €</td><td>100.000 €</td></tr>
            <tr><td>6</td><td>32.000 €</td><td>132.000 €</td></tr>
            <tr><td>7</td><td>26.000 €</td><td>158.000 €</td></tr>
            <tr><td>8</td><td>18.000 €</td><td>176.000 €</td></tr>
            <tr><td>9</td><td>14.000 €</td><td>190.000 €</td></tr>
            <tr><td>10</td><td>10.000 €</td><td>200.000 €</td></tr>
          </tbody>
        </table>
        <p><strong>Fünf Wochen Ist-Werte.</strong> Der Fertigstellungswert ist der Budgetwert dessen, was fertig ist; die Ist-Kosten sind das, was es gekostet hat — hier aus den gestellten Abschlagsrechnungen der Nachunternehmer.</p>
        <table>
          <thead><tr><th>Woche</th><th>Planwert</th><th>Fertigstellungswert</th><th>Ist-Kosten</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>8.000 €</td><td>6.000 €</td><td>7.000 €</td></tr>
            <tr><td>2</td><td>20.000 €</td><td>17.000 €</td><td>20.000 €</td></tr>
            <tr><td>3</td><td>40.000 €</td><td>33.000 €</td><td>38.000 €</td></tr>
            <tr><td>4</td><td>68.000 €</td><td>55.000 €</td><td>62.000 €</td></tr>
            <tr><td>5</td><td>100.000 €</td><td>82.000 €</td><td>94.000 €</td></tr>
          </tbody>
        </table>
        <p><strong>Abgelesen zum Ende der fünften Woche:</strong> PV = 100.000 €, EV = 82.000 €, AC = 94.000 €.</p>
        <ul>
          <li><strong>SV = EV − PV</strong> = 82.000 − 100.000 = <strong>−18.000 €</strong> an Leistung, die fertig sein sollte und es nicht ist.</li>
          <li><strong>SPI = EV ÷ PV</strong> = 82.000 ÷ 100.000 = <strong>0,82</strong>. Der Plan wird zu 82 Prozent der unterstellten Geschwindigkeit in Fortschritt umgesetzt.</li>
          <li><strong>CV = EV − AC</strong> = 82.000 − 94.000 = <strong>−12.000 €</strong>. Die Leistung hat zwölftausend Euro mehr gekostet, als sie wert ist.</li>
          <li><strong>CPI = EV ÷ AC</strong> = 82.000 ÷ 94.000 = <strong>0,87</strong>. Jeder ausgegebene Euro kauft 87 Cent Budgetwert.</li>
          <li><strong>Fertigstellungsgrad = EV ÷ BAC</strong> = 82.000 ÷ 200.000 = <strong>41 %</strong> gegenüber <strong>50 %</strong> geplant. 41 Prozent klingt ordentlich, bis man weiß, dass 50 fällig waren.</li>
          <li><strong>Kostenprognose EAC = BAC ÷ CPI</strong> = 200.000 ÷ 0,8723 = <strong>229.300 €</strong>. Hält die Kostenleistung, landet der 200.000-€-Auftrag rund <strong>29.300 € darüber</strong>, und es sind noch <strong>135.300 €</strong> auszugeben.</li>
        </ul>
        <p><strong>Die waagerechte Lesart für die Baubesprechung.</strong> Wann erreichte der Plan 82.000 €? Zwischen Woche 4 (68.000 €) und Woche 5 (100.000 €): 14.000 € in eine Wochenscheibe von 32.000 €, also 14 ÷ 32 = 0,44 dieser Woche. Der Plan überschritt 82.000 € in <strong>Woche 4,4</strong> — Sie liegen <strong>0,56 Wochen zurück, also knapp drei Arbeitstage</strong>.</p>
        <p>Drei Tage Rückstand und ein SPI von 0,82 sind dieselbe Tatsache. Die Verhältniszahl wirkt dramatischer, weil dies der steilste Abschnitt der Kurve ist, in dem wenige Tage viel Wert kosten. Nennen Sie beides.</p>
        <p>Zwei Warnungen zu den Ist-Kosten in einem VOB-Vertrag. Erstens hinken Abschlagsrechnungen der Leistung hinterher; wer den CPI am Tag vor einem Rechnungslauf abliest, bekommt einen zu freundlichen Wert. Zweitens ist der Sicherheitseinbehalt kein Kostenvorteil — das Geld ist geschuldet, nur noch nicht geflossen. Beides ist ein Grund, den CPI über mehrere Zyklen als Trend zu lesen und nicht als Momentaufnahme.</p>
      </div>`],

    ['Die sieben Zahlen — und wie jede falsch gelesen wird', `<p>Zu jeder gehört eine typische Fehldeutung, und die Fehldeutungen richten mehr Schaden an als gar nicht zu messen.</p>
      <table>
        <thead><tr><th>Kennzahl</th><th>Formel</th><th>Beantwortet</th><th>Wie sie falsch gelesen wird</th></tr></thead>
        <tbody>
          <tr><td><strong>PV</strong> Planwert</td><td>Sollkosten der geplanten Leistung</td><td>Wie viel sollte bis heute fertig sein?</td><td>Aus den aktuellen Terminen statt aus einem Basisplan genommen. Die haben jeden Verzug schon aufgesogen, also läuft der Planwert mit — und die Abweichung steht auf null.</td></tr>
          <tr><td><strong>EV</strong> Fertigstellungswert</td><td>BAC × Fertigstellungsgrad</td><td>Wie viel ist fertig, zu Budgetpreisen?</td><td>Nur so ehrlich wie die Fortschrittsmeldung dahinter — das bekannte Problem der Zeile, die drei Wochen lang auf 90 Prozent steht.</td></tr>
          <tr><td><strong>AC</strong> Ist-Kosten</td><td>tatsächlich angefallene Kosten</td><td>Was hat es bisher gekostet?</td><td>Vor Eingang der Rechnungen abgelesen. Die Ist-Kosten hinken nach, schmeicheln dem CPI früh und bestrafen ihn später.</td></tr>
          <tr><td><strong>SV</strong> Terminabweichung</td><td>EV − PV</td><td>Wie viel Leistung fehlt uns?</td><td>Als Kostenüberschreitung gehört. Sie wird in Euro gemessen, ist aber eine Aussage über <em>Termine</em>.</td></tr>
          <tr><td><strong>CV</strong> Kostenabweichung</td><td>EV − AC</td><td>Zahlen wir mehr, als die Leistung wert ist?</td><td>Gegen das verbrauchte Budget statt gegen den Fertigstellungswert gehalten. „Wir haben 47 Prozent des Budgets verbraucht“ sagt ohne EV nichts.</td></tr>
          <tr><td><strong>SPI</strong> Terminleistung</td><td>EV ÷ PV</td><td>Wie schnell wird Plan zu Fortschritt?</td><td>Läuft zum Projektende hin gegen 1,0, egal was passiert — jedes Projekt erwirtschaftet am Schluss sein volles Budget.</td></tr>
          <tr><td><strong>CPI</strong> Kostenleistung</td><td>EV ÷ AC</td><td>Wie viel Wert kauft ein Euro?</td><td>Von Werkzeugen, die die Ist-Kosten aus dem Fortschritt ableiten, als exakt 1,00 gemeldet. Ein CPI aus einem Rechner, der nie nach Ihren Ausgaben gefragt hat, ist Arithmetik, keine Information.</td></tr>
        </tbody>
      </table>
      <p>Eine Ergänzung, weil sie Projekte ihren Endtermin kostet: Die Fertigstellungswert-Analyse gewichtet alles nach Budget, der kritische Pfad kennt überhaupt kein Budget. Eine billige zweitägige Freigabe auf der maßgebenden Kette bewegt den SPI kaum. Sie können 1,05 ablesen und trotzdem zu spät kommen.</p>`],

    ['Warum unser Werkzeug manchmal keinen CPI anzeigt', `<p>Das sei deutlich gesagt, weil die meisten kostenlosen EVM-Rechner es genau umgekehrt handhaben.</p>
      <p>Die Ist-Kosten sind der einzige Wert, der sich nicht aus einem Terminplan ableiten lässt. Er muss aus Ihrer Buchhaltung kommen. Die verlockende Abkürzung lautet, einem zu 40 % erledigten Vorgang einfach 40 % seines Budgets als Kosten zuzuschreiben — und dann ist AC per Konstruktion gleich EV, sodass <strong>der CPI für jedes Projekt der Geschichte exakt 1,00 beträgt</strong>. Die Zahl sieht seriös aus, reagiert auf nichts und würde einem entgleisenden Budget bescheinigen, alles sei in Ordnung.</p>
      <p>Deshalb nimmt gantts.app die Ist-Kosten aus genau einer Quelle: dem Wert, den Sie beim Vorgang unter <strong>Ausgegeben</strong> eintragen. Trägt kein einziger Vorgang einen solchen Wert, bleiben die Kostenkennzahlen — Ist-Kosten, Kostenabweichung, Kostenleistung und Kostenprognose — leer, und die Ansicht lässt sie weg, statt zu raten. Die Terminkennzahlen funktionieren weiterhin, denn dafür genügen Termine und Fortschritt. Eine fehlende Zahl ist ehrlich. Eine selbstbewusst falsche ist es nicht.</p>
      <p>Der CPI von 0,87 aus dem Beispiel oben existiert nur, weil jemand 94.000 € echte Ausgaben eingetragen hat. Kein Balkenplan der Welt kennt diese Zahl von sich aus.</p>
      <p>Aus demselben Grund wird die Ist-Kurve für die Vergangenheit <strong>rekonstruiert und nicht aufgezeichnet</strong>: Das Werkzeug speichert je Vorgang einen Fortschrittswert, nicht die Historie jeder früheren Meldung. Eine wahrheitsgetreue Kurve für zurückliegende Tage ist daraus nicht wiederherstellbar. Statt sie zu verweigern, rekonstruieren wir sie unter einer offen genannten Annahme: Der Fortschritt sei über die verstrichenen Arbeitstage jedes Vorgangs gleichmäßig angefallen. Zum Stichtag, an dem die Kennzahlen abgelesen werden, ist das exakt; dahinter näherungsweise. Die Ansicht sagt das selbst.</p>`],

    ['Ein Budget ist keine Voraussetzung', `<p>Die meisten Pläne enthalten überhaupt keine Kosten, und eine S-Kurve, die welche verlangt, ist eine S-Kurve, die niemand zeichnet.</p>
      <p>Ist bei keinem Vorgang ein Betrag hinterlegt, gewichtet gantts.app jeden Vorgang stattdessen nach seiner <strong>Dauer in Arbeitstagen</strong> — nicht nach Kalendertagen und nicht nach Prozent. Die Form bleibt dieselbe, die Achse liest sich in Arbeitstagen statt in Euro. Terminabweichung und Terminleistung bedeuten dann genau dasselbe wie oben, nur in Tagen. Tragen Sie später Kosten nach, wird ohne weiteres Zutun eine Wertkurve daraus.</p>
      <p>Zwei Feinheiten verändern die Zahlen. Es zählen nur die untersten Vorgänge: Sammelbalken übernehmen die Kosten ihrer Kinder, wer beide zählt, bläht das Gesamtbudget um die Tiefe seiner Gliederung auf. Und Meilensteine tragen als Vorgänge der Dauer null nichts bei — was richtig ist, aber überrascht, wenn ein Vorhaben hauptsächlich aus Toren besteht.</p>
      <p>Eines ist wichtiger als alles andere hier: <strong>Setzen Sie einen Basisplan.</strong> Ohne ihn kann „geplant“ nur Ihre aktuellen Termine bedeuten, und die enthalten bereits jeden bisherigen Verzug. Die Terminabweichung stünde dauerhaft auf null — eine sehr beruhigende und vollkommen nutzlose Auskunft.</p>
      <!--FIG:baseline|Planbalken gegen Ist-Balken. Der Basisplan ist die eingefrorene Kopie, aus der die Plankurve gebildet wird — ohne ihn verschiebt sich der Plan jedes Mal mit Ihnen.-->
      <p>Basisplan setzen, einmal, sobald der Plan freigegeben ist. Die Ansicht nennt anschließend selbst, welche Quelle sie verwendet hat, sodass Sie eine echte Abweichung von einem Vergleich Ihrer Termine mit sich selbst unterscheiden können.</p>`],

    ['So erstellen Sie eine S-Kurve hier', `<ol>
        <li>Bauen oder importieren Sie Ihren Terminplan und bringen Sie die Termine grob in Ordnung.</li>
        <li>Hinterlegen Sie unter <strong>Kalender</strong> die Feiertage Ihres Bundeslandes sowie Betriebsferien und Brückentage. Alles Weitere rechnet in Arbeitstagen, also lohnt sich dieser Schritt zuerst.</li>
        <li>Setzen Sie über <strong>Basisplan</strong> den Basisplan aus dem aktuellen Plan, sobald dieser freigegeben ist. Das friert die Bedeutung von „geplant“ ein.</li>
        <li>Geben Sie den Vorgängen optional ein <strong>Budget</strong>, damit die Kurve in Euro statt in Arbeitstagen rechnet.</li>
        <li>Pflegen Sie je Vorgang den <strong>Fortschritt</strong> — daraus entsteht die Ist-Kurve. Melden Sie dabei geleistete Arbeit, nicht verstrichene Zeit.</li>
        <li>Tragen Sie je Vorgang <strong>Ausgegeben</strong> ein, um Kostenleistung, Kostenabweichung und Kostenprognose freizuschalten.</li>
        <li>Öffnen Sie <strong>S-Kurve</strong>. Der Dialog nennt oben, ob der Planwert dem gespeicherten Basisplan folgt und ob nach Kosten oder nach Dauer gewichtet wird.</li>
        <li>Für den Bericht: <strong>⬇ Export</strong> ▸ <strong>📄 PDF-Dokument</strong> für die Runde, <strong>📊 Excel (.xlsx)</strong>, wenn jemand die Zahlen nachrechnen will.</li>
      </ol>
      <p>Alles läuft vollständig in Ihrem Browser. Kein Konto, kein Hochladen und keine Tabellenvorlage, die von Hand gepflegt werden will.</p>`],
  ],
  callout: 'Nennen Sie die Terminleistung und die waagerechte Lesart immer gemeinsam. „SPI 0,82“ und „knapp drei Arbeitstage im Rückstand“ beschreiben dieselbe Lage in Woche fünf; eine Runde, die nur eine der beiden Zahlen hört, reagiert entweder über oder gar nicht.',
  faq: [
    ['Was ist eine S-Kurve im Projektmanagement?', 'Eine Kurve der kumulierten Planleistung über die Zeit. Sie ist S-förmig, weil Projekte langsam anlaufen, in der Mitte beschleunigen und zum Ende hin auslaufen. Gegen den tatsächlichen Fortschritt aufgetragen zeigt der senkrechte Abstand, wie weit Sie vor oder hinter dem Plan liegen.'],
    ['Was unterscheidet die S-Kurve von der Fertigstellungswert-Analyse?', 'Die S-Kurve ist das Bild, die Fertigstellungswert-Analyse die Rechnung dahinter. EVM beziffert den Abstand mit SV, SPI, CV und CPI; die Kurve zeigt seine Form und Richtung.'],
    ['Was bedeutet ein SPI von 0,9?', 'Sie haben 90 Prozent des Werts erwirtschaftet, den der Plan bis heute vorsah — Sie liegen also rund 10 Prozent hinter dem Termin. Unter 1,0 heißt Verzug, über 1,0 Vorsprung. Wie viele Tage das sind, sagt der SPI nicht; dafür lesen Sie den Abstand waagerecht ab.'],
    ['Wie berechne ich SPI und CPI von Hand?', 'Drei Zahlen zum selben Stichtag: der Planwert der bis heute vorgesehenen Leistung, der Fertigstellungswert des tatsächlich Fertigen und die Ist-Kosten. SPI ist EV ÷ PV, CPI ist EV ÷ AC. Bei PV 100.000 €, EV 82.000 € und AC 94.000 € ergibt das SPI 0,82 und CPI 0,87.'],
    ['Brauche ich Kostendaten für eine S-Kurve?', 'Nein. Ohne Kosten werden die Vorgänge nach ihrer Dauer in Arbeitstagen gewichtet, und Sie erhalten eine Fortschrittskurve — dieselbe Form, abgelesen in Arbeitstagen. Kosten machen daraus eine Wertkurve und schalten die Kostenkennzahlen frei.'],
    ['Warum wird kein CPI angezeigt?', 'Weil keine Ist-Kosten erfasst sind. Der CPI braucht echte Ausgaben; würde man ihn aus dem Fortschritt ableiten, ergäbe er für jedes Projekt exakt 1,00. Tragen Sie bei den Vorgängen „Ausgegeben“ ein, und er erscheint — zusammen mit Kostenabweichung und Kostenprognose.'],
    ['Kann man eine S-Kurve in Excel erstellen?', 'Ja, und die meisten tun es — um den Preis einer von Hand gepflegten Summenspalte samt Diagramm, die bei jeder Terminverschiebung neu gemacht werden muss. Wird die Kurve aus dem Terminplan erzeugt, entfällt dieser Schritt.'],
  ],
  related: [
    ['gantt-baseline-variance', 'Basisplan und Abweichung'],
    ['critical-path-method', 'Der kritische Pfad'],
    ['3-week-lookahead-schedule', 'Die 3-Wochen-Vorschau'],
  ],
},

'3-week-lookahead-schedule': {
  h1: 'Die 3-Wochen-Vorschau — ohne sie jeden Montag neu abzutippen',
  metaTitle: '3-Wochen-Vorschau erstellen — kostenlos',
  metaDesc: 'Was eine 3-Wochen-Vorschau ist, warum Bauteams sie nutzen, wonach die Anlaufprüfung fragt und wie Sie die Vorschau direkt aus dem Terminplan erzeugen, statt sie in Excel abzutippen.',
  date: '2026-07-19',
  lead: 'Niemand baut nach einem Programm über achtzehn Monate. Gebaut wird nach den nächsten drei Wochen davon. Die <strong>Vorschau</strong> ist genau dieses Fenster — der Ausschnitt des Terminplans, der nah genug ist, um real zu sein — und auf den meisten Baustellen wird sie noch immer jeden Montag von Hand in eine Tabelle kopiert.',
  figIntro: 'Derselbe Terminplan, gefiltert auf die Arbeit, die das Fenster berührt:',
  sections: [
    ['Was eine Vorschau eigentlich ist', `<p>Eine Vorschau ist ein kurzer, rollierender Auszug aus dem Gesamtterminplan — meist drei Wochen, manchmal zwei, vier oder sechs — und zeigt nur die Arbeit, die dieses Fenster berührt. Sie rollt jede Woche weiter, sodass derselbe Vorgang in mehreren aufeinanderfolgenden Vorschauen auftaucht, während er näher rückt und besser verstanden wird.</p>
      <p>Es gibt sie, weil Gesamtterminplan und Arbeitsplanung zwei verschiedene Dokumente mit zwei verschiedenen Aufgaben sind. Der Terminplan beantwortet „werden wir rechtzeitig fertig“, die Vorschau beantwortet „was passiert am Dienstag, und hat jemand den Stahl bestellt“. Der Versuch, eine Baubesprechung mit einem zweihundertzeiligen Programm zu führen, ist der Grund, warum es in A0 gedruckt und danach ignoriert wird.</p>
      <p>In der Sprache des Last Planner Systems ist die Vorschau der Ort, an dem <em>Randbedingungen</em> auffallen: Die Arbeit ist nah genug, dass man fragen kann, ob Genehmigung, Material, Kolonne und Vorgewerk tatsächlich da sein werden. Und die drei Wochen sind nicht drei gleichwertige Wochen — sie härten aus, während sie näher rücken:</p>
      <ul>
        <li><strong>Woche 1 ist eingefroren.</strong> Die Kolonnen sind disponiert, das Material liegt auf der Baustelle. Nur etwas, das niemand vorhersehen konnte, ändert hier noch eine Zeile.</li>
        <li><strong>Woche 2 ist zugesagt, aber noch weich.</strong> Die Randbedingungen sind geklärt — oder sie haben einen Namen und ein Datum. Das ist die Woche, in der Sie noch Handlungsraum haben.</li>
        <li><strong>Woche 3 ist Planung.</strong> Die Arbeit ist benannt und geprüft, aber nicht versprochen. Vorgänge dürfen sich hier verschieben; genau dafür ist diese Woche da.</li>
      </ul>
      <!--FIG:rolling|Jeden Montag rückt das Fenster weiter: aus Woche 3 wird Woche 2, Woche 2 friert ein, und eine neue Planungswoche kommt hinzu.-->`],

    ['Überlappung statt Enthaltensein — das Detail, das fast alle falsch machen', `<p>Hier ist die Regel, die eine Vorschau richtig macht, und genau die, an der von Hand gebaute Tabellen am häufigsten scheitern.</p>
      <p>Ein Vorgang gehört in das Fenster, wenn er es <strong>überlappt</strong> — nicht, wenn er vollständig hineinpasst. Das achtmonatige Gründungspaket, das im März begonnen hat und bis November läuft, findet gerade jetzt statt, und es ist genau die Arbeit, die das Baustellenteam vor Augen haben muss. Filtern Sie auf Vorgänge, die innerhalb der drei Wochen beginnen <em>und</em> enden, verlieren Sie jede langlaufende Tätigkeit auf der Baustelle — und behalten eine Vorschau, die aufgeräumt aussieht und ein Projekt beschreibt, an dem niemand arbeitet.</p>
      <p>Die Prüfung besteht aus zwei Vergleichen, nicht aus vieren:</p>
      <p><code>Vorgang.Start ≤ Fenster.Ende &nbsp;UND&nbsp; Vorgang.Ende ≥ Fenster.Start</code></p>
      <p>Das ist die ganze Regel, und gantts.app wendet exakt sie an. Eine Folge daraus ist erklärungsbedürftig: Eine übergeordnete Phase qualifiziert sich <em>nie</em> über ihre eigenen Termine. Gruppen kommen ausschließlich als <em>Zusammenhang</em> mit — wenn ein Vorgang in ihnen im Fenster liegt, erscheinen die übergeordneten Zeilen als Überschriften und nicht als Arbeit, die Sie zusagen. So landet keine Zeile ohne ihren Kontext in einer flachen Liste, und niemand verspricht versehentlich eine ganze Phase.</p>
      <!--FIG:lookahead|Nur Balken, die das schattierte Fenster kreuzen, überstehen den Filter; die übergeordneten Zeilen kommen als Zusammenhang mit.-->`],

    ['Warum das Fenster auf Montag liegt', `<p>Die Vorschau ist ein wöchentliches Ritual an einer wöchentlichen Besprechung. Ein Fenster von Donnerstag bis Donnerstag würde die Arbeitswoche mitten durchschneiden und wäre für jeden Leser wertlos.</p>
      <p>Deshalb rastet das Fenster immer auf den Wochenanfang zurück. Öffnen Sie das Werkzeug an einem Mittwoch, erhalten Sie das Fenster, das am Montag begonnen hat, und keinen Dreiwochenblock ab Wochenmitte. Die Pfeile schieben es wochenweise weiter, wenn Sie länger vorausschauen wollen, und <strong>Diese Woche</strong> bringt es zurück.</p>
      <p>Gezählt wird in Kalenderwochen, nicht in Arbeitswochen: „drei Wochen voraus“ heißt einundzwanzig Kalendertage und nicht fünfzehn Arbeitstage. Das ist in Deutschland kein Nebensatz, sondern der Grund, warum eine Vorschau über den 1. Mai oder über Christi Himmelfahrt und den folgenden Brückentag deutlich weniger Arbeit enthält als eine gewöhnliche. Wer die Feiertage seines Bundeslandes im Arbeitskalender hinterlegt hat, sieht das im Fenster sofort; wer nicht, verspricht in solchen Wochen zuverlässig zu viel.</p>`],

    ['Ein durchgerechnetes Beispiel: Quartier Lindenhöfe, Haus C', `<div class="worked">
      <p><strong>Das Vorhaben.</strong> Haus C des Quartiers Lindenhöfe, ein siebengeschossiger Wohnungsbau; das 1. bis 3. Obergeschoss sind im Ausbau. Bauleiterin Franziska Ortmann führt die Planung mit zwei Polieren: Serkan Yıldız für die technische Gebäudeausrüstung, Marek Wiśniewski für den Trockenbau. <strong>Das Fenster begann Montag, den 20. Juli 2026, und lief bis Sonntag, den 9. August</strong> — 13 von 214 Vorgängen überlappten es.</p>
      <p><em>Woche 1 — eingefroren, 20. bis 26. Juli.</em> Elektro-Trassen 2. OG, Erstmontage (Yıldız, vier Mann; die Kabeltrassen liegen seit dem 14. Juli auf der Baustelle). Ständerwerk 2. OG, Kopfbefestigung (Wiśniewski, sechs Mann). Schlitz- und Durchbrucharbeiten Steigschacht 3 — begonnen am 2. Juni, Ende am 21. August, taucht also im Fenster auf, obwohl der Vorgang darin weder beginnt noch endet. Genau dafür ist die Überlappungsregel da.</p>
      <p><em>Woche 2 — zugesagt, 27. Juli bis 2. August.</em> Sprinkler-Abgänge 2. OG (Yıldız), Beplankung Westflügel 2. OG (Wiśniewski), Trassenaufmaß 3. OG. Zwei offene Randbedingungen: Die Abgänge hingen an der Freigabe des geänderten Brandschutzkonzepts durch den Prüfsachverständigen für Brandschutz, und die Gipsplatten für den Westflügel hingen an einer für den 24. Juli zugesagten Lieferung. Ortmann schrieb an beide einen Namen und ein Datum — Freigabe an Yıldız zum 23. Juli, Lieferung an den Einkauf zum 24. Juli.</p>
      <p><em>Woche 3 — Planung, 3. bis 9. August.</em> Beplankung 3. OG, Elektro-Endmontage 2. OG, Meilenstein „Zwischenabnahme TGA 2. OG“ am 7. August. Nichts davon war versprochen; in dieser Woche wurde benannt, was es blockieren könnte.</p>
      <p><strong>Eine Woche später rollte das Fenster auf den 27. Juli bis 16. August.</strong> Ortmann drückte einmal auf den Pfeil, abgetippt wurde nichts. Die bislang zugesagte Woche war nun die eingefrorene — und die Sprinkler-Abgänge waren nicht anlaufbereit. Das Brandschutzkonzept kam am 23. Juli nicht zurück; die Stellungnahme des Prüfsachverständigen traf am 29. Juli ein und verlangte eine geänderte lichte Höhe im Flur. Die Abgänge wurden <em>nicht</em> trotzdem in die eingefrorene Woche gezogen. Sie rutschten auf die Woche ab dem 10. August, mit dem Grund „Freigabe offen“, und die vier Mann von Yıldız gingen auf das Trassenaufmaß im 3. OG — das war in der alten Woche 3 bereits als anlaufbereit geprüft worden. Die Gipsplatten kamen am 24. Juli, die Beplankung begann also termingerecht.</p>
      <p><strong>Die Bewertung.</strong> Für die Woche ab dem 27. Juli waren sechs Zusagen gegeben, fünf wurden wie zugesagt erfüllt: PPC 83 %, ein Grundcode. Dieser Code war in neun Wochen dreimal aufgetreten — und das war es, was das Vorhaben tatsächlich verändert hat. Ortmann nahm Brandschutz-Freigaben auf ein Vorschaufenster von sechs Wochen, weil drei Wochen kürzer waren als die reale Bearbeitungszeit des Prüfsachverständigen.</p>
      <p><strong>Und ein zweiter Fund im selben Fenster.</strong> Der Trockenbauer hatte Betriebsferien vom 10. bis 21. August gemeldet. Im Gesamtterminplan ging das zwischen 214 Zeilen unter; im Dreiwochenfenster stand es plötzlich am rechten Rand. Zwei Wochen Vorlauf reichten, die Beplankung des 3. OG vorzuziehen und die Kolonne des Estrichlegers um eine Woche nach hinten zu schieben. Genau dafür schaut man drei Wochen voraus und nicht eine.</p>
    </div>`],

    ['Wonach eine Anlaufprüfung tatsächlich fragt', `<p>Das ist eine Prüfbesprechung, keine Fortschrittsbesprechung: Fragen Sie zu jedem Vorgang, der in Woche 2 einläuft, ob das, was er braucht, auch da sein wird — und wenn nicht, wer es beschafft. Sieben Kategorien decken das ab.</p>
      <table>
        <thead><tr><th>Randbedingung</th><th>Die Frage, die Sie stellen</th><th>Wer sie klärt</th></tr></thead>
        <tbody>
          <tr><td>Material</td><td>Bestellt? Lieferzeit kürzer als der Vorlauf? Ist Lagerfläche da?</td><td>Einkauf</td></tr>
          <tr><td>Information und Planung</td><td>Ausführungsplan freigegeben, und ist die Planauskunft zurück?</td><td>Planungskoordination</td></tr>
          <tr><td>Personal</td><td>Richtiges Gewerk, richtige Zahl, disponiert und unterwiesen für diese Woche?</td><td>Polier des Nachunternehmers</td></tr>
          <tr><td>Geräte</td><td>Gerät auf der Baustelle, geprüft, nicht doppelt mit einem anderen Gewerk belegt?</td><td>Bauleitung</td></tr>
          <tr><td>Genehmigungen und Freigaben</td><td>Termin vereinbart — und passt die reale Bearbeitungszeit der Behörde oder des Prüfsachverständigen in das Fenster?</td><td>Wer die Beziehung hält</td></tr>
          <tr><td>Vorleistung</td><td>Ist das Vorgewerk wirklich fertig und übergeben — nicht „so gut wie fertig“?</td><td>Terminplanung / Paketverantwortung</td></tr>
          <tr><td>Platz und Zugang</td><td>Kommt die Kolonne hin, mit Gerüst, Beleuchtung und sicherem Weg?</td><td>Bauleitung</td></tr>
        </tbody>
      </table>
      <p>Ein Vorgang mit einer offenen Randbedingung läuft nicht in die eingefrorene Woche ein. Ihn trotzdem hochzustufen ist der Weg, auf dem aus einer Vorschau Dekoration wird — und der Grund, warum Teams nach einem halben Jahr sagen, das Verfahren habe bei ihnen nicht funktioniert.</p>`],

    ['PPC: die Zusage messen', `<p>Eine Vorschau, die niemand bewertet, ist nur ein kürzeres Gantt-Diagramm. Das Ergebnis sind nicht die gefilterten Zeilen — es ist eine <strong>Zusage</strong>, und eine Zusage, die niemand misst, ist ein Wunsch.</p>
      <p>Das Maß dafür ist der <strong>PPC</strong>, der Prozentsatz eingehaltener Zusagen. Am Ende der eingefrorenen Woche teilen Sie die wie zugesagt erledigten Vorgänge durch die zugesagten Vorgänge. Sechs zugesagt, fünf erledigt: 83 %. Es gibt keine Teilpunkte — ein zu 90 Prozent erledigter Vorgang zählt null, weil das Gewerk dahinter trotzdem nicht anfangen kann.</p>
      <p>Diese Härte ist der Sinn der Sache: Der PPC misst, wie verlässlich Ihre Planung ist, und nicht, wie viel gearbeitet wurde. Eine Woche mit enormem ungeplantem Einsatz, die die Hälfte ihrer Zusagen liegen lässt, ist eine schlechte Woche, denn alle nachgelagerten Gewerke haben sich auf die Zusage eingerichtet.</p>
      <p>Wichtiger als die Zahl ist der <em>Grund</em>, der an jeder verfehlten Zusage hängt. Ein Code je gescheitertem Vorgang — Freigabe offen, Material zu spät, Vorgewerk unfertig, Witterung, Planungsänderung. Nach zehn Wochen stapeln sie sich und benennen die eine Sache, deren Behebung sich lohnt.</p>
      <p>Neue Teams landen bei 50 bis 60 Prozent; wer Randbedingungen konsequent abräumt, kommt auf 75 bis 85. Wochenlang über 90 Prozent heißt meist, dass die Planung gepolstert ist. Verfolgen Sie den Verlauf und die Codes, nicht den absoluten Wert.</p>
      <!--FIG:milestone|Bewerten Sie die Woche gegen das, was zugesagt war — nicht gegen das, was sich als bequem herausgestellt hat.-->`],

    ['Erzeugen statt abtippen', `<p>An Vorlagen für die 3-Wochen-Vorschau herrscht kein Mangel; jede einzelne davon ist ein leeres Raster, das Sie von Hand ausfüllen. Das ist das eigentliche Problem. Die Antwort steckt bereits im Terminplan; die wöchentliche Arbeit besteht im Abschreiben, und aus dem Abschreiben kommen die Fehler und die Veralterung. Ein Vorgang wird vergessen, oder der Gesamtplan wird geändert und die Vorschau nicht — und schon widersprechen sich beide Dokumente stillschweigend.</p>
      <p>In gantts.app ist die Vorschau eine <em>Ansicht</em> derselben Daten:</p>
      <ol>
        <li>Stellen Sie <strong>Ansicht</strong> auf <strong>Vorschau</strong>.</li>
        <li>Wählen Sie das Fenster — 1, 2, 3, 4, 6 oder 8 Wochen.</li>
        <li>Schieben Sie es mit den Pfeilen weiter oder springen Sie mit <strong>Diese Woche</strong> zu heute zurück.</li>
        <li>Blenden Sie über <strong>Spalten</strong> die Spalte <strong>Zuständig</strong> ein, damit auf jeder Zeile ein Name steht.</li>
        <li>Exportieren Sie über <strong>⬇ Export</strong> als <strong>📄 PDF-Dokument</strong> oder <strong>🖼 PNG-Bild</strong> für die Wand im Baucontainer, oder als <strong>📊 Excel (.xlsx)</strong> für die Besprechung.</li>
        <li>Mit <strong>Alle Vorgänge anzeigen</strong> kehren Sie zum vollständigen Terminplan zurück.</li>
      </ol>
      <p>Das Diagramm zoomt auf das Fenster, sodass drei Wochen lesbar sind statt zu einem Streifen auf einer Achse über achtzehn Monate zusammengedrückt. Ein Band am oberen Rand nennt das gewählte Fenster und die Zahl der angezeigten Vorgänge — etwa „3-Wochen-Vorschau · 20. Juli bis 9. August — 13 von 214 Vorgängen“ —, denn ein gefiltertes Diagramm, das seine Filterung nicht ausweist, liest sich wie ein Plan mit fehlenden Vorgängen.</p>
      <p>Das Fenster folgt standardmäßig dem heutigen Tag und rollt damit zwischen zwei Besuchen von selbst weiter; die Pfeile heften es an einen bestimmten Montag, bis Sie „Diese Woche“ drücken. Ändern Sie ein Datum im Gesamtplan, stimmt die Vorschau bereits. Es gibt nichts erneut abzuschreiben.</p>`],

    ['Ein brauchbares Dokument, nicht nur ein Filter', `<ul>
        <li><strong>Auf jede Zeile gehört ein Name.</strong> Eine Vorschau ohne Verantwortliche je Vorgang ist eine Liste von Hoffnungen.</li>
        <li><strong>Gliedern Sie die nahe Arbeit feiner als die ferne.</strong> Ein Vorgang „Ausbau erstes Obergeschoss — 6 Wochen“ ist im Terminplan in Ordnung und in einer Vorschau nutzlos. Teilen Sie ihn auf, während er näher rückt.</li>
        <li><strong>Prüfen Sie Randbedingungen, nicht nur Termine.</strong> Der Wert des Blicks drei Wochen nach vorn liegt darin, dass noch Zeit bleibt, Fehlendes zu beschaffen.</li>
        <li><strong>Halten Sie sie kurz.</strong> Umfasst die Vorschau sechzig Zeilen, ist entweder das Fenster zu lang oder der Plan für diese Besprechung zu fein.</li>
        <li><strong>Prüfen Sie langlaufende Positionen auf einem längeren Horizont.</strong> Wenn eine Freigabestelle fünf Wochen braucht, findet ein Dreiwochenfenster das Problem jedes Mal — und jedes Mal zu spät.</li>
        <li><strong>Schreiben Sie die Fehlschläge auf.</strong> Ein Grundcode, der nur auf einem Whiteboard im Baucontainer steht, ist am Donnerstag verschwunden.</li>
      </ul>`],
  ],
  callout: 'Die Vorschau ist nicht das Ergebnis — die Zusage ist es. Wenn der Montag ein gefiltertes Diagramm hervorbringt, aber keine Bewertung der vergangenen Woche, haben Sie den Papierkram automatisiert und das Verfahren selbst übersprungen.',
  faq: [
    ['Was ist eine 3-Wochen-Vorschau?', 'Ein rollierender Auszug aus dem Gesamtterminplan, der nur die Arbeit zeigt, die die nächsten drei Wochen berührt. Sie wird wöchentlich fortgeschrieben und dient dazu, die tägliche Arbeit abzustimmen und Randbedingungen zu erkennen, solange noch Zeit bleibt, sie zu klären.'],
    ['Warum drei Wochen?', 'Lang genug, dass sich Randbedingungen — Material, Genehmigungen, Kolonnen — noch klären lassen, und kurz genug, dass die Termine glaubwürdig sind. Zwei, vier und sechs Wochen sind ebenfalls üblich; die richtige Länge hängt von Ihren Vorlaufzeiten ab.'],
    ['Gehört ein lange laufender Vorgang in die Vorschau?', 'Ja. Alles, was das Fenster überlappt, gehört hinein. Ein Filter auf Vorgänge, die vollständig in die drei Wochen passen, entfernt genau die langlaufende Arbeit, die gerade stattfindet. Phasen dagegen erscheinen nie wegen ihrer eigenen Termine, sondern nur als Überschrift über einem Vorgang im Fenster.'],
    ['Was ist der PPC und was ist ein guter Wert?', 'Wie zugesagt erledigte Vorgänge geteilt durch zugesagte Vorgänge, ohne Teilpunkte. Neue Teams erreichen 50 bis 60 Prozent, 75 bis 85 ist gut, dauerhaft über 90 deutet auf gepolsterte Planung hin. Die Grundcodes hinter den Fehlschlägen sagen mehr als die Zahl.'],
    ['Was passiert mit einem Vorgang, der nicht anlaufbereit ist?', 'Er rückt aus der eingefrorenen Woche heraus, statt trotzdem zugesagt zu werden, der Grund wird festgehalten, und die Kolonne geht auf Arbeit, die bereits als anlaufbereit geprüft ist. Einen unfertigen Vorgang hochzustufen zerstört genau die Verlässlichkeit, für die es die Vorschau gibt.'],
    ['Kann man eine Vorschau in Excel erstellen, und wie drucke ich sie?', 'In Excel tun es die meisten Teams — indem sie jede Woche Zeilen aus dem Terminplan abtippen. Wird sie als Ansicht des Plans erzeugt, entfallen das Abtippen und das Auseinanderlaufen beider Dokumente. Zum Drucken wechseln Sie in die Vorschau-Ansicht und exportieren als PDF oder PNG; der Export gibt wieder, was auf dem Bildschirm steht, Sie erhalten also das Fenster und nicht den gesamten Terminplan.'],
  ],
  related: [
    ['critical-path-method', 'Der kritische Pfad'],
    ['s-curve-project-management', 'S-Kurve und Fertigstellungswert'],
    ['gantt-chart-dependencies', 'Die vier Abhängigkeitsarten'],
  ],
},

'mermaid-gantt-chart': {
  h1: 'Mermaid-Gantt-Diagramme: Syntax, Fallstricke und der Weg zurück in einen Editor',
  metaTitle: 'Mermaid-Gantt-Syntax mit Live-Editor',
  metaDesc: 'Die Mermaid-Gantt-Syntax Feld für Feld: Abschnitte, Tags, Abhängigkeiten und excludes, dazu ein vollständiges Beispiel, die typischen Fallstricke und der Rückweg in einen visuellen Editor.',
  date: '2026-07-19',
  lead: 'Mermaid-Gantt-Blöcke werden in GitHub, GitLab, Notion und Obsidian direkt gerendert — das macht sie zum einfachsten Weg, einen Terminplan dorthin zu bringen, wo die Arbeit ohnehin stattfindet: ins Repository, prüfbar im Pull Request. Sie zu <em>bearbeiten</em> ist dagegen mühsam: Ein Datum verschieben heißt, jede <code>after</code>-Kette dahinter von Hand neu abzuleiten. Hier stehen die Syntax Feld für Feld, ein vollständiges Beispiel zum Einfügen, die Fallstricke, die tadellos rendern und trotzdem falsch sind — und der fehlende Schritt: visuell bearbeiten und den Text zurückbekommen.',
  figIntro: 'Derselbe Terminplan als Text und als Balken:',
  sections: [
    ['Die Syntax in einem Durchgang', `<p>Ein Gantt-Block beginnt mit dem Schlüsselwort <code>gantt</code> und einigen Kopfzeilen, danach folgen <code>section</code>-Überschriften mit Vorgangszeilen darunter. Die Einrückung ist Konvention und nicht Grammatik — Mermaid liest den Block auch ohne sie.</p>
      <p>Eine Vorgangszeile besteht aus einem Namen, einem Doppelpunkt und dann kommagetrennten Feldern:</p>
      <p><code>Name des Vorgangs :tag, id, start, dauer</code></p>
      <ul>
        <li><strong>Tags</strong> — beliebig viele aus <code>done</code>, <code>active</code>, <code>crit</code> und <code>milestone</code>, in beliebiger Reihenfolge. Optional.</li>
        <li><strong>id</strong> — ein einzelnes Wort ohne Leerzeichen, nur nötig, wenn sich etwas anderes über <code>after</code> auf diesen Vorgang bezieht.</li>
        <li><strong>start</strong> — ein Datum, oder <code>after eineId</code>, oder ganz weggelassen, um an den Vorgang darüber anzuschließen.</li>
        <li><strong>dauer</strong> — <code>5d</code>, <code>2w</code>, oder ein zweites absolutes Datum.</li>
      </ul>
      <p>Wissenswerte Kopfzeilen: <code>dateFormat</code> (wie die Daten in <em>Ihrer</em> Datei geschrieben sind), <code>excludes weekends</code>, <code>title</code> und <code>axisFormat</code> (wie die Achse beschriftet wird, in strftime-Codes). Die Felder werden nach ihrer Form erkannt und nicht streng nach ihrer Position — deshalb funktionieren <code>:done, spec, 2026-03-02, 5d</code> und <code>:spec, done, 2026-03-02, 5d</code> gleichermaßen.</p>
      <!--FIG:syntax|Jedes Feld einer Mermaid-Vorgangszeile — und welche davon optional sind.-->`],

    ['Ein Beispiel, das Sie in eine README einfügen können', `<p>Ein vollständiger, gültiger Block für eine reale Aufgabe: die Ablösung der internen Zeiterfassungs-API eines mittelständischen Unternehmens, Version 1 auf Version 2. Er nutzt Abschnitte, absolute Daten, <code>after</code>-Ketten, alle Tags, einen Meilenstein sowie ausgeschlossene Wochenenden und Feiertage. Fügen Sie ihn in einen Codeblock mit der Sprache <code>mermaid</code> in einer beliebigen Markdown-Datei auf GitHub ein, und er wird gerendert.</p>
      <div class="worked">
        <pre><code>gantt
    title Abloesung der Zeiterfassungs-API (v1 auf v2)
    dateFormat YYYY-MM-DD
    axisFormat %d.%m.
    excludes weekends 2026-04-03 2026-04-06 2026-05-01

    section Analyse
    Bestand v1 erheben        :done, best, 2026-03-02, 5d
    OpenAPI-Spezifikation     :done, spec, after best, 4d
    Spezifikation abstimmen   :active, abst, after spec, 2d

    section Datenschutz und Mitbestimmung
    Datenschutz-Folgenabschaetzung  :crit, dsfa, after abst, 8d
    Betriebsvereinbarung verhandeln :crit, bv, after dsfa, 15d
    Betriebsvereinbarung unterzeichnet :milestone, bvm, 2026-04-24, 0d

    section Umsetzung
    Authentifizierungsdienst  :auth, after bvm, 10d
    Fachendpunkte             :fach, after auth, 12d
    Client-SDK neu erzeugen   :sdk, after fach, 3d

    section Umstellung
    Testbetrieb               :test, after sdk, 5d
    Abschaltung v1            :ab, after test, 2w</code></pre>
        <p>Zeile für Zeile gelesen:</p>
        <ul>
          <li><code>dateFormat YYYY-MM-DD</code> sagt Mermaid, wie es die von Ihnen getippten Daten <em>lesen</em> soll. Das ist das Eingabeformat, nicht das Ausgabeformat — es zu ändern ändert die Achse nicht.</li>
          <li><code>axisFormat %d.%m.</code> ist die Ausgabeseite: Die Achse liest sich als „02.03.“ statt als ISO-Datum, also so, wie ein deutscher Leser Termine erwartet. Für alles, was länger als ein Quartal läuft, ist <code>%V</code> mit Kalenderwochen die bessere Wahl.</li>
          <li><code>excludes weekends 2026-04-03 2026-04-06 2026-05-01</code> lässt jeden Balken über Samstag und Sonntag springen und zusätzlich über Karfreitag, Ostermontag und den 1. Mai. Das gilt für das gesamte Diagramm; es gibt keine Ausnahme je Vorgang. Wer bundeslandspezifische Feiertage braucht — Fronleichnam etwa —, hängt sie einfach an dieselbe Zeile an.</li>
          <li><code>Bestand v1 erheben :done, best, 2026-03-02, 5d</code> — Tag, id, ein absoluter Beginn (ein Montag), fünf Tage. Dauern schließen den Starttag ein, dieser Vorgang endet also am Freitag, dem 6. März.</li>
          <li><code>after best</code> heißt „beginne, wenn <code>best</code> fertig ist“ — bei ausgeschlossenen Wochenenden also am Montag, dem 9. März, und nicht am Samstag, dem 7.</li>
          <li><code>:crit, dsfa, ...</code> färbt den Balken in der Farbe des kritischen Pfads. Beachten Sie: <em>färbt</em> — mehr dazu weiter unten.</li>
          <li><code>Fachendpunkte :fach, after auth, 12d</code> trägt überhaupt kein Tag; das erste Feld ist nur eine id. Ohne Tag gilt der Vorgang als anstehende Arbeit.</li>
          <li><code>Betriebsvereinbarung unterzeichnet :milestone, bvm, 2026-04-24, 0d</code> ist eine Marke ohne Länge auf einem festen Datum. Meilensteine bekommen wie alles andere eine id, deshalb ist <code>after bvm</code> in der nächsten Zeile zulässig. Dass die Umsetzung erst nach der Unterschrift beginnt, ist hier kein Zieren: Ein System, das Arbeitszeit erfasst, unterliegt der Mitbestimmung, und ohne Betriebsvereinbarung darf es nicht in Betrieb gehen.</li>
          <li><code>2w</code> sind zwei Wochen. Mermaid akzeptiert auch <code>h</code> und <code>m</code>, was hier selten hilft.</li>
        </ul>
        <p>Die Leerzeilen zwischen den Abschnitten sind Dekoration — Mermaid ignoriert sie, und unser Import tut es ebenso. Lassen Sie sie trotzdem stehen; ein Block mit vierzig Vorgängen ist ohne sie in einem Diff nicht lesbar.</p>
      </div>`],

    ['Referenz der Vorgangszeile', `<p>Jedes Feld, was es bewirkt und wie es in der Praxis aussieht.</p>
      <table>
        <thead><tr><th>Feld oder Zusatz</th><th>Beispiel</th><th>Wirkung</th></tr></thead>
        <tbody>
          <tr><td><code>id</code></td><td><code>best</code></td><td>Ein einzelnes Wort, das den Vorgang benennt, damit <code>after</code> sich darauf beziehen kann. Keine Leerzeichen, keine Satzzeichen. Optional, solange nichts von dem Vorgang abhängt.</td></tr>
          <tr><td><code>after</code></td><td><code>after best</code></td><td>Beginnt, wenn der genannte Vorgang endet. Nur Ende-Anfang, ohne Zeitabstand. Mehrere ids sind erlaubt — <code>after a b</code> wartet auf den späteren der beiden.</td></tr>
          <tr><td><code>done</code></td><td><code>:done, best, …</code></td><td>Zeichnet den Balken als abgeschlossen. Ohne Prozentwert — 100 Prozent und „im Grunde fertig“ sehen identisch aus.</td></tr>
          <tr><td><code>active</code></td><td><code>:active, abst, …</code></td><td>Zeichnet den Balken als laufend. Ebenfalls ohne jede Zahl daran.</td></tr>
          <tr><td><code>crit</code></td><td><code>:crit, dsfa, …</code></td><td>Färbt den Balken als kritisch. Eine Behauptung, die Sie tippen, und nichts, was Mermaid ableitet — nichts prüft sie gegen das Abhängigkeitsnetz.</td></tr>
          <tr><td><code>milestone</code></td><td><code>:milestone, bvm, …</code></td><td>Zeichnet eine Raute statt eines Balkens. Sinnvoll nur zusammen mit <code>0d</code>.</td></tr>
          <tr><td>Dauereinheiten</td><td><code>5d</code> · <code>2w</code> · <code>8h</code></td><td>Tage, Wochen, Stunden (auch <code>m</code>). Einschließlich des Starttags: <code>5d</code> ab Montag endet am Freitag.</td></tr>
          <tr><td>Enddatum</td><td><code>2026-03-02, 2026-03-06</code></td><td>Ein zweites Datum statt einer Dauer, für ein von außen festgelegtes Ende.</td></tr>
          <tr><td><code>dateFormat</code></td><td><code>dateFormat YYYY-MM-DD</code></td><td>Wie die Daten in der Datei gelesen werden. Kopfzeile, einmal je Diagramm.</td></tr>
          <tr><td><code>axisFormat</code></td><td><code>axisFormat %d.%m.</code></td><td>Wie die Achse beschriftet wird, in strftime-Codes. Rein kosmetisch.</td></tr>
          <tr><td><code>excludes</code></td><td><code>excludes weekends</code></td><td>Arbeitsfreie Tage. Nimmt auch einzelne Daten (<code>excludes 2026-04-06</code>) und Wochentagsnamen. Gilt für das ganze Diagramm.</td></tr>
        </tbody>
      </table>`],

    ['Vier Dinge, über die Sie stolpern werden', `<p><strong>1. Dauern schließen den Starttag ein.</strong> <code>5d</code> ab Montag, dem 5., läuft bis Freitag, den 9., nicht bis zum 10. Ein Fehler um eins verschiebt hier jeden Vorgang der Datei und wird trotzdem tadellos gerendert — das ist die schlimmste denkbare Fehlerart, weil nichts kaputt aussieht.</p>
      <p><strong>2. <code>after</code> zusammen mit <code>excludes weekends</code> ist die eigentliche Fehlerquelle.</strong> Endet ein Vorgänger an einem Freitag, beginnt sein Nachfolger am <em>Montag</em> — nicht am Samstag. Jedes Werkzeug, das <code>after</code> durch Addition eines einzelnen Kalendertages auflöst, legt Vorgänge klammheimlich auf Wochenenden in einer Datei, die genau das verbietet, und ab dort läuft jedes weitere Datum weg. Unseres tat das kurzzeitig. Die Korrektur führt die Rechnung über den Arbeitskalender, damit der Import mit dem übereinstimmt, was Mermaid zeichnet; der absichernde Test prüft die Eigenschaft statt bestimmter Daten: Kein <em>abgeleitetes</em> Anfangs- oder Enddatum darf auf einen ausgeschlossenen Tag fallen. Daten, die Sie selbst getippt haben, bleiben dagegen stehen, wo Sie sie hingeschrieben haben, Wochenende hin oder her — das ausdrückliche Datum einer Autorin stillschweigend zu verschieben ist die falsche Art von Hilfsbereitschaft.</p>
      <p><strong>3. Es gibt keine Maskierung.</strong> Ein Doppelpunkt beginnt die Feldliste und ein Komma trennt die Felder — aus <code>Phase 2: Entwurf, Prüfung</code> wird also ein Vorgang namens „Phase 2“ mit unsinnigen Feldern. Halten Sie Doppelpunkte, Kommas und Semikolons aus Vorgangsnamen heraus; beim Export ersetzen wir sie durch Leerzeichen, statt eine Zeile auszugeben, die sich nicht lesen lässt.</p>
      <p><strong>4. Eine unlesbare Dauer wird stillschweigend null.</strong> Schreiben Sie <code>3dd</code>, erhalten Sie einen Balken der Länge null statt einer Fehlermeldung. Suchen Sie nach jeder größeren Änderung gezielt nach unsichtbaren Vorgängen.</p>
      <!--FIG:deps|„after“ ist eine Ende-Anfang-Verknüpfung ohne Zeitabstand — die einzige Verknüpfungsart, die das Format kennt.-->`],

    ['Die Grenzen eines Diagrammformats', `<p>Mermaid gantt ist eine Darstellungssprache und keine Terminplanungsmaschine. Der Unterschied fällt in dem Moment auf, in dem das Diagramm eine Frage <em>beantworten</em> statt eine Antwort bebildern soll.</p>
      <ul>
        <li><strong>Keine Ressourcen.</strong> Kein Feld für die zuständige Person, keine Kosten, kein Aufwand. Sie können in Mermaid niemanden überlasten, weil Mermaid nicht weiß, dass es Menschen gibt.</li>
        <li><strong>Kein Puffer und kein berechneter kritischer Pfad.</strong> <code>crit</code> ist eine Farbe, die Sie von Hand vergeben. Nichts läuft das Abhängigkeitsnetz ab, nichts rechnet frühe und späte Lagen aus, nichts sagt Ihnen, welche Kette das Enddatum bestimmt. Ein Diagramm, in dem jeder Balken <code>crit</code> trägt, ist genauso gültig wie eines, in dem es keiner tut.</li>
        <li><strong>Kein Basisplan.</strong> Es gibt keine Stelle, an der stünde, was der Plan im vergangenen Monat gesagt hat — also auch keine Abweichung und keinen messbaren Verzug.</li>
        <li><strong>Nur Ende-Anfang.</strong> <code>after</code> ist eine EA-Verknüpfung ohne Zeitabstand. Anfang-Anfang, Ende-Ende, Anfang-Ende und jeder Zeitabstand haben keinen Platz. Echte Pläne stecken voller Sätze wie „der Test beginnt drei Tage nach dem Beginn der Entwicklung“ — in Mermaid wird daraus ein fest eingetragenes Datum, und die Verknüpfung ist verschwunden.</li>
        <li><strong>Kein Fortschritt in Prozent.</strong> Ein Vorgang bei 40 Prozent und einer bei 90 Prozent sind beide schlicht <code>active</code>.</li>
        <li><strong>Flache Abschnitte.</strong> Keine verschachtelten Gruppen, eine Gliederung mit mehr als einer Ebene wird beim Einlesen also flach.</li>
      </ul>
      <p>Nichts davon macht Mermaid zu einem schlechten Format. Es macht es zu einem <em>Veröffentlichungsformat</em> — gut darin, einen Terminplan zu zeigen, ungeeignet, einen herzuleiten. Genau deshalb zählt der Rückweg.</p>`],

    ['Visuell bearbeiten, dann den Text zurückkopieren', `<p>Mermaid rendern können viele Werkzeuge. Gefehlt hat die Gegenrichtung — Balken ziehen und die Syntax wieder herausbekommen.</p>
      <ol>
        <li>Fügen Sie Ihr Diagramm über <strong>✨ In Gantt einfügen</strong> ein oder öffnen Sie die Datei über <strong>📂 Öffnen</strong> — eine <code>.mmd</code>-Datei oder eine <code>.md</code>-Datei mit eingebettetem Block, beides funktioniert. Ein Gantt-Block wird an seinem Inhalt erkannt, nicht an der Dateiendung.</li>
        <li>Ziehen, verknüpfen und umdatieren Sie wie in jedem anderen Diagramm. <code>excludes weekends</code> schaltet den Arbeitskalender ein, sodass die erzeugten Termine zu der Datei passen, aus der sie stammen; unter <strong>Kalender</strong> ergänzen Sie die Feiertage Ihres Bundeslandes.</li>
        <li>Setzen Sie den Haken bei <strong>Kritischer Pfad</strong>. Die schraffierten Balken sind das berechnete Ergebnis — und nicht das, was in der Datei behauptet wurde.</li>
        <li>Über <strong>⬇ Export</strong> ▸ <strong>🧜 Mermaid-Gantt (Text)</strong> erhalten Sie den aktualisierten Text, entweder über <strong>In die Zwischenablage kopieren</strong> oder als <strong>.mmd herunterladen</strong>. Zurück in die README einfügen, Diff einchecken, fertig.</li>
      </ol>
      <p>Der Hin- und Rückweg verliert etwas, aber auf bekannte, langweilige Weise. Der Fortschritt wird beim Export als 100 Prozent auf <code>done</code> und alles zwischen 1 und 99 Prozent auf <code>active</code> abgebildet; beim Import kommt <code>active</code> als 50 Prozent zurück — eine Schätzung, auf die Sie hingewiesen werden, statt sie später in einem Statusbericht zu entdecken. Verknüpfungen, die sich nicht als <code>after</code> schreiben lassen — alles mit Zeitabstand und jede AA-, EE- oder AE-Beziehung —, fallen auf feste Termine zurück. Die bleiben korrekt, hören aber auf, pflegbar zu sein.</p>
      <p>Eine Asymmetrie ist Absicht und kein Fehler: <strong><code>crit</code> wird exportiert, aber niemals importiert.</strong> Auf dem Weg hinaus ist der Wert abgeleitet — der Editor hat den kritischen Pfad aus dem Abhängigkeitsnetz berechnet, das Tag ist im Moment des Schreibens also wahr. Auf dem Weg hinein ist es ein Wort, das jemand in eine womöglich wochenalte Datei getippt hat; ihm zu vertrauen hieße, eine unkritische Kette rot einzufärben. Also wird es geschrieben und danach ignoriert: Der kritische Pfad, den Sie nach einem Import sehen, ist neu berechnet und nicht behauptet.</p>
      <p>Für alle, die Terminpläne mit einem Sprachmodell entwerfen, gibt es einen angenehmen Nebeneffekt: Lassen Sie sich Mermaid-Gantt-Syntax ausgeben, fügen Sie die Antwort ein, und Sie haben ein echtes, bearbeitbares Diagramm mit berechnetem kritischem Pfad — ohne API-Schlüssel und ohne Server.</p>`],
  ],
  callout: 'Mermaid ist ein Veröffentlichungsformat, kein Planungswerkzeug. Der Terminplan darf im Repository leben, aber alles, was gerechnet werden muss — kritischer Pfad, Puffer, Abweichung gegen einen Basisplan —, entsteht außerhalb der Datei und wird dann hineingeschrieben. Wer die Reihenfolge umdreht, pflegt am Ende Daten von Hand, die eine Maschine ableiten könnte.',
  faq: [
    ['Wie schreibt man ein Gantt-Diagramm in Mermaid?', 'Beginnen Sie den Block mit gantt, ergänzen Sie dateFormat YYYY-MM-DD und darunter section-Überschriften mit Vorgangszeilen der Form „Name :tag, id, start, dauer“ — zum Beispiel „Recherche :done, rec, 2026-01-05, 5d“.'],
    ['Schließt 5d in Mermaid den Starttag ein?', 'Ja. Ein Vorgang mit 5d ab Montag, dem 5., endet am Freitag, dem 9. Diese einschließende Zählweise ist die häufigste Ursache für Fehler um einen Tag — und sie erzeugt ein Diagramm, das einwandfrei rendert, während jedes Datum um einen Tag danebenliegt.'],
    ['Wie funktionieren Abhängigkeiten in Mermaid gantt?', 'Über „after eineId“ im Startfeld. Es ist immer eine Ende-Anfang-Verknüpfung ohne Zeitabstand; Anfang-Anfang, Ende-Ende und Abstände lassen sich nicht ausdrücken. Mehrere Vorgänger sind möglich, etwa „after a b“ — der Vorgang wartet dann auf den späteren der beiden.'],
    ['Überspringt after die Wochenenden?', 'Ja, sofern das Diagramm „excludes weekends“ enthält. Der Nachfolger eines Vorgangs, der freitags endet, beginnt dann am Montag, und die Dauer zählt in Arbeitstagen. Werkzeuge, die after durch Addition eines Kalendertages auflösen, legen Vorgänge auf Samstage in einer Datei, die das ausdrücklich verbietet.'],
    ['Kann Mermaid den kritischen Pfad berechnen?', 'Nein. Das Tag crit ist eine Farbe, die Sie von Hand vergeben; nichts in Mermaid läuft das Abhängigkeitsnetz ab oder rechnet Puffer aus. Genau deshalb exportiert gantts.app crit, ignoriert es beim Import aber: Die Kritikalität wird aus den Abhängigkeiten neu berechnet, statt einer möglicherweise veralteten Datei geglaubt zu werden.'],
    ['Kann ich ein Mermaid-Gantt-Diagramm bearbeitbar machen?', 'Ja. Öffnen Sie die .mmd- oder die Markdown-Datei in gantts.app, bearbeiten Sie sie visuell und holen Sie sich die aktualisierte Syntax über ⬇ Export ▸ 🧜 Mermaid-Gantt (Text) wieder heraus.'],
  ],
  related: [
    ['gantt-chart-dependencies', 'Die vier Abhängigkeitsarten'],
    ['critical-path-method', 'Der kritische Pfad'],
    ['what-is-a-gantt-chart', 'Was ist ein Gantt-Diagramm?'],
  ],
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
