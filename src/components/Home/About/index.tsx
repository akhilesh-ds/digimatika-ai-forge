
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import AboutHeader from "./AboutHeader";
import MissionSection from "./MissionSection";
import FoundersSection from "./FoundersSection";
import StorySection from "./StorySection";
import CustomerBenefitsSection from "./CustomerBenefitsSection";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const AboutSection = () => {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-customBg relative z-0"
    >
      <div className="container-custom relative z-10 max-w-6xl">
        <AboutHeader 
          isInView={isInView} 
          itemVariants={itemVariants} 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-12">
          <div>
            <MissionSection
              isInView={isInView}
              itemVariants={itemVariants}
            />
          </div>

          <div>
            <FoundersSection
              isInView={isInView}
              itemVariants={itemVariants}
            />
          </div>
        </div>

        <StorySection
          isInView={isInView}
          itemVariants={itemVariants}
        />

        <CustomerBenefitsSection
          isInView={isInView}
          itemVariants={itemVariants}
        />
      </div>
    </section>
  );
};

export default AboutSection;
