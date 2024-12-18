import React, { useState } from 'react';
import { Search, Clock, Building2, Award } from 'lucide-react';
import SurveyDetails from './SurveyDetails';

interface Survey {
  id: string;
  title: string;
  organization: string;
  theme: string;
  duration: string;
  points: number;
  description: string;
  questions: {
    id: number;
    text: string;
    type: 'single' | 'multiple' | 'scale' | 'text';
    options?: string[];
  }[];
}

const SurveysList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSurvey, setSelectedSurvey] = useState<Survey | null>(null);

  const surveys: Survey[] = [
    {
      id: '1',
      title: 'Impact des transports sur l\'environnement',
      organization: 'ADEME',
      theme: 'Mobilité',
      duration: '10 min',
      points: 50,
      description: 'Aidez-nous à comprendre vos habitudes de transport pour mieux adapter les solutions de mobilité durable.',
      questions: [
        {
          id: 1,
          text: 'Quel mode de transport utilisez-vous principalement ?',
          type: 'single',
          options: ['Voiture', 'Transports en commun', 'Vélo', 'Marche']
        }
      ]
    },
    {
      id: '2',
      title: 'Consommation d\'énergie des ménages',
      organization: 'EDF R&D',
      theme: 'Énergie',
      duration: '15 min',
      points: 75,
      description: 'Participez à notre étude sur les habitudes de consommation d\'énergie pour optimiser les solutions d\'économie d\'énergie.',
      questions: [
        {
          id: 1,
          text: 'Comment gérez-vous votre chauffage en hiver ?',
          type: 'multiple',
          options: ['Programmation', 'Manuel', 'Smart Home']
        }
      ]
    },
    {
      id: '3',
      title: 'Gestion des déchets ménagers',
      organization: 'CITEO',
      theme: 'Déchets',
      duration: '12 min',
      points: 60,
      description: 'Aidez-nous à améliorer les systèmes de tri et de recyclage en partageant vos pratiques quotidiennes.',
      questions: [
        {
          id: 1,
          text: 'À quelle fréquence triez-vous vos déchets ?',
          type: 'single',
          options: ['Toujours', 'Souvent', 'Parfois', 'Jamais']
        }
      ]
    }
  ];

  const filteredSurveys = surveys.filter(survey =>
    survey.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    survey.theme.toLowerCase().includes(searchQuery.toLowerCase()) ||
    survey.organization.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (selectedSurvey) {
    return <SurveyDetails survey={selectedSurvey} onBack={() => setSelectedSurvey(null)} />;
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Sondages disponibles</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher un sondage..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSurveys.map((survey) => (
          <button
            key={survey.id}
            onClick={() => setSelectedSurvey(survey)}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow text-left"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-sm font-medium">
                  {survey.theme}
                </span>
                <div className="flex items-center text-emerald-600">
                  <Award className="w-5 h-5 mr-1" />
                  <span className="font-medium">{survey.points} pts</span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">{survey.title}</h3>
              
              <div className="flex items-center text-gray-600 text-sm mb-4">
                <Building2 className="w-4 h-4 mr-1" />
                <span>{survey.organization}</span>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{survey.description}</p>

              <div className="flex items-center text-gray-600 text-sm">
                <Clock className="w-4 h-4 mr-1" />
                <span>{survey.duration}</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {filteredSurveys.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">Aucun sondage trouvé</p>
        </div>
      )}
    </div>
  );
};

export default SurveysList;