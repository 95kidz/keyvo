export const generatePoints = (
  data: Array<{ value: number }>,
  height: number,
  min: number,
  max: number
): string => {
  return data
    .map((d, i) => {
      const x = (i / (data.length - 1)) * 100;
      const y = ((max - d.value) / (max - min)) * height;
      return `${x},${y}`;
    })
    .join(' ');
};

export const calculateYScale = (values: number[]) => {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min;
  const step = Math.ceil(range / 5);
  
  return {
    min: Math.floor(min / step) * step,
    max: Math.ceil(max / step) * step,
    step
  };
};