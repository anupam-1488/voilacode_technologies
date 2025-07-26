import React from 'react';
import { Code2 } from 'lucide-react';

const TechStack = () => {
  const technologies = [
    {
      name: "Node.js",
      category: "Backend",
      icon: <img src="/node.png" alt="node" />,
      bgColor: "bg-purple-100 dark:bg-purple-900/30"
    },
    {
      name: "React",
      category: "Frontend",
      icon: <img src="/react.png" alt="react" />,
      bgColor: "bg-pink-100 dark:bg-pink-900/30"
    },
    {
      name: "PostgreSQL",
      category: "Database",
           icon: <img src="/postgre.jpeg" alt="postgre" />,
      bgColor: "bg-cyan-100 dark:bg-cyan-900/30"
    },
    {
      name: "Python",
      category: "Backend",
            icon: <img src="/python.jpg" alt="python" />,

      bgColor: "bg-purple-100 dark:bg-purple-900/30"
    },
    {
      name: "Selenium",
      category: "Testing",
           icon: <img src="/selenium.png" alt="selenium" />,

      bgColor: "bg-pink-100 dark:bg-pink-900/30"
    },
    {
      name: "Flutter",
      category: "Mobile",
            icon: <img src="/flutter.png" alt="node" />,

      bgColor: "bg-cyan-100 dark:bg-cyan-900/30"
    },
    {
      name: "JavaScript",
      category: "Full-Stack",
          icon: <img src="/javascript.jpg" alt="js" />,

      bgColor: "bg-purple-100 dark:bg-purple-900/30"
    },
    {
      name: "PHP",
      category: "Backend",
          icon: <img src="/php.jpg" alt="php" />,

      bgColor: "bg-pink-100 dark:bg-pink-900/30"
    },
    {
      name: "Laravel",
      category: "Framework",
           icon: <img src="/laravel.jpg" alt="laravel" />,

      bgColor: "bg-cyan-100 dark:bg-cyan-900/30"
    },
    {
      name: "MySQL",
      category: "Database",
           icon: <img src="/mysql.webp" alt="mysql" />,

      bgColor: "bg-purple-100 dark:bg-purple-900/30"
    },
    {
      name: "TypeScript",
      category: "Full-Stack",
            icon: <img src="/typescript.svg" alt="typescript" />,

      bgColor: "bg-pink-100 dark:bg-pink-900/30"
    },
    {
      name: "AWS",
      category: "Cloud",
           icon: <img src="/aws.png" alt="aws" />,

      bgColor: "bg-cyan-100 dark:bg-cyan-900/30"
    }
  ];

  return (
    <section id="tech-stack" className="py-32 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-900 dark:to-black relative overflow-hidden transition-colors duration-300">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-2xl mb-8 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110">
            <Code2 className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">
            TECH STACK
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Cutting-edge technologies and frameworks we master to deliver exceptional solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 overflow-hidden text-center"
            >
              <div className={`absolute inset-0 ${tech.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/30 border border-gray-200 dark:border-white/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-200 transition-colors duration-300">
                  {tech.name}
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                  {tech.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;