import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Clientes from '@/components/Clientes'
import { Cierre, ComoEmpezamos, Pie, Preguntas, Productos, QueHacemos } from '@/components/Secciones'
import WhatsAppFlotante from '@/components/WhatsAppFlotante'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Clientes />
        <QueHacemos />
        <ComoEmpezamos />
        <Productos />
        <Preguntas />
        <Cierre />
      </main>
      <Pie />
      <WhatsAppFlotante />
    </>
  )
}
