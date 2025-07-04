'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Fade } from 'react-awesome-reveal'

const Faq = () => {
  return (
    <section className='p-6'>
        <div className="container mx-auto">
        <Fade direction='up' triggerOnce={true} delay={400} cascade damping={1e-1}>
            <div className='w-full pt-12 mb-6 xl:mb-24'>
                <h2 className='section-title mb-12 text-center mx-auto'>Our Studio</h2>
            </div>
        </Fade>
        <Fade direction='up' triggerOnce={true} delay={600} cascade damping={1e-1}>
            <div>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className='text-lg font-semibold'>
                            <div className='ms-3'>
                                01. What is Crishna?
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className='text-base'>
                            Crishna is a professional photography and videography studio specializing in capturing moments that matter. We offer a range of services including weddings, events, portraits, and commercial photography.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className='text-lg font-semibold'>
                            <div className='ms-3'>
                                02. What services do you offer?
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className='text-base'>
                            We offer a variety of services including wedding photography, event coverage, portrait sessions, commercial photography, and videography. Our team is equipped to handle projects of all sizes and styles.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className='text-lg font-semibold'>
                            <div className='ms-3'>
                                03. How can I book a session?
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className='text-base'>
                            Booking a session with us is easy! You can contact us through our website or social media channels. We will discuss your requirements, check our availability, and finalize the details to ensure a smooth booking process.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </Fade>
        </div>
    </section>
  )
}
export default Faq