import React, { useState } from 'react';
import { Plus, Search, ChefHat } from 'lucide-react';
import RecipeDetails from './RecipeDetails';
import CreateRecipe from './CreateRecipe';

interface Recipe {
  id: string;
  name: string;
  image: string;
  prepTime: string;
  carbonScore: number;
  difficulty: string;
  ingredients: string[];
  steps: string[];
  author: string;
  likes: number;
}

const RecipesList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const recipes: Recipe[] = [
    {
      id: '1',
      name: 'Lasagnes végétariennes aux légumes de saison',
      image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&q=80&w=800',
      prepTime: '45 min',
      carbonScore: 1.2,
      difficulty: 'Moyen',
      ingredients: [
        'Pâtes à lasagne bio',
        'Légumes de saison (courgettes, aubergines)',
        'Sauce tomate maison',
        'Fromage râpé local'
      ],
      steps: [
        'Préparer la sauce tomate',
        'Couper les légumes en fines tranches',
        'Monter les lasagnes en alternant les couches'
      ],
      author: 'Marie D.',
      likes: 124
    },
    // ... autres recettes
  ];

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isCreating) {
    return <CreateRecipe onBack={() => setIsCreating(false)} />;
  }

  if (selectedRecipe) {
    return <RecipeDetails recipe={selectedRecipe} onBack={() => setSelectedRecipe(null)} />;
  }

  return (
    <div>
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <h2 className="text-2xl font-bold">Mes Recettes</h2>
          <button
            onClick={() => setIsCreating(true)}
            className="w-full sm:w-auto bg-emerald-600 text-white px-4 py-3 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>Nouvelle recette</span>
          </button>
        </div>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map((recipe) => (
          <button
            key={recipe.id}
            onClick={() => setSelectedRecipe(recipe)}
            className="text-left bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-emerald-600">
                {recipe.difficulty}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{recipe.name}</h3>
              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <ChefHat className="w-4 h-4 mr-1" />
                  <span>{recipe.prepTime}</span>
                </div>
                <div className="flex items-center">
                  <span>{recipe.carbonScore} kg CO₂</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center text-gray-600">
                  <ChefHat className="w-4 h-4 mr-1" />
                  <span>{recipe.author}</span>
                </div>
                <span className="text-emerald-600">{recipe.likes} ❤️</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecipesList;