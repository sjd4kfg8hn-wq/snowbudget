import { appState } from './core/state.js';
import { computePowderScore } from './dashboard/powder-score.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Cockpit SnowBudget activado.');
  
  // Renderizado inicial
  updateDashboard();

  // Escuchar cambios de estado
  window.addEventListener('stateUpdated', () => {
    updateDashboard();
  });
});

function updateDashboard() {
  const state = appState.getState();
  const score = computePowderScore(state.incomes, state.expenses, state.goals);
  console.log('Powder Score actualizado:', score);
}
