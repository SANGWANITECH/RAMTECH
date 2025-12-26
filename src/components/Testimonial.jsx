import { useState } from "react";
import { ArrowRight, Star, X } from "lucide-react";

function Testimonial() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const testimonials = [
    {
      name: "Leilah Gondwe",
      rating: 5,
      image: "leilah.jpg",
      text:
        "I am a student at the University of Malawi. The RamTech team offered programming tutorials. The sessions were great and really boosted my coding skills."
    },
    {
      name: "Winnie Phiri",
      rating: 5,
      image: "ceo.jpg",
      text:
        "I am the owner of TNT Collection. I employed the RamTech team to build a website for my business. They delivered on time and exactly as requested. Truly trustworthy developers."
    },
    {
      name: "Mwai Zamadunga",
      rating: 5,
      image:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400",
      text:
        "I am a student at the University of Malawi. I had no programming knowledge until RamTech offered coding lessons. The sessions completely transformed my skills."
    }
  ];

  return (
    <div
      className="relative min-h-160 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url("test.jpg")'
      }}
    >
      <div className="relative z-10 px-4 py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-12">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-1 h-10 md:h-12 bg-red-600"></div>
                <h1
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  Testimonials
                </h1>
              </div>
              <div className="ml-4 md:ml-5">
                <p className="text-sm md:text-base text-gray-200 max-w-2xl">
                  What people say about us. These are voices of those who worked
                  with RamTech. <span className="font-bold text-white">Happy customers</span>, strong partnerships.
                </p>
              </div>
            </div>

            <button className="hidden md:flex items-center gap-2 text-red-500 hover:text-red-400 transition font-medium group">
              See More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-5 md:p-6 hover:bg-gray-800/60 transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-gray-600">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => setSelectedTestimonial(testimonial)}
                      />
                    </div>

                    <div>
                      <h3 className="text-white font-semibold text-sm md:text-base">
                        {testimonial.name}
                      </h3>
                      <div className="flex gap-1 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 md:w-4 md:h-4 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedTestimonial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
          <div className="relative bg-gray-900 rounded-2xl max-w-md w-full p-6 border border-gray-700">
            {/* Close Button */}
            <button
              onClick={() => setSelectedTestimonial(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <X size={22} />
            </button>

            {/* Image */}
            <div className="w-full h-72 rounded-xl overflow-hidden mb-4">
              <img
                src={selectedTestimonial.image}
                alt={selectedTestimonial.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <h3 className="text-white text-lg font-semibold text-center">
              {selectedTestimonial.name}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Testimonial;
