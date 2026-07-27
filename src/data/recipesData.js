// Base de datos de recetas inteligente para Alimentación Complementaria (Etapa 3)

export const availableIngredientsList = [
  'Avena',
  'Plátano',
  'Huevo',
  'Aguacate',
  'Zanahoria',
  'Camote / Batata',
  'Pollo',
  'Carne de res',
  'Pescado blanco',
  'Manzana',
  'Brócoli',
  'Lentejas',
  'Garbanzos',
  'Espinaca',
  'Arroz integral',
  'Calabacín / Zapallito',
  'Pera',
  'Yogur natural sin azúcar'
];

export const recipesDatabase = [
  {
    id: 'panqueques-platano-avena',
    title: 'Panqueques Suaves de Plátano y Avena',
    ageRange: '6m',
    method: ['BLW', 'BLISS', 'Finger food'],
    prepTime: '10 min',
    cookTime: '8 min',
    ironRich: true,
    constipationRelief: true,
    allergenFree: false,
    allergens: ['Huevo'],
    ingredients: ['Plátano', 'Avena', 'Huevo'],
    exactIngredients: [
      '1 plátano maduro mediano',
      '3 cucharadas de avena molida / copos finos',
      '1 huevo entero bien batido (o 1 yema si no has probado la clara)',
      'Un toque de canela en polvo (opcional)'
    ],
    instructions: [
      'En un tazón, machaca el plátano con un tenedor hasta obtener un puré fino.',
      'Añade el huevo batido y la avena molida. Mezcla bien hasta integrar.',
      'Calienta una sartén antiadherente a fuego bajo con apenas unas gotas de aceite de oliva o coco.',
      'Vierte cucharadas de la mezcla formando mini panqueques alargados (en forma de dedo).',
      'Cocina por 2-3 minutos hasta que aparezcan burbujitas, voltea y cocina 1-2 minutos más hasta que estén dorados y cocidos por dentro.',
      'Deja enfriar a temperatura ambiente antes de ofrecer en tiras alargadas.'
    ],
    storage: 'Refrigerar por 48 horas en recipiente hermético o congelar hasta 1 mes separado por papel encerado.',
    notes: 'Textura ultra suave que se deshace fácilmente en la encía del bebé. Aporta fibra y potasio.'
  },
  {
    id: 'pure-camote-pollo-hierro',
    title: 'Crema / Puré Suave de Camote y Pollo Rico en Hierro',
    ageRange: '6m',
    method: ['Tradicional', 'BLISS'],
    prepTime: '15 min',
    cookTime: '20 min',
    ironRich: true,
    constipationRelief: false,
    allergenFree: true,
    allergens: [],
    ingredients: ['Camote / Batata', 'Pollo', 'Zanahoria'],
    exactIngredients: [
      '1/2 camote (batata dulce) mediano pelado',
      '50g de pechuga o muslo de pollo sin piel ni hueso',
      '1/2 zanahoria pelada',
      '1 cucharadita de aceite de oliva virgen extra (añadir al final crudo)'
    ],
    instructions: [
      'Corta el camote, la zanahoria y el pollo en cubos pequeños.',
      'Cocina al vapor o en una pequeña olla con poca agua hirviendo durante 15-20 minutos hasta que todo esté tierno.',
      'Tritura o procesa con el tenedor/batidora agregando un chorrito del agua de cocción hasta lograr la consistencia deseada (puré suave para 6m o con pequeños grumos para 8m).',
      'Sirve tibio y añade la cucharadita de aceite de oliva en crudo justo antes de ofrecer.'
    ],
    storage: 'Guardar en la nevera hasta 24-48h o congelar en porciones individuales en cubeteras de silicona.',
    notes: 'El camote aporta betacarotenos y el pollo aporta Hierro no hemo de excelente digestión.'
  },
  {
    id: 'hamburguesas-lentejas-arroz',
    title: 'Hamburguesitas Nutritivas de Lentejas y Arroz',
    ageRange: '8m',
    method: ['BLW', 'BLISS'],
    prepTime: '20 min',
    cookTime: '15 min',
    ironRich: true,
    constipationRelief: true,
    allergenFree: true,
    allergens: [],
    ingredients: ['Lentejas', 'Arroz integral', 'Zanahoria'],
    exactIngredients: [
      '1/2 taza de lentejas cocidas (sin sal)',
      '2 cucharadas de arroz integral bien cocido',
      '1/4 de zanahoria rallada muy fina',
      '1 Cucharadita de aceite de oliva'
    ],
    instructions: [
      'En un tazón, aplasta las lentejas cocidas y el arroz con un tenedor hasta formar una pasta grumosa.',
      'Incorpora la zanahoria rallada fina.',
      'Con las manos limpias, forma pequeñas hamburguesitas alargadas del tamaño de la palma de tu bebé.',
      'Cocina a la plancha a fuego medio-bajo con unas gotas de aceite de oliva durante 3-4 minutos por lado hasta que estén firmes por fuera pero muy suaves por dentro.'
    ],
    storage: 'Congelar en crudo o cocidas hasta por 2 meses.',
    notes: 'Ricas en hierro vegetal y carbohidratos de absorción lenta. Ideales para practicar la pinza fina.'
  },
  {
    id: 'bastones-aguacate-sesamo',
    title: 'Bastones de Aguacate en Lluvia de Sésamo',
    ageRange: '6m',
    method: ['BLW', 'BLISS', 'Finger food'],
    prepTime: '5 min',
    cookTime: '0 min',
    ironRich: false,
    constipationRelief: true,
    allergenFree: false,
    allergens: ['Sésamo'],
    ingredients: ['Aguacate'],
    exactIngredients: [
      '1/2 aguacate maduro pero firme',
      '1 cucharadita de semillas de sésamo/ajonjolí molidas o avena en copos finos'
    ],
    instructions: [
      'Corta el aguacate a la mitad y retira el hueso.',
      'Corta gajos alargados del grueso de 2 dedos adultos.',
      'Pasa los bastones de aguacate por las semillas de sésamo molidas (esto crea una textura rugosa que evita que el aguacate se resbale de las manos del bebé).',
      'Ofrecer directamente en la bandeja de la trona.'
    ],
    storage: 'Consumir en el momento para evitar la oxidación del aguacate.',
    notes: 'Aporta grasas fundamentales para el desarrollo neurológico y cerebral del lactante.'
  },
  {
    id: 'compota-pera-ciruela-antiestreñimiento',
    title: 'Compota / Puré Antiestreñimiento de Pera y Ciruela',
    ageRange: '6m',
    method: ['Tradicional', 'BLW'],
    prepTime: '10 min',
    cookTime: '12 min',
    ironRich: false,
    constipationRelief: true,
    allergenFree: true,
    allergens: [],
    ingredients: ['Pera', 'Manzana'],
    exactIngredients: [
      '1 pera madura pelada y sin semillas',
      '2 ciruelas pasas sin hueso (o 1/2 ciruela fresca madura)',
      '3 cucharadas de agua pura'
    ],
    instructions: [
      'Corta la pera en cubos pequeños y remoja las ciruelas pasas en agua tibia por 10 minutos.',
      'Cocina al vapor la pera y las ciruelas durante 8-10 minutos hasta que estén muy tiernas.',
      'Procesa o machaca vigorosamente con el tenedor hasta obtener un puré aterciopelado.',
      'Ofrecer a cucharaditas o en premamaderas si se practica BLW.'
    ],
    storage: 'Refrigerar en frasco de vidrio cerrado por 3 días.',
    notes: 'Remedio natural altamente efectivo para regular el tránsito intestinal durante el inicio de sólidos.'
  },
  {
    id: 'croquetas-pescado-brocoli',
    title: 'Croquetitas de Pescado Blanco y Brócoli',
    ageRange: '8m',
    method: ['BLW', 'BLISS'],
    prepTime: '15 min',
    cookTime: '15 min',
    ironRich: true,
    constipationRelief: false,
    allergenFree: false,
    allergens: ['Pescado blanco', 'Huevo'],
    ingredients: ['Pescado blanco', 'Brócoli', 'Huevo', 'Avena'],
    exactIngredients: [
      '100g de lomo de pescado blanco sin espinas (merluza o bacalao)',
      '2 ramilletes de brócoli cocido al vapor',
      '1 huevo',
      '2 cucharadas de avena molida'
    ],
    instructions: [
      'Revisa el pescado minuciosamente con los dedos para descartar cualquier espina.',
      'Pica el pescado y el brócoli finamente.',
      'Mezcla con el huevo y la avena molida hasta obtener una masa moldeable.',
      'Forma croquetas alargadas y hornea a 180°C durante 12-15 minutos o cocina a la sartén a fuego bajo.'
    ],
    storage: 'Guardar en nevera por 48h o congelar por 1 mes.',
    notes: 'Excelente aporte de Proteína, Omega 3, Calcio y Hierro.'
  }
];
