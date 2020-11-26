
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from '../../models/item';
import { ItensService } from '../itens.service';

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
      private router: Router,
      private httpItem: ItensService
  ) {
    this.formulario = this.formBuilder.group({
      'name': [null, [Validators.required, Validators.minLength(1), Validators.maxLength(60)]]
    });
  }

  ngOnInit(): void {

  }

  addNew (){
    console.log(this.formulario);
    if(this.formulario.valid){
        this.isSaving = true;
        let item:Item = <Item>this.formulario.value;

        this.httpItem.insert(
          item,
          (x:any)=>{
            alert("Cadastrado com sucesso!");
            this.router.navigate(['']);
          },
          (y:any)=>{
            console.log(y);
          }
          );

    }else{
        alert("Por favor usuário, digite corretamente!");
    }

  }

}
