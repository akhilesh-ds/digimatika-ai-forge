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

  // Animation configuration for the network nodes
  const networkNodes = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 5 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center py-20 overflow-hidden bg-gradient-to-b from-primary-navy to-secondary-slate"
    >
      {/* Advanced Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-navy/90 to-secondary-slate/90"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid-animation w-full h-full" 
               style={{ 
                 backgroundImage: 'linear-gradient(#1A1F2C 1px, transparent 1px), linear-gradient(90deg, #1A1F2C 1px, transparent 1px)',
                 backgroundSize: '50px 50px'
               }} 
          />
        </div>

        {/* Glowing network nodes */}
        <div className="absolute inset-0">
          {networkNodes.map((node) => (
            <motion.div
              key={node.id}
              className="absolute rounded-full bg-accent-coral/70"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                width: `${node.size}px`,
                height: `${node.size}px`,
                filter: `blur(${node.size/2}px)`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3 + node.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Connection lines animation */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, index) => (
            <motion.div
              key={`line-${index}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-accent-coral/30 to-transparent"
              style={{
                top: `${Math.random() * 100}%`,
                left: 0,
                right: 0,
              }}
              animate={{
                scaleX: [0, 1, 1, 0],
                opacity: [0, 0.5, 0.5, 0],
                x: ["0%", "100%"]
              }}
              transition={{
                duration: Math.random() * 8 + 8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}
          {Array.from({ length: 8 }).map((_, index) => (
            <motion.div
              key={`v-line-${index}`}
              className="absolute w-px bg-gradient-to-b from-transparent via-accent-coral/30 to-transparent"
              style={{
                left: `${Math.random() * 100}%`,
                top: 0,
                bottom: 0,
              }}
              animate={{
                scaleY: [0, 1, 1, 0],
                opacity: [0, 0.5, 0.5, 0],
                y: ["0%", "100%"]
              }}
              transition={{
                duration: Math.random() * 8 + 8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        {/* Floating data particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, index) => (
            <motion.div
              key={`particle-${index}`}
              className="absolute bg-white/20 rounded-full"
              style={{
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        {/* Digital circuit pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg 
            width="100%" 
            height="100%" 
            xmlns="http://www.w3.org/2000/svg"
            className="circuit-pattern"
          >
            <pattern 
              id="circuit" 
              x="0" 
              y="0" 
              width="100" 
              height="100" 
              patternUnits="userSpaceOnUse"
            >
              <path 
                d="M0 50 H40 M60 50 H100 M50 0 V40 M50 60 V100" 
                stroke="white" 
                strokeWidth="1"
                fill="none"
              />
              <circle cx="50" cy="50" r="4" fill="white" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit)" />
          </svg>
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
              className="flex flex-wrap gap-4 text-4xl md:text-5xl font-bold text-white"
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
            >
              Your Trusted Partner in <span className="text-accent-coral">AI-Powered</span> Automation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.4 }}
              className="text-lg text-gray-300 max-w-xl"
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
            {/* Enhanced AI visualization */}
            <div className="w-full h-96 relative">
              {/* Main circular glow */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-64 h-64 rounded-full bg-gradient-to-r from-accent-coral/30 to-accent-cream/20 blur-md"></div>
              </motion.div>
              
              {/* Central AI component with enhanced effects */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-primary-navy to-secondary-slate rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-sm border border-accent-coral/20 flex items-center justify-center overflow-hidden"
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
                {/* AI core visualization with pulsing effect */}
                <div className="text-white text-center relative z-10">
                  <div className="text-xl font-bold mb-2">AI Core</div>
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
                    {/* Enhanced robot arm with glowing effect */}
                    <div className="w-6 h-24 bg-gradient-to-b from-accent-cream to-accent-coral rounded-t-full relative shadow-[0_0_10px_rgba(255,92,88,0.7)]">
                      <motion.div 
                        className="absolute -right-12 top-4 w-12 h-2 bg-accent-cream rounded-r-full shadow-[0_0_5px_rgba(244,213,141,0.7)]"
                        animate={{ rotateZ: [0, 30, 0, -30, 0] }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <motion.div 
                        className="absolute -left-12 top-8 w-12 h-2 bg-accent-cream rounded-l-full shadow-[0_0_5px_rgba(244,213,141,0.7)]"
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

                {/* Dynamic background pattern inside the AI box */}
                <motion.div 
                  className="absolute inset-0 opacity-20 z-0"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(255,92,88,0.3) 1px, transparent 1px)",
                    backgroundSize: "20px 20px"
                  }}
                />
              </motion.div>
              
              {/* Enhanced flowchart nodes with more professional styling */}
              {[
                { top: '15%', left: '20%', delay: 0, label: 'Input' },
                { top: '15%', left: '70%', delay: 1, label: 'Process' },
                { top: '75%', left: '20%', delay: 0.5, label: 'Output' },
                { top: '75%', left: '70%', delay: 1.5, label: 'API' },
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute w-16 h-8 bg-white/10 backdrop-blur-sm rounded-md border border-white/20 shadow-lg flex items-center justify-center text-xs font-medium text-white"
                  style={{ top: pos.top, left: pos.left }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: pos.delay + 1.8, duration: 0.5 }}
                >
                  {pos.label}
                </motion.div>
              ))}
              
              {/* Enhanced connection lines with animated gradient */}
              {[
                { from: { top: '19%', left: '28%' }, to: { top: '19%', left: '70%' } },
                { from: { top: '19%', left: '78%' }, to: { top: '50%', left: '78%' } },
                { from: { top: '50%', left: '78%' }, to: { top: '75%', left: '78%' } },
                { from: { top: '75%', left: '70%' }, to: { top: '75%', left: '28%' } },
                { from: { top: '75%', left: '20%' }, to: { top: '50%', left: '20%' } },
                { from: { top: '50%', left: '20%' }, to: { top: '19%', left: '20%' } },
              ].map((line, i) => (
                <motion.div
                  key={`line-${i}`}
                  className="absolute bg-gradient-to-r from-transparent via-accent-coral/50 to-transparent h-0.5"
                  style={{ 
                    top: line.from.top, 
                    left: line.from.left,
                    width: '0%',
                    transformOrigin: 'left center',
                    filter: "blur(0.5px)",
                    boxShadow: "0 0 5px rgba(255,92,88,0.5)",
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

              {/* Data flow animation */}
              {[
                { path: [{ top: '19%', left: '28%' }, { top: '19%', left: '70%' }], delay: 2.5 },
                { path: [{ top: '19%', left: '78%' }, { top: '50%', left: '78%' }, { top: '75%', left: '78%' }], delay: 3.5 },
                { path: [{ top: '75%', left: '70%' }, { top: '75%', left: '28%' }], delay: 4.5 },
                { path: [{ top: '75%', left: '20%' }, { top: '50%', left: '20%' }, { top: '19%', left: '20%' }], delay: 5.5 },
              ].map((flow, i) => (
                <motion.div
                  key={`flow-${i}`}
                  className="absolute w-2 h-2 rounded-full bg-accent-coral shadow-[0_0_10px_rgba(255,92,88,0.7)]"
                  initial={{ top: flow.path[0].top, left: flow.path[0].left, scale: 0 }}
                  animate={{
                    top: flow.path.map(point => point.top),
                    left: flow.path.map(point => point.left),
                    scale: [0, 1, 1, 0]
                  }}
                  transition={{
                    delay: flow.delay,
                    duration: flow.path.length * 1.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                    times: flow.path.map((_, idx) => idx / (flow.path.length - 1)),
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Add pulsing glow effect at bottom of hero section to guide scroll down */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center">
          <motion.div 
            className="w-2 h-2 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <span className="text-white/50 text-xs mt-2">Scroll Down</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
