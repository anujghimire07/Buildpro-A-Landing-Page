import Animated_button from "./Animated_button"

const Yellowbgc = () => {
  return (
      <div className="bg-[#FFD200] text-[#222222] relative z-10 ">
        <div className="p-5 max-w-300 mx-auto flex md:flex-row flex-col gap-6 justify-between items-center">
          <h1 className="text-[20px] font-medium">
            Looking for best partner for your next construction works?
          </h1>

          <Animated_button text={"HIRE US NOW"} textColor="black" arrowColor="black"  borderColor="black" bgColor="black" hoverTextColor="white" hoverArrowColor="white"/>
        </div>
      </div>
  )
}

export default Yellowbgc
