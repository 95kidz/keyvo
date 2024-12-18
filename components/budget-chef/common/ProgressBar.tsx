import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  titles: string[];
}

const ProgressBar = ({ currentStep, totalSteps, titles }: ProgressBarProps) => {
  return (
    <div className="relative">
      <div className="flex justify-between mb-2">
        {titles.map((title, index) => (
          <div
            key={index}
            className={`text-sm font-medium ${
              index <= currentStep ? 'text-emerald-600' : 'text-gray-400'
            }`}
          >
            {title}
          </div>
        ))}
      </div>
      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className="h-2 bg-emerald-600 rounded-full transition-all duration-300"
          style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;