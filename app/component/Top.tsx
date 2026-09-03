
import { FaFacebookF, FaTwitter, FaWifi, FaPhone } from "react-icons/fa";

import { SiGoogle } from "react-icons/si";

import { MdLocationOn, MdAccessTime, MdEmail } from "react-icons/md";


const Top = () => {

  return (
    <div className="bg-black/25 font-montserrat ">
      <div className="px-5 max-w-300 m-auto flex justify-between items-center py-2">
        {/* left div */}
        <div className="flex gap-8">
          <div className="flex gap-2 justify-center items-center">
            <div>
              <MdLocationOn className="text-[rgb(255,210,0)]" />{" "}
            </div>
            <div className="text-[12px] font-normal text-[#F4F4F5]">
              Collins Street West, Victoria 8007 Australia
            </div>
          </div>

          <div className="flex gap-2 justify-center items-center">
            <div>
              <MdAccessTime className="text-[rgb(255,210,0)]" />{" "}
            </div>
            <div className="text-[12px] font-normal text-[#F4F4F5]">
              Monday - Friday 08:00-16:00
            </div>
          </div>

          <div className="flex gap-2 justify-center items-center">
            <div>
              <FaPhone className="text-[rgb(255,210,0)]" />{" "}
            </div>
            <div className="text-[12px] font-normal text-[#F4F4F5]">
              1800.899.900
            </div>
          </div>
        </div>

        {/* right div  */}
        <div className="flex gap-6">
          <FaFacebookF className="text-[#FFFFFF] hover:text-[#F2C802] transition hover:cursor-pointer" />
          <FaTwitter className="text-[#FFFFFF] hover:text-[#F2C802] transition hover:cursor-pointer" />
          <FaWifi className="text-[#FFFFFF] hover:text-[#F2C802] transition hover:cursor-pointer" />
          <SiGoogle className="text-[#FFFFFF] hover:text-[#F2C802] transition hover:cursor-pointer" />
          <MdEmail className="text-[#FFFFFF] hover:text-[#F2C802] transition hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Top;
