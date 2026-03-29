import WolkanoHero from "@/components/wolkano/WolkanoHero"
import SignatureItems from "@/components/wolkano/SignatureItems"
import MenuCategories from "@/components/wolkano/MenuCategories"
import Locations from "@/components/wolkano/Locations"
import OurStory from "@/components/wolkano/OurStory"
import SocialProof from "@/components/wolkano/SocialProof"
import CTAStrip from "@/components/wolkano/CTAStrip"

export default function WolkanoHome() {
  return (
    <>
      <WolkanoHero />
      <SignatureItems />
      <MenuCategories />
      <Locations />
      <OurStory />
      <SocialProof />
      <CTAStrip />
    </>
  )
}
