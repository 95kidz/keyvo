import React from 'react';
import { MapPin, Leaf, Building2, Clock } from 'lucide-react';
import BackButton from '../BackButton';

interface Store {
  id: string;
  name: string;
  address: string;
  carbonScore: number;
  distance: string;
  type: 'bio' | 'supermarket' | 'local';
  openingHours: string;
  logo?: string;
}

interface StoreSelectorProps {
  onBack: () => void;
  onSelect: (store: Store) => void;
}

const StoreSelector = ({ onBack, onSelect }: StoreSelectorProps) => {
  const stores: Store[] = [
    {
      id: '1',
      name: 'Carrefour Bio',
      address: '123 rue de la Paix, Paris',
      carbonScore: 2.5,
      distance: '0.8 km',
      type: 'bio',
      openingHours: '8h-20h',
      logo: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=100'
    },
    {
      id: '2',
      name: 'Naturalia',
      address: '45 avenue des Champs-Élysées, Paris',
      carbonScore: 1.8,
      distance: '1.2 km',
      type: 'bio',
      openingHours: '9h-21h',
      logo: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=100'
    },
    {
      id: '3',
      name: 'Biocoop',
      address: '78 rue du Commerce, Paris',
      carbonScore: 1.5,
      distance: '1.5 km',
      type: 'bio',
      openingHours: '9h-20h',
      logo: 'https://images.unsplash.com/photo-1543168256-418811576931?auto=format&fit=crop&q=80&w=100'
    },
    {
      id: '4',
      name: 'La Vie Claire',
      address: '156 boulevard Saint-Germain, Paris',
      carbonScore: 2.1,
      distance: '2.0 km',
      type: 'bio',
      openingHours: '8h30-20h30',
      logo: 'https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?auto=format&fit=crop&q=80&w=100'
    },
    {
      id: '5',
      name: 'Monoprix',
      address: '92 rue de Rennes, Paris',
      carbonScore: 3.2,
      distance: '2.3 km',
      type: 'supermarket',
      openingHours: '8h-22h',
      logo: 'https://images.unsplash.com/photo-1601599963565-b7ba29c8e3ff?auto=format&fit=crop&q=80&w=100'
    },
    {
      id: '6',
      name: 'Le Marché Local',
      address: '25 rue des Martyrs, Paris',
      carbonScore: 1.2,
      distance: '2.8 km',
      type: 'local',
      openingHours: '7h-13h',
      logo: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80&w=100'
    },
    {
      id: '7',
      name: 'Bio c\' Bon',
      address: '210 rue de Vaugirard, Paris',
      carbonScore: 2.0,
      distance: '3.1 km',
      type: 'bio',
      openingHours: '9h-20h30',
      logo: 'https://images.unsplash.com/photo-1595231712607-a5c68d67ba51?auto=format&fit=crop&q=80&w=100'
    }
  ];

  const getTypeColor = (type: Store['type']) => {
    switch (type) {
      case 'bio':
        return 'bg-emerald-100 text-emerald-600';
      case 'local':
        return 'bg-blue-100 text-blue-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <BackButton onBack={onBack} />
      
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Choisissez votre magasin</h2>
        <p className="text-gray-600">Sélectionnez un magasin pour créer votre liste de courses</p>
      </div>
      
      <div className="space-y-4">
        {stores.map((store) => (
          <button
            key={store.id}
            onClick={() => onSelect(store)}
            className="w-full bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {store.logo ? (
                  <img 
                    src={store.logo} 
                    alt={store.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-gray-400" />
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-lg mb-1">{store.name}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {store.distance}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {store.openingHours}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{store.address}</p>
                </div>
              </div>

              <div className="text-right">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(store.type)} mb-2`}>
                  {store.type === 'bio' ? 'Bio' : store.type === 'local' ? 'Local' : 'Supermarché'}
                </div>
                <div className="flex items-center justify-end text-emerald-600">
                  <Leaf className="w-4 h-4 mr-1" />
                  <span>{store.carbonScore} kg CO₂/km</span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StoreSelector;