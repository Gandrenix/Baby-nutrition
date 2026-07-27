import React, { useState } from 'react';
import { foodCutsDatabase, feedingMethods } from '../../data/foodCutsData';
import { Search, AlertOctagon, CheckCircle, Info, ShieldAlert, Sparkles, Filter } from 'lucide-react';

export const Stage2View = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAge, setSelectedAge] = useState('6m'); // '6m' | '8m' | '12m'
  const [selectedFood, setSelectedFood] = useState(null);
  const [activeMethodTab, setActiveMethodTab] = useState('blw');

  const filteredFoods = foodCutsDatabase.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    food.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="stage-2-container">
      <div className="stage-hero">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <span className="badge badge-info" style={{ fontSize: '0.85rem' }}>
            💎 Etapa 2 • Primera Micro App
          </span>
        </div>
        <h1>Cortes Seguros, Texturas & Progresión de la Alimentación</h1>
        <p>
          Aprende a ofrecer cada alimento con el formato exacto de seguridad según la edad de tu bebé (6m, 8m, 12m+). Compara métodos de alimentación (BLW, Tradicional, BLISS, Perceptiva) y evita riesgos de atragantamiento.
        </p>
      </div>

      {/* Tabs: Buscador de Cortes vs Comparativa de Métodos */}
      <div className="card">
        <div className="card-header-title">
          <Sparkles size={24} color="var(--primary)" />
          <span>Guía Visual de Cortes Seguros por Alimento</span>
        </div>
        <p className="card-subtitle">
          Selecciona la edad de tu bebé y busca el alimento para ver cómo prepararlo y cortarlo con total seguridad.
        </p>

        {/* Age Selector */}
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          {[
            { id: '6m', label: '6 a 7 Meses (Inicio • Bastones y Purés Suaves)' },
            { id: '8m', label: '8 a 9 Meses (Agarre en Pinza • Trocitos)' },
            { id: '12m', label: '10 a 12+ Meses (Comida Familiar)' }
          ].map((ageBtn) => (
            <button
              key={ageBtn.id}
              onClick={() => setSelectedAge(ageBtn.id)}
              className={`btn ${selectedAge === ageBtn.id ? 'btn-primary' : 'btn-outline'}`}
              style={{ fontSize: '0.85rem', padding: '0.55rem 1.1rem' }}
            >
              {ageBtn.label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
          <input
            type="text"
            className="search-input"
            placeholder="Buscar alimento (ej: Aguacate, Zanahoria, Huevo, Carne, Uvas)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ paddingLeft: '2.8rem' }}
          />
          <Search size={20} color="var(--text-muted)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
        </div>

        {/* Food Grid */}
        <div className="grid-3">
          {filteredFoods.map((food) => {
            const cutInfo = food.cutsByAge[selectedAge];
            return (
              <div
                key={food.id}
                onClick={() => setSelectedFood(food)}
                style={{
                  background: '#ffffff',
                  borderRadius: 'var(--border-radius-md)',
                  padding: '1.2rem',
                  border: food.chokingHazard ? '1.5px solid rgba(239, 68, 68, 0.3)' : '1px solid rgba(0,0,0,0.08)',
                  boxShadow: 'var(--shadow-sm)',
                  cursor: 'pointer',
                  transition: 'var(--transition)',
                  position: 'relative'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                {food.chokingHazard && (
                  <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                    <AlertOctagon size={20} color="var(--danger)" />
                  </div>
                )}

                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{food.icon}</div>

                <h3 style={{ fontSize: '1.15rem', color: 'var(--dark-navy)', marginBottom: '0.3rem' }}>
                  {food.name}
                </h3>

                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                  {food.chokingHazard && <span className="badge badge-danger">Riesgo de Asfixia</span>}
                  {food.ironRich && <span className="badge badge-success">Alto en Hierro 🩸</span>}
                  {food.allergen && <span className="badge badge-warning">Alérgeno 🛡️</span>}
                </div>

                <div style={{ background: 'var(--primary-light)', padding: '0.7rem', borderRadius: '8px', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                  <strong>{cutInfo.title}:</strong>
                  <p style={{ marginTop: '0.2rem', color: 'var(--text-muted)' }}>{cutInfo.instructions}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Feeding Methods Section */}
      <div className="card">
        <div className="card-header-title">
          <Info size={24} color="var(--secondary)" />
          <span>Comparativa de Métodos de Alimentación</span>
        </div>
        <p className="card-subtitle">
          Elige la filosofía que mejor se adapte a tu familia o combina métodos con flexibilidad y tranquilidad.
        </p>

        <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
          {feedingMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => setActiveMethodTab(method.id)}
              className={`btn ${activeMethodTab === method.id ? 'btn-secondary' : 'btn-outline'}`}
              style={{ fontSize: '0.9rem', whiteSpace: 'nowrap' }}
            >
              {method.name}
            </button>
          ))}
        </div>

        {(() => {
          const method = feedingMethods.find((m) => m.id === activeMethodTab);
          if (!method) return null;
          return (
            <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: 'var(--border-radius-md)', border: '1px solid rgba(0,0,0,0.06)' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--dark-navy)', marginBottom: '0.2rem' }}>
                {method.name}
              </h3>
              <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '1rem' }}>
                {method.subtitle}
              </p>

              <p style={{ color: 'var(--text-primary)', marginBottom: '1.2rem' }}>{method.description}</p>

              <div className="grid-2">
                <div style={{ background: 'var(--success-light)', padding: '1rem', borderRadius: 'var(--border-radius-sm)' }}>
                  <strong style={{ color: 'var(--success)', display: 'block', marginBottom: '0.5rem' }}>
                    ✅ Ventajas Clave:
                  </strong>
                  <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
                    {method.pros.map((p, idx) => (
                      <li key={idx} style={{ marginBottom: '0.3rem' }}>{p}</li>
                    ))}
                  </ul>
                </div>

                <div style={{ background: 'var(--warning-light)', padding: '1rem', borderRadius: 'var(--border-radius-sm)' }}>
                  <strong style={{ color: 'var(--warning)', display: 'block', marginBottom: '0.5rem' }}>
                    ⚠️ Consideraciones Importantes:
                  </strong>
                  <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
                    {method.considerations.map((c, idx) => (
                      <li key={idx} style={{ marginBottom: '0.3rem' }}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })()}
      </div>

      {/* Modal Detail for Food */}
      {selectedFood && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            padding: '1rem'
          }}
          onClick={() => setSelectedFood(null)}
        >
          <div
            style={{
              background: '#ffffff',
              borderRadius: 'var(--border-radius-lg)',
              maxWidth: '600px',
              width: '100%',
              padding: '2rem',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '2.5rem' }}>{selectedFood.icon}</span>
                <h2 style={{ fontSize: '1.5rem', color: 'var(--dark-navy)' }}>{selectedFood.name}</h2>
              </div>
              <button onClick={() => setSelectedFood(null)} style={{ background: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>
                ✕
              </button>
            </div>

            {selectedFood.chokingWarning && (
              <div style={{ background: 'var(--danger-light)', color: 'var(--danger)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem', fontWeight: 600 }}>
                <ShieldAlert size={20} style={{ display: 'inline', marginRight: '6px' }} />
                {selectedFood.chokingWarning}
              </div>
            )}

            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>{selectedFood.description}</p>

            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.8rem', color: 'var(--dark-navy)' }}>
              Instrucciones de Corte por Edad:
            </h3>

            {Object.entries(selectedFood.cutsByAge).map(([ageKey, info]) => (
              <div key={ageKey} style={{ background: 'rgba(0,0,0,0.03)', padding: '1rem', borderRadius: '8px', marginBottom: '0.75rem' }}>
                <strong style={{ color: 'var(--primary)', display: 'block', marginBottom: '0.3rem' }}>
                  {info.title}
                </strong>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
                  {info.instructions}
                </p>
                <small style={{ color: 'var(--text-muted)' }}>Textura ideal: {info.texture}</small>
              </div>
            ))}

            <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
              <button onClick={() => setSelectedFood(null)} className="btn btn-primary">
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
