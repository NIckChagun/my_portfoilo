"use client"

import { useEffect, useRef } from "react"

const experiences = [
  {
    title: "Enterprise POS System",
    description:
      "Developed and maintained a Point of Sale (POS) system for branches nationwide, ensuring seamless transaction processing and real-time data synchronization.",
  },
  {
    title: "E-commerce Platform",
    description:
      "Built and optimized a scalable E-commerce system to enhance online sales performance and improve user purchasing journeys.",
  },
  {
    title: "Inventory & Stock Management",
    description:
      "Real-time tracking and optimization of product stock across the organization.",
  },
  {
    title: "Promotion & Coupon Engines",
    description:
      "Developed flexible systems for managing complex marketing campaigns and discount codes.",
  },
  {
    title: "Order Tracking System",
    description:
      "Built a comprehensive logistics tracking platform for real-time shipment status updates.",
  },
]

export function ExperienceSection() {
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
    <section ref={sectionRef} id="experience" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
          <div className="mb-16 flex items-center gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Experience
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>
        </div>

        <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
          <div className="mb-8 flex items-start gap-6">
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">
                Advice IT Infinite Co., Ltd.
              </h3>
              <p className="mt-1 font-mono text-sm text-primary">
                Full Stack Developer
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                2024 - Present
              </p>
            </div>
          </div>
        </div>

        {/* Work Showcase Images */}
        <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-150 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 mb-10 ml-6 pl-12 md:ml-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="group relative overflow-hidden rounded-xl border border-border bg-card/50 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home_page_new-HffQAr6yyFGT1HZTpihSikOWmhRoP9.jpg"
                  alt="Advice E-commerce Homepage - Apple Authorized Reseller showcasing iPhone 17e products"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-foreground">E-commerce Homepage</p>
                <p className="mt-1 text-xs text-muted-foreground">Main storefront with product showcase</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl border border-border bg-card/50 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cart_page_new-rO6SAjpsH1tigzQjLILQoolTeELzLp.jpg"
                  alt="Advice Shopping Cart - Product listing with checkout functionality"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-foreground">Shopping Cart System</p>
                <p className="mt-1 text-xs text-muted-foreground">Cart management with real-time pricing</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative ml-6 border-l border-border pl-12 md:ml-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 relative pb-10 last:pb-0`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-12 top-1 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary/50 bg-background">
                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>

              <div className="group rounded-xl border border-transparent p-5 transition-all hover:border-border hover:bg-card/50">
                <h4 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                  {exp.title}
                </h4>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
