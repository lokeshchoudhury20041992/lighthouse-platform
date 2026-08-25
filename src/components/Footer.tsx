import brandLogo from '../assets/lighthouse-logo.webp'
import { IconMapPin } from './icons'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-grid">
        {/* Brand Column */}
        <div className="footer-brand-col">
          <img
            className="footer-logo"
            src={brandLogo}
            width={1200}
            height={408}
            alt="Lighthouse — Better Tomorrow"
          />
          <p className="footer-desc">
            Neuropsychological, psychological and emotional wellness care for individuals and families.
          </p>
          <div className="footer-location">
            <IconMapPin className="footer-location-icon" /> Howrah &amp; Kolkata
          </div>
        </div>

        {/* Column 1: Explore */}
        <div>
          <h3 className="footer-col-title">Explore</h3>
          <div className="footer-links">
            <a href="#about" className="footer-link">About Us</a>
            <a href="#services" className="footer-link">Services</a>
            <a href="#programs" className="footer-link">Therapy Programs</a>
            <a href="#resources" className="footer-link">Resources</a>
          </div>
        </div>

        {/* Column 2: Support */}
        <div>
          <h3 className="footer-col-title">Support</h3>
          <div className="footer-links">
            <a href="#contact" className="footer-link">Contact Us</a>
            <a href="#contact" className="footer-link">Book Consultation</a>
            <a href="#contact" className="footer-link">FAQs</a>
          </div>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="footer-col-title">Services</h3>
          <div className="footer-links">
            <a href="#services" className="footer-link">Psychological Counselling</a>
            <a href="#services" className="footer-link">Child Psychology</a>
            <a href="#services" className="footer-link">Neuropsychological Assessment</a>
            <a href="#services" className="footer-link">Relationship Counselling</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Lighthouse Neuropsychology &amp; Wellness. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#privacy" className="footer-bottom-link">Privacy Policy</a>
          <a href="#terms" className="footer-bottom-link">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
