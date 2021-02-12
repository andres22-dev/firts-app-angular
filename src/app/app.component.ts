import { Component } from '@angular/core';

//Cuando vemos una arroba en nuestro codigo significa que son decoradores
  //Los decaradores son metadatos que va utilizara angular en typescript para
    //Poder interpretar mas informacion
      //Pero no necesariamente si no son como "comentarios inteligentes" que solo
        //Los entendera angular y no el navegador
@Component({
  //Aqui estamos insertando nuestro componente en nuestro html 
    //Tiene su nombre su html y su css
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//Aqui estamos exportando una clase llamada appcomponent y no necesamiente debe
 //Llamarse igual que el nombre que le dimos a la etiqueta de nuestro componente
export class AppComponent {
  title = 'Aplicacion de Compras';
}
