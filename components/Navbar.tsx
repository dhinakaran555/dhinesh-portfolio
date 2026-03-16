'use client'
import { useEffect, useState } from 'react'

const links = ['Skills', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 py-5 transition-all duration-300 ${
        scrolled ? 'nav-scrolled' : 'border-b border-transparent'
      }`}
    >
      <a
        href="#"
        className="font-syne font-extrabold text-xl text-accent tracking-tight no-underline"
      >
        DK.
      </a>
      <ul className="hidden md:flex gap-10 list-none">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="text-muted text-xs tracking-widest uppercase no-underline hover:text-accent transition-colors duration-200 relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
