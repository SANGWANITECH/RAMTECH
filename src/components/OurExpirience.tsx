import { ArrowRight, Code, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

type Project = {
  title: string;
  description: string;
  logos: string[];
  link: string;
  buttonText: string;
  tag: string;
  live: boolean;
  icon?: boolean;
};

const FLAGSHIP: Project[] = [
  {
    title: "SSPDS, Smart Surveillance System",
    description:
      "An AI powered surveillance system built for the Malawi Police Service, with real time face recognition and instant alerts.",
    logos: ["https://cdn-icons-png.flaticon.com/512/2942/2942909.png"],
    link: "https://github.com/SANGWANITECH/sspds",
    buttonText: "View on GitHub",
    tag: "AI and Security",
    live: true
  },
  {
    title: "ERBM, Exchange Rate Dashboard",
    description:
      "A financial intelligence dashboard built for the Reserve Bank of Malawi, tracking live MWK exchange rates and flagging anomalies.",
    logos: ["https://cdn-icons-png.flaticon.com/512/2910/2910768.png"],
    link: "https://github.com/SANGWANITECH/erbm",
    buttonText: "View on GitHub",
    tag: "Fintech",
    live: true
  }
];

const CLIENT_PROJECTS: Project[] = [
  {
    title: "The UTM Website",
    description: "A comprehensive website system built for the UTM party.",
    logos: ["/UTM.png"],
    link: "https://utm-website-eight.vercel.app",
    buttonText: "View Site",
    tag: "Client",
    live: true
  },
  {
    title: "Karonga FC United Website",
    description: "A full club website with a live CMS built for Karonga FC United.",
    logos: ["/karonga.avif"],
    link: "https://www.karongaunitedfc.online",
    buttonText: "View Site",
    tag: "Client",
    live: true
  },
  {
    title: "IFE, Immunization for Everyone",
    description: "An organizational website built for the IFE health NGO.",
    logos: ["/logo-full.png"],
    link: "https://ife-website.netlify.app/",
    buttonText: "View Site",
    tag: "NGO",
    live: true
  },
  {
    title: "Jam Park School Website",
    description: "A full school website built for Jam Park Private Secondary School.",
    logos: ["/jam.png"],
    link: "https://www.jamparksecondaryschool.site/",
    buttonText: "View Site",
    tag: "Education",
    live: true
  },
  {
    title: "Mphatso Motel Website",
    description: "A hospitality website for Mphatso Motel, with room listings, gallery, and WhatsApp booking.",
    logos: ["https://cdn-icons-png.flaticon.com/512/235/235861.png"],
    link: "https://mphatso-motel.vercel.app",
    buttonText: "View Site",
    tag: "Hospitality",
    live: true
  },
  {
    title: "Faith School Website",
    description: "A full school website built for Faith High School.",
    logos: ["/faith.jpg"],
    link: "https://faith-secondary-school.netlify.app",
    buttonText: "View Site",
    tag: "Education",
    live: true
  },
  {
    title: "Chigomezyo School Website",
    description: "A full school website built for Chigomezyo High School.",
    logos: ["/logo.png"],
    link: "https://chigomezyo-pvt-school.vercel.app/",
    buttonText: "View Site",
    tag: "Education",
    live: true
  },
  {
    title: "Car Sale Website",
    description: "A listings website built for a car dealership.",
    logos: ["/car.png"],
    link: "https://car-sell-frontend.vercel.app",
    buttonText: "View Site",
    tag: "Client",
    live: true
  }
];

const COMMUNITY: Project[] = [
  {
    title: "Touchless Computer Control System",
    description: "A touchless computer control system built to improve accessibility for computer users.",
    logos: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
    ],
    link: "#",
    buttonText: "In development",
    tag: "In progress",
    live: false
  },
  {
    title: "Lost and Found",
    description: "An app where students can report and search for lost items on campus.",
    logos: ["/lost.png"],
    link: "#",
    buttonText: "In development",
    tag: "In progress",
    live: false
  },
  {
    title: "Programming Tutorials",
    description: "Ongoing programming lessons for UNIMA students, running for over two years now.",
    logos: [],
    link: "https://wa.me/265998837985?text=Hi%20RamTech%2C%20I%27d%20like%20to%20join%20a%20programming%20class",
    buttonText: "Ask about joining",
    tag: "Community",
    live: true,
    icon: true
  }
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full">
      <div className="bg-gray-100 h-48 flex items-center justify-center p-6 flex-shrink-0 relative">
        <span
          className="absolute top-3 left-3 text-[10px] uppercase tracking-wide text-gray-500 bg-white/90 border border-gray-200 rounded-full px-2 py-1"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          {project.tag}
        </span>

        {project.icon ? (
          <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center">
            <Code className="w-10 h-10 text-white" />
          </div>
        ) : project.logos.length > 0 ? (
          <img
            src={project.logos[0]}
            alt={project.title}
            className="max-w-full max-h-full object-contain"
          />
        ) : null}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3
          className="text-lg font-bold text-gray-900 mb-2"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          {project.title}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {project.live ? (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-red-500 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 text-sm md:text-base mt-auto"
            whileHover={{ scale: 1.03, backgroundColor: "#dc2626" }}
            whileTap={{ scale: 0.97 }}
          >
            {project.buttonText}
            {project.link.includes("github.com") ? (
              <Github className="w-4 h-4" />
            ) : (
              <ArrowRight className="w-4 h-4" />
            )}
          </motion.a>
        ) : (
          <span className="w-full text-gray-500 font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 text-sm md:text-base mt-auto border border-dashed border-gray-300">
            {project.buttonText}
          </span>
        )}
      </div>
    </div>
  );
}

function ProjectSection({ title, subtitle, projects }: { title: string; subtitle: string; projects: Project[] }) {
  return (
    <div className="mb-16">
      <h2
        className="text-xl md:text-2xl font-bold text-gray-900 mb-1"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        {title}
      </h2>
      <p className="text-sm text-gray-500 mb-6">{subtitle}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

const OurExpirience = () => {
  return (
    <div className="min-h-screen bg-white py-8 md:py-4 px-4">
      <Helmet>
        <title>RamTech Projects, Our Experience</title>
        <meta
          name="description"
          content="Flagship AI and fintech systems, client websites, and community initiatives delivered by RamTech."
        />
        <meta property="og:title" content="RamTech Projects, Our Experience" />
        <meta
          property="og:description"
          content="Flagship AI and fintech systems, client websites, and community initiatives delivered by RamTech."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ram-techs.online/#portfolio" />
        <meta property="og:image" content="https://ram-techs.online/ram.jpg" />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-1 h-10 bg-red-600" />
          <h1
            className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Our Experience and Projects
          </h1>
        </div>

        <p className="text-sm md:text-base text-gray-600 max-w-3xl mb-10 ml-4">
          From institutional systems built for banks and law enforcement, to client sites and community programs.
        </p>

        <ProjectSection
          title="Flagship Systems"
          subtitle="AI and fintech systems built for institutional clients"
          projects={FLAGSHIP}
        />

        <ProjectSection
          title="Client Projects"
          subtitle="Websites delivered for real businesses, schools, and organizations"
          projects={CLIENT_PROJECTS}
        />

        <ProjectSection
          title="Community and In Progress"
          subtitle="Ongoing student initiatives and builds still in development"
          projects={COMMUNITY}
        />
      </div>
    </div>
  );
};

export default OurExpirience;
