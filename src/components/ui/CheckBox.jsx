"use client";

const CheckBox = ({
  label = "",
  value = "",
  name = "",
  checked = false,
  onChange = () => {},
  disabled = false,
  colorCode = "",
  type = "default", // "default", "color", or "button"
  className = "",
}) => {
  const baseClasses = `
    flex items-center gap-2 cursor-pointer select-none transition-all duration-200
    ${disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-[1.02]"}
  `;

  const inputBase = `appearance-none hidden`;

  // ✅ Default square checkbox style
  const boxStyles = `
    flex items-center justify-center w-5 h-5 border rounded-sm
    ${
      checked
        ? "bg-dark-gray border-dark-gray"
        : "border-neutrals-gray-3 bg-transparent"
    }
  `;

  // 🎨 Color filter box style
  const colorCircle = `
    w-8 h-8 rounded-[8px] outline outline-1
    ${checked ? "outline-dark-gray outline-offset-2" : "outline-transparent"}
  `;

  // 🔘 Button-style checkbox (for size/fit filters)
  const buttonStyle = `
    px-4 py-2 border text-sm font-inter font-medium rounded-md
    ${
      checked
        ? "bg-dark-gray text-white border-dark-gray"
        : "border-neutrals-gray-3 text-dark-gray"
    }
    ${disabled ? "opacity-50 cursor-not-allowed" : "hover:border-dark-gray"}
  `;

  return (
    <label className={`${baseClasses} ${className}`}>
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e.target.value, e.target.checked)}
        disabled={disabled}
        className={inputBase}
      />
      {type === "color" ? (
        <span
          className={colorCircle}
          style={{ backgroundColor: colorCode }}
        ></span>
      ) : type === "button" ? (
        <span className={buttonStyle}>{label}</span>
      ) : (
        <span className={boxStyles}>
          {checked && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="white"
              className="w-3 h-3"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 0 1 0 1.414l-8.25 8.25a1 1 0 0 1-1.414 0l-3.75-3.75a1 1 0 1 1 1.414-1.414l3.043 3.043 7.543-7.543a1 1 0 0 1 1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </span>
      )}
      {/* Label only for default or color types */}
      {type !== "button" && (
        <span className="text-sm font-medium text-dark-gray">{label}</span>
      )}
    </label>
  );
};

export default CheckBox;
