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
        <p>Esa definición parece trivial y no lo es. La clave está en que muestra <em>duración</em> y <em>solapamiento</em> a la vez, algo que ninguna lista de tareas consigue: en una lista, «diseño» y «desarrollo» son dos líneas consecutivas; en un Gantt se ve que se pisan tres semanas.</p>
        <p>En términos de gestión de proyectos es una herramienta de programación, y responde cuatro preguntas a la vez: qué hay que hacer (la lista de tareas), cuándo ocurre cada cosa (la posición de las barras), en qué orden (las dependencias) y cómo va (el avance sombreado). Esa combinación explica por qué un formato de hace más de un siglo sigue siendo la vista por defecto de prácticamente todas las herramientas de planificación.</p>`],
      ['¿Qué aspecto tiene?',
        `<p>Imagina una rejilla de hoja de cálculo. A la izquierda, una tabla con los nombres de las tareas, sus fechas, su duración y su responsable. A la derecha, las columnas se convierten en un calendario —días, semanas o meses— y para cada tarea una barra de color se extiende sobre las celdas que corresponden a sus fechas. Una tarea corta es una barra corta; una que dura tres semanas es una barra de tres semanas de ancho. Se lee de arriba abajo para ver todo el trabajo y de izquierda a derecha para ver el paso del tiempo.</p>
        <p>Los elementos que aparecen prácticamente siempre son seis. La <strong>lista de tareas</strong>, agrupada en fases o en una estructura de desglose. El <strong>eje temporal</strong>, que fija la escala. Las <strong>barras</strong>, una por tarea, cuya posición dice cuándo y cuya longitud dice cuánto. Los <strong>hitos</strong>, rombos sin duración que marcan fechas señaladas. Las <strong>dependencias</strong>, flechas que dicen qué va antes de qué. Y el <strong>avance</strong>, un sombreado dentro de cada barra que permite comparar lo planificado con lo real.</p>
        <p>A eso muchas herramientas añaden una línea vertical de «hoy», sombreado de fines de semana, etiquetas de responsable y la <strong>ruta crítica</strong> resaltada: la cadena de tareas sin holgura que determina la fecha de fin. Ninguno de esos extras es imprescindible, pero la línea de hoy y la ruta crítica son los dos que más cambian lo que el gráfico comunica de un vistazo.</p>`],
      ['¿Para qué sirve un diagrama de Gantt?',
        `<p><strong>Para planificar.</strong> Obliga a decidir el orden del trabajo y a comprobar si las fechas se sostienen. La mayoría de los problemas de un plan aparecen al dibujarlo, no al ejecutarlo.</p>
        <p><strong>Para comunicar.</strong> Es el formato que entiende un cliente, un comité o un financiador sin explicación previa. Por eso se pide en propuestas de subvención, en informes de obra y en presentaciones de dirección.</p>
        <p><strong>Para hacer seguimiento.</strong> Con una línea base guardada, el gráfico deja de ser un plan y pasa a ser una medida: cuánto nos hemos desviado, dónde y si afecta a la entrega. Sin línea base solo puedes responder «qué toca ahora», nunca «vamos tarde», porque el plan actual siempre parece coherente consigo mismo.</p>
        <p><strong>Para gestionar dependencias.</strong> Deja evidente lo que en una lista se pierde: que las pruebas no pueden empezar hasta que el desarrollo termine, que la campaña no sale sin la aprobación legal, que la mudanza no se hace sin los circuitos de datos. Lo encontrarás en obra, software, marketing, eventos, fabricación, consultoría, investigación y lanzamientos de producto — esencialmente, en cualquier trabajo con principio, final y pasos intermedios que dependen unos de otros.</p>
        <p><strong>Para coordinar.</strong> Cuando varias personas dependen unas de otras, el gráfico responde «¿puedo empezar ya?» sin necesidad de preguntarlo. Y responde también la pregunta contraria, que es la que se olvida: si esta tarea se retrasa dos días, ¿a quién dejo parado?</p>
        <p><strong>Para gestionar recursos.</strong> Con responsables asignados se ve de un vistazo si la misma persona está en cuatro tareas la misma semana, un solapamiento que en una lista de tareas es sencillamente invisible.</p>`],
      ['Ejemplos por tipo de proyecto',
        `<p>La secuencia cambia mucho según el sector, aunque los elementos sean los mismos.</p>
        <p>En <strong>construcción</strong> el orden es rígido: permisos, cimentación, estructura, cerramiento, instalaciones y acabados, con inspecciones como barreras y desfases físicos —curado, secado— entre fases. Es donde la ruta crítica más se gana el sueldo, porque casi todo va en serie y un solo retraso mueve la entrega.</p>
        <p>En <strong>software</strong> los sprints se repiten como barras de duración fija y el valor no está en planificar dentro del sprint, sino en mostrar releases, congelaciones y dependencias externas a quien vive fuera del backlog. En <strong>marketing</strong>, la fase que decide el calendario suele ser la de aprobaciones, y las pistas paralelas —contenido, diseño, medios— piden agrupar por flujo de trabajo. En <strong>investigación</strong>, la aprobación ética bloquea la recogida de datos y las esperas ajenas pesan más que el trabajo propio. En <strong>eventos</strong> y <strong>bodas</strong>, la fecha es inamovible y todo se planifica hacia atrás desde ella, lo que revela el primer día si hay margen suficiente o ya se va tarde.</p>
        <p>Si quieres verlos con las fases ya cargadas, hay <a href="/es/blog/gantt-chart-examples.html">ocho ejemplos comentados</a> y más de cuarenta <a href="/es/templates.html">plantillas listas</a>.</p>`],
      ['Ventajas e inconvenientes',
        `<p><strong>A favor:</strong> muestra secuencia y solapamiento en una sola vista, algo que ninguna tabla de fechas consigue. Hace visible la fecha de fin y, con dependencias, <em>qué</em> la determina. Es universalmente comprensible: un cliente o un comité lo entienden sin formación previa. Y se recalcula solo cuando algo se mueve, en lugar de obligar a redibujar.</p>
        <p><strong>En contra:</strong> envejece rápido si el trabajo se reprioriza cada semana, y un gráfico desactualizado es peor que ninguno porque la gente sigue confiando en él. Tiende al exceso de detalle, que es la causa número uno de que se abandone: doscientas filas no se mantienen. No muestra esfuerzo ni coste —la longitud de una barra es tiempo transcurrido, no horas de trabajo—, y eso se malinterpreta con frecuencia. Y da una impresión de precisión que las estimaciones no siempre respaldan: una barra dibujada al día parece un compromiso aunque sea una conjetura.</p>
        <p>Casi todos esos inconvenientes tienen la misma respuesta práctica: mantener el gráfico al nivel de fase y dejar que una herramienta recalcule las fechas, en lugar de sostener a mano una imagen estática. La excepción real es el trabajo continuo y muy cambiante, donde un tablero encaja mejor. La regla de decisión: si nadie va a preguntar «¿esto llega para tal fecha?», probablemente no necesitas un Gantt.</p>`],
      ['¿Quién inventó el diagrama de Gantt?',
        `<p>Lleva el nombre de Henry Gantt, ingeniero mecánico y consultor estadounidense que lo popularizó entre 1910 y 1915 para planificar producción industrial y construcción naval. No fue del todo el primero: el polaco Karol Adamiecki había desarrollado un gráfico equivalente, el harmonograma, unos quince años antes, pero lo publicó en polaco y en ruso, y el trabajo apenas circuló fuera de Europa del Este.</p>
        <p>Los gráficos de Gantt se usaron para programar producción industrial y, de forma célebre, la construcción naval durante la Primera Guerra Mundial, y contribuyeron a establecer la programación visual como disciplina de gestión. Como la versión de Gantt fue la que circuló por la industria estadounidense y europea, el formato se quedó con su nombre.</p>
        <p>Que un formato de hace un siglo siga en uso dice algo: resolvió bien un problema que no ha cambiado.</p>`],
      ['Gantt, línea de tiempo y Kanban: en qué se diferencian',
        `<p>Una <strong>línea de tiempo</strong> muestra cuándo ocurren las cosas, pero normalmente sin duración ni dependencias: sirve para comunicar, no para planificar.</p>
        <p>Un <strong>tablero Kanban</strong> muestra el estado del trabajo —pendiente, en curso, hecho— y es excelente para flujo continuo. Lo que no muestra es el calendario: un tablero no te dice si llegas a marzo.</p>
        <p>Un <strong>diagrama de Gantt</strong> muestra duración, solapamiento y dependencia. Es la herramienta adecuada cuando el trabajo tiene un orden y un plazo, y la equivocada cuando se reprioriza constantemente.</p>
        <p>Una regla rápida para elegir: Gantt cuando hay un plazo y una secuencia definida, tablero cuando el trabajo fluye de forma continua sin fechas fijas, y línea de tiempo cuando solo necesitas enseñar media docena de fechas clave. Todo diagrama de Gantt contiene una línea de tiempo, pero una línea de tiempo no es un Gantt.</p>
        <p>No compiten: muchos equipos usan tablero para el día a día y Gantt para las fechas comprometidas y las dependencias externas, y esa combinación suele funcionar mejor que forzar una sola herramienta.</p>`],
      ['Cómo hacer uno gratis',
        `<p>Necesitas tres cosas: la lista de tareas, una duración estimada para cada una y saber qué depende de qué. Con eso, el gráfico sale prácticamente solo. El recorrido, resumido:</p>
        <ul>
          <li>Lista las tareas y agrúpalas en cinco o seis fases.</li>
          <li>Pon una duración a cada una, en días laborables, sin fijar fechas todavía.</li>
          <li>Enlaza las dependencias y deja que las fechas se calculen solas.</li>
          <li>Marca los hitos que importan y activa la ruta crítica.</li>
          <li>Asigna responsables, guarda una línea base y exporta.</li>
        </ul>
        <p>Puedes construirlo en Excel con un gráfico de barras apiladas, en Google Sheets con la función Cronograma, o directamente en el <a href="/es/app.html">editor de gantts.app</a>, que enlaza dependencias, calcula la ruta crítica y exporta a PDF, PNG, Excel y PowerPoint sin cuenta y sin marca de agua. La diferencia entre las dos primeras vías y la tercera no está en dibujar las barras, que es fácil en cualquier sitio, sino en quién recalcula el plan cuando algo se mueve.</p>
        <p>La guía paso a paso está en <a href="/es/blog/how-to-make-a-gantt-chart.html">cómo hacer un diagrama de Gantt</a>, y si trabajas en hoja de cálculo, en <a href="/es/blog/gantt-chart-in-excel.html">cómo hacerlo en Excel</a>.</p>`],
    ],
    callout: 'El error más común no es dibujar mal las barras: es dibujarlas sin dependencias. Un Gantt sin flechas es una lista de fechas bonita que hay que actualizar a mano cada vez que algo cambia. Con dependencias, mueves una tarea y el plan se recalcula solo — y solo entonces la ruta crítica significa algo.',
    faq: [
      ['¿Qué es exactamente un diagrama de Gantt?', 'Es un gráfico de barras horizontales sobre una línea de tiempo: cada barra representa una tarea, su posición indica cuándo ocurre y su longitud cuánto dura. Añadiendo dependencias e hitos se convierte en un modelo del calendario, no solo en un dibujo.'],
      ['¿Para qué sirve un diagrama de Gantt?', 'Para ver secuencia, solapamiento y fecha de fin en una sola vista. Es la herramienta adecuada cuando el trabajo tiene un orden y un plazo, y sirve además como documento de comunicación con clientes, dirección o financiadores.'],
      ['¿Cuál es la diferencia entre un Gantt y un cronograma?', 'Un cronograma es cualquier calendario de actividades; el diagrama de Gantt es una forma concreta de representarlo, con barras en una línea de tiempo. Todo diagrama de Gantt es un cronograma, pero no al revés.'],
      ['¿Cuáles son las partes de un diagrama de Gantt?', 'Seis: la lista de tareas a la izquierda, el eje temporal arriba, las barras que representan cada tarea, los hitos dibujados como rombos sin duración, las flechas de dependencia que enlazan tareas relacionadas y el sombreado de avance que indica el porcentaje completado. A eso suelen sumarse una línea vertical de hoy y la ruta crítica resaltada.'],
      ['¿Quién inventó el diagrama de Gantt?', 'Lleva el nombre de Henry L. Gantt (1861-1919), ingeniero mecánico y consultor estadounidense que lo desarrolló y popularizó entre 1910 y 1915 para programar producción industrial y construcción naval. En los años noventa del siglo XIX el ingeniero polaco Karol Adamiecki había diseñado un gráfico muy similar, el harmonograma, pero lo publicó en polaco y en ruso y apenas circuló fuera de Europa del Este.'],
      ['¿Necesito software para hacer uno?', 'No necesariamente, pero a mano se vuelve insostenible en cuanto hay dependencias: cada cambio obliga a recalcular todo. Puedes hacerlo gratis en el <a href="/es/app.html">editor de gantts.app</a>, sin cuenta y sin que el plan salga de tu navegador, con dependencias, ruta crítica automática y exportación a PDF, PNG, Excel y PowerPoint.'],
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
      ['Lo que necesitas antes de empezar',
        `<p>Tres cosas, y ninguna es software. La <strong>lista de tareas</strong>, aunque esté desordenada. Una <strong>duración estimada</strong> para cada una. Y saber <strong>qué depende de qué</strong>.</p>
        <p>Si tienes esas tres, el gráfico sale en veinte minutos. Si no las tienes, ninguna herramienta te va a salvar: estarás dibujando barras bonitas sobre un plan que no existe.</p>
        <p>Lo que <em>no</em> necesitas al empezar son fechas. Salen solas al enlazar las dependencias, y fijarlas antes es la forma más rápida de construir un calendario que habrá que rehacer.</p>
        <p>Sí conviene tener claras dos cosas más: qué significa exactamente «terminado» para este proyecto y si hay alguna fecha impuesta desde fuera —una feria, un cierre contable, el arranque de un curso—. Un plan que termina cuando termina es distinto de uno que tiene que llegar al 15 de octubre, y esa diferencia decide si planificas hacia adelante o hacia atrás.</p>`],
      ['1. Lista el trabajo antes de pensar en fechas',
        `<p>Escribe todas las tareas sin preocuparte del calendario. Mezclar «qué hay que hacer» con «cuándo» es lo que produce planes optimistas: en cuanto ves una fecha, empiezas a ajustar el alcance para que quepa.</p>
        <p>El tamaño correcto de una tarea se comprueba con dos preguntas. ¿Puedes nombrar a una sola persona responsable? ¿Puedes describir en una frase qué significa que esté hecha? Si la respuesta a alguna es no, la tarea es demasiado grande —divídela— o demasiado vaga —defínela—. En la práctica, el rango cómodo va de medio día a dos semanas: por debajo ensucia el gráfico, por encima esconde el riesgo.</p>
        <p>Escribe en verbo y concreto: «Redactar textos de la página de inicio», «Revisar con asesoría jurídica», «Desplegar en producción». Y agrupa después en fases. Una fase con quince tareas dentro se lee mejor que un listado plano de cuarenta, y permite enseñar el plan plegado a quien solo quiere ver el mes.</p>`],
      ['2. Estima duraciones, no fechas',
        `<p>Para cada tarea, cuánto tiempo lleva hacerla. Nada más. Las fechas saldrán solas cuando enlaces las dependencias — y si las fijas ahora, estarás inventando un calendario que tendrás que rehacer.</p>
        <p>Estima en días laborables si tu herramienta los distingue. Diez días laborables que cruzan dos fines de semana son catorce de calendario; encadena cuatro tareas así y el desfase acumulado supera la semana. Con festivos locales o vacaciones de agosto la diferencia crece todavía más, y es la causa más habitual de que un plan «cuadrado» llegue tarde sin que nadie haya fallado.</p>
        <p>Distingue también entre esfuerzo y tiempo transcurrido. Una revisión legal puede ser media hora de trabajo y cinco días de espera; lo que va en la barra son los cinco días. Y no rellenes cada tarea con un día de más «por si acaso»: ese margen repartido desaparece sin que nadie lo note. Es mejor estimar honestamente y poner un colchón visible antes de la entrega, que es el que sí se puede defender.</p>`],
      ['3. Enlaza las dependencias',
        `<p>Este es el paso que la mayoría se salta y el que convierte el dibujo en un modelo. Para cada tarea pregunta: ¿qué tiene que estar terminado antes de poder empezar esto?</p>
        <p>La mayoría serán fin-inicio: probar no empieza hasta que desarrollar termina. Usa inicio-inicio cuando dos cosas arrancan juntas —control de calidad en cuanto arranca producción— y fin-fin cuando deben cerrarse a la vez, como la documentación con el desarrollo. La cuarta, inicio-fin, es legítima pero rara; si la usas mucho, revisa el modelo.</p>
        <p>Los desfases son parte de esto y se olvidan siempre. Tres días de secado antes de pintar, cinco días de plazo de imprenta, dos semanas de espera de un permiso: son desfases sobre la relación, no tareas. Modelarlos como tarea ensucia el plan con barras que nadie ejecuta.</p>
        <p>La señal de que falta una dependencia es inconfundible: si te encuentras escribiendo fechas a mano para que las barras «queden bien», o si cada vez que mueves una tarea tienes que arreglar tres más, es que la relación no está puesta. Con ella, esas tres se mueven solas.</p>`],
      ['4. Marca los hitos que importan',
        `<p>Un hito es una fecha sin duración: aprobación concedida, contrato firmado, entrega realizada. Sirven para dos cosas: son lo que dirección mira primero, y son barreras naturales que impiden que el plan avance fuera de secuencia.</p>
        <p>La regla de dosificación es sencilla: uno al final de cada fase y uno en la fecha de entrega, más los puntos de no retorno propios del proyecto —congelación de alcance, compromiso de fabricación, apertura de inscripciones—. Entre cinco y diez para un proyecto de varios meses. Un hito por semana no señala nada, porque cuando todo es un hito nada destaca.</p>
        <p>Enlaza dependencias a los hitos, no solo a las tareas. Un hito de «licencia concedida» con tres tareas colgando deja clarísimo, para cualquiera que mire el gráfico, qué se para si el ayuntamiento tarda.</p>`],
      ['5. Mira la ruta crítica',
        `<p>Con las dependencias puestas, la ruta crítica aparece sola: la cadena de tareas con holgura cero que determina tu fecha de fin. Si no te gusta esa fecha, solo tienes tres opciones reales — acortar una tarea crítica, solaparla con la siguiente mediante un desfase negativo, o mover la fecha. Recortar tareas que no están en la ruta crítica no adelanta absolutamente nada, por mucho esfuerzo que se le ponga.</p>
        <p>Mira también la columna de holgura, no solo la cadena resaltada. Una tarea con un día de margen es casi crítica y se convertirá en crítica al primer contratiempo; una con quince días de margen puede esperar sin que nadie se preocupe. Esa cifra es la que de verdad usas para decidir a qué llamada respondes primero. El detalle del cálculo está en <a href="/es/blog/critical-path-method.html">la guía del método de la ruta crítica</a>.</p>`],
      ['6. Asigna responsables y comprueba la carga',
        `<p>Pon un nombre en cada tarea y mira dónde se apilan. Un plan que parece impecable en el gráfico puede tener a la misma persona en cuatro tareas simultáneas en marzo. Ese solapamiento es invisible en las barras y evidente en una vista de carga.</p>
        <p>Una fila sin responsable es una fila que nadie va a actualizar, y basta con tres o cuatro para que el gráfico deje de reflejar la realidad. Si una tarea tiene dos nombres, en la práctica no tiene ninguno: pon un responsable único y añade a los demás como participantes.</p>
        <p>Cuando detectes un apilamiento, las salidas son las de siempre: mover la tarea al margen que le dé su holgura, reasignarla o reducir el alcance. Lo que no funciona es dejarlo y confiar en que esa semana la persona rinda por dos.</p>`],
      ['7. Fija línea base y publica',
        `<p>Cuando el plan esté acordado, guarda una línea base: la foto congelada contra la que medirás la desviación. Sin ella no puedes responder a «¿vamos tarde?», solo a «¿qué toca ahora?», porque el plan actual siempre parece coherente consigo mismo.</p>
        <p>A partir de ahí, exporta a PDF o PowerPoint para compartirlo, y mantén el gráfico vivo actualizando el porcentaje completado en lugar de redibujar. Una revisión semanal de quince minutos —avances, fechas movidas, dependencias nuevas— es lo que separa un plan útil de un diagrama que la gente sigue mirando cuando ya no es cierto, que es peor que no tener ninguno.</p>`],
      ['Errores que conviene evitar',
        `<p><strong>Demasiado detalle.</strong> Si una tarea dura menos de un día, pertenece a la lista de alguien, no al plan del proyecto. Doscientas filas no se mantienen: se abandonan.</p>
        <p><strong>Fechas escritas a mano en lugar de dependencias.</strong> Funciona hasta el primer cambio, y a partir de ahí cada movimiento obliga a reajustar tres tareas más.</p>
        <p><strong>Cero holgura.</strong> Si todas las tareas son críticas, cualquier imprevisto mueve la entrega. Un plan sin margen no es ambicioso: es frágil.</p>
        <p><strong>Tareas sin responsable.</strong> Una fila sin nombre al lado es una fila que nadie va a actualizar.</p>
        <p>Hay una lista más larga en <a href="/es/blog/gantt-chart-mistakes.html">nueve errores habituales</a>, cada uno con su corrección.</p>`],
      ['Hazlo gratis online',
        `<p>No necesitas instalar nada ni crear una cuenta. Abre el <a href="/es/app.html">editor de gantts.app</a>, escribe o pega tus tareas, arrastra las barras y conecta las dependencias: la ruta crítica aparece sola.</p>
        <p>Cuando esté listo, expórtalo a PDF, PNG, Excel o PowerPoint, o comparte el enlace. Sin marca de agua, sin límite de tareas y sin que el plan salga de tu navegador.</p>
        <p>Si prefieres no partir de cero, hay más de cuarenta <a href="/es/templates.html">plantillas</a> con las fases ya colocadas.</p>`],
    ],
    callout: 'Ordena las tareas antes de fechar. Es tentador empezar arrastrando barras hasta que el gráfico «se ve bien», pero eso produce un calendario que solo se sostiene mientras nadie lo toque. Con dependencias, el plan se recalcula solo y la fecha de fin deja de ser una opinión.',
    faq: [
      ['¿Cuánto se tarda en hacer un diagrama de Gantt?', 'Con una plantilla, entre quince minutos y una hora para un proyecto normal. Lo que lleva tiempo no es dibujar: es decidir el orden del trabajo y estimar duraciones con honestidad.'],
      ['¿Puedo hacer un diagrama de Gantt en Excel?', 'Sí, con un gráfico de barras apiladas, aunque las dependencias hay que mantenerlas a mano y esa es justamente la parte que se rompe. Puedes descargar plantillas listas de Excel o editarlo online sin fórmulas.'],
      ['¿Cuántas tareas debe tener?', 'Las que puedas seguir de verdad. Entre veinte y sesenta filas es el rango cómodo para un proyecto único; por encima, agrupa en fases y despliega solo lo que necesites mirar.'],
      ['¿Cómo añado dependencias y por qué importan tanto?', 'Se traza un enlace entre dos barras y la herramienta recalcula las fechas de la que va detrás. Importan porque son lo que convierte el dibujo en un modelo: sin ellas no hay ruta crítica que calcular y cada retraso obliga a reajustar el plan a mano. La relación más habitual es fin-inicio, y con ella se cubre la gran mayoría de los casos reales.'],
      ['¿Debo estimar en días laborables o naturales?', 'En días laborables siempre que la herramienta los distinga, porque es como se trabaja. La trampa es que diez días laborables son catorce de calendario, y encadenando varias tareas la diferencia supera fácilmente la semana. Si además hay festivos o vacaciones, conviene cargarlos en el calendario del proyecto en lugar de compensarlos a ojo alargando duraciones.'],
      ['¿Es gratis hacerlo en gantts.app?', 'Sí. El <a href="/es/app.html">editor</a> es gratuito, sin registro y sin marca de agua, y el plan se queda en tu navegador. Incluye dependencias, hitos, ruta crítica automática y exportación a PDF, PNG, Excel y PowerPoint, sin límite de tareas.'],
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
        `<p>El método de la ruta crítica (CPM, <em>critical path method</em>) es una técnica para calcular la duración mínima de un proyecto a partir de las duraciones de sus tareas y de las dependencias entre ellas. La idea de fondo es sencilla: entre el inicio y el fin de un proyecto hay varios caminos posibles, y la duración del proyecto no es la suma de todas las tareas, sino la longitud del camino más largo. Ese camino es la ruta crítica.</p>
        <p>Su resultado más útil es una lista corta: qué tareas no admiten ningún retraso. En un plan de cuarenta tareas suele haber ocho o diez críticas; las otras treinta tienen margen. Saber cuáles son cambia por completo dónde pones la atención, a quién llamas cuando algo se tuerce y qué recursos mueves si hay que recuperar tiempo.</p>
        <p>Se desarrolló a finales de los años cincuenta en DuPont —Morgan Walker y James Kelley, planificando paradas de planta química— en paralelo al método PERT que la Marina estadounidense creó para el programa Polaris. Que siga enseñándose sesenta años después responde a que el problema que resuelve no ha cambiado: en cualquier plan con dependencias, la mayoría de las tareas no controlan la fecha de entrega, y sin hacer el cálculo no hay forma de distinguir cuáles sí.</p>`],
      ['Términos que necesitas',
        `<p><strong>Inicio temprano (ES)</strong> y <strong>fin temprano (EF):</strong> lo más pronto que una tarea puede empezar y terminar respetando sus predecesoras. EF = ES + duración.</p>
        <p><strong>Inicio tardío (LS)</strong> y <strong>fin tardío (LF):</strong> lo más tarde que puede empezar y terminar sin retrasar el proyecto. LS = LF − duración.</p>
        <p><strong>Holgura total:</strong> LS − ES (equivalentemente, LF − EF). Cuánto puedes retrasar la tarea sin mover la fecha de entrega.</p>
        <p><strong>Holgura libre:</strong> cuánto puedes retrasarla sin mover la tarea siguiente. Siempre es menor o igual que la total. La distinción importa cuando varias tareas comparten holgura: si dos tareas encadenadas tienen 3 días de holgura total, no tienen 3 días cada una, tienen 3 entre las dos, y la primera que los gaste deja a la segunda sin margen.</p>
        <p><strong>Ruta crítica:</strong> la cadena de tareas con holgura total cero, desde el inicio hasta el fin.</p>
        <p>Una convención que ahorra confusiones: cuenta en días transcurridos desde el arranque, con el proyecto empezando en el día 0. Así el ES de la primera tarea es 0, no 1, y las restas salen limpias. Al pasar a fechas de calendario, el día 0 es la mañana del primer día laborable.</p>`],
      ['Cómo se calcula, paso a paso',
        `<p><strong>1. Lista actividades y dependencias.</strong> Cada tarea con su duración y sus predecesoras inmediatas. Este paso es el que de verdad cuesta: si una predecesora falta, todo el cálculo posterior es correcto sobre una red equivocada.</p>
        <p><strong>2. Dibuja la red.</strong> Conecta las tareas desde un único inicio hasta un único fin. Con eso quedan a la vista todos los caminos posibles, que es lo que vas a comparar.</p>
        <p><strong>3. Pasada adelante.</strong> De izquierda a derecha. La primera tarea tiene ES = 0. Para cada tarea siguiente, ES es el <em>mayor</em> EF de sus predecesoras —mayor, porque hay que esperar a la última— y EF = ES + duración. El mayor EF del final es la duración del proyecto.</p>
        <p><strong>4. Pasada atrás.</strong> De derecha a izquierda. La última tarea tiene LF igual a la duración total. Para cada tarea anterior, LF es el <em>menor</em> LS de sus sucesoras —menor, porque no puedes hacer esperar a ninguna— y LS = LF − duración.</p>
        <p><strong>5. Calcula la holgura e identifica la ruta.</strong> Holgura total = LS − ES para cada tarea. Las de holgura cero, encadenadas de principio a fin, son la ruta crítica.</p>
        <p>Dos matices habituales. Con <strong>desfases</strong> (lag) el procedimiento no cambia: el desfase se suma en la pasada adelante y se resta en la de atrás. Y si el proyecto tiene una fecha de entrega impuesta anterior a la duración calculada, la pasada atrás arranca en esa fecha y aparecen holguras negativas: no es un error de cálculo, es el plan diciéndote cuántos días te faltan.</p>`],
      ['Un ejemplo resuelto',
        `<p>Seis actividades, duraciones en días laborables, arranque en el día 0:</p>
        <ul>
          <li><strong>A — Planificar:</strong> 3 días, sin predecesoras</li>
          <li><strong>B — Diseñar:</strong> 4 días, tras A</li>
          <li><strong>C — Comprar materiales:</strong> 2 días, tras A</li>
          <li><strong>D — Construir:</strong> 5 días, tras B</li>
          <li><strong>E — Preparar el emplazamiento:</strong> 6 días, tras C</li>
          <li><strong>F — Instalar y probar:</strong> 3 días, tras D y E</li>
        </ul>
        <p>Hay dos caminos: A → B → D → F suma 3 + 4 + 5 + 3 = 15 días, y A → C → E → F suma 3 + 2 + 6 + 3 = 14. El más largo es 15, así que esa es la duración mínima. Confirmémoslo con las dos pasadas, que además nos dan la holgura de cada tarea.</p>
        <p><strong>Pasada adelante</strong> (ES, y EF = ES + duración):</p>
        <ul>
          <li>A: ES 0 → EF 3</li>
          <li>B: ES 3 (tras A) → EF 7</li>
          <li>C: ES 3 (tras A) → EF 5</li>
          <li>D: ES 7 (tras B) → EF 12</li>
          <li>E: ES 5 (tras C) → EF 11</li>
          <li>F: ES 12 (el mayor entre el EF 12 de D y el EF 11 de E) → EF 15. <strong>Proyecto: 15 días.</strong></li>
        </ul>
        <p><strong>Pasada atrás</strong> (LF, y LS = LF − duración), partiendo de LF = 15 en F:</p>
        <ul>
          <li>F: LF 15 → LS 12</li>
          <li>D: LF 12 (el LS de F) → LS 7</li>
          <li>E: LF 12 (el LS de F) → LS 6</li>
          <li>B: LF 7 (el LS de D) → LS 3</li>
          <li>C: LF 6 (el LS de E) → LS 4</li>
          <li>A: LF 3 (el menor entre el LS 3 de B y el LS 4 de C) → LS 0</li>
        </ul>
        <p><strong>Holgura total = LS − ES</strong>, tarea por tarea:</p>
        <ul>
          <li>A: 0 − 0 = <strong>0</strong> — crítica</li>
          <li>B: 3 − 3 = <strong>0</strong> — crítica</li>
          <li>C: 4 − 3 = <strong>1 día</strong></li>
          <li>D: 7 − 7 = <strong>0</strong> — crítica</li>
          <li>E: 6 − 5 = <strong>1 día</strong></li>
          <li>F: 12 − 12 = <strong>0</strong> — crítica</li>
        </ul>
        <p>La ruta crítica es A → B → D → F, exactamente el camino largo que habíamos localizado a ojo. C y E tienen un día de holgura cada una, pero —y esto es lo que el cálculo a ojo no da— comparten esa holgura: si C se retrasa un día, E pasa a tener cero y su cadena se vuelve crítica también. Retrasa C dos días y el proyecto se va a 16.</p>
        <p>La lectura práctica: acelerar C o E no adelanta la entrega ni un día, porque su camino ya es más corto. Si necesitas terminar en 13 días en lugar de 15, las únicas palancas reales son acortar A, B, D o F, o solaparlas con desfases negativos. Cualquier esfuerzo puesto en las otras dos es esfuerzo que no se convierte en fecha.</p>`],
      ['CPM, PERT y cadena crítica',
        `<p><strong>CPM</strong> usa una duración única por tarea y es determinista. Es lo que calculan casi todas las herramientas cuando resaltan la ruta crítica, y funciona bien cuando las estimaciones son razonablemente conocidas.</p>
        <p><strong>PERT</strong> usa tres estimaciones —optimista (O), más probable (M) y pesimista (P)— y calcula una duración esperada ponderada con la fórmula (O + 4M + P) / 6. Si una tarea se estima en 4, 6 y 14 días, PERT da (4 + 24 + 14) / 6 = 7 días, no los 6 que habrías escrito de memoria: la cola pesimista pesa. Sirve cuando la incertidumbre es alta y quieres hablar de probabilidad en vez de una fecha única. En la práctica lo habitual es alimentar el CPM con duraciones obtenidas por PERT.</p>
        <p><strong>Cadena crítica</strong> parte del CPM pero añade la restricción de recursos y retira los márgenes individuales de cada tarea para agruparlos en un colchón compartido al final del proyecto. La razón es conductual: el margen repartido tarea a tarea siempre se consume —el trabajo se expande hasta llenar el tiempo disponible— mientras que un colchón único es visible y se defiende. Es la respuesta de la teoría de restricciones al problema, y encaja cuando lo que manda no son las dependencias sino que varias tareas compiten por la misma persona o la misma máquina.</p>`],
      ['Verla automáticamente',
        `<p>Hacer las dos pasadas a mano es la mejor forma de entender el método, y también la peor forma de mantener un plan. Con seis tareas es un ejercicio de diez minutos; con cuarenta es inviable, sobre todo porque la ruta crítica no es estable: cambia cada vez que ajustas una duración, añades una dependencia o alguien reporta un retraso. Recalcularla a mano cada semana no lo hace nadie, y un plan cuya ruta crítica está desactualizada es peor que no tener ninguna, porque protege las tareas equivocadas.</p>
        <p>En el <a href="/es/app.html">editor gratuito</a>, enlaza las dependencias y activa la ruta crítica: se resalta sola y se recalcula al instante con cada cambio. La columna de holgura muestra además cuántos días de margen tiene cada tarea, que es la cifra que de verdad usas para decidir prioridades — y la que te avisa cuando una tarea que ayer tenía tres días de margen hoy tiene cero.</p>
        <p>Si estás empezando, conviene leer antes <a href="/es/blog/what-is-a-gantt-chart.html">qué es un diagrama de Gantt</a> y <a href="/es/blog/gantt-chart-dependencies.html">los cuatro tipos de dependencia</a>: sin dependencias bien puestas, el cálculo de la ruta crítica no tiene sobre qué trabajar.</p>`],
    ],
    callout: 'La ruta crítica solo existe si has puesto dependencias. Un diagrama con fechas escritas a mano no tiene red que recorrer, así que cualquier herramienta te dirá que todo es crítico o que nada lo es. Enlazar las tareas es el requisito previo, no un adorno.',
    faq: [
      ['¿Qué es la ruta crítica en un proyecto?', 'La secuencia de tareas dependientes más larga entre el inicio y el fin. Determina la duración mínima del proyecto: ninguna de sus tareas puede retrasarse sin retrasar la entrega.'],
      ['¿Qué diferencia hay entre holgura total y holgura libre?', 'La holgura total es cuánto puede retrasarse una tarea sin mover el fin del proyecto. La holgura libre es cuánto puede retrasarse sin mover la tarea siguiente. La total suele ser mayor o igual que la libre.'],
      ['¿Puede haber más de una ruta crítica?', 'Sí. Cuando dos o más cadenas tienen exactamente la misma duración total, todas son críticas, y el proyecto se vuelve más frágil porque hay más tareas sin margen. También ocurre de forma sobrevenida: una cadena con un día de holgura pasa a ser crítica en cuanto ese día se consume, así que conviene vigilar las tareas de holgura muy baja, no solo las de holgura cero.'],
      ['¿Qué diferencia hay entre la pasada adelante y la pasada atrás?', 'La pasada adelante recorre la red de izquierda a derecha y calcula lo más pronto que cada tarea puede empezar y terminar; su resultado es la duración mínima del proyecto. La pasada atrás la recorre de derecha a izquierda partiendo de esa duración y calcula lo más tarde que cada tarea puede empezar y terminar sin mover la entrega. La holgura sale de restar una de otra.'],
      ['¿Qué pasa si la holgura sale negativa?', 'Significa que has fijado una fecha de entrega anterior a la duración que el propio plan necesita. No es un error de cálculo: la holgura negativa te dice exactamente cuántos días faltan. Las salidas son acortar tareas críticas, solaparlas con desfases negativos, añadir recursos o mover la fecha, y solo la última es gratis.'],
      ['¿Cómo veo la ruta crítica de mi plan?', 'Enlaza las dependencias y activa la ruta crítica en el <a href="/es/app.html">editor gratuito</a>: la cadena que fija tu fecha de fin se resalta sola y se actualiza cada vez que cambias una duración. La columna de holgura indica además el margen de cada tarea no crítica, que es lo que necesitas para priorizar.'],
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
        <p>Un esqueleto realista para una nave de 800 m², en días laborables desde el 2 de marzo:</p>
        <ul>
          <li>Movilización y replanteo — 5 días (2 → 6 mar)</li>
          <li>Excavación y cimentación — 15 días (9 → 27 mar)</li>
          <li>Curado — <em>no es una tarea</em>: es un desfase de 7 días naturales</li>
          <li>Estructura — 20 días (6 abr → 1 may)</li>
          <li>Cerramiento y cubierta — 18 días (4 → 27 may)</li>
          <li>Instalaciones — 25 días (18 may → 19 jun), inicio-inicio con cerramiento y 10 días de desfase</li>
          <li>Acabados — 20 días (22 jun → 17 jul); recepción — hito, 20 de julio</li>
        </ul>
        <p>Ese desfase de curado es la pieza que más se modela mal: como tarea de siete días ensucia el plan con una barra que nadie ejecuta; como desfase, empuja la estructura sin ocupar fila.</p>
        <p>Qué mirar: permisos e inspecciones, barreras de terceros que determinan la entrega más que la propia obra. El error típico es meter la licencia como tarea de 30 días fijos: no es duración, es espera con varianza, y lo honesto es dejar holgura detrás.</p>`],
      ['2. Desarrollo de software / ágil',
        `<p>Descubrimiento, diseño, sprints de desarrollo, integración, pruebas y despliegue. Los sprints se representan como barras de duración fija y repetida; el valor del Gantt aquí no es planificar dentro del sprint sino mostrar cómo encajan releases, dependencias externas y fechas comprometidas.</p>
        <p>La regla es de altitud: un sprint de dos semanas es <em>una</em> barra de 10 días con un hito de revisión al final, no treinta barras de historia. Un trimestre son seis barras de sprint encadenadas fin-inicio, precedidas de 10 días de descubrimiento y seguidas de 8 días de integración (inicio-inicio con −5 de desfase), 7 de UAT y dos hitos: congelación y despliegue.</p>
        <p>Lo distintivo es que la ruta crítica casi nunca pasa por el código: pasa por lo que no controlas. La revisión de seguridad, el alta de un entorno o la firma del cliente en UAT son las tareas de holgura cero. Modélalas con responsable externo y barra propia, o el plan mentirá justo donde importa.</p>`],
      ['3. Campaña de marketing',
        `<p>Estrategia, creatividades, producción, aprobaciones, lanzamiento y medición. La fase que siempre se subestima es la de aprobaciones: esperar la respuesta de un cliente es tiempo transcurrido real y merece su propia barra.</p>
        <p>Una campaña con lanzamiento el 15 de mayo se lee hacia atrás: medición (2 semanas después), lanzamiento, montaje de canales 5 días antes, aprobación final 3 días antes, producción de piezas 10 días, creatividades 8 días, estrategia y mensajes 5 días. Sumando: hay que empezar el 30 de marzo, no en abril.</p>
        <p>Las pistas corren en paralelo —contenido, diseño, medios de pago, correo— y conviene agruparlas por flujo de trabajo, no por fecha. Y cada ronda de revisión es una espera: dos rondas de dos días hábiles son cuatro días que nadie apunta y que siempre aparecen. Ponles barra, responsable y fecha límite.</p>`],
      ['4. Organización de eventos',
        `<p>Fecha y sede, proveedores, comunicación, inscripciones, montaje, evento y desmontaje. Es un proyecto con una fecha inamovible, así que se planifica hacia atrás desde el día del evento.</p>
        <p>Con un congreso de 300 personas el 10 de octubre, la cadena inversa queda: desmontaje (11 oct), evento (10 oct), montaje y ensayo (8 → 9 oct), impresión de materiales (cierre 1 oct, la imprenta pide 5 días), cierre de inscripciones (3 oct), campaña de captación (6 semanas: 25 ago → 3 oct), confirmación de ponentes (fin 20 ago), catering (fin 10 ago), reserva de sede (fin 20 jun).</p>
        <p>Planificar al revés tiene una virtud diagnóstica: si la reserva de sede cae en una fecha ya pasada, no vas justo, vas tarde, y lo sabes el primer día. Y la holgura no se reparte: se concentra en los tres días previos.</p>`],
      ['5. Lanzamiento de producto',
        `<p>Preparación, beta, materiales de venta, formación comercial, lanzamiento y seguimiento. Conviene marcar como hitos los puntos de no retorno: fabricación comprometida, embargo de prensa, apertura de pedidos.</p>
        <p>Lo distintivo es que cuatro equipos convergen en una fecha, cada uno con su cadena. Producto: QA final (10 días) → congelación (hito) → documentación (8). Marketing: mensajes (5) → página de destino (10) → embargo de prensa (hito, 48 h antes). Ventas: formación comercial (3, no arranca sin documentación). Soporte: guiones (5, fin-fin con formación).</p>
        <p>Esa dependencia cruzada —formación necesita documentación, que necesita congelación— suele ser la ruta crítica real y casi nunca la que se vigila.</p>`],
      ['6. Tesis o investigación',
        `<p>Propuesta, revisión bibliográfica, metodología y ética, recogida de datos, análisis, redacción y entrega. La aprobación ética es una dependencia dura: la recogida de datos no puede empezar antes.</p>
        <p>Doce meses reparten así: propuesta (4 semanas), revisión bibliográfica (8, solapada con inicio-inicio), diseño metodológico (4), envío al comité de ética (hito) y espera de dictamen (6 a 10 semanas fuera de tu control), recogida de datos (12), análisis (8), redacción (10) y revisión del director (3, en dos rondas).</p>
        <p>Lo distintivo es el peso de las esperas ajenas: entre dictamen y revisiones hay casi cuatro meses que no dependen de tu ritmo. Por eso redactar solo cuando el análisis está cerrado sale tan caro: metodología y revisión bibliográfica se escriben mientras esperas.</p>`],
      ['7. Proyecto de pequeña empresa',
        `<p>Cuatro o cinco fases, veinte tareas, un responsable por línea. El error más común aquí es el contrario al de las grandes obras: demasiado poco detalle, hasta el punto de que una barra de «poner en marcha la tienda» no dice nada útil.</p>
        <p>La apertura de un local en ocho semanas, desglosada de forma utilizable: financiación (hito), contrato de alquiler (2 semanas), licencia de actividad (4 a 6, en paralelo), obra y mobiliario (3), alta de suministros y datáfono (1, pero se pide el primer día), pedido inicial de stock (3 de plazo del proveedor), web y redes (1), contratación y formación (2) y apertura como hito.</p>
        <p>Aquí la ruta crítica rara vez es la obra: son la licencia y el plazo de stock, dos cosas que se piden con un correo el primer día y que, si se olvidan, se pagan con semanas.</p>`],
      ['8. Plan semanal sencillo',
        `<p>Una rejilla de cinco días con las tareas de la semana. No necesita dependencias ni ruta crítica: es una herramienta de foco, no de planificación. Es el formato que mejor funciona pegado en una pared.</p>
        <p>Cambia el eje: columnas de lunes a viernes y barras de medio día o de un día, diez o quince como máximo, agrupadas por persona o por bloque. Con más de veinte vuelve a ser una lista de tareas disfrazada. Es la mejor puerta de entrada al formato: se construye en cinco minutos y muestra de golpe el problema típico de una semana mal planificada, que es tener tres cosas «importantes» a la vez el martes.</p>`],
      ['Cuatro ejemplos rápidos más',
        `<p><strong>Reforma de vivienda.</strong> Demoler (4 días), instalaciones vistas (6), cerrar y enlucir (5, con 3 días de desfase de secado antes de pintar), alicatar (4), pintar (3) y montar cocina (4). El orden de los gremios es lo único que importa, y el secado es la causa número uno de que el plan se vaya una semana.</p>
        <p><strong>Incorporación de un empleado.</strong> Preincorporación (equipo, accesos y contrato, 2 semanas antes), primer día, primera semana y revisiones a 30, 60 y 90 días como hitos. Lo decide la fase previa: si los accesos no se piden con diez días de antelación, la primera semana se gasta esperando contraseñas.</p>
        <p><strong>Implantación de un ERP.</strong> Análisis (4 semanas), diseño (4), configuración (8), migración de datos (6, solapada), pruebas de usuario (4) y arranque. Datos y pruebas necesitan carril y responsable propios: la calidad de los datos de origen nunca es la que se supuso en el análisis.</p>
        <p><strong>Traslado de oficina.</strong> Búsqueda (6 semanas), contrato (3), adecuación (6), telecomunicaciones (8 a 12 de plazo del operador) y mudanza (un fin de semana). El plazo largo casi nunca es la obra: son los circuitos de datos, que hay que pedir antes incluso de firmar.</p>`],
      ['Qué tienen en común los buenos diagramas',
        `<p><strong>Empiezan por fases, no por tareas.</strong> Todos los ejemplos anteriores agrupan en cinco o seis bloques. La fase permite presentar el plan plegado a dirección y desplegado al equipo sin mantener dos documentos.</p>
        <p><strong>Tienen dependencias, no solo fechas.</strong> Es lo que convierte el dibujo en un modelo: mueves una tarea y las siguientes se recolocan solas. Los desfases —curado, secado, plazo de imprenta— solo se pueden expresar como relación entre tareas.</p>
        <p><strong>Marcan pocos hitos y bien elegidos.</strong> Entre cinco y diez, siempre en los puntos de no retorno: aprobación, congelación, apertura de pedidos. Un hito por semana no señala nada.</p>
        <p><strong>Dejan holgura donde la estimación es débil</strong>, no repartida por igual: en obra detrás de los permisos, en eventos en los tres días previos. Repartir dos días a cada tarea hace que desaparezca sin que nadie note dónde.</p>
        <p><strong>Caben en una pantalla</strong> al nivel de fase —entre diez y treinta barras visibles—. El resto vive en la lista de tareas de cada persona, que es donde debe vivir.</p>`],
    ],
    callout: 'Fíjate en lo que tienen en común: todos empiezan por fases, no por tareas sueltas. Un diagrama que arranca con cuarenta filas al mismo nivel es ilegible independientemente del sector. Agrupa primero en cinco o seis fases y despliega solo lo que necesites mirar.',
    faq: [
      ['¿Cuál es el mejor ejemplo para empezar?', 'El más cercano a tu proyecto, porque lo que cambia entre sectores no es la estructura sino qué tareas se suelen olvidar. Si ninguno encaja del todo, el de gestión de proyectos genérica sirve como esqueleto: fases, hitos y dependencias funcionan igual en obra que en investigación. Lo que sí conviene copiar del ejemplo de tu sector es la lista de esperas ajenas —permisos, dictámenes, plazos de proveedor—, que es donde se pierden las semanas.'],
      ['¿Puedo descargar estos ejemplos?', 'Sí, cada tipo tiene su plantilla con las tareas y las fases ya cargadas, en Excel, PowerPoint y CSV, además de edición online gratuita. Lo habitual es abrir la más parecida, borrar lo que no aplica y renombrar el resto: se tarda menos que partir de cero y evita olvidar tareas estándar del sector.'],
      ['¿Cuántas tareas debería tener mi diagrama?', 'Las que puedas mantener actualizadas. Entre veinte y sesenta filas es el rango cómodo para un proyecto único, con diez a treinta barras visibles a la vez; por encima, agrupa en fases y despliega solo lo que necesites mirar. La regla útil es que si una tarea dura menos de un día, pertenece a la lista de alguien, no al plan del proyecto.'],
      ['¿Qué diferencia a un diagrama de obra de uno de software?', 'La rigidez de la secuencia y de dónde viene el riesgo. En obra casi todo es fin-inicio con desfases físicos —curado, secado— y la ruta crítica pasa por permisos e inspecciones. En software las fases se solapan mucho más y la ruta crítica suele pasar por dependencias externas: revisiones de seguridad, altas de entorno, firma de UAT. Los elementos del gráfico son los mismos; lo que cambia es qué conviene vigilar.'],
      ['¿Sirve un diagrama de Gantt para un proyecto ágil?', 'Sí, siempre que se use a la altitud correcta. No sirve para planificar dentro del sprint, que es trabajo del backlog, pero sí para mostrar a quien está fuera del equipo cómo encajan releases, dependencias externas y fechas comprometidas. Un sprint de dos semanas se representa como una sola barra con un hito de revisión al final, nunca como treinta barras de historia.'],
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
        `<p>No, no existe un tipo de gráfico llamado «Gantt». Si abres <strong>Insertar › Gráficos</strong> encontrarás columnas, barras, líneas, áreas y sectores, y nada más. Lo que se usa universalmente es un rodeo: un gráfico de <strong>barras apiladas</strong> en horizontal con dos series —la fecha de inicio y la duración— en el que la primera se deja invisible.</p>
        <p>El truco funciona porque Excel guarda las fechas como números de serie: el 1 de julio de 2026 no es texto, es un número correlativo contado desde 1900. Al apilar «inicio» y «duración» dentro de la misma barra, el segmento invisible ocupa exactamente los días que van desde el origen del eje hasta el arranque de la tarea, y empuja al segmento visible hasta su sitio. Lo que ves es la duración, colocada en su fecha.</p>
        <p>Microsoft distribuye además alguna plantilla del tipo «Planificador de proyectos Gantt» desde la pantalla de <em>Nuevo</em>, pero por dentro hacen esto mismo o pintan celdas con formato condicional. Construirlo una vez a mano compensa: cuando el gráfico se rompa —y se rompe— sabrás exactamente qué mirar.</p>`],
      ['Paso 1: tabla con tarea, inicio, fin y duración',
        `<p>En una hoja limpia crea cuatro columnas: <strong>Tarea</strong>, <strong>Inicio</strong>, <strong>Fin</strong> y <strong>Duración</strong>. Escribe las fechas como fechas reales —si te aparecen alineadas a la izquierda es que Excel las ha tomado como texto y el gráfico no las situará— y calcula la duración con <code>=C2-B2</code>, arrastrando la fórmula hacia abajo.</p>
        <p>Un ejemplo mínimo de cinco tareas:</p>
        <ul>
          <li>Investigación — 1 jul → 5 jul — 4 días</li>
          <li>Diseño — 5 jul → 12 jul — 7 días</li>
          <li>Desarrollo — 12 jul → 26 jul — 14 días</li>
          <li>Pruebas — 26 jul → 2 ago — 7 días</li>
          <li>Lanzamiento — 2 ago → 4 ago — 2 días</li>
        </ul>
        <p>Fíjate en que la duración tiene que salir como un número normal, no como una fecha. Si en D2 aparece algo parecido a «4 de enero de 1900», selecciona la columna y ponle <strong>Formato de número › General</strong>. Es el error más frecuente de todo el método y suele descubrirse tres pasos más tarde, cuando las barras salen con longitudes imposibles.</p>
        <p>Si trabajas con días laborables, calcula la duración con <code>=DIAS.LAB(B2;C2)</code>, pero ten en cuenta que el eje del gráfico seguirá siendo de días naturales: barras y calendario dejarán de coincidir. En planes con festivos, ese desajuste es una de las razones de peso para no usar Excel.</p>`],
      ['Paso 2: insertar un gráfico de barras apiladas',
        `<p>Selecciona la columna <strong>Tarea</strong> y la de <strong>Inicio</strong>, mantén pulsado Ctrl y añade también la de <strong>Duración</strong>. La columna <em>Fin</em> se queda fuera: el gráfico solo necesita saber dónde empieza cada tarea y cuánto dura. Ve a <strong>Insertar › Gráficos › Barras › Barra apilada</strong>.</p>
        <p>Excel dibuja dos series apiladas por fila y todavía no se parece a nada. Es lo esperado. Antes de seguir, comprueba el orden con clic derecho › <em>Seleccionar datos</em>: en «Entradas de leyenda (Series)» debe aparecer primero Inicio y después Duración. Si están al revés, reordénalas con las flechas de esa misma ventana — la serie invisible tiene que quedar debajo para hacer de espaciador.</p>
        <p>Si en el eje vertical ves 1, 2, 3… en lugar de los nombres de las tareas, Excel ha interpretado la columna de texto como una serie más. Quítala de «Entradas de leyenda» y añádela en <em>Etiquetas del eje horizontal (categoría)</em> con el botón Editar.</p>`],
      ['Paso 3: dejar la serie de inicio sin relleno',
        `<p>Este es el paso que convierte el gráfico. Haz un solo clic sobre cualquier segmento de la serie <strong>Inicio</strong> —un clic selecciona la serie entera; dos clics seleccionan un único punto, que no es lo que quieres— y abre <strong>Formato de serie de datos</strong> con clic derecho. En el icono del bote de pintura elige <strong>Relleno › Sin relleno</strong>.</p>
        <p>Los segmentos de inicio desaparecen y cada barra de duración queda flotando exactamente en su fecha, porque la barra invisible de debajo la empuja hasta ahí. Ese es el instante en que el gráfico deja de ser un gráfico de barras y pasa a ser un Gantt.</p>
        <p>En el mismo panel pon <strong>Borde › Sin línea</strong>. Si no lo haces queda el contorno del rectángulo invisible y se ve una caja fantasma desde el margen izquierdo hasta cada barra, que es peor que no haber tocado nada.</p>
        <p>Este es el truco entero. Todo lo demás —colores, orden, formato del eje— es acabado.</p>`],
      ['Paso 4: invertir el orden de las tareas',
        `<p>Excel dibuja la primera fila de la tabla abajo del todo, así que el plan sale del revés. Haz clic sobre el eje vertical (la lista de nombres), clic derecho › <strong>Formato de eje</strong>, y en Opciones del eje marca <strong>Categorías en orden inverso</strong>.</p>
        <p>La primera tarea sube arriba y el plan se lee de arriba abajo en el mismo orden que la tabla. En ese mismo panel conviene marcar también <strong>«El eje horizontal cruza: en la categoría máxima»</strong>: si no, al invertir las categorías el eje de fechas se va al pie del gráfico y la referencia temporal queda lejos de las primeras tareas, que son las que más se miran.</p>`],
      ['Paso 5: formatear fechas y colores',
        `<p>Faltan dos ajustes para que el resultado sea presentable.</p>
        <p>El primero es el eje de fechas. Por defecto arranca en cero —es decir, en 1900— y deja un vacío enorme a la izquierda. Selecciona el <strong>eje horizontal</strong>, abre <strong>Formato de eje</strong> y fija los <strong>Límites</strong>: el mínimo en la fecha de inicio del proyecto y el máximo en la de fin. Excel espera números de serie, así que el atajo es escribir la fecha en una celda vacía, cambiarla a formato General para leer el número y copiarlo. En <strong>Unidades › Principal</strong> pon 7 para tener una división por semana, y dale al eje un formato de número de fecha corta para que se lean días y no números sueltos.</p>
        <p>El segundo es el color. Selecciona la serie de <strong>Duración</strong> y dale un color por fase —se puede colorear una barra concreta haciendo doble clic solo sobre ella—, borra la leyenda, que a estas alturas ya no dice nada útil, y añade etiquetas de datos si quieres ver la duración escrita sobre cada barra.</p>`],
      ['Dependencias y porcentaje completado',
        `<p>Aquí aparecen los límites de verdad. Excel no tiene ninguna noción de dependencia: no hay forma de dibujar una flecha fin-comienzo que signifique algo para el cálculo, y mover una tarea no mueve a las siguientes. El apaño habitual es hacer que el inicio de cada tarea sea una fórmula que apunte al fin de la anterior —<code>=C2</code>— de modo que un cambio se propague hacia abajo por la columna. Funciona para una cadena lineal y se rompe en cuanto una tarea tiene dos predecesoras, hay solapes o alguien necesita holgura.</p>
        <p>El porcentaje completado se simula con una columna auxiliar: añade <strong>% completado</strong> y otra columna de <strong>Avance</strong> igual a <code>=Duración × %</code>. Incorpora esa columna como tercera serie apilada, ponle un tono más oscuro del mismo color y ordena las series para que el avance quede justo después del inicio invisible. Da el efecto de barra rellena a medias.</p>
        <p>El coste de todo esto no está en montarlo, sino en mantenerlo: cada tarea nueva obliga a ampliar el rango de datos del gráfico y a recolorear las series, y nada avisa de que una fecha ha dejado de cuadrar. Con más de diez o quince tareas enlazadas, el mantenimiento del gráfico supera al de la propia planificación. Ese es el momento de <a href="/es/app.html">usar un editor que recalcule solo</a>.</p>`],
      ['Gantt automático con formato condicional',
        `<p>Hay un segundo método que evita los gráficos por completo y que a mucha gente le resulta más cómodo: pintar el Gantt directamente en las celdas.</p>
        <p>Coloca un calendario en la fila de encabezados —una columna por día o por semana— y deja a la izquierda las columnas de tarea, inicio y fin. Selecciona toda la rejilla del calendario y ve a <strong>Inicio › Formato condicional › Nueva regla › Utilice una fórmula que determine las celdas para aplicar formato</strong>, con una condición del tipo <code>=Y(E$1&gt;=$B2; E$1&lt;=$C2)</code>, donde <code>E$1</code> es la primera fecha del calendario y <code>$B2</code>/<code>$C2</code> el inicio y el fin de la tarea. Elige un relleno y acepta.</p>
        <p>Las celdas se colorean solas cuando su fecha cae dentro del rango de la tarea, y el «gráfico» se actualiza al cambiar cualquier fecha, sin ningún objeto gráfico de por medio. Imprime bien, se amplía copiando filas y admite reglas adicionales: una para los hitos y otra para marcar la columna de hoy con <code>=E$1=HOY()</code>. Sigue sin haber dependencias ni ruta crítica, pero como documento vivo aguanta bastante mejor que el gráfico de barras.</p>`],
      ['Plantilla de Excel y la alternativa rápida',
        `<p>Si lo único que quieres es el archivo funcionando, parte de una plantilla ya montada: la tabla, la serie oculta, el eje invertido y el formato de fechas vienen hechos, y solo escribes encima tus tareas. El catálogo incluye versiones por sector —obra, marketing, desarrollo— además de la genérica.</p>
        <p>Y si lo que necesitas es el <em>archivo de Excel</em> pero no el trabajo manual, invierte el orden: monta el plan en <a href="/es/app.html">el editor gratuito</a>, donde escribes tareas, arrastras barras, enlazas dependencias y la ruta crítica se calcula sola, y expórtalo a .xlsx cuando esté listo (también sale a PowerPoint, PDF y PNG). Cuando el plan cambie, cambias el plan y vuelves a exportar, en lugar de reconstruir el gráfico entero.</p>`],
    ],
    callout: 'El método de barras apiladas funciona y no requiere complementos, pero produce un dibujo, no un modelo. En cuanto necesites que al mover una tarea se muevan las siguientes, Excel deja de ayudarte: no hay dependencias que recalcular.',
    faq: [
      ['¿Excel tiene una plantilla de Gantt integrada?', 'Algunas versiones incluyen plantillas del tipo «Planificador de proyectos Gantt» en la pantalla de Nuevo, pero varían según la versión y la región, y por dentro usan el mismo truco de barras apiladas o formato condicional. El método manual funciona en cualquier Excel moderno.'],
      ['¿Cómo convierto un gráfico de barras apiladas en un Gantt?', 'Representa las columnas de inicio y duración como barra apilada, selecciona la serie de inicio y ponle Sin relleno. Los segmentos invisibles empujan cada barra de duración hasta su fecha correcta. Después invierte el eje vertical con «Categorías en orden inverso» para que la primera tarea quede arriba.'],
      ['¿Cómo añado dependencias en Excel?', 'No hay soporte nativo. Puedes hacer que el inicio de cada tarea sea una fórmula que apunte al fin de la anterior, con lo que un cambio se propaga por la columna, o dibujar flechas a mano sobre el gráfico. Ni una cosa ni la otra recalculan nada cuando hay dos predecesoras o solapes.'],
      ['¿Por qué mi Gantt de Excel sale en orden invertido?', 'Porque Excel dibuja la primera fila de la tabla en la parte inferior de un gráfico de barras. Selecciona el eje vertical, abre Formato de eje y marca «Categorías en orden inverso»; el plan pasará a leerse de arriba abajo igual que la tabla.'],
      ['¿Cómo muestro el porcentaje completado?', 'Añade una columna de % completado y otra auxiliar que multiplique la duración por ese porcentaje. Incorpora la auxiliar como tercera serie apilada en un tono más oscuro: la parte rellena de cada barra indicará cuánto se ha avanzado.'],
      ['¿Es mejor Excel o una herramienta específica?', 'Excel va bien para un plan corto y estático que ya vas a compartir en una hoja de cálculo. Para planes con dependencias, ruta crítica o actualizaciones frecuentes, una herramienta específica ahorra mucho mantenimiento manual — y sigues pudiendo exportar el .xlsx al final.'],
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
      ['¿Puede Google Sheets hacer un diagrama de Gantt?',
        `<p>Google Sheets no ofrece un tipo de gráfico «Gantt» como ofrece uno de sectores o de líneas. Lo que sí ofrece son tres caminos legítimos hasta un cronograma que funciona, con compromisos distintos:</p>
        <ul>
          <li><strong>La función Cronograma</strong> (<em>Insertar › Cronograma</em>) — una vista nativa que convierte una tabla de tareas en tarjetas sobre un eje de fechas. Es lo más rápido de montar, pero es una vista, no un gráfico exportable, y no hace ningún cálculo de calendario.</li>
          <li><strong>Un gráfico de barras apiladas</strong> — el truco clásico de hoja de cálculo. Dos columnas auxiliares y una serie invisible dejan la barra de duración flotando en su fecha. Más control y más trabajo manual.</li>
          <li><strong>Una plantilla</strong> — abrir una hoja donde las fórmulas y el formato ya existen y escribir encima de los datos de ejemplo.</li>
        </ul>
        <p>Ninguno de los tres calcula la ruta crítica, dibuja flechas de dependencia ni recalcula las fechas siguientes cuando una tarea se retrasa. Esa carencia es la razón por la que la mayoría de los equipos acaban saliendo de la hoja de cálculo. Primero, los métodos.</p>`],
      ['Método 1: la función Cronograma (Insertar → Cronograma)',
        `<p>Sheets incorpora una vista de cronograma que toma una tabla con fechas y la representa como tarjetas sobre una línea de tiempo. Es la vía más rápida y no requiere ninguna fórmula.</p>
        <p>Prepara una hoja con al menos tres columnas: título de la tarea, fecha de inicio y fecha de fin (o duración). Columnas opcionales como responsable, fase o porcentaje de avance pueden alimentar el detalle de cada tarjeta. Selecciona el rango completo, incluida la fila de encabezados, y ve a <strong>Insertar → Cronograma</strong>. Confirma el rango en el cuadro de diálogo y acepta: Sheets crea una pestaña nueva con la vista.</p>
        <p>En el panel de la derecha se asigna qué columna es cada cosa: <em>título de la tarjeta</em>, <em>fecha de inicio</em>, <em>fecha de finalización</em>, <em>color de la tarjeta</em> y <em>agrupar por</em>. Si tus encabezados son claros, suele acertar solo. Agrupar por fase o por responsable es, con diferencia, lo que más cambia la legibilidad de un plan mediano.</p>
        <p>El zoom se ajusta entre días, semanas, meses, trimestres y años; se arrastra para desplazarse por el eje y, al hacer clic en una tarjeta, se abre su detalle y puedes saltar a la fila de origen. Para hojas de ruta y planes de alto nivel es genuinamente útil.</p>
        <p>A cambio de esa rapidez: el control visual es limitado, no puedes cambiar colores tarea por tarea, la vista está atada a la tabla de origen y no es una imagen que puedas pegar en una diapositiva, y sobre todo no hay dependencias ni ruta crítica. Es un reflejo de los datos, no un modelo del calendario.</p>`],
      ['Método 2: gráfico de barras apiladas',
        `<p>Si lo que quieres es un objeto gráfico de verdad —uno que puedas copiar a Documentos o Presentaciones, reestilizar y exportar— el gráfico de barras apiladas es el clásico fiable. La idea es la misma que en Excel: cada tarea recibe una barra «espaciadora» transparente que la empuja hasta su posición de inicio, seguida de una barra visible con su duración. Apiladas, las visibles flotan en el sitio correcto y el conjunto se lee como un Gantt.</p>`],
      ['Las dos columnas auxiliares: «Empieza el día» y «Duración»',
        `<p>Monta la tabla con las tareas en la columna A y las fechas reales al lado, y añade dos columnas calculadas:</p>
        <ul>
          <li><strong>Inicio</strong> (columna B) y <strong>Fin</strong> (columna C) — fechas de calendario reales, escritas como fechas y no como texto.</li>
          <li><strong>Empieza el día</strong> (columna D) — cuántos días después del arranque del proyecto empieza cada tarea. Si la fecha más temprana está en <code>$B$2</code>, escribe <code>=B2-$B$2</code>.</li>
          <li><strong>Duración</strong> (columna E) — la longitud de la tarea en días: <code>=C2-B2</code>.</li>
        </ul>
        <p>Las dos columnas calculadas hay que formatearlas con <strong>Formato › Número › Número</strong>, no como fecha. Sheets hereda el formato de las celdas de origen y convierte el resultado en algo como «5/1/1900»; ese es el paso que más gente se salta, y el que hace que las barras salgan con longitudes imposibles.</p>
        <p>A partir de aquí, «Empieza el día» es el espaciador invisible y «Duración» es la barra que se ve.</p>`],
      ['Insertar y formatear el gráfico',
        `<p>Selecciona las columnas <strong>Tarea</strong>, <strong>Empieza el día</strong> y <strong>Duración</strong> (A, D y E: mantén pulsado Ctrl o Cmd para seleccionar columnas no contiguas) y ve a <strong>Insertar → Gráfico</strong>.</p>
        <ul>
          <li>En el <em>editor de gráficos</em>, pestaña <strong>Configuración</strong>, pon el tipo en <strong>Gráfico de barras apiladas</strong>. Sheets suele ordenar mal las series la primera vez: «Empieza el día» debe ir antes que «Duración».</li>
          <li>Pasa a <strong>Personalizar → Series</strong>, selecciona la serie <em>Empieza el día</em> y ponle <strong>Color de relleno → Ninguno</strong>. El espaciador desaparece y las barras de duración se colocan en su fecha. Ahí aparece el Gantt.</li>
          <li>En <strong>Personalizar → Eje vertical</strong>, marca <strong>Orden inverso</strong> para que la primera tarea quede arriba, que es como se lee un plan.</li>
          <li>Recolorea la serie de duración, pon un título y ajusta el eje horizontal para que muestre números de día o fechas legibles.</li>
        </ul>
        <p>Ya tienes un gráfico editable que puedes redimensionar, reestilizar y copiar a otro documento. Da bastante más control que la función Cronograma —colores por fase, formato de eje, etiquetas— a cambio de unos minutos de configuración. Añadir hitos o agrupar por fase significa más columnas auxiliares y más mantenimiento a mano, que es donde este método empieza a pesar en proyectos reales.</p>`],
      ['Método 3: usar una plantilla',
        `<p>La forma más rápida de llegar a un gráfico terminado es no construir el mecanismo. Abre una hoja ya preparada, donde las fórmulas auxiliares, el formato condicional y el eje de fechas ya existen, y escribe encima de las filas de ejemplo.</p>
        <p>Haz una copia a tu propio Drive con <strong>Archivo › Hacer una copia</strong> antes de editar nada, o descarga el CSV con las tareas ya estructuradas y ábrelo en Sheets. Las plantillas van bien cuando quieres un aspecto coherente entre proyectos, o cuando prefieres no depurar una serie de gráfico a las siete de la tarde. El catálogo cubre también versiones de Excel y de PowerPoint y planes por sector.</p>`],
      ['Personalizar la vista y añadir dependencias',
        `<p>Cuatro retoques mejoran la legibilidad de cualquier Gantt hecho en Sheets:</p>
        <ul>
          <li><strong>Agrupar por fase</strong> — añade una columna «Fase» y ordena por ella, o úsala en el campo <em>Agrupar por</em> del Cronograma.</li>
          <li><strong>Mostrar el avance</strong> — con una columna de % completado y, en el método de barras apiladas, partiendo cada duración en dos segmentos, «hecho» y «pendiente».</li>
          <li><strong>Marcar los hitos</strong> — filas de duración cero con un color propio, para que se lean como puntos y no como barras.</li>
          <li><strong>Línea de hoy</strong> — una serie de un solo valor o una línea de referencia vertical; es lo que más rápido comunica el estado a quien mira el plan de pasada.</li>
        </ul>
        <p>Las dependencias son el límite duro. Google Sheets no tiene ningún concepto de «la tarea B empieza cuando termina la A». Se puede fingir con fórmulas —poner el inicio de una tarea como <code>=fin_de_la_predecesora + 1</code>— pero no hay flechas visibles, no hay holgura y las cadenas se vuelven frágiles enseguida: basta con que una tarea tenga dos predecesoras para que la fórmula deje de valer. Si las dependencias y el recálculo automático importan en tu proyecto, esa es la señal para cambiar de herramienta.</p>`],
      ['Los límites de Sheets, y una alternativa gratuita',
        `<p>Google Sheets es una hoja de cálculo excelente y un Gantt aceptable para salir del paso. Sus límites reales aparecen en cuanto el proyecto tiene piezas móviles:</p>
        <ul>
          <li>Sin flechas de dependencia y sin reprogramación automática cuando una tarea se retrasa.</li>
          <li>Sin ruta crítica: no puedes ver qué tareas mandan de verdad sobre tu fecha de entrega.</li>
          <li>Sin días laborables ni festivos: las duraciones son días naturales salvo que las calcules aparte, y entonces dejan de cuadrar con el eje.</li>
          <li>Mantenimiento manual: cada cambio de fecha obliga a revisar a mano las columnas auxiliares.</li>
          <li>Exportación incómoda: el Cronograma no es una imagen, y los gráficos de barras apiladas no siempre viajan bien a una diapositiva.</li>
        </ul>
        <p>Para un plan de veinte tareas eso se aguanta; para sesenta, no. La alternativa sin registro es <a href="/es/app.html">el editor de gantts.app</a>: exporta la hoja como CSV, impórtala con sus columnas de tarea, inicio y fin, enlaza las dependencias y el calendario se reprograma solo, con la ruta crítica resaltada. Desde ahí se exporta a Excel, PowerPoint, PDF o PNG en un clic, sin cuenta y sin instalar nada.</p>
        <p>Usa Google Sheets cuando el plan sea pequeño y estático, o cuando los datos ya vivan en una hoja compartida. Cambia de herramienta en cuanto necesites dependencias, ruta crítica o un gráfico que se mantenga al día sin vigilancia.</p>`],
    ],
    callout: 'Si tu plan va a cambiar más de una vez, elige el método por el coste de mantenerlo, no por lo rápido que es montarlo. La función Cronograma se hace en dos minutos; un gráfico de barras apiladas con veinte tareas se rehace en veinte cada vez que se mueve una fecha.',
    faq: [
      ['¿Google Sheets puede hacer diagramas de Gantt?', 'Sí, de tres formas: con la función Cronograma integrada (Insertar → Cronograma), con un gráfico de barras apiladas al que se oculta la serie de inicio, o partiendo de una plantilla. Ninguna de las tres admite dependencias ni ruta crítica.'],
      ['¿Qué es exactamente la función Cronograma?', 'Es una vista que convierte una tabla con fechas de inicio y fin en tarjetas horizontales sobre un eje temporal, con zoom de días a años y agrupación por una columna. Se monta en dos minutos y va muy bien para hojas de ruta, pero no es una imagen editable ni calcula nada.'],
      ['¿La función Cronograma admite dependencias?', 'No. Muestra las barras en la línea de tiempo, pero no enlaza tareas ni recalcula fechas, así que no hay ruta crítica. Tampoco la admite el método de barras apiladas: lo más parecido es encadenar fechas con fórmulas, y eso se rompe en cuanto una tarea tiene dos predecesoras.'],
      ['¿Por qué me salen las barras con longitudes absurdas?', 'Casi siempre porque las columnas auxiliares de «empieza el día» y «duración» han heredado formato de fecha. Selecciónalas y ponles Formato › Número › Número; el gráfico necesita días como cifras, no como fechas.'],
      ['¿Se puede hacer gratis?', 'Sí. Google Sheets es gratuito con una cuenta de Google y los tres métodos no cuestan nada. El editor de gantts.app también es gratuito y además no pide ninguna cuenta.'],
      ['¿Puedo pasar mi hoja a una herramienta de Gantt?', 'Sí. Exporta la hoja como CSV e impórtala; el <a href="/es/app.html">editor gratuito</a> acepta CSV con columnas de tarea, inicio y fin, y desde ahí puedes exportar a Excel, PowerPoint, PDF o PNG.'],
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
        `<p>PowerPoint no tiene ningún objeto «diagrama de Gantt», así que todo método es un rodeo. Dos merecen la pena:</p>
        <ul>
          <li><strong>Gráfico de barras apiladas</strong> — se reaprovecha el gráfico de barras integrado ocultando el primer segmento, con lo que queda una barra de duración flotando por tarea. Sigue gobernado por datos: al editar la tabla, las barras se redibujan solas.</li>
          <li><strong>Formas o SmartArt</strong> — se dibuja cada tarea como un rectángulo sobre una rejilla manual. Control visual máximo, automatismo cero: cada cambio se hace a mano.</li>
        </ul>
        <p>¿Cuál elegir? El gráfico, cuando las fechas todavía pueden moverse y quieres que editar los datos actualice la imagen, o cuando la exactitud importa más que el acabado. Las formas, cuando la diapositiva tiene que respetar una identidad de marca estricta y el calendario está esencialmente cerrado.</p>
        <p>Y ninguno de los dos si tienes dependencias reales que seguir: ningún formato de PowerPoint va a recalcular un calendario cuando una tarea se mueva. Para una lámina de dirección con ocho barras, cualquiera de los dos sirve; a partir de ahí, ambos duelen.</p>`],
      ['Método 1: gráfico de barras apiladas, paso a paso',
        `<p>Es el mismo truco que en la hoja de cálculo, pero dentro del motor de gráficos de PowerPoint.</p>
        <ol>
          <li>En la diapositiva, <strong>Insertar → Gráfico → Barras → Barra apilada</strong> y acepta. Se abre una hoja de datos vinculada, en miniatura, con datos de ejemplo.</li>
          <li>Sustitúyelos por tres columnas: <strong>Tarea</strong>, <strong>Inicio</strong> (días transcurridos desde el arranque del proyecto) y <strong>Duración</strong> (días). Trabajar con números de día en vez de con fechas evita que PowerPoint tenga que interpretar formatos. Cierra la ventana de datos.</li>
          <li>Haz clic sobre cualquier barra de la serie <strong>Inicio</strong> —las de abajo de cada pila— y en <em>Formato de serie de datos → Relleno</em> elige <strong>Sin relleno</strong>. Quita también el borde con <em>Sin línea</em>. Las barras de duración quedan flotando en su posición: eso ya es un Gantt.</li>
          <li>Clic derecho sobre el eje vertical, <strong>Formato de eje</strong>, y marca <strong>Categorías en orden inverso</strong> para que la primera tarea aparezca arriba.</li>
          <li>Selecciona el eje horizontal y fija los <strong>Límites</strong>, mínimo y máximo, al rango de días de tu proyecto. Si lo dejas en automático, el eje arranca en cero y todas las barras se apelotonan a la derecha con media diapositiva vacía.</li>
          <li>Recolorea la serie de duración, pon un título y borra la leyenda, que a estas alturas solo dice «Inicio» y «Duración».</li>
        </ol>
        <p>La ventaja de este método es que los datos siguen ahí: puedes volver con clic derecho → <strong>Modificar datos</strong>, cambiar una duración y ver el gráfico redibujarse. La desventaja es doble: el control estético es limitado, las barras no se pueden arrastrar, y los desplazamientos siguen siendo números de día que calculas tú.</p>
        <p>Dos refinamientos habituales. Partir cada barra de duración en dos segmentos, «completado» y «pendiente», añadiendo una tercera columna y sombreando el primero más oscuro, con lo que obtienes una vista de avance integrada. Y representar un hito con una fila de duración casi cero y un relleno llamativo, para que se lea como una marca y no como una barra. Todo esto es manual, y si la fecha de una predecesora se mueve, hay que recalcular a mano los desplazamientos de todo lo que viene detrás.</p>`],
      ['Convertir fechas reales en números de día',
        `<p>El punto más incómodo del método del gráfico es que la hoja de datos incrustada de PowerPoint es una miniatura de Excel, sin sitio cómodo para columnas auxiliares. Conviene hacer las cuentas fuera.</p>
        <p>Abre una hoja aparte con tarea, inicio y fin como fechas reales, calcula <code>=inicio − fecha_de_arranque</code> para el desplazamiento y <code>=fin − inicio</code> para la duración, y pega en PowerPoint solo esas tres columnas ya convertidas en números. Así el eje horizontal se comporta como una escala numérica de días, que es predecible, en vez de como un eje de fechas, que en PowerPoint tiende a arrancar en 1900 y a insertar divisiones mensuales que nadie ha pedido.</p>
        <p>El precio es que el eje muestra «0, 7, 14, 21» en lugar de fechas. Dos soluciones: dejarlo así y titular la diapositiva con el rango («Programa · marzo–junio de 2026»), o borrar el eje numérico y colocar encima cuadros de texto con los nombres de los meses, alineados a la rejilla. En una diapositiva, lo segundo casi siempre se lee mejor.</p>
        <p>Si además vas a mantener la lámina durante meses, guarda esa hoja auxiliar junto al .pptx. Sin ella, dentro de seis semanas nadie sabrá a qué fecha corresponde el día 34.</p>`],
      ['Método 2: formas o SmartArt',
        `<p>Cuando necesitas un acabado a medida y en la línea gráfica de la empresa, se construye con formas:</p>
        <ul>
          <li>Inserta una tabla o dibuja líneas verticales de rejilla como eje temporal: una columna por semana o por mes.</li>
          <li>Lista los nombres de las tareas en la columna de la izquierda.</li>
          <li>Para cada tarea, inserta un rectángulo redondeado y estíralo sobre las columnas que corresponden a su inicio y su duración.</li>
          <li>Añade rombos para los hitos y líneas conectoras finas para sugerir dependencias.</li>
          <li>Usa <strong>Formato de forma → Alinear</strong> (alinear y distribuir) para dejar las barras cuadradas, y agrupa el conjunto para moverlo como una sola pieza.</li>
        </ul>
        <p>Es más trabajo la primera vez y mucho más rápido de retocar después, y permite cosas que el gráfico no da: barras redondeadas, iconos, anotaciones, colores por equipo. Los gráficos de proceso y de escala temporal de <strong>SmartArt</strong> producen deprisa una versión simplificada, tipo hoja de ruta, pero no son Gantt a escala de fechas: sirven para un visual de «fases» de alto nivel, no para un calendario exacto.</p>
        <p>Tres costumbres evitan que el método de formas acabe en desorden. Fija una altura de barra constante y ancla todo a la misma rejilla con las guías inteligentes, para que el resultado parezca dibujado por una máquina y no a pulso. Usa el <strong>Panel de selección</strong> (<em>Formato de forma → Panel de selección</em>) para nombrar y ordenar las decenas de formas que vas a acumular. Y construye el conjunto agrupado en un solo objeto, para poder duplicarlo y montar una comparación «previsto» frente a «actual».</p>
        <p>Aun bien hecho, esto es un dibujo, no un calendario: trátalo como una pieza de comunicación de un plan cerrado, no como un documento de trabajo que vayas a revisar cada semana.</p>`],
      ['Plantilla de PowerPoint gratuita',
        `<p>Si prefieres no empezar de cero, cada plantilla del catálogo incluye una versión .pptx con el eje temporal formateado, un esquema de color coherente y los marcadores de hito ya estilados. Las fases llegan dibujadas y editables como formas nativas, no como una imagen pegada.</p>
        <p>¿Prefieres que la fuente de verdad sea una hoja de cálculo y la diapositiva solo el resultado? Empieza por la guía de Excel o por su plantilla, y trae a PowerPoint únicamente la imagen final. El catálogo completo cubre obra, marketing, desarrollo de software y más.</p>`],
      ['La vía rápida: diseñar online y exportar a PowerPoint',
        `<p>Aquí es donde el enfoque cambia de verdad. En lugar de empujar rectángulos o esconder series de un gráfico, construyes un plan de proyecto real y dejas que la herramienta produzca la diapositiva:</p>
        <ol>
          <li>Abre <a href="/es/app.html">el editor gratuito</a>: sin cuenta y sin instalar nada.</li>
          <li>Añade tareas, arrastra las barras para fijar fechas, agrúpalas por fases y enlaza las dependencias. El calendario se reprograma solo y la ruta crítica se resalta automáticamente.</li>
          <li>Pulsa <strong>Exportar → PowerPoint</strong>. Obtienes un .pptx con el Gantt en una diapositiva, listo para presentar o para entregar.</li>
        </ol>
        <p>Esa exportación a .pptx en un clic es la diferencia práctica: la mayoría de las herramientas gratuitas se quedan en un PNG o reservan la exportación para un plan de pago. Aquí es gratuita, y del mismo menú salen también PDF, PNG y Excel. Cuando el plan cambie, editas online y vuelves a exportar, en vez de rehacer la lámina a mano.</p>`],
      ['Consejos para presentar',
        `<ul>
          <li><strong>Agrupa por fase con color.</strong> Un tono por fase —Análisis, Ejecución, Cierre— hace que la audiencia lea la estructura antes que el detalle.</li>
          <li><strong>Que los hitos destaquen.</strong> Un único color de contraste y un rombo bastan para separarlos de las barras; escribe la fecha al lado, que es lo que la sala va a fotografiar.</li>
          <li><strong>Limita las filas.</strong> Entre ocho y doce barras por diapositiva; los planes grandes se parten en una lámina resumen más láminas de detalle por fase.</li>
          <li><strong>Pon una línea de hoy.</strong> Una marca vertical en la fecha actual comunica el estado sin una sola palabra.</li>
          <li><strong>Etiquetas cortas.</strong> Recorta los nombres a dos o tres palabras y deja el detalle en las notas del orador, no sobre la barra.</li>
          <li><strong>Ajusta a tu marca.</strong> Recolorea las barras con la paleta de la presentación para que el gráfico no parezca traído de otro documento.</li>
        </ul>
        <p>Un solo color de acento para lo crítico y grises para el resto resuelve el 90 % de las decisiones de diseño de una lámina de calendario.</p>`],
    ],
    callout: 'Una diapositiva de Gantt no es tu plan, es un resumen de tu plan. Si estás intentando meter cuarenta tareas en una lámina, el problema no es PowerPoint: la audiencia necesita las fases y los hitos, y el detalle vive en otro documento.',
    faq: [
      ['¿PowerPoint tiene plantillas de Gantt?', 'No incluye un tipo de objeto «Gantt». Sí trae plantillas de línea de tiempo, aunque varían según la versión, y puedes descargar una plantilla .pptx ya montada con fases editables como formas nativas.'],
      ['¿Qué método es mejor?', 'Formas si la diapositiva es para presentar y quieres control visual sobre cada detalle; gráfico de barras apiladas si vas a actualizar los datos periódicamente y prefieres que la imagen se redibuje sola al cambiar la tabla.'],
      ['¿Cómo hago un Gantt con formas en PowerPoint?', 'Dibuja una tabla o unas líneas de rejilla como eje temporal, inserta un rectángulo redondeado por tarea y estíralo sobre las columnas que corresponden a su inicio y su duración. Da control total sobre el aspecto, pero hay que actualizarlo a mano cada vez que se mueve una fecha.'],
      ['¿Por qué todas mis barras se amontonan a la derecha?', 'Porque el eje horizontal ha quedado en automático y arranca en cero. Selecciónalo, abre Formato de eje y fija los límites mínimo y máximo al rango de días real del proyecto.'],
      ['¿Cómo represento los hitos?', 'Como rombos o marcas de longitud casi nula situados en la fecha del hito, con un color de contraste para que no se confundan con las barras. En el editor de gantts.app los hitos son un tipo de elemento propio y se exportan con el gráfico.'],
      ['¿Puedo exportar mi plan a PowerPoint?', 'Sí. Desde el <a href="/es/app.html">editor gratuito</a> se exporta a .pptx en un clic, y las barras llegan como formas editables, no como una imagen. Del mismo menú salen PDF, PNG y Excel.'],
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
        <p><strong>Microsoft Project</strong> — de pago, sin plan gratuito. Exportación y ruta crítica completas.</p>
        <p><strong>Excel y Google Sheets</strong> — gratuitas si ya pagas el software. Exportación nativa, pero sin dependencias ni ruta crítica.</p>`],
      ['Las nueve herramientas, una a una',
        `<p><strong>1. gantts.app — gratuita y sin cuenta.</strong> Aviso: es nuestra herramienta. Es un editor de Gantt que funciona en el navegador, totalmente gratuito, sin registro ni inicio de sesión, sin topes de tareas ni de proyectos, con dependencias, hitos, ruta crítica automática y exportación en un clic a PDF, PNG, Excel y PowerPoint. Los datos se quedan en tu navegador. La contrapartida es que está centrada en planificar y exportar: no es una suite de gestión del trabajo con imputación de horas, chat y facturación de recursos, y si necesitas eso, una plataforma más pesada te encajará mejor. <em>Ideal para</em> quien quiere un Gantt de verdad, rápido y sin cuenta.</p>
        <p><strong>2. GanttProject — escritorio de código abierto.</strong> Aplicación de escritorio madura y gratuita para Windows, macOS y Linux. Soporta tareas, dependencias, ruta crítica, asignación de recursos y exportación a PDF, PNG y CSV. Al ser una descarga y no una web, funciona sin conexión y no pide cuenta; a cambio, la interfaz se nota anticuada y no trae sincronización en la nube. <em>Ideal para</em> quien prefiere software instalado y licencia libre.</p>
        <p><strong>3. OnlineGantt y otras herramientas web pequeñas.</strong> Un puñado de sitios ligeros permiten bosquejar un Gantt en el navegador y exportar una imagen o un PDF. Sirven para un gráfico puntual y algunos no piden cuenta, pero la profundidad varía muchísimo: a muchos les faltan una ruta crítica fiable, dependencias sólidas o exportación a hoja de cálculo. <em>Ideal para</em> gráficos rápidos y desechables; comprueba los límites vigentes antes de depender de uno.</p>
        <p><strong>4. TeamGantt — capaz, pero con el plan gratuito muy acotado.</strong> Herramienta pulida y orientada a la colaboración. Su plan gratuito es usable pero limitado: en torno a un proyecto y unas 60 tareas para pocos usuarios, con la ruta crítica y la exportación completa reservadas a los planes de pago. Exige cuenta. <em>Ideal para</em> equipos pequeños que están evaluando una herramienta de pago y caben dentro de los topes.</p>
        <p><strong>5. GanttPRO — basada en prueba.</strong> Herramienta comercial bien diseñada, con planificación, carga de trabajo y colaboración potentes. Ofrece una prueba gratuita, no un plan gratuito: cuando el plazo termina hay que pagar, y requiere cuenta desde el primer minuto. <em>Ideal para</em> equipos con presupuesto que quieren probar una plataforma de Gantt antes de comprarla.</p>
        <p><strong>6. Instagantt — freemium.</strong> Conocida por su integración con Asana y por unos cronogramas limpios. Tiene capa gratuita limitada y registro obligatorio; buena parte de las funciones —exportación avanzada, ruta crítica, más proyectos— vive en los planes de pago. <em>Ideal para</em> usuarios de Asana que quieren una vista de calendario conectada a sus tareas.</p>
        <p><strong>7. Canva — primero el diseño.</strong> Canva produce un Gantt con muy buen aspecto a partir de sus plantillas, exportable a PNG o PDF en la capa gratuita (con cuenta). Pero es una herramienta de diseño, no un motor de planificación: no hay dependencias reales, ni reprogramación, ni ruta crítica; las barras son formas que colocas a mano. <em>Ideal para</em> un visual estático y cuidado para una diapositiva o un informe donde la exactitud del calendario no es el punto.</p>
        <p><strong>8. Microsoft Project — potente y de pago.</strong> El estándar corporativo para planificación seria: lógica de dependencias profunda, nivelación de recursos, líneas base y ruta crítica. No tiene plan gratuito —es suscripción o licencia— y requiere cuenta Microsoft. <em>Ideal para</em> organizaciones grandes con programas complejos y presupuesto acorde.</p>
        <p><strong>9. Excel y Google Sheets — la opción artesanal.</strong> Ya tienes la hoja de cálculo, y se puede doblar hasta convertirla en un Gantt con un gráfico de barras apiladas o con la función Cronograma de Sheets. Es gratis si ya pagas el software, pero no hay dependencias, no hay ruta crítica y el mantenimiento es todo manual. <em>Ideal para</em> planes pequeños y estáticos cuyos datos ya viven en una hoja compartida.</p>`],
      ['Herramientas gratuitas que no piden registro',
        `<p>Es una categoría corta, y conviene entender por qué. Pedir una cuenta no es un capricho: es el modelo de negocio. Un correo electrónico es un contacto comercial, y el momento en que más se necesita el archivo —justo al terminar el plan— es también el momento de máxima disposición a entregarlo.</p>
        <p>Por eso el muro casi nunca está al empezar, sino al exportar. Puedes construir el proyecto entero y descubrir al final que descargar el PDF exige una suscripción, o que la versión gratuita añade una marca de agua.</p>
        <p>Las que no piden registro se reducen a dos grupos. Las <strong>aplicaciones de escritorio de código abierto</strong>, como GanttProject, que descargas y ejecutas sin cuenta. Y unas pocas <strong>aplicaciones web que funcionan íntegramente en el navegador</strong>, sin servidor donde guardar nada — si el plan no sale de tu equipo, no hay nada que asociar a un usuario.</p>
        <p>Si tu requisito es «hoy, sin dar mi correo y con el archivo en la mano», ese es el filtro que más reduce la lista, y también el más rápido de comprobar: intenta exportar en los primeros cinco minutos.</p>`],
      ['Cómo elegir',
        `<p>Responde tres preguntas y la elección se resuelve casi sola.</p>
        <p><strong>¿Necesitas dependencias y ruta crítica, o solo un dibujo?</strong> Si el plan tiene menos de quince tareas y no va a cambiar, cualquier herramienta de diseño sirve. En cuanto haya tareas enlazadas, necesitas un motor que recalcule; sin él, cada cambio es trabajo manual.</p>
        <p><strong>¿Tienes que exportar a un formato concreto?</strong> Un comité pide PDF, un cliente pide PowerPoint, una oficina técnica pide Excel o MS Project. Comprueba que ese formato concreto esté en el plan gratuito, no solo «exportación» en abstracto.</p>
        <p><strong>¿Vais a colaborar en tiempo real?</strong> Esta es la única de las tres que obliga de verdad a un servicio de pago, porque requiere servidores, cuentas y permisos. Todo lo demás —dependencias, ruta crítica, línea base, exportación completa— existe gratis si sabes dónde mirar.</p>
        <p>Y una cuarta pregunta que casi nadie hace: <strong>¿qué pasa con tus datos?</strong> Una herramienta que guarda el plan en su servidor tiene una política de privacidad que conviene leer; una que lo guarda en tu navegador no tiene nada que leer.</p>`],
    ],
    callout: 'Antes de invertir horas en una herramienta, comprueba dónde está el muro. Suele estar en la exportación: puedes construir el plan entero y descubrir al final que descargar el PDF exige una suscripción. Prueba a exportar en los primeros cinco minutos, no en los últimos.',
    faq: [
      ['¿Cuál es el mejor programa gratuito de diagramas de Gantt?', 'Depende de si necesitas escritorio o navegador. GanttProject es la opción de escritorio de código abierto más sólida; entre las web, busca las que no exijan cuenta y permitan exportar sin pagar.'],
      ['¿Los planes gratuitos incluyen la ruta crítica?', 'Muchos no. Es una de las funciones que más se reserva a los planes de pago, junto con la exportación y las líneas base. Conviene confirmarlo antes de empezar.'],
      ['¿Puedo usar una herramienta gratuita para trabajo profesional?', 'Sí, siempre que la exportación no esté limitada y el plan no tenga topes de tareas. Lo que rara vez es gratuito es la colaboración en tiempo real.'],
      ['¿Cuáles son gratuitas de verdad y no una prueba?', 'gantts.app (gratuita del todo y sin cuenta) y GanttProject (código abierto, de descarga) lo son. TeamGantt e Instagantt ofrecen planes gratuitos limitados. GanttPRO funciona con prueba y Microsoft Project es de pago: ninguna de las dos es gratuita a largo plazo.'],
      ['¿Qué diferencia hay entre gratuito, freemium y prueba gratuita?', 'Gratuito es sin coste y sin caducidad. Freemium es un plan limitado gratis para siempre que cobra por subir los topes o por funciones clave. La prueba gratuita da acceso completo durante unos días y después hay que pagar. Muchas herramientas anunciadas como gratis son en realidad una de las dos últimas.'],
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

  's-curve-project-management': {
    h1: 'Curva S y valor ganado: saber si de verdad vas con retraso',
    metaTitle: 'Curva S y valor ganado en proyectos',
    metaDesc: 'Qué muestra una curva S, cómo leer lo planificado frente a lo real y cómo el valor ganado convierte esa diferencia en una cifra. Generador gratuito.',
    date: '2026-07-19',
    lead: 'Un porcentaje completado no dice casi nada por sí solo. Un sesenta por ciento es excelente en la semana dos y una catástrofe en la semana nueve. Una <strong>curva S</strong> resuelve eso representando el trabajo planificado acumulado frente al tiempo, de modo que «¿cómo vamos?» se convierte en «¿cómo <em>deberíamos</em> ir a estas alturas?» — y la diferencia entre las dos líneas es la respuesta.',
    figIntro: 'Lo planificado frente a lo real, y qué significa la distancia entre ambas curvas:',
    sections: [
      ['Por qué la curva tiene forma de S',
        `<p>Los proyectos no consumen trabajo a ritmo constante. Las primeras semanas van despacio —movilización, cierre del alcance, esperas de aprobación—, después el centro se acelera porque todo avanza en paralelo, y la cola vuelve a frenarse mientras lo último espera firmas y repasos.</p>
        <p>Al acumular el trabajo sobre el eje temporal, esa forma sale sola: plana, empinada, plana. No es un objetivo que haya dibujado nadie. Es consecuencia de cómo llega realmente el trabajo.</p>
        <p>Y eso es justamente lo que la hace útil como vara de medir. Una recta implicaría que el proyecto debe estar al veinte por ciento cuando ha pasado el veinte por ciento del plazo, y todos los proyectos de la historia parecerían retrasados en su primer mes.</p>`],

      ['Leer lo planificado frente a lo real',
        `<p>Dos curvas. La curva <strong>planificada</strong> sale de tu línea base: se reparte el peso de cada tarea entre sus fechas previstas y se acumula. La curva <strong>real</strong> sale del avance reportado.</p>
        <p>Se leen en vertical, sobre la fecha de hoy:</p>
        <ul>
          <li><strong>Real por debajo de lo planificado</strong> — vas con retraso. La distancia vertical es el trabajo que te falta.</li>
          <li><strong>Real por encima de lo planificado</strong> — vas adelantado, o tu reporte de avance es optimista. Ocurren las dos cosas.</li>
          <li><strong>Curvas que se separan</strong> — el problema está empeorando, no estabilizándose. Es la forma que más importa y la que un porcentaje único nunca enseña.</li>
        </ul>
        <p>Léelas en <em>horizontal</em> y obtendrás algo más intuitivo para una reunión de seguimiento: desplázate a la izquierda desde el punto real de hoy hasta cortar la curva planificada y tendrás la fecha en la que el plan esperaba este nivel de avance. Esa distancia es cuántas semanas llevas de retraso, en las unidades en las que la gente discute de verdad.</p>`],

      ['Valor ganado, sin jerga',
        `<p>La gestión del valor ganado pone una cifra a esa diferencia. Son tres magnitudes, y las siglas son peores que las ideas:</p>
        <ul>
          <li><strong>PV</strong> (valor planificado) — el trabajo que dijiste que estaría terminado a estas alturas, valorado a presupuesto.</li>
          <li><strong>EV</strong> (valor ganado) — el trabajo que <em>realmente</em> has terminado, valorado con el mismo presupuesto. Una tarea de 10.000 € al 40 % ha ganado 4.000 €. Lo que te haya costado es irrelevante aquí, y a propósito.</li>
          <li><strong>AC</strong> (coste real) — lo que has gastado de verdad.</li>
        </ul>
        <p>A partir de esas tres:</p>
        <ul>
          <li><strong>SV = EV − PV</strong> — desviación de plazo. Negativa significa retraso.</li>
          <li><strong>CV = EV − AC</strong> — desviación de coste. Negativa significa sobrecoste.</li>
          <li><strong>SPI = EV ÷ PV</strong> — por debajo de 1,0 significa retraso. Un SPI de 0,85 quiere decir que obtienes 85 céntimos de avance por cada euro de plan.</li>
          <li><strong>CPI = EV ÷ AC</strong> — por debajo de 1,0 significa sobrecoste.</li>
        </ul>
        <p>La separación es todo el asunto. Un proyecto puede ir perfectamente en presupuesto y muy tarde, o en plazo y perdiendo dinero a chorros, y un único «porcentaje completado» esconde ambas cosas.</p>`],

      ['Por qué a veces la herramienta se niega a mostrarte el CPI',
        `<p>Conviene decirlo claro, porque la mayoría de las calculadoras gratuitas de valor ganado hacen justo lo contrario.</p>
        <p>El coste real es el único dato que no se puede deducir de un calendario. Tiene que venir de tu contabilidad. El atajo tentador es suponer que una tarea al 40 % ha consumido el 40 % de su presupuesto — y si haces eso, AC es igual a EV por construcción, así que <strong>el CPI sale exactamente 1,00 para todos los proyectos que han existido jamás</strong>. La cifra parece rigurosa, no reacciona a nada y le diría a alguien con el presupuesto descontrolado que va perfectamente.</p>
        <p>Por eso gantts.app deja las métricas de coste en blanco hasta que introduces una cifra real de «Gastado» en tus tareas. Las métricas de plazo —SV y SPI— siguen funcionando, porque solo necesitan fechas y avance. Un dato ausente es honesto. Uno rotundamente equivocado no lo es.</p>
        <p>Por la misma razón, la curva ganada anterior a hoy se reconstruye en lugar de registrarse: la herramienta guarda tu avance tal como está ahora, no un histórico de cada lectura pasada. Es exacta en el día de hoy, que es donde se leen las cifras, y aproximada hacia atrás — y lo dice en el propio panel, no en una nota al pie.</p>`],

      ['No necesitas presupuesto para tener una curva',
        `<p>La mayoría de los planes no llevan ningún dato de coste, y una curva S que exija uno es una curva S que no dibuja nadie.</p>
        <p>Si ninguna tarea tiene coste, gantts.app pondera cada una por su duración en días laborables. La forma es la misma y el eje se lee en porcentaje en vez de en dinero: una curva S de avance puro. Añade costes más adelante y el mismo panel se convierte en una curva de valor sin que cambies nada más.</p>
        <p>Eso sí, hay algo que importa: <strong>fija una línea base</strong>. Sin ella, «planificado» solo puede significar tus fechas actuales, y tus fechas actuales ya incluyen todos los retrasos que han ocurrido. La desviación de plazo saldrá cero para siempre, que es una respuesta muy tranquilizadora y completamente inútil. Línea base ▸ Fijar línea base, una vez, cuando el plan esté acordado.</p>`],

      ['Cómo construir una aquí',
        `<ol>
          <li>Monta o importa tu calendario y deja las fechas más o menos bien.</li>
          <li><strong>Línea base ▸ Fijar línea base</strong> cuando el plan esté acordado. Eso congela lo que significa «planificado».</li>
          <li>Opcionalmente, da un <strong>Presupuesto</strong> a las tareas en el panel, para que la curva se lea en dinero y no en días.</li>
          <li>Actualiza el <strong>% completado</strong> a medida que avanza el trabajo: de eso está hecha la curva ganada.</li>
          <li>Opcionalmente, introduce lo <strong>Gastado</strong> por tarea para desbloquear el CPI, la desviación de coste y la previsión a la finalización.</li>
          <li>Pulsa <strong>📈 Curva S</strong>.</li>
        </ol>
        <p>Funciona íntegramente en tu navegador. Sin cuenta, sin subir nada y sin una plantilla de hoja de cálculo que mantener a mano.</p>`],
    ],
    faq: [
      ['¿Qué es una curva S en gestión de proyectos?', 'Un gráfico del trabajo planificado acumulado frente al tiempo. Tiene forma de S porque los proyectos arrancan despacio, se aceleran en el centro y se frenan al final. Comparada con el avance real, la distancia vertical entre ambas curvas es cuánto vas por delante o por detrás.'],
      ['¿Qué diferencia hay entre curva S y valor ganado?', 'La curva S es la imagen; el valor ganado es la aritmética que hay detrás. La gestión del valor ganado pone cifras a esa diferencia —SV, SPI, CV y CPI— mientras que la curva muestra su forma y su tendencia.'],
      ['¿Qué significa un SPI de 0,9?', 'Que has ganado el 90 % del valor que el plan decía que tendrías a estas alturas, así que vas en torno a un 10 % retrasado. Por debajo de 1,0 es retraso; por encima, adelanto.'],
      ['¿Necesito datos de coste para usar una curva S?', 'No. Sin costes, las tareas se ponderan por su duración en días laborables y obtienes una curva de avance: la misma forma, leída en porcentaje. Los costes la convierten en una curva de valor y desbloquean las métricas económicas.'],
      ['¿Por qué no aparece el CPI?', 'Porque no se han introducido costes reales. El CPI necesita gasto real; deducirlo del porcentaje completado lo dejaría en 1,00 exacto para cualquier proyecto. Añade una cifra de «Gastado» a tus tareas y aparecerá.'],
      ['¿Puedo hacer una curva S en Excel?', 'Sí, y es lo que hace casi todo el mundo: mantener a mano una columna acumulada y un gráfico, y rehacerlos cada vez que se mueven las fechas. Generarla desde el calendario elimina ese paso.'],
    ],
    related: [
      ['gantt-baseline-variance', 'Medir la desviación con una línea base'],
      ['critical-path-method', 'Cómo se calcula la ruta crítica'],
      ['3-week-lookahead-schedule', 'El programa lookahead de 3 semanas'],
    ],
  },

  '3-week-lookahead-schedule': {
    h1: 'El programa lookahead de 3 semanas (sin reescribirlo cada lunes)',
    metaTitle: 'Programa lookahead de 3 semanas (gratis)',
    metaDesc: 'Qué es un lookahead de 3 semanas, por qué lo usan los equipos de obra y cómo generarlo desde el programa maestro en vez de reescribirlo en Excel.',
    date: '2026-07-19',
    lead: 'Nadie construye con un programa de dieciocho meses en la mano. Se construye con las tres semanas siguientes. El <strong>programa lookahead</strong> es esa ventana —la porción del programa maestro que ya está lo bastante cerca como para ser real— y en la mayoría de las obras se sigue produciendo copiando filas a una hoja de cálculo a mano, todos los lunes.',
    figIntro: 'El mismo calendario, filtrado al trabajo que toca la ventana:',
    sections: [
      ['Qué es realmente un lookahead',
        `<p>Un lookahead es un extracto corto y rodante del programa maestro —normalmente tres semanas, a veces dos, cuatro o seis— que muestra solo el trabajo que toca esa ventana. Avanza cada semana, así que una misma tarea aparece en varios lookaheads consecutivos según se acerca y se entiende mejor.</p>
        <p>Existe porque un programa maestro y un plan de trabajo son documentos distintos con funciones distintas. El programa responde a «¿llegamos a tiempo?»; el lookahead responde a «¿qué pasa el martes, y ha pedido alguien el acero?». Intentar llevar una reunión de obra con un programa de doscientas líneas es la razón por la que se imprime en A0 y luego se ignora.</p>
        <p>En términos de Last Planner, el lookahead es donde aparecen las <em>restricciones</em>: el trabajo está lo bastante cerca como para preguntar si el permiso, los materiales, la cuadrilla y el gremio anterior van a estar realmente ahí.</p>`],

      ['Solape, no contención: el detalle que casi todos fallan',
        `<p>Esta es la regla que hace correcto un lookahead, y la que más se rompe en las hojas de cálculo hechas a mano.</p>
        <p>Una tarea pertenece a la ventana si la <strong>solapa</strong>, no si cabe dentro de ella. El paquete de cimentación de ocho meses que empezó en marzo y llega a noviembre está ocurriendo ahora mismo, y es precisamente el trabajo que el equipo de obra más necesita tener delante. Filtra por tareas que empiecen <em>y</em> terminen dentro de las tres semanas y perderás todas las actividades de larga duración de la obra, dejando un lookahead muy pulcro que describe un proyecto en el que no trabaja nadie.</p>
        <p>La comprobación son dos comparaciones, no cuatro:</p>
        <p><code>tarea.inicio ≤ ventana.fin &nbsp;Y&nbsp; tarea.fin ≥ ventana.inicio</code></p>
        <p>Esa es toda la regla, y es exactamente la que aplica gantts.app.</p>`],

      ['Por qué se ancla al lunes',
        `<p>El lookahead es un ritual semanal ligado a una reunión semanal. Una ventana que fuese de jueves a jueves partiría la semana laboral por la mitad y no le serviría a nadie que la leyera.</p>
        <p>Por eso la ventana siempre retrocede al inicio de la semana. Abre la herramienta un miércoles y obtendrás la ventana que empezó el lunes, no un bloque de tres semanas arrancando a mitad de semana. Las flechas la avanzan semana a semana cuando necesitas mirar más lejos, y «Esta semana» la devuelve a su sitio.</p>`],

      ['Generarlo en vez de reescribirlo',
        `<p>Plantillas de lookahead a tres semanas hay de sobra: publica una Smartsheet, y media docena más, y existe incluso un formato estándar usado en obras de instalaciones de la Marina estadounidense. Todas son una rejilla en blanco que rellenas a mano.</p>
        <p>Ese es el problema de verdad. El calendario ya contiene la respuesta; el trabajo semanal consiste en copiarla, y copiarla es de donde vienen los errores y la desactualización. Se te escapa una tarea, o actualizas el maestro y te olvidas del lookahead, y los dos documentos empiezan a contradecirse en silencio.</p>
        <p>En gantts.app el lookahead es una <em>vista</em> de los mismos datos:</p>
        <ol>
          <li>Pon <strong>Vista</strong> en <strong>Lookahead</strong>.</li>
          <li>Elige la ventana: 1, 2, 3, 4, 6 u 8 semanas.</li>
          <li>Avánzala con las flechas, o pulsa «Esta semana» para volver a hoy.</li>
          <li>Exporta a PDF o PNG para la pared, o a Excel para la reunión.</li>
        </ol>
        <p>El gráfico hace zoom sobre la ventana, así que las tres semanas se leen en vez de quedar comprimidas en una franja de un eje de dieciocho meses. Una banda superior indica qué ventana estás mirando y cuántas tareas quedan ocultas, porque un gráfico filtrado que no avisa de que está filtrado se lee como un plan al que le faltan tareas.</p>
        <p>Cambia una fecha en el maestro y el lookahead ya está bien. No hay nada que volver a copiar.</p>`],

      ['Convertirlo en un documento útil, no solo en un filtro',
        `<ul>
          <li><strong>Pon un nombre en cada línea.</strong> Un lookahead sin responsable por tarea es una lista de deseos. Activa la columna de responsable.</li>
          <li><strong>Desglosa más el trabajo cercano que el lejano.</strong> Una tarea que pone «Acabados de la primera planta — 6 semanas» está bien en el programa y es inútil en un lookahead. Divídela según se acerca.</li>
          <li><strong>Revisa restricciones, no solo fechas.</strong> El valor de mirar tres semanas por delante es que todavía hay tiempo de resolver lo que falta.</li>
          <li><strong>Que sea corto.</strong> Si el lookahead llega a sesenta líneas, o la ventana es demasiado larga o el plan es demasiado detallado para esta reunión.</li>
        </ul>`],
    ],
    faq: [
      ['¿Qué es un programa lookahead de 3 semanas?', 'Un extracto rodante del programa maestro que muestra solo el trabajo que toca las tres semanas siguientes. Se actualiza cada semana y sirve para coordinar el día a día y detectar restricciones mientras aún hay margen para resolverlas.'],
      ['¿Por qué tres semanas?', 'Es plazo suficiente para resolver restricciones —materiales, permisos, cuadrillas— y lo bastante corto para que las fechas sean creíbles. Las ventanas de dos, cuatro y seis semanas también son habituales; la duración adecuada depende de tus plazos de suministro.'],
      ['¿Debe aparecer en el lookahead una tarea larga que empezó hace meses?', 'Sí. Todo lo que solape la ventana pertenece a ella. Filtrar por tareas que caben enteras dentro de las tres semanas descarta justamente el trabajo de larga duración que está ocurriendo ahora.'],
      ['¿Es lo mismo un lookahead que el programa maestro?', 'No. El programa maestro responde a si el proyecto termina a tiempo. El lookahead responde a qué pasa esta semana y quién lo hace. Salen de los mismos datos, pero sirven a reuniones distintas.'],
      ['¿Puedo hacer un lookahead en Excel?', 'Sí, y es lo que hace casi todo el mundo: reescribiendo filas del programa cada semana. Generarlo como una vista del calendario elimina la reescritura y la desincronización que la acompaña.'],
      ['¿Cómo imprimo el lookahead?', 'Cambia a la vista Lookahead y exporta a PDF o PNG. La exportación refleja lo que hay en pantalla, así que obtienes la ventana y no el programa entero.'],
    ],
    related: [
      ['critical-path-method', 'Cómo se calcula la ruta crítica'],
      ['s-curve-project-management', 'Curva S y valor ganado'],
      ['gantt-chart-dependencies', 'Los cuatro tipos de dependencia'],
    ],
  },

  'mermaid-gantt-chart': {
    h1: 'Diagramas de Gantt en Mermaid: sintaxis, trampas y vuelta a un editor real',
    metaTitle: 'Diagramas de Gantt en Mermaid: sintaxis',
    metaDesc: 'La sintaxis gantt de Mermaid explicada —secciones, etiquetas, dependencias, excludes—, las trampas más comunes y cómo editarla visualmente.',
    date: '2026-07-19',
    lead: 'Los bloques gantt de Mermaid se renderizan de forma nativa en GitHub, GitLab, Notion y Obsidian, lo que los convierte en la manera más fácil de poner un calendario donde ya vive el trabajo. También son penosos de <em>editar</em>: mueves una fecha y tienes que rehacer a mano toda la cadena de <code>after</code> que va detrás. Aquí van la sintaxis, las trampas y el paso que falta: editarlo visualmente y recuperar el texto.',
    figIntro: 'El mismo calendario como texto y como barras:',
    sections: [
      ['La sintaxis de una pasada',
        `<p>Un bloque gantt se abre con <code>gantt</code> y unas pocas líneas de cabecera, y después vienen encabezados <code>section</code> con líneas de tarea debajo.</p>
        <p>Una línea de tarea es un nombre, dos puntos y después campos separados por comas:</p>
        <p><code>Nombre de tarea :etiqueta, id, inicio, duración</code></p>
        <ul>
          <li><strong>Etiquetas</strong> — cualquiera de <code>done</code>, <code>active</code>, <code>crit</code>, <code>milestone</code>. Opcionales.</li>
          <li><strong>id</strong> — una palabra suelta, necesaria solo si algo más se refiere a esta tarea.</li>
          <li><strong>inicio</strong> — una fecha, o <code>after algúnId</code>, o se omite para continuar tras la tarea anterior.</li>
          <li><strong>duración</strong> — <code>5d</code>, <code>2w</code>, o una segunda fecha.</li>
        </ul>
        <p>Cabeceras que conviene conocer: <code>dateFormat</code> (cómo escribes las fechas), <code>excludes weekends</code> (saltar sábados y domingos), <code>title</code> y <code>axisFormat</code> (cómo se etiqueta el eje).</p>`],

      ['Cuatro cosas que te van a morder',
        `<p><strong>1. Las duraciones incluyen el día de inicio.</strong> <code>5d</code> desde el lunes día 5 llega hasta el viernes día 9, no hasta el 10. Un error de uno aquí desplaza todas las tareas del archivo y aun así se renderiza perfectamente.</p>
        <p><strong>2. <code>after</code> junto con <code>excludes weekends</code> es donde viven los errores de verdad.</strong> Si una predecesora termina un viernes, su sucesora empieza el <em>lunes</em>, no el sábado. Cualquier herramienta que resuelva <code>after</code> sumando un día natural colocará tareas en fin de semana dentro de un archivo que lo prohíbe explícitamente. (La nuestra lo hizo, brevemente. La prueba que lo detectó ahora comprueba que ninguna fecha derivada cae en un día excluido.)</p>
        <p><strong>3. No hay forma de escapar caracteres.</strong> Los dos puntos abren la lista de campos y la coma separa campos, así que una tarea llamada <code>Fase 2: diseño, revisión</code> se convierte en otra cosa completamente distinta. Mantén los dos puntos y las comas fuera de los nombres de tarea.</p>
        <p><strong>4. Una duración que no se puede interpretar pasa a cero en silencio.</strong> Escribe <code>3dd</code> y obtendrás una barra de longitud cero en lugar de un error.</p>`],

      ['Lo que Mermaid no puede expresar',
        `<p>Es un formato de diagrama, no un motor de planificación, y las carencias importan si vas a hacer ida y vuelta:</p>
        <ul>
          <li><strong>No hay porcentaje de avance.</strong> Solo <code>done</code> y <code>active</code>. Una tarea al 40 % y otra al 90 % son las dos simplemente «active».</li>
          <li><strong>Solo fin-inicio.</strong> <code>after</code> es FS sin desfase. Inicio-inicio, fin-fin y los desfases no tienen dónde ir.</li>
          <li><strong>Secciones planas.</strong> Sin grupos anidados.</li>
          <li><strong>Sin recursos, costes ni líneas base.</strong></li>
        </ul>
        <p>Así que la ida y vuelta pierde información de una forma conocida y aburrida. gantts.app convierte el 100 % en <code>done</code> y cualquier valor intermedio en <code>active</code> al salir, e importa <code>active</code> como 50 %: una suposición, que te comunica en vez de dejar que la descubras en un informe de seguimiento. Los enlaces que no puede escribir como <code>after</code> caen a fechas absolutas, que siguen siendo correctas aunque dejen de ser mantenibles.</p>
        <p>Una asimetría deliberada: <code>crit</code> se escribe al exportar pero se ignora al importar. La criticidad se <em>calcula</em> a partir del grafo de dependencias, y fiarse de un valor afirmado en un diagrama posiblemente obsoleto permitiría pintar de rojo una cadena que no es crítica.</p>`],

      ['Editar visualmente y pegar el texto de vuelta',
        `<p>Herramientas que renderizan Mermaid hay muchas. Lo que faltaba es la dirección contraria: arrastrar barras y recuperar la sintaxis.</p>
        <ol>
          <li>Pega o abre tu diagrama en gantts.app — un archivo <code>.mmd</code>, o un <code>.md</code> con un bloque delimitado; los dos funcionan. Detecta el bloque gantt por su contenido, no por la extensión.</li>
          <li>Arrástralo, enlázalo y refecha como cualquier otro gráfico. <code>excludes weekends</code> activa el calendario laboral, así que las fechas que produce coinciden con las del archivo del que salió.</li>
          <li><strong>Exportar ▸ Mermaid gantt</strong>, copia y pega de vuelta en tu README.</li>
        </ol>
        <p>Hay además un efecto secundario agradable para quien use un LLM para redactar calendarios: pide sintaxis gantt de Mermaid, pega la respuesta y tendrás un gráfico editable de verdad con ruta crítica, sin ninguna clave de API ni servidor de por medio.</p>`],
    ],
    faq: [
      ['¿Cómo se escribe un diagrama de Gantt en Mermaid?', 'Abre el bloque con gantt, añade dateFormat YYYY-MM-DD y después encabezados section con líneas de tarea debajo con la forma «Nombre :etiqueta, id, inicio, duración» — por ejemplo «Investigación :done, inv, 2026-01-05, 5d».'],
      ['¿5d en Mermaid incluye el día de inicio?', 'Sí. Una tarea de 5d que empieza el lunes día 5 termina el viernes día 9. Este cómputo inclusivo es la causa más habitual de errores de un día.'],
      ['¿Cómo funcionan las dependencias en Mermaid gantt?', 'Se usa «after algúnId» como campo de inicio. Siempre es fin-inicio y sin desfase: inicio-inicio, fin-fin y los desfases no se pueden expresar.'],
      ['¿Puede Mermaid mostrar el porcentaje completado?', 'No. Solo tiene las etiquetas done y active. Importar active como un porcentaje concreto es una suposición; gantts.app usa el 50 % y te avisa de que lo ha hecho.'],
      ['¿Dónde se renderizan los diagramas de Gantt de Mermaid?', 'GitHub, GitLab, Notion y Obsidian los renderizan de forma nativa en Markdown, y mermaid.live los muestra en el navegador.'],
      ['¿Puedo convertir un diagrama de Mermaid en un gráfico editable?', 'Sí. Abre el archivo .mmd o el Markdown en gantts.app, edítalo visualmente y usa Exportar ▸ Mermaid gantt para copiar de vuelta la sintaxis actualizada.'],
    ],
    related: [
      ['gantt-chart-dependencies', 'Los cuatro tipos de dependencia'],
      ['critical-path-method', 'Cómo se calcula la ruta crítica'],
      ['what-is-a-gantt-chart', '¿Qué es un diagrama de Gantt?'],
    ],
  },
};

/* Chrome for the guide pages themselves. Kept beside the copy so a new
   locale is one file rather than two. */
const UI = {
  templatesH: 'Plantillas que usan esto',
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
