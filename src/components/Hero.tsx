import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Hexagon, Sparkles, Zap } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 overflow-hidden transition-colors duration-300"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-purple-500/5 dark:bg-purple-500/10"></div>
        <div className="absolute inset-0 bg-pink-500/5 dark:bg-pink-500/10"></div>
        <div className="absolute inset-0 bg-cyan-500/5 dark:bg-cyan-500/10"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-500/20 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-md animate-ping"></div>
        
        {/* Parallax elements */}
        <div 
          className="absolute top-1/4 left-1/4 transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }}
        >
          <Hexagon className="w-20 h-20 text-purple-500/30 dark:text-purple-500/30 animate-spin" style={{ animationDuration: '20s' }} />
        </div>
        <div 
          className="absolute bottom-1/4 right-1/3 transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`
          }}
        >
          <Sparkles className="w-12 h-12 text-pink-500/40 dark:text-pink-500/40 animate-pulse" />
        </div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-12">
            {/* Company Logo */}
            <div className="relative inline-block mb-8">
              <div className="w-32 h-32 bg-black dark:bg-purple-600 rounded-3xl p-1 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105 group">
                <div className="w-full h-full bg-purple-600 dark:bg-black rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <div className="text-white text-5xl font-bold">&lt;/&gt;</div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></div>
            </div>

            {/* Main Title */}
            <h1 className="font-black text-6xl md:text-8xl lg:text-9xl mb-6 tracking-tight">
              <span className="text-gray-900 dark:text-white">
                VoilaCode
              </span>
              <br />
              <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-purple-600 dark:text-purple-400 mt-4 block">
                Technologies
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Crafting <span className="text-purple-600 dark:text-purple-400">tomorrow's digital experiences</span> with 
            <span className="text-pink-600 dark:text-pink-400"> cutting-edge technology</span> and 
            <span className="text-cyan-600 dark:text-cyan-400"> innovative design</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="group relative bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105">
              <span className="flex items-center justify-center">
                Explore Our Universe
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            
            <button className="group relative bg-transparent border-2 border-purple-500 text-gray-900 dark:text-white hover:bg-purple-500 hover:text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105">
              <span className="flex items-center justify-center">
                View Our Creations
                <Zap className="ml-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="flex justify-center space-x-12 text-center">
            <div className="group">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">50+</div>
              <div className="text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">Projects</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2">5+</div>
              <div className="text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">Years</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">100%</div>
              <div className="text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">Success</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;