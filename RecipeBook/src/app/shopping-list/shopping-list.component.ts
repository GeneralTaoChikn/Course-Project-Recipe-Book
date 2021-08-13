import { Component, OnInit } from '@angular/core';
import { ingridient } from '../shared/ingredient.model';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingridients: ingridient[] =[
    new ingridient('Apples',5),
    new ingridient('wheat',5),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
