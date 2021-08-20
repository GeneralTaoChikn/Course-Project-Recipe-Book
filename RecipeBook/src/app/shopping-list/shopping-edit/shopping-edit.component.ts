import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ingridient } from 'src/app/shared/ingredient.model';
import { shoppingListService } from '../shoppingList.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput',{static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput',{static: false}) amountInputRef: ElementRef;

  constructor(private slService: shoppingListService) { }

  ngOnInit(): void {

  }
  
  onAddItem() {
      const ingName = this.nameInputRef.nativeElement.value
      const ingAmount = this.amountInputRef.nativeElement.value
      const newIngridient = new ingridient(ingName, ingAmount);
      this.slService.addIngridient(newIngridient);
      
  }

}
