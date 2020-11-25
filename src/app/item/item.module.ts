import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCreateComponent } from './item-create/item-create.component';
import { ItemReadComponent } from './item-read/item-read.component';



@NgModule({
  declarations: [ItemCreateComponent, ItemReadComponent],
  imports: [
    CommonModule
  ]
})
export class ItemModule { }
