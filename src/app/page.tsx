import { Navbar } from "@/components/sections/Navbar"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Portfolio } from "@/components/sections/Portfolio"
import { Experience } from "@/components/sections/Experience"
import { Contact } from "@/components/sections/Contact"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
