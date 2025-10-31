import Button from "../ui/Button";
import ReviewSlider from "../sliders/ReviewSlider";
import Link from "next/link";
const ReviewSection = () => {
  return (
    <div>
      <div className="flex  gap-2 flex-row justify-between items-center">
        <h1 className="section-heading uppercase md:max-w-[60%]">Reviews</h1>
        <div className="sm:self-end">
          <Link className="cursor-pointer" href="/review">
            <Button className="cursor-pointer" state="secondary">
              View All Reviews
            </Button>
          </Link>
        </div>
      </div>
      <div className="mt-8">
        <ReviewSlider />
      </div>
    </div>
  );
};

export default ReviewSection;
