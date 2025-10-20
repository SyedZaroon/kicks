"use client";
import React, { useState } from "react";
import CartItem from "@/components/sections/CartItem";
import OrderSummary from "@/components/sections/OrderSummary";
import PromoCode from "@/components/ui/PromoCode";
import Button from "@/components/ui/Button";

// Sample cart data - in a real app, this would come from context/state management
const initialCartItems = [
  {
    id: 1,
    name: "DROPSET TRAINER SHOES",
    subtitle: "Men's Road Running Shoes",
    color: "Enamel Blue/ University White",
    size: "10",
    price: 130.0,
    image: "/api/placeholder/120/120",
    quantity: 1,
  },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState(null);
  const [discount, setDiscount] = useState(0);

  // Handle quantity updates
  const handleUpdateQuantity = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Handle item removal
  const handleRemoveItem = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  // Handle move to wishlist (placeholder)
  const handleMoveToWishlist = (productId) => {
    // In a real app, this would move the item to wishlist
    console.log("Moving item to wishlist:", productId);
    handleRemoveItem(productId);
  };

  // Handle promo code application
  const handleApplyPromoCode = async (code) => {
    // Simulate API call for promo code validation
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Mock promo codes
        const validCodes = {
          SAVE10: 10,
          WELCOME20: 20,
          STUDENT15: 15,
        };

        if (validCodes[code]) {
          setPromoCode(code);
          setDiscount(validCodes[code]);
          resolve();
        } else {
          reject(new Error("Invalid promo code"));
        }
      }, 1000);
    });
  };

  // Handle checkout
  const handleCheckout = () => {
    console.log("Proceeding to checkout...");
    // In a real app, this would redirect to checkout page
  };

  // Calculate if cart is empty
  const isEmpty = cartItems.length === 0;

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      {/* Hero Section */}
      <div className="bg-[var(--color-light-gray)] py-8 lg:py-12">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
              <p className="text-sm text-[var(--color-gray)] mb-2">
                Enjoy up to 60% off thousands of styles during the End of Year
                sale - while supplies last. No code needed.
              </p>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <h1 className="h2 text-[var(--color-dark-gray)]">
                  Saving to celebrate
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-padding py-8 lg:py-12">
        <div className="max-w-6xl mx-auto">
          {isEmpty ? (
            // Empty Cart State
            <div className="text-center py-16">
              <div className="bg-white rounded-lg p-8 lg:p-12 max-w-md mx-auto">
                <h2 className="h2 text-[var(--color-dark-gray)] mb-4">
                  Your cart is empty
                </h2>
                <p className="text-[var(--color-gray)] mb-6">
                  Add some items to get started
                </p>
                <Button
                  onClick={() => (window.location.href = "/")}
                  state="primary"
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          ) : (
            // Cart with items
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Cart Items Section - Left Side */}
              <div className="lg:col-span-8">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <h2 className="h2 text-[var(--color-dark-gray)]">
                      Your Bag
                    </h2>
                  </div>

                  <p className="text-[var(--color-gray)] text-sm">
                    Items in your bag not reserved- check out now to make them
                    yours.
                  </p>

                  {/* Cart Items */}
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <CartItem
                        key={item.id}
                        product={item}
                        onUpdateQuantity={handleUpdateQuantity}
                        onRemove={handleRemoveItem}
                        onMoveToWishlist={handleMoveToWishlist}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Order Summary Section - Right Side */}
              <div className="lg:col-span-4">
                <div className="space-y-6 lg:sticky lg:top-8">
                  {/* Order Summary */}
                  <OrderSummary
                    items={cartItems}
                    delivery={6.99}
                    tax={0}
                    onCheckout={handleCheckout}
                  />

                  {/* Promo Code */}
                  <div className="bg-white rounded-lg p-4 lg:p-6">
                    <PromoCode
                      onApply={handleApplyPromoCode}
                      appliedCode={promoCode}
                      discount={discount}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
