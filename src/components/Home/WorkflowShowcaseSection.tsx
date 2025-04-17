
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Play, CheckCircle, AlertTriangle, Database, RefreshCw } from 'lucide-react';

const WorkflowShowcaseSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const workflowSteps = [
    {
      title: "Trigger Event",
      description: "Automation starts when specific events occur, such as form submissions or new customer sign-ups.",
      icon: Play,
      color: "bg-accent-coral",
      delay: 0.3,
    },
    {
      title: "Condition Check",
      description: "Evaluate conditions to determine the next steps in the workflow based on data or user input.",
      icon: AlertTriangle,
      color: "bg-accent-cream",
      delay: 0.5,
    },
    {
      title: "Data Processing",
      description: "Automatically organize, transform, and analyze data from multiple sources in real-time.",
      icon: Database,
      color: "bg-primary-navy",
      delay: 0.7,
    },
    {
      title: "Action Execution",
      description: "Perform specified actions like sending notifications, updating records, or triggering external systems.",
      icon: CheckCircle,
      color: "bg-secondary-slate",
      delay: 0.9,
    }
  ];

  const integrationTools = [
    { name: "n8n", logo: "https://n8n.io/favicon.ico" },
    { name: "Make", logo: "https://www.make.com/en/favicon.ico" },
    { name: "Zapier", logo: "https://cdn.zapier.com/zapier/images/favicon.ico" },
    { name: "Airtable", logo: "https://www.airtable.com/favicon.ico" },
    { name: "ChatGPT", logo: "https://chat.openai.com/favicon.ico" },
    { name: "Firebase", logo: "https://www.gstatic.com/devrel-devsite/prod/v84e6f6a61298bbae5bb110" },
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
          <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4">Workflow <span className="text-accent-coral">Automation</span></h2>
          <div className="w-24 h-1 bg-accent-coral mx-auto mb-8"></div>
          <p className="text-lg text-secondary-slate max-w-3xl mx-auto">
            See how our automation solutions connect systems and streamline processes to save time and reduce errors.
          </p>
        </motion.div>

        {/* Workflow Steps Timeline */}
        <div className="relative max-w-4xl mx-auto mb-16">
          {/* Connecting line */}
          <div className="absolute left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-accent-coral via-accent-cream to-primary-navy rounded-full hidden md:block" />

          <div className="space-y-12 relative">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: step.delay }}
                className="flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="flex-shrink-0 relative z-10">
                  <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Step number */}
                  <div className="absolute -right-2 -top-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-sm font-bold text-primary-navy">
                    {index + 1}
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-6 w-full transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-primary-navy mb-2">{step.title}</h3>
                  <p className="text-secondary-slate">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Data Flow Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-white rounded-xl shadow-lg p-8 overflow-hidden relative"
        >
          <h3 className="text-2xl font-bold text-primary-navy mb-6 text-center">Automation in Action</h3>
          
          {/* Workflow diagram */}
          <div className="relative h-64 md:h-96">
            {/* Central automation hub */}
            <motion.div
              animate={{ 
                boxShadow: ['0 0 0 rgba(244, 213, 141, 0)', '0 0 30px rgba(244, 213, 141, 0.7)', '0 0 0 rgba(244, 213, 141, 0)'] 
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white shadow-xl flex items-center justify-center z-10"
            >
              <div className="relative">
                <RefreshCw className="w-12 h-12 text-accent-coral" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-20 h-20 rounded-full border-2 border-dashed border-accent-cream opacity-70" />
                </motion.div>
              </div>
            </motion.div>
            
            {/* Integration nodes - positioned in a circle around the center */}
            {integrationTools.map((tool, index) => {
              const angle = (index * (360 / integrationTools.length)) * (Math.PI / 180);
              const radius = 120; // Distance from center
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 + (index * 0.1) }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-lg bg-white shadow-lg flex flex-col items-center justify-center p-2"
                  style={{ marginLeft: x, marginTop: y }}
                >
                  <div className="w-8 h-8 bg-gray-200 rounded-md mb-1 overflow-hidden">
                    <img 
                      src={tool.logo} 
                      alt={tool.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://via.placeholder.com/40?text=' + tool.name.charAt(0);
                      }}
                    />
                  </div>
                  <span className="text-xs text-primary-navy font-medium text-center">{tool.name}</span>
                </motion.div>
              );
            })}
            
            {/* Connection lines */}
            {integrationTools.map((_, index) => {
              const angle = (index * (360 / integrationTools.length)) * (Math.PI / 180);
              const endRadius = 120; // Same as node placement radius
              const startRadius = 20; // Starting point (center circle radius)
              
              const startX = Math.cos(angle) * startRadius;
              const startY = Math.sin(angle) * startRadius;
              
              const endX = Math.cos(angle) * endRadius;
              const endY = Math.sin(angle) * endRadius;
              
              // Calculate the length of the line
              const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
              
              // Calculate the angle for rotation
              const rotationAngle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);
              
              return (
                <motion.div
                  key={`line-${index}`}
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: 1.3 + (index * 0.1) }}
                  className="absolute top-1/2 left-1/2 h-0.5 bg-gradient-to-r from-accent-coral to-accent-cream opacity-70"
                  style={{ 
                    width: `${length}px`,
                    transformOrigin: 'left center',
                    transform: `translate(-50%, -50%) translate(${startX}px, ${startY}px) rotate(${rotationAngle}deg)`
                  }}
                />
              );
            })}
            
            {/* Data packets traveling along connections */}
            {integrationTools.map((_, index) => {
              const angle = (index * (360 / integrationTools.length)) * (Math.PI / 180);
              const radius = 120; // Same as node placement radius
              
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <motion.div
                  key={`packet-${index}`}
                  className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-white shadow-md z-20"
                  animate={{
                    x: [0, x],
                    y: [0, y],
                    scale: [1, 0.5, 1],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: index * 0.5,
                    ease: "easeInOut"
                  }}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkflowShowcaseSection;
