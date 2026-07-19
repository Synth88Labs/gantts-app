/* ============================================================
   guide-cards.js — icons and one-line descriptions for guide cards.

   WHY THIS EXISTS

   The English guides index renders each card as icon + title +
   description. The localized ones rendered title + "read the guide →"
   and nothing else: no icon, no description. Same failure as the
   template cards — the localized page used a thinner markup vocabulary
   than the English original, so it looked like a different, poorer
   product in every language but one.

   Icons are language-independent and shared. Descriptions are written
   per language rather than translated from the English blurbs, because
   at one line a literal rendering reads badly.
   ============================================================ */

const ICONS = {
  'what-is-a-gantt-chart': '📊',
  'how-to-make-a-gantt-chart': '🛠️',
  'critical-path-method': '🎯',
  'gantt-chart-dependencies': '🔗',
  'gantt-chart-examples': '🗂️',
  'gantt-chart-in-excel': '📈',
  'gantt-chart-in-google-sheets': '📃',
  'gantt-chart-in-powerpoint': '📽️',
  'best-free-gantt-chart-software': '⚖️',
  'gantt-baseline-variance': '◳',
  'gantt-chart-mistakes': '⚠️',
  'milestones-vs-tasks': '◆',
};

const DESC = {
  es: {
    'what-is-a-gantt-chart': 'Qué es, para qué sirve y cuándo conviene usarlo — con las cuatro piezas explicadas.',
    'how-to-make-a-gantt-chart': 'Siete pasos, en el orden que funciona: tareas, duraciones, dependencias e hitos.',
    'critical-path-method': 'Pasada adelante, pasada atrás y holgura, con un ejemplo resuelto de cuatro tareas.',
    'gantt-chart-dependencies': 'Los cuatro tipos de enlace, cuándo usar cada uno y cómo funcionan los desfases.',
    'gantt-chart-examples': 'Ocho ejemplos por sector, de una obra a una tesis, con las fases de cada uno.',
    'gantt-chart-in-excel': 'El método de barras apiladas paso a paso, y dónde está su límite.',
    'gantt-chart-in-google-sheets': 'Tres métodos, incluida la función Cronograma nativa, y cuál elegir.',
    'gantt-chart-in-powerpoint': 'Gráfico o formas: dos caminos según cuánto control visual necesites.',
    'best-free-gantt-chart-software': 'Nueve herramientas comparadas: qué es gratis de verdad y qué es freemium.',
    'gantt-baseline-variance': 'Cómo congelar un plan, leer la desviación y cuándo rehacer la línea base.',
    'gantt-chart-mistakes': 'Exceso de detalle, falta de dependencias, cero holgura — cada uno con su solución.',
    'milestones-vs-tasks': 'En qué se diferencian, para qué sirven los hitos y cuántos debe tener un proyecto.',
  },
  fr: {
    'what-is-a-gantt-chart': 'Ce que c’est, à quoi ça sert et quand l’utiliser — les quatre éléments expliqués.',
    'how-to-make-a-gantt-chart': 'Sept étapes, dans l’ordre qui marche : tâches, durées, dépendances et jalons.',
    'critical-path-method': 'Passe avant, passe arrière et marge, avec un exemple résolu à quatre tâches.',
    'gantt-chart-dependencies': 'Les quatre types de liens, quand les utiliser et comment fonctionnent les décalages.',
    'gantt-chart-examples': 'Huit exemples par secteur, du chantier à la thèse, avec les phases de chacun.',
    'gantt-chart-in-excel': 'La méthode des barres empilées pas à pas, et où se situe sa limite.',
    'gantt-chart-in-google-sheets': 'Trois méthodes, dont la fonction Chronologie native, et laquelle choisir.',
    'gantt-chart-in-powerpoint': 'Graphique ou formes : deux voies selon le contrôle visuel souhaité.',
    'best-free-gantt-chart-software': 'Neuf outils comparés : ce qui est vraiment gratuit et ce qui est freemium.',
    'gantt-baseline-variance': 'Figer un plan, lire l’écart, et savoir quand refaire la référence.',
    'gantt-chart-mistakes': 'Trop de détail, pas de dépendances, aucune marge — chacun avec son correctif.',
    'milestones-vs-tasks': 'Ce qui les distingue, à quoi servent les jalons et combien en prévoir.',
  },
  de: {
    'what-is-a-gantt-chart': 'Was es ist, wozu es dient und wann es sich lohnt — die vier Bausteine erklärt.',
    'how-to-make-a-gantt-chart': 'Sieben Schritte in der Reihenfolge, die funktioniert: Aufgaben, Dauern, Abhängigkeiten, Meilensteine.',
    'critical-path-method': 'Vorwärts- und Rückwärtsrechnung samt Puffer, mit einem durchgerechneten Beispiel.',
    'gantt-chart-dependencies': 'Die vier Verknüpfungsarten, wann welche passt und wie Zeitabstände wirken.',
    'gantt-chart-examples': 'Acht Beispiele nach Branche, von der Baustelle bis zur Dissertation.',
    'gantt-chart-in-excel': 'Die Methode mit gestapelten Balken Schritt für Schritt — und wo ihre Grenze liegt.',
    'gantt-chart-in-google-sheets': 'Drei Wege, darunter die native Zeitachsen-Funktion, und welcher wann passt.',
    'gantt-chart-in-powerpoint': 'Diagramm oder Formen: zwei Wege, je nach gewünschter Gestaltungsfreiheit.',
    'best-free-gantt-chart-software': 'Neun Werkzeuge im Vergleich: was wirklich kostenlos ist und was Freemium.',
    'gantt-baseline-variance': 'Einen Plan einfrieren, Abweichungen lesen und wissen, wann neu basiert wird.',
    'gantt-chart-mistakes': 'Zu viel Detail, fehlende Abhängigkeiten, kein Puffer — jeweils mit der Korrektur.',
    'milestones-vs-tasks': 'Worin sie sich unterscheiden, wozu Meilensteine dienen und wie viele sinnvoll sind.',
  },
  pt: {
    'what-is-a-gantt-chart': 'O que é, para que serve e quando usar — com as quatro peças explicadas.',
    'how-to-make-a-gantt-chart': 'Sete passos na ordem que funciona: tarefas, durações, dependências e marcos.',
    'critical-path-method': 'Passagem para frente, para trás e folga, com um exemplo resolvido de quatro tarefas.',
    'gantt-chart-dependencies': 'Os quatro tipos de ligação, quando usar cada um e como funcionam os atrasos.',
    'gantt-chart-examples': 'Oito exemplos por setor, da obra à tese, com as fases de cada um.',
    'gantt-chart-in-excel': 'O método de barras empilhadas passo a passo, e onde está o seu limite.',
    'gantt-chart-in-google-sheets': 'Três métodos, incluindo a função Linha do tempo nativa, e qual escolher.',
    'gantt-chart-in-powerpoint': 'Gráfico ou formas: dois caminhos conforme o controle visual necessário.',
    'best-free-gantt-chart-software': 'Nove ferramentas comparadas: o que é realmente grátis e o que é freemium.',
    'gantt-baseline-variance': 'Como congelar um plano, ler o desvio e quando refazer a linha de base.',
    'gantt-chart-mistakes': 'Excesso de detalhe, falta de dependências, folga zero — cada um com a correção.',
    'milestones-vs-tasks': 'No que diferem, para que servem os marcos e quantos um projeto deve ter.',
  },
  zh: {
    'what-is-a-gantt-chart': '是什么、有什么用、什么时候该用——四个核心要素逐一说明。',
    'how-to-make-a-gantt-chart': '七个步骤，按真正有效的顺序：任务、工期、依赖与里程碑。',
    'critical-path-method': '正推、逆推与浮动时间，附一个四任务的完整算例。',
    'gantt-chart-dependencies': '四种依赖类型分别在什么场景用，以及提前量与延迟量怎么起作用。',
    'gantt-chart-examples': '八个行业实例，从工程施工到学位论文，各自的阶段划分。',
    'gantt-chart-in-excel': '堆积条形图方法逐步拆解，以及它的局限在哪里。',
    'gantt-chart-in-google-sheets': '三种做法，包括原生「时间轴」功能，以及各自适用的场景。',
    'gantt-chart-in-powerpoint': '用图表还是用图形：根据需要的排版自由度来选。',
    'best-free-gantt-chart-software': '九款工具横向对比：哪些真免费，哪些其实是增值收费。',
    'gantt-baseline-variance': '如何冻结计划、读懂偏差，以及什么时候该重设基准。',
    'gantt-chart-mistakes': '过度细化、缺少依赖、毫无浮动时间——每条都给出对应的修正办法。',
    'milestones-vs-tasks': '两者的区别、里程碑的真正用途，以及一个项目该设几个。',
  },
};

module.exports = { ICONS, DESC };
