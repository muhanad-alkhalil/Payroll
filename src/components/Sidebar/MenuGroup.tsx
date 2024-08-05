import React from 'react';
import { MenuGroupProps } from './types';

const MenuGroup: React.FC<MenuGroupProps> = ({ title, children }) => (
  <div>
    <h3 className="mb-4 ml-4 text-sm font-semibold text-slate-500">{title}</h3>
    <ul className="mb-6 flex flex-col gap-1.5">{children}</ul>
  </div>
);

export default MenuGroup;
