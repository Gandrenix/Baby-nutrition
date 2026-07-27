import React, { useState } from 'react';
import { recipesDatabase, availableIngredientsList } from '../../data/recipesData';
import { useApp } from '../../context/AppContext';
import { Utensils, Heart, Clock, Check, Sparkles, Filter, ShieldCheck, Flame } from 'lucide-react';

export const Stage3View = () => {
  const { favoriteRecipes, toggleFavoriteRecipe } = useApp();
  const [selectedPantry, setSelectedPantry] = useState([]);
  const [selectedAgeFilter, setSelectedAgeFilter] = useState('all');
  const [selectedMethodFilter, setSelectedMethodFilter] = useState('all');
  const [onlyIronRich, setOnlyIronRich] = useState(false);
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [activeRecipeModal, setActiveRecipeModal] = useState(null);

  const togglePantryIngredient = (ing) => {
    setSelectedPantry((prev) =>
      prev.includes(ing) ? prev.filter((item) => item !== ing) : [...prev, ing]
    );
  };

  const filteredRecipes = recipesDatabase.filter((recipe) => {
    // Age filter
    if (selectedAgeFilter !== 'all' && recipe.ageRange !== selectedAgeFilter) return false;
    // Method filter
    if (selectedMethodFilter !== 'all' && !recipe.method.includes(selectedMethodFilter)) return false;
    // Iron filter
    if (onlyIronRich && !recipe.ironRich) return false;
    // Favorites filter
    if (onlyFavorites && !favoriteRecipes.includes(recipe.id)) return false;
    // Pantry Ingredient Matcher filter
    if (selectedPantry.length > 0) {
      const hasMatch = selectedPantry.some((ing) => recipe.ingredients.includes(ing));
      if (!hasMatch) return false;
    }
    return true;
  });

  return (
    <div className="stage-3-container">
      <div className="stage-hero">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <span className="badge badge-warning" style={{ fontSize: '0.85rem' }}>
            🍳 Etapa 3 • Módulo de Recetas
          </span>
        </div>
        <h1>Recetas Inteligentes para Alimentación Complementaria</h1>
        <p>
          Encuentra preparaciones adaptadas según la edad del bebé, el método de alimentación (Tradicional, BLW, BLISS) y los alimentos que tienes disponibles hoy en casa.
        </p>
      </div>

      {/* Pantry Matcher Box: "¿Qué tengo en casa?" */}
      <div className="card" style={{ background: 'linear-gradient(135deg, #FFF9F2 0%, #FDF3E7 100%)', border: '1.5px solid var(--accent-amber)' }}>
        <div className="card-header-title">
          <Sparkles size={24} color="var(--primary)" />
          <span>Buscador Inteligente: "¿Qué tengo en mi cocina hoy?"</span>
        </div>
        <p className="card-subtitle">
          Haz clic en los ingredientes que tienes a mano para filtrar recetas deliciosas y seguras sin salir a comprar.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
          {availableIngredientsList.map((ing) => {
            const isSelected = selectedPantry.includes(ing);
            return (
              <button
                key={ing}
                onClick={() => togglePantryIngredient(ing)}
                className={`btn ${isSelected ? 'btn-primary' : 'btn-outline'}`}
                style={{
                  fontSize: '0.85rem',
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--border-radius-pill)',
                  background: isSelected ? 'var(--primary)' : '#ffffff'
                }}
              >
                {isSelected && <Check size={14} />} {ing}
              </button>
            );
          })}
        </div>

        {selectedPantry.length > 0 && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 600 }}>
              Filtrando recetas con {selectedPantry.length} ingrediente(s) seleccionado(s).
            </span>
            <button onClick={() => setSelectedPantry([])} style={{ background: 'none', color: 'var(--danger)', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>
              Limpiar selección
            </button>
          </div>
        )}
      </div>

      {/* Filters Bar */}
      <div className="card" style={{ padding: '1.2rem' }}>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Filter size={18} color="var(--text-muted)" />
            <strong style={{ fontSize: '0.9rem' }}>Filtros:</strong>
          </div>

          <select
            value={selectedAgeFilter}
            onChange={(e) => setSelectedAgeFilter(e.target.value)}
            style={{ padding: '0.5rem 0.9rem', borderRadius: 'var(--border-radius-pill)', border: '1px solid #ccc', background: '#fff' }}
          >
            <option value="all">Todas las edades</option>
            <option value="6m">6 a 7 Meses</option>
            <option value="8m">8 a 9 Meses</option>
            <option value="10m">10 a 12+ Meses</option>
          </select>

          <select
            value={selectedMethodFilter}
            onChange={(e) => setSelectedMethodFilter(e.target.value)}
            style={{ padding: '0.5rem 0.9rem', borderRadius: 'var(--border-radius-pill)', border: '1px solid #ccc', background: '#fff' }}
          >
            <option value="all">Todos los métodos</option>
            <option value="BLW">BLW (Baby-Led Weaning)</option>
            <option value="Tradicional">Tradicional / Purés</option>
            <option value="BLISS">Método BLISS</option>
          </select>

          <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={onlyIronRich}
              onChange={(e) => setOnlyIronRich(e.target.checked)}
            />
            🩸 Solo Ricas en Hierro
          </label>

          <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={onlyFavorites}
              onChange={(e) => setOnlyFavorites(e.target.checked)}
            />
            ❤️ Favoritas ({favoriteRecipes.length})
          </label>
        </div>
      </div>

      {/* Recipe List Grid */}
      <div className="grid-2">
        {filteredRecipes.map((recipe) => {
          const isFav = favoriteRecipes.includes(recipe.id);
          return (
            <div
              key={recipe.id}
              style={{
                background: '#ffffff',
                borderRadius: 'var(--border-radius-lg)',
                padding: '1.5rem',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid rgba(0,0,0,0.06)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <button
                onClick={() => toggleFavoriteRecipe(recipe.id)}
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: isFav ? 'var(--danger-light)' : 'rgba(0,0,0,0.04)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <Heart size={20} color={isFav ? 'var(--danger)' : 'var(--text-muted)'} fill={isFav ? 'var(--danger)' : 'none'} />
              </button>

              <div>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                  <span className="badge badge-info">{recipe.ageRange}+</span>
                  {recipe.method.map((m) => (
                    <span key={m} className="badge badge-success">{m}</span>
                  ))}
                  {recipe.ironRich && <span className="badge badge-danger">Hierro 🩸</span>}
                </div>

                <h3 style={{ fontSize: '1.25rem', color: 'var(--dark-navy)', marginBottom: '0.5rem', paddingRight: '2rem' }}>
                  {recipe.title}
                </h3>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Clock size={16} /> Prep: {recipe.prepTime}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Flame size={16} /> Cocción: {recipe.cookTime}
                  </span>
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  {recipe.notes}
                </p>
              </div>

              <button onClick={() => setActiveRecipeModal(recipe)} className="btn btn-primary" style={{ width: '100%' }}>
                <Utensils size={18} /> Ver Preparación Paso a Paso
              </button>
            </div>
          );
        })}
      </div>

      {/* Recipe Modal */}
      {activeRecipeModal && (
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
          onClick={() => setActiveRecipeModal(null)}
        >
          <div
            style={{
              background: '#ffffff',
              borderRadius: 'var(--border-radius-lg)',
              maxWidth: '650px',
              width: '100%',
              padding: '2rem',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div>
                <h2 style={{ fontSize: '1.5rem', color: 'var(--dark-navy)', marginBottom: '0.2rem' }}>
                  {activeRecipeModal.title}
                </h2>
                <span className="badge badge-info">Edad recomendada: {activeRecipeModal.ageRange}+</span>
              </div>
              <button onClick={() => setActiveRecipeModal(null)} style={{ background: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>
                ✕
              </button>
            </div>

            <h3 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>🛒 Ingredientes:</h3>
            <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              {activeRecipeModal.exactIngredients.map((ing, idx) => (
                <li key={idx} style={{ marginBottom: '0.3rem' }}>{ing}</li>
              ))}
            </ul>

            <h3 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>👩‍🍳 Preparación Paso a Paso:</h3>
            <ol style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              {activeRecipeModal.instructions.map((step, idx) => (
                <li key={idx} style={{ marginBottom: '0.6rem' }}>{step}</li>
              ))}
            </ol>

            <div style={{ background: 'var(--primary-light)', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
              <strong style={{ color: 'var(--primary)', display: 'block', marginBottom: '0.3rem' }}>
                ❄️ Consejos de Conservación:
              </strong>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{activeRecipeModal.storage}</p>
            </div>

            <div style={{ textAlign: 'right' }}>
              <button onClick={() => setActiveRecipeModal(null)} className="btn btn-primary">
                Cerrar Receta
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
