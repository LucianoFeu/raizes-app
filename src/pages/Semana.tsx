import { useParams, useNavigate } from 'react-router-dom'
import { BookOpen, CheckCircle, Circle, ChevronRight } from 'lucide-react'
import { useProgressoStore } from '../store/progressoStore'
import { PageHeader } from '../components/layout/PageHeader'
import { ProgressBar } from '../components/ui/ProgressBar'

const TIPOS_EMOJI: Record<string, string> = { versiculo: '📖', quiz: '❓', desafio: '🎯', citacao: '💬', revisao: '📝' }
const TIPOS_LABEL: Record<string, string> = { versiculo: 'Versículo', quiz: 'Quiz', desafio: 'Desafio', citacao: 'Citação', revisao: 'Revisão' }
const DIAS_LABEL: Record<number, string> = { 1: 'Segunda', 2: 'Terça', 3: 'Quarta', 4: 'Quinta', 5: 'Sexta' }

export function Semana() {
  const { trilhaId, semanaId } = useParams<{ trilhaId: string; semanaId: string }>()
  const navigate = useNavigate()
  const trilhasData = useProgressoStore((s) => s.trilhasData)
  const getMicroConcluida = useProgressoStore((s) => s.getMicroConcluida)
  const getLicaoConcluida = useProgressoStore((s) => s.getLicaoConcluida)

  const trilha = trilhasData.find((t) => t.id === trilhaId)
  const semana = trilha?.semanas.find((s) => s.id === semanaId)
  if (!trilha || !semana) return <div className="flex items-center justify-center min-h-screen"><p style={{ color: 'var(--text-3)' }}>Semana não encontrada</p></div>

  const licaoConcluida = getLicaoConcluida(semana.licaoCompleta.id)
  const microsConcluidas = semana.microInteracoes.filter((m) => getMicroConcluida(m.id)).length
  const totalAtiv = 1 + semana.microInteracoes.length
  const concluidas = (licaoConcluida ? 1 : 0) + microsConcluidas
  const pct = totalAtiv > 0 ? (concluidas / totalAtiv) * 100 : 0

  return (
    <div className="flex flex-col min-h-screen pb-28">
      <PageHeader title={`Semana ${semana.numero}`} subtitle={semana.tema} backTo={`/trilha/${trilhaId}`} />
      <div className="px-4 pt-5 flex flex-col gap-4">
        {/* Info hero */}
        <div className="card-accent animate-fade-up" style={{ borderRadius: 22, padding: '20px', position: 'relative', overflow: 'hidden' }}>
          <div className="absolute top-0 right-0 w-28 h-28 pointer-events-none" style={{ background: 'radial-gradient(circle at 100% 0%, rgba(139,92,246,0.2), transparent 70%)' }} />
          <div className="relative z-10">
            <p className="text-xs font-bold mb-0.5" style={{ color: 'var(--text-3)' }}>Núcleo Doutrinário</p>
            <p className="text-sm font-bold mb-4" style={{ color: 'var(--text-1)' }}>{semana.nucleoDoutrinario}</p>
            <ProgressBar value={pct} color="indigo" height="md" showLabel label={`${concluidas}/${totalAtiv} atividades`} />
          </div>
        </div>

        {/* Lição */}
        <div className="animate-fade-up d-100">
          <p className="section-label">Lição da Semana</p>
          <button
            onClick={() => navigate(`/trilha/${trilhaId}/semana/${semanaId}/licao`)}
            className={`w-full text-left card-tap ${licaoConcluida ? 'card-green' : 'card-accent'}`}
            style={{ borderRadius: 20, padding: '18px' }}
          >
            <div className="flex items-start gap-3">
              <div className={`icon-box ${licaoConcluida ? 'icon-box-amber' : ''}`} style={{ background: licaoConcluida ? 'var(--green-dim)' : undefined, borderColor: licaoConcluida ? 'var(--green-border)' : undefined }}>
                {licaoConcluida ? <CheckCircle size={22} style={{ color: 'var(--green-true)' }} /> : <BookOpen size={22} style={{ color: '#A5B4FC' }} />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-base font-black tracking-tight" style={{ color: 'var(--text-1)', letterSpacing: '-0.01em' }}>{semana.tema}</p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--text-3)' }}>{licaoConcluida ? 'Concluída · +100 XP' : '~15-20 min · +100 XP'}</p>
              </div>
              {licaoConcluida ? <span className="pill pill-green">Feita</span> : <ChevronRight size={17} style={{ color: '#A5B4FC', marginTop: 3 }} />}
            </div>
          </button>
        </div>

        {/* Micro-interações */}
        {semana.microInteracoes.length > 0 && (
          <div className="animate-fade-up d-200">
            <p className="section-label">Atividades da Semana</p>
            <div className="flex flex-col gap-2">
              {semana.microInteracoes.map((micro, i) => {
                const concluida = getMicroConcluida(micro.id)
                return (
                  <button
                    key={micro.id}
                    onClick={() => navigate(`/trilha/${trilhaId}/semana/${semanaId}/micro/${micro.id}`)}
                    className="w-full text-left card card-tap animate-fade-up"
                    style={{ borderRadius: 16, padding: '14px 16px', opacity: concluida ? 0.65 : 1, animationDelay: `${0.22 + i * 0.05}s` }}
                  >
                    <div className="flex items-center gap-3">
                      {concluida ? <CheckCircle size={18} style={{ color: 'var(--green-true)', flexShrink: 0 }} /> : <Circle size={18} style={{ color: 'var(--text-3)', flexShrink: 0 }} />}
                      <span className="text-xl flex-shrink-0">{TIPOS_EMOJI[micro.tipo]}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--text-3)' }}>{DIAS_LABEL[micro.diaDaSemana]}</p>
                        <p className="text-sm font-bold" style={{ color: 'var(--text-1)' }}>{TIPOS_LABEL[micro.tipo]}</p>
                      </div>
                      <span className={`pill ${concluida ? 'pill-green' : ''} flex-shrink-0`}>+{micro.xpRecompensa} XP</span>
                      <ChevronRight size={14} style={{ color: 'var(--text-3)', flexShrink: 0 }} />
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
