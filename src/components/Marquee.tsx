import './Marquee.css'

/**
 * Edge-to-edge scrolling ribbon. The track is duplicated once and translated by
 * exactly -50%, so the loop is seamless regardless of content width.
 */
export default function Marquee({
  items,
  speed = 38,
  reverse = false,
  className = '',
}: {
  items: string[]
  speed?: number
  reverse?: boolean
  className?: string
}) {
  const track = (
    <ul className="marquee__track" aria-hidden="true">
      {items.map((item, i) => (
        <li key={i} className="marquee__item">
          <span>{item}</span>
          <span className="marquee__dot" />
        </li>
      ))}
    </ul>
  )

  return (
    <div
      className={`marquee ${className}`}
      style={{ '--speed': `${speed}s`, '--dir': reverse ? 'reverse' : 'normal' } as React.CSSProperties}
    >
      <span className="sr-only">{items.join(', ')}</span>
      {track}
      {track}
    </div>
  )
}
