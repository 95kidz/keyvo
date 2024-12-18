import React from 'react';
import { ChefHat, DollarSign, Users, Clock } from 'lucide-react';

interface BudgetChefCardProps {
  onClick: () => void;
}

const BudgetChefCard = ({ onClick }: BudgetChefCardProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow w-full text-left"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-emerald-100 p-3 rounded-lg">
            <ChefHat className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">BudgetChef</h3>
            <p className="mt-1 text-emerald-600 font-medium">Assistant repas intelligent</p>
          </div>
        </div>
      </div>
      
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="flex items-center text-sm text-gray-600">
          <DollarSign className="w-4 h-4 mr-1" />
          <span>Budget optimisé</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Users className="w-4 h-4 mr-1" />
          <span>Personnalisé</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Clock className="w-4 h-4 mr-1" />
          <span>Planning facile</span>
        </div>
      </div>
    </button>
  );
};

export default BudgetChefCard;