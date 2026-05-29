import { useProgressoStore } from '../store/progressoStore'
import { CONQUISTAS_DEFINICOES } from '../types'

export function useConquistas() {
  const conquistasIds = useProgressoStore((s) => s.progresso.conquistas)

  const todas = CONQUISTAS_DEFINICOES.map((c) => ({
    ...c,
    desbloqueada: conquistasIds.includes(c.id),
  }))

  const desbloqueadas = todas.filter((c) => c.desbloqueada)
  const bloqueadas = todas.filter((c) => !c.desbloqueada)

  return { todas, desbloqueadas, bloqueadas }
}
