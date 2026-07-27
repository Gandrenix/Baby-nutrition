import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { HeaderNav } from './components/layout/HeaderNav';
import { Stage1View } from './components/Stage1Readiness/Stage1View';
import { Stage2View } from './components/Stage2Cuts/Stage2View';
import { Stage3View } from './components/Stage3Recipes/Stage3View';
import { Stage4View } from './components/Stage4Education/Stage4View';
import { Stage5View } from './components/Stage5Tracker/Stage5View';

import './styles/index.css';
import './styles/components.css';

const MainAppContent = () => {
  const { activeTab } = useApp();

  return (
    <div className="app-container">
      <HeaderNav />

      <main className="main-content">
        {activeTab === 'stage1' && <Stage1View />}
        {activeTab === 'stage2' && <Stage2View />}
        {activeTab === 'stage3' && <Stage3View />}
        {activeTab === 'stage4' && <Stage4View />}
        {activeTab === 'stage5' && <Stage5View />}
      </main>

      <footer style={{ marginTop: '3rem', textAlign: 'center', padding: '1.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', borderTop: '1px solid rgba(0,0,0,0.05)' }} className="no-print">
        <p> NutriBebé • Alimentación Complementaria basada en evidencia científica (OMS, AAP, ESPGHAN).</p>
        <p style={{ marginTop: '0.3rem', fontSize: '0.8rem' }}>La información presentada en esta aplicación es de carácter educativo y no reemplaza la consulta con tu pediatra o nutricionista infantil.</p>
      </footer>
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <MainAppContent />
    </AppProvider>
  );
}

export default App;
