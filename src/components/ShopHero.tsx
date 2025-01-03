import React from "react";
import { Filter, Grid, List } from "lucide-react";

export default function ShopHero() {
  return (
    <div className="w-full h-16 bg-[#F9F1E7] flex items-center justify-between px-3 md:px-6 lg:px-16">
      {/* Left Section */}
      <div className="flex items-center space-x-3 md:space-x-4">
        <Filter size={22} className="text-gray-800" />
        <p className="text-gray-800 font-medium">Filter</p>
        {/* Two additional icons */}
        <Grid size={20} className="text-gray-800 cursor-pointer" />
        <List size={20} className="text-gray-800 cursor-pointer" />
        <p className="text-gray-800 font-light hidden sm:block">
          | Showing 1–16 of 32 results
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-3 md:space-x-4">
        <p className="text-gray-800 font-medium">Show</p>
        <input
          className="w-10 h-8 bg-white text-center rounded-md border border-gray-300 text-gray-800"
          type="text"
          placeholder="16"
          name="show"
          id="show"
        />
        <p className="text-gray-800 font-medium">Sort by</p>
        <input
          className="w-28 h-8 bg-white text-center rounded-md border border-gray-300 text-gray-800"
          type="text"
          placeholder="Default"
          name="sort"
          id="sort"
        />
      </div>
    </div>
  );
}
