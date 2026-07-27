// Test de preparación para el inicio de la Alimentación Complementaria (Etapa 1)
export const readinessQuestions = [
  {
    id: 'age',
    title: '1. Edad del bebé',
    question: '¿Qué edad tiene tu bebé actualmente?',
    description: 'La OMS y la AAP recomiendan iniciar la alimentación complementaria alrededor de los 6 meses (24 semanas) cumplidos.',
    options: [
      { label: 'Menos de 6 meses (Menos de 24 semanas)', value: 'under_6m', score: 0, warning: 'Antes de los 6 meses el sistema digestivo y renal del bebé aún no están maduros.' },
      { label: '6 meses o más (Cumplidos o corregidos si fue prematuro)', value: '6m_plus', score: 1, info: '¡Excelente! Cumple con el criterio de madurez biológica general.' }
    ]
  },
  {
    id: 'sitting',
    title: '2. Control postural y sedestación',
    question: '¿Tu bebé se mantiene sentado con apoyo mínimo y sostiene erguida la cabeza?',
    description: 'El bebé debe ser capaz de mantenerse erguido en la trona/silla para comer para prevenir atragantamientos.',
    options: [
      { label: 'Se cae hacia los lados o su cabeza se tambalea', value: 'no', score: 0, warning: 'Aún no tiene la fuerza de tronco necesaria. Intentar comer sin tono postural aumenta el riesgo de atragantamiento.' },
      { label: 'Se mantiene erguido con apoyo mínimo en su espalda/trona', value: 'yes', score: 1, info: '¡Perfecto! El control de cabeza y tronco es vital para una deglución segura.' }
    ]
  },
  {
    id: 'extrusion',
    title: '3. Pérdida del reflejo de extrusión',
    question: 'Si le acercas una cuchara o alimento suave a los labios, ¿deja de empujarlo hacia afuera con la lengua?',
    description: 'El reflejo de extrusión hace que los bebés expulsen cualquier sólido fuera de la boca con la lengua. Se pierde gradualmente hacia los 6 meses.',
    options: [
      { label: 'Empuja todo con la lengua hacia afuera de inmediato', value: 'no', score: 0, warning: 'Conserva el reflejo de extrusión. Es un mecanismo de defensa infantil que indica que aún no debe recibir sólidos.' },
      { label: 'Acepta o intenta tragar la comida sin empujarla con la lengua', value: 'yes', score: 1, info: 'Su lengua ya se mueve de forma coordinada hacia atrás para tragar.' }
    ]
  },
  {
    id: 'grasping',
    title: '4. Coordinación mano-boca y agarre',
    question: '¿Tu bebé toma objetos o juguetes con sus manos y se los lleva a la boca?',
    description: 'Demuestra el desarrollo motor fino y la intención de explorar alimentos por sí mismo.',
    options: [
      { label: 'Aún no agarra cosas de forma voluntaria para llevarlas a la boca', value: 'no', score: 0, warning: 'Requiere desarrollar mayor coordinación visomotora antes de explorar alimentos.' },
      { label: 'Toma juguetes u objetos y se los lleva directo a la boca', value: 'yes', score: 1, info: 'Tiene la autonomía motora lista para explorar texturas y cubiertos.' }
    ]
  },
  {
    id: 'interest',
    title: '5. Interés por la comida',
    question: '¿Muestra curiosidad cuando los adultos comen (mira la comida, abre la boca, intenta alcanzarla)?',
    description: 'El interés activo es una señal neurológica de que el bebé está listo para interactuar con la comida familiar.',
    options: [
      { label: 'Indiferente a la comida de los demás', value: 'no', score: 0, warning: 'No muestra interés conductual aún.' },
      { label: 'Sigue la comida con la mirada, abre la boca o estira las manos', value: 'yes', score: 1, info: '¡Está motivado y listo psicológicamente para descubrir sabores!' }
    ]
  },
  {
    id: 'chewing',
    title: '6. Movimientos de masticación',
    question: '¿Hace movimientos de masticación arriba y abajo con su mandíbula al llevarse objetos suaves?',
    description: 'Indica la maduración de los músculos maseteros necesarios para procesar alimentos.',
    options: [
      { label: 'Sólo succiona como con el biberón/pecho', value: 'no', score: 0, warning: 'Aún predomina el patrón motor de succión puramente infantil.' },
      { label: 'Mueve la mandíbula intentando triturar con las encías', value: 'yes', score: 1, info: 'Las encías son muy fuertes y están preparadas para machacar alimentos suaves.' }
    ]
  }
];

export const evaluateReadiness = (answers) => {
  const totalQuestions = readinessQuestions.length;
  let score = 0;
  const details = [];

  readinessQuestions.forEach((q) => {
    const selectedValue = answers[q.id];
    const option = q.options.find((o) => o.value === selectedValue);
    if (option) {
      score += option.score;
      details.push({
        questionTitle: q.title,
        status: option.score === 1 ? 'pass' : 'fail',
        text: option.score === 1 ? option.info : option.warning
      });
    }
  });

  let status = 'not_ready';
  let title = '';
  let badgeColor = '';
  let mainRecommendation = '';

  if (score === totalQuestions) {
    status = 'ready';
    title = '🎉 ¡Tu bebé está 100% preparado para iniciar la Alimentación Complementaria!';
    badgeColor = 'success';
    mainRecommendation = 'Cumple con los 6 hitos de madurez del neurodesarrollo y digestivos. Puedes iniciar la aventura de los sólidos con calma y disfrutar esta etapa.';
  } else if (score >= 4) {
    status = 'almost_ready';
    title = '⏳ Tu bebé está casi listo (Faltan desarrollarse 1 o 2 señales)';
    badgeColor = 'warning';
    mainRecommendation = 'Ha avanzado mucho, pero es recomendable esperar 1 a 2 semanas más para reforzar el sostén postural o la pérdida del reflejo de extrusión. Reevalúa pronto.';
  } else {
    status = 'not_ready';
    title = '🛡️ Aún es pronto. Recomendamos esperar unos días o semanas.';
    badgeColor = 'danger';
    mainRecommendation = 'Su organismo aún está en etapa de lactancia exclusiva (materna o fórmula). Introducir sólidos antes de tiempo puede aumentar el riesgo de atragantamiento y digestiones pesadas.';
  }

  return { score, totalQuestions, status, title, badgeColor, mainRecommendation, details };
};
