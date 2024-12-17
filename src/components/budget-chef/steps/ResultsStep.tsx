import React from 'react';
import { ShoppingBag, ChefHat, DollarSign, Download, Leaf, Calendar, Clock } from 'lucide-react';

interface ResultsStepProps {
  data: {
    budget: number;
    mealsPerDay: number;
    peopleCount: number;
    preferences: string[];
  };
  onUpdate: (data: Partial<typeof data>) => void;
}

const ResultsStep = ({ data }: ResultsStepProps) => {
  const weeklyMeals = data.mealsPerDay * 7;
  const pricePerMeal = data.budget / (weeklyMeals * data.peopleCount);

  // Données fictives pour les menus proposés
  const proposedMenus = [
    {
      day: 'Lundi',
      meals: [
        {
          type: 'Déjeuner',
          name: 'Buddha bowl aux légumes de saison',
          price: 3.50,
          carbonScore: 0.8,
          prepTime: '25 min'
        },
        {
          type: 'Dîner',
          name: 'Curry de lentilles aux épinards',
          price: 2.80,
          carbonScore: 0.6,
          prepTime: '30 min'
        }
      ]
    },
    {
      day: 'Mardi',
      meals: [
        {
          type: 'Déjeuner',
          name: 'Salade de quinoa aux pois chiches',
          price: 3.20,
          carbonScore: 0.7,
          prepTime: '20 min'
        },
        {
          type: 'Dîner',
          name: 'Gratin de légumes au tofu',
          price: 3.00,
          carbonScore: 0.9,
          prepTime: '45 min'
        }
      ]
    }
  ];

  // Données fictives pour la liste de courses
  const shoppingList = {
    categories: [
      {
        name: 'Légumes',
        items: [
          { name: 'Carottes bio', quantity: '500g', price: 1.50 },
          { name: 'Épinards frais', quantity: '300g', price: 2.20 },
          { name: 'Patates douces', quantity: '800g', price: 2.80 }
        ]
      },
      {
        name: 'Protéines',
        items: [
          { name: 'Tofu bio', quantity: '400g', price: 3.50 },
          { name: 'Lentilles vertes', quantity: '500g', price: 1.90 },
          { name: 'Pois chiches', quantity: '400g', price: 1.60 }
        ]
      },
      {
        name: 'Céréales',
        items: [
          { name: 'Quinoa bio', quantity: '500g', price: 4.20 },
          { name: 'Riz complet', quantity: '1kg', price: 3.80 }
        ]
      }
    ],
    totalCarbonScore: 12.5
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Votre plan personnalisé</h2>
        <p className="text-gray-600">
          Voici votre planning de repas optimisé selon vos critères.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <DollarSign className="w-5 h-5 text-emerald-600" />
            <span className="font-medium">Budget par repas</span>
          </div>
          <p className="text-2xl font-bold">{pricePerMeal.toFixed(2)}€</p>
          <p className="text-sm text-gray-600">par personne</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <ChefHat className="w-5 h-5 text-emerald-600" />
            <span className="font-medium">Repas planifiés</span>
          </div>
          <p className="text-2xl font-bold">{weeklyMeals}</p>
          <p className="text-sm text-gray-600">pour la semaine</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Leaf className="w-5 h-5 text-emerald-600" />
            <span className="font-medium">Impact carbone</span>
          </div>
          <p className="text-2xl font-bold">{shoppingList.totalCarbonScore} kg</p>
          <p className="text-sm text-gray-600">CO₂ économisé</p>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-4 bg-gray-50 border-b border-gray-200">
          <h3 className="font-semibold">Planning des repas</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {proposedMenus.map((day, index) => (
            <div key={index} className="p-4">
              <h4 className="font-medium text-emerald-600 mb-3">{day.day}</h4>
              <div className="space-y-4">
                {day.meals.map((meal, mealIndex) => (
                  <div key={mealIndex} className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{meal.name}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {meal.prepTime}
                        </span>
                        <span className="flex items-center">
                          <Leaf className="w-4 h-4 mr-1" />
                          {meal.carbonScore} kg CO₂
                        </span>
                      </div>
                    </div>
                    <span className="font-medium">{meal.price.toFixed(2)}€</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-4 bg-gray-50 border-b border-gray-200">
          <h3 className="font-semibold">Liste de courses</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {shoppingList.categories.map((category, index) => (
            <div key={index} className="p-4">
              <h4 className="font-medium text-emerald-600 mb-3">{category.name}</h4>
              <div className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <span>{item.name}</span>
                      <span className="text-sm text-gray-600">({item.quantity})</span>
                    </div>
                    <span className="font-medium">{item.price.toFixed(2)}€</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <button className="w-full flex items-center justify-center space-x-2 bg-emerald-600 text-white px-4 py-3 rounded-lg hover:bg-emerald-700 transition-colors">
          <ShoppingBag className="w-5 h-5" />
          <span>Voir la liste de courses détaillée</span>
        </button>

        <button className="w-full flex items-center justify-center space-x-2 border border-emerald-600 text-emerald-600 px-4 py-3 rounded-lg hover:bg-emerald-50 transition-colors">
          <Calendar className="w-5 h-5" />
          <span>Ajouter au planning</span>
        </button>

        <button className="w-full flex items-center justify-center space-x-2 border border-emerald-600 text-emerald-600 px-4 py-3 rounded-lg hover:bg-emerald-50 transition-colors">
          <Download className="w-5 h-5" />
          <span>Télécharger le planning</span>
        </button>
      </div>

      <div className="bg-emerald-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">Conseils d'utilisation</h3>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>• Faites vos courses en une fois pour la semaine</li>
          <li>• Suivez l'ordre des recettes pour optimiser la fraîcheur</li>
          <li>• Conservez les restes pour les repas suivants</li>
          <li>• Privilégiez les produits de saison pour plus d'économies</li>
        </ul>
      </div>
    </div>
  );
};

export default ResultsStep;