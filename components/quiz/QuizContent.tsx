import React, { useState, useEffect } from 'react';
import { Clock, AlertCircle, CheckCircle, Trophy } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

interface QuizContentProps {
  onComplete: () => void;
  totalPoints: number;
  bonusPoints: number;
}

const questions: Question[] = [
  {
    id: 1,
    text: "Qu'est-ce qu'un écosystème ?",
    options: [
      "Un ensemble d'êtres vivants uniquement",
      "Un milieu naturel isolé",
      "Un ensemble d'êtres vivants en interaction avec leur environnement",
      "Une zone géographique spécifique"
    ],
    correctAnswer: 2
  },
  {
    id: 2,
    text: "Quelle est la principale cause de la perte de biodiversité ?",
    options: [
      "Les changements climatiques",
      "La destruction des habitats naturels",
      "La pollution",
      "La surpêche"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    text: "Qu'est-ce que la chaîne alimentaire ?",
    options: [
      "Une série de restaurants",
      "Un transfert d'énergie entre organismes",
      "Un type de plante",
      "Un système de classification"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    text: "Quel est le rôle des décomposeurs dans un écosystème ?",
    options: [
      "Produire de l'oxygène",
      "Chasser les prédateurs",
      "Recycler la matière organique",
      "Polliniser les fleurs"
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    text: "Qu'est-ce que l'effet de serre ?",
    options: [
      "Un type de culture sous serre",
      "Un phénomène naturel de régulation de la température",
      "Une pollution atmosphérique",
      "Une technique de jardinage"
    ],
    correctAnswer: 1
  }
];

const QuizContent = ({ onComplete, totalPoints, bonusPoints }: QuizContentProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !quizCompleted) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !quizCompleted) {
      handleTimeUp();
    }
  }, [timeLeft, quizCompleted]);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleQuizComplete();
    }
  };

  const handleQuizComplete = () => {
    setQuizCompleted(true);
    setShowResults(true);
    calculateScore();
  };

  const handleTimeUp = () => {
    setQuizCompleted(true);
    setShowResults(true);
    calculateScore(true);
  };

  const calculateScore = (timeUp: boolean = false) => {
    const correctAnswers = answers.reduce((count, answer, index) => {
      return answer === questions[index].correctAnswer ? count + 1 : count;
    }, 0);

    let earnedPoints = 0;
    if (timeUp) {
      // 1/5 des points si temps écoulé
      earnedPoints = Math.floor(totalPoints / 5);
    } else {
      // 1/3 des points si réponses incorrectes, total si tout correct
      earnedPoints = correctAnswers === questions.length ? 
        totalPoints + bonusPoints : 
        Math.floor(totalPoints / 3);
    }

    return { correctAnswers, earnedPoints };
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (showResults) {
    const { correctAnswers, earnedPoints } = calculateScore(timeLeft === 0);

    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        {timeLeft === 0 ? (
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="bg-red-100 rounded-full p-4">
                <AlertCircle className="w-12 h-12 text-red-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold">Temps écoulé !</h3>
            <p className="text-gray-600">
              Vous avez obtenu {earnedPoints} points.
              N'hésitez pas à réessayer pour améliorer votre score !
            </p>
          </div>
        ) : correctAnswers === questions.length ? (
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="bg-emerald-100 rounded-full p-4">
                <Trophy className="w-12 h-12 text-emerald-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold">Félicitations !</h3>
            <p className="text-gray-600">
              Vous avez répondu correctement à toutes les questions !
            </p>
            <div className="text-emerald-600 font-semibold">
              Points gagnés : {earnedPoints}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="bg-orange-100 rounded-full p-4">
                <CheckCircle className="w-12 h-12 text-orange-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold">Quiz terminé</h3>
            <p className="text-gray-600">
              Vous avez obtenu {correctAnswers} bonnes réponses sur {questions.length}
            </p>
            <div className="text-emerald-600 font-semibold">
              Points gagnés : {earnedPoints}
            </div>
          </div>
        )}
        
        <button
          onClick={onComplete}
          className="mt-6 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
        >
          Retour aux quiz
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="text-lg font-semibold">
          Question {currentQuestion + 1}/{questions.length}
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          <Clock className="w-5 h-5" />
          <span className={`font-mono ${timeLeft <= 30 ? 'text-red-600' : ''}`}>
            {formatTime(timeLeft)}
          </span>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-6">{questions[currentQuestion].text}</h3>
        <div className="space-y-4">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-emerald-500 hover:bg-emerald-50 transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center text-sm text-gray-600">
        <span>{currentQuestion + 1} sur {questions.length}</span>
        <div className="w-64 bg-gray-200 rounded-full h-2">
          <div
            className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default QuizContent;