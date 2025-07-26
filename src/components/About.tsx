import React from 'react';
import { Star, Users, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 relative overflow-hidden transition-colors duration-300">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-2xl mb-8 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110">
            <Star className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">
            ABOUT US
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto">
              We are a team of passionate <span className="text-purple-600 dark:text-purple-400">technologists</span>, <span className="text-pink-600 dark:text-pink-400">designers</span>, and <span className="text-cyan-600 dark:text-cyan-400">problem-solvers</span> committed to building innovative digital solutions that make a meaningful impact across industries.
            </p>
            
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-4xl mx-auto">
              Led by <span className="text-purple-600 dark:text-purple-400 font-semibold">Dr. Poojitha</span>, our CEO, whose visionary leadership and product expertise drive our team's focus on innovation and quality. Her ability to connect business needs with cutting-edge technology has enabled us to consistently deliver exceptional value.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              {
           icon: <img src="/expertteam.jpg" alt="expertteam" />,
                title: "Expert Team",
                description: "Skilled professionals dedicated to excellence and innovation",
                bgColor: "bg-purple-100 dark:bg-purple-900/30"
              },
              {
           icon: <img src="/quaityfocus.webp" alt="qualityfocus" />,
                title: "Quality Focus",
                description: "Commitment to delivering exceptional results that exceed expectations",
                bgColor: "bg-pink-100 dark:bg-pink-900/30"
              },
              {
           icon: <img src="/innovation.jpg" alt="innovation" />,
                title: "Innovation",
                description: "Cutting-edge solutions powered by the latest technologies",
                bgColor: "bg-cyan-100 dark:bg-cyan-900/30"
              }
            ].map((item, index) => (
              <div key={index} className="group text-center">
                <div className={`w-20 h-20 rounded-2xl ${item.bgColor} border border-gray-200 dark:border-white/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm`}>
                  <div className="text-gray-900 dark:text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;