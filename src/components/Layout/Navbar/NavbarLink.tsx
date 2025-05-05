
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
      className={`text-gray-300 hover:text-white transition-all duration-300 py-1 px-3 rounded-full hover:bg-white/10 ${isActive ? 'text-white font-medium' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavbarLink;
