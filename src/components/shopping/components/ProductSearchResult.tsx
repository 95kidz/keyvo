import React, { useState } from 'react';
import { Plus, Leaf, ChevronDown, ChevronUp } from 'lucide-react';
import { Product } from '../types';
import { getAlternatives } from '../data/productAlternatives';
import ProductAlternative from './ProductAlternative';

interface ProductSearchResultProps {
  product: Product;
  onAdd: (product: Product) => void;
}

const ProductSearchResult = ({ product, onAdd }: ProductSearchResultProps) => {
  const [showAlternatives, setShowAlternatives] = useState(false);
  const alternatives = getAlternatives(product);

  return (
    <div className="border rounded-lg mb-4 overflow-hidden">
      <div className="p-4 bg-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium text-gray-900">{product.name}</div>
            <div className="text-sm text-gray-600 mt-1">
              <span className="flex items-center">
                <Leaf className="w-4 h-4 mr-1 text-gray-400" />
                {product.carbonScore} kg CO₂
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-lg font-medium text-gray-900">
              {product.price.toFixed(2)}€
            </span>
            <button
              onClick={() => onAdd(product)}
              className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>

        {alternatives.length > 0 && (
          <button
            onClick={() => setShowAlternatives(!showAlternatives)}
            className="w-full mt-3 flex items-center justify-center space-x-2 text-emerald-600 hover:text-emerald-700 py-2 border border-emerald-200 rounded-lg hover:bg-emerald-50 transition-colors"
          >
            <span>{showAlternatives ? 'Masquer' : 'Voir'} les alternatives écologiques</span>
            {showAlternatives ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        )}
      </div>

      {showAlternatives && alternatives.length > 0 && (
        <div className="p-4 bg-emerald-50 space-y-4">
          <div className="text-sm font-medium text-emerald-800 mb-2">
            Alternatives recommandées plus écologiques :
          </div>
          <div className="grid gap-4">
            {alternatives.map((alt) => (
              <ProductAlternative key={alt.id} alternative={alt} onAdd={onAdd} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSearchResult;