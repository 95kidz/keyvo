import React from 'react';
import { DollarSign } from 'lucide-react';
import { WizardData } from '../BudgetChefWizard';

interface BudgetStepProps {
  data: WizardData;
  onUpdate: (data: Partial<WizardData>) => void;
}

const BudgetStep = ({ data, onUpdate }: BudgetStepProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Définissez votre budget</h2>
        <p className="text-gray-600">
          Quel budget souhaitez-vous allouer à vos courses pour la semaine ?
        </p>
      </div>

      <div className="relative">
        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="number"
          value={data.budget || ''}
          onChange={(e) => onUpdate({ budget: parseFloat(e.target.value) })}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          placeholder="Entrez votre budget"
          min="0"
          step="10"
        />
      </div>

      <div className="bg-emerald-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">Conseil BudgetChef</h3>
        <p className="text-sm text-gray-600">
          Pour une personne, un budget hebdomadaire de 50-70€ permet généralement de préparer des repas équilibrés.
          Ajoutez environ 40€ par personne supplémentaire.
        </p>
      </div>
    </div>
  );
};

export default BudgetStep;