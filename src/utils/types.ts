// Navbar Component Types
export interface NavbarProps {
  // Add any props if needed in the future
}

export interface ButtonProps {
  id: string;
  label: string;
  icon: string;
  action: string;
  isHighlighted?: boolean;
  onClick?: (action: string) => void;
  className?: string;
}

export interface LinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export interface DropdownItem {
  id: string;
  label: string;
  href: string;
}

export interface DropdownSection {
  id: string;
  title: string;
  items: DropdownItem[];
}

// Event Handler Types
export type ButtonClickHandler = (action: string) => void;
export type LinkClickHandler = (href: string) => void;

// Navigation Data Types
export interface NavigationData {
  services: DropdownSection[];
  insights: DropdownItem[];
  industries: DropdownItem[];
  about: DropdownItem[];
}