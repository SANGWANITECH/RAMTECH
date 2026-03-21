import { useState, useEffect } from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import Preloader from "./components/Preloader";
import AboutUs from "./components/AboutUs";
import HeaderHero from "./components/HeaderHero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Works_With from "./components/Works_With";
import OurExpirience from "./components/OurExpirience";
import Testimonial from "./components/Testimonial";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>RamTech | Empowering Youth with Digital Skills</title>
        <meta
          name="description"
          content="RamTech is a youth-driven tech movement focused on building digital skills through lessons, projects, and practical tech solutions."
        />
        <meta
          name="keywords"
          content="RamTech, ram tech, ramtech malawi, digital skills, youth tech, coding, tech projects, RamTech online"
        />
        <meta name="author" content="RamTech Team" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://ram-techs.online" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="RamTech | Empowering Youth with Digital Skills" />
        <meta
          property="og:description"
          content="RamTech is a youth-driven tech movement focused on building digital skills through lessons, projects, and practical tech solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ram-techs.online" />
        <meta property="og:image" content="https://ram-techs.online/ram.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RamTech | Empowering Youth with Digital Skills" />
        <meta
          name="twitter:description"
          content="RamTech is a youth-driven tech movement focused on building digital skills through lessons, projects, and practical tech solutions."
        />
        <meta name="twitter:image" content="https://ram-techs.online/logo.ram.jpg" />
      </Helmet>

      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <section id="home">
            <HeaderHero />
          </section>
          <section id="about">
            <AboutUs />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="testimonials">
            <Testimonial />
          </section>
          <section id="portfolio">
            <OurExpirience />
          </section>
          <section id="work">
            <Works_With />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;