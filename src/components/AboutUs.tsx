import React from "react";

const AboutUs: React.FC = () => {
  const team = [
    {
      name: "Sangwani Phiri",
      role: ["Software Engineer", "security analyst"],
      img: "/ram1.jpg",
      desc: "Visionary founder with expertise in software development, full-stack engineering, and cybersecurity education."
    },
    {
      name: "Arthur Nkhoma",
      role: ["software engineer", "Instructor"],
      img: "/ram2.jpg",
      desc: "Specialist in software engineering and IT infrastructure, building secure systems while mentoring youth."
    },
    {
      name: "Moses Samuel",
      role: ["Network engineer", "Instructor"],
      img: "/ram3.jpg",
      desc: " Network engineering student specializing in network security and IT infrastructure, with a focus on bulding a secure and reliable networks."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 px-6 md:px-12">
      {/* Who are we */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="flex items-center mb-6">
          <div className="w-1 h-10 bg-red-600 mr-3"></div>
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Who are we?
          </h2>
        </div>
        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
          RamTech is a <span className="font-semibold text-red-700">youth-led tech movement </span> 
          founded by three <strong>University of Malawi</strong> students:  
          <span className="font-medium"> Sangwani Phiri</span>, a Computer Science student passionate about software engineering and cybersecurity, 
          <span className="font-medium"> Arthur Nkhoma</span>, a Computer Science student with a strong focus on networking and IT infrastructure and  
          <span className="font-medium"> Moses Samuel</span>, a Network Engineering student specializing in cybersecurity and digital safety.  
          <br /><br />
          Together, they built RamTech to empower young people with <strong>digital skills, mentorship, and practical training</strong> in areas like web and mobile development, networking, and cybersecurity.  
          The movement’s mission is to bridge the gap between academic learning and industry practice while driving <strong>digital transformation across Malawi and beyond</strong>.
        </p>
      </div>

      {/* Meet the Team */}
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-6">
          <div className="w-1 h-10 bg-red-600 mr-3"></div>
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Meet the Team
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6 flex flex-col"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-56 object-cover rounded-xl mb-4"
              />

              <div className="flex flex-wrap gap-2 mb-3">
                {member.role.map((r, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      r.includes("Engineer")
                        ? "bg-red-100 text-red-700"
                        : r.includes("Security")
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {r}
                  </span>
                ))}
              </div>

              <h3
                className="text-lg font-semibold text-gray-900 mb-2"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                {member.name}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {member.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
