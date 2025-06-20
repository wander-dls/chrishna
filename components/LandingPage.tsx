"use client"

import Image from "next/image"
import { motion as m } from "framer-motion"

const LandingPage = () => {
  return (
<main  className="relative flex items-center justify-center overflow-hidden h-screen z-20">
  <div>
    <div>
        <Image src="/images/landing-bg.jpg" alt="Landing Background" layout="fill" objectFit="cover"  /> 
    </div>
    <m.div initial={{ opacity: 0, y: 20}} animate={{ opacity: 1, y: 1}}transition={{ duration: 1, delay: 0.5, ease: [0, 0.71, 0.2, 1.01]}} className="relative z-10 flex flex-col items-center text-center justify-center min-h-screen text-white mt-120">
        <h1 className="text-8xl md:text-9xl font-bold tracking-tighter">Chrishna</h1>
        <p className="text-lg mb-8">Your one-stop solution for all things photography.</p>
    </m.div>
    </div>
</main>
  )
}
export default LandingPage