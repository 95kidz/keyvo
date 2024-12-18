import React from 'react';
import { Trophy, Star, Lock } from 'lucide-react';

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  points: number;
  unlocked: boolean;
  progress?: {
    current: number;
    total: number;
  };
}

const AchievementSystem = () => {
  const achievements: Achievement[] = [
    {
      id: '1',
      name: 'Éco-débutant',
      description: 'Complétez votre premier défi écologique',
      icon: '🌱',
      points: 50,
      unlocked: true
    },
    {
      id: '2',
      name: 'Chef Végétarien',
      description: 'Créez 5 recettes végétariennes',
      icon: '👨‍🍳',
      points: 100,
      unlocked: false,
      progress: {
        current: 3,
        total: 5
      }
    },
    {
      id: '3',
      name: 'Zéro Déchet',
      description: 'Maintenez un mode de vie zéro déchet pendant 30 jours',
      icon: '♻️',
      points: 200,
      unlocked: false,
      progress: {
        current: 18,
        total: 30
      }
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Réalisations</h2>
        <div className="flex items-center space-x-2 text-emerald-600">
          <Trophy className="w-5 h-5" />
          <span className="font-medium">350 pts</span>
        </div>
      </div>

      <div className="grid gap-4">
        {achievements.map(achievement => (
          <div
            key={achievement.id}
            className={`p-4 rounded-lg border-2 ${
              achievement.unlocked 
                ? 'border-emerald-500 bg-emerald-50'
                : 'border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{achievement.icon}</span>
                <div>
                  <h3 className="font-medium">{achievement.name}</h3>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {achievement.unlocked ? (
                  <div className="flex items-center space-x-1 text-emerald-600">
                    <Star className="w-5 h-5" />
                    <span>{achievement.points}</span>
                  </div>
                ) : (
                  <Lock className="w-5 h-5 text-gray-400" />
                )}
              </div>
            </div>

            {achievement.progress && !achievement.unlocked && (
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progression</span>
                  <span>{achievement.progress.current}/{achievement.progress.total}</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-emerald-600 rounded-full transition-all duration-300"
                    style={{ 
                      width: `${(achievement.progress.current / achievement.progress.total) * 100}%`
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementSystem;