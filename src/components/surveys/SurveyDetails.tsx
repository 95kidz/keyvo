import React, { useState } from 'react';
import { ArrowLeft, Building2, Clock, Award, Check } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  type: 'single' | 'multiple' | 'scale' | 'text';
  options?: string[];
}

interface Survey {
  id: string;
  title: string;
  organization: string;
  theme: string;
  duration: string;
  points: number;
  description: string;
  questions: Question[];
}

interface SurveyDetailsProps {
  survey: Survey;
  onBack: () => void;
}

const SurveyDetails = ({ survey, onBack }: SurveyDetailsProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswer = (questionId: number, answer: any) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleNext = () => {
    if (currentQuestion < survey.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const renderQuestion = (question: Question) => {
    switch (question.type) {
      case 'single':
        return (
          <div className="space-y-4">
            {question.options?.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(question.id, option)}
                className={`w-full text-left p-4 rounded-lg border transition-colors ${
                  answers[question.id] === option
                    ? 'border-emerald-500 bg-emerald-50'
                    : 'border-gray-200 hover:border-emerald-500 hover:bg-emerald-50'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        );
      
      case 'text':
        return (
          <textarea
            value={answers[question.id] || ''}
            onChange={(e) => handleAnswer(question.id, e.target.value)}
            className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            rows={4}
            placeholder="Votre réponse..."
          />
        );
      
      default:
        return null;
    }
  };

  if (isCompleted) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-emerald-100 rounded-full p-4">
            <Check className="w-12 h-12 text-emerald-600" />
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-4">Merci pour votre participation !</h3>
        <p className="text-gray-600 mb-6">
          Vous avez gagné {survey.points} points pour avoir complété ce sondage.
        </p>
        <button
          onClick={onBack}
          className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
        >
          Retour aux sondages
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center text-emerald-600 hover:text-emerald-700 mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Retour aux sondages
      </button>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-sm font-medium">
              {survey.theme}
            </span>
            <div className="flex items-center text-emerald-600">
              <Award className="w-5 h-5 mr-1" />
              <span className="font-medium">{survey.points} pts</span>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-2">{survey.title}</h2>
          
          <div className="flex items-center space-x-4 text-gray-600 text-sm mb-4">
            <div className="flex items-center">
              <Building2 className="w-4 h-4 mr-1" />
              <span>{survey.organization}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{survey.duration}</span>
            </div>
          </div>

          <p className="text-gray-600">{survey.description}</p>
        </div>

        <div className="p-6">
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Question {currentQuestion + 1} sur {survey.questions.length}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / survey.questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-6">{survey.questions[currentQuestion].text}</h3>
            {renderQuestion(survey.questions[currentQuestion])}
          </div>

          <button
            onClick={handleNext}
            disabled={!answers[survey.questions[currentQuestion].id]}
            className={`w-full py-3 rounded-lg transition-colors ${
              answers[survey.questions[currentQuestion].id]
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            {currentQuestion < survey.questions.length - 1 ? 'Question suivante' : 'Terminer'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurveyDetails;