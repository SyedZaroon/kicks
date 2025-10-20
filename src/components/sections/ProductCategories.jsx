import React from 'react'
import CategoryCard from "@/components/ui/CategoryCard";
import category1 from "../../assets/images//productCategory/category1.png";
import category2 from "../../assets/images//productCategory/category2.png";
const ProductCategories = () => {
  return (
    <div className="bg-[var(--color-dark-gray)] p-4 lg:pl-[60px] lg:pr-[0px] lg:pb-[0px]">
      <div className="pb-6 lg:pt-[90px] ">
        <h2 className="section-heading text-[var(--color-white)]">
          Categories
        </h2>
      </div>

      <div className="flex flex-col justify-end lg:flex-row rounded-tl-[48px]">
        <CategoryCard
          categoryImage={category2}
          categoryName="Running Shoes"
          className="rounded-tl-[30px]"
        />
        <CategoryCard
          categoryImage={category1}
          categoryName="Lifestyle Shoes"
        />
      </div>
    </div>
  );
}

export default ProductCategories