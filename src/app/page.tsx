import Banner from "@/components/Home/Banner/Banner";
import HowItWorks from "@/components/Home/HowItWorks/HowItWorks";
import OurServices from "@/components/Home/Our Services/OurServices";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col space-y-5">
      <Banner/>
      <HowItWorks/>
      <OurServices/>
    </div>
  );
}
