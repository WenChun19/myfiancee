"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { HiArrowLeft } from "react-icons/hi2";

const GoBack = () => {
  const router = useRouter();
  return (
    <HiArrowLeft
      className="text-xl cursor-pointer"
      onClick={() => router.back()}
    />
  );
};

export default GoBack;
