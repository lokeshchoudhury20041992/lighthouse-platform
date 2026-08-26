/**
 * Thin-line icon set for the Lighthouse brand.
 * Every glyph shares one stroke language: 24px box, 1.5 stroke, round caps.
 */
type IconProps = {
  className?: string
  size?: number
}

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false,
}

export function IconBrain({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M12 4.9c-1.3-1.4-3.5-1.5-5-.2-.7.6-1.1 1.4-1.2 2.3-1.4.4-2.4 1.6-2.4 3 0 .7.2 1.3.6 1.8-.5.6-.8 1.4-.6 2.2.2 1.3 1.3 2.3 2.6 2.5.3 1.6 1.7 2.7 3.3 2.7 1 0 2-.5 2.7-1.3" />
      <path d="M12 4.9c1.3-1.4 3.5-1.5 5-.2.7.6 1.1 1.4 1.2 2.3 1.4.4 2.4 1.6 2.4 3 0 .7-.2 1.3-.6 1.8.5.6.8 1.4.6 2.2-.2 1.3-1.3 2.3-2.6 2.5-.3 1.6-1.7 2.7-3.3 2.7-1 0-2-.5-2.7-1.3" />
      <path d="M12 4.9v12.1" />
      <path d="M8.5 7.9c1.1.1 2 .9 2.3 1.9M15.5 11.6c-1.1.1-2 .9-2.3 1.9" opacity="0.6" />
    </svg>
  )
}

export function IconUsers({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <circle cx="9.2" cy="8.4" r="3.4" />
      <path d="M3.2 19.4c.5-3 3-5.2 6-5.2s5.5 2.2 6 5.2" />
      <path d="M16 5.4a3.4 3.4 0 0 1 0 6.4M17.2 14.6c2.1.5 3.7 2.3 4.1 4.6" />
    </svg>
  )
}

export function IconLock({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <rect x="4.4" y="10.2" width="15.2" height="9.6" rx="3" />
      <path d="M8.2 10.2V7.6a3.8 3.8 0 0 1 7.6 0v2.6" />
      <path d="M12 14v2.2" />
    </svg>
  )
}

export function IconShieldCheck({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M12 3.2 5 6v5.4c0 4 2.8 7.7 7 9.4 4.2-1.7 7-5.4 7-9.4V6l-7-2.8Z" />
      <path d="m9.2 11.9 2 2 3.6-3.9" />
    </svg>
  )
}

export function IconRosette({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <circle cx="12" cy="9.2" r="5.6" />
      <path d="m9.6 9.2 1.7 1.7 3.2-3.4" />
      <path d="m8.4 14.2-1 6.2 4.6-2.3 4.6 2.3-1-6.2" />
    </svg>
  )
}

export function IconPulse({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M3.2 12h3.4l2-5.2 3.2 10.4 2.2-6 1.5 2.6h5.3" />
    </svg>
  )
}

export function IconArrowRight({ className, size = 18 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M4.5 12h14.2" />
      <path d="m13.4 6.6 5.3 5.4-5.3 5.4" />
    </svg>
  )
}

export function IconTarget({ className, size = 18 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <circle cx="12" cy="12" r="8.4" />
      <circle cx="12" cy="12" r="3.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconMouse({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <rect x="6.6" y="2.6" width="10.8" height="16.4" rx="5.4" />
      <path d="M12 6.2v3" />
    </svg>
  )
}

export function IconStar({ className, size = 14 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      aria-hidden
      focusable="false"
    >
      <path d="m12 2.9 2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9.4l6.1-.9L12 2.9Z" />
    </svg>
  )
}

export function IconMapPin({ className, size = 16 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M12 21.2s6.4-5.6 6.4-10.4a6.4 6.4 0 0 0-12.8 0C5.6 15.6 12 21.2 12 21.2Z" />
      <circle cx="12" cy="10.6" r="2.4" />
    </svg>
  )
}

/** Lighthouse brand mark: a tower with two sweeping beams. */
export function LighthouseMark({ className, size = 34 }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={className}
      fill="none"
      aria-hidden
      focusable="false"
    >
      <path
        d="M12.9 12.4h6.2l1.7 13.9a1 1 0 0 1-1 1.1h-7.6a1 1 0 0 1-1-1.1l1.7-13.9Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M11.6 16.9h8.8M12.2 21.5h7.6"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M13.1 12.4a3 3 0 0 1 5.8 0"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="16" cy="8.2" r="2.3" fill="var(--lh-blue)" />
      <path
        d="M11 5.6 6.8 3.2M21 5.6l4.2-2.4M10.4 9.4H5.5M21.6 9.4h4.9"
        stroke="var(--lh-blue)"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  )
}

export function IconHeart({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

export function IconSmile({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  )
}

export function IconMessageSquare({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

export function IconCompass({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  )
}

export function IconSun({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  )
}

export function IconShield({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

export function IconSliders({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <line x1="4" y1="21" x2="4" y2="14" />
      <line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" />
      <line x1="20" y1="12" x2="20" y2="3" />
      <line x1="2" y1="14" x2="6" y2="14" />
      <line x1="10" y1="8" x2="14" y2="8" />
      <line x1="18" y1="16" x2="22" y2="16" />
    </svg>
  )
}

export function IconPuzzle({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M12 22c-1.5 0-2.8-.8-3.5-2H5c-1.1 0-2-.9-2-2v-3.5c1.2-.7 2-2 2-3.5s-.8-2.8-2-3.5V5c0-1.1.9-2 2-2h3.5c.7 1.2 2 2 3.5 2s2.8-.8 3.5-2H19c1.1 0 2 .9 2 2v3.5c-1.2.7-2 2-2 3.5s.8 2.8 2 3.5V18c0 1.1-.9 2-2 2h-3.5c-.7 1.2-2 2-3.5 2z" />
    </svg>
  )
}

export function IconSearch({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

export function IconCheck({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export function IconActivity({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  )
}

export function IconSparkles({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  )
}

export function IconRefreshCw({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  )
}

export function IconScale({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="5" y1="7" x2="19" y2="7" />
      <path d="M19 7c0 4.5-3.5 8-3.5 8S12 11.5 12 7" />
      <path d="M12 7c0 4.5-3.5 8-3.5 8S5 11.5 5 7" />
    </svg>
  )
}

export function IconCalendar({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

export function IconTrendingUp({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  )
}

export function IconZap({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}


export function IconPhone({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M21.5 16.9v2.8a1.9 1.9 0 0 1-2.1 1.9 18.7 18.7 0 0 1-8.2-2.9 18.4 18.4 0 0 1-5.7-5.7A18.7 18.7 0 0 1 2.6 4.7 1.9 1.9 0 0 1 4.5 2.6h2.8a1.9 1.9 0 0 1 1.9 1.6c.1 1 .4 1.9.7 2.8a1.9 1.9 0 0 1-.4 2l-1.2 1.2a15 15 0 0 0 5.7 5.7l1.2-1.2a1.9 1.9 0 0 1 2-.4c.9.3 1.8.6 2.8.7a1.9 1.9 0 0 1 1.6 1.9Z" />
    </svg>
  )
}

export function IconWhatsApp({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M3.4 20.6 4.8 16a8.4 8.4 0 1 1 3.3 3.2l-4.7 1.4Z" />
      <path d="M9 9c0 3.3 2.7 6 6 6 .6 0 1-.6 1-1.2v-.6l-1.8-.8-.9 1a5.6 5.6 0 0 1-2.7-2.7l1-.9-.8-1.8h-.6C9.6 8 9 8.4 9 9Z" />
    </svg>
  )
}

export function IconClock({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 6.8 12 12 15.4 13.8" />
    </svg>
  )
}

export function IconMail({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <rect x="2.6" y="4.8" width="18.8" height="14.4" rx="2.2" />
      <path d="m3.4 6.6 8.6 6 8.6-6" />
    </svg>
  )
}

export function IconMoonStars({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M20.4 14.2A8.6 8.6 0 0 1 9.8 3.6a8.6 8.6 0 1 0 10.6 10.6Z" />
      <path d="M17.6 3v3.2M16 4.6h3.2" opacity="0.8" />
    </svg>
  )
}

export function IconQuote({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M9.4 6.2C6.6 7.4 5 9.8 5 13v4.8h5.6V12H7.9c0-2 .8-3.4 2.4-4.2Z" />
      <path d="M19 6.2c-2.8 1.2-4.4 3.6-4.4 6.8v4.8h5.6V12h-2.7c0-2 .8-3.4 2.4-4.2Z" />
    </svg>
  )
}

export function IconPlus({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M12 5.4v13.2M5.4 12h13.2" />
    </svg>
  )
}

export function IconArrowUpRight({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M7 17 17 7" />
      <polyline points="8.4 7 17 7 17 15.6" />
    </svg>
  )
}

export function IconBookOpen({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M2.8 5.2h5.6c1.9 0 3.6 1 3.6 2.6v11c0-1.2-1.4-2.2-3.2-2.2H2.8Z" />
      <path d="M21.2 5.2h-5.6c-1.9 0-3.6 1-3.6 2.6v11c0-1.2 1.4-2.2 3.2-2.2h6Z" />
    </svg>
  )
}
