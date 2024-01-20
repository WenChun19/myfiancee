import React from "react";
import { dashboard_menus } from "../libs/data";
import Link from "next/link";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <section className="grid grid-cols-5">
      <nav className="flex flex-col col-span-1 justify-center items-center p-2">
        {dashboard_menus.map((menu, index) => (
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

  return children;
};

export default DashboardLayout;
