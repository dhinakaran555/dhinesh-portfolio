'use client'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (form.name && form.email && form.message) {
      setSent(true)
    }
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-bg">
      <p className="text-xs text-accent tracking-[0.2em] uppercase mb-3">Let's Talk</p>
      <h2
        className="font-syne font-extrabold text-white leading-none tracking-tight"
        style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
      >
        Get In<br />Touch
      </h2>
      <p className="text-sm text-muted leading-relaxed max-w-md mt-3 mb-12">
        Have a project or opportunity? I'd love to connect!
      </p>

      <div className="max-w-2xl bg-surface border border-border rounded-xl p-8 md:p-12 relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(100,255,218,0.05), transparent 70%)', transform: 'translate(30%, -30%)' }}
        />

        {sent ? (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="font-syne font-bold text-white text-2xl mb-2">Message Sent!</h3>
            <p className="text-muted text-sm">I'll get back to you soon.</p>
          </div>
        ) : (
          <div className="space-y-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full bg-bg border border-border rounded-md px-4 py-3 text-white text-sm font-mono outline-none focus:border-accent transition-colors placeholder:text-muted"
              />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full bg-bg border border-border rounded-md px-4 py-3 text-white text-sm font-mono outline-none focus:border-accent transition-colors placeholder:text-muted"
              />
            </div>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full bg-bg border border-border rounded-md px-4 py-3 text-white text-sm font-mono outline-none focus:border-accent transition-colors placeholder:text-muted"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message..."
              rows={5}
              className="w-full bg-bg border border-border rounded-md px-4 py-3 text-white text-sm font-mono outline-none focus:border-accent transition-colors placeholder:text-muted resize-y"
            />
            <button
              onClick={handleSubmit}
              className="w-full bg-accent text-bg font-syne font-bold text-sm py-4 rounded-md tracking-wide hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(100,255,218,0.3)] transition-all duration-200"
            >
              Send Message →
            </button>
          </div>
        )}
      </div>

      {/* Direct contacts */}
      <div className="flex flex-wrap gap-6 mt-10">
        {[
          { label: '📞 Phone', value: '9500560864' },
          { label: '✉️ Email', value: 'dhineshkrishnan94@gmail.com' },
          { label: '📍 Location', value: 'Tirunelveli, Tamil Nadu' },
        ].map((c) => (
          <div key={c.label} className="text-xs">
            <div className="text-accent tracking-widest uppercase mb-1">{c.label}</div>
            <div className="text-muted">{c.value}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
