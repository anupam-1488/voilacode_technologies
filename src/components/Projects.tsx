import React from 'react';
import { Bot, GraduationCap, Users, Car, Lightbulb } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: "FRESHER BOT",
      icon: <img src="public/fresherbot.png" alt="FRESHER BOT" />,
      description: "AI-driven interview assessments platform with intelligent candidate evaluation",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
      features: ["AI Assessment", "Real-time Analysis", "Automated Scoring"]
    },
    {
      name: "Xplore",
      icon: <img src="/xplore.jpeg" alt="Xplore" />,
      description: "B2B learning management system for scalable enterprise training solutions",
      bgColor: "bg-pink-100 dark:bg-pink-900/30",
      features: ["LMS Platform", "Progress Tracking", "Enterprise Ready"]
    },
    {
      name: "PacketPrep",
      icon: <img src="/packetprep.webp" alt="PacketPrep" />,
      description: "Comprehensive placement management solution for educational institutions",
      bgColor: "bg-cyan-100 dark:bg-cyan-900/30",
      features: ["Student Management", "Company Portal", "Analytics"]
    },
    {
      name: "FIRST ACADEMY",
      icon: <img src="/first academy.jpeg" alt="FIRST ACADEMY" />,
      description: "Student management system for overseas education consultancies",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
      features: ["Student Portal", "Document Management", "Visa Tracking"]
    },
    {
      name: "Cyepro Solutions",
      icon: <img src="/cyepro.png" alt="Cyepro Solutions" />,
      description: "Digital automation solution for automobile dealership management",
      bgColor: "bg-pink-100 dark:bg-pink-900/30",
      features: ["Inventory Management", "Sales Automation", "CRM Integration"]
    }
  ];

  return (
    <section id="projects" className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 relative overflow-hidden transition-colors duration-300">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-2xl mb-8 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110">
            <Lightbulb className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">
            OUR PROJECTS
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Innovative solutions crafted across education, enterprise, and automation domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 overflow-hidden text-center"
            >
              <div className={`absolute inset-0 ${project.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-purple-100 dark:bg-purple-900/30 border border-gray-200 dark:border-white/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                  <div className="text-gray-900 dark:text-white">
                    {project.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-200 transition-colors duration-300">
                  {project.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-white/10 rounded-full text-sm text-gray-700 dark:text-gray-300 backdrop-blur-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;