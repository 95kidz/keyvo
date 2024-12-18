import React from 'react';

interface ChartLineProps {
  points: string;
  color: string;
}

const ChartLine = ({ points, color }: ChartLineProps) => (
  <polyline
    points={points}
    fill="none"
    stroke={color}
    strokeWidth="2"
    className="drop-shadow-md"
  />
);

export default ChartLine;