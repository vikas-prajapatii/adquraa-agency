import Image from "next/image";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import ForBrands from "@/components/ForBrands";
import ForCreators from "@/components/ForCreators";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Hero />
      <Features />
      <HowItWorks />
      <ForBrands />
      <ForCreators />
      <CTA />
    </main>
  );
}
