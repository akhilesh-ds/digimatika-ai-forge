
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2, margin: "0px 0px -200px 0px" });

  const founderData = [
    {
      name: 'Jane Mitchell',
      role: 'CEO & Founder',
      imageSrc: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      delay: 0.3,
    },
    {
      name: 'Michael Chen',
      role: 'CTO & Co-Founder',
      imageSrc: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      delay: 0.5,
    },
  ];

  const timelineEvents = [
    {
      year: '2018',
      title: 'Company Founded',
      description: 'Digimatika was established with a vision to make automation accessible to all businesses.',
      delay: 0.3,
    },
    {
      year: '2019',
      title: 'First AI Integration',
      description: 'Launched our first AI-powered chatbot solution for customer service automation.',
      delay: 0.5,
    },
    {
      year: '2020',
      title: 'Workflow Platform',
      description: 'Developed our proprietary workflow automation platform for businesses.',
      delay: 0.7,
    },
    {
      year: '2022',
      title: 'Voice Agent Technology',
      description: 'Introduced advanced voice agent technology with natural language processing.',
      delay: 0.9,
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Extended our services to international markets with clients in over 20 countries.',
      delay: 1.1,
    },
  ];

  const typingVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { 
      width: "100%", 
      opacity: 1,
      transition: { 
        duration: 1,
        ease: "easeInOut",
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-customBg relative z-0">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4">About <span className="text-accent-coral">Digimatika</span></h2>
          <div className="w-24 h-1 bg-accent-coral mx-auto mb-8"></div>
          <p className="text-lg text-secondary-slate max-w-3xl mx-auto">
            We blend creativity with technology to help businesses automate processes and enhance customer experiences through AI-powered solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
          {/* Left: Founders */}
          <div className="space-y-10 relative">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl md:text-3xl font-bold text-primary-navy"
            >
              Meet Our Founders
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative">
              {founderData.map((founder, index) => (
                <motion.div
                  key={founder.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: founder.delay }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200">
                    <img
                      src={founder.imageSrc}
                      alt={founder.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-primary-navy">{founder.name}</h4>
                    <p className="text-accent-coral font-medium">{founder.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: About and Timeline */}
          <div className="space-y-10 relative">
            <div className="space-y-6 relative">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-2xl md:text-3xl font-bold text-primary-navy"
              >
                Our Story
              </motion.h3>

              <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={typingVariants}
                className="overflow-hidden relative"
              >
                <p className="text-secondary-slate leading-relaxed">
                  Digimatika was born from a simple idea: automation shouldn't be complicated. Our founders, with backgrounds in AI and software engineering, set out to create solutions that bring the power of automation to businesses of all sizes.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={typingVariants}
                className="overflow-hidden relative"
                transition={{ delay: 0.3 }}
              >
                <p className="text-secondary-slate leading-relaxed">
                  Today, we're proud to have helped hundreds of businesses transform their operations with custom AI chatbots, voice agents, and workflow automation tools that save time, reduce costs, and improve customer experiences.
                </p>
              </motion.div>
            </div>

            <div className="relative">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl md:text-3xl font-bold text-primary-navy mb-6"
              >
                Our Journey
              </motion.h3>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-[15px] top-0 bottom-0 w-px bg-gradient-to-b from-primary-navy/20 via-accent-coral to-accent-cream rounded-full z-0" />

                {/* Timeline events */}
                <div className="space-y-8 relative">
                  {timelineEvents.map((event, index) => (
                    <motion.div
                      key={event.year}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, delay: event.delay }}
                      className="relative pl-8 md:pl-12"
                    >
                      {/* Year marker */}
                      <div className="absolute left-[-10px] md:left-[5px] top-0 w-5 h-5 rounded-full bg-accent-coral shadow-md transform -translate-x-1/2 z-10" />
                      
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-accent-coral font-bold text-lg mb-2">{event.year}</div>
                        <h4 className="text-primary-navy font-bold text-xl mb-2">{event.title}</h4>
                        <p className="text-secondary-slate">{event.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
