import React, { useState } from 'react';
import { CategoryCard } from '../components/dashboard/CategoryCard';
import { foodSection, otherStats } from '../constants/dashboardSections';
import WelcomeBanner from '../components/dashboard/WelcomeBanner';
import BudgetChefWizard from '../components/budget-chef/BudgetChefWizard';
import CreateList from '../components/shopping/CreateList';

const ActionsPage = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [showCreateList, setShowCreateList] = useState(false);
  const [showBudgetChef, setShowBudgetChef] = useState(false);

  const handleItemClick = (id: string) => {
    if (id === 'budget-chef') {
      setShowBudgetChef(true);
    } else {
      setSelectedSection(id);
    }
  };

  if (showBudgetChef) {
    return <BudgetChefWizard onBack={() => setShowBudgetChef(false)} />;
  }

  if (showCreateList) {
    return <CreateList onBack={() => setShowCreateList(false)} />;
  }

  return (
    <main className="page-container">
      <WelcomeBanner />

      <div className="space-y-4 mt-4">
        <CategoryCard 
          {...foodSection} 
          onItemClick={handleItemClick}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherStats.map((stat) => (
            <CategoryCard
              key={stat.id}
              {...stat}
              onItemClick={() => setSelectedSection(stat.id)}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ActionsPage;