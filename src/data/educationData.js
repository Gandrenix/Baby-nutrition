// Módulo Educativo Guiado (Etapa 4): 16 Secciones basadas en evidencia científica (OMS, AAP, ESPGHAN)

export const educationTopics = [
  {
    id: 'alergenos',
    title: '1. Introducción Segura de Alérgenos',
    icon: '🛡️',
    category: 'Seguridad y Salud',
    summary: 'Aprende la regla de los 3 días y cómo introducir los 9 alimentos potencialmente alergénicos de forma temprana y segura.',
    content: `
### ¿Por qué introducir alérgenos temprano?
La evidencia científica actual (estudios LEAP y EAT) demuestra que **introducir los alimentos alergénicos entre los 6 y 12 meses de edad reduce drásticamente el riesgo de desarrollar alergias alimentarias** en el futuro.

### Los 9 Alérgenos Principales:
1. **Huevo** (Introducir clara y yema bien cocidas).
2. **Maní / Cacahuate** (En crema suave diluida o harina, NUNCA entero).
3. **Pescado** (Pescados blancos primero, sin espinas).
4. **Mariscos** (Bien cocidos, picados finos).
5. **Leche de Vaca** (En pequeñas dosis como yogur natural sin azúcar o queso fresco sin sal; leche líquida entera como bebida solo a partir de los 12m).
6. **Trigo / Gluten** (Pan integral suave, pastas, avena).
7. **Soya** (Tofu suave, edamame triturado).
8. **Sésamo / Ajonjolí** (En pasta tahini o semillas molidas).
9. **Frutos Secos** (Almendras, nueces molidas o en crema suave).

### La Regla de Oro de los 3 Días:
* **Un alérgeno a la vez**: Ofrece el nuevo alérgeno durante 3 días consecutivos por la mañana.
* **Sin otros alimentos nuevos**: No introduzcas ningún otro ingrediente nuevo durante esos 3 días para poder identificar la causa exacta si ocurre una reacción.
* **Horario matutino**: Ofrecer a la hora del desayuno o almuerzo para poder observar al bebé despierto durante las siguientes 4 a 6 horas.
* **Si no hay reacción**: Tras el 3er día sin síntomas, el alimento se considera superado y debe mantenerse de forma habitual en la dieta (1-2 veces por semana) para mantener la tolerancia.
`
  },
  {
    id: 'arcadas-asfixia',
    title: '2. Arcadas (Gagging) vs. Asfixia (Choking)',
    icon: '⚠️',
    category: 'Primeros Auxilios',
    summary: 'Diferencias clave entre el reflejo de arcada (mecanismo protector normal) y la asfixia por obstrucción respiratoria.',
    content: `
### Conocer la diferencia salva vidas y da tranquilidad

| Característica | Arcada (Gagging) 🟢 | Asfixia / Atragantamiento (Choking) 🔴 |
| :--- | :--- | :--- |
| **Sonido** | **RUIDOSO**: Tose, arcadas, gárgaras, sonidos de empujar. | **SILENCIOSO**: No puede toser, llorar ni emitir ningún sonido. |
| **Color facial** | Se pone rojo o rosado por el esfuerzo de toser. | Se pone azul (cianosis), morado o muy pálido. |
| **Paso de aire** | La vía aérea está **abierta**. El bebé resuelve solo. | La vía aérea está **bloqueada total o parcialmente**. |
| **Actuación** | **MANTENER LA CALMA**. NO intervenir, NO meter los dedos a la boca. Dejar toser. | **ACTUAR DE INMEDIATO**: Llamar al servicio de emergencias y aplicar maniobras. |

> **IMPORTANTE**: El reflejo de arcada está situado en la parte delantera de la lengua en los bebés. Es un mecanismo de seguridad PERFECTO para evitar que el alimento llegue a la garganta.
`
  },
  {
    id: 'maniobras-emergencia',
    title: '3. Maniobras de Actuación ante Emergencia (RCP y Atragantamiento)',
    icon: '🚑',
    category: 'Primeros Auxilios',
    summary: 'Guía práctica paso a paso de actuación ante un atragantamiento real en bebés menores de 1 año.',
    content: `
### Pasos de Actuación Ante Atragantamiento en Lactantes (< 1 año):

#### PASO 1: Evaluar la tos
* Si el bebé **tose con fuerza o llora**, NO le des golpes en la espalda ni le metas los dedos en la boca. Su propia tos es el método más efectivo.
* Si el bebé **NO PUEDE RESPIRAR, no emite sonido y se torna azul**: Actúa de inmediato.

#### PASO 2: Golpes en la Espalda (5 Golpes)
1. Coloca al bebé boca abajo a lo largo de tu antebrazo, sosteniendo su mandíbula firmemente con tu mano (sin presionar el cuello).
2. Apoya tu antebrazo sobre tu muslo con la cabeza del bebé más baja que su tronco.
3. Con el talón de tu otra mano, da **5 golpes secos y firmes en la espalda**, justo entre los dos escápulas (paletas).

#### PASO 3: Compresiones Torácicas (5 Compresiones)
1. Si el objeto no sale, gira al bebé boca arriba sobre tu otro antebrazo, manteniendo su cabeza inclinada hacia abajo.
2. Coloca dos dedos (índice y medio) en el centro del pecho (justo debajo de la línea imaginaria de los pezones).
3. Realiza **5 compresiones torácicas firmes** (hundiéndolo unos 4 cm).

#### PASO 4: Repetir y Pedir Ayuda
* Mantén el ciclo de **5 golpes en la espalda + 5 compresiones torácicas** hasta que el objeto sea expulsado, el bebé llore o llegue la ambulancia.
* Pide a otra persona que llame al número de emergencias local de inmediato.
`
  },
  {
    id: 'deficiencias-nutricionales',
    title: '4. Prevención de Deficiencias Nutricionales (Hierro y Zinc)',
    icon: '🩸',
    category: 'Nutrición',
    summary: 'Por qué el hierro es el nutriente crítico a los 6 meses y cómo asegurar su absorción óptima.',
    content: `
### El Desafío del Hierro a los 6 Meses
Al nacer, los bebés cuentan con reservas de hierro acumuladas durante el embarazo. Sin embargo, hacia los 6 meses de vida, estas reservas se agotan rápidamente, mientras que sus requerimientos nutricionales para el desarrollo cerebral se duplican.

### Estrategias Clave:
* **Ofrecer alimentos ricos en Hierro en CADA comida**: Carne de res, pollo, pavo, pescado, yema de huevo, lentejas, garbanzos, frijoles y cereales fortificados.
* **El Potenciador (Vitamina C)**: Combina fuentes de hierro vegetal (lentejas, espinacas, avena) con alimentos ricos en Vitamina C (naranja, fresa, tomate, pimiento, kiwi, brócoli). La vitamina C triplica la absorción del hierro no hemo.
* **Evitar inhibidores**: No ofrecer tés, infusiones ni productos lácteos excesivos junto con las comidas principales de hierro.
`
  },
  {
    id: 'bebidas-permitidas',
    title: '5. Bebidas Permitidas y No Recomendadas',
    icon: '🥛',
    category: 'Nutrición',
    summary: 'Guía clara de hidratación: cuándo empezar a ofrecer agua pura y qué bebidas están prohibidas.',
    content: `
### Bebidas Permitidas:
* **Leche Materna o Fórmula Infantil**: Sigue siendo la fuente principal de nutrición e hidratación durante todo el primer año de vida (ofrecer primero la leche y luego los sólidos durante 6-8m).
* **Agua Pura (A partir de los 6 meses)**: Se empieza a ofrecer pequeños sorbos de agua potable en vaso abierto o vaso de aprendizaje durante las comidas (unos 60-120 ml al día).

### 🚫 Bebidas NO Recomendadas o Prohibidas:
* **Jugos de Frutas (Incluso 100% naturales)**: No recomendados antes de los 12 meses (y limitar fuertemente después). Concentran azúcar libre, desplazan la leche y aumentan riesgo de caries y obesidad. La fruta se come ENTERA o machacada.
* **Leche Entera de Vaca como bebida**: Prohibida antes de los 12 meses (el intestino del bebé no puede procesar su alta carga proteica y mineral, produciendo sangrado microscópico intestinal).
* **Infusiones / Tés (Manzanilla, Anís de estrella, Hinojo)**: PROHIBIDOS. El anís de estrella puede provocar neurotoxicidad grave y convulsiones en lactantes.
* **Bebidas Vegetales (Almendra, Soya, Arroz)**: No reemplazan la leche materna/fórmula. La bebida de arroz está contraindicada por contenido de arsénico inorgánico.
`
  },
  {
    id: 'sal-azucar',
    title: '6. Uso de Sal, Azúcar y Condimentos',
    icon: '🧂',
    category: 'Nutrición',
    summary: 'Razones médicas para la regla 0 Sal y 0 Azúcar antes del primer año.',
    content: `
### Cero Sal Agregada (0-12 Meses):
Los riñones del bebé son inmaduros y no pueden filtrar excesos de sodio. El sodio natural presente en la leche y los alimentos cubre el 100% de sus necesidades.

### Cero Azúcar Agregada (0-24 Meses):
El azúcar daña la flora intestinal, promueve la preferencia por sabores ultra-dulces y aumenta drásticamente el riesgo de diabetes, sobrepeso y caries infantiles. Incluye miel, siropes, panela y azúcares de caña.

### 🌿 ¿Cómo sazonar la comida del bebé?
¡No le des comida insípida! Puedes usar hierbas aromáticas y especias naturales desde los 6 meses:
* Orégano, albahaca, tomillo, romero.
* Canela en polvo, comino, cúrcuma, ajo en polvo, cebolla en polvo.
* Aceite de Oliva Virgen Extra en crudo al servir.
`
  },
  {
    id: 'alimentos-prohibidos',
    title: '7. Alimentos que Deben Evitarse Antes del Año',
    icon: '🚫',
    category: 'Seguridad y Salud',
    summary: 'Lista definitiva de alimentos peligrosos para la salud o digestión del bebé menores de 12 meses.',
    content: `
1. **Miel de Abeja**: Risgo de **Botulismo Infantil** (una toxina bacteriana potencialmente mortal). Prohibida absolutamente antes de los 12 meses.
2. **Frutos Secos Enteros y Semillas Grandes**: Alto riesgo de asfixia. Ofrecer solo molidos o en crema.
3. **Espinacas, Acelgas y Remolacha en Exceso**: Contienen **nitratos** que pueden causar metahemoglobinemia ("síndrome del bebé azul"). No superar 1 ración pequeña al día.
4. **Pescados Grandes con Alto Mercurio**: Atún rojo, Pez espada, Cazón, Lucio.
5. **Alimentos Desnatados / Bajo en Grasa**: Los bebés necesitan grasas saludables para el desarrollo cerebral.
6. **Alimentos Ultraprocesados / Embutidos**: Ricos en nitritos, sal y grasas saturadas.
`
  },
  {
    id: 'higiene-seguridad',
    title: '8. Seguridad Alimentaria e Higiene en la Preparación',
    icon: '🧼',
    category: 'Seguridad y Salud',
    summary: 'Pautas para evitar gastroenteritis e infecciones alimentarias en la cocina.',
    content: `
* **Lavado de Manos**: Lavar manos con agua y jabón durante 20 segundos antes de preparar y alimentar al bebé.
* **Contaminación Cruzada**: Usar tablas de picar distintas para carnes crudas y frutas/verduras.
* **Cocción Completa**: Asegurar que las carnes, huevos y pescados alcancen cocción completa (cero zonas rosadas o crudas).
* **Desinfección**: Lavar meticulosamente frutas y verduras que se sirvan frescas.
`
  },
  {
    id: 'conservacion-recalentamiento',
    title: '9. Conservación y Recalentamiento de Alimentos',
    icon: '❄️',
    category: 'Seguridad y Salud',
    summary: 'Tiempos seguros de refrigeración y congelación de comida infantil.',
    content: `
### Tiempos Máximos de Almacenamiento:
* **Temperatura Ambiente**: No dejar comida cocida más de 2 horas a temperatura ambiente.
* **Refrigerador (4°C)**:
  * Purés con carne/pescado: 24 horas.
  * Purés de verduras/frutas: 48 horas.
* **Congelador (-18°C)**:
  * Comida infantil casera: hasta 1 a 2 meses en frascos o recipientes herméticos libres de BPA.

### Recalentamiento Seguro:
* Descongelar en la nevera desde la noche anterior o en microondas (función defrost). NUNCA a temperatura ambiente.
* Recalentar hasta que humee por completo y dejar enfriar a temperatura templada antes de dar al bebé.
* **NO volver a congelar** un alimento que ya ha sido descongelado.
`
  },
  {
    id: 'alimentacion-enfermedad',
    title: '10. Alimentación Durante Enfermedad',
    icon: '🤒',
    category: 'Salud Infantil',
    summary: 'Cómo nutrir al bebé cuando tiene fiebre, mocos, diarrea o inapetencia.',
    content: `
* **La Leche es la Prioridad**: Durante procesos infecciosos, es totalmente normal que el bebé rechace los sólidos. La leche materna o fórmula debe ser su refugio principal.
* **Ofrecer en Pequeñas Cantidades**: Ofrecer tomas o cucharaditas frecuentes sin forzar jamás.
* **Texturas Suaves e Hidratantes**: Caldos caseros sin sal, compotas de manzana/pera, purés ligeros.
* **Evitar la Deshidratación**: Mantener oferta constante de pecho/biberón y sorbos de agua.
`
  },
  {
    id: 'estrenimiento-frecuente',
    title: '11. Estreñimiento y Otros Problemas Frecuentes',
    icon: '💩',
    category: 'Salud Infantil',
    summary: 'Manejo del cambio en la consistencia de deposiciones al iniciar sólidos.',
    content: `
Al introducir sólidos, es normal que las heces cambien de color, consistencia y olor.

### 🟢 Alimentos Reguladores / Laxantes Naturales (Las "P"):
* **Papaya, Pera, Pitahaya, Ciruela, Pelón/Melocotón, Plátano bien maduro, Aguacate**.
* Semillas de chía hidratadas en agua o compota.
* Asegurar buena ingesta de agua pura.

### 🔴 Alimentos Astringentes (Usar con moderación si hay estreñimiento):
* Manzana cocida/rallada, plátano verde, arroz blanco, zanahoria cocida en exceso.
`
  },
  {
    id: 'hambre-saciedad',
    title: '12. Señales de Hambre y Saciedad',
    icon: '👶',
    category: 'Crianza Respetuosa',
    summary: 'Aprende a leer el lenguaje corporal de tu bebé para evitar la alimentación forzada.',
    content: `
### 🟢 Señales de Hambre:
* Inclina el cuerpo hacia la comida o la cuchara.
* Abre la boca ampliamente cuando ve acercar el alimento.
* Muestra entusiasmo y agita las manos alegremente.

### 🔴 Señales de Saciedad (¡Momento de Parar!):
* Cierra la boca con fuerza o gira la cabeza hacia el lado contrario.
* Empuja el plato o la cuchara con la mano.
* Arquea la espalda o se distrae jugando.
* Escupe la comida sin intención de tragar.

> **Regla de Oro**: El adulto decide *QUÉ*, *CUÁNDO* y *DÓNDE* se ofrece la comida. El bebé decide *CUÁNTO* y si desea comer.
`
  },
  {
    id: 'rechazo-neofobia',
    title: '13. Manejo del Rechazo a los Alimentos y Neofobia',
    icon: '🥦',
    category: 'Crianza Respetuosa',
    summary: 'Estrategias para gestionar cuando el bebé escupe o rechaza verduras y nuevos sabores.',
    content: `
* **Es una etapa NORMAL**: La neofobia (miedo a lo nuevo) es un mecanismo evolutivo.
* **Regla de las 15 exposiciones**: Un bebé puede necesitar ver, tocar, oler y rechazar un alimento hasta 15 o 20 veces antes de decidir probarlo y aceptarlo.
* **Cero Presión y Cero Pantallas**: Obligar o distractorizar con pantallas anula la capacidad del bebé de escuchar su propio cuerpo.
* **Modela con tu Ejemplo**: Come el mismo alimento frente a tu bebé disfrutándolo.
`
  },
  {
    id: 'mitos-frecuentes',
    title: '14. Mitos Frecuentes sobre Alimentación Infantil',
    icon: '💡',
    category: 'Evidencia Médica',
    summary: 'Desmintiendo falsas creencias populares heredadas.',
    content: `
* **Mito 1**: *"Poner cereal en el biberón ayuda a que el bebé duerma toda la noche."*
  * **Realidad**: FALSO. Es un riesgo de atragantamiento y no mejora el sueño infantil.
* **Mito 2**: *"Si le das trozos (BLW) se va a ahogar seguro."*
  * **Realidad**: FALSO. La evidencia demuestra que el riesgo de atragantamiento es idéntico entre BLW bien ejecutado y purés, siempre que se respeten los cortes seguros.
* **Mito 3**: *"Hay que retrasar el huevo y el pescado hasta el año para evitar alergias."*
  * **Realidad**: FALSO. Retrasarlos aumenta el riesgo de alergia.
`
  },
  {
    id: 'faq',
    title: '15. Preguntas Frecuentes (FAQ)',
    icon: '❓',
    category: 'Evidencia Médica',
    summary: 'Respuestas rápidas a las preguntas más repetidas por las familias.',
    content: `
### ¿Qué hago si mi bebé no come casi nada los primeros días?
Es 100% normal. Durante los 6 a 9 meses, la comida es principalmente **exploratoria y de aprendizaje**. Su principal alimento sigue siendo la leche materna o fórmula.

### ¿Cuándo debe tomar agua?
A partir de los 6 meses, junto con sus comidas de sólidos. Ofrecer en vaso abierto pequeño para favorecer el desarrollo muscular bucal.

### ¿Puedo combinar Papillas y BLW (Alimentación Mixta)?
¡Sí! La alimentación mixta es totalmente válida. Puedes ofrecer purés en algunas comidas y alimentos en trozos seguros en otras, siempre respetando la autonomía del bebé.
`
  },
  {
    id: 'buscador-educativo',
    title: '16. Resumen de Recomendaciones OMS & AAP',
    icon: '📜',
    category: 'Evidencia Médica',
    summary: 'Directrices internacionales resumidas para una alimentación infantil exitosa.',
    content: `
* Lactancia materna exclusiva durante los primeros 6 meses.
* Introducción de alimentos complementarios nutricionalmente adecuados y seguros a partir de los 6 meses.
* Continuar con la lactancia materna/fórmula hasta los 2 años o más.
* Fomentar un ambiente positivo, libre de violencia o exigencias en la mesa.
`
  }
];
