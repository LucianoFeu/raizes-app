import { useXP } from '../../hooks/useXP'
import { ProgressBar } from '../ui/ProgressBar'

type Props = { compact?: boolean }

export function XPDisplay({ compact }: Props) {
  const { xpTotal, nivelNome, nivelIcone, porcentagem, xpParaProximoNivel, isMaxNivel } = useXP()

  if (compact) {
    return (
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl" style={{ background: 'var(--indigo-dim)', border: '1px solid var(--indigo-border)' }}>
        <span>{nivelIcone}</span>
        <span className="text-sm font-black" style={{ color: '#A5B4FC' }}>{xpTotal} XP</span>
      </div>
    )
  }

  return (
    <div className="card-accent h-full flex flex-col" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="absolute top-0 right-0 w-20 h-20 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.2), transparent 70%)', transform: 'translate(30%,-30%)' }} />
      <div className="relative z-10">
        <p className="section-label mb-2">Experiência</p>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{nivelIcone}</span>
            <div>
              <p className="text-[10px]" style={{ color: 'var(--text-3)' }}>Nível</p>
              <p className="text-sm font-bold" style={{ color: 'var(--text-1)' }}>{nivelNome}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="stat-num stat-num-indigo" style={{ fontSize: '1.8rem' }}>{xpTotal}</p>
            <p className="text-[10px]" style={{ color: 'var(--text-3)' }}>XP total</p>
          </div>
        </div>
        <ProgressBar value={porcentagem} max={100} color="indigo" height="sm" />
        {!isMaxNivel && (
          <p className="text-[10px] mt-1.5 text-right" style={{ color: 'var(--text-3)' }}>+{xpParaProximoNivel} XP para subir</p>
        )}
      </div>
    </div>
  )
}
