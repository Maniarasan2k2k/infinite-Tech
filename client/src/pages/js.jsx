import React, { useState } from "react";
import FAQ from "../pages/Faq";
import Stickyfoot from '../pages/StickyFoot'
import { useNavigate } from "react-router-dom";
import AnimatedHeading from "./AnimatedHeading";
import '../App.css'
import Image from '../pages/ImageCarousel'



const Html = () => {
  const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileCourseOpen, setMobileCourseOpen] = useState(false);
  return (

    

     <div className="bgpl">
      <header className="fixed  top-0 left-0 w-full bg-white shadow-sm z-50 transition-all duration-500">
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
          
          <div onClick={() => navigate("/")} className="cursor-pointer">
            <AnimatedHeading />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden sm:flex items-center gap-6 text-lg text-black font-bold">
            <ul className="flex items-center gap-6">
              <li onClick={() => navigate("/")} className="cursor-pointer hover:text-green-400 transition">
                Home
              </li>

              <li
                className="relative cursor-pointer hover:text-green-400 transition"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                Course
                {dropdownOpen && (
                  <ul className="absolute top-full left-0 mt-1 w-70 bg-white text-gray-800 shadow-lg rounded border z-50">
                    <li className="px-4 py-2 hover:bg-green-100 cursor-pointer" onClick={() => navigate("/html")}>Playwright + Python</li>
                    <li className="px-4 py-2 hover:bg-green-100 cursor-pointer" onClick={() => navigate("/css")}>Playwright + JavaScript</li>
                    <li className="px-4 py-2 hover:bg-green-100 cursor-pointer" onClick={() => navigate("/js")}>Playwright + TypeScript</li>
                  </ul>
                )}
              </li>

              <li onClick={() => navigate("/contact")} className="cursor-pointer hover:text-green-400 transition">
                Contact us
              </li>

              <li onClick={() => navigate("/qa")} className="cursor-pointer hover:text-green-400 transition">
                Q&A
              </li>

              <button className="bg-colorss bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">
                Login
              </button>
            </ul>
          </nav>

          {/* Mobile Hamburger */}
          <div className="sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:hidden bg-white shadow-md px-4 py-4">
            <ul className="flex flex-col gap-3 text-base">
              <li
                className="cursor-pointer hover:text-green-600 transition-all duration-300"
                onClick={() => navigate("/")}
              >
                Home
              </li>

              {/* Mobile Course Dropdown */}
              <li className="cursor-pointer hover:text-green-600 transition-all duration-300">
                <div
                  onClick={() => setMobileCourseOpen(!mobileCourseOpen)}
                  className="flex justify-between items-center"
                >
                  Course
                  <span>{mobileCourseOpen ? "▲" : "▼"}</span>
                </div>

                {mobileCourseOpen && (
                  <ul className="pl-4 mt-2 flex flex-col gap-1">
                    <li
                      className="px-2 py-1 hover:bg-green-100 rounded cursor-pointer"
                      onClick={() => navigate("/html")}
                    >
                      Playwright + Js
                    </li>
                    <li
                      className="px-2 py-1 hover:bg-green-100 rounded cursor-pointer"
                      onClick={() => navigate("/css")}
                    >
                      Playwright + Types Script
                    </li>
                    <li
                      className="px-2 py-1 hover:bg-green-100 rounded cursor-pointer"
                      onClick={() => navigate("/js")}
                    >
                      Playwright + Python
                    </li>
                  </ul>
                )}
              </li>

              <li
                className="cursor-pointer hover:text-green-600 transition-all duration-300"
                onClick={() => navigate("/contact")}
              >
                Conduct us
              </li>
              <li
                className="cursor-pointer hover:text-green-600 transition-all duration-300"
                onClick={() => navigate("/qa")}
              >
                Q&A
              </li>

              <li>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg w-full hover:bg-green-700 hover:shadow-lg transition-all duration-300">
                  Login
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>


        <div className="bg-color text-white py-10 px-4 mt-35">
      {/* Main Heading */}


      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto bg-white text-gray-800 rounded-xl shadow-lg p-6 sm:p-8 lg:p-12">
        
        {/* Pre Recorded */}
        <h1 className="live text-center text-xl sm:text-2xl font-semibold mb-6">
          Live-Classes
        </h1>

        <h2 className="main-headline text-center text-lg sm:text-xl lg:text-2xl font-bold mb-4">
          READY TO TAKE YOUR CAREER TO THE NEXT LEVEL? JOIN PLAYWRIGHT MASTERY ACADEMY AND BECOME A HIGH-PAYING AUTOMATION TESTER / PLAYWRIGHT EXPERT
        </h2>

        <p className="text-center text-sm sm:text-base mb-2 text-color font-bold">
          (NO PRIOR AUTOMATION, PROGRAMMING, OR TESTING KNOWLEDGEMENT NEEDED)
        </p>



        {/* Image Section */}
        <div className="flex justify-center mb-10">
          <img
            src="/htmlBanner.png"
            alt="Course"
            className="w-full sm:w-3/4 md:w-1/2 lg:w-3/3 rounded-lg shadow-md object-contain"
          />
        </div>

        {/* Highlight Heading */}
        <h1 className="text-center text-xl sm:text-2xl lg:text-3xl font-bold mb-6">
          DON’T MISS OUT ON HIGH PAYING AUTOMATION JOBS! <br />
          <span className="text-blue-600">THRIVE AS A PLAYWRIGHT AUTOMATION EXPERT!</span>
        </h1>

        {/* Enroll Button */}
        <div className="flex justify-center mb-10">
          <button className="bg-colors hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition">
            Enroll Now – <strike>$14999</strike> - $9999
          </button>
        </div>

        {/* Course Highlights */}
        <h2 className="text-center text-xl font-semibold mb-4">
          Course Highlights
        </h2>

        <div
  className="
    max-w-7xl mx-auto
    flex flex-wrap justify-center
    gap-3 sm:gap-4
    text-center
  "
>
  <p className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium text-sm sm:text-base">
    📘 JS Basic ➜ Advanced
  </p>

  <p className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium text-sm sm:text-base">
    🏗️ POM & BDD
  </p>

  <p className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium text-sm sm:text-base">
    🔍 Locators & Waits
  </p>

  <p className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium text-sm sm:text-base">
    ✅ Assertions & Alerts
  </p>

  <p className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium text-sm sm:text-base">
    🌐 Cross-Browser Testing
  </p>

  <p className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium text-sm sm:text-base">
    ⚙️ CI/CD Integration
  </p>

  <p className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium text-sm sm:text-base">
    📂 Real-Time Projects
  </p>

  <p className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium text-sm sm:text-base">
    🎯 HR Preparation
  </p>

  <p className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium text-sm sm:text-base">
    💼 Career Guidance
  </p>

  <p className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium text-sm sm:text-base">
    👨‍🏫 Expert Trainers
  </p>

  <p className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium text-sm sm:text-base">
    🆓 No Prior Knowledge
  </p>

  <p className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium text-sm sm:text-base">
    🎓 100% Placement
  </p>
</div>
      </div>


     <div className="bg-color bg-blue-600 py-10 px-4">
  <div
    className="
      max-w-6xl mx-auto
      grid grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-4
      gap-6
    "
  >
    {/* Duration */}
    <div
      className="
        bg-white rounded-xl shadow-md
        p-6
        flex flex-col items-center justify-center
        text-center
        hover:shadow-xl transition
      "
    >
      <h3 className="text-colors text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
        120+ Hrs
      </h3>
      <p className="text-gray-700 font-medium text-sm sm:text-base">
        Duration
      </p>
    </div>

    {/* Modules */}
    <div
      className="
        bg-white rounded-xl shadow-md
        p-6
        flex flex-col items-center justify-center
        text-center
        hover:shadow-xl transition
      "
    >
      <h3 className="text-colors text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
        20+
      </h3>
      <p className="text-gray-700 font-medium text-sm sm:text-base">
        Modules
      </p>
    </div>

    {/* Videos */}
    <div
      className="
        bg-white rounded-xl shadow-md
        p-6
        flex flex-col items-center justify-center
        text-center
        hover:shadow-xl transition
      "
    >
      <h3
        className="
        text-colors
          text-lg sm:text-xl lg:text-2xl
          font-bold
          text-blue-600
          mb-2
          leading-snug
        "
      >
        60+ Live Classes <br className="hidden sm:block" />
        + Recording Videos
      </h3>
      <p className="text-gray-700 font-medium text-sm sm:text-base">
        Videos
      </p>
    </div>

    {/* Lifetime Access */}
    <div
      className="
        bg-white rounded-xl shadow-md
        p-6
        flex flex-col items-center justify-center
        text-center
        hover:shadow-xl transition
      "
    >
      <h3 className="text-colors text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
        Lifetime
      </h3>
      <p className="text-gray-700 font-medium text-sm sm:text-base">
        Access
      </p>
    </div>
  </div>
</div>




         <div className="bg-gray-100 py-14 px-4">
  {/* Heading */}
  <div className="text-center mb-12">
    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-black">
      What People are Saying
    </h1>
    <p className="text-gray-600 text-sm sm:text-base">
      Read These Life-Changing Stories From People Just Like You!
    </p>
  </div>

  {/* Testimonials Grid */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    
    {/* Card 1 */}
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
      <img
        src="https://randomuser.me/api/portraits/men/45.jpg"
        alt="Shankar"
        className="w-16 h-16 rounded-full object-cover mb-4"
      />
      <h4 className="font-semibold text-lg mb-2">Shankar R.</h4>
      <p className="text-gray-700 text-sm leading-relaxed">
        I am Arun Joining {" "}
        <mark className="bg-yellow-200 px-1 rounded">
         Playwright Mastery Academy completely transformed my automation career. 
        </mark>
        The course covered real-time frameworks, CI/CD, and advanced Playwright concepts in a very simple way. After completing the course, I got a job at TCS with a salary of 10LPA as a Senior Test Engineer. {" "}
        <mark className="bg-yellow-200 px-1 rounded">
         Highly recommended for serious QA engineers!
        </mark>
        . I would{" "}
        <mark className="bg-yellow-200 px-1 rounded">
          definitely recommend this course
        </mark>{" "}
        to anyone looking to grow their career.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
      <img
        src="https://randomuser.me/api/portraits/women/52.jpg"
        alt="Anitha"
        className="w-16 h-16 rounded-full object-cover mb-4"
      />
      <h4 className="font-semibold text-lg mb-2">Nishanthi P.</h4>
      <p className="text-gray-700 text-sm leading-relaxed">
         I am Nishanthi (Fresher){" "}
        <mark className="bg-yellow-200 px-1 rounded">
         he hands-on approach and real project examples in Playwright Mastery Academy made learning extremely effective.
        </mark>
         The trainer explained complex topics like POM, API testing, BDD, and Azure DevOps very clearly. I got placed at Deloite{" "}
        <mark className="bg-yellow-200 px-1 rounded">
          and my current salary is 7 LPA as QA Automation Engineer.
        </mark>
        . This course gave me{" "}
        <mark className="bg-yellow-200 px-1 rounded">
          confidence to take client projects
        </mark>
        .
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
      <img
        src="https://randomuser.me/api/portraits/men/60.jpg"
        alt="Vikram"
        className="w-16 h-16 rounded-full object-cover mb-4"
      />
      <h4 className="font-semibold text-lg mb-2">Kokila S.</h4>
      <p className="text-gray-700 text-sm leading-relaxed">
         I am Sudhagar (Fresher) This is not just a course, it’s complete job-oriented training.{" "}
        <mark className="bg-yellow-200 px-1 rounded">
          Mock interviews, resume guidance, and real-time Playwright frameworks helped me crack interviews easily.
        </mark>
        . I learned{" "}
        <mark className="bg-yellow-200 px-1 rounded">
          SEO, ads, and analytics step-by-step
        </mark>
        I got a job at HCL with a package of 5 LPA as a Junior QA Engineer after completing Playwright Mastery Academy.
{" "}
       
        .
      </p>
    </div>

    {/* Card 4 */}
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
      <img
        src="https://randomuser.me/api/portraits/women/65.jpg"
        alt="Priya"
        className="w-16 h-16 rounded-full object-cover mb-4"
      />
      <h4 className="font-semibold text-lg mb-2">Suganya D.</h4>
      <p className="text-gray-700 text-sm leading-relaxed">
         I am Suganya (4years) Before joining Playwright Mastery Academy, I struggled with automation interviews.After the course, my confidence increased drastically.{" "}
        <mark className="bg-yellow-200 px-1 rounded">
          The Playwright + CI/CD training helped me secure a role at Infosys
        </mark>
         as a Senior QA Engineer{" "}
        <mark className="bg-yellow-200 px-1 rounded">
          earning 12 LPA salary.
        </mark>
        
        
      </p>
    </div>

    {/* Card 5 */}
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
      <img
        src="https://randomuser.me/api/portraits/men/72.jpg"
        alt="Arun"
        className="w-16 h-16 rounded-full object-cover mb-4"
      />
      <h4 className="font-semibold text-lg mb-2">Grace</h4>
      <p className="text-gray-700 text-sm leading-relaxed">
       Hi i am Grace (Fresher) The trainer’s industry experience reflects in every session. {" "}
        <mark className="bg-yellow-200 px-1 rounded">
          real-world marketing strategies
        </mark>
        . The course is{" "}
        <mark className="bg-yellow-200 px-1 rounded">
          The Playwright framework structure, best practices, and debugging techniques were extremely useful. I successfully got placed at 
        </mark>
        . Totally{" "}
        <mark className="bg-yellow-200 px-1 rounded">
         Tech Mahindra and my salary is 4.5 LPA as a Test Engineer (L1)  thanks to Playwright Mastery Academy.
        </mark>
        .
      </p>
    </div>

    {/* Card 6 */}
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
      <img
        src="https://randomuser.me/api/portraits/women/73.jpg"
        alt="Meena"
        className="w-16 h-16 rounded-full object-cover mb-4"
      />
      <h4 className="font-semibold text-lg mb-2">Abirami S.</h4>
      <p className="text-gray-700 text-sm leading-relaxed">
       Hi i am Abirami (Fresher) Playwright Mastery Academy provided exactly what the market demands{" "}
        
        Real-time scenarios, Azure DevOps pipelines, and interview-focused preparation helped me land a job at Persistent {" "}
        <mark className="bg-yellow-200 px-1 rounded">
         Systems QA Analyst (Junior)  with a salary of 6 LPA
        </mark>
        .
      </p>
    </div>

  </div>
</div>


 <div className="bg-color bg-blue-600 py-14 px-4">
  <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10">
    
    {/* Heading */}
   

          <div className="bg-white py-14 px-4 h-100">
  <div className="max-w-6xl mx-auto text-center">

    {/* Heading */}
    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
      Get Free Certificate
    </h1>

    {/* Sub Heading */}
    <p className=" lg:text-[30px]  sm:text-base   text-gray-600  font-bold mb-10">
      Our Alumni Works At
    </p>

    {/* Certificate Image */}
    <div className="flex justify-center">
      <div
  className="
    relative overflow-hidden rounded-2xl
    w-64 h-40
    sm:w-72 sm:h-44
    md:w-96 md:h-56
    lg:w-[920px] lg:h-[320px]
    mx-auto
  "
>


   <Image />
</div>

    </div>

  </div>
</div>


    {/* CTA */}
    <div className="flex justify-center mt-12">
      <button className="bg-colors hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition">
        Start Learning & <br /> Get High Paying Jobs
      </button>
    </div>

  </div>
</div>

      <div className="bg-color py-14 px-4">
  <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12 text-center">

    {/* Headings */}
    <h1 className="text-colors text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-600 mb-3">
      Hurry Up!
    </h1>
    <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-10">
      We Already Achieved
    </h2>

    {/* Stats */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
      <div className="bg-blue-50 px-10 py-6 rounded-xl shadow-md">
        <p className="text-colors text-4xl sm:text-5xl font-bold text-blue-600 mb-2">
          8,450+
        </p>
        <p className="text-gray-700 font-medium text-base sm:text-lg">
          Students Enrolled
        </p>
      </div>
    </div>

  </div>
</div>



    
        <div className="bg-gray-100 py-14 px-4">
  <div className="max-w-7xl mx-auto">   
  </div>
        </div>
       <FAQ />


       <footer>

           <footer className="bg-gray-900 text-gray-300 px-6 py-12">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* Disclaimer */}
    <div>
      <p className="text-sm leading-relaxed">
        This site is not a part of the Facebook website or Facebook, Inc.
        Additionally, this site is NOT endorsed by Facebook in any way.
        <span className="font-semibold text-white">
          {" "}FACEBOOK{" "}
        </span>
        is a trademark of Facebook, Inc.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">
        Quick Links
      </h3>
      <ul className="space-y-2 text-sm">
        <li className="hover:text-white cursor-pointer transition">
          Terms & Policy
        </li>
        <li className="hover:text-white cursor-pointer transition">
          Refund Policy
        </li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">
        Contact
      </h3>
      <ul className="space-y-2 text-sm">
        <li>📞 97825 27868</li>
        <li>📧 support@prakashdigital.in</li>
      </ul>
    </div>

  </div>

  {/* Bottom Bar */}
  <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-400">
    © {new Date().getFullYear()} Prakash Digital. All rights reserved.
  </div>
</footer>
        <Stickyfoot />
       </footer>
    </div>
     </div>
  );
};

export default Html;
