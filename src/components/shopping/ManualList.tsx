import React, { useState } from 'react';
import { Plus, Search, Save } from 'lucide-react';
import { Product, Store } from './types';
import { products } from './data/products';
import SearchBar from '../common/SearchBar';
import BackButton from '../common/BackButton';
import ProductSearchResult from './components/ProductSearchResult';
import SelectedProducts from './components/SelectedProducts';
import SaveListModal from './components/SaveListModal';

interface ManualListProps {
  onBack: () => void;
  store: Store;
}

const ManualList = ({ onBack, store }: ManualListProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProducts, setSelectedProducts] = useState<(Product & { quantity: number })[]>([]);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [listName, setListName] = useState('');

  const totalPrice = selectedProducts.reduce((sum, p) => sum + p.price * p.quantity, 0);
  const totalCarbon = selectedProducts.reduce((sum, p) => sum + p.carbonScore * p.quantity, 0);

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

  const handleSaveList = () => {
    if (!listName.trim()) return;
    // Logique de sauvegarde à implémenter
    setShowSaveModal(false);
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
              <ProductSearchResult
                key={product.id}
                product={product}
                onAdd={handleAddProduct}
              />
            ))}
          </div>
        )}

        <SelectedProducts
          products={selectedProducts}
          onQuantityChange={handleQuantityChange}
          onRemoveProduct={handleRemoveProduct}
        />
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

      <SaveListModal
        isOpen={showSaveModal}
        listName={listName}
        onListNameChange={setListName}
        onSave={handleSaveList}
        onClose={() => setShowSaveModal(false)}
      />
    </div>
  );
};

export default ManualList;