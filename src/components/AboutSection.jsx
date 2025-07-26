import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import pawan from "../assets/makeup/pawan.webp";
import pawanAward from "../assets/pawan/pawanAward.webp";
import pawan3 from "../assets/pawan/pawan3.webp";

const AboutSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-rose-50 to-indigo-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - images */}
        <div className="flex gap-4 h-full">
          <div className="w-1/2 flex flex-col gap-4">
            <motion.img
              src={pawanAward}
              alt="Makeup artist working"
              className="rounded-2xl w-full object-cover h-64 shadow-lg"
              whileHover={{ scale: 1.02 }}
            />
            <motion.img
              src={pawan3}
              alt="Makeup products"
              className="rounded-2xl w-full object-cover h-48 shadow-lg"
              whileHover={{ scale: 1.02 }}
            />
          </div>
          <div className="w-1/2 relative">
            <motion.img
              src={pawan}
              alt="Professional makeup artist smiling"
              className="rounded-2xl w-full object-cover h-full shadow-lg"
              whileHover={{ scale: 1.02 }}
            />
            {/* Experience Badge */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-rose-500 text-white text-center rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-xl border-4 border-white"
              whileHover={{ rotate: 5 }}
            >
              <span className="text-3xl font-bold">12+</span>
              <span className="text-xs uppercase tracking-wider">Years Experience</span>
            </motion.div>
          </div>
        </div>

        {/* Right side - text content */}
        <div className="space-y-6">
          <p className="text-sm text-rose-600 uppercase font-medium tracking-wider">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Your Beauty Journey <br />
            <span className="text-rose-500">Begins Here</span>
          </h2>
          <p className="text-gray-700 text-lg">
            Hello, I'm Pawan, a Professional Makeup Artist with a passion for enhancing natural beauty. 
            I specialize in creating looks that make you feel confident and radiant for any occasion.
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="bg-rose-100 p-1 rounded-full mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">Certified professional with 12+ years of experience</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-rose-100 p-1 rounded-full mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">Specialized in bridal, editorial, and special effects makeup</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-rose-100 p-1 rounded-full mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">Using only premium, skin-friendly products</span>
            </li>
          </ul>

          <div className="flex gap-4 pt-4">
            <Link to='/contact'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full font-medium shadow-lg shadow-rose-200"
              >
                LEARN MORE
              </motion.button>
            </Link>
            <Link to='/portfolio'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-800 hover:bg-gray-800 hover:text-white text-gray-800 px-8 py-3 rounded-full font-medium"
              >
                PORTFOLIO
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;