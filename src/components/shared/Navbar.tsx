import React from "react";
import NavLink from "@/components/shared/NavLink";
import Link from "next/link";
import ZapShiftLogo from "./Zap-Shift-Logo/ZapShiftLogo";
export default function Navbar() {
  const navItems = (
    <>
      <div className="flex gap-0.5">
        <li>{<NavLink href={'/'} activeClassName="text-blue-500 font-bold">Home</NavLink>}</li>
      <li>{<NavLink href={'/about'} activeClassName="text-blue-500 font-bold">About</NavLink>}</li>
      </div>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        
          <Link href={'/'}><><ZapShiftLogo /></></Link>
       
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
}
