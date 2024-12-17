import React from 'react';
import { Leaf, Trophy, Star } from 'lucide-react';

interface Action {
  id: string;
  title: string;
  points: number;
  type: 'challenge' | 'quiz' | 'survey';
  difficulty: 'easy' | 'medium' | 'hard';
}

const RecommendedActions = () => {
  const actions: Action[] = [
    {
      id: '1',
      title: 'Quiz sur la biodiversité',
      points: 50,
      type: 'quiz',
      difficulty: 'easy'
    },
    {
      id: '2',
      title: 'Défi zéro déchet',
      points: 100,
      type: 'challenge',
      difficulty: 'medium'
    },
    {
      id: '3',
      title: 'Sondage mobilité',
      points: 30,
      type: 'survey',
      difficulty: 'easy'
    }
  ];

  const getDifficultyColor = (difficulty: Action['difficulty']) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-emerald-100 text-emerald-600';
      case 'medium':
        return 'bg-orange-100 text-orange-600';
      case 'hard':
        return 'bg-red-100 text-red-600';
    }
  };

  return (
    <div className="px-4 mb-8">
      <h3 className="text-sm font-medium text-gray-500 mb-3">Actions recommandées</h3>
      <div className="space-y-3">
        {actions.map((action) => (
          <div key={action.id} className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  {action.type === 'challenge' ? (
                    <Trophy className="w-5 h-5 text-emerald-600" />
                  ) : action.type === 'quiz' ? (
                    <Star className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <Leaf className="w-5 h-5 text-emerald-600" />
                  )}
                </div>
                <div>
                  <h4 className="font-medium">{action.title}</h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(action.difficulty)}`}>
                    {action.difficulty.charAt(0).toUpperCase() + action.difficulty.slice(1)}
                  </span>
                </div>
              </div>
              <div className="flex items-center text-emerald-600">
                <Trophy className="w-4 h-4 mr-1" />
                <span className="font-medium">{action.points} pts</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedActions;