export function formatarData(isoString: string): string {
  if (!isoString) return ''
  const d = new Date(isoString)
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })
}

export function saudacaoHorario(): string {
  const hora = new Date().getHours()
  if (hora < 12) return 'Bom dia'
  if (hora < 18) return 'Boa tarde'
  return 'Boa noite'
}

export function gerarId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
}

export function truncar(texto: string, maxLength: number): string {
  if (texto.length <= maxLength) return texto
  return texto.slice(0, maxLength) + '...'
}
