import Top from "../component/Top";
import HeroNavbar from "../component/HeroNavbar";
import LocationSection from "./location/LocationSection";

const page = () => {
  return (
    <div className="relative font-montserrat">
      <div className="fixed top-0 bg-[url('/subheader-6-1.jpg')] w-screen h-80  bg-cover bg-center z-0"></div>

      <div className="absolute top-0 w-full z-30">
        <Top />
        <HeroNavbar />
      </div>

      <div className="relative z-20 max-w-300 mx-auto px-5 h-80 flex flex-col justify-center items-center gap-4">
        <h1 className="text-[32px] text-[rgb(236,239,243)] font-semibold">
          CONTACT US
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
            Contact Us
          </span>
        </div>
      </div>

      {/* main section  start*/}
      <div className="relative z-10 bg-white">
        <div className="max-w-300 px-5 mx-auto  py-16 h-auto">
          <div className="flex md:flex-row flex-col  gap-4">
            <LocationSection />
            <form
              action="https://formspree.io/f/xqpkdqbd"
              className="bg-[#F5F5F5] flex flex-col gap-8 flex-1 p-8 items-start ml-3 "
              method="POST"
            >
              <div>
                <h1 className="text-[17px] font-medium pb-3 ">
                  Send Us Message
                </h1>
                <hr className="bg-[#F2C802] w-12 h-0.5 border-0" />
              </div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="bg-white p-2.5 focus:outline-none border border-[#DDDDDD] focus:border-[#F2C802] transition duration-200 placeholder:text-[14px] w-full"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="bg-white p-2.5 focus:outline-none border border-[#DDDDDD]  focus:border-[#F2C802] transition duration-200 placeholder:text-[14px] w-full"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                className="bg-white p-2.5 focus:outline-none border border-[#DDDDDD] focus:border-[#F2C802] transition duration-200 placeholder:text-[14px] w-full h-40"
              ></textarea>

              <button
                type="submit"
                className="text-[12px] text-[#656A6F] font-medium border border-[#AAA9A9] px-6 py-1 hover:text-white hover:bg-black transition duration-400 "
              >
                SUBMIT FORM
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* main section end  */}
    </div>
  );
};

export default page;
