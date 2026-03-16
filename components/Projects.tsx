const projects = [
  {
    num: '01',
    title: 'Star Health Insurance Website',
    desc: 'Responsive insurance platform with SEO & non-SEO blog pages, dynamic content via Strapi CMS, cross-browser compatible.',
    tags: ['Next.js', 'Tailwind CSS', 'SCSS', 'Strapi CMS'],
    gradient: 'linear-gradient(135deg, #0f3460, #16213e, #1a1a2e)',
    icon: '🏥',
  },
  {
    num: '02',
    title: 'UI Component Library',
    desc: 'Reusable React component system with consistent design tokens, built for scalability and design-dev collaboration.',
    tags: ['React', 'Tailwind CSS', 'Figma', 'Bootstrap'],
    gradient: 'linear-gradient(135deg, #2e1111, #4a1414, #1a0a0a)',
    icon: '🧩',
  },
  {
    num: '03',
    title: 'Social Media Creatives',
    desc: 'Campaign-based digital creatives for Instagram, LinkedIn, and Facebook — consistent brand identity and visual design.',
    tags: ['Figma', 'Adobe XD', 'Photoshop', 'Canva'],
    gradient: 'linear-gradient(135deg, #112e11, #144a14, #0a1a0a)',
    icon: '🎨',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-bg">
      <p className="text-xs text-accent tracking-[0.2em] uppercase mb-3 reveal">Portfolio</p>
      <h2
        className="font-syne font-extrabold text-white leading-none tracking-tight reveal"
        style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
      >
        Featured<br />Projects
      </h2>
      <p className="text-sm text-muted leading-relaxed max-w-md mt-3 mb-12 reveal">
        Real work I've delivered — from insurance platforms to design systems.
      </p>

      <div className="grid gap-6 reveal" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
        {projects.map((p) => (
          <div
            key={p.num}
            className="bg-surface border border-border rounded-lg overflow-hidden group hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-300"
          >
            <div
              className="h-44 flex items-center justify-center text-5xl relative overflow-hidden"
              style={{ background: p.gradient }}
            >
              {p.icon}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface" />
            </div>
            <div className="p-6">
              <p className="text-xs text-accent tracking-[0.15em] mb-2">{p.num} / 0{projects.length}</p>
              <h3 className="font-syne font-bold text-white text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 bg-accent/5 border border-accent/15 rounded-full text-accent tracking-wide"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
