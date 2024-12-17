import React from 'react';
import { Star, Trophy, Award } from 'lucide-react';

interface UserLevelProps {
  level: number;
  currentPoints: number;
  nextLevelPoints: number;
}

const UserLevel = ({ level, currentPoints, nextLevelPoints }: UserLevelProps) => {
  const progress = (currentPoints / nextLevelPoints) * 100;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-emerald-100 rounded-full">
            <Trophy className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Niveau {level}</h3>
            <p className="text-sm text-gray-600">Éco-warrior</p>
          </div>
        </div>
        <Award className="w-8 h-8 text-emerald-600" />
      </div>

      <div className="mb-2">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>{currentPoints} points</span>
          <span>{nextLevelPoints} points</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full">
          <div 
            className="h-2 bg-emerald-600 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <p className="text-sm text-gray-600">
        Plus que {nextLevelPoints - currentPoints} points pour le niveau {level + 1}
      </p>
    </div>
  );
};

export default UserLevel;