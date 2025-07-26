import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhone, FaCalendarAlt, FaClock, FaCertificate } from "react-icons/fa";

const MasterClassesList = () => {
  const courses = {
    makeup: [
      {
        title: "Basic To Advance Make Up Class (2 Months)",
        duration: "2 months",
        highlights: ["Personal mentoring", "Kit included", "Certification"],
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      },
      {
        title: "Basic to Advance (1 Month Duration)",
        duration: "1 month",
        highlights: ["Intensive training", "Industry techniques", "Portfolio shoot"],
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
      },
      {
        title: "15 Days Full Advance Makeup Course",
        duration: "15 days",
        highlights: ["Advanced techniques", "Bridal focus", "Business skills"],
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
      },
      {
        title: "7 Days Advance Makeup Course",
        duration: "7 days",
        highlights: ["Special effects", "Editorial looks", "Fast-track"],
        image: "https://images.pexels.com/photos/1830447/pexels-photo-1830447.jpeg"
      },
      {
        title: "5 Days Advance Makeup Class",
        duration: "5 days",
        highlights: ["Masterclass", "Celebrity techniques", "One-on-one"],
        image: "https://images.pexels.com/photos/1115128/pexels-photo-1115128.jpeg"
      }
    ],
    hair: [
      {
        title: "1 Month Hair Styling Master Class",
        duration: "1 month",
        highlights: ["All hair types", "Creative styling", "Business setup"],
        image: "https://images.pexels.com/photos/8467982/pexels-photo-8467982.jpeg"
      },
      {
        title: "10 Days Hairstyling Master Class",
        duration: "10 days",
        highlights: ["Bridal hairstyles", "Updos", "Modern trends"],
        image: "https://images.pexels.com/photos/8467970/pexels-photo-8467970.jpeg"
      }
    ]
  };

  return (
    <section className="relative w-full min-h-screen py-16 bg-gradient-to-br from-pink-50 to-indigo-50 overflow-hidden">
      {/* Floating gradient blobs */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-rose-300 rounded-full opacity-20 blur-3xl mix-blend-multiply" 
          animate={{ scale: [1, 1.05, 1] }} 
          transition={{ duration: 10, repeat: Infinity }} 
        />
        <motion.div 
          className="absolute bottom-10 right-20 w-96 h-96 bg-purple-300 rounded-full opacity-20 blur-3xl mix-blend-multiply" 
          animate={{ scale: [1, 1.1, 1] }} 
          transition={{ duration: 12, repeat: Infinity }} 
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Hero Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 mb-6">
            Master the Art of Beauty
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Transform your passion into profession with our industry-leading makeup and hairstyling masterclasses
          </p>
        </motion.div>

        {/* Makeup Artistry Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-24"
        >
          <div className="flex items-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-rose-600 mr-6">
              Makeup Artistry Masterclasses
            </h3>
            <div className="flex-1 h-1 bg-gradient-to-r from-rose-400 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.makeup.map((course, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * i }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{course.title}</h4>
                  <div className="flex items-center text-rose-600 mb-3">
                    <FaClock className="mr-2" />
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {course.highlights.map((highlight, hi) => (
                      <li key={hi} className="flex items-start">
                        <span className="text-rose-500 mr-2">✓</span>
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <button className="w-full mt-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white py-2 px-4 rounded-lg font-medium hover:opacity-90 transition duration-300">
                    Enroll Now
                  </button> */}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hair Styling Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-24"
        >
          <div className="flex items-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-purple-600 mr-6">
              Hair Styling Masterclasses
            </h3>
            <div className="flex-1 h-1 bg-gradient-to-r from-purple-400 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.hair.map((course, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * i }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{course.title}</h4>
                  <div className="flex items-center text-purple-600 mb-3">
                    <FaClock className="mr-2" />
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {course.highlights.map((highlight, hi) => (
                      <li key={hi} className="flex items-start">
                        <span className="text-purple-500 mr-2">✓</span>
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 px-4 rounded-lg font-medium hover:opacity-90 transition duration-300">
                    Enroll Now
                  </button> */}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mb-20 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Our Masterclasses?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-rose-50">
              <div className="flex justify-center text-4xl text-rose-500 mb-4">
                <FaCertificate />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Industry Certification</h4>
              <p className="text-gray-600">Get certified by industry experts with recognized credentials</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-purple-50">
              <div className="flex justify-center text-4xl text-purple-500 mb-4">
                <FaCalendarAlt />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Flexible Scheduling</h4>
              <p className="text-gray-600">Choose from weekday or weekend batches to suit your schedule</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-pink-50">
              <div className="flex justify-center text-4xl text-pink-500 mb-4">
                <FaClock />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Lifetime Support</h4>
              <p className="text-gray-600">Get ongoing mentorship and career guidance even after course completion</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-16 text-center bg-gradient-to-r from-rose-500 to-purple-500 rounded-2xl p-10 text-white"
        >
          <h3 className="text-3xl font-bold mb-6">Ready to Start Your Beauty Journey?</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Limited seats available for our upcoming batches. Contact us today to book your spot!
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a
              href="tel:9015908080"
              className="flex items-center justify-center gap-3 bg-white text-rose-600 font-semibold text-lg px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300"
            >
              <FaPhone />
              Call: 9015908080
            </a>
            <a
              href="https://wa.me/919015908080"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 font-semibold text-lg px-8 py-3 rounded-full hover:bg-green-600 transition duration-300"
            >
              <FaWhatsapp />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MasterClassesList;