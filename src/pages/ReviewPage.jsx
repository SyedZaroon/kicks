"use client";

import ReviewCard from '@/components/ui/ReviewCard';
import { useProducts } from '@/hooks/useProducts';
import React from 'react'

const ReviewPage = () => {

      const { products, isProductsLoading, productsError } = useProducts();
    
      if (isProductsLoading) return <div>Loading...</div>;
      if (!!productsError) return <div>Error loading products</div>;
    
      const topReviews = products.flatMap((product) =>
        product.reviews
          .map((rev) => ({
            title: rev.user,
            comment: rev.comment,
            rating: rev.rating,
            productImage: product.images[0],
            userImg: rev.userImg,
          }))
      );
    
  return (
    <div className="section-margin mt-2 mb-8 xl:my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {topReviews.map((review, index) => (
        <ReviewCard
          reviewImage={review.userImg}
          productReviewImage={review.productImage}
          reviewTitle={review.title}
          reviewText={review.comment}
          rating={review.rating}
        />
      ))}
    </div>
  );
}

export default ReviewPage
