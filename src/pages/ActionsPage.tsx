import React, { useState } from 'react';
import { CategoryCard } from '../components/dashboard/CategoryCard';
import { StatCard } from '../components/dashboard/StatCard';
import { renderSection } from '../components/dashboard/SectionRenderer';
import { foodSection, otherStats } from '../constants/dashboardSections';
import BudgetChefWizard from '../components/budget-chef/BudgetChefWizard';
import WelcomeBanner from '../components/dashboard/WelcomeBanner';

const ActionsPage = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [showBudgetChef, setShowBudgetChef] = useState(false);

  if (showBudgetChef) {
    return <BudgetChefWizard onBack={() => setShowBudgetChef(false)} />;
  }

  if (selectedSection) {
    return renderSection(selectedSection, () => setSelectedSection(null));
  }

  const handleItemClick = (id: string) => {
    if (id === 'budget-chef') {
      setShowBudgetChef(true);
    } else {
      setSelectedSection(id);
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <WelcomeBanner />
      </div>

      <div className="space-y-8">
        <CategoryCard 
          {...foodSection} 
          onItemClick={handleItemClick}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherStats.map((stat) => (
            <StatCard
              key={stat.id}
              {...stat}
              onClick={() => setSelectedSection(stat.id)}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ActionsPage;