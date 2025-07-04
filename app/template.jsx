"use client"
import { motion as m } from "framer-motion"
import useScrollProgress from "@/hooks/useScrollProgress"

// variants
const variants = {
  hidden: { opacity: 0},
  enter: { opacity: 1},
}

const template = ({children}) => {
    const completion = useScrollProgress()
  return (
    <>
        <m.main 
                variants={variants} 
                initial="hidden" 
                animate="enter"
                transition={{type: "linear", duration: 0.4, delay: 0.2 }}>
            {children}
        </m.main>

        <span className="fixed z-50 bg-primary w-5 top-0 right-0 bottom-0 transition-all duration-700" style={{ transform: `translateY(${completion - 100}%)`}}></span>
        
    </>
  )
}
export default template