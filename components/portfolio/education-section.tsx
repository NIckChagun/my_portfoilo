"use client"

import { useEffect, useRef } from "react"

export function EducationSection() {
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
    <section ref={sectionRef} id="education" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
          <div className="mb-16 flex items-center gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Education
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>
        </div>

        <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-150 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
          <div className="group rounded-2xl border border-border bg-card/50 p-8 transition-all hover:border-primary/30 hover:bg-card hover:shadow-lg hover:shadow-primary/5">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
              {/* Icon */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-lg bg-primary/10 px-3 py-1 font-mono text-xs font-medium text-primary">
                    2020 - 2024
                  </span>
                  <span className="rounded-lg bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                    {"Bachelor's Degree"}
                  </span>
                </div>

                <h3 className="mb-2 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                  Silpakorn University
                </h3>

                <p className="mb-3 font-medium text-foreground/80">
                  Faculty of Information and Communication Technology
                </p>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  Digital Technology for Business - Relevant background in
                  digital systems, business processes, and technology-driven
                  problem solving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
