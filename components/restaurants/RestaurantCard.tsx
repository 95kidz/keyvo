import React, { useState } from 'react';
import { MapPin, Leaf, Award } from 'lucide-react';
import { Restaurant } from './types';
import RestaurantDetails from './RestaurantDetails';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  if (showDetails) {
    return <RestaurantDetails restaurant={restaurant} onBack={() => setShowDetails(false)} />;
  }

  return (
    <button
      onClick={() => setShowDetails(true)}
      className="w-full text-left bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="relative h-48">
        <img
          src={restaurant.image}
          alt={restaurant.dish}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 flex space-x-2">
          {restaurant.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-white bg-opacity-90 rounded-full text-xs font-medium text-emerald-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900">{restaurant.name}</h3>
          <p className="text-emerald-600 font-medium">{restaurant.dish}</p>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{restaurant.distance} km</span>
          </div>
          <span className="text-lg font-bold">{restaurant.price.toFixed(2)} €</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-gray-600">
            <Leaf className="w-4 h-4 mr-1" />
            <span>{restaurant.carbonScore} kg CO₂</span>
          </div>
          <div className="flex items-center text-emerald-600">
            <Award className="w-4 h-4 mr-1" />
            <span>+{restaurant.points} pts</span>
          </div>
        </div>
      </div>
    </button>
  );
};

export default RestaurantCard;