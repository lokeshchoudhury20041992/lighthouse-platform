import teamGroup from '../assets/team/team-group.webp'
import member1 from '../assets/team/member-1.webp'
import member2 from '../assets/team/member-2.webp'
import member3 from '../assets/team/member-3.webp'
import member4 from '../assets/team/member-4.webp'
import member5 from '../assets/team/member-5.webp'
import member6 from '../assets/team/member-6.webp'
import member7 from '../assets/team/member-7.webp'
import CTABand from '../components/CTABand'
import PageHeader from '../components/PageHeader'
import SectionHead from '../components/SectionHead'
import { IconArrowRight, IconShieldCheck } from '../components/icons'
import { CLINIC, DISCIPLINES, PRIMARY_WHATSAPP, TEAM } from '../data/site'
import './Team.css'

const delay = (s: number) => ({ '--d': `${s}s` }) as React.CSSProperties

const PHOTOS: Record<string, string> = {
  'member-1': member1,
  'member-2': member2,
  'member-3': member3,
  'member-4': member4,
  'member-5': member5,
  'member-6': member6,
  'member-7': member7,
}

const PRINCIPLES = [
  {
    title: 'You are told what we do not know',
    body: 'Uncertainty is reported as uncertainty. Where a question sits outside our competence, we say so and point you somewhere better.',
  },
  {
    title: 'Nothing is decided over your head',
    body: 'Care plans are proposed and agreed, not issued. You can decline any part of one and still be welcome here.',
  },
  {
    title: 'Confidentiality is the default',
    body: 'What is discussed stays within the clinical team, with only the ordinary legal and safety exceptions — principally a serious risk of harm.',
  },
  {
    title: 'Referral is not failure',
    body: 'If psychiatric input, medical assessment or a different specialism is what you need, we will help you get there rather than keep you here.',
  },
]

export default function Team() {
  return (
    <>
      <PageHeader
        index="Page 05"
        eyebrow="Our team"
        title={
          <>
            Who you will
            <br />
            <span className="accent">actually see.</span>
          </>
        }
        standfirst="LIGHTHOUSE is a small practice, and deliberately so. The clinician you meet at the first appointment is the clinician who carries your care — not a coordinator who hands you on."
      />

      {/* ------------------------------------------------------------- Portraits */}
      <section className="section section--white">
        <SectionHead
          index="01"
          eyebrow="At the clinic"
          title={
            <>
              Faces you will <span className="accent">recognise.</span>
            </>
          }
          lead="Names and qualifications are being confirmed before they go online — for a healthcare practice those details have to be right, not quick."
        />

        <ul className="roster">
          {TEAM.map((m, i) => (
            <li key={m.id} className="roster__item reveal" style={delay((i % 4) * 0.06)}>
              <figure className="roster__photo arch">
                <img
                  src={PHOTOS[m.photo]}
                  alt={m.name ? `${m.name}, ${m.role} at LIGHTHOUSE` : 'A member of the LIGHTHOUSE team'}
                  width={760}
                  height={950}
                  loading="lazy"
                />
              </figure>
              <div className="roster__meta">
                <p className="roster__name">{m.name || 'Name to be confirmed'}</p>
                <p className="roster__role">{m.role || 'Role to be confirmed'}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="notice team__notice reveal">
          <p className="notice__head">A note on this page</p>
          <p>
            We have not published names, degrees or years of experience yet. If you would like to
            know who you will be seeing, and what they are qualified to do, ask us before you book
            and we will tell you directly.
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------- Disciplines */}
      <section className="section section--paper">
        <SectionHead
          index="02"
          eyebrow="What the team covers"
          title={
            <>
              Four disciplines, under <span className="accent">one roof.</span>
            </>
          }
          lead="Every practitioner here works within their own scope of practice, with supervision, and refers onward when a case needs it."
        />

        <ul className="disciplines">
          {DISCIPLINES.map((d, i) => (
            <li key={d.id} className="discipline reveal" style={delay(i * 0.06)}>
              <span className="index-num">{String(i + 1).padStart(2, '0')}</span>
              <div className="discipline__body">
                <h3 className="discipline__role">{d.role}</h3>
                <p className="discipline__focus">{d.focus}</p>
                <p className="discipline__text">{d.body}</p>
                <ul className="tags discipline__tags">
                  {d.specialties.map((s) => (
                    <li key={s} className="tag">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* -------------------------------------------------------------- Group */}
      <figure className="team-banner">
        <img
          src={teamGroup}
          alt="The LIGHTHOUSE team and visitors together at a clinic event."
          width={1600}
          height={720}
          loading="lazy"
        />
        <figcaption className="team-banner__cap shell">
          <span className="index-num">Fig. 01</span> LIGHTHOUSE, {CLINIC.locality}.
        </figcaption>
      </figure>

      {/* ---------------------------------------------------------- Principles */}
      <section className="section section--white">
        <SectionHead
          index="03"
          eyebrow="How we work"
          title={
            <>
              Four rules we hold <span className="accent">ourselves to.</span>
            </>
          }
        />
        <ol className="principles__list">
          {PRINCIPLES.map((p, i) => (
            <li key={p.title} className="principle reveal" style={delay(i * 0.06)}>
              <IconShieldCheck size={17} />
              <div>
                <h3 className="principle__title">{p.title}</h3>
                <p className="principle__body">{p.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* --------------------------------------------------------------- Join */}
      <section className="section section--ink">
        <div className="join">
          <div>
            <SectionHead
              index="04"
              eyebrow="Working with us"
              align="left"
              title={
                <>
                  Clinicians who want to <span className="accent">practise carefully.</span>
                </>
              }
            />
            <p className="t-body join__body reveal" style={delay(0.08)}>
              LIGHTHOUSE has been running in {CLINIC.locality} since {CLINIC.established}. If you
              are a psychologist, counsellor or assessor who works to the standards described on
              this page, we would like to hear from you — including on a sessional basis.
            </p>
          </div>

          <a
            className="btn btn--beacon btn--lg join__cta reveal"
            href={PRIMARY_WHATSAPP}
            target="_blank"
            rel="noreferrer noopener"
            style={delay(0.14)}
          >
            Get in touch
            <IconArrowRight size={16} className="btn__arrow" />
          </a>
        </div>
      </section>

      <CTABand
        title={
          <>
            Ask who you will
            <br />
            be <span className="accent">seeing.</span>
          </>
        }
        body="It is a fair question and we will answer it before you book, along with what that practitioner is qualified to do."
      />
    </>
  )
}
