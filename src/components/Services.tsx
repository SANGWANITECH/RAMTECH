import React from "react";
import { FaLaptopCode, FaBrain, FaPaintBrush, FaMobileAlt, FaWindows, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

type Service = {
  key: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const SERVICES: Service[] = [
  {
    key: "web-dev",
    title: "Web Development",
    desc: "Custom responsive websites and progressive web apps using modern stacks (React, Next, or static sites). We focus on performance, accessibility and real-world UX.",
    icon: <FaLaptopCode size={22} />
  },
  {
    key: "ai",
    title: "AI Integration",
    desc: "Integrate AI-powered features into your products — chatbots, data-driven recommendations, and automation to scale workflows and improve decision making.",
    icon: <FaBrain size={22} />
  },
  {
    key: "graphic",
    title: "Graphic Design",
    desc: "Branding, UI/UX assets, and marketing graphics crafted to communicate clearly and look professional across print and digital channels.",
    icon: <FaPaintBrush size={22} />
  },
  {
    key: "mobile",
    title: "Mobile App Dev",
    desc: "Cross-platform mobile apps built with Flutter or React Native — fast prototyping, native-like performance and smooth UX for Android & iOS.",
    icon: <FaMobileAlt size={22} />
  },
  {
    key: "windows",
    title: "Windows Installation",
    desc: "Reliable OS setup and configuration for desktops and laptops — installations, drivers, system tuning and secure baseline configuration.",
    icon: <FaWindows size={22} />
  },
  {
    key: "hardware",
    title: "Physical PC Problems",
    desc: "Hardware troubleshooting and repairs: diagnostics, component replacement and optimization so your systems stay productive and reliable.",
    icon: <FaTools size={22} />
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-20 bg-white"
      style={{ fontFamily: "'Orbitron', sans-serif" }} // headings use Orbitron
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <div className="flex items-start gap-6 mb-12">
          <div className="w-2 h-12 bg-red-600 rounded mr-3" />
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Our Best Services</h2>
            <p
              className="text-gray-600 max-w-xl mt-2 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }} // body text uses Inter for readability
            >
              We provide the best services and our customers witness the magic in plain sight. 
              Let’s change the world together — hire us now.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((s) => (
            <motion.article
              key={s.key}
              variants={cardVariants}
              className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 inline-flex items-center justify-center border border-red-100">
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              </div>

              <p
                className="text-sm text-gray-600 mb-4 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }} // card description readable
              >
                {s.desc}
              </p>

              <div className="mt-auto">
                <a
                  href={`#${s.key}`}
                  className="inline-block px-4 py-2 rounded-full border border-red-100 text-sm text-red-600 hover:bg-red-50 transition"
                  style={{ fontFamily: "'Inter', sans-serif" }} // link text readable
                >
                  Read More
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
