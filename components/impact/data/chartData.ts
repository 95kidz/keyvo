export interface ChartData {
  month: string;
  co2Saved: number;
  sustainableProducts: number;
  completedChallenges: number;
}

export const monthlyData: ChartData[] = [
  { month: 'Jan', co2Saved: 85, sustainableProducts: 28, completedChallenges: 5 },
  { month: 'Fév', co2Saved: 92, sustainableProducts: 32, completedChallenges: 7 },
  { month: 'Mar', co2Saved: 98, sustainableProducts: 35, completedChallenges: 8 },
  { month: 'Avr', co2Saved: 105, sustainableProducts: 38, completedChallenges: 9 },
  { month: 'Mai', co2Saved: 115, sustainableProducts: 42, completedChallenges: 10 },
  { month: 'Juin', co2Saved: 125, sustainableProducts: 45, completedChallenges: 12 }
];

export const getGrowthRate = (data: ChartData[]): { monthly: number; yearly: number } => {
  if (data.length < 2) return { monthly: 0, yearly: 0 };

  const currentMonth = data[data.length - 1].co2Saved;
  const lastMonth = data[data.length - 2].co2Saved;
  const lastYear = data[0].co2Saved;

  const monthlyGrowth = ((currentMonth - lastMonth) / lastMonth) * 100;
  const yearlyGrowth = ((currentMonth - lastYear) / lastYear) * 100;

  return {
    monthly: Math.round(monthlyGrowth),
    yearly: Math.round(yearlyGrowth)
  };
};