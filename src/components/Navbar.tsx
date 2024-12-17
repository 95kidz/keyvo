import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Leaf, 
  BarChart2, 
  Gift, 
  Trophy,
  UserCircle, 
  Bell, 
  LogOut,
  X,
  Globe,
  Moon,
  Sun
} from 'lucide-react';
import { NavLink, MobileNavLink } from './navigation/NavLink';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [showSettings, setShowSettings] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  const userProfile = {
    name: 'Jean Durand',
    email: 'jean.durand@example.com',
    level: 12,
    points: 500,
    notifications: [
      { id: '1', text: 'Nouveau défi disponible !', time: 'Il y a 1h' },
      { id: '2', text: 'Vous avez gagné 50 points !', time: 'Il y a 2h' }
    ]
  };

  return (
    <>
      {/* Top Navigation */}
      <nav className="bg-emerald-600 text-white shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="w-8 h-8" />
              <span className="text-xl font-bold">MyDeals</span>
            </Link>
            
            {/* Desktop Navigation - Hidden on Mobile */}
            <div className="hidden md:flex items-center space-x-4">
              <NavLink to="/actions" icon={<Leaf />} text="Agir" />
              <NavLink to="/impact" icon={<BarChart2 />} text="Impact" />
              <NavLink to="/rankings" icon={<Trophy />} text="Classement" />
              <NavLink to="/rewards" icon={<Gift />} text="Récompenses" />
            </div>
            
            {/* Desktop Points Display - Hidden on Mobile */}
            <div className="hidden md:flex items-center space-x-4">
              <Link 
                to="/rewards" 
                className="flex items-center space-x-2 bg-emerald-700/50 backdrop-blur-sm hover:bg-emerald-700 transition-colors rounded-full px-4 py-1.5"
              >
                <span className="font-medium">{userProfile.points} points</span>
              </Link>

              {/* User Menu Button */}
              <button
                onClick={() => setShowSettings(true)}
                className="p-2 hover:bg-emerald-700 rounded-full transition-colors"
              >
                <UserCircle className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile User Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setShowSettings(true)}
                className="p-2 hover:bg-emerald-700 rounded-full transition-colors"
              >
                <UserCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end sm:items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-t-xl sm:rounded-xl w-full sm:w-96 max-w-lg mx-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                    <UserCircle className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold dark:text-white">{userProfile.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{userProfile.email}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowSettings(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    <span className="dark:text-white">Mode sombre</span>
                  </div>
                  <button 
                    onClick={toggleDarkMode}
                    className={`w-12 h-6 rounded-full transition-colors relative ${
                      darkMode ? 'bg-emerald-500' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                      darkMode ? 'translate-x-6' : 'translate-x-0.5'
                    }`} />
                  </button>
                </div>

                <button className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                  <div className="flex items-center space-x-3">
                    <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    <span className="dark:text-white">Notifications</span>
                  </div>
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">2</span>
                </button>

                <button className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    <span className="dark:text-white">Langue</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">Français</span>
                </button>

                <button className="w-full flex items-center justify-between p-4 bg-red-50 dark:bg-red-900/50 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/70">
                  <div className="flex items-center space-x-3">
                    <LogOut className="w-5 h-5 text-red-600 dark:text-red-400" />
                    <span className="text-red-600 dark:text-red-400">Déconnexion</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation for Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg border-t dark:border-gray-700 z-50">
        <div className="grid grid-cols-4 h-16">
          <MobileNavLink to="/actions" icon={<Leaf />} text="Agir" />
          <MobileNavLink to="/impact" icon={<BarChart2 />} text="Impact" />
          <MobileNavLink to="/rankings" icon={<Trophy />} text="Classement" />
          <MobileNavLink to="/rewards" icon={<Gift />} text="Récompenses" />
        </div>
      </nav>

      {/* Spacers for fixed navbars */}
      <div className="h-16" /> {/* Top spacer */}
      <div className="md:hidden h-16" /> {/* Bottom mobile nav spacer */}
    </>
  );
};

export default Navbar;