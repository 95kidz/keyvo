import React from 'react';
import { X } from 'lucide-react';

interface SaveListModalProps {
  isOpen: boolean;
  listName: string;
  onListNameChange: (name: string) => void;
  onSave: () => void;
  onClose: () => void;
}

const SaveListModal = ({
  isOpen,
  listName,
  onListNameChange,
  onSave,
  onClose
}: SaveListModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Sauvegarder la liste</h3>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        <input
          type="text"
          placeholder="Nom de la liste"
          value={listName}
          onChange={(e) => onListNameChange(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
        />
        <div className="flex space-x-4">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Annuler
          </button>
          <button
            onClick={onSave}
            className="flex-1 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700"
          >
            Sauvegarder
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaveListModal;