"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = ({ bgc }: { bgc: string }) => {
  const [show, setShow] = useState(false); // hidden at top

  const [isResponsive, setisResponsive] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShow(true); // show after scrolling down
      } else {
        setShow(false); // hide at top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={` fixed top-0 left-0 w-full z-50  transition-all duration-300 font-montserrat ${
        show ? "md:translate-y-0" : " md:-translate-y-full"
      }`}
      style={{ background: bgc }}
    >
      <div className="max-w-300 px-5 mx-auto flex justify-between items-center md:py-6 pt-4 pb-1">
        <Image src="/logo.png" width={180} height={80} alt="logo" />

        <div className="md:flex md:flex-row flex-col hidden gap-10 ">
          <Link
            href="/" 
            className="text-[13px] text-[#F4F4F5] hover:text-[rgb(255,210,0)] transition"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="text-[13px] text-[#F4F4F5] hover:text-[rgb(255,210,0)] transition"
          >
            Projects
          </Link>
          <Link
            href="/services"
            className="text-[13px] text-[#F4F4F5] hover:text-[rgb(255,210,0)] transition"
          >
            Services
          </Link>
          <Link
            href="/about" 
            className="text-[13px] text-[#F4F4F5] hover:text-[rgb(255,210,0)] transition"
          >
            About Us
          </Link>
          <Link
            href="/blog"
            className="text-[13px] text-[#F4F4F5] hover:text-[rgb(255,210,0)] transition"
          >
            Blog
          </Link>
          <Link
            href="/shop"
            className="text-[13px] text-[#F4F4F5] hover:text-[rgb(255,210,0)] transition"
          >
            Shop
          </Link>
          <Link
            href="/contact"
            className="text-[13px] text-[#F4F4F5] hover:text-[rgb(255,210,0)] transition"
          >
            Contact Us
          </Link>
        </div>

        <button
          className="md:hidden text-2xl text-[white]"
          onClick={() => setisResponsive(!isResponsive)}
        >
          ☰
        </button>
      </div>

      <ul
        className={`md:hidden transition-all duration-300 ease-in-out flex flex-col justify-center items gap-4 px-4 pb-3 overflow-hidden ${
          isResponsive
            ? "max-h-125 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-5"
        }`}
      >
        <li className="pt-5">
          <Link className="text-[white] text-[13px]" href={"/"} onClick={()=>setisResponsive(false)}>
            Home
          </Link>
        </li>
        <hr className="bg-[#B3B3B3] w-full h-px border-0" />
        <li>
          <Link className="text-[white] text-[13px]" href={"/projects"} onClick={()=>setisResponsive(false)}>
            Projects
          </Link>
        </li>
        <hr className="bg-[#B3B3B3] w-full h-px border-0" />
        <li>
          <Link className="text-[white] text-[13px]" href={"/services"} onClick={()=>setisResponsive(false)}>
            Services
          </Link>
        </li>
        <hr className="bg-[#B3B3B3] w-full h-px border-0" />
        <li>
          <Link className="text-[white] text-[13px]" href={"/about"} onClick={()=>setisResponsive(false)}>
            About Us
          </Link>
        </li>
        <hr className="bg-[#B3B3B3] w-full h-px border-0" />
        <li>
          <Link className="text-[white] text-[13px]" href={"/blog"} onClick={()=>setisResponsive(false)}>
            Blog
          </Link>
        </li>
        <hr className="bg-[#B3B3B3] w-full h-px border-0" />
        <li>
          <Link className="text-[white] text-[13px]" href={"/shop"} onClick={()=>setisResponsive(false)}>
            Shop
          </Link>
        </li>
        <hr className="bg-[#B3B3B3] w-full h-px border-0" />
        <li>
          <Link className="text-[white] text-[13px]" href={"/contact"} onClick={()=>setisResponsive(false)}>
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
