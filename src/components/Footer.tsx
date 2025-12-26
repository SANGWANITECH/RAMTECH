// src/components/Footer.tsx
import { Facebook, Twitter, Mail, ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black-800 py-12 px-10 md:px-20 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & About */}
        <div className="space-y-4">
          <h2
            className="text-2xl font-bold flex items-center text-red-500"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            <span className="w-1 h-6 bg-red-500 mr-2 rounded-sm"></span>
            RAMTECH
          </h2>
          <p className="text-sm leading-relaxed">
            RamTech is a tech movement empowering youth across Malawi with
            digital skills through lessons, mentorship, and real-world projects.
          </p>
          <div className="flex space-x-3">
            <a
              href="#"
              className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/2659xxxxxxx"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
            >
              <FaWhatsapp className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h3
            className="text-xl text-red-800 mb-4"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-3">
          <h3
            className="text-xl text-red-800 mb-4"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>IT Consultancy</li>
            <li>Cybersecurity</li>
            <li>Networking</li>
            <li>Digital Skills Training</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h3
            className="text-xl text-red-900 mb-4"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Contact Us
          </h3>
          <p className="text-sm">zomba, Malawi</p>
          <p className="text-sm">Email: info@ramtech.com</p>
          <p className="text-sm">Phone: +265 998837985</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
        <p className="px-6 md:px-20 text-center md:text-left">
          © {new Date().getFullYear()} RamTech. All Rights Reserved.
        </p>
        <a
          href="#"
          className="flex items-center mt-4 md:mt-0 text-red-500 hover:text-red-600 transition"
        >
          Back to top <ArrowUp className="ml-2 h-4 w-4" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
