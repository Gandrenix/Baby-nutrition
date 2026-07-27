import React, { useState } from 'react';
import { educationTopics } from '../../data/educationData';
import { BookOpen, Search, AlertTriangle, ShieldCheck, ChevronDown, ChevronUp, LifeBuoy, HeartPulse } from 'lucide-react';
import { marked } from 'marked';

marked.setOptions({
  gfm: true,
  breaks: true
});

export const Stage4View = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopicId, setSelectedTopicId] = useState('alergenos');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'Seguridad y Salud', 'Primeros Auxilios', 'Nutrición', 'Salud Infantil', 'Crianza Respetuosa', 'Evidencia Médica'];

  const filteredTopics = educationTopics.filter((topic) => {
    const matchesCategory = activeCategory === 'all' || topic.category === activeCategory;
    const matchesSearch =
      topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const selectedTopic = educationTopics.find((t) => t.id === selectedTopicId) || educationTopics[0];

  return (
    <div className="stage-4-container">
      <div className="stage-hero">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <span className="badge badge-info" style={{ fontSize: '0.85rem' }}>
            📚 Etapa 4 • Módulo Educativo
          </span>
        </div>
        <h1>Biblioteca Práctica Basada en Evidencia Médica</h1>
        <p>
          Guía de acompañamiento para familias respaldada por la OMS, la AAP y la ESPGHAN. Incluye protocolos de alérgenos, primeros auxilios ante atragantamiento, prevención de deficiencias y respuestas a todas tus dudas.
        </p>
      </div>

      {/* Emergency Choking & CPR Callout Banner */}
      <div
        className="card"
        style={{
          background: 'linear-gradient(135deg, #FFF5F5 0%, #FED7D7 100%)',
          border: '2px solid var(--danger)',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <LifeBuoy size={36} color="var(--danger)" />
          <div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--danger)' }}>
              🚨 Guía Rápida de Primeros Auxilios Ante Atragantamiento
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--dark-navy)' }}>
              Accede inmediatamente a las maniobras de actuación en lactantes (5 golpes + 5 compresiones).
            </p>
          </div>
        </div>
        <button
          onClick={() => setSelectedTopicId('maniobras-emergencia')}
          className="btn btn-primary"
          style={{ background: 'var(--danger)' }}
        >
          Ver Guía de Emergencia <HeartPulse size={18} />
        </button>
      </div>

      {/* Category Pills & Search */}
      <div className="card" style={{ padding: '1.2rem' }}>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem', alignItems: 'center' }}>
          <div style={{ position: 'relative', flex: 1, minWidth: '260px' }}>
            <input
              type="text"
              className="search-input"
              placeholder="Buscar en los 16 temas (ej: Alérgenos, Azúcar, Miel, Estreñimiento)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ paddingLeft: '2.5rem' }}
            />
            <Search size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)' }} />
          </div>

          <div style={{ display: 'flex', gap: '0.4rem', overflowX: 'auto' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`btn ${activeCategory === cat ? 'btn-primary' : 'btn-outline'}`}
                style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem', whiteSpace: 'nowrap' }}
              >
                {cat === 'all' ? 'Todos los Temas' : cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Educational Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {/* Left Column: Topic Selector List */}
        <div className="card" style={{ padding: '1.2rem', height: 'fit-content' }}>
          <h3 style={{ fontSize: '1.1rem', color: 'var(--dark-navy)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BookOpen size={20} color="var(--primary)" /> Temas Educativos ({filteredTopics.length})
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', maxHeight: '600px', overflowY: 'auto' }}>
            {filteredTopics.map((topic) => {
              const isSelected = selectedTopicId === topic.id;
              return (
                <div
                  key={topic.id}
                  onClick={() => setSelectedTopicId(topic.id)}
                  style={{
                    padding: '0.9rem 1rem',
                    borderRadius: 'var(--border-radius-sm)',
                    background: isSelected ? 'var(--primary-light)' : 'rgba(0,0,0,0.02)',
                    borderLeft: `4px solid ${isSelected ? 'var(--primary)' : 'transparent'}`,
                    cursor: 'pointer',
                    transition: 'var(--transition)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.2rem' }}>
                    <span style={{ fontSize: '1.2rem' }}>{topic.icon}</span>
                    <strong style={{ fontSize: '0.95rem', color: isSelected ? 'var(--primary)' : 'var(--text-primary)' }}>
                      {topic.title}
                    </strong>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.3 }}>
                    {topic.summary}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Selected Topic Content */}
        <div className="card" style={{ gridColumn: 'span 2' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '2.2rem' }}>{selectedTopic.icon}</span>
            <div>
              <span className="badge badge-info">{selectedTopic.category}</span>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--dark-navy)', marginTop: '0.2rem' }}>
                {selectedTopic.title}
              </h2>
            </div>
          </div>

          <div
            className="markdown-body"
            style={{
              marginTop: '1.5rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(0,0,0,0.08)'
            }}
            dangerouslySetInnerHTML={{ __html: marked.parse(selectedTopic.content || '') }}
          />
        </div>
      </div>
    </div>
  );
};

