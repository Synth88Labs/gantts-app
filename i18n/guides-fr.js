/* ============================================================
   guides-fr.js — French guides.

   Written for French search behaviour, not translated from the German
   or Spanish. French queries run on "diagramme de Gantt" (the full
   phrase, rarely abbreviated), "faire un diagramme de Gantt" and
   "modèle de Gantt gratuit". "Rétroplanning" is a genuinely French
   concept with no clean English equivalent and high query volume — it
   appears where it belongs rather than being avoided.

   Terminology follows French project-management usage: antériorité and
   liens FD/DD/FF/DF, marge, chemin critique, jalon, lot de travail.

   Structure mirrors guides-es.js and guides-de.js exactly so the
   renderer needs no branch.
   ============================================================ */

const G = {

'what-is-a-gantt-chart': {
  h1: 'Qu’est-ce qu’un diagramme de Gantt ? Structure, usage et limites',
  metaTitle: 'Qu’est-ce qu’un diagramme de Gantt ?',
  metaDesc: 'Ce qu’est un diagramme de Gantt, ses quatre composants, à quoi il sert vraiment et où sont ses limites.',
  date: '2026-07-19',
  lead: 'Un <strong>diagramme de Gantt</strong> est un diagramme à barres qui place les tâches sur un axe temporel : une ligne par tâche, une barre par durée. Il répond à deux questions qu’une liste de tâches ne peut pas traiter — ce qui se déroule en parallèle, et ce qui se décale quand une tâche prend du retard.',
  figIntro: 'Les quatre composants de tout diagramme de Gantt :',
  sections: [
    ['Les quatre composants', '<p>Les <strong>tâches</strong> représentent le travail et ont une durée. Les <strong>jalons</strong> ont une durée nulle et marquent un instant : une validation, une livraison, une décision. Les <strong>liens d’antériorité</strong> relient les tâches et définissent ce qui attend quoi. Les <strong>tâches récapitulatives</strong> regroupent les tâches en phases et reprennent automatiquement leurs dates.</p>\n        <p>Distinguer proprement ces quatre éléments, c’est déjà l’essentiel d’un plan solide.</p>'],
    ['Pourquoi l’axe temporel change tout', '<p>Une liste dit <em>quoi</em> faire. Un diagramme de Gantt ajoute <em>quand</em> et <em>dans quel ordre</em>. Devient alors visible ce qu’une liste masque : que trois tâches tombent la même semaine et mobilisent la même personne, ou qu’un retard initial décale la fin de deux semaines.</p>'],
    ['Les liens d’antériorité : la vraie valeur', '<p>L’utilité d’un diagramme de Gantt tient à ses liens. Sans eux, c’est un tableau colorié : si une tâche glisse, il faut reprendre à la main toutes les suivantes — ce que personne ne fait en pratique.</p>\n        <p>Avec des liens, le plan recalcule seul. Vous déplacez une barre, tout ce qui en dépend suit. C’est la différence entre un plan vivant et un document périmé au bout de trois semaines.</p>'],
    ['Le chemin critique', '<p>Le chemin critique est la plus longue chaîne de tâches liées. Sa durée détermine celle du projet. Tout retard sur ce chemin décale la fin d’autant ; un retard ailleurs, souvent pas du tout.</p>\n        <p>C’est l’indicateur le plus utile d’un plan : il montre où l’attention produit un effet et où elle n’en produit aucun.</p>'],
    ['Quand l’utiliser', '<p>Pour tout projet avec une fin, un ordre et plusieurs intervenants : chantiers, lancements produit, événements, déménagements, thèses, déploiements logiciels. Partout où « qu’est-ce qui dépend de quoi » compte plus que « que fais-je ensuite ».</p>'],
    ['Où sont ses limites', '<p>Pour de l’activité récurrente, le Gantt est le mauvais outil — le Kanban lui convient mieux. Pour une équipe en sprints de deux semaines au périmètre volontairement ouvert, également.</p>\n        <p>Et il devient inutilisable s’il descend trop bas : un plan de 400 lignes n’est plus de la planification, c’est de la comptabilité. Règle simple : aucune tâche sous la journée, aucune au-dessus du mois.</p>'],
    ['D’où vient le nom', '<p>Du nom de Henry Gantt, qui a popularisé la représentation vers 1910. Une forme voisine avait été développée deux décennies plus tôt par le Polonais Karol Adamiecki, dont les travaux sont restés longtemps ignorés en Occident. La représentation a donc plus d’un siècle — rare pour une méthode qui ne serait qu’une mode.</p>'],
    ['Par où commencer', '<p>Listez d’abord les tâches, sans dates. Estimez ensuite les durées. Reliez après coup ce qui attend réellement — pas ce qui se suit par hasard dans le calendrier. Posez enfin cinq à dix jalons. Les dates découlent de ces trois étapes.</p>'],
  ],
  callout: 'Un diagramme de Gantt sans liens d’antériorité n’est qu’un tableau en couleurs. Tout son intérêt vient de ce que le plan recalcule lui-même quand quelque chose bouge — et dans un vrai projet, quelque chose bouge toujours.',
  faq: [
    ['Qu’est-ce qu’un diagramme de Gantt simplement ?', 'Un diagramme à barres sur un axe de temps : chaque ligne est une tâche, la longueur de la barre sa durée. Les liens entre barres montrent ce qui attend quoi.'],
    ['À quoi sert un diagramme de Gantt ?', 'À piloter des projets avec une échéance, plusieurs intervenants et des dépendances : construction, lancements, événements, études, déploiements.'],
    ['Quelle différence avec un planning projet ?', 'Le planning projet couvre le périmètre, le budget, les risques et les ressources. Le Gantt en est la représentation temporelle — une partie, pas le tout.'],
    ['Le diagramme de Gantt est-il dépassé ?', 'Pour un projet avec un ordre et une échéance, non. Pour de l’activité continue ou un périmètre ouvert, le Kanban ou un tableau de sprint conviennent mieux.'],
  ],
  related: [['how-to-make-a-gantt-chart', 'Faire un diagramme de Gantt'], ['critical-path-method', 'Le chemin critique'], ['gantt-chart-dependencies', 'Les quatre types de liens']],
},

'how-to-make-a-gantt-chart': {
  h1: 'Faire un diagramme de Gantt : la méthode en sept étapes',
  metaTitle: 'Faire un diagramme de Gantt — méthode',
  metaDesc: 'Faire un diagramme de Gantt en sept étapes : tâches, durées, liens d’antériorité, jalons, ressources, marges et validation.',
  date: '2026-07-19',
  lead: '<strong>Faire un diagramme de Gantt</strong> prend moins de temps qu’on ne le croit — à condition de procéder dans le bon ordre. L’erreur la plus fréquente est de commencer par les dates. Les dates sont un résultat, pas un point de départ.',
  figIntro: 'L’ordre dans lequel un plan se construit réellement :',
  sections: [
    ['1. Lister les tâches, sans dates', '<p>Écrivez d’abord ce qu’il y a à faire. Pas de dates, pas d’ordre, pas de responsables. Le travail, rien d’autre.</p>\n        <p>La bonne granularité se situe entre la journée et le mois. Plus court relève d’une liste de tâches ; plus long n’est pas une tâche mais une phase.</p>'],
    ['2. Regrouper en phases', '<p>Rassemblez les tâches en quatre à huit phases. C’est ce découpage qui rendra le plan lisible — pour vous et pour ceux à qui vous le montrerez.</p>'],
    ['3. Estimer les durées', '<p>Estimez en jours ouvrés, pas en jours calendaires, et estimez le travail réel : les temps d’attente sont des tâches à part entière, pas des durées gonflées.</p>\n        <p>Une approche éprouvée : estimer au plus favorable, au plus probable et au plus défavorable, puis pondérer. Qui ne donne qu’un chiffre donne presque toujours l’optimiste.</p>'],
    ['4. Relier les antériorités', '<p>Reliez ce qui attend réellement. Le test : si A finit plus tôt, B peut-il commencer plus tôt ? Si oui, le lien est réel. Sinon, vous n’avez fait que recopier l’ordre du calendrier.</p>\n        <p>Ne reliez pas tout à tout. Un plan où chaque tâche dépend de la précédente est une chaîne sans parallélisme — et généralement irréaliste.</p>'],
    ['5. Poser les jalons', '<p>Cinq à dix pour un projet de plusieurs mois. Un jalon marque une décision, une validation ou une condition remplie, pas la fin d’une tâche quelconque.</p>'],
    ['6. Affecter et vérifier la charge', '<p>C’est seulement ici qu’on affecte les personnes — puis qu’on vérifie si quelqu’un est censé travailler sur trois tâches la même semaine. Cette surcharge est la raison la plus fréquente pour laquelle un plan juste sur le papier ne tient pas.</p>'],
    ['7. Prévoir les marges et valider', '<p>Placez les marges là où se trouve l’incertitude — devant les jalons et en fin de chemin critique, pas sur chaque tâche. Les marges éparpillées se consomment sans que personne ne le remarque ; regroupées, elles restent visibles.</p>\n        <p>Passez enfin le plan en revue avec les intervenants. Un plan connu d’une seule personne n’est pas un plan, c’est un avis.</p>'],
    ['Avec quel outil ?', '<p>Un tableur suffit pour un petit projet, mais devient pénible au-delà d’une vingtaine de lignes, faute de recalcul automatique des liens. Un outil dédié s’en charge — <a href="/fr/app.html">gantts.app</a> fonctionne directement dans le navigateur, sans inscription, et enregistre en local sur votre appareil.</p>'],
    ['L’erreur la plus fréquente', '<p>Planifier trop finement. Un plan de 300 lignes n’est pas tenu à jour, et un plan périmé est pire que pas de plan, parce qu’on lui fait encore confiance.</p>'],
    ['Et ensuite ?', '<p>Un plan est un outil, pas un document. Mettez-le à jour chaque semaine, comparez-le à la référence initiale et ajustez ce qui a changé.</p>'],
  ],
  callout: 'Ne commencez jamais par les dates. Les tâches, les durées et les liens produisent les dates d’eux-mêmes — et un plan construit ainsi se défend. Un plan calculé à rebours depuis une date souhaitée ne résiste pas à la première question.',
  faq: [
    ['Comment faire un diagramme de Gantt ?', 'Lister les tâches, les regrouper en phases, estimer les durées, relier les antériorités, poser les jalons, affecter les ressources, prévoir les marges. Les dates en découlent.'],
    ['Comment faire un diagramme de Gantt gratuitement ?', 'Dans le navigateur, sans inscription ni installation, avec gantts.app par exemple. Sinon dans un tableur, ce qui devient vite lourd au-delà de vingt tâches.'],
    ['Combien de tâches dans un diagramme de Gantt ?', 'Le moins possible, le nécessaire seulement. De 20 à 60 lignes reste lisible ; au-delà de 150, plus personne ne le tient à jour.'],
    ['Quelle durée pour une tâche ?', 'Entre un jour et un mois. En dessous, cela relève d’une liste de tâches ; au-dessus, c’est une phase à découper.'],
  ],
  related: [['what-is-a-gantt-chart', 'Qu’est-ce qu’un diagramme de Gantt ?'], ['gantt-chart-dependencies', 'Les quatre types de liens'], ['gantt-chart-mistakes', 'Les erreurs fréquentes']],
},

'critical-path-method': {
  h1: 'Chemin critique : méthode, calcul et exemple résolu',
  metaTitle: 'Chemin critique : calcul et exemple',
  metaDesc: 'Le chemin critique expliqué : passe avant, passe arrière, marge totale et un exemple résolu à quatre tâches.',
  date: '2026-07-19',
  lead: 'Le <strong>chemin critique</strong> est la plus longue chaîne de tâches liées d’un projet. Sa longueur donne la durée minimale du projet — et chaque jour de retard sur ce chemin est un jour de retard sur la fin.',
  figIntro: 'Passe avant, passe arrière, lecture des marges :',
  sections: [
    ['L’idée de départ', '<p>Toutes les tâches ne pèsent pas également sur l’échéance. Certaines disposent de jeu : elles peuvent glisser sans décaler la fin. D’autres n’en ont aucun — elles forment le chemin critique.</p>\n        <p>La méthode s’appelle Critical Path Method, CPM, et date de la fin des années 1950. Elle répond à deux questions : combien de temps le projet dure-t-il au minimum, et quelles tâches ne doivent en aucun cas glisser ?</p>'],
    ['Passe avant : les dates au plus tôt', '<p>Partez du début et avancez. Pour chaque tâche : la date de début au plus tôt est la plus tardive des fins au plus tôt de ses antécédents ; la fin au plus tôt vaut le début au plus tôt plus la durée.</p>\n        <p>À l’issue de la passe avant, vous obtenez la durée minimale du projet.</p>'],
    ['Passe arrière : les dates au plus tard', '<p>Repartez de la fin. La fin au plus tard est la plus précoce des débuts au plus tard des successeurs ; le début au plus tard vaut la fin au plus tard moins la durée.</p>'],
    ['Marge et chemin critique', '<p>La marge totale d’une tâche vaut début au plus tard moins début au plus tôt. Les tâches à marge nulle forment le chemin critique. Il en existe toujours au moins un, et souvent plusieurs en parallèle dans les plans très liés.</p>'],
    ['Un exemple à quatre tâches', '<p>A dure 3 jours, B dure 5 et suit A, C dure 2 et suit également A, D dure 4 et suit B et C.</p>\n        <p><strong>Passe avant :</strong> A va du jour 0 au jour 3. B de 3 à 8, C de 3 à 5. D attend les deux, commence donc à 8 et finit à 12. Durée du projet : 12 jours.</p>\n        <p><strong>Passe arrière :</strong> D doit commencer à 8. B doit donc être finie à 8 — début au plus tard 3, marge 0. C doit aussi être finie à 8, mais ne dure que 2 jours : début au plus tard 6, début au plus tôt réel 3, <em>marge de 3 jours</em>.</p>\n        <p>Le chemin critique est A → B → D. C peut glisser de trois jours sans retarder le projet.</p>'],
    ['Ce que cela change en pratique', '<p>Cela indique où l’effort porte. Ajouter des moyens sur C n’avance pas l’échéance. Gagner un jour sur B en gagne un sur la fin du projet.</p>\n        <p>Et cela signale un piège : si C glisse de quatre jours, C devient critique à son tour. Le chemin critique n’est pas une propriété figée du plan, c’est un instantané — il se déplace dès que quelque chose bouge.</p>'],
  ],
  callout: 'Le chemin critique change pendant le projet. Une tâche disposant de trois jours de marge qui en perd quatre devient critique. C’est pourquoi on ne le calcule pas une fois au lancement, mais à chaque mise à jour.',
  faq: [
    ['Qu’est-ce que le chemin critique ?', 'La plus longue chaîne de tâches liées. Sa durée correspond à la durée minimale du projet, et ses tâches n’ont aucune marge.'],
    ['Comment calculer le chemin critique ?', 'Passe avant pour les dates au plus tôt, passe arrière pour les dates au plus tard. Les tâches où les deux coïncident — marge nulle — forment le chemin critique.'],
    ['Qu’est-ce que la marge totale ?', 'Le temps dont une tâche peut glisser sans décaler la fin du projet : début au plus tard moins début au plus tôt.'],
    ['Peut-il y avoir plusieurs chemins critiques ?', 'Oui. Dans un plan très lié, plusieurs chemins parallèles peuvent avoir la même longueur et sont alors tous critiques, ce qui augmente nettement le risque.'],
  ],
  related: [['gantt-chart-dependencies', 'Les quatre types de liens'], ['what-is-a-gantt-chart', 'Qu’est-ce qu’un diagramme de Gantt ?'], ['gantt-baseline-variance', 'Référence et écarts']],
},

'gantt-chart-dependencies': {
  h1: 'Les liens d’antériorité : les quatre types expliqués',
  metaTitle: 'Liens d’antériorité dans un Gantt',
  metaDesc: 'Fin-Début, Début-Début, Fin-Fin et Début-Fin expliqués : quand utiliser chaque lien, et comment fonctionnent décalage et avance.',
  date: '2026-07-19',
  lead: 'Un <strong>lien d’antériorité</strong> définit ce qui attend quoi. Il en existe quatre types, mais la plupart des plans n’en utilisent réellement qu’un — et les autres font plus de dégâts qu’ils ne rendent service.',
  figIntro: 'Les quatre types de liens comparés :',
  sections: [
    ['Fin-Début (FD)', '<p>Le cas standard : B commence quand A est terminée. « Peindre » commence quand « enduire » est fini. Environ 90 % des liens d’un plan réel sont de ce type, et c’est une bonne chose — c’est le seul que tout le monde interprète correctement du premier coup.</p>'],
    ['Début-Début (DD)', '<p>B commence quand A commence. Utile pour des travaux qui démarrent ensemble : la maîtrise d’œuvre avec le gros œuvre, l’assurance qualité avec le développement. Souvent combiné à un décalage — la QA démarre trois jours après le développement.</p>'],
    ['Fin-Fin (FF)', '<p>B se termine quand A se termine. Typique des activités d’accompagnement : la documentation est prête quand le développement est prêt. Ce lien ne fixe pas de date de début, seulement une fin commune.</p>'],
    ['Début-Fin (DF)', '<p>B se termine quand A commence. Le cas le plus rare, surtout pour des relèves : l’ancienne équipe termine quand la nouvelle arrive ; l’ancien système s’éteint quand le nouveau démarre. Si vous l’employez souvent, le plan est généralement pensé à l’envers.</p>'],
    ['Décalage et avance', '<p>Chaque lien peut porter un décalage. Un retard repousse le successeur — le béton doit sécher sept jours avant la suite. Une avance le fait démarrer plus tôt — la seconde tranche commence quand la première est à 70 %.</p>\n        <p>Une remarque sur l’attente : séchage, prise, délais administratifs gagnent à figurer comme tâches visibles plutôt que cachés dans un décalage. Ce qui est dans une barre se voit ; ce qui est dans une boîte de dialogue ne se retrouve jamais.</p>'],
  ],
  callout: 'Ne reliez que ce qui attend vraiment. Le test : si A se termine plus tôt, B peut-il démarrer plus tôt ? Si la réponse est non, ce n’est pas une antériorité, c’est simplement l’ordre dans lequel vous l’avez écrit.',
  faq: [
    ['Quels sont les types de liens dans un Gantt ?', 'Quatre : Fin-Début, Début-Début, Fin-Fin et Début-Fin. Le Fin-Début couvre la grande majorité des cas.'],
    ['Quelle différence entre avance et décalage ?', 'Un décalage repousse le successeur (temps de séchage), une avance le fait démarrer avant la fin complète du prédécesseur.'],
    ['Faut-il relier toutes les tâches ?', 'Non, seulement les antériorités réelles. Un plan où tout s’enchaîne perd tout parallélisme et réagit excessivement au moindre décalage.'],
    ['Pourquoi ma tâche ne se décale pas ?', 'Le plus souvent le lien manque, ou une contrainte de date fixe prend le pas sur le calcul.'],
  ],
  related: [['critical-path-method', 'Le chemin critique'], ['what-is-a-gantt-chart', 'Qu’est-ce qu’un diagramme de Gantt ?'], ['gantt-chart-mistakes', 'Les erreurs fréquentes']],
},

'gantt-chart-examples': {
  h1: 'Exemples de diagrammes de Gantt dans huit secteurs',
  metaTitle: 'Exemples de diagrammes de Gantt',
  metaDesc: 'Huit exemples de diagrammes de Gantt : chantier, logiciel, marketing, événement, déménagement, thèse, lancement, intégration.',
  date: '2026-07-19',
  lead: 'Un <strong>diagramme de Gantt</strong> change d’aspect selon le secteur — non par sa forme, mais par son découpage. Huit exemples, avec les phases réellement employées et la tâche qui se retrouve le plus souvent sur le chemin critique.',
  figIntro: 'Une même représentation, huit découpages très différents :',
  sections: [
    ['Chantier de construction', '<p>Phases : études et autorisations, terrassement, gros œuvre, clos et couvert, second œuvre, lots techniques, réception.</p>\n        <p>Le chemin critique passe presque toujours par le permis, pas par la construction. Les tâches sensibles à la météo demandent des marges, et le second œuvre ne peut commencer qu’une fois le bâtiment hors d’eau.</p>'],
    ['Développement logiciel', '<p>Phases : exigences, architecture, développement itératif, intégration, recette, migration, mise en production.</p>\n        <p>Le piège est la recette : planifiée comme une courte barre finale, elle prend le double. Tests et corrections se représentent en boucle, pas en ligne droite.</p>'],
    ['Campagne marketing', '<p>Phases : stratégie, création, production, validations, diffusion, bilan.</p>\n        <p>Le goulot, ce sont les validations. Entre une création finie et sa publication, deux semaines s’écoulent régulièrement dans les grandes organisations — que personne ne planifie.</p>'],
    ['Événement', '<p>Phases : concept, lieu, prestataires, programme, inscriptions, montage, déroulé, démontage.</p>\n        <p>La date est fixe : on planifie en rétroplanning. Le lieu est la première contrainte et la plus structurante.</p>'],
    ['Déménagement de bureaux', '<p>Phases : recherche de locaux, bail, aménagement, infrastructure informatique, déménagement le week-end, reprises.</p>\n        <p>C’est l’informatique qui fixe la date, pas le mobilier : les liaisons et raccordements se commandent des mois à l’avance.</p>'],
    ['Thèse', '<p>Phases : projet de recherche, littérature, méthode, collecte, analyse, rédaction, corrections, soutenance.</p>\n        <p>Le projet s’étale sur des années : il faut des jalons toutes les six à huit semaines, sans quoi le retard passe inaperçu.</p>'],
    ['Lancement produit', '<p>Phases : étude de marché, développement, conditionnement et homologation, préparation commerciale, campagne, mise sur le marché, bilan.</p>\n        <p>Homologations et certifications se retrouvent souvent sur le chemin critique et sont presque toujours sous-estimées.</p>'],
    ['Intégration d’un nouvel arrivant', '<p>Phases : préparation avant le premier jour, première semaine, premier mois, 90 premiers jours.</p>\n        <p>Plan court mais à fort effet : matériel et accès doivent être prêts avant le premier jour, pas pendant.</p>'],
    ['Ce qu’ils ont en commun', '<p>Quatre à huit phases, 20 à 60 tâches, cinq à dix jalons. Le secteur change le contenu, pas la structure.</p>'],
    ['Par où commencer', '<p>Partez de l’exemple le plus proche plutôt que d’une page blanche. Nos <a href="/fr/templates.html">modèles</a> couvrent les huit cas et s’ouvrent directement dans le navigateur.</p>'],
  ],
  callout: 'Reprenez le découpage en phases, pas les durées. Les phases d’un secteur sont stables d’un projet à l’autre ; les durées ne le sont jamais. Un calendrier repris d’un autre projet est la première cause d’un plan faux dès le départ.',
  faq: [
    ['À quoi ressemble un bon diagramme de Gantt ?', 'Quatre à huit phases, 20 à 60 tâches, cinq à dix jalons et de vraies antériorités. Il tient sur une page et s’explique en une minute.'],
    ['À partir de combien de tâches est-ce trop ?', 'Au-delà d’environ 150, plus personne ne le met à jour. Mieux vaut alors le découper en sous-plans.'],
    ['Peut-on reprendre le Gantt d’un autre projet ?', 'Le découpage oui, les durées non. Les phases se transposent, les estimations ne se transposent pas.'],
  ],
  related: [['what-is-a-gantt-chart', 'Qu’est-ce qu’un diagramme de Gantt ?'], ['how-to-make-a-gantt-chart', 'Faire un diagramme de Gantt'], ['gantt-chart-mistakes', 'Les erreurs fréquentes']],
},

'gantt-chart-in-excel': {
  h1: 'Faire un diagramme de Gantt dans Excel : méthode et limites',
  metaTitle: 'Diagramme de Gantt dans Excel',
  metaDesc: 'Faire un diagramme de Gantt dans Excel avec des barres empilées : méthode pas à pas, mise en forme et limites de l’approche.',
  date: '2026-07-19',
  lead: 'Excel n’a pas de type « diagramme de Gantt ». On le construit par une astuce : un <strong>histogramme empilé</strong> dont la première série est rendue invisible. Cela fonctionne et prend dix minutes — mais bute sur une limite nette.',
  figIntro: 'L’astuce en une image : décalage invisible plus durée visible.',
  sections: [
    ['Préparer les données', '<p>Trois colonnes suffisent : tâche, date de début, durée en jours. Ajoutez une colonne intermédiaire calculant l’écart au démarrage du projet — date de début moins date de début la plus précoce.</p>'],
    ['Insérer l’histogramme empilé', '<p>Sélectionnez tâche, écart et durée. Insertion → Graphique → Barres → Barres empilées. Vous obtenez deux séries par ligne : l’écart et la durée.</p>'],
    ['Rendre la première série invisible', '<p>Cliquez sur la série d’écart, puis Remplissage → Aucun remplissage et Bordure → Aucun trait. Ce qui reste ressemble à une barre de Gantt commençant au bon endroit.</p>'],
    ['Inverser l’ordre', '<p>Excel place la première ligne en bas. Format de l’axe → Abscisses en ordre inverse. La première tâche passe ainsi en haut, comme on l’attend.</p>'],
    ['Corriger l’axe des dates', '<p>L’axe horizontal affiche d’abord des nombres. Fixez minimum et maximum sur les numéros de série des dates de début et de fin, puis formatez l’axe en date.</p>'],
    ['Finitions', '<p>Réduisez la largeur d’intervalle à environ 20 %, allégez le quadrillage, différenciez les phases par la couleur. Les jalons s’ajoutent en série supplémentaire avec un marqueur en losange.</p>'],
    ['Où s’arrête la méthode', '<p>Excel ignore les antériorités. Si une tâche glisse, il faut reprendre à la main chaque date de début suivante — ce qu’on cesse de faire dès la deuxième modification.</p>\n        <p>Absents également : chemin critique, plan de charge, avancement. Jusqu’à une vingtaine de tâches, Excel est un choix raisonnable. Au-delà, l’entretien manuel coûte plus que l’outil ne fait gagner — <a href="/fr/app.html">gantts.app</a> recalcule les décalages seul et fonctionne aussi sans installation.</p>'],
  ],
  callout: 'La vraie différence n’est pas l’apparence, c’est le calcul. Un Gantt Excel a l’air juste mais ne se met pas à jour. Dès que les dates changent — et elles changent toujours — le plan redevient un dessin.',
  faq: [
    ['Excel a-t-il un type de graphique Gantt ?', 'Non. On le construit avec un histogramme empilé dont la première série est mise en forme invisible.'],
    ['Excel gère-t-il les antériorités ?', 'Pas automatiquement. Chaque décalage doit être reporté à la main sur les successeurs.'],
    ['Jusqu’à quelle taille Excel convient-il ?', 'Jusqu’à une vingtaine de tâches. Au-delà, l’effort d’entretien dépasse largement le bénéfice.'],
    ['Existe-t-il un modèle de Gantt pour Excel ?', 'Oui, nos modèles se téléchargent au format XLSX et contiennent déjà les colonnes intermédiaires.'],
  ],
  related: [['gantt-chart-in-google-sheets', 'Gantt dans Google Sheets'], ['gantt-chart-in-powerpoint', 'Gantt dans PowerPoint'], ['how-to-make-a-gantt-chart', 'Faire un diagramme de Gantt']],
},

'gantt-chart-in-google-sheets': {
  h1: 'Diagramme de Gantt dans Google Sheets : trois méthodes',
  metaTitle: 'Diagramme de Gantt dans Google Sheets',
  metaDesc: 'Trois méthodes pour un diagramme de Gantt dans Google Sheets : barres empilées, vue Chronologie native et mise en forme conditionnelle.',
  date: '2026-07-19',
  lead: 'Google Sheets offre trois chemins vers un <strong>diagramme de Gantt</strong>, et ils diffèrent plus qu’on ne s’y attend : une astuce graphique, une vue Chronologie intégrée, et une variante sans aucun graphique.',
  figIntro: 'Trois méthodes, selon ce dont vous avez besoin :',
  sections: [
    ['Méthode 1 : histogramme empilé', '<p>Même principe que dans Excel. Des colonnes pour la tâche, l’écart au démarrage et la durée ; puis Insertion → Graphique → Histogramme empilé, en rendant la série d’écart transparente.</p>\n        <p>Avantage : c’est un vrai graphique, exportable. Inconvénient : aucune antériorité, comme dans tout tableur.</p>'],
    ['Méthode 2 : la vue Chronologie native', '<p>Google Sheets propose désormais Insertion → Chronologie. La vue attend des colonnes de date de début, date de fin et libellé, et produit une frise interactive à cartes.</p>\n        <p>C’est le chemin le plus simple pour une vue d’ensemble et il ne demande aucune astuce. En revanche, ce n’est pas fait pour un planning avec antériorités et chemin critique.</p>'],
    ['Méthode 3 : mise en forme conditionnelle', '<p>Sans graphique : créez une colonne par jour ou par semaine et colorez les cellules par mise en forme conditionnelle lorsque la date tombe entre le début et la fin. Le résultat est une grille qui se lit comme un Gantt et vit dans la feuille.</p>\n        <p>Pratique sur des périodes courtes, illisible au-delà d’un trimestre.</p>'],
    ['Quelle méthode pour quel usage', '<p>La vue Chronologie pour un aperçu rapide, les barres empilées pour un graphique à diffuser, la mise en forme conditionnelle pour un plan qui reste dans le tableur.</p>'],
    ['La limite commune', '<p>Aucune des trois ne gère les antériorités. L’atout de Sheets est l’édition simultanée : si vous en avez besoin et que le plan est petit, c’est un bon choix. Dès que le plan doit calculer lui-même, il faut un outil de planification.</p>'],
  ],
  callout: 'La vue Chronologie n’est pas un diagramme de Gantt, même si elle y ressemble. Elle représente des périodes mais ignore les liens et le chemin critique. Pour une vue d’ensemble cela suffit ; pour un planning qui répercute les décalages, non.',
  faq: [
    ['Google Sheets propose-t-il une fonction Gantt ?', 'Il existe une vue Chronologie intégrée (Insertion → Chronologie). Elle affiche des périodes mais ne gère pas les antériorités.'],
    ['Comment créer un diagramme de Gantt dans Google Sheets ?', 'Le plus souple reste l’histogramme empilé dont la première série est rendue transparente.'],
    ['Peut-on travailler à plusieurs sur le plan ?', 'Oui, c’est le principal avantage sur Excel : plusieurs personnes modifient le même fichier en temps réel.'],
  ],
  related: [['gantt-chart-in-excel', 'Gantt dans Excel'], ['gantt-chart-in-powerpoint', 'Gantt dans PowerPoint'], ['best-free-gantt-chart-software', 'Les outils gratuits comparés']],
},

'gantt-chart-in-powerpoint': {
  h1: 'Diagramme de Gantt dans PowerPoint : graphique ou formes',
  metaTitle: 'Diagramme de Gantt dans PowerPoint',
  metaDesc: 'Deux façons de faire un diagramme de Gantt dans PowerPoint : histogramme empilé ou formes, avec les avantages de chacune.',
  date: '2026-07-19',
  lead: 'Dans PowerPoint, un <strong>diagramme de Gantt</strong> se construit de deux manières : en graphique avec sa feuille de données, ou à la main avec des rectangles. Le bon choix dépend uniquement de la stabilité des données.',
  figIntro: 'Deux chemins, deux façons de travailler :',
  sections: [
    ['Méthode 1 : histogramme empilé', '<p>Insertion → Graphique → Barres → Barres empilées. PowerPoint ouvre une petite feuille Excel. Saisissez-y tâche, écart et durée, puis rendez la série d’écart transparente — la technique est celle d’Excel.</p>\n        <p>Avantage : les barres restent liées aux données. Une durée change, la barre suit. Inconvénient : la liberté graphique est limitée.</p>'],
    ['Méthode 2 : construire avec des formes', '<p>Tracez un axe temporel et posez un rectangle arrondi par tâche. Servez-vous des repères d’alignement et d’une grille pour que les barres correspondent exactement à l’axe.</p>\n        <p>Avantage : contrôle total sur la mise en forme, les libellés et l’animation. Inconvénient : chaque modification est manuelle, et les longueurs ne sont justes que si vous les tracez juste.</p>'],
    ['Quand choisir quoi', '<p>Les formes quand le plan est figé et que la diapositive sert à présenter. Le graphique quand les chiffres bougent encore. Pour une diapositive de comité à cinq phases, les formes sont presque toujours plus rapides.</p>'],
    ['Concevoir pour la projection', '<p>Une diapositive supporte six à dix barres, pas quarante. Réduisez au niveau des phases et ne mettez en avant que trois jalons au maximum. Ce qui doit être lisible à dix mètres ne supporte aucun détail de planification.</p>'],
    /* Links to the French templates HUB, not to /fr/templates/powerpoint.html.
       The French template detail pages do not exist yet, and check-links
       caught the dead link before it shipped. The hub is correct whatever
       the translation coverage, so this does not need revisiting once the
       French templates land. */
    ['Le chemin pratique', '<p>Le plus rapide reste de tenir le plan là où il vit et de l’exporter pour la diapositive. Nos <a href="/fr/templates.html">modèles</a> incluent une diapositive déjà mise en forme, où il ne reste qu’à saisir vos tâches.</p>'],
    ['L’erreur la plus fréquente', '<p>Faire tenir le planning complet sur une diapositive. Présentation et planification n’ont pas le même niveau de détail — la diapositive raconte l’histoire, le plan porte le travail.</p>'],
  ],
  callout: 'Une diapositive n’est pas un planning. Montrez les phases et les trois jalons qui comptent. Comprimer quarante lignes sur une diapositive n’obtient qu’une chose : que personne ne la regarde.',
  faq: [
    ['Comment faire un diagramme de Gantt dans PowerPoint ?', 'Soit en histogramme empilé avec une première série transparente, soit à la main avec des rectangles sur un axe temporel tracé.'],
    ['Quelle méthode est la meilleure ?', 'Les formes pour un plan figé et une liberté graphique totale, le graphique pour des données encore mouvantes.'],
    ['Combien de tâches sur une diapositive ?', 'Six à dix. Au-delà, ce n’est plus lisible depuis la salle.'],
  ],
  related: [['gantt-chart-in-excel', 'Gantt dans Excel'], ['gantt-chart-examples', 'Exemples par secteur'], ['how-to-make-a-gantt-chart', 'Faire un diagramme de Gantt']],
},

'best-free-gantt-chart-software': {
  h1: 'Logiciels de Gantt gratuits : ce qui l’est vraiment',
  metaTitle: 'Logiciels de Gantt gratuits comparés',
  metaDesc: 'Comparatif des logiciels de Gantt gratuits : ce qui est réellement gratuit, ce qui est freemium, et quoi vérifier avant de choisir.',
  date: '2026-07-19',
  lead: 'En logiciel de gestion de projet, « <strong>gratuit</strong> » recouvre trois réalités : gratuit durablement, gratuit jusqu’à une limite, ou gratuit le temps d’un essai. La différence n’apparaît généralement qu’une fois le projet lancé.',
  figIntro: 'Trois sens de « gratuit » qu’il vaut mieux connaître avant :',
  sections: [
    ['Les trois formes de gratuité', '<p><strong>Réellement gratuit</strong> : fonctionnalités complètes, pas de limite d’utilisateurs, pas d’échéance. Rare, et surtout présent chez les outils sans coûts serveur — ceux qui calculent dans le navigateur plutôt que dans le cloud.</p>\n        <p><strong>Freemium</strong> : gratuit jusqu’à une limite. Typiquement trois à cinq utilisateurs, deux projets ou un plafond de tâches. Au franchissement, l’offre devient payante — et les données sont déjà là.</p>\n        <p><strong>Essai</strong> : tout est ouvert pendant 14 ou 30 jours. Ce n’est pas un logiciel gratuit, c’est une démonstration.</p>'],
    ['Ce qu’il faut vérifier', '<p>Quatre questions règlent presque tout. <em>L’outil calcule-t-il les antériorités ?</em> Sans cela, c’est un logiciel de dessin. <em>Affiche-t-il le chemin critique ?</em> <em>Les données ressortent-elles</em> en CSV, XLSX ou format projet ? <em>Où sont-elles stockées ?</em> Pour des données de projet nominatives, ce n’est pas une question annexe.</p>'],
    ['La question du compte', '<p>La plupart des outils gratuits demandent un compte avant d’afficher la première barre. Ce n’est presque jamais une nécessité technique : c’est le prix. Les outils qui s’exécutent entièrement dans le navigateur et enregistrent en local n’ont besoin ni de compte ni de serveur, puisque rien n’est transmis.</p>\n        <p><a href="/fr/app.html">gantts.app</a> fonctionne ainsi : pas d’inscription, pas de transfert, le plan reste sur votre appareil. C’est aussi la réponse à la question de la confidentialité — ce qui ne quitte pas l’appareil n’a pas à être encadré contractuellement.</p>'],
    ['Quand un outil payant se justifie', '<p>Quand plusieurs personnes travaillent simultanément sur le même plan, quand les ressources se planifient sur un portefeuille de projets, ou quand des obligations de reporting existent vis-à-vis d’un donneur d’ordre. Pour un plan isolé de trente tâches, un logiciel payant est presque toujours surdimensionné.</p>'],
  ],
  callout: 'Vérifiez l’export avant de commencer. Un outil dont les données ne ressortent pas dans un format ouvert est coûteux quel que soit son prix : le changement se paie alors en reconstruction complète du plan.',
  faq: [
    ['Quel logiciel de Gantt est vraiment gratuit ?', 'Les outils sans coûts serveur — ceux qui calculent dans le navigateur et enregistrent en local — peuvent l’être durablement. Les services cloud sont presque toujours freemium.'],
    ['Faut-il un compte pour un logiciel de Gantt gratuit ?', 'La plupart l’exigent, mais ce n’est techniquement nécessaire que pour les services hébergés. Les outils entièrement côté client s’en passent.'],
    ['Que vérifier avant de choisir ?', 'Les antériorités, le chemin critique, les formats d’export et le lieu de stockage des données. Le reste relève du confort.'],
    ['Le gratuit convient-il en entreprise ?', 'Pour des plans isolés, oui. Pour le travail simultané, la planification de ressources transverse et le reporting, généralement non.'],
  ],
  related: [['what-is-a-gantt-chart', 'Qu’est-ce qu’un diagramme de Gantt ?'], ['gantt-chart-in-excel', 'Gantt dans Excel'], ['how-to-make-a-gantt-chart', 'Faire un diagramme de Gantt']],
},

'gantt-baseline-variance': {
  h1: 'Référence et écarts : le plan face au réel',
  metaTitle: 'Référence et écarts dans un Gantt',
  metaDesc: 'Ce qu’est une référence de planning, comment lire les écarts, quand refaire la référence et quels indicateurs servent vraiment.',
  date: '2026-07-19',
  lead: 'La <strong>référence</strong> est l’état figé de votre planning au moment de sa validation. Sans elle, impossible de dire plus tard si un projet est en retard — seulement quand il devrait finir.',
  figIntro: 'Deux barres par tâche : le plan d’alors, l’état d’aujourd’hui.',
  sections: [
    ['Ce qu’est une référence', '<p>Une copie des dates au moment de la validation. Le planning courant continue d’évoluer, la référence reste fixe. La différence entre les deux est l’écart.</p>\n        <p>Sans référence, il n’y a pas de retard — il n’y a qu’une nouvelle date de fin à chaque fois, sans que personne ne puisse expliquer comment on y est arrivé.</p>'],
    ['Quand la figer', '<p>Après la validation et avant le démarrage des travaux. Une référence posée alors que le projet tourne depuis deux semaines ne mesure plus rien.</p>'],
    ['Lire les écarts', '<p>L’écart de délai vaut fin réelle moins fin planifiée, en jours. Positif signifie plus tard que prévu. L’important n’est pas l’écart d’une tâche isolée, mais s’il se situe sur le chemin critique — là, il se répercute intégralement sur la fin ; ailleurs, parfois pas du tout.</p>'],
    ['Mesurer l’avancement correctement', '<p>Les pourcentages d’avancement sont notoirement peu fiables ; « 90 % fait » est la réponse la plus fréquente de tous les projets, et elle le reste des semaines. Plus solide : demander la durée restante. Combien de jours vous faut-il encore ? Ce chiffre-là se vérifie.</p>'],
    ['Quand refaire la référence', '<p>Uniquement lors d’une modification validée du périmètre, du budget ou de l’échéance — pas parce que l’ancien plan est désagréable à regarder. Qui refait la référence à chaque retard obtient un projet sans écarts et sans aucune information.</p>\n        <p>Conservez les références successives. Leur suite montre combien de fois et pour quelles raisons le plan a été refait — souvent l’information la plus instructive du projet.</p>'],
    ['Ce qu’on en apprend', '<p>Après la clôture, la comparaison entre référence et réel est la meilleure base disponible pour la prochaine estimation. Si vos tâches durent systématiquement 30 % de plus que prévu, ce n’est pas une série de malchances, c’est un biais d’estimation dont vous connaissez désormais le facteur.</p>'],
  ],
  callout: 'Ne refaites pas la référence parce que le plan a mauvaise mine. Une référence réalignée à chaque retard affiche durablement zéro écart et n’explique plus rien : ce n’est plus un instrument de mesure, c’est un maquillage.',
  faq: [
    ['Qu’est-ce qu’une référence de planning ?', 'Le planning figé au moment de la validation. Il sert de repère pour tous les écarts constatés ensuite.'],
    ['Quand poser la référence ?', 'Après validation et avant le début des travaux. Posée plus tard, elle perd sa valeur.'],
    ['Quand refaire la référence ?', 'Seulement lors d’une modification validée du périmètre, du budget ou de l’échéance — pas à chaque retard.'],
    ['Qu’est-ce que l’écart de délai ?', 'La différence en jours entre date réelle et date planifiée. Sur le chemin critique, elle se répercute intégralement sur la fin du projet.'],
  ],
  related: [['critical-path-method', 'Le chemin critique'], ['gantt-chart-mistakes', 'Les erreurs fréquentes'], ['milestones-vs-tasks', 'Jalons et tâches']],
},

'gantt-chart-mistakes': {
  h1: 'Neuf erreurs de planification — et comment les corriger',
  metaTitle: 'Les erreurs fréquentes en planification',
  metaDesc: 'Neuf erreurs classiques dans les diagrammes de Gantt : trop de détail, liens absents, aucune marge, ressources ignorées — avec les corrections.',
  date: '2026-07-19',
  lead: 'La plupart des diagrammes de Gantt n’échouent pas à cause de l’outil, mais à cause de neuf erreurs toujours identiques. Chacune se corrige en quelques minutes une fois repérée.',
  figIntro: 'Neuf erreurs, dans l’ordre où elles se remarquent :',
  sections: [
    ['1. Trop de détail', '<p>Un plan de 300 lignes n’est pas tenu à jour, et un plan périmé est plus dangereux que pas de plan, parce qu’on y croit encore. <strong>Correction :</strong> aucune tâche sous la journée, aucune au-dessus du mois.</p>'],
    ['2. Aucune antériorité', '<p>Sans liens, rien ne se recalcule quand une tâche glisse. <strong>Correction :</strong> reliez au minimum les tâches du chemin critique, même si vous ne saisissez pas toutes les autres.</p>'],
    ['3. Tout relié à tout', '<p>L’excès inverse est aussi nuisible : une chaîne continue supprime tout parallélisme et réagit excessivement au moindre aléa. <strong>Correction :</strong> ne reliez que ce qui attend réellement.</p>'],
    ['4. Aucune marge', '<p>Un plan sans marge suppose que rien ne dérape. <strong>Correction :</strong> regroupez les marges devant les jalons et en fin de chemin critique, plutôt que de les répartir sur chaque tâche — dispersées, elles se consomment sans que personne ne le voie.</p>'],
    ['5. Ressources ignorées', '<p>Le plan est juste sur le papier, mais une personne doit traiter trois tâches la même semaine. <strong>Correction :</strong> vérifiez la charge une fois les dates posées.</p>'],
    ['6. Des jalons qui durent', '<p>Un jalon a une durée nulle. « Phase de tests » n’est pas un jalon, « tests validés » en est un. <strong>Correction :</strong> formulez les jalons comme des résultats, pas comme des activités.</p>'],
    ['7. Planifier à rebours depuis la date voulue', '<p>Quand la date de fin est posée d’abord et que les durées sont ajustées pour tomber juste, le plan ne convainc personne. <strong>Correction :</strong> calculez vers l’avant, rendez l’écart visible, puis discutez périmètre ou moyens.</p>'],
    ['8. Jamais mis à jour', '<p>Un plan est un outil, pas un document. <strong>Correction :</strong> actualisez chaque semaine, comparez à la référence, nommez les écarts.</p>'],
    ['9. Connu d’une seule personne', '<p>Un plan qui n’a pas été discuté est un avis sur l’avenir. <strong>Correction :</strong> passez-le en revue avec les intervenants avant qu’il ne fasse foi — on y trouve généralement deux ou trois tâches oubliées.</p>'],
  ],
  callout: 'Les deux erreurs les plus fréquentes sont opposées : trop de détail et pas assez de structure. La première rend le plan impossible à tenir, la seconde le rend inutile. Entre 20 et 60 tâches réparties en quatre à huit phases, les deux problèmes disparaissent pour la plupart des projets.',
  faq: [
    ['Quelle est l’erreur la plus fréquente ?', 'Trop de détail. Un plan de trois cents lignes n’est plus mis à jour au bout de deux semaines.'],
    ['Quelle marge prévoir ?', 'Dix à vingt pour cent, regroupés devant les jalons et en fin de chemin critique plutôt que répartis sur chaque tâche.'],
    ['Pourquoi mon plan n’est-il jamais juste ?', 'Le plus souvent parce qu’il a été calculé à rebours depuis une date souhaitée, ou parce que la charge n’a jamais été vérifiée.'],
    ['À quelle fréquence mettre le plan à jour ?', 'Chaque semaine. Moins souvent, l’écart n’apparaît que lorsqu’il n’est plus rattrapable.'],
  ],
  related: [['how-to-make-a-gantt-chart', 'Faire un diagramme de Gantt'], ['gantt-baseline-variance', 'Référence et écarts'], ['milestones-vs-tasks', 'Jalons et tâches']],
},

'milestones-vs-tasks': {
  h1: 'Jalons et tâches : ce qui les distingue',
  metaTitle: 'Jalon ou tâche ?',
  metaDesc: 'Différence entre jalon et tâche, à quoi servent réellement les jalons, combien en prévoir et les erreurs classiques.',
  date: '2026-07-19',
  lead: 'Une <strong>tâche</strong> occupe du temps, un <strong>jalon</strong> marque un instant. C’est toute la différence technique — et pourtant, mal employer les jalons est l’un des moyens les plus rapides de rendre un plan illisible.',
  figIntro: 'Des barres pour le travail, des losanges pour les moments qui comptent :',
  sections: [
    ['La différence en une phrase', '<p>Une tâche a une durée : elle commence un jour et finit un autre. Un jalon a une durée nulle et se représente par un losange. « Rédiger le contrat » est une tâche ; « contrat signé » est un jalon.</p>'],
    ['À quoi servent réellement les jalons', '<p>À trois choses. Ce sont des <em>points de contrôle</em> où l’on décide de continuer. C’est le <em>langage de la direction</em> — ce qu’un comité retient de votre plan, ce sont cinq dates, pas cinquante barres. Et ce sont des <em>verrous de séquence</em> : en rattachant le travail suivant à un jalon, vous empêchez qu’il démarre avant que la condition soit remplie.</p>'],
    ['Combien en prévoir ?', '<p>Assez pour raconter l’histoire, pas au point de la diluer. Cinq à dix pour un projet de plusieurs mois fonctionne bien. Avec un jalon par semaine, le plan est devenu un calendrier et les losanges n’indiquent plus rien.</p>'],
    ['Les erreurs classiques', '<p><strong>Des jalons qui sont des tâches déguisées.</strong> Ce qui a une durée n’est pas un jalon.</p>\n        <p><strong>Des jalons sans lien.</strong> Un losange isolé dans le calendrier est décoratif. Sa valeur vient de ce que le travail suivant en dépend.</p>\n        <p><strong>Des jalons que personne ne décide.</strong> Si à la date rien n’est validé, signé ni vérifié, c’était un rappel, pas un jalon.</p>'],
    ['Le troisième type : la tâche récapitulative', '<p>À côté des tâches et des jalons existent les récapitulatives, ou phases. Elles regroupent leurs tâches filles et reprennent automatiquement le début le plus précoce et la fin la plus tardive. On ne les modifie pas directement — elles bougent quand leur contenu bouge.</p>\n        <p>C’est cette hiérarchie à trois niveaux — phase, tâche, jalon — qui rend lisible un grand plan.</p>'],
  ],
  callout: 'Un jalon n’est pas une tâche courte : c’est une tâche de durée nulle qui représente une décision ou une condition remplie. Si le jour venu personne n’a rien à valider, signer ou vérifier, vous posez un rappel, pas un jalon.',
  faq: [
    ['Qu’est-ce qu’un jalon dans un diagramme de Gantt ?', 'Un point sans durée qui marque un moment significatif : une validation, une livraison ou le début d’une phase. Il se représente par un losange.'],
    ['Combien de jalons pour un projet ?', 'Cinq à dix sur plusieurs mois. Trop nombreux, ils perdent leur rôle de point de contrôle.'],
    ['Un jalon peut-il avoir une durée ?', 'Par définition non. Pour représenter une période — une fenêtre de revue par exemple — il s’agit d’une tâche, qui peut se terminer par un jalon.'],
    ['Quelle différence entre jalon et phase ?', 'Une phase est une récapitulative qui regroupe des tâches et reprend leurs dates ; un jalon est un instant sans durée. Les deux vont souvent ensemble : la phase se termine, le jalon confirme la clôture.'],
  ],
  related: [['what-is-a-gantt-chart', 'Qu’est-ce qu’un diagramme de Gantt ?'], ['gantt-chart-mistakes', 'Les erreurs fréquentes'], ['gantt-chart-dependencies', 'Les quatre types de liens']],
},

};

const UI = {
  home: 'Accueil',
  guides: 'Guides',
  backToGuides: 'Retour aux guides',
  related: 'À lire aussi',
  faq: 'Questions fréquentes',
  updated: 'Mis à jour le',
  ctaH2: 'Créez votre diagramme de Gantt — gratuitement',
  ctaP: 'Dans le navigateur, sans inscription. Vos données restent sur votre appareil.',
  ctaBtn: 'Ouvrir l’outil',
  enNote: 'Cet article est également disponible en anglais.',
  readingTime: 'min de lecture',
  byline: 'La rédaction gantts.app',
  onThisPage: 'Sommaire',
};

module.exports = { G, UI };
