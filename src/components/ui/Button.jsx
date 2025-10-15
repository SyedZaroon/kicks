import React from 'react'

const Button = ({
  text = "BUTTON",
  type = "fill",
    disabled = false,
  className = "",
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  state = "primary",
  children
}) => {
  const baseClasses = `rounded-lg font-inter weight-medium text-sm flex items-center gap-1 p-2 lg:p-4 hover:outline-1 ${
    state === "primary"
      ? "hover:outline-[var(--color-dark-gray)]"
      : "hover:outline-[var(--color-blue)]"
  }  `;

  const buttonClasses = {
    fill: {
      wrapper: ` ${state === "primary" ? "bg-[var(--color-dark-gray)]" : "bg-[var(--color-blue)]"} text-[var(--color-white)] hover:outline-offset-2`,
    disabled: "bg-[var(--color-neutrals-gray-2)]",
    },
      outline: {
        wrapper: ` ${state === "primary" ? "bg-[var(--color-dark-gray)]" : "bg-[var(--color-blue)]"} border-[var(--color-dark-gray)] border`,
        disabled: "border",
    },
    text: "",
  };
  return (
    <button
      className={` ${
        disabled
          ? `${buttonClasses[type].disabled} cursor-not-allowed text-[var(--color-neutrals-gray-5)] pointer-events-none`
          : ` ${buttonClasses[type].wrapper}`
      } ${baseClasses} ${className}`}
    >
      {LeftIcon && <LeftIcon size={16} />}
      {children}
      {RightIcon && <RightIcon size={16} />}
    </button>
  );
};

export default Button
