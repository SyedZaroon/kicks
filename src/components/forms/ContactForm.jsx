import React from 'react'
import InputField from '../ui/InputField'
import Button from '../ui/Button'

const ContactForm = () => {
  return (
    <form>
          <div className='grid grid-cols-1 gap-4 xl:grid-cols-2 xl:w-full'>
              <InputField label="Name" type="text" name="name" placeholder='Enter your name' fieldContainerClassName='xl:w-[100%]' />
              <InputField label="Email" type="email" name="email" placeholder='Enter your email' />
              <InputField label="Message" type="text" name="message" placeholder='Enter your message' fieldContainerClassName='xl:col-span-2' />
              <Button label="Send" className='w-full justify-center xl:col-span-2' />
      </div>
    </form>
  )
}

export default ContactForm