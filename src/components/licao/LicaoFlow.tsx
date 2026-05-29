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
  const TOTAL = temEvidencia ? 11 : 10


  const telaReflexao = temEvidencia ? 8 : 7
  const podeContinuar = tela !== telaReflexao || resposta.trim().length >= 50
  const isUltima = tela === TOTAL - 1

  const handleAvancar = () => {
    if (!podeContinuar) return
    if (tela === TOTAL - 2) {
      if (resposta.trim().length >= 50) salvarReflexao(semana.id, licao.perguntaReflexao, resposta)
      if (!jaConcluida) concluirLicao(licao.id, semana.id, trilha.id)
      setConcluida(true)
    }
    const proxima = Math.min(tela + 1, TOTAL - 1)
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
    const a = temEvidencia ? 0 : -1
    if (tela === 7 + a) return <TelaAplicacao licao={licao} />
    if (tela === 8 + a) return <TelaReflexao licao={licao} resposta={resposta} setResposta={setResposta} />
    if (tela === 9 + a) return <TelaOracao licao={licao} />
    if (tela === 10 + a) return <TelaConclusao xpGanho={100 + (resposta.trim().length >= 50 ? 20 : 0)} onVoltar={() => navigate('/')} />
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
