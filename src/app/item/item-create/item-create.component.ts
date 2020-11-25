import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {
  
  formulario : FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      'item': [null]
    });
  }

  addNew (){
    console.log(this.formulario);
  }

}
