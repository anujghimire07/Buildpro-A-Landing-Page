import Aboutus from "./component/Aboutus";
import Gallery from "./component/Gallery";
import Hero from "./component/Hero";
import Ourhistory from "./component/Ourhistory";
import Ourteam from "./component/Ourteam";
import Skills from "./component/Skills";
import Why_choose_us from "./component/Why_choose_us";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
         <div className="fixed top-0 left-0 ">
         <div className="fixed bg-[url('/bg-17.jpg')] bg-cover bg-center w-full h-screen"></div>
         </div>

      <div className="relative z-50">
        <Hero />
        <Gallery />
        <Aboutus />
        <Ourhistory />
        <Ourteam />
        <Skills />
        <Why_choose_us />
      </div>
    </div>
  );
}
