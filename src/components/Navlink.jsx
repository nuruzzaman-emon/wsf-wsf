"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      className={isActive ? "text-white bg-accent font-bold" : ""}
      href={href}
    >
      {children}
    </Link>
  );
};

export default Navlink;
