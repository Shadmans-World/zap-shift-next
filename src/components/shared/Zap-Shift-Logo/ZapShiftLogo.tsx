import Image from 'next/image'
import React from 'react'
import Logo from '@/assets/logo.png'
export default function ZapShiftLogo() {
  return (
     <div className="flex items-end">
      <Image height={30} width={30} alt="ZapShift Logo" src={Logo} className='mb-2'/>
      <p className="text-3xl -ml-4 font-extrabold">Zap Shift</p>
    </div>
  )
}
