import React, { useState } from 'react';
import { Trophy, Search, Tag, Clock, Award, TrendingUp } from 'lucide-react';
import ChallengeDetails from './ChallengeDetails';

interface Challenge {
  id: string;
  title: string;
  description: string;
  category: string;
  points: number;
  difficulty: 'Facile' | 'Moyen' | 'Difficile';
  duration: string;
  progress?: number;
}

const ChallengesList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);

  const categories = ['Mobilité', 'Alimentation', 'Énergie', 'Déchets', 'Shopping'];

  const challenges: Challenge[] = [
    {
      id: '1',
      title: 'Mobilité Verte',
      description: 'Adoptez des modes de transport écologiques pour vos déplacements quotidiens.',
      category: 'Mobilité',
      points: 15,
      difficulty: 'Facile',
      duration: '7 jours'
    },
    {
      id: '2',
      title: 'Shopping Local',
      description: 'Faites vos courses dans des commerces de proximité et bio.',
      category: 'Shopping',
      points: 25,
      difficulty: 'Moyen',
      duration: '1 jour'
    },
    {
      id: '3',
      title: 'Zéro Déchet',
      description: 'Utilisez uniquement des contenants réutilisables.',
      category: 'Déchets',
      points: 30,
      difficulty: 'Moyen',
      duration: '3 jours'
    },
    {
      id: '4',
      title: 'Chef Végétarien',
      description: 'Créez et partagez des recettes végétariennes.',
      category: 'Alimentation',
      points: 40,
      difficulty: 'Difficile',
      duration: '5 jours'
    },
    {
      id: '5',
      title: 'Énergie Consciente',
      description: 'Réduisez votre consommation d\'énergie.',
      category: 'Énergie',
      points: 50,
      difficulty: 'Difficile',
      duration: '14 jours'
    }
  ];

  if (selectedChallenge) {
    return <ChallengeDetails challenge={selectedChallenge} onBack={() => setSelectedChallenge(null)} />;
  }

  const filteredChallenges = challenges.filter(challenge => {
    const matchesSearch = challenge.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || challenge.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: Challenge['difficulty']) => {
    switch (difficulty) {
      case 'Facile':
        return 'text-emerald-600 bg-emerald-100';
      case 'Moyen':
        return 'text-orange-600 bg-orange-100';
      case 'Difficile':
        return 'text-red-600 bg-red-100';
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Défis Éco-responsables</h1>
        <p className="mt-2 text-gray-600">Relevez des défis et gagnez des Eco Coins</p>
      </div>

      {/* Mobile filters */}
      <div className="md:hidden sticky top-16 bg-white shadow-md z-40">
        <div className="p-4 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un défi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
          >
            <option value="">Toutes les catégories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Desktop filters */}
      <div className="hidden md:block bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un défi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
          >
            <option value="">Toutes les catégories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredChallenges.map((challenge) => (
          <button
            key={challenge.id}
            onClick={() => setSelectedChallenge(challenge)}
            className="text-left bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{challenge.title}</h3>
                <p className="text-gray-600 mt-1">{challenge.description}</p>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(challenge.difficulty)}`}>
                {challenge.difficulty}
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-gray-600">
                  <Tag className="w-4 h-4 mr-1" />
                  <span>{challenge.category}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{challenge.duration}</span>
                </div>
              </div>
              <div className="flex items-center text-emerald-600">
                <Trophy className="w-4 h-4 mr-1" />
                <span>{challenge.points} pts</span>
              </div>
            </div>

            {challenge.progress !== undefined && (
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progression</span>
                  <span>{challenge.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${challenge.progress}%` }}
                  ></div>
                </div>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChallengesList;