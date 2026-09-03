import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaBasketballBall } from "react-icons/fa";
import { SiGoogle } from "react-icons/si";
import { FaWifi } from "react-icons/fa";

import Image from "next/image";

const Footer = () => {
  return (
    <div className="font-montserrat text-[#B3B3B3] relative z-10">
      {/* upper */}
      <div className=" bg-[#222222] pt-12">
        <div className="max-w-300 mx-auto flex gap-2 ">
          <div className=" flex-1 p-5">
            <Image
              src={"/logo.png"}
              height={80}
              width={180}
              alt="logo"
              priority
              className="pb-5"
            ></Image>
            <p className="text-[12px] leading-loose">
              We are team based on Brookylin. Our expertise on Interior Design.
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>

          <div className=" flex-1 p-5">
            <h1 className="text-[20px] text-white pb-3">Latest News</h1>
            <ul className="text-[12px]">
              <li className="py-3">
                <span className="hover:text-[#626262] hover:underline transition duration-200 hover:cursor-pointer">
                  5 Things That Take a Room from Good to Great
                </span>
              </li>
              <hr className="text-[#393939]" />
              <li className="py-3">
                <span className="hover:text-[#626262] hover:underline transition duration-200 hover:cursor-pointer">
                  Functional and Stylish Wall-to-Wall Shelves
                </span>
              </li>
              <hr className="text-[#393939]" />
              <li className="py-3">
                <span className="hover:text-[#626262] hover:underline transition duration-200 hover:cursor-pointer">
                  9 Unique and Unusual Ways to Display Your TV
                </span>
              </li>
              <hr className="text-[#393939]" />
              <li className="py-3">
                <span className="hover:text-[#626262] hover:underline transition duration-200 hover:cursor-pointer">
                  The 5 Secrets to Pulling Off Simple, Minimal Design
                </span>
              </li>
              <hr className="text-[#393939]" />
              <li className="py-3">
                <span className="hover:text-[#626262] hover:underline transition duration-200 hover:cursor-pointer">
                  Our Favorite Home Decor Trends of the Year
                </span>
              </li>
              <hr className="text-[#393939]" />
            </ul>
          </div>

          <div className=" flex-1 p-5">
            <h1 className="text-[20px] text-white pb-3">Contact Us</h1>
            <ul className="text-[12px]">
              <li className="py-3">
                Collins Street West, Victoria 8007 Australia
              </li>
              <hr className="text-[#393939]" />
              <li className="py-3">
                <span className="text-[#F2C802] font-bold pr-3">Phone:</span>
                (208) 333 9296
              </li>
              <hr className="text-[#393939]" />
              <li className="py-3">
                <span className="text-[#F2C802] font-bold pr-8">Fax:</span>(208)
                333 9298
              </li>
              <hr className="text-[#393939]" />
              <li className="py-3">
                <span className="text-[#F2C802] font-bold pr-5">Email:</span>
                <span className="hover:text-[#626262] hover:underline transition duration-200 hover:cursor-pointer">
                  contact@buildpro.com
                </span>
              </li>
              <hr className="text-[#393939]" />
              <li className="py-3">
                <span className="text-[#F2C802] font-bold pr-6">Web:</span>
                <span className="hover:text-[#626262] hover:underline transition duration-200 hover:cursor-pointer">
                  http://buildpro-construction.com
                </span>
              </li>
              <hr className="text-[#393939]" />
            </ul>
          </div>
        </div>
      </div>

      {/* lower */}
      <div className="bg-[#242424] h-auto">
        <div className="max-w-300 mx-auto flex justify-between items-center p-5  ">
          <div className="text-[#B3B3B3] text-[12px]">
            &copy; Copyright 2023 - BuildPro by OceanThemes
          </div>

          <div className="flex gap-1 text-white">
            <div className="p-2 rounded-sm hover:bg-white hover:text-black transition duration-500 cursor-pointer">
              {" "}
              <FaFacebookF />
            </div>
            <div className="p-2 rounded-sm hover:bg-white hover:text-black transition duration-500 cursor-pointer">
              <FaTwitter />
            </div>
            <div className="p-2 rounded-sm hover:bg-white hover:text-black transition duration-500 cursor-pointer">
              {" "}
              <FaWifi />
            </div>
            <div className="p-2 rounded-sm hover:bg-white hover:text-black transition duration-500 cursor-pointer">
              {" "}
              <SiGoogle />
            </div>
            <div className="p-2 rounded-sm hover:bg-white hover:text-black transition duration-500 cursor-pointer">
              <FaSkype />
            </div>
            <div className="p-2 rounded-sm hover:bg-white hover:text-black transition duration-500 cursor-pointer">
              <FaBasketballBall />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
