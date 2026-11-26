'use client'
import { useEffect, useRef } from 'react'

// Aparición suave al entrar en pantalla.
// El HTML llega visible: solo se oculta lo que está fuera de pantalla una vez
// que corre el JS, así que sin JS o con "reducir movimiento" se ve todo igual.
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (el.getBoundingClientRect().top < window.innerHeight) return

    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        el.style.transition = `opacity .5s ease-out ${delay}s, transform .5s ease-out ${delay}s`
        el.style.opacity = '1'
        el.style.transform = 'none'
        io.disconnect()
      },
      { rootMargin: '0px 0px -60px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
