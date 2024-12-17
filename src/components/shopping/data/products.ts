export interface Product {
  id: string;
  name: string;
  carbonScore: number;
  price: number;
  category: string;
  isOrganic?: boolean;
  isLocal?: boolean;
}

export const products: Product[] = [
  // Fruits & Légumes
  { id: '1', name: 'Carottes bio locales', carbonScore: 0.2, price: 2.50, category: 'Fruits & Légumes', isOrganic: true, isLocal: true },
  { id: '2', name: 'Pommes de terre bio', carbonScore: 0.3, price: 2.80, category: 'Fruits & Légumes', isOrganic: true },
  { id: '3', name: 'Tomates locales', carbonScore: 0.4, price: 3.20, category: 'Fruits & Légumes', isLocal: true },
  { id: '4', name: 'Courgettes bio', carbonScore: 0.2, price: 2.90, category: 'Fruits & Légumes', isOrganic: true },
  { id: '5', name: 'Pommes bio locales', carbonScore: 0.1, price: 3.50, category: 'Fruits & Légumes', isOrganic: true, isLocal: true },
  { id: '6', name: 'Bananes bio', carbonScore: 0.8, price: 2.99, category: 'Fruits & Légumes', isOrganic: true },
  { id: '7', name: 'Poireaux locaux', carbonScore: 0.2, price: 2.40, category: 'Fruits & Légumes', isLocal: true },
  { id: '8', name: 'Oignons bio', carbonScore: 0.2, price: 2.20, category: 'Fruits & Légumes', isOrganic: true },
  { id: '9', name: 'Salade locale', carbonScore: 0.1, price: 1.50, category: 'Fruits & Légumes', isLocal: true },
  { id: '10', name: 'Champignons bio', carbonScore: 0.3, price: 3.80, category: 'Fruits & Légumes', isOrganic: true },

  // Produits laitiers
  { id: '11', name: 'Lait bio local', carbonScore: 0.9, price: 1.50, category: 'Produits laitiers', isOrganic: true, isLocal: true },
  { id: '12', name: 'Yaourt nature bio', carbonScore: 0.6, price: 2.80, category: 'Produits laitiers', isOrganic: true },
  { id: '13', name: 'Fromage blanc local', carbonScore: 0.7, price: 2.20, category: 'Produits laitiers', isLocal: true },
  { id: '14', name: 'Beurre bio', carbonScore: 0.8, price: 3.50, category: 'Produits laitiers', isOrganic: true },
  { id: '15', name: 'Crème fraîche bio', carbonScore: 0.5, price: 2.30, category: 'Produits laitiers', isOrganic: true },

  // Viandes & Poissons
  { id: '16', name: 'Poulet fermier local', carbonScore: 2.5, price: 12.90, category: 'Viandes & Poissons', isLocal: true },
  { id: '17', name: 'Saumon bio', carbonScore: 3.2, price: 24.90, category: 'Viandes & Poissons', isOrganic: true },
  { id: '18', name: 'Œufs bio locaux', carbonScore: 0.4, price: 3.90, category: 'Viandes & Poissons', isOrganic: true, isLocal: true },
  { id: '19', name: 'Poisson blanc frais', carbonScore: 2.8, price: 18.90, category: 'Viandes & Poissons' },
  { id: '20', name: 'Sardines fraîches', carbonScore: 1.5, price: 8.90, category: 'Viandes & Poissons' },

  // Épicerie salée
  { id: '21', name: 'Pâtes complètes bio', carbonScore: 0.4, price: 2.20, category: 'Épicerie salée', isOrganic: true },
  { id: '22', name: 'Riz bio', carbonScore: 0.6, price: 3.50, category: 'Épicerie salée', isOrganic: true },
  { id: '23', name: 'Lentilles bio locales', carbonScore: 0.3, price: 2.80, category: 'Épicerie salée', isOrganic: true, isLocal: true },
  { id: '24', name: 'Quinoa bio', carbonScore: 0.7, price: 4.90, category: 'Épicerie salée', isOrganic: true },
  { id: '25', name: 'Pois chiches bio', carbonScore: 0.4, price: 2.50, category: 'Épicerie salée', isOrganic: true },

  // Épicerie sucrée
  { id: '26', name: 'Miel local', carbonScore: 0.3, price: 8.90, category: 'Épicerie sucrée', isLocal: true },
  { id: '27', name: 'Chocolat noir bio', carbonScore: 1.2, price: 2.90, category: 'Épicerie sucrée', isOrganic: true },
  { id: '28', name: 'Confiture bio locale', carbonScore: 0.4, price: 4.50, category: 'Épicerie sucrée', isOrganic: true, isLocal: true },
  { id: '29', name: 'Céréales bio', carbonScore: 0.5, price: 4.20, category: 'Épicerie sucrée', isOrganic: true },
  { id: '30', name: 'Fruits secs bio', carbonScore: 0.8, price: 5.90, category: 'Épicerie sucrée', isOrganic: true },

  // Boissons
  { id: '31', name: 'Jus de pomme local', carbonScore: 0.4, price: 3.50, category: 'Boissons', isLocal: true },
  { id: '32', name: 'Thé vert bio', carbonScore: 0.3, price: 4.90, category: 'Boissons', isOrganic: true },
  { id: '33', name: 'Café bio', carbonScore: 1.2, price: 5.90, category: 'Boissons', isOrganic: true },
  { id: '34', name: 'Eau de source locale', carbonScore: 0.1, price: 0.90, category: 'Boissons', isLocal: true },
  { id: '35', name: 'Bière artisanale locale', carbonScore: 0.6, price: 3.90, category: 'Boissons', isLocal: true },

  // Produits végétariens
  { id: '36', name: 'Tofu bio', carbonScore: 0.5, price: 3.90, category: 'Produits végétariens', isOrganic: true },
  { id: '37', name: 'Seitan bio', carbonScore: 0.4, price: 4.50, category: 'Produits végétariens', isOrganic: true },
  { id: '38', name: 'Tempeh bio', carbonScore: 0.4, price: 4.20, category: 'Produits végétariens', isOrganic: true },
  { id: '39', name: 'Falafels bio', carbonScore: 0.5, price: 4.90, category: 'Produits végétariens', isOrganic: true },
  { id: '40', name: 'Galettes végétales bio', carbonScore: 0.4, price: 3.90, category: 'Produits végétariens', isOrganic: true },

  // Produits d'entretien
  { id: '41', name: 'Lessive écologique', carbonScore: 0.8, price: 12.90, category: 'Produits d\'entretien' },
  { id: '42', name: 'Liquide vaisselle bio', carbonScore: 0.5, price: 3.90, category: 'Produits d\'entretien', isOrganic: true },
  { id: '43', name: 'Savon de Marseille', carbonScore: 0.3, price: 2.90, category: 'Produits d\'entretien' },
  { id: '44', name: 'Bicarbonate', carbonScore: 0.2, price: 1.90, category: 'Produits d\'entretien' },
  { id: '45', name: 'Vinaigre blanc bio', carbonScore: 0.2, price: 1.50, category: 'Produits d\'entretien', isOrganic: true },

  // Hygiène & Beauté
  { id: '46', name: 'Savon solide bio', carbonScore: 0.2, price: 5.90, category: 'Hygiène & Beauté', isOrganic: true },
  { id: '47', name: 'Shampoing solide bio', carbonScore: 0.3, price: 8.90, category: 'Hygiène & Beauté', isOrganic: true },
  { id: '48', name: 'Dentifrice solide bio', carbonScore: 0.2, price: 6.90, category: 'Hygiène & Beauté', isOrganic: true },
  { id: '49', name: 'Déodorant naturel bio', carbonScore: 0.3, price: 7.90, category: 'Hygiène & Beauté', isOrganic: true },
  { id: '50', name: 'Crème hydratante bio', carbonScore: 0.4, price: 12.90, category: 'Hygiène & Beauté', isOrganic: true }
];