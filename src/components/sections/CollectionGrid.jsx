"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ProductCard from "../ui/ProductCard";
import { productData } from "../../data/productData";
import Button from "../ui/Button";
import ChevronForwordOutline from "@/assets/icons/outline/ChevronForwordOutline";

const CollectionGrid = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const productsPerPage = 9;
  const totalProducts = productData.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const initialPage = parseInt(searchParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);

  useEffect(() => {
    router.push(`?page=${currentPage}`, { scroll: false });
  }, [currentPage, router]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = productData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentProducts.map((item, index) => (
          <ProductCard
            key={index}
            productName={item.productName}
            productImage={item.productImage}
            productPrice={item.productPrice}
            badgeText={item.productBadge}
          />
        ))}
      </div>

      <div className="flex flex-wrap justify-center items-center gap-2 mt-6">
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          type="outline"
          state="primary"
          className="!text-[var(--color-dark-gray)]"
          leftIcon={ChevronForwordOutline}
        >
          Prev
        </Button>

        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <Button
              key={page}
              onClick={() => setCurrentPage(page)}
              type="outline"
              className="!text-[var(--color-dark-gray)]"
            >
              {page}
            </Button>
          );
        })}

        <Button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          type="outline"
          state="primary"
          rightIcon={ChevronForwordOutline}
          iconclass="rotate-180"
          className="!text-[var(--color-dark-gray)]"
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default CollectionGrid;
