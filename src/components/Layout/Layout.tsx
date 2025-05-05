
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Toaster } from "@/components/ui/toaster";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // Respect user's motion preferences
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col min-h-screen" role="document">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-primary-navy focus:text-white focus:z-50"
      >
        Skip to main content
      </a>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main 
          id="main-content"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1 }}
          exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
          className="flex-grow pt-32" 
          tabIndex={-1}
        >
          <div className="container mx-auto max-w-7xl px-4 md:px-8">
            {children}
          </div>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;
