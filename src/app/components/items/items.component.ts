import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import {Item} from '../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items:Item[] = [];


  constructor() { }

  ngOnInit(): void {


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


  }

  deleteItem(item:Item){

    this.items  = this.items.filter(x => x.id != item.id)



  }
}
