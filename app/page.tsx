import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Proceso from '@/components/Proceso'
import Obras from '@/components/Obras'
import WhyUs from '@/components/WhyUs'
import Preguntas from '@/components/Preguntas'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppFlotante from '@/components/WhatsAppFlotante'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Proceso />
        <Obras />
        <WhyUs />
        <Preguntas />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFlotante />
    </>
  )
}
