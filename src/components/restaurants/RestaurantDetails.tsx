import React, { useState } from 'react';
import { ArrowLeft, MapPin, Leaf, Award, UtensilsCrossed, Clock, Truck } from 'lucide-react';
import { Restaurant } from './types';
import DeliveryModal from './DeliveryModal';

interface RestaurantDetailsProps {
  restaurant: Restaurant;
  onBack: () => void;
}

const RestaurantDetails = ({ restaurant, onBack }: RestaurantDetailsProps) => {
  const [showDeliveryModal, setShowDeliveryModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleOrder = () => {
    setShowDeliveryModal(true);
  };

  const handleOrderSuccess = () => {
    setShowDeliveryModal(false);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onBack();
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center text-emerald-600 hover:text-emerald-700 mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Retour aux restaurants
      </button>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-64">
          <img
            src={restaurant.image}
            alt={restaurant.dish}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {restaurant.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white rounded-full text-sm font-medium text-emerald-600"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl font-bold text-white">{restaurant.dish}</h1>
            <p className="text-white/90 mt-2">{restaurant.name}</p>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-emerald-100 rounded-lg">
                <MapPin className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Distance</p>
                <p className="font-semibold">{restaurant.distance} km</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-3 bg-emerald-100 rounded-lg">
                <Clock className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Temps de livraison</p>
                <p className="font-semibold">20-30 min</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-3 bg-emerald-100 rounded-lg">
                <Award className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Points à gagner</p>
                <p className="font-semibold">+{restaurant.points} pts</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-6 bg-gray-50 rounded-lg mb-8">
            <div>
              <p className="text-sm text-gray-600">Impact carbone total</p>
              <div className="flex items-center mt-1">
                <Leaf className="w-5 h-5 text-emerald-600 mr-1" />
                <span className="font-semibold">{restaurant.carbonScore} kg CO₂</span>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600">Prix</p>
              <p className="text-2xl font-bold">{restaurant.price.toFixed(2)} €</p>
            </div>
          </div>

          <button
            onClick={handleOrder}
            className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2"
          >
            <UtensilsCrossed className="w-5 h-5" />
            <span>Commander</span>
          </button>
        </div>
      </div>

      {showDeliveryModal && (
        <DeliveryModal
          onClose={() => setShowDeliveryModal(false)}
          onSuccess={handleOrderSuccess}
        />
      )}

      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 text-center max-w-md mx-4">
            <div className="mb-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                <Truck className="w-8 h-8 text-emerald-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Commande confirmée !</h3>
            <p className="text-gray-600 mb-2">
              Votre commande est en cours de préparation et sera livrée dans 20-30 minutes.
            </p>
            <p className="text-emerald-600 font-semibold">
              +{restaurant.points} points gagnés
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantDetails;