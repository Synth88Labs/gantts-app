/* ============================================================
   i18n/site-pages.js — localized about / contact / terms / privacy.

   Note on terms & privacy: these are translated for comprehension and
   each localized copy carries `legalNote`, stating that the English
   version governs. That is deliberate. A mistranslated liability or
   data-handling clause is a real problem rather than a cosmetic one,
   and publishing five equally-authoritative legal texts would be worse
   than saying plainly which one controls.
   ============================================================ */

const SITE = {

  es: {
    legalNote: 'Esta es una traducción de cortesía. En caso de discrepancia, prevalece la versión en inglés.',
    about: {
      title: 'Sobre gantts.app — creador de diagramas de Gantt',
      description: 'Quién está detrás de gantts.app y por qué la herramienta es gratuita, sin cuentas y sin subir tus datos a ningún servidor.',
      h1: 'Sobre gantts.app',
      lead: 'gantts.app es un proyecto pequeño e independiente: un creador de diagramas de Gantt que se abre y funciona, sin registro y sin enviar tus datos a ningún sitio.',
      callout: 'Tu plan nunca sale de tu navegador. No hay servidor que lo almacene, no hay cuenta que crear y no hay nada que borrar si dejas de usarlo.',
      body: [
        ['Por qué existe', '<p>La mayoría de las herramientas de planificación piden una cuenta antes de dejarte dibujar una sola barra. Para un plan rápido, eso es demasiada fricción. gantts.app se abre directamente en el navegador y funciona desde el primer segundo.</p>'],
        ['Cómo funciona', '<p>Todo se ejecuta en tu navegador. No hay servidor que guarde proyectos, así que tu planificación se queda en tu equipo y puedes exportarla a PDF, PNG, Excel, PowerPoint o CSV cuando quieras.</p>'],
        ['El modelo', '<p>No hay planes de pago ni funciones bloqueadas. Los costes son mínimos porque no hay infraestructura que mantener, y un único espacio discreto de patrocinio en la aplicación ayuda a cubrirlos.</p>'],
        ['Código abierto', '<p>El código está publicado en <a href="https://github.com/Synth88Labs/gantts-app" rel="noopener">GitHub</a> bajo licencia MIT. Si encuentras un fallo o quieres proponer una mejora, abre una incidencia allí.</p>'],
      ],
    },
    contact: {
      title: 'Contacto — gantts.app',
      description: 'Cómo ponerte en contacto con gantts.app: errores, sugerencias, consultas de publicidad o cualquier otra cosa.',
      h1: 'Contacto',
      lead: 'gantts.app es un proyecto pequeño. No hay cola de soporte ni sistema de tickets: los mensajes llegan directamente a nosotros.',
      body: [
        ['Correo electrónico', '<p>Para cualquier cosa —dudas, errores, sugerencias o consultas de publicidad—:</p><p><a class="btn btn-primary" href="mailto:synth88labs@gmail.com?subject=Consulta%20gantts.app">synth88labs@gmail.com</a></p>'],
        ['Informar de un error', '<p>La vía más rápida para cualquier asunto técnico es una incidencia en GitHub, porque es pública y otras personas con el mismo problema pueden encontrarla.</p><ul><li><a href="https://github.com/Synth88Labs/gantts-app/issues" rel="noopener">Abrir una incidencia</a></li><li><a href="https://github.com/Synth88Labs/gantts-app" rel="noopener">Ver el código fuente</a></li></ul>'],
        ['Qué incluir', '<p>Como todo se ejecuta en tu navegador y nada se sube, no podemos consultar tu proyecto para investigarlo. Por eso los detalles importan: navegador y sistema operativo, qué hiciste, qué esperabas y qué ocurrió, y si es posible un archivo <code>.gantts</code> que reproduzca el problema.</p>'],
      ],
    },
    terms: {
      title: 'Términos de uso — gantts.app',
      description: 'Términos de uso de gantts.app: gratuito para proyectos personales y comerciales, se ofrece tal cual, sin cuenta y sin garantía.',
      h1: 'Términos de uso',
      lead: 'En resumen: gantts.app es gratuito para cualquier uso, incluido el comercial. Lo que creas es tuyo. La herramienta se ofrece tal cual, sin garantías.',
      body: [
        ['1. Qué es este servicio', '<p>gantts.app es un creador de diagramas de Gantt gratuito que se ejecuta íntegramente en tu navegador. No hay cuentas, suscripciones ni almacenamiento de proyectos en servidor. Al usar el sitio aceptas estos términos.</p>'],
        ['2. Uso de la herramienta', '<p>Puedes usar gantts.app para proyectos personales, educativos y comerciales sin coste. No necesitas licencia ni permiso, y no hace falta atribución.</p>'],
        ['3. Tu contenido es tuyo', '<p>No reclamamos ningún derecho sobre los proyectos, tareas o archivos que generes. Como tus datos nunca llegan a nuestros servidores, no podríamos acceder a ellos aunque quisiéramos.</p>'],
        ['4. Tus datos y las copias de seguridad', '<p>Los proyectos se guardan en el almacenamiento local de tu navegador. Si borras los datos del navegador, usas modo privado o cambias de equipo, desaparecen. <strong>No conservamos ninguna copia y no podemos recuperar trabajo perdido.</strong> Si un proyecto es importante, exporta un archivo <code>.gantts</code>.</p>'],
        ['5. Disponibilidad y garantía', '<p>El servicio se ofrece gratuitamente y sin garantía de disponibilidad, «tal cual», sin garantías de ningún tipo. No garantizamos que los cálculos de ruta crítica sean adecuados para un fin concreto: las decisiones de planificación siguen siendo tuyas.</p>'],
        ['6. Limitación de responsabilidad', '<p>En la máxima medida permitida por la ley, no somos responsables de daños indirectos o consecuentes, ni de pérdidas de beneficios, datos o plazos derivados del uso del servicio.</p>'],
        ['7. Contacto', '<p>¿Dudas sobre estos términos? Escribe a <a href="mailto:synth88labs@gmail.com">synth88labs@gmail.com</a>.</p>'],
      ],
    },
    privacy: {
      title: 'Política de privacidad — gantts.app',
      description: 'gantts.app no tiene cuentas ni almacenamiento en servidor. Tus diagramas de Gantt se quedan en tu propio navegador.',
      h1: 'Política de privacidad',
      lead: 'Versión corta: gantts.app no tiene cuentas ni guarda tus proyectos en ningún servidor. Tus diagramas viven en tu propio navegador.',
      body: [
        ['Tus datos de proyecto', '<p>Cuando creas un diagrama, se guarda en el <strong>almacenamiento local</strong> de tu dispositivo. No se transmite ni se almacena en nuestros servidores. Si borras los datos del navegador, los proyectos desaparecen.</p>'],
        ['Enlaces para compartir', '<p>Al generar un enlace compartible, los datos del proyecto se codifican dentro del propio enlace (después del <code>#</code>). Viajan en la URL y no se almacenan en ningún servidor.</p>'],
        ['Lo que no recogemos', '<ul><li>No pedimos correo, nombre ni cuenta.</li><li>No subimos ni leemos el contenido de tus diagramas.</li><li>No vendemos datos: no tenemos tus datos.</li></ul>'],
        ['Cookies y analítica', '<p>Usamos <strong>Google Analytics 4</strong> para saber qué páginas resultan útiles: qué guías se leen, qué plantillas se descargan y si se abre el editor. Mide páginas, no planes: <strong>no se envía nada sobre los proyectos que creas</strong>, porque tus datos nunca salen del navegador.</p><p>Google Analytics recoge información habitual a nivel de página —la página que ves, tu ubicación aproximada, el navegador y el dispositivo, y cómo llegaste— y coloca dos cookies, <code>_ga</code> y <code>_ga_3ZFCTKWL1D</code>, que sirven para distinguir a un visitante de otro. Contienen un identificador aleatorio, no tu nombre ni nada que hayas escrito. No usamos <strong>cookies publicitarias</strong> y no vendemos ni compartimos estos datos. Google los trata según su <a href=\"https://policies.google.com/privacy\" rel=\"noopener\">política de privacidad</a>, y puedes desactivarlo con el <a href=\"https://tools.google.com/dlpage/gaoptout\" rel=\"noopener\">complemento de Google</a> o con cualquier bloqueador: la herramienta funciona igual.</p><p>Todo lo demás es <strong>almacenamiento local</strong> del navegador, no una cookie, y nunca sale de tu dispositivo: tus proyectos y preferencias como el tema claro u oscuro. Nuestro proveedor de alojamiento puede conservar registros de servidor habituales por seguridad y rendimiento.</p><p class=\"muted\"><small>Versiones anteriores de esta página decían que no usábamos cookies de seguimiento. Fue cierto hasta que añadimos Google Analytics el 19 de julio de 2026; esta página se actualizó el mismo día.</small></p>'],
        ['Contacto', '<p>¿Preguntas sobre privacidad? Escribe a <a href="mailto:synth88labs@gmail.com">synth88labs@gmail.com</a>.</p>'],
      ],
    },
    accessibility: {
      title: 'Declaración de accesibilidad — gantts.app',
      description: 'Hasta qué punto gantts.app cumple WCAG 2.2 AA: qué cumple, qué todavía no y cómo avisar de una barrera. Es una autoevaluación, sin auditoría externa.',
      h1: 'Declaración de accesibilidad',
      lead: 'Esta página explica hasta qué punto gantts.app es realmente accesible: qué cumple el nivel AA de WCAG 2.2, qué todavía no lo cumple y cómo contarnos una barrera. Está escrita para ser concreta en lugar de tranquilizadora: una afirmación vaga no sirve de nada a quien está decidiendo si podrá trabajar con esta herramienta.',
      callout: '<strong>¿Has encontrado una barrera?</strong> Escribe a <a href="mailto:synth88labs@gmail.com?subject=Accesibilidad%20—%20gantts.app">synth88labs@gmail.com</a> o abre una incidencia en <a href="https://github.com/Synth88Labs/gantts-app/issues" rel="noopener">GitHub</a>. Dinos qué navegador y qué tecnología de asistencia usabas y qué intentabas hacer. Los avisos sobre accesibilidad se responden los primeros.',
      body: [
        ['Declaración de conformidad', '<p>gantts.app cumple <strong>parcialmente</strong> el <a href="https://www.w3.org/TR/WCAG22/" rel="noopener">nivel AA de WCAG 2.2</a>. Cumplimiento parcial significa que la mayor parte de la herramienta satisface el estándar y que algunas partes todavía no. Las excepciones conocidas se enumeran más abajo en lugar de dejar que las descubras tú.</p><p>Esto es una <strong>autoevaluación</strong>. No ha sido auditada por un tercero, y el editor todavía no lo ha probado con un lector de pantalla una persona que use uno a diario. Ambas cosas limitan de verdad el peso que puede tener esta declaración, y preferimos decirlo antes que insinuar un nivel de garantía que no nos hemos ganado.</p>'],
        ['Lo que funciona', '<p>El diagrama de Gantt es la parte difícil del problema: un gráfico de barras codifica el significado en la posición y la longitud, información espacial que un lector de pantalla no puede transmitir describiendo una barra cada vez. Existen cuatro vías independientes para que el diagrama no sea la única forma de usar la herramienta.</p><ul><li><strong>Todas las barras de tarea son accesibles con el teclado</strong> y llevan una descripción de todo lo que la barra muestra visualmente: sus fechas, la duración, el progreso, la persona asignada, si está en la ruta crítica y de cuántas tareas depende.</li><li><strong>Las flechas mueven y redimensionan tareas.</strong> Izquierda y derecha desplazan un día laborable, con Mayús una semana, y Alt redimensiona el final. Las fechas resultantes se anuncian, así que oyes dónde ha quedado la tarea y no solo que se pulsó una tecla.</li><li><strong>El diagrama es una sola parada de tabulación, no doscientas.</strong> Un tabindex móvil hace que Tab rebase el diagrama de una vez; las flechas navegan dentro de él.</li><li><strong>Los botones de ajuste reprograman con un clic</strong>: adelantar o atrasar un día o una semana, alargar o acortar un día, sin arrastrar nada. Junto con los campos de fecha y el selector de dependencias del panel de tarea, esto significa que nada exige arrastrar.</li><li><strong>Una vista de tabla simple</strong> presenta todo el plan como una tabla HTML real, con encabezados de fila y de columna. Mucha gente trabajará únicamente desde ahí, y además sirve como vista de impresión y como lo que pegas en un correo.</li><li><strong>Una frase de resumen</strong> describe el diagrama en conjunto —número de tareas, rango de fechas, cuántas tareas están en la ruta crítica, cuántas van con retraso—, de modo que llegar a él no obliga a recorrer cada barra para entender su forma.</li><li><strong>La ruta crítica no se marca solo con color.</strong> Las barras críticas llevan un trazado diagonal y un borde distinto; las flechas de dependencia de la ruta crítica son discontinuas. Esto sobrevive a la escala de grises, a la impresión y al daltonismo. Lo mismo ocurre con la curva S, donde las tres líneas se distinguen por patrón de trazo además de por color.</li><li><strong>Se admite el modo de alto contraste de Windows.</strong> El modo de colores forzados sustituye los colores y elimina las imágenes de fondo, lo que suprimiría de golpe las dos señales de ruta crítica; por eso allí las barras críticas reciben un borde discontinuo.</li><li><strong>Funciona con pantalla táctil.</strong> El diagrama usa Pointer Events, así que se puede manejar con el dedo o con un lápiz, y las zonas activas crecen en pantallas táctiles.</li><li><strong>Se respeta la reducción de movimiento</strong> mediante <code>prefers-reduced-motion</code>.</li><li><strong>Las páginas de contenido</strong> —las guías, las plantillas y esta misma página— usan HTML semántico corriente, con un único h1, encabezados ordenados, regiones reales y foco visible.</li></ul>'],
        ['Lo que todavía no cumple', '<p>Estas son las carencias que conocemos. Si te topas con algo que no está en esta lista, dínoslo: eso es más útil que cualquier otra cosa de esta página.</p><ul><li><strong>No se ha hecho ninguna prueba con lectores de pantalla.</strong> El diagrama se ha construido siguiendo la especificación y se ha verificado en el código, lo que no es lo mismo que ser usable. NVDA, JAWS y VoiceOver pueden comportarse cada uno de forma distinta a lo que esperamos. Esta es la mayor carencia de esta declaración.</li><li><strong>Crear una dependencia arrastrando</strong> desde el punto de una barra tiene una alternativa solo con clics en el panel de tarea, pero el arrastre sigue siendo la vía más fácil de descubrir. La alternativa funciona; todavía no es igual de fácil de encontrar.</li><li><strong>Reordenar filas</strong> usa arrastrar y soltar nativo en la lista de tareas. Hay una alternativa con teclado (Alt con las flechas arriba y abajo), pero ninguna solo con clics.</li><li><strong>Algunos diálogos de exportación</strong> —en particular las opciones de PDF— no se han revisado con tanto cuidado como la interfaz principal en cuanto a orden de teclado y etiquetado.</li><li><strong>No hay auditoría formal ni VPAT.</strong> Si necesitas uno para una compra o una licitación, escríbenos e indícanos en qué formato lo necesitas.</li></ul>'],
        ['Cómo se evaluó', '<p>Revisado frente al nivel AA de WCAG 2.2 con pruebas manuales de teclado, inspección del árbol de accesibilidad, comprobaciones de estilo calculado para el contraste y el comportamiento en colores forzados, y comprobaciones automáticas que se ejecutan en cada compilación, incluida una que hace fallar la compilación si un elemento del diagrama pierde su etiqueta. Navegadores utilizados: versiones recientes de Chrome y Edge en Windows.</p><p>No se han usado: un lector de pantalla, un conjunto formal de herramientas de auditoría ni pruebas con personas con discapacidad. Esos son los siguientes pasos, en ese orden.</p>'],
        ['Por qué existe esta página', '<p>La mayoría de las herramientas de Gantt no publican nada sobre accesibilidad, o esconden su informe de conformidad tras una solicitud por correo. Eso hace imposible saber, antes de comprometerse con una herramienta, si vas a poder usarla. Preferimos publicar algo concreto e incompleto que no publicar nada, y preferimos que nos digan que nos equivocamos a no saberlo.</p>'],
        ['Última revisión', '<p class="muted"><small>Última revisión: 19 de julio de 2026. Esta declaración se actualiza cuando cambia la herramienta, no según un calendario.</small></p>'],
      ],
    },
  },

  fr: {
    legalNote: 'Ceci est une traduction de courtoisie. En cas de divergence, la version anglaise prévaut.',
    about: {
      title: 'À propos de gantts.app — diagrammes de Gantt',
      description: 'Qui est derrière gantts.app et pourquoi l’outil est gratuit, sans compte et sans envoi de vos données sur un serveur.',
      h1: 'À propos de gantts.app',
      lead: 'gantts.app est un petit projet indépendant : un créateur de diagrammes de Gantt qui s’ouvre et fonctionne, sans inscription et sans envoyer vos données ailleurs.',
      callout: 'Votre plan ne quitte jamais votre navigateur. Aucun serveur ne le stocke, aucun compte à créer, et rien à supprimer si vous arrêtez de l’utiliser.',
      body: [
        ['Pourquoi cet outil existe', '<p>La plupart des outils de planification exigent un compte avant même de vous laisser tracer une barre. Pour un planning rapide, c’est trop de friction. gantts.app s’ouvre directement dans le navigateur.</p>'],
        ['Comment ça marche', '<p>Tout s’exécute dans votre navigateur. Aucun serveur ne stocke de projet : votre planning reste sur votre machine et s’exporte en PDF, PNG, Excel, PowerPoint ou CSV.</p>'],
        ['Le modèle', '<p>Pas d’offre payante ni de fonction verrouillée. Les coûts sont minimes faute d’infrastructure, et un unique emplacement de parrainage discret dans l’application aide à les couvrir.</p>'],
        ['Open source', '<p>Le code est publié sur <a href="https://github.com/Synth88Labs/gantts-app" rel="noopener">GitHub</a> sous licence MIT. Un bug ou une idée ? Ouvrez-y un ticket.</p>'],
      ],
    },
    contact: {
      title: 'Contact — gantts.app',
      description: 'Comment joindre gantts.app : bugs, suggestions, demandes publicitaires ou toute autre question.',
      h1: 'Contact',
      lead: 'gantts.app est un petit projet. Il n’y a ni file de support ni système de tickets : les messages nous parviennent directement.',
      body: [
        ['E-mail', '<p>Pour tout — questions, bugs, suggestions ou demandes publicitaires :</p><p><a class="btn btn-primary" href="mailto:synth88labs@gmail.com?subject=Demande%20gantts.app">synth88labs@gmail.com</a></p>'],
        ['Signaler un bug', '<p>Le plus rapide pour tout sujet technique est un ticket GitHub : il est public, donc utile à d’autres.</p><ul><li><a href="https://github.com/Synth88Labs/gantts-app/issues" rel="noopener">Ouvrir un ticket</a></li><li><a href="https://github.com/Synth88Labs/gantts-app" rel="noopener">Consulter le code source</a></li></ul>'],
        ['Quoi indiquer', '<p>Tout s’exécutant dans votre navigateur et rien n’étant téléversé, nous ne pouvons pas consulter votre projet. Les détails comptent donc : navigateur et système, ce que vous avez fait, ce que vous attendiez, ce qui s’est produit, et si possible un fichier <code>.gantts</code> reproduisant le problème.</p>'],
      ],
    },
    terms: {
      title: 'Conditions d’utilisation — gantts.app',
      description: 'Conditions d’utilisation de gantts.app : gratuit pour un usage personnel et commercial, fourni en l’état, sans compte ni garantie.',
      h1: 'Conditions d’utilisation',
      lead: 'En bref : gantts.app est gratuit pour tout usage, y compris commercial. Ce que vous créez vous appartient. L’outil est fourni en l’état, sans garantie.',
      body: [
        ['1. Objet du service', '<p>gantts.app est un créateur de diagrammes de Gantt gratuit fonctionnant entièrement dans votre navigateur. Ni compte, ni abonnement, ni stockage de projet côté serveur. En utilisant le site, vous acceptez ces conditions.</p>'],
        ['2. Utilisation', '<p>Vous pouvez utiliser gantts.app pour des projets personnels, éducatifs et commerciaux, sans frais, sans licence et sans obligation d’attribution.</p>'],
        ['3. Votre contenu vous appartient', '<p>Nous ne revendiquons aucun droit sur les projets ou fichiers que vous produisez. Vos données n’atteignant jamais nos serveurs, nous ne pourrions pas y accéder même si nous le voulions.</p>'],
        ['4. Vos données et vos sauvegardes', '<p>Les projets sont stockés localement dans votre navigateur. Vider les données du navigateur, la navigation privée ou un changement d’appareil les supprime. <strong>Nous n’en conservons aucune copie et ne pouvons rien récupérer.</strong> Exportez un fichier <code>.gantts</code> pour vos sauvegardes.</p>'],
        ['5. Disponibilité et garantie', '<p>Le service est offert gratuitement, sans garantie de disponibilité, « en l’état », sans garantie d’aucune sorte. Nous ne garantissons pas qu’un calcul de chemin critique convienne à un usage particulier : les décisions de planification restent les vôtres.</p>'],
        ['6. Limitation de responsabilité', '<p>Dans la limite permise par la loi, nous ne sommes pas responsables des dommages indirects ou consécutifs, ni des pertes de profits, de données ou de délais liés à l’utilisation du service.</p>'],
        ['7. Contact', '<p>Une question ? Écrivez à <a href="mailto:synth88labs@gmail.com">synth88labs@gmail.com</a>.</p>'],
      ],
    },
    privacy: {
      title: 'Politique de confidentialité — gantts.app',
      description: 'gantts.app n’a ni compte ni stockage serveur. Vos diagrammes de Gantt restent dans votre propre navigateur.',
      h1: 'Politique de confidentialité',
      lead: 'Version courte : gantts.app n’a pas de compte et ne stocke aucun projet sur un serveur. Vos diagrammes vivent dans votre navigateur.',
      body: [
        ['Vos données de projet', '<p>Un diagramme créé est enregistré dans le <strong>stockage local</strong> de votre appareil. Rien n’est transmis ni conservé sur nos serveurs. Vider les données du navigateur supprime vos projets.</p>'],
        ['Liens de partage', '<p>Un lien partageable encode les données du projet dans le lien lui-même (après le <code>#</code>). Elles circulent dans l’URL et ne sont stockées sur aucun serveur.</p>'],
        ['Ce que nous ne collectons pas', '<ul><li>Ni e-mail, ni nom, ni compte.</li><li>Nous ne téléversons ni ne lisons le contenu de vos diagrammes.</li><li>Nous ne vendons pas de données : nous n’avons pas vos données.</li></ul>'],
        ['Cookies et mesure d’audience', '<p>Nous utilisons <strong>Google Analytics 4</strong> pour savoir quelles pages sont utiles : quels guides sont lus, quels modèles sont téléchargés, si l’éditeur est ouvert. Il mesure des pages, pas des plannings : <strong>rien de ce que vous créez n’est transmis</strong>, puisque vos données ne quittent jamais votre navigateur.</p><p>Google Analytics collecte les informations habituelles au niveau de la page — la page consultée, votre localisation approximative, votre navigateur et votre appareil, et la manière dont vous êtes arrivé — et dépose deux cookies, <code>_ga</code> et <code>_ga_3ZFCTKWL1D</code>, qui permettent de distinguer un visiteur d’un autre. Ils contiennent un identifiant aléatoire, ni votre nom ni ce que vous avez saisi. Nous n’utilisons <strong>aucun cookie publicitaire</strong> et ne vendons ni ne partageons ces données. Google les traite selon sa <a href=\"https://policies.google.com/privacy\" rel=\"noopener\">politique de confidentialité</a> ; vous pouvez refuser via le <a href=\"https://tools.google.com/dlpage/gaoptout\" rel=\"noopener\">module de Google</a> ou tout bloqueur — l’outil fonctionne à l’identique.</p><p>Tout le reste relève du <strong>stockage local</strong> du navigateur, et non de cookies : vos projets et vos préférences (thème clair ou sombre) restent sur votre appareil. Notre hébergeur peut conserver des journaux serveur standard à des fins de sécurité et de performance.</p><p class=\"muted\"><small>Les versions précédentes de cette page indiquaient l’absence de cookies de suivi. C’était exact jusqu’à l’ajout de Google Analytics le 19 juillet 2026 ; cette page a été mise à jour le jour même.</small></p>'],
        ['Contact', '<p>Une question sur la confidentialité ? Écrivez à <a href="mailto:synth88labs@gmail.com">synth88labs@gmail.com</a>.</p>'],
      ],
    },
    accessibility: {
      title: 'Déclaration d’accessibilité — gantts.app',
      description: 'Le niveau d’accessibilité réel de gantts.app face à WCAG 2.2 AA : ce qui est conforme, ce qui ne l’est pas encore, et comment signaler un obstacle.',
      h1: 'Déclaration d’accessibilité',
      lead: 'Cette page indique à quel point gantts.app est réellement accessible : ce qui est conforme au niveau AA de WCAG 2.2, ce qui ne l’est pas encore, et comment nous signaler un obstacle. Elle est écrite pour être précise plutôt que rassurante — une affirmation vague n’aide personne à décider s’il pourra travailler avec cet outil.',
      callout: '<strong>Vous avez rencontré un obstacle ?</strong> Écrivez à <a href="mailto:synth88labs@gmail.com?subject=Accessibilité%20—%20gantts.app">synth88labs@gmail.com</a> ou ouvrez un ticket sur <a href="https://github.com/Synth88Labs/gantts-app/issues" rel="noopener">GitHub</a>. Indiquez le navigateur et la technologie d’assistance que vous utilisiez, et ce que vous cherchiez à faire. Les signalements d’accessibilité sont traités en premier.',
      body: [
        ['Déclaration de conformité', '<p>gantts.app est <strong>partiellement conforme</strong> au <a href="https://www.w3.org/TR/WCAG22/" rel="noopener">niveau AA de WCAG 2.2</a>. Partiellement conforme signifie que l’essentiel de l’outil respecte la norme et que certaines parties ne la respectent pas encore. Les exceptions connues sont listées ci-dessous plutôt que laissées à votre découverte.</p><p>Il s’agit d’une <strong>auto-évaluation</strong>. Elle n’a pas fait l’objet d’un audit par un tiers, et l’éditeur n’a pas encore été testé avec un lecteur d’écran par une personne qui en utilise un au quotidien. Ces deux points limitent réellement le poids de cette déclaration, et nous préférons le dire plutôt que laisser croire à un niveau de garantie que nous n’avons pas acquis.</p>'],
        ['Ce qui fonctionne', '<p>Le diagramme de Gantt est la partie difficile du problème : un graphique à barres encode le sens dans la position et la longueur, une information spatiale qu’un lecteur d’écran ne peut pas restituer en décrivant une barre à la fois. Quatre chemins distincts existent pour que le diagramme ne soit pas la seule façon d’utiliser l’outil.</p><ul><li><strong>Chaque barre de tâche est atteignable au clavier</strong> et porte une description de tout ce que la barre montre visuellement : ses dates, sa durée, son avancement, la personne affectée, son appartenance au chemin critique et le nombre de tâches dont elle dépend.</li><li><strong>Les flèches déplacent et redimensionnent les tâches.</strong> Gauche et droite décalent d’un jour ouvré, Maj d’une semaine, Alt redimensionne la fin. Les dates obtenues sont annoncées : vous entendez où la tâche a atterri, et pas seulement qu’une touche a été pressée.</li><li><strong>Le diagramme est un seul arrêt de tabulation, pas deux cents.</strong> Un tabindex glissant fait que Tab franchit le diagramme d’une pression ; les flèches naviguent à l’intérieur.</li><li><strong>Les boutons de décalage replanifient au clic</strong> — reculer ou avancer d’un jour ou d’une semaine, allonger ou raccourcir d’un jour, sans aucun glisser-déposer. Avec les champs de date et le sélecteur de dépendances du panneau de tâche, cela signifie que rien n’exige de glisser.</li><li><strong>Une vue tableau simple</strong> restitue tout le planning sous forme de véritable tableau HTML, avec en-têtes de ligne et de colonne. Beaucoup de personnes travailleront uniquement à partir de là, et cette vue sert aussi à l’impression et au collage dans un e-mail.</li><li><strong>Une phrase de synthèse</strong> décrit le diagramme dans son ensemble — nombre de tâches, plage de dates, tâches sur le chemin critique, tâches en retard — de sorte qu’y arriver n’oblige pas à explorer chaque barre pour en comprendre la forme.</li><li><strong>Le chemin critique n’est pas signalé par la couleur seule.</strong> Les barres critiques portent une hachure diagonale et une bordure distincte ; les flèches de dépendance du chemin critique sont en pointillés. Cela survit au niveau de gris, à l’impression et au daltonisme. Il en va de même pour la courbe en S, dont les trois lignes se distinguent par leur motif de trait autant que par leur couleur.</li><li><strong>Le contraste élevé de Windows est pris en charge.</strong> Le mode couleurs forcées remplace les couleurs et supprime les images de fond, ce qui retirerait d’un coup les deux indices du chemin critique ; les barres critiques y reçoivent donc une bordure en pointillés.</li><li><strong>Le tactile fonctionne.</strong> Le diagramme utilise les Pointer Events : il s’utilise au doigt ou au stylet, et les cibles s’agrandissent sur écran tactile.</li><li><strong>Le mouvement réduit est respecté</strong> via <code>prefers-reduced-motion</code>.</li><li><strong>Les pages de contenu</strong> — les guides, les modèles et cette page — utilisent du HTML sémantique ordinaire, avec un seul h1, des titres ordonnés, de vrais repères et un focus visible.</li></ul>'],
        ['Ce qui n’est pas encore conforme', '<p>Voici les manques que nous connaissons. Si vous butez sur quelque chose qui n’est pas dans cette liste, dites-le-nous : c’est plus utile que tout le reste de cette page.</p><ul><li><strong>Aucun test avec lecteur d’écran n’a été réalisé.</strong> Le diagramme a été construit d’après la spécification et vérifié dans le code, ce qui n’équivaut pas à être utilisable. NVDA, JAWS et VoiceOver peuvent chacun se comporter autrement que ce que nous attendons. C’est la plus grande lacune de cette déclaration.</li><li><strong>Créer une dépendance par glisser-déposer</strong> depuis le point d’une barre a une alternative au clic seul dans le panneau de tâche, mais le glisser reste le chemin le plus visible. L’alternative fonctionne ; elle n’est pas encore aussi facile à trouver.</li><li><strong>Réordonner les lignes</strong> repose sur le glisser-déposer natif dans la liste des tâches. Il existe une alternative clavier (Alt avec les flèches haut et bas) mais aucune au clic seul.</li><li><strong>Certaines boîtes de dialogue d’export</strong> — les options PDF en particulier — n’ont pas été examinées d’aussi près que l’interface principale pour l’ordre de tabulation et l’étiquetage.</li><li><strong>Pas d’audit formel ni de VPAT.</strong> S’il vous en faut un pour un achat public ou un appel d’offres, contactez-nous en précisant le format attendu.</li></ul>'],
        ['Comment l’évaluation a été faite', '<p>Revue au regard du niveau AA de WCAG 2.2 par des tests clavier manuels, l’inspection de l’arbre d’accessibilité, des vérifications de styles calculés pour le contraste et le comportement en couleurs forcées, et des contrôles automatiques exécutés à chaque build — dont un qui fait échouer le build si un élément du diagramme perd son étiquette. Navigateurs utilisés : versions récentes de Chrome et Edge sous Windows.</p><p>Non utilisés : un lecteur d’écran, une suite d’audit formelle, ou des tests par des personnes en situation de handicap. Ce sont les prochaines étapes, dans cet ordre.</p>'],
        ['Pourquoi cette page existe', '<p>La plupart des outils de Gantt ne publient rien sur l’accessibilité, ou cachent leur rapport de conformité derrière une demande par e-mail. Impossible, dès lors, de savoir avant de s’engager si l’on pourra s’en servir. Nous préférons publier quelque chose de précis et d’incomplet plutôt que rien du tout — et qu’on nous dise que nous avons tort plutôt que de l’ignorer.</p>'],
        ['Dernière révision', '<p class="muted"><small>Dernière révision : 19 juillet 2026. Cette déclaration est mise à jour quand l’outil change, et non selon un calendrier.</small></p>'],
      ],
    },
  },

  de: {
    legalNote: 'Dies ist eine Übersetzung zur Information. Im Zweifelsfall gilt die englische Fassung.',
    about: {
      title: 'Über gantts.app — Gantt-Diagramm-Generator',
      description: 'Wer hinter gantts.app steht und warum das Tool kostenlos ist, ohne Konto und ohne Daten auf einen Server zu laden.',
      h1: 'Über gantts.app',
      lead: 'gantts.app ist ein kleines, unabhängiges Projekt: ein Gantt-Generator, der einfach aufgeht und funktioniert — ohne Anmeldung und ohne Ihre Daten irgendwohin zu senden.',
      callout: 'Ihr Plan verlässt den Browser nie. Kein Server speichert ihn, kein Konto ist nötig, und es gibt nichts zu löschen, wenn Sie aufhören.',
      body: [
        ['Warum es das gibt', '<p>Die meisten Planungswerkzeuge verlangen ein Konto, bevor Sie auch nur einen Balken zeichnen dürfen. Für einen schnellen Plan ist das zu viel Reibung. gantts.app öffnet sich direkt im Browser.</p>'],
        ['Wie es funktioniert', '<p>Alles läuft in Ihrem Browser. Kein Server speichert Projekte — Ihre Planung bleibt auf Ihrem Gerät und lässt sich als PDF, PNG, Excel, PowerPoint oder CSV exportieren.</p>'],
        ['Das Modell', '<p>Keine Bezahlstufen, keine gesperrten Funktionen. Die Kosten sind gering, weil es keine Infrastruktur gibt; ein einzelner dezenter Sponsoring-Platz in der App hilft, sie zu decken.</p>'],
        ['Open Source', '<p>Der Quellcode liegt auf <a href="https://github.com/Synth88Labs/gantts-app" rel="noopener">GitHub</a> unter MIT-Lizenz. Fehler oder Ideen? Dort ein Issue eröffnen.</p>'],
      ],
    },
    contact: {
      title: 'Kontakt — gantts.app',
      description: 'So erreichen Sie gantts.app: Fehlerberichte, Vorschläge, Werbeanfragen oder alles andere.',
      h1: 'Kontakt',
      lead: 'gantts.app ist ein kleines Projekt. Es gibt keine Support-Warteschlange und kein Ticketsystem — Nachrichten kommen direkt bei uns an.',
      body: [
        ['E-Mail', '<p>Für alles — Fragen, Fehler, Vorschläge oder Werbeanfragen:</p><p><a class="btn btn-primary" href="mailto:synth88labs@gmail.com?subject=Anfrage%20gantts.app">synth88labs@gmail.com</a></p>'],
        ['Fehler melden', '<p>Am schnellsten geht Technisches über ein GitHub-Issue — öffentlich, damit andere mit demselben Problem es finden.</p><ul><li><a href="https://github.com/Synth88Labs/gantts-app/issues" rel="noopener">Issue eröffnen</a></li><li><a href="https://github.com/Synth88Labs/gantts-app" rel="noopener">Quellcode ansehen</a></li></ul>'],
        ['Was hilft', '<p>Da alles im Browser läuft und nichts hochgeladen wird, können wir Ihr Projekt nicht nachschlagen. Deshalb zählen Details: Browser und Betriebssystem, was Sie getan haben, was Sie erwartet haben, was passiert ist — und nach Möglichkeit eine <code>.gantts</code>-Datei, die den Fehler reproduziert.</p>'],
      ],
    },
    terms: {
      title: 'Nutzungsbedingungen — gantts.app',
      description: 'Nutzungsbedingungen für gantts.app: kostenlos für private und kommerzielle Projekte, ohne Konto, ohne Gewährleistung.',
      h1: 'Nutzungsbedingungen',
      lead: 'Kurz gefasst: gantts.app ist für jeden Zweck kostenlos, auch kommerziell. Was Sie erstellen, gehört Ihnen. Das Tool wird ohne Gewährleistung bereitgestellt.',
      body: [
        ['1. Gegenstand des Dienstes', '<p>gantts.app ist ein kostenloser Gantt-Generator, der vollständig im Browser läuft. Keine Konten, keine Abonnements, keine serverseitige Speicherung. Mit der Nutzung akzeptieren Sie diese Bedingungen.</p>'],
        ['2. Nutzung', '<p>Sie dürfen gantts.app kostenlos für private, schulische und kommerzielle Projekte nutzen. Keine Lizenz, keine Genehmigung, keine Namensnennung nötig.</p>'],
        ['3. Ihre Inhalte gehören Ihnen', '<p>Wir erheben keinerlei Anspruch auf Ihre Projekte oder exportierten Dateien. Da Ihre Daten unsere Server nie erreichen, könnten wir gar nicht darauf zugreifen.</p>'],
        ['4. Ihre Daten und Sicherungen', '<p>Projekte liegen im lokalen Speicher Ihres Browsers. Browserdaten löschen, privates Surfen oder ein Gerätewechsel entfernt sie. <strong>Wir haben keine Kopie und können verlorene Arbeit nicht wiederherstellen.</strong> Exportieren Sie wichtige Projekte als <code>.gantts</code>-Datei.</p>'],
        ['5. Verfügbarkeit und Gewährleistung', '<p>Der Dienst wird kostenlos und ohne Verfügbarkeitszusage angeboten, „wie besehen“ und ohne Gewährleistung jeder Art. Wir sichern nicht zu, dass eine Kritische-Pfad-Berechnung für einen bestimmten Zweck geeignet ist — Planungsentscheidungen bleiben Ihre.</p>'],
        ['6. Haftungsbeschränkung', '<p>Soweit gesetzlich zulässig haften wir nicht für mittelbare Schäden oder Folgeschäden, entgangenen Gewinn, Datenverlust oder versäumte Termine aus der Nutzung des Dienstes.</p>'],
        ['7. Kontakt', '<p>Fragen zu diesen Bedingungen? Schreiben Sie an <a href="mailto:synth88labs@gmail.com">synth88labs@gmail.com</a>.</p>'],
      ],
    },
    privacy: {
      title: 'Datenschutzerklärung — gantts.app',
      description: 'gantts.app hat weder Konten noch serverseitige Speicherung. Ihre Gantt-Diagramme bleiben in Ihrem eigenen Browser.',
      h1: 'Datenschutzerklärung',
      lead: 'Kurz gefasst: gantts.app hat keine Konten und speichert keine Projekte auf einem Server. Ihre Diagramme leben in Ihrem Browser.',
      body: [
        ['Ihre Projektdaten', '<p>Ein erstelltes Diagramm wird im <strong>lokalen Speicher</strong> Ihres Geräts abgelegt. Es wird weder übertragen noch auf unseren Servern gespeichert. Löschen Sie Ihre Browserdaten, sind die Projekte weg.</p>'],
        ['Freigabe-Links', '<p>Ein Freigabe-Link kodiert die Projektdaten im Link selbst (nach dem <code>#</code>). Sie reisen in der URL und werden auf keinem Server gespeichert.</p>'],
        ['Was wir nicht erheben', '<ul><li>Keine E-Mail, kein Name, kein Konto.</li><li>Wir laden Diagramminhalte weder hoch noch lesen wir sie.</li><li>Wir verkaufen keine Daten — wir haben Ihre Daten nicht.</li></ul>'],
        ['Cookies und Analyse', '<p>Wir verwenden <strong>Google Analytics 4</strong>, um zu sehen, welche Seiten nützlich sind: welche Ratgeber gelesen und welche Vorlagen heruntergeladen werden und ob der Editor geöffnet wird. Gemessen werden Seiten, keine Pläne: <strong>Über Ihre Projekte wird nichts übertragen</strong>, denn Ihre Daten verlassen den Browser ohnehin nicht.</p><p>Google Analytics erfasst die üblichen seitenbezogenen Angaben — aufgerufene Seite, ungefährer Standort, Browser und Gerät sowie die Herkunft des Besuchs — und setzt zwei Cookies, <code>_ga</code> und <code>_ga_3ZFCTKWL1D</code>, die einen Besucher von einem anderen unterscheiden. Sie enthalten eine zufällige Kennung, nicht Ihren Namen und nichts, was Sie eingegeben haben. <strong>Werbe-Cookies</strong> setzen wir nicht, und wir verkaufen oder teilen diese Daten nicht. Google verarbeitet sie gemäß seiner <a href=\"https://policies.google.com/privacy\" rel=\"noopener\">Datenschutzerklärung</a>; widersprechen können Sie über das <a href=\"https://tools.google.com/dlpage/gaoptout\" rel=\"noopener\">Browser-Add-on von Google</a> oder jeden Blocker — das Werkzeug funktioniert unverändert.</p><p>Alles Übrige liegt im <strong>lokalen Speicher</strong> des Browsers, nicht in Cookies, und verlässt Ihr Gerät nie: Ihre Projekte und Einstellungen wie das helle oder dunkle Design. Unser Hoster kann übliche Server-Logs zu Sicherheits- und Leistungszwecken aufbewahren.</p><p class=\"muted\"><small>Frühere Fassungen dieser Seite nannten keine Tracking-Cookies. Das galt bis zur Einführung von Google Analytics am 19. Juli 2026; die Seite wurde am selben Tag aktualisiert.</small></p>'],
        ['Kontakt', '<p>Fragen zum Datenschutz? Schreiben Sie an <a href="mailto:synth88labs@gmail.com">synth88labs@gmail.com</a>.</p>'],
      ],
    },
    accessibility: {
      title: 'Erklärung zur Barrierefreiheit — gantts.app',
      description: 'Wie barrierefrei gantts.app gemessen an WCAG 2.2 AA ist: was konform ist, was noch nicht, und wie Sie eine Barriere melden. Selbsteinschätzung, kein Audit.',
      h1: 'Erklärung zur Barrierefreiheit',
      lead: 'Diese Seite sagt, wie barrierefrei gantts.app tatsächlich ist: was der Stufe AA von WCAG 2.2 entspricht, was noch nicht, und wie Sie uns eine Barriere melden. Sie ist bewusst konkret statt beruhigend geschrieben — eine vage Aussage hilft niemandem, der entscheiden muss, ob er mit diesem Werkzeug arbeiten kann.',
      callout: '<strong>Auf eine Barriere gestoßen?</strong> Schreiben Sie an <a href="mailto:synth88labs@gmail.com?subject=Barrierefreiheit%20—%20gantts.app">synth88labs@gmail.com</a> oder eröffnen Sie ein Issue auf <a href="https://github.com/Synth88Labs/gantts-app/issues" rel="noopener">GitHub</a>. Nennen Sie uns Browser und assistive Technologie sowie das, was Sie vorhatten. Meldungen zur Barrierefreiheit werden zuerst beantwortet.',
      body: [
        ['Konformitätserklärung', '<p>gantts.app ist <strong>teilweise konform</strong> mit <a href="https://www.w3.org/TR/WCAG22/" rel="noopener">WCAG 2.2 Stufe AA</a>. Teilweise konform heißt: Der größte Teil des Werkzeugs erfüllt den Standard, einige Teile noch nicht. Die bekannten Ausnahmen sind unten aufgeführt, statt sie Ihnen zum Selbstentdecken zu überlassen.</p><p>Dies ist eine <strong>Selbsteinschätzung</strong>. Sie wurde nicht von Dritten auditiert, und der Editor wurde noch nicht von einer Person, die täglich einen Screenreader nutzt, mit einem Screenreader getestet. Beides begrenzt real, wie viel Gewicht diese Erklärung tragen kann, und wir sagen das lieber, als ein Maß an Sicherheit anzudeuten, das wir uns nicht erarbeitet haben.</p>'],
        ['Was funktioniert', '<p>Das Gantt-Diagramm ist der schwierige Teil dieses Problems: Ein Balkendiagramm kodiert Bedeutung in Position und Länge — räumliche Information, die ein Screenreader nicht vermitteln kann, indem er einen Balken nach dem anderen beschreibt. Es gibt vier voneinander unabhängige Wege, damit das Diagramm nicht die einzige Art ist, das Werkzeug zu benutzen.</p><ul><li><strong>Jeder Vorgangsbalken ist per Tastatur erreichbar</strong> und trägt eine Beschreibung von allem, was der Balken visuell zeigt: Termine, Dauer, Fortschritt, zugewiesene Person, Zugehörigkeit zum kritischen Pfad und die Zahl der Vorgänge, von denen er abhängt.</li><li><strong>Pfeiltasten verschieben und verändern Vorgänge.</strong> Links und rechts verschieben um einen Arbeitstag, mit Umschalt um eine Woche, mit Alt wird das Ende verändert. Die entstehenden Termine werden angesagt — Sie hören also, wo der Vorgang gelandet ist, und nicht nur, dass eine Taste gedrückt wurde.</li><li><strong>Das Diagramm ist ein Tabstopp, nicht zweihundert.</strong> Ein wanderndes tabindex sorgt dafür, dass Tab das Diagramm mit einem Druck überspringt; die Pfeiltasten navigieren darin.</li><li><strong>Schaltflächen zum Verschieben planen per Klick um</strong> — einen Tag oder eine Woche vor oder zurück, um einen Tag verlängern oder verkürzen, ganz ohne Ziehen. Zusammen mit den Datumsfeldern und der Abhängigkeitsauswahl im Vorgangsbereich heißt das: Nichts erfordert Ziehen.</li><li><strong>Eine einfache Tabellenansicht</strong> gibt den gesamten Plan als echte HTML-Tabelle mit Zeilen- und Spaltenüberschriften aus. Viele werden ausschließlich damit arbeiten; sie dient zugleich als Druckansicht und als das, was Sie in eine E-Mail einfügen.</li><li><strong>Ein zusammenfassender Satz</strong> beschreibt das Diagramm als Ganzes — Anzahl der Vorgänge, Zeitraum, wie viele Vorgänge auf dem kritischen Pfad liegen, wie viele überfällig sind —, sodass man nicht jeden Balken abgehen muss, um seine Gestalt zu erfassen.</li><li><strong>Der kritische Pfad ist nicht allein durch Farbe gekennzeichnet.</strong> Kritische Balken tragen eine diagonale Schraffur und einen eigenen Rahmen; Abhängigkeitspfeile auf dem kritischen Pfad sind gestrichelt. Das übersteht Graustufen, Druck und Farbenblindheit. Dasselbe gilt für die S-Kurve, deren drei Linien sich neben der Farbe auch im Strichmuster unterscheiden.</li><li><strong>Windows-Kontrastmodus wird unterstützt.</strong> Der Modus erzwungener Farben ersetzt Farben und entfernt Hintergrundbilder, was sonst beide Hinweise auf den kritischen Pfad zugleich beseitigen würde; kritische Balken erhalten dort deshalb einen gestrichelten Rahmen.</li><li><strong>Touch funktioniert.</strong> Das Diagramm nutzt Pointer Events, lässt sich also mit Finger oder Stift bedienen, und die Trefferflächen wachsen auf Touchscreens.</li><li><strong>Reduzierte Bewegung wird respektiert</strong> über <code>prefers-reduced-motion</code>.</li><li><strong>Inhaltsseiten</strong> — die Anleitungen, die Vorlagen und diese Seite — verwenden gewöhnliches semantisches HTML mit einem einzigen h1, geordneten Überschriften, echten Landmarks und sichtbarem Fokus.</li></ul>'],
        ['Was noch nicht konform ist', '<p>Das sind die Lücken, die wir kennen. Wenn Sie auf etwas stoßen, das nicht auf dieser Liste steht, sagen Sie es uns — das ist nützlicher als alles andere auf dieser Seite.</p><ul><li><strong>Es wurde nicht mit Screenreadern getestet.</strong> Das Diagramm wurde gegen die Spezifikation gebaut und im Code verifiziert, was nicht dasselbe ist wie benutzbar zu sein. NVDA, JAWS und VoiceOver können sich jeweils anders verhalten, als wir erwarten. Das ist die größte Lücke in dieser Erklärung.</li><li><strong>Eine Abhängigkeit per Ziehen anlegen</strong> — vom Punkt an einem Balken — hat im Vorgangsbereich eine Alternative, die nur Klicks braucht, doch das Ziehen bleibt der auffälligere Weg. Die Alternative funktioniert; sie ist nur noch nicht ebenso leicht zu finden.</li><li><strong>Zeilen umsortieren</strong> nutzt natives Drag-and-drop in der Vorgangsliste. Es gibt eine Tastaturalternative (Alt mit Pfeil auf und ab), aber keine, die nur Klicks braucht.</li><li><strong>Einige Export-Dialoge</strong> — besonders die PDF-Optionen — wurden hinsichtlich Tastaturreihenfolge und Beschriftung nicht so sorgfältig geprüft wie die Hauptoberfläche.</li><li><strong>Kein formales Audit, kein VPAT.</strong> Wenn Sie für eine Beschaffung eines brauchen, schreiben Sie uns und nennen Sie das benötigte Format.</li></ul>'],
        ['Wie geprüft wurde', '<p>Geprüft gegen WCAG 2.2 Stufe AA mit manuellen Tastaturtests, Inspektion des Accessibility-Trees, Prüfungen berechneter Stile für Kontrast und Verhalten bei erzwungenen Farben sowie automatischen Prüfungen bei jedem Build — darunter eine, die den Build scheitern lässt, wenn ein Diagrammelement seine Beschriftung verliert. Verwendete Browser: aktuelle Versionen von Chrome und Edge unter Windows.</p><p>Nicht verwendet: ein Screenreader, eine formale Audit-Werkzeugsammlung oder Tests durch Menschen mit Behinderung. Das sind die nächsten Schritte, in dieser Reihenfolge.</p>'],
        ['Warum es diese Seite gibt', '<p>Die meisten Gantt-Werkzeuge veröffentlichen nichts zur Barrierefreiheit oder verstecken einen Konformitätsbericht hinter einer E-Mail-Anfrage. Damit lässt sich vor der Festlegung auf ein Werkzeug nicht beurteilen, ob man damit arbeiten kann. Wir veröffentlichen lieber etwas Konkretes und Unvollständiges als gar nichts — und lassen uns lieber sagen, dass wir falsch liegen, als es nicht zu erfahren.</p>'],
        ['Letzte Überprüfung', '<p class="muted"><small>Zuletzt geprüft am 19. Juli 2026. Diese Erklärung wird aktualisiert, wenn sich das Werkzeug ändert, nicht nach einem festen Zeitplan.</small></p>'],
      ],
    },
  },

  pt: {
    legalNote: 'Esta é uma tradução de cortesia. Em caso de divergência, prevalece a versão em inglês.',
    about: {
      title: 'Sobre o gantts.app — gráficos de Gantt',
      description: 'Quem está por trás do gantts.app e por que a ferramenta é gratuita, sem contas e sem enviar seus dados a servidores.',
      h1: 'Sobre o gantts.app',
      lead: 'O gantts.app é um projeto pequeno e independente: um criador de gráficos de Gantt que abre e funciona, sem cadastro e sem enviar seus dados para lugar nenhum.',
      callout: 'Seu plano nunca sai do navegador. Nenhum servidor o armazena, não há conta para criar e não há nada para apagar se você parar de usar.',
      body: [
        ['Por que existe', '<p>A maioria das ferramentas de planejamento exige conta antes de deixar você desenhar uma única barra. Para um plano rápido, é atrito demais. O gantts.app abre direto no navegador.</p>'],
        ['Como funciona', '<p>Tudo roda no seu navegador. Nenhum servidor guarda projetos — seu planejamento fica no seu computador e pode ser exportado em PDF, PNG, Excel, PowerPoint ou CSV.</p>'],
        ['O modelo', '<p>Não há planos pagos nem recursos bloqueados. Os custos são mínimos porque não há infraestrutura, e um único espaço discreto de patrocínio no aplicativo ajuda a cobri-los.</p>'],
        ['Código aberto', '<p>O código está no <a href="https://github.com/Synth88Labs/gantts-app" rel="noopener">GitHub</a> sob licença MIT. Encontrou um erro ou tem uma ideia? Abra uma issue por lá.</p>'],
      ],
    },
    contact: {
      title: 'Contato — gantts.app',
      description: 'Como falar com o gantts.app: erros, sugestões, consultas de publicidade ou qualquer outro assunto.',
      h1: 'Contato',
      lead: 'O gantts.app é um projeto pequeno. Não há fila de suporte nem sistema de tickets — as mensagens chegam direto a nós.',
      body: [
        ['E-mail', '<p>Para qualquer coisa — dúvidas, erros, sugestões ou publicidade:</p><p><a class="btn btn-primary" href="mailto:synth88labs@gmail.com?subject=Contato%20gantts.app">synth88labs@gmail.com</a></p>'],
        ['Relatar um erro', '<p>O caminho mais rápido para questões técnicas é uma issue no GitHub — é pública, então outras pessoas com o mesmo problema conseguem encontrá-la.</p><ul><li><a href="https://github.com/Synth88Labs/gantts-app/issues" rel="noopener">Abrir uma issue</a></li><li><a href="https://github.com/Synth88Labs/gantts-app" rel="noopener">Ver o código-fonte</a></li></ul>'],
        ['O que incluir', '<p>Como tudo roda no seu navegador e nada é enviado, não conseguimos consultar seu projeto. Por isso os detalhes importam: navegador e sistema, o que você fez, o que esperava, o que aconteceu — e, se possível, um arquivo <code>.gantts</code> que reproduza o problema.</p>'],
      ],
    },
    terms: {
      title: 'Termos de uso — gantts.app',
      description: 'Termos de uso do gantts.app: gratuito para projetos pessoais e comerciais, fornecido no estado em que se encontra, sem conta e sem garantia.',
      h1: 'Termos de uso',
      lead: 'Resumindo: o gantts.app é gratuito para qualquer uso, inclusive comercial. O que você cria é seu. A ferramenta é fornecida no estado em que se encontra, sem garantias.',
      body: [
        ['1. O que é este serviço', '<p>O gantts.app é um criador de gráficos de Gantt gratuito que roda inteiramente no navegador. Sem contas, assinaturas ou armazenamento de projetos em servidor. Ao usar o site, você aceita estes termos.</p>'],
        ['2. Uso da ferramenta', '<p>Você pode usar o gantts.app em projetos pessoais, educacionais e comerciais sem custo. Não precisa de licença, permissão nem atribuição.</p>'],
        ['3. Seu conteúdo é seu', '<p>Não reivindicamos direitos sobre os projetos ou arquivos que você gera. Como seus dados nunca chegam aos nossos servidores, não poderíamos acessá-los nem se quiséssemos.</p>'],
        ['4. Seus dados e backups', '<p>Os projetos ficam no armazenamento local do navegador. Limpar os dados do navegador, usar janela anônima ou trocar de aparelho os remove. <strong>Não guardamos cópia e não conseguimos recuperar trabalho perdido.</strong> Exporte um arquivo <code>.gantts</code> para ter backup.</p>'],
        ['5. Disponibilidade e garantia', '<p>O serviço é oferecido gratuitamente e sem garantia de disponibilidade, no estado em que se encontra, sem garantias de qualquer tipo. Não garantimos que um cálculo de caminho crítico sirva a um fim específico — as decisões de planejamento continuam sendo suas.</p>'],
        ['6. Limitação de responsabilidade', '<p>Na máxima extensão permitida por lei, não somos responsáveis por danos indiretos ou consequentes, nem por lucros cessantes, perda de dados ou prazos perdidos decorrentes do uso do serviço.</p>'],
        ['7. Contato', '<p>Dúvidas sobre estes termos? Escreva para <a href="mailto:synth88labs@gmail.com">synth88labs@gmail.com</a>.</p>'],
      ],
    },
    privacy: {
      title: 'Política de privacidade — gantts.app',
      description: 'O gantts.app não tem contas nem armazenamento em servidor. Seus gráficos de Gantt ficam no seu próprio navegador.',
      h1: 'Política de privacidade',
      lead: 'Versão curta: o gantts.app não tem contas e não guarda seus projetos em servidor. Seus gráficos ficam no seu navegador.',
      body: [
        ['Seus dados de projeto', '<p>Ao criar um gráfico, ele é salvo no <strong>armazenamento local</strong> do seu dispositivo. Nada é transmitido ou guardado em nossos servidores. Se você limpar os dados do navegador, os projetos somem.</p>'],
        ['Links compartilháveis', '<p>Um link compartilhável codifica os dados do projeto no próprio link (depois do <code>#</code>). Eles viajam na URL e não são armazenados em servidor.</p>'],
        ['O que não coletamos', '<ul><li>Não pedimos e-mail, nome nem conta.</li><li>Não enviamos nem lemos o conteúdo dos seus gráficos.</li><li>Não vendemos dados — não temos seus dados.</li></ul>'],
        ['Cookies e análise', '<p>Usamos o <strong>Google Analytics 4</strong> para saber quais páginas são úteis: quais guias são lidos, quais modelos são baixados e se o editor é aberto. Ele mede páginas, não planos: <strong>nada sobre os projetos que você cria é enviado</strong>, porque seus dados nunca saem do navegador.</p><p>O Google Analytics coleta as informações habituais de página — a página acessada, sua localização aproximada, navegador e dispositivo, e como você chegou — e grava dois cookies, <code>_ga</code> e <code>_ga_3ZFCTKWL1D</code>, que distinguem um visitante de outro. Eles contêm um identificador aleatório, não seu nome nem nada que você digitou. Não usamos <strong>cookies de publicidade</strong> e não vendemos nem compartilhamos esses dados. O Google os trata conforme a sua <a href=\"https://policies.google.com/privacy\" rel=\"noopener\">política de privacidade</a>, e você pode recusar com o <a href=\"https://tools.google.com/dlpage/gaoptout\" rel=\"noopener\">complemento do Google</a> ou qualquer bloqueador — a ferramenta funciona igual.</p><p>Todo o resto fica no <strong>armazenamento local</strong> do navegador, não em cookies, e nunca sai do seu dispositivo: seus projetos e preferências como tema claro ou escuro. Nosso provedor de hospedagem pode manter registros de servidor comuns por segurança e desempenho.</p><p class=\"muted\"><small>Versões anteriores desta página diziam que não usávamos cookies de rastreamento. Isso foi verdade até adicionarmos o Google Analytics em 19 de julho de 2026; esta página foi atualizada no mesmo dia.</small></p>'],
        ['Contato', '<p>Dúvidas sobre privacidade? Escreva para <a href="mailto:synth88labs@gmail.com">synth88labs@gmail.com</a>.</p>'],
      ],
    },
    accessibility: {
      title: 'Declaração de acessibilidade — gantts.app',
      description: 'O quanto o gantts.app é acessível segundo a WCAG 2.2 AA: o que está conforme, o que ainda não está e como relatar uma barreira que você encontrar.',
      h1: 'Declaração de acessibilidade',
      lead: 'Esta página diz o quanto o gantts.app é realmente acessível: o que está conforme o nível AA da WCAG 2.2, o que ainda não está e como nos contar sobre uma barreira. Ela foi escrita para ser específica em vez de tranquilizadora — uma afirmação vaga não serve para quem precisa decidir se conseguirá trabalhar com esta ferramenta.',
      callout: '<strong>Encontrou uma barreira?</strong> Escreva para <a href="mailto:synth88labs@gmail.com?subject=Acessibilidade%20—%20gantts.app">synth88labs@gmail.com</a> ou abra uma issue no <a href="https://github.com/Synth88Labs/gantts-app/issues" rel="noopener">GitHub</a>. Diga qual navegador e qual tecnologia assistiva você usava e o que estava tentando fazer. Relatos sobre acessibilidade são respondidos primeiro.',
      body: [
        ['Declaração de conformidade', '<p>O gantts.app está <strong>parcialmente conforme</strong> com o <a href="https://www.w3.org/TR/WCAG22/" rel="noopener">nível AA da WCAG 2.2</a>. Parcialmente conforme significa que a maior parte da ferramenta atende ao padrão e algumas partes ainda não. As exceções conhecidas estão listadas abaixo, em vez de ficarem para você descobrir.</p><p>Isto é uma <strong>autoavaliação</strong>. Não foi auditada por terceiros, e o editor ainda não foi testado com leitor de tela por alguém que use um leitor de tela diariamente. As duas coisas são limites reais ao peso que esta declaração pode ter, e preferimos dizer isso a insinuar um nível de garantia que não conquistamos.</p>'],
        ['O que funciona', '<p>O gráfico de Gantt é a parte difícil deste problema: um gráfico de barras codifica significado em posição e comprimento, informação espacial que um leitor de tela não consegue transmitir descrevendo uma barra de cada vez. Existem quatro caminhos separados para que o gráfico não seja o único jeito de usar a ferramenta.</p><ul><li><strong>Toda barra de tarefa é alcançável pelo teclado</strong> e carrega uma descrição de tudo o que a barra mostra visualmente: datas, duração, progresso, responsável, se está no caminho crítico e de quantas tarefas ela depende.</li><li><strong>As setas movem e redimensionam tarefas.</strong> Esquerda e direita movem um dia útil, com Shift uma semana, e Alt redimensiona o fim. As datas resultantes são anunciadas, então você ouve onde a tarefa parou, e não apenas que uma tecla foi pressionada.</li><li><strong>O gráfico é uma única parada de tabulação, não duzentas.</strong> Um tabindex móvel faz o Tab passar do gráfico em um toque; as setas navegam dentro dele.</li><li><strong>Os botões de ajuste reprogramam com cliques</strong> — voltar ou avançar um dia ou uma semana, alongar ou encurtar um dia, sem nenhum arrastar. Junto com os campos de data e o seletor de dependências no painel da tarefa, isso significa que nada exige arrastar.</li><li><strong>Uma visão de tabela simples</strong> apresenta o plano inteiro como uma tabela HTML de verdade, com cabeçalhos de linha e de coluna. Muita gente vai trabalhar só por ali, e ela serve também como visão de impressão e como o que você cola em um e-mail.</li><li><strong>Uma frase de resumo</strong> descreve o gráfico como um todo — número de tarefas, intervalo de datas, quantas estão no caminho crítico, quantas estão atrasadas —, de modo que chegar até ele não obriga a percorrer cada barra para entender seu formato.</li><li><strong>O caminho crítico não é marcado só por cor.</strong> Barras críticas têm hachura diagonal e uma borda distinta; as setas de dependência no caminho crítico são tracejadas. Isso sobrevive a escala de cinza, impressão e daltonismo. O mesmo vale para a curva S, em que as três linhas se distinguem pelo padrão do traço além da cor.</li><li><strong>O alto contraste do Windows é suportado.</strong> O modo de cores forçadas troca as cores e remove imagens de fundo, o que eliminaria as duas pistas do caminho crítico de uma vez; por isso, ali as barras críticas ganham borda tracejada.</li><li><strong>O toque funciona.</strong> O gráfico usa Pointer Events, então pode ser operado com o dedo ou com uma caneta, e as áreas de toque aumentam em telas sensíveis ao toque.</li><li><strong>Movimento reduzido é respeitado</strong> via <code>prefers-reduced-motion</code>.</li><li><strong>As páginas de conteúdo</strong> — os guias, os modelos e esta página — usam HTML semântico comum, com um único h1, títulos ordenados, landmarks reais e foco visível.</li></ul>'],
        ['O que ainda não está conforme', '<p>Estas são as falhas que conhecemos. Se você esbarrar em algo que não está nesta lista, conte para nós — isso é mais útil do que qualquer outra coisa nesta página.</p><ul><li><strong>Nenhum teste com leitor de tela foi feito.</strong> O gráfico foi construído seguindo a especificação e verificado no código, o que não é o mesmo que ser usável. NVDA, JAWS e VoiceOver podem se comportar de formas diferentes do que esperamos. Esta é a maior lacuna desta declaração.</li><li><strong>Criar uma dependência arrastando</strong> a partir do ponto em uma barra tem alternativa só com cliques no painel da tarefa, mas o arrastar ainda é o caminho mais fácil de descobrir. A alternativa funciona; ela só ainda não é tão fácil de achar.</li><li><strong>Reordenar linhas</strong> usa arrastar e soltar nativo na lista de tarefas. Existe alternativa por teclado (Alt com as setas para cima e para baixo), mas nenhuma só com cliques.</li><li><strong>Algumas caixas de diálogo de exportação</strong> — as opções de PDF em particular — não foram revisadas quanto à ordem de teclado e à rotulagem com o mesmo cuidado que a interface principal.</li><li><strong>Nenhuma auditoria formal nem VPAT.</strong> Se você precisar de um para uma compra ou licitação, fale conosco e diga em que formato precisa.</li></ul>'],
        ['Como isto foi avaliado', '<p>Revisado em relação ao nível AA da WCAG 2.2 com testes manuais de teclado, inspeção da árvore de acessibilidade, verificações de estilo computado para contraste e comportamento em cores forçadas, e verificações automáticas que rodam a cada build — incluindo uma que faz o build falhar se um elemento do gráfico perder seu rótulo. Navegadores usados: versões recentes do Chrome e do Edge no Windows.</p><p>Não usados: um leitor de tela, um conjunto formal de ferramentas de auditoria ou testes com pessoas com deficiência. Esses são os próximos passos, nessa ordem.</p>'],
        ['Por que esta página existe', '<p>A maioria das ferramentas de Gantt não publica nada sobre acessibilidade ou esconde o relatório de conformidade atrás de um pedido por e-mail. Isso torna impossível saber, antes de se comprometer com uma ferramenta, se você conseguirá usá-la. Preferimos publicar algo específico e incompleto a não publicar nada — e preferimos que nos digam que estamos errados a não ficar sabendo.</p>'],
        ['Última revisão', '<p class="muted"><small>Revisado pela última vez em 19 de julho de 2026. Esta declaração é atualizada quando a ferramenta muda, não segundo um calendário.</small></p>'],
      ],
    },
  },

  zh: {
    legalNote: '本页面为参考翻译。如有歧义，以英文版本为准。',
    about: {
      title: '关于 gantts.app — 甘特图工具',
      description: '谁在做 gantts.app，以及为什么这个工具免费、无需注册、不会把你的数据上传到服务器。',
      h1: '关于 gantts.app',
      lead: 'gantts.app 是一个小型独立项目：一个打开即用的甘特图工具，无需注册，也不会把你的数据发送到任何地方。',
      callout: '你的计划始终留在浏览器里。没有服务器保存它，不需要注册账号，即使不再使用也没有什么需要删除。',
      body: [
        ['为什么做这个工具', '<p>大多数计划工具在你还没画出第一根任务条之前就要求注册账号。做一份快速计划时，这种阻力太大了。gantts.app 直接在浏览器里打开就能用。</p>'],
        ['工作原理', '<p>所有运算都在你的浏览器中完成。没有服务器保存项目——你的计划保留在自己的设备上，并可导出为 PDF、PNG、Excel、PowerPoint 或 CSV。</p>'],
        ['我们的模式', '<p>没有付费版本，也没有被锁住的功能。由于没有服务器基础设施，成本很低；应用内一个不打扰使用的赞助位帮助覆盖这些成本。</p>'],
        ['开源', '<p>源代码发布在 <a href="https://github.com/Synth88Labs/gantts-app" rel="noopener">GitHub</a>，采用 MIT 许可证。发现问题或有建议，欢迎提交 issue。</p>'],
      ],
    },
    contact: {
      title: '联系我们 — gantts.app',
      description: '如何联系 gantts.app：反馈使用问题、提出功能建议、洽谈广告合作，或询问其他任何事项。我们会直接收到邮件。',
      h1: '联系我们',
      lead: 'gantts.app 是一个小项目。没有客服队列，也没有工单系统——消息会直接到我们这里。',
      body: [
        ['电子邮件', '<p>任何事情都可以写信给我们——疑问、错误、功能建议或广告合作：</p><p><a class="btn btn-primary" href="mailto:synth88labs@gmail.com?subject=gantts.app">synth88labs@gmail.com</a></p>'],
        ['报告问题', '<p>技术问题最快的途径是提交 GitHub issue：它是公开的，遇到同样问题的人也能找到。</p><ul><li><a href="https://github.com/Synth88Labs/gantts-app/issues" rel="noopener">提交 issue</a></li><li><a href="https://github.com/Synth88Labs/gantts-app" rel="noopener">查看源代码</a></li></ul>'],
        ['请附上哪些信息', '<p>由于所有内容都在你的浏览器中运行、不会上传，我们无法查看你的项目来排查问题。因此细节很重要：浏览器与操作系统、你的操作步骤、你期望的结果与实际结果，如果方便，请附上能复现问题的 <code>.gantts</code> 文件。</p>'],
      ],
    },
    terms: {
      title: '使用条款 — gantts.app',
      description: 'gantts.app 使用条款：个人与商业项目均可免费使用，按现状提供，无需账号，不提供担保。',
      h1: '使用条款',
      lead: '简而言之：gantts.app 可免费用于任何用途，包括商业用途。你创建的内容归你所有。工具按现状提供，不附带任何担保。',
      body: [
        ['1. 服务说明', '<p>gantts.app 是一个完全在浏览器中运行的免费甘特图工具。没有账号、订阅，也不在服务器端保存项目。使用本网站即表示你接受这些条款。</p>'],
        ['2. 使用许可', '<p>你可以免费将 gantts.app 用于个人、教学和商业项目，无需许可证、无需授权，也无需署名。</p>'],
        ['3. 内容归属', '<p>我们不对你生成的项目或导出文件主张任何权利。由于你的数据从未到达我们的服务器，我们即便想访问也做不到。</p>'],
        ['4. 数据与备份', '<p>项目保存在浏览器的本地存储中。清除浏览器数据、使用无痕模式或更换设备都会导致数据丢失。<strong>我们没有任何副本，也无法恢复丢失的工作。</strong>重要项目请导出 <code>.gantts</code> 文件自行备份。</p>'],
        ['5. 可用性与免责', '<p>本服务免费提供，不承诺可用性，按现状提供，不作任何明示或默示担保。我们不保证关键路径计算适用于特定用途——排期决策仍由你负责。</p>'],
        ['6. 责任限制', '<p>在法律允许的最大范围内，我们不对因使用本服务而产生的间接或后果性损害，以及利润损失、数据丢失或工期延误承担责任。</p>'],
        ['7. 联系方式', '<p>对条款有疑问？请写信至 <a href="mailto:synth88labs@gmail.com">synth88labs@gmail.com</a>。</p>'],
      ],
    },
    privacy: {
      title: '隐私政策 — gantts.app',
      description: 'gantts.app 没有账号系统，也不在服务器端存储数据。你的甘特图只保留在自己的浏览器中。',
      h1: '隐私政策',
      lead: '简短版本：gantts.app 没有账号，也不会把项目保存到服务器。你的图表只存在于你自己的浏览器里。',
      body: [
        ['你的项目数据', '<p>创建图表后，它会保存在你设备的<strong>本地存储</strong>中，不会传输给我们，也不会存放在我们的服务器上。清除浏览器数据后，项目也会一并删除。</p>'],
        ['分享链接', '<p>生成分享链接时，项目数据会直接编码在链接中（<code>#</code> 之后的部分）。数据随 URL 传递，不会存储在任何服务器上。</p>'],
        ['我们不收集什么', '<ul><li>不需要邮箱、姓名或账号。</li><li>不上传、也不读取你的图表内容。</li><li>不出售数据——我们根本没有你的数据。</li></ul>'],
        ['Cookie 与统计', '<p>我们使用 <strong>Google Analytics 4</strong> 了解哪些页面真正有用：哪些指南被阅读、哪些模板被下载、编辑器是否被打开。它统计的是页面，不是你的计划：<strong>你所创建项目的任何内容都不会被发送</strong>，因为项目数据本来就不会离开浏览器。</p><p>Google Analytics 收集常规的页面级信息——你所在的页面、大致地理位置、浏览器与设备类型，以及你从何处进入——并写入两个 Cookie：<code>_ga</code> 和 <code>_ga_3ZFCTKWL1D</code>，用于区分不同访客。它们只包含随机标识符，不含你的姓名，也不含你输入的任何内容。我们<strong>不使用广告 Cookie</strong>，也不出售或共享这些数据。Google 按其<a href=\"https://policies.google.com/privacy\" rel=\"noopener\">隐私政策</a>处理这些数据；你可以通过 <a href=\"https://tools.google.com/dlpage/gaoptout\" rel=\"noopener\">Google 的浏览器插件</a>或任何拦截工具选择退出——工具的功能完全不受影响。</p><p>其余内容都保存在浏览器的<strong>本地存储</strong>中，而非 Cookie，且永远不会离开你的设备：包括你的项目和主题偏好。我们的主机服务商可能出于安全与性能目的保留常规服务器日志。</p><p class=\"muted\"><small>本页此前称不使用跟踪 Cookie。在 2026 年 7 月 19 日加入 Google Analytics 之前，这一说法是准确的；本页已于同日更新。</small></p>'],
        ['联系方式', '<p>关于隐私的问题？请写信至 <a href="mailto:synth88labs@gmail.com">synth88labs@gmail.com</a>。</p>'],
      ],
    },
    accessibility: {
      title: '无障碍声明 — gantts.app',
      description: 'gantts.app 对照 WCAG 2.2 AA 级的无障碍情况：哪些已经符合、哪些尚未符合，以及如何反馈你遇到的障碍。这是自评，没有第三方审计。',
      h1: '无障碍声明',
      lead: '这个页面说明 gantts.app 实际上有多无障碍：哪些符合 WCAG 2.2 AA 级、哪些还不符合，以及如何把遇到的障碍告诉我们。它写得具体，而不是让人安心——含糊的说法，对正在判断自己能不能用这个工具的人毫无帮助。',
      callout: '<strong>遇到了障碍？</strong>请写信至 <a href="mailto:synth88labs@gmail.com?subject=%E6%97%A0%E9%9A%9C%E7%A2%8D%20—%20gantts.app">synth88labs@gmail.com</a>，或在 <a href="https://github.com/Synth88Labs/gantts-app/issues" rel="noopener">GitHub</a> 上提交 issue。请告诉我们你使用的浏览器和辅助技术，以及你当时想做什么。无障碍相关的反馈会被优先回复。',
      body: [
        ['符合性声明', '<p>gantts.app <strong>部分符合</strong> <a href="https://www.w3.org/TR/WCAG22/" rel="noopener">WCAG 2.2 AA 级</a>。部分符合的意思是：工具的大部分达到了该标准，还有一些部分尚未达到。已知的例外都列在下面，而不是留给你自己去发现。</p><p>这是一份<strong>自评</strong>。它没有经过第三方审计，编辑器也还没有由每天使用读屏软件的人用读屏软件测试过。这两点都实实在在地限制了本声明的分量；我们宁愿把话说明白，也不愿暗示一种我们并未达到的保证水平。</p>'],
        ['目前可用的部分', '<p>甘特图是这个问题中最难的部分：条形图把含义编码在位置和长度里，而这种空间信息，读屏软件靠逐条描述是传达不出来的。为此我们提供了四条彼此独立的路径，让图表不是使用这个工具的唯一方式。</p><ul><li><strong>每一根任务条都可以用键盘到达</strong>，并附带对该任务条视觉上所显示的全部信息的描述——日期、工期、进度、负责人、是否位于关键路径，以及它依赖多少个任务。</li><li><strong>方向键可以移动和调整任务。</strong>左右键按一个工作日移动，按住 Shift 为一周，按住 Alt 调整结束端。调整后的日期会被朗读出来，因此你听到的是任务落在了哪里，而不只是某个键被按下了。</li><li><strong>整个图表只是一个 Tab 停靠点，而不是两百个。</strong>通过游走式 tabindex，按一次 Tab 就能跳过图表；在图表内部则用方向键导航。</li><li><strong>微调按钮用点击就能重新排期</strong>——前后移动一天或一周、延长或缩短一天，完全不需要拖拽。加上任务面板里的日期输入框和依赖选择器，这意味着没有任何操作必须依赖拖拽。</li><li><strong>纯表格视图</strong>把整个计划呈现为带行标题和列标题的真正 HTML 表格。很多人会完全通过它来工作，它同时也是打印视图，以及你粘贴进邮件的内容。</li><li><strong>一句概览</strong>描述整张图表——任务数量、日期范围、有多少任务位于关键路径、有多少已经延期——这样一进入图表就不必逐条浏览才能了解它的形状。</li><li><strong>关键路径不只用颜色标示。</strong>关键任务条带有斜向填充纹理和不同的边框；关键路径上的依赖箭头是虚线。这在灰度显示、打印和色盲情况下都仍然有效。S 曲线也是如此，三条线除了颜色不同，虚线样式也不同。</li><li><strong>支持 Windows 高对比度模式。</strong>强制颜色模式会替换颜色并去掉背景图像，那会一次性抹掉上述两种关键路径提示，因此在该模式下关键任务条改用虚线边框。</li><li><strong>支持触控。</strong>图表使用 Pointer Events，因此可以用手指或触控笔操作，并且在触摸屏上点击区域会变大。</li><li><strong>尊重减少动效设置</strong>，通过 <code>prefers-reduced-motion</code> 实现。</li><li><strong>内容页面</strong>——指南、模板以及本页——使用普通的语义化 HTML：唯一的 h1、层级有序的标题、真实的地标区域和可见的焦点。</li></ul>'],
        ['尚未符合的部分', '<p>以下是我们已知的缺口。如果你遇到的问题不在这份清单上，请告诉我们——那比这个页面上的任何其他内容都更有用。</p><ul><li><strong>尚未做过任何读屏软件测试。</strong>图表是按照规范构建并在代码层面验证过的，但这和“实际好用”并不是一回事。NVDA、JAWS 和 VoiceOver 的表现都可能与我们的预期不同。这是本声明中最大的缺口。</li><li><strong>通过拖拽任务条上的圆点来建立依赖关系</strong>，在任务面板中有纯点击的替代方式，但拖拽仍然是更容易被发现的路径。替代方式是可用的，只是还不够好找。</li><li><strong>调整任务行顺序</strong>在任务列表中使用了原生拖放。有键盘替代方式（Alt 加上下方向键），但没有纯点击的替代方式。</li><li><strong>部分导出对话框</strong>——尤其是 PDF 选项——在键盘顺序和标签方面，尚未像主界面那样被仔细审查。</li><li><strong>没有正式审计报告，也没有 VPAT。</strong>如果你在采购流程中需要，请联系我们并说明需要哪种格式。</li></ul>'],
        ['评估方式', '<p>对照 WCAG 2.2 AA 级进行审查，方式包括：手动键盘测试、检查无障碍树、针对对比度和强制颜色行为的计算样式检查，以及每次构建都会运行的自动检查——其中一项会在图表元素丢失标签时直接让构建失败。使用的浏览器：Windows 上较新版本的 Chrome 和 Edge。</p><p>未使用的手段：读屏软件、正式的审计工具套件，以及由残障用户参与的测试。这些是接下来的步骤，顺序也是如此。</p>'],
        ['为什么有这个页面', '<p>大多数甘特图工具要么完全不公布无障碍相关信息，要么把符合性报告藏在“发邮件索取”之后。这让人在决定采用某个工具之前，根本无法判断自己能不能用得了。我们宁愿公布一份具体但不完整的说明，也不愿什么都不说——也宁愿被指出哪里做错了，而不是一直蒙在鼓里。</p>'],
        ['最后审阅时间', '<p class="muted"><small>最后审阅时间：2026 年 7 月 19 日。本声明在工具发生变化时更新，而不是按固定周期更新。</small></p>'],
      ],
    },
  },

};

// page key -> English URL, used for hreflang pairing
const SITE_PAGES = ['about.html', 'contact.html', 'terms.html', 'privacy.html', 'accessibility.html'];

module.exports = { SITE, SITE_PAGES };
