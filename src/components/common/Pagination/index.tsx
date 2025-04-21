"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  currentPage: number;
  totalPages: number;
  basePath?: string;
};

const Pagination = ({
  currentPage,
  totalPages,
  basePath = "/sermons",
}: Props) => {
  const [inputPage, setInputPage] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`${basePath}?${params.toString()}`, { scroll: false });
  };

  const generatePageNumbers = () => {
    const pages = [];
    const maxDisplayed = 7;
    const showLeftEllipsis = currentPage > 4;
    const showRightEllipsis = currentPage < totalPages - 3;

    if (totalPages <= maxDisplayed) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (showLeftEllipsis) pages.push("...");
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (showRightEllipsis) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  const handleGo = () => {
    const page = parseInt(inputPage, 10);
    if (!isNaN(page) && page >= 1 && page <= totalPages) {
      handlePageChange(page);
      setInputPage("");
    }
  };

  return (
    <div className="flex items-center justify-between mt-6 gap-4 flex-wrap">
      <div className="flex items-center gap-1">
        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          &lt; Back
        </button>

        {generatePageNumbers().map((page, i) =>
          page === "..." ? (
            <span key={i} className="px-3 py-1">
              ...
            </span>
          ) : (
            <button
              key={i}
              className={`px-3 py-1 border rounded ${
                page === currentPage ? "bg-black text-white" : ""
              }`}
              onClick={() => handlePageChange(Number(page))}
            >
              {page}
            </button>
          )
        )}

        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next &gt;
        </button>
      </div>

      <div className="flex items-center gap-2">
        <span>Page</span>
        <input
          type="number"
          className="border rounded px-2 py-1 w-16"
          value={inputPage}
          onChange={(e) => setInputPage(e.target.value)}
        />
        <button className="px-3 py-1 border rounded" onClick={handleGo}>
          Go
        </button>
      </div>
    </div>
  );
};

export default Pagination;
