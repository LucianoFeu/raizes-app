import { type ReactNode } from 'react'

type Variant = 'default' | 'amber' | 'green' | 'stone' | 'red' | 'white'

type Props = { children: ReactNode; variant?: Variant; className?: string }

const map: Record<Variant, string> = {
  default: 'pill',
  amber:   'pill pill-amber',
  green:   'pill pill-green',
  stone:   'pill pill-stone',
  red:     'pill',
  white:   'pill pill-white',
}

export function Badge({ children, variant = 'default', className = '' }: Props) {
  return <span className={`${map[variant]} ${className}`}>{children}</span>
}
