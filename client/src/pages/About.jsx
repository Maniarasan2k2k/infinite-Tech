import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { motion, useAnimation } from "framer-motion";

const images = ["/mern.jpg", "/mern.jpg", "/mern.jpg", "/mern.jpg", "/mern.jpg"];

const About = () => {
  return (
    <div className="p-6 flex flex-col items-center bg-gray-50 min-h-screen font-sans">
      {/* Main Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-6 leading-snug">
        <span className="text-purple-600 animate-pulse drop-shadow-xl">
          PLAYWRIGHT ACADEMY
        </span>{" "}
        <span className="text-gray-800">"1st Year" Anniversary</span>
      </h1>

      {/* Video */}
      <div className="w-full flex justify-center mb-10">
        <video
          src="/Fish.mp4"
          controls
          className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 rounded-xl shadow-2xl"
        />
      </div>

      {/* Subheading */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-4 text-gray-900">
        Starting First Year of Playwright Academy
      </h2>

      {/* Paragraph */}
      <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl text-center mb-12">
        For 16 years, we’ve been shaping the careers of QA professionals across
        the globe. What started with just one person has grown into a 130+ member
        team, presence in 32 countries, and 50,000+ learners...
      </p>

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
        <div className="overflow-hidden w-full bg-blue-970 py-1 ">
          <motion.div
            className="flex w-max gap-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 40, // slow speed
              ease: "linear",
            }}
          >
            {images.concat(images).map((src, i) => (
              <img
                key={i}
                src={src}
                className="w-60 h-auto rounded-xl shadow-lg"
                alt={`img-${i}`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
