import type { CSSProperties } from 'react'

/**
 * The stacked bars beneath the horizon line in the mark. Used as a divider and
 * as the loading/scroll motif — it is the most ownable shape the brand has.
 */
export function Horizon({
  bars = 6,
  width = 220,
  className,
  style,
}: {
  bars?: number
  width?: number
  className?: string
  style?: CSSProperties
}) {
  const gap = 7
  const height = bars * gap
  return (
    <svg
      className={className}
      style={style}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {Array.from({ length: bars }, (_, i) => {
        // Each bar narrows as it descends, mirroring the mark's reflection.
        const inset = (width / 2) * (i / bars) * 0.86
        return (
          <rect
            key={i}
            x={inset}
            y={i * gap}
            width={Math.max(width - inset * 2, 6)}
            height={4}
            rx={2}
            fill="currentColor"
            opacity={1 - i * 0.07}
          />
        )
      })}
    </svg>
  )
}

/** The arch + beacon, drawn as line art for use at small sizes. */
export function BeaconMark({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M2.6 16.4a9.4 9.4 0 0 1 18.8 0"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="12" cy="9.6" r="2.9" stroke="currentColor" strokeWidth="1.4" />
      <path d="M6.6 9.6h10.8" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M1.4 18.4h21.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M5.6 21h12.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
    </svg>
  )
}
