"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import slide1 from "../../assets/images/homeSliderImages/slide1.png";
import slide2 from "../../assets/images/homeSliderImages/slide2.png";

// Import Swiper styles
import "swiper/css";
import "../../styles/homeSlider.css";

// import required modules
import { Autoplay } from "swiper/modules";
import Button from "../ui/Button";

export default function App() {
  const swiperRef = useRef(null);
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="mySwiper relative"
        ref={swiperRef}
      >
        <SwiperSlide>
          <div className="relative">
            <Image
              src={slide1}
              alt="Home Slider 1"
              width={1920}
              className="w-full object-cover rounded-4xl max-h-[650px] min-h-[382px]"
            />
            <div className="absolute top-[54%] left-2 lg:left-6 xl:bottom-16 xl:top-[unset] transform w-[70%] lg:w-[50%]">
              <h5 className="font-rubik font-semibold text-2xl text-white lg:text-5xl">
                NIKE AIR MAX
              </h5>
              <p className="font-open-sans text-light-gray text-[16px] lg:text-[18px]">
                Nike introducing the new air max for everyone's comfort
              </p>
              <Button state="secondary" className="xl:mt-6">
                Shop Now
              </Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
              src={slide2}
              alt="Home Slider 2"
              width={1920}
              className="w-full object-cover rounded-4xl max-h-[650px] min-h-[382px]"
            />
            <div className="absolute top-[54%] left-2 lg:left-6 xl:bottom-16 xl:top-[unset] transform w-[70%] lg:w-[50%]">
              <h5 className="font-rubik font-semibold text-2xl text-white lg:text-5xl">
                NIKE AIR MAX
              </h5>
              <p className="font-open-sans text-light-gray text-[16px] lg:text-[18px]">
                Nike introducing the new air max for everyone's comfort
              </p>
              <Button state="secondary" className="xl:mt-6">
                Shop Now
              </Button>
            </div>
          </div>
        </SwiperSlide>

        {/* Navigation */}
        <div className="absolute top-2/4 lg:top-[33%] right-2 lg:right-4 z-10 cursor-pointer flex flex-col gap-2 xl:bottom-16 xl:top-[unset]">
          <div onClick={() => swiperRef.current?.slidePrev()} className="">
            <Image
              src={slide1}
              alt="Prev"
              className="w-16 h-16 lg:w-30 lg:h-30 border border-gray-300 hover:scale-105 transition rounded-xl object-cover"
            />
          </div>

          <div onClick={() => swiperRef.current?.slideNext()} className="">
            <Image
              src={slide2}
              alt="Next"
              className="w-16 h-16 lg:w-30 lg:h-30 border border-gray-300 hover:scale-105 transition rounded-xl object-cover"
            />
          </div>
        </div>
      </Swiper>
    </>
  );
}
