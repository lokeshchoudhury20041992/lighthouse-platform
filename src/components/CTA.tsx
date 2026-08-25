import { IconArrowRight, IconTarget, LighthouseMark } from './icons'

export default function CTA() {
  return (
    <section className="lh-section" style={{ background: '#FFFFFF' }}>
      <div className="cta-box-wrapper reveal-on-scroll">
        <div className="cta-box">
          <div className="cta-glow" aria-hidden="true" />
          <LighthouseMark className="cta-decor-mark" size={320} aria-hidden="true" />
          
          <div className="cta-content">
            <h2 className="cta-title">A Better Tomorrow Starts With the Right Support</h2>
            <p className="cta-desc">
              Take the first step toward better emotional, cognitive and psychological wellbeing.
            </p>
          </div>
          
          <div className="cta-actions">
            <a className="btn btn--primary btn--lg" href="#contact">
              Book Consultation
              <IconArrowRight className="btn__arrow" size={18} />
            </a>
            <a className="btn btn--ghost btn--lg" href="#services">
              <IconTarget className="btn__lead" size={18} />
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
