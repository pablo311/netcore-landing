// Datos de contacto y textos que se repiten, en un solo lugar.
// Si cambia el número de WhatsApp o el correo, se cambia solo acá.

export const SITE_URL = 'https://netcoretec.com.py'

export const EMPRESA = {
  nombre: 'Netcore Technology',
  razonSocial: 'NETCORE TECHNOLOGY E.A.S. UNIPERSONAL',
  // La misma razón social, en mayúsculas y minúsculas para leerla en pantalla.
  razonSocialLegible: 'Netcore Technology E.A.S. Unipersonal',
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

// La única acción del sitio. Se llama igual en todas partes.
export const ACCION = 'Escribir por WhatsApp'
export const WA_GENERAL = waLink('Hola Netcore, quiero contarles lo que necesita mi negocio.')

// Clientes que se muestran agrupados en un solo lugar de la portada.
// Solo el nombre o el logo: nunca datos de sus obras.
// Para usar un logo, ponerlo en public/clientes/ y completar `logo`.
export const CLIENTES: { nombre: string; logo?: string }[] = [
  { nombre: 'Paseo La Galería' },
  { nombre: 'Blue Tower' },
  { nombre: 'Daylic' },
]

// Marcas que instalamos. Se nombran en una sola frase de la portada.
export const MARCAS = ['Furukawa', 'Ubiquiti', 'Hikvision', 'TP-Link', 'Dell']

export const PASOS = [
  {
    t: 'Charla de 15\u00a0minutos',
    d: 'Nos contás qué te está frenando, por WhatsApp o por llamada. No cuesta nada.',
  },
  {
    t: 'Visita y presupuesto',
    d: 'Vamos a tu negocio, medimos y te pasamos un presupuesto claro, sin letra chica.',
  },
  {
    t: 'Instalación y entrega',
    d: 'Trabajamos sin frenar tu atención. Probamos todo y te explicamos cómo queda.',
  },
  {
    t: 'Seguimos estando',
    d: 'Si algo falla o querés sumar algo, le escribís a la misma persona.',
  },
]

export const PREGUNTAS = [
  {
    p: '¿Cuánto sale la primera charla?',
    r: 'Nada. Es una charla corta por WhatsApp o por llamada para entender qué necesitás. Si hace falta ir a tu negocio, coordinamos la visita.',
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
