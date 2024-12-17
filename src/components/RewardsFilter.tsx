import React, { useState } from 'react';
import { Filter, Search, X } from 'lucide-react';

const RewardsFilter = () => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  return (
    <>
      {/* Desktop filters - hidden on mobile */}
      <div className="hidden md:block bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher une récompense..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          
          <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white">
            <option value="">Type de récompense</option>
            <option value="bons">Bons d'achat</option>
            <option value="abonnements">Abonnements</option>
            <option value="produits">Produits</option>
            <option value="experiences">Expériences</option>
          </select>
          
          <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white">
            <option value="">Points requis</option>
            <option value="0-200">0 - 200 points</option>
            <option value="201-500">201 - 500 points</option>
            <option value="501+">501+ points</option>
          </select>
        </div>
      </div>

      {/* Mobile filters */}
      <div className="md:hidden">
        {/* Mobile search and filter button */}
        <div className="sticky top-16 bg-white shadow-md z-40">
          <div className="p-4">
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher une récompense..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <button
              onClick={() => setShowMobileFilters(true)}
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              <Filter className="w-5 h-5" />
              <span>Filtrer</span>
            </button>
          </div>
        </div>

        {/* Mobile filter drawer */}
        {showMobileFilters && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl">
              <div className="p-4 border-b">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Filtres</h3>
                  <button
                    onClick={() => setShowMobileFilters(false)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <X className="w-6 h-6 text-gray-500" />
                  </button>
                </div>
              </div>

              <div className="p-4 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type de récompense
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white">
                    <option value="">Tous les types</option>
                    <option value="bons">Bons d'achat</option>
                    <option value="abonnements">Abonnements</option>
                    <option value="produits">Produits</option>
                    <option value="experiences">Expériences</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Points requis
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white">
                    <option value="">Tous les points</option>
                    <option value="0-200">0 - 200 points</option>
                    <option value="201-500">201 - 500 points</option>
                    <option value="501+">501+ points</option>
                  </select>
                </div>
              </div>

              <div className="p-4 border-t">
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Appliquer les filtres
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RewardsFilter;