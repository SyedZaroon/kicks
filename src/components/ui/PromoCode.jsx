"use client";

import { useState } from "react";
import Button from "./Button";

const PromoCode = ({
  onApply,
  className = "",
  disabled = false,
  appliedCode = null,
  discount = 0,
}) => {
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleApply = async () => {
    if (!code.trim()) return;

    setIsLoading(true);
    try {
      await onApply?.(code.trim());
    } catch (error) {
      console.error("Error applying promo code:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleApply();
    }
  };

  return (
    <div className={`${className}`}>
      <div className="space-y-4">
        <h3 className="h5 text-dark-gray font-semibold">Use a promo code</h3>

        {appliedCode ? (
          // Applied promo code state
          <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-green-800">
                Code "{appliedCode}" applied
              </span>
            </div>
            <span className="text-sm font-semibold text-green-800">
              -${discount.toFixed(2)}
            </span>
          </div>
        ) : (
          // Input state
          <div className="flex gap-2">
            <div className="flex-1">
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                onKeyPress={handleKeyPress}
                placeholder="Enter promo code"
                disabled={disabled || isLoading}
                className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent text-sm font-medium placeholder:text-gray disabled:bg-gray-50 disabled:cursor-not-allowed"
              />
            </div>
            <Button
              onClick={handleApply}
              disabled={!code.trim() || disabled || isLoading}
              className="px-6"
              state="primary"
            >
              {isLoading ? "APPLYING..." : "APPLY"}
            </Button>
          </div>
        )}

        {/* Optional: Show common promo codes or hints */}
        <div className="text-xs text-gray">
          Enter a valid promo code to get a discount on your order.
        </div>
      </div>
    </div>
  );
};

export default PromoCode;
