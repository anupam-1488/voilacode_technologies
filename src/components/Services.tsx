import React from 'react';
import { Code, Brain, TestTube, Smartphone, Globe, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <img src="/customsoftwaredevelopment.png" alt="custom software" />,
      title: "Custom Software Development",
      description: "Enterprise-grade solutions built with modern architectures and scalable technologies",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
      features: ["Scalable Architecture", "Modern Frameworks", "Cloud Native"]
    },
    {
      icon: <img src="/ai machine learning.jpg" alt="machine learning" />,
      title: "AI & Machine Learning",
      description: "Intelligent automation and AI-powered solutions to transform your business",
      bgColor: "bg-pink-100 dark:bg-pink-900/30",
      features: ["LLM Integration", "Predictive Analytics", "Automation"]
    },
    {
      icon: <img src="/qualityassurance.jpg" alt="qualityassurance" />,
      title: "Quality Assurance",
      description: "Comprehensive testing strategies ensuring bulletproof software reliability",
      bgColor: "bg-cyan-100 dark:bg-cyan-900/30",
      features: ["Automated Testing", "Performance", "Security"]
    },
    {
      icon: <img src="/mobile excellence.webp" alt="mobile-excellence" />,
      title: "Mobile Excellence",
      description: "Native and cross-platform mobile apps with exceptional user experiences",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
      features: ["iOS & Android", "Cross-Platform", "UX/UI Design"]
    },
    {
      icon: <img src="/webinnovation.jpg" alt="web innovation" />,
      title: "Web Innovation",
      description: "Progressive web applications and modern responsive experiences",
      bgColor: "bg-pink-100 dark:bg-pink-900/30",
      features: ["PWA", "Responsive Design", "Performance"]
    },
    {
      icon: <img src="/cloud and devops.png" alt="cloud and devops" />,
      title: "Cloud & DevOps",
      description: "Secure, scalable infrastructure with automated deployment pipelines",
      bgColor: "bg-cyan-100 dark:bg-cyan-900/30",
      features: ["AWS/Azure", "CI/CD", "Monitoring"]
    }
  ];

  return (
    <section id="services" className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-black dark:via-gray-900 dark:to-black relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">
            CORE SERVICES
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to accelerate your digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 overflow-hidden"
            >
              <div className={`absolute inset-0 ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/30 border border-gray-200 dark:border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                  <div className="text-gray-900 dark:text-white">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-200 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
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

export default Services;