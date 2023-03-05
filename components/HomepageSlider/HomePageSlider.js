import React from "react";
import Image from "next/image";
import style from "./css/HomePageSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import slider1 from "../../public/slider-images/slider1.jpg";
import slider2 from "../../public/slider-images/slider2.jpg";
// Import Swiper styles
import "swiper/css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export default function HomePageSlider() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Image className={style.slider_image} src={slider1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image className={style.slider_image} src={slider2} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
