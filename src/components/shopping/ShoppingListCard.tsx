import React, { useState } from 'react';
import { Calendar, Leaf, Trash2 } from 'lucide-react';
import { ShoppingList } from './types';
import DeleteConfirmModal from '../common/DeleteConfirmModal';

interface ShoppingListCardProps {
  list: ShoppingList;
  onSelect: () => void;
  onDelete: () => void;
}

const ShoppingListCard = ({ list, onSelect, onDelete }: ShoppingListCardProps) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <div className="flex justify-between items-start mb-4">
          <button
            onClick={onSelect}
            className="flex-1 text-left"
          >
            <h3 className="text-lg font-semibold text-gray-900">{list.name}</h3>
            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(list.date).toLocaleDateString('fr-FR')}
              </div>
              <div className="flex items-center">
                <Leaf className="w-4 h-4 mr-1" />
                {list.carbonScore} kg CO₂
              </div>
            </div>
            <div className="text-sm text-gray-600 mt-2">
              <p>{list.store} • {list.items.length} articles</p>
            </div>
          </button>
          <div className="ml-4">
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="p-2 text-gray-400 hover:text-red-500 transition-colors rounded-full hover:bg-red-50"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-emerald-600 font-medium">{list.total.toFixed(2)}€</span>
        </div>
      </div>

      <DeleteConfirmModal
        isOpen={showDeleteConfirm}
        onClose={() => setShowDeleteConfirm(false)}
        onConfirm={onDelete}
        title="Supprimer la liste"
        message="Êtes-vous sûr de vouloir supprimer cette liste de courses ? Cette action est irréversible."
      />
    </>
  );
};

export default ShoppingListCard;