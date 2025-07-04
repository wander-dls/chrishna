'use client';

import { useState } from 'react';
import { galleryImages } from '@/constants';
import GalleryCard from '@/components/GalleryCard';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';

const uniqueCategories = [
  'all projects',
  ...new Set(galleryImages.map(image => image.category))
]



const Portfolio = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');

  const filteredImages = galleryImages.filter((image) => {
    return category === 'all projects' ? image : image.category === category;
 })

  return (
    <section className="min-h-screen pt-12 p-6"> 
        <div className="container mx-auto">
            <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
              My Portfolio
            </h2>
            <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
                <TabsList className='w-full  h-full grid md:grid-cols-4 lg:max-w-[740px] mb-12 mx-auto md:border dark:border-none'>
                {
                    categories.map((category, index) => {
                      return (
                        <TabsTrigger value={category} key={index} onClick={() => setCategory(category)} className='capitalize w-[162px] md:w-auto'>
                          {category}

                        </TabsTrigger>
                      )
                    })
                  }
                </TabsList>
                  <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 '>
                    {
                      filteredImages.map((image, index) => {
                        return (
                          <TabsContent value={category} key={index}>
                            <GalleryCard project={image} />
                          </TabsContent>
                        )
                      })
                    }
                  </div>
            </Tabs>
        </div>
    </section>
  )
}
export default Portfolio