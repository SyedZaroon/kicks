import Image from "next/image";
import review1 from "@/assets/images/reviewImages/review1.png";
import productReview1 from "@/assets/images/reviewImages/productreview1.png";
import RatingStars from "../ui/RatingStars";
const ReviewCard = ({
  reviewImage = review1,
  productReviewImage = productReview1,
  reviewText = "I highly recommend shopping from kicks",
  reviewTitle = "Good Quality",
  rating = 0,
}) => {
  return (
    <div className="w-fit ">
      <div className="flex gap-1 bg-white p-8 rounded-tl-4xl rounded-tr-4xl justify-between">
        <div className="max-w-[293px]">
          <h6 className="h5">{reviewTitle}</h6>
          <p className="p w-[90%] leading-[100%] mt-2">{reviewText}</p>
          <div className="mt-2 flex gap-2 items-center">
            <span>
              <RatingStars rating={rating} />
            </span>
            <span>
              {rating}
              {rating % 1 >= 0.5 ? "" : ".0"}
            </span>
          </div>
        </div>
        <div className="self-start">
          <Image src={reviewImage} alt="reviewImage" width={64} height={64} />
        </div>
      </div>
      <div className="bg-[#eceef0] rounded-br-4xl rounded-bl-4xl">
        <Image
          src={productReviewImage}
          alt="productReviewImage"
          width={429}
          height={325}
          className="rounded-br-4xl rounded-bl-4xl"
        />
      </div>
    </div>
  );
};

export default ReviewCard;
