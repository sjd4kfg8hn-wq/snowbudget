import { loadFromStorage, saveToStorage } from './storage.js';

class StateManager {
  constructor() {
    this.state = loadFromStorage() || {
      incomes: [],
      expenses: [],
      goals: [],
      unlockedAchievements: []
    };
  }

  getState() {
    return this.state;
  }

  addExpense(expense) {
    this.state.expenses.push(expense);
    this.sync();
  }

  addIncome(income) {
    this.state.incomes.push(income);
    this.sync();
  }

  addGoal(goal) {
    this.state.goals.push(goal);
    this.sync();
  }

  sync() {
    saveToStorage(this.state);
    window.dispatchEvent(new CustomEvent('stateUpdated', { detail: this.state }));
  }
}

export const appState = new StateManager();
