import { FaFacebook , FaInstagram, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex items-center justify-between px-4 text-center text-gray-400 bg-gray-800 -mt-6 z-40">
         <div>
         <p>&copy; {new Date().getFullYear()} Chrishna Photograhy. All rights reserved.</p>
         </div>
         <div>
            <p className='flex items-center justify-center  space-x-4'>
                <Link href="#">
                    <FaFacebook />
                </Link>
                <Link href="https://www.instagram.com/chrishnaphotography">
                    <FaInstagram />
                </Link>
                <Link href="#">
                    <FaTwitter />
                </Link>
            </p>
         </div>
    </footer>
  )
}
export default Footer