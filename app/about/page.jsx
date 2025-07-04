import { infoData } from '@/constants';
import { Fade } from 'react-awesome-reveal';
import HeroImg from '@/components/HeroImg';

const AboutPage = () => {
  return (
    <section className='pb-12 xl:py-24 p-6'>
        <div className='container mx-auto'>
        <Fade direction='up' triggerOnce={true} delay={400} cascade damping={1e-1}>
            <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
                About Us
            </h2>
        </Fade>
            <div className='flex flex-col xl:flex-row'>
            <Fade direction='up' triggerOnce={true} delay={600} cascade damping={1e-1}>
               <div className='flex-1 relative xl:flex overflow-hidden p-8'>
                  <HeroImg containerStyles='xl:w-[505px] xl:h-[505px] w-[350px] h-[350px] bg-no-repeat relative overflow-hidden mx-auto xl:mx-0' imgSrc='/about/profile.png' />
               </div>
            </Fade>
               <div className='flex-1'>
                    <div className='text-lg mt-12 xl:mt-3'>
                    <Fade direction='right' triggerOnce={true} delay={600} cascade damping={1e-1}>
                        <div className='text-center xl:text-left'>
                            <h3 className='h3 mb-4'>Let&apos;s plan your perfect photoshoot</h3>
                            <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                                We are a team of professional photographers and videographers dedicated to capturing your most precious moments. With years of experience in the industry, we specialize in creating stunning visual stories that you will cherish forever.
                            </p>
                            <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                                Our passion for photography and videography drives us to deliver exceptional quality and creativity in every project we undertake. Whether it&apos;s a wedding, family portrait, corporate event, or any special occasion, we are committed to providing you with a personalized experience that exceeds your expectations.
                            </p>
                            <Fade direction='right' triggerOnce={true} delay={700} cascade damping={1e-1}>
                            <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                                {infoData.map((item, index) => {
                                    return (
                                      <div className='flex items-center gap-x-4 mx-auto xl:mx-0' key={index}>
                                        <item.icon className='text-primary'/>
                                        <div>{item.text}</div>
                                      </div>
                                    )
                                })}
                            </div>
                            </Fade>
                        </div>
                    </Fade>
                    </div>
               </div>
            </div>
        </div>
    </section>
  )
}
export default AboutPage