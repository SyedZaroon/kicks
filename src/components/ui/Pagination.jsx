"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "./Button";
import { useState, useEffect } from "react";

const Pagination = ({ totalCount, limit, currentPage, basePath, products }) => {
  if (!products || products.length === 0) return null;

  const router = useRouter();
  const searchParams = useSearchParams(); // ✅ NEW

  const totalPages = Math.ceil(totalCount / limit);
  const [pageNumber, setPageNumber] = useState(currentPage);

  useEffect(() => {
    handlePageChange(pageNumber);
  }, [pageNumber]);

  const handlePageChange = (page) => {
    const params = new URLSearchParams(searchParams); // ✅ existing filters get
    params.set("_page", page); // update just page
    params.set("_limit", limit); // update limit (optional)

    router.push(`${basePath}?${params.toString()}`, { scroll: false }); // 🔥 ALL FILTERS SAFE
  };

  const handlePrev = () => {
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
  };

  const handleNext = () => {
    if (pageNumber < totalPages) setPageNumber(pageNumber + 1);
  };

  // 🔹 Smart pagination logic
  const getVisiblePages = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (pageNumber <= 3) {
      return [1, 2, 3, "...", totalPages];
    }

    if (pageNumber >= totalPages - 2) {
      return [1, "...", totalPages - 2, totalPages - 1, totalPages];
    }

    return [
      1,
      "...",
      pageNumber - 1,
      pageNumber,
      pageNumber + 1,
      "...",
      totalPages,
    ];
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex justify-center items-center gap-4 mt-4">
      <Button
        className={`w-32 justify-center ${
          pageNumber === 1 ? "hover:!outline-0" : ""
        }`}
        onClick={handlePrev}
        disabled={pageNumber === 1}
      >
        Prev
      </Button>

      <div className="flex items-center gap-2">
        {visiblePages.map((page, i) =>
          page === "..." ? (
            <span key={`dots-${i}`} className="text-gray-400 px-2">
              ...
            </span>
          ) : (
            <Button
              key={page}
              onClick={() => setPageNumber(page)}
              className={`w-12 justify-center ${
                pageNumber === page
                  ? "bg-white !text-black shadow-amber-50"
                  : ""
              }`}
            >
              {page}
            </Button>
          )
        )}
      </div>

      <Button
        className={`w-32 justify-center ${
          pageNumber === totalPages ? "hover:!outline-0" : ""
        }`}
        onClick={handleNext}
        disabled={pageNumber === totalPages}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
