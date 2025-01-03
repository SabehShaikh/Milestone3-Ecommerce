"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Sidebar from "./CartSideBar";

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  isSale?: boolean;
  type: string;
  tag?: string;
  quantity: number;
};

const Product = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Fetching products from JSON file
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
    setIsSidebarOpen(true);
  };

  const removeItem = (id: string | number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleCart = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#3A3A3A]">
        Our Products
      </h2>

      {/* Product Grid */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-8">
        {products.map((product: Product) => (
          <div
            key={product.id}
            className="bg-[#F4F5F7] rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 group relative"
          >
            {/* Image Section */}
            <div className="relative">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={225}
                className="w-full h-64 object-cover"
              />
              {product.isSale && (
                <span className="absolute top-2 right-2 bg-[#E97171] text-white px-2 py-1 rounded-lg text-sm">
                  -{product.discount}%
                </span>
              )}
              {product.tag && (
                <span className="absolute top-2 right-2 bg-[#2EC1AC] text-white px-2 py-1 rounded-lg text-sm">
                  {product.tag}
                </span>
              )}

              <div className="h-full absolute bottom-0 w-full flex flex-col gap-6 items-center justify-center bg-opacity-0 opacity-0 group-hover:bg-opacity-70 group-hover:opacity-100 bg-[#3A3A3A] transition-opacity duration-300">
                <button
                  className="text-[16px] font-medium text-[#B88E2F] bg-white px-8 py-3 rounded-md"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
                <div className="flex gap-4 text-white text-sm mt-2">
                  <button className="flex items-center gap-1 text-[16px] font-semibold">
                    <Icon icon="gridicons:share" /> Share
                  </button>
                  <button className="flex items-center gap-1 text-[16px] font-semibold">
                    <Icon icon="fluent:arrow-swap-20-regular" /> Compare
                  </button>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500">{product.type}</p>
              <div className="mt-2">
                {product.isSale ? (
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-bold text-gray-900">
                      Rs {product.price.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-400 line-through">
                      Rs {product.originalPrice?.toLocaleString()}
                    </p>
                  </div>
                ) : (
                  <p className="text-lg font-bold text-gray-900">
                    Rs {product.price.toLocaleString()}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Sidebar */}
      <Sidebar
        cartOpen={isSidebarOpen}
        toggleCart={toggleCart}
        cartItems={cartItems}
        removeItem={removeItem}
      />

      {/* Show More Button */}
      <button className="mt-8 mx-auto block bg-white border border-[#B88E2F] text-[#B88E2F] py-2 px-6 rounded-md text-sm font-poppins font-semibold text-base leading-[150%]">
        Show More
      </button>
    </div>
  );
};

export default Product;
