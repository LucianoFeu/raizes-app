import { useState } from 'react'
import { PenLine, Search, Trash2, X, BookOpen } from 'lucide-react'
import { useProgressoStore } from '../store/progressoStore'
import { PageHeader } from '../components/layout/PageHeader'
import { Button } from '../components/ui/Button'
import { formatarData } from '../utils/storage'

export function Diario() {
  const entradas = useProgressoStore((s) => s.progresso.diarioEntradas)
  const adicionar = useProgressoStore((s) => s.adicionarEntradaDiario)
  const remover = useProgressoStore((s) => s.removerEntradaDiario)

  const [busca, setBusca] = useState('')
  const [nova, setNova] = useState(false)
  const [novaTexto, setNovaTexto] = useState('')
  const [novaTitulo, setNovaTitulo] = useState('')
  const [confirmando, setConfirmando] = useState<string | null>(null)

  const filtradas = entradas.filter((e) =>
    e.texto.toLowerCase().includes(busca.toLowerCase()) ||
    (e.titulo ?? '').toLowerCase().includes(busca.toLowerCase())
  )

  const handleSalvar = () => {
    if (novaTexto.trim().length < 10) return
    adicionar(novaTexto.trim(), '', novaTitulo.trim())
    setNovaTexto(''); setNovaTitulo(''); setNova(false)
  }

  return (
    <div className="flex flex-col min-h-screen pb-28">
      <PageHeader
        title="Diário"
        subtitle="Suas reflexões e anotações"
        rightElement={
          <button
            onClick={() => setNova(true)}
            className="w-9 h-9 flex items-center justify-center rounded-xl font-bold"
            style={{ background: 'var(--gradient-accent)', color: '#fff' }}
          >
            <PenLine size={16} />
          </button>
        }
      />

      {/* Modal */}
      {nova && (
        <div
          className="fixed inset-0 z-50 flex flex-col justify-end animate-fade-in"
          style={{ background: 'rgba(0,0,0,0.55)' }}
          onClick={(e) => e.target === e.currentTarget && setNova(false)}
        >
          <div
            className="animate-slide-up flex flex-col gap-3 p-5 rounded-t-3xl"
            style={{
              background: '#0F1220',
              border: '1px solid var(--border)',
              borderBottom: 'none',
              paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 20px)',
            }}
          >
            <div className="flex items-center justify-between">
              <p className="text-lg font-bold" style={{ color: 'var(--text-1)' }}>Nova entrada</p>
              <button
                onClick={() => { setNova(false); setNovaTexto(''); setNovaTitulo('') }}
                className="w-8 h-8 flex items-center justify-center rounded-xl"
                style={{ background: 'var(--bg-card)' }}
              >
                <X size={15} style={{ color: 'var(--text-3)' }} />
              </button>
            </div>
            <input
              type="text" placeholder="Título (opcional)"
              value={novaTitulo} onChange={(e) => setNovaTitulo(e.target.value)}
              className="input-base w-full px-4 py-3 text-sm" style={{ borderRadius: 12 }}
            />
            <textarea
              placeholder="O que está no seu coração hoje?"
              value={novaTexto} onChange={(e) => setNovaTexto(e.target.value)}
              className="input-base w-full px-4 py-3 text-sm resize-none"
              rows={7} style={{ borderRadius: 12 }} autoFocus
            />
            <Button variant="primary" disabled={novaTexto.trim().length < 10} fullWidth onClick={handleSalvar}>
              Salvar entrada
            </Button>
          </div>
        </div>
      )}

      <div className="px-4 pt-4 flex flex-col gap-4">
        {/* Busca */}
        <div className="relative animate-fade-up">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-3)' }} />
          <input
            type="text" placeholder="Buscar..."
            value={busca} onChange={(e) => setBusca(e.target.value)}
            className="input-base w-full pl-9 pr-4 py-2.5 text-sm" style={{ borderRadius: 12 }}
          />
        </div>

        {filtradas.length === 0 ? (
          <div className="text-center py-16 animate-fade-in">
            <BookOpen size={36} className="mx-auto mb-3" style={{ color: 'var(--text-3)', opacity: 0.4 }} />
            <p className="text-sm font-semibold" style={{ color: 'var(--text-3)' }}>
              {busca ? 'Nenhuma entrada encontrada' : 'Seu diário está vazio'}
            </p>
            {!busca && (
              <p className="text-xs mt-1" style={{ color: 'var(--text-3)', opacity: 0.6 }}>
                Toque em ✏️ para começar
              </p>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {filtradas.map((e, i) => (
              <div
                key={e.id}
                className="card card-tap rounded-2xl animate-fade-up"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    {e.titulo && (
                      <p className="text-sm font-bold mb-0.5" style={{ color: '#A5B4FC' }}>{e.titulo}</p>
                    )}
                    <p className="text-xs" style={{ color: 'var(--text-3)' }}>{formatarData(e.data)}</p>
                  </div>
                  {confirmando === e.id ? (
                    <div className="flex gap-2">
                      <button onClick={() => { remover(e.id); setConfirmando(null) }}
                        className="text-xs font-bold px-2.5 py-1 rounded-xl"
                        style={{ background: 'rgba(239,68,68,0.12)', color: '#F87171' }}>Apagar</button>
                      <button onClick={() => setConfirmando(null)}
                        className="text-xs px-2.5 py-1 rounded-xl"
                        style={{ background: 'var(--bg-card2)', color: 'var(--text-2)' }}>Não</button>
                    </div>
                  ) : (
                    <button onClick={() => setConfirmando(e.id)} style={{ color: 'var(--text-3)', opacity: 0.6 }}>
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>
                <p className="text-sm leading-relaxed line-clamp-4" style={{ color: 'var(--text-2)' }}>{e.texto}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
