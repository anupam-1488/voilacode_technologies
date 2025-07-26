import React from 'react';

import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
        <Navigation />
        <Hero />
        <About />
        <Services />
        <Projects />
        <TechStack />
        <WhyChooseUs />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;