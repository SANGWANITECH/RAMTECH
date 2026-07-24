import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-16"
      style={{ backgroundImage: "url('/cont.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Contact Details
        </motion.h2>

        <p className="text-gray-200 max-w-2xl mb-10">
          RamTech is a youth led startup empowering students with tech skills and building software, AI, and fintech solutions in Malawi.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="flex items-center space-x-3">
            <span className="bg-red-600 p-3 rounded-full">
              <Phone className="w-5 h-5" />
            </span>
            <p style={{ fontFamily: "'Courier New', monospace" }}>+265 998 837 985</p>
          </div>

          <div className="flex items-center space-x-3">
            <span className="bg-red-600 p-3 rounded-full">
              <Phone className="w-5 h-5" />
            </span>
            <p style={{ fontFamily: "'Courier New', monospace" }}>+265 997 876 534</p>
          </div>

          <div className="flex items-center space-x-3">
            <span className="bg-red-600 p-3 rounded-full">
              <Phone className="w-5 h-5" />
            </span>
            <p style={{ fontFamily: "'Courier New', monospace" }}>+265 883 541 708</p>
          </div>

          <div className="flex items-center space-x-3">
            <span className="bg-red-600 p-3 rounded-full">
              <Mail className="w-5 h-5" />
            </span>
            <p style={{ fontFamily: "'Courier New', monospace" }}>ramtech@gmail.com</p>
          </div>

          <div className="flex items-center space-x-3">
            <span className="bg-red-600 p-3 rounded-full">
              <MapPin className="w-5 h-5" />
            </span>
            <p>Zomba, UNIMA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
