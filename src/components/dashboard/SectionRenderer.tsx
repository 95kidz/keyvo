import React from 'react';
import BackButton from '../common/BackButton';
import ShoppingLists from '../shopping/ShoppingLists';
import RecipesList from '../recipes/RecipesList';
import RestaurantSearch from '../restaurants/RestaurantSearch';
import ChallengesList from '../challenges/ChallengesList';
import QuizList from '../quiz/QuizList';
import SurveysList from '../surveys/SurveysList';

interface SectionRendererProps {
  section: string;
  onBack: () => void;
}

const SectionRenderer = ({ section, onBack }: SectionRendererProps) => {
  const Container = ({ children }: { children: React.ReactNode }) => (
    <div className="max-w-7xl mx-auto px-4">
      <BackButton onBack={onBack} />
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
    case 'restaurants':
      return (
        <Container>
          <RestaurantSearch />
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
    default:
      return null;
  }
};

export default SectionRenderer;