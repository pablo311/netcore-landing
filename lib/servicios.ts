// Una página por servicio. Los textos hablan de lo que gana el cliente;
// lo técnico va aparte, en `tecnico`, y solo lo ve quien lo abre.
// Cada servicio es una capa del plano de ejemplo (components/Plano.tsx).

import { waLink } from './site'

export type Capa = 'todo' | 'wifi' | 'cab' | 'cam' | 'auto' | 'sis'

export type Servicio = {
  slug: string
  capa: Exclude<Capa, 'todo'>
  /** Nombre en la leyenda del plano y en el pie. */
  nombre: string
  /** Nombre corto para el menú. */
  menu: string
  /** Una línea para la leyenda de la portada. */
  corto: string
  titulo: string
  bajada: string
  /** Qué muestra el plano en esta página, para lectores de pantalla. */
  plano: string
  hace: { t: string; d: string }[]
  productos?: { nombre: string; estado: string; d: string; url?: string }[]
  frase: string
  tecnico: string[]
  queda: string[]
  wa: string
  descripcion: string
}

export const SERVICIOS: Servicio[] = [
  {
    slug: 'internet-wifi',
    capa: 'wifi',
    nombre: 'Internet y WiFi',
    menu: 'Internet y WiFi',
    corto: 'Señal en todo el local, sin cortes.',
    titulo: 'WiFi en todo el local, sin cortes.',
    bajada:
      'Ordenamos la red de tu negocio para que la caja, las computadoras y los celulares anden bien al mismo tiempo.',
    plano: 'Plano de ejemplo de un local con dos equipos de WiFi que cubren el salón y la oficina.',
    hace: [
      {
        t: 'Señal donde la necesitás.',
        d: 'Medimos el local y ponemos los equipos donde hacen falta, no donde quedó el módem.',
      },
      {
        t: 'Una red para vos y otra para tus clientes.',
        d: 'Ellos navegan sin tocar la caja ni tus computadoras.',
      },
      {
        t: 'Todo anotado.',
        d: 'Te dejamos las claves y un plano simple de cómo quedó la red.',
      },
    ],
    frase: 'Casi siempre el problema está en la red de adentro, no en tu proveedor.',
    tecnico: [
      'Puntos de acceso conectados por cable, no repetidores.',
      'Redes separadas para invitados, cajas y cámaras.',
      'Cobertura medida antes y después de instalar.',
    ],
    queda: [
      'WiFi parejo en todo el local.',
      'Las claves y el plano de tu red.',
      'Un contacto directo si algo falla.',
    ],
    wa: waLink('Hola Netcore, quiero mejorar el internet y el WiFi de mi negocio.'),
    descripcion:
      'Internet y WiFi estables para tu negocio en Asunción: señal en todo el local, una red para vos y otra para tus clientes.',
  },
  {
    slug: 'cableado-fibra',
    capa: 'cab',
    nombre: 'Cableado y fibra',
    menu: 'Cableado',
    corto: 'Una red prolija, probada punto por punto.',
    titulo: 'Una red prolija, probada punto por punto.',
    bajada:
      'Cableamos oficinas, locales y edificios con cable de red y fibra óptica. Cada punto se prueba antes de entregarlo.',
    plano: 'Plano de ejemplo de un local con todos los cables que salen del rack y una marca de probado en cada punto.',
    hace: [
      {
        t: 'Cableado de red.',
        d: 'Puntos para cajas, computadoras, cámaras y equipos de WiFi.',
      },
      {
        t: 'Fibra óptica.',
        d: 'Para unir pisos, depósitos o edificios sin perder velocidad.',
      },
      {
        t: 'Rack ordenado.',
        d: 'Cada cable con su nombre, para que cualquiera entienda qué va a dónde.',
      },
      {
        t: 'Certificación.',
        d: 'Probamos cada punto con equipos Fluke y te entregamos el informe.',
      },
    ],
    frase:
      'Un cableado mal hecho no se nota el primer día. Se nota cuando algo falla y nadie sabe qué cable es cuál.',
    tecnico: [
      'Cable UTP categoría 6.',
      'Fibra óptica para los tramos largos.',
      'Certificación con equipos Fluke, con informe por punto.',
      'Puntos y rack etiquetados.',
    ],
    queda: [
      'Una red que aguanta lo que sumes después.',
      'El informe de cada punto probado.',
      'Todo etiquetado, para que nadie adivine.',
    ],
    wa: waLink('Hola Netcore, necesito un presupuesto de cableado de red.'),
    descripcion:
      'Cableado de red y fibra óptica para oficinas, locales y edificios en Asunción, con certificación con equipos Fluke.',
  },
  {
    slug: 'camaras-seguridad',
    capa: 'cam',
    nombre: 'Cámaras y seguridad',
    menu: 'Cámaras',
    corto: 'Tu negocio en el celular, con todo grabado.',
    titulo: 'Mirá tu negocio desde el celular.',
    bajada:
      'Instalamos cámaras, alarmas y botones de pánico, y te dejamos todo configurado en tu teléfono.',
    plano: 'Plano de ejemplo de un local con cuatro cámaras y lo que ve cada una.',
    hace: [
      {
        t: 'Cámaras.',
        d: 'Ubicadas para que se vea lo que importa: la caja, las entradas y el depósito.',
      },
      {
        t: 'Alarmas.',
        d: 'Te avisan al celular si alguien entra fuera de hora.',
      },
      {
        t: 'Botones de pánico.',
        d: 'Un aviso silencioso para pedir ayuda desde la caja.',
      },
      {
        t: 'Acceso para quien vos decidas.',
        d: 'Vos elegís quién puede mirar y qué puede ver.',
      },
    ],
    frase: 'Una cámara mal ubicada graba todo menos lo que necesitabas ver.',
    tecnico: [
      'Cámaras conectadas por cable de red, con un solo cable por cámara.',
      'Grabador en el local, con los días de grabación que necesites.',
      'Visión nocturna en interiores y exteriores.',
    ],
    queda: [
      'Tu negocio en el celular, en vivo y grabado.',
      'Avisos cuando pasa algo fuera de hora.',
      'Usuarios separados para vos y tu gente.',
    ],
    wa: waLink('Hola Netcore, quiero poner cámaras en mi negocio.'),
    descripcion:
      'Cámaras de seguridad, alarmas y botones de pánico para negocios en Asunción, configurados en tu celular.',
  },
  {
    slug: 'automatizaciones',
    capa: 'auto',
    nombre: 'Automatizaciones',
    menu: 'Automatizaciones',
    corto: 'Un WhatsApp que atiende aunque estés ocupado.',
    titulo: 'Un WhatsApp que atiende aunque estés ocupado.',
    bajada:
      'Armamos un asistente que responde las consultas de siempre, toma pedidos y te pasa la conversación cuando hace falta una persona.',
    plano: 'Plano de ejemplo de un local con una conversación de WhatsApp que se responde sola desde la caja.',
    hace: [
      {
        t: 'Responde al instante.',
        d: 'Horarios, precios, ubicación y lo que tus clientes preguntan todos los días.',
      },
      {
        t: 'Toma pedidos y turnos.',
        d: 'Los anota ordenados, para que no se pierda ninguno.',
      },
      {
        t: 'Te pasa la conversación.',
        d: 'Cuando la consulta necesita una persona, te avisa y seguís vos.',
      },
    ],
    frase:
      'El cliente que escribe a las diez de la noche no espera hasta mañana. Le compra al que le contestó.',
    tecnico: [
      'Se conecta al WhatsApp de tu negocio.',
      'Responde con tu información: precios, horarios y catálogo.',
      'Los pedidos pueden llegar a una planilla o a tu sistema.',
    ],
    queda: [
      'Respuestas a toda hora, con tu tono.',
      'Pedidos anotados sin copiar a mano.',
      'Más tiempo para atender lo que importa.',
    ],
    wa: waLink('Hola Netcore, quiero que mi WhatsApp atienda solo.'),
    descripcion:
      'Un asistente de WhatsApp para tu negocio: responde consultas, toma pedidos y te avisa cuando hace falta una persona.',
  },
  {
    slug: 'sistemas',
    capa: 'sis',
    nombre: 'Sistemas a medida',
    menu: 'Sistemas',
    corto: 'Un sistema simple cuando las planillas no alcanzan.',
    titulo: 'Un sistema hecho para cómo trabajás vos.',
    bajada:
      'Cuando las planillas ya no alcanzan, te hacemos un sistema simple para pedidos, stock y cotizaciones.',
    plano: 'Plano de ejemplo de un local con pantallas de pedidos, cotizaciones, clientes y stock conectadas entre sí.',
    hace: [
      {
        t: 'Pedidos y ventas.',
        d: 'Cada pedido en un solo lugar, desde que entra hasta que se entrega.',
      },
      {
        t: 'Stock.',
        d: 'Sabés qué hay y qué falta sin contar a mano.',
      },
      {
        t: 'Cotizaciones.',
        d: 'Presupuestos prolijos en minutos, con tus precios.',
      },
    ],
    productos: [
      {
        nombre: 'Abocato',
        estado: 'En producción',
        d: 'Asistente legal en línea.',
        url: 'https://abocato.com',
      },
      { nombre: 'Vendalia', estado: 'En desarrollo', d: 'Mercado de negocios y franquicias.' },
    ],
    frase: 'Un sistema que nadie usa es peor que una planilla.',
    tecnico: [
      'Se usa desde el navegador, en la computadora o el celular.',
      'Usuarios con permisos distintos para cada persona.',
      'Tus datos se pueden exportar a planilla cuando quieras.',
    ],
    queda: [
      'Un sistema que tu gente entiende desde el primer día.',
      'Tus datos ordenados y a mano.',
      'Cambios cuando tu negocio cambia.',
    ],
    wa: waLink('Hola Netcore, necesito un sistema para mi negocio.'),
    descripcion:
      'Sistemas a medida para pedidos, stock y cotizaciones, hechos para cómo trabaja tu negocio.',
  },
]

export function servicioPorSlug(slug: string) {
  return SERVICIOS.find((s) => s.slug === slug)
}
