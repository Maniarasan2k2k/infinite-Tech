import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonialsData = [
  {
    name: "Karthik.",
    role: "QA Engineer",
    feedback: "Karthik As a fresher, I was confused about how to start automation testing. Playwright Mastery Academy gave me clear guidance, strong fundamentals, and real-time project exposure. After completing the course, I got placed at Accenture as a QA Automation Engineer with a salary of 5.5 LPA.",
    img: "rew1.jpeg",
  },
  {
    name: "Deepa.",
    role: "Frontend Developer",
    feedback: "Deepa (Fresher). The HR Bonus Module sessions on HR questions, confidence building, and salary negotiation were extremely useful. After completing the course, I joined UST Global as a QA Engineer with a salary of 5.7 LPA.x",
    img: "rew3.jpeg",
  },
  {
    name: "Praveen.",
    role: "Full Stack Developer",
    feedback: "Praveen (Fresher). Playwright Mastery Academy focuses on what companies actually expect in interviews. The real-time scenarios and CI/CD basics helped me crack interviews. I got placed at Cognizant as a QA Engineer (L1) with a salary of 5 LPA..",
    img: "req2.jpeg",
  },
  {
    name: "Anu.",
    role: "Backend Developer",
    feedback: "Anu (Manual Tester – 3 Years). The Playwright course structure is perfect for manual testers. From JavaScript & Typescript to advanced Playwright concepts like POM and reporting, everything was clearly explained. I successfully moved into an Automation Engineer role at Wipro with 9.2 LPA salary..",
    img: "rew4.jpeg",
  },
  {
    name: "Vignesh",
    role: "Software Tester",
    feedback: "Vignesh (Fresher). The Playwright framework design, POM structure, and Git integration helped me stand out in interviews. After completing the course, I joined Hexaware as a Junior QA Automation Engineer with a package of 5.2 LPA..",
    img: "rew5.jpeg",
  },
  {
    name: "Sathish",
    role: "QA Analyst",
    feedback: "Sathish (Fresher). As a fresher, I was worried about HR rounds. The HR Bonus Module helped me with self-introduction, project explanation, and interview etiquette. I successfully joined Wipro as a Test Engineer with a salary of 4.8 LPA.",
    img: "rew6.jpeg",
  },
  {
    name: "Ramesh",
    role: "React Developer",
    feedback: "Ramesh (Manual Tester – 3 Years). Playwright Mastery Academy helped me understand JavaScript & Typescript, Playwright framework and real-time automation scenarios step by step. I transitioned into an Automation Tester role at Cognizant with a salary of 10.5 LPA.",
    img: "rew7.jpeg",
  },
  {
    name: "Rohit.",
    role: "Intern",
    feedback: "Rohit (Fresher). Playwright Mastery Academy helped me not only with automation but also with the HR Bonus Module, which covered resume building, LinkedIn optimization, and HR interview questions. This full support helped me get placed at Accenture as a QA Automation Engineer with a salary of 5.5 LPA.",
    img: "rew8.jpeg",
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
