import Image from "next/image";
import Link from "next/link";

const HeroNavbar = () => {
  // const navitems: string[] = [
  //   "Home",
  //   "Projects",
  //   "Services",
  //   "About Us",
  //   "Blog",
  //   "Shop",
  //   "Contact Us",
  // ];
  return (
    <div className=" transition-all md:block hidden duration-300 font-montserrat relative z-20">
      <div className="max-w-300 px-5 mx-auto flex justify-between items-center">
        <Image src="/logo.png" width={180} height={80} alt="logo" />

        <div className="flex gap-10 py-6">
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
        {/* <div className="flex gap-10 py-6">
          {navitems.map((items, i) => (
            <Link
              href="#"
              key={i}
              className="text-[13px] text-[#F4F4F5] hover:text-[#F2C802] transition"
            >
              {items}
            </Link>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default HeroNavbar;
