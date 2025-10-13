import React from "react";

const InputField = ({
  label = "",
  placeholder = "Placeholder",
  type = "text",
  helperText = "",
  state = "default", 
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  borderColor = "border-[var(--color-dark-gray)]",
  placeholderColor = "placeholder:text-[color:var(--color-neutrals-gray-6)]",
  textColor = "text-[color:var(--color-neutrals-gray-10)]",
  wrapperClassName = "",
}) => {
   const baseClasses = {
     wrapper:
       `flex py-[14.5px] px-4 justify-between items-center rounded-lg border ${wrapperClassName}`,
     input:
       `font-inter appearance-none outline-none border-none bg-transparent focus:ring-0 flex-1`,
     helper: `font-inter mt-1 text-[12px]`,
   };
    
  const stateClasses = {
    default: {
      wrapper:
        `${borderColor} focus-within:border-[var(--color-neutrals-gray-4)]`,
      input:
        `${textColor} ${placeholderColor}`,
      helper: "mt-1 text-[color:var(--color-neutrals-gray-6)]",
      icon: "text-[color:var(--color-neutrals-gray-6)]",
    },
    success: {
      wrapper:
        "border-[var(--color-sucess)] focus-within:border-[var(--color-sucess)]",
      input:
        "text-[color:var(--color-sucess)] placeholder:text-[color:var(--color-sucess)]",
      helper: "font-inter mt-1 text-[12px] text-[color:var(--color-sucess)]",
      icon: "text-[color:var(--color-sucess)]",
    },
    error: {
      wrapper:
        "border-[var(--color-error)] focus-within:border-[var(--color-error)]",
      input: "text-[var(--color-error)] ",
      helper: "font-inter mt-1 text-[12px] text-[var(--color-error)]",
      icon: "text-[var(--color-error)]",
    },
    disabled: {
      wrapper:
        "border-[var(--color-neutrals-gray-3)] cursor-not-allowed ",
      input: "text-[var(--color-neutrals-gray-3)] cursor-not-allowed ",
      helper: "font-inter mt-1 text-[12px] text-[var(--color-neutrals-gray-3)]",
      icon: "text-[var(--color-neutrals-gray-3)] cursor-not-allowed ",
    },
  };

  const current = stateClasses[state] || stateClasses.default;

  return (
    <>
      {label && (
        <p
          className={`font-inter mb-2 text-[14px] ${state === "disabled" ? "text-[color:var(--color-neutrals-gray-3)]" : "text-[color:var(--color-dark-gray)]"}`}
        >
          {label}
        </p>
      )}

      <div className={`${baseClasses.wrapper} ${current.wrapper}`}>
        <input
          type={type}
          placeholder={placeholder}
          disabled={state === "disabled"}
          className={`${baseClasses.input} ${current.input}`}
        />

        <div className="flex gap-1 items-center justify-between">
          {LeftIcon && (
            <span className={current.icon}>
              <LeftIcon size={24} />
            </span>
          )}
          {RightIcon && (
            <span
              className={
                state === "disabled"
                  ? stateClasses.disabled.icon
                  : stateClasses.default.icon
              }
            >
              <RightIcon size={24} />
            </span>
          )}
        </div>
      </div>

      {helperText && <p className={current.helper}>{helperText}</p>}
    </>
  );
};

export default InputField;
