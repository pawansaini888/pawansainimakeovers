import React, { useState } from "react";
import { FaWhatsapp, FaInstagram, FaFacebook, FaYoutube, FaBars, FaTimes } from "react-icons/fa";

const SocialMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      {/* Icons */}
      <div className={`flex flex-col items-center space-y-4 transition-all duration-500 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}>
        <a
          href="https://wa.me/919015908080"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-md transition"
        >
          <FaWhatsapp size={20} />
        </a>
        <a
          href="https://www.instagram.com/pawansainimakeovers?igsh=dDhpNDdieDE0eTRr&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-tr from-pink-500 to-purple-600 text-white p-3 rounded-full shadow-md transition"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://facebook.com/share/16EEEwGMhT/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-md transition"
        >
          <FaFacebook size={20} />
        </a>
        <a
          href="https://www.youtube.com/@pawansainimakeoverss"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-md transition"
        >
          <FaYoutube size={20} />
        </a>
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleMenu}
        className="bg-black hover:bg-gray-800 text-white p-4 rounded-full shadow-xl transition-all"
        aria-label="Toggle Social Menu"
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>
    </div>
  );
};

export default SocialMenu;
