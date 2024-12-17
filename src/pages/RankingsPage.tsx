import React, { useState } from 'react';
import RankingHeader from '../components/rankings/RankingHeader';
import CurrentChallenge from '../components/rankings/CurrentChallenge';
import RankingList from '../components/rankings/RankingList';
import RecommendedActions from '../components/rankings/RecommendedActions';
import UserProgress from '../components/gamification/UserProgress';

const RankingsPage = () => {
  const [currentMonth, setCurrentMonth] = useState('Juin');

  const mockUsers = [
    { id: '1', name: 'Mathilde L.', points: 23123, position: 1 },
    { id: '2', name: 'Anne-Sophie P.', points: 12034, position: 2 },
    { id: '3', name: 'Laura D.', points: 11234, position: 3 },
    { id: '4', name: 'Daniel T.', points: 734, position: 4 },
    { id: '5', name: 'Jean Durand', points: 540, position: 5, isCurrentUser: true }
  ];

  const currentChallenge = {
    title: "Remporte le classement du mois et gagne un purificateur d'eau LAVIE",
    description: "Cumule le plus de points ce mois-ci pour gagner",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80&w=1600",
    brand: {
      name: "LAVIE",
      logo: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=100"
    }
  };

  return (
    <div className="pb-16">
      <RankingHeader 
        currentMonth={currentMonth}
        onMonthChange={setCurrentMonth}
      />
      
      <UserProgress 
        level={8}
        currentPoints={540}
        nextLevelPoints={1000}
        rank="Éco-débutant"
        weeklyProgress={45}
      />
      
      <CurrentChallenge {...currentChallenge} />
      
      <RankingList 
        users={mockUsers}
        currentUserPosition={5}
      />

      <RecommendedActions />
    </div>
  );
};

export default RankingsPage;