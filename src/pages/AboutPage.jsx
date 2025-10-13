import Sidebar from '@/components/layout/Sidebar'
import React from 'react'

const AboutPage = () => {
  return (
    <div className="w-full flex mt-2 mb-8 flex-col gap-8 xl:flex-row xl:my-16 xl:gap-0">
      <Sidebar />
      <div>
        <h1 className="font-rubik text-2xl font-semibold">About Us</h1>

        <div className='mt-6 font-open-sans text-[var(--color-dark-gray)]  text-[16px]'>
          <p className="">
            At Kicks, we believe that great shoes don’t just
            complete an outfit — they define your walk, your comfort, and your
            confidence. Founded with a passion for quality footwear, our mission
            is to bring you stylish, durable, and comfortable shoes that keep up
            with your everyday lifestyle. Whether you’re heading to work,
            hitting the gym, or stepping out for an occasion, we have something
            for everyone. Each pair we sell is carefully selected for its
            craftsmanship, comfort, and design, ensuring you get the best value
            for your money.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage
