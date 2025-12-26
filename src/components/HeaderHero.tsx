import { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import logoSrc from "../assets/logo.png";
import hero1 from "../assets/hero1.jpg";

const HeaderHero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Advanced nav link style with underline animation
  const navClass =
    "relative px-3 py-1 rounded-md transition-all duration-300 " +
    "hover:bg-red-600 hover:text-white " +
    "after:content-[''] after:absolute after:left-0 after:-bottom-1 " +
    "after:w-0 after:h-[2px] after:bg-red-500 " +
    "after:transition-all after:duration-300 hover:after:w-full";

  return (
    <div
      className="relative w-full h-[75vh] md:h-[85vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${hero1})`,
        fontFamily: "'Orbitron', sans-serif"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Header */}
      <header className="absolute top-0 left-0 w-full z-20">
        <div
          className="md:mx-8 md:mt-6 md:px-6 px-4 py-3 flex items-center justify-between
                     bg-white/10 backdrop-blur-sm border border-white/20 rounded-md md:rounded-lg"
        >
          {/* Left links (desktop only) */}
          <nav className="hidden md:flex space-x-10 text-white font-medium text-sm">
            <a href="#home" className={navClass}>Home</a>
            <a href="#services" className={navClass}>Solutions</a>
            <a href="#portfolio" className={navClass}>Projects</a>
          </nav>

          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logoSrc} alt="RamTech Logo" className="h-7 md:h-9" />
          </div>

          {/* Right links (desktop only) */}
          <nav className="hidden md:flex space-x-10 text-white font-medium text-sm">
            <a href="#about" className={navClass}>About Us</a>
            <a href="#testimonials" className={navClass}>Testimonials</a>
            <a href="#contact" className={navClass}>Contact Us</a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-3xl"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/80 text-white py-6 grid grid-cols-2 gap-4 text-center"
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

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6">
        <motion.h1
          className="text-3xl md:text-6xl font-bold text-white uppercase"
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
          className="mt-4 text-base md:text-xl text-gray-300 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          RamTech is a <span className="font-semibold text-red-700">tech movement</span> empowering youth across the country with digital skills through lessons and practical projects.
        </motion.p>

        <motion.a
          href="https://wa.me/265998837985?text=Hello%20RamTech"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition"
          whileHover={{ scale: 1.1 }}
        >
          Hire us →
        </motion.a>
      </div>
    </div>
  );
};

export default HeaderHero;
