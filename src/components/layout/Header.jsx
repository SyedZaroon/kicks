"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import Icon from "../../components/ui/Icon";
import SearchFill from "../../assets/icons/fill/SearchFill";
import UserFill from "../../assets/icons/fill/UserFill";
import BarsFill from "../../assets/icons/fill/BarsFill";
import Search from "../ui/Search";
import CloseOutline from "@/assets/icons/outline/CloseOutline";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [cartcount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      const count = storedCart.reduce((total, item) => total + item.qty, 0);
      setCartCount(count);
    };

    updateCartCount();

    window.addEventListener("cart-updated", updateCartCount);

    return () => {
      window.removeEventListener("cart-updated", updateCartCount);
    };
  }, []);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [sidebarOpen]);

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      <div className="section-margin bg-natural-light  rounded-3xl p-4 lg:p-8 flex justify-between items-center">
        <nav className="lg:flex lg:gap-[40px] gap-[15px] h6 hidden">
          <Link href="/">Home</Link>
          <Link href="/collection/men">Men</Link>
          <Link href="/collection/women">Women</Link>
          <Link href="/collection/all">All Products</Link>
        </nav>

        <div
          className={`bg-white w-[300px] h-[100vh] fixed z-60 flex justify-between items-start p-4  ${
            sidebarOpen ? "left-0" : "-left-[300px]"
          } top-0`}
        >
          <nav className="flex flex-col gap-4 ">
            <Link onClick={() => setSidebarOpen(false)} href="/">
              Home
            </Link>
            <Link onClick={() => setSidebarOpen(false)} href="/collection/men">
              Men
            </Link>
            <Link
              onClick={() => setSidebarOpen(false)}
              href="/collection/women"
            >
              Women
            </Link>
            <Link onClick={() => setSidebarOpen(false)} href="/collection/all">
              All Products
            </Link>
          </nav>

          <div className="cursor-pointer" onClick={() => setSidebarOpen(false)}>
            <Icon icon={CloseOutline} type="text" size={20} />
          </div>
        </div>

        <div className="lg:hidden flex md:gap-[15px] gap-1">
          <div onClick={() => setSidebarOpen(true)}>
            <Icon
              icon={BarsFill}
              type="text"
              size={28}
              className="cursor-pointer"
            />
          </div>
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
          <Link
            href="/cart"
            className="flex justify-center items-center bg-yellow rounded-full md:w-[32px] md:h-[32px] w-[30px] h-[30px]"
          >
            <span>{cartcount}</span>
          </Link>
        </ul>
      </div>

      <Search isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Header;
