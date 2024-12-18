import React from 'react';
import { Trophy, Star, Award } from 'lucide-react';

interface UserProgressProps {
  level: number;
  currentPoints: number;
  nextLevelPoints: number;
  rank: string;
  weeklyProgress: number;
}

const UserProgress = ({ level, currentPoints, nextLevelPoints, rank, weeklyProgress }: UserProgressProps) => {
  const progress = (currentPoints / nextLevelPoints) * 100;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-emerald-100 rounded-full">
            <Trophy className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Niveau {level}</h3>
            <p className="text-sm text-gray-600">{rank}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Star className="w-5 h-5 text-emerald-600" />
          <span className="font-bold">{currentPoints}</span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progression niveau {level + 1}</span>
            <span>{currentPoints} / {nextLevelPoints}</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div 
              className="h-2 bg-emerald-600 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Objectif hebdomadaire</span>
            <span>{weeklyProgress}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div 
              className="h-2 bg-amber-500 rounded-full transition-all duration-300"
              style={{ width: `${weeklyProgress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-emerald-600">12</div>
          <div className="text-sm text-gray-600">Défis</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-emerald-600">8</div>
          <div className="text-sm text-gray-600">Badges</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-emerald-600">3</div>
          <div className="text-sm text-gray-600">Récompenses</div>
        </div>
      </div>
    </div>
  );
};

export default UserProgress;