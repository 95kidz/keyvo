import React, { useState } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import LineChart from '../charts/LineChart';
import { monthlyData, getGrowthRate } from './data/chartData';
import { formatCO2 } from '../charts/utils/formatters';

const ImpactChart = () => {
  const [timeRange, setTimeRange] = useState('year');
  const growth = getGrowthRate(monthlyData);

  // Convertir les données pour le LineChart
  const chartData = monthlyData.map(d => ({
    label: d.month,
    value: d.co2Saved
  }));

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Évolution de l'impact</h2>
        <select 
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg"
        >
          <option value="year">Cette année</option>
          <option value="6months">6 derniers mois</option>
          <option value="30days">30 derniers jours</option>
        </select>
      </div>

      <div className="mb-6">
        <LineChart
          data={chartData}
          height={200}
          color="#059669"
          showPoints
          showLabels
          showGrid
          formatY={formatCO2}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-emerald-50 rounded-lg">
          <div className="flex items-center text-emerald-600 mb-1">
            {growth.monthly >= 0 ? (
              <ArrowUp className="w-4 h-4 mr-1" />
            ) : (
              <ArrowDown className="w-4 h-4 mr-1" />
            )}
            <span className="font-medium">{growth.monthly}%</span>
          </div>
          <p className="text-sm text-gray-600">vs mois dernier</p>
        </div>
        <div className="p-4 bg-emerald-50 rounded-lg">
          <div className="flex items-center text-emerald-600 mb-1">
            {growth.yearly >= 0 ? (
              <ArrowUp className="w-4 h-4 mr-1" />
            ) : (
              <ArrowDown className="w-4 h-4 mr-1" />
            )}
            <span className="font-medium">{growth.yearly}%</span>
          </div>
          <p className="text-sm text-gray-600">vs année dernière</p>
        </div>
      </div>
    </div>
  );
};

export default ImpactChart;