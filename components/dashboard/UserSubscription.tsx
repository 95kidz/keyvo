import React from 'react';
import { Crown, Check } from 'lucide-react';

interface UserSubscriptionProps {
  type: 'Free' | 'Premium';
  expiresAt: string;
  features: string[];
}

const UserSubscription = ({ type, expiresAt, features }: UserSubscriptionProps) => {
  const isPremium = type === 'Premium';
  const expirationDate = new Date(expiresAt).toLocaleDateString('fr-FR');

  return (
    <div className={`rounded-lg shadow-md p-6 ${
      isPremium ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white' : 'bg-white'
    }`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Crown className={`w-6 h-6 ${isPremium ? 'text-yellow-300' : 'text-gray-400'}`} />
          <h3 className="text-lg font-semibold">Abonnement {type}</h3>
        </div>
      </div>

      {isPremium && (
        <div className="mb-4">
          <p className={`text-sm ${isPremium ? 'text-emerald-100' : 'text-gray-600'}`}>
            Expire le {expirationDate}
          </p>
        </div>
      )}

      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <Check className={`w-4 h-4 ${
              isPremium ? 'text-yellow-300' : 'text-emerald-500'
            }`} />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {!isPremium && (
        <button className="w-full mt-4 bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors">
          Passer à Premium
        </button>
      )}
    </div>
  );
};

export default UserSubscription;