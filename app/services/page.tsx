import { carouselImages } from "@/constants"
import Image from "next/image"

const ServicePage = () => {
  return (
    <main className=" min-h-screen flex items-center justify-center text-gray-400 tracking-tight">
        <div className="grid grid-cols-3 w-[700px] h-[400px] space-y-2">
          {carouselImages.map((image, index) => (
            <div key={index} className="flex items-center justify-center ">
                <Image
                  src={image}
                  alt="images"
                  width={150}
                  height={300}
                  className="rounded-lg border border-yellow-200 shadow-lg shadow-gray-500 space-y-2 hover:scale-105 transition-transform duration-300 ease-in-out"  
                />
            </div>
          ))}
        </div>
    </main>
  )
}
export default ServicePage