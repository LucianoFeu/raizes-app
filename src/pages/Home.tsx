import { useNavigate } from 'react-router-dom'
import { BookOpen, ChevronRight, Sparkles } from 'lucide-react'
import { useProgressoStore } from '../store/progressoStore'
import { saudacaoHorario } from '../utils/storage'
import { StreakDisplay } from '../components/gamificacao/StreakDisplay'
import { XPDisplay } from '../components/gamificacao/XPDisplay'
import { ConquistaCard } from '../components/gamificacao/ConquistaCard'
import { useConquistas } from '../hooks/useConquistas'
import { ProgressBar } from '../components/ui/ProgressBar'

const TIPOS_EMOJI: Record<string, string> = {
  versiculo: '📖', quiz: '❓', desafio: '🎯', citacao: '💬', revisao: '📝',
}
const TIPOS_LABEL: Record<string, string> = {
  versiculo: 'Versículo', quiz: 'Quiz', desafio: 'Desafio', citacao: 'Citação', revisao: 'Revisão',
}
const DIAS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

function AtividadeHoje() {
  const navigate = useNavigate()
  const trilhasData = useProgressoStore((s) => s.trilhasData)
  const getMicroConcluida = useProgressoStore((s) => s.getMicroConcluida)
  const getLicaoConcluida = useProgressoStore((s) => s.getLicaoConcluida)
  const diaHoje = new Date().getDay()
  const diaMap: Record<number, 1|2|3|4|5> = { 1:1, 2:2, 3:3, 4:4, 5:5 }
  const diaSemana = diaMap[diaHoje]

  for (const trilha of trilhasData) {
    if (!trilha.desbloqueada) continue
    for (const semana of trilha.semanas) {
      const licaoConcluida = getLicaoConcluida(semana.licaoCompleta.id)
      if (!licaoConcluida) {
        return (
          <button
            onClick={() => navigate(`/trilha/${trilha.id}/semana/${semana.id}/licao`)}
            className="w-full text-left card-accent card-tap animate-glow"
            style={{ borderRadius: 20, padding: '18px 18px', position: 'relative', overflow: 'hidden' }}
          >
            <div className="absolute inset-0 animate-shimmer-indigo rounded-2xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none rounded-2xl" style={{ background: 'radial-gradient(circle at 100% 0%, rgba(139,92,246,0.2), transparent 70%)' }} />
            <div className="relative z-10 flex items-center gap-4">
              <div className="icon-box">
                <BookOpen size={22} style={{ color: '#A5B4FC' }} />
              </div>
              <div className="flex-1 min-w-0">
                <span className="pill mb-2 inline-block">Lição da Semana</span>
                <p className="text-base font-black leading-tight mt-1 tracking-tight" style={{ color: 'var(--text-1)', letterSpacing: '-0.01em' }}>
                  {semana.tema}
                </p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--text-3)' }}>
                  {trilha.titulo} · Sem {semana.numero} · ~15 min
                </p>
              </div>
              <ChevronRight size={20} style={{ color: '#A5B4FC', flexShrink: 0 }} />
            </div>
          </button>
        )
      }

      if (diaSemana) {
        const micro = semana.microInteracoes.find((m) => m.diaDaSemana === diaSemana && !getMicroConcluida(m.id))
        if (micro) {
          return (
            <button
              onClick={() => navigate(`/trilha/${trilha.id}/semana/${semana.id}/micro/${micro.id}`)}
              className="w-full text-left card-accent card-tap"
              style={{ borderRadius: 20, padding: '18px', position: 'relative', overflow: 'hidden' }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none" style={{ background: 'radial-gradient(circle at 100% 0%, rgba(99,102,241,0.15), transparent 70%)' }} />
              <div className="relative z-10 flex items-center gap-4">
                <div className="icon-box text-2xl">{TIPOS_EMOJI[micro.tipo]}</div>
                <div className="flex-1 min-w-0">
                  <span className="pill mb-1 inline-block">{TIPOS_LABEL[micro.tipo]} de hoje</span>
                  <p className="text-base font-black leading-tight mt-1 tracking-tight" style={{ color: 'var(--text-1)' }}>{semana.tema}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--text-3)' }}>{DIAS[diaHoje]} · +{micro.xpRecompensa} XP</p>
                </div>
                <ChevronRight size={20} style={{ color: '#A5B4FC', flexShrink: 0 }} />
              </div>
            </button>
          )
        }
      }
    }
  }

  return (
    <div className="card text-center" style={{ padding: '24px' }}>
      <p className="text-3xl mb-2">🎉</p>
      <p className="text-sm font-bold" style={{ color: 'var(--text-1)' }}>Tudo feito por hoje!</p>
      <p className="text-xs mt-0.5" style={{ color: 'var(--text-3)' }}>Volte amanhã para mais</p>
    </div>
  )
}

export function Home() {
  const navigate = useNavigate()
  const usuario = useProgressoStore((s) => s.usuario)
  const trilhasData = useProgressoStore((s) => s.trilhasData)
  const getLicaoConcluida = useProgressoStore((s) => s.getLicaoConcluida)
  const { desbloqueadas } = useConquistas()

  const nome = usuario?.nome ?? 'amigo'
  const saudacao = saudacaoHorario()
  const totalSem = trilhasData.flatMap((t) => t.semanas).length
  const doneCount = trilhasData.flatMap((t) => t.semanas).filter((s) => getLicaoConcluida(s.licaoCompleta.id)).length

  return (
    <div className="flex flex-col min-h-screen pb-28">
      {/* ── HEADER com mesh gradient ── */}
      <div
        className="mesh-header px-5 pb-6"
        style={{ paddingTop: 'max(env(safe-area-inset-top, 0px), 28px)' }}
      >
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--text-3)' }}>{saudacao}</p>
            <h1 className="text-3xl font-black tracking-tight" style={{ color: 'var(--text-1)', letterSpacing: '-0.03em' }}>
              {nome} <span className="inline-block" style={{ animationDelay: '0.2s' }}>👋</span>
            </h1>
          </div>
          <div className="flex gap-2 mt-1">
            <XPDisplay compact />
            <StreakDisplay compact />
          </div>
        </div>

        {/* Barra geral de progresso */}
        <div className="card-accent" style={{ borderRadius: 18, padding: '16px 18px', position: 'relative', overflow: 'hidden' }}>
          <div className="absolute top-0 right-0 w-28 h-28 pointer-events-none" style={{ background: 'radial-gradient(circle at 100% 0%, rgba(139,92,246,0.2), transparent 70%)' }} />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-bold" style={{ color: 'var(--text-3)' }}>
                <Sparkles size={11} className="inline mr-1" style={{ color: '#A5B4FC' }} />
                Progresso geral
              </p>
              <span className="pill">{doneCount}/{totalSem} sem.</span>
            </div>
            <ProgressBar value={doneCount} max={totalSem} color="indigo" height="md" />
          </div>
        </div>
      </div>

      {/* ── CONTEÚDO ── */}
      <div className="px-4 flex flex-col gap-5">
        {/* Atividade de hoje */}
        <div className="animate-fade-up">
          <p className="section-label">Atividade de Hoje</p>
          <AtividadeHoje />
        </div>

        {/* Grid: Streak + XP */}
        <div className="grid grid-cols-2 gap-3 animate-fade-up d-100">
          <StreakDisplay />
          <XPDisplay />
        </div>

        {/* Trilhas */}
        <div className="animate-fade-up d-200">
          <div className="flex items-center justify-between mb-3">
            <p className="section-label mb-0">Trilhas</p>
            <button
              onClick={() => navigate('/mapa')}
              className="flex items-center gap-1 text-xs font-bold"
              style={{ color: '#A5B4FC' }}
            >
              Ver todas <ChevronRight size={13} />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {trilhasData.slice(0, 4).map((trilha, i) => {
              const done = trilha.semanas.filter((s) => getLicaoConcluida(s.licaoCompleta.id)).length
              const total = trilha.semanas.length
              const pct = total > 0 ? (done / total) * 100 : 0
              return (
                <button
                  key={trilha.id}
                  onClick={() => trilha.desbloqueada && navigate(`/trilha/${trilha.id}`)}
                  className={`card card-tap text-left animate-fade-up ${!trilha.desbloqueada ? 'opacity-40 pointer-events-none' : ''}`}
                  style={{ padding: '14px', animationDelay: `${0.2 + i * 0.06}s`, borderRadius: 18 }}
                >
                  <span className="text-3xl block mb-3">{trilha.icone}</span>
                  <p className="text-xs font-black leading-snug mb-1" style={{ color: 'var(--text-1)', letterSpacing: '-0.01em' }}>
                    {trilha.titulo}
                  </p>
                  <p className="text-[10px] mb-2.5" style={{ color: 'var(--text-3)' }}>{done}/{total} sem.</p>
                  <div className="progress-track" style={{ height: 4 }}>
                    <div className="progress-fill-indigo" style={{ width: `${pct}%`, height: '100%' }} />
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Conquistas recentes */}
        {desbloqueadas.length > 0 && (
          <div className="animate-fade-up d-300">
            <div className="flex items-center justify-between mb-3">
              <p className="section-label mb-0">Conquistas Recentes</p>
              <button onClick={() => navigate('/conquistas')} className="flex items-center gap-1 text-xs font-bold" style={{ color: '#A5B4FC' }}>
                Ver todas <ChevronRight size={13} />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {desbloqueadas.slice(-2).reverse().map((c) => (
                <ConquistaCard key={c.id} conquista={c} size="sm" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
