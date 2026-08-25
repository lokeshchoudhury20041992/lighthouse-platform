const STEPS = [
  {
    num: '01',
    title: 'Book a Consultation',
    desc: 'Choose a convenient consultation time.',
  },
  {
    num: '02',
    title: 'Meet Your Specialist',
    desc: 'Discuss your concerns in a safe and confidential environment.',
  },
  {
    num: '03',
    title: 'Begin Your Care Plan',
    desc: 'Receive personalized recommendations and ongoing support.',
  },
]

export default function Journey() {
  return (
    <section className="lh-section lh-section--muted" id="programs">
      <div className="section-header section-header--center reveal-on-scroll">
        <span className="section-pill">YOUR JOURNEY</span>
        
        <h2 className="section-title">
          Getting Support Should Feel{' '}
          <span className="title-accent">
            Simple
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
      </div>

      <div className="journey-steps">
        {STEPS.map(({ num, title, desc }, index) => (
          <div
            key={num}
            className="journey-step reveal-on-scroll"
            style={{ transitionDelay: `${index * 0.15}s` }}
          >
            <span className="journey-num">{num}</span>
            <h3 className="journey-step-title">{title}</h3>
            <p className="journey-step-desc">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
