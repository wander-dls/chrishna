
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


export default function HomePage() {
    return (
        <main className="grid md:grid-cols-2 items-center justify-center min-h-screen">
            <div className="text-gray-400 text-left p-5 py-20 md:p-10">
                <h1>Home Page</h1>
                <p>Lorem Ipsum is simply dummy text of the 
                    printing and typesetting industry. Lorem 
                    Ipsum has been the industry &apos; s standard dummy
                    text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled 
                    it to make a type specimen book. It has survived 
                    not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. 
                    </p>
                    <div>
                        <Button variant="ghost" className="border-1 rounded-full bg-blue-100/10 shadow-2xs hover:bg-blue-100/20 transition-all duration-300 mt-8">
                            <Link href='/about'>
                                Learn More
                            </Link>
                        </Button>
                    </div>
            </div>
            <div className='md:p-10 p-5 flex justify-center items-center'>
                <Image src='/images/home-image.jpg' alt='Home Image' width={350} height={500} className='rounded-lg shadow-lg md:mt-10 -mt-20 mb-2' />
            </div>
        </main>
    )
}