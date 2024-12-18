import React from 'react';
import { X, User, Crown, Settings, LogOut, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import SubscriptionSection from './SubscriptionSection';

interface ProfileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileMenu = ({ isOpen, onClose }: ProfileMenuProps) => {
  const { darkMode, toggleDarkMode } = useTheme();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white dark:bg-gray-800 shadow-lg">
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <h2 className="text-lg font-semibold">Profil</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 space-y-6">
          {/* User info */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h3 className="font-semibold">Jean Durand</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">jean.durand@email.com</p>
            </div>
          </div>

          {/* Subscription */}
          <SubscriptionSection 
            subscription={{ type: 'Premium', expiresAt: '2024-12-31' }}
            onUpgrade={() => {}}
          />

          {/* Settings */}
          <div className="space-y-2">
            <button className="w-full flex items-center space-x-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <Settings className="w-5 h-5" />
              <span>Paramètres</span>
            </button>
            
            <button 
              onClick={toggleDarkMode}
              className="w-full flex items-center space-x-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
              {darkMode ? (
                <>
                  <Sun className="w-5 h-5" />
                  <span>Mode clair</span>
                </>
              ) : (
                <>
                  <Moon className="w-5 h-5" />
                  <span>Mode sombre</span>
                </>
              )}
            </button>

            <button className="w-full flex items-center space-x-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-red-600">
              <LogOut className="w-5 h-5" />
              <span>Déconnexion</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;