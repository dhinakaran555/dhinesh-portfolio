"use client";
import { useState } from "react";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center px-6 md:px-12 pt-32 pb-16 relative overflow-hidden"
    >
      {/* Grid BG */}
      <div className="hero-grid absolute inset-0" />

      {/* Hamburger Menu Button (Mobile Only) */}
      <button
        className="absolute top-8 right-6 md:hidden z-20 text-white text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 right-0 h-screen w-2/3 bg-bg z-10 flex flex-col items-start p-6 space-y-6 transform transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <a href="#projects" className="text-white text-lg hover:text-accent">Projects</a>
        <a href="#contact" className="text-white text-lg hover:text-accent">Contact</a>
        <a href="#about" className="text-white text-lg hover:text-accent">About</a>
      </div>

      {/* Left Content */}
      <div className="relative z-10 flex-1 md:pr-12 flex flex-col justify-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-2 rounded-full text-xs text-accent tracking-widest uppercase mb-8 animate-fade-up">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
          Available for hire
        </div>

        {/* Name */}
        <h1
          className="font-syne font-extrabold leading-none tracking-tight text-white"
          style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)", animationDelay: "0.1s" }}
        >
          <span className="block animate-fade-up">Dhina</span>
          <span
            className="block animate-fade-up"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px #64ffda",
              animationDelay: "0.5s",
            }}
          >
            karan R
          </span>
        </h1>

        {/* Role */}
        <p
          className="font-serif italic font-light text-muted mt-6 animate-fade-up"
          style={{ fontSize: "clamp(1.2rem, 3vw, 2rem)", animationDelay: "0.2s" }}
        >
          Frontend Developer — React & Next.js
        </p>

        {/* Desc */}
        <p
          className="text-sm text-muted leading-relaxed max-w-lg mt-4 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          Crafting responsive, high-performance web experiences at{" "}
          <span className="text-accent">Star Health & Allied Insurance</span>. Passionate about
          clean code, pixel-perfect UI, and seamless user experiences.
        </p>

        {/* Contact Info */}
        <div
          className="flex flex-wrap gap-4 mt-5 text-xs text-muted animate-fade-up"
          style={{ animationDelay: "0.35s" }}
        >
          <span>📞 9500560864</span>
          <span>✉️ dhineshkrishnan94@gmail.com</span>
        </div>

        {/* CTA */}
        <div
          className="flex flex-wrap gap-4 mt-8 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#projects"
            className="bg-accent text-bg px-8 py-3 rounded font-syne font-bold text-sm tracking-wide hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(100,255,218,0.3)] transition-all duration-200 no-underline"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-border text-white px-8 py-3 rounded font-syne font-semibold text-sm tracking-wide hover:border-accent hover:text-accent transition-all duration-200 no-underline"
          >
            Get In Touch
          </a>
        </div>

        {/* Stats */}
        <div
          className="flex flex-wrap gap-12 mt-16 pt-8 border-t border-border animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          {[
            { num: "1+", label: "Years Exp" },
            { num: "15+", label: "Projects" },
            { num: "8+", label: "Tech Stack" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-syne font-extrabold text-3xl text-white">
                {s.num.replace("+", "")}
                <span className="text-accent">+</span>
              </div>
              <div className="text-xs text-muted tracking-widest uppercase mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center md:justify-end mt-12 md:mt-0">
        <img
          src="/photo set.png"
          alt="img"
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        />
      </div>

      {/* Glow */}
      <div
        className="absolute w-[1200px] h-[1200px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(100,255,218,0.07) 0%, transparent 70%)",
          top: "80%",
          left: "70%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </section>
  );
}
