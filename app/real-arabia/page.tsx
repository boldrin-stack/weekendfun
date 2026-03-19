import Hero from "@/components/real-arabia/Hero"
import SignatureDishes from "@/components/real-arabia/SignatureDishes"
import StorySection from "@/components/real-arabia/StorySection"
import Locations from "@/components/real-arabia/Locations"
import MenuPreview from "@/components/real-arabia/MenuPreview"
import Reviews from "@/components/real-arabia/Reviews"
import FooterScene from "@/components/real-arabia/FooterScene"

export default function RealArabiaPage() {
  return (
    <>
      <Hero />
      <SignatureDishes />
      <StorySection />
      <Locations />
      <MenuPreview />
      <Reviews />
      <FooterScene />
    </>
  )
}
