"use client"

import { useEffect, useRef } from "react"

export function ContactSection() {
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
    <section ref={sectionRef} id="contact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
          <p className="mb-4 font-mono text-sm tracking-widest text-primary uppercase">
            Contact
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            {"Let's Work Together"}
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
            {"I'm currently open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out!"}
          </p>
        </div>

        <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-150 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            {/* Email */}
            <a
              href="mailto:warunyu.ja.work@gmail.com"
              className="group flex w-full items-center gap-4 rounded-xl border border-border bg-card/50 px-6 py-4 transition-all hover:border-primary/30 hover:bg-card hover:shadow-lg hover:shadow-primary/5 sm:w-auto"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                  warunyu.ja.work@gmail.com
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:0922704445"
              className="group flex w-full items-center gap-4 rounded-xl border border-border bg-card/50 px-6 py-4 transition-all hover:border-primary/30 hover:bg-card hover:shadow-lg hover:shadow-primary/5 sm:w-auto"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                  092-270-4445
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
