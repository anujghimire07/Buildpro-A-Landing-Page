"use client";
import { useEffect, useState, useRef } from "react";

const Skill_bar = ({ limit }: {limit: number}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setvisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setvisible(true);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className="w-full ">
      {/* Grey background bar */}

      <div className="w-full h-1 bg-gray-300 ">
        {/* Filled bar */}

         <div
          className="h-1 bg-yellow-400 transition-all duration-1000"
          style={{
            width: visible ? `${limit}%` : "0%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Skill_bar;
