import { Router, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCreateComponent } from './item-create/item-create.component';
import { ItemReadComponent } from './item-read/item-read.component';
import { ItensComponent } from './itens/itens.component';



@NgModule({
  declarations: [ItemCreateComponent, ItemReadComponent, ItensComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class ItemModule { }
