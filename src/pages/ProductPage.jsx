"use client";

import ProductImagesSlider from "@/components/sliders/ProductImagesSlider";
import FeatureProducts from "@/components/sections/FeatureProducts";
import VariantPicker from "@/components/sections/VariantPicker";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import QuantitySelector from "@/components/ui/QuantitySelector";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductPage({ product }) {
  // Quantity Selector
  const [qty, setQty] = useState(1);

  // Variant Picker
  const [selectedVariant, setSelectedVariant] = useState({});

  // PRICE STATE
  const [finalPrice, setFinalPrice] = useState(
    product.sale_price || product.regular_price
  );

  // Enable btn only if all variants selected
  const btnDisabled = Object.values(selectedVariant).length !== 3;

  // ---------- FIXED PRICE CALCULATION ----------
  useEffect(() => {
    const basePrice = product.sale_price || product.regular_price;
    setFinalPrice(basePrice * qty);
  }, [qty, product.sale_price, product.regular_price]);

  // ---------- ADD TO CART ----------
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const basePrice = product.sale_price || product.regular_price;

    cart.push({
      id: product.id,
      title: product.title,
      price: basePrice, // single item price
      total: basePrice * qty, // total price for qty
      qty,
      variants: selectedVariant,
      image: product.images[0],
      stock: product.stock,
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  };

  return (
    <>
      <section className="section-margin lg:my-8 my-6">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8">
          <div className="lg:sticky lg:top-8 self-start">
            <ProductImagesSlider images={product.images} />
          </div>

          {/* PRODUCT INFO */}
          <div className="flex flex-col justify-start">
            {product.tags.slice(0, 1).map((tag) => (
              <div className="w-[20%]" key={tag}>
                <Badge>{tag}</Badge>
              </div>
            ))}

            <h5 className="h5 uppercase mt-4">
              category: <span className="ml-2">{product.category}</span>
            </h5>

            <h2 className="h3 mt-4">{product.title}</h2>

            {/* PRICE SECTION */}

            {Object.values(selectedVariant).length === 3 && (
              <div className="flex items-center gap-2">
                <p className="mt-2 text-blue h5">${finalPrice}</p>

                {product.sale_price && (
                  <p className="mt-2 text-error h5 line-through">
                    ${product.regular_price}
                  </p>
                )}
              </div>
            )}

            {/* VARIANTS */}
            <div className="mt-6">
              <VariantPicker
                variants={product.variants}
                selectedVariant={selectedVariant}
                setSelectedVariant={setSelectedVariant}
              />
            </div>

            {/* QTY */}
            <div className="mb-4">
              <QuantitySelector
                stock={product.stock}
                qty={qty}
                setQty={setQty}
              />
            </div>

            <h5 className="h5 uppercase mb-4">
              Stock: <span className="ml-2">{product.stock}</span>
            </h5>

            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* BUY NOW */}
            <Link href="/checkout">
              <Button
                className="w-full mt-4 justify-center"
                state="secondary"
                disabled={btnDisabled}
              >
                Buy Now
              </Button>
            </Link>

            <Link href="/cart">
              <Button
                className="w-full mt-4 justify-center"
                disabled={btnDisabled}
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURE PRODUCTS */}
      {!!product.id && (
        <section className="section-margin py-8">
          <FeatureProducts
            title="You may also like"
            button={false}
            titleClass="h2"
          />
        </section>
      )}
    </>
  );
}
