
import { useEffect, useRef } from "react";
import Layout from "@/components/Layout/Layout";
import HeroSection from "@/components/Home/HeroSection";
import AboutSection from "@/components/Home/AboutSection";
import ServicesSection from "@/components/Home/ServicesSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import WhyChooseUsSection from "@/components/Home/WhyChooseUsSection";
import WorkflowShowcaseSection from "@/components/Home/WorkflowShowcaseSection";
import CallToActionSection from "@/components/Home/CallToActionSection";
import BookConsultationSection from "@/components/Home/BookConsultationSection";
import VideoShowcaseSection from "@/components/Home/VideoShowcaseSection";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  // Set up observer for scroll-based section loading
  const { ref: servicesRef, inView: servicesInView } = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  });
  
  // Add schema markup for the homepage
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Digimatika - AI Solutions for Business",
    "description": "AI-powered chatbots, voice agents, and automation solutions for modern businesses.",
    "publisher": {
      "@type": "Organization",
      "name": "Digimatika",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lovable.dev/opengraph-image-p98pqg.png"
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "AI Chatbots",
          "url": "https://digimatika.com/services/chatbots"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "AI Voice Agents",
          "url": "https://digimatika.com/services/voice-agents"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Workflow Automation",
          "url": "https://digimatika.com/services/workflow-automation"
        }
      ]
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Digimatika - AI Automation & Chatbot Solutions</title>
        <meta name="description" content="Digimatika provides AI-powered chatbots, voice agents, and workflow automation solutions to help businesses streamline operations and enhance customer experiences." />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      <HeroSection />
      
      <div ref={servicesRef}>
        {/* Only render services when in view or already seen */}
        {servicesInView && <ServicesSection />}
      </div>
      
      <div className="relative z-0 overflow-visible">
        <AboutSection />
        <WorkflowShowcaseSection />
      </div>
      
      <VideoShowcaseSection />
      <TestimonialsSection />
      <WhyChooseUsSection />
      <BookConsultationSection />
      <CallToActionSection />
    </Layout>
  );
};

export default Index;
