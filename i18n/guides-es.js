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
        <p>A eso muchas herramientas añaden una línea vertical de «hoy», sombreado de fines de semana, etiquetas de responsable y la <strong>ruta crítica</strong> resaltada: la cadena de tareas sin holgura que determina la fecha de fin. Ninguno de esos extras es imprescindible, pero la línea de hoy y la ruta crítica son los dos que más cambian lo que el gráfico comunica de un vistazo.</p>
        <p>Un detalle sobre los hitos que confunde a mucha gente la primera vez: <strong>un hito tiene duración cero</strong>. No es una tarea corta, es un instante. Por eso se dibuja como un rombo y no como una barra, y por eso se puede mover pero no estirar: no hay nada que estirar. «Inspección de Sanidad superada» es un hito; «preparar la inspección de Sanidad» es una tarea de tres días que termina justo antes.</p>
        <!--FIG:bars|Las filas a la izquierda, el calendario arriba y una barra por tarea colocada donde le toca en el tiempo.-->`],
      ['¿Para qué sirve un diagrama de Gantt?',
        `<p><strong>Para planificar.</strong> Obliga a decidir el orden del trabajo y a comprobar si las fechas se sostienen. La mayoría de los problemas de un plan aparecen al dibujarlo, no al ejecutarlo.</p>
        <p><strong>Para comunicar.</strong> Es el formato que entiende un cliente, un comité o un financiador sin explicación previa. Por eso se pide en propuestas de subvención, en informes de obra y en presentaciones de dirección.</p>
        <p><strong>Para hacer seguimiento.</strong> Con una línea base guardada, el gráfico deja de ser un plan y pasa a ser una medida: cuánto nos hemos desviado, dónde y si afecta a la entrega. Sin línea base solo puedes responder «qué toca ahora», nunca «vamos tarde», porque el plan actual siempre parece coherente consigo mismo.</p>
        <p><strong>Para gestionar dependencias.</strong> Deja evidente lo que en una lista se pierde: que las pruebas no pueden empezar hasta que el desarrollo termine, que la campaña no sale sin la aprobación legal, que la mudanza no se hace sin los circuitos de datos. Lo encontrarás en obra, software, marketing, eventos, fabricación, consultoría, investigación y lanzamientos de producto — esencialmente, en cualquier trabajo con principio, final y pasos intermedios que dependen unos de otros.</p>
        <p><strong>Para coordinar.</strong> Cuando varias personas dependen unas de otras, el gráfico responde «¿puedo empezar ya?» sin necesidad de preguntarlo. Y responde también la pregunta contraria, que es la que se olvida: si esta tarea se retrasa dos días, ¿a quién dejo parado?</p>
        <p><strong>Para gestionar recursos.</strong> Con responsables asignados se ve de un vistazo si la misma persona está en cuatro tareas la misma semana, un solapamiento que en una lista de tareas es sencillamente invisible.</p>`],
      ['Un caso completo: la reforma de La Tahona de Chamberí',
        `<p>Las definiciones llegan hasta donde llegan. Aquí va un proyecto pequeño modelado de principio a fin, al que se refiere todo lo que viene después en esta página. Nuria Sanz cierra su panadería-cafetería de la calle Trafalgar, en Madrid, para reformarla: obra adjudicada a Reformas Bermúdez S.L. por 68.400 €, con un horno de solera encargado a un fabricante de Valencia. Semana laboral de lunes a viernes, arranque el lunes 2 de marzo de 2026.</p>
        <div class="worked">
          <table>
            <thead><tr><th>#</th><th>Tarea</th><th>Duración</th><th>Después de</th><th>Inicio</th><th>Fin</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>Licencia de actividad y declaración responsable</td><td>8 d</td><td>—</td><td>lun 2 mar</td><td>mié 11 mar</td></tr>
              <tr><td>2</td><td>Proyecto y distribución del local</td><td>6 d</td><td>—</td><td>lun 2 mar</td><td>lun 9 mar</td></tr>
              <tr><td>3</td><td>Pedido del horno de solera (plazo del fabricante)</td><td>20 d</td><td>1, 2</td><td>jue 12 mar</td><td>vie 10 abr</td></tr>
              <tr><td>4</td><td>Desmontaje y retirada de escombros</td><td>4 d</td><td>1</td><td>jue 12 mar</td><td>mar 17 mar</td></tr>
              <tr><td>5</td><td>Fontanería y electricidad</td><td>9 d</td><td>4</td><td>mié 18 mar</td><td>lun 30 mar</td></tr>
              <tr><td>6</td><td>Solado y mobiliario</td><td>7 d</td><td>5</td><td>mar 31 mar</td><td>vie 10 abr</td></tr>
              <tr><td>7</td><td>Montaje del horno y la cámara</td><td>3 d</td><td>3, 6</td><td>lun 13 abr</td><td>mié 15 abr</td></tr>
              <tr><td>8</td><td><strong>Inspección de Sanidad superada</strong></td><td>0 d</td><td>7</td><td colspan="2">jue 16 abr</td></tr>
              <tr><td>9</td><td>Formación del equipo</td><td>5 d</td><td>8</td><td>vie 17 abr</td><td>jue 23 abr</td></tr>
              <tr><td>10</td><td><strong>Reapertura</strong></td><td>0 d</td><td>9</td><td colspan="2">vie 24 abr</td></tr>
            </tbody>
          </table>
          <p>Ocho tareas, dos hitos y una reapertura que cae el viernes 24 de abril. Nadie eligió esa fecha: sale de las duraciones, de los enlaces entre ellas y del calendario laboral. Eso es exactamente lo que se gana dibujando el plan en lugar de escribir fechas en un documento.</p>
          <p><strong>Y el calendario aquí no es decoración.</strong> En 2026 el Jueves y el Viernes Santo caen el 2 y el 3 de abril, y en Madrid son festivos. Esos dos días no los trabaja ni la cuadrilla ni el taller de Valencia, así que empujan por igual las dos cadenas: sin Semana Santa la reapertura habría caído el miércoles 22 de abril. Dos días de calendario, dos días de local cerrado y sin caja.</p>
        </div>
        <p>Fíjate en lo que la tabla dice y una lista de tareas no diría. Las filas 1 y 2 arrancan las dos el primer día porque ninguna espera a la otra. La fila 3 son veinte días de espera a un proveedor que transcurren en silencio mientras los albañiles trabajan. Y las filas 3 y 6 terminan el mismo viernes: el momento en que dos cadenas independientes tienen que encontrarse para que el horno pueda entrar.</p>`],

      ['Leer el gráfico: holgura y ruta crítica',
        `<p>Con las tareas enlazadas, el gráfico responde a una pregunta que ninguna lista responde: <em>¿qué retrasos importan de verdad?</em> Sigue la cadena más larga —licencia, desmontaje, fontanería, solado, montaje, inspección, formación, reapertura— y tendrás la <a href="/es/blog/critical-path-method.html">ruta crítica</a>. Todas sus tareas tienen holgura cero, así que un solo día perdido en cualquiera de ellas mueve la reapertura al lunes 27 de abril: un día de retraso convertido en tres de local cerrado, porque el fin de semana viene detrás.</p>
        <!--FIG:cpm|La ruta crítica es la cadena más larga del plan; sus tareas tienen holgura cero.-->
        <p>El pedido del horno es el caso interesante. Son veinte días de plazo de fabricación puro, sin una hora de trabajo propio, y terminan el mismo día que el solado. Es decir: hay <em>dos</em> cadenas críticas, una de obra y otra de una orden de compra. Mejor saberlo antes de firmar el pedido que después.</p>
        <div class="worked">
          <table>
            <thead><tr><th>Tarea</th><th>Termina</th><th>La sucesora empieza</th><th>Holgura total</th><th>Qué significa</th></tr></thead>
            <tbody>
              <tr><td>Proyecto y distribución</td><td>lun 9 mar</td><td>jue 12 mar</td><td>2 d</td><td>Puede irse dos días sin mover nada</td></tr>
              <tr><td>Pedido del horno</td><td>vie 10 abr</td><td>lun 13 abr</td><td>0 d</td><td>Crítica — entrega tarde es reapertura tarde</td></tr>
              <tr><td>Solado y mobiliario</td><td>vie 10 abr</td><td>lun 13 abr</td><td>0 d</td><td>Crítica</td></tr>
              <tr><td>Formación del equipo</td><td>jue 23 abr</td><td>vie 24 abr</td><td>0 d</td><td>Crítica</td></tr>
            </tbody>
          </table>
          <p>Solo una fila tiene margen. Si el proyectista necesita tres días más, los dos primeros son gratis y el tercero cuesta la reapertura.</p>
        </div>
        <p>Dos precisiones sobre cómo lo calcula gantts.app, porque no coinciden con lo que enseña el manual. La cifra que informa es la <strong>holgura total</strong> —cuánto puede retrasarse una tarea antes de mover la fecha de fin del proyecto— y no hay columna de holgura libre, que es la que mide el margen solo frente a la sucesora inmediata. Y la programación es <em>según se coloca</em>: una dependencia solo puede empujar una tarea hacia adelante, nunca tirar de ella hacia atrás. Si dejas «Formación del equipo» aparcada en junio y la enlazas con la inspección, no volverá sola a abril; el gráfico te enseña el hueco que has dejado en vez de cerrarlo por su cuenta. Es una diferencia deliberada frente al CPM de libro, y evita que el plan se te reorganice solo mientras piensas.</p>`],

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
        <p>Puestos uno al lado del otro, contra la reforma de La Tahona:</p>
        <table>
          <thead><tr><th></th><th>Diagrama de Gantt</th><th>Línea de tiempo</th><th>Tablero Kanban</th></tr></thead>
          <tbody>
            <tr><td>Pregunta que responde</td><td>¿Cuándo ocurre cada trabajo y en qué orden?</td><td>¿Cuáles son las fechas señaladas?</td><td>¿En qué se está trabajando ahora?</td></tr>
            <tr><td>Muestra duración</td><td>Sí — la longitud de la barra es la duración</td><td>No — los eventos son puntos</td><td>No — las tarjetas no tienen longitud</td></tr>
            <tr><td>Muestra dependencias</td><td>Sí, con flechas entre barras</td><td>No</td><td>No</td></tr>
            <tr><td>Calcula la fecha de fin</td><td>Sí, a partir de duraciones y enlaces</td><td>No — las fechas se escriben a mano</td><td>No</td></tr>
            <tr><td>La reforma en él</td><td>Las 10 filas, con el 24 de abril calculado</td><td>Tres fechas: cierre, inspección y reapertura</td><td>«Fontanería» en la columna En curso</td></tr>
            <tr><td>Mejor cuando</td><td>Hay un plazo y una secuencia definida</td><td>Solo necesitas enseñar media docena de fechas</td><td>El trabajo fluye sin fechas fijas</td></tr>
          </tbody>
        </table>
        <p>No compiten: son altitudes distintas. Nuria lleva la reforma en Gantt para el banco y para el casero, y un tablero para las tres semanas que la cuadrilla está dentro del local. Muchos equipos usan tablero para el día a día y Gantt para las fechas comprometidas y las dependencias externas, y esa combinación suele funcionar mejor que forzar una sola herramienta.</p>`],
      ['Cómo hacer uno gratis',
        `<p>Necesitas tres cosas: la lista de tareas, una duración estimada para cada una y saber qué depende de qué. Con eso, el gráfico sale prácticamente solo. Así se monta la reforma de La Tahona en <a href="/es/app.html">gantts.app</a>, con los botones tal y como están rotulados:</p>
        <ol>
          <li>Pulsa <strong>✨ Pegar a Gantt</strong> y pega la lista. Reconoce la duración entre paréntesis, la palabra <code>después de</code> para un enlace y una <code>!</code> final para un hito: <code>Fontanería y electricidad (9d) después de Desmontaje</code>, y luego <code>Inspección de Sanidad superada !</code>.</li>
          <li>O constrúyelo a mano: <strong>＋ Tarea</strong> para una fila de trabajo, <strong>◆ Hito</strong> para un rombo y <strong>▣ Grupo</strong> para una fase.</li>
          <li>Antes de nada, abre <strong>Calendario laboral</strong> y marca los festivos que te afectan — el 2 y el 3 de abril, y el 1 de mayo si el plan llega hasta ahí. Si no lo haces, el gráfico programará obra en Viernes Santo y toda la cadena saldrá dos días optimista.</li>
          <li>Haz doble clic en una fila para fijar <strong>Después de (predecesoras)</strong>, el <strong>Responsable</strong> y el <strong>Progreso</strong>. Ahí mismo está <strong>Tipo</strong>, por si escribiste como tarea algo que era un hito.</li>
          <li>Pulsa <strong>Reprogramar</strong> para llevar cada tarea a la primera fecha que sus dependencias permiten. Esto es lo que convierte una intuición en el 24 de abril.</li>
          <li>Marca <strong>Ruta crítica</strong> para ver resaltadas las dos cadenas sin holgura — la leyenda <em>rayado = ruta crítica</em> te dice qué barras mirar — y <strong>◎ Hoy</strong> para volver la vista a la fecha actual.</li>
          <li>Abre <strong>Línea base</strong> antes del primer día de obra, para que a partir de ahí el retraso se mida contra lo que prometiste y no contra el plan de esta mañana.</li>
          <li>Usa <strong>⬇ Exportar</strong> para <strong>📄 Documento PDF</strong>, <strong>📊 Excel (.xlsx)</strong>, <strong>📑 CSV (hoja de cálculo)</strong> o <strong>📽 PowerPoint (.pptx)</strong>, o <strong>📤 Compartir…</strong> para un <strong>🔗 Enlace para compartir</strong>.</li>
          <li>Para el casero, pon <strong>Vista</strong> en <strong>Solo hitos</strong> antes de exportar: dos filas, inspección y reapertura — el proyecto entero, en lo que a él le concierne.</li>
        </ol>
        <!--FIG:steps|De una lista de tareas plana a un plan programado y enlazado en unos pocos pasos.-->
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
      ['El plan que vamos a construir',
        `<p>Cada paso de esta guía se aplica a un mismo plan, para que se vea el efecto y no solo la teoría. Quesos Ordóñez S.L., de Zamora, rehace su tienda online con Mandarina Estudio, una agencia de Valladolid, por 24.800 €. Semana de lunes a viernes, arranque el lunes 1 de junio de 2026. Esto es donde acaba tras el paso 7 — míralo ahora, porque cada paso explica una de sus columnas.</p>
        <div class="worked">
          <table>
            <thead><tr><th>#</th><th>Tarea</th><th>Duración</th><th>Después de</th><th>Inicio</th><th>Fin</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>Auditoría de contenidos</td><td>5 d</td><td>—</td><td>lun 1 jun</td><td>vie 5 jun</td></tr>
              <tr><td>2</td><td>Arquitectura y wireframes</td><td>6 d</td><td>1</td><td>lun 8 jun</td><td>lun 15 jun</td></tr>
              <tr><td>3</td><td>Redacción de textos</td><td>10 d</td><td>1</td><td>lun 8 jun</td><td>vie 19 jun</td></tr>
              <tr><td>4</td><td>Diseño visual</td><td>8 d</td><td>2</td><td>mar 16 jun</td><td>jue 25 jun</td></tr>
              <tr><td>5</td><td><strong>Diseño aprobado</strong></td><td>0 d</td><td>4</td><td colspan="2">jue 25 jun</td></tr>
              <tr><td>6</td><td>Maquetación y front-end</td><td>12 d</td><td>5</td><td>vie 26 jun</td><td>lun 13 jul</td></tr>
              <tr><td>7</td><td>Carga de contenidos</td><td>6 d</td><td>3, 6</td><td>mar 14 jul</td><td>mar 21 jul</td></tr>
              <tr><td>8</td><td>QA y correcciones</td><td>7 d</td><td>7</td><td>mié 22 jul</td><td>jue 30 jul</td></tr>
              <tr><td>9</td><td>Validación del cliente (UAT)</td><td>4 d</td><td>8</td><td>vie 31 jul</td><td>jue 3 sep</td></tr>
              <tr><td>10</td><td><strong>Salida a producción</strong></td><td>0 d</td><td>9</td><td colspan="2">vie 4 sep</td></tr>
            </tbody>
          </table>
          <p>Diez filas y una fecha de fin calculada: viernes 4 de septiembre. Nadie la escribió. Es la suma de las duraciones a lo largo de la cadena más larga, y se moverá sola en cuanto cambie cualquiera de ellas.</p>
          <p><strong>Mira la fila 9 con atención.</strong> Son cuatro días de validación que empiezan el viernes 31 de julio y terminan el jueves 3 de septiembre. No es un error: en el calendario del proyecto <strong>agosto está cerrado</strong>, porque el equipo de Quesos Ordóñez que tiene que validar está de vacaciones y la agencia también. Cuatro días de trabajo tardan cinco semanas en consumirse. Si ese cierre no está cargado en el calendario, el gráfico prometerá la salida a producción para el 6 de agosto, y ese plan se rompe el primer día.</p>
        </div>
        <p>De paso, la lección comercial: si a mediados de junio ves que el plan aterriza en la primera semana de agosto, todavía estás a tiempo de comprimir. Si lo ves el 30 de julio, ya has perdido un mes de facturación de la tienda nueva y solo puedes comunicarlo.</p>`],

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
        <p>La señal de que falta una dependencia es inconfundible: si te encuentras escribiendo fechas a mano para que las barras «queden bien», o si cada vez que mueves una tarea tienes que arreglar tres más, es que la relación no está puesta. Con ella, esas tres se mueven solas.</p>
        <!--FIG:deps|Una dependencia dice que una tarea condiciona a otra; la flecha va de la predecesora a la sucesora.-->
        <p>Los cuatro tipos, juzgados contra el plan de Quesos Ordóñez:</p>
        <table>
          <thead><tr><th>Tipo</th><th>Regla</th><th>Dónde encaja aquí</th><th>Cuánto se usa</th></tr></thead>
          <tbody>
            <tr><td><strong>Fin-inicio (FS)</strong></td><td>B no empieza hasta que A termina</td><td>Maquetación después del diseño aprobado — los nueve enlaces de este plan son de este tipo</td><td>Casi siempre</td></tr>
            <tr><td><strong>Inicio-inicio (SS)</strong></td><td>B no empieza hasta que A empieza</td><td>Si la redacción arrancara el mismo día que los wireframes en lugar de después de la auditoría</td><td>De vez en cuando, para trabajo solapado</td></tr>
            <tr><td><strong>Fin-fin (FF)</strong></td><td>B no termina hasta que A termina</td><td>QA no puede cerrarse antes de que esté cargado el último contenido</td><td>Poco</td></tr>
            <tr><td><strong>Inicio-fin (SF)</strong></td><td>B no termina hasta que A empieza</td><td>En ningún sitio. Existe sobre todo para relevos de turno</td><td>Casi nunca</td></tr>
          </tbody>
        </table>
        <p>Dos enlaces de este plan merecen un dedo encima. La fila 7, «Carga de contenidos», tiene <em>dos</em> predecesoras —los textos y la maquetación—, así que empieza cuando termina la más tardía de las dos, que es la maquetación el 13 de julio. Y la fila 3, la redacción, termina el 19 de junio pero no hace falta hasta el 14 de julio: dieciséis días laborables de margen. Ese hueco es información aprovechable, no un descuido: es donde metes al redactor cuando otra cosa se incendia.</p>
        <p>Un comportamiento que conviene conocer antes de arrastrar barras: gantts.app programa <em>según se coloca</em>. Una dependencia puede empujar una tarea más allá de donde tú la pusiste, nunca tirar de ella hacia atrás. Si dejas «QA y correcciones» aparcada en octubre y la enlazas con la carga de contenidos, no volverá sola a julio — el enlace fija lo más pronto que <em>puede</em> empezar, y el gráfico te enseña el hueco que dejaste. <strong>Reprogramar</strong> cierra esos huecos cuando tú se lo pides, no antes. Es distinto del CPM de manual y está hecho a propósito: evita que el plan se te reordene solo mientras estás pensando.</p>`],
      ['4. Marca los hitos que importan',
        `<p>Un hito es una fecha sin duración: aprobación concedida, contrato firmado, entrega realizada. Sirven para dos cosas: son lo que dirección mira primero, y son barreras naturales que impiden que el plan avance fuera de secuencia.</p>
        <p>La regla de dosificación es sencilla: uno al final de cada fase y uno en la fecha de entrega, más los puntos de no retorno propios del proyecto —congelación de alcance, compromiso de fabricación, apertura de inscripciones—. Entre cinco y diez para un proyecto de varios meses. Un hito por semana no señala nada, porque cuando todo es un hito nada destaca.</p>
        <p>Enlaza dependencias a los hitos, no solo a las tareas. Un hito de «licencia concedida» con tres tareas colgando deja clarísimo, para cualquiera que mire el gráfico, qué se para si el ayuntamiento tarda.</p>`],
      ['5. Mira la ruta crítica',
        `<p>Con las dependencias puestas, la ruta crítica aparece sola: la cadena de tareas con holgura cero que determina tu fecha de fin. Si no te gusta esa fecha, solo tienes tres opciones reales — acortar una tarea crítica, solaparla con la siguiente mediante un desfase negativo, o mover la fecha. Recortar tareas que no están en la ruta crítica no adelanta absolutamente nada, por mucho esfuerzo que se le ponga.</p>
        <p>En el plan de Quesos Ordóñez la cadena va auditoría → wireframes → diseño → aprobación → maquetación → carga → QA → validación → producción: <strong>nueve de las diez filas</strong> son críticas. Eso dice algo incómodo pero útil: este plan no tiene margen prácticamente en ninguna parte, y toda la holgura que posee el proyecto la lleva una sola tarea, la redacción de textos.</p>
        <!--FIG:float|La holgura es la distancia que una tarea puede desplazarse antes de empezar a mover otras cosas.-->
        <p>La cifra que informa gantts.app es la <strong>holgura total</strong> —cuánto puede retrasarse una tarea antes de mover la fecha de fin del proyecto— y no hay columna de holgura libre, que es la que mediría el margen solo frente a la sucesora inmediata. Los dieciséis días de la redacción son, por tanto, dieciséis días de protección real sobre la salida a producción.</p>
        <p>Mira también la columna de holgura, no solo la cadena resaltada. Una tarea con un día de margen es casi crítica y se convertirá en crítica al primer contratiempo; una con quince días de margen puede esperar sin que nadie se preocupe. Esa cifra es la que de verdad usas para decidir a qué llamada respondes primero. El detalle del cálculo está en <a href="/es/blog/critical-path-method.html">la guía del método de la ruta crítica</a>.</p>`],
      ['6. Asigna responsables y comprueba la carga',
        `<p>Pon un nombre en cada tarea y mira dónde se apilan. Un plan que parece impecable en el gráfico puede tener a la misma persona en cuatro tareas simultáneas en marzo. Ese solapamiento es invisible en las barras y evidente en una vista de carga.</p>
        <p>Una fila sin responsable es una fila que nadie va a actualizar, y basta con tres o cuatro para que el gráfico deje de reflejar la realidad. Si una tarea tiene dos nombres, en la práctica no tiene ninguno: pon un responsable único y añade a los demás como participantes.</p>
        <p>Cuando detectes un apilamiento, las salidas son las de siempre: mover la tarea al margen que le dé su holgura, reasignarla o reducir el alcance. Lo que no funciona es dejarlo y confiar en que esa semana la persona rinda por dos.</p>`],
      ['7. Fija línea base y publica',
        `<p>Cuando el plan esté acordado, guarda una línea base: la foto congelada contra la que medirás la desviación. Sin ella no puedes responder a «¿vamos tarde?», solo a «¿qué toca ahora?», porque el plan actual siempre parece coherente consigo mismo.</p>
        <!--FIG:baseline|La línea base congela el plan acordado para que el desvío posterior sea medible y no una cuestión de memoria.-->
        <div class="worked">
          <p>Quesos Ordóñez al cerrar la sexta semana, con la línea base fijada el 1 de junio:</p>
          <table>
            <thead><tr><th>Tarea</th><th>Fin de línea base</th><th>Real / previsto</th><th>Desviación</th><th>Progreso</th></tr></thead>
            <tbody>
              <tr><td>Auditoría de contenidos</td><td>vie 5 jun</td><td>vie 5 jun</td><td>0 d</td><td>100 %</td></tr>
              <tr><td>Arquitectura y wireframes</td><td>lun 15 jun</td><td>mié 17 jun</td><td>+2 d</td><td>100 %</td></tr>
              <tr><td>Diseño visual</td><td>jue 25 jun</td><td>lun 29 jun</td><td>+2 d</td><td>100 %</td></tr>
              <tr><td>Redacción de textos</td><td>vie 19 jun</td><td>jue 2 jul</td><td>+9 d</td><td>100 %</td></tr>
              <tr><td>Maquetación y front-end</td><td>lun 13 jul</td><td>mié 15 jul</td><td>+2 d</td><td>40 %</td></tr>
              <tr><td><strong>Salida a producción</strong></td><td>vie 4 sep</td><td>mar 8 sep</td><td>+2 d</td><td>—</td></tr>
            </tbody>
          </table>
          <p>La columna de desviación cuenta la historia sola. La redacción va nueve días tarde y no cuesta nada, porque tenía dieciséis de holgura que gastar. Los dos días perdidos en los wireframes cuestan exactamente dos días en la salida a producción, porque esa tarea estaba en la ruta crítica. Mismo retraso, precios completamente distintos — que es la razón entera de que exista el paso 5.</p>
          <p>Y una advertencia con el calendario: como los dos días caen justo antes del cierre de agosto, la salida a producción no se mueve al 5 de septiembre sino al martes 8, porque el fin de semana está por medio. Cerca de una parada larga, un retraso pequeño se cobra caro.</p>
        </div>
        <p>A partir de ahí, exporta a PDF o PowerPoint para compartirlo, y mantén el gráfico vivo actualizando el porcentaje completado en lugar de redibujar. Una revisión semanal de quince minutos —avances, fechas movidas, dependencias nuevas— es lo que separa un plan útil de un diagrama que la gente sigue mirando cuando ya no es cierto, que es peor que no tener ninguno.</p>`],
      ['Errores que conviene evitar',
        `<p><strong>Demasiado detalle.</strong> Si una tarea dura menos de un día, pertenece a la lista de alguien, no al plan del proyecto. Doscientas filas no se mantienen: se abandonan.</p>
        <p><strong>Fechas escritas a mano en lugar de dependencias.</strong> Funciona hasta el primer cambio, y a partir de ahí cada movimiento obliga a reajustar tres tareas más.</p>
        <p><strong>Cero holgura.</strong> Si todas las tareas son críticas, cualquier imprevisto mueve la entrega. Un plan sin margen no es ambicioso: es frágil.</p>
        <p><strong>Tareas sin responsable.</strong> Una fila sin nombre al lado es una fila que nadie va a actualizar.</p>
        <p>Hay una lista más larga en <a href="/es/blog/gantt-chart-mistakes.html">nueve errores habituales</a>, cada uno con su corrección.</p>`],
      ['Hazlo gratis online',
        `<p>No necesitas instalar nada ni crear una cuenta. Estas son las mismas diez filas montadas en el <a href="/es/app.html">editor de gantts.app</a>, con los botones tal y como están rotulados:</p>
        <ol>
          <li>Abre <strong>✨ Pegar a Gantt</strong> y pega el esquema. Al pegar detecta la duración entre paréntesis, <code>después de</code> para un enlace y una <code>!</code> final para un hito: <code>Maquetación y front-end (12d) después de Diseño aprobado</code>, y luego <code>Salida a producción !</code>.</li>
          <li>A mano en su lugar: <strong>＋ Tarea</strong> para una fila de trabajo, <strong>◆ Hito</strong> para un rombo y <strong>▣ Grupo</strong> para una fase, con el botón de sangrado para anidar las tareas debajo.</li>
          <li>Entra en <strong>Calendario laboral</strong> y cierra agosto antes de programar nada. Es el paso que la mayoría se salta en España y el que decide si la salida a producción cae el 6 de agosto o el 4 de septiembre.</li>
          <li>Doble clic en una fila para <strong>Después de (predecesoras)</strong>, <strong>Responsable</strong> y <strong>Progreso</strong>. Los hitos también viven aquí: cambia el <strong>Tipo</strong> de una fila y su fin se colapsa sobre su inicio. Un hito no se puede ensanchar arrastrando — un hito con duración deja de ser un hito.</li>
          <li>Pulsa <strong>Reprogramar</strong> para llevar cada tarea a la primera fecha que sus enlaces permiten. Este es el paso que produce el 4 de septiembre.</li>
          <li>Marca <strong>Ruta crítica</strong> para rayar las nueve barras críticas y comprobar que la redacción de textos <em>no</em> está entre ellas.</li>
          <li>Guarda la <strong>Línea base</strong> antes del primer día, para que la tabla de desviaciones de arriba sea algo que la app rellena y no algo que montas a mano en una hoja de cálculo.</li>
          <li>Pon el <strong>Zoom</strong> en semanas para un plan de tres meses, y usa <strong>◎ Hoy</strong> para volver a la fecha actual una vez arrancado el trabajo. <strong>⤢ Ajustar</strong> encaja todo el plan en la pantalla para una captura.</li>
          <li><strong>⬇ Exportar</strong> ofrece <strong>📄 Documento PDF</strong>, <strong>📊 Excel (.xlsx)</strong>, <strong>📑 CSV (hoja de cálculo)</strong> y <strong>📽 PowerPoint (.pptx)</strong>; <strong>📤 Compartir…</strong> da un <strong>🔗 Enlace para compartir</strong>. Para el cliente, pon antes <strong>Vista</strong> en <strong>Solo hitos</strong>: diseño aprobado y salida a producción, y nada más.</li>
        </ol>
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
        <p>Dos matices habituales. Con <strong>desfases</strong> (lag) el procedimiento no cambia: el desfase se suma en la pasada adelante y se resta en la de atrás. Y si el proyecto tiene una fecha de entrega impuesta anterior a la duración calculada, la pasada atrás arranca en esa fecha y aparecen holguras negativas: no es un error de cálculo, es el plan diciéndote cuántos días te faltan.</p>
        <!--FIG:cpm|La pasada adelante fija las fechas más tempranas, la pasada atrás las más tardías, y el hueco entre ambas es la holgura. Hueco cero significa crítica.-->`],
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
      ['Un caso completo, con toda la aritmética',
        `<p>Seis tareas caben en la cabeza. Nueve ya no, y es donde el método deja de ser un ejercicio para convertirse en una herramienta. Logística Peñalver S.A. instala estanterías en una nave de 4.000 m² del polígono de Cabanillas del Campo, en Guadalajara. Nueve actividades, duraciones en días laborables, y nada más complicado que sumar y restar.</p>
        <div class="worked">
          <table>
            <thead><tr><th>Actividad</th><th>Duración (días)</th><th>Predecesora(s)</th></tr></thead>
            <tbody>
              <tr><td>A — Levantamiento y toma de medidas</td><td>4</td><td>—</td></tr>
              <tr><td>B — Diseño de la implantación</td><td>6</td><td>A</td></tr>
              <tr><td>C — Licencia urbanística municipal</td><td>10</td><td>A</td></tr>
              <tr><td>D — Pedido de estanterías (96.500 €, plazo del fabricante)</td><td>15</td><td>B</td></tr>
              <tr><td>E — Vaciado de la nave</td><td>5</td><td>A</td></tr>
              <tr><td>F — Reparación de la solera</td><td>8</td><td>C, E</td></tr>
              <tr><td>G — Electricidad, primera fase</td><td>6</td><td>F</td></tr>
              <tr><td>H — Montaje de las estanterías</td><td>9</td><td>D, G</td></tr>
              <tr><td>I — Inspección y acta de puesta en servicio</td><td>3</td><td>H</td></tr>
            </tbody>
          </table>

          <p><strong>Los tres caminos</strong> de la red, sumados:</p>
          <ul>
            <li>A → C → F → G → H → I = 4 + 10 + 8 + 6 + 9 + 3 = <strong>40 días</strong></li>
            <li>A → B → D → H → I = 4 + 6 + 15 + 9 + 3 = <strong>37 días</strong></li>
            <li>A → E → F → G → H → I = 4 + 5 + 8 + 6 + 9 + 3 = <strong>35 días</strong></li>
          </ul>
          <p>Cuarenta días es el más largo, así que esa es la respuesta. Las dos pasadas lo demuestran y, de paso, ponen precio al margen de todo lo demás.</p>

          <p>Adelante: se arranca en el día 0, <code>EF = ES + Dur</code>, y ES es el EF <em>mayor</em> de las predecesoras. Atrás: el LF de I es el 40 del proyecto, <code>LS = LF − Dur</code>, y LF es el LS <em>menor</em> de las sucesoras.</p>
          <table>
            <thead><tr><th>Actividad</th><th>Dur</th><th>ES = máx(EF de predecesoras)</th><th>EF</th><th>LF = mín(LS de sucesoras)</th><th>LS</th><th>Holgura</th><th>¿Crítica?</th></tr></thead>
            <tbody>
              <tr><td>A — Levantamiento</td><td>4</td><td><strong>0</strong> (sin predecesora)</td><td>0+4 = <strong>4</strong></td><td>mín(7, 4, 9) = <strong>4</strong></td><td>4−4 = <strong>0</strong></td><td><strong>0</strong></td><td><strong>Sí</strong></td></tr>
              <tr><td>B — Implantación</td><td>6</td><td><strong>4</strong> (A)</td><td>4+6 = <strong>10</strong></td><td><strong>13</strong> (D)</td><td>13−6 = <strong>7</strong></td><td>3</td><td>No</td></tr>
              <tr><td>C — Licencia</td><td>10</td><td><strong>4</strong> (A)</td><td>4+10 = <strong>14</strong></td><td><strong>14</strong> (F)</td><td>14−10 = <strong>4</strong></td><td><strong>0</strong></td><td><strong>Sí</strong></td></tr>
              <tr><td>D — Pedido de estanterías</td><td>15</td><td><strong>10</strong> (B)</td><td>10+15 = <strong>25</strong></td><td><strong>28</strong> (H)</td><td>28−15 = <strong>13</strong></td><td>3</td><td>No</td></tr>
              <tr><td>E — Vaciado</td><td>5</td><td><strong>4</strong> (A)</td><td>4+5 = <strong>9</strong></td><td><strong>14</strong> (F)</td><td>14−5 = <strong>9</strong></td><td>5</td><td>No</td></tr>
              <tr><td>F — Solera</td><td>8</td><td>máx(14, 9) = <strong>14</strong></td><td>14+8 = <strong>22</strong></td><td><strong>22</strong> (G)</td><td>22−8 = <strong>14</strong></td><td><strong>0</strong></td><td><strong>Sí</strong></td></tr>
              <tr><td>G — Electricidad</td><td>6</td><td><strong>22</strong> (F)</td><td>22+6 = <strong>28</strong></td><td><strong>28</strong> (H)</td><td>28−6 = <strong>22</strong></td><td><strong>0</strong></td><td><strong>Sí</strong></td></tr>
              <tr><td>H — Montaje</td><td>9</td><td>máx(25, 28) = <strong>28</strong></td><td>28+9 = <strong>37</strong></td><td><strong>37</strong> (I)</td><td>37−9 = <strong>28</strong></td><td><strong>0</strong></td><td><strong>Sí</strong></td></tr>
              <tr><td>I — Acta de puesta en servicio</td><td>3</td><td><strong>37</strong> (H)</td><td>37+3 = <strong>40</strong></td><td><strong>40</strong> (fin del proyecto)</td><td>40−3 = <strong>37</strong></td><td><strong>0</strong></td><td><strong>Sí</strong></td></tr>
            </tbody>
          </table>
          <p>Dos filas sostienen el método. <strong>F</strong> empieza en el 14 y no en el 9: espera a la licencia, no al vaciado de la nave. Y <strong>H</strong> empieza en el 28 y no en el 25, porque la cadena eléctrica aterriza después de la entrega de las estanterías. Que el LS de A salga 0 es la comprobación: cualquier otro valor y 40 no sería el mínimo.</p>
          <p>Las actividades de holgura cero —<strong>A, C, F, G, H, I</strong>— son la ruta crítica, exactamente la cadena de 40 días que habíamos sumado primero. Las holguras cuadran también con la longitud de los caminos: B y D están en el camino de 37, 40 − 37 = <strong>3</strong> cada una; E está en el de 35, 40 − 35 = <strong>5</strong>. La holgura de un camino siempre es la duración del proyecto menos la longitud de ese camino — la forma más rápida de comprobar tu propia aritmética.</p>

          <p><strong>Y ahora en el calendario.</strong> Cuarenta días laborables desde el lunes 7 de septiembre de 2026 no terminan el viernes 30 de octubre, sino el <strong>lunes 2 de noviembre</strong>: el 12 de octubre, Fiesta Nacional, cae en lunes ese año y la nave no trabaja. Un solo festivo, un fin de semana arrastrado detrás, y el acta de puesta en servicio se va de mes. Los cuarenta días son aritmética; la fecha depende del calendario que cargues.</p>

          <p><strong>Retrasemos algo crítico.</strong> La licencia (C) tarda 14 días en vez de 10, cuatro días tarde sobre una actividad crítica. Rehaz la pasada adelante desde C: EF 4 + 14 = 18, así que F pasa a ES 18 / EF 26, G a ES 26 / EF 32, H a ES máx(25, 32) = 32 / EF 41, e I termina en <strong>44</strong>.</p>
          <p>El proyecto se movió <strong>día por día</strong>: nada absorbió el retraso porque no había con qué absorberlo. Todos los demás se hicieron más ricos — repite la pasada atrás desde LF(I) = 44 y la holgura de B es 7, la de D 7 y la de E 9, cada una cuatro días más. El margen ajeno lo fabrica el retraso de la ruta crítica, y es un margen que nadie quería.</p>
          <p><strong>Y ahora gastemos holgura de más.</strong> Devuelve C a 10 días y deja que el pedido de estanterías (D, holgura 3) tarde 20 en lugar de 15 — cinco días tarde sobre una actividad <em>no</em> crítica. El EF de D pasa a 10 + 20 = 30, así que H arranca en máx(30, 28) = 30 / EF 39, e I termina en <strong>42</strong>.</p>
          <p>Dos días tarde, no cinco: los tres primeros salieron de la holgura de D y solo el exceso llegó al final. La holgura es un presupuesto y se gasta una vez. Y fíjate en lo importante: <strong>la ruta crítica se ha movido</strong>. A → B → D → H → I suma ahora 4 + 6 + 20 + 9 + 3 = 42, mientras que la vieja cadena de la licencia tiene 2 días de holgura. Las actividades que estabas protegiendo han dejado de ser las que importan, y nada te lo habría avisado si no se recalculara.</p>
        </div>
        <!--FIG:float|La holgura es un presupuesto. Gasta menos de la que tienes y la fecha de fin no se mueve; gasta de más y solo el exceso llega al final.-->`],

      ['Holgura total, holgura libre y holgura negativa',
        `<p>La «holgura» de la tabla anterior es la <strong>holgura total</strong>: cuánto puede desplazarse una actividad antes de mover el fin del <em>proyecto</em>. Por sí sola engaña, porque la holgura total suele estar <em>compartida</em>. La <strong>holgura libre</strong> hace la pregunta estricta: ¿cuánto puede desplazarse esto antes de molestar a <em>alguna sucesora</em>? Se calcula como <code>ES menor de las sucesoras − EF</code>:</p>
        <ul>
          <li><strong>B:</strong> holgura total 3, holgura libre = ES(D) 10 − EF(B) 10 = <strong>0</strong>. Retrasa B un día y D se mueve al instante. Esos tres días pertenecen a la cadena B→D, y quien los gaste primero los ha gastado.</li>
          <li><strong>D:</strong> holgura total 3, holgura libre = ES(H) 28 − EF(D) 25 = <strong>3</strong>. El margen de D sí es de D.</li>
          <li><strong>E:</strong> holgura total 5, holgura libre = ES(F) 14 − EF(E) 9 = <strong>5</strong>. Enteramente privado, esperando delante de la tramitación de la licencia.</li>
        </ul>
        <p>La holgura total es lo que la fecha de entrega puede absorber; la libre es lo que puedes gastar sin llamar a nadie. Dos responsables de una misma cadena que planifiquen contra la holgura total se van a llevar los mismos días, y uno de los dos se llevará una sorpresa.</p>
        <p><strong>Aviso sobre nuestra herramienta:</strong> gantts.app informa <em>solo</em> de la holgura total, una cifra por tarea. No hay columna de holgura libre. Si tu plan tiene cadenas largas de tareas no críticas —el caso de B→D—, la holgura libre hay que calcularla a mano con la fórmula de arriba, o tratar la holgura total de una cadena como un presupuesto único del que se reparte.</p>
        <p>La <strong>holgura negativa</strong> significa que algo va mal: el inicio tardío cae <em>antes</em> del temprano, casi siempre porque hay una fecha impuesta anterior a lo que la lógica permite. −4 no es margen: se lee «esto tendría que haber empezado hace cuatro días». En gantts.app una tarea es crítica cuando su holgura es <strong>cero o menor</strong>, precisamente para que la negativa aparezca en lugar de desaparecer.</p>`],

      ['Cómo lo calcula gantts.app (y en qué se aparta del manual)',
        `<p>Merece precisión, porque nuestra pasada adelante <em>no</em> es la que se ha descrito arriba, y la diferencia aterriza en la columna de holgura.</p>
        <p>El CPM de manual ignora dónde dibujaste la barra: coloca cada actividad tan pronto como sus predecesoras permiten, así que E empieza el día 4 estuviera donde estuviera. gantts.app ejecuta un <strong>CPM «según se coloca»</strong>: cada tarea arranca en <em>su propia fecha de inicio, la que tú le pusiste</em>, y las predecesoras solo pueden empujarla <strong>más tarde, nunca más temprano</strong>. En código es un único <code>max</code>: el inicio temprano parte del inicio de la tarea, y una dependencia lo eleva únicamente si la restricción exige más.</p>
        <p>Pon la barra de E en el día 8 en vez del 4 y la diferencia es un número. El CPM de manual sigue informando ES 4 y 5 días de holgura. Nosotros informamos ES 8 y, con la pasada atrás intacta (LS 9), la holgura es de <strong>1 día</strong>. Las dos cifras son correctas y responden a preguntas distintas: el manual pregunta cuánto margen permite la lógica; nosotros preguntamos cuánto le queda a este plan, tal y como está dibujado.</p>
        <p>El motivo es que esto es un gráfico antes que un algoritmo. Una pasada adelante que recolocara tareas en silencio imprimiría la holgura de un calendario que no es el que hay en pantalla. Arrastrar una barra es una instrucción, y la tratamos como tal.</p>
        <p>El resto es convencional: el fin tardío es el menor inicio tardío entre las sucesoras (o el fin del proyecto), la holgura es <code>LS − ES</code>, y los desfases y los enlaces que no son fin-inicio pasan por la misma pasada. Tres cosas más que conviene saber:</p>
        <ul>
          <li><strong>Solo holgura total.</strong> Una cifra por tarea, y es la total. No hay columna de holgura libre.</li>
          <li><strong>Las filas de resumen no programan.</strong> El CPM corre sobre tareas hoja e hitos; la barra de un grupo es la envolvente de sus hijas.</li>
          <li><strong>Días laborables, si hay calendario activo.</strong> El cálculo se hace en ordinales de día laborable, así que un desfase de 5 son cinco días <em>laborables</em> y las sucesoras aterrizan en lunes, no en domingo. Es lo que hace que el ejemplo de arriba salte el 12 de octubre solo.</li>
          <li><strong>Los hitos tienen duración cero</strong> y no se pueden estirar. Un hito crítico marca una fecha, no consume plazo.</li>
        </ul>
        <p>Para el comportamiento de manual —todo traído a la fecha más temprana que su lógica permite— usa <strong>Reprogramar</strong>. Rehace la pasada adelante con una regla cambiada: una tarea con predecesoras pasa a estar gobernada solo por sus restricciones, ignorando dónde está, mientras que las tareas sin predecesoras se quedan quietas haciendo de ancla. Púlsalo y los dos métodos coinciden.</p>
        <!--FIG:lag|Un desfase desplaza la restricción sin romper el enlace. La ruta crítica pasa por el desfase, así que tres días de espera son tres días de la fecha de entrega.-->`],

      ['CPM, PERT y cadena crítica',
        `<p><strong>CPM</strong> usa una duración única por tarea y es determinista. Es lo que calculan casi todas las herramientas cuando resaltan la ruta crítica, y funciona bien cuando las estimaciones son razonablemente conocidas.</p>
        <p><strong>PERT</strong> usa tres estimaciones —optimista (O), más probable (M) y pesimista (P)— y calcula una duración esperada ponderada con la fórmula (O + 4M + P) / 6. Si una tarea se estima en 4, 6 y 14 días, PERT da (4 + 24 + 14) / 6 = 7 días, no los 6 que habrías escrito de memoria: la cola pesimista pesa. Sirve cuando la incertidumbre es alta y quieres hablar de probabilidad en vez de una fecha única. En la práctica lo habitual es alimentar el CPM con duraciones obtenidas por PERT.</p>
        <p><strong>Cadena crítica</strong> parte del CPM pero añade la restricción de recursos y retira los márgenes individuales de cada tarea para agruparlos en un colchón compartido al final del proyecto. La razón es conductual: el margen repartido tarea a tarea siempre se consume —el trabajo se expande hasta llenar el tiempo disponible— mientras que un colchón único es visible y se defiende. Es la respuesta de la teoría de restricciones al problema, y encaja cuando lo que manda no son las dependencias sino que varias tareas compiten por la misma persona o la misma máquina.</p>`],
      ['Verla automáticamente',
        `<p>Hacer las dos pasadas a mano es la mejor forma de entender el método, y también la peor forma de mantener un plan. Con seis tareas es un ejercicio de diez minutos; con cuarenta es inviable, sobre todo porque la ruta crítica no es estable: cambia cada vez que ajustas una duración, añades una dependencia o alguien reporta un retraso. Recalcularla a mano cada semana no lo hace nadie, y un plan cuya ruta crítica está desactualizada es peor que no tener ninguna, porque protege las tareas equivocadas.</p>
        <p>Así se monta la nave de Cabanillas en el <a href="/es/app.html">editor gratuito</a>, con los botones tal y como están rotulados:</p>
        <ol>
          <li>Pulsa <strong>✨ Pegar a Gantt</strong> y pega las nueve actividades. Reconoce la duración entre paréntesis y <code>después de</code> como enlace: <code>Reparación de la solera (8d) después de Licencia urbanística municipal</code>.</li>
          <li>Abre <strong>Calendario laboral</strong> y marca el 12 de octubre antes de nada. Sin ese festivo cargado, el acta saldrá el 30 de octubre y el plan mentirá desde el primer día.</li>
          <li>Doble clic en cada fila y rellena <strong>Después de (predecesoras)</strong>. Es el paso que no se puede saltar: sin dependencias no hay red que recorrer y la ruta crítica no tiene sobre qué calcularse.</li>
          <li>Para el acta de puesta en servicio usa <strong>◆ Hito</strong>, o cambia el <strong>Tipo</strong> de la fila en el panel. Un hito tiene duración cero y no se puede ensanchar arrastrando.</li>
          <li>Marca <strong>Ruta crítica</strong>. Las seis barras de la cadena de 40 días aparecen rayadas; la leyenda <em>rayado = ruta crítica</em> lo confirma.</li>
          <li>Añade la holgura desde <strong>Columnas</strong> para leer los 3 días de B y D y los 5 de E junto a las fechas. Recuerda que es holgura <em>total</em>: los 3 días de B y D son 3 entre las dos, no 3 cada una.</li>
          <li>Pulsa <strong>Reprogramar</strong> si quieres el resultado del manual, con todo traído a su fecha legal más temprana. Si no lo pulsas, la holgura que ves es la del plan tal y como lo has dibujado.</li>
          <li>Sube el pedido de estanterías de 15 a 20 días en <strong>Duración</strong> y observa cómo el rayado salta de la cadena de la licencia a la del pedido. Ese salto es la razón de no calcular esto a mano una vez al mes.</li>
          <li>Abre <strong>El plan en tabla</strong> para leer las nueve filas con sus fechas y dependencias de una vez, o exporta con <strong>⬇ Exportar</strong> → <strong>📊 Excel (.xlsx)</strong> si el cliente quiere las cifras en hoja de cálculo.</li>
        </ol>
        <p>La columna de holgura muestra cuántos días de margen tiene cada tarea, que es la cifra que de verdad usas para decidir prioridades — y la que te avisa cuando una tarea que ayer tenía tres días de margen hoy tiene cero.</p>
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
    metaDesc: 'Los cuatro tipos de dependencia (fin-inicio, inicio-inicio, fin-fin, inicio-fin), cuándo usar cada uno, cómo funcionan el desfase y el adelanto, y en qué se diferencian la holgura total y la libre.',
    date: '2026-07-19',
    lead: 'Las <strong>dependencias</strong> son lo que separa un diagrama de Gantt de un dibujo de barras. Dicen qué tiene que ocurrir antes que qué, y hacen que al mover una tarea se mueva todo lo que va detrás. Hay cuatro tipos: uno hace el noventa por ciento del trabajo y los otros tres existen para los casos que ese primero resuelve mal. Aquí va lo que significa cada uno, aplicado a un proyecto real, más las dos cosas que casi ninguna explicación cuenta: la diferencia entre desfase y adelanto, y la que hay entre holgura total y holgura libre.',
    figIntro: 'Los cuatro tipos, tal y como se comportan sobre el gráfico:',
    sections: [
      ['El proyecto que usaremos en todo el artículo',
        `<p>Los diagramas de dependencias son fáciles de entender y difíciles de aplicar, así que aquí tienes un proyecto concreto —el cambio del sistema de facturación de una empresa municipal de aguas— al que se le aplican, uno por uno, los cuatro tipos.</p>
        <div class="worked">
          <p><strong>Aguas de Valduero, S.A. (Valladolid). Sustitución del sistema de facturación de agua y saneamiento. Seis tareas, días laborables, marzo–abril de 2026. Presupuesto adjudicado: 148.500 €, con penalidad de 750 € por día de demora sobre la fecha de puesta en marcha del pliego.</strong></p>
          <table>
            <thead><tr><th>#</th><th>Tarea</th><th>Inicio</th><th>Fin</th><th>Días</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>Construir los scripts de migración</td><td>lun 2 mar</td><td>vie 13 mar</td><td>10 días</td></tr>
              <tr><td>2</td><td>Ensayo en blanco de la migración</td><td>lun 16 mar</td><td>vie 20 mar</td><td>5 días</td></tr>
              <tr><td>3</td><td>Corregir las incidencias del ensayo</td><td>lun 23 mar</td><td>mar 7 abr</td><td>10 días</td></tr>
              <tr><td>4</td><td>Redactar el manual de puesta en marcha</td><td>lun 16 mar</td><td>mar 7 abr</td><td>15 días</td></tr>
              <tr><td>5</td><td>Formar al equipo de facturación</td><td>lun 23 mar</td><td>vie 27 mar</td><td>5 días</td></tr>
              <tr><td>6</td><td>Mantener el sistema antiguo en servicio</td><td>lun 2 mar</td><td>mié 8 abr</td><td>26 días</td></tr>
            </tbody>
          </table>
          <p>Marta Iglesias lleva la dirección del proyecto; Javier Ferrán, la parte técnica; Nuria Bastida, la oficina de facturación. Seis barras y ningún enlace: de momento el gráfico no dice absolutamente nada sobre qué depende de qué. Fíjate además en que la tarea 3 empieza el 23 de marzo y termina el 7 de abril pese a durar diez días: en 2026 el Jueves y el Viernes Santo caen el 2 y el 3 de abril, y esos dos festivos ya han empujado el fin de la cadena una semana antes de que nadie enlace nada.</p>
        </div>`],

      ['Fin-inicio (FS): la que usarás casi siempre',
        `<p>La tarea B no puede empezar hasta que A termine. Cimentar y luego levantar muros. Escribir el código y luego probarlo. Es el comportamiento por defecto de cualquier herramienta de planificación y cubre la gran mayoría de las relaciones reales.</p>
        <p>En nuestro proyecto, la tarea 2 es fin-inicio respecto de la 1: no se puede ensayar una migración con scripts que nadie ha escrito todavía. Y la tarea 3 es fin-inicio respecto de la 2, porque la lista de incidencias no existe hasta que el ensayo la produce. Esa cadena —1 → 2 → 3, diez días más cinco más diez— es la columna vertebral del plan y es la que fija el 7 de abril como fecha de fin.</p>
        <p>Si dudas de qué tipo poner, casi con seguridad es fin-inicio. Cuando alguien se lanza a un tipo exótico suele ser señal de que las tareas están mal descompuestas: dos trabajos distintos metidos en la misma barra, o una barra que en realidad son tres.</p>
        <p>Hay un matiz que conviene decir en voz alta. Fin-inicio describe una imposibilidad técnica, no una preferencia de agenda. «Prefiero que Javier acabe los scripts antes de tocar el ensayo porque así descansa» no es una dependencia: es una decisión de secuencia. Si la modelas como enlace, el plan queda amarrado por algo que nadie tenía obligación de cumplir, y dentro de tres semanas nadie sabrá cuáles de los cuarenta enlaces se pueden romper.</p>`],

      ['Inicio-inicio (SS): trabajos que corren juntos',
        `<p>B no puede empezar hasta que A empiece. A partir de ahí las dos avanzan en paralelo.</p>
        <p>El manual de puesta en marcha (tarea 4) es inicio-inicio respecto del ensayo. Quien lo redacta necesita que el ensayo esté en marcha para tener algo que documentar, pero esperar a que <em>termine</em> desperdiciaría una semana entera. Así que ambas arrancan el lunes 16 de marzo. La señal de que toca inicio-inicio es que hay un disparador compartido, no un plazo compartido.</p>
        <p>Es un tipo que se lleva muy bien con el desfase. «La validación de los datos migrados empieza tres días después de que empiece la migración» es exactamente inicio-inicio con desfase de tres días: nadie quiere validar el primer día, cuando todavía no hay nada cargado, pero tampoco quiere esperar a que la carga acabe.</p>`],

      ['Fin-fin (FF): trabajos que tienen que cerrar juntos',
        `<p>B no puede terminar hasta que A termine.</p>
        <p>El manual tiene además un enlace fin-fin con la tarea 3: no se puede dar por cerrado mientras sigan entrando correcciones, porque cada arreglo reescribe un paso del procedimiento. Así que la tarea 4 queda abierta hasta el martes 7 de abril: la arranca el ensayo y la cierran las correcciones, que es la forma típica de una actividad de apoyo.</p>
        <p>Pruebas, documentación y validación de calidad son fin-fin por el mismo motivo: da igual cuándo empiecen, lo que no pueden es cruzar la meta antes que el trabajo al que acompañan. Si el equipo de Nuria firma el manual el 27 de marzo y luego llegan ocho correcciones, lo que hay firmado no es un manual, es un borrador con sello.</p>`],

      ['Inicio-fin (SF): la rara',
        `<p>B no puede terminar hasta que A empiece. Se lee al revés y la mayoría de los planificadores hacen carrera entera sin necesitarla ni una vez.</p>
        <p>La tarea 6 es justamente el caso para el que se inventó. El sistema antiguo tiene que seguir emitiendo recibos hasta que el nuevo esté en producción: su <em>fin</em> está atado al <em>inicio</em> de la puesta en marcha. Si lo enlazas como inicio-fin, la barra del sistema antiguo se estira sola hasta la fecha en la que acabe cayendo el arranque, sin que nadie tenga que acordarse de arrastrarla. Y con una penalidad de 750 € diarios encima, olvidarse de arrastrarla es caro en los dos sentidos: por un lado el corte de servicio, por otro el mantenimiento del proveedor antiguo facturando semanas que nadie presupuestó.</p>
        <p>Esa es la prueba del algodón: un relevo, donde lo que sale termina porque lo que entra empieza. En cualquier otro sitio, reordenar las dos tareas suele decir lo mismo con un fin-inicio normal y corriente, que además todo el mundo entiende a la primera.</p>`],

      ['Los cuatro tipos, uno al lado del otro',
        `<table>
          <thead><tr><th>Tipo</th><th>Disparador real</th><th>Con qué frecuencia aplica</th><th>El error que invita a cometer</th></tr></thead>
          <tbody>
            <tr><td><strong>FS</strong><br>Fin → Inicio</td><td>Lo que sale de A es lo que entra en B: una lista de incidencias, un plano firmado, una losa hormigonada</td><td>~90 % de los enlaces</td><td>Se usa por preferencia y no por restricción, hasta que todas las fechas quedan clavadas</td></tr>
            <tr><td><strong>SS</strong><br>Inicio → Inicio</td><td>Dos actividades comparten disparador y luego avanzan juntas</td><td>Frecuente; casi todo plan tiene alguna</td><td>Solo reacciona al <em>inicio</em> de la predecesora: si A se alarga por el final, B no se mueve</td></tr>
            <tr><td><strong>FF</strong><br>Fin → Fin</td><td>Una actividad envolvente que no puede cerrar antes que el trabajo al que acompaña: pruebas, documentación, validación</td><td>Ocasional, casi siempre en tareas de apoyo</td><td>El inicio de B queda sin restringir y parece que podría empezar absurdamente pronto</td></tr>
            <tr><td><strong>SF</strong><br>Inicio → Fin</td><td>Un relevo: el turno o el sistema saliente termina porque el entrante empieza</td><td>Rara; muchos planes correctos no tienen ninguna</td><td>Un fin-inicio del revés y mal puesto, que quien revisa el plan interpreta al contrario</td></tr>
          </tbody>
        </table>`],

      ['Cuando el tipo equivocado hace mentir al plan',
        `<p>Vamos con la tarea 5, la formación. Marta la enlaza <strong>inicio-inicio con la tarea 3</strong>: la formación arranca cuando arranca la corrección de incidencias. A simple vista funciona — las dos barras empiezan el 23 de marzo, todo el equipo de facturación formado el viernes 27, mucho antes del arranque.</p>
        <div class="worked">
          <p><strong>Entonces el ensayo saca más incidencias de las previstas</strong> y la tarea 3 pasa de diez días a quince, con lo que su fin se va del martes 7 al martes 14 de abril.</p>
          <ul>
            <li><strong>Tarea 4 (manual, FF)</strong> — se mueve. Su fin acompaña hasta el 14 de abril. Correcto.</li>
            <li><strong>Tarea 5 (formación, SS)</strong> — <em>no se mueve ni un día.</em> Inicio-inicio mira el inicio de la predecesora, y el inicio no ha cambiado. El plan sigue diciendo que el equipo queda formado el viernes 27 de marzo.</li>
          </ul>
          <p>El gráfico no está roto: está contestando exactamente a la pregunta que se le hizo. Pero Nuria va a formar a seis personas sobre una aplicación a la que le quedan quince días laborables de correcciones, y el plan lo pinta en verde. El enlace correcto era <strong>fin-inicio con la tarea 3</strong>. Una letra mal puesta convirtió un problema de dos semanas en ningún problema en absoluto — y con 750 € por día de demora, en una factura de casi 4.000 € que el informe de seguimiento no anticipaba.</p>
        </div>
        <p>Así que compruébalo a propósito: alarga una semana la tarea que más papeletas tiene de irse y mira qué se ha movido. Todo lo que esperabas que se desplazara y no se ha desplazado es un tipo mal elegido, y lo has cazado mientras todavía sale gratis arreglarlo.</p>`],

      ['Los festivos también forman parte de la dependencia',
        `<p>Un enlace no cuenta días de calendario: cuenta días laborables. Y en España el calendario laboral es cualquier cosa menos uniforme —festivos nacionales, autonómicos y locales, Semana Santa moviéndose por el calendario, y agosto—, así que la misma cadena de dependencias produce fechas distintas según dónde se ejecute.</p>
        <div class="worked">
          <p><strong>La misma cadena, dos calendarios.</strong> La cadena 1 → 2 → 3 son 25 días laborables desde el lunes 2 de marzo de 2026.</p>
          <ul>
            <li><strong>Sin festivos:</strong> terminaría el viernes 3 de abril.</li>
            <li><strong>Con Jueves y Viernes Santo (2 y 3 de abril de 2026):</strong> termina el martes 7 de abril. Dos días de festivo se convierten en cuatro de retraso, porque caen pegados a un fin de semana.</li>
            <li><strong>Si Aguas de Valduero hubiera arrancado el proyecto en junio</strong> y la cadena cruzara agosto, con las vacaciones del convenio y el turno reducido de la oficina, los mismos 25 días laborables se irían casi un mes más allá.</li>
          </ul>
          <p>Por eso Marta metió los dos festivos en <strong>Calendario</strong> antes de enlazar nada. Un plan que ignora el calendario laboral no da un error: da una fecha, y la da con toda la seguridad del mundo.</p>
        </div>
        <p>La consecuencia práctica es que las dependencias y el calendario se revisan juntos. Cambiar un enlace de inicio-inicio a fin-inicio en una cadena que cruza Semana Santa o el puente del Pilar mueve la fecha final mucho más de lo que sugiere la duración de la tarea, y ese es precisamente el momento en que conviene mirar la ruta crítica otra vez.</p>`],

      ['Desfase y adelanto: un desfase es espera, no holgura',
        `<p>Un <strong>desfase</strong> añade tiempo de espera al enlace. «FS + 3 días» significa que B empieza tres días después de que A termine. En nuestro caso, la puesta en marcha es fin-inicio con un día de desfase respecto de las correcciones: un día limpio para la última sincronización de datos y el corte de facturación.</p>
        <!--FIG:lag|Un desfase es espera comprometida dentro del enlace, no margen alrededor de él.-->
        <p>Lo que casi todo el mundo confunde: <strong>un desfase no es holgura.</strong> La holgura es margen que puedes gastar cuando algo se tuerce. Un desfase es tiempo ya comprometido: el hormigón curando, la pintura secando, el plazo de alegaciones de un pliego, los diez días que la imprenta tarda en servir. Nadie «usa» un desfase cuando va tarde; el hormigón cura los mismos días vayas como vayas. Rellenar enlaces con desfase porque una tarea «igual se alarga» crea una reserva que nadie encuentra y que, llegado el recorte, nadie se atreve a tocar porque no sabe si es real.</p>
        <p>Un <strong>adelanto</strong> es un desfase negativo: «FS − 2 días» solapa el final de A con el principio de B. Los adelantos comprimen el calendario —esto es exactamente lo que se llama ejecución rápida— pero compran tiempo pagando con riesgo. Un solape que no has razonado es una cola de retrabajo: B se está construyendo encima de un A que todavía no está terminado.</p>
        <p>Los dos se escriben igual: <code>3FS+2d</code> —fila 3, fin-inicio, dos días de desfase—, que es la notación que acepta la columna <strong>Después de</strong> de gantts.app.</p>`],

      ['Holgura total y holgura libre no son el mismo número',
        `<p>Con las dependencias puestas, cada tarea tiene holgura: cuánto puede retrasarse antes de hacer daño. Hay dos clases, y confundirlas sale caro.</p>
        <!--FIG:float|La holgura total es de la cadena. La holgura libre es de la tarea.-->
        <p>La <strong>holgura total</strong> es cuánto puede retrasarse una tarea antes de mover la fecha de fin del proyecto. La <strong>holgura libre</strong> es cuánto puede retrasarse antes de mover a su propia sucesora. La libre nunca es mayor que la total, y en la diferencia entre las dos es donde vive el problema.</p>
        <p>La formación tiene holgura total —la fecha de fin la marca la cadena de correcciones—, pero la holgura total es <em>compartida</em>: si tres tareas seguidas muestran ocho días cada una, hay ocho días entre las tres, no veinticuatro. Un responsable que lee solo ese número y se retrasa una semana se ha gastado un margen que pertenecía a toda la cadena, y quien venga detrás se encontrará con cero.</p>
        <!--FIG:cpm|Holgura total cero significa crítica: cada día de retraso mueve la fecha de fin.-->
        <p>Holgura total cero es, literalmente, la definición de ruta crítica. Activa <strong>Ruta crítica</strong> en gantts.app y esa cadena se dibuja rayada — la leyenda lo dice tal cual: <em>rayado = ruta crítica</em>. Ahí es donde los tipos de dependencia tienen que estar bien puestos, porque son los que fijan la fecha de entrega y, en un contrato con penalidades por demora, la factura.</p>`],

      ['Crear y editar una dependencia en gantts.app',
        `<ol>
          <li><strong>Arrastra de barra a barra.</strong> Coge el punto pequeño del extremo de una barra, arrástralo sobre la barra que quieras enlazar y suelta. El enlace se crea como <strong>fin-inicio</strong> y con desfase cero.</li>
          <li><strong>Cámbiale el tipo desde la flecha.</strong> Haz clic sobre la flecha que une las dos barras para editar la relación: fin-inicio, inicio-inicio, fin-fin o inicio-fin, con su desfase en días. Un número negativo es un adelanto. Todo se deshace con Ctrl+Z.</li>
          <li><strong>O escríbelo en la tabla.</strong> La columna <strong>Después de</strong> de la rejilla acepta predecesoras por número de fila: <code>3</code>, <code>2SS</code>, <code>3FF</code>, <code>3FS+2d</code>, separadas por comas. Es la forma más rápida de enlazar un plan que acabas de traer con <strong>✨ Pegar a Gantt</strong>.</li>
          <li><strong>O usa la ficha de la tarea.</strong> Haz clic en una tarea y abre <strong>Después de (predecesoras)</strong>. Ahí añades enlaces uno a uno y cada uno lleva su propio tipo y su propio desfase, junto al resto de campos de la tarea: <strong>Inicio</strong>, <strong>Fin</strong>, <strong>Duración</strong>, <strong>Responsable</strong>.</li>
          <li><strong>Comprueba el efecto.</strong> Activa <strong>Ruta crítica</strong> y abre <strong>Tabla</strong> (<em>El plan en tabla</em>) para ver las fechas resultantes de un vistazo. Si acabas de meter festivos, revísalos antes en <strong>Calendario</strong> (<em>Calendario laboral</em>).</li>
          <li><strong>Quita el enlace que sobre.</strong> Desde la misma flecha, o borrando la predecesora en la columna <strong>Después de</strong> o en la ficha de la tarea.</li>
        </ol>
        <p>Hay un comportamiento que conviene conocer: <strong>añadir una dependencia aquí solo puede empujar una tarea hacia adelante, nunca tirar de ella hacia atrás.</strong> El planificador es «tal como está colocada»: una tarea empieza en la más tardía de dos fechas, la que tú le diste al arrastrarla y la que le permiten sus predecesoras. Si enlazas una tarea cuya barra ya está bastante después de su predecesora, no se mueve nada y el hueco se mantiene, porque una barra que has colocado a propósito no debería salir disparada por un enlace que añadiste para documentar el plan.</p>
        <p>Cuando lo que quieras sea compactar, pulsa <strong>Reprogramar</strong>: ignora dónde están colocadas las tareas dependientes y tira de cada una hasta la fecha más temprana que le permiten sus predecesoras, dejando como anclas las tareas sin enlazar. Es el paso que Marta dio al final, con todos los enlaces ya revisados y los festivos de Semana Santa cargados: hasta ese momento, el plan mostraba huecos que no eran restricciones, sino simplemente el sitio donde alguien había soltado una barra.</p>`],
    ],
    callout: 'Una dependencia debe describir una restricción real, no una preferencia. «Preferimos hacer B después de A» es una decisión de secuencia y se resuelve con el orden de las filas. «B no puede empezar hasta que A esté terminada» es una dependencia. Los gráficos llenos de lo primero no se pueden replanificar: cada fecha está sujeta por algo que nunca fue obligatorio, y ya nadie sabe qué enlaces aguantan el peso.',
    faq: [
      ['¿Cuáles son los 4 tipos de dependencia en un diagrama de Gantt?', 'Fin-inicio (FS), inicio-inicio (SS), fin-fin (FF) e inicio-fin (SF). Fin-inicio cubre con diferencia la mayoría de las relaciones reales; inicio-fin es rara, y muchos planes perfectamente correctos no tienen ninguna.'],
      ['¿Qué diferencia hay entre desfase (lag) y adelanto (lead)?', 'El desfase es espera añadida al enlace: FS+3d arranca la sucesora tres días después de que termine la predecesora. El adelanto es un desfase negativo y solapa las dos tareas. Un desfase es tiempo ya comprometido —curado, secado, un plazo administrativo—, no margen: no puedes gastarlo cuando vas tarde.'],
      ['¿Qué diferencia hay entre holgura total y holgura libre?', 'La holgura total es cuánto puede retrasarse una tarea antes de mover el fin del proyecto; la libre, cuánto antes de mover a su propia sucesora. La total se comparte a lo largo de la cadena: tres tareas seguidas que muestran ocho días cada una no tienen veinticuatro entre ellas, tienen ocho.'],
      ['¿Qué tipo de dependencia debo usar por defecto?', 'Fin-inicio. Si te parece que hace falta otro tipo, revisa antes si las tareas están bien descompuestas: un tipo poco habitual suele ser el síntoma de una tarea que debería estar partida en dos.'],
      ['¿Qué pasa con mis fechas al añadir una dependencia en gantts.app?', 'Una dependencia solo puede empujar una tarea hacia adelante, nunca tirar de ella hacia atrás: la tarea empieza en la más tardía de dos fechas, donde tú la colocaste y donde se lo permiten sus predecesoras. Pulsa Reprogramar para compactar las tareas hasta su fecha legal más temprana.'],
      ['¿Cómo añado dependencias en gantts.app?', 'Arrastrando desde el punto del extremo de una barra hasta otra barra, o escribiendo la notación —por ejemplo 3FS+2d— en la columna Después de de la tabla. Haciendo clic sobre la flecha del enlace cambias el tipo o el desfase, y el resto del plan se recalcula al instante.'],
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
      ['Un ejemplo entero: el congreso de la Fundación Amparo Iglesias',
        `<p>Ocho resúmenes sirven para reconocer tu propio proyecto; un plan con fechas reales enseña la forma. Aquí va uno llevado hasta el final: el congreso anual de la Fundación Amparo Iglesias, 400 asistentes en el Palacio de Congresos de Sevilla el <strong>jueves 15 de octubre de 2026</strong>, planificado desde el lunes 1 de junio, con semana de lunes a viernes.</p>
        <div class="worked">
          <table>
            <thead><tr><th>#</th><th>Fila</th><th>Duración</th><th>Después de</th><th>Inicio</th><th>Fin</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>Presupuesto y preselección de sede</td><td>10 d</td><td>—</td><td>lun 1 jun</td><td>vie 12 jun</td></tr>
              <tr><td>2</td><td><strong>Sede contratada</strong></td><td>0 d</td><td>1</td><td colspan="2">vie 12 jun</td></tr>
              <tr><td>3</td><td>Contacto y confirmación de ponentes</td><td>25 d</td><td>2</td><td>lun 15 jun</td><td>vie 17 jul</td></tr>
              <tr><td>4</td><td>Contratos de catering y audiovisuales</td><td>12 d</td><td>2</td><td>lun 15 jun</td><td>mar 30 jun</td></tr>
              <tr><td>5</td><td>Web de inscripciones</td><td>8 d</td><td>2</td><td>lun 15 jun</td><td>mié 24 jun</td></tr>
              <tr><td>6</td><td><strong>Apertura de inscripciones</strong></td><td>0 d</td><td>3, 5</td><td colspan="2">lun 20 jul</td></tr>
              <tr><td>7</td><td>Campaña de captación</td><td>45 d</td><td>6</td><td>lun 20 jul</td><td>vie 18 sep</td></tr>
              <tr><td>8</td><td>Programa y guion de sala</td><td>10 d</td><td>3</td><td>lun 20 jul</td><td>vie 31 jul</td></tr>
              <tr><td>9</td><td>Imprenta y señalética</td><td>6 d</td><td>8</td><td>lun 3 ago</td><td>lun 10 ago</td></tr>
              <tr><td>10</td><td>Cierre de aforo al catering</td><td>2 d</td><td>7</td><td>lun 21 sep</td><td>mar 22 sep</td></tr>
              <tr><td>11</td><td>Ensayo general</td><td>2 d</td><td>9, 10</td><td>mar 13 oct</td><td>mié 14 oct</td></tr>
              <tr><td>12</td><td><strong>Día del congreso</strong></td><td>0 d</td><td>11</td><td colspan="2">jue 15 oct</td></tr>
            </tbody>
          </table>
          <p>La cadena crítica es 1 → 2 → 3 → 6 → 7 → 10 y aterriza el <strong>martes 22 de septiembre</strong>. El congreso es el 15 de octubre. Esas tres semanas de hueco son toda la contingencia del plan, y son el número más útil del gráfico.</p>
          <p><strong>Dos realidades del calendario español que este plan tiene metidas dentro.</strong> La primera: los 45 días de campaña cruzan agosto entero. En días laborables la barra es correcta, pero en captación de inscripciones agosto rinde cerca de cero — por eso la campaña se dimensiona a nueve semanas y no a cinco, y por eso el cierre de aforo se pone el 21 de septiembre y no el 20 de agosto. La segunda: el 12 de octubre de 2026, Fiesta Nacional, cae en lunes. El ensayo general no puede ocupar el lunes y el martes previos como sería natural: se comprime en martes 13 y miércoles 14, pegado al congreso. Si el puente no está en el calendario del proyecto, el gráfico programará el ensayo en un día en que el Palacio de Congresos está cerrado.</p>
        </div>
        <!--FIG:cpm|La cadena de tareas enlazadas más larga fija la fecha; todo lo demás tiene margen para moverse.-->
        <p>Un gráfico de evento se comporta distinto de todos los demás ejemplos de esta página porque la fecha de fin no se puede mover. La pregunta no es «¿cuándo terminaremos?» sino «¿cabe el trabajo por delante de la fecha, y por cuánto?». Si la cadena hubiera aterrizado el 20 de octubre, ningún esfuerzo lo arreglaría: habría que recortar alcance, empezar antes o acortar la ventana de campaña.</p>
        <p>Dos detalles de cómo lo programa gantts.app. Informa de la <strong>holgura total</strong> —cuánto puede desplazarse una tarea antes de mover la fecha de fin— y no de la holgura libre. Y programa <em>según se coloca</em>: una dependencia puede empujar una tarea más allá de donde la pusiste, nunca tirar de ella hacia atrás, que es exactamente lo que quieres para un ensayo aparcado a propósito en la semana del congreso. El enlace garantiza que no ocurra antes de que estén la imprenta y el aforo; no lo arrastra de vuelta a agosto.</p>`],

      ['Los tipos de proyecto comparados',
        `<p>Antes de las fichas una a una, así se diferencian los tipos principales en las cuatro cosas que de verdad cambian el gráfico:</p>
        <table>
          <thead><tr><th>Tipo de proyecto</th><th>Duración y escala del eje</th><th>Densidad de dependencias</th><th>Dónde vive el riesgo</th></tr></thead>
          <tbody>
            <tr><td>Construcción</td><td>6–24 meses, semanal</td><td>Muy alta — casi todo es fin-inicio</td><td>Licencias e inspecciones: un fallo lo mueve todo</td></tr>
            <tr><td>Software / ágil</td><td>1–6 meses, semanal por sprint</td><td>Baja entre sprints, alta hacia la release</td><td>El alcance, no la secuencia — las barras engordan en vez de moverse</td></tr>
            <tr><td>Campaña de marketing</td><td>6–12 semanas, semanal</td><td>Media, casi toda dentro de cada pista</td><td>Las aprobaciones entre pistas paralelas</td></tr>
            <tr><td>Eventos</td><td>3–6 meses, semanal</td><td>Media, convergiendo al final</td><td>La fecha fija. La contingencia es el hueco que queda por delante</td></tr>
            <tr><td>Lanzamiento de producto</td><td>8–16 semanas, semanal</td><td>Alta y entre equipos</td><td>Los relevos entre producto, marketing y soporte</td></tr>
            <tr><td>Tesis o investigación</td><td>9–24 meses, mensual</td><td>Baja pero muy encadenada</td><td>Dictámenes de terceros con duración incognoscible</td></tr>
            <tr><td>Plan semanal</td><td>5 días, diario</td><td>Casi ninguna</td><td>Nada estructural — es un instrumento de comunicación</td></tr>
          </tbody>
        </table>
        <p>La última columna merece leerse dos veces. En obra el riesgo es la <em>secuencia</em>; en software es el <em>alcance</em>; en eventos es una <em>fecha</em>. Mismo gráfico, tres preguntas distintas que hacerle.</p>`],

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
        <!--FIG:deps|En obra casi todos los enlaces son fin-inicio, y por eso acaba siendo crítica buena parte del plan.-->
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
        <p><strong>Caben en una pantalla</strong> al nivel de fase —entre diez y treinta barras visibles—. El resto vive en la lista de tareas de cada persona, que es donde debe vivir.</p>
        <!--FIG:milestone|Un hito tiene duración cero: marca un instante, no un tramo de trabajo.-->`],

      ['Abrir un ejemplo en el editor',
        `<p>Cualquiera de estos ejemplos se monta en unos minutos. Así se carga el congreso de la Fundación en el <a href="/es/app.html">editor</a>, con los botones tal y como están rotulados:</p>
        <ol>
          <li>Entra en <strong>✨ Plantillas</strong> y elige la más cercana a tu caso — eventos, obra, marketing, lanzamiento. Es más rápido que partir de cero y evita olvidar las tareas estándar del sector.</li>
          <li>Si prefieres pegar tu propia lista, usa <strong>✨ Pegar a Gantt</strong>: reconoce la duración entre paréntesis, <code>después de</code> como enlace y una <code>!</code> final como hito. <code>Campaña de captación (45d) después de Apertura de inscripciones</code>, y luego <code>Día del congreso !</code>.</li>
          <li>Abre <strong>Calendario laboral</strong> y marca el 12 de octubre y los festivos locales de tu comunidad. En un plan que termina en octubre, ese lunes decide si el ensayo general cabe o no.</li>
          <li>Agrupa con <strong>▣ Grupo</strong> en cinco o seis fases y usa el sangrado para meter las tareas debajo. La barra del grupo se calcula sola a partir de sus hijas.</li>
          <li>Doble clic en cada fila para <strong>Después de (predecesoras)</strong> y <strong>Responsable</strong>. Sin predecesoras no hay ruta crítica que calcular.</li>
          <li>Marca <strong>Ruta crítica</strong> y localiza dónde aterriza la cadena. En un evento, la distancia entre ese punto y la fecha fija es tu contingencia: si es negativa, lo sabes el primer día.</li>
          <li>Cambia <strong>Vista</strong> a <strong>Solo hitos</strong> para el patronato y a <strong>Próximas semanas</strong> para la reunión de equipo. Es el mismo plan leído a dos altitudes distintas.</li>
          <li>Comparte con <strong>📤 Compartir…</strong> → <strong>🔗 Enlace para compartir</strong>, o exporta con <strong>⬇ Exportar</strong> → <strong>📽 PowerPoint (.pptx)</strong> para la presentación de patrocinadores.</li>
        </ol>`],
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
        <p>Este es el truco entero. Todo lo demás —colores, orden, formato del eje— es acabado.</p>
        <!--FIG:bars|El segmento de inicio invisible es lo que empuja cada barra de duración hasta su fecha.-->`],
      ['Paso 4: invertir el orden de las tareas',
        `<p>Excel dibuja la primera fila de la tabla abajo del todo, así que el plan sale del revés. Haz clic sobre el eje vertical (la lista de nombres), clic derecho › <strong>Formato de eje</strong>, y en Opciones del eje marca <strong>Categorías en orden inverso</strong>.</p>
        <p>La primera tarea sube arriba y el plan se lee de arriba abajo en el mismo orden que la tabla. En ese mismo panel conviene marcar también <strong>«El eje horizontal cruza: en la categoría máxima»</strong>: si no, al invertir las categorías el eje de fechas se va al pie del gráfico y la referencia temporal queda lejos de las primeras tareas, que son las que más se miran.</p>`],
      ['Paso 5: formatear fechas y colores',
        `<p>Faltan dos ajustes para que el resultado sea presentable.</p>
        <p>El primero es el eje de fechas. Por defecto arranca en cero —es decir, en 1900— y deja un vacío enorme a la izquierda. Selecciona el <strong>eje horizontal</strong>, abre <strong>Formato de eje</strong> y fija los <strong>Límites</strong>: el mínimo en la fecha de inicio del proyecto y el máximo en la de fin. Excel espera números de serie, así que el atajo es escribir la fecha en una celda vacía, cambiarla a formato General para leer el número y copiarlo. En <strong>Unidades › Principal</strong> pon 7 para tener una división por semana, y dale al eje un formato de número de fecha corta para que se lean días y no números sueltos.</p>
        <p>El segundo es el color. Selecciona la serie de <strong>Duración</strong> y dale un color por fase —se puede colorear una barra concreta haciendo doble clic solo sobre ella—, borra la leyenda, que a estas alturas ya no dice nada útil, y añade etiquetas de datos si quieres ver la duración escrita sobre cada barra.</p>`],
      ['Antes de copiar ninguna fórmula: tu Excel habla español',
        `<p>Las fórmulas de esta guía están escritas para un <strong>Excel en español (es-ES)</strong>, que es el que casi con seguridad tienes delante. Dos cosas cambian respecto a las que encontrarás en la mayoría de tutoriales, y las dos hacen que una fórmula copiada de internet devuelva <code>#¿NOMBRE?</code> o directamente no se deje introducir:</p>
        <ul>
          <li><strong>Los nombres de función están traducidos.</strong> <code>WORKDAY</code> es <code>DIA.LAB</code>; <code>NETWORKDAYS</code> es <code>DIAS.LAB</code>; <code>DATEDIF</code> es <code>SIFECHA</code>; <code>WEEKDAY</code> es <code>DIASEM</code>; <code>TODAY</code> es <code>HOY</code>; <code>AND</code> es <code>Y</code>.</li>
          <li><strong>El separador de argumentos es el punto y coma</strong>, no la coma, porque la coma está ocupada haciendo de separador decimal. <code>=DIA.LAB(B2;D2-1)</code>, nunca <code>=DIA.LAB(B2,D2-1)</code>. Si tu Windows está configurado en inglés aunque Excel esté en español, el separador puede ser la coma: mira <strong>Archivo › Opciones › Avanzadas › Usar separadores del sistema</strong> para saber cuál te toca.</li>
        </ul>
        <p>La buena noticia es que el archivo no guarda la traducción: un .xlsx almacena las fórmulas en inglés por dentro, así que un libro hecho en Excel español se abre perfectamente en uno inglés y viceversa. Lo que no viaja es lo que <em>escribes</em>. Y una advertencia sobre <code>SIFECHA</code>: existe pero no aparece en el asistente de funciones ni se autocompleta al teclearla, porque Microsoft la mantiene solo por compatibilidad. Funciona igual; hay que escribirla entera y de memoria.</p>`],

      ['Un caso resuelto: seis tareas, y luego un retraso',
        `<p>Los cinco pasos anteriores son mecánicos. Lo que decide si el archivo sobrevive a un proyecto real son las fórmulas, y qué les pasa cuando el plan cambia.</p>
        <div class="worked">
          <p><strong>La hoja.</strong> Replataformado de la tienda online de una distribuidora, arranque el lunes 2 de marzo de 2026. Encabezados en la fila 1 y tareas en las filas 2 a 7. Columnas: <strong>A</strong> Tarea, <strong>B</strong> Inicio, <strong>C</strong> Fin, <strong>D</strong> Días laborables, <strong>E</strong> Longitud de barra. Los festivos van en <code>H2:H4</code> — el <strong>2 y el 3 de abril</strong> (Jueves y Viernes Santo) y el <strong>1 de mayo</strong>. Solo la columna D se escribe a mano; lo demás se deriva:</p>
          <ul>
            <li><strong>C2</strong>, el Fin — <code>=DIA.LAB(B2;D2-1;$H$2:$H$4)</code>. El <code>-1</code> importa: <code>DIA.LAB</code> cuenta <em>hacia adelante</em>, así que una tarea que empieza el lunes y dura 5 días laborables acaba en <code>DIA.LAB(lunes;4)</code>, el viernes. Sin el <code>-1</code> todas las tareas duran un día de más.</li>
            <li><strong>B3</strong>, el Inicio de cada tarea siguiente — <code>=DIA.LAB(C2;1;$H$2:$H$4)</code>. Esta única fórmula es lo que hace que la hoja reprograme algo.</li>
            <li><strong>E2</strong>, el número que dibuja el gráfico — <code>=C2-B2+1</code>. No <code>D2</code>. D son días laborables; el eje del gráfico es un calendario natural con sus fines de semana y sus festivos, así que una tarea de 20 días laborables que cruza Semana Santa tiene que dibujarse como una barra de 30 días. Confundir las dos columnas es la causa más común de que un Gantt de Excel no coincida con su propia tabla.</li>
          </ul>
          <p>Si prefieres no depender del formato de la celda, <code>=SIFECHA(B2;C2;"d")</code> devuelve la diferencia en días como número puro y nunca te la presenta como «4 de enero de 1900». Arrastra C2 y E2 por las filas 2 a 7, y B3 por las filas 3 a 7:</p>
          <table>
            <thead><tr><th>Fila</th><th>A — Tarea</th><th>B — Inicio</th><th>C — Fin</th><th>D — Días laborables</th><th>E — Longitud de barra</th></tr></thead>
            <tbody>
              <tr><td>2</td><td>Descubrimiento</td><td>lun 2 mar</td><td>vie 13 mar</td><td>10</td><td>12</td></tr>
              <tr><td>3</td><td>Diseño</td><td>lun 16 mar</td><td>vie 27 mar</td><td>10</td><td>12</td></tr>
              <tr><td>4</td><td>Desarrollo</td><td>lun 30 mar</td><td>mar 28 abr</td><td>20</td><td>30</td></tr>
              <tr><td>5</td><td>Migración de contenidos</td><td>mié 29 abr</td><td>mié 20 may</td><td>15</td><td>22</td></tr>
              <tr><td>6</td><td>QA</td><td>jue 21 may</td><td>mié 3 jun</td><td>10</td><td>14</td></tr>
              <tr><td>7</td><td>Salida a producción</td><td>jue 4 jun</td><td>jue 4 jun</td><td>1</td><td>1</td></tr>
            </tbody>
          </table>
          <p>Mira la fila 4: veinte días laborables que se dibujan como <strong>treinta</strong> días de barra. Ocho son fines de semana y dos son el Jueves y el Viernes Santo. Si esos dos festivos no están en <code>$H$2:$H$4</code>, la hoja promete el desarrollo para el 24 de abril y la salida a producción para el 2 de junio, y el error se arrastra hasta el final sin que nada lo señale.</p>
          <p><strong>El eje.</strong> Excel quiere números de serie, no fechas, para los límites del eje. Escribe <code>=B2</code> en una celda libre y ponla en formato General para leer uno: el 2 de marzo de 2026 es el <strong>46083</strong> y el 4 de junio de 2026 el <strong>46177</strong>. Esos dos van en Mínimo y Máximo, con Unidad principal <code>7</code> para líneas de división semanales.</p>
          <p><strong>Ahora cambia algo.</strong> El diseño se alarga tres días. Editas una sola celda —<code>D3</code>, de 10 a 13— y la cadena se recalcula: Diseño termina el miércoles 1 de abril, Desarrollo va del 6 de abril al lunes 4 de mayo, la Migración del 5 al 25 de mayo, QA del 26 de mayo al 8 de junio y la salida a producción cae el <strong>martes 9 de junio</strong>. Tres días entran, tres días salen. Ahí la hoja está en su mejor momento y es genuinamente útil.</p>
          <p><strong>Y esto es lo que se rompe.</strong></p>
          <ol>
            <li><strong>La última barra se sale del gráfico.</strong> La salida se ha ido al 9 de junio, más allá del 46177 que escribiste a mano como Máximo del eje. La barra queda recortada y nada te avisa. Cada cambio de fechas obliga a releer un número de serie y a reescribir el límite.</li>
            <li><strong>Una fila insertada se queda a medio conectar.</strong> Mete «Revisión del cliente» entre Diseño y Desarrollo: Excel amplía el rango de datos del gráfico, pero la fila nueva llega sin fórmulas y la vieja fila de Desarrollo sigue apuntando a Diseño. Si no lo ves, el plan se lee bien y programa mal. Y si la añades debajo de la fila 7, queda fuera del rango y simplemente no aparece.</li>
            <li><strong>Una segunda predecesora no tiene dónde vivir.</strong> Si QA necesita el Desarrollo <em>y</em> la Migración, la fórmula honesta es <code>=DIA.LAB(MAX(C4;C5);1;$H$2:$H$4)</code>. Funciona, pero nada en el gráfico enseña el enlace y el siguiente que abra el archivo solo ve una fecha. Añade cinco días de revisión del cliente como desfase y se convierte en <code>=DIA.LAB(C3;1+5;$H$2:$H$4)</code>: un <code>5</code> desnudo dentro de una fórmula, sin etiqueta en ninguna parte.</li>
          </ol>
          <p>La columna B como fórmula te compra reprogramación a lo largo de una única cadena. No te compra una red. Nada de esto puede decirte qué pareja de tareas fija la fecha de fin, porque nada de esto sabe que están enlazadas.</p>
        </div>
        <!--FIG:lag|El desfase es tiempo real de calendario. En una hoja de cálculo es un número enterrado dentro de una fórmula.-->`],

      ['Dependencias y porcentaje completado',
        `<p>Aquí aparecen los límites de verdad. Excel no tiene ninguna noción de dependencia: no hay forma de dibujar una flecha fin-comienzo que signifique algo para el cálculo, y mover una tarea no mueve a las siguientes. El apaño habitual es hacer que el inicio de cada tarea sea una fórmula que apunte al fin de la anterior —<code>=C2</code>— de modo que un cambio se propague hacia abajo por la columna. Funciona para una cadena lineal y se rompe en cuanto una tarea tiene dos predecesoras, hay solapes o alguien necesita holgura.</p>
        <p>El porcentaje completado se simula con dos columnas auxiliares, y el orden importa más de lo que parece. Añade <strong>% completado</strong>, luego <strong>Hecho</strong> con <code>=Duración*%</code> y <strong>Pendiente</strong> con <code>=Duración*(1-%)</code>. En el gráfico, <strong>sustituye la serie de Duración</strong> por esas dos: Inicio (invisible), Hecho en el tono fuerte y Pendiente en una versión clara del mismo color. El truco está en el reemplazo: las series apiladas se suman, así que si dejas Duración y añades el avance encima, la barra pasa a medir duración más avance y una tarea al 100&nbsp;% se dibuja del doble de largo. Es un fallo silencioso —el gráfico no se queja, solo miente— y aparece en la mitad de las plantillas que circulan por ahí.</p>
        <p>El coste de todo esto no está en montarlo, sino en mantenerlo: cada tarea nueva obliga a ampliar el rango de datos del gráfico y a recolorear las series, y nada avisa de que una fecha ha dejado de cuadrar. Con más de diez o quince tareas enlazadas, el mantenimiento del gráfico supera al de la propia planificación. Ese es el momento de <a href="/es/app.html">usar un editor que recalcule solo</a>.</p>`],
      ['Gantt automático con formato condicional',
        `<p>Hay un segundo método que evita los gráficos por completo y que a mucha gente le resulta más cómodo: pintar el Gantt directamente en las celdas.</p>
        <p>Coloca un calendario en la fila de encabezados —una columna por día o por semana— y deja a la izquierda las columnas de tarea, inicio y fin. Selecciona toda la rejilla del calendario y ve a <strong>Inicio › Formato condicional › Nueva regla › Utilice una fórmula que determine las celdas para aplicar formato</strong>, con una condición del tipo <code>=Y(E$1&gt;=$B2; E$1&lt;=$C2)</code>, donde <code>E$1</code> es la primera fecha del calendario y <code>$B2</code>/<code>$C2</code> el inicio y el fin de la tarea. Elige un relleno y acepta.</p>
        <p>Con la hoja del ejemplo anterior, el montaje concreto es este. Deja A–E como están y pon el calendario en la fila 1 a partir de la columna G: <code>=B2</code> en <strong>G1</strong>, <code>=G1+1</code> en <strong>H1</strong>, arrastrado a la derecha toda la duración del proyecto — del 2 de marzo al 4 de junio inclusive son 95 días, así que hasta la columna CY. Formatea la fila como <code>ddd</code> y estrecha las columnas a unos 20 píxeles. Selecciona <strong>G2:CY7</strong> con G2 como celda activa —esto importa, porque la fórmula se escribe desde el punto de vista de la celda activa y se desplaza para todas las demás— y añade tres reglas <em>en este orden</em>:</p>
        <ol>
          <li><code>=Y(G$1&gt;=$B2; G$1&lt;=$C2)</code> — el color de la barra. Las referencias mixtas son todo el truco: <code>G$1</code> fija la fila para que cada columna lea su propia fecha, y <code>$B2</code> fija la columna para que cada fila lea las fechas de su tarea.</li>
          <li><code>=DIASEM(G$1;2)&gt;5</code> — gris claro. El tipo <code>2</code> numera el lunes como 1 y el domingo como 7, así que <code>&gt;5</code> es exactamente sábado y domingo. El tipo por defecto, el <code>1</code>, empieza en domingo y sombrearía los dos días equivocados.</li>
          <li><code>=CONTAR.SI($H$2:$H$4;G$1)&gt;0</code> — otro gris para los festivos, y así el Jueves y el Viernes Santo se ven en la rejilla en lugar de quedar escondidos dentro de una fórmula.</li>
          <li><code>=G$1=HOY()</code> — un borde izquierdo de color, que te da la línea de hoy.</li>
        </ol>
        <p>Las reglas se evalúan de arriba abajo y gana el primer relleno, así que la regla de la barra tiene que ir por encima de la del fin de semana o todas las barras saldrán con rayas grises los sábados. Las celdas se colorean solas cuando su fecha cae dentro del rango de la tarea, y el «gráfico» se actualiza al cambiar cualquier fecha, sin ningún objeto gráfico de por medio. Imprime bien, se amplía copiando filas y admite reglas adicionales: una para los hitos y otra para marcar la columna de hoy con <code>=E$1=HOY()</code>. Sigue sin haber dependencias ni ruta crítica, pero como documento vivo aguanta bastante mejor que el gráfico de barras.</p>`],
      ['Qué te da Excel y qué no',
        `<p>Los dos métodos dibujan una imagen perfectamente respetable de un calendario. Ninguno de los dos <em>programa</em> nada. Esa distinción se pierde con facilidad en cuanto las barras quedan bonitas, así que aquí está sin rodeos:</p>
        <table>
          <thead><tr><th>Capacidad</th><th>Barras apiladas</th><th>Formato condicional</th><th>Un programador de verdad</th></tr></thead>
          <tbody>
            <tr><td>Excluir fines de semana y festivos</td><td>Sí, con <code>DIA.LAB</code></td><td>Sí, con <code>DIA.LAB</code></td><td>Sí, de serie</td></tr>
            <tr><td>Reprogramar una cadena fin-inicio</td><td>Sí, si el Inicio es fórmula</td><td>Sí, si el Inicio es fórmula</td><td>Sí</td></tr>
            <tr><td>Flechas de dependencia visibles</td><td>No</td><td>No</td><td>Sí</td></tr>
            <tr><td>Dos predecesoras en una tarea</td><td>Solo con un <code>MAX()</code> escondido</td><td>Solo con un <code>MAX()</code> escondido</td><td>Sí</td></tr>
            <tr><td>Enlaces SS, FF y SF</td><td>No</td><td>No</td><td>Sí</td></tr>
            <tr><td>Desfase etiquetado en el enlace</td><td>No — un <code>+5</code> desnudo</td><td>No — un <code>+5</code> desnudo</td><td>Sí</td></tr>
            <tr><td>Ruta crítica</td><td>No</td><td>No</td><td>Calculada</td></tr>
            <tr><td>Holgura por tarea</td><td>No</td><td>No</td><td>Calculada (total)</td></tr>
            <tr><td>Aviso de sobreasignación</td><td>No</td><td>No</td><td>Sí</td></tr>
            <tr><td>Línea base y desviación</td><td>Copiar las columnas a mano</td><td>Copiar las columnas a mano</td><td>Guardada y comparada</td></tr>
            <tr><td>Sobrevive a insertar una fila</td><td>Hay que reescribir fórmulas</td><td>Casi siempre</td><td>Sí</td></tr>
            <tr><td>Sobrevive a ordenar las filas</td><td>No — las referencias siguen a la posición</td><td>No</td><td>Sí</td></tr>
            <tr><td>Hitos como rombos</td><td>Serie de marcadores manual</td><td>Regla manual</td><td>Sí, con duración cero</td></tr>
          </tbody>
        </table>
        <p>Es una afirmación concreta, no un desprecio: un gráfico de barras apiladas es <em>el dibujo de un calendario que has resuelto en otro sitio</em>. Para una docena de tareas que van más o menos en línea, eso basta y la hoja de cálculo es la herramienta correcta. Pero las filas centrales de esa tabla son exactamente lo que te preguntan en una reunión de seguimiento, y el archivo no puede responder a ninguna.</p>
        <!--FIG:cpm|Solo el camino más largo de la red fija la fecha de fin — y solo un programador puede encontrarlo.-->`],

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
      ['¿Cómo muestro el porcentaje completado?', 'Con dos columnas auxiliares: Hecho = Duración*% y Pendiente = Duración*(1-%). En el gráfico sustituye la serie de Duración por esas dos, la primera en un tono fuerte y la segunda en uno claro. No basta con añadir el avance como serie extra: las series apiladas se suman, así que la barra mediría duración más avance y una tarea al 100 % se vería del doble de larga.'],
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
      ['Aviso de idioma: en Sheets cambian los separadores, no los nombres',
        `<p>Aquí hay una diferencia con Excel que confunde a mucha gente. <strong>Google Sheets no traduce los nombres de función</strong>: aunque tengas la interfaz en español, se escribe <code>WORKDAY</code>, <code>NETWORKDAYS</code>, <code>MAX</code> y <code>TODAY</code>, igual que en inglés. Lo que sí cambia con la configuración regional es el <strong>separador de argumentos</strong>.</p>
        <ul>
          <li>Con la hoja en <strong>Archivo › Configuración › Configuración regional: España</strong>, la coma es el separador decimal, así que los argumentos se separan con <strong>punto y coma</strong>: <code>=WORKDAY(B2;D2-1;$H$2:$H$5)</code>.</li>
          <li>Con la hoja en <em>Estados Unidos</em>, aunque la interfaz esté en español, es la coma: <code>=WORKDAY(B2,D2-1,$H$2:$H$5)</code>.</li>
        </ul>
        <p>Y hay un tercer nivel que casi nadie documenta: dentro de una <strong>matriz literal</strong> entre llaves, la configuración española cambia el separador de columnas a la <strong>barra invertida</strong> <code>\\</code> y el de filas al punto y coma. Es la razón por la que la fórmula de <code>SPARKLINE</code> que copies de un tutorial estadounidense devolverá un error de análisis en tu hoja aunque esté escrita perfectamente. Más abajo la tienes en las dos formas.</p>
        <p>Comprueba primero en qué configuración regional está tu hoja y escribe en consecuencia. Es un minuto que ahorra media hora de <code>#¡ERROR!</code> sin explicación.</p>`],

      ['Un caso resuelto: seis tareas, y luego un retraso',
        `<p>Las columnas auxiliares son fáciles de describir y fáciles de equivocar sutilmente. Aquí va un plan pequeño con fórmulas reales, y después modificado — porque cómo se comporta una hoja cuando una fecha se mueve es la única prueba que importa.</p>
        <div class="worked">
          <p><strong>La hoja.</strong> Puesta en marcha del nuevo almacén de la Cooperativa Agrícola de Villena, arranque el lunes 7 de septiembre de 2026. Encabezados en la fila 1, tareas en las filas 2 a 7. <strong>A</strong> Tarea, <strong>B</strong> Inicio, <strong>C</strong> Fin, <strong>D</strong> Días laborables, <strong>E</strong> Empieza el día, <strong>F</strong> Longitud de barra. En <code>H2:H5</code>, los festivos que de verdad afectan a este plan: el <strong>9 de octubre</strong> (Día de la Comunitat Valenciana), el <strong>12 de octubre</strong>, el <strong>8 de diciembre</strong> y el <strong>25 de diciembre</strong>. Solo la columna D se escribe a mano:</p>
          <ul>
            <li><strong>C2</strong> — <code>=WORKDAY(B2;D2-1;$H$2:$H$5)</code>. Sheets tiene la misma <code>WORKDAY</code> que Excel y salta los fines de semana por ti. El <code>-1</code> es imprescindible: <code>WORKDAY</code> cuenta hacia adelante desde el inicio, así que cinco días laborables desde el lunes son <code>WORKDAY(lunes;4)</code>, el viernes.</li>
            <li><strong>B3</strong> — <code>=WORKDAY(C2;1;$H$2:$H$5)</code>. El siguiente día laborable después de que termine la predecesora. Es lo único del archivo que reprograma algo.</li>
            <li><strong>E2</strong> — <code>=B2-$B$2</code>, con formato de <em>Número</em>. Cero en la primera tarea.</li>
            <li><strong>F2</strong> — <code>=C2-B2+1</code>, también como Número. Ojo: <em>no</em> es D2. D son días laborables; el eje del gráfico son días naturales, así que una tarea de 20 días laborables que cruza el Pilar y el 9 de octubre tiene que dibujarse con 30 unidades de largo. Si por error representas D, todas las barras terminan antes mientras la tabla de al lado se lee correctamente.</li>
          </ul>
          <p>Arrastra hacia abajo y sale esto:</p>
          <table>
            <thead><tr><th>Fila</th><th>Tarea</th><th>B — Inicio</th><th>C — Fin</th><th>D — Días lab.</th><th>E — Empieza el día</th><th>F — Longitud</th></tr></thead>
            <tbody>
              <tr><td>2</td><td>Análisis y toma de requisitos</td><td>lun 7 sep</td><td>vie 18 sep</td><td>10</td><td>0</td><td>12</td></tr>
              <tr><td>3</td><td>Diseño del almacén</td><td>lun 21 sep</td><td>vie 2 oct</td><td>10</td><td>14</td><td>12</td></tr>
              <tr><td>4</td><td>Instalación y montaje</td><td>lun 5 oct</td><td>mar 3 nov</td><td>20</td><td>28</td><td>30</td></tr>
              <tr><td>5</td><td>Migración de datos de stock</td><td>mié 4 nov</td><td>mar 24 nov</td><td>15</td><td>58</td><td>21</td></tr>
              <tr><td>6</td><td>Pruebas de usuario</td><td>mié 25 nov</td><td>mié 9 dic</td><td>10</td><td>79</td><td>15</td></tr>
              <tr><td>7</td><td>Puesta en marcha</td><td>jue 10 dic</td><td>jue 10 dic</td><td>1</td><td>94</td><td>1</td></tr>
            </tbody>
          </table>
          <p><strong>Comprobación de la última fila:</strong> 94 + 1 = 95 días, que es el recorrido completo del proyecto desde el 7 de septiembre. Si E + F en la fila de abajo no da el recorrido que esperas, alguna convención se ha desviado más arriba.</p>
          <p>Y mira la fila 4: veinte días laborables dibujados como <strong>treinta</strong>. Ocho son fines de semana; dos son el 9 y el 12 de octubre, dos festivos consecutivos —viernes y lunes— que en la Comunitat Valenciana se comen una semana entera de golpe. Sin esas fechas en <code>$H$2:$H$5</code>, la hoja promete la puesta en marcha para el 8 de diciembre, que además es festivo.</p>
          <p><strong>Ahora cambia algo.</strong> El diseño se alarga tres días: edita <code>D3</code> de 10 a 13. La cadena de <code>WORKDAY</code> se recalcula y todo lo de abajo se mueve — Diseño termina el miércoles 7 de octubre, Instalación va del 8 de octubre al viernes 6 de noviembre, la Migración del 9 al 27 de noviembre, las Pruebas del 30 de noviembre al lunes 14 de diciembre y la puesta en marcha cae el <strong>martes 15 de diciembre</strong>. Las dos columnas auxiliares se recalculan solas. Esa es la razón de usar fórmulas y no fechas escritas a mano.</p>
          <p><strong>Y esto es lo que no se recalcula.</strong></p>
          <ol>
            <li><strong>Las filas insertadas llegan sin fórmulas.</strong> Mete «Revisión del cliente» entre Diseño e Instalación: la nueva fila 4 está vacía y la vieja Instalación —ahora fila 5— sigue apuntando al Fin de Diseño. Sheets amplía el rango del gráfico igualmente, así que la fila vacía se dibuja como una barra de longitud cero en el día cero: un muñón en el extremo izquierdo que parece un fallo de renderizado y no un error de datos.</li>
            <li><strong>Ordenar destruye la cadena.</strong> Ordena por fecha de inicio y cada referencia relativa sigue a su nuevo vecino, rederivando fechas en silencio a partir de las filas equivocadas. Sin aviso, y sin deshacer una vez guardado y cerrado.</li>
            <li><strong>Una segunda predecesora no tiene dónde vivir.</strong> Si las Pruebas necesitan la Instalación <em>y</em> la Migración, la fórmula correcta es <code>=WORKDAY(MAX(C4;C5);1;$H$2:$H$5)</code>. Funciona. Pero nada en el gráfico enseña el enlace, y cinco días de revisión del cliente se convierten en <code>=WORKDAY(C3;1+5;$H$2:$H$5)</code>: un <code>5</code> desnudo dentro de una fórmula, sin etiqueta en ningún sitio.</li>
          </ol>
          <p><strong>El atajo exclusivo de Sheets.</strong> Si quieres una barra por fila sin ningún objeto gráfico, pon esto en G2 y arrástralo hacia abajo. En una hoja con configuración regional <strong>España</strong>:</p>
          <p><code>=SPARKLINE({E2\\F2};{"charttype"\\"bar";"color1"\\"white";"color2"\\"#6c4cf1";"max"\\95})</code></p>
          <p>Y la misma fórmula en una hoja configurada como Estados Unidos, por si la copias de otro sitio:</p>
          <p><code>=SPARKLINE({E2,F2},{"charttype","bar";"color1","white";"color2","#6c4cf1";"max",95})</code></p>
          <p>Dibuja el mismo truco del espaciador invisible dentro de una sola celda, y como <code>max</code> está fijado al recorrido del proyecto todas las filas comparten un mismo eje. Aguanta mejor que el gráfico las filas insertadas y la reordenación — pero sigue siendo un dibujo, no un calendario.</p>
        </div>
        <!--FIG:bars|El segmento espaciador invisible es lo que empuja cada barra de duración hasta su fecha de inicio.-->`],

      ['Qué te da cada método',
        `<p>Los tres métodos dibujan un calendario. Ninguno lo calcula. Las diferencias entre ellos son reales, pero pequeñas al lado de ese límite compartido, así que aquí están las dos cosas a la vez:</p>
        <table>
          <thead><tr><th>Capacidad</th><th>Cronograma</th><th>Barras apiladas</th><th><code>SPARKLINE</code></th><th>Un programador de verdad</th></tr></thead>
          <tbody>
            <tr><td>Esfuerzo de montaje</td><td>Dos minutos</td><td>Dos columnas auxiliares</td><td>Una fórmula</td><td>Escribir y arrastrar</td></tr>
            <tr><td>Saltar fines de semana y festivos</td><td>No</td><td>Con <code>WORKDAY</code></td><td>Con <code>WORKDAY</code></td><td>De serie</td></tr>
            <tr><td>Reprogramar una cadena fin-inicio</td><td>Sí, si el Inicio es fórmula</td><td>Sí, si el Inicio es fórmula</td><td>Sí, si el Inicio es fórmula</td><td>Sí</td></tr>
            <tr><td>Flechas de dependencia</td><td>No</td><td>No</td><td>No</td><td>Sí</td></tr>
            <tr><td>Dos predecesoras en una tarea</td><td><code>MAX()</code> escondido</td><td><code>MAX()</code> escondido</td><td><code>MAX()</code> escondido</td><td>Sí</td></tr>
            <tr><td>Enlaces SS, FF y SF</td><td>No</td><td>No</td><td>No</td><td>Sí</td></tr>
            <tr><td>Ruta crítica</td><td>No</td><td>No</td><td>No</td><td>Calculada</td></tr>
            <tr><td>Holgura por tarea</td><td>No</td><td>No</td><td>No</td><td>Calculada (total)</td></tr>
            <tr><td>Aviso de sobreasignación</td><td>No</td><td>No</td><td>No</td><td>Sí</td></tr>
            <tr><td>Línea base y desviación</td><td>Copiar columnas a mano</td><td>Copiar columnas a mano</td><td>Copiar columnas a mano</td><td>Guardada y comparada</td></tr>
            <tr><td>Sobrevive a insertar una fila</td><td>Sí</td><td>Hay que reescribir fórmulas</td><td>Hay que arrastrar la fórmula</td><td>Sí</td></tr>
            <tr><td>Sobrevive a reordenar</td><td>Sí</td><td>No</td><td>No</td><td>Sí</td></tr>
            <tr><td>Se exporta como imagen</td><td>No — es una vista</td><td>Sí</td><td>No — es una celda</td><td>PNG, PDF, PPTX</td></tr>
          </tbody>
        </table>
        <p>Los «No» del centro no son un reproche a Sheets: están fuera de lo que una hoja de cálculo es. Sheets guarda números que has decidido en otro sitio. Si lo que quieres es que se <em>deduzcan</em> —qué tarea manda sobre la fecha de entrega, cuánto margen tienen las demás—, ninguna astucia con fórmulas te lleva hasta ahí.</p>
        <!--FIG:cpm|Solo el camino más largo de la red fija la fecha de fin. Ninguna hoja de cálculo lo encuentra por ti.-->`],

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
        <p>Para un plan de veinte tareas eso se aguanta; para sesenta, no. Así se pasa la hoja del almacén de Villena al <a href="/es/app.html">editor de gantts.app</a>, con los botones tal y como están rotulados:</p>
        <ol>
          <li>En Sheets, <strong>Archivo › Descargar › Valores separados por comas (.csv)</strong>. Descarga solo la hoja activa, así que asegúrate de estar en la pestaña de la tabla y no en la del Cronograma.</li>
          <li>Deja visibles las columnas de tarea, inicio y fin. Las auxiliares —«empieza el día» y «longitud de barra»— ya no hacen falta: eran andamiaje del gráfico, no datos del plan.</li>
          <li>En el editor, <strong>📂 Abrir</strong> y elige el CSV. Verás el aviso <em>«Tareas importadas desde CSV»</em> con el número de filas, que es la comprobación rápida de que no se ha quedado ninguna fuera.</li>
          <li>Abre <strong>Calendario laboral</strong> y marca el 9 y el 12 de octubre y el 8 de diciembre. Es lo mismo que hacía tu rango <code>$H$2:$H$5</code>, pero ahora lo aplica todo el plan, no solo las fórmulas donde te acordaste de ponerlo.</li>
          <li>Doble clic en cada fila y rellena <strong>Después de (predecesoras)</strong>. Aquí es donde el plan gana lo que la hoja no podía tener: las Pruebas pueden depender a la vez de la Instalación y de la Migración, sin ningún <code>MAX()</code> escondido.</li>
          <li>Marca <strong>Ruta crítica</strong>. Por primera vez el plan te dice qué tareas mandan sobre el 10 de diciembre.</li>
          <li>Guarda una <strong>Línea base</strong> antes de arrancar, y usa <strong>Progreso</strong> en el panel de cada tarea en lugar de mantener una columna de porcentaje a mano.</li>
          <li>Cuando la cooperativa pida el archivo de siempre, <strong>⬇ Exportar</strong> → <strong>📊 Excel (.xlsx)</strong> o <strong>📑 CSV (hoja de cálculo)</strong>. Vuelve a ser una hoja, pero calculada en otro sitio.</li>
        </ol>
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
        <!--FIG:bars|El segmento de inicio invisible es lo que empuja cada barra de duración hasta su posición.-->
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
      ['Un caso resuelto: seis tareas, y luego un retraso',
        `<p>Los dos métodos anteriores te piden números que PowerPoint no puede deducir por su cuenta. Aquí están exactamente cuáles, para un plan pequeño — y qué les pasa cuando una fecha se mueve.</p>
        <div class="worked">
          <p><strong>El plan.</strong> Apertura de la delegación de Zaragoza de una asesoría, del lunes 2 de marzo al viernes 5 de junio de 2026. Seis filas, cada una arrancando el siguiente día laborable. Los dos números que PowerPoint necesita son el <strong>desplazamiento de inicio</strong> (días naturales desde el 2 de marzo, así que la primera tarea es 0) y la <strong>longitud de barra</strong> en días naturales, fines de semana incluidos — porque el eje es un calendario aunque tus estimaciones estén en días laborables.</p>
          <table>
            <thead><tr><th>Tarea</th><th>Fechas</th><th>Días lab.</th><th>Desplaz.</th><th>Longitud</th><th>Izquierda (cm)</th><th>Ancho (cm)</th></tr></thead>
            <tbody>
              <tr><td>Búsqueda y selección de local</td><td>2–13 mar</td><td>10</td><td>0</td><td>12</td><td>5,00</td><td>3,36</td></tr>
              <tr><td>Firma del arrendamiento</td><td>16–27 mar</td><td>10</td><td>14</td><td>12</td><td>8,92</td><td>3,36</td></tr>
              <tr><td>Obra y acondicionamiento</td><td>30 mar – 29 abr</td><td>20</td><td>28</td><td>31</td><td>12,84</td><td>8,68</td></tr>
              <tr><td>Altas de suministros y telecos</td><td>30 abr – 21 may</td><td>15</td><td>59</td><td>22</td><td>21,52</td><td>6,16</td></tr>
              <tr><td>Contratación y formación</td><td>22 may – 4 jun</td><td>10</td><td>81</td><td>14</td><td>27,68</td><td>3,92</td></tr>
              <tr><td>Apertura al público</td><td>5 jun</td><td>1</td><td>95</td><td>1</td><td>31,60</td><td>0,28</td></tr>
            </tbody>
          </table>
          <p>Mira la tercera fila: veinte días laborables dibujados como <strong>treinta y un</strong> días de barra. Ocho son fines de semana, dos son el Jueves y el Viernes Santo (2 y 3 de abril) y uno es el <strong>23 de abril, Día de Aragón</strong>, que en Zaragoza no se trabaja. Si escribes 20 en la hoja de datos, la lámina termina once días antes que el plan del que la has copiado, y en un comité de dirección eso no se nota hasta que alguien va a la obra.</p>
          <p><strong>Para el método 1</strong>, las columnas 4 y 5 son todo lo que escribes. Clic derecho sobre el gráfico, <strong>Modificar datos</strong>, nombres en la columna A, desplazamientos en la B y longitudes en la C. Pones la serie B en Sin relleno y ya está. Fíjate en que la columna de días laborables no aparece nunca.</p>
          <p><strong>Para el método 2</strong> necesitas las dos últimas columnas, y la aritmética que hay detrás merece hacerse bien una vez. Una diapositiva 16:9 mide 33,87 cm de ancho. Reserva 5 cm a la izquierda para los nombres y termina la línea de tiempo en 31,88 cm, lo que deja 26,88 cm para un proyecto de 96 días: <strong>0,28 cm por día</strong>, una escala que conviene elegir redonda. Entonces, para cada barra:</p>
          <ul>
            <li>Posición horizontal = <code>5 + 0,28 × desplazamiento</code></li>
            <li>Ancho = <code>0,28 × longitud</code></li>
          </ul>
          <p>Escribe esos valores en <strong>Formato de forma → Tamaño y propiedades</strong> en vez de arrastrar. Seis barras, doce números, y el gráfico queda exacto a menos de tres milímetros por día en lugar de exacto a donde cayera el ratón.</p>
          <p><strong>Ahora la obra se alarga tres días.</strong> En un programador de verdad esto es una edición. En una lámina cuesta esto. Todas las fechas de aguas abajo se mueven, así que cambian todos los desplazamientos y todas las longitudes: la Obra pasa a 28 / 37, los Suministros a 65 / 21, la Contratación a 86 / 15 y la Apertura a 100 / 1, con el acto de apertura desplazado al <strong>miércoles 10 de junio</strong>. El proyecto ocupa ahora 101 días en lugar de 96, así que 0,28 cm por día ya no cabe en el espacio que reservaste y hay que cambiar la escala entera a 0,27.</p>
          <ul>
            <li><strong>Método 1:</strong> reescribes 10 de los 12 números de la hoja de datos. El gráfico se redibuja solo, que es una ventaja real — pero nada te avisó de que los números estaban caducados, y nada comprueba los que escribes.</li>
            <li><strong>Método 2:</strong> recalculas la escala y luego reescribes las 12 posiciones y anchos. Si te saltas uno, tienes una diapositiva segura de sí misma, precisa al milímetro y equivocada, que es peor que un esquema visiblemente aproximado porque nadie en la sala la va a cuestionar.</li>
          </ul>
          <p>Ese es el coste honesto de un Gantt en PowerPoint: no los veinte minutos de montarlo, sino los veinte minutos que vuelve a costar cada vez que una fecha se mueve.</p>
        </div>`],

      ['Qué te da cada método',
        `<p>Una diapositiva es una pieza de comunicación, y conviene ser claro sobre lo poco de un calendario que sobrevive al viaje hasta ella:</p>
        <table>
          <thead><tr><th>Capacidad</th><th>Barras apiladas</th><th>Formas</th><th>SmartArt</th><th>Exportado de un programador</th></tr></thead>
          <tbody>
            <tr><td>Exacto respecto al eje de fechas</td><td>Sí</td><td>Solo si escribes los números</td><td>No — no está a escala de fechas</td><td>Sí</td></tr>
            <tr><td>Se redibuja al cambiar los datos</td><td>Sí</td><td>No</td><td>No</td><td>Reexportar</td></tr>
            <tr><td>Las fechas se introducen como fechas</td><td>No — números de día</td><td>No — centímetros</td><td>No</td><td>Sí</td></tr>
            <tr><td>Fines de semana y festivos</td><td>Los calculas tú</td><td>Los calculas tú</td><td>No</td><td>De serie</td></tr>
            <tr><td>Flechas de dependencia</td><td>No</td><td>Dibujadas a mano, sin significar nada</td><td>No</td><td>Sí, enlaces reales</td></tr>
            <tr><td>Reprograma cuando una tarea se retrasa</td><td>No</td><td>No</td><td>No</td><td>Sí</td></tr>
            <tr><td>Ruta crítica</td><td>No</td><td>No</td><td>No</td><td>Calculada</td></tr>
            <tr><td>Holgura por tarea</td><td>No</td><td>No</td><td>No</td><td>Calculada (total)</td></tr>
            <tr><td>Línea base frente a real</td><td>Serie extra, a mano</td><td>Segunda fila de formas</td><td>No</td><td>Guardada y comparada</td></tr>
            <tr><td>Hitos como rombos</td><td>Fila de longitud casi cero</td><td>Sí, dibujados</td><td>Sí, decorativos</td><td>Sí, con duración cero real</td></tr>
            <tr><td>Sombreado de avance</td><td>Tercera serie</td><td>Forma superpuesta</td><td>No</td><td>Sí</td></tr>
            <tr><td>Control estético de marca</td><td>Medio</td><td>Total</td><td>Total</td><td>Recolorear tras exportar</td></tr>
          </tbody>
        </table>
        <p>Lee la columna «Formas» de arriba abajo y el patrón queda claro: lo que ganas en control visual lo pagas en todas y cada una de las filas en las que el calendario tiene que <em>saber</em> algo. Una línea conectora dibujada entre dos rectángulos parece exactamente una dependencia y no restringe absolutamente nada. Eso está bien mientras todo el mundo entienda que la diapositiva es la fotografía de un plan y no el plan.</p>
        <!--FIG:deps|Los enlaces reales restringen fechas. Una línea conectora dibujada entre dos rectángulos, no.-->`],

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
        <!--FIG:milestone|Los hitos son marcas de duración cero: los puntos de anclaje que una audiencia sí lee.-->
        <p>Un solo color de acento para lo crítico y grises para el resto resuelve el 90 % de las decisiones de diseño de una lámina de calendario.</p>
        <p>Y una advertencia sobre los hitos que se salta mucha gente al dibujar formas: un hito <strong>tiene duración cero</strong>. Si le das a «Apertura al público» un rectángulo de dos centímetros porque «se ve mejor», estás diciéndole al comité que la apertura dura una semana. Dibújalo como rombo sobre su fecha y escribe la fecha al lado. En el editor los hitos son un tipo de elemento propio: se pueden mover pero no ensanchar, precisamente para que este error no pueda cometerse.</p>`],
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
        <table>
          <thead><tr><th>Herramienta</th><th>Límites del plan gratuito</th><th>¿Pide registro?</th><th>Exportación</th><th>Ruta crítica</th></tr></thead>
          <tbody>
            <tr><td><strong>gantts.app</strong></td><td>Gratuita del todo · tareas y proyectos ilimitados</td><td><strong>No</strong></td><td>PDF, PNG, Excel, PPT</td><td><strong>Sí, gratis</strong></td></tr>
            <tr><td>GanttProject</td><td>Libre y de código abierto (escritorio)</td><td>No (descarga)</td><td>PDF, PNG, CSV</td><td>Sí</td></tr>
            <tr><td>OnlineGantt y webs pequeñas</td><td>Funciones básicas gratuitas</td><td>Variable / a menudo no</td><td>Imagen o PDF</td><td>Variable</td></tr>
            <tr><td>TeamGantt (plan gratuito)</td><td>~1 proyecto / ~60 tareas / equipo pequeño</td><td>Sí</td><td>Limitada en el gratuito</td><td>Planes de pago</td></tr>
            <tr><td>GanttPRO</td><td>Prueba gratuita, después de pago</td><td>Sí</td><td>Sí (de pago)</td><td>Sí (de pago)</td></tr>
            <tr><td>Instagantt</td><td>Freemium; capa gratuita limitada</td><td>Sí</td><td>Sí (planes superiores)</td><td>Sí (de pago)</td></tr>
            <tr><td>Canva</td><td>Capa gratuita de diseño</td><td>Sí</td><td>PNG, PDF</td><td>No (estático)</td></tr>
            <tr><td>Microsoft Project</td><td>De pago (sin plan gratuito)</td><td>Sí</td><td>Sí</td><td>Sí</td></tr>
            <tr><td>Excel y Google Sheets</td><td>Gratis si ya pagas el software</td><td>Cuenta Microsoft o Google</td><td>Nativa</td><td>No</td></tr>
          </tbody>
        </table>
        <p><strong>gantts.app</strong> — totalmente gratuito, tareas y proyectos ilimitados, sin registro. Exporta a PDF, PNG, Excel y PowerPoint. Ruta crítica incluida y gratuita. <em>(Es nuestra herramienta.)</em></p>
        <p><strong>GanttProject</strong> — gratuito y de código abierto, de escritorio. No requiere cuenta, solo descarga. Exporta a PDF, PNG y CSV, con ruta crítica.</p>
        <p><strong>OnlineGantt y otras herramientas web pequeñas</strong> — funciones básicas gratuitas, registro variable y a menudo innecesario, exportación a imagen o PDF. La ruta crítica depende de la herramienta.</p>
        <p><strong>TeamGantt (plan gratuito)</strong> — aproximadamente un proyecto, unas 60 tareas y un equipo reducido. Requiere registro y la exportación es limitada en el plan gratuito; la ruta crítica es de pago.</p>
        <p><strong>GanttPRO</strong> — prueba gratuita y después de pago, con registro. Exportación y ruta crítica en los planes de pago.</p>
        <p><strong>Instagantt</strong> — freemium con capa gratuita limitada y registro obligatorio. Exportación en planes superiores; ruta crítica de pago.</p>
        <p><strong>Canva</strong> — capa gratuita de diseño con registro. Exporta a PNG y PDF, pero el resultado es estático: no hay ruta crítica porque no hay motor de planificación.</p>
        <p><strong>Microsoft Project</strong> — de pago, sin plan gratuito. Exportación y ruta crítica completas.</p>
        <p><strong>Excel y Google Sheets</strong> — gratuitas si ya pagas el software. Exportación nativa, pero sin dependencias ni ruta crítica.</p>`],
      ['Los criterios que de verdad deciden',
        `<p>Las listas de funciones son una guía pésima, porque todas las herramientas dicen tenerlo todo. Lo que las separa es el <em>comportamiento bajo carga</em>: qué pasa cuando una fecha se mueve, cuando el plan crece, cuando alguien de fuera tiene que leerlo y cuando dejas de pagar. Cada criterio de abajo se comprueba en minutos y cada uno tiene su forma característica de fallar.</p>
        <table>
          <thead><tr><th>Criterio</th><th>Por qué decide el resultado</th><th>Cómo probarlo en cinco minutos</th><th>Qué aspecto tiene el fallo</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>¿Recalcula?</strong></td>
              <td>Separa un motor de programación de una herramienta de dibujo. Las dependencias reales propagan; las decorativas te dejan rearrastrando barras a mano.</td>
              <td>Enlaza tres tareas y retrasa la primera cuatro días.</td>
              <td>La segunda y la tercera no se mueven. El mantenimiento es tuyo para siempre.</td>
            </tr>
            <tr>
              <td><strong>Ruta crítica y holgura</strong></td>
              <td>Te dice qué tareas mandan sobre la fecha de entrega. Suele ser lo primero que se mete detrás del muro de pago, porque la gente paga por ello.</td>
              <td>Busca una columna de holgura, no solo barras de color. Cambia una duración y mira si el resaltado se mueve.</td>
              <td>Una «ruta crítica» que es un color que aplicaste tú, o una oferta de suscripción justo cuando la necesitas.</td>
            </tr>
            <tr>
              <td><strong>Exportación que abra un desconocido</strong></td>
              <td>Quien tiene que firmar no se va a crear una cuenta para leerlo. PDF, Excel y PowerPoint viajan a cualquier parte; un enlace compartido, no.</td>
              <td>Exporta y ábrelo en un dispositivo donde no hayas iniciado sesión.</td>
              <td>La exportación es de pago, lleva marca de agua o es solo un enlace que pide registrarse.</td>
            </tr>
            <tr>
              <td><strong>Escala</strong></td>
              <td>Las capas gratuitas están dimensionadas para demos. Un plan real tiene entre 150 y 300 filas, y ahí importan tanto el tope como la fluidez al dibujar.</td>
              <td>Pega 200 filas y desplázate por una línea de tiempo de 26 semanas.</td>
              <td>Un tope duro cerca de las 60 tareas, o un desplazamiento a tirones en cuanto el gráfico se ensancha.</td>
            </tr>
            <tr>
              <td><strong>Coste de salida</strong></td>
              <td>Nadie lo pregunta hasta que importa. El plan es tuyo solo si puedes sacarlo en un formato que otra cosa lea.</td>
              <td>Exporta a CSV y reimpórtalo en otro sitio. Comprueba que sobreviven las dependencias y la jerarquía, no solo los nombres.</td>
              <td>La exportación es un PDF de solo lectura, se pierden las dependencias, o los datos quedan detrás de una suscripción caducada.</td>
            </tr>
            <tr>
              <td><strong>Dónde viven los datos</strong></td>
              <td>Decide si puedes usarla siquiera. En obra pública y en trabajo para cliente, el pliego a veces excluye servidores de terceros.</td>
              <td>Comprueba si funciona con la red desconectada y qué dice la política de privacidad que se almacena.</td>
              <td>Enterarte en la auditoría de que el programa de trabajos está en un sitio que tu contrato no permite.</td>
            </tr>
          </tbody>
        </table>
        <!--FIG:tools|Hojas de cálculo, herramientas de diseño y motores de programación se parecen en pantalla. Divergen en el instante en que una fecha cambia.-->
        <p>Solo dos de estos son funciones en el sentido comercial. El resto solo se observa usando la herramienta — que es la razón por la que quince minutos con un plan realista valen más que una tarde de artículos comparativos, este incluido.</p>`],

      ['La prueba de los quince minutos, hecha de verdad',
        `<p>Para que esto no se quede en consejo abstracto, aquí está la prueba aplicada. Ingeniería Aránzazu S.L., seis personas en Bilbao, tiene que entregar el <strong>programa de trabajos</strong> de una licitación del Ayuntamiento: el pliego pide el cronograma en PDF y la trazabilidad de la ruta crítica, y la dirección técnica del cliente trabaja con MS Project. El plan real tiene 187 filas y 22 semanas.</p>
        <div class="worked">
          <p><strong>El protocolo.</strong> El mismo, idéntico, en cada herramienta, con un cronómetro:</p>
          <ol>
            <li>Pega las 187 filas del plan real. No 10 de prueba: 187. La mitad de los topes de los planes gratuitos aparecen aquí.</li>
            <li>Enlaza tres tareas encadenadas y retrasa la primera cuatro días. Mira si la segunda y la tercera se mueven solas.</li>
            <li>Carga el calendario laboral con los festivos de Bizkaia y comprueba que una tarea que cruza el 25 de julio se alarga.</li>
            <li>Activa la ruta crítica y busca una <em>columna de holgura</em> con números, no solo barras de color.</li>
            <li>Exporta a PDF y ábrelo en un móvil sin sesión iniciada. Ese móvil es el interventor.</li>
            <li>Exporta a CSV, reimpórtalo en otra herramienta y comprueba si sobreviven las dependencias y las fases, no solo los nombres.</li>
            <li>Desconecta la red y sigue trabajando dos minutos. Si el plan desaparece, ya sabes dónde vive.</li>
            <li>Mira el precio anual del plan que <em>de verdad</em> necesitas, no el de la portada.</li>
          </ol>
          <p><strong>Los resultados</strong>, sobre las cuatro candidatas que quedaron:</p>
          <table>
            <thead><tr><th>Prueba</th><th>Herramienta web freemium</th><th>Herramienta de diseño</th><th>GanttProject</th><th>gantts.app</th></tr></thead>
            <tbody>
              <tr><td>187 filas pegadas</td><td>Corta en 60</td><td>Sí, una a una</td><td>Sí</td><td>Sí</td></tr>
              <tr><td>Retraso que se propaga</td><td>Sí</td><td>No — son formas</td><td>Sí</td><td>Sí</td></tr>
              <tr><td>Festivos de Bizkaia</td><td>Sí</td><td>No</td><td>Sí</td><td>Sí</td></tr>
              <tr><td>Columna de holgura con cifras</td><td>Plan de pago</td><td>No</td><td>Sí</td><td>Sí (holgura total)</td></tr>
              <tr><td>PDF que abre un desconocido</td><td>Con marca de agua</td><td>Sí</td><td>Sí</td><td>Sí</td></tr>
              <tr><td>Vuelta desde CSV con dependencias</td><td>Parcial</td><td>No</td><td>Sí</td><td>Sí</td></tr>
              <tr><td>Funciona sin red</td><td>No</td><td>No</td><td>Sí</td><td>Sí</td></tr>
              <tr><td>Coste real al año, 6 usuarios</td><td>1.080 €</td><td>0 €</td><td>0 €</td><td>0 €</td></tr>
            </tbody>
          </table>
          <p><strong>Lo que decidió.</strong> No fue el precio: fueron las filas 1 y 5. La herramienta freemium se rompió al pegar el plan y volvió a romperse al exportar, y las dos veces el fallo apareció <em>después</em> de haber invertido tiempo. La herramienta de diseño produjo la lámina más bonita de las cuatro y suspendió la prueba 2 por diseño — sus barras son formas, y el pliego pedía trazabilidad de la ruta crítica, que es justo lo que un dibujo no puede acreditar.</p>
          <p><strong>Y lo que no resolvió ninguna de las gratuitas.</strong> La dirección técnica trabaja con MS Project y el intercambio en <code>.xml</code> siempre pierde algo por el camino; conviene acordar por escrito qué formato es el bueno, o entregar el PDF como documento contractual y el resto como cortesía. Ninguna de estas herramientas te ahorra esa conversación.</p>
          <p><strong>Una advertencia sobre la holgura</strong>, si acabas en gantts.app: la columna informa de la <strong>holgura total</strong>, una cifra por tarea. No hay columna de holgura libre. En un programa de trabajos con cadenas largas de tareas no críticas, dos jefes de tramo que planifiquen contra la holgura total se van a llevar los mismos días, y uno de los dos se llevará el disgusto. Trátala como un presupuesto de la cadena, no de cada tarea.</p>
        </div>`],

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
        <p>Sin línea base, cada vez que arrastras una barra el plan «siempre ha sido así». Es el equivalente a borrar el punto de partida. Y el problema no es el arrastre grande y evidente, que alguien discute en la reunión de seguimiento: es el goteo. Un día aquí, dos allá, treinta ediciones a lo largo de seis meses, cada una razonable por separado. Un plan que ha absorbido treinta retoques de un día tiene exactamente el mismo aspecto que uno que no se ha movido nunca. La línea base es lo que obliga a esos retoques a sumar.</p>
        <p>Conviene entender también qué <em>no</em> es. No es una previsión, no es un objetivo comercial y no es la fecha que le prometiste al cliente por teléfono. Es el plan que alguien aprobó, con nombre y fecha. Si esas tres cosas no coinciden, el problema está antes del diagrama de Gantt.</p>`],

      ['Cuándo fijarla, y cuándo no',
        `<p>Fíjala cuando el plan esté acordado y no antes: una línea base sobre un borrador solo genera desviaciones falsas. En la práctica, el momento suele ser el cierre del proyecto de ejecución, la formalización del contrato o —en obra— la firma del <strong>acta de comprobación del replanteo</strong>, que es el día en que el plazo empieza a contar de verdad. Ese es el punto en el que las estimaciones dejan de ser conjeturas.</p>
        <p>No la fijes mientras el alcance siga en discusión. Estarás midiendo contra una hipótesis. Y no la fijes a mitad de ejecución solo para tener una: una línea base capturada cuando ya llevas tres semanas de retraso congela ese retraso dentro del plan y a partir de ahí infravalora todo lo demás. Es peor que no tener nada, porque produce cifras precisas y tranquilizadoras.</p>
        <p>El otro error, más sutil: fijarla sobre un plan que sabes que está mal. Si quedan tareas con fechas de relleno, corrígelas primero. Una línea base ficticia genera desviaciones seguras, exactas y sin significado.</p>`],

      ['Un caso real: tres certificaciones mensuales',
        `<p>Rehabilitación del Mercado Municipal de la Rondilla, en Valladolid. Contrato de obras licitado por el ayuntamiento al amparo de la <strong>Ley 9/2017 de Contratos del Sector Público</strong>, adjudicado a Construcciones Alcorta S.L. por 1.240.000 € y con un plazo de ejecución de ocho meses. Dirección facultativa: Marta Iglesias, arquitecta. Jefe de obra: Javier Ferrán.</p>
        <div class="worked">
          <p><strong>Línea base, fijada el lunes 2 de marzo de 2026</strong></p>
          <p>Se fija el mismo día de la firma del acta de comprobación del replanteo, con el plan de obra ya visado y antes de que entre la primera máquina. Cinco filas, todas encadenadas fin-inicio (FS), todas críticas:</p>
          <ul>
            <li>Demoliciones y desamiantado — 2 mar a 20 mar (15 días laborables)</li>
            <li>Estructura y refuerzo de forjados — 23 mar a 8 may (30 días)</li>
            <li>Instalaciones (electricidad, clima, PCI) — 11 may a 19 jun (30 días)</li>
            <li>Albañilería y acabados — 22 jun a 31 jul (30 días)</li>
            <li>Recepción de la obra — 3 sep (hito)</li>
          </ul>
          <p>El calendario excluye fines de semana, los festivos de Castilla y León, Jueves y Viernes Santo (2 y 3 de abril) y <strong>agosto entero</strong>: por convenio la obra para y el equipo se va de vacaciones. Por eso la recepción cae en septiembre y no a primeros de agosto.</p>

          <p><strong>Certificación de marzo — 31 de marzo</strong></p>
          <p>La autoridad laboral tardó en aprobar el plan de trabajo del desamiantado y la retirada del fibrocemento de la cubierta arrancó cuatro días tarde. Demoliciones terminó el 26 de marzo en lugar del 20: <strong>desviación de fin +4 días</strong>. Estructura empezó el 27 de marzo — <strong>desviación de inicio +4</strong> — y, con la estimación intacta, su fin previsto se va al 14 de mayo, también +4. Todo lo que viene detrás arrastra los mismos +4 y la recepción se lee el 9 de septiembre.</p>
          <p>Léelo bien: es un problema de <em>arranque</em>, no de estimación. Nadie tardó más de lo previsto en desamiantar; se empezó tarde. La conversación en la visita de obra es con la tramitación, no con la cuadrilla.</p>

          <p><strong>Certificación de mayo — 29 de mayo</strong></p>
          <p>Al descubrir los forjados aparecieron dos crujías con la armadura mucho más deteriorada de lo que anticipaba el estudio geotécnico y las catas previas. La dirección facultativa lo deja por escrito en el <strong>Libro de Órdenes y Asistencias</strong> y el órgano de contratación aprueba un <strong>modificado del contrato</strong> de 45.800 € con una <strong>ampliación de plazo de seis días laborables</strong>.</p>
          <p>Estructura se reestima de 30 a 36 días y termina el 22 de mayo en vez del 8: <strong>desviación de fin +10 días</strong> — <strong>4 heredados</strong> y <strong>6 de desviación de duración</strong>, que es la noticia realmente nueva. Instalaciones arranca el 25 de mayo, desviación de inicio +10.</p>
          <p>Ese desglose es la razón de seguir el inicio y el fin por separado. «Estructura va diez días tarde» abre la conversación equivocada; «Estructura heredó cuatro y creció seis por un modificado aprobado» separa lo que fue tramitación de lo que fue obra oculta — y solo lo segundo genera derecho a ampliación de plazo.</p>

          <p><strong>Certificación de julio — 31 de julio</strong></p>
          <p>Instalaciones va al 60 % de avance frente al 75 % previsto, así que la reestimación tampoco era generosa. El pliego fija penalidades por demora por cada día de retraso sobre el plazo contractual, y Ferrán prefiere no llegar ahí: mete una segunda cuadrilla de acabados y baja Albañilería y acabados de 30 a 24 días, con un sobrecoste de 18.400 € que no estaba en la certificación de julio.</p>
          <p>Acabados muestra ahora <strong>desviación de duración −6 días</strong> y <strong>desviación de fin +4</strong>. La recepción cae el 9 de septiembre.</p>
          <p>Fíjate en lo que esa desviación negativa <em>no</em> significa. Nada fue más rápido: se compraron seis días con el tiempo de seis personas más, y una columna que solo mide días no puede enseñar eso. Aparecerá en la certificación, no en el Gantt.</p>

          <p><strong>Resumen honesto</strong></p>
          <p>Cuatro días laborables de retraso en la recepción: cuatro por la tramitación del desamiantado, seis por el modificado de estructura —con ampliación de plazo aprobada, así que a efectos contractuales no cuentan— y seis recomprados con una segunda cuadrilla a 18.400 €. Tres frases, tres responsables distintos, y ninguna se deduce de un porcentaje de avance global.</p>
        </div>`],

      ['Cuatro desviaciones, y qué esconde cada una',
        `<p>«Desviación» no es un único número. Merece la pena seguir cuatro, y cada una es ciega a algo que otra sí capta.</p>
        <table>
          <thead>
            <tr><th>Desviación</th><th>Qué es</th><th>Qué solo ella te dice</th><th>Dónde engaña</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>De inicio</strong></td>
              <td>Inicio real menos inicio de la línea base.</td>
              <td>Si el retraso era heredado: empezar tarde apunta a algo aguas arriba, a un permiso o a un recurso que no estaba libre.</td>
              <td>No dice nada del fin. Una tarea puede arrancar cinco días tarde y aun así terminar en fecha metiendo gente.</td>
            </tr>
            <tr>
              <td><strong>De fin</strong></td>
              <td>Fin real o previsto menos fin de la línea base.</td>
              <td>El impacto aguas abajo: es la cifra que se propaga por las dependencias hasta el hito de entrega.</td>
              <td>Mezcla lo heredado con lo nuevo. Los +10 de Estructura eran 4 heredados y 6 propios: dos problemas dentro de un número.</td>
            </tr>
            <tr>
              <td><strong>De duración</strong></td>
              <td>Duración real menos duración de la línea base.</td>
              <td>Si la estimación estaba mal — es la desviación de fin con la parte heredada descontada.</td>
              <td>Se vuelve negativa al acelerar una tarea, y eso se lee como ir adelantado. Los −6 de acabados costaron una cuadrilla entera.</td>
            </tr>
            <tr>
              <td><strong>De coste o de trabajo</strong></td>
              <td>Gasto o esfuerzo consumido frente al presupuestado.</td>
              <td>Lo que costó la recuperación. Es la única que detecta que has acelerado pagando.</td>
              <td>Exige datos reales introducidos. Sin gasto registrado no es una cifra pequeña: no existe.</td>
            </tr>
          </tbody>
        </table>
        <p>La de duración es la que casi todos los equipos se saltan y la única que cambia comportamientos: separa «llegamos tarde» de «estimamos mal», que son dos conversaciones muy distintas con dos soluciones muy distintas.</p>
        <!--FIG:baseline|La barra fantasma lleva la línea base; el hueco hasta la barra real es la desviación.-->`],

      ['Leer la desviación de inicio y de fin juntas',
        `<p>La desviación de inicio dice si la tarea arrancó cuando debía; la de fin, si terminó cuando debía. No siempre coinciden, y la combinación es informativa. Cuatro lecturas rápidas:</p>
        <ul>
          <li><strong>Inicio 0, fin 0.</strong> En plan. Ni la mires.</li>
          <li><strong>Inicio +n, fin +n.</strong> Retraso puro de arranque, arrastrado tal cual. La duración se cumplió. Mira aguas arriba: la predecesora, el permiso, el suministro.</li>
          <li><strong>Inicio 0, fin +n.</strong> Empezaste en fecha y tardaste más. La estimación estaba mal, o la tarea encontró algo que no estaba previsto. Este es el caso del modificado.</li>
          <li><strong>Inicio +n, fin menor que +n.</strong> Se recuperó parte del retraso. Bien, pero pregunta a costa de qué: casi siempre hay horas extra o una subcontrata detrás.</li>
        </ul>
        <p>Un signo positivo indica retraso respecto a la línea base; uno negativo, adelanto. En nuestro editor la desviación negativa se pinta en verde y la positiva en rojo, con la advertencia de siempre: el verde de una duración negativa puede ser una factura.</p>`],

      ['La desviación que importa es la de la ruta crítica',
        `<p>Una tarea con quince días de holgura que se retrasa tres días no ha hecho nada al proyecto. Una tarea crítica que se retrasa un día ha retrasado la entrega un día. Mirar la lista de desviaciones sin cruzarla con la ruta crítica lleva a gastar energía en el sitio equivocado.</p>
        <p>El procedimiento útil es ordenar por desviación de fin y luego marcar cuáles de esas tareas son críticas. Esa lista corta es tu informe de situación real. Contar «tareas retrasadas» sin mirar la holgura es exactamente como se consigue estar «al 80 % según plan» y tres semanas tarde a la vez.</p>
        <p>La trampa contraria también existe y es más traicionera: una tarea no crítica con +12 días de desviación y 14 de holgura está bien hoy y es crítica mañana. La holgura se consume; la desviación de una tarea con holgura es un aviso con fecha de caducidad, no una tarea que puedas ignorar para siempre.</p>`],

      ['Volver a fijar la línea base: modificado aprobado o borrado de pruebas',
        `<p>Es la decisión más consecuente que vas a tomar sobre una línea base, y casi nunca es técnica. Reprogramar la línea base pone todas las desviaciones a cero y hace desaparecer el registro de lo que se prometió al principio. Hay tres situaciones en las que es lo correcto:</p>
        <ul>
          <li><strong>Un modificado del contrato aprobado.</strong> Alguien con competencia para ello ha añadido o quitado obra, por escrito, con su expediente y su ampliación de plazo. Medir contra un plan que ya no describe el proyecto da una desviación correcta e inútil.</li>
          <li><strong>Una replanificación formal.</strong> Los números han dejado de guiar decisiones: todo marca +30 días y nadie distingue qué está empeorando.</li>
          <li><strong>Un reinicio tras una parada.</strong> Suspensión temporal, un invierno perdido, un recurso ante el tribunal de contratación. Las fechas viejas miden la parada, no el trabajo.</li>
        </ul>
        <p>Cualquier otro motivo es el mismo motivo con otra ropa: la desviación queda fea y el informe es el jueves. Reprogramar la línea base la semana antes de una comisión de seguimiento es la señal inequívoca. En nuestro ejemplo, rehacerla el 31 de julio habría dejado la recepción con 0 días de retraso — y seguiría siendo el 9 de septiembre.</p>
        <p>La prueba es sencilla: si la nueva línea base es legítima, puedes nombrar la decisión, la fecha y quién la aprobó. Si no puedes, estás borrando la evidencia de que algo se torció.</p>
        <p>Y cuando la reprogrames, conserva la anterior: guarda el plan en un archivo antes, porque el archivo se lleva la línea base dentro. La distancia entre la línea base 1 y la línea base 3 suele ser la descripción más honesta que existe de un proyecto, y es justo lo que destruye sobrescribirla.</p>`],

      ['Dónde encaja el valor ganado, y qué informa de verdad nuestra curva S',
        `<p>La desviación en días responde a «cuánto tarde». El <strong>valor ganado</strong> responde a «cuánto trabajo hemos ingresado por el tiempo y el dinero gastados». Depende de la línea base: sin ella, el <strong>Valor planificado</strong> no tiene a qué seguir. Nuestra curva S es explícita con sus límites, y conviene conocerlos antes de citar sus cifras en una certificación:</p>
        <ul>
          <li><strong>El valor planificado sigue la línea base si la tienes.</strong> Si no, el «plan» son tus fechas actuales, así que la <strong>Desviación de plazo</strong> sale cero por muy lejos que se haya movido todo. El diálogo lo dice en vez de mostrarte un cero halagador.</li>
          <li><strong>El coste real nunca se deduce del avance.</strong> Sale únicamente del gasto que hayas introducido tarea a tarea, en el campo <strong>Gastado</strong>. El atajo tentador —suponer que una tarea al 40 % ha consumido el 40 % de su presupuesto— hace que el <strong>Rendimiento del coste</strong> (CPI) valga exactamente 1,00 en todos los proyectos del mundo. Por eso, sin gasto real introducido, el CPI, la <strong>Desviación de coste</strong> y la <strong>Previsión a la finalización</strong> se informan como inexistentes, no como cero.</li>
          <li><strong>No meter costes es el caso normal.</strong> Entonces las tareas se ponderan por su duración en días laborables y obtienes una curva S de avance puro: la misma forma, leída en porcentaje en lugar de en euros.</li>
          <li><strong>La curva ganada del pasado está reconstruida.</strong> Guardamos el avance de hoy, no su historia, así que el tramo anterior asume que el avance se acumuló de forma uniforme por días laborables transcurridos. Exacta en la fecha de corte, aproximada por detrás, y etiquetada como tal.</li>
        </ul>
        <p>Dicho de otro modo: en el mercado de la Rondilla, mientras nadie introduzca el importe de las certificaciones en <strong>Gastado</strong>, la curva S te dirá si vas tarde, pero no te dirá nada sobre los 18.400 € de la segunda cuadrilla. Esa cifra hay que meterla.</p>
        <!--FIG:evmquad|Plazo y coste son ejes independientes: ir tarde y por debajo de presupuesto es un sitio real donde estar.-->`],

      ['Cómo se hace en gantts.app',
        `<p>El ciclo completo lleva menos de un minuto. Con la obra del mercado como ejemplo:</p>
        <ol>
          <li>Acuerda el plan primero. Fechas, dependencias y duraciones deben ser exactamente lo que quieres medir.</li>
          <li>Abre <strong>Línea base</strong> en la barra de herramientas. Sin ninguna guardada, el menú ofrece una sola acción: fijarla con el plan actual. Verás el aviso <em>«Línea base fijada — los retrasos se miden ahora frente a este plan»</em>.</li>
          <li>Aparecen barras fantasma bajo cada barra de tarea. Al reabrir el menú verás la fecha de captura y la casilla para ocultarlas si vas a usar <strong>▶ Presentar</strong> delante del ayuntamiento.</li>
          <li>Trabaja el plan. En cada certificación, arrastra las barras o edita <strong>Inicio</strong> y <strong>Fin</strong> en el panel de la tarea para reflejar la realidad: 26 de marzo en Demoliciones, 22 de mayo en Estructura.</li>
          <li>Vuelve a <strong>Línea base</strong> y activa las columnas de desviación. El aviso <em>«Mostrando columnas de línea base y desviación»</em> confirma que la tabla ya trae el inicio y el fin de la línea base junto a la desviación de cada uno. Lo tarde sale en rojo; lo adelantado, en verde.</li>
          <li>Recorre la desviación de fin y crúzala con <strong>Ruta crítica</strong> para ver cuáles de esos retrasos mueven la fecha de recepción. La leyenda <em>rayado = ruta crítica</em> te dice qué barras mirar.</li>
          <li>La desviación de duración es la diferencia entre los días de la línea base y los de la columna <strong>Días</strong>. Ábrela también en <strong>Tabla</strong> («El plan en tabla») si prefieres leer todo el plan de una vez.</li>
          <li>Para el avance, abre <strong>Curva S</strong> («Curva S — planificado vs real»). El diálogo indica si el <strong>Valor planificado</strong> sigue tu línea base o solo tus fechas actuales, y <strong>Cómo se calcula esto</strong> explica el resto.</li>
          <li>No uses <strong>Reprogramar</strong> para «arreglar» la desviación: compacta las tareas a sus fechas legales más tempranas y es una herramienta de planificación, no de seguimiento.</li>
          <li>Antes de cualquier reprogramación de la línea base, guarda una copia con <strong>⬇ Exportar</strong> → <strong>💾 Guardar proyecto (.gantts)</strong>, nombrada con la fecha del modificado. Después actualízala con el plan actual; el aviso <em>«Línea base actualizada al plan actual»</em> cierra el ciclo. Borrarla también se puede, y ambas acciones se deshacen.</li>
        </ol>
        <p><a href="/es/app.html">Abrir el editor</a>.</p>`],
    ],
    callout: 'Volver a fijar la línea base cada vez que el plan se desvía equivale a no tener línea base. El objetivo no es que la desviación sea cero: es saber cuánta hay, dónde está y si toca la ruta crítica. El fallo más habitual ni siquiera es técnico: se fija la línea base, la desviación empieza a incomodar y el equipo deja de mirarla. Una línea base que nadie lee es peor que ninguna, porque aparenta seguimiento sin serlo.',
    faq: [
      ['¿Qué diferencia hay entre línea base y plan actual?', 'La línea base son las fechas aprobadas y congeladas; el plan actual son las fechas vigentes, con los cambios ya aplicados. La desviación es la resta entre ambas.'],
      ['¿Cuándo debo fijar la línea base?', 'Cuando el plan esté aprobado y el alcance estable — típicamente al cierre del proyecto de ejecución, la formalización del contrato o la firma del acta de comprobación del replanteo. Fijarla a mitad de ejecución congela el retraso ya producido y lo esconde.'],
      ['¿Puedo tener varias líneas base?', 'En herramientas de gestión formal, sí. En gantts.app se mantiene una, que puedes actualizar o borrar; lo importante es guardar el archivo .gantts antes de cambiarla, porque el archivo se lleva la línea base dentro.'],
      ['¿Qué es una desviación aceptable?', 'Depende del proyecto, pero la pregunta útil no es el tamaño sino la ubicación: cualquier desviación sobre la ruta crítica se traslada directamente a la fecha de entrega. Una desviación grande con holgura de sobra es un aviso; una pequeña sin holgura es un retraso.'],
      ['¿Qué diferencia hay entre desviación de inicio, de fin y de duración?', 'La de inicio dice si el retraso venía heredado de aguas arriba. La de fin dice el impacto que se propaga hacia abajo. La de duración descuenta la parte heredada y muestra si tu estimación estaba mal. Solo la de duración distingue «llegamos tarde» de «estimamos mal».'],
      ['¿Debo reprogramar la línea base si el contrato se modifica?', 'Sí, ese es justo el caso legítimo: un modificado del contrato aprobado con su ampliación de plazo cambia el proyecto, y medir contra el plan anterior da una desviación correcta e inútil. Guarda el archivo con la línea base antigua antes de hacerlo y anota la fecha y quién lo aprobó.'],
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
    lead: 'Casi todos los diagramas de Gantt que fallan lo hacen por las mismas razones, y ninguna tiene que ver con la herramienta. Un diagrama puede estar limpio, bien coloreado y exportado todos los viernes, y aun así estar mintiendo sobre la fecha de entrega. Aquí tienes cada error, por qué está mal, cuánto cuesta en un plan real y la revisión que los detecta todos de una pasada.',
    figIntro: 'El mismo plan, antes y después de corregir lo esencial:',
    sections: [

      ['Un plan que comete casi todos estos errores a la vez',
        `<p>Un proyecto corriente — la nueva tienda online de <strong>Cerámicas Lubián</strong>, en Valladolid, que arranca el lunes 2 de marzo de 2026 — dibujado primero como lo dibuja casi todo el mundo y después dibujado con honestidad.</p>
        <div class="worked">
          <p><strong>Tal como se planificó.</strong> Seis filas, todas encadenadas fin-inicio, sin hitos y sin un solo día de margen. Presupuesto aprobado: 48.000 €.</p>
          <ul>
            <li>Descubrimiento — lun 2 de marzo a vie 13 de marzo (10 días)</li>
            <li>Diseño — lun 16 de marzo a vie 27 de marzo (10 días)</li>
            <li>Desarrollo — lun 30 de marzo a vie 24 de abril (20 días, Marta Iglesias)</li>
            <li>Migración de contenidos — lun 30 de marzo a vie 17 de abril (15 días, Marta Iglesias)</li>
            <li>QA — lun 27 de abril a vie 8 de mayo (10 días)</li>
            <li>Salida a producción — lun 11 de mayo</li>
          </ul>
          <p><strong>Lo que el diagrama no dice.</strong> Tres cosas, y las tres eran conocidas el día que se dibujó. La primera: el cliente tiene cinco días laborables para revisar el diseño, y esa revisión no aparece por ninguna parte. La segunda: la Semana Santa cae justo encima del arranque del desarrollo — el jueves 2 y el viernes 3 de abril son festivos, y media plantilla tiene vacaciones esa semana; el plan cuenta esos días como si fueran laborables. La tercera: Marta Iglesias está asignada al 100 % a Desarrollo y al 100 % a Migración de contenidos durante las mismas tres semanas, es decir, el diagrama supone en silencio un 200 % de una sola persona. Y como las seis filas cuelgan de una única cadena fin-inicio, las seis son críticas: no hay ni una hora de holgura en cincuenta días laborables.</p>
          <p><strong>Corregido.</strong> Se añade el hito <em>Diseño aprobado</em> y la revisión del cliente se modela como desfase (FS+5d). Con los festivos de Semana Santa fuera del calendario laboral, la aprobación cae el martes 7 de abril. Desarrollo va del miércoles 8 de abril al miércoles 6 de mayo — descontando el 1 de mayo. Migración de contenidos no puede solaparse mientras Marta lleve las dos, así que va del jueves 7 al miércoles 27 de mayo. QA detrás, del jueves 28 de mayo al miércoles 10 de junio. Cinco días de holgura visible antes del corte dejan la salida a producción el <strong>viernes 19 de junio de 2026</strong>.</p>
          <p><strong>La consecuencia.</strong> El diagrama decía 11 de mayo. La fecha honesta era el 19 de junio: 29 días laborables más tarde, descubiertos en el primer borrador en lugar de a mediados de mayo, con la tienda a medias y el proveedor de fotografía ya facturando. No cambió nada del proyecto. Solo se escribieron tres cosas que ya eran verdad.</p>
          <p><strong>Y el reporte.</strong> El lunes 20 de abril el informe de seguimiento daba Desarrollo al 60 %, porque habían transcurrido 12 de sus 20 días. El equipo llevaba 4 de las 11 plantillas de página terminadas. Avance real: 36 %. Con el presupuesto repartido por duración, el informe también daba 28.800 € de valor ganado donde en realidad había 17.280 €.</p>
        </div>
        <p>Nueve de los doce errores de esta guía están en ese plan de seis filas. Ninguno es un error de dibujo.</p>`],

      ['1. Exceso de detalle',
        `<p>El fallo más frecuente con diferencia. Un diagrama con doscientas filas no se mantiene: se abandona. Nadie actualiza sesenta barras cada semana, así que a los pocos días el archivo describe un proyecto que ya no existe, y a partir de ahí cada reunión se dedica a explicar por qué el plan no coincide con la realidad.</p>
        <p>Hay además un efecto perverso: cuanto más detalle tiene el plan, más convincente parece, y más tarda alguien en atreverse a decir que está desactualizado.</p>
        <p><strong>Corrección:</strong> planifica al nivel al que reportas. Si tu ciclo de seguimiento es semanal, cualquier cosa que dure menos de una semana vive dentro de una tarea, no como una fila propia. Agrupa en fases y deja la lista de trabajo fino donde el equipo ya trabaja de verdad.</p>`],

      ['2. Sin dependencias',
        `<p>Un diagrama de barras paralelas sin enlaces es un dibujo, no un plan. Cuando algo se retrasa, no se mueve nada, porque no hay nada conectado — y hay que reajustar fechas a mano, cambio a cambio, hasta que alguien se cansa.</p>
        <p>Sin dependencias tampoco hay ruta crítica que calcular, ni holgura que medir, ni aviso de nada. Enlazar las tareas es lo que convierte el dibujo en un modelo.</p>
        <p><strong>Corrección:</strong> enlaza lo que de verdad condiciona, y después arrastra una barra y mira. Si detrás no se mueve nada, el plan no está modelando tu proyecto.</p>`],

      ['3. Todo encadenado fin-inicio',
        `<p>El error contrario, y más sutil. Pon todas las tareas en una única fila india y todas acaban en la ruta crítica: sesenta filas diciendo «urgente», que es exactamente lo mismo que no decir nada. Además vuelve imposible replanificar, porque cada fecha está clavada por una preferencia y no por una restricción.</p>
        <!--FIG:cpm|Solo el camino más largo de la red fija la fecha de fin.-->
        <p>La prueba es sencilla: pregunta de cada enlace «si mañana tuviera gente y materiales, ¿podría empezar B sin que A hubiera terminado?». Si la respuesta es sí, ese enlace expresa una costumbre, no una restricción física.</p>
        <p><strong>Corrección:</strong> enlaza solo lo que condiciona materialmente. Una ruta crítica sana cubre entre la cuarta parte y la mitad de las tareas; si las cubre todas, has dibujado una cola, no una red.</p>`],

      ['4. Tratar las estimaciones como compromisos',
        `<p>Todas las barras parecen igual de firmes. Una tarea de tres días que has hecho cincuenta veces y otra que no ha intentado nadie se dibujan exactamente igual, y en cuanto entran en el gráfico las dos se leen como promesas.</p>
        <p><strong>Corrección:</strong> pon la holgura donde está la incertidumbre y dilo en voz alta. Un plan que admite qué partes son conjeturas sobrevive al contacto con la realidad, precisamente porque a las conjeturas se les dio sitio para equivocarse. En el campo <strong>Notas</strong> de cada tarea cabe perfectamente un «estimación firme» o un «± 3 días, depende del proveedor».</p>`],

      ['5. Cero holgura en todo el plan',
        `<p>Un plan en el que cada tarea empieza el mismo día que termina su predecesora no puede absorber nada. El primer retraso de dos días es un retraso de dos días en la entrega, y a partir de ahí todos los siguientes se acumulan.</p>
        <!--FIG:float|La holgura es el margen que tiene una tarea antes de empezar a mover la fecha de fin.-->
        <p>Si ninguna tarea tiene margen, todas son críticas y cualquier imprevisto mueve la entrega. Un plan sin holgura no es ambicioso: es frágil. La holgura se planifica, no se improvisa.</p>
        <p><strong>Corrección:</strong> concentra el colchón donde se concentra el riesgo — antes de una fecha comprometida, después de cualquier cosa que dependa de un tercero, alrededor de las aprobaciones y justo antes de agosto. Cinco días de holgura visibles antes de la salida a producción valen mucho más que cinco días repartidos invisiblemente entre diez tareas, porque los primeros se pueden defender en una reunión y los segundos desaparecen en la primera negociación.</p>`],

      ['6. Ignorar la ruta crítica',
        `<p>Si no sabes qué tareas mandan sobre la fecha final, no puedes saber qué retrasos importan. Optimizar tareas que no están en la ruta crítica se siente productivo y no adelanta el proyecto ni un día: los equipos aceleran trabajo que tenía tres semanas de holgura mientras la restricción real se desliza dos filas más abajo.</p>
        <p><strong>Corrección:</strong> activa <strong>Ruta crítica</strong> y vuelve a mirarla después de cada cambio, no una vez al principio. La ruta se mueve: una tarea con ocho días de holgura pasa a ser crítica en el momento en que se retrasa nueve.</p>`],

      ['7. Tareas sin responsable — y responsables al 100 %',
        `<p>Una tarea sin un nombre al lado es tarea de todos, lo que en la práctica significa de nadie. Una persona por tarea, no un equipo: solo a una persona se le puede preguntar cómo va.</p>
        <p>Menos evidente, y bastante más caro: asignar a la misma persona dos tareas solapadas a plena dedicación es el mismo error con otra cara. Marta al 100 % y al 100 % no es ambición, es una imposibilidad aritmética — y el diagrama no protesta, porque las barras se solapan tan tranquilas.</p>
        <p><strong>Corrección:</strong> revisa la carga de cada responsable a lo largo de todo el calendario, no tarea por tarea. Alguien al 140 % durante tres semanas es un plan que ya ha fracasado, aunque todavía se vea verde.</p>`],

      ['8. Dejar que se quede obsoleto',
        `<p>Un diagrama de Gantt es un documento vivo con fecha de caducidad. Tres semanas sin actualizar y la gente deja de fiarse; poco después deja de mirarlo, y el proyecto pasa a gestionarse por correo.</p>
        <p><strong>Corrección:</strong> actualiza con una cadencia fija — semanal en condiciones normales, diaria en una crisis — y mantén el diagrama lo bastante pequeño como para que eso cueste minutos. Si actualizarlo cuesta demasiado, casi siempre es por el error número 1 o el número 2.</p>`],

      ['9. Sin hitos',
        `<p>Un muro de barras no le da al lector nada donde agarrarse. Los hitos son la forma que tiene alguien de fuera del proyecto de encontrar los puntos de decisión, y lo que impide que el trabajo avance fuera de secuencia.</p>
        <p><strong>Corrección:</strong> marca aprobaciones, entregas, inspecciones y la salida a producción como hitos de duración cero, y cuelga de ellos el trabajo posterior. Entre cuatro y ocho suele ser lo correcto. Arriba, el hito que faltaba no era decorativo: <em>Diseño aprobado</em> era exactamente donde estaban escondidos los cinco días de revisión del cliente.</p>`],

      ['10. Medir el avance en días transcurridos',
        `<p>De todo lo que hay en esta lista, esto es lo que produce el reporte equivocado más seguro de sí mismo. Si el avance se deduce de la duración transcurrida, una tarea que nadie ha empezado informa de un 60 % el día doce de veinte — justo lo que pasó el 20 de abril en el ejemplo.</p>
        <p><strong>Corrección:</strong> reporta una fracción del trabajo — plantillas terminadas, planos emitidos, casos de prueba superados, metros cuadrados alicatados — y no una fracción del calendario. Una tarea que no tiene ninguna unidad contable de trabajo es demasiado gruesa para hacerle seguimiento y probablemente haya que partirla.</p>`],

      ['11. Volver a fijar la línea base cada vez que se incumple',
        `<p>La línea base registra lo que prometiste. Volver a guardarla cada vez que la desviación incomoda la convierte en un registro de lo último que hiciste — un dato que ya tenías.</p>
        <div class="worked">
          <p>Grupo Alcorta lo hizo cada mes durante medio año en la reforma de su nave de Getafe. En el comité de junio el proyecto salía «en plazo» contra su sexta línea base. Contra la primera, la que se aprobó junto al presupuesto de 310.000 €, acumulaba cuatro meses de retraso. Las seis fotos eran correctas; el álbum era una mentira.</p>
        </div>
        <p><strong>Corrección:</strong> vuelve a fijar la línea base solo ante un cambio de alcance aprobado o una replanificación formal, y guarda las anteriores. La distancia entre la línea base 1 y la línea base 5 suele ser la descripción más honesta que tendrás nunca de un proyecto.</p>`],

      ['12. Usar un Gantt para lo que no es',
        `<p>Los diagramas de Gantt sirven para trabajo con secuencia, dependencias y fechas. Encajan mal con el flujo continuo y con un backlog que se reprioriza cada lunes; si te ves redibujando el plan entero todas las semanas, el problema no es tu plan, es que has elegido la representación equivocada.</p>
        <p><strong>Corrección:</strong> Gantt cuando importan el orden y los plazos, tablero cuando no. Llevar los dos es lo normal: un tablero para la semana y un Gantt para el trimestre.</p>`],

      ['El síntoma de cada error',
        `<p>Casi siempre es más fácil reconocerlos por el síntoma que por la definición:</p>
        <table>
          <thead><tr><th>Lo que notas</th><th>El error</th><th>La corrección</th></tr></thead>
          <tbody>
            <tr><td>Lleva tres semanas sin actualizarse</td><td>Exceso de detalle</td><td>Planificar al nivel al que reportas</td></tr>
            <tr><td>Una tarea se retrasa y no se mueve ninguna fecha</td><td>Sin dependencias</td><td>Enlazar lo que condiciona; arrastrar una barra para probar</td></tr>
            <tr><td>Todas las tareas son críticas</td><td>Todo encadenado fin-inicio</td><td>Borrar los enlaces que solo expresan preferencia</td></tr>
            <tr><td>Retrasos pequeños mueven la fecha final</td><td>Cero holgura</td><td>Colchones visibles antes de las fechas comprometidas</td></tr>
            <tr><td>Aceleraste la tarea equivocada</td><td>Ruta crítica ignorada</td><td>Activarla y revisarla tras cada cambio</td></tr>
            <tr><td>Preguntas por una tarea y no contesta nadie</td><td>Sin responsable</td><td>Una persona con nombre por tarea</td></tr>
            <tr><td>Las tareas de una misma persona se retrasan juntas</td><td>Asignada por encima del 100 %</td><td>Revisar la carga en todo el calendario</td></tr>
            <tr><td>«Entonces, ¿qué pasa y cuándo?»</td><td>Sin hitos</td><td>De cuatro a ocho puntos de control, con trabajo detrás</td></tr>
            <tr><td>Un mes entero al 90 %</td><td>Avance por días transcurridos</td><td>Reportar fracción de trabajo</td></tr>
            <tr><td>Verde cada semana y meses de retraso</td><td>Línea base regrabada en cada incumplimiento</td><td>Refijarla solo en replanificaciones aprobadas</td></tr>
            <tr><td>Se reescribe entero todos los lunes</td><td>Herramienta equivocada</td><td>Usar un tablero para el flujo</td></tr>
          </tbody>
        </table>`],

      ['Una revisión de veinte minutos',
        `<p>Pasa esto por un diagrama que ya tengas, en orden. Cada paso es algo que se ve, no algo que haya que opinar.</p>
        <ol>
          <li>Cuenta las filas. ¿Son más de las que vas a actualizar cada semana? Agrupa el detalle en fases con <strong>▣ Grupo</strong> antes de seguir.</li>
          <li>Arrastra la última tarea de la primera fase dos semanas a la derecha. Todo lo que no se mueva detrás no está enlazado. Deshaz y añade esos enlaces en la columna <strong>Después de</strong>, o en el campo <strong>Después de (predecesoras)</strong> del panel de la tarea.</li>
          <li>Activa <strong>Ruta crítica</strong>. Si sale todo rayado, has enlazado de más; si no sale nada, no has enlazado nada.</li>
          <li>Abre <strong>Calendario</strong> y comprueba que los festivos nacionales y autonómicos de tu comunidad, la Semana Santa y el parón de agosto están marcados. Un plan que trabaja el 15 de agosto no es un plan optimista, es un plan mal contado.</li>
          <li>Pon <strong>Vista</strong> en <strong>Próximas semanas</strong>. Si esa ventana no se parece a lo que la gente está haciendo esta semana, el diagrama ya está obsoleto.</li>
          <li>Abre <strong>Carga de trabajo</strong>. Cualquiera que aparezca por encima de su capacidad un solo día es una promesa imposible dentro de un diagrama verosímil.</li>
          <li>Busca rombos. Cada punto en el que alguien de fuera del equipo aprueba, entrega o inspecta debería ser un <strong>◆ Hito</strong>, con el tiempo de revisión metido en el desfase.</li>
          <li>Mira la fila anterior a cada fecha comprometida. Si termina el mismo día que vence el plazo, inserta una tarea de colchón y llámala por su nombre.</li>
          <li>Usa <strong>Reprogramar</strong> una vez para compactar el plan a sus fechas legales más tempranas, y compara el resultado con lo que tenías. La diferencia es la holgura que estabas regalando sin saberlo.</li>
          <li>Abre <strong>Línea base</strong> y fíjala — ahora, una sola vez, cuando el plan ya es honesto. Después activa las columnas de desviación.</li>
          <li>Pide a cada responsable el avance en unidades de trabajo, no en porcentaje. Donde la respuesta y la barra no coincidan, la que está mal es la barra. Revisa la <strong>Curva S</strong> antes de dar el plan por bueno.</li>
        </ol>`],
    ],
    callout: 'Fíjate en lo pocos que son errores de diagramación. Cambiar de herramienta no corrige casi ninguno: una dependencia que falta, una persona sobreasignada y una línea base regrabada en silencio son decisiones, y te siguen a cualquier software al que te mudes.',
    faq: [
      ['¿Cuál es el error más común en un diagrama de Gantt?', 'El exceso de detalle. Los diagramas que listan cada subtarea se vuelven ilegibles y se abandonan en pocas semanas, porque mantenerlos al día cuesta más de lo que devuelven.'],
      ['¿Cuántas tareas debe tener un diagrama de Gantt?', 'Las suficientemente pocas como para que vayas a mantenerlo: para la mayoría de proyectos, entre 15 y 40 filas. Cualquier cosa más corta que tu ciclo de seguimiento vive dentro de una tarea.'],
      ['¿Hay que enlazar todas las tareas fin-inicio?', 'No. Encadenarlo todo en una sola línea mete todas las tareas en la ruta crítica y hace imposible resecuenciar el plan. Enlaza solo lo que condiciona materialmente.'],
      ['¿Por qué se me retrasa el proyecto si el diagrama pintaba bien?', 'Casi siempre por una de tres: cero holgura, alguien asignado por encima del 100 % en tareas solapadas, o avance medido como duración transcurrida en vez de trabajo hecho.'],
      ['¿Está mal volver a fijar la línea base?', 'Está bien ante un cambio de alcance aprobado o una replanificación formal. Regrabarla cada vez que se incumple, no: los informes siguen en verde mientras la fecha de entrega se aleja.'],
      ['¿Cada cuánto hay que actualizar un diagrama de Gantt?', 'Semanalmente en la mayoría de proyectos y a diario en una crisis. Importa menos la frecuencia exacta que el hecho de que sea fija y sostenible.'],
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
    lead: 'Una <strong>tarea</strong> ocupa tiempo; un <strong>hito</strong> marca un momento. Esa es toda la diferencia técnica, y sin embargo tiene consecuencias que se miden en días: un hito modelado como una tarea de tres días añade tres días a tu fecha de fin sin que nadie lo note, y esconde justo el retraso al que estás más expuesto.',
    figIntro: 'Barras para el trabajo, rombos para los momentos que importan:',
    sections: [
      ['La diferencia en una línea',
        `<p>Una tarea consume tiempo y recursos: tiene inicio, fin y duración. Un hito no tiene duración ninguna — es un punto que señala que algo ha ocurrido. Por eso se dibuja como un rombo: no hay nada sobre lo que trazar una barra.</p>
        <p>La prueba práctica dura un segundo. <em>¿Alguien puede trabajar en ello?</em> Se puede trabajar en redactar un contrato. No se puede trabajar en «contrato firmado»: o ha ocurrido o no ha ocurrido.</p>
        <p>Esa distinción no es cosmética. Cambia cómo se calcula la fecha de fin, qué aparece en el resumen para dirección y a quién se llama por teléfono cuando algo se tuerce.</p>
        <!--FIG:milestone|El hito ocupa un único punto en el tiempo; la barra que tiene a cada lado es el trabajo.-->`],

      ['Un ejemplo trabajado: el reetiquetado de Conservas Aldán',
        `<p>Un proyecto seguido de principio a fin. Conservas Aldán (Vigo) rehace el arte final y el etiquetado de una gama de 40 referencias para adaptarla al Reglamento (UE) 1169/2011 sobre información alimentaria facilitada al consumidor. Marta Iglesias lleva el proyecto. Semana de cinco días laborables, arranque el lunes 2 de marzo de 2026, presupuesto de campaña de 12.500 €.</p>
        <div class="worked">
          <table>
            <thead><tr><th>Fila</th><th>Tipo</th><th>Duración</th><th>Inicio</th><th>Fin</th></tr></thead>
            <tbody>
              <tr><td>Conceptos de arte final</td><td>Tarea</td><td>10 d</td><td>lun 2 mar</td><td>vie 13 mar</td></tr>
              <tr><td>Revisión interna y correcciones</td><td>Tarea</td><td>4 d</td><td>lun 16 mar</td><td>jue 19 mar</td></tr>
              <tr><td><strong>Arte final congelado</strong></td><td>Hito</td><td>0 d</td><td colspan="2">jue 19 mar</td></tr>
              <tr><td>Verificación de etiquetado (laboratorio acreditado ENAC)</td><td>Tarea</td><td>8 d</td><td>vie 20 mar</td><td>mar 31 mar</td></tr>
              <tr><td><strong>Etiquetado conforme aprobado</strong></td><td>Hito</td><td>0 d</td><td colspan="2">mar 31 mar</td></tr>
              <tr><td>Pruebas de color del impresor</td><td>Tarea</td><td>6 d</td><td>mié 1 abr</td><td>vie 10 abr</td></tr>
              <tr><td><strong>Prueba de color firmada</strong></td><td>Hito</td><td>0 d</td><td colspan="2">vie 10 abr</td></tr>
              <tr><td>Tirada de impresión</td><td>Tarea</td><td>15 d</td><td>lun 13 abr</td><td>lun 4 may</td></tr>
              <tr><td>Transporte al centro de distribución</td><td>Tarea</td><td>7 d</td><td>mar 5 may</td><td>mié 13 may</td></tr>
              <tr><td><strong>Cambio de lineal en la cadena</strong></td><td>Hito</td><td>0 d</td><td colspan="2">jue 14 may</td></tr>
            </tbody>
          </table>
          <p>Cinco hitos, cinco tareas. Tres de ellos — arte final congelado, etiquetado conforme aprobado, prueba de color firmada — son momentos en los que alguien <em>de fuera</em> del equipo tiene que actuar. Esa es la razón de colocarlos.</p>
          <p>Fíjate en dos cosas del calendario. Las pruebas de color duran seis días laborables pero terminan el viernes 10 de abril y no el miércoles 8: por medio caen el Jueves Santo (2 de abril) y el Viernes Santo (3 de abril). Y la tirada de 15 días se come el 1 de mayo. Un calendario laboral que ignore la Semana Santa y los festivos te devuelve un plan que ya nace con dos días de mentira dentro.</p>
          <p>Lee solo las filas de hito y tienes el proyecto en una frase: arte final congelado el 19 de marzo, etiquetado aprobado el 31 de marzo, prueba firmada el 10 de abril, producto en lineal el 14 de mayo. Cuatro fechas. Eso es lo que la dirección comercial de la cadena recuerda; las diez barras no las recuerda nadie.</p>
        </div>`],

      ['Qué pasa cuando un hito se retrasa',
        `<p>El laboratorio acreditado presupuesta ocho días y tarda trece: hay una consulta sobre la declaración de alérgenos y el tamaño mínimo de letra de la información nutricional. La verificación termina el jueves 9 de abril en lugar del martes 31 de marzo.</p>
        <div class="worked">
          <table>
            <thead><tr><th>Hito</th><th>Planificado</th><th>Previsión</th><th>Desviación</th></tr></thead>
            <tbody>
              <tr><td>Arte final congelado</td><td>jue 19 mar</td><td>jue 19 mar</td><td>0 d</td></tr>
              <tr><td>Etiquetado conforme aprobado</td><td>mar 31 mar</td><td>jue 9 abr</td><td>5 d</td></tr>
              <tr><td>Prueba de color firmada</td><td>vie 10 abr</td><td>vie 17 abr</td><td>5 d</td></tr>
              <tr><td>Cambio de lineal en la cadena</td><td>jue 14 may</td><td>jue 21 may</td><td>5 d</td></tr>
            </tbody>
          </table>
          <p>Los cinco días son días laborables: entre el 31 de marzo y el 9 de abril hay nueve días de calendario, pero dos son festivos de Semana Santa y cuatro caen en fin de semana. Esa cadena no tiene holgura, así que el retraso llega íntegro a la fecha de lineal. Esas cuatro filas son el informe de seguimiento completo, y existen únicamente porque esos puntos se modelaron como hitos.</p>
        </div>
        <p>Que se retrase una tarea significa que el trabajo está llevando más de lo previsto y todavía puede absorberse. Que se retrase un hito significa que se ha movido un compromiso. A la cadena de distribución le da igual que las pruebas de color llevaran siete días en vez de seis; le importa que el cambio de lineal ya no es el 14 de mayo sino el 21.</p>`],

      ['Tarea o hito: en qué se comportan distinto de verdad',
        `<p>No es una convención de dibujo. Cambia el comportamiento en seis sitios.</p>
        <table>
          <thead><tr><th>Dimensión</th><th>Tarea</th><th>Hito</th></tr></thead>
          <tbody>
            <tr><td>Duración</td><td>Un día o más. Consume calendario y esfuerzo.</td><td>Cero. Inicio y fin son la misma fecha.</td></tr>
            <tr><td>Dependencias</td><td>Predecesoras y sucesoras, casi siempre fin-inicio (FS).</td><td>Necesita al menos una de cada, o es decoración.</td></tr>
            <tr><td>Un retraso significa</td><td>El trabajo llevó más tiempo; la holgura o más recursos pueden recuperarlo.</td><td>Un compromiso se ha movido. Recuperarlo exige replanificar, no apretar.</td></tr>
            <tr><td>Recursos</td><td>Un responsable que ejecuta, normalmente con coste asociado.</td><td>Un responsable que persigue. El esfuerzo suele ser cero.</td></tr>
            <tr><td>Cómo se exporta</td><td>Barra en PDF, PNG y PowerPoint; fin real y número de días en Excel y CSV; evento de varios días en el calendario.</td><td>Rombo en las exportaciones visuales; fin vacío y duración 0 en Excel y CSV; evento de un solo día en el calendario.</td></tr>
            <tr><td>Quién lo lee</td><td>Quien hace el trabajo y su responsable directo.</td><td>Dirección, cliente, organismos, la diapositiva de resumen.</td></tr>
          </tbody>
        </table>
        <p>La fila de exportación es la que sorprende. Pon la vista en solo hitos, exporta, y tienes un cronograma de una página para un comité sin construir un segundo diagrama — pero solo si tus hitos son hitos de verdad.</p>`],

      ['Lo que cuesta equivocarse',
        `<p>Modela ahora «Etiquetado conforme aprobado» como lo escribe casi todo el mundo la primera vez: una tarea llamada «conseguir el visto bueno del laboratorio», tres días, entre la verificación y las pruebas de color.</p>
        <div class="worked">
          <ol>
            <li><strong>Se mueve la fecha de fin.</strong> Tres días de duración inventada empujan el cambio de lineal del jueves 14 de mayo al martes 19 de mayo. El trabajo no ha cambiado; ha cambiado el modelo. Y esos tres días te los descuentas de la ventana comercial que negociaste, no del laboratorio.</li>
            <li><strong>Desaparece la puerta.</strong> «Conseguir el visto bueno» se lee como algo que haces tú; «Etiquetado conforme aprobado» se lee como algo que hace el laboratorio. Lo primero no invita a nadie a perseguirlo, y lo segundo obliga a poner un nombre al lado.</li>
            <li><strong>Se rompe el resumen.</strong> Filtra por hitos y aparecen cuatro filas en vez de cinco, y falta precisamente el punto que más depende de terceros.</li>
          </ol>
        </div>
        <p>El error contrario sale más barato pero también existe: convertir «Tirada de impresión» en un hito porque suena importante. Quince días de máquina se evaporan y la ruta crítica rodea el elemento más largo del plan. La importancia decide si algo aparece en el diagrama; la duración decide su forma.</p>`],

      ['Para qué sirven realmente los hitos',
        `<p>Los hitos existen para quien lee, no para quien ejecuta. Son la forma que tiene alguien que no vive dentro de tu proyecto de encontrar los momentos que importan: aprobaciones, entregas, puertas, salida a mercado. Son <em>puntos de control</em>, son <em>lenguaje de dirección</em> y son <em>barreras de secuencia</em>.</p>
        <p>Esa tercera función es la menos evidente y la más útil. «Arte final congelado», con la verificación de laboratorio colgando de él, dice algo que «congelar el arte final» no dice: nada de lo que viene después arranca hasta que esto ocurra. Cuando el diseñador entrega una revisión el 24 de marzo, el diagrama enseña una regla rota, no una fecha que se desplaza.</p>
        <!--FIG:deps|Un hito se gana su sitio por estar en medio: predecesoras que deben terminar, sucesoras que no pueden empezar.-->
        <p>Un hito sin enlaces por ningún lado es candidato a borrarse. Si nada espera a que ocurra, es una nota al margen — y las notas van en el campo <strong>Notas</strong>, no en la línea de tiempo.</p>`],

      ['¿Cuántos debería tener un proyecto?',
        `<p>Los suficientes para contar la historia y no tantos como para diluirla. De cuatro a ocho es un rango razonable en un proyecto de unos meses; cien hitos son tareas disfrazadas de rombo.</p>
        <p>Una prueba: ¿podrías describir el avance usando solo los hitos? Conservas Aldán tiene cinco para un proyecto de diez semanas — el extremo alto del rango, justificado porque cuatro son entregas o aprobaciones de terceros. La forma habitual de pasarse es poner un rombo al final de cada fase por simetría; las fases ya tienen su barra resumen y no necesitan que las remates con un adorno.</p>
        <p>La segunda forma habitual de pasarse es convertir en hito cada fecha que aparece en un correo. El alta en el registro sanitario, la fecha del pedido de cartonaje y la reunión de seguimiento del martes no son tres hitos: el primero lo es, el segundo es el inicio de una tarea y el tercero no pinta nada en un cronograma.</p>`],

      ['Cómo se hace en gantts.app',
        `<p>El plan de Conservas Aldán en el editor, con los botones tal y como están etiquetados.</p>
        <ol>
          <li>Pulsa <strong>✨ Pegar a Gantt</strong> y pega el esquema. Una línea que acaba en <code>!</code> se convierte en hito, <code>(10d)</code> fija la duración, <code>after Nombre</code> enlaza una predecesora y una <code>#</code> inicial crea una fase — por ejemplo <code>Arte final congelado ! after Revisión interna</code>.</li>
          <li>A mano en su lugar: <strong>＋ Tarea</strong> para las filas de trabajo, <strong>◆ Hito</strong> para los rombos y <strong>▣ Grupo</strong> para una fase que agrupe lo anterior.</li>
          <li>Abre <strong>Calendario</strong> y marca los festivos: Jueves y Viernes Santo, el 1 de mayo y los autonómicos que apliquen. Si no lo haces, el plan colocará trabajo en días en los que la imprenta está cerrada.</li>
          <li>¿Escribiste un hito como tarea? Haz doble clic en su fila y cambia <strong>Tipo</strong> de tarea a hito. Su fin se colapsa sobre su inicio; no hace falta borrarlo y volver a crearlo.</li>
          <li>En ese mismo panel rellena <strong>Después de (predecesoras)</strong> y <strong>Responsable</strong>. Sin predecesora, el hito no se moverá cuando se mueva el trabajo que tiene delante, y ahí es donde nacen los cronogramas que mienten.</li>
          <li>Pulsa <strong>Reprogramar</strong> para empujar cada fila a la fecha más temprana que permiten sus dependencias. Así descubres si tus fechas de hito eran consecuencias o deseos.</li>
          <li>Activa <strong>Ruta crítica</strong> y comprueba que la cadena que pasa por tus puertas es la que fija la fecha final. La leyenda lo dice: <em>rayado = ruta crítica</em>.</li>
          <li>Abre <strong>Línea base</strong> y guarda el plan antes de empezar. Verás el aviso «Línea base fijada — los retrasos se miden ahora frente a este plan», y a partir de ahí las columnas de desviación informan del retraso de cada hito en días. De ahí sale la cifra de cinco días de más arriba.</li>
          <li>Pon <strong>Vista</strong> en <strong>Solo hitos</strong> para la versión de dirección y luego <strong>⬇ Exportar</strong> ▸ <strong>📄 Documento PDF</strong> o <strong>📽 PowerPoint (.pptx)</strong>. Vuelve a <strong>Todas las tareas</strong> para trabajar.</li>
        </ol>
        <p>Una cosa que el editor no te dejará hacer: arrastrar un hito para hacerlo más ancho. Los hitos se mueven pero nunca se redimensionan, porque un hito con duración deja de ser un hito.</p>`],

      ['Errores frecuentes',
        `<p><strong>Hitos con duración.</strong> Si lleva tres días, es una tarea. Dale su barra y pon un hito al final si lo que importa es que termine.</p>
        <p><strong>Hitos sin dependencias.</strong> Un rombo suelto en el calendario es decorativo. Su valor está en que el trabajo posterior dependa de él.</p>
        <p><strong>Hitos que nadie decide.</strong> Si al llegar la fecha no ocurre ninguna aprobación ni ninguna verificación, probablemente no era un hito.</p>
        <p><strong>Hitos sin dueño.</strong> El responsable de un hito es quien hace la llamada cuando la fecha peligra, no quien aprueba. En el ejemplo, el responsable de «Etiquetado conforme aprobado» es Marta, no el laboratorio.</p>
        <p><strong>Hitos fechados por deseo.</strong> Si «Etiquetado conforme aprobado» está el 31 de marzo porque es lo que se prometió a la cadena, y no porque ocho días de laboratorio terminen ahí, el diagrama registra una aspiración. Pulsa <strong>Reprogramar</strong> primero y negocia la diferencia a conciencia.</p>
        <p><strong>Hitos reportados en porcentaje.</strong> Un hito está al 0 % o al 100 %. «La aprobación del etiquetado va por el 60 %» significa que la tarea de debajo va por el 60 % y que la puerta no se ha abierto.</p>`],

      ['Barras resumen y jerarquía',
        `<p>El tercer símbolo es la barra resumen o fase, que abarca a sus tareas hijas. Es calculada, no introducida: sus fechas salen del inicio más temprano y del fin más tardío de lo que contiene, y por eso editarlas directamente suele estar deshabilitado. Para mover una fase, mueve lo que hay dentro.</p>
        <p>Una barra resumen enseña cuándo se trabaja; un hito enseña cuándo vence un compromiso. Una fase «Preimpresión» que va del 2 de marzo al 10 de abril le sirve al equipo de Conservas Aldán y no le sirve de nada al comprador de la cadena, que solo pregunta por el 14 de mayo.</p>
        <p>Esa jerarquía de tres niveles — fase, tarea, hito — es la que hace legible un plan grande. Las fases contestan «¿en qué andamos?», las tareas «¿quién hace qué?» y los hitos «¿llegamos?».</p>`],
    ],
    callout: 'Un hito no es una tarea corta: es una tarea de duración cero que representa una decisión o una condición cumplida. La costumbre que conviene llevarse de aquí es poner un hito en cada punto en el que alguien de fuera del equipo tiene que aprobar, entregar, inspeccionar o firmar. Son las dependencias que menos controlas y los retrasos por los que más te van a preguntar: tres de los cinco hitos de Conservas Aldán son exactamente eso, y el que se retrasó era uno de ellos.',
    faq: [
      ['¿Qué es un hito en un diagrama de Gantt?', 'Un punto de duración cero que marca un momento significativo: una aprobación, una entrega o el inicio de una fase. Se representa con un rombo en lugar de una barra y, al no tener longitud, se puede mover pero no redimensionar.'],
      ['¿Cuál es la diferencia entre una tarea y un hito?', 'Una tarea tiene duración: inicio, fin y trabajo en medio. Un hito tiene duración cero y marca un instante, como una aprobación o una entrega. Prueba rápida: si alguien puede dedicarle una tarde de trabajo, es una tarea.'],
      ['¿Cuántos hitos debe tener un proyecto?', 'De cuatro a ocho en un proyecto de varios meses: los suficientes para contar la historia y los pocos suficientes para que cada uno signifique algo. Si al leer la lista entera no queda descrito el proyecto, has elegido los hitos equivocados.'],
      ['¿Puede un hito tener duración?', 'Por definición no. Si la cosa lleva tiempo de verdad —una verificación de etiquetado de ocho días, por ejemplo—, modélala como tarea y pon el hito en su fin. Así la fecha del compromiso se calcula en lugar de afirmarse.'],
      ['¿Qué le pasa al cronograma cuando un hito se retrasa?', 'Todo lo enlazado detrás se desplaza lo mismo, menos la holgura que haya en la cadena. En el ejemplo del reetiquetado, cinco días laborables de retraso en «Etiquetado conforme aprobado» movieron el cambio de lineal del 14 al 21 de mayo íntegramente, porque no había holgura aguas abajo.'],
      ['¿Cuál es la diferencia entre un hito y una fase?', 'Una fase es una barra resumen que agrupa tareas y toma sus fechas del inicio más temprano y el fin más tardío de sus hijas, así que se mueve cuando ellas se mueven. Un hito es un instante sin duración. No son intercambiables: la fase enseña cuándo se trabaja, el hito cuándo vence un compromiso.'],
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
        <p>Y eso es justamente lo que la hace útil como vara de medir. Una recta implicaría que el proyecto debe estar al veinte por ciento cuando ha pasado el veinte por ciento del plazo, y todos los proyectos de la historia parecerían retrasados en su primer mes.</p>
        <p>En España la curva tiene además unos escalones muy reconocibles que no aparecen en ningún manual: la <strong>Semana Santa</strong>, los festivos autonómicos, el puente de mayo y, sobre todo, <strong>agosto</strong>. Una obra con parada de agosto no dibuja una S suave, dibuja una S con una meseta en el centro. Si tu calendario laboral está bien puesto, la curva planificada ya la incorpora y no tendrás que explicar todos los años por qué el mes de agosto «va mal».</p>`],

      ['Leer lo planificado frente a lo real',
        `<p>Dos curvas. La curva <strong>planificada</strong> sale de tu línea base: se reparte el peso de cada tarea entre sus fechas previstas y se acumula. La curva <strong>real</strong> sale del avance reportado.</p>
        <p>Se leen en vertical, sobre la fecha de hoy:</p>
        <ul>
          <li><strong>Real por debajo de lo planificado</strong> — vas con retraso. La distancia vertical es el trabajo que te falta.</li>
          <li><strong>Real por encima de lo planificado</strong> — vas adelantado, o tu reporte de avance es optimista. Ocurren las dos cosas.</li>
          <li><strong>Curvas que se separan</strong> — el problema está empeorando, no estabilizándose. Es la forma que más importa y la que un porcentaje único nunca enseña.</li>
        </ul>
        <p>Léelas en <em>horizontal</em> y obtendrás algo más intuitivo para una reunión de seguimiento: desplázate a la izquierda desde el punto real de hoy hasta cortar la curva planificada y tendrás la fecha en la que el plan esperaba este nivel de avance. Esa distancia es cuántas semanas llevas de retraso, en las unidades en las que la gente discute de verdad.</p>
        <p>Las dos lecturas dicen lo mismo y no suenan igual. La vertical se expresa en dinero o en días de trabajo pendiente; la horizontal, en calendario. Un jefe de obra entiende «vamos una semana por detrás» mucho antes que «tenemos una desviación de plazo de −14.400 €», aunque sea exactamente la misma frase.</p>`],

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
        <p>La separación es todo el asunto. Un proyecto puede ir perfectamente en presupuesto y muy tarde, o en plazo y perdiendo dinero a chorros, y un único «porcentaje completado» esconde ambas cosas. Como dos ejes, hay cuatro sitios donde puedes estar:</p>
        <!--FIG:evmquad|El rendimiento del plazo y el del coste son independientes. Un único porcentaje completado aplasta los dos ejes en una sola cifra.-->
        <p>El cuadrante importa más que el signo. Estar arriba a la izquierda —en plazo, por encima de coste— se arregla con precio; estar abajo a la derecha —barato y tarde— casi nunca se arregla con dinero, porque lo que falta es capacidad, no presupuesto.</p>`],

      ['Un ejemplo resuelto, con la aritmética',
        `<p>Reforma integral de las oficinas de <strong>Grupo Alcorta</strong> en Valladolid. Diez semanas de plazo contractual, inicio el <strong>lunes 2 de marzo de 2026</strong>, presupuesto a la finalización (<strong>BAC</strong>) de <strong>240.000 €</strong>. Jefa de proyecto, Marta Iglesias; dirección facultativa por cuenta de la propiedad. El pliego fija penalidades por demora, así que la fecha no es orientativa.</p>
        <div class="worked">
          <p>El gasto se reparte como se reparte en una reforma: poco al principio (replanteo, desmontajes, acopios), mucho en el centro (instalaciones y albañilería a la vez) y decreciendo hacia las pruebas y el repaso final. La <strong>semana 5 cae en Semana Santa</strong> —del 30 de marzo al 5 de abril de 2026—, con solo dos días laborables útiles, y eso se ve en la curva antes que en ningún informe.</p>
          <p><strong>Gasto planificado por semana, acumulado en PV:</strong></p>
          <table>
            <thead><tr><th>Semana</th><th>Planificado esa semana</th><th>PV acumulado</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>10.000 €</td><td>10.000 €</td></tr>
              <tr><td>2</td><td>16.000 €</td><td>26.000 €</td></tr>
              <tr><td>3</td><td>24.000 €</td><td>50.000 €</td></tr>
              <tr><td>4</td><td>34.000 €</td><td>84.000 €</td></tr>
              <tr><td>5</td><td>12.000 €</td><td>96.000 €</td></tr>
              <tr><td>6</td><td>38.000 €</td><td>134.000 €</td></tr>
              <tr><td>7</td><td>36.000 €</td><td>170.000 €</td></tr>
              <tr><td>8</td><td>30.000 €</td><td>200.000 €</td></tr>
              <tr><td>9</td><td>24.000 €</td><td>224.000 €</td></tr>
              <tr><td>10</td><td>16.000 €</td><td>240.000 €</td></tr>
            </tbody>
          </table>
          <p><strong>Cinco semanas de datos reales.</strong> EV es el valor a presupuesto de lo que está hecho; AC es lo que ha costado, según las facturas conformadas y los partes de la subcontrata.</p>
          <table>
            <thead><tr><th>Semana</th><th>PV acumulado</th><th>EV acumulado</th><th>AC acumulado</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>10.000 €</td><td>8.000 €</td><td>9.000 €</td></tr>
              <tr><td>2</td><td>26.000 €</td><td>21.000 €</td><td>25.000 €</td></tr>
              <tr><td>3</td><td>50.000 €</td><td>41.000 €</td><td>47.000 €</td></tr>
              <tr><td>4</td><td>84.000 €</td><td>66.000 €</td><td>76.000 €</td></tr>
              <tr><td>5</td><td>96.000 €</td><td>81.600 €</td><td>94.800 €</td></tr>
            </tbody>
          </table>
          <p><strong>Lectura al cierre de la semana 5</strong>, viernes 3 de abril de 2026: PV = 96.000 €, EV = 81.600 €, AC = 94.800 €.</p>
          <ul>
            <li><strong>SV = EV − PV</strong> = 81.600 − 96.000 = <strong>−14.400 €</strong> de trabajo presupuestado que debería estar terminado y no lo está.</li>
            <li><strong>SPI = EV ÷ PV</strong> = 81.600 ÷ 96.000 = <strong>0,85</strong>. El plan se está convirtiendo en avance al 85 % del ritmo supuesto.</li>
            <li><strong>CV = EV − AC</strong> = 81.600 − 94.800 = <strong>−13.200 €</strong>. Lo hecho ha costado trece mil doscientos euros más de lo que vale.</li>
            <li><strong>CPI = EV ÷ AC</strong> = 81.600 ÷ 94.800 = <strong>0,86</strong>. Cada euro gastado compra 86 céntimos de valor presupuestado.</li>
            <li><strong>Avance real = EV ÷ BAC</strong> = 81.600 ÷ 240.000 = <strong>34 %</strong>, frente al <strong>40 %</strong> planificado. Un 34 % suena razonable hasta que sabes que tocaba un 40 %.</li>
            <li><strong>EAC = BAC ÷ CPI</strong> = 240.000 ÷ 0,8608 = <strong>278.800 €</strong>. Si el rendimiento del coste se mantiene, la obra de 240.000 € acaba unos <strong>38.800 € por encima</strong> (VAC), con <strong>184.000 €</strong> todavía por gastar (ETC = EAC − AC).</li>
          </ul>
          <p><strong>Y ahora la lectura horizontal, que es la que te llevas a la reunión.</strong> ¿Cuándo alcanzaba el plan los 81.600 €? Entre la semana 3 (50.000 €) y la semana 4 (84.000 €): faltan 31.600 € dentro de un incremento semanal de 34.000 €, o sea 31.600 ÷ 34.000 = 0,93 de esa semana. El plan cruzaba los 81.600 € hacia la <strong>semana 3,9</strong>. Estás, por tanto, a <strong>algo más de una semana de plan por detrás</strong>: unos cinco días laborables.</p>
          <p>«SPI 0,85» y «una semana de retraso» son el mismo hecho dicho de dos maneras. El ratio asusta más porque la semana 4 es la parte más empinada de la curva, donde perder unos días cuesta mucho valor. Cita las dos cifras juntas y nadie tendrá que elegir cuál cree.</p>
          <p><strong>Dónde se fue la semana.</strong> Marta la localiza en un minuto mirando qué tareas arrastran avance: el <em>informe geotécnico complementario</em> llegó cuatro días tarde y bloqueó el refuerzo de forjado, que a su vez retiene a la instaladora. Nada de eso se ve en el 34 %; se ve en el orden de las barras. La curva te dice cuánto y desde cuándo; la ruta crítica te dice qué mover.</p>
        </div>`],

      ['Las siete cifras y cómo se malinterpreta cada una',
        `<p>Cada una tiene su malentendido estándar, y los malentendidos hacen más daño que no medir nada.</p>
        <table>
          <thead><tr><th>Métrica</th><th>Fórmula</th><th>Qué responde</th><th>Cómo se malinterpreta</th></tr></thead>
          <tbody>
            <tr><td><strong>PV</strong></td><td>coste presupuestado del trabajo programado</td><td>¿Cuánto debería estar hecho a estas alturas?</td><td>Se toma de las fechas actuales en vez de una línea base. Esas fechas ya absorbieron cada retraso, así que el PV te sigue y la desviación sale cero.</td></tr>
            <tr><td><strong>EV</strong></td><td>BAC × avance</td><td>¿Cuánto hay hecho, valorado a presupuesto?</td><td>Vale exactamente lo que valga el reporte de avance detrás: el clásico «al 90 % desde hace tres semanas».</td></tr>
            <tr><td><strong>AC</strong></td><td>coste realmente incurrido</td><td>¿Qué ha costado hasta hoy?</td><td>Se lee antes de que entren las facturas. El AC va con retraso, así que halaga al CPI al principio y lo castiga después.</td></tr>
            <tr><td><strong>SV</strong></td><td>EV − PV</td><td>¿Cuánto trabajo nos falta?</td><td>Se oye como un sobrecoste. Se mide en euros, pero es una afirmación sobre el <em>plazo</em>.</td></tr>
            <tr><td><strong>CV</strong></td><td>EV − AC</td><td>¿Estamos pagando más de lo que vale lo hecho?</td><td>Se compara con el presupuesto consumido en vez de con el valor ganado; «llevamos el 47 % del presupuesto» no dice nada sin el EV.</td></tr>
            <tr><td><strong>SPI</strong></td><td>EV ÷ PV</td><td>Ritmo al que el plan se convierte en avance</td><td>Tiende a 1,0 al final pase lo que pase: todo proyecto acaba ganando su BAC completo, incluso con seis meses de demora.</td></tr>
            <tr><td><strong>CPI</strong></td><td>EV ÷ AC</td><td>Valor comprado por cada euro gastado</td><td>Sale exactamente 1,00 en las herramientas que deducen el AC del avance. Un CPI de una calculadora que nunca te preguntó cuánto has gastado es aritmética, no un dato.</td></tr>
          </tbody>
        </table>
        <p>Y una más, porque le cuesta la fecha de entrega a muchos proyectos: el valor ganado pondera todo por presupuesto, y la <strong>ruta crítica</strong> ignora el presupuesto por completo. Una aprobación municipal de dos días que está en la cadena que manda apenas mueve el SPI. Puedes leer un 1,05 y entregar tarde igualmente.</p>`],

      ['Por qué a veces la herramienta se niega a mostrarte el CPI',
        `<p>Conviene decirlo claro, porque la mayoría de las calculadoras gratuitas de valor ganado hacen justo lo contrario.</p>
        <p>El coste real es el único dato que no se puede deducir de un calendario. Tiene que venir de tu contabilidad. El atajo tentador es suponer que una tarea al 40 % ha consumido el 40 % de su presupuesto — y si haces eso, AC es igual a EV por construcción, así que <strong>el CPI sale exactamente 1,00 para todos los proyectos que han existido jamás</strong>. La cifra parece rigurosa, no reacciona a nada y le diría a alguien con el presupuesto descontrolado que va perfectamente.</p>
        <p>Por eso gantts.app toma el coste real de un único sitio: la cifra de <strong>Gastado</strong> que escribes en cada tarea. Si ninguna tarea la lleva, las métricas económicas —<strong>Coste real</strong>, <strong>Desviación de coste</strong>, <strong>Rendimiento del coste</strong> y <strong>Previsión a la finalización</strong>— se quedan vacías y el panel directamente las omite en vez de inventarlas. Las métricas de plazo —<strong>Desviación de plazo</strong> y <strong>Rendimiento del plazo</strong>— siguen funcionando, porque solo necesitan fechas y <strong>Progreso</strong>. Un dato ausente es honesto. Uno rotundamente equivocado no lo es.</p>
        <p>El CPI de 0,86 del ejemplo existe solo porque alguien tecleó 94.800 € de gasto real. Ningún diagrama de Gantt conoce esa cifra, ni la puede adivinar.</p>
        <p>Por la misma razón, la curva ganada anterior a hoy se <strong>reconstruye en lugar de registrarse</strong>: la herramienta guarda una lectura de avance por tarea, no un histórico de cada lectura pasada, así que una curva ganada fiel al pasado sencillamente no es recuperable. En vez de negarse a dibujarla, la reconstruimos bajo un supuesto declarado —que el avance se acumuló de forma uniforme a lo largo de los días laborables transcurridos de cada tarea—. Es exacta en la fecha de estado, que es donde se leen las cifras, y aproximada hacia atrás. Despliega <strong>Cómo se calcula esto</strong> en el propio panel y lo verás dicho con todas las letras, no escondido en una nota al pie.</p>`],

      ['No necesitas presupuesto para tener una curva',
        `<p>La mayoría de los planes no llevan ningún dato de coste, y una curva S que exija uno es una curva S que no dibuja nadie.</p>
        <p>Si ninguna tarea tiene coste, gantts.app pondera cada una por su duración en <strong>días laborables</strong>. La forma es la misma y el eje se lee en días en vez de en dinero: una curva S de avance puro. La desviación y el rendimiento del plazo significan exactamente lo mismo que arriba, solo que en días en lugar de euros. Añade <strong>Presupuesto</strong> más adelante y el mismo panel se convierte en una curva de valor sin que cambies nada más.</p>
        <p>Dos detalles cambian las cifras. Primero, solo cuentan las tareas hoja: las barras de resumen ya suman el coste de sus hijas, de modo que contar ambas infla el BAC tantas veces como niveles tenga tu esquema. Segundo, los hitos tienen duración cero y por tanto no aportan peso: son fechas, no trabajo. Marcar «hito conseguido» no mueve la curva ni un milímetro, y eso es correcto.</p>
        <p>Hay algo que importa más que todo lo anterior: <strong>fija una línea base</strong>. Sin ella, «planificado» solo puede significar tus fechas actuales, y tus fechas actuales ya incluyen todos los retrasos que han ocurrido. La desviación de plazo saldrá cero para siempre, que es una respuesta muy tranquilizadora y completamente inútil.</p>
        <!--FIG:baseline|Barras planificadas frente a barras reales. La línea base es la copia congelada con la que se construye la curva planificada; sin ella, el plan se mueve cada vez que te mueves tú.-->
        <p><strong>Línea base</strong>, una sola vez, cuando el plan esté acordado y firmado. Verás el aviso «Línea base fijada — los retrasos se miden ahora frente a este plan» y, a partir de ahí, columnas de línea base y desviación en la tabla. La herramienta indica siempre qué origen ha usado para lo planificado, para que puedas distinguir una desviación real de una comparación de tus fechas contra sí mismas.</p>
        <p>Un matiz de obra: cuando el pliego obliga a un reprogramado formal y la propiedad lo aprueba, actualiza la línea base y déjalo escrito («Línea base actualizada al plan actual»). Lo que no se puede hacer es refijarla cada mes para que la curva salga bonita. Una línea base que se mueve sola es una hoja en blanco con más pasos.</p>`],

      ['Cómo construir una aquí',
        `<ol>
          <li>Monta o importa tu calendario y deja las fechas más o menos bien. Con <strong>✨ Pegar a Gantt</strong> puedes traer una lista de tareas tal cual: la línea que acaba en <code>!</code> es un hito, <code>(10d)</code> fija la duración y <code>after Replanteo</code> declara la predecesora.</li>
          <li>Abre el <strong>Calendario laboral</strong> y marca los festivos que te afectan —nacionales, el autonómico, la Semana Santa, la parada de agosto—. Si esto está mal, la curva planificada estará mal desde el primer día.</li>
          <li>Pulsa <strong>Reprogramar</strong> si quieres que las tareas se compacten a sus fechas legales más tempranas antes de congelar nada.</li>
          <li>Ve a <strong>Línea base</strong> y fíjala cuando el plan esté acordado. Eso congela lo que significa «planificado».</li>
          <li>Opcionalmente, abre cada tarea y dale un <strong>Presupuesto</strong>, para que la curva se lea en euros y no en días.</li>
          <li>Actualiza el campo <strong>Progreso</strong> a medida que avanza el trabajo: de eso está hecha la curva ganada.</li>
          <li>Introduce lo <strong>Gastado</strong> por tarea para desbloquear el <strong>Rendimiento del coste</strong>, la <strong>Desviación de coste</strong> y la <strong>Previsión a la finalización</strong>.</li>
          <li>Pulsa <strong>Curva S</strong>. Se abre <em>Curva S — planificado vs real</em>, con las series <strong>Planificado</strong>, <strong>Ganado (avance real)</strong> y <strong>Coste real</strong>.</li>
          <li>Despliega <strong>Cómo se calcula esto</strong> antes de enseñarle las cifras a nadie: te dice qué origen se ha usado como planificado y si el peso viene de coste o de duración.</li>
          <li>Para el acta, saca la imagen con <strong>⬇ Exportar ▸ 🖼 Imagen PNG</strong>, o el plan entero con <strong>📊 Excel (.xlsx)</strong>.</li>
        </ol>
        <p>Funciona íntegramente en tu navegador. Sin cuenta, sin subir nada y sin una plantilla de hoja de cálculo que mantener a mano.</p>`],
    ],
    callout: 'Cita siempre el SPI y la lectura horizontal juntos. «SPI 0,85» y «una semana por detrás» describen la misma posición al cierre de la semana 5; una sala que solo oiga una de las dos se alarmará de más o no hará nada.',
    faq: [
      ['¿Qué es una curva S en gestión de proyectos?', 'Un gráfico del trabajo planificado acumulado frente al tiempo. Tiene forma de S porque los proyectos arrancan despacio, se aceleran en el centro y se frenan al final. Comparada con el avance real, la distancia vertical entre ambas curvas es cuánto vas por delante o por detrás.'],
      ['¿Qué diferencia hay entre curva S y valor ganado?', 'La curva S es la imagen; el valor ganado es la aritmética que hay detrás. La gestión del valor ganado pone cifras a esa diferencia —SV, SPI, CV y CPI— mientras que la curva muestra su forma y su tendencia.'],
      ['¿Qué significa un SPI de 0,9?', 'Que has ganado el 90 % del valor que el plan decía que tendrías a estas alturas, así que vas en torno a un 10 % retrasado en términos de valor. Por debajo de 1,0 es retraso; por encima, adelanto. No te dice cuántos días llevas de demora: para eso lee la diferencia en horizontal.'],
      ['¿Cómo se calculan el SPI y el CPI a mano?', 'Con tres cifras tomadas en la misma fecha de estado: PV, el valor a presupuesto del trabajo programado hasta hoy; EV, el valor a presupuesto del trabajo terminado; y AC, lo realmente gastado. SPI = EV ÷ PV y CPI = EV ÷ AC. Con PV 96.000 €, EV 81.600 € y AC 94.800 €: SPI 0,85 y CPI 0,86.'],
      ['¿Necesito datos de coste para usar una curva S?', 'No. Sin costes, las tareas se ponderan por su duración en días laborables y obtienes una curva de avance: la misma forma, leída en días. Los costes la convierten en una curva de valor y desbloquean las métricas económicas.'],
      ['¿Por qué no aparece el CPI?', 'Porque no se han introducido costes reales. El CPI necesita gasto real; deducirlo del porcentaje completado lo dejaría en 1,00 exacto para cualquier proyecto. Añade una cifra de «Gastado» a tus tareas y aparecerá, junto con la desviación de coste y la previsión a la finalización.'],
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
        <p>Existe porque un programa maestro y un plan de trabajo son documentos distintos con funciones distintas. El programa responde a «¿llegamos a la fecha de entrega?»; el lookahead responde a «¿qué pasa el martes, y ha pedido alguien la ferralla?». Intentar llevar la reunión semanal de coordinación en obra con un programa de doscientas líneas es la razón por la que se imprime en A0 y luego se ignora.</p>
        <p>En términos de Last Planner, el lookahead es donde aparecen las <em>restricciones</em>: el trabajo está lo bastante cerca como para preguntar si el permiso municipal, el acopio, la cuadrilla del subcontratista y el gremio anterior van a estar realmente ahí. Y las tres semanas no son tres semanas iguales: se endurecen a medida que se acercan.</p>
        <ul>
          <li><strong>La semana 1 está congelada.</strong> Las cuadrillas están contratadas y el material está a pie de obra. Solo cambia una línea si pasa algo que nadie podía prever.</li>
          <li><strong>La semana 2 está comprometida pero blanda.</strong> Las restricciones están resueltas, o tienen un responsable con nombre y una fecha. Es la semana en la que todavía te queda margen de maniobra.</li>
          <li><strong>La semana 3 es planificación.</strong> El trabajo está identificado y cribado, no prometido. Aquí las tareas pueden moverse; para eso está esa semana.</li>
        </ul>
        <p>Esa gradación es lo que separa un lookahead de un simple recorte del programa. Si las tres semanas se tratan igual —todas comprometidas, todas negociables— el documento no sirve ni para comprometerse ni para planificar.</p>
        <!--FIG:rolling|Cada lunes la ventana avanza un paso: la semana 3 pasa a ser la 2, la semana 2 se congela y aparece una nueva semana de planificación.-->`],

      ['Solape, no contención: el detalle que casi todos fallan',
        `<p>Esta es la regla que hace correcto un lookahead, y la que más se rompe en las hojas de cálculo hechas a mano.</p>
        <p>Una tarea pertenece a la ventana si la <strong>solapa</strong>, no si cabe dentro de ella. El paquete de cimentación de ocho meses que empezó en marzo y llega a noviembre está ocurriendo ahora mismo, y es precisamente el trabajo que el equipo de obra más necesita tener delante. Filtra por tareas que empiecen <em>y</em> terminen dentro de las tres semanas y perderás todas las actividades de larga duración de la obra, dejando un lookahead muy pulcro que describe un proyecto en el que no trabaja nadie.</p>
        <p>La comprobación son dos comparaciones, no cuatro:</p>
        <p><code>tarea.inicio ≤ ventana.fin &nbsp;Y&nbsp; tarea.fin ≥ ventana.inicio</code></p>
        <p>Esa es toda la regla, y es exactamente la que aplica gantts.app. Tiene una consecuencia que conviene conocer: un grupo padre nunca entra por sus propias fechas. Las fases entran solo como <em>contexto</em> —cuando una tarea de dentro cae en la ventana, sus ancestros la acompañan— y se dibujan como encabezados, no como trabajo que estés comprometiendo. Así las filas no llegan huérfanas a una lista plana en la que nadie sabe de qué planta se está hablando.</p>
        <!--FIG:lookahead|Solo sobreviven al filtro las barras que cruzan la ventana sombreada; las fases vienen detrás como contexto.-->`],

      ['Por qué se ancla al lunes',
        `<p>El lookahead es un ritual semanal ligado a una reunión semanal. Una ventana que fuese de jueves a jueves partiría la semana laboral por la mitad y no le serviría a nadie que la leyera, y menos aún al acta de la reunión, que se redacta pensando en semanas completas.</p>
        <p>Por eso la ventana siempre retrocede al inicio de la semana. Abre la herramienta un miércoles y obtendrás la ventana que empezó el lunes, no un bloque de tres semanas arrancando a mitad de semana. Las flechas la avanzan semana a semana cuando necesitas mirar más lejos, y <strong>Esta semana</strong> la devuelve a su sitio.</p>
        <p>Las semanas son semanas naturales, no semanas laborables: «tres semanas vista» significa veintiún días, no quince días laborables. Es una distinción que importa en España más que en casi ningún sitio, porque entre Semana Santa, los festivos autonómicos, algún puente y la parada de agosto, veintiún días naturales pueden contener muy pocos días de trabajo real.</p>`],

      ['Un ejemplo real: Residencial Los Molinos, Bloque C (Getafe)',
        `<div class="worked">
        <p><strong>La obra.</strong> Bloque C de una promoción de 48 viviendas en Getafe, siete plantas, con las plantas 1 a 3 ya en fase de acabados y la estructura del ático todavía en marcha. Marta Iglesias, jefa de obra, lleva la planificación con dos encargados: Javier Ferrán en instalaciones y Nuria Belmonte en albañilería y tabiquería. <strong>La ventana se abrió el lunes 20 de julio de 2026 y llegaba hasta el domingo 9 de agosto</strong>: de las 214 tareas del programa maestro, trece solapaban la ventana.</p>
        <p><em>Semana 1 — congelada, del 20 al 26 de julio.</em> Instalación de bandeja y canalización de climatización en planta 2 (Javier, cuatro operarios; el material se acopió el 14 de julio). Replanteo y fijación de guías de tabiquería seca en planta 2 (Nuria, seis operarios). Y el trasdosado del patinillo 3, que empezó el 2 de junio y no termina hasta el 21 de agosto: aparece en la ventana aunque no empiece ni acabe dentro de ella.</p>
        <p><em>Semana 2 — comprometida, del 27 de julio al 2 de agosto.</em> Bajantes de la instalación de climatización en planta 2 (Javier), placado del ala oeste (Nuria) y replanteo de canalizaciones en planta 3. Dos restricciones abiertas en el acta de la reunión: las bajantes dependían de que la dirección facultativa validase el cambio de trazado en el falso techo del pasillo, y el placado dependía de un acopio de placa de yeso prometido para el 24 de julio. Marta puso nombre y fecha a cada una: validación a Javier para el 23 de julio, acopio al jefe de compras para el 24.</p>
        <p><em>Semana 3 — planificación, del 3 al 9 de agosto.</em> Placado de planta 3, segunda fase de electricidad en planta 2 y el hito de prueba de estanqueidad de climatización el 7 de agosto. Nada prometido: en esa semana la obra solo estaba nombrando lo que la podía bloquear. Y detrás, el elefante en la habitación: la parada de agosto del subcontratista de instalaciones, del 10 al 24, que ya asomaba por el borde derecho de la ventana.</p>
        <p><strong>Una semana después la ventana rodó al 27 de julio – 16 de agosto.</strong> Marta pulsó la flecha una vez; no se reescribió nada. La semana antes comprometida pasaba ahora a estar congelada, y las bajantes de climatización no habían llegado listas. La dirección facultativa no contestó el 23: el visado del cambio de trazado llegó el 29 de julio pidiendo además una altura libre distinta en el pasillo. Las bajantes <em>no</em> se metieron en la semana congelada de todos modos. Se movieron al otro lado de la parada de agosto, con el código «validación pendiente», y los cuatro operarios de Javier pasaron al replanteo de canalizaciones de planta 3, que ya venía cribado de la antigua semana 3. La placa de yeso sí llegó el 24, así que el placado arrancó en fecha.</p>
        <p><strong>El resultado.</strong> Seis tareas prometidas para la semana del 27 de julio, cinco terminadas tal y como se prometieron: un PPC del 83 %, con un solo código de motivo. Ese código había aparecido tres veces en nueve semanas, y eso —no el porcentaje— fue lo que cambió la obra. Marta sacó las validaciones de la dirección facultativa a un cribado de seis semanas, porque tres semanas eran menos de lo que el aprobador tardaba de verdad. El coordinador de seguridad y salud, por su parte, empezó a leer el mismo lookahead para actualizar el plan de seguridad y salud: si el placado de planta 3 se adelantaba, los medios auxiliares tenían que estar montados antes.</p>
        </div>`],

      ['Qué se criba realmente en una revisión de restricciones',
        `<p>Es una reunión de cribado, no de seguimiento: para cada tarea que entra en la semana 2, la pregunta es si lo que necesita va a estar ahí, y si no, quién lo va a conseguir y para cuándo. Con siete categorías se cubre prácticamente todo lo que frena una obra.</p>
        <table>
          <thead><tr><th>Restricción</th><th>La pregunta que haces</th><th>Quién la resuelve</th></tr></thead>
          <tbody>
            <tr><td>Materiales y acopio</td><td>¿Está pedido? ¿El plazo de suministro cabe en la ventana? ¿Hay dónde acopiarlo?</td><td>Jefe de compras</td></tr>
            <tr><td>Información y proyecto</td><td>¿El plano está emitido para construcción y ha vuelto la consulta a la dirección facultativa?</td><td>Oficina técnica</td></tr>
            <tr><td>Mano de obra</td><td>¿El gremio correcto, en el número correcto, con la formación en vigor para esa semana?</td><td>Encargado de la subcontrata</td></tr>
            <tr><td>Medios y maquinaria</td><td>¿Está el medio auxiliar montado, revisado y no comprometido con otro gremio a la vez?</td><td>Jefe de producción</td></tr>
            <tr><td>Licencias y permisos</td><td>¿Solicitado el permiso municipal, y el plazo real del ayuntamiento cabe en la ventana?</td><td>Quien lleve esa relación</td></tr>
            <tr><td>Trabajo precedente</td><td>¿El gremio de delante ha terminado y entregado de verdad, no «casi»?</td><td>Jefe de obra</td></tr>
            <tr><td>Espacio y acceso</td><td>¿Puede llegar la cuadrilla, con andamio, iluminación y un recorrido seguro?</td><td>Coordinador de seguridad y salud</td></tr>
          </tbody>
        </table>
        <p>Una tarea con una restricción abierta no entra en la semana congelada. Ascenderla igualmente es exactamente la forma en que un lookahead se convierte en decoración de caseta de obra: todo el mundo aprende que las fechas de la semana 1 son orientativas, y a partir de ahí el documento ya no compromete a nadie.</p>
        <p>El parte diario cierra el círculo. Si lo que se apuntó el martes no se contrasta el lunes siguiente con lo que se prometió, las restricciones se resuelven de memoria y siempre se resuelven las mismas.</p>`],

      ['PPC: puntuar la promesa',
        `<p>Un lookahead que nadie puntúa es solo un Gantt más corto. Lo que produce la reunión no son las filas filtradas: es un <strong>compromiso</strong>, y un compromiso que nadie mide es un deseo.</p>
        <p>La medida es el <strong>porcentaje de plan completado</strong> (PPC). Al final de la semana congelada, divides las actividades terminadas tal y como se prometieron entre las actividades prometidas. Seis prometidas, cinco hechas: 83 %. Sin nota parcial: una actividad al 90 % puntúa cero, porque el gremio que va detrás sigue sin poder entrar.</p>
        <p>Esa dureza es justamente el objetivo. El PPC mide lo fiable que es tu plan, no cuánto trabajo se ha hecho. Una semana de esfuerzo enorme y no planificado que cumple la mitad de sus promesas es una mala semana, porque todos los que venían detrás habían organizado sus cuadrillas alrededor de la promesa.</p>
        <p>El <em>motivo</em> apuntado en cada fallo importa más que el número. Un código por actividad incumplida —validación pendiente, material fuera de plazo, gremio anterior sin terminar, meteorología, cambio de proyecto—. Al cabo de diez semanas se acumulan y señalan solos la única cosa que merece la pena arreglar.</p>
        <p>Los equipos que empiezan se mueven entre el 50 % y el 60 %; eliminando restricciones de forma sostenida se llega al 75-85 %. Semana tras semana por encima del 90 % suele significar un plan acolchado, con holgura escondida en cada línea. Sigue la tendencia y los códigos, no el número absoluto.</p>
        <!--FIG:milestone|Puntúa la semana contra lo que se prometió, no contra lo que resultó cómodo.-->`],

      ['Generarlo en vez de reescribirlo',
        `<p>Plantillas de lookahead a tres semanas hay de sobra: publica una Smartsheet, y media docena de webs más ofrecen la suya, y casi todas las constructoras tienen su propio formato heredado de la última obra. Todas son una rejilla en blanco que rellenas a mano.</p>
        <p>Ese es el problema de verdad. El calendario ya contiene la respuesta; el trabajo semanal consiste en copiarla, y copiarla es de donde vienen los errores. Se te escapa una tarea, o actualizas el maestro y te olvidas del lookahead, y los dos documentos empiezan a contradecirse en silencio hasta que alguien lo descubre en la certificación mensual de obra.</p>
        <p>En gantts.app el lookahead es una <em>vista</em> de los mismos datos:</p>
        <ol>
          <li>Abre tu plan y pon <strong>Vista</strong> en <strong>Próximas semanas</strong>. El gráfico se recorta solo a la ventana.</li>
          <li>Elige la ventana: 1, 2, 3, 4, 6 u 8 semanas, según tus plazos de suministro.</li>
          <li>Avánzala con las flechas, o pulsa <strong>Esta semana</strong> para volver al lunes de hoy.</li>
          <li>Activa <strong>Columnas</strong> y deja visibles <strong>Responsable</strong>, <strong>Inicio</strong>, <strong>Fin</strong> y <strong>Días</strong>: es lo que se lee en la reunión.</li>
          <li>Enciende <strong>Ruta crítica</strong> si quieres ver cuáles de esas tareas no tienen holgura (la leyenda lo indica: <em>rayado = ruta crítica</em>).</li>
          <li>Abre <strong>Calendario</strong> y marca los festivos locales y la parada de agosto, para que las duraciones no cuenten días que nadie va a trabajar.</li>
          <li>Usa <strong>⬇ Exportar</strong> ▸ <strong>📄 Documento PDF</strong> o <strong>🖼 Imagen PNG</strong> para la pared de la caseta, o <strong>📊 Excel (.xlsx)</strong> para adjuntarlo al acta.</li>
          <li>Cuando termines, vuelve a <strong>Todas las tareas</strong> para recuperar el programa completo.</li>
        </ol>
        <p>El gráfico hace zoom sobre la ventana, así que las tres semanas se leen en vez de quedar comprimidas en una franja de un eje de dieciocho meses. Una banda superior indica qué ventana estás mirando y cuántas tareas hay —«lookahead de 3 semanas · 20 jul – 9 ago — mostrando 13 tareas de 214»— porque un gráfico filtrado que no avisa de que está filtrado se lee como un plan al que le faltan tareas. <strong>Ver todas las tareas</strong> restablece el programa entero.</p>
        <p>Por defecto la ventana sigue al día de hoy, así que rueda sola entre una visita y la siguiente; las flechas la fijan a un lunes concreto hasta que pulsas Esta semana. Cambia una fecha en el maestro y el lookahead ya está bien. No hay nada que volver a copiar.</p>`],

      ['Convertirlo en un documento útil, no solo en un filtro',
        `<ul>
          <li><strong>Pon un nombre en cada línea.</strong> Un lookahead sin responsable por tarea es una lista de deseos. Activa la columna <strong>Responsable</strong> y que sea una persona, no una empresa.</li>
          <li><strong>Desglosa más el trabajo cercano que el lejano.</strong> Una tarea que pone «Acabados de la primera planta — 6 semanas» está bien en el programa maestro y es inútil aquí. Divídela según se acerca: ferrallado, encofrado, desencofrado del forjado, y no «estructura».</li>
          <li><strong>Que sea corto.</strong> Si el lookahead llega a sesenta líneas, o la ventana es demasiado larga o el plan es demasiado detallado para esta reunión.</li>
          <li><strong>Criba los suministros de plazo largo en un horizonte más largo.</strong> Si un aprobador tarda cinco semanas, un cribado a tres semanas detecta el problema siempre, y siempre tarde.</li>
          <li><strong>Apunta los incumplimientos.</strong> Un código de motivo escrito en la pizarra de la caseta ha desaparecido el jueves. Va en el acta o no existe.</li>
          <li><strong>Cuenta con el calendario real.</strong> Festivos autonómicos, el puente y la parada de agosto no son excepciones: son la mitad del motivo por el que un lookahead de verano no se parece a uno de marzo.</li>
        </ul>`],
    ],
    callout: 'El lookahead no es el entregable: el entregable es el compromiso. Si el lunes produce un gráfico filtrado y ninguna puntuación de la semana pasada, has automatizado el papeleo y te has saltado la práctica entera.',
    faq: [
      ['¿Qué es un programa lookahead de 3 semanas?', 'Un extracto rodante del programa maestro que muestra solo el trabajo que toca las tres semanas siguientes. Se actualiza cada semana y sirve para coordinar el día a día y detectar restricciones mientras aún hay margen para resolverlas.'],
      ['¿Por qué tres semanas?', 'Es plazo suficiente para resolver restricciones —acopios, licencias, cuadrillas— y lo bastante corto para que las fechas sean creíbles. Las ventanas de dos, cuatro y seis semanas también son habituales; la duración adecuada depende de tus plazos de suministro y del tiempo real que tarda en contestarte la dirección facultativa.'],
      ['¿Debe aparecer en el lookahead una tarea larga que empezó hace meses?', 'Sí. Todo lo que solape la ventana pertenece a ella. Filtrar por tareas que caben enteras dentro de las tres semanas descarta justamente el trabajo de larga duración que está ocurriendo ahora.'],
      ['¿Qué es el PPC y qué puntuación es buena?', 'Actividades terminadas tal y como se prometieron dividido entre actividades prometidas, sin nota parcial. Los equipos que empiezan sacan un 50-60 %; un 75-85 % ya es bueno. Por encima del 90 % de forma sostenida suele indicar un plan acolchado. Los códigos de motivo importan más que el número.'],
      ['¿Qué pasa con una tarea que no llega lista?', 'Se saca de la semana congelada en vez de prometerla igualmente, se apunta el motivo y la cuadrilla se reasigna a trabajo que ya estaba cribado. Ascender una tarea que no está lista destruye exactamente la fiabilidad que el lookahead existe para construir.'],
      ['¿Puedo hacer un lookahead en Excel, y cómo lo imprimo?', 'Casi todo el mundo lo hace así, reescribiendo filas del programa cada semana; generarlo como una vista elimina la reescritura y la desincronización. Para imprimirlo, pon Vista en Próximas semanas y exporta a PDF o PNG: la exportación refleja lo que hay en pantalla, así que obtienes la ventana y no el programa entero.'],
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
    lead: 'Los bloques gantt de Mermaid se renderizan de forma nativa en GitHub, GitLab, Notion y Obsidian, lo que los convierte en la manera más fácil de poner un calendario donde ya vive el trabajo: en el repositorio, revisable dentro de una pull request. También son penosos de <em>editar</em>: mueves una fecha y tienes que rehacer a mano toda la cadena de <code>after</code> que va detrás. Aquí van la sintaxis campo por campo, un ejemplo completo que puedes pegar en un README, las trampas que se renderizan perfectamente siendo falsas, y el paso que falta: editarlo visualmente y recuperar el texto.',
    figIntro: 'El mismo calendario como texto y como barras:',
    sections: [
      ['La sintaxis de una pasada',
        `<p>Un bloque gantt se abre con la palabra clave <code>gantt</code> y unas pocas líneas de cabecera, y después vienen encabezados <code>section</code> con líneas de tarea debajo. La sangría es convención, no gramática: Mermaid no se queja si la pierdes, pero el diff sí.</p>
        <p>Una línea de tarea es un nombre, dos puntos y después campos separados por comas:</p>
        <p><code>Nombre de tarea :etiqueta, id, inicio, duración</code></p>
        <ul>
          <li><strong>Etiquetas</strong> — cualquiera de <code>done</code>, <code>active</code>, <code>crit</code>, <code>milestone</code>, en cualquier orden, y puedes apilar varias en la misma tarea. Son opcionales.</li>
          <li><strong>id</strong> — una palabra suelta, sin espacios ni puntuación, necesaria solo si algo más se refiere a esta tarea.</li>
          <li><strong>inicio</strong> — una fecha, o <code>after algúnId</code>, o se omite por completo para continuar justo detrás de la tarea anterior.</li>
          <li><strong>duración</strong> — <code>5d</code>, <code>2w</code>, o una segunda fecha absoluta que fija el final.</li>
        </ul>
        <p>Cabeceras que conviene conocer: <code>dateFormat</code> (cómo están escritas las fechas en <em>tu</em> archivo), <code>excludes weekends</code>, <code>title</code> y <code>axisFormat</code> (cómo se etiqueta el eje, con códigos al estilo strftime). Los campos se clasifican por su forma más que por su posición estricta, y por eso <code>:done, aud, 2026-03-02, 5d</code> y <code>:aud, done, 2026-03-02, 5d</code> funcionan los dos igual de bien.</p>
        <p>Una advertencia que ahorra media hora de desconcierto: <code>dateFormat</code> y <code>axisFormat</code> no son el mismo parámetro escrito de dos maneras. El primero es entrada y el segundo es salida. Cambiar <code>dateFormat</code> no reetiqueta el eje; lo que hace es cambiar cómo se leen las fechas que ya has tecleado, con lo que un archivo perfectamente correcto puede pasar a interpretarse al revés.</p>
        <!--FIG:syntax|Cada campo de una línea de tarea de Mermaid y cuáles son opcionales.-->`],

      ['Un ejemplo completo que puedes pegar en un README',
        `<p>Un bloque válido y completo para trabajo real: el lanzamiento de la app de reservas de <strong>Grupo Alcorta</strong>, una agencia de Valladolid, con el equipo de producto de Marta Iglesias. Usa secciones, fechas absolutas, cadenas de <code>after</code>, todas las etiquetas, un hito y fines de semana excluidos. Pégalo en un bloque delimitado <code>mermaid</code> dentro de cualquier Markdown de GitHub y se renderiza.</p>
        <div class="worked">
        <pre><code>gantt
    title Lanzamiento app de reservas — Grupo Alcorta
    dateFormat YYYY-MM-DD
    axisFormat %d %b
    excludes weekends

    section Descubrimiento
    Auditoria del backend actual   :done, aud, 2026-03-02, 5d
    Especificacion funcional       :done, esp, after aud, 4d
    Revision con cliente           :active, rev, after esp, 2d

    section Construccion
    Servicio de identidad          :crit, ident, after rev, 10d
    Pantallas de reserva           :pant, after ident, 12d
    Pasarela de pago               :pago, after pant, 6d

    section Salida
    Pruebas en preproduccion       :pre, after pago, 5d
    Beta publica                   :milestone, beta, 2026-05-04, 0d
    Retirada de la version antigua :ret, after beta, 2w</code></pre>
        <p>Leído línea a línea:</p>
        <ul>
          <li><code>dateFormat YYYY-MM-DD</code> le dice a Mermaid cómo <em>leer</em> las fechas que has tecleado. Es formato de entrada, no de salida. Aquí no vale <code>dd/mm/aaaa</code> salvo que lo declares explícitamente, y aun así conviene no hacerlo: el ISO es lo que espera cualquiera que abra el archivo después de ti.</li>
          <li><code>axisFormat %d %b</code> es el lado de salida: el eje se lee «02 mar» en vez de una fecha ISO completa. Para cualquier cosa más larga que un trimestre, usa <code>%V</code> y trabaja con números de semana.</li>
          <li><code>excludes weekends</code> hace que todas las barras salten sábados y domingos, para el diagrama entero. No hay excepción por tarea: es todo o nada.</li>
          <li><code>Auditoria del backend actual :done, aud, 2026-03-02, 5d</code> — etiqueta, id, un inicio absoluto (un lunes) y cinco días. Las duraciones incluyen el día de inicio, así que esto termina el viernes 6 de marzo.</li>
          <li><code>after aud</code> significa «empieza cuando termine <code>aud</code>»: con los fines de semana excluidos, el lunes 9 de marzo, no el sábado 7.</li>
          <li><code>:crit, ident, ...</code> pinta la barra con el color de ruta crítica. Fíjate en el verbo: <em>pinta</em>. Más abajo están los límites de eso.</li>
          <li><code>Pantallas de reserva :pant, after ident, 12d</code> no lleva etiqueta ninguna; el primer campo es simplemente un id. Sin etiqueta significa trabajo pendiente.</li>
          <li><code>Beta publica :milestone, beta, 2026-05-04, 0d</code> es un marcador de longitud cero en una fecha fija. Los hitos tienen id como cualquier otra cosa, así que el <code>after beta</code> de la última línea es perfectamente legal.</li>
          <li><code>2w</code> son dos semanas. Mermaid también acepta <code>h</code> y <code>m</code>, que aquí casi nunca sirven de nada.</li>
        </ul>
        <p>Un detalle que a un equipo español le importa más que a otros: <code>excludes weekends</code> resuelve los sábados y domingos, pero no sabe nada de los festivos. Este calendario atraviesa la Semana Santa, y el 1 de mayo cae dentro de la ventana de la beta. Si quieres que las barras lo reflejen, hay que declararlos a mano, uno por uno, con <code>excludes 2026-04-03</code> y <code>excludes 2026-05-01</code>. Y eso solo cubre los nacionales: los autonómicos y locales —San Pedro Regalado en Valladolid, la feria en Sevilla, el puente que tu convenio colectivo te regala en septiembre— no están en ninguna lista que Mermaid conozca. En un plan que cruce agosto, la diferencia entre el diagrama y la realidad de la oficina se cuenta en semanas.</p>
        <p>Las líneas en blanco entre secciones son decorativas: Mermaid las ignora, y nuestro importador también. Déjalas igualmente. Un bloque de cuarenta tareas sin ellas es ilegible en un diff, y ese diff lo va a revisar alguien un viernes a las siete.</p>
        </div>`],

      ['Referencia de la línea de tarea',
        `<p>Cada campo y modificador, qué hace y cómo se ve en la práctica.</p>
        <table>
          <thead><tr><th>Campo o modificador</th><th>Ejemplo</th><th>Qué hace</th></tr></thead>
          <tbody>
            <tr><td><code>id</code></td><td><code>aud</code></td><td>Una palabra suelta que nombra la tarea para que <code>after</code> pueda referirse a ella. Sin espacios ni puntuación. Opcional salvo que algo dependa de la tarea.</td></tr>
            <tr><td><code>after</code></td><td><code>after aud</code></td><td>Empieza cuando termina la tarea nombrada. Solo fin-inicio y sin desfase. Admite varios ids: <code>after a b</code> espera al más tardío de los dos.</td></tr>
            <tr><td><code>done</code></td><td><code>:done, aud, …</code></td><td>Dibuja la barra como terminada. Sin porcentaje: el 100 % y el «vamos, que está» se ven exactamente igual.</td></tr>
            <tr><td><code>active</code></td><td><code>:active, rev, …</code></td><td>Dibuja la barra como en curso. Otra vez sin ningún número detrás.</td></tr>
            <tr><td><code>crit</code></td><td><code>:crit, ident, …</code></td><td>Colorea la barra como crítica. Es una afirmación que tecleas tú, no algo que Mermaid deduzca: nada la contrasta con la cadena de dependencias.</td></tr>
            <tr><td><code>milestone</code></td><td><code>:milestone, beta, …</code></td><td>Dibuja un rombo en lugar de una barra. Acompáñalo siempre de <code>0d</code>.</td></tr>
            <tr><td>Unidades de duración</td><td><code>5d</code> · <code>2w</code> · <code>8h</code></td><td>Días, semanas, horas (también <code>m</code>). Inclusivas respecto al día de inicio: <code>5d</code> desde el lunes acaba el viernes.</td></tr>
            <tr><td>Fecha de fin</td><td><code>2026-03-02, 2026-03-06</code></td><td>Una segunda fecha en lugar de una duración, para un final fijado desde fuera.</td></tr>
            <tr><td><code>dateFormat</code></td><td><code>dateFormat YYYY-MM-DD</code></td><td>Cómo se interpretan las fechas del archivo. Línea de cabecera, una vez por diagrama.</td></tr>
            <tr><td><code>axisFormat</code></td><td><code>axisFormat %d %b</code></td><td>Cómo se etiqueta el eje, con códigos strftime. Puramente cosmético.</td></tr>
            <tr><td><code>excludes</code></td><td><code>excludes weekends</code></td><td>Días no laborables. Acepta también fechas concretas (<code>excludes 2026-05-01</code>) y nombres de día. Afecta al diagrama entero.</td></tr>
          </tbody>
        </table>`],

      ['Cuatro cosas que te van a morder',
        `<p><strong>1. Las duraciones incluyen el día de inicio.</strong> <code>5d</code> desde el lunes día 5 llega hasta el viernes día 9, no hasta el 10. Un error de uno aquí desplaza todas las tareas del archivo y aun así se renderiza perfectamente, que es el peor modo de fallo posible: nada parece roto. La entrega sigue apareciendo en su sitio hasta el día en que alguien intenta cumplirla.</p>
        <p><strong>2. <code>after</code> junto con <code>excludes weekends</code> es donde viven los errores de verdad.</strong> Si una predecesora termina un viernes, su sucesora empieza el <em>lunes</em>, no el sábado. Cualquier herramienta que resuelva <code>after</code> sumando un día natural colocará tareas en fin de semana dentro de un archivo que lo prohíbe explícitamente, y a partir de ahí todas las fechas de aguas abajo van a la deriva. La nuestra lo hizo, brevemente. El arreglo pasa la aritmética por el calendario laboral para que la importación coincida con lo que Mermaid dibuja, y la prueba que lo vigila comprueba la propiedad y no fechas concretas: ningún inicio ni fin <em>derivado</em> puede caer en un día excluido. Las fechas que escribiste tú a mano se quedan donde las pusiste, sea fin de semana o no. Mover en silencio la fecha explícita de un autor es el tipo equivocado de amabilidad.</p>
        <p><strong>3. No hay forma de escapar caracteres.</strong> Los dos puntos abren la lista de campos y la coma separa campos, así que <code>Fase 2: diseño, revisión</code> se convierte en una tarea llamada «Fase 2» con campos basura. Mantén los dos puntos, las comas y los puntos y comas fuera de los nombres de tarea. Es la razón de que en el ejemplo de arriba los nombres estén escritos sin ellos. Al exportar sustituimos esos caracteres por espacios antes que emitir una línea que no se va a poder interpretar.</p>
        <p><strong>4. Una duración ilegible pasa a cero en silencio.</strong> Escribe <code>3dd</code> y obtendrás una barra de longitud cero en lugar de un error. Repasa el diagrama en busca de tareas invisibles después de cualquier edición masiva: no aparecen en ningún sitio, ni siquiera como una línea vacía.</p>
        <!--FIG:deps|«after» es fin-inicio con desfase cero — el único tipo de enlace que existe en el formato.-->`],

      ['Los límites de un formato de diagrama',
        `<p>Mermaid gantt es un lenguaje de representación, no un motor de planificación, y la diferencia salta a la vista en cuanto quieres que el gráfico <em>responda</em> a una pregunta en lugar de ilustrar una respuesta que ya tenías.</p>
        <ul>
          <li><strong>Sin recursos.</strong> No hay campo para quién hace el trabajo, ni coste, ni esfuerzo, ni unidades. No puedes sobreasignar a nadie en Mermaid porque Mermaid no sabe que exista nadie.</li>
          <li><strong>Sin holgura y sin ruta crítica calculada.</strong> <code>crit</code> es un color que aplicas a mano. Nada recorre el grafo de dependencias, ni calcula fechas tempranas y tardías, ni te dice qué cadena manda sobre la fecha de fin. Un diagrama con todas las barras marcadas <code>crit</code> es tan válido como uno sin ninguna.</li>
          <li><strong>Sin línea base.</strong> No hay dónde guardar lo que decía el plan el mes pasado, así que no hay desviación que enseñar ni retraso que medir.</li>
          <li><strong>Solo fin-inicio.</strong> <code>after</code> es FS con desfase cero. Inicio-inicio, fin-fin, inicio-fin y cualquier desfase o adelanto no tienen dónde ir. Los planes reales están llenos de «empezar a probar tres días después de que arranque el desarrollo»: en Mermaid eso se convierte en una fecha fija y el enlace desaparece.</li>
          <li><strong>Sin porcentaje de avance.</strong> Una tarea al 40 % y otra al 90 % son las dos simplemente <code>active</code>.</li>
          <li><strong>Secciones planas.</strong> No hay grupos anidados, así que una EDT de más de un nivel se aplana al entrar.</li>
        </ul>
        <p>Nada de esto lo convierte en un mal formato. Lo convierte en un formato de <em>publicación</em>: excelente para enseñar un calendario, inútil para deducirlo. Y por eso importa la ida y vuelta.</p>`],

      ['Editar visualmente y pegar el texto de vuelta',
        `<p>Herramientas que renderizan Mermaid hay muchas. Lo que faltaba es la dirección contraria: arrastrar barras y recuperar la sintaxis.</p>
        <ol>
          <li>Pega o abre tu diagrama en gantts.app — un archivo <code>.mmd</code>, o un <code>.md</code> con un bloque delimitado; los dos funcionan. Detecta el bloque gantt por su contenido, no por la extensión.</li>
          <li>Comprueba el <strong>Calendario laboral</strong>. <code>excludes weekends</code> enciende el calendario, y ahí es donde añades los festivos que Mermaid no conoce: los nacionales, los de tu comunidad y el puente del convenio.</li>
          <li>Arrastra, enlaza y cambia fechas como en cualquier otro gráfico. Con <code>Ajustar</code> mueves un extremo de la barra y con <code>Mover</code> la desplazas entera sin tocar la duración.</li>
          <li>Activa <strong>Ruta crítica</strong>. Lo que se raya no es lo que decía <code>crit</code> en el archivo, sino lo que sale de recorrer las dependencias que acabas de importar.</li>
          <li>Si el plan te ha quedado con huecos porque las fechas venían clavadas del archivo, pulsa <strong>Reprogramar</strong> para compactar cada tarea a su fecha legal más temprana.</li>
          <li>Abre <strong>⬇ Exportar</strong> ▸ <strong>🧜 Mermaid gantt (texto)</strong>. Ahí tienes <strong>Copiar al portapapeles</strong> si vas directo al README, o <strong>Descargar .mmd</strong> si el diagrama vive en su propio archivo dentro del repositorio.</li>
          <li>Pega, revisa el diff y haz commit. El bloque sale con la misma forma con la que entró, así que el diff enseña lo que ha cambiado de verdad y no un reformateo completo.</li>
        </ol>
        <p>La ida y vuelta pierde información de una forma conocida y aburrida. El avance convierte el 100 % en <code>done</code> y cualquier valor entre 1 y 99 en <code>active</code> al salir; <code>active</code> vuelve a entrar como 50 %, una suposición que se te comunica en un aviso en lugar de dejar que la descubras en un informe de seguimiento tres semanas después. Los enlaces que no se pueden escribir como <code>after</code> —cualquiera con desfase, o cualquier relación SS, FF o SF— caen a fechas absolutas, que siguen siendo correctas aunque dejen de ser mantenibles.</p>
        <p>Hay una asimetría deliberada, y no es un fallo: <strong><code>crit</code> se exporta pero nunca se importa.</strong> Al salir es un valor derivado —el editor calculó la ruta crítica a partir del grafo de dependencias, así que la etiqueta es cierta en el momento en que se escribe—. Al entrar es una palabra que alguien tecleó en un archivo que puede llevar semanas sin tocarse, y fiarse de ella permitiría que un diagrama viejo pintara de rojo una cadena que ya no es crítica. Así que se escribe y luego se ignora: la ruta crítica que ves después de importar está recalculada, no afirmada.</p>
        <p>Un efecto secundario útil si redactas calendarios con un LLM: pídele sintaxis gantt de Mermaid, pega la respuesta y ya tienes un gráfico editable con ruta crítica calculada. Sin clave de API y sin servidor de por medio.</p>`],
    ],
    callout: 'Mermaid no sabe nada de festivos. <code>excludes weekends</code> resuelve sábados y domingos, pero el 1 de mayo, la Semana Santa y los festivos autonómicos hay que declararlos uno a uno con <code>excludes 2026-05-01</code>. Al importar, revisa el <code>Calendario laboral</code> antes de fiarte de las fechas.',
    faq: [
      ['¿Cómo se escribe un diagrama de Gantt en Mermaid?', 'Abre el bloque con gantt, añade dateFormat YYYY-MM-DD y después encabezados section con líneas de tarea debajo con la forma «Nombre :etiqueta, id, inicio, duración» — por ejemplo «Auditoria :done, aud, 2026-03-02, 5d».'],
      ['¿5d en Mermaid incluye el día de inicio?', 'Sí. Una tarea de 5d que empieza el lunes día 5 termina el viernes día 9. Este cómputo inclusivo es la causa más habitual de errores de un día, y produce un diagrama que se renderiza perfectamente aunque todas las fechas estén corridas un día por tarea.'],
      ['¿Cómo funcionan las dependencias en Mermaid gantt?', 'Se usa «after algúnId» como campo de inicio. Siempre es fin-inicio y sin desfase: inicio-inicio, fin-fin y los desfases no se pueden expresar. Puedes nombrar varias predecesoras, como en «after a b», y la tarea espera a la más tardía.'],
      ['¿Salta after los fines de semana?', 'Sí, cuando el diagrama declara «excludes weekends». La sucesora de una tarea que acaba en viernes empieza el lunes, y su duración se cuenta en días laborables. Las herramientas que resuelven after sumando un día natural acaban colocando tareas en sábado dentro de un archivo que lo prohíbe.'],
      ['¿Puede Mermaid calcular la ruta crítica?', 'No. La etiqueta crit es un color que aplicas a mano; nada en Mermaid recorre el grafo de dependencias ni calcula holguras. Por eso gantts.app exporta crit pero lo ignora al importar: la criticidad se recalcula a partir de las dependencias en lugar de fiarse de un archivo posiblemente obsoleto.'],
      ['¿Puedo convertir un diagrama de Mermaid en un gráfico editable?', 'Sí. Abre el archivo .mmd o el Markdown en gantts.app, edítalo visualmente y usa ⬇ Exportar ▸ 🧜 Mermaid gantt (texto) para copiar de vuelta la sintaxis actualizada.'],
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
