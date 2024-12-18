import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import ShoppingListDetails from './ShoppingListDetails';
import CreateList from './CreateList';
import ShoppingListCard from './ShoppingListCard';
import SearchBar from '../common/SearchBar';
import EmptyState from '../common/EmptyState';
import { ShoppingList } from './types';

const ShoppingLists = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedList, setSelectedList] = useState<ShoppingList | null>(null);
  const [showCreateList, setShowCreateList] = useState(false);
  const [lists, setLists] = useState<ShoppingList[]>([
    {
      id: '1',
      name: 'Courses hebdomadaires bio',
      date: '2024-03-15',
      carbonScore: 3.2,
      store: 'Carrefour Bio',
      total: 85.50,
      items: [
        { name: 'Légumes bio de saison', quantity: 1 },
        { name: 'Fruits locaux', quantity: 2 },
        { name: 'Pain complet bio', quantity: 1 },
        { name: 'Yaourts bio locaux', quantity: 6 },
        { name: 'Œufs bio', quantity: 12 }
      ]
    },
    // ... autres listes
  ]);

  if (showCreateList) {
    return <CreateList onBack={() => setShowCreateList(false)} />;
  }

  if (selectedList) {
    return <ShoppingListDetails list={selectedList} onBack={() => setSelectedList(null)} />;
  }

  const filteredLists = lists.filter(list =>
    list.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteList = (listId: string) => {
    setLists(lists.filter(list => list.id !== listId));
  };

  return (
    <div>
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <h2 className="text-2xl font-bold">Mes listes de courses</h2>
          <button
            onClick={() => setShowCreateList(true)}
            className="w-full sm:w-auto bg-emerald-600 text-white px-4 py-3 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>Nouvelle liste</span>
          </button>
        </div>
        
        <SearchBar
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Rechercher une liste..."
        />
      </div>

      <div className="space-y-4">
        {filteredLists.map((list) => (
          <ShoppingListCard
            key={list.id}
            list={list}
            onSelect={() => setSelectedList(list)}
            onDelete={() => handleDeleteList(list.id)}
          />
        ))}

        {filteredLists.length === 0 && (
          <EmptyState
            message="Aucune liste de courses trouvée"
            icon={Search}
          />
        )}
      </div>
    </div>
  );
};

export default ShoppingLists;