
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
    <header className="fixed w-full z-50 px-4 md:px-8 top-6">
      <nav 
        className={`mx-auto max-w-7xl rounded-2xl border border-gray-800 transition-all duration-300 
                  ${scrolled 
                    ? 'bg-[#1A1F2C]/95 backdrop-blur-md shadow-lg py-2' 
                    : 'bg-[#1A1F2C]/90 backdrop-blur-sm py-3'}`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-white"
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
              className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
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
    </header>
  );
};

export default Navbar;
