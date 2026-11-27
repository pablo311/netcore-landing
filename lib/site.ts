// Datos de contacto y textos que se repiten, en un solo lugar.
// Si cambia el número de WhatsApp o el correo, se cambia solo acá.

export const SITE_URL = 'https://netcoretec.com.py'

export const EMPRESA = {
  nombre: 'Netcore Technology',
  razonSocial: 'NETCORE TECHNOLOGY E.A.S. UNIPERSONAL',
  ruc: '80166711-9',
  telefono: '+595 973 323895',
  telefonoE164: '+595973323895',
  whatsapp: '595973323895',
  email: 'administracion@netcoretec.com.py',
  cobertura: 'Asunción, Gran Asunción y Ciudad del Este',
}

export function waLink(mensaje: string) {
  return `https://wa.me/${EMPRESA.whatsapp}?text=${encodeURIComponent(mensaje)}`
}

export const WA_CHARLA = waLink('Hola Netcore, quiero agendar una charla de 15 minutos.')

// Problemas del hero. Cada uno arma una conversación de ejemplo:
// lo que dice la persona y dos respuestas nuestras.
export const PROBLEMAS = [
  {
    boton: 'Se me corta el internet',
    dice: 'Se me corta el internet a cada rato.',
    respuestas: [
      'Casi siempre es la red de adentro, no tu proveedor.',
      'Vamos, la revisamos y te dejamos internet estable en todo el local.',
    ],
  },
  {
    boton: 'No sé qué pasa cuando no estoy',
    dice: 'No sé qué pasa en el local cuando no estoy.',
    respuestas: [
      'Te ponemos cámaras que ves desde el celular, con todo grabado.',
      'Y una alarma que te avisa si alguien entra fuera de hora.',
    ],
  },
  {
    boton: 'No doy abasto con el WhatsApp',
    dice: 'No doy abasto para contestar el WhatsApp.',
    respuestas: [
      'Armamos un asistente que responde las consultas de siempre y toma pedidos.',
      'Vos entrás solo cuando hace falta una persona.',
    ],
  },
  {
    boton: 'Llevo todo en planillas',
    dice: 'Llevo todo en planillas y ya no doy más.',
    respuestas: [
      'Te hacemos un sistema simple para pedidos, stock y cotizaciones.',
      'Lo ves desde la compu o el celular, sin fórmulas que se rompen.',
    ],
  },
]

// Clientes que se muestran agrupados en la franja "Confían en nosotros".
// Solo el nombre o el logo: nunca datos de sus obras.
// Para usar un logo, ponerlo en public/clientes/ y completar `logo`.
export const CLIENTES: { nombre: string; logo?: string }[] = [
  { nombre: 'Paseo La Galería' },
  { nombre: 'Blue Tower' },
  { nombre: 'Daylic' },
]

export const PREGUNTAS = [
  {
    p: '¿Cuánto sale la primera charla?',
    r: 'Nada. Son 15 minutos por WhatsApp o llamada para entender qué necesitás. Si hace falta ir a tu negocio, coordinamos la visita.',
  },
  {
    p: '¿Trabajan con negocios chicos?',
    r: 'Sí. Atendemos desde un local con una sola caja hasta edificios y empresas con varias sucursales.',
  },
  {
    p: '¿Tengo que cerrar el local mientras trabajan?',
    r: 'No. Organizamos el trabajo por partes y, si hace falta, de noche o los fines de semana, para que sigas atendiendo.',
  },
  {
    p: '¿Qué pasa si algo falla después?',
    r: 'Nos escribís y lo vemos. No instalamos y desaparecemos: quedamos como tu contacto para lo que haga falta.',
  },
  {
    p: '¿En qué zonas trabajan?',
    r: 'Asunción, Gran Asunción y Ciudad del Este. Para otras ciudades, consultanos.',
  },
]
