import { Link } from 'react-router-dom'
import { CLINIC, PRIMARY_WHATSAPP } from '../data/site'
import { Horizon } from './Brand'
import { IconArrowRight, IconPhone } from './icons'

/** Closing invitation. Appears at the foot of every page, above the footer. */
export default function CTABand({
  title = (
    <>
      You do not need
      <br />
      the <span className="accent">right words</span>.
    </>
  ),
  body = 'A sentence about what has been difficult is enough to begin. Call either number, or send a message and we will reply with the next available times.',
}: {
  title?: React.ReactNode
  body?: string
}) {
  return (
    <section className="ctaband section section--ink">
      <Horizon bars={8} width={200} className="ctaband__horizon reveal" />

      <h2 className="ctaband__title t-h1 reveal" style={{ '--d': '0.05s' } as React.CSSProperties}>
        {title}
      </h2>

      <p className="ctaband__body t-lead reveal" style={{ '--d': '0.12s' } as React.CSSProperties}>
        {body}
      </p>

      <div className="ctaband__actions reveal" style={{ '--d': '0.18s' } as React.CSSProperties}>
        <a
          className="btn btn--beacon btn--lg"
          href={PRIMARY_WHATSAPP}
          target="_blank"
          rel="noreferrer noopener"
        >
          Message on WhatsApp
          <IconArrowRight size={16} className="btn__arrow" />
        </a>
        <a className="btn btn--ghost btn--lg" href={`tel:+91${CLINIC.phones[0]}`}>
          <IconPhone size={15} />
          +91 {CLINIC.phones[0]}
        </a>
        <Link className="btn btn--ghost btn--lg" to="/contact">
          Visit &amp; hours
        </Link>
      </div>
    </section>
  )
}
