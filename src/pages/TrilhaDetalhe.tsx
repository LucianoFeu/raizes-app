import { useParams, useNavigate } from 'react-router-dom'
import { ChevronRight, CheckCircle, Lock } from 'lucide-react'
import { useProgressoStore } from '../store/progressoStore'
import { PageHeader } from '../components/layout/PageHeader'
import { ProgressBar } from '../components/ui/ProgressBar'

export function TrilhaDetalhe() {
  const { trilhaId } = useParams<{ trilhaId: string }>()
  const navigate = useNavigate()
  const trilhasData = useProgressoStore((s) => s.trilhasData)
  const getLicaoConcluida = useProgressoStore((s) => s.getLicaoConcluida)

  const trilha = trilhasData.find((t) => t.id === trilhaId)
  if (!trilha) return <div className="flex items-center justify-center min-h-screen"><p style={{ color: 'var(--text-3)' }}>Trilha não encontrada</p></div>

  const done = trilha.semanas.filter((s) => getLicaoConcluida(s.licaoCompleta.id)).length
  const total = trilha.semanas.length
  const pct = total > 0 ? (done / total) * 100 : 0

  return (
    <div className="flex flex-col min-h-screen pb-28">
      <PageHeader title={trilha.titulo} subtitle={trilha.descricao} backTo="/mapa" large />
      <div className="px-4 pt-5 flex flex-col gap-4">
        {/* Hero progress card */}
        <div className="card-accent animate-fade-up" style={{ borderRadius: 24, padding: '22px', position: 'relative', overflow: 'hidden' }}>
          <div className="absolute top-0 right-0 w-36 h-36 pointer-events-none" style={{ background: 'radial-gradient(circle at 100% 0%, rgba(139,92,246,0.25), transparent 65%)' }} />
          <div className="relative z-10 flex items-center gap-4 mb-4">
            <span className="text-5xl">{trilha.icone}</span>
            <div>
              <p className="text-xs font-bold" style={{ color: 'var(--text-3)' }}>Progresso</p>
              <p className="text-3xl font-black tracking-tight" style={{ color: 'var(--text-1)', letterSpacing: '-0.03em' }}>
                {done}<span className="text-xl font-semibold" style={{ color: 'var(--text-3)' }}>/{total}</span>
              </p>
            </div>
          </div>
          <ProgressBar value={pct} color={pct === 100 ? 'green' : 'indigo'} height="md" />
        </div>

        {/* Semanas */}
        <div className="flex flex-col gap-2">
          {trilha.semanas.map((semana, index) => {
            const licaoConcluida = getLicaoConcluida(semana.licaoCompleta.id)
            const desbloqueada = index === 0 || getLicaoConcluida(trilha.semanas[index - 1].licaoCompleta.id)
            return (
              <button
                key={semana.id}
                disabled={!desbloqueada}
                onClick={() => desbloqueada && navigate(`/trilha/${trilhaId}/semana/${semana.id}`)}
                className={`w-full text-left animate-fade-up ${desbloqueada ? 'card card-tap' : 'card'}`}
                style={{
                  borderRadius: 18,
                  padding: '16px',
                  opacity: desbloqueada ? 1 : 0.4,
                  cursor: desbloqueada ? 'pointer' : 'default',
                  animationDelay: `${0.08 + index * 0.06}s`,
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: 40, height: 40, borderRadius: 14,
                      background: licaoConcluida
                        ? 'var(--green-dim)'
                        : desbloqueada
                          ? 'var(--indigo-dim)'
                          : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${licaoConcluida ? 'var(--green-border)' : desbloqueada ? 'var(--indigo-border)' : 'var(--border)'}`,
                    }}
                  >
                    {licaoConcluida
                      ? <CheckCircle size={18} style={{ color: 'var(--green-true)' }} />
                      : !desbloqueada
                        ? <Lock size={15} style={{ color: 'var(--text-3)' }} />
                        : <span className="text-sm font-black" style={{ color: '#A5B4FC' }}>{semana.numero}</span>
                    }
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold" style={{ color: 'var(--text-1)' }}>{semana.tema}</p>
                    <p className="text-xs mt-0.5 truncate" style={{ color: 'var(--text-3)' }}>{semana.nucleoDoutrinario}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {licaoConcluida && <span className="pill pill-green">✓</span>}
                    {desbloqueada && <ChevronRight size={15} style={{ color: 'var(--text-3)' }} />}
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
