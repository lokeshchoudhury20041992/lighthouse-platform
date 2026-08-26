import { Link } from 'react-router-dom'
import nebula from '../assets/photos/nebula.webp'
import forestPath from '../assets/photos/forest-path.webp'
import smileCard from '../assets/photos/smile-card.webp'
import { Horizon } from '../components/Brand'
import CTABand from '../components/CTABand'
import SectionHead from '../components/SectionHead'
import { IconArrowRight, IconCheck, IconMoonStars } from '../components/icons'
import { PRIMARY_WHATSAPP } from '../data/site'
import './AstroPsychology.css'

const delay = (s: number) => ({ '--d': `${s}s` }) as React.CSSProperties

const IS = [
  'A reflective consultation, booked and run like any other appointment here.',
  'A symbolic prompt for examining life patterns, choices and recurring themes.',
  'An optional companion to psychological work — many clients never use it at all.',
  'A conversation you leave with your own conclusions from.',
]

const IS_NOT = [
  'A diagnosis, or any part of a clinical formulation.',
  'A prediction of what will happen to you or to anyone else.',
  'A substitute for therapy, assessment, medication or medical care.',
  'A reason to delay treatment that a clinician has recommended.',
]

const SESSION = [
  {
    num: '01',
    title: 'We start with the concern',
    body: 'Not with a chart. The consultation opens the same way every appointment here does — with what has actually been happening, and what you are trying to make sense of.',
  },
  {
    num: '02',
    title: 'Symbolism as a prompt',
    body: 'Astrological and numerological material is introduced as a language for reflection: recurring themes, transitions, and the shape a life has taken so far.',
  },
  {
    num: '03',
    title: 'You do the interpreting',
    body: 'The practitioner offers the frame; the meaning is yours to test against your own experience. Anything that does not fit is discarded, openly.',
  },
  {
    num: '04',
    title: 'Clinical care stays in view',
    body: 'If the conversation surfaces something that needs psychological or medical attention, we say so and route it to the right service — the same day where it matters.',
  },
]

export default function AstroPsychology() {
  return (
    <>
      {/* -------------------------------------------------------------- Hero */}
      <section className="astro-hero">
        <img className="astro-hero__bg" src={nebula} alt="" aria-hidden="true" />
        <div className="astro-hero__inner shell">
          <div className="astro-hero__meta reveal">
            <span className="index-num">Page 04</span>
            <span className="eyebrow">Mixing two sciences</span>
          </div>

          <h1 className="astro-hero__title t-h1 reveal" style={delay(0.06)}>
            Astro-Psychology, <span className="accent">stated honestly.</span>
          </h1>

          <p className="astro-hero__lead t-lead reveal" style={delay(0.14)}>
            Psychology helps us understand the mind. Astrology offers a symbolic language for
            exploring life's patterns and meaning. LIGHTHOUSE brings these two into a thoughtful and
            responsible conversation — with a line between them that we never blur.
          </p>

          <Horizon bars={7} width={180} className="astro-hero__horizon reveal" style={delay(0.2)} />
        </div>
      </section>

      {/* ---------------------------------------------------------- Is / Is not */}
      <section className="section section--paper">
        <SectionHead
          index="01"
          eyebrow="The line"
          title={
            <>
              What it is, and what it <span className="accent">is not.</span>
            </>
          }
          lead="This is the part most practices leave vague. We would rather put it in writing before you book."
        />

        <div className="ledger">
          <div className="ledger__col reveal">
            <h3 className="ledger__head ledger__head--yes">What it is</h3>
            <ul>
              {IS.map((t) => (
                <li key={t}>
                  <IconCheck size={15} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="ledger__col ledger__col--no reveal" style={delay(0.08)}>
            <h3 className="ledger__head ledger__head--no">What it is not</h3>
            <ul>
              {IS_NOT.map((t) => (
                <li key={t}>
                  <span className="ledger__x" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- Origins */}
      <section className="section section--white">
        <div className="origins">
          <figure className="origins__media reveal">
            <div className="frame zoomable origins__frame">
              <img
                src={forestPath}
                alt="A footpath disappearing between tall trees in soft light."
                width={1600}
                height={1066}
                loading="lazy"
              />
            </div>
          </figure>

          <div className="origins__copy">
            <SectionHead
              index="02"
              eyebrow="Where the idea came from"
              align="left"
              title={
                <>
                  A family with two <span className="accent">different trainings.</span>
                </>
              }
            />
            <div className="prose reveal" style={delay(0.08)}>
              <p>
                The idea was shaped by the founder's long-standing interest in astrology, numerology
                and traditional systems of knowledge, while other members of the family brought
                professional experience in psychology and psychological services.
              </p>
              <p>
                Sitting between the two for years produced the question that became LIGHTHOUSE: can
                these perspectives be brought together <em>responsibly</em> — not by collapsing one
                into the other, but by letting each do what it is actually good at?
              </p>
              <p>
                Psychology assesses and treats. Symbolism offers a vocabulary for meaning. Held
                apart and used deliberately, they do not compete.
              </p>
            </div>
            <Link className="link origins__link reveal" to="/about" style={delay(0.14)}>
              The full birth history of LIGHTHOUSE
              <IconArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ Session */}
      <section className="section section--ink">
        <SectionHead
          index="03"
          eyebrow="In the room"
          title={
            <>
              How a consultation <span className="accent">actually runs.</span>
            </>
          }
          lead="Four movements, in this order. If at any point you would rather stop and work with a psychologist instead, that is a normal outcome, not a failed session."
        />

        <ol className="session">
          {SESSION.map((s, i) => (
            <li key={s.num} className="session__step reveal" style={delay(i * 0.06)}>
              <span className="session__num">{s.num}</span>
              <div>
                <h3 className="session__title t-h3">{s.title}</h3>
                <p className="session__body">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* -------------------------------------------------------- Safeguarding */}
      <section className="section section--paper-2">
        <div className="safeguard">
          <div className="safeguard__copy">
            <SectionHead
              index="04"
              eyebrow="Safeguarding"
              align="left"
              title={
                <>
                  Psychology stays <span className="accent">the foundation.</span>
                </>
              }
            />

            <div className="notice reveal" style={delay(0.06)}>
              <p className="notice__head">Our standing commitment</p>
              <p>
                Astrology and numerology are approached at LIGHTHOUSE as additional perspectives
                rather than replacements for professional psychological or medical care. We do not
                use them to diagnose, to predict outcomes, to advise on medication, or to discourage
                treatment. Where clinical care is indicated, clinical care is what we recommend.
              </p>
            </div>

            <div className="notice safeguard__urgent reveal" style={delay(0.12)}>
              <p className="notice__head">If it is urgent</p>
              <p>
                If you are in immediate danger, or thinking about harming yourself or someone else,
                please contact emergency services or go to the nearest hospital now. Do not wait for
                an appointment.
              </p>
            </div>

            <a
              className="btn btn--primary safeguard__cta reveal"
              href={PRIMARY_WHATSAPP}
              target="_blank"
              rel="noreferrer noopener"
              style={delay(0.18)}
            >
              <IconMoonStars size={16} />
              Ask about a consultation
            </a>
          </div>

          <figure className="safeguard__media reveal" style={delay(0.08)}>
            <div className="frame zoomable safeguard__frame">
              <img
                src={smileCard}
                alt="A person holding a card drawn with a simple smile in front of their face."
                width={1400}
                height={933}
                loading="lazy"
              />
            </div>
          </figure>
        </div>
      </section>

      <CTABand
        title={
          <>
            Curious, sceptical,
            <br />
            or <span className="accent">both?</span>
          </>
        }
        body="Both are reasonable starting positions, and neither is a problem. Ask us what a consultation involves before you decide whether it is for you."
      />
    </>
  )
}
