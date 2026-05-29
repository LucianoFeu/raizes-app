import { useState } from 'react'
import { CheckCircle, Lightbulb } from 'lucide-react'
import type { RevisaoConteudo } from '../../types'
import { Button } from '../ui/Button'

type Props = { conteudo: RevisaoConteudo; onConcluir: (r: string) => void; concluido?: boolean }
const MIN = 50

export function RevisaoMicro({ conteudo, onConcluir, concluido }: Props) {
  const [resposta, setResposta] = useState('')
  const [enviado, setEnviado] = useState(concluido ?? false)
  const [dica, setDica] = useState(false)

  if (enviado || concluido) {
    return (
      <div className="flex flex-col gap-3 animate-scale-in">
        <div className="flex items-center justify-center gap-2 p-4 rounded-2xl"
          style={{ background: 'var(--green-dim)', border: '1px solid rgba(74,222,128,0.2)' }}>
          <CheckCircle size={18} style={{ color: 'var(--green)' }} />
          <span className="text-sm font-bold" style={{ color: 'var(--green)' }}>Revisão concluída! +10 XP</span>
        </div>
        {resposta && (
          <div className="card" style={{ borderRadius: 16 }}>
            <p className="text-xs font-semibold mb-1" style={{ color: 'var(--text-3)' }}>Sua resposta</p>
            <p className="text-sm italic" style={{ color: 'var(--text-2)' }}>"{resposta}"</p>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4 animate-fade-up">
      <div className="card-blue" style={{ borderRadius: 18 }}>
        <p className="text-sm font-semibold italic leading-snug" style={{ color: 'var(--text-1)' }}>"{conteudo.pergunta}"</p>
      </div>
      {dica && (
        <div className="p-3 rounded-2xl animate-scale-in"
          style={{ background: 'var(--blue-dim)', border: '1px solid var(--blue-border)' }}>
          <div className="flex items-start gap-2">
            <Lightbulb size={14} style={{ color: 'var(--blue)', flexShrink: 0, marginTop: 2 }} />
            <p className="text-sm leading-relaxed" style={{ color: 'var(--blue)' }}>{conteudo.dica}</p>
          </div>
        </div>
      )}
      <div>
        <div className="flex justify-between items-center mb-2">
          <p className="text-xs font-bold uppercase tracking-wide" style={{ color: 'var(--text-3)' }}>Sua resposta</p>
          <button onClick={() => setDica(!dica)} className="text-xs font-semibold" style={{ color: 'var(--blue)' }}>
            {dica ? 'Ocultar dica' : '💡 Dica'}
          </button>
        </div>
        <textarea
          value={resposta}
          onChange={(e) => setResposta(e.target.value)}
          placeholder="Escreva sua reflexão (mínimo 50 caracteres)..."
          className="input-base w-full px-4 py-3 text-sm resize-none"
          rows={5}
          style={{ borderRadius: 14 }}
        />
        <p className="text-xs font-semibold mt-1.5"
          style={{ color: resposta.length >= MIN ? 'var(--green)' : 'var(--text-3)' }}>
          {resposta.length}/{MIN} mínimo
        </p>
      </div>
      <Button variant="primary" disabled={resposta.trim().length < MIN} fullWidth
        onClick={() => { setEnviado(true); onConcluir(resposta) }}>
        Enviar revisão (+10 XP)
      </Button>
    </div>
  )
}
