import React from 'react'
import location from '@/assets/location-merchant.png'
import Image from 'next/image'
import bgImg from "@/assets/be-a-merchant-bg.png"
export default function BeMerchant() {
  return (
    <div data-aos="zoom-in-up" className=" bg-[#03373D]  text-white p-2 lg:p-20 rounded-4xl bg-no-repeat" style={{backgroundImage: `url(${bgImg.src})` }}>
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className='relative w-48 h-48 md:w-72 md:h-72 lg:w-150  lg:h-70 shadow-gray-50 shadow-2xl rounded-4xl'>
      <Image src={location} fill className='object-contain rounded-4xl' alt='location'/>
    </div>
    <div>
      <h1 className="text-5xl font-bold">Merchant and Customer Satisfaction is Our First Priority</h1>
      <p className="py-6">
       We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
      </p>
      <button className="btn btn-primary rounded-full">Become A Merchant</button>
      <button className="btn  btn-outline ms-4 rounded-full">Earn with Zap Shift Courier</button>
    </div>
  </div>
</div>
  )
}
