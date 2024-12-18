import React from 'react';
import { Trophy } from 'lucide-react';

interface CurrentChallengeProps {
  title: string;
  description: string;
  image: string;
  brand: {
    name: string;
    logo: string;
  };
}

const CurrentChallenge = ({ title, description, image, brand }: CurrentChallengeProps) => {
  return (
    <div className="mx-4 mb-6">
      <div className="bg-gray-800 rounded-xl overflow-hidden relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <div className="flex items-center space-x-2 mb-2">
            <Trophy className="w-5 h-5" />
            <span className="text-sm font-medium">CE MOIS-CI</span>
          </div>
          <h2 className="text-lg font-bold mb-1">{title}</h2>
          <p className="text-sm text-gray-200 mb-3">{description}</p>
          <div className="flex items-center space-x-2">
            <img 
              src={brand.logo} 
              alt={brand.name}
              className="w-8 h-8 rounded-full bg-white"
            />
            <span className="text-sm font-medium">{brand.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentChallenge;