import React from 'react';
import { CheckCircle, Clock, Handshake, Lightbulb, Shield, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
           icon: <img src="/trackrecord.png" alt="trackrecord" />,
      title: "Proven Track Record",
      description: "Successfully delivered 50+ projects across diverse industries with consistent quality and reliability.",
      bgColor: "bg-purple-100 dark:bg-purple-900/30"
    },
    {
           icon: <img src="/intime.jpg" alt="intime" />,
      title: "Timely Delivery",
      description: "Committed to meeting deadlines without compromising on quality or functionality.",
      bgColor: "bg-pink-100 dark:bg-pink-900/30"
    },
    {
           icon: <img src="/innovationdriven.png" alt="innovationdriven" />,
      title: "Innovation-Driven",
      description: "Leveraging the latest technologies and methodologies to create forward-thinking solutions.",
      bgColor: "bg-cyan-100 dark:bg-cyan-900/30"
    },
    {
           icon: <img src="/Clientcentric.png" alt="clientcentric" />,
      title: "Client-Centric Approach",
      description: "Your success is our priority. We work closely with you to understand and exceed expectations.",
      bgColor: "bg-purple-100 dark:bg-purple-900/30"
    },
    {
           icon: <img src="/qualityassurance 2.jpg" alt="qualityassurance" />,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes ensure robust, secure, and reliable solutions.",
      bgColor: "bg-pink-100 dark:bg-pink-900/30"
    },
    {
           icon: <img src="/longtermpartnership.png" alt="longtermpartnership" />,
      title: "Long-Term Partnership",
      description: "We focus on building trusted, collaborative relationships that grow with your business.",
      bgColor: "bg-cyan-100 dark:bg-cyan-900/30"
    }
  ];

  return (
    <section id="why-choose-us" className="py-32 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 relative overflow-hidden transition-colors duration-300">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">
            WHY CHOOSE US
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Experience the difference of working with a dedicated team that values excellence, innovation, and your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 overflow-hidden"
            >
              <div className={`absolute inset-0 ${reason.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/30 border border-gray-200 dark:border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                  <div className="text-gray-900 dark:text-white">
                    {reason.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-200 transition-colors duration-300">
                  {reason.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;