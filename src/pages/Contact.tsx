import therapyRoom from '../assets/photos/therapy-room.webp'
import hopeSunrise from '../assets/photos/hope-sunrise.webp'
import PageHeader from '../components/PageHeader'
import SectionHead from '../components/SectionHead'
import { Horizon } from '../components/Brand'
import {
  IconArrowUpRight,
  IconClock,
  IconMapPin,
  IconPhone,
  IconStar,
  IconWhatsApp,
} from '../components/icons'
import { BOOKING_MESSAGE, CLINIC, JOURNEY_STEPS, whatsappLink } from '../data/site'
import './Contact.css'

const delay = (s: number) => ({ '--d': `${s}s` }) as React.CSSProperties

export default function Contact() {
  return (
    <>
      <PageHeader
        index="Page 06"
        eyebrow="Contact"
        title={
          <>
            Two numbers,
            <br />
            <span className="accent">no gatekeeping.</span>
          </>
        }
        standfirst="Call or message either number directly. You do not need a referral, a diagnosis, or the right words — a sentence about what has been difficult is a sufficient way to begin."
      />

      {/* ------------------------------------------------------------ Channels */}
      <section className="section section--white">
        <ul className="channels">
          <li className="channel reveal">
            <span className="channel__icon">
              <IconWhatsApp size={19} />
            </span>
            <h2 className="channel__title">WhatsApp</h2>
            <p className="channel__note">
              Fastest route to a slot. Send a message and we will reply with the next available
              times.
            </p>
            <a
              className="channel__action btn btn--beacon"
              href={whatsappLink(CLINIC.phones[0], BOOKING_MESSAGE)}
              target="_blank"
              rel="noreferrer noopener"
            >
              Message the clinic
              <IconArrowUpRight size={15} />
            </a>
          </li>

          <li className="channel reveal" style={delay(0.07)}>
            <span className="channel__icon">
              <IconPhone size={18} />
            </span>
            <h2 className="channel__title">By phone</h2>
            <p className="channel__note">
              Both numbers reach the clinic. Either is fine — use whichever connects.
            </p>
            <ul className="channel__phones">
              {CLINIC.phones.map((p, i) => (
                <li key={p}>
                  <a href={`tel:+91${p}`}>+91 {p}</a>
                  <span className="index-num">{i === 0 ? 'Primary' : 'Alternative'}</span>
                </li>
              ))}
            </ul>
          </li>

          <li className="channel reveal" style={delay(0.14)}>
            <span className="channel__icon">
              <IconMapPin size={18} />
            </span>
            <h2 className="channel__title">In person</h2>
            <address className="channel__address">
              {CLINIC.locality}
              <br />
              {CLINIC.region}
            </address>
            <p className="channel__landmark">{CLINIC.landmark}</p>
            <a
              className="channel__action btn btn--ghost"
              href={CLINIC.mapsUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              Open in Google Maps
              <IconArrowUpRight size={15} />
            </a>
          </li>
        </ul>
      </section>

      {/* ------------------------------------------------------- Appointments */}
      <section className="section section--paper">
        <div className="appt">
          <div className="appt__copy">
            <SectionHead
              index="01"
              eyebrow="Your appointment"
              align="left"
              title={
                <>
                  Please arrive{' '}
                  <span className="accent">{CLINIC.arriveEarlyMinutes} minutes early.</span>
                </>
              }
            />
            <div className="prose reveal" style={delay(0.08)}>
              <p>
                Onboarding — the forms, the consent, the practical details — takes roughly that
                long, and we would rather it did not come out of your session. Once a time is
                agreed, you will receive a written confirmation with the date, the time and this
                same reminder.
              </p>
            </div>

            <ul className="appt__points reveal" style={delay(0.14)}>
              <li>
                <IconClock size={16} />
                <div>
                  <strong>A standard consultation runs about an hour.</strong> Assessment
                  appointments are longer and are booked separately.
                </div>
              </li>
              <li>
                <IconMapPin size={16} />
                <div>
                  <strong>{CLINIC.landmark}.</strong> If you are having trouble finding us, call
                  from where you are and we will guide you in.
                </div>
              </li>
            </ul>
          </div>

          <figure className="appt__media reveal" style={delay(0.1)}>
            <div className="frame zoomable appt__frame">
              <img
                src={therapyRoom}
                alt="A quiet consulting room with two armchairs turned towards each other."
                width={1024}
                height={1024}
                loading="lazy"
              />
            </div>
          </figure>
        </div>
      </section>

      {/* ----------------------------------------------------------- Sequence */}
      <section className="section section--white">
        <SectionHead
          index="02"
          eyebrow="What happens next"
          title={
            <>
              From message to first session, <span className="accent">step by step.</span>
            </>
          }
        />
        <ol className="sequence">
          {JOURNEY_STEPS.map((s, i) => (
            <li key={s.num} className="sequence__step reveal" style={delay(i * 0.06)}>
              <span className="sequence__num">{s.num}</span>
              <h3 className="sequence__title t-h3">{s.title}</h3>
              <p className="sequence__body">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ------------------------------------------------------------ Feedback */}
      <section className="feedback section section--ink">
        <img className="feedback__bg" src={hopeSunrise} alt="" aria-hidden="true" />
        <div className="feedback__inner">
          <Horizon bars={6} width={150} className="feedback__horizon reveal" />
          <h2 className="feedback__title t-h2 reveal" style={delay(0.06)}>
            LIGHTHOUSE would value <span className="accent">your feedback.</span>
          </h2>
          <p className="feedback__body t-lead reveal" style={delay(0.12)}>
            If we have helped, a review on our Google profile helps the next person decide whether
            to walk through the door. If we have not, tell us directly — that is how the service
            improves.
          </p>
          <div className="feedback__actions reveal" style={delay(0.18)}>
            <a
              className="btn btn--beacon btn--lg"
              href={CLINIC.reviewUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <IconStar size={16} />
              Leave a Google review
            </a>
            <a
              className="btn btn--ghost btn--lg"
              href={whatsappLink(
                CLINIC.phones[0],
                'Hello Lighthouse, I would like to share some feedback about my experience.',
              )}
              target="_blank"
              rel="noreferrer noopener"
            >
              Tell us privately instead
            </a>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- Urgent */}
      <section className="section section--paper-2">
        <div className="notice urgent reveal">
          <p className="notice__head">If this is an emergency</p>
          <p>
            LIGHTHOUSE is an appointment-based practice and is not an emergency service. If you are
            in immediate danger, or thinking about harming yourself or someone else, please contact
            emergency services or go to the nearest hospital now rather than waiting for a reply.
          </p>
        </div>
      </section>
    </>
  )
}
