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
    <div className='flex flex-col gap-2 p-2 border-1 border-black rounded-md'>
        <div>{icon}</div>
        <div className='flex flex-col gap-2'>
            <h3 className='font-normal'>{title}</h3>
            <p className='text-sm'>{description}</p>
        </div>

    </div>
  )
}
