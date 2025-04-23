
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { AnimationProps, FounderType } from "./types";

const founders: FounderType[] = [
  {
    name: "Krishna Muraya",
    role: "CEO & Co-Founder",
    desc: "Visionary leader with a deep passion for responsible AI and automation at scale.",
    img: "/lovable-uploads/photo-1581091226825-a6a2a5aee158",
  },
  {
    name: "Akhilesh Yadav",
    role: "CTO & Co-Founder",
    desc: "Mathematics-driven innovator building the technical foundation for seamless, smart workflows.",
    img: "/lovable-uploads/photo-1581092795360-fd1ca04f0952",
  },
];

const FoundersSection = ({ isInView, itemVariants }: AnimationProps) => {
  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={itemVariants}
      className="mb-8"
    >
      <div className="flex items-center gap-3 mb-4">
        <Users className="text-accent-coral" size={28} />
        <span className="text-primary-navy text-xl md:text-2xl font-bold">
          Meet the Founders
        </span>
      </div>
      <div className="flex flex-col gap-6">
        {founders.map((f) => (
          <div
            key={f.name}
            className="bg-white rounded-xl shadow-md px-6 py-5 flex items-center gap-6"
          >
            <img
              src={f.img}
              alt={f.name}
              className="w-20 h-20 object-cover rounded-full border-4 border-accent-coral shadow"
            />
            <div>
              <span className="font-bold text-primary-navy text-lg block">{f.name}</span>
              <span className="text-accent-coral font-medium block">{f.role}</span>
              <p className="text-secondary-slate text-sm mt-2">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default FoundersSection;
