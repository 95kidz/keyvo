import React from 'react';
import { Calendar, Leaf, ShoppingBag, Trophy } from 'lucide-react';

interface HistoryItem {
  id: string;
  type: 'purchase' | 'challenge' | 'recipe';
  title: string;
  impact: string;
  points: number;
  date: string;
}

const ImpactHistory = () => {
  const history: HistoryItem[] = [
    {
      id: '1',
      type: 'purchase',
      title: 'Liste de courses écoresponsable',
      impact: '-2.5 kg CO₂',
      points: 50,
      date: 'Il y a 1 jour'
    },
    {
      id: '2',
      type: 'challenge',
      title: 'Défi Zéro Déchet',
      impact: '-5.0 kg CO₂',
      points: 100,
      date: 'Il y a 2 jours'
    },
    {
      id: '3',
      type: 'recipe',
      title: 'Recette végétarienne',
      impact: '-1.8 kg CO₂',
      points: 30,
      date: 'Il y a 3 jours'
    }
  ];

  const getIcon = (type: HistoryItem['type']) => {
    switch (type) {
      case 'purchase':
        return ShoppingBag;
      case 'challenge':
        return Trophy;
      case 'recipe':
        return Leaf;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">Historique des actions</h2>
      <div className="space-y-4">
        {history.map((item) => {
          const Icon = getIcon(item.type);
          return (
            <div key={item.id} className="flex items-center justify-between py-3 border-b last:border-0">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <Icon className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="font-medium">{item.title}</p>
                  <div className="flex items-center space-x-3 text-sm">
                    <span className="text-emerald-600">{item.impact}</span>
                    <span className="text-gray-600">+{item.points} points</span>
                  </div>
                </div>
              </div>
              <span className="text-sm text-gray-500">{item.date}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImpactHistory;