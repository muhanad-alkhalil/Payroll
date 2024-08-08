import React from 'react';
import { BsPersonLinesFill } from 'react-icons/bs';
import { FaMoneyCheck } from 'react-icons/fa';
import MenuGroup from './MenuGroup';
import MenuItem from './MenuItem';
import { IoIosLogOut } from 'react-icons/io';

interface SidebarMenuProps {
  pathname: string;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ pathname }) => (
  <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
    <MenuGroup title="MENU">
      <MenuItem to="/employees" label="Employees" active={pathname.includes('employees')} icon={BsPersonLinesFill} />
      <MenuItem to="/salaries" label="Salaries" active={pathname.includes('salaries')} icon={FaMoneyCheck} />
    </MenuGroup>
    <MenuGroup title="ACCOUNT">
      <MenuItem to="/logout" label="Logout" active={pathname.includes('logout')} icon={IoIosLogOut} />
    </MenuGroup>
  </nav>
);

export default SidebarMenu;
