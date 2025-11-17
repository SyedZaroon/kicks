"use client";
import React, { useEffect, useState } from "react";
import CheckBox from "../ui/CheckBox";
import PriceRangeSlider from "../ui/PriceRange";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import CloseOutlineIcon from "@/assets/icons/outline/CloseOutline";

const ProductFilterContent = ({ products }) => {
  if (!products || products.length === 0) return null;

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const variantMap = {};
  const salePriceMap = new Set();

  products.forEach((product) => {
    salePriceMap.add(product.sale_price);
  });

  const salePriceArray = [...salePriceMap];
  const maxSalePrice = Math.max(...salePriceArray);

  products.forEach((product) => {
    Object.entries(product.variants).forEach(([name, options]) => {
      if (!variantMap[name]) variantMap[name] = new Set();
      options.forEach((opt) => variantMap[name].add(opt));
    });
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // Price Range

  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: maxSalePrice,
  });

  const [priceRangeChange, setPriceRangeChange] = useState(false);

  useEffect(() => {
    if (priceRange.min > 0 || priceRange.max < maxSalePrice) {
      setPriceRangeChange(true);
    }
  }, [priceRange]);

  // Selected Filters

  const [selectedFilters, setSelectedFilters] = useState({});

  const handleFilterChange = (name, value, checked) => {
    setSelectedFilters((prev) => {
      const currentValues = prev[name] || [];

      if (checked) {
        return {
          ...prev,
          [name]: [...currentValues, value],
        };
      } else {
        const updatedValues = currentValues.filter((v) => v !== value);
        const newFilters = { ...prev, [name]: updatedValues };

        if (updatedValues.length === 0) delete newFilters[name];

        return newFilters;
      }
    });
  };

  // Clear Filters

  const clearAllFilter = () => {
    setSelectedFilters({});
    setPriceRange({ min: 0, max: maxSalePrice });
    setPriceRangeChange(false);
  };

  const closeSelectedfilter = (key, value) => {
    setSelectedFilters((prev) => {
      const updated = { ...prev };
      updated[key] = prev[key].filter((v) => v !== value);

      if (updated[key].length === 0) {
        delete updated[key];
      }

      return updated;
    });
  };

  // Update URL Params

  useEffect(() => {
    const params = new URLSearchParams();

    Object.entries(selectedFilters).forEach(([key, values]) => {
      values.forEach((value) => {
        params.append(`variants.${key}_like`, value);
      });
    });

    if (priceRangeChange) {
      params.set("sale_price_gte", priceRange.min);
      params.set("sale_price_lte", priceRange.max);
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }, [selectedFilters, priceRange, priceRangeChange]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-40 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div
        className="fixed top-1/2 -translate-y-1/2 left-0 z-50 xl:hidden bg-white p-2 rounded-xs "
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          width="24px"
          height="24px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM7 5H4V19H7V5ZM20 5H9V19H20V5Z"></path>
        </svg>
      </div>

      <div
        className={`${
          isOpen
            ? "p-4 py-6 bg-white rounded-xl w-full fixed z-50 left-0 opacity-100 top-1/2 -translate-y-1/2 h-full overflow-scroll lg:w-1/2 block"
            : "-left-1/2 top-1/2 -translate-y-1/2 opacity-0 xl:block xl:left-0 xl:opacity-100 xl:top-0 xl:-translate-y-0 hidden"
        } transition-all duration-300`}
      >
        <div className="flex justify-between items-center mb-4">
          <h5 className="h5 uppercase">Filters</h5>
          <div className="xl:hidden" onClick={() => setIsOpen(false)}>
            <CloseOutlineIcon size={12} />
          </div>
        </div>
        {(Object.keys(selectedFilters).length > 0 || priceRangeChange) && (
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <h6 className="font-medium capitalize mb-2">Refine By</h6>
              <h6
                className="font-medium capitalize mb-2 cursor-pointer"
                onClick={clearAllFilter}
              >
                Clear All
              </h6>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {Object.entries(selectedFilters).map(([key, values]) =>
                values.map((value) => (
                  <div className="flex items-center gap-2 bg-gray-200 px-2 py-1 rounded-full text-sm">
                    <span>{value}</span>
                    <button
                      className="cursor-pointer"
                      onClick={() => closeSelectedfilter(key, value)}
                    >
                      ✕
                    </button>
                  </div>
                ))
              )}

              {priceRangeChange && (
                <div className="flex items-center gap-2 bg-gray-200 px-2 py-1 rounded-full text-sm">
                  <span>
                    Price: £{priceRange.min} - £{priceRange.max}
                  </span>
                  <button
                    className="cursor-pointer"
                    onClick={() => {
                      setPriceRange({ min: 0, max: maxSalePrice });
                      setPriceRangeChange(false);
                    }}
                  >
                    ✕
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        <div>
          {Object.entries(variantMap).map(([name, options]) => (
            <div key={name} className="mb-4">
              <h6 className="font-medium mb-2 capitalize">{name}</h6>

              <div
                className={`flex flex-wrap ${
                  name !== "color" && name !== "size"
                    ? "flex-col gap-2"
                    : "gap-4"
                }`}
              >
                {[...options]
                  .sort((a, b) => {
                    const isNumA = !isNaN(a);
                    const isNumB = !isNaN(b);
                    if (isNumA && isNumB) return Number(a) - Number(b);
                    if (!isNumA && !isNumB) return a.localeCompare(b);
                  })
                  .map((option) => {
                    const isChecked =
                      selectedFilters[name]?.includes(option) || false;

                    return (
                      <CheckBox
                        key={option}
                        label={option}
                        value={option}
                        name={name}
                        className="border border-gray-300 px-3 py-1 rounded hover:bg-gray-100 text-sm"
                        colorCode={name === "color" ? option : ""}
                        size={name === "size" ? option : ""}
                        type={name === "color" ? "color" : "default"}
                        checked={isChecked}
                        onChange={() =>
                          handleFilterChange(name, option, !isChecked)
                        }
                      />
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
        <PriceRangeSlider
          minLimit={0}
          maxLimit={maxSalePrice}
          setPriceRange={setPriceRange}
          priceRange={priceRange}
        />
      </div>
    </>
  );
};

export default ProductFilterContent;
