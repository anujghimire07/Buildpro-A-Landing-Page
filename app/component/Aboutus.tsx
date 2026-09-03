import Counter from "./Counter";

const Aboutus = () => {
  return (
    <div className="bg-white relative z-70 font-montserrat ">
      <div className="max-w-300 px-5 flex md:flex-row flex-col md:gap-0 gap-7 m-auto py-19">
        <div className="flex-1">
          <h1 className="font-medium text-[28px] pb-3.5 mt-0">About Us</h1>
          <hr className="bg-[#F2C802] w-12 h-0.5 border-0" />
        </div>
        <div className="flex-1 text-[12px] font-normal text-[#777777] leading-[20.5px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.
        </div>
        <div className="flex-1 text-[12px] font-normal text-[#777777] leading-[20.5px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.
        </div>
      </div>

      <div className="bg-[#FFD200] ">
            <div className="max-w-300 px-5 flex md:flex-row flex-col m-auto h-auto py-12 justify-center items-center md:gap-45 gap-10">
                <div className="text-center">
                    <h1 className="text-[32px] font-semibold text-black"><Counter target={8350}/></h1>
                    <p className="text-[14px] font-normal text-[black]">Hours of Works</p>
                </div>

                  <div className="text-center">
                    <h1 className="text-[32px] font-semibold text-black"><Counter target={240}/></h1>
                    <p className="text-[14px] font-normal text-[black]">Projects Completed</p>
                </div>

                  <div className="text-center">
                    <h1 className="text-[32px] font-semibold text-black"><Counter target={852}/></h1>
                    <p className="text-[14px] font-normal text-[black]">Slices of Pizza</p>
                </div>

                  <div className="text-center">
                    <h1 className="text-[32px] font-semibold text-black"><Counter target={615}/></h1>
                    <p className="text-[14px] font-normal text-[black]">Cups of Coffee</p>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Aboutus;
