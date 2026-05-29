import { useParams } from 'react-router-dom'
import { useProgressoStore } from '../store/progressoStore'
import { LicaoFlow } from '../components/licao/LicaoFlow'

export function Licao() {
  const { trilhaId, semanaId } = useParams<{ trilhaId: string; semanaId: string }>()
  const trilhasData = useProgressoStore((s) => s.trilhasData)

  const trilha = trilhasData.find((t) => t.id === trilhaId)
  const semana = trilha?.semanas.find((s) => s.id === semanaId)

  if (!trilha || !semana) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-stone-400">Lição não encontrada</p>
      </div>
    )
  }

  return <LicaoFlow trilha={trilha} semana={semana} />
}
