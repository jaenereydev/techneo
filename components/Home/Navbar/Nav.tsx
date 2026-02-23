import Logo from "@/components/Helper/Logo";
import { NAVLINK } from "@/constant/constant";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="h-[12vh] relative z-10 lg:mt-8">
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <Logo />
        {/* Links for large screen*/}
        <div className="hidden lg:flex items-center bg-white h-[10vh] md:pl-4 space-x-10">
          {NAVLINK.map((link) => (
            <Link 
                key={link.id} 
                href={link.url} 
                className="text-black hover:text-blue-500 transition duration-300">
                  <p>{link.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;
