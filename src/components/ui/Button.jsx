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
    state === "primary" ? "hover:outline-dark-gray" : "hover:outline-blue"
  }  `;

  const buttonClasses = {
    fill: {
      wrapper: ` ${
        state === "primary" ? "bg-dark-gray" : "bg-blue"
      } hover:outline-offset-2`,
      disabled: "bg-neutrals-gray-2",
    },
    outline: {
      wrapper: ` border-dark-gray border`,
      disabled: "border",
    },
    text: "",
  };
  return (
    <button
      className={` ${
        disabled
          ? `${buttonClasses[type].disabled} cursor-not-allowed text-neutrals-gray-5`
          : ` ${buttonClasses[type].wrapper}`
      } ${baseClasses} text-white ${className}`}
      onClick={onClick}
    >
      {LeftIcon && <LeftIcon className={iconclass} size={16} />}
      {children}
      {RightIcon && <RightIcon className={iconclass} size={16} />}
    </button>
  );
};

export default Button;
