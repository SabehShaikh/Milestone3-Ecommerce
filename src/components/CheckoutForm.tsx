import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const CheckOutForm = () => {
  return (
    <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Billing Information */}
      <div className="bg-white  p-8 rounded-lg">
        <h2 className="text-[30px] font-semibold mb-6">Billing Information</h2>
        <form className="space-y-6">
          {/* First Name and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                First Name
              </label>
              <Input
                type="text"
                placeholder="First Name"
                className="w-full border border-gray-300 rounded-md p-4 py-5"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Last Name
              </label>
              <Input
                type="text"
                placeholder="Last Name"
                className="w-full border border-gray-300 rounded-md p-4 py-5"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Company Name (Optional)
            </label>
            <Input
              type="text"
              placeholder="Company Name"
              className="w-full border border-gray-300 rounded-md p-4 py-5"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Country/Region
            </label>
            <Input
              type="text"
              placeholder="Country/Region"
              className="w-full border border-gray-300 rounded-md p-4 py-5"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Street Address
            </label>
            <Input
              type="text"
              placeholder="Street Address"
              className="w-full border border-gray-300 rounded-md p-4 py-5"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Town/City
            </label>
            <Input
              type="text"
              placeholder="Town/City"
              className="w-full border border-gray-300 rounded-md p-4 py-5"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Province
            </label>
            <Input
              type="text"
              placeholder="Province"
              className="w-full border border-gray-300 rounded-md p-4 py-5"
            />
          </div>

          <div>
            <label className="block  text-gray-700 font-semibold mb-2">
              ZIP Code
            </label>
            <Input
              type="text"
              placeholder="ZIP Code"
              className="w-full border  border-gray-300 rounded-md p-4 py-5"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Phone
            </label>
            <Input
              type="text"
              placeholder="Phone"
              className="w-full border border-gray-300 rounded-md p-4 py-5"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email Address
            </label>
            <Input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-md p-4 py-5 "
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Additional Information
            </label>
            <Textarea
              placeholder="Additional Information"
              className="w-full border border-gray-300 rounded-md p-4 resize-none py-5"
            />
          </div>
        </form>
      </div>

      {/* Order Summary and Payment Options */}
      <div className="bg-white p-8 rounded-lg space-y-6">
        <div className="space-y-4 border-b pb-4">
          <div className="flex justify-between">
            <span className="text-[24px]  text-black">Product</span>
            <span className="text-[24px] text-black">Subtotal</span>
          </div>

          <div className="flex justify-between">
            <span className="text-[16px] text-[#9F9F9F]">Asgaard sofa × 1</span>
            <span className="text-[16px]">Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span className="text-[16px]">Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between">
            <span>Total:</span>
            <span className="font-bold text-[#B88E2F] text-[20px]">
              Rs. 250,000.00
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="radio"
              id="bank-transfer"
              name="payment-method"
              className="mr-2"
            />
            <label htmlFor="bank-transfer">Direct Bank Transfer</label>
          </div>
          <div className="pl-6 text-[16px] text-[#9F9F9F]">
            Make your payment directly into our bank account. Please use <br />{" "}
            your Order ID as the payment reference. Your order will not be{" "}
            <br /> shipped until the funds have cleared in our account.
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="cash-on-delivery"
              name="payment-method"
              className="mr-2"
            />
            <label htmlFor="cash-on-delivery">Cash on Delivery</label>
          </div>
        </div>
        <div className="pl-6 text-[16px] text-[#9F9F9F] ">
          Your personal data will be used to support your experience <br />{" "}
          throughout this website, to manage access to your account, and <br />{" "}
          for other purposes described in our{" "}
          <span className="font-bold text-[16px] text-black">
            privacy policy.
          </span>
        </div>
        <div className="flex justify-center items-center">
          <Button
            type="submit"
            className="w-[75%] bg-[#B88E2F] text-white font-semibold py-2 rounded-md hover:bg-[#A57B1E] transition-colors duration-300"
          >
            Place order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckOutForm;
