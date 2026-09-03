import Animated_button from "./Animated_button";
const Ourhistory = () => {
  return (
    <div>
      <div className="font-montserrat flex justify-start items-center bg-[url('/wide1-1.jpg')] bg-cover bg-center text-white">
        <div className="h-auto w-1/2 bg-black/50 p-16">
          <div className=" h-auto  flex flex-col gap-6">
            {/* title */}
            <div className="w-full">
              <h1 className="font-medium text-[28px] pb-3.5">Our History</h1>
              <hr className="bg-[#F2C802] w-12 h-0.5 border-0" />
            </div>

            {/* middle div */}
            <div className="flex mb-8"> 
              <div className="flex-2 flex flex-col items-center gap-18">
                <div className="font-medium text-[17px] py-2 border-white border-2 text-center px-6">2006</div>
                <div className="font-medium text-[17px] py-2 border-white border-2 text-center px-6">2008</div>
                <div className="font-medium text-[17px] py-2 border-white border-2 text-center px-6">2009</div>
              </div>

              <div className="flex-1  ">
                <div className="w-px h-full bg-[#27251E] relative m-auto">
                  {/* top circle */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-yellow-400 rounded-full"></div>

                  {/* middle circle */}
                  <div className="absolute top-35 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-yellow-400 rounded-full"></div>

                  {/* bottom circle */}
                  <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-3 h-3 bg-yellow-400 rounded-full"></div>
                </div>
              </div>

              <div className="flex-10  flex flex-col gap-8 py-3">
                <div>
                  <h1 className="text-[17px] font-medium text-[#FAF9F9] mb-1">
                    Beginning Our Services
                  </h1>
                  <p className="text-[12px] font-normal text-[#FAF9F9]">
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat.
                  </p>
                </div>

                <div>
                  <h1 className="text-[17px] font-medium text-[#FAF9F9] mb-1">
                    Offering More Services
                  </h1>
                  <p className="text-[12px] font-normal text-[#FAF9F9]">
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat.
                  </p>
                </div>

                <div>
                  <h1 className="text-[17px] font-medium text-[#FAF9F9] mb-1">
                    Opening Our First Branch Office
                  </h1>
                  <p className="text-[12px] font-normal text-[#FAF9F9]">
                   Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>

            {/* lower div */}
            <div className="flex justify-end w-full">
              <Animated_button
                text={"READ MORE"}
                textColor="white"
                arrowColor="white"
                borderColor="white"
                bgColor="white"
                hoverTextColor="black"
                hoverArrowColor="black"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourhistory;
