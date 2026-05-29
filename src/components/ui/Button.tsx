import { type ButtonHTMLAttributes, type ReactNode } from 'react'

type Variant = 'primary' | 'amber' | 'secondary' | 'ghost' | 'danger' | 'success'
type Size = 'sm' | 'md' | 'lg'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
  children: ReactNode
  fullWidth?: boolean
  loading?: boolean
}

const sizes: Record<Size, string> = {
  sm: 'px-3.5 py-2   text-sm  rounded-xl',
  md: 'px-5   py-3   text-sm  rounded-2xl',
  lg: 'px-6   py-4   text-base rounded-2xl',
}

export function Button({
  variant = 'primary', size = 'md', children, fullWidth, loading,
  className = '', disabled, style, ...rest
}: Props) {
  const base = `inline-flex items-center justify-center gap-2 font-bold
    transition-all duration-150 active:scale-[0.97]
    disabled:opacity-40 disabled:pointer-events-none cursor-pointer
    ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`

  const variantClass =
    variant === 'primary'   ? 'btn-gradient' :
    variant === 'amber'     ? 'btn-amber' :
    variant === 'secondary' ? '' :
    variant === 'ghost'     ? '' :
    variant === 'danger'    ? '' :
    variant === 'success'   ? '' : ''

  const variantStyle: React.CSSProperties = {
    ...style,
    ...(variant === 'secondary' && {
      background: 'rgba(255,255,255,0.06)',
      border: '1px solid rgba(255,255,255,0.1)',
      color: 'var(--text-1)',
    }),
    ...(variant === 'ghost' && {
      background: 'transparent',
      color: 'var(--text-2)',
    }),
    ...(variant === 'danger' && {
      background: 'var(--red-dim)',
      border: '1px solid var(--red-border)',
      color: '#F87171',
    }),
    ...(variant === 'success' && {
      background: 'var(--green-dim)',
      border: '1px solid var(--green-border)',
      color: 'var(--green-true)',
    }),
  }

  return (
    <button
      className={`${base} ${variantClass}`}
      style={variantStyle}
      disabled={disabled || loading}
      {...rest}
    >
      {loading && <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />}
      {children}
    </button>
  )
}
