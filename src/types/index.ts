export type TextoBiblico = {
  referencia: string
  texto: string
  versao: string
  palavrasChave: string[]
}

export type PalavraOriginal = {
  palavra: string
  idioma: 'grego' | 'hebraico'
  pronuncia: string
  significado: string
  relevancia: string
}

export type CitacaoAutor = {
  autor: string
  citacao: string
  contextoAutor: string
  relevanciaParaLicao: string
}

export type EvidenciaExterna = {
  tipo: 'pesquisa' | 'arqueologia' | 'psicologia' | 'historia'
  titulo: string
  descricao: string
  fonte: string
}

export type OracaoModelo = {
  adoracao: string
  confissao: string
  pedido: string
}

export type FlashCard = {
  pergunta: string
  resposta: string
}

export type LicaoCompleta = {
  id: string
  gancho: string
  textoBiblicoPrincipal: TextoBiblico
  textosBiblicosApoio: TextoBiblico[]
  contextoHistorico: string
  palavraOriginal: PalavraOriginal
  explicacaoDoutrina: string
  citacaoAutor: CitacaoAutor
  evidenciaExterna?: EvidenciaExterna
  aplicacaoPratica: string[]
  perguntaReflexao: string
  oracaoModelo: OracaoModelo
  flashCards?: FlashCard[]
}

export type QuizOpcao = {
  id: string
  texto: string
  correta: boolean
  explicacao: string
}

export type QuizConteudo = {
  pergunta: string
  opcoes: QuizOpcao[]
}

export type VersiculoConteudo = {
  referencia: string
  texto: string
  versao: string
  reflexao: string
}

export type DesafioConteudo = {
  descricao: string
  instrucao: string
}

export type CitacaoConteudo = {
  autor: string
  citacao: string
  comentario: string
  contextoAutor: string
}

export type RevisaoConteudo = {
  pergunta: string
  dica: string
}

export type MicroInteracao = {
  id: string
  diaDaSemana: 1 | 2 | 3 | 4 | 5
  tipo: 'versiculo' | 'quiz' | 'desafio' | 'citacao' | 'revisao'
  conteudo: QuizConteudo | VersiculoConteudo | DesafioConteudo | CitacaoConteudo | RevisaoConteudo
  concluida: boolean
  xpRecompensa: number
}

export type Semana = {
  id: string
  numero: number
  tema: string
  nucleoDoutrinario: string
  licaoCompleta: LicaoCompleta
  microInteracoes: MicroInteracao[]
  concluida: boolean
}

export type Trilha = {
  id: string
  titulo: string
  descricao: string
  icone: string
  semanas: Semana[]
  desbloqueada: boolean
}

export type DiarioEntrada = {
  id: string
  licaoId: string
  texto: string
  data: string
  titulo?: string
}

export type ReflexaoRespondida = {
  id: string
  semanaId: string
  pergunta: string
  resposta: string
  data: string
}

export type Conquista = {
  id: string
  titulo: string
  descricao: string
  icone: string
  xpBonus: number
  condicao: string
  desbloqueada?: boolean
  dataDesbloqueio?: string
}

export type ProgressoUsuario = {
  xpTotal: number
  streakAtual: number
  streakRecord: number
  ultimaAtividade: string
  chamasDeGraca: number
  ultimaReposicaoGraca: string
  trilhasDesbloqueadas: string[]
  licoesConcluidaas: string[]
  microInteracoesConcluidas: string[]
  conquistas: string[]
  diarioEntradas: DiarioEntrada[]
  reflexoesRespondidas: ReflexaoRespondida[]
  citacoesFavoritas: string[]
}

export type Usuario = {
  nome: string
  criadoEm: string
}

export type NivelInfo = {
  nome: string
  minXP: number
  maxXP: number
  icone: string
}

export const NIVEIS: NivelInfo[] = [
  { nome: 'Semente', minXP: 0, maxXP: 100, icone: '🌱' },
  { nome: 'Broto', minXP: 101, maxXP: 300, icone: '🌿' },
  { nome: 'Raiz', minXP: 301, maxXP: 600, icone: '🌳' },
  { nome: 'Galho', minXP: 601, maxXP: 1000, icone: '🌲' },
  { nome: 'Árvore', minXP: 1001, maxXP: 1500, icone: '🌴' },
  { nome: 'Fruto', minXP: 1501, maxXP: Infinity, icone: '🍎' },
]

export const CONQUISTAS_DEFINICOES: Conquista[] = [
  {
    id: 'primeira-pedra',
    titulo: 'Primeira Pedra',
    descricao: 'Concluiu a Semana 1',
    icone: '🪨',
    xpBonus: 50,
    condicao: 'Conclua a Semana 1 da Trilha 1',
  },
  {
    id: 'coracao-aberto',
    titulo: 'Coração Aberto',
    descricao: 'Escreveu 5 reflexões',
    icone: '❤️',
    xpBonus: 30,
    condicao: 'Escreva 5 reflexões durante as lições',
  },
  {
    id: 'fogo-vivo',
    titulo: 'Fogo Vivo',
    descricao: '21 dias de streak',
    icone: '🔥',
    xpBonus: 100,
    condicao: 'Mantenha 21 dias consecutivos de atividade',
  },
  {
    id: 'estudante-de-bereia',
    titulo: 'Estudante de Bereia',
    descricao: 'Concluiu as 25 semanas',
    icone: '📖',
    xpBonus: 500,
    condicao: 'Conclua todas as 25 semanas do curso',
  },
  {
    id: 'raizes-profundas',
    titulo: 'Raízes Profundas',
    descricao: 'Concluiu a Trilha 1',
    icone: '🌳',
    xpBonus: 150,
    condicao: 'Conclua todas as semanas da Trilha 1',
  },
  {
    id: 'nova-criatura',
    titulo: 'Nova Criatura',
    descricao: 'Concluiu a Trilha 3',
    icone: '🦋',
    xpBonus: 200,
    condicao: 'Conclua todas as semanas da Trilha 3',
  },
  {
    id: 'construtor',
    titulo: 'Construtor',
    descricao: 'Escreveu 10 entradas no diário',
    icone: '📝',
    xpBonus: 60,
    condicao: 'Escreva 10 entradas no diário espiritual',
  },
  {
    id: 'curioso',
    titulo: 'Curioso',
    descricao: 'Acertou 10 quizzes seguidos',
    icone: '🎯',
    xpBonus: 80,
    condicao: 'Acerte 10 quizzes consecutivos na primeira tentativa',
  },
  {
    id: 'persistente',
    titulo: 'Persistente',
    descricao: '7 dias de streak',
    icone: '⭐',
    xpBonus: 50,
    condicao: 'Mantenha 7 dias consecutivos de atividade',
  },
  {
    id: 'maratonista',
    titulo: 'Maratonista',
    descricao: '3 lições em uma semana',
    icone: '🏃',
    xpBonus: 70,
    condicao: 'Conclua 3 lições completas na mesma semana',
  },
]
