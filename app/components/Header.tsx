import Image from "next/image";
import Link from "next/link";
import React from "react";
import { menus } from "../lib/data";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <nav
      className="p-3 md:p-6
     rounded-sm bg-slate-300"
    >
      <div className="flex justify-between">
        <Link href="/">
          <span>
            <Image src="" width={30} height={30} alt="logo" />
          </span>
        </Link>
        <div className="flex justify-around">
          <>
            {menus.map((menu) => (
              <Link className="mr-2" key={menu.title} href={menu.href}>
                {menu.title}
              </Link>
            ))}
          </>
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Header;
