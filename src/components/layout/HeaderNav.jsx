import React from 'react';
import { useApp } from '../../context/AppContext';
import { Apple, Award, ShieldCheck, Utensils, BookOpen, ClipboardList } from 'lucide-react';

export const HeaderNav = () => {
  const { activeTab, setActiveTab } = useApp();

  const stages = [
    { id: 'stage1', label: '1. Test Gratuito', badge: 'Gratis', icon: Award },
    { id: 'stage2', label: '2. Cortes & Texturas', badge: 'Micro App', icon: ShieldCheck },
    { id: 'stage3', label: '3. Recetas', badge: 'Cocina', icon: Utensils },
    { id: 'stage4', label: '4. Educación', badge: 'Evidencia', icon: BookOpen },
    { id: 'stage5', label: '5. Seguimiento', badge: 'Tracker', icon: ClipboardList }
  ];

  return (
    <>
      <header className="app-header no-print">
        <div className="brand-logo">
          <Apple size={32} color="var(--primary)" />
          <span>NutriBebé</span>
          <span className="brand-badge">Prototipo v1.0</span>
        </div>

        {/* Desktop Navbar */}
        <nav className="stage-nav">
          {stages.map((stage) => {
            const Icon = stage.icon;
            const isActive = activeTab === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveTab(stage.id)}
                className={`nav-btn ${isActive ? 'active' : ''}`}
              >
                <Icon size={18} />
                <span>{stage.label}</span>
                <span className="stage-badge-tag">{stage.badge}</span>
              </button>
            );
          })}
        </nav>
      </header>

      {/* Mobile Floating Bottom Nav */}
      <nav className="mobile-nav-bar no-print">
        {stages.map((stage) => {
          const Icon = stage.icon;
          const isActive = activeTab === stage.id;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveTab(stage.id)}
              className={`mobile-nav-item ${isActive ? 'active' : ''}`}
            >
              <Icon size={20} />
              <span>{stage.id.replace('stage', 'Etapa ')}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
};
