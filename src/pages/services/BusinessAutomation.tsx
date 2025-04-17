
import Layout from "@/components/Layout/Layout";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Cog, Brain, Code, AlarmClock, BarChart3, Server, Award, Users } from "lucide-react";
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
        <div className="bg-gradient-to-r from-secondary-slate to-accent-coral p-3 rounded-lg text-white mb-4">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold text-primary-navy mb-2">{title}</h3>
        <p className="text-secondary-slate">{description}</p>
      </div>
    </motion.div>
  );
};

const BusinessAutomation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  
  const benefits = [
    "Reduce operational costs by 25-50%",
    "Increase team productivity and efficiency",
    "Eliminate human error in critical processes",
    "Scale operations without proportional headcount increase",
    "Improve customer satisfaction with faster service",
    "Create consistent experiences across all touchpoints",
    "Free staff from repetitive tasks for strategic work",
    "Gain real-time visibility into business operations"
  ];
  
  const features = [
    {
      title: "AI-Powered Decision Making",
      description: "Leverage artificial intelligence to analyze data and make smart decisions in your business processes.",
      icon: Brain
    },
    {
      title: "Custom Automation Solutions",
      description: "Tailor-made automation solutions designed specifically for your unique business requirements.",
      icon: Cog
    },
    {
      title: "Legacy System Integration",
      description: "Connect and modernize your existing systems without the need for complete replacements.",
      icon: Server
    },
    {
      title: "Scheduled Tasks & Triggers",
      description: "Set up automatic processes that run on schedules or are triggered by specific events.",
      icon: AlarmClock
    },
    {
      title: "Performance Analytics",
      description: "Comprehensive dashboards and reporting to track the impact of your automation initiatives.",
      icon: BarChart3
    },
    {
      title: "API Development",
      description: "Custom APIs to connect disparate systems and enable seamless data flow across your organization.",
      icon: Code
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      icon: "🏥",
      use: "Patient intake automation, insurance verification, and medical records management"
    },
    {
      name: "E-Commerce",
      icon: "🛒",
      use: "Inventory management, order processing, and customer communications"
    },
    {
      name: "Financial Services",
      icon: "💰",
      use: "Loan application processing, compliance checks, and transaction monitoring"
    },
    {
      name: "Manufacturing",
      icon: "🏭",
      use: "Supply chain optimization, quality control, and production scheduling"
    }
  ];

  return (
    <Layout>
      <div className="pt-14">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center bg-gradient-to-r from-accent-coral to-secondary-slate overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0">
            {/* Animated gears */}
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={`gear-${i}`}
                className="absolute"
                style={{
                  top: `${20 + (i * 15)}%`,
                  left: `${10 + (i % 3) * 30}%`,
                  width: `${80 + i * 20}px`,
                  height: `${80 + i * 20}px`,
                  opacity: 0.1,
                  background: 'radial-gradient(circle, rgba(255,255,255,0.3) 30%, transparent 70%)',
                  borderRadius: '50%',
                  boxShadow: 'inset 0 0 0 15px rgba(255,255,255,0.2)',
                }}
                animate={{
                  rotate: i % 2 === 0 ? [0, 360] : [360, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 20 + i * 5,
                  ease: "linear",
                }}
              >
                {/* Gear teeth */}
                {Array.from({ length: 8 }).map((_, j) => (
                  <div
                    key={`tooth-${i}-${j}`}
                    className="absolute bg-white/20"
                    style={{
                      width: '20px',
                      height: '10px',
                      top: '50%',
                      left: '50%',
                      marginLeft: '-10px',
                      marginTop: '-5px',
                      transform: `rotate(${j * 45}deg) translateX(${40 + i * 10}px)`,
                    }}
                  />
                ))}
              </motion.div>
            ))}
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
                  Complete <span className="text-accent-cream">Business Automation</span> Solutions
                </h1>
                <p className="text-xl text-white/80 mb-8 max-w-xl">
                  Transform your operations with comprehensive automation that connects your tools, people, and data to drive efficiency and growth.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="bg-accent-cream hover:bg-accent-cream/90 text-secondary-slate"
                    asChild
                  >
                    <Link to="/book-appointment">
                      Request a Consultation
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
                {/* Business automation visualization */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20">
                  <div className="p-4 bg-secondary-slate/60 border-b border-white/10 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <div className="text-white/70 text-sm ml-2">Business Systems Dashboard</div>
                  </div>
                  
                  <div className="p-6 h-[calc(100%-60px)] bg-gradient-to-b from-slate-800/60 to-primary-navy/60 relative">
                    {/* Dashboard visualization */}
                    <div className="grid grid-cols-2 gap-4 h-full">
                      {/* Main metrics */}
                      <div className="space-y-4">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="bg-white/10 p-4 rounded-lg"
                        >
                          <div className="text-xs text-white/60 mb-1">PRODUCTIVITY SCORE</div>
                          <div className="flex items-end">
                            <div className="text-2xl font-bold text-accent-cream">94%</div>
                            <div className="ml-2 text-green-400 text-xs flex items-center">
                              <ArrowRight className="h-3 w-3 rotate-[-45deg]" />
                              +12%
                            </div>
                          </div>
                          <div className="mt-2 h-2 bg-white/10 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-accent-cream" 
                              initial={{ width: "0%" }}
                              animate={{ width: "94%" }}
                              transition={{ delay: 1, duration: 1 }}
                            />
                          </div>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 }}
                          className="bg-white/10 p-4 rounded-lg"
                        >
                          <div className="text-xs text-white/60 mb-1">TASKS AUTOMATED</div>
                          <div className="text-2xl font-bold text-white">2,458</div>
                          <div className="mt-1 text-white/70 text-xs">Today: 124 tasks completed</div>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.9 }}
                          className="bg-white/10 p-4 rounded-lg"
                        >
                          <div className="text-xs text-white/60 mb-1">TIME SAVED</div>
                          <div className="text-2xl font-bold text-accent-coral">217 hours</div>
                          <div className="mt-1 text-white/70 text-xs">Monthly average</div>
                        </motion.div>
                      </div>
                      
                      {/* Right side - Chart and systems */}
                      <div className="space-y-4">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                          className="bg-white/10 p-4 rounded-lg flex-grow"
                        >
                          <div className="text-xs text-white/60 mb-1">SYSTEM PERFORMANCE</div>
                          <div className="h-[120px] mt-2">
                            {/* Simple chart visualization */}
                            <div className="h-full w-full flex items-end justify-between">
                              {Array.from({ length: 7 }).map((_, i) => (
                                <motion.div
                                  key={`bar-${i}`}
                                  className="w-[12%] bg-accent-cream/80"
                                  style={{ borderRadius: '2px 2px 0 0' }}
                                  initial={{ height: '0%' }}
                                  animate={{ height: `${30 + Math.random() * 60}%` }}
                                  transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                                />
                              ))}
                            </div>
                          </div>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 }}
                          className="bg-white/10 p-4 rounded-lg"
                        >
                          <div className="text-xs text-white/60 mb-2">CONNECTED SYSTEMS</div>
                          <div className="flex flex-wrap gap-2">
                            {["CRM", "ERP", "HRIS", "CMS", "BILLING"].map((sys) => (
                              <div key={sys} className="px-2 py-1 bg-white/20 rounded text-xs font-medium text-white flex items-center">
                                <div className="h-1.5 w-1.5 rounded-full bg-green-400 mr-1.5"></div>
                                {sys}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Activity indicators */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                      className="absolute bottom-4 left-0 right-0 px-6"
                    >
                      <div className="flex items-center justify-between text-xs text-white/60">
                        <div>SYSTEM STATUS: OPERATIONAL</div>
                        <div className="flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-green-500 mr-1.5 animate-pulse"></div>
                          LIVE UPDATES
                        </div>
                      </div>
                    </motion.div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">Benefits of <span className="text-accent-coral">Business Automation</span></h2>
              <div className="w-24 h-1 bg-accent-coral mx-auto mb-8"></div>
              <p className="text-lg text-secondary-slate max-w-3xl mx-auto">
                Streamline your operations, reduce costs, and improve efficiency with comprehensive business automation solutions.
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
        
        {/* Industry Applications Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">Industry <span className="text-accent-coral">Applications</span></h2>
              <div className="w-24 h-1 bg-accent-coral mx-auto mb-8"></div>
              <p className="text-lg text-secondary-slate max-w-3xl mx-auto">
                Our business automation solutions are tailored to meet the unique requirements of various industries.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                >
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4">{industry.icon}</span>
                      <h3 className="text-2xl font-bold text-primary-navy">{industry.name}</h3>
                    </div>
                    <p className="text-secondary-slate mb-6">{industry.use}</p>
                    
                    <Button 
                      variant="outline" 
                      className="border-accent-coral text-accent-coral hover:bg-accent-coral/5"
                      asChild
                    >
                      <Link to={`/contact`} className="group flex items-center">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section ref={containerRef} className="py-20 bg-white relative overflow-hidden">
          <motion.div
            style={{ y }}
            className="absolute -left-64 -top-64 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-secondary-slate/10 to-accent-coral/20 blur-3xl"
          />
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">Key <span className="text-accent-coral">Features</span></h2>
              <div className="w-24 h-1 bg-accent-coral mx-auto mb-8"></div>
              <p className="text-lg text-secondary-slate max-w-3xl mx-auto">
                Our comprehensive business automation platform offers everything you need to streamline operations.
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
                  Schedule an Automation Assessment
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
        
        {/* Approach Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">Our <span className="text-accent-coral">Approach</span></h2>
              <div className="w-24 h-1 bg-accent-coral mx-auto mb-8"></div>
              <p className="text-lg text-secondary-slate max-w-3xl mx-auto">
                We follow a proven methodology to identify, implement, and optimize automation opportunities in your business.
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Business Process Analysis",
                  description: "We analyze your existing processes, identify bottlenecks, and pinpoint high-impact automation opportunities.",
                  icon: Users
                },
                {
                  step: "2",
                  title: "Solution Design",
                  description: "Our experts design a tailored automation solution that integrates with your existing systems and workflows.",
                  icon: Code
                },
                {
                  step: "3",
                  title: "Implementation",
                  description: "We build, test, and deploy your automation solution with minimal disruption to your business operations.",
                  icon: Cog
                },
                {
                  step: "4",
                  title: "Training & Support",
                  description: "We ensure your team is fully equipped to leverage the new automation tools and provide ongoing support.",
                  icon: Award
                }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-start mb-12 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
                >
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 rounded-full bg-accent-coral text-white flex items-center justify-center text-xl font-bold z-10 relative">
                      {item.step}
                    </div>
                    {index < 3 && (
                      <div className={`absolute w-1 bg-accent-coral/30 top-16 bottom-[-48px] ${index % 2 !== 0 ? 'left-8' : 'left-8'}`}></div>
                    )}
                  </div>
                  
                  <div className={`bg-white rounded-xl shadow-md p-6 flex-grow ${index % 2 !== 0 ? 'mr-8' : 'ml-8'}`}>
                    <div className="flex items-center mb-4">
                      <item.icon className="h-6 w-6 text-accent-coral mr-3" />
                      <h3 className="text-xl font-bold text-primary-navy">{item.title}</h3>
                    </div>
                    <p className="text-secondary-slate">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <CallToActionSection />
      </div>
    </Layout>
  );
};

export default BusinessAutomation;
