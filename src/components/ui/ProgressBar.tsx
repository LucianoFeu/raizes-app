type Props = {
  value: number
  max?: number
  color?: 'indigo' | 'amber' | 'green'
  height?: 'sm' | 'md'
  showLabel?: boolean
  label?: string
  className?: string
}

const fillClass: Record<string, string> = {
  indigo: 'progress-fill-indigo',
  amber:  'progress-fill-amber',
  green:  'progress-fill-green',
}

const labelColor: Record<string, string> = {
  indigo: '#A5B4FC',
  amber:  '#FCD34D',
  green:  '#34D399',
}

export function ProgressBar({ value, max = 100, color = 'indigo', height = 'sm', showLabel, label, className = '' }: Props) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100))
  const h = height === 'sm' ? '6px' : '9px'

  return (
    <div className={className}>
      {(showLabel || label) && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold" style={{ color: 'var(--text-3)' }}>{label}</span>
          <span className="text-xs font-bold" style={{ color: labelColor[color] }}>{Math.round(pct)}%</span>
        </div>
      )}
      <div className="progress-track" style={{ height: h }}>
        <div className={fillClass[color]} style={{ width: `${pct}%`, height: '100%' }} />
      </div>
    </div>
  )
}
