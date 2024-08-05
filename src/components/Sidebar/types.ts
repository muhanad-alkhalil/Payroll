import { IconType } from 'react-icons';

export interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

export interface SidebarMenuProps {
  pathname: string;
}

export interface MenuGroupProps {
  title: string;
  children: React.ReactNode;
}

export interface MenuItemProps {
  to: string;
  label: string;
  active: boolean;
  icon: IconType;
}