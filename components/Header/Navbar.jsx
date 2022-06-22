import React from "react";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="rounded-div sticky inset-x-0 top-0 z-20 flex items-center
    justify-between bg-white py-2 px-2 shadow-lg sm:py-3 sm:px-8">
      <Link href="/">
        Praedium
      </Link>
      <div>
        <ThemeToggle />
      </div>
      <div>
        <Link href="/">Sig In</Link>
        <Link href="/">Sig In</Link>
      </div>

      <div>
        <AiOutlineClose />
      </div>
    </div>
  );
};

export default Navbar;
