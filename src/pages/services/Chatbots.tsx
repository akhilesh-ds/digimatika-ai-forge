
import Layout from "@/components/Layout/Layout";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, MessageSquare, Bot, Shield, Zap, Database, MessagesSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import CallToActionSection from "@/components/Home/CallToActionSection";

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon,
  delay = 0 
}: { 
  title: string; 
  description: string; 
  icon: any;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
    >
      <div className="flex flex-col items-start">
        <div className="bg-gradient-to-r from-primary-navy to-accent-coral p-3 rounded-lg text-white mb-4">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold text-primary-navy mb-2">{title}</h3>
        <p className="text-secondary-slate">{description}</p>
      </div>
    </motion.div>
  );
};

const Chatbots = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  
  const benefits = [
    "24/7 customer support without human fatigue",
    "Instant responses to common questions",
    "Reduced customer service costs by up to 70%",
    "Consistent brand voice across all interactions",
    "Seamless integration with existing systems",
    "Detailed analytics and conversation insights",
    "Multi-language support for global businesses",
    "Personalized customer experiences"
  ];
  
  const features = [
    {
      title: "Natural Language Processing",
      description: "Our AI chatbots understand context and intent, not just keywords, enabling natural conversations.",
      icon: MessageSquare
    },
    {
      title: "Custom AI Training",
      description: "We train your chatbot with your specific business data, ensuring accurate and relevant responses.",
      icon: Bot
    },
    {
      title: "Enterprise Security",
      description: "Bank-level encryption and data protection for all conversations and stored information.",
      icon: Shield
    },
    {
      title: "Multi-Channel Integration",
      description: "Deploy your chatbot across website, WhatsApp, Facebook Messenger, Telegram, and more.",
      icon: MessagesSquare
    },
    {
      title: "Lightning-Fast Responses",
      description: "Advanced caching and optimization delivering sub-second response times for common queries.",
      icon: Zap
    },
    {
      title: "Knowledge Base Connection",
      description: "Seamlessly connect to your existing knowledge bases, FAQs, and documentation.",
      icon: Database
    }
  ];

  return (
    <Layout>
      <div className="pt-14">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center bg-gradient-to-r from-primary-navy to-secondary-slate overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0">
            {/* Animated pattern */}
            <div className="absolute inset-0 opacity-10">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={`pattern-${i}`}
                  className="absolute"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    width: `${Math.random() * 300 + 100}px`,
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    transform: `rotate(${Math.random() * 360}deg)`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    duration: Math.random() * 5 + 5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: Math.random() * 5,
                  }}
                />
              ))}
            </div>
          </div>
          
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-white"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  AI <span className="text-accent-coral">Chatbots</span> That Transform Customer Experience
                </h1>
                <p className="text-xl text-white/80 mb-8 max-w-xl">
                  Personalized, intelligent chatbots that understand your customers and provide helpful responses 24/7 across multiple platforms.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="bg-accent-coral hover:bg-accent-coral/90 text-white"
                    asChild
                  >
                    <Link to="/book-appointment">
                      Book a Demo
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/10"
                    asChild
                  >
                    <Link to="/contact">
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-[400px] hidden lg:block"
              >
                {/* Chatbot visualization */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20">
                  <div className="p-4 bg-primary-navy/60 border-b border-white/10 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <div className="text-white/70 text-sm ml-2">Digimatika AI Chatbot</div>
                  </div>
                  
                  <div className="p-6 h-[calc(100%-60px)] flex flex-col">
                    <div className="flex-grow space-y-4 overflow-auto">
                      {/* Bot message */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-start"
                      >
                        <div className="bg-accent-cream w-8 h-8 rounded-full flex items-center justify-center mr-3">
                          <Bot className="w-4 h-4 text-secondary-slate" />
                        </div>
                        <div className="bg-secondary-slate/20 backdrop-blur-sm p-3 rounded-lg rounded-tl-none max-w-[80%]">
                          <p className="text-white">Hello! Welcome to Digimatika. How can I assist you today?</p>
                        </div>
                      </motion.div>
                      
                      {/* User message */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="flex items-start justify-end"
                      >
                        <div className="bg-accent-coral/80 backdrop-blur-sm p-3 rounded-lg rounded-tr-none max-w-[80%]">
                          <p className="text-white">I'm interested in automation for my e-commerce store.</p>
                        </div>
                        <div className="bg-white/80 w-8 h-8 rounded-full flex items-center justify-center ml-3">
                          <User className="w-4 h-4 text-secondary-slate" />
                        </div>
                      </motion.div>
                      
                      {/* Bot message */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5 }}
                        className="flex items-start"
                      >
                        <div className="bg-accent-cream w-8 h-8 rounded-full flex items-center justify-center mr-3">
                          <Bot className="w-4 h-4 text-secondary-slate" />
                        </div>
                        <div className="bg-secondary-slate/20 backdrop-blur-sm p-3 rounded-lg rounded-tl-none max-w-[80%]">
                          <p className="text-white">Great! Our e-commerce automation solutions can help with order processing, inventory management, and customer support. Would you like to learn more about specific features or schedule a demo?</p>
                        </div>
                      </motion.div>
                      
                      {/* Typing indicator */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, delay: 2 }}
                        className="flex items-start"
                      >
                        <div className="bg-accent-cream w-8 h-8 rounded-full flex items-center justify-center mr-3">
                          <Bot className="w-4 h-4 text-secondary-slate" />
                        </div>
                        <div className="bg-secondary-slate/20 backdrop-blur-sm p-3 rounded-lg rounded-tl-none">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
                            <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    
                    <div className="mt-4 relative">
                      <input
                        type="text"
                        placeholder="Type your message..."
                        className="w-full bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent-coral"
                      />
                      <Button size="icon" className="absolute right-1 top-1 bg-accent-coral hover:bg-accent-coral/90 rounded-full">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">Why Choose <span className="text-accent-coral">Our Chatbots</span></h2>
              <div className="w-24 h-1 bg-accent-coral mx-auto mb-8"></div>
              <p className="text-lg text-secondary-slate max-w-3xl mx-auto">
                Our AI chatbots go beyond simple rule-based responses, learning from each interaction to deliver increasingly personalized customer experiences.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle className="h-6 w-6 text-accent-coral mr-3 flex-shrink-0 mt-1" />
                  <p className="text-secondary-slate">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section ref={containerRef} className="py-20 bg-gray-50 relative overflow-hidden">
          <motion.div
            style={{ y }}
            className="absolute -right-64 -top-64 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-accent-coral/10 to-accent-cream/20 blur-3xl"
          />
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">Powerful <span className="text-accent-coral">Features</span></h2>
              <div className="w-24 h-1 bg-accent-coral mx-auto mb-8"></div>
              <p className="text-lg text-secondary-slate max-w-3xl mx-auto">
                Our chatbots come packed with advanced capabilities to help your business provide exceptional customer experiences.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  delay={index * 0.1}
                />
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16 text-center"
            >
              <Button 
                size="lg" 
                className="bg-primary-navy hover:bg-primary-navy/90"
                asChild
              >
                <Link to="/book-appointment">
                  Request Custom Chatbot Solution
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">Our <span className="text-accent-coral">Process</span></h2>
              <div className="w-24 h-1 bg-accent-coral mx-auto mb-8"></div>
              <p className="text-lg text-secondary-slate max-w-3xl mx-auto">
                We follow a proven methodology to develop, deploy, and optimize your custom AI chatbot.
              </p>
            </motion.div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
              
              {/* Timeline steps */}
              <div className="space-y-12 md:space-y-0">
                {[
                  {
                    title: "Discovery & Analysis",
                    description: "We analyze your existing customer communications, common inquiries, and business goals to develop a chatbot strategy.",
                    icon: "1",
                  },
                  {
                    title: "Design & Development",
                    description: "Our team designs conversation flows and develops a custom chatbot trained on your specific business knowledge.",
                    icon: "2",
                  },
                  {
                    title: "Testing & Optimization",
                    description: "We rigorously test the chatbot with real-world scenarios and optimize responses for accuracy and helpfulness.",
                    icon: "3",
                  },
                  {
                    title: "Deployment & Integration",
                    description: "Your chatbot is deployed across your preferred channels and integrated with your existing tools and systems.",
                    icon: "4",
                  },
                  {
                    title: "Ongoing Improvement",
                    description: "We continuously monitor performance, gather user feedback, and enhance your chatbot's capabilities over time.",
                    icon: "5",
                  }
                ].map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
                  >
                    {/* Content left/right alternating */}
                    <div className={index % 2 === 0 ? "md:text-right md:order-1" : "md:order-2"}>
                      <h3 className="text-2xl font-bold text-primary-navy mb-3">{step.title}</h3>
                      <p className="text-secondary-slate">{step.description}</p>
                    </div>
                    
                    {/* Circle with number */}
                    <div className={`flex ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"} md:order-${index % 2 === 0 ? "2" : "1"}`}>
                      <div className="relative">
                        <div className="w-16 h-16 bg-accent-coral rounded-full flex items-center justify-center text-white text-2xl font-bold z-10 relative">
                          {step.icon}
                        </div>
                        {/* Background decorative element */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-2 border-dashed border-accent-coral opacity-20"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <CallToActionSection />
      </div>
    </Layout>
  );
};

export default Chatbots;
