import React from "react";
import { motion } from "framer-motion";

const AnimatedHeading = () => {
  const headingText = "PLAYWRIGHT ACADEMY";
  const letters = headingText.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.045 }
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 5 }
    },
  };

  return (
    <motion.h1
      className="
        text-4xl sm:text-3xl font-dancing 
        cursor-pointer relative inline-block 
        text-green-600 tracking-wider
      "
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span 
          key={index} 
          className="inline-block relative overflow-hidden"
          variants={child}
        >
          {letter === " " ? "\u00A0" : letter}

          {/* CLEAN LIGHT SWEEP - NO SHADOW */}
          <motion.span
            className="
              absolute top-0 left-0 w-full h-full
              bg-gradient-to-r from-transparent via-white/100 to-transparent
              opacity-200
            "
            initial={{ x: "-150%" }}
            animate={{ x: ["-150%", "180%"] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.085,
            }}
          />
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default AnimatedHeading;
