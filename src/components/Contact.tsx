// src/components/Contact.tsx
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-16"
      style={{ backgroundImage: "url('/cont.jpg')" }}
    >
      {/* Dark overlay for fading */}
      <div className="absolute inset-0 bg-black/90"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Contact Details
        </motion.h2>

        {/* Small intro */}
        <p className="text-gray-200 max-w-2xl mb-10">
          RAM Tech is a youth-led startup empowering students with tech skills and building innovative digital solutions in Malawi.
        </p>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-4 gap-6 text-left">
          {/* Phone 1 */}
          <div className="flex items-center space-x-3">
            <span className="bg-red-600 p-3 rounded-full">
              <Phone className="w-5 h-5" />
            </span>
            <p>+265 (0) 9978765340</p>
          </div>

          {/* Phone 2 */}
          <div className="flex items-center space-x-3">
            <span className="bg-red-600 p-3 rounded-full">
              <Phone className="w-5 h-5" />
            </span>
            <p>+265 (0) 883541708</p>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3">
            <span className="bg-red-600 p-3 rounded-full">
              <Mail className="w-5 h-5" />
            </span>
            <p>Ramtech@gmail.com</p>
          </div>

          {/* Location */}
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
