/* ============================================================
   i18n.js — lightweight client-side translation for gantts.app
   - Translates any element with data-i18n / data-i18n-html /
     data-i18n-ph (placeholder) / data-i18n-title (title attr).
   - Language persists in localStorage and sets <html lang>.
   - Auto-fills any <select class="lang-select"> with language options.
   Languages: English + Spanish, French, German, Portuguese, Chinese.
   ============================================================ */
(function () {
  var KEY = 'gantts.lang';
  var LANGS = [['en', 'English'], ['es', 'Español'], ['fr', 'Français'], ['de', 'Deutsch'], ['pt', 'Português'], ['zh', '中文']];

  var D = {
    en: {
      'app.tableview': 'Table view',
      'nav.maker': 'Gantt Maker', 'nav.templates': 'Templates', 'nav.guides': 'Guides',
      'nav.what': 'What is a Gantt chart?', 'nav.open': 'Open the app',
      'hero.kicker': 'Free · no sign-up · runs in your browser',
      'hero.h1': 'The free online <span class="grad">Gantt chart maker</span> that just opens and works.',
      'hero.sub': 'Type or paste your tasks and watch them fall into a clean, interactive timeline. Dependencies, critical path, milestones — then export to PDF, Excel or PowerPoint. No account, ever.',
      'hero.cta1': 'Start planning — free', 'hero.cta2': 'or open a template →',
      'hero.meta': 'No account · unlimited tasks · works offline · your data stays in your browser',
      'bars.add': 'Add & drag tasks', 'bars.link': 'Link dependencies', 'bars.cp': 'See the critical path',
      'bars.ms': 'Milestones & phases', 'bars.export': 'Export to PDF · Excel · PPT',
      'cta.h2': 'Your Gantt chart is one click away',
      'cta.p': 'No account. No download. Just open the editor and start planning.',
      'cta.btn': 'Open the Gantt maker →',
      // app
      'app.home': '← Home', 'app.present': '▶ Present', 'app.projects': '📁 Projects',
      'app.save': '💾 Save', 'app.open': '📂 Open', 'app.export': '⬇ Export',
      'app.task': '＋ Task', 'app.milestone': '◆ Milestone', 'app.group': '▣ Group',
      'app.paste': '✨ Paste to Gantt', 'app.zoom': 'Zoom', 'app.font': 'Font',
      'app.critical': 'Critical path', 'app.critlegend': 'striped = critical path',
      'app.weekends': 'Weekends', 'app.progress': 'Progress', 'app.today': 'Today',
      'app.templates': '✨ Templates', 'app.fit': '⤢ Fit', 'app.todaybtn': '◎ Today',
      'col.name': 'Task name', 'col.pred': 'Runs after', 'col.start': 'Start', 'col.end': 'End', 'col.days': 'Days', 'col.assignee': 'Assignee',
      'empty.title': 'Start your Gantt chart', 'empty.sub': 'Add your first task, paste a task list, or pick a template.',
      'empty.add': '＋ Add first task', 'empty.paste': '✨ Paste to Gantt', 'empty.templates': 'Browse templates',
      'exp.save': '💾 Save project file (.gantts)', 'exp.png': '🖼 PNG image', 'exp.pdf': '📄 PDF document',
      'exp.xlsx': '📊 Excel (.xlsx)', 'exp.pptx': '📽 PowerPoint (.pptx)', 'exp.csv': '📑 CSV (spreadsheet)',
      'exp.json': '{ } JSON (raw)', 'exp.print': '🖨 Print', 'exp.link': '🔗 Shareable link',
      'pt.laser': '🔴 Laser', 'pt.spotlight': '🔦 Spotlight', 'pt.reset': 'Reset', 'pt.exit': '✕ Exit',

      // added with the S-curve / lookahead / Mermaid work
      'app.scurve': 'S-curve',
      'app.view': 'View',
      'view.all': 'All tasks',
      'view.lookahead': 'Lookahead',
      'view.milestones': 'Milestones only',
      'view.thisweek': 'This week',
      'view.showall': 'Show all tasks',
      'app.autoschedule': 'Auto-schedule',
      'exp.mermaid': '🧜 Mermaid gantt (text)',
      'exp.ics': '📅 Calendar (.ics)',
    },
    es: {
      'app.tableview': 'Tabla',
      'nav.maker': 'Crear Gantt', 'nav.templates': 'Plantillas', 'nav.guides': 'Guías',
      'nav.what': '¿Qué es un diagrama de Gantt?', 'nav.open': 'Abrir la app',
      'hero.kicker': 'Gratis · sin registro · funciona en tu navegador',
      'hero.h1': 'El <span class="grad">creador de diagramas de Gantt</span> gratis que simplemente funciona.',
      'hero.sub': 'Escribe o pega tus tareas y míralas convertirse en un cronograma interactivo. Dependencias, ruta crítica, hitos — y exporta a PDF, Excel o PowerPoint. Sin cuenta, nunca.',
      'hero.cta1': 'Empieza a planificar — gratis', 'hero.cta2': 'o abre una plantilla →',
      'hero.meta': 'Sin cuenta · tareas ilimitadas · funciona sin conexión · tus datos quedan en tu navegador',
      'bars.add': 'Añadir y arrastrar tareas', 'bars.link': 'Enlazar dependencias', 'bars.cp': 'Ver la ruta crítica',
      'bars.ms': 'Hitos y fases', 'bars.export': 'Exportar a PDF · Excel · PPT',
      'cta.h2': 'Tu diagrama de Gantt está a un clic',
      'cta.p': 'Sin cuenta. Sin descargas. Abre el editor y empieza a planificar.',
      'cta.btn': 'Abrir el creador de Gantt →',
      'app.home': '← Inicio', 'app.present': '▶ Presentar', 'app.projects': '📁 Proyectos',
      'app.save': '💾 Guardar', 'app.open': '📂 Abrir', 'app.export': '⬇ Exportar',
      'app.task': '＋ Tarea', 'app.milestone': '◆ Hito', 'app.group': '▣ Grupo',
      'app.paste': '✨ Pegar a Gantt', 'app.zoom': 'Zoom', 'app.font': 'Fuente',
      'app.critical': 'Ruta crítica', 'app.critlegend': 'rayado = ruta crítica',
      'app.weekends': 'Fines de semana', 'app.progress': 'Progreso', 'app.today': 'Hoy',
      'app.templates': '✨ Plantillas', 'app.fit': '⤢ Ajustar', 'app.todaybtn': '◎ Hoy',
      'col.name': 'Nombre de la tarea', 'col.pred': 'Después de', 'col.start': 'Inicio', 'col.end': 'Fin', 'col.days': 'Días', 'col.assignee': 'Responsable',
      'empty.title': 'Comienza tu diagrama de Gantt', 'empty.sub': 'Añade tu primera tarea, pega una lista o elige una plantilla.',
      'empty.add': '＋ Añadir tarea', 'empty.paste': '✨ Pegar a Gantt', 'empty.templates': 'Ver plantillas',
      'exp.save': '💾 Guardar proyecto (.gantts)', 'exp.png': '🖼 Imagen PNG', 'exp.pdf': '📄 Documento PDF',
      'exp.xlsx': '📊 Excel (.xlsx)', 'exp.pptx': '📽 PowerPoint (.pptx)', 'exp.csv': '📑 CSV (hoja de cálculo)',
      'exp.json': '{ } JSON (bruto)', 'exp.print': '🖨 Imprimir', 'exp.link': '🔗 Enlace para compartir',
      'pt.laser': '🔴 Láser', 'pt.spotlight': '🔦 Foco', 'pt.reset': 'Restablecer', 'pt.exit': '✕ Salir',

      // added with the S-curve / lookahead / Mermaid work
      'app.scurve': 'Curva S',
      'app.view': 'Vista',
      'view.all': 'Todas las tareas',
      'view.lookahead': 'Próximas semanas',
      'view.milestones': 'Solo hitos',
      'view.thisweek': 'Esta semana',
      'view.showall': 'Ver todas las tareas',
      'app.autoschedule': 'Reprogramar',
      'exp.mermaid': '🧜 Mermaid gantt (texto)',
      'exp.ics': '📅 Calendario (.ics)',
    },
    fr: {
      'app.tableview': 'Tableau',
      'nav.maker': 'Créer un Gantt', 'nav.templates': 'Modèles', 'nav.guides': 'Guides',
      'nav.what': "Qu'est-ce qu'un diagramme de Gantt ?", 'nav.open': "Ouvrir l'app",
      'hero.kicker': 'Gratuit · sans inscription · dans votre navigateur',
      'hero.h1': 'Le <span class="grad">créateur de diagrammes de Gantt</span> gratuit qui s\'ouvre et fonctionne, tout simplement.',
      'hero.sub': 'Saisissez ou collez vos tâches et voyez-les former un planning interactif. Dépendances, chemin critique, jalons — puis exportez en PDF, Excel ou PowerPoint. Sans compte, jamais.',
      'hero.cta1': 'Commencer — gratuit', 'hero.cta2': 'ou ouvrir un modèle →',
      'hero.meta': 'Sans compte · tâches illimitées · hors ligne · vos données restent dans votre navigateur',
      'bars.add': 'Ajouter et déplacer des tâches', 'bars.link': 'Lier les dépendances', 'bars.cp': 'Voir le chemin critique',
      'bars.ms': 'Jalons et phases', 'bars.export': 'Exporter en PDF · Excel · PPT',
      'cta.h2': 'Votre diagramme de Gantt en un clic',
      'cta.p': "Sans compte. Sans téléchargement. Ouvrez l'éditeur et commencez à planifier.",
      'cta.btn': 'Ouvrir le créateur de Gantt →',
      'app.home': '← Accueil', 'app.present': '▶ Présenter', 'app.projects': '📁 Projets',
      'app.save': '💾 Enregistrer', 'app.open': '📂 Ouvrir', 'app.export': '⬇ Exporter',
      'app.task': '＋ Tâche', 'app.milestone': '◆ Jalon', 'app.group': '▣ Groupe',
      'app.paste': '✨ Coller vers Gantt', 'app.zoom': 'Zoom', 'app.font': 'Police',
      'app.critical': 'Chemin critique', 'app.critlegend': 'hachuré = chemin critique',
      'app.weekends': 'Week-ends', 'app.progress': 'Avancement', 'app.today': "Aujourd'hui",
      'app.templates': '✨ Modèles', 'app.fit': '⤢ Ajuster', 'app.todaybtn': "◎ Aujourd'hui",
      'col.name': 'Nom de la tâche', 'col.pred': 'Après', 'col.start': 'Début', 'col.end': 'Fin', 'col.days': 'Jours', 'col.assignee': 'Assigné à',
      'empty.title': 'Commencez votre diagramme de Gantt', 'empty.sub': 'Ajoutez une tâche, collez une liste ou choisissez un modèle.',
      'empty.add': '＋ Ajouter une tâche', 'empty.paste': '✨ Coller vers Gantt', 'empty.templates': 'Voir les modèles',
      'exp.save': '💾 Enregistrer le projet (.gantts)', 'exp.png': '🖼 Image PNG', 'exp.pdf': '📄 Document PDF',
      'exp.xlsx': '📊 Excel (.xlsx)', 'exp.pptx': '📽 PowerPoint (.pptx)', 'exp.csv': '📑 CSV (tableur)',
      'exp.json': '{ } JSON (brut)', 'exp.print': '🖨 Imprimer', 'exp.link': '🔗 Lien de partage',
      'pt.laser': '🔴 Laser', 'pt.spotlight': '🔦 Projecteur', 'pt.reset': 'Réinit.', 'pt.exit': '✕ Quitter',

      // added with the S-curve / lookahead / Mermaid work
      'app.scurve': 'Courbe en S',
      'app.view': 'Vue',
      'view.all': 'Toutes les tâches',
      'view.lookahead': 'Semaines à venir',
      'view.milestones': 'Jalons seulement',
      'view.thisweek': 'Cette semaine',
      'view.showall': 'Afficher toutes les tâches',
      'app.autoschedule': 'Replanifier',
      'exp.mermaid': '🧜 Mermaid gantt (texte)',
      'exp.ics': '📅 Calendrier (.ics)',
    },
    de: {
      'app.tableview': 'Tabelle',
      'nav.maker': 'Gantt erstellen', 'nav.templates': 'Vorlagen', 'nav.guides': 'Ratgeber',
      'nav.what': 'Was ist ein Gantt-Diagramm?', 'nav.open': 'App öffnen',
      'hero.kicker': 'Kostenlos · ohne Anmeldung · im Browser',
      'hero.h1': 'Der kostenlose <span class="grad">Gantt-Diagramm-Ersteller</span>, der einfach funktioniert.',
      'hero.sub': 'Tippe oder füge deine Aufgaben ein und sieh zu, wie sie zu einer übersichtlichen, interaktiven Zeitleiste werden. Abhängigkeiten, kritischer Pfad, Meilensteine — dann Export als PDF, Excel oder PowerPoint. Ganz ohne Konto.',
      'hero.cta1': 'Jetzt planen — kostenlos', 'hero.cta2': 'oder Vorlage öffnen →',
      'hero.meta': 'Kein Konto · unbegrenzte Aufgaben · offline nutzbar · deine Daten bleiben im Browser',
      'bars.add': 'Aufgaben hinzufügen & ziehen', 'bars.link': 'Abhängigkeiten verknüpfen', 'bars.cp': 'Kritischen Pfad sehen',
      'bars.ms': 'Meilensteine & Phasen', 'bars.export': 'Export als PDF · Excel · PPT',
      'cta.h2': 'Dein Gantt-Diagramm ist nur einen Klick entfernt',
      'cta.p': 'Kein Konto. Kein Download. Öffne den Editor und leg los.',
      'cta.btn': 'Gantt-Ersteller öffnen →',
      'app.home': '← Startseite', 'app.present': '▶ Präsentieren', 'app.projects': '📁 Projekte',
      'app.save': '💾 Speichern', 'app.open': '📂 Öffnen', 'app.export': '⬇ Export',
      'app.task': '＋ Aufgabe', 'app.milestone': '◆ Meilenstein', 'app.group': '▣ Gruppe',
      'app.paste': '✨ In Gantt einfügen', 'app.zoom': 'Zoom', 'app.font': 'Schrift',
      'app.critical': 'Kritischer Pfad', 'app.critlegend': 'schraffiert = kritischer Pfad',
      'app.weekends': 'Wochenenden', 'app.progress': 'Fortschritt', 'app.today': 'Heute',
      'app.templates': '✨ Vorlagen', 'app.fit': '⤢ Anpassen', 'app.todaybtn': '◎ Heute',
      'col.name': 'Aufgabenname', 'col.pred': 'Nach', 'col.start': 'Start', 'col.end': 'Ende', 'col.days': 'Tage', 'col.assignee': 'Zuständig',
      'empty.title': 'Starte dein Gantt-Diagramm', 'empty.sub': 'Füge eine Aufgabe hinzu, füge eine Liste ein oder wähle eine Vorlage.',
      'empty.add': '＋ Aufgabe hinzufügen', 'empty.paste': '✨ In Gantt einfügen', 'empty.templates': 'Vorlagen ansehen',
      'exp.save': '💾 Projekt speichern (.gantts)', 'exp.png': '🖼 PNG-Bild', 'exp.pdf': '📄 PDF-Dokument',
      'exp.xlsx': '📊 Excel (.xlsx)', 'exp.pptx': '📽 PowerPoint (.pptx)', 'exp.csv': '📑 CSV (Tabelle)',
      'exp.json': '{ } JSON (roh)', 'exp.print': '🖨 Drucken', 'exp.link': '🔗 Teilbarer Link',
      'pt.laser': '🔴 Laser', 'pt.spotlight': '🔦 Spotlight', 'pt.reset': 'Zurücksetzen', 'pt.exit': '✕ Beenden',

      // added with the S-curve / lookahead / Mermaid work
      'app.scurve': 'S-Kurve',
      'app.view': 'Ansicht',
      'view.all': 'Alle Vorgänge',
      'view.lookahead': 'Vorschau',
      'view.milestones': 'Nur Meilensteine',
      'view.thisweek': 'Diese Woche',
      'view.showall': 'Alle Vorgänge anzeigen',
      'app.autoschedule': 'Neu planen',
      'exp.mermaid': '🧜 Mermaid-Gantt (Text)',
      'exp.ics': '📅 Kalender (.ics)',
    },
    pt: {
      'app.tableview': 'Tabela',
      'nav.maker': 'Criar Gantt', 'nav.templates': 'Modelos', 'nav.guides': 'Guias',
      'nav.what': 'O que é um gráfico de Gantt?', 'nav.open': 'Abrir o app',
      'hero.kicker': 'Grátis · sem cadastro · funciona no navegador',
      'hero.h1': 'O <span class="grad">criador de gráficos de Gantt</span> grátis que simplesmente funciona.',
      'hero.sub': 'Digite ou cole suas tarefas e veja-as virar um cronograma interativo. Dependências, caminho crítico, marcos — e exporte para PDF, Excel ou PowerPoint. Sem conta, nunca.',
      'hero.cta1': 'Começar — é grátis', 'hero.cta2': 'ou abrir um modelo →',
      'hero.meta': 'Sem conta · tarefas ilimitadas · funciona offline · seus dados ficam no navegador',
      'bars.add': 'Adicionar e arrastar tarefas', 'bars.link': 'Ligar dependências', 'bars.cp': 'Ver o caminho crítico',
      'bars.ms': 'Marcos e fases', 'bars.export': 'Exportar para PDF · Excel · PPT',
      'cta.h2': 'Seu gráfico de Gantt está a um clique',
      'cta.p': 'Sem conta. Sem download. Abra o editor e comece a planejar.',
      'cta.btn': 'Abrir o criador de Gantt →',
      'app.home': '← Início', 'app.present': '▶ Apresentar', 'app.projects': '📁 Projetos',
      'app.save': '💾 Salvar', 'app.open': '📂 Abrir', 'app.export': '⬇ Exportar',
      'app.task': '＋ Tarefa', 'app.milestone': '◆ Marco', 'app.group': '▣ Grupo',
      'app.paste': '✨ Colar no Gantt', 'app.zoom': 'Zoom', 'app.font': 'Fonte',
      'app.critical': 'Caminho crítico', 'app.critlegend': 'listrado = caminho crítico',
      'app.weekends': 'Fins de semana', 'app.progress': 'Progresso', 'app.today': 'Hoje',
      'app.templates': '✨ Modelos', 'app.fit': '⤢ Ajustar', 'app.todaybtn': '◎ Hoje',
      'col.name': 'Nome da tarefa', 'col.pred': 'Depois de', 'col.start': 'Início', 'col.end': 'Fim', 'col.days': 'Dias', 'col.assignee': 'Responsável',
      'empty.title': 'Comece seu gráfico de Gantt', 'empty.sub': 'Adicione uma tarefa, cole uma lista ou escolha um modelo.',
      'empty.add': '＋ Adicionar tarefa', 'empty.paste': '✨ Colar no Gantt', 'empty.templates': 'Ver modelos',
      'exp.save': '💾 Salvar projeto (.gantts)', 'exp.png': '🖼 Imagem PNG', 'exp.pdf': '📄 Documento PDF',
      'exp.xlsx': '📊 Excel (.xlsx)', 'exp.pptx': '📽 PowerPoint (.pptx)', 'exp.csv': '📑 CSV (planilha)',
      'exp.json': '{ } JSON (bruto)', 'exp.print': '🖨 Imprimir', 'exp.link': '🔗 Link de compartilhamento',
      'pt.laser': '🔴 Laser', 'pt.spotlight': '🔦 Holofote', 'pt.reset': 'Redefinir', 'pt.exit': '✕ Sair',

      // added with the S-curve / lookahead / Mermaid work
      'app.scurve': 'Curva S',
      'app.view': 'Exibição',
      'view.all': 'Todas as tarefas',
      'view.lookahead': 'Próximas semanas',
      'view.milestones': 'Somente marcos',
      'view.thisweek': 'Esta semana',
      'view.showall': 'Mostrar todas as tarefas',
      'app.autoschedule': 'Reprogramar',
      'exp.mermaid': '🧜 Mermaid gantt (texto)',
      'exp.ics': '📅 Calendário (.ics)',
    },
    zh: {
      'app.tableview': '表格视图',
      'nav.maker': '甘特图工具', 'nav.templates': '模板', 'nav.guides': '指南',
      'nav.what': '什么是甘特图？', 'nav.open': '打开应用',
      'hero.kicker': '免费 · 无需注册 · 在浏览器中运行',
      'hero.h1': '免费在线<span class="grad">甘特图制作工具</span>，打开即用。',
      'hero.sub': '输入或粘贴你的任务，看它们自动生成清晰的交互式时间线。依赖关系、关键路径、里程碑——一键导出为 PDF、Excel 或 PowerPoint。无需注册。',
      'hero.cta1': '免费开始规划', 'hero.cta2': '或打开模板 →',
      'hero.meta': '无需账户 · 任务无限制 · 可离线使用 · 数据保存在你的浏览器中',
      'bars.add': '添加并拖动任务', 'bars.link': '连接依赖关系', 'bars.cp': '查看关键路径',
      'bars.ms': '里程碑与阶段', 'bars.export': '导出为 PDF · Excel · PPT',
      'cta.h2': '你的甘特图一键即达',
      'cta.p': '无需账户，无需下载。打开编辑器即可开始规划。',
      'cta.btn': '打开甘特图工具 →',
      'app.home': '← 首页', 'app.present': '▶ 演示', 'app.projects': '📁 项目',
      'app.save': '💾 保存', 'app.open': '📂 打开', 'app.export': '⬇ 导出',
      'app.task': '＋ 任务', 'app.milestone': '◆ 里程碑', 'app.group': '▣ 分组',
      'app.paste': '✨ 粘贴生成甘特图', 'app.zoom': '缩放', 'app.font': '字体',
      'app.critical': '关键路径', 'app.critlegend': '斜纹 = 关键路径',
      'app.weekends': '周末', 'app.progress': '进度', 'app.today': '今天',
      'app.templates': '✨ 模板', 'app.fit': '⤢ 适应', 'app.todaybtn': '◎ 今天',
      'col.name': '任务名称', 'col.pred': '前置任务', 'col.start': '开始', 'col.end': '结束', 'col.days': '天数', 'col.assignee': '负责人',
      'empty.title': '开始你的甘特图', 'empty.sub': '添加第一个任务、粘贴任务列表或选择模板。',
      'empty.add': '＋ 添加任务', 'empty.paste': '✨ 粘贴生成甘特图', 'empty.templates': '浏览模板',
      'exp.save': '💾 保存项目文件 (.gantts)', 'exp.png': '🖼 PNG 图片', 'exp.pdf': '📄 PDF 文档',
      'exp.xlsx': '📊 Excel (.xlsx)', 'exp.pptx': '📽 PowerPoint (.pptx)', 'exp.csv': '📑 CSV（表格）',
      'exp.json': '{ } JSON（原始）', 'exp.print': '🖨 打印', 'exp.link': '🔗 分享链接',
      'pt.laser': '🔴 激光笔', 'pt.spotlight': '🔦 聚光灯', 'pt.reset': '重置', 'pt.exit': '✕ 退出',

      // added with the S-curve / lookahead / Mermaid work
      'app.scurve': 'S 曲线',
      'app.view': '视图',
      'view.all': '全部任务',
      'view.lookahead': '近期计划',
      'view.milestones': '仅里程碑',
      'view.thisweek': '本周',
      'view.showall': '显示全部任务',
      'app.autoschedule': '自动排程',
      'exp.mermaid': '🧜 Mermaid 甘特图（文本）',
      'exp.ics': '📅 日历 (.ics)',
    },
  };

  function normalize(l) { l = (l || '').slice(0, 2).toLowerCase(); return D[l] ? l : 'en'; }
  function stored() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  /* A localized app page (/es/app.html) declares its language on <html>.
     That wins over localStorage: the URL you are on is an explicit choice,
     and letting a stale stored preference override it would mean /es/app.html
     could open in German. One URL, one language — the same rule the content
     pages follow. */
  function declared() {
    try { return document.documentElement.getAttribute('data-app-lang'); } catch (e) { return null; }
  }

  var I18N = {
    lang: normalize(declared() || stored() || (navigator.language || 'en')),
    t: function (k) { return (D[I18N.lang] && D[I18N.lang][k]) || D.en[k] || k; },
    set: function (l) { I18N.lang = normalize(l); try { localStorage.setItem(KEY, I18N.lang); } catch (e) {} I18N.apply(); },
    apply: function () {
      document.documentElement.setAttribute('lang', I18N.lang);
      var q = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };
      q('[data-i18n]').forEach(function (el) { var v = I18N.t(el.getAttribute('data-i18n')); if (v != null) el.textContent = v; });
      q('[data-i18n-html]').forEach(function (el) { var v = I18N.t(el.getAttribute('data-i18n-html')); if (v != null) el.innerHTML = v; });
      q('[data-i18n-ph]').forEach(function (el) { var v = I18N.t(el.getAttribute('data-i18n-ph')); if (v != null) el.setAttribute('placeholder', v); });
      q('[data-i18n-title]').forEach(function (el) { var v = I18N.t(el.getAttribute('data-i18n-title')); if (v != null) el.setAttribute('title', v); });
      // Navigating switchers hold URLs, not language codes. Assigning a
      // code to one clears its value and the control renders blank.
      q('.lang-select').forEach(function (s) {
        if (s.hasAttribute('data-lang-nav')) return;
        if (s.value !== I18N.lang) s.value = I18N.lang;
      });
    },
    langs: LANGS,
  };

  function initSelects() {
    Array.prototype.slice.call(document.querySelectorAll('.lang-select')).forEach(function (sel) {
      // Content pages use a navigating switcher (real localized URLs, see
      // scripts/gen-i18n.js). Runtime text-swapping must not touch those —
      // it would overwrite the option values with language codes and break
      // navigation. Only the app's own switcher is handled here.
      if (sel.hasAttribute('data-lang-nav')) return;
      if (!sel.options.length) {
        LANGS.forEach(function (L) { var o = document.createElement('option'); o.value = L[0]; o.textContent = L[1]; sel.appendChild(o); });
      }
      sel.value = I18N.lang;
      sel.addEventListener('change', function () { I18N.set(sel.value); });
    });
  }

  window.I18N = I18N;
  document.addEventListener('DOMContentLoaded', function () { initSelects(); I18N.apply(); });
})();
