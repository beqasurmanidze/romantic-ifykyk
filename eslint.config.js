// SwiperComponent.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // base Swiper styles
import "swiper/css/navigation"; // navigation styles
import "swiper/css/pagination"; // pagination styles
import "swiper/css/scrollbar"; // scrollbar styles

const SwiperComponent = () => {
  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={50} // space between slides
        slidesPerView={1} // slides visible at once
        loop={true} // enables infinite loop
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }} // navigation arrows
        pagination={{ clickable: true }} // pagination dots
        scrollbar={{ draggable: true }} // draggable scrollbar
        autoplay={{ delay: 2500, disableOnInteraction: false }} // autoplay functionality
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        <SwiperSlide>
          <img
            src="https://via.placeholder.com/600x300?text=Slide+1"
            alt="Slide 1"
            className="swiper-image"
          />
          <p className="swiper-text">Hello, wowww!</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://via.placeholder.com/600x300?text=Slide+2"
            alt="Slide 2"
            className="swiper-image"
          />
          <p className="swiper-text">Hello, wow!</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://via.placeholder.com/600x300?text=Slide+3"
            alt="Slide 3"
            className="swiper-image"
          />
          <p className="swiper-text">Hello</p>
        </SwiperSlide>
        {/* You can add more slides */}
      </Swiper>

      {/* Navigation arrows */}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default SwiperComponent;
