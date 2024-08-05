import React from 'react';
import { BsPersonLinesFill } from 'react-icons/bs';
import { FaMoneyCheck } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import MenuGroup from './MenuGroup';
import MenuItem from './MenuItem';

interface SidebarMenuProps {
  pathname: string;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ pathname }) => (
  <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
    <MenuGroup title="MENU">
      <MenuItem to="/employees" label="Employees" active={pathname.includes('Employees')} icon={BsPersonLinesFill} />
      <MenuItem to="/salaries" label="Salaries" active={pathname.includes('Salaries')} icon={FaMoneyCheck} />
    </MenuGroup>
    <MenuGroup title="Account">
      <MenuItem to="/logout" label="Logout" active={pathname.includes('logout')} icon={HiHome} />
    </MenuGroup>
  </nav>
);

export default SidebarMenu;
