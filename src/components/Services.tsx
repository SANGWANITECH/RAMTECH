import React from "react";
import { FaLaptopCode, FaBrain, FaMobileAlt, FaPaintBrush, FaWindows, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

type Service = {
  key: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const DEVELOPMENT_SERVICES: Service[] = [
  {
    key: "web-dev",
    title: "Web Development",
    desc: "Custom responsive websites and progressive web apps using modern stacks such as React and Next. Built for performance, accessibility, and real world use.",
    icon: <FaLaptopCode size={22} />
  },
  {
    key: "ai",
    title: "AI Integration",
    desc: "AI powered features for your product: chatbots, data driven recommendations, and automation that removes manual work from a team's daily workflow.",
    icon: <FaBrain size={22} />
  },
  {
    key: "mobile",
    title: "Mobile App Development",
    desc: "Cross platform mobile apps built with Flutter or React Native, with fast prototyping and native feeling performance on Android and iOS.",
    icon: <FaMobileAlt size={22} />
  }
];

const SUPPORT_SERVICES: Service[] = [
  {
    key: "graphic",
    title: "Graphic Design",
    desc: "Branding, UI and UX assets, and marketing graphics that communicate clearly and look professional across print and digital channels.",
    icon: <FaPaintBrush size={22} />
  },
  {
    key: "windows",
    title: "Windows Installation",
    desc: "OS setup and configuration for desktops and laptops: installations, drivers, system tuning, and secure baseline configuration.",
    icon: <FaWindows size={22} />
  },
  {
    key: "hardware",
    title: "Hardware Troubleshooting",
    desc: "Diagnostics, component replacement, and optimization to keep desktops and laptops productive and reliable.",
    icon: <FaTools size={22} />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

function ServiceGrid({ services }: { services: Service[] }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {services.map((s) => (
        <motion.article
          key={s.key}
          id={s.key}
          variants={cardVariants}
          whileHover={{ y: -4 }}
          className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition scroll-mt-28"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 inline-flex items-center justify-center border border-red-100">
              {s.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              {s.title}
            </h3>
          </div>

          <p
            className="text-sm text-gray-600 mb-4 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {s.desc}
          </p>

          <a
            href={`#${s.key}`}
            className="inline-block px-4 py-2 rounded-full border border-red-100 text-sm text-red-600 hover:bg-red-50 transition"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Read More
          </a>
        </motion.article>
      ))}
    </motion.div>
  );
}

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-20 bg-white"
      style={{ fontFamily: "'Orbitron', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-start gap-6 mb-12">
          <div className="w-2 h-12 bg-red-600 rounded" />
          <div>
            <h2 className="text-3xl font-bold text-gray-900">What We Build and Support</h2>
            <p
              className="text-gray-600 max-w-xl mt-2 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Software and AI systems for institutions, plus hands on support for the devices that keep a team running.
            </p>
          </div>
        </div>

        <p
          className="text-xs uppercase tracking-widest text-gray-400 mb-4"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          Development
        </p>
        <ServiceGrid services={DEVELOPMENT_SERVICES} />

        <p
          className="text-xs uppercase tracking-widest text-gray-400 mt-14 mb-4"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          Design and Device Support
        </p>
        <ServiceGrid services={SUPPORT_SERVICES} />
      </div>
    </section>
  );
};

export default Services;
