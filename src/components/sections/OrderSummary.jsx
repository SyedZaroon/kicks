import React from 'react';
import Button from '@/components/ui/Button';

const OrderSummary = ({
  items = [],
  delivery = 6.99,
  tax = 0,
  className = "",
  onCheckout
}) => {
  // Calculate subtotal
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal + delivery + tax;
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className={`bg-white rounded-lg p-4 lg:p-6 ${className}`}>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="h3 text-[var(--color-dark-gray)] mb-2">
            Order Summary
          </h2>
        </div>

        {/* Item Count and Subtotal */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[var(--color-gray)] font-medium">
              {itemCount} ITEM{itemCount !== 1 ? 'S' : ''}
            </span>
            <span className="text-[var(--color-dark-gray)] font-semibold">
              ${subtotal.toFixed(2)}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[var(--color-gray)] font-medium">
              Delivery
            </span>
            <span className="text-[var(--color-dark-gray)] font-semibold">
              ${delivery.toFixed(2)}
            </span>
          </div>

          {tax > 0 && (
            <div className="flex items-center justify-between">
              <span className="text-[var(--color-gray)] font-medium">
                Sales Tax
              </span>
              <span className="text-[var(--color-dark-gray)] font-semibold">
                ${tax.toFixed(2)}
              </span>
            </div>
          )}

          {tax === 0 && (
            <div className="flex items-center justify-between">
              <span className="text-[var(--color-gray)] font-medium">
                Sales Tax
              </span>
              <span className="text-[var(--color-dark-gray)] font-semibold">
                -
              </span>
            </div>
          )}
        </div>

        {/* Divider */}
        <hr className="border-[var(--color-light-gray)]" />

        {/* Total */}
        <div className="flex items-center justify-between">
          <span className="h4 text-[var(--color-dark-gray)] font-semibold">
            Total
          </span>
          <span className="h4 text-[var(--color-dark-gray)] font-bold">
            ${total.toFixed(2)}
          </span>
        </div>

        {/* Checkout Button */}
        <div className="w-full">
          <Button
            onClick={onCheckout}
            className="w-full justify-center"
            state="primary"
          >
            CHECKOUT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;