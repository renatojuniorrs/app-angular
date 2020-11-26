import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ItensService } from 'src/app/item/itens.service';
import { Item } from '../../models/item';

@Component({
    selector: 'app-tabela',
    templateUrl: './tabela.component.html',
    styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

    itens: Item[] = [

    ];
    constructor(
        private router: Router,
        private http: HttpClient,
        private httpItem: ItensService
    ) { }

    ngOnInit(): void {
        this.httpItem.selectAll(
            (x: Item[]) => {
                this.itens = x;
            },
            (y: any) => {
                console.log(y);
            }
        );
    }
    goToNew() {
        this.router.navigate(['/item/create']);
    }
    goToItem(id: number) {
        if (id != null) {
            this.router.navigate(['item/read/', id]);
        }
    }

}
