import React from 'react';
import { formatValue } from './utils/formatters';
import { generatePoints, calculateYScale } from './utils/calculations';
import ChartGrid from './ChartGrid';
import ChartLine from './ChartLine';
import ChartPoints from './ChartPoints';
import ChartLabels from './ChartLabels';

export interface DataPoint {
  label: string;
  value: number;
}

interface LineChartProps {
  data: DataPoint[];
  height?: number;
  color?: string;
  showPoints?: boolean;
  showLabels?: boolean;
  showGrid?: boolean;
  formatY?: (value: number) => string;
}

const LineChart = ({
  data,
  height = 200,
  color = '#059669',
  showPoints = true,
  showLabels = true,
  showGrid = true,
  formatY = formatValue
}: LineChartProps) => {
  const { min, max, step } = calculateYScale(data.map(d => d.value));
  const points = generatePoints(data, height, min, max);

  return (
    <div className="relative h-64">
      <svg width="100%" height={height} className="overflow-visible">
        {showGrid && (
          <ChartGrid
            height={height}
            min={min}
            max={max}
            step={step}
            formatY={formatY}
          />
        )}

        <ChartLine points={points} color={color} />

        {showPoints && (
          <ChartPoints
            points={points}
            data={data}
            color={color}
            formatY={formatY}
          />
        )}

        {showLabels && (
          <ChartLabels
            data={data}
            height={height}
          />
        )}
      </svg>
    </div>
  );
};

export default LineChart;