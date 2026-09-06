"use client";
import React, { useState } from "react";
import Universal from "./Universal";
import Newyorkmap from "./Newyorkmap";
import Londonmap from "./Londonmap";

const LocationSection = () => {
  const [active, setactive] = useState<string>("New York");
  return (
    <div className="flex-3  font-montserrat">
      <div className="md:flex grid grid-cols-2 bg-[#4E4E4E] ">
        <button autoFocus
          onClick={() => setactive("New York")}
          className="focus:outline-none text-[13px] font-bold px-8 py-2 text-white focus:bg-[#F2C802] focus:text-[#4E4E4E]"
        >
          New York
        </button>
        <button
          onClick={() => setactive("London")}
          className="text-[13px] font-bold px-8 py-2 text-white focus:bg-[#F2C802] focus:text-[#4E4E4E]"
        >
          London
        </button>
        <button
          onClick={() => setactive("Paris")}
          className="text-[13px] font-bold px-8 py-2 text-white focus:bg-[#F2C802] focus:text-[#4E4E4E]"
        >
          Paris
        </button>
        <button
          onClick={() => setactive("Sydney")}
          className="text-[13px] font-bold px-8 py-2 text-white focus:bg-[#F2C802] focus:text-[#4E4E4E]"
        >
          Sydney
        </button>
      </div>

      <div className="py-6">
        {active === "New York" && (
          <div className="flex md:flex-row flex-col gap-8">
            <div className="flex-1"><Newyorkmap/></div>
            <div className="flex-1">
              <Universal />
            </div>
          </div>
        )}
        {active === "London" && (
          <div className="flex md:flex-row flex-col gap-8">
            {" "}
            <div className="flex-1"><Londonmap/></div>
            <div className="flex-1">
              <Universal />
            </div>
          </div>
        )}
        {active === "Paris" && (
          <div className="flex md:flex-row flex-col gap-8">
            {" "}
             <div className="flex-1"><Newyorkmap/></div>
            <div className="flex-1">
              <Universal />
            </div>
          </div>
        )}
        {active === "Sydney" && (
          <div className="flex md:flex-row flex-col gap-8">
            {" "}
             <div className="flex-1"><Londonmap/></div>
            <div className="flex-1">
              <Universal />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationSection;
