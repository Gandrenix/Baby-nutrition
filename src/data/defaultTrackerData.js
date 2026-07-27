// Datos por defecto para el Tracker y Seguimiento de Alimentos / Alérgenos (Etapa 5)

export const defaultAllergensList = [
  { id: 'huevo', name: 'Huevo (Clara y Yema)', icon: '🥚', category: 'Huevo' },
  { id: 'mani', name: 'Maní / Cacahuate (en crema o molido)', icon: '🥜', category: 'Frutos Secos' },
  { id: 'pescado', name: 'Pescado Blanco (Merluza / Lenguado)', icon: '🐟', category: 'Pescado' },
  { id: 'lacteos', name: 'Lácteos (Yogur natural / Queso sin sal)', icon: '🥛', category: 'Lácteos' },
  { id: 'trigo', name: 'Trigo / Gluten (Pan / Pasta / Avena)', icon: '🌾', category: 'Gluten' },
  { id: 'soya', name: 'Soya / Soya (Tofu / Edamame)', icon: '🫘', category: 'Soya' },
  { id: 'sesamo', name: 'Sésamo / Ajonjolí (Tahini)', icon: '🌱', category: 'Sésamo' },
  { id: 'mariscos', name: 'Mariscos (Camarones cocidos)', icon: '🦐', category: 'Mariscos' },
  { id: 'frutos_secos', name: 'Frutos Secos (Almendras/Nueces molidas)', icon: '🌰', category: 'Frutos Secos' }
];

export const acceptanceRatings = [
  { value: 'loved', label: '😍 Le encantó', color: '#10B981' },
  { value: 'accepted', label: '🙂 Lo aceptó bien', color: '#3B82F6' },
  { value: 'neutral', label: '😐 Indiferente / Curioso', color: '#F59E0B' },
  { value: 'rejected', label: '👅 Rechazó / Escupió', color: '#EF4444' }
];

export const initialBabyProfile = {
  name: 'Mi Bebé',
  birthDate: '',
  startDate: new Date().toISOString().split('T')[0],
  method: 'BLW',
  notes: ''
};

export const sampleFoodLogs = [
  {
    id: 'log-1',
    foodName: 'Aguacate',
    date: new Date(Date.now() - 86400000 * 3).toISOString().split('T')[0],
    rating: 'loved',
    isAllergen: false,
    symptoms: 'Ninguno. Heces normales.',
    notes: 'Ofrecido en bastones gruesos rebozados en avena.'
  },
  {
    id: 'log-2',
    foodName: 'Huevo (Día 1 de alérgeno)',
    date: new Date(Date.now() - 86400000 * 2).toISOString().split('T')[0],
    rating: 'accepted',
    isAllergen: true,
    allergenId: 'huevo',
    dayCount: 1,
    symptoms: 'Sin reacción en piel ni vómitos.',
    notes: 'Ofrecido en tortilla suave en tiras por la mañana.'
  },
  {
    id: 'log-3',
    foodName: 'Camote al vapor',
    date: new Date(Date.now() - 86400000).toISOString().split('T')[0],
    rating: 'loved',
    isAllergen: false,
    symptoms: 'Pipi y heces normales.',
    notes: 'Le fascinó el sabor dulce natural.'
  }
];
