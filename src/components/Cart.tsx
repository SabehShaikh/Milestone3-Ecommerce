import Image from "next/image";
import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";

const Cart = () => {
  return (
    <div className="w-full px-4 sm:px-10 lg:px-20 py-10 flex flex-col lg:flex-row items-start gap-10">
      {/* Cart Items Section */}
      <div className="w-full lg:w-3/5">
        {/* Table Header */}
        <div className="grid grid-cols-4 sm:grid-cols-5 text-center font-medium bg-[#F8F1E7] py-3 rounded-t-lg">
          <div className="col-span-2 sm:col-span-2 text-left px-2">Product</div>
          <div className="hidden sm:block">Price</div>
          <div className="hidden sm:block">Quantity</div>
          <div className="flex justify-between items-center px-2 sm:block">
            Subtotal
          </div>
        </div>
        {/* Table Rows */}
        <div className="grid grid-cols-4 sm:grid-cols-5 items-center py-4">
          {/* Product Image & Name */}
          <div className="col-span-2 sm:col-span-2 flex items-center gap-4 px-2">
            <Image
              src="/images/product-sofa.png"
              alt="Asgaard sofa"
              width={60}
              height={60}
              className="rounded-lg"
            />
            <p className="font-medium text-[#333333] text-sm sm:text-base">
              Asgaard sofa
            </p>
          </div>
          {/* Price */}
          <div className="text-center text-sm sm:text-base text-[#555555] hidden sm:block">
            Rs. 250,000.00
          </div>
          {/* Quantity Input */}
          <div className="text-center hidden sm:block">
            <input
              type="number"
              defaultValue={1}
              min={1}
              className="w-14 h-8 text-center border rounded-md"
            />
          </div>
          {/* Subtotal and Trash Icon */}
          <div className="flex justify-between items-center px-2 text-sm sm:text-base font-medium text-[#333333]">
            <span>Rs. 250,000.00</span>
            <button className="text-[#B88E2F] ml-2">
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Cart Totals Section */}
      <div className="w-full lg:w-2/5 p-6 bg-[#F8F1E7] rounded-lg">
        <h2 className="text-lg text-center md:text-[24px] font-semibold mb-4 text-black">
          Cart Totals
        </h2>
        {/* Subtotal */}
        <div className="flex justify-between items-center mb-3">
          <p className="text-sm sm:text-base font-medium text-black">
            Subtotal
          </p>
          <p className="text-sm sm:text-base font-regular text-[#9F9F9F]">
            Rs. 250,000.00
          </p>
        </div>
        {/* Total */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-base sm:text-lg font-medium text-[#555555]">
            Total
          </p>
          <p className="text-[16px] md:text-[20px] font-medium text-[#B88E2F]">
            Rs. 250,000.00
          </p>
        </div>
        {/* Checkout Button */}
        <Button
          variant="outline"
          className="w-full py-3 bg-[#F8F1E7] text-black font-medium text-[18px] md:text-[20px] rounded-lg"
        >
          Check Out
        </Button>
      </div>
    </div>
  );
};

export default Cart;
