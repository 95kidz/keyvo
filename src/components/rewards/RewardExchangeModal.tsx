import React, { useState } from 'react';
import { X, Gift, AlertCircle, Check, Calendar, MapPin, Tag } from 'lucide-react';

interface RewardExchangeModalProps {
  reward: {
    logo: string;
    partner: string;
    name: string;
    points: number;
    category: string;
  };
  userPoints: number;
  onClose: () => void;
}

const getRewardContent = (reward: RewardExchangeModalProps['reward']) => {
  switch (reward.name) {
    case 'Abonnement SNCF Pro':
      return {
        title: 'Pass Liberté Pro SNCF',
        validity: '12 mois',
        benefits: [
          'Réduction de 30% sur tous vos trajets professionnels',
          'Accès aux salons SNCF Grand Voyageur',
          'Échange et remboursement gratuits jusqu\'à 24h avant le départ',
          'Cumul de points fidélité doublé'
        ],
        conditions: 'Valable sur tous les TGV INOUI et INTERCITÉS. Non cumulable avec d\'autres offres.',
        code: 'SNCF-ECO-2024-XXXXXX'
      };
    case 'Carte Cadeau Carrefour':
      return {
        title: 'Carte Cadeau Bio & Local',
        validity: '6 mois',
        benefits: [
          'Utilisable dans le rayon Bio',
          'Valeur de 50€',
          'Bonus de 10% sur les produits locaux',
          'Cumul avec la carte de fidélité'
        ],
        conditions: 'Valable dans tous les magasins Carrefour participants. Non remboursable.',
        code: 'CBIO-2024-XXXXXX'
      };
    case 'Éco-abonnement Énergie':
      return {
        title: 'Pack Énergie Verte Premium',
        validity: '24 mois',
        benefits: [
          'Réduction de 20% sur votre facture d\'électricité verte',
          'Suivi en temps réel de votre consommation',
          'Diagnostic énergétique personnalisé offert',
          'Priorité intervention maintenance'
        ],
        conditions: 'Engagement 24 mois. Électricité 100% renouvelable garantie.',
        code: 'GREEN-2024-XXXXXX'
      };
    case 'Réduction sur produits Bio':
      return {
        title: 'Pass Bio Premium',
        validity: '3 mois',
        benefits: [
          'Réduction immédiate de 25% sur tous les produits bio',
          'Livraison gratuite à domicile',
          'Accès aux ventes privées bio',
          'Newsletter recettes bio exclusive'
        ],
        conditions: 'Valable sur l\'ensemble des produits bio. Minimum d\'achat 30€.',
        code: 'BIO-2024-XXXXXX'
      };
    default:
      return null;
  }
};

const RewardExchangeModal = ({ reward, userPoints, onClose }: RewardExchangeModalProps) => {
  const [step, setStep] = useState(1);
  const [exchangeComplete, setExchangeComplete] = useState(false);
  const rewardContent = getRewardContent(reward);

  const canExchange = userPoints >= reward.points;

  const handleExchange = () => {
    setTimeout(() => {
      setStep(2);
      if (canExchange) {
        setExchangeComplete(true);
      }
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold">Échanger votre récompense</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {step === 1 ? (
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <img src={reward.logo} alt={reward.partner} className="w-24 h-24 rounded-lg object-cover" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{rewardContent?.title}</h3>
                  <p className="text-gray-600 mb-4">{reward.partner}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      Validité: {rewardContent?.validity}
                    </div>
                    <div className="flex items-center">
                      <Tag className="w-4 h-4 mr-1" />
                      {reward.category}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                <h4 className="font-semibold">Avantages inclus:</h4>
                <ul className="space-y-2">
                  {rewardContent?.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 mt-2 mr-2 bg-emerald-500 rounded-full flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span>Coût</span>
                  <span className="font-semibold">{reward.points} Eco Coins</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Vos points</span>
                  <span className="font-semibold">{userPoints} Eco Coins</span>
                </div>
              </div>

              {!canExchange && (
                <div className="flex items-center space-x-2 text-red-600">
                  <AlertCircle className="w-5 h-5" />
                  <span>Points insuffisants pour cet échange</span>
                </div>
              )}

              <button
                onClick={handleExchange}
                disabled={!canExchange}
                className={`w-full py-3 rounded-lg flex items-center justify-center space-x-2 ${
                  canExchange
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <Gift className="w-5 h-5" />
                <span>Échanger {reward.points} points</span>
              </button>

              <div className="text-sm text-gray-600">
                <p className="font-medium mb-1">Conditions d'utilisation:</p>
                <p>{rewardContent?.conditions}</p>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              {exchangeComplete ? (
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <div className="bg-emerald-100 rounded-full p-4">
                      <Check className="w-12 h-12 text-emerald-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Échange réussi !</h3>
                    <p className="text-gray-600 mb-6">
                      Votre récompense est prête à être utilisée
                    </p>
                    
                    <div className="bg-gray-50 p-6 rounded-lg mb-6 text-left">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Code de votre récompense:</h4>
                          <div className="bg-white p-3 rounded border border-gray-200 font-mono text-lg text-center">
                            {rewardContent?.code}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Comment utiliser votre récompense:</h4>
                          <ol className="list-decimal list-inside space-y-2 text-gray-600">
                            <li>Présentez ce code en magasin ou sur le site partenaire</li>
                            <li>Validité: {rewardContent?.validity} à partir d'aujourd'hui</li>
                            <li>Conservez une copie de votre code</li>
                          </ol>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        const content = `${rewardContent?.title}\n\nCode: ${rewardContent?.code}\nValidité: ${rewardContent?.validity}\n\nAvantages:\n${rewardContent?.benefits.join('\n')}\n\nConditions:\n${rewardContent?.conditions}`;
                        const blob = new Blob([content], { type: 'text/plain' });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = `recompense-${reward.name.toLowerCase().replace(/\s+/g, '-')}.txt`;
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                        URL.revokeObjectURL(url);
                      }}
                      className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700"
                    >
                      <Gift className="w-5 h-5" />
                      <span>Télécharger la récompense</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <div className="bg-red-100 rounded-full p-4">
                      <AlertCircle className="w-12 h-12 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Points insuffisants</h3>
                    <p className="text-gray-600">
                      Il vous manque {reward.points - userPoints} points pour obtenir cette récompense
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RewardExchangeModal;