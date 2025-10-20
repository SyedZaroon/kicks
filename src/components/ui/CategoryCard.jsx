import Image from "next/image";
import category1 from "../../assets/images//productCategory/category1.png";
import Icon from "../ui/Icon";
import ArrowRightUp from "@/assets/icons/fill/ArrowRightUp";

const CategoryCard = ({
  categoryImage = category1,
  categoryName = "Lifestyle Shoes",
  className = "",
}) => {
  return (
    <div className="relative w-fit">
      <Image
        src={categoryImage}
        alt="Product 1"
        className={`max-h-[600px] object-cover ${className}`}
      />
      <div className="absolute lg:bottom-5 lg:left-8 lg:right-8 md:bottom-4 md:left-6 md:right-6 bottom-2 left-2 right-2 flex justify-between items-center">
        <h2 className="h3 w-[150px]">{categoryName}</h2>
        <span>
          <Icon icon={ArrowRightUp} />
        </span>
      </div>
    </div>
  );
};

export default CategoryCard;
