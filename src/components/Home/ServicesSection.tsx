
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageSquare, Mic, GitBranch, Cog, ArrowRight } from 'lucide-react';

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  color, 
  delay, 
  link 
}: { 
  title: string; 
  description: string; 
  icon: any; 
  color: string; 
  delay: number;
  link: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.5, 
        delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
      className="tilt-card h-full bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="p-8 flex flex-col h-full">
        <div 
          className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${color}`}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        <h3 className="text-2xl font-bold text-primary-navy mb-4">{title}</h3>
        
        <p className="text-secondary-slate flex-grow mb-6">
          {description}
        </p>
        
        <Link 
          to={link}
          className="inline-flex items-center font-medium text-accent-coral hover:text-accent-coral/80 transition-colors group"
        >
          Learn More
          <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const services = [
    {
      title: "AI Chatbots",
      description: "Custom chatbots that understand your customers and provide intelligent responses on your website, social media, or messaging apps.",
      icon: MessageSquare,
      color: "bg-gradient-to-r from-primary-navy to-secondary-slate",
      delay: 0.3,
      link: "/services/chatbots"
    },
    {
      title: "AI Voice Agents",
      description: "Advanced voice assistants that handle customer calls with natural speech, reducing wait times and providing 24/7 support.",
      icon: Mic,
      color: "bg-gradient-to-r from-accent-coral to-accent-cream",
      delay: 0.5,
      link: "/services/voice-agents"
    },
    {
      title: "Workflow Automation",
      description: "End-to-end automation of repetitive business processes using no-code tools like n8n, Make, and Zapier.",
      icon: GitBranch,
      color: "bg-gradient-to-r from-primary-navy to-accent-coral",
      delay: 0.7,
      link: "/services/workflow-automation"
    },
    {
      title: "Business Automation",
      description: "Tailored solutions that connect your existing tools and streamline operations with AI-powered decision making.",
      icon: Cog,
      color: "bg-gradient-to-r from-secondary-slate to-accent-cream",
      delay: 0.9,
      link: "/services/business-automation"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4">Our <span className="text-accent-coral">Services</span></h2>
          <div className="w-24 h-1 bg-accent-coral mx-auto mb-8"></div>
          <p className="text-lg text-secondary-slate max-w-3xl mx-auto">
            Discover how our AI-powered solutions can transform your business operations and customer experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
              delay={service.delay}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
