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
