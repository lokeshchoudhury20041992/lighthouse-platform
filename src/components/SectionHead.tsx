import type { ReactNode } from 'react'

/** Numbered section masthead — the structural device the whole site runs on. */
export default function SectionHead({
  index,
  eyebrow,
  title,
  lead,
  align = 'split',
  action,
}: {
  index?: string
  eyebrow?: string
  title: ReactNode
  lead?: ReactNode
  align?: 'split' | 'center' | 'left'
  action?: ReactNode
}) {
  return (
    <div className={`sechead sechead--${align}`}>
      <div className="sechead__lead">
        {(index || eyebrow) && (
          <div className="sechead__meta reveal">
            {index && <span className="index-num">{index}</span>}
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          </div>
        )}
        <h2 className="sechead__title t-h2 reveal" style={{ '--d': '0.05s' } as React.CSSProperties}>
          {title}
        </h2>
      </div>

      {(lead || action) && (
        <div className="sechead__aside reveal" style={{ '--d': '0.12s' } as React.CSSProperties}>
          {lead && <p className="t-body">{lead}</p>}
          {action}
        </div>
      )}
    </div>
  )
}
