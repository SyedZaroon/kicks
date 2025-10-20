"use client";

import React, { useState } from "react";
import CheckBox from "../ui/CheckBox";
import PriceRange from "../ui/PriceRange";
import Icon from "../ui/Icon";
import ChevronForwardOutline from "../../assets/icons/outline/ChevronForwordOutline";

const ProductFilterContent = () => {
  const colors = ["red", "blue", "black", "white", "#000", "#fff"];
  const sizes = ["S", "M", "L", "XL"];
  const genders = ["Men", "Women", "Unisex"];
  const priceRange = [0, 1000];

  // ✅ single state object for all filter toggles
  const [openFilters, setOpenFilters] = useState({
    size: true,
    color: true,
    gender: true,
    price: true,
  });

  const toggleFilter = (filter) => {
    setOpenFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-[var(--color-dark-gray)]">
          Filters
        </h2>
        <button className="text-sm text-[var(--color-neutrals-gray-3)] hover:text-[var(--color-dark-gray)]">
          Clear All
        </button>
      </div>

      {/* Size Filter */}
      <div>
        <div className="flex justify-between items-center cursor-pointer">
          <h4 className="font-medium mb-3">Size</h4>
          <Icon
            type="text"
            icon={ChevronForwardOutline}
            size={12}
            onClick={() => toggleFilter("size")}
            className={`transition-transform duration-300 ${
              openFilters.size ? "rotate-90" : "rotate-270"
            }`}
          />
        </div>

        <div
          className={`flex gap-x-2 gap-y-3 flex-wrap overflow-hidden transition-all duration-300 ease-in-out ${
            openFilters.size ? "max-h-40" : "max-h-0"
          }`}
        >
          {sizes.map((size) => (
            <CheckBox key={size} label={size} type="button" />
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div>
        <div className="flex justify-between items-center cursor-pointer">
          <h4 className="font-medium mb-3">Color</h4>
          <Icon
            type="text"
            icon={ChevronForwardOutline}
            onClick={() => toggleFilter("color")}
            size={12}
            className={`transition-transform duration-300 ${
              openFilters.color ? "rotate-90" : "rotate-270"
            }`}
          />
        </div>

        <div
          className={`flex gap-x-2 gap-y-3 flex-wrap overflow-hidden transition-all duration-300 ease-in-out ${
            openFilters.color ? "max-h-40" : "max-h-0"
          }`}
        >
          {colors.map((c) => (
            <CheckBox key={c} type="color" colorCode={c} />
          ))}
        </div>
      </div>

      {/* Gender Filter */}
      <div>
        <div className="flex justify-between items-center cursor-pointer">
          <h4 className="font-medium mb-3">Gender</h4>
          <Icon
            type="text"
            icon={ChevronForwardOutline}
            onClick={() => toggleFilter("gender")}
            size={12}
            className={`transition-transform duration-300 ${
              openFilters.gender ? "rotate-90" : "rotate-270"
            }`}
          />
        </div>

        <div
          className={`flex flex-col gap-x-2 gap-y-3 overflow-hidden transition-all duration-300 ease-in-out ${
            openFilters.gender ? "max-h-40" : "max-h-0"
          }`}
        >
          {genders.map((g) => (
            <CheckBox key={g} label={g} />
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <div className="flex justify-between items-center cursor-pointer">
          <h4 className="font-medium mb-3">Price Range</h4>
          <Icon
            type="text"
            icon={ChevronForwardOutline}
            onClick={() => toggleFilter("price")}
            size={12}
            className={`transition-transform duration-300 ${
              openFilters.price ? "rotate-90" : "rotate-270"
            }`}
          />
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            openFilters.price ? "max-h-40" : "max-h-0"
          }`}
        >
          <PriceRange min={priceRange[0]} max={priceRange[1]} />
        </div>
      </div>
    </div>
  );
};

export default ProductFilterContent;
