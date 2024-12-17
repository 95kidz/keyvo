import React, { useState } from 'react';
import { ListPlus, ChefHat } from 'lucide-react';
import BackButton from '../BackButton';
import RecipeList from './RecipeList';
import ManualList from './ManualList';
import StoreSelector from './StoreSelector';
import { Store } from './types';

type ListMode = 'recipe' | 'manual' | null;

const CreateList = ({ onBack }: { onBack: () => void }) => {
  const [mode, setMode] = useState<ListMode>(null);
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);

  const handleBack = () => {
    if (selectedStore) {
      setSelectedStore(null);
    } else if (mode) {
      setMode(null);
    } else {
      onBack();
    }
  };

  if (mode === 'recipe' && selectedStore) {
    return <RecipeList onBack={handleBack} store={selectedStore} />;
  }

  if (mode === 'manual' && selectedStore) {
    return <ManualList onBack={handleBack} store={selectedStore} />;
  }

  if (mode) {
    return (
      <StoreSelector 
        onBack={handleBack}
        onSelect={(store) => setSelectedStore(store)}
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <BackButton onBack={handleBack} />
      
      <h2 className="text-2xl font-bold mb-8">Choisissez votre mode de création</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button
          onClick={() => setMode('recipe')}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-left"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-emerald-100 rounded-lg">
              <ChefHat className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">À partir d'une recette</h3>
              <p className="text-gray-600">Créez une liste basée sur une recette existante</p>
            </div>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>• Liste générée automatiquement</li>
            <li>• Portions ajustables</li>
            <li>• Impact carbone calculé</li>
          </ul>
        </button>

        <button
          onClick={() => setMode('manual')}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-left"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-emerald-100 rounded-lg">
              <ListPlus className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Création manuelle</h3>
              <p className="text-gray-600">Composez votre liste article par article</p>
            </div>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>• Liberté totale de choix</li>
            <li>• Suggestions éco-responsables</li>
            <li>• Comparaison des produits</li>
          </ul>
        </button>
      </div>
    </div>
  );
};

export default CreateList;