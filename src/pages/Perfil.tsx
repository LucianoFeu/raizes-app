import { useState } from 'react'
import { Edit2, Check } from 'lucide-react'
import { useProgressoStore } from '../store/progressoStore'
import { PageHeader } from '../components/layout/PageHeader'
import { XPDisplay } from '../components/gamificacao/XPDisplay'
import { StreakDisplay } from '../components/gamificacao/StreakDisplay'
import { ProgressBar } from '../components/ui/ProgressBar'
import { formatarData } from '../utils/storage'

export function Perfil() {
  const usuario = useProgressoStore((s) => s.usuario)
  const progresso = useProgressoStore((s) => s.progresso)
  const trilhasData = useProgressoStore((s) => s.trilhasData)
  const setUsuario = useProgressoStore((s) => s.setUsuario)

  const [editando, setEditando] = useState(false)
  const [nomeTemp, setNomeTemp] = useState(usuario?.nome ?? '')

  const stats = [
    { label: 'Lições', valor: progresso.licoesConcluidaas.length, emoji: '📖', accent: '#A5B4FC' },
    { label: 'Reflexões', valor: progresso.reflexoesRespondidas.length, emoji: '🪞', accent: '#A5B4FC' },
    { label: 'Diário', valor: progresso.diarioEntradas.length, emoji: '📝', accent: '#A5B4FC' },
    { label: 'Favoritas', valor: progresso.citacoesFavoritas.length, emoji: '❤️', accent: '#FCD34D' },
    { label: 'Conquistas', valor: progresso.conquistas.length, emoji: '🏆', accent: '#FCD34D' },
    { label: 'Recorde', valor: progresso.streakRecord, emoji: '🔥', accent: '#FCD34D', suffix: 'd' },
  ]

  return (
    <div className="flex flex-col min-h-screen pb-28">
      <PageHeader title="Perfil" />
      <div className="px-4 pt-5 flex flex-col gap-4">
        {/* Avatar card */}
        <div className="card-accent animate-fade-up" style={{ borderRadius: 24, padding: '22px', position: 'relative', overflow: 'hidden' }}>
          <div className="absolute top-0 right-0 w-36 h-36 pointer-events-none" style={{ background: 'radial-gradient(circle at 100% 0%, rgba(139,92,246,0.2), transparent 70%)' }} />
          <div className="relative z-10 flex items-center gap-4">
            <div
              className="w-18 h-18 rounded-3xl flex items-center justify-center text-5xl flex-shrink-0"
              style={{ width: 72, height: 72, background: 'var(--indigo-dim)', border: '1px solid var(--indigo-border)', boxShadow: '0 0 20px var(--indigo-glow)' }}
            >🌱</div>
            <div className="flex-1 min-w-0">
              {editando ? (
                <div className="flex items-center gap-2">
                  <input value={nomeTemp} onChange={(e) => setNomeTemp(e.target.value)}
                    className="input-base flex-1 px-3 py-2 text-base" style={{ borderRadius: 12 }}
                    autoFocus maxLength={30}
                    onKeyDown={(e) => { if (e.key === 'Enter' && nomeTemp.trim().length >= 2) { setUsuario(nomeTemp.trim()); setEditando(false) } }} />
                  <button onClick={() => { if (nomeTemp.trim().length >= 2) { setUsuario(nomeTemp.trim()); setEditando(false) } }}
                    className="w-9 h-9 flex items-center justify-center rounded-xl btn-gradient font-bold">
                    <Check size={16} />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-black tracking-tight truncate" style={{ color: 'var(--text-1)', letterSpacing: '-0.03em' }}>
                    {usuario?.nome}
                  </h2>
                  <button onClick={() => { setEditando(true); setNomeTemp(usuario?.nome ?? '') }}>
                    <Edit2 size={14} style={{ color: 'var(--text-3)' }} />
                  </button>
                </div>
              )}
              <p className="text-xs mt-0.5" style={{ color: 'var(--text-3)' }}>
                {usuario?.criadoEm ? `Desde ${formatarData(usuario.criadoEm)}` : 'Novo usuário'}
              </p>
            </div>
          </div>
        </div>

        {/* XP + Streak */}
        <div className="grid grid-cols-2 gap-3 animate-fade-up d-100">
          <XPDisplay />
          <StreakDisplay />
        </div>

        {/* Stats */}
        <div className="animate-fade-up d-200">
          <p className="section-label">Estatísticas</p>
          <div className="grid grid-cols-3 gap-2.5">
            {stats.map(({ label, valor, emoji, accent, suffix }, i) => (
              <div key={label} className="card animate-scale-in text-center" style={{ padding: '16px 10px', borderRadius: 18, animationDelay: `${0.2 + i * 0.05}s` }}>
                <p className="text-2xl mb-1.5">{emoji}</p>
                <p className="text-2xl font-black tracking-tight" style={{ color: accent, letterSpacing: '-0.04em' }}>
                  {valor}{suffix ?? ''}
                </p>
                <p className="text-[10px] mt-0.5 leading-tight" style={{ color: 'var(--text-3)' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trilhas */}
        <div className="animate-fade-up d-300">
          <p className="section-label">Trilhas</p>
          <div className="flex flex-col gap-2.5">
            {trilhasData.map((trilha) => {
              const done = trilha.semanas.filter((s) => progresso.licoesConcluidaas.includes(s.licaoCompleta.id)).length
              const total = trilha.semanas.length
              return (
                <div key={trilha.id} className="card" style={{ borderRadius: 16, opacity: trilha.desbloqueada ? 1 : 0.35 }}>
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="text-xl">{trilha.icone}</span>
                    <p className="text-sm font-bold flex-1" style={{ color: 'var(--text-1)' }}>{trilha.titulo}</p>
                    <p className="text-xs font-black" style={{ color: '#A5B4FC' }}>{done}/{total}</p>
                  </div>
                  <ProgressBar value={done} max={total} color="indigo" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
