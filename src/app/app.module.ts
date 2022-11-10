import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PedidoListComponent } from './pedido-list/pedido-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, PedidoListComponent],
  imports: [BrowserModule, ClarityModule, BrowserAnimationsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
