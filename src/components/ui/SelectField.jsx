const SelectField = ({
  label = "",
  name = "",
  id = "",
  options = [],
  value = "",
  onChange = () => {},
  helperText = "",
  state = "default", // "default" | "success" | "error" | "disabled"
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  borderColor = "border-dark-gray",
  textColor = "text-neutrals-gray-10",
  placeholderColor = "placeholder:text-neutrals-gray-6",
  wrapperClassName = "",
  fieldContainerClassName = "",
}) => {
  const baseClasses = {
    wrapper: `flex justify-between items-center py-[10px] px-4 rounded-lg border ${wrapperClassName}`,
    select: `font-inter appearance-none outline-none border-none bg-transparent flex-1 ${textColor} ${placeholderColor}`,
    helper: `font-inter mt-1 text-[12px]`,
  };

  const stateClasses = {
    default: {
      wrapper: `${borderColor} focus-within:border-neutrals-gray-4`,
      select: `${textColor}`,
      helper: "text-neutrals-gray-6",
      icon: "text-neutrals-gray-6",
    },
    success: {
      wrapper: "border-sucess focus-within:border-sucess",
      select: "text-sucess",
      helper: "text-sucess",
      icon: "text-sucess",
    },
    error: {
      wrapper: "border-error focus-within:border-error",
      select: "text-error",
      helper: "text-error",
      icon: "text-error",
    },
    disabled: {
      wrapper: "border-neutrals-gray-3 cursor-not-allowed",
      select: "text-neutrals-gray-3 cursor-not-allowed bg-transparent",
      helper: "text-neutrals-gray-3",
      icon: "text-neutrals-gray-3 cursor-not-allowed",
    },
  };

  const current = stateClasses[state] || stateClasses.default;

  return (
    <div className={`${fieldContainerClassName}`}>
      {label && (
        <p
          className={`font-inter mb-2 text-[14px] ${
            state === "disabled" ? "text-neutrals-gray-3" : "text-dark-gray"
          }`}
        >
          {label}
        </p>
      )}

      <div className={`${baseClasses.wrapper} ${current.wrapper}`}>
        {LeftIcon && <LeftIcon size={20} className={current.icon} />}

        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          disabled={state === "disabled"}
          className={`${baseClasses.select} ${current.select}`}
        >
          <option value="">Select an option</option>
          {options.map((opt, idx) => (
            <option key={idx} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {RightIcon && <RightIcon size={20} className={current.icon} />}
      </div>

      {helperText && <p className={current.helper}>{helperText}</p>}
    </div>
  );
};

export default SelectField;
