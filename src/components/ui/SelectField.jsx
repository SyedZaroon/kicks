import React from "react";

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
  borderColor = "border-[var(--color-dark-gray)]",
  textColor = "text-[color:var(--color-neutrals-gray-10)]",
  placeholderColor = "placeholder:text-[color:var(--color-neutrals-gray-6)]",
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
      wrapper: `${borderColor} focus-within:border-[var(--color-neutrals-gray-4)]`,
      select: `${textColor}`,
      helper: "text-[color:var(--color-neutrals-gray-6)]",
      icon: "text-[color:var(--color-neutrals-gray-6)]",
    },
    success: {
      wrapper:
        "border-[var(--color-sucess)] focus-within:border-[var(--color-sucess)]",
      select: "text-[color:var(--color-sucess)]",
      helper: "text-[color:var(--color-sucess)]",
      icon: "text-[color:var(--color-sucess)]",
    },
    error: {
      wrapper:
        "border-[var(--color-error)] focus-within:border-[var(--color-error)]",
      select: "text-[color:var(--color-error)]",
      helper: "text-[color:var(--color-error)]",
      icon: "text-[color:var(--color-error)]",
    },
    disabled: {
      wrapper: "border-[var(--color-neutrals-gray-3)] cursor-not-allowed",
      select:
        "text-[var(--color-neutrals-gray-3)] cursor-not-allowed bg-transparent",
      helper: "text-[var(--color-neutrals-gray-3)]",
      icon: "text-[var(--color-neutrals-gray-3)] cursor-not-allowed",
    },
  };

  const current = stateClasses[state] || stateClasses.default;

  return (
    <div className={`${fieldContainerClassName}`}>
      {label && (
        <p
          className={`font-inter mb-2 text-[14px] ${
            state === "disabled"
              ? "text-[color:var(--color-neutrals-gray-3)]"
              : "text-[color:var(--color-dark-gray)]"
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
          {options.map((opt) => (
            <option key={opt.value || opt.label} value={opt.value}>
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
