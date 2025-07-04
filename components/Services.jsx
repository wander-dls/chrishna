
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { services } from '@/constants'
import { Fade } from 'react-awesome-reveal'



const Services = () => {
  return (
    <section className='mb-12 xl:mb-36'>
        <div className='container mx-auto'>
        <Fade direction='up' triggerOnce={true} delay={400} cascade damping={1e-1}>
            <div>
                <h2 className='section-title mb-6 xl:mb-24 text-center mx-auto'>Our Services</h2>
            </div>
        </Fade>
        <Fade direction='up' triggerOnce={true} delay={600} cascade damping={1e-1}>
            <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-x-8 xl:p-6'>
                {services.map((service, index) =>{
                    return (
                        <Card key={index} className='relative w-full max-w-[425px] h-[450px] flex flex-col pb-10 justify-center items-center cursor-pointer hover:bg-tertiary dark:hover:bg-white/10 transition-all duration-700'>
                            <CardHeader className='text-primary'>
                                <div className='w-[80px] h-[80px] mb-4 flex items-center justify-center rounded-full bg-primary text-white absolute -bottom-6 right-6'>
                                    <service.icon size={48} strokeWidth={1} />
                                </div>
                            </CardHeader>
                            <CardContent className='text-center'>
                                <CardTitle className='mb-4'>
                                    {service.title}
                                </CardTitle>
                                <CardDescription className='text-lg'>
                                    {service.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
            </Fade>
        </div>
    
    </section>
  )
}
export default Services