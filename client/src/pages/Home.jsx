import React, { useState } from 'react'
// import { FaGraduationCap } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaFlask } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import About from './About';
const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
      {/* Top Assistance Banner */}
      <div className="bg-green-500 hover:bg-green-200 transition-all duration-500 p-2 text-center">
        <h1 className="font-semibold text-sm sm:text-base">
          Need assistance? Call @ (+91) 9751688447 Or Request Call Back
        </h1>
      </div>

      {/* Header */}
      <header className="container mx-auto mt-4 flex items-center justify-between bg-white px-4 sm:px-6 py-4 shadow-sm transition-all duration-500">
        <h1 className="text-xl sm:text-2xl font-bold">PLAYWRIGHT ACADEMY</h1>

        {/* Desktop Menu */}
        <nav className="hidden sm:flex items-center gap-6 text-lg relative">
      <ul className="flex items-center gap-6">
        <li
          className="cursor-pointer hover:text-green-600 transition-all duration-300"
          onClick={() => navigate("/")}
        >
          Home
        </li>

        {/* Course Dropdown */}
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
          Conduct us
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

        {/* Mobile Hamburger Button */}
        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="sm:hidden bg-white shadow-md px-4 py-4">
          <ul className="flex flex-col gap-3 text-base">
            <li className="cursor-pointer hover:text-green-600 transition-all duration-300">Home</li>
            <li className="cursor-pointer hover:text-green-600 transition-all duration-300">Course</li>
            <li className="cursor-pointer hover:text-green-600 transition-all duration-300">Conduct us</li>
            <li className="cursor-pointer hover:text-green-600 transition-all duration-300">Q&A</li>
            <li>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-green-700 hover:shadow-lg w-full">
                Login
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Hero Section */}
      <div
        className="bg_div container mx-auto mt-5   rounded transition-all duration-500 bg-cover bg-center flex flex-col lg:flex-row gap-6 p-6"
        style={{ backgroundImage: "url('/web.webp')" }}
      >
        {/* Left Side */}
        <div className="left flex-1  bg-opacity-40  rounded p-6 flex flex-col gap-4 text-white">
          <div className="flex gap-4">
            <span className="bg-green-600 text-white px-3 py-1 rounded">TeastLeaf</span>
            <span className="bg-blue-600 text-white px-3 py-1 rounded">#-1 Course</span>
          </div>

          <h1 className="text-4xl text-black sm:text-5xl font-bold font-outfit">
            Build your skills & Upgrade your Career ✦
          </h1>

          <p className="text-sm sm:text-base text-black">
            We were put on this earth to help you squeeze every last shred of value out of your career road-map.
          </p>

          {/* Reviews Card */}
          <div className="flex items-center bg-black rounded-full px-5 shadow-md w-max gap-2 p-1 text-gray-800">
            <img src="/google.webp" alt="Google" className="w-12 h-12 sm:w-10 sm:h-10 object-cover rounded-full" />
            <div className="flex flex-col text-white">
              <span className="font-semibold text-sm sm:text-base">Rate 4.7/5.0</span>
              <span className="text-xs sm:text-sm">More than 3000+ reviews</span>
            </div>
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-4">

  {/* 1 - Fresh */}
  <div className="bg-green-200 p-3 sm:p-5 rounded-lg text-center text-black min-w-0 break-words">
    <h1 className="flex items-center justify-center gap-2 text-base sm:text-xl font-bold">
      <FaGraduationCap className="text-green-700 text-lg sm:text-xl" />
      <span className="break-words">Fresh</span>
    </h1>
    <span className="text-gray-700 text-xs sm:text-sm block">Education</span>
  </div>

  {/* 2 - Career */}
  <div className="bg-blue-200 p-3 sm:p-5 rounded-lg text-center text-black min-w-0 break-words">
    <h1 className="flex items-center justify-center gap-2 text-base sm:text-xl font-bold">
      <FaBriefcase className="text-blue-700 text-lg sm:text-xl" />
      <span className="break-words">Career</span>
    </h1>
    <span className="text-gray-700 text-xs sm:text-sm block">Break</span>
  </div>

  {/* 3 - QA */}
  <div className="bg-yellow-200 p-3 sm:p-5 rounded-lg text-center text-black min-w-0 break-words">
    <h1 className="flex items-center justify-center gap-2 text-base sm:text-xl font-bold">
      <FaFlask className="text-yellow-700 text-lg sm:text-xl" />
      <span className="break-words">QA</span>
    </h1>
    <span className="text-gray-700 text-xs sm:text-sm block">Professionals</span>
  </div>

  {/* 4 - Dev */}
  <div className="bg-red-200 p-3 sm:p-5 rounded-lg text-center text-black min-w-0 break-words">
    <h1 className="flex items-center justify-center gap-2 text-base sm:text-xl font-bold">
      <FaCode className="text-red-700 text-lg sm:text-xl" />
      <span className="break-words">Dev</span>
    </h1>
    <span className="text-gray-700 text-xs sm:text-sm block">Professionals</span>
  </div>

  {/* 5 - BA */}
  <div className="bg-purple-200 p-3 sm:p-5 rounded-lg text-center text-black min-w-0 break-words">
    <h1 className="flex items-center justify-center gap-2 text-base sm:text-xl font-bold">
      <FaChartLine className="text-purple-700 text-lg sm:text-xl" />
      <span className="break-words">BA</span>
    </h1>
    <span className="text-gray-700 text-xs sm:text-sm block">Professionals</span>
  </div>

  {/* 6 - IT */}
  <div className="bg-pink-200 p-3 sm:p-5 rounded-lg text-center text-black min-w-0 break-words">
    <h1 className="flex items-center justify-center gap-2 text-base sm:text-xl font-bold">
      <FaRocket className="text-pink-700 text-lg sm:text-xl" />
      <span className="break-words">IT</span>
    </h1>
    <span className="text-gray-700 text-xs sm:text-sm block">Professionals</span>
  </div>

</div>

        </div>

        {/* Right Side */}
           <div className="right flex-1 bg-white/40 backdrop-blur-md rounded p-6 flex flex-col gap-4 shadow-xl border border-white/30">
  <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Apply Now to Unlock Offers</h1>

  {/* Span tags in one row */}
  <div className="flex justify-between text-gray-700 font-medium">
    <span className="text-xs sm:text-sm border px-2 py-1 rounded-full">Limited Seats</span>
    <span className="text-xs sm:text-sm border px-2 py-1 rounded-full">Take 30 seconds</span>
    <span className="text-xs sm:text-sm border px-2 py-1 rounded-full">No Spam</span>
  </div>

  {/* Select */}
  <select className="border rounded px-3 py-2 w-full">
    <option value="">HTML</option>
    <option value="">CSS</option>
    <option value="">JS</option>
  </select>

  {/* Name & Email inputs */}
  <div className="flex flex-col sm:flex-row gap-2">
    <input type="text" placeholder="Name" className="border rounded px-3 py-2 flex-1"/>
    <input type="text" placeholder="Email" className="border rounded px-3 py-2 flex-1"/>
  </div>

  {/* Number input */}
  <input type="text" placeholder="Number" className="border rounded px-3 py-2 w-full"/>

  {/* Captcha */}
  <p className="font-medium text-gray-700 text-sm">Security Verification</p>
  <div className="flex gap-2 items-center">
    <h1 className="bg-gray-300 px-4 py-2 rounded font-bold text-sm">68909</h1>
    <input type="text" placeholder="Enter Captcha Code" className="border rounded px-3 py-2 flex-1"/>
  </div>

  {/* Button */}
  <button className="bg-green-600 text-white px-5 py-2 rounded-lg mt-2 hover:bg-green-700 transition-all duration-300">
    Apply Now
  </button>

  {/* Terms */}
  <p className="text-gray-600 text-xs sm:text-sm mt-2">
    By registering, I agree to be contacted via phone, SMS, or email for offers & products, even if I am on a DNC/NDNC list.
  </p>
</div>

      </div>

      <About />
    </>
  )
}

export default Home



// https://www.testleaf.com/