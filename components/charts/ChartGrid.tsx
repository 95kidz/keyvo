import React from 'react';

interface ChartGridProps {
  height: number;
  min: number;
  max: number;
  step: number;
  formatY: (value: number) => string;
}

const ChartGrid = ({ height, min, max, step, formatY }: ChartGridProps) => {
  const lines = [];
  for (let i = min; i <= max; i += step) {
    const y = ((max - i) / (max - min)) * height;
    lines.push(
      <g key={i}>
        <line
          x1="0"
          y1={y}
          x2="100%"
          y2={y}
          stroke="#f0f0f0"
          strokeWidth="1"
        />
        <text
          x="-30"
          y={y}
          fill="#666"
          fontSize="12"
          dominantBaseline="middle"
        >
          {formatY(i)}
        </text>
      </g>
    );
  }

  return <>{lines}</>;
};

export default ChartGrid;