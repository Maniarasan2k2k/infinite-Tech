import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <h1 className="text-3xl font-bold text-green-400">Playwrights Acadamy</h1>
          <p className="mt-3 text-sm leading-relaxed">Playwrights Acadamy is a leading online | offline learning platform focused on skill transformation. We empower learners to become job-ready through hands-on, mentor-led training. 
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-400 cursor-pointer">Home</li>
            <li className="hover:text-green-400 cursor-pointer">Courses</li>
            <li className="hover:text-green-400 cursor-pointer">Gallery</li>
            <li className="hover:text-green-400 cursor-pointer">About Us</li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Courses</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-400 cursor-pointer">MERN Stack</li>
            <li className="hover:text-green-400 cursor-pointer">Playwright</li>
            <li className="hover:text-green-400 cursor-pointer">Cypress</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
          <p className="text-sm">📍 Coimbatore, Tamil Nadu</p>
          <p className="text-sm">📞 +91 98765 43210</p>
          <p className="text-sm">📧 support@playwright.com</p>

          <div className="flex space-x-4 mt-4 text-lg">
            <FaFacebook className="hover:text-green-400 cursor-pointer" />
            <FaInstagram className="hover:text-green-400 cursor-pointer" />
            <FaYoutube className="hover:text-green-400 cursor-pointer" />
            <FaLinkedin className="hover:text-green-400 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* CopyRight */}
      <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-5">
        © {new Date().getFullYear()} Playwrights. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
