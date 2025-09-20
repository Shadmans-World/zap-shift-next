'use client'
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import bannerImage1 from "@/assets/banner/banner1.png";
import bannerImage2 from "@/assets/banner/banner2.png";
import bannerImage3 from "@/assets/banner/banner3.png";

export default function Banner() {
  return (
    <Carousel 
      autoPlay 
      infiniteLoop 
      showStatus={false} 
      interval={3000} 
      showThumbs={false} 
      swipeable 
      emulateTouch
    >
      {[bannerImage1, bannerImage2, bannerImage3].map((img, idx) => (
        <div 
          key={idx} 
          className="relative w-full h-[150px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]"
        >
          <Image 
            src={img} 
            alt={`Banner ${idx + 1}`} 
            fill 
            priority
            className="object-cover" 
          />
        </div>
      ))}
    </Carousel>
  );
}
