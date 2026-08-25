import {
  IconMessageSquare,
  IconSmile,
  IconActivity,
  IconCompass,
  IconHeart,
  IconZap,
  IconShield,
  IconSliders,
  IconBrain,
  IconPuzzle,
  IconRefreshCw,
  IconPulse,
  IconScale,
  IconUsers,
  IconSearch,
  IconSparkles,
} from './icons'

const SERVICES = [
  {
    title: 'Psychological Counselling',
    desc: 'Personalized counselling to help you overcome life’s challenges.',
    Icon: IconMessageSquare,
  },
  {
    title: 'Depression Therapy',
    desc: 'Compassionate support to help you heal and regain joy.',
    Icon: IconSmile,
  },
  {
    title: 'Anxiety Management',
    desc: 'Strategies to reduce anxiety and restore inner calm.',
    Icon: IconActivity,
  },
  {
    title: 'Child Psychology',
    desc: 'Expert care for emotional and behavioral challenges in children.',
    Icon: IconSparkles,
  },
  {
    title: 'Adolescent Counselling',
    desc: 'Guidance and support for teens through every stage.',
    Icon: IconCompass,
  },
  {
    title: 'Marriage Counselling',
    desc: 'Strengthen communication and build a healthier relationship.',
    Icon: IconHeart,
  },
  {
    title: 'Stress Management',
    desc: 'Practical tools to manage stress and improve well-being.',
    Icon: IconZap,
  },
  {
    title: 'PTSD Therapy',
    desc: 'Specialized care for trauma recovery and emotional healing.',
    Icon: IconShield,
  },
  {
    title: 'Personality Disorders',
    desc: 'Evidence-based therapy for lasting emotional and behavioral change.',
    Icon: IconSliders,
  },
  {
    title: 'ADHD Counselling',
    desc: 'Support for focus, behavior and confidence building.',
    Icon: IconBrain,
  },
  {
    title: 'Autism Support',
    desc: 'Individualized support for better communication and skills.',
    Icon: IconPuzzle,
  },
  {
    title: 'OCD Treatment',
    desc: 'Effective strategies to manage obsessive thoughts and habits.',
    Icon: IconRefreshCw,
  },
  {
    title: 'Pregnancy Counselling',
    desc: 'Emotional support for a healthier pregnancy and motherhood.',
    Icon: IconPulse,
  },
  {
    title: 'Bipolar Disorder Care',
    desc: 'Compassionate care for mood stability and quality of life.',
    Icon: IconScale,
  },
  {
    title: 'Relationship Counselling',
    desc: 'Resolve conflicts and build stronger, happier relationships.',
    Icon: IconUsers,
  },
  {
    title: 'Neuropsychological Assessment',
    desc: 'In-depth assessments to understand cognition, behavior and emotions.',
    Icon: IconSearch,
  },
]

export default function Services() {
  return (
    <section className="lh-section lh-section--muted" id="services">
      <div className="section-header section-header--center reveal-on-scroll">
        <span className="section-pill">OUR SERVICES</span>
        
        <h2 className="section-title">
          Comprehensive Care for{' '}
          <span className="title-accent">
            Every Mind
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
        
        <p className="section-subtitle">
          Evidence-based therapy and personalized support for individuals, couples, and families. 
          We’re here to help you navigate challenges and build a healthier, happier life.
        </p>
      </div>

      <div className="services-grid">
        {SERVICES.map(({ title, desc, Icon }, index) => (
          <div
            key={title}
            className="service-card reveal-on-scroll"
            style={{ transitionDelay: `${(index % 4) * 0.05}s` }}
          >
            <div className="service-card-icon">
              <Icon size={22} />
            </div>
            
            <h3 className="service-card-title">{title}</h3>
            
            <p className="service-card-desc">{desc}</p>
            
            <a href="#contact" className="service-card-link">
              Learn More <span>→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
