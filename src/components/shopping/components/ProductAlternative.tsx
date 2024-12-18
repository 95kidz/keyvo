import React from 'react';
import { Plus, Leaf, TrendingDown, Award, Droplets } from 'lucide-react';
import { ProductAlternative as ProductAlternativeType } from '../data/productAlternatives';

interface ProductAlternativeProps {
  alternative: ProductAlternativeType;
  onAdd: (product: ProductAlternativeType) => void;
}

const ProductAlternative = ({ alternative, onAdd }: ProductAlternativeProps) => {
  return (
    <div className="w-full bg-gradient-to-br from-emerald-50 to-white rounded-lg p-4 hover:shadow-lg transition-all border border-emerald-100">
      {/* Badge Eco-Score */}
      <div className="absolute -top-2 -right-2 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
        {alternative.ecoScore}/100
      </div>

      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center space-x-2">
            <Leaf className="w-5 h-5 text-emerald-500" />
            <h3 className="font-semibold text-emerald-700">{alternative.name}</h3>
          </div>
          <div className="mt-1 flex items-center space-x-4 text-sm">
            <span className="text-emerald-600 font-medium">
              {alternative.carbonScore} kg CO₂
            </span>
            <span className="text-gray-600">
              {alternative.price.toFixed(2)}€
            </span>
          </div>
        </div>
        
        {/* Points bonus */}
        <div className="flex items-center bg-emerald-100 px-3 py-1 rounded-full">
          <Award className="w-4 h-4 text-emerald-600 mr-1" />
          <span className="text-sm font-medium text-emerald-700">+{alternative.points} pts</span>
        </div>
      </div>

      {/* Bénéfices environnementaux */}
      <div className="space-y-2 mb-4">
        {alternative.benefits.map((benefit, index) => (
          <div key={index} className="flex items-center text-sm text-gray-700">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2" />
            {benefit}
          </div>
        ))}
      </div>

      {/* Comparaisons */}
      <div className="bg-white rounded-lg p-3 space-y-2">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Impact réduit :</h4>
        <div className="grid grid-cols-2 gap-2">
          {alternative.comparison.co2Reduction && (
            <div className="flex items-center text-sm">
              <TrendingDown className="w-4 h-4 text-emerald-500 mr-1" />
              <span className="text-emerald-700">{alternative.comparison.co2Reduction}% CO₂</span>
            </div>
          )}
          {alternative.comparison.waterSaving && (
            <div className="flex items-center text-sm">
              <Droplets className="w-4 h-4 text-blue-500 mr-1" />
              <span className="text-blue-700">{alternative.comparison.waterSaving}% eau</span>
            </div>
          )}
        </div>
      </div>

      {/* Bouton d'ajout */}
      <button
        onClick={() => onAdd(alternative)}
        className="w-full mt-4 bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2"
      >
        <Plus className="w-4 h-4" />
        <span>Choisir cette alternative</span>
      </button>
    </div>
  );
};

export default ProductAlternative;