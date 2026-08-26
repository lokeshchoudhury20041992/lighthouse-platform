import type { ReactNode } from 'react'
import { Horizon } from './Brand'

/**
 * The masthead every inner page opens with: index number, eyebrow, oversized
 * title, and a standfirst set at reading width.
 */
export default function PageHeader({
  index,
  eyebrow,
  title,
  standfirst,
  children,
}: {
  index: string
  eyebrow: string
  title: ReactNode
  standfirst: ReactNode
  children?: ReactNode
}) {
  return (
    <header className="pagehead section section--paper">
      <div className="pagehead__meta reveal">
        <span className="index-num">{index}</span>
        <span className="eyebrow">{eyebrow}</span>
      </div>

      <h1 className="pagehead__title t-h1 reveal" style={{ '--d': '0.06s' } as React.CSSProperties}>
        {title}
      </h1>

      <div className="pagehead__body reveal" style={{ '--d': '0.14s' } as React.CSSProperties}>
        <Horizon bars={5} width={124} className="pagehead__horizon" />
        <div className="pagehead__standfirst t-lead">{standfirst}</div>
        {children}
      </div>
    </header>
  )
}
