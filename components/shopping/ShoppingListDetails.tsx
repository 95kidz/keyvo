import React, { useState } from 'react';
import { ArrowLeft, Calendar, Leaf, ShoppingBag, Share2, Check, Copy, X } from 'lucide-react';

interface ShoppingListDetailsProps {
  list: {
    id: string;
    name: string;
    date: string;
    carbonScore: number;
    items: { name: string; quantity: number }[];
    store: string;
    total: number;
  };
  onBack: () => void;
}

const ShoppingListDetails = ({ list, onBack }: ShoppingListDetailsProps) => {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});
  const [showShareModal, setShowShareModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;

  const handleCheck = (itemName: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  };

  const handleShare = () => {
    setShowShareModal(true);
  };

  const handleCopyLink = async () => {
    const shareUrl = `${window.location.origin}/share/list/${list.id}`;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center text-emerald-600 hover:text-emerald-700 mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Retour aux listes
      </button>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{list.name}</h2>
            <div className="flex items-center space-x-4 mt-2 text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                {new Date(list.date).toLocaleDateString('fr-FR')}
              </div>
              <div className="flex items-center">
                <ShoppingBag className="w-5 h-5 mr-2" />
                {list.store}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-2xl font-bold text-emerald-600">
              {list.total.toFixed(2)}€
            </span>
            <div className="flex items-center mt-2 text-gray-600">
              <Leaf className="w-5 h-5 mr-2" />
              {list.carbonScore} kg CO₂
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="text-sm text-gray-600">
            {checkedCount} / {list.items.length} articles achetés
          </div>
          <button
            onClick={handleShare}
            className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700"
          >
            <Share2 className="w-5 h-5" />
            <span>Partager la liste</span>
          </button>
        </div>

        <div className="border-t pt-6">
          <div className="space-y-4">
            {list.items.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-4 rounded-lg transition-colors ${
                  checkedItems[item.name] ? 'bg-emerald-50' : 'bg-gray-50'
                }`}
              >
                <div className="flex items-center flex-1">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={checkedItems[item.name] || false}
                      onChange={() => handleCheck(item.name)}
                      className="w-5 h-5 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500"
                    />
                    <div className="flex items-center">
                      <div className={`bg-emerald-100 p-2 rounded-lg mr-4 ${
                        checkedItems[item.name] ? 'opacity-50' : ''
                      }`}>
                        <ShoppingBag className="w-5 h-5 text-emerald-600" />
                      </div>
                      <span className={`font-medium ${
                        checkedItems[item.name] ? 'line-through text-gray-400' : ''
                      }`}>
                        {item.name}
                      </span>
                    </div>
                  </label>
                </div>
                <div className="flex items-center space-x-6">
                  <span className={`text-gray-600 ${
                    checkedItems[item.name] ? 'line-through opacity-50' : ''
                  }`}>
                    Quantité: <span className="font-medium">{item.quantity}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600">Impact environnemental</span>
          <div className="flex items-center text-emerald-600">
            <Leaf className="w-5 h-5 mr-2" />
            <span className="font-medium">{list.carbonScore} kg CO₂ économisés</span>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-emerald-600 h-2.5 rounded-full"
            style={{ width: `${Math.min((list.carbonScore / 5) * 100, 100)}%` }}
          ></div>
        </div>
      </div>

      {/* Modal de partage */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Partager la liste</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mb-6">
              <p className="text-gray-600 mb-4">
                Partagez cette liste avec d'autres personnes en leur envoyant le lien ci-dessous :
              </p>
              <div className="flex items-center space-x-2">
                <div className="flex-1 bg-gray-50 p-3 rounded-lg font-mono text-sm break-all">
                  {`${window.location.origin}/share/list/${list.id}`}
                </div>
                <button
                  onClick={handleCopyLink}
                  className="p-2 text-emerald-600 hover:text-emerald-700"
                >
                  {copySuccess ? (
                    <Check className="w-6 h-6" />
                  ) : (
                    <Copy className="w-6 h-6" />
                  )}
                </button>
              </div>
              {copySuccess && (
                <p className="text-emerald-600 text-sm mt-2">
                  Lien copié dans le presse-papiers !
                </p>
              )}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setShowShareModal(false)}
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingListDetails;