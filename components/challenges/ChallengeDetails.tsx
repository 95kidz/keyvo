import React, { useState } from 'react';
import { ArrowLeft, Trophy, Tag, Clock, Award, ChefHat, Zap, MapPin, QrCode, CheckCircle } from 'lucide-react';

interface Challenge {
  id: string;
  title: string;
  description: string;
  category: string;
  points: number;
  difficulty: 'Facile' | 'Moyen' | 'Difficile';
  duration: string;
  progress?: number;
}

interface ChallengeDetailsProps {
  challenge: Challenge;
  onBack: () => void;
}

const ChallengeDetails = ({ challenge, onBack }: ChallengeDetailsProps) => {
  const [isStarted, setIsStarted] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [progress, setProgress] = useState<number>(challenge.progress || 0);
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);

  const isMobilityChallenge = challenge.id === '1';

  const getConditions = (challengeId: string) => {
    switch (challengeId) {
      case '1': // Mobilité Verte
        return [
          {
            title: 'Conditions de réussite',
            items: [
              'Effectuez 5 km de déplacements doux en 7 jours',
              'Les déplacements sont automatiquement tracés',
              'Marche ou vélo uniquement'
            ]
          },
          {
            title: 'Attribution des points',
            items: [
              '15 Eco Coins pour la réussite complète du défi'
            ]
          }
        ];

      case '2': // Shopping Local
        return [
          {
            title: 'Conditions de réussite',
            items: [
              'Effectuez vos courses dans un magasin bio partenaire',
              'Scannez le QR code du magasin après vos achats',
              'Minimum d\'achat de 25€'
            ]
          },
          {
            title: 'Attribution des points',
            items: [
              '25 Eco Coins pour la réussite complète du défi'
            ]
          }
        ];

      case '3': // Zéro Déchet
        return [
          {
            title: 'Conditions de réussite',
            items: [
              'Utilisez uniquement des contenants réutilisables',
              'Prenez en photo vos contenants utilisés',
              'Durée: 3 jours consécutifs'
            ]
          },
          {
            title: 'Attribution des points',
            items: [
              '30 Eco Coins pour la réussite complète du défi'
            ]
          }
        ];

      case '4': // Chef Végétarien
        return [
          {
            title: 'Conditions de réussite',
            items: [
              'Partagez 3 recettes végétariennes sur l\'application',
              'L\'empreinte carbone totale des 3 recettes doit être ≤ 10 kg CO₂',
              'Utilisez au moins 50% d\'ingrédients locaux par recette',
              'Les recettes doivent être différentes',
              'Incluez des photos des plats préparés'
            ]
          },
          {
            title: 'Attribution des points',
            items: [
              '40 Eco Coins pour la réussite complète du défi'
            ]
          }
        ];

      case '5': // Énergie Consciente
        return [
          {
            title: 'Conditions de réussite',
            items: [
              'Connectez votre compte fournisseur d\'énergie',
              'Réduisez votre consommation de 20% sur 14 jours',
              'La mesure est automatique une fois le compte connecté',
              'Maintenir la réduction pendant au moins 10 jours sur 14'
            ]
          },
          {
            title: 'Attribution des points',
            items: [
              '50 Eco Coins pour la réussite complète du défi'
            ]
          }
        ];

      default:
        return [];
    }
  };

  const getValidationContent = () => {
    switch (challenge.id) {
      case '1':
        return {
          title: 'Suivi GPS',
          description: 'Vos déplacements sont automatiquement suivis',
          Icon: MapPin
        };

      case '2':
        return {
          title: 'Scanner le QR Code',
          description: 'Scannez le QR code du magasin partenaire',
          Icon: QrCode
        };

      case '3':
        return {
          title: 'Valider avec photo',
          description: 'Prenez en photo vos contenants réutilisables',
          Icon: CheckCircle
        };

      case '4':
        return {
          title: 'Partager une recette',
          description: 'Ajoutez une nouvelle recette végétarienne',
          Icon: ChefHat
        };

      case '5':
        return {
          title: 'Connecter votre compte',
          description: 'Sélectionnez votre fournisseur d\'énergie',
          Icon: Zap
        };

      default:
        return {
          title: 'Valider le défi',
          description: 'Fournissez une preuve pour valider',
          Icon: CheckCircle
        };
    }
  };

  const handleStart = () => {
    setIsStarted(true);
    if (isMobilityChallenge || challenge.id === '5') {
      setShowValidation(true);
    }
  };

  const handleValidation = () => {
    if (!isStarted) return;
    setShowValidation(true);
  };

  const handleProviderSelect = (providerId: string) => {
    setSelectedProvider(providerId);
    setShowValidation(false);
    // Simulate progress updates
    const interval = setInterval(() => {
      setProgress(prev => Math.min(prev + 5, 100));
    }, 3000);
    return () => clearInterval(interval);
  };

  const getDifficultyColor = (difficulty: Challenge['difficulty']) => {
    switch (difficulty) {
      case 'Facile':
        return 'text-emerald-600 bg-emerald-100';
      case 'Moyen':
        return 'text-orange-600 bg-orange-100';
      case 'Difficile':
        return 'text-red-600 bg-red-100';
    }
  };

  const validationContent = getValidationContent();

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center text-emerald-600 hover:text-emerald-700 mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Retour aux défis
      </button>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{challenge.title}</h2>
              <p className="text-gray-600">{challenge.description}</p>
            </div>
            <div className="flex items-center space-x-2 bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full">
              <Trophy className="w-5 h-5" />
              <span className="font-semibold">{challenge.points} points</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <Tag className="w-5 h-5" />
              <span>{challenge.category}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Clock className="w-5 h-5" />
              <span>{challenge.duration}</span>
            </div>
            <div className={`flex items-center space-x-2 px-3 py-1 rounded-full ${getDifficultyColor(challenge.difficulty)}`}>
              <Award className="w-5 h-5" />
              <span>{challenge.difficulty}</span>
            </div>
          </div>

          {progress > 0 && (
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Progression</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          )}

          <div className="space-y-6">
            {getConditions(challenge.id).map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-lg mb-3">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-2 text-gray-600">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8">
            {!isStarted ? (
              <button
                onClick={handleStart}
                className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Award className="w-5 h-5" />
                <span>Commencer le défi</span>
              </button>
            ) : (
              <button
                onClick={handleValidation}
                className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Valider le défi</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {showValidation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="text-center">
              {challenge.id === '5' ? (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Sélectionnez votre fournisseur</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { id: 'edf', name: 'EDF', logo: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=100' },
                      { id: 'engie', name: 'Engie', logo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=100' },
                      { id: 'total', name: 'TotalEnergies', logo: 'https://images.unsplash.com/photo-1462899006636-339e08d1844e?auto=format&fit=crop&q=80&w=100' }
                    ].map(provider => (
                      <button
                        key={provider.id}
                        onClick={() => handleProviderSelect(provider.id)}
                        className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <img src={provider.logo} alt={provider.name} className="w-12 h-12 rounded-full object-cover" />
                        <span className="font-medium">{provider.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  <validationContent.Icon className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{validationContent.title}</h3>
                  <p className="text-gray-600 mb-6">{validationContent.description}</p>
                  {challenge.id === '2' && (
                    <div className="bg-gray-100 p-4 rounded-lg mb-6">
                      <QrCode className="w-32 h-32 mx-auto opacity-50" />
                      <p className="text-sm text-gray-600 mt-2">Placez le QR code du magasin dans le cadre</p>
                    </div>
                  )}
                </>
              )}
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowValidation(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Annuler
                </button>
                {challenge.id !== '5' && (
                  <button
                    onClick={() => setShowValidation(false)}
                    className="flex-1 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700"
                  >
                    Valider
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChallengeDetails;