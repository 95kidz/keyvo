import React from 'react';
import { ArrowLeft } from 'lucide-react';
import ShoppingLists from '../shopping/ShoppingLists';
import SurveysList from '../surveys/SurveysList';
import RestaurantSearch from '../restaurants/RestaurantSearch';
import RecipesList from '../recipes/RecipesList';
import ChallengesList from '../challenges/ChallengesList';
import QuizList from '../quiz/QuizList';

const BackButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="flex items-center text-emerald-600 hover:text-emerald-700 mb-6"
  >
    <ArrowLeft className="w-5 h-5 mr-2" />
    Retour
  </button>
);

export const renderSection = (section: string, onBack: () => void) => {
  const Container = ({ children }: { children: React.ReactNode }) => (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <BackButton onClick={onBack} />
      {children}
    </div>
  );

  switch (section) {
    case 'shopping-lists':
      return (
        <Container>
          <ShoppingLists />
        </Container>
      );
    case 'recipes':
      return (
        <Container>
          <RecipesList />
        </Container>
      );
    case 'challenges':
      return (
        <Container>
          <ChallengesList />
        </Container>
      );
    case 'quiz':
      return (
        <Container>
          <QuizList />
        </Container>
      );
    case 'surveys':
      return (
        <Container>
          <SurveysList />
        </Container>
      );
    case 'restaurants':
      return (
        <Container>
          <RestaurantSearch />
        </Container>
      );
    default:
      return null;
  }
};