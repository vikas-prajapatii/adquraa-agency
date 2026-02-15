import Hero from "@/components/Hero";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import HowItWorks from "@/components/HowItWorks";
import ServicesOverview from "@/components/Features"; // Refactored file
import Contact from "@/components/Contact";
import Footer from "@/components/Footer"; // Importing Footer here for home page, or should be in layout

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-24">
      <Hero />
      <WhoIsThisFor />
      <HowItWorks />
      <ServicesOverview />
      <Contact />
      <Footer />
    </main>
  );
}

