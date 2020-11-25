import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaComponent } from './tabela/tabela.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaComponent,
    TabelaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [
      AppComponent,
      TabelaComponent
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
