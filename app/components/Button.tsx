"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  className?: string;
  href?: string;
}

const Button = ({ title, className, href }: ButtonProps) => {
  const router = useRouter();

  const redirect = () => {
    if (href) {
      router.push(href);
    }
  };

  return (
    <button
      className={`p-2 border-2 rounded-lg 
       text-sm bg-slate-400 text-slate-50 ${className}`}
      onClick={redirect}
    >
      {title}
    </button>
  );
};

export default Button;
