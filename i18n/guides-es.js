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
      ['De dónde viene y por qué sigue vigente',
        `<p>El formato lleva el nombre de Henry Gantt, ingeniero estadounidense que lo popularizó a principios del siglo XX para planificar producción industrial. Ha sobrevivido a un siglo de metodologías por una razón sencilla: es la forma más directa de mostrar duración y solapamiento al mismo tiempo.</p>
        <p>Una lista de tareas ordena el trabajo. Un tablero kanban muestra el estado. Solo el diagrama de Gantt muestra <em>el calendario</em> — y por tanto es el único que revela que dos tareas críticas caen en la misma semana con la misma persona.</p>`],
      ['Las cuatro piezas',
        `<p><strong>Barras.</strong> Cada una es una tarea. Empieza donde empieza el trabajo y termina donde termina. Su longitud es la duración, no el esfuerzo: una tarea de diez días que ocupa a media persona sigue midiendo diez días.</p>
        <p><strong>Hitos.</strong> Puntos sin duración, dibujados como rombos. Sirven para marcar fechas que importan y no consumen tiempo: contrato firmado, permiso concedido, producto lanzado.</p>
        <p><strong>Dependencias.</strong> Flechas que dicen que una tarea no puede empezar (o terminar) hasta que otra lo haga. Son lo que convierte un dibujo en un modelo: al mover una barra, las siguientes se mueven solas.</p>
        <p><strong>Ruta crítica.</strong> La cadena de tareas más larga del proyecto. Si cualquiera de ellas se retrasa un día, el proyecto entero se retrasa un día. Todo lo que no está en la ruta crítica tiene holgura.</p>`],
      ['Cuándo usarlo y cuándo no',
        `<p>Un Gantt rinde cuando el trabajo tiene <em>secuencia</em> y <em>fechas</em>: obras, mudanzas, lanzamientos, investigaciones, aperturas, implantaciones. Si quitar una tarea del medio rompe el resto del plan, necesitas un Gantt.</p>
        <p>Rinde mal cuando el trabajo es continuo o se reprioriza cada semana. Un equipo de soporte, un backlog de producto o cualquier flujo sin fecha de fin se gestiona mejor con un tablero. Dibujar un Gantt de sesenta filas que se rehace cada lunes es trabajo de mantenimiento, no planificación.</p>
        <p>La prueba práctica: si nadie va a preguntar «¿esto llega para tal fecha?», probablemente no necesitas un Gantt.</p>`],
      ['Cómo leerlo en treinta segundos',
        `<p>Mira primero el extremo derecho: ahí está la fecha de fin y la tarea que la determina. Después busca las barras resaltadas como críticas — esas son las que no puedes retrasar. Por último, mira dónde se apilan barras verticalmente: eso es la semana en la que tu equipo va a estar saturado.</p>
        <p>Un diagrama bien hecho contesta esas tres preguntas sin que nadie tenga que explicarlo.</p>`],
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
      ['Qué calcula exactamente',
        `<p>El método de la ruta crítica (CPM, por sus siglas en inglés) recorre la red de tareas dos veces. La <strong>pasada adelante</strong> calcula lo más pronto que cada tarea puede empezar y terminar, arrastrando las restricciones desde el principio del proyecto. La <strong>pasada atrás</strong> calcula lo más tarde que puede empezar y terminar sin retrasar el final.</p>
        <p>La diferencia entre ambas es la <strong>holgura total</strong>. Las tareas con holgura cero forman la ruta crítica.</p>`],
      ['Holgura: la cifra que de verdad usas',
        `<p>Si una tarea tiene seis días de holgura, puedes retrasarla hasta seis días sin mover la fecha de entrega. Eso es información accionable: te dice de dónde puedes sacar a una persona cuando surge una urgencia, y qué tareas no admiten ninguna negociación.</p>
        <p>Conviene distinguir la holgura total (cuánto puedes retrasar sin mover el fin del proyecto) de la holgura libre (cuánto puedes retrasar sin mover la tarea siguiente). La primera es la que se mira para decidir prioridades.</p>`],
      ['Por qué la ruta crítica cambia sola',
        `<p>No es una propiedad fija del proyecto: es el resultado de las duraciones y dependencias actuales. Acorta la tarea crítica más larga y la ruta salta a otra cadena, que hasta ese momento tenía holgura. Por eso comprimir un plan es un proceso iterativo y no una única decisión.</p>
        <p>De ahí también el error clásico: optimizar una tarea que no está en la ruta crítica no adelanta el proyecto ni un día. Se siente productivo y no cambia nada.</p>`],
      ['Cómo comprimir el calendario',
        `<p>Solo hay tres palancas reales. <em>Acortar</em> una tarea crítica, normalmente añadiendo recursos. <em>Solapar</em> tareas que iban en serie, convirtiendo una dependencia fin-inicio en inicio-inicio con desfase. O <em>reducir alcance</em>. Cualquier otra cosa mueve barras sin mover la fecha.</p>
        <p>Cada solape que introduces añade riesgo: empezar a probar antes de terminar de construir significa rehacer pruebas si el diseño cambia. Es una decisión legítima, pero conviene tomarla sabiendo qué se compra y qué se paga.</p>`],
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
};

module.exports = { G, UI };
