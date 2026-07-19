/* ============================================================
   i18n/guides-es.js — Spanish guides.

   Self-contained content models, deliberately NOT tied to whether the
   English original is generated (scripts/new-guides.js) or
   hand-authored HTML. Eight of the twelve English guides are hand
   written, so a model that only wrapped the generated four would leave
   the best pages untranslatable.

   Written as Spanish, not as transposed English: the register, the
   examples and the terminology follow what Spanish-speaking project
   people actually say — ruta crítica, holgura, línea base, hito,
   diagrama de Gantt.

   Only slugs present here get a /es/blog/<slug>.html, exactly as with
   i18n/templates-es.js. A guide with no entry keeps linking to English
   rather than getting machine-translated filler.

   Fields mirror the English model: h1, metaTitle, metaDesc, date, lead,
   figIntro, sections [[heading, html]], callout, faq [[q, a]], related.
   `figure` is inherited from the English guide where one exists — the
   SVG diagrams carry their own labels, which are translated in
   FIGURE_LABELS below.
   ============================================================ */

const G = {

  'what-is-a-gantt-chart': {
    h1: '¿Qué es un diagrama de Gantt?',
    metaTitle: 'Qué es un diagrama de Gantt y cuándo usarlo',
    metaDesc: 'Qué es un diagrama de Gantt, para qué sirve y cuándo conviene usarlo: barras, dependencias, hitos y ruta crítica explicados con ejemplos.',
    date: '2026-07-19',
    lead: 'Un <strong>diagrama de Gantt</strong> es una representación del tiempo: cada tarea es una barra horizontal cuya posición indica cuándo empieza y cuya longitud indica cuánto dura. Puesto en una sola vista, responde la pregunta que ninguna lista de tareas responde bien: <em>¿qué está pasando a la vez, y qué depende de qué?</em>',
    figIntro: 'Las cuatro piezas que aparecen en cualquier diagrama de Gantt, sea de una boda o de una refinería:',
    sections: [
      ['Definición de diagrama de Gantt',
        `<p>Un diagrama de Gantt es un gráfico de barras horizontales que representa un calendario de proyecto. Cada barra es una tarea: su posición sobre el eje temporal indica cuándo empieza y cuándo termina, y su longitud indica cuánto dura.</p>
        <p>Esa definición parece trivial y no lo es. La clave está en que muestra <em>duración</em> y <em>solapamiento</em> a la vez, algo que ninguna lista de tareas consigue: en una lista, «diseño» y «desarrollo» son dos líneas consecutivas; en un Gantt se ve que se pisan tres semanas.</p>`],
      ['¿Qué aspecto tiene?',
        `<p>A la izquierda, una tabla con los nombres de las tareas, sus fechas y su responsable. A la derecha, la línea de tiempo con las barras. Entre ellas, flechas que conectan las tareas dependientes.</p>
        <p>Los elementos que aparecen prácticamente siempre son cuatro. Las <strong>barras</strong>, una por tarea. Los <strong>hitos</strong>, rombos sin duración que marcan fechas señaladas. Las <strong>dependencias</strong>, flechas que dicen qué va antes de qué. Y la <strong>ruta crítica</strong>, la cadena resaltada que determina la fecha de fin.</p>
        <p>Muchas herramientas añaden además una línea vertical de «hoy», sombreado de fines de semana y una barra de progreso dentro de cada tarea.</p>`],
      ['¿Para qué sirve un diagrama de Gantt?',
        `<p><strong>Para planificar.</strong> Obliga a decidir el orden del trabajo y a comprobar si las fechas se sostienen. La mayoría de los problemas de un plan aparecen al dibujarlo, no al ejecutarlo.</p>
        <p><strong>Para comunicar.</strong> Es el formato que entiende un cliente, un comité o un financiador sin explicación previa. Por eso se pide en propuestas de subvención, en informes de obra y en presentaciones de dirección.</p>
        <p><strong>Para hacer seguimiento.</strong> Con una línea base guardada, el gráfico deja de ser un plan y pasa a ser una medida: cuánto nos hemos desviado, dónde y si afecta a la entrega.</p>
        <p><strong>Para coordinar.</strong> Cuando varias personas dependen unas de otras, el gráfico responde «¿puedo empezar ya?» sin necesidad de preguntarlo.</p>`],
      ['Ejemplos por tipo de proyecto',
        `<p>La secuencia cambia mucho según el sector, aunque los elementos sean los mismos.</p>
        <p>En <strong>construcción</strong> el orden es rígido: permisos, cimentación, estructura, cerramiento, instalaciones y acabados, con inspecciones como barreras. En <strong>software</strong> los sprints se repiten como barras de duración fija y el valor está en mostrar releases y dependencias externas. En <strong>marketing</strong>, la fase que decide el calendario suele ser la de aprobaciones. En <strong>investigación</strong>, la aprobación ética bloquea la recogida de datos. En <strong>eventos</strong> y <strong>bodas</strong>, la fecha es fija y todo se planifica hacia atrás.</p>
        <p>Si quieres verlos con las fases ya cargadas, hay <a href="/es/blog/gantt-chart-examples.html">ocho ejemplos comentados</a> y más de cuarenta <a href="/es/templates.html">plantillas listas</a>.</p>`],
      ['Ventajas e inconvenientes',
        `<p><strong>A favor:</strong> muestra secuencia y solapamiento en una sola vista; hace visible la fecha de fin y qué la determina; es universalmente comprensible; y con dependencias se recalcula solo.</p>
        <p><strong>En contra:</strong> envejece rápido si el trabajo se reprioriza cada semana; tiende al exceso de detalle, que es la causa número uno de que se abandone; no muestra bien la carga de trabajo por persona sin una vista adicional; y da una impresión de precisión que las estimaciones no siempre respaldan.</p>
        <p>La conclusión práctica: si nadie va a preguntar «¿esto llega para tal fecha?», probablemente no necesitas un Gantt.</p>`],
      ['¿Quién inventó el diagrama de Gantt?',
        `<p>Lleva el nombre de Henry Gantt, ingeniero mecánico y consultor estadounidense que lo popularizó entre 1910 y 1915 para planificar producción industrial y construcción naval. No fue del todo el primero: el polaco Karol Adamiecki había desarrollado un gráfico equivalente, el harmonograma, unos quince años antes, pero lo publicó en polaco y en ruso, y el trabajo apenas circuló fuera de Europa del Este.</p>
        <p>Que un formato de hace un siglo siga en uso dice algo: resolvió bien un problema que no ha cambiado.</p>`],
      ['Gantt, línea de tiempo y Kanban: en qué se diferencian',
        `<p>Una <strong>línea de tiempo</strong> muestra cuándo ocurren las cosas, pero normalmente sin duración ni dependencias: sirve para comunicar, no para planificar.</p>
        <p>Un <strong>tablero Kanban</strong> muestra el estado del trabajo —pendiente, en curso, hecho— y es excelente para flujo continuo. Lo que no muestra es el calendario: un tablero no te dice si llegas a marzo.</p>
        <p>Un <strong>diagrama de Gantt</strong> muestra duración, solapamiento y dependencia. Es la herramienta adecuada cuando el trabajo tiene un orden y un plazo, y la equivocada cuando se reprioriza constantemente.</p>
        <p>No compiten: muchos equipos usan tablero para el día a día y Gantt para las fechas comprometidas y las dependencias externas.</p>`],
      ['Cómo hacer uno gratis',
        `<p>Necesitas tres cosas: la lista de tareas, una duración estimada para cada una y saber qué depende de qué. Con eso, el gráfico sale prácticamente solo.</p>
        <p>Puedes construirlo en Excel con un gráfico de barras apiladas, en Google Sheets con la función Cronograma, o directamente en el <a href="/es/app.html">editor de gantts.app</a>, que enlaza dependencias, calcula la ruta crítica y exporta a PDF, Excel y PowerPoint sin cuenta y sin marca de agua.</p>
        <p>La guía paso a paso está en <a href="/es/blog/how-to-make-a-gantt-chart.html">cómo hacer un diagrama de Gantt</a>.</p>`],
    ],
    callout: 'El error más común no es dibujar mal las barras: es dibujarlas sin dependencias. Un Gantt sin flechas es una lista de fechas bonita que hay que actualizar a mano cada vez que algo cambia. Con dependencias, mueves una tarea y el plan se recalcula solo — y solo entonces la ruta crítica significa algo.',
    faq: [
      ['¿Qué es exactamente un diagrama de Gantt?', 'Es un gráfico de barras horizontales sobre una línea de tiempo: cada barra representa una tarea, su posición indica cuándo ocurre y su longitud cuánto dura. Añadiendo dependencias e hitos se convierte en un modelo del calendario, no solo en un dibujo.'],
      ['¿Para qué sirve un diagrama de Gantt?', 'Para ver secuencia, solapamiento y fecha de fin en una sola vista. Es la herramienta adecuada cuando el trabajo tiene un orden y un plazo, y sirve además como documento de comunicación con clientes, dirección o financiadores.'],
      ['¿Cuál es la diferencia entre un Gantt y un cronograma?', 'Un cronograma es cualquier calendario de actividades; el diagrama de Gantt es una forma concreta de representarlo, con barras en una línea de tiempo. Todo diagrama de Gantt es un cronograma, pero no al revés.'],
      ['¿Necesito software para hacer uno?', 'No necesariamente, pero a mano se vuelve insostenible en cuanto hay dependencias: cada cambio obliga a recalcular todo. Puedes hacerlo gratis en el <a href="/es/app.html">editor de gantts.app</a>, sin cuenta y sin que el plan salga de tu navegador.'],
    ],
    related: [
      ['how-to-make-a-gantt-chart', 'Cómo hacer un diagrama de Gantt paso a paso'],
      ['critical-path-method', 'Cómo se calcula la ruta crítica'],
      ['gantt-chart-dependencies', 'Los cuatro tipos de dependencia'],
    ],
  },

  'how-to-make-a-gantt-chart': {
    h1: 'Cómo hacer un diagrama de Gantt paso a paso',
    metaTitle: 'Cómo hacer un diagrama de Gantt (paso a paso)',
    metaDesc: 'Guía práctica para crear un diagrama de Gantt: listar tareas, estimar duraciones, enlazar dependencias, marcar hitos y publicar el resultado.',
    date: '2026-07-19',
    lead: 'Hacer un <strong>diagrama de Gantt</strong> no consiste en dibujar barras: consiste en decidir el orden del trabajo y comprobar si las fechas se sostienen. Estos siete pasos son el orden que funciona, y explican por qué cada uno va donde va.',
    figIntro: 'El recorrido completo, del listado de tareas al gráfico publicado:',
    sections: [
      ['1. Lista el trabajo antes de pensar en fechas',
        `<p>Escribe todas las tareas sin preocuparte del calendario. Mezclar «qué hay que hacer» con «cuándo» es lo que produce planes optimistas: en cuanto ves una fecha, empiezas a ajustar el alcance para que quepa.</p>
        <p>Agrupa después en fases. Una fase con quince tareas dentro se lee mejor que un listado plano de cuarenta.</p>`],
      ['2. Estima duraciones, no fechas',
        `<p>Para cada tarea, cuánto tiempo lleva hacerla. Nada más. Las fechas saldrán solas cuando enlaces las dependencias — y si las fijas ahora, estarás inventando un calendario que tendrás que rehacer.</p>
        <p>Estima en días laborables si tu herramienta los distingue. Diez días que cruzan dos fines de semana son catorce días de calendario, y esa diferencia se acumula rápido.</p>`],
      ['3. Enlaza las dependencias',
        `<p>Este es el paso que la mayoría se salta y el que convierte el dibujo en un modelo. Para cada tarea pregunta: ¿qué tiene que estar terminado antes de poder empezar esto?</p>
        <p>La mayoría serán fin-inicio. Usa inicio-inicio cuando dos cosas arrancan juntas y fin-fin cuando deben terminar a la vez. Si te encuentras escribiendo fechas a mano para que las barras «queden bien», te falta una dependencia.</p>`],
      ['4. Marca los hitos que importan',
        `<p>Un hito es una fecha sin duración: aprobación concedida, contrato firmado, entrega realizada. Sirven para dos cosas: son lo que dirección mira primero, y son barreras naturales que impiden que el plan avance fuera de secuencia.</p>`],
      ['5. Mira la ruta crítica',
        `<p>Con las dependencias puestas, la ruta crítica aparece sola: la cadena que determina tu fecha de fin. Si no te gusta esa fecha, solo tienes tres opciones reales — acortar una tarea crítica, solaparla con la siguiente, o mover la fecha. Recortar tareas que no están en la ruta crítica no adelanta nada.</p>`],
      ['6. Asigna responsables y comprueba la carga',
        `<p>Pon un nombre en cada tarea y mira dónde se apilan. Un plan que parece impecable en el gráfico puede tener a la misma persona en cuatro tareas simultáneas en marzo. Ese solapamiento es invisible en las barras y evidente en una vista de carga.</p>`],
      ['7. Fija línea base y publica',
        `<p>Cuando el plan esté acordado, guarda una línea base: la foto congelada contra la que medirás la desviación. A partir de ahí, exporta a PDF o PowerPoint para compartirlo, y actualiza el porcentaje completado en lugar de redibujar.</p>`],
    ],
    callout: 'Ordena las tareas antes de fechar. Es tentador empezar arrastrando barras hasta que el gráfico «se ve bien», pero eso produce un calendario que solo se sostiene mientras nadie lo toque. Con dependencias, el plan se recalcula solo y la fecha de fin deja de ser una opinión.',
    faq: [
      ['¿Cuánto se tarda en hacer un diagrama de Gantt?', 'Con una plantilla, entre quince minutos y una hora para un proyecto normal. Lo que lleva tiempo no es dibujar: es decidir el orden del trabajo y estimar duraciones con honestidad.'],
      ['¿Puedo hacer un diagrama de Gantt en Excel?', 'Sí, con un gráfico de barras apiladas, aunque las dependencias hay que mantenerlas a mano y esa es justamente la parte que se rompe. Puedes descargar plantillas listas de Excel o editarlo online sin fórmulas.'],
      ['¿Cuántas tareas debe tener?', 'Las que puedas seguir de verdad. Entre veinte y sesenta filas es el rango cómodo para un proyecto único; por encima, agrupa en fases y despliega solo lo que necesites mirar.'],
      ['¿Es gratis hacerlo en gantts.app?', 'Sí. El <a href="/es/app.html">editor</a> es gratuito, sin registro y sin marca de agua, y el plan se queda en tu navegador.'],
    ],
    related: [
      ['what-is-a-gantt-chart', '¿Qué es un diagrama de Gantt?'],
      ['critical-path-method', 'Cómo se calcula la ruta crítica'],
      ['gantt-chart-mistakes', 'Errores habituales al planificar'],
    ],
  },

  'critical-path-method': {
    h1: 'El método de la ruta crítica (CPM), explicado',
    metaTitle: 'Método de la ruta crítica (CPM) explicado',
    metaDesc: 'Qué es la ruta crítica, cómo se calcula con pasada adelante y atrás, qué es la holgura y cómo usarla para decidir qué tareas puedes retrasar.',
    date: '2026-07-19',
    lead: 'La <strong>ruta crítica</strong> es la cadena de tareas más larga de tu proyecto, y por tanto la que fija la fecha de fin. Retrasa una tarea crítica un día y el proyecto entero se retrasa un día. Retrasa una que no lo es y puede que no pase absolutamente nada — esa diferencia es lo que el método hace visible.',
    figIntro: 'Pasada adelante, pasada atrás y la holgura que sale de restarlas:',
    sections: [
      ['¿Qué es el método de la ruta crítica?',
        `<p>El método de la ruta crítica (CPM, <em>critical path method</em>) es una técnica para calcular la duración mínima de un proyecto a partir de las duraciones de sus tareas y de las dependencias entre ellas.</p>
        <p>Su resultado más útil es una lista corta: qué tareas no admiten ningún retraso. Todo lo demás tiene margen, y saber cuál es cuál cambia por completo dónde pones la atención.</p>
        <p>Se desarrolló a finales de los años cincuenta en DuPont, para planificar paradas de planta química, en paralelo al método PERT que la Marina estadounidense creó para el programa Polaris.</p>`],
      ['Términos que necesitas',
        `<p><strong>Inicio temprano (ES)</strong> y <strong>fin temprano (EF):</strong> lo más pronto que una tarea puede empezar y terminar respetando sus predecesoras.</p>
        <p><strong>Inicio tardío (LS)</strong> y <strong>fin tardío (LF):</strong> lo más tarde que puede empezar y terminar sin retrasar el proyecto.</p>
        <p><strong>Holgura total:</strong> LS − ES, es decir, cuánto puedes retrasar la tarea sin mover la fecha de entrega.</p>
        <p><strong>Holgura libre:</strong> cuánto puedes retrasarla sin mover la tarea siguiente. Siempre es menor o igual que la total.</p>
        <p><strong>Ruta crítica:</strong> la cadena de tareas con holgura total cero.</p>`],
      ['Cómo se calcula, paso a paso',
        `<p><strong>1. Dibuja la red.</strong> Lista las tareas con su duración y sus predecesoras inmediatas.</p>
        <p><strong>2. Pasada adelante.</strong> Empieza en cero. Para cada tarea, ES es el mayor EF de sus predecesoras; EF = ES + duración. Al llegar al final, el mayor EF es la duración del proyecto.</p>
        <p><strong>3. Pasada atrás.</strong> Empieza por el final con LF igual a la duración total. Para cada tarea, LF es el menor LS de sus sucesoras; LS = LF − duración.</p>
        <p><strong>4. Calcula la holgura.</strong> Holgura total = LS − ES. Las tareas con holgura cero forman la ruta crítica.</p>
        <p>Con desfases (lag) el procedimiento es el mismo: el desfase se suma en la pasada adelante y se resta en la de atrás.</p>`],
      ['Un ejemplo resuelto',
        `<p>Cuatro tareas. A dura 3 días y no tiene predecesoras. B dura 4 y depende de A. C dura 2 y también depende de A. D dura 3 y depende de B y de C.</p>
        <p><em>Pasada adelante:</em> A va de 0 a 3. B de 3 a 7. C de 3 a 5. D no puede empezar hasta que ambas terminen, así que arranca en 7 y termina en 10. El proyecto dura 10 días.</p>
        <p><em>Pasada atrás:</em> D va de 7 a 10. B debe terminar en 7, luego va de 3 a 7. C debe terminar en 7, luego va de 5 a 7. A de 0 a 3.</p>
        <p><em>Holguras:</em> A, B y D tienen holgura cero — son críticas. C tiene 2 días de holgura: puede retrasarse dos días sin afectar a nada.</p>
        <p>Observa la consecuencia práctica: acelerar C no adelanta el proyecto ni un día. Solo mover A, B o D lo hace.</p>`],
      ['CPM, PERT y cadena crítica',
        `<p><strong>CPM</strong> usa una duración única por tarea y es determinista. Es lo que usan la mayoría de las herramientas.</p>
        <p><strong>PERT</strong> usa tres estimaciones —optimista, más probable y pesimista— y calcula una duración esperada ponderada. Sirve cuando la incertidumbre es alta y quieres hablar de probabilidad en lugar de una fecha única.</p>
        <p><strong>Cadena crítica</strong> parte del CPM pero retira los márgenes individuales de cada tarea y los agrupa en un colchón al final del proyecto, para evitar que la holgura se consuma tarea a tarea. Es la respuesta de la teoría de restricciones al problema de que el margen repartido siempre desaparece.</p>`],
      ['Verla automáticamente',
        `<p>Calcular esto a mano funciona con cuatro tareas y es inviable con cuarenta, sobre todo porque la ruta crítica cambia cada vez que ajustas una duración.</p>
        <p>En el <a href="/es/app.html">editor gratuito</a>, enlaza las dependencias y activa la ruta crítica: se resalta sola y se recalcula al instante con cada cambio. La columna de holgura muestra además cuántos días de margen tiene cada tarea, que es la cifra que de verdad usas para decidir prioridades.</p>`],
    ],
    callout: 'La ruta crítica solo existe si has puesto dependencias. Un diagrama con fechas escritas a mano no tiene red que recorrer, así que cualquier herramienta te dirá que todo es crítico o que nada lo es. Enlazar las tareas es el requisito previo, no un adorno.',
    faq: [
      ['¿Qué es la ruta crítica en un proyecto?', 'La secuencia de tareas dependientes más larga entre el inicio y el fin. Determina la duración mínima del proyecto: ninguna de sus tareas puede retrasarse sin retrasar la entrega.'],
      ['¿Qué diferencia hay entre holgura total y holgura libre?', 'La holgura total es cuánto puede retrasarse una tarea sin mover el fin del proyecto. La holgura libre es cuánto puede retrasarse sin mover la tarea siguiente. La total suele ser mayor o igual que la libre.'],
      ['¿Puede haber más de una ruta crítica?', 'Sí. Cuando dos o más cadenas tienen exactamente la misma duración total, todas son críticas — y el proyecto se vuelve más frágil, porque hay más tareas sin margen.'],
      ['¿Cómo veo la ruta crítica de mi plan?', 'Enlaza las dependencias y activa la ruta crítica en el <a href="/es/app.html">editor gratuito</a>: la cadena que fija tu fecha de fin se resalta sola y se actualiza cada vez que cambias una duración.'],
    ],
    related: [
      ['gantt-chart-dependencies', 'Los cuatro tipos de dependencia'],
      ['what-is-a-gantt-chart', '¿Qué es un diagrama de Gantt?'],
      ['gantt-baseline-variance', 'Medir la desviación con una línea base'],
    ],
  },

  'gantt-chart-dependencies': {
    h1: 'Dependencias en un diagrama de Gantt: los cuatro tipos',
    metaTitle: 'Dependencias en Gantt: FS, SS, FF y SF',
    metaDesc: 'Los cuatro tipos de dependencia (fin-inicio, inicio-inicio, fin-fin, inicio-fin), cuándo usar cada uno y cómo funcionan los desfases positivos y negativos.',
    date: '2026-07-19',
    lead: 'Las <strong>dependencias</strong> son lo que separa un diagrama de Gantt de un dibujo de barras. Dicen qué tiene que ocurrir antes que qué, y hacen que al mover una tarea se mueva todo lo que va detrás. Hay cuatro tipos, y en la práctica uno cubre la mayoría de los casos.',
    figIntro: 'Los cuatro tipos, con el desfase que se les puede añadir:',
    sections: [
      ['Fin-inicio (FS): la que usarás casi siempre',
        `<p>La tarea B no puede empezar hasta que A termine. Cimentar y luego levantar muros. Escribir el código y luego probarlo. Es el comportamiento por defecto y cubre la gran mayoría de las relaciones reales.</p>
        <p>Si dudas de qué tipo poner, es fin-inicio.</p>`],
      ['Inicio-inicio (SS): arrancan juntas',
        `<p>B no puede empezar hasta que A empiece. Se usa cuando dos trabajos avanzan en paralelo pero uno marca el arranque del otro: en cuanto empieza el hormigonado, empieza el control de calidad; en cuanto empieza la migración de datos, empieza la validación.</p>
        <p>Muy útil con desfase: «empieza la revisión tres días después de que empiece la redacción».</p>`],
      ['Fin-fin (FF): terminan juntas',
        `<p>B no puede terminar hasta que A termine. Típico en pruebas y documentación: la documentación no puede cerrarse antes de que el desarrollo lo haga, aunque lleve semanas avanzando en paralelo.</p>`],
      ['Inicio-fin (SF): la rara',
        `<p>B no puede terminar hasta que A empiece. Aparece sobre todo en relevos y traspasos: el turno saliente no termina hasta que el entrante empieza. Es legítima, pero si la estás usando mucho, merece la pena revisar si el plan está bien modelado.</p>`],
      ['Desfases: adelantos y esperas',
        `<p>Un desfase positivo introduce espera: «pintar empieza tres días después de enlucir» para dar tiempo de secado. Un desfase negativo introduce solape: «empezar a probar dos días antes de que termine el desarrollo».</p>
        <p>Los desfases negativos son la forma limpia de comprimir un calendario. Escribir fechas a mano para conseguir el mismo solape funciona hasta el primer cambio, momento en el que el plan deja de recalcularse.</p>`],
    ],
    callout: 'Si te encuentras corrigiendo fechas a mano para que las barras encajen, casi siempre falta una dependencia. La señal es clara: cada vez que se mueve una tarea tienes que arreglar tres más. Con la relación bien puesta, esas tres se mueven solas.',
    faq: [
      ['¿Cuáles son los 4 tipos de dependencia en un diagrama de Gantt?', 'Fin-inicio (FS), inicio-inicio (SS), fin-fin (FF) e inicio-fin (SF). Fin-inicio es con diferencia la más frecuente y la que conviene usar salvo que el caso pida otra cosa.'],
      ['¿Qué es el desfase (lag) en una dependencia?', 'Un retardo o un adelanto aplicado a la relación. Positivo introduce espera —tiempo de secado, curado, revisión externa—; negativo introduce solape, permitiendo que la tarea siguiente empiece antes de que la anterior termine.'],
      ['¿Cuándo debo usar inicio-inicio en vez de fin-inicio?', 'Cuando dos tareas avanzan en paralelo y lo que importa es que arranquen coordinadas, no que una termine. Control de calidad junto a producción, o validación junto a migración, son casos típicos.'],
      ['¿Puedo editar el tipo de dependencia después de crearla?', 'Sí. En el <a href="/es/app.html">editor de gantts.app</a> se hace clic sobre la flecha y se cambia el tipo o el desfase; el resto del plan se recalcula al instante.'],
    ],
    related: [
      ['critical-path-method', 'Cómo se calcula la ruta crítica'],
      ['what-is-a-gantt-chart', '¿Qué es un diagrama de Gantt?'],
      ['how-to-make-a-gantt-chart', 'Cómo hacer un diagrama de Gantt paso a paso'],
    ],
  },

  'gantt-chart-examples': {
    h1: 'Ejemplos de diagramas de Gantt para cada tipo de proyecto',
    metaTitle: 'Ejemplos de diagramas de Gantt (8 casos reales)',
    metaDesc: 'Ocho ejemplos de diagramas de Gantt —obra, software, marketing, eventos, lanzamiento, tesis, pequeña empresa y plan semanal— con las fases de cada uno.',
    date: '2026-07-19',
    lead: 'La forma más rápida de entender un <strong>diagrama de Gantt</strong> es ver uno de tu propio sector. Aquí van ocho ejemplos con las fases que realmente usa cada tipo de proyecto, y qué es lo que conviene mirar en cada uno.',
    figIntro: 'Los mismos elementos, secuenciados de forma distinta según el proyecto:',
    sections: [
      ['1. Proyecto de construcción',
        `<p>Movilización, cimentación, estructura, cerramiento, instalaciones, acabados y recepción. La secuencia es rígida: no se levanta estructura sobre hormigón sin curar, y eso convierte casi todas las relaciones en fin-inicio con desfase.</p>
        <p>Qué mirar: los permisos y las inspecciones. Son barreras de terceros y suelen determinar la fecha real de entrega más que la propia obra.</p>`],
      ['2. Desarrollo de software / ágil',
        `<p>Descubrimiento, diseño, sprints de desarrollo, integración, pruebas y despliegue. Los sprints se representan como barras de duración fija y repetida; el valor del Gantt aquí no es planificar dentro del sprint sino mostrar cómo encajan releases, dependencias externas y fechas comprometidas.</p>`],
      ['3. Campaña de marketing',
        `<p>Estrategia, creatividades, producción, aprobaciones, lanzamiento y medición. La fase que siempre se subestima es la de aprobaciones: esperar la respuesta de un cliente es tiempo transcurrido real y merece su propia barra.</p>`],
      ['4. Organización de eventos',
        `<p>Fecha y sede, proveedores, comunicación, inscripciones, montaje, evento y desmontaje. Es un proyecto con una fecha inamovible, así que se planifica hacia atrás desde el día del evento.</p>`],
      ['5. Lanzamiento de producto',
        `<p>Preparación, beta, materiales de venta, formación comercial, lanzamiento y seguimiento. Conviene marcar como hitos los puntos de no retorno: fabricación comprometida, embargo de prensa, apertura de pedidos.</p>`],
      ['6. Tesis o investigación',
        `<p>Propuesta, revisión bibliográfica, metodología y ética, recogida de datos, análisis, redacción y entrega. La aprobación ética es una dependencia dura: la recogida de datos no puede empezar antes.</p>`],
      ['7. Proyecto de pequeña empresa',
        `<p>Cuatro o cinco fases, veinte tareas, un responsable por línea. El error más común aquí es el contrario al de las grandes obras: demasiado poco detalle, hasta el punto de que una barra de «poner en marcha la tienda» no dice nada útil.</p>`],
      ['8. Plan semanal sencillo',
        `<p>Una rejilla de cinco días con las tareas de la semana. No necesita dependencias ni ruta crítica: es una herramienta de foco, no de planificación. Es el formato que mejor funciona pegado en una pared.</p>`],
    ],
    callout: 'Fíjate en lo que tienen en común: todos empiezan por fases, no por tareas sueltas. Un diagrama que arranca con cuarenta filas al mismo nivel es ilegible independientemente del sector. Agrupa primero en cinco o seis fases y despliega solo lo que necesites mirar.',
    faq: [
      ['¿Cuál es el mejor ejemplo para empezar?', 'El más cercano a tu proyecto. Si ninguno encaja del todo, el de gestión de proyectos genérica sirve como esqueleto: fases, hitos y dependencias son iguales en todos los sectores.'],
      ['¿Puedo descargar estos ejemplos?', 'Sí, cada tipo tiene su plantilla con las tareas ya cargadas, en Excel, PowerPoint y CSV, además de edición online gratuita.'],
      ['¿Cuántas tareas debería tener mi diagrama?', 'Las que puedas mantener actualizadas. Entre veinte y sesenta filas es el rango cómodo; por encima, agrupa en fases.'],
    ],
    related: [
      ['what-is-a-gantt-chart', '¿Qué es un diagrama de Gantt?'],
      ['how-to-make-a-gantt-chart', 'Cómo hacer un diagrama de Gantt paso a paso'],
      ['gantt-chart-mistakes', 'Errores habituales al planificar'],
    ],
  },

  'gantt-chart-in-excel': {
    h1: 'Cómo hacer un diagrama de Gantt en Excel',
    metaTitle: 'Cómo hacer un diagrama de Gantt en Excel',
    metaDesc: 'Guía paso a paso para crear un diagrama de Gantt en Excel con un gráfico de barras apiladas, más cómo añadir dependencias y porcentaje completado.',
    date: '2026-07-19',
    lead: 'Excel no tiene un tipo de gráfico «Gantt», pero se puede construir uno con un <strong>gráfico de barras apiladas</strong> al que se le oculta la primera serie. Estos son los cinco pasos, y también dónde está el límite de este método.',
    figIntro: 'El truco central: la barra de inicio existe pero es invisible.',
    sections: [
      ['¿Excel tiene diagramas de Gantt?',
        `<p>No como tal. Lo que se usa es un gráfico de barras apiladas en horizontal: la primera serie es la fecha de inicio, la segunda la duración. Dejando la primera sin relleno, lo único que se ve es la duración, desplazada hasta donde empieza la tarea. Eso es visualmente un Gantt.</p>`],
      ['Paso 1: tabla con tarea, inicio, fin y duración',
        `<p>Cuatro columnas: nombre de la tarea, fecha de inicio, fecha de fin y duración calculada como <code>=fin − inicio</code>. Mantén las fechas como fechas reales, no como texto, o el gráfico no las situará bien.</p>`],
      ['Paso 2: insertar un gráfico de barras apiladas',
        `<p>Selecciona tarea e inicio, inserta un gráfico de barras apiladas y añade después la serie de duración. Excel casi siempre coloca las series en el orden equivocado la primera vez; se corrige en «Seleccionar datos».</p>`],
      ['Paso 3: dejar la serie de inicio sin relleno',
        `<p>Haz clic sobre las barras de inicio, y en formato de serie elige «Sin relleno». Ahí aparece el Gantt: las duraciones quedan flotando en la posición correcta.</p>`],
      ['Paso 4: invertir el orden de las tareas',
        `<p>Excel dibuja la primera tarea abajo. En el formato del eje vertical, activa «Categorías en orden inverso» para que el plan se lea de arriba abajo como es habitual.</p>`],
      ['Paso 5: formatear fechas y colores',
        `<p>Fija el mínimo del eje horizontal en tu fecha de inicio (Excel usa números de serie, así que conviene escribirlo como fecha y dejar que lo convierta) y da color por fase. Con eso el gráfico ya es presentable.</p>`],
      ['Dependencias y porcentaje completado',
        `<p>Aquí está el límite. Excel no conoce las dependencias: si una tarea se retrasa, tienes que mover a mano todas las siguientes. El porcentaje completado se puede simular con una tercera serie superpuesta, pero se vuelve frágil en cuanto el plan crece.</p>
        <p>Si tu proyecto tiene más de una decena de tareas enlazadas, el mantenimiento del gráfico acaba costando más que la planificación. Ese es el momento de usar una herramienta que recalcule sola — puedes <a href="/es/app.html">abrir el editor gratuito</a> o descargar una plantilla ya montada.</p>`],
    ],
    callout: 'El método de barras apiladas funciona y no requiere complementos, pero produce un dibujo, no un modelo. En cuanto necesites que al mover una tarea se muevan las siguientes, Excel deja de ayudarte: no hay dependencias que recalcular.',
    faq: [
      ['¿Excel tiene una plantilla de Gantt integrada?', 'Algunas versiones incluyen plantillas de proyecto, pero varían según la versión y la región. El método de barras apiladas funciona en cualquier Excel moderno, y también puedes descargar una plantilla lista.'],
      ['¿Cómo añado dependencias en Excel?', 'No hay soporte nativo. Se pueden dibujar flechas manualmente sobre el gráfico, pero no se recalculan al mover tareas — que es precisamente para lo que sirven las dependencias.'],
      ['¿Es mejor Excel o una herramienta específica?', 'Excel va bien para un plan corto y estático que ya vas a compartir en una hoja de cálculo. Para planes con dependencias, ruta crítica o actualizaciones frecuentes, una herramienta específica ahorra mucho mantenimiento manual.'],
    ],
    related: [
      ['gantt-chart-in-google-sheets', 'Cómo hacerlo en Google Sheets'],
      ['gantt-chart-in-powerpoint', 'Cómo hacerlo en PowerPoint'],
      ['how-to-make-a-gantt-chart', 'Cómo hacer un diagrama de Gantt paso a paso'],
    ],
  },

  'gantt-chart-in-google-sheets': {
    h1: 'Cómo hacer un diagrama de Gantt en Google Sheets',
    metaTitle: 'Diagrama de Gantt en Google Sheets: 3 métodos',
    metaDesc: 'Tres formas de hacer un diagrama de Gantt en Google Sheets: la función Cronograma, un gráfico de barras apiladas y las plantillas gratuitas.',
    date: '2026-07-19',
    lead: 'Google Sheets permite hacer un <strong>diagrama de Gantt</strong> de tres formas distintas, y la mejor depende de para qué lo necesites. Una es nativa, otra es el clásico truco de barras apiladas y la tercera es no construirlo.',
    figIntro: 'Los tres caminos, de menos a más control:',
    sections: [
      ['Método 1: la función Cronograma (Insertar → Cronograma)',
        `<p>Sheets incorpora una vista de cronograma que toma una tabla con fechas y la representa como barras sobre una línea de tiempo. Es la vía más rápida y no requiere trucos: seleccionas el rango, insertas el cronograma y eliges qué columnas son inicio, fin y título.</p>
        <p>A cambio, el control visual es limitado y no hay dependencias ni ruta crítica.</p>`],
      ['Método 2: gráfico de barras apiladas',
        `<p>El mismo principio que en Excel: una serie con la fecha de inicio, otra con la duración, y la primera sin relleno para que quede invisible. Da más control sobre colores y ejes, a cambio de bastante más configuración manual.</p>
        <p>Recuerda invertir el orden del eje de categorías para que la primera tarea salga arriba.</p>`],
      ['Método 3: usar una plantilla',
        `<p>Si el objetivo es tener el gráfico hoy, empezar de una plantilla evita todo lo anterior. Descarga un CSV con las tareas ya estructuradas y ábrelo en Sheets, o edítalo online y expórtalo cuando esté listo.</p>`],
      ['Personalizar la vista y añadir dependencias',
        `<p>Puedes ajustar el rango de fechas, agrupar por fases con formato condicional y marcar hitos con una fila de duración cero. Las dependencias, en cambio, no existen en Sheets: si mueves una tarea, ninguna otra se entera.</p>`],
      ['Los límites de Sheets, y una alternativa gratuita',
        `<p>Sheets es excelente para colaborar sobre datos y mediocre para planificar calendarios: sin dependencias, sin ruta crítica y sin días laborables, cada cambio obliga a recalcular a mano. Para un plan de veinte tareas eso se aguanta; para sesenta, no.</p>
        <p>La alternativa sin registro es <a href="/es/app.html">el editor de gantts.app</a>: importas el CSV que ya tienes en Sheets, enlazas las dependencias y exportas cuando lo necesites.</p>`],
    ],
    callout: 'Si tu plan va a cambiar más de una vez, elige el método por el coste de mantenerlo, no por lo rápido que es montarlo. La función Cronograma se hace en dos minutos; un gráfico de barras apiladas con veinte tareas se rehace en veinte cada vez que se mueve una fecha.',
    faq: [
      ['¿Google Sheets puede hacer diagramas de Gantt?', 'Sí, de tres formas: con la función Cronograma integrada, con un gráfico de barras apiladas al que se oculta la serie de inicio, o partiendo de una plantilla.'],
      ['¿La función Cronograma admite dependencias?', 'No. Muestra las barras en la línea de tiempo, pero no enlaza tareas ni recalcula fechas, así que no hay ruta crítica.'],
      ['¿Puedo pasar mi hoja a una herramienta de Gantt?', 'Sí. Exporta la hoja como CSV e impórtala; el <a href="/es/app.html">editor gratuito</a> acepta CSV con columnas de tarea, inicio y fin.'],
    ],
    related: [
      ['gantt-chart-in-excel', 'Cómo hacerlo en Excel'],
      ['gantt-chart-in-powerpoint', 'Cómo hacerlo en PowerPoint'],
      ['what-is-a-gantt-chart', '¿Qué es un diagrama de Gantt?'],
    ],
  },

  'gantt-chart-in-powerpoint': {
    h1: 'Cómo hacer un diagrama de Gantt en PowerPoint',
    metaTitle: 'Cómo hacer un diagrama de Gantt en PowerPoint',
    metaDesc: 'Dos formas de crear un diagrama de Gantt en PowerPoint —gráfico de barras apiladas o formas manuales— y cómo prepararlo para presentar.',
    date: '2026-07-19',
    lead: 'En PowerPoint un <strong>diagrama de Gantt</strong> casi nunca es una herramienta de planificación: es una diapositiva. Eso cambia las prioridades — importa que se lea desde el fondo de la sala más que que sea exacto al día.',
    figIntro: 'Dos caminos según cuánto control visual necesites:',
    sections: [
      ['Dos formas de construirlo',
        `<p>La primera es insertar un gráfico de barras apiladas y ocultar la serie de inicio, igual que en Excel. La segunda es dibujar rectángulos a mano. La primera mantiene los datos; la segunda da control total sobre el aspecto.</p>
        <p>Para una diapositiva de dirección, la segunda suele ganar. Para algo que vas a actualizar cada mes, la primera.</p>`],
      ['Método 1: gráfico de barras apiladas, paso a paso',
        `<p>Insertar → Gráfico → Barra apilada. En la hoja de datos que abre PowerPoint, pon tarea, inicio y duración. Deja la serie de inicio sin relleno, invierte el orden de las categorías y ajusta el eje de fechas.</p>`],
      ['Método 2: formas o SmartArt',
        `<p>Dibuja un rectángulo por tarea sobre una rejilla de meses. Es más trabajo la primera vez y mucho más rápido de retocar después, y permite cosas que el gráfico no da: barras redondeadas, iconos, anotaciones, colores por equipo.</p>
        <p>Alinea con las guías inteligentes y agrupa cada fase para poder moverla entera.</p>`],
      ['Plantilla de PowerPoint gratuita',
        `<p>Si prefieres no empezar de cero, cada plantilla del catálogo incluye una versión .pptx con las fases ya dibujadas y editables como formas nativas.</p>`],
      ['La vía rápida: diseñar online y exportar a PowerPoint',
        `<p>La alternativa que ahorra más tiempo es montar el plan donde las dependencias se recalculan solas y exportar la diapositiva al final. Desde <a href="/es/app.html">el editor</a> puedes exportar directamente a .pptx y seguir editando las formas en PowerPoint.</p>`],
      ['Consejos para presentar',
        `<p>Menos filas de las que crees: ocho o diez barras es lo máximo que se lee de un vistazo, así que agrupa por fases. Usa un solo color de acento para lo crítico y grises para el resto. Marca los hitos como rombos con la fecha escrita al lado — es lo que la audiencia va a fotografiar.</p>`],
    ],
    callout: 'Una diapositiva de Gantt no es tu plan, es un resumen de tu plan. Si estás intentando meter cuarenta tareas en una lámina, el problema no es PowerPoint: la audiencia necesita las fases y los hitos, y el detalle vive en otro documento.',
    faq: [
      ['¿PowerPoint tiene plantillas de Gantt?', 'Incluye plantillas de línea de tiempo, aunque varían según la versión. También puedes descargar una plantilla .pptx ya montada con fases editables.'],
      ['¿Qué método es mejor?', 'Formas si la diapositiva es para presentar y quieres control visual; gráfico de barras apiladas si vas a actualizar los datos periódicamente.'],
      ['¿Puedo exportar mi plan a PowerPoint?', 'Sí. Desde el <a href="/es/app.html">editor gratuito</a> se exporta a .pptx, y las barras llegan como formas editables, no como una imagen.'],
    ],
    related: [
      ['gantt-chart-in-excel', 'Cómo hacerlo en Excel'],
      ['gantt-chart-examples', 'Ejemplos por tipo de proyecto'],
      ['how-to-make-a-gantt-chart', 'Cómo hacer un diagrama de Gantt paso a paso'],
    ],
  },

  'best-free-gantt-chart-software': {
    h1: 'Los mejores programas gratuitos de diagramas de Gantt (2026)',
    metaTitle: 'Diagramas de Gantt gratis: 9 programas (2026)',
    metaDesc: 'Comparativa honesta de nueve herramientas de Gantt: qué es gratis de verdad, qué es freemium, qué exige registro y cuáles incluyen ruta crítica.',
    date: '2026-07-19',
    lead: '«Gratis» es la palabra más maltratada del software de proyectos. Muchas herramientas que aparecen buscando «diagrama de Gantt gratis» son en realidad freemium o una prueba de 14 días. Esta es una comparación honesta de nueve opciones: qué es gratuito de verdad, qué exige registro y cuáles incluyen exportación y ruta crítica. Nosotros desarrollamos una de estas herramientas, así que lo señalamos con claridad y hemos procurado describir el resto con exactitud.',
    figIntro: 'Tres modelos de negocio que se anuncian igual y funcionan de forma muy distinta:',
    sections: [
      ['Qué significa «gratis» realmente',
        `<p>Antes de comparar conviene separar tres modelos que se presentan todos como gratuitos:</p>
        <p><strong>Gratuito.</strong> Sin coste, sin caducidad y sin funciones retenidas. Aquí entran las aplicaciones de código abierto y las herramientas web realmente libres.</p>
        <p><strong>Freemium.</strong> Un plan limitado gratuito para siempre, pero con un tope —proyectos, tareas, colaboradores— o con funciones clave de pago, como la exportación o la ruta crítica. Sirve para trabajo real solo si te mantienes dentro de los límites.</p>
        <p><strong>Prueba gratuita.</strong> Acceso completo durante un plazo fijo, normalmente de 14 a 30 días, tras el cual hay que pagar. Útil para evaluar, no como solución permanente.</p>
        <p>Los tres modelos son legítimos. El problema aparece solo cuando una prueba o un plan muy limitado se presenta simplemente como «gratis».</p>`],
      ['Comparativa rápida',
        `<p>Los límites de los planes cambian con el tiempo, así que trata estas cifras como orientativas y confírmalas en la página de precios de cada fabricante.</p>
        <p><strong>gantts.app</strong> — totalmente gratuito, tareas y proyectos ilimitados, sin registro. Exporta a PDF, PNG, Excel y PowerPoint. Ruta crítica incluida y gratuita. <em>(Es nuestra herramienta.)</em></p>
        <p><strong>GanttProject</strong> — gratuito y de código abierto, de escritorio. No requiere cuenta, solo descarga. Exporta a PDF, PNG y CSV, con ruta crítica.</p>
        <p><strong>OnlineGantt y otras herramientas web pequeñas</strong> — funciones básicas gratuitas, registro variable y a menudo innecesario, exportación a imagen o PDF. La ruta crítica depende de la herramienta.</p>
        <p><strong>TeamGantt (plan gratuito)</strong> — aproximadamente un proyecto, unas 60 tareas y un equipo reducido. Requiere registro y la exportación es limitada en el plan gratuito; la ruta crítica es de pago.</p>
        <p><strong>GanttPRO</strong> — prueba gratuita y después de pago, con registro. Exportación y ruta crítica en los planes de pago.</p>
        <p><strong>Instagantt</strong> — freemium con capa gratuita limitada y registro obligatorio. Exportación en planes superiores; ruta crítica de pago.</p>
        <p><strong>Canva</strong> — capa gratuita de diseño con registro. Exporta a PNG y PDF, pero el resultado es estático: no hay ruta crítica porque no hay motor de planificación.</p>
        <p><strong>Microsoft Project</strong> — de pago, sin plan gratuito. Exportación y ruta crítica completas.</p>`],
      ['Herramientas gratuitas que no piden registro',
        `<p>Es una categoría corta. La mayoría de las opciones web exigen cuenta antes de dejarte exportar, que es justo el momento en el que necesitas el archivo. Las que no la piden son las herramientas de escritorio de código abierto y unas pocas aplicaciones web que funcionan íntegramente en el navegador.</p>
        <p>Si el requisito es «hoy, sin dar mi correo, y con el archivo en la mano», ese es el filtro que más reduce la lista.</p>`],
      ['Cómo elegir',
        `<p>Responde tres preguntas y la elección se resuelve sola. ¿Necesitas <em>dependencias y ruta crítica</em>, o solo un dibujo? ¿Necesitas <em>exportar</em> a un formato concreto para un cliente o un comité? ¿Vas a <em>colaborar en tiempo real</em>, o el plan lo mantiene una persona?</p>
        <p>La colaboración en vivo es lo único de esta lista que obliga de verdad a un servicio de pago, porque requiere servidores y cuentas. Todo lo demás —dependencias, ruta crítica, línea base, exportación— existe gratis si sabes dónde mirar.</p>`],
    ],
    callout: 'Antes de invertir horas en una herramienta, comprueba dónde está el muro. Suele estar en la exportación: puedes construir el plan entero y descubrir al final que descargar el PDF exige una suscripción. Prueba a exportar en los primeros cinco minutos, no en los últimos.',
    faq: [
      ['¿Cuál es el mejor programa gratuito de diagramas de Gantt?', 'Depende de si necesitas escritorio o navegador. GanttProject es la opción de escritorio de código abierto más sólida; entre las web, busca las que no exijan cuenta y permitan exportar sin pagar.'],
      ['¿Los planes gratuitos incluyen la ruta crítica?', 'Muchos no. Es una de las funciones que más se reserva a los planes de pago, junto con la exportación y las líneas base. Conviene confirmarlo antes de empezar.'],
      ['¿Puedo usar una herramienta gratuita para trabajo profesional?', 'Sí, siempre que la exportación no esté limitada y el plan no tenga topes de tareas. Lo que rara vez es gratuito es la colaboración en tiempo real.'],
      ['¿gantts.app es gratis de verdad?', 'Sí: sin cuenta, sin límite de tareas ni proyectos, con ruta crítica y exportación a PDF, PNG, Excel y PowerPoint. El plan se guarda en tu navegador y no se sube a ningún servidor.'],
    ],
    related: [
      ['what-is-a-gantt-chart', '¿Qué es un diagrama de Gantt?'],
      ['gantt-chart-in-excel', 'Cómo hacerlo en Excel'],
      ['how-to-make-a-gantt-chart', 'Cómo hacer un diagrama de Gantt paso a paso'],
    ],
  },

  'gantt-baseline-variance': {
    h1: 'Línea base y desviación: medir el retraso en un diagrama de Gantt',
    metaTitle: 'Línea base y desviación en un diagrama de Gantt',
    metaDesc: 'Qué es una línea base, cuándo fijarla, cómo leer la desviación de inicio y de fin, y cuándo tiene sentido volver a establecerla.',
    date: '2026-07-19',
    lead: 'Una <strong>línea base</strong> es una foto congelada del plan aprobado. Sin ella, «vamos con retraso» es una impresión; con ella, es una cifra: esta tarea empezó seis días tarde y terminará cuatro tarde. Esa diferencia es lo que convierte el seguimiento en una conversación con datos.',
    figIntro: 'Plan congelado arriba, realidad debajo, y la diferencia entre ambos:',
    sections: [
      ['Qué es exactamente una línea base',
        `<p>Es una copia de las fechas —y opcionalmente del avance— en el momento en que el plan se aprueba. No cambia cuando cambias el plan: precisamente por eso sirve de referencia. Todo lo que ocurra después se mide contra ella.</p>
        <p>Sin línea base, cada vez que arrastras una barra el plan «siempre ha sido así». Es el equivalente a borrar el punto de partida.</p>`],
      ['Cuándo fijarla, y cuándo no',
        `<p>Fíjala cuando el plan esté acordado y no antes: una línea base sobre un borrador solo genera desviaciones falsas. En la práctica, el momento suele ser el cierre del diseño, la firma del contrato o la concesión del permiso — el punto en el que las estimaciones dejan de ser conjeturas.</p>
        <p>No la fijes mientras el alcance siga en discusión. Estarás midiendo contra una hipótesis.</p>`],
      ['Leer la desviación de inicio y de fin',
        `<p>La desviación de inicio dice si la tarea arrancó cuando debía; la de fin, si terminó cuando debía. No siempre coinciden, y la combinación es informativa: empezar tarde y terminar a tiempo significa que se recuperó; empezar a tiempo y terminar tarde significa que la estimación era mala.</p>
        <p>Un signo positivo indica retraso respecto a la línea base; uno negativo, adelanto.</p>`],
      ['La desviación que importa es la de la ruta crítica',
        `<p>Una tarea con quince días de holgura que se retrasa tres días no ha hecho nada al proyecto. Una tarea crítica que se retrasa un día ha retrasado la entrega un día. Mirar la lista de desviaciones sin cruzarla con la ruta crítica lleva a gastar energía en el sitio equivocado.</p>`],
      ['Cuándo volver a fijar la línea base',
        `<p>Cuando el plan original deja de ser una referencia útil: un cambio de alcance aprobado, una parada larga, una replanificación formal. Rehacerla porque vamos con retraso es tentador y destruye la única evidencia de que hubo retraso.</p>
        <p>Si vuelves a fijarla, deja constancia de por qué y de cuándo. Una línea base sin historia es tan poco fiable como no tenerla.</p>`],
      ['Cómo se hace en gantts.app',
        `<p>Desde el menú de línea base puedes fijarla con el plan actual, mostrar las columnas de línea base y desviación, o borrarla. Las barras de línea base se dibujan bajo las reales, así que el desfase se ve sin leer números. <a href="/es/app.html">Abrir el editor</a>.</p>`],
    ],
    callout: 'Volver a fijar la línea base cada vez que el plan se desvía equivale a no tener línea base. El objetivo no es que la desviación sea cero: es saber cuánta hay, dónde está y si toca la ruta crítica.',
    faq: [
      ['¿Qué diferencia hay entre línea base y plan actual?', 'La línea base son las fechas aprobadas y congeladas; el plan actual son las fechas vigentes, con los cambios ya aplicados. La desviación es la resta entre ambas.'],
      ['¿Cuándo debo fijar la línea base?', 'Cuando el plan esté aprobado y el alcance estable — típicamente al cierre del diseño, la firma del contrato o la concesión del permiso.'],
      ['¿Puedo tener varias líneas base?', 'En herramientas de gestión formal, sí. En gantts.app se mantiene una, que puedes actualizar o borrar; lo importante es registrar por qué cambió.'],
      ['¿Qué es una desviación aceptable?', 'Depende del proyecto, pero la pregunta útil no es el tamaño sino la ubicación: cualquier desviación sobre la ruta crítica se traslada directamente a la fecha de entrega.'],
    ],
    related: [
      ['critical-path-method', 'Cómo se calcula la ruta crítica'],
      ['gantt-chart-mistakes', 'Errores habituales al planificar'],
      ['what-is-a-gantt-chart', '¿Qué es un diagrama de Gantt?'],
    ],
  },

  'gantt-chart-mistakes': {
    h1: 'Nueve errores habituales en un diagrama de Gantt (y cómo corregirlos)',
    metaTitle: 'Nueve errores en diagramas de Gantt',
    metaDesc: 'Exceso de detalle, falta de dependencias, estimaciones tratadas como compromisos, cero holgura, ruta crítica ignorada y otros errores frecuentes.',
    date: '2026-07-19',
    lead: 'Casi todos los diagramas de Gantt que fallan lo hacen por las mismas razones, y ninguna tiene que ver con la herramienta. Estos son los nueve errores que más se repiten y qué hacer en cada caso.',
    figIntro: 'El mismo plan, antes y después de corregir lo esencial:',
    sections: [
      ['1. Exceso de detalle',
        `<p>Un diagrama con doscientas filas no se mantiene: se abandona. Si una tarea dura menos de un día, probablemente pertenece a la lista de alguien, no al plan del proyecto. Agrupa en fases y despliega solo lo que estés mirando.</p>`],
      ['2. Sin dependencias',
        `<p>El error más caro. Sin flechas, el diagrama es una lista de fechas que hay que reajustar a mano en cada cambio, no tiene ruta crítica y no avisa de nada. Enlazar las tareas es lo que convierte el dibujo en un modelo.</p>`],
      ['3. Tratar las estimaciones como compromisos',
        `<p>«Dos semanas» es una estimación con incertidumbre; en cuanto entra en el gráfico se lee como una promesa. Deja explícito qué duraciones son firmes y cuáles son aproximadas, y reserva holgura donde la incertidumbre es alta.</p>`],
      ['4. Cero holgura en todo el plan',
        `<p>Si ninguna tarea tiene margen, todas son críticas y cualquier imprevisto mueve la entrega. Un plan sin holgura no es ambicioso: es frágil. La holgura se planifica, no se improvisa.</p>`],
      ['5. Ignorar la ruta crítica',
        `<p>Optimizar tareas que no están en la ruta crítica se siente productivo y no adelanta el proyecto ni un día. Antes de acelerar nada, comprueba si está en la cadena que fija la fecha de fin.</p>`],
      ['6. Tareas sin responsable',
        `<p>Una tarea sin nombre al lado es una tarea que nadie va a actualizar. Además, sin responsables no puedes ver que la misma persona está en cuatro tareas simultáneas en marzo — un problema invisible en las barras.</p>`],
      ['7. Dejar que se quede obsoleto',
        `<p>Un Gantt que no se actualiza deja de ser un plan y pasa a ser un documento histórico. Si actualizarlo cuesta demasiado, casi siempre es por el error número 1 o el número 2.</p>`],
      ['8. Sin hitos',
        `<p>Los hitos son lo que dirección lee y lo que impide que el plan avance fuera de secuencia. Sin ellos, no hay puntos de control y todo se convierte en una masa continua de barras.</p>`],
      ['9. Confundir duración con esfuerzo',
        `<p>Una tarea de diez días que ocupa a media persona sigue midiendo diez días en el calendario, pero solo cinco de trabajo. Mezclar ambas cosas produce planes que parecen razonables y equipos que no dan abasto.</p>`],
    ],
    callout: 'Si solo vas a corregir uno, corrige el segundo. Casi todos los demás problemas —el mantenimiento imposible, la ruta crítica inexistente, el plan obsoleto— son consecuencias de no haber enlazado las tareas.',
    faq: [
      ['¿Cuál es el error más común en un diagrama de Gantt?', 'No poner dependencias. Sin ellas no hay ruta crítica, nada se recalcula solo y cada cambio obliga a reajustar fechas a mano.'],
      ['¿Cuántas tareas son demasiadas?', 'No hay una cifra exacta, pero por encima de unas sesenta filas visibles el mantenimiento suele superar al beneficio. Agrupa en fases y despliega bajo demanda.'],
      ['¿Cómo evito que el diagrama se quede desactualizado?', 'Reduce el detalle, enlaza las dependencias para que los cambios se propaguen solos y actualiza el porcentaje completado en vez de redibujar barras.'],
    ],
    related: [
      ['critical-path-method', 'Cómo se calcula la ruta crítica'],
      ['gantt-chart-dependencies', 'Los cuatro tipos de dependencia'],
      ['milestones-vs-tasks', 'Hitos y tareas: en qué se diferencian'],
    ],
  },

  'milestones-vs-tasks': {
    h1: 'Hitos y tareas en un diagrama de Gantt: en qué se diferencian',
    metaTitle: 'Hitos y tareas en un diagrama de Gantt',
    metaDesc: 'Diferencia entre hito y tarea, para qué sirven realmente los hitos, cuántos debería tener un proyecto y los errores más frecuentes.',
    date: '2026-07-19',
    lead: 'Una <strong>tarea</strong> ocupa tiempo; un <strong>hito</strong> marca un momento. Esa es toda la diferencia técnica, y sin embargo usar mal los hitos es una de las formas más rápidas de que un plan deje de comunicar nada.',
    figIntro: 'Barras para el trabajo, rombos para los momentos que importan:',
    sections: [
      ['La diferencia en una línea',
        `<p>Una tarea tiene duración: empieza un día y termina otro. Un hito tiene duración cero y se dibuja como un rombo. «Redactar el contrato» es una tarea; «contrato firmado» es un hito.</p>`],
      ['Para qué sirven realmente los hitos',
        `<p>Para tres cosas. Son <em>puntos de control</em>: momentos en los que se decide si se sigue. Son <em>lenguaje de dirección</em>: lo que un comité recuerda de tu plan son cinco fechas, no cincuenta barras. Y son <em>barreras de secuencia</em>: enlazando el trabajo posterior a un hito, evitas que avance antes de que se cumpla la condición.</p>`],
      ['¿Cuántos debería tener un proyecto?',
        `<p>Los suficientes para contar la historia y no tantos como para diluirla. Entre cinco y diez para un proyecto de varios meses suele funcionar. Si tienes un hito por semana, has convertido el plan en un calendario y los hitos ya no señalan nada.</p>`],
      ['Errores frecuentes',
        `<p><strong>Hitos que son tareas disfrazadas.</strong> Si tiene duración, no es un hito. «Fase de pruebas» no es un hito; «pruebas aprobadas» sí.</p>
        <p><strong>Hitos sin dependencias.</strong> Un rombo suelto en el calendario es decorativo. Su valor está en que el trabajo posterior dependa de él.</p>
        <p><strong>Hitos que nadie decide.</strong> Si al llegar la fecha no ocurre ninguna aprobación ni ninguna decisión, probablemente no era un hito.</p>`],
      ['Barras resumen y jerarquía',
        `<p>Además de tareas e hitos existe un tercer tipo: la barra resumen o fase, que agrupa a sus hijas y toma automáticamente la fecha de inicio de la primera y la de fin de la última. No se edita directamente — se mueve sola cuando se mueve su contenido.</p>
        <p>Esa jerarquía de tres niveles (fase, tarea, hito) es la que hace legible un plan grande.</p>`],
    ],
    callout: 'Un hito no es una tarea corta: es una tarea de duración cero que representa una decisión o una condición cumplida. Si al llegar la fecha nadie tiene que aprobar, firmar o verificar nada, probablemente estás marcando un recordatorio, no un hito.',
    faq: [
      ['¿Qué es un hito en un diagrama de Gantt?', 'Un punto de duración cero que marca un momento significativo: una aprobación, una entrega o el inicio de una fase. Se representa con un rombo en lugar de una barra.'],
      ['¿Cuántos hitos debe tener un proyecto?', 'Entre cinco y diez para un proyecto de varios meses. Demasiados diluyen su función de punto de control.'],
      ['¿Puede un hito tener duración?', 'Por definición no. Si necesitas representar un periodo —una ventana de revisión, por ejemplo— eso es una tarea, aunque termine en un hito.'],
      ['¿Cuál es la diferencia entre un hito y una fase?', 'Una fase es una barra resumen que agrupa tareas y toma sus fechas automáticamente; un hito es un instante sin duración. Suelen usarse juntos: la fase termina y el hito confirma que se cerró.'],
    ],
    related: [
      ['what-is-a-gantt-chart', '¿Qué es un diagrama de Gantt?'],
      ['gantt-chart-mistakes', 'Errores habituales al planificar'],
      ['gantt-chart-dependencies', 'Los cuatro tipos de dependencia'],
    ],
  },
};

/* Chrome for the guide pages themselves. Kept beside the copy so a new
   locale is one file rather than two. */
const UI = {
  home: 'Inicio',
  guides: 'Guías',
  backToGuides: 'Ver todas las guías',
  related: 'Seguir leyendo',
  faq: 'Preguntas frecuentes',
  updated: 'Actualizado el',
  ctaH2: 'Pruébalo en el editor gratuito',
  ctaP: 'Abre gantts.app, arrastra las barras y exporta a PDF, Excel o PowerPoint. Sin cuenta y sin marca de agua.',
  ctaBtn: 'Abrir el editor gratuito',
  enNote: 'Las guías que aún no se han traducido se abren en inglés.',
  readingTime: 'min de lectura',
  byline: 'Equipo de gantts.app',
  onThisPage: 'En esta página',
};

module.exports = { G, UI };
