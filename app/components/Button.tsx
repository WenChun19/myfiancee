"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { IconType } from "react-icons";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
  icon?: IconType;
  title?: string;
  className?: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  icon: Icon,
  title,
  className,
  href,
  outline,
  onClick,
}: ButtonProps) => {
  const router = useRouter();

  const redirect = () => {
    if (href) {
      router.push(href);
    }
  };

  return (
    <button
      className={`p-2 border-2 rounded-lg 
       text-sm 
      ${
        outline
          ? "text-slate-500 bg-slate-50 border-slate-400"
          : "bg-slate-400 text-slate-50"
      } 
       ${className}`}
      onClick={onClick ?? redirect}
    >
      {title}
      {Icon && <Icon size={16} />}
    </button>
  );
};

export default Button;
