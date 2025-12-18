import React, { useState } from "react";
import { FaGraduationCap, FaBriefcase, FaFlask, FaCode, FaChartLine, FaRocket } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import AnimatedHeading from "./AnimatedHeading";

const Home = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileCourseOpen, setMobileCourseOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-green-500 hover:bg-green-200 transition-all duration-500 p-2 text-center">
        <h1 className="font-semibold text-sm sm:text-base">
          Need assistance? Call @ (+91) 9751688447 Or Request Call Back
        </h1>
      </div>

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 transition-all duration-500">
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
          
          <div onClick={() => navigate("/")} className="cursor-pointer">
            <AnimatedHeading />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden sm:flex items-center gap-6 text-lg relative">
            <ul className="flex items-center gap-6">
              <li
                className="cursor-pointer hover:text-green-600 transition-all duration-300"
                onClick={() => navigate("/")}
              >
                Home
              </li>

              {/* Desktop Course Dropdown */}
              <li
                className="relative cursor-pointer hover:text-green-600 transition-all duration-300"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                Course
                {dropdownOpen && (
                  <ul className="absolute top-full left-0 mt-1 w-28 bg-white shadow-lg rounded border border-gray-200 z-50">
                    <li
                      className="px-4 py-2 hover:bg-green-100 cursor-pointer"
                      onClick={() => navigate("/html")}
                    >
                      HTML
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-green-100 cursor-pointer"
                      onClick={() => navigate("/css")}
                    >
                      CSS
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-green-100 cursor-pointer"
                      onClick={() => navigate("/js")}
                    >
                      JS
                    </li>
                  </ul>
                )}
              </li>

              <li
                className="cursor-pointer hover:text-green-600 transition-all duration-300"
                onClick={() => navigate("/contact")}
              >
                Contact us
              </li>
              <li
                className="cursor-pointer hover:text-green-600 transition-all duration-300"
                onClick={() => navigate("/qa")}
              >
                Q&A
              </li>

              <li>
                <button className="bg-green-600 text-white px-5 py-2 rounded-lg transition-all duration-300 hover:bg-green-700 hover:shadow-lg">
                  Login
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Hamburger */}
          <div className="sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:hidden bg-white shadow-md px-4 py-4">
            <ul className="flex flex-col gap-3 text-base">
              <li
                className="cursor-pointer hover:text-green-600 transition-all duration-300"
                onClick={() => navigate("/")}
              >
                Home
              </li>

              {/* Mobile Course Dropdown */}
              <li className="cursor-pointer hover:text-green-600 transition-all duration-300">
                <div
                  onClick={() => setMobileCourseOpen(!mobileCourseOpen)}
                  className="flex justify-between items-center"
                >
                  Course
                  <span>{mobileCourseOpen ? "▲" : "▼"}</span>
                </div>

                {mobileCourseOpen && (
                  <ul className="pl-4 mt-2 flex flex-col gap-1">
                    <li
                      className="px-2 py-1 hover:bg-green-100 rounded cursor-pointer"
                      onClick={() => navigate("/html")}
                    >
                      HTML
                    </li>
                    <li
                      className="px-2 py-1 hover:bg-green-100 rounded cursor-pointer"
                      onClick={() => navigate("/css")}
                    >
                      CSS
                    </li>
                    <li
                      className="px-2 py-1 hover:bg-green-100 rounded cursor-pointer"
                      onClick={() => navigate("/js")}
                    >
                      JS
                    </li>
                  </ul>
                )}
              </li>

              <li
                className="cursor-pointer hover:text-green-600 transition-all duration-300"
                onClick={() => navigate("/contact")}
              >
                Conduct us
              </li>
              <li
                className="cursor-pointer hover:text-green-600 transition-all duration-300"
                onClick={() => navigate("/qa")}
              >
                Q&A
              </li>

              <li>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg w-full hover:bg-green-700 hover:shadow-lg transition-all duration-300">
                  Login
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div
        className="bg_div container mx-auto mt-24 rounded transition-all duration-500 bg-cover bg-center flex flex-col lg:flex-row gap-6 p-6"
        style={{ backgroundImage: "url('/web.webp')" }}
      >
        {/* Left Side */}
        <div className="left flex-1 bg-opacity-40 rounded p-6 flex flex-col gap-4 text-white">
          <div className="flex gap-4">
            <span className="bg-green-600 text-white px-3 py-1 rounded">
              TeastLeaf
            </span>
            <span className="bg-blue-600 text-white px-3 py-1 rounded">
              #-1 Course
            </span>
          </div>

          <h1 className="text-4xl text-black sm:text-5xl font-bold font-outfit">
            Build your skills & Upgrade your Career ✦
          </h1>

          <p className="text-sm sm:text-base text-black">
            We were put on this earth to help you squeeze every last shred of value
            out of your career road-map.
          </p>

          {/* Reviews Card */}
          <div className="flex items-center bg-black rounded-full px-5 shadow-md w-max gap-2 p-1 text-gray-800">
            <img
              src="/google.webp"
              alt="Google"
              className="w-12 h-12 sm:w-10 sm:h-10 object-cover rounded-full"
            />
            <div className="flex flex-col text-white">
              <span className="font-semibold text-sm sm:text-base">Rate 4.7/5.0</span>
              <span className="text-xs sm:text-sm">More than 3000+ reviews</span>
            </div>
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-4">
            {[{icon: FaGraduationCap, title: "Fresh", subtitle: "Education", color: "green"},
              {icon: FaBriefcase, title: "Career", subtitle: "Break", color: "blue"},
              {icon: FaFlask, title: "QA", subtitle: "Professionals", color: "yellow"},
              {icon: FaCode, title: "Dev", subtitle: "Professionals", color: "red"},
              {icon: FaChartLine, title: "BA", subtitle: "Professionals", color: "purple"},
              {icon: FaRocket, title: "IT", subtitle: "Professionals", color: "pink"}].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className={`bg-${item.color}-200 p-3 sm:p-5 rounded-lg text-center text-black min-w-0 break-words`}>
                    <h1 className="flex items-center justify-center gap-2 text-base sm:text-xl font-bold">
                      <Icon className={`text-${item.color}-700 text-lg sm:text-xl`} />
                      <span className="break-words">{item.title}</span>
                    </h1>
                    <span className="text-gray-700 text-xs sm:text-sm block">{item.subtitle}</span>
                  </div>
                );
            })}
          </div>
        </div>

        {/* Right Side */}
        <div className="right flex-1 bg-white/5 backdrop-blur-md rounded p-4 flex flex-col gap-3 shadow-xl border border-white/30 h-130">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Apply Now to Unlock Offers</h1>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <input type="text" placeholder="Name" className="border rounded px-3 py-2 flex-1"/>
            <input type="text" placeholder="Email" className="border rounded px-3 py-2 flex-1"/>
          </div>
          <input type="text" placeholder="Number" className="border rounded px-3 py-2 w-full"/>
          <select className="border rounded px-3 py-2 w-full">
            <option value="">HTML</option>
            <option value="">CSS</option>
            <option value="">JS</option>
          </select>
          
          <button className="bg-green-600 text-white px-5 py-2 rounded-lg mt-2 hover:bg-green-700 transition-all duration-300">
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
