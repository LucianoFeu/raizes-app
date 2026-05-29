import { useParams, useNavigate } from 'react-router-dom'
import { useProgressoStore } from '../store/progressoStore'
import { PageHeader } from '../components/layout/PageHeader'
import { VersiculoDia } from '../components/micro/VersiculoDia'
import { QuizMicro } from '../components/micro/QuizMicro'
import { DesafioMicro } from '../components/micro/DesafioMicro'
import { CitacaoMicro } from '../components/micro/CitacaoMicro'
import { RevisaoMicro } from '../components/micro/RevisaoMicro'
import type {
  VersiculoConteudo,
  QuizConteudo,
  DesafioConteudo,
  CitacaoConteudo,
  RevisaoConteudo,
} from '../types'

const TIPOS_TITLE: Record<string, string> = {
  versiculo: '📖 Versículo do Dia',
  quiz: '❓ Quiz',
  desafio: '🎯 Desafio Prático',
  citacao: '💬 Citação Comentada',
  revisao: '📝 Pergunta de Revisão',
}

export function MicroInteracao() {
  const { trilhaId, semanaId, microId } = useParams<{
    trilhaId: string
    semanaId: string
    microId: string
  }>()
  const navigate = useNavigate()
  const trilhasData = useProgressoStore((s) => s.trilhasData)
  const concluirMicroInteracao = useProgressoStore((s) => s.concluirMicroInteracao)
  const getMicroConcluida = useProgressoStore((s) => s.getMicroConcluida)
  const salvarReflexao = useProgressoStore((s) => s.salvarReflexao)

  const trilha = trilhasData.find((t) => t.id === trilhaId)
  const semana = trilha?.semanas.find((s) => s.id === semanaId)
  const micro = semana?.microInteracoes.find((m) => m.id === microId)

  if (!trilha || !semana || !micro) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-stone-400">Atividade não encontrada</p>
      </div>
    )
  }

  const concluida = getMicroConcluida(micro.id)
  const backTo = `/trilha/${trilhaId}/semana/${semanaId}`

  const handleConcluir = (xp?: number) => {
    if (!concluida) {
      concluirMicroInteracao(micro.id, trilhaId!, semanaId!, xp ?? micro.xpRecompensa)
    }
    setTimeout(() => navigate(backTo), 800)
  }

  const handleConcluirRevisao = (resposta: string) => {
    salvarReflexao(semana.id, (micro.conteudo as RevisaoConteudo).pergunta, resposta)
    if (!concluida) {
      concluirMicroInteracao(micro.id, trilhaId!, semanaId!, micro.xpRecompensa)
    }
    setTimeout(() => navigate(backTo), 800)
  }

  const renderMicro = () => {
    switch (micro.tipo) {
      case 'versiculo':
        return (
          <VersiculoDia
            conteudo={micro.conteudo as VersiculoConteudo}
            onConcluir={handleConcluir}
            concluido={concluida}
          />
        )
      case 'quiz':
        return (
          <QuizMicro
            conteudo={micro.conteudo as QuizConteudo}
            onConcluir={(xp) => handleConcluir(xp)}
            concluido={concluida}
          />
        )
      case 'desafio':
        return (
          <DesafioMicro
            conteudo={micro.conteudo as DesafioConteudo}
            onConcluir={handleConcluir}
            concluido={concluida}
          />
        )
      case 'citacao':
        return (
          <CitacaoMicro
            conteudo={micro.conteudo as CitacaoConteudo}
            microId={micro.id}
            onConcluir={handleConcluir}
            concluido={concluida}
          />
        )
      case 'revisao':
        return (
          <RevisaoMicro
            conteudo={micro.conteudo as RevisaoConteudo}
            onConcluir={handleConcluirRevisao}
            concluido={concluida}
          />
        )
      default:
        return <p className="text-stone-400">Tipo de atividade não suportado</p>
    }
  }

  return (
    <div className="flex flex-col min-h-screen pb-8">
      <PageHeader
        title={TIPOS_TITLE[micro.tipo]}
        subtitle={`${semana.tema} · +${micro.xpRecompensa} XP`}
        backTo={backTo}
      />
      <div className="px-4 pt-4 flex flex-col gap-4 max-w-lg mx-auto w-full">
        {renderMicro()}
      </div>
    </div>
  )
}
