import Image from "next/image";
export default function FuniroFurniture() {
  return (
    <div className="w-full pt-[20px] md:pt-[40px] pb-[50px] bg-[#F4F5F7]">


      <div className="text-center  w-full ">
        <h3 className="text-[14px] md:text-[20px] font-semibold text-[#616161]">
          Share your setup with
        </h3>
        <h2 className="text-[30px] md:text-[40px] font-bold text-[#3A3A3A]">
          #FuniroFurniture
        </h2>
      </div>

      <div className="flex justify-center items-center w-full ">
        <Image
          src="/images/furniro-setup.png"
          width={2000}
          height={100}
          alt="images"
        ></Image>
      </div>

    </div>
  );
}
