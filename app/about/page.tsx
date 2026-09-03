import Top from "../component/Top";
import HeroNavbar from "../component/HeroNavbar";

import { MdChat } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import Animated_button from "../component/Animated_button";

import Image from "next/image";

const page = () => {
  return (
    <div className="relative font-montserrat">
      <div className="fixed top-0 bg-[url('/bg-subheader-1.jpg')] w-screen h-100  bg-cover bg-center z-0"></div>

      <div className="absolute top-0 w-full z-30">
        <Top />
        <HeroNavbar />
      </div>

      <div className="relative z-20 max-w-300 mx-auto px-5 h-100 flex flex-col justify-center items-center gap-4">
        <h1 className="text-[32px] text-[rgb(236,239,243)] font-semibold">
          ABOUT US
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
            About Us
          </span>
        </div>
      </div>

      <div className="relative z-10 h-auto bg-white">
        {/*top div */}

        <div className="h-auto mx-auto max-w-300 px-5">
          {/*max width div */}

          <div className="flex px-2 py-18 gap-8">
            {/*parent div */}

            <div className="flex-3 flex flex-col gap-8 ">
              {/*left div */}

              <div className=" flex flex-1 gap-8">
                {/*top div */}

                <div className="flex-1 flex gap-8 bg-[#EEEEEE] p-6">
                  {/*left div */}
                  <div className="text-[50px] text-[#FFD200]">
                    <MdChat />
                  </div>
                  <div>
                    <h1 className="text-[17px] font-medium text-[rgb(34,34,34)]">
                      Our Vision
                    </h1>
                    <p className="text-[12px] font-normal text-[rgb(119,119,119)]">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae.
                    </p>
                  </div>
                </div>
                <div className="flex-1 flex gap-8 bg-[#EEEEEE] p-6">
                  {" "}
                  {/*right div */}
                  <div className="text-[50px] text-[#FFD200]">
                    <FaClock />
                  </div>
                  <div>
                    <h1 className="text-[17px] font-medium text-[rgb(34,34,34)]">
                      Our Mission
                    </h1>
                    <p className="text-[12px] font-normal text-[rgb(119,119,119)]">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae.
                    </p>
                  </div>
                </div>
              </div>

              <div className="  relative group overflow-hidden flex-2 w-full">
                {" "}
                {/*middle div */}
                <Image
                  className="group-hover:scale-105 transition duration-500"
                  src={"/pic_5-2.jpg"}
                  height={200}
                  width={900}
                  alt="image"
                ></Image>
              </div>

              <div className="flex flex-row flex-2 gap-8">
                {/*bottom div */}
                <div className="flex flex-col gap-4 flex-1 overflow-hidden">
                  <div className="overflow-hidden">
                    <Image
                      src={"/pic_6-3.jpg"}
                      height={150}
                      width={400}
                      alt="img 1"
                      className="transition-transform duration-500 hover:scale-105 overflow-hidden "
                    ></Image>
                  </div>
                  <div>
                    <h1 className="text-[17px] font-medium text-[#222222]">
                      Planning
                    </h1>
                    <p className="text-[12px] font-normal leading-[20.5px] text-[rgb(119,119,119)]">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae. Sed ut perspiciatis unde omnis
                      iste natus error sit voluptatem accusantium doloremque
                      laudantium, totam rem aperiam, eaque ipsa quae ab illo
                      inventore veritatis et quasi architecto beatae.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 flex-1">
                  <div>
                    <h1 className="text-[17px] font-medium text-[#222222]">
                      Constructing
                    </h1>
                    <p className="text-[12px] font-normal leading-[20.5px] text-[rgb(119,119,119)]">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae. Sed ut perspiciatis unde omnis
                      iste natus error sit voluptatem accusantium doloremque
                      laudantium, totam rem aperiam, eaque ipsa quae ab illo
                      inventore veritatis et quasi architecto beatae.
                    </p>
                  </div>
                  <div className="overflow-hidden">
                    <Image
                      src={"/pic_7-1.jpg"}
                      height={150}
                      width={400}
                      alt="img 1"
                      className="transition-transform duration-500 hover:scale-105 overflow-hidden "
                    ></Image>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1">
              {/*right div */}
              <div className=" flex flex-col gap-10 p-3">
                <div className="bg-[url('/banner-1.jpg')] px-8 py-9 flex flex-col justify-center items-center">
                  <div>
                    <h1 className="text-[18px] font-medium mb-2">
                      Attention !
                    </h1>
                    <p className="text-[12px] font-normal text-[rgb(34,34,34)] leading-[20.5px]">
                      Looking for best partner for your next construction works?
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem.
                    </p>
                  </div>

                  <div className="mt-8 mx-3">
                    <Animated_button
                      text="HIRE US NOW"
                      textColor="black"
                      borderColor="black"
                      arrowColor="black"
                      hoverArrowColor="white"
                      hoverTextColor="white"
                      bgColor="black"
                    />
                  </div>
                </div>

                <hr className="bg-[#DDDDDD] w-full h-0.25 border-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
