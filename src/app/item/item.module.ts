import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCreateComponent } from './item-create/item-create.component';
import { ItemReadComponent } from './item-read/item-read.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ItemCreateComponent, ItemReadComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class ItemModule { }
