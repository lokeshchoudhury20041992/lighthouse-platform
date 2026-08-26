import { Link } from 'react-router-dom'
import heroPhoto from '../assets/photos/hero-consultation.webp'
import seaPath from '../assets/photos/sea-path.webp'
import nightSky from '../assets/photos/night-sky.webp'
import clinicInterior from '../assets/photos/clinic-interior.webp'
import handsSession from '../assets/photos/hands-session.webp'
import avatar1 from '../assets/photos/avatar-1.webp'
import avatar2 from '../assets/photos/avatar-2.webp'
import avatar3 from '../assets/photos/avatar-3.webp'
import avatar4 from '../assets/photos/avatar-4.webp'
import { Horizon } from '../components/Brand'
import CTABand from '../components/CTABand'
import Marquee from '../components/Marquee'
import SectionHead from '../components/SectionHead'
import {
  IconArrowRight,
  IconArrowUpRight,
  IconMapPin,
  IconMoonStars,
  IconQuote,
  IconStar,
} from '../components/icons'
import {
  BEACON_VALUES,
  CLINIC,
  JOURNEY_STEPS,
  PRIMARY_WHATSAPP,
  SERVICES,
  TESTIMONIALS,
} from '../data/site'
import './Home.css'

const AVATARS = [avatar1, avatar2, avatar3, avatar4]

const delay = (s: number) => ({ '--d': `${s}s` }) as React.CSSProperties

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="hero section section--paper">
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow reveal">
              Est. {CLINIC.established} — {CLINIC.locality}
            </p>

            <h1 className="hero__title t-display">
              <span className="reveal-line" style={delay(0.05)}>
                <span>A light for</span>
              </span>
              <span className="reveal-line" style={delay(0.14)}>
                <span>
                  the way <span className="accent">through.</span>
                </span>
              </span>
            </h1>

            <p className="hero__lead t-lead reveal" style={delay(0.3)}>
              LIGHTHOUSE is a psychological practice in Howrah offering counselling, therapy and
              neuropsychological assessment — and, alongside them, a reflective space for the
              question underneath: what does this mean, and where do I go from here?
            </p>

            <div className="hero__actions reveal" style={delay(0.38)}>
              <a
                className="btn btn--primary btn--lg"
                href={PRIMARY_WHATSAPP}
                target="_blank"
                rel="noreferrer noopener"
              >
                Book a session
                <IconArrowRight size={16} className="btn__arrow" />
              </a>
              <Link className="btn btn--ghost btn--lg" to="/services">
                See what we do
              </Link>
            </div>

            <div className="hero__proof reveal" style={delay(0.46)}>
              <ul className="hero__avatars">
                {AVATARS.map((src, i) => (
                  <li key={i}>
                    <img src={src} alt="" width={320} height={320} loading="lazy" />
                  </li>
                ))}
              </ul>
              <p className="t-small">
                Individuals, couples and families across Howrah &amp; Kolkata — seen since{' '}
                {CLINIC.established}.
              </p>
            </div>
          </div>

          <div className="hero__media reveal" style={delay(0.16)}>
            <figure className="hero__arch arch zoomable">
              <img
                src={heroPhoto}
                alt="A counsellor listening to a client in a bright consulting room at the Lighthouse clinic."
                width={1086}
                height={1448}
                fetchPriority="high"
              />
            </figure>
            <Horizon bars={6} width={196} className="hero__horizon" />
            <p className="hero__stamp">Better Tomorrow</p>
          </div>
        </div>

        <ul className="hero__facts">
          {[
            { v: `${CLINIC.yearsRunning()} yrs`, l: 'In practice' },
            { v: `${SERVICES.length}`, l: 'Areas of care' },
            { v: 'All ages', l: 'Child to adult' },
            { v: 'Private', l: 'Confidential' },
          ].map((f, i) => (
            <li key={f.l} className="hero__fact reveal" style={delay(0.5 + i * 0.05)}>
              <span className="hero__fact-v">{f.v}</span>
              <span className="hero__fact-l">{f.l}</span>
            </li>
          ))}
        </ul>
      </section>

      <Marquee
        className="marquee--quiet"
        items={[
          'Psychological counselling',
          'Neuropsychological assessment',
          'Child & adolescent care',
          'Couples & family work',
          'Astro-Psychology',
          'Better Tomorrow',
        ]}
      />

      {/* ------------------------------------------------------------- Premise */}
      <section className="premise section section--white">
        <div className="premise__grid">
          <figure className="premise__media reveal">
            <div className="frame zoomable premise__frame">
              <img
                src={seaPath}
                alt="A wooden boardwalk leading through dunes towards open sea at first light."
                width={1600}
                height={1067}
                loading="lazy"
              />
            </div>
            <figcaption className="premise__cap">
              <span className="index-num">Fig. 01</span> The way through is rarely a straight line.
            </figcaption>
          </figure>

          <div className="premise__copy">
            <SectionHead
              index="01"
              eyebrow="Our premise"
              align="left"
              title={
                <>
                  A lighthouse does not <span className="accent">sail the ship.</span>
                </>
              }
            />
            <div className="prose reveal" style={delay(0.1)}>
              <p>
                It does not decide the destination. It does not remove the storm. It provides light —
                so a traveller can see the hazards, understand the direction, and move forward with
                greater awareness.
              </p>
              <p>
                That is precisely how we see our role. People arrive here confused, distressed or
                uncertain about what comes next. Our purpose is not to dictate the decision, but to
                help you see more clearly, understand yourself more deeply, and find the paths that
                were always there.
              </p>
            </div>
            <Link className="link premise__link reveal" to="/about" style={delay(0.16)}>
              Read how LIGHTHOUSE began
              <IconArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ Services */}
      <section className="section section--paper" id="services">
        <SectionHead
          index="02"
          eyebrow="What we do"
          title={
            <>
              Care that starts with <span className="accent">your account</span> of it.
            </>
          }
          lead="Twelve areas of practice, from structured therapy and formal assessment through to reflective consultation. Every one of them begins the same way — with a conversation about what has actually been happening."
          action={
            <Link className="btn btn--ghost" to="/services">
              All services
              <IconArrowRight size={15} className="btn__arrow" />
            </Link>
          }
        />

        <ul className="svc-index">
          {SERVICES.slice(0, 6).map((s, i) => (
            <li key={s.slug} className="reveal" style={delay(i * 0.05)}>
              <Link className="rowcard svc-row" to={`/services#${s.slug}`}>
                <span className="rowcard__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="rowcard__title">{s.title}</h3>
                <p className="rowcard__body">{s.blurb}</p>
                <IconArrowUpRight size={18} className="svc-row__arrow" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* -------------------------------------------------------------- Values */}
      <section className="beacon section section--ink">
        <SectionHead
          index="03"
          eyebrow="What the mark stands for"
          title={
            <>
              Six things a beacon <span className="accent">is for.</span>
            </>
          }
          lead="The arch, the light and the horizon lines in our logo are not decoration. Each carries a commitment about how this practice works."
        />

        <ul className="beacon__grid">
          {BEACON_VALUES.map((v, i) => (
            <li key={v.key} className="beacon__cell reveal" style={delay(i * 0.06)}>
              <span className="index-num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="beacon__word">{v.word}</h3>
              <p className="beacon__sub">{v.sub}</p>
              <p className="beacon__body">{v.body}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------------------------------------------------------- Astro tease */}
      <section className="astro-tease section section--paper-2">
        <div className="astro-tease__grid">
          <div className="astro-tease__copy">
            <SectionHead
              index="04"
              eyebrow="Mixing two sciences"
              align="left"
              title={
                <>
                  Two ways of seeing
                  <br />
                  the <span className="accent">same person.</span>
                </>
              }
            />
            <div className="prose reveal" style={delay(0.1)}>
              <p>
                LIGHTHOUSE was born from a question: can different perspectives on a person be
                brought together responsibly, to give deeper understanding and more individual
                guidance? The answer we arrived at is what we call Astro-Psychology.
              </p>
            </div>

            <div className="notice reveal" style={delay(0.16)}>
              <p className="notice__head">Where the line sits</p>
              <p>
                Psychology remains the professional foundation of every clinical service here.
                Astrology and numerology are offered as an <em>additional</em> frame for
                self-reflection and meaning-making — never as a replacement for psychological or
                medical care, and never as prediction or diagnosis.
              </p>
            </div>

            <Link className="btn btn--primary astro-tease__cta reveal" to="/astro-psychology" style={delay(0.22)}>
              <IconMoonStars size={16} />
              How it actually works
            </Link>
          </div>

          <figure className="astro-tease__media reveal" style={delay(0.08)}>
            <div className="frame zoomable astro-tease__frame">
              <img
                src={nightSky}
                alt="The Milky Way arcing over a dark mountain ridge."
                width={1800}
                height={1200}
                loading="lazy"
              />
            </div>
          </figure>
        </div>
      </section>

      {/* ------------------------------------------------------------- Journey */}
      <section className="section section--white">
        <SectionHead
          index="05"
          eyebrow="How it works"
          title={
            <>
              Four steps, and <span className="accent">no surprises.</span>
            </>
          }
          lead="Nobody should have to guess what happens after they press call. This is the whole sequence."
        />

        <ol className="journey">
          {JOURNEY_STEPS.map((step, i) => (
            <li key={step.num} className="journey__step reveal" style={delay(i * 0.07)}>
              <span className="journey__num">{step.num}</span>
              <h3 className="journey__title t-h3">{step.title}</h3>
              <p className="journey__body">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="journey__aside reveal">
          <div className="frame zoomable journey__photo">
            <img
              src={handsSession}
              alt="Two people in conversation, one gesturing while the other listens."
              width={1400}
              height={933}
              loading="lazy"
            />
          </div>
          <p className="t-body journey__note">
            Please arrive {CLINIC.arriveEarlyMinutes} minutes before a first appointment. Onboarding
            takes about that long, and we would rather it did not come out of your session.
          </p>
        </div>
      </section>

      {/* -------------------------------------------------------- Testimonials */}
      <section className="voices section section--paper">
        <SectionHead
          index="06"
          eyebrow="In their words"
          title={
            <>
              What people say <span className="accent">afterwards.</span>
            </>
          }
          action={
            <a
              className="btn btn--ghost"
              href={CLINIC.reviewUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <IconStar size={15} />
              Read Google reviews
            </a>
          }
        />

        <ul className="voices__grid">
          {TESTIMONIALS.map((t, i) => (
            <li key={t.id} className="voice reveal" style={delay(i * 0.06)}>
              <IconQuote size={22} className="voice__mark" />
              <blockquote className="voice__quote">{t.quote}</blockquote>
              <footer className="voice__by">
                <span className="voice__initials">{t.initials}</span>
                <span className="index-num">{t.attribution}</span>
              </footer>
            </li>
          ))}
        </ul>
      </section>

      {/* --------------------------------------------------------------- Visit */}
      <section className="visit section section--paper-2">
        <div className="visit__grid">
          <div className="visit__copy">
            <SectionHead
              index="07"
              eyebrow="Find us"
              align="left"
              title={
                <>
                  {CLINIC.locality}, <span className="accent">West Bengal.</span>
                </>
              }
            />
            <p className="visit__landmark reveal" style={delay(0.08)}>
              <IconMapPin size={16} />
              {CLINIC.landmark}
            </p>
            <ul className="visit__phones reveal" style={delay(0.12)}>
              {CLINIC.phones.map((p) => (
                <li key={p}>
                  <a href={`tel:+91${p}`}>+91 {p}</a>
                </li>
              ))}
            </ul>
            <div className="visit__actions reveal" style={delay(0.16)}>
              <a
                className="btn btn--primary"
                href={CLINIC.mapsUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                Open in Maps
                <IconArrowUpRight size={15} />
              </a>
              <Link className="btn btn--ghost" to="/contact">
                Full contact details
              </Link>
            </div>
          </div>

          <figure className="visit__media reveal" style={delay(0.1)}>
            <div className="frame zoomable visit__frame">
              <img
                src={clinicInterior}
                alt="The clinic interior — daylight, plants and clean lines, arranged to feel unhurried."
                width={1600}
                height={1067}
                loading="lazy"
              />
            </div>
          </figure>
        </div>
      </section>

      <CTABand />
    </>
  )
}
