export interface RankingUser {
  id: string;
  name: string;
  avatar?: string;
  points: number;
  position: number;
  isCurrentUser?: boolean;
}

export interface Challenge {
  title: string;
  description: string;
  image: string;
  brand: {
    name: string;
    logo: string;
  };
}