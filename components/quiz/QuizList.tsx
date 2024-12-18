import React, { useState } from 'react';
import { Search, Clock, Brain, Trophy, Tag } from 'lucide-react';
import QuizDetails from './QuizDetails';

interface Quiz {
  id: string;
  title: string;
  theme: string;
  difficulty: string;
  duration: string;
  points: number;
  bonusPoints: number;
  bonusCondition: string;
  skills: string[];
  description: string;
  image: string;
}

const QuizList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);

  const themes = ['Biodiversité', 'Énergie', 'Alimentation', 'Transport', 'Déchets', 'Climat'];
  const difficulties = ['Débutant', 'Intermédiaire', 'Expert'];

  const quizzes: Quiz[] = [
    {
      id: '1',
      title: 'Les bases de l\'écologie',
      theme: 'Biodiversité',
      difficulty: 'Débutant',
      duration: '15 min',
      points: 20,
      bonusPoints: 10,
      bonusCondition: 'Terminez le quiz en moins de 10 minutes',
      skills: ['Comprendre les écosystèmes', 'Identifier les menaces environnementales'],
      description: 'Découvrez les fondamentaux de l\'écologie et comprenez les enjeux de la biodiversité.',
      image: 'https://images.unsplash.com/photo-1500829243541-74b677fecc30?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: '2',
      title: 'Énergies renouvelables',
      theme: 'Énergie',
      difficulty: 'Intermédiaire',
      duration: '20 min',
      points: 30,
      bonusPoints: 15,
      bonusCondition: '100% de bonnes réponses',
      skills: ['Comprendre les différentes sources d\'énergie', 'Évaluer leur impact environnemental'],
      description: 'Explorez les différentes sources d\'énergie renouvelable et leur rôle dans la transition énergétique.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: '3',
      title: 'Alimentation durable',
      theme: 'Alimentation',
      difficulty: 'Débutant',
      duration: '10 min',
      points: 25,
      bonusPoints: 10,
      bonusCondition: 'Aucune erreur sur les questions bonus',
      skills: ['Comprendre l\'impact de l\'alimentation', 'Identifier les alternatives durables'],
      description: 'Découvrez comment vos choix alimentaires peuvent impacter l\'environnement.',
      image: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: '4',
      title: 'Mobilité verte',
      theme: 'Transport',
      difficulty: 'Intermédiaire',
      duration: '15 min',
      points: 35,
      bonusPoints: 15,
      bonusCondition: 'Complétez le quiz en moins de 12 minutes',
      skills: ['Évaluer l\'impact des transports', 'Découvrir les alternatives écologiques'],
      description: 'Explorez les solutions de mobilité durable et leur impact sur l\'environnement.',
      image: 'https://images.unsplash.com/photo-1519003300449-424ad0405076?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: '5',
      title: 'Zéro déchet',
      theme: 'Déchets',
      difficulty: 'Expert',
      duration: '25 min',
      points: 40,
      bonusPoints: 20,
      bonusCondition: 'Répondez correctement à toutes les questions pratiques',
      skills: ['Maîtriser les principes du zéro déchet', 'Appliquer les solutions au quotidien'],
      description: 'Devenez un expert du zéro déchet et apprenez à réduire votre impact environnemental.',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: '6',
      title: 'Changement climatique',
      theme: 'Climat',
      difficulty: 'Expert',
      duration: '30 min',
      points: 50,
      bonusPoints: 25,
      bonusCondition: 'Excellente performance sur les questions scientifiques',
      skills: ['Comprendre les mécanismes du climat', 'Analyser les solutions possibles'],
      description: 'Plongez dans la science du changement climatique et ses enjeux pour notre planète.',
      image: 'https://images.unsplash.com/photo-1581093458791-9d42e3c2fd7c?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: '7',
      title: 'Biodiversité marine',
      theme: 'Biodiversité',
      difficulty: 'Intermédiaire',
      duration: '20 min',
      points: 35,
      bonusPoints: 15,
      bonusCondition: 'Identifiez correctement toutes les espèces marines',
      skills: ['Comprendre les écosystèmes marins', 'Identifier les menaces océaniques'],
      description: 'Explorez la richesse des océans et les enjeux de leur préservation.',
      image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: '8',
      title: 'Habitat écologique',
      theme: 'Énergie',
      difficulty: 'Expert',
      duration: '25 min',
      points: 45,
      bonusPoints: 20,
      bonusCondition: 'Excellente performance sur les calculs d\'efficacité énergétique',
      skills: ['Comprendre la construction durable', 'Optimiser la consommation énergétique'],
      description: 'Découvrez les principes de l\'habitat écologique et de l\'efficacité énergétique.',
      image: 'https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?auto=format&fit=crop&q=80&w=1200'
    }
  ];

  if (selectedQuiz) {
    return <QuizDetails quiz={selectedQuiz} onBack={() => setSelectedQuiz(null)} />;
  }

  const filteredQuizzes = quizzes.filter(quiz => {
    const matchesSearch = quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         quiz.theme.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTheme = !selectedTheme || quiz.theme === selectedTheme;
    const matchesDifficulty = !selectedDifficulty || quiz.difficulty === selectedDifficulty;
    return matchesSearch && matchesTheme && matchesDifficulty;
  });

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Quiz environnementaux</h2>
        
        {/* Desktop filters */}
        <div className="hidden md:block bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un quiz..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            
            <select
              value={selectedTheme}
              onChange={(e) => setSelectedTheme(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
            >
              <option value="">Tous les thèmes</option>
              {themes.map(theme => (
                <option key={theme} value={theme}>{theme}</option>
              ))}
            </select>
            
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
            >
              <option value="">Tous les niveaux</option>
              {difficulties.map(diff => (
                <option key={diff} value={diff}>{diff}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Mobile filters */}
        <div className="md:hidden space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un quiz..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <select
              value={selectedTheme}
              onChange={(e) => setSelectedTheme(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
            >
              <option value="">Tous les thèmes</option>
              {themes.map(theme => (
                <option key={theme} value={theme}>{theme}</option>
              ))}
            </select>
            
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
            >
              <option value="">Tous les niveaux</option>
              {difficulties.map(diff => (
                <option key={diff} value={diff}>{diff}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredQuizzes.map((quiz) => (
          <button
            key={quiz.id}
            onClick={() => setSelectedQuiz(quiz)}
            className="text-left bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48">
              <img
                src={quiz.image}
                alt={quiz.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-emerald-600">
                {quiz.difficulty}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{quiz.title}</h3>
              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{quiz.duration}</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="w-4 h-4 mr-1" />
                  <span>{quiz.points + quiz.bonusPoints} pts</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center text-gray-600">
                  <Tag className="w-4 h-4 mr-1" />
                  <span>{quiz.theme}</span>
                </div>
                <div className="flex items-center text-emerald-600">
                  <Brain className="w-4 h-4 mr-1" />
                  <span>{quiz.skills.length} compétences</span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {filteredQuizzes.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">Aucun quiz trouvé</p>
        </div>
      )}
    </div>
  );
};

export default QuizList;