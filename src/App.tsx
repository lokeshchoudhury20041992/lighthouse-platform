import { useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyChoose from './components/WhyChoose'
import Journey from './components/Journey'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './components/Sections.css'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    const elements = document.querySelectorAll('.reveal-on-scroll')
    elements.forEach((el) => observer.observe(el))

    // Failsafe: if nothing has revealed after a few seconds the observer never
    // delivered, so show everything rather than leave the page blank.
    const failsafe = window.setTimeout(() => {
      if (!document.querySelector('.reveal-on-scroll.active')) {
        observer.disconnect()
        elements.forEach((el) => el.classList.add('active'))
      }
    }, 3000)

    return () => {
      window.clearTimeout(failsafe)
      observer.disconnect()
    }
  }, [])

  return (
    <main>
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Journey />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}

export default App

