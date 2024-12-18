import React from 'react';
import { Star, TrendingUp } from 'lucide-react';

const WelcomeBanner = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Bonjour';
    if (hour < 18) return 'Bon après-midi';
    return 'Bonsoir';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 md:p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="mb-4 md:mb-0">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
            {getGreeting()}, Jean 👋
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Voici votre tableau de bord écoresponsable
          </p>
        </div>

        <div className="flex items-center justify-between md:flex-col md:items-end md:space-y-2">
          <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-500">
            <Star className="w-5 h-5" />
            <span className="font-bold text-lg">500 points</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>+25 points cette semaine</span>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Défis en cours</div>
          <div className="text-lg font-semibold text-emerald-600 dark:text-emerald-500">3 défis</div>
        </div>

        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Impact CO₂</div>
          <div className="text-lg font-semibold text-emerald-600 dark:text-emerald-500">-12.5 kg</div>
        </div>

        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Objectif hebdo</div>
          <div className="text-lg font-semibold text-emerald-600 dark:text-emerald-500">75%</div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;