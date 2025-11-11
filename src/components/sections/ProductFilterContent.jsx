"use client";
import React from "react";
import CheckBox from "../ui/CheckBox";

const ProductFilterContent = ({ products }) => {
  if (!products || products.length === 0) return null;

  const variantMap = {};

  products.forEach((product) => {
    Object.entries(product.variants).forEach(([name, options]) => {
      if (!variantMap[name]) variantMap[name] = new Set();
      options.forEach((opt) => variantMap[name].add(opt));
    });
  });

  // Step 3: Render
  return (
    <div className="p-4 pl-0">
      <h5 className="h5 uppercase mb-4">Filters</h5>
      {Object.entries(variantMap).map(([name, options]) => (
        <div key={name} className="mb-4">
          <h6 className="font-medium mb-2 capitalize">{name}</h6>
          <div
            className={`flex  flex-wrap ${
              name !== "color" && name !== "size" ? "flex-col gap-2" : "gap-4"
            }`}
          >
            {[...options].map((option) => (
              <CheckBox
                key={option}
                className="border border-gray-300 px-3 py-1 rounded hover:bg-gray-100 text-sm"
                label={option}
                value={option}
                name={name}
                onChange={() => {}}
                disabled={false}
                colorCode={name === "color" ? option : ""}
                size={name === "size" ? option : ""}
                type={name === "color" ? "color" : "default"}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductFilterContent;
