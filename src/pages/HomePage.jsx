import React from 'react'
import HomeSlider from '@/components/sliders/HomeSlider'
import ProductCard from '@/components/blocks/ProductCard'
import FeatureProducts from '@/components/sections/FeatureProducts';

const HomePage = () => {
  return (
    <div>
      <h1 className="section-margin py-6 uppercase font-rubik font-bold leading-[100%] text-[var(--color-dark-gray)] text-[clamp(20px,14.8vw,250px)] text-center xl:text-[15vw]">
        Do it <span className="text-[var(--color-blue)]">right</span>
      </h1>
      <div className="mb-24 section-margin">
        <HomeSlider />
      </div>
      <div className="mb-24 section-margin">
        <FeatureProducts />
      </div>
    </div>
  );
}

export default HomePage
