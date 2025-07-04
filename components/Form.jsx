'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { UserCheck, MailIcon, MoveRight, MessageSquare, UserRoundCheck, Building } from 'lucide-react'
import { Fade } from 'react-awesome-reveal'


const Form = () => {
  return (
    <form className='flex flex-col gap-y-4'>
        <Fade direction='right' triggerOnce={true} delay={400} cascade damping={1e-1}>
        <div className='relative flex items-center'>
            <Input type='name' id='first-name' placeholder='First Name'size={20} />
            <UserCheck className='absolute right-6' size={20} />
        </div>
        </Fade>
        <Fade direction='right' triggerOnce={true} delay={500} cascade damping={1e-1}> 
        <div className='relative flex items-center'>
            <Input type='name' id='last-name' placeholder='Last Name'/>
            <UserRoundCheck className='absolute right-6' />
        </div>
        </Fade>
        <Fade direction='right' triggerOnce={true} delay={600} cascade damping={1e-1}>
        <div className='relative flex items-center'>
            <Input type='email' id='email' placeholder='Email' />
            <UserRoundCheck className='absolute right-6' size={20} />
        </div>
        </Fade>
        <Fade direction='right' triggerOnce={true} delay={700} cascade damping={1e-1}>
        <div className='relative flex items-center'>
            <Textarea id='message' placeholder='Type Your Message Here...'/>
            <MessageSquare className='absolute right-6 top-4' size={20} />
        </div>
        </Fade>
        <Fade direction='right' triggerOnce={true} delay={800} cascade damping={1e-1}>
        <Button className='flex items-center gap-x-1 max-w-[165px]'>
            Let&apos;s Talk
            <MoveRight size={20} />
        </Button>
        </Fade>
    </form>
  )
}
export default Form