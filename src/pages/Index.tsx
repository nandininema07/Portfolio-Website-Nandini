import { useState } from 'react'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Education } from '@/components/sections/Education'
import { Experience } from '@/components/sections/Experience'
import { Hackathons } from '@/components/sections/Hackathons'
import { Projects } from '@/components/sections/Projects'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main>
          <section id="hero">
            <Hero />
          </section>
          
          <section id="about">
            <About />
          </section>
          
          <section id="skills">
            <Skills />
          </section>
          
          <section id="education">
            <Education />
          </section>
          
          <section id="experience">
            <Experience />
          </section>
          
          <section id="hackathons">
            <Hackathons />
          </section>
          
          <section id="projects">
            <Projects />
          </section>
          
          <section id="contact">
            <Contact />
          </section>
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Index
