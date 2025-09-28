import { useState } from "react";
import {
  FaLaptopCode,
  FaFileExcel,
  FaDatabase,
  FaBusinessTime,
  FaCloud,
  FaNetworkWired,
  FaLock,
  FaMobileAlt,
  FaChartBar,
  FaUserTie,
} from "react-icons/fa";
import ServiceCard from "./ServiceCards";

export default function Services() {
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      title: "Web Development",
      description:
        "Hands-on training in building responsive and modern websites from scratch.",
      icon: <FaLaptopCode size={32} className="text-blue-400" />,
    },
    {
      title: "Excel",
      description:
        "Learn advanced Excel skills including formulas, pivot tables, and data analysis.",
      icon: <FaFileExcel size={32} className="text-green-500" />,
    },
    {
      title: "Access",
      description:
        "Master Microsoft Access for database management and automation.",
      icon: <FaDatabase size={32} className="text-yellow-500" />,
    },
    {
      title: "Business Management",
      description:
        "Gain essential skills to manage and grow successful businesses.",
      icon: <FaBusinessTime size={32} className="text-purple-400" />,
    },
    {
      title: "Cloud Computing",
      description:
        "Introduction to cloud services, deployment, and virtualization.",
      icon: <FaCloud size={32} className="text-indigo-400" />,
    },
    {
      title: "Networking",
      description:
        "Learn how to design, configure, and manage computer networks.",
      icon: <FaNetworkWired size={32} className="text-teal-400" />,
    },
    {
      title: "Cybersecurity",
      description:
        "Understand core security principles to protect systems and data.",
      icon: <FaLock size={32} className="text-red-500" />,
    },
    {
      title: "Mobile Development",
      description:
        "Build mobile apps and understand cross-platform development tools.",
      icon: <FaMobileAlt size={32} className="text-pink-400" />,
    },
    {
      title: "Data Analytics",
      description:
        "Learn to analyze data and visualize insights for better decision-making.",
      icon: <FaChartBar size={32} className="text-orange-400" />,
    },
    {
      title: "Leadership Training",
      description:
        "Develop leadership and professional skills for career growth.",
      icon: <FaUserTie size={32} className="text-gray-400" />,
    },
  ];

  // Determine how many cards to show
  const visibleServices = showAll ? services : services.slice(0, 3);

  return (
    <section id="services" className="bg-black pt-50 text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-8xl font-bold mb-10">SERVICES</h2>
        <p className="text-gray-300 text-2xl max-w-8xl mx-auto justify-center mb-20">
         RAB Technology is a forward-thinking technology solutions company that provides reliable
         and innovative IT training services to businesses and individuals. We specialize in
         software development, network solutions, cloud services, and technical support,
         helping clients streamline operations and embrace digital transformation. 
        </p>

        <div className="grid gap-8 md:grid-cols-3 mb-6">
          {visibleServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded transition"
          >
            View All
          </button>
        )}
      </div>
    </section>
  );
}
