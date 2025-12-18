import { FaArrowUp } from "react-icons/fa";

const StickyCTA = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {/* FIXED CTA BAR */}
      <div className="fixed bottom-0 left-0 w-full bg-blue-900 text-white px-4 py-4 z-50 shadow-2xl">
        <div className="max-w-6xl mx-auto flex flex-col gap-4
                        md:flex-row md:items-center md:justify-between">

          {/* Disclaimer */}
          <p className="text-xs md:text-sm leading-relaxed text-center md:text-left max-w-2xl">
            This site is not a part of the Facebook website or Facebook, Inc.
            Additionally, this site is NOT endorsed by Facebook in any way.
            <span className="font-semibold"> FACEBOOK </span>
            is a trademark of Facebook, Inc.
          </p>

          {/* Countdown */}
          <div className="flex justify-center gap-4 text-center">
            <div className="bg-blue-800 px-3 py-2 rounded">
              <p className="text-xs">Price Increase In</p>
              <p className="font-bold text-lg">00</p>
              <p className="text-xs">Minutes</p>
            </div>

            <div className="bg-blue-800 px-3 py-2 rounded">
              <p className="font-bold text-lg">00</p>
              <p className="text-xs">Seconds</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center md:text-right">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold
                               px-6 py-3 rounded-full shadow-lg transition">
              Enroll Now ₹599.00
            </button>
          </div>

        </div>
      </div>

      {/* SCROLL TO TOP BUTTON */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-28 right-5 bg-yellow-400 hover:bg-yellow-500
                   text-black p-3 rounded-full shadow-xl transition z-50"
      >
        <FaArrowUp className="text-lg" />
      </button>
    </>
  );
};

export default StickyCTA;
