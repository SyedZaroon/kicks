"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../assets/images/logo.png";
import Icon from "../../components/ui/Icon";
import SearchFill from "../../assets/icons/fill/SearchFill";
import UserFill from "../../assets/icons/fill/UserFill";
import BarsFill from "../../assets/icons/fill/BarsFill";
import Search from "../ui/Search";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="section-margin bg-natural-light  rounded-3xl p-4 lg:p-8 flex justify-between items-center">
        <nav className="lg:flex lg:gap-[40px] gap-[15px] h6 hidden">
          <Link href="/">New Drops</Link>
          <Link href="/product/men">Men</Link>
          <Link href="/product/women">Women</Link>
        </nav>

        <div className="lg:hidden flex md:gap-[15px] gap-1">
          <Icon
            icon={BarsFill}
            type="text"
            size={28}
            className="cursor-pointer"
          />
          <Icon
            icon={SearchFill}
            type="text"
            size={28}
            onClick={() => setIsOpen(true)}
            className="cursor-pointer"
          />
        </div>

        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            className="lg:w-[128px] lg:h-[32px] w-[80px] h-[20px]"
          />
        </Link>

        <ul className="flex lg:gap-[40px] items-center md:gap-[15px] gap-1 font-rubik text-sm font-semibold">
          <li className="lg:block hidden ">
            <Icon
              icon={SearchFill}
              type="text"
              size={28}
              onClick={() => setIsOpen(true)}
              className="cursor-pointer"
            />
          </li>
          <li>
            <Icon
              icon={UserFill}
              type="text"
              size={28}
              className="cursor-pointer"
            />
          </li>
          <li className="flex justify-center items-center bg-yellow rounded-full md:w-[32px] md:h-[32px] w-[30px] h-[30px]">
            <span>0</span>
          </li>
        </ul>
      </div>

      <Search isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Header;
