import { ItemReadComponent } from './item/item-read/item-read.component';
import { ItemCreateComponent } from './item/item-create/item-create.component';
import { TabelaComponent } from './tabela-view/tabela/tabela.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: TabelaComponent},
  {path: 'item/create', component: ItemCreateComponent},
  {path: 'item/read/:id', component: ItemReadComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
})
export class AppRoutingModule { }
