import React from 'react';
import { Bell, User } from 'lucide-react';

interface RankingHeaderProps {
  currentMonth: string;
  onMonthChange: (month: string) => void;
}

const RankingHeader = ({ currentMonth, onMonthChange }: RankingHeaderProps) => {
  const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 
                 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-900">Classements</h1>
        <div className="flex items-center space-x-3">
          <button className="relative">
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
              2
            </span>
          </button>
          <button>
            <User className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <select 
          value={currentMonth}
          onChange={(e) => onMonthChange(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        >
          {months.map(month => (
            <option key={month} value={month}>{month} 2024</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default RankingHeader;