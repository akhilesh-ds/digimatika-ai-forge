
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { AnimationProps } from "./types";

const StorySection = ({ isInView, itemVariants }: AnimationProps) => {
  return (
    <div className="mb-12">
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={itemVariants}
        className="text-center mb-8"
      >
        <div className="flex items-center gap-3 justify-center mb-2">
          <BookOpen className="text-accent-coral" size={28} />
          <span className="text-primary-navy text-xl md:text-2xl font-bold">
            Our Story: A Journey of Innovation
          </span>
        </div>
        <p className="text-secondary-slate max-w-2xl mx-auto text-md mb-2">
          Digimatika was founded in October 2024 with one powerful belief:
        </p>
        <blockquote className="italic text-accent-coral font-semibold text-lg mt-2 mb-4">
          "Automation shouldn't be complicated — it should just work."
        </blockquote>
        <p className="text-secondary-slate max-w-3xl mx-auto">
          What began as a vision between two passionate minds — one rooted in applied mathematics, the other in artificial intelligence — quickly evolved into a mission to reshape the future of business operations.
          <br /><br />
          Frustrated by clunky systems and inaccessible tech, our founders set out to build something different: Automation that's intelligent, intuitive, and inclusive.
          <br /><br />
          From day one, we committed to blending deep technical expertise with a people-first approach — creating solutions that feel less like tools and more like trusted teammates.
          <br /><br />
          Since then, Digimatika has empowered hundreds of businesses to automate what matters most — from intelligent customer conversations to seamless backend operations. With custom-built AI chatbots, voice agents, and no-code workflow systems, we help teams move faster, serve better, and grow stronger.
          <br /><br />
          <span className="font-bold text-primary-navy">And this is just the beginning.</span>
          <br />
          Together, we're building a future where automation works for everyone — simply, smartly, and at scale.
        </p>
      </motion.div>
    </div>
  );
};

export default StorySection;
