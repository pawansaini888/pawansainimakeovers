import React from "react";
import { motion } from "framer-motion";
import { FaRegStar, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import bride from '../assets/makeup/bride.PNG'
import face from '../assets/creativeWork/face2.JPG'
import eye from '../assets/makeup/eye.JPG'
import hair from '../assets/creativeWork/hair2.JPG'
const ServicesInDetail = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const services = [
    {
      title: "Bridal Makeup",
      description: "Our signature bridal makeup service creates a flawless, long-lasting look for your special day. Using premium products that withstand tears and hugs alike, we'll enhance your natural beauty while ensuring you look radiant in photos and in person.",
      highlights: [
        "Pre-wedding consultation",
        "Trial session included",
        "HD makeup for photography",
        "Touch-up kit provided",
        "Lasts 12+ hours"
      ],
      images: [
        bride
      ],
      price: "Starting at $250"
    },
    {
      title: "Face Makeup",
      description: "Transform your complexion with our professional face makeup service. Whether you need a natural daytime look or glamorous evening makeup, we'll create perfect skin texture, balanced contouring, and a radiant finish tailored to your skin type and tone.",
      highlights: [
        "Custom color matching",
        "Airbrush option available",
        "Skincare prep included",
        "Oil-control for long wear",
        "Non-comedogenic products"
      ],
      images: [
        face
      ],
      price: "Starting at $120"
    },
    {
      title: "Eye Makeup",
      description: "Make your eyes the focal point with our expert eye makeup services. From subtle enhancements to dramatic smokey eyes, we'll accentuate your eye shape and color with precision techniques and premium pigments that stay crease-free all day.",
      highlights: [
        "Lash application included",
        "Waterproof options",
        "Color theory consultation",
        "Eye shape optimization",
        "Hypoallergenic products"
      ],
      images: [
        eye
      ],
      price: "Starting at $80"
    },
    {
      title: "Hair Styling",
      description: "Complete your look with our professional hair styling services. Whether you need elegant updos, voluminous curls, or sleek straight styles, we use top-quality tools and products to create your desired look that lasts through any event.",
      highlights: [
        "Heat protection treatment",
        "Professional hold products",
        "Extension integration",
        "Updo specialties",
        "Dry styling available"
      ],
      images: [
        hair
      ],
      price: "Starting at $90"
    }
  ];

  return (
    <section className="w-full bg-gradient-to-br from-rose-50 to-indigo-50 py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-rose-500">Signature</span> Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional makeup artistry tailored to enhance your natural beauty for any occasion
          </p>
        </motion.div>

        {/* Services */}
        <motion.div
          className="space-y-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden ${index % 2 === 0 ? '' : ''}`}
              variants={itemVariants}
            >
              <div className={`flex flex-col lg:flex-row ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                {/* Image Gallery */}
                <div className="lg:w-1/2 relative">
                  <div className="h-96 lg:h-full w-full overflow-hidden">
                    <img
                      src={service.images[0]}
                      alt={service.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex space-x-2 overflow-x-auto pb-2">
                    {service.images.map((img, imgIndex) => (
                      <div key={imgIndex} className="flex-shrink-0 w-16 h-16 rounded border-2 border-white shadow-sm overflow-hidden">
                        <img
                          src={img}
                          alt={`${service.title} example ${imgIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Content */}
                <div className="lg:w-1/2 p-8 md:p-10">
                  <div className="flex items-center mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{service.title}</h3>
                    {/* <span className="ml-auto bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-sm font-medium">
                      {service.price}
                    </span> */}
                  </div>

                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Service Highlights:</h4>
                    <ul className="space-y-2">
                      {service.highlights.map((highlight, hiIndex) => (
                        <li key={hiIndex} className="flex items-start">
                          <FaStar className="text-rose-400 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {/* <motion.button
                      className="px-6 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-lg font-medium shadow-md shadow-rose-200/50"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Book Now
                    </motion.button> */}
                    {/* <motion.button
                      className="px-6 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg font-medium"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Learn More
                    </motion.button> */}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100 flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        i < 4 ? (
                          <FaStar key={i} className="text-amber-400" />
                        ) : (
                          <FaRegStar key={i} className="text-amber-400" />
                        )
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">4.8 (120+ reviews)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Enhance Your Natural Beauty?
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Book a consultation and let's create your perfect look together
          </p>
          <Link to={"/contact"}>
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-rose-500 to-indigo-500 hover:from-rose-600 hover:to-indigo-600 text-white rounded-lg font-medium shadow-lg shadow-rose-200/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact us now
            </motion.button></Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesInDetail;