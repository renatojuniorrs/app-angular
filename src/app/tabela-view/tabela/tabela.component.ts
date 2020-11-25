import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  itens:any[] = [
    {name:"Orange"}
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  goToNew() {
    this.router.navigate(['/item/create']);
  }

}
