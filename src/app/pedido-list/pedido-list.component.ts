import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../pedidos.service';
import { Pedido } from '../pedido';

@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
  styleUrls: ['./pedido-list.component.css'],
})
export class PedidoListComponent implements OnInit {
  constructor(private pedidoService: PedidosService) {}

  public pedidos: Pedido[] = [];

  novoPedido: Pedido = {
    pedidoNo: this.pedidoService.pedidos.length + 1,
    titulo: '',
    descricao: '',
    prioridade: 'Baixa',
    tipo: 'Funcionalidade',
  };

  ngOnInit(): void {
    this.getPedidos();
  }

  onCloseForm() {
    //this.showFormPedido = false;
    this.getPedidos();
  }

  private getPedidos() {
    this.pedidos = this.pedidoService.getPedidosPendentes();
  }

  //Botoes
  salvarPedido() {
    this.pedidos.push(this.novoPedido);
  }
}
