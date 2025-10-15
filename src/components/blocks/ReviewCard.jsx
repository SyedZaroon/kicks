import React from 'react'
import Image from 'next/image'
import review1 from '@/assets/images/reviewImages/review1.png'
import productReview1 from "@/assets/images/reviewImages/productreview1.png";
const ReviewCard = ({reviewImage = review1, productReviewImage = productReview1, reviewText = "I highly recommend shopping from kicks", reviewTitle = "Good Quality"}) => {
  return (
    <div className="w-fit ">
      <div className="flex gap-1 bg-[var(--color-white)] p-8 rounded-tl-4xl rounded-tr-4xl">
        <div className="max-w-[293px]">
          <h6 className="h5">{reviewTitle}</h6>
          <p className="p w-[90%] leading-[100%] mt-2">{reviewText}</p>
        </div>
        <div className="self-start">
          <Image src={reviewImage} alt='reviewImage' width={64} height={64} />
        </div>
      </div>
      <div>
        <Image src={productReviewImage} alt='productReviewImage' width={429} height={325} className='rounded-br-4xl rounded-bl-4xl' />
      </div>
    </div>
  );
}

export default ReviewCard