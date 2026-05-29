import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useProgressoStore } from './store/progressoStore'
import { BottomNav } from './components/layout/BottomNav'
import { Onboarding } from './pages/Onboarding'
import { Home } from './pages/Home'
import { Mapa } from './pages/Mapa'
import { TrilhaDetalhe } from './pages/TrilhaDetalhe'
import { Semana } from './pages/Semana'
import { Licao } from './pages/Licao'
import { MicroInteracao } from './pages/MicroInteracao'
import { Diario } from './pages/Diario'
import { Conquistas } from './pages/Conquistas'
import { Perfil } from './pages/Perfil'

function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation()
  const semNav = pathname.includes('/licao') || pathname.includes('/micro/')
  return (
    <div className="flex flex-col flex-1">
      <main className="flex-1">{children}</main>
      {!semNav && <BottomNav />}
    </div>
  )
}

function AppRoutes() {
  const isOnboardingCompleto = useProgressoStore((s) => s.isOnboardingCompleto())

  if (!isOnboardingCompleto) {
    return (
      <Routes>
        <Route path="*" element={<Onboarding />} />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/mapa" element={<Layout><Mapa /></Layout>} />
      <Route path="/trilha/:trilhaId" element={<Layout><TrilhaDetalhe /></Layout>} />
      <Route path="/trilha/:trilhaId/semana/:semanaId" element={<Layout><Semana /></Layout>} />
      <Route path="/trilha/:trilhaId/semana/:semanaId/licao" element={<Layout><Licao /></Layout>} />
      <Route path="/trilha/:trilhaId/semana/:semanaId/micro/:microId" element={<Layout><MicroInteracao /></Layout>} />
      <Route path="/diario" element={<Layout><Diario /></Layout>} />
      <Route path="/conquistas" element={<Layout><Conquistas /></Layout>} />
      <Route path="/perfil" element={<Layout><Perfil /></Layout>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
