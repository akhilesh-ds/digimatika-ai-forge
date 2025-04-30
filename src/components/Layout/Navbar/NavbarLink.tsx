
import { Link } from 'react-router-dom';

interface NavbarLinkProps {
  to: string;
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const NavbarLink = ({ 
  to, 
  isActive = false, 
  className = '', 
  onClick, 
  children 
}: NavbarLinkProps) => {
  return (
    <Link 
      to={to} 
      className={`text-primary-navy hover:text-accent-coral transition-all duration-300 py-1 px-3 rounded-full hover:bg-gray-100/70 ${isActive ? 'text-accent-coral' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavbarLink;
