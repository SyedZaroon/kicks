"use client";

import { useState } from "react";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import Heart from "@/assets/icons/outline/HeartOutline";
import RadioButton from "../ui/RadioButton";

const VariantPicker = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const colorOptions = [
    { name: "Yellow", colorCode: "#facc15" },
    { name: "Blue", colorCode: "#3b82f6" },
    { name: "Brown", colorCode: "#92400e" },
    { name: "Red", colorCode: "#f87171" },
    { name: "Orange", colorCode: "#fb923c" },
  ];

  const sizeOptions = [
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedColor || !selectedSize) {
      alert("Please select both color and size.");
      return;
    }

    const selectedVariant = {
      color: selectedColor,
      size: selectedSize,
    };

    console.log("Selected Variant:", selectedVariant);
    alert(`Added to cart: ${selectedColor} / Size ${selectedSize}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* COLOR PICKER */}
      <div>
        <h6 className="h6">Color</h6>
        <div className="mt-4 flex gap-4 flex-wrap">
          {colorOptions.map((colorObj, idx) => (
            <RadioButton
              key={idx}
              name="color"
              value={colorObj.name}
              type="color"
              colorCode={colorObj.colorCode}
              checked={selectedColor === colorObj.name}
              onChange={(e) => setSelectedColor(e.target.value)}
            />
          ))}
        </div>
      </div>

      {/* SIZE PICKER */}
      <div>
        <h6 className="h6">Size</h6>
        <div className="mt-4 flex gap-3 flex-wrap">
          {sizeOptions.map((size, idx) => (
            <RadioButton
              key={idx}
              name="size"
              value={size}
              label={size}
              type="button"
              checked={selectedSize === size}
              onChange={(e) => setSelectedSize(e.target.value)}
            />
          ))}
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="grid grid-cols-[85%_10%] gap-1">
        <div className="">
          <Button
            className="w-full justify-center"
            disabled={!selectedColor || !selectedSize}
            onClick={handleSubmit}
          >
            ADD TO CART
          </Button>
        </div>
        <Icon icon={Heart} size={24} />
      </div>

      <div>
        <Button
          className="w-full justify-center"
          state="secondary"
          disabled={!selectedColor || !selectedSize}
          onClick={(e) => {
            e.preventDefault();
            if (!selectedColor || !selectedSize) return;
            alert(`Buying now: ${selectedColor} / Size ${selectedSize}`);
          }}
        >
          BUY IT NOW
        </Button>
      </div>
    </form>
  );
};

export default VariantPicker;
