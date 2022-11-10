export interface Pedido {
  pedidoNo: number;
  titulo: string;
  descricao: string;
  prioridade: 'Baixa' | 'Alta';
  tipo: 'Funcionalidade' | 'Erro' | 'Documentação';
  resolvido?: Date;
}
