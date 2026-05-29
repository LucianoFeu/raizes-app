import { useProgressoStore } from '../store/progressoStore'
import { NIVEIS } from '../types'

export function useXP() {
  const xpTotal = useProgressoStore((s) => s.progresso.xpTotal)
  const nivelIdx = useProgressoStore((s) => s.getNivelAtual())

  const nivel = NIVEIS[nivelIdx]
  const proximoNivel = NIVEIS[nivelIdx + 1]

  const xpNoNivel = xpTotal - nivel.minXP
  const xpParaProximoNivel = proximoNivel ? proximoNivel.minXP - nivel.minXP : 1
  const porcentagem = proximoNivel
    ? Math.min(100, Math.round((xpNoNivel / xpParaProximoNivel) * 100))
    : 100

  return {
    xpTotal,
    nivelNome: nivel.nome,
    nivelIcone: nivel.icone,
    nivelIdx,
    porcentagem,
    xpParaProximoNivel: proximoNivel ? proximoNivel.minXP - xpTotal : 0,
    isMaxNivel: !proximoNivel,
  }
}
