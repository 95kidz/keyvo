import React from 'react';
import { Gift } from 'lucide-react';

interface RewardCardProps {
  logo: string;
  partner: string;
  name: string;
  points: number;
  category: string;
  onExchange: () => void;
}

const RewardCard = ({ logo, partner, name, points, category, onExchange }: RewardCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <img
          src={logo}
          alt={partner}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900">{partner}</h3>
        <p className="text-gray-600 mt-1">{name}</p>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-emerald-600">
            <Gift className="w-5 h-5" />
            <span className="font-semibold">{points} Eco Coins</span>
          </div>
          
          <button
            onClick={onExchange}
            className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors duration-300"
          >
            Échanger
          </button>
        </div>
      </div>
    </div>
  );
};

export default RewardCard;