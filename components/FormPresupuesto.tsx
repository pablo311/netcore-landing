'use client'
import { useState } from 'react'
import { Send } from 'lucide-react'
import { waLink } from '@/lib/site'

const servicios = [
  'Cableado UTP Cat6 certificado',
  'Fibra óptica',
  'Racks y switches',
  'Cámaras y seguridad',
  'WiFi para empresas',
  'Equipos y materiales',
  'Otro',
]

const campo =
  'mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-[15px] text-ink placeholder:text-slate-400 focus:border-primario focus:outline-none focus:ring-2 focus:ring-primario/30'

// No guarda nada: arma el mensaje y abre WhatsApp para que la persona lo envíe.
export default function FormPresupuesto() {
  const [nombre, setNombre] = useState('')
  const [servicio, setServicio] = useState(servicios[0])
  const [lugar, setLugar] = useState('')
  const [detalle, setDetalle] = useState('')

  function enviar(e: React.FormEvent) {
    e.preventDefault()
    const lineas = [
      `Hola Netcore, soy ${nombre.trim()}.`,
      `Quiero un presupuesto de: ${servicio}.`,
      lugar.trim() && `Lugar: ${lugar.trim()}.`,
      detalle.trim() && `Detalle: ${detalle.trim()}`,
    ].filter(Boolean)
    window.open(waLink(lineas.join('\n')), '_blank', 'noopener')
  }

  return (
    <form onSubmit={enviar} className="rounded-2xl bg-white p-6 text-ink shadow-2xl shadow-black/30 sm:p-8">
      <h3 className="font-display text-xl font-extrabold text-navy">Armá tu pedido en un minuto</h3>
      <p className="mt-1 text-sm text-slate-500">Se abre WhatsApp con el mensaje listo para enviar.</p>

      <div className="mt-5 grid gap-4">
        <label className="text-sm font-medium text-slate-700">
          Tu nombre
          <input className={campo} value={nombre} onChange={(e) => setNombre(e.target.value)} required autoComplete="name" />
        </label>
        <label className="text-sm font-medium text-slate-700">
          ¿Qué necesitás?
          <select className={campo} value={servicio} onChange={(e) => setServicio(e.target.value)}>
            {servicios.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className="text-sm font-medium text-slate-700">
          Lugar de la obra
          <input
            className={campo}
            value={lugar}
            onChange={(e) => setLugar(e.target.value)}
            placeholder="Ciudad, edificio o empresa"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Contanos un poco más
          <textarea
            className={`${campo} min-h-[92px] resize-y`}
            value={detalle}
            onChange={(e) => setDetalle(e.target.value)}
            placeholder="Cantidad de puntos, metros aproximados, plazos"
          />
        </label>
      </div>

      <button type="submit" className="btn-primario mt-6 w-full text-base">
        <Send className="h-4 w-4" aria-hidden="true" />
        Enviar por WhatsApp
      </button>
    </form>
  )
}
