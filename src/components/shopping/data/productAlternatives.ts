import { Product } from './products';

export interface ProductAlternative extends Product {
  ecoScore: number;
  points: number;
  benefits: string[];
  comparison: {
    co2Reduction: number;
    waterSaving?: number;
    plasticReduction?: number;
  };
}

export const getAlternatives = (product: Product): ProductAlternative[] => {
  const alternatives: Record<string, ProductAlternative[]> = {
    // Fruits & Légumes
    'Tomates locales': [
      {
        id: 'alt-tomates-1',
        name: 'Tomates cerises permaculture',
        carbonScore: 0.2,
        price: 3.50,
        category: 'Fruits & Légumes',
        isOrganic: true,
        isLocal: true,
        ecoScore: 95,
        points: 20,
        benefits: [
          'Culture en permaculture',
          'Zéro pesticide',
          'Circuit ultra-court'
        ],
        comparison: {
          co2Reduction: 50,
          waterSaving: 60
        }
      },
      {
        id: 'alt-tomates-2',
        name: 'Tomates AMAP locale',
        carbonScore: 0.3,
        price: 2.90,
        category: 'Fruits & Légumes',
        isLocal: true,
        ecoScore: 90,
        points: 15,
        benefits: [
          'Soutien aux agriculteurs locaux',
          'Récolte de saison',
          'Transport minimal'
        ],
        comparison: {
          co2Reduction: 40,
          waterSaving: 45
        }
      }
    ],

    // Produits laitiers
    'Yaourt nature bio': [
      {
        id: 'alt-yaourt-1',
        name: 'Yaourt végétal local',
        carbonScore: 0.3,
        price: 3.20,
        category: 'Produits laitiers',
        isOrganic: true,
        isLocal: true,
        ecoScore: 98,
        points: 25,
        benefits: [
          'Alternative végétale',
          'Emballage consigné',
          'Production locale'
        ],
        comparison: {
          co2Reduction: 75,
          waterSaving: 85,
          plasticReduction: 100
        }
      },
      {
        id: 'alt-yaourt-2',
        name: 'Yaourt brebis bio local',
        carbonScore: 0.4,
        price: 3.50,
        category: 'Produits laitiers',
        isOrganic: true,
        isLocal: true,
        ecoScore: 92,
        points: 20,
        benefits: [
          'Élevage extensif',
          'Pâturage naturel',
          'Bien-être animal'
        ],
        comparison: {
          co2Reduction: 45,
          waterSaving: 40
        }
      }
    ],

    // Viandes & Poissons
    'Poulet fermier local': [
      {
        id: 'alt-poulet-1',
        name: 'Protéines végétales bio',
        carbonScore: 0.5,
        price: 8.90,
        category: 'Produits végétariens',
        isOrganic: true,
        isLocal: true,
        ecoScore: 97,
        points: 30,
        benefits: [
          'Alternative végétale complète',
          'Impact carbone minimal',
          'Sans souffrance animale'
        ],
        comparison: {
          co2Reduction: 80,
          waterSaving: 90
        }
      },
      {
        id: 'alt-poulet-2',
        name: 'Légumineuses bio locales',
        carbonScore: 0.3,
        price: 6.90,
        category: 'Produits végétariens',
        isOrganic: true,
        isLocal: true,
        ecoScore: 95,
        points: 25,
        benefits: [
          'Riche en protéines',
          'Culture peu gourmande en eau',
          'Prix accessible'
        ],
        comparison: {
          co2Reduction: 85,
          waterSaving: 95
        }
      }
    ],

    // Épicerie
    'Pâtes complètes bio': [
      {
        id: 'alt-pates-1',
        name: 'Pâtes aux légumineuses locales',
        carbonScore: 0.2,
        price: 3.50,
        category: 'Épicerie salée',
        isOrganic: true,
        isLocal: true,
        ecoScore: 94,
        points: 20,
        benefits: [
          'Protéines végétales',
          'Blé ancien local',
          'Emballage recyclable'
        ],
        comparison: {
          co2Reduction: 50,
          waterSaving: 40,
          plasticReduction: 80
        }
      }
    ],

    // Boissons
    'Jus de pomme local': [
      {
        id: 'alt-jus-1',
        name: 'Jus de pomme en vrac',
        carbonScore: 0.2,
        price: 2.90,
        category: 'Boissons',
        isOrganic: true,
        isLocal: true,
        ecoScore: 96,
        points: 20,
        benefits: [
          'Zéro déchet',
          'Variétés anciennes',
          'Circuit ultra-court'
        ],
        comparison: {
          co2Reduction: 60,
          plasticReduction: 100
        }
      }
    ]
  };

  return alternatives[product.name] || [];
};