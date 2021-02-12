import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  //Definimos las variables que utilizaremos en nuestros bainding
  id:number = 0;
  title:string= '';
  price:number= 0;
  quantity:number= 0;

  constructor() { }

  ngOnInit(): void {
  }

  //Inicializamos la funcion onsubmit para que envie los datos
  onSubmit(){

    const item = new Item();
    item.id = this.id;
    item.title = this.title;
    item.price = this.price;
    item.quantity = this.quantity;
    item.completed = false;




  }

}
