import { Link } from 'react-router-dom'
import logo from '../assets/lighthouse-logo.webp'
import mistyHills from '../assets/photos/misty-hills.webp'
import therapyRoom from '../assets/photos/therapy-room.webp'
import coastDawn from '../assets/photos/coast-dawn.webp'
import { Horizon } from '../components/Brand'
import CTABand from '../components/CTABand'
import PageHeader from '../components/PageHeader'
import SectionHead from '../components/SectionHead'
import { IconArrowRight } from '../components/icons'
import { BEACON_VALUES, CLINIC } from '../data/site'
import './About.css'

const delay = (s: number) => ({ '--d': `${s}s` }) as React.CSSProperties

/** Annotations for the logo breakdown — each one maps to a part of the mark. */
const MARK_NOTES = [
  {
    part: 'The arch',
    note: 'The protective presence of the lighthouse — a structure that stands through changing conditions.',
  },
  {
    part: 'The circle & the vertical',
    note: 'Awareness, focus, and the human search for direction.',
  },
  {
    part: 'The horizon lines',
    note: 'Stages and pathways — the different experiences a person moves through in a life.',
  },
  {
    part: 'The narrowing',
    note: 'The movement from the wide upper form to the smaller lines below: from confusion towards clarity, turbulence towards balance.',
  },
]

const CHAPTERS = [
  {
    year: '2018',
    title: 'A centre in Ramkrishnapur',
    body: 'LIGHTHOUSE was established in Ramkrishnapur, Howrah, with a vision to create more than a conventional psychological service centre — a place to help people find clarity, resilience and direction.',
  },
  {
    year: 'The question',
    title: 'Two ways of seeing a person',
    body: 'A long-standing interest in astrology and numerology met the professional involvement of family members in psychology and psychological services. The meeting produced a question rather than an answer.',
  },
  {
    year: 'The idea',
    title: 'Astro-Psychology takes shape',
    body: 'Can different perspectives on a human being be brought together responsibly, to provide deeper understanding and more individualised guidance? That question became the intellectual foundation of the practice.',
  },
  {
    year: 'Today',
    title: 'Psychology first, always',
    body: `${CLINIC.yearsRunning()} years on, psychology remains the professional foundation of every clinical service here. Complementary traditions are approached as additional perspectives — never replacements for professional care.`,
  },
]

export default function About() {
  return (
    <>
      <PageHeader
        index="Page 02"
        eyebrow="Our story"
        title={
          <>
            One perspective
            <br />
            is <span className="accent">never enough.</span>
          </>
        }
        standfirst={
          <>
            LIGHTHOUSE was born from a simple but deeply personal idea. In {CLINIC.established}, in{' '}
            {CLINIC.locality}, the intention was to build something more than a conventional
            psychological service centre — a place where clarity, resilience and direction were the
            point.
          </>
        }
      />

      {/* --------------------------------------------------------------- Story */}
      <section className="section section--white">
        <div className="story">
          <figure className="story__media reveal">
            <div className="frame zoomable story__frame">
              <img
                src={mistyHills}
                alt="Layered hills fading into morning mist."
                width={1800}
                height={1192}
                loading="lazy"
              />
            </div>
            <figcaption className="story__cap">
              <span className="index-num">Fig. 01</span> Where psychology meets the search for
              meaning.
            </figcaption>
          </figure>

          <div className="story__copy">
            <SectionHead
              index="01"
              eyebrow="Mixing two sciences"
              align="left"
              title={
                <>
                  The question that <span className="accent">started it.</span>
                </>
              }
            />
            <div className="prose reveal" style={delay(0.08)}>
              <p>
                The founder's own journey ran through astrology and numerology. Alongside it, family
                members were professionally involved in psychology and psychological services. Two
                quite different disciplines, practised under one roof, in one family.
              </p>
              <p>
                Living with both for long enough produces an uncomfortable question:{' '}
                <em>
                  can different perspectives on the human being be brought together responsibly, to
                  provide deeper understanding and more individualised guidance?
                </em>
              </p>
              <p>
                That question became one of the inspirations behind LIGHTHOUSE — and the concept we
                now call Astro-Psychology emerged as an attempt to answer it carefully rather than
                conveniently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- Pullquote */}
      <section className="section section--paper-2 creed">
        <Horizon bars={6} width={150} className="creed__horizon reveal" />
        <blockquote className="creed__quote reveal" style={delay(0.06)}>
          Psychology helps us understand the mind. Astrology offers a symbolic language for
          exploring life's patterns and meaning. LIGHTHOUSE seeks to bring these perspectives into a{' '}
          <span className="accent">thoughtful and responsible conversation.</span>
        </blockquote>
        <p className="creed__attrib reveal" style={delay(0.12)}>
          <span className="index-num">The heart of the idea</span>
        </p>
      </section>

      {/* ---------------------------------------------------------- The name */}
      <section className="section section--white">
        <div className="name-grid">
          <div className="name-grid__copy">
            <SectionHead
              index="02"
              eyebrow="Why the name"
              align="left"
              title={
                <>
                  A lighthouse does not <span className="accent">sail the ship.</span>
                </>
              }
            />
            <ul className="creed-list reveal" style={delay(0.08)}>
              <li>It does not sail the ship.</li>
              <li>It does not decide the destination.</li>
              <li>It does not remove the storm.</li>
              <li className="creed-list__turn">It provides light.</li>
            </ul>
            <div className="prose reveal" style={delay(0.14)}>
              <p>
                It helps a traveller see the hazards, understand the direction, and move forward
                with greater awareness. That is precisely how we see our role.
              </p>
              <p>
                A person may arrive here feeling confused, distressed, overwhelmed or uncertain
                about the future. Our purpose is not to dictate every decision, but to help that
                person see more clearly, understand themselves more deeply, and discover the paths
                forward that are genuinely open to them.
              </p>
            </div>
          </div>

          <figure className="name-grid__media reveal" style={delay(0.06)}>
            <div className="frame zoomable name-grid__frame">
              <img
                src={coastDawn}
                alt="A calm shoreline at dawn, with the tide drawing back from wet sand."
                width={1800}
                height={1197}
                loading="lazy"
              />
            </div>
          </figure>
        </div>
      </section>

      {/* ---------------------------------------------------------- The mark */}
      <section className="section section--paper mark">
        <SectionHead
          index="03"
          eyebrow="The logo"
          title={
            <>
              Every line in the mark <span className="accent">means something.</span>
            </>
          }
          lead="The logo expresses the philosophy more precisely than any technical description could. Here is what each element carries."
        />

        <div className="mark__grid">
          <figure className="mark__figure reveal">
            <img src={logo} alt="The LIGHTHOUSE logo — an arch, a beacon, and receding horizon lines." />
          </figure>

          <ol className="mark__notes">
            {MARK_NOTES.map((n, i) => (
              <li key={n.part} className="mark__note reveal" style={delay(0.06 + i * 0.06)}>
                <span className="index-num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="mark__part">{n.part}</h3>
                  <p className="mark__text">{n.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mark__words reveal" style={delay(0.3)}>
          <p className="mark__words-label index-num">And the words</p>
          <p className="mark__words-value">Better Tomorrow</p>
          <p className="mark__words-body t-body">
            Not a slogan. It is the central promise: we may not be able to change everything that
            has happened, but with understanding, support and appropriate guidance, we can work
            towards a better tomorrow.
          </p>
        </div>
      </section>

      {/* --------------------------------------------------------- The values */}
      <section className="section section--ink values">
        <SectionHead
          index="04"
          eyebrow="What the lighthouse represents"
          title={
            <>
              Six commitments, <span className="accent">plainly stated.</span>
            </>
          }
        />
        <ul className="values__grid">
          {BEACON_VALUES.map((v, i) => (
            <li key={v.key} className="values__row reveal" style={delay(i * 0.05)}>
              <span className="values__word">{v.word}</span>
              <span className="values__sub">{v.sub}</span>
              <p className="values__body">{v.body}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ------------------------------------------------------------ Chapters */}
      <section className="section section--white">
        <SectionHead
          index="05"
          eyebrow="In brief"
          title={
            <>
              The short version of <span className="accent">a long idea.</span>
            </>
          }
        />
        <ol className="chapters">
          {CHAPTERS.map((c, i) => (
            <li key={c.title} className="chapter reveal" style={delay(i * 0.06)}>
              <span className="chapter__year">{c.year}</span>
              <div className="chapter__body">
                <h3 className="chapter__title t-h3">{c.title}</h3>
                <p>{c.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* --------------------------------------------------------------- Scope */}
      <section className="section section--paper-2">
        <div className="scope">
          <figure className="scope__media reveal">
            <div className="frame zoomable scope__frame">
              <img
                src={therapyRoom}
                alt="A quiet consulting room with two armchairs turned towards each other."
                width={1024}
                height={1024}
                loading="lazy"
              />
            </div>
          </figure>

          <div className="scope__copy">
            <SectionHead
              index="06"
              eyebrow="Scope of practice"
              align="left"
              title={
                <>
                  Where the line sits, <span className="accent">and why.</span>
                </>
              }
            />
            <div className="notice reveal" style={delay(0.08)}>
              <p className="notice__head">Psychology is the foundation</p>
              <p>
                At LIGHTHOUSE, psychology remains the foundation of our professional mental-health
                services. Complementary traditions such as astrology and numerology are approached
                as additional perspectives for self-reflection — not as replacements for
                professional psychological or medical care, and not as prediction or diagnosis.
              </p>
            </div>
            <p className="t-body scope__note reveal" style={delay(0.14)}>
              If a concern needs medical attention, psychiatric input or emergency care, we will say
              so directly and help you take the next step. That is part of what a beacon is for.
            </p>
            <Link className="btn btn--primary scope__cta reveal" to="/astro-psychology" style={delay(0.18)}>
              Read about Astro-Psychology
              <IconArrowRight size={15} className="btn__arrow" />
            </Link>
          </div>
        </div>
      </section>

      <CTABand
        title={
          <>
            Come and see
            <br />
            if it <span className="accent">fits.</span>
          </>
        }
        body="A first conversation is exactly that — a conversation. Nothing is decided for you in it, and you are not committed to anything by having it."
      />
    </>
  )
}
