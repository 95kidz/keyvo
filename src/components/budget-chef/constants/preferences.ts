import { Leaf, Check } from 'lucide-react';

export const preferences = [
  { id: 'vegetarian', label: 'Végétarien', icon: Leaf },
  { id: 'vegan', label: 'Végan', icon: Leaf },
  { id: 'gluten-free', label: 'Sans gluten', icon: Check },
  { id: 'lactose-free', label: 'Sans lactose', icon: Check },
  { id: 'organic', label: 'Bio', icon: Leaf },
  { id: 'local', label: 'Local', icon: Check }
] as const;