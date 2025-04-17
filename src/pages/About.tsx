
import Layout from "@/components/Layout/Layout";
import { motion } from "framer-motion";
import AboutSection from "@/components/Home/AboutSection";
import WhyChooseUsSection from "@/components/Home/WhyChooseUsSection";
import CallToActionSection from "@/components/Home/CallToActionSection";

const About = () => {
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
            About <span className="text-accent-coral">Us</span>
          </h1>
          <div className="w-24 h-1 bg-accent-coral mx-auto mb-12"></div>
          <p className="text-xl text-center text-secondary-slate max-w-3xl mx-auto mb-16">
            Learn more about Digimatika, our mission, values, and the team behind our 
            innovative AI automation solutions.
          </p>
        </div>
        
        <AboutSection />
        <WhyChooseUsSection />
        <CallToActionSection />
      </motion.div>
    </Layout>
  );
};

export default About;
