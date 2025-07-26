import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-3 rounded-xl bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/20 hover:bg-gray-100/50 dark:hover:bg-white/20 transition-all duration-300 group overflow-hidden"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <Sun 
          className={`absolute inset-0 w-5 h-5 text-yellow-500 dark:text-yellow-400 transition-all duration-500 ${
            theme === 'light' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 rotate-180 scale-50'
          }`}
        />
        <Moon 
          className={`absolute inset-0 w-5 h-5 text-blue-600 dark:text-blue-300 transition-all duration-500 ${
            theme === 'dark' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-180 scale-50'
          }`}
        />
      </div>
      <div className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  );
};

export default ThemeToggle;