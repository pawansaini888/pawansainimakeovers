import React, { useState } from "react";
import LOGO2 from '../assets/LOGO2.png';
import { NavLink ,Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-gradient-to-r from-rose-50 to-indigo-50 text-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Logo with proper sizing */}
        <div className="flex items-center">
          <Link to='/'>
          <img 
            src={LOGO2} 
            alt="Company Logo" 
            className="h-20 w-auto transition-all duration-300 hover:scale-105" // Reduced height from h-24
          />
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex space-x-8 font-medium tracking-wide">
          <NavLink to={'/'} className="hover:text-rose-600 transition relative group">
            HOME
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          <NavLink to={'/about'} className="hover:text-rose-600 transition relative group">
            ABOUT ME
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          <NavLink to={'/services'} className="hover:text-rose-600 transition relative group">
            SERVICES
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          <NavLink to={'/portfolio'} className="hover:text-rose-600 transition relative group">
            PORTFOLIO
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          <NavLink to={'/LEARN'} className="hover:text-rose-600 transition relative group">
            MASTER CLASSES
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          <NavLink to={'/Pricing'} className="hover:text-rose-600 transition relative group">
            PRICING
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
        </nav>

        {/* Contact Button */}
        <Link to='/contact'>
        <button className="hidden lg:block cursor-pointer bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full font-medium transition duration-300 transform hover:scale-105 shadow-md shadow-rose-200">
          CONTACT 
        </button>
        </Link>

        {/* Animated Mobile menu button */}
        <button
          className="lg:hidden focus:outline-none transition-transform duration-300"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="space-y-2">
            <span className={`block h-0.5 w-6 bg-rose-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-rose-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block h-0.5 w-6 bg-rose-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu with animation */}
      <div className={`lg:hidden bg-gradient-to-b from-rose-50 to-indigo-50 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="pb-4 px-4">
          <nav className="flex flex-col space-y-4 font-medium tracking-wide">
            <NavLink to={'/'} className="hover:text-rose-600 transition py-2 border-b border-rose-100" onClick={() => setIsMenuOpen(false)}>HOME</NavLink>
            <NavLink to={'/about'} className="hover:text-rose-600 transition py-2 border-b border-rose-100" onClick={() => setIsMenuOpen(false)}>ABOUT ME</NavLink>
            <NavLink to={'/services'} className="hover:text-rose-600 transition py-2 border-b border-rose-100" onClick={() => setIsMenuOpen(false)}>SERVICES</NavLink>
            <NavLink to={'/portfolio'} className="hover:text-rose-600 transition py-2 border-b border-rose-100" onClick={() => setIsMenuOpen(false)}>PORTFOLIO</NavLink>
                      <NavLink to={'/LEARN'} className="hover:text-rose-600 transition relative group">
            MASTER CLASSES
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          <NavLink to={'/Pricing'} className="hover:text-rose-600 transition relative group">
            PRICING
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
            {/* <NavLink to={'/'} className="hover:text-rose-600 transition py-2 border-b border-rose-100" onClick={() => setIsMenuOpen(false)}>LEARN</NavLink> */}
            {/* <NavLink to={'/'} className="hover:text-rose-600 transition py-2 border-b border-rose-100" onClick={() => setIsMenuOpen(false)}>CONTACT</NavLink> */}
          </nav>
          <Link to='/contact'>
          <button className="mt-4 w-full bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full font-medium transition duration-300 transform hover:scale-105 shadow-md shadow-rose-200">
            CONTACT 
          </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;