import React from 'react'

const Button = ({
  type = "fill",
  disabled = false,
  className = "",
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  state = "primary",
  children,
  onClick,
  iconclass = "",
}) => {
  const baseClasses = `rounded-lg font-inter weight-medium text-sm flex items-center gap-1 p-2 lg:p-4 hover:outline-1 ${
    state === "primary"
      ? "hover:outline-[var(--color-dark-gray)]"
      : "hover:outline-[var(--color-blue)]"
  }  `;

  const buttonClasses = {
    fill: {
      wrapper: ` ${
        state === "primary"
          ? "bg-[var(--color-dark-gray)]"
          : "bg-[var(--color-blue)]"
      } hover:outline-offset-2`,
      disabled: "bg-[var(--color-neutrals-gray-2)]",
    },
    outline: {
      wrapper: ` border-[var(--color-dark-gray)] border`,
      disabled: "border",
    },
    text: "",
  };
  return (
    <button
      className={` ${
        disabled
          ? `${buttonClasses[type].disabled} cursor-not-allowed text-[var(--color-neutrals-gray-5)]`
          : ` ${buttonClasses[type].wrapper}`
      } ${baseClasses} text-[var(--color-white)] ${className}`}
      onClick={onClick}
    >
      {LeftIcon && <LeftIcon className={iconclass} size={16} />}
      {children}
      {RightIcon && <RightIcon className={iconclass} size={16} />}
    </button>
  );
};

export default Button
