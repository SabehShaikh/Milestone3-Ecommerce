"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Sidebar from "@/components/CartSideBar";
import ProductDetailPage from "@/components/SingleProduct";

interface CartItem {
  id: number | string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function ShopHero() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Asgaard Sofa",
      price: 250000,
      quantity: 1,
      image: "/images/product-sofa.png",
    },
    {
      id: 2,
      name: "Casaliving Wood",
      price: 270000,
      quantity: 1,
      image: "/images/productImg2.png",
    },
  ]);

  const toggleCart = () => setCartOpen(!cartOpen);

  const removeItem = (id: string | number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const addToCart = (product: CartItem) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      // Update quantity if the item is already in the cart
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        )
      );
    } else {
      // Add new item to the cart
      setCartItems([...cartItems, product]);
    }

    setCartOpen(true);
  };

  const productData = [
    {
      id: 1,
      name: "Syltherine",
      image: "/images/syltherine.png",
      price: 2500000,
      originalPrice: 3500000,
      discount: 30,
      isSale: true,
      type: "Stylish cafe chair",
    },
    {
      id: 2,
      name: "Leviosa",
      image: "/images/leviosa.png",
      price: 2500000,
      type: "Stylish cafe chair",
    },
    {
      id: 3,
      name: "Lolito",
      image: "/images/lolito.png",
      price: 7000000,
      originalPrice: 14000000,
      discount: 50,
      isSale: true,
      type: "Luxury big sofa",
    },
    {
      id: 4,
      name: "Respira",
      image: "/images/respira.png",
      price: 500000,
      type: "Outdoor bar table and stool",
      tag: "New",
    },
  ];

  return (
    <>
      <ProductDetailPage addToCart={addToCart} />
      <Sidebar
        cartOpen={cartOpen}
        toggleCart={toggleCart}
        cartItems={cartItems}
        removeItem={removeItem}
      />

      <div className="container mx-auto px-4 py-8 border-b">
        <h2 className="text-3xl font-medium mb-6 text-center text-[#3A3A3A]">
          Related Products
        </h2>
        {/* Product Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productData.map((product) => (
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
                {/* Discount Tag */}
                {product.isSale && (
                  <span className="absolute top-2 right-2 bg-[#E97171] text-white px-2 py-1 rounded-lg text-sm">
                    -{product.discount}%
                  </span>
                )}
                {/* New Tag */}
                {product.tag && (
                  <span className="absolute top-2 right-2 bg-[#2EC1AC] text-white px-2 py-1 rounded-lg text-sm">
                    {product.tag}
                  </span>
                )}
                {/* Hover Actions */}
                <div className="h-full absolute bottom-0 w-full flex flex-col gap-[24px] items-center justify-center bg-opacity-0 opacity-0 group-hover:bg-opacity-70 group-hover:opacity-100 bg-[#3A3A3A] transition-opacity duration-300">
                  <button className="text-[16px] font-medium text-[#B88E2F] bg-white px-[52px] py-[12px]">
                    Add to Cart
                  </button>
                  <div className="flex gap-4 text-white text-sm mt-2">
                    <button className="flex items-center gap-1 text-[16px] font-semibold">
                      <Icon icon="gridicons:share" className="" /> Share
                    </button>
                    <button className="flex items-center gap-1 text-[16px] font-semibold">
                      <Icon icon="fluent:arrow-swap-28-regular" className="" />{" "}
                      Compare
                    </button>
                    <button className="flex items-center gap-1 text-[16px] font-semibold">
                      <Icon icon="mingcute:heart-line" className="" /> Like
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
                        Rp {product.price.toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-400 line-through">
                        Rp {product.originalPrice?.toLocaleString()}
                      </p>
                    </div>
                  ) : (
                    <p className="text-lg font-bold text-gray-900">
                      Rp {product.price.toLocaleString()}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
   
        <button className="mt-8 mx-auto block bg-white border border-[#B88E2F] text-[#B88E2F] py-2 px-6 rounded-md text-sm font-poppins font-semibold text-base leading-[150%]">
          Show More
        </button>
      </div>
    </>
  );
}
