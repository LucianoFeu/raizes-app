import { useState } from 'react'
import { CheckCircle, Target } from 'lucide-react'
import type { DesafioConteudo } from '../../types'
import { Button } from '../ui/Button'

type Props = { conteudo: DesafioConteudo; onConcluir: () => void; concluido?: boolean }

export function DesafioMicro({ conteudo, onConcluir, concluido }: Props) {
  const [anotacao, setAnotacao] = useState('')
  const [feito, setFeito] = useState(concluido ?? false)

  if (feito || concluido) {
    return (
      <div className="flex flex-col gap-3 animate-scale-in">
        <div className="flex items-center justify-center gap-2 p-4 rounded-2xl"
          style={{ background: 'var(--green-dim)', border: '1px solid rgba(74,222,128,0.2)' }}>
          <CheckCircle size={18} style={{ color: 'var(--green)' }} />
          <span className="text-sm font-bold" style={{ color: 'var(--green)' }}>Desafio concluído!</span>
        </div>
        {anotacao && (
          <div className="card" style={{ borderRadius: 16 }}>
            <p className="text-xs font-semibold mb-1" style={{ color: 'var(--text-3)' }}>Sua anotação</p>
            <p className="text-sm italic" style={{ color: 'var(--text-2)' }}>"{anotacao}"</p>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4 animate-fade-up">
      <div className="card-blue" style={{ borderRadius: 20 }}>
        <div className="flex items-center gap-2 mb-3">
          <Target size={16} style={{ color: 'var(--blue)' }} />
          <span className="text-xs font-bold uppercase tracking-wide" style={{ color: 'var(--blue)' }}>Desafio do Dia</span>
        </div>
        <p className="text-base font-bold mb-2" style={{ color: 'var(--text-1)' }}>{conteudo.descricao}</p>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>{conteudo.instrucao}</p>
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: 'var(--text-3)' }}>
          Anotação (opcional)
        </p>
        <textarea
          value={anotacao}
          onChange={(e) => setAnotacao(e.target.value)}
          placeholder="Escreva o que observou, sentiu ou fez..."
          className="input-base w-full px-4 py-3 text-sm resize-none"
          rows={3}
          style={{ borderRadius: 14 }}
        />
      </div>
      <Button variant="primary" fullWidth onClick={() => { setFeito(true); onConcluir() }}>✓ Fiz isso! (+10 XP)</Button>
    </div>
  )
}
