import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  itens:object[] = [

  ];
  constructor(
      private router: Router,
      private http: HttpClient,
  ) { }

  ngOnInit(): void {
      this.http.get('http://api.levande.com.br/static/list.json')
      .subscribe(dados => {
          console.log(dados);
          if(dados.StatusCode == 200 && dados.data.length){ // Erro ao compilar, mas funciona! :/
              dados.data.forEach(value=>{
                  this.itens.push(value); // push esta correto?
              });
          }else{
              this.itens.push({id:null, name:"Nenhum item cadastrado"});
          }
      });
  }
  goToNew() {
    this.router.navigate(['/item/create']);
  }
  goToItem(id:number){
      if(id != null){
          this.router.navigate(['item/read/', id]);
      }
  }

}
