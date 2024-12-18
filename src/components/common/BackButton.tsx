import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  onBack: () => void;
  label?: string;
}

const BackButton = ({ onBack, label = 'Retour' }: BackButtonProps) => {
  return (
    <button
      onClick={onBack}
      className="flex items-center text-emerald-600 hover:text-emerald-700 mb-4"
    >
      <ArrowLeft className="w-5 h-5 mr-2" />
      <span>{label}</span>
    </button>
  );
};

export default BackButton;