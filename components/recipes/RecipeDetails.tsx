import React from 'react';
import { ArrowLeft, Clock, Leaf, ChefHat, Heart, ShoppingCart } from 'lucide-react';

interface RecipeDetailsProps {
  recipe: {
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
  };
  onBack: () => void;
}

const RecipeDetails = ({ recipe, onBack }: RecipeDetailsProps) => {
  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center text-emerald-600 hover:text-emerald-700 mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Retour aux recettes
      </button>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-64">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h1 className="text-3xl font-bold text-white mb-2">{recipe.name}</h1>
            <div className="flex items-center space-x-4 text-white">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-1" />
                {recipe.prepTime}
              </div>
              <div className="flex items-center">
                <Leaf className="w-5 h-5 mr-1" />
                {recipe.carbonScore} kg CO₂
              </div>
              <span className="bg-emerald-500 px-3 py-1 rounded-full text-sm">
                {recipe.difficulty}
              </span>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <ChefHat className="w-5 h-5 text-gray-600" />
              <span className="text-gray-600">Par {recipe.author}</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 text-rose-500">
                <Heart className="w-5 h-5" />
                <span>{recipe.likes}</span>
              </button>
              <button className="flex items-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors">
                <ShoppingCart className="w-5 h-5" />
                <span>Créer la liste de courses</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-xl font-semibold mb-4">Ingrédients</h2>
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold mb-4">Préparation</h2>
              <div className="space-y-6">
                {recipe.steps.map((step, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <p className="flex-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;