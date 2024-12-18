import React from 'react';
import { Leaf, Recycle, TreePine } from 'lucide-react';

interface StatCardProps {
  icon: React.ElementType;
  value: string;
  label: string;
  color: string;
  change?: string;
}

const StatCard = ({ icon: Icon, value, label, color, change }: StatCardProps) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex items-center space-x-4">
      <div className={`p-3 rounded-lg ${color}`}>
        <Icon className="w-6 h-6 text-emerald-600" />
      </div>
      <div>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <p className="text-gray-600">{label}</p>
        {change && (
          <p className={`text-sm mt-1 ${
            change.startsWith('+') ? 'text-emerald-600' : 'text-red-600'
          }`}>
            {change} ce mois
          </p>
        )}
      </div>
    </div>
  </div>
);

const ImpactStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <StatCard
        icon={Leaf}
        value="125 kg"
        label="CO₂ économisé"
        color="bg-emerald-100"
        change="+12.5 kg"
      />
      <StatCard
        icon={Recycle}
        value="45"
        label="Produits durables achetés"
        color="bg-emerald-100"
        change="+8"
      />
      <StatCard
        icon={TreePine}
        value="12"
        label="Défis complétés"
        color="bg-emerald-100"
        change="+3"
      />
    </div>
  );
};

export default ImpactStats;