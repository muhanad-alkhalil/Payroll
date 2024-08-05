import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuItemProps } from './types';



const MenuItem: React.FC<MenuItemProps> = ({ to, label, active, icon: Icon }) => (
  <li>
    <NavLink to={to} className={`group relative flex items-center gap-2.5 rounded-lg py-2 px-4 font-medium text-slate-700 dark:text-slate-300 duration-300 ease-in-out hover:bg-gray dark:hover:bg-meta-4 ${active ? 'bg-gray dark:bg-meta-4' : ''}`}>
      <Icon className="icon-size" /> {label}
    </NavLink>
  </li>
);

export default MenuItem;
