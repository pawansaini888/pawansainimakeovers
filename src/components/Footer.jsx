import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebookF, FaTwitter, FaPinterestP, FaYoutube } from "react-icons/fa";
import LOGO2 from '../assets/LOGO2.png'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-rose-50 to-indigo-50 text-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10">
        {/* Logo + Description */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <div className="mb-6">
            {/* Sample logo image - replace with your actual logo */}
            <img
              src={LOGO2}
              alt="Makeup Studio Logo"
              className="h-16 w-auto object-contain"
            />
          </div>
          <p className="text-gray-700 mb-6">
            At " Pawan Saini Makeovers ", we believe beauty begins with confidence.
            Our professional artists create personalized looks that enhance your
            natural features for any occasion.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/pawansainimakeovers?igsh=dDhpNDdieDE0eTRr&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-500 hover:text-rose-600 transition"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="https://facebook.com/share/16EEEwGMhT/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-500 hover:text-rose-600 transition"
            >
              <FaFacebookF className="text-xl" />
            </a>
            <a
              href="https://www.youtube.com/@pawansainimakeoverss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-500 hover:text-rose-600 transition"
            >
              <FaYoutube className="text-xl" />
            </a>
          </div>

        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-gray-900 uppercase tracking-wider">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link to={"/"} className="text-gray-700 hover:text-rose-500 transition">Home</Link>
            </li>
            <li>
              <Link to={"/about"} className="text-gray-700 hover:text-rose-500 transition">About Us</Link>
            </li>
            <li>
              <Link to={"/services"} className="text-gray-700 hover:text-rose-500 transition">Services</Link>
            </li>
            <li>
              <Link to={"/portfolio"} className="text-gray-700 hover:text-rose-500 transition">Portfolio</Link>
            </li>
            <li>
              <Link to={"/contact"} className="text-gray-700 hover:text-rose-500 transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-gray-900 uppercase tracking-wider">Our Services</h3>
          <ul className="space-y-3">
            <li>
              <Link to={"/services"} className="text-gray-700 hover:text-rose-500 transition">Bridal Makeup</Link>
            </li>
            <li>
              <Link to={"/services"} className="text-gray-700 hover:text-rose-500 transition">Face Makeup</Link>
            </li>
            <li>
              <Link to={"/services"} className="text-gray-700 hover:text-rose-500 transition">Eye Effects</Link>
            </li>
            <li>
              <Link to={"/services"} className="text-gray-700 hover:text-rose-500 transition">Hair Lessons</Link>
            </li>
            {/* <li>
              <Link to={"/services"} className="text-gray-700 hover:text-rose-500 transition">Skincare</Link>
            </li> */}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-gray-900 uppercase tracking-wider">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <FaPhone className="text-rose-500 mt-1 flex-shrink-0" />
              <span className="text-gray-700">
                +91 9015908080
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="text-rose-500 mt-1 flex-shrink-0" />
              <span className="text-gray-700">
                pawansainimakeovers@gmail.com
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-rose-500 mt-1 flex-shrink-0" />
              <span className="text-gray-700">
                Metro Station, D-20A Sarpanch Colony, NH-19, near by Neelam Chowk, Ajronda, Faridabad, Haryana 121007 <br />
                LHB Colony, Kanpur
              </span>
            </li>
          </ul>
        </div>

        {/* Location Map */}
        <div className="md:col-span-2 lg:col-span-1">
          <h3 className="text-lg font-semibold mb-6 text-gray-900 uppercase tracking-wider">Reach Us At</h3>
          <div className="rounded-xl overflow-hidden shadow-lg border-4 border-white">
            <iframe
              title="Studio Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.60661962657!2d77.3084851760683!3d28.40094719455855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc4aeb65f223%3A0xde9dc17e7ab5c3ef!2sPawan%20Saini%20Makeovers!5e0!3m2!1sen!2sin!4v1750662194377!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 pt-12 mt-8 border-t border-gray-200">
        <p className="text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Pawan saini makeovers. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;