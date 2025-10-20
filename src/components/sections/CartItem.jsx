import React from 'react';
import HeartOutline from '../../assets/icons/outline/HeartOutline';
import TrashOutline from '../../assets/icons/outline/TrashOutline';
import MinusOutline from '../../assets/icons/outline/MinusOutline';
import PlusOutlineIcon from '../../assets/icons/outline/PlusOutline';
import Icon from '../ui/Icon';

const CartItem = ({
  product = {
    id: 1,
    name: "DROPSET TRAINER SHOES",
    subtitle: "Men's Road Running Shoes",
    color: "Enamel Blue/ University White",
    size: "10",
    price: 130.00,
    image: "/api/placeholder/120/120",
    quantity: 1
  },
  onUpdateQuantity,
  onRemove,
  onMoveToWishlist,
  className = ""
}) => {
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) return;
    onUpdateQuantity?.(product.id, newQuantity);
  };

  return (
    <div className={`bg-white rounded-lg p-4 lg:p-6 ${className}`}>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
        {/* Product Image */}
        <div className="w-full lg:w-32 h-32 lg:h-32 flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
            {/* Product Info */}
            <div className="flex-1">
              <h3 className="h4 text-[var(--color-dark-gray)] mb-1">
                {product.name}
              </h3>
              <p className="text-[var(--color-gray)] text-sm mb-2">
                {product.subtitle}
              </p>
              <p className="text-[var(--color-gray)] text-sm mb-4">
                {product.color}
              </p>
              
              {/* Size & Quantity - Mobile */}
              <div className="flex items-center gap-4 lg:hidden mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[var(--color-gray)]">Size</span>
                  <select className="text-sm border border-[var(--color-light-gray)] rounded px-2 py-1 bg-white">
                    <option value={product.size}>{product.size}</option>
                  </select>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[var(--color-gray)]">Quantity</span>
                  <div className="flex items-center border border-[var(--color-light-gray)] rounded">
                    <button 
                      onClick={() => handleQuantityChange(product.quantity - 1)}
                      className="p-1 hover:bg-gray-50 rounded-l"
                    >
                      <Icon icon={MinusOutline} type='text' size={16} className="text-[var(--color-gray)]" />
                    </button>
                    <span className="px-3 py-1 text-sm">{product.quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(product.quantity + 1)}
                      className="p-1 hover:bg-gray-50 rounded-r"
                    >
                     <Icon icon={PlusOutlineIcon} type='text' size={16} className="text-[var(--color-gray)]" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Size & Quantity - Desktop */}
              <div className="hidden lg:flex items-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[var(--color-gray)]">Size</span>
                  <select className="text-sm border border-[var(--color-light-gray)] rounded px-2 py-1 bg-white">
                    <option value={product.size}>{product.size}</option>
                  </select>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[var(--color-gray)]">Quantity</span>
                  <div className="flex items-center border border-[var(--color-light-gray)] rounded">
                    <button 
                      onClick={() => handleQuantityChange(product.quantity - 1)}
                      className="p-1 hover:bg-gray-50 rounded-l"
                    >
                      <Icon icon={MinusOutline} type='text' size={16} className="text-[var(--color-gray)]" />
                    </button>
                    <span className="px-3 py-1 text-sm">{product.quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(product.quantity + 1)}
                      className="p-1 hover:bg-gray-50 rounded-r"
                    >
                      <Icon icon={PlusOutlineIcon} type='text' size={16} className="text-[var(--color-gray)]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Price & Actions */}
            <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-4">
              <div className="text-right">
                <p className="h4 text-[var(--color-blue)] font-semibold">
                  ${product.price.toFixed(2)}
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onMoveToWishlist?.(product.id)}
                  className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
                  title="Move to wishlist"
                >
                  <Icon icon={HeartOutline} type='text' size={20} className="text-[var(--color-gray)]" />
                </button>
                
                <button
                  onClick={() => onRemove?.(product.id)}
                  className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                  title="Remove from cart"
                >
                  <Icon icon={TrashOutline} type='text' size={20} className="text-[var(--color-gray)] hover:text-red-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;