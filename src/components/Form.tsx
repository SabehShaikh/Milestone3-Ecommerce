import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const ContactForm = () => {
  return (
    <div className="container mx-auto px-8 py-12">
      <h2 className="text-4xl font-semibold text-center mb-6">
        Get In Touch With Us
      </h2>
      <p className="text-center text-[#9F9F9F] font-[16px] mb-12 max-w-2xl mx-auto leading-relaxed">
        For more information about our product and services, please feel free to
        drop us an email. Our staff will always be there to help you out. Do not
        hesitate!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-12">
        {/* Contact Information */}
        <div className="space-y-10">
          {/* Address */}
          <div className="flex items-start">
            <MapPin size={24} className="text-black mt-1 mr-4" />
            <div>
              <h4 className="text-[16px] md:text-[20px]  font-medium">
                Address
              </h4>
              <p className="text-black md:text-[16px] font-[14px]">
                236 5th St Avenue, New <br /> York NY10000, United <br /> States
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start">
            <Phone size={24} className="text-black mt-1 mr-4" />
            <div>
              <h4 className="text-[16px] md:text-[20px]  font-medium">Phone</h4>
              <p className="text-black md:text-[16px] font-[14px]">
                Mobile: (+84) 546-6789
              </p>
              <p className="text-black md:text-[16px] font-[14px]">
                Hotline: (+84) 456-6789
              </p>
            </div>
          </div>

          {/* Working Time */}
          <div className="flex items-start">
            <Clock size={24} className="text-black mt-1 mr-4" />
            <div>
              <h4 className="text-[16px] md:text-[20px]  font-medium">
                Working Time
              </h4>
              <p className="text-black md:text-[16px] font-[14px]">
                Monday-Friday: 9:00 - 22:00
              </p>
              <p className="text-black md:text-[16px] font-[14px]">
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-8">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Your Name
            </label>
            <Input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 bg-white rounded-md px-4 py-5 focus:ring-1 focus:ring-black focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <Input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 bg-white rounded-md px-4 py-5 focus:ring-1 focus:ring-black focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Subject
            </label>
            <Input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 bg-white rounded-md px-4 py-5 focus:ring-1 focus:ring-black focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <Textarea
              placeholder="Message"
              className="w-full border resize-none border-gray-300 bg-white rounded-md px-4 py-5 focus:ring-1 focus:ring-black focus:outline-none"
            ></Textarea>
          </div>

          <Button
            type="submit"
            className="w-[50%] bg-[#B88E2F] text-white font-medium py-3 rounded-md hover:bg-[#A57B1E] transition duration-300"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
