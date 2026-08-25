import { IconStar } from './icons'

export default function Testimonials() {
  return (
    <section className="lh-section lh-section--mesh" id="resources">
      <div className="section-header section-header--center reveal-on-scroll">
        <h2 className="section-title">
          Trusted Care.{' '}
          <span className="title-accent">
            Meaningful Change.
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

      <div className="testimonial-container reveal-on-scroll">
        <div className="testimonial-card-main">
          <span className="testimonial-quote-icon" aria-hidden="true">“</span>
          
          <div className="testimonial-rating" aria-label="5 out of 5 stars rating">
            {[...Array(5)].map((_, i) => (
              <IconStar key={i} size={16} />
            ))}
          </div>
          
          <blockquote className="testimonial-text">
            "The neuropsychological assessment at Lighthouse helped us finally understand our son's learning patterns. 
            The team provided actionable care recommendations that completely transformed his school experience and boosted 
            his confidence."
          </blockquote>
          
          <div className="testimonial-meta">
            <div className="testimonial-author">
              <p className="testimonial-name">A. Gupta</p>
              <p className="testimonial-category">Neuropsychological Assessment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
