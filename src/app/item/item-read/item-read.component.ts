import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItensService } from '../itens.service';

@Component({
  selector: 'app-item-read',
  templateUrl: './item-read.component.html',
  styleUrls: ['./item-read.component.css']
})

export class ItemReadComponent implements OnInit {
  formulario: FormGroup;
  itemId: number;
  isSaving:boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private httpItem: ItensService
  ) {
    this.itemId = this.route.snapshot.params['id'];
    this.formulario = this.formBuilder.group({
      'name': [null, [Validators.required, Validators.minLength(1), Validators.maxLength(60)]],
      'id': [this.itemId, [Validators.pattern(/[0-9]+/)]] // Forma melhor de validar?
    });

    if (!this.formulario.controls.id.valid) {
      alert("ID inválido");
      this.router.navigate(['']);
    }

    let item: Item = <Item>this.formulario.value;
    this.httpItem.select(
      item,
      (x: Item[]) => {
        item = x[0];
        this.formulario.patchValue({
          'name': item.name
        });
      },
      (y: any) => {
        console.log(y);
      }
    );

    console.log(this.formulario);
  }

  ngOnInit(): void {


  }

  update() {
    if (this.formulario.valid) {
      let item: Item = <Item>this.formulario.value;
      this.isSaving = true;
      this.httpItem.update(
        item,
        (x: any) => {
          console.log(x);
          alert("Salvo com sucesso!");
          this.isSaving = false;
        },
        (y: any) => {
          console.log(y);
          this.isSaving = false;
        }
      );
    } else {
      alert("Por favor usuário, digite corretamente!");
    }
  }

  delete() {
    let item: Item = <Item>this.formulario.value;
    this.isSaving = true;
    this.httpItem.delete(
      item,
      (x: any) => {
        console.log(x);
        alert("Excluído com sucesso!");
        this.isSaving = false;
        this.router.navigate(['']);
      },
      (y: any) => {
        console.log(y);
        this.isSaving = false;
      }
    );
  }
}
