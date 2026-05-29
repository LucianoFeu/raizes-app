import { useNavigate } from 'react-router-dom'
import { ChevronRight, Lock } from 'lucide-react'
import { useProgressoStore } from '../store/progressoStore'
import { PageHeader } from '../components/layout/PageHeader'
import { ProgressBar } from '../components/ui/ProgressBar'

export function Mapa() {
  const navigate = useNavigate()
  const trilhasData = useProgressoStore((s) => s.trilhasData)

  return (
    <div className="flex flex-col min-h-screen pb-28">
      <PageHeader title="Trilhas" subtitle="Sua jornada no conhecimento bíblico" large />
      <div className="px-4 pt-5 flex flex-col gap-3">
        {trilhasData.map((trilha, index) => {
          const done = trilha.semanas.filter((s) => s.concluida).length
          const total = trilha.semanas.length
          const pct = total > 0 ? (done / total) * 100 : 0

          return (
            <button
              key={trilha.id}
              disabled={!trilha.desbloqueada}
              onClick={() => trilha.desbloqueada && navigate(`/trilha/${trilha.id}`)}
              className={`w-full text-left animate-fade-up ${trilha.desbloqueada ? 'card-accent card-tap' : 'card'}`}
              style={{
                borderRadius: 20,
                padding: '18px',
                opacity: trilha.desbloqueada ? 1 : 0.4,
                cursor: trilha.desbloqueada ? 'pointer' : 'default',
                animationDelay: `${index * 0.07}s`,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {trilha.desbloqueada && (
                <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none" style={{ background: 'radial-gradient(circle at 100% 0%, rgba(139,92,246,0.18), transparent 70%)' }} />
              )}
              <div className="relative z-10 flex items-center gap-4">
                <div className={`icon-box ${!trilha.desbloqueada ? 'icon-box-amber' : ''}`} style={{ fontSize: 22 }}>
                  {trilha.desbloqueada ? <span>{trilha.icone}</span> : <Lock size={18} style={{ color: 'var(--text-3)' }} />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="text-base font-black tracking-tight" style={{ color: 'var(--text-1)', letterSpacing: '-0.01em' }}>{trilha.titulo}</p>
                    {pct === 100 && <span className="pill pill-green">Completa</span>}
                    {!trilha.desbloqueada && <span className="pill pill-stone">Bloqueada</span>}
                  </div>
                  <p className="text-xs mb-3 line-clamp-1" style={{ color: 'var(--text-3)' }}>{trilha.descricao}</p>
                  {trilha.desbloqueada && <ProgressBar value={pct} color={pct === 100 ? 'green' : 'indigo'} />}
                </div>
                <div className="text-right flex-shrink-0 ml-1">
                  <p className="text-base font-black" style={{ color: trilha.desbloqueada ? '#A5B4FC' : 'var(--text-3)', letterSpacing: '-0.02em' }}>{done}/{total}</p>
                  <p className="text-[10px]" style={{ color: 'var(--text-3)' }}>semanas</p>
                  {trilha.desbloqueada && <ChevronRight size={14} style={{ color: 'var(--text-3)', marginLeft: 'auto', marginTop: 4 }} />}
                </div>
              </div>
              {trilha.desbloqueada && (
                <div className="relative z-10 flex gap-1.5 mt-4 pt-3" style={{ borderTop: '1px solid var(--border)' }}>
                  {trilha.semanas.map((s) => (
                    <div key={s.id} className="flex-1 h-1 rounded-full transition-all"
                      style={{ background: s.concluida ? 'var(--gradient-accent)' : 'rgba(255,255,255,0.06)' }} />
                  ))}
                </div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
