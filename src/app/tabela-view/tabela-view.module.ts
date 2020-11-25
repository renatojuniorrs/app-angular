import { Router, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaComponent } from './tabela/tabela.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    TabelaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    Router,
    BrowserModule,
    CommonModule
  ],
  exports: [
    
  ]
})
export class TabelaViewModule { }
