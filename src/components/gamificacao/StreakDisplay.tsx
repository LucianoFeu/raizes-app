import { useStreak } from '../../hooks/useStreak'

type Props = { compact?: boolean }

export function StreakDisplay({ compact }: Props) {
  const { streakAtual, chamasDeGraca, hojeAtivo, emRisco } = useStreak()

  if (compact) {
    return (
      <div
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl"
        style={{ background: 'var(--amber-dim)', border: '1px solid var(--amber-border)' }}
      >
        <span className={`text-base animate-flicker ${!hojeAtivo ? 'opacity-30' : ''}`}>🔥</span>
        <span className="text-sm font-black" style={{ color: 'var(--amber-bright)' }}>{streakAtual}</span>
      </div>
    )
  }

  return (
    <div
      className={`card-amber h-full flex flex-col ${hojeAtivo ? 'animate-amber-glow' : ''}`}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Shimmer */}
      {hojeAtivo && <div className="absolute inset-0 rounded-2xl animate-shimmer-indigo pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, rgba(245,158,11,0.08), transparent)', backgroundSize: '300% 100%' }} />}
      <div className="relative z-10">
        <p className="section-label mb-2">Sequência</p>
        <div className="flex items-end gap-2 mb-3">
          <span className={`text-4xl leading-none animate-flicker ${!hojeAtivo ? 'opacity-20' : ''}`}>🔥</span>
          <div>
            <span className="stat-num stat-num-amber">{streakAtual}</span>
            <span className="text-xs ml-1" style={{ color: 'var(--text-3)' }}>dias</span>
          </div>
        </div>
        <div className="flex gap-1 items-center">
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} className={`text-sm ${i < chamasDeGraca ? 'opacity-100' : 'opacity-15'}`}>🔥</span>
          ))}
          <span className="text-[10px] ml-1" style={{ color: 'var(--text-3)' }}>graça</span>
        </div>
        {emRisco && (
          <div className="mt-2 px-2 py-1 rounded-xl text-center" style={{ background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.25)' }}>
            <p className="text-[10px] font-bold" style={{ color: '#FB923C' }}>⚠️ Streak em risco!</p>
          </div>
        )}
      </div>
    </div>
  )
}
