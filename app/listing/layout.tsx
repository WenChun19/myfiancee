import React from "react";
import { listing_menus } from "../libs/data";
import Link from "next/link";

interface ListingLayoutProps {
  children: React.ReactNode;
}

const ListingLayout: React.FC<ListingLayoutProps> = ({ children }) => {
  return (
    <section className="md:grid md:grid-cols-5 flex flex-col">
      <nav className="flex md:flex-col gap-3 col-span-1 md:justify-center items-center md:p-2 p-4">
        {listing_menus.map((menu, index) => (
          <Link
            className="border-blue-200 p-3 rounded-lg border-b-4"
            key={menu.title}
            href={menu.href}
          >
            {menu.title}
          </Link>
        ))}
      </nav>
      <div className="m-3 col-span-4">{children}</div>
    </section>
  );
};

export default ListingLayout;
