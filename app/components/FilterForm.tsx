"use client";

import React, { useRef } from "react";
import Button from "./Button";
import { HiMagnifyingGlass } from "react-icons/hi2";
import FilterModal from "./FilterModal";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const FilterForm = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onSearch = () => {
    const input = inputRef?.current?.value ?? "";
    const params = new URLSearchParams(searchParams);

    if (input) {
      params.set("search", input);
    } else {
      params.delete("search");
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-center justify-center">
      <input
        ref={inputRef}
        className="max-w-40 border-2 p-1 rounded-l-md
        border-slate-400 text-sm leading-6"
        type="text"
      />
      <Button
        className="border-slate-400
        rounded-l-none mr-3"
        icon={HiMagnifyingGlass}
        onClick={onSearch}
      />
      <FilterModal />
    </div>
  );
};

export default FilterForm;
