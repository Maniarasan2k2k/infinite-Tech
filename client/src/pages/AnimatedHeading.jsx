import React from "react";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <div className="flex justify-center items-center ">
      <motion.img
        src="/logs-10.png"
        alt="Playwright Academy Logo"
        className="
          w-24
          sm:w-28
          md:w-32
          lg:w-36
          xl:w-70
          h-auto
          object-contain
          bg-white
          cursor-pointer
        "
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        whileHover={{
          scale: 1.06,
          transition: { duration: 0.3 },
        }}
      />
    </div>
  );
};
export default Logo;
