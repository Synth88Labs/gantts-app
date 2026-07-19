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
      "<p>Phasen: Planung und Genehmigung, Erdarbeiten, Rohbau, Gebäudehülle, Ausbau, Haustechnik, Abnahme.</p>\n        <p>Auf dem kritischen Pfad liegt fast immer die Genehmigung — nicht das Bauen. Wetterabhängige Vorgänge gehören mit Puffer versehen, und der Innenausbau kann erst beginnen, wenn das Gebäude dicht ist.</p>"
    ],
    [
      "Softwareentwicklung",
      "<p>Phasen: Anforderungen, Architektur, Entwicklung in Iterationen, Integration, Test, Migration, Inbetriebnahme.</p>\n        <p>Hier ist die Falle die Testphase: Sie wird regelmäßig als letzter kurzer Balken geplant und dauert dann doppelt so lang. Test und Fehlerbehebung gehören als Schleife abgebildet, nicht als Einbahnstraße.</p>"
    ],
    [
      "Marketingkampagne",
      "<p>Phasen: Strategie, Konzept, Produktion, Freigaben, Ausspielung, Auswertung.</p>\n        <p>Der Engpass sind die Freigaben. Zwischen fertigem Entwurf und Veröffentlichung liegen in größeren Organisationen regelmäßig zwei Wochen, die niemand einplant.</p>"
    ],
    [
      "Veranstaltung",
      "<p>Phasen: Konzept, Location, Dienstleister, Programm, Anmeldung, Aufbau, Durchführung, Abbau.</p>\n        <p>Der Termin steht fest, also wird rückwärts geplant. Die Location ist der erste und einschränkendste Vorgang.</p>"
    ],
    [
      "Büroumzug",
      "<p>Phasen: Flächensuche, Mietvertrag, Planung, Ausbau, IT-Infrastruktur, Umzug am Wochenende, Nacharbeiten.</p>\n        <p>Die IT bestimmt den Termin, nicht die Möbel. Leitungen und Anschlüsse haben Vorlaufzeiten von Monaten.</p>"
    ],
    [
      "Dissertation",
      "<p>Phasen: Exposé, Literatur, Methodik, Erhebung, Auswertung, Kapitel, Korrektur, Verteidigung.</p>\n        <p>Läuft über Jahre statt Wochen, deshalb Meilensteine alle sechs bis acht Wochen. Ohne sie merkt niemand den Verzug.</p>"
    ],
    [
      "Produkteinführung",
      "<p>Phasen: Marktanalyse, Entwicklung, Verpackung und Zulassung, Vertriebsvorbereitung, Kampagne, Markteintritt, Nachbereitung.</p>\n        <p>Zulassungen und Zertifizierungen liegen häufig auf dem kritischen Pfad und werden fast immer zu kurz geschätzt.</p>"
    ],
    [
      "Einarbeitung neuer Mitarbeitender",
      "<p>Phasen: Vorbereitung vor dem ersten Tag, Woche eins, erster Monat, erste 90 Tage.</p>\n        <p>Ein kurzer Plan, aber einer mit hoher Wirkung — Arbeitsmittel und Zugänge müssen vor dem ersten Tag fertig sein, nicht an ihm.</p>"
    ],
    [
      "Was allen gemeinsam ist",
      "<p>Vier bis acht Phasen, zwischen 20 und 60 Vorgänge, fünf bis zehn Meilensteine. Die Branche ändert die Inhalte, nicht die Struktur.</p>"
    ],
    [
      "Womit anfangen",
      "<p>Nehmen Sie das nächstliegende Beispiel als Ausgangspunkt und passen Sie es an, statt mit einem leeren Blatt zu beginnen. Unsere <a href=\"/de/templates.html\">Vorlagen</a> decken alle acht Fälle ab und lassen sich direkt im Browser öffnen.</p>"
    ]
  ],
  callout: "Kopieren Sie die Phasengliederung, nicht die Termine. Die Phasen einer Branche sind über Projekte hinweg stabil — die Dauern sind es nie. Ein übernommener Zeitplan aus einem fremden Projekt ist die häufigste Ursache für einen Plan, der von Anfang an nicht stimmt.",
  faq: [
    [
      "Wie sieht ein gutes Gantt-Diagramm aus?",
      "Vier bis acht Phasen, 20 bis 60 Vorgänge, fünf bis zehn Meilensteine und echte Abhängigkeiten. Es passt auf eine Seite und lässt sich in einer Minute erklären."
    ],
    [
      "Wie viele Vorgänge sind zu viele?",
      "Ab etwa 150 pflegt den Plan niemand mehr. Dann besser in Teilpläne zerlegen."
    ],
    [
      "Kann man ein fremdes Gantt-Diagramm übernehmen?",
      "Die Gliederung ja, die Dauern nein. Phasen sind übertragbar, Zeitschätzungen sind es nicht."
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
  metaDesc: "Gantt-Diagramm in Excel mit gestapelten Balken: Schritt-für-Schritt-Anleitung, Formatierung und wo die Methode an ihre Grenze stößt.",
  date: "2026-07-19",
  lead: "Excel hat keinen Gantt-Diagrammtyp. Man baut ihn mit einem Trick: einem <strong>gestapelten Balkendiagramm</strong>, dessen erste Reihe unsichtbar gemacht wird. Das funktioniert und ist in zehn Minuten erledigt — hat aber eine klare Grenze.",
  figIntro: "Der Trick in einem Bild: unsichtbarer Vorlauf plus sichtbare Dauer.",
  sections: [
    [
      "Die Daten vorbereiten",
      "<p>Drei Spalten genügen: Vorgang, Startdatum, Dauer in Tagen. Legen Sie zusätzlich eine Hilfsspalte an, die den Abstand vom Projektstart berechnet — also Startdatum minus frühestes Startdatum.</p>"
    ],
    [
      "Das gestapelte Balkendiagramm einfügen",
      "<p>Markieren Sie Vorgang, Abstand und Dauer. Einfügen → Diagramm → Balken → Gestapelte Balken. Sie erhalten zwei Reihen pro Zeile: den Abstand und die Dauer.</p>"
    ],
    [
      "Die erste Reihe unsichtbar machen",
      "<p>Klicken Sie die Abstandsreihe an, dann Füllung → Keine Füllung und Rahmen → Keine Linie. Was übrig bleibt, sieht aus wie ein Gantt-Balken, der an der richtigen Stelle beginnt.</p>"
    ],
    [
      "Die Reihenfolge umkehren",
      "<p>Excel stellt die erste Zeile unten dar. Achse formatieren → Kategorien in umgekehrter Reihenfolge. Damit steht der erste Vorgang oben, wie man es erwartet.</p>"
    ],
    [
      "Datumsachse korrigieren",
      "<p>Die horizontale Achse zeigt zunächst Zahlen. Setzen Sie Minimum und Maximum auf die seriellen Datumswerte von Projektstart und -ende und formatieren Sie die Achse als Datum.</p>"
    ],
    [
      "Feinschliff",
      "<p>Balkenabstand auf etwa 20 Prozent reduzieren, Gitternetzlinien dezent halten, Phasen farblich gruppieren. Meilensteine lassen sich als zusätzliche Datenreihe mit Rautenmarkierung ergänzen.</p>"
    ],
    [
      "Wo die Methode endet",
      "<p>Excel kennt keine Abhängigkeiten. Verschiebt sich ein Vorgang, müssen Sie jedes nachfolgende Startdatum von Hand anpassen — und genau das unterbleibt in der Praxis nach der zweiten Änderung.</p>\n        <p>Ebenfalls nicht vorhanden: kritischer Pfad, Ressourcenauslastung, Prozentangaben zum Fortschritt. Bis etwa zwanzig Vorgänge ist Excel eine vernünftige Wahl. Darüber hinaus kostet die Handpflege mehr Zeit, als das Werkzeug spart — <a href=\"/de/app.html\">gantts.app</a> rechnet die Verschiebungen selbst und läuft ebenfalls ohne Installation.</p>"
    ]
  ],
  callout: "Der entscheidende Unterschied ist nicht das Aussehen, sondern das Rechnen. Ein Excel-Gantt sieht richtig aus, aktualisiert sich aber nicht. Sobald sich Termine ändern — und sie ändern sich immer — wird aus einem Plan eine Zeichnung.",
  faq: [
    [
      "Hat Excel einen Gantt-Diagrammtyp?",
      "Nein. Man erstellt ihn mit einem gestapelten Balkendiagramm, dessen erste Datenreihe unsichtbar formatiert wird."
    ],
    [
      "Kann Excel Abhängigkeiten abbilden?",
      "Nicht automatisch. Verschiebungen müssen für jeden Nachfolger von Hand nachgetragen werden."
    ],
    [
      "Bis zu welcher Größe eignet sich Excel?",
      "Bis etwa zwanzig Vorgänge. Darüber übersteigt der Pflegeaufwand den Nutzen deutlich."
    ],
    [
      "Gibt es eine Gantt-Vorlage für Excel?",
      "Ja — unsere Vorlagen lassen sich als XLSX herunterladen und enthalten die Hilfsspalten bereits."
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
  metaDesc: "Drei Wege zum Gantt-Diagramm in Google Sheets: gestapelte Balken, die native Zeitachsen-Ansicht und bedingte Formatierung.",
  date: "2026-07-19",
  lead: "Google Sheets bietet drei Wege zu einem <strong>Gantt-Diagramm</strong>, und sie unterscheiden sich stärker, als man erwartet: einen Diagramm-Trick, eine eingebaute Zeitachsen-Ansicht und eine Variante ganz ohne Diagramm.",
  figIntro: "Drei Wege, je nach dem, was Sie brauchen:",
  sections: [
    [
      "Weg 1: gestapeltes Balkendiagramm",
      "<p>Dasselbe Prinzip wie in Excel. Spalten für Vorgang, Abstand zum Projektstart und Dauer; dann Einfügen → Diagramm → Gestapeltes Balkendiagramm und die Abstandsreihe auf transparent setzen.</p>\n        <p>Vorteil: Es ist ein echtes Diagramm und lässt sich exportieren. Nachteil: keine Abhängigkeiten, wie überall in Tabellenkalkulationen.</p>"
    ],
    [
      "Weg 2: die native Zeitachsen-Ansicht",
      "<p>Seit einiger Zeit gibt es in Google Sheets unter Einfügen → Zeitachse eine eingebaute Ansicht. Sie erwartet Spalten mit Startdatum, Enddatum und Bezeichnung und erzeugt daraus eine interaktive Zeitleiste mit Karten.</p>\n        <p>Das ist der bequemste Weg für einen groben Überblick und braucht keinerlei Tricks. Für einen Projektplan mit Abhängigkeiten und kritischem Pfad ist es allerdings nicht gedacht.</p>"
    ],
    [
      "Weg 3: bedingte Formatierung",
      "<p>Ohne Diagramm: Legen Sie eine Spalte je Tag oder Woche an und färben Sie die Zellen per bedingter Formatierung ein, wenn das Datum zwischen Start und Ende liegt. Das Ergebnis ist ein Raster, das sich wie ein Gantt liest und direkt in der Tabelle lebt.</p>\n        <p>Praktisch für kurze Zeiträume, unübersichtlich ab etwa einem Quartal.</p>"
    ],
    [
      "Welcher Weg wofür",
      "<p>Zeitachsen-Ansicht für den schnellen Überblick, gestapelte Balken für ein Diagramm zum Weitergeben, bedingte Formatierung für einen Plan, der in der Tabelle bleibt.</p>"
    ],
    [
      "Die gemeinsame Grenze",
      "<p>Keiner der drei Wege kennt Abhängigkeiten. Der Vorteil von Sheets ist die gemeinsame Bearbeitung in Echtzeit — wenn Sie die brauchen und der Plan klein ist, ist Sheets eine gute Wahl. Sobald der Plan selbst rechnen soll, brauchen Sie ein Planungswerkzeug.</p>"
    ]
  ],
  callout: "Die native Zeitachsen-Ansicht ist kein Gantt-Diagramm, auch wenn sie so aussieht. Sie stellt Zeiträume dar, kennt aber weder Verknüpfungen noch einen kritischen Pfad. Für eine Übersicht reicht das; für einen Terminplan, der Verschiebungen selbst nachzieht, nicht.",
  faq: [
    [
      "Hat Google Sheets eine Gantt-Funktion?",
      "Es gibt eine eingebaute Zeitachsen-Ansicht unter Einfügen → Zeitachse. Sie zeigt Zeiträume, unterstützt aber keine Abhängigkeiten."
    ],
    [
      "Wie erstelle ich ein Gantt-Diagramm in Google Sheets?",
      "Am flexibelsten mit einem gestapelten Balkendiagramm, dessen erste Datenreihe transparent formatiert wird."
    ],
    [
      "Kann man in Google Sheets gemeinsam am Plan arbeiten?",
      "Ja, das ist der größte Vorteil gegenüber Excel — mehrere Personen bearbeiten dieselbe Datei in Echtzeit."
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
  metaDesc: "Gantt-Diagramm in PowerPoint auf zwei Wegen: als gestapeltes Balkendiagramm oder aus Formen — mit Vor- und Nachteilen beider Methoden.",
  date: "2026-07-19",
  lead: "In PowerPoint entsteht ein <strong>Gantt-Diagramm</strong> auf zwei Wegen: als Diagramm mit Datenblatt oder von Hand aus Rechtecken. Welcher richtig ist, hängt allein davon ab, ob sich die Daten noch ändern werden.",
  figIntro: "Zwei Wege, zwei sehr unterschiedliche Arbeitsweisen:",
  sections: [
    [
      "Weg 1: gestapeltes Balkendiagramm",
      "<p>Einfügen → Diagramm → Balken → Gestapelte Balken. PowerPoint öffnet ein kleines Excel-Blatt. Tragen Sie dort Vorgang, Abstand und Dauer ein und formatieren Sie die Abstandsreihe transparent — dieselbe Technik wie in Excel.</p>\n        <p>Vorteil: Die Balken bleiben datengebunden. Ändert sich eine Dauer, ändert sich der Balken. Nachteil: Die gestalterische Freiheit ist begrenzt.</p>"
    ],
    [
      "Weg 2: aus Formen bauen",
      "<p>Zeichnen Sie eine Zeitachse und legen Sie je Vorgang ein abgerundetes Rechteck darauf. Verwenden Sie die Ausrichtungshilfen und ein Raster, damit die Balken exakt zur Achse passen.</p>\n        <p>Vorteil: volle Kontrolle über Gestaltung, Beschriftung und Animation. Nachteil: Jede Änderung ist Handarbeit, und die Balkenlängen stimmen nur so genau, wie Sie sie ziehen.</p>"
    ],
    [
      "Wann welcher Weg",
      "<p>Formen, wenn der Plan feststeht und die Folie einer Präsentation dient. Diagramm, wenn die Zahlen sich noch bewegen. Für eine Vorstandsfolie mit fünf Phasen ist der Formen-Weg fast immer der schnellere.</p>"
    ],
    [
      "Gestaltung für die Leinwand",
      "<p>Eine Folie verträgt sechs bis zehn Balken, nicht vierzig. Reduzieren Sie auf Phasenebene und heben Sie höchstens drei Meilensteine hervor. Was auf einer Projektionsfläche aus zehn Metern lesbar sein muss, verträgt keine Detailplanung.</p>"
    ],
    [
      "Der praktische Weg",
      "<p>Am schnellsten geht es, den Plan dort zu pflegen, wo er lebt, und ihn für die Folie zu exportieren. Unsere <a href=\"/de/templates/powerpoint.html\">PowerPoint-Vorlage</a> liefert eine fertig formatierte Folie, in die Sie nur noch Ihre Vorgänge eintragen.</p>"
    ],
    [
      "Häufigster Fehler",
      "<p>Den vollständigen Projektplan auf eine Folie zwingen. Präsentation und Planung haben unterschiedliche Detailgrade — die Folie zeigt die Geschichte, der Plan zeigt die Arbeit.</p>"
    ]
  ],
  callout: "Eine Präsentationsfolie ist kein Projektplan. Zeigen Sie Phasen und die drei Meilensteine, auf die es ankommt. Wer vierzig Zeilen auf eine Folie presst, erreicht nur, dass niemand hinsieht.",
  faq: [
    [
      "Wie erstelle ich ein Gantt-Diagramm in PowerPoint?",
      "Entweder als gestapeltes Balkendiagramm mit transparenter erster Reihe oder von Hand aus Rechtecken auf einer gezeichneten Zeitachse."
    ],
    [
      "Welcher Weg ist besser?",
      "Formen für feststehende Pläne und volle Gestaltungsfreiheit, Diagramm für Daten, die sich noch ändern."
    ],
    [
      "Wie viele Vorgänge passen auf eine Folie?",
      "Sechs bis zehn. Alles darüber ist aus dem Publikum nicht mehr lesbar."
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
  metaDesc: "Kostenlose Gantt-Software im Vergleich: was dauerhaft gratis ist, was Freemium mit Grenzen und worauf Sie vor der Auswahl achten sollten.",
  date: "2026-07-19",
  lead: "Der Begriff <strong>kostenlos</strong> bedeutet bei Projektsoftware dreierlei: dauerhaft gratis, gratis bis zu einer Grenze, oder gratis für eine Testphase. Der Unterschied fällt meistens erst auf, wenn das Projekt schon läuft.",
  figIntro: "Drei Bedeutungen von „kostenlos\", die man vorher kennen sollte:",
  sections: [
    [
      "Die drei Arten von „kostenlos\"",
      "<p><strong>Dauerhaft kostenlos</strong> heißt: voller Funktionsumfang, keine Nutzerbegrenzung, kein Ablaufdatum. Selten, und meist bei Werkzeugen ohne Serverkosten — also solchen, die im Browser rechnen statt in der Cloud.</p>\n        <p><strong>Freemium</strong> heißt: kostenlos bis zu einer Grenze. Üblich sind drei bis fünf Nutzer, zwei Projekte oder eine Obergrenze an Vorgängen. Beim Überschreiten wird der Plan kostenpflichtig, und dann liegen die Daten bereits dort.</p>\n        <p><strong>Testphase</strong> heißt: alles frei für 14 oder 30 Tage. Das ist keine kostenlose Software, sondern eine Probe.</p>"
    ],
    [
      "Worauf es bei der Auswahl ankommt",
      "<p>Vier Fragen klären fast jede Entscheidung. <em>Rechnet das Werkzeug Abhängigkeiten?</em> Ohne das ist es ein Zeichenprogramm. <em>Zeigt es den kritischen Pfad?</em> <em>Kommen die Daten wieder heraus</em> — als CSV, XLSX oder Projektdatei? <em>Wo liegen die Daten?</em> Das ist bei personenbezogenen Projektdaten keine Nebenfrage.</p>"
    ],
    [
      "Die Anmeldefrage",
      "<p>Die meisten kostenlosen Werkzeuge verlangen ein Konto, bevor man den ersten Balken sieht. Das ist selten technisch nötig — es ist der Preis. Werkzeuge, die vollständig im Browser laufen und lokal speichern, brauchen weder Konto noch Server, weil nichts hochgeladen wird.</p>\n        <p><a href=\"/de/app.html\">gantts.app</a> arbeitet so: keine Anmeldung, keine Übertragung, der Plan bleibt auf Ihrem Gerät. Das ist zugleich die Antwort auf die Datenschutzfrage — was das Gerät nicht verlässt, muss auch nicht vertraglich geregelt werden.</p>"
    ],
    [
      "Und wann sich Bezahlsoftware lohnt",
      "<p>Wenn mehrere Personen gleichzeitig am selben Plan arbeiten, wenn Ressourcen über viele Projekte hinweg geplant werden oder wenn Berichtspflichten gegenüber Auftraggebern bestehen. Für einen einzelnen Plan mit dreißig Vorgängen ist bezahlte Projektsoftware fast immer überdimensioniert.</p>"
    ]
  ],
  callout: "Prüfen Sie den Export, bevor Sie anfangen. Ein Werkzeug, aus dem die Daten nicht in einem offenen Format herauskommen, ist unabhängig vom Preis teuer — der Wechsel kostet dann die Arbeit, den Plan noch einmal zu bauen.",
  faq: [
    [
      "Welche Gantt-Software ist wirklich kostenlos?",
      "Werkzeuge ohne Serverkosten — solche, die im Browser rechnen und lokal speichern — können dauerhaft kostenlos sein. Cloud-Dienste sind fast immer Freemium."
    ],
    [
      "Braucht kostenlose Gantt-Software eine Anmeldung?",
      "Die meisten ja, technisch nötig ist es aber nur bei serverbasierten Diensten. Rein clientseitige Werkzeuge kommen ohne Konto aus."
    ],
    [
      "Worauf sollte man bei der Auswahl achten?",
      "Abhängigkeiten, kritischer Pfad, Exportformate und der Speicherort der Daten. Alles andere ist Komfort."
    ],
    [
      "Ist kostenlose Software für Unternehmen geeignet?",
      "Für einzelne Pläne ja. Für gemeinsame Bearbeitung, projektübergreifende Ressourcenplanung und Berichtspflichten meist nicht."
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
      "<p>Prozentangaben zum Fortschritt sind notorisch unzuverlässig; „90 Prozent fertig\" ist die häufigste Angabe in jedem Projekt und bleibt es wochenlang. Belastbarer ist die Frage nach der Restdauer: Wie viele Tage brauchen Sie noch? Diese Zahl lässt sich prüfen.</p>"
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
      "<p>Ein Meilenstein hat die Dauer null. „Testphase\" ist kein Meilenstein, „Tests abgenommen\" schon. <strong>Korrektur:</strong> Meilensteine als Ergebnis formulieren, nicht als Tätigkeit.</p>"
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
      "<p>Ein Vorgang hat eine Dauer: Er beginnt an einem Tag und endet an einem anderen. Ein Meilenstein hat die Dauer null und wird als Raute dargestellt. „Vertrag aufsetzen\" ist ein Vorgang; „Vertrag unterzeichnet\" ist ein Meilenstein.</p>"
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
  lead: 'Eine Prozentangabe allein sagt fast nichts. Sechzig Prozent fertig ist in Woche zwei hervorragend und in Woche neun eine Katastrophe. Eine <strong>S-Kurve</strong> behebt das, indem sie die kumulierte Planleistung über die Zeit aufträgt: Aus „wie weit sind wir" wird „wie weit hätten wir <em>sein sollen</em>" — und der Abstand zwischen den beiden Linien ist die Antwort.',
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
        <p>Deshalb lässt gantts.app die Kostenkennzahlen leer, bis Sie einen echten Wert unter „Ausgegeben" eintragen. Die Terminkennzahlen — SV und SPI — funktionieren weiterhin, denn dafür genügen Termine und Fortschritt. Eine fehlende Zahl ist ehrlich. Eine selbstbewusst falsche ist es nicht.</p>
        <p>Aus demselben Grund wird die Ist-Kurve für die Vergangenheit rekonstruiert statt aufgezeichnet: Das Werkzeug speichert Ihren Fortschritt so, wie er heute ist, nicht die Historie jeder früheren Meldung. Für den heutigen Tag, an dem die Zahlen abgelesen werden, ist sie exakt, dahinter näherungsweise — und sie sagt das in der Ansicht selbst, nicht in einer Fußnote.</p>`],

    ['Ein Budget ist keine Voraussetzung', `<p>Die meisten Pläne enthalten überhaupt keine Kosten, und eine S-Kurve, die welche verlangt, ist eine S-Kurve, die niemand zeichnet.</p>
        <p>Ist bei keinem Vorgang ein Betrag hinterlegt, gewichtet gantts.app jeden Vorgang stattdessen nach seiner Dauer in Arbeitstagen. Die Form bleibt dieselbe, die Achse liest sich in Prozent statt in Euro — eine reine Fortschrittskurve. Tragen Sie später Kosten nach, wird ohne weiteres Zutun eine Wertkurve daraus.</p>
        <p>Eines ist allerdings entscheidend: <strong>Setzen Sie einen Basisplan</strong>. Ohne ihn kann „geplant" nur Ihre aktuellen Termine bedeuten, und die enthalten bereits jeden bisherigen Verzug. Die Terminabweichung stünde dauerhaft auf null — eine sehr beruhigende und vollkommen nutzlose Auskunft. Basisplan ▸ Basisplan setzen, einmal, sobald der Plan freigegeben ist.</p>`],

    ['So erstellen Sie eine S-Kurve hier', `<ol>
          <li>Bauen oder importieren Sie Ihren Terminplan und bringen Sie die Termine grob in Ordnung.</li>
          <li><strong>Basisplan ▸ Basisplan setzen</strong>, sobald der Plan freigegeben ist. Das friert die Bedeutung von „geplant" ein.</li>
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
    ['Warum wird kein CPI angezeigt?', 'Weil keine Ist-Kosten erfasst sind. Der CPI braucht echte Ausgaben; würde man ihn aus dem Fortschritt ableiten, ergäbe er für jedes Projekt exakt 1,00. Tragen Sie bei den Vorgängen „Ausgegeben" ein, und er erscheint.'],
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
        <p>Es gibt sie, weil Gesamtterminplan und Arbeitsplanung zwei verschiedene Dokumente mit zwei verschiedenen Aufgaben sind. Der Terminplan beantwortet „werden wir rechtzeitig fertig", die Vorschau beantwortet „was passiert am Dienstag, und hat jemand den Stahl bestellt". Der Versuch, eine Baubesprechung mit einem zweihundertzeiligen Programm zu führen, ist der Grund, warum es in A0 gedruckt und danach ignoriert wird.</p>
        <p>In der Sprache des Last Planner Systems ist die Vorschau der Ort, an dem <em>Randbedingungen</em> auffallen: Die Arbeit ist nah genug, dass man fragen kann, ob Genehmigung, Material, Kolonne und Vorgewerk tatsächlich da sein werden.</p>`],

    ['Überlappung statt Enthaltensein — das Detail, das fast alle falsch machen', `<p>Hier ist die Regel, die eine Vorschau richtig macht, und genau die, an der von Hand gebaute Tabellen am häufigsten scheitern.</p>
        <p>Ein Vorgang gehört in das Fenster, wenn er es <strong>überlappt</strong> — nicht, wenn er vollständig hineinpasst. Das achtmonatige Gründungspaket, das im März begonnen hat und bis November läuft, findet gerade jetzt statt, und es ist genau die Arbeit, die das Baustellenteam vor Augen haben muss. Filtern Sie auf Vorgänge, die innerhalb der drei Wochen beginnen <em>und</em> enden, verlieren Sie jede langlaufende Tätigkeit auf der Baustelle — und behalten eine Vorschau, die aufgeräumt aussieht und ein Projekt beschreibt, an dem niemand arbeitet.</p>
        <p>Die Prüfung besteht aus zwei Vergleichen, nicht aus vieren:</p>
        <p><code>Vorgang.Start ≤ Fenster.Ende &nbsp;UND&nbsp; Vorgang.Ende ≥ Fenster.Start</code></p>
        <p>Das ist die ganze Regel, und gantts.app wendet exakt sie an.</p>`],

    ['Warum das Fenster auf Montag liegt', `<p>Die Vorschau ist ein wöchentliches Ritual an einer wöchentlichen Besprechung. Ein Fenster von Donnerstag bis Donnerstag würde die Arbeitswoche mitten durchschneiden und wäre für jeden Leser wertlos.</p>
        <p>Deshalb rastet das Fenster immer auf den Wochenanfang zurück. Öffnen Sie das Werkzeug an einem Mittwoch, erhalten Sie das Fenster, das am Montag begonnen hat, und keinen Dreiwochenblock ab Wochenmitte. Die Pfeile schieben es wochenweise weiter, wenn Sie länger vorausschauen wollen, und „Diese Woche" bringt es zurück.</p>`],

    ['Erzeugen statt abtippen', `<p>An Vorlagen für die 3-Wochen-Vorschau herrscht kein Mangel — Smartsheet veröffentlicht eine, ein halbes Dutzend anderer ebenfalls, und für Bauvorhaben der US Navy gibt es sogar ein Standardformat. Jede einzelne davon ist ein leeres Raster, das Sie von Hand ausfüllen.</p>
        <p>Das ist das eigentliche Problem. Die Antwort steckt bereits im Terminplan; die wöchentliche Arbeit besteht im Abschreiben, und aus dem Abschreiben kommen die Fehler und die Veralterung. Ein Vorgang wird vergessen, oder der Gesamtplan wird geändert und die Vorschau nicht — und schon widersprechen sich beide Dokumente stillschweigend.</p>
        <p>In gantts.app ist die Vorschau eine <em>Ansicht</em> derselben Daten:</p>
        <ol>
          <li>Stellen Sie <strong>Ansicht</strong> auf <strong>Vorschau</strong>.</li>
          <li>Wählen Sie das Fenster — 1, 2, 3, 4, 6 oder 8 Wochen.</li>
          <li>Schieben Sie es mit den Pfeilen weiter oder springen Sie mit „Diese Woche" zu heute zurück.</li>
          <li>Exportieren Sie als PDF oder PNG für die Wand, oder als Excel für die Besprechung.</li>
        </ol>
        <p>Das Diagramm zoomt auf das Fenster, sodass drei Wochen lesbar sind statt zu einem Streifen auf einer Achse über achtzehn Monate zusammengedrückt. Ein Band am oberen Rand nennt das gewählte Fenster und die Zahl der ausgeblendeten Vorgänge, denn ein gefiltertes Diagramm, das seine Filterung nicht ausweist, liest sich wie ein Plan mit fehlenden Vorgängen.</p>
        <p>Ändern Sie ein Datum im Gesamtplan, stimmt die Vorschau bereits. Es gibt nichts erneut abzuschreiben.</p>`],

    ['Ein brauchbares Dokument, nicht nur ein Filter', `<ul>
          <li><strong>Auf jede Zeile gehört ein Name.</strong> Eine Vorschau ohne Verantwortliche je Vorgang ist eine Liste von Hoffnungen. Schalten Sie die Spalte für die Zuständigkeit ein.</li>
          <li><strong>Gliedern Sie die nahe Arbeit feiner als die ferne.</strong> Ein Vorgang „Ausbau erstes Obergeschoss — 6 Wochen" ist im Terminplan in Ordnung und in einer Vorschau nutzlos. Teilen Sie ihn auf, während er näher rückt.</li>
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
          <li><strong>Kein Fortschritt in Prozent.</strong> Nur <code>done</code> und <code>active</code>. Ein Vorgang mit 40 Prozent und einer mit 90 Prozent sind beide schlicht „active".</li>
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
    ['Wie schreibt man ein Gantt-Diagramm in Mermaid?', 'Beginnen Sie den Block mit gantt, ergänzen Sie dateFormat YYYY-MM-DD und darunter section-Überschriften mit Vorgangszeilen der Form „Name :tag, id, start, dauer" — zum Beispiel „Recherche :done, rec, 2026-01-05, 5d".'],
    ['Schließt 5d in Mermaid den Starttag ein?', 'Ja. Ein Vorgang mit 5d ab Montag, dem 5., endet am Freitag, dem 9. Diese einschließende Zählweise ist die häufigste Ursache für Fehler um einen Tag.'],
    ['Wie funktionieren Abhängigkeiten in Mermaid gantt?', 'Über „after eineId" im Startfeld. Es ist immer eine Ende-Anfang-Verknüpfung ohne Zeitabstand — Anfang-Anfang, Ende-Ende und Abstände lassen sich nicht ausdrücken.'],
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
