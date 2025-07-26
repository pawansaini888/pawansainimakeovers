import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const PricingCards = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: {
      y: -10,
      boxShadow: "0 15px 25px -5px rgba(244, 63, 94, 0.2)"
    }
  };

  const priceVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "backOut" }
    }
  };

  const services = [
    {
      title: "Bridal & Reception Glam",
      items: [
        { type: "Basic", price: "₹20,000" },
        { type: "HD", price: "₹25,000" },
        { type: "Airbrush", price: "₹30,000" }
      ],
      featured: true
    },
    {
      title: "Party Looks",
      items: [
        { type: "Basic", price: "₹3,500" },
        { type: "HD", price: "₹5,500" },
        { type: "Airbrush", price: "₹7,500" }
      ]
    },
    {
      title: "Engagement, Mehandi & More",
      subtitle: "(Cocktail, Roka, Haldi)",
      items: [
        { type: "Basic", price: "₹10,000" },
        { type: "HD", price: "₹15,000" },
        { type: "Airbrush", price: "₹18,000" }
      ]
    }
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-rose-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Soft gradient circles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <motion.div className="absolute top-1/4 left-1/4 w-60 h-60 bg-rose-200 rounded-full filter blur-3xl opacity-20" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 10, repeat: Infinity }} />
        <motion.div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-indigo-200 rounded-full filter blur-3xl opacity-20" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 12, repeat: Infinity }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">Makeup Packages</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Elegant, professional & occasion-ready looks curated just for you.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants} whileHover="hover" className={`relative bg-white rounded-2xl shadow-lg border ${service.featured ? "border-rose-300" : "border-gray-100"}`}>
              <div className="p-6 pb-4 bg-gradient-to-r from-rose-50 to-pink-50">
                <h3 className={`text-xl font-bold ${service.featured ? "text-rose-700" : "text-gray-800"} mb-1`}>
                  {service.title}
                </h3>
                {service.subtitle && <p className="text-sm text-gray-600">{service.subtitle}</p>}
              </div>

              {/* Ribbon */}
              {service.featured && (
                <div className="absolute top-4 right-4 bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  Most Popular
                </div>
              )}

              {/* Price List */}
              <div className="p-6">
                <div className="space-y-4">
                  {service.items.map((item, i) => (
                    <motion.div key={i} initial="hidden" animate="visible" variants={priceVariants} transition={{ delay: 0.1 * i }} className="flex justify-between items-center py-3 px-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <span className="font-medium text-gray-700">{item.type}</span>
                      <span className={`font-bold ${service.featured ? "text-rose-600" : "text-pink-600"} text-lg`}>{item.price}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-rose-200 rounded-tl-lg"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Booking section */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-center mt-14">
          <p className="text-md text-gray-600 mb-3">Book your glam session now:</p>
          <div className="flex justify-center gap-6">
            <a href="tel:9015908080" className="text-rose-600 font-semibold text-lg hover:underline transition duration-300">
              📞 Call: 9015908080
            </a>
            <a href="https://wa.me/919015908080" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-600 font-semibold text-lg hover:text-green-700 transition duration-300">
              <FaWhatsapp size={20} />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingCards;
