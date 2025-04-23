
import { motion } from "framer-motion";
import { AnimationProps } from "./types";

const AboutHeader = ({ isInView, itemVariants }: AnimationProps) => {
  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={itemVariants}
      className="text-center mb-12"
    >
      <div className="mb-3">
        <span className="text-accent-coral text-lg font-semibold tracking-widest uppercase">
          About Digimatika
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4">
        About Us
      </h2>
      <div className="w-24 h-1 bg-accent-coral mx-auto mb-6"></div>
      <p className="text-lg text-secondary-slate max-w-2xl mx-auto">
        At Digimatika, we believe automation should be intuitive, human-centered, and accessible to every business — no matter the size. We fuse creativity with AI to craft intelligent systems that drive efficiency, reduce complexity, and elevate customer experiences.
      </p>
    </motion.div>
  );
};

export default AboutHeader;
