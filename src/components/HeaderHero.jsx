import { useState, useEffect, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { X } from "lucide-react";
import hero1 from "../assets/hero1.jpg";

const NetworkScene = lazy(() => import("./NetworkScene"));

const HeaderHero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const navClass =
    "relative px-3 py-1 rounded-md transition-all duration-300 " +
    "hover:bg-red-600 hover:text-white " +
    "after:content-[''] after:absolute after:left-0 after:-bottom-1 " +
    "after:w-0 after:h-[2px] after:bg-red-500 " +
    "after:transition-all after:duration-300 hover:after:w-full";

  return (
    <div
      className="relative w-full min-h-[75vh] md:min-h-[90vh] overflow-hidden"
      style={
        isDesktop
          ? { fontFamily: "'Orbitron', sans-serif" }
          : {
              fontFamily: "'Orbitron', sans-serif",
              backgroundImage: `url(${hero1})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }
      }
    >
      {/* Desktop background, dark gradient behind the node network */}
      {isDesktop && (
        <div className="absolute inset-0 bg-[#0B0E14] bg-gradient-to-br from-[#0B0E14] via-[#0B0E14] to-[#11151D] z-0" />
      )}

      {/* Mobile background, the drone photo with a dark overlay, same as before */}
      {!isDesktop && <div className="absolute inset-0 bg-black/75 z-0" />}

      {/* Hidden SEO image on desktop, kept for alt text and search indexing since the photo is not shown there */}
      {isDesktop && (
        <img
          src={hero1}
          alt="RamTech digital skills training and technology solutions"
          className="hidden"
        />
      )}

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-20 bg-gray-950">
        <div
          className="md:mx-8 md:mt-6 md:px-6 px-4 py-3 flex items-center justify-between
                     bg-white/10 backdrop-blur-sm border border-white/20 rounded-md md:rounded-lg"
        >
          <nav className="hidden md:flex space-x-10 text-white font-medium text-sm">
            <a href="#home" className={navClass}>Home</a>
            <a href="#services" className={navClass}>Solutions</a>
            <a href="#portfolio" className={navClass}>Projects</a>
          </nav>

          <div className="flex-shrink-0">
            <h2 className="text-xl md:text-2xl font-bold tracking-widest text-white">
              RAM<span className="text-red-600">TECH</span>
            </h2>
          </div>

          <nav className="hidden md:flex space-x-10 text-white font-medium text-sm">
            <a href="#about" className={navClass}>About Us</a>
            <a href="#testimonials" className={navClass}>Testimonials</a>
            <a href="#contact" className={navClass}>Contact Us</a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-3xl"
          >
            {menuOpen ? "\u2715" : "\u2630"}
          </button>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/90 text-white py-6 grid grid-cols-2 gap-4 text-center"
          >
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Solutions</a>
            <a href="#portfolio" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
            <a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a>
          </motion.div>
        )}
      </header>

      {isDesktop ? (
        /* Desktop hero, text left, interactive node network right */
        <div className="relative z-10 flex flex-row items-center justify-between gap-6 pt-40 pb-16 px-16 max-w-7xl mx-auto">
          <div className="flex flex-col items-start text-left max-w-xl">
            <h1 className="hidden">
              RamTech, Empowering Youth with Digital Skills in Malawi
            </h1>

            <p
              className="mb-4 text-sm tracking-[0.3em] text-cyan-400"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              RAMTECH MALAWI
            </p>

            <motion.h1
              className="text-5xl font-bold text-white uppercase"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Typewriter
                words={["WELCOME TO RAMTECH"]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={90}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </motion.h1>

            <motion.p
              className="mt-4 text-lg text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              RamTech is a <span className="font-semibold text-red-500">tech movement</span> empowering youth across Malawi with digital skills, while building real software, AI and fintech systems for institutions across the country.
            </motion.p>

            <motion.div
              className="mt-6 flex flex-row gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              <motion.a
                href="https://wa.me/265998837985?text=Hello%20RamTech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-semibold"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
              >
                Hire us
              </motion.a>

              <motion.a
                href="#portfolio"
                className="inline-block border border-white/30 text-white px-6 py-3 rounded-full font-semibold"
                whileHover={{ scale: 1.06, borderColor: "rgba(34,211,238,0.7)" }}
                whileTap={{ scale: 0.96 }}
              >
                View our work
              </motion.a>
            </motion.div>

            <p
              className="mt-8 text-[11px] text-gray-500 tracking-wide"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              Click a dot in the network to see what we build
            </p>
          </div>

          {/* Network panel, no border, blended into the hero background */}
          <div className="relative w-[46%] h-[420px]">
            <Suspense fallback={null}>
              <NetworkScene onSelectNode={setSelectedNode} />
            </Suspense>

            <AnimatePresence>
              {selectedNode && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[80%] bg-[#11151D] border border-white/10 rounded-xl p-4 text-left"
                >
                  <button
                    onClick={() => setSelectedNode(null)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-white"
                    aria-label="Close"
                  >
                    <X size={16} />
                  </button>

                  {selectedNode.type === "service" ? (
                    <>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                          <selectedNode.icon size={16} />
                        </div>
                        <h3 className="text-white font-semibold text-sm">{selectedNode.title}</h3>
                      </div>
                      <p className="text-gray-400 text-xs leading-relaxed mb-3">{selectedNode.desc}</p>
                      <a
                        href={`#${selectedNode.key}`}
                        onClick={() => setSelectedNode(null)}
                        className="text-cyan-400 text-xs font-medium hover:text-cyan-300"
                      >
                        See this service
                      </a>
                    </>
                  ) : (
                    <>
                      <h3 className="text-white font-semibold text-sm mb-1">{selectedNode.name}</h3>
                      <p className="text-gray-400 text-xs">{selectedNode.role}, RamTech founder</p>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      ) : (
        /* Mobile hero, the original drone photo, centered text, cleaned up buttons */
        <div className="relative z-10 flex flex-col justify-center items-center text-center min-h-[75vh] px-6 pt-28 pb-12">
          <h1 className="hidden">
            RamTech, Empowering Youth with Digital Skills in Malawi
          </h1>

          <motion.h1
            className="text-3xl font-bold text-white uppercase"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typewriter
              words={["WELCOME TO RAMTECH"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </motion.h1>

          <motion.p
            className="mt-4 text-base text-gray-300 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            RamTech is a <span className="font-semibold text-red-500">tech movement</span> empowering youth across Malawi with digital skills, while building real software, AI and fintech systems for institutions across the country.
          </motion.p>

          <motion.a
            href="https://wa.me/265998837985?text=Hello%20RamTech"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-red-600 text-white px-6 py-3 rounded-full font-semibold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
          >
            Hire us
          </motion.a>
        </div>
      )}
    </div>
  );
};

export default HeaderHero;