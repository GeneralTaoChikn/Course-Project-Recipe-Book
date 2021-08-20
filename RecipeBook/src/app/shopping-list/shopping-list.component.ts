import { Component, OnInit } from '@angular/core';
import { ingridient } from '../shared/ingredient.model';
import { shoppingListService } from './shoppingList.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingridients: ingridient[];

  constructor(private slService: shoppingListService) { }

  ngOnInit(): void {
    this.ingridients = this.slService.getIngridients();
  }


}
