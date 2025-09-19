"use client"
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'


export default function AosProvider() {

    
  
    useEffect(()=>{
        AOS.init({
            duration : 2000,
           
        })
    },[]);
  
    return null;
}

