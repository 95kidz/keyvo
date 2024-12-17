import React from 'react';
import { StatCard } from './StatCard';

interface CategoryCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  items: Array<{
    id: string;
    title: string;
    icon: React.ElementType;
    count: number;
  }>;
  onItemClick: (id: string) => void;
}

export const CategoryCard = ({ icon: Icon, title, description, items, onItemClick }: CategoryCardProps) => (
  <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
    <div className="flex items-center space-x-4">
      <div className="bg-emerald-100 p-3 rounded-lg">
        <Icon className="w-6 h-6 text-emerald-600" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <StatCard
          key={item.id}
          {...item}
          onClick={() => onItemClick(item.id)}
        />
      ))}
    </div>
  </div>
);