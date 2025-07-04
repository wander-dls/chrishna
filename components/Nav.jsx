import {  navLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion as m } from 'framer-motion';

const Nav = ({containerStyles, linkStyles, underlineStyles}) => {

    const path = usePathname()

  return (
   <nav className={`${containerStyles}`}>
        {navLinks.map((link, index) => {
            return (
                <Link 
                key={index} 
                href={link.path} 
                className={`capitalize ${linkStyles}`}>
                    {link.path === path && (
                        <m.span
                            initial={{ y: -100}}
                            animate={{ y: 0}}
                            transition={{ tyope: 'tween'}}
                            layoutId='underline'
                            className={`${underlineStyles}`}></m.span>
                    )}
                    {link.name}
                </Link>
            )
        })}
   </nav>
  )
}
export default Nav