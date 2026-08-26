import { Link } from 'react-router-dom'
import { Horizon } from '../components/Brand'
import { IconArrowRight } from '../components/icons'
import { NAV_LINKS } from '../data/site'

export default function NotFound() {
  return (
    <section className="section section--paper" style={{ paddingBlock: 'clamp(60px, 10vw, 140px)' }}>
      <div style={{ display: 'grid', gap: 20, maxWidth: '54ch' }}>
        <Horizon bars={6} width={140} style={{ color: 'var(--beacon)' }} />
        <p className="index-num">Error 404</p>
        <h1 className="t-h1">
          This page is not <span className="accent">on the chart.</span>
        </h1>
        <p className="t-lead">
          The link may be old, or the address slightly off. Everything the site holds is one of
          these six pages.
        </p>
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 4 }}>
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <Link className="btn btn--ghost" to={to}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link className="btn btn--primary" to="/" style={{ justifySelf: 'start', marginTop: 8 }}>
          Back to the beginning
          <IconArrowRight size={15} className="btn__arrow" />
        </Link>
      </div>
    </section>
  )
}
