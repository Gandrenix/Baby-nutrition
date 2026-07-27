// Datos de cortes seguros, texturas y progresión de alimentos por edad (Etapa 2)

export const feedingMethods = [
  {
    id: 'blw',
    name: 'Baby-Led Weaning (BLW)',
    subtitle: 'Alimentación autorregulada guiada por el bebé',
    description: 'El bebé se alimenta por sí solo desde el inicio usando sus propias manos. Se le ofrecen alimentos en trozos suaves con cortes seguros adecuados a su capacidad de agarre.',
    pros: [
      'Fomenta la autonomía y la motricidad fina.',
      'Mejora la autorregulación del apetito y la saciedad.',
      'Favorece la integración a las comidas familiares desde el primer día.'
    ],
    considerations: [
      'Requiere paciencia con el desorden (normal en el aprendizaje).',
      'Es fundamental dominar las pautas de cortes seguros y textura adecuada (debe deshacerse entre los dedos del adulto).'
    ],
    recommendedCuts: 'Bastones del tamaño de 2 dedos adultos (6-8m), luego pinza (8-12m).'
  },
  {
    id: 'tradicional',
    name: 'Método Tradicional (Papillas y Purés)',
    subtitle: 'Alimentación asistida con cuchara',
    description: 'El adulto ofrece los alimentos triturados en purés o papillas suaves con cuchara, progresando de texturas muy finas a grumosas y luego trozos.',
    pros: [
      'Permite controlar con precisión la cantidad ingerida.',
      'Genera menor desorden inicial.',
      'Brinda tranquilidad a familias temerosas del atragantamiento.'
    ],
    considerations: [
      'No se debe prolongar los purés finos más allá de los 8-9 meses (riesgo de rechazo a sólidos más adelante).',
      'Es importante respetar las señales de saciedad del bebé y no forzar la cuchara.'
    ],
    recommendedCuts: 'Purés lisos (6m) -> Purés chafados con tenedor (7-8m) -> Trozos blandos (9m+).'
  },
  {
    id: 'bliss',
    name: 'Método BLISS',
    subtitle: 'Baby-Led Introduction to SolidS',
    description: 'Una modificación del BLW diseñada por pediatras y nutricionistas que enfatiza la inclusión diaria de un alimento rico en Hierro, uno denso en energía y frutas/verduras.',
    pros: [
      'Reduce significativamente el riesgo de anemia por deficiencia de hierro.',
      'Asegura un aporte calórico óptimo en cada comida.',
      'Conserva todos los beneficios de la autonomía del BLW.'
    ],
    considerations: [
      'Requiere planificar el plato con el esquema: (1 Alimento rico en Hierro + 1 Calórico + 1 Fruta/Verdura rica en Vitamina C).'
    ],
    recommendedCuts: 'Trozos seguros en bastón rico en hierro (ej. carne suave, hamburguesitas de lentejas, yema de huevo).'
  },
  {
    id: 'perceptiva',
    name: 'Alimentación Perceptiva',
    subtitle: 'Crianza respetuosa en la mesa',
    description: 'Enfoque recomendado por la OMS basado en la comunicación recíproca entre el cuidador y el bebé: responder a las señales de hambre/saciedad con paciencia, empatía y sin distracciones (pantallas).',
    pros: [
      'Crea una relación saludable y positiva con la comida a largo plazo.',
      'Reduce la ansiedad de los padres frente al rechazo de alimentos.',
      'Se puede combinar con BLW o Papillas.'
    ],
    considerations: [
      'Evitar chantajes, premios, castigos o usar pantallas/juguetes para distractorizar mientras come.'
    ],
    recommendedCuts: 'Adaptado al desarrollo del bebé, siempre en un ambiente tranquilo y respetuoso.'
  }
];

export const foodCutsDatabase = [
  {
    id: 'aguacate',
    name: 'Aguacate / Palta',
    category: 'Frutas y Verduras',
    icon: '🥑',
    chokingHazard: false,
    ironRich: false,
    allergen: false,
    description: 'Excelente fuente de grasas saludables (Omega 9) y textura cremosa natural.',
    cutsByAge: {
      '6m': {
        title: '6 a 7 Meses - Bastones Gruesos',
        instructions: 'Corta en gajos o bastones largos del tamaño de 2 dedos adultos. Si se resbala de las manos del bebé, puedes dejar un trozo de cáscara limpia abajo como "mango" o rebozarlo en semillas de sésamo molidas o copos de avena.',
        texture: 'Blanda (debe deshacerse al presionar entre el pulgar y el índice).'
      },
      '8m': {
        title: '8 a 9 Meses - Trocitos y Chafado',
        instructions: 'Corta en cubos pequeños del tamaño de un garbanzo para practicar el agarre en pinza (dedo índice y pulgar) o sirve machacado con tenedor sobre pan integral tostado.',
        texture: 'Cubos blandos o chafado con grumos.'
      },
      '12m': {
        title: '10 a 12+ Meses - Tiras y Comida Familiar',
        instructions: 'Servir en rebanadas, ensaladas o picado en la mesa familiar.',
        texture: 'Trozos o rebanadas sin restricciones.'
      }
    }
  },
  {
    id: 'banana',
    name: 'Plátano / Banana',
    category: 'Frutas y Verduras',
    icon: '🍌',
    chokingHazard: false,
    ironRich: false,
    allergen: false,
    description: 'Rico en potasio, energía rápida y muy fácil de digerir.',
    cutsByAge: {
      '6m': {
        title: '6 a 7 Meses - Mitad con Mango o Bastones',
        instructions: 'Parte la banana a la mitad. Retira la cáscara de la mitad superior para que coman la pulpa y deja la cáscara en la mitad inferior para que funcione de agarre anti-deslizante. O separa la banana en sus 3 tiras naturales con los dedos.',
        texture: 'Maduro y suave.'
      },
      '8m': {
        title: '8 a 9 Meses - Rodajas finas o Trocitos',
        instructions: 'Corta longitudinalmente a la mitad y luego en trocitos pequeños, o machaca con tenedor.',
        texture: 'Blando, desmenuzable.'
      },
      '12m': {
        title: '10 a 12+ Meses - Rodajas o Entero pelado',
        instructions: 'Se puede ofrecer el plátano entero pelado para que muerda según su apetito.',
        texture: 'Rodajas o piezas enteras maduras.'
      }
    }
  },
  {
    id: 'zanahoria',
    name: 'Zanahoria',
    category: 'Frutas y Verduras',
    icon: '🥕',
    chokingHazard: true,
    chokingWarning: '¡ATENCIÓN! La zanahoria CRUDA es uno de los mayores riesgos de asfixia. NUNCA ofrecer cruda ni en rodajas redondas.',
    ironRich: false,
    allergen: false,
    description: 'Rica en betacarotenos y vitamina A. Requiere cocción adecuada.',
    cutsByAge: {
      '6m': {
        title: '6 a 7 Meses - Bastones al Vapor',
        instructions: 'Corta la zanahoria en bastones largos gruesos. Cocina al vapor o hervida hasta que esté TAN SUAVE que se aplaste totalmente entre tus dedos sin esfuerzo.',
        texture: 'Cocida ultra suave al vapor o puré espeso.'
      },
      '8m': {
        title: '8 a 9 Meses - Rallada fina cocida o Trocitos',
        instructions: 'Corta en trocitos minúsculos bien cocidos o rallada muy fina e incorporada en guiados/tortitas.',
        texture: 'Muy suave, tierna.'
      },
      '12m': {
        title: '10 a 12+ Meses - Tiras o Rallada cruda fina',
        instructions: 'Continúa ofreciendo bastones cocidos suaves. Rallada fina si ya domina la masticación.',
        texture: 'Cocida o rallada ultra fina.'
      }
    }
  },
  {
    id: 'huevo',
    name: 'Huevo (Alérgeno Principal)',
    category: 'Proteínas y Alérgenos',
    icon: '🥚',
    chokingHazard: false,
    ironRich: true,
    allergen: true,
    allergenWarning: 'Alérgeno común. Ofrecer bien cocido por la mañana durante 3 días consecutivos para descartar alergia.',
    description: 'Proteína de alto valor biológico y fuente de Hierro y Colina.',
    cutsByAge: {
      '6m': {
        title: '6 a 7 Meses - Tortilla en Tiras o Huevo Duro en Gajos',
        instructions: 'Prepara una tortilla bien cocida (sin sal) y córtala en tiras anchas del tamaño de 2 dedos. O huevo duro bien cocido cortado a lo largo en cuartos.',
        texture: 'Esponjoso y bien cocido (NUNCA yema cruda o tibia).'
      },
      '8m': {
        title: '8 a 9 Meses - Huevo Revuelto o Trocitos',
        instructions: 'Ofrecer huevo revuelto bien cocido en trocitos pequeños para agarre en pinza.',
        texture: 'Revuelto suave, bien cocido.'
      },
      '12m': {
        title: '10 a 12+ Meses - Preparaciones familiares',
        instructions: 'En tortilla, revuelto, en panqueques o duro picado.',
        texture: 'Firme bien cocido.'
      }
    }
  },
  {
    id: 'carne',
    name: 'Carne de Res / Vacuno',
    category: 'Proteínas y Alérgenos',
    icon: '🥩',
    chokingHazard: false,
    ironRich: true,
    description: 'La mejor fuente de HIERRO HEMO de alta absorción para prevenir la anemia infantil.',
    cutsByAge: {
      '6m': {
        title: '6 a 7 Meses - Tira Ancha para Chupar o Hamburguesita',
        instructions: 'Ofrece un trozo ancho de falda/corte magro cocido a la plancha/guisado (para que el bebé lo agarre y chupe los jugos llenos de hierro) O prepara hamburguesitas de carne molida muy suaves y jugosas en tiras.',
        texture: 'Tira firme para chupar jugo o hamburguesa suave de carne molida.'
      },
      '8m': {
        title: '8 a 9 Meses - Carne Desmenuzada o Molida en Trocitos',
        instructions: 'Carne desmenuzada finamente en hebras cortas o en guiso muy tierno.',
        texture: 'Hebras suaves o bolitas bien cocidas.'
      },
      '12m': {
        title: '10 a 12+ Meses - Trocitos picados',
        instructions: 'Carne picada suave en guisos familiares sin sal agregada.',
        texture: 'Trozos tiernos de fácil masticación.'
      }
    }
  },
  {
    id: 'manzana',
    name: 'Manzana',
    category: 'Frutas y Verduras',
    icon: '🍎',
    chokingHazard: true,
    chokingWarning: '¡ALERTA DE ASFIXIA! La manzana CRUDA es extremadamente dura. JAMÁS dar gajos crudos a bebés sin dentición completa.',
    ironRich: false,
    allergen: false,
    description: 'Fruta rica en fibra soluble (pectina) y vitaminas. Requiere cocción.',
    cutsByAge: {
      '6m': {
        title: '6 a 7 Meses - Al Vapor, Asada o Rallada fina',
        instructions: 'Asa la manzana al horno o cocínala al vapor pelada hasta que esté blanda como mantequilla. O sirve manzana cruda pelada RALLADA MUY FINA con micro-rallador.',
        texture: 'Asada ultra blanda o puré / rallada fina.'
      },
      '8m': {
        title: '8 a 9 Meses - Trocitos Asados',
        instructions: 'Manzana al horno o compota sin azúcar cortada en daditos muy suaves.',
        texture: 'Blanda horneada.'
      },
      '12m': {
        title: '10 a 12+ Meses - Láminas muy finas o Asada',
        instructions: 'Láminas peladas transparentes o asada/al vapor.',
        texture: 'Láminas finas o cocida.'
      }
    }
  },
  {
    id: 'uvas',
    name: 'Uvas y Tomates Cherry',
    category: 'Frutas y Verduras',
    icon: '🍇',
    chokingHazard: true,
    chokingWarning: '¡PELIGRO EXTREMO DE ASFIXIA! Jamás ofrecer uvas ni tomates cherry enteros o cortados en rodajas redondas.',
    ironRich: false,
    allergen: false,
    description: 'Frutas redondas que requieren corte longitudinal estricto.',
    cutsByAge: {
      '6m': {
        title: '6 a 7 Meses - Cortadas a lo Largo en 4 Partes',
        instructions: 'Lava, retira semillas si las tiene y CORTA A LO LARGO (verticalmente) en 4 partes alargadas. NUNCA cortes transversales (redondos).',
        texture: 'Cuartos longitudinales sin semillas.'
      },
      '8m': {
        title: '8 a 9 Meses - Cuartos Alargados Chafados',
        instructions: 'Mantener el corte longitudinal en 4 partes y aplastar ligeramente.',
        texture: 'Trocitos alargados finos.'
      },
      '12m': {
        title: '10 a 12+ Meses - Cortadas a lo largo en 4 o 2 partes',
        instructions: 'Continuar cortando a lo largo hasta los 4-5 años de edad.',
        texture: 'Corte longitudinal siempre.'
      }
    }
  },
  {
    id: 'pollo',
    name: 'Pollo / Pavo',
    category: 'Proteínas y Alérgenos',
    icon: '🍗',
    chokingHazard: false,
    ironRich: true,
    allergen: false,
    description: 'Excelente proteína magra con hierro y fósforo.',
    cutsByAge: {
      '6m': {
        title: '6 a 7 Meses - Muslo/Jamoncito de Pollo o Tira ancha',
        instructions: 'Ofrece el jamoncito de pollo cocido al agua/horno (retirando la piel, cartílagos y el huesito delgado suelto) para que lo sostenga del hueso grande. O tiras anchas de pechuga cocida en guiso jugoso.',
        texture: 'Jugoso, suave, bien cocido.'
      },
      '8m': {
        title: '8 a 9 Meses - Pollo Desmenuzado en Hebras',
        instructions: 'Pollo desmenuzado en hebras finas y húmedas mezcladas con puré o verduras.',
        texture: 'Hebras cortas y húmedas.'
      },
      '12m': {
        title: '10 a 12+ Meses - Trocitos suavemente picados',
        instructions: 'Pollo en albóndigas suaves, croquetas al horno o trocitos de guiso.',
        texture: 'Trozos tiernos jugosos.'
      }
    }
  },
  {
    id: 'pescado',
    name: 'Pescado Blanco (Merluza, Bacalao, Lenguado)',
    category: 'Proteínas y Alérgenos',
    icon: '🐟',
    chokingHazard: false,
    ironRich: true,
    allergen: true,
    allergenWarning: 'Alérgeno principal. Inspeccionar minuciosamente con las manos para asegurar CERO ESPINAS.',
    description: 'Rico en Omega 3, proteínas y minerales. Evitar pescados grandes con alto mercurio (Atún rojo, Pez espada).',
    cutsByAge: {
      '6m': {
        title: '6 a 7 Meses - Lomo Desmigado en Trazos Grandes',
        instructions: 'Cocinar al vapor o plancha. Revisar minuciosamente con los dedos que no tenga espinas y ofrecer el lomo suave en trozo ancho o hamburguesa de pescado.',
        texture: 'Desmenuzable y ultra tierno.'
      },
      '8m': {
        title: '8 a 9 Meses - Copos de Pescado desmigado',
        instructions: 'Ofrecer pequeños copos de pescado tierno sin espinas.',
        texture: 'Desmigado suave.'
      },
      '12m': {
        title: '10 a 12+ Meses - Preparaciones familiares',
        instructions: 'En albóndigas, guisos o trocitos a la plancha.',
        texture: 'Tierno bien cocido.'
      }
    }
  },
  {
    id: 'brocoli',
    name: 'Brócoli',
    category: 'Frutas y Verduras',
    icon: '🥦',
    chokingHazard: false,
    ironRich: true,
    allergen: false,
    description: 'Rico en Vitamina C, Hierro y Fibra. Uno de los favoritos en BLW por su "mango" natural.',
    cutsByAge: {
      '6m': {
        title: '6 a 7 Meses - Árboles con Tallo Largo al Vapor',
        instructions: 'Cocina al vapor el árbol de brócoli dejando un tallo largo de 2 dedos. La flor debe quedar muy suave pero manteniendo su forma para que el bebé sostenga el tallo y coma la copa.',
        texture: 'Tierno al vapor (los ramilletes se deshacen al morder).'
      },
      '8m': {
        title: '8 a 9 Meses - Ramilletes pequeños o Picado',
        instructions: 'Corta los ramilletes en trocitos adaptados al agarre en pinza.',
        texture: 'Copiña suave picada.'
      },
      '12m': {
        title: '10 a 12+ Meses - Árboles en mesa familiar',
        instructions: 'Servir en comidas familiares al vapor o salteado suave.',
        texture: 'Cocido al gusto.'
      }
    }
  }
];
