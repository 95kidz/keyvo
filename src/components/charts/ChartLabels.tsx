import React from 'react';
import type { DataPoint } from './LineChart';

interface ChartLabelsProps {
  data: DataPoint[];
  height: number;
}

const ChartLabels = ({ data, height }: ChartLabelsProps) => (
  <>
    {data.map((point, i) => {
      const x = (i / (data.length - 1)) * 100;
      return (
        <text
          key={i}
          x={`${x}%`}
          y={height + 20}
          fill="#666"
          fontSize="12"
          textAnchor="middle"
        >
          {point.label}
        </text>
      );
    })}
  </>
);

export default ChartLabels;