import { Trophy, ShieldCheck, Truck, Headphones } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Trophy size={40} className="text-black" />,
      title: "High Quality",
      description: "Crafted from top materials",
    },
    {
      icon: <ShieldCheck size={40} className="text-black" />,
      title: "Warranty Protection",
      description: "Over 2 years",
    },
    {
      icon: <Truck size={40} className="text-black" />,
      title: "Free Shipping",
      description: "Order over 150 $",
    },
    {
      icon: <Headphones size={40} className="text-black" />,
      title: "24 / 7 Support",
      description: "Dedicated support",
    },
  ];

  return (
    <div className="bg-[#fdf6ef] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-4 rounded-lg transition-shadow"
            >
              <div>{service.icon}</div>
              <div>
                <h4 className="text-[20px] font-semibold text-[#242424]">
                  {service.title}
                </h4>
                <p className="text-[16px] text-[#898989]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
