import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  text: string;
}

export const NavLink = ({ to, icon, text }: NavLinkProps) => (
  <RouterNavLink
    to={to}
    className={({ isActive }) => `
      flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium
      ${isActive 
        ? 'bg-emerald-700 text-white' 
        : 'text-emerald-100 hover:bg-emerald-700 hover:text-white'
      }
    `}
  >
    {icon}
    <span>{text}</span>
  </RouterNavLink>
);

export const MobileNavLink = ({ to, icon, text }: NavLinkProps) => (
  <RouterNavLink
    to={to}
    className={({ isActive }) => `
      flex flex-col items-center justify-center text-xs font-medium
      ${isActive
        ? 'text-emerald-600'
        : 'text-gray-500 hover:text-emerald-600'
      }
    `}
  >
    <div className="mb-1">{icon}</div>
    <span>{text}</span>
  </RouterNavLink>
);