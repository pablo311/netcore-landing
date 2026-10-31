import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Segments from '@/components/Segments'
import Portfolio from '@/components/Portfolio'
import Process from '@/components/Process'
import Stack from '@/components/Stack'
import Faq from '@/components/Faq'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Segments />
      <Portfolio />
      <Process />
      <Stack />
      <Faq />
      <Contact />
      <Footer />
    </main>
  )
}
