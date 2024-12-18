import React from 'react';
import { LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  message: string;
  icon: LucideIcon;
}

const EmptyState = ({ message, icon: Icon }: EmptyStateProps) => {
  return (
    <div className="text-center py-12">
      <Icon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
      <p className="text-gray-500">{message}</p>
    </div>
  );
};

export default EmptyState;