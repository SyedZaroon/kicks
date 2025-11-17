"use client";

import React from "react";

const RadioButton = ({
  name,
  value,
  label,
  checked = false,
  onChange = () => {},
  state = "default",
}) => {
  if (state === "color") {
    return (
      <label className="relative cursor-pointer">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="absolute opacity-0 w-0 h-0"
        />
        <span
          className={`w-8 h-8 rounded-full block ${
            checked ? "outline-black outline-offset-2 outline-2" : ""
          }`}
          style={{ backgroundColor: value }}
        ></span>
      </label>
    );
  }

  return (
    <label>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="absolute opacity-0 w-0 h-0"
      />

      <div
        className={` cursor-pointer py-2 px-4  rounded-lg ${
          checked ? "bg-black text-white" : "bg-white text-black "
        }`}
      >
        <p>{label}</p>
      </div>
    </label>
  );
};

export default RadioButton;
