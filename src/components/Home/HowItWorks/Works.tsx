import React from 'react'

type workType = {
    icon: React.ReactNode;
    title:string;
    description:string;
}

interface WorksProps {
    work: workType;
}

export default function Works({work}:WorksProps) {
    const {icon,title,description} = work;
  return (
    <div className='flex flex-col gap-2 p-4 border-1  rounded-md'>
        <div className='text-3xl'>{icon}</div>
        <div className='flex flex-col gap-2'>
            <h3 className='font-semibold'>{title}</h3>
            <p className='text-sm font-normal'>{description}</p>
        </div>

    </div>
  )
}
