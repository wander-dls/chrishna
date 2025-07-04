import Image from 'next/image'
import Link from 'next/link'


function Logo() {
  return (
    <Link href="/">
        <Image
            src="/images/logo.svg" 
            width={55}
            height={55}
            priority alt=''/>
    </Link>
  )
}
export default Logo