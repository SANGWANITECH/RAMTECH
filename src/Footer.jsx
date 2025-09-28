import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
      <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="text-center">
          {/* RAB TECH Title */}
          <h1 className="text-6xl md:text-8xl font-bold tracking-wider mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              RAM
            </span>
            <span className="text-white"> TECH</span>
          </h1>
          
          {/* Stylized "f" character */}
          <div className="relative inline-block mt-12">
            <div className="text-9xl md:text-12xl font-bold text-white opacity-20">f</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-9xl md:text-12xl font-bold bg-gradient-to-b from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                f
              </div>
            </div>
          </div>
          
          {/* Decorative X pattern */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 border-2 border-cyan-500/30 rotate-45 rounded-lg"></div>
            </div>
            <div className="text-white text-xl font-light tracking-widest">INNOVATION • TECHNOLOGY • EXCELLENCE</div>
          </div>
          
          {/* Animated dots */}
          <div className="flex justify-center space-x-2 mt-12">
            {[1, 2, 3].map((dot) => (
              <div 
                key={dot}
                className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"
                style={{ animationDelay: `${dot * 0.3}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;