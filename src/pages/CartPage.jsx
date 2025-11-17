"use client";
import { useState, useEffect } from "react";
import CartItem from "@/components/sections/CartItem";
import OrderSummary from "@/components/sections/OrderSummary";
import PromoCode from "@/components/ui/PromoCode";
import Button from "@/components/ui/Button";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart on page load
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);

  // Save cart when changed
  const updateLocalStorage = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // remove item
  const removeItem = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
  };

  const updateQuantity = (productId, newQuantity, stock) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === productId) {
        let qty = newQuantity;

        if (qty > stock) {
          alert("You cannot add more than " + stock + " items");
          qty = stock;
        }
        if (qty < 1) qty = 1;

        return {
          ...item,
          qty,
          total: qty * item.price, // ✅ update product total price
        };
      }
      return item;
    });

    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
  };

  // Calculate if cart is empty
  const isEmpty = cartItems.length === 0;

  return (
    <div className="min-h-screen bg-bg">
      {/* Hero Section */}
      <div className="bg-light-gray py-8 lg:py-12">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
              <p className="text-sm text-gray mb-2">
                Enjoy up to 60% off thousands of styles during the End of Year
                sale - while supplies last. No code needed.
              </p>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <h1 className="h2 text-dark-gray">Saving to celebrate</h1>
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
                <h2 className="h2 text-dark-gray mb-4">Your cart is empty</h2>
                <p className="text-gray mb-6">Add some items to get started</p>
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
                    <h2 className="h2 text-dark-gray">Your Bag</h2>
                  </div>

                  <p className="text-gray text-sm">
                    Items in your bag not reserved- check out now to make them
                    yours.
                  </p>

                  {/* Cart Items */}
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <CartItem
                        key={item.id}
                        product={item}
                        onRemove={removeItem}
                        onUpdateQuantity={updateQuantity}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Order Summary Section - Right Side */}
              <div className="lg:col-span-4">
                <div className="space-y-6 lg:sticky lg:top-8">
                  {/* Order Summary */}
                  <OrderSummary items={cartItems} delivery={6.99} tax={0} />

                  {/* Promo Code */}
                  <div className="bg-white rounded-lg p-4 lg:p-6">
                    <PromoCode />
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
