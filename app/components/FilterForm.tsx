"use client";

import React from "react";
import Button from "./Button";
import { HiMagnifyingGlass } from "react-icons/hi2";

const FilterForm = () => {
  return (
    <div className="relative flex items-center justify-center">
      <input
        className="max-w-40 border-2 p-1 rounded-l-md
        border-slate-400 text-sm leading-6"
        type="text"
      />
      <Button
        className="absolute -right-8 border-slate-400
        rounded-l-none"
        icon={HiMagnifyingGlass}
      />
    </div>
  );
};

export default FilterForm;
