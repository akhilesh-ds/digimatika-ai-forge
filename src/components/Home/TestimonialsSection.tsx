
import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Digimatika's AI chatbot has transformed our customer service. We've reduced response times by 80% while maintaining a personal touch our customers love.",
    author: "Sarah Johnson",
    position: "Customer Experience Director",
    company: "TechNova Solutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 2,
    content: "The workflow automation solution that Digimatika built for us has eliminated countless hours of manual data entry. Our team now focuses on strategic initiatives instead of repetitive tasks.",
    author: "David Chen",
    position: "Operations Manager",
    company: "Global Logistics Inc.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 3,
    content: "We implemented Digimatika's voice agent for our appointment scheduling, and the results have been outstanding. Call handling capacity increased by 300% with fewer errors and happier customers.",
    author: "Emily Rodriguez",
    position: "IT Director",
    company: "MediCare Services",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 4,
    content: "Working with Digimatika was effortless. They truly understood our business challenges and delivered a custom automation solution that exceeded our expectations and ROI projections.",
    author: "Michael Taylor",
    position: "CEO",
    company: "Startup Ventures",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  }
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  
  const next = () => {
    setCurrent((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };
  
  const prev = () => {
    setCurrent((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  useEffect(() => {
    if (!autoplay || !isInView) return;
    
    const interval = setInterval(() => {
      next();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay, isInView]);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-primary-navy to-secondary-slate text-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={`quote-${i}`}
              className="absolute text-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.1,
                transform: `scale(${Math.random() * 2 + 0.5}) rotate(${Math.random() * 45}deg)`,
              }}
            >
              <Quote size={Math.random() * 50 + 20} />
            </div>
          ))}
        </div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Client <span className="text-accent-coral">Testimonials</span></h2>
          <div className="w-24 h-1 bg-accent-coral mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto opacity-80">
            Don't just take our word for it. Here's what our clients have to say about our AI automation solutions.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto px-4 md:px-8">
          {/* Testimonials Slider */}
          <div 
            className="relative overflow-hidden"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <div className="py-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonials[current].id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-2xl overflow-hidden text-left"
                >
                  <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3">
                      <div className="bg-gradient-to-r from-accent-coral to-accent-cream p-1 rounded-full shadow-lg">
                        <div className="rounded-full overflow-hidden bg-white border-4 border-white">
                          <img 
                            src={testimonials[current].image} 
                            alt={testimonials[current].author}
                            className="w-32 h-32 object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-2/3">
                      <div className="mb-6">
                        <Quote className="text-accent-coral h-12 w-12 mb-4 opacity-20" />
                        <p className="text-secondary-slate text-lg md:text-xl italic leading-relaxed">
                          "{testimonials[current].content}"
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-primary-navy text-xl">{testimonials[current].author}</h4>
                        <p className="text-accent-coral font-medium">{testimonials[current].position}</p>
                        <p className="text-secondary-slate">{testimonials[current].company}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mb-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    current === index ? 'bg-accent-coral w-8' : 'bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full flex justify-between pointer-events-none">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prev}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center justify-center pointer-events-auto -ml-6 shadow-lg"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={next}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center justify-center pointer-events-auto -mr-6 shadow-lg"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
