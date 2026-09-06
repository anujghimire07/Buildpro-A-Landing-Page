import Top from "../component/Top";
import HeroNavbar from "../component/HeroNavbar";

const page = () => {
  return (
    <div className="relative bg-[url('/UnderConstruction.jpg')] bg-cover bg-center bg-black text-[white] font-montserrat ">
      <div className="absolute top-0 w-full z-30">
        <Top />
        <HeroNavbar />
      </div>
      <div className="  mx-auto max-w-300 px-5 text-center flex justify-center items-center h-screen">
       <div>
         Under Construction! <br /> Please go to<span className="text-[#FFD200]"> Home </span>page, <span className="text-[#FFD200]"> Services </span>page,<span className="text-[#FFD200]"> About us </span>page, and<span className="text-[#FFD200]"> Contact Us </span>page
       </div>
      </div>
    </div>
  );
};

export default page;
