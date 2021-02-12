//Esto es un servicio que en angular nos sirve para poder acceder a
  //Informacion de forma general sin importar si la informacion esta en un
    //Componente o en otro 
      //Lo que hacemos es poder trasladar esa informacion de forma global para
        //Que no este atada a un componente
    //Porque vimos que cuando hacemos el ruteo no existe items por lo tanto no existe
      //Informacion la cual nosotros podamos enviar un evento para añadir un nuevo dato
import { Injectable } from '@angular/core';
import { Item } from '../models/item';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items:Item[] = []

  constructor() { }

  getItems(){
    this.items =[
        {

        id: 0,
        title: 'manzana',
        price: 10.5,
        quantity: 4,
        completed:false
        },{

        id:1,
        title: 'mango',
        price: 11.4,
        quantity: 3,
        completed:true
  
        }
      ];
    }
  addItem(item:Item){

    this.items.unshift(item);
    this.router.navigate();
  }

    this.item
  }
}
