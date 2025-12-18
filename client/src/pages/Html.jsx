import React from "react";
import FAQ from "../pages/Faq";
import Stickyfoot from '../pages/StickyFoot'


const Html = () => {
  return (
    <div className="bg-blue-600 text-white py-10 px-4">
      {/* Main Heading */}
      <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-10">
        Course lessons updated with strategies for 2025
      </h1>

      {/* Content Wrapper */}
      <div className="max-w-6xl mx-auto bg-white text-gray-800 rounded-xl shadow-lg p-6 sm:p-8 lg:p-12">
        
        {/* Pre Recorded */}
        <h1 className="text-center text-xl sm:text-2xl font-semibold mb-6">
          Pre-Recorded
        </h1>

        <h2 className="text-center text-lg sm:text-xl lg:text-2xl font-bold mb-4">
          ARE YOU READY TO TAKE YOUR CAREER TO THE NEXT LEVEL AND BECOME A
          HIGH-PAYING DIGITAL MARKETING EXPERT WITH OUR COMPLETE DIGITAL
          MARKETING COURSE (IN HINDI)
        </h2>

        <p className="text-center text-sm sm:text-base mb-2">
          Master Digital Marketing Strategy, Social Media Marketing, SEO,
          YouTube, Email, Facebook Marketing, Analytics & More!
        </p>

        <p className="text-center text-sm sm:text-base mb-8">
          (No Prior AI, Coding, Or Marketing Knowledge Needed)
        </p>

        {/* Image Section */}
        <div className="flex justify-center mb-10">
          <img
            src="/course-1.png"
            alt="Course"
            className="w-full sm:w-3/4 md:w-1/2 lg:w-3/3 rounded-lg shadow-md object-contain"
          />
        </div>

        {/* Highlight Heading */}
        <h1 className="text-center text-xl sm:text-2xl lg:text-3xl font-bold mb-6">
          DON’T MISS OUT ON GREAT OPPORTUNITIES! <br />
          <span className="text-blue-600">THRIVE WITH AI IN DIGITAL MARKETING</span>
        </h1>

        {/* Enroll Button */}
        <div className="flex justify-center mb-10">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition">
            Enroll Now – $599.00
          </button>
        </div>

        {/* Course Highlights */}
        <h2 className="text-center text-xl font-semibold mb-4">
          Course Highlights
        </h2>

        <div className="flex flex-col sm:flex-row justify-center gap-4 text-center">
          <p className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
            Playwright + Python
          </p>
          <p className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
            Playwright + TypeScript
          </p>
          <p className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
            Playwright + JavaScript
          </p>
        </div>
      </div>


     <div className="bg-blue-600 py-10 px-4">
  <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
    
    {/* Duration */}
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
      <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">
        80+ Hrs
      </h3>
      <p className="text-gray-700 font-medium">Duration</p>
    </div>

    {/* Modules */}
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
      <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">
        20
      </h3>
      <p className="text-gray-700 font-medium">Modules</p>
    </div>

    {/* Videos */}
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
      <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">
        350+
      </h3>
      <p className="text-gray-700 font-medium">Videos</p>
    </div>

    {/* Lifetime Access */}
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
      <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">
        Life Time
      </h3>
      <p className="text-gray-700 font-medium">Access</p>
    </div>

  </div>
</div>



         <div className="bg-gray-100 py-14 px-4">
  {/* Heading */}
  <div className="text-center mb-12">
    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-black">
      What Are People Saying
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
        I was a complete{" "}
        <mark className="bg-yellow-200 px-1 rounded">
          beginner with digital marketing
        </mark>
        . This course was broken down{" "}
        <mark className="bg-yellow-200 px-1 rounded">
          really well and easy to understand
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
      <h4 className="font-semibold text-lg mb-2">Anitha P.</h4>
      <p className="text-gray-700 text-sm leading-relaxed">
        I had{" "}
        <mark className="bg-yellow-200 px-1 rounded">
          zero experience in online marketing
        </mark>
        . The lessons helped me understand{" "}
        <mark className="bg-yellow-200 px-1 rounded">
          how to apply concepts in real life
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
      <h4 className="font-semibold text-lg mb-2">Vikram S.</h4>
      <p className="text-gray-700 text-sm leading-relaxed">
        The course content was{" "}
        <mark className="bg-yellow-200 px-1 rounded">
          very practical and industry-focused
        </mark>
        . I learned{" "}
        <mark className="bg-yellow-200 px-1 rounded">
          SEO, ads, and analytics step-by-step
        </mark>
        . Perfect for{" "}
        <mark className="bg-yellow-200 px-1 rounded">
          career switchers like me
        </mark>
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
      <h4 className="font-semibold text-lg mb-2">Priya D.</h4>
      <p className="text-gray-700 text-sm leading-relaxed">
        This course helped me{" "}
        <mark className="bg-yellow-200 px-1 rounded">
          build a strong foundation
        </mark>
        . The examples were{" "}
        <mark className="bg-yellow-200 px-1 rounded">
          simple and easy to follow
        </mark>
        . I now feel{" "}
        <mark className="bg-yellow-200 px-1 rounded">
          interview-ready
        </mark>
        .
      </p>
    </div>

    {/* Card 5 */}
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
      <img
        src="https://randomuser.me/api/portraits/men/72.jpg"
        alt="Arun"
        className="w-16 h-16 rounded-full object-cover mb-4"
      />
      <h4 className="font-semibold text-lg mb-2">Arun K.</h4>
      <p className="text-gray-700 text-sm leading-relaxed">
        I loved how the trainer explained{" "}
        <mark className="bg-yellow-200 px-1 rounded">
          real-world marketing strategies
        </mark>
        . The course is{" "}
        <mark className="bg-yellow-200 px-1 rounded">
          beginner-friendly yet powerful
        </mark>
        . Totally{" "}
        <mark className="bg-yellow-200 px-1 rounded">
          worth the investment
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
      <h4 className="font-semibold text-lg mb-2">Meena S.</h4>
      <p className="text-gray-700 text-sm leading-relaxed">
        The course helped me{" "}
        <mark className="bg-yellow-200 px-1 rounded">
          transition into digital marketing
        </mark>
        . Everything was{" "}
        <mark className="bg-yellow-200 px-1 rounded">
          clearly explained with examples
        </mark>
        . I highly{" "}
        <mark className="bg-yellow-200 px-1 rounded">
          recommend this program
        </mark>
        .
      </p>
    </div>

  </div>
</div>


 <div className="bg-blue-600 py-14 px-4">
  <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10">
    
    {/* Heading */}
    <div className="text-center mb-12">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
        Get Free Certificate
      </h1>
      <h1 className="text-sm sm:text-base lg:text-lg text-gray-600">
        After finishing the course, you will get a Certificate of Completion.
      </h1>
    </div>

    {/* Certificates */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      
      {/* Google Certificate */}
      <div className="text-center">
        <img
          src="/cert-1.png"
          alt="Google Certificate"
          className="w-full max-w-md mx-auto rounded-xl shadow-md hover:shadow-xl transition"
        />
        <h3 className="mt-4 text-lg font-semibold">
          Google Digital Marketing Certificate
        </h3>
        <p className="text-sm text-gray-600 mt-1">
          Industry-recognized certification
        </p>
      </div>

      {/* Course Certificate */}
      <div className="text-center">
        <img
          src="/cert-2.png"
          alt="Course Certificate"
          className="w-full max-w-md mx-auto rounded-xl shadow-md hover:shadow-xl transition"
        />
        <h3 className="mt-4 text-lg font-semibold">
          Course Completion Certificate
        </h3>
        <p className="text-sm text-gray-600 mt-1">
          Issued after successful course completion
        </p>
      </div>

    </div>

    {/* CTA */}
    <div className="flex justify-center mt-12">
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition">
        Start Learning & Get Certified
      </button>
    </div>

  </div>
</div>

      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-14 px-4">
  <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12 text-center">

    {/* Headings */}
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-600 mb-3">
      Hurry Up!
    </h1>
    <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-10">
      We Already Achieved
    </h2>

    {/* Stats */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
      <div className="bg-blue-50 px-10 py-6 rounded-xl shadow-md">
        <p className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">
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
    
    {/* Heading */}
    <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-10 text-black">
      Course Screenshots
    </h2>

    {/* Screenshots Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      
      {/* Screenshot 1 */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
        <img
          src="https://dummyimage.com/600x400/e5e7eb/111827&text=Course+Dashboard"
          alt="Course Dashboard"
          className="w-full h-56 object-cover"
        />
      </div>

      {/* Screenshot 2 */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
        <img
          src="https://dummyimage.com/600x400/e5e7eb/111827&text=Video+Lessons"
          alt="Video Lessons"
          className="w-full h-56 object-cover"
        />
      </div>

      {/* Screenshot 3 */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
        <img
          src="https://dummyimage.com/600x400/e5e7eb/111827&text=Live+Sessions"
          alt="Live Sessions"
          className="w-full h-56 object-cover"
        />
      </div>

      {/* Screenshot 4 */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
        <img
          src="https://dummyimage.com/600x400/e5e7eb/111827&text=Certificates+Preview"
          alt="Certificates Preview"
          className="w-full h-56 object-cover"
        />
      </div>

    </div>
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
  );
};

export default Html;
