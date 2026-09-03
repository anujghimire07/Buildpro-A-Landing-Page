"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = ({ bgc }: { bgc: string}) => {
  const [show, setShow] = useState(false); // hidden at top

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
      className={`fixed top-0 left-0 w-full z-50  transition-all duration-300 font-montserrat ${
        show
          ? "translate-y-0"
          : " -translate-y-full"
      }`}
      style={{ background: bgc }}
    >
      <div className="max-w-300 px-5 mx-auto flex justify-between items-center">
        
        <Image
          src="/logo.png"
          width={180}
          height={80}
          alt="logo"
        />

        <div className="flex gap-10 py-6">
          <Link href="/" className="text-[13px] text-[#F4F4F5] hover:text-[rgb(255,210,0)] transition">
            Home
          </Link>
          <Link href="/projects" className="text-[13px] text-[#F4F4F5] hover:text-[rgb(255,210,0)] transition">
            Projects
          </Link>
          <Link href="/services" className="text-[13px] text-[#F4F4F5] hover:text-[rgb(255,210,0)] transition">
            Services
          </Link>
          <Link href="/about" className="text-[13px] text-[#F4F4F5] hover:text-[rgb(255,210,0)] transition">
            About Us
          </Link>
          <Link href="/blog" className="text-[13px] text-[#F4F4F5] hover:text-[rgb(255,210,0)] transition">
            Blog
          </Link>
          <Link href="/shop" className="text-[13px] text-[#F4F4F5] hover:text-[rgb(255,210,0)] transition">
            Shop
          </Link>
          <Link href="/contact" className="text-[13px] text-[#F4F4F5] hover:text-[rgb(255,210,0)] transition">
            Contact Us
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Navbar;