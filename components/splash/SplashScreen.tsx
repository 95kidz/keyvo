import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, BarChart2, Gift, ArrowRight } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const screens = [
  {
    id: 1,
    title: "Agissez pour la planète.",
    subtitle: "Participez à des actions clés pour réduire votre empreinte carbone et adopter des habitudes plus responsables.",
    actions: [
      "Créez des listes de courses intelligentes.",
      "Essayez des recettes écologiques adaptées à vos envies.",
      "Relevez des défis et participez à des quiz ou sondages."
    ],
    icon: CheckCircle,
    color: "emerald"
  },
  {
    id: 2,
    title: "Votre impact en un coup d'œil.",
    subtitle: "Mesurez vos efforts grâce à des statistiques détaillées.",
    actions: [
      "Suivez l'empreinte carbone de vos courses et recettes.",
      "Consultez vos progrès et vos contributions à un avenir durable.",
      "Visualisez vos actions écologiques avec des indicateurs clairs."
    ],
    icon: BarChart2,
    color: "blue"
  },
  {
    id: 3,
    title: "Transformez vos efforts en récompenses.",
    subtitle: "Cumulez des Eco Coins pour débloquer des offres écoresponsables exclusives.",
    actions: [
      "Des abonnements écoresponsables.",
      "Des bons d'achat dans des commerces durables.",
      "Des expériences uniques pour soutenir des initiatives vertes."
    ],
    icon: Gift,
    color: "amber"
  }
];

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      if (currentScreen < screens.length - 1) {
        setCurrentScreen(prev => prev + 1);
      } else {
        setIsAutoPlaying(false);
      }
    }, 4000);

    return () => clearInterval(timer);
  }, [currentScreen, isAutoPlaying]);

  const handleNext = () => {
    if (currentScreen === screens.length - 1) {
      onComplete();
    } else {
      setCurrentScreen(prev => prev + 1);
      setIsAutoPlaying(false);
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'emerald':
        return 'bg-emerald-500 text-emerald-500';
      case 'blue':
        return 'bg-blue-500 text-blue-500';
      case 'amber':
        return 'bg-amber-500 text-amber-500';
      default:
        return 'bg-emerald-500 text-emerald-500';
    }
  };

  return (
    <div className="fixed inset-0 bg-white z-50">
      <div className="h-full flex flex-col">
        <div className="flex-1 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScreen}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
            >
              {(() => {
                const screen = screens[currentScreen];
                const Icon = screen.icon;
                const colorClasses = getColorClasses(screen.color);

                return (
                  <>
                    <div className={`p-6 rounded-full ${colorClasses.split(' ')[0]} bg-opacity-10 mb-8`}>
                      <Icon className={`w-16 h-16 ${colorClasses.split(' ')[1]}`} />
                    </div>
                    <h1 className="text-3xl font-bold mb-4">{screen.title}</h1>
                    <p className="text-gray-600 mb-8 max-w-lg">{screen.subtitle}</p>
                    <div className="space-y-4 text-left max-w-md">
                      {screen.actions.map((action, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.2 }}
                          className="flex items-center space-x-3"
                        >
                          <div className={`w-2 h-2 rounded-full ${colorClasses.split(' ')[0]}`} />
                          <span>{action}</span>
                        </motion.div>
                      ))}
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="p-6 flex flex-col items-center">
          <div className="flex space-x-2 mb-6">
            {screens.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentScreen ? 'bg-emerald-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium flex items-center space-x-2 hover:bg-emerald-700 transition-colors"
          >
            <span>{currentScreen === screens.length - 1 ? "Découvrir l'application" : "Suivant"}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;