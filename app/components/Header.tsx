"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { Urbanist } from "next/font/google";
import BurgerMenu from "./BurgerMenu";
import Login from "./Login";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["500"] });

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
        <div
          className={`hidden sm:flex items-center 
          text-slate-600 justify-around ${urbanist.className}`}
        >
          <Link className="mr-2" key="Dashboard" href={"/dashboard"}>
            Dashboard
          </Link>
          <Link className="mr-2" key="Listing" href={"/listing/investment"}>
            Listing
          </Link>
          <Link className="mr-2" key="Portfolio" href={"/portfolio"}>
            Portfolio
          </Link>
          <Login />
          <div className="flex items-center ml-3">
            <ThemeSwitch />
          </div>
        </div>
        <BurgerMenu />
      </div>
    </nav>
  );
};

export default Header;
