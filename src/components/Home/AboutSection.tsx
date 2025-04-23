
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { Users, Rocket, Bulb, BookOpen, MessageSquare, Award } from "lucide-react";

const founders = [
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

const highlights = [
  {
    label: "Simplicity",
    desc: "We make automation easy to use, not just powerful.",
    icon: Award,
  },
  {
    label: "Innovation",
    desc: "We stay ahead with cutting-edge AI and no-code technologies.",
    icon: Bulb,
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-12">
          <div>
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
          </div>

          <div>
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
          </div>
        </div>

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
              “Automation shouldn't be complicated — it should just work.”
            </blockquote>
            <p className="text-secondary-slate max-w-3xl mx-auto">
              What began as a vision between two passionate minds — one rooted in applied mathematics, the other in artificial intelligence — quickly evolved into a mission to reshape the future of business operations.
              <br /><br />
              Frustrated by clunky systems and inaccessible tech, our founders set out to build something different: Automation that’s intelligent, intuitive, and inclusive.
              <br /><br />
              From day one, we committed to blending deep technical expertise with a people-first approach — creating solutions that feel less like tools and more like trusted teammates.
              <br /><br />
              Since then, Digimatika has empowered hundreds of businesses to automate what matters most — from intelligent customer conversations to seamless backend operations. With custom-built AI chatbots, voice agents, and no-code workflow systems, we help teams move faster, serve better, and grow stronger.
              <br /><br />
              <span className="font-bold text-primary-navy">And this is just the beginning.</span>
              <br />
              Together, we’re building a future where automation works for everyone — simply, smartly, and at scale.
            </p>
          </motion.div>
        </div>

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
      </div>
    </section>
  );
};

export default AboutSection;
