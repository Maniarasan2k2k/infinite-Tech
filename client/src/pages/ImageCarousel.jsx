import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageCarousel = () => {
  const images = [
    "/f1.png","/f2.png","/f3.png","/f4.png","/f5.png",
    "/f6.png","/f7.png","/f8.png","/f9.png","/f10.png",
    "/f11.png","/f12.png","/f13.png","/f14.png","/f15.png"
  ];

  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(4);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const maxIndex = images.length - visibleCount;

  return (
    <div
      className="
        w-full
        bg-white
        py-6
        relative
        shadow-none
        border-0
        ring-0
        outline-none
      "
    >
      {/* LEFT BUTTON */}
      <button
        onClick={() => index > 0 && setIndex(index - 1)}
        className="
          absolute left-2 top-1/2 -translate-y-1/2 z-10
          bg-gray-700 text-white p-2 rounded-full
        "
      >
        <FaChevronLeft size={14} />
      </button>

      {/* VIEWPORT */}
      <div className="overflow-hidden max-w-6xl mx-auto px-8 bg-white">
        <div
          className="flex gap-6 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / visibleCount)}%)`,
          }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex justify-center items-center"
              style={{ width: `${100 / visibleCount}%` }}
            >
              <img
                src={img}
                alt=""
                className="h-20 sm:h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT BUTTON */}
      <button
        onClick={() => index < maxIndex && setIndex(index + 1)}
        className="
          absolute right-2 top-1/2 -translate-y-1/2 z-10
          bg-gray-700 text-white p-2 rounded-full
        "
      >
        <FaChevronRight size={14} />
      </button>

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-4 bg-white">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full cursor-pointer
              ${index === i ? "bg-gray-800" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
