import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-gray-700 py-6 sm:py-8 lg:py-10 bg-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="w-full">
            <h3 className="font-bold text-lg mb-4">Funiro.</h3>
            <p className="text-base text-[#9F9F9F] font-normal leading-relaxed">
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>

          {/* Links Section */}
          <div className="w-full">
            <h4 className="font-semibold mb-4 text-gray-800">Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-base hover:text-gray-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-base hover:text-gray-900 transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/" className="text-base hover:text-gray-900 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-base hover:text-gray-900 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="w-full">
            <h4 className="font-semibold mb-4 text-gray-800">Help</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/checkout"
                  className="text-base hover:text-gray-900 transition-colors"
                >
                  Payment Options
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-base hover:text-gray-900 transition-colors"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-base hover:text-gray-900 transition-colors"
                >
                  Privacy Policies
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="w-full">
            <h4 className="mb-4 text-[#9F9F9F] font-medium">Newsletter</h4>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full sm:flex-1 text-sm font-medium text-[#9F9F9F] border-b border-black px-2 py-1 focus:outline-none"
              />
              <span className="text-black text-sm font-medium leading-tight underline mt-2 sm:mt-0">
                SUBSCRIBE
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="mt-8">
        <div className="max-w-7xl border-t border-gray-300 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between py-4">
          <p className="text-sm text-black mb-2 sm:mb-0">
            &copy; 2024 Funiro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
