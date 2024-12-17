import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  label?: string;
}

const BackButton = ({ label = 'Retour' }: BackButtonProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center text-emerald-600 hover:text-emerald-700 mb-6"
    >
      <ArrowLeft className="w-5 h-5 mr-2" />
      <span>{label}</span>
    </button>
  );
};

export default BackButton;