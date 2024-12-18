export interface WizardData {
  budget: number;
  mealsPerDay: number;
  peopleCount: number;
  preferences: string[];
}

export interface WizardStepProps {
  data: WizardData;
  onUpdate: (data: Partial<WizardData>) => void;
}