import React from 'react';
import ImpactStats from '../components/impact/ImpactStats';
import ImpactChart from '../components/impact/ImpactChart';
import ImpactBadges from '../components/impact/ImpactBadges';
import ImpactHistory from '../components/impact/ImpactHistory';
import UserProgress from '../components/gamification/UserProgress';
import ActivityFeed from '../components/social/ActivityFeed';

const ImpactPage = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 pt-1">
      <div className="mb-2">
        <h1 className="text-2xl font-bold text-gray-900">Mon Impact</h1>
        <p className="mt-0.5 text-gray-600">Suivez votre contribution environnementale</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        <div className="lg:col-span-2 space-y-2">
          <UserProgress 
            level={12}
            currentPoints={2340}
            nextLevelPoints={3000}
            rank="Éco-warrior"
            weeklyProgress={75}
          />
          <ImpactStats />
          <ImpactChart />
          <ImpactBadges />
          <ImpactHistory />
        </div>

        <div className="space-y-2">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-3">Activité récente</h2>
            <ActivityFeed />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ImpactPage;