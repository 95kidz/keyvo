import React, { useState } from 'react';
import { ArrowLeft, Search, ShoppingCart } from 'lucide-react';
import StoreSelector from './StoreSelector';
import RecipeShoppingList from './RecipeShoppingList';

interface RecipeListProps {
  onBack: () => void;
}

const RecipeList = ({ onBack }: RecipeListProps) => {
  const [selectedRecipe, setSelectedRecipe] = useState<any | null>(null);
  const [selectedStore, setSelectedStore] = useState<any | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const recipes = [
    {
      id: '1',
      name: 'Lasagnes végétariennes',
      ingredients: ['Pâtes à lasagne', 'Sauce tomate', 'Fromage râpé'],
      carbonScore: 1.0,
      image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&q=80&w=800'
    },
    // Add more recipes as needed
  ];

  if (selectedStore) {
    return (
      <RecipeShoppingList
        recipe={selectedRecipe}
        store={selectedStore}
        onBack={() => setSelectedStore(null)}
      />
    );
  }

  if (selectedRecipe) {
    return (
      <StoreSelector
        onBack={() => setSelectedRecipe(null)}
        onSelect={(store) => setSelectedStore(store)}
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center text-emerald-600 mb-6 hover:text-emerald-700"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Retour
      </button>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Choisissez une recette</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher une recette..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recipes.map((recipe) => (
          <button
            key={recipe.id}
            onClick={() => setSelectedRecipe(recipe)}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{recipe.name}</h3>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>{recipe.ingredients.length} ingrédients</span>
                <span>{recipe.carbonScore} kg CO₂</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;