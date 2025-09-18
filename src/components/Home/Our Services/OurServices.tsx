import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import Service from "./Service";

export default function () {
  const services = [
    {
      icon: <TbTruckDelivery />,
      title: "Express & Standard Delivery",
      description:
        "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      icon: <TbTruckDelivery />,
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
      icon: <TbTruckDelivery />,
      title: "Fulfillment Solution",
      description:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
      icon: <TbTruckDelivery />,
      title: "Cash on Home Delivery",
      description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      icon: <TbTruckDelivery />,
      title: "Corporate Service / Contract In Logistics",
      description:
        "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
      icon: <TbTruckDelivery />,
      title: "Parcel Return",
      description:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
  ];

  return (
    <div className="flex flex-col gap-2 bg-base-300 p-2 rounded-md">
      <div className="text-center space-y-2 mt-5">
        <h3 className="text-2xl font-bold ">Our Services</h3>
      <p className="text-sm font-normal">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-5">
        {
            services.map((service,idx)=><Service key={idx} service={service}/>)
        }
      </div>
    </div>
  );
}
