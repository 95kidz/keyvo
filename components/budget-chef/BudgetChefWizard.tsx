import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import BudgetStep from './steps/BudgetStep';
import MealsStep from './steps/MealsStep';
import PreferencesStep from './steps/PreferencesStep';
import ResultsStep from './steps/ResultsStep';
import ProgressBar from './common/ProgressBar';
import WizardNavigation from './common/WizardNavigation';

interface BudgetChefWizardProps {
  onBack: () => void;
}

export type WizardData = {
  budget: number;
  mealsPerDay: number;
  peopleCount: number;
  preferences: string[];
}

const BudgetChefWizard = ({ onBack }: BudgetChefWizardProps) => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<WizardData>({
    budget: 0,
    mealsPerDay: 3,
    peopleCount: 1,
    preferences: []
  });

  const steps = [
    { title: 'Budget', component: BudgetStep },
    { title: 'Repas', component: MealsStep },
    { title: 'Préférences', component: PreferencesStep },
    { title: 'Résultats', component: ResultsStep }
  ];

  const CurrentStep = steps[step].component;

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const updateData = (newData: Partial<WizardData>) => {
    setData({ ...data, ...newData });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center text-emerald-600 hover:text-emerald-700 mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Retour au tableau de bord
      </button>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <ProgressBar currentStep={step} totalSteps={steps.length} titles={steps.map(s => s.title)} />
          
          <div className="mt-8">
            <CurrentStep data={data} onUpdate={updateData} />
          </div>

          <WizardNavigation
            currentStep={step}
            totalSteps={steps.length}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        </div>
      </div>
    </div>
  );
};

export default BudgetChefWizard;