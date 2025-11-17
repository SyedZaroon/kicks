"use client";

import RadioButton from "../ui/RadioButton";

const VariantPicker = ({ variants, selectedVariant, setSelectedVariant }) => {
  const handleVariantChange = (key, option) => {
    setSelectedVariant((prev) => {
      const updated = { ...prev, [key]: option };
      return updated;
    });
  };

  return (
    <div>
      {Object.entries(variants).map(([key, values]) => {
        const state = key === "color" ? "color" : "default";
        return (
          <form key={key}>
            <h5 className="h5 uppercase mb-2">{key}</h5>
            <div
              className={`mb-8 flex flex-wrap ${
                key === "color" ? "gap-4" : "gap-2"
              }`}
            >
              {values.map((option) => (
                <RadioButton
                  key={option}
                  name={key}
                  value={option}
                  label={option}
                  state={state}
                  checked={selectedVariant[key] === option}
                  onChange={() => handleVariantChange(key, option)}
                />
              ))}
            </div>
          </form>
        );
      })}
    </div>
  );
};

export default VariantPicker;
