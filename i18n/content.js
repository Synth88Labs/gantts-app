/* ============================================================
   i18n/content.js — translated copy for the localized static pages.

   This is the source of truth for /es/, /fr/, /de/, /pt/, /zh/.
   scripts/gen-i18n.js renders real HTML from it, so each language
   gets its own indexable URL with its own <title>, description and
   hreflang — which client-side text swapping can never provide.

   English lives here too, but only for the shared chrome (nav,
   footer, language names). The English pages themselves stay
   hand-authored at the site root.
   ============================================================ */

// Locale codes: `code` is the URL prefix, `hreflang` the tag value.
const LOCALES = [
  { code: 'es', hreflang: 'es', name: 'Español',  dir: 'ltr', ogLocale: 'es_ES' },
  { code: 'fr', hreflang: 'fr', name: 'Français', dir: 'ltr', ogLocale: 'fr_FR' },
  { code: 'de', hreflang: 'de', name: 'Deutsch',  dir: 'ltr', ogLocale: 'de_DE' },
  { code: 'pt', hreflang: 'pt', name: 'Português', dir: 'ltr', ogLocale: 'pt_BR' },
  { code: 'zh', hreflang: 'zh-Hans', name: '简体中文', dir: 'ltr', ogLocale: 'zh_CN' },
];

// Shared chrome. `en` is included so the switcher can be built uniformly.
const CHROME = {
  en: {
    nav: { maker: 'Gantt Maker', templates: 'Templates', guides: 'Guides', what: 'What is a Gantt chart?', open: 'Open the app' },
    footer: { tagline: 'Free online Gantt chart maker. No account, no upload — your data stays in your browser.',
      byline: 'A project by Synth88 Labs',
      allTemplates: 'All templates', allGuides: 'All guides', construction: 'Construction', cpm: 'Critical path method', contact: 'Contact', terms: 'Terms of use', staticNote: 'Built as a static site — nothing you plan leaves your browser.',
      product: 'Product', resources: 'Resources', company: 'Company',
      privacy: 'Privacy', about: 'About', rights: 'All rights reserved.' },
    langLabel: 'Language',
    skipToApp: 'Open the app',
  },
  es: {
    nav: { maker: 'Crear diagrama', templates: 'Plantillas', guides: 'Guías', what: '¿Qué es un diagrama de Gantt?', open: 'Abrir la aplicación' },
    footer: { tagline: 'Creador de diagramas de Gantt gratis. Sin cuenta y sin subir nada: tus datos se quedan en tu navegador.',
      byline: 'Un proyecto de Synth88 Labs',
      allTemplates: 'Todas las plantillas', allGuides: 'Todas las guías', construction: 'Construcción', cpm: 'Método de la ruta crítica', contact: 'Contacto', terms: 'Términos de uso', staticNote: 'Sitio estático: nada de lo que planificas sale de tu navegador.',
      product: 'Producto', resources: 'Recursos', company: 'Empresa',
      privacy: 'Privacidad', about: 'Acerca de', rights: 'Todos los derechos reservados.' },
    langLabel: 'Idioma',
    skipToApp: 'Abrir la aplicación',
  },
  fr: {
    nav: { maker: 'Créer un diagramme', templates: 'Modèles', guides: 'Guides', what: 'Qu’est-ce qu’un diagramme de Gantt ?', open: 'Ouvrir l’application' },
    footer: { tagline: 'Créateur de diagrammes de Gantt gratuit. Sans compte ni téléversement : vos données restent dans votre navigateur.',
      byline: 'Un projet de Synth88 Labs',
      allTemplates: 'Tous les modèles', allGuides: 'Tous les guides', construction: 'BTP', cpm: 'Méthode du chemin critique', contact: 'Contact', terms: 'Conditions d’utilisation', staticNote: 'Site statique : rien de ce que vous planifiez ne quitte votre navigateur.',
      product: 'Produit', resources: 'Ressources', company: 'Entreprise',
      privacy: 'Confidentialité', about: 'À propos', rights: 'Tous droits réservés.' },
    langLabel: 'Langue',
    skipToApp: 'Ouvrir l’application',
  },
  de: {
    nav: { maker: 'Gantt-Diagramm erstellen', templates: 'Vorlagen', guides: 'Ratgeber', what: 'Was ist ein Gantt-Diagramm?', open: 'App öffnen' },
    footer: { tagline: 'Kostenloser Gantt-Diagramm-Generator. Ohne Konto, ohne Upload – Ihre Daten bleiben im Browser.',
      byline: 'Ein Projekt von Synth88 Labs',
      allTemplates: 'Alle Vorlagen', allGuides: 'Alle Ratgeber', construction: 'Bauwesen', cpm: 'Methode des kritischen Pfads', contact: 'Kontakt', terms: 'Nutzungsbedingungen', staticNote: 'Statische Website — nichts, was Sie planen, verlässt Ihren Browser.',
      product: 'Produkt', resources: 'Ressourcen', company: 'Unternehmen',
      privacy: 'Datenschutz', about: 'Über uns', rights: 'Alle Rechte vorbehalten.' },
    langLabel: 'Sprache',
    skipToApp: 'App öffnen',
  },
  pt: {
    nav: { maker: 'Criar gráfico', templates: 'Modelos', guides: 'Guias', what: 'O que é um gráfico de Gantt?', open: 'Abrir o aplicativo' },
    footer: { tagline: 'Criador de gráfico de Gantt gratuito. Sem conta e sem upload — seus dados ficam no seu navegador.',
      byline: 'Um projeto da Synth88 Labs',
      allTemplates: 'Todos os modelos', allGuides: 'Todos os guias', construction: 'Construção', cpm: 'Método do caminho crítico', contact: 'Contato', terms: 'Termos de uso', staticNote: 'Site estático — nada do que você planeja sai do seu navegador.',
      product: 'Produto', resources: 'Recursos', company: 'Empresa',
      privacy: 'Privacidade', about: 'Sobre', rights: 'Todos os direitos reservados.' },
    langLabel: 'Idioma',
    skipToApp: 'Abrir o aplicativo',
  },
  zh: {
    nav: { maker: '甘特图制作', templates: '模板', guides: '指南', what: '什么是甘特图？', open: '打开应用' },
    footer: { tagline: '免费在线甘特图制作工具。无需注册、无需上传——数据只保存在你的浏览器中。',
      byline: 'Synth88 Labs 出品',
      allTemplates: '全部模板', allGuides: '全部指南', construction: '工程施工', cpm: '关键路径法', contact: '联系我们', terms: '使用条款', staticNote: '纯静态网站——你规划的内容不会离开浏览器。',
      product: '产品', resources: '资源', company: '关于',
      privacy: '隐私政策', about: '关于我们', rights: '保留所有权利。' },
    langLabel: '语言',
    skipToApp: '打开应用',
  },
};

// ---------------- Homepage ----------------
const HOME = {
  es: {
    slug: '',
    title: 'Diagrama de Gantt online gratis — sin registro | gantts.app',
    description: 'Crea un diagrama de Gantt gratis en tu navegador. Sin registro. Tareas, dependencias y ruta crítica, con exportación a PDF, Excel y PowerPoint.',
    ogTitle: 'Creador de diagramas de Gantt gratis — sin registro',
    kicker: 'Gratis · sin registro · funciona en tu navegador',
    h1: 'El <span class="grad">creador de diagramas de Gantt</span> gratuito que simplemente se abre y funciona.',
    sub: 'Escribe o pega tus tareas y míralas convertirse en una línea de tiempo clara e interactiva. Dependencias, ruta crítica e hitos; después exporta a PDF, Excel o PowerPoint. Sin cuenta, nunca.',
    cta1: 'Empezar a planificar — gratis',
    cta2: 'o abre una plantilla →',
    bars: { add: 'Añadir y arrastrar tareas', link: 'Enlazar dependencias', cp: 'Ver la ruta crítica', ms: 'Hitos y fases', export: 'Exportar a PDF · Excel · PPT' },
    meta: 'Sin cuenta · tareas ilimitadas · funciona sin conexión · tus datos no salen del navegador',
    featLabel: 'Qué incluye',
    featH2: 'Todo lo que necesita un plan, sin nada bajo llave',
    featNote: 'Las funciones por las que otras herramientas cobran —ruta crítica, exportación, tareas ilimitadas— están aquí y son gratuitas.',
    features: [
      { h: 'Ruta crítica automática', p: 'Descubre la cadena exacta de tareas que determina tu fecha de entrega, resaltada en cuanto cambian las fechas. Sin cálculos manuales ni versiones de pago.' },
      { h: 'Programación con arrastrar y soltar', p: 'Mueve y redimensiona las barras en la línea de tiempo, marca el porcentaje completado y reordena tareas. El plan sigue tu ritmo.' },
      { h: 'Dependencias reales', p: 'Enlaza tareas con fin-inicio y otros tres tipos. Las flechas se redibujan solas cuando cambias las fechas.' },
      { h: 'Exportación profesional', p: 'Descarga en PDF, PNG, Excel o PowerPoint con un clic, listo para enviar a tu cliente o dirección.' },
    ],
    faqH2: 'Preguntas frecuentes',
    faq: [
      { q: '¿Es realmente gratis?', a: 'Sí. No hay cuentas, pruebas ni funciones de pago. Todo se ejecuta en tu navegador, así que no hay servidores que mantener.' },
      { q: '¿Necesito crear una cuenta?', a: 'No. Abre la aplicación y empieza a planificar. Tu proyecto se guarda automáticamente en tu navegador.' },
      { q: '¿Dónde se guardan mis datos?', a: 'En tu propio navegador (localStorage). Nada se sube a ningún servidor. También puedes guardar un archivo .gantts en tu equipo.' },
      { q: '¿Puedo exportar a Excel o PowerPoint?', a: 'Sí, además de PDF, PNG y CSV. Las exportaciones son archivos reales y editables, no imágenes.' },
    ],
    ctaH2: '¿Listo para planificar tu proyecto?',
    ctaP: 'Sin registro, sin tarjeta de crédito. Abre la aplicación y empieza.',
    ctaBtn: 'Abrir el creador de Gantt',
  },
  fr: {
    slug: '',
    title: 'Diagramme de Gantt en ligne gratuit | gantts.app',
    description: 'Créez un diagramme de Gantt gratuit dans votre navigateur, sans inscription. Tâches, dépendances, chemin critique et export PDF, Excel, PowerPoint.',
    ogTitle: 'Créateur de diagramme de Gantt gratuit — sans inscription',
    kicker: 'Gratuit · sans inscription · fonctionne dans votre navigateur',
    h1: 'Le <span class="grad">créateur de diagramme de Gantt</span> gratuit qui s’ouvre et fonctionne, tout simplement.',
    sub: 'Saisissez ou collez vos tâches et regardez-les s’organiser en un planning clair et interactif. Dépendances, chemin critique, jalons — puis export vers PDF, Excel ou PowerPoint. Sans compte, jamais.',
    cta1: 'Commencer à planifier — gratuit',
    cta2: 'ou ouvrir un modèle →',
    bars: { add: 'Ajouter et déplacer des tâches', link: 'Lier les dépendances', cp: 'Voir le chemin critique', ms: 'Jalons et phases', export: 'Exporter en PDF · Excel · PPT' },
    meta: 'Sans compte · tâches illimitées · fonctionne hors ligne · vos données restent dans votre navigateur',
    featLabel: 'Ce qu’il contient',
    featH2: 'Tout ce qu’un plan exige, rien sous clé',
    featNote: 'Les fonctions que les autres outils font payer — chemin critique, export, tâches illimitées — sont ici, et gratuites.',
    features: [
      { h: 'Chemin critique automatique', p: 'Visualisez la chaîne exacte de tâches qui détermine votre échéance, mise en évidence dès que les dates changent. Sans calcul manuel ni abonnement.' },
      { h: 'Planification par glisser-déposer', p: 'Déplacez et redimensionnez les barres, indiquez l’avancement en pourcentage et réorganisez les tâches. Le planning suit votre rythme.' },
      { h: 'Véritables dépendances', p: 'Liez les tâches en fin-début et trois autres types. Les flèches se redessinent seules quand vous décalez les dates.' },
      { h: 'Export professionnel', p: 'Téléchargez en PDF, PNG, Excel ou PowerPoint en un clic, prêt à envoyer à votre client ou votre direction.' },
    ],
    faqH2: 'Questions fréquentes',
    faq: [
      { q: 'Est-ce vraiment gratuit ?', a: 'Oui. Aucun compte, aucune période d’essai, aucune fonction payante. Tout s’exécute dans votre navigateur, il n’y a donc aucun serveur à financer.' },
      { q: 'Dois-je créer un compte ?', a: 'Non. Ouvrez l’application et commencez. Votre projet est enregistré automatiquement dans votre navigateur.' },
      { q: 'Où mes données sont-elles stockées ?', a: 'Dans votre navigateur (localStorage). Rien n’est envoyé à un serveur. Vous pouvez aussi enregistrer un fichier .gantts sur votre ordinateur.' },
      { q: 'Puis-je exporter vers Excel ou PowerPoint ?', a: 'Oui, ainsi qu’en PDF, PNG et CSV. Ce sont de vrais fichiers modifiables, pas des images.' },
    ],
    ctaH2: 'Prêt à planifier votre projet ?',
    ctaP: 'Sans inscription, sans carte bancaire. Ouvrez l’application et lancez-vous.',
    ctaBtn: 'Ouvrir le créateur de Gantt',
  },
  de: {
    slug: '',
    title: 'Gantt-Diagramm online erstellen — kostenlos | gantts.app',
    description: 'Gantt-Diagramm kostenlos im Browser erstellen, ohne Anmeldung. Aufgaben, Abhängigkeiten, kritischer Pfad und Export nach PDF, Excel und PowerPoint.',
    ogTitle: 'Kostenloser Gantt-Diagramm-Generator — ohne Anmeldung',
    kicker: 'Kostenlos · ohne Anmeldung · läuft im Browser',
    h1: 'Der kostenlose <span class="grad">Gantt-Diagramm-Generator</span>, der einfach aufgeht und funktioniert.',
    sub: 'Aufgaben eintippen oder einfügen und zusehen, wie daraus ein klarer, interaktiver Zeitplan wird. Abhängigkeiten, kritischer Pfad, Meilensteine — danach Export nach PDF, Excel oder PowerPoint. Ohne Konto, für immer.',
    cta1: 'Jetzt planen — kostenlos',
    cta2: 'oder eine Vorlage öffnen →',
    bars: { add: 'Aufgaben anlegen und ziehen', link: 'Abhängigkeiten verknüpfen', cp: 'Kritischen Pfad sehen', ms: 'Meilensteine und Phasen', export: 'Export nach PDF · Excel · PPT' },
    meta: 'Kein Konto · unbegrenzte Aufgaben · funktioniert offline · Ihre Daten bleiben im Browser',
    featLabel: 'Was drinsteckt',
    featH2: 'Alles, was ein Plan braucht — nichts weggesperrt',
    featNote: 'Funktionen, für die andere Tools Geld verlangen — kritischer Pfad, Export, unbegrenzte Aufgaben — sind hier enthalten und kostenlos.',
    features: [
      { h: 'Automatischer kritischer Pfad', p: 'Sehen Sie genau die Aufgabenkette, die Ihren Endtermin bestimmt — hervorgehoben, sobald sich Termine ändern. Ohne Handrechnerei, ohne Upgrade.' },
      { h: 'Planen per Drag-and-drop', p: 'Balken auf der Zeitachse verschieben und skalieren, Fortschritt in Prozent setzen, Aufgaben umsortieren. Der Plan hält mit.' },
      { h: 'Echte Abhängigkeiten', p: 'Verknüpfen Sie Aufgaben mit Ende-Anfang und drei weiteren Typen. Die Pfeile zeichnen sich neu, wenn Sie Termine verschieben.' },
      { h: 'Export in Präsentationsqualität', p: 'Mit einem Klick als PDF, PNG, Excel oder PowerPoint herunterladen — direkt bereit für Kunden oder Geschäftsleitung.' },
    ],
    faqH2: 'Häufige Fragen',
    faq: [
      { q: 'Ist das wirklich kostenlos?', a: 'Ja. Keine Konten, keine Testphase, keine kostenpflichtigen Funktionen. Alles läuft im Browser, es gibt also keine Server zu finanzieren.' },
      { q: 'Muss ich ein Konto anlegen?', a: 'Nein. App öffnen und loslegen. Ihr Projekt wird automatisch im Browser gespeichert.' },
      { q: 'Wo werden meine Daten gespeichert?', a: 'In Ihrem eigenen Browser (localStorage). Nichts wird auf einen Server hochgeladen. Sie können zusätzlich eine .gantts-Datei auf Ihrem Rechner speichern.' },
      { q: 'Kann ich nach Excel oder PowerPoint exportieren?', a: 'Ja, ebenso nach PDF, PNG und CSV. Die Exporte sind echte, bearbeitbare Dateien — keine Bilder.' },
    ],
    ctaH2: 'Bereit, Ihr Projekt zu planen?',
    ctaP: 'Ohne Anmeldung, ohne Kreditkarte. App öffnen und anfangen.',
    ctaBtn: 'Gantt-Generator öffnen',
  },
  pt: {
    slug: '',
    title: 'Gráfico de Gantt online grátis | gantts.app',
    description: 'Crie um gráfico de Gantt grátis no navegador, sem cadastro. Tarefas, dependências, caminho crítico e exportação para PDF, Excel e PowerPoint.',
    ogTitle: 'Criador de gráfico de Gantt grátis — sem cadastro',
    kicker: 'Grátis · sem cadastro · funciona no navegador',
    h1: 'O <span class="grad">criador de gráfico de Gantt</span> gratuito que simplesmente abre e funciona.',
    sub: 'Digite ou cole suas tarefas e veja tudo virar uma linha do tempo clara e interativa. Dependências, caminho crítico e marcos; depois exporte para PDF, Excel ou PowerPoint. Sem conta, nunca.',
    cta1: 'Começar a planejar — grátis',
    cta2: 'ou abrir um modelo →',
    bars: { add: 'Adicionar e arrastar tarefas', link: 'Ligar dependências', cp: 'Ver o caminho crítico', ms: 'Marcos e fases', export: 'Exportar para PDF · Excel · PPT' },
    meta: 'Sem conta · tarefas ilimitadas · funciona offline · seus dados ficam no navegador',
    featLabel: 'O que vem junto',
    featH2: 'Tudo o que um plano precisa — nada trancado',
    featNote: 'Os recursos que outras ferramentas cobram — caminho crítico, exportação, tarefas ilimitadas — estão aqui, e de graça.',
    features: [
      { h: 'Caminho crítico automático', p: 'Veja exatamente a cadeia de tarefas que define seu prazo, destacada assim que as datas mudam. Sem cálculo manual e sem plano pago.' },
      { h: 'Cronograma por arrastar e soltar', p: 'Mova e redimensione as barras na linha do tempo, defina o percentual concluído e reordene tarefas. O plano acompanha você.' },
      { h: 'Dependências de verdade', p: 'Ligue tarefas com término-início e outros três tipos. As setas se redesenham sozinhas quando você muda as datas.' },
      { h: 'Exportação para apresentação', p: 'Baixe em PDF, PNG, Excel ou PowerPoint com um clique, pronto para enviar ao cliente ou à diretoria.' },
    ],
    faqH2: 'Perguntas frequentes',
    faq: [
      { q: 'É realmente grátis?', a: 'Sim. Sem contas, sem teste gratuito, sem recursos pagos. Tudo roda no seu navegador, então não há servidores a custear.' },
      { q: 'Preciso criar uma conta?', a: 'Não. Abra o aplicativo e comece a planejar. Seu projeto é salvo automaticamente no navegador.' },
      { q: 'Onde meus dados ficam guardados?', a: 'No seu próprio navegador (localStorage). Nada é enviado para servidores. Você também pode salvar um arquivo .gantts no seu computador.' },
      { q: 'Dá para exportar para Excel ou PowerPoint?', a: 'Sim, além de PDF, PNG e CSV. As exportações são arquivos reais e editáveis, não imagens.' },
    ],
    ctaH2: 'Pronto para planejar seu projeto?',
    ctaP: 'Sem cadastro, sem cartão de crédito. Abra o aplicativo e comece.',
    ctaBtn: 'Abrir o criador de Gantt',
  },
  zh: {
    slug: '',
    title: '免费在线甘特图制作工具 — 无需注册 | gantts.app',
    description: '在浏览器中免费制作甘特图。无需注册，无需下载。支持任务、依赖关系与关键路径，并可导出为 PDF、Excel 和 PowerPoint。',
    ogTitle: '免费在线甘特图制作工具 — 无需注册',
    kicker: '免费 · 无需注册 · 在浏览器中运行',
    h1: '打开即用的免费<span class="grad">甘特图制作工具</span>。',
    sub: '输入或粘贴任务，它们会自动排成清晰、可交互的时间线。支持依赖关系、关键路径和里程碑，并可导出为 PDF、Excel 或 PowerPoint。始终无需账号。',
    cta1: '开始规划 — 免费',
    cta2: '或打开一个模板 →',
    bars: { add: '添加并拖动任务', link: '关联依赖关系', cp: '查看关键路径', ms: '里程碑与阶段', export: '导出为 PDF · Excel · PPT' },
    meta: '无需账号 · 任务数量不限 · 支持离线使用 · 数据只保留在浏览器中',
    featLabel: '功能一览',
    featH2: '项目计划所需的一切，没有任何功能被锁住',
    featNote: '其他工具需要付费的功能——关键路径、导出、无限任务——在这里全部免费提供。',
    features: [
      { h: '自动计算关键路径', p: '清楚看到决定项目完成日期的任务链条，日期一变即刻高亮。无需手动计算，也不必升级付费版。' },
      { h: '拖放式排程', p: '在时间线上拖动和缩放任务条，设置完成百分比，随时调整任务顺序。计划随你而动。' },
      { h: '真正的依赖关系', p: '用「完成—开始」以及另外三种类型关联任务。调整日期时，箭头会自动重新绘制。' },
      { h: '可直接汇报的导出效果', p: '一键导出为 PDF、PNG、Excel 或 PowerPoint，可直接发给客户或管理层。' },
    ],
    faqH2: '常见问题',
    faq: [
      { q: '真的完全免费吗？', a: '是的。没有账号、没有试用期、没有付费功能。所有运算都在浏览器中完成，因此没有服务器成本。' },
      { q: '需要注册账号吗？', a: '不需要。打开应用即可开始规划，项目会自动保存在浏览器中。' },
      { q: '我的数据保存在哪里？', a: '保存在你自己的浏览器中（localStorage），不会上传到任何服务器。你也可以把 .gantts 文件保存到电脑上。' },
      { q: '可以导出到 Excel 或 PowerPoint 吗？', a: '可以，还支持 PDF、PNG 和 CSV。导出的是可编辑的真实文件，而不是图片。' },
    ],
    ctaH2: '准备好规划你的项目了吗？',
    ctaP: '无需注册，无需信用卡。打开应用即可开始。',
    ctaBtn: '打开甘特图工具',
  },
};

/* ---------------- Shared catalogue ----------------
   Slugs are the English detail pages. Only the card label and blurb
   are translated; the detail pages themselves are English for now, so
   the hub links out to them rather than to URLs that do not exist. */
const TEMPLATE_SLUGS = [
  'project-management', 'construction', 'software-development', 'marketing',
  'product-launch', 'event-planning', 'agile', 'sprint', 'product-roadmap',
  'content-calendar', 'employee-onboarding', '30-60-90-day-plan', 'research',
  'home-renovation', 'wedding-planning', 'weekly', 'monthly', 'annual',
  'simple', 'excel', 'google-sheets', 'powerpoint',
  // generated sector + academic templates (see scripts/new-templates.js)
  'refinery-turnaround-schedule', 'solar-farm-construction-schedule',
  'ev-charging-installation-schedule', 'hotel-pre-opening-critical-path',
  'dissertation-gantt-chart', 'phd-research-gantt-chart',
  'wind-farm-construction-schedule', 'mining-project-schedule', 'shipbuilding-project-schedule', 'apparel-production-calendar', 'grant-proposal-gantt-chart', 'printable-gantt-chart', 'one-page-gantt-chart',
];

const BLOG_SLUGS = [
  'what-is-a-gantt-chart', 'how-to-make-a-gantt-chart', 'critical-path-method',
  'gantt-chart-examples', 'gantt-chart-in-excel', 'gantt-chart-in-google-sheets',
  'gantt-chart-in-powerpoint', 'best-free-gantt-chart-software',
  'gantt-chart-dependencies', 'gantt-baseline-variance', 'gantt-chart-mistakes', 'milestones-vs-tasks',
];

// ---------------- Templates hub ----------------
const TEMPLATES = {
  es: {
    title: 'Plantillas de diagrama de Gantt gratis | gantts.app',
    description: 'Descarga plantillas de diagrama de Gantt gratis para Excel, PowerPoint y CSV, o edítalas online. Construcción, marketing, software, eventos y más.',
    h1: 'Plantillas de diagrama de Gantt gratis',
    lead: 'Cada plantilla se abre directamente en el editor y también se descarga en Excel, PowerPoint o CSV. Sin registro y sin marcas de agua.',
    intro: 'Elige un punto de partida cercano a tu proyecto: las fases y tareas ya vienen rellenadas, así que solo tienes que ajustar los nombres y las fechas.',
    catTypes: 'Por tipo de proyecto', catIndustry: 'Por sector', catTeam: 'Por equipo y función',
    catTime: 'Por periodo', catAgile: 'Ágil y sprints', catSector: 'Energía y hostelería', catOps: 'Operaciones y programas de empresa', catAcademic: 'Investigación y estudios', catFormat: 'Por formato',
    ctaH2: 'Empieza con una plantilla gratis', ctaP: 'Ábrela, edítala y expórtala. Sin cuenta.', ctaBtn: 'Abrir el editor',
    noteEn: 'Algunas fichas ya están en español; el resto está en inglés por ahora.',
  },
  fr: {
    title: 'Modèles de diagramme de Gantt gratuits | gantts.app',
    description: 'Modèles de diagramme de Gantt gratuits pour Excel, PowerPoint et CSV, ou à modifier en ligne. BTP, marketing, logiciel, événementiel.',
    h1: 'Modèles de diagramme de Gantt gratuits',
    lead: 'Chaque modèle s’ouvre directement dans l’éditeur et se télécharge aussi en Excel, PowerPoint ou CSV. Sans inscription ni filigrane.',
    intro: 'Choisissez un point de départ proche de votre projet : les phases et les tâches sont déjà remplies, il ne reste qu’à ajuster les intitulés et les dates.',
    catTypes: 'Par type de projet', catIndustry: 'Par secteur', catTeam: 'Par équipe et fonction',
    catTime: 'Par période', catAgile: 'Agile et sprints', catSector: 'Énergie et hôtellerie', catOps: 'Opérations et programmes d’entreprise', catAcademic: 'Recherche et études', catFormat: 'Par format',
    ctaH2: 'Commencez avec un modèle gratuit', ctaP: 'Ouvrez, modifiez, exportez. Sans compte.', ctaBtn: 'Ouvrir l’éditeur',
    noteEn: 'La fiche de chaque modèle est en anglais pour le moment.',
  },
  de: {
    title: 'Kostenlose Gantt-Diagramm-Vorlagen | gantts.app',
    description: 'Kostenlose Gantt-Diagramm-Vorlagen für Excel, PowerPoint und CSV herunterladen oder online bearbeiten. Bau, Marketing, Software, Events und mehr.',
    h1: 'Kostenlose Gantt-Diagramm-Vorlagen',
    lead: 'Jede Vorlage öffnet sich direkt im Editor und lässt sich zusätzlich als Excel, PowerPoint oder CSV herunterladen. Ohne Anmeldung, ohne Wasserzeichen.',
    intro: 'Wählen Sie einen Startpunkt, der Ihrem Projekt nahekommt: Phasen und Aufgaben sind bereits gefüllt — Sie passen nur noch Bezeichnungen und Termine an.',
    catTypes: 'Nach Projektart', catIndustry: 'Nach Branche', catTeam: 'Nach Team und Funktion',
    catTime: 'Nach Zeitraum', catAgile: 'Agile und Sprints', catSector: 'Energie und Hotellerie', catOps: 'Betrieb und Unternehmensprogramme', catAcademic: 'Forschung und Studium', catFormat: 'Nach Format',
    ctaH2: 'Mit einer kostenlosen Vorlage starten', ctaP: 'Öffnen, anpassen, exportieren. Ohne Konto.', ctaBtn: 'Editor öffnen',
    noteEn: 'Die Detailseiten der Vorlagen sind derzeit auf Englisch.',
  },
  pt: {
    title: 'Modelos de gráfico de Gantt grátis | gantts.app',
    description: 'Baixe modelos de gráfico de Gantt grátis para Excel, PowerPoint e CSV, ou edite online. Construção, marketing, software, eventos e muito mais.',
    h1: 'Modelos de gráfico de Gantt grátis',
    lead: 'Cada modelo abre direto no editor e também pode ser baixado em Excel, PowerPoint ou CSV. Sem cadastro e sem marca d’água.',
    intro: 'Escolha um ponto de partida próximo do seu projeto: as fases e tarefas já vêm preenchidas, então basta ajustar os nomes e as datas.',
    catTypes: 'Por tipo de projeto', catIndustry: 'Por setor', catTeam: 'Por equipe e função',
    catTime: 'Por período', catAgile: 'Ágil e sprints', catSector: 'Energia e hotelaria', catOps: 'Operações e programas corporativos', catAcademic: 'Pesquisa e estudos', catFormat: 'Por formato',
    ctaH2: 'Comece com um modelo grátis', ctaP: 'Abra, edite e exporte. Sem conta.', ctaBtn: 'Abrir o editor',
    noteEn: 'A página de cada modelo está em inglês por enquanto.',
  },
  zh: {
    title: '免费甘特图模板 | gantts.app',
    description: '免费下载 Excel、PowerPoint 和 CSV 格式的甘特图模板，也可直接在线编辑。涵盖工程、市场、软件、活动等多种场景。',
    h1: '免费甘特图模板',
    lead: '每个模板都能直接在编辑器中打开，也可下载为 Excel、PowerPoint 或 CSV。无需注册，没有水印。',
    intro: '挑选一个与你的项目最接近的起点：阶段和任务都已填好，你只需要改一下名称和日期。',
    catTypes: '按项目类型', catIndustry: '按行业', catTeam: '按团队与职能',
    catTime: '按周期', catAgile: '敏捷与冲刺', catSector: '能源与酒店', catOps: '运营与企业项目', catAcademic: '科研与学业', catFormat: '按格式',
    ctaH2: '从免费模板开始', ctaP: '打开、编辑、导出。无需账号。', ctaBtn: '打开编辑器',
    noteEn: '模板详情页目前为英文。',
  },
};

// Card labels per locale, keyed by slug.
const TEMPLATE_LABELS = {
  es: { 'project-management': 'Gestión de proyectos', construction: 'Construcción', 'software-development': 'Desarrollo de software', marketing: 'Marketing', 'product-launch': 'Lanzamiento de producto', 'event-planning': 'Organización de eventos', agile: 'Ágil', sprint: 'Sprint', 'product-roadmap': 'Hoja de ruta de producto', 'content-calendar': 'Calendario de contenidos', 'employee-onboarding': 'Incorporación de empleados', '30-60-90-day-plan': 'Plan de 30-60-90 días', research: 'Investigación', 'home-renovation': 'Reforma del hogar', 'wedding-planning': 'Organización de bodas', weekly: 'Semanal', monthly: 'Mensual', annual: 'Anual', simple: 'Sencilla', excel: 'Excel', 'google-sheets': 'Google Sheets', powerpoint: 'PowerPoint', 'refinery-turnaround-schedule': 'Parada de refinería', 'solar-farm-construction-schedule': 'Planta solar', 'ev-charging-installation-schedule': 'Puntos de recarga para VE', 'hotel-pre-opening-critical-path': 'Apertura de hotel', 'dissertation-gantt-chart': 'Tesis de máster', 'phd-research-gantt-chart': 'Investigación doctoral', 'wind-farm-construction-schedule': 'Parque eólico', 'mining-project-schedule': 'Proyecto minero', 'shipbuilding-project-schedule': 'Construcción naval', 'apparel-production-calendar': 'Calendario de producción textil', 'grant-proposal-gantt-chart': 'Propuesta de subvención', 'printable-gantt-chart': 'Para imprimir (PDF)', 'one-page-gantt-chart': 'Plan en una página', 'clinical-trial-gantt-chart': 'Ensayo clínico', 'erp-implementation-schedule': 'Implantación de ERP', 'data-center-build-schedule': 'Centro de datos', 'restaurant-opening-timeline': 'Apertura de restaurante', 'post-merger-integration-plan': 'Integración tras fusión', 'office-relocation-project-plan': 'Traslado de oficina' },
  fr: { 'project-management': 'Gestion de projet', construction: 'BTP / Construction', 'software-development': 'Développement logiciel', marketing: 'Marketing', 'product-launch': 'Lancement de produit', 'event-planning': 'Organisation d’événement', agile: 'Agile', sprint: 'Sprint', 'product-roadmap': 'Feuille de route produit', 'content-calendar': 'Calendrier éditorial', 'employee-onboarding': 'Intégration des employés', '30-60-90-day-plan': 'Plan 30-60-90 jours', research: 'Recherche', 'home-renovation': 'Rénovation', 'wedding-planning': 'Organisation de mariage', weekly: 'Hebdomadaire', monthly: 'Mensuel', annual: 'Annuel', simple: 'Simple', excel: 'Excel', 'google-sheets': 'Google Sheets', powerpoint: 'PowerPoint', 'refinery-turnaround-schedule': 'Arrêt de raffinerie', 'solar-farm-construction-schedule': 'Ferme solaire', 'ev-charging-installation-schedule': 'Bornes de recharge', 'hotel-pre-opening-critical-path': 'Ouverture d’hôtel', 'dissertation-gantt-chart': 'Mémoire', 'phd-research-gantt-chart': 'Recherche doctorale', 'wind-farm-construction-schedule': 'Parc éolien', 'mining-project-schedule': 'Projet minier', 'shipbuilding-project-schedule': 'Construction navale', 'apparel-production-calendar': 'Calendrier de production textile', 'grant-proposal-gantt-chart': 'Demande de subvention', 'printable-gantt-chart': 'À imprimer (PDF)', 'one-page-gantt-chart': 'Plan sur une page', 'clinical-trial-gantt-chart': 'Essai clinique', 'erp-implementation-schedule': 'Déploiement ERP', 'data-center-build-schedule': 'Centre de données', 'restaurant-opening-timeline': 'Ouverture de restaurant', 'post-merger-integration-plan': 'Intégration post-fusion', 'office-relocation-project-plan': 'Déménagement de bureaux' },
  de: { 'project-management': 'Projektmanagement', construction: 'Bauwesen', 'software-development': 'Softwareentwicklung', marketing: 'Marketing', 'product-launch': 'Produkteinführung', 'event-planning': 'Eventplanung', agile: 'Agil', sprint: 'Sprint', 'product-roadmap': 'Produkt-Roadmap', 'content-calendar': 'Redaktionsplan', 'employee-onboarding': 'Mitarbeiter-Onboarding', '30-60-90-day-plan': '30-60-90-Tage-Plan', research: 'Forschung', 'home-renovation': 'Renovierung', 'wedding-planning': 'Hochzeitsplanung', weekly: 'Wöchentlich', monthly: 'Monatlich', annual: 'Jährlich', simple: 'Einfach', excel: 'Excel', 'google-sheets': 'Google Sheets', powerpoint: 'PowerPoint', 'refinery-turnaround-schedule': 'Raffinerie-Stillstand', 'solar-farm-construction-schedule': 'Solarpark', 'ev-charging-installation-schedule': 'Ladeinfrastruktur', 'hotel-pre-opening-critical-path': 'Hoteleröffnung', 'dissertation-gantt-chart': 'Masterarbeit', 'phd-research-gantt-chart': 'Promotionsplan', 'wind-farm-construction-schedule': 'Windpark', 'mining-project-schedule': 'Bergbauprojekt', 'shipbuilding-project-schedule': 'Schiffbau', 'apparel-production-calendar': 'Produktionskalender Bekleidung', 'grant-proposal-gantt-chart': 'Förderantrag', 'printable-gantt-chart': 'Druckvorlage (PDF)', 'one-page-gantt-chart': 'Plan auf einer Seite', 'clinical-trial-gantt-chart': 'Klinische Studie', 'erp-implementation-schedule': 'ERP-Einführung', 'data-center-build-schedule': 'Rechenzentrum', 'restaurant-opening-timeline': 'Restauranteröffnung', 'post-merger-integration-plan': 'Post-Merger-Integration', 'office-relocation-project-plan': 'Büroumzug' },
  pt: { 'project-management': 'Gestão de projetos', construction: 'Construção', 'software-development': 'Desenvolvimento de software', marketing: 'Marketing', 'product-launch': 'Lançamento de produto', 'event-planning': 'Planejamento de eventos', agile: 'Ágil', sprint: 'Sprint', 'product-roadmap': 'Roadmap de produto', 'content-calendar': 'Calendário de conteúdo', 'employee-onboarding': 'Integração de funcionários', '30-60-90-day-plan': 'Plano de 30-60-90 dias', research: 'Pesquisa', 'home-renovation': 'Reforma residencial', 'wedding-planning': 'Planejamento de casamento', weekly: 'Semanal', monthly: 'Mensal', annual: 'Anual', simple: 'Simples', excel: 'Excel', 'google-sheets': 'Google Sheets', powerpoint: 'PowerPoint', 'refinery-turnaround-schedule': 'Parada de refinaria', 'solar-farm-construction-schedule': 'Usina solar', 'ev-charging-installation-schedule': 'Recarga de veículos elétricos', 'hotel-pre-opening-critical-path': 'Abertura de hotel', 'dissertation-gantt-chart': 'Dissertação', 'phd-research-gantt-chart': 'Pesquisa de doutorado', 'wind-farm-construction-schedule': 'Parque eólico', 'mining-project-schedule': 'Projeto de mineração', 'shipbuilding-project-schedule': 'Construção naval', 'apparel-production-calendar': 'Calendário de produção têxtil', 'grant-proposal-gantt-chart': 'Proposta de financiamento', 'printable-gantt-chart': 'Para impressão (PDF)', 'one-page-gantt-chart': 'Plano em uma página', 'clinical-trial-gantt-chart': 'Ensaio clínico', 'erp-implementation-schedule': 'Implantação de ERP', 'data-center-build-schedule': 'Data center', 'restaurant-opening-timeline': 'Abertura de restaurante', 'post-merger-integration-plan': 'Integração pós-fusão', 'office-relocation-project-plan': 'Mudança de escritório' },
  zh: { 'project-management': '项目管理', construction: '工程施工', 'software-development': '软件开发', marketing: '市场营销', 'product-launch': '产品发布', 'event-planning': '活动策划', agile: '敏捷开发', sprint: '冲刺 Sprint', 'product-roadmap': '产品路线图', 'content-calendar': '内容日历', 'employee-onboarding': '员工入职', '30-60-90-day-plan': '30-60-90 天计划', research: '研究计划', 'home-renovation': '房屋装修', 'wedding-planning': '婚礼筹备', weekly: '周计划', monthly: '月计划', annual: '年度计划', simple: '简易模板', excel: 'Excel 模板', 'google-sheets': 'Google Sheets 模板', powerpoint: 'PowerPoint 模板', 'refinery-turnaround-schedule': '炼油厂检修', 'solar-farm-construction-schedule': '光伏电站建设', 'ev-charging-installation-schedule': '充电桩安装', 'hotel-pre-opening-critical-path': '酒店开业筹备', 'dissertation-gantt-chart': '硕士论文', 'phd-research-gantt-chart': '博士研究计划', 'wind-farm-construction-schedule': '风电场建设', 'mining-project-schedule': '矿业项目', 'shipbuilding-project-schedule': '船舶建造', 'apparel-production-calendar': '服装生产日历', 'grant-proposal-gantt-chart': '科研经费申请', 'printable-gantt-chart': '可打印版（PDF）', 'one-page-gantt-chart': '一页纸计划', 'clinical-trial-gantt-chart': '临床试验', 'erp-implementation-schedule': 'ERP 实施', 'data-center-build-schedule': '数据中心建设', 'restaurant-opening-timeline': '餐厅开业', 'post-merger-integration-plan': '并购整合', 'office-relocation-project-plan': '办公室搬迁' },
};

// Which slugs sit under which category heading.
const TEMPLATE_GROUPS = [
  { key: 'catTypes', slugs: ['project-management', 'product-launch', 'event-planning', 'research', 'simple'] },
  { key: 'catIndustry', slugs: ['construction', 'software-development', 'home-renovation', 'wedding-planning'] },
  { key: 'catTeam', slugs: ['marketing', 'content-calendar', 'employee-onboarding', '30-60-90-day-plan', 'product-roadmap'] },
  { key: 'catTime', slugs: ['weekly', 'monthly', 'annual'] },
  { key: 'catAgile', slugs: ['agile', 'sprint'] },
  { key: 'catSector', slugs: ['refinery-turnaround-schedule', 'solar-farm-construction-schedule',
      'wind-farm-construction-schedule', 'ev-charging-installation-schedule',
      'mining-project-schedule', 'shipbuilding-project-schedule',
      'apparel-production-calendar', 'hotel-pre-opening-critical-path'] },
  { key: 'catOps', slugs: ['erp-implementation-schedule', 'post-merger-integration-plan',
      'office-relocation-project-plan', 'data-center-build-schedule',
      'restaurant-opening-timeline', 'clinical-trial-gantt-chart'] },
  { key: 'catAcademic', slugs: ['dissertation-gantt-chart', 'phd-research-gantt-chart', 'grant-proposal-gantt-chart', 'research'] },
  { key: 'catFormat', slugs: ['excel', 'google-sheets', 'powerpoint', 'printable-gantt-chart', 'one-page-gantt-chart'] },
];

// ---------------- Blog / guides index ----------------
const BLOG = {
  es: {
    title: 'Guías de diagramas de Gantt | gantts.app',
    description: 'Guías claras sobre diagramas de Gantt: qué son, cómo crearlos, la ruta crítica y cómo hacerlos en Excel, Google Sheets y PowerPoint.',
    h1: 'Guías de diagramas de Gantt',
    lead: 'Explicaciones prácticas, sin jerga: qué es un diagrama de Gantt, cómo montar uno y cómo leer la ruta crítica.',
    readMore: 'Leer la guía',
    noteEn: 'Las guías completas están en inglés por ahora.',
  },
  fr: {
    title: 'Guides sur les diagrammes de Gantt | gantts.app',
    description: 'Des guides clairs sur les diagrammes de Gantt : définition, création, chemin critique, et comment en faire dans Excel, Google Sheets et PowerPoint.',
    h1: 'Guides sur les diagrammes de Gantt',
    lead: 'Des explications concrètes et sans jargon : ce qu’est un diagramme de Gantt, comment en construire un, et comment lire le chemin critique.',
    readMore: 'Lire le guide',
    noteEn: 'Les guides complets sont en anglais pour le moment.',
  },
  de: {
    title: 'Gantt-Diagramm-Ratgeber | gantts.app',
    description: 'Verständliche Ratgeber zu Gantt-Diagrammen: was sie sind, wie man sie erstellt, der kritische Pfad und die Umsetzung in Excel, Google Sheets und PowerPoint.',
    h1: 'Gantt-Diagramm-Ratgeber',
    lead: 'Praxisnah und ohne Fachjargon erklärt: was ein Gantt-Diagramm ist, wie Sie eines aufbauen und wie Sie den kritischen Pfad lesen.',
    readMore: 'Ratgeber lesen',
    noteEn: 'Die vollständigen Ratgeber sind derzeit auf Englisch.',
  },
  pt: {
    title: 'Guias de gráfico de Gantt | gantts.app',
    description: 'Guias claros sobre gráficos de Gantt: o que são, como criar, caminho crítico e como fazer no Excel, Google Sheets e PowerPoint.',
    h1: 'Guias de gráfico de Gantt',
    lead: 'Explicações práticas e sem jargão: o que é um gráfico de Gantt, como montar um e como ler o caminho crítico.',
    readMore: 'Ler o guia',
    noteEn: 'Os guias completos estão em inglês por enquanto.',
  },
  zh: {
    title: '甘特图指南 | gantts.app',
    description: '清晰易懂的甘特图指南：什么是甘特图、如何制作、关键路径，以及如何在 Excel、Google Sheets 和 PowerPoint 中绘制。',
    h1: '甘特图指南',
    lead: '不讲术语的实用讲解：什么是甘特图、怎样从零搭一个，以及如何看懂关键路径。',
    readMore: '阅读指南',
    noteEn: '完整指南目前为英文。',
  },
};

const BLOG_LABELS = {
  es: { 'what-is-a-gantt-chart': '¿Qué es un diagrama de Gantt?', 'how-to-make-a-gantt-chart': 'Cómo hacer un diagrama de Gantt', 'critical-path-method': 'El método de la ruta crítica (CPM)', 'gantt-chart-examples': 'Ejemplos de diagramas de Gantt', 'gantt-chart-in-excel': 'Diagrama de Gantt en Excel', 'gantt-chart-in-google-sheets': 'Diagrama de Gantt en Google Sheets', 'gantt-chart-in-powerpoint': 'Diagrama de Gantt en PowerPoint', 'best-free-gantt-chart-software': 'Mejores programas de Gantt gratuitos', 'gantt-chart-dependencies': 'Dependencias: FS, SS, FF, SF', 'gantt-baseline-variance': 'Línea base y desviación', 'gantt-chart-mistakes': 'Nueve errores habituales', 'milestones-vs-tasks': 'Hitos frente a tareas' },
  fr: { 'what-is-a-gantt-chart': 'Qu’est-ce qu’un diagramme de Gantt ?', 'how-to-make-a-gantt-chart': 'Comment faire un diagramme de Gantt', 'critical-path-method': 'La méthode du chemin critique (CPM)', 'gantt-chart-examples': 'Exemples de diagrammes de Gantt', 'gantt-chart-in-excel': 'Diagramme de Gantt dans Excel', 'gantt-chart-in-google-sheets': 'Diagramme de Gantt dans Google Sheets', 'gantt-chart-in-powerpoint': 'Diagramme de Gantt dans PowerPoint', 'best-free-gantt-chart-software': 'Meilleurs logiciels de Gantt gratuits', 'gantt-chart-dependencies': 'Dépendances : FS, SS, FF, SF', 'gantt-baseline-variance': 'Référence et écart de planning', 'gantt-chart-mistakes': 'Neuf erreurs courantes', 'milestones-vs-tasks': 'Jalons et tâches' },
  de: { 'what-is-a-gantt-chart': 'Was ist ein Gantt-Diagramm?', 'how-to-make-a-gantt-chart': 'Ein Gantt-Diagramm erstellen', 'critical-path-method': 'Die Methode des kritischen Pfads (CPM)', 'gantt-chart-examples': 'Beispiele für Gantt-Diagramme', 'gantt-chart-in-excel': 'Gantt-Diagramm in Excel', 'gantt-chart-in-google-sheets': 'Gantt-Diagramm in Google Sheets', 'gantt-chart-in-powerpoint': 'Gantt-Diagramm in PowerPoint', 'best-free-gantt-chart-software': 'Beste kostenlose Gantt-Software', 'gantt-chart-dependencies': 'Abhängigkeiten: FS, SS, FF, SF', 'gantt-baseline-variance': 'Basisplan und Abweichung', 'gantt-chart-mistakes': 'Neun häufige Fehler', 'milestones-vs-tasks': 'Meilensteine und Vorgänge' },
  pt: { 'what-is-a-gantt-chart': 'O que é um gráfico de Gantt?', 'how-to-make-a-gantt-chart': 'Como fazer um gráfico de Gantt', 'critical-path-method': 'O método do caminho crítico (CPM)', 'gantt-chart-examples': 'Exemplos de gráficos de Gantt', 'gantt-chart-in-excel': 'Gráfico de Gantt no Excel', 'gantt-chart-in-google-sheets': 'Gráfico de Gantt no Google Sheets', 'gantt-chart-in-powerpoint': 'Gráfico de Gantt no PowerPoint', 'best-free-gantt-chart-software': 'Melhores softwares de Gantt gratuitos', 'gantt-chart-dependencies': 'Dependências: FS, SS, FF, SF', 'gantt-baseline-variance': 'Linha de base e variação', 'gantt-chart-mistakes': 'Nove erros comuns', 'milestones-vs-tasks': 'Marcos e tarefas' },
  zh: { 'what-is-a-gantt-chart': '什么是甘特图？', 'how-to-make-a-gantt-chart': '如何制作甘特图', 'critical-path-method': '关键路径法（CPM）', 'gantt-chart-examples': '甘特图示例', 'gantt-chart-in-excel': '用 Excel 制作甘特图', 'gantt-chart-in-google-sheets': '用 Google Sheets 制作甘特图', 'gantt-chart-in-powerpoint': '用 PowerPoint 制作甘特图', 'best-free-gantt-chart-software': '最好用的免费甘特图软件', 'gantt-chart-dependencies': '依赖关系：FS、SS、FF、SF', 'gantt-baseline-variance': '基线与进度偏差', 'gantt-chart-mistakes': '九个常见错误', 'milestones-vs-tasks': '里程碑与任务' },
};


/* ---------------- The app itself ----------------
   app.html keeps runtime i18n (it is an application UI), but each locale
   gets its own URL so the language is decided by where you are, not by
   what happens to be in localStorage. */
const APP = {
  es: { title: 'Crear diagrama de Gantt online gratis | gantts.app',
        description: 'Editor de diagramas de Gantt gratuito en tu navegador. Arrastra tareas, enlaza dependencias, ve la ruta crítica y exporta a PDF, Excel o PowerPoint.' },
  fr: { title: 'Créer un diagramme de Gantt en ligne | gantts.app',
        description: 'Éditeur de diagrammes de Gantt gratuit dans votre navigateur. Déplacez les tâches, liez les dépendances, voyez le chemin critique, exportez en PDF ou Excel.' },
  de: { title: 'Gantt-Diagramm online erstellen | gantts.app',
        description: 'Kostenloser Gantt-Editor im Browser. Vorgänge verschieben, Abhängigkeiten verknüpfen, kritischen Pfad sehen und nach PDF, Excel oder PowerPoint exportieren.' },
  pt: { title: 'Criar gráfico de Gantt online grátis | gantts.app',
        description: 'Editor de gráfico de Gantt gratuito no navegador. Arraste tarefas, ligue dependências, veja o caminho crítico e exporte para PDF, Excel ou PowerPoint.' },
  zh: { title: '在线制作甘特图 — 免费 | gantts.app',
        description: '在浏览器中免费使用的甘特图编辑器。拖动任务、关联依赖、查看关键路径，并导出为 PDF、Excel 或 PowerPoint。' },
};

module.exports = {
  LOCALES, CHROME, HOME,
  TEMPLATES, TEMPLATE_SLUGS, TEMPLATE_LABELS, TEMPLATE_GROUPS,
  BLOG, BLOG_SLUGS, BLOG_LABELS,
  APP,
};
