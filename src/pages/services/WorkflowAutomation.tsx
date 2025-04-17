
import Layout from "@/components/Layout/Layout";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, GitBranch, Clock, BarChart3, Zap, Flag, RefreshCcw, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import CallToActionSection from "@/components/Home/CallToActionSection";

const ToolCard = ({ 
  name, 
  description, 
  logo, 
  delay = 0 
}: { 
  name: string; 
  description: string; 
  logo: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 p-6"
    >
      <div className="flex flex-col items-center text-center">
        <div className="text-4xl mb-4">{logo}</div>
        <h3 className="text-xl font-bold text-primary-navy mb-2">{name}</h3>
        <p className="text-secondary-slate">{description}</p>
      </div>
    </motion.div>
  );
};

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
        <div className="bg-gradient-to-r from-primary-navy to-secondary-slate p-3 rounded-lg text-white mb-4">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold text-primary-navy mb-2">{title}</h3>
        <p className="text-secondary-slate">{description}</p>
      </div>
    </motion.div>
  );
};

const WorkflowAutomation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  
  const benefits = [
    "Eliminate repetitive manual tasks and save 15+ hours per week",
    "Connect previously siloed systems and data sources",
    "Reduce human error in critical business processes",
    "Scale operations without proportionally increasing staff",
    "Create consistent, reliable processes across departments",
    "Get actionable insights from workflow performance data",
    "Deploy new automations and updates in days, not months",
    "Empower teams to focus on strategic work instead of busywork"
  ];
  
  const features = [
    {
      title: "No-code Workflow Builder",
      description: "Design complex workflows visually without writing code, enabling business users to create their own automations.",
      icon: GitBranch
    },
    {
      title: "Time-based Triggers",
      description: "Schedule workflows to run at specific times, on recurring schedules, or based on calendar events.",
      icon: Clock
    },
    {
      title: "Data Transformation",
      description: "Powerful tools to manipulate, format, and transform data between different systems and formats.",
      icon: RefreshCcw
    },
    {
      title: "Performance Monitoring",
      description: "Real-time dashboards and alerts to monitor workflow performance and quickly address any issues.",
      icon: BarChart3
    },
    {
      title: "Conditional Logic",
      description: "Create sophisticated decision trees and business rules to handle complex process scenarios.",
      icon: Flag
    },
    {
      title: "Rapid Integration",
      description: "Connect to hundreds of apps and services through our extensive library of pre-built connectors.",
      icon: Zap
    }
  ];
  
  const tools = [
    {
      name: "n8n",
      description: "Open-source workflow automation tool with a focus on flexibility and privacy.",
      logo: "🔄"
    },
    {
      name: "Make",
      description: "Formerly Integromat, a powerful platform for connecting apps and automating workflows.",
      logo: "⚙️"
    },
    {
      name: "Zapier",
      description: "Connect your apps and automate workflows with a user-friendly interface.",
      logo: "🔌"
    },
    {
      name: "Airtable",
      description: "Flexible database that combines the power of a spreadsheet with features of a database.",
      logo: "📊"
    },
    {
      name: "Dify AI",
      description: "LLM development and deployment platform for AI-powered automations and tools.",
      logo: "🤖"
    },
    {
      name: "Firebase",
      description: "Google's platform for developing web and mobile applications without server-side programming.",
      logo: "🔥"
    }
  ];

  return (
    <Layout>
      <div className="pt-14">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center bg-gradient-to-r from-primary-navy to-accent-coral overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0">
            {/* Animated workflow lines */}
            {Array.from({ length: 5 }).map((_, rowIndex) => (
              <div key={`row-${rowIndex}`} className="absolute" style={{ top: `${rowIndex * 20}%`, left: 0, right: 0, height: '2px' }}>
                <motion.div
                  className="absolute h-full bg-white/10"
                  style={{ width: '20%' }}
                  animate={{
                    left: ['-20%', '100%'],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 8 - rowIndex,
                    ease: "linear",
                    delay: rowIndex * 0.5,
                  }}
                />
                
                {/* Connecting vertical lines */}
                {rowIndex < 4 && (
                  <div className="absolute" style={{ left: `${30 + rowIndex * 10}%`, top: 0, width: '2px', height: '20%', background: 'rgba(255,255,255,0.1)' }} />
                )}
              </div>
            ))}
            
            {/* Nodes */}
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={`node-${i}`}
                className="absolute w-4 h-4 rounded-full bg-white/20"
                style={{
                  top: `${Math.floor(i / 3) * 20 + 10}%`,
                  left: `${(i % 5) * 20 + 10}%`,
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.7, 0.2],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3 + i % 2,
                  delay: i * 0.3,
                }}
              />
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
                  End-to-End <span className="text-accent-cream">Workflow Automation</span>
                </h1>
                <p className="text-xl text-white/80 mb-8 max-w-xl">
                  Connect your tools, automate repetitive tasks, and orchestrate complex business processes with our no-code workflow solutions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="bg-accent-cream hover:bg-accent-cream/90 text-secondary-slate"
                    asChild
                  >
                    <Link to="/book-appointment">
                      Book a Consultation
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
                {/* Workflow visualization */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20">
                  <div className="p-4 bg-primary-navy/60 border-b border-white/10 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <div className="text-white/70 text-sm ml-2">Workflow Builder</div>
                  </div>
                  
                  <div className="p-6 h-[calc(100%-60px)] bg-slate-900/60">
                    {/* Workflow nodes */}
                    <div className="relative h-full w-full">
                      {/* Start node */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="absolute top-10 left-10"
                      >
                        <div className="bg-accent-coral/80 text-white p-3 rounded-md shadow-lg w-32 text-center">
                          <ArrowRight className="h-5 w-5 mx-auto mb-1" />
                          <div className="text-sm font-medium">Trigger</div>
                        </div>
                      </motion.div>
                      
                      {/* Connector line 1 */}
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 50 }}
                        transition={{ delay: 0.8, duration: 0.3 }}
                        className="absolute top-[74px] left-[42px] w-1 bg-accent-coral/50"
                      />
                      
                      {/* Node 2 */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1 }}
                        className="absolute top-[120px] left-[26px]"
                      >
                        <div className="bg-accent-cream/80 text-secondary-slate p-3 rounded-md shadow-lg w-32 text-center">
                          <Database className="h-5 w-5 mx-auto mb-1" />
                          <div className="text-sm font-medium">Fetch Data</div>
                        </div>
                      </motion.div>
                      
                      {/* Connector line 2 */}
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 80 }}
                        transition={{ delay: 1.4, duration: 0.3 }}
                        className="absolute top-[140px] left-[90px] h-1 bg-accent-cream/50"
                      />
                      
                      {/* Node 3 */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.7 }}
                        className="absolute top-[120px] left-[170px]"
                      >
                        <div className="bg-white/80 text-secondary-slate p-3 rounded-md shadow-lg w-32 text-center">
                          <RefreshCcw className="h-5 w-5 mx-auto mb-1" />
                          <div className="text-sm font-medium">Transform</div>
                        </div>
                      </motion.div>
                      
                      {/* Connector line 3 */}
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 50 }}
                        transition={{ delay: 2.0, duration: 0.3 }}
                        className="absolute top-[184px] left-[186px] w-1 bg-white/50"
                      />
                      
                      {/* Node 4 - Split path */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.3 }}
                        className="absolute top-[230px] left-[170px]"
                      >
                        <div className="bg-secondary-slate/80 text-white p-3 rounded-md shadow-lg w-32 text-center">
                          <Flag className="h-5 w-5 mx-auto mb-1" />
                          <div className="text-sm font-medium">Condition</div>
                        </div>
                      </motion.div>
                      
                      {/* Connector lines from condition */}
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 60 }}
                        transition={{ delay: 2.6, duration: 0.3 }}
                        className="absolute top-[250px] left-[110px] h-1 bg-secondary-slate/50"
                      />
                      
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 60 }}
                        transition={{ delay: 2.6, duration: 0.3 }}
                        className="absolute top-[250px] left-[202px] h-1 bg-secondary-slate/50"
                      />
                      
                      {/* Node 5A - True path */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.9 }}
                        className="absolute top-[230px] left-[50px]"
                      >
                        <div className="bg-green-500/80 text-white p-3 rounded-md shadow-lg w-32 text-center">
                          <Zap className="h-5 w-5 mx-auto mb-1" />
                          <div className="text-sm font-medium">Send Email</div>
                        </div>
                      </motion.div>
                      
                      {/* Node 5B - False path */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.9 }}
                        className="absolute top-[230px] left-[262px]"
                      >
                        <div className="bg-blue-500/80 text-white p-3 rounded-md shadow-lg w-32 text-center">
                          <Database className="h-5 w-5 mx-auto mb-1" />
                          <div className="text-sm font-medium">Update CRM</div>
                        </div>
                      </motion.div>
                      
                      {/* Animation to show flow */}
                      <motion.div
                        className="absolute h-3 w-3 rounded-full bg-accent-coral shadow-md shadow-accent-coral/50"
                        initial={{ top: 27, left: 42, opacity: 0 }}
                        animate={{
                          top: [27, 140, 140, 250, 250],
                          left: [42, 42, 186, 186, 82],
                          opacity: [1, 1, 1, 1, 0]
                        }}
                        transition={{
                          duration: 3,
                          delay: 3.2,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatDelay: 1
                        }}
                      />
                      
                      <motion.div
                        className="absolute h-3 w-3 rounded-full bg-accent-cream shadow-md shadow-accent-cream/50"
                        initial={{ top: 27, left: 42, opacity: 0 }}
                        animate={{
                          top: [27, 140, 140, 250, 250],
                          left: [42, 42, 186, 186, 294],
                          opacity: [0, 0, 1, 1, 0]
                        }}
                        transition={{
                          duration: 3.5,
                          delay: 3.7,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatDelay: 1.5
                        }}
                      />
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">Why Automate Your <span className="text-accent-coral">Workflows</span></h2>
              <div className="w-24 h-1 bg-accent-coral mx-auto mb-8"></div>
              <p className="text-lg text-secondary-slate max-w-3xl mx-auto">
                Eliminate repetitive tasks, reduce errors, and free your team to focus on strategic work that drives business growth.
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
        
        {/* Tools Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">Tools We <span className="text-accent-coral">Work With</span></h2>
              <div className="w-24 h-1 bg-accent-coral mx-auto mb-8"></div>
              <p className="text-lg text-secondary-slate max-w-3xl mx-auto">
                We leverage the best automation platforms to build tailored solutions that integrate with your existing systems.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {tools.map((tool, index) => (
                <ToolCard
                  key={tool.name}
                  name={tool.name}
                  description={tool.description}
                  logo={tool.logo}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section ref={containerRef} className="py-20 bg-white relative overflow-hidden">
          <motion.div
            style={{ y }}
            className="absolute -right-64 -bottom-64 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary-navy/10 to-accent-coral/20 blur-3xl"
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
                Our workflow automation solutions offer powerful capabilities to streamline your business processes.
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
                  Schedule a Workflow Consultation
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
        
        {/* Case Study Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">Success <span className="text-accent-coral">Stories</span></h2>
              <div className="w-24 h-1 bg-accent-coral mx-auto mb-8"></div>
              <p className="text-lg text-secondary-slate max-w-3xl mx-auto">
                See how our workflow automation solutions have transformed operations for businesses across industries.
              </p>
            </motion.div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="p-8 md:p-12"
                >
                  <div className="inline-block bg-accent-coral/10 text-accent-coral px-4 py-1 rounded-full text-sm font-medium mb-6">
                    Case Study
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-navy mb-4">
                    How Workflow Automation Saved Nova Logistics 35 Hours Per Week
                  </h3>
                  
                  <p className="text-secondary-slate mb-6">
                    Nova Logistics was struggling with manual data entry across multiple systems, leading to errors and delays. We implemented an end-to-end workflow automation solution that:
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-coral mr-3 flex-shrink-0 mt-1" />
                      <span className="text-secondary-slate">Automated order processing between their e-commerce platform and warehouse management system</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-coral mr-3 flex-shrink-0 mt-1" />
                      <span className="text-secondary-slate">Eliminated duplicate data entry and reduced processing errors by 94%</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-coral mr-3 flex-shrink-0 mt-1" />
                      <span className="text-secondary-slate">Created automated customer notifications for order status updates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-coral mr-3 flex-shrink-0 mt-1" />
                      <span className="text-secondary-slate">Generated real-time dashboards for tracking KPIs and operational performance</span>
                    </li>
                  </ul>
                  
                  <div className="flex items-center mb-8">
                    <div className="text-4xl font-bold text-accent-coral">35+</div>
                    <div className="ml-3 text-primary-navy font-medium">Hours saved weekly through automation</div>
                  </div>
                  
                  <Button 
                    className="bg-primary-navy hover:bg-primary-navy/90 group"
                    asChild
                  >
                    <Link to="/contact">
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-100 h-full flex items-center justify-center p-6"
                >
                  <div className="relative aspect-video w-full max-w-md">
                    <img
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
                      alt="Workflow automation dashboard"
                      className="rounded-lg shadow-md w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-accent-coral rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-accent-coral/90 transition-colors">
                        <div className="w-0 h-0 border-t-8 border-b-8 border-l-16 border-t-transparent border-b-transparent border-l-white ml-1"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        <CallToActionSection />
      </div>
    </Layout>
  );
};

export default WorkflowAutomation;
