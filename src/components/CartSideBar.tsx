import React from "react";
import Image from "next/image";
import { X, Trash2 } from "lucide-react";
import Link from "next/link";

interface SidebarProps {
  cartOpen: boolean;
  toggleCart: () => void;
  cartItems: {
    id: number | string;
    name: string;
    quantity: number;
    price: number;
    image: string;
  }[];
  removeItem: (id: string | number) => void;
}

export default function Sidebar({
  cartOpen,
  toggleCart,
  cartItems,
  removeItem,
}: SidebarProps) {
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white shadow-lg transform ${
        cartOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 z-50 overflow-y-auto w-full sm:w-96`}
    >
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-4 sm:px-6 sm:py-5 border-b">
        <h2 className="text-xl sm:text-2xl font-semibold">Shopping Cart</h2>
        <button
          onClick={toggleCart}
          className="hover:bg-gray-100 rounded-full p-2"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Cart Items */}
      <div className="px-4 py-4 sm:px-6">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center gap-4 mb-4 pb-4 border-b last:border-b-0"
            >
              {/* Product Image */}
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-md object-cover w-20 h-20"
              />
              {/* Product Details */}
              <div className="flex-1 text-center sm:text-left">
                <p className="font-medium text-base">{item.name}</p>
                <p className="text-sm text-gray-600">
                  {item.quantity} x Rs. {item.price.toLocaleString()}
                </p>
              </div>
              {/* Remove Button */}
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center py-10">
            Your cart is empty. Start shopping!
          </p>
        )}
      </div>

      {/* Cart Summary */}
      {cartItems.length > 0 && (
        <div className="px-4 py-4 sm:px-6 sm:py-5 border-t sticky bottom-0 bg-white">
          <div className="flex justify-between mb-4">
            <span className="text-lg font-medium">Subtotal</span>
            <span className="text-xl font-semibold">
              Rs. {cartTotal.toLocaleString()}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/cart"
              className="text-center border border-black text-black py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Cart
            </Link>
            <Link
              href="/checkout"
              className="text-center bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Checkout
            </Link>
            <Link
              href="/productcomparision"
              className="text-center border border-black text-black py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Comparison
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
