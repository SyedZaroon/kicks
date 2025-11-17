"use client";

import React, { useState } from "react";
import InputField from "./InputField";

const QuantitySelector = ({
  stock = "",
  qty = 1,
  setQty = null,
  onUpdateQuantity = null,
  productId = "",
}) => {
  const [error, setError] = useState(false);

  const handleQtyChange = (value) => {

    if (value < 1) value = 1;
    if (value > stock) {
      setError(true);
      value = stock;
    } else {
      setError(false);
    }

    setQty(value);
  };

  return (
    <>
      <h5 className="h5 uppercase mb-2">Quantity</h5>
      <div className="w-[20%]">
        <InputField
          type="number"
          value={qty}
          onChange={(e) => {
            const value = Number(e.target.value);

            // If parent passed a handler → use that
            if (onUpdateQuantity) {
              onUpdateQuantity(productId, value, stock);
              return;
            }

            // Otherwise → use internal handler
            handleQtyChange(value);
          }}
          wrapperClassName="py-2"
        />
      </div>

      {error && (
        <p className="text-error mt-2">
          You cannot add more than {stock} items
        </p>
      )}
    </>
  );
};

export default QuantitySelector;
