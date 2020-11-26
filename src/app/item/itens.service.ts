import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItensService {

  constructor(
    private http: HttpClient,
  ) { }


  insert(item: Item, callback?: Function, error?: Function) {
    this.http.post('http://renatojunior.fred.sensetecnic.com/api/public/item/insert', JSON.stringify(item))
      .subscribe(
        dados => {
          if (callback != undefined) {
            callback(dados);
          }
        },
        erro => {
          if (error != undefined) {
            error(erro);
          }
        });
  }

  select(item: Item, callback?: Function, error?: Function) {
    this.http.post('http://renatojunior.fred.sensetecnic.com/api/public/item/select', JSON.stringify(item))
      .subscribe(
        dados => {
          if (callback != undefined) {
            callback(dados);
          }
        },
        erro => {
          if (error != undefined) {
            error(erro);
          }
        });
  }

  selectAll(callback?: Function, error?: Function) {
    this.http.post('http://renatojunior.fred.sensetecnic.com/api/public/itens', JSON.stringify({}))
      .subscribe(
        dados => {
          if (callback != undefined) {
            callback(dados);
          }
        },
        erro => {
          if (error != undefined) {
            error(erro);
          }
        });
  }

  update(item: Item, callback?: Function, error?: Function) {
    this.http.post('http://renatojunior.fred.sensetecnic.com/api/public/item/update', JSON.stringify(item))
      .subscribe(
        dados => {
          if (callback != undefined) {
            callback(dados);
          }
        },
        erro => {
          if (error != undefined) {
            error(erro);
          }
        });
  }

  delete(item: Item, callback?: Function, error?: Function) {
    this.http.post('http://renatojunior.fred.sensetecnic.com/api/public/item/delete', JSON.stringify(item))
      .subscribe(dados => {
        if (callback != undefined) {
          callback(dados);
        }
      },
        erro => {
          if (error != undefined) {
            error(erro);
          }
        });
  }

}
