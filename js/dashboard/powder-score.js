export function computePowderScore(incomes, expenses, goals) {
  const totalIncome = incomes.reduce((sum, i) => sum + i.amount, 0);
  const totalExpense = expenses.reduce((sum, e) => sum + e.amount, 0);

  if (totalIncome === 0) return 0;

  const savingsRate = Math.max(0, (totalIncome - totalExpense) / totalIncome);
  const scoreFromSavings = savingsRate * 60; // Hasta 60 pts por porcentaje ahorrado

  const avgGoalProgress = goals.length > 0
    ? goals.reduce((acc, g) => acc + (g.saved / g.target), 0) / goals.length
    : 0;
  const scoreFromGoals = avgGoalProgress * 40; // Hasta 40 pts por avance de metas

  return Math.min(100, Math.round(scoreFromSavings + scoreFromGoals));
}
