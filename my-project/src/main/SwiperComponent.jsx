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
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img
            src="https://via.placeholder.com/600x300?text=Slide+3"
            alt="Slide 3"
            className="swiper-image"
          />
          <p className="swiper-text">Hello</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://via.placeholder.com/600x300?text=Slide+3"
            alt="Slide 3"
            className="swiper-image"
          />
          <p className="swiper-text">Hello</p>
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>

      {/* You can also add custom arrows like this */}
    </div>
  );
};

export default SwiperComponent;
