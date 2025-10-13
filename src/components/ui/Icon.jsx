import React from 'react'

const Icon = ({
    icon:Icon,
    type = "fill",
    disabled = false,
    size = 24,
}) => {
    const baseClasses = "rounded-lg w-fit hover:outline-1 hover:outline-[var(--color-dark-gray)]";
    const iconClasses = {
      fill: {
        wrapper:
          "bg-[var(--color-dark-gray)] p-2 text-[var(--color-white)] hover:outline-offset-2",
        disabled: "bg-[var(--color-neutrals-gray-2)] ",
      },
      outline: {
        wrapper:
          "border border-[var(--color-dark-gray)] p-2 hover:outline-offset-2",
        disabled:
          "bg-transparent border border-[var(--color-neutrals-gray-2)] ",
      },
      text: {
        wrapper: "border-none outline-none p-0 ",
        disabled: "",
      },
    };
  return (
    <div
      className={`${baseClasses}  ${
        disabled
          ? `cursor-not-allowed pointer-events-none text-[var(--color-neutrals-gray-5)] ${iconClasses[type].disabled}`
          : `${iconClasses[type].wrapper}`
      }`}
    >
      <Icon size={size} />
    </div>
  );
}

export default Icon
