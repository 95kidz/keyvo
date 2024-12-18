import React, { useState } from 'react';
import { ArrowLeft, Search, Plus, Camera, Trash2, Save } from 'lucide-react';

interface Ingredient {
  id: string;
  name: string;
  carbonScore: number;
  quantity: number;
  unit: string;
}

interface CreateRecipeProps {
  onBack: () => void;
}

const CreateRecipe = ({ onBack }: CreateRecipeProps) => {
  const [name, setName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>([]);
  const [steps, setSteps] = useState<string[]>(['']);
  const [image, setImage] = useState<string>('');
  const [showIngredientSearch, setShowIngredientSearch] = useState(false);

  // Simulated ingredients database
  const availableIngredients = [
    { id: '1', name: 'Tomates bio locales', carbonScore: 0.2, unit: 'kg' },
    { id: '2', name: 'Pâtes complètes bio', carbonScore: 0.3, unit: 'kg' },
    { id: '3', name: 'Oignons bio', carbonScore: 0.1, unit: 'kg' },
    { id: '4', name: 'Huile d\'olive bio', carbonScore: 0.4, unit: 'L' },
  ];

  const filteredIngredients = availableIngredients.filter(ingredient =>
    ingredient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalCarbonScore = selectedIngredients.reduce(
    (total, ing) => total + (ing.carbonScore * ing.quantity),
    0
  );

  const handleAddIngredient = (ingredient: typeof availableIngredients[0]) => {
    setSelectedIngredients([
      ...selectedIngredients,
      { ...ingredient, quantity: 1 }
    ]);
    setSearchQuery('');
    setShowIngredientSearch(false);
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    setSelectedIngredients(ingredients =>
      ingredients.map(ing =>
        ing.id === id ? { ...ing, quantity: Math.max(0.1, quantity) } : ing
      )
    );
  };

  const handleRemoveIngredient = (id: string) => {
    setSelectedIngredients(ingredients =>
      ingredients.filter(ing => ing.id !== id)
    );
  };

  const handleAddStep = () => {
    setSteps([...steps, '']);
  };

  const handleStepChange = (index: number, value: string) => {
    setSteps(steps.map((step, i) => i === index ? value : step));
  };

  const handleRemoveStep = (index: number) => {
    setSteps(steps.filter((_, i) => i !== index));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePublish = () => {
    // Implement publication logic
    onBack();
  };

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center text-emerald-600 hover:text-emerald-700 mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Retour aux recettes
      </button>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Créer une nouvelle recette</h2>

        <div className="space-y-6">
          {/* Nom de la recette */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom de la recette
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Ex: Pâtes aux légumes de saison"
            />
          </div>

          {/* Photo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Photo du plat
            </label>
            <div className="relative h-64 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
              {image ? (
                <img
                  src={image}
                  alt="Preview"
                  className="h-full w-full object-cover rounded-lg"
                />
              ) : (
                <div className="text-center">
                  <Camera className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="mt-2">
                    <label htmlFor="photo-upload" className="cursor-pointer">
                      <span className="text-emerald-600 hover:text-emerald-500">
                        Télécharger une photo
                      </span>
                      <input
                        id="photo-upload"
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Ingrédients */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Ingrédients
              </label>
              <div className="text-sm text-gray-600">
                Empreinte carbone totale: {totalCarbonScore.toFixed(2)} kg CO₂
              </div>
            </div>

            {selectedIngredients.map((ingredient) => (
              <div
                key={ingredient.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg mb-2"
              >
                <div className="flex-1">
                  <div className="font-medium">{ingredient.name}</div>
                  <div className="text-sm text-gray-600">
                    {(ingredient.carbonScore * ingredient.quantity).toFixed(2)} kg CO₂
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      value={ingredient.quantity}
                      onChange={(e) => handleQuantityChange(ingredient.id, parseFloat(e.target.value))}
                      step="0.1"
                      min="0.1"
                      className="w-20 px-2 py-1 border border-gray-300 rounded"
                    />
                    <span className="text-gray-600">{ingredient.unit}</span>
                  </div>
                  <button
                    onClick={() => handleRemoveIngredient(ingredient.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}

            <button
              onClick={() => setShowIngredientSearch(true)}
              className="w-full mt-2 py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-emerald-500 hover:text-emerald-500 flex items-center justify-center"
            >
              <Plus className="w-5 h-5 mr-2" />
              Ajouter un ingrédient
            </button>
          </div>

          {/* Étapes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Étapes de préparation
            </label>
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-semibold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <textarea
                    value={step}
                    onChange={(e) => handleStepChange(index, e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    rows={2}
                    placeholder="Décrivez cette étape..."
                  />
                </div>
                {steps.length > 1 && (
                  <button
                    onClick={() => handleRemoveStep(index)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={handleAddStep}
              className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-emerald-500 hover:text-emerald-500 flex items-center justify-center"
            >
              <Plus className="w-5 h-5 mr-2" />
              Ajouter une étape
            </button>
          </div>

          {/* Bouton de publication */}
          <button
            onClick={handlePublish}
            className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2"
          >
            <Save className="w-5 h-5" />
            <span>Publier la recette</span>
          </button>
        </div>
      </div>

      {/* Modal de recherche d'ingrédients */}
      {showIngredientSearch && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-4">Ajouter un ingrédient</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher un ingrédient..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>

            <div className="max-h-96 overflow-y-auto">
              {filteredIngredients.map((ingredient) => (
                <button
                  key={ingredient.id}
                  onClick={() => handleAddIngredient(ingredient)}
                  className="w-full text-left p-4 hover:bg-gray-50 rounded-lg"
                >
                  <div className="font-medium">{ingredient.name}</div>
                  <div className="text-sm text-gray-600">
                    {ingredient.carbonScore} kg CO₂ par {ingredient.unit}
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowIngredientSearch(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateRecipe;