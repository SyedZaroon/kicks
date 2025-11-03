"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay } from "swiper/modules";
import ReviewCard from "@/components/ui/ReviewCard";
import { useProducts } from "@/hooks/useProducts";
export default function App() {
  const { products, isProductsLoading, productsError } = useProducts();

  if (isProductsLoading) return <div>Loading...</div>;
  if (!!productsError) return <div>Error loading products</div>;

  const topReviews = products.flatMap((product) =>
    product.reviews
      .filter((rev) => rev.rating === 5)
      .map((rev) => ({
        title: rev.user,
        comment: rev.comment,
        rating: rev.rating,
        productImage: product.images[0],
        userImg: rev.userImg,
      }))
  );


  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        modules={[Autoplay]}
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
        {topReviews.map((review, index) => (
          <SwiperSlide key={index}>
            <ReviewCard
              reviewImage={review.userImg}
              productReviewImage={review.productImage}
              reviewTitle={review.title}
              reviewText={review.comment}
              rating={review.rating}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
