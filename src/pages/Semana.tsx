import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { BookOpen, CheckCircle, Circle, ChevronRight, X, Layers } from 'lucide-react'
import { useProgressoStore } from '../store/progressoStore'
import { PageHeader } from '../components/layout/PageHeader'
import { ProgressBar } from '../components/ui/ProgressBar'
import type { FlashCard } from '../types'

const TIPOS_EMOJI: Record<string, string> = { versiculo: '📖', quiz: '❓', desafio: '🎯', citacao: '💬', revisao: '📝' }
const TIPOS_LABEL: Record<string, string> = { versiculo: 'Versículo', quiz: 'Quiz', desafio: 'Desafio', citacao: 'Citação', revisao: 'Revisão' }
const DIAS_LABEL: Record<number, string> = { 1: 'Segunda', 2: 'Terça', 3: 'Quarta', 4: 'Quinta', 5: 'Sexta' }

// ── Componente de Flashcard individual ──────────────────────────────────────
function FlipCard({ card, index }: { card: FlashCard; index: number }) {
  const [virado, setVirado] = useState(false)

  return (
    <div
      className="flip-scene animate-fade-up"
      style={{ minHeight: 200, animationDelay: `${index * 0.07}s` }}
    >
      <div
        className={`flip-card-inner ${virado ? 'flipped' : ''}`}
        onClick={() => setVirado((v) => !v)}
        style={{ minHeight: 200 }}
      >
        {/* Frente */}
        <div
          className="flip-card-face card-accent rounded-2xl flex flex-col"
          style={{ minHeight: 200, padding: '20px', cursor: 'pointer', position: 'relative', overflow: 'hidden', userSelect: 'none' }}
        >
          <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none"
            style={{ background: 'radial-gradient(circle at 100% 0%, rgba(139,92,246,0.2), transparent 70%)' }} />
          <div className="relative z-10 flex flex-col h-full gap-3">
            <div className="flex items-center gap-2">
              <span
                className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black flex-shrink-0"
                style={{ background: 'var(--indigo-dim)', border: '1px solid var(--indigo-border)', color: '#A5B4FC' }}
              >?</span>
              <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#A5B4FC' }}>Pergunta</span>
            </div>
            <p className="text-sm font-semibold leading-relaxed flex-1" style={{ color: 'var(--text-1)' }}>
              {card.pergunta}
            </p>
            <p className="text-[10px] text-center font-semibold" style={{ color: 'var(--text-3)' }}>
              👆 Toque para revelar
            </p>
          </div>
        </div>

        {/* Verso */}
        <div
          className="flip-card-back rounded-2xl flex flex-col"
          style={{
            minHeight: 200, padding: '20px', cursor: 'pointer',
            position: 'absolute', inset: 0,
            background: 'linear-gradient(145deg, #071C18, #0C2820)',
            border: '1px solid var(--green-border)',
            boxShadow: '0 4px 20px rgba(52,211,153,0.12)',
            overflow: 'hidden', userSelect: 'none',
          }}
        >
          <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none"
            style={{ background: 'radial-gradient(circle at 100% 0%, rgba(52,211,153,0.15), transparent 70%)' }} />
          <div className="relative z-10 flex flex-col h-full gap-3">
            <div className="flex items-center gap-2">
              <span
                className="w-6 h-6 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
                style={{ background: 'var(--green-dim)', border: '1px solid var(--green-border)' }}
              >✓</span>
              <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--green-true)' }}>Resposta</span>
            </div>
            <p className="text-sm font-semibold leading-relaxed flex-1" style={{ color: 'var(--text-1)' }}>
              {card.resposta}
            </p>
            <p className="text-[10px] text-center font-semibold" style={{ color: 'var(--text-3)' }}>
              👆 Toque para ver a pergunta
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Modal de Flashcards ──────────────────────────────────────────────────────
function FlashcardsModal({ cards, onClose }: { cards: FlashCard[]; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 animate-fade-in"
      style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}
    >
      <div
        className="absolute inset-x-0 bottom-0 animate-slide-up flex flex-col"
        style={{
          maxHeight: '92vh',
          background: 'var(--bg)',
          borderRadius: '24px 24px 0 0',
          border: '1px solid rgba(99,102,241,0.2)',
          borderBottom: 'none',
          boxShadow: '0 -8px 40px rgba(0,0,0,0.5)',
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4 flex-shrink-0"
          style={{ borderBottom: '1px solid rgba(99,102,241,0.1)' }}
        >
          <div className="flex items-center gap-3">
            <div className="icon-box icon-box-sm">
              <Layers size={17} style={{ color: '#A5B4FC' }} />
            </div>
            <div>
              <p className="text-base font-black" style={{ color: 'var(--text-1)', letterSpacing: '-0.01em' }}>
                Flashcards
              </p>
              <p className="text-xs" style={{ color: 'var(--text-3)' }}>
                {cards.length} cards · toque para virar
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-2xl"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
          >
            <X size={16} style={{ color: 'var(--text-2)' }} />
          </button>
        </div>

        {/* Cards com scroll */}
        <div className="overflow-y-auto flex-1 px-4 py-4 flex flex-col gap-3 pb-safe"
          style={{ paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 20px)' }}>
          {cards.map((card, i) => (
            <FlipCard key={i} card={card} index={i} />
          ))}
          <p className="text-center text-xs pb-2" style={{ color: 'var(--text-3)' }}>
            Fim dos flashcards desta semana
          </p>
        </div>
      </div>
    </div>
  )
}

// ── Página principal ─────────────────────────────────────────────────────────
export function Semana() {
  const { trilhaId, semanaId } = useParams<{ trilhaId: string; semanaId: string }>()
  const navigate = useNavigate()
  const trilhasData = useProgressoStore((s) => s.trilhasData)
  const getMicroConcluida = useProgressoStore((s) => s.getMicroConcluida)
  const getLicaoConcluida = useProgressoStore((s) => s.getLicaoConcluida)
  const [flashcardsAberto, setFlashcardsAberto] = useState(false)

  const trilha = trilhasData.find((t) => t.id === trilhaId)
  const semana = trilha?.semanas.find((s) => s.id === semanaId)
  if (!trilha || !semana) return (
    <div className="flex items-center justify-center min-h-screen">
      <p style={{ color: 'var(--text-3)' }}>Semana não encontrada</p>
    </div>
  )

  const licaoConcluida = getLicaoConcluida(semana.licaoCompleta.id)
  const microsConcluidas = semana.microInteracoes.filter((m) => getMicroConcluida(m.id)).length
  const totalAtiv = 1 + semana.microInteracoes.length
  const concluidas = (licaoConcluida ? 1 : 0) + microsConcluidas
  const pct = totalAtiv > 0 ? (concluidas / totalAtiv) * 100 : 0
  const flashCards = semana.licaoCompleta.flashCards ?? []
  const temFlashCards = flashCards.length > 0

  return (
    <div className="flex flex-col min-h-screen pb-28">
      <PageHeader title={`Semana ${semana.numero}`} subtitle={semana.tema} backTo={`/trilha/${trilhaId}`} />

      <div className="px-4 pt-5 flex flex-col gap-4">
        {/* Info hero */}
        <div className="card-accent animate-fade-up" style={{ borderRadius: 22, padding: '20px', position: 'relative', overflow: 'hidden' }}>
          <div className="absolute top-0 right-0 w-28 h-28 pointer-events-none"
            style={{ background: 'radial-gradient(circle at 100% 0%, rgba(139,92,246,0.2), transparent 70%)' }} />
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
              <div
                className="icon-box"
                style={{
                  background: licaoConcluida ? 'var(--green-dim)' : undefined,
                  borderColor: licaoConcluida ? 'var(--green-border)' : undefined,
                }}
              >
                {licaoConcluida
                  ? <CheckCircle size={22} style={{ color: 'var(--green-true)' }} />
                  : <BookOpen size={22} style={{ color: '#A5B4FC' }} />
                }
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-base font-black tracking-tight" style={{ color: 'var(--text-1)', letterSpacing: '-0.01em' }}>
                  {semana.tema}
                </p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--text-3)' }}>
                  {licaoConcluida ? 'Concluída · +100 XP' : '~15-20 min · +100 XP'}
                </p>
              </div>
              {licaoConcluida
                ? <span className="pill pill-green">Feita</span>
                : <ChevronRight size={17} style={{ color: '#A5B4FC', marginTop: 3 }} />
              }
            </div>
          </button>
        </div>

        {/* Flashcards — acesso direto */}
        {temFlashCards && (
          <div className="animate-fade-up d-150">
            <p className="section-label">Revisão</p>
            <button
              onClick={() => setFlashcardsAberto(true)}
              className="w-full text-left card card-tap"
              style={{ borderRadius: 20, padding: '18px' }}
            >
              <div className="flex items-center gap-3">
                <div className="icon-box">
                  <Layers size={22} style={{ color: '#A5B4FC' }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-black tracking-tight" style={{ color: 'var(--text-1)', letterSpacing: '-0.01em' }}>
                    Flashcards
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--text-3)' }}>
                    {flashCards.length} cards · fixação do conteúdo
                  </p>
                </div>
                <ChevronRight size={17} style={{ color: '#A5B4FC' }} />
              </div>
            </button>
          </div>
        )}

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
                    style={{
                      borderRadius: 16, padding: '14px 16px',
                      opacity: concluida ? 0.65 : 1,
                      animationDelay: `${0.25 + i * 0.05}s`,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      {concluida
                        ? <CheckCircle size={18} style={{ color: 'var(--green-true)', flexShrink: 0 }} />
                        : <Circle size={18} style={{ color: 'var(--text-3)', flexShrink: 0 }} />
                      }
                      <span className="text-xl flex-shrink-0">{TIPOS_EMOJI[micro.tipo]}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--text-3)' }}>
                          {DIAS_LABEL[micro.diaDaSemana]}
                        </p>
                        <p className="text-sm font-bold" style={{ color: 'var(--text-1)' }}>
                          {TIPOS_LABEL[micro.tipo]}
                        </p>
                      </div>
                      <span className={`pill ${concluida ? 'pill-green' : ''} flex-shrink-0`}>
                        +{micro.xpRecompensa} XP
                      </span>
                      <ChevronRight size={14} style={{ color: 'var(--text-3)', flexShrink: 0 }} />
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>

      {/* Modal de flashcards */}
      {flashcardsAberto && (
        <FlashcardsModal
          cards={flashCards}
          onClose={() => setFlashcardsAberto(false)}
        />
      )}
    </div>
  )
}
