
import React from 'react'
import amazon from '@/assets/brands/amazon.png'
import casio from '@/assets/brands/casio.png'
import moonstar from '@/assets/brands/moonstar.png'
import randstad from '@/assets/brands/randstad.png'
import startPeople from '@/assets/brands/start-people 1.png'
import start from '@/assets/brands/start.png'
import Marquee from "react-fast-marquee";

import Image from 'next/image'

export default function Companies() {
    const logos = [casio,amazon,moonstar,randstad,startPeople,start]
  return (
    <div className='flex flex-col gap-4 text-center p-2 my-4'>
        <h3 className='text-2xl text-bold mb-3'>We've helped thousands of sales teams</h3>
        <Marquee pauseOnHover={true} pauseOnClick={true}>
            {
                logos.map((logo,idx)=><div
            key={idx}
            className="mx-5 sm:mx-10 md:mx-16 lg:mx-24  transition-all duration-300"
          >
            <Image
              src={logo}
              alt="logo"
              width={120}
              height={60}
              className="object-contain"
            />
          </div>)
            }
        </Marquee>

    </div>
  )
}
