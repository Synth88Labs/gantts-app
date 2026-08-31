/* takeaways.js, GEO/AEO "key takeaways" answer-first block for guides.

   ONE source of truth for all 6 languages. Read by three render sites so the
   block is identical everywhere (see [[content-generation-split]]):
     - scripts/gen-guide-pages.js   → generated English guides
     - scripts/gen-i18n.js          → localized guides (es/fr/de/pt/zh)
     - scripts/inject-takeaways.js  → hand-authored English guides (static HTML)

   Why: AI answer engines (Google AI Overviews, ChatGPT, Perplexity, Copilot)
   and featured snippets preferentially quote a short, self-contained answer
   near the top of a page. Each bullet is one factual, extractable sentence.
   The block carries id="key-takeaways", the Speakable cssSelector points at it.

   Content is authored per language (not machine-translated) to match the
   site's quality bar. `render()` returns '' when a guide/lang has no data, so
   partial coverage degrades gracefully. Each per-language map is SLUG → array;
   translators fill ES/FR/DE/PT/ZH to mirror the EN keys. */

const HEADING = {
  en: 'Key takeaways', es: 'Puntos clave', fr: 'Points clés',
  de: 'Das Wichtigste in Kürze', pt: 'Principais conclusões', zh: '要点',
};

const EN = {
  'what-is-a-gantt-chart': [
    'A Gantt chart is a horizontal bar chart that plots project tasks against a timeline, each bar shows when a task starts, how long it runs, and when it ends.',
    'It makes overlaps, dependencies, and the overall schedule visible at a glance, which a plain to-do list or calendar cannot.',
    'It is named after Henry Gantt, who popularised it in the 1910s; it is now the default schedule view in project management.',
    'Modern Gantt charts layer dependencies, milestones, % complete, and the critical path on top of the basic bars.',
  ],
  'how-to-make-a-gantt-chart': [
    'List your tasks, then give each one a start date and a duration, that alone produces a working Gantt chart.',
    'Link dependent tasks (finish-to-start is the most common link) so the timeline reflows automatically when a date changes.',
    'Add milestones for fixed dates like kickoff or launch, and set % complete to track progress against the plan.',
    'You can build one in a spreadsheet, but a dedicated maker like gantts.app handles dependencies and the critical path for you, free and with no sign-up.',
  ],
  'critical-path-method': [
    'The critical path is the longest chain of dependent tasks, and its length equals the shortest time in which the project can finish.',
    'Delaying any task on the critical path delays the whole project; tasks off it have float (slack) and can slip without moving the end date.',
    'You find it with a forward and backward pass that gives each task an earliest and latest start/finish, then isolating the zero-float chain.',
    'gantts.app recalculates and highlights the critical path automatically as you add or change dependencies.',
  ],
  'gantt-chart-dependencies': [
    'A dependency links two tasks so one cannot start (or finish) until the other does, it is what turns a task list into a real schedule.',
    'Finish-to-start (FS) is by far the most common type; start-to-start, finish-to-finish, and start-to-finish cover the rest.',
    'Lead time pulls a successor earlier; lag time pushes it later, use them instead of padding durations.',
    'With dependencies in place, moving one task automatically reschedules everything downstream.',
  ],
  'milestones-vs-tasks': [
    'A task is work that takes time and has a duration; a milestone is a zero-duration marker for a key moment such as an approval or a launch.',
    'Milestones do not consume effort, they flag that something important has been reached or is due.',
    'Use milestones for phase gates, deliverable deadlines, and external commitments you want to spot instantly on the timeline.',
    'A good plan mixes both: tasks show the work, milestones show the checkpoints that matter to stakeholders.',
  ],
  's-curve-project-management': [
    'An S-curve plots cumulative progress (cost, hours, or % complete) over time, and typically forms an S shape: slow start, steep middle, tapering end.',
    'Comparing the planned S-curve against the actual one shows at a glance whether the project is ahead of or behind schedule.',
    'A gap that widens over time signals a systemic problem, not a one-off slip.',
    'S-curves underpin earned-value metrics and are a standard way to report progress to sponsors.',
  ],
  'gantt-baseline-variance': [
    'A baseline is a frozen snapshot of your original schedule; variance is the difference between that plan and where things actually stand.',
    'Set the baseline once the plan is approved, before work starts, so later slippage can be measured against it.',
    'Positive schedule variance means ahead of plan; negative means behind. The same idea applies to cost.',
    'Without a baseline you can see today’s dates but not how far they have drifted from what you promised.',
  ],
  '3-week-lookahead-schedule': [
    'A three-week lookahead is a short, rolling slice of the master schedule covering roughly the next 15 working days.',
    'It surfaces what must be ready, approvals, materials, crews, so blockers are cleared before they stall the work.',
    'It is updated weekly, dropping the completed week and adding a new one, which keeps the team focused on the near term.',
    'It is common in construction and lean/last-planner workflows but works for any project with many moving parts.',
  ],
  'gantt-chart-mistakes': [
    'The most common mistake is a task list with no dependencies, dates then do not move when reality changes.',
    'Over-detailing (hundreds of tiny tasks) makes a chart no one maintains; keep tasks at a manageable grain.',
    'Ignoring the critical path means you cannot tell which delays actually threaten the deadline.',
    'Never setting a baseline leaves you with no way to measure slippage against the original plan.',
  ],
  'mermaid-gantt-chart': [
    'Mermaid is a text-based syntax that renders a Gantt chart from plain code, so the chart lives in Markdown, docs, or a Git repo.',
    'You define sections, tasks, dates or durations, and dependencies with simple keywords, no drag-and-drop.',
    'It is ideal for developers and documentation because it diffs and version-controls like any other text.',
    'For richer editing and exports, gantts.app can turn a visual plan into Mermaid text and back.',
  ],
  'gantt-chart-examples': [
    'The same Gantt structure adapts to construction schedules, software sprints, event plans, marketing calendars, and research timelines.',
    'Every example shares the core parts: phased tasks, durations, dependencies, milestones, and owners.',
    'Starting from an example close to your project is faster than a blank canvas, you adjust rather than invent.',
    'gantts.app ships 100+ ready-made examples you can open and edit in the browser for free.',
  ],
  'gantt-chart-in-excel': [
    'Excel has no native Gantt chart, but you can fake one with a stacked horizontal bar chart that hides the "start" series.',
    'It works for a static, small plan, but Excel does not model dependencies or a critical path, so dates will not reflow.',
    'Maintaining bar formulas and conditional formatting by hand gets fragile as the plan grows.',
    'A dedicated maker like gantts.app gives you dependencies and exports back to Excel, without the manual charting.',
  ],
  'gantt-chart-in-google-sheets': [
    'Google Sheets can approximate a Gantt chart with a stacked bar chart or conditional-formatting formulas across date columns.',
    'It is free and collaborative, but like Excel it has no dependencies, milestones, or automatic critical path.',
    'The formula approach breaks down once you have many tasks or shifting dates.',
    'gantts.app builds a real Gantt chart in the browser and exports to Sheets-friendly formats, no formulas to maintain.',
  ],
  'gantt-chart-in-powerpoint': [
    'PowerPoint Gantt charts are drawn by hand from shapes or SmartArt, fine for a one-slide summary, not for live planning.',
    'They do not calculate anything: every date change means moving boxes manually.',
    'Use them to present a schedule to stakeholders, not to manage it day to day.',
    'gantts.app exports a polished Gantt chart straight to PowerPoint, so you plan in the tool and present from the slide.',
  ],
  'best-free-gantt-chart-software': [
    'The best free Gantt tool is the one that handles dependencies and the critical path without paywalling exports.',
    'Watch for common limits on free tiers: task caps, no export, watermarks, or a required account.',
    'Browser-based tools avoid installs and keep your data on your own device when they run client-side.',
    'gantts.app is free with no sign-up, no task limit, and no watermark on PDF, Excel, or PowerPoint exports.',
  ],
};

// Filled by native-language passes; keys mirror EN. Empty is fine, render()
// falls back to '' for any missing slug/lang.
const ES = {
  'what-is-a-gantt-chart': [
    'Un diagrama de Gantt es un gráfico de barras horizontales que sitúa las tareas de un proyecto sobre una línea de tiempo: cada barra muestra cuándo empieza una tarea, cuánto dura y cuándo termina.',
    'Deja ver de un vistazo los solapamientos, las dependencias y el calendario completo, algo que una simple lista de tareas o un calendario no consiguen.',
    'Lleva el nombre de Henry Gantt, que lo popularizó en la década de 1910, y hoy es la vista de calendario por defecto en la gestión de proyectos.',
    'Los diagramas de Gantt modernos añaden dependencias, hitos, porcentaje de avance y la ruta crítica sobre las barras básicas.',
  ],
  'how-to-make-a-gantt-chart': [
    'Enumera tus tareas y dale a cada una una fecha de inicio y una duración: con eso solo ya tienes un diagrama de Gantt que funciona.',
    'Enlaza las tareas dependientes, el enlace fin-inicio es el más habitual, para que el calendario se recalcule solo cuando cambia una fecha.',
    'Añade hitos para las fechas fijas, como el arranque o el lanzamiento, y marca el porcentaje de avance para seguir el progreso frente al plan.',
    'Puedes construirlo en una hoja de cálculo, pero una herramienta específica como gantts.app gestiona por ti las dependencias y la ruta crítica, gratis y sin registro.',
  ],
  'critical-path-method': [
    'La ruta crítica es la cadena más larga de tareas dependientes, y su longitud equivale al tiempo mínimo en que el proyecto puede terminar.',
    'Retrasar cualquier tarea de la ruta crítica retrasa todo el proyecto; las que quedan fuera tienen holgura y pueden desplazarse sin mover la fecha de fin.',
    'Se calcula con una pasada adelante y otra atrás que asignan a cada tarea su inicio y fin más tempranos y más tardíos, para luego aislar la cadena de holgura cero.',
    'gantts.app recalcula y resalta la ruta crítica automáticamente a medida que añades o cambias dependencias.',
  ],
  'gantt-chart-dependencies': [
    'Una dependencia enlaza dos tareas de modo que una no puede empezar (o terminar) hasta que la otra lo haga: es lo que convierte una lista de tareas en un calendario de verdad.',
    'El tipo fin-inicio (FS) es con diferencia el más habitual; inicio-inicio, fin-fin e inicio-fin cubren el resto.',
    'El adelanto acerca a la sucesora en el tiempo y el desfase la empuja hacia atrás: úsalos en lugar de inflar las duraciones.',
    'Con las dependencias puestas, mover una tarea reprograma automáticamente todo lo que va por detrás.',
  ],
  'milestones-vs-tasks': [
    'Una tarea es trabajo que lleva tiempo y tiene duración; un hito es un marcador de duración cero para un momento clave, como una aprobación o un lanzamiento.',
    'Los hitos no consumen esfuerzo: señalan que algo importante se ha alcanzado o está por vencer.',
    'Usa los hitos para las barreras de fase, los plazos de entrega y los compromisos externos que quieras localizar al instante en la línea de tiempo.',
    'Un buen plan combina ambos: las tareas muestran el trabajo y los hitos muestran los puntos de control que importan a las partes interesadas.',
  ],
  's-curve-project-management': [
    'Una curva S representa el avance acumulado (coste, horas o porcentaje completado) a lo largo del tiempo, y suele dibujar una forma de S: arranque lento, tramo central pronunciado y final que se aplana.',
    'Comparar la curva S planificada con la real muestra de un vistazo si el proyecto va adelantado o atrasado respecto al calendario.',
    'Una brecha que se ensancha con el tiempo indica un problema sistémico, no un retraso puntual.',
    'Las curvas S sustentan las métricas de valor ganado y son una forma estándar de informar del avance a los patrocinadores.',
  ],
  'gantt-baseline-variance': [
    'Una línea base es una foto congelada de tu calendario original; la desviación es la diferencia entre ese plan y la situación real.',
    'Fija la línea base cuando el plan esté aprobado, antes de empezar el trabajo, para poder medir contra ella el retraso posterior.',
    'Una desviación de calendario positiva significa que vas por delante del plan; negativa, que vas por detrás. La misma idea se aplica al coste.',
    'Sin línea base puedes ver las fechas de hoy, pero no cuánto se han desviado de lo que prometiste.',
  ],
  '3-week-lookahead-schedule': [
    'Un lookahead a tres semanas es un extracto corto y rodante del programa maestro que abarca aproximadamente los siguientes 15 días laborables.',
    'Saca a la luz lo que tiene que estar listo, aprobaciones, materiales, cuadrillas, para resolver los bloqueos antes de que frenen el trabajo.',
    'Se actualiza cada semana, quitando la semana ya cumplida y sumando una nueva, lo que mantiene al equipo centrado en el corto plazo.',
    'Es habitual en construcción y en los flujos lean o de último planificador, pero sirve para cualquier proyecto con muchas piezas en movimiento.',
  ],
  'gantt-chart-mistakes': [
    'El error más común es una lista de tareas sin dependencias: entonces las fechas no se mueven cuando cambia la realidad.',
    'Detallar de más (cientos de tareas minúsculas) produce un gráfico que nadie mantiene; mantén las tareas a un nivel de detalle manejable.',
    'Ignorar la ruta crítica hace que no puedas saber qué retrasos amenazan de verdad la fecha de entrega.',
    'No fijar nunca una línea base te deja sin forma de medir el retraso frente al plan original.',
  ],
  'mermaid-gantt-chart': [
    'Mermaid es una sintaxis basada en texto que genera un diagrama de Gantt a partir de código plano, de modo que el gráfico vive en Markdown, en la documentación o en un repositorio Git.',
    'Defines secciones, tareas, fechas o duraciones y dependencias con palabras clave sencillas, sin arrastrar y soltar.',
    'Es ideal para desarrolladores y documentación porque se compara y se versiona como cualquier otro texto.',
    'Para una edición y una exportación más ricas, gantts.app puede convertir un plan visual en texto Mermaid y viceversa.',
  ],
  'gantt-chart-examples': [
    'La misma estructura de Gantt se adapta a calendarios de obra, sprints de software, planes de eventos, calendarios de marketing y cronogramas de investigación.',
    'Todos los ejemplos comparten las partes esenciales: tareas por fases, duraciones, dependencias, hitos y responsables.',
    'Partir de un ejemplo cercano a tu proyecto es más rápido que empezar de cero: ajustas en lugar de inventar.',
    'gantts.app incluye más de 100 ejemplos listos para usar que puedes abrir y editar en el navegador gratis.',
  ],
  'gantt-chart-in-excel': [
    'Excel no tiene un diagrama de Gantt nativo, pero puedes improvisar uno con un gráfico de barras apiladas horizontales al que se le oculta la serie de «inicio».',
    'Funciona para un plan pequeño y estático, pero Excel no modela dependencias ni ruta crítica, así que las fechas no se recalculan.',
    'Mantener a mano las fórmulas de las barras y el formato condicional se vuelve frágil a medida que el plan crece.',
    'Una herramienta específica como gantts.app te da dependencias y exporta de vuelta a Excel, sin el trabajo manual de dibujar gráficos.',
  ],
  'gantt-chart-in-google-sheets': [
    'Google Sheets puede aproximar un diagrama de Gantt con un gráfico de barras apiladas o con fórmulas de formato condicional a lo largo de columnas de fechas.',
    'Es gratis y colaborativo, pero, igual que Excel, no tiene dependencias, hitos ni ruta crítica automática.',
    'El método de fórmulas se viene abajo en cuanto tienes muchas tareas o fechas que cambian.',
    'gantts.app construye un diagrama de Gantt de verdad en el navegador y exporta a formatos compatibles con Sheets, sin fórmulas que mantener.',
  ],
  'gantt-chart-in-powerpoint': [
    'Los diagramas de Gantt de PowerPoint se dibujan a mano con formas o SmartArt: valen para un resumen de una diapositiva, no para planificar en vivo.',
    'No calculan nada: cada cambio de fecha significa mover las cajas a mano.',
    'Úsalos para presentar un calendario a las partes interesadas, no para gestionarlo en el día a día.',
    'gantts.app exporta un diagrama de Gantt pulido directamente a PowerPoint, así planificas en la herramienta y presentas desde la diapositiva.',
  ],
  'best-free-gantt-chart-software': [
    'La mejor herramienta de Gantt gratuita es la que gestiona las dependencias y la ruta crítica sin cobrarte por exportar.',
    'Vigila los límites habituales de los planes gratuitos: topes de tareas, exportación bloqueada, marcas de agua o una cuenta obligatoria.',
    'Las herramientas basadas en el navegador evitan instalaciones y, cuando funcionan del lado del cliente, mantienen tus datos en tu propio dispositivo.',
    'gantts.app es gratis, sin registro, sin límite de tareas y sin marca de agua en las exportaciones a PDF, Excel o PowerPoint.',
  ],
};
const FR = {
  'what-is-a-gantt-chart': [
    'Un diagramme de Gantt est un diagramme à barres horizontales qui place les tâches d\'un projet sur un axe temporel : chaque barre montre quand une tâche commence, combien de temps elle dure et quand elle se termine.',
    'Il rend visibles d\'un coup d\'œil les recouvrements, les liens d\'antériorité et le planning d\'ensemble, ce qu\'une simple liste de tâches ou un calendrier ne permettent pas.',
    'Il doit son nom à Henry Gantt, qui l\'a popularisé dans les années 1910 ; c\'est aujourd\'hui la vue de planning par défaut en gestion de projet.',
    'Les diagrammes de Gantt modernes ajoutent aux barres de base les liens d\'antériorité, les jalons, le pourcentage d\'avancement et le chemin critique.',
  ],
  'how-to-make-a-gantt-chart': [
    'Listez vos tâches, puis donnez à chacune une date de début et une durée : cela suffit à obtenir un diagramme de Gantt fonctionnel.',
    'Reliez les tâches dépendantes (le lien Fin-Début est le plus courant) pour que le planning se recalcule automatiquement dès qu\'une date change.',
    'Ajoutez des jalons pour les dates fixes comme le lancement ou la mise en ligne, et renseignez l\'avancement pour suivre la progression face au plan.',
    'Un tableur peut en produire un, mais un outil dédié comme gantts.app gère les liens d\'antériorité et le chemin critique à votre place, gratuitement et sans inscription.',
  ],
  'critical-path-method': [
    'Le chemin critique est la plus longue chaîne de tâches liées, et sa longueur donne la durée minimale dans laquelle le projet peut s\'achever.',
    'Tout retard sur une tâche du chemin critique retarde l\'ensemble du projet ; les tâches situées hors de ce chemin disposent d\'une marge et peuvent glisser sans décaler la date de fin.',
    'On le détermine par une passe avant et une passe arrière, qui donnent à chaque tâche ses dates au plus tôt et au plus tard, puis en isolant la chaîne à marge nulle.',
    'gantts.app recalcule et met en évidence le chemin critique automatiquement, à mesure que vous ajoutez ou modifiez des liens d\'antériorité.',
  ],
  'gantt-chart-dependencies': [
    'Un lien d\'antériorité relie deux tâches de sorte que l\'une ne peut pas commencer (ou finir) avant l\'autre : c\'est ce qui transforme une liste de tâches en véritable planning.',
    'Le lien Fin-Début (FD) est de loin le plus courant ; les liens Début-Début, Fin-Fin et Début-Fin couvrent le reste.',
    'Une avance rapproche le successeur ; un décalage l\'éloigne, mieux vaut y recourir plutôt que de gonfler les durées.',
    'Une fois les liens posés, déplacer une tâche replanifie automatiquement tout ce qui se trouve en aval.',
  ],
  'milestones-vs-tasks': [
    'Une tâche est un travail qui prend du temps et possède une durée ; un jalon est un repère de durée nulle qui marque un moment clé, comme une validation ou une mise en ligne.',
    'Les jalons ne consomment aucun effort : ils signalent qu\'un point important est atteint ou arrive à échéance.',
    'Utilisez les jalons pour les points de passage de phase, les échéances de livrables et les engagements externes que vous voulez repérer instantanément sur le planning.',
    'Un bon plan mêle les deux : les tâches montrent le travail, les jalons montrent les points de contrôle qui comptent pour les parties prenantes.',
  ],
  's-curve-project-management': [
    'Une courbe en S trace l\'avancement cumulé (coût, heures ou pourcentage d\'avancement) au fil du temps, et prend généralement la forme d\'un S : démarrage lent, milieu soutenu, fin en ralentissement.',
    'Comparer la courbe en S prévue à la courbe réelle montre d\'un coup d\'œil si le projet est en avance ou en retard.',
    'Un écart qui se creuse dans le temps signale un problème de fond, et non un simple retard ponctuel.',
    'Les courbes en S sont à la base des indicateurs de valeur acquise et constituent une façon standard de rendre compte de l\'avancement aux commanditaires.',
  ],
  'gantt-baseline-variance': [
    'Une référence est un instantané figé de votre planning initial ; l\'écart est la différence entre ce plan et la situation réelle.',
    'Posez la référence une fois le plan validé, avant le début des travaux, afin de pouvoir y mesurer la dérive ultérieure.',
    'Un écart de délai positif signifie une avance sur le plan ; négatif, un retard. Le même principe s\'applique au coût.',
    'Sans référence, vous voyez les dates du jour, mais pas de combien elles ont dérivé par rapport à ce que vous aviez promis.',
  ],
  '3-week-lookahead-schedule': [
    'Un planning glissant à 3 semaines est un extrait court et roulant du planning directeur, couvrant environ les 15 prochains jours ouvrés.',
    'Il fait ressortir ce qui doit être prêt, validations, matériaux, équipes, afin de lever les blocages avant qu\'ils n\'arrêtent le travail.',
    'Il est actualisé chaque semaine, en retirant la semaine écoulée et en ajoutant une nouvelle, ce qui maintient l\'équipe concentrée sur le court terme.',
    'Courant dans le BTP et les démarches lean / last planner, il convient à tout projet comportant de nombreux éléments en mouvement.',
  ],
  'gantt-chart-mistakes': [
    'L\'erreur la plus fréquente est une liste de tâches sans liens d\'antériorité : les dates ne bougent alors pas quand la réalité change.',
    'Le trop-plein de détail (des centaines de minuscules tâches) produit un diagramme que personne ne tient à jour ; gardez une granularité gérable.',
    'Ignorer le chemin critique, c\'est se priver de savoir quels retards menacent réellement l\'échéance.',
    'Ne jamais poser de référence, c\'est renoncer à toute mesure de la dérive par rapport au plan initial.',
  ],
  'mermaid-gantt-chart': [
    'Mermaid est une syntaxe textuelle qui génère un diagramme de Gantt à partir de simple code, si bien que le diagramme vit dans du Markdown, une documentation ou un dépôt Git.',
    'On y définit sections, tâches, dates ou durées et liens d\'antériorité à l\'aide de mots-clés simples, sans glisser-déposer.',
    'Elle est idéale pour les développeurs et la documentation, car elle se compare et se versionne comme n\'importe quel texte.',
    'Pour une édition et des exports plus riches, gantts.app convertit un plan visuel en texte Mermaid, et inversement.',
  ],
  'gantt-chart-examples': [
    'La même structure de Gantt s\'adapte aux plannings de chantier, aux sprints logiciels, aux plans d\'événement, aux calendriers marketing et aux échéanciers de recherche.',
    'Chaque exemple partage les mêmes éléments de base : des tâches par phases, des durées, des liens d\'antériorité, des jalons et des responsables.',
    'Partir d\'un exemple proche de votre projet va plus vite que la page blanche : vous ajustez au lieu d\'inventer.',
    'gantts.app propose plus de 100 exemples prêts à l\'emploi, que vous pouvez ouvrir et modifier dans le navigateur gratuitement.',
  ],
  'gantt-chart-in-excel': [
    'Excel n\'a pas de type de graphique Gantt natif, mais on peut en simuler un avec un graphique à barres horizontales empilées dont on masque la série « début ».',
    'Cela suffit pour un petit plan figé, mais Excel ne modélise ni les liens d\'antériorité ni le chemin critique : les dates ne se recalculent pas.',
    'Entretenir à la main les formules des barres et la mise en forme conditionnelle devient fragile à mesure que le plan grossit.',
    'Un outil dédié comme gantts.app vous apporte les liens d\'antériorité et réexporte vers Excel, sans le graphique à construire soi-même.',
  ],
  'gantt-chart-in-google-sheets': [
    'Google Sheets peut approcher un diagramme de Gantt avec un graphique à barres empilées ou des formules de mise en forme conditionnelle réparties sur des colonnes de dates.',
    'Il est gratuit et collaboratif, mais comme Excel il n\'a ni liens d\'antériorité, ni jalons, ni chemin critique automatique.',
    'L\'approche par formules s\'effondre dès que les tâches se multiplient ou que les dates se décalent.',
    'gantts.app construit un vrai diagramme de Gantt dans le navigateur et exporte vers des formats compatibles avec Sheets, aucune formule à entretenir.',
  ],
  'gantt-chart-in-powerpoint': [
    'Un diagramme de Gantt dans PowerPoint se dessine à la main à partir de formes ou de SmartArt, parfait pour un résumé sur une diapositive, pas pour de la planification vivante.',
    'Il ne calcule rien : chaque changement de date oblige à déplacer les cases manuellement.',
    'Servez-vous-en pour présenter un planning aux parties prenantes, pas pour le piloter au quotidien.',
    'gantts.app exporte un diagramme de Gantt soigné directement vers PowerPoint : vous planifiez dans l\'outil et présentez depuis la diapositive.',
  ],
  'best-free-gantt-chart-software': [
    'Le meilleur outil de Gantt gratuit est celui qui gère les liens d\'antériorité et le chemin critique sans faire payer les exports.',
    'Méfiez-vous des limites fréquentes des offres gratuites : plafond de tâches, export impossible, filigranes ou compte obligatoire.',
    'Les outils dans le navigateur évitent toute installation et gardent vos données sur votre propre appareil lorsqu\'ils fonctionnent côté client.',
    'gantts.app est gratuit, sans inscription, sans limite de tâches et sans filigrane sur les exports PDF, Excel ou PowerPoint.',
  ],
};
const DE = {
  'what-is-a-gantt-chart': [
    'Ein Gantt-Diagramm ist ein horizontales Balkendiagramm, das Projektaufgaben auf einem Zeitstrahl abbildet, jeder Balken zeigt, wann eine Aufgabe beginnt, wie lange sie dauert und wann sie endet.',
    'Es macht Überschneidungen, Abhängigkeiten und den gesamten Terminplan auf einen Blick sichtbar, was eine einfache To-do-Liste oder ein Kalender nicht leisten.',
    'Benannt ist es nach Henry Gantt, der es in den 1910er-Jahren populär machte; heute ist es die Standardansicht für Terminpläne im Projektmanagement.',
    'Moderne Gantt-Diagramme ergänzen die einfachen Balken um Abhängigkeiten, Meilensteine, den Fertigstellungsgrad in Prozent und den kritischen Pfad.',
  ],
  'how-to-make-a-gantt-chart': [
    'Listen Sie Ihre Aufgaben auf und geben Sie jeder ein Startdatum und eine Dauer, schon das ergibt ein funktionierendes Gantt-Diagramm.',
    'Verknüpfen Sie abhängige Aufgaben (Ende-Anfang ist die häufigste Verknüpfung), damit sich der Zeitplan bei einer Datumsänderung automatisch neu berechnet.',
    'Fügen Sie Meilensteine für feste Termine wie Kickoff oder Launch hinzu und legen Sie den Fertigstellungsgrad in Prozent fest, um den Fortschritt gegen den Plan zu verfolgen.',
    'Sie können eines in einer Tabellenkalkulation erstellen, doch ein spezialisierter Editor wie gantts.app übernimmt Abhängigkeiten und den kritischen Pfad für Sie, kostenlos und ohne Anmeldung.',
  ],
  'critical-path-method': [
    'Der kritische Pfad ist die längste Kette voneinander abhängiger Aufgaben, und seine Länge entspricht der kürzesten Zeit, in der das Projekt abgeschlossen werden kann.',
    'Eine Verzögerung einer Aufgabe auf dem kritischen Pfad verzögert das gesamte Projekt; Aufgaben außerhalb davon haben Puffer und können sich verschieben, ohne den Endtermin zu bewegen.',
    'Sie ermitteln ihn durch einen Vorwärts- und einen Rückwärtsdurchlauf, der jeder Aufgabe einen frühesten und spätesten Anfang bzw. ein frühestes und spätestes Ende zuweist, und isolieren dann die Kette ohne Puffer.',
    'gantts.app berechnet den kritischen Pfad automatisch neu und hebt ihn hervor, sobald Sie Abhängigkeiten hinzufügen oder ändern.',
  ],
  'gantt-chart-dependencies': [
    'Eine Abhängigkeit verknüpft zwei Aufgaben so, dass die eine erst beginnen (oder enden) kann, wenn die andere es tut, erst das macht aus einer Aufgabenliste einen echten Terminplan.',
    'Ende-Anfang (EA) ist mit Abstand der häufigste Typ; Anfang-Anfang, Ende-Ende und Anfang-Ende decken den Rest ab.',
    'Vorlaufzeit zieht eine Nachfolgeaufgabe nach vorn, Nachlaufzeit schiebt sie nach hinten, nutzen Sie diese, statt Dauern künstlich zu strecken.',
    'Sind die Abhängigkeiten hinterlegt, verschiebt das Umlegen einer Aufgabe automatisch alle nachgelagerten Aufgaben.',
  ],
  'milestones-vs-tasks': [
    'Eine Aufgabe ist Arbeit, die Zeit beansprucht und eine Dauer hat; ein Meilenstein ist ein Markierungspunkt ohne Dauer für einen wichtigen Moment wie eine Freigabe oder einen Launch.',
    'Meilensteine verbrauchen keinen Aufwand, sie signalisieren, dass etwas Wichtiges erreicht wurde oder ansteht.',
    'Nutzen Sie Meilensteine für Phasenübergänge, Liefertermine und externe Verpflichtungen, die Sie sofort auf dem Zeitstrahl erkennen wollen.',
    'Ein guter Plan verbindet beides: Aufgaben zeigen die Arbeit, Meilensteine zeigen die Kontrollpunkte, die für Stakeholder zählen.',
  ],
  's-curve-project-management': [
    'Eine S-Kurve stellt den kumulierten Fortschritt (Kosten, Stunden oder Fertigstellungsgrad) über die Zeit dar und bildet typischerweise ein S: langsamer Start, steile Mitte, auslaufendes Ende.',
    'Der Vergleich der geplanten S-Kurve mit der tatsächlichen zeigt auf einen Blick, ob das Projekt dem Zeitplan voraus ist oder ihm hinterherhinkt.',
    'Eine Lücke, die mit der Zeit größer wird, deutet auf ein systemisches Problem hin, nicht auf eine einmalige Verzögerung.',
    'S-Kurven bilden die Grundlage für Earned-Value-Kennzahlen und sind eine gängige Art, Auftraggebern den Fortschritt zu berichten.',
  ],
  'gantt-baseline-variance': [
    'Ein Basisplan ist eine eingefrorene Momentaufnahme Ihres ursprünglichen Terminplans; die Abweichung ist der Unterschied zwischen diesem Plan und dem tatsächlichen Stand.',
    'Legen Sie den Basisplan fest, sobald der Plan genehmigt ist, vor Arbeitsbeginn, , damit sich spätere Verzögerungen daran messen lassen.',
    'Eine positive Terminabweichung bedeutet, dass Sie dem Plan voraus sind, eine negative, dass Sie im Rückstand sind; dasselbe Prinzip gilt für die Kosten.',
    'Ohne Basisplan sehen Sie zwar die heutigen Termine, aber nicht, wie weit sie von dem abgewichen sind, was Sie zugesagt haben.',
  ],
  '3-week-lookahead-schedule': [
    'Eine Drei-Wochen-Vorschau ist ein kurzer, rollierender Ausschnitt aus dem Gesamtterminplan, der etwa die nächsten 15 Arbeitstage abdeckt.',
    'Sie macht sichtbar, was bereitstehen muss, Freigaben, Material, Teams, , damit Hindernisse ausgeräumt werden, bevor sie die Arbeit blockieren.',
    'Sie wird wöchentlich aktualisiert, indem die abgeschlossene Woche entfällt und eine neue hinzukommt, was das Team auf die nahe Zukunft fokussiert hält.',
    'Verbreitet ist sie im Bauwesen und in Lean- bzw. Last-Planner-Abläufen, funktioniert aber für jedes Projekt mit vielen beweglichen Teilen.',
  ],
  'gantt-chart-mistakes': [
    'Der häufigste Fehler ist eine Aufgabenliste ohne Abhängigkeiten, dann verschieben sich die Termine nicht, wenn sich die Realität ändert.',
    'Zu viel Detailtiefe (Hunderte winziger Aufgaben) führt zu einem Diagramm, das niemand pflegt; halten Sie Aufgaben in einer handhabbaren Granularität.',
    'Wer den kritischen Pfad ignoriert, kann nicht erkennen, welche Verzögerungen den Endtermin tatsächlich gefährden.',
    'Wer nie einen Basisplan festlegt, hat keine Möglichkeit, Verzögerungen am ursprünglichen Plan zu messen.',
  ],
  'mermaid-gantt-chart': [
    'Mermaid ist eine textbasierte Syntax, die ein Gantt-Diagramm aus einfachem Code erzeugt, sodass das Diagramm in Markdown, Dokumentationen oder einem Git-Repository lebt.',
    'Sie definieren Abschnitte, Aufgaben, Daten oder Dauern und Abhängigkeiten mit einfachen Schlüsselwörtern, ohne Drag-and-drop.',
    'Für Entwickler und Dokumentationen ist das ideal, weil es sich wie jeder andere Text vergleichen und versionieren lässt.',
    'Für komfortableres Bearbeiten und für Exporte kann gantts.app einen visuellen Plan in Mermaid-Text umwandeln und wieder zurück.',
  ],
  'gantt-chart-examples': [
    'Dieselbe Gantt-Struktur passt sich an Bauzeitpläne, Software-Sprints, Veranstaltungspläne, Marketingkalender und Forschungszeitpläne an.',
    'Jedes Beispiel teilt die Kernbestandteile: in Phasen gegliederte Aufgaben, Dauern, Abhängigkeiten, Meilensteine und Verantwortliche.',
    'Von einem Beispiel auszugehen, das Ihrem Projekt nahekommt, ist schneller als ein leeres Blatt, Sie passen an, statt zu erfinden.',
    'gantts.app liefert über 100 fertige Beispiele, die Sie kostenlos im Browser öffnen und bearbeiten können.',
  ],
  'gantt-chart-in-excel': [
    'Excel hat kein eigenes Gantt-Diagramm, aber Sie können eines mit einem gestapelten horizontalen Balkendiagramm nachbauen, das die „Start“-Reihe ausblendet.',
    'Für einen statischen, kleinen Plan funktioniert das, doch Excel bildet weder Abhängigkeiten noch einen kritischen Pfad ab, sodass sich Termine nicht neu berechnen.',
    'Balkenformeln und bedingte Formatierung von Hand zu pflegen, wird mit wachsendem Plan zunehmend fehleranfällig.',
    'Ein spezialisierter Editor wie gantts.app liefert Ihnen Abhängigkeiten und exportiert zurück nach Excel, ohne das manuelle Diagrammbasteln.',
  ],
  'gantt-chart-in-google-sheets': [
    'Google Sheets kann ein Gantt-Diagramm mit einem gestapelten Balkendiagramm oder mit Formeln zur bedingten Formatierung über Datumsspalten annähern.',
    'Es ist kostenlos und kollaborativ, hat aber wie Excel keine Abhängigkeiten, keine Meilensteine und keinen automatischen kritischen Pfad.',
    'Der Formelansatz stößt an seine Grenzen, sobald Sie viele Aufgaben oder sich verschiebende Termine haben.',
    'gantts.app erstellt ein echtes Gantt-Diagramm im Browser und exportiert in Sheets-kompatible Formate, ganz ohne zu pflegende Formeln.',
  ],
  'gantt-chart-in-powerpoint': [
    'Gantt-Diagramme in PowerPoint werden von Hand aus Formen oder SmartArt gezeichnet, geeignet für eine Zusammenfassung auf einer Folie, nicht für die laufende Planung.',
    'Sie berechnen nichts: Jede Datumsänderung bedeutet, Kästchen manuell zu verschieben.',
    'Nutzen Sie sie, um Stakeholdern einen Terminplan zu präsentieren, nicht um ihn im Tagesgeschäft zu steuern.',
    'gantts.app exportiert ein ansprechendes Gantt-Diagramm direkt nach PowerPoint, sodass Sie im Tool planen und von der Folie aus präsentieren.',
  ],
  'best-free-gantt-chart-software': [
    'Das beste kostenlose Gantt-Tool ist das, das Abhängigkeiten und den kritischen Pfad beherrscht, ohne Exporte hinter eine Bezahlschranke zu stellen.',
    'Achten Sie auf typische Einschränkungen kostenloser Varianten: Aufgabenobergrenzen, fehlender Export, Wasserzeichen oder ein erzwungenes Konto.',
    'Browserbasierte Tools ersparen Installationen und behalten Ihre Daten auf Ihrem eigenen Gerät, wenn sie clientseitig laufen.',
    'gantts.app ist kostenlos, ohne Anmeldung, ohne Aufgabenlimit und ohne Wasserzeichen auf PDF-, Excel- oder PowerPoint-Exporten.',
  ],
};
const PT = {
  'what-is-a-gantt-chart': [
    'Um gráfico de Gantt é um gráfico de barras horizontais que dispõe as tarefas do projeto ao longo de uma linha do tempo, cada barra mostra quando uma tarefa começa, quanto dura e quando termina.',
    'Ele torna visíveis, num relance, as sobreposições, as dependências e o cronograma como um todo, algo que uma simples lista de tarefas ou um calendário não conseguem.',
    'Leva o nome de Henry Gantt, que o popularizou na década de 1910; hoje é a visão de cronograma padrão na gestão de projetos.',
    'Os gráficos de Gantt modernos acrescentam dependências, marcos, percentual concluído e o caminho crítico sobre as barras básicas.',
  ],
  'how-to-make-a-gantt-chart': [
    'Liste suas tarefas e dê a cada uma uma data de início e uma duração, só isso já produz um gráfico de Gantt funcional.',
    'Ligue as tarefas dependentes (a ligação Término-Início é a mais comum) para que o cronograma se recalcule sozinho quando uma data muda.',
    'Acrescente marcos para datas fixas, como o pontapé inicial ou o lançamento, e defina o percentual concluído para acompanhar o avanço em relação ao plano.',
    'Dá para montar um em planilha, mas uma ferramenta dedicada como o gantts.app cuida das dependências e do caminho crítico por você, de graça e sem cadastro.',
  ],
  'critical-path-method': [
    'O caminho crítico é a cadeia mais longa de tarefas dependentes, e seu comprimento é igual ao menor prazo em que o projeto pode terminar.',
    'Atrasar qualquer tarefa do caminho crítico atrasa o projeto inteiro; as tarefas fora dele têm folga e podem escorregar sem mexer na data de término.',
    'Você o encontra com uma passagem para frente e outra para trás, que dão a cada tarefa um início e um término mais cedo e mais tarde, isolando depois a cadeia com folga zero.',
    'O gantts.app recalcula e destaca o caminho crítico automaticamente à medida que você adiciona ou altera dependências.',
  ],
  'gantt-chart-dependencies': [
    'Uma dependência liga duas tarefas de modo que uma só pode começar (ou terminar) quando a outra o faz, é o que transforma uma lista de tarefas num cronograma de verdade.',
    'Término-Início (TI) é de longe o tipo mais comum; Início-Início, Término-Término e Início-Término cobrem o restante.',
    'A antecipação puxa a sucessora para mais cedo; o retardo a empurra para mais tarde, use-os em vez de inflar as durações.',
    'Com as dependências no lugar, mover uma tarefa reprograma automaticamente tudo o que vem depois.',
  ],
  'milestones-vs-tasks': [
    'Uma tarefa é trabalho que leva tempo e tem duração; um marco é um sinal de duração zero para um momento-chave, como uma aprovação ou um lançamento.',
    'Marcos não consomem esforço, apenas sinalizam que algo importante foi atingido ou está previsto.',
    'Use marcos para portões de fase, prazos de entregas e compromissos externos que você quer identificar num instante na linha do tempo.',
    'Um bom plano combina os dois: as tarefas mostram o trabalho, os marcos mostram os pontos de controle que importam para as partes interessadas.',
  ],
  's-curve-project-management': [
    'Uma curva S traça o avanço acumulado (custo, horas ou percentual concluído) ao longo do tempo e costuma formar um S: começo lento, meio íngreme, fim que desacelera.',
    'Comparar a curva S planejada com a real mostra num relance se o projeto está adiantado ou atrasado.',
    'Uma diferença que aumenta com o tempo indica um problema sistêmico, não um atraso isolado.',
    'As curvas S sustentam as métricas de valor agregado e são a forma padrão de reportar o avanço aos patrocinadores.',
  ],
  'gantt-baseline-variance': [
    'A linha de base é uma fotografia congelada do seu cronograma original; o desvio é a diferença entre esse plano e a situação real.',
    'Grave a linha de base assim que o plano for aprovado, antes de o trabalho começar, para que o atraso posterior possa ser medido em relação a ela.',
    'Variação de prazo positiva significa adiantado; negativa significa atrasado. A mesma ideia vale para o custo.',
    'Sem uma linha de base, você enxerga as datas de hoje, mas não o quanto elas se afastaram do que você prometeu.',
  ],
  '3-week-lookahead-schedule': [
    'O olhar de três semanas à frente é um recorte curto e móvel do cronograma-mestre, que cobre por volta dos próximos 15 dias úteis.',
    'Ele revela o que precisa estar pronto, aprovações, materiais, equipes, para que os impedimentos sejam removidos antes de travarem o trabalho.',
    'É atualizado toda semana, descartando a semana concluída e acrescentando uma nova, o que mantém a equipe focada no curto prazo.',
    'É comum na construção e nos fluxos enxutos (lean/last-planner), mas serve para qualquer projeto com muitas frentes em movimento.',
  ],
  'gantt-chart-mistakes': [
    'O erro mais comum é uma lista de tarefas sem dependências, aí as datas não se movem quando a realidade muda.',
    'Detalhar demais (centenas de tarefinhas) gera um gráfico que ninguém mantém; mantenha as tarefas num nível de detalhe gerenciável.',
    'Ignorar o caminho crítico faz com que você não saiba quais atrasos de fato ameaçam o prazo.',
    'Nunca gravar uma linha de base deixa você sem como medir o desvio em relação ao plano original.',
  ],
  'mermaid-gantt-chart': [
    'Mermaid é uma sintaxe baseada em texto que gera um gráfico de Gantt a partir de código simples, de modo que o gráfico vive em Markdown, em documentos ou num repositório Git.',
    'Você define seções, tarefas, datas ou durações e dependências com palavras-chave simples, sem arrastar e soltar.',
    'É ideal para desenvolvedores e documentação, porque entra no controle de versão e no diff como qualquer outro texto.',
    'Para edição mais rica e exportações, o gantts.app converte um plano visual em texto Mermaid e vice-versa.',
  ],
  'gantt-chart-examples': [
    'A mesma estrutura de Gantt se adapta a cronogramas de obra, sprints de software, planos de eventos, calendários de marketing e cronogramas de pesquisa.',
    'Todo exemplo compartilha as partes essenciais: tarefas em fases, durações, dependências, marcos e responsáveis.',
    'Partir de um exemplo próximo do seu projeto é mais rápido do que uma tela em branco, você ajusta em vez de inventar.',
    'O gantts.app traz mais de 100 exemplos prontos que você pode abrir e editar no navegador de graça.',
  ],
  'gantt-chart-in-excel': [
    'O Excel não tem gráfico de Gantt nativo, mas dá para simular um com um gráfico de barras horizontais empilhadas que oculta a série \'de início\'.',
    'Funciona para um plano pequeno e estático, mas o Excel não modela dependências nem caminho crítico, então as datas não se recalculam.',
    'Manter à mão as fórmulas das barras e a formatação condicional fica frágil à medida que o plano cresce.',
    'Uma ferramenta dedicada como o gantts.app dá a você dependências e exporta de volta para o Excel, sem o trabalho manual de montar o gráfico.',
  ],
  'gantt-chart-in-google-sheets': [
    'O Google Sheets consegue aproximar um gráfico de Gantt com um gráfico de barras empilhadas ou com fórmulas de formatação condicional ao longo das colunas de datas.',
    'É gratuito e colaborativo, mas, assim como o Excel, não tem dependências, marcos nem caminho crítico automático.',
    'A abordagem por fórmulas desmorona quando você passa a ter muitas tarefas ou datas que mudam.',
    'O gantts.app monta um gráfico de Gantt de verdade no navegador e exporta para formatos compatíveis com o Sheets, sem fórmulas para manter.',
  ],
  'gantt-chart-in-powerpoint': [
    'Os gráficos de Gantt no PowerPoint são desenhados à mão com formas ou SmartArt, bons para um resumo de um slide, não para planejar ao vivo.',
    'Eles não calculam nada: cada mudança de data significa mover as caixas manualmente.',
    'Use-os para apresentar um cronograma às partes interessadas, não para gerenciá-lo no dia a dia.',
    'O gantts.app exporta um gráfico de Gantt caprichado direto para o PowerPoint, então você planeja na ferramenta e apresenta no slide.',
  ],
  'best-free-gantt-chart-software': [
    'A melhor ferramenta de Gantt gratuita é a que cuida das dependências e do caminho crítico sem cobrar pelas exportações.',
    'Fique de olho nos limites comuns dos planos gratuitos: teto de tarefas, ausência de exportação, marca-d\'água ou obrigatoriedade de conta.',
    'Ferramentas que rodam no navegador dispensam instalação e mantêm seus dados no seu próprio aparelho quando funcionam do lado do cliente.',
    'O gantts.app é gratuito, sem cadastro, sem limite de tarefas e sem marca-d\'água nas exportações em PDF, Excel ou PowerPoint.',
  ],
};
const ZH = {
  'what-is-a-gantt-chart': [
    '甘特图是一种把项目任务画在时间轴上的横向条形图：每条横条显示一项任务什么时候开始、持续多久、什么时候结束。',
    '它把任务的并行、依赖关系和整体进度一眼呈现出来，这是普通任务清单或日历做不到的。',
    '它以亨利·甘特（Henry Gantt）命名，由他在 1910 年代推广开来，如今已是项目管理中默认的进度视图。',
    '现代甘特图在基本横条之上叠加了依赖关系、里程碑、进度百分比和关键路径。',
  ],
  'how-to-make-a-gantt-chart': [
    '先列出任务，再给每项任务一个开始日期和一段工期, , 仅此就能得到一张可用的甘特图。',
    '把相互依赖的任务连起来（最常用的是完成-开始），这样某个日期一变，整条时间轴就会自动重排。',
    '为启动、上线这类固定时点加上里程碑，再填入进度百分比，就能对照计划跟踪实际进展。',
    '用电子表格也能拼出一张，但像 gantts.app 这样的专用工具会替你算好依赖关系和关键路径, , 免费，且无需注册。',
  ],
  'critical-path-method': [
    '关键路径是相互依赖的任务中最长的一条链，它的长度就等于项目最短可能的完工时间。',
    '关键路径上的任意任务延误都会拖累整个项目；路径之外的任务有浮动时间，可以在不移动完工日期的前提下推迟。',
    '求它的方法是先正推、再逆推，为每项任务算出最早和最晚的开始／结束时间，再把浮动时间为零的那条链单独挑出来。',
    '你每次添加或修改依赖关系时，gantts.app 都会自动重算并高亮关键路径。',
  ],
  'gantt-chart-dependencies': [
    '依赖关系把两项任务连起来，让其中一项必须等另一项开始（或结束）后才能开始, , 正是它把一份任务清单变成真正的进度计划。',
    '完成-开始（FS）是最常见的一种，其余场合由开始-开始、完成-完成和开始-完成补足。',
    '提前量把后继任务往早拉，滞后量把它往后推, , 用它们来表达等待，而不是给工期注水。',
    '依赖关系连好之后，移动一项任务，其后所有任务都会自动重排。',
  ],
  'milestones-vs-tasks': [
    '任务是要花时间、有工期的工作；里程碑则是工期为零的标记，代表审批通过、正式上线这类关键时点。',
    '里程碑不消耗任何工作量，它只标记某件重要的事已经达成或即将到期。',
    '阶段关口、交付期限，以及希望在时间轴上一眼看到的对外承诺，都适合用里程碑来标记。',
    '一份好的计划两者兼备：任务呈现具体工作，里程碑呈现相关方真正在意的检查点。',
  ],
  's-curve-project-management': [
    'S 曲线把累计进度（成本、工时或完成百分比）随时间画出来，通常呈 S 形：开头慢、中段陡、尾段渐缓。',
    '把计划 S 曲线和实际 S 曲线放在一起对比，就能一眼看出项目是超前还是落后于计划。',
    '差距若随时间持续拉大，说明这是系统性问题，而不是一次偶然的延误。',
    'S 曲线是挣值指标的基础，也是向项目发起人汇报进展的标准方式。',
  ],
  'gantt-baseline-variance': [
    '基准是原始进度计划被冻结下来的一张快照；偏差则是这份计划与实际情况之间的差距。',
    '在计划获批后、动工前设定基准，之后的延误才有一个固定的对照基准。',
    '进度偏差为正表示领先于计划，为负表示落后；成本方面也是同样的道理。',
    '没有基准，你只能看到今天的日期，却无从知道它离当初承诺的计划已经漂移了多远。',
  ],
  '3-week-lookahead-schedule': [
    '三周前瞻计划是主进度计划中一段短小、滚动的切片，大致覆盖接下来的 15 个工作日。',
    '它把必须提前就位的东西, , 审批、材料、班组, , 摆到明面上，好在障碍拖住工作之前就把它清除。',
    '它每周更新一次，去掉已完成的一周、补进新的一周，让团队始终盯着眼前这段。',
    '它在工程施工和精益／末位计划者（last planner）的工作流程里很常见，但同样适用于任何头绪繁多的项目。',
  ],
  'gantt-chart-mistakes': [
    '最常见的错误是一份没有依赖关系的任务清单, , 现实一变，日期却纹丝不动。',
    '拆得过细（几百个琐碎任务）会做出一张没人愿意维护的图；把任务保持在能管得过来的颗粒度。',
    '忽视关键路径，你就分不清哪些延误才真正威胁到交付期。',
    '从不设定基准，就没有任何办法拿实际延误去和原始计划做对照。',
  ],
  'mermaid-gantt-chart': [
    'Mermaid 是一种基于文本的语法，用纯代码就能渲染出甘特图，因此图表可以直接存在于 Markdown、文档或 Git 仓库里。',
    '你用几个简单的关键字来定义分区、任务、日期或工期以及依赖关系, , 全程不用拖拽。',
    '它非常适合开发者和文档场景，因为它能像任何文本一样做差异对比和版本管理。',
    '若需要更丰富的编辑和导出，gantts.app 可以把可视化的计划转成 Mermaid 文本，也能反向转回来。',
  ],
  'gantt-chart-examples': [
    '同一套甘特图结构可以套用到工程进度、软件冲刺、活动策划、营销日历和研究计划上。',
    '每个示例都共享同样的核心要素：分阶段的任务、工期、依赖关系、里程碑和负责人。',
    '从一个与你项目相近的示例开始，比从空白画布起步快得多, , 你只需调整，而不必从头设计。',
    'gantts.app 提供 100 多个现成示例，都能在浏览器里免费打开并编辑。',
  ],
  'gantt-chart-in-excel': [
    'Excel 没有内置的甘特图，但你可以用一张堆积条形图拼出来：把“开始”这个数据系列隐藏掉即可。',
    '这对静态的小型计划够用，但 Excel 不处理依赖关系，也没有关键路径，所以日期不会自动重排。',
    '随着计划变大，手工维护那些横条公式和条件格式会越来越容易出错。',
    '像 gantts.app 这样的专用工具能给你依赖关系，还能导回 Excel, , 省掉全部手工作图的功夫。',
  ],
  'gantt-chart-in-google-sheets': [
    'Google 表格可以用堆积条形图，或在日期列上用条件格式公式，凑出一张近似的甘特图。',
    '它免费又便于协作，但和 Excel 一样，没有依赖关系、里程碑，也不会自动算关键路径。',
    '一旦任务变多或日期频繁变动，这种公式做法就撑不住了。',
    'gantts.app 在浏览器里直接生成一张真正的甘特图，并能导出为表格友好的格式, , 不用维护任何公式。',
  ],
  'gantt-chart-in-powerpoint': [
    'PowerPoint 里的甘特图是用形状或 SmartArt 手工画出来的, , 用作一页幻灯片的概览还行，但不适合日常排程。',
    '它们不做任何计算：每改一个日期，都得手工挪动那些方框。',
    '用它向相关方展示进度，而不是拿它做日常管理。',
    'gantts.app 能把一张精致的甘特图直接导出到 PowerPoint，于是你在工具里排程，用幻灯片去汇报。',
  ],
  'best-free-gantt-chart-software': [
    '最好的免费甘特图工具，是那种既能处理依赖关系和关键路径、又不把导出功能挡在付费墙后面的。',
    '要留意免费档常见的限制：任务数量上限、不能导出、带水印，或强制注册账号。',
    '基于浏览器的工具免去了安装，只要是在本地运行，数据就留在你自己的设备上。',
    'gantts.app 免费、无需注册、不限任务数量，导出的 PDF、Excel 或 PowerPoint 也都不带水印。',
  ],
};

const LANGS = { en: EN, es: ES, fr: FR, de: DE, pt: PT, zh: ZH };

const esc = (s) => String(s).replace(/&(?!(amp|lt|gt|quot|#\d+);)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// HTML block for a guide+lang, indented for the .prose container, or '' if none.
function render(slug, lang) {
  const items = (LANGS[lang] || {})[slug];
  if (!items || !items.length) return '';
  const heading = HEADING[lang] || HEADING.en;
  const lis = items.map((t) => `          <li>${t}</li>`).join('\n');
  return `      <aside id="key-takeaways" class="callout callout-takeaways" role="note" aria-label="${esc(heading)}">
        <p class="takeaways-title"><strong>${esc(heading)}</strong></p>
        <ul>
${lis}
        </ul>
      </aside>`;
}

function has(slug, lang) { const m = LANGS[lang] || {}; return !!(m[slug] && m[slug].length); }

module.exports = { HEADING, EN, LANGS, render, has };
