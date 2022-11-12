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
  public pedidosResolvidos: Pedido[] = [];

  public isEdit: string = 'ADICIONAR PEDIDO';
  public isShowAlert: boolean = false;
  public alertText: string = '';

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

  private getPedidos() {
    this.pedidos = this.pedidoService.getPedidosPendentes();
  }

  private limpaCampos() {
    this.novoPedido.descricao = '';
    this.novoPedido.prioridade = 'Baixa';
    this.novoPedido.tipo = 'Funcionalidade';
    this.novoPedido.titulo = '';
  }

  //Add pedido
  salvarPedido() {
    //EDITA PEDIDO
    if (this.isEdit == 'EDITAR PEDIDO') {
      this.pedidoService.pedidos[
        this.pedidoService.pedidos.findIndex(
          (e) => e.pedidoNo == this.novoPedido.pedidoNo
        )
      ] = { ...this.novoPedido };
      this.novoPedido.pedidoNo = this.novoPedido.pedidoNo += 1;
      this.alertText = 'editado';
      this.showAlert();
    } else {
      //SALVA NOVO PEDIDO
      this.pedidoService.pedidos.push({ ...this.novoPedido });

      this.novoPedido.pedidoNo += 1;
      this.alertText = 'adicionado';
      this.showAlert();
    }
    this.isEdit = 'ADICIONAR PEDIDO';
    this.getPedidos();
    this.limpaCampos();
  }

  //Excluir
  excluiPedido(id: number) {
    this.pedidoService.pedidos.splice(
      this.pedidoService.pedidos.findIndex((e) => e.pedidoNo == id),
      1
    );
    this.alertText = 'excluido';
    this.showAlert();
    this.getPedidos();
  }

  editarPedido(pedido: Pedido) {
    this.isEdit = 'EDITAR PEDIDO';
    this.novoPedido.pedidoNo = pedido.pedidoNo;
    this.novoPedido.descricao = pedido.descricao;
    this.novoPedido.prioridade = pedido.prioridade;
    this.novoPedido.tipo = pedido.tipo;
    this.novoPedido.titulo = pedido.titulo;
  }

  showAlert(): void {
    this.isShowAlert = true;
    setTimeout(() => {
      this.isShowAlert = false;
    }, 1500);
  }
}
