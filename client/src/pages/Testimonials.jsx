import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonialsData = [
  {
    name: "Karthik",
    role: "QA Engineer",
    feedback:
      "As a fresher, I was confused about how to start automation testing. Playwright Mastery Academy gave me clear guidance and real-time project exposure. I got placed at Accenture with 5.5 LPA.",
    img: "rew1.jpeg",
  },
  {
    name: "Deepa",
    role: "QA Engineer",
    feedback:
      "The HR Bonus Module helped me a lot in confidence building and salary negotiation. I joined UST Global with 5.7 LPA.",
    img: "rew3.jpeg",
  },
  {
    name: "Praveen",
    role: "QA Engineer",
    feedback:
      "Real-time scenarios and CI/CD basics helped me crack interviews. I joined Cognizant with 5 LPA.",
    img: "req2.jpeg",
  },
  {
    name: "Anu",
    role: "Automation Engineer",
    feedback:
      "Perfect course for manual testers. I transitioned to Automation Engineer at Wipro with 9.2 LPA.",
    img: "rew4.jpeg",
  },
];

// Desktop arrows only
const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="hidden lg:flex absolute top-1/2 right-[-20px] -translate-y-1/2 z-20 bg-green-600 hover:bg-green-700 p-3 rounded-full cursor-pointer shadow-lg"
  >
    <FaArrowRight className="text-white text-lg" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="hidden lg:flex absolute top-1/2 left-[-20px] -translate-y-1/2 z-20 bg-green-600 hover:bg-green-700 p-3 rounded-full cursor-pointer shadow-lg"
  >
    <FaArrowLeft className="text-white text-lg" />
  </div>
);

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
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
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-50 py-14">
      <div className="max-w-7xl mx-auto px-4 relative">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          What Our Students Say
        </h2>

        <Slider {...settings}>
          {testimonialsData.map((item, index) => (
            <div key={index} className="px-2">
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center h-full">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover mb-4"
                />

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                  “{item.feedback}”
                </p>

                <h3 className="text-base sm:text-lg font-semibold">
                  {item.name}
                </h3>
                <span className="text-xs sm:text-sm text-gray-500">
                  {item.role}
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
