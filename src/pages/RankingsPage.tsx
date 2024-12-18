import React, { useState } from 'react';
import RankingList from '../components/rankings/RankingList';
import RecommendedActions from '../components/rankings/RecommendedActions';
import UserProgress from '../components/gamification/UserProgress';

const RankingsPage = () => {
  const [currentMonth, setCurrentMonth] = useState('Juin');

  const mockUsers = [
    { id: '1', name: 'Mathilde L.', points: 23123, position: 1 },
    { id: '2', name: 'Anne-Sophie P.', points: 12034, position: 2 },
    { id: '3', name: 'Laura D.', points: 11234, position: 3 },
    { id: '4', name: 'Daniel T.', points: 734, position: 4 },
    { id: '5', name: 'Jean Durand', points: 540, position: 5, isCurrentUser: true }
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 pt-1">
      <div className="mb-2">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Classements</h1>
        <p className="mt-0.5 text-gray-600 dark:text-gray-400">Suivez votre progression et comparez-vous aux autres</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        <div className="lg:col-span-2 space-y-2">
          <UserProgress 
            level={8}
            currentPoints={540}
            nextLevelPoints={1000}
            rank="Éco-débutant"
            weeklyProgress={45}
          />
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">Classement {currentMonth} 2024</h2>
              <select 
                value={currentMonth}
                onChange={(e) => setCurrentMonth(e.target.value)}
                className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white dark:bg-gray-700"
              >
                {['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin'].map(month => (
                  <option key={month} value={month}>{month}</option>
                ))}
              </select>
            </div>
            
            <RankingList 
              users={mockUsers}
              currentUserPosition={5}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-3">Actions recommandées</h2>
            <RecommendedActions />
          </div>
        </div>
      </div>
    </main>
  );
};

export default RankingsPage;
