import { Apple, ListPlus, ChefHat, Trophy, BookOpen, ClipboardList, UtensilsCrossed } from 'lucide-react';

export const foodSection = {
  icon: Apple,
  title: "Bien manger",
  description: "Gérez vos courses, découvrez des recettes et planifiez vos repas",
  items: [
    {
      id: 'shopping-lists',
      icon: ListPlus,
      title: "Courses",
      count: 7
    },
    {
      id: 'recipes',
      icon: ChefHat,
      title: "Recettes",
      count: 12
    },
    {
      id: 'restaurants',
      icon: UtensilsCrossed,
      title: "Restauration",
      count: 15
    },
    {
      id: 'budget-chef',
      icon: ChefHat,
      title: "BudgetChef",
      count: 1
    }
  ]
};

export const otherStats = [
  {
    id: 'challenges',
    icon: Trophy,
    title: "Défis",
    count: 5
  },
  {
    id: 'quiz',
    icon: BookOpen,
    title: "Quiz",
    count: 8
  },
  {
    id: 'surveys',
    icon: ClipboardList,
    title: "Sondages",
    count: 3
  }
];