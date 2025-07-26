import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bride from '../assets/makeup/bride.PNG';
import bride2 from '../assets/makeup/bride2.JPG';
import eye from '../assets/makeup/eye.JPG';
import hair from '../assets/makeup/hair.JPG';

const services = [
  {
    title: "Face Makeup",
    image: bride,
    shortDesc: "Flawless complexion enhancement"
  },
  {
    title: "Eye Makeup",
    image: eye,
    shortDesc: "Dramatic or natural eye looks"
  },
  {
    title: "Hair Styling",
    image: hair,
    shortDesc: "Elegant updos to glamorous curls"
  },
  {
    title: "Bridal Makeup",
    image: bride2,
    shortDesc: "Timeless looks for your special day"
  }
];

const MakeupServices = () => {
  return (
    <section className="w-full bg-gradient-to-b from-rose-50 to-indigo-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-rose-600 uppercase tracking-widest font-medium mb-3">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional <span className="text-rose-500">Makeup</span> Services
          </h2>
          <div className="w-20 h-1 bg-rose-400 mx-auto"></div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="group relative h-96 overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent/30 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-1">{service.title}</h3>
                <p className="text-rose-100 font-medium">{service.shortDesc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MakeupServices;