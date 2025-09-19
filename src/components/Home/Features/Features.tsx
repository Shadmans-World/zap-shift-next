import React from "react";
import Image, { StaticImageData } from "next/image";
import safe_delivery from "@/assets/safe-delivery.png";
import live_tracking from "@/assets/live-tracking.png";

interface Feature {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Safe Delivery",
    description:
      "Your parcels are handled with care, ensuring safe and secure delivery every time.",
    image: safe_delivery,
    alt: "safe delivery",
  },
  {
    id: 2,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    image: live_tracking,
    alt: "live tracking",
  },
  {
    id: 3,
    title: "Fast & Reliable Service",
    description:
      "We prioritize speed and reliability to make sure your shipments reach their destination on time, every time.",
    image: safe_delivery,
    alt: "fast delivery",
  },
];

export default function Features() {
  return (
    <div className="flex flex-col gap-3 w-full">
      {features.map((feature) => (
        <div
          key={feature.id}
          data-aos="fade-up"
          className="flex flex-col md:flex-row gap-2 bg-base-300 p-2 md:p-5 items-center rounded-md"
        >
          <div className="relative h-40 w-40 md:h-50 md:w-50 flex-shrink-0">
            <Image
              src={feature.image}
              fill
              className="object-contain"
              alt={feature.alt}
            />
          </div>

          <div className="py-5 mx-5 hidden md:block">
            <div className="border-r-2 border-dotted h-40"></div>
          </div>

          <div className="flex flex-col gap-2 text-center md:text-left">
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="font-normal">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
