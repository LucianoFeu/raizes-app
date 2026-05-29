import { useProgressoStore } from '../store/progressoStore'

export function useStreak() {
  const streakAtual = useProgressoStore((s) => s.progresso.streakAtual)
  const streakRecord = useProgressoStore((s) => s.progresso.streakRecord)
  const chamasDeGraca = useProgressoStore((s) => s.progresso.chamasDeGraca)
  const ultimaAtividade = useProgressoStore((s) => s.progresso.ultimaAtividade)
  const isStreakEmRisco = useProgressoStore((s) => s.isStreakEmRisco)
  const usarChamaDeGraca = useProgressoStore((s) => s.usarChamaDeGraca)

  const hojeAtivo = (() => {
    if (!ultimaAtividade) return false
    const hoje = new Date()
    const ultima = new Date(ultimaAtividade)
    return (
      hoje.getFullYear() === ultima.getFullYear() &&
      hoje.getMonth() === ultima.getMonth() &&
      hoje.getDate() === ultima.getDate()
    )
  })()

  return {
    streakAtual,
    streakRecord,
    chamasDeGraca,
    hojeAtivo,
    emRisco: isStreakEmRisco(),
    usarChamaDeGraca,
  }
}
