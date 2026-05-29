import { useState } from 'react'
import { CheckCircle, XCircle } from 'lucide-react'
import type { QuizConteudo } from '../../types'
import { Button } from '../ui/Button'
import { useProgressoStore } from '../../store/progressoStore'

type Props = { conteudo: QuizConteudo; onConcluir: (xp: number) => void; concluido?: boolean }

export function QuizMicro({ conteudo, onConcluir, concluido }: Props) {
  const [sel, setSel] = useState<string | null>(null)
  const [respondida, setRespondida] = useState(false)
  const [tentativas, setTentativas] = useState(0)
  const [xp, setXp] = useState(0)
  const registrar = useProgressoStore((s) => s.registrarAcertoQuiz)

  if (concluido) {
    return (
      <div className="flex items-center justify-center gap-2 p-4 rounded-2xl"
        style={{ background: 'var(--green-dim)', border: '1px solid rgba(74,222,128,0.2)' }}>
        <CheckCircle size={18} style={{ color: 'var(--green)' }} />
        <span className="text-sm font-bold" style={{ color: 'var(--green)' }}>Quiz respondido!</span>
      </div>
    )
  }

  const correta = conteudo.opcoes.find((o) => o.correta)
  const selObj = conteudo.opcoes.find((o) => o.id === sel)
  const acertou = respondida && selObj?.correta

  const handleConfirmar = () => {
    if (!sel || respondida) return
    const ok = conteudo.opcoes.find((o) => o.id === sel)?.correta
    const n = tentativas + 1; setTentativas(n)
    if (ok) {
      const ganho = n === 1 ? 10 : 5; setXp(ganho); setRespondida(true); registrar(n === 1)
    } else {
      if (n >= 2) { setRespondida(true); registrar(false) } else setSel(null)
    }
  }

  const getBg = (opcao: typeof conteudo.opcoes[0]) => {
    if (respondida) {
      if (opcao.correta) return { background: 'var(--green-dim)', border: '1px solid rgba(74,222,128,0.3)' }
      if (sel === opcao.id) return { background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)' }
      return { background: 'var(--bg-card)', border: '1px solid var(--border)' }
    }
    if (sel === opcao.id) return { background: 'var(--indigo-dim)', border: '1px solid var(--indigo-border)' }
    return { background: 'var(--bg-card)', border: '1px solid var(--border)' }
  }

  return (
    <div className="flex flex-col gap-4 animate-fade-up">
      <div className="card" style={{ borderRadius: 18 }}>
        <p className="text-base font-bold leading-snug" style={{ color: 'var(--text-1)' }}>{conteudo.pergunta}</p>
        {tentativas === 1 && !respondida && (
          <p className="text-xs font-semibold mt-2" style={{ color: '#FB923C' }}>❌ Incorreto — tente novamente!</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        {conteudo.opcoes.map((opcao) => (
          <button
            key={opcao.id}
            onClick={() => { if (!respondida) setSel(opcao.id) }}
            disabled={respondida}
            className="w-full text-left p-3.5 rounded-2xl flex items-start gap-3 transition-all duration-150 active:scale-[0.99]"
            style={getBg(opcao)}
          >
            <span className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5"
              style={{ background: 'var(--bg-card2)', color: 'var(--text-2)' }}>
              {opcao.id.toUpperCase()}
            </span>
            <span className="flex-1 text-sm leading-snug" style={{ color: 'var(--text-1)' }}>{opcao.texto}</span>
            {respondida && opcao.correta && <CheckCircle size={15} style={{ color: 'var(--green)', flexShrink: 0 }} />}
            {respondida && sel === opcao.id && !opcao.correta && <XCircle size={15} style={{ color: '#F87171', flexShrink: 0 }} />}
          </button>
        ))}
      </div>

      {respondida ? (
        <div className="rounded-2xl p-4 animate-scale-in"
          style={{ background: acertou ? 'var(--green-dim)' : 'rgba(239,68,68,0.08)', border: `1px solid ${acertou ? 'rgba(74,222,128,0.25)' : 'rgba(239,68,68,0.25)'}` }}>
          <p className="text-sm font-bold mb-1" style={{ color: acertou ? 'var(--green)' : '#F87171' }}>
            {acertou ? '✓ Correto!' : '✗ A resposta certa era:'}
          </p>
          {!acertou && <p className="text-sm font-semibold mb-1" style={{ color: 'var(--text-1)' }}>{correta?.texto}</p>}
          <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--text-2)' }}>
            {selObj?.correta ? selObj.explicacao : correta?.explicacao}
          </p>
          <Button variant={acertou ? 'primary' : 'secondary'} fullWidth onClick={() => onConcluir(xp)}>
            {acertou ? `Continuar (+${xp} XP)` : 'Continuar'}
          </Button>
        </div>
      ) : (
        <Button variant="primary" disabled={!sel} fullWidth onClick={handleConfirmar}>
          Confirmar resposta
        </Button>
      )}
    </div>
  )
}
