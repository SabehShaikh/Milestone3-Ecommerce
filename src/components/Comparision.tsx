"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ChevronDown } from "lucide-react";

const Comparison = () => {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [openSection, setOpenSection] = useState<number | null>(null);

  const sections = [
    {
      title: "General",
      rows: [
        {
          label: "Sales Package",
          product1: "1 sectional sofa",
          product2: "1 Three Seater, 2 Single Seater",
        },
        {
          label: "Model Number",
          product1: "TFCBUGR8L85RHS",
          product2: "DTUBLIGR8L568",
        },
        {
          label: "Secondary Material",
          product1: "Solid Wood",
          product2: "Solid Wood",
        },
        { label: "Configuration", product1: "L-shaped", product2: "L-shaped" },
        {
          label: "Upholstery Material",
          product1: "Fabric + Cotton",
          product2: "Fabric + Cotton",
        },
        {
          label: "Upholstery Color",
          product1: "Bright Grey & Lion",
          product2: "Bright Grey & Lion",
        },
      ],
    },
    {
      title: "Product",
      rows: [
        { label: "Filling Material", product1: "Foam", product2: "Matte" },
        {
          label: "Finish Type",
          product1: "Bright Grey & Lion",
          product2: "Bright Grey & Lion",
        },
        { label: "Adjustable Headrest", product1: "No", product2: "Yes" },
        {
          label: "Maximum Load Capacity",
          product1: "280 KG",
          product2: "300 KG",
        },
        {
          label: "Origin of Manufacture",
          product1: "India",
          product2: "India",
        },
      ],
    },
    {
      title: "Dimensions",
      rows: [
        { label: "Width", product1: "265.02 cm", product2: "264.52 cm" },
        { label: "Height", product1: "76 cm", product2: "76 cm" },
        { label: "Depth", product1: "167.76 cm", product2: "167.76 cm" },
        { label: "Weight", product1: "45 cm", product2: "65 cm" },
        { label: "Seat Height", product1: "41.52 cm", product2: "41.52 cm" },
        { label: "Leg Height", product1: "5.46 cm", product2: "5.46 cm" },
      ],
    },
    {
      title: "Warranty",
      rows: [
        {
          label: "Warranty Summary",
          product1: "1 Year Manufacturing Warranty",
          product2: "1 Year Manufacturing Warranty",
        },
        {
          label: "Warranty Service Type",
          product1:
            "For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com",
          product2:
            "For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com",
        },
        {
          label: "Covered in Warranty",
          product1: "Warranty Against Manufacturing Defect",
          product2:
            "Warranty of the product is limited to manufacturing defects only.",
        },
        {
          label: "Not Covered in Warranty",
          product1:
            "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.",
          product2:
            "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.",
        },
        {
          label: "Domestic Warranty",
          product1: "1 Year",
          product2: "3 Months",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12">
      {/* Top Section - Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Go to Product Page */}
        <div className="flex flex-col p-6 bg-white  rounded-lg">
          <p className="text-lg font-medium text-black">
            Go to Product <br /> page for more <br /> Products
          </p>
          <span className="text-sm font-medium text-[#727272] border-b text-center border-black mt-4">
            View More
          </span>
        </div>

        {/* Product 1 Card */}
        <div className="bg-white p-6  rounded-lg">
          <div className="relative h-48 bg-[#F9F1E7] rounded-md mb-4">
            <Image
              src="/images/Asgaard sofa 3.png"
              alt="Asgaard Sofa"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Asgaard Sofa
          </h3>
          <p className="text-sm font-medium text-[#B88E2F] mb-2">
            Rs. 260,000.00
          </p>
          <div className="flex items-center">
            <div className="flex text-yellow-500">
              {[...Array(4)].map((_, i) => (
                <Star key={i} size={20} />
              ))}
              <Star size={20} className="text-gray-300" />
            </div>
            <p className="text-gray-600 ml-2 text-sm">4.7 | 234 Reviews</p>
          </div>
        </div>

        {/* Product 2 Card */}
        <div className="bg-white p-6 rounded-lg">
          <div className="relative h-48 bg-[#F9F1E7] rounded-md mb-4">
            <Image
              src="/images/outdoor-sofa.png"
              alt="Outdoor Sofa Set"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Outdoor Sofa Set
          </h3>
          <p className="text-sm font-medium text-[#B88E2F] mb-2">
            Rs. 224,000.00
          </p>
          <div className="flex items-center">
            <div className="flex text-yellow-500">
              {[...Array(4)].map((_, i) => (
                <Star key={i} size={20} />
              ))}
              <Star size={20} className="text-gray-300" />
            </div>
            <p className="text-gray-600 ml-2 text-sm">4.2 | 165 Reviews</p>
          </div>
        </div>

        {/* Add a Product Section */}
        <div className="flex flex-col p-6 bg-white  rounded-lg">
          <p className="text-lg font-semibold text-gray-800 mb-3">
            Add A Product
          </p>
          <select
            className="w-full px-4 py-2 bg-[#B88E2F] text-white rounded-md"
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
          >
            <option value="">Choose a Product</option>
            <option value="sofa1">Asgaard Sofa</option>
            <option value="sofa2">Outdoor Sofa Set</option>
          </select>
        </div>
      </div>

      {/* Detailed Comparison Section - Mobile Accordion & Desktop Table */}
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="bg-white rounded-lg p-6 mt-8">
          {/* Desktop View */}
          <div className="hidden md:block">
            <h4 className="text-[20px] md:text-[28px] font-semibold text-black mb-4">
              {section.title}
            </h4>
            <div>
              <div className="flex items-center py-2 border-b bg-gray-100">
                <div className="w-1/4 text-gray-800 font-medium pl-4">
                  Specification
                </div>
                <div className="w-1/4 text-gray-800 font-medium">
                  Asgaard Sofa
                </div>
                <div className="w-1/4 text-gray-800 font-medium">
                  Outdoor Sofa Set
                </div>
              </div>
              {section.rows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex items-center py-2 border-t">
                  <div className="w-1/4 text-gray-800 font-medium pl-4">
                    {row.label}
                  </div>
                  <div className="w-1/4 text-gray-600">{row.product1}</div>
                  <div className="w-1/4 text-gray-600">{row.product2}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Accordion View */}
          <div className="md:hidden">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() =>
                setOpenSection(
                  openSection === sectionIndex ? null : sectionIndex
                )
              }
            >
              <h4 className="text-[20px] font-semibold text-black">
                {section.title}
              </h4>
              <ChevronDown
                className={`transform transition-transform duration-300 ${
                  openSection === sectionIndex ? "rotate-180" : ""
                }`}
              />
            </div>

            {openSection === sectionIndex && (
              <div className="mt-4">
                {section.rows.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="border-t py-3 grid grid-cols-2 gap-4"
                  >
                    <div className="text-gray-800 font-medium">{row.label}</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-gray-600 font-semibold">
                        Asgaard Sofa
                      </div>
                      <div className="text-gray-600">{row.product1}</div>
                      <div className="text-gray-600 font-semibold">
                        Outdoor Sofa Set
                      </div>
                      <div className="text-gray-600">{row.product2}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Add to Cart Buttons - Responsive */}
      <div className="flex flex-col md:flex-row items-center mt-6 space-y-4 md:space-y-0">
        <div className="w-full md:w-1/4 md:mr-4"></div>
        <div className="w-full md:w-1/4 mr-0 md:mr-4 mb-4 md:mb-0">
          <button className="w-full px-4 py-2 bg-[#B88E2F] text-white rounded-md hover:bg-[#9A7024] transition-colors">
            Add Asgaard Sofa to Cart
          </button>
        </div>
        <div className="w-full md:w-1/4">
          <button className="w-full px-4 py-2 bg-[#B88E2F] text-white rounded-md hover:bg-[#9A7024] transition-colors">
            Add Outdoor Sofa Set to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
