import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100/50 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <div className="text-2xl font-medium text-gray-900 tracking-tight">
            VycePay
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Contact</Link>
            <button className="bg-gray-900 text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-all font-medium">
              Join Waitlist
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute h-0.5 w-6 bg-gray-900 transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0' : 'translate-y-1'}`} />
              <span className={`absolute h-0.5 w-6 bg-gray-900 transform transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'translate-y-3'}`} />
              <span className={`absolute h-0.5 w-6 bg-gray-900 transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-5'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden pb-6">
            <div className="space-y-4">
              <Link to="/" className="block py-2 text-gray-600">Home</Link>
              <Link to="/about" className="block py-2 text-gray-600">About</Link>
              <Link to="/contact" className="block py-2 text-gray-600">Contact</Link>
              <button className="w-full bg-gray-900 text-white py-3 rounded-full">
                Join Waitlist
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
