import Banner from "@/components/Home/Banner/Banner";
import BeMerchant from "@/components/Home/BeMerchant/BeMerchant";
import Companies from "@/components/Home/Companies/Companies";
import Features from "@/components/Home/Features/Features";
import HowItWorks from "@/components/Home/HowItWorks/HowItWorks";
import OurServices from "@/components/Home/Our Services/OurServices";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col space-y-5">
      <Banner/>
      <HowItWorks/>
      <OurServices/>
      <Companies/>
      <Features/>
      <BeMerchant/>
    </div>
  );
}
