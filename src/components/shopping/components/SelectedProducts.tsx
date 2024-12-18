import React from 'react';
import { Trash2 } from 'lucide-react';
import { Product } from '../types';

interface SelectedProductsProps {
  products: (Product & { quantity: number })[];
  onQuantityChange: (productId: string, quantity: number) => void;
  onRemoveProduct: (productId: string) => void;
}

const SelectedProducts = ({
  products,
  onQuantityChange,
  onRemoveProduct
}: SelectedProductsProps) => {
  return (
    <div className="space-y-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
        >
          <div>
            <h4 className="font-medium">{product.name}</h4>
            <p className="text-sm text-gray-600">
              {product.carbonScore} kg CO₂ • {product.price.toFixed(2)}€
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="number"
              value={product.quantity}
              onChange={(e) => onQuantityChange(product.id, parseInt(e.target.value) || 1)}
              min="1"
              className="w-20 px-2 py-1 border border-gray-300 rounded"
            />
            <button
              onClick={() => onRemoveProduct(product.id)}
              className="text-red-500 hover:text-red-600"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectedProducts;