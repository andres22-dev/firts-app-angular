import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';
//Importamos el componente de nuestro nueva pagina
import { AdditemComponent} from './components/additem/additem.component';

//Aqui especificaremos nuestras rutas 
const routes: Routes = [

  {
    path:'',
    component: ItemsComponent
  },
  {

    path:'add',
    component: AdditemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
