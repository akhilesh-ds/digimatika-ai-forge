
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { NavLink } from './types';

interface MobileNavigationProps {
  isOpen: boolean;
  navLinks: NavLink[];
  activeDropdown: string | null;
  toggleDropdown: (name: string) => void;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileNavigation = ({ 
  isOpen, 
  navLinks, 
  activeDropdown, 
  toggleDropdown, 
  setIsOpen 
}: MobileNavigationProps) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#1A1F2C]/95 backdrop-blur-sm mt-2 rounded-xl shadow-lg border border-gray-800 mx-4"
        >
          <div className="container-custom py-4 space-y-2">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-gray-800/50 last:border-none pb-2 last:pb-0">
                {link.dropdown ? (
                  <div>
                    <div 
                      className="flex justify-between items-center py-2 px-2"
                      onClick={() => toggleDropdown(link.name)}
                    >
                      <span className={`text-gray-300 font-medium ${activeDropdown === link.name ? 'text-white' : ''}`}>
                        {link.name}
                      </span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === link.name ? 'rotate-180 text-white' : 'text-gray-300'}`} />
                    </div>
                    
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-6 space-y-2 mt-1 bg-white/5 rounded-lg mx-2 py-2"
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="block py-1 text-sm text-gray-300 hover:text-white"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link 
                    to={link.path} 
                    className={`block py-2 px-2 text-gray-300 hover:text-white transition-colors ${location.pathname === link.path ? 'text-white font-medium' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link to="/book-appointment" onClick={() => setIsOpen(false)}>
              <button className="bg-accent-coral hover:bg-accent-coral/90 w-full mt-2 rounded-full text-sm py-2 text-white hover:shadow-md hover:shadow-accent-coral/30 transition-all duration-300">
                Book a Consultation
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavigation;
