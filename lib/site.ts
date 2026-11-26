// Datos de contacto y de la empresa en un solo lugar.
// Si cambia el número de WhatsApp o un correo, se cambia solo acá.

export const SITE_URL = 'https://netcoretec.com.py'

export const EMPRESA = {
  nombre: 'Netcore Technology',
  razonSocial: 'NETCORE TECHNOLOGY E.A.S. UNIPERSONAL',
  ruc: '80166711-9',
  telefono: '+595 973 323895',
  telefonoE164: '+595973323895',
  whatsapp: '595973323895',
  emailVentas: 'ventas@netcoretec.com.py',
  emailAdmin: 'administracion@netcoretec.com.py',
  cobertura: 'Asunción, Gran Asunción, San Lorenzo y Ciudad del Este',
}

export function waLink(mensaje: string) {
  return `https://wa.me/${EMPRESA.whatsapp}?text=${encodeURIComponent(mensaje)}`
}

export const WA_PRESUPUESTO = waLink(
  'Hola Netcore, quiero pedir un presupuesto. Te cuento qué necesito:',
)

export const PREGUNTAS = [
  {
    p: '¿Qué significa que un punto de red esté certificado?',
    r: 'Que lo medimos con un certificador Fluke según la norma TIA de su categoría (por ejemplo Cat 6) y pasó la prueba. Te entregamos el informe de cada punto, con su resultado, largo y margen. Si mañana falla algo, hay un registro para comparar.',
  },
  {
    p: '¿Pueden trabajar de noche o los fines de semana?',
    r: 'Sí. En edificios, shoppings y oficinas que no pueden parar, organizamos la obra en turnos nocturnos y fines de semana, por etapas, para no cortar la operación.',
  },
  {
    p: '¿Hacen tendido de fibra óptica?',
    r: 'Sí. Tendemos fibra monomodo entre edificios, pisos o racks, hacemos las fusiones y dejamos el enlace funcionando con conversores o módulos SFP compatibles con tus switches.',
  },
  {
    p: '¿En qué zonas trabajan?',
    r: 'Asunción, Gran Asunción, San Lorenzo y Ciudad del Este. Para obras en otras ciudades, consultanos.',
  },
  {
    p: '¿Cómo pido un presupuesto?',
    r: 'Escribinos por WhatsApp con lo que necesitás y, si podés, fotos o un plano. Si hace falta, coordinamos un relevamiento en el lugar y te mandamos un presupuesto detallado, ítem por ítem.',
  },
]
