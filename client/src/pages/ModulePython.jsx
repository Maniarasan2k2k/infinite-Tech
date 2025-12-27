import React, { useState } from "react";

const modules = [
  {
    title: "Module 1: Automation & Playwright Basics",
    points: [
      "What is Automation Testing",
      "Why Playwright",
      "Playwright Architecture",
      "Playwright vs Selenium",
      "Installation & Setup (Python)",
      "First Playwright Test",
    ],
  },
  {
    title: "Module 2: Python for Automation",
    points: [
      "Why Python for Automation",
      "Python vs JS vs TS",
      "Variables & Data Types",
      "Loops & Conditions",
      "Functions & Lambda",
      "Exception Handling",
    ],
  },
  {
    title: "Module 3: Playwright Test Runner",
    points: [
      "Pytest Basics",
      "Test Structure",
      "Fixtures & Hooks",
      "Parallel Execution",
      "Retries & Timeouts",
      "Headed vs Headless",
    ],
  },
  {
    title: "Module 4: Locators & Assertions",
    points: [
      "Playwright Locators",
      "CSS & XPath",
      "Actions",
      "Assertions",
      "Soft Assertions",
      "Auto Wait Mechanism",
    ],
  },
  {
    title: "Module 5: UI Handling",
    points: [
      "Alerts & Popups",
      "Dropdowns",
      "Checkboxes & Radio",
      "File Upload & Download",
      "iFrames",
      "Calendars",
    ],
  },
  {
    title: "Module 6: POM & Test Data",
    points: [
      "What is POM",
      "Folder Structure",
      "Reusable Page Classes",
      "Data Driven Testing",
      "JSON / YAML Test Data",
    ],
  },
  {
    title: "Module 7: BDD with Playwright",
    points: [
      "BDD Fundamentals",
      "Gherkin Syntax",
      "Behave Setup",
      "Feature Files",
      "Step Definitions",
    ],
  },
  {
    title: "Module 8: Reports & Debugging",
    points: [
      "Screenshots on Failure",
      "Video Recording",
      "HTML Reports",
      "Trace Viewer",
      "Debugging Techniques",
    ],
  },
  {
    title: "Module 9: API Testing",
    points: [
      "API Testing Basics",
      "Playwright APIRequestContext",
      "API Assertions",
      "UI + API Integration",
    ],
  },
  {
    title: "Module 10: CI/CD & Real Project",
    points: [
      "CI/CD Basics",
      "Azure DevOps Pipeline",
      "Headless Execution",
      "End-to-End Project",
      "Interview Preparation",
    ],
  },
];

const CourseModulesFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-10">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Playwright + Python Course Modules
        </h1>
        <p className="text-gray-600 mt-3 text-base sm:text-lg">
          Click each module to view detailed syllabus
        </p>
      </div>

      {/* FAQ Container */}
      <div className="max-w-4xl mx-auto space-y-4">
        {modules.map((module, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
            >
              <h2 className="text-base sm:text-lg font-semibold text-gray-800">
                {module.title}
              </h2>
              <span className="text-2xl text-green-600 font-bold">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* Answer */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === index ? "max-h-[500px] p-6 pt-0" : "max-h-0 overflow-hidden"
              }`}
            >
              <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                {module.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✔</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseModulesFAQ;
