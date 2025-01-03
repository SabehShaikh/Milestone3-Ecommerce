import Image from "next/image";

const CustomComponent = () => {
  return (
    <div className="w-full h-auto  px-4 sm:px-10 lg:px-32 flex flex-col md:flex-row items-center justify-between py-8 bg-[#f9f4ef]">
      {/* Text Section */}
      <div className="flex flex-col items-center md:items-start justify-center w-full  text-center md:w-1/3 md:text-left">
        <h1 className="font-poppins font-bold text-2xl sm:text-3xl lg:text-4xl text-[#333333]">
          50+ Beautiful rooms inspiration
        </h1>
        <p className="mt-2 sm:mt-4 font-poppins font-normal text-[16px] sm:text-xl  text-[#555555]">
          Our designer already made a lot of beautiful prototype of rooms that
          inspire you.
        </p>

        <button className="bg-[#B88E2F] leading-[150%] font-[600] text-center text-white py-2 px-4 rounded mt-4 sm:mt-6 lg:mt-8">
          Explore More
        </button>
      </div>
      {/* Image Section */}{" "}
      <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-2/3 mt-8 md:mt-0 gap-8">
        {" "}
        {/* Middle Image with Text Overlay */}{" "}
        <div className="relative flex flex-col items-center">
          {" "}
          <Image
            src="/images/innerpeace.png"
            alt="Bedroom"
            width={372}
            height={486}
            className="w-full h-auto object-cover"
          />{" "}
          <div className="absolute bottom-0 w-full bg-[#FFF3E3] bg-opacity-75 p-4 text-center">
            {" "}
            <span className="font-semibold text-[12px] sm:text-xl lg:text-[16px] text-[#616161]">
              {" "}
              01 — Bed Room{" "}
            </span>
            <h2 className="font-semibold text-lg sm:text-xl lg:text-2xl text-black">
              {" "}
              Inner Peace{" "}
            </h2>{" "}
          </div>{" "}
        </div>
        {/* Right Image */}
        <div className="flex flex-col items-center relative">
          <Image
            src="/images/chairs.png"
            alt="Dining Area"
            width={372}
            height={486}
            className="w-full h-auto object-cover"
          />
          <div className="flex justify-center items-center mt-4">
            <div className="w-2 h-2 bg-[#B88E2F] rounded-full mx-1"></div>
            <div className="w-2 h-2  bg-[#B88E2F] rounded-full mx-1"></div>
            <div className="w-2 h-2  bg-[#B88E2F] rounded-full mx-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomComponent;
