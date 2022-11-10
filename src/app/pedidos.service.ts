import { Injectable } from '@angular/core';
import { Pedido } from './pedido';

@Injectable({
  providedIn: 'root',
})
export class PedidosService {
  constructor() {}
  // private pedidos: Pedido[] = [];

  pedidos: Pedido[] = [
    {
      pedidoNo: 1,
      titulo: 'Big Mac',
      descricao:
        'A sanduíche dupla mais cobiçada no mundo inteiro. Feita com dois suculentos hambúrgueres 100% carne de vaca, queijo fundido, pepino, cebola, alface e um molho irresistível. Uma combinação única.',
      prioridade: 'Alta',
      tipo: 'Funcionalidade',
    },
    {
      pedidoNo: 2,
      titulo: 'Quarterão com Queijo',
      descricao:
        'Um hambúrguer (100% carne bovina), queijo sabor cheddar, picles, cebola, ketchup, mostarda e pão com gergelim.',
      prioridade: 'Alta',
      tipo: 'Funcionalidade',
    },
    {
      pedidoNo: 3,
      titulo: 'Cheddar McMelt',
      descricao:
        'Um hambúrguer (100% carne bovina), molho sabor cheddar, cebola ao molho shoyu e pão escuro com gergelim.',
      prioridade: 'Alta',
      tipo: 'Funcionalidade',
    },
    {
      pedidoNo: 4,
      titulo: 'McNífico Bacon',
      descricao:
        'Um hambúrguer (100% carne bovina), bacon, alface americana, cebola, queijo sabor cheddar, tomate, maionese, ketchup, mostarda e pão com gergelim.',
      prioridade: 'Alta',
      tipo: 'Funcionalidade',
    },
    {
      pedidoNo: 5,
      titulo: 'Duplo Quarterão',
      descricao:
        'Dois hambúrgueres (100% carne bovina), mostarda, ketchup, cebola, queijo sabor cheddar e pão com gergelim.',
      prioridade: 'Alta',
      tipo: 'Funcionalidade',
    },
  ];

  getPedidosPendentes(): Pedido[] {
    return this.pedidos.filter((pedido) => !pedido.resolvido);
  }
}
