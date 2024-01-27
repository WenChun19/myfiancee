"use client";

import { HiBars3, HiMiniXMark } from "react-icons/hi2";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";
import { menus } from "../libs/data";
import { useState } from "react";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="sm:hidden flex items-center text-xl">
        <HiBars3 className="cursor-pointer" onClick={() => setOpen(true)} />
      </div>
      <div
        className={`absolute top-0 right-0 w-1/2 h-full
       bg-gray-100 z-50 transition rounded-sm ${
         open ? "flex" : "hidden"
       } flex-col dark:bg-slate-800
       p-3 pl-9 pt-7`}
      >
        <div className="flex justify-between items-center mb-2">
          <ThemeSwitch />
          <HiMiniXMark
            className="text-xl cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>
        <nav className="flex flex-col gap-3 mt-4 text-sm">
          {menus.map((menu, index) => (
            <div key={index}>
              <Link className="mr-2" key={menu.title} href={menu.href}>
                {menu.title}
              </Link>
              <hr className="w-3/4" key={index} />
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default BurgerMenu;
