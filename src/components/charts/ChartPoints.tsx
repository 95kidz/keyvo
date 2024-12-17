import React from 'react';
import type { DataPoint } from './LineChart';

interface ChartPointsProps {
  points: string;
  data: DataPoint[];
  color: string;
  formatY: (value: number) => string;
}

const ChartPoints = ({ points, data, color, formatY }: ChartPointsProps) => {
  const pointsArray = points.split(' ').map(p => {
    const [x, y] = p.split(',');
    return { x: parseFloat(x), y: parseFloat(y) };
  });

  return (
    <>
      {pointsArray.map((point, i) => (
        <g key={i}>
          <circle
            cx={`${point.x}%`}
            cy={point.y}
            r="4"
            fill={color}
            className="drop-shadow-sm"
          />
          <title>{formatY(data[i].value)}</title>
        </g>
      ))}
    </>
  );
};

export default ChartPoints;