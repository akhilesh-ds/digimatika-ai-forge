
import Layout from "@/components/Layout/Layout";
import { motion } from "framer-motion";
import ServicesSection from "@/components/Home/ServicesSection";
import CallToActionSection from "@/components/Home/CallToActionSection";

const Services = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-10"
      >
        <div className="container-custom py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-navy mb-8 text-center">
            Our <span className="text-accent-coral">Services</span>
          </h1>
          <div className="w-24 h-1 bg-accent-coral mx-auto mb-12"></div>
          <p className="text-xl text-center text-secondary-slate max-w-3xl mx-auto mb-16">
            Discover how our AI-powered solutions can transform your business operations 
            and customer experiences with tailored automation strategies.
          </p>
        </div>
        
        <ServicesSection />
        <CallToActionSection />
      </motion.div>
    </Layout>
  );
};

export default Services;
