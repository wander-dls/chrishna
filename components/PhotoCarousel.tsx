import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { carouselImages } from "@/constants/index"

const PhotoCarousel = () => {
  return (
   <>
   
   <Carousel className=" w-[300px] z-59">
      <CarouselContent>
        {carouselImages.map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="relative h-100 w-full flex items-center justify-center">
                  <Image src={carouselImages[index]} alt={`Image ${index + 1}`} fill={true} objectFit="cover" />
                  <span className="text-4xl font-semibold">{index + 1}</span>
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
   </>
  )}

export default PhotoCarousel