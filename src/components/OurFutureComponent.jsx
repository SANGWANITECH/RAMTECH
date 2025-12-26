import { CheckCircle } from 'lucide-react';

function OurFutureComponent() {
  return (
    <div className="min-h-[70vh] bg-white p-4 md:p-4"
    style={{ fontFamily: "'Inter', sans-serif" }} 
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md lg:max-w-lg hidden md:block">
              <img src="rok2.png" alt="rocket" />
            </div>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 md:mt-8">
                <div className="w-1 h-8 bg-red-500"></div>
                <h2 className="text-2xl md:text-3xl font-semibold text-black-600"
                 style={{ fontFamily: "'Orbitron', sans-serif" }}
                >Our future</h2>
              </div>

              <p className="text-[15px] md:text-sm text-gray-600 leading-relaxed"
              
              >
                Let's introduce you to the team, we, the <span className="font-bold">RAM Tech</span>, a tech start us comprised of college students. Here to change the technological gradient in Malawi
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2 flex flex-row gap-3">
              <div className="w-1 h-8 bg-red-500"></div>
                <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold text-black-900"
                     style={{ fontFamily: "'Orbitron', sans-serif" }}
                >Our Goals</h1>
              </div>

              <p className="text-[15px] md:text-sm text-gray-600 leading-relaxed">
                We hope the fab four goals that our company guide by, we try as much as possible to stay in the game because we want to be far to
              </p>
            </div>

            <div className="space-y-4 md:space-y-5">
              <div className="flex gap-3 md:gap-4 items-start group">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-50 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                  </div>
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                    Promote innovation and creativity by applyinh technology in solving  real-world problems
                  </p>
                </div>
                <CheckCircle className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 text-blue-400 mt-0.5" />
              </div>

              <div className="flex gap-3 md:gap-4 items-start group">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-50 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                  </div>
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                    To provide digital skills to over 1 Million youth by 2050
                  </p>
                </div>
                <CheckCircle className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 text-blue-400 mt-0.5" />
              </div>

              <div className="flex gap-3 md:gap-4 items-start group">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-50 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                  </div>
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                    To boom up technological capabality of many youth in malawi
                  </p>
                </div>
                <CheckCircle className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 text-blue-400 mt-0.5" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default OurFutureComponent;
