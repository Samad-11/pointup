import Hero from "@/components/Hero";
import HomeService from "@/components/HomeService";
import HomeTestimonial from "@/components/HomeTestimonial";
import HowWeDo from "@/components/HowWeDo";
import ParallaxBG from "@/components/ParallaxBG";


export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "About Us",
      link: "/about"
    },
    {
      name: "Service",
      link: "/service"
    },
    {
      name: "Why Point Up?",
      link: "/whypointup"
    },
    {
      name: "FAQs",
      link: "/faq"
    },
  ]
  return (

    <main className="min-h-[300vh] ">
      <Hero />
      <HowWeDo />
      <HomeService />
      <ParallaxBG />
      <HomeTestimonial />
    </main>
  )
}
