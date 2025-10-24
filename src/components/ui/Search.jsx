"use client";

import { useEffect, useRef, useState } from "react";
import InputField from "./InputField";
import search from "@/assets/icons/fill/SearchFill";
import { productData } from "@/data/productData";
import Image from "next/image";

const Search = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const modalRef = useRef(null);
  const inputRef = useRef(null);

  // ✅ Close popup on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  //  Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);


  if (!isOpen) return null;

  const filteredProducts = productData.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-40"></div>

      {/* Modal */}
      <div
        ref={modalRef}
        className="fixed z-50 bg-natural-light top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 w-full h-full lg:w-[70%] lg:h-[90%] flex flex-col rounded-2xl"
      >
        {/* Header + Search Input (Fixed Top) */}
        <div className="lg:p-8 p-4 bg-white sticky top-0 z-10 rounded-2xl ">
          <div className="flex justify-between items-center mb-4">
            <h2 className="h4 font-semibold">Search Products...</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-xl"
            >
              ✕
            </button>
          </div>

          <InputField
            leftIcon={search}
            placeholder="Search..."
            type="text"
            name="search"
            id="search"
            inputRef={inputRef}
            className="w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Scrollable product list */}
        <div className="lg:p-8 p-4 overflow-y-auto flex-1">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.productId}
                  className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition"
                >
                  <Image
                    src={product.productImage}
                    alt={product.productName}
                    width={200}
                    height={200}
                    className="rounded-md m-auto"
                  />
                  <div className="mt-2">
                    <p className="text-sm font-medium">{product.productName}</p>
                    <p className="text-gray-500 text-sm">
                      ${product.productPrice}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-sm mt-4">
                No products found matching “{searchQuery}”
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
