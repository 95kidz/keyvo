export interface Store {
  id: string;
  name: string;
  address: string;
  carbonScore: number;
  distance: string;
  type: 'bio' | 'supermarket' | 'local';
  openingHours: string;
  logo?: string;
}

export interface ShoppingListItem {
  name: string;
  quantity: number;
}

export interface ShoppingList {
  id: string;
  name: string;
  date: string;
  carbonScore: number;
  store: string;
  total: number;
  items: ShoppingListItem[];
}

export interface Product {
  id: string;
  name: string;
  carbonScore: number;
  price: number;
  quantity?: number;
}