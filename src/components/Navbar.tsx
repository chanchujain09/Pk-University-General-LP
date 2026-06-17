import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X, BookOpen } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-gray-200 py-3 shadow-sm text-gray-900' 
          : 'bg-transparent border-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center bg-white rounded-xl px-3 py-1.5 shadow-sm">
          <img 
            src="https://pkuniversity.edu.in/wp-content/uploads/2024/06/pku-logo5.png" 
            alt="P.K. University" 
            className="h-8 md:h-10 lg:h-12 w-auto object-contain transition-all duration-300" 
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-8 font-medium text-sm">
            <li><a href="#programs" className="hover:opacity-70 transition-opacity">Programs</a></li>
            <li><a href="#why-us" className="hover:opacity-70 transition-opacity">Why Choose Us</a></li>
            <li><a href="#campus" className="hover:opacity-70 transition-opacity">Campus Life</a></li>
            <li><a href="#placements" className="hover:opacity-70 transition-opacity">Placements</a></li>
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-sm ${
            isScrolled 
              ? 'bg-brand-magenta text-white hover:bg-brand-dark' 
              : 'bg-white text-brand-dark hover:bg-gray-100'
          }`}>
            Apply Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white text-gray-900 shadow-xl border-t border-gray-100 p-6 flex flex-col gap-4 md:hidden"
        >
          <a href="#programs" className="font-medium text-lg py-2 border-b border-gray-50">Programs</a>
          <a href="#why-us" className="font-medium text-lg py-2 border-b border-gray-50">Why Choose Us</a>
          <a href="#campus" className="font-medium text-lg py-2 border-b border-gray-50">Campus Life</a>
          <button className="w-full mt-4 bg-brand-magenta text-white py-3 rounded-lg font-bold">
            Apply Now 2026
          </button>
        </motion.div>
      )}
    </header>
  );
}
