import React, { useState } from 'react';
import { ArrowLeft, Clock, Brain, Trophy, Tag, TrendingUp, Star } from 'lucide-react';
import QuizContent from './QuizContent';

interface QuizDetailsProps {
  quiz: {
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
  };
  onBack: () => void;
}

const QuizDetails = ({ quiz, onBack }: QuizDetailsProps) => {
  const [isStarted, setIsStarted] = useState(false);

  if (isStarted) {
    return (
      <div className="max-w-4xl mx-auto">
        <QuizContent
          onComplete={() => setIsStarted(false)}
          totalPoints={quiz.points}
          bonusPoints={quiz.bonusPoints}
        />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center text-emerald-600 hover:text-emerald-700 mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Retour aux quiz
      </button>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-64">
          <img
            src={quiz.image}
            alt={quiz.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h1 className="text-3xl font-bold text-white mb-2">{quiz.title}</h1>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-2 text-white">
                <Tag className="w-5 h-5" />
                <span>{quiz.theme}</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Clock className="w-5 h-5" />
                <span>{quiz.duration}</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <TrendingUp className="w-5 h-5" />
                <span>{quiz.difficulty}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <p className="text-gray-600 mb-6">{quiz.description}</p>

              <h2 className="text-xl font-semibold mb-4">Compétences développées</h2>
              <div className="space-y-3 mb-6">
                {quiz.skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Brain className="w-5 h-5 text-emerald-600" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>

              <div className="bg-emerald-50 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-2 text-emerald-600 font-semibold mb-2">
                  <Star className="w-5 h-5" />
                  <span>Bonus disponible</span>
                </div>
                <p className="text-gray-600">{quiz.bonusCondition}</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Récompenses</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Points de base</span>
                  <div className="flex items-center space-x-1 text-emerald-600">
                    <Trophy className="w-5 h-5" />
                    <span className="font-semibold">{quiz.points}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Bonus possible</span>
                  <div className="flex items-center space-x-1 text-emerald-600">
                    <Star className="w-5 h-5" />
                    <span className="font-semibold">+{quiz.bonusPoints}</span>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between font-semibold">
                    <span>Total possible</span>
                    <span className="text-emerald-600">{quiz.points + quiz.bonusPoints}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsStarted(true)}
                className="w-full mt-6 bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Commencer le quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizDetails;