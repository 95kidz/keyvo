import React, { useState } from 'react';
import RewardsFilter from '../components/RewardsFilter';
import RewardCard from '../components/RewardCard';
import RewardExchangeModal from '../components/rewards/RewardExchangeModal';

const RewardsPage = () => {
  const [selectedReward, setSelectedReward] = useState<typeof REWARDS[0] | null>(null);
  const userPoints = 500;

  const REWARDS = [
    // Transport
    {
      logo: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
      partner: 'SNCF',
      name: 'Abonnement SNCF Pro',
      points: 500,
      category: 'Transport'
    },
    {
      logo: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800',
      partner: 'Vélib',
      name: 'Pass annuel Vélib',
      points: 300,
      category: 'Transport'
    },
    // Sport
    {
      logo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
      partner: 'Basic-Fit',
      name: 'Abonnement 3 mois',
      points: 450,
      category: 'Sport'
    },
    {
      logo: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
      partner: 'Fitness Park',
      name: 'Pass mensuel tout accès',
      points: 200,
      category: 'Sport'
    },
    // Culture
    {
      logo: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800',
      partner: 'Musée du Louvre',
      name: 'Pass annuel Louvre',
      points: 350,
      category: 'Culture'
    },
    {
      logo: 'https://images.unsplash.com/photo-1584707824245-f67bad2c62d5?auto=format&fit=crop&q=80&w=800',
      partner: 'Centre Pompidou',
      name: 'Entrée illimitée 6 mois',
      points: 250,
      category: 'Culture'
    },
    // Festivals & Concerts
    {
      logo: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=800',
      partner: 'We Love Green',
      name: 'Pass 3 jours Festival',
      points: 600,
      category: 'Festival'
    },
    {
      logo: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800',
      partner: 'Rock en Seine',
      name: 'Pass journée',
      points: 400,
      category: 'Festival'
    },
    // Alimentation
    {
      logo: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800',
      partner: 'Carrefour Bio',
      name: 'Carte Cadeau 50€',
      points: 300,
      category: 'Alimentation'
    },
    {
      logo: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=800',
      partner: 'Biocoop',
      name: 'Bon d\'achat 30€',
      points: 200,
      category: 'Alimentation'
    },
    // Énergie
    {
      logo: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&q=80&w=800',
      partner: 'EDF',
      name: 'Réduction facture 50€',
      points: 400,
      category: 'Énergie'
    },
    // Bien-être
    {
      logo: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800',
      partner: 'Spa Cinq Mondes',
      name: 'Massage bien-être 1h',
      points: 450,
      category: 'Bien-être'
    },
    // Expériences
    {
      logo: 'https://images.unsplash.com/photo-1452827073306-6e6e661baf57?auto=format&fit=crop&q=80&w=800',
      partner: 'Parc naturel régional',
      name: 'Visite guidée + Atelier',
      points: 150,
      category: 'Expérience'
    },
    {
      logo: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=800',
      partner: 'Ferme Bio',
      name: 'Atelier permaculture',
      points: 180,
      category: 'Expérience'
    },
    // Cinéma
    {
      logo: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=800',
      partner: 'MK2',
      name: 'Carte 5 places',
      points: 250,
      category: 'Culture'
    },
    // Formation
    {
      logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
      partner: 'OpenClassrooms',
      name: 'Formation Développement Durable',
      points: 550,
      category: 'Formation'
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 pt-1">
      <div className="mb-2">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Catalogue des Récompenses</h1>
        <p className="mt-0.5 text-gray-600 dark:text-gray-400">Échangez vos Eco Coins contre des récompenses exclusives</p>
      </div>

      <RewardsFilter />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {REWARDS.map((reward, index) => (
          <RewardCard
            key={index}
            {...reward}
            onExchange={() => setSelectedReward(reward)}
          />
        ))}
      </div>

      {selectedReward && (
        <RewardExchangeModal
          reward={selectedReward}
          userPoints={userPoints}
          onClose={() => setSelectedReward(null)}
        />
      )}
    </main>
  );
};

export default RewardsPage;