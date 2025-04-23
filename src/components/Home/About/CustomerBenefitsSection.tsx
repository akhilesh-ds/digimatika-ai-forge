
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { AnimationProps } from "./types";

const CustomerBenefitsSection = ({ isInView, itemVariants }: AnimationProps) => {
  return (
    <div className="mt-10">
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={itemVariants}
        className="text-center"
      >
        <div className="flex items-center gap-3 justify-center mb-2">
          <MessageSquare className="text-accent-coral" size={28} />
          <span className="text-primary-navy text-xl md:text-2xl font-bold">
            Why Our Customers Believe in Us
          </span>
        </div>
        <ul className="list-disc list-inside text-secondary-slate max-w-xl mx-auto text-md grid gap-1 mt-4 text-left">
          <li>Clarity in their operations</li>
          <li>More time to focus on growth</li>
          <li>Fewer errors and faster support</li>
          <li>Real trust in their tech solutions</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default CustomerBenefitsSection;
