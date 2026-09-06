
import { FaCheck } from "react-icons/fa";
import Animated_button from "./Animated_button";
import Yellowbgc from "./Yellowbgc";

const Why_choose_us = () => {
  return (
    <div className="bg-[#FFFFFF] font-montserrat ">
      {/* white bgc */}
      <div className="max-w-300 mx-auto  py-15 px-5 flex md:flex-row flex-col justify-center  gap-2  ">
        <div className="flex-1 ">
          <h1 className="text-[28px] font-medium pb-3">Why Choose Us</h1>
          <hr className="bg-[#F2C802] w-14 h-0.5 border-0" />
        </div>
        

        <div className="flex-3 p-2">
          <div className="md:grid md:grid-cols-3 gap-8">
            {/* card 1 */}
            <div className="flex flex-1">
              <div className="px-4 pb-3 pt-1">
                <FaCheck className="text-[#F2C802] text-4xl"/>
              </div>
              <div>
                <h1 className="text-[17px] font-medium">Professional Staff</h1>
                <p className="text-[12px] leading-normal text-[#B3B3B3]">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur.
                </p>
              </div>
            </div>

            {/* card 2 */}
             <div className="flex flex-1">
              <div className="px-4 pb-3 pt-1">
                <FaCheck className="text-[#F2C802] text-4xl"/>
              </div>
              <div>
                <h1 className="text-[17px] font-medium">Save Time and Money</h1>
                <p className="text-[12px] leading-normal text-[#B3B3B3]">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur.
                </p>
              </div>
            </div>

            {/* card 3 */}
             <div className="flex flex-1">
              <div className="px-4 pb-3 pt-1">
                <FaCheck className="text-[#F2C802] text-4xl"/>
              </div>
              <div>
                <h1 className="text-[17px] font-medium">Detailed Estimated</h1>
                <p className="text-[12px] leading-normal text-[#B3B3B3]">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur.
                </p>
              </div>
            </div>

            {/* card 4 */}
             <div className="flex flex-1">
              <div className="px-4 pb-3 pt-1">
                <FaCheck className="text-[#F2C802] text-4xl"/>
              </div>
              <div>
                <h1 className="text-[17px] font-medium">On Time Completion</h1>
                <p className="text-[12px] leading-normal text-[#B3B3B3]">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur.
                </p>
              </div>
            </div>

            {/* card 5 */}
             <div className="flex flex-1">
              <div className="px-4 pb-3 pt-1">
                <FaCheck className="text-[#F2C802] text-4xl"/>
              </div>
              <div>
                <h1 className="text-[17px] font-medium">No Hidden Cost</h1>
                <p className="text-[12px] leading-normal text-[#B3B3B3]">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur.
                </p>
              </div>
            </div>

            {/* card 6 */}
             <div className="flex flex-1">
              <div className="px-4 pb-3 pt-1">
                <FaCheck className="text-[#F2C802] text-4xl"/>
              </div>
              <div>
                <h1 className="text-[17px] font-medium">Zero Complaints</h1>
                <p className="text-[12px] leading-normal text-[#B3B3B3]">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Yellowbgc/>
    </div>
  );
};

export default Why_choose_us;
