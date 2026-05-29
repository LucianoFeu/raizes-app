import { useState, useEffect } from 'react'
import { CheckCircle } from 'lucide-react'
import type { VersiculoConteudo } from '../../types'
import { Button } from '../ui/Button'

type Props = { conteudo: VersiculoConteudo; onConcluir: () => void; concluido?: boolean }

export function VersiculoDia({ conteudo, onConcluir, concluido }: Props) {
  const [segundos, setSegundos] = useState(30)
  const [pronto, setPronto] = useState(concluido ?? false)

  useEffect(() => {
    if (pronto || concluido) return
    const t = setInterval(() => setSegundos((s) => { if (s <= 1) { clearInterval(t); setPronto(true); return 0 } return s - 1 }), 1000)
    return () => clearInterval(t)
  }, [pronto, concluido])

  return (
    <div className="flex flex-col gap-4 animate-fade-up">
      <div className="card" style={{ borderRadius: 20 }}>
        <div className="flex items-center justify-between mb-3">
          <span className="pill">{conteudo.referencia}</span>
          <span className="text-xs" style={{ color: 'var(--text-3)' }}>{conteudo.versao}</span>
        </div>
        <div style={{ borderLeft: '2px solid var(--indigo)', paddingLeft: 14 }}>
          <p className="font-playfair text-xl italic leading-relaxed" style={{ color: 'var(--text-1)' }}>
            "{conteudo.texto}"
          </p>
        </div>
      </div>

      <div className="card" style={{ borderRadius: 18 }}>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>{conteudo.reflexao}</p>
      </div>

      {concluido ? (
        <div className="flex items-center justify-center gap-2 p-4 rounded-2xl"
          style={{ background: 'var(--green-dim)', border: '1px solid rgba(74,222,128,0.2)' }}>
          <CheckCircle size={18} style={{ color: 'var(--green)' }} />
          <span className="text-sm font-bold" style={{ color: 'var(--green)' }}>Versículo meditado!</span>
        </div>
      ) : pronto ? (
        <Button variant="primary" fullWidth onClick={onConcluir}>✓ Marcar como meditado (+10 XP)</Button>
      ) : (
        <div className="flex items-center justify-center gap-3 p-3 rounded-2xl" style={{ background: 'var(--bg-card)' }}>
          <div className="relative w-8 h-8">
            <svg className="w-8 h-8 -rotate-90" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="13" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="3" />
              <circle cx="16" cy="16" r="13" fill="none" stroke="var(--indigo)" strokeWidth="3" strokeLinecap="round"
                strokeDasharray={`${(1 - segundos / 30) * 81.7} 81.7`} style={{ transition: 'stroke-dasharray 1s linear' }} />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold" style={{ color: 'var(--indigo)' }}>{segundos}</span>
          </div>
          <span className="text-sm" style={{ color: 'var(--text-3)' }}>Medite por {segundos}s...</span>
        </div>
      )}
    </div>
  )
}
