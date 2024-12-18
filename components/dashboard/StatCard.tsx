import React from 'react';

interface StatCardProps {
  icon: React.ElementType;
  title: string;
  count: number;
  onClick: () => void;
}

export const StatCard = ({ icon: Icon, title, count, onClick }: StatCardProps) => (
  <button
    onClick={onClick}
    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow w-full text-left"
  >
    <div className="flex items-start justify-between">
      <div className="flex items-center space-x-4">
        <div className="bg-emerald-100 p-3 rounded-lg">
          <Icon className="w-6 h-6 text-emerald-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-1 text-emerald-600 font-medium">{count} élément{count > 1 ? 's' : ''}</p>
        </div>
      </div>
    </div>
  </button>
);