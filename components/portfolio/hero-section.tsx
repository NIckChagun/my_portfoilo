"use client"

import { useEffect, useRef } from "react"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-up")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Gradient background orb */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-3xl pt-24 text-center">
        <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
          <p className="mb-4 font-mono text-sm tracking-widest text-primary uppercase">
            Full Stack Developer
          </p>
        </div>

        <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground md:text-7xl text-balance">
            Warunyu Jantree
          </h1>
        </div>

        <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-200 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            I am a full-stack developer with 2+ years of experience,
            specializing in e-commerce systems and internal corporate software
            development. I am open to new technologies and ready to engage in
            solving problems with which we might not be familiar.
          </p>
        </div>

        <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-300 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-lg hover:shadow-primary/25"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Get In Touch
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
            >
              View My Work
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-500 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 mt-20">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="h-8 w-px animate-pulse bg-primary/50" />
          </div>
        </div>
      </div>
    </section>
  )
}
