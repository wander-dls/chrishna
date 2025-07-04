'use client'

import { Fade } from "react-awesome-reveal"
import { galleryImages } from "@/constants"
import GalleryCard from "./GalleryCard"

const Gallery = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
        <div className="container mx-auto">
        <Fade direction='up' triggerOnce={true} delay={400} cascade damping={1e-1}>
            <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                My Gallery
            </h2>
        </Fade>
        <Fade direction='up' triggerOnce={true} delay={600} cascade damping={1e-1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {galleryImages.map((project, index) => {
                    return (
                        <GalleryCard key={index} project={project} />
                    )
                })}
            </div>
        </Fade>
        </div>
    </section>
  )
}
export default Gallery