export default function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
      <div>© 2024 <span className="text-accent font-semibold">Dhinakaran R</span>. Built with Next.js & Tailwind CSS</div>
      <div className="flex gap-6">
        {['GitHub', 'LinkedIn', 'Email'].map((item) => (
          <a
            key={item}
            href="#"
            className="text-muted hover:text-accent transition-colors no-underline"
          >
            {item}
          </a>
        ))}
      </div>
    </footer>
  )
}
