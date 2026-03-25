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
    }, 1500); // Reduced from 8000ms → better UX + SEO
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>RamTech | Empowering Youth with Digital Skills</title>
        <meta
          name="description"
          content="RamTech is a youth-driven tech movement focused on building digital skills through lessons, projects, and practical tech solutions."
        />
        <meta name="author" content="RamTech Team" />

        {/* Canonical */}
        <link rel="canonical" href="https://ram-techs.online" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

   
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
        <meta name="twitter:image" content="https://ram-techs.online/ram.jpg" />

      
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "RamTech",
            "url": "https://ram-techs.online",
            "logo": "https://ram-techs.online/ram.jpg",
            "sameAs": [
              "https://facebook.com/yourpage",
              "https://twitter.com/yourhandle",
              "https://linkedin.com/company/ramtech"
            ]
          })}
        </script>
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