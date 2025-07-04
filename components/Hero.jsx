'use client'

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RiMenFill, RiBookmark3Fill, RiBodyScanFill, RiServiceFill } from "react-icons/ri"
import Link from "next/link";

// Components
import Socials from "./Socials";
import HeroImg from "./HeroImg"; 
import Badge  from "./Badge";


// React Awesome Reveal
import { Fade } from "react-awesome-reveal";


const Hero = () => {
  return (
   <section className="py-12 xl:py-24 h-[auto] bg-bottom p-4">
        <div className="container mx-auto">
            <div className="flex justify-between gap-y-8">
                {/* Left side content */}
                <div className="flex max-w-[800px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                <Fade direction='up' triggerOnce={true} delay={400} cascade damping={1e-1}>
                    <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px] items-center justify-center flex">
                        Photography
                    </div>
                </Fade>
                <Fade direction='up' triggerOnce={true} delay={600} cascade damping={1e-1}>
                    <h1 className="h1 uppercase">Let&apos;s make magic!</h1>
                </Fade>
                <Fade direction='up' triggerOnce={true} delay={800} cascade damping={1e-1}>
                    <p className="subtitle max-w-[590px] mt-4 mx-auto xl:mx-0">
                        We are a team of passionate photographers 
                        dedicated to capturing the essence of your 
                        special moments. Whether it&apos;s a wedding, 
                        a family gathering, or a corporate event, 
                        we bring creativity and professionalism to 
                        every shoot.
                    </p>
                </Fade>
                <Fade direction='up' triggerOnce={true} delay={1000} cascade damping={1e-1}>
                    {/* Subscribe Button */}
                    <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                        <div className="flex w-full gap-x-4">
                            <label className="sr-only">Email Address</label>
                            <Input type="email" id="email" placeholder="Enter your email" />
                            <Link href='/contact'>
                                <Button className="gap-x-2 bg-black">
                                    Subscribe <RiMenFill size={18} />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Fade>
                <div className="flex justify-center">
                <Fade direction='up' triggerOnce={true} delay={1200} cascade damping={1e-1}>
                    <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconStyles='text-foreground text-[22px] hover:text-primary transition-all' />
                </Fade> 
                </div>    
                </div>
                <Fade direction='right' triggerOnce={true} delay={600} cascade damping={1e-1}>
                        {/* Benner Image */}
                    <div className="hidden xl:flex relative">
                        <HeroImg imgSrc='/about/photography.svg' containerStyles='w-[550px] h-[475px] bg-no-repeat relative bg-bottom'/>
                    </div>
                </Fade>
            
            </div>
            {/* Badge section */}
            <div className="py-24 sm:py-32">
            <Fade direction='up' triggerOnce={true} delay={600} cascade damping={1e-1}>
                <div className="mx-auto mx-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                          {/* badge 1 */}
                          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-muted-foreground">Years of Expirience</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                <Badge icon={<RiBookmark3Fill />} endCountNum={12} endCountText='+'/>
                            </dd>
                        </div>
                        {/* badge 2 */}
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-muted-foreground">Followers</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                <Badge icon={<RiBodyScanFill />} endCountNum={500} endCountText='k'/>
                            </dd>
                        </div>
                        {/* badge 3 */}
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-muted-foreground">Projects</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                <Badge icon={<RiServiceFill />} endCountNum={65} endCountText='+'/>
                            </dd>
                        </div>
                        </dl>
                    </div>
                </Fade>
            </div>
        </div>
   </section>
  )
}
export default Hero