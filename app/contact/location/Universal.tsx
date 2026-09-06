import React from "react";

const Universal = () => {
  return (
    <div className="font-montserrat">
      <div className="flex flex-col gap-4 justify-center mt-5">
        <div>
          <h1 className="text-[12px] font-bold text-[rgb(85,85,85)]">
            Address
          </h1>
          <p className="text-[12px] font-normal text-[#656A6F]">
            Collins Street West, Victoria 8007 Australia
          </p>
        </div>

        <div>
          <h1 className="text-[12px] font-bold text-[rgb(85,85,85)]">Phone:</h1>
          <p className="text-[12px] font-normal text-[#656A6F]">
            (208) 333 9296
          </p>
        </div>

        <div>
          <h1 className="text-[12px] font-bold text-[rgb(85,85,85)]">Fax:</h1>
          <p className="text-[12px] font-normal text-[#656A6F]">
            (208) 333 9296
          </p>
        </div>

        <div>
          <h1 className="text-[12px] font-bold text-[rgb(85,85,85)]">Email:</h1>
          <p className="text-[12px] font-normal text-[#656A6F]">
            contact@buildpro.com
          </p>
        </div>

        <div>
          <h1 className="text-[12px] font-bold text-[rgb(85,85,85)]">Web:</h1>
          <p className="text-[12px] font-normal text-[#656A6F]">
            contact@buildpro.com
          </p>
        </div>

        <div>
          <h1 className="text-[12px] font-bold text-[rgb(85,85,85)]">Open:</h1>
          <p className="text-[12px] font-normal text-[#656A6F]">
            Sunday - Friday 08:00 - 18:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Universal;
