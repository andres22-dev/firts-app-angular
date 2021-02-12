import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  //Para hacerle saber a este componente que vamos a recibir un objeto
    //Utilizamos el decorador Input
      //Inicializamos nuestra propiedad item que va a recibir un objeto que se llama Item
  @Input() item: Item = new Item();
  //Definimos nuestro evento con el decorador outout
    //Para crear eventos personalizados esto quiere decir que no son de nuestro
      //Componente vamos a decir que es de tipo EventEmitter
        //Este evento va a cargar o a inyectar un tipo de dato entonces
          //Le vamos a agregar el de tipo Item
  //Esto quiere decir que evento se va a activiar y va a tener en su definicion
    //El objeto Item
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter();

  //Vamos a definir un evento nuevo en el cual vamos a actualizar
    //Nuestro checkbost que cuando el check este activo se actualice
      //Nuestro componente de precio
  @Output() toggleItem: EventEmitter<Item> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  //Inicializamos nuestra funcion onDelete que es lo que utilizaremos en el boton
    //Recibe por parametro un item que es tipo Item
      //Lo que haremos es mandar este evento de un componente hijo al padre
        //El cual seria items que es donde esta nuestra fuente de datos
        
  onDelete(item:Item){
    //Llamamos al evento que definimos
      //Lo utilizamos junto con la funcion emit y esto quiere decir que
       //Empiece a emitir este evento y le pasamos por parametro a item
        //Que es el elemento que estamos recogiendo desde el boton
    this.deleteItem.emit(item);
    
  }

  onToggle(item: Item){

    item.completed = !item.completed;
    this.toggleItem.emit(item);



  }


 

}
 