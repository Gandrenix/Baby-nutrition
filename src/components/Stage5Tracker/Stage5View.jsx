import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { defaultAllergensList, acceptanceRatings } from '../../data/defaultTrackerData';
import { ClipboardList, PlusCircle, ShieldAlert, CheckCircle2, Trash2, Printer, Award, Calendar, AlertTriangle, User } from 'lucide-react';

export const Stage5View = () => {
  const {
    babyProfile,
    setBabyProfile,
    foodLogs,
    addFoodLog,
    deleteFoodLog,
    allergenStatus,
    updateAllergenDay,
    setAllergenReaction
  } = useApp();

  const [activeSubTab, setActiveSubTab] = useState('logs'); // 'logs' | 'allergens' | 'report'
  const [showAddLogModal, setShowAddLogModal] = useState(false);

  // New Log Form State
  const [newLog, setNewLog] = useState({
    foodName: '',
    date: new Date().toISOString().split('T')[0],
    rating: 'loved',
    isAllergen: false,
    allergenId: '',
    symptoms: 'Ninguno',
    notes: ''
  });

  const handleCreateLog = (e) => {
    e.preventDefault();
    if (!newLog.foodName.trim()) return;
    addFoodLog(newLog);
    setNewLog({
      foodName: '',
      date: new Date().toISOString().split('T')[0],
      rating: 'loved',
      isAllergen: false,
      allergenId: '',
      symptoms: 'Ninguno',
      notes: ''
    });
    setShowAddLogModal(false);
  };

  const handlePrintReport = () => {
    window.print();
  };

  return (
    <div className="stage-5-container">
      <div className="stage-hero no-print">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <span className="badge badge-success" style={{ fontSize: '0.85rem' }}>
            📊 Etapa 5 • Módulo de Seguimiento
          </span>
        </div>
        <h1>Bitácora de Alimentos, Matriz de Alérgenos & Progreso</h1>
        <p>
          Registra cada nuevo alimento introducido, monitorea el protocolo de los 3 días para alérgenos principales, evalúa síntomas y genera un reporte completo para la consulta médica.
        </p>
      </div>

      {/* Profile Bar */}
      <div className="card no-print" style={{ padding: '1.2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <User size={28} color="var(--primary)" />
            <div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--dark-navy)' }}>
                Bebé: {babyProfile.name || 'Mi Bebé'}
              </h3>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Inicio de sólidos: {babyProfile.startDate} • Método: {babyProfile.method}
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {[
              { id: 'logs', label: '📖 Bitácora Diario' },
              { id: 'allergens', label: '🛡️ Matriz de Alérgenos' },
              { id: 'report', label: '📄 Reporte Pediátrico' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id)}
                className={`btn ${activeSubTab === tab.id ? 'btn-primary' : 'btn-outline'}`}
                style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* SUBTAB 1: FOOD LOGS */}
      {activeSubTab === 'logs' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
            <h2 style={{ fontSize: '1.3rem', color: 'var(--dark-navy)' }}>
              Alimentos Probados ({foodLogs.length})
            </h2>
            <button onClick={() => setShowAddLogModal(true)} className="btn btn-primary">
              <PlusCircle size={18} /> Registrar Nuevo Alimento
            </button>
          </div>

          <div className="grid-2">
            {foodLogs.map((log) => {
              const ratingObj = acceptanceRatings.find((r) => r.value === log.rating) || acceptanceRatings[0];
              return (
                <div
                  key={log.id}
                  style={{
                    background: '#ffffff',
                    borderRadius: 'var(--border-radius-md)',
                    padding: '1.2rem',
                    boxShadow: 'var(--shadow-sm)',
                    border: log.isAllergen ? '1.5px solid var(--warning)' : '1px solid rgba(0,0,0,0.06)',
                    position: 'relative'
                  }}
                >
                  <button
                    onClick={() => deleteFoodLog(log.id)}
                    style={{ position: 'absolute', top: '12px', right: '12px', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
                  >
                    <Trash2 size={18} />
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      <Calendar size={14} style={{ display: 'inline', marginRight: '4px' }} />
                      {log.date}
                    </span>
                    {log.isAllergen && <span className="badge badge-warning">Alérgeno</span>}
                  </div>

                  <h3 style={{ fontSize: '1.2rem', color: 'var(--dark-navy)', marginBottom: '0.5rem' }}>
                    {log.foodName}
                  </h3>

                  <div style={{ marginBottom: '0.6rem' }}>
                    <span
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        color: ratingObj.color,
                        background: 'rgba(0,0,0,0.03)',
                        padding: '0.25rem 0.6rem',
                        borderRadius: 'var(--border-radius-pill)'
                      }}
                    >
                      {ratingObj.label}
                    </span>
                  </div>

                  {log.symptoms && (
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                      🩺 <strong>Síntomas:</strong> {log.symptoms}
                    </p>
                  )}

                  {log.notes && (
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      📝 <strong>Notas:</strong> {log.notes}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* SUBTAB 2: ALLERGEN MATRIX */}
      {activeSubTab === 'allergens' && (
        <div className="card">
          <div className="card-header-title">
            <ShieldAlert size={24} color="var(--warning)" />
            <span>Matriz de Control de Alérgenos (Regla de los 3 Días)</span>
          </div>
          <p className="card-subtitle">
            Marca el cumplimiento de los 3 días consecutivos por la mañana para cada alérgeno.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {defaultAllergensList.map((all) => {
              const statusData = allergenStatus[all.id] || { day1: false, day2: false, day3: false, status: 'pending', notes: '' };
              return (
                <div
                  key={all.id}
                  style={{
                    background: '#ffffff',
                    padding: '1.2rem',
                    borderRadius: 'var(--border-radius-md)',
                    border: '1px solid rgba(0,0,0,0.08)',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: '220px' }}>
                    <span style={{ fontSize: '2rem' }}>{all.icon}</span>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', color: 'var(--dark-navy)' }}>{all.name}</h4>
                      <span className="badge badge-info">{all.category}</span>
                    </div>
                  </div>

                  {/* Day Checkboxes */}
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    {[1, 2, 3].map((dayNum) => {
                      const checked = statusData[`day${dayNum}`];
                      return (
                        <button
                          key={dayNum}
                          onClick={() => updateAllergenDay(all.id, dayNum, !checked)}
                          className={`btn ${checked ? 'btn-primary' : 'btn-outline'}`}
                          style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}
                        >
                          {checked ? <CheckCircle2 size={14} /> : null} Día {dayNum}
                        </button>
                      );
                    })}
                  </div>

                  {/* Status Badge */}
                  <div>
                    {statusData.status === 'passed' && <span className="badge badge-success">✅ Superado</span>}
                    {statusData.status === 'testing' && <span className="badge badge-warning">⏳ En Evaluación</span>}
                    {statusData.status === 'pending' && <span className="badge badge-info">Pendiente</span>}
                    {statusData.status === 'reaction' && <span className="badge badge-danger">⚠️ Reacción Observada</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* SUBTAB 3: PEDIATRIC PRINTABLE REPORT */}
      {activeSubTab === 'report' && (
        <div>
          <div className="no-print" style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
            <button onClick={handlePrintReport} className="btn btn-primary">
              <Printer size={18} /> Imprimir / Exportar a PDF
            </button>
          </div>

          <div
            className="card"
            style={{
              background: '#ffffff',
              padding: '2.5rem',
              borderRadius: 'var(--border-radius-lg)',
              boxShadow: 'var(--shadow-md)',
              border: '2px solid rgba(0,0,0,0.1)'
            }}
          >
            <div style={{ borderBottom: '2px solid var(--primary)', paddingBottom: '1rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h1 style={{ fontSize: '1.8rem', color: 'var(--primary)' }}>NutriBebé • Informe Pediátrico</h1>
                <p style={{ color: 'var(--text-muted)' }}>Resumen de Alimentación Complementaria y Tolerancia a Alimentos</p>
              </div>
              <div style={{ textAlign: 'right', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <strong>Fecha del Reporte:</strong> {new Date().toLocaleDateString()}
              </div>
            </div>

            <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
              <div>
                <p><strong>Nombre del Bebé:</strong> {babyProfile.name || 'Mi Bebé'}</p>
                <p><strong>Fecha de Inicio:</strong> {babyProfile.startDate}</p>
              </div>
              <div>
                <p><strong>Método Utilizado:</strong> {babyProfile.method}</p>
                <p><strong>Total Alimentos Probados:</strong> {foodLogs.length}</p>
              </div>
            </div>

            <h3 style={{ fontSize: '1.2rem', color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>
              🛡️ Estado de Alérgenos Principales:
            </h3>

            <table className="custom-table" style={{ marginBottom: '2rem' }}>
              <thead>
                <tr>
                  <th>Alérgeno</th>
                  <th>Días Probados</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {defaultAllergensList.map((all) => {
                  const status = allergenStatus[all.id] || { day1: false, day2: false, day3: false, status: 'pending' };
                  const daysCount = [status.day1, status.day2, status.day3].filter(Boolean).length;
                  return (
                    <tr key={all.id}>
                      <td>{all.name}</td>
                      <td>{daysCount} de 3 días</td>
                      <td>
                        {status.status === 'passed' ? '✅ Sin Reacción' : status.status === 'testing' ? '⏳ En curso' : status.status === 'reaction' ? '⚠️ Reacción' : 'Pendiente'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <h3 style={{ fontSize: '1.2rem', color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>
              📖 Historial Reciente de Alimentos:
            </h3>

            <table className="custom-table">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Alimento</th>
                  <th>Aceptación</th>
                  <th>Síntomas / Digestión</th>
                </tr>
              </thead>
              <tbody>
                {foodLogs.map((log) => (
                  <tr key={log.id}>
                    <td>{log.date}</td>
                    <td>{log.foodName}</td>
                    <td>{log.rating}</td>
                    <td>{log.symptoms || 'Ninguno'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Modal Add Log */}
      {showAddLogModal && (
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
          onClick={() => setShowAddLogModal(false)}
        >
          <div
            style={{
              background: '#ffffff',
              borderRadius: 'var(--border-radius-lg)',
              maxWidth: '500px',
              width: '100%',
              padding: '2rem'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ fontSize: '1.4rem', color: 'var(--dark-navy)', marginBottom: '1.2rem' }}>
              Registrar Nuevo Alimento
            </h2>

            <form onSubmit={handleCreateLog}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.3rem' }}>
                  Nombre del Alimento:
                </label>
                <input
                  type="text"
                  required
                  placeholder="ej. Camote al vapor, Huevo duro, Palta..."
                  value={newLog.foodName}
                  onChange={(e) => setNewLog({ ...newLog, foodName: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc' }}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.3rem' }}>
                  Fecha de prueba:
                </label>
                <input
                  type="date"
                  required
                  value={newLog.date}
                  onChange={(e) => setNewLog({ ...newLog, date: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc' }}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.3rem' }}>
                  Nivel de Aceptación:
                </label>
                <select
                  value={newLog.rating}
                  onChange={(e) => setNewLog({ ...newLog, rating: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc' }}
                >
                  {acceptanceRatings.map((r) => (
                    <option key={r.value} value={r.value}>{r.label}</option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={newLog.isAllergen}
                    onChange={(e) => setNewLog({ ...newLog, isAllergen: e.target.checked })}
                  />
                  ¿Es uno de los 9 alérgenos principales?
                </label>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.3rem' }}>
                  Síntomas o notas de digestión:
                </label>
                <textarea
                  placeholder="ej. Tolerado sin sarpullido, heces normales..."
                  value={newLog.symptoms}
                  onChange={(e) => setNewLog({ ...newLog, symptoms: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc', rows: 3 }}
                />
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                <button type="button" onClick={() => setShowAddLogModal(false)} className="btn btn-outline">
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary">
                  Guardar Registro
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
