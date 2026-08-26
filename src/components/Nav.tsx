import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/lighthouse-logo.webp'
import { NAV_LINKS, PRIMARY_WHATSAPP } from '../data/site'
import { IconArrowRight } from './icons'
import './Nav.css'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [condensed, setCondensed] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const { pathname } = useLocation()

  // Close the panel whenever the route changes — including on back/forward, so
  // this is derived during render rather than in an effect.
  const [lastPath, setLastPath] = useState(pathname)
  if (pathname !== lastPath) {
    setLastPath(pathname)
    setOpen(false)
  }

  // Condense once the hero is behind us.
  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // While the panel is open: trap scroll, close on Escape, close at desktop width.
  useEffect(() => {
    if (!open) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const desktop = window.matchMedia('(min-width: 1000px)')
    const onDesktop = () => {
      if (desktop.matches) setOpen(false)
    }

    const previous = document.body.style.overflow
    const toggle = toggleRef.current
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    desktop.addEventListener('change', onDesktop)

    return () => {
      document.body.style.overflow = previous
      document.removeEventListener('keydown', onKey)
      desktop.removeEventListener('change', onDesktop)
      toggle?.focus()
    }
  }, [open])

  return (
    <header className={`nav${condensed ? ' nav--condensed' : ''}${open ? ' nav--open' : ''}`}>
      <div className="nav__bar">
        <Link to="/" className="nav__brand" aria-label="LIGHTHOUSE — home">
          <img src={logo} alt="LIGHTHOUSE — Better Tomorrow" width={1569} height={706} />
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="nav__actions">
          <a
            className="btn btn--primary nav__cta"
            href={PRIMARY_WHATSAPP}
            target="_blank"
            rel="noreferrer noopener"
          >
            Book a session
            <IconArrowRight size={15} className="btn__arrow" />
          </a>

          <button
            ref={toggleRef}
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="nav-panel"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <span className="nav__toggle-box" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div id="nav-panel" className="nav__panel" hidden={!open}>
        <ul className="nav__panel-list">
          {NAV_LINKS.map(({ label, to }, i) => (
            <li key={to} style={{ '--i': i } as React.CSSProperties}>
              <NavLink to={to} end={to === '/'} className="nav__panel-link">
                <span className="index-num">{String(i + 1).padStart(2, '0')}</span>
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <a
          className="btn btn--beacon btn--lg nav__panel-cta"
          href={PRIMARY_WHATSAPP}
          target="_blank"
          rel="noreferrer noopener"
        >
          Book a session
          <IconArrowRight size={16} className="btn__arrow" />
        </a>
      </div>
    </header>
  )
}
