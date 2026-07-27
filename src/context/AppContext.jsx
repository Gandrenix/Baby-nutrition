import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialBabyProfile, sampleFoodLogs, defaultAllergensList } from '../data/defaultTrackerData';

const AppContext = createContext();

const STORAGE_KEYS = {
  BABY_PROFILE: 'nutribebe_baby_profile',
  FOOD_LOGS: 'nutribebe_food_logs',
  ALLERGEN_STATUS: 'nutribebe_allergen_status',
  FAVORITE_RECIPES: 'nutribebe_favorite_recipes',
  READINESS_ANSWERS: 'nutribebe_readiness_answers'
};

export const AppProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('stage1');

  // Baby Profile State
  const [babyProfile, setBabyProfile] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.BABY_PROFILE);
    return saved ? JSON.parse(saved) : initialBabyProfile;
  });

  // Food Trial Logs State
  const [foodLogs, setFoodLogs] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.FOOD_LOGS);
    return saved ? JSON.parse(saved) : sampleFoodLogs;
  });

  // Allergen Matrix Status State
  const [allergenStatus, setAllergenStatus] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.ALLERGEN_STATUS);
    if (saved) return JSON.parse(saved);
    const initial = {};
    defaultAllergensList.forEach((all) => {
      initial[all.id] = {
        day1: false,
        day2: false,
        day3: false,
        status: 'pending', // 'pending' | 'testing' | 'passed' | 'reaction'
        notes: ''
      };
    });
    // Pre-mark egg as testing day 1 for demo
    initial['huevo'] = { day1: true, day2: false, day3: false, status: 'testing', notes: 'Ofrecido en tortilla suave' };
    return initial;
  });

  // Favorite Recipes
  const [favoriteRecipes, setFavoriteRecipes] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.FAVORITE_RECIPES);
    return saved ? JSON.parse(saved) : ['panqueques-platano-avena'];
  });

  // Readiness Test Answers
  const [readinessAnswers, setReadinessAnswers] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.READINESS_ANSWERS);
    return saved ? JSON.parse(saved) : {};
  });

  // Sync to LocalStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.BABY_PROFILE, JSON.stringify(babyProfile));
  }, [babyProfile]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.FOOD_LOGS, JSON.stringify(foodLogs));
  }, [foodLogs]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ALLERGEN_STATUS, JSON.stringify(allergenStatus));
  }, [allergenStatus]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.FAVORITE_RECIPES, JSON.stringify(favoriteRecipes));
  }, [favoriteRecipes]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.READINESS_ANSWERS, JSON.stringify(readinessAnswers));
  }, [readinessAnswers]);

  // Actions
  const addFoodLog = (newLog) => {
    const logWithId = { ...newLog, id: `log-${Date.now()}` };
    setFoodLogs((prev) => [logWithId, ...prev]);
  };

  const deleteFoodLog = (logId) => {
    setFoodLogs((prev) => prev.filter((log) => log.id !== logId));
  };

  const updateAllergenDay = (allergenId, dayNum, value) => {
    setAllergenStatus((prev) => {
      const current = prev[allergenId] || { day1: false, day2: false, day3: false, status: 'pending', notes: '' };
      const updatedDays = { ...current, [`day${dayNum}`]: value };
      
      // Determine overall status
      let newStatus = 'pending';
      if (updatedDays.day1 || updatedDays.day2 || updatedDays.day3) {
        newStatus = 'testing';
      }
      if (updatedDays.day1 && updatedDays.day2 && updatedDays.day3) {
        newStatus = 'passed';
      }

      return {
        ...prev,
        [allergenId]: { ...updatedDays, status: updatedDays.status === 'reaction' ? 'reaction' : newStatus }
      };
    });
  };

  const setAllergenReaction = (allergenId, isReaction, notes = '') => {
    setAllergenStatus((prev) => ({
      ...prev,
      [allergenId]: {
        ...prev[allergenId],
        status: isReaction ? 'reaction' : 'passed',
        notes
      }
    }));
  };

  const toggleFavoriteRecipe = (recipeId) => {
    setFavoriteRecipes((prev) =>
      prev.includes(recipeId) ? prev.filter((id) => id !== recipeId) : [...prev, recipeId]
    );
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        babyProfile,
        setBabyProfile,
        foodLogs,
        addFoodLog,
        deleteFoodLog,
        allergenStatus,
        updateAllergenDay,
        setAllergenReaction,
        favoriteRecipes,
        toggleFavoriteRecipe,
        readinessAnswers,
        setReadinessAnswers
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
