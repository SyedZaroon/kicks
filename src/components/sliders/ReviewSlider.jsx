"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import ReviewCard from "../blocks/ReviewCard";
import review1 from "../../assets/images/reviewImages/review1.png";
import review2 from "../../assets/images/reviewImages/review2.png";
import review3 from "../../assets/images/reviewImages/review3.png";
import productReview1 from "../../assets/images/reviewImages/productreview1.png";
import productReview2 from "../../assets/images/reviewImages/productreview2.png";
import productReview3 from "../../assets/images/reviewImages/productreview3.png";
export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        <SwiperSlide>
          <ReviewCard reviewImage={review1} productReviewImage={productReview1}/>
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard reviewImage={review2} productReviewImage={productReview2}/>
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard reviewImage={review3} productReviewImage={productReview3}/>
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard reviewImage={review2} productReviewImage={productReview2}/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
