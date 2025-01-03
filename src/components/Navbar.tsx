import React from "react";
import Link from "next/link";
import { Search, Heart, ShoppingCart, User } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="py-4 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo on the Left */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src="/images/furnirologo.png"
              alt="Logo"
              width={130}
              height={41}
            />
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
                <span className="text-2xl">&#9776;</span>
              </button>
            </SheetTrigger>

            <SheetContent side="right">
              <div className="flex flex-col items-center py-4 space-y-2">
                {/* Menu Links */}
                <SheetClose>
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-gray-800 text-lg"
                  >
                    Home
                  </Link>
                </SheetClose>
                <SheetClose>
                  <Link
                    href="/shop"
                    className="text-gray-600 hover:text-gray-800 text-lg"
                  >
                    Shop
                  </Link>
                </SheetClose>
                <SheetClose></SheetClose>
                <SheetClose>
                  <Link
                    href="/blog"
                    className="text-gray-600 hover:text-gray-800 text-lg"
                  >
                    Blog
                  </Link>
                </SheetClose>
                <SheetClose>
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:text-gray-800 text-lg"
                  >
                    Contact
                  </Link>
                </SheetClose>

                {/* Icons Section */}
                <div className="flex space-x-6 pt-4 border-t border-gray-300 w-full justify-center">
                  <Link href="/" className="text-gray-600 hover:text-gray-800">
                    <User size={24} className="hover:text-blue-500" />
                  </Link>
                  <Link href="/" className="text-gray-600 hover:text-gray-800">
                    <Search size={24} className="hover:text-red-500" />
                  </Link>
                  <Link href="/" className="text-gray-600 hover:text-gray-800">
                    <Heart size={24} className="hover:text-red-500" />
                  </Link>
                  <Link
                    href="/cart"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    <ShoppingCart size={24} className="hover:text-red-500" />
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Nav Links for Larger Screens */}
        <div className="hidden md:flex justify-evenly space-x-16 items-center">
          <Link
            href="/"
            className="text-black font-medium leading-6 text-[16px]"
          >
            Home
          </Link>

          <Link
            href="/shop"
            className="text-black font-medium leading-6 text-[16px]"
          >
            Shop
          </Link>

          <Link
            href="/blog"
            className="text-black font-medium leading-6 text-[16px]"
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className="text-black font-medium leading-6 text-[16px]"
          >
            Contact
          </Link>
        </div>

        {/* Right Section (Profile, Search, Heart, Cart Icons) */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Profile Icon */}
          <Link href="/" className="text-gray-600 hover:text-gray-800">
            <User size={24} className="hover:text-blue-500" />
          </Link>

          {/* Search Icon */}
          <Link href="/" className="text-gray-600 hover:text-gray-800">
            <Search size={24} className="hover:text-red-500" />
          </Link>

          {/* Wishlist Icon */}
          <Link href="/" className="text-gray-600 hover:text-gray-800">
            <Heart size={24} className="hover:text-red-500" />
          </Link>

          {/* Cart Icon */}
          <Link href="/cart" className="text-gray-600 hover:text-gray-800">
            <ShoppingCart size={24} className="hover:text-red-500" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
