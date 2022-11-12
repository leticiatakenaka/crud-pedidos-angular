import { Injectable } from '@angular/core';
import { Pedido } from './pedido';

@Injectable({
  providedIn: 'root',
})
export class PedidosService {
  constructor() {}

  pedidos: Pedido[] = [];

  getPedidosPendentes(): Pedido[] {
    return this.pedidos.filter((pedido) => !pedido.resolvido);
  }
}
