import React from "react";

function Hero() {
  return (
    <div>
      <div className="hero min-h-screen bg-base">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="pt-20 mr-[750px]">
            <h1 className="text-7xl font-bold text-text">CREATIVE UI</h1>
            <h1 className="text-7xl font-bold text-text2 mr-[75px]">DESIGNER</h1>
            <div className="pt-8">
              <button
                type="button"
                className="focus:outline-none text-white bg-text2 hover:bg-text2 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mb-2 dark:bg-text2 dark:hover:bg-text2 dark:focus:ring-blue-500 mr-16"
              >
                Hire me
              </button>
              <button
                type="button"
                className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
