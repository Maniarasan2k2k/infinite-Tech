import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Contact Us
          </h2>
          <p className="text-gray-600 mt-3 text-base sm:text-lg">
            Get in touch for course details, demo sessions & career guidance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side – Contact Info */}
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow">
              <FaEnvelope className="text-green-600 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Email Us</h4>
                <p className="text-gray-600 text-sm">
                  Have questions about courses or batches?  
                  Drop us a message and we’ll respond within 24 hours.
                </p>
              </div>
            </div>

            {/* Call */}
            <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow">
              <FaPhoneAlt className="text-green-600 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Call Us</h4>
                <p className="text-gray-600 text-sm">
                  Speak directly with our course advisor for instant guidance.
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow">
              <FaWhatsapp className="text-green-600 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">WhatsApp Us</h4>
                <p className="text-gray-600 text-sm">
                  Quick doubts? Chat with us on WhatsApp for fast responses.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                <FaWhatsapp /> Chat on WhatsApp
              </a>

              <a
                href="tel:+919999999999"
                className="flex items-center justify-center gap-2 border border-green-600 text-green-700 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold transition"
              >
                <FaPhoneAlt /> Call Now
              </a>
            </div>
          </div>

          {/* Right Side – Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                type="tel"
                placeholder="Enter your mobile number"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <textarea
                rows="4"
                placeholder="Tell us which course you are interested in or ask your question here"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
              >
                Send Message
              </button>

              <p className="text-xs text-gray-500 text-center">
                We usually respond within 24 hours
              </p>
            </form>
          </div>
        </div>

        {/* Mobile-only short version */}
        <div className="mt-12 block sm:hidden text-center bg-green-50 p-6 rounded-xl">
          <h4 className="font-semibold text-gray-800">Need Quick Help?</h4>
          <p className="text-sm text-gray-600 my-2">
            Call or WhatsApp us for instant course guidance.
          </p>
          <div className="flex justify-center gap-4 mt-3">
            <a
              href="tel:+919999999999"
              className="text-green-700 font-semibold"
            >
              📞 Call
            </a>
            <a
              href="https://wa.me/919999999999"
              className="text-green-700 font-semibold"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
