import { About } from "@/components/About"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/Hero"
import { LocationSection } from "@/components/LocationSection"
import { Navbar } from "@/components/Navbar"
import Image from "next/image"

export default function Home() {
  return (
    <main className="">
      <Navbar />

      <Hero />
      <About />
      <LocationSection />
      <Footer />

      <div className="flex items-center space-x-1 px-3 py-2 fixed bottom-8 right-8 bg-secondary rounded-full z-50 cursor-pointer hover:bg-secondary/80 transition duration-300 ease-in-out">
        <Image src={"/message.png"} width={35} height={35} alt="image" />
        <p className="text-white font-sans ">Support</p>
      </div>
    </main>
  )
}
