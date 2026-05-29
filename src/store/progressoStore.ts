import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { ProgressoUsuario, Usuario, DiarioEntrada, ReflexaoRespondida } from '../types'
import { CONQUISTAS_DEFINICOES } from '../types'
import { todasTrilhas } from '../data/trilhas'

type AppState = {
  usuario: Usuario | null
  progresso: ProgressoUsuario
  trilhasData: typeof todasTrilhas
  quizAcertosConsecutivos: number

  // Auth / onboarding
  setUsuario: (nome: string) => void
  isOnboardingCompleto: () => boolean

  // XP
  adicionarXP: (quantidade: number) => void
  getNivelAtual: () => number

  // Streak
  registrarAtividade: () => void
  usarChamaDeGraca: () => boolean
  isStreakEmRisco: () => boolean

  // Lições
  concluirLicao: (licaoId: string, semanaId: string, trilhaId: string) => void
  getLicaoConcluida: (licaoId: string) => boolean

  // Micro-interações
  concluirMicroInteracao: (microId: string, trilhaId: string, semanaId: string, xp: number) => void
  getMicroConcluida: (microId: string) => boolean

  // Quiz
  registrarAcertoQuiz: (acertouDePrimeira: boolean) => void

  // Reflexões
  salvarReflexao: (semanaId: string, pergunta: string, resposta: string) => void

  // Diário
  adicionarEntradaDiario: (texto: string, licaoId?: string, titulo?: string) => void
  removerEntradaDiario: (id: string) => void

  // Citações
  toggleCitacaoFavorita: (citacaoId: string) => void
  isCitacaoFavorita: (citacaoId: string) => boolean

  // Conquistas
  verificarConquistas: () => string[]

  // Progresso parcial de lição
  progressoLicaoParcial: Record<string, number>
  salvarProgressoLicao: (licaoId: string, tela: number) => void
  getProgressoLicao: (licaoId: string) => number
}

const progressoInicial: ProgressoUsuario = {
  xpTotal: 0,
  streakAtual: 0,
  streakRecord: 0,
  ultimaAtividade: '',
  chamasDeGraca: 1,
  ultimaReposicaoGraca: new Date().toISOString(),
  trilhasDesbloqueadas: ['trilha-1'],
  licoesConcluidaas: [],
  microInteracoesConcluidas: [],
  conquistas: [],
  diarioEntradas: [],
  reflexoesRespondidas: [],
  citacoesFavoritas: [],
}

function getDiferencaDias(data1: string, data2: string): number {
  const d1 = new Date(data1)
  const d2 = new Date(data2)
  d1.setHours(0, 0, 0, 0)
  d2.setHours(0, 0, 0, 0)
  return Math.round(Math.abs(d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24))
}

function getInicioSemana(date: Date): Date {
  const d = new Date(date)
  const day = d.getDay()
  const diff = d.getDate() - day + (day === 0 ? -6 : 1)
  d.setDate(diff)
  d.setHours(0, 0, 0, 0)
  return d
}

export const useProgressoStore = create<AppState>()(
  persist(
    (set, get) => ({
      usuario: null,
      progresso: progressoInicial,
      trilhasData: todasTrilhas,
      quizAcertosConsecutivos: 0,
      progressoLicaoParcial: {},

      setUsuario: (nome) => {
        set({
          usuario: { nome, criadoEm: new Date().toISOString() },
        })
      },

      isOnboardingCompleto: () => !!get().usuario,

      adicionarXP: (quantidade) => {
        set((state) => ({
          progresso: { ...state.progresso, xpTotal: state.progresso.xpTotal + quantidade },
        }))
      },

      getNivelAtual: () => {
        const xp = get().progresso.xpTotal
        if (xp <= 100) return 0
        if (xp <= 300) return 1
        if (xp <= 600) return 2
        if (xp <= 1000) return 3
        if (xp <= 1500) return 4
        return 5
      },

      registrarAtividade: () => {
        const now = new Date()
        const nowStr = now.toISOString()
        const { progresso } = get()
        const ultima = progresso.ultimaAtividade

        let novoStreak = progresso.streakAtual

        if (!ultima) {
          novoStreak = 1
        } else {
          const diff = getDiferencaDias(ultima, nowStr)
          if (diff === 0) {
            // mesmo dia, não altera streak
          } else if (diff === 1) {
            novoStreak = progresso.streakAtual + 1
          } else {
            // quebrou o streak
            novoStreak = 1
          }
        }

        // Reposição da chama de graça toda segunda-feira
        let chamasDeGraca = progresso.chamasDeGraca
        const ultimaReposicao = new Date(progresso.ultimaReposicaoGraca || nowStr)
        const inicioSemanaAtual = getInicioSemana(now)
        const inicioSemanaUltimaReposicao = getInicioSemana(ultimaReposicao)
        let ultimaReposicaoGraca = progresso.ultimaReposicaoGraca
        if (inicioSemanaAtual > inicioSemanaUltimaReposicao) {
          chamasDeGraca = Math.min(progresso.chamasDeGraca + 1, 3)
          ultimaReposicaoGraca = nowStr
        }

        const streakRecord = Math.max(novoStreak, progresso.streakRecord)

        set((state) => ({
          progresso: {
            ...state.progresso,
            streakAtual: novoStreak,
            streakRecord,
            ultimaAtividade: nowStr,
            chamasDeGraca,
            ultimaReposicaoGraca,
          },
        }))

        setTimeout(() => get().verificarConquistas(), 100)
      },

      usarChamaDeGraca: () => {
        const { progresso } = get()
        if (progresso.chamasDeGraca <= 0) return false
        set((state) => ({
          progresso: {
            ...state.progresso,
            chamasDeGraca: state.progresso.chamasDeGraca - 1,
            streakAtual: state.progresso.streakAtual,
            ultimaAtividade: new Date().toISOString(),
          },
        }))
        return true
      },

      isStreakEmRisco: () => {
        const { progresso } = get()
        if (!progresso.ultimaAtividade) return false
        const diff = getDiferencaDias(progresso.ultimaAtividade, new Date().toISOString())
        return diff >= 1
      },

      concluirLicao: (licaoId, semanaId, trilhaId) => {
        const { progresso, trilhasData } = get()
        if (progresso.licoesConcluidaas.includes(licaoId)) return

        const novasLicoes = [...progresso.licoesConcluidaas, licaoId]

        // Atualizar trilhas data localmente
        const novasTrilhas = trilhasData.map((t) => {
          if (t.id !== trilhaId) return t
          return {
            ...t,
            semanas: t.semanas.map((s) => {
              if (s.id !== semanaId) return s
              return { ...s, concluida: true }
            }),
          }
        })

        // Verificar se trilha foi completada para desbloquear próxima
        const trilhaAtual = novasTrilhas.find((t) => t.id === trilhaId)
        const trilhaCompleta = trilhaAtual?.semanas.every((s) =>
          s.id === semanaId ? true : progresso.licoesConcluidaas.includes(s.licaoCompleta.id)
        )

        let trilhasDesbloqueadas = [...progresso.trilhasDesbloqueadas]
        if (trilhaCompleta) {
          const idxAtual = novasTrilhas.findIndex((t) => t.id === trilhaId)
          if (idxAtual < novasTrilhas.length - 1) {
            const proximaTrilhaId = novasTrilhas[idxAtual + 1].id
            if (!trilhasDesbloqueadas.includes(proximaTrilhaId)) {
              trilhasDesbloqueadas.push(proximaTrilhaId)
            }
          }
        }

        set((state) => ({
          progresso: {
            ...state.progresso,
            licoesConcluidaas: novasLicoes,
            xpTotal: state.progresso.xpTotal + 100,
            trilhasDesbloqueadas,
          },
          trilhasData: novasTrilhas,
        }))

        get().registrarAtividade()
        setTimeout(() => get().verificarConquistas(), 100)
      },

      getLicaoConcluida: (licaoId) => get().progresso.licoesConcluidaas.includes(licaoId),

      concluirMicroInteracao: (microId, trilhaId, semanaId, xp) => {
        const { progresso } = get()
        if (progresso.microInteracoesConcluidas.includes(microId)) return

        const novasTrilhas = get().trilhasData.map((t) => {
          if (t.id !== trilhaId) return t
          return {
            ...t,
            semanas: t.semanas.map((s) => {
              if (s.id !== semanaId) return s
              return {
                ...s,
                microInteracoes: s.microInteracoes.map((m) =>
                  m.id === microId ? { ...m, concluida: true } : m
                ),
              }
            }),
          }
        })

        set((state) => ({
          progresso: {
            ...state.progresso,
            microInteracoesConcluidas: [...state.progresso.microInteracoesConcluidas, microId],
            xpTotal: state.progresso.xpTotal + xp,
          },
          trilhasData: novasTrilhas,
        }))

        get().registrarAtividade()
        setTimeout(() => get().verificarConquistas(), 100)
      },

      getMicroConcluida: (microId) => get().progresso.microInteracoesConcluidas.includes(microId),

      registrarAcertoQuiz: (acertouDePrimeira) => {
        if (acertouDePrimeira) {
          set((state) => ({ quizAcertosConsecutivos: state.quizAcertosConsecutivos + 1 }))
        } else {
          set({ quizAcertosConsecutivos: 0 })
        }
        setTimeout(() => get().verificarConquistas(), 100)
      },

      salvarReflexao: (semanaId, pergunta, resposta) => {
        const nova: ReflexaoRespondida = {
          id: `reflexao-${Date.now()}`,
          semanaId,
          pergunta,
          resposta,
          data: new Date().toISOString(),
        }
        set((state) => ({
          progresso: {
            ...state.progresso,
            reflexoesRespondidas: [...state.progresso.reflexoesRespondidas, nova],
            xpTotal: state.progresso.xpTotal + 20,
          },
        }))
        setTimeout(() => get().verificarConquistas(), 100)
      },

      adicionarEntradaDiario: (texto, licaoId = '', titulo = '') => {
        const nova: DiarioEntrada = {
          id: `diario-${Date.now()}`,
          licaoId,
          texto,
          titulo,
          data: new Date().toISOString(),
        }
        set((state) => ({
          progresso: {
            ...state.progresso,
            diarioEntradas: [nova, ...state.progresso.diarioEntradas],
          },
        }))
        setTimeout(() => get().verificarConquistas(), 100)
      },

      removerEntradaDiario: (id) => {
        set((state) => ({
          progresso: {
            ...state.progresso,
            diarioEntradas: state.progresso.diarioEntradas.filter((e) => e.id !== id),
          },
        }))
      },

      toggleCitacaoFavorita: (citacaoId) => {
        const { progresso } = get()
        const favoritas = progresso.citacoesFavoritas.includes(citacaoId)
          ? progresso.citacoesFavoritas.filter((id) => id !== citacaoId)
          : [...progresso.citacoesFavoritas, citacaoId]
        set((state) => ({
          progresso: { ...state.progresso, citacoesFavoritas: favoritas },
        }))
      },

      isCitacaoFavorita: (citacaoId) => get().progresso.citacoesFavoritas.includes(citacaoId),

      verificarConquistas: () => {
        const { progresso, quizAcertosConsecutivos } = get()
        const novasConquistas: string[] = []

        const verificar = (id: string, condicao: boolean) => {
          if (condicao && !progresso.conquistas.includes(id)) {
            novasConquistas.push(id)
          }
        }

        verificar('primeira-pedra', progresso.licoesConcluidaas.length >= 1)
        verificar('coracao-aberto', progresso.reflexoesRespondidas.length >= 5)
        verificar('fogo-vivo', progresso.streakAtual >= 21)
        verificar('persistente', progresso.streakAtual >= 7)
        verificar('construtor', progresso.diarioEntradas.length >= 10)
        verificar('curioso', quizAcertosConsecutivos >= 10)

        // Trilha 1 completa
        const t1 = get().trilhasData.find((t) => t.id === 'trilha-1')
        const t1Completa = t1?.semanas.every((s) => progresso.licoesConcluidaas.includes(s.licaoCompleta.id))
        verificar('raizes-profundas', !!t1Completa)

        // Todas as 25 semanas
        const totalConcluidas = get().trilhasData.flatMap((t) => t.semanas).filter((s) =>
          progresso.licoesConcluidaas.includes(s.licaoCompleta.id)
        ).length
        verificar('estudante-de-bereia', totalConcluidas >= 25)

        // Trilha 3 completa
        const t3 = get().trilhasData.find((t) => t.id === 'trilha-3')
        const t3Completa = t3?.semanas.every((s) => progresso.licoesConcluidaas.includes(s.licaoCompleta.id))
        verificar('nova-criatura', !!t3Completa)

        // 3 lições concluídas (aproximação — sem timestamps por lição)
        verificar('maratonista', progresso.licoesConcluidaas.length >= 3)

        if (novasConquistas.length > 0) {
          const xpBonus = novasConquistas.reduce((acc, id) => {
            const c = CONQUISTAS_DEFINICOES.find((c) => c.id === id)
            return acc + (c?.xpBonus ?? 0)
          }, 0)

          set((state) => ({
            progresso: {
              ...state.progresso,
              conquistas: [...state.progresso.conquistas, ...novasConquistas],
              xpTotal: state.progresso.xpTotal + xpBonus,
            },
          }))
        }

        return novasConquistas
      },

      salvarProgressoLicao: (licaoId, tela) => {
        set((state) => ({
          progressoLicaoParcial: { ...state.progressoLicaoParcial, [licaoId]: tela },
        }))
      },

      getProgressoLicao: (licaoId) => get().progressoLicaoParcial[licaoId] ?? 0,
    }),
    {
      name: 'raizes-app-storage',
      partialize: (state) => ({
        usuario: state.usuario,
        progresso: state.progresso,
        trilhasData: state.trilhasData,
        quizAcertosConsecutivos: state.quizAcertosConsecutivos,
        progressoLicaoParcial: state.progressoLicaoParcial,
      }),
    }
  )
)
