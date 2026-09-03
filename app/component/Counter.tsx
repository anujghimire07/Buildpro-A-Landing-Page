"use client"
import { useState, useEffect, useRef } from "react"

  type Props={
        target: number;
    }

const Counter = ({target}: Props) => {
    const [Count, setCount] = useState<number>(0)
    const ref = useRef<HTMLDivElement | null>(null)
    const [visible, setvisible] = useState<boolean>(false)

    //*detect when in view
    useEffect(() => {
      const observer = new IntersectionObserver(([entry])=>{
        if(entry.isIntersecting){
            setvisible(true);
            observer.disconnect();
        }
      });

      if(ref.current) observer.observe(ref.current);
    
      return () => observer.disconnect()
    }, [])

    //*Counting logic
     useEffect(() => {
    if (!visible) return;

    let start = 0;
    const duration = 1500; // total animation time (ms)
    const increment = target / (duration / 16); // smooth steps

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
        return () => clearInterval(timer);
  }, [visible, target]);
    
  return (
    <div className="font-montserrat" ref={ref}>
      {Count}
    </div>
  )
}

export default Counter
