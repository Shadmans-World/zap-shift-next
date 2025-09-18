import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import Works from './Works';
export default function HowItWorks() {

    const workLists = [
        {
            icon: <TbTruckDelivery />,
            title:"Booking Pick & Drop",
            description:"From personal packages to business shipments — we deliver on time, every time."
        },
        {
            icon: <TbTruckDelivery />,
            title:"Cash On Delivery",
            description:"From personal packages to business shipments — we deliver on time, every time."
        },
        {
            icon: <TbTruckDelivery />,
            title:"Delivery Hub",
            description:"From personal packages to business shipments — we deliver on time, every time."
        },
        {
            icon: <TbTruckDelivery />,
            title:"Booking SME & Corporate",
            description:"From personal packages to business shipments — we deliver on time, every time."
        },
    ]
  return (
    <div className='flex flex-col gap-2 p-2'>
        <h3 className='text-2xl font-bold'>How it Works</h3>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
            {
                workLists.map((works,idx)=>(
                    <Works key={idx} work={works} />
                ))
            }
        </div>
    </div>
  )
}
