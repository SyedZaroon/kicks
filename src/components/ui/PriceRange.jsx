"use client";
import { useState, useEffect } from "react";

export default function PriceRangeSlider({
  minLimit = 0,
  maxLimit = 1000,
  step = 10,
  initialMin = minLimit,
  initialMax = maxLimit,
  color = "var(--color-dark-gray)",
  onChange,
}) {
  const [min, setMin] = useState(initialMin);
  const [max, setMax] = useState(initialMax);

  useEffect(() => {
    if (onChange) onChange(min, max);
  }, [min, max, onChange]);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), max - step);
    setMin(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), min + step);
    setMax(value);
  };

  const getBackgroundStyle = () => {
    const minPercent = ((min - minLimit) / (maxLimit - minLimit)) * 100;
    const maxPercent = ((max - minLimit) / (maxLimit - minLimit)) * 100;
    return {
      background: `linear-gradient(to right, #ddd ${minPercent}%, ${color} ${minPercent}%, ${color} ${maxPercent}%, #ddd ${maxPercent}%)`,
    };
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative w-[100%] h-1.5">
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          step={step}
          value={min}
          onChange={handleMinChange}
          className="absolute top-1/2 -translate-y-1/2 w-full pointer-events-none appearance-none bg-transparent z-20"
        />
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          step={step}
          value={max}
          onChange={handleMaxChange}
          className="absolute top-1/2 -translate-y-1/2 w-full pointer-events-none appearance-none bg-transparent z-30"
        />
        <div className="h-1.5 rounded-full" style={getBackgroundStyle()}></div>
      </div>

      <p className="text-sm text-gray-700">
        Price Range: £{min} - £{max}
      </p>

      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          pointer-events: all;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--color-blue);
          cursor: pointer;
          -webkit-appearance: none;
        }
      `}</style>
    </div>
  );
}
