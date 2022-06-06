import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

type Props = {};

function Carousel({}: Props) {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide
          style={{ backgroundImage: "url(./img/Carousel/trang_an1.jpg)" }}
        ></SwiperSlide>
        <SwiperSlide
          style={{ backgroundImage: "url(./img/Carousel/carousel1.jpg)" }}
        ></SwiperSlide>
        <SwiperSlide
          style={{ backgroundImage: "url(./img/Carousel/carousel2.jpg)" }}
        ></SwiperSlide>
        <SwiperSlide
          style={{ backgroundImage: "url(./img/Carousel/carousel3.jpg" }}
        ></SwiperSlide>
        <SwiperSlide
          style={{ backgroundImage: "url(./img/Carousel/carousel5.jpg)" }}
        ></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
