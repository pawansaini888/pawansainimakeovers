import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPaperPlane, FaUser, FaEnvelope, FaComment, FaMapMarkerAlt, FaPhone, FaClock, FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/pawansainimakeovers@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "New Contact Form Submission",
          _template: "table"
        })
      });

      const data = await response.json();

      if (data.success === "true") {
        toast.success("🎉 Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast.error("❌ Submission failed. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-gradient-to-br from-rose-50 to-indigo-50 py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-rose-500">Touch</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or ready to book your appointment? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-rose-100 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-rose-500 text-lg" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Our Location</h3>
                    <p className="text-gray-600">Metro Station, D-20A Sarpanch Colony, NH-19, near by Neelam Chowk, Ajronda, Faridabad, Haryana 121007
                      LHB Colony, Kanpur</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <FaPhone className="text-indigo-500 text-lg" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Phone Number</h3>
                    <p className="text-gray-600">+91 9015908080</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-purple-500 text-lg" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email Address</h3>
                    <p className="text-gray-600">pawansainimakeovers@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <FaClock className="text-amber-500 text-lg" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Working Hours</h3>
                    <p className="text-gray-600">Mon-Fri: 9AM - 6PM</p>
                    <p className="text-gray-600">Sat: 10AM - 4PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Media Links */}
            <motion.div variants={itemVariants}>
              <h3 className="font-medium text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://www.instagram.com/pawansainimakeovers?igsh=dDhpNDdieDE0eTRr&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-pink-500 to-purple-600 text-white p-3 rounded-full transition-colors"
                  whileHover={{ y: -3 }}
                >
                  <span className="sr-only">Instagram</span>
                  <FaInstagram className="text-lg" />
                </motion.a>

                <motion.a
                  href="https://www.youtube.com/@pawansainimakeoverss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white p-3 rounded-full transition-colors"
                  whileHover={{ y: -3 }}
                >
                  <span className="sr-only">YouTube</span>
                  <FaYoutube className="text-lg" />
                </motion.a>

                <motion.a
                  href="https://facebook.com/share/16EEEwGMhT/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-3 rounded-full transition-colors"
                  whileHover={{ y: -3 }}
                >
                  <span className="sr-only">Facebook</span>
                  <FaFacebook className="text-lg" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="relative">
                <div className="absolute top-3 left-3">
                  <FaComment className="text-gray-400" />
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  className="w-full border border-gray-200 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white py-3 px-6 rounded-lg font-medium shadow-lg shadow-rose-200/50 flex items-center justify-center gap-2 transition-all"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        {/* Map Section */}
        <motion.div
          className="mt-12 bg-white rounded-2xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="h-64 md:h-80 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.60661962657!2d77.3084851760683!3d28.40094719455855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc4aeb65f223%3A0xde9dc17e7ab5c3ef!2sPawan%20Saini%20Makeovers!5e0!3m2!1sen!2sin!4v1750662194377!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>

      {/* Toast container */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastClassName="border border-gray-200 shadow-lg"
      />
    </section>
  );
};

export default ContactForm;