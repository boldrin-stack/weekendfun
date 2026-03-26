import Hero from "@/components/Hero"
import StatsSection from "@/components/StatsSection"
import SignatureDishes from "@/components/SignatureDishes"
import StorySection from "@/components/StorySection"
import Locations from "@/components/Locations"
import MenuPreview from "@/components/MenuPreview"
import Reviews from "@/components/Reviews"
import FooterScene from "@/components/FooterScene"

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <SignatureDishes />
      <StorySection />
      <Locations />
      <MenuPreview />
      <Reviews />
      <FooterScene />
    </>
  )
}
