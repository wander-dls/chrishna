'use client'

import { icons } from '@/constants'
import Link from 'next/link'

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={`${containerStyles}`}>
        {icons.map((icon, index) => {
            return (
                <Link href={icon.path} key={index}>
                    <icon.icon className={`${iconStyles}`} /><div>{icon.icon}</div>
                </Link>
            )
        })}
    </div>
  )
}
export default Socials