import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Leaf, Building, Save, Plus, Search, Trash2, X, Check } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  quantity: number;
  price: number;
  carbonScore: number;
}

interface RecipeShoppingListProps {
  recipe: {
    id: string;
    name: string;
    ingredients: string[];
    carbonScore: number;
  };
  store: {
    id: string;
    name: string;
  };
  onBack: () => void;
}

const RecipeShoppingList = ({ recipe, store, onBack }: RecipeShoppingListProps) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Pâtes à lasagne bio',
      quantity: 1,
      price: 2.50,
      carbonScore: 0.3
    },
    {
      id: '2',
      name: 'Sauce tomate bio',
      quantity: 1,
      price: 3.00,
      carbonScore: 0.2
    },
    {
      id: '3',
      name: 'Fromage râpé local',
      quantity: 1,
      price: 4.00,
      carbonScore: 0.5
    }
  ]);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [listName, setListName] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const totalPrice = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
  const totalCarbonScore = products.reduce((sum, p) => sum + p.carbonScore * p.quantity, 0);

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    setProducts(products.map(p =>
      p.id === productId ? { ...p, quantity: Math.max(1, newQuantity) } : p
    ));
  };

  const handleRemoveProduct = (productId: string) => {
    setProducts(products.filter(p => p.id !== productId));
  };

  const handleAddProduct = (product: Product) => {
    setProducts([...products, product]);
    setShowAddProduct(false);
    setSearchQuery('');
  };

  const handleSaveList = () => {
    if (!listName.trim()) return;
    
    setShowSaveModal(false);
    setShowSuccess(true);
    
    setTimeout(() => {
      setShowSuccess(false);
      navigate('/actions', { state: { section: 'shopping-lists' } });
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center text-emerald-600 mb-6 hover:text-emerald-700"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Retour
      </button>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{recipe.name}</h2>
            <div className="flex items-center mt-2 space-x-4 text-gray-600">
              <div className="flex items-center">
                <Building className="w-5 h-5 mr-2" />
                <span>{store.name}</span>
              </div>
              <div className="flex items-center">
                <Leaf className="w-5 h-5 mr-2" />
                <span>{totalCarbonScore.toFixed(1)} kg CO₂</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setShowAddProduct(true)}
            className="flex items-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>Ajouter un produit</span>
          </button>
        </div>

        <div className="space-y-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div>
                <h4 className="font-medium">{product.name}</h4>
                <p className="text-sm text-gray-600">
                  {product.carbonScore} kg CO₂ • {product.price}€
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
          <span className="text-gray-600">{totalCarbonScore.toFixed(2)} kg CO₂</span>
        </div>
        <button
          onClick={() => setShowSaveModal(true)}
          className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2"
        >
          <Save className="w-5 h-5" />
          <span>Sauvegarder la liste</span>
        </button>
      </div>

      {showAddProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Ajouter un produit</h3>
              <button onClick={() => setShowAddProduct(false)}>
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un produit..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="space-y-2">
              {/* Example products */}
              <button
                onClick={() => handleAddProduct({
                  id: Date.now().toString(),
                  name: 'Légumes bio',
                  quantity: 1,
                  price: 3.50,
                  carbonScore: 0.2
                })}
                className="w-full text-left p-3 hover:bg-gray-50 rounded-lg"
              >
                <div className="font-medium">Légumes bio</div>
                <div className="text-sm text-gray-600">3.50€ • 0.2 kg CO₂</div>
              </button>
            </div>
          </div>
        </div>
      )}

      {showSaveModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Sauvegarder la liste</h3>
              <button onClick={() => setShowSaveModal(false)}>
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>
            <input
              type="text"
              placeholder="Nom de la liste"
              value={listName}
              onChange={(e) => setListName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
            />
            <button
              onClick={handleSaveList}
              className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Sauvegarder
            </button>
          </div>
        </div>
      )}

      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-emerald-100 rounded-full p-3">
                <Check className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Liste sauvegardée !</h3>
            <p className="text-gray-600">Redirection vers vos listes...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeShoppingList;