"use client"
import { FaArrowUp } from "react-icons/fa";

const Scrolltotopbtn = () => {
  return (
    <div>
       <button className="fixed md:bottom-12 z-60 md:right-12 bottom-5 right-5 bg-[#FFD200] p-2 rounded hover:bg-[black] hover:text-[#FFD200] transition duration-200" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} ><FaArrowUp /></button>
    </div>
  )
}

export default Scrolltotopbtn
