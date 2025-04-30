
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

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

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    if (location.pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
        setActiveDropdown(null);
      }
    } else {
      // Navigate to homepage then scroll to section
      window.location.href = `/#${sectionId}`;
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: [
        { name: 'AI Chatbots', path: '/services/chatbots' },
        { name: 'Voice Agents', path: '/services/voice-agents' },
        { name: 'Workflow Automation', path: '/services/workflow-automation' },
        { name: 'Business Automation', path: '/services/business-automation' },
      ]
    },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

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
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.dropdown ? (
                <div 
                  className="flex items-center cursor-pointer text-primary-navy hover:text-accent-coral transition-all duration-300 py-1 px-3 rounded-full hover:bg-gray-100/70"
                  onClick={() => toggleDropdown(link.name)}
                >
                  <span>{link.name}</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </div>
              ) : (
                <Link 
                  to={link.path} 
                  className={`text-primary-navy hover:text-accent-coral transition-all duration-300 py-1 px-3 rounded-full hover:bg-gray-100/70 ${location.pathname === link.path ? 'text-accent-coral' : ''}`}
                >
                  {link.name}
                </Link>
              )}
              
              {/* Dropdown Menu */}
              {link.dropdown && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-56 rounded-xl shadow-lg bg-white/95 backdrop-blur-sm border border-gray-100 overflow-hidden"
                    >
                      <div className="py-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-4 py-2 text-sm text-primary-navy hover:bg-gray-100 hover:text-accent-coral transition-all duration-200"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          <Link to="/book-appointment">
            <button className="btn-accent hover:shadow-md hover:shadow-accent-coral/30 transition-all duration-300 rounded-full text-sm py-2">
              Book a Consultation
            </button>
          </Link>
        </div>

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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-sm mt-2 rounded-2xl shadow-lg border border-gray-100 mx-4"
          >
            <div className="container-custom py-4 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-gray-100 last:border-none pb-2 last:pb-0">
                  {link.dropdown ? (
                    <div>
                      <div 
                        className="flex justify-between items-center py-2 px-2"
                        onClick={() => toggleDropdown(link.name)}
                      >
                        <span className={`text-primary-navy font-medium ${activeDropdown === link.name ? 'text-accent-coral' : ''}`}>{link.name}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === link.name ? 'rotate-180 text-accent-coral' : ''}`} />
                      </div>
                      
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-6 space-y-2 mt-1 bg-gray-50/80 rounded-lg mx-2 py-2"
                          >
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.name}
                                to={item.path}
                                className="block py-1 text-sm text-primary-navy hover:text-accent-coral"
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
                      className={`block py-2 px-2 text-primary-navy hover:text-accent-coral transition-colors ${location.pathname === link.path ? 'text-accent-coral font-medium' : ''}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link to="/book-appointment" onClick={() => setIsOpen(false)}>
                <button className="btn-accent w-full mt-2 rounded-full text-sm py-2 hover:shadow-md hover:shadow-accent-coral/30 transition-all duration-300">
                  Book a Consultation
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
