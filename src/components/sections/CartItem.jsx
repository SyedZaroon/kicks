import TrashOutline from "../../assets/icons/outline/TrashOutline";
import Icon from "../ui/Icon";
import QuantitySelector from "../ui/QuantitySelector";
import { useState } from "react";

const CartItem = ({
  product = "",
  onUpdateQuantity,
  onRemove,
  className = "",
}) => {
  console.log(product);

  return (
    <div className={`bg-white rounded-lg p-4 lg:p-6 ${className}`}>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
        {/* Product Image */}
        <div className="w-full lg:w-32 h-32 lg:h-32 flex-shrink-0">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="h4 text-dark-gray mb-1">{product.title}</h3>
              <p className="h4 text-blue font-semibold">${product.total}</p>
            </div>
            <div>
              {Object.entries(product.variants).map(([key, value]) => (
                <div
                  key={key}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <span className="font-medium capitalize">{key}:</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
            <QuantitySelector
              stock={product.stock}
              qty={product.qty}
              onUpdateQuantity={onUpdateQuantity}
              productId={product.id}
            />
          </div>

          {/* Price & Actions */}
          <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-4">
            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => onRemove?.(product.id)}
                className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                title="Remove from cart"
              >
                <Icon
                  icon={TrashOutline}
                  type="text"
                  size={20}
                  className="text-gray hover:text-red-500"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
