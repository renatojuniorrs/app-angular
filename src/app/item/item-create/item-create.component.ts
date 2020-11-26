
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {

  formulario : FormGroup;
  isSaving: boolean = false;

  constructor(
      private formBuilder:FormBuilder,
      private http: HttpClient,
      private router: Router
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      'item': [null, [Validators.required, Validators.minLength(1), Validators.maxLength(60)]]
    });
  }

  addNew (){
    console.log(this.formulario);
    if(this.formulario.valid){
        this.isSaving = true;

        // service
        this.http.post('http://api.levande.com.br/static/test.php?sleep=1', JSON.stringify(this.formulario.value))
        .subscribe(dados => {
            console.log(dados);
            if(dados.StatusCode == 200){ // Erro ao compilar, mas funciona! :/
                this.isSaving = false;
                alert("Cadastrado com sucesso");
                this.router.navigate(['']);
            }
        });
    }else{
        alert("Por favor usuário, digite corretamente!");
    }

  }

}
