import React from 'react';
import { Crown, Star, Shield, Zap } from 'lucide-react';

interface SubscriptionSectionProps {
  subscription: {
    type: 'Free' | 'Premium';
    expiresAt?: string;
  };
  onUpgrade: () => void;
}

const SubscriptionSection = ({ subscription, onUpgrade }: SubscriptionSectionProps) => {
  const isPremium = subscription.type === 'Premium';
  const expirationDate = subscription.expiresAt 
    ? new Date(subscription.expiresAt).toLocaleDateString('fr-FR')
    : null;

  return (
    <div className="p-4 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg text-white">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Crown className="w-5 h-5 text-yellow-300" />
          <span className="font-medium">Abonnement {subscription.type}</span>
        </div>
        {isPremium && (
          <span className="text-sm text-emerald-100">
            Expire le {expirationDate}
          </span>
        )}
      </div>

      {isPremium ? (
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-sm">
            <Star className="w-4 h-4 text-yellow-300" />
            <span>Points doublés sur tous les défis</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Shield className="w-4 h-4 text-yellow-300" />
            <span>Accès aux défis exclusifs</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Zap className="w-4 h-4 text-yellow-300" />
            <span>Récompenses premium</span>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-sm text-emerald-100 mb-4">
            Passez à Premium pour débloquer tous les avantages !
          </p>
          <button
            onClick={onUpgrade}
            className="w-full bg-white text-emerald-600 px-4 py-2 rounded-lg font-medium hover:bg-emerald-50 transition-colors"
          >
            Passer à Premium
          </button>
        </div>
      )}
    </div>
  );
};

export default SubscriptionSection;