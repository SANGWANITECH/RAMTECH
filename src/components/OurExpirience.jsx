import { ArrowRight, Code } from "lucide-react";
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
      title: "Lost and Found",
      description:
        "The RamTech team built a Lost and Found application where students can report and access lost items.",
      logos: ["/lost.png"],
      link: "#",
      buttonText: "Download App"
    },
    {
      title: "Programming Tutorials",
      description:
        "The RamTech team has been offering programming lessons in Java and web development to UNIMA students for over two years.",
      logos: [],
      link: "#",
      buttonText: "Check on our page",
      icon: true
    }
  ];

  return (
    <div className="min-h-screen bg-white py-8 md:py-4 px-4">
      <Helmet>
        <title>RamTech Projects | Our Experience</title>
        <meta
          name="description"
          content="Explore the projects and programming lessons offered by RamTech, empowering youth with real-world digital skills."
        />
        <meta property="og:title" content="RamTech Projects | Our Experience" />
        <meta
          property="og:description"
          content="Explore the projects and programming lessons offered by RamTech, empowering youth with real-world digital skills."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ram-tech.netlify.app/#portfolio" />
        <meta property="og:image" content="https://ram-tech.netlify.app/ram.jpg" />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-1 h-10 bg-red-600" />
          <h1
            className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Our Experience / Projects
          </h1>
        </div>

        {/* Sub text */}
        <p className="text-sm md:text-base text-gray-600 max-w-3xl mb-10 ml-4">
          Below are some of the projects and programming lessons that RamTech has
          successfully delivered to empower students with practical digital skills.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image / Icon */}
              <div className="bg-gray-200 h-40 md:h-48 flex items-center justify-center p-4">
                {project.icon ? (
                  <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center">
                    <Code className="w-10 h-10 text-white" />
                  </div>
                ) : (
                  project.logos.map((logo, i) => (
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
                  ))
                )}
              </div>

              {/* Content */}
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

                {/* Animated Button */}
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
                  {project.buttonText}
                  <ArrowRight className="w-4 h-4" />
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
