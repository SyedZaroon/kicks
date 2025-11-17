"use client";
import { useRouter } from "next/router";
import { useState } from "react";

const CheckBox = ({
  label = "",
  value = "",
  name = "",
  colorCode = "",
  size = "",
  checked = true,
  onChange = () => {},
  colorVariantClass = "w-12 h-12 rounded-xl",
}) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />

      {/* 🎨 Color box */}
      {colorCode && (
        <div
          className={` ${colorVariantClass} transition-all duration-200 ${
            checked
              ? "outline-2 outline-black outline-offset-2"
              : "outline-2 outline-transparent outline-offset-2"
          }`}
          style={{ backgroundColor: colorCode }}
        />
      )}

      {/* 📏 Size box */}
      {size && (
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center border border-gray-300 transition-all duration-200 ${
            checked ? "bg-black text-white" : "bg-white"
          }`}
        >
          <p>{label}</p>
        </div>
      )}

      {/* 🏷 Default label + custom small square */}
      {!colorCode && !size && (
        <div className="flex items-center gap-2">
          <div
            className={`w-4 h-4 border border-gray-400 rounded-sm transition-all duration-200 ${
              checked ? "bg-black" : "bg-white"
            }`}
          ></div>
          <span>{label}</span>
        </div>
      )}
    </label>
  );
};

export default CheckBox;
