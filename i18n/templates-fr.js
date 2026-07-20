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

  'hotel-refurbishment-schedule': {
    card: "Fermetures d’étages par phases, nuitées perdues, plages bruyantes et réception.",
    h1: "Planning de rénovation d’hôtel",
    metaTitle: "Rénovation d’hôtel — planning de travaux",
    metaDesc: "Modèle gratuit de planning de rénovation d’hôtel : fermetures d’étages par phases, nuitées perdues, plages bruyantes, ascenseurs et parties communes.",
    lead: "Un <strong>planning de rénovation d’hôtel</strong> gratuit, pensé pour un établissement qui continue de vendre pendant qu’on le reconstruit — fermetures d’étages par phases, nuitées perdues sur chacune d’elles, plages de travaux bruyants encadrées par les horaires clients, ordonnancement des ascenseurs et des locaux techniques, et parties communes calées sur la basse saison. À télécharger pour un propriétaire ou un asset manager, ou à ouvrir en ligne pour voir combien de chambres vous sortez réellement du stock chaque mois.",
    intro: "La rénovation d’un hôtel en exploitation est un chantier avec un compteur de recettes qui tourne à côté. Le modèle ordonne les travaux en fonction du taux d’occupation, et non de la disponibilité des entreprises :",
    phases: [
      [
        "Faisabilité et modèle de recette",
        "Diagnostic technique, programme et niveau de prestation, modèle de nuitées perdues et stratégie de fermeture qui en découle. <em>Jalon : investissement validé.</em>"
      ],
      [
        "Conception et achats",
        "Concept, projet détaillé, prescription du mobilier et des équipements, chambre témoin complète, et consultation des entreprises face à des délais d’approvisionnement qui décident de la date de fermeture du premier étage. <em>Jalon : chambre témoin validée.</em>"
      ],
      [
        "Locaux techniques et ascenseurs",
        "Relevé des gaines et des réseaux, modernisation des ascenseurs cabine par cabine, locaux du personnel, production de froid et centrales de traitement d’air — les travaux qui touchent tous les étages et qu’on ne refait pas deux fois."
      ],
      [
        "Fermetures des étages clients",
        "Étages sortis du stock l’un après l’autre, curage, aménagement, opérations préalables à la réception, levée des réserves et remise à la vente. <em>Jalon : dernier étage restitué.</em>"
      ],
      [
        "Parties communes et restauration",
        "Hall, restaurant, bar, salles de séminaire et spa, programmés en basse saison, avec une offre provisoire pour les clients pendant toute la durée des travaux."
      ],
      [
        "Réception et repositionnement",
        "Essais et mise en service, passage de la commission de sécurité, formation des équipes au nouveau produit, reportage photo, repositionnement tarifaire et retour au stock complet. <em>Jalon : stock complet restitué.</em>"
      ]
    ],
    callout: "Chiffrez chaque fermeture en nuitées avant de séquencer quoi que ce soit. Un étage de 30 chambres fermé huit semaines représente environ 1 700 nuitées de stock perdu, et déplacer cette fermeture de juillet à février peut valoir bien davantage que la remise que vous étiez en train de négocier avec l’entreprise. Le modèle de nuitées perdues se place en tête du planning, pas en annexe du dossier.",
    customize: [
      "Remplacer les lignes d’étages par vos propres nombres de chambres et vos durées de fermeture réelles, puis totaliser les nuitées perdues par mois face au budget prévisionnel.",
      "Décaler les parties communes vers votre vraie basse saison — pour la plupart des hôtels, la fenêtre est plus étroite que ne le laisse croire le budget annuel.",
      "Fixer la plage de travaux bruyants aux horaires que la direction d’exploitation peut réellement tenir, et y contenir tout percement et toute démolition.",
      "Ajouter une ligne par ascenseur : moderniser plusieurs cabines simultanément n’est presque jamais acceptable dans un hôtel qui tourne.",
      "Insérer un plan de relogement si vous devez déplacer des clients en cours de séjour, et le doter en personnel : c’est du vrai travail de réception, pas un arrondi.",
      "Marquer la validation de l’investissement, la chambre témoin, la restitution du dernier étage et le retour au stock complet comme jalons."
    ],
    tips: [
      "<strong>Construisez la chambre témoin avant de commander quoi que ce soit.</strong> C’est la seule occasion peu coûteuse de découvrir que l’agencement ne rentre pas, que les prises sont mal placées et que le détail de salle de bains fuit — et l’équipe d’exploitation devrait y dormir une nuit.",
      "<strong>N’empilez pas deux fermetures d’étage si le modèle ne montre pas que vous savez vendre autour.</strong> La compression tarifaire fonctionne jusqu’au jour où il ne reste plus de chambres vers lesquelles comprimer.",
      "<strong>Séquencez verticalement, pas horizontalement.</strong> Gaines, chutes et cages d’ascenseur traversent tous les étages : traitez les réseaux comme une campagne verticale continue plutôt que comme une tâche répétée à chaque niveau.",
      "<strong>Protégez le parcours client.</strong> Accès des entreprises, palissades, évacuation des gravats et monte-matériaux ont besoin d’un chemin qui ne croise jamais le hall aux heures d’arrivée ; ces contraintes figurent sur le planning parce qu’elles dictent les horaires de chantier.",
      "<strong>Gardez un ascenseur en service pour les clients à tout moment.</strong> La modernisation des ascenseurs est le poste qui génère le plus de réclamations et de gestes commerciaux ; traiter les cabines l’une après l’autre coûte des semaines mais sauve la note d’avis.",
      "<strong>Posez la référence à la validation de la chambre témoin.</strong> Avant, le programme bouge encore ; après, chaque semaine de retard a un coût en nuitées que vous pouvez présenter au propriétaire."
    ],
    faq: [
      [
        "Combien de temps dure une rénovation d’hôtel ?",
        "Une rénovation par phases d’un hôtel de taille moyenne en exploitation court couramment sur 12 à 24 mois, parce que les étages ferment successivement et non tous en même temps. Le modèle propose dix-huit mois, que vous pouvez comprimer en fermant plus de chambres à la fois — au prix du chiffre d’affaires."
      ],
      [
        "Vaut-il mieux fermer complètement l’hôtel ?",
        "Parfois, et c’est le modèle de nuitées perdues qui le dit. Une fermeture totale est plus rapide et moins chère à construire, mais elle abandonne toute la recette et fait courir le risque de perdre les comptes entreprises et le personnel. Chiffrez les deux avant de trancher : ce modèle est bâti pour l’option progressive."
      ],
      [
        "Comment programmer les travaux bruyants dans un hôtel ouvert ?",
        "En convenant d’une plage quotidienne fixe — typiquement de la fin de matinée au milieu d’après-midi — et en la traitant comme une contrainte ferme du planning, non comme une demande faite à l’entreprise. Les percements, démolitions et carottages hors de cette plage sont la première cause de réclamations et de remises."
      ],
      [
        "En quoi est-ce différent du modèle de pré-ouverture ?",
        'Celui-ci s’adresse à un hôtel qui exploite déjà. Si vous mettez en service un établissement neuf, sans clients à protéger, utilisez plutôt le <a href="/templates/hotel-pre-opening-critical-path.html">chemin critique de pré-ouverture d’hôtel</a> : il est organisé autour de la préparation à l’ouverture, et non autour des fermetures.'
      ],
      [
        "Le modèle de rénovation d’hôtel est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans compte ni filigrane."
      ]
    ]
  },

  'port-terminal-construction-schedule': {
    card: "Dragage, terre-plein, quai, portiques de quai et système d’exploitation.",
    h1: "Planning de construction d’un terminal portuaire",
    metaTitle: "Terminal portuaire — planning travaux",
    metaDesc: "Planning gratuit de terminal portuaire : dragage, remblaiement, quai, voies de portiques, livraison des portiques, terre-plein et système d’exploitation.",
    lead: "Un <strong>planning de construction de terminal portuaire</strong> gratuit qui tient ensemble les travaux maritimes et terrestres — levés et autorisations de dragage et d’immersion, remblaiement, construction du quai, amélioration des sols et voies de portiques, livraison et mise en service des portiques de quai, revêtement du terre-plein et système d’exploitation du terminal. À télécharger pour un dossier de concession, ou à ouvrir en ligne pour caler les travaux sur vos fenêtres météo.",
    intro: "Un terminal à conteneurs, ce sont trois projets qui partagent un site : un chantier maritime, un chantier de génie civil et un projet de systèmes. Le modèle les garde visibles comme des lignes distinctes, parce que leurs contraintes n’ont rien à voir :",
    phases: [
      [
        "Études et autorisations",
        "Levés bathymétriques et reconnaissances géotechniques, étude d’impact et enquête publique, autorisation environnementale, autorisation de dragage et d’immersion des déblais. <em>Jalon : autorisation de dragage obtenue.</em>"
      ],
      [
        "Dragage et remblaiement",
        "Dragage d’établissement dans la fenêtre météo saisonnière, immersion sur le site autorisé, mise en place des matériaux de remblai, puis la période de surcharge et de tassement que personne ne peut raccourcir."
      ],
      [
        "Quai et poste à quai",
        "Battage des pieux ou pose des caissons, poutre de couronnement, défenses et bollards, et dragage de la souille à la cote de projet. <em>Jalon : poste à quai disponible.</em>"
      ],
      [
        "Voies de portiques et terre-plein",
        "Amélioration des sols, longrines et rails de portiques, revêtement du terre-plein, assainissement, mâts d’éclairage, prises frigorifiques et poste de garde."
      ],
      [
        "Portiques et engins de parc",
        "Fabrication des portiques, voyage du navire de charge lourde et fenêtre d’accostage, déchargement, montage, essais de charge et livraison des engins de parc. <em>Jalon : portiques réceptionnés.</em>"
      ],
      [
        "Système d’exploitation et ouverture",
        "Paramétrage du système d’exploitation du terminal, interfaces portail, lecture automatique et douane, couverture réseau et radio, formation, escale d’essai et ouverture commerciale. <em>Jalon : première escale commerciale.</em>"
      ]
    ],
    callout: "La drague et le navire de charge lourde ne vous appartiennent pas. Tous deux sont inscrits des mois à l’avance dans un carnet de commandes mondial, et tous deux réclament une fenêtre météo plus un ouvrage prêt le jour dit. Manquer le créneau ne coûte pas une semaine : il faut attendre la mobilisation suivante, ce qui peut représenter une saison. Placez les fenêtres d’arrivée des navires sur le planning comme des barres fixes et construisez le reste en rétroplanning à partir d’elles.",
    customize: [
      "Placer la campagne de dragage dans la fenêtre saisonnière réelle de votre littoral, puis vérifier que le volume tient effectivement dedans au rendement de production de la drague.",
      "Allonger la barre de surcharge et de tassement à ce qu’exige l’étude géotechnique : c’est un phénomène physique, qu’aucune pression de planning ne modifie.",
      "Ajouter une ligne par portique s’ils arrivent sur des voyages distincts, et marquer chaque arrivée de navire comme un jalon.",
      "Découper le terre-plein en blocs si vous mettez en service progressivement plutôt que d’ouvrir tout le terminal d’un coup.",
      "Avancer les lignes de paramétrage du système d’exploitation : le travail logiciel ne dépend d’aucun béton et démarre presque toujours beaucoup trop tard.",
      "Marquer l’autorisation de dragage, la disponibilité du poste à quai, la réception des portiques et la première escale commerciale comme jalons : ce sont les quatre dates que suit une autorité concédante."
    ],
    tips: [
      "<strong>Les autorisations conditionnent le dragage, et le dragage conditionne tout le maritime.</strong> L’autorisation du site d’immersion, en particulier, est une procédure longue conduite par un tiers, sans accélérateur possible : elle doit démarrer avant la fin des études.",
      "<strong>Ne faites pas chevaucher l’arrivée du navire de charge lourde et l’achèvement du quai.</strong> Les rails doivent être relevés, alignés et éprouvés en charge avant qu’un portique puisse être débarqué, et ce relevé est une antériorité ferme.",
      "<strong>Programmez le tassement, ne le supposez pas.</strong> Un remblai sous un parc à conteneurs exige une période de surcharge instrumentée ; revêtir trop tôt produit un terre-plein qui se dégrade en deux ans.",
      "<strong>Commencez le paramétrage pendant le génie civil.</strong> Le système d’exploitation a besoin de données de référence, d’un plan de parc, de règles d’accès et d’interfaces avec les compagnies maritimes et la douane — rien de tout cela n’attend la fin du revêtement.",
      "<strong>Prévoyez une escale d’essai.</strong> Une escale répétée avec une compagnie coopérative révèle les problèmes de portail, de portique, de système et de main-d’œuvre qu’une première escale commerciale révélerait beaucoup plus cher.",
      "<strong>Posez la référence à la disponibilité du poste à quai.</strong> Les travaux maritimes portent la plus large incertitude d’estimation du projet ; une fois le quai existant, la partie terrestre devient bien plus prévisible et mérite un suivi d’écart sur une référence figée."
    ],
    faq: [
      [
        "Combien de temps faut-il pour construire un terminal à conteneurs ?",
        "Un terminal neuf court couramment sur 3 à 5 ans entre l’autorisation et la première escale commerciale, le dragage, le tassement du remblai et la livraison des portiques fixant la borne haute. Le modèle propose environ trois ans, à étendre en allongeant les phases maritimes."
      ],
      [
        "Qu’est-ce qui porte le chemin critique sur un projet portuaire ?",
        "Les autorisations de dragage et la disponibilité de la drague au début, puis le tassement du remblai, puis la fabrication des portiques de quai et le voyage du navire de charge lourde. Très peu de ce chemin critique est entre les mains de l’entreprise, d’où une barre dédiée pour chacun."
      ],
      [
        "Quel est le délai de livraison des portiques de quai ?",
        "La fabrication court typiquement sur 12 à 18 mois à compter de la commande, auxquels s’ajoutent le voyage puis plusieurs semaines de montage, d’essais de charge et de mise en service par portique. Commander les portiques est une décision de planning, pas un acte d’achat."
      ],
      [
        "Peut-on l’utiliser pour une extension plutôt qu’un terminal neuf ?",
        "Oui. Supprimez les lignes de remblaiement et conservez le dragage de la souille, les voies de portiques, la livraison des portiques et le système d’exploitation : c’est là que vit l’essentiel d’un programme d’extension, avec la contrainte supplémentaire de travailler à côté d’une exploitation en cours."
      ],
      [
        "Le modèle de terminal portuaire est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans inscription."
      ]
    ]
  },

  'rail-signalling-upgrade-plan': {
    card: "Études, données d’enclenchement, essais en usine, plages travaux et mise en service.",
    h1: "Plan de modernisation de la signalisation ferroviaire",
    metaTitle: "Signalisation ferroviaire — plan projet",
    metaDesc: "Plan gratuit de modernisation de la signalisation : études, données d’enclenchement, essais en usine, plages travaux, essais et mise en exploitation.",
    lead: "Un <strong>plan de modernisation de la signalisation ferroviaire</strong> gratuit, construit autour des plages travaux — études de conception, préparation des données d’enclenchement, essais en usine, réservation des interceptions, installation à l’intérieur de chaque plage, essais de principe et essais d’ensemble, puis mise en exploitation commerciale. À télécharger pour une revue de jalon, ou à ouvrir en ligne pour vérifier que les travaux prévus tiennent réellement dans les heures qui vous ont été accordées.",
    intro: "Une opération de renouvellement de signalisation est un projet de bureau d’études avec, au milieu, quelques week-ends où tout le physique se passe. Le modèle traite ces week-ends comme des contenants fixes, non déplaçables, et organise tout le reste autour d’eux :",
    phases: [
      [
        "Études de conception",
        "Faisabilité et choix de la solution, plan de signalisation, tableaux de commande et d’enclenchement, interfaces voie, énergie et télécoms, et assurance de la conception. <em>Jalon : conception acceptée.</em>"
      ],
      [
        "Données et essais en usine",
        "Élaboration des données d’enclenchement, contrôle indépendant selon le référentiel, simulation et essais en usine du poste avant toute expédition sur site. <em>Jalon : essais en usine prononcés.</em>"
      ],
      [
        "Programmation des plages travaux",
        "Demandes d’interception déposées à l’échéance de construction de l’horaire de service, plages travaux réservées, adaptation du plan de transport et substitution routière, validation de la stratégie d’interception. <em>Jalon : plages travaux confirmées.</em>"
      ],
      [
        "Travaux préparatoires et installation",
        "Cheminements de câbles, guérites et coffrets de voie, caniveaux et génie civil des abords en accès de semaine, puis pose des appareils et raccordements de bascule à l’intérieur des plages réservées."
      ],
      [
        "Essais et mise en service",
        "Contrôles de câblage et de pose, essais de principe, essais fonctionnels et essais d’ensemble, reconnaissance de ligne par les conducteurs, et le week-end de mise en service lui-même. <em>Jalon : système mis en service.</em>"
      ],
      [
        "Mise en exploitation commerciale",
        "Passation au poste et dispositions de repli, période de marche à blanc sans dérangement, clôture du dossier de sécurité et autorisation de mise en exploitation commerciale. <em>Jalon : mise en exploitation.</em>"
      ]
    ],
    callout: "La plage travaux, c’est le planning. Les interceptions se demandent contre les échéances de l’horaire de service, un an ou plus à l’avance, et une fois la réservation faite, la question n’est plus « quand installe-t-on » mais « les travaux tiennent-ils dans les heures obtenues ». Programmez chaque plage en rétroplanning depuis l’heure de restitution, avec les essais à la fin et un plan de repli pour le moment où il faudra s’arrêter et rendre la voie, quoi qu’il arrive.",
    customize: [
      "Saisir d’abord vos dates réelles d’interception et les verrouiller : toutes les autres barres du planning négocient autour d’elles.",
      "Ajouter une ligne par plage travaux avec sa durée réelle en heures plutôt qu’en jours — un week-end de 52 heures et un week-end de 29 heures sont deux projets différents.",
      "Sortir de la plage tout ce qui peut en sortir, vers le travail de semaine ou l’atelier : tout ce qui peut être précâblé, préessayé ou préinstallé doit l’être.",
      "Allonger les barres d’élaboration et de contrôle des données si votre poste est important — le contrôle indépendant est un processus lent, imposé par le référentiel, et il ne se parallélise pas avec lui-même.",
      "Insérer un feu vert formel quinze jours avant chaque plage de mise en service, avec les essais en usine, la préparation des essais et les habilitations comme antériorités.",
      "Marquer l’acceptation de la conception, les essais en usine, la confirmation des plages, la mise en service et la mise en exploitation commerciale comme jalons."
    ],
    tips: [
      "<strong>Déposez les demandes d’interception avant la fin des études.</strong> L’échéance de l’horaire de service n’attend pas votre planning, et une opération qui manque la fenêtre perd une année, pas un mois.",
      "<strong>Essayez en usine, pas sur la voie.</strong> Chaque défaut trouvé aux essais en usine est un défaut que vous ne diagnostiquez pas à trois heures du matin, avec l’heure de restitution qui approche.",
      "<strong>Écrivez le plan de restitution en premier.</strong> Chaque plage a besoin d’un point de non-retour défini, au-delà duquel on cesse d’installer pour rétablir l’installation existante : ce point se décide au bureau, pas la nuit sur le terrain.",
      "<strong>Protégez les essais de principe.</strong> C’est l’étape critique pour la sécurité la plus exposée à la compression quand l’installation déborde, et c’est précisément celle qu’il ne faut jamais raccourcir.",
      "<strong>Réservez tôt la reconnaissance de ligne.</strong> L’habilitation et la familiarisation supposent de libérer des conducteurs du roulement, ce qui est une négociation de ressource avec son propre délai.",
      "<strong>Posez la référence à la confirmation des plages travaux.</strong> Avant, les dates sont des intentions ; après, les points fixes sont réels et c’est l’écart par rapport à eux qui compte."
    ],
    faq: [
      [
        "Combien de temps dure une opération de renouvellement de signalisation ?",
        "Le renouvellement d’un poste court couramment sur 18 à 36 mois, de la faisabilité à la mise en exploitation commerciale, dont quelques week-ends seulement passés physiquement sur la voie. Le modèle propose environ deux ans, à étendre en ajoutant des plages travaux."
      ],
      [
        "Qu’est-ce qu’une plage travaux ?",
        "Une période réservée pendant laquelle une section de ligne est fermée à la circulation pour permettre les travaux. Les interceptions se demandent contre les échéances de construction de l’horaire de service, de nombreux mois à l’avance : elles se comportent donc comme des contraintes fixes et non comme des tâches programmables."
      ],
      [
        "Pourquoi l’élaboration des données d’enclenchement est-elle sur le chemin critique ?",
        "Parce que les données doivent être élaborées, contrôlées de façon indépendante, puis éprouvées en simulation et en essais d’usine avant toute installation, et que chacune de ces étapes est séquentielle et imposée. C’est un travail de bureau lent qui décide si le week-end de mise en service peut avoir lieu."
      ],
      [
        "Est-ce utilisable pour un passage à niveau ou une gare ?",
        "Oui. La structure centrée sur les plages travaux reste la même : réduisez les lignes de données d’enclenchement et conservez les études, la programmation des interceptions, l’installation, les essais et la mise en exploitation."
      ],
      [
        "Le modèle de signalisation ferroviaire est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans inscription."
      ]
    ]
  },

  'pharma-product-launch-plan': {
    card: "AMM, lots de validation, sérialisation, prix et remboursement, vagues de pays.",
    h1: "Plan de lancement d’un médicament",
    metaTitle: "Lancement de médicament — plan",
    metaDesc: "Plan de lancement gratuit : dossier et AMM, lots de validation, sérialisation, avis de la HAS, négociation du prix au CEPS et lancement par pays.",
    lead: "Un <strong>plan de lancement de médicament</strong> gratuit qui couvre l’intervalle entre un essai terminé et un produit en pharmacie — constitution du dossier et dépôt, horloge d’évaluation, transposition d’échelle et lots de validation, sérialisation et étiquetage par marché, dossiers de prix et de remboursement, affaires médicales, et séquencement des lancements pays par pays. À télécharger pour une revue de préparation au lancement, ou à ouvrir en ligne pour voir de quoi dépend vraiment la date de votre premier marché.",
    intro: "Tout ce qui est commercial dans un lancement pharmaceutique est conditionné par deux choses que vous ne maîtrisez pas : une autorisation de mise sur le marché et une décision de remboursement. Le modèle place les deux sur le planning comme des barres avec des successeurs, plutôt que comme des hypothèses sur une diapositive :",
    phases: [
      [
        "Dossier et autorisation",
        "Constitution du dossier, réunion pré-dépôt, dépôt en procédure centralisée ou nationale, horloge d’évaluation, questions et réponses, négociation du résumé des caractéristiques du produit. <em>Jalon : AMM octroyée.</em>"
      ],
      [
        "Production et libération",
        "Transposition d’échelle et transfert de technologie, qualification du site et des équipements, trois lots de validation, données de stabilité, inspection des bonnes pratiques de fabrication et libération du stock de lancement. <em>Jalon : stock de lancement libéré.</em>"
      ],
      [
        "Sérialisation et étiquetage",
        "Articles de conditionnement et traductions par marché, mise en place de la sérialisation et de l’agrégation au titre du règlement délégué, raccordement aux répertoires nationaux de vérification et qualification des lignes de conditionnement."
      ],
      [
        "Prix et remboursement",
        "Dépôt à la Commission de la transparence de la HAS, avis de service médical rendu et d’amélioration du service médical rendu, négociation du prix avec le CEPS, inscription sur la liste des spécialités remboursables et publication au Journal officiel — la phase qui décide si un produit autorisé est réellement disponible. <em>Jalon : première inscription au remboursement.</em>"
      ],
      [
        "Affaires médicales et données",
        "Plan de publications, comités d’experts, relations avec les leaders d’opinion, formation médicale continue, données de vie réelle et mise en place de l’information médicale."
      ],
      [
        "Lancement commercial par pays",
        "Recrutement et formation du réseau, convention de lancement, premier marché, puis les vagues deux et trois à mesure que les autorisations et les inscriptions arrivent. <em>Jalon : première vente.</em>"
      ]
    ],
    callout: "L’autorisation n’est pas le lancement. Sur la plupart des marchés européens, un produit ne se vend pas réellement tant qu’il n’a pas un prix et une inscription au remboursement, et cette procédure ne commence qu’après l’AMM, pour courir ensuite des mois selon son propre calendrier. Prévoyez deux dates par pays — autorisation et disponibilité — et ne laissez jamais une prévision commerciale supposer discrètement qu’il s’agit du même jour.",
    customize: [
      "Fixer la date de dépôt et laisser l’horloge d’évaluation courir à partir d’elle : la durée réglementaire est imposée, seul votre temps de réponse à l’intérieur vous appartient.",
      "Dupliquer les lignes de prix, d’étiquetage et de lancement par marché, chacun ayant son autorité, sa langue et son parcours de remboursement.",
      "Avancer les lots de validation si votre procédé est nouveau : trois lots conformes plus les données de stabilité forment une chaîne longue et sans raccourci.",
      "Ajouter une fenêtre d’inspection avec un vrai temps de préparation : un écart relevé sur le site est le moyen le plus rapide de perdre un trimestre de lancement.",
      "Ajouter une ligne d’accès précoce si votre produit y est éligible : c’est le seul chemin qui met le médicament à disposition avant l’inscription au remboursement.",
      "Marquer le dépôt, l’AMM, la libération du stock, la première inscription au remboursement et la première vente comme jalons."
    ],
    tips: [
      "<strong>Fabriquez le stock de lancement avant l’autorisation, en assumant consciemment le risque de destruction.</strong> Attendre la décision pour produire ajoute des mois de rayon vide ; s’engager tôt est un arbitrage que la direction doit poser explicitement, et non une décision que le planning prend par défaut.",
      "<strong>Menez le dossier de remboursement en parallèle de l’évaluation réglementaire.</strong> Les données se recoupent mais l’auditoire diffère, et commencer le travail d’accès au marché après l’AMM transforme un lancement en attente.",
      "<strong>Traitez la sérialisation comme un projet de systèmes.</strong> Codification par marché, agrégation et raccordement aux répertoires exigent des essais avec de vraies boîtes ; l’échec est silencieux et se découvre à la première expédition.",
      "<strong>Séquencez les pays délibérément.</strong> Un lancement précoce sur un marché à prix bas peut ancrer les prix ailleurs pendant des années par le jeu des prix de référence : l’ordre des lancements est une décision commerciale qui a sa place sur le planning.",
      "<strong>Gardez les affaires médicales en avance sur le commercial.</strong> Publications, comités d’experts et formation demandent du délai et ne se compriment pas dans les semaines qui suivent l’autorisation, au moment où la promotion démarre.",
      "<strong>Posez la référence au dépôt.</strong> Tout ce qui précède est une estimation de développement ; après, le planning devient une file d’attente que l’on suit précisément."
    ],
    faq: [
      [
        "Combien de temps dure le lancement d’un médicament ?",
        "Couramment 18 à 30 mois entre le dépôt réglementaire et la première vente, l’évaluation prenant environ un an sur les grands marchés et le remboursement ajoutant plusieurs mois par-dessus. Le modèle propose environ deux ans, à ajuster marché par marché."
      ],
      [
        "Où ce modèle commence-t-il par rapport à un essai clinique ?",
        'Il prend le relais là où l’essai s’arrête. Le gel de la base, l’analyse et le rapport d’étude relèvent du <a href="/templates/clinical-trial-gantt-chart.html">diagramme de Gantt d’essai clinique</a> ; ce modèle démarre à la constitution du dossier et court jusqu’à la première vente.'
      ],
      [
        "Pourquoi le prix et le remboursement forment-ils une phase à part ?",
        "Parce que l’autorisation ne donne que le droit de vendre, pas la capacité de le faire. L’évaluation par la Commission de la transparence puis la négociation avec le CEPS sont des procédures distinctes, avec leurs propres délais, et ce sont elles qui déterminent la date de disponibilité réelle."
      ],
      [
        "Comment planifier un lancement multipays ?",
        "En dupliquant les lignes d’étiquetage, de remboursement et de lancement commercial par marché et en les décalant par vagues. Le modèle montre un premier marché puis deux vagues, ce qui correspond à la forme habituelle."
      ],
      [
        "Quel est le risque de produire avant l’autorisation ?",
        "La destruction du stock si le produit n’est pas autorisé ou si l’étiquetage change. La plupart des lancements acceptent une part de ce risque, parce que les délais de fabrication dépassent l’intervalle entre l’autorisation et les premières commandes — mais cela doit rester une décision assumée, avec un chiffre en face."
      ],
      [
        "Le modèle de lancement pharmaceutique est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans compte."
      ]
    ]
  },

  'ma-due-diligence-timeline': {
    card: "Confidentialité, data room, chantiers d’audit, exclusivité, signature et closing.",
    h1: "Calendrier de due diligence d’acquisition",
    metaTitle: "Due diligence — calendrier d’acquisition",
    metaDesc: "Calendrier gratuit de due diligence : confidentialité, data room, audits financier, juridique, fiscal et social, exclusivité, signature et closing.",
    lead: "Un <strong>calendrier de due diligence d’acquisition</strong> gratuit qui couvre l’opération du premier contact à la réalisation — accord de confidentialité, teaser et mémorandum d’information, ouverture de la data room, chantiers d’audit menés en parallèle, présentations du management et questions-réponses, négociation du protocole de cession, signature et conditions suspensives avant le closing. À télécharger pour un comité d’investissement, ou à ouvrir en ligne pour vérifier que chaque chantier finit dans votre période d’exclusivité.",
    intro: "La due diligence n’est pas une séquence. Ce sont six ou sept chantiers qui lisent la même data room en même temps, contre une horloge fixée dans la lettre d’exclusivité. Le modèle les dispose en couloirs parallèles pour que le goulot soit visible :",
    phases: [
      [
        "Approche et confidentialité",
        "Identification de la cible, prise de contact, accord de confidentialité, teaser et mémorandum d’information. <em>Jalon : accord de confidentialité signé.</em>"
      ],
      [
        "Offre indicative et accès",
        "Revue de premier tour, offre indicative ou lettre d’intention, exclusivité accordée et ouverture de la data room. <em>Jalon : début de l’exclusivité.</em>"
      ],
      [
        "Chantiers de due diligence",
        "Audits financier, juridique, fiscal, commercial, informatique et social menés en parallèle sur la même data room, chacun produisant un rapport et une liste de points d’attention."
      ],
      [
        "Management et questions-réponses",
        "Présentations du management, visites de sites, journal des questions-réponses et demandes complémentaires — le processus qui détermine la vitesse réelle à laquelle les chantiers peuvent se terminer."
      ],
      [
        "Conclusions et conditions de l’opération",
        "Rapport de points bloquants, ajustement de valorisation, garantie d’actif et de passif, assurance de garantie et accord final du comité d’investissement. <em>Jalon : accord du comité d’investissement.</em>"
      ],
      [
        "Protocole, signature et closing",
        "Négociation du protocole de cession, information-consultation du comité social et économique, lettre de divulgation, signature, conditions suspensives dont l’autorisation de concentration, puis réalisation. <em>Jalon : closing.</em>"
      ]
    ],
    callout: "L’exclusivité est un compte à rebours, pas un confort. Elle expire à date fixe, que le chantier fiscal ait obtenu ses réponses ou non, et demander une prolongation est le moment précis où un cédant rouvre le prix. Travaillez en rétroplanning depuis la fin de l’exclusivité : la négociation du protocole demande des semaines, le rapport de points bloquants demande des jours, et le reste correspond au temps dont les chantiers disposent réellement.",
    customize: [
      "Fixer d’abord la date de fin d’exclusivité et disposer les chantiers en remontant depuis elle — c’est la contrainte dans laquelle vit tout le plan.",
      "Ajouter ou retirer des couloirs selon l’opération : une cible industrielle appelle un audit environnemental et immobilier, une cible logicielle un examen de la propriété intellectuelle et des composants libres.",
      "Donner au journal des questions-réponses sa propre ligne et son propre responsable : c’est le goulot partagé entre tous les chantiers et le cédant.",
      "Insérer la procédure d’information-consultation du comité social et économique comme une barre à part entière : ses délais sont légaux et se déroulent avant la signature, pas après.",
      "Allonger la barre de conditions suspensives si l’opération requiert une autorisation de concentration : ces durées sont fixées par l’autorité, pas par les parties.",
      "Marquer la confidentialité, le début d’exclusivité, l’accord du comité d’investissement, la signature et le closing comme jalons — ce sont les dates que suit un comité de direction."
    ],
    tips: [
      "<strong>Ouvrez une data room correctement alimentée avant le démarrage des audits.</strong> Une data room à moitié remplie fait brûler à chaque chantier sa première semaine en demandes plutôt qu’en lecture, et cette semaine ne revient jamais.",
      "<strong>Tenez un seul journal de questions-réponses, pas six.</strong> Des questions dupliquées et contradictoires adressées au cédant sont le moyen le plus rapide d’épuiser la bonne volonté du management et de ralentir toutes les réponses.",
      "<strong>Anticipez l’information-consultation des représentants du personnel.</strong> C’est une procédure encadrée par des délais, avec un avis à recueillir avant la signature : découverte tardivement, elle décale l’opération de plusieurs semaines.",
      "<strong>Commencez la rédaction du protocole avant la fin des audits.</strong> Les avocats peuvent bâtir la structure pendant que les constats arrivent encore ; attendre un rapport propre est ce qui pousse la signature au-delà de l’exclusivité.",
      "<strong>Réservez tôt les présentations du management.</strong> Les dirigeants de la cible ont encore une entreprise à faire tourner, et leur disponibilité est presque toujours la ressource la plus rare du processus.",
      '<strong>Passez le relais au closing.</strong> La préparation de l’intégration doit déjà être engagée ; le <a href="/templates/post-merger-integration-plan.html">plan d’intégration post-acquisition</a> commence là où ce modèle s’arrête.'
    ],
    faq: [
      [
        "Combien de temps dure une due diligence ?",
        "Sur une opération de moyenne taille, typiquement 6 à 12 semaines d’audits à l’intérieur d’une exclusivité de durée comparable, suivies de la négociation du protocole puis des conditions suspensives avant le closing. Le modèle propose environ cinq mois entre l’approche et la réalisation."
      ],
      [
        "Quels chantiers faut-il prévoir dans un plan de due diligence ?",
        "Financier, juridique, fiscal, commercial, informatique et social en standard, auxquels s’ajoutent l’environnement, l’immobilier, les assurances ou la propriété intellectuelle selon la cible. Les six couloirs de base tournent ici en parallèle sur une seule data room."
      ],
      [
        "Pourquoi l’exclusivité pèse-t-elle autant sur le calendrier ?",
        "Parce que c’est la seule période pendant laquelle un acquéreur peut engager des honoraires importants sans risque concurrentiel. À son expiration, le cédant peut rouvrir le processus ou repositionner le prix : le plan de due diligence est donc, de fait, un projet à durée imposée."
      ],
      [
        "Quelle différence entre la signature et le closing ?",
        "La signature est le moment où les parties signent le protocole de cession ; le closing est celui où la propriété est effectivement transférée, une fois les conditions suspensives levées — autorisation de concentration, agréments, financement. Sur certaines opérations les deux tombent le même jour, sur d’autres plusieurs mois les séparent."
      ],
      [
        "Que se passe-t-il après le closing ?",
        'L’intégration. Ce modèle s’arrête à la réalisation ; le <a href="/templates/post-merger-integration-plan.html">plan d’intégration post-acquisition</a> couvre la préparation du jour un, les chantiers et le suivi des synergies sur la première année.'
      ],
      [
        "Le modèle de due diligence est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans inscription."
      ]
    ]
  },

  'data-migration-project-plan': {
    card: "Profilage, correspondances, nettoyage, jeux d’essai, bascule et réconciliation.",
    h1: "Plan de projet de reprise de données",
    metaTitle: "Reprise de données — plan projet",
    metaDesc: "Plan gratuit de reprise de données : profilage, règles de correspondance, nettoyage, chargements à blanc, réconciliation, bascule et recette métier.",
    lead: "Un <strong>plan de projet de reprise de données</strong> gratuit qui couvre tout le chantier — profilage des sources, correspondances et règles de transformation, nettoyage, développement des chargements, chargements à blanc successifs, réconciliation, bascule en production et vérification après chargement. C’est le chantier données qui tourne à l’intérieur d’un programme plus large, qu’il s’agisse d’une <a href=\"/templates/erp-implementation-schedule.html\">mise en place d’ERP</a> ou d’une <a href=\"/templates/cloud-migration-project-plan.html\">migration vers le cloud</a>, et c’est en général lui qui décide si la date de mise en production tient.",
    intro: "Les plans de reprise déraillent quand le chargement est traité comme une tâche unique à la fin. Ce n’est pas une tâche : c’est la même tâche rejouée plusieurs fois jusqu’à ce que la réconciliation tombe juste, et chaque exécution coûte une fenêtre d’indisponibilité :",
    phases: [
      [
        "Cadrage et profilage",
        "Inventaire des systèmes sources, volumétries, propriétaires des données, profilage des valeurs nulles, des doublons et des ruptures de format, et décision de périmètre sur ce qui migre réellement. <em>Jalon : périmètre et sources arrêtés.</em>"
      ],
      [
        "Correspondances et règles",
        "Correspondance champ à champ par objet, règles de transformation et valeurs par défaut, alignement des référentiels et définition des règles de réconciliation contre lesquelles vous testerez. <em>Jalon : correspondances validées.</em>"
      ],
      [
        "Nettoyage",
        "Règles de nettoyage, reprise manuelle par les propriétaires métier des enregistrements que les règles ne savent pas corriger, et passe de dédoublonnage — un travail parallèle, sans dépendance au développement."
      ],
      [
        "Développement et tests unitaires",
        "Développement des chaînes d’extraction et de chargement par objet, gestion des erreurs, logique de reprise sur incident et construction des états de réconciliation eux-mêmes."
      ],
      [
        "Chargements à blanc et réconciliation",
        "Trois chargements à blanc complets, avec réconciliation et correction des anomalies entre chacun, plus la répétition générale chronométrée qui prouve que le chargement tient dans la fenêtre d’indisponibilité. <em>Jalon : répétition générale réussie.</em>"
      ],
      [
        "Bascule et vérification",
        "Gel des sources, extraction du différentiel, chargement en production, validation de la réconciliation, recette métier et décision de repli. <em>Jalon : données acceptées.</em>"
      ]
    ],
    callout: "Il vous faut trois chargements à blanc, pas un, et chacun consomme une fenêtre d’indisponibilité entière. Le premier prouve que les correspondances sont fausses. Le deuxième prouve que le nettoyage a fonctionné. Le troisième — joué sur des volumes de production et chronométré de bout en bout — prouve que le chargement tient réellement dans la fenêtre qu’on vous a accordée. Les plans qui budgètent un seul chargement découvrent les trois problèmes le week-end de bascule, quand il ne reste plus de temps pour en corriger aucun.",
    customize: [
      "Fixer d’abord la date de bascule et compter à rebours : le dernier chargement à blanc doit se terminer au moins deux semaines avant.",
      "Développer les lignes en une ligne par objet de données — clients, fournisseurs, articles, en-cours, historique — dès que les correspondances démarrent.",
      "Réserver chaque chargement à blanc comme une vraie fenêtre d’indisponibilité, avec les personnes qui tiendront la bascule, et non un sous-ensemble.",
      "Ajouter une ligne d’extraction du différentiel si votre source reste vivante entre le dernier chargement à blanc et la bascule.",
      "Garder la décision de repli comme un jalon daté avec des critères nommés, et non comme une option implicite.",
      "Insérer ce plan entier comme sous-plan de votre calendrier d’<a href=\"/templates/erp-implementation-schedule.html\">ERP</a> ou de <a href=\"/templates/cloud-migration-project-plan.html\">migration cloud</a>."
    ],
    tips: [
      "<strong>Les règles de réconciliation viennent avant le développement.</strong> Si vous ne savez pas énoncer comment vous prouverez que le chargement est correct, vous ne saurez pas quand il est terminé.",
      "<strong>Chronométrez chaque chargement à blanc de bout en bout.</strong> Le chiffre dont vous avez besoin n’est pas « est-ce que ça a marché » mais « combien d’heures », car c’est lui qui dimensionne la fenêtre de bascule.",
      "<strong>Commencez le nettoyage tôt.</strong> Il dépend du profilage et non du développement : il peut donc courir des mois en parallèle — et il prend toujours plus longtemps que prévu, parce qu’il mobilise des gens du métier, pas l’équipe données.",
      "<strong>Migrez moins.</strong> L’historique est le poste le plus coûteux de toute reprise ; décider de l’archiver plutôt que de le reprendre rapporte plus de planning que n’importe quel effort d’optimisation, et sert au passage la minimisation exigée par le RGPD.",
      "<strong>Posez la référence à la validation des correspondances.</strong> Tout ce qui précède relève de l’estimation ; tout ce qui suit se suit comme un écart."
    ],
    faq: [
      [
        "Combien de temps dure une reprise de données ?",
        "Pour le remplacement d’un système de taille moyenne, couramment quatre à huit mois entre le profilage et une bascule vérifiée. Le modèle propose environ sept mois ; le cycle de chargements à blanc de la fin est la partie qui résiste à la compression."
      ],
      [
        "Combien de chargements à blanc faut-il ?",
        "Trois est le minimum de travail. Le premier teste les correspondances, le deuxième teste le nettoyage, et le troisième est une répétition générale chronométrée sur des volumes de production qui prouve que le chargement tient dans votre fenêtre. Chacun exige sa propre fenêtre et sa propre réconciliation."
      ],
      [
        "En quoi est-ce différent des modèles ERP ou migration cloud ?",
        'C’est le chantier données qui tourne à l’intérieur de l’un ou de l’autre. Utilisez le <a href="/templates/erp-implementation-schedule.html">calendrier de mise en place d’ERP</a> ou le <a href="/templates/cloud-migration-project-plan.html">plan de migration cloud</a> pour l’ensemble du programme, et celui-ci quand les données méritent leur propre plan détaillé et leur propre responsable.'
      ],
      [
        "Qu’est-ce qui fait généralement déraper une reprise ?",
        "Une qualité de données découverte tard, au premier chargement à blanc, et des écarts de réconciliation que personne ne sait expliquer. Les deux se trouvent en chargeant tôt, pas en planifiant plus fort."
      ],
      [
        "Le modèle de reprise de données est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans compte ni filigrane."
      ]
    ]
  },

  'conference-production-schedule': {
    card: "Lieu, appel à communications, intervenants, sponsors, billetterie et régie.",
    h1: "Planning de production d’un colloque",
    metaTitle: "Colloque — planning de production",
    metaDesc: "Planning gratuit de colloque : lieu, appel à communications, comité de programme, intervenants, sponsors, billetterie, régie et conduite technique.",
    lead: "Un <strong>planning de production de colloque</strong> gratuit pour organiser un événement à sessions parallèles — réservation du lieu et de la date, appel à communications et construction du programme, gestion des intervenants, commercialisation des partenariats, paliers tarifaires de billetterie, audiovisuel et régie, conduite technique et tout ce qui doit arriver après la dernière session. À télécharger pour un comité d’organisation, ou à ouvrir en ligne pour voir de quelle échéance dépend réellement votre programme.",
    intro: "Un colloque, ce sont quatre activités menées en même temps : un programme scientifique, un pipeline de partenariats, un tunnel de billetterie et une production technique. Elles partagent une date et presque rien d’autre : le modèle donne donc à chacune son propre couloir :",
    phases: [
      [
        "Lieu et dates",
        "Choix de la date face au calendrier du secteur, recherche de lieu et visites, contrat et acompte, contingent hôtelier et décision de jauge à laquelle tout le reste sera dimensionné. <em>Jalon : lieu contractualisé.</em>"
      ],
      [
        "Appel à communications et programme",
        "Thématiques et sessions, ouverture de l’appel à communications, date limite de soumission, relecture et sélection par le comité de programme, notifications d’acceptation et de refus, puis publication du programme. <em>Jalon : programme publié.</em>"
      ],
      [
        "Intervenants",
        "Invitations et confirmations des conférenciers principaux, conventions d’intervention, déplacements et hébergement, briefings, date limite de remise des supports et répétitions."
      ],
      [
        "Partenariats et exposition",
        "Dossier de partenariat, grille tarifaire par niveau, prospection et renouvellements, contractualisation, collecte des livrables des partenaires et plan d’implantation des stands. <em>Jalon : objectif de partenariats atteint.</em>"
      ],
      [
        "Billetterie et communication",
        "Paramétrage de la billetterie, paliers tarif préférentiel, plein tarif et tarif tardif, campagne de lancement, vagues d’e-mails et séquence d’information des participants."
      ],
      [
        "Production et conduite",
        "Cahier des charges audiovisuel et scénographie, fiches techniques par salle, signalétique et impressions, équipes et briefings, montage, l’événement lui-même et l’après-colloque. <em>Jalon : ouverture des portes.</em>"
      ]
    ],
    callout: "La date limite de l’appel à communications commande tout l’aval. Les relecteurs ont besoin de semaines, les intervenants doivent être prévenus avant de réserver leurs billets, et le programme doit être public avant la fermeture du tarif préférentiel, faute de quoi vous vendez moins de places au prix fort. Décalez la date limite de soumission d’un mois et vous ne perdez pas un mois : vous perdez d’un coup la fenêtre du tarif préférentiel, le temps de communication et le budget de déplacement des intervenants.",
    customize: [
      "Fixer d’abord la date de l’événement et compter à rebours : chaque échéance est ici un délai depuis cette date, pas une estimation en avant.",
      "Ajouter une ligne par session parallèle si vous faites tourner des programmes distincts avec leurs propres présidents et leurs propres relecteurs.",
      "Adapter les dates des paliers tarifaires à votre grille — le modèle utilise tarif préférentiel, plein tarif et tarif tardif.",
      "Développer les partenariats en une ligne par niveau ou par compte cible dès que la prospection démarre.",
      "Découper le montage salle par salle si le lieu vous remet les espaces à des moments différents.",
      "Ajouter les échéances de remise des résumés ou des textes si votre colloque publie des actes, et les droits musicaux si vous diffusez des œuvres."
    ],
    tips: [
      "<strong>Publiez le programme avant la fermeture du tarif préférentiel.</strong> On achète un programme, pas une date : un tarif préférentiel qui se ferme sans intervenants annoncés est de l’argent laissé sur la table.",
      "<strong>Confirmez les conférenciers principaux avant l’ouverture de l’appel à communications.</strong> Un nom annoncé élève la qualité et le volume des soumissions, et c’est l’ancrage dont votre communication a besoin dès le premier jour.",
      "<strong>Fixez une date limite de remise des supports que vous tenez vraiment.</strong> La régie ne peut pas tester ce qu’elle n’a pas reçu, et les diaporamas de dernière minute sont la première cause de sessions qui débordent.",
      "<strong>Faites courir les partenariats sur leur propre calendrier.</strong> Les budgets de sponsoring se votent annuellement : une prospection lancée six mois avant s’adresse à un budget déjà clos.",
      "<strong>Programmez le débriefing avant l’événement.</strong> La semaine suivante est celle où tout le monde disparaît, et c’est pourtant le seul moment où le détail est encore frais."
    ],
    faq: [
      [
        "Combien de temps à l’avance faut-il préparer un colloque ?",
        "Douze mois est la norme pour un colloque à sessions parallèles avec appel à communications, et neuf mois est tendu. Le modèle propose douze mois ancrés sur la date de l’événement ; le lieu et les conférenciers principaux se verrouillent en premier, parce que tout le reste se dimensionne sur eux."
      ],
      [
        "En quoi est-ce différent du modèle d’organisation d’événement ?",
        'Le <a href="/templates/event-planning.html">modèle d’organisation d’événement</a> est générique et convient à n’importe quel événement unique. Celui-ci est bâti pour un colloque à sessions parallèles — appel à communications, cycle de relecture, gestion des intervenants, niveaux de partenariat et conduite technique. Prenez l’autre pour une soirée ou un lancement, celui-ci quand vous avez un programme scientifique.'
      ],
      [
        "Et si j’expose au lieu d’organiser ?",
        'Utilisez plutôt le <a href="/templates/trade-show-planning-timeline.html">rétroplanning de salon professionnel</a> : il couvre la réservation du stand, la construction, la collecte de contacts et la relance. Ce modèle-ci se place du côté de l’organisateur.'
      ],
      [
        "Quand faut-il clore l’appel à communications ?",
        "Assez tôt pour que la relecture, les acceptations, la publication du programme et la réservation des déplacements des intervenants tiennent tous. Le modèle laisse environ cinq mois entre la date limite de soumission et l’ouverture des portes, ce qui est réaliste quand les relecteurs sont bénévoles."
      ],
      [
        "Le modèle de planning de colloque est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans inscription ni filigrane."
      ]
    ]
  },

  'call-center-setup-plan': {
    card: "Modèle opérationnel, téléphonie, dimensionnement, vagues de recrutement et montée en charge.",
    h1: "Plan de création d’un centre de contacts",
    metaTitle: "Centre de contacts — plan de création",
    metaDesc: "Plan gratuit de création de centre de contacts : téléphonie et SVI, dimensionnement Erlang, vagues de recrutement, formation, pilote et montée en charge.",
    lead: "Un <strong>plan de création de centre de contacts</strong> gratuit qui couvre toute la mise en place — modèle opérationnel sur site ou à distance, choix de la téléphonie et de la solution en mode service, prévision et dimensionnement des effectifs, vagues de recrutement, académie de formation, construction de la base de connaissances, appels pilotes, ouverture et montée en charge jusqu’au régime de croisière. À télécharger pour un comité d’exploitation, ou à ouvrir en ligne pour aligner vos vagues de recrutement sur la courbe de volume.",
    intro: "Un centre de contacts réussit ou échoue selon qu’il y a, ou non, des conseillers formés sur le plateau la semaine où le volume arrive. Le modèle traite le recrutement et la formation comme la séquence directrice et tout le reste comme son support :",
    phases: [
      [
        "Modèle opérationnel et site",
        "Mix de canaux, amplitude horaire, arbitrage entre plateau, télétravail et hybride, choix d’implantation ou accord de télétravail, et modèle d’effectifs et de coûts. <em>Jalon : modèle opérationnel validé.</em>"
      ],
      [
        "Technologie et téléphonie",
        "Choix et contractualisation de la solution de centre de contacts, attribution et portabilité des numéros, intégration au CRM et à l’outil de tickets, conception du serveur vocal interactif et du routage, outils de gestion des effectifs et de qualité, logistique des postes et des casques."
      ],
      [
        "Dimensionnement",
        "Prévision de volume par tranche horaire, hypothèses de durée moyenne de traitement, modèle d’Erlang, taux d’absence et d’indisponibilité, cycles de service et nombre de recrutements que chaque vague doit livrer."
      ],
      [
        "Vagues de recrutement",
        "Définition des postes et grille de rémunération, sourcing, sessions d’évaluation et propositions d’embauche, menés en vagues successives calées pour que chaque promotion termine sa formation avant le volume pour lequel elle a été recrutée."
      ],
      [
        "Formation et connaissances",
        "Construction du parcours pédagogique, base de connaissances et réponses types, formation aux outils et aux compétences relationnelles par promotion, période de double écoute accompagnée, puis certification. <em>Jalon : promotion 1 certifiée.</em>"
      ],
      [
        "Pilote, ouverture et montée en charge",
        "Appels pilotes sur une file limitée, calibrage qualité, ouverture, montée en charge par paliers au rythme des promotions, puis passage aux niveaux de service cibles. <em>Jalon : régime de croisière.</em>"
      ]
    ],
    callout: "Raisonnez en rétroplanning depuis la courbe de volume, pas en avant depuis aujourd’hui. Une promotion demande des semaines de recrutement, puis des semaines de formation et d’accompagnement, sans compter le préavis du poste précédent : un conseiller qui doit être productif la première semaine d’ouverture doit recevoir sa proposition d’embauche deux à trois mois plus tôt. L’attrition en formation est normale, donc chaque vague doit être surrecrutée. Si les vagues de recrutement ne sont pas dessinées sur le même planning que la montée en charge, l’écart n’apparaît que le jour où la file d’attente le montre.",
    customize: [
      "Fixer d’abord la date d’ouverture et les paliers de montée en charge, puis reculer chaque vague de recrutement de la durée complète recrutement plus formation plus accompagnement.",
      "Surrecruter chaque vague pour l’attrition en formation, en appliquant le pourcentage réellement constaté chez vous plutôt qu’en supposant que tout le monde sera certifié.",
      "Intégrer les préavis : un conseiller expérimenté qui démissionne d’un autre poste n’arrive pas la semaine de sa signature.",
      "Ajouter une ligne par promotion si vous en organisez plus que les trois vagues montrées.",
      "Adapter la durée de la double écoute à la complexité de votre produit : les files techniques ou réglementées demandent un accompagnement plus long.",
      "Avancer la portabilité des numéros si vous migrez des lignes existantes — le portage est une attente chez un tiers que vous ne comprimez pas."
    ],
    tips: [
      "<strong>Lancez le portage des numéros tôt.</strong> C’est le seul poste de ce plan dont l’horloge est tenue par un tiers, et il conditionne tous les tests de routage qui dépendent du vrai numéro.",
      "<strong>Construisez la base de connaissances avant la formation, pas pendant.</strong> Des formateurs qui rédigent le contenu en enseignant, c’est ainsi que la promotion 1 est formée sur un support que la promotion 2 ne verra jamais.",
      "<strong>Protégez la période de double écoute.</strong> C’est là que la durée de traitement et la qualité se stabilisent réellement ; la raccourcir pour tenir une date réapparaît en problème de niveau de service pendant un trimestre.",
      "<strong>Faites le pilote sur une file réelle mais limitée.</strong> Le routage, les codes de qualification et les chemins d’escalade ne se cassent vraiment qu’avec de vrais appelants en ligne.",
      "<strong>Montez en charge par paliers.</strong> Ne passez au palier suivant que lorsque la qualité et la durée de traitement tiennent au palier courant : la montée en charge est une série de portes, pas une pente."
    ],
    faq: [
      [
        "Combien de temps faut-il pour créer un centre de contacts ?",
        "Couramment quatre à six mois entre la validation du modèle opérationnel et l’ouverture, la montée en charge jusqu’au régime de croisière prenant deux à trois mois de plus. Le modèle propose environ six mois de construction et une montée en charge par paliers ensuite."
      ],
      [
        "Qu’est-ce qui porte le calendrier ?",
        "Le recrutement et la formation. La technologie s’achète et se paramètre en parallèle, mais une promotion demande des semaines de recrutement, puis des semaines de formation et d’accompagnement : l’académie est donc sur le chemin critique de l’ouverture."
      ],
      [
        "Combien de conseillers dans la première vague ?",
        "Assez pour couvrir le volume d’ouverture, plus le taux d’indisponibilité et l’attrition en formation, ce qui suppose de recruter sensiblement plus que le nombre de positions. Le modèle montre trois vagues, pour que les promotions suivantes soient dimensionnées sur ce que la première vous a réellement appris."
      ],
      [
        "Est-ce adapté à un centre à distance ou hybride ?",
        "Oui. Supprimez les lignes d’aménagement de plateau et conservez la logistique du matériel, les vérifications de connexion et l’intégration à distance : la séquence recrutement-formation est identique."
      ],
      [
        "Le modèle de centre de contacts est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans compte."
      ]
    ]
  },

  'franchise-rollout-plan': {
    card: "Tête de réseau, document précontractuel, recrutement des franchisés et vagues d’ouverture.",
    h1: "Plan de déploiement d’un réseau de franchise",
    metaTitle: "Réseau de franchise — plan de déploiement",
    metaDesc: "Plan gratuit de déploiement de franchise : manuel opératoire, document d’information précontractuelle, recrutement, sites, travaux et vagues d’ouverture.",
    lead: "Un <strong>plan de déploiement de réseau de franchise</strong> gratuit, bâti autour de la séquence par point de vente que vous répéterez pour chaque site — recrutement et agrément des franchisés, découpage des zones, recherche de local, travaux d’aménagement, standards d’enseigne et manuel opératoire, formation, communication de lancement, ouverture et accompagnement après ouverture. Le modèle montre une fois le travail de tête de réseau, puis trois vagues d’ouverture qui se chevauchent, ce qui correspond au déroulement réel d’un déploiement.",
    intro: "Un déploiement de franchise n’est pas un projet : c’est un projet type exécuté de nombreuses fois, avec des démarrages décalés. Le planning sépare clairement les deux :",
    phases: [
      [
        "Tête de réseau",
        "Document d’information précontractuelle et contrat de franchise, modèle économique du point de vente, manuel opératoire, standards d’enseigne, accords fournisseurs et modèle d’animation du réseau. <em>Jalon : réseau prêt à commercialiser.</em>"
      ],
      [
        "Zones et pipeline de candidats",
        "Découpage des zones et potentiel de marché, nombre de points de vente visés par marché, communication de recrutement, candidatures, journées de découverte, qualification financière et agrément. <em>Jalon : premiers contrats signés.</em>"
      ],
      [
        "Vague 1",
        "La séquence complète pour la première cohorte : recherche de local et bail commercial, conception et autorisations d’urbanisme, travaux, équipement, formation, communication de lancement et ouverture."
      ],
      [
        "Vague 2",
        "La même séquence, lancée une fois la vague 1 en travaux, pour que l’animation réseau et la conduite de chantier ne soient pas attendues à deux endroits en même temps."
      ],
      [
        "Vague 3",
        "La troisième cohorte, dimensionnée sur ce que les vagues 1 et 2 ont révélé de la durée et du coût réels par point de vente."
      ],
      [
        "Accompagnement et amélioration du réseau",
        "Visites d’animation après ouverture, revues de performance face au modèle économique, et mises à jour du manuel et de la formation nourries par ce que les premiers sites ont appris."
      ]
    ],
    callout: "La contrainte n’est jamais une ouverture en particulier — c’est le nombre d’ouvertures que votre équipe d’accompagnement peut porter simultanément. Recherche de local, suivi de chantier, formation et présence en semaine d’ouverture mobilisent la même petite équipe centrale, et chaque point de vente en a besoin pendant des semaines. Dessinez les vagues de manière à ce que ces fenêtres ne s’empilent pas. Un déploiement qui promet dix ouvertures en un trimestre avec un seul animateur est un plan pour ouvrir dix points de vente mal.",
    customize: [
      "Régler d’abord la séquence par point de vente sur vos durées réelles, puis la copier par vague : c’est le motif réutilisable.",
      "Modifier le chevauchement des vagues selon l’effectif d’animation : plus d’animateurs permet un décalage plus serré.",
      "Passer à une ligne par point de vente plutôt que par vague dès que les emplacements sont identifiés.",
      "Allonger les durées d’autorisation selon la commune : la même enseigne n’obtient pas ses autorisations d’urbanisme dans les mêmes délais partout.",
      "Placer la remise du document d’information précontractuelle au moins vingt jours avant chaque signature : le délai est légal et il décale mécaniquement toute la séquence en aval.",
      "Suivre les visites d’accompagnement après ouverture comme du travail planifié, et non comme une capacité supposée disponible."
    ],
    tips: [
      "<strong>N’ouvrez pas les sites de la vague 2 avant que la vague 1 ait exploité un mois.</strong> Les premiers points de vente sont là où vous découvrez ce que le manuel opératoire a mal prévu, et cet apprentissage vaut plus qu’une deuxième vague plus rapide.",
      "<strong>Agréez les franchisés lentement.</strong> Un mauvais franchisé coûte infiniment plus cher qu’une ouverture décalée, et s’en séparer prend des années.",
      "<strong>Terminez le manuel opératoire avant le premier contrat.</strong> Vous vendez un savoir-faire : s’il n’est pas écrit, chaque point de vente invente le sien.",
      "<strong>Traitez le bailleur et les autorisations site par site, pas au niveau du programme.</strong> Chaque local a sa propre horloge administrative, et elles ne tournent pas ensemble.",
      "<strong>Réservez la présence en semaine d’ouverture pour chaque site.</strong> La première semaine d’exploitation installe les habitudes du point de vente, et un appui à distance ne remplace pas quelqu’un sur le terrain."
    ],
    faq: [
      [
        "Combien de temps prend le déploiement d’un réseau de franchise ?",
        "La mise au point de la tête de réseau demande typiquement quatre à six mois, puis chaque point de vente court sur six à neuf mois entre l’agrément du franchisé et l’ouverture. Le modèle montre la construction du réseau plus trois vagues qui se chevauchent, sur environ deux ans."
      ],
      [
        "Combien de points de vente par vague ?",
        "Autant que votre équipe d’animation peut réellement accompagner en même temps sur la recherche de local, le suivi de chantier, la formation et la semaine d’ouverture — en général bien moins que ce que voudrait le plan commercial. C’est la raison pour laquelle le modèle utilise des vagues courtes."
      ],
      [
        "Quelle est la séquence par point de vente ?",
        "Agrément du franchisé, zone et recherche de local, bail commercial, conception et autorisations, travaux, équipement, formation, communication de lancement, ouverture et accompagnement. Elle se répète à l’identique, et c’est précisément ce qui la rend planifiable."
      ],
      [
        "Peut-on l’utiliser pour un développement en propre ?",
        'Oui. Supprimez les lignes de recrutement et d’agrément des franchisés et conservez la séquence par point de vente — pour un site unique, le <a href="/templates/retail-store-opening-timeline.html">rétroplanning d’ouverture de magasin</a> est plus adapté.'
      ],
      [
        "Le modèle de déploiement de franchise est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans inscription."
      ]
    ]
  },

  'okr-quarterly-planning': {
    card: "Cadrage, notation du trimestre écoulé, alignement, engagement et rétrospective.",
    h1: "Planning de cycle OKR trimestriel",
    metaTitle: "OKR — planning trimestriel",
    metaDesc: "Planning gratuit de cycle OKR trimestriel : direction, notation du trimestre écoulé, rédaction, alignement, engagement, point à mi-trimestre et clôture.",
    lead: "Un <strong>planning de cycle OKR trimestriel</strong> gratuit, présenté pour ce qu’il est réellement : un cycle qui se répète — rédaction des objectifs, alignement entre équipes, notation du trimestre qui s’achève, engagement et publication, point à mi-trimestre, puis clôture et rétrospective qui alimentent le tour suivant. À télécharger pour un lancement de planification, ou à ouvrir en ligne pour voir où la clôture de ce trimestre chevauche la rédaction du suivant.",
    intro: "Si la planification OKR paraît toujours précipitée, c’est qu’elle ne part jamais d’une page blanche. Vous notez un trimestre pendant que vous rédigez le suivant, et les deux réclament les mêmes personnes les mêmes semaines. Le modèle montre ce chevauchement au lieu de faire comme si le cycle était séquentiel :",
    phases: [
      [
        "Direction de l’entreprise",
        "Revue de la stratégie et des objectifs annuels par la direction, les deux ou trois objectifs d’entreprise du trimestre, et le cadrage contre lequel les équipes rédigeront. <em>Jalon : objectifs d’entreprise rédigés.</em>"
      ],
      [
        "Clôture du trimestre précédent",
        "Collecte des dernières données de résultats clés, auto-notation par les équipes, calibrage entre équipes et restitution des résultats notés — le tout en parallèle de la rédaction du trimestre suivant."
      ],
      [
        "Rédaction par les équipes",
        "Chaque équipe rédige ses objectifs et ses résultats clés à partir du cadrage de l’entreprise, avec une séance de travail et un premier jet écrit par équipe."
      ],
      [
        "Alignement",
        "Revue des dépendances entre équipes, arbitrage lorsque deux équipes visent la même capacité, et résolution des conflits avant l’engagement. <em>Jalon : alignement terminé.</em>"
      ],
      [
        "Engagement et lancement",
        "Revue par la direction, derniers arbitrages, publication dans l’outil de suivi, réunion de lancement et démarrage du rythme de point hebdomadaire. <em>Jalon : OKR engagés.</em>"
      ],
      [
        "Exécution dans le trimestre",
        "Points de confiance hebdomadaires, point à mi-trimestre où les objectifs peuvent être ajustés ou abandonnés, puis clôture et rétrospective à la fin. <em>Jalon : trimestre clôturé.</em>"
      ]
    ],
    callout: "Le cycle se chevauche lui-même, et c’est là tout le problème d’ordonnancement. Vous ne pouvez pas noter le trimestre écoulé après avoir démarré le suivant, parce que les données vieillissent et que plus personne ne se souvient du contexte — mais vous ne pouvez pas non plus rédiger le trimestre suivant sans les notes. Les deux tournent donc ensemble pendant environ trois semaines, avec les mêmes responsables des deux côtés. Réservez ce chevauchement explicitement. Les équipes qui traitent la planification comme un séminaire de deux jours en semaine 1 font en réalité quatre semaines de travail en deux jours, et appellent le résultat un engagement.",
    customize: [
      "Placer le jour 0 environ trois semaines avant la fin du trimestre : tout le cycle se cale alors correctement autour de la bascule.",
      "Ajouter une ligne de rédaction par équipe, pour voir qui est en retard sans avoir à relancer.",
      "Déplacer le point à mi-trimestre à la fréquence que vous pratiquez réellement — mensuel fonctionne mieux que trimestriel pour les équipes qui bougent vite.",
      "Raccourcir la phase d’alignement si vous avez moins de cinq équipes, et l’allonger nettement si les équipes se partagent la même capacité de développement.",
      "Garder la notation et la rédaction visiblement superposées plutôt que mises bout à bout : le chevauchement est l’image honnête.",
      "Vérifier la position du cycle par rapport aux congés : un trimestre qui englobe août ou la fin décembre perd des semaines de disponibilité qu’aucun planning séquentiel ne montre."
    ],
    tips: [
      "<strong>Notez avant de vous engager.</strong> Fixer de nouvelles cibles sans savoir comment les précédentes ont atterri est exactement ainsi que le même objectif trop ambitieux se réécrit trois trimestres de suite.",
      "<strong>Plafonnez le nombre d’objectifs.</strong> Trois par équipe est un plan ; sept est une liste. La phase d’alignement devient spectaculairement plus simple quand il y a moins à aligner.",
      "<strong>Rendez les dépendances explicites pendant l’alignement.</strong> La plupart des échecs d’OKR se ramènent à une équipe qui comptait discrètement sur la capacité d’une autre, sans que celle-ci se soit engagée.",
      "<strong>Traitez le point à mi-trimestre comme un point de décision.</strong> Il existe pour abandonner ou redimensionner les objectifs qui n’atterriront pas, pas pour présenter un état d’avancement.",
      "<strong>Faites la rétrospective sur le processus, pas seulement sur les résultats.</strong> Si la rédaction a paru précipitée ce trimestre, elle le paraîtra encore le trimestre prochain tant que le calendrier ne change pas."
    ],
    faq: [
      [
        "Quand faut-il commencer la planification OKR trimestrielle ?",
        "Environ trois à quatre semaines avant le début du trimestre. Le modèle démarre la rédaction alors que le trimestre précédent court encore, parce que la direction et les équipes ont besoin de temps avant l’engagement, et parce que les données de notation ne sont fraîches qu’à la bascule."
      ],
      [
        "En quoi est-ce différent du modèle de plan annuel ?",
        'Le <a href="/templates/annual.html">plan annuel</a> couvre une année entière d’activité. Ceci est le rythme trimestriel qui vit à l’intérieur : le cycle de quatre semaines — rédiger, aligner, engager, faire le point, clôturer — qui se répète chaque trimestre.'
      ],
      [
        "Quel rapport avec la feuille de route produit ?",
        'La <a href="/templates/product-roadmap.html">feuille de route produit</a> dit ce que vous construisez et quand. Les OKR sont les résultats sur lesquels vous vous engagez pour un trimestre. La feuille de route est généralement une des entrées de la rédaction, et non son remplacement.'
      ],
      [
        "Pourquoi la notation et la rédaction se chevauchent-elles ?",
        "Parce que les deux mobilisent les mêmes personnes et les mêmes données au même moment. Noter après avoir rédigé revient à s’engager à l’aveugle ; rédiger après avoir noté revient à démarrer le trimestre avec deux semaines de retard. Le modèle les superpose délibérément et montre de combien."
      ],
      [
        "Peut-on le réutiliser chaque trimestre ?",
        "Oui, c’est même tout l’intérêt. Copiez le bloc, décalez les dates d’un trimestre et la séquence tient. Seuls les objectifs changent."
      ],
      [
        "Le modèle de planification OKR est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans compte."
      ]
    ]
  },

  'water-treatment-plant-construction-schedule': {
    card: "Autorisation environnementale, génie civil, équipements, mise en eau et essais de garantie.",
    h1: "Planning de construction d’une station de traitement des eaux",
    metaTitle: "Station de traitement des eaux — planning",
    metaDesc: "Planning gratuit de station de traitement des eaux : génie civil, équipements, mise en eau, ensemencement biologique et essais de garantie.",
    lead: "Un <strong>planning de construction de station de traitement des eaux</strong> gratuit, qui traite la mise en service pour ce qu’elle est — le vrai projet, et non une queue de chantier de quinze jours. Autorisation environnementale au titre de la loi sur l’eau et conception process, ouvrages de génie civil et épreuves d’étanchéité, montage électromécanique, essais à l’eau claire, puis mise en eau avec ensemencement de la biomasse et essais de garantie constatés avant toute réception. À télécharger pour un dossier de revue de projet, ou à ouvrir en ligne pour allonger les barres de mise en service à la durée que votre filière exige réellement.",
    intro: "Tout autre bâtiment est réceptionné quand la liste des réserves est vide. Une station est réceptionnée quand elle a démontré, en continu et pendant des semaines, un rejet conforme à son arrêté d’autorisation. Le planning est construit à rebours de cette date :",
    phases: [
      [
        "Autorisations, conception et achats",
        "Caractérisation de l’eau brute et essais pilotes, conception de la filière et bilan matière, études d’exécution, dossier loi sur l’eau et arrêté préfectoral d’autorisation de rejet — ou avis de l’ARS et de l’hydrogéologue agréé pour une usine d’eau potable — et commandes des équipements à long délai qui figent les dates de montage. <em>Jalon : arrêté d’autorisation obtenu.</em>"
      ],
      [
        "Génie civil et ouvrages",
        "Terrassements et fondations profondes, ouvrage d’entrée, décanteurs, bassins biologiques, galerie de filtration et files boues — puis épreuve d’étanchéité de chaque ouvrage par mise en eau. <em>Jalon : ouvrages étanches.</em>"
      ],
      [
        "Montage électromécanique",
        "Pompes et robinetterie, surpresseurs et grille de diffuseurs d’aération, matériaux filtrants, skids de dosage, traitement UV, tableaux électriques et groupe de secours, instrumentation de terrain. <em>Jalon : achèvement mécanique.</em>"
      ],
      [
        "Automatisme et essais à l’eau claire",
        "Paramétrage de la supervision, contrôle des boucles de régulation, essais moteurs à vide et essais fonctionnels à l’eau claire — valider la philosophie de conduite avant que la moindre eau brute n’entre dans les ouvrages."
      ],
      [
        "Mise en eau et ensemencement biologique",
        "Première arrivée d’eau brute, ensemencement en boues issues d’une station en exploitation, croissance de la biomasse et montée en MES, établissement de la nitrification et réglage de l’âge des boues. <em>Jalon : process biologique stabilisé.</em>"
      ],
      [
        "Essais de garantie et réception",
        "Montée au débit nominal, essais de garantie constatés sur une période soutenue, campagne d’analyses de conformité, essai de fiabilité au débit de pointe, formation des exploitants et réception. <em>Jalon : procès-verbal de réception.</em>"
      ]
    ],
    callout: "La mise en service ne se simule pas. Les boues activées sont une culture qu’il faut ensemencer puis faire croître, et les bactéries nitrifiantes se dédoublent lentement : comptez des semaines, pas des jours, et davantage en période froide. Par-dessus se placent des essais de garantie constatés au débit nominal sur une durée soutenue, avec la police de l’eau et le maître d’ouvrage en observateurs. Ces deux barres sont physiques et contractuelles, jamais négociables, et elles doivent être les plus longues de la partie droite de votre planning.",
    customize: [
      "Caler les barres d’ensemencement et de montée en biomasse sur les chiffres du concepteur de la filière et sur la saison de mise en service : un démarrage hivernal peut ajouter plusieurs semaines rien que sur la nitrification.",
      "Régler la durée des essais de garantie sur celle qu’imposent le marché et l’arrêté d’autorisation : vingt-huit jours est courant, mais beaucoup d’opérations exigent davantage, ou une reprise complète si un prélèvement sort des clous.",
      "Ajouter une barre de recontrôle après les essais de garantie. Supposer une réussite du premier coup est l’erreur de planning la plus fréquente sur ce type d’ouvrage.",
      "Découper l’épreuve d’étanchéité en une ligne par ouvrage si vous les remplissez en séquence — un ouvrage recalé doit être vidangé, séché, repris et rerempli.",
      "Avancer le paramétrage de la supervision : il dépend des schémas PID, pas du béton, et il est systématiquement démarré beaucoup trop tard.",
      "Marquer comme jalons l’arrêté d’autorisation, l’étanchéité des ouvrages, l’achèvement mécanique, la première eau brute et la réception : ce sont les dates que suivent à la fois le comité de pilotage du maître d’ouvrage et le service instructeur."
    ],
    tips: [
      "<strong>Prévenez le service de police de l’eau de votre date de début d’essais bien à l’avance.</strong> Le constat dépend de leur agenda, pas du vôtre, et une notification décalée peut repousser la réception d’un mois alors que l’usine est prête.",
      "<strong>Sécurisez vos boues d’ensemencement tôt et par écrit.</strong> Elles viennent d’une autre station en exploitation, demandent une noria de citernes et un créneau de livraison ; une station pleine d’eau brute qui attend son inoculum consomme de la marge pour rien.",
      "<strong>Validez l’automatisme à l’eau claire d’abord.</strong> Courir après un capteur de niveau défaillant ou une vanne inversée pendant qu’un process biologique cherche à se stabiliser coûte infiniment plus cher que les quinze jours de la phase eau claire.",
      "<strong>Ne superposez pas les essais de garantie avec des travaux restants.</strong> Une entreprise encore en train de poser des garde-corps pendant un essai constaté offre un motif tout trouvé pour invalider la période.",
      "<strong>Surveillez les valeurs de rejet, pas le débitmètre.</strong> Atteindre le débit nominal prouve l’hydraulique ; seule une conformité analytique soutenue prouve la filière, et c’est la seconde qui déclenche la réception.",
      "<strong>Formez les exploitants pendant la mise en service, pas après.</strong> L’équipe de mise en service est la seule qui verra jamais l’ouvrage dans tous ses modes de défaillance, et ce savoir quitte le site avec elle."
    ],
    faq: [
      [
        "Combien de temps dure la construction d’une station de traitement des eaux ?",
        "Une station communale de taille moyenne court couramment sur 24 à 36 mois entre l’arrêté d’autorisation et la réception, et le modèle retient cet ordre de grandeur. Le génie civil est prévisible ; la variance se loge dans l’instruction administrative en amont et dans la mise en service en aval."
      ],
      [
        "Pourquoi la mise en service est-elle si longue ?",
        "Parce qu’un traitement biologique se cultive, il ne s’allume pas. Ensemencement, montée en biomasse et établissement de la nitrification prennent des semaines, et les essais de garantie ne peuvent démarrer qu’une fois la filière stable."
      ],
      [
        "Que sont les essais de garantie ?",
        "Une période continue au débit nominal pendant laquelle l’ouvrage doit produire un rejet conforme aux valeurs de son arrêté d’autorisation, avec prélèvements et constat contradictoire du maître d’ouvrage et du service de police de l’eau. C’est leur réussite — et non la fin des travaux — qui déclenche la réception."
      ],
      [
        "Peut-on raccourcir la mise en service en ensemençant plus tôt ?",
        "À peine. Vous pouvez réserver les boues d’ensemencement et avoir les citernes prêtes le jour de l’arrivée d’eau brute, mais la courbe de croissance relève de la biologie. La compression du délai doit venir du génie civil et du montage."
      ],
      [
        "Comment planifier un prélèvement non conforme ?",
        "En ajoutant une barre d’aléa pour le recontrôle et, dans beaucoup de marchés, pour une reprise complète de la période d’essais. Bâtir le planning sur une réussite du premier coup, c’est ainsi que ces opérations dérapent au tout dernier point d’arrêt."
      ],
      [
        "Le modèle de planning de station de traitement est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans compte ni filigrane."
      ]
    ]
  },

  'airport-terminal-expansion-plan': {
    card: "Fenêtres d’intervention négociées, badges côté piste, capacité de filtrage, tri bagages et bascule.",
    h1: "Plan d’extension d’un terminal aéroportuaire",
    metaTitle: "Extension de terminal aéroportuaire",
    metaDesc: "Plan gratuit d’extension de terminal : fenêtres d’intervention, palissades, badges côté piste, capacité de filtrage, tri bagages, ORAT et bascule.",
    lead: "Un <strong>plan d’extension de terminal aéroportuaire</strong> gratuit, pensé pour un terminal qui ne ferme jamais — fenêtres d’intervention successives derrière palissades, autorisations de travaux côté piste et accès sous accompagnement, cheminements passagers provisoires, capacité de filtrage maintenue au niveau de l’heure de pointe à chaque changement de configuration, intégration du système de tri bagages, ORAT (préparation à l’exploitation) et bascule de nuit. À télécharger pour un comité de programme, ou à ouvrir en ligne pour aligner les fenêtres d’intervention sur votre propre saisonnalité de trafic.",
    intro: "Une extension n’est pas un projet en six phases : c’est une suite de fenêtres d’intervention négociées à l’intérieur d’une exploitation en service. Le planning garde la contrainte d’exploitation visible dans chaque phase :",
    phases: [
      [
        "Études amont, concertation exploitation et autorisations",
        "Modélisation des flux passagers, accord des compagnies et des assistants en escale, stratégie de phasage et de mise à disposition des emprises, permis de construire, autorisations de travaux côté piste et titres de circulation aéroportuaire pour les entreprises. <em>Jalon : calendrier des fenêtres d’intervention validé.</em>"
      ],
      [
        "Conception et travaux préparatoires",
        "Esquisse et études d’exécution, notice de sécurité incendie, tracé des palissades et signalétique provisoire, dévoiement des réseaux et cheminements passagers provisoires qui doivent exister avant la moindre fermeture. <em>Jalon : travaux préparatoires terminés.</em>"
      ],
      [
        "Fenêtre 1 — extension de jetée",
        "Pose des palissades, reconfiguration de l’aire de stationnement et des postes avions, structure et enveloppe de la jetée, passerelles télescopiques et salles d’embarquement, puis restitution des postes à l’exploitation. <em>Jalon : postes avions remis en service.</em>"
      ],
      [
        "Fenêtre 2 — sûreté et enregistrement",
        "Lignes de filtrage provisoires démontrées à l’heure de pointe d’abord, puis dépose des banques d’enregistrement, nouveaux îlots, aménagement du poste d’inspection filtrage central et travaux en zone de contrôle transfrontalier."
      ],
      [
        "Bagages et intégration des systèmes",
        "Installation du système de tri bagages, inspection filtrage des bagages de soute, essais de tri, affichage dynamique et sonorisation, vidéoprotection et contrôle d’accès, banques d’enregistrement partagées CUTE/CUPPS. <em>Jalon : intégration des systèmes terminée.</em>"
      ],
      [
        "ORAT, exercices et bascule",
        "Préparation à l’exploitation, familiarisation des personnels, exercices avec figurants passagers, essais d’évacuation, inspection de la DSAC et des services de l’État, puis la bascule de nuit. <em>Jalon : exploitation complète.</em>"
      ]
    ],
    callout: "Ne retirez jamais de capacité de filtrage avant d’avoir démontré son remplacement à l’heure de pointe. Tout le reste se contourne dans un terminal en exploitation — un cheminement plus long, un panneau provisoire, une boutique déplacée — mais une file d’attente au poste d’inspection filtrage qui dépasse son objectif est un incident d’exploitation déclaré, et il fera arrêter votre fenêtre d’intervention en quelques jours. Placez un jalon de démonstration de capacité devant chaque changement de configuration qui touche au filtrage central.",
    customize: [
      "Remplacer les deux fenêtres d’intervention par les vôtres, et donner à chacune des dates de début et de fin validées avec l’exploitation aéroportuaire, pas avec l’entreprise de travaux.",
      "Caler les fenêtres sur votre véritable creux de saison et vérifier la prévision de trafic, pas celle de l’an dernier : une fenêtre dimensionnée pour février ne tient pas en juillet.",
      "Ajouter une ligne d’instruction des titres de circulation par vague de compagnons : le badge aéroportuaire suppose une enquête administrative préfectorale et il a bloqué plus de mobilisations que les ruptures d’approvisionnement.",
      "Insérer une barre de travaux de nuit partout où l’intervention est impossible aux heures d’exploitation, et affecter les accompagnateurs correspondants.",
      "Découper les essais du système de tri bagages en installation, intégration puis essais en volume et en tri : c’est le dernier qui révèle les problèmes, et c’est celui que l’on comprime.",
      "Marquer comme jalons le calendrier des fenêtres, la remise en service des postes avions, la démonstration de capacité de filtrage, l’intégration des systèmes et l’exploitation complète."
    ],
    tips: [
      "<strong>Le calendrier des fenêtres d’intervention est le planning.</strong> Une fois signé par l’exploitation, les compagnies et les assistants en escale, c’est de lui que découle la séquence de travaux — et non l’inverse.",
      "<strong>Construisez le cheminement provisoire avant d’en avoir besoin, et parcourez-le avec une vraie charge passagers.</strong> Une signalétique provisoire impeccable sur plan échoue à six heures du matin avec un gros-porteur complet et une famille poussant trois chariots.",
      "<strong>Traitez l’accès côté piste comme une ressource à délai.</strong> Titres de circulation, accompagnateurs, autorisations de conduite en zone réservée et contrôles de véhicules prennent des semaines, et une équipe accompagnée produit une fraction du rendement d’une équipe côté ville : intégrez-le aux durées.",
      "<strong>Ne laissez pas l’intégration bagages commencer une fois le bâtiment fini.</strong> Un système de tri est une machine à longue courbe d’essais ; le tri et la réconciliation demandent des mois et sont sur le chemin critique de l’ouverture.",
      "<strong>Organisez un véritable exercice d’exploitation avec des figurants.</strong> Il révèle les points de blocage de file, les trous d’affichage et les manques d’effectifs qu’aucun essai système ne montrera, et il coûte bien moins cher que de les découvrir le premier jour.",
      "<strong>Planifiez la bascule comme une opération de nuit avec un point de renoncement.</strong> Décidez à l’avance de l’état dans lequel le terminal doit être à une heure donnée pour que la bascule se poursuive, et de la configuration de repli si ce n’est pas le cas."
    ],
    faq: [
      [
        "Combien de temps prend l’extension d’un terminal aéroportuaire ?",
        "Une extension par phases sur un terminal en exploitation court couramment sur deux à quatre ans, parce que le travail se livre par fenêtres d’intervention négociées et non en continu. Le modèle propose un programme d’environ deux ans, extensible en ajoutant des fenêtres."
      ],
      [
        "Qu’est-ce que l’ORAT et quand doit-il commencer ?",
        "L’ORAT — operational readiness and airport transfer, soit la préparation à l’exploitation et au transfert — couvre les procédures, les effectifs, la familiarisation et les exercices. Il doit démarrer pendant que les travaux courent encore, typiquement six à neuf mois avant l’ouverture, et non après la réception."
      ],
      [
        "Comment maintenir la capacité de filtrage pendant les travaux ?",
        "En mettant d’abord en service des lignes provisoires et en les démontrant à l’heure de pointe avant de toucher au poste d’inspection filtrage existant. Le modèle fait de cette démonstration un jalon qui conditionne la deuxième fenêtre."
      ],
      [
        "Pourquoi les travaux côté piste durent-ils plus longtemps ?",
        "Titres de circulation, accompagnement, autorisations de véhicules, plages horaires restreintes et disponibilité des postes avions réduisent tous le rendement effectif. Prévoyez des durées côté piste nettement supérieures au même ouvrage côté ville, et ajoutez une barre d’instruction des badges."
      ],
      [
        "En quoi est-ce différent d’un terminal neuf ?",
        "Un terminal neuf n’a aucun passager à protéger et peut être ordonnancé pour l’efficacité de chantier. Ce modèle s’organise autour des fenêtres d’intervention, des cheminements provisoires et de la capacité préservée — c’est précisément ce qui rend une extension plus lente."
      ],
      [
        "Le modèle d’extension de terminal est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans compte ni filigrane."
      ]
    ]
  },

  'fiber-broadband-rollout-plan': {
    card: "Permissions de voirie, conventions, relevé du génie civil, vagues de plaques, mesures et ouverture commerciale.",
    h1: "Plan de déploiement de la fibre optique",
    metaTitle: "Déploiement fibre optique — plan",
    metaDesc: "Plan gratuit de déploiement FTTH : permissions de voirie, conventions d’immeuble, génie civil, vagues de plaques, mesures et ouverture commerciale.",
    lead: "Un <strong>plan de déploiement de la fibre optique</strong> gratuit, construit comme se déroule réellement un programme FTTH — une séquence par plaque, répétable, exécutée en vagues qui se chevauchent, conditionnée par les permissions de voirie, les conventions de servitude et d’immeuble et la disponibilité du génie civil, chaque plaque s’achevant sur son propre jalon d’ouverture commerciale, les raccordements et le chiffre d’affaires ne démarrant qu’après ce jalon. À télécharger pour un dossier d’investisseur ou de syndicat mixte, ou à ouvrir en ligne pour ajouter autant de vagues de plaques que votre plan de déploiement en compte.",
    intro: "Un déploiement fibre n’est pas un chantier long : ce sont les mêmes six étapes répétées de plaque en plaque, décalées dans le temps. Le modèle rend ce motif explicite, pour que vous copiiez une vague plutôt que d’inventer un plan par plaque :",
    phases: [
      [
        "Cadrage du programme et ingénierie générale",
        "Évaluation de la demande et priorisation des plaques, architecture du réseau, NRO et points de mutualisation, marché ou accord-cadre travaux, achats de collecte et de transport, et le modèle de données patrimoniales dont dépend tout l’aval. <em>Jalon : plan de déploiement figé.</em>"
      ],
      [
        "Autorisations, conventions et relevés",
        "Permissions de voirie et arrêtés de circulation, DT-DICT, négociation des conventions de servitude, conventions d’immeuble avec les syndics de copropriété, relevé de disponibilité des fourreaux et des appuis aériens, et commandes d’accès au génie civil de l’opérateur d’infrastructure. <em>Jalon : conventions purgées pour la vague 1.</em>"
      ],
      [
        "Plaque A — vague 1",
        "Études d’exécution et plan d’épissurage, aiguillage et débouchage des fourreaux, génie civil, portage de câble et pose sur appuis, raccordement optique et construction du SRO, mesures par réflectométrie et remise des plans de récolement. <em>Jalon : ouverture commerciale plaque A.</em>"
      ],
      [
        "Plaque B — vague 2",
        "La séquence à l’identique, lancée pendant que la plaque A est encore en génie civil, pour que les équipes et les autorisations s’enchaînent sans creux. <em>Jalon : ouverture commerciale plaque B.</em>"
      ],
      [
        "Plaque C — vague 3",
        "La troisième vague, avec son propre délai de conventions placé devant elle — l’étape que les équipes oublient le plus souvent de décaler. <em>Jalon : ouverture commerciale plaque C.</em>"
      ],
      [
        "Ouverture, commercialisation et raccordements",
        "Mise en service du NRO, préavis de mise à disposition du point de mutualisation aux opérateurs commerciaux, paramétrage des systèmes d’information et de facturation, précommercialisation, montée en charge des équipes de raccordement et campagnes de raccordement par plaque. <em>Jalon : revue du taux de pénétration et décision de vague suivante.</em>"
      ]
    ],
    callout: "Rien n’est facturable tant qu’une plaque n’est pas ouverte commercialement. Le nombre de locaux raccordables est un indicateur de chantier ; le nombre de locaux raccordés est celui du chiffre d’affaires, et c’est dans l’écart entre les deux que meurent les plans d’affaires fibre. Posez un jalon d’ouverture commerciale sur chaque plaque, faites partir la barre de raccordement de ce jalon, et reconnaissez qu’un refus de convention ou un fourreau bouché ne décale pas une tâche : il décale d’un trimestre le chiffre d’affaires d’une plaque entière. Prévoyez aussi le préavis réglementaire de mise à disposition du point de mutualisation : la commercialisation n’ouvre pas le jour où le câble est soufflé.",
    customize: [
      "Copier le bloc de la plaque A une fois par plaque et décaler les offsets : la séquence est délibérément identique pour être dupliquée plutôt que réécrite.",
      "Régler les barres de permission de voirie sur les délais d’instruction réels de vos collectivités : ils varient beaucoup d’une commune à l’autre et ne se compriment pas en poussant l’entreprise.",
      "Ajouter une barre de reprise de génie civil avec un aléa réaliste : les fourreaux bouchés ou effondrés se découvrent au relevé, pas à l’étude, et ils font redévier des rues entières.",
      "Séparer le portage de câble de l’épissurage si des équipes différentes les réalisent : les prix de journée et la sensibilité à la météo ne sont pas les mêmes.",
      "Insérer un sous-plan immeuble collectif là où c’est pertinent : la convention avec le syndic, le vote en assemblée générale et la colonne montante suivent une horloge totalement différente de celle des travaux de voirie.",
      "Marquer l’ouverture commerciale de chaque plaque comme jalon et faire démarrer de là la barre de raccordement, pour que le planning montre le chiffre d’affaires suivant le déploiement plutôt que courant à côté."
    ],
    tips: [
      "<strong>Lancez les conventions avant la fin des études.</strong> C’est le poste à délai le plus long de tout le programme, et il dépend des notaires, des bailleurs et des assemblées générales des autres, pas de vos ingénieurs.",
      "<strong>Relevez le génie civil avant d’engager une plaque dans une vague.</strong> Les bases patrimoniales d’infrastructure sont fréquemment fausses, et découvrir un fourreau bouché après mobilisation des équipes coûte son créneau à la plaque.",
      "<strong>Faites se chevaucher les vagues volontairement, pas par accident.</strong> Tout l’intérêt du découpage en vagues est de charger en continu une équipe de génie civil, une équipe de raccordement optique et une équipe de raccordement client ; les trous entre vagues sont du coût pur.",
      "<strong>Faites fonctionner les systèmes de commande et de facturation dès la vague 1, pas avant la vague 3.</strong> Une plaque peut être physiquement construite et rester invendable parce que la commande, l’activation et la facturation ne sont pas intégrées.",
      "<strong>Précommercialisez une plaque avant son ouverture.</strong> Les manifestations d’intérêt recueillies pendant le génie civil convertissent bien mieux qu’une campagne à froid une fois les camions repartis, et elles avancent la courbe de raccordement.",
      "<strong>Suivez le coût par local raccordable plaque par plaque, pas à l’échelle du programme.</strong> Une plaque difficile, lourde en reprise de génie civil, se dissimule dans une moyenne et consomme discrètement l’aléa de trois plaques faciles."
    ],
    faq: [
      [
        "Combien de temps prend le déploiement d’une plaque fibre ?",
        "Une plaque de quelques milliers de locaux court typiquement sur quatre à six mois entre les études d’exécution et l’ouverture commerciale, et c’est ce que retient le modèle. La durée du programme vient du nombre de plaques menées en parallèle, pas de la durée unitaire."
      ],
      [
        "Que signifie l’ouverture commerciale d’une plaque ?",
        "C’est le moment où la plaque est construite, mesurée et chargée dans les systèmes de commande, de sorte que des clients peuvent réellement être raccordés — l’équivalent du RFS anglo-saxon. En France, elle suppose aussi la mise à disposition du point de mutualisation aux opérateurs commerciaux, assortie d’un préavis. C’est ce jalon qui déclenche le chiffre d’affaires, et il se suit plaque par plaque."
      ],
      [
        "Pourquoi les conventions sont-elles sur le chemin critique ?",
        "Parce qu’elles engagent des tiers — propriétaires, bailleurs, copropriétés — qui n’ont aucune raison d’aller à votre rythme. Elles prennent des mois, ne se compriment pas en ajoutant des moyens, et un seul refus peut imposer une reprise d’ingénierie sur toute une plaque."
      ],
      [
        "Combien de vagues mener en parallèle ?",
        "Assez pour charger en continu vos équipes de génie civil et de raccordement, sans dépasser le débit d’instruction des permissions de voirie de vos gestionnaires de voirie. Deux à trois vagues qui se chevauchent est courant ; le modèle en montre trois."
      ],
      [
        "Pourquoi les locaux raccordés sont-ils si peu nombreux face aux raccordables ?",
        "Parce que le raccordement dépend de la commercialisation, de la capacité de rendez-vous d’installation et des échéances de contrat des abonnés, dont rien ne se produit le jour de l’ouverture de la plaque. Modélisez la courbe de pénétration séparément de la courbe de construction."
      ],
      [
        "Le modèle de déploiement fibre est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans compte ni filigrane."
      ]
    ]
  },

  'stadium-construction-schedule': {
    card: "Gradins préfabriqués, levage de la toiture, aménagements, pelouse, homologation et match d’ouverture.",
    h1: "Planning de construction d’un stade",
    metaTitle: "Construction de stade — planning",
    metaDesc: "Planning gratuit de construction de stade : gros œuvre, gradins, levage de toiture, aménagements, pelouse, homologation et match d’ouverture.",
    lead: "Un <strong>planning de construction de stade</strong> gratuit, bâti à rebours d’une date que personne sur le projet ne maîtrise : le match d’ouverture inscrit au calendrier de la ligue. Il couvre la cuvette et les gradins préfabriqués, la charpente de toiture et son levage dans sa fenêtre météo, l’aménagement des coursives et des espaces d’hospitalité, la construction de la pelouse et sa période d’enracinement, puis les matchs tests et l’homologation qui séparent l’achèvement des travaux d’un stade plein. À télécharger pour un dossier de comité, ou à ouvrir en ligne pour déplacer la date du match et voir ce qui casse.",
    intro: "La plupart des chantiers négocient leur date de fin. Celui-ci ne le peut pas : le calendrier est publié, les billets sont vendus, et deux des postes les plus longs — l’enracinement du gazon et le levage de la toiture — dépendent de la météo et de la biologie, pas de la main-d’œuvre. Le planning s’ordonne en conséquence :",
    phases: [
      [
        "Conception, autorisations et travaux préparatoires",
        "Programme de jauge, date d’ouverture fixée, permis de construire, stratégie d’homologation de l’enceinte et de classement ERP, conception de la cuvette, lot charpente métallique et installation de chantier. <em>Jalon : date du match d’ouverture arrêtée.</em>"
      ],
      [
        "Infrastructures et cuvette",
        "Fondations profondes, sous-sols et galeries techniques, ossature coulée en place, fabrication et pose des gradins préfabriqués. <em>Jalon : structure de la cuvette terminée.</em>"
      ],
      [
        "Toiture et enveloppe",
        "Fabrication de la charpente, anneau de compression, mise en tension du filet de câbles, le grand levage dans sa fenêtre météo, puis bardage. <em>Jalon : enveloppe hors d’eau.</em>"
      ],
      [
        "Aménagements, hospitalités et systèmes",
        "Coursives, loges et salons, cuisines et points de restauration, sièges, éclairage sportif et écrans géants, tourniquets et billetterie, moyens de diffusion et poste central de sécurité."
      ],
      [
        "Pelouse et aire de jeu",
        "Terrassement et drainage, chauffage de pelouse et arrosage, couche de croissance, pose du gazon hybride et période d’enracinement. <em>Jalon : pelouse remise à l’équipe terrain.</em>"
      ],
      [
        "Matchs tests, homologation et ouverture",
        "Dossier d’homologation, passage de la commission de sécurité, formation des stadiers, un match test à jauge réduite, un match test à jauge quasi complète, puis le coup d’envoi. <em>Jalon : match d’ouverture.</em>"
      ]
    ],
    callout: "Deux barres de ce planning ne se compriment pas. Le levage de toiture réclame une fenêtre météo calme et une grue réservée des mois à l’avance ; la pelouse réclame une période d’enracinement qui se compte en semaines de température et de lumière convenables avant de tenir la charge d’un match. Les deux se situent tard dans le programme, les deux sont saisonnières, et les deux alimentent une date de match qui ne bougera pas. Ordonnancez-les en premier et faites tenir le reste des travaux autour.",
    customize: [
      "Saisir la date réelle de votre match d’ouverture, puis remonter le temps : le modèle est délibérément construit pour que le dernier jalon soit figé et que la marge se loge plus tôt.",
      "Régler la barre d’enracinement sur votre climat et votre système de gazon : une pose de printemps, avec des jours longs, s’établit bien plus vite qu’une pose d’automne, et cet écart peut valoir un match entier.",
      "Déplacer le levage de toiture vers votre vraie saison de vents faibles et ajouter une barre d’aléa derrière : un levage reporté par la météo ne glisse pas d’un jour, il glisse à la fenêtre suivante.",
      "Ajouter une ligne par match test exigé par votre autorité d’homologation : la plupart demandent une montée en jauge progressive plutôt qu’un unique essai à pleine capacité.",
      "Découper les aménagements par tribune ou par niveau si le stade peut ouvrir partiellement : certaines enceintes obtiennent une homologation à jauge réduite et achèvent le reste ensuite.",
      "Marquer comme jalons la date du match, l’achèvement de la cuvette, la mise hors d’eau, la remise de la pelouse, l’homologation et le coup d’envoi : ce sont les six dates que réclame un conseil d’administration de club."
    ],
    tips: [
      "<strong>Traitez la date du match comme une contrainte, pas comme un objectif.</strong> Si le calcul à rebours dit que le levage doit intervenir avant l’hiver, c’est la réponse — en débattre en réunion d’avancement ne change pas le vent.",
      "<strong>Commandez les gradins préfabriqués démesurément tôt.</strong> La fabrication est une file d’attente d’usine, et les éléments de gradins sont ce qui risque le plus de bloquer la cuvette pendant que tout le monde regarde la toiture.",
      "<strong>Faites entrer la construction de la pelouse dans le planning comme un projet, pas comme une ligne d’espaces verts.</strong> Drainage, chauffage, couche de croissance et enracinement forment une séquence de deux à trois mois pilotée par un jardinier de terrain, pas une semaine de pose de rouleaux.",
      "<strong>Les matchs tests relèvent de l’homologation, pas de la communication.</strong> La commission de sécurité veut voir l’encadrement, l’entrée, la sortie et l’évacuation à des charges croissantes avant de rendre un avis favorable, et elle n’abrègera pas cette séquence pour une échéance de diffuseur.",
      "<strong>Mettez en service le poste central de sécurité, la sonorisation et la vidéoprotection avant le premier match test.</strong> Ce sont les systèmes dont l’homologation dépend réellement, et ce sont d’ordinaire les derniers mis sous tension.",
      "<strong>Gardez une ouverture à jauge réduite comme repli actif.</strong> Décider au dernier moment, c’est le chaos ; décider six mois avant, avec un critère de déclenchement défini, c’est un plan."
    ],
    faq: [
      [
        "Combien de temps faut-il pour construire un stade ?",
        "Un stade neuf de taille moyenne court typiquement sur 24 à 36 mois de chantier après autorisations, ce que montre approximativement le modèle. Les grandes enceintes à toiture complexe courent souvent plus longtemps, du fait de la séquence charpente et filet de câbles."
      ],
      [
        "Pourquoi la pelouse prend-elle autant de temps ?",
        "Parce que la surface se cultive, elle ne s’installe pas. Après le drainage, le chauffage et la couche de croissance, un gazon hybride demande plusieurs semaines d’enracinement dans des conditions de température et de lumière convenables avant de supporter les charges d’un match."
      ],
      [
        "Que se passe-t-il si le match d’ouverture est manqué ?",
        "Les clubs délocalisent généralement la rencontre ou ouvrent à jauge réduite — deux options coûteuses et très visibles. C’est pourquoi le modèle inscrit dans le programme une série progressive de matchs tests et une décision de repli sur la jauge, plutôt que de les laisser au hasard."
      ],
      [
        "Quand programmer le levage de la toiture ?",
        "Dans votre fenêtre saisonnière la plus calme, avec la grue et l’équipe spécialisée réservées bien à l’avance et une fenêtre de repli identifiée. Un levage reporté par la météo attend généralement la fenêtre suivante, pas le lendemain."
      ],
      [
        "Qu’est-ce que l’homologation et quand la demander ?",
        "C’est l’arrêté qui autorise l’accueil du public à une jauge donnée, pris après instruction du dossier et avis de la commission de sécurité et d’accessibilité, appuyé sur les visites et les matchs tests. Le dossier se dépose des mois avant l’ouverture, pas après la fin des travaux."
      ],
      [
        "Le modèle de construction de stade est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans compte ni filigrane."
      ]
    ]
  },

  'museum-exhibition-planning-timeline': {
    card: "Demandes de prêt, garantie d’État, constats d’état, convoyeurs, climatisation des salles et montage.",
    h1: "Planning de préparation d’une exposition",
    metaTitle: "Exposition — planning de préparation",
    metaDesc: "Planning gratuit d’exposition : demandes de prêt, garantie d’État, restauration, convoyeurs, stabilisation climatique des salles, montage et démontage.",
    lead: "Un <strong>planning de préparation d’exposition</strong> gratuit, organisé comme se déroulent vraiment les expositions : autour des prêts. Demandes de prêt et réponses des prêteurs, facility reports et garantie d’État, assurance et agendas des convoyeurs, restauration et constats d’état, stabilisation climatique des salles avant qu’une seule œuvre n’arrive, puis montage sous la surveillance des convoyeurs et une date de vernissage figée. À télécharger pour un comité de projet, ou à ouvrir en ligne pour poser votre propre date d’ouverture.",
    intro: "Une œuvre empruntée arrive aux conditions du prêteur, dans la caisse du prêteur, avec le convoyeur du prêteur, à une date qui arrange le prêteur. Toutes les autres dates de l’exposition en découlent : le modèle place donc les prêts et les convoyages au centre, au lieu de les traiter comme de la logistique :",
    phases: [
      [
        "Conception scientifique et programmation",
        "Propos de l’exposition, liste d’œuvres souhaitées, validation du budget, demande de garantie d’État et, pour les prêts étrangers, demande d’insaisissabilité, ainsi que le catalogue — le délai le plus long de tout le projet. <em>Jalon : date d’ouverture arrêtée.</em>"
      ],
      [
        "Prêts et conventions",
        "Demandes officielles de prêt, réponses et substitutions, facility reports, assurance et estimations de valeur, conventions de prêt signées et exigences de convoyage. <em>Jalon : liste d’œuvres figée.</em>"
      ],
      [
        "Scénographie et fabrication",
        "Scénographie et implantation en volume, graphisme et textes de médiation, conception des vitrines et des supports d’œuvres, fabrication avec essais de dégagement gazeux, conception audiovisuelle et éclairage."
      ],
      [
        "Conservation, convoyeurs et transport",
        "Constats d’état, traitements de restauration et encadrement, cahier des charges des caisses, certificats d’exportation et formalités douanières, puis l’enlèvement lui-même sous convoyage. <em>Jalon : œuvres arrivées sur site.</em>"
      ],
      [
        "Préparation des salles et montage",
        "Démontage de l’exposition précédente, remise en peinture, stabilisation climatique et relevés d’hygrométrie et de température, pose des vitrines et de l’éclairage, constats d’état à l’arrivée avec les convoyeurs, mise en place des œuvres et fermeture des vitrines."
      ],
      [
        "Vernissage, exploitation et démontage",
        "Visite de conformité, présentation à la presse, vernissage, programmation culturelle, suivi de l’exposition lumineuse et rotations, puis démontage et retour. <em>Jalon : œuvres retournées aux prêteurs.</em>"
      ]
    ],
    callout: "Les salles doivent être climatiquement stables avant que les œuvres n’y entrent, et la stabilité demande du temps. Une peinture fraîche dégaze, une vitrine neuve dégaze, et l’hygrométrie relative comme la température doivent être enregistrées au point de consigne convenu sur une période soutenue avant qu’un convoyeur n’autorise le déballage de son œuvre. Placez un jalon « relevés climatiques acceptés » devant le montage : s’il glisse, les convoyeurs sont déjà dans vos salles et la date du vernissage, elle, n’a pas bougé.",
    customize: [
      "Placer la barre de demandes de prêt au moins douze à dix-huit mois avant l’ouverture pour les grands prêteurs internationaux : certaines institutions ont des commissions qui ne siègent que quelques fois par an.",
      "Ajouter une boucle de substitution après les réponses des prêteurs. Les refus sont normaux, et le planning doit montrer le temps nécessaire pour trouver et demander une œuvre de remplacement.",
      "Allonger la barre de stabilisation climatique si vous repeignez ou installez des vitrines neuves près du montage : le dégagement gazeux est précisément la raison pour laquelle les prêteurs réclament les relevés.",
      "Ajouter une ligne par convoyeur si les œuvres arrivent sur des vols distincts : chacun demande un accompagnement, un hébergement et un créneau de constat d’état en salle.",
      "Insérer des rotations d’œuvres sensibles à la lumière dans la phase d’exploitation lorsqu’une pièce ne peut rester exposée toute la durée sous les limites d’éclairement fixées par son prêteur.",
      "Marquer comme jalons la date d’ouverture, la liste d’œuvres figée, l’arrivée des œuvres et leur retour : ce sont les quatre dates que suivent à la fois le régisseur et la direction."
    ],
    tips: [
      "<strong>Figez la liste d’œuvres, puis défendez-la.</strong> Chaque ajout tardif relance convention de prêt, assurance, caisserie, fabrication de supports et graphisme : c’est de loin la modification la plus coûteuse d’une exposition.",
      "<strong>Envoyez les facility reports tôt et sans qu’on vous les demande.</strong> Les prêteurs évaluent votre bâtiment avant d’évaluer votre projet, et un rapport périmé est une cause de retard fréquente et parfaitement évitable.",
      "<strong>Calez les convoyages sur les agendas des prêteurs, pas sur le vôtre.</strong> Un convoyeur est un agent nommément désigné de l’institution prêteuse, avec son propre calendrier ; deux prêteurs qui veulent la même semaine est une contrainte réelle et fréquente.",
      "<strong>Fabriquez les supports après le gel de la liste, pas avant.</strong> Un support d’œuvre est sur mesure, et une œuvre substituée signifie un support à refaire sans que le programme ait prévu le temps.",
      "<strong>Comptez les constats d’état comme du temps de salle, pas comme de la paperasse.</strong> Les constats à l’arrivée se font en présence du convoyeur, œuvre par œuvre, et ils occupent des journées entières de la fenêtre de montage que l’on oublie couramment de planifier.",
      "<strong>Planifiez le démontage et le retour avec le même soin que le montage.</strong> Constats au départ, remise en caisse et convoyages se répètent à l’identique, et les prêteurs vous jugent autant sur le retour que sur l’exposition."
    ],
    faq: [
      [
        "Combien de temps à l’avance faut-il préparer une exposition ?",
        "Pour une exposition fondée sur des prêts, deux à trois ans est la norme, et le modèle couvre approximativement les dix-huit derniers mois. Les demandes de prêt aux grands prêteurs internationaux doivent partir au moins douze à dix-huit mois avant l’ouverture."
      ],
      [
        "Qu’est-ce qu’un facility report ?",
        "Un document standardisé — le terme anglais reste d’usage courant dans les musées français — décrivant le contrôle climatique, la sûreté, la protection incendie et les procédures de manipulation de votre bâtiment. Les prêteurs s’en servent pour décider s’ils prêtent, il doit donc être à jour avant l’envoi des demandes."
      ],
      [
        "Pourquoi les salles doivent-elles être stabilisées avant le montage ?",
        "Parce que la peinture fraîche et les vitrines neuves dégazent, et parce que la température et l’hygrométrie doivent tenir le point de consigne assez longtemps pour être enregistrées. Les convoyeurs refusent couramment de déballer dans un environnement non prouvé."
      ],
      [
        "Que faire si un prêteur refuse ?",
        "Vous substituez, ce qui relance pour cette œuvre la chaîne convention, assurance, caisserie et fabrication de support. Intégrez une boucle de substitution au planning plutôt que de supposer que chaque demande sera acceptée."
      ],
      [
        "Quelle durée prévoir pour le montage ?",
        "Comptez plusieurs semaines entre la mise à disposition des salles et l’ouverture : vitrines et éclairage, graphisme, constats d’état à l’arrivée avec les convoyeurs, mise en place et fermeture des vitrines s’enchaînent séquentiellement et œuvre par œuvre."
      ],
      [
        "Le modèle de planning d’exposition est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans compte ni filigrane."
      ]
    ]
  },

  'iso-27001-certification-plan': {
    card: "Périmètre du SMSI, appréciation des risques, déclaration d’applicabilité, audit interne et audit en deux étapes.",
    h1: "Plan de certification ISO 27001",
    metaTitle: "ISO 27001 — plan de certification",
    metaDesc: "Plan gratuit de certification ISO 27001 : périmètre, appréciation des risques, déclaration d’applicabilité, audit interne, revue de direction, audit final.",
    lead: "Un <strong>plan de certification ISO 27001</strong> gratuit, organisé comme un organisme de certification vous évalue réellement — périmètre du SMSI, appréciation des risques et déclaration d’applicabilité, mise en œuvre des mesures de sécurité, une période de fonctionnement effectif qui produit des enregistrements, puis l’audit interne et la revue de direction qui doivent tous deux être achevés avant l’étape 2, et enfin l’audit initial en deux étapes lui-même. Si vous menez aussi un système qualité, le <a href=\"/templates/iso-9001-certification-plan.html\">plan de certification ISO 9001</a> suit la même mécanique d’audit.",
    intro: "L’audit de certification n’est pas un événement unique. C’est une revue documentaire, puis un intervalle obligatoire pendant lequel vous corrigez ce qu’elle a relevé, puis un audit complet sur preuves — et c’est cet intervalle qui interdit de comprimer un plan ISO 27001 par la fin :",
    phases: [
      [
        "Périmètre et analyse d’écart",
        "Frontières du SMSI, parties intéressées et obligations légales, analyse d’écart au regard des mesures de l’annexe A, et choix de l’organisme de certification accrédité — moment où se réservent aussi les deux dates d’audit. <em>Jalon : périmètre et écarts validés.</em>"
      ],
      [
        "Appréciation des risques et déclaration d’applicabilité",
        "Inventaire des actifs informationnels, méthode d’appréciation des risques, identification et évaluation, plan de traitement des risques, et la déclaration d’applicabilité qui consigne quelles mesures s’appliquent et pourquoi. <em>Jalon : déclaration d’applicabilité et traitement des risques approuvés.</em>"
      ],
      [
        "Mise en œuvre des mesures",
        "Corpus de politiques, contrôle d’accès et gestion des identités, maîtrise des fournisseurs et du cloud, développement sécurisé et gestion des changements, mesures physiques et liées aux personnes, procédures d’incident et de continuité. <em>Jalon : mesures mises en œuvre.</em>"
      ],
      [
        "Fonctionnement et accumulation des preuves",
        "La phase qui ne se raccourcit pas : faire tourner les mesures assez longtemps pour que revues d’habilitations, surveillance des journaux, revues fournisseurs et exercice d’incident aient réellement eu lieu et laissé des enregistrements. <em>Jalon : trois mois d’enregistrements disponibles.</em>"
      ],
      [
        "Audit interne et revue de direction",
        "Un audit interne complet du SMSI, les non-conformités qu’il soulève, les actions correctives, puis la réunion de revue de direction. Les deux sont des éléments d’entrée obligatoires et doivent être terminés avant l’étape 2. <em>Jalon : audit interne et revue de direction terminés.</em>"
      ],
      [
        "Audit étape 1 et étape 2",
        "Audit documentaire d’étape 1, ses constats, la fenêtre d’actions correctives, l’actualisation des preuves, l’audit d’étape 2, la clôture des non-conformités et la délivrance du certificat. <em>Jalon : certificat délivré.</em>"
      ]
    ],
    callout: "L’étape 1 et l’étape 2 sont séparées à dessein, et l’intervalle entre les deux n’est pas de la marge. L’étape 1 vérifie si la documentation de votre SMSI est certifiable ; elle soulève presque toujours des constats, et l’étape 2 ne passera pas tant qu’ils ne sont pas soldés. Réservez six à huit semaines entre les deux visites et planifiez-y du vrai travail. L’autre invariant, c’est le temps écoulé : à l’étape 2, l’auditeur échantillonne des enregistrements, et les enregistrements n’existent que si les mesures ont tourné. On n’instaure pas une revue d’habilitations en mars pour présenter un an de preuves en avril.",
    customize: [
      "Retenir l’organisme de certification tôt et poser d’abord la date de l’étape 2 : tout ce qui précède est un compte à rebours, pas une estimation.",
      "Conserver au moins six semaines entre l’étape 1 et l’étape 2 pour les actions correctives ; raccourcir cet intervalle est la cause la plus fréquente d’échec à l’étape 2.",
      "Développer les lignes de mise en œuvre en une ligne par thème de l’annexe A, ou par mesure, une fois la déclaration d’applicabilité approuvée.",
      "Allonger la phase de fonctionnement si votre traitement des risques repose sur des mesures à cycle trimestriel ou annuel : il vous faut au moins un cycle complet de preuves.",
      "Ajouter une ligne pour chaque exclusion de périmètre que vous devez justifier : c’est précisément ce que l’étape 1 creusera le plus.",
      "Ajouter l’audit de surveillance de la première année comme ligne datée, pour que le SMSI reste doté en moyens au-delà du certificat."
    ],
    tips: [
      "<strong>La déclaration d’applicabilité commande tout ce qui suit.</strong> Tant qu’elle n’est pas approuvée, vous ne savez pas quelles mesures vous construisez : les estimations de mise en œuvre antérieures sont des paris.",
      "<strong>Menez l’audit interne pour de vrai.</strong> Un audit interne complaisant qui ne trouve rien déplace simplement les constats vers l’étape 2, où ils coûtent la date de certification et non quinze jours.",
      "<strong>Tenez la revue de direction comme une réunion avec compte rendu.</strong> C’est une exigence explicite, aux éléments d’entrée définis, et les auditeurs lisent le compte rendu plutôt que de vous croire sur parole.",
      "<strong>Réalisez l’exercice d’incident et de continuité avant l’étape 2.</strong> C’est l’une des rares preuves que vous pouvez programmer au lieu d’attendre.",
      "<strong>Ne mélangez pas cette démarche avec SOC 2.</strong> Elles partagent des mesures mais pas leur mécanique : ISO 27001 est une certification à cycle de trois ans avec audits de surveillance, tandis que SOC 2 est un rapport d’attestation américain, délivré par un cabinet de CPA selon les Trust Services Criteria de l’AICPA — un dispositif étranger qui n’a pas d’équivalent français et se désigne par son nom d’origine."
    ],
    faq: [
      [
        "Combien de temps prend une certification ISO 27001 ?",
        "Couramment douze à dix-huit mois en partant de zéro pour une organisation sans SMSI existant. Le modèle retient environ quinze mois. Ce qui résiste à la compression, c’est la période de fonctionnement qui produit les enregistrements et l’intervalle obligatoire entre l’étape 1 et l’étape 2."
      ],
      [
        "Quelle différence entre l’étape 1 et l’étape 2 ?",
        "L’étape 1 est une revue documentaire et de maturité — périmètre, politiques, appréciation des risques, déclaration d’applicabilité, preuves d’audit interne et de revue de direction. L’étape 2 est l’audit complet du fonctionnement réel du SMSI. Les constats d’étape 1 doivent être soldés avant l’étape 2, d’où la fenêtre d’actions correctives que le modèle laisse entre les deux."
      ],
      [
        "L’audit interne et la revue de direction sont-ils obligatoires avant l’étape 2 ?",
        "Oui. Les deux relèvent d’exigences explicites de la norme et l’auditeur en demandera les preuves. Le modèle les place avant l’étape 1 pour que les actions correctives qu’ils soulèvent aient le temps d’être soldées."
      ],
      [
        "ISO 27001 et SOC 2, est-ce la même chose ?",
        "Non. ISO 27001 est une norme internationale : vous êtes certifié par un organisme accrédité, sur un cycle de trois ans avec audits de surveillance annuels. SOC 2 est une attestation américaine réalisée par un cabinet de CPA au regard des Trust Services Criteria de l’AICPA, et un rapport de Type II couvre une fenêtre d’observation définie plutôt que d’accorder un certificat. Pour cela, utilisez le <a href=\"/templates/soc2-compliance-timeline.html\">planning de conformité SOC 2</a> ; les deux plans se recoupent sur les mesures, pas sur les dates."
      ],
      [
        "En quoi cela diffère-t-il du plan ISO 9001 ?",
        "La mécanique d’audit est la même — deux étapes — mais le contenu diffère : ISO 9001 est un système de management de la qualité, celui-ci est un système de management de la sécurité de l’information bâti sur une appréciation des risques et une déclaration d’applicabilité. Voyez le <a href=\"/templates/iso-9001-certification-plan.html\">plan de certification ISO 9001</a> si vous visez les deux."
      ],
      [
        "Le modèle ISO 27001 est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans compte ni filigrane."
      ]
    ]
  },

  'crm-implementation-plan': {
    card: "Conception des processus, nettoyage et déduplication des données, paramétrage, répétitions de migration et bascule.",
    h1: "Plan de déploiement d’un CRM",
    metaTitle: "CRM — plan de déploiement",
    metaDesc: "Plan gratuit de déploiement CRM : conception des processus, nettoyage et déduplication, paramétrage, répétitions de migration, formation et bascule.",
    lead: "Un <strong>plan de déploiement de CRM</strong> gratuit, qui place l’effort là où il se trouve réellement : non pas dans le paramétrage des objets, mais dans l’audit, la déduplication et le rapprochement des données clients que vous vous apprêtez à déplacer — et dans le choix d’un moment de bascule dans le trimestre qui ne détruise pas les prévisions de vente. Il couvre la conception des processus, le nettoyage des données, le paramétrage et les interfaces, les répétitions de migration, les cohortes de formation, la bascule et le premier cycle complet de prévisions dans le nouvel outil.",
    intro: "Tout le monde budgète le paramétrage et personne ne budgète les données. Or un commercial qui ouvre le nouveau CRM et découvre trois exemplaires de son plus gros compte cesse de s’en servir le matin même, et aucune formation ne rattrape cela :",
    phases: [
      [
        "Cadrage et conception des processus",
        "Processus de vente et définition des étapes, définitions du pipeline et de la prévision, conception des champs et des objets, et les besoins de reporting sur lesquels tout le paramétrage se dimensionne. <em>Jalon : conception validée.</em>"
      ],
      [
        "Audit, nettoyage et déduplication des données",
        "Extractions sources, profilage de qualité, clés de rapprochement et règles de déduplication, passe automatisée, enregistrements que seuls les commerciaux peuvent corriger, remise à plat des hiérarchies de comptes, purge des contacts dont la durée de conservation est dépassée et mise à jour du registre des traitements. Cette phase court sur plusieurs mois en parallèle. <em>Jalon : données prêtes pour la répétition de migration.</em>"
      ],
      [
        "Paramétrage et interfaces",
        "Objets, automatisations et règles de validation, habilitations et modèle de secteurs, messagerie, agenda et téléphonie, synchronisation avec l’outil de marketing automation, devis et interface avec l’ERP, tableaux de bord de prévision. <em>Jalon : paramétrage terminé.</em>"
      ],
      [
        "Répétitions de migration",
        "Deux répétitions complètes, avec rapprochement et validation par les commerciaux entre les deux, puis un essai chronométré au volume réel qui prouve que le chargement tient dans la fenêtre de bascule. <em>Jalon : répétition de migration validée.</em>"
      ],
      [
        "Formation et appropriation",
        "Contenus par rôle, ateliers de prévision pour les managers d’abord, puis cohortes de commerciaux calées au plus près de la mise en service, réseau de référents et dispositif d’assistance de proximité. <em>Jalon : formation terminée.</em>"
      ],
      [
        "Bascule et premier cycle de prévision",
        "La fenêtre de changement de trimestre, gel de l’ancien système, chargement en production, rapprochement du pipeline avec l’ancien outil, mise en service, période de vigilance renforcée et premier cycle complet de prévision mené dans le nouveau CRM. <em>Jalon : mise en service.</em>"
      ]
    ],
    callout: "Choisissez la date de bascule sur le calendrier commercial, pas sur le plan projet. Migrer en milieu de trimestre revient à demander à un commercial de ressaisir des affaires en cours au milieu de sa course à l’objectif, et une prévision qui existe à moitié dans chaque système est une prévision que personne ne peut défendre devant un comité. Basculez dans la première quinzaine d’un nouveau trimestre, quand le pipeline vient d’être remis à zéro et rapproché : le premier cycle de prévision dans le nouveau CRM part alors d’un chiffre sur lequel les deux systèmes étaient d’accord.",
    customize: [
      "Placer la bascule dans les deux premières semaines d’un trimestre, puis remonter le temps : la dernière répétition doit se terminer au moins trois semaines avant.",
      "Éclater les lignes de déduplication par objet — comptes, contacts, prospects, opportunités — parce que les clés de rapprochement et les responsables diffèrent pour chacun.",
      "Repousser la formation des commerciaux aussi tard que possible sans percuter la bascule : former six semaines à l’avance revient à former deux fois.",
      "Ajouter une ligne par interface si le devis, l’ERP ou le marketing automation ont leurs propres dépendances éditeur.",
      "Garder la reprise des enregistrements confiée aux commerciaux comme ligne nommée avec un responsable nommé : c’est du travail métier, pas une tâche de l’équipe données.",
      "Ajouter une ligne pour la décision sur l’historique d’activité, et une autre pour la conformité RGPD de la reprise : périmètre migré, base légale, durées de conservation et information des personnes. Reprendre cinq ans de courriels et d’appels est en général le choix le plus coûteux du plan, et le plus difficile à justifier."
    ],
    tips: [
      "<strong>Dédupliquez avant de paramétrer, pas après.</strong> Les comptes en double cassent d’un coup l’affectation des secteurs, la consolidation des prévisions et le reporting, et chacun de ces éléments est à refaire si les données changent en dessous.",
      "<strong>Rapprochez la valeur du pipeline avec l’ancien système le jour de la bascule.</strong> Si les deux chiffres ne concordent pas avant que quiconque se connecte, vous passerez le trimestre à débattre de celui qui est vrai.",
      "<strong>Formez les managers avant les commerciaux.</strong> L’appropriation se joue en entretien individuel ; un manager incapable de mener sa revue de pipeline dans le nouvel outil laissera discrètement son équipe revenir au tableur.",
      "<strong>Migrez moins d’historique.</strong> Les opportunités ouvertes et deux ans d’activité couvrent presque tous les usages réels ; le reste relève de l’archivage, pas de la migration — et la minimisation des données n’est pas seulement une bonne pratique projet, c’est un principe du RGPD.",
      "<strong>Mesurez l’appropriation, pas la mise en service.</strong> Les connexions ne prouvent rien. Suivez si les affaires ont une prochaine étape, une date de signature et un mouvement d’étape : c’est ce qui rend le pipeline crédible."
    ],
    faq: [
      [
        "Combien de temps prend un déploiement de CRM ?",
        "Couramment quatre à neuf mois pour une organisation commerciale de taille moyenne, la durée dépendant presque entièrement de la qualité des données et du nombre d’interfaces. Le modèle court sur environ onze mois de bout en bout, parce qu’il intègre le nettoyage des données dès le départ et un cycle complet de prévision après la mise en service."
      ],
      [
        "Pourquoi la migration des données est-elle sur le chemin critique plutôt que le paramétrage ?",
        "Parce que le paramétrage est un travail borné que vous maîtrisez, et les données non. Le profilage révèle des problèmes, la déduplication exige des arbitrages métier, et la reprise confiée aux commerciaux avance au rythme de gens qui ont un objectif à tenir. C’est pour cela que le modèle démarre le chantier données dès le premier mois."
      ],
      [
        "Quand faut-il basculer ?",
        "À une frontière de trimestre, dans les deux premières semaines du nouveau. Une bascule en milieu de trimestre coupe la prévision entre deux systèmes, et une prévision à laquelle personne ne croit est le moyen le plus rapide de perdre définitivement l’adhésion des commerciaux."
      ],
      [
        "Combien de répétitions de migration faut-il ?",
        "Au moins deux, plus un essai chronométré. La première teste le mapping, la seconde teste les données dédupliquées avec une vraie validation commerciale, et l’essai chronométré au volume réel prouve que le chargement tient dans la fenêtre de bascule que vous avez réservée."
      ],
      [
        "Quel rapport avec le plan de conduite du changement ?",
        "Ce plan couvre le système. Le <a href=\"/templates/change-management-plan.html\">plan de conduite du changement</a> couvre le volet humain qui court à côté : analyse d’impact, tournée des sponsors, cohortes de formation et ancrage après le lancement. Les grands programmes CRM ont besoin des deux."
      ],
      [
        "Le modèle de déploiement CRM est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans compte ni filigrane."
      ]
    ]
  },

  'disaster-recovery-plan': {
    card: "Bilan d’impact sur l’activité, objectifs DMIA et PDMA, réplication, procédures et exercices de bascule.",
    h1: "Plan de reprise d’activité (PRA)",
    metaTitle: "PRA — plan de reprise d’activité",
    metaDesc: "Planning gratuit de PRA : bilan d’impact, objectifs DMIA et PDMA, réplication, procédures de bascule, exercice sur table et bascules partielle et complète.",
    lead: "Un <strong>plan de reprise d’activité</strong> gratuit, qui traite le livrable comme un plan <em>éprouvé</em> et non comme un document. Le bilan d’impact sur l’activité et les objectifs de DMIA et de PDMA — durée maximale d’interruption admissible et perte de données maximale admissible, le RTO et le RPO du vocabulaire anglo-saxon — fixent l’architecture, l’architecture fixe la construction, et toute la seconde moitié du planning est la séquence d’exercices : exercice sur table, puis bascule partielle, puis bascule complète avec validation métier, chacun réclamant sa propre fenêtre de changement et son propre chemin de retour arrière.",
    intro: "Un PRA non testé est une hypothèse. Le planning ci-dessous est façonné par la montée en charge des exercices, parce que chacun coûte une fenêtre de changement et que chacun révèle ce que le précédent ne pouvait pas voir :",
    phases: [
      [
        "Bilan d’impact sur l’activité",
        "Inventaire des applications et des services, cartographie des dépendances, ateliers d’impact, et les objectifs de DMIA et de PDMA opposables à chaque service. Tout l’aval se chiffre à partir de ces nombres. <em>Jalon : objectifs DMIA/PDMA approuvés.</em>"
      ],
      [
        "Stratégie et architecture de reprise",
        "Affectation des paliers de reprise, choix du site ou de la région de repli, architecture de réplication et de sauvegarde, conception du basculement réseau et DNS, et revue de coût au regard des objectifs. <em>Jalon : architecture approuvée.</em>"
      ],
      [
        "Construction et réplication",
        "Infrastructure de repli, réplication du stockage et des bases de données, évolution de la politique de sauvegarde, gestion des identités et mesures de sécurité sur le site de repli, supervision du retard de réplication. <em>Jalon : réplication vérifiée en régime établi.</em>"
      ],
      [
        "Procédures et documentation",
        "Une procédure de bascule par palier de reprise, procédures de retour arrière et de retour à la normale, chaîne d’alerte et de communication de crise, et les critères de déclenchement qui désignent qui a le droit de déclarer le sinistre. <em>Jalon : procédures publiées.</em>"
      ],
      [
        "Séquence d’exercices",
        "Exercice sur table d’abord, puis bascule partielle des applications de palier 1 avec retour arrière, puis bascule complète avec validation métier et retour à la normale — avec du temps de correction budgété après chacun. <em>Jalon : exercice de bascule complète réussi.</em>"
      ],
      [
        "Approbation et maintien en condition",
        "Rapport d’exercice et risque résiduel, approbation de la direction, formation des intervenants, calendrier annuel d’exercices, et le point d’accroche dans la gestion des changements qui empêche les nouvelles applications d’atterrir silencieusement hors du plan. <em>Jalon : plan approuvé.</em>"
      ]
    ],
    callout: "La DMIA et la PDMA ne sont pas des souhaits, ce sont une facture. Une PDMA de quinze minutes impose une réplication synchrone ou quasi synchrone, avec le coût de stockage qui va avec ; une DMIA de quatre heures impose une infrastructure tiède qui attend sans rien produire. Faites valider les nombres par le métier avant de concevoir quoi que ce soit, puis montrez-lui ce que chaque palier coûte et laissez-le réviser. Les équipes qui fixent les objectifs après l’architecture aboutissent à un plan qui redémarre plus lentement que ce qui a été promis au métier, et personne ne le découvre avant l’exercice de bascule.",
    customize: [
      "Fixer la DMIA et la PDMA par service, pas par organisation : un service de paiement et un wiki interne n’ont rien à faire dans le même palier.",
      "Réserver les deux fenêtres de changement tôt : celle de la bascule complète demande en général un arbitrage de la direction et une période d’activité creuse, ce qui relève du calendrier et non de la technique.",
      "Garder la ligne de retour arrière collée à chaque exercice : un exercice sans chemin de retour répété est une panne qui attend son mauvais jour.",
      "Ajouter des lignes par palier applicatif si vous basculez par groupes plutôt que d’un bloc.",
      "Allonger la fenêtre de correction après l’exercice partiel : c’est là qu’apparaît l’essentiel des vraies découvertes.",
      "Ajouter le réexercice annuel sous forme de lignes datées, pour que le plan ne se périme pas discrètement douze mois après son approbation — et, si vous relevez d’un régime sectoriel qui impose une fréquence de test, alignez ce calendrier sur elle."
    ],
    tips: [
      "<strong>Testez le retour à la normale, pas seulement la bascule.</strong> Tourner sur le site de repli n’est que la moitié de l’exercice ; la plupart des organisations découvrent les problèmes coûteux sur le chemin du retour.",
      "<strong>Faites l’exercice sur table avant toute technique.</strong> Il ne coûte rien, ne demande aucune fenêtre de changement, et révèle immanquablement des coordonnées manquantes, une autorité de déclenchement floue et des étapes de procédure qui supposent un savoir que personne n’a écrit.",
      "<strong>Validez avec le métier, pas avec un ping.</strong> Un service qui répond n’est pas un service qui fonctionne : faites réaliser de vraies transactions par de vrais utilisateurs pendant la bascule complète.",
      "<strong>Surveillez le retard de réplication comme une métrique vivante.</strong> Une PDMA que vous ne mesurez pas en continu est une PDMA que vous ne vérifierez qu’en pleine crise.",
      "<strong>Raccrochez le PRA à la gestion des changements.</strong> Chaque nouvelle application ajoutée sans palier de reprise creuse l’écart entre le plan et la réalité, et cet écart n’est visible qu’au moment de l’exercice."
    ],
    faq: [
      [
        "Combien de temps faut-il pour construire et éprouver un PRA ?",
        "Couramment neuf à quinze mois entre le bilan d’impact et un plan approuvé et testé. Le modèle retient environ quinze mois. La construction est prévisible ; c’est la séquence d’exercices finale qui s’étire, parce que chaque exercice demande une fenêtre de changement et un cycle de correction derrière lui."
      ],
      [
        "Quelle différence entre DMIA et PDMA ?",
        "La DMIA est la durée d’indisponibilité tolérable — le temps de rétablissement du service. La PDMA est le volume de données que vous pouvez vous permettre de perdre — l’ancienneté de la dernière copie exploitable. Elles correspondent au RTO et au RPO anglo-saxons. La première commande l’infrastructure en attente, la seconde la fréquence de réplication, et ensemble elles déterminent l’essentiel du coût du plan."
      ],
      [
        "Pourquoi trois exercices plutôt qu’un ?",
        "Parce qu’ils révèlent des choses différentes. L’exercice sur table révèle les trous de la procédure et de la chaîne de décision pour le prix d’une salle de réunion. La bascule partielle révèle les défauts techniques sur un périmètre limité. Seule la bascule complète avec validation métier prouve la DMIA. Et chacun suppose que le précédent a été corrigé."
      ],
      [
        "Faut-il une fenêtre de changement pour les exercices ?",
        "Pour la bascule partielle et la bascule complète, oui : elles déplacent du trafic de production et portent un risque réel. Réservez-les avec un retour arrière répété et un critère d’abandon défini. L’exercice sur table n’en demande aucune, ce qui est précisément pourquoi il doit être épuisé en premier."
      ],
      [
        "Quel rapport avec le plan de continuité d’activité ?",
        "Le PRA est le sous-ensemble technique : rétablir les systèmes et les données. Le PCA est plus large et couvre les personnes, les locaux et les processus. Ce modèle traite le volet PRA, même si les lignes de communication de crise et de critères de déclenchement sont partagées avec tout PCA que vous menez."
      ],
      [
        "Le modèle de PRA est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans compte."
      ]
    ]
  },

  'rfp-procurement-timeline': {
    card: "Besoin, dossier de consultation, questions, remise des offres, analyse, délai de suspension et notification.",
    h1: "Planning de consultation d’un marché public",
    metaTitle: "Marché public — planning de consultation",
    metaDesc: "Planning gratuit de consultation : besoin, dossier de consultation, questions, remise des offres, analyse, attribution, délai de suspension et démarrage.",
    lead: "Un <strong>planning de consultation</strong> gratuit pour mener une mise en concurrence, de la définition du besoin au démarrage effectif de la prestation — dossier de justification et critères de jugement, dossier de consultation des entreprises, période de publicité avec sa date limite de questions et sa date limite de remise des offres, analyse des offres et rapport de présentation, attribution et délai de suspension, puis notification et démarrage. La plupart de ces dates appartiennent à d’autres que vous : c’est précisément pour cela qu’elles doivent figurer sur un planning.",
    intro: "Une consultation est un planning fait surtout du temps des autres : des candidats qui rédigent, des membres de commission qui trouvent une semaine libre, des juristes qui mettent au point et un titulaire sortant qui doit passer la main. Vous maîtrisez la date de lancement, et à peu près rien d’autre :",
    phases: [
      [
        "Définition du besoin et opportunité",
        "Recueil du besoin auprès des services, note d’opportunité et validation budgétaire, choix de la procédure et vérification des seuils, allotissement, et les critères de jugement et leur pondération — qui doivent être figés avant toute publication. <em>Jalon : autorisation de lancer la consultation.</em>"
      ],
      [
        "Sourcing et dossier de consultation",
        "Sourcing et étude du marché fournisseurs, éventuel avis de préinformation, rédaction du règlement de la consultation, du CCAP et du CCTP, bordereau de prix, grille de notation, et confirmation des membres de la commission avec blocage de leurs agendas. <em>Jalon : dossier de consultation validé.</em>"
      ],
      [
        "Période de publicité et de remise des offres",
        "Publication de l’avis d’appel public à la concurrence au BOAMP et, au-delà des seuils européens, au JOUE, mise en ligne du dossier sur le profil d’acheteur, fenêtre de questions, éventuelle visite ou réunion d’information, date limite des questions, réponses adressées à tous les candidats, puis le temps de rédaction des offres qui suit. <em>Jalon : date limite de remise des offres.</em>"
      ],
      [
        "Analyse des offres",
        "Vérification de la recevabilité des candidatures, analyse technique et financière menées en parallèle, demandes de précisions, harmonisation des notes, auditions ou soutenances, vérification des attestations du candidat pressenti et rapport d’analyse. <em>Jalon : proposition d’attribution validée.</em>"
      ],
      [
        "Attribution, délai de suspension et notification",
        "Décision d’attribution, lettres de rejet motivées indiquant les voies de recours, délai de suspension avant signature, réponses aux demandes de précisions des candidats évincés, mise au point et notification. <em>Jalon : marché notifié.</em>"
      ],
      [
        "Démarrage et transition",
        "Réunion de lancement, transition depuis le titulaire sortant, ouverture des accès et intégration des équipes, mise en place de la gouvernance et des indicateurs, et la date à laquelle la prestation démarre réellement. <em>Jalon : début d’exécution.</em>"
      ]
    ],
    callout: "Le temps des candidats ne vous appartient pas. Si vous raccourcissez la fenêtre entre la publication des réponses aux questions et la date limite de remise, vous n’obtenez pas une consultation plus rapide : vous obtenez moins d’offres, des offres plus faibles, et un très bon prestataire qui renonce faute d’avoir pu mobiliser une équipe à temps. Le même principe vaut à l’autre bout : le délai de suspension entre l’envoi des lettres de rejet et la signature existe pour permettre un recours, il court sur le calendrier quelle que soit l’urgence du service demandeur, et le compresser expose la procédure à un référé précontractuel.",
    customize: [
      "Figer d’abord la date limite de remise des offres et la date de début d’exécution : les deux sont généralement imposées de l’extérieur, et tout le reste s’insère entre elles.",
      "Vérifier les délais minimaux de réception des offres et la durée du délai de suspension applicables à votre procédure avant de reprendre les durées affichées : ils dépendent de la procédure et des seuils, pas de vos préférences.",
      "Bloquer les agendas de la commission au moment même où vous publiez : c’est la disponibilité des membres, et non la charge d’analyse, qui fait déraper cette phase.",
      "Ajouter des lignes pour les visites de site ou les soutenances si votre jugement en comporte : elles dépendent de la disponibilité des candidats et se planifient comme du travail.",
      "Allonger nettement la phase de transition si un titulaire sortant doit transmettre des données, des personnels ou des matériels.",
      "Ajouter une ligne par lot en cas d’allotissement, puisque l’analyse et l’attribution peuvent s’achever à des dates différentes selon les lots."
    ],
    tips: [
      "<strong>Figez les critères de jugement avant publication.</strong> Une pondération modifiée après réception des offres est le motif d’annulation le plus fréquent, et elle ne se corrige pas discrètement.",
      "<strong>Adressez chaque réponse à tous les candidats.</strong> Une réponse donnée à un seul crée une rupture d’égalité de traitement, et une procédure inégalitaire s’annule.",
      "<strong>Ne placez pas la date limite de remise à côté d’une période de congés.</strong> Vous récolterez des offres minces de la part exactement des prestataires que vous vouliez entendre.",
      "<strong>Harmonisez les notes et écrivez pourquoi.</strong> Le rapport d’analyse est le document sur lequel vous vous appuierez en réponse aux candidats évincés et devant le juge ; des notes sans motivation sont indéfendables.",
      "<strong>Prévoyez du vrai temps entre l’attribution et le début d’exécution.</strong> Le démarrage suppose un marché notifié, des accès ouverts et des personnes recrutées : une date d’attribution n’est pas une date de démarrage."
    ],
    faq: [
      [
        "Combien de temps dure une procédure de consultation ?",
        "Couramment six à douze mois entre l’expression du besoin et le début d’exécution pour un marché significatif. Le modèle retient environ douze mois. La période de remise des offres et la phase d’analyse sont les deux blocs que l’on sous-estime, parce que les deux dépendent de personnes extérieures à l’équipe projet."
      ],
      [
        "Combien de temps laisser aux candidats pour répondre ?",
        "Assez pour rédiger une offre sérieuse après la publication des réponses aux questions — couramment quatre à six semaines pour une consultation substantielle, davantage si le besoin est complexe ou si le candidat doit chiffrer une reprise. Les procédures formalisées imposent en outre un délai minimal réglementaire : vérifiez celui qui s’applique avant de raccourcir."
      ],
      [
        "À quoi sert le délai de suspension ?",
        "C’est l’intervalle entre la notification du rejet aux candidats non retenus et la signature du marché, pendant lequel un candidat évincé peut demander des précisions ou saisir le juge du référé précontractuel. Dans la commande publique, c’est un délai calendaire fixe, qui ne se comprime pas pour tenir une date de démarrage."
      ],
      [
        "Pourquoi faire figurer la date limite des questions ?",
        "Parce qu’elle commande deux choses : la date à laquelle votre équipe doit avoir rédigé et publié toutes les réponses, et le moment à partir duquel les candidats rédigent au lieu de demander. La reculer, c’est raccourcir silencieusement le temps de rédaction des offres."
      ],
      [
        "Peut-on l’utiliser pour une consultation privée ?",
        "Oui. Supprimez les lignes de publicité réglementaire et de délai de suspension et conservez la séquence : fenêtre de questions, date de remise ferme, analyse harmonisée, mise au point et démarrage se comportent de la même façon. La discipline consistant à publier les réponses à tous les candidats mérite d’être gardée dans tous les cas."
      ],
      [
        "Le modèle de planning de consultation est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans inscription ni filigrane."
      ]
    ]
  },

  'change-management-plan': {
    card: "Analyse d’impact, consultation du CSE, sponsors, communication, formation calée sur la bascule et ancrage.",
    h1: "Plan de conduite du changement",
    metaTitle: "Plan de conduite du changement",
    metaDesc: "Plan gratuit de conduite du changement : analyse d’impact, consultation du CSE, sponsors, communication, formation, accompagnement et ancrage.",
    lead: "Un <strong>plan de conduite du changement</strong> gratuit pour le volet humain qui court à côté d’un projet technique — cartographie des parties prenantes et analyse d’impact, information-consultation des représentants du personnel, coalition de sponsors et réseau de référents, communication par public, cohortes de formation calées sur la mise en service et non sur les disponibilités du formateur, évaluation de la préparation et accompagnement de proximité, puis l’ancrage après le lancement qui décide si tout cela tient. À associer au plan système, qu’il s’agisse d’un <a href=\"/templates/erp-implementation-schedule.html\">déploiement d’ERP</a> ou d’un <a href=\"/templates/crm-implementation-plan.html\">déploiement de CRM</a>.",
    intro: "La conduite du changement se dessine d’ordinaire comme une case « formation » posée à côté de la mise en service. Ce n’est pas une case. C’est un chantier avec ses propres dépendances — dont une qui n’est pas négociable en France, l’information-consultation du CSE — et la moitié qui compte le plus commence la semaine suivant le lancement :",
    phases: [
      [
        "Stratégie de changement et analyse d’impact",
        "Cartographie des parties prenantes, analyse d’impact par population concernée, mesure initiale du niveau de préparation, et la stratégie qui fixe le niveau d’accompagnement nécessaire à chaque groupe. <em>Jalon : stratégie de changement validée.</em>"
      ],
      [
        "Dialogue social et gouvernance",
        "Information-consultation du comité social et économique lorsque le projet modifie l’organisation du travail, avis rendu, coalition de sponsors, séances d’engagement, recrutement et intégration des référents, première tournée du sponsor, et un registre des résistances réellement traité plutôt que classé. <em>Jalon : avis du CSE rendu et réseau de changement actif.</em>"
      ],
      [
        "Communication",
        "Plan de communication par public, argumentaire du changement et foire aux questions, campagne de sensibilisation, kits de briefing pour les managers, fiches « ce qui change pour moi » par métier, et la séquence de communication de mise en service."
      ],
      [
        "Formation",
        "Analyse des besoins par rôle, construction des parcours et inscription au plan de développement des compétences, formation de formateurs, puis des cohortes menées par vagues, la dernière atterrissant au plus près de la mise en service pour que les gens se servent de ce qu’on leur a appris. <em>Jalon : formation terminée.</em>"
      ],
      [
        "Préparation à la mise en service et accompagnement",
        "Évaluation de la préparation par direction ou site, deuxième tournée du sponsor, planning des accompagnateurs de proximité et des utilisateurs référents, validation de la préparation et vigilance renforcée. <em>Jalon : mise en service.</em>"
      ],
      [
        "Ancrage et pérennisation",
        "Indicateurs d’appropriation, enquêtes flash à deux semaines et à trois mois, sessions de rappel ciblées, accompagnement des managers, reconnaissance des équipes, et revue des bénéfices attendus. <em>Jalon : passage en régime courant.</em>"
      ]
    ],
    callout: "Calez la formation sur la mise en service, pas sur l’agenda du formateur. Les acquis se dégradent vite : une cohorte formée six semaines à l’avance en aura oublié l’essentiel et ira discrètement demander à un collègue. Menez les cohortes par vagues pour que la dernière s’achève quelques jours avant le lancement, et laissez au groupe pilote assez d’avance pour que ses retours améliorent encore les supports. Protégez ensuite la phase d’ancrage : c’est toujours la première coupée, et c’est la seule qui change durablement les comportements — une session de rappel après la première enquête flash vaut mieux qu’un courriel de plus avant le lancement. Attention enfin au séquencement du dialogue social : engager la formation avant que le CSE ait rendu son avis fait courir un risque juridique au projet entier, et cette dépendance doit être visible sur le planning.",
    customize: [
      "Poser d’abord la mise en service, placer la dernière cohorte de formation quelques jours avant, puis remonter toutes les autres à partir de là.",
      "Ajouter une ligne d’analyse d’impact par population concernée : une équipe de services partagés et un technicien itinérant ne vivent pas le même changement.",
      "Placer l’information-consultation du CSE tôt et comme une dépendance dure, avec le délai de consultation applicable : c’est un préalable, pas une formalité de fin de projet.",
      "Dimensionner le réseau de référents à environ un référent par équipe, et faire de leur temps une allocation validée plutôt qu’un service rendu.",
      "Ajouter des lignes de tournée du sponsor par région ou par direction si le sponsor ne peut couvrir tout le monde en une seule fois.",
      "Allonger la vigilance renforcée pour les activités postées ou saisonnières, afin que chaque régime horaire bénéficie d’un accompagnement pendant sa première semaine en réel.",
      "Conserver les enquêtes flash et les sessions de rappel comme lignes datées après la mise en service : ce sont les lignes que l’on supprime le plus souvent et celles qui déterminent l’appropriation."
    ],
    tips: [
      "<strong>L’analyse d’impact avant la communication.</strong> On ne peut pas dire à quelqu’un ce qui change pour lui avant d’avoir établi ce qui change pour lui, et c’est le message générique qui fait conclure aux gens que le changement ne les concerne pas.",
      "<strong>Les sponsors doivent être visibles, et à plusieurs reprises.</strong> Un courriel de lancement est une note de service. Une tournée avant et après la mise en service est un signal que le changement n’est pas facultatif.",
      "<strong>Briefez les managers séparément et plus tôt.</strong> Leur équipe se tournera d’abord vers eux, et un manager qui n’a pas la réponse devient une source de résistance involontaire.",
      "<strong>Faites vivre le registre des résistances.</strong> Une résistance est bien plus souvent l’information d’un vrai problème qu’une obstruction, et le registre est l’endroit où l’on remarque la même objection dans cinq équipes.",
      "<strong>Traitez le dialogue social comme une contribution, pas comme une case à cocher.</strong> Les questions posées en séance de consultation révèlent souvent des impacts opérationnels que l’analyse d’impact avait manqués, et il est bien moins coûteux de les corriger avant la formation.",
      "<strong>Mesurez l’appropriation, pas la présence.</strong> Un taux d’achèvement de formation ne dit rien. Les enquêtes flash et les usages observés vous disent où envoyer les sessions de rappel."
    ],
    faq: [
      [
        "Quand faut-il démarrer la conduite du changement ?",
        "En même temps que le projet technique, et non à l’approche de la mise en service. L’analyse d’impact suppose que la conception soit comprise, mais doit s’achever assez tôt pour nourrir la communication et la formation. Le modèle démarre au premier jour et court environ cinq mois après le lancement."
      ],
      [
        "En quoi est-ce différent d’un plan projet ?",
        "Un plan projet livre le système. Celui-ci livre la capacité et la volonté des personnes à s’en servir. Les deux partagent une date de mise en service et à peu près rien d’autre, ce qui explique que la conduite du changement fonctionne mieux comme planning distinct, avec son propre responsable, posé à côté du planning de réalisation."
      ],
      [
        "Faut-il consulter le CSE ?",
        "Dès lors que le projet modifie l’organisation du travail, les conditions d’emploi ou introduit une technologie nouvelle susceptible d’affecter les postes, oui : l’information-consultation est une obligation, avec un délai pour rendre l’avis. Placez-la tôt sur le planning et faites-en une dépendance des phases de formation et de déploiement, plutôt que de la découvrir à six semaines de la bascule."
      ],
      [
        "Quand faut-il former ?",
        "Aussi tard que possible sans percuter la bascule. Les acquis se dégradent : une cohorte formée six semaines à l’avance est reformée informellement le jour de la mise en service. Menez des vagues, placez une cohorte pilote assez tôt pour que ses retours améliorent les supports, et faites atterrir la dernière quelques jours avant le lancement."
      ],
      [
        "Que se passe-t-il après la mise en service ?",
        "La partie que la plupart des plans coupent : vigilance renforcée, enquête flash vers la deuxième semaine, sessions de rappel ciblées sur ce que l’enquête a révélé, accompagnement des managers et revue des bénéfices. Le changement de comportement se joue dans les semaines qui suivent le lancement, pas avant."
      ],
      [
        "Faut-il un plan de changement distinct pour un petit projet ?",
        "Pas toujours, mais la séquence reste nécessaire. Pour un changement plus modeste, conservez l’analyse d’impact, l’information des instances lorsqu’elle est due, les briefings managers, une vague de formation et une enquête flash après lancement, et supprimez les lignes de réseau de référents et de tournée du sponsor."
      ],
      [
        "Le modèle de conduite du changement est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans compte ni filigrane."
      ]
    ]
  },
  'tunnel-construction-schedule': {
    card: "Tunnelier commandé très en amont, puits d’attaque, vitesse d’avancement selon le terrain, percement, rameaux et second œuvre.",
    h1: "Planning de construction de tunnel",
    metaTitle: "Planning de construction de tunnel",
    metaDesc: "Planning gratuit de construction de tunnel : autorisations, tunnelier, puits d’attaque, avancement, percement, rameaux, ventilation et sécurité incendie.",
    lead: "Un <strong>planning de construction de tunnel</strong> gratuit, construit autour de la machine plutôt qu’autour des phases — spécification, fabrication, essais en usine et transport du tunnelier comme approvisionnement long qui démarre avant le premier coup de pioche ; un puits d’attaque qui doit être terminé, et non presque terminé, pour recevoir la machine ; une vitesse d’avancement qui change avec le terrain ; l’approvisionnement en voussoirs et l’évacuation des déblais comme services continus qui conditionnent le creusement ; puis le percement, le revêtement définitif et les systèmes de ventilation et de sécurité incendie qui suivent. À télécharger pour un comité de pilotage, ou à ouvrir en ligne pour y poser vos propres mètres par semaine.",
    intro: "Un chantier de tunnel n’est pas une succession de corps d’état. C’est une machine qui avance à la vitesse que le terrain autorise, et tout le reste est organisé pour qu’elle continue d’avancer. Le modèle suit cette logique :",
    phases: [
      [
        "Autorisations, reconnaissance géotechnique et achat du tunnelier",
        "Sondages et rapport géotechnique de référence, tracé et dimensionnement du revêtement, autorisation environnementale et enquête publique, autorisation au titre de la loi sur l’eau pour les franchissements de cours d’eau, DT et DICT auprès des exploitants de réseaux, puis l’appel d’offres tunnelier qui fige toutes les dates en aval. <em>Jalons : autorisations obtenues, marché tunnelier attribué.</em>"
      ],
      [
        "Puits d’attaque et installation de chantier",
        "Installations de chantier, désignation du coordonnateur SPS et rédaction du plan général de coordination, parois moulées, terrassement du puits, radier, mur de réaction et chambre de lancement — ainsi que la production des premiers anneaux de voussoirs, qui doit avoir de l’avance sur la machine dès le premier jour. <em>Jalon : puits d’attaque prêt à recevoir le tunnelier.</em>"
      ],
      [
        "Fabrication, livraison et montage du tunnelier",
        "Conception de la roue de coupe pour le terrain attendu, fabrication, essais de réception en usine, transport exceptionnel par tronçons, descente dans le puits et montage en souterrain. <em>Jalon : tunnelier prêt au lancement.</em>"
      ],
      [
        "Creusement",
        "Lancement à travers l’œil de sortie, les premières centaines de mètres en montée en cadence, le creusement en régime établi dans des terrains hétérogènes, une intervention hyperbare pour le changement d’outils, le passage sous la rivière, et le bruit de fond permanent que sont l’auscultation des tassements, l’approvisionnement en voussoirs et l’évacuation des déblais. <em>Jalon : percement.</em>"
      ],
      [
        "Rameaux de communication et travaux secondaires",
        "Traitement de terrain et creusement des rameaux pendant que la machine est encore devant vous, démontage et remontée du tunnelier, injection de bourrage de l’espace annulaire, relevé des anneaux et revêtement définitif. <em>Jalon : gros œuvre du tunnel achevé.</em>"
      ],
      [
        "Second œuvre, systèmes et mise en service",
        "Cheminement et drainage, chemins de câbles, ventilateurs et gaines, colonne sèche et moyens d’extinction, distribution électrique et éclairage, télécommunications et supervision, puis un essai de fumées chaudes avec le SDIS et le dossier de sécurité soumis à l’autorité compétente. <em>Jalon : remise à l’exploitant.</em>"
      ]
    ],
    callout: "Le tunnelier, c’est le planning. Commandez-le tard et rien de ce que vous ferez ensuite ne rattrapera le temps perdu : conception, fabrication, réception en usine et transport représentent couramment douze à dix-huit mois pour une machine sur mesure, et elle ne se descend pas dans un puits inachevé. Les deux barres qui ruinent les chantiers de tunnel sont celle de la fabrication qui démarre trop tard et celle du puits qui se termine après l’arrivée de la machine — un tunnelier en pièces détachées en surface coûte de l’argent chaque jour et n’achète rien. Posez-les toutes les deux dès le premier jour et ne les laissez jamais dériver.",
    customize: [
      "Tirez votre vitesse d’avancement du rapport géotechnique de référence, et non de la meilleure semaine du chantier précédent — puis découpez le creusement en barres distinctes par unité géologique, pour qu’un passage difficile soit visible au lieu d’être noyé dans une moyenne.",
      "Donnez aux premières centaines de mètres leur propre barre, courte et lente. Tout tunnelier connaît une montée en cadence pendant que l’équipe, l’injection et le marinage se calent, et les planifier au régime nominal garantit un retard précoce.",
      "Ajoutez une barre d’intervention hyperbare partout où le rapport prévoit un terrain abrasif. Le changement d’outils de coupe est un événement planifiable de durée connue ; le découvrir en cours de creusement le transforme en un mois.",
      "Représentez l’approvisionnement en voussoirs par une barre continue sur toute la durée du creusement, et confrontez la production de l’usine de préfabrication à votre pic hebdomadaire d’anneaux, pas à la moyenne.",
      "Faites apparaître explicitement l’évacuation des déblais et la filière de valorisation ou de stockage. Une aire saturée ou une filière perdue arrête la machine aussi sûrement qu’une avarie mécanique.",
      "Placez les DT-DICT avant tout terrassement et non dans une phase administrative de début de projet : les récépissés conditionnent l’ouverture du chantier, et leur oubli est un arrêt de travaux immédiat.",
      "Posez comme jalons les autorisations obtenues, l’attribution du marché tunnelier, la disponibilité du puits, la mise en service de la machine et le percement — ces cinq dates résument tout le programme."
    ],
    tips: [
      "<strong>Achetez la machine avant d’avoir terminé le reste des études.</strong> La configuration de la roue de coupe dépend du terrain, pas de l’architecture des stations, et le rapport géotechnique suffit généralement à passer commande bien avant que le reste soit figé.",
      "<strong>Traitez le puits d’attaque comme le chemin critique qu’il est.</strong> Parois moulées, terrassement, radier et mur de réaction s’enchaînent en série et en terrain meuble ; il n’existe aucun moyen de comprimer la fin de cette chaîne pour rattraper un démarrage tardif.",
      "<strong>Ne considérez jamais les rameaux comme du travail de remplissage.</strong> Ils exigent un traitement de terrain, ils constituent l’activité la plus risquée de la plupart des chantiers de tunnel, et ils dépendent d’anneaux posés et injectés sur cette section.",
      "<strong>Faites courir l’auscultation des tassements bien avant le lancement et bien après le passage.</strong> Des mesures de référence prises une fois le creusement commencé ne valent rien, et une injection de compensation doit être instrumentée avant d’être nécessaire.",
      "<strong>Intégrez la coordination SPS au planning, pas au dossier.</strong> Le PGC impose des interférences entre entreprises, des accès et des périodes d’intervention qui modifient réellement les durées, et un coordonnateur informé après coup est un coordonnateur qui arrête des tâches.",
      "<strong>Le percement n’est pas la fin.</strong> Sur la plupart des projets, le second œuvre, la ventilation et les systèmes de sécurité qui suivent durent plus longtemps qu’on ne l’imagine, et l’essai de fumées chaudes comme le dossier de sécurité se placent derrière tout le reste sur le chemin critique de la mise en service.",
      "<strong>Réservez le SDIS des mois à l’avance pour l’exercice incendie.</strong> Un essai de fumées chaudes suppose sa présence, son agenda n’est pas le vôtre, et un créneau manqué repousse la remise de plusieurs semaines alors que le tunnel est physiquement terminé."
    ],
    faq: [
      [
        "Combien de temps faut-il pour construire un tunnel ?",
        "Un tunnel urbain monotube de quelques kilomètres court couramment trente à quarante mois entre l’obtention des autorisations et la remise à l’exploitant, ce qui correspond à peu près à l’hypothèse du modèle. La variabilité se concentre sur le délai de fabrication du tunnelier en amont et sur les conditions de terrain pendant le creusement."
      ],
      [
        "Combien de temps à l’avance faut-il commander le tunnelier ?",
        "Conception, fabrication, réception en usine et transport représentent couramment douze à dix-huit mois pour une machine sur mesure, auxquels s’ajoute le montage en souterrain. La commande doit être passée pendant que le puits est encore à l’étude, pas une fois qu’il est terminé."
      ],
      [
        "Comment planifier une vitesse d’avancement que l’on ne peut pas prévoir ?",
        "En découpant le creusement en barres par unité géologique issue du rapport géotechnique de référence et en affectant à chacune sa propre cadence. Une section lente apparaît alors comme telle, au lieu de disparaître dans une barre unique moyennée."
      ],
      [
        "Quelles autorisations conditionnent le démarrage ?",
        "Selon le projet : autorisation environnementale après enquête publique, autorisation ou déclaration au titre de la loi sur l’eau dès qu’un cours d’eau ou une nappe est concerné, et éventuellement une déclaration d’utilité publique. À cela s’ajoutent les DT-DICT auprès des exploitants de réseaux, qui ne sont pas une formalité d’étude mais un préalable à chaque terrassement."
      ],
      [
        "Quand construire les rameaux de communication ?",
        "Après le passage de la machine et une fois les anneaux injectés sur la section concernée, mais généralement pendant que le creusement se poursuit devant. Ils exigent d’abord un traitement de terrain et portent le risque le plus élevé du chantier : ils méritent donc leurs propres barres plutôt que d’être traités comme du remplissage de marge."
      ],
      [
        "Le modèle de planning de tunnel est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans compte ni filigrane."
      ]
    ]
  },
  'semiconductor-fab-construction-schedule': {
    card: "Gros œuvre, bascule du protocole salle blanche, utilités jusqu’aux points de raccordement, qualification des équipements et premier silicium.",
    h1: "Planning de construction d’une usine de semi-conducteurs",
    metaTitle: "Planning de construction d’une fab",
    metaDesc: "Planning gratuit de construction d’usine de semi-conducteurs : gros œuvre, salle blanche, utilités, raccordement et qualification des équipements.",
    lead: "Un <strong>planning de construction d’usine de semi-conducteurs</strong> gratuit qui remet le protocole salle blanche à sa vraie place : à la charnière du programme. Site, autorisations et dalle désolidarisée des vibrations ; structure, enveloppe et trame de salle blanche ; eau ultrapure, gaz vrac et gaz spéciaux, extraction et traitement des effluents gazeux, dimensionnés pour être disponibles aux points de raccordement ; puis une bascule nette où le site cesse d’être un chantier pour devenir un environnement contrôlé, suivie de l’entrée des équipements, du raccordement, de la qualification et du premier silicium. À télécharger pour un dossier de comité, ou à ouvrir en ligne pour réordonner les vagues d’équipements selon votre propre disponibilité des utilités.",
    intro: "Une fab n’est pas terminée quand le bâtiment est terminé. Elle est terminée quand les équipements sont qualifiés et que les plaquettes tournent, et tout ce qui sépare ces deux points est gouverné par un protocole. Le modèle suit cette transition :",
    phases: [
      [
        "Site, autorisations et gros œuvre",
        "Étude sismique et vibratoire, autorisation environnementale et régime ICPE au titre des gaz et produits dangereux stockés, programme technique détaillé et gel de la liste des équipements dont tout le dimensionnement découle, achat des utilités à long délai, puis fondations profondes et dalle nervurée désolidarisée. <em>Jalons : liste d’équipements gelée, autorisations obtenues.</em>"
      ],
      [
        "Structure et enveloppe de salle blanche",
        "Charpente métallique et enveloppe, sous-sol technique et réservations dans la dalle, mise hors d’eau, puis trame de cloisons et de plafond de salle blanche, plancher technique et ventilateurs-filtres. <em>Jalon : bâtiment hors d’eau et hors d’air.</em>"
      ],
      [
        "Utilités et traitement des effluents",
        "Station d’eau ultrapure et rinçage de la boucle, parc de gaz vrac et de gaz spéciaux, armoires de distribution et essais d’étanchéité, extraction et laveurs, mise sous tension du poste de livraison — le tout piloté sur les points de raccordement, et non sur un « terminé » générique. <em>Jalon : utilités disponibles aux points de raccordement.</em>"
      ],
      [
        "Certification de la salle blanche et bascule de protocole",
        "La bascule du protocole de construction, habillage et sas, procédures d’introduction des matériaux, équilibrage aéraulique et vérification du flux laminaire, comptage particulaire et classification ISO, puis relevé vibratoire et compatibilité électromagnétique. <em>Jalon : salle blanche certifiée.</em>"
      ],
      [
        "Entrée, raccordement et qualification des équipements",
        "Plan de manutention et séquence de livraison, vagues lithographie, gravure, dépôt et métrologie, raccordement aux gaz, à l’extraction et à l’eau ultrapure, qualification d’installation par le fournisseur puis qualification opérationnelle. <em>Jalon : qualification des équipements achevée.</em>"
      ],
      [
        "Qualification procédé et premier silicium",
        "Intégration du MES et de l’automatisation, chargement des recettes, première plaquette sur un module isolé, lot pilote sur la gamme complète, montée en rendement et qualification client. <em>Jalons : premier silicium, autorisation de production en volume.</em>"
      ]
    ],
    callout: "Il existe une date qui change les règles pour tout le monde sur un chantier de fab : la bascule du protocole salle blanche. Avant, c’est un chantier avec casques et soudure. Après, chaque personne est habillée en combinaison, chaque matériau entre par un sas après essuyage, et la productivité de chaque corps d’état chute nettement. Planifiez délibérément de part et d’autre de cette ligne — tout ce qui peut être terminé « en sale » doit l’être avant, et toute barre qui la franchit exige une durée plus longue que le même travail réalisé à l’extérieur. Les programmes qui la traitent comme une réception ordinaire perdent des mois à le réapprendre sur le terrain.",
    customize: [
      "Gelez tôt la liste des équipements et posez-la comme jalon. Chaque dimensionnement d’utilité, chaque réservation et chaque plan de raccordement en découlent, et un changement tardif se propage à toute la conception du bâtiment.",
      "Réordonnez les vagues d’équipements selon votre disponibilité d’utilités plutôt que selon les dates de livraison des fournisseurs. Un équipement qui arrive avant que ses gaz et son extraction soient en service occupe de la surface et ne qualifie rien.",
      "Donnez à l’eau ultrapure sa propre barre de rinçage et de qualification de résistivité après installation. La station construite et la boucle assez propre pour y raccorder un équipement sont deux choses différentes.",
      "Séparez la qualification d’installation de la qualification opérationnelle. Le fournisseur qui démontre que l’équipement démarre et votre équipe procédé qui démontre qu’il tient une base de maîtrise statistique sont deux événements distincts, avec des personnes différentes.",
      "Ajoutez des barres explicites pour la bascule de protocole, les procédures d’habillage et l’introduction des matériaux. Ce sont des activités avec une durée, pas une note de service.",
      "Placez le relevé vibratoire, la mesure de compatibilité électromagnétique et l’étude acoustique avant l’entrée des équipements de lithographie. Découvrir un problème de vibration après le calage d’un scanner est la découverte la plus coûteuse de ce planning."
    ],
    tips: [
      "<strong>Le vrai jalon est le raccordement, pas la livraison.</strong> Suivez les équipements à la date où ils sont raccordés aux utilités en service et sous tension : un entrepôt plein d’équipements livrés ne vaut rien pour le planning de qualification.",
      "<strong>Pilotez les utilités sur une date de point de raccordement.</strong> « Station d’eau ultrapure terminée » et « eau ultrapure disponible à la résistivité spécifiée au point de raccordement de la baie de lithographie » sont séparés de plusieurs mois, et seule la seconde débloque un équipement.",
      "<strong>Protégez le planning de traitement des effluents.</strong> L’extraction et les laveurs sont ingrats et systématiquement déprioritisés, aucun équipement consommant du gaz ne peut être qualifié sans eux, et ils s’installent discrètement sur le chemin critique du premier silicium.",
      "<strong>Faites le relevé vibratoire dans les conditions réelles.</strong> Une mesure réalisée avant la mise en route des ventilateurs et des pompes ne représente pas l’environnement dans lequel vivront les équipements de lithographie.",
      "<strong>Ne planifiez pas la montée en rendement comme une barre fixe.</strong> La densité de défauts décroît selon une courbe en partie expérimentale : donnez-lui une fenêtre réaliste et une provision, plutôt qu’une date choisie par le plan d’affaires.",
      "<strong>Démarrez l’intégration du MES et de l’automatisation pendant l’installation, pas après.</strong> L’intégration des recettes et de la manutention automatisée est du logiciel avec son propre cycle d’anomalies, et c’est un blocage fréquemment découvert sur le premier lot complet."
    ],
    faq: [
      [
        "Combien de temps faut-il pour construire une usine de semi-conducteurs ?",
        "Une usine neuve court couramment vingt-huit à trente-six mois entre l’obtention des autorisations et la production en volume, ce qui correspond à peu près à la durée retenue par le modèle. Le gros œuvre et les utilités sont prévisibles ; la variabilité se concentre sur la qualification des équipements et la montée en rendement."
      ],
      [
        "Qu’est-ce que la bascule du protocole salle blanche ?",
        "Le moment où le bâtiment cesse d’être un chantier pour devenir un environnement contrôlé. Habillage, sas, introduction des matériaux après essuyage et restriction des outillages entrent en vigueur, et la productivité des corps d’état encore présents chute fortement."
      ],
      [
        "Pourquoi le raccordement, et non la livraison, est-il sur le chemin critique ?",
        "Parce qu’un équipement ne peut être qualifié qu’une fois raccordé à l’eau ultrapure, aux gaz de procédé, à l’extraction et à l’alimentation électrique aux spécifications. La livraison est un événement logistique ; le raccordement dépend de l’achèvement des utilités à cet endroit précis de la fab."
      ],
      [
        "Quand l’usine « ouvre-t-elle » réellement ?",
        "À la qualification des équipements et au premier silicium, pas à l’achèvement du bâtiment. Le modèle traite la mise hors d’eau et la certification de la salle blanche comme des jalons intermédiaires et réserve les jalons majeurs à la qualification et au premier lot pilote complet."
      ],
      [
        "Quelle provision garder pour la montée en rendement ?",
        "Assez pour que la courbe de densité de défauts reste expérimentale plutôt que planifiée. La plupart des programmes sous-estiment cette phase parce que c’est la seule dont la réponse n’est pas connue à l’avance ; une barre distincte et visible vaut mieux qu’un rembourrage discret des phases précédentes."
      ],
      [
        "Le modèle de planning de fab est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans compte ni filigrane."
      ]
    ]
  },
  'oil-gas-pipeline-construction-schedule': {
    card: "Servitudes et autorisations, fenêtres environnementales, chantier mobile de soudage et contrôle, franchissements, épreuve hydraulique et mise en gaz.",
    h1: "Planning de construction d’un pipeline pétrolier ou gazier",
    metaTitle: "Planning de construction de pipeline",
    metaDesc: "Planning gratuit de construction de pipeline : servitudes, autorisations, fenêtres environnementales, soudage, franchissements et épreuve hydraulique.",
    lead: "Un <strong>planning de construction de pipeline</strong> gratuit, organisé autour des deux éléments qui fixent réellement les dates : le foncier et les saisons. Étude de tracé, évaluation environnementale, autorisations et acquisition des servitudes en amont ; périodes de nidification et fenêtres d’intervention en lit de cours d’eau posées comme contraintes fermes ; le chantier mobile comme chaîne de production qui descend le tracé — bardage, tranchée, soudage, radiographie, revêtement, mise en fouille et remblaiement ; franchissements et stations en parallèle ; puis épreuve hydraulique, soudures de raboutage et mise en service. À télécharger pour un comité projet, ou à ouvrir en ligne pour y saisir vos propres dates de fenêtres.",
    intro: "Un pipeline est construit par une chaîne de production qui descend un couloir dont vous n’êtes pas encore propriétaire, à l’intérieur de saisons que vous ne contrôlez pas. Le modèle garde ces deux contraintes visibles :",
    phases: [
      [
        "Tracé, autorisations et servitudes",
        "Étude de tracé et variantes, étude d’impact environnemental et social, autorisation environnementale unique et autorisation au titre de la loi sur l’eau pour les franchissements, enquête publique, négociation avec les propriétaires et constitution des servitudes, diagnostic d’archéologie préventive, et DT-DICT auprès des exploitants de réseaux avant tout terrassement. <em>Jalons : servitudes acquises, autorisation de construire délivrée.</em>"
      ],
      [
        "Approvisionnement en tubes et logistique",
        "Commande et production des tubes en aciérie, revêtement d’usine et préparation des chanfreins, puis acheminement ferroviaire et routier vers les aires de stockage le long du tracé. <em>Jalon : tubes disponibles sur la piste.</em>"
      ],
      [
        "Préparatifs et fenêtres environnementales",
        "Report des périodes de nidification et des fenêtres d’intervention en lit de cours d’eau sur le programme, renforcement des accès et des ouvrages de franchissement, désignation du coordonnateur SPS et plan général de coordination, déboisement et nivellement de la piste, décapage de la terre végétale et lutte contre l’érosion, puis mobilisation du chantier mobile. <em>Jalon : chantier prêt à barder.</em>"
      ],
      [
        "Chantier mobile de pose",
        "La chaîne de production elle-même — bardage, terrassement de la tranchée, cintrage et alignement, soudage, contrôle radiographique et ultrasonore, revêtement des joints et détection de défauts, mise en fouille, lit de pose, remblaiement et protection cathodique. <em>Jalon : soudage de la ligne achevé.</em>"
      ],
      [
        "Franchissements et ouvrages particuliers",
        "Forage dirigé sous la rivière principale, franchissements de cours d’eau à caler dans la fenêtre d’intervention, traversées de routes, de voies ferrées et de réseaux tiers, postes de sectionnement et stations de pompage ou de compression. <em>Jalon : fermeture de la fenêtre d’intervention en lit.</em>"
      ],
      [
        "Épreuve hydraulique, raboutage et mise en service",
        "Sectionnement et pose des collecteurs d’épreuve, remplissage et mise en pression, palier de maintien et réparations, vidange, nettoyage et séchage au racleur, soudures de raboutage, supervision et détection de fuite, inertage à l’azote et introduction du produit, puis remise en état des terrains. <em>Jalons : épreuve hydraulique concluante, pipeline en service.</em>"
      ]
    ],
    callout: "Les fenêtres environnementales ne sont pas des risques : ce sont des murs. Une fenêtre d’intervention en lit de cours d’eau peut ne durer que six semaines dans l’année, une période de nidification peut interdire tout déboisement pendant une saison entière, et ni l’une ni l’autre ne se négocie. Reportez chaque fenêtre sur le planning avant de séquencer quoi que ce soit d’autre, puis construisez le programme du chantier mobile pour que les franchissements tombent à l’intérieur. Manquer une fenêtre d’une semaine ne coûte pas une semaine : cela coûte un an, parce que la prochaine ouverture est dans douze mois.",
    customize: [
      "Saisissez d’abord vos propres dates de fenêtres en lit et de nidification, comme barres fixes, puis organisez le chantier autour d’elles et non l’inverse.",
      "Découpez la ligne en un jeu de barres par chantier mobile si vous faites travailler plusieurs équipes, et donnez à chacune sa propre cadence en mètres ou en joints par jour.",
      "Représentez soudage, radiographie et revêtement par des barres qui se chevauchent et se suivent le long du tracé — c’est une seule chaîne de production en mouvement, pas trois phases successives, et les dessiner en série masque la véritable contrainte.",
      "Ajoutez une barre de réparation et de contre-radiographie des soudures. L’hypothèse d’un contrôle concluant du premier coup est l’erreur d’optimisme la plus fréquente sur ce type de chantier.",
      "Donnez à l’acquisition des servitudes une longue traîne et une provision pour propriétaire récalcitrant. Une seule signature manquante peut bloquer un chantier par ailleurs prêt à avancer.",
      "Découpez l’épreuve hydraulique en tronçons correspondant à vos collecteurs d’essai, et ajoutez une barre de réparation et de nouvelle épreuve après le palier de maintien : un tronçon défaillant doit être localisé, découpé, ressoudé puis réessayé."
    ],
    tips: [
      "<strong>Engagez l’acquisition des servitudes avant la fin des études.</strong> Le foncier est l’élément au délai le plus long de la plupart des pipelines et il échappe totalement à l’entreprise : traitez-le comme un achat, avec un responsable et un point hebdomadaire.",
      "<strong>Ne laissez pas le chantier dépasser les tubes.</strong> Le stock en aire d’entreposage devant l’équipe est le meilleur indicateur d’alerte précoce du chantier ; s’il baisse, la pose s’arrêtera avant que quiconque ait signalé un problème.",
      "<strong>Réservez l’équipe et la machine de forage dirigé sur la fenêtre, pas sur le chantier.</strong> Les foreurs dirigés sont spécialisés et rares, et une machine qui arrive après la fermeture de la fenêtre représente une année de marge perdue.",
      "<strong>Traitez les soudures de raboutage comme une activité distincte et soigneusement séquencée.</strong> Elles interviennent après l’épreuve hydraulique et ne peuvent pas être testées en pression de la même manière : elles portent donc un poids de contrôle et de planning disproportionné.",
      "<strong>Menez la supervision et la détection de fuite en parallèle des stations, pas après.</strong> L’intégration à la salle de contrôle est un projet logiciel avec son propre cycle d’essais, et elle surprend régulièrement les plannings pipeline tout à la fin.",
      "<strong>Planifiez la remise en état et la réception par les propriétaires comme du vrai travail.</strong> Le pipeline peut être en service ; tant que la bande n’est pas remise en état et réceptionnée, le projet n’est pas clos et la retenue de garantie n’est pas libérée."
    ],
    faq: [
      [
        "Combien de temps faut-il pour construire un pipeline ?",
        "Une canalisation terrestre de diamètre moyen court couramment vingt à vingt-huit mois entre l’étude de tracé et la mise en service, ce qui correspond à peu près à la durée retenue par le modèle. Les autorisations et le foncier dominent le début, les fenêtres environnementales dominent le milieu."
      ],
      [
        "Qu’est-ce qu’une fenêtre environnementale et pourquoi pèse-t-elle autant ?",
        "Ce sont des périodes fixées par l’autorisation environnementale et par les prescriptions au titre de la loi sur l’eau, pendant lesquelles les travaux à proximité ou dans les cours d’eau et dans les habitats de nidification sont permis ou interdits. Elles ne se négocient ni ne se compriment : en manquer une décale généralement ce lot d’une année complète plutôt que de quelques semaines."
      ],
      [
        "Comment planifier un chantier mobile de pose ?",
        "Comme une chaîne de production en mouvement plutôt que comme des phases. Bardage, tranchée, soudage, radiographie, revêtement, mise en fouille et remblaiement descendent le tracé à une cadence donnée, en se suivant, et le planning doit les montrer superposés."
      ],
      [
        "Quand programmer l’épreuve hydraulique ?",
        "Après remblaiement de chaque tronçon d’essai et avant les raboutages. Prévoyez un palier de maintien, une évaluation des fuites et une barre explicite de réparation et de nouvelle épreuve ; supposer que chaque tronçon passe du premier coup est le dépassement de fin de chantier classique sur un pipeline."
      ],
      [
        "Pourquoi l’acquisition des servitudes est-elle sur le chemin critique ?",
        "Parce qu’on ne peut physiquement pas commencer sur un terrain sur lequel on ne dispose d’aucune servitude, et parce que le calendrier de négociation dépend de propriétaires individuels, pas de votre programme. Cela se comporte comme un achat à long délai et doit être suivi comme tel — y compris l’enquête publique et, le cas échéant, la déclaration d’utilité publique qui la précède."
      ],
      [
        "Le modèle de planning de pipeline est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans compte ni filigrane."
      ]
    ]
  },
  'theatre-production-schedule': {
    card: "Rétroplanning depuis la première : droits SACD, distribution, construction, répétitions, montage, semaine technique et avant-premières.",
    h1: "Planning de production théâtrale",
    metaTitle: "Planning de production théâtrale",
    metaDesc: "Planning gratuit de production théâtrale : rétroplanning depuis la première, droits, distribution, construction, montage, semaine technique, filages.",
    lead: "Un <strong>planning de production théâtrale</strong> gratuit, construit de la seule façon dont un planning de spectacle peut l’être : à rebours de la première. La date est fixée, les billets sont vendus et la salle est louée ; distribution, validation de la maquette, construction en atelier, semaines de répétition, montage, réglages, filages techniques, générales et avant-premières doivent donc tous tenir devant elle. À télécharger pour une réunion de production, ou à ouvrir en ligne pour déplacer la date de première et voir tout le rétroplanning bouger avec elle.",
    intro: "Tout autre projet se demande quand il sera terminé. Une production théâtrale le sait à l’heure près, et en déduit ce qui doit être vrai avant. Le modèle est construit dans ce sens :",
    phases: [
      [
        "Développement, droits et décision de production",
        "La date de première et la location de la salle, la licence d’entrepreneur de spectacles vivants du producteur, la négociation des droits de représentation auprès de la SACD ou des ayants droit, le budget et les coproductions, l’équipe artistique, et le rétroplanning arrêté à partir de la date fixe. <em>Jalon : production engagée.</em>"
      ],
      [
        "Distribution et scénographie",
        "Appel à candidatures et propositions d’agents, auditions et rappels, propositions d’engagement et contrats d’intermittents du spectacle avec déclaration préalable à l’embauche, maquette blanche, puis la présentation de maquette définitive qui libère l’atelier. <em>Jalons : distribution contractée, scénographie validée.</em>"
      ],
      [
        "Construction et salle de répétition",
        "Construction et patine du décor en atelier, réalisation des costumes et essayages, les semaines de répétition en salle avec les filages, déclaration des œuvres musicales à la SACEM lorsque le spectacle en utilise, et les conduites écrites depuis le tracé au sol. <em>Jalon : filage devant les producteurs.</em>"
      ],
      [
        "Montage et implantation",
        "Sortie de la production précédente, accroche dans une salle vide, montage du décor, mise en service de la machinerie et des perches motorisées, visite de la commission de sécurité si la configuration de la salle est modifiée, réglages lumière et calage son au plateau. <em>Jalon : plateau disponible pour la troupe.</em>"
      ],
      [
        "Semaine technique",
        "Répétition à l’italienne au plateau, conduite technique acte par acte, notes et reprises des changements à vue, et deux générales — le goulot d’étranglement qui ne peut pas être allongé parce que la salle est louée. <em>Jalon : première rencontre avec le public.</em>"
      ],
      [
        "Avant-premières, première et exploitation",
        "Représentations d’avant-première avec des répétitions de reprise en journée entre elles, le gel du spectacle, la première de presse à la date contractée, les critiques et le réajustement de la communication, puis l’exploitation sous la conduite de la régie générale. <em>Jalon : première.</em>"
      ]
    ],
    callout: "La première n’est pas un objectif : c’est un engagement. La presse est invitée, les billets sont vendus, l’achat d’espace est engagé et une autre production entre en salle après la vôtre. Tout se calcule donc à rebours, et la semaine technique — italienne, conduite, générales — absorbe le retard de toutes les phases qui la précèdent. Un costume en retard, une machinerie qui ne se met pas en service, un changement à vue qui n’a pas été réglé : tout arrive dans les mêmes sept jours, et ces sept jours ne peuvent pas en faire huit.",
    customize: [
      "Posez d’abord la date de première, puis tirez tout le reste devant elle. Si le rétroplanning ne tient pas, la correction est en amont — un décor plus modeste, une distribution plus précoce, davantage de semaines de répétition — jamais une semaine technique plus courte.",
      "Calez les semaines de répétition sur votre convention collective et sur les contrats d’intermittents : quatre à six semaines sont courantes dans le spectacle subventionné, et les doublures doivent tenir à l’intérieur.",
      "Placez la négociation des droits SACD et la déclaration SACEM comme des tâches datées avec un responsable, et non comme une formalité administrative de fin de projet : une autorisation de représentation manquante bloque la vente comme la première.",
      "Allongez ou raccourcissez les barres de montage selon votre lieu. Une salle en alternance qui vous cède le plateau un dimanche est une contrainte radicalement différente d’un théâtre noir dont vous disposez quinze jours.",
      "Découpez la conduite technique par acte, et ajoutez une barre distincte pour la machinerie ou les vols si le spectacle en comporte : ce sont les séquences qui dévorent le temps technique.",
      "Ajoutez une barre de répétitions de reprise en journée entre les avant-premières. Une avant-première n’est pas seulement une représentation : c’est la dernière occasion de modifier le spectacle, et les services de répétition sont du travail réellement planifié.",
      "Posez la validation de la maquette comme jalon dur. L’atelier ne peut pas commencer sans elle, et chaque jour de glissement se prélève directement sur le temps de patine et d’essayage à l’autre bout."
    ],
    tips: [
      "<strong>Validez la scénographie assez tôt pour que l’atelier construise sereinement.</strong> Une présentation de maquette tardive ne repousse pas la première — elle signifie seulement que le décor arrive sans patine et que le montage déborde sur la technique.",
      "<strong>Protégez le filage devant les producteurs.</strong> C’est le dernier moment où le spectacle se voit entier avant que le théâtre n’absorbe l’attention de tout le monde, et le sacrifier pour gagner un jour de répétition est presque toujours un mauvais échange.",
      "<strong>Bouclez les contrats d’intermittents avant l’entrée en répétition.</strong> Comédiens, techniciens et régisseurs sont engagés au cachet ou au service sur des périodes précises, ils travaillent souvent ailleurs jusqu’à la veille, et une date décalée n’est pas une date négociable : c’est une personne qui n’est plus disponible.",
      "<strong>Écrivez les conduites lumière et son depuis la salle de répétition, pas depuis le plateau.</strong> Tout ce que les concepteurs peuvent décider avant le montage est du temps gagné en technique, là où une heure vaut infiniment plus cher.",
      "<strong>Ne convoquez pas la troupe au plateau avant que le montage soit réellement terminé.</strong> Une italienne qui partage le plateau avec une équipe encore en train de monter est plus lente que l’attente, et c’est là que surviennent les accidents.",
      "<strong>Traitez les avant-premières comme une partie du travail de répétition.</strong> Programmez les services de journée, budgétez les heures supplémentaires, et décidez à l’avance quelle avant-première marque le gel du spectacle, pour que la troupe sache quand les modifications s’arrêtent.",
      "<strong>Gardez la conduite costumes et les changements rapides dans le planning.</strong> Les changements de costume sont la partie la moins répétée d’une semaine technique, et c’est ce qui rate visiblement devant le premier public."
    ],
    faq: [
      [
        "Comment planifie-t-on une production théâtrale ?",
        "À rebours de la première. On fixe la date, puis on en déduit le démarrage au plus tard des avant-premières, de la semaine technique, du montage, des répétitions, de la construction, de la scénographie et de la distribution. Le modèle est présenté dans cet ordre pour que la contrainte reste visible."
      ],
      [
        "Qu’est-ce que la semaine technique ?",
        "La semaine qui sépare l’arrivée de la troupe au plateau du premier public : italienne, conduites techniques, notes et générales. C’est le point de crispation où atterrit tout retard antérieur, et elle est bornée des deux côtés par la location de la salle."
      ],
      [
        "Combien de temps dure une période de répétition normale ?",
        "Quatre à six semaines en salle de répétition sont courantes pour une pièce, davantage pour un spectacle musical. Le modèle retient six semaines, filages compris, mais la durée doit être calée sur votre convention collective, sur les contrats d’intermittents et sur l’ampleur du spectacle."
      ],
      [
        "Faut-il une licence d’entrepreneur de spectacles ?",
        "Dès lors que vous produisez ou diffusez des spectacles vivants de manière autre qu’occasionnelle, la déclaration donnant lieu au récépissé de licence est une obligation, et elle est vérifiée par les lieux et les financeurs. Placez-la très en amont du planning : elle conditionne la contractualisation et la billetterie, et se découvrir sans licence à quelques semaines de la première est un blocage administratif, pas un contretemps."
      ],
      [
        "La semaine technique peut-elle être allongée en cas de retard ?",
        "Presque jamais. La salle est louée, les avant-premières sont en vente et la première est contractée : le temps de plateau est fixe. La récupération doit venir de la salle de répétition, de l’atelier ou de la validation de maquette, tous situés plus tôt."
      ],
      [
        "Quand faut-il geler le spectacle ?",
        "En général une ou deux représentations avant la première, pour que la troupe joue au moins une fois la version qui sera critiquée. Posez le gel explicitement sur le planning : une date de gel implicite signifie que les modifications continuent d’arriver jusqu’au soir même."
      ],
      [
        "Le modèle de planning de production théâtrale est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans compte ni filigrane."
      ]
    ]
  },
  'medical-clinic-opening-timeline': {
    card: "Autorisation ARS, inscription à l’Ordre, conventionnement Assurance Maladie, aménagement ERP accessible, commission de sécurité et ouverture.",
    h1: "Planning d’ouverture d’un centre de santé",
    metaTitle: "Planning d’ouverture d’un centre de santé",
    metaDesc: "Planning gratuit d’ouverture de centre de santé : autorisation ARS, inscription à l’Ordre, conventionnement, aménagement ERP, commission de sécurité.",
    lead: "Un <strong>planning d’ouverture de centre de santé</strong> gratuit, construit autour des trois horloges qui décident du jour où vous pourrez réellement recevoir un patient : l’autorisation, la commission de sécurité et l’installation des praticiens. Étude d’opportunité et choix du régime — autorisation ou déclaration auprès de l’ARS ; inscription au tableau de l’Ordre des médecins et conventionnement avec l’Assurance Maladie, deux démarches longues et largement hors de votre contrôle ; un aménagement soumis aux fluides médicaux, aux règles d’hygiène et à l’accessibilité des établissements recevant du public ; la mise en service des équipements ; puis les contrôles qui autorisent l’ouverture des portes. À télécharger pour un dossier de financement, ou à ouvrir en ligne pour y poser vos propres délais.",
    intro: "Un cabinet construit, équipé et doté d’une équipe ne peut toujours soigner personne tant que trois autorisations distinctes ne sont pas arrivées. Le modèle en fait la colonne vertébrale plutôt que la queue de comète :",
    phases: [
      [
        "Projet de santé, local et régime d’autorisation",
        "Définition de l’offre de soins et analyse des besoins du territoire, choix du local et signature du bail, confirmation auprès de l’ARS du régime applicable — autorisation, déclaration ou simple enregistrement selon la structure et les activités — dépôt du projet de santé, et les immatriculations, numéros FINESS et enregistrements RPPS sans lesquels rien n’avance en aval. <em>Jalons : bail signé, régime d’autorisation confirmé.</em>"
      ],
      [
        "Installation des praticiens et conventionnement",
        "Recrutement des médecins, inscription au tableau du conseil départemental de l’Ordre des médecins, vérification des diplômes et de l’assurance en responsabilité civile professionnelle, enregistrement du numéro RPPS, puis conventionnement avec l’Assurance Maladie et raccordement à la télétransmission — une horloge longue tenue par d’autres organismes. <em>Jalons : praticiens inscrits, conventionnement effectif.</em>"
      ],
      [
        "Conception et aménagement réglementé",
        "Programmation médicale pièce par pièce, dossier de permis de construire ou d’autorisation de travaux ERP avec la notice de sécurité et la notice d’accessibilité, dépôt en mairie, gros œuvre et second œuvre, réseaux de fluides médicaux, traitement d’air et cascades de pression, cloisonnement pendant les travaux et revêtements nettoyables. <em>Jalon : aménagement substantiellement achevé.</em>"
      ],
      [
        "Équipements, système d’information et mise en service",
        "Commandes des équipements lourds, livraison et installation de l’imagerie, déclaration à l’Autorité de sûreté nucléaire et contrôle qualité des installations de radiologie, vérification des fluides médicaux, mise en service et étalonnage biomédical, puis paramétrage du logiciel métier, de la carte Vitale et des échanges sécurisés de santé. <em>Jalon : équipements réceptionnés et étalonnés.</em>"
      ],
      [
        "Contrôles, autorisation et démarche qualité",
        "Passage de la commission de sécurité et attestation d’accessibilité, registre public d’accessibilité, levée des réserves d’hygiène, visite de conformité ou instruction du dossier par l’ARS, accréditation du laboratoire si vous en exploitez un, et convention de traitement des déchets d’activités de soins à risques infectieux. <em>Jalon : autorisation d’ouverture délivrée.</em>"
      ],
      [
        "Recrutement, répétition générale et ouverture",
        "Recrutement des équipes soignantes et de l’accueil, formation et validation des compétences, approvisionnement et stock stérile, une journée de simulation avec de faux patients, des feuilles de soins d’essai transmises en télétransmission, et l’information des médecins adresseurs. <em>Jalons : premier patient reçu, planning complet ouvert.</em>"
      ]
    ],
    callout: "Vous ne pouvez recevoir aucun patient tant que l’autorisation, le contrôle de sécurité et l’installation des praticiens ne sont pas tous arrivés — et c’est l’installation des praticiens que vous maîtrisez le moins. L’inscription au tableau de l’Ordre, la vérification des titres, l’enregistrement RPPS et le conventionnement avec l’Assurance Maladie avancent chacun dans la file d’attente de quelqu’un d’autre, et plusieurs mois à compter d’un dossier complet sont la norme. Engagez la démarche le jour où vous faites une proposition d’embauche, et non quand le bâtiment est fini : un cabinet parfaitement aménagé dont les médecins ne sont ni inscrits ni conventionnés est un local vide qui perd de l’argent.",
    customize: [
      "Faites démarrer la barre d’installation à la date de la proposition d’embauche et donnez-lui le délai réellement observé auprès de votre conseil départemental et de votre caisse, pas le meilleur cas. Si elle se termine après l’autorisation, c’est elle votre chemin critique et le planning doit le dire.",
      "Ajoutez une ligne par praticien si vous ouvrez à plusieurs. Ils ne sont pas inscrits en même temps, et la date d’ouverture dépend du plus lent, pas de la moyenne.",
      "Séparez le conventionnement de l’inscription à l’Ordre. Être autorisé à exercer et être conventionné pour facturer sont deux processus distincts, avec des horloges distinctes, et c’est le second qui détermine les recettes, pas l’accès.",
      "Gardez les réseaux de fluides médicaux, leur vérification et leur certification comme des barres propres. C’est une installation spécialisée avec un vérificateur tiers, qui ne se dissout pas dans le lot plomberie-ventilation.",
      "Traitez l’accessibilité comme une contrainte de conception et non de finition : le dossier d’autorisation de travaux ERP comporte une notice d’accessibilité, et une mise en conformité découverte à la commission de sécurité se paie en semaines et en travaux repris.",
      "Ajoutez le nettoyage et le cloisonnement de chantier comme activité réelle avec une levée de réserves, en particulier si vous aménagez à l’intérieur d’un bâtiment déjà occupé.",
      "Placez la journée de simulation avant l’ouverture et dotez-la de toute l’équipe. C’est la seule répétition dont vous disposiez pour enchaîner accueil, installation en salle, logiciel métier, équipement et facturation dans un même flux."
    ],
    tips: [
      "<strong>Confirmez le régime auprès de l’ARS avant de signer le bail.</strong> Savoir si votre structure relève d’une autorisation, d’une déclaration ou d’un simple enregistrement, et ce que l’instruction exigera, peut changer entièrement la surface, le coût des travaux et le calendrier.",
      "<strong>Déposez des dossiers complets ou ne les déposez pas.</strong> Un dossier incomplet ne fait pas partir l’horloge : il repart en fin de file lorsqu’il est corrigé, et ce seul faux pas administratif est la cause la plus fréquente d’une ouverture décalée.",
      "<strong>Concevez pour l’instruction, pas seulement pour l’entreprise.</strong> Surfaces des pièces, points d’eau, cascades de pression, revêtements et accessibilité font l’objet d’exigences précises, et une reprise de conception après un avis coûte infiniment plus cher que de viser juste du premier coup.",
      "<strong>Sollicitez tôt la commission de sécurité et prévoyez une contre-visite.</strong> Son agenda n’est pas le vôtre, et programmer une ouverture en supposant un avis favorable du premier coup est un pari que l’on perd généralement.",
      "<strong>Réceptionnez et étalonnez les équipements avec un ingénieur biomédical, pas avec le seul fournisseur.</strong> Livraison et installation ne valent pas étalonnage, contrôle qualité et inscription à l’inventaire que le contrôleur demandera à voir.",
      "<strong>Transmettez des feuilles de soins d’essai avant le premier vrai patient.</strong> Découvrir un paramétrage de télétransmission défaillant la première semaine, c’est soigner des patients que vous ne pouvez pas facturer — pire que d’ouvrir une semaine plus tard."
    ],
    faq: [
      [
        "Combien de temps faut-il pour ouvrir un centre de santé ?",
        "Douze à seize mois sont courants pour une structure aménagée dans un local loué, ce qui correspond à peu près à la durée retenue par le modèle. Les travaux sont rarement la contrainte : l’autorisation et l’installation des praticiens le sont."
      ],
      [
        "Combien de temps prend l’installation d’un médecin ?",
        "Plusieurs mois à compter d’un dossier complet, et davantage lorsque le conventionnement est inclus. L’inscription au tableau du conseil départemental de l’Ordre, la vérification des titres, l’enregistrement RPPS et le conventionnement avec l’Assurance Maladie relèvent d’organismes différents : la démarche doit être engagée dès la proposition d’embauche et suivie comme un approvisionnement long."
      ],
      [
        "En quoi un aménagement médical diffère-t-il d’un aménagement de bureaux ?",
        "Réseaux de fluides médicaux avec vérification par un tiers, cascades de pression entre zones propres et zones souillées, cloisonnement et hygiène pendant les travaux, revêtements nettoyables, protection radiologique des salles d’imagerie et accessibilité au titre des établissements recevant du public — rien de tout cela n’apparaît dans un aménagement tertiaire ordinaire."
      ],
      [
        "Peut-on ouvrir avant que le conventionnement soit effectif ?",
        "Matériellement oui, financièrement non. Recevoir des patients sans pouvoir télétransmettre reporte la charge sur eux et retarde vos encaissements : le conventionnement effectif est donc traité comme un jalon à part entière plutôt que fondu dans l’installation des praticiens."
      ],
      [
        "Quels contrôles précèdent l’ouverture ?",
        "Le plus souvent la commission de sécurité et l’attestation d’accessibilité, la vérification des fluides médicaux, le contrôle qualité des installations de radiologie et leur déclaration, l’instruction du dossier par l’ARS selon le régime applicable, et l’accréditation du laboratoire de biologie médicale si vous en exploitez un."
      ],
      [
        "Le modèle d’ouverture de centre de santé est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans compte ni filigrane."
      ]
    ]
  },
  'sap-s4hana-migration-plan': {
    card: "Conversion brownfield : remédiation du code spécifique, trois bascules à blanc, répétition générale et gel de gestion.",
    h1: "Plan de migration SAP S/4HANA",
    metaTitle: "Plan de migration SAP S/4HANA",
    metaDesc: "Plan gratuit de migration SAP S/4HANA : conversion brownfield, remédiation du code spécifique, trois bascules à blanc, gel de gestion et hypercare.",
    lead: "Un <strong>plan de migration SAP S/4HANA</strong> gratuit, construit autour de la décision qui commande tout le reste : convertir un système ECC existant sur place (<em>brownfield</em>) ou monter une nouvelle implémentation et y migrer les données (<em>greenfield</em>). Ce plan montre le chemin de la <em>conversion</em>, parce que c’est celui dont le calendrier est dominé par la remédiation du code spécifique et par des bascules à blanc répétées, et non par la conception des processus. Si vous montez au contraire un nouvel ERP de zéro, partez plutôt du <a href=\"/templates/erp-implementation-schedule.html\">planning de déploiement d’ERP</a>.",
    intro: "Une conversion n’est pas un projet qui s’arrête à la mise en service : elle s’arrête quand la fenêtre de gel se referme et que les comptes se réconcilient. Les barres ci-dessous placent les bascules à blanc et le gel là où ils se situent réellement :",
    phases: [
      [
        "Choix du chemin et évaluation de la faisabilité",
        "Rapports de <em>readiness check</em>, analyse des <em>simplification items</em>, la décision brownfield ou greenfield elle-même, le dimensionnement et la conception du paysage cible. <em>Jalon : chemin de conversion validé.</em>"
      ],
      [
        "Préparation et remédiation du code spécifique",
        "La partie qu’aucune équipe ne dimensionne correctement : analyse du code spécifique au regard de la base des <em>simplification items</em>, vagues de remédiation, retrait du code obsolète, et la préparation du modèle de données financier dont la conversion dépend. <em>Jalon : remédiation du code spécifique achevée.</em>"
      ],
      [
        "Conversion du bac à sable et du développement",
        "La première conversion technique sur une copie de bac à sable et le temps d’exécution qu’elle révèle, puis les systèmes de développement et de qualification, avec l’adaptation fonctionnelle et les tests unitaires derrière chacun. <em>Jalon : système de qualification converti.</em>"
      ],
      [
        "Cycles de tests",
        "Tests fonctionnels, d’intégration, d’interfaces, d’autorisations et de performance, plus la boucle d’anomalies, exécutés sur un système de qualification converti et non sur une construction neuve. <em>Jalon : critères de sortie des tests d’intégration atteints.</em>"
      ],
      [
        "Bascules à blanc et répétition générale",
        "Trois bascules à blanc sur des volumes de données de production, chacune chronométrée et chacune raccourcissant le mode opératoire, puis la répétition générale qui conditionne la décision de lancement. <em>Jalon : décision go/no-go après répétition générale.</em>"
      ],
      [
        "Gel, bascule et hypercare",
        "La fenêtre de gel de gestion, la conversion de production elle-même, la validation et la réconciliation, la remise à disposition des utilisateurs, et la période d’hypercare avant le transfert au support. <em>Jalon : sortie d’hypercare.</em>"
      ]
    ],
    callout: "Deux choses coulent les plannings de conversion. La première est le code spécifique : le rapport de <em>readiness check</em> listera des milliers de constats, pour la plupart triviaux et une poignée structurants, et tant que personne ne les a triés vous n’avez pas une estimation — vous avez un nombre d’objets. La seconde est le gel de gestion. Les équipes prévoient un week-end et découvrent que le gel des écritures, des données de base et des transactions ouvertes commence en réalité plusieurs jours plus tôt et ne se lève qu’une fois la réconciliation validée. Planifiez le gel comme un événement de gestion, avec des responsables nommés, et non comme une fenêtre technique — et laissez les bascules à blanc vous dire sa durée réelle plutôt que d’en décider à l’avance.",
    customize: [
      "S’il s’agit d’une nouvelle implémentation et non d’une conversion, supprimez les phases de remédiation et de bascule à blanc et reconstruisez autour de la conception des processus : les formes sont réellement différentes.",
      "Posez d’abord le week-end de bascule en production et remontez à rebours ; les bascules à blanc sont la seule estimation fiable de sa durée.",
      "Découpez la remédiation du code spécifique en vagues par propriétaire d’objet, et non par nombre d’objets, pour que les barres correspondent à qui fait réellement le travail.",
      "Allongez la fenêtre de gel si vos volumes de transactions sont élevés en fin de période, et évitez de faire passer la bascule au-dessus d’une clôture d’exercice.",
      "Ajoutez une ligne par interface et par système satellite : une conversion casse généralement les intégrations avant de casser SAP lui-même.",
      "Ajoutez une quatrième bascule à blanc si la troisième ne tient toujours pas dans la fenêtre disponible.",
      "Prévoyez l’information-consultation du CSE si la conversion modifie l’organisation du travail, et faites-en une dépendance des vagues de formation plutôt qu’une découverte de dernière minute."
    ],
    tips: [
      "<strong>Menez la première bascule à blanc tôt et mal.</strong> Son rôle est de révéler ce qui manque au mode opératoire, pas de réussir. Ce sont les suivantes qui doivent être propres.",
      "<strong>Triez le rapport de readiness, ne le comptez pas.</strong> Mille constats peuvent représenter deux semaines de travail ou six mois, et seul le tri vous dira lequel.",
      "<strong>Traitez la répétition générale comme un vrai point de passage.</strong> Si la répétition ne tient pas dans la fenêtre prévue, la bascule de production n’y tiendra pas davantage — c’est exactement pour cela qu’on la fait.",
      "<strong>Gelez la gestion, pas seulement le système.</strong> Publiez ce que chacun peut et ne peut pas faire chaque jour de la fenêtre, bien avant qu’elle ne commence.",
      "<strong>Réconciliez avant de rendre la main.</strong> Soldes comptables, postes ouverts et quantités en stock validés au regard des chiffres d’avant conversion : voilà le vrai critère de mise en service, pas un écran vert."
    ],
    faq: [
      [
        "Combien de temps dure une migration SAP S/4HANA ?",
        "Une conversion de système court couramment douze à vingt mois selon le volume de code spécifique et le nombre d’interfaces. Le modèle retient environ seize mois. Les nouvelles implémentations varient bien davantage, parce que leur calendrier est commandé par la conception des processus et non par la remédiation."
      ],
      [
        "Quelle différence entre brownfield et greenfield ?",
        "Le brownfield est une conversion de système : vous conservez votre paramétrage, votre historique et votre code spécifique, et vous convertissez le système sur place. Le greenfield est une nouvelle implémentation dans laquelle vous migrez des données choisies. Les plannings brownfield sont dominés par la remédiation du code spécifique et les bascules à blanc ; les plannings greenfield le sont par la conception des processus et la conduite du changement. Ce modèle montre le chemin brownfield."
      ],
      [
        "En quoi cela diffère-t-il du planning de déploiement d’ERP ?",
        "Le <a href=\"/templates/erp-implementation-schedule.html\">planning de déploiement d’ERP</a> suppose que vous sélectionnez et implémentez un système de zéro — choix de l’éditeur, conception des processus, paramétrage, reprise de données et formation. Ce plan-ci suppose que SAP tourne déjà et que vous le convertissez : les phases lourdes sont donc la remédiation du code spécifique et les bascules à blanc répétées."
      ],
      [
        "Combien de bascules à blanc faut-il ?",
        "Trois est le chiffre de planification habituel, et le modèle en retient trois, suivies d’une répétition générale. Chacune déroule le mode opératoire complet sur des volumes de production et est chronométrée ; si la troisième déborde encore de la fenêtre disponible, ajoutez-en une quatrième plutôt que de comprimer la vraie."
      ],
      [
        "Quelle doit être la durée du gel de gestion ?",
        "Plus longue que la bascule technique. Les écritures, les modifications de données de base et la clôture des transactions ouvertes se gèlent typiquement plusieurs jours avant le début de la conversion et le restent jusqu’à validation de la réconciliation. Dimensionnez-la à partir des durées mesurées en bascule à blanc plutôt qu’au jugé, et annoncez-la aux directions métier des semaines à l’avance."
      ],
      [
        "Le modèle SAP S/4HANA est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans compte ni filigrane."
      ]
    ]
  },
  'iso-14001-certification-plan': {
    card: "Analyse environnementale, veille réglementaire, objectifs, maîtrise opérationnelle, audit interne et audit de certification en deux étapes.",
    h1: "Plan de certification ISO 14001",
    metaTitle: "Plan de certification ISO 14001",
    metaDesc: "Plan gratuit de certification ISO 14001 : analyse environnementale, veille réglementaire, objectifs, maîtrise opérationnelle, audits étape 1 et étape 2.",
    lead: "Un <strong>plan de certification ISO 14001</strong> gratuit, organisé autour des deux registres qui constituent le travail réel d’un système de management environnemental : l’analyse environnementale — aspects et impacts — et le registre des obligations de conformité, alimenté par la veille réglementaire. Tout ce qui vient ensuite — objectifs, maîtrise opérationnelle, surveillance, formation — en découle, et c’est pour cela que les plans qui commencent par les objectifs s’enlisent. La mécanique d’audit est la même que celle du <a href=\"/templates/iso-9001-certification-plan.html\">plan de certification ISO 9001</a> et du <a href=\"/templates/iso-27001-certification-plan.html\">plan de certification ISO 27001</a>.",
    intro: "Un organisme certificateur accrédité évalue un SME en deux visites séparées par un intervalle obligatoire, et il échantillonne des enregistrements qui n’existent que si le système a réellement fonctionné. Les barres traduisent ces deux réalités :",
    phases: [
      [
        "Domaine d’application, contexte et diagnostic d’écart",
        "Périmètre du SME, enjeux internes et externes, parties intéressées, diagnostic d’écart au regard de la norme, politique environnementale, et choix de l’organisme certificateur accrédité par le COFRAC — c’est à ce moment que les deux dates d’audit se réservent. <em>Jalon : périmètre et politique approuvés.</em>"
      ],
      [
        "Analyse environnementale et obligations de conformité",
        "Le cœur du plan : identification des aspects environnementaux sur l’ensemble des activités, évaluation de leur significativité selon une méthode documentée, et construction en parallèle du registre des obligations légales et autres — arrêté préfectoral d’autorisation ou d’enregistrement ICPE lorsque le site est classé, autorisations de rejet, obligations déchets et responsabilité élargie du producteur — entretenu par une veille réglementaire datée. <em>Jalon : analyse environnementale et registre des obligations approuvés.</em>"
      ],
      [
        "Objectifs, cibles et programmes",
        "Des objectifs dérivés des aspects significatifs et des obligations, avec cibles, indicateurs, moyens et responsables nommés — et non des intentions rédigées avant que les registres n’existent. <em>Jalon : objectifs et programmes validés.</em>"
      ],
      [
        "Maîtrise opérationnelle et situations d’urgence",
        "Procédures de maîtrise opérationnelle pour les aspects significatifs, gestion des déchets, des rejets et des émissions, maîtrise des fournisseurs et des entreprises extérieures, compétence et sensibilisation du personnel, et l’exercice de situation d’urgence — un exercice de confinement de pollution accidentelle, par exemple. <em>Jalon : maîtrise opérationnelle en place.</em>"
      ],
      [
        "Fonctionnement, surveillance et accumulation des enregistrements",
        "La phase qui ne se comprime pas : faire tourner le SME assez longtemps pour que les données de surveillance, les évaluations de conformité, les registres de déchets et un exemple réel de maîtrise des changements existent effectivement. <em>Jalon : enregistrements de surveillance disponibles.</em>"
      ],
      [
        "Audit interne, revue de direction et audit en deux étapes",
        "L’audit interne, ses non-conformités et les actions correctives, la revue de direction, puis l’étape 1, l’intervalle de traitement des écarts, et l’étape 2. <em>Jalon : certificat délivré.</em>"
      ]
    ],
    callout: "L’analyse environnementale est le document que l’auditeur ouvrira en premier, et si elle est mince tout le reste du système s’effondre avec elle. Elle doit couvrir les conditions normales, dégradées et d’urgence, et la cotation de significativité doit reposer sur une méthode que vous pouvez expliquer plutôt que sur une couleur choisie par quelqu’un. Le registre des obligations de conformité est le second document porteur : il recense les autorisations, arrêtés préfectoraux, prescriptions et engagements qui vous sont applicables, et la norme exige d’évaluer périodiquement votre conformité au regard de ce registre — l’évaluation doit donc avoir eu lieu avant l’étape 2, et non être planifiée après.",
    customize: [
      "Choisissez l’organisme certificateur tôt et figez la date d’étape 2 ; tout ce qui précède devient un compte à rebours plutôt qu’une estimation.",
      "Éclatez les lignes d’identification des aspects en une ligne par site, par procédé ou par activité — une ligne unique masque l’effort réel.",
      "Laissez au moins six semaines entre l’étape 1 et l’étape 2 pour que les écarts relevés à l’étape 1 puissent réellement être soldés.",
      "Allongez la phase de fonctionnement si certaines de vos obligations s’évaluent annuellement : il vous faut au moins un cycle de preuves.",
      "Ajoutez des lignes pour les renouvellements d’autorisation et les inspections de l’inspection des installations classées qui tombent dans la fenêtre, puisqu’elles mobilisent les mêmes personnes.",
      "Si vous visez aussi l’enregistrement EMAS, ajoutez les lignes propres au règlement européen — déclaration environnementale validée par un vérificateur et enregistrement auprès de l’autorité compétente — sans les fondre dans les barres ISO 14001 : ce sont deux dispositifs distincts.",
      "Ajoutez l’audit de surveillance de la première année pour que le SME reste doté de moyens une fois le certificat obtenu."
    ],
    tips: [
      "<strong>Construisez les registres avant les objectifs.</strong> Des objectifs rédigés d’abord visent presque toujours des aspects non significatifs, et l’auditeur vous demandera comment vous avez décidé.",
      "<strong>Couvrez les conditions dégradées et d’urgence.</strong> Démarrage, arrêt, déversement accidentel et incendie sont les scénarios où la plupart des analyses environnementales sont visiblement incomplètes.",
      "<strong>Menez une véritable évaluation de conformité.</strong> La norme attend une évaluation périodique au regard de votre registre d’obligations, avec des enregistrements — pas une déclaration affirmant que vous êtes conforme.",
      "<strong>Faites l’exercice d’urgence avant l’étape 2.</strong> C’est l’une des rares preuves que vous pouvez programmer au lieu d’attendre.",
      "<strong>Tenez la veille réglementaire à jour et datée.</strong> Une veille dont la dernière mise à jour remonte à dix-huit mois est un écart en soi, indépendamment de votre conformité réelle.",
      "<strong>Gardez ISO 14001, ISO 9001 et ISO 27001 distinctes.</strong> Elles partagent la même structure de haut niveau et peuvent être auditées ensemble, mais ce sont trois certifications accréditées séparées, aux contenus différents : environnement, qualité et sécurité de l’information respectivement."
    ],
    faq: [
      [
        "Combien de temps faut-il pour obtenir la certification ISO 14001 ?",
        "Couramment neuf à quinze mois en partant de zéro. Le modèle retient environ treize mois. Les parties qui résistent à la compression sont le travail d’analyse environnementale et de registre des obligations en amont, et la période de fonctionnement qui produit les enregistrements de surveillance en aval."
      ],
      [
        "Qu’est-ce que l’analyse environnementale ?",
        "Un inventaire structuré des façons dont vos activités, produits et services interagissent avec l’environnement — émissions, rejets, déchets, consommation de ressources, usage des sols — et des impacts qui en résultent, cotés en significativité dans des conditions normales, dégradées et d’urgence. C’est l’entrée de presque tout le reste du SME, et c’est pourquoi le modèle la place avant les objectifs."
      ],
      [
        "En quoi ISO 14001 diffère-t-elle d’ISO 9001 ?",
        "Elles partagent la même structure de système de management et la même mécanique d’audit en deux étapes, mais le contenu diffère entièrement : ISO 9001 est un système de management de la qualité centré sur les exigences client et la conformité des processus, ISO 14001 est un système de management environnemental bâti sur les aspects environnementaux et les obligations de conformité. Voyez le <a href=\"/templates/iso-9001-certification-plan.html\">plan de certification ISO 9001</a> si vous visez les deux."
      ],
      [
        "Quelle différence entre ISO 14001 et l’EMAS ?",
        "ISO 14001 est une norme internationale certifiée par un organisme accrédité. L’EMAS est le système européen de management et d’audit environnemental : il reprend les exigences d’ISO 14001, y ajoute une déclaration environnementale publique validée par un vérificateur et une évaluation de la conformité réglementaire plus explicite, et se conclut par un enregistrement auprès de l’autorité compétente plutôt que par un certificat. Ce sont deux dispositifs complémentaires, pas deux noms pour la même chose."
      ],
      [
        "Peut-on certifier ISO 14001 et ISO 27001 ensemble ?",
        "Elles peuvent être auditées lors d’une visite intégrée et partagent la structure des chapitres, mais ce sont des certifications accréditées séparées, avec des certificats et des périmètres distincts. Le <a href=\"/templates/iso-27001-certification-plan.html\">plan de certification ISO 27001</a> couvre le volet sécurité de l’information ; ne supposez pas que les preuves de l’une satisfont l’autre."
      ],
      [
        "Que se passe-t-il entre l’étape 1 et l’étape 2 ?",
        "L’étape 1 est une revue documentaire et de maturité, et elle relève presque toujours des constats — le plus souvent une analyse environnementale incomplète ou une évaluation de conformité qui n’a pas été faite. L’étape 2 est l’audit complet du fonctionnement du SME. Le modèle laisse une fenêtre d’actions correctives entre les deux, parce que l’étape 2 ne sera pas concluante tant que les constats de l’étape 1 ne sont pas soldés."
      ],
      [
        "Le modèle ISO 14001 est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans compte ni filigrane."
      ]
    ]
  },
  'product-recall-plan': {
    card: "Heure zéro, évaluation du risque, signalement DGCCRF et RappelConso, information des clients, récupération, contrôles d’efficacité et clôture.",
    h1: "Plan de rappel de produit",
    metaTitle: "Plan de rappel de produit",
    metaDesc: "Plan gratuit de rappel de produit : heure zéro, évaluation du risque, signalement à la DGCCRF, RappelConso, récupération, efficacité et clôture.",
    lead: "Un <strong>plan de rappel de produit</strong> gratuit, posé sur la seule horloge qui compte : celle qui démarre à l’instant où vous détenez une information laissant penser qu’un produit est dangereux ou non conforme. Les plannings de rappel sont particuliers parce qu’une grande partie de la séquence relève de la loi et non de votre choix — délais de signalement, obligations de traçabilité et comptes rendus d’efficacité sont fixés par la réglementation, et être en retard est une exposition juridique et non un simple décalage. Les barres sont exprimées en jours depuis l’heure zéro, pour que l’on voie ce qui doit se produire dans la première semaine.",
    intro: "Les premières lignes se comptent en heures, pas en semaines. Tout ce qui suit la décision de signalement dépend de la rapidité avec laquelle les trois premières sont exécutées :",
    phases: [
      [
        "Heure zéro — détecter, contenir, réunir",
        "Le signal arrive, la cellule de crise se réunit, les expéditions sont bloquées, et les lots et numéros de série concernés sont tracés. C’est la phase qui se mesure en heures. <em>Jalon : cellule réunie et expéditions bloquées.</em>"
      ],
      [
        "Évaluation du risque et décision de rappel",
        "Caractérisation du danger, évaluation de l’exposition et de la gravité, classement, décision sur le niveau de rappel — consommateur, détaillant ou grossiste — et décision formelle de rappel ou de simple retrait. <em>Jalon : décision de rappel consignée.</em>"
      ],
      [
        "Signalement aux autorités",
        "Détermination des autorités compétentes selon la catégorie de produit et les marchés concernés — la DGCCRF pour les produits de consommation, l’ANSM pour les médicaments et les dispositifs médicaux, la DGAL et les services vétérinaires départementaux pour les denrées d’origine animale — constitution du dossier de signalement, dépôt dans le délai applicable, publication sur RappelConso, notification au Safety Gate de l’Union européenne lorsque le produit circule dans plusieurs États membres, et accord avec l’autorité sur la communication au public. <em>Jalon : autorités notifiées.</em>"
      ],
      [
        "Information des clients et du public",
        "Cascade vers les distributeurs et les enseignes, contact direct des clients lorsque vos fichiers le permettent, avis de rappel affiché sur les lieux de vente, site internet et communiqué de presse, et ouverture d’une ligne de contact consommateurs. <em>Jalon : avis public diffusé.</em>"
      ],
      [
        "Récupération, quarantaine et destination",
        "Logistique de retour, réception et rapprochement avec les quantités mises en distribution, quarantaine physiquement sécurisée, et décision de destination — reconditionnement, destruction ou remise sur le marché. <em>Jalon : rapprochement des quantités achevé.</em>"
      ],
      [
        "Contrôles d’efficacité, cause racine et clôture",
        "Contrôles d’efficacité à intervalles définis, investigation de cause racine et actions correctives, comptes rendus d’avancement à l’autorité, rapport final et clôture formelle. <em>Jalon : rappel clôturé par l’autorité.</em>"
      ]
    ],
    callout: "Les délais de signalement sont fixés par la réglementation et ils varient selon la catégorie de produit, la gravité du danger et le marché concerné : une denrée alimentaire, un dispositif médical et un produit de consommation courante ne relèvent ni des mêmes textes ni des mêmes autorités, et un produit vendu dans plusieurs pays peut être soumis à plusieurs régimes simultanément. Ne planifiez pas contre un chiffre unique et universel. Tenez à jour la liste des autorités compétentes pour chaque marché et chaque catégorie que vous commercialisez, avec le fait générateur et le délai correspondants, et faites-la valider par votre conseil juridique avant l’incident plutôt que pendant. Les durées portées ci-dessous sont des marqueurs courts à remplacer par vos obligations vérifiées.",
    customize: [
      "Remplacez les durées de signalement par les délais réellement applicables à votre catégorie de produit sur chaque marché — vérifiés avec votre conseil, pas supposés.",
      "Ajoutez une ligne de signalement par autorité et par pays si vous exportez : elles courent en parallèle et leurs exigences de contenu diffèrent.",
      "Ajoutez une ligne dédiée à la publication sur RappelConso et une autre à la notification au Safety Gate européen : ce sont deux démarches distinctes, avec des destinataires et des contenus différents.",
      "Fixez explicitement la ligne de niveau de rappel — consommateur, détaillant ou grossiste : elle change entièrement la phase de récupération.",
      "Distinguez le retrait du rappel. Retirer un produit de la vente et demander aux consommateurs de rapporter ce qu’ils détiennent déjà sont deux opérations aux logistiques et aux communications différentes.",
      "Étendez les contrôles d’efficacité aux intervalles attendus par l’autorité, et maintenez-les jusqu’à ce que le taux de retour se stabilise.",
      "Ajoutez des lignes pour la déclaration à l’assureur et, si le danger a causé des dommages corporels, pour la conservation des preuves en vue d’un contentieux.",
      "Répétez ce plan sous forme de rappel à blanc sur un numéro de lot réel au moins une fois par an : un exercice de traçabilité qui prend plusieurs jours est un écart."
    ],
    tips: [
      "<strong>Tracez avant d’annoncer.</strong> Un avis public qui désigne les mauvais numéros de lot doit être réémis, et une réémission détruit votre crédibilité auprès de l’autorité comme des consommateurs.",
      "<strong>Affectez une personne à l’horloge.</strong> Quelqu’un dont l’unique tâche est de suivre les échéances de signalement par pays et par autorité, parce que le travail opérationnel absorbera tous les autres.",
      "<strong>Rapprochez des quantités mises en distribution.</strong> Le taux de retour est le chiffre que l’autorité regarde, et il est incalculable sans savoir exactement ce qui est sorti.",
      "<strong>Maintenez la quarantaine physiquement sécurisée.</strong> Un produit retourné qui repart en stock par inadvertance est un second rappel par-dessus le premier.",
      "<strong>Ne confondez pas la cause racine et le rappel.</strong> La récupération a son horloge propre ; l’investigation court en parallèle et se termine plus tard, et l’autorité attend de voir les deux."
    ],
    faq: [
      [
        "Sous quel délai faut-il signaler un rappel de produit aux autorités ?",
        "Cela dépend du pays, de la catégorie de produit et de la gravité du danger — denrées alimentaires, dispositifs médicaux, véhicules, cosmétiques et produits de consommation courante relèvent de textes différents, et les faits générateurs de l’obligation diffèrent également. Il n’existe pas de délai universel unique, et un produit vendu dans plusieurs pays peut être soumis à plusieurs à la fois. Faites établir à l’avance par votre conseil juridique les obligations qui vous sont applicables et consignez-les dans le plan, plutôt que de vous fier à un chiffre lu quelque part."
      ],
      [
        "À qui signale-t-on un rappel en France ?",
        "Cela dépend du produit. La DGCCRF est l’autorité de référence pour les produits de consommation et les denrées, et le rappel est publié sur le site RappelConso ; l’ANSM traite les médicaments et les dispositifs médicaux ; la DGAL et les directions départementales en charge de la protection des populations interviennent pour les denrées d’origine animale. Au-dessus s’ajoute le Safety Gate européen, qui diffuse l’alerte aux autres États membres. Un même incident peut relever de plusieurs de ces canaux, et il faut avoir identifié le vôtre avant l’incident."
      ],
      [
        "Qu’est-ce qu’un contrôle d’efficacité ?",
        "Une vérification structurée du fait que les personnes qui devaient recevoir l’avis de rappel l’ont effectivement reçu et en ont tenu compte — contact d’un échantillon de distributeurs et d’enseignes, confirmation du retrait des rayons, et mesure de la part du produit distribué qui a été retournée ou justifiée. Les autorités les attendent généralement à intervalles définis, et le modèle en programme plusieurs plutôt qu’un seul."
      ],
      [
        "Que signifie le niveau de rappel ?",
        "Jusqu’où le rappel descend dans la chaîne de distribution : le niveau grossiste s’arrête aux distributeurs, le niveau détaillant atteint les magasins, le niveau consommateur atteint les utilisateurs finaux. Il découle de l’évaluation du risque, et il modifie la logistique de récupération, l’approche de communication et le coût d’un ordre de grandeur : le modèle en fait donc une ligne de décision explicite."
      ],
      [
        "Combien de temps dure un rappel de produit ?",
        "La phase de signalement et de récupération se mesure généralement en jours et en semaines ; le modèle court sur environ quatre-vingt-dix jours jusqu’à la clôture. L’investigation de cause racine, les actions correctives et la clôture par l’autorité s’étendent souvent plus loin, et les contrôles d’efficacité se poursuivent jusqu’à stabilisation du taux de retour."
      ],
      [
        "Faut-il organiser un rappel à blanc ?",
        "Oui, et la plupart des référentiels qualité et des audits clients l’attendent chaque année. Un rappel à blanc sur un numéro de lot réel éprouve la traçabilité sous contrainte de temps, et c’est le moyen le moins coûteux de découvrir que vos enregistrements ne permettent pas de reconstituer une liste de distribution assez vite."
      ],
      [
        "Le modèle de plan de rappel est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans compte ni filigrane."
      ]
    ]
  },
  'digital-transformation-roadmap': {
    card: "Vagues pluriannuelles, socles données et identité d’abord, mesure des bénéfices après chaque vague, gouvernance qui survit au sponsor.",
    h1: "Feuille de route de transformation numérique",
    metaTitle: "Feuille de route de transformation numérique",
    metaDesc: "Feuille de route gratuite de transformation numérique : vagues pluriannuelles, socles données et identité, bénéfices mesurés et gouvernance durable.",
    lead: "Une <strong>feuille de route de transformation numérique</strong> gratuite, construite comme une suite de vagues plutôt que comme un programme avec une date de fin. L’idée directrice est celle de capacité dépendante : les socles de données, d’identité et d’intégration doivent atterrir avant le travail visible, les bénéfices se mesurent après chaque vague au lieu d’être remis à une revue d’investissement en troisième année, et le rythme de gouvernance est conçu pour survivre au départ du sponsor — ce qui, sur trois ans, arrivera probablement.",
    intro: "Chaque vague livre quelque chose d’utilisable et chacune est suivie d’une revue de bénéfices qui peut modifier le contenu de la suivante. Cette boucle de rétroaction est tout l’intérêt de la démarche :",
    phases: [
      [
        "Stratégie, état des lieux et gouvernance",
        "Évaluation de l’existant, mesure de la maturité numérique, cible d’organisation, dossier de valeur, et mise en place du rythme de gouvernance et du bureau de portefeuille qui survivront aux personnes. <em>Jalon : feuille de route et gouvernance approuvées.</em>"
      ],
      [
        "Vague 1 — les socles",
        "La vague ingrate dont tout le reste dépend : identité et gestion des accès, couche d’intégration, plateforme de données et sa gouvernance — registre des traitements et conformité au RGPD compris — zone d’atterrissage cloud et socle de sécurité. Rien de visible pour le client ne sort ici. <em>Jalon : socles en service.</em>"
      ],
      [
        "Vague 2 — numérisation des processus cœur",
        "Automatisation des processus finance, achats et ressources humaines, gestion des flux et des documents, facturation électronique, et retrait des processus manuels et tableurs qu’ils remplacent. <em>Jalon : processus cœur migrés.</em>"
      ],
      [
        "Vague 3 — capacités orientées client",
        "Portail client, libre-service, expérience mobile, données client unifiées et refonte des parcours — livrables uniquement parce que la vague 1 a construit l’identité et l’intégration en dessous. <em>Jalon : capacités client lancées.</em>"
      ],
      [
        "Vague 4 — analytique et automatisation intelligente",
        "Analytique en libre-service, modèles prédictifs et automatisation des décisions à fort volume, avec la gouvernance des modèles nécessaire pour les exploiter de façon responsable. <em>Jalon : capacités analytiques adoptées.</em>"
      ],
      [
        "Réalisation des bénéfices et pérennisation",
        "Revues de bénéfices après chaque vague, mesure de l’adoption et du changement, transfert des compétences vers les métiers, décommissionnement du patrimoine applicatif et rafraîchissement annuel de la feuille de route. <em>Jalon : programme passé en régime courant.</em>"
      ]
    ],
    callout: "L’échec récurrent consiste à faire d’abord le travail visible. Portails, tableaux de bord et démonstrations d’automatisation sont ce que les sponsors réclament, mais chacun dépend silencieusement de l’identité, de l’intégration et de données dignes de confiance : les construire avant les socles produit une vague 3 discrètement refaite pendant la vague 4. Le second échec consiste à repousser les bénéfices : si la première revue de bénéfices a lieu au bout de trois ans, plus personne n’est là pour assumer la promesse initiale. Placez une revue de bénéfices immédiatement après chaque vague, publiez le chiffre qu’il soit flatteur ou non, et laissez-le modifier le contenu de la vague suivante.",
    customize: [
      "Renommez les vagues dans votre propre vocabulaire de capacités, mais gardez les socles en premier : cet ordonnancement est la substance même du plan.",
      "Fixez la durée des vagues à ce que votre organisation peut absorber ; six à neuf mois par vague est courant, et les vagues plus courtes échouent sur la capacité de changement plutôt que sur la livraison.",
      "Ajoutez une revue de bénéfices après chaque vague, chacune avec un responsable nommé qui était présent lorsque le bénéfice a été annoncé.",
      "Ajoutez explicitement les lignes de décommissionnement : les transformations qui n’éteignent jamais rien finissent par financer deux patrimoines applicatifs.",
      "Insérez une ligne de remise à plat de la gouvernance à chaque changement de direction, cycle budgétaire ou réorganisation attendus.",
      "Placez l’information-consultation du CSE au bon endroit de chaque vague qui modifie l’organisation du travail : c’est une dépendance datée, et elle se découvre mal six semaines avant un déploiement.",
      "Découpez chaque vague en lignes par chantier une fois son périmètre arrêté ; la barre unique n’est utile qu’au niveau de la feuille de route."
    ],
    tips: [
      "<strong>Séquencez par dépendance, pas par enthousiasme.</strong> La bonne question pour tout candidat à la vague 1 est : qu’est-ce qui casse en vague 3 si cela n’existe pas ?",
      "<strong>Mesurez l’adoption, pas le déploiement.</strong> Une plateforme en service utilisée par quinze pour cent des personnes n’a rien livré, et seul un indicateur d’adoption vous le dira assez tôt pour réagir.",
      "<strong>Partez du principe que le sponsor changera.</strong> Écrivez le dossier de valeur, les décisions et les mesures de référence sous une forme qu’un successeur peut reprendre sans vous.",
      "<strong>Tenez-vous à un seul modèle d’intégration.</strong> Des vagues qui inventent chacune leur approche d’intégration recréent exactement la fragmentation que le programme devait supprimer.",
      "<strong>Décommissionnez à une date.</strong> Un retrait d’application non planifié et sans responsable n’a jamais lieu, et les économies du dossier de valeur en dépendent."
    ],
    faq: [
      [
        "Quelle est la durée d’une feuille de route de transformation numérique ?",
        "Typiquement deux à quatre ans sur trois ou quatre vagues. Le modèle court sur environ trois ans. Les feuilles de route plus courtes sont en général de simples programmes ; les plus longues cessent d’être des plans pour devenir des intentions : rafraîchissez chaque année plutôt que de prolonger."
      ],
      [
        "Pourquoi les socles doivent-ils venir en premier ?",
        "Parce que portails client, analytique et automatisation reposent tous sur le fait de savoir qui est un utilisateur, de faire circuler les données entre systèmes et de pouvoir s’y fier. Les construire sur une identité et une intégration fragmentées fonctionne en démonstration et échoue en capacité, et la reconstruction atterrit dans la vague suivante."
      ],
      [
        "Qu’est-ce que la réalisation des bénéfices, et pourquoi après chaque vague ?",
        "C’est la mesure de la valeur réellement obtenue — coût, délai de traitement, adoption, chiffre d’affaires. La faire après chaque vague plutôt qu’à la fin garantit que la mesure a lieu pendant que les personnes qui ont fait la promesse sont encore en poste, et que le résultat peut modifier le contenu de la vague suivante. Les revues de bénéfices repoussées deviennent immanquablement infalsifiables."
      ],
      [
        "Comment faire tenir la gouvernance à travers les changements de direction ?",
        "En rendant le rythme et les artefacts institutionnels plutôt que personnels : un comité de portefeuille permanent à cadence définie, des décisions documentées et des mesures de référence consignées là où un successeur les trouvera. Le modèle prévoit une ligne de remise à plat de la gouvernance exactement pour cette raison."
      ],
      [
        "Quel rapport avec un programme applicatif unique comme un ERP ?",
        "Une feuille de route séquence plusieurs programmes ; un plan de déploiement en conduit un seul. Si une vague contient un remplacement d’ERP, planifiez-le à part avec le <a href=\"/templates/erp-implementation-schedule.html\">planning de déploiement d’ERP</a> ou, pour une conversion SAP, avec le <a href=\"/templates/sap-s4hana-migration-plan.html\">plan de migration SAP S/4HANA</a>, et gardez la ligne de la feuille de route comme barre de synthèse."
      ],
      [
        "Le modèle de transformation numérique est-il gratuit ?",
        "Oui. Téléchargements Excel, PowerPoint et CSV gratuits, et édition en ligne gratuite, sans compte ni filigrane."
      ]
    ]
  },
  'qa-test-plan-schedule': {
    card: "Critères d’entrée et de sortie, environnement et jeux de données, phases superposées, boucle d’anomalies et non-régression.",
    h1: "Planning de plan de tests",
    metaTitle: "Planning de plan de tests logiciels",
    metaDesc: "Planning gratuit de plan de tests : critères d’entrée et de sortie, environnement et jeux de données, phases superposées, anomalies, non-régression.",
    lead: "Un <strong>planning de plan de tests</strong> gratuit dont la colonne vertébrale est faite de critères d’entrée et de sortie, et non d’une file d’attente de phases. Deux choses conditionnent tout le reste : un environnement de test stable et des jeux de données provisionnés. Ensuite, les phases se superposent — les tests d’intégration démarrent alors que les tests unitaires s’achèvent, la recette utilisateur commence sur les modules déjà prêts — et le calendrier est consommé bien moins par l’exécution des tests que par la boucle de tri, de correction et de nouvelle exécution qui court en dessous de tout.",
    intro: "Remarquez que les barres d’exécution se chevauchent et que la boucle d’anomalies court sur toute leur longueur. C’est à cela que ressemble un vrai planning de tests :",
    phases: [
      [
        "Stratégie de test et critères",
        "Stratégie, périmètre et priorisation par les risques, critères d’entrée et de sortie de chaque phase écrits avant le début de l’exécution, estimation de charge et plan de ressources. <em>Jalon : plan de tests et critères approuvés.</em>"
      ],
      [
        "Disponibilité de l’environnement et des données",
        "Le vrai point de passage. Construction de l’environnement, paramétrage et bouchons d’intégration, provisionnement et anonymisation des jeux de données — une exigence du RGPD dès qu’il s’agit d’un extrait de production — comptes et habilitations, et un test de fumée qui prouve l’environnement avant que quiconque y teste. <em>Jalon : critères d’entrée de l’environnement satisfaits.</em>"
      ],
      [
        "Conception des tests et automatisation",
        "Conception des conditions et des cas de test, traçabilité vers les exigences, cadre d’automatisation, constitution de la campagne de non-régression et scripts de tests de performance. <em>Jalon : cas de test prêts à l’exécution.</em>"
      ],
      [
        "Exécution — unitaire, intégration, système",
        "Des vagues d’exécution qui se chevauchent plutôt qu’une file d’attente : tests unitaires et de composants, tests d’intégration et d’interfaces, puis tests système et tests de sécurité. <em>Jalon : critères de sortie des tests système satisfaits.</em>"
      ],
      [
        "Boucle de tri, correction et nouvelle exécution",
        "La boucle qui consomme réellement le calendrier — comité de tri quotidien, affectation de gravité, cycles de correction, nouvelle exécution et impact sur la non-régression, et les décisions d’anomalies reportées. <em>Jalon : seuils d’anomalies atteints.</em>"
      ],
      [
        "Recette, non-régression et décision de mise en production",
        "Recette utilisateur par les métiers, non-régression complète, tirs de performance et de charge, revue de préparation à la mise en production et prononcé de la recette. <em>Jalon : mise en production prononcée.</em>"
      ]
    ],
    callout: "L’échec de planning le plus fréquent en test consiste à traiter l’environnement et les jeux de données comme une tâche plutôt que comme un point de passage. Si l’environnement est instable ou si les données ne couvrent pas les scénarios, les testeurs consomment quand même leurs journées mais produisent des anomalies portant sur l’environnement et non sur le produit — et ces heures sont irrécupérables. Écrivez les critères d’entrée de l’environnement, déroulez un test de fumée contre eux, et refusez de démarrer l’exécution tant qu’ils ne passent pas. Le second échec consiste à planifier la boucle d’anomalies comme de la marge. La correction et la nouvelle exécution ne sont pas des frais généraux autour du test : sur la plupart des projets, c’est la plus longue barre du planning, et elle doit être dessinée comme telle.",
    customize: [
      "Inscrivez de vrais critères d’entrée et de sortie dans les notes de chaque ligne de phase — taux de réussite, nombre d’anomalies ouvertes par gravité, couverture — pour que les points de passage soient vérifiables et non rhétoriques.",
      "Superposez les vagues d’exécution selon votre cadence de livraison ; les mettre bout à bout surestime presque toujours la durée totale et sous-estime le risque.",
      "Dimensionnez la boucle d’anomalies à partir de vos taux historiques de découverte et de correction, et non d’un pourcentage de la charge de test.",
      "Ajoutez une ligne par interface ou par système intégré si les tests d’intégration dépendent de partenaires qui maîtrisent leurs propres environnements.",
      "Avancez la recette utilisateur module par module si vous livrez par incréments plutôt qu’en une seule fois.",
      "Ajoutez une ligne de gel du code avant la non-régression, et gardez la non-régression après ce gel : une non-régression contre une version qui bouge n’est pas une non-régression.",
      "Ajoutez une ligne d’anonymisation si vos jeux de données sont issus de la production : c’est une tâche à part entière, avec un délai propre et une exigence de conformité derrière elle."
    ],
    tips: [
      "<strong>Rendez les critères de sortie chiffrés.</strong> « Tests terminés » n’est pas un point de passage ; « zéro anomalie ouverte de gravité 1, moins de cinq de gravité 2, 95 % des cas prévus exécutés » en est un.",
      "<strong>Provisionnez les jeux de données avant la fin de la conception des tests.</strong> Les concepteurs découvrent les manques de données, et le provisionnement a le délai le plus long de tout le plan.",
      "<strong>Triez quotidiennement pendant les pics d’exécution.</strong> Un comité de tri hebdomadaire signifie qu’une anomalie peut attendre cinq jours avant que quelqu’un décide qui la corrige.",
      "<strong>Protégez la non-régression du flux de corrections.</strong> Chaque correction tardive invalide une partie de la campagne, et c’est précisément à cela que sert la ligne de gel du code.",
      "<strong>Suivez le taux de découverte d’anomalies, pas leur nombre.</strong> Un taux de découverte qui baisse est le signal honnête qu’une phase converge ; un décompte brut ne vous dit à peu près rien."
    ],
    faq: [
      [
        "Que sont les critères d’entrée et de sortie d’un plan de tests ?",
        "Les critères d’entrée sont les conditions à réunir avant qu’une phase puisse commencer — environnement stable, version déployée, jeux de données chargés, test de fumée concluant. Les critères de sortie sont les conditions à réunir avant de la déclarer terminée — couverture d’exécution, taux de réussite, anomalies ouvertes par gravité. Les uns comme les autres doivent être chiffrés, arrêtés avant le début de l’exécution, et réellement opposés."
      ],
      [
        "Pourquoi les phases de test se chevauchent-elles au lieu de s’enchaîner ?",
        "Parce que les livraisons arrivent par incréments. Les tests d’intégration peuvent démarrer sur les modules déjà testés unitairement, et la recette peut commencer sur les parcours achevés pendant que les tests système se poursuivent ailleurs. Mettre les phases bout à bout gonfle le planning et masque la véritable contrainte, qui est généralement la boucle de correction."
      ],
      [
        "Combien de temps prévoir pour la correction des anomalies ?",
        "Dimensionnez-la à partir de votre propre historique : anomalies trouvées par jour de test, proportion nécessitant une correction, et délai moyen de correction plus nouvelle exécution. Sur la plupart des projets, cette boucle est la plus longue barre du planning. Allouer un pourcentage forfaitaire de la charge de test est la façon habituelle de dériver."
      ],
      [
        "Que faire si l’environnement de test n’est pas prêt ?",
        "Ne démarrez pas l’exécution. Tester sur un environnement instable produit des anomalies d’environnement et non de produit, et ce temps est irrécupérable. Le modèle fait de la disponibilité de l’environnement un jalon conditionnel précédé d’un test de fumée, précisément pour que cette décision soit visible au lieu d’être absorbée en silence."
      ],
      [
        "Quand la recette utilisateur doit-elle commencer ?",
        "Une fois les critères de sortie des tests système satisfaits sur le périmètre que la recette couvrira — et non une fois tous les tests système terminés partout. La recette est une validation métier : elle exige une version stable et des données réalistes, et la dérouler sur une version qui reçoit encore des corrections gaspille les utilisateurs métier, qui sont la ressource la plus rare du plan."
      ],
      [
        "Le modèle de plan de tests est-il gratuit ?",
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
