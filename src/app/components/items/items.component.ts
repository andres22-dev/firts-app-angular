import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
//luego de haber creado nuestra clase Item en nuestra carpeta modulos
  //La traemos a el componente items para hacer uso de ella
import {Item} from '../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  //Aqui inicializamos una variable y de tipo le decimos que es tipo Item que
    //Fue objeto que importamos y le asignamos un array vacio
  items:Item[] = [];

  //Creamos una variable con el tipo de dato numero y la inicializamos con 0
  total:number = 0


  constructor() { }

  //Aqui en ngOnInit es donde se crea nuestro componente dentro del ciclo de vida
  ngOnInit(): void {

    //LLamamos a nuestra atributo items que definimos en nuestra clae y le asignamos
      //Un arreglo de objetos y estos objetos tendran la informacion que tiene
        //Nuestra clase Item y podremos asignarle nuevos valores a los atributos
          //De estos objetos
    this.items = [{

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
    
    }];

    this.getTotal();
  }
//Inicializamos nuestra funcion y le pasamos el parametro que va a ser de tipo Item
  deleteItem(item:Item){
    //Llamamos a la variable que contiene un array de objetos la cual vamos a asignarle
      //Una filtracion de sus valor con una funcion que evaluara una condicion
        //Y en base a eso retornara algo
          //Retornara todos los elementos que sean diferentes a el id que estoy
            //Recibiendo por el parametro de la funcion 
    this.items  = this.items.filter(elemento => elemento.id != item.id)
    this.getTotal();


  }

  toggleItem(item:Item){

    this.getTotal();

  }

  getTotal(){

    this.total = this.items
    //Primero filtramos nuestros elementos por los que esten completados
                .filter(item => !item.completed)
    //Luego recorremos cada uno de los elementos con map y multiplicamos cada elemento por
      //Cantidad de elementos * el costo de elementos
                .map(item => item.quantity * item.price)
    //Luego utilizamos reduce para recorrer cada elemento y obtener la cantidad total
      //De el precio de todos mis elementos
        //Reduce recibe un acumulador que es el que guardara el valor final y item
          //Que seria la cantidad de elementos * el precio que tienes
            //Para reducir todo en un solo valor 
                .reduce((acc, item) => acc += item,0)

                console.log(this.total)
  }
}
