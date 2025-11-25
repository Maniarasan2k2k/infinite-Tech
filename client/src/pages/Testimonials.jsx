import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonialsData = [
  {
    name: "Divya R.",
    role: "QA Engineer",
    feedback:
      "This course completely transformed my automation testing skills. Highly recommend!",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Suresh K.",
    role: "Frontend Developer",
    feedback:
      "Learned Cypress and MERN stack efficiently. Trainers were very supportive.",
    img: "https://randomuser.me/api/portraits/men/66.jpg",
  },
  {
    name: "Anitha P.",
    role: "Full Stack Developer",
    feedback:
      "Hands-on projects helped me get real-world experience. Loved the internship!",
    img: "https://randomuser.me/api/portraits/women/67.jpg",
  },
  {
    name: "Rajesh M.",
    role: "Backend Developer",
    feedback:
      "The course content is updated and industry-relevant. Great learning journey.",
    img: "https://randomuser.me/api/portraits/men/68.jpg",
  },
  {
    name: "Meena S.",
    role: "Software Tester",
    feedback:
      "Practical examples and live sessions made learning Cypress enjoyable.",
    img: "https://randomuser.me/api/portraits/women/69.jpg",
  },
  {
    name: "Vikram L.",
    role: "QA Analyst",
    feedback:
      "The mentorship and guidance were excellent. Definitely worth joining.",
    img: "https://randomuser.me/api/portraits/men/70.jpg",
  },
  {
    name: "Priya D.",
    role: "React Developer",
    feedback:
      "Project-based learning helped me build confidence for interviews.",
    img: "https://randomuser.me/api/portraits/women/71.jpg",
  },
  {
    name: "Arun C.",
    role: "Intern",
    feedback:
      "I gained a lot of hands-on experience. The course is very well structured.",
    img: "https://randomuser.me/api/portraits/men/72.jpg",
  },
];

// Creative Arrows
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-0 transform -translate-y-1/2 z-20 cursor-pointer p-3 rounded-full bg-green-600 hover:bg-green-700 shadow-lg transition-all duration-300"
    onClick={onClick}
  >
    <FaArrowRight className="text-white text-xl sm:text-2xl" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-0 transform -translate-y-1/2 z-20 cursor-pointer p-3 rounded-full bg-green-600 hover:bg-green-700 shadow-lg transition-all duration-300"
    onClick={onClick}
  >
    <FaArrowLeft className="text-white text-xl sm:text-2xl" />
  </div>
);

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
    appendDots: (dots) => (
      <div className="mt-4">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 rounded-full bg-green-600 hover:bg-green-700 transition-all"></div>
    ),
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 relative">
      <h2 className="text-3xl font-bold text-center mb-10">
        What Our Students Say
      </h2>

      <Slider {...settings}>
        {testimonialsData.map((item, index) => (
          <div key={index} className="px-3">
            <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300 h-full text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-700 mb-3">&quot;{item.feedback}&quot;</p>
              <h3 className="text-lg font-bold">{item.name}</h3>
              <span className="text-sm text-gray-500">{item.role}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
