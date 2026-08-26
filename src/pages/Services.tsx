import { useState } from 'react'
import childPlay from '../assets/photos/child-play.webp'
import familyReading from '../assets/photos/family-reading.webp'
import handsReach from '../assets/photos/hands-reach.webp'
import mindfulness from '../assets/photos/mindfulness.webp'
import CTABand from '../components/CTABand'
import Marquee from '../components/Marquee'
import PageHeader from '../components/PageHeader'
import SectionHead from '../components/SectionHead'
import { IconArrowRight, IconPlus } from '../components/icons'
import {
  CLINIC,
  FAQS,
  PRIMARY_WHATSAPP,
  SERVICES,
  SERVICE_GROUPS,
  whatsappLink,
} from '../data/site'
import './Services.css'

const delay = (s: number) => ({ '--d': `${s}s` }) as React.CSSProperties

const GROUP_NOTES: Record<string, string> = {
  'Therapy & Counselling': 'Talking work, held over a series of sessions.',
  Assessment: 'Structured measurement, in plain language.',
  'Life Stages': 'Care shaped to the age and the moment.',
  'Reflective Practice': 'Offered alongside clinical care, never instead of it.',
}

const STRIP = [
  { src: handsReach, alt: 'Two hands reaching towards each other against a plain wall.' },
  { src: familyReading, alt: 'A parent reading with two young children on a sofa.' },
  { src: childPlay, alt: 'A child concentrating on an activity at a low table.' },
  { src: mindfulness, alt: 'A person in a yoga posture, silhouetted against an evening sky.' },
]

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <>
      <PageHeader
        index="Page 03"
        eyebrow="Services"
        title={
          <>
            Twelve ways in. <span className="accent">One starting point.</span>
          </>
        }
        standfirst="Whatever brings you here, the first appointment looks the same: an unhurried conversation about what has been happening, in your words, before anything is named or planned."
      >
        <div className="pagehead__actions">
          <a
            className="btn btn--primary"
            href={PRIMARY_WHATSAPP}
            target="_blank"
            rel="noreferrer noopener"
          >
            Ask which service fits
            <IconArrowRight size={15} className="btn__arrow" />
          </a>
        </div>
      </PageHeader>

      <Marquee
        className="marquee--quiet"
        speed={44}
        items={SERVICES.map((s) => s.title)}
      />

      {SERVICE_GROUPS.map((group, gi) => {
        const items = SERVICES.filter((s) => s.group === group)
        return (
          <section
            key={group}
            className={`section ${gi % 2 === 0 ? 'section--paper' : 'section--white'}`}
          >
            <SectionHead
              index={String(gi + 1).padStart(2, '0')}
              eyebrow={group}
              title={GROUP_NOTES[group]}
              lead={`${items.length} ${items.length === 1 ? 'service' : 'services'} in this group.`}
            />

            <ul className="svc-list">
              {items.map((s, i) => (
                <li
                  key={s.slug}
                  id={s.slug}
                  className="svc-card reveal"
                  style={delay(i * 0.06)}
                >
                  <div className="svc-card__head">
                    <span className="index-num">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="svc-card__title">{s.title}</h3>
                  </div>

                  <div className="svc-card__body">
                    <p className="svc-card__blurb">{s.blurb}</p>
                    <p className="svc-card__detail">{s.detail}</p>

                    <ul className="tags svc-card__tags">
                      {s.forWhom.map((w) => (
                        <li key={w} className="tag">
                          {w}
                        </li>
                      ))}
                    </ul>

                    <a
                      className="link svc-card__ask"
                      href={whatsappLink(
                        CLINIC.phones[0],
                        `Hello Lighthouse, I would like to ask about ${s.title}.`,
                      )}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Ask about {s.title.toLowerCase()}
                      <IconArrowRight size={14} />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )
      })}

      {/* Photo strip — breathing space between the list and the questions. */}
      <ul className="svc-strip">
        {STRIP.map((img, i) => (
          <li key={i} className="svc-strip__cell reveal" style={delay(i * 0.06)}>
            <div className="frame zoomable svc-strip__frame">
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          </li>
        ))}
      </ul>

      {/* ----------------------------------------------------------------- FAQ */}
      <section className="section section--paper-2">
        <SectionHead
          index="05"
          eyebrow="Before you call"
          title={
            <>
              The questions people ask <span className="accent">first.</span>
            </>
          }
        />

        <ul className="faq">
          {FAQS.map((f, i) => {
            const open = openFaq === i
            return (
              <li key={f.q} className={`faq__item${open ? ' is-open' : ''} reveal`} style={delay(i * 0.04)}>
                <h3>
                  <button
                    type="button"
                    className="faq__q"
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    onClick={() => setOpenFaq(open ? null : i)}
                  >
                    <span className="index-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="faq__q-text">{f.q}</span>
                    <IconPlus size={17} className="faq__icon" />
                  </button>
                </h3>
                <div
                  className="faq__panel"
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  hidden={!open}
                >
                  <p>{f.a}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </section>

      <CTABand
        title={
          <>
            Not sure which
            <br />
            of these <span className="accent">is yours?</span>
          </>
        }
        body="Then describe the problem rather than the category. Tell us what has been happening and we will suggest where to start — that is our job, not yours."
      />
    </>
  )
}
