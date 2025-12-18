import React, { useState } from "react";

const faqs = [
  {
    question: "Who can join this Playwright + JavaScript course?",
    answer:
      "Freshers, manual testers, and professionals with Selenium or Cypress experience can join. No prior automation knowledge is required..",
  },
  {
    question: "Do I need JavaScript knowledge before joining?",
    answer:
      "No. We cover JavaScript from basics to advanced as part of the course.",
  },
  {
    question: "What tools and technologies will I learn?",
    answer:
      "You will learn Playwright with JavaScript, POM, BDD, CI/CD, and real-time automation frameworks",
  },
  {
    question: "Is this course suitable for freshers?",
    answer:
      "Yes. This course is fresher-friendly and designed to build skills from scratch.",
  },
  {
    question: "Will I get hands-on experience?",
    answer:
      "Yes. You will work on real-time projects, practical assignments, and framework-based automation",
  },
  {
    question: "Does the course include interview preparation?",
    answer:
      "Yes. We provide HR interview preparation, resume building, and LinkedIn/Naukri profile optimization.",
  },
  {
    question: "Will I learn CI/CD integration?",
    answer:
      "Yes. The course includes CI/CD integration using tools like Azure DevOps and GitHub Actions..",
  },
  {
    question: "Is this a recorded or live course?",
    answer:
      "This course includes live instructor-led sessions along with recorded videos for revision and lifetime access.",
  },
  {
    question: "Do you provide placement support?",
    answer:
      "Yes. We offer 100% placement assistance with interview guidance and job referrals.",
  },
  {
    question: "Why choose Playwright Mastery Academy?",
    answer:
      "We are a dedicated academy for Playwright, offering structured learning, expert trainers, and job-focused training.",
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 py-14 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Heading */}
        <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-10 text-black">
          Frequently Asked Questions
        </h1>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-gray-800 hover:bg-blue-50 transition"
              >
                <span>{faq.question}</span>
                <span className="text-blue-600 text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              {activeIndex === index && (
                <div className="px-6 pb-4 text-gray-600 text-sm sm:text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FAQ;
