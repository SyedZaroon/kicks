const Icon = ({
  icon: Icon,
  type = "fill",
  disabled = false,
  size = 24,
  className = "",
  onClick,
}) => {
  const baseClasses =
    "rounded-lg w-fit hover:outline-1 hover:outline-dark-gray";
  const iconClasses = {
    fill: {
      wrapper: "bg-dark-gray p-2 text-white hover:outline-offset-2",
      disabled: "bg-neutrals-gray-2 ",
    },
    outline: {
      wrapper: "border border-dark-gray p-2 hover:outline-offset-2",
      disabled: "bg-transparent border border-neutrals-gray-2 ",
    },
    text: {
      wrapper: "border-none outline-none p-0 ",
      disabled: "",
    },
  };
  return (
    <div
      onClick={onClick}
      className={`${baseClasses}  ${
        disabled
          ? `cursor-not-allowed pointer-events-none text-neutrals-gray-5 ${iconClasses[type].disabled}`
          : `${iconClasses[type].wrapper}`
      }`}
    >
      <Icon size={size} className={className} />
    </div>
  );
};

export default Icon;
