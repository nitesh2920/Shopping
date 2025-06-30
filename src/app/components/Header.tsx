import React from "react";
import Links from "./ui/Links";
import Bag from "../icons/bag";
import { Heart } from "../icons/heart";
import User from "../icons/user";
const Header = () => {
  return (
    <header
      className="bg-[#EFF5E1] px-4 md:px-8 lg:px-16 py-5 relative "
    >
      <div className="flex items-center justify-between">
        <div className="text-[#2D3B36] md:text-2xl font-bold text-xl capitalize">
          skincare
        </div>

        <nav className="hidden sm:flex items-center space-x-8">
          <Links>Product</Links>
          <Links>about</Links>
          <Links>contact</Links>
          <Links>blog</Links>
        </nav>

        <div className="flex shrink ">
          <button className=" flex  place-items-center p-2 text-[#2D3B36] hover:bg-[#EFF5E1] rounded-full transition-colors">
            <Bag />
            <span className="hidden md:block">cart(2)</span>
          </button>

          <button className="text-[#2D3B36] p-2 hover:bg-[#EFF5E1] rounded-full transition-colors">
            <Heart />
          </button>

          <button className="p-2 hover:bg-[#EFF5E1] rounded-full transition-colors">
            <User />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
