'use client'
import { useEffect, useRef } from 'react'

const skills = [
  { icon: '▲', name: 'Next.js', level: 'Advanced', pct: 88 },
  { icon: '⚛️', name: 'React.js', level: 'Advanced', pct: 90 },
  { icon: '🌐', name: 'HTML5', level: 'Expert', pct: 96 },
  { icon: '🎨', name: 'CSS3 / SCSS', level: 'Expert', pct: 93 },
  { icon: '💨', name: 'Tailwind CSS', level: 'Advanced', pct: 90 },
  { icon: '🅱️', name: 'Bootstrap', level: 'Advanced', pct: 86 },
  { icon: '🟨', name: 'JavaScript', level: 'Advanced', pct: 88 },
  { icon: '📦', name: 'Strapi CMS', level: 'Intermediate', pct: 72 },
  { icon: '🎭', name: 'Figma', level: 'Intermediate', pct: 75 },
  { icon: '🔷', name: 'Adobe XD', level: 'Intermediate', pct: 70 },
]

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          document.querySelectorAll('.skill-fill').forEach((el, i) => {
            const bar = el as HTMLElement
            setTimeout(() => {
              bar.style.width = bar.dataset.w + '%'
            }, i * 100)
          })
          // Reveal
          document.querySelectorAll('.reveal').forEach((el) => {
            el.classList.add('visible')
          })
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-surface" ref={ref}>
      <p className="text-xs text-accent tracking-[0.2em] uppercase mb-3 reveal">What I Know</p>
      <h2 className="font-syne font-extrabold text-white leading-none tracking-tight reveal"
        style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
        Skills &<br />Technologies
      </h2>
      <p className="text-sm text-muted leading-relaxed max-w-md mt-3 mb-12 reveal">
        My toolkit for building modern, fast, and beautiful web interfaces.
      </p>

      <div
        className="grid reveal"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '1px',
          background: '#1e1e2e',
          border: '1px solid #1e1e2e',
        }}
      >
        {skills.map((s) => (
          <div
            key={s.name}
            className="bg-surface p-8 flex flex-col gap-3 relative overflow-hidden group hover:bg-accent/5 transition-colors duration-200"
          >
            <span
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
            />
            <span className="text-3xl">{s.icon}</span>
            <div className="font-syne font-bold text-white text-base">{s.name}</div>
            <div className="text-xs text-accent tracking-widest uppercase">{s.level}</div>
            <div className="h-px bg-border rounded overflow-hidden mt-1">
              <div className="skill-fill h-full bg-gradient-to-r from-accent to-accent2 rounded" data-w={s.pct} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
