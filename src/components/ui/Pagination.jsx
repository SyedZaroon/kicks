"use client";
import { useRouter } from "next/navigation";
import Button from "./Button";
import { useState, useEffect } from "react";

const Pagination = ({ totalCount, limit, currentPage, basePath }) => {
  const router = useRouter();
  const totalPages = Math.ceil(totalCount / limit);

  const [pageNumber, setPageNumber] = useState(currentPage);

  useEffect(() => {
    handlePageChange(pageNumber);
  }, [pageNumber]);

  const handlePageChange = (page) => {
    router.push(`${basePath}?_page=${page}&_limit=${limit}`, { scroll: false });
  };

  const handlePrev = () => {
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
  };

  const handleNext = () => {
    if (pageNumber < totalPages) setPageNumber(pageNumber + 1);
  };


  return (
    <div className="flex justify-center items-center gap-4 mt-4">
      <Button
        className={`w-32 justify-center ${pageNumber === 1 ? "hover:!outline-0" : ""}`}
        onClick={handlePrev}
        disabled={pageNumber === 1}
      >
        Prev
      </Button>

      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) =>(
            <Button
              key={page}
              onClick={() => setPageNumber(page)}
              className={`w-12 justify-center ${
                pageNumber === page ? "bg-white !text-black shadow-amber-50" : ""
              }`}
            >
              {page}
            </Button>
          ))}
      </div>

      <Button
        className={`w-32 justify-center ${pageNumber === totalPages ? "hover:!outline-0":""}`}
        onClick={handleNext}
        disabled={pageNumber === totalPages}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
