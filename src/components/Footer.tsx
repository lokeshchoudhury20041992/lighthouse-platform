import { Link } from 'react-router-dom'
import logoLight from '../assets/lighthouse-logo-light.webp'
import { CLINIC, NAV_LINKS, PRIMARY_WHATSAPP, SERVICES } from '../data/site'
import { Horizon } from './Brand'
import { IconArrowRight, IconMapPin, IconStar } from './icons'
import './Footer.css'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="foot section--ink">
      <div className="foot__top shell">
        <div className="foot__brand">
          <img className="foot__logo" src={logoLight} alt="LIGHTHOUSE — Better Tomorrow" />
          <p className="foot__creed">
            A lighthouse does not sail the ship. It does not choose the destination. It provides
            light — so the traveller can see the hazards and move forward with greater awareness.
          </p>
          <Horizon bars={7} width={168} className="foot__horizon" />
        </div>

        <nav className="foot__col" aria-label="Pages">
          <h2 className="foot__head">Pages</h2>
          <ul>
            {NAV_LINKS.map(({ label, to }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="foot__col" aria-label="Services">
          <h2 className="foot__head">Services</h2>
          <ul>
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to={`/services#${s.slug}`}>{s.title}</Link>
              </li>
            ))}
            <li>
              <Link to="/services" className="foot__more">
                All services
                <IconArrowRight size={13} />
              </Link>
            </li>
          </ul>
        </nav>

        <div className="foot__col foot__col--contact">
          <h2 className="foot__head">Visit &amp; contact</h2>
          <address>
            <p className="foot__address">
              {CLINIC.locality}
              <br />
              {CLINIC.region}
            </p>
            <p className="foot__landmark">
              <IconMapPin size={14} />
              {CLINIC.landmark}
            </p>
            <ul className="foot__phones">
              {CLINIC.phones.map((p) => (
                <li key={p}>
                  <a href={`tel:+91${p}`}>+91 {p}</a>
                </li>
              ))}
            </ul>
          </address>

          <div className="foot__links">
            <a href={CLINIC.mapsUrl} target="_blank" rel="noreferrer noopener" className="foot__ext">
              Open in Google Maps
              <IconArrowRight size={13} />
            </a>
            <a
              href={CLINIC.reviewUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="foot__ext"
            >
              <IconStar size={13} />
              Leave a Google review
            </a>
          </div>

          <a
            className="btn btn--beacon foot__cta"
            href={PRIMARY_WHATSAPP}
            target="_blank"
            rel="noreferrer noopener"
          >
            WhatsApp the clinic
            <IconArrowRight size={15} className="btn__arrow" />
          </a>
        </div>
      </div>

      <div className="foot__note shell">
        <p>
          LIGHTHOUSE provides psychological services. Astrology and numerology are offered only as
          additional perspectives for reflection and are not a substitute for professional
          psychological or medical care. If you are in immediate danger, contact emergency services
          or the nearest hospital.
        </p>
      </div>

      <div className="foot__base shell">
        <p>
          © {YEAR} LIGHTHOUSE<sup>®</sup> — Established {CLINIC.established}, {CLINIC.locality}
        </p>
        <p className="foot__mark">Better Tomorrow</p>
      </div>
    </footer>
  )
}
