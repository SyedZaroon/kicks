import React from 'react'

const Button = ({
  text = "BUTTON",
  type = "fill",
    disabled = false,
  className = "",
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
}) => {
  const baseClasses =
    "rounded-lg font-inter weight-medium text-sm flex items-center gap-1 p-4 hover:outline-1 hover:outline-[var(--color-dark-gray)] ";

  const buttonClasses = {
    fill: {
      wrapper:"bg-[var(--color-dark-gray)] text-[var(--color-white)] hover:outline-offset-2 ",
    disabled: "bg-[var(--color-neutrals-gray-2)]",
    },
      outline: {
        wrapper:"border-[var(--color-dark-gray)] border",
        disabled: "border",
    },
    text: "",
  };
  return (
    <button
      className={` ${
        disabled ? `${buttonClasses[type].disabled} cursor-not-allowed text-[var(--color-neutrals-gray-5)] pointer-events-none` : ` ${buttonClasses[type].wrapper} ${className}`
      } ${baseClasses}`}
    >
      {LeftIcon && <LeftIcon size={16} />}
      {text}
      {RightIcon && <RightIcon size={16} />}
    </button>
  );
};

export default Button
