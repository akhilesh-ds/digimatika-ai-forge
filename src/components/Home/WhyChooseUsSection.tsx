
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Wand2, Headphones, Settings, TrendingUp } from 'lucide-react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon, 
  delay,
  iconColor
}: { 
  title: string; 
  description: string; 
  icon: any; 
  delay: number;
  iconColor: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-lg ${iconColor} text-white`}>
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary-navy mb-2">{title}</h3>
          <p className="text-secondary-slate">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TrustMeter = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(chartRef, { once: true, amount: 0.5 });
  
  const data = {
    labels: ['Client Satisfaction', 'Project Success Rate', 'Support Response', 'Technical Expertise'],
    datasets: [
      {
        data: isInView ? [95, 98, 97, 96] : [0, 0, 0, 0],
        backgroundColor: [
          '#FF5C58', // accent-coral
          '#0D1B2A', // primary-navy
          '#F4D58D', // accent-cream
          '#1B263B', // secondary-slate
        ],
        borderColor: '#FFFFFF',
        borderWidth: 2,
      },
    ],
  };
  
  const options = {
    responsive: true,
    cutout: '70%', // Increased cutout to make more space for text
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          font: {
            family: 'Inter, sans-serif',
            size: 12,
          },
          padding: 20,
          color: '#1C1C1E',
        },
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.label}: ${context.raw}%`;
          }
        }
      }
    },
    animation: {
      duration: 2000,
    },
  };

  return (
    <div ref={chartRef} className="relative">
      <div className="max-w-xs mx-auto">
        <Doughnut data={data} options={options} />
        
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-5xl font-bold text-primary-navy" // Increased text size
          >
            97%
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-sm text-secondary-slate text-center mt-1" // Added margin to separate from percentage
          >
            Average Trust Score
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-8 text-center"
      >
        <h3 className="font-bold text-xl text-primary-navy mb-2">Trust Meter</h3>
        <p className="text-secondary-slate">
          Our client satisfaction metrics speak for themselves. We deliver results you can trust.
        </p>
      </motion.div>
    </div>
  );
};

const WhyChooseUsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const features = [
    {
      title: "Customized Solutions",
      description: "We create tailor-made automation solutions that address your specific business challenges and requirements.",
      icon: Settings,
      delay: 0.3,
      iconColor: "bg-primary-navy"
    },
    {
      title: "Creative Approach",
      description: "Our team brings a unique blend of creativity and technical expertise to every project we undertake.",
      icon: Wand2,
      delay: 0.4,
      iconColor: "bg-accent-coral"
    },
    {
      title: "Dedicated Support",
      description: "We provide ongoing support and maintenance to ensure your automation solutions continue to deliver value.",
      icon: Headphones,
      delay: 0.5,
      iconColor: "bg-secondary-slate"
    },
    {
      title: "Measurable Results",
      description: "We focus on delivering measurable business outcomes that enhance efficiency and drive growth.",
      icon: TrendingUp,
      delay: 0.6,
      iconColor: "bg-accent-cream"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-customBg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4">Why <span className="text-accent-coral">Choose Us</span></h2>
          <div className="w-24 h-1 bg-accent-coral mx-auto mb-8"></div>
          <p className="text-lg text-secondary-slate max-w-3xl mx-auto">
            Digimatika combines technical expertise with a human-centered approach to deliver automation solutions that make a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                delay={feature.delay}
                iconColor={feature.iconColor}
              />
            ))}
          </div>

          {/* Right side: Trust Meter */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12"
          >
            <TrustMeter />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
