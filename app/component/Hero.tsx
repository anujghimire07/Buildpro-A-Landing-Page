import Top from "./Top";
import HeroNavbar from "./HeroNavbar";
import TextAnimation from "./TextAnimation";

const Hero = () => {
  return (
    <div className="relative bg-transparent bg-cover bg-center h-screen">
 
      {/* TOP */}
      <div className="absolute top-0 w-full z-10">
        <Top />
        <HeroNavbar />
      </div>

      {/* CENTER CONTENT */}
      <div className="h-full flex justify-center  items-center font-montserrat text-center">

        <div className="flex flex-col items-center">

          <div>
            <span className="md:text-[120px] text-[45px] text-white font-extrabold tracking-tighter">
              welcome
            </span>
            <span className="md:text-[120px] text-[45px] font-extrabold text-[#FFD200]">
              .
            </span>
          </div>

          <TextAnimation />

          <button className="mt-6 bg-[#FFD200] text-[14px] font-bold text-black py-3 px-7 hover:bg-[#E3BC07] transition">
            VIEW SERVICES
          </button>

        </div>

      </div>

    </div>
  );
};

export default Hero;