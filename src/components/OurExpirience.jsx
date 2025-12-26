import { ArrowRight } from "lucide-react";

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
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-8 md:mb-10 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1 h-8 md:h-10 bg-red-600"></div>
              <h1
                className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Our Experience / Projects
              </h1>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Logos */}
              <div className="bg-gray-200 h-40 md:h-48 flex items-center justify-center gap-4 p-4">
                {project.logos.map((logo, i) => (
                  <div
                    key={i}
                    className="w-28 h-28 md:w-36 md:h-36 bg-white rounded-md overflow-hidden flex items-center justify-center"
                  >
                    <img
                      src={logo}
                      alt="Project logo"
                      className={`w-full h-full ${
                        logo.includes("unim") || logo.includes("lost")
                          ? "object-cover"
                          : "object-contain"
                      }`}
                    />
                  </div>
                ))}
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <h3
                  className="text-base md:text-lg font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  {project.title}
                </h3>

                <p className="text-[15px] md:text-sm text-gray-600 leading-relaxed mb-4">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-red-400 hover:bg-red-500 text-white font-medium py-2.5 md:py-3 px-4 rounded-lg transition-colors text-sm md:text-base flex items-center justify-center gap-2 group"
                >
                  Visit the site
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurExpirience;
