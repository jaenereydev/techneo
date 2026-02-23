import Logo from "@/components/Helper/Logo";
import { NAVLINK } from "@/constant/constant";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="h-[12vh] relative z-10 lg:mt-8">
      <div className="grid grid-cols-3 items-center h-full w-[90%] xl:w-[80%] mx-auto">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Center: Links for large screen */}
        <div className="hidden lg:flex justify-center items-center h-[10vh] px-10 space-x-10">
          {NAVLINK.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="
                text-black 
                hover:text-blue-500 
                transition-all 
                duration-300 
                items-center 
                flex 
                h-full 
                border-b-2 
                border-transparent 
                hover:border-blue-500"
            >
              <p>{link.label}</p>
            </Link>
          ))}
        </div>

        {/* Right: slot for actions (empty for now) */}
        <div className="flex justify-end items-center"></div>
      </div>
    </div>
  );
};

export default Nav;
