import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Leaf, BarChart2, Gift, User, Trophy } from 'lucide-react';
import { NavLink, MobileNavLink } from './navigation/NavLink';
import ProfileMenu from './profile/ProfileMenu';

const Navbar = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/actions';

  return (
    <>
      {/* Top bar - fixed for both mobile and desktop */}
      <nav className="bg-emerald-600 text-white shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center space-x-8">
              <NavLink to="/" icon={<Leaf className="w-5 h-5" />} text="Keyvo" />
              
              {/* Desktop navigation - hidden on mobile */}
              <div className="hidden md:flex items-center space-x-4">
                <NavLink to="/actions" icon={<Leaf className="w-5 h-5" />} text="Agir" />
                <NavLink to="/impact" icon={<BarChart2 className="w-5 h-5" />} text="Impact" />
                <NavLink to="/rankings" icon={<Trophy className="w-5 h-5" />} text="Classement" />
                <NavLink to="/rewards" icon={<Gift className="w-5 h-5" />} text="Récompenses" />
              </div>
            </div>
            
            {/* Profile button */}
            <button 
              onClick={() => setShowProfileMenu(true)}
              className="p-2 hover:bg-emerald-700 rounded-full transition-colors"
            >
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Points display on mobile */}
      {isHomePage && (
        <div className="md:hidden fixed top-14 left-0 right-0 bg-emerald-500 text-white p-3 text-center z-40">
          <div className="font-medium">500 Eco Coins</div>
          <div className="text-sm text-emerald-100">+25 points cette semaine</div>
        </div>
      )}

      {/* Mobile bottom navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg border-t dark:border-gray-700 z-50">
        <div className="grid grid-cols-4 h-16">
          <MobileNavLink to="/actions" icon={<Leaf className="w-5 h-5" />} text="Agir" />
          <MobileNavLink to="/impact" icon={<BarChart2 className="w-5 h-5" />} text="Impact" />
          <MobileNavLink to="/rankings" icon={<Trophy className="w-5 h-5" />} text="Classement" />
          <MobileNavLink to="/rewards" icon={<Gift className="w-5 h-5" />} text="Récompenses" />
        </div>
      </nav>

      {/* Profile Menu */}
      <ProfileMenu 
        isOpen={showProfileMenu} 
        onClose={() => setShowProfileMenu(false)} 
      />

      {/* Spacers for fixed navbars */}
      <div className="h-14" /> {/* Top spacer */}
      {isHomePage && <div className="md:hidden h-16" />} {/* Mobile points display spacer */}
      <div className="md:hidden h-16" /> {/* Bottom mobile nav spacer */}
    </>
  );
};

export default Navbar;