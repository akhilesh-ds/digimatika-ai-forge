
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const CallToActionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section 
      ref={sectionRef}
      className="py-20 relative bg-gradient-to-r from-primary-navy to-secondary-slate text-white overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated sparkle lines */}
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={`sparkle-${index}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            <Sparkles 
              className="text-accent-cream opacity-40" 
              size={Math.random() * 30 + 10} 
            />
          </motion.div>
        ))}
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-navy/50" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            style={{ y, opacity }}
            className="space-y-8"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
            >
              Let's Build Your <span className="text-accent-coral">AI Future</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/80 max-w-2xl mx-auto"
            >
              Ready to transform your business with AI-powered automation? Schedule a discovery call with our experts today.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6"
            >
              <Link to="/book-appointment">
                <motion.button
                  className="btn-accent group relative overflow-hidden px-10 py-4 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Book a Discovery Call
                    <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  
                  {/* Button hover effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-white"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: 'left' }}
                  />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Floating robot hand */}
          <motion.div
            className="mt-16 relative h-40 md:h-60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Robot arm visualization */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 2, 0, -2, 0]
              }}
              transition={{
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <div className="relative">
                {/* Robot base */}
                <div className="w-20 h-20 bg-accent-coral rounded-full mx-auto shadow-lg opacity-90 relative mb-4">
                  <div className="absolute inset-2 rounded-full bg-secondary-slate flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-accent-cream animate-pulse"></div>
                  </div>
                </div>
                
                {/* Robot arm */}
                <div className="w-8 h-40 bg-gradient-to-b from-accent-coral to-accent-cream rounded-t-full mx-auto shadow-lg relative">
                  {/* Robot hand */}
                  <div className="absolute -left-6 bottom-0 w-20 h-12 bg-accent-cream rounded-full"></div>
                  
                  {/* Fingers */}
                  <motion.div
                    className="absolute -left-10 bottom-2 w-6 h-2 bg-accent-coral rounded-full"
                    animate={{ rotate: [0, 10, 0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute -left-8 bottom-6 w-6 h-2 bg-accent-coral rounded-full"
                    animate={{ rotate: [0, -10, 0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  />
                  <motion.div
                    className="absolute left-10 bottom-2 w-6 h-2 bg-accent-coral rounded-full"
                    animate={{ rotate: [0, 10, 0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                </div>
              </div>
            </motion.div>
            
            {/* Loading bars / Data flow */}
            <div className="absolute inset-0 flex items-end justify-center">
              <div className="max-w-sm w-full flex justify-between h-6 gap-1">
                {Array.from({ length: 12 }).map((_, index) => (
                  <motion.div
                    key={index}
                    className="w-full h-full bg-accent-cream/30 rounded"
                    animate={{ 
                      height: [
                        `${Math.random() * 30 + 10}%`, 
                        `${Math.random() * 50 + 50}%`, 
                        `${Math.random() * 30 + 10}%`
                      ]
                    }}
                    transition={{ 
                      duration: Math.random() * 2 + 1, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: index * 0.1
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
