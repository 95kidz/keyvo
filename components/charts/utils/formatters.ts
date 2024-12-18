export const formatValue = (value: number): string => {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}k`;
  }
  return value.toString();
};

export const formatCO2 = (value: number): string => {
  return `${value} kg`;
};