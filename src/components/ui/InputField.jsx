"use client";

const InputField = ({
  label = "",
  placeholder = "Placeholder",
  type = "text",
  helperText = "",
  state = "default",
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  borderColor = "border-dark-gray",
  placeholderColor = "placeholder:text-neutrals-gray-6",
  textColor = "text-neutrals-gray-10",
  wrapperClassName = "py-[14.5px]",
  fieldContainerClassName = "",
  id = "",
  name = "",
  value = "",
  onChange = () => {},
}) => {
  const baseClasses = {
    wrapper: `flex  px-4 justify-between items-center rounded-lg border ${wrapperClassName}`,
    input: `font-inter appearance-none outline-none border-none bg-transparent focus:ring-0 flex-1 w-full`,
    helper: `font-inter mt-1 text-[12px]`,
  };

  const stateClasses = {
    default: {
      wrapper: `${borderColor} focus-within:border-neutrals-gray-4`,
      input: `${textColor} ${placeholderColor}`,
      helper: "mt-1 text-neutrals-gray-6",
      icon: "text-neutrals-gray-6",
    },
    success: {
      wrapper: "border-sucess focus-within:border-sucess",
      input: "text-sucess placeholder:text-sucess",
      helper: "font-inter mt-1 text-[12px] text-sucess",
      icon: "text-sucess",
    },
    error: {
      wrapper: "border-error focus-within:border-error",
      input: "text-error ",
      helper: "font-inter mt-1 text-[12px] text-error",
      icon: "text-error",
    },
    disabled: {
      wrapper: "border-neutrals-gray-3 cursor-not-allowed ",
      input: "text-neutrals-gray-3 cursor-not-allowed ",
      helper: "font-inter mt-1 text-[12px] text-neutrals-gray-3",
      icon: "text-neutrals-gray-3 cursor-not-allowed ",
    },
  };

  const current = stateClasses[state] || stateClasses.default;

  return (
    <>
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
          {LeftIcon && (
            <span className={current.icon}>
              <LeftIcon size={24} />
            </span>
          )}
          <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            disabled={state === "disabled"}
            className={`${baseClasses.input} ${current.input}`}
            value={value}
            onChange={onChange}
          />
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

        {helperText && <p className={current.helper}>{helperText}</p>}
      </div>
    </>
  );
};

export default InputField;
