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
      <div className="w-full flex justify-center mb-10">
  <div className="w-full sm:w-3/4 md:w-2/3 lg:w-4/5 aspect-video">
    <video
      src="/Fish.mp4"
      controls
      className="w-full h-full rounded-xl shadow-2xl object-cover"
    />
  </div>
</div>

      
      
      {/* Blue Section */}
      <div className="w-full max-w-4xl mx-auto p-6 bg-blue-950 rounded-lg text-white text-center shadow-xl">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">
          Trained 50,000+ professionals across 12 countries
        </h1>

        <div className="flex justify-center gap-2 mb-4 text-yellow-400 text-2xl">
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
        </div>

        <p className="text-white text-base sm:text-lg mb-6">
          Excellence & dedication in training QA professionals globally.
        </p>

        {/* Continuous Loop Sliding Images */}
        <div className="overflow-hidden w-full bg-blue-970 py-1">
  <motion.div
    className="flex w-max gap-10"
    animate={{ x: ["0%", "-50%"] }}
    transition={{
      repeat: Infinity,
      repeatType: "loop",
      duration: 40,
      ease: "linear",
    }}
  >
    {images.concat(images).map((src, i) => (
      <div
        key={i}
        className="w-60 h-40 flex-shrink-0 rounded-xl overflow-hidden shadow-lg"
      >
        <img
          src={src}
          alt={`img-${i}`}
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </motion.div>
</div>

      </div>
      {/* --------------------------------------------------- */}
      
          <h1
  className="mt-30 text-4xl font-extrabold tracking-wide text-center green-silver-glow light-sweep"
>
  COURSES
</h1>



           <div className="w-full px-4 py-10">
  {/* Responsive Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* CARD 1 */}
    <div className="bg-white rounded-xl shadow-lg p-5 w-full">
      <img
        src="/playwright-logo.svg"
        alt=""
        className="w-full h-63 object-cover rounded-lg mb-4"
      />

      <h1 className="text-2xl font-bold mb-2">Playwrights</h1>

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
    <div className="bg-white rounded-xl shadow-lg p-5 w-full">
      <img
        src="/stackm.png"
        alt=""
        className="w-full h-63 object-cover rounded-lg mb-4"
      />

      <h1 className="text-2xl font-bold mb-2">MERN STACK</h1>

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
    <div className="bg-white rounded-xl shadow-lg p-5 w-full">
  <div className="w-full h-64 rounded-lg overflow-hidden mb-4">
    <img
      src="/cypress.png"
      alt="Cypress Course"
      className="w-full h-full object-contain"
    />
  </div>

  <h1 className="text-2xl font-bold mb-2">Cypress</h1>

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


  </div>
</div>


    </div>
  );
};

export default About;
