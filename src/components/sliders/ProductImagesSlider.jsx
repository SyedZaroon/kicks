"use client";

import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { FreeMode, Pagination, Thumbs } from "swiper/modules";

const ProductImagesSlider = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      {/* Hidden static grid (optional / fallback) */}
      <div className="lg:grid grid-cols-2 gap-4 hidden">
        {images.map((v, i) => {
          return (
            <Image
              key={i}
              src={v}
              alt="menaddidas1"
              className="rounded-tl-[48px]"
              width={429}
              height={510}
            />
          );
        })}
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
            dynamicBullets: true,
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Pagination, Thumbs]}
          className="mySwiper2"
        >
          {images.map((v, i) => {
            return (
              <SwiperSlide>
                <Image
                  src={v}
                  alt="menaddidas1"
                  className="rounded-[48px] w-full"
                  width={358}
                  height={273}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        ;{/* Thumbnail Swiper */}
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="mySwiper mt-6"
        >
          {images.map((v, i) => {
            return (
              <SwiperSlide>
                <Image
                  src={v}
                  alt="menaddidas1"
                  className="rounded-xl"
                  width={64}
                  height={64}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        ;;
      </div>
    </>
  );
};

export default ProductImagesSlider;
