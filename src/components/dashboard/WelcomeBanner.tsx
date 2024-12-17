import React from 'react';
import { Star, TrendingUp } from 'lucide-react';

const WelcomeBanner = () => {
  const currentTime = new Date().getHours();
  const greeting = currentTime < 12 ? 'Bonjour' : currentTime < 18 ? 'Bon après-midi' : 'Bonsoir';

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:flex md:items-center md:justify-between">
      <div className="mb-4 md:mb-0">
        <h1 className="text-2xl font-bold text-gray-900">{greeting}, Jean 👋</h1>
        <p className="mt-1 text-gray-600">Voici votre tableau de bord écoresponsable</p>
      </div>

      <div className="flex flex-col items-start md:items-end space-y-2">
        <div className="flex items-center space-x-2 text-emerald-600">
          <Star className="w-5 h-5" />
          <span className="font-bold text-lg">500 points</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <TrendingUp className="w-4 h-4 mr-1" />
          <span>+25 points cette semaine</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;