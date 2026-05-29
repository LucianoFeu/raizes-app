import { useState } from 'react'
import { Heart, CheckCircle } from 'lucide-react'
import type { CitacaoConteudo } from '../../types'
import { Button } from '../ui/Button'
import { useProgressoStore } from '../../store/progressoStore'

type Props = { conteudo: CitacaoConteudo; microId: string; onConcluir: () => void; concluido?: boolean }

export function CitacaoMicro({ conteudo, microId, onConcluir, concluido }: Props) {
  const toggle = useProgressoStore((s) => s.toggleCitacaoFavorita)
  const fav = useProgressoStore((s) => s.isCitacaoFavorita(microId))
  const [marcado, setMarcado] = useState(concluido ?? false)

  return (
    <div className="flex flex-col gap-4 animate-fade-up">
      <div className="card" style={{ borderRadius: 20 }}>
        <p className="text-4xl mb-3 leading-none font-playfair" style={{ color: 'var(--blue)', opacity: 0.25 }}>"</p>
        <p className="font-playfair text-lg italic leading-relaxed mb-4" style={{ color: 'var(--text-1)' }}>
          "{conteudo.citacao}"
        </p>
        <div className="flex items-center justify-between" style={{ borderTop: '1px solid var(--border)', paddingTop: 12 }}>
          <div>
            <p className="text-sm font-bold" style={{ color: 'var(--blue)' }}>— {conteudo.autor}</p>
            <p className="text-xs mt-0.5 line-clamp-1" style={{ color: 'var(--text-3)' }}>{conteudo.contextoAutor}</p>
          </div>
          <button
            onClick={() => toggle(microId)}
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-all"
            style={{ background: fav ? 'rgba(239,68,68,0.1)' : 'var(--bg-card2)' }}
          >
            <Heart size={16} style={{ color: fav ? '#F87171' : 'var(--text-3)' }} fill={fav ? '#F87171' : 'none'} />
          </button>
        </div>
      </div>
      <div className="card" style={{ borderRadius: 18 }}>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>{conteudo.comentario}</p>
      </div>
      {(marcado || concluido) ? (
        <div className="flex items-center justify-center gap-2 p-4 rounded-2xl animate-scale-in"
          style={{ background: 'var(--green-dim)', border: '1px solid rgba(74,222,128,0.2)' }}>
          <CheckCircle size={18} style={{ color: 'var(--green)' }} />
          <span className="text-sm font-bold" style={{ color: 'var(--green)' }}>Citação lida!</span>
        </div>
      ) : (
        <Button variant="primary" fullWidth onClick={() => { setMarcado(true); onConcluir() }}>
          ✓ Li e refleti (+10 XP)
        </Button>
      )}
    </div>
  )
}
