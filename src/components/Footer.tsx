import React, { useState, useEffect } from 'react';
import { Heart, Code, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16 relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mr-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">VoilaCode</h3>
                <p className="text-gray-400 text-sm">Technologies Pvt Ltd</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              We are passionate technologists committed to building innovative digital solutions that make a meaningful impact across industries.
            </p>
            <div className="flex items-center text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-2 text-red-400" />
              <span>by our dedicated team</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Services', 'Projects', 'Tech Stack', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-purple-400 mr-3" />
                <span className="text-gray-400">founder@voilacode.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-pink-400 mr-3" />
                <span className="text-gray-400">+91 70323 09797</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-cyan-400 mr-3" />
                <span className="text-gray-400">Madhapur, Hyderabad</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 VoilaCode Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110 z-50"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  );
};

export default Footer;