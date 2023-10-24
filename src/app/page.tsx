import { About } from "@/components/About"
import { Hero } from "@/components/Hero"
import { LocationSection } from "@/components/LocationSection"
import { Navbar } from "@/components/Navbar"

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <About />
      <LocationSection />
    </main>
  )
}
