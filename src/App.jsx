import "./App.css";
import AboutUs from "./components/AboutUs";
import HeaderHero from "./components/HeaderHero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Works_With from "./components/Works_With";
import OurExpirience from "./components/OurExpirience";
import Testimonial from "./components/Testimonial";

function App() {
  return (
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
  );
}

export default App;
