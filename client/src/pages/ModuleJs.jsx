import React, { useState } from "react";

const modules = [
  {
    title: "Module 1: Automation & Playwright Basics",
    points: [
      "What is Automation Testing",
      "Why Playwright over Selenium & Cypress",
      "Playwright Architecture",
      "Playwright vs Selenium vs Cypress (Interview view)",
      "Supported Browsers & Platforms",
      "Installation & First Playwright Test",
      "Playwright Project Structure",
    ],
  },
  {
    title: "Module 2: JavaScript for Automation (Focused)",
    points: [
      "JS Fundamentals for QA",
      "Variables (var, let, const)",
      "Data Types & Operators",
      "Conditions & Loops",
      "Functions & Arrow Functions",
      "Arrays & Objects (Important methods)",
      "Promises & async/await",
      "Common JavaScript Interview Questions",
    ],
  },
  {
    title: "Module 3: Playwright Test Runner",
    points: [
      "@playwright/test Overview",
      "Test & Describe Blocks",
      "Hooks (beforeEach, afterEach)",
      "Tags & Annotations",
      "CLI Execution",
      "Parallel Runs, Retries & Timeouts",
      "Headed vs Headless Mode",
    ],
  },
  {
    title: "Module 4: Locators & Selectors",
    points: [
      "Built-in Locators",
      "getByRole, getByText, getByLabel",
      "CSS & XPath",
      "Chaining Locators",
      "Locator vs ElementHandle",
      "Strict Mode",
      "Best Locator Strategies (Real-time)",
    ],
  },
  {
    title: "Module 5: Actions & Assertions",
    points: [
      "Click, Fill, Type, Hover",
      "Checkbox & Radio Actions",
      "Keyboard & Mouse Actions",
      "Hard & Soft Assertions",
      "Visibility & Text Assertions",
      "Auto-wait Mechanism (Interview Focus)",
    ],
  },
  {
    title: "Module 6: UI Components Handling",
    points: [
      "Alerts & Popups",
      "Dropdowns (Static & Dynamic)",
      "File Upload & Download",
      "iFrames",
      "Tooltips & Sliders",
      "Calendars & Date Pickers",
    ],
  },
  {
    title: "Module 7: Multiple Pages & Windows",
    points: [
      "New Tab & Window Handling",
      "waitForEvent('page')",
      "Switching Between Pages",
      "Authentication Popups",
      "Real Interview Scenarios",
    ],
  },
  {
    title: "Module 8: Waits & Synchronization",
    points: [
      "Auto Waits",
      "Explicit Waits",
      "waitForSelector & waitForLoadState",
      "waitForRequest & waitForResponse",
      "Avoiding setTimeout",
      "Flaky Test Fixes (CI Focus)",
    ],
  },
  {
    title: "Module 9: Test Data Management",
    points: [
      "JSON Test Data",
      "Environment-based Data",
      "Dynamic Test Data",
      "Data-driven Testing",
    ],
  },
  {
    title: "Module 10: Page Object Model (POM)",
    points: [
      "What is POM",
      "Folder Structure",
      "Page Classes Creation",
      "Reusability & Maintainability",
      "POM Best Practices",
      "Real-time Framework Usage",
    ],
  },
  {
    title: "Module 11: Configuration & Environments",
    points: [
      "playwright.config.js",
      "Multiple Environments (QA/UAT/PROD)",
      "Environment Variables",
      "Global Setup & Teardown",
      "Browser & Device Configuration",
    ],
  },
  {
    title: "Module 12: Screenshots, Videos & Traces",
    points: [
      "Screenshot on Failure",
      "Video Recording",
      "Playwright Trace Viewer",
      "Debugging Failed Tests",
      "Playwright Inspector",
      "CI Failure Analysis",
    ],
  },
  {
    title: "Module 13: API Testing with Playwright",
    points: [
      "API Testing Basics",
      "request.newContext()",
      "GET, POST, PUT, DELETE",
      "API Assertions",
      "UI + API Hybrid Testing",
    ],
  },
  {
    title: "Module 14: Reporting",
    points: [
      "Default HTML Report",
      "Custom Report Configuration",
      "Screenshots & Videos in Reports",
      "Sharing Reports with Team",
    ],
  },
  {
    title: "Module 15: CI/CD Integration",
    points: [
      "Running Tests in CI",
      "Playwright with Azure DevOps",
      "Pipeline YAML Explanation",
      "Headless Execution in CI",
      "Handling Failures",
      "CI/CD Interview Questions",
    ],
  },
  {
    title: "Module 16: Real-Time Framework & BDD Project",
    points: [
      "End-to-End Framework Development",
      "BDD Framework Creation",
      "Login & Business Flows",
      "Reusable Utilities & Helpers",
      "Industry-level Best Practices",
    ],
  },
  {
    title: "Module 17: Interview Preparation",
    points: [
      "Playwright Interview Questions",
      "JavaScript Interview Questions",
      "CI/CD Interview Questions",
      "Automation Scenarios",
      "Debugging Questions",
      "Mock Interviews",
    ],
  },
  {
    title: "Module 18: AI in Playwright",
    points: [
      "Gen AI for Test Automation",
      "Generating Test Cases & Data",
      "Agentic AI Basics",
      "Self-healing Automation Concept",
      "Playwright MCP Overview",
      "AI Usage in Interviews & Resume",
    ],
  },
  {
    title: "⭐ Bonus: HR Interview & Career Preparation",
    points: [
      "HR Interview Fundamentals",
      "Resume Building (ATS Friendly)",
      "LinkedIn & Naukri Profile Optimization",
      "Salary & Notice Period Handling",
      "Mock HR Interviews",
    ],
  },
];

const PlaywrightJSFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-10">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Playwright + JavaScript Course Modules
        </h1>
        <p className="text-gray-600 mt-3 text-base sm:text-lg">
          Click on each module to explore detailed syllabus
        </p>
      </div>

      {/* FAQ */}
      <div className="max-w-5xl mx-auto space-y-4">
        {modules.map((module, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left"
            >
              <h2 className="text-base sm:text-lg font-semibold text-gray-800">
                {module.title}
              </h2>
              <span className="text-2xl text-green-600 font-bold">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            <div
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === index
                  ? "max-h-[600px] p-6 pt-0"
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
        ))}
      </div>
    </section>
  );
};

export default PlaywrightJSFAQ;
