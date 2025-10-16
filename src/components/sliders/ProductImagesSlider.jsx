"use client";

import React, { useState } from "react";
import Image from "next/image";

import menaddidas1 from "@/assets/images/productImages/menAddidas/menaddidas1.png";
import menaddidas2 from "@/assets/images/productImages/menAddidas/menaddidas2.png";
import menaddidas3 from "@/assets/images/productImages/menAddidas/menaddidas3.png";
import menaddidas4 from "@/assets/images/productImages/menAddidas/menaddidas4.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { FreeMode, Pagination, Thumbs } from "swiper/modules";

const ProductImagesSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      {/* Hidden static grid (optional / fallback) */}
      <div className="lg:grid grid-cols-2 gap-4 hidden">
        <Image src={menaddidas1} alt="menaddidas1" className="rounded-tl-[48px]" />
        <Image src={menaddidas2} alt="menaddidas2" className="rounded-tr-[48px]" />
        <Image src={menaddidas3} alt="menaddidas3" className="rounded-bl-[48px]" />
        <Image src={menaddidas4} alt="menaddidas4" className="rounded-br-[48px]" />
      </div>

      {/* Main Swiper */}
      <div className="lg:hidden">
        <Swiper
          style={{
            "--swiper-pagination-color": "var(--color-blue)",
          }}
          spaceBetween={10}
          pagination={{
            clickable: true,
            dynamicBullets: true, // Optional: animates active bullet
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Pagination, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <Image src={menaddidas1} alt="menaddidas1" className="rounded-[48px] w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={menaddidas2} alt="menaddidas2" className="rounded-[48px] w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={menaddidas3} alt="menaddidas3" className="rounded-[48px] w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={menaddidas4} alt="menaddidas4" className="rounded-[48px] w-full" />
          </SwiperSlide>
        </Swiper>

        {/* Thumbnail Swiper */}
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="mySwiper mt-6"
        >
          <SwiperSlide>
            <Image src={menaddidas1} alt="menaddidas1" className="rounded-xl" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={menaddidas2} alt="menaddidas2" className="rounded-xl" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={menaddidas3} alt="menaddidas3" className="rounded-xl" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={menaddidas4} alt="menaddidas4" className="rounded-xl" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default ProductImagesSlider;
