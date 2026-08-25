import { useEffect, useRef } from 'react'
import aboutPhoto from '../assets/premium_therapy_room.jpg'
import {
  IconRosette,
  IconPulse,
  IconTarget,
  IconUsers,
  IconSmile,
  IconHeart,
  IconStar,
  LighthouseMark,
} from './icons'

const FEATURES = [
  { label: 'Licensed Psychologists', Icon: IconRosette },
  { label: 'Evidence-Based Therapy', Icon: IconPulse },
  { label: 'Individual Care Plans', Icon: IconTarget },
  { label: 'Family Counselling', Icon: IconUsers },
  { label: 'Child Psychology', Icon: IconSmile },
  { label: 'Couples Therapy', Icon: IconHeart },
]

export default function About() {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = imageRef.current
    if (!el) return
    const allowed = window.matchMedia(
      '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
    )
    let rafId = 0

    const apply = () => {
      rafId = 0
      const rect = el.getBoundingClientRect()
      const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
      const clamped = Math.max(0, Math.min(1, scrollProgress))
      el.style.transform = `translateY(${(clamped - 0.5) * 20}px)`
    }

    const onScroll = () => {
      if (!rafId) rafId = window.requestAnimationFrame(apply)
    }

    const sync = () => {
      if (allowed.matches) {
        window.addEventListener('scroll', onScroll, { passive: true })
        apply()
      } else {
        window.removeEventListener('scroll', onScroll)
        el.style.transform = ''
      }
    }

    sync()
    allowed.addEventListener('change', sync)
    return () => {
      allowed.removeEventListener('change', sync)
      window.removeEventListener('scroll', onScroll)
      if (rafId) window.cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section className="lh-section lh-section--mesh" id="about">
      <div className="about-decor-glow" aria-hidden="true" />
      
      <div className="about-grid">
        {/* Left Column: Premium Clinic Image */}
        <div className="about-media-wrapper reveal-on-scroll">
          <div className="about-decor-circle about-decor-circle--1" aria-hidden="true" />
          <div className="about-decor-circle about-decor-circle--2" aria-hidden="true" />
          <div className="about-decor-dots about-decor-dots--top" aria-hidden="true" />
          <svg className="about-decor-curve" viewBox="0 0 400 200" fill="none" aria-hidden="true">
            <path d="M10 80C120 20 280 180 390 100" stroke="var(--lh-blue)" strokeWidth="1.2" strokeDasharray="6 6" />
          </svg>
          
          <div className="about-image-frame" ref={imageRef}>
            <img
              src={aboutPhoto}
              alt="Premium therapy room in the Lighthouse clinic, with warm light and clean interior design."
              className="about-image"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Column: About Content */}
        <div className="about-content reveal-on-scroll" style={{ transitionDelay: '0.15s' }}>
          <span className="section-pill">
            <LighthouseMark size={14} />
            About Lighthouse
          </span>
          
          <h2 className="section-title">
            About{' '}
            <span className="title-accent">
              Lighthouse
              <svg className="title-underline" viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true">
                <path
                  d="M3 13.4c46-6.6 92-9.4 138-8.6 52 .9 104 4.4 156 10.4"
                  stroke="var(--lh-blue)"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </span>
          </h2>
          
          <p className="about-body">
            Lighthouse is a trusted neuropsychological and counselling center dedicated to improving emotional, 
            cognitive, and psychological wellbeing.
            <br />
            <br />
            Our team of experienced psychologists provides compassionate, confidential, and evidence-based care for 
            individuals, couples, and families.
          </p>

          <div className="feature-list">
            {FEATURES.map(({ label, Icon }) => (
              <div key={label} className="feature-item">
                <span className="feature-icon-circle">
                  <Icon size={18} />
                </span>
                <span className="feature-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Statistics Panel */}
      <div className="stats-panel-container reveal-on-scroll">
        <div className="stats-panel">
          <div className="stat-col">
            <div className="stat-icon-wrapper">
              <IconStar size={20} />
            </div>
            <span className="stat-value-huge">15+</span>
            <span className="stat-label-bold">Years of Experience</span>
            <p className="stat-desc">Delivering trusted mental healthcare since 2009</p>
          </div>
          
          <div className="stat-col">
            <div className="stat-icon-wrapper">
              <IconUsers size={20} />
            </div>
            <span className="stat-value-huge">5,000+</span>
            <span className="stat-label-bold">Consultations</span>
            <p className="stat-desc">Successfully supporting individuals and families</p>
          </div>
          
          <div className="stat-col">
            <div className="stat-icon-wrapper">
              <IconHeart size={20} />
            </div>
            <span className="stat-value-huge">98%</span>
            <span className="stat-label-bold">Positive Feedback</span>
            <p className="stat-desc">From our patients and their families</p>
          </div>
        </div>
      </div>
    </section>
  )
}
