import { NavLink } from 'react-router-dom'
import { Home, Map, BookOpen, Award, User } from 'lucide-react'

const links = [
  { to: '/', icon: Home, label: 'Início' },
  { to: '/mapa', icon: Map, label: 'Trilhas' },
  { to: '/diario', icon: BookOpen, label: 'Diário' },
  { to: '/conquistas', icon: Award, label: 'Prêmios' },
  { to: '/perfil', icon: User, label: 'Perfil' },
]

export function BottomNav() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40"
      style={{
        background: 'rgba(10,12,17,0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(99,102,241,0.15)',
        paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 8px)',
        boxShadow: '0 -8px 32px rgba(0,0,0,0.4)',
      }}
    >
      <div className="flex items-center justify-around px-2 pt-2 pb-1 max-w-lg mx-auto">
        {links.map(({ to, icon: Icon, label }) => (
          <NavLink key={to} to={to} end={to === '/'} className="flex-1">
            {({ isActive }) => (
              <div className="flex flex-col items-center gap-1">
                <div
                  className="flex items-center justify-center rounded-2xl transition-all duration-250"
                  style={{
                    width: 48, height: 36,
                    background: isActive
                      ? 'linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.2))'
                      : 'transparent',
                    border: isActive ? '1px solid rgba(99,102,241,0.35)' : '1px solid transparent',
                    boxShadow: isActive ? '0 0 16px rgba(99,102,241,0.3)' : 'none',
                  }}
                >
                  <Icon
                    size={20}
                    strokeWidth={isActive ? 2.5 : 1.7}
                    style={{
                      color: isActive ? '#A5B4FC' : 'var(--text-3)',
                      filter: isActive ? 'drop-shadow(0 0 6px rgba(99,102,241,0.7))' : 'none',
                    }}
                  />
                </div>
                <span
                  className="text-[10px] font-bold tracking-wide"
                  style={{ color: isActive ? '#A5B4FC' : 'var(--text-3)' }}
                >
                  {label}
                </span>
              </div>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
