export default function Hero() {
  return (
    <div
      className="relative w-full h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/scandinavian-interior-mockup-wall-decal-background 1.png')",
      }}
    >
      {/* Content Box */}
      <div className="relative z-10 bg-[#FFF3E3] p-6 md:p-8 lg:p-12 rounded-lg shadow-lg max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto md:mx-0 md:ml-auto md:mr-[10%] lg:mr-[12%] text-left">
        {/* New Arrival */}
        <h6 className="text-sm md:text-lg lg:text-xl font-medium text-gray-600 mb-2">
          New Arrival
        </h6>
        {/* Main Heading */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#B88E2F] leading-tight mb-4">
          Discover Our <br /> New Collection
        </h3>
        {/* Description */}
        <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        {/* Button */}
        <button className="bg-[#B88E2F] text-white py-2 px-6 md:px-8 rounded-lg text-sm sm:text-base font-medium transition duration-300 hover:bg-[#a67a1f]">
          BUY NOW
        </button>
      </div>
    </div>
  );
}
