import React, { useState } from 'react';
import { Search, MapPin, Leaf, Award } from 'lucide-react';
import RestaurantCard from './RestaurantCard';
import { Restaurant } from './types';

const RestaurantSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Restaurant[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const mockRestaurants: Restaurant[] = [
    {
      id: '1',
      name: 'CROUS Cafétéria Universitaire',
      dish: 'Pizza Margherita Bio',
      price: 3.30,
      carbonScore: 0.8,
      distance: '0.2',
      points: 15,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1000',
      tags: ['Bio', 'Local', 'Étudiant']
    },
    {
      id: '2',
      name: 'Pizzeria Del Arte',
      dish: 'Pizza Napolitaine',
      price: 12.90,
      carbonScore: 1.2,
      distance: '1.5',
      points: 10,
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=1000',
      tags: ['Italien', 'Fait maison']
    },
    {
      id: '3',
      name: 'La Pizza Locale',
      dish: 'Pizza Végétarienne',
      price: 9.90,
      carbonScore: 0.9,
      distance: '0.8',
      points: 20,
      image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&q=80&w=1000',
      tags: ['Bio', 'Local', 'Végétarien']
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchResults(mockRestaurants);
    setHasSearched(true);
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Restaurants écoresponsables</h2>
        <form onSubmit={handleSearch} className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Que souhaitez-vous manger ?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </form>
      </div>

      {hasSearched && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-gray-500" />
              <span className="text-gray-600">Restaurants près de vous</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Leaf className="w-5 h-5 text-emerald-600" />
                <span className="text-sm text-gray-600">Impact carbone</span>
              </div>
              <div className="flex items-center space-x-1">
                <Award className="w-5 h-5 text-emerald-600" />
                <span className="text-sm text-gray-600">Points à gagner</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantSearch;