import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { type ReactNode } from 'react'

type Props = {
  title: string
  subtitle?: string
  backTo?: string
  rightElement?: ReactNode
  large?: boolean
}

export function PageHeader({ title, subtitle, backTo, rightElement, large }: Props) {
  const navigate = useNavigate()

  return (
    <header
      className="sticky top-0 z-30 px-4 flex items-center gap-3"
      style={{
        paddingTop: 'max(env(safe-area-inset-top, 0px), 16px)',
        paddingBottom: 14,
        background: 'rgba(13,15,20,0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(99,102,241,0.1)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
      }}
    >
      {backTo && (
        <button
          onClick={() => navigate(backTo)}
          className="w-9 h-9 flex items-center justify-center rounded-2xl flex-shrink-0 transition-all"
          style={{
            background: 'rgba(99,102,241,0.1)',
            border: '1px solid rgba(99,102,241,0.2)',
            color: '#A5B4FC',
          }}
        >
          <ChevronLeft size={18} />
        </button>
      )}
      <div className="flex-1 min-w-0">
        <h1
          className={`font-bold truncate leading-tight ${large ? 'font-playfair text-3xl' : 'text-xl'}`}
          style={{
            color: 'var(--text-1)',
            letterSpacing: large ? '-0.025em' : '-0.01em',
          }}
        >
          {title}
        </h1>
        {subtitle && <p className="text-xs mt-0.5 truncate" style={{ color: 'var(--text-3)' }}>{subtitle}</p>}
      </div>
      {rightElement}
    </header>
  )
}
