// Íconos provisorios: Syskore y SafetyAI todavía no tienen logo plano (brand guidelines v2.1).
// Reemplazar por los SVG del kit cuando existan.

export function SyskoreMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 110" className={className} aria-hidden="true">
      <polygon points="48,4 92,29 92,81 48,106 4,81 4,29" fill="none" stroke="#263E6B" strokeWidth="6" />
      <path d="M36 30 L36 80 M36 56 L62 30 M44 50 L64 80" fill="none" stroke="#CCCCCD" strokeWidth="7" strokeLinecap="round" />
    </svg>
  )
}

export function SafetyMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 110" className={className} aria-hidden="true">
      <path d="M48 6 L88 20 L88 54 C88 80 70 96 48 104 C26 96 8 80 8 54 L8 20 Z" fill="none" stroke="#00B4A6" strokeWidth="6" strokeLinejoin="round" />
      <ellipse cx="48" cy="56" rx="22" ry="13" fill="none" stroke="#FFFFFF" strokeWidth="5" />
      <circle cx="48" cy="56" r="6" fill="#00B4A6" />
    </svg>
  )
}
