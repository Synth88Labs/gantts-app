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
        ['Cookies y analítica', '<p>No usamos cookies de seguimiento. El almacenamiento local solo guarda tus proyectos y preferencias (como el tema claro u oscuro) en tu propio dispositivo. Nuestro proveedor de alojamiento puede conservar registros de servidor estándar por seguridad y rendimiento.</p>'],
        ['Contacto', '<p>¿Preguntas sobre privacidad? Escribe a <a href="mailto:synth88labs@gmail.com">synth88labs@gmail.com</a>.</p>'],
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
        ['Cookies et mesure d’audience', '<p>Aucun cookie de suivi. Le stockage local ne conserve que vos projets et préférences (thème clair ou sombre) sur votre appareil. Notre hébergeur peut conserver des journaux serveur standards pour la sécurité et la performance.</p>'],
        ['Contact', '<p>Une question sur la confidentialité ? Écrivez à <a href="mailto:synth88labs@gmail.com">synth88labs@gmail.com</a>.</p>'],
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
        ['Cookies und Analyse', '<p>Keine Tracking-Cookies. Der lokale Speicher hält nur Projekte und Einstellungen (helles oder dunkles Design) auf Ihrem Gerät. Unser Hoster kann übliche Server-Logs zu Sicherheit und Leistung vorhalten.</p>'],
        ['Kontakt', '<p>Fragen zum Datenschutz? Schreiben Sie an <a href="mailto:synth88labs@gmail.com">synth88labs@gmail.com</a>.</p>'],
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
        ['Cookies e análise', '<p>Não usamos cookies de rastreamento. O armazenamento local guarda apenas seus projetos e preferências (como tema claro ou escuro) no seu aparelho. Nosso provedor de hospedagem pode manter logs de servidor padrão por segurança e desempenho.</p>'],
        ['Contato', '<p>Dúvidas sobre privacidade? Escreva para <a href="mailto:synth88labs@gmail.com">synth88labs@gmail.com</a>.</p>'],
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
        ['Cookie 与统计', '<p>我们不使用跟踪 Cookie。本地存储仅在你的设备上保存项目和偏好设置（例如深色或浅色主题）。我们的主机服务商可能出于安全与性能目的保留常规服务器日志。</p>'],
        ['联系方式', '<p>关于隐私的问题？请写信至 <a href="mailto:synth88labs@gmail.com">synth88labs@gmail.com</a>。</p>'],
      ],
    },
  },

};

// page key -> English URL, used for hreflang pairing
const SITE_PAGES = ['about.html', 'contact.html', 'terms.html', 'privacy.html'];

module.exports = { SITE, SITE_PAGES };
