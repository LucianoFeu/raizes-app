import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { useProgressoStore } from '../store/progressoStore'
import { Button } from '../components/ui/Button'

const slides = [
  { emoji: '📖', titulo: 'Aprenda a Bíblia do zero', descricao: 'Conteúdo profundo com contexto histórico, línguas originais e aplicação real. Sem enrolação.' },
  { emoji: '🔥', titulo: 'Uma dose por dia', descricao: 'Micro-atividades de 5 minutos de segunda a sexta. Versículos, quizzes, desafios e citações.' },
  { emoji: '🏆', titulo: 'Cresça e seja recompensado', descricao: 'Ganhe XP, mantenha seu streak e desbloqueie conquistas na sua jornada de fé.' },
]

export function Onboarding() {
  const [slide, setSlide] = useState(0)
  const [etapa, setEtapa] = useState<'slides' | 'nome'>('slides')
  const [nome, setNome] = useState('')
  const setUsuario = useProgressoStore((s) => s.setUsuario)

  if (etapa === 'nome') {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center px-6 py-12 mesh-header"
      >
        <div className="w-full max-w-sm animate-fade-up">
          {/* Logo mark */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-3xl flex items-center justify-center text-5xl card-accent animate-glow">
              🌱
            </div>
          </div>
          <h1 className="text-3xl font-black text-center mb-1 tracking-tight" style={{ color: 'var(--text-1)' }}>
            Quase lá!
          </h1>
          <p className="text-center mb-8 text-sm" style={{ color: 'var(--text-3)' }}>Como você quer ser chamado?</p>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome ou apelido"
            className="input-base w-full px-4 py-4 text-base mb-4"
            maxLength={30}
            autoFocus
            onKeyDown={(e) => e.key === 'Enter' && nome.trim().length >= 2 && setUsuario(nome.trim())}
          />
          <Button
            variant="primary"
            fullWidth
            size="lg"
            disabled={nome.trim().length < 2}
            onClick={() => setUsuario(nome.trim())}
          >
            Começar minha jornada ✨
          </Button>
        </div>
      </div>
    )
  }

  const s = slides[slide]

  return (
    <div className="min-h-screen flex flex-col mesh-header">
      {/* Logo */}
      <div className="px-6 pt-16 pb-8 animate-fade-in">
        <h1 className="font-playfair text-6xl font-bold tracking-tight text-gradient">
          Raízes
        </h1>
        <p className="text-sm mt-2" style={{ color: 'var(--text-3)' }}>Sua jornada na fé começa aqui</p>
      </div>

      {/* Slide */}
      <div className="flex-1 flex flex-col px-5" key={slide}>
        <div className="card-accent p-8 mb-8 animate-scale-in flex-1 flex flex-col justify-center" style={{ borderRadius: 28, position: 'relative', overflow: 'hidden' }}>
          {/* Glow decoration */}
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.2), transparent 70%)', transform: 'translate(30%,-30%)' }} />
          <div className="relative z-10">
            <div className="w-20 h-20 rounded-3xl flex items-center justify-center text-5xl mb-8 card" style={{ background: 'rgba(99,102,241,0.12)' }}>
              {s.emoji}
            </div>
            <h2 className="text-2xl font-black mb-4 tracking-tight" style={{ color: 'var(--text-1)', letterSpacing: '-0.025em' }}>
              {s.titulo}
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-2)' }}>{s.descricao}</p>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === slide ? 28 : 8, height: 8,
                background: i === slide ? 'var(--gradient-accent)' : 'rgba(255,255,255,0.12)',
              }}
            />
          ))}
        </div>

        <Button
          variant="primary"
          fullWidth
          size="lg"
          className="mb-8"
          onClick={() => slide < slides.length - 1 ? setSlide(slide + 1) : setEtapa('nome')}
        >
          {slide < slides.length - 1
            ? <><span>Próximo</span><ChevronRight size={18} /></>
            : 'Vamos começar!'
          }
        </Button>
      </div>
    </div>
  )
}
