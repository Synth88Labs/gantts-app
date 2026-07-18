/* ============================================================
   i18n/templates-es.js — Spanish template detail pages.

   Same shape as scripts/new-templates.js, minus the task list (the
   schedule data is language-independent; only the prose is translated).

   Only slugs present here get a /es/templates/<slug>.html. A template
   with no entry keeps linking to its English page rather than getting a
   machine-translated stand-in — a thin auto-translated page is worse
   than an honest English one, both for the reader and under Google's
   spam policy on bulk translated content.

   Written as Spanish, not as translated English: industry vocabulary
   follows what the sector actually uses (parada de planta, ruta
   crítica, adjudicación, puesta en marcha).
   ============================================================ */

const T = {

  'refinery-turnaround-schedule': {
    h1: 'Plantilla de cronograma de parada de refinería',
    metaTitle: 'Plantilla de cronograma de parada de refinería',
    metaDesc: 'Plantilla gratuita de parada de refinería: planificación, congelación del alcance, paquetes de trabajo, ejecución y arranque. Excel o edición online.',
    lead: 'Una <strong>plantilla gratuita de cronograma de parada de refinería</strong> construida sobre el ciclo real de una parada programada: planificación a largo plazo, congelación del alcance, desarrollo de paquetes de trabajo, aprovisionamiento de larga entrega, ejecución y arranque. Descárgala en Excel, PowerPoint o CSV, o ábrela online para enlazar dependencias y ver la ruta crítica que marca tu vuelta a servicio.',
    intro: 'Las paradas se planifican en meses y se miden en horas. La plantilla está organizada en las seis etapas por las que realmente pasa una parada programada:',
    phases: [
      ['Planificación a largo plazo', 'Justificación, objetivos de la parada, presupuesto preliminar y ventana objetivo, normalmente abierta con 18–24 meses de antelación. <em>Hito: parada aprobada.</em>'],
      ['Definición y congelación del alcance', 'Recopilación del listado de trabajos, sesiones de cuestionamiento, priorización por riesgo y la congelación en firme que corta las incorporaciones tardías. <em>Hito: alcance congelado.</em>'],
      ['Desarrollo de paquetes de trabajo', 'Planes de trabajo, estrategia de aislamiento y permisos, carga de recursos, alcance de contratistas y cronograma detallado de ejecución.'],
      ['Aprovisionamiento y larga entrega', 'Materiales, intercambiadores, catalizador, válvulas y servicios especializados pedidos según sus plazos de entrega, más andamiaje y movilización de equipos.'],
      ['Ejecución', 'Parada y enfriamiento, aislamiento, inspección, trabajo mecánico, montaje y pruebas: la ventana en la que cada hora cuenta. <em>Hito: terminación mecánica.</em>'],
      ['Arranque y cierre', 'Recomisionado, vuelta a servicio, desmovilización y la revisión posterior que alimenta la siguiente parada.'],
    ],
    callout: 'La congelación del alcance es la fecha más protectora de todo el cronograma. El alcance tardío es la causa más habitual de sobrecoste y retraso en una parada, así que trátala como un hito en firme con dependencias detrás: todo lo posterior debería apoyarse en esa fecha y no en buenas intenciones.',
    customize: [
      'Fija primero la ventana de ejecución y trabaja hacia atrás: las fechas de parada las marca producción, no la comodidad del planificador.',
      'Adelanta la congelación del alcance si tu listado de trabajos es grande; entre 8 y 12 semanas antes de la ejecución es lo habitual.',
      'Añade filas por disciplina bajo Ejecución (mecánica, instrumentación y eléctrica, inspección, obra civil) para que cada contratista vea su propia secuencia.',
      'Carga el aprovisionamiento de larga entrega contra plazos reales de proveedor, no nominales.',
      'Marca cada permiso, aislamiento e inspección como hito para que nada avance fuera de secuencia.',
    ],
    tips: [
      '<strong>Protege la ruta crítica durante la ejecución.</strong> En la ventana, la cadena parada → aislamiento → inspección → reparación → montaje suele marcar la vuelta a servicio. Un día perdido ahí es un día de producción perdida.',
      '<strong>Planifica los hallazgos de inspección como riesgo, no como sorpresa.</strong> Reserva holgura para trabajo de descubrimiento: el alcance desconocido que aparece al abrir equipos es lo normal, no la excepción.',
      '<strong>Secuencia la larga entrega contra la congelación.</strong> Cualquier pedido posterior con un plazo mayor que el tiempo restante es un riesgo que puedes ver con meses de antelación.',
      '<strong>Trata el arranque como un miniproyecto.</strong> La vuelta a servicio tiene dependencias tan ajustadas como el trabajo mecánico y suele planificarse de menos.',
      '<strong>Actualiza el porcentaje completado a diario durante la ejecución</strong> y reexporta el gráfico para la reunión de la mañana, para que todos los contratistas trabajen con la misma foto.',
    ],
    faq: [
      ['¿Con cuánta antelación se planifica una parada de refinería?', 'La planificación a largo plazo de una parada importante suele empezar entre 18 y 24 meses antes de la ventana de ejecución, con la congelación del alcance habitualmente entre 8 y 12 semanas antes. La plantilla sitúa esas etapas en una línea de tiempo para que veas si tu margen es realista.'],
      ['¿Qué es la congelación del alcance y por qué aparece en el cronograma?', 'Es el punto a partir del cual no se añade trabajo nuevo al listado de la parada. Aparece como hito porque el alcance tardío es la causa más frecuente de desviación: todo lo posterior depende de que el listado sea estable.'],
      ['¿Puedo mostrar dependencias entre actividades de la parada?', 'Sí. Abre la plantilla en el <a href="/es/app.html">editor gratuito de gantts.app</a> para enlazar relaciones fin-inicio entre aislamiento, inspección y reparación: el trabajo posterior se desplaza solo y la ruta crítica se mantiene visible.'],
      ['¿La plantilla de parada de refinería es gratuita?', 'Sí: descarga gratuita en Excel, PowerPoint o CSV, y edición online gratuita sin registro.'],
    ],
  },

  'hotel-pre-opening-critical-path': {
    h1: 'Plantilla de ruta crítica de apertura de hotel',
    metaTitle: 'Plantilla de ruta crítica de apertura de hotel',
    metaDesc: 'Plantilla gratuita de preapertura de hotel organizada por departamento: Pisos, A&B, Ingeniería, RR. HH. y Comercial. Excel y PowerPoint, o edición online.',
    lead: 'Una <strong>plantilla gratuita de ruta crítica de apertura de hotel</strong> que cubre toda la cuenta atrás hasta el día de apertura, organizada como trabaja de verdad un equipo de preapertura: por departamento. Pisos, Alimentos y Bebidas, Limpieza, Ingeniería, Sistemas, RR. HH., Comercial y Finanzas tienen cada uno su propia línea a lo largo de seis meses.',
    intro: 'Una preapertura fracasa por lo que nadie asumió como suyo. La plantilla divide la cuenta atrás en líneas por departamento para que cada frente tenga responsable y secuencia visibles:',
    phases: [
      ['Arranque del proyecto (T-6 meses)', 'Ruta crítica acordada, presupuesto de preapertura aprobado, estándares de marca emitidos y fecha de apertura fijada. <em>Hito: fecha de apertura cerrada.</em>'],
      ['Selección y RR. HH.', 'Primero el comité ejecutivo, después jefes de departamento y por último personal de base, en oleadas ajustadas a la formación y no al día de apertura.'],
      ['Compras de OS&amp;E y FF&amp;E', 'Suministros y equipamiento de operación especificados, pedidos y recibidos según plazos de entrega: el frente que más silenciosamente se retrasa.'],
      ['Sistemas e informática', 'PMS, TPV, channel manager, llaves, wifi y telefonía instalados, integrados y probados antes de que la formación los necesite.'],
      ['Licencias e inspecciones', 'Incendios, sanidad, licencia de bebidas, ocupación e inspecciones de marca: cada una es una barrera sin margen de negociación. <em>Hito: licencia de apertura.</em>'],
      ['Formación, apertura suave y lanzamiento', 'Formación por departamento, reservas de prueba, periodo de apertura suave y lanzamiento público. <em>Hito: hotel abierto.</em>'],
    ],
    callout: 'El frente comercial es el que siempre se recorta y el que no debería. Ventas, distribución y conectividad de canales tienen que arrancar meses antes de abrir, porque un hotel que abre sin distribución abre vacío. Dale su propia línea en el gráfico en lugar de dejarlo para cuando la obra se calme.',
    customize: [
      'Fija la fecha de apertura y deja que cada línea cuente hacia atrás desde ahí: una preapertura es una cuenta atrás, no un plan hacia delante.',
      'Ajusta el margen: 3 meses encaja con un hotel de servicio limitado; 6–9 con uno de servicio completo o un resort.',
      'Añade una fila por jefe de departamento para que cada línea tenga un responsable con nombre.',
      'Sitúa las oleadas de contratación antes de la formación, no antes de la apertura: contratar pronto cuesta nómina y contratar tarde deja gente sin formar.',
      'Marca cada licencia e inspección como hito: son barreras, no tareas.',
    ],
    tips: [
      '<strong>Trabaja hacia atrás desde el día de apertura.</strong> Todas las fechas de una preapertura se derivan de ella. Fíjala primero y deja que las dependencias empujen el resto.',
      '<strong>Vigila los plazos de OS&amp;E.</strong> Los suministros de operación se piden en cientos de líneas; una sola categoría de larga entrega (uniformes, vajilla a medida, colchones) puede bloquear la preparación de todo un departamento.',
      '<strong>Los sistemas van antes que la formación.</strong> Nadie se forma en un PMS que no está instalado: la informática es una dependencia de la formación, no una línea paralela.',
      '<strong>Trata las inspecciones como barreras firmes.</strong> Una inspección de incendios fallida detiene todo lo posterior, así que reserva margen para reinspección en vez de dar por hecho que se aprueba a la primera.',
      '<strong>Haz una apertura suave con reservas reales.</strong> Dale su propia barra: es el único ensayo que tendrá el equipo.',
    ],
    faq: [
      ['¿Cuánto dura la ruta crítica de apertura de un hotel?', 'Normalmente de 3 a 6 meses en un hotel de servicio limitado y de 6 a 12 en uno de servicio completo o un resort. La plantilla usa seis meses, que puedes comprimir o ampliar cambiando la fecha de apertura.'],
      ['¿Cómo se organiza el plan de preapertura?', 'Por departamento (Pisos, A&B, Limpieza, Ingeniería, Sistemas, RR. HH., Comercial y Finanzas), de modo que cada frente tenga responsable y secuencia propios en lugar de una única lista indiferenciada.'],
      ['¿Puedo ver qué tareas determinan la fecha de apertura?', 'Sí. Ábrela en el <a href="/es/app.html">editor gratuito de gantts.app</a> y activa la ruta crítica: la cadena de tareas que fija tu apertura se resalta sola conforme cambian las fechas.'],
      ['¿La plantilla de preapertura de hotel es gratuita?', 'Sí. Descarga y edición online gratuitas y sin cuenta, a diferencia de los paquetes de documentos de preapertura que se venden en otros sitios.'],
    ],
  },

  'solar-farm-construction-schedule': {
    h1: 'Plantilla de cronograma de construcción de planta solar',
    metaTitle: 'Cronograma de construcción de planta solar',
    metaDesc: 'Plantilla gratuita de construcción de planta solar: viabilidad, conexión a red, permisos, compras, estructura y puesta en marcha. Excel o edición online.',
    lead: 'Una <strong>plantilla gratuita de cronograma de construcción de planta solar</strong> que cubre todo el calendario fotovoltaico a escala de servicio: estudios de viabilidad y de conexión, permisos ambientales, compras, obra civil, hincado y montaje de módulos, y por último puesta en marcha y energización.',
    intro: 'Un proyecto solar es un proyecto de permisos y de conexión mucho antes de ser un proyecto de obra. La plantilla refleja ese orden:',
    phases: [
      ['Desarrollo y viabilidad', 'Control del terreno, prefactibilidad, evaluación del recurso solar, implantación preliminar y modelo financiero inicial.'],
      ['Conexión y medio ambiente', 'Solicitud de conexión y estudio de impacto en el sistema, evaluación ambiental y estudios de hábitat. <em>Hito: contrato de conexión.</em>'],
      ['Ingeniería y permisos', 'Diseño conceptual y civil, estudio geotécnico, licencias locales y autorizaciones de obra. <em>Hito: orden de proceder.</em>'],
      ['Compras', 'Módulos, inversores, seguidores o estructura fija, transformadores y cableado pedidos según plazos largos de entrega.'],
      ['Obra civil y mecánica', 'Movilización, caminos de acceso, explanación, vallado, hincado, estructura, montaje de módulos y cableado de corriente continua.'],
      ['Eléctrica y puesta en marcha', 'Cajas de agrupación, inversores, subestación, pruebas, ensayo con la distribuidora y energización. <em>Hito: operación comercial.</em>'],
    ],
    callout: 'La conexión a red suele ser la verdadera ruta crítica, no la construcción. Las colas de estudio y los plazos de la distribuidora quedan fuera de tu control y con frecuencia superan a la obra entera, así que pon la cadena de conexión en el gráfico desde el principio y sígela como lo que marca el calendario, no como papeleo de fondo.',
    customize: [
      'Fija la fecha objetivo de operación comercial y trabaja hacia atrás: casi todos los cronogramas solares los marca un contrato de venta de energía o un plazo fiscal.',
      'Amplía la fase de conexión hasta ajustarla a tu posición real en la cola de la distribuidora.',
      'Escala la obra civil al tamaño de la planta: el hincado y la estructura dominan la curva de mano de obra en emplazamientos grandes.',
      'Añade holgura por meteorología a la explanación y al hincado, que son las actividades más expuestas.',
      'Marca como hitos la orden de proceder, la terminación mecánica, la recepción provisional y la operación comercial.',
    ],
    tips: [
      '<strong>Sigue los equipos de larga entrega contra la obra, no contra el calendario.</strong> Transformadores y aparamenta de alta tensión tienen los plazos más largos y suelen ser la razón de que se retrase la energización.',
      '<strong>Planifica con cuidado el ensayo con la distribuidora.</strong> Depende de su disponibilidad, no solo de la tuya: trátalo como una dependencia con holgura externa.',
      '<strong>Mantén separados los alcances de continua y alterna.</strong> Van parcialmente en paralelo y normalmente los ejecutan equipos distintos.',
      '<strong>Vigila la curva de entrega de módulos.</strong> El ritmo de montaje lo limita la llegada de material a obra, no solo el tamaño de la cuadrilla.',
      '<strong>Fija línea base tras los permisos.</strong> Las fechas previas a la licencia son estimaciones; cuando lleguen las autorizaciones, marca línea base y sigue la desviación.',
    ],
    faq: [
      ['¿Cuánto se tarda en construir una planta solar?', 'La obra en sí suele durar de 4 a 9 meses, pero el calendario completo desde desarrollo hasta energización va con frecuencia de 2 a 4 años, porque los estudios de conexión y los permisos dominan la fase inicial. La plantilla recoge ambas etapas.'],
      ['¿Qué marca normalmente la ruta crítica en un proyecto solar?', 'La conexión y los permisos mucho más a menudo que la construcción. Las colas de estudio de la distribuidora quedan fuera del control del promotor, y por eso la plantilla las trata como fases de primer nivel.'],
      ['¿Sirve para una cubierta comercial en lugar de una planta?', 'Sí: elimina las filas de subestación, hincado y caminos, y acorta la fase de conexión. La secuencia de permisos, compras y puesta en marcha sigue siendo válida.'],
      ['¿La plantilla de construcción solar es gratuita?', 'Sí. Descargas gratuitas en Excel, PowerPoint y CSV, y edición online gratuita sin registro.'],
    ],
  },

  'dissertation-gantt-chart': {
    h1: 'Plantilla de diagrama de Gantt para tesis',
    metaTitle: 'Diagrama de Gantt para tesis (plantilla gratis)',
    metaDesc: 'Plantilla gratuita de diagrama de Gantt para tesis: 12 meses de propuesta, revisión bibliográfica, ética, trabajo de campo, análisis y entrega.',
    lead: 'Una <strong>plantilla gratuita de diagrama de Gantt para tesis</strong> con un calendario realista de doce meses: elección del tema, propuesta, revisión bibliográfica, metodología, aprobación ética, recogida de datos, análisis, redacción, revisiones y entrega. Descárgala para tu documento de propuesta o edítala online.',
    intro: 'Los directores piden un cronograma porque deja a la vista si un plan es viable. La plantilla recoge las etapas por las que pasa una tesis de verdad, con solapamientos realistas:',
    phases: [
      ['Tema y propuesta', 'Elección del tema, reuniones con dirección, preguntas de investigación y documento de propuesta. <em>Hito: propuesta aprobada.</em>'],
      ['Revisión bibliográfica', 'Búsqueda sistemática, lectura, síntesis temática y redacción del capítulo: la fase que más se subestima.'],
      ['Metodología y ética', 'Diseño de la investigación, desarrollo del instrumento o protocolo y presentación al comité de ética. <em>Hito: aprobación ética.</em>'],
      ['Recogida de datos', 'Captación de participantes, trabajo de campo, entrevistas, experimentos o trabajo de archivo: la fase con menos control de calendario.'],
      ['Análisis', 'Depuración de datos, codificación o análisis estadístico y redacción de resultados.'],
      ['Redacción y entrega', 'Borradores de capítulos, rondas de comentarios de dirección, revisiones, formato y entrega final. <em>Hito: entregada.</em>'],
    ],
    callout: 'La aprobación ética es una dependencia, no un trámite. La recogida de datos no puede empezar legítimamente antes, y los tiempos del comité están fuera de tu control, así que va en el gráfico como hito con todo lo posterior enlazado a él. Los planes que solapan ambas cosas son los que se retrasan.',
    customize: [
      'Cambia la duración total: la plantilla cubre doce meses; un TFM suele ser de 6 a 9 y una tesis doctoral de 36 o más.',
      'Adelanta la presentación a ética si el comité de tu institución se reúne con poca frecuencia.',
      'Amplía la recogida de datos con generosidad: captar participantes casi siempre lleva más de lo previsto.',
      'Añade una fila por capítulo si tu dirección quiere fechas a ese nivel.',
      'Mantén las rondas de comentarios como barras propias: esperar respuesta es tiempo real transcurrido.',
    ],
    tips: [
      '<strong>Cuenta con la latencia de los comentarios.</strong> Dos o tres semanas por capítulo es lo normal y suma meses a lo largo de una tesis.',
      '<strong>Solapa la revisión bibliográfica con todo.</strong> Rara vez es un bloque limpio: mantén una barra fina y continua en vez de fingir que termina.',
      '<strong>Protege un colchón de escritura antes de la entrega.</strong> Formato, referencias y anexos siempre llevan más de lo previsto.',
      '<strong>Trata la captación como un riesgo.</strong> Si los participantes son difíciles de alcanzar, la barra de recogida debe verse más larga de lo que te gustaría.',
      '<strong>Exporta a PDF para la propuesta.</strong> Casi todas las plantillas de propuesta piden una figura de cronograma; el gráfico entra directamente.',
    ],
    faq: [
      ['¿Cuánto debe abarcar el cronograma de una tesis?', 'Un TFM suele ocupar de 6 a 12 meses y una tesis doctoral de 3 a 4 años. Esta plantilla usa doce meses, que puedes comprimir o ampliar cambiando la fecha final.'],
      ['¿Qué etapas debe incluir un Gantt de tesis?', 'Elección de tema y propuesta, revisión bibliográfica, metodología y aprobación ética, recogida de datos, análisis, redacción con comentarios de dirección y entrega final. Todas vienen ya cargadas.'],
      ['¿Puedo incluir este diagrama en mi propuesta de investigación?', 'Sí, es el uso más habitual. Exporta a PDF o PNG desde el <a href="/es/app.html">editor gratuito</a> e insértalo en el documento, o descarga la versión de PowerPoint para una diapositiva.'],
      ['¿La plantilla de tesis es gratuita?', 'Sí. Descarga y edición online gratuitas, sin cuenta y sin marca de agua.'],
    ],
  },

};

/* Page furniture: headings, download buttons, breadcrumb and CTA band.
   Kept next to the copy it wraps so a new locale is one file, not two. */
const UI = {
  home: 'Inicio',
  templates: 'Plantillas',
  xlsx: 'Excel (.xlsx)',
  pptx: 'PowerPoint',
  csv: 'CSV',
  edit: 'Editar online gratis',
  included: 'Qué incluye',
  customize: 'Cómo personalizarla',
  tips: 'Consejos de programación',
  related: 'Plantillas relacionadas',
  browseAll: 'Ver todas las plantillas de diagramas de Gantt',
  faq: 'Preguntas frecuentes',
  ctaH2: 'Planifícalo online, gratis',
  ctaP: 'Abre esta plantilla en el editor, arrastra las barras hasta ajustarlas a tus fechas y exporta a PDF, Excel o PowerPoint. Sin cuenta y sin marca de agua.',
  ctaBtn: 'Abrir el editor gratuito',
  imgAlt: 'Vista previa de la plantilla con las fases repartidas en una línea de tiempo',
  howTo: (name) => `Cómo usar la plantilla: ${name}`,
  // Related templates that have no Spanish page yet link to English.
  enNote: 'Esta plantilla está en español. Las páginas relacionadas que aún no se han traducido se abren en inglés.',
};

module.exports = { T, UI };
