import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // base Swiper styles
import "swiper/css/navigation"; // navigation styles
import "swiper/css/pagination"; // pagination styles
import "swiper/css/scrollbar"; // scrollbar styles
import Texter from "../text/text";

const SwiperComponent = () => {
  const [counter, setCounter] = useState(0);

  // Function to increment the counter
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  // Function to increment the counter by 2
  const incrementByTwo = () => {
    setCounter(counter + 1000000);
  };

  return (
    <>
      <div className="swiper-container mt-20 sm:mt-[200px] px-4">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide>
            <img
              src="hellokitty.jpg"
              alt="Slide 1"
              className="swiper-image w-full h-auto object-cover rounded-lg shadow-lg"
            />
            <p className="swiper-text text-2xl text-purple-700 mt-4">
              Hello, wow!
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="photo1.jpg"
              alt="Slide 2"
              className="swiper-image w-full h-auto object-cover rounded-lg shadow-lg"
            />
            <p className="swiper-text text-2xl text-purple-700 mt-4">:p</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="gang.jpg"
              alt="Slide 3"
              className="swiper-image w-full h-auto object-cover rounded-lg shadow-lg"
            />
            <p className="swiper-text text-2xl text-purple-700 mt-4">
              She cute asf
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="us.jpg"
              alt="Slide 4"
              className="swiper-image w-full h-auto object-cover rounded-lg shadow-lg"
            />
            <p className="swiper-text text-2xl text-purple-700 mt-4">
              USSS !!!!!!
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="socute.jpg"
              alt="Slide 5"
              className="swiper-image w-full h-auto object-cover rounded-lg shadow-lg"
            />
            <p className="swiper-text text-2xl text-purple-700 mt-4">
              More photos of her
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="text-center mt-8 px-4">
        <button
          className="px-8 py-4 text-xl font-bold text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:text-gray-900 hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-pink-200 active:scale-105 active:shadow-md"
          onClick={incrementCounter}
        >
          INCREASE BY 1!
        </button>
        <p className="text-4xl text-blue-500 mt-4">
          B & B's love currently is at {counter}%
        </p>
        <div>
          {/* Conditional rendering of the second button */}
          {counter > 100 ? (
            <button
              onClick={incrementByTwo}
              className="mt-4 px-8 py-4 text-xl font-bold text-white bg-gradient-to-r from-green-500 to-teal-600 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:text-gray-900 hover:from-green-600 hover:to-teal-700 focus:outline-none focus:ring-4 focus:ring-green-200 active:scale-105 active:shadow-md"
            >
              Go up by MILLION
            </button>
          ) : null}
          {counter > 120 ? <Texter /> : null}
        </div>
      </div>
    </>
  );
};

export default SwiperComponent;
