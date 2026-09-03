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

  const [visible, setvisible] = useState<number>(1)
  const [index, setIndex] = useState(0);

   useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setvisible(4); // desktop
      } else {
        setvisible(1); // mobile
      }
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

   useEffect(() => {
    if (index > images.length - visible) {
      setIndex(0);
    }
  }, [visible]);

  const maxIndex = images.length - visible;

  function next() {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }

  function prev() {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }

  return (
    <div className="relative flex items-center justify-center">
      {/* buttons */}
      <div className="absolute right-0 top-1/3 flex flex-col gap-1 z-10">
        <button
          onClick={next}
          className="bg-amber-300 p-2 hover:bg-black hover:text-amber-300 transition"
        >
          <FaAngleLeft />
        </button>

        <button
          onClick={prev}
          className="bg-amber-300 p-2 hover:bg-black hover:text-amber-300 transition"
        >
          <FaAngleRight />
        </button>
      </div>

      {/* window */}
      <div className="overflow-hidden w-full">
        {/* track */}
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${index * (100 / visible)}%)`,
          }}
        >
          {images.map((img, i) => (
            <div key={i} className="w-full md:w-1/4 shrink-0">
              <Image
                src={img}
                width={300}
                height={300}
                className="w-full h-auto"
                alt="gallery image"
              />
              <h1 className="text-[17px] font-medium text-center py-7 bg-[#F8F8F8]">
                Green House
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
