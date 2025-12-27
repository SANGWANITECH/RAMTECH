import { Mail } from "lucide-react";
import { motion } from "framer-motion";

function Works_With() {
  const email = "sangwantech23@gmail.com";
  const subject = "Working with RamTech";
  const body =
    "Hello RamTech Team,%0D%0A%0D%0AI am interested in working with you. Please let me know how we can collaborate.%0D%0A%0D%0AThank you.";

  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="border border-gray-200 rounded-xl p-6 md:p-10">

          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-10 bg-red-600" />
            <h1
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              Work With Us
            </h1>
          </div>

          <p className="text-sm md:text-base text-gray-600 max-w-3xl mb-10 ml-4">
            We are <span className="font-semibold text-gray-900">RamTech</span> — a
            youth-driven tech startup focused on building real-world digital
            solutions and empowering students with practical tech skills.
            If you want to collaborate, build, or grow with us, let’s talk.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
            
            <div className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center">
              <Mail className="w-7 h-7 text-white" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Let’s build something meaningful
              </h3>
              <p className="text-sm text-gray-600">
                Send us an email and we’ll get back to you as soon as possible.
              </p>
            </div>

            {/* SAME animation style as Visit Site */}
            <motion.a
              href={`mailto:${email}?subject=${subject}&body=${body}`}
              className="px-8 py-3 bg-red-500 text-white font-medium rounded-full flex items-center justify-center text-sm md:text-base"
              animate={{
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{
                scale: 1.12,
                backgroundColor: "#dc2626"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Send Email
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works_With;
