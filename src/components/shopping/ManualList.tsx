import React, { useState } from 'react';
import { Plus, Search, Trash2, Save } from 'lucide-react';
import BackButton from '../BackButton';
import { Product, Store } from './types';
import { products } from './data/products';
import SearchBar from '../common/SearchBar';

interface ManualListProps {
  onBack: () => void;
  store: Store;
}

const ManualList = ({ onBack, store }: ManualListProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProducts, setSelectedProducts] = useState<(Product & { quantity: number })[]>([]);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [listName, setListName] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddProduct = (product: Product) => {
    const existingProduct = selectedProducts.find(p => p.id === product.id);
    if (existingProduct) {
      setSelectedProducts(selectedProducts.map(p =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      ));
    } else {
      setSelectedProducts([...selectedProducts, { ...product, quantity: 1 }]);
    }
  };

  const handleQuantityChange = (productId: string, quantity: number) => {
    setSelectedProducts(selectedProducts.map(p =>
      p.id === productId ? { ...p, quantity: Math.max(1, quantity) } : p
    ));
  };

  const handleRemoveProduct = (productId: string) => {
    setSelectedProducts(selectedProducts.filter(p => p.id !== productId));
  };

  const totalPrice = selectedProducts.reduce((sum, p) => sum + p.price * p.quantity, 0);
  const totalCarbon = selectedProducts.reduce((sum, p) => sum + p.carbonScore * p.quantity, 0);

  const handleSaveList = () => {
    if (!listName.trim()) return;
    // Ici, vous pouvez ajouter la logique pour sauvegarder la liste
    onBack();
  };

  return (
    <div className="max-w-4xl mx-auto">
      <BackButton onBack={onBack} />

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Nouvelle liste</h2>
            <p className="text-gray-600 mt-1">{store.name}</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-600">Impact carbone</div>
            <div className="text-lg font-semibold text-emerald-600">{totalCarbon.toFixed(2)} kg CO₂</div>
          </div>
        </div>

        <SearchBar
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Rechercher un produit..."
          className="mb-6"
        />

        {searchQuery && (
          <div className="mb-6 border rounded-lg divide-y">
            {filteredProducts.map((product) => (
              <button
                key={product.id}
                onClick={() => handleAddProduct(product)}
                className="w-full text-left p-4 hover:bg-gray-50 flex items-center justify-between"
              >
                <div>
                  <div className="font-medium">{product.name}</div>
                  <div className="text-sm text-gray-600">
                    {product.carbonScore} kg CO₂ • {product.price.toFixed(2)}€
                  </div>
                </div>
                <Plus className="w-5 h-5 text-emerald-600" />
              </button>
            ))}
          </div>
        )}

        <div className="space-y-4">
          {selectedProducts.map((product) => (
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
                  onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value) || 1)}
                  min="1"
                  className="w-20 px-2 py-1 border border-gray-300 rounded"
                />
                <button
                  onClick={() => handleRemoveProduct(product.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between mb-4">
          <span className="font-medium">Total</span>
          <span className="font-medium">{totalPrice.toFixed(2)}€</span>
        </div>
        <div className="flex justify-between mb-6">
          <span className="text-gray-600">Impact carbone</span>
          <span className="text-gray-600">{totalCarbon.toFixed(2)} kg CO₂</span>
        </div>
        <button
          onClick={() => setShowSaveModal(true)}
          className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2"
        >
          <Save className="w-5 h-5" />
          <span>Sauvegarder la liste</span>
        </button>
      </div>

      {/* Modal de sauvegarde */}
      {showSaveModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Sauvegarder la liste</h3>
            <input
              type="text"
              placeholder="Nom de la liste"
              value={listName}
              onChange={(e) => setListName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
            />
            <div className="flex space-x-4">
              <button
                onClick={() => setShowSaveModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Annuler
              </button>
              <button
                onClick={handleSaveList}
                className="flex-1 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700"
              >
                Sauvegarder
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManualList;