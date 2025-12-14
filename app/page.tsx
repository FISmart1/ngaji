import Image from "next/image";
import HeroSection from "../components/hero";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import MapelUnggulan from "@/components/Unggulan";
import CTASection from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans dark:bg-black">
      <Navbar/>
      <HeroSection/>
      <Stats/>
      <MapelUnggulan/>
      <CTASection/>
      <Footer/>
    </div>
  );
}
