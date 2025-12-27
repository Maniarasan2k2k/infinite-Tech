import React, { useState } from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaFlask,
  FaCode,
  FaChartLine,
  FaRocket,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import AnimatedHeading from "./AnimatedHeading";
import "../App.css";

const Home = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileCourseOpen, setMobileCourseOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-colorss hover:bg-green-200 transition-all duration-500 p-2 text-center">
        <h1 className="font-semibold text-sm sm:text-base">
          Need assistance? Call @ (+91) 9751688447 Or Request Call Back
        </h1>
      </div>

      {/* Header */}
      <header className="fixed top-10 left-0 w-full bgpl shadow-sm z-50">
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
          <div onClick={() => navigate("/")} className="cursor-pointer">
            <AnimatedHeading />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden sm:flex items-center gap-6 text-lg text-white">
            <ul className="flex items-center gap-6">
              <li onClick={() => navigate("/")} className="cursor-pointer hover:text-green-400 transition">
                Home
              </li>

              <li
                className="relative cursor-pointer hover:text-green-400 transition"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                Course
                {dropdownOpen && (
                  <ul className="absolute top-full left-0 mt-1 w-28 bg-white text-gray-800 shadow-lg rounded border z-50">
                    <li className="px-4 py-2 hover:bg-green-100 cursor-pointer" onClick={() => navigate("/html")}>HTML</li>
                    <li className="px-4 py-2 hover:bg-green-100 cursor-pointer" onClick={() => navigate("/css")}>CSS</li>
                    <li className="px-4 py-2 hover:bg-green-100 cursor-pointer" onClick={() => navigate("/js")}>JS</li>
                  </ul>
                )}
              </li>

              <li onClick={() => navigate("/contact")} className="cursor-pointer hover:text-green-400 transition">
                Contact us
              </li>

              <li onClick={() => navigate("/qa")} className="cursor-pointer hover:text-green-400 transition">
                Q&A
              </li>

              <button className="bg-colorss text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">
                Login
              </button>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:hidden bg-white shadow-md px-4 py-4">
            <ul className="flex flex-col gap-3">
              <li onClick={() => navigate("/")}>Home</li>

              <li>
                <div onClick={() => setMobileCourseOpen(!mobileCourseOpen)} className="flex justify-between">
                  Course <span>{mobileCourseOpen ? "▲" : "▼"}</span>
                </div>
                {mobileCourseOpen && (
                  <ul className="pl-4 mt-2 space-y-1">
                    <li onClick={() => navigate("/html")}>HTML</li>
                    <li onClick={() => navigate("/css")}>CSS</li>
                    <li onClick={() => navigate("/js")}>JS</li>
                  </ul>
                )}
              </li>

              <li onClick={() => navigate("/contact")}>Contact us</li>
              <li onClick={() => navigate("/qa")}>Q&A</li>

              <button className="bg-colors text-white py-2 rounded-lg">
                Login
              </button>
            </ul>
          </div>
        )}
      </header>

      {/* Spacer for fixed header */}
      <div className="pt-32" />

      {/* Hero Section */}
      <div
        className="bg_div container mx-auto rounded bg-cover bg-center flex flex-col lg:flex-row gap-6 p-4 sm:p-6"
        style={{ backgroundImage: "url('/web.webp')" }}
      >
        {/* Left */}
        <div className="flex-1 rounded p-4 sm:p-6 flex flex-col gap-4">
          <span className="bgpl text-white px-3 py-1 rounded w-fit">#-1 Course</span>

          <h1 className="text-4xl sm:text-5xl font-bold text-black font-outfit">
            Build your skills & Upgrade your Career ✦
          </h1>

          <p className="text-sm sm:text-base text-black max-w-xl">
            We were put on this earth to help you squeeze every last shred of value
            out of your career road-map.
          </p>

          <div className="flex items-center bg-black rounded-full px-5 py-2 w-fit gap-3">
            <img src="/google.webp" alt="Google" className="w-10 h-10 rounded-full" />
            <div className="text-white">
              <p className="font-semibold text-sm">Rate 4.7/5.0</p>
              <p className="text-xs">More than 3000+ reviews</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-4">
            {[
              { icon: FaGraduationCap, title: "Fresh", subtitle: "Education", color: "green" },
              { icon: FaBriefcase, title: "Career", subtitle: "Break", color: "blue" },
              { icon: FaFlask, title: "QA", subtitle: "Professionals", color: "yellow" },
              { icon: FaCode, title: "Dev", subtitle: "Professionals", color: "red" },
              { icon: FaChartLine, title: "BA", subtitle: "Professionals", color: "purple" },
              { icon: FaRocket, title: "IT", subtitle: "Professionals", color: "pink" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className={`bg-${item.color}-200 p-3 sm:p-5 rounded-lg text-center text-black`}>
                  <h1 className="flex items-center justify-center gap-2 text-base sm:text-xl font-bold">
                    <Icon className={`text-${item.color}-700`} />
                    {item.title}
                  </h1>
                  <span className="text-gray-700 text-xs sm:text-sm">{item.subtitle}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 bg-white/5 backdrop-blur-md rounded p-4 sm:p-6 flex flex-col gap-3 shadow-xl border border-white/30">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            Apply Now to Unlock Offers
          </h1>

          <div className="flex flex-col sm:flex-row gap-2">
            <input className="border rounded px-3 py-2 flex-1" placeholder="Name" />
            <input className="border rounded px-3 py-2 flex-1" placeholder="Email" />
          </div>

          <input className="border rounded px-3 py-2" placeholder="Number" />
          <select className="border rounded px-3 py-2">
            <option>HTML</option>
            <option>CSS</option>
            <option>JS</option>
          </select>

          <button className="bg-colors text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">
            Submit
          </button>
        </div>
      </div>

      <About />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
