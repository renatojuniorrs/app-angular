import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-read',
  templateUrl: './item-read.component.html',
  styleUrls: ['./item-read.component.css']
})

export class ItemReadComponent implements OnInit {
  formulario: FormGroup;
  itemId:number; // ID tem que vir number

  constructor(
      private formBuilder:FormBuilder,
      private http: HttpClient,
      private router: Router,
      private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.itemId = this.route.snapshot.params['id'];

      this.formulario = this.formBuilder.group({
        'item': [null, [Validators.required, Validators.minLength(1), Validators.maxLength(60)]],
        'id': [this.itemId, [Validators.pattern(/[0-9]+/)]] // Forma melhor de validar?
      });

      if(!this.formulario.controls.id.valid){
          alert("ID inválido");
          this.router.navigate(['']);
      }
      console.log(this.formulario);
  }

  update(){
      if(this.formulario.valid){

          // service
          this.http.post('http://api.levande.com.br/static/test.php?sleep=1&update', JSON.stringify(this.formulario.value))
          .subscribe(dados => {
              console.log(dados);
              if(dados.StatusCode == 200){ // Erro ao compilar, mas funciona! :/
                  alert("Salvo com sucesso");
              }
          });
      }else{
          alert("Por favor usuário, digite corretamente!");
      }
  }
  delete(){
      this.http.post('http://api.levande.com.br/static/test.php?sleep=1&delete', JSON.stringify({
          "id": this.formulario.controls.id.value
      }))
      .subscribe(dados => {
          console.log(dados);
          if(dados.StatusCode == 200){ // Erro ao compilar, mas funciona! :/
              alert("Excluido com sucesso id = "+this.formulario.controls.id.value);
              this.router.navigate(['']);
          }
      });
  }
}
