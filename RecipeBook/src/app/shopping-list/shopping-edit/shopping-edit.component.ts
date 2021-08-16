import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { ingridient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput',{static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput',{static: false}) amountInputRef: ElementRef;
  @Output() ingredientAdd = new EventEmitter<{name: string, amount: number}>();

  constructor() { }

  ngOnInit(): void {

  }
  
  onAddItem() {
      const newIngridient = new ingridient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
      this.ingredientAdd.emit(newIngridient);
  }

}
