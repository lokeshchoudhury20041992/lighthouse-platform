import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import heroPhoto from '../assets/hero_wellness_consultation.webp'
import brandLogo from '../assets/lighthouse-logo.webp'
import {
  IconArrowRight,
  IconBrain,
  IconLock,
  IconMouse,
  IconPulse,
  IconRosette,
  IconShieldCheck,
  IconStar,
  IconTarget,
  IconUsers,
} from './icons'
import './Hero.css'

const NAV_LINKS = [
  { label: 'Home', href: '#home', active: true },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Therapy Programs', href: '#programs' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact Us', href: '#contact' },
]

const TRUST_ITEMS = [
  { label: 'Licensed Experts', Icon: IconRosette },
  { label: 'Confidential Care', Icon: IconShieldCheck },
  { label: 'Evidence-Based Therapy', Icon: IconPulse },
]

const STATS = [
  { value: '1,000+', label: 'Patients Supported', Icon: IconUsers },
  { value: '20+', label: 'Specialized Therapies', Icon: IconBrain },
  { value: '100%', label: 'Private & Confidential', Icon: IconLock },
]

/** Soft, abstract patient avatars — tinted, never pretending to be real photos. */
const AVATAR_TINTS = [
  ['#C9DDFB', '#8FB4F2'],
  ['#EEDCCC', '#D3B08F'],
  ['#D4E8DA', '#9EC7AC'],
  ['#F0D3D9', '#D3A2AE'],
]

function Avatar({ index }: { index: number }) {
  const [light, deep] = AVATAR_TINTS[index]
  const id = `lh-av-${index}`
  return (
    <svg className="hero__avatar" viewBox="0 0 44 44" aria-hidden focusable="false">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%" stopColor={light} />
          <stop offset="100%" stopColor={deep} />
        </linearGradient>
      </defs>
      <circle cx="22" cy="22" r="22" fill={`url(#${id})`} />
      <circle cx="22" cy="17.4" r="6.6" fill="#fff" opacity="0.92" />
      <path
        d="M8.6 39.4c1.4-6.4 6.9-10.9 13.4-10.9s12 4.5 13.4 10.9A21.9 21.9 0 0 1 22 44a21.9 21.9 0 0 1-13.4-4.6Z"
        fill="#fff"
        opacity="0.92"
      />
    </svg>
  )
}

/** Stagger helper: feeds the shared fade-up keyframe its delay. */
const rise = (delay: string) => ({ '--d': delay }) as CSSProperties

export default function Hero() {
  const frameRef = useRef<HTMLDivElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  // Close on Escape, on resize back to desktop, and lock scroll while open.
  useEffect(() => {
    if (!menuOpen) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    const desktop = window.matchMedia('(min-width: 1024px)')
    const onDesktop = () => {
      if (desktop.matches) setMenuOpen(false)
    }
    const prevOverflow = document.body.style.overflow
    const toggle = toggleRef.current
    document.body.style.overflow = 'hidden'

    document.addEventListener('keydown', onKey)
    desktop.addEventListener('change', onDesktop)
    return () => {
      document.removeEventListener('keydown', onKey)
      desktop.removeEventListener('change', onDesktop)
      document.body.style.overflow = prevOverflow
      toggle?.focus()
    }
  }, [menuOpen])

  // Extremely slow parallax drift on the photograph — desktop only, motion-safe.
  useEffect(() => {
    const frame = frameRef.current
    if (!frame) return

    const allowed = window.matchMedia(
      '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
    )
    let rafId = 0

    const apply = () => {
      rafId = 0
      frame.style.translate = `0 ${Math.min(window.scrollY, 600) * 0.025}px`
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
        frame.style.translate = ''
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
    <section className="hero" id="home">
      <div className="hero__atmos" aria-hidden="true">
        <span className="hero__glow hero__glow--headline" />
        <span className="hero__glow hero__glow--corner" />
        <span className="hero__glow hero__glow--seam" />
        <span className="hero__dots" />
        <span className="hero__ring hero__ring--lg" />
        <span className="hero__ring hero__ring--sm" />
        <svg className="hero__sweep" viewBox="0 0 620 420" fill="none" preserveAspectRatio="none">
          <path
            d="M-40 392C90 300 148 214 214 92 250 26 300-16 372-32"
            stroke="var(--lh-blue)"
            strokeWidth="1.2"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M-40 420C110 336 178 246 250 118 288 50 340 6 414-12"
            stroke="var(--lh-blue)"
            strokeWidth="1.2"
            vectorEffect="non-scaling-stroke"
            opacity="0.6"
          />
        </svg>
        <span className="hero__plus hero__plus--a">+</span>
        <span className="hero__plus hero__plus--b">+</span>
        <span className="hero__plus hero__plus--c">+</span>
        <span className="hero__spark hero__spark--float" />
      </div>

      <header className="nav">
        <div className="nav__inner">
          <a className="nav__brand" href="#home" aria-label="Lighthouse — home">
            <img
              className="nav__logo"
              src={brandLogo}
              width={1200}
              height={408}
              alt="Lighthouse — Better Tomorrow"
            />
          </a>

          <nav className="nav__links" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={link.active ? 'nav__link nav__link--active' : 'nav__link'}
                aria-current={link.active ? 'page' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a className="btn btn--primary nav__cta" href="#contact">
            Book Consultation
            <IconArrowRight className="btn__arrow" />
          </a>

          <button
            ref={toggleRef}
            type="button"
            className={menuOpen ? 'nav__toggle nav__toggle--open' : 'nav__toggle'}
            aria-expanded={menuOpen}
            aria-controls="lh-nav-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="nav__toggle-bar" />
            <span className="nav__toggle-bar" />
            <span className="nav__toggle-bar" />
          </button>
        </div>

        {menuOpen && (
          <>
            <button
              type="button"
              className="nav__scrim"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            />
            <nav className="nav__panel" id="lh-nav-menu" aria-label="Primary">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={link.active ? 'nav__panel-link nav__panel-link--active' : 'nav__panel-link'}
                  aria-current={link.active ? 'page' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                className="btn btn--primary nav__panel-cta"
                href="#contact"
                onClick={() => setMenuOpen(false)}
              >
                Book Consultation
                <IconArrowRight className="btn__arrow" />
              </a>
            </nav>
          </>
        )}
      </header>

      <div className="hero__body">
        <div className="hero__copy">
          <p className="hero__badge lh-rise" style={rise('0.05s')}>
            <IconBrain className="hero__badge-icon" size={17} />
            Neuropsychological &amp; Mental Wellness Clinic
          </p>

          <h1 className="hero__title">
            <span className="lh-rise" style={rise('0.14s')}>
              Your Trusted Partner
            </span>
            <span
              className="hero__title-for lh-rise"
              style={rise('0.22s')}
            >
              for
            </span>
            <span className="lh-rise" style={rise('0.3s')}>
              <span className="hero__accent">
                Mental Wellness
                <svg
                  className="hero__underline"
                  viewBox="0 0 300 20"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 13.4c46-6.6 92-9.4 138-8.6 52 .9 104 4.4 156 10.4"
                    stroke="var(--lh-blue)"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    d="M14 18c44-4.4 88-6.2 132-5.6"
                    stroke="var(--lh-blue)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.32"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
                <span className="hero__spark hero__spark--underline" aria-hidden="true" />
              </span>
            </span>
          </h1>

          <p className="hero__lede lh-rise" style={rise('0.4s')}>
            Expert psychological counselling, neuropsychological assessments, therapy, and
            emotional wellness services designed to help you live a healthier and happier life.
          </p>

          <div className="hero__actions lh-rise" style={rise('0.48s')}>
            <a className="btn btn--primary btn--lg" href="#contact">
              Book Consultation
              <IconArrowRight className="btn__arrow" />
            </a>
            <a className="btn btn--ghost btn--lg" href="#services">
              <IconTarget className="btn__lead" />
              Explore Services
            </a>
          </div>

          <ul className="hero__trust lh-rise" style={rise('0.56s')}>
            {TRUST_ITEMS.map(({ label, Icon }) => (
              <li key={label} className="hero__trust-item">
                <Icon className="hero__trust-icon" size={19} />
                {label}
              </li>
            ))}
          </ul>

          <div className="hero__proof lh-rise" style={rise('0.64s')}>
            <div className="hero__avatars" aria-hidden="true">
              {AVATAR_TINTS.map((_, i) => (
                <Avatar key={i} index={i} />
              ))}
            </div>
            <div className="hero__proof-text">
              <p className="hero__rating">
                <span className="hero__stars" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <IconStar key={i} />
                  ))}
                </span>
                <strong>4.9/5 Rating</strong>
              </p>
              <p className="hero__proof-note">
                Trusted by 5,000+ Patients Across Howrah &amp; Kolkata
              </p>
            </div>
          </div>
        </div>

        <div className="hero__media">
          <div className="hero__panel">
            <div className="hero__frame lh-photo" ref={frameRef}>
            <img
              className="hero__photo"
              src={heroPhoto}
              width={1086}
              height={1448}
              alt="A Lighthouse psychologist in conversation with a patient during a warm, sunlit counselling session."
              fetchPriority="high"
              decoding="async"
            />
            <span className="hero__frame-veil" aria-hidden="true" />
            </div>

          <div className="hero__stats lh-rise" style={rise('0.86s')}>
            {STATS.map(({ value, label, Icon }) => (
              <div key={label} className="hero__stat">
                <span className="hero__stat-icon">
                  <Icon size={21} />
                </span>
                <p className="hero__stat-value">{value}</p>
                <p className="hero__stat-label">{label}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>

      <a className="hero__scroll lh-rise" style={rise('1s')} href="#services">
        <IconMouse className="hero__scroll-icon" />
        Scroll to Discover
      </a>
    </section>
  )
}
