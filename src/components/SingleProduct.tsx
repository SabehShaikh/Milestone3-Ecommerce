"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight, MinusIcon, PlusIcon } from "lucide-react";
import ReactStars from "react-stars";
import { Facebook, Linkedin, Twitter } from "lucide-react";

type Product = {
  id: number | string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  isSale?: boolean;
  type?: string;
  tag?: string;
  quantity: number;
};

interface ProductDetailPageProps {
  addToCart: (product: Product) => void;
}

export default function ProductDetailPage({
  addToCart,
}: ProductDetailPageProps) {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState("/images/product-sofa.png");

  const MAX_QUANTITY = 5;
  const productId = "SS001";
  const productTitle = "Asgaard Sofa";
  const productPrice = 250000;

  const product = {
    id: productId,
    name: productTitle,
    price: productPrice,
    quantity: quantity,
    image: activeImage,
  };

  const thumbnails = [
    "/images/product-sofa.png",
    "/images/productImg2.png",
    "/images/productImg3.png",
    "/images/productImg4.png",
  ];

  const handleQuantityDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleQuantityIncrement = () => {
    if (quantity < MAX_QUANTITY) setQuantity(quantity + 1);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
      <section className="bg-[#F9F1E7] py-4 px-4 rounded-lg flex items-center space-x-2 overflow-x-auto">
        <div className="flex items-center space-x-2 whitespace-nowrap">
          <span className="text-[#9F9F9F]">Home</span>
          <ChevronRight className="w-4 h-4 text-[#9F9F9F]" />
          <span className="text-[#9F9F9F]">Shop</span>
          <ChevronRight className="w-4 h-4 text-[#9F9F9F]" />
          <span className="font-semibold">Asgaard sofa</span>
        </div>
      </section>

      {/* Product Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Left Section: Images */}
        <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-8">
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible space-x-4 md:space-x-0 md:space-y-4 scrollbar-hide">
            {thumbnails.map((thumb, index) => (
              <div
                key={index}
                onClick={() => setActiveImage(thumb)}
                className={`flex-shrink-0 bg-primary-light h-16 w-16 md:h-20 md:w-20 rounded-[8px] cursor-pointer 
                  ${activeImage === thumb ? "border-2 border-black" : ""}`}
              >
                <Image
                  src={thumb}
                  alt={`Product Thumbnail ${index + 1}`}
                  width={80}
                  height={80}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-grow bg-primary-light rounded-[8px] flex items-center justify-center">
            <Image
              src={activeImage}
              alt="Main Product Image"
              width={500}
              height={500}
              priority
              className="object-contain max-h-[500px] max-w-full rounded-[10px]"
            />
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal">
            {productTitle}
          </h1>
          <p className="text-xl md:text-2xl text- font-medium">
            Rs. {productPrice.toLocaleString()}.00
          </p>

          {/* Reviews */}
          <div className="flex items-center space-x-2">
            <ReactStars count={5} size={24} color2={"#FFC700"} />
            <p className="text-[#9F9F9F] text-base">5 Customer Reviews</p>
          </div>

          {/* text-[#9F9F9F]
          <p className="text-[#9F9F9F] text-base leading-relaxed">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound that is
            both articulate and pronounced.
          </p>

          {/* Size */}
          <div className="space-y-2">
            <p className="text-base text-[#9F9F9F] font-semibold">Size</p>
            <div className="flex space-x-2">
              {["L", "XL", "XS"].map((size) => (
                <button
                  key={size}
                  className="border border-black rounded-full w-10 h-10 text-center hover:bg-black hover:text-white transition-colors"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="space-y-2">
            <p className="text-base text-[#9F9F9F] font-semibold">Color</p>
            <div className="flex space-x-2">
              {["purple-600", "yellow-600", "black"].map((color) => (
                <div
                  key={color}
                  className={`w-6 h-6 bg-${color} rounded-full cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-gray-300`}
                ></div>
              ))}
            </div>
          </div>

          {/* Quantity and Buttons */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="inline-flex h-16 px-4 space-x-8 items-center border border-[#9F9F9F] rounded-[10px]">
              <MinusIcon
                className="cursor-pointer hover:text-gray-500"
                onClick={handleQuantityDecrement}
              />
              <p className="font-semibold select-none">{quantity}</p>
              <PlusIcon
                className="cursor-pointer hover:text-gray-500"
                onClick={handleQuantityIncrement}
              />
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={() => addToCart(product)}
                className="bg-black text-white px-6 py-3 rounded-[10px] hover:bg-gray-800 transition-colors"
              >
                Add to Cart
              </button>
              <button className="border border-black text-black px-6 py-3 rounded-[10px] hover:bg-black hover:text-white transition-colors">
                + Compare
              </button>
            </div>
          </div>

          <div className="text-[#9F9F9F] text-sm space-y-2">
            <p>
              <strong>SKU:</strong> {productId}
            </p>
            <p>
              <strong>Category:</strong> Sofas
            </p>
            <p>
              <strong>Tags:</strong> Sofa, Chair, Home, Shop
            </p>
            <div className="flex items-center space-x-2">
              <strong>Share:</strong>
              <div className="flex space-x-2">
                {[Facebook, Linkedin, Twitter].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-black hover:text-gray-600 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Info Section */}
      <section className="mt-12 pb-10 border-b">
        <div className="flex justify-center space-x-8 overflow-x-auto">
          {["Description", "Additional Information", "Reviews [5]"].map(
            (tab, index) => (
              <p
                key={index}
                className={`text-lg md:text-2xl pb-2 whitespace-nowrap 
                ${index === 0 ? "text-black font-semibold" : "text-[#9F9F9F]"}`}
              >
                {tab}
              </p>
            )
          )}
        </div>

        <div className="max-w-4xl mx-auto mt-8 space-y-4">
          <p className="text-[#9F9F9F] text-center text-base leading-relaxed">
            Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="text-[#9F9F9F] text-center text-base leading-relaxed">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage-styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {["descriptionImg1.png", "descriptionImg2.png"].map((img, index) => (
            <Image
              key={index}
              src={`/images/${img}`}
              alt={`Description Image ${index + 1}`}
              width={600}
              height={400}
              className="rounded-[8px] object-cover w-full"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
