import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Why Us', href: '#why-choose-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-black/20 backdrop-blur-xl border-b border-gray-200/50 dark:border-white/10 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-black dark:bg-purple-600 rounded-xl p-0.5 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-110">
                <div className="w-full h-full bg-purple-600 dark:bg-black rounded-lg flex items-center justify-center backdrop-blur-sm">
                  
                                    <div className="text-white font-bold">&lt;/&gt;</div>
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                VoilaCode
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 -mt-1">Technologies</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-all duration-300 font-medium group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <ThemeToggle />
            <button className="relative bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-colors duration-200 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-black/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-white/10">
            <div className="py-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white hover:bg-purple-50 dark:hover:bg-white/10 transition-all duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 pt-4">
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;