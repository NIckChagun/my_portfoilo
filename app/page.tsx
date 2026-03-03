import { Navigation } from "@/components/portfolio/navigation"
import { HeroSection } from "@/components/portfolio/hero-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { EducationSection } from "@/components/portfolio/education-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { Footer } from "@/components/portfolio/footer"
import { CursorGlow } from "@/components/portfolio/cursor-glow"

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <CursorGlow />
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
