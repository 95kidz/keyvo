import React from 'react';
import { Users, Coffee } from 'lucide-react';
import { WizardData } from '../BudgetChefWizard';

interface MealsStepProps {
  data: WizardData;
  onUpdate: (data: Partial<WizardData>) => void;
}

const MealsStep = ({ data, onUpdate }: MealsStepProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Organisation des repas</h2>
        <p className="text-gray-600">
          Précisez le nombre de repas et de personnes pour adapter au mieux vos menus.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nombre de repas par jour
          </label>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onUpdate({ mealsPerDay: 2 })}
              className={`flex-1 p-4 rounded-lg border ${
                data.mealsPerDay === 2
                  ? 'border-emerald-500 bg-emerald-50'
                  : 'border-gray-200 hover:border-emerald-500'
              }`}
            >
              <Coffee className="w-5 h-5 mb-2" />
              <div className="font-medium">2 repas</div>
              <div className="text-sm text-gray-600">Déjeuner + Dîner</div>
            </button>
            <button
              onClick={() => onUpdate({ mealsPerDay: 3 })}
              className={`flex-1 p-4 rounded-lg border ${
                data.mealsPerDay === 3
                  ? 'border-emerald-500 bg-emerald-50'
                  : 'border-gray-200 hover:border-emerald-500'
              }`}
            >
              <Coffee className="w-5 h-5 mb-2" />
              <div className="font-medium">3 repas</div>
              <div className="text-sm text-gray-600">Petit déj + Déj + Dîner</div>
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nombre de personnes
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="number"
              value={data.peopleCount}
              onChange={(e) => onUpdate({ peopleCount: parseInt(e.target.value) })}
              min="1"
              max="10"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealsStep;