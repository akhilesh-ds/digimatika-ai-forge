
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface DropdownItem {
  name: string;
  path: string;
}

interface NavbarDropdownProps {
  name: string;
  items: DropdownItem[];
  isActive: boolean;
  onToggle: (name: string) => void;
}

const NavbarDropdown = ({ name, items, isActive, onToggle }: NavbarDropdownProps) => {
  return (
    <div className="relative group">
      <div 
        className={`flex items-center cursor-pointer text-gray-300 hover:text-white 
                    transition-all duration-300 py-1 px-3 rounded-full hover:bg-white/10 
                    ${isActive ? 'text-white font-medium' : ''}`}
        onClick={() => onToggle(name)}
      >
        <span>{name}</span>
        <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isActive ? 'rotate-180 text-white' : ''}`} />
      </div>
      
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 w-56 rounded-xl shadow-lg bg-[#1A1F2C]/95 backdrop-blur-sm border border-gray-800 overflow-hidden"
          >
            <div className="py-1">
              {items.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-200"
                  onClick={() => onToggle(name)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavbarDropdown;
