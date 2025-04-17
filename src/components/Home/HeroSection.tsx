
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const taglineWords = ["Automate", "Accelerate", "Elevate"];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center py-20 overflow-hidden bg-gradient-to-b from-customBg to-gray-100"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0">
        <div className="particles-container">
          {Array.from({ length: 15 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute h-px bg-gradient-to-r from-transparent via-secondary-slate/20 to-transparent"
              style={{
                top: `${Math.random() * 100}%`,
                left: 0,
                right: 0,
                height: `${Math.random() * 2 + 1}px`,
              }}
              animate={{
                scaleX: [0, 1, 1, 0],
                opacity: [0, 1, 1, 0],
                x: ["0%", "100%"]
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                delay: Math.random() * 5,
              }}
            />
          ))}
          {Array.from({ length: 15 }).map((_, index) => (
            <motion.div
              key={`v-${index}`}
              className="absolute w-px bg-gradient-to-b from-transparent via-secondary-slate/20 to-transparent"
              style={{
                left: `${Math.random() * 100}%`,
                top: 0,
                bottom: 0,
                width: `${Math.random() * 2 + 1}px`,
              }}
              animate={{
                scaleY: [0, 1, 1, 0],
                opacity: [0, 1, 1, 0],
                y: ["0%", "100%"]
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      <motion.div 
        className="container-custom relative z-10"
        style={{ opacity, y }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-4 text-4xl md:text-5xl font-bold text-primary-navy"
            >
              {taglineWords.map((word, index) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.2 + 0.5,
                    ease: "easeOut"
                  }}
                  className="relative inline-block"
                >
                  {word}
                  {index < taglineWords.length - 1 && (
                    <span className="mx-2 text-accent-coral">|</span>
                  )}
                </motion.span>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-navy"
            >
              Your Trusted Partner in <span className="text-accent-coral">AI-Powered</span> Automation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.4 }}
              className="text-lg text-secondary-slate max-w-xl"
            >
              Transform your operations with AI chatbots, voice agents, and automated workflows – built just for you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/book-appointment">
                <motion.button 
                  className="btn-accent flex items-center justify-center gap-2 group"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  animate={{ boxShadow: ['0 0 0 rgba(255, 92, 88, 0)', '0 0 20px rgba(255, 92, 88, 0.5)', '0 0 0 rgba(255, 92, 88, 0)'] }}
                  transition={{ 
                    boxShadow: { 
                      repeat: Infinity, 
                      duration: 2, 
                      ease: "easeInOut" 
                    }
                  }}
                >
                  Book a Consultation
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button 
                  className="btn-secondary"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Our Services
                </motion.button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 1.0,
              type: "spring",
              stiffness: 100
            }}
            className="relative flex justify-center"
          >
            {/* This would ideally be a Lottie animation in production - using a placeholder for now */}
            <div className="w-full h-96 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-r from-accent-coral/20 to-accent-cream/20 animate-pulse"></div>
              </div>
              
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-primary-navy to-secondary-slate rounded-xl shadow-xl flex items-center justify-center"
                animate={{ 
                  rotateZ: [0, 2, 0, -2, 0],
                  y: [0, -10, 0, -5, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="text-white text-center">
                  <div className="text-xl font-bold mb-2">AI Robotics</div>
                  <div className="flex justify-center space-x-2 mb-3">
                    {[1, 2, 3].map((i) => (
                      <motion.div 
                        key={i}
                        className="w-2 h-2 bg-accent-coral rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ 
                          duration: 1, 
                          repeat: Infinity, 
                          delay: i * 0.2,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                  <div className="h-24 w-full flex flex-col items-center justify-center">
                    {/* Robot arm simplified representation */}
                    <div className="w-6 h-24 bg-gradient-to-b from-accent-cream to-accent-coral rounded-t-full relative">
                      <motion.div 
                        className="absolute -right-12 top-4 w-12 h-2 bg-accent-cream rounded-r-full"
                        animate={{ rotateZ: [0, 30, 0, -30, 0] }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <motion.div 
                        className="absolute -left-12 top-8 w-12 h-2 bg-accent-cream rounded-l-full"
                        animate={{ rotateZ: [0, -20, 0, 20, 0] }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Flowchart nodes */}
              {[
                { top: '10%', left: '20%', delay: 0 },
                { top: '20%', left: '70%', delay: 1 },
                { top: '80%', left: '30%', delay: 0.5 },
                { top: '60%', left: '80%', delay: 1.5 },
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute w-16 h-8 bg-white rounded-md shadow-md flex items-center justify-center text-xs font-medium text-primary-navy"
                  style={{ top: pos.top, left: pos.left }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: pos.delay + 1.8, duration: 0.5 }}
                >
                  {['Input', 'Process', 'Output', 'API'][i]}
                </motion.div>
              ))}
              
              {/* Connection lines */}
              {[
                { from: { top: '14%', left: '28%' }, to: { top: '24%', left: '70%' } },
                { from: { top: '24%', left: '70%' }, to: { top: '50%', left: '50%' } },
                { from: { top: '50%', left: '50%' }, to: { top: '60%', left: '80%' } },
                { from: { top: '60%', left: '80%' }, to: { top: '80%', left: '30%' } },
              ].map((line, i) => (
                <motion.div
                  key={`line-${i}`}
                  className="absolute bg-gradient-to-r from-accent-coral to-accent-cream h-0.5"
                  style={{ 
                    top: line.from.top, 
                    left: line.from.left,
                    width: '0%',
                    transformOrigin: 'left center',
                    transform: `rotate(${
                      Math.atan2(
                        parseInt(line.to.top) - parseInt(line.from.top),
                        parseInt(line.to.left) - parseInt(line.from.left)
                      ) * (180 / Math.PI)
                    }deg)`
                  }}
                  initial={{ width: '0%' }}
                  animate={{ 
                    width: `${Math.hypot(
                      parseInt(line.to.top) - parseInt(line.from.top),
                      parseInt(line.to.left) - parseInt(line.from.left)
                    )}px` 
                  }}
                  transition={{ delay: i * 0.3 + 2, duration: 0.8 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
