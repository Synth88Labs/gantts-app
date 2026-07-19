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
    ['Die vier Bausteine', '<p><strong>Vorgänge</strong> sind das Arbeitspaket selbst und haben eine Dauer. <strong>Meilensteine</strong> haben die Dauer null und markieren einen Zeitpunkt: eine Freigabe, eine Übergabe, eine Entscheidung. <strong>Abhängigkeiten</strong> verbinden Vorgänge und legen fest, was worauf wartet. <strong>Sammelbalken</strong> fassen Vorgänge zu Phasen zusammen und übernehmen deren Termine automatisch.</p>\n        <p>Wer diese vier Elemente sauber trennt, hat bereits den Großteil eines belastbaren Plans.</p>'],
    ['Warum die Zeitachse den Unterschied macht', '<p>Eine Aufgabenliste sagt, <em>was</em> zu tun ist. Ein Gantt-Diagramm sagt zusätzlich <em>wann</em> und <em>in welcher Reihenfolge</em>. Damit wird sichtbar, was in einer Liste unsichtbar bleibt: dass drei Aufgaben in derselben Woche liegen und alle dieselbe Person brauchen, oder dass eine Verzögerung am Anfang das Ende um zwei Wochen verschiebt.</p>'],
    ['Abhängigkeiten: der eigentliche Wert', '<p>Der Nutzen eines Gantt-Diagramms steht und fällt mit den Verknüpfungen. Ein Diagramm ohne Abhängigkeiten ist eine bunte Tabelle: Verschiebt sich ein Vorgang, muss alles Nachfolgende von Hand angepasst werden — und genau das passiert in der Praxis nie.</p>\n        <p>Mit Verknüpfungen rechnet der Plan selbst. Sie verschieben einen Balken, und alles, was davon abhängt, rückt mit. Das ist der Unterschied zwischen einem Plan, der lebt, und einem, der nach drei Wochen veraltet in der Ablage liegt.</p>'],
    ['Der kritische Pfad', '<p>Der kritische Pfad ist die längste Kette voneinander abhängiger Vorgänge. Ihre Gesamtdauer bestimmt die Projektdauer. Jeder Verzug auf diesem Pfad verschiebt das Projektende um genau denselben Betrag — Verzögerungen abseits davon oft gar nicht.</p>\n        <p>Das ist die praktisch wichtigste Kennzahl eines Plans: Sie zeigt, wo Aufmerksamkeit wirkt und wo sie verpufft.</p>'],
    ['Wofür sich ein Gantt-Diagramm eignet', '<p>Für Vorhaben mit einem Ende, einer Reihenfolge und mehreren Beteiligten: Bauprojekte, Produkteinführungen, Veranstaltungen, Umzüge, Studien, Einführungen von Software. Überall dort, wo die Frage „was hängt woran" wichtiger ist als „was mache ich als Nächstes".</p>'],
    ['Wo seine Grenzen liegen', '<p>Für laufenden, wiederkehrenden Betrieb ist ein Gantt-Diagramm das falsche Werkzeug — dafür gibt es Kanban. Für ein Team, das in zweiwöchigen Sprints arbeitet und den Umfang bewusst offen hält, ebenfalls.</p>\n        <p>Und es wird unbrauchbar, wenn es zu fein wird: Ein Plan mit 400 Zeilen ist keine Planung mehr, sondern Buchhaltung. Als Faustregel gilt: kein Vorgang kürzer als ein Tag, keiner länger als ein Monat.</p>'],
    ['Woher der Name kommt', '<p>Benannt nach Henry Gantt, der die Darstellung um 1910 populär machte. Entwickelt hatte eine ähnliche Form bereits zwei Jahrzehnte zuvor der Pole Karol Adamiecki, dessen Arbeit im Westen lange unbekannt blieb. Die Darstellung hat also über hundert Jahre überdauert — was selten für eine Methode spricht, die nur Mode wäre.</p>'],
    ['So fangen Sie an', '<p>Schreiben Sie erst alle Vorgänge auf, ohne Termine. Schätzen Sie dann die Dauern. Verknüpfen Sie danach, was wirklich aufeinander wartet — nicht, was zufällig nacheinander im Kalender steht. Setzen Sie zuletzt fünf bis zehn Meilensteine. Termine ergeben sich aus diesen drei Schritten von selbst.</p>'],
  ],
  callout: 'Ein Gantt-Diagramm ohne Abhängigkeiten ist nur eine Tabelle mit Farbe. Der gesamte Nutzen entsteht dadurch, dass der Plan selbst rechnet, wenn sich etwas verschiebt — und in jedem echten Projekt verschiebt sich etwas.',
  faq: [
    ['Was ist ein Gantt-Diagramm einfach erklärt?', 'Ein Balkendiagramm auf einer Zeitachse: Jede Zeile ist ein Vorgang, die Länge des Balkens seine Dauer. Verbindungen zwischen den Balken zeigen, was worauf wartet.'],
    ['Wofür wird ein Gantt-Diagramm verwendet?', 'Für Projekte mit festem Ende, mehreren Beteiligten und Abhängigkeiten zwischen den Arbeitsschritten — Bau, Produkteinführungen, Veranstaltungen, Studien, Softwareeinführungen.'],
    ['Was ist der Unterschied zwischen Gantt-Diagramm und Projektplan?', 'Der Projektplan umfasst Umfang, Budget, Risiken und Ressourcen. Das Gantt-Diagramm ist seine zeitliche Darstellung — ein Teil des Plans, nicht der ganze.'],
    ['Ist ein Gantt-Diagramm noch zeitgemäß?', 'Für Vorhaben mit Reihenfolge und Termin ja. Für laufenden Betrieb oder bewusst offenen Umfang ist Kanban oder ein Sprintboard passender.'],
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
    ['1. Vorgänge sammeln — ohne Termine', '<p>Schreiben Sie zuerst auf, was zu tun ist. Noch keine Daten, keine Reihenfolge, keine Zuständigkeiten. Nur die Arbeit.</p>\n        <p>Die richtige Granularität liegt zwischen einem Tag und einem Monat je Vorgang. Alles Kürzere gehört auf eine Aufgabenliste, alles Längere ist noch keine Aufgabe, sondern eine Phase.</p>'],
    ['2. In Phasen gruppieren', '<p>Fassen Sie die Vorgänge zu vier bis acht Phasen zusammen. Diese Gliederung ist es, die den Plan später lesbar macht — für Sie und für alle, denen Sie ihn zeigen.</p>'],
    ['3. Dauern schätzen', '<p>Schätzen Sie in Arbeitstagen, nicht in Kalendertagen, und schätzen Sie die reine Arbeitszeit — Wartezeiten gehören als eigener Vorgang in den Plan, nicht in die Dauer.</p>\n        <p>Ein bewährter Ansatz: optimistisch, wahrscheinlich und pessimistisch schätzen, dann gewichten. Wer nur einen Wert nennt, nennt fast immer den optimistischen.</p>'],
    ['4. Abhängigkeiten verknüpfen', '<p>Verbinden Sie, was wirklich aufeinander wartet. Der Test: Kann Vorgang B früher beginnen, wenn A schneller fertig wird? Wenn ja, ist die Verknüpfung echt. Wenn nein, haben Sie nur die Reihenfolge im Kalender nachgezeichnet.</p>\n        <p>Verknüpfen Sie nicht alles mit allem. Ein Plan, in dem jeder Vorgang von seinem Vorgänger abhängt, ist eine Kette ohne Parallelität — und meist unrealistisch.</p>'],
    ['5. Meilensteine setzen', '<p>Fünf bis zehn für ein mehrmonatiges Projekt. Ein Meilenstein markiert eine Entscheidung, eine Freigabe oder eine erfüllte Bedingung, nicht das Ende einer beliebigen Aufgabe.</p>'],
    ['6. Ressourcen zuordnen und Auslastung prüfen', '<p>Erst jetzt ordnen Sie Personen zu — und prüfen dann, ob jemand in derselben Woche an drei Vorgängen gleichzeitig arbeiten soll. Diese Überlastung ist der häufigste Grund, warum ein rechnerisch korrekter Plan in der Praxis nicht hält.</p>'],
    ['7. Puffer einplanen und freigeben', '<p>Setzen Sie Puffer dorthin, wo Unsicherheit ist — vor Meilensteine und an das Ende des kritischen Pfads, nicht auf jeden einzelnen Vorgang. Verteilte Puffer verschwinden nach dem Parkinsonschen Prinzip; gebündelte bleiben sichtbar.</p>\n        <p>Zum Schluss gehen Sie den Plan mit den Beteiligten durch. Ein Plan, den nur eine Person kennt, ist kein Plan, sondern eine Meinung.</p>'],
    ['Womit erstellen?', '<p>Für kleine Vorhaben reicht eine Tabellenkalkulation, wird aber ab etwa zwanzig Zeilen mühsam, weil Abhängigkeiten nicht automatisch rechnen. Spezialisierte Werkzeuge nehmen Ihnen das ab — <a href="/de/app.html">gantts.app</a> etwa läuft direkt im Browser, ohne Anmeldung, und speichert lokal auf Ihrem Gerät.</p>'],
    ['Häufigster Fehler zum Schluss', '<p>Zu detailliert planen. Ein Plan mit 300 Zeilen wird nicht gepflegt, und ein ungepflegter Plan ist schlechter als gar keiner, weil ihm noch vertraut wird.</p>'],
    ['Und dann?', '<p>Ein Plan ist kein Dokument, sondern ein Werkzeug. Aktualisieren Sie ihn wöchentlich mit dem Fortschritt, vergleichen Sie ihn mit dem ursprünglichen Stand und passen Sie an, was sich geändert hat.</p>'],
  ],
  callout: 'Beginnen Sie nie mit Terminen. Vorgänge, Dauern und Abhängigkeiten ergeben die Termine von selbst — und ein so entstandener Plan lässt sich verteidigen. Ein Plan, der rückwärts von einem Wunschtermin gebaut wurde, hält der ersten Rückfrage nicht stand.',
  faq: [
    ['Wie erstellt man ein Gantt-Diagramm?', 'Vorgänge sammeln, in Phasen gruppieren, Dauern schätzen, Abhängigkeiten verknüpfen, Meilensteine setzen, Ressourcen zuordnen, Puffer einplanen. Termine ergeben sich daraus.'],
    ['Wie erstelle ich ein Gantt-Diagramm kostenlos?', 'Im Browser, ohne Anmeldung und ohne Installation — etwa mit gantts.app. Alternativ mit einer Tabellenkalkulation, was aber ab etwa zwanzig Vorgängen unhandlich wird.'],
    ['Wie viele Vorgänge sollte ein Gantt-Diagramm haben?', 'So wenige wie möglich, so viele wie nötig. 20 bis 60 Zeilen sind für die meisten Projekte gut lesbar; ab etwa 150 pflegt den Plan niemand mehr.'],
    ['Wie lang sollte ein einzelner Vorgang sein?', 'Zwischen einem Tag und einem Monat. Kürzeres gehört auf eine Aufgabenliste, Längeres ist eine Phase und sollte unterteilt werden.'],
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
    ['Die Grundidee', '<p>Nicht alle Vorgänge sind gleich wichtig für den Termin. Manche haben Luft: Sie können sich verschieben, ohne dass das Projektende wandert. Andere haben keine — und die bilden den kritischen Pfad.</p>\n        <p>Die Methode heißt Critical Path Method, kurz CPM, und stammt aus den späten 1950er-Jahren. Sie beantwortet zwei Fragen: Wie lange dauert das Projekt mindestens, und welche Vorgänge dürfen sich auf keinen Fall verzögern?</p>'],
    ['Vorwärtsrechnung: die frühesten Termine', '<p>Beginnen Sie am Projektstart und gehen Sie vorwärts. Für jeden Vorgang gilt: frühester Anfang (FAZ) ist der späteste frühestmögliche Endtermin aller Vorgänger; frühestes Ende (FEZ) ist FAZ plus Dauer.</p>\n        <p>Am Ende der Vorwärtsrechnung steht die frühestmögliche Projektdauer.</p>'],
    ['Rückwärtsrechnung: die spätesten Termine', '<p>Jetzt gehen Sie vom Projektende zurück. Spätestes Ende (SEZ) ist der früheste spätestmögliche Anfang aller Nachfolger; spätester Anfang (SAZ) ist SEZ minus Dauer.</p>'],
    ['Puffer und der kritische Pfad', '<p>Die Pufferzeit eines Vorgangs ist SAZ minus FAZ. Vorgänge mit Puffer null bilden den kritischen Pfad. Es gibt immer mindestens einen solchen Pfad, und in stark verketteten Plänen häufig mehrere parallele.</p>'],
    ['Ein Beispiel mit vier Vorgängen', '<p>A dauert 3 Tage, B dauert 5 und folgt auf A, C dauert 2 und folgt ebenfalls auf A, D dauert 4 und folgt auf B und C.</p>\n        <p><strong>Vorwärts:</strong> A läuft von Tag 0 bis 3. B von 3 bis 8, C von 3 bis 5. D wartet auf beide, beginnt also bei 8 und endet bei 12. Projektdauer: 12 Tage.</p>\n        <p><strong>Rückwärts:</strong> D muss bei 8 beginnen. B muss also bei 8 fertig sein — spätester Anfang 3, Puffer 0. C muss ebenfalls bei 8 fertig sein, hat aber nur 2 Tage Dauer: spätester Anfang 6, tatsächlicher frühester Anfang 3, <em>Puffer 3 Tage</em>.</p>\n        <p>Der kritische Pfad ist A → B → D. C darf sich um drei Tage verspäten, ohne dass das Projekt später fertig wird.</p>'],
    ['Was das praktisch bedeutet', '<p>Es sagt Ihnen, wo Aufmerksamkeit wirkt. Zusätzliche Leute auf C zu setzen bringt für den Termin nichts. Einen Tag auf B zu sparen bringt einen Tag am Projektende.</p>\n        <p>Und es warnt vor einer Falle: Wenn C sich um vier Tage verspätet, wird C selbst kritisch. Der kritische Pfad ist keine feste Eigenschaft des Plans, sondern eine Momentaufnahme — er wandert, sobald sich etwas verschiebt.</p>'],
  ],
  callout: 'Der kritische Pfad ändert sich während des Projekts. Ein Vorgang mit drei Tagen Puffer, der sich um vier verspätet, wird selbst kritisch. Deshalb rechnet man den Pfad nicht einmal zu Projektbeginn, sondern bei jeder Aktualisierung neu.',
  faq: [
    ['Was ist der kritische Pfad?', 'Die längste Kette abhängiger Vorgänge. Ihre Dauer entspricht der kürzestmöglichen Projektdauer; ihre Vorgänge haben keinen Puffer.'],
    ['Wie berechnet man den kritischen Pfad?', 'Vorwärtsrechnung für die frühesten Termine, Rückwärtsrechnung für die spätesten. Vorgänge, bei denen beide übereinstimmen — Puffer null — bilden den kritischen Pfad.'],
    ['Was ist Pufferzeit?', 'Die Zeit, um die sich ein Vorgang verschieben darf, ohne das Projektende zu verschieben: spätester Anfang minus frühester Anfang.'],
    ['Kann es mehrere kritische Pfade geben?', 'Ja. In stark verketteten Plänen sind mehrere parallele Pfade gleich lang und damit alle kritisch — was das Risiko deutlich erhöht.'],
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
    ['Ende-Anfang (EA)', '<p>Der Standardfall: B beginnt, wenn A fertig ist. „Streichen" beginnt, wenn „Spachteln" abgeschlossen ist. Rund 90 Prozent aller Verknüpfungen in realen Plänen sind von diesem Typ, und das ist gut so — sie ist die einzige Art, die jeder auf Anhieb richtig liest.</p>'],
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

};

const UI = {
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
