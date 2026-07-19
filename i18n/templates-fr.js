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
