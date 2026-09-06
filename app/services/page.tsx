import Top from "../component/Top";
import HeroNavbar from "../component/HeroNavbar";
import { FaAngleRight } from "react-icons/fa";
import Image from "next/image";
import Yellowbgc from "../component/Yellowbgc";

const page = () => {
  type Prop = {
    image: string;
    title: string;
    description: string;
  };

  const card: any[] = [
    {
      id: "1",
      image: "/wide1-1.jpg",
      title: "General Consulting",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
    },

    {
      id: "2",
      image: "/pic_2-1-1.jpg",
      title: "Construction Mangement",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
    },

    {
      id: "3",
      image: "/pic_3-1.jpg",
      title: "Design and Build",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
    },

    {
      id: "4",
      image: "/wide2-1.jpg",
      title: "Preconstruction Consulting",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
    },

    {
      id: "5",
      image: "/pic_2-5-1.jpg",
      title: "Special projects",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
    },

    {
      id: "6",
      image: "/pic_6-2.jpg",
      title: "Renovations",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
    },
  ];

  return (
    <div className="relative font-montserrat">
      <div className="fixed top-0 bg-[url('/bg-subheader-1.jpg')] w-screen h-100  bg-cover bg-center z-0"></div>

      <div className="absolute top-0 w-full z-30">
        <Top />
        <HeroNavbar />
      </div>

      <div className="relative z-20 max-w-300 mx-auto px-5 h-100 flex flex-col justify-center items-center gap-4">
        <h1 className="text-[32px] text-[rgb(236,239,243)] font-semibold">
          SERVICES
        </h1>

        <div className="w-full flex flex-col justify-center items-center">
          <hr className="bg-[#656A6F] w-full h-0.25 border-0" />
          <hr className="bg-[#F2C802] w-26 h-0.5 border-0" />
        </div>

        <div className="flex gap-2">
          <span className="text-[12px] font-normal text-[#F2C802] hover:text-[#FBF9F7] transition duration-250 ">
            WordPress Demo Sites
          </span>

          <span className="text-[12px] font-normal text-[#FBF9F7]">&gt;</span>

          <span className="text-[12px] font-normal text-[#F2C802] hover:text-[#FBF9F7] transition duration-250 ">
            Buildpro
          </span>

          <span className="text-[12px] font-normal text-[#FBF9F7] ">&gt;</span>

          <span className="text-[12px] font-normal text-[#FBF9F7]">
            Services
          </span>
        </div>
      </div>

      {/* main section  */}
      <div className=" bg-white relative z-30">
        <div className="max-w-300 mx-auto px-5 relativez-30">
          <div className="md:grid md:grid-cols-3 flex flex-col gap-8 md:py-20 py-10">
            {card.map((i) => {
              return (
                <div className="flex flex-col flex-1 gap-3" key={i.id}>
                  <div className="group flex-7 overflow-hidden">
                    {" "}
                    <Image
                      src={i.image}
                      height={400}
                      width={500}
                      
                      alt={`card image ${i.id}`} className="group-hover:scale-105 transition-transform duration-300 overflow-hidden"
                    ></Image>
                  </div>
                  <h1 className="text-[17px] font-medium flex-1">{i.title}</h1>
                  <p className="text-[12px] font-normal flex-2 text-[#656A6F]">
                    {i.description}
                  </p>
                  <div className="flex items-center gap-1">
                    <span className="text-[12px] font-medium hover:text-[#C6C5C3] transition duration-300">
                      read more
                    </span>{" "}
                    <FaAngleRight className="text-[#F2C802]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* main end  */}
      <Yellowbgc />
    </div>
  );
};

export default page;
