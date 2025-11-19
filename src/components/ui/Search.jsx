"use client";

import InputField from "./InputField";
import search from "@/assets/icons/fill/SearchFill";
import { useProducts } from "@/hooks/useProducts";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Search = ({ isOpen, onClose }) => {
  const [initialProducts, setInitialProducts] = useState([]);
  const { products, isProductsLoading, productsError } = useProducts();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (!searchQuery) {
      setFilteredProducts([]);
      return;
    }

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [products, searchQuery]);

  const productsToShow =
    filteredProducts.length > 0 ? filteredProducts : initialProducts;

  useEffect(() => {
    if (products?.length) {
      setInitialProducts(products.slice(0, 8));
    }

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [products, isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose}></div>

      <div className="fixed z-50 bg-natural-light top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 w-full h-full lg:w-[70%] lg:h-[90%] flex flex-col rounded-2xl">
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
            className="w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {isProductsLoading && <div>Loading...</div>}
        {productsError && <div>Error loading products</div>}

        <div className="lg:p-8 p-4 overflow-y-auto flex-1">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
            {productsToShow.map((product) => (
              <Link
                href={`/product/${product.slug}`}
                className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition"
              >
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="rounded-md m-auto"
                />
                <div className="mt-2">
                  <p className="text-sm font-medium">{product.title}</p>
                  <p className="text-gray-500 text-sm">
                    ${product.sale_price || product.regular_price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
