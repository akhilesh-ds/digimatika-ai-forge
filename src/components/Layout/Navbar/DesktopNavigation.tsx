
import { Link, useLocation } from 'react-router-dom';
import NavbarLink from './NavbarLink';
import NavbarDropdown from './NavbarDropdown';
import { NavLink } from './types';

interface DesktopNavigationProps {
  navLinks: NavLink[];
  activeDropdown: string | null;
  toggleDropdown: (name: string) => void;
}

const DesktopNavigation = ({ 
  navLinks, 
  activeDropdown, 
  toggleDropdown 
}: DesktopNavigationProps) => {
  const location = useLocation();
  
  return (
    <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
      {navLinks.map((link) => (
        <div key={link.name}>
          {link.dropdown ? (
            <NavbarDropdown 
              name={link.name} 
              items={link.dropdown} 
              isActive={activeDropdown === link.name}
              onToggle={toggleDropdown}
            />
          ) : (
            <NavbarLink 
              to={link.path} 
              isActive={location.pathname === link.path}
            >
              {link.name}
            </NavbarLink>
          )}
        </div>
      ))}
      <Link to="/book-appointment">
        <button className="btn-accent hover:shadow-md hover:shadow-accent-coral/30 transition-all duration-300 rounded-full text-sm py-2">
          Book a Consultation
        </button>
      </Link>
    </div>
  );
};

export default DesktopNavigation;
