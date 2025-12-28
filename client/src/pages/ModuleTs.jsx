import React, { useState } from "react";

const courses = [
  {
    course: "Playwright + TypeScript Course Modules",
    modules: [
      {
        title: "Module 1: Automation & Playwright Basics",
        points: [
          "What is Automation Testing",
          "Why Playwright",
          "Playwright vs Selenium vs Cypress",
          "Playwright Architecture",
          "Installation & First Playwright Test",
          "Project Structure",
        ],
      },
      {
        title: "Module 2: TypeScript for Automation",
        points: [
          "Why TypeScript for Automation",
          "TS vs JS (Real Project Comparison)",
          "Types, Interfaces & Enums",
          "Optional & Readonly Properties",
          "Functions with Return Types",
          "Generics (Automation Use Cases)",
          "Promises & async/await",
          "tsconfig.json Basics",
          "Common TypeScript Interview Questions",
        ],
      },
      {
        title: "Module 3: Playwright Test Runner",
        points: [
          "@playwright/test Overview",
          "test(), describe(), beforeEach, afterEach",
          "Tags & Annotations",
          "CLI Execution",
          "Parallel Execution",
          "Retries & Timeouts",
          "Headed vs Headless",
        ],
      },
      {
        title: "Module 4: Locators & Assertions",
        points: [
          "Built-in Locators",
          "getByRole, getByText, getByTestId",
          "CSS & XPath",
          "Strict Mode",
          "Dynamic Element Handling",
          "Best Locator Strategies",
        ],
      },
      {
        title: "Module 5: POM, API, CI/CD & Project",
        points: [
          "Page Object Model (POM)",
          "API Testing with Playwright",
          "Reporting & Debugging",
          "CI/CD with Azure DevOps",
          "Real-time Framework Project",
          "Interview Preparation",
        ],
      },
    ],
  },
];

const PlaywrightFAQ = () => {
  const [active, setActive] = useState(null);

  const toggle = (key) => {
    setActive(active === key ? null : key);
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-10">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Playwright + TypeScript Course Modules
        </h1>
        <p className="text-gray-600 mt-3 text-base sm:text-lg">
          Click on each module to explore the detailed syllabus
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-10">
        {courses.map((course, cIndex) => (
          <div key={cIndex}>
            {/* Course Title */}
            <h2 className="text-2xl font-bold text-green-700 mb-6">
              {course.course}
            </h2>

            {/* FAQ Modules */}
            <div className="space-y-4">
              {course.modules.map((module, mIndex) => {
                const key = `${cIndex}-${mIndex}`;
                return (
                  <div
                    key={key}
                    className="bg-white border border-gray-200 rounded-xl shadow-sm"
                  >
                    <button
                      onClick={() => toggle(key)}
                      className="w-full flex justify-between items-center px-6 py-4 text-left"
                    >
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                        {module.title}
                      </h3>
                      <span className="text-2xl text-green-600 font-bold">
                        {active === key ? "−" : "+"}
                      </span>
                    </button>

                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        active === key
                          ? "max-h-[500px] p-6 pt-0"
                          : "max-h-0 overflow-hidden"
                      }`}
                    >
                      <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                        {module.points.map((point, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-green-600 font-bold">✔</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlaywrightFAQ;
