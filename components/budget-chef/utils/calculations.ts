export const calculateMealMetrics = (budget: number, mealsPerDay: number, peopleCount: number) => {
  const weeklyMeals = mealsPerDay * 7;
  const pricePerMeal = budget / (weeklyMeals * peopleCount);

  return {
    weeklyMeals,
    pricePerMeal
  };
};