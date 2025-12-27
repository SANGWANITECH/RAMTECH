import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const OurExpirience = () => {
  const projects = [
    {
      title: "The UTM Website",
      description:
        "The RamTech dev team developed a comprehensive website system for the UTM party.",
      logos: ["/UTM.png"],
      link: "https://utm-website-eight.vercel.app"
    },
    {
      title: "TNT COLLECTION",
      description:
        "The RamTech developer team developed an e-commerce website management system for TNT Collection.",
      logos: ["/tnt.jpg"],
      link: "https://tnt-collection.store"
    },
    {
      title: "Lost and Found",
      description:
        "The RamTech team built a lost and found application where students can access lost items.",
      logos: ["/lost.png"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-8 md:py-4 px-4">
      {/* Helmet metadata for this section */}
      <Helmet>
        <title>RamTech Projects | Our Experience</title>
        <meta
          name="description"
          content="Check out RamTech's projects and see how we empower youth with digital skills through real-world applications."
        />
        <meta property="og:title" content="RamTech Projects | Our Experience" />
        <meta property="og:description" content="Check out RamTech's projects and see how we empower youth with digital skills through real-world applications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ram-tech.netlify.app/#portfolio" />
        <meta property="og:image" content="https://ram-tech.netlify.app/logo.png" />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1 h-10 bg-red-600" />
          <h1
            className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Our Experience / Projects
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-gray-200 h-40 md:h-48 flex items-center justify-center p-4">
                {project.logos.map((logo, i) => (
                  <div
                    key={i}
                    className="w-32 h-32 bg-white rounded-md flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={logo}
                      alt="Project logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>

              <div className="p-6">
                <h3
                  className="text-lg font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Animated button */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-red-500 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 text-sm md:text-base"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.12, backgroundColor: "#dc2626" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Visit the site
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurExpirience;
