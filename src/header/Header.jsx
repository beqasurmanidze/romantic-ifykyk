import React from "react";

const RomanticHeader = () => {
  return (
    <header className="bg-gradient-to-r from-pink-100 to-pink-300 text-center py-6 shadow-md fixed top-0 left-0 w-full z-50 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-pink-600">
        To My Love <span className="animate-ping">❤️</span>
      </h1>
      <div className="flex space-x-5 mt-4 sm:mt-0">
        <button className="px-6 py-3 bg-pink-500 font-bold rounded-lg shadow-md hover:bg-red-600 hover:scale-105 transition-all duration-300">
          Contact Us
        </button>
        <button className="px-6 py-3 bg-pink-500 font-bold rounded-lg shadow-md hover:bg-red-600 hover:scale-105 transition-all duration-300">
          More About Us
        </button>
      </div>
    </header>
  );
};

export default RomanticHeader;
