"use client";
import React, { useEffect, useState } from "react";
import CheckBox from "../ui/CheckBox";
import PriceRangeSlider from "../ui/PriceRange";
import { useRouter, usePathname } from "next/navigation";
import CloseOutlineIcon from "@/assets/icons/outline/CloseOutline";
import Button from "../ui/Button";

const ProductFilterContent = ({ products }) => {
  if (!products || products.length === 0) return null;

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

  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

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
        <div className="mb-4">
          <h6 className="font-medium capitalize mb-2">Refine By</h6>
          <div>
            <Button
              className="text-white w-[26%] justify-between"
              iconclass="text-white"
              iconSize={12}
              rightIcon={CloseOutlineIcon}
              state="secondary"
            >
              Mens
            </Button>
          </div>
        </div>
        <div>
          {Object.entries(variantMap).map(([name, options]) => (
            <div key={name} className="mb-4">
              <h6 className="font-medium mb-2 capitalize">{name}</h6>
              <div
                className={`flex  flex-wrap ${
                  name !== "color" && name !== "size"
                    ? "flex-col gap-2"
                    : "gap-4"
                }`}
              >
                {[...options]
                  .sort((a, b) => {
                    const isNumA = !isNaN(a);
                    const isNumB = !isNaN(b);

                    if (isNumA && isNumB) {
                      return Number(a) - Number(b);
                    }

                    if (!isNumA && !isNumB) {
                      return a.toLowerCase().localeCompare(b.toLowerCase());
                    }
                  })
                  .map((option) => (
                    <CheckBox
                      key={option}
                      className="border border-gray-300 px-3 py-1 rounded hover:bg-gray-100 text-sm"
                      label={option}
                      value={option}
                      name={name}
                      onChange={(e) => {
                        const newQuery = {
                          ...currentQuery,
                          [name]: option,
                        };
                        const queryString = new URLSearchParams(
                          newQuery
                        ).toString();
                        router.push(`${pathname}?${queryString}`, {
                          scroll: false,
                        });
                      }}
                      disabled={false}
                      colorCode={name === "color" ? option : ""}
                      size={name === "size" ? option : ""}
                      type={name === "color" ? "color" : "default"}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
        <PriceRangeSlider minLimit={0} maxLimit={maxSalePrice} />
      </div>
    </>
  );
};

export default ProductFilterContent;
