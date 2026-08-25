import whyPhoto from '../assets/healthcare_photograph.jpg'
import {
  IconTarget,
  IconLock,
  IconRosette,
  IconUsers,
} from './icons'

const BENEFITS = [
  {
    title: 'Personalized Treatment',
    desc: "Every care plan is tailored to the patient's individual needs.",
    Icon: IconTarget,
  },
  {
    title: 'Confidential Environment',
    desc: 'Privacy and emotional safety are treated as essential.',
    Icon: IconLock,
  },
  {
    title: 'Evidence-Based Care',
    desc: 'Treatment approaches are grounded in established psychological practice.',
    Icon: IconRosette,
  },
  {
    title: 'Experienced Professionals',
    desc: 'Patients receive support from trained mental-health professionals.',
    Icon: IconUsers,
  },
]

export default function WhyChoose() {
  return (
    <section className="lh-section" id="why-lighthouse">
      <div className="why-grid">
        {/* Left: Health photo */}
        <div className="why-media reveal-on-scroll">
          <img
            src={whyPhoto}
            alt="Compassionate healthcare discussion between clinical psychologist and patient at Lighthouse."
            loading="lazy"
          />
        </div>

        {/* Right: Content & Benefits */}
        <div className="about-content reveal-on-scroll" style={{ transitionDelay: '0.15s' }}>
          <span className="section-pill">Why Lighthouse</span>
          
          <h2 className="section-title">
            Care Built{' '}
            <span className="title-accent">
              Around You
              <svg className="title-underline" viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true">
                <path
                  d="M3 13.4c46-6.6 92-9.4 138-8.6 52 .9 104 4.4 156 10.4"
                  stroke="var(--lh-blue)"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </span>
          </h2>
          
          <p className="about-body">
            Lighthouse combines professional expertise with compassionate, individualized mental healthcare. 
            We are dedicated to supporting your emotional and psychological wellbeing.
          </p>

          <div className="why-benefits">
            {BENEFITS.map(({ title, desc, Icon }) => (
              <div key={title} className="benefit-item">
                <div className="benefit-icon-wrapper">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="benefit-title">{title}</h3>
                  <p className="benefit-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
