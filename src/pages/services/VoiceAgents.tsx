
import Layout from "@/components/Layout/Layout";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Mic, Phone, Headphones, Sparkles, Globe, LineChart, MoveVertical } from "lucide-react";
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
        <div className="bg-gradient-to-r from-secondary-slate to-accent-cream p-3 rounded-lg text-white mb-4">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold text-primary-navy mb-2">{title}</h3>
        <p className="text-secondary-slate">{description}</p>
      </div>
    </motion.div>
  );
};

const VoiceAgents = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  
  const benefits = [
    "Handle high call volumes without additional staff",
    "Zero wait time for callers, even during peak hours",
    "24/7 phone support without staffing overnight shifts",
    "Consistent brand experience on every call",
    "Seamless escalation to human agents when necessary",
    "Multilingual voice support for global businesses",
    "Reduced operational costs by up to 60%",
    "Detailed call analytics and conversation insights"
  ];
  
  const features = [
    {
      title: "Natural Voice Synthesis",
      description: "Human-like voices with natural intonation and speech patterns that create comfortable customer experiences.",
      icon: Mic
    },
    {
      title: "Advanced Intent Recognition",
      description: "Our AI voice agents understand context and nuance, not just keywords, enabling genuine conversations.",
      icon: Sparkles
    },
    {
      title: "Multi-Language Support",
      description: "Deploy voice agents that speak multiple languages fluently to serve your global customer base.",
      icon: Globe
    },
    {
      title: "Seamless Call Transfers",
      description: "Smart escalation to human agents with full context handover when complex issues require personal attention.",
      icon: MoveVertical
    },
    {
      title: "Custom Voice Creation",
      description: "Create a unique brand voice or replicate your existing voice talent for consistent brand experience.",
      icon: Headphones
    },
    {
      title: "Comprehensive Analytics",
      description: "Detailed insights into call patterns, customer sentiment, common issues, and resolution rates.",
      icon: LineChart
    }
  ];

  return (
    <Layout>
      <div className="pt-14">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center bg-gradient-to-r from-secondary-slate to-primary-navy overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0">
            {/* Sound wave animation */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={`wave-${i}`}
                  className="absolute w-[30%] h-[1px] bg-accent-cream"
                  style={{ borderRadius: '50%' }}
                  animate={{
                    height: ['100px', '300px', '100px'],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3 + i * 0.2,
                    ease: "easeInOut",
                    delay: i * 0.1,
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
                  AI <span className="text-accent-cream">Voice Agents</span> That Sound Human
                </h1>
                <p className="text-xl text-white/80 mb-8 max-w-xl">
                  Advanced voice AI that handles customer calls with natural-sounding conversations, providing 24/7 phone support without wait times.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="bg-accent-cream hover:bg-accent-cream/90 text-secondary-slate"
                    asChild
                  >
                    <Link to="/book-appointment">
                      Request a Demo
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
                {/* Voice agent visualization */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20">
                  <div className="p-4 bg-secondary-slate/60 border-b border-white/10 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <div className="text-white/70 text-sm ml-2">Digimatika Voice Agent</div>
                  </div>
                  
                  <div className="p-6 h-[calc(100%-60px)] flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center mb-8">
                      <div className="relative w-24 h-24 rounded-full bg-accent-cream/20 flex items-center justify-center">
                        <Phone className="h-12 w-12 text-accent-cream" />
                        {/* Animated rings */}
                        {[1, 2, 3].map((i) => (
                          <motion.div
                            key={`ring-${i}`}
                            className="absolute inset-0 rounded-full border-2 border-accent-cream/30"
                            animate={{
                              scale: [1, 1.5, 2],
                              opacity: [0.7, 0.3, 0],
                            }}
                            transition={{
                              repeat: Infinity,
                              duration: 2,
                              delay: i * 0.5,
                              ease: "easeOut",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div className="w-full max-w-sm">
                      {/* Sound wave visualization */}
                      <motion.div 
                        className="w-full h-20 bg-black/30 rounded-lg flex items-center justify-center overflow-hidden mb-6"
                      >
                        <div className="flex items-center justify-center h-full space-x-1">
                          {Array.from({ length: 30 }).map((_, i) => (
                            <motion.div
                              key={`bar-${i}`}
                              className="w-1 bg-accent-cream"
                              animate={{
                                height: [
                                  `${5 + Math.random() * 10}px`,
                                  `${30 + Math.random() * 40}px`,
                                  `${5 + Math.random() * 10}px`
                                ]
                              }}
                              transition={{
                                repeat: Infinity,
                                duration: 0.8 + Math.random() * 0.5,
                                ease: "easeInOut",
                                delay: i * 0.02
                              }}
                            />
                          ))}
                        </div>
                      </motion.div>
                      
                      {/* Transcription */}
                      <div className="space-y-2">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1 }}
                          className="bg-white/10 p-3 rounded-lg"
                        >
                          <p className="text-white text-sm"><span className="text-accent-cream font-medium">Voice Agent:</span> Hello, thank you for calling Digimatika. How may I help you today?</p>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.5 }}
                          className="bg-white/5 p-3 rounded-lg"
                        >
                          <p className="text-white text-sm"><span className="text-white/70 font-medium">Caller:</span> I'd like to learn more about your voice AI solutions.</p>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 2 }}
                          className="bg-white/10 p-3 rounded-lg"
                        >
                          <p className="text-white text-sm"><span className="text-accent-cream font-medium">Voice Agent:</span> I'd be happy to tell you about our voice AI solutions. We offer customizable voice agents that can handle customer service calls, appointment scheduling, and more...</p>
                        </motion.div>
                      </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">Why Choose <span className="text-accent-coral">Our Voice Agents</span></h2>
              <div className="w-24 h-1 bg-accent-coral mx-auto mb-8"></div>
              <p className="text-lg text-secondary-slate max-w-3xl mx-auto">
                Our AI voice agents deliver natural, human-like conversations that provide instant customer service without the limitations of traditional call centers.
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
            className="absolute -left-64 -bottom-64 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-accent-cream/10 to-accent-coral/20 blur-3xl"
          />
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">Advanced <span className="text-accent-coral">Features</span></h2>
              <div className="w-24 h-1 bg-accent-coral mx-auto mb-8"></div>
              <p className="text-lg text-secondary-slate max-w-3xl mx-auto">
                Our voice agents leverage cutting-edge AI technology to deliver exceptional phone experiences for your customers.
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
                  Schedule a Voice Agent Demo
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
        
        {/* Use Cases Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">Popular <span className="text-accent-coral">Use Cases</span></h2>
              <div className="w-24 h-1 bg-accent-coral mx-auto mb-8"></div>
              <p className="text-lg text-secondary-slate max-w-3xl mx-auto">
                Discover how businesses across industries are deploying our AI voice agents to transform their customer service operations.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Customer Service",
                  description: "Handle common inquiries, troubleshoot issues, and provide information about products and services without wait times.",
                  icon: "💬",
                },
                {
                  title: "Appointment Scheduling",
                  description: "Allow customers to book, reschedule, or cancel appointments through natural voice conversations.",
                  icon: "📅",
                },
                {
                  title: "Order Status Updates",
                  description: "Provide customers with real-time updates on their orders, shipments, and deliveries.",
                  icon: "📦",
                },
                {
                  title: "Technical Support",
                  description: "Guide users through basic troubleshooting steps and collect information before escalating to human agents.",
                  icon: "🔧",
                }
              ].map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
                >
                  <div className="p-8">
                    <div className="text-4xl mb-4">{useCase.icon}</div>
                    <h3 className="text-2xl font-bold text-primary-navy mb-3">{useCase.title}</h3>
                    <p className="text-secondary-slate mb-6">{useCase.description}</p>
                    
                    <Button
                      variant="ghost"
                      className="text-accent-coral hover:text-accent-coral/80 p-0 group flex items-center"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonial Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-8">What Our Clients Say</h2>
              
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 relative">
                <div className="text-6xl text-accent-coral opacity-20 absolute top-4 left-6">"</div>
                
                <p className="text-xl text-secondary-slate mb-8 relative z-10">
                  Implementing Digimatika's AI voice agents has been a game-changer for our call center operations. We've reduced wait times to zero, extended our support hours to 24/7, and our customer satisfaction scores have increased by 32%. The voice quality is so natural that many customers don't realize they're speaking with an AI.
                </p>
                
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=256" 
                      alt="David Chen" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-primary-navy">David Chen</h4>
                    <p className="text-secondary-slate">CTO, GlobalConnect Solutions</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        <CallToActionSection />
      </div>
    </Layout>
  );
};

export default VoiceAgents;
