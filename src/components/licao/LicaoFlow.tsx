import { useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import type { LicaoCompleta, Semana, Trilha } from '../../types'
import { useProgressoStore } from '../../store/progressoStore'
import { Button } from '../ui/Button'
import { ProgressBar } from '../ui/ProgressBar'

function Bloco({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 animate-fade-up">
      <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--text-3)' }}>{label}</p>
      {children}
    </div>
  )
}

function TelaGancho({ licao }: { licao: LicaoCompleta }) {
  return (
    <Bloco label="Para começar">
      <div className="card-accent" style={{ padding: '28px 24px', borderRadius: 24, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.2), transparent 65%)' }} />
        <div className="relative z-10">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-5"
            style={{ background: 'var(--indigo-dim)', border: '1px solid var(--indigo-border)' }}
          >🤔</div>
          <p className="font-playfair text-xl italic leading-snug" style={{ color: 'var(--text-1)' }}>"{licao.gancho}"</p>
          <p className="text-xs mt-4" style={{ color: 'var(--text-3)' }}>Reflita antes de continuar</p>
        </div>
      </div>
    </Bloco>
  )
}

function TelaTextoBiblico({ licao }: { licao: LicaoCompleta }) {
  const { textoBiblicoPrincipal: tb } = licao
  const renderDestaque = (texto: string, palavras: string[]) => {
    if (!palavras.length) return <span>{texto}</span>
    const partes = texto.split(new RegExp(`(${palavras.join('|')})`, 'gi'))
    return partes.map((p, i) =>
      palavras.some((pk) => pk.toLowerCase() === p.toLowerCase())
        ? <span key={i} style={{ color: 'var(--blue)', fontWeight: 700 }}>{p}</span>
        : <span key={i}>{p}</span>
    )
  }
  return (
    <Bloco label="Texto bíblico">
      <div className="card" style={{ padding: '20px', borderRadius: 20 }}>
        <div className="flex items-center justify-between mb-3">
          <span className="pill pill-blue">{tb.referencia}</span>
          <span className="text-xs" style={{ color: 'var(--text-3)' }}>{tb.versao}</span>
        </div>
        <div style={{ borderLeft: '2px solid var(--blue)', paddingLeft: 16 }}>
          <p className="font-playfair text-xl italic leading-relaxed" style={{ color: 'var(--text-1)' }}>
            "{renderDestaque(tb.texto, tb.palavrasChave)}"
          </p>
        </div>
      </div>
      {licao.textosBiblicosApoio.map((t, i) => (
        <div key={i} className="card-2 rounded-2xl p-4" style={{ background: 'var(--bg-card2)' }}>
          <p className="text-xs font-bold mb-1" style={{ color: 'var(--blue)' }}>{t.referencia}</p>
          <p className="text-sm italic" style={{ color: 'var(--text-2)' }}>"{t.texto}"</p>
        </div>
      ))}
    </Bloco>
  )
}

function TelaContexto({ licao }: { licao: LicaoCompleta }) {
  return (
    <Bloco label="Contexto histórico">
      <div className="card" style={{ borderRadius: 20 }}>
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4"
          style={{ background: 'var(--bg-card2)' }}
        >🏛️</div>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>{licao.contextoHistorico}</p>
      </div>
    </Bloco>
  )
}

function TelaPalavraOriginal({ licao }: { licao: LicaoCompleta }) {
  const p = licao.palavraOriginal
  return (
    <Bloco label="Palavra no original">
      <div className="card" style={{ borderRadius: 20 }}>
        <p className="text-3xl font-bold text-center mb-2 font-playfair" style={{ color: 'var(--blue)' }}>{p.palavra}</p>
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="pill">{p.idioma === 'grego' ? '🇬🇷 Grego' : '🇮🇱 Hebraico'}</span>
          <span className="pill">{p.pronuncia}</span>
        </div>
        <p className="text-sm font-semibold text-center mb-3" style={{ color: 'var(--text-1)' }}>{p.significado}</p>
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 12, marginTop: 4 }}>
          <p className="text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: 'var(--text-3)' }}>Por que importa</p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>{p.relevancia}</p>
        </div>
      </div>
    </Bloco>
  )
}

function TelaExplicacao({ licao }: { licao: LicaoCompleta }) {
  const paragrafos = licao.explicacaoDoutrina.split('\n\n').filter(Boolean)
  return (
    <Bloco label="Entendendo a doutrina">
      <div className="flex flex-col gap-3">
        {paragrafos.map((p, i) => (
          <div key={i} className="card-2 rounded-2xl p-4" style={{ background: 'var(--bg-card2)' }}>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>{p}</p>
          </div>
        ))}
      </div>
    </Bloco>
  )
}

function TelaCitacaoAutor({ licao }: { licao: LicaoCompleta }) {
  const c = licao.citacaoAutor
  return (
    <Bloco label="Voz do autor">
      <div className="card" style={{ borderRadius: 20 }}>
        <p className="text-4xl mb-3 leading-none" style={{ color: 'var(--blue)', opacity: 0.3, fontFamily: 'serif' }}>"</p>
        <p className="font-playfair text-lg italic leading-relaxed mb-4" style={{ color: 'var(--text-1)' }}>
          "{c.citacao}"
        </p>
        <p className="text-sm font-bold" style={{ color: 'var(--blue)' }}>— {c.autor}</p>
      </div>
      <div className="card-2 rounded-2xl p-4" style={{ background: 'var(--bg-card2)' }}>
        <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: 'var(--text-3)' }}>Contexto</p>
        <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-2)' }}>{c.contextoAutor}</p>
        <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: 'var(--text-3)' }}>Relevância</p>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>{c.relevanciaParaLicao}</p>
      </div>
    </Bloco>
  )
}

function TelaEvidencia({ licao }: { licao: LicaoCompleta }) {
  const e = licao.evidenciaExterna
  if (!e) return null
  const icones: Record<string, string> = { pesquisa: '🔬', arqueologia: '🏺', psicologia: '🧠', historia: '📜' }
  return (
    <Bloco label="Evidência externa">
      <div className="card-blue" style={{ borderRadius: 20 }}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: 'rgba(176,214,230,0.12)' }}>
            {icones[e.tipo]}
          </div>
          <span className="pill pill-blue">{e.tipo}</span>
        </div>
        <p className="text-base font-bold mb-2" style={{ color: 'var(--text-1)' }}>{e.titulo}</p>
        <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-2)' }}>{e.descricao}</p>
        <p className="text-xs" style={{ color: 'var(--text-3)' }}>Fonte: {e.fonte}</p>
      </div>
    </Bloco>
  )
}

function TelaAplicacao({ licao }: { licao: LicaoCompleta }) {
  return (
    <Bloco label="Aplicação prática">
      <div className="flex flex-col gap-3">
        {licao.aplicacaoPratica.map((a, i) => (
          <div key={i} className="card" style={{ borderRadius: 18 }}>
            <div className="flex items-start gap-3">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center text-sm flex-shrink-0 mt-0.5"
                style={{ background: 'var(--bg-card2)', color: 'var(--blue)', fontWeight: 800 }}
              >{i + 1}</div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>{a}</p>
            </div>
          </div>
        ))}
      </div>
    </Bloco>
  )
}

function TelaReflexao({ licao, resposta, setResposta }: {
  licao: LicaoCompleta; resposta: string; setResposta: (v: string) => void
}) {
  const MIN = 50
  return (
    <Bloco label="Reflexão pessoal">
      <div className="card-blue" style={{ borderRadius: 18 }}>
        <p className="text-sm italic leading-relaxed" style={{ color: 'var(--text-1)' }}>
          "{licao.perguntaReflexao}"
        </p>
      </div>
      <div>
        <textarea
          value={resposta}
          onChange={(e) => setResposta(e.target.value)}
          placeholder="Escreva sua reflexão aqui..."
          className="input-base w-full px-4 py-3 text-sm resize-none"
          rows={6}
          style={{ borderRadius: 14 }}
        />
        <div className="flex justify-between mt-1.5">
          <p className="text-xs font-semibold" style={{ color: resposta.length >= MIN ? 'var(--green)' : 'var(--text-3)' }}>
            {resposta.length}/{MIN} mínimo
          </p>
          {resposta.length >= MIN && <p className="text-xs font-bold" style={{ color: '#F59E0B' }}>+20 XP</p>}
        </div>
      </div>
    </Bloco>
  )
}

function TelaOracao({ licao }: { licao: LicaoCompleta }) {
  const o = licao.oracaoModelo
  const blocos = [
    { label: 'Adoração', texto: o.adoracao, bg: 'var(--blue-dim)', border: 'var(--blue-border)', color: 'var(--blue)' },
    { label: 'Confissão', texto: o.confissao, bg: 'rgba(74,222,128,0.06)', border: 'rgba(74,222,128,0.15)', color: 'var(--green)' },
    { label: 'Pedido', texto: o.pedido, bg: 'rgba(245,158,11,0.07)', border: 'rgba(245,158,11,0.18)', color: '#F59E0B' },
  ]
  return (
    <Bloco label="Modelo de oração">
      <div className="flex flex-col gap-3">
        {blocos.map(({ label, texto, bg, border, color }) => (
          <div key={label} className="p-4 rounded-2xl" style={{ background: bg, border: `1px solid ${border}` }}>
            <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color }}>{label}</p>
            <p className="text-sm italic leading-relaxed" style={{ color: 'var(--text-2)' }}>"{texto}"</p>
          </div>
        ))}
      </div>
      <Button
        variant="secondary"
        fullWidth
        onClick={() => {
          const texto = `Adoração:\n${o.adoracao}\n\nConfissão:\n${o.confissao}\n\nPedido:\n${o.pedido}`
          navigator.clipboard.writeText(texto).catch(() => {})
        }}
      >
        📋 Copiar oração
      </Button>
    </Bloco>
  )
}

// ── Tela FlashCards ──────────────────────────────────────────────────────────
function TelaFlashCards({ licao }: { licao: LicaoCompleta }) {
  const cards = licao.flashCards ?? []
  const [atual, setAtual] = useState(0)
  const [virado, setVirado] = useState(false)
  const [vistos, setVistos] = useState<Set<number>>(new Set())
  const [animKey, setAnimKey] = useState(0)

  const card = cards[atual]
  const totalVistos = vistos.size

  const handleVirar = () => {
    if (!virado) setVistos((prev) => new Set([...prev, atual]))
    setVirado((v) => !v)
  }

  const navegar = (dir: 1 | -1) => {
    const proximo = atual + dir
    if (proximo < 0 || proximo >= cards.length) return
    setVirado(false)
    setAnimKey((k) => k + 1)
    setTimeout(() => setAtual(proximo), 60)
  }

  if (cards.length === 0) return null

  return (
    <div className="flex flex-col gap-5 animate-fade-up">
      {/* Header */}
      <div className="flex items-center justify-between px-1">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--text-3)' }}>
            Flashcards
          </p>
          <p className="text-sm font-bold mt-0.5" style={{ color: 'var(--text-1)' }}>
            Fixação do conteúdo
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="pill" style={{ fontSize: 11 }}>
            {atual + 1}/{cards.length}
          </span>
          {totalVistos === cards.length && (
            <span className="pill pill-green" style={{ fontSize: 11 }}>✓ Todos vistos</span>
          )}
        </div>
      </div>

      {/* Dots de progresso */}
      <div className="flex gap-1.5 justify-center">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => { setVirado(false); setAnimKey((k) => k + 1); setTimeout(() => setAtual(i), 60) }}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === atual ? 20 : 7,
              height: 7,
              background: vistos.has(i)
                ? 'var(--green-true)'
                : i === atual
                  ? '#A5B4FC'
                  : 'rgba(255,255,255,0.1)',
            }}
          />
        ))}
      </div>

      {/* Card com flip */}
      <div className="flip-scene" style={{ minHeight: 280 }} key={animKey}>
        <div
          className={`flip-card-inner animate-card-enter ${virado ? 'flipped' : ''}`}
          onClick={handleVirar}
          style={{ minHeight: 280 }}
        >
          {/* Frente — Pergunta */}
          <div
            className="flip-card-face card-accent rounded-3xl flex flex-col"
            style={{
              minHeight: 280,
              padding: '28px 24px',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              userSelect: 'none',
            }}
          >
            {/* Orb decorativo */}
            <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none" style={{ background: 'radial-gradient(circle at 100% 0%, rgba(139,92,246,0.25), transparent 70%)' }} />
            <div className="absolute bottom-0 left-0 w-24 h-24 pointer-events-none" style={{ background: 'radial-gradient(circle at 0% 100%, rgba(99,102,241,0.15), transparent 70%)' }} />

            <div className="relative z-10 flex flex-col h-full">
              {/* Label topo */}
              <div className="flex items-center gap-2 mb-5">
                <div
                  className="w-7 h-7 rounded-xl flex items-center justify-center text-sm font-black"
                  style={{ background: 'var(--indigo-dim)', border: '1px solid var(--indigo-border)', color: '#A5B4FC' }}
                >
                  ?
                </div>
                <span className="text-xs font-bold" style={{ color: '#A5B4FC' }}>Pergunta</span>
              </div>

              {/* Texto da pergunta */}
              <p className="text-base font-semibold leading-relaxed flex-1" style={{ color: 'var(--text-1)', letterSpacing: '-0.01em' }}>
                {card.pergunta}
              </p>

              {/* Hint */}
              <div className="flex items-center justify-center gap-1.5 mt-5 pt-4" style={{ borderTop: '1px solid rgba(99,102,241,0.15)' }}>
                <span className="text-sm">👆</span>
                <p className="text-xs font-semibold" style={{ color: 'var(--text-3)' }}>
                  {virado ? 'Toque para ver a pergunta' : 'Toque para revelar a resposta'}
                </p>
              </div>
            </div>
          </div>

          {/* Verso — Resposta */}
          <div
            className="flip-card-back rounded-3xl flex flex-col"
            style={{
              minHeight: 280,
              padding: '28px 24px',
              cursor: 'pointer',
              position: 'absolute',
              background: 'linear-gradient(145deg, #071C18, #0C2820)',
              border: '1px solid var(--green-border)',
              boxShadow: '0 4px 24px rgba(52,211,153,0.15)',
              overflow: 'hidden',
              userSelect: 'none',
            }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none" style={{ background: 'radial-gradient(circle at 100% 0%, rgba(52,211,153,0.18), transparent 70%)' }} />

            <div className="relative z-10 flex flex-col h-full">
              {/* Label topo */}
              <div className="flex items-center gap-2 mb-5">
                <div
                  className="w-7 h-7 rounded-xl flex items-center justify-center text-sm"
                  style={{ background: 'var(--green-dim)', border: '1px solid var(--green-border)' }}
                >
                  ✓
                </div>
                <span className="text-xs font-bold" style={{ color: 'var(--green-true)' }}>Resposta</span>
              </div>

              {/* Texto da resposta */}
              <p className="text-base font-semibold leading-relaxed flex-1" style={{ color: 'var(--text-1)', letterSpacing: '-0.01em' }}>
                {card.resposta}
              </p>

              <div className="flex items-center justify-center gap-1.5 mt-5 pt-4" style={{ borderTop: '1px solid rgba(52,211,153,0.12)' }}>
                <span className="text-sm">👆</span>
                <p className="text-xs font-semibold" style={{ color: 'var(--text-3)' }}>Toque para ver a pergunta</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navegação prev/next */}
      <div className="flex gap-3">
        <button
          onClick={() => navegar(-1)}
          disabled={atual === 0}
          className="flex-1 py-3 rounded-2xl font-bold text-sm transition-all disabled:opacity-30"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border)', color: 'var(--text-2)' }}
        >
          ← Anterior
        </button>
        <button
          onClick={() => navegar(1)}
          disabled={atual === cards.length - 1}
          className="flex-1 py-3 rounded-2xl font-bold text-sm transition-all disabled:opacity-30"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border)', color: 'var(--text-2)' }}
        >
          Próximo →
        </button>
      </div>

      {/* Dica de atalho */}
      <p className="text-center text-xs" style={{ color: 'var(--text-3)' }}>
        {totalVistos < cards.length
          ? `Vire os ${cards.length - totalVistos} card${cards.length - totalVistos > 1 ? 's' : ''} restante${cards.length - totalVistos > 1 ? 's' : ''} para continuar`
          : 'Todos os cards revisados! Clique em Continuar.'}
      </p>
    </div>
  )
}

function TelaConclusao({ xpGanho, onVoltar }: { xpGanho: number; onVoltar: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 pt-12 gap-6 animate-fade-up">
      <div className="animate-celebrate text-6xl">🎉</div>
      <div>
        <h2 className="font-playfair text-3xl font-bold mb-2" style={{ color: 'var(--text-1)' }}>Lição concluída!</h2>
        <p className="text-sm" style={{ color: 'var(--text-3)' }}>Você aprendeu, refletiu e orou. Isso é crescimento.</p>
      </div>
      <div className="card w-full max-w-xs text-center" style={{ borderRadius: 20 }}>
        <p className="text-4xl font-black" style={{ color: '#F59E0B', letterSpacing: '-0.04em' }}>+{xpGanho}</p>
        <p className="text-sm mt-1" style={{ color: 'var(--text-3)' }}>XP ganhos</p>
      </div>
      <Button variant="primary" fullWidth size="lg" onClick={onVoltar}>
        Voltar ao início
      </Button>
    </div>
  )
}

// ── Main ─────────────────────────────────────────────────────────────────────
type Props = { trilha: Trilha; semana: Semana }

export function LicaoFlow({ trilha, semana }: Props) {
  const navigate = useNavigate()
  const licao = semana.licaoCompleta
  const concluirLicao = useProgressoStore((s) => s.concluirLicao)
  const salvarReflexao = useProgressoStore((s) => s.salvarReflexao)
  const getLicaoConcluida = useProgressoStore((s) => s.getLicaoConcluida)
  const salvarProgressoLicao = useProgressoStore((s) => s.salvarProgressoLicao)
  const getProgressoLicao = useProgressoStore((s) => s.getProgressoLicao)

  const jaConcluida = getLicaoConcluida(licao.id)
  const [tela, setTela] = useState(() => getProgressoLicao(licao.id))
  const [resposta, setResposta] = useState('')
  const [, setConcluida] = useState(jaConcluida)

  const temEvidencia = !!licao.evidenciaExterna
  const temFlashCards = (licao.flashCards?.length ?? 0) > 0
  const adj = temEvidencia ? 0 : -1

  // Índices fixos de cada tela
  const TELA_APLICACAO  = 7 + adj
  const TELA_REFLEXAO   = 8 + adj
  const TELA_ORACAO     = 9 + adj
  const TELA_FLASH      = 10 + adj                       // só se temFlashCards
  const TELA_CONCLUSAO  = temFlashCards ? 11 + adj : 10 + adj
  const TOTAL           = TELA_CONCLUSAO + 1

  const podeContinuar = tela !== TELA_REFLEXAO || resposta.trim().length >= 50
  const isUltima = tela === TELA_CONCLUSAO

  const handleAvancar = () => {
    if (!podeContinuar) return

    // Salva reflexão ao sair daquela tela
    if (tela === TELA_REFLEXAO && resposta.trim().length >= 50)
      salvarReflexao(semana.id, licao.perguntaReflexao, resposta)

    // Conclui lição ao sair da oração (antes dos flashcards/conclusão)
    if (tela === TELA_ORACAO && !jaConcluida) {
      concluirLicao(licao.id, semana.id, trilha.id)
      setConcluida(true)
    }

    const proxima = Math.min(tela + 1, TELA_CONCLUSAO)
    setTela(proxima)
    salvarProgressoLicao(licao.id, proxima)
  }

  const renderTela = () => {
    if (tela === 0) return <TelaGancho licao={licao} />
    if (tela === 1) return <TelaTextoBiblico licao={licao} />
    if (tela === 2) return <TelaContexto licao={licao} />
    if (tela === 3) return <TelaPalavraOriginal licao={licao} />
    if (tela === 4) return <TelaExplicacao licao={licao} />
    if (tela === 5) return <TelaCitacaoAutor licao={licao} />
    if (temEvidencia && tela === 6) return <TelaEvidencia licao={licao} />
    if (tela === TELA_APLICACAO) return <TelaAplicacao licao={licao} />
    if (tela === TELA_REFLEXAO)  return <TelaReflexao licao={licao} resposta={resposta} setResposta={setResposta} />
    if (tela === TELA_ORACAO)    return <TelaOracao licao={licao} />
    if (tela === TELA_FLASH && temFlashCards) return <TelaFlashCards licao={licao} />
    if (tela === TELA_CONCLUSAO) return <TelaConclusao xpGanho={100 + (resposta.trim().length >= 50 ? 20 : 0)} onVoltar={() => navigate('/')} />
    return null
  }

  return (
    <div className="flex flex-col min-h-screen" style={{ background: 'var(--bg)' }}>
      {!isUltima && (
        <div
          className="flex items-center gap-2 px-4 sticky top-0 z-30"
          style={{
            paddingTop: 'max(env(safe-area-inset-top, 0px), 12px)',
            paddingBottom: 12,
            background: 'rgba(13,15,20,0.9)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(99,102,241,0.12)',
          }}
        >
          <button
            onClick={() => tela === 0 ? navigate(-1) : setTela(t => t - 1)}
            className="w-8 h-8 flex items-center justify-center rounded-xl flex-shrink-0"
            style={{ background: 'var(--bg-card)' }}
          >
            <ChevronLeft size={16} style={{ color: 'var(--text-2)' }} />
          </button>
          <div className="flex-1">
            <ProgressBar value={tela + 1} max={TOTAL} color="indigo" />
          </div>
          <span className="text-xs font-bold tabular-nums" style={{ color: 'var(--text-3)' }}>
            {tela + 1}/{TOTAL}
          </span>
          <button
            onClick={() => { salvarProgressoLicao(licao.id, tela); navigate(-1) }}
            className="w-8 h-8 flex items-center justify-center rounded-xl flex-shrink-0"
            style={{ background: 'var(--bg-card)' }}
          >
            <X size={14} style={{ color: 'var(--text-3)' }} />
          </button>
        </div>
      )}

      <div className="flex-1 overflow-y-auto px-4 py-5">
        <div className="max-w-lg mx-auto">{renderTela()}</div>
      </div>

      {!isUltima && (
        <div
          className="px-4 pt-3"
          style={{
            paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 16px)',
            background: 'rgba(13,15,20,0.9)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderTop: '1px solid rgba(99,102,241,0.12)',
          }}
        >
          <div className="max-w-lg mx-auto">
            <Button variant="primary" fullWidth disabled={!podeContinuar} size="lg" onClick={handleAvancar}>
              {tela === TOTAL - 2 ? 'Concluir lição 🎉' : <><span>Continuar</span><ChevronRight size={17} /></>}
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
