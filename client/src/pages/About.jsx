import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { motion, useAnimation } from "framer-motion";

const images = [ "/cypress.png", "/stackm.png", "/playwright-logo.svg"];

const About = () => {
  return (
    <div className="p-6 flex flex-col items-center bg-gray-50 min-h-screen font-sans">
      {/* Main Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-6 leading-snug">
        <span className="text-green-600 animate-pulse drop-shadow-xl">
          PLAYWRIGHT <br /> ACADEMY
        </span>{" "}
      </h1>

      {/* Video */}
      <div className="w-full flex justify-center mb-10 px-4">
  <div className="w-full sm:w-3/4 md:w-2/3 lg:w-4/7 aspect-video">
    <video
      src="/Fish.mp4"
      controls
      className="w-full h-full rounded-xl shadow-2xl object-cover"
    />
  </div>
</div>


      
      
      {/* Blue Section */}
      
      {/* --------------------------------------------------- */}
      
          <h1
  className="mt-30 text-4xl font-extrabold tracking-wide text-center green-silver-glow light-sweep"
>
  COURSES
</h1>



           <div className="w-full px-4 py-10">
  {/* Responsive Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
  {/* CARD 1 */}
  <div className="bg-white rounded-xl shadow-lg p-5 w-full max-w-md mx-auto hover:shadow-[0_0_25px_#22c55e] hover:scale-105 transition-all duration-300">
    <div className="w-full h-64 rounded-lg overflow-hidden mb-4">
      <img
        src="/playwright-logo.svg"
        alt="Playwright"
        className="w-full h-full object-contain"
      />
    </div>
    <h1 className="text-2xl font-bold mb-2">Playwrights + Javascript</h1>
    <p className="text-gray-700 text-sm leading-relaxed mb-4">
      Master full stack web development with Python. Learn backend with Django,
      frontend with React, database management, REST APIs, and deployment.
      Includes real-world projects and internship.
    </p>
    <div className="flex justify-between text-sm text-gray-600 mb-2">
      <span className="font-medium">3 Month Internship</span>
      <span className="font-medium">Live Session</span>
    </div>
    <div className="flex justify-between text-sm text-gray-600 mb-4">
      <span className="font-medium">⭐ 4.9 (210 reviews)</span>
      <span className="font-medium">Lesson 10</span>
    </div>
    <div className="flex justify-between items-center mt-3">
      <div className="text-xl font-bold text-green-600">$4000</div>
      <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold">
        Enroll Now
      </button>
    </div>
  </div>

  {/* CARD 2 */}
  <div className="bg-white rounded-xl shadow-lg p-5 w-full max-w-md mx-auto hover:shadow-[0_0_25px_#22c55e] hover:scale-105 transition-all duration-300">
    <div className="w-full h-64 rounded-lg overflow-hidden mb-4">
      <img
        src="/stackm.png"
        alt="MERN STACK"
        className="w-full h-full object-contain"
      />
    </div>
    <h1 className="text-2xl font-bold mb-2">Playwright + Typescript</h1>
    <p className="text-gray-700 text-sm leading-relaxed mb-4">
      Master MERN development with MongoDB, Express, React and Node.js.
      Includes real-world projects, deployment and internship.
    </p>
    <div className="flex justify-between text-sm text-gray-600 mb-2">
      <span className="font-medium">3 Month Internship</span>
      <span className="font-medium">Live Session</span>
    </div>
    <div className="flex justify-between text-sm text-gray-600 mb-4">
      <span className="font-medium">⭐ 4.9 (210 reviews)</span>
      <span className="font-medium">Lesson 10</span>
    </div>
    <div className="flex justify-between items-center mt-3">
      <div className="text-xl font-bold text-green-600">$4000</div>
      <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold">
        Enroll Now
      </button>
    </div>
  </div>

  {/* CARD 3 */}
  <div className="bg-white rounded-xl shadow-lg p-5 w-full max-w-md mx-auto hover:shadow-[0_0_25px_#22c55e] hover:scale-105 transition-all duration-300">
    <div className="w-full h-64 rounded-lg overflow-hidden mb-4">
      <img
        src="/cypress.png"
        alt="Cypress"
        className="w-full h-full object-contain"
      />
    </div>
    <h1 className="text-2xl font-bold mb-2">Playwright + Python</h1>
    <p className="text-gray-700 text-sm leading-relaxed mb-4">
      Learn automation testing using Selenium WebDriver, TestNG, frameworks,
      CI/CD and real-world projects with internship.
    </p>
    <div className="flex justify-between text-sm text-gray-600 mb-2">
      <span className="font-medium">3 Month Internship</span>
      <span className="font-medium">Live Session</span>
    </div>
    <div className="flex justify-between text-sm text-gray-600 mb-4">
      <span className="font-medium">⭐ 4.9 (210 reviews)</span>
      <span className="font-medium">Lesson 10</span>
    </div>
    <div className="flex justify-between items-center mt-3">
      <div className="text-xl font-bold text-green-600">$4000</div>
      <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold">
        Enroll Now
      </button>
    </div>
  </div>


  {/* <div className="bg-white rounded-xl shadow-lg p-5 w-full max-w-md mx-auto hover:shadow-[0_0_25px_#22c55e] hover:scale-105 transition-all duration-300">
    <div className="w-full h-64 rounded-lg overflow-hidden mb-4">
      <img
        src="/cypress.png"
        alt="Cypress"
        className="w-full h-full object-contain"
      />
    </div>
    <h1 className="text-2xl font-bold mb-2">Playwright + C#</h1>
    <p className="text-gray-700 text-sm leading-relaxed mb-4">
      Learn automation testing using Selenium WebDriver, TestNG, frameworks,
      CI/CD and real-world projects with internship.
    </p>
    <div className="flex justify-between text-sm text-gray-600 mb-2">
      <span className="font-medium">3 Month Internship</span>
      <span className="font-medium">Live Session</span>
    </div>
    <div className="flex justify-between text-sm text-gray-600 mb-4">
      <span className="font-medium">⭐ 4.9 (210 reviews)</span>
      <span className="font-medium">Lesson 10</span>
    </div>
    <div className="flex justify-between items-center mt-3">
      <div className="text-xl font-bold text-green-600">$4000</div>
      <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold">
        Enroll Now
      </button>
    </div>
  </div> */}
</div>

</div>


    </div>
  );
};

export default About;
