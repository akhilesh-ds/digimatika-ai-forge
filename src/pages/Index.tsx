
import Layout from "@/components/Layout/Layout";
import HeroSection from "@/components/Home/HeroSection";
import AboutSection from "@/components/Home/AboutSection";
import ServicesSection from "@/components/Home/ServicesSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import WhyChooseUsSection from "@/components/Home/WhyChooseUsSection";
import WorkflowShowcaseSection from "@/components/Home/WorkflowShowcaseSection";
import CallToActionSection from "@/components/Home/CallToActionSection";
import BookConsultationSection from "@/components/Home/BookConsultationSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <div className="relative z-0 overflow-visible">
        <AboutSection />
        <WorkflowShowcaseSection />
      </div>
      <TestimonialsSection />
      <WhyChooseUsSection />
      <BookConsultationSection />
      <CallToActionSection />
    </Layout>
  );
};

export default Index;
