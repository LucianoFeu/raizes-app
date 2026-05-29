import { type ReactNode, type CSSProperties } from 'react'

type Variant = 'default' | 'accent' | 'amber' | 'green'

type Props = {
  children: ReactNode
  className?: string
  style?: CSSProperties
  onClick?: () => void
  variant?: Variant
  amber?: boolean
}

const map: Record<Variant, string> = {
  default: 'card',
  accent:  'card-accent',
  amber:   'card-amber',
  green:   'card-green',
}

export function Card({ children, className = '', style, onClick, variant = 'default', amber }: Props) {
  const v = amber ? 'amber' : variant
  return (
    <div
      className={`${map[v]} ${onClick ? 'card-tap' : ''} ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
