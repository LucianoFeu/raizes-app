import { useConquistas } from '../hooks/useConquistas'
import { PageHeader } from '../components/layout/PageHeader'
import { ConquistaCard } from '../components/gamificacao/ConquistaCard'
import { ProgressBar } from '../components/ui/ProgressBar'

export function Conquistas() {
  const { todas, desbloqueadas } = useConquistas()

  return (
    <div className="flex flex-col min-h-screen pb-28">
      <PageHeader title="Conquistas" subtitle={`${desbloqueadas.length} de ${todas.length}`} />
      <div className="px-4 pt-5 flex flex-col gap-5">
        <div className="card-accent animate-fade-up" style={{ borderRadius: 22, padding: '20px', position: 'relative', overflow: 'hidden' }}>
          <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none" style={{ background: 'radial-gradient(circle at 100% 0%, rgba(139,92,246,0.2), transparent 70%)' }} />
          <div className="relative z-10 flex items-center justify-between mb-3">
            <p className="text-base font-black" style={{ color: 'var(--text-1)' }}>Sua coleção</p>
            <span className="pill">{desbloqueadas.length}/{todas.length}</span>
          </div>
          <ProgressBar value={desbloqueadas.length} max={todas.length} color="indigo" height="md" />
        </div>

        {desbloqueadas.length > 0 && (
          <div className="animate-fade-up d-100">
            <div className="flex items-center gap-2 mb-3">
              <p className="section-label mb-0">Desbloqueadas</p>
              <span className="pill">{desbloqueadas.length}</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {desbloqueadas.map((c, i) => (
                <div key={c.id} className="animate-scale-in" style={{ animationDelay: `${i * 0.06}s` }}>
                  <ConquistaCard conquista={c} />
                </div>
              ))}
            </div>
          </div>
        )}

        {todas.filter((c) => !c.desbloqueada).length > 0 && (
          <div className="animate-fade-up d-200">
            <p className="section-label">{desbloqueadas.length > 0 ? 'Em progresso' : 'Todas'}</p>
            <div className="grid grid-cols-2 gap-3">
              {todas.filter((c) => !c.desbloqueada).map((c, i) => (
                <div key={c.id} className="animate-fade-up" style={{ animationDelay: `${0.2 + i * 0.04}s` }}>
                  <ConquistaCard conquista={c} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
