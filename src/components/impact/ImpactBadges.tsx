import React from 'react';
import { Award, Lock } from 'lucide-react';

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  progress?: number;
}

const ImpactBadges = () => {
  const badges: Badge[] = [
    {
      id: '1',
      name: 'Éco-warrior',
      description: 'Complétez 10 défis écologiques',
      icon: '🌱',
      unlocked: true
    },
    {
      id: '2',
      name: 'Master Chef Bio',
      description: 'Créez 5 recettes végétariennes',
      icon: '👨‍🍳',
      unlocked: true
    },
    {
      id: '3',
      name: 'Zéro Déchet',
      description: 'Réduisez vos déchets de 50%',
      icon: '♻️',
      unlocked: false,
      progress: 75
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold mb-6">Badges et réalisations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {badges.map(badge => (
          <div 
            key={badge.id}
            className={`p-4 rounded-lg border-2 ${
              badge.unlocked ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">{badge.icon}</span>
              {!badge.unlocked && <Lock className="w-4 h-4 text-gray-400" />}
            </div>
            <h3 className="font-semibold mb-1">{badge.name}</h3>
            <p className="text-sm text-gray-600">{badge.description}</p>
            {badge.progress && (
              <div className="mt-2">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progression</span>
                  <span>{badge.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-emerald-600 h-2 rounded-full"
                    style={{ width: `${badge.progress}%` }}
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

export default ImpactBadges;