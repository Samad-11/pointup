import Hero from "@/components/Hero";
import HomeService from "@/components/HomeService";
import HomeTestimonial from "@/components/HomeTestimonial";
import HowWeDo from "@/components/HowWeDo";
import ParallaxBG from "@/components/ParallaxBG";
import { PHONE_NUMBER } from "@/lib/constants";
import { FinancialService, WithContext } from "schema-dts"


export default function Home() {

  const jsonLd: WithContext<FinancialService> = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Point Up",
    description: "Point up helps users to maximize their reward points, and get maximum benefits from their credit cards",
    url: "https://pointup.co.in/",
    logo: "https://pointup.co.in/logo/pointUpLogo.png",
    areaServed: {
      "@type": "Country",
      name: "India"
    }
  }
  return (

    <main className="min-h-[300vh]">
      <Hero />
      <HowWeDo />
      <HomeService />
      <ParallaxBG />
      <HomeTestimonial />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  )
}
