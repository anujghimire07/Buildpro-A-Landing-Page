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
      {/* <div className="absolute top-0 bg-cover bg-center h-screen">
      <Image src={"/bg-17.jpg"} fill alt="Bg images"></Image>
       <Image src={"/wide1-1.jpg"} fill alt="Bg images"></Image>
        <Image src={"/wide2-1.jpg"} fill alt="Bg images"></Image>
      </div> */}

      {/* <div className=""> */}
        <Hero />
        <Gallery />
        <Aboutus />
        <Ourhistory />
        <Ourteam />
        <Skills />
        <Why_choose_us />
      {/* </div> */}

    </div>
  );
}
