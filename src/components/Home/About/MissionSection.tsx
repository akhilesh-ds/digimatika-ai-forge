
import { motion } from "framer-motion";
import { Rocket, Award, Lightbulb, Users } from "lucide-react";
import { AnimationProps, HighlightType } from "./types";

const highlights: HighlightType[] = [
  {
    label: "Simplicity",
    desc: "We make automation easy to use, not just powerful.",
    icon: Award,
  },
  {
    label: "Innovation",
    desc: "We stay ahead with cutting-edge AI and no-code technologies.",
    icon: Lightbulb,
  },
  {
    label: "Empathy",
    desc: "Every solution is built with real users and real pain points in mind.",
    icon: Users,
  },
  {
    label: "Trust",
    desc: "Our clients rely on us to deliver results that are measurable and meaningful.",
    icon: Rocket,
  },
];

const MissionSection = ({ isInView, itemVariants }: AnimationProps) => {
  return (
    <>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={itemVariants}
        className="mb-10"
      >
        <div className="flex items-center gap-3 mb-2">
          <Rocket className="text-accent-coral" size={28} />
          <span className="text-primary-navy text-xl md:text-2xl font-bold">
            Our Mission
          </span>
        </div>
        <p className="text-accent-coral text-lg font-semibold mb-2">
          To empower businesses with smart, scalable automation powered by AI — enabling them to move faster, serve better, and grow stronger.
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={itemVariants}
      >
        <div className="flex items-center gap-3 mb-3">
          <Award className="text-accent-coral" size={24} />
          <span className="text-primary-navy text-xl md:text-2xl font-bold">
            What We Stand For
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
          {highlights.map(({label, desc, icon: Icon}) => (
            <div
              key={label}
              className="bg-white rounded-xl shadow p-5 h-full flex flex-col items-start gap-2"
            >
              <Icon className="text-accent-coral mb-1" size={22} />
              <div className="font-bold text-primary-navy">{label}</div>
              <div className="text-secondary-slate text-sm">{desc}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default MissionSection;
