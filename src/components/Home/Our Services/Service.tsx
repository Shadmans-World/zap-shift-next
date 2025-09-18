import React from 'react'


type ServiceTypes = {
        icon:React.ReactNode;
        title:string;
        description: string;
    };

interface ServiceProps {
    service : ServiceTypes;
}


export default function Service({service}:ServiceProps) {

    const {icon,title,description} = service

   
  return (
    <div className='flex flex-col p-4 text-center gap-2 border-1 justify-center items-center'>
        <div className='text-3xl'>
            {icon}
        </div>
        <h3 className='font-semibold'>{title}</h3>
        <p className='text-sm font-normal'>{description}</p>
    </div>
  )
}
