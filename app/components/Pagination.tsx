"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

interface PaginationProps {
  totalPages: number;
  maxCol: number;
}

const Pagination: React.FC<PaginationProps> = ({ maxCol, totalPages }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const frame = Math.floor((currentPage - 1) / maxCol);

  const generatePageUrl = (pageNumber: number) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("page", pageNumber.toString());

    const url = `${pathname}?${newSearchParams.toString()}`;
    return url;
  };

  const navigatePage = (
    pace: "fast" | "arrow",
    direction: "left" | "right"
  ) => {
    let pageNumber = 1;

    if (pace === "fast") {
      const offset = direction === "left" ? frame - 1 : frame + 1;
      pageNumber = offset * maxCol + 1;
    } else if (pace === "arrow") {
      pageNumber = direction === "left" ? currentPage - 1 : currentPage + 1;
    }

    const url = generatePageUrl(pageNumber);
    router.replace(url);
  };

  const minRange = maxCol + 1;
  const maxRange = totalPages + 1 - maxCol;

  return (
    <div className="flex justify-end mr-3 h-5">
      <div className="flex justify-center items-center mt-2">
        {currentPage !== 1 && (
          <div
            className="border-r-2 
          border-slate-300 px-1 py-1"
          >
            <HiArrowLeft
              className="text-sm cursor-pointer"
              onClick={() => navigatePage("arrow", "left")}
            />
          </div>
        )}
        {totalPages - 2 <= maxCol ? (
          <>
            {Array.from(Array(totalPages), (e, i) => {
              return (
                <Link
                  key={i + 1}
                  className={`border-r-2 
          border-slate-300 px-2 
           ${i + 1 == currentPage ? "bg-slate-300" : ""}`}
                  href={generatePageUrl(i + 1)}
                >
                  {i + 1}
                </Link>
              );
            })}
          </>
        ) : (
          <>
            {currentPage < minRange ? (
              <>
                {Array.from(Array(maxCol), (e, i) => {
                  return (
                    <Link
                      key={i + 1}
                      className={`border-r-2 
                border-slate-300 px-2 
                 ${i + 1 == currentPage ? "bg-slate-300" : ""}`}
                      href={generatePageUrl(i + 1)}
                    >
                      {i + 1}
                    </Link>
                  );
                })}
                <div
                  className="border-r-2 
            border-slate-300 px-2 cursor-pointer"
                  onClick={() => navigatePage("fast", "right")}
                >
                  ...
                </div>
                <Link
                  key={totalPages}
                  className="border-r-2 
            border-slate-300 px-2"
                  href={generatePageUrl(totalPages)}
                >
                  {totalPages}
                </Link>
              </>
            ) : currentPage < maxRange ? (
              <>
                <Link
                  key={1}
                  className="border-r-2 
              border-slate-300 px-2"
                  href={generatePageUrl(1)}
                >
                  {1}
                </Link>
                <div
                  className="border-r-2 
             border-slate-300 px-2 cursor-pointer"
                  onClick={() => navigatePage("fast", "left")}
                >
                  ...
                </div>
                {Array.from(
                  Array(
                    maxRange - minRange > maxCol ? maxCol : maxRange - minRange
                  ),
                  (e, i) => {
                    const index = i + 1 + frame * maxCol;
                    return (
                      <Link
                        key={index}
                        className={`border-r-2 
                   border-slate-300 px-2
                    ${index == currentPage ? "bg-slate-300" : ""}`}
                        href={generatePageUrl(index)}
                      >
                        {index}
                      </Link>
                    );
                  }
                )}
                <div
                  className="border-r-2 
             border-slate-300 px-2 cursor-pointer"
                  onClick={() => navigatePage("fast", "right")}
                >
                  ...
                </div>
                <Link
                  key={totalPages}
                  className="border-r-2 
              border-slate-300 px-2"
                  href={generatePageUrl(totalPages)}
                >
                  {totalPages}
                </Link>
              </>
            ) : (
              <>
                <Link
                  key={1}
                  className="border-r-2 
                border-slate-300 px-2"
                  href={generatePageUrl(1)}
                >
                  {1}
                </Link>
                <div
                  className="border-r-2 
               border-slate-300 px-2 cursor-pointer"
                  onClick={() => navigatePage("fast", "left")}
                >
                  ...
                </div>
                {Array.from(Array(maxCol), (e, i) => {
                  return (
                    <Link
                      key={i + maxRange}
                      className={`border-r-2 
                   border-slate-300 px-2
                    ${i + maxRange == currentPage ? "bg-slate-300" : ""}`}
                      href={generatePageUrl(i + maxRange)}
                    >
                      {i + maxRange}
                    </Link>
                  );
                })}
              </>
            )}
          </>
        )}

        {currentPage !== totalPages && (
          <div className=" px-1 py-1">
            <HiArrowRight
              className="text-sm cursor-pointer"
              onClick={() => navigatePage("arrow", "right")}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Pagination;
