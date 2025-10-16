import StarEmptay from "@/assets/icons/ratingStar/StarEmptay";
import StarFill from "@/assets/icons/ratingStar/StarFill";
import StarHalf from "@/assets/icons/ratingStar/StarHalf";
import React from "react";

const RatingStars = ({ rating = 0 }) => {
  // If rating is above 5 or below 0, don't render anything
  if (rating > 5 || rating < 0) {
    return null;
  }

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex gap-1 text-[var(--color-yellow)]">
      {Array.from({ length: fullStars }).map((_,index) => (
        <StarFill key={`full-${index}`} className="w-[16px] h-[17px]" />
      ))}

      {hasHalfStar && <StarHalf key="half" className="w-[16px] h-[17px]" />}

      {Array.from({ length: emptyStars }).map((index) => (
        <StarEmptay key={`empty-${index}`} className="w-[16px] h-[17px]" />
      ))}
    </div>
  );
};

export default RatingStars;
