import HomeSlider from "@/components/sliders/HomeSlider";
import FeatureProducts from "@/components/sections/FeatureProducts";
import ProductCategories from "@/components/sections/ProductCategories";
import ReviewSection from "@/components/sections/ReviewSection";
import Search from "@/components/ui/Search";

const HomePage = () => {
  return (
    <div>
      <Search />
      <h1 className="section-margin py-6 uppercase font-rubik font-bold leading-[100%] text-dark-gray text-[clamp(20px,14.8vw,250px)] text-center xl:text-[15vw]">
        Do it <span className="text-blue">right</span>
      </h1>
      <div className="mb-24 section-margin">
        <HomeSlider />
      </div>
      <div className="mb-24 section-margin">
        <FeatureProducts />
      </div>
      <div className="mb-24">
        <ProductCategories />
      </div>
      <div className="mb-24 section-margin">
        <ReviewSection />
      </div>
    </div>
  );
};

export default HomePage;
