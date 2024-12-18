import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface WizardNavigationProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrevious: () => void;
}

const WizardNavigation = ({
  currentStep,
  totalSteps,
  onNext,
  onPrevious
}: WizardNavigationProps) => {
  return (
    <div className="flex justify-between mt-8">
      {currentStep > 0 ? (
        <button
          onClick={onPrevious}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Précédent</span>
        </button>
      ) : (
        <span className="invisible">Spacer</span>
      )}

      {currentStep < totalSteps - 1 && (
        <button
          onClick={onNext}
          className="flex items-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
        >
          <span>Suivant</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default WizardNavigation;