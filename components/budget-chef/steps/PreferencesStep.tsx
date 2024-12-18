import React from 'react';
import { Leaf, Check } from 'lucide-react';
import { WizardData } from '../BudgetChefWizard';

interface PreferencesStepProps {
  data: WizardData;
  onUpdate: (data: Partial<WizardData>) => void;
}

const preferences = [
  { id: 'vegetarian', label: 'Végétarien', icon: Leaf },
  { id: 'vegan', label: 'Végan', icon: Leaf },
  { id: 'gluten-free', label: 'Sans gluten', icon: Check },
  { id: 'lactose-free', label: 'Sans lactose', icon: Check },
  { id: 'organic', label: 'Bio', icon: Leaf },
  { id: 'local', label: 'Local', icon: Check }
];

const PreferencesStep = ({ data, onUpdate }: PreferencesStepProps) => {
  const togglePreference = (prefId: string) => {
    const newPreferences = data.preferences.includes(prefId)
      ? data.preferences.filter(p => p !== prefId)
      : [...data.preferences, prefId];
    onUpdate({ preferences: newPreferences });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Préférences alimentaires</h2>
        <p className="text-gray-600">
          Sélectionnez vos préférences pour des suggestions adaptées à vos besoins.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {preferences.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => togglePreference(id)}
            className={`p-4 rounded-lg border text-left flex items-center space-x-3 ${
              data.preferences.includes(id)
                ? 'border-emerald-500 bg-emerald-50'
                : 'border-gray-200 hover:border-emerald-500'
            }`}
          >
            <Icon className={`w-5 h-5 ${
              data.preferences.includes(id) ? 'text-emerald-600' : 'text-gray-400'
            }`} />
            <span className="font-medium">{label}</span>
          </button>
        ))}
      </div>

      <div className="bg-emerald-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">À noter</h3>
        <p className="text-sm text-gray-600">
          Plus vous sélectionnez de préférences, plus les suggestions seront précises et adaptées à vos besoins.
        </p>
      </div>
    </div>
  );
};

export default PreferencesStep;