const experiences = [
  {
    date: '2024 Nov — Present',
    title: 'Front End Developer',
    company: 'Star Health and Allied Insurance Co Ltd',
    points: [
      'Developed and maintained responsive websites using Next.js, SCSS and Tailwind CSS',
      'Ensured cross-browser and cross-device compatibility for web applications',
      'Implemented SEO and non-SEO blog pages with optimized meta tags and page structure',
      'Managed dynamic content updates using Strapi CMS',
      'Designed UI layouts using Figma and Adobe XD',
      'Followed Git workflow (branching, commits, merges) using GitLab for version control',
    ],
  },
  {
    date: '2024 June — 2024 November',
    title: 'Graphic Designer',
    company: 'SaaS Mantra',
    points: [
      'Designed social media creatives, banners and promotional posters',
      'Created engaging social media content for Instagram, LinkedIn and Facebook',
      'Worked with marketing teams to develop campaign-based designs',
      'Maintained visual consistency and brand identity in digital creatives',
    ],
  },
]

const education = {
  degree: 'Diploma in Electrical & Electronics Engineering',
  school: 'Kamaraj Polytechnic College, Nagercoil',
 
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-surface">
      <p className="text-xs text-accent tracking-[0.2em] uppercase mb-3">Journey</p>
      <h2
        className="font-syne font-extrabold text-white leading-none tracking-tight"
        style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
      >
        Work<br />Experience
      </h2>
      <p className="text-sm text-muted leading-relaxed max-w-md mt-3 mb-12">
        Building production-grade frontends for real users.
      </p>

      {/* Timeline */}
      <div className="relative pl-8 mb-16">
        <div
          className="absolute left-0 top-0 bottom-0 w-px"
          style={{ background: 'linear-gradient(to bottom, #64ffda, transparent)' }}
        />
        {experiences.map((e, i) => (
          <div key={i} className="relative mb-12 last:mb-0">
            <div
              className="absolute -left-11 top-1 w-2.5 h-2.5 rounded-full bg-accent"
              style={{ boxShadow: '0 0 12px rgba(100,255,218,0.5)' }}
            />
            <p className="text-xs text-accent tracking-widest uppercase mb-1">{e.date}</p>
            <h3 className="font-syne font-bold text-white text-xl mb-1">{e.title}</h3>
            <p className="text-sm text-muted mb-4 italic">{e.company}</p>
            <ul className="space-y-2">
              {e.points.map((pt, j) => (
                <li key={j} className="text-sm text-muted leading-relaxed flex gap-2">
                  <span className="shrink-0">›</span>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="border border-border rounded-lg p-6 bg-bg/50">
        <p className="text-xs text-accent tracking-widest uppercase mb-3">Education</p>
        <div className="flex justify-between items-start flex-wrap gap-2">
          <div>
            <h3 className="font-syne font-bold text-white text-lg">{education.degree}</h3>
            <p className="text-sm text-muted mt-1">{education.school}</p>
          </div>
        
        </div>
      </div>
    </section>
  )
}
