import type { Conquista } from '../../types'

type Props = { conquista: Conquista & { desbloqueada: boolean }; size?: 'sm' | 'md' }

export function ConquistaCard({ conquista, size = 'md' }: Props) {
  if (size === 'sm') {
    return (
      <div
        className="flex items-center gap-3 p-3 rounded-2xl transition-all duration-200"
        style={{
          background: conquista.desbloqueada
            ? 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(139,92,246,0.08))'
            : 'var(--bg-card)',
          border: `1px solid ${conquista.desbloqueada ? 'var(--indigo-border)' : 'var(--border)'}`,
          opacity: conquista.desbloqueada ? 1 : 0.45,
          boxShadow: conquista.desbloqueada ? '0 4px 16px rgba(99,102,241,0.15)' : 'none',
        }}
      >
        <span className={`text-2xl ${conquista.desbloqueada ? '' : 'grayscale opacity-30'}`}>{conquista.icone}</span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-bold truncate" style={{ color: conquista.desbloqueada ? '#A5B4FC' : 'var(--text-3)' }}>
            {conquista.titulo}
          </p>
          <p className="text-xs truncate" style={{ color: 'var(--text-3)' }}>{conquista.descricao}</p>
        </div>
        {conquista.desbloqueada && (
          <span className="text-xs font-bold flex-shrink-0" style={{ color: 'var(--amber-bright)' }}>+{conquista.xpBonus}xp</span>
        )}
      </div>
    )
  }

  return (
    <div
      className="p-4 rounded-2xl text-center transition-all duration-200 animate-scale-in"
      style={{
        background: conquista.desbloqueada
          ? 'linear-gradient(145deg, #16193A, #1C1F40)'
          : 'var(--bg-card)',
        border: `1px solid ${conquista.desbloqueada ? 'var(--indigo-border)' : 'var(--border)'}`,
        opacity: conquista.desbloqueada ? 1 : 0.4,
        boxShadow: conquista.desbloqueada ? '0 8px 24px rgba(99,102,241,0.2)' : 'none',
      }}
    >
      <span className={`text-4xl block mb-2 ${conquista.desbloqueada ? '' : 'grayscale opacity-25'}`}>{conquista.icone}</span>
      <p className="text-sm font-bold mb-1" style={{ color: conquista.desbloqueada ? '#A5B4FC' : 'var(--text-3)' }}>
        {conquista.titulo}
      </p>
      <p className="text-xs leading-snug" style={{ color: 'var(--text-3)' }}>
        {conquista.desbloqueada ? conquista.descricao : conquista.condicao}
      </p>
      {conquista.desbloqueada && (
        <p className="text-xs font-bold mt-2 text-gradient-amber">+{conquista.xpBonus} XP</p>
      )}
    </div>
  )
}
