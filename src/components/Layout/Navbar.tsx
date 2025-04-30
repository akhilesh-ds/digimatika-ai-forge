
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, X } from 'lucide-react';

import DesktopNavigation from './Navbar/DesktopNavigation';
import MobileNavigation from './Navbar/MobileNavigation';
import { navLinks } from './Navbar/navbar-data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <nav 
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl z-50 transition-all duration-300 
                  ${scrolled 
                    ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' 
                    : 'bg-white/80 backdrop-blur-sm py-3'} 
                  rounded-full border border-gray-100`}
    >
      <div className="container-custom flex justify-between items-center px-6">
        <Link to="/" className="flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-primary-navy"
          >
            <img 
              src="/lovable-uploads/38d1a52b-412b-4aad-b5c7-3c5c516dfacf.png" 
              alt="Digimatika Logo" 
              className="h-10 w-auto"
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <DesktopNavigation 
          navLinks={navLinks}
          activeDropdown={activeDropdown}
          toggleDropdown={toggleDropdown}
        />

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary-navy p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation 
        isOpen={isOpen}
        navLinks={navLinks}
        activeDropdown={activeDropdown}
        toggleDropdown={toggleDropdown}
        setIsOpen={setIsOpen}
      />
    </nav>
  );
};

export default Navbar;
