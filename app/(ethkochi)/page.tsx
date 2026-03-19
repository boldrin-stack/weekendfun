import Hero from "@/components/Hero"
import KeralaScene from "@/components/KeralaScene"
import About from "@/components/About"
import EventFormat from "@/components/EventFormat"
import Tracks from "@/components/Tracks"
import Tickets from "@/components/Tickets"
import Speakers from "@/components/Speakers"
import Partners from "@/components/Partners"
import Waitlist from "@/components/Waitlist"

export default function Home() {
  return (
    <>
      <Hero />
      <KeralaScene />
      <About />
      <EventFormat />
      <Tracks />
      <Tickets />
      <Speakers />
      <Partners />
      <Waitlist />
    </>
  )
}
