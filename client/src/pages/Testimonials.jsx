import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonialsData = [
  {
    name: "Divya R.",
    role: "QA Engineer",
    feedback: "This course completely transformed my automation testing skills.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Suresh K.",
    role: "Frontend Developer",
    feedback: "Learned Cypress and MERN stack efficiently.",
    img: "https://randomuser.me/api/portraits/men/66.jpg",
  },
  {
    name: "Anitha P.",
    role: "Full Stack Developer",
    feedback: "Hands-on projects helped me get real-world experience.",
    img: "https://randomuser.me/api/portraits/women/67.jpg",
  },
  {
    name: "Rajesh M.",
    role: "Backend Developer",
    feedback: "Industry relevant and well structured course.",
    img: "https://randomuser.me/api/portraits/men/68.jpg",
  },
  {
    name: "Meena S.",
    role: "Software Tester",
    feedback: "Live sessions were practical and engaging.",
    img: "https://randomuser.me/api/portraits/women/69.jpg",
  },
  {
    name: "Vikram L.",
    role: "QA Analyst",
    feedback: "Excellent mentorship and guidance.",
    img: "https://randomuser.me/api/portraits/men/70.jpg",
  },
  {
    name: "Priya D.",
    role: "React Developer",
    feedback: "Project based learning boosted my confidence.",
    img: "https://randomuser.me/api/portraits/women/71.jpg",
  },
  {
    name: "Arun C.",
    role: "Intern",
    feedback: "Very beginner friendly and structured course.",
    img: "https://randomuser.me/api/portraits/men/72.jpg",
  },
];

// 🔹 Desktop arrows only
const NextArrow = ({ onClick }) => (
  <div
    className="hidden lg:flex absolute top-1/2 right-[-25px] -translate-y-1/2 z-20 cursor-pointer p-3 rounded-full bg-green-600 hover:bg-green-700 shadow-lg"
    onClick={onClick}
  >
    <FaArrowRight className="text-white text-xl" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="hidden lg:flex absolute top-1/2 left-[-25px] -translate-y-1/2 z-20 cursor-pointer p-3 rounded-full bg-green-600 hover:bg-green-700 shadow-lg"
    onClick={onClick}
  >
    <FaArrowLeft className="text-white text-xl" />
  </div>
);

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // 👈 DESKTOP: 4 per row
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 relative">
      <h2 className="text-3xl font-bold text-center mb-10">
        What People Saying
      </h2>

      <Slider {...settings}>
        {testimonialsData.map((item, index) => (
          <div key={index} className="px-2 sm:px-3">
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center h-full hover:shadow-xl transition">
              <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
              <p className="text-gray-700 mb-3 text-sm sm:text-base">
                “{item.feedback}”
              </p>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <span className="text-sm text-gray-500">{item.role}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
