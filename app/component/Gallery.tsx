"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Gallery = () => {
  const images = [
    "/pf-1-1.jpg",
    "/pf-2-1.jpg",
    "/pf-3-1.jpg",
    "/pf-4-1.jpg",
    "/pf-5-1.jpg",
    "/pf-6-1.jpg",
    "/pf-7-1.jpg",
    "/pf-8-1.jpg",
    "/pf-9-1.jpg",
    "/pf-10-1.jpg",
    "/pf-11-1.jpg",
    "/pf-12-1.jpg",
  ];

  const [visible, setVisible] = useState(4); //*here
  const [index, setIndex] = useState(0);

  // responsive visible items
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setVisible(4);
      } else {
        setVisible(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = images.length - visible;

  // reset index when visible changes
  useEffect(() => {
    if (index > maxIndex) {
      setIndex(0);
    }
  }, [visible, index, maxIndex]);

  function next() {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }

  function prev() {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }

  return (
    <div className="relative flex items-center justify-center">
      {/* Buttons */}
      <div className="absolute right-0 top-1/3 flex flex-col gap-1 z-10">
        <button
          onClick={next}
          className="bg-amber-300 p-2 hover:bg-black hover:text-amber-300 transition"
        >
          <FaAngleRight />
        </button>
        <button
          onClick={prev}
          className="bg-amber-300 p-2 hover:bg-black hover:text-amber-300 transition"
        >
          <FaAngleLeft />
        </button>
      </div>

      {/* window */}
      <div className="overflow-hidden bg-white">
        {/* track */}
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${index * (100 / visible)}%)`,
          }}
        >
          <div className="w-full md:w-1/4 shrink-0">
            <Image
              src={"/pf-1-1.jpg"}
              width={500}
              height={500}
              alt="gallery image"
              className="w-full  object-cover"
            />

            <h1 className="text-[17px] font-medium text-center py-7 bg-[#F8F8F8]">
              Green House
            </h1>
          </div>

          <div className="w-full md:w-1/4 shrink-0">
            <Image
              src={"/pf-2-1.jpg"}
              width={500}
              height={500}
              alt="gallery image"
              className="w-full  object-cover"
            />

            <h1 className="text-[17px] font-medium text-center py-7 bg-[#F8F8F8]">
              Contemporary Building
            </h1>
          </div>

          <div className="w-full md:w-1/4 shrink-0">
            <Image
              src={"/pf-3-1.jpg"}
              width={500}
              height={500}
              alt="gallery image"
              className="w-full  object-cover"
            />

            <h1 className="text-[17px] font-medium text-center py-7 bg-[#F8F8F8]">
              Twin Tower
            </h1>
          </div>

          <div className="w-full md:w-1/4 shrink-0">
            <Image
              src={"/pf-4-1.jpg"}
              width={500}
              height={500}
              alt="gallery image"
              className="w-full  object-cover"
            />

            <h1 className="text-[17px] font-medium text-center py-7 bg-[#F8F8F8]">
              Modern Skyline
            </h1>
          </div>

          <div className="w-full md:w-1/4 shrink-0">
            <Image
              src={"/pf-5-1.jpg"}
              width={500}
              height={500}
              alt="gallery image"
              className="w-full  object-cover"
            />

            <h1 className="text-[17px] font-medium text-center py-7 bg-[#F8F8F8]">
              Modern Office
            </h1>
          </div>

          <div className="w-full md:w-1/4 shrink-0">
            <Image
              src={"/pf-6-1.jpg"}
              width={500}
              height={500}
              alt="gallery image"
              className="w-full  object-cover"
            />

            <h1 className="text-[17px] font-medium text-center py-7 bg-[#F8F8F8]">
              Country Side House
            </h1>
          </div>

          <div className="w-full md:w-1/4 shrink-0">
            <Image
              src={"/pf-7-1.jpg"}
              width={500}
              height={500}
              alt="gallery image"
              className="w-full  object-cover"
            />

            <h1 className="text-[17px] font-medium text-center py-7 bg-[#F8F8F8]">
              Cube Office
            </h1>
          </div>

          <div className="w-full md:w-1/4 shrink-0">
            <Image
              src={"/pf-8-1.jpg"}
              width={500}
              height={500}
              alt="gallery image"
              className="w-full  object-cover"
            />

            <h1 className="text-[17px] font-medium text-center py-7 bg-[#F8F8F8]">
              London Luxury House
            </h1>
          </div>

          <div className="w-full md:w-1/4 shrink-0">
            <Image
              src={"/pf-9-1.jpg"}
              width={500}
              height={500}
              alt="gallery image"
              className="w-full  object-cover"
            />

            <h1 className="text-[17px] font-medium text-center py-7 bg-[#F8F8F8]">
              Uptown University
            </h1>
          </div>

          <div className="w-full md:w-1/4 shrink-0">
            <Image
              src={"/pf-10-1.jpg"}
              width={500}
              height={500}
              alt="gallery image"
              className="w-full  object-cover"
            />

            <h1 className="text-[17px] font-medium text-center py-7 bg-[#F8F8F8]">
              Sentra Hospital
            </h1>
          </div>

          <div className="w-full md:w-1/4 shrink-0">
            <Image
              src={"/pf-11-1.jpg"}
              width={500}
              height={500}
              alt="gallery image"
              className="w-full  object-cover"
            />

            <h1 className="text-[17px] font-medium text-center py-7 bg-[#F8F8F8]">
              Deluxe Residence
            </h1>
          </div>

          <div className="w-full md:w-1/4 shrink-0">
            <Image
              src={"/pf-12-1.jpg"}
              width={500}
              height={500}
              alt="gallery image"
              className="w-full  object-cover"
            />

            <h1 className="text-[17px] font-medium text-center py-7 bg-[#F8F8F8]">
              Suburban Office
            </h1>
          </div>

          <div className="w-full md:w-1/4 shrink-0">
            <Image
              src={"/pf-1-1.jpg"}
              width={500}
              height={500}
              alt="gallery image"
              className="w-full  object-cover"
            />

            <h1 className="text-[17px] font-medium text-center py-7 bg-[#F8F8F8]">
              Green House
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
