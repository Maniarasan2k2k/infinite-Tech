import React, { useState } from "react";

const faqs = [
  {
    question: "How Will I Get The Course After Purchase?",
    answer:
      "After successful payment, you will receive login details via email. You can access the course anytime from your dashboard.",
  },
  {
    question: "Which language is the course available in?",
    answer:
      "The course is available in both Hindi and English for better understanding.",
  },
  {
    question: "Is it an online class or recorded training?",
    answer:
      "This is a pre-recorded course with lifetime access. Some live doubt-clearing sessions may also be included.",
  },
  {
    question: "How will my doubts be cleared?",
    answer:
      "You can ask questions in the discussion forum or during live doubt-clearing sessions.",
  },
  {
    question: "How is the course beneficial?",
    answer:
      "The course helps you gain real-world skills, hands-on experience, and confidence to work on real projects.",
  },
  {
    question: "Do you provide certificates?",
    answer:
      "Yes, you will receive a course completion certificate after finishing the course.",
  },
  {
    question: "What is the validity of the course?",
    answer:
      "You will get lifetime access once you enroll in the course.",
  },
  {
    question: "What are the payment modes accepted?",
    answer:
      "We accept UPI, Credit Card, Debit Card, Net Banking, and Wallet payments.",
  },
  {
    question: "I made the payment but didn’t receive any email",
    answer:
      "Please check your spam folder. If you still didn’t receive it, contact our support team for help.",
  },
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
        <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-10">
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
