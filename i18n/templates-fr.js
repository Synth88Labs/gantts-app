/* ============================================================
   templates-fr.js — French template detail pages.

   Written for French usage rather than translated: "rétroplanning" for
   the backwards-from-a-fixed-date pattern, "lot de travail" for work
   package, "réception" for handover on a construction site, "maîtrise
   d'ouvrage / maîtrise d'œuvre" where the distinction matters.

   metaTitle budget is 47 characters — the renderer appends the 13-char
   " | gantts.app" suffix, and French runs long, so titles are checked
   against that rather than against 60.
   ============================================================ */

const T = {

'project-management': {
  card: 'Plan générique en cinq phases, du lancement à la clôture.',
  h1: 'Modèle de diagramme de Gantt pour la gestion de projet',
  metaTitle: 'Modèle de Gantt — gestion de projet',
  metaDesc: 'Modèle de diagramme de Gantt gratuit pour la gestion de projet : cadrage, planification, exécution, contrôle et clôture.',
  lead: 'Un <strong>modèle de gestion de projet</strong> générique, structuré en cinq phases classiques. Il convient quand le projet n’appartient à aucun secteur particulier et qu’il faut surtout un cadre propre pour démarrer.',
  intro: 'Cinq phases, du lancement à la clôture :',
  phases: [
    ['Cadrage', 'Objectifs, périmètre, parties prenantes, budget indicatif. <em>Jalon : projet lancé.</em>'],
    ['Planification', 'Découpage en lots, estimations, antériorités, ressources et risques.'],
    ['Exécution', 'Réalisation des lots, points d’avancement, gestion des écarts.'],
    ['Contrôle', 'Suivi des délais et du budget, arbitrages, demandes de modification.'],
    ['Clôture', 'Réception, documentation, bilan et retour d’expérience. <em>Jalon : projet clos.</em>'],
  ],
  callout: 'Le contrôle n’est pas une phase qui suit l’exécution : il court en parallèle du début à la fin. Le représenter comme une barre séparée après l’exécution est l’erreur la plus fréquente sur ce modèle — et elle donne l’impression que le pilotage commence une fois le travail terminé.',
  customize: [
    'Renommer les phases selon votre méthodologie interne si elle impose un vocabulaire.',
    'Ajouter une ligne par lot de travail sous chaque phase.',
    'Poser les jalons de validation là où un comité décide réellement.',
    'Étendre la barre de contrôle sur toute la durée plutôt qu’en fin de projet.',
  ],
  tips: [
    '<strong>Cinq à dix jalons suffisent</strong> pour un projet de plusieurs mois.',
    '<strong>Reliez ce qui attend vraiment</strong>, pas ce qui se suit dans la liste.',
    '<strong>Vérifiez la charge après avoir posé les dates</strong>, jamais avant.',
    '<strong>Gardez la référence initiale</strong> pour mesurer les écarts plus tard.',
  ],
  faq: [
    ['Ce modèle convient-il à tous les projets ?', 'Il convient aux projets à échéance et à séquence. Pour de l’activité continue ou un périmètre volontairement ouvert, un tableau Kanban est plus adapté.'],
    ['Combien de lots de travail prévoir ?', 'De 20 à 60 lignes restent lisibles. Au-delà de 150, le plan cesse d’être tenu à jour.'],
    ['Faut-il une phase de contrôle séparée ?', 'Le contrôle est continu. Représentez-le comme une barre parallèle, pas comme une étape finale.'],
  ],
  related: [['simple', 'Modèle simple'], ['product-launch', 'Lancement produit'], ['construction', 'Chantier']],
},

'product-launch': {
  card: 'Étude, préparation produit, supports, campagne et jour J.',
  h1: 'Modèle de diagramme de Gantt pour un lancement produit',
  metaTitle: 'Modèle de Gantt — lancement produit',
  metaDesc: 'Modèle gratuit pour un lancement produit : étude de marché, préparation produit, supports commerciaux, campagne et mise sur le marché.',
  lead: 'Un <strong>plan de lancement produit</strong> fonctionne en rétroplanning : tout se cale sur la date de mise sur le marché, parce que c’est la seule date que l’on ne déplace pas sans coût.',
  intro: 'Quatre phases convergeant vers le jour J :',
  phases: [
    ['Étude et positionnement', 'Marché, concurrence, cible, message et prix. <em>Jalon : positionnement validé.</em>'],
    ['Préparation produit', 'Finalisation, bêta, correctifs, conditionnement et homologations éventuelles.'],
    ['Supports et mise en marché', 'Site, documentation, argumentaire, formation des équipes commerciales.'],
    ['Campagne et lancement', 'Relations presse, campagne, jour J, suivi des premiers retours. <em>Jalon : mise sur le marché.</em>'],
  ],
  callout: 'Les homologations et certifications se placent tôt et avec de la marge. Elles ne dépendent pas de vous, elles sont régulièrement sous-estimées, et elles se retrouvent sur le chemin critique de la plupart des lancements matériels.',
  customize: [
    'Déplacer la date de lancement : tout le plan recule en conséquence.',
    'Ajouter une ligne par marché si le lancement est international et échelonné.',
    'Poser la formation des commerciaux avant la campagne, pas après.',
    'Prévoir une phase de suivi post-lancement — elle est presque toujours oubliée.',
  ],
  tips: [
    '<strong>Planifiez à rebours depuis le jour J.</strong> C’est la date la moins négociable.',
    '<strong>La bêta doit finir avant la campagne</strong>, sinon vous promettez ce qui n’existe pas.',
    '<strong>Les équipes commerciales ont besoin de temps</strong> pour absorber un nouveau discours.',
    '<strong>Gardez deux semaines de marge</strong> avant le lancement, pas après.',
  ],
  faq: [
    ['Combien de temps prévoir pour un lancement produit ?', 'Trois à neuf mois selon la complexité. Les homologations et la production allongent nettement le délai.'],
    ['Qu’est-ce qui se retrouve sur le chemin critique ?', 'Le plus souvent la disponibilité réelle du produit et les homologations, rarement la campagne elle-même.'],
    ['Faut-il planifier l’après-lancement ?', 'Oui. Les premiers retours, correctifs et ajustements de discours arrivent dans les quatre semaines et méritent d’être prévus.'],
  ],
  related: [['marketing', 'Campagne marketing'], ['product-roadmap', 'Feuille de route produit'], ['content-calendar', 'Calendrier éditorial']],
},

'event-planning': {
  card: 'Lieu, prestataires, inscriptions, montage et démontage autour d’une date fixe.',
  h1: 'Modèle de diagramme de Gantt pour l’organisation d’un événement',
  metaTitle: 'Modèle de Gantt — événement',
  metaDesc: 'Modèle gratuit pour organiser un événement : lieu, prestataires, programme, inscriptions, montage, déroulé et démontage.',
  lead: 'Un <strong>rétroplanning d’événement</strong> part d’une date qui ne bouge pas. Tout le plan se calcule à rebours depuis le jour de l’événement, parce que c’est la seule contrainte réellement non négociable.',
  intro: 'Six phases, du concept au démontage :',
  phases: [
    ['Concept et lieu', 'Objectifs, budget, jauge, date et réservation du lieu. <em>Jalon : lieu confirmé.</em>'],
    ['Prestataires', 'Traiteur, technique, mobilier, sécurité, transport — commandés par ordre de rareté.'],
    ['Programme et intervenants', 'Déroulé, confirmations, supports et répétitions.'],
    ['Communication et inscriptions', 'Site, campagne, ouverture des inscriptions et relances.'],
    ['Montage et répétition générale', 'Production, montage, test technique, filage. <em>Jalon : prêt.</em>'],
    ['Déroulé et démontage', 'Événement, démontage, facturation et enquête de satisfaction.'],
  ],
  callout: 'Le test technique mérite sa propre barre, pas une note en marge. La panne la plus fréquente et la plus visible d’un événement concerne le son ou la projection — et elle se manifeste toujours au moment où il ne reste plus de temps.',
  customize: [
    'Changer la date de l’événement : tout le plan se recale automatiquement.',
    'Ajouter une ligne par salle si des sessions se déroulent en parallèle.',
    'Poser la clôture des inscriptions comme jalon — elle conditionne le traiteur et le montage.',
    'Conserver démontage et facturation dans le plan : ils font partie du projet.',
  ],
  tips: [
    '<strong>Le lieu d’abord.</strong> Il fixe la jauge, la date et une bonne part du budget.',
    '<strong>Les inscriptions arrivent tard.</strong> Placez la clôture avant ce dont le traiteur a besoin.',
    '<strong>Le jour J mérite son propre planning horaire</strong>, séparé du plan général.',
    '<strong>Laissez de l’air la veille.</strong> C’est là que les problèmes de montage apparaissent.',
  ],
  faq: [
    ['Combien de temps à l’avance organiser un événement ?', 'Trois à six mois pour un événement d’entreprise de taille moyenne ; un congrès peut demander un an. Le lieu est le facteur limitant.'],
    ['Qu’est-ce qui se trouve sur le chemin critique ?', 'Le lieu, puis les prestataires les plus rares. Le reste s’ajuste généralement.'],
    ['Faut-il planifier le démontage ?', 'Oui. Démontage, restitution du matériel loué et facturation sont les tâches les plus souvent oubliées.'],
  ],
  related: [['wedding-planning', 'Mariage'], ['marketing', 'Campagne marketing'], ['project-management', 'Gestion de projet']],
},

'simple': {
  card: 'Le strict nécessaire : quelques phases, des tâches, des jalons.',
  h1: 'Modèle de diagramme de Gantt simple',
  metaTitle: 'Modèle de diagramme de Gantt simple',
  metaDesc: 'Modèle de diagramme de Gantt simple et gratuit : quelques phases, des tâches et des jalons, sans complexité inutile.',
  lead: 'Un <strong>modèle simple</strong>, volontairement réduit : trois phases, une quinzaine de tâches et quelques jalons. C’est le bon point de départ quand vous découvrez le format ou que le projet est court.',
  intro: 'Trois phases et rien de superflu :',
  phases: [
    ['Préparation', 'Cadrage, décisions de départ et mise en place. <em>Jalon : c’est parti.</em>'],
    ['Réalisation', 'Le cœur du travail, découpé en tâches d’une journée à une semaine.'],
    ['Clôture', 'Vérification, livraison et bilan. <em>Jalon : terminé.</em>'],
  ],
  callout: 'Commencez plus simple que nécessaire. Il est facile d’ajouter des lignes à un plan qui fonctionne ; il est très difficile de rendre lisible un plan qui a démarré avec deux cents tâches.',
  customize: [
    'Ajouter une phase si le projet comporte une étape de validation externe.',
    'Renommer les phases avec le vocabulaire de votre équipe.',
    'Relier les tâches qui attendent réellement les unes les autres.',
    'Supprimer sans hésiter ce qui ne sert pas — c’est l’intérêt d’un modèle simple.',
  ],
  tips: [
    '<strong>Quinze à vingt-cinq tâches suffisent</strong> pour la plupart des projets courts.',
    '<strong>Une tâche par jour minimum.</strong> Plus fin relève d’une liste de tâches.',
    '<strong>Trois jalons valent mieux que dix</strong> sur un plan court.',
    '<strong>Ajoutez de la complexité seulement quand elle manque</strong>, pas par anticipation.',
  ],
  faq: [
    ['À qui s’adresse ce modèle ?', 'Aux projets courts et à ceux qui découvrent le diagramme de Gantt. Il tient en une page et s’explique en une minute.'],
    ['Peut-on l’étoffer ensuite ?', 'Oui. Ajouter des phases, des tâches et des liens se fait sans reconstruire le plan.'],
    ['Combien de temps pour le remplir ?', 'Une vingtaine de minutes si vous savez déjà ce qu’il y a à faire.'],
  ],
  related: [['project-management', 'Gestion de projet'], ['weekly', 'Plan hebdomadaire'], ['monthly', 'Plan mensuel']],
},

'construction': {
  card: 'Autorisations, terrassement, gros œuvre, second œuvre et réception.',
  h1: 'Modèle de planning de chantier (diagramme de Gantt)',
  metaTitle: 'Planning de chantier — modèle Gantt',
  metaDesc: 'Modèle gratuit de planning de chantier : études, autorisations, terrassement, gros œuvre, clos couvert, second œuvre et réception.',
  lead: 'Un <strong>planning de chantier</strong> se heurte presque toujours au même point : ce n’est pas la construction qui fixe la date, c’est le permis. La partie visible du projet est aussi la plus prévisible.',
  intro: 'Six phases, des études à la réception :',
  phases: [
    ['Études et autorisations', 'Conception, dépôt du permis, instruction, purge des recours. <em>Le poste le plus long et le moins maîtrisable.</em>'],
    ['Préparation et terrassement', 'Installation de chantier, terrassement, fondations, réseaux enterrés.'],
    ['Gros œuvre', 'Structure, planchers, murs porteurs, charpente.'],
    ['Clos et couvert', 'Couverture, menuiseries extérieures, étanchéité. <em>Jalon : bâtiment hors d’eau hors d’air.</em>'],
    ['Second œuvre et lots techniques', 'Cloisons, électricité, plomberie, chauffage, revêtements, finitions.'],
    ['Réception', 'Essais, levée des réserves, réception et livraison. <em>Jalon : réception prononcée.</em>'],
  ],
  callout: 'Le second œuvre ne peut pas commencer avant que le bâtiment soit hors d’eau hors d’air. C’est le lien d’antériorité le plus structurant de tout le planning, et celui qui transforme un retard de couverture en retard de livraison.',
  customize: [
    'Ajouter une ligne par lot technique si plusieurs entreprises interviennent.',
    'Marquer les tâches sensibles à la météo et leur donner de la marge en hiver.',
    'Poser l’obtention du permis en antériorité de toute tâche sur site.',
    'Séparer réception et levée des réserves : ce sont deux étapes distinctes.',
  ],
  tips: [
    '<strong>Le permis se planifie en mois</strong>, pas en semaines.',
    '<strong>Hors d’eau hors d’air est le jalon pivot</strong> du chantier.',
    '<strong>La coactivité se gère par les ressources</strong>, pas seulement par les dates.',
    '<strong>Prévoyez la levée des réserves.</strong> Elle arrive toujours.',
  ],
  faq: [
    ['Combien de temps dure un chantier ?', 'La construction elle-même dure souvent 8 à 18 mois pour un bâtiment courant. Avec les études et les autorisations, comptez bien davantage.'],
    ['Qu’est-ce qui se trouve sur le chemin critique ?', 'Presque toujours les autorisations, puis l’enchaînement gros œuvre — clos couvert — second œuvre.'],
    ['Comment gérer la météo ?', 'En marquant les tâches concernées et en leur donnant une marge saisonnière, plutôt qu’en espérant une année sèche.'],
  ],
  related: [['home-renovation', 'Rénovation'], ['data-center-build-schedule', 'Centre de données'], ['office-relocation-project-plan', 'Déménagement de bureaux']],
},

'marketing': {
  card: 'Stratégie, création, production, validations, diffusion et bilan.',
  h1: 'Modèle de diagramme de Gantt pour une campagne marketing',
  metaTitle: 'Modèle de Gantt — campagne marketing',
  metaDesc: 'Modèle gratuit pour une campagne marketing : stratégie, création, production, validations, diffusion multicanal et bilan.',
  lead: 'Un <strong>plan de campagne marketing</strong> échoue rarement sur la création. Il échoue sur les validations — le temps mort entre une création finie et sa publication, que presque aucun plan ne prévoit.',
  intro: 'Cinq phases, de la stratégie au bilan :',
  phases: [
    ['Stratégie', 'Objectifs, cible, message, canaux et budget. <em>Jalon : brief validé.</em>'],
    ['Création', 'Concepts, déclinaisons, textes et visuels.'],
    ['Production', 'Réalisation des supports par canal — chacun avec son propre délai.'],
    ['Validations', 'Relecture, validation métier, juridique si nécessaire. <em>Le poste le plus sous-estimé.</em>'],
    ['Diffusion et bilan', 'Mise en ligne, achat média, suivi des performances, bilan. <em>Jalon : campagne lancée.</em>'],
  ],
  callout: 'Donnez aux validations une barre visible. Dans la plupart des organisations, une création reste trois jours en attente d’une signature — ce n’est pas du temps de production, c’est du temps d’attente, et il doit apparaître dans le plan.',
  customize: [
    'Ajouter une ligne par canal : chacun a son délai de production propre.',
    'Placer les dates de diffusion comme contraintes fixes et remonter à rebours.',
    'Prévoir un cycle de validation supplémentaire pour les campagnes réglementées.',
    'Ajouter une phase de bilan quatre à six semaines après le lancement.',
  ],
  tips: [
    '<strong>La vidéo demande plus de temps que le texte.</strong> Lancez-la en parallèle, pas ensuite.',
    '<strong>Comptez deux cycles de validation</strong>, pas un.',
    '<strong>Réservez 20 % du plan</strong> pour l’imprévu et l’actualité.',
    '<strong>Le bilan fait partie de la campagne</strong>, pas de la suivante.',
  ],
  faq: [
    ['Combien de temps pour préparer une campagne ?', 'Quatre à douze semaines selon le nombre de canaux et la lourdeur des validations.'],
    ['Quel est le principal facteur de retard ?', 'Les validations internes, devant la production elle-même.'],
    ['Faut-il un plan par canal ?', 'Une ligne par canal dans un plan unique suffit, tant que les délais de production propres à chacun apparaissent.'],
  ],
  related: [['content-calendar', 'Calendrier éditorial'], ['product-launch', 'Lancement produit'], ['event-planning', 'Événement']],
},

'software-development': {
  card: 'Exigences, architecture, développement, recette et mise en production.',
  h1: 'Modèle de diagramme de Gantt pour un projet logiciel',
  metaTitle: 'Modèle de Gantt — projet logiciel',
  metaDesc: 'Modèle gratuit pour un projet de développement logiciel : exigences, architecture, développement, intégration, recette, mise en production.',
  lead: 'Un <strong>plan de projet logiciel</strong> comporte un piège récurrent : la recette est planifiée comme une courte barre finale et prend le double. Tests et corrections forment une boucle, pas une ligne droite.',
  intro: 'Six phases, des exigences à la production :',
  phases: [
    ['Exigences', 'Besoins, cas d’usage, critères d’acceptation. <em>Jalon : périmètre figé.</em>'],
    ['Architecture', 'Choix techniques, modèle de données, interfaces, environnements.'],
    ['Développement', 'Réalisation par itérations, revues de code, intégration continue.'],
    ['Intégration et recette', 'Assemblage, tests fonctionnels, corrections — en boucle avec le développement.'],
    ['Migration des données', 'Reprise, correspondances, migrations à blanc. <em>Plusieurs passages, jamais un seul.</em>'],
    ['Mise en production', 'Bascule, surveillance renforcée, stabilisation. <em>Jalon : en production.</em>'],
  ],
  callout: 'Comptez plusieurs migrations à blanc, pas une. La qualité des données existantes est presque toujours moins bonne que prévu, et chaque passage révèle des cas absents de la spécification. Une migration unique le soir de la bascule est la façon classique de rater une mise en production.',
  customize: [
    'Ajouter une ligne par module ou par équipe si plusieurs travaillent en parallèle.',
    'Représenter la recette en boucle avec le développement, pas à la suite.',
    'Prévoir une phase de stabilisation après la bascule — deux à six semaines.',
    'Poser le gel du périmètre en jalon : ce qui arrive après décale la mise en production.',
  ],
  tips: [
    '<strong>La recette prend le double du temps prévu.</strong> Planifiez-la en conséquence.',
    '<strong>Testez la migration tôt</strong>, sur des données réelles.',
    '<strong>Évitez une mise en production un vendredi</strong> ou en période de clôture.',
    '<strong>La stabilisation est une phase</strong>, pas un imprévu.',
  ],
  faq: [
    ['Le Gantt convient-il à un projet agile ?', 'Pour le sprint, le tableau reste l’outil. Le Gantt sert aux jalons, aux dépendances externes et à la coordination avec les équipes non agiles.'],
    ['Quand figer le périmètre ?', 'Avant l’architecture. Tout ajout ultérieur décale la mise en production, ce qui doit être visible dans le plan.'],
    ['Combien de migrations à blanc ?', 'Trois à cinq selon la qualité des données existantes. Une seule ne suffit jamais.'],
  ],
  related: [['agile', 'Projet agile'], ['sprint', 'Plan de sprint'], ['erp-implementation-schedule', 'Déploiement ERP']],
},

'agile': {
  card: 'Itérations, incréments et jalons pour un projet agile.',
  h1: 'Modèle de diagramme de Gantt pour un projet agile',
  metaTitle: 'Modèle de Gantt — projet agile',
  metaDesc: 'Modèle gratuit pour un projet agile : itérations, incréments, jalons de livraison et dépendances externes.',
  lead: 'Un <strong>projet agile</strong> n’a pas besoin d’un Gantt pour piloter ses sprints — le tableau s’en charge. Il en a besoin pour ce que le tableau ne montre pas : les dépendances externes et les engagements de date.',
  intro: 'Quatre niveaux qui cohabitent :',
  phases: [
    ['Cadrage', 'Vision, backlog initial, architecture de départ. <em>Jalon : équipe lancée.</em>'],
    ['Itérations', 'Sprints successifs de durée fixe, représentés comme des barres régulières.'],
    ['Incréments livrables', 'Ce qui sort réellement à la fin de chaque série de sprints. <em>Les jalons visibles pour l’extérieur.</em>'],
    ['Dépendances externes', 'Fournisseurs, validations, autres équipes — la raison d’être de ce plan.'],
  ],
  callout: 'N’essayez pas de planifier le contenu des sprints à six mois. Ce plan sert à tenir les dates de livraison et les dépendances externes ; le contenu de chaque sprint se décide au dernier moment responsable, et c’est précisément l’intérêt de la méthode.',
  customize: [
    'Régler la durée des itérations sur celle de votre équipe.',
    'Ajouter une ligne par dépendance externe, avec le nom du responsable.',
    'Poser les incréments livrables en jalons — ce sont eux qui intéressent la direction.',
    'Laisser le contenu des sprints lointains volontairement vide.',
  ],
  tips: [
    '<strong>Le tableau pilote le sprint, le Gantt pilote les engagements.</strong>',
    '<strong>Les dépendances externes sont le vrai risque</strong> d’un projet agile.',
    '<strong>Ne détaillez que l’itération en cours et la suivante.</strong>',
    '<strong>Un incrément livrable vaut mieux qu’un pourcentage d’avancement.</strong>',
  ],
  faq: [
    ['Agile et Gantt sont-ils compatibles ?', 'Oui, à condition de ne pas planifier le contenu des sprints à l’avance. Le Gantt porte les jalons et les dépendances, pas le détail du backlog.'],
    ['Comment représenter un sprint ?', 'Comme une barre de durée fixe et régulière. Le contenu se décide au début de chaque sprint.'],
    ['Que montrer à la direction ?', 'Les incréments livrables et les dates associées, pas la vélocité ni le détail des tâches.'],
  ],
  related: [['sprint', 'Plan de sprint'], ['software-development', 'Projet logiciel'], ['product-roadmap', 'Feuille de route produit']],
},

'excel': {
  card: 'À télécharger en XLSX : tableau, barres et jalons prêts à l’emploi.',
  h1: 'Modèle de diagramme de Gantt pour Excel',
  metaTitle: 'Modèle de Gantt pour Excel — gratuit',
  metaDesc: 'Modèle de diagramme de Gantt gratuit pour Excel : fichier XLSX avec tableau de tâches, barres et jalons déjà en place.',
  lead: 'Un <strong>modèle de Gantt pour Excel</strong> prêt à remplir : le tableau de tâches, les colonnes intermédiaires et la mise en forme des barres sont déjà en place, il ne reste qu’à saisir vos dates.',
  intro: 'Ce que contient le fichier :',
  phases: [
    ['Tableau des tâches', 'Tâche, début, durée et responsable — les colonnes dont tout le reste découle.'],
    ['Colonnes intermédiaires', 'Le calcul d’écart au démarrage qui rend l’astuce des barres empilées possible.'],
    ['Graphique', 'L’histogramme empilé déjà formaté, première série masquée.'],
    ['Jalons', 'Une série distincte avec marqueur en losange.'],
  ],
  callout: 'Excel ne recalcule pas les antériorités. Si une tâche glisse, chaque date de début suivante doit être reprise à la main — praticable jusqu’à une vingtaine de lignes, plus au-delà. Si le plan doit se recalculer seul, ouvrez-le directement dans l’éditeur.',
  customize: [
    'Élargir la plage de dates de l’axe si votre projet dépasse la période du modèle.',
    'Ajouter une colonne d’avancement et une mise en forme conditionnelle si vous suivez le réalisé.',
    'Dupliquer la feuille par phase pour un projet volumineux.',
    'Protéger les colonnes de calcul si le fichier circule.',
  ],
  tips: [
    '<strong>Saisissez des durées, pas des dates de fin.</strong> Les fins se calculent.',
    '<strong>Vérifiez l’ordre inverse de l’axe</strong> pour que la première tâche soit en haut.',
    '<strong>Au-delà de vingt tâches</strong>, l’entretien manuel coûte plus qu’il ne rapporte.',
    '<strong>Exportez en PDF pour diffuser</strong> plutôt que d’envoyer le classeur.',
  ],
  faq: [
    ['Le modèle fonctionne-t-il avec les anciennes versions d’Excel ?', 'Oui, il n’utilise que des fonctions et des graphiques standard, sans macro.'],
    ['Peut-on l’ouvrir dans Google Sheets ?', 'Oui, via Fichier → Importer. Certaines mises en forme du graphique demandent un ajustement.'],
    ['Excel gère-t-il le chemin critique ?', 'Non. Il faut un outil de planification pour le calculer.'],
  ],
  related: [['google-sheets', 'Modèle Google Sheets'], ['powerpoint', 'Modèle PowerPoint'], ['simple', 'Modèle simple']],
},

'powerpoint': {
  card: 'Une diapositive prête à présenter : phases, barres et jalons.',
  h1: 'Modèle de diagramme de Gantt pour PowerPoint',
  metaTitle: 'Modèle de Gantt pour PowerPoint',
  metaDesc: 'Modèle de diagramme de Gantt gratuit pour PowerPoint : diapositive prête à présenter avec phases, barres et jalons.',
  lead: 'Un <strong>modèle de Gantt pour PowerPoint</strong> conçu pour être projeté : six à dix barres, des libellés lisibles à distance et trois jalons mis en avant. Ce n’est pas un planning, c’est une diapositive.',
  intro: 'Ce que contient la diapositive :',
  phases: [
    ['Axe temporel', 'Une graduation par mois ou par trimestre, selon la durée du projet.'],
    ['Barres de phase', 'Six à dix barres au maximum — au-delà, plus rien n’est lisible depuis la salle.'],
    ['Jalons', 'Trois losanges pour les moments qui comptent.'],
    ['Légende', 'Discrète, uniquement si les couleurs portent une information.'],
  ],
  callout: 'Ne comprimez pas le planning complet sur une diapositive. Présentation et planification n’ont pas le même niveau de détail : la diapositive raconte l’histoire, le plan porte le travail. Quarante lignes projetées n’obtiennent qu’une chose, que personne ne regarde.',
  customize: [
    'Ajuster l’axe à la durée réelle du projet.',
    'Reprendre les couleurs de votre charte pour les phases.',
    'Ajouter une animation par phase si vous présentez le plan par étapes.',
    'Exporter en image pour l’insérer dans un document.',
  ],
  tips: [
    '<strong>Six à dix barres maximum</strong> sur une diapositive projetée.',
    '<strong>Écrivez les libellés sur les barres</strong>, pas dans une légende.',
    '<strong>Trois jalons mis en avant</strong> suffisent à porter le message.',
    '<strong>Tenez le plan ailleurs</strong> et exportez pour la présentation.',
  ],
  faq: [
    ['Peut-on modifier les barres facilement ?', 'Oui, ce sont des formes standard : elles se déplacent et se redimensionnent directement.'],
    ['Comment garder la diapositive à jour ?', 'Tenez le plan dans un outil de planification et réexportez la diapositive quand il change.'],
    ['Quelle taille de police ?', 'Au minimum 14 points pour une projection. Ce qui paraît petit à l’écran est illisible dans une salle.'],
  ],
  related: [['excel', 'Modèle Excel'], ['one-page-gantt-chart', 'Plan sur une page'], ['printable-gantt-chart', 'Version imprimable']],
},

'weekly': {
  card: 'Une semaine en vue jour par jour, pour une équipe ou un projet court.',
  h1: 'Modèle de planning hebdomadaire (diagramme de Gantt)',
  metaTitle: 'Planning hebdomadaire — modèle Gantt',
  metaDesc: 'Modèle gratuit de planning hebdomadaire en diagramme de Gantt : cinq jours, tâches par personne et jalons de fin de semaine.',
  lead: 'Un <strong>planning hebdomadaire</strong> en diagramme de Gantt montre ce qu’une liste ne montre pas : qui fait quoi en même temps, et quel jour la semaine est déjà pleine.',
  intro: 'Cinq jours, découpés par demi-journées :',
  phases: [
    ['Lundi — cadrage', 'Point de lancement, priorités de la semaine, répartition.'],
    ['Mardi à jeudi — production', 'Le cœur du travail, une barre par tâche et par personne.'],
    ['Vendredi — clôture', 'Vérification, livraison, point de fin de semaine. <em>Jalon : semaine bouclée.</em>'],
  ],
  callout: 'Ne remplissez pas les cinq jours à 100 %. Une semaine planifiée au maximum n’absorbe aucune urgence, et il y en a toujours une. Soixante-dix à quatre-vingts pour cent de charge planifiée est un rythme tenable.',
  customize: [
    'Passer en demi-journées ou en heures si les tâches sont courtes.',
    'Ajouter une ligne par personne pour visualiser la charge réelle.',
    'Bloquer les réunions récurrentes comme tâches fixes.',
    'Dupliquer la semaine comme point de départ de la suivante.',
  ],
  tips: [
    '<strong>Planifiez à 70-80 % de la capacité</strong>, pas à 100 %.',
    '<strong>Bloquez les réunions d’abord</strong>, elles ne se déplacent pas.',
    '<strong>Une ligne par personne</strong> rend la surcharge immédiatement visible.',
    '<strong>Clôturez le vendredi</strong> : ce qui n’est pas fini se replanifie, pas se reporte.',
  ],
  faq: [
    ['Un Gantt est-il utile pour une seule semaine ?', 'Oui, dès qu’il y a plusieurs personnes ou des tâches qui s’attendent. Pour une liste individuelle, une to-do suffit.'],
    ['Quelle granularité choisir ?', 'La demi-journée convient à la plupart des équipes. L’heure ne se justifie que pour des interventions courtes.'],
    ['Que faire des tâches non terminées ?', 'Les replanifier explicitement la semaine suivante plutôt que de les laisser glisser.'],
  ],
  related: [['monthly', 'Plan mensuel'], ['simple', 'Modèle simple'], ['sprint', 'Plan de sprint']],
},

'monthly': {
  card: 'Un mois en semaines : jalons, échéances et charge par personne.',
  h1: 'Modèle de planning mensuel (diagramme de Gantt)',
  metaTitle: 'Planning mensuel — modèle Gantt',
  metaDesc: 'Modèle gratuit de planning mensuel en diagramme de Gantt : quatre à cinq semaines, jalons, échéances et charge.',
  lead: 'Un <strong>planning mensuel</strong> travaille en semaines. C’est la bonne maille pour coordonner une équipe : assez fine pour être actionnable, assez large pour tenir un mois sur une page.',
  intro: 'Quatre à cinq semaines et les échéances du mois :',
  phases: [
    ['Semaine 1', 'Lancement des chantiers du mois, reprise de ce qui reste du mois précédent.'],
    ['Semaines 2 et 3', 'Production, point de mi-mois, ajustement des priorités.'],
    ['Semaine 4', 'Finalisation, livraisons, clôture. <em>Jalon : échéances du mois tenues.</em>'],
  ],
  callout: 'Placez les échéances fixes du mois avant tout le reste. Facturation, reporting, comités, clôtures comptables ne se déplacent pas — le travail se planifie autour d’eux, pas l’inverse.',
  customize: [
    'Ajouter une ligne par personne ou par équipe pour visualiser la charge.',
    'Marquer les jours fériés et les congés comme périodes indisponibles.',
    'Poser les échéances récurrentes en jalons dès le début du mois.',
    'Dupliquer le mois pour préparer le suivant.',
  ],
  tips: [
    '<strong>Travaillez en semaines</strong>, pas en jours, sur un plan mensuel.',
    '<strong>Les échéances fixes d’abord</strong>, le reste ensuite.',
    '<strong>Un point de mi-mois</strong> suffit à corriger la trajectoire.',
    '<strong>Gardez une semaine de réserve</strong> sur les mois chargés.',
  ],
  faq: [
    ['Quelle différence avec un planning hebdomadaire ?', 'La maille : le mensuel travaille en semaines et sert à coordonner, l’hebdomadaire en demi-journées et sert à exécuter.'],
    ['Combien de lignes prévoir ?', 'Quinze à trente restent lisibles sur un mois. Au-delà, découpez par équipe.'],
    ['Faut-il replanifier chaque mois ?', 'Oui, en repartant du plan précédent plutôt que d’une page blanche.'],
  ],
  related: [['weekly', 'Plan hebdomadaire'], ['annual', 'Plan annuel'], ['project-management', 'Gestion de projet']],
},

'employee-onboarding': {
  card: 'Avant le premier jour, première semaine, premier mois, 90 jours.',
  h1: 'Modèle de diagramme de Gantt pour l’intégration d’un nouvel arrivant',
  metaTitle: 'Modèle de Gantt — intégration RH',
  metaDesc: 'Modèle gratuit pour l’intégration d’un nouvel arrivant : préparation, première semaine, premier mois et 90 premiers jours.',
  lead: 'Un <strong>plan d’intégration</strong> est court mais à fort effet. L’essentiel se joue avant le premier jour : matériel, accès et interlocuteurs doivent être prêts à l’arrivée, pas commandés le matin même.',
  intro: 'Quatre étapes, de la préparation aux 90 jours :',
  phases: [
    ['Avant le premier jour', 'Contrat, matériel, accès, poste de travail, planning de la première semaine. <em>Jalon : tout est prêt.</em>'],
    ['Première semaine', 'Accueil, présentation de l’équipe, outils, premières tâches simples.'],
    ['Premier mois', 'Montée en autonomie, formation métier, premiers dossiers suivis. <em>Jalon : point à 30 jours.</em>'],
    ['90 premiers jours', 'Prise de responsabilité, objectifs, entretien de fin de période d’essai. <em>Jalon : bilan à 90 jours.</em>'],
  ],
  callout: 'Le matériel et les accès se commandent à la signature du contrat, pas à l’arrivée. Un nouvel arrivant qui passe sa première semaine sans ordinateur ni accès forme une impression durable de l’organisation — et c’est entièrement évitable.',
  customize: [
    'Adapter la durée si la période d’essai de votre pays ou de votre convention diffère.',
    'Ajouter une ligne par service pour les rencontres à prévoir.',
    'Poser les points à 30, 60 et 90 jours en jalons avec un responsable nommé.',
    'Dupliquer le plan par profil de poste : technique, commercial, encadrement.',
  ],
  tips: [
    '<strong>Préparez tout avant l’arrivée.</strong> C’est le seul point qui ne se rattrape pas.',
    '<strong>Nommez un référent</strong>, distinct du responsable hiérarchique.',
    '<strong>Des tâches réelles dès la première semaine</strong>, même simples.',
    '<strong>Le point à 30 jours est le plus utile</strong> : il est encore temps de corriger.',
  ],
  faq: [
    ['Combien de temps dure une intégration ?', 'Les 90 premiers jours structurent la prise de poste. La montée en pleine autonomie prend souvent six mois.'],
    ['Qui pilote le plan ?', 'Les RH pour le cadre, le responsable direct pour le contenu. Le plan sert justement à ce que rien ne tombe entre les deux.'],
    ['Faut-il un plan par poste ?', 'Le socle est commun ; seule la partie métier change. Dupliquer et adapter suffit.'],
  ],
  related: [['30-60-90-day-plan', 'Plan 30-60-90 jours'], ['project-management', 'Gestion de projet'], ['monthly', 'Plan mensuel']],
},


  'refinery-turnaround-schedule': {
    card: "Arrêt, vidange, inspection, réparation et redémarrage, planifiés au poste.",
    h1: "Planning d’arrêt de raffinerie (grand arrêt)",
    metaTitle: "Planning de grand arrêt — raffinerie",
    metaDesc: "Modèle gratuit de planning de grand arrêt : préparation, arrêt, vidange, inspection, réparation et redémarrage.",
    lead: "Un <strong>planning de grand arrêt</strong> se distingue de tout autre planning industriel sur un point : l’unité ne produit rien pendant ce temps. Chaque jour de retard coûte de la production, ce qui impose de planifier au poste et non à la semaine.",
    intro: "Six phases, de la préparation à la remise au service exploitation :",
    phases: [
      [
        "Préparation (M-12 à M-1)",
        "Gel du périmètre, approvisionnements, contractants, échafaudages et levage. <em>Jalon : périmètre figé.</em>"
      ],
      [
        "Arrêt et consignation",
        "Baisse de charge, arrêt, vidange, rinçage, inertage et permis. Aucun travail sur site avant."
      ],
      [
        "Inspection",
        "Ouverture, nettoyage, contrôle. C’est ici qu’apparaît le travail supplémentaire que personne ne connaissait."
      ],
      [
        "Réparation et remplacement",
        "Catalyseur, échangeurs, robinetterie, tuyauterie — le chemin critique tient presque toujours à une seule colonne."
      ],
      [
        "Épreuves et remise en état",
        "Fermeture, épreuve de pression, calibrage, calorifugeage. <em>Jalon : achèvement mécanique.</em>"
      ],
      [
        "Redémarrage",
        "Inertage, montée en température, mise en régime et remise à l’exploitation."
      ]
    ],
    callout: "Planifiez le travail supplémentaire avant de le connaître. Entre 10 et 30 % des heures d’un grand arrêt naissent de constats faits à l’ouverture. Un planning sans cette réserve n’est pas optimiste, il est incomplet.",
    customize: [
      "Passer en postes si le chantier tourne en 3×8 — la maille journalière est trop grossière.",
      "Une ligne par équipement ou par colonne : ils avancent en parallèle et se disputent les mêmes équipes.",
      "Représenter permis et consignation comme des tâches distinctes de l’arrêt, pas incluses dedans.",
      "Prévoir une ligne de réserve par phase et l’afficher ouvertement."
    ],
    tips: [
      "<strong>Le gel du périmètre est le jalon décisif.</strong> Ce qui arrive après décale le redémarrage.",
      "<strong>Le chemin critique est court.</strong> Peu de tâches gouvernent la durée : protégez celles-là.",
      "<strong>Les contractants sont une ressource</strong>, pas seulement une date.",
      "<strong>Le redémarrage fait partie du planning.</strong> L’arrêt finit avec un produit aux spécifications."
    ],
    faq: [
      [
        "Combien de temps dure un grand arrêt ?",
        "De 20 à 60 jours d’arrêt selon le périmètre. La préparation commence 12 à 18 mois avant."
      ],
      [
        "Pourquoi planifier au poste ?",
        "Parce que le chantier tourne souvent en continu. La maille journalière masque les relèves, là où le temps se perd."
      ],
      [
        "Quelle est la cause la plus fréquente de retard ?",
        "Le travail supplémentaire issu de l’inspection et les permis délivrés tardivement. Les deux se planifient, mais ne s’évitent pas."
      ]
    ],
    related: [
      ["construction", "Chantier"],
      ["project-management", "Gestion de projet"],
      ["data-center-build-schedule", "Centre de données"]
    ]
  },

  'hotel-pre-opening-critical-path': {
    card: "De la réception des travaux au premier client : personnel, systèmes, licences.",
    h1: "Planning de pré-ouverture d’un hôtel",
    metaTitle: "Pré-ouverture d’hôtel — planning",
    metaDesc: "Modèle gratuit de planning de pré-ouverture hôtelière : licences, recrutement, systèmes, distribution, essais et ouverture.",
    lead: "Un <strong>planning de pré-ouverture</strong> commence là où s’arrête le planning de travaux. Entre un bâtiment terminé et le premier client payant, il reste six à neuf mois de travail qui doivent se dérouler en parallèle du chantier.",
    intro: "Six chantiers convergeant vers l’ouverture :",
    phases: [
      [
        "Autorisations et licences",
        "Exploitation, licence de débit de boissons, commission de sécurité, plan de maîtrise sanitaire. <em>Le délai le plus long.</em>"
      ],
      [
        "Personnel",
        "Direction d’abord, puis chefs de service, puis équipes : recrutement, contrats, formation."
      ],
      [
        "Systèmes",
        "PMS, caisse, channel manager, serrures, wifi, téléphonie — interfaces et réservations de test comprises."
      ],
      [
        "Distribution et ventes",
        "Grille tarifaire, connexion aux plateformes, site, photos et premières campagnes. <em>Jalon : réservable.</em>"
      ],
      [
        "Achats et équipement",
        "Fournisseurs, dotation en linge, vaisselle, F&B, produits d’entretien."
      ],
      [
        "Essais et ouverture progressive",
        "Tests par service, ouverture aux proches, levée des réserves. <em>Jalon : premier client.</em>"
      ]
    ],
    callout: "Être réservable est un jalon précoce, pas tardif. Les chambres doivent se vendre des mois avant l’ouverture, faute de quoi l’hôtel démarre sa première saison avec un calendrier vide — l’erreur évitable la plus coûteuse d’une ouverture.",
    customize: [
      "Déplacer la date d’ouverture : la chaîne des licences montre aussitôt si elle tient.",
      "Ajouter une ligne de formation par service : réception, étages, cuisine, salle, technique.",
      "Poser la réception des travaux en antériorité des essais.",
      "Traiter l’ouverture progressive comme une phase, pas comme un jour."
    ],
    tips: [
      "<strong>Remontez d’abord la chaîne des licences.</strong> Les délais administratifs ne se négocient pas.",
      "<strong>Recrutez la direction tôt.</strong> C’est elle qui constitue l’équipe qui fera le reste.",
      "<strong>Les réservations de test sont de vraies tâches.</strong> Une interface non testée se signale le jour de l’ouverture.",
      "<strong>Comptez sur un retard de chantier.</strong> Gardez deux à quatre semaines entre réception et ouverture."
    ],
    faq: [
      [
        "Quand commence la pré-ouverture ?",
        "Six à douze mois avant l’ouverture selon la taille et la catégorie. La distribution et les licences démarrent en premier."
      ],
      [
        "Qu’est-ce qui est sur le chemin critique ?",
        "Le plus souvent la chaîne des autorisations ou l’intégration des systèmes — rarement le chantier, pourtant le plus visible."
      ],
      [
        "Une ouverture progressive est-elle nécessaire ?",
        "C’est la façon la moins chère de trouver les défauts. Deux à quatre semaines évitent des avis en ligne qui restent des années."
      ]
    ],
    related: [
      ["construction", "Chantier"],
      ["restaurant-opening-timeline", "Ouverture de restaurant"],
      ["event-planning", "Événement"]
    ]
  },

  'solar-farm-construction-schedule': {
    card: "Foncier, raccordement, modules et mise en service, avec marges météo et réseau.",
    h1: "Planning de construction d’une centrale photovoltaïque",
    metaTitle: "Planning centrale solaire — modèle",
    metaDesc: "Modèle gratuit de planning pour une centrale photovoltaïque : foncier, autorisations, raccordement, montage, mise en service.",
    lead: "Un <strong>planning de centrale photovoltaïque</strong> est rarement gouverné par le montage. Poser des modules va vite ; l’autorisation et le raccordement prennent des années — et c’est là que se situe le chemin critique.",
    intro: "Six phases, du foncier à l’injection :",
    phases: [
      [
        "Développement",
        "Sécurisation du foncier, baux, étude de raccordement, productible. <em>Jalon : proposition technique et financière.</em>"
      ],
      [
        "Autorisations",
        "Urbanisme, étude d’impact, espèces protégées, permis de construire — le poste le plus long et le plus incertain."
      ],
      [
        "Achats et financement",
        "Modules, onduleurs, poste de livraison, structures, choix de l’EPC. <em>Jalon : bouclage financier.</em>"
      ],
      [
        "Viabilisation",
        "Accès, base vie, dépollution pyrotechnique, battage des pieux, tranchées."
      ],
      [
        "Montage",
        "Structures, modules, câblage DC, onduleurs, poste de livraison et clôture."
      ],
      [
        "Raccordement et mise en service",
        "Raccordement, essais, attestations, mise en service. <em>Jalon : première injection.</em>"
      ]
    ],
    callout: "Le raccordement est la tâche qui date le projet. L’accord du gestionnaire de réseau et la date de mise à disposition échappent à votre contrôle et se comptent souvent en années — planifiez tout le reste à rebours depuis cette date.",
    customize: [
      "Ajouter une ligne par tranche si la centrale se construit par phases.",
      "Marquer battage et tranchées comme sensibles à la météo et leur donner de la marge en hiver.",
      "Poser le bouclage financier en jalon dur : sans lui, aucun achat ne démarre.",
      "Déclarer les périodes de nidification comme indisponibles dans le calendrier."
    ],
    tips: [
      "<strong>Autorisations et raccordement avancent en parallèle</strong>, mais un seul fixe la date finale.",
      "<strong>Le poste de livraison a un long délai.</strong> Commandez-le avant les modules.",
      "<strong>Le battage exige un sol portant.</strong> Les mois humides coûtent des semaines.",
      "<strong>La mise en service n’est pas une journée.</strong> Essais et attestations s’étalent sur des semaines."
    ],
    faq: [
      [
        "Combien de temps pour construire une centrale solaire ?",
        "Le chantier dure trois à neuf mois. Du foncier à l’injection, comptez plutôt deux à cinq ans."
      ],
      [
        "Qu’est-ce qui est sur le chemin critique ?",
        "Presque toujours l’autorisation ou le raccordement. Le montage est la phase la plus courte et la mieux maîtrisée."
      ],
      [
        "Comment gérer les périodes de nidification ?",
        "En les déclarant indisponibles dans le calendrier : le plan décale alors les terrassements au lieu de les planifier de façon irréaliste."
      ]
    ],
    related: [
      ["wind-farm-construction-schedule", "Parc éolien"],
      ["construction", "Chantier"],
      ["ev-charging-installation-schedule", "Bornes de recharge"]
    ]
  },

  'dissertation-gantt-chart': {
    card: "Projet, littérature, terrain, chapitres, corrections et soutenance.",
    h1: "Diagramme de Gantt pour une thèse",
    metaTitle: "Planning de thèse — modèle Gantt",
    metaDesc: "Modèle gratuit de planning de thèse : projet de recherche, littérature, méthode, collecte, analyse, rédaction et soutenance.",
    lead: "Un <strong>planning de thèse</strong> pose un problème qu’aucun chantier ne connaît : vous êtes la seule ressource et l’échéance est à des années. Sans jalons intermédiaires, le retard ne se voit qu’une fois irrattrapable.",
    intro: "Six phases sur trois à quatre ans :",
    phases: [
      [
        "Projet et encadrement",
        "Sujet, question de recherche, accord du directeur, inscription. <em>Jalon : inscription validée.</em>"
      ],
      [
        "Littérature et cadre théorique",
        "Recherche systématique, état de l’art, cadrage — se poursuit en arrière-plan."
      ],
      [
        "Méthode et accès au terrain",
        "Protocole, avis éthique, instruments, pré-test et accès."
      ],
      [
        "Collecte",
        "Recueil, mise en forme, nettoyage des données. <em>La phase la moins maîtrisable.</em>"
      ],
      [
        "Analyse et rédaction",
        "Traitement, chapitres de résultats, discussion ; introduction et conclusion en dernier."
      ],
      [
        "Corrections et soutenance",
        "Relecture, mise en forme, dépôt, rapports, soutenance. <em>Jalon : soutenance.</em>"
      ]
    ],
    callout: "Posez un jalon de chapitre toutes les six à huit semaines. Une thèse échoue rarement sur un gros problème : elle échoue sur beaucoup de petits retards que personne ne mesure, parce que la première échéance réelle est dans trois ans.",
    customize: [
      "Passer en semestres si la thèse est prévue sur quatre ans.",
      "Ajouter les charges d’enseignement et les colloques : ils coûtent des semaines réelles.",
      "Poser l’avis éthique en antériorité de la collecte — c’est le délai le plus sous-estimé.",
      "Prévoir de la marge avant le dépôt : relecture et mise en forme prennent le double du prévu."
    ],
    tips: [
      "<strong>Écrivez tôt, pas à la fin.</strong> Un chapitre par phase vaut mieux qu’une année de rédaction.",
      "<strong>La collecte est la tâche la plus risquée.</strong> Prévoyez un second accès au terrain.",
      "<strong>Introduction en dernier.</strong> Elle ne s’écrit qu’une fois les résultats posés.",
      "<strong>Intégrez le temps de l’encadrement.</strong> Les retours prennent des semaines."
    ],
    faq: [
      [
        "Combien de temps dure une thèse ?",
        "Trois à cinq ans à temps plein selon la discipline et le financement. Les travaux empiriques se situent en haut de la fourchette."
      ],
      [
        "Quel niveau de détail ?",
        "Des phases sur les années, des tâches sur le semestre en cours. Au-delà, le plan est fictif et périme en quelques semaines."
      ],
      [
        "Que faire si la collecte échoue ?",
        "C’est pourquoi elle se place tôt. Constater au bout de deux ans que le terrain ne tient pas laisse encore des alternatives."
      ]
    ],
    related: [
      ["phd-research-gantt-chart", "Projet doctoral"],
      ["research", "Projet de recherche"],
      ["grant-proposal-gantt-chart", "Demande de financement"]
    ]
  },

  'home-renovation': {
    card: "Démolition, réseaux, cloisons, finitions — dans l’ordre qui évite les reprises.",
    h1: "Planning de rénovation d’un logement",
    metaTitle: "Planning de rénovation — modèle",
    metaDesc: "Modèle gratuit de planning de rénovation : démolition, réseaux, cloisons, revêtements et finitions, dans le bon ordre.",
    lead: "Un <strong>planning de rénovation</strong> vaut surtout par son ordre. Poser le parquet avant de refaire l’électricité, c’est le refaire deux fois — et l’essentiel des dépassements vient de là, pas des prix.",
    intro: "Six phases dans l’ordre qui évite les reprises :",
    phases: [
      [
        "Études et autorisations",
        "Relevé, plans, devis, déclaration préalable ou permis si la façade change."
      ],
      [
        "Démolition et gros œuvre",
        "Dépose, ouvertures, reprises de structure, évacuation."
      ],
      [
        "Réseaux",
        "Électricité, plomberie, chauffage, ventilation — avant toute fermeture. <em>Jalon : réseaux passés.</em>"
      ],
      ["Cloisons et supports", "Isolation, cloisons, ragréage, enduits, chapes."],
      [
        "Revêtements",
        "Carrelage, parquet, peinture, faïence — dans cet ordre, du sol vers les murs selon les cas."
      ],
      [
        "Finitions et réception",
        "Cuisine, sanitaires, menuiseries, nettoyage, levée des réserves. <em>Jalon : réception.</em>"
      ]
    ],
    callout: "Tout ce qui passe dans les murs passe avant qu’on les ferme. C’est la règle qui structure le planning : une gaine oubliée après la pose des cloisons se paie en saignées, en reprises d’enduit et en peinture refaite.",
    customize: [
      "Ajouter une ligne par pièce si vous rénovez pièce par pièce en restant sur place.",
      "Marquer les temps de séchage comme tâches visibles : chape, enduit, peinture.",
      "Poser les délais de livraison de cuisine et menuiseries en tâches — ils dépassent souvent deux mois.",
      "Prévoir 10 à 15 % de marge : une rénovation révèle toujours quelque chose."
    ],
    tips: [
      "<strong>Les réseaux avant les cloisons</strong>, toujours.",
      "<strong>Les temps de séchage sont des tâches</strong>, pas des retards.",
      "<strong>Commandez la cuisine tôt.</strong> Le délai dépasse souvent la durée du chantier.",
      "<strong>Gardez la réception séparée de la levée des réserves.</strong>"
    ],
    faq: [
      [
        "Combien de temps dure une rénovation ?",
        "De six à douze semaines pour un appartement courant, davantage si la structure ou les réseaux sont repris intégralement."
      ],
      [
        "Dans quel ordre procéder ?",
        "Démolition, réseaux, cloisons, revêtements, finitions. L’inverse conduit à refaire ce qui est déjà posé."
      ],
      [
        "Quelle marge prévoir ?",
        "Dix à quinze pour cent sur les délais. Une rénovation découvre presque toujours un imprévu derrière un mur."
      ]
    ],
    related: [
      ["construction", "Chantier"],
      ["office-relocation-project-plan", "Déménagement de bureaux"],
      ["restaurant-opening-timeline", "Ouverture de restaurant"]
    ]
  },

  'wedding-planning': {
    card: "Lieu, cérémonie, prestataires, invités et déroulé du jour J.",
    h1: "Rétroplanning de mariage (diagramme de Gantt)",
    metaTitle: "Rétroplanning de mariage — modèle",
    metaDesc: "Modèle gratuit de rétroplanning de mariage : lieu, cérémonie, prestataires, invitations, tenues et déroulé du jour J.",
    lead: "Un <strong>rétroplanning de mariage</strong> part d’une date fixe. Douze à dix-huit mois paraissent confortables — jusqu’à découvrir que les beaux lieux et les bons photographes se réservent deux ans à l’avance.",
    intro: "Six phases, de la date au lendemain :",
    phases: [
      [
        "Cadre",
        "Date, budget, nombre d’invités, style et lieu. <em>Jalon : lieu réservé.</em>"
      ],
      [
        "Cérémonie",
        "Dossier de mariage en mairie, pièces à fournir, cérémonie religieuse ou laïque, officiant."
      ],
      [
        "Prestataires",
        "Photographe, traiteur, musique, fleurs, gâteau, transport — par ordre de rareté."
      ],
      [
        "Invités et papeterie",
        "Save the date, invitations, réponses, plan de table, choix des menus. <em>Jalon : réponses complètes.</em>"
      ],
      [
        "Tenues et détails",
        "Robe, costume, essayages, alliances, décoration, cadeaux, essai coiffure."
      ],
      [
        "Dernière ligne droite et jour J",
        "Déroulé, confirmations, installation, mariage, rangement et restitutions."
      ]
    ],
    callout: "Le jour J mérite son propre planning horaire, distinct du rétroplanning annuel. L’arrivée des fleurs, la séance photo, le vin d’honneur et le service dépendent les uns des autres à la minute — un déroulé à la maille hebdomadaire ne sert à personne.",
    customize: [
      "Changer la date : tous les délais se recalent et les prestataires indisponibles apparaissent aussitôt.",
      "Une ligne par prestataire, avec acompte et solde en jalons.",
      "Poser la date limite de réponse en antériorité du plan de table et du nombre final au traiteur.",
      "Basculer le jour J en maille horaire, dans une section à part."
    ],
    tips: [
      "<strong>Lieu et photographe d’abord.</strong> Ce sont les plus vite réservés.",
      "<strong>Les réponses arrivent tard et incomplètes.</strong> Fixez la limite deux semaines avant le besoin traiteur.",
      "<strong>Comptez trois essayages</strong>, pas un.",
      "<strong>Planifiez le lendemain.</strong> Rangement et restitutions s’oublient dans presque tous les plans."
    ],
    faq: [
      [
        "Combien de temps à l’avance organiser un mariage ?",
        "Douze à dix-huit mois habituellement. Pour un lieu ou une saison précise, comptez deux ans."
      ],
      [
        "Qu’est-ce qui est sur le chemin critique ?",
        "Le lieu, la date de cérémonie et le photographe. Presque tout le reste s’ajuste."
      ],
      [
        "Quelle marge pour le jour J ?",
        "Au moins trente minutes entre les grands blocs. La journée prend toujours du retard, et la marge évite qu’il s’accumule."
      ]
    ],
    related: [
      ["event-planning", "Événement"],
      ["monthly", "Plan mensuel"],
      ["project-management", "Gestion de projet"]
    ]
  },

  'research': {
    card: "Demande, éthique, collecte, analyse, publication et obligations de rapport.",
    h1: "Diagramme de Gantt pour un projet de recherche",
    metaTitle: "Modèle de Gantt — projet de recherche",
    metaDesc: "Modèle gratuit pour un projet de recherche : demande de financement, éthique, collecte, analyse, publications et rapports.",
    lead: "Un <strong>planning de projet de recherche</strong> doit porter deux calendriers à la fois : le déroulé scientifique et les obligations de rapport du financeur. Le second n’est pas négociable et se retrouve régulièrement oublié.",
    intro: "Six lots de travail, tels qu’une demande de financement les attend :",
    phases: [
      [
        "Conception et demande",
        "Question, état de l’art, plan de travail, budget, dépôt. <em>Jalon : financement accordé.</em>"
      ],
      [
        "Montage du projet",
        "Recrutement, avis éthique, plan de gestion des données, conventions, infrastructure."
      ],
      [
        "Collecte",
        "Instruments, pré-test, accès au terrain, recueil — souvent la phase la plus longue."
      ],
      ["Analyse", "Traitement, analyse, validation et interprétation."],
      [
        "Publication",
        "Manuscrits, soumission, évaluation, révisions. <em>Comptez plusieurs cycles.</em>"
      ],
      [
        "Rapports et clôture",
        "Rapports intermédiaires, appels de fonds, justificatifs, archivage, rapport final."
      ]
    ],
    callout: "L’évaluation par les pairs est une tâche avec une durée, pas un événement. Entre la soumission et l’acceptation s’écoulent six à douze mois et un à trois cycles de révision — un plan qui s’arrête à la publication s’arrête trop tôt.",
    customize: [
      "Une ligne par lot de travail, calquée sur le découpage de la demande : le même plan sert alors de base aux rapports.",
      "Placer les échéances de rapport du financeur en jalons et planifier à rebours.",
      "Poser avis éthique et autorisation des données en antériorité de la collecte.",
      "Ajouter les lignes de personnel si les contrats sont à durée déterminée — c’est la contrainte la plus dure."
    ],
    tips: [
      "<strong>Le calendrier de la demande devient le plan du projet.</strong> Construisez-le pour qu’il tienne.",
      "<strong>Le recrutement prend du temps.</strong> Trois à six mois entre accord et poste pourvu.",
      "<strong>Les publications avancent en parallèle</strong> du projet, pas après.",
      "<strong>L’archivage est une tâche.</strong> Les financeurs l’exigent de plus en plus."
    ],
    faq: [
      [
        "Quel niveau de détail pour un plan de recherche ?",
        "Des lots sur toute la durée, des tâches sur les six mois à venir. Le reste sera de toute façon révisé."
      ],
      [
        "Comment planifier l’évaluation par les pairs ?",
        "Comme une tâche de six à douze mois, avec au moins un cycle de révision."
      ],
      [
        "Quelle est l’erreur la plus fréquente ?",
        "Démarrer la collecte trop tard et ne pas planifier du tout les obligations de rapport."
      ]
    ],
    related: [
      ["dissertation-gantt-chart", "Thèse"],
      ["grant-proposal-gantt-chart", "Demande de financement"],
      ["clinical-trial-gantt-chart", "Essai clinique"]
    ]
  },

  'content-calendar': {
    card: "Sujets, production, validations et publication, tous canaux confondus.",
    h1: "Calendrier éditorial en diagramme de Gantt",
    metaTitle: "Calendrier éditorial — modèle Gantt",
    metaDesc: "Modèle gratuit de calendrier éditorial : sujets, production, validation, publication et mise à jour des contenus.",
    lead: "Un <strong>calendrier éditorial</strong> en diagramme de Gantt montre ce qu’un tableau masque : le temps de production avant chaque date de publication. La date de bouclage n’est pas le jour de mise en ligne, c’est deux semaines avant.",
    intro: "Cinq phases récurrentes par publication :",
    phases: [
      [
        "Choix des sujets",
        "Recherche, mots-clés, conférence de rédaction, plan trimestriel. <em>Jalon : plan validé.</em>"
      ],
      [
        "Production",
        "Brief, texte, visuel, vidéo ou infographie — chaque format avec son propre délai."
      ],
      [
        "Validation",
        "Relecture, validation métier, validation juridique. <em>Le poste le plus sous-estimé.</em>"
      ],
      [
        "Publication",
        "Intégration, métadonnées, programmation, diffusion newsletter et réseaux."
      ],
      [
        "Bilan et mise à jour",
        "Audience, positions, retouches et actualisation des contenus anciens."
      ]
    ],
    callout: "Donnez à la validation sa propre barre. Dans la plupart des équipes, un texte terminé attend trois jours une signature — ce n’est pas du temps de production, c’est du temps d’attente, et il doit être visible.",
    customize: [
      "Une ligne par canal : blog, newsletter, LinkedIn, vidéo. Leurs délais diffèrent.",
      "Créer les formats récurrents en série et caler leur rythme dans le calendrier.",
      "Poser la date de bouclage en jalon par contenu, pas la date de publication.",
      "Placer les temps forts et l’actualité saisonnière en dates fixes et remonter à rebours."
    ],
    tips: [
      "<strong>Planifiez à rebours depuis la publication.</strong> C’est ainsi que le délai apparaît.",
      "<strong>Image et vidéo demandent plus de temps que le texte.</strong> Lancez-les en parallèle.",
      "<strong>La mise à jour est de la production.</strong> Reprendre un contenu existant rapporte souvent plus qu’en créer un.",
      "<strong>Gardez 20 % de libre</strong> pour ce qui n’était pas au plan trimestriel."
    ],
    faq: [
      [
        "À quelle échéance planifier un calendrier éditorial ?",
        "Un trimestre en sujets, quatre à six semaines en tâches concrètes. Au-delà, le plan périme plus vite qu’il ne sert."
      ],
      [
        "Pourquoi un Gantt plutôt qu’un tableau ?",
        "Parce qu’il montre le temps de production avant publication et révèle les semaines où trois contenus se percutent."
      ],
      [
        "Comment absorber l’actualité ?",
        "En gardant de la marge. Un calendrier rempli à 100 % casse à la première urgence."
      ]
    ],
    related: [
      ["marketing", "Campagne marketing"],
      ["monthly", "Plan mensuel"],
      ["product-launch", "Lancement produit"]
    ]
  },

  '30-60-90-day-plan': {
    card: "Prise de poste en trois étapes : comprendre, contribuer, livrer.",
    h1: "Plan 30-60-90 jours en diagramme de Gantt",
    metaTitle: "Plan 30-60-90 jours — modèle",
    metaDesc: "Modèle gratuit de plan 30-60-90 jours : comprendre, contribuer puis prendre la responsabilité, avec des jalons de bilan.",
    lead: "Un <strong>plan 30-60-90 jours</strong> répond à une question posée à chaque prise de poste : que faites-vous en premier ? En diagramme de Gantt, il montre aussi ce qui avance en parallèle et ce qui s’enchaîne.",
    intro: "Trois étapes de nature très différente :",
    phases: [
      [
        "Jour 1 à 30 — comprendre",
        "Intégration, entretiens avec l’équipe et les interlocuteurs, produit, clients, chiffres, processus. <em>Jalon : état des lieux présenté.</em>"
      ],
      [
        "Jour 31 à 60 — contribuer",
        "Premiers dossiers, reprise de sujets en cours, propositions d’amélioration, premiers résultats visibles."
      ],
      [
        "Jour 61 à 90 — livrer",
        "Sujets en propre, un chantier mené à terme, plan pour les six mois suivants. <em>Jalon : entretien de fin de période d’essai.</em>"
      ]
    ],
    callout: "Résistez à l’envie de changer quelque chose dans les trente premiers jours. L’erreur la plus fréquente des nouveaux managers est une réorganisation décidée avant l’état des lieux — elle coûte plus de confiance que le résultat rapide n’en rapporte.",
    customize: [
      "Trois à cinq objectifs par étape plutôt qu’une longue liste : on n’accomplit pas davantage en trente jours.",
      "Placer les entretiens avec les interlocuteurs clés en tâches, dans les deux premières semaines.",
      "Poser les points à 30, 60 et 90 jours en jalons.",
      "Étendre à 100 jours si la période d’essai est de six mois."
    ],
    tips: [
      "<strong>Écouter est une tâche.</strong> Planifiez les entretiens au lieu de les faire au fil de l’eau.",
      "<strong>Un résultat visible avant le jour 60</strong> pèse plus que cinq chantiers entamés.",
      "<strong>Notez ce qui vous surprend la première semaine.</strong> Au bout de deux mois, vous ne le verrez plus.",
      "<strong>Partagez le plan avec votre responsable.</strong> Un plan connu de vous seul ne mesure rien."
    ],
    faq: [
      [
        "À qui s’adresse un plan 30-60-90 jours ?",
        "Aux prises de poste, aux changements de responsabilité et à la préparation d’un entretien où la question est posée."
      ],
      [
        "Quel niveau de précision pour les objectifs ?",
        "Assez précis pour qu’un tiers puisse juger s’ils sont atteints. « Connaître l’équipe » n’est pas un objectif, « avoir rencontré les douze membres » en est un."
      ],
      [
        "Que faire si la réalité dépasse le plan ?",
        "L’ajuster. Sa valeur est dans le cadrage des premières semaines, pas dans le respect d’une barre."
      ]
    ],
    related: [
      ["employee-onboarding", "Intégration RH"],
      ["project-management", "Gestion de projet"],
      ["monthly", "Plan mensuel"]
    ]
  },

  'product-roadmap': {
    card: "Thèmes, versions et dépendances par trimestre plutôt que par semaine.",
    h1: "Feuille de route produit en diagramme de Gantt",
    metaTitle: "Feuille de route produit — modèle",
    metaDesc: "Modèle gratuit de feuille de route produit : thèmes, initiatives, versions, dépendances et planification trimestrielle.",
    lead: "Une <strong>feuille de route produit</strong> n’est pas un plan de sprint. Elle travaille en trimestres et en thèmes, pas en tickets — et son intérêt réel est de montrer les dépendances entre initiatives avant qu’elles ne deviennent des problèmes.",
    intro: "Quatre niveaux qui structurent une roadmap :",
    phases: [
      [
        "Thèmes",
        "Les deux à quatre axes stratégiques de l’année. Tout le reste s’y rattache."
      ],
      [
        "Initiatives",
        "Les chantiers par thème, avec une durée approximative en semaines et un résultat clair. <em>Les vraies barres de la roadmap.</em>"
      ],
      [
        "Versions",
        "Livraisons datées, bêtas et annonces publiques, posées en jalons."
      ],
      [
        "Dépendances et prérequis",
        "Travaux de plateforme, migrations, partenaires externes — tout ce qui bloque d’autres initiatives."
      ]
    ],
    callout: "Ne datez pas au jour près les troisième et quatrième trimestres. Une roadmap qui promet des dates précises à douze mois sera soit rompue, soit tenue en réduisant discrètement le périmètre. Des barres approximatives sont plus honnêtes et tiennent plus longtemps.",
    customize: [
      "Un groupe par thème, avec ses initiatives en dessous.",
      "Passer en maille trimestrielle — la semaine suggère une précision qui n’existe pas.",
      "Relier les initiatives entre elles : les dépendances sont la première cause de décalage.",
      "Garder une ligne pour la plateforme et la maintenance, sinon elle disparaît du plan tout en consommant du temps."
    ],
    tips: [
      "<strong>Pas plus de quatre thèmes.</strong> Une roadmap à douze priorités n’en a aucune.",
      "<strong>Restez grossier sur les trimestres lointains.</strong> Une précision sans fondement est une promesse, pas un plan.",
      "<strong>Affichez les dépendances.</strong> Elles expliquent les décalages avant qu’on ne les réclame.",
      "<strong>Réservez 20 % de capacité</strong> pour la maintenance et les correctifs."
    ],
    faq: [
      [
        "Quelle différence avec un plan de sprint ?",
        "La roadmap travaille en trimestres et en thèmes, le sprint en jours et en tickets. Ils répondent à des questions différentes."
      ],
      [
        "Faut-il des dates sur une roadmap ?",
        "Pour le trimestre en cours oui, pour les suivants seulement des périodes. Le reste est un engagement sans base."
      ],
      [
        "À quelle fréquence la mettre à jour ?",
        "Une révision de fond par trimestre, des ajustements mensuels."
      ]
    ],
    related: [
      ["sprint", "Plan de sprint"],
      ["software-development", "Projet logiciel"],
      ["product-launch", "Lancement produit"]
    ]
  },

  'annual': {
    card: "Une année sur une page : trimestres, initiatives et échéances fixes.",
    h1: "Plan annuel en diagramme de Gantt",
    metaTitle: "Plan annuel — modèle Gantt",
    metaDesc: "Modèle gratuit de plan annuel : trimestres, initiatives, échéances fixes et jalons, sur une seule page.",
    lead: "Un <strong>plan annuel</strong> tient douze mois sur une page. Il travaille en trimestres et en initiatives, pas en tâches — dès que des lots de travail apparaissent, ce n’est plus un plan annuel mais un planning illisible.",
    intro: "Quatre trimestres et les blocs qui portent l’année :",
    phases: [
      [
        "T1 — lancement et arbitrages",
        "Objectifs, validation budgétaire, poursuite des chantiers en cours. <em>Jalon : plan adopté.</em>"
      ],
      [
        "T2 — exécution",
        "Les grandes initiatives démarrent ; premiers résultats et corrections de trajectoire."
      ],
      [
        "T3 — mi-parcours",
        "Bilan semestriel, ajustement budgétaire, repriorisation pour la fin d’année."
      ],
      [
        "T4 — clôture et préparation",
        "Clôture, bilan, préparation de l’année suivante. <em>Jalon : plan de l’année suivante prêt.</em>"
      ]
    ],
    callout: "Restez au niveau des initiatives. Un plan annuel de 200 tâches n’est plus tenu en mars et plus cru en juin. Douze à vingt barres suffisent à raconter une année.",
    customize: [
      "Passer en maille trimestrielle ou mensuelle — la semaine est trop fine pour une année.",
      "Poser d’abord les dates fixes : salons, clôtures, pics saisonniers, congés.",
      "Ajouter une ligne par direction si le plan est transverse.",
      "Marquer les passages de trimestre en jalons : c’est là qu’on réoriente."
    ],
    tips: [
      "<strong>Pas plus de cinq grandes initiatives.</strong> Aucune organisation n’en mène davantage en un an.",
      "<strong>Les dates fixes forment le cadre.</strong> Le reste s’y adapte.",
      "<strong>Restez vague sur le T4.</strong> Ce que vous fixez en janvier pour octobre se vérifie rarement.",
      "<strong>Révisez chaque trimestre</strong>, pas une fois par an."
    ],
    faq: [
      [
        "Quel niveau de détail pour un plan annuel ?",
        "Le niveau initiative : douze à vingt barres. Les tâches relèvent du plan trimestriel ou mensuel."
      ],
      [
        "Quand construire le plan annuel ?",
        "Au quatrième trimestre de l’année précédente, une fois le budget arrêté. Sans budget, c’est une liste de souhaits."
      ],
      [
        "À quelle fréquence le réviser ?",
        "Une fois par trimestre en profondeur. Plus souvent n’apporte rien à cette maille."
      ]
    ],
    related: [
      ["monthly", "Plan mensuel"],
      ["product-roadmap", "Feuille de route produit"],
      ["project-management", "Gestion de projet"]
    ]
  },

  'sprint': {
    card: "Deux semaines, de la planification à la rétrospective.",
    h1: "Plan de sprint en diagramme de Gantt",
    metaTitle: "Plan de sprint — modèle Gantt",
    metaDesc: "Modèle gratuit de plan de sprint : planification, développement, tests, revue et rétrospective sur deux semaines.",
    lead: "Un <strong>plan de sprint</strong> au format Gantt ne remplace pas le tableau — il montre ce que le tableau ne montre pas : quelles tâches dépendent les unes des autres, et à quel moment les deux semaines deviennent réellement serrées.",
    intro: "Un sprint de deux semaines avec ses rendez-vous fixes :",
    phases: [
      [
        "Planification (jour 1)",
        "Objectif, estimation et engagement sur les éléments du backlog. <em>Jalon : objectif de sprint posé.</em>"
      ],
      [
        "Développement (jours 1 à 8)",
        "Réalisation avec point quotidien ; dépendances entre tâches rendues visibles."
      ],
      [
        "Intégration et tests (jours 7 à 9)",
        "Assemblage, tests, corrections — volontairement en recouvrement avec le développement."
      ],
      [
        "Revue et rétrospective (jour 10)",
        "Démonstration, retours, amélioration du fonctionnement. <em>Jalon : incrément accepté.</em>"
      ]
    ],
    callout: "Ne remplissez pas les deux derniers jours. Chaque sprint apporte son imprévu, et un sprint sans réserve se termine régulièrement avec des tâches inachevées reportées sur le suivant — ce qui détruit la prévisibilité des deux.",
    customize: [
      "Ajuster la durée si vos sprints font une semaine ou trois.",
      "Une ligne par personne si vous voulez vérifier la charge.",
      "Relier les éléments de backlog entre eux : c’est précisément ce qui justifie le format Gantt ici.",
      "Placer les rendez-vous récurrents en série : point quotidien, affinage."
    ],
    tips: [
      "<strong>L’objectif de sprint prime sur la liste.</strong> C’est lui qui dit ce qui peut sauter.",
      "<strong>Les tests avancent en parallèle</strong>, pas à la fin.",
      "<strong>Gardez 15 à 20 % de capacité libre.</strong>",
      "<strong>Le tableau reste l’outil du quotidien</strong> ; ce plan sert aux dépendances et aux échanges."
    ],
    faq: [
      [
        "Un Gantt est-il compatible avec Scrum ?",
        "Pour le sprint lui-même, le tableau est meilleur. Le Gantt aide sur les dépendances, la planification des versions et la coordination avec les équipes non agiles."
      ],
      [
        "Quelle durée de sprint ?",
        "Une à quatre semaines, deux le plus souvent. Plus court augmente la part de cérémonies, plus long retarde les retours."
      ],
      [
        "Que faire des tâches inachevées ?",
        "Les remettre au backlog et les repriorisier, plutôt que de les basculer automatiquement au sprint suivant."
      ]
    ],
    related: [
      ["agile", "Projet agile"],
      ["software-development", "Projet logiciel"],
      ["product-roadmap", "Feuille de route produit"]
    ]
  },

  'wind-farm-construction-schedule': {
    card: "Autorisations, fondations, mâts, raccordement et mise en service.",
    h1: "Planning de construction d’un parc éolien",
    metaTitle: "Planning parc éolien — modèle",
    metaDesc: "Modèle gratuit de planning pour un parc éolien : développement, autorisations, fondations, montage, raccordement, mise en service.",
    lead: "Un <strong>planning de parc éolien</strong> est gouverné par trois éléments extérieurs au chantier : l’autorisation, le raccordement et la disponibilité des grues de levage.",
    intro: "Six phases, du foncier au premier kilowattheure :",
    phases: [
      [
        "Développement",
        "Foncier, mesure de vent, productible, demande de raccordement. <em>Jalon : proposition de raccordement.</em>"
      ],
      [
        "Autorisations",
        "Autorisation environnementale, étude d’impact, espèces protégées, acoustique — le poste le plus long."
      ],
      [
        "Achats et financement",
        "Commande des éoliennes, logistique de levage, choix de l’EPC. <em>Jalon : bouclage financier.</em>"
      ],
      [
        "Infrastructures",
        "Accès, plateformes de grutage, tranchées, poste de livraison — prêts avant la livraison des machines."
      ],
      [
        "Montage",
        "Fondations, séchage, sections de mât, nacelle, pales. <em>Dépendant du vent et de la grue.</em>"
      ],
      [
        "Mise en service",
        "Raccordement électrique, essais, période de test, réception. <em>Jalon : première injection.</em>"
      ]
    ],
    callout: "Le montage dépend du vent, pas seulement de la météo. Au-delà d’environ 8 à 12 m/s à hauteur de moyeu, la grue s’arrête — sur un site choisi précisément parce qu’il y vente. Comptez ces journées d’arrêt au lieu de les traiter comme du retard.",
    customize: [
      "Une ligne par éolienne : le montage se fait successivement, la grue se déplaçant de l’une à l’autre.",
      "Représenter le séchage des fondations comme une tâche (28 jours), pas comme un décalage caché.",
      "Déclarer les périodes de nidification indisponibles dans le calendrier.",
      "Poser les dates de grue en contraintes fixes : elles se réservent des mois à l’avance."
    ],
    tips: [
      "<strong>La grue dicte l’ordre.</strong> Planifiez les machines selon son itinéraire.",
      "<strong>Les accès sont sous-estimés.</strong> Les convois exceptionnels imposent rayons et portance.",
      "<strong>Autorisation et raccordement avancent ensemble</strong>, mais un seul fixe la date.",
      "<strong>L’hiver n’est pas perdu d’office</strong> : fondations oui, levage par gel souvent non."
    ],
    faq: [
      [
        "Combien de temps pour construire un parc éolien ?",
        "Le chantier dure six à douze mois. Du foncier à l’injection, comptez trois à sept ans."
      ],
      [
        "Qu’est-ce qui est sur le chemin critique ?",
        "Presque toujours l’autorisation, puis le raccordement. Le montage est la phase la plus courte."
      ],
      [
        "Pourquoi le levage s’arrête-t-il par vent fort ?",
        "Pales et nacelles ne peuvent être levées en sécurité au-delà d’environ 8 à 12 m/s. C’est un paramètre de planification, pas un incident."
      ]
    ],
    related: [
      ["solar-farm-construction-schedule", "Centrale solaire"],
      ["construction", "Chantier"],
      ["ev-charging-installation-schedule", "Bornes de recharge"]
    ]
  },

  'ev-charging-installation-schedule': {
    card: "Site, raccordement, génie civil, pose et conformité métrologique.",
    h1: "Planning d’installation de bornes de recharge",
    metaTitle: "Bornes de recharge — planning",
    metaDesc: "Modèle gratuit de planning pour des bornes de recharge : site, raccordement, génie civil, pose, conformité et mise en service.",
    lead: "Un <strong>planning de bornes de recharge</strong> échoue rarement sur la technique. Il échoue sur le raccordement et sur la conformité métrologique — deux tâches à démarrer tôt et qui ne dépendent pas de l’installateur.",
    intro: "Six phases, de l’étude de site à la mise en service :",
    phases: [
      [
        "Site et dimensionnement",
        "Flux, places, puissance nécessaire, nombre de points de charge, modèle d’exploitation."
      ],
      [
        "Raccordement",
        "Demande au gestionnaire de réseau, accord de puissance, poste de transformation éventuel. <em>Le délai le plus long.</em>"
      ],
      [
        "Autorisations et subventions",
        "Autorisation d’urbanisme, règles de stationnement, dossier de subvention."
      ],
      [
        "Génie civil",
        "Tranchées, massifs, fourreaux, marquage au sol et signalisation."
      ],
      [
        "Pose et raccordement électrique",
        "Installation des bornes, raccordement, pilotage de la charge, connexion à la supervision."
      ],
      [
        "Conformité et mise en service",
        "Vérification électrique, conformité métrologique, itinérance, charge de test. <em>Jalon : ouvert au public.</em>"
      ]
    ],
    callout: "Le raccordement se demande au tout début, pas pendant les travaux. Entre la demande et l’accord de puissance s’écoulent trois à dix-huit mois selon le gestionnaire et la puissance — davantage que tout le reste du projet réuni.",
    customize: [
      "Un groupe de lignes par site si vous équipez plusieurs emplacements en parallèle.",
      "Poser les échéances de subvention en dates fixes : elles expirent et ne se décalent pas.",
      "Traiter la conformité métrologique comme une tâche à part : sans elle, pas de facturation.",
      "Donner de la marge au génie civil en période de gel."
    ],
    tips: [
      "<strong>Demandez le raccordement avant même de figer le site.</strong>",
      "<strong>Dimensionnez juste.</strong> Le surdimensionnement renchérit fortement le raccordement.",
      "<strong>La supervision et l’itinérance demandent du délai</strong>, pas le jour de la mise en service.",
      "<strong>Les subventions imposent des dates.</strong> Lisez-les avant de bâtir le plan."
    ],
    faq: [
      [
        "Combien de temps pour installer des bornes de recharge ?",
        "Les travaux durent quelques semaines. Avec le raccordement et les autorisations, comptez six à dix-huit mois."
      ],
      [
        "Quelle est la cause la plus fréquente de retard ?",
        "Le raccordement, demandé trop tard et doté du délai le moins maîtrisable."
      ],
      [
        "Que signifie la conformité métrologique ?",
        "Les bornes doivent mesurer l’énergie délivrée de façon opposable pour permettre une facturation au kWh. Sans cette validation, la vente n’est pas autorisée."
      ]
    ],
    related: [
      ["solar-farm-construction-schedule", "Centrale solaire"],
      ["construction", "Chantier"],
      ["office-relocation-project-plan", "Déménagement de bureaux"]
    ]
  },

  'mining-project-schedule': {
    card: "Exploration, études de faisabilité, autorisations, développement et production.",
    h1: "Planning d’un projet minier",
    metaTitle: "Projet minier — modèle de planning",
    metaDesc: "Modèle gratuit de planning pour un projet minier : exploration, études de faisabilité, autorisations, développement, production.",
    lead: "Un <strong>projet minier</strong> se déroule sur des décennies et se planifie par niveaux d’étude. Chaque niveau affine l’estimation et décide si l’on continue — le plan est donc une chaîne de points de décision, pas une séquence de travaux continue.",
    intro: "Six niveaux, du premier sondage à la production :",
    phases: [
      [
        "Exploration",
        "Géophysique, campagne de sondages, modèle de ressources. <em>Jalon : ressource classifiée.</em>"
      ],
      [
        "Étude de cadrage et préfaisabilité",
        "Première approche économique, méthode d’exploitation, estimation grossière."
      ],
      [
        "Étude de faisabilité",
        "Ingénierie détaillée, réserves, estimation resserrée. <em>Jalon : décision d’investissement.</em>"
      ],
      [
        "Autorisations et concertation",
        "Étude d’impact, droit de l’eau, permis d’exploitation, accords avec riverains et autorités."
      ],
      [
        "Développement",
        "Accès, énergie, eau, usine de traitement, bassins, base vie."
      ],
      [
        "Démarrage et production",
        "Découverture, essais, montée en régime. <em>Jalon : production commerciale.</em>"
      ]
    ],
    callout: "Autorisations et acceptabilité sociale ne sont pas un chantier annexe. Elles sont la cause réelle de l’échec de la plupart des projets miniers abandonnés — pas la géologie, pas la technique. Planifiez-les avec le même sérieux que l’usine de traitement.",
    customize: [
      "Passer en années plutôt qu’en mois : un projet minier couvre une décennie.",
      "Poser les niveaux d’étude en jalons avec décision d’arrêt possible.",
      "Rendre visibles les longs délais de broyeurs et concasseurs comme tâches propres.",
      "Faire courir les volets autorisations et concertation en parallèle de la technique, pas après."
    ],
    tips: [
      "<strong>Chaque niveau d’étude peut arrêter le projet.</strong> Un plan sans point d’arrêt n’est pas un plan.",
      "<strong>La fourchette de coût dépend du niveau.</strong> Cadrage ±35 %, faisabilité ±15 %.",
      "<strong>L’eau est souvent la contrainte</strong>, pas le minerai.",
      "<strong>La montée en régime dure plus longtemps que prévu</strong> : douze à vingt-quatre mois."
    ],
    faq: [
      [
        "Combien de temps entre la découverte et la production ?",
        "Dix à vingt ans selon le minerai et le cadre réglementaire."
      ],
      [
        "Que sont les points de décision entre études ?",
        "Des jalons où l’on décide de poursuivre, d’ajuster ou d’arrêter, à la lumière de l’estimation affinée."
      ],
      [
        "Qu’est-ce qui retarde le plus souvent ?",
        "Les procédures d’autorisation et l’opposition locale, puis le financement. Les raisons techniques viennent après."
      ]
    ],
    related: [
      ["refinery-turnaround-schedule", "Grand arrêt"],
      ["construction", "Chantier"],
      ["shipbuilding-project-schedule", "Construction navale"]
    ]
  },

  'shipbuilding-project-schedule': {
    card: "Conception, blocs, armement, essais en mer et livraison.",
    h1: "Planning de construction navale",
    metaTitle: "Construction navale — planning",
    metaDesc: "Modèle gratuit de planning de construction navale : conception, blocs, prémontage, armement, essais en mer et livraison.",
    lead: "Un <strong>projet de construction navale</strong> ne se planifie pas par espaces mais par blocs. Le navire naît en tronçons construits en parallèle puis assemblés — et c’est l’ordre de ces blocs qui constitue le vrai planning.",
    intro: "Six phases, du contrat à la livraison :",
    phases: [
      [
        "Contrat et conception de base",
        "Spécification, société de classification, plan général, dimensions principales. <em>Jalon : gel de la conception.</em>"
      ],
      [
        "Études de détail et achats",
        "Plans de fabrication, commandes, moteur principal et gros équipements à long délai."
      ],
      [
        "Fabrication des blocs",
        "Découpe, panneaux, blocs, prééquipement — plus il est précoce, moins il coûte."
      ],
      [
        "Assemblage",
        "Assemblage des blocs, pose de quille, mise à flot. <em>Jalon : navire à flot.</em>"
      ],
      [
        "Armement et essais",
        "Raccordement des systèmes, aménagements, essais à quai."
      ],
      [
        "Essais en mer et livraison",
        "Essais, levée des réserves, réception par la classification. <em>Jalon : livraison à l’armateur.</em>"
      ]
    ],
    callout: "Le prééquipement en bloc coûte une fraction de l’équipement dans un navire terminé. Ce qui n’est posé qu’après assemblage doit passer par des accès étroits, en espace confiné et souvent au-dessus de la tête — le taux de prééquipement est le levier le plus important de tout le planning.",
    customize: [
      "Une ligne par bloc : ce sont les vraies unités de planification.",
      "Traiter les délais du moteur, de l’hélice et du réducteur en tâches propres — un à deux ans.",
      "Poser les visites de la société de classification en dates fixes.",
      "Vérifier l’occupation de la cale et des quais comme une ressource si plusieurs navires sont en cours."
    ],
    tips: [
      "<strong>Le gel de conception est le jalon décisif.</strong> Les modifications ultérieures coûtent un multiple.",
      "<strong>La cale est la ressource la plus rare.</strong> C’est elle qui fixe l’ordre.",
      "<strong>Prévoyez la levée des réserves après les essais.</strong> Elle survient toujours.",
      "<strong>Commandez les longs délais en premier</strong>, souvent avant la fin des études de détail."
    ],
    faq: [
      [
        "Combien de temps dure une construction navale ?",
        "Douze à trente-cinq mois après contrat selon le type et la taille, davantage pour les navires spécialisés."
      ],
      [
        "Qu’est-ce que le prééquipement ?",
        "La pose des tuyauteries, câbles et équipements dans le bloc avant son assemblage — bien moins coûteuse qu’ensuite."
      ],
      [
        "Qu’est-ce qui est sur le chemin critique ?",
        "Le plus souvent le moteur principal et les gros composants à long délai, puis l’occupation de la cale."
      ]
    ],
    related: [
      ["mining-project-schedule", "Projet minier"],
      ["construction", "Chantier"],
      ["refinery-turnaround-schedule", "Grand arrêt"]
    ]
  },

  'apparel-production-calendar': {
    card: "De la collection aux prototypes, aux commandes puis à la livraison.",
    h1: "Calendrier de production pour la mode et l’habillement",
    metaTitle: "Calendrier de production — mode",
    metaDesc: "Modèle gratuit de calendrier de production textile : collection, prototypes, commandes, matières, fabrication et livraison.",
    lead: "Un <strong>calendrier de production textile</strong> se calcule à rebours depuis la date de livraison aux magasins. Une collection qui rate sa fenêtre ne se vend pas plus tard — elle se démarque.",
    intro: "Six phases par saison :",
    phases: [
      [
        "Construction de la collection",
        "Tendances, plan de gamme, prix, carte de coloris. <em>Jalon : collection validée.</em>"
      ],
      [
        "Design et prototypes",
        "Croquis, patronage, prototypes, corrections d’essayage — plusieurs cycles sont normaux."
      ],
      [
        "Échantillons et prise de commandes",
        "Collection de vente, showroom ou salon, enregistrement des commandes. <em>Jalon : clôture des commandes.</em>"
      ],
      [
        "Achat des matières",
        "Tissus, fournitures, étiquettes — les délais les plus longs de toute la chaîne."
      ],
      ["Production", "Coupe, confection, finition, contrôle qualité en usine."],
      [
        "Expédition et livraison",
        "Transport, douane, réception, répartition en magasin. <em>Jalon : en boutique.</em>"
      ]
    ],
    callout: "L’achat des tissus démarre avant la clôture des commandes, pas après. Commander ensuite fait perdre six à dix semaines de délai et fait rater la fenêtre commerciale. Une part des matières s’achète donc sur prévision — avec le risque que cela comporte.",
    customize: [
      "Un groupe de lignes par collection : printemps-été et automne-hiver se chevauchent.",
      "Traiter le transport comme une tâche : quatre à six semaines par mer, quelques jours par air.",
      "Déclarer le Nouvel An chinois et les congés d’usine comme périodes indisponibles.",
      "Prévoir un nombre réaliste de cycles d’essayage — généralement deux à trois."
    ],
    tips: [
      "<strong>Calculez à rebours depuis la livraison.</strong> La fenêtre commerciale ne se négocie pas.",
      "<strong>Le tissu est le plus long délai</strong>, pas la confection.",
      "<strong>Intégrez les congés d’usine.</strong> Le Nouvel An chinois arrête la production une à deux semaines.",
      "<strong>Placez la marge avant l’expédition</strong>, pas après : la date de départ est fixe."
    ],
    faq: [
      [
        "Combien de temps dure un cycle de production textile ?",
        "De la construction de la collection à la livraison, neuf à dix-huit mois selon le segment."
      ],
      [
        "Pourquoi acheter le tissu avant la clôture des commandes ?",
        "Parce que le délai ferait sinon rater la fenêtre. Une part est achetée sur prévision, avec un risque assumé."
      ],
      [
        "Combien de cycles d’essayage prévoir ?",
        "Deux à trois. En prévoir un seul est irréaliste."
      ]
    ],
    related: [
      ["content-calendar", "Calendrier éditorial"],
      ["product-launch", "Lancement produit"],
      ["annual", "Plan annuel"]
    ]
  },

  'phd-research-gantt-chart': {
    card: "Projet doctoral sur trois à quatre ans, avec jalons d’étape.",
    h1: "Diagramme de Gantt pour un projet doctoral",
    metaTitle: "Planning doctoral — modèle Gantt",
    metaDesc: "Modèle gratuit de planning doctoral : projet, littérature, méthode, collecte, publications, enseignement et soutenance.",
    lead: "Un <strong>planning doctoral</strong> se distingue du planning de thèse en ce qu’il contient plus que le manuscrit : enseignement, colloques, publications et financements y figurent et coûtent des mois réels.",
    intro: "Six volets sur trois à quatre ans :",
    phases: [
      [
        "Année 1 — fondations",
        "Projet de recherche, convention d’encadrement, base bibliographique, formation méthodologique. <em>Jalon : inscription.</em>"
      ],
      [
        "Années 1 à 2 — protocole",
        "Design de recherche, avis éthique, instruments, pré-test et accès au terrain."
      ],
      [
        "Années 2 à 3 — collecte et analyse",
        "Recueil, mise en forme, analyse. <em>La phase la plus risquée.</em>"
      ],
      [
        "En continu — publications",
        "Communications et articles ; cœur du travail si la thèse est sur articles."
      ],
      [
        "En continu — enseignement et charges",
        "Service d’enseignement, commissions, encadrement de mémoires — prévisible et chronophage."
      ],
      [
        "Années 3 à 4 — achèvement",
        "Assemblage, dépôt, rapports, soutenance. <em>Jalon : soutenance.</em>"
      ]
    ],
    callout: "Entre le dépôt et la soutenance s’écoulent des mois, pas des semaines. L’expertise prend trois à six mois dans la plupart des écoles doctorales — un plan qui s’arrête au dépôt s’arrête un semestre trop tôt.",
    customize: [
      "Passer en semestres : la semaine n’a aucun sens sur quatre ans.",
      "Pour une thèse sur articles, un groupe de lignes par article avec soumission et révision.",
      "Inscrire le service d’enseignement comme bloc récurrent, pas comme note de bas de page.",
      "Faire figurer la durée du contrat et du financement comme une limite dure."
    ],
    tips: [
      "<strong>Publiez tôt.</strong> L’évaluation prend plus de temps que tout planning ne le prévoit.",
      "<strong>La collecte est la phase la plus risquée.</strong> Gardez un accès de secours.",
      "<strong>L’enseignement consomme un tiers du temps</strong> si vous ne le bornez pas.",
      "<strong>Intégrez le temps d’expertise</strong> : il échappe à votre contrôle."
    ],
    faq: [
      [
        "Combien de temps dure un doctorat ?",
        "Trois à cinq ans selon la discipline, le financement et la charge d’enseignement."
      ],
      [
        "Monographie ou thèse sur articles ?",
        "La thèse sur articles répartit le risque et produit des résultats visibles plus tôt, mais dépend davantage des délais d’évaluation."
      ],
      [
        "Que se passe-t-il après le dépôt ?",
        "L’expertise par les rapporteurs, puis la soutenance. Trois à six mois sont habituels."
      ]
    ],
    related: [
      ["dissertation-gantt-chart", "Thèse"],
      ["research", "Projet de recherche"],
      ["grant-proposal-gantt-chart", "Demande de financement"]
    ]
  },

  'grant-proposal-gantt-chart': {
    card: "Plan de travail pour un dossier : lots, jalons et livrables.",
    h1: "Diagramme de Gantt pour une demande de financement",
    metaTitle: "Demande de financement — plan",
    metaDesc: "Modèle gratuit de plan de travail pour une demande de financement : lots de travail, jalons, livrables et rapports.",
    lead: "Presque toute <strong>demande de financement</strong> exige un plan de travail sous forme de diagramme. Ce n’est pas une formalité : les évaluateurs y lisent si le projet a été pensé — et après attribution, c’est sur cette base que l’on rend compte.",
    intro: "La structure attendue par la plupart des programmes :",
    phases: [
      [
        "Lot 1 — coordination",
        "Pilotage, rapports, appels de fonds. Court sur toute la durée."
      ],
      [
        "Lot 2 — conception et préparation",
        "État de l’art, protocole, éthique et données personnelles, recrutement."
      ],
      [
        "Lot 3 — réalisation",
        "Le cœur scientifique, généralement découpé en sous-lots."
      ],
      [
        "Lot 4 — analyse",
        "Traitement, validation, interprétation. <em>Jalon : résultats disponibles.</em>"
      ],
      [
        "Lot 5 — valorisation",
        "Publications, communication, archivage des données."
      ],
      [
        "Obligations de rapport",
        "Rapport intermédiaire, justificatifs, rapport final. <em>Dates imposées par le financeur.</em>"
      ]
    ],
    callout: "Numérotez lots, jalons et livrables de façon continue et reprenez exactement les mêmes numéros dans le corps du dossier. Les évaluateurs font des allers-retours entre le texte et le diagramme ; si les appellations divergent, le dossier paraît inabouti.",
    customize: [
      "Caler la structure des lots sur les exigences du programme : elles varient nettement.",
      "Inscrire les livrables en jalons avec numéro et mois (L1, M12).",
      "Raisonner en mois de projet plutôt qu’en dates : la date de démarrage est inconnue au dépôt.",
      "Pour un projet collaboratif, une ligne par partenaire et par lot."
    ],
    tips: [
      "<strong>Planifiez en mois de projet</strong>, M1 à M36, pas en dates calendaires.",
      "<strong>Un jalon doit être vérifiable.</strong> « Avancement réalisé » n’en est pas un.",
      "<strong>La coordination est un lot à part entière</strong>, avec sa charge.",
      "<strong>Prévoyez le temps de démarrage.</strong> Des mois séparent l’attribution du poste pourvu."
    ],
    faq: [
      [
        "Comment présenter le plan de travail dans un dossier ?",
        "En diagramme sur des mois de projet, avec des lots, jalons et livrables numérotés, cohérents avec le texte."
      ],
      [
        "Pourquoi des mois de projet plutôt que des dates ?",
        "Parce que la date d’attribution est inconnue. M1 à M36 reste valable quel que soit le démarrage."
      ],
      [
        "Combien de lots de travail ?",
        "Quatre à sept. Davantage devient illisible, moins paraît peu réfléchi."
      ]
    ],
    related: [
      ["research", "Projet de recherche"],
      ["phd-research-gantt-chart", "Projet doctoral"],
      ["clinical-trial-gantt-chart", "Essai clinique"]
    ]
  },

  'erp-implementation-schedule': {
    card: "Analyse, paramétrage, reprise de données, tests, formation et bascule.",
    h1: "Planning de déploiement d’un ERP",
    metaTitle: "Déploiement ERP — planning type",
    metaDesc: "Modèle gratuit de planning de déploiement ERP : analyse, conception, paramétrage, reprise de données, tests, formation, bascule.",
    lead: "Un <strong>déploiement ERP</strong> n’est pas un projet informatique avec participation des métiers : c’est un projet d’organisation avec une part informatique. Le planning achoppe presque toujours aux deux mêmes endroits — la reprise de données et la disponibilité des métiers.",
    intro: "Sept phases jusqu’à l’exploitation stabilisée :",
    phases: [
      [
        "Analyse et cadrage",
        "Processus existants, exigences, choix de la solution. <em>Jalon : solution retenue.</em>"
      ],
      [
        "Conception",
        "Processus cibles, analyse d’écarts, arbitrage entre standard et spécifique."
      ],
      [
        "Paramétrage et développements",
        "Configuration, développements spécifiques, interfaces avec les applications tierces."
      ],
      [
        "Reprise de données",
        "Nettoyage, correspondances, reprises à blanc. <em>Plusieurs passages, jamais un seul.</em>"
      ],
      ["Tests", "Tests unitaires, tests d’intégration, recette par les métiers."],
      [
        "Formation",
        "Utilisateurs clés d’abord, puis les utilisateurs finaux — au plus près de la bascule."
      ],
      [
        "Bascule et stabilisation",
        "Démarrage, accompagnement renforcé, stabilisation. <em>Jalon : transfert à l’exploitation.</em>"
      ]
    ],
    callout: "Comptez trois à cinq reprises à blanc, pas une. La qualité des données existantes est presque toujours moins bonne que prévu, et chaque passage révèle des cas absents de la conception. Une reprise unique le week-end de bascule est la façon classique de rater un démarrage.",
    customize: [
      "Un groupe de lignes par module ou par domaine : finance, achats, production, ventes.",
      "Inscrire les reprises à blanc comme tâches répétées, avec des boucles de nettoyage entre elles.",
      "Vérifier la disponibilité des utilisateurs clés comme une ressource : ils gardent leur activité.",
      "Traiter la stabilisation comme une phase, typiquement quatre à huit semaines."
    ],
    tips: [
      "<strong>Le standard avant le spécifique.</strong> Chaque développement allonge le projet et la maintenance.",
      "<strong>Formez juste avant la bascule.</strong> Une formation trop précoce s’oublie.",
      "<strong>Évitez une bascule en période de clôture comptable.</strong>",
      "<strong>Les utilisateurs clés sont le goulot</strong>, pas les consultants."
    ],
    faq: [
      [
        "Combien de temps dure un déploiement ERP ?",
        "Six à dix-huit mois en PME, nettement plus en grand groupe. Le périmètre et le niveau de spécifique déterminent la durée."
      ],
      [
        "Quelle est la cause la plus fréquente de retard ?",
        "La reprise de données et la qualité de l’existant, suivies de près par l’indisponibilité des métiers."
      ],
      [
        "Bascule globale ou progressive ?",
        "La bascule globale est plus rapide et plus risquée ; le progressif réduit le risque mais impose des interfaces temporaires."
      ]
    ],
    related: [
      ["software-development", "Projet logiciel"],
      ["post-merger-integration-plan", "Intégration post-acquisition"],
      ["data-center-build-schedule", "Centre de données"]
    ]
  },

  'post-merger-integration-plan': {
    card: "Les 100 premiers jours après le closing, par fonction.",
    h1: "Plan d’intégration après une acquisition",
    metaTitle: "Intégration post-acquisition — plan",
    metaDesc: "Modèle gratuit de plan d’intégration post-acquisition : Jour 1, 100 premiers jours, fonctions, systèmes et synergies.",
    lead: "Un <strong>plan d’intégration</strong> ne commence pas au closing mais bien avant. Ce qui doit fonctionner au Jour 1 — paie, accès, communication client — se prépare des semaines à l’avance, souvent sous contrainte de droit de la concurrence.",
    intro: "Six volets, de la préparation aux synergies :",
    phases: [
      [
        "Préparation avant closing",
        "Équipe d’intégration, cible, check-list Jour 1, règles de clean team. <em>Ce qui est permis avant closing est limité.</em>"
      ],
      [
        "Jour 1",
        "Communication aux salariés et aux clients, accès, paie, bases juridiques. <em>Jalon : closing.</em>"
      ],
      [
        "100 premiers jours",
        "Organisation, lignes hiérarchiques, gains rapides, rétention des personnes clés."
      ],
      [
        "Intégration fonctionnelle",
        "Finance, RH, ventes, achats, production — chaque fonction à son rythme."
      ],
      [
        "Intégration des systèmes",
        "ERP, CRM, réseaux, messagerie. <em>Le volet le plus long et le plus coûteux.</em>"
      ],
      [
        "Synergies et clôture",
        "Mise en œuvre, mesure par rapport au business case, passage en régime courant."
      ]
    ],
    callout: "L’intégration culturelle n’est pas un sujet secondaire à traiter plus tard. La première cause d’échec d’une acquisition par rapport à son business case est le départ des personnes clés dans les six premiers mois — planifiez la rétention aussi concrètement que la migration des systèmes.",
    customize: [
      "Un groupe de lignes par fonction, avec un responsable identifié.",
      "Traiter les tâches du Jour 1 dans une section horaire à part.",
      "Poser les autorisations de concurrence en antériorité de tout ce qui est interdit avant closing.",
      "Assortir chaque mesure de synergie d’une date et d’un montant, sinon elle reste une intention."
    ],
    tips: [
      "<strong>Communiquez en interne avant l’externe au Jour 1.</strong> Les salariés ne doivent pas l’apprendre par la presse.",
      "<strong>L’intégration des systèmes prend des années</strong>, pas des mois. Prévoyez une solution transitoire.",
      "<strong>Retenez les personnes clés tôt.</strong> Après six mois, il est généralement trop tard.",
      "<strong>Mesurez les synergies contre le business case</strong>, pas contre le plan."
    ],
    faq: [
      [
        "Quand commence la planification de l’intégration ?",
        "Avant le closing, dès que l’acquisition se dessine, dans les limites du droit de la concurrence sur les échanges d’informations."
      ],
      [
        "Pourquoi les 100 premiers jours comptent-ils ?",
        "Parce que l’organisation, la communication et la rétention se jouent dans cette fenêtre. Ensuite, tout devient plus difficile."
      ],
      [
        "Qu’est-ce qui prend le plus de temps ?",
        "L’intégration des systèmes, en particulier ERP et CRM. Deux à trois ans ne sont pas rares."
      ]
    ],
    related: [
      ["erp-implementation-schedule", "Déploiement ERP"],
      ["office-relocation-project-plan", "Déménagement de bureaux"],
      ["project-management", "Gestion de projet"]
    ]
  },

  'office-relocation-project-plan': {
    card: "Recherche, aménagement, informatique et déménagement le week-end.",
    h1: "Plan de projet pour un déménagement de bureaux",
    metaTitle: "Déménagement de bureaux — plan",
    metaDesc: "Modèle gratuit de plan pour un déménagement de bureaux : recherche de locaux, bail, aménagement, informatique et déménagement.",
    lead: "Dans un <strong>déménagement de bureaux</strong>, c’est l’informatique qui fixe la date, pas le mobilier. Liaisons et raccordements se commandent des mois à l’avance, quand les bureaux se livrent en quelques jours.",
    intro: "Six phases, de la recherche au premier jour :",
    phases: [
      [
        "Besoin et recherche",
        "Surface nécessaire, critères, visites, négociation. <em>Jalon : bail signé.</em>"
      ],
      [
        "Conception et autorisations",
        "Plan d’aménagement, postes de travail, sécurité incendie, autorisations éventuelles."
      ],
      [
        "Aménagement",
        "Cloisonnement, électricité, sols, éclairage, cuisine et sanitaires."
      ],
      [
        "Informatique et télécoms",
        "Commande des liaisons, local technique, réseau, wifi, téléphonie. <em>Le délai le plus long.</em>"
      ],
      [
        "Préparation du déménagement",
        "Commande du mobilier, déménageur, étiquetage, communication interne."
      ],
      [
        "Déménagement et reprises",
        "Déménagement le week-end, installation, réserves, restitution des anciens locaux. <em>Jalon : premier jour travaillé.</em>"
      ]
    ],
    callout: "Commandez la liaison dès la signature du bail. C’est la seule tâche que l’argent n’accélère pas : huit à vingt semaines s’écoulent entre la commande et la mise à disposition selon le type de raccordement et le site — et sans elle, les locaux ne sont pas exploitables.",
    customize: [
      "Une ligne par étage ou par service si le déménagement se fait par vagues.",
      "Poser le préavis des anciens locaux en date fixe et remonter à rebours.",
      "Planifier le week-end de déménagement à l’heure, séparément du plan général.",
      "Conserver la remise en état et la restitution : elles s’oublient régulièrement."
    ],
    tips: [
      "<strong>Informatique d’abord, mobilier ensuite.</strong> C’est l’ordre des délais, pas de la visibilité.",
      "<strong>Deux semaines de marge entre aménagement et déménagement.</strong> L’aménagement n’est jamais fini à l’heure.",
      "<strong>Testez le réseau avant le déménagement</strong>, pas le lundi matin.",
      "<strong>Communiquez tôt et concrètement.</strong> Les irritants portent sur des détails : parking, accès, transports."
    ],
    faq: [
      [
        "Combien de temps pour préparer un déménagement de bureaux ?",
        "Six à douze mois à partir du bail selon l’ampleur de l’aménagement. La recherche vient avant."
      ],
      [
        "Qu’est-ce qui est sur le chemin critique ?",
        "Presque toujours le raccordement télécom, puis l’aménagement intérieur."
      ],
      [
        "Quand déménager ?",
        "Un week-end ou pendant un pont, afin de garder une journée de battement pour les reprises."
      ]
    ],
    related: [
      ["home-renovation", "Rénovation"],
      ["construction", "Chantier"],
      ["employee-onboarding", "Intégration RH"]
    ]
  },

  'data-center-build-schedule': {
    card: "Site, enveloppe, énergie, refroidissement et mise en service.",
    h1: "Planning de construction d’un centre de données",
    metaTitle: "Centre de données — planning",
    metaDesc: "Modèle gratuit de planning pour un centre de données : site, autorisations, gros œuvre, énergie, refroidissement, mise en service.",
    lead: "La <strong>construction d’un centre de données</strong> est en grande partie un projet électrique dans un bâtiment. La date dépend du raccordement et des délais de transformateurs, groupes électrogènes et onduleurs — pas du béton.",
    intro: "Six phases jusqu’à la remise à l’exploitation :",
    phases: [
      [
        "Site et études amont",
        "Terrain, puissance disponible, connectivité, niveau de redondance visé. <em>Jalon : accord de raccordement.</em>"
      ],
      [
        "Autorisations et conception",
        "Urbanisme, réglementation sur les groupes, études détaillées électricité et froid."
      ],
      [
        "Achats",
        "Transformateurs, onduleurs, groupes, production de froid — des délais de douze à vingt-quatre mois sont courants."
      ],
      [
        "Gros œuvre et enveloppe",
        "Fondations, structure, toiture, façade, compartimentage."
      ],
      [
        "Lots techniques",
        "Haute tension, onduleurs, groupes, froid, sécurité incendie, sûreté, câblage."
      ],
      [
        "Mise en service et remise",
        "Essais intégrés jusqu’au niveau 5, tests en charge, scénarios de secours. <em>Jalon : prêt à exploiter.</em>"
      ]
    ],
    callout: "La mise en service est une phase, pas une date de réception. Des essais intégrés complets sur les cinq niveaux — jusqu’à la coupure réseau simulée en charge — demandent des semaines à des mois. La planifier comme la dernière semaine avant la remise revient à livrer un centre de données non testé.",
    customize: [
      "Un groupe de lignes par salle si la construction se fait par tranches.",
      "Rendre visibles les délais des gros équipements comme tâches, avec leur date de commande.",
      "Traiter les niveaux 1 à 5 de mise en service comme des tâches distinctes.",
      "Poser raccordement et secours électrique en jalons précoces."
    ],
    tips: [
      "<strong>Commandez transformateurs et groupes en premier</strong>, souvent avant le début des travaux.",
      "<strong>Le refroidissement détermine la salle</strong>, pas l’inverse.",
      "<strong>Comptez la mise en service en semaines</strong>, pas en jours.",
      "<strong>Associez l’exploitation dès la conception</strong> : c’est elle qui reprendra l’ouvrage."
    ],
    faq: [
      [
        "Combien de temps pour construire un centre de données ?",
        "Dix-huit à trente-six mois à partir du permis, très dépendant des délais des équipements électriques."
      ],
      [
        "Qu’est-ce qui est sur le chemin critique ?",
        "Le raccordement et l’approvisionnement en transformateurs, onduleurs et groupes — les plus longs délais du marché actuel."
      ],
      [
        "Que sont les essais intégrés ?",
        "La vérification progressive de tous les systèmes en interaction, jusqu’à la coupure réseau simulée en pleine charge."
      ]
    ],
    related: [
      ["construction", "Chantier"],
      ["erp-implementation-schedule", "Déploiement ERP"],
      ["refinery-turnaround-schedule", "Grand arrêt"]
    ]
  },

  'restaurant-opening-timeline': {
    card: "Concept, local, travaux, licences, équipe et ouverture progressive.",
    h1: "Planning d’ouverture d’un restaurant",
    metaTitle: "Ouverture de restaurant — planning",
    metaDesc: "Modèle gratuit de planning d’ouverture de restaurant : concept, local, travaux, licences, recrutement et ouverture progressive.",
    lead: "Pour une <strong>ouverture de restaurant</strong>, la cuisine est rarement le problème. La date dépend de la licence, de l’extraction et du recrutement — trois sujets à démarrer tôt et qu’aucun budget n’accélère.",
    intro: "Six phases, du concept au premier service :",
    phases: [
      [
        "Concept et financement",
        "Positionnement, carte, prévisionnel, plan de financement."
      ],
      [
        "Local et bail",
        "Recherche, vérification de la destination, bail commercial. <em>Jalon : bail signé.</em>"
      ],
      [
        "Autorisations",
        "Licence, déclaration sanitaire, sécurité incendie, terrasse, contraintes d’extraction. <em>Le délai le plus long.</em>"
      ],
      [
        "Travaux et cuisine",
        "Gros œuvre, extraction, bac à graisses, matériel de cuisine, salle et comptoir."
      ],
      [
        "Équipe et fournisseurs",
        "Chef d’abord, puis brigade et salle ; fournisseurs, boissons, caisse et gestion des stocks."
      ],
      [
        "Ouverture progressive",
        "Services tests, soirée entre proches, ajustement de la carte, presse. <em>Jalon : ouverture.</em>"
      ]
    ],
    callout: "L’extraction est la tâche qui décale la date. Les contraintes de rejet et de nuisances olfactives apparaissent tard, concernent le voisinage et ne se corrigent qu’au prix de travaux lourds. Vérifiez-les avant de signer le bail.",
    customize: [
      "Poser la licence en antériorité de l’ouverture, pas en parallèle.",
      "Traiter les essais de carte comme des tâches : ils demandent plusieurs cycles.",
      "Lancer le recrutement tôt ; la cuisine est le poste le plus tendu.",
      "Prévoir deux à quatre semaines d’ouverture progressive à carte réduite."
    ],
    tips: [
      "<strong>La licence avant les travaux.</strong> Une cuisine finie sans autorisation ne sert à rien.",
      "<strong>Recrutez le chef en premier.</strong> Il façonne la carte, les achats et l’équipe.",
      "<strong>Comptez sur un retard de travaux.</strong> Ne fixez pas l’ouverture juste après la réception.",
      "<strong>L’ouverture progressive est un contrôle qualité</strong>, pas une opération de communication."
    ],
    faq: [
      [
        "Combien de temps pour ouvrir un restaurant ?",
        "Six à dix-huit mois à partir du concept, selon l’état du local et le contexte réglementaire."
      ],
      [
        "Qu’est-ce qui retarde le plus souvent ?",
        "Les autorisations et l’extraction, puis le recrutement."
      ],
      [
        "Faut-il une ouverture progressive ?",
        "Oui. Deux à quatre semaines à carte réduite révèlent les défauts avant que les avis en ligne ne les figent."
      ]
    ],
    related: [
      ["hotel-pre-opening-critical-path", "Ouverture d’hôtel"],
      ["event-planning", "Événement"],
      ["home-renovation", "Rénovation"]
    ]
  },

  'clinical-trial-gantt-chart': {
    card: "Protocole, éthique, centres, inclusions, analyse et rapport.",
    h1: "Diagramme de Gantt pour un essai clinique",
    metaTitle: "Essai clinique — planning type",
    metaDesc: "Modèle gratuit de planning d’essai clinique : protocole, avis éthique, ouverture des centres, inclusions, analyse et rapport.",
    lead: "Le planning d’un <strong>essai clinique</strong> tient tout entier au recrutement. Toutes les autres phases se planifient ; la vitesse à laquelle les patients sont inclus, non — et c’est elle qui détermine la durée totale.",
    intro: "Six phases, de la conception au rapport :",
    phases: [
      [
        "Conception et protocole",
        "Question, design, calcul d’effectif, protocole et brochure investigateur."
      ],
      [
        "Réglementaire et éthique",
        "Comité de protection des personnes, autorisation, assurance, conventions. <em>Jalon : autorisation obtenue.</em>"
      ],
      [
        "Ouverture des centres",
        "Sélection, contrats, formation, visites de mise en place. <em>Jalon : premier centre ouvert.</em>"
      ],
      [
        "Inclusions et suivi",
        "Inclusion, traitement, suivi, monitorage. <em>La phase la plus longue et la plus incertaine.</em>"
      ],
      [
        "Gestion et analyse des données",
        "Gel de base, nettoyage, levée d’aveugle, analyse statistique."
      ],
      [
        "Rapport et publication",
        "Rapport d’étude, déclaration, enregistrement, publication."
      ]
    ],
    callout: "Planifiez à la moitié de la vitesse de recrutement attendue. L’expérience de presque tous les centres est que les inclusions réelles restent nettement en deçà des prévisions — et un retard ici décale chaque phase suivante d’autant.",
    customize: [
      "Une ligne par centre pour l’ouverture et les inclusions : ils démarrent en décalé.",
      "Poser l’avis éthique en antériorité dure de toute activité sur patient.",
      "Inscrire les analyses intermédiaires et les comités de surveillance en dates fixes.",
      "Représenter correctement la durée de suivi par patient : elle court après la dernière inclusion."
    ],
    tips: [
      "<strong>Le recrutement est le chemin critique.</strong> Le reste est calculable.",
      "<strong>Ouvrir plus de centres tôt</strong> vaut mieux que corriger quand ça coince.",
      "<strong>Le gel de base demande du délai.</strong> Le traitement des requêtes prend des semaines.",
      "<strong>Entre le dernier patient et le rapport, il y a des mois</strong>, pas des jours."
    ],
    faq: [
      [
        "Combien de temps dure un essai clinique ?",
        "Un à cinq ans selon la phase et l’indication. La durée de recrutement est le facteur dominant."
      ],
      [
        "Qu’est-ce qui retarde le plus les essais ?",
        "Le recrutement, de loin. Puis les procédures réglementaires et la négociation des conventions avec les centres."
      ],
      [
        "Que signifie la dernière visite du dernier patient ?",
        "Le moment où se tient la dernière visite prévue au protocole. Le gel de base et l’analyse ne commencent qu’après."
      ]
    ],
    related: [
      ["research", "Projet de recherche"],
      ["grant-proposal-gantt-chart", "Demande de financement"],
      ["phd-research-gantt-chart", "Projet doctoral"]
    ]
  },

  'google-sheets': {
    card: "Diagramme de Gantt dans Google Sheets : importer et travailler à plusieurs.",
    h1: "Modèle de diagramme de Gantt pour Google Sheets",
    metaTitle: "Modèle de Gantt pour Google Sheets",
    metaDesc: "Modèle gratuit de diagramme de Gantt pour Google Sheets : à télécharger en XLSX ou CSV, à importer et à modifier à plusieurs.",
    lead: "Un <strong>modèle de Gantt pour Google Sheets</strong> est le bon choix quand plusieurs personnes doivent travailler sur le plan en même temps. Téléchargez le fichier en XLSX ou CSV et importez-le par <em>Fichier → Importer</em>.",
    intro: "Le modèle contient quatre phases avec tâches et jalons :",
    phases: [
      [
        "Tableau des tâches",
        "Tâche, début, durée et responsable — les colonnes dont tout découle."
      ],
      ["Axe temporel", "Une barre par tâche sur les semaines du projet."],
      [
        "Phases",
        "Quatre groupes qui rassemblent les tâches et gardent le plan lisible."
      ],
      ["Jalons", "Des points fixes pour les validations et les livraisons."]
    ],
    callout: "Google Sheets ne calcule pas les antériorités. Si une tâche glisse, chaque date de début suivante doit être reprise à la main — praticable à vingt lignes, plus au-delà. Si le plan doit se recalculer seul, ouvrez-le directement dans l’éditeur.",
    customize: [
      "Après l’import, choisir Fichier → Importer → Importer un fichier puis « Remplacer la feuille de calcul ».",
      "Ajuster la largeur des colonnes de l’axe si le projet dépasse la période du modèle.",
      "Ajouter une mise en forme conditionnelle sur la date du jour pour suivre l’avancement.",
      "Partager en « Commentateur » pour les personnes qui ne font que consulter."
    ],
    tips: [
      "<strong>Sheets est fort pour le travail à plusieurs</strong>, faible pour les antériorités.",
      "<strong>La vue Chronologie native n’est pas un Gantt</strong> — elle ignore les liens.",
      "<strong>Protégez les colonnes de calcul</strong> si beaucoup de personnes ont accès.",
      "<strong>Au-delà de vingt tâches</strong>, passez à un outil qui calcule."
    ],
    faq: [
      [
        "Comment importer le modèle dans Google Sheets ?",
        "Téléchargez le fichier, puis dans Sheets : Fichier → Importer → Importer un fichier, et choisissez « Remplacer la feuille de calcul »."
      ],
      [
        "Google Sheets gère-t-il les antériorités ?",
        "Pas automatiquement. Les décalages doivent être reportés à la main sur chaque successeur."
      ],
      [
        "Le modèle est-il gratuit ?",
        "Oui, sans inscription et sans filigrane — en XLSX, CSV ou PowerPoint."
      ]
    ],
    related: [
      ["excel", "Modèle Excel"],
      ["powerpoint", "Modèle PowerPoint"],
      ["simple", "Modèle simple"]
    ]
  },

  'printable-gantt-chart': {
    card: "Conçu pour l’impression : une page, texte lisible, marges propres.",
    h1: "Diagramme de Gantt à imprimer",
    metaTitle: "Diagramme de Gantt à imprimer",
    metaDesc: "Modèle gratuit de diagramme de Gantt à imprimer : tient sur une page, lisible en noir et blanc, en PDF, Excel ou PowerPoint.",
    lead: "Un <strong>diagramme de Gantt à imprimer</strong> n’a pas les mêmes contraintes qu’un diagramme à l’écran : il doit tenir sur une page, rester lisible en noir et blanc et se passer d’info-bulles — tout ce qui compte est sur le papier.",
    intro: "Le modèle est construit autour de ces quatre points :",
    phases: [
      [
        "Une page",
        "Une vingtaine de lignes et un trimestre d’axe — la limite au-delà de laquelle un A4 paysage devient illisible."
      ],
      [
        "Contraste plutôt que couleur",
        "Les phases se distinguent par la valeur et la trame, pas seulement par la teinte."
      ],
      [
        "Barres légendées",
        "Les noms de tâches et les dates figurent sur les barres, pas dans une légende."
      ],
      [
        "Marges d’impression",
        "Marges et en-tête réglées pour que rien ne soit rogné."
      ]
    ],
    callout: "Vérifiez la lisibilité en niveaux de gris avant de lancer cent exemplaires. Des couleurs bien distinctes à l’écran deviennent régulièrement trois gris presque identiques à l’impression — l’erreur la plus fréquente sur les plans destinés à être affichés.",
    customize: [
      "Passer en A3 au-delà d’environ 25 lignes.",
      "Exporter en PDF plutôt qu’imprimer depuis le tableur : la pagination reste maîtrisée.",
      "Masquer les colonnes inutiles avant impression ; chaque colonne gagnée libère de l’axe.",
      "Mettre la date de version en en-tête, pour qu’un plan périmé ne reste pas au mur."
    ],
    tips: [
      "<strong>Format paysage</strong> — un axe temporel a besoin de largeur.",
      "<strong>9 points minimum.</strong> Ce qui paraît petit à l’écran est illisible imprimé.",
      "<strong>Un trimestre par page.</strong> Une année entière sur A4 ne se lit pas.",
      "<strong>Affichez la date de version</strong>, sinon c’est le plan du mois dernier qui reste au mur."
    ],
    faq: [
      [
        "Comment imprimer un diagramme de Gantt sur une page ?",
        "Format paysage, une vingtaine de lignes et un trimestre d’axe, export en PDF plutôt qu’impression directe depuis le tableur."
      ],
      [
        "Quel format de papier ?",
        "A4 paysage jusqu’à une vingtaine de lignes, A3 au-delà ou pour l’affichage."
      ],
      [
        "Le modèle est-il lisible en noir et blanc ?",
        "Oui, les phases se distinguent par la valeur et la trame, pas uniquement par la couleur."
      ]
    ],
    related: [
      ["one-page-gantt-chart", "Plan sur une page"],
      ["simple", "Modèle simple"],
      ["powerpoint", "Modèle PowerPoint"]
    ]
  },

  'one-page-gantt-chart': {
    card: "Tout le projet sur une seule page, au niveau des phases.",
    h1: "Diagramme de Gantt sur une page",
    metaTitle: "Diagramme de Gantt sur une page",
    metaDesc: "Modèle gratuit de diagramme de Gantt sur une page : le projet entier au niveau des phases, pour direction et comité.",
    lead: "Un <strong>diagramme de Gantt sur une page</strong> n’est pas un plan réduit : c’est un plan résumé. Il montre les phases et les jalons, et laisse le détail dans le planning de travail — parce qu’une page ne supporte pas les deux.",
    intro: "Ce que contient la page :",
    phases: [
      ["Phases", "Quatre à huit barres qui couvrent tout le projet."],
      ["Jalons", "Cinq à dix losanges pour les décisions et les livraisons."],
      ["Axe", "Une graduation mensuelle ou trimestrielle selon la durée."],
      [
        "Statut",
        "Un repère de date du jour et, si utile, un état d’avancement par phase."
      ]
    ],
    callout: "Une page impose des choix, et c’est son intérêt. Si vous n’arrivez pas à réduire le projet à huit barres, ce n’est généralement pas un problème de mise en page mais un projet dont la structure n’a pas encore été arrêtée.",
    customize: [
      "Fusionner les phases voisines si le plan dépasse huit barres.",
      "Ne conserver que les jalons qu’un comité retiendrait.",
      "Ajouter une ligne de statut par phase si la page sert au pilotage.",
      "Exporter en PDF ou en image pour l’intégrer à un document."
    ],
    tips: [
      "<strong>Quatre à huit phases maximum.</strong> Au-delà, la page perd son intérêt.",
      "<strong>Gardez le détail ailleurs.</strong> Cette page renvoie au plan, elle ne le remplace pas.",
      "<strong>Datez la version.</strong> Une page résumée circule et se périme vite.",
      "<strong>Un repère « aujourd’hui »</strong> vaut mieux qu’un pourcentage d’avancement."
    ],
    faq: [
      [
        "À quoi sert un Gantt sur une page ?",
        "À présenter le projet à une direction ou un comité, et à servir de repère partagé. Le pilotage se fait sur le plan détaillé."
      ],
      [
        "Combien de phases y faire tenir ?",
        "Quatre à huit. Si le projet en demande davantage, regroupez avant de réduire la taille du texte."
      ],
      [
        "Comment le garder à jour ?",
        "En le régénérant depuis le plan détaillé plutôt qu’en le modifiant à part."
      ]
    ],
    related: [
      ["printable-gantt-chart", "Version imprimable"],
      ["powerpoint", "Modèle PowerPoint"],
      ["simple", "Modèle simple"]
    ]
  },

  '3-week-lookahead-template': {
    card: "Planning glissant à trois semaines : travaux, contraintes et inspections.",
    h1: "Planning glissant à 3 semaines",
    metaTitle: "Planning à 3 semaines — modèle",
    metaDesc: "Modèle gratuit de planning glissant à 3 semaines : corps d’état, inspections, contraintes et délais d’approvisionnement, semaine par semaine.",
    lead: 'Un <strong>planning glissant à 3 semaines</strong> présenté comme se tient réellement la réunion de chantier du lundi : cette semaine, la suivante, celle d’après, avec les corps d’état, les inspections, les contraintes et les articles à long délai visibles sur chacune. Téléchargez-le pour l’afficher à la base vie, ou ouvrez-le dans l’<a href="/app.html">éditeur gratuit</a> et utilisez <strong>Vue ▸ Semaines à venir</strong> pour extraire la fenêtre directement de votre planning directeur, plutôt que de la ressaisir chaque semaine dans un tableur.',
    intro: "Un planning glissant n’est pas un plan séparé : c’est une tranche de trois semaines du planning directeur, assortie de ses contraintes et rafraîchie chaque semaine. Le modèle est organisé ainsi :",
    phases: [
      [
        "Semaine 1 — travaux engagés",
        "Travaux entièrement libérés de contraintes, exécutés cette semaine. Équipes, matériaux et accès sont confirmés. <em>Jalon : inspection avant coulage.</em>"
      ],
      [
        "Semaine 2 — travaux prêts",
        "Travaux dont les contraintes sont levées mais qui n’ont pas démarré. C’est le matelas qui occupe les équipes quand la semaine 1 dérape."
      ],
      [
        "Semaine 3 — travaux prévus",
        "Travaux encore en cours de préparation. Toute ligne portant une contrainte ouverte est la raison d’être de la réunion."
      ],
      [
        "Contraintes et délais d’approvisionnement",
        "Plans d’exécution à viser, validations, livraisons et autorisations qui conditionnent les travaux qu’ils bloquent. Ils courent sur les trois semaines au lieu d’être noyés dans une seule."
      ],
      [
        "Inspections et points d’arrêt",
        "Visas de tiers qui arrêtent les travaux s’ils sont manqués — ferraillage, réseaux enterrés, structure. Chacun est un jalon, pas une tâche."
      ],
      [
        "Actualisation hebdomadaire",
        "Le planning avance chaque lundi : on saisit l’avancement, la fenêtre glisse d’une semaine, le registre des contraintes est repassé en revue."
      ]
    ],
    callout: 'L’objet du planning glissant est la levée des contraintes, pas le reporting. Si une tâche de la semaine 3 attend un plan visé ou une livraison, c’est la seule chose qui mérite d’être discutée le lundi — le reste est déjà prêt. Notre <a href="/fr/blog/3-week-lookahead-schedule.html">guide du planning glissant à 3 semaines</a> explique comment mener la réunion à partir du diagramme.',
    customize: [
      "Caler la fenêtre sur votre lundi de départ : la vue Semaines à venir s’ancre au lundi et accepte une fenêtre de 1 à 8 semaines.",
      "Une ligne par équipe ou par sous-traitant plutôt que par activité si le chantier est organisé par corps d’état : chaque chef d’équipe doit retrouver sa ligne.",
      "Garder les contraintes sous forme de vraies barres avec de vraies durées. Un visa affiché en durée nulle passe inaperçu.",
      "Marquer chaque inspection comme jalon pour qu’aucune tâche aval ne soit planifiée à travers un point d’arrêt.",
      "Faire glisser l’ensemble d’une semaine chaque lundi plutôt que de le reconstruire : le planning directeur est la source, le glissant n’en est qu’une vue."
    ],
    tips: [
      "<strong>Générez-le, ne le ressaisissez pas.</strong> Tenu à part du planning directeur, il s’en écarte en un mois. Ouvrez le directeur dans l’éditeur et passez par <strong>Vue ▸ Semaines à venir</strong>.",
      "<strong>La semaine 1 ne doit contenir aucune contrainte.</strong> S’il en reste, le travail n’est pas engagé : il relève de la semaine 2.",
      "<strong>Suivez le taux de réalisation des engagements.</strong> Compter les tâches de semaine 1 réellement achevées est le chiffre le plus utile que produit un planning glissant.",
      "<strong>Inscrivez les articles à long délai des mois à l’avance.</strong> Charpente métallique, tableaux électriques et ascenseurs ignorent votre fenêtre de trois semaines : ils doivent y apparaître à la date de livraison et être commandés bien avant.",
      "<strong>Imprimez-le au format qu’exige le mur de la base vie.</strong> Un planning illisible à un mètre ne change le lundi de personne."
    ],
    faq: [
      [
        "Qu’est-ce qu’un planning glissant à 3 semaines ?",
        'Un plan à court terme, extrait du planning directeur, qui montre les trois prochaines semaines de travaux avec leurs contraintes et leurs inspections. Il est rafraîchi chaque semaine, en général à la réunion de coordination du lundi. Voir notre <a href="/fr/blog/3-week-lookahead-schedule.html">guide du planning glissant</a>.'
      ],
      [
        "gantts.app peut-il générer la fenêtre depuis mon planning ?",
        'Oui. Ouvrez votre planning dans l’<a href="/app.html">éditeur gratuit</a> et choisissez <strong>Vue ▸ Semaines à venir</strong>. La vue s’ancre au lundi et accepte une fenêtre de une à huit semaines : le glissant reste une vue du planning vivant, pas une seconde copie.'
      ],
      [
        "Pourquoi trois semaines plutôt que quatre ou six ?",
        "Trois semaines suffisent pour lever l’essentiel des contraintes tout en gardant des dates crédibles. Les chantiers à longs délais travaillent souvent sur six semaines ; la vue en accepte huit, adaptez-la à votre cycle de préparation."
      ],
      [
        "Qu’y a-t-il dans le glissant qui n’est pas dans le planning directeur ?",
        "Les contraintes : visas, questions techniques, livraisons, autorisations, inspections et disponibilité des équipes. Le directeur porte les travaux ; le glissant porte les raisons pour lesquelles ils pourraient ne pas se faire."
      ],
      [
        "Le modèle est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans compte ni filigrane."
      ]
    ]
  },

  's-curve-template': {
    card: "Avancement cumulé prévu contre réel, du démarrage à la clôture.",
    h1: "Modèle de courbe en S (prévu vs réel)",
    metaTitle: "Courbe en S — prévu vs réel",
    metaDesc: "Modèle gratuit de courbe en S : posez une référence et lisez la valeur planifiée, la valeur acquise, l’écart de délai et l’IPD (SPI) intégrés.",
    lead: 'Un <strong>modèle de courbe en S</strong> gratuit — un projet dont la forme rend la comparaison prévu / réel réellement parlante : démarrage lent, milieu chargé, longue traîne finale. Téléchargez-le pour un rapport d’avancement, ou ouvrez-le dans l’<a href="/app.html">éditeur gratuit</a>, posez une référence et ouvrez le panneau <strong>📈 Courbe en S</strong> pour lire la valeur planifiée, la valeur acquise, l’écart de délai et l’IPD à partir de vos propres dates et pourcentages d’avancement.',
    intro: "Une courbe en S n’est rien d’autre que l’avancement cumulé tracé dans le temps. Elle prend cette forme parce qu’un projet monte lentement, chauffe au milieu et s’étire en phase d’essais. Le modèle fournit un planning qui a déjà cette allure :",
    phases: [
      [
        "Lancement et référence",
        "Note de cadrage, périmètre, budget et pose de la référence — le pied plat de la courbe, où beaucoup de calendrier s’écoule pour très peu de valeur acquise. <em>Jalon : référence posée.</em>"
      ],
      [
        "Conception et études",
        "De l’avant-projet aux études d’exécution. L’avancement commence à s’accumuler mais la dépense va encore plus vite que la valeur produite."
      ],
      [
        "Approvisionnements",
        "Commandes passées, articles à long délai suivis, réceptions. L’engagement grimpe fortement ici alors que l’avancement physique, lui, ne bouge presque pas."
      ],
      [
        "Travaux et réalisation",
        "Le centre raide de la courbe, où se produit l’essentiel de la valeur acquise et où l’IPD mérite un suivi hebdomadaire."
      ],
      [
        "Essais et mise en service",
        "La traîne. Le reste à faire pèse peu en valeur mais s’étire en durée, d’où l’aplatissement des courbes avant la fin. <em>Jalon : mise en service achevée.</em>"
      ],
      [
        "Réception et clôture",
        "Dossier des ouvrages exécutés, levée des réserves, décompte final et retour d’expérience — les derniers pour-cent, toujours plus longs que prévu."
      ]
    ],
    callout: 'Une courbe seule ne dit rien. Tout est dans l’écart entre la courbe prévue et la courbe réelle : si le réel passe sous le prévu, vous êtes en retard, la distance verticale étant l’écart de délai exprimé en valeur et la distance horizontale, approximativement, le retard en temps. Notre <a href="/fr/blog/s-curve-project-management.html">guide de la courbe en S</a> détaille la lecture de la valeur planifiée, de la valeur acquise, de l’écart et de l’IPD.',
    customize: [
      "Poser une référence dès le plan validé : sans elle, pas de courbe prévue, et le panneau Courbe en S n’a rien à comparer.",
      "Tenir l’avancement à jour et honnête : la courbe réelle ne vaut que la dernière mise à jour.",
      "Charger fortement les phases centrales. Des durées réparties uniformément donnent une droite, ce qui signale en général un plan trop peu détaillé.",
      "Ajouter des montants ou des heures par tâche pour obtenir une courbe valorisée plutôt que pondérée par les durées.",
      "Ne repositionner la référence que sur un avenant formel. Re-référencer pour masquer un écart, c’est supprimer le seul système d’alerte du projet."
    ],
    tips: [
      "<strong>Lisez l’IPD, pas la silhouette.</strong> Un IPD inférieur à 1,0 signifie que vous avez acquis moins de valeur que prévu à ce jour. La tendance sur quatre ou cinq relevés compte bien plus qu’une valeur isolée.",
      "<strong>Attendez-vous à un démarrage lent.</strong> Une courbe qui monte franchement dès le premier jour mesure presque toujours la dépense ou la charge, pas l’avancement produit.",
      "<strong>Surveillez le point d’aplatissement.</strong> Les courbes qui s’aplatissent dès 85–90 % signent un projet plein de travaux presque terminés.",
      "<strong>Mettez à jour à rythme fixe.</strong> Chaque semaine ou tous les quinze jours, toujours le même jour : des relevés irréguliers rendent la courbe illisible.",
      "<strong>Associez la courbe au diagramme de Gantt.</strong> La courbe dit que vous êtes en retard ; les barres disent quelles tâches en sont responsables. Gardez les deux dans le rapport."
    ],
    faq: [
      [
        "Qu’est-ce qu’une courbe en S en gestion de projet ?",
        'Le tracé de l’avancement cumulé prévu comparé à l’avancement cumulé réel dans le temps. Sa forme en S vient de la montée lente, du pic central et de la traîne finale. Notre <a href="/fr/blog/s-curve-project-management.html">guide de la courbe en S</a> explique comment la construire et la lire.'
      ],
      [
        "gantts.app trace-t-il la courbe automatiquement ?",
        'Oui. Posez une référence, puis ouvrez le panneau <strong>📈 Courbe en S</strong> dans l’<a href="/app.html">éditeur gratuit</a>. Il calcule la valeur planifiée, la valeur acquise, l’écart de délai et l’indice de performance des délais à partir de vos tâches, et se met à jour quand vous modifiez l’avancement.'
      ],
      [
        "Que signifient VP, VA, écart de délai et IPD ?",
        "La valeur planifiée (VP) est le travail que vous deviez avoir fait à ce jour, la valeur acquise (VA) celui que vous avez réellement fait ; l’écart de délai vaut VA moins VP, et l’IPD (SPI) vaut VA divisé par VP. Au-dessus de 1,0 vous êtes en avance, en dessous vous êtes en retard."
      ],
      [
        "Pourquoi ma courbe ressemble-t-elle à une droite ?",
        "En général parce que toutes les tâches ont une durée et un poids voisins, donc l’avancement s’accumule linéairement. Détaillez davantage les phases centrales, ou valorisez les tâches en coût ou en heures, et le S apparaît."
      ],
      [
        "Faut-il une référence pour s’en servir ?",
        "Oui pour comparer prévu et réel. Sans référence, vous voyez encore l’avancement cumulé réel, mais il n’y a rien à quoi le comparer et pas d’IPD."
      ],
      [
        "Le modèle de courbe en S est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans inscription."
      ]
    ]
  },

  'cloud-migration-project-plan': {
    card: "Cadrage, socle cloud, vagues de migration, bascule et décommissionnement.",
    h1: "Plan de projet de migration vers le cloud",
    metaTitle: "Migration cloud — planning type",
    metaDesc: "Modèle gratuit de plan de migration cloud : cadrage, socle (landing zone), vagues, bascule, hypercare et décommissionnement du centre de données.",
    lead: "Un <strong>plan de migration vers le cloud</strong> gratuit couvrant le déplacement des applications de bout en bout — inventaire et évaluation, construction du socle (landing zone), découpage en vagues, vague pilote puis vagues de production, bascule, période de support renforcé (hypercare) et décommissionnement de ce que vous laissez derrière vous. Téléchargez-le pour le comité de pilotage, ou ouvrez-le en ligne pour lier les vagues afin qu’un glissement sur l’une ne dévore pas silencieusement la suivante.",
    intro: "Une migration cloud n’est pas un projet unique : c’est un socle à construire, puis une vague qui se répète. Le modèle sépare les deux pour que le socle soit terminé avant que les vagues n’en dépendent :",
    phases: [
      [
        "Inventaire et évaluation",
        "Inventaire applicatif, cartographie des dépendances, criticité métier et choix de trajectoire par application selon les 7R — rehost, replatform, refactor, repurchase, relocate, retire, retain. <em>Jalon : trajectoires arbitrées.</em>"
      ],
      [
        "Socle cloud (landing zone)",
        "Comptes et abonnements, réseau et connectivité, identités, garde-fous de sécurité, journalisation et modèle de coûts. Tout l’aval en dépend. <em>Jalon : socle en service.</em>"
      ],
      [
        "Découpage en vagues et pilote",
        "Regroupement des applications par dépendance plutôt que par direction, puis validation du mode opératoire sur une vague pilote à faible risque."
      ],
      [
        "Vagues de migration",
        "Cycles répétés de construction, migration, tests et bascule par vague. Le schéma est identique à chaque fois ; seul le profil de risque change."
      ],
      [
        "Bascule et hypercare",
        "Bascules en production, bascule DNS et du trafic, fenêtres de retour arrière et période de support renforcé après chaque vague. <em>Jalon : bascule de production terminée.</em>"
      ],
      [
        "Décommissionnement et optimisation",
        "Extinction du parc source, sortie du centre de données ou du contrat d’hébergement, puis redimensionnement et engagements de capacité réservée. C’est là que le retour sur investissement se concrétise vraiment."
      ]
    ],
    callout: "Le gain n’est acquis que lorsque l’ancien est éteint. Les migrations s’arrêtent régulièrement après la dernière bascule, laissant les deux parcs en fonctionnement et les économies sur le papier. Inscrivez le décommissionnement comme un travail daté avec un responsable, et posez à côté la date de sortie du contrat d’hébergement comme jalon fixe.",
    customize: [
      "Fixer d’abord la date de sortie du centre de données ou du contrat d’hébergement et travailler à rebours : cette date est en général contractuelle et non négociable.",
      "Ajouter une ligne par application une fois l’inventaire terminé, regroupée sous la vague qui la porte.",
      "Dupliquer la phase de vague autant de fois que nécessaire : sa structure interne reste identique.",
      "Sortir les candidats au refactoring du plan de vagues : ce sont des projets de développement, pas des migrations, et les mélanger casse le rythme des vagues.",
      "Marquer en jalons la mise en service du socle, la fin du pilote, chaque bascule de production et le décommissionnement de la source."
    ],
    tips: [
      "<strong>Ne lancez pas les vagues avant que le socle soit terminé.</strong> Migrer vers une fondation encore mouvante oblige à remigrer, et c’est la première source de reprise sur ces programmes.",
      "<strong>Groupez les vagues par dépendance, pas par service.</strong> Les applications qui se parlent doivent bouger ensemble, sinon vous paierez la latence entre deux parcs pendant toute la séparation.",
      "<strong>Faites une vraie vague pilote.</strong> Son but est de valider le mode opératoire et de faire sortir les surprises : choisissez des applications peu risquées mais réellement représentatives, pas les trois plus faciles.",
      "<strong>Budgétez le fonctionnement en parallèle.</strong> Les deux parcs tournent en même temps pendant toute la migration ; ce coût de recouvrement est réel et doit figurer dans le dossier dès le départ.",
      "<strong>Prévoyez une fenêtre de retour arrière à chaque bascule.</strong> Une bascule sans retour arrière documenté et répété est une porte à sens unique franchie sans l’avoir décidé."
    ],
    faq: [
      [
        "Combien de temps dure une migration vers le cloud ?",
        "Couramment 9 à 24 mois pour un parc de taille moyenne, selon le nombre d’applications, la complexité des dépendances et la part de refactoring. Le modèle propose un planning d’environ quinze mois, à comprimer ou étendre."
      ],
      [
        "Que sont les 7R de la migration cloud ?",
        "Rehost, replatform, refactor, repurchase, relocate, retire et retain — les trajectoires possibles attribuées à chaque application lors de l’évaluation. Les arbitrer tôt est ce qui rend le découpage en vagues possible."
      ],
      [
        "Comment ordonner les vagues de migration ?",
        "Par groupe de dépendances d’abord, puis par risque. Les applications qui partagent des données ou s’appellent entre elles doivent migrer dans la même vague, et la vague pilote doit rester peu risquée tout en étant représentative."
      ],
      [
        "Le décommissionnement de l’ancien environnement est-il couvert ?",
        "Oui, c’est une phase entière, parce que c’est là que les économies annoncées se matérialisent et que c’est la phase le plus souvent abandonnée une fois la dernière bascule faite."
      ],
      [
        "Le modèle de migration cloud est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans compte."
      ]
    ]
  },

  'new-product-development-plan': {
    card: "Programme à jalons de décision, du concept à la mise en production.",
    h1: "Plan de développement d’un nouveau produit",
    metaTitle: "Développement produit — planning",
    metaDesc: "Modèle gratuit de plan de développement produit : concept, faisabilité, conception, prototypes, validation, outillage, série pilote et lancement.",
    lead: 'Un <strong>plan de développement de produit nouveau</strong> gratuit, construit comme un programme à jalons de décision — concept, faisabilité, conception détaillée, prototypage, validation et essais, outillage, série pilote et transfert au lancement. C’est la chaîne d’ingénierie qui produit quelque chose à vendre ; pour le volet commercial du même programme, voir le <a href="/templates/product-launch.html">plan de lancement produit</a>, et pour l’horizon long la <a href="/templates/product-roadmap.html">feuille de route produit</a>.',
    intro: "Les plannings de développement produit dérapent aux jalons, pas dans les tâches. Le modèle isole chaque étape pour qu’un jalon soit une décision étayée par des preuves plutôt qu’une date qui passe discrètement :",
    phases: [
      [
        "Concept",
        "Définition de l’opportunité, besoins clients et exigences, esquisses de concept, premier dossier économique. <em>Jalon 1 : concept validé.</em>"
      ],
      [
        "Faisabilité",
        "Études de faisabilité technique, analyse faire ou faire faire, revue réglementaire, modèle de coût et analyse de risques. <em>Jalon 2 : faisabilité confirmée.</em>"
      ],
      [
        "Conception détaillée",
        "Architecture et conception de détail, conception pour la fabrication et l’assemblage, nomenclature, implication des fournisseurs et revue de conception. <em>Jalon 3 : gel de la conception.</em>"
      ],
      [
        "Prototypage",
        "Prototype alpha, évaluation en ingénierie, itérations de conception et prototype bêta utilisé pour la validation."
      ],
      [
        "Validation et essais",
        "Vérification de conception, essais climatiques et essais d’endurance, dossiers de certification et essais utilisateurs. <em>Jalon 4 : conception validée.</em>"
      ],
      [
        "Outillage et industrialisation",
        "Conception et réalisation des outillages, contrôle du premier article, mise au point des procédés, montages et qualification des fournisseurs."
      ],
      [
        "Série pilote et transfert",
        "Série pilote, accord sur les pièces de série, plan de montée en cadence, dossier documentaire et transfert à la production et à l’équipe de lancement. <em>Jalon 5 : mise en production.</em>"
      ]
    ],
    callout: "Le gel de la conception est le jalon coûteux. Chaque modification après lui se paie en outillage, et chaque modification après le contrôle du premier article se paie deux fois. Faire du gel un véritable jalon — adossé à des résultats d’essais et non à une date optimiste — est la décision qui préserve le budget de développement.",
    customize: [
      "Fixer la date de mise en production exigée et remonter à rebours : le délai d’outillage détermine souvent si le plan est simplement possible.",
      "Commander les outillages à long délai sur les délais réellement cotés, et placer la commande avant le gel de conception seulement si vous prenez ce risque en connaissance de cause.",
      "Ajouter une ligne par organisme de certification si le produit en exige plusieurs : ils travaillent en parallèle, chacun avec sa file d’attente.",
      "Prévoir autant de prototypes que nécessaire ; deux est optimiste dès qu’il y a des pièces en mouvement.",
      "Garder la qualification fournisseur visible : une pièce conforme issue d’un fournisseur non qualifié n’est pas une pièce livrable.",
      "Marquer les cinq jalons comme jalons pour que le comité voie des décisions plutôt que des barres d’avancement."
    ],
    tips: [
      "<strong>Ne recouvrez pas l’outillage avec des modifications de conception.</strong> Tailler l’acier avant le gel est la façon la plus courante de consommer toute la provision pour aléas en une semaine.",
      "<strong>Lancez la certification tôt.</strong> Les files des laboratoires et l’instruction réglementaire sont des durées de tiers qu’aucun effort ne comprime : réservez les créneaux dès qu’un prototype testable existe.",
      "<strong>Donnez une barre propre à la validation.</strong> Le temps d’essai est du temps réel : les essais d’endurance durent des semaines, quel que soit le nombre d’ingénieurs affectés.",
      "<strong>Impliquez les fournisseurs pendant la conception, pas après.</strong> Un retour de fabricabilité arrivant après le gel devient une demande de modification, plus une donnée d’entrée.",
      "<strong>Séparez ce plan du plan de lancement.</strong> Les dates marketing doivent s’accrocher à la mise en production, pas à une estimation d’ingénierie faite au stade du concept.",
      "<strong>Posez la référence au gel de conception.</strong> Suivez l’écart depuis la conception gelée pour que les modifications tardives se lisent comme un coût de délai, et non comme un glissement absorbé en silence."
    ],
    faq: [
      [
        "En quoi est-ce différent du plan de lancement produit ?",
        'Celui-ci est la chaîne d’ingénierie qui s’achève à la mise en production — du concept à l’outillage et à la série pilote. Le <a href="/templates/product-launch.html">plan de lancement produit</a> démarre à peu près là où celui-ci finit et couvre le positionnement, le prix, la préparation des canaux et la campagne commerciale.'
      ],
      [
        "Combien de temps dure un développement de produit nouveau ?",
        "Cela dépend de la complexité : un accessoire grand public simple peut tenir en 6 à 9 mois, tandis qu’un produit réglementé ou fortement outillé demande couramment 18 à 36 mois. Le modèle propose un programme de dix-huit mois."
      ],
      [
        "Quels sont les jalons de décision du modèle ?",
        "Concept validé, faisabilité confirmée, gel de la conception, conception validée et mise en production. Chacun est un jalon dont les tâches productrices de preuves sont les antériorités."
      ],
      [
        "Peut-on l’utiliser pour un produit logiciel ?",
        'En partie : les phases concept, faisabilité, conception et validation se transposent bien, mais l’outillage et la série pilote disparaissent. Pour du logiciel, le <a href="/templates/software-development.html">plan de projet logiciel</a> convient mieux.'
      ],
      [
        "Le modèle de développement produit est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans compte."
      ]
    ]
  },

  'retail-store-opening-timeline': {
    card: "Du bail à l’inauguration : travaux, licences, stock et recrutement.",
    h1: "Planning d’ouverture d’un magasin",
    metaTitle: "Ouverture de magasin — planning",
    metaDesc: "Modèle gratuit de planning d’ouverture de magasin : bail, agencement, licences, caisse, marchandisage, recrutement et inauguration.",
    lead: "Un <strong>planning d’ouverture de magasin</strong> gratuit, du choix de l’emplacement à l’inauguration — bail et accords du bailleur, conception et agencement, licences et visites de conformité, caisse et systèmes, commande d’ouverture et marchandisage, recrutement et formation, puis les journées d’ouverture discrète et le week-end d’inauguration.",
    intro: "Une ouverture de magasin, c’est un chantier, un recrutement et un cycle d’achat menés en même temps, tous pointés vers une date que le bailleur a déjà annoncée. Le modèle les traite comme des chemins parallèles :",
    phases: [
      [
        "Emplacement et bail",
        "Étude de zone de chalandise et de flux, sélection des sites, prévision de chiffre d’affaires, négociation du bail et conditions d’aménagement du bailleur. <em>Jalon : bail signé.</em>"
      ],
      [
        "Conception et autorisations",
        "Plan d’aménagement au standard de l’enseigne, conception de la devanture et de l’enseigne, accord du bailleur et de la gestion du centre, autorisations d’urbanisme."
      ],
      [
        "Travaux d’agencement",
        "Mise à disposition du local, agencement, sols et éclairage, mobilier et rayonnages, pose de la devanture et de l’enseigne, puis levée des réserves."
      ],
      [
        "Licences, systèmes et démarque",
        "Autorisation d’exploitation, visites sécurité incendie et accessibilité, caisse et terminaux de paiement, réseau, vidéosurveillance et antivol. <em>Jalon : autorisation d’ouverture.</em>"
      ],
      [
        "Stock et marchandisage",
        "Commande d’ouverture passée selon les délais fournisseurs, réception et organisation de la réserve, construction des planogrammes et implantation du merchandising visuel."
      ],
      [
        "Recrutement, formation et ouverture",
        "Le directeur de magasin d’abord, puis l’équipe de vente, formation produit et caisse, journées d’ouverture discrète et inauguration. <em>Jalon : inauguration.</em>"
      ]
    ],
    callout: "La commande d’ouverture est la seule qu’on ne peut pas accélérer. Le mobilier peut être livré en urgence et une équipe peut être formée en une semaine, mais une première commande passée tard arrive tard, et un magasin qui ouvre avec des trous dans les linéaires passe son week-end d’inauguration à s’excuser. Passez l’achat sur les vrais délais fournisseurs et traitez la date de livraison comme une antériorité dure du marchandisage.",
    customize: [
      "Caler le plan sur la date de mise à disposition du local par le bailleur : c’est là que démarrent vos travaux et souvent votre loyer.",
      "Ajouter une ligne par lot de mobilier si l’agencement est expédié depuis un fournisseur central plutôt que construit sur place.",
      "Allonger la phase licences si vous vendez des produits réglementés : alcool, pharmacie, tabac ou armes ont chacun leurs propres délais.",
      "Séparer la construction des planogrammes de l’implantation en magasin : ce sont deux travaux différents, faits par des personnes différentes.",
      "Garder l’ouverture discrète comme de vraies journées de vente avec de vrais clients, pas comme une visite d’équipe."
    ],
    tips: [
      "<strong>Lisez les conditions d’aménagement du bailleur avant de concevoir.</strong> Accords de la gestion du centre, horaires de travaux autorisés et règles d’accès livraison remodèlent le planning ; les découvrir pendant la pose coûte des semaines.",
      "<strong>Commandez la devanture et l’enseigne tôt.</strong> Une enseigne sur mesure a un long délai et se pose en dernier, ce qui la place directement sur le chemin critique de l’ouverture.",
      "<strong>Recrutez le directeur bien avant l’équipe.</strong> Il porte le recrutement, la formation et la validation de la commande d’ouverture : c’est une antériorité, pas une ligne d’effectif.",
      "<strong>Testez la caisse avec de vraies transactions.</strong> Terminaux de paiement, fichiers de prix et suivi de stock ne se valident qu’en journée réelle : c’est à cela que sert l’ouverture discrète.",
      "<strong>Protégez la fenêtre de marchandisage.</strong> L’implantation visuelle est ce qu’on comprime en dernier et ce que les clients voient en premier ; la réduire à moins de quelques jours se voit en rayon."
    ],
    faq: [
      [
        "Combien de temps faut-il pour ouvrir un magasin ?",
        "Couramment 4 à 9 mois entre le choix du site et l’ouverture pour un local de centre commercial ou de centre-ville, la négociation du bail et les travaux pesant le plus lourd. Le modèle propose un planning d’environ sept mois."
      ],
      [
        "Qu’est-ce qui retarde le plus une ouverture ?",
        "Les accords du bailleur et de la gestion du centre, les autorisations et l’enseigne livrée tard. Ce sont trois durées de tiers, d’où le choix de traiter autorisations et licences comme des chemins propres plutôt que dans les travaux."
      ],
      [
        "Quand passer la commande d’ouverture ?",
        "Assez tôt pour que la livraison précède le marchandisage, en remontant depuis les délais annoncés par vos fournisseurs. Le modèle lie l’implantation à la livraison pour que l’antériorité reste visible."
      ],
      [
        "Est-ce utilisable pour un éphémère ou un corner ?",
        "Oui. Supprimez les lignes d’autorisation et de devanture pour un corner installé dans un magasin hôte, et comprimez la phase travaux — licences, systèmes, stock et recrutement restent identiques."
      ],
      [
        "Le modèle d’ouverture de magasin est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans inscription."
      ]
    ]
  },

  'film-production-schedule': {
    card: "Développement, préparation, tournage, post-production et livraison.",
    h1: "Planning de production d’un film",
    metaTitle: "Production d’un film — planning",
    metaDesc: "Modèle gratuit de planning de film : développement, préparation, tournage, post-production, son, étalonnage et livraison des masters.",
    lead: "Un <strong>planning de production de film</strong> gratuit couvrant tout le film — développement et financement, préparation et distribution artistique, le tournage lui-même, le montage jusqu’à l’image définitive, le son et l’étalonnage, puis le dossier de livraison réellement exigé par le distributeur. Téléchargez-le pour un dossier de financement, ou ouvrez-le en ligne pour lier les antériorités qui décident si votre date de livraison tient.",
    intro: "Tous les départements travaillent pour les dates de tournage, et tout ce qui suit le tournage travaille pour la date de livraison. Le modèle pose ces deux points fixes sur le planning et laisse le reste s’organiser autour :",
    phases: [
      [
        "Développement",
        "Versions du scénario, droits et options, dépouillement budget et plan de travail, financement et décision de mise en production. <em>Jalon : feu vert.</em>"
      ],
      [
        "Préparation",
        "Distribution artistique, chefs de poste, repérages et autorisations de tournage, décors et construction, costumes, essais caméra et matériel, et le plan de travail lui-même."
      ],
      [
        "Tournage",
        "Le tournage, découpé en blocs de studio et de décors naturels, avec la date de fin comme centre immuable de tout le plan. <em>Jalon : fin de tournage.</em>"
      ],
      [
        "Post-production — image",
        "Rushes et bout-à-bout pendant le tournage, montage monteur, montage réalisateur, retours et image définitive. <em>Jalon : image verrouillée.</em>"
      ],
      [
        "Post-production — son et finition image",
        "Postsynchronisation, bruitage, création sonore, musique, mixage, livraison des plans truqués, étalonnage et conformation."
      ],
      [
        "Livraison et distribution",
        "DCP et masters, contrôle qualité, sous-titres et versions, matériel promotionnel, inscriptions en festivals et dossier de livraison. <em>Jalon : livraison acceptée.</em>"
      ]
    ],
    callout: "Le tournage est la seule phase qu’on ne peut pas allonger sans dépenser de l’argent réel chaque jour. Tout ce qui précède existe pour le rendre possible, tout ce qui suit hérite de ce qu’il a produit. Fixez d’abord les dates de tournage, puis vérifiez que la préparation dispose d’assez de marge en amont — et non l’inverse.",
    customize: [
      "Poser d’abord le début et la fin de tournage, et faire remonter la préparation à rebours.",
      "Une ligne par bloc de tournage ou par décor, pour rendre visibles les journées de déplacement : les changements de lieu non prévus mangent des jours de tournage.",
      "Allonger et avancer les lignes d’effets visuels si le nombre de plans est significatif : les VFX courent souvent du tournage au mixage final.",
      "Inscrire les dates limites d’inscription en festival comme jalons : ce sont des dates fixes qui tirent tout le calendrier de post-production vers l’avant.",
      "Garder les journées de marge à l’intérieur du tournage plutôt qu’à la fin, où elles ne se distinguent plus d’un retard."
    ],
    tips: [
      "<strong>Commencez rushes et bout-à-bout pendant le tournage.</strong> Un monteur qui travaille en parallèle fait exister le bout-à-bout le jour de la fin de tournage, au lieu de commencer ce jour-là.",
      "<strong>Verrouillez l’image avant d’engager le son et l’étalonnage.</strong> Remonter après le début du mixage est l’erreur évitable la plus chère de la post-production.",
      "<strong>Traitez repérages et autorisations comme des articles à long délai.</strong> Autorisations, fermetures de rue et conventions de lieu ont des durées de tiers qu’on ne comprime pas en travaillant plus.",
      "<strong>Distribuez les rôles principaux avant d’arrêter le plan de travail.</strong> La disponibilité des comédiens réécrit le plan : c’est une antériorité, pas une tâche parallèle.",
      "<strong>Lisez les exigences de livraison au début, pas à la fin.</strong> Les listes d’éléments à livrer sont longues, précises et non négociables ; les découvrir le dernier mois ajoute des semaines."
    ],
    faq: [
      [
        "Combien de temps dure une production de film ?",
        "Pour un long métrage indépendant, couramment 12 à 18 mois entre le feu vert et la livraison — environ deux à trois mois de préparation, quatre à huit semaines de tournage et six à neuf mois de post-production et de livraison. Le modèle se situe dans cette fourchette."
      ],
      [
        "Quelles sont les phases d’une production ?",
        "Développement, préparation, tournage, post-production et livraison. Ce modèle scinde la post-production en image d’une part, son et finition de l’autre, parce que l’image verrouillée est le jalon qui les sépare."
      ],
      [
        "Combien de temps de préparation faut-il ?",
        "Assez pour distribuer, repérer, autoriser et construire avant le premier jour. Huit à douze semaines est courant sur un long métrage modeste ; raccourcir se paie en jours perdus au tournage, pas en économies."
      ],
      [
        "Les effets visuels sont-ils inclus ?",
        "Oui : la livraison des plans truqués figure dans la phase de finition et démarre pendant la post-production. Si votre nombre de plans est important, avancez ces lignes pour que le travail du prestataire recouvre le montage."
      ],
      [
        "Le modèle de production de film est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans compte ni filigrane."
      ]
    ]
  },

  'bridge-construction-schedule': {
    card: "Reconnaissance, autorisations, fondations, appuis, tablier et mise en service.",
    h1: "Planning de construction d’un pont",
    metaTitle: "Construction d’un pont — planning",
    metaDesc: "Modèle gratuit de planning d’ouvrage d’art : reconnaissance, autorisations, pieux, appuis, tablier, revêtement, épreuves et mise en service.",
    lead: "Un <strong>planning de construction de pont</strong> gratuit, déroulé comme un vrai programme de travaux d’art — reconnaissance des sols et études, autorisations administratives, pieux et fondations, appuis, pose du tablier, étanchéité et dispositifs de retenue, épreuves de chargement et mise en service. Téléchargez-le pour une remise d’offre ou un point d’avancement client, ou ouvrez-le en ligne pour lier les fenêtres de coupure et les opérations soumises aux conditions météo qui commandent réellement la date.",
    intro: "Un programme d’ouvrage d’art est gouverné par ce que vous ne maîtrisez pas : la rivière, la voie en dessous, la météo et l’autorité qui approuve. Le modèle donne à chacun une place visible plutôt que de les enfouir dans une barre de travaux :",
    phases: [
      [
        "Reconnaissance et études de sol",
        "Levés topographiques et bathymétriques, sondages et interprétation géotechnique, recherche de réseaux et état initial environnemental. <em>Jalon : rapport géotechnique remis.</em>"
      ],
      [
        "Conception et autorisations",
        "Avant-projet et projet, études des ouvrages provisoires, approbation technique par le gestionnaire routier ou ferroviaire, autorisations environnementales et loi sur l’eau. <em>Jalon : approbation technique.</em>"
      ],
      [
        "Travaux préparatoires et fenêtres de coupure",
        "Installation de chantier, accès et pistes, déviations de réseaux, batardeau ou estacade, et les fenêtres de coupure routières ou fluviales réservées."
      ],
      [
        "Pieux et fondations",
        "Pieux sous chaque appui et culée, essais de pieux, semelles et bétonnage des fondations — l’opération la plus exposée au risque géotechnique et au niveau de la rivière."
      ],
      [
        "Appuis",
        "Culées, murs en retour, piles et chevêtres, bossages et pose des appareils d’appui. <em>Jalon : appuis terminés.</em>"
      ],
      [
        "Tablier et superstructure",
        "Fabrication et livraison des poutres, mise en place au grue ou par lançage pendant la coupure, coffrage, ferraillage et bétonnage du hourdis."
      ],
      [
        "Revêtement, épreuves et mise en service",
        "Étanchéité, couche de roulement, corniches et dispositifs de retenue, assainissement, épreuves de chargement, levée des réserves et ouverture à la circulation. <em>Jalon : ouverture à la circulation.</em>"
      ]
    ],
    callout: "La fenêtre de coupure est le planning. Le levage des poutres au-dessus d’une route en service, d’une voie ferrée ou d’un fleuve navigable se fait presque toujours dans une coupure réservée des mois à l’avance et impossible à déplacer. Inscrivez la demande, la confirmation et la fenêtre elle-même comme trois tâches distinctes : tout ce qui est en amont n’existe que pour rendre ce week-end réalisable.",
    customize: [
      "Saisir d’abord les dates de coupure confirmées et remonter à rebours : presque toutes les autres dates d’un ouvrage d’art se négocient autour d’elles.",
      "Ajouter une ligne par pile et par culée dès que la séquence des appuis est connue, pour suivre individuellement pieux et bétonnages.",
      "Signaler les opérations soumises aux conditions météo — bétonnage du hourdis, étanchéité et couche de roulement ont tous des limites de température ou de pluviométrie.",
      "Étendre la barre d’approbation technique au délai réel d’instruction de votre gestionnaire, boucle de réponse aux observations comprise.",
      "Garder les études d’ouvrages provisoires comme tâche propre : l’approbation des étaiements, du batardeau et du dispositif de lançage conditionne les ouvrages définitifs.",
      "Insérer les périodes d’exclusion — crues saisonnières ou migration piscicole — sous forme de barres bloquées si vous intervenez en lit de cours d’eau."
    ],
    tips: [
      "<strong>Demandez les coupures avant la fin des études.</strong> Les délais d’obtention pour une fermeture de route ou une coupure ferroviaire se comptent en mois, et les créneaux vont au premier qui réserve.",
      "<strong>Traitez les ouvrages provisoires comme des ouvrages définitifs.</strong> Étaiements, batardeaux et dispositifs de lançage demandent étude, contrôle et approbation, et ils sont directement sur le chemin critique du tablier.",
      "<strong>Ne programmez pas de bétonnage que vous ne pouvez ni chauffer ni refroidir.</strong> Les gros bétonnages de hourdis repoussés en plein hiver sont régulièrement annulés le matin même ; placez-les dans une saison praticable.",
      "<strong>Modélisez la rivière, pas la moyenne.</strong> Les fondations en lit de cours d’eau se planifient autour de la période historique de hautes eaux, avec une marge d’un mois perdu plutôt que d’une semaine.",
      "<strong>Laissez du temps réel aux épreuves de chargement.</strong> Les essais, l’instrumentation et la certification qui suit sont une condition d’ouverture, pas une inspection de fin de chantier.",
      "<strong>Posez la référence à l’approbation technique.</strong> Tout ce qui précède relève de l’estimation ; après, suivez l’écart pour rendre visibles les modifications demandées par l’autorité."
    ],
    faq: [
      [
        "Combien de temps faut-il pour construire un pont ?",
        "Un petit ouvrage routier à travée unique tient couramment en 9 à 18 mois à compter du démarrage du chantier ; un grand franchissement demande plusieurs années. Ce modèle propose un programme d’environ deux ans, à comprimer ou étendre en déplaçant la date d’ouverture."
      ],
      [
        "Qu’est-ce qui retarde le plus un ouvrage d’art ?",
        "Les conditions de sol découvertes au forage des pieux, les boucles d’approbation technique avec le gestionnaire routier ou ferroviaire, et les fenêtres de coupure manquées. Les trois sont ici des chemins distincts, pour que l’exposition soit visible avant de coûter cher."
      ],
      [
        "Comment représenter une coupure routière ou ferroviaire ?",
        "En ajoutant la demande, la confirmation et la fenêtre comme trois tâches, et en faisant dépendre le levage du tablier de la fenêtre. Une activité amont qui glisse menace alors visiblement une date que vous ne pouvez pas déplacer."
      ],
      [
        "Est-ce adapté à une passerelle ou au remplacement d’un ouvrage hydraulique ?",
        "Oui. Gardez les phases reconnaissance, autorisations, fondations et superstructure et retirez les lignes de piles : la séquence est la même à plus petite échelle."
      ],
      [
        "Le modèle de construction de pont est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans compte ni filigrane."
      ]
    ]
  },

  'trade-show-planning-timeline': {
    card: "Rétroplanning de salon : stand, logistique, équipe et relance des contacts.",
    h1: "Rétroplanning d’un salon professionnel",
    metaTitle: "Salon professionnel — rétroplanning",
    metaDesc: "Modèle gratuit de rétroplanning de salon : réservation, stand, logistique, marketing amont, équipe, jours de salon et relance des contacts.",
    lead: 'Un <strong>rétroplanning de salon professionnel</strong> gratuit, construit en compte à rebours — choix et contrat de l’emplacement, conception et construction du stand, dates limites de transport et de manutention, marketing amont et prise de rendez-vous, équipe et briefing, les jours de salon eux-mêmes, puis la relance des contacts qui décide si l’opération s’est payée. Pour un événement qui n’est pas un salon, voir le <a href="/templates/event-planning.html">modèle d’organisation d’événement</a>.',
    intro: "Exposer relève du compte à rebours plus que du projet. Trois ou quatre dates sont réellement immuables et tout le reste s’organise autour : le modèle les affiche donc en jalons plutôt qu’en tâches :",
    phases: [
      [
        "Emplacement et contrat",
        "Choix du salon, validation du budget, examen du plan de halle, sélection de l’emplacement à la date d’ancienneté et signature du contrat. <em>Jalon : emplacement contractualisé.</em>"
      ],
      [
        "Conception et construction du stand",
        "Brief, avant-projet, choix du standiste, validation du projet par l’organisateur, fabrication, graphisme et pré-montage."
      ],
      [
        "Prestations et logistique",
        "Commande d’électricité, d’accroche, d’internet et de mobilier au tarif anticipé, réservation du transport, date limite d’expédition et créneau de montage attribué. <em>Jalon : date limite d’expédition.</em>"
      ],
      [
        "Marketing amont",
        "Liste de comptes cibles, campagne d’invitation, prise de rendez-vous, relations presse et créneaux de conférence, activité sociale et web dans les dernières semaines."
      ],
      [
        "Équipe et préparation",
        "Planning de présence sur le stand, déplacements et hébergement, briefing produit et discours, formation à la collecte de contacts et répétition de la démonstration."
      ],
      [
        "Jours de salon",
        "Montage, ouverture du stand, rendez-vous et démonstrations, revue quotidienne des contacts, démontage et transport retour. <em>Jalon : ouverture du salon.</em>"
      ],
      [
        "Relance et bilan",
        "Intégration des contacts en quelques jours et non en semaines, relance par niveau de priorité, attribution du pipeline, bilan des coûts et décision pour l’édition suivante."
      ]
    ],
    callout: "Trois échéances de ce planning ne bougent pas : la date de sélection des emplacements, qui détermine où vous serez l’an prochain ; la date limite des commandes au tarif anticipé, après laquelle chaque prestation coûte plus cher ; et la date limite d’expédition, après laquelle votre stand arrive en retard ou pas du tout. Tout le reste est négociable. Marquez ces trois-là et faites tenir le plan autour.",
    customize: [
      "Poser la date d’ouverture du salon et faire remonter tout le plan à rebours : c’est ainsi que se prépare réellement une participation.",
      "Remplacer les échéances génériques par les vraies dates du guide de l’exposant dès sa parution.",
      "Ajouter une ligne par expédition si stand, produits et documentation partent séparément : leurs dates limites diffèrent.",
      "Allonger la barre de marketing amont si vous comptez sur des rendez-vous pris à l’avance : l’agenda se remplit six à huit semaines avant, pas la semaine précédente.",
      "Ajouter une tâche douane et carnet ATA pour un salon à l’étranger : elle a son propre délai et peut immobiliser un stand à la frontière.",
      "Garder la relance sur le planning avec des tâches datées : les contacts se périment vite et une relance sans date n’est pas un plan."
    ],
    tips: [
      "<strong>Réservez l’an prochain pendant le salon de cette année.</strong> La sélection des emplacements se fait généralement sur place, à l’ancienneté et au budget : c’est pourquoi elle ouvre ce modèle au lieu de le clore.",
      "<strong>Commandez les prestations au tarif anticipé.</strong> Électricité, accroche et internet commandés après la date limite coûtent régulièrement bien plus cher pour exactement la même chose.",
      "<strong>Tenez la date limite d’expédition avec de la marge.</strong> Les envois tardifs passent en fin de file de manutention, et votre créneau de montage ne les attend pas.",
      "<strong>Faites valider le projet de stand tôt par l’organisateur.</strong> Hauteurs, enseignes suspendues et structures à étage exigent une approbation et seront refusées sur place si rien n’a été déposé.",
      "<strong>Répétez la démonstration avant de partir.</strong> Découvrir sur place qu’une démo réclame une bande passante non commandée est un problème sans solution sur place.",
      "<strong>Relancez sous 48 heures.</strong> Le premier facteur de rentabilité d’un salon est la rapidité de la relance : programmez-la avant de partir, pas au retour."
    ],
    faq: [
      [
        "Combien de temps à l’avance préparer un salon ?",
        "Six à neuf mois pour un grand salon, davantage si vous visez un bon emplacement — l’espace de l’édition suivante se choisit souvent pendant l’édition en cours. Ce modèle couvre environ huit mois jusqu’à l’ouverture."
      ],
      [
        "En quoi diffère-t-il du modèle d’organisation d’événement ?",
        'Celui-ci est propre à l’exposition : contrat d’emplacement, construction du stand, transport et manutention, commandes au tarif anticipé et relance des contacts. Le <a href="/templates/event-planning.html">modèle d’organisation d’événement</a> couvre votre propre événement — lieu, programme, intervenants, participants.'
      ],
      [
        "Quelles sont les échéances immuables quand on expose ?",
        "La sélection de l’emplacement, la date limite des commandes au tarif anticipé figurant au guide de l’exposant, la date limite de transport et de manutention, et votre créneau de montage. Les quatre apparaissent ici en jalons."
      ],
      [
        "Est-ce utilisable pour un simple stand de conférence ?",
        "Oui. Gardez la structure et retirez les lignes de construction si vous prenez un stand équipé ou une simple table."
      ],
      [
        "Le modèle de salon professionnel est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans inscription."
      ]
    ]
  },

  'recruitment-hiring-plan': {
    card: "D’une ouverture de poste à l’arrivée : sourcing, entretiens, offre, préavis.",
    h1: "Plan de recrutement",
    metaTitle: "Plan de recrutement — modèle",
    metaDesc: "Modèle gratuit de plan de recrutement : validation du poste, sourcing, présélection, entretiens, offre, préavis et date d’arrivée.",
    lead: 'Un <strong>plan de recrutement</strong> gratuit couvrant un poste de bout en bout — définition du besoin et validation de l’effectif, sourcing, présélection, cycle d’entretiens, évaluation et références, offre et négociation, préavis du candidat, puis la date d’arrivée. Il s’arrête exactement là où commence l’<a href="/templates/employee-onboarding.html">intégration d’un nouveau collaborateur</a>.',
    intro: "La plupart des plans de recrutement sous-estiment les deux mêmes choses : la durée de la validation au départ et celle du préavis à l’arrivée. Le modèle donne à chacune une vraie barre, pour que la date d’arrivée soit honnête :",
    phases: [
      [
        "Définition du poste et validation",
        "Argumentaire, fiche de poste, positionnement et fourchette salariale, validation de l’effectif et ouverture du poste. <em>Jalon : poste validé.</em>"
      ],
      [
        "Sourcing",
        "Publication de l’annonce, cooptation, approche directe, briefing du cabinet le cas échéant, et constitution d’un vivier jusqu’à un nombre cible de candidats."
      ],
      [
        "Présélection",
        "Tri des candidatures, entretiens de préqualification, entretiens du manager et arrêt de la liste courte. <em>Jalon : liste courte arrêtée.</em>"
      ],
      [
        "Cycle d’entretiens",
        "Entretiens structurés avec le jury, exercice technique ou métier, logistique de planification et séances de débriefing."
      ],
      [
        "Évaluation et décision",
        "Étude de cas ou travail témoin, jury final, consolidation des grilles, prise de références et vérifications. <em>Jalon : décision d’embauche.</em>"
      ],
      [
        "Offre et négociation",
        "Validation de la rémunération, proposition orale, contrat écrit, négociation et signature. <em>Jalon : offre acceptée.</em>"
      ],
      [
        "Préavis et pré-intégration",
        "Démission et préavis du candidat, maintien du lien, préparation du matériel et des accès, et le premier jour. <em>Jalon : date d’arrivée.</em>"
      ]
    ],
    callout: "Le préavis n’est pas de l’administratif : c’est souvent la plus longue barre du planning. Un cadre soumis à trois mois de préavis signifie que le poste validé aujourd’hui produit une personne opérationnelle dans cinq ou six mois. Les plans qui s’arrêtent à « offre acceptée » promettent systématiquement une capacité un trimestre avant qu’elle n’existe.",
    customize: [
      "Remonter à rebours depuis le moment où vous avez besoin d’une personne productive, pas depuis celui où vous voulez une signature.",
      "Caler la barre de préavis sur l’usage réel du poste et du pays : un mois, trois mois ou six mois donnent des plans très différents.",
      "Dupliquer les phases sourcing à offre par poste si vous recrutez une équipe, et les décaler selon la disponibilité des jurys.",
      "Ajouter un chemin cabinet ou chasse avec ses propres jalons le cas échéant : les dates de briefing et de liste courte sont contractuelles.",
      "Insérer les démarches de visa ou d’autorisation de travail comme tâches propres quand elles s’appliquent : elles peuvent dépasser le préavis.",
      "Garder les tâches de maintien du lien : c’est entre la signature et l’arrivée que les candidats acceptés se font reprendre par une contre-offre."
    ],
    tips: [
      "<strong>Faites valider l’effectif avant de publier.</strong> Un poste qui atteint le jury final sans accord budgétaire gâche le temps du candidat et votre crédibilité.",
      "<strong>Réservez à l’avance le temps du jury.</strong> La planification, et non la décision, est la première source de retard dans la plupart des processus.",
      "<strong>Comprimez le cycle d’entretiens, pas la présélection.</strong> Les bons candidats sont généralement dans plusieurs processus ; un cycle qui dépasse trois semaines les perd au profit du plus rapide.",
      "<strong>Lancez les références avant la décision finale quand c’est possible.</strong> Elles demandent régulièrement une semaine de relances et se placent pile entre la décision et l’offre.",
      "<strong>Traitez l’offre comme une négociation qui a une durée.</strong> Prévoir quelques jours pour une contre-proposition et une réponse est plus réaliste qu’une acceptation le jour même.",
      "<strong>Passez la main à l’intégration à la signature, pas au premier jour.</strong> Matériel, comptes et plan de première semaine demandent du délai, pris pendant le préavis."
    ],
    faq: [
      [
        "Combien de temps faut-il pour recruter ?",
        "Couramment 6 à 12 semaines entre le poste validé et l’offre signée, plus le préavis. Ce modèle couvre environ cinq mois entre l’argumentaire et la date d’arrivée, ce qui est réaliste pour un préavis de un à trois mois."
      ],
      [
        "Comment s’articule-t-il avec le modèle d’intégration ?",
        'Ce plan s’arrête à la date d’arrivée ; le <a href="/templates/employee-onboarding.html">modèle d’intégration</a> prend le relais du premier jour aux quatre-vingt-dix premiers jours. Enchaînez-les pour la vue complète.'
      ],
      [
        "Quelle est la cause la plus fréquente d’un recrutement lent ?",
        "La planification des entretiens et la lenteur des décisions internes, pas le sourcing. C’est pourquoi le cycle d’entretiens et le débriefing sont ici des tâches distinctes plutôt qu’un bloc unique."
      ],
      [
        "Peut-on planifier plusieurs recrutements à la fois ?",
        "Oui : dupliquez les phases sourcing à offre par poste et décalez les cycles d’entretiens pour ne pas mobiliser deux fois le même jury la même semaine."
      ],
      [
        "Le modèle de plan de recrutement est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans compte."
      ]
    ]
  },

  'internal-audit-plan': {
    card: "Cycle complet : risques, cadrage, travaux de terrain, constats et suivi.",
    h1: "Plan d’audit interne",
    metaTitle: "Plan d’audit interne — modèle",
    metaDesc: "Modèle gratuit de plan d’audit interne : évaluation des risques, cadrage, travaux de terrain, constats, réponse de la direction, rapport et suivi.",
    lead: "Un <strong>plan d’audit interne</strong> gratuit couvrant un cycle complet — évaluation annuelle des risques et univers d’audit, approbation du plan par le comité, cadrage et préparation de la mission, travaux de terrain et tests de contrôle, constats et réponse de la direction, émission du rapport, puis suivi des recommandations. Téléchargez-le pour le dossier du comité d’audit, ou ouvrez-le en ligne pour étaler plusieurs missions sur une année.",
    intro: "Un plan d’audit a deux niveaux : le programme annuel et la mission qui s’y loge. Le modèle montre les deux, pour que le comité voie la couverture pendant que l’équipe voit le travail :",
    phases: [
      [
        "Planification annuelle",
        "Évaluation des risques, mise à jour de l’univers d’audit, entretiens avec les parties prenantes, plan de charge et de budget, projet de plan annuel. <em>Jalon : plan approuvé par le comité.</em>"
      ],
      [
        "Cadrage de la mission",
        "Note de lancement, recherche documentaire, revues de processus, matrice risques-contrôles, périmètre et lettre de mission validés."
      ],
      [
        "Travaux de terrain et tests",
        "Évaluation de la conception des contrôles, sélection des échantillons, revues de processus et tests substantifs, collecte des preuves et dossiers de travail."
      ],
      [
        "Constats et validation",
        "Projet de constats, vérification de l’exactitude des faits avec les propriétaires de processus, cotation et hiérarchisation, réunion de clôture. <em>Jalon : réunion de clôture tenue.</em>"
      ],
      [
        "Réponse de la direction",
        "Accord sur les actions, responsables nommés et dates cibles, et escalade de tout risque que la direction choisit d’accepter."
      ],
      [
        "Rapport",
        "Projet de rapport, revue qualité, émission du rapport définitif et présentation au comité d’audit. <em>Jalon : rapport émis.</em>"
      ],
      [
        "Suivi des recommandations",
        "Suivi de la mise en œuvre par rapport aux dates convenues, tests de vérification des actions clôturées et remontée des retards au comité."
      ]
    ],
    callout: "Le suivi est là où la valeur de l’audit se réalise, et là où les plans s’arrêtent d’ordinaire. Un rapport émis sans tâche de vérification datée derrière lui est une opinion ; une date de mise en œuvre suivie, assortie d’un test de contrôle sur le planning, est un dispositif qui a réellement changé. Gardez les barres de suivi dans le plan et affectez-y des ressources.",
    customize: [
      "Étaler plusieurs missions côte à côte sur l’année pour vérifier que l’équipe est réellement disponible pour toutes.",
      "Poser d’abord les dates de comité d’audit : elles sont fixes, et chaque date de rapport remonte depuis l’une d’elles.",
      "Ajouter une ligne par entité auditable si vous rendez compte au comité de la couverture de l’univers d’audit.",
      "Allonger les travaux de terrain pour les missions demandant des déplacements ou des extractions de données : les deux prennent plus de temps qu’un test sur pièces.",
      "Prévoir une réserve pour missions non planifiées ou investigations spéciales : l’imprévu est normal, et l’imprévu non budgété détruit le plan.",
      "Suivre la date de mise en œuvre de chaque constat comme une tâche propre une fois le rapport émis, plutôt que dans un tableur à part."
    ],
    tips: [
      "<strong>Bâtissez le plan sur le risque, puis vérifiez la couverture.</strong> Un plan hiérarchisé par les risques qui ignore discrètement toute une entité pendant trois ans, c’est le constat que les auditeurs externes feront sur vous.",
      "<strong>Annoncez tôt et faites poser les rendez-vous de revue.</strong> La disponibilité des audités est la première cause de dépassement des travaux de terrain, et elle est entièrement prévisible.",
      "<strong>Validez les faits avant de coter les constats.</strong> Une erreur factuelle découverte après cotation coûte au rapport son autorité et ajoute un cycle de revue complet.",
      "<strong>Ne laissez pas filer la réponse de la direction.</strong> Donnez-lui une barre bornée avec une échéance : les délais de réponse ouverts sont la façon dont les rapports ratent les dates de comité.",
      "<strong>Retestez plutôt que de redemander.</strong> Vérifier une action clôturée suppose des preuves, donc du temps sur le planning, pas un simple courriel de confirmation.",
      "<strong>Posez la référence à l’approbation du plan.</strong> Suivez l’écart au plan approuvé pour que le travail non planifié se lise comme un déplacement, et non comme un glissement absorbé en silence."
    ],
    faq: [
      [
        "Que doit contenir un plan d’audit interne ?",
        "Une évaluation des risques et un univers d’audit, une liste hiérarchisée de missions avec leurs ressources, et pour chaque mission le cadrage, les travaux de terrain, les constats, la réponse de la direction, le rapport et le suivi. Les sept phases sont préchargées."
      ],
      [
        "Combien de temps dure une mission d’audit interne ?",
        "Couramment 6 à 12 semaines entre l’annonce et le rapport émis pour une mission de taille moyenne, le suivi courant ensuite sur plusieurs mois. La mission de ce modèle s’étale sur environ quatre mois."
      ],
      [
        "À quelle fréquence actualiser le plan annuel ?",
        "La plupart des directions d’audit font approuver le plan chaque année et le réexaminent au moins tous les six mois, puisque les profils de risque et l’imprévu évoluent. C’est la réserve inscrite au plan qui rend ce réexamen tenable."
      ],
      [
        "Est-ce utilisable pour un audit externe ou de certification ?",
        "En partie. Cadrage, travaux de terrain, constats et suivi se transposent bien ; vous remplaceriez la planification annuelle par le cycle d’audit propre à l’organisme certificateur."
      ],
      [
        "Le modèle de plan d’audit interne est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans inscription."
      ]
    ]
  },

  'hospital-department-opening': {
    card: "Du dossier de projet au premier patient : travaux, équipements, hygiène.",
    h1: "Plan d’ouverture d’un service hospitalier",
    metaTitle: "Ouverture d’un service hospitalier",
    metaDesc: "Modèle gratuit d’ouverture de service hospitalier : dossier, conception, travaux, équipements, hygiène hospitalière, effectifs et premier patient.",
    lead: "Un <strong>plan d’ouverture de service hospitalier</strong> gratuit couvrant la mise en service d’un nouveau service ou d’une nouvelle unité — dossier de projet et validation de l’investissement, conception et dérogations aux normes de construction hospitalière, travaux et aménagement, achat des dispositifs médicaux, validation par l’équipe d’hygiène hospitalière, recrutement et habilitations, sécurité des données de santé, et la dernière ligne droite jusqu’au premier patient.",
    intro: "Ouvrir un service de soins n’est pas un chantier avec un peu de clinique à la fin. C’est une suite de points de passage réglementaires, dont chacun peut empêcher l’ouverture le jour prévu. Le modèle donne à chacun sa propre ligne :",
    phases: [
      [
        "Dossier de projet et validation",
        "Besoin de soins et modèle d’organisation, modélisation de l’activité et des effectifs, dossier d’investissement, validation par la direction et par l’autorité de tutelle. <em>Jalon : dossier validé.</em>"
      ],
      [
        "Conception et dérogations",
        "Programme des locaux, conception détaillée selon les normes de construction hospitalière, dérogations acceptées là où le bâtiment existant ne peut s’y conformer, et autorisations réglementaires. <em>Jalon : conception figée.</em>"
      ],
      [
        "Travaux et aménagement",
        "Travaux préparatoires et déménagement provisoire, gros œuvre et lots techniques, réseaux de fluides médicaux, traitement d’air et chambres d’isolement, finitions et réception. <em>Jalon : travaux terminés.</em>"
      ],
      [
        "Dispositifs médicaux",
        "Liste des équipements et budget, procédure d’achat, commandes d’imagerie à long délai, livraison, installation, essais de réception et étalonnage."
      ],
      [
        "Hygiène hospitalière et validations",
        "Avis de l’équipe opérationnelle d’hygiène sur la conception, protocole de rinçage et sécurité sanitaire de l’eau, validation du traitement d’air, prélèvements environnementaux et microbiologiques. <em>Jalon : accord hygiène.</em>"
      ],
      [
        "Effectifs et compétences",
        "Plan d’effectifs, recrutement, vérification des titres et autorisation d’exercer, intégration et validation des compétences."
      ],
      [
        "Données de santé et systèmes",
        "Paramétrage du dossier patient informatisé, analyse d’impact relative à la protection des données, tests des interfaces et des archives, et validation par le délégué à la protection des données."
      ],
      [
        "Mise en service et ouverture",
        "Protocoles et procédures d’exploitation, journées de simulation à blanc, autorisation d’activité et passage de la commission de sécurité, décision d’ouverture et premier patient. <em>Jalon : premier patient.</em>"
      ]
    ],
    callout: "Les validations ne sont pas de la levée de réserves. Vérification du traitement d’air, prélèvements d’eau et essais de réception des équipements interviennent tous après le départ des entreprises et avant qu’un patient puisse être admis, et chacun dépend d’un délai de laboratoire que vous ne maîtrisez pas. Laissez six à huit semaines entre l’achèvement des travaux et la date d’ouverture, et inscrivez chaque essai comme une tâche avec sa date de résultat.",
    customize: [
      "Poser la date d’ouverture exigée et remonter à rebours depuis l’accord hygiène : c’est ce point de passage, et non la fin des travaux, qui libère réellement les locaux.",
      "Ajouter une ligne par dérogation dès le début de la revue de conception : chacune est une acceptation de risque documentée avec un approbateur nommé.",
      "Détailler la phase équipements en une ligne par matériel lourd, avec les délais réellement annoncés — l’imagerie et le bloc dépassent régulièrement la durée du chantier.",
      "Allonger le recrutement s’il vous faut des infirmiers spécialisés ou un praticien titulaire : ce sont les postes qui glissent.",
      "Insérer la visite de la commission de sécurité comme barre fixe et faire dépendre le premier patient de son avis.",
      "Conserver une journée de simulation avant l’ouverture : c’est la façon la moins coûteuse de repérer les trous dans les circuits."
    ],
    tips: [
      "<strong>Lancez le protocole de sécurité sanitaire de l’eau dès la mise en eau des réseaux.</strong> Rinçages et prélèvements s’étalent sur plusieurs semaines, et un prélèvement non conforme relance le cycle au lieu de le décaler d’un jour.",
      "<strong>Commandez les équipements à long délai sur le dossier d’investissement, pas sur le chantier.</strong> Une commande passée au démarrage des travaux arrive après l’achèvement de l’unité.",
      "<strong>Traitez l’autorisation d’exercer comme une antériorité.</strong> Un praticien sans autorisation ne peut pas voir de patients, quel que soit l’état d’avancement du service.",
      "<strong>Lancez l’analyse d’impact tôt.</strong> Le paramétrage des logiciels est rapide ; la validation réglementaire qui l’entoure ne l’est pas.",
      "<strong>Tenez la revue d’ouverture avec les vrais décideurs dans la salle.</strong> Hygiène, données, technique et chef de service disposent chacun d’un droit de veto : rassembler ces avis le jour même, c’est ainsi qu’une ouverture est reportée.",
      "<strong>Posez la référence à la conception figée.</strong> Avant, tout est estimation ; après, chaque modification a un coût et un circuit de validation."
    ],
    faq: [
      [
        "Combien de temps faut-il pour ouvrir un nouveau service hospitalier ?",
        "Couramment 18 à 24 mois entre le dossier de projet et le premier patient pour une restructuration, davantage pour une construction neuve. Le modèle propose un programme de dix-huit mois, à comprimer ou étendre en déplaçant la date d’ouverture."
      ],
      [
        "Qu’est-ce qui retarde le plus l’ouverture d’un service de soins ?",
        "Les validations et la réglementation bien plus que les travaux : vérification du traitement d’air, prélèvements d’eau, essais de réception des équipements, autorisations d’exercer et conformité des données interviennent tous après les entreprises, avec des délais externes."
      ],
      [
        "Qu’appelle-t-on une dérogation dans ce contexte ?",
        "Un écart documenté et approuvé à une norme de construction ou à une prescription technique, lorsque le bâtiment existant ne peut pas s’y conformer. Elle se négocie pendant la conception et se signe par un approbateur nommé : elle apparaît donc comme une tâche et non comme une hypothèse."
      ],
      [
        "Est-ce utilisable pour la rénovation d’une unité plutôt que pour un service neuf ?",
        "Oui. Retirez les lignes de travaux préparatoires et de déménagement provisoire si aucune activité ne bouge, et gardez les phases hygiène, équipements et données : elles sont identiques dans les deux cas."
      ],
      [
        "Le modèle d’ouverture de service hospitalier est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans compte ni filigrane."
      ]
    ]
  },

  'school-year-planning-calendar': {
    card: "L’année scolaire vue de l’établissement : emploi du temps, examens, budget.",
    h1: "Calendrier de l’année scolaire",
    metaTitle: "Calendrier de l’année scolaire",
    metaDesc: "Modèle gratuit de calendrier de l’année scolaire : emploi du temps, service, inscriptions, vacances, examens, conseils de classe et budget.",
    lead: "Un <strong>calendrier de l’année scolaire</strong> gratuit, construit à l’échelle de l’établissement et non de la classe — offre de formation et construction de l’emploi du temps, répartition de service et remplacements, inscriptions et effectifs, dates de vacances et calendrier des événements, évaluations et périodes d’examens, conseils de classe et bulletins, inspection et instances, et l’exercice budgétaire qui court sous l’ensemble.",
    intro: "Une année scolaire se prépare deux fois : une première fois au printemps précédent, une seconde semaine après semaine pendant qu’elle se déroule. Le modèle montre les deux, les phases de préparation se plaçant avant le jour de la rentrée :",
    phases: [
      [
        "Offre de formation et emploi du temps",
        "Structure pédagogique et blocs d’options, répartition des enseignements, construction et vérification de l’emploi du temps, affectation des salles et des moyens. <em>Jalon : emploi du temps publié.</em>"
      ],
      [
        "Répartition de service et contrats",
        "Revue des postes, démissions et mutations, campagnes de recrutement, contrats signés, dispositif de remplacement et accueil des nouveaux personnels."
      ],
      [
        "Inscriptions et effectifs",
        "Portes ouvertes, période de candidature, affectations et recours, inscriptions et journées de liaison pour les nouveaux entrants. <em>Jalon : effectifs arrêtés.</em>"
      ],
      [
        "Dates et calendrier",
        "Dates de rentrée et de vacances, journées de formation des personnels, calendrier des événements publié et communication aux familles."
      ],
      [
        "Évaluations et périodes d’examens",
        "Points d’évaluation internes, examens blancs, inscriptions aux épreuves et dates limites, période d’examens, surveillance et aménagements d’épreuves, résultats. <em>Jalon : jour des résultats.</em>"
      ],
      [
        "Conseils de classe et familles",
        "Fenêtres de saisie des notes, rédaction et diffusion des bulletins, conseils de classe, rencontres parents-professeurs et objectifs de l’année suivante."
      ],
      [
        "Inspection et instances",
        "Auto-évaluation, calendrier du conseil d’administration, préparation à l’inspection, audit de sécurité et revue des règlements."
      ],
      [
        "Cycle budgétaire",
        "Notification de la dotation, construction et vote du budget, suivi en cours d’année et compte financier."
      ]
    ],
    callout: "L’emploi du temps et la répartition de service sont un seul problème, pas deux. On ne termine pas un emploi du temps sans savoir qui enseigne, et on n’arrête pas le service sans savoir ce que l’emploi du temps exige. Programmez-les en barres qui se recouvrent avec une échéance commune, et posez la date limite de démission sur le planning : c’est la seule date qui décide si l’emploi du temps est construit une fois ou trois fois.",
    customize: [
      "Placer le jour zéro au début du trimestre de préparation, et non à la rentrée : l’essentiel des décisions se prend avant septembre.",
      "Remplacer les périodes d’examens par les dates officielles de votre académie ou de votre certificateur : elles sont fixes et tout le reste se négocie autour.",
      "Ajouter une ligne par niveau ou par cycle lorsque les rythmes d’évaluation et de bulletins diffèrent.",
      "Insérer les dates du conseil d’administration en jalons : ce sont les points de validation du budget et des règlements.",
      "Allonger la phase inscriptions si vous gérez une procédure sélective ou une saison de recours.",
      "Marquer explicitement les journées de formation pour qu’elles soient planifiées et non intercalées après coup."
    ],
    tips: [
      "<strong>Posez la date limite de démission sur le planning.</strong> C’est la date ferme qui sépare un emploi du temps constructible d’un emploi du temps à refaire en août.",
      "<strong>Protégez les fenêtres de saisie des notes.</strong> Les bulletins dépendent d’une remontée à l’heure : un point d’évaluation qui glisse décale le conseil de classe, pas seulement le tableur.",
      "<strong>Organisez la surveillance des épreuves tôt.</strong> Le recrutement des surveillants et l’instruction des aménagements ont des délais et conditionnent tous deux la période d’examens.",
      "<strong>Calez les portes ouvertes avant la date limite de candidature.</strong> Des portes ouvertes après l’échéance sont une opération de communication, pas de recrutement.",
      "<strong>Gardez le cycle budgétaire visible.</strong> Les décisions de personnel prises sans la position budgétaire sous les yeux sont les plus coûteuses que puisse commettre un établissement.",
      "<strong>Préparez l’année suivante au troisième trimestre.</strong> Tout ce qui figure ici avant septembre appartient à l’année encore en cours."
    ],
    faq: [
      [
        "Que doit contenir un calendrier d’année scolaire ?",
        "L’offre de formation et l’emploi du temps, la répartition de service, les inscriptions, les dates de vacances, les évaluations et les périodes d’examens, les conseils de classe et bulletins, l’inspection et les instances, et le cycle budgétaire. Les huit sont préchargés en chemins distincts."
      ],
      [
        "Quand commencer la préparation de l’année suivante ?",
        "Généralement au printemps précédent : la date limite de démission, les blocs d’options et la notification de la dotation tombent tous plusieurs mois avant septembre. Le modèle démarre là plutôt qu’à la rentrée."
      ],
      [
        "Est-ce adaptable à un lycée professionnel ou à l’enseignement supérieur ?",
        "Oui. Gardez la structure, remplacez la période d’examens par vos jurys et les lignes d’inscription par votre procédure d’admission : la forme de l’année reste la même."
      ],
      [
        "Comment gérer deux ou trois rentrées par an ?",
        "Dupliquez les lignes d’inscriptions et d’effectifs pour chaque entrée et conservez un seul chemin emploi du temps et un seul chemin budget. Le modèle donne le schéma pour la rentrée principale."
      ],
      [
        "Le modèle de calendrier scolaire est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans inscription."
      ]
    ]
  },

  'nonprofit-fundraising-campaign': {
    card: "Phase silencieuse, lancement public, abondement et fidélisation des donateurs.",
    h1: "Plan de campagne de collecte de fonds",
    metaTitle: "Campagne de collecte de fonds — plan",
    metaDesc: "Modèle gratuit de plan de campagne de collecte : argumentaire, prospection, phase silencieuse, lancement public, abondement et fidélisation.",
    lead: "Un <strong>plan de campagne de collecte de fonds</strong> gratuit, construit comme se déroulent réellement les campagnes de grands donateurs — étude de faisabilité et argumentaire, recherche de prospects et constitution des portefeuilles, cultivation des grands dons pendant la phase silencieuse, lancement public, événements et fenêtres d’abondement, puis la reconnaissance et les comptes rendus qui décident si les donateurs redonneront.",
    intro: "Une campagne n’est pas un lancement suivi de dons. L’essentiel des montants est engagé avant que quiconque en entende parler publiquement, et c’est pourquoi la phase silencieuse occupe la plus grande part du planning :",
    phases: [
      [
        "Faisabilité et argumentaire",
        "Évaluation des besoins, fixation de l’objectif, entretiens de faisabilité avec les donateurs pressentis, document d’argumentaire et validation par le conseil d’administration. <em>Jalon : objectif validé.</em>"
      ],
      [
        "Prospection et portefeuilles",
        "Revue de la base de données, évaluation de la capacité de don, notation des prospects, attribution des portefeuilles et tableau de répartition des dons."
      ],
      [
        "Comité et phase silencieuse",
        "Constitution du comité de campagne, don des administrateurs, sollicitation des dons principaux et des grands dons, formalisation des promesses de don — le tout avant toute annonce publique. <em>Jalon : objectif de la phase silencieuse atteint.</em>"
      ],
      [
        "Lancement public",
        "Supports de lancement et résumé de l’argumentaire, plan presse et réseaux sociaux, événement de lancement et appel à l’ensemble des donateurs. <em>Jalon : lancement public.</em>"
      ],
      [
        "Événements et appels aux dons",
        "Gala ou événements de campagne, appels par courrier et par courriel, collecte de proximité et collecte par les pairs, et les journées de mobilisation."
      ],
      [
        "Abondement",
        "Mécène abondeur sécurisé, promotion de la fenêtre d’abondement, période d’abondement et rapprochement des fonds abondés."
      ],
      [
        "Reconnaissance et comptes rendus",
        "Remerciements et reçus fiscaux, reconnaissance des donateurs, compte rendu d’impact, encaissement des promesses et rapport de clôture. <em>Jalon : campagne close.</em>"
      ]
    ],
    callout: "Ne lancez pas publiquement avant que la phase silencieuse ait sécurisé l’essentiel de l’objectif. Les campagnes qui annoncent à quarante pour cent passent la phase publique à expliquer leur retard ; celles qui annoncent à soixante-dix pour cent la passent à construire une dynamique. La date de lancement doit découler du portefeuille, pas d’un calendrier de communication.",
    customize: [
      "Établir d’abord le tableau de répartition des dons, puis dimensionner la phase silencieuse au nombre d’entretiens de grands dons qu’il implique : ce nombre commande la durée.",
      "Ajouter une ligne par prospect principal une fois les portefeuilles attribués, pour suivre la cultivation au lieu de la supposer.",
      "Déplacer le jalon de lancement public au moment où le cumul de la phase silencieuse franchit réellement le seuil que vous avez fixé.",
      "Étendre la barre d’encaissement des promesses à votre période réelle : les promesses pluriannuelles survivent des années à la campagne.",
      "Ajouter les journées de mobilisation ou les appels de fin d’année là où ils tombent dans votre calendrier : ces dates sont fixes et le reste s’y adapte.",
      "Maintenir la reconnaissance des donateurs après la clôture : c’est le vivier de la campagne suivante."
    ],
    tips: [
      "<strong>Les entretiens de faisabilité sont de la cultivation.</strong> Les personnes à qui vous demandez un avis honnête sur l’objectif sont généralement celles à qui vous demanderez un don principal : programmez-les en conséquence.",
      "<strong>Sollicitez du haut vers le bas.</strong> Les dons principaux fixent l’échelle pour tous les autres ; commencer par le socle des donateurs moyens plafonne la campagne à ce qu’ils donnent.",
      "<strong>Sécurisez l’abondement avant d’en faire la promotion.</strong> Une fenêtre d’abondement annoncée sans engagement signé du mécène est une promesse que vous ne pourrez pas tenir.",
      "<strong>Inscrivez les remerciements sur le planning avec une échéance.</strong> Remercier un donateur en quelques jours est l’activité la plus rentable de la collecte, et la première abandonnée quand la campagne s’accélère.",
      "<strong>Suivez les promesses séparément des encaissements.</strong> Les totaux annoncés ne disent rien de la trésorerie tant que l’échéancier d’encaissement n’est pas affiché à côté.",
      "<strong>Posez la référence à la validation de l’objectif.</strong> Une fois le montant fixé par le conseil, suivez le portefeuille chaque semaine plutôt que de rendre compte lors des événements."
    ],
    faq: [
      [
        "Combien de temps dure une campagne de collecte de fonds ?",
        "Les grandes campagnes durent couramment deux à trois ans, phase silencieuse et encaissement des promesses compris. Le modèle propose un programme d’environ deux ans, à comprimer pour un appel annuel."
      ],
      [
        "Quelle part faut-il avoir collectée avant le lancement public ?",
        "L’usage est d’avoir engagé une large majorité de l’objectif en phase silencieuse avant d’annoncer — souvent cité autour de 70 pour cent. Le modèle place donc le jalon de lancement après l’objectif de phase silencieuse plutôt qu’à une date fixe."
      ],
      [
        "Qu’est-ce qu’un tableau de répartition des dons et où se place-t-il ?",
        "Un tableau du nombre de dons nécessaires à chaque niveau pour atteindre l’objectif. Il appartient à la phase de prospection, car il indique combien de prospects cultiver à chaque niveau avant de pouvoir s’engager sur le montant."
      ],
      [
        "Est-ce utilisable pour un appel annuel plutôt qu’une campagne de grands dons ?",
        "Oui. Raccourcissez la phase silencieuse, retirez les lignes de comité de campagne et gardez les appels, l’abondement et la fidélisation : c’est la forme d’une campagne annuelle."
      ],
      [
        "Le modèle de campagne de collecte est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans compte."
      ]
    ]
  },

  'warehouse-setup-project-plan': {
    card: "Du choix du site à la montée en charge : rayonnages, WMS, transfert de stock.",
    h1: "Plan de projet d’ouverture d’un entrepôt",
    metaTitle: "Ouverture d’un entrepôt — planning",
    metaDesc: "Modèle gratuit de projet d’entrepôt : choix du site, bail, rayonnages, intégration WMS, chariots élévateurs, transfert de stock et montée en charge.",
    lead: "Un <strong>plan de projet d’ouverture d’entrepôt</strong> gratuit couvrant un nouveau site de distribution de bout en bout — étude de schéma directeur et choix du site, bail et travaux du bailleur, conception et montage des rayonnages, choix et intégration du WMS (système de gestion d’entrepôt), achat des chariots élévateurs et des engins de manutention, transfert du stock depuis l’ancien site, et une montée en charge qui ne laisse pas vos clients sans livraison.",
    intro: "Un projet d’entrepôt, ce sont trois projets qui partagent un bâtiment : l’aménagement physique, l’intégration informatique et le déménagement du stock. Ils n’ont ni les mêmes délais ni les mêmes modes de défaillance, et le modèle les traite donc en chemins distincts :",
    phases: [
      [
        "Besoins et schéma directeur",
        "Profil des volumes et des références, modélisation des flux, analyse de localisation et dossier d’investissement. <em>Jalon : dossier validé.</em>"
      ],
      [
        "Choix du site et bail",
        "Recherche et liste courte, visite technique, vérification de la portance des dalles et de la puissance électrique, protocole d’accord, négociation du bail et travaux du bailleur. <em>Jalon : bail signé.</em>"
      ],
      [
        "Implantation et rayonnages",
        "Stratégie de stockage et affectation des emplacements, plan de rayonnages et autorisations, étude incendie et sprinklage, fabrication et montage des rayonnages, mezzanines et modules de préparation."
      ],
      [
        "Choix et intégration du WMS",
        "Expression de besoin et choix de l’éditeur, paramétrage, interfaces ERP et transporteurs, reprise des données et recette utilisateur. <em>Jalon : recette WMS prononcée.</em>"
      ],
      [
        "Engins et équipements",
        "Achat des chariots élévateurs et des chariots à mât rétractable, convoyeurs et tri le cas échéant, postes d’emballage, terminaux et étiquetage, et l’infrastructure de charge."
      ],
      [
        "Aménagement et infrastructure",
        "Puissance et éclairage, réseau et étude de couverture Wi-Fi, niveleurs de quai et portes, bureaux et locaux sociaux, sûreté et contrôle d’accès."
      ],
      [
        "Recrutement et formation",
        "Recrutement de l’encadrement du site, recrutement des opérateurs, formation au WMS et aux équipements, et obtention des autorisations de conduite."
      ],
      [
        "Transfert de stock et démarrage",
        "Assainissement du stock, vagues de transfert, inventaires tournants, double exploitation, bascule et montée en charge. <em>Jalon : volume nominal.</em>"
      ]
    ],
    callout: "L’étude de couverture Wi-Fi est une antériorité, pas un détail. Tous les processus scannés du bâtiment supposent une couverture dans chaque allée et à toute hauteur de rayonnage, et les rayonnages modifient complètement la propagation radio. Réalisez l’étude après le montage et avant le démarrage, avec le temps d’ajouter des bornes : les équipes qui mesurent un bâtiment vide découvrent les allées mortes au premier pic d’activité.",
    customize: [
      "Ancrer le plan sur la date de sortie du site actuel ou sur un engagement client : elle fixe le démarrage et tout se déduit à rebours.",
      "Ajuster le délai de fabrication des rayonnages à celui qui vous est réellement annoncé : c’est souvent le poste le plus long après le bail.",
      "Ajouter une ligne par interface (ERP, transporteurs, places de marché, retours) une fois l’éditeur WMS choisi : chacune a son propre cycle de tests.",
      "Découper le transfert de stock en vagues par rotation des références, pour que les fortes rotations arrivent en premier et que le site puisse travailler pendant l’arrivée du reste.",
      "Allonger la barre de double exploitation si une bascule sèche est trop risquée : exploiter deux sites coûte cher mais protège le service.",
      "Marquer la signature du bail, la fin des rayonnages, la recette WMS, la première commande expédiée et le volume nominal en jalons."
    ],
    tips: [
      "<strong>Vérifiez portance et puissance avant le protocole d’accord.</strong> Un bâtiment qui ne supporte ni vos charges de rayonnage ni votre puissance de charge n’est pas moins cher : c’est le mauvais bâtiment.",
      "<strong>Choisissez le WMS avant de figer l’implantation.</strong> Affectation des emplacements, adressage et logique de chemin de prélèvement découlent du système, et les rattraper sur des rayonnages montés coûte cher.",
      "<strong>Commandez les engins sur les délais réels.</strong> La livraison des chariots élévateurs et des chariots à mât rétractable se compte en mois depuis plusieurs années : la date de commande a sa place sur le planning.",
      "<strong>Montez en charge, ne basculez pas.</strong> Prévoyez les premières semaines à un volume volontairement réduit, pour que les problèmes de processus apparaissent quand il reste de la capacité pour les absorber.",
      "<strong>Assainissez le stock avant de le déplacer.</strong> Transférer des références obsolètes coûte deux fois : une fois pour les transporter, une fois pour les stocker.",
      "<strong>Posez la référence à la signature du bail.</strong> Avant, tout reste optionnel ; après, le loyer court et chaque semaine de glissement a un chiffre."
    ],
    faq: [
      [
        "Combien de temps faut-il pour ouvrir un entrepôt ?",
        "Couramment 9 à 15 mois entre le dossier d’investissement et le démarrage pour une plateforme de taille moyenne, principalement du fait de la recherche du site, du délai des rayonnages et de l’intégration du WMS. Le modèle propose douze mois."
      ],
      [
        "Quel est généralement le délai le plus long ?",
        "La fabrication des rayonnages et les engins de manutention, qui se comptent désormais en mois. Le bail dépasse souvent l’un et l’autre, et c’est pourquoi la recherche de site ouvre le plan."
      ],
      [
        "Le WMS doit-il démarrer en même temps que le bâtiment ?",
        "Pas nécessairement. Beaucoup de sites exploitent d’abord le nouveau bâtiment sur le système existant, puis basculent le système séparément, pour ne changer qu’une variable à la fois. Le modèle garde les deux chemins séparés."
      ],
      [
        "Comment planifier le transfert de stock ?",
        "En vagues par rotation des références, avec un inventaire tournant après chaque vague et une période de double exploitation avant la fermeture de l’ancien site. Ces lignes sont préchargées dans la dernière phase."
      ],
      [
        "Le modèle d’ouverture d’entrepôt est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans compte."
      ]
    ]
  },

  'road-construction-schedule': {
    card: "Des études à la mise en service : réseaux, terrassements et couches de chaussée.",
    h1: "Planning de travaux routiers",
    metaTitle: "Travaux routiers — planning",
    metaDesc: "Modèle gratuit de planning de travaux routiers : études, autorisations, déviations de réseaux, terrassements, chaussée et mise en service.",
    lead: "Un <strong>planning de travaux routiers</strong> gratuit, déroulé comme un vrai programme d’infrastructure — levés et études, acquisitions foncières et autorisations, déviations de réseaux des concessionnaires, terrassements et assainissement, couche de forme, grave-bitume et couche de roulement, signalisation et marquage, phasage de circulation, puis remise au gestionnaire de la voirie.",
    intro: "Sur un chantier routier, la chaussée est la partie facile. Ce qui commande la date, c’est ce qui doit bouger avant de pouvoir terrasser : les réseaux des concessionnaires, le foncier que vous ne possédez pas encore, et la circulation qui doit continuer de passer. Le modèle donne à chacun son propre chemin :",
    phases: [
      [
        "Levés et études",
        "Levés topographiques et reconnaissance géotechnique, recherche des réseaux et sondages, avant-projet et projet, étude d’assainissement et audit de sécurité routière. <em>Jalon : projet approuvé.</em>"
      ],
      [
        "Foncier et autorisations",
        "Identification des parcelles, acquisitions ou occupations temporaires, autorisation d’urbanisme, autorisations environnementales et rétablissement des voies. <em>Jalon : autorisations obtenues.</em>"
      ],
      [
        "Déviations de réseaux",
        "Devis et études de chaque concessionnaire, conception des déviations, programmation avec les concessionnaires, puis les déviations elles-mêmes — gaz, eau, électricité et télécoms, chacune sur son propre calendrier."
      ],
      [
        "Phasage de circulation",
        "Étude et approbation de la signalisation temporaire, réservation des créneaux d’occupation de la voirie, accord sur les itinéraires de déviation, puis les fermetures, basculements et neutralisations de voies successifs."
      ],
      [
        "Terrassements et assainissement",
        "Débroussaillage et décapage de la terre végétale, déblais et remblais, couche de forme, collecteurs, avaloirs, bassins de rétention et exutoires."
      ],
      [
        "Construction de la chaussée",
        "Couche de fondation, couche de base en grave-bitume, couche de liaison et couche de roulement, bordures, trottoirs et mise à niveau des tampons. <em>Jalon : revêtement terminé.</em>"
      ],
      [
        "Signalisation, marquage et remise",
        "Marquage au sol, panneaux et portiques, éclairage public, dispositifs de retenue, audit de sécurité routière final, levée des réserves et remise au gestionnaire de la voirie. <em>Jalon : mise en service.</em>"
      ]
    ],
    callout: "Les déviations de réseaux sont le planning. Les concessionnaires travaillent à leur propre rythme, exigent de longs préavis et ne se comprimeront pas pour votre date — et chacun doit avoir terminé avant que vous puissiez terrasser sa section. Demandez les devis pendant les études, pas après l’attribution du marché, et inscrivez chaque concessionnaire comme une barre distincte avec sa propre durée.",
    customize: [
      "Saisir d’abord les créneaux d’occupation de la voirie confirmés : sur une route en service, ce sont les points fixes autour desquels le reste s’organise.",
      "Ajouter une ligne par concessionnaire — gaz, eau, électricité et chaque opérateur télécom ont des préavis et des équipes différents.",
      "Découper le chantier en sections ou en plages de points kilométriques une fois le phasage connu, pour suivre terrassements et chaussée par phase.",
      "Sortir le revêtement des mois d’hiver dans la mesure du possible : la mise en œuvre des enrobés a des limites de température qui arrêtent le chantier le jour même.",
      "Insérer les périodes d’exclusion — nidification, chiroptères, fenêtres piscicoles — sous forme de barres bloquées si vos autorisations les imposent.",
      "Garder les deux audits de sécurité routière sur le planning : celui d’après travaux conditionne l’ouverture, ce n’est pas une revue postérieure."
    ],
    tips: [
      "<strong>Demandez les devis des concessionnaires dès les études.</strong> La seule procédure de chiffrage se compte en mois avant qu’une déviation soit creusée, et elle précède tout le reste sur le chemin critique.",
      "<strong>Réservez la voirie avant d’en avoir besoin.</strong> Les calendriers d’arrêtés et de fermetures sont attribués au premier demandeur, et une réservation refusée décale toute la phase.",
      "<strong>Faites l’assainissement avant la chaussée, toujours.</strong> Rattraper un avaloir ou un branchement oublié sous une chaussée finie coûte plusieurs fois ce qu’il aurait coûté avant.",
      "<strong>Surveillez les fenêtres météo sur les enrobés.</strong> Une couche de roulement mise en œuvre sous la température prescrite se dégrade tôt, et le gestionnaire refusera de la recevoir.",
      "<strong>Planifiez les phases de circulation comme des tâches avec des durées.</strong> Chaque basculement est une nuit de travail avec ses propres moyens : traiter le phasage comme gratuit fait perdre une quinzaine aux programmes.",
      "<strong>Posez la référence à l’obtention des autorisations.</strong> Avant, le programme est conditionnel ; après, suivez l’écart pour rendre visible tôt le glissement des concessionnaires."
    ],
    faq: [
      [
        "Combien de temps dure un chantier routier ?",
        "Un aménagement urbain court tient en 6 à 9 mois ; une voie nouvelle ou un élargissement important dépasse deux ans. Le modèle propose un programme d’environ dix-huit mois, à comprimer ou étendre depuis la date de mise en service."
      ],
      [
        "Qu’est-ce qui retarde le plus les chantiers routiers ?",
        "Les déviations de réseaux et les autorisations, bien plus souvent que les travaux. Les deux dépendent de tiers ayant leur propre rythme, d’où un chemin distinct pour chacun plutôt qu’une ligne au milieu des travaux."
      ],
      [
        "Comment représenter le phasage de circulation sur un diagramme de Gantt ?",
        "En barres successives ayant pour antériorités l’étude et la réservation de voirie, chaque phase de travaux dépendant de sa propre phase de circulation. Une réservation refusée ou décalée menace alors visiblement les travaux qu’elle protège."
      ],
      [
        "Le modèle couvre-t-il un ouvrage d’art inclus dans l’opération ?",
        'Seulement au niveau du récapitulatif. Si votre opération comporte un ouvrage, faites tourner en parallèle notre <a href="/templates/bridge-construction-schedule.html">planning de construction d’un pont</a> et reliez les fenêtres de coupure.'
      ],
      [
        "Est-ce utilisable pour un simple renouvellement de couche de roulement ?",
        "Oui. Retirez les phases foncier, autorisations et terrassements et gardez le phasage de circulation, les couches de chaussée et le marquage : c’est la forme d’un programme de renforcement."
      ],
      [
        "Le modèle de travaux routiers est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans inscription ni filigrane."
      ]
    ]
  },

  'mobile-app-launch-plan': {
    card: "Stabilisation, bêta, fiche du store, validation et déploiement progressif.",
    h1: "Plan de lancement d’une application mobile",
    metaTitle: "Lancement d’une application mobile",
    metaDesc: "Modèle gratuit de lancement d’application mobile : stabilisation, bêta, fiche du store, validation App Store, déploiement progressif et correctif.",
    lead: "Un <strong>plan de lancement d’application mobile</strong> gratuit, construit autour des exigences des stores plutôt que d’un marketing générique — stabilisation du build et version candidate, bêta TestFlight et piste interne Google Play, fiche du store et captures d’écran, dépôt sur l’App Store et Google Play, l’attente de validation elle-même, déploiement progressif et la fenêtre de correctif du jour un.",
    intro: "Publier une application mobile n’est pas déployer un logiciel sur un serveur : quelqu’un d’autre décide quand votre build sera en ligne, et le plan doit le montrer. Le modèle sépare le travail que vous maîtrisez de l’attente que vous ne maîtrisez pas :",
    phases: [
      [
        "Stabilisation du build",
        "Gel des fonctionnalités, traitement des plantages et des blocages, travail sur les performances et la mémoire, accessibilité et tests sur le parc d’appareils, puis la version candidate. <em>Jalon : version candidate prête.</em>"
      ],
      [
        "Tests bêta",
        "Envois sur TestFlight et sur la piste interne Google Play, bêta interne, recrutement des testeurs externes, tour externe et traitement des retours. <em>Jalon : critères de sortie de bêta atteints.</em>"
      ],
      [
        "Fiche du store et visuels",
        "Recherche de mots-clés et de catégorie, nom et description, captures d’écran et vidéo de présentation, icône et visuels, déclaration de confidentialité des données et questionnaire de classification par âge."
      ],
      [
        "Dépôt et validation",
        "Vérification de conformité avant dépôt, dépôt sur les deux stores, l’attente de validation, et une vraie marge pour un refus et un nouveau dépôt. <em>Jalon : application approuvée.</em>"
      ],
      [
        "Déploiement progressif",
        "Diffusion par paliers à 1 %, 10 % et 50 %, avec vérification du taux de sessions sans plantage à chaque palier avant d’élargir à l’ensemble des utilisateurs. <em>Jalon : disponibilité générale.</em>"
      ],
      [
        "Correctif du jour un et suivi",
        "Surveillance des plantages et des blocages, la fenêtre de correctif réservée, réponses aux avis sur les stores et lecture de la rétention à une semaine."
      ]
    ],
    callout: "Prévoyez un refus. Les premiers dépôts sont refusés assez souvent pour qu’un plan sans marge de nouveau dépôt soit un plan à pile ou face — et le délai repart de zéro au dépôt suivant. Inscrivez l’attente de validation et la marge de refus comme deux barres distinctes, puis fixez la date d’annonce après la seconde, pas après la première.",
    customize: [
      "Fixer la date de dépôt et avancer depuis là plutôt que de remonter à rebours : la durée de validation ne vous appartient pas.",
      "Dédoubler les lignes de dépôt et de validation par store si vos versions iOS et Android n’ont pas le même rythme : les délais de validation diffèrent.",
      "Allonger la marge de refus s’il s’agit d’un premier dépôt, d’une application par abonnement, ou de tout ce qui touche à la suppression de compte, aux données de santé ou aux contenus publiés par les utilisateurs.",
      "Ajuster les paliers de déploiement à votre plateforme : le déploiement par étapes de Google Play et la diffusion échelonnée de l’App Store ne progressent pas de la même façon.",
      "Garder la fenêtre de correctif sur le planning avec des personnes nommées : une fenêtre sans équipe affectée n’est qu’une semaine vide.",
      "Marquer la version candidate, la sortie de bêta, l’approbation et la disponibilité générale en jalons : ce sont les quatre dates que l’on vous demandera."
    ],
    tips: [
      "<strong>Préparez la fiche du store avant que le binaire soit figé.</strong> Captures d’écran, descriptions et déclaration de confidentialité s’élaborent et se relisent indépendamment : elles ne devraient jamais bloquer le jour du dépôt.",
      "<strong>N’annoncez pas une date de lancement adossée à une approbation que vous n’avez pas.</strong> Faites dépendre le marketing du jalon d’approbation, pour qu’un refus décale la campagne automatiquement.",
      "<strong>Surveillez le taux de sessions sans plantage à chaque palier.</strong> L’intérêt d’un déploiement progressif est de pouvoir s’arrêter entre deux paliers ; si personne n’est chargé de regarder les chiffres, le phasage ne sert à rien.",
      "<strong>Réservez la fenêtre de correctif avant le lancement, pas après.</strong> Les personnes qui écriraient un correctif du jour un sont celles que vous affecterez sinon au sprint suivant, le jour même du lancement.",
      "<strong>Recrutez les testeurs externes des semaines à l’avance.</strong> Réunir un nombre utile de testeurs sur appareils réels prend plus de temps que prévu, et une bêta trop mince ne trouve rien.",
      "<strong>Posez la référence à la version candidate.</strong> Tout ce qui précède relève de l’estimation ; après, le planning dépend surtout des files d’attente d’autres acteurs et se suit comme un écart."
    ],
    faq: [
      [
        "Combien de temps prend la validation par les stores ?",
        "La plupart des validations App Store aboutissent en un à deux jours et Google Play est souvent plus rapide, mais les deux peuvent être bien plus longues pour un premier dépôt ou une catégorie sensible. Le modèle prévoit dix jours plus une marge de refus."
      ],
      [
        "Que doit contenir un plan de lancement d’application mobile ?",
        "Stabilisation du build, tests bêta, fiche du store et visuels, dépôt et validation, déploiement progressif et une fenêtre de correctif du jour un. Les six sont préchargés, l’attente de validation étant modélisée comme une antériorité et non comme une hypothèse."
      ],
      [
        "En quoi diffère-t-il d’un plan de lancement produit ?",
        'Celui-ci est calé sur les stores : dépôt, validation et déploiement progressif. Pour le travail commercial plus large — prix, positionnement, campagnes — utilisez le <a href="/templates/product-launch.html">modèle de lancement de produit</a> en parallèle.'
      ],
      [
        "Faut-il un déploiement progressif ou une diffusion à tous ?",
        "Progressif, sauf raison contraire. Une diffusion par paliers permet de s’arrêter à 1 % quand le taux de sessions sans plantage chute, ce qui coûte bien moins cher qu’un retour arrière en urgence sur l’ensemble des utilisateurs."
      ],
      [
        "Le modèle de lancement d’application est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans compte ni filigrane."
      ]
    ]
  },

  'iso-9001-certification-plan': {
    card: "Écarts, manuel qualité, audit interne, revue de direction, étapes 1 et 2.",
    h1: "Plan de certification ISO 9001",
    metaTitle: "Certification ISO 9001 — plan",
    metaDesc: "Modèle gratuit de plan de certification ISO 9001 : analyse des écarts, documentation, audit interne, revue de direction, audits étape 1 et étape 2.",
    lead: "Un <strong>plan de certification ISO 9001</strong> gratuit, déroulé sur le vrai chemin qui mène au certificat — analyse des écarts, cartographie des processus, documentation du système de management de la qualité, mise en œuvre et formation, cycle d’audit interne, revue de direction et actions correctives, puis l’audit de certification en deux étapes et le premier audit de surveillance.",
    intro: "La certification ISO 9001 n’est pas un projet documentaire. L’organisme certificateur doit voir les enregistrements d’un système qui a réellement fonctionné, et c’est pourquoi l’audit interne et la revue de direction se placent avant l’audit externe et non à côté :",
    phases: [
      [
        "Analyse des écarts et cadrage",
        "Périmètre et contexte de l’organisme, choix de l’organisme certificateur, analyse structurée des écarts par rapport à la norme, et le plan projet qui en découle. <em>Jalon : analyse des écarts terminée.</em>"
      ],
      [
        "Cartographie des processus et risques",
        "Cartographie des processus clés, parties intéressées et leurs exigences, registre des risques et opportunités, et objectifs qualité assortis d’indicateurs mesurables."
      ],
      [
        "Documentation du système qualité",
        "Politique qualité et manuel qualité, procédures documentées, instructions de travail et formulaires, maîtrise documentaire et durées de conservation des enregistrements. <em>Jalon : documentation diffusée.</em>"
      ],
      [
        "Mise en œuvre et formation",
        "Sensibilisation de l’ensemble du personnel, formation des pilotes de processus, et une période de fonctionnement réel des processus afin de disposer d’enregistrements auditables."
      ],
      [
        "Audit interne et actions correctives",
        "Formation des auditeurs internes, programme complet d’audit interne, fiches de non-conformité et actions correctives soldées avec preuves."
      ],
      [
        "Revue de direction",
        "Constitution des données d’entrée, réunion de revue de direction elle-même, et les actions qui en découlent. <em>Jalon : aptitude à la certification confirmée.</em>"
      ],
      [
        "Audit de certification",
        "Audit d’étape 1 sur la documentation et la maturité, levée des constats d’étape 1, audit d’étape 2 sur la mise en œuvre, clôture des non-conformités et décision de certification. <em>Jalon : certificat délivré.</em>"
      ],
      [
        "Surveillance",
        "Cycle d’amélioration continue, second tour d’audit interne et audit de surveillance de la première année, qui maintient la validité du certificat."
      ]
    ],
    callout: "L’intervalle entre l’étape 1 et l’étape 2 est la raison d’être de l’audit en deux temps, et la plupart des plannings le traitent mal. L’étape 1 dit si votre système est prêt ; l’étape 2 vérifie qu’il fonctionne. Les organismes certificateurs demandent couramment plusieurs semaines entre les deux pour que les constats soient levés, et programmer l’étape 2 trop près de l’étape 1 est la façon la plus sûre de payer une visite supplémentaire.",
    customize: [
      "Choisir tôt l’organisme certificateur et saisir ses disponibilités réelles : les créneaux d’audit se réservent des mois à l’avance et fixent votre date la plus lointaine.",
      "Allonger la période de mise en œuvre si vos processus ont des cycles longs : il faut des enregistrements couvrant une période représentative, pas une quinzaine.",
      "Ajouter une ligne par domaine de processus pendant la cartographie et l’audit interne, pour rendre la couverture visible plutôt que supposée.",
      "Insérer une ligne d’action corrective par non-conformité majeure dès que les constats d’étape 1 tombent : chacune a ses preuves et sa date de clôture.",
      "Marquer la diffusion de la documentation, l’aptitude confirmée, la fin de l’étape 2 et la délivrance du certificat en jalons : ce sont les dates attendues en comité de direction.",
      "Si vous détenez déjà une autre certification de système de management, raccourcir la phase documentaire et réutiliser les chapitres communs au lieu de tout réécrire."
    ],
    tips: [
      "<strong>N’écrivez pas des documents que vous n’appliquerez pas.</strong> L’auditeur confronte le système à vos propres procédures : un manuel trop détaillé crée des non-conformités qu’un manuel simple n’aurait pas produites.",
      "<strong>Menez l’audit interne comme s’il s’agissait du vrai.</strong> C’est la répétition générale la moins coûteuse, et un constat soulevé en interne est une amélioration, pas une non-conformité.",
      "<strong>Laissez un vrai délai entre l’étape 1 et l’étape 2.</strong> Quatre à huit semaines sont habituelles ; lever correctement les constats coûte moins cher qu’un audit à refaire.",
      "<strong>Réunissez les données d’entrée de la revue de direction à l’avance.</strong> La réunion est un enregistrement obligatoire dont les entrées sont listées par la norme, et les assembler le jour même produit un compte rendu maigre que l’auditeur remarquera.",
      "<strong>Gardez le cycle de surveillance sur le planning.</strong> La certification ouvre un rythme annuel, et les organismes qui abandonnent le calendrier après le certificat courent après douze mois plus tard.",
      "<strong>Posez la référence à la diffusion de la documentation.</strong> Tout ce qui précède relève de la mise en place ; après, c’est l’écart par rapport aux dates d’audit qui compte."
    ],
    faq: [
      [
        "Combien de temps faut-il pour obtenir la certification ISO 9001 ?",
        "Généralement 6 à 12 mois pour un organisme qui part de zéro, et moins lorsqu’un système documenté existe déjà. Ce modèle couvre environ dix-huit mois car il va jusqu’au premier audit de surveillance ; le certificat lui-même arrive vers le douzième mois."
      ],
      [
        "Quelle différence entre un audit d’étape 1 et un audit d’étape 2 ?",
        "L’étape 1 est essentiellement une revue de la documentation et de la maturité, qui vérifie que le système est auditable. L’étape 2 vérifie qu’il est réellement mis en œuvre et efficace, à partir d’enregistrements et d’entretiens. Les deux sont ici des phases distinctes séparées par une période de levée des constats."
      ],
      [
        "Faut-il un audit interne avant la certification ?",
        "Oui. La norme exige que des audits internes et une revue de direction aient été réalisés, et l’organisme certificateur en cherchera les enregistrements dès l’étape 1. C’est pourquoi les deux précèdent l’audit externe dans ce plan."
      ],
      [
        "Que se passe-t-il si l’auditeur relève une non-conformité ?",
        "Les constats mineurs se soldent habituellement par un plan d’action et des preuves dans un délai fixé ; les constats majeurs peuvent imposer une nouvelle visite. Le modèle prévoit une barre de levée après chaque étape, précisément pour cela."
      ],
      [
        "Le modèle de certification ISO 9001 est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans inscription."
      ]
    ]
  },

  'soc2-compliance-timeline': {
    card: "Cadrage, contrôles, remédiation, période d’observation Type II et rapport.",
    h1: "Planning de conformité SOC 2",
    metaTitle: "Conformité SOC 2 — planning",
    metaDesc: "Modèle gratuit de planning SOC 2 : cadrage, conception des contrôles, remédiation, préparation, période d’observation Type II et rapport.",
    lead: "Un <strong>planning de conformité SOC 2</strong> gratuit couvrant toute la mission — cadrage et choix des Trust Services Criteria, conception des contrôles, remédiation, collecte des preuves, évaluation de préparation, la période d’observation du Type II, les travaux de l’auditeur et l’émission du rapport.",
    intro: "Presque toutes les questions de délai sur un SOC 2 portent en réalité sur la période d’observation. Un Type I est une opinion à un instant donné ; un Type II couvre une période pendant laquelle vos contrôles doivent réellement fonctionner. Le modèle en fait une barre visible, pour que personne ne promette un rapport que l’arithmétique interdit :",
    phases: [
      [
        "Cadrage et critères",
        "Définition du périmètre du système, choix des Trust Services Criteria, contractualisation avec le cabinet et arbitrage entre Type I et Type II. <em>Jalon : périmètre arrêté.</em>"
      ],
      [
        "Conception des contrôles",
        "Analyse de risques, mise en correspondance des contrôles avec les critères retenus, rédaction du corpus de politiques et désignation des responsables de contrôle. <em>Jalon : matrice de contrôles validée.</em>"
      ],
      [
        "Remédiation",
        "Gestion et revue des accès, points de contrôle sur les changements, journalisation et supervision, risque fournisseurs, sensibilisation à la sécurité et test du plan de réponse aux incidents — le travail d’ingénierie proprement dit."
      ],
      [
        "Preuves et préparation",
        "Outillage de collecte des preuves, alimentation du référentiel, évaluation de préparation et clôture des écarts qu’elle révèle. <em>Jalon : préparation validée.</em>"
      ],
      [
        "Rapport Type I (facultatif)",
        "Travaux à un instant donné et rapport Type I, utile quand un client a besoin d’un document pendant que la période d’observation court."
      ],
      [
        "Période d’observation",
        "La période couverte par l’opinion Type II — contrôles fonctionnant en continu, points de contrôle mensuels sur les preuves et revues d’accès trimestrielles. De trois à douze mois, et non compressible."
      ],
      [
        "Travaux d’audit et rapport",
        "Demandes d’échantillons, transmission des preuves, tests, exceptions et réponses de la direction, revue du projet de rapport et émission. <em>Jalon : rapport Type II émis.</em>"
      ]
    ],
    callout: "La période d’observation ne se raccourcit pas. Un rapport Type II atteste que vos contrôles ont fonctionné sur une période : trois mois de fenêtre, ce sont trois mois de calendrier réel qu’aucun budget ne rachètera. Le seul levier est la date de départ — et c’est pourquoi le jalon qui mérite qu’on se batte est la validation de la préparation, pas la date du rapport.",
    customize: [
      "Choisir d’abord la longueur de la période d’observation — trois mois pour un premier rapport, six à douze une fois dans un cycle annuel — et dimensionner la barre en conséquence.",
      "Retirer entièrement la phase Type I si aucun client n’a besoin d’un rapport intermédiaire : beaucoup d’organisations vont directement au Type II.",
      "Ajouter une ligne par catégorie de critères retenue au-delà de la sécurité : disponibilité, confidentialité, intégrité des traitements et vie privée ajoutent chacune des contrôles et des preuves.",
      "Détailler la remédiation en une ligne par écart dès que l’évaluation de préparation est rendue, pour suivre le travail d’ingénierie au lieu de l’agréger.",
      "Poser les points de contrôle mensuels sur les preuves en lignes récurrentes pendant toute la période : les mois manquants sont la première source d’exceptions.",
      "Marquer le périmètre arrêté, la préparation validée, le début et la fin de la période d’observation, et l’émission du rapport en jalons."
    ],
    tips: [
      "<strong>N’ouvrez pas la période d’observation avant que la remédiation soit réellement terminée.</strong> Un contrôle défaillant au premier mois devient une exception dans le rapport : décaler de deux semaines coûte deux semaines, démarrer trop tôt peut coûter le rapport.",
      "<strong>Automatisez la collecte des preuves avant l’ouverture de la période, pas pendant.</strong> Reconstituer après coup trois mois de revues d’accès est la tâche la plus pénible d’un SOC 2, et l’auditeur s’en aperçoit généralement.",
      "<strong>Restez étroit sur le premier rapport.</strong> La seule catégorie sécurité est un périmètre valide que la plupart des clients acceptent ; ajouter des catégories multiplie les contrôles et allonge chaque phase.",
      "<strong>Engagez le cabinet tôt.</strong> Sa disponibilité pour les travaux est une contrainte réelle, et un cabinet retenu à la fin de la période ne commencera pas la semaine où elle se referme.",
      "<strong>Considérez les exceptions comme normales.</strong> Presque tous les rapports en comportent ; ce qui compte est la réponse de la direction, qui a besoin de place sur le planning avant la finalisation du projet de rapport.",
      "<strong>Posez la référence à la validation de la préparation.</strong> Tout ce qui précède est de la remédiation ; après, le planning n’est plus que de l’arithmétique et le calendrier du cabinet."
    ],
    faq: [
      [
        "Combien de temps prend une démarche SOC 2 ?",
        "Pour un premier Type II, couramment 8 à 12 mois au total : trois à six mois de préparation et de remédiation, puis une période d’observation de trois à douze mois, puis les travaux et le rapport. Le modèle propose environ seize mois avec une période de six mois."
      ],
      [
        "Quelle différence entre SOC 2 Type I et Type II ?",
        "Le Type I est une opinion sur la conception des contrôles à un instant donné ; le Type II est une opinion sur leur efficacité opérationnelle sur une période. Le Type II impose la période d’observation, d’où sa durée bien plus longue et sa phase dédiée ici."
      ],
      [
        "Quelle durée retenir pour la période d’observation ?",
        "Trois mois est le minimum usuel pour un premier Type II, et six à douze mois la norme une fois installé dans un cycle annuel. Les périodes courtes vont plus vite, mais certains clients leur accordent moins de valeur."
      ],
      [
        "Peut-on obtenir un rapport SOC 2 plus vite ?",
        "Vous pouvez raccourcir la préparation, et émettre un Type I pendant que la période court. Vous ne pouvez pas raccourcir la période elle-même : c’est la part du planning que personne ne maîtrise."
      ],
      [
        "Le modèle de planning SOC 2 est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans compte."
      ]
    ]
  },

  'manufacturing-production-schedule': {
    card: "Prévisions, matière, changements de série, production, qualité et expédition.",
    h1: "Planning de production industrielle",
    metaTitle: "Planning de production industrielle",
    metaDesc: "Modèle gratuit de planning de production : prévisions, délais matière, ordonnancement, changements de série, contrôle qualité et expédition.",
    lead: "Un <strong>planning de production industrielle</strong> gratuit pour la fabrication discrète — plan de charge et programme directeur, approvisionnements calés sur les délais réels des fournisseurs, ordonnancement des lignes et changements de série, les séries de production elles-mêmes, contrôle en cours et contrôle final, puis conditionnement et expédition.",
    intro: "Un planning de production, ce sont deux plannings qui doivent se rejoindre : l’arrivée de la matière et la disponibilité de la capacité. Le modèle les traite en chemins distincts, pour que la collision se voie avant de se produire dans l’atelier :",
    phases: [
      [
        "Prévisions et capacité",
        "Revue des prévisions, prise de commandes fermes, programme directeur de production et vérification globale de la capacité et des effectifs. <em>Jalon : capacité confirmée.</em>"
      ],
      [
        "Approvisionnements",
        "Éclatement des nomenclatures et calcul des besoins, commandes d’achat, livraisons à long délai et livraisons courantes, réception et contrôle d’entrée, puis mise à disposition au bord de ligne. <em>Jalon : disponibilité matière.</em>"
      ],
      [
        "Ordonnancement et réglage",
        "Séquencement détaillé, plan des changements de série, préparation des outillages et des montages, le changement de série lui-même et le contrôle du premier article. <em>Jalon : premier article accepté.</em>"
      ],
      [
        "Séries de production",
        "Les séries elles-mêmes, avec les changements de série entre produits planifiés comme de vraies tâches plutôt que supposés inexistants."
      ],
      [
        "Contrôle qualité",
        "Contrôle en cours et maîtrise statistique des procédés, stock bloqué et décision de traitement des non-conformités, contrôle final et essais, dossier de libération de lot. <em>Jalon : lot libéré.</em>"
      ],
      [
        "Conditionnement et expédition",
        "Emballage et étiquetage, palettisation et plan de chargement, réservation du transporteur et documents d’expédition. <em>Jalon : commande expédiée.</em>"
      ]
    ],
    callout: "Un changement de série est du temps de production. Un planning qui affiche trois séries à la suite sans aucune barre de changement revendique une capacité qui n’existe pas — et sur une ligne à changements fréquents, ils peuvent représenter une part à deux chiffres des heures disponibles. Inscrivez chaque changement de série à sa durée mesurée, pas à sa durée souhaitée.",
    customize: [
      "Saisir vos délais fournisseurs réels par composant : c’est le plus long d’entre eux, et non l’ordonnancement, qui fixe la date de début possible.",
      "Ajouter une ligne par poste de charge ou par ligne si vous en ordonnancez plusieurs, pour rendre les conflits visibles.",
      "Renseigner les durées de changement de série à partir des temps réellement mesurés, et les garder séparées des séries qui les encadrent.",
      "Insérer une barre de stock bloqué partout où un lot attend une décision : cette attente est du stock immobilisé bien réel.",
      "Ajouter des barres de stock de sécurité en amont des séries qui alimentent un engagement client ferme.",
      "Marquer la disponibilité matière, le premier article accepté, le lot libéré et la commande expédiée en jalons."
    ],
    tips: [
      "<strong>Ordonnancez à rebours depuis la date d’expédition.</strong> L’engagement client est le point fixe ; tout l’amont doit s’en déduire plutôt que d’être poussé depuis aujourd’hui.",
      "<strong>Ne lancez pas une série avant la levée du contrôle d’entrée.</strong> De la matière sur le site n’est pas de la matière disponible, et démarrer sur du stock non vérifié est la façon habituelle de bloquer un lot entier.",
      "<strong>Séquencez pour limiter les changements de série, puis vérifiez les dates.</strong> La séquence la plus efficace et celle qui tient les délais sont rarement la même ; le planning est l’endroit où l’arbitrage se voit.",
      "<strong>Donnez au contrôle du premier article sa propre barre.</strong> C’est un point de passage, et une série lancée avant l’acceptation est une série que vous risquez de rebuter.",
      "<strong>Laissez de la marge avant l’expédition.</strong> Réservations de transport et créneaux de chargement sont externes, et un lot libéré le matin de l’enlèvement n’a aucune place pour une reprise.",
      "<strong>Posez la référence au programme figé.</strong> Une fois le programme figé pour la période, suivez l’écart au lieu de le réécrire discrètement."
    ],
    faq: [
      [
        "Que doit contenir un planning de production ?",
        "Les prévisions et la capacité, les approvisionnements avec les délais réels, l’ordonnancement et les changements de série, les séries de production, le contrôle qualité et les blocages, puis le conditionnement et l’expédition. Les six sont préchargés en phases distinctes."
      ],
      [
        "Comment représenter les changements de série sur un diagramme de Gantt ?",
        "En barres courtes propres, entre les séries, chaque série ayant pour antériorité le changement qui la précède. Cacher le changement à l’intérieur de la barre de série surévalue la capacité disponible : c’est l’erreur la plus fréquente sur un planning de production."
      ],
      [
        "Est-ce adapté à l’industrie de process ?",
        "Le modèle vise d’abord la fabrication discrète — lots, unités et changements de série. Pour une production continue, gardez les phases approvisionnement et expédition et remplacez les lignes de série par des barres de campagne."
      ],
      [
        "En quoi diffère-t-il du calendrier de production textile ?",
        'Le <a href="/templates/apparel-production-calendar.html">calendrier textile</a> suit une saison, avec prototypage et réservation de tissu face à une date de mise en rayon. Celui-ci est un planning de fabrication discrète général, construit sur les délais, les changements de série et l’expédition.'
      ],
      [
        "Le modèle de planning de production est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans inscription."
      ]
    ]
  },

  'website-redesign-project-plan': {
    card: "Du cadrage à la mise en ligne : contenu, design, migration et redirections.",
    h1: "Plan de projet de refonte de site web",
    metaTitle: "Refonte de site web — plan projet",
    metaDesc: "Modèle gratuit de refonte de site web : cadrage, audit de contenu, design, développement, migration, plan de redirections, recette et suivi.",
    lead: "Un <strong>plan de projet de refonte de site web</strong> gratuit couvrant le projet complet — cadrage, arborescence et audit de contenu, design, développement, migration des contenus, plan de redirections SEO, recette et suivi après la mise en ligne.",
    intro: "Les refontes échouent rarement sur le design. Elles échouent sur les deux chemins ingrats que personne ne dote correctement — déplacer le contenu et faire correspondre les URL — et le modèle leur donne donc chacun une phase avec ses propres antériorités :",
    phases: [
      [
        "Cadrage",
        "Entretiens avec les parties prenantes, analyse de l’audience et de la Search Console, étude de la concurrence et des utilisateurs, exigences et indicateurs de réussite validés. <em>Jalon : cadrage validé.</em>"
      ],
      [
        "Arborescence et audit de contenu",
        "Inventaire complet des URL par exploration, décision conserver / fusionner / supprimer pour chaque page, arborescence et navigation, maquettes fonctionnelles des gabarits clés. <em>Jalon : arborescence validée.</em>"
      ],
      [
        "Design",
        "Direction artistique, système de design et composants, maquettes des pages clés, revue responsive et revue d’accessibilité. <em>Jalon : design validé.</em>"
      ],
      [
        "Développement",
        "Environnements et installation du CMS, développement des gabarits et des composants, intégrations et formulaires, et mise en place du plan de mesure. <em>Jalon : périmètre fonctionnel complet.</em>"
      ],
      [
        "Migration des contenus",
        "Tableau de correspondance, réécriture et optimisation des contenus, migration des médias et chargement effectif dans le CMS. <em>Jalon : gel du contenu sur l’ancien site.</em>"
      ],
      [
        "SEO et plan de redirections",
        "Correspondance de chaque ancienne URL vers la nouvelle pour toute page modifiée, règles de redirection construites et testées, métadonnées et données structurées, canoniques et sitemap XML. <em>Jalon : plan de redirections validé.</em>"
      ],
      [
        "Recette",
        "Tests navigateurs et appareils, audit d’accessibilité, signaux web essentiels (Core Web Vitals), exploration complète des redirections sur la préproduction et recette métier. <em>Jalon : recette prononcée.</em>"
      ],
      [
        "Mise en ligne et suivi",
        "Décision de mise en ligne, bascule DNS, vérification des redirections en production, envoi du sitemap et trente jours de suivi des erreurs d’exploration et des positions."
      ]
    ],
    callout: "Le plan de redirections est le projet. Chaque URL qui change sans redirection 301 est du trafic que vous avez payé pour acquérir puis jeté, et les dégâts n’apparaissent que des semaines plus tard, quand les positions sont déjà perdues. Construisez le plan à partir d’une exploration complète de l’ancien site — pas du sitemap du nouveau — et testez-le en préproduction avant la mise en ligne, pas après.",
    customize: [
      "Lancer l’inventaire des URL dès la première semaine : l’exploration de l’existant alimente l’audit de contenu, le tableau de migration et le plan de redirections.",
      "Ajouter une ligne par type de contenu ou par rubrique si vous migrez des milliers de pages : une barre unique « migrer le contenu » cache toujours un mois.",
      "Allonger honnêtement la barre de réécriture : c’est la tâche la plus sous-estimée du projet, et elle demande des rédacteurs, pas des développeurs.",
      "Garder un jalon de gel du contenu sur l’ancien site, pour que la migration ne coure pas après une cible mouvante.",
      "Faire de l’exploration des redirections en préproduction une antériorité ferme de la décision de mise en ligne, et non une politesse de recette.",
      "Étendre la barre de suivi à trente jours au minimum : les moteurs mettent des semaines à réexplorer et à retraiter un site modifié."
    ],
    tips: [
      "<strong>Explorez l’ancien site avant toute autre chose.</strong> On n’audite, ne migre et ne redirige pas ce que l’on n’a pas inventorié, et la plupart des organisations ont bien plus d’URL en ligne qu’elles ne le pensent.",
      "<strong>Ne mettez pas en ligne un vendredi.</strong> Les problèmes de redirection et d’indexation apparaissent en quelques heures et demandent des gens disponibles pour les corriger.",
      "<strong>Testez les redirections en préproduction avec le vrai tableau.</strong> Un sondage sur dix URL ne prouve rien : explorez toute la liste des anciennes URL contre la préproduction et vérifiez chaque code de réponse.",
      "<strong>Gardez l’ancienne mesure d’audience en parallèle.</strong> Sans référence comparable, impossible de dire si une baisse de trafic après la mise en ligne est saisonnière ou auto-infligée.",
      "<strong>Rédigez le contenu avant que les gabarits soient finis.</strong> Un contenu qui attend le design est la première cause d’une date de mise en ligne repoussée deux fois.",
      "<strong>Posez la référence à la validation du design.</strong> Avant, le périmètre bouge encore ; après, c’est l’écart que le comité de pilotage doit regarder."
    ],
    faq: [
      [
        "Combien de temps dure une refonte de site web ?",
        "Généralement 4 à 9 mois pour un site de taille moyenne, la durée dépendant surtout du volume de contenu et non du design ou du développement. Le modèle propose environ neuf mois, à comprimer en réduisant le périmètre, pas le temps de migration."
      ],
      [
        "Qu’est-ce qu’un plan de redirections et pourquoi est-ce important ?",
        "C’est une correspondance ligne à ligne de chaque ancienne adresse vers la nouvelle, mise en œuvre en redirections 301. Sans lui, chaque URL modifiée perd son historique de référencement et les liens entrants qui pointaient vers elle. D’où une phase dédiée ici."
      ],
      [
        "Quand commencer la migration des contenus ?",
        "Dès que l’audit de contenu est terminé et que le tableau de correspondance existe, bien avant la fin du développement. Le contenu est le poste le plus long, et le démarrer après les gabarits ajoute des mois."
      ],
      [
        "Que surveiller après la mise en ligne ?",
        "Les erreurs d’exploration et les 404, la couverture d’indexation, les positions sur vos requêtes prioritaires et le trafic organique comparé à la référence d’avant refonte, pendant au moins trente jours. Les quatre figurent sur le planning comme de vraies tâches."
      ],
      [
        "Le modèle de refonte de site est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans compte ni filigrane."
      ]
    ]
  },
};

const UI = {
  home: 'Accueil',
  templates: 'Modèles',
  xlsx: 'Excel (.xlsx)',
  pptx: 'PowerPoint',
  csv: 'CSV',
  edit: 'Modifier en ligne gratuitement',
  included: 'Ce que contient le modèle',
  customize: 'Comment l’adapter',
  tips: 'Conseils de planification',
  related: 'Modèles associés',
  browseAll: 'Voir tous les modèles de diagramme de Gantt',
  faq: 'Questions fréquentes',
  ctaH2: 'Planifiez en ligne — gratuitement',
  ctaP: 'Ouvrez le modèle dans l’éditeur, ajustez les barres à vos dates et exportez en PDF, Excel ou PowerPoint. Sans compte et sans filigrane.',
  ctaBtn: 'Ouvrir l’éditeur gratuit',
  imgAlt: 'Aperçu du modèle avec les phases sur un axe temporel',
  /* A function, not a string — it feeds the HowTo schema name and takes
     the page h1. JSON.stringify hides functions, so an audit that dumps
     the UI block as JSON shows nothing here; omitting it throws at
     render time for every template page in the locale. */
  howTo: (name) => `Comment utiliser le modèle : ${name}`,
  enNote: 'Ce modèle est en français. Les pages associées non encore traduites s’ouvrent en anglais.',
};

module.exports = { T, UI };
