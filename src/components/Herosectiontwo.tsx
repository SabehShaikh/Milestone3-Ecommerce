import Image from "next/image";

const Hero2 = () => {
  return (
    <div className="w-full h-auto mb-10 px-4 sm:px-10 lg:px-32 flex flex-col items-center justify-center py-8">
      {/* Title Section */}
      <div className="w-full text-center">
        <h1 className="font-poppins font-bold text-2xl sm:text-3xl lg:text-4xl text-[#333333]">
          Browse The Range
        </h1>

        {/* Paragraph Section */}
        <p className="mt-2 sm:mt-4 font-poppins font-normal text-lg sm:text-xl lg:text-2xl text-[#555555]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        
      </div>

      {/* Image Section */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center mt-8 gap-8">
        {/* Dining Image */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/dining.png"
            alt="Dining Area"
            width={300} // Adjust width and height as per your requirement
            height={200}
            className="object-cover"
          />
          <h2 className="mt-4 font-semibold text-lg sm:text-xl lg:text-2xl text-[#333333]">
            Dining
          </h2>
        </div>

        {/* Living Room Image */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/living.png"
            alt="Living Room"
            width={300}
            height={200}
            className="object-cover"
          />
          <h2 className="mt-4 font-semibold text-lg sm:text-xl lg:text-2xl text-[#333333]">
            Living
          </h2>
        </div>

        {/* Bedroom Image */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/bedroom.png"
            alt="Bedroom"
            width={300}
            height={200}
            className="object-cover"
          />
          <h2 className="mt-4 font-semibold text-lg sm:text-xl lg:text-2xl text-[#333333]">
            Bedroom
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
