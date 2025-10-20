"use client";
import { useState } from "react";
import ProductFilterContent from "../sections/ProductFilterContent";

const ProductFilter = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {/* ✅ Desktop sidebar */}
      <div className="lg:flex hidden w-64">
        <ProductFilterContent />
      </div>

      {/* ✅ Mobile filter button */}
      <div className="lg:hidden flex">
        <button
          className="px-4 py-2 border rounded-md text-sm font-medium"
          onClick={() => setShowSidebar(true)}
        >
          Show Filters
        </button>
      </div>

      {/* ✅ Mobile sidebar overlay */}
      {showSidebar && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
          <div className="bg-white w-80 h-full p-4 shadow-lg overflow-y-auto">
            <div className="flex justify-end items-center mb-4">
              <button
                className="text-sm text-gray-500"
                onClick={() => setShowSidebar(false)}
              >
                ✕
              </button>
            </div>
            <ProductFilterContent />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductFilter;
