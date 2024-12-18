import React, { useState } from 'react';
import { CategoryCard } from '../components/dashboard/CategoryCard';
import { foodSection, otherStats } from '../constants/dashboardSections';
import WelcomeBanner from '../components/dashboard/WelcomeBanner';
import BudgetChefWizard from '../components/budget-chef/BudgetChefWizard';
import SectionRenderer from '../components/dashboard/SectionRenderer';

const ActionsPage = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
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

  if (selectedSection) {
    return <SectionRenderer section={selectedSection} onBack={() => setSelectedSection(null)} />;
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
              icon={stat.icon}
              title={stat.title}
              description=""
              items={[{ ...stat }]}
              onItemClick={() => setSelectedSection(stat.id)}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ActionsPage;