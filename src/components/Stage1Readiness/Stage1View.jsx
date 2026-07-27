import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { readinessQuestions, evaluateReadiness } from '../../data/readinessQuestions';
import { CheckCircle2, AlertTriangle, XCircle, ArrowRight, RefreshCw, Award, HelpCircle, ShieldCheck } from 'lucide-react';

export const Stage1View = () => {
  const { readinessAnswers, setReadinessAnswers, setActiveTab } = useApp();
  const [currentStep, setCurrentStep] = useState(0);
  const [showResult, setShowResult] = useState(() => Object.keys(readinessAnswers).length === readinessQuestions.length);

  const handleSelectOption = (questionId, value) => {
    const updated = { ...readinessAnswers, [questionId]: value };
    setReadinessAnswers(updated);
  };

  const handleNext = () => {
    if (currentStep < readinessQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setReadinessAnswers({});
    setCurrentStep(0);
    setShowResult(false);
  };

  const currentQ = readinessQuestions[currentStep];
  const evaluation = evaluateReadiness(readinessAnswers);
  const isSelected = !!readinessAnswers[currentQ?.id];

  return (
    <div className="stage-1-container">
      <div className="stage-hero">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <span className="badge badge-success" style={{ fontSize: '0.85rem' }}>
            🎁 Etapa 1 • Herramienta Gratuita
          </span>
        </div>
        <h1>Test de Preparación: ¿Tu bebé está listo para los sólidos?</h1>
        <p>
          Responde este sencillo cuestionario basado en las recomendaciones oficiales de la OMS, la AAP y la ESPGHAN para determinar si tu bebé ha alcanzado los hitos de madurez neurológica, motora y digestiva requeridos.
        </p>
      </div>

      {!showResult ? (
        <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Progress Bar */}
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.4rem' }}>
              <span>Pregunta {currentStep + 1} de {readinessQuestions.length}</span>
              <span>{Math.round(((currentStep + 1) / readinessQuestions.length) * 100)}% Completado</span>
            </div>
            <div style={{ height: '8px', background: 'rgba(0,0,0,0.06)', borderRadius: '4px', overflow: 'hidden' }}>
              <div
                style={{
                  height: '100%',
                  width: `${((currentStep + 1) / readinessQuestions.length) * 100}%`,
                  background: 'var(--primary)',
                  transition: 'width 0.3s ease'
                }}
              />
            </div>
          </div>

          <h2 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
            {currentQ.title}
          </h2>
          <p style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--dark-navy)', marginBottom: '0.4rem' }}>
            {currentQ.question}
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem', background: 'rgba(0,0,0,0.02)', padding: '0.6rem 0.9rem', borderRadius: '8px' }}>
            💡 <strong>¿Por qué se evalúa esto?</strong> {currentQ.description}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
            {currentQ.options.map((opt) => {
              const active = readinessAnswers[currentQ.id] === opt.value;
              return (
                <div
                  key={opt.value}
                  onClick={() => handleSelectOption(currentQ.id, opt.value)}
                  style={{
                    padding: '1.1rem 1.3rem',
                    borderRadius: 'var(--border-radius-md)',
                    border: active ? '2px solid var(--primary)' : '1.5px solid rgba(0,0,0,0.08)',
                    background: active ? 'var(--primary-light)' : '#ffffff',
                    cursor: 'pointer',
                    transition: 'var(--transition)',
                    boxShadow: active ? '0 4px 12px rgba(224, 122, 95, 0.15)' : 'var(--shadow-sm)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: '22px',
                        height: '22px',
                        borderRadius: '50%',
                        border: active ? '6px solid var(--primary)' : '2px solid #ccc',
                        background: '#fff'
                      }}
                    />
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '1rem' }}>
                      {opt.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="btn btn-outline"
              style={{ opacity: currentStep === 0 ? 0.4 : 1, cursor: currentStep === 0 ? 'not-allowed' : 'pointer' }}
            >
              Anterior
            </button>
            <button
              onClick={handleNext}
              disabled={!isSelected}
              className="btn btn-primary"
              style={{ opacity: !isSelected ? 0.5 : 1, cursor: !isSelected ? 'not-allowed' : 'pointer' }}
            >
              {currentStep === readinessQuestions.length - 1 ? 'Ver Resultado Inmediato' : 'Siguiente'}
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      ) : (
        /* Result Card */
        <div className="card" style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ margin: '1rem 0' }}>
            {evaluation.status === 'ready' && <Award size={64} color="var(--success)" />}
            {evaluation.status === 'almost_ready' && <AlertTriangle size={64} color="var(--warning)" />}
            {evaluation.status === 'not_ready' && <ShieldCheck size={64} color="var(--primary)" />}
          </div>

          <h2 style={{ fontSize: '1.7rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
            {evaluation.title}
          </h2>

          <div style={{ display: 'inline-block', marginBottom: '1.2rem' }}>
            <span className={`badge badge-${evaluation.badgeColor}`} style={{ fontSize: '1rem', padding: '0.4rem 1.2rem' }}>
              Puntuación: {evaluation.score} de {evaluation.totalQuestions} hitos alcanzados
            </span>
          </div>

          <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)', background: 'var(--card-bg)', padding: '1.2rem', borderRadius: 'var(--border-radius-md)', border: '1px solid rgba(0,0,0,0.06)', marginBottom: '2rem' }}>
            {evaluation.mainRecommendation}
          </p>

          <h3 style={{ textAlign: 'left', fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--dark-navy)' }}>
            📋 Desglose detallado de las señales evaluadas:
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', textAlign: 'left', marginBottom: '2rem' }}>
            {evaluation.details.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1rem',
                  borderRadius: 'var(--border-radius-sm)',
                  background: item.status === 'pass' ? 'var(--success-light)' : 'var(--warning-light)',
                  borderLeft: `4px solid ${item.status === 'pass' ? 'var(--success)' : 'var(--warning)'}`,
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem'
                }}
              >
                {item.status === 'pass' ? (
                  <CheckCircle2 size={20} color="var(--success)" style={{ flexShrink: 0, marginTop: '2px' }} />
                ) : (
                  <AlertTriangle size={20} color="var(--warning)" style={{ flexShrink: 0, marginTop: '2px' }} />
                )}
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block' }}>{item.questionTitle}</strong>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{item.text}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={handleReset} className="btn btn-outline">
              <RefreshCw size={18} /> Repetir Test
            </button>
            <button onClick={() => setActiveTab('stage2')} className="btn btn-primary">
              Ir a la Micro App: Cortes Seguros & Texturas <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
