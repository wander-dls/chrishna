"use client"

import {useState, useEffect } from "react"
import ThemeToggle from "@/components/ThemeToggle"
import Logo from "@/components/Logo"
import Nav from "@/components/Nav"
import MobileNav from "@/components/MobileNav"
import { usePathname } from "next/navigation"

const Header = () => {
    const [ header, setHeader ] = useState(false)
    const pathname = usePathname()
    
    useEffect(() => {
        const scrollYPos = window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false)
        })
        return () => window.removeEventListener('scroll', scrollYPos)
    }, [])

  return (
   <header className={`${header ? 'py-4 bg-white shadow-lg dark:bg-accent' : 'py-6 dark:bg-transparent'} sticky top-0 z-30 transition-all p-6 ${pathname === '/' && 'bg-[#fff]'}`}>
    <div className="container mx-auto">
        <div className="flex items-center justify-between">
            <Logo />

            <div className="flex items-center gap-x-6">
                {/* Navigation section */}
                <Nav
                    containerStyles='hidden xl:flex gap-x-8 items-center'
                    linkStyles='relative hover:text-primary transition-all'
                    underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full' />
                {/* Theme toggle */}
                <ThemeToggle />
                {/* Mobile Navigation */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </div>
    </div>
        
   </header>
  )
}
export default Header