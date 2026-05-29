import type { Trilha } from '../../types'
import { trilha1 } from './trilha1'

export const trilhasPlaceholder = (id: string, titulo: string, descricao: string, icone: string, numSemanas: number): Trilha => ({
  id,
  titulo,
  descricao,
  icone,
  desbloqueada: false,
  semanas: Array.from({ length: numSemanas }, (_, i) => ({
    id: `${id}-semana-${i + 1}`,
    numero: i + 1,
    tema: 'Em breve',
    nucleoDoutrinario: 'Conteúdo sendo preparado',
    concluida: false,
    licaoCompleta: {
      id: `${id}-licao-${i + 1}`,
      gancho: '',
      textoBiblicoPrincipal: { referencia: '', texto: '', versao: '', palavrasChave: [] },
      textosBiblicosApoio: [],
      contextoHistorico: '',
      palavraOriginal: { palavra: '', idioma: 'grego', pronuncia: '', significado: '', relevancia: '' },
      explicacaoDoutrina: '',
      citacaoAutor: { autor: '', citacao: '', contextoAutor: '', relevanciaParaLicao: '' },
      aplicacaoPratica: [],
      perguntaReflexao: '',
      oracaoModelo: { adoracao: '', confissao: '', pedido: '' },
    },
    microInteracoes: [],
  })),
})

export const todasTrilhas: Trilha[] = [
  trilha1,
  trilhasPlaceholder('trilha-2', 'Quem sou eu?', 'Identidade, propósito e criação à imagem de Deus.', '🪞', 5),
  trilhasPlaceholder('trilha-3', 'O Evangelho', 'Pecado, Cruz, ressurreição e salvação.', '✝️', 5),
  trilhasPlaceholder('trilha-4', 'A Igreja', 'Comunidade, sacramentos e missão.', '⛪', 5),
  trilhasPlaceholder('trilha-5', 'Vida Cristã', 'Oração, ética, sofrimento e esperança.', '🕊️', 5),
]
