'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavLink({
  href,
  children,
  activeClassName = "active",
  nonActiveClassName = "",
}) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`${isActive ? activeClassName : nonActiveClassName} text-black`}
    >
      {children}
    </Link>
  );
}
