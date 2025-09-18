"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImage1 from "@/assets/banner/banner1.png";
import bannerImage2 from "@/assets/banner/banner2.png";
import bannerImage3 from "@/assets/banner/banner3.png";
import Image from "next/image";

export default function Banner() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={2000}
      autoFocus
    >
      <div>
        <Image src={bannerImage1} alt="Banner 1" className="object-cover" />
       
      </div>
      <div>
        <Image src={bannerImage2} alt="Banner 2" className="object-cover" />
       
      </div>
      <div>
        <Image src={bannerImage3} alt="Banner 3" className="object-cover" />
       
      </div>
    </Carousel>
  );
}
