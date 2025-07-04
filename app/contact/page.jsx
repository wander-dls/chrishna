'use client'

import Form from "@/components/Form"
import { Fade } from "react-awesome-reveal"

const ContactPage = () => {
  return (
    <section className="min-h-screen xl:px-20 p-6 xl:p-0">
      <Fade direction='up' triggerOnce={true} delay={400} cascade damping={1e-1}>
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 mb-6 xl:mb-24">
          {/* left side */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[300px] h-[2px] bg-primary"></span>
              hello
            </div>
            <h1 className="h1 max-w-md mb-8">Let&apos;s work together</h1>
            <p className="subtitle max-w-[400px]">
              I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>
          {/* right side */}
          <div className="lg:mt-24">
            <Form />
          </div>
        </div>
      </div>
      </Fade>
    </section>
  )
}
export default ContactPage