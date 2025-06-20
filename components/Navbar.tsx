"use client"

import { navLinks } from "@/constants/index"
import Link from "next/link"
import { Button } from "./ui/button"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer"
import { IoMenu } from "react-icons/io5"

function Navbar() {
    const isDesktop = useMediaQuery("(min-width: 768px)")
  return (
    <nav className="flex fixed w-full justify-between items-center p-4 backdrop-blur-xl text-gray-400 shadow shadow-gray-500 z-50">
        <div className="text-2xl font-bold">
            
            <Link href="/">
                Chrishna
            </Link>
        </div>
        <div>
        { isDesktop ? (
                <ul className="flex space-x-4">
                {navLinks.map((link) => (
                    <li key={link.name}>
                       <Button variant="ghost" className="border-1 rounded-full bg-blue-100/10 shadow-2xs hover:bg-blue-100/20 transition-all duration-300">
                        <Link href={link.href}>
                                {link.name}
                            </Link>
                       </Button>
                    </li>
                ))}
            </ul>
        ) : (
            <div className="z-59">
                <Drawer direction="right">
                    <DrawerTrigger>
                        <Button variant="ghost" className="border-1 rounded-full bg-blue-100/10 shadow-2xs hover:bg-blue-100/20 transition-all duration-300">
                            <IoMenu className="text-2xl" />
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent>
                    <ul className="flex flex-col space-x-4">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                            <Button variant="ghost" className=" bg-blue-100/10 shadow-2xs hover:bg-blue-100/20 transition-all duration-300 w-full">
                                <Link href={link.href}>
                                        {link.name}
                                    </Link>
                            </Button>
                            </li>
                        ))}
                    </ul>
                    <DrawerHeader className="text-center">
                        <DrawerTitle className="text-2xl font-bold">
                            Chrishna
                        </DrawerTitle>
                    </DrawerHeader>
                    </DrawerContent>
                </Drawer>
            </div>
       
        )}
        </div>
    </nav>
  )
}
export default Navbar