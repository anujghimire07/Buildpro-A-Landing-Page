import Image from "next/image";
import Animated_button from "./Animated_button";

const Ourteam = () => {
  return (
    <div className="bg-white font-montserrat ">
     <div className="max-w-300 h-auto py-14 m-auto  flex flex-col gap-8 justify-center items-center px-6">
        <div className="w-full">
          <h1 className="font-medium text-[28px] pb-3.5">Our Team</h1>
          <hr className="bg-[#F2C802] w-12 h-0.5 border-0" />
        </div>

        <div className="w-full flex md:flex-row flex-col justify-center items-center md:gap-0 gap-12">
          {/* card 1 */}
          <div className="flex-1">
            <div className="overflow-hidden w-[270px] h-[270px]">
              <Image
                src={"/team_pic_1-1.jpg"}
                width={270}
                height={270}
                alt="Ben's image"
                className="hover:scale-109  transition duration-400"
              ></Image>
            </div>
            <div className="py-6">
              <h1 className="text-[17px] font-medium">Ben Sheridan</h1>
              <p className="text-[12px] font-normal text-[#B3B3B3]">
                Founder & CEO
              </p>
            </div>
            <hr className="bg-[#F2C802] w-12 h-0.5 border-0" />
          </div>

          {/* card 2 */}
          <div className="flex-1">
            <div className="overflow-hidden w-[270px] h-[270px]">
              <Image
                src={"/team_pic_2-1.jpg"}
                width={270}
                height={270}
                alt="Sophie's image"
                className="hover:scale-109  transition duration-400"
              ></Image>
            </div>
            <div className="py-6">
              <h1 className="text-[17px] font-medium">Sophie Lana</h1>
              <p className="text-[12px] font-normal text-[#B3B3B3]">
                Founder & CEO
              </p>
            </div>
            <hr className="bg-[#F2C802] w-12 h-0.5 border-0" />
          </div>

          {/* card 3 */}
          <div className="flex-1">
            <div className="overflow-hidden w-[270px] h-[270px]">
              <Image
                src={"/team_pic_3-1.jpg"}
                width={270}
                height={270}
                alt="James's image"
                className="hover:scale-109  transition duration-400"
              ></Image>
            </div>
            <div className="py-6">
              <h1 className="text-[17px] font-medium">James Hoult</h1>
              <p className="text-[12px] font-normal text-[#B3B3B3]">
                Project Manager
              </p>
            </div>
            <hr className="bg-[#F2C802] w-12 h-0.5 border-0" />
          </div>

          {/* card 4 */}
          <div className="flex-1">
            <div className="overflow-hidden w-[270px] h-[270px]">
              <Image
                src={"/team_pic_4-1.jpg"}
                width={270}
                height={270}
                alt="Oscar's image"
                className="hover:scale-109  transition duration-400"
              ></Image>
            </div>
            <div className="py-6">
              <h1 className="text-[17px] font-medium">Oscar Helamn</h1>
              <p className="text-[12px] font-normal text-[#B3B3B3]">
                Construction Manager
              </p>
            </div>
            <hr className="bg-[#F2C802] w-12 h-0.5 border-0" />
          </div>
        </div>
      </div>


    </div>
  );
};

export default Ourteam;
