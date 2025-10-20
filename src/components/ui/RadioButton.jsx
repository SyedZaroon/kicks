import React from "react";

const RadioButton = ({
  type = "button", 
  label = "",
  value = "",
  name = "",
  checked = false,
  onChange = () => {},
  disabled = false,
  colorCode = "",
  className = "",
}) => {
  const baseClasses = `
    flex items-center justify-center rounded-md cursor-pointer transition-all duration-200
    font-inter font-medium text-sm
  `;

  const inputBase = `
    absolute opacity-0 pointer-events-none
  `;
  const buttonStyles = `
    px-4 py-2 outline ${
      checked
        ? "outline-[var(--color-dark-gray)] outline-offset-2 bg-[var(--color-dark-gray)] text-white"
        : "outline-[var(--color-neutrals-gray-3)] text-[var(--color-dark-gray)] bg-transparent"
    }
    ${
      disabled
        ? "opacity-50 cursor-not-allowed"
        : "hover:outline-[var(--color-dark-gray)]"
    }
  `;

  const colorStyles = `
    w-8 h-8 rounded-full outline outline-1
    ${checked ? "outline-[var(--color-dark-gray) outline-offset-2]" : "outline-transparent"}
    ${disabled ? "opacity-40 cursor-not-allowed" : "hover:scale-105"}
  `;

  return (
    <label
      className={`relative inline-flex items-center gap-2 select-none ${className}`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={inputBase}
      />

      {type === "color" ? (
        <span
          className={`${colorStyles}`}
          style={{ backgroundColor: colorCode }}
        ></span>
      ) : (
        <span className={`${baseClasses} ${buttonStyles}`}>{label}</span>
      )}
    </label>
  );
};

export default RadioButton;
