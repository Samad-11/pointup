import Hero from "@/components/Hero";
import HomeService from "@/components/HomeService";
import HomeTestimonial from "@/components/HomeTestimonial";
import HowWeDo from "@/components/HowWeDo";
import ParallaxBG from "@/components/ParallaxBG";


export default function Home() {
  return (

    <main className="min-h-[300vh]">
      <Hero />
      <HowWeDo />
      <HomeService />
      <ParallaxBG />
      <HomeTestimonial />
    </main>
  )
}
