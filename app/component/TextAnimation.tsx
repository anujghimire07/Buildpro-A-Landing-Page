"use client";

import { useEffect, useState } from "react";

const TextAnimation = () => {
  const texts: string[] = [
    "High Innovations, Strong Foundations",
    "We Are Award Winning Company",
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade out

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setFade(true); // fade in new text
      }, 300); // match animation duration
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-12 flex items-center justify-center overflow-hidden">
      <p
        className={`text-[28px] font-normal text-[#F2C802] transition-all duration-300 ${
          fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
        }`}
      >
        {texts[index]}
      </p>
    </div>
  );
};

export default TextAnimation;