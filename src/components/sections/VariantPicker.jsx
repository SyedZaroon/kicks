"use client";

import RadioButton from "../ui/RadioButton";

const VariantPicker = ({ variants }) => {
  return (
    <div>
      {Object.entries(variants).map(([key, values]) => (
        <form key={key}>
          <h5 className="h5 uppercase mb-2">{key}</h5>
          <div className="mb-8 flex gap-2 flex-wrap">
            {values.map((value) => (
              <RadioButton
                type={key === "color" ? "color" : "button"}
                key={value}
                label={value}
                value={value}
                name={key}
                checked={value === variants[key]}
                onChange={() => {}}
                disabled={false}
                colorCode={key === "color" ? value : ""}
                className={""}
              />
            ))}
          </div>
        </form>
      ))}
    </div>
  );
};

export default VariantPicker;
