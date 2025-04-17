
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <footer className="bg-primary-navy text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white mb-4">DIGIMATIKA</h3>
            <p className="text-gray-300">
              Your trusted partner in AI-powered chatbots and seamless automation solutions.
            </p>
            <div className="flex space-x-4 pt-4">
              <motion.a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="text-white hover:text-accent-coral transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="text-white hover:text-accent-coral transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="text-white hover:text-accent-coral transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="text-white hover:text-accent-coral transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent-coral transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent-coral transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-accent-coral transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-accent-coral transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent-coral transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h4 className="text-xl font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/chatbots" className="text-gray-300 hover:text-accent-coral transition-colors">
                  AI Chatbots
                </Link>
              </li>
              <li>
                <Link to="/services/voice-agents" className="text-gray-300 hover:text-accent-coral transition-colors">
                  AI Voice Agents
                </Link>
              </li>
              <li>
                <Link to="/services/workflow-automation" className="text-gray-300 hover:text-accent-coral transition-colors">
                  Workflow Automation
                </Link>
              </li>
              <li>
                <Link to="/services/business-automation" className="text-gray-300 hover:text-accent-coral transition-colors">
                  Business Automation
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-accent-coral mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">123 Innovation Way, Tech District, CA 90210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-accent-coral flex-shrink-0" size={18} />
                <a href="tel:+12345678900" className="text-gray-300 hover:text-accent-coral transition-colors">
                  +1 (234) 567-8900
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-accent-coral flex-shrink-0" size={18} />
                <a href="mailto:info@digimatika.com" className="text-gray-300 hover:text-accent-coral transition-colors">
                  info@digimatika.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Digimatika. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-accent-coral text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="text-gray-400 hover:text-accent-coral text-sm transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <div className="flex justify-center mt-8">
        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="bg-accent-coral text-white p-3 rounded-full shadow-lg hover:bg-accent-coral/90 transition-colors"
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
